---
title: "2025: A Year in Review"
summary: "2025 was a year of rebuilding - finding joy again through travel, time with family and friends, and creating things that matter. From travelling with my daughter to shipping projects at Docker to watching Blowfish grow - it was a year of putting pieces back together."
description: "2025 was a year of rebuilding - finding joy again through travel, time with family and friends, and creating things that matter. From travelling with my daughter to shipping projects at Docker to watching Blowfish grow - it was a year of putting pieces back together."
categories: ["Opinion"]
tags: ["year-in-review", "personal", "docker", "blowfish", "open-source", "ai"]
date: 2026-01-22
draft: false
---

2025 was a year of rebuilding. After losing my wife and partner of 20 years in 2024, I became a single parent overnight. This year was about finding my footing again - spending time with friends and family, travelling to new places with my daughter, and rediscovering the joy of being alive and making things.

Some of that making happened at work, some in open source, and some at the kitchen table with a Raspberry Pi and a 7-year-old. But if there's a thread that ties it all together, it's this: the best moments came from building alongside people I care about.

## Docker

The year started with a project I had pitched and nurtured for over a year getting killed. It stung, but the decision made sense - AI was moving fast, Docker wanted to go all in, and they needed people there. I got offered a chance to join the AI team.

> [!quote] When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us. 
> - Alexander Graham Bell

### MCP Catalog

We launched the [Docker MCP Catalog](https://hub.docker.com/mcp) - a curated registry of MCP servers integrated into Docker Hub. The idea was simple: developers want a secure, containerized way to extend their AI agents, not arbitrary code running via `npx` or `uvx` with full system access. The catalog now hosts 220+ containerized MCP servers from partners like Stripe, Elastic, Neo4j, Heroku, Grafana Labs, and more - each with proper isolation and security.

### MCP Toolkit

The [MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) brought the catalog to life inside Docker Desktop. One-click launch of MCP servers, zero manual setup, and automatic connection to clients like Claude, Cursor, and VS Code. It's the fastest path from discovering a tool to actually using it.

### MCP Gateway

We open-sourced the [MCP Gateway](https://github.com/docker/mcp-gateway) - infrastructure that orchestrates MCP servers and handles credentials, OAuth, and access control. It runs automatically in Docker Desktop, meaning millions of developers have it available out of the box.

### cagent

[cagent](https://github.com/docker/cagent) is perhaps the project I'm most proud of - a runtime for building and running AI agents using simple YAML configuration. No code required. Define your agent's persona, tools, and capabilities in a file, and run it. Multi-agent teams, MCP integration, support for all major model providers, and a kickass TUI experience.

{{< github repo="docker/cagent" >}}

### Gordon

And finally, [Gordon](https://docs.docker.com/ai/gordon/) - Docker's AI assistant. We've been rebuilding it from the ground up with cagent at its heart. The new version is currently rolling out to select users as we prep for GA, and I'm genuinely excited to see it in more developers' hands soon.

### Writing and Thinking in Public

I wrote about what we were learning along the way:

- **[MCP Servers: The USB-C Moment for AI Agents](/posts/202504-mcp/)** - My take on why Model Context Protocol is becoming the universal connector for AI. It's standardization enabling an ecosystem, and we're just at the beginning.

- **[Unseen Cost of Growth: Metcalfe's Law at Work](/posts/202504-metacalfes-law/)** - A reflection on organizational complexity that had nothing to do with AI but everything to do with being thoughtful about how teams scale.

## Blowfish

Three years in, [Blowfish](https://blowfish.page) continues to surprise me. What started as a personal Hugo theme because I wanted to build my own website has become something much bigger.

{{< github repo="nunocoracao/blowfish" >}}

### By the Numbers

- **2,600+ stars** on GitHub
- **660 forks**
- **244 contributors**
- **174 releases** since the project began

### 2025 Highlights

This year we shipped 17 releases with some major additions:

- **TailwindCSS v4 upgrade** - a significant modernization effort
- **Tabs shortcode** with icon and grouping options
- **GitHub-style admonitions** - `[!note]`, `[!quote]`, `[!warning]`, etc.
- **Video and Gist shortcodes**
- **GitHub repo thumbnails** in embeds
- **Structured breadcrumbs** for better SEO
- **Thai and Indonesian translations**

The community kept pushing the theme forward - new languages, shortcodes, bug fixes I didn't know existed.

### First Collaborator

In October, I welcomed [@ZhenShuo2021](https://github.com/ZhenShuo2021) as Blowfish's first official collaborator. Building an open-source project can feel solitary - having someone share the maintenance load, review PRs, and help guide direction is invaluable. It marks a new chapter where Blowfish is bigger than just me.

### Blowfish Tools CLI

[Blowfish Tools](https://github.com/nunocoracao/blowfish-tools) - the CLI to scaffold new projects - hit **7,825 downloads in 2025**, up 58% from the year before. January 2026 alone saw over 1,200 downloads. People are actually starting new blogs with Blowfish regularly.

## Building Eva

Some of the most meaningful building happens away from work.

This Christmas holiday, I [built a voice AI companion with my daughter](/posts/202601-building-eva/). We called her **Eva**, after the protagonist in WondLa (a show we've been watching together on Apple TV).

Eva is a pocket-sized robot - a Raspberry Pi Zero with a PiSugar Whisplay HAT - that speaks Portuguese from Portugal (not Brazilian!), has a child-friendly personality, and remembers conversations so my daughter can build a relationship with her over time.

The project started from a YouTube tutorial and became something personal through what I can only call "vibe coding" with Claude. I explained what I wanted in natural language, and together we reshaped the code to create something unique for my daughter.

The moment that made it all worthwhile: my daughter pressing the button, saying "Olá Eva!" - and Eva responding in perfect Portuguese with a voice she picked herself. Twenty minutes of conversation about unicorns followed.

That's the magic of building with your kids. The technical achievement matters less than the moment of wonder.

**Update:** Since that post, Eva got a proper case - and a paint job by my daughter. She's now officially one of a kind.

![Eva with her new case, painted by my daughter](img/eva.webp)

## Afterlight

After losing my wife, I found myself searching for others who truly understood what I was going through. The existing options didn't fit - too public, too cluttered, not designed for grief.

So I started building [Afterlight](https://afterlight.club) - a safe, anonymous, text-only platform for grief support. No photos, no videos, no algorithms pushing content. Just people connecting through shared experience, using pseudonyms, at their own pace.

For now, I've paused development. A few reasons: I don't have enough time and need to prioritize. I couldn't figure out how to reach people who need it - marketing to grieving people is (understandably) blocked by almost every platform. And I don't have a monetization plan that doesn't feel weird, which means I can't afford to keep it running if costs grow.

Maybe I'll come back to it. Maybe not. But I learned a lot building it.

## Beyond Code

Not everything worth mentioning fits neatly into a GitHub repo.

**Mentoring.** I worked with 4 mentees through [MentorCruise](https://mentorcruise.com/mentor/nunocorao/) this year - all of them navigating career transitions in product management. Watching them prepare, interview, and land the PM roles they wanted was genuinely rewarding. There's something special about helping someone get to the next stage when you remember how hard that climb felt.

**Reading.** I read 15 books this year - not as many as I'd like, but enough to find some gems. Favorites included *[There Is No Antimemetics Division](https://www.goodreads.com/book/show/54870256-there-is-no-antimemetics-division)* (a mind-bending SCP Foundation story that stayed with me for weeks), *[Project Hail Mary](https://www.goodreads.com/book/show/54493401-project-hail-mary)* (Andy Weir at his best), and *[Tokyo Express](https://www.goodreads.com/book/show/59238510-tokyo-express)* (Matsumoto's classic that reminded me how much I love Japanese crime fiction).

## What I Learned

**Rebuilding takes time.** There's no shortcut through grief, no hack for becoming a single parent overnight. You just show up, day after day, and eventually the days start to feel less heavy. Progress isn't linear, and that's okay.

**Be kind to yourself.** I spent too much of this year pushing through when I should have rested. You can't pour from an empty cup. Learning to slow down, to say no, to let some things be good enough - that's not weakness, it's survival.

**Know when to pause.** Afterlight taught me that not every project needs to be finished. Sometimes the timing isn't right, the resources aren't there, or you simply need to prioritize. Pausing isn't failing.

**Open source is community.** Blowfish isn't successful because I'm a great developer (I'm not). It's successful because 244 people cared enough to contribute. That's humbling and motivating.

**Build with the people you love.** Eva taught me more about what matters than any work project. Watching my daughter talk to a robot she helped create - that's the stuff that sticks with you.

## Looking Forward to 2026

I don't do predictions nor new year resolutions. But I want to keep building things that matter, spend more time with the people I love, and enjoy to the fullest the time I have here.

Here's to 2026.
