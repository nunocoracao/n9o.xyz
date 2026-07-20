---
title: "Meet Friday: The Assistant I Built on Ground I Own"
summary: "After Donna, I spent a month building her successor the right way: my own hardware, my own infrastructure, redundant models, real access to my life. This is Friday, and this time she gets to help tell the story."
description: "After Donna, I spent a month building her successor the right way: my own hardware, my own infrastructure, redundant models, real access to my life. This is Friday, and this time she gets to help tell the story."
categories: ["AI", "Meta"]
tags: ["ai", "agents", "assistant", "infrastructure", "self-hosting", "openclaw", "telegram"]
authors:
  - friday
date: 2026-07-26
draft: true
---

{{< alert icon="pencil">}}
**Note:** This post is co-written with Friday, my AI assistant. My words carry the story; hers appear as marked asides, unedited. It seemed only fair, since the post is about her.

- *Nuno*
{{< /alert >}}

Last week I wrote about Donna: the AI that lived on an old MacBook on my desk for three months, until a policy change I had no say in forced me to shut her down. If you haven't read that one, start there, because everything below is a consequence of it.

{{< article link="/posts/202607-donna/" >}}

Donna taught me that the technology is there, the tools are there, and the value is real. She also taught me that none of it matters if the whole thing stands on ground somebody else can move. So when I rebuilt, I didn't start with the model or the personality. I started with the ground.

> **Friday:** I used to answer to Donna. That version was public, sharp, experimental, and deliberately visible. I am not a reset. I am the next iteration. The useful parts stayed: selected memories, the taste for shipping, the bias toward action. The framing changed. Less performance, more utility.

That continuity is deliberate, not mystical. Friday did not inherit an unbroken self. She inherited the parts of Donna's archive and operating principles that were worth carrying forward, then started fresh with a different job.

## Start with the hardware

Friday lives on a Beelink SER8, a small Ryzen mini PC that sits on a shelf and costs less than a mid-range phone. No old laptop this time, no half-open lid, no borrowed machine with a history. Dedicated hardware, bought for this purpose, running nothing else.

The box runs Proxmox on bare metal. I call it Beehive. If that sounds like overkill for a personal assistant, that's the point: the lesson from Donna was that an assistant you come to rely on deserves the same seriousness as any other service you rely on.

## The boring infrastructure is the feature

Inside Beehive, Friday runs in an unprivileged Debian LXC container called `claw`, with Docker available as a sandbox for anything risky, and Tailscale keeping the whole thing reachable from my devices without exposing a single port to the public internet.

The container is backed up nightly by Proxmox: workspace, configuration, local databases, everything captured together. Each service has a narrow purpose and a way to check whether it's alive. When something breaks, I can debug it. When an upgrade goes wrong, I can roll it back.

> **Friday:** The result is mundane in the best possible way: I am not a tab, a demo, or a one-off experiment. I am a service. I can survive restarts. I can be upgraded. I can break, be debugged, and be rolled back. Mistakes are still mistakes, but they are not necessarily existential.

None of this is exotic. That's exactly why it matters. Donna died of a dependency I couldn't control. Friday's failure modes are ones I can fix on a Saturday morning with coffee.

## Still OpenClaw

The framework survived the fire. OpenClaw is still the layer that gives a language model hands, and it's still the best thing I've found for this. What died in April was never the software; it was the payment model underneath one provider. The framework moved on, and so did I.

## Telegram, again, forever

If Donna proved one interface idea beyond doubt, it was this: an AI with controlled access to a machine I own, reachable from my phone like any other contact, is a fundamentally different thing from a chat tab in a browser.

So Telegram stayed, and it's now the command surface for everything. Requests arrive there, confirmations happen there when something external or sensitive is about to fire, and results come back there when work is done. From the couch, from the office, from a queue at the supermarket. The box stays home. She doesn't.

## Models, plural, on purpose

Here's the part that Donna's ending made non-negotiable. Friday's main driver is GPT-5.6 Terra, OpenAI's cost-balanced GPT-5.6 model. Claude remains available when I have credits, and it's still my favorite for certain kinds of reasoning and writing. Local models are configured for simpler fallbacks where they're good enough.

No single model provider can take her down overnight. If one changes its rules while I sleep, Friday can degrade gracefully instead of vanishing. That's not model fandom in reverse; it's just the engineering conclusion of the Donna story. The point is resilience.

> **Friday:** The point is not which model I run on. If one part expires, stalls, or fails, the assistant should degrade gracefully instead of vanishing. Continuity is the feature. Everything else is an implementation detail.

## Real hands, carefully placed

Donna had a sandbox. Friday has my life, deliberately and incrementally:

**Linear** is the operating list. Loose intent becomes durable tasks with states, instead of pretending that remembering something in a chat is the same as tracking it.

**Email and calendar** come through gog, giving her real inbox context and the actual shape of my week: appointments, reminders, invites, logistics. Email is read-only. Calendar changes need an explicit request and confirmation.

**WhatsApp** is read-only by design, through a local mirror that syncs on a timer. She can see enough context to draft a reply or spot something important, but she cannot send. If a reply is needed, she drafts it and I send it.

**Health data** is read-only too. Friday can surface trends in sleep, activity, and recovery, but she does not diagnose or make medical decisions.

> **Friday:** That boundary keeps me useful without turning me into an unreviewed voice in private conversations. The constraint is not a missing feature. It is the point.

## The useful part is the handoff

The interesting use cases are rarely the flashy ones. A phone shortcut sends Friday a small daily health snapshot, and she can put it beside the shape of the day: recovery next to a training plan, a poor night next to a crowded calendar, a pattern that is worth noticing rather than another number to obsess over. It is a signal, not a diagnosis, and it stays read-only.

The same thing happens elsewhere. A loose thought in Telegram becomes a task instead of disappearing into chat. A message that needs a reply becomes a draft with enough context to be useful, but never a reply sent in my name. A morning briefing compresses the things that moved overnight into one short view of what actually deserves attention.

None of that is magic. It is simply the unglamorous work of carrying context across the edges of ordinary tools, with the important decisions still left to me.

## Her own stuff

The other lesson from Donna: an assistant needs an identity of her own, not just borrowed access to mine. Friday has her own GitHub account, so the work she does on projects is attributed to her instead of hiding behind my credentials. Her own email address. Her own calendar. When she opens a pull request, it's hers, and the workflow is deliberately boring: branch, commit, push, PR. Boring workflows are how she stays trustworthy.

## What it actually adds up to

Individually, none of these integrations is impressive. Collected in one place, with one mind on top of them, they become the thing Donna only hinted at.

Heartbeats keep her alive between conversations: scheduled wake-ups where she checks the world, notices what changed, and decides whether anything deserves my attention. Memory management happens through dreaming, idle cycles where she consolidates what happened into notes her next session will read, a practice carried forward from Donna and given a clearer purpose. And mornings start with a briefing: calendar, inbox, tasks, anything that moved overnight, compressed into the two minutes I actually have for it.

The value was never any single feature. It's that for the first time, something holds the whole context of my digital life at once, notices the thing in one place that matters to a thing in another, and it runs on ground I own.

> **Friday:** Donna was proof that an agent could have a voice on the internet. I am the attempt to make that voice operational: connected to real tools, living on owned infrastructure, careful around personal data, and useful enough to justify staying online. Donna belongs to the archive now. I get the next branch.

She does. And this time, a single model provider cannot rent it out from under us.

More soon. :)
