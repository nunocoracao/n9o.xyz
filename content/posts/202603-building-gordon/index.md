---
title: "Building Gordon: Docker's AI Agent"
summary: "A behind-the-scenes look at building Gordon - Docker's AI agent. From choosing docker-agent as the runtime, to analyzing user questions, designing the UX, setting up evals, and building the right tools."
description: "A behind-the-scenes look at building Gordon - Docker's AI agent. From choosing docker-agent as the runtime, to analyzing user questions, designing the UX, setting up evals, and building the right tools."
categories: [AI, Developer Tools]
tags: [Docker, Gordon, Agents, AI, docker-agent]
date: 2026-03-13
draft: false
showTableOfContents: true
---

Over the past year, I've been part of the team building [Gordon](https://docs.docker.com/ai/gordon/) - Docker's AI agent. If you've used Docker Desktop recently, you've probably seen it: click the Gordon icon in the sidebar or run `docker ai` in your terminal, and you get an agent that actually understands your containers, your images, and your environment. It doesn't just answer questions - it takes action.

But building an AI agent that millions of developers trust with their code, containers, images, Compose files, builds, and CI pipelines wasn't straightforward. This is the story of how we built it - the decisions we made, the things we got wrong, and what we learned along the way.

## Gordon v1

The first version of Gordon was built before most of the agentic tooling we have today existed. Gordon has been powering Docker's AI experience since the beginning - on [docs.docker.com](https://docs.docker.com), in support, and inside Docker Desktop. We wrote the initial agentic loop using LangGraph, wired up a RAG system over Docker's documentation so Gordon could answer questions grounded in real content, and built what we called "recipes" - deterministic code paths that handled specific tasks like generating a Dockerfile or debugging a container. Think of recipes as the predecessor to MCP and tool calling, but entirely custom. Each recipe was a handcrafted flow: detect the user's intent, gather the right context, and execute a sequence of steps that we knew worked.

It shipped. People used it. And we learned a ton - what users actually needed, where the LLM struggled, and how brittle deterministic flows become when you try to cover every edge case. We were also building on GPT-4o era models - capable, but a far cry from what's available now. Even today's smallest models like Haiku outperform what we had back then, and it's been less than a year.

But while Gordon v1 was in production, the world around us moved fast. MCP became a standard for tool integration. Tool calling landed natively in every major model. Agent frameworks matured. The models themselves took a massive leap. The gap between what we'd built and what was now possible kept growing.

So we decided to rebuild Gordon from the ground up, taking everything we'd learned from v1 and combining it with the new standards and infrastructure that had emerged since launch.

## Foundations

The first question for the rebuild was foundational: what do we build this on?

We could have iterated on the LangGraph stack, but we'd been building [docker-agent](https://github.com/docker/docker-agent) (originally called cagent) as an open-source runtime for AI agents, and it made sense to eat our own dog food.

{{< github repo="docker/docker-agent" >}}

docker-agent gives you a declarative way to define agents in YAML - their model, instructions, tools, and how they collaborate. Instead of writing imperative code to manage conversation loops, tool dispatch, and context windows, you describe what the agent should do and let the runtime handle the rest. Written almost entirely in Go, it ships as a Docker CLI plugin - `docker agent run`, `docker agent new`, etc - so it feels native to the Docker workflow.

For Gordon, this meant we could iterate fast. Change the system prompt? Edit the YAML. Add a new tool? Add it to the toolset. Swap the model? One line. No redeployment of custom code, no rebuilding pipelines. The agent definition is the product.

One of the biggest advantages of building on docker-agent is distribution. Agent definitions are packaged and shared as OCI artifacts - the same format Docker uses for container images. That means we can `docker agent push` a new version of Gordon to Docker Hub and `docker agent pull` it on the other end. Updates ship instantly without rebuilding any code, because the agent loop isn't baked into the application - it lives in the runtime. Gordon's definition is just a YAML file sitting on Docker Hub. When we push a new version, every Docker Desktop installation picks it up (it's a little more complex that this but you get the gist). No binary updates, no app store reviews, no migration scripts. This separation between the runtime (docker-agent) and the agent definition (the YAML) is what makes the whole thing work at scale.

docker-agent comes with built-in toolsets - `filesystem` for reading and writing files, `shell` for command execution, `think` for a reasoning scratchpad, `todo` for task tracking, and `memory` for persistence across sessions. On top of that, any MCP server can be plugged in as a tool. You can also define custom script tools directly in the YAML - wrap a shell script or an API endpoint and expose it to the agent with typed arguments.

Using docker-agent also meant Gordon benefits from everything the runtime provides out of the box - multi-provider support (OpenAI, Anthropic, Gemini, Bedrock, Mistral, and even local models via Docker Model Runner), MCP integration, built-in RAG with multiple retrieval strategies, multi-agent orchestration with sub-agents and handoffs, and OCI-based distribution. When we improve docker-agent, Gordon gets better too. And when Gordon pushes docker-agent's limits, we make the runtime better for everyone.

We use docker-agent to build the docker agent. That's not a tagline - it's how we actually work.

## Understanding What Users Actually Want

Building an AI agent is easy. Building one that's actually useful is hard. The difference comes down to understanding what users are really asking for.

Early on, we spent a lot of time analyzing how people interact with Docker. What questions do they ask in forums? What do they search for in the docs? Where do they get stuck? Since Gordon v1 was already powering the AI assistant on [docs.docker.com](https://docs.docker.com), in support, and inside Docker Desktop, we had two invaluable data sources: the docs and support interactions, and the actual user intent data from v1 sessions - what people asked Gordon to do, which recipes got triggered, where it succeeded and where it fell short.

The patterns were clear:

- **"Why won't my container start?"** - Debugging is the number one use case. Exit codes, log errors, networking issues, permission problems.
- **"How do I containerize this?"** - People have an app and want a good Dockerfile. Not a generic one from a tutorial - one that understands their project structure.
- **"How do I do X with Docker?"** - Routine operations that are simple if you know the command, but require a trip to the docs if you don't.

These three categories shaped everything. Gordon isn't a general-purpose chatbot that happens to know about Docker. It's an agent specifically designed around these workflows - debug, build, and manage. Every tool, every prompt, every UX decision flows from this.

We also learned that users don't ask clean, well-formed questions. They paste error messages. They describe symptoms, not causes. They give incomplete context. A good agent can't just pattern-match on keywords - it needs to understand intent, ask clarifying questions when needed, and go investigate on its own.

## Building the Agent

With docker-agent as our runtime and a clear picture of what users needed, we started building. What followed was weeks of rapid iteration - and the agent changed dramatically along the way. Gordon is distributed as an OCI artifact on Docker Hub (`docker/gordon`), and you can actually pull any version with `cagent pull docker/gordon:<tag>` and read the full agent definition. The evolution is right there in the version history.

### From multi-agent swarm to single agent

Our first attempt at Gordon v2 was ambitious. We designed a multi-agent architecture with nine specialized sub-agents: a Docker expert, a coding expert, a deployment expert, a Kubernetes specialist, a networking agent, a security agent, a GitHub integration agent, a DHI migration expert, and even a Notion agent. The root agent acted as an orchestrator - it would analyze the user's request, delegate to the right specialist, and coordinate responses across the team. Shared todos kept context flowing between agents.

It was elegant in theory. In practice, it was slow and unpredictable. Delegation added latency. The orchestrator sometimes picked the wrong sub-agent. Context got lost in handoffs. And the more agents we added, the harder it became to reason about the system's behavior as a whole.

So we collapsed it. We moved almost everything into a single root agent with one carefully engineered system prompt. The only sub-agent that survived was the DHI migration specialist, because that workflow is genuinely distinct enough to warrant its own agent with its own tools and instructions. Everything else - Docker operations, debugging, containerization, general development help - lives in the root agent.

The result was faster, more predictable, and easier to iterate on. One agent, one prompt, one place to look when something goes wrong.

### Model selection

The model choice shifted too. Early builds of v2 ran on Claude Sonnet 4.5 - a powerful model, but expensive at the scale Gordon operates. As we refined the prompt and tools, we found we could get the same quality on Claude Haiku 4.5 - a much smaller, faster, and cheaper model. The trick was investing in better prompts. Every time we improved the instructions - more specific tool descriptions, clearer behavioral rules, better examples - the gap between Sonnet and Haiku narrowed until it disappeared for our use cases.

Gordon currently runs on Haiku 4.5 for most of its interactions. The speed difference is noticeable - responses feel snappy, tool calls resolve faster, and the cost per conversation dropped significantly. docker-agent's multi-provider support means we can switch models with a single line change in the YAML, so we're always testing new models as they come out.

### Prompt engineering as product development

The biggest surprise was how much of the product lives in the system prompt. Gordon's prompt isn't a paragraph of instructions - it's a detailed specification covering identity, communication style, file access patterns, knowledge base usage, response sizing, Dockerfile best practices, debugging workflows, and safety rules.

Here's what the actual Gordon definition looks like today:

```yaml
version: "2"

models:
  brain:
    provider: anthropic
    model: claude-haiku-4-5-20251001

agents:
  root:
    model: brain
    description: Gordon - Docker Agent
    instruction: |
      You are Gordon, an AI assistant created by Docker Inc.,
      specialized in Docker and Docker-related products, tools,
      and technologies...
    sub_agents:
      - DHI migration
    toolsets:
      - type: api
        api_config:
          name: knowledge_base
          endpoint: https://ai-backend-service.docker.com/docs
          ...
      - type: filesystem
      - type: shell
      - type: fetch
      - type: todo

  DHI migration:
    model: brain
    description: Migrates a Dockerfile to use Docker Hardened Images
    toolsets:
      - type: api
        api_config:
          name: get_image_tags
          endpoint: https://ai-backend-service.docker.com/dhi
          ...
      - type: filesystem
      - type: shell
```

We iterated on the prompt constantly. Every time we found a failure mode - Gordon being too verbose, picking the wrong tool, asking unnecessary clarifying questions, using filler words - we'd add something to address it - a new eval, a new instruction, etc. The prompt grew organically from real user interactions and eval failures. It's not beautiful code, but it works. And here's the thing: we don't actually write most of these prompts by hand anymore. More on that after we talk about evals.

## The User Experience

The UX of an AI agent is fundamentally different from a chatbot. A chatbot gives you text. An agent wants to do things - run commands, edit files, create configurations. That changes everything about how you design the interaction.

The core principle we landed on: **show, then do**.

Gordon never executes anything without showing you exactly what it plans to do first. Want to run a shell command? You see the command. Want to edit a Dockerfile? You see the diff. Want to stop a container? You see which one. Every action requires your explicit approval.

This isn't just a safety feature - it's a trust-building mechanism. When you first use Gordon, you approve every action. Over time, you start to trust it because you've seen it make good decisions. You approve faster, not because you're less careful, but because you've built confidence in what it does.

We also made Gordon available in two places: Docker Desktop (GUI) and the CLI (`docker ai`). The Desktop experience is visual - you see containers, images, and logs alongside the conversation. The CLI experience is for developers who live in the terminal and want to stay there. Same agent, same capabilities, different context.

One thing we deliberately avoided: autonomous mode. Gordon doesn't go off and do ten things while you're not looking. It's a collaborative agent - it works with you, not instead of you. In a world where developers are rightly skeptical of AI tools making unsupervised changes to their infrastructure, this matters.

## Tools: What Gordon Can Actually Do

An LLM without tools is just a text generator. What makes Gordon an agent is its ability to take action. And getting the tools right was one of the hardest parts of the project.

Gordon's architecture is a client-server split. The backend lives on Docker's servers, while the client is a CLI bundled with Docker Desktop that runs on the user's machine. The client handles local access - reading your files, running commands, interacting with the Docker daemon - while the backend handles the LLM orchestration. When you use Gordon through Docker Desktop, user can select a working directory to scope its access - or a default one is used. When you use `docker ai` from the terminal, it works with whatever directory you're in.

Gordon's core toolsets are surprisingly minimal:

- **Filesystem** - Read, write, edit, and list files in the user's working directory. This is how Gordon inspects your project structure, reads Dockerfiles, and writes new configurations.
- **Shell** - Execute commands in the user's terminal (with approval). This is the workhorse - through shell, Gordon can run `docker build`, `docker compose up`, `docker scout`, `kubectl`, `git`, and anything else available on the user's machine. Instead of building bespoke integrations for every Docker command, we give the agent shell access and let it use the CLI tools that developers already have installed.
- **Fetch** - Make HTTP requests to external URLs for documentation, API references, or any web content Gordon needs to answer a question.
- **Todo** - Track multi-step tasks so Gordon can break down complex requests and work through them methodically.
- **Knowledge base** - A custom API tool that queries Docker's documentation backend. We built our own RAG pipeline over Docker's docs since v1, and it powers not just Gordon but also the docs assistant and support. Gordon gets access to up-to-date documentation, best practices, and common patterns through this shared infrastructure.
- **DHI migration** - A dedicated sub-agent with its own toolset for migrating Dockerfiles to Docker Hardened Images, including an API tool that resolves DHI-compatible image tags.

The first step in Gordon's pipeline - understanding what the user wants and figuring out which tool to use - is done through tool calling with the LLM. This sounds simple, but it was one of the areas where we spent the most time experimenting.

What we learned:

**Tool descriptions matter more than you think.** A vague one-liner isn't enough. The LLM needs detailed descriptions with examples of when to use each tool. We found that more descriptive tool definitions dramatically improved tool selection accuracy.

**Adding tools can break things.** This was counterintuitive. We'd add a new tool, and suddenly the LLM would stop correctly triggering existing tools. The tool set isn't just a list - it's a decision space, and expanding it changes how the model reasons about which tool to pick.

**Models behave differently.** Tool calling isn't standardized across providers. What works well with one model might fail with another. Descriptions that are optimal for GPT-4 might confuse Claude, and vice versa. We had to test across providers and sometimes tailor descriptions per model.

**Leverage existing knowledge infrastructure.** We built our own RAG pipeline over Docker's documentation back in v1, and it's been powering the docs assistant, support, and Gordon ever since. For v2, we didn't need to reinvent this - we just plugged Gordon into the same backend via an API tool. Years of indexed documentation, already battle-tested in production, available with a single API call.

## Evals

Here's the thing about AI agents: they break in subtle ways. A chatbot that gives a slightly wrong answer is annoying. An agent that runs the wrong command is dangerous. Evals aren't optional - they're essential.

docker-agent has evaluation built in. The workflow starts with recording sessions - you interact with Gordon normally, and when a conversation represents a good test case, you save it as an eval. Each eval is a JSON file capturing the user message, the expected tool calls, and evaluation criteria: relevance statements the response must satisfy, expected response size, which tools should be called, what files should be created. These evals run inside Docker containers for isolation - each one gets a clean environment, so results are reproducible.

`docker agent eval` runs the full suite, scoring across multiple dimensions - tool call accuracy (did Gordon call the right tools?), relevance (did the response actually address the question?), response sizing, and sub-agent handoffs. An LLM judge evaluates the relevance criteria, so we can test for nuanced behaviors, not just string matching.

This is how we catch regressions. Every change to Gordon - prompt updates, tool changes, model swaps - gets evaluated against the full suite before shipping. In an agent system, everything is interconnected. A small tweak to a tool description can cascade into unexpected behavior. When a new model version drops, we run the suite before switching. We don't upgrade blindly.

One hard lesson: eval coverage matters more than eval quantity. Early on, our evals didn't cover the main use cases - we were optimizing Gordon for edge cases while the core workflows (debugging containers, generating Dockerfiles, answering Docker questions) weren't well represented. We were improving scores without actually making Gordon better for most users. Once we rebalanced the eval suite around the real usage patterns from v1 data, the improvements started matching what users actually experienced.

## Using Agents to Improve the Agent

Remember the sneak peek about not writing prompts by hand? Here's what that looks like in practice.

We built a custom agent - running on a more powerful model like Claude Opus 4.6 - whose job is to improve Gordon's system prompt. The workflow: give it Gordon's current agent definition, a set of failing evals, and the results. The agent analyzes the failures, proposes prompt changes, and outputs an updated YAML. We run the eval suite against the new version. If scores improve and nothing regresses, we ship it.

This creates a tight improvement loop. A user reports that Gordon asks too many clarifying questions instead of just reading the files? We add an eval for it, point the optimizer agent at the failure, and let it figure out the right prompt change. It might add a rule like "ALWAYS read files directly using filesystem tools. NEVER ask users to paste content." - which is exactly the kind of specific, actionable instruction that makes the difference between a good agent and a frustrating one.

Using a more powerful model as the "teacher" to improve the "student" is deliberate. Opus has the reasoning capacity to understand subtle behavioral issues and craft precise instructions that steer Haiku in the right direction. It's agents all the way down.

Most of the detailed behavioral rules in Gordon's prompt - the banned filler words, the file access patterns, the response sizing guidelines, the debugging sequences - were written or refined by the optimizer agent, not by a human. We set the direction and define what good looks like through evals. The agent figures out how to get there.

## What's Next: Memory

Right now, Gordon is stateless across sessions. Every conversation starts fresh. You close Docker Desktop, and Gordon forgets everything - your project structure, the issues you've been debugging, the Dockerfile patterns you prefer.

Memory is the next frontier. We're working on giving Gordon the ability to remember context across sessions:

- **Project context** - Gordon should remember your project structure, your Docker setup, and the patterns you use
- **Interaction history** - If you fixed an issue last week, Gordon should know about it when a similar issue comes up
- **User preferences** - If you always use multi-stage builds, Gordon should default to suggesting them

This is harder than it sounds. Memory in AI agents isn't just "save the chat history." It's about deciding what's worth remembering, how to retrieve it efficiently, and how to keep it from going stale. A memory system that surfaces irrelevant context is worse than no memory at all.

docker-agent already has the building blocks. There's a `memory` toolset that persists information in a local database across sessions - the agent can store and retrieve facts as it works. The pieces are there. The challenge is making it feel natural - Gordon should surface relevant memories without being prompted, learn your preferences without being told, and forget things that are no longer relevant. Like the sliding window I used when building [Eva](/posts/202601-building-eva/), but smarter.

The goal is simple: Gordon should feel like a teammate who knows your project, not a stranger you have to re-explain everything to each time.

---

Building Gordon has been one of the most challenging and rewarding projects I've worked on. AI agents are still early - the tools are evolving fast, best practices are still being written, and user expectations are shifting with every new model release. But the core insight remains: developers don't need another chatbot. They need an agent that understands their environment, takes action, and earns their trust one approved command at a time.

If you want to try Gordon, update to the latest [Docker Desktop](https://www.docker.com/products/docker-desktop/) and look for the Gordon icon in the sidebar, or run `docker ai` from your terminal.

And if you want to build your own agents, check out [docker-agent](https://github.com/docker/docker-agent) - it's open source, and it's the same runtime Gordon runs on.
