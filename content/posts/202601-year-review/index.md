---
title: "2025: A Year in Review"
summary: "Looking back at a year defined by AI agents, open source growth, and building things with the people I love. From shipping cagent at Docker to watching Blowfish cross 2,500 stars to building a robot companion with my daughter—2025 was a year of creation."
description: "Looking back at a year defined by AI agents, open source growth, and building things with the people I love. From shipping cagent at Docker to watching Blowfish cross 2,500 stars to building a robot companion with my daughter—2025 was a year of creation."
categories: ["Opinion"]
tags: ["year-in-review", "personal", "docker", "blowfish", "open-source", "ai"]
date: 2026-01-04
draft: false
---

2025 was a year of building. Not just shipping features or closing tickets—but genuinely building things that matter. Products at work, open source projects on nights and weekends, and a little robot companion with my 7-year-old daughter.

If there's a theme that ties it all together, it's this: **AI agents went from "interesting experiment" to "daily reality."** And I happened to be in the middle of it—both as a product manager at Docker and as someone who can't stop tinkering.

## The Day Job: Docker and the Rise of AI Agents

This was the year AI agents became real infrastructure. Not just demos, not just research papers—but tools that developers actually use in production.

At Docker, I had the privilege of working on some of the most exciting projects in this space:

### Launching the Docker MCP Catalog

In the first half of the year, we launched the [Docker MCP Catalog](https://hub.docker.com/mcp)—a curated registry of Model Context Protocol (MCP) servers designed to be the secure way to discover and run AI tools.

{{< github repo="docker/mcp-registry" >}}

The response was overwhelming. In just weeks, we crossed **1 million pulls**. It validated something we'd been betting on: developers want a secure, containerized way to extend their AI agents. Running arbitrary code via `npx` or `uvx` with full system access isn't sustainable. Docker's decade of experience with container security gave us a unique position to solve this.

The catalog now hosts servers across data integration, developer tools, communication platforms, and more—each with cryptographic signatures, SBOMs, and proper isolation.

### Open-Sourcing cagent

Perhaps the project I'm most proud of this year was [cagent](https://github.com/docker/cagent)—a runtime for AI agents that makes orchestration as simple as running a container.

{{< github repo="docker/cagent" >}}

We asked a simple question: what if running agents could be as easy, portable, and reliable as running containers? The answer became cagent—a CLI and runtime that lets you define, run, and share agents using YAML configuration. Multi-agent teams, MCP tool integration, support for all major model providers, and the ability to push agents to Docker Hub like any other image.

Since we open-sourced it in September, cagent has grown to **1,800+ stars** and a community of contributors building agent configurations for everything from development teams to research assistants.

The best part? Watching developers use `cagent new` to describe an agent in plain English and get a working configuration in seconds. That's the developer experience we aimed for.

### The MCP Gateway

We also shipped the [MCP Gateway](https://github.com/docker/mcp-gateway)—infrastructure that lets agents connect to MCP servers more securely and seamlessly. It's now bundled with Docker Desktop, meaning millions of developers have it available out of the box.

### Writing and Thinking in Public

I wrote about what we were learning along the way:

- **[MCP Servers: The USB-C Moment for AI Agents](/posts/202504-mcp/)** — My take on why Model Context Protocol is becoming the universal connector for AI. It's standardization enabling ecosystem, and we're just at the beginning.

- **[Unseen Cost of Growth: Metcalfe's Law at Work](/posts/202504-metacalfes-law/)** — A reflection on organizational complexity that had nothing to do with AI but everything to do with being thoughtful about how teams scale.

## Open Source: Blowfish Keeps Growing

Three years in, [Blowfish](https://blowfish.page) continues to surprise me. What started as a personal Hugo theme has become something much bigger.

{{< github repo="nunocoracao/blowfish" >}}

### By the Numbers

- **2,500+ stars** on GitHub
- **647 forks**
- **242 contributors**
- **16 releases** in 2025
- **173 total releases** since the project began

The community added support for new languages, contributed shortcodes, fixed bugs I didn't know existed, and kept pushing the theme forward in ways I never planned.

### A Milestone: First Collaborator

In October, I welcomed [@ZhenShuo2021](https://github.com/ZhenShuo2021) as Blowfish's first official collaborator. Building an open-source project can feel solitary—having someone share the maintenance load, review PRs, and help guide direction is invaluable. It marks a new chapter where Blowfish is bigger than just me.

### Blowfish Tools CLI

We also shipped [Blowfish Tools](https://github.com/nunocoracao/blowfish-tools)—a CLI to scaffold new projects with a single command. It's now averaging **600+ downloads per month** on npm, which means people are actually starting new blogs with Blowfish regularly.

## Maker Projects: Building Eva

Some of the most meaningful building happens away from work.

This Christmas holiday, I built a voice AI companion with my daughter Teresa. We called her **Eva**, after the protagonist in WondLa (a show we've been watching together on Apple TV).

Eva is a pocket-sized robot—a Raspberry Pi Zero with a PiSugar Whisplay HAT—that speaks Portuguese from Portugal (not Brazilian!), has a child-friendly personality, and remembers conversations so Teresa can build a relationship with her over time.

The project started from a YouTube tutorial and became something personal through what I can only call "vibe coding" with Claude. I explained what I wanted in natural language, and together we reshaped the code to create something unique for Teresa.

The moment that made it all worthwhile: Teresa pressing the button, saying "Olá Eva!"—and Eva responding in perfect Portuguese with a voice she picked herself. Twenty minutes of conversation about unicorns followed.

That's the magic of building with your kids. The technical achievement matters less than the moment of wonder.

## Beyond Code

Not everything worth mentioning fits neatly into a GitHub repo.

**Reading.** I read 15 books this year—not as many as I'd like, but enough to find some gems. Favorites included *There Is No Antimemetics Division* (a mind-bending SCP Foundation story that stayed with me for weeks), *Project Hail Mary* (Andy Weir at his best), and *Tokyo Express* (Matsumoto's classic that reminded me how much I love Japanese crime fiction).

**Mentoring.** I worked with 4 mentees through [MentorCruise](https://mentorcruise.com/mentor/nunocorao/) this year—all of them navigating career transitions in product management. Watching them prepare, interview, and land the PM roles they wanted was genuinely rewarding. There's something special about helping someone get to the next stage when you remember how hard that climb felt.

**Audience.** The writing and open source work translated into some growth: LinkedIn went from 2,479 to 3,242 followers (+31%), and Twitter/X grew from 308 to 367 (+19%). Not viral numbers, but steady progress. More importantly, the conversations that came from those platforms—questions about Blowfish, feedback on articles, people sharing what they built—made the effort worthwhile.

## What I Learned

**AI agents are infrastructure now.** Not science projects. Not demos. Real tools that developers use to ship real products. The question isn't whether agents will transform software—it's how fast and in what ways.

**Open standards win.** MCP's rapid adoption (OpenAI, Microsoft, Google Cloud, and hundreds of community implementations) shows that when the ecosystem aligns on a shared interface, everyone moves faster. Write once, serve many.

**Open source is community.** Blowfish isn't successful because I'm a great developer (I'm not). It's successful because 242 people cared enough to contribute. That's humbling and motivating.

**Build with the people you love.** Eva taught me more about AI's potential than any enterprise deployment. Watching a 7-year-old interact naturally with a robot companion—that's the future. And building it together made it meaningful.

## Looking Forward to 2026

I don't do predictions, but I have intentions:

- **Keep shipping at Docker.** The agent ecosystem is moving fast, and there's more to build.
- **Grow Blowfish sustainably.** More collaborators, better documentation, features the community actually needs.
- **Write more.** This blog has been sporadic. I want to be more consistent about thinking in public.
- **Build more with Teresa.** Eva needs a proper case, wake word detection, and better memory. And Teresa already has ideas for Eva's "sister."

I'm also juggling a few new side projects that I'm genuinely excited about: **Afterlight**, **Pangu**, **Odin**, and something in the music tech space that I'm not ready to talk about yet. A year ago, running four experimental projects in parallel would've been impossible—I'd have abandoned three of them by February. But AI has fundamentally changed how I build. I can context-switch between projects, pick up where I left off, and make meaningful progress on each without losing momentum. It's not about working more hours—it's about making better use of the hours I have.

## Thank You

To my team at Docker—for letting me work on things I genuinely believe in.

To the Blowfish community—every star, issue, PR, and discussion keeps me going.

To the folks who've bought me coffee, sponsored the project, or just sent kind messages—your support is real and it matters.

And to Teresa—for reminding me that the best things we build are the ones we share with people we love.

Here's to 2026. Let's keep building.

---

*What did you build this year? I'd love to hear about it—reach out on [GitHub](https://github.com/nunocoracao) or [LinkedIn](https://www.linkedin.com/in/nunocoracao/).*
