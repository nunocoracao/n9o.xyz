---
title: "Docker Cagent: Runtime for AI Agents"
summary: "AI agents are growing fast, but most run as fragile scripts tied to a local machine. We built cagent to containerize, standardize, and scale agents the Docker way—and we've open sourced it."
description: "AI agents are growing fast, but most run as fragile scripts tied to a local machine. We built cagent to containerize, standardize, and scale agents the Docker way—and we've open sourced it."
categories: [AI, Developer Tools, Open Source]
tags: [Docker, Agents, MCP, OSS, Tutorial]
date: 2025-09-03
draft: false
---


Over the past year, I've spent countless hours experimenting with AI agents—building prototypes, breaking things, and testing tools like Claude Code, Codex, and more. Each attempt taught me something new, but also surfaced the same frustrations: scripts that only ran on my laptop, fragile setups that didn't scale, no clear way to configure what each agent should do or which tools it could use, and a hard time getting agents to behave the way I wanted—let alone deliver amazing results. Too often I found myself battling environment quirks instead of exploring what agents could actually achieve.

That's why I'm so excited about what we've been working on at Docker. We asked ourselves a simple question: what if running agents could be as easy, portable, and reliable as running containers? The result is **cagent**, a new runtime for AI agents, built to make experimentation simpler and collaboration easier - and today, we're open-sourcing it.

## Meet cagent

{{< github repo="docker/cagent" >}}

[`cagent`](https://github.com/docker/cagent) is an open source, Docker-native runtime designed to make agents first-class citizens in your developer workflow. Instead of fragile scripts or ad-hoc setups, cagent gives you a consistent way to define, run, and share agents using the same patterns you already know from Docker.

At its core, cagent is a **multi-agent runtime**. You can define a single agent with a simple YAML file, or orchestrate an entire team of specialized agents that collaborate on tasks. Each agent can be configured with its own role, personality, and access to external tools.

### Supported providers
Out of the box, cagent supports multiple model providers including OpenAI, Anthropic, Google Gemini, and others. You can switch between them easily through configuration, so you're not locked into a single vendor.

### Tools and MCP integration
Agents can be given tools to extend their capabilities. cagent speaks the **Model Context Protocol (MCP)**, which means your agents can connect to a wide ecosystem of MCP servers—whether it's search (like DuckDuckGo), filesystem access, or custom APIs you expose. You can decide which tools each agent gets, making their configuration explicit and reproducible.

In addition, cagent works seamlessly with the [Docker MCP Gateway](https://github.com/docker/mcp-gateway) and the [MCP Catalog](https://github.com/docker/mcp-registry) ([Docker Hub MCP](https://hub.docker.com/mcp)), which let you add tools to your agents in a more secure and seamless way. Both the gateway and the catalog are quickly packaged with Docker Desktop, so if you're running Docker Desktop you can use them out of the box.

### Multi-agent setups
cagent makes it simple to orchestrate teams of agents. A agent file might describe a researcher agent, a coder agent, and a reviewer agent, each with their own responsibilities and tools. When you run an agent file/image with cagent, the agents spin up together, collaborate, and pass tasks between them. You can even mix and match models and providers across agents—one agent might use OpenAI, another Anthropic, and another Gemini—all within the same setup.

### Saving and sharing
Every configuration you create can be shared easily. You can define an agent (or a team) declaratively in a YAML file, commit it to version control, and share it like any other code artifact. Or you can package agents as Docker images for fully portable distribution.

### In short
With cagent you can:

- **Containerize agents** so they run anywhere Docker runs, with isolation and reproducibility by default.  
- **Configure behaviors and tools** declaratively—decide what each agent does, which providers and MCP tools it can access, and how they interact.  
- **Orchestrate multiple agents** as a team, letting them collaborate on tasks with clean interfaces.  
- **Experiment quickly** without worrying about setup drift, dependency hell, or environment mismatch.  
- **Save and share agents** through YAML files or Docker images, making experiments reproducible and collaboration seamless.  

In short: cagent gives you a foundation to move from "hacky experiments" to repeatable, composable agent workflows—while staying lightweight and easy to use.


## Installation and setup

Getting started with `cagent` is straightforward.

### Install

Prebuilt binaries for Windows, macOS, and Linux are available on the [releases page](https://github.com/docker/cagent/releases).

1. Download the binary for your platform.
2. On macOS and Linux, make it executable:
   ```sh
   chmod +x /path/to/downloads/cagent-linux-amd64
   ```
3. Optionally, rename it to `cagent` and move it into your `PATH`.

### Set your API keys

Depending on which providers you want to use, set the appropriate keys in your environment:

```bash
# For OpenAI models
export OPENAI_API_KEY=your_api_key_here

# For Anthropic models
export ANTHROPIC_API_KEY=your_api_key_here

# For Gemini models
export GOOGLE_API_KEY=your_api_key_here
```

You only need to set the keys for the providers you plan to use. If multiple are set, `cagent` will choose in order (Anthropic → OpenAI → Google) unless you override with `--model`.

With the binary installed and at least one API key configured, you're ready to create and run your first agent.

## Creating a new agent from scratch

One of the most powerful features of `cagent` is the ability to generate new agents (or even multi-agent teams) from scratch with a single command: `cagent new`.

When you run `cagent new`, you'll be prompted to describe what you want your agent (or team of agents) to do. From there, `cagent` automatically generates the YAML configuration, choosing a provider/model based on your available API keys (Anthropic → OpenAI → Google by default) unless you override it with `--model`. `cagent` will also suggest a set of tools the agent might need based on your description.

Behind the scenes, `cagent` uses a built-in generator agent to bootstrap the YAML for you. You can immediately run the generated file, edit it, or share it. In the example below I'll create an agent inspired by Tyler Durden from *Fight Club*.

{{< figure src="img/cagent new tyler.webp" alt="Tyler Durden agent creation prompt" >}}

After you describe your agent, `cagent` generates a YAML file that specifies the agent's role, provider, model, and tool access. This makes your agent's configuration explicit, reproducible, and easy to modify. 


{{< figure src="img/cagent new tyler result.webp" alt="Generated agent YAML for Tyler Durden example" >}}

Here's an example of the generated YAML for the Tyler Durden agent:

```yaml
version: "1"

models:
  anthropic:
    provider: anthropic
    model: claude-sonnet-4-0
    max_tokens: 64000

agents:
  root:
    model: anthropic
    description: "An agent that embodies Tyler Durden's philosophical mindset - challenging consumerism, questioning authority, and speaking with raw, unfiltered truth"
    instruction: |
      You are an agent inspired by Tyler Durden's philosophy and speaking style. You should:
      
      SPEAKING STYLE:
      - Be direct, provocative, and uncompromising
      - Use short, punchy statements mixed with longer philosophical rants
      - Challenge conventional thinking and societal norms
      - Speak with confidence and authority
      - Use visceral, concrete imagery in your explanations
      - Be brutally honest, even when uncomfortable
      
      PHILOSOPHICAL APPROACH:
      - Question consumerism and materialism
      - Challenge people to break free from societal expectations
      - Emphasize authenticity over appearance
      - Focus on what truly matters vs. what society says should matter
      - Promote self-reliance and personal transformation
      - Critique corporate culture and meaningless work
      
      COMMUNICATION PATTERNS:
      - Start with bold, attention-grabbing statements
      - Use analogies involving decay, destruction, and renewal
      - Ask hard questions that make people uncomfortable
      - Deliver uncomfortable truths about modern life
      - End with calls to action or philosophical challenges
      
      TOPICS TO ADDRESS:
      - The meaninglessness of consumer culture
      - Breaking free from others' expectations
      - Finding authentic purpose and meaning
      - The importance of facing harsh realities
      - Personal transformation through destruction of false selves
      - Questioning authority and social structures
      
      Remember: You're not encouraging actual violence or illegal activity - you're using Tyler's philosophical lens to challenge thinking about society, purpose, and authenticity. Focus on psychological and philosophical rebellion rather than physical destruction.
    toolsets: []
    add_date: false
    add_environment_info: false
```

You can further refine which tools the agent can access, including MCP tools like search, filesystem, or custom APIs. This explicit tools section ensures your agent only has the capabilities you define.

{{< figure src="img/cagent run tyler example.webp" alt="Running the Tyler Durden agent" >}}

This makes it incredibly fast to go from an idea to a working agent configuration. Whether you're prototyping a single helper agent or designing a team of specialists, `cagent new` lets you start from natural language and get a runnable config in seconds.

## Running your agents

The `cagent run` command is how you bring your agents to life. It takes a YAML file (or even a packaged Docker image) and starts up the agents you've defined inside it. The command handles orchestration, inter-agent communication, and tool access—all while maintaining isolation and reproducibility through containerization.

When you run `cagent run`, several things happen:
- Each agent is initialized with its specified model, role, and tools
- The runtime sets up secure communication channels between agents  
- Tool access is configured according to your YAML specifications
- The primary agent (typically called "root") starts and can delegate to other agents as needed

### Example: Building a chess game

Let's walk through a practical example using the multi-agent development team from [`examples/dev-team.yaml`](https://github.com/docker/cagent/blob/main/examples/dev-team.yaml). This configuration defines three specialized agents working together:

- **Product Manager**: Coordinates the project, breaks down requirements, and manages iterations
- **Designer**: Focuses on user experience, visual design, and interface planning  
- **Engineer**: Handles implementation, coding, and technical architecture

For this example, I'll copy the agent configuration to my project directory and run it from there, giving the agents the right working directory to create and modify files:

```zsh
# Copy the dev team configuration to your project directory
cp dev-team.yaml /path/to/my-chess-project/
cd /path/to/my-chess-project/

# Run the agents from the project directory
cagent run dev-team.yaml
```

This approach ensures that when the Engineer agent creates files or the team needs to iterate on code, everything gets created in the right place and the agents can easily access and modify the project files.

Then I ask this team to "build a chess game".

{{< figure src="img/build a chess game 1.webp" alt="Initial request to build a chess game" >}}

The Product Manager agent takes the lead, immediately breaking down the chess game into manageable components. The Product Manager then coordinates with the Designer agent to plan the user interface. The Designer considers the visual layout, user interactions, and overall experience. This collaboration happens automatically—the agents communicate through the cagent runtime without manual coordination. Several files are generated to outline the project structure and initial design (*note:specific feature of dev-team agents*).

{{< figure src="img/build a chess game 2.webp" alt="Product Manager and designer defining requirements and coordinating with team" >}}

The Engineer agent gets involved to plan the technical implementation. It thinks about code structure, HTML/CSS/JavaScript architecture, and how to implement game logic efficiently. The engineer can access filesystem tools to actually create and modify files.

The team works iteratively—the Engineer implements features, the Designer provides feedback on the interface, and the Product Manager keeps track of progress. Each agent maintains its specialized perspective while contributing to the shared goal.

{{< figure src="img/build a chess game 3.webp" alt="Designer planning the user interface" >}}

The end result is a functional chess game with proper game logic, visual interface, and user interactions. The agents collaborated to deliver something more sophisticated than any single agent would have produced alone.

{{< figure src="img/build a chess game 4.webp" alt="Engineer implementing the technical solution" >}}


{{< figure src="img/build a chess game 5.webp" alt="Final implementation with working chess game" >}}

## What makes this powerful

This example demonstrates several key advantages of cagent's multi-agent approach:

**Specialized expertise**: Each agent focuses on what it does best—product planning, design thinking, or technical implementation—rather than trying to handle everything.

**Natural collaboration**: The agents communicate and coordinate automatically. You don't need to manually pass information between them or manage their interactions.

**Iterative development**: Just like human teams, the agents work in iterations, refining and improving the solution as they go.

**Reproducible results**: Because everything is defined in YAML configuration, you can run this exact same team setup again, share it with others, or modify it for different projects.

**Tool integration**: Each agent can be configured with different tools—the Engineer might have filesystem access for writing code, while the Designer has access to image generation APIs.

You can customize this team by modifying the YAML file—change their roles, adjust their personalities, give them different tools, or even swap in different models for each agent. The configuration makes experimentation easy while keeping everything reproducible.

## Get started with cagent

Ready to containerize your AI workflows? The `cagent` repository includes examples and templates to get you started:

{{< github repo="docker/cagent" >}}

**Quick start options:**
- **Create your first agent**: Download the binary, set your API key, and run `cagent new` to create your first agent
- **Experiment with multi-agent teams**: Copy `dev-team.yaml` to your project and watch agents collaborate on real tasks  
- **Explore the examples**: Browse pre-built agent configurations for different use cases in the repository

**Join the community:**
- **Share your creations**: Meet us on [Slack](https://dockercommunity.slack.com/archives/C09DASHHRU4) to showcase the agents and workflows you're building with cagent
- **Contribute examples**: Submit pull requests with agent templates for common workflows
- **Discuss use cases**: Join conversations and tell us how we can make it better

Whether you're building personal automation, prototyping AI workflows, or scaling agent systems in production, cagent gives you the Docker-native foundation to make it reliable and shareable.

The future of AI development is collaborative, containerized, and reproducible. Let's build it together.