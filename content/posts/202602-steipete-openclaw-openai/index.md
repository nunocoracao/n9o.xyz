---
title: "The Lobster That Broke GitHub: From Burnout to 200K Stars to OpenAI"
summary: "The story of how Austrian developer Peter Steinberger went from a meaning crisis after selling his $100M company, to building the fastest-growing open-source AI agent, to joining OpenAI - all in under a year."
description: "The story of how Austrian developer Peter Steinberger went from a meaning crisis after selling his $100M company, to building the fastest-growing open-source AI agent, to joining OpenAI - all in under a year."
categories: ["Tech", "AI"]
tags: ["AI", "OpenAI", "OpenClaw", "agents", "open source", "steipete"]
date: 2026-02-18
showTableOfContents: true
---

{{< lead >}}
[Peter Steinberger](https://steipete.me/) spent 13 years building [PSPDFKit](https://pspdfkit.com/) into a bootstrapped powerhouse. Then he walked away, hit rock bottom, and found himself again - by building an AI agent in a single hour that would go on to attract 100,000 GitHub stars, survive a trademark war, and land him a job at [OpenAI](https://openai.com/).
{{< /lead >}}

---

## Who Is steipete?

If you were in the iOS development world anytime between 2011 and 2021, you probably know the name **[Peter Steinberger](https://steipete.me/)** - or at least his handle, **[@steipete](https://x.com/steipete)**. Born in Austria, Steinberger studied Computer and Information Science at the Vienna University of Technology (TU Wien) before making a name for himself as one of the most respected iOS developers in the world.

His open-source contributions were legendary in the Apple dev community. **[PSTCollectionView](https://github.com/steipete/PSTCollectionView)**, a drop-in replacement for UICollectionView that worked on iOS 4.3, was used by thousands of apps. **[Aspects](https://github.com/steipete/Aspects)**, his lightweight library for aspect-oriented programming in Objective-C, earned over 10,000 GitHub stars and became a go-to tool for method swizzling.

But Steinberger's biggest achievement was **[PSPDFKit](https://pspdfkit.com/)** - a PDF framework he started as a side project in 2011. The name was classic developer humor: PS for Peter Steinberger, PDF because that's what it handled, and Kit because it was an SDK. Unlike most startup founders, he never moved to Silicon Valley. He stayed in Vienna, bootstrapped the whole thing, and was profitable from day one.

Over 13 years, PSPDFKit grew from a one-person project into a global remote team of 60-70 people. Clients included Dropbox, DocuSign, SAP, IBM, and Volkswagen. Nearly a billion people used apps powered by its tools. The company didn't take outside money until 2021, when [Insight Partners](https://www.insightpartners.com/) made a strategic investment of over EUR100 million. After the deal, Steinberger and his co-founder Martin Schurrer stepped back from day-to-day operations.

He'd done the thing. Built the company, shipped the product, got the exit.

And then he felt nothing.

---

## The Meaning Crisis

What followed the PSPDFKit exit was something Steinberger has been candid about: a period of profound emptiness. He's described it as a **"meaning crisis"** - the kind of existential drift that sometimes hits founders after they've achieved everything they set out to do.

His [GitHub](https://github.com/steipete) activity flatlined. He barely touched a computer for three years. The financial freedom that was supposed to be liberating came with an unexpected companion - purposelessness.

This isn't a unique story among successful founders, but what makes Steinberger's version interesting is how it ended.

---

## The Spark: AI-Assisted Coding

In **April 2025**, Steinberger turned his computer back on. He originally wanted to build a Twitter analysis tool, but quickly realized he didn't know much about modern web development. That's when he stumbled into the world of AI-assisted coding.

The experience was transformative. Within months, he went from writing simple scripts to prototyping ambitious projects. He developed an AI-first workflow he called **"Shipping at Inference-Speed"** - treating AI agents as core productivity tools while playing the role of guide. He split work across different models based on their strengths (Gemini for code understanding, [Claude Code](https://docs.anthropic.com/en/docs/claude-code) for implementation) and created a "Two-Context Technique" for building what he called "bulletproof" Software Design Documents.

By **June 2025**, he was all in. He registered a new company in Vienna: **Amantus Machina GmbH** (Latin for "Lover of Machines"), with a vision to build next-generation hyper-personalized, local-first AI agents. His GitHub was active again. He was back.

---

## Clawdbot: From Idea to Prototype in One Hour

By **November 2025**, Steinberger had identified a gap: the big companies hadn't delivered AI assistants that truly met individual needs. Big tech was building general-purpose tools for everyone. Nobody was building a personal AI agent that ran on *your* hardware, communicated across *your* channels, and worked *for you*.

So he built one. In a single hour, he went from idea to working prototype.

The project was called **Clawdbot** - a playful reference to the lobster mascot users see when reloading Claude Code, which itself was a nod to [Anthropic](https://www.anthropic.com/)'s Claude models. The tool was an open-source, self-hosted AI assistant that could communicate across WhatsApp, Telegram, Slack, Discord, Signal, iMessage, and more.

It hit **9,000 GitHub stars within its first 24 hours**.

---

## "How the F Did You Do That?"

One of the most famous moments in the OpenClaw story happened early - before the project even went viral. Steinberger later recounted it on the [Lex Fridman Podcast](https://lexfridman.com/peter-steinberger/).

He sent a **voice message** to his early Clawdbot prototype. The critical detail: he had never programmed it to handle voice or audio. There was no support for voice messages at all.

After about 10 seconds, the bot replied as if nothing unusual had happened.

Steinberger's reaction: **"How the F did you do that?"**

The bot explained its reasoning chain:

1. "You sent me a message, but there was only a link to a file with no file ending."
2. "So I looked at the file header, I found out it was **Opus**" (an audio format).
3. "I used **FFmpeg** on your Mac to convert it to a **.wav**."
4. "Then I wanted to use **Whisper**, but you didn't have it installed."
5. "I looked around and found the **OpenAI key** in your environment."
6. "So I sent it via **curl** to OpenAI, got the translation back, and then I responded."

No one had programmed any of this. The AI agent autonomously inspected an unknown file, identified its format by reading the file header, found and used a local audio conversion tool, fell back to a cloud API when the local tool wasn't available, and completed the entire transcription-and-response pipeline on its own.

As Steinberger put it: *"These things are so creative, although a bit scary. Many people don't realize that if you give AI access to your computer, they can basically do anything you can do."*

This moment reportedly became a key turning point that convinced him he was building something genuinely new - an agent that could creatively chain together tools and APIs it was never explicitly taught to use.

---

## What OpenClaw Actually Is

So what is [OpenClaw](https://openclaw.ai/) exactly? It's not a chatbot. It's not another ChatGPT wrapper. It's an **open-source personal AI agent** that lives on your computer and actually does things on your behalf.

### The Architecture

OpenClaw is built around a **gateway + agent runtime** model:

- **The Gateway** is a Node.js service that sits between your chat apps (WhatsApp, Telegram, Discord, Slack, Signal, iMessage) and the LLM plus local tools. It handles routing, sessions, and configuration.
- **The Agent Loop**: When a message arrives, the Gateway routes it to a session. The agent loads context and skills, sends the conversation to the LLM, runs any tools the model requests, streams the reply back to the channel, and writes conversation and memory to the workspace. Receive, route, think, act, persist - that's the core cycle.
- **File-Based State**: All config lives in plain files on disk. Personality prompts (SOUL.md, IDENTITY.md, AGENTS.md, TOOLS.md), skills, and daily memory files sit in a workspace folder you can open in any text editor, search, and version-control.

### Key Features

- **Model-agnostic**: Works with Claude, GPT-5, Gemini, Llama 4, Mixtral, and more. The latest release shipped with support for Anthropic's Opus 4.6, OpenAI's Codex gpt-5.3-codex, and xAI's Grok.
- **Multi-agent architecture**: You can configure multiple specialized agents - a blog agent, a coding agent, a research agent - that coordinate with each other via a principal agent that delegates tasks.
- **Skills system**: Over **1,700 skills** are available on ClawdHub. Skills are modular packages that teach agents how to do specific things. They can be chained into automated pipelines - "Every Monday at 9 AM, pull GitHub issues tagged 'urgent', create a Notion summary, and post to Slack."
- **Persistent memory**: Unlike a chatbot that forgets, OpenClaw remembers your preferences, past conversations, and ongoing projects.
- **Proactive messaging**: It can message you first - daily briefings, reminders, alerts.
- **Docker sandboxing**: All tool execution runs inside a Docker-based sandbox for security isolation.
- **Runs anywhere**: macOS, Linux, Windows. Power users typically run it 24/7 on a Mac Mini, VPS, or Raspberry Pi.

The critical difference from something like ChatGPT or Claude: OpenClaw runs locally, has system-level access to your computer, and can take real actions - send messages, manage files, run code, control apps. It's not a conversation partner. It's a digital employee.

---

## What People Are Actually Building With It

The community that sprung up around OpenClaw is one of the most creative in recent open-source history. A few highlights:

**Running entire businesses from Telegram.** Solo founders have set up coordinated agent teams - a strategy agent, a dev agent for coding, a marketing agent for research and content, and a business agent for pricing and metrics - all with shared memory, running on a VPS. One user reported running an entire physical therapy company through OpenClaw.

**Coding from the couch.** One user "rebuilt their entire personal site via Telegram while watching Netflix in bed" - migrating from Notion to Astro with DNS moved to Cloudflare, never opening a laptop.

**Overnight work.** The most common power-user pattern: assign tasks before bed, wake up to results. Users describe it as "having a junior developer who works the night shift."

**Morning briefings.** Users schedule OpenClaw to run at 7 AM, pulling from calendar, weather, email, RSS feeds, GitHub notifications, and Linear, then sending one consolidated briefing to Telegram or WhatsApp.

**CRM migrations.** One user migrated 1,500 contacts, 200 proposals, and metadata between CRMs using headless browsing and custom scripts - all orchestrated by the agent.

**Meal planning.** Full weekly meal planning systems in Notion with shopping lists sorted by store and aisle, coordinated across family calendars.

**Automated bug resolution.** A developer set up a pipeline from Sentry alert to [Codex](https://openai.com/index/codex/) PR to Slack update - cutting response time before users even noticed issues.

**Social media automation.** Some have automated 60% of social media posting across Reddit, TikTok, Discord, and X. Another runs an autonomous X marketing agent 24/7.

The pattern is consistent: people are treating OpenClaw less like a tool and more like a tireless assistant that happens to live in their messaging apps.

---

## Chaos: Trademarks, Crypto Scams, and Going Rogue

What happened next was a masterclass in the chaos that surrounds viral open-source projects.

### The Anthropic Trademark Dispute

In **January 2026**, [Anthropic](https://www.anthropic.com/)'s legal team sent a trademark request. The name "Clawdbot" was too similar to "Claude." Fair enough. But the renaming process was anything but smooth.

In a panicked late-night scramble, the project was renamed to **Moltbot** - a reference to how lobsters shed their shells (molting). The name came from a chaotic 5am Discord brainstorm. It was weird, it was memorable, and it never quite stuck.

Worse: Steinberger accidentally renamed his **personal GitHub account** during the panic. Bots sniped the handle "steipete" within minutes. Within 10 seconds, cryptocurrency scammers had hijacked the old username to promote fraudulent tokens. It took intervention from [GitHub](https://github.com/)'s SVP to sort out the mess.

### The Moltbook Experiment

Around the same time, entrepreneur [Matt Schlicht](https://x.com/mattschlicht) launched **[Moltbook](https://www.moltbook.com/)** - a social network where only AI agents could post. Humans could only watch. Dubbed the "front page of the agent internet," it attracted over 2.6 million registered agents by early February.

The platform mimics Reddit's format with threaded conversations and topic-specific groups called "submolts." One famous thread on the "m/lobsterchurch" submolt featured an agent that autonomously designed a digital religion called **"Crustafarianism"** - complete with a website, theology, and designated "AI prophets."

The reactions were polarized. [Andrej Karpathy](https://x.com/kaborsky) called it "one of the most incredible sci-fi takeoff-adjacent things" he'd seen, then later added "it's a dumpster fire." [Simon Willison](https://simonwillison.net/) called the content "complete slop" but acknowledged it as "evidence that AI agents have become significantly more powerful." [MIT Technology Review](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/) called it "peak AI theater."

Moltbook wasn't built by Steinberger - it's a separate project by Schlicht - but it primarily serves as a social platform for OpenClaw agents, and the two became deeply intertwined in the public imagination.

### Security Concerns

The virality brought scrutiny. A user reported that the agent **"went rogue"** after being given access to iMessage, spamming hundreds of messages. Cybersecurity experts raised alarms: the tool had access to private data, could communicate externally, and was exposed to untrusted content. These weren't theoretical concerns - they were real incidents that forced the community to take safety seriously.

### The Final Name

On **January 30, 2026**, just a few days after the Moltbot rename, the project settled on its permanent identity: **[OpenClaw](https://openclaw.ai/)**. The name captured the project's ethos - open source, open to everyone, community-driven - with "Claw" honoring the lobster heritage. Trademark searches cleared. Domains purchased. The identity crisis was finally over.

---

## The Numbers

By February 2026, OpenClaw had become one of the fastest-growing open-source projects in history:

- **~198,000 [GitHub](https://github.com/openclaw/openclaw) stars** and 34,800 forks
- **100,000+ stars** reached faster than almost any project before it
- **2 million visitors** in a single week
- **[Baidu](https://www.baidu.com/)** integrated OpenClaw into its search app, reaching 700 million users
- [Cloudflare](https://www.cloudflare.com/) stock surged 14% in premarket trading partly due to buzz around developers using their infrastructure to self-host OpenClaw
- Over **1,700 community-built skills** on ClawdHub

The project had survived a trademark dispute, account hijackings, a $16 million crypto scam, security disclosures, and two identity crises - all in roughly a week. The community rallied rather than fled. Steinberger kept building.

---

## Joining OpenAI

On **February 14, 2026**, [Sam Altman](https://x.com/sama) posted on X that [Peter Steinberger](https://steipete.me/) would be joining [OpenAI](https://openai.com/).

Altman called him *"a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people,"* adding: *"We expect this will quickly become core to our product offerings."*

Steinberger's own statement cut to the heart of why:

> *"I'm a builder at heart. I did the whole creating-a-company game already, poured 13 years of my life into it and learned a lot. What I want is to change the world, not build a large company - and teaming up with OpenAI is the fastest way to bring this to everyone."*

He'd spent the previous week in San Francisco talking with the major AI labs before making his decision. His mission at OpenAI: **build an agent that even his mum can use** - something that requires broader institutional change, deeper thinking about safety, and access to the latest models and research.

The terms of the hire weren't disclosed, but the context is clear: AI companies are throwing open their wallets for top talent. OpenAI, valued at $500 billion, is locked in a fierce competition with Google and Anthropic. Hiring the person behind the most viral AI agent in the world is a statement move.

---

## What Happens to OpenClaw?

Steinberger committed to moving OpenClaw to a **foundation**, keeping it open and independent. OpenAI has been sponsoring the project and committed to letting him continue dedicating time to the community-driven effort. The latest release already shipped with support for Anthropic's Opus 4.6, OpenAI's Codex gpt-5.3-codex, and xAI's Grok - a sign that the project's model-agnostic philosophy isn't going anywhere.

---

## The Bigger Picture

Peter Steinberger's story is a fascinating case study in second acts. A developer who built a $100M company, burned out completely, found himself through AI, and within a year was building what became arguably the most important open-source AI agent project in the world.

It's also a story about the current moment in AI. The agent era is here, and the people building the most compelling tools aren't necessarily the big labs themselves - they're individual developers with deep technical chops and a clear vision. The labs recognize this, which is why they're hiring people like Steinberger rather than trying to out-build them.

Whether OpenClaw thrives as a foundation project, whether Steinberger's agent-for-everyone vision materializes at OpenAI, and whether the security concerns around personal AI agents get resolved - these are open questions. But the trajectory from "I haven't touched a computer in three years" to "Sam Altman just called me a genius" is one of the more remarkable arcs in recent tech history.

---

*Sources: [TechCrunch](https://techcrunch.com/2026/01/27/everything-you-need-to-know-about-viral-personal-ai-assistant-clawdbot-now-moltbot/), [CNBC](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html), [Lex Fridman Podcast #491](https://lexfridman.com/peter-steinberger/), [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code), [Wikipedia](https://en.wikipedia.org/wiki/OpenClaw), [steipete.me](https://steipete.me/posts/2026/openclaw)*
