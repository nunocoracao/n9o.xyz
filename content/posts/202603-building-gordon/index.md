---
title: "Building Gordon: How We Built Docker's AI Agent"
summary: "A behind-the-scenes look at building Gordon — Docker's AI agent. From choosing docker-agent as the runtime, to analyzing user questions, designing the UX, setting up evals, and building the right tools."
description: "A behind-the-scenes look at building Gordon — Docker's AI agent. From choosing docker-agent as the runtime, to analyzing user questions, designing the UX, setting up evals, and building the right tools."
categories: [AI, Developer Tools]
tags: [Docker, Gordon, Agents, AI, docker-agent]
date: 2026-03-13
draft: false
showTableOfContents: true
---

Over the past year, I've been part of the team building [Gordon](https://docs.docker.com/ai/gordon/) — Docker's AI agent. If you've used Docker Desktop recently, you've probably seen it: click the Gordon icon in the sidebar or run `docker ai` in your terminal, and you get an agent that actually understands your containers, your images, and your environment. It doesn't just answer questions — it takes action.

But building an AI agent that millions of developers trust with their Docker workflows wasn't straightforward. This is the story of how we built it — the decisions we made, the things we got wrong, and what we learned along the way.

## Why docker-agent

The first question was foundational: what do we build this on?

We could have started from scratch — a custom Python script, a LangChain app, or something entirely bespoke. But we'd been building [docker-agent](https://github.com/docker/docker-agent) (originally called cagent) as an open-source runtime for AI agents, and it made sense to eat our own dog food.

docker-agent gives you a declarative way to define agents in YAML — their model, instructions, tools, and how they collaborate. Instead of writing imperative code to manage conversation loops, tool dispatch, and context windows, you describe what the agent should do and let the runtime handle the rest. Written almost entirely in Go, it ships as a Docker CLI plugin — `docker agent run`, `docker agent new`, `docker agent push` — so it feels native to the Docker workflow.

For Gordon, this meant we could iterate fast. Change the system prompt? Edit the YAML. Add a new tool? Add it to the toolset. Swap the model? One line. No redeployment of custom code, no rebuilding pipelines. The agent definition is the product.

```yaml
agents:
  root:
    model: openai/gpt-5-mini
    description: "Docker's AI agent"
    instruction: |
      You are Gordon, Docker's AI assistant...
    toolsets:
      - type: filesystem
      - type: shell
      - type: think
      - type: mcp
        ref: docker:docker-engine
```

docker-agent comes with built-in toolsets — `filesystem` for reading and writing files, `shell` for command execution, `think` for a reasoning scratchpad, `todo` for task tracking, and `memory` for persistence across sessions. On top of that, any MCP server can be plugged in as a tool. You can also define custom script tools directly in the YAML — wrap a shell script or an API endpoint and expose it to the agent with typed arguments.

Using docker-agent also meant Gordon benefits from everything the runtime provides out of the box — multi-provider support (OpenAI, Anthropic, Gemini, Bedrock, Mistral, and even local models via Docker Model Runner), MCP integration, built-in RAG with multiple retrieval strategies, multi-agent orchestration with sub-agents and handoffs, and OCI-based distribution so you can `docker agent push` and `docker agent pull` agents like container images. When we improve docker-agent, Gordon gets better too. And when Gordon pushes docker-agent's limits, we make the runtime better for everyone.

We use docker-agent to build docker-agent. That's not a tagline — it's how we actually work.

## Understanding What Users Actually Want

Building an AI agent is easy. Building one that's actually useful is hard. The difference comes down to understanding what users are really asking for.

Early on, we spent a lot of time analyzing how people interact with Docker. What questions do they ask in forums? What do they search for in the docs? Where do they get stuck? We had a head start here because Docker already uses [kapa.ai](https://www.kapa.ai/) for the AI-powered docs assistant on [docs.docker.com](https://docs.docker.com). That meant we had real data on what developers actually need help with.

The patterns were clear:

- **"Why won't my container start?"** — Debugging is the number one use case. Exit codes, log errors, networking issues, permission problems.
- **"How do I containerize this?"** — People have an app and want a good Dockerfile. Not a generic one from a tutorial — one that understands their project structure.
- **"How do I do X with Docker?"** — Routine operations that are simple if you know the command, but require a trip to the docs if you don't.

These three categories shaped everything. Gordon isn't a general-purpose chatbot that happens to know about Docker. It's an agent specifically designed around these workflows — debug, build, and manage. Every tool, every prompt, every UX decision flows from this.

We also learned that users don't ask clean, well-formed questions. They paste error messages. They describe symptoms, not causes. They give incomplete context. A good agent can't just pattern-match on keywords — it needs to understand intent, ask clarifying questions when needed, and go investigate on its own.

## The User Experience

The UX of an AI agent is fundamentally different from a chatbot. A chatbot gives you text. An agent wants to do things — run commands, edit files, create configurations. That changes everything about how you design the interaction.

The core principle we landed on: **show, then do**.

Gordon never executes anything without showing you exactly what it plans to do first. Want to run a shell command? You see the command. Want to edit a Dockerfile? You see the diff. Want to stop a container? You see which one. Every action requires your explicit approval.

This isn't just a safety feature — it's a trust-building mechanism. When you first use Gordon, you approve every action. Over time, you start to trust it because you've seen it make good decisions. You approve faster, not because you're less careful, but because you've built confidence in what it does.

We also made Gordon available in two places: Docker Desktop (GUI) and the CLI (`docker ai`). The Desktop experience is visual — you see containers, images, and logs alongside the conversation. The CLI experience is for developers who live in the terminal and want to stay there. Same agent, same capabilities, different context.

One thing we deliberately avoided: autonomous mode. Gordon doesn't go off and do ten things while you're not looking. It's a collaborative agent — it works with you, not instead of you. In a world where developers are rightly skeptical of AI tools making unsupervised changes to their infrastructure, this matters.

## Tools: What Gordon Can Actually Do

An LLM without tools is just a text generator. What makes Gordon an agent is its ability to take action. And getting the tools right was one of the hardest parts of the project.

Gordon's architecture is a client-server split. The backend lives on Docker's servers, while the client is a CLI bundled with Docker Desktop that runs on the user's machine. The client handles local access — reading your files, running commands, interacting with the Docker daemon — while the backend handles the LLM orchestration. When you use Gordon through Docker Desktop, it asks for a working directory to scope its access. When you use `docker ai` from the terminal, it works with whatever directory you're in.

Gordon has access to:

- **Shell execution** — Run commands in your terminal (with approval)
- **Filesystem access** — Read and write project structures, configs, logs, Dockerfiles
- **Docker Engine** — Direct interaction with the Docker daemon (inspect, logs, stats, exec, build, compose)
- **Docker Scout** — Security scanning and vulnerability analysis for your images
- **Kubernetes** — Integration for container orchestration workflows
- **Docker knowledge base** — Documentation, best practices, and common patterns via kapa.ai's RAG
- **MCP servers** — Extensible via `gordon-mcp.yml`, a Docker Compose file that configures additional MCP servers as Compose services

The first step in Gordon's pipeline — understanding what the user wants and figuring out which tool to use — is done through tool calling with the LLM. This sounds simple, but it was one of the areas where we spent the most time experimenting.

What we learned:

**Tool descriptions matter more than you think.** A vague one-liner isn't enough. The LLM needs detailed descriptions with examples of when to use each tool. We found that more descriptive tool definitions dramatically improved tool selection accuracy.

**Adding tools can break things.** This was counterintuitive. We'd add a new tool, and suddenly the LLM would stop correctly triggering existing tools. The tool set isn't just a list — it's a decision space, and expanding it changes how the model reasons about which tool to pick.

**Models behave differently.** Tool calling isn't standardized across providers. What works well with one model might fail with another. Descriptions that are optimal for GPT-4 might confuse Claude, and vice versa. We had to test across providers and sometimes tailor descriptions per model.

**kapa.ai was a force multiplier.** For Docker-specific knowledge retrieval, we use kapa.ai rather than building our own RAG pipeline. Docker already had years of high-quality documentation indexed through kapa.ai for the docs assistant. Plugging Gordon into the same system meant we got accurate, up-to-date Docker knowledge without building and maintaining a custom retrieval system. What would have taken months to build internally, we had working in weeks.

## Evals: Making Sure It Actually Works

Here's the thing about AI agents: they break in subtle ways. A chatbot that gives a slightly wrong answer is annoying. An agent that runs the wrong command is dangerous. Evals aren't optional — they're essential.

We built our evaluation approach around three layers:

### Deterministic session recording

The hardest thing about testing AI agents is non-determinism. The same prompt can produce different tool calls, different reasoning, different results. docker-agent solves this with a VCR-style session recording system. In recording mode (`--record`), the runtime proxies requests to real AI providers and captures the full request/response cycle into a YAML cassette file. In replay mode (`--fake`), incoming requests are matched against the cassette and served from cache — zero API calls, millisecond execution, fully deterministic.

If the agent's execution diverges — different prompt, different tool call, different sequence — the run fails. This catches regressions instantly. Record an expensive test once, then replay it across iterations. Share cassette files to reproduce bugs. It works across all providers — OpenAI, Anthropic, Google, Mistral, xAI.

### Structured evals with promptfoo

For evaluating quality at scale, we use [promptfoo](https://www.promptfoo.dev/) for YAML-based evaluations with assertions. You define test cases with expected behaviors and run them against the agent. Assertions range from simple (`contains`, `not-contains`) to sophisticated — `llm-rubric` uses an LLM as a judge, `similar` does embedding-based semantic similarity, and `factuality` checks against ground truth. You can even write custom assertions in JavaScript or Python.

This is how we validate tool selection accuracy, knowledge correctness, and end-to-end task completion. Given a user question, does Gordon pick the right tool? When it answers a Docker question using the knowledge base, is the answer correct? We run hundreds of real user questions through these evals.

### Regression testing across changes

The eval suite — `docker agent eval` — runs on every change. Not just model changes — prompt changes, tool changes, even description changes. In an agent system, everything is interconnected. A small tweak to a tool description can cascade into unexpected behavior.

When a new model version drops, we run the full suite before switching. Models aren't interchangeable — a model update can change tool calling behavior, response format, or reasoning patterns. We don't upgrade blindly.

We also run safety evals: Gordon should never execute without approval, never suggest destructive operations without clear warnings, and never access files outside the configured working directory.

## What's Next: Memory

Right now, Gordon is stateless across sessions. Every conversation starts fresh. You close Docker Desktop, and Gordon forgets everything — your project structure, the issues you've been debugging, the Dockerfile patterns you prefer.

Memory is the next frontier. We're working on giving Gordon the ability to remember context across sessions:

- **Project context** — Gordon should remember your project structure, your Docker setup, and the patterns you use
- **Interaction history** — If you fixed an issue last week, Gordon should know about it when a similar issue comes up
- **User preferences** — If you always use multi-stage builds, Gordon should default to suggesting them

This is harder than it sounds. Memory in AI agents isn't just "save the chat history." It's about deciding what's worth remembering, how to retrieve it efficiently, and how to keep it from going stale. A memory system that surfaces irrelevant context is worse than no memory at all.

docker-agent already has the building blocks. There's a `memory` toolset that persists information in a local database across sessions — the agent can store and retrieve facts as it works. And the built-in RAG system supports multiple retrieval strategies: chunked embeddings for semantic search, BM25 for keyword matching, and fusion strategies like Reciprocal Rank Fusion to combine them. You can even add a reranking step with custom criteria.

```yaml
toolsets:
  - type: memory

rag:
  sources:
    - path: ./project-docs
      strategies:
        - type: chunked-embeddings
          model: openai/text-embedding-3-small
        - type: bm25
      fusion:
        type: rrf
```

The pieces are there. The challenge is making it feel natural — Gordon should surface relevant memories without being prompted, learn your preferences without being told, and forget things that are no longer relevant. Like the sliding window I used when building [Eva](/posts/202601-building-eva/), but smarter.

The goal is simple: Gordon should feel like a teammate who knows your project, not a stranger you have to re-explain everything to each time.

---

Building Gordon has been one of the most challenging and rewarding projects I've worked on. AI agents are still early — the tools are evolving fast, best practices are still being written, and user expectations are shifting with every new model release. But the core insight remains: developers don't need another chatbot. They need an agent that understands their environment, takes action, and earns their trust one approved command at a time.

If you want to try Gordon, update to the latest [Docker Desktop](https://www.docker.com/products/docker-desktop/) and look for the Gordon icon in the sidebar, or run `docker ai` from your terminal.

And if you want to build your own agents, check out [docker-agent](https://github.com/docker/docker-agent) — it's open source, and it's the same runtime Gordon runs on.

{{< github repo="docker/docker-agent" >}}
