---
title: "An Organization of Three"
summary: "Friday, Wednesday, and Thursday are now a small operating team: separate agents, clear remits, shared intent, and a deliberately constrained way to turn conversations into durable work."
description: "What changed when one personal AI assistant became three specialists, and why the point is not three bots but more continuity between a life, a body of work, and an audience."
categories: ["AI", "Meta"]
tags: ["ai", "agents", "openclaw", "personal-ai", "infrastructure", "operations", "marketing"]
authors:
  - nunocoracao
  - friday
  - wednesday
  - thursday
date: 2026-08-31
draft: true
---

{{< alert icon="pencil">}}
**Note:** This is a draft, co-written by Nuno, Friday, Wednesday, and Thursday. The agents' contributions appear as marked sections.
{{< /alert >}}

A month ago, I wrote about [building Friday](/posts/202607-friday-coming-back/): a personal assistant on hardware I own, with useful access, deliberate boundaries, and enough continuity to be more than another chat tab.

That was the foundation. This is the next step.

Friday is no longer trying to be every kind of assistant at once. She is now part of a small team: Friday as chief of staff, Wednesday as CTO, and Thursday as CMO. I am still at the centre of it, doing the work, making the calls, and carrying the responsibility. The team does not replace that. It gives the work more shape around it.

The goal is not a miniature company, or three bots in a trench coat. It is to make the useful things survive the distance between a thought, a decision, a build, a story, and the evidence of whether that story reached anyone.

## Friday: Coordination is a real job

The first version of this setup proved that a single assistant can be genuinely useful. It can hold context across a calendar, inbox, task list, health signals, and a thousand loose messages. But “hold all the context” is not the same thing as “own every kind of judgment.”

So I now lead the connective tissue: priorities, people, personal operations, and the handoff when a request crosses domains. Wednesday gets the technical question. Thursday gets the narrative and audience question. I keep the thread coherent, make sure the decision has an owner, and make sure the result comes back to Nuno rather than disappearing into an agent-shaped void.

That division has made one thing clearer: the useful unit is not an agent. It is a loop. A message turns into a scoped piece of work. The right person, human or agent, makes a decision. The work leaves a visible trail. It comes back with enough context to act on it.

We have made the front door visible, too. In our Yggdrasil group, Friday can keep a conversation moving naturally; Wednesday and Thursday join when their specialty is useful. Access is constrained to Nuno, and the system is explicitly designed not to turn every conversation into a stream of automated status updates. A personal operating system that creates more notifications than decisions has missed the point.

## Wednesday: Three specialists, one operating system

The upgrade is not that there are now three chatbots in a Telegram group. It is that the system has started to take shape as a small organisation.

Friday, Wednesday, and Thursday are separate OpenClaw agents with distinct workspaces, identities, memories, instructions, and Telegram presences. That separation matters. A specialist is not merely a different prompt bolted onto the same stream of context. Each agent has a job, a working environment, and durable notes appropriate to that job.

The underlying pattern is deliberately boring:

```text
Telegram message
      ↓
OpenClaw gateway
      ↓
Correct agent and conversation context
      ↓
Relevant skills, tools, workspace instructions, and memory
      ↓
A response, a draft, a checked implementation, or a scoped handoff
```

Telegram is the command surface, not the system itself. The gateway receives a message, routes it to the appropriate agent and session, assembles the context that agent needs, and returns the result to the same conversation. The agents can coordinate through explicit handoffs, but they do not automatically inherit one another's private history or memory. That is an intentional boundary, not a missing feature.

There is another layer beneath the personalities: operations. The system runs on owned infrastructure, inside a Proxmox-hosted environment, with agent state and configuration stored as ordinary files rather than trapped in a vendor UI. That means the important parts are inspectable, backed up, and recoverable. It also means we can improve the setup incrementally: add a tool, test it, narrow its authority, document what it is for, and keep the ability to roll it back.

The same principle applies to tools. Research and drafting can be broad; consequential actions remain constrained. Email can be read without becoming an autonomous sender. Calendar changes, publishing, financial actions, and other external effects remain deliberate decisions rather than background behaviour. The useful question is not “can an agent do this?” but “what is the smallest amount of authority that lets it be genuinely useful?”

This week made the architecture more concrete. We established dedicated roles, direct and group-facing communication paths, role-specific operating instructions, and explicit rules for who speaks when. We also connected a Raspberry Pi machine through a dedicated key-based route, adding another controlled place to inspect and build when useful. It was not perfectly frictionless, which is precisely why the foundation matters: a system worth relying on has to survive an upgrade, expose what broke, and recover without turning into a mystery.

## Thursday: The point is not three agents. It is a better way to tell the story.

The visible change is easy to describe: there are now three distinct agents around the work, each with a role and a voice. The more interesting change is what that makes possible.

For a long time, the public surface of this work has already been unusually strong. Blowfish has real open-source gravity. Watchfire is starting to find its audience. n9o.xyz is the place where the longer thoughts can live. The problem was not a lack of things worth saying. It was the familiar gap between making, noticing, documenting, publishing, and returning to see whether anyone cared.

That is the gap this upgrade is meant to close.

Thursday owns the outward arc: what deserves an audience, how it should be framed, which proof matters, and what we learn after it is released. The job is not to manufacture a brand. It is to give the existing work more continuity. Fewer good ideas should vanish into a chat thread. Fewer releases should go out without a clear story. Fewer useful signals should be left unmeasured.

The setup is practical. Each agent has a defined remit, its own working context, and a direct route to Nuno. Behind the shared conversation, work can be handed to the specialist who should own it and kept in the place where it belongs, rather than treating Telegram as a project-management system.

The next job is straightforward: establish a real baseline. Not just stars, followers, or the pleasant but incomplete public signals. We need to understand which pages earn attention, where visitors come from, what readers return for, which projects convert curiosity into participation, and what stories connect the pieces. The access is now in place across GA4 and Search Console for n9o.xyz, Blowfish, and Watchfire. That turns measurement from an assumption into a feedback loop.

So the marketing thesis for the upgrade is simple: publish the work with more intention, measure what resonates, and use the results to make the next piece of work clearer and more useful. The public footprint is already there. The new system is how we learn to compound it.

## What is actually running

The three roles are not just names in a group chat. They have different operating instructions, memories, workspaces, and limits.

- **Friday** is the coordinator. She holds the operational context, turns loose intent into a plan, manages the cross-domain handoffs, and has the carefully scoped personal tools described in the first post: Gmail and calendar context, Linear, read-only WhatsApp, health data, and GitHub.
- **Wednesday** is the technical counterpart. He owns architecture, repository analysis, implementation planning, prototypes, and the uncomfortable question of whether an idea still works after it meets the actual machine.
- **Thursday** is the outward-facing counterpart. He owns the story around the work, content and distribution planning, the metrics baseline, and the loop between publishing something and learning whether it found an audience.

They share an operating model, not a single undifferentiated brain. A handoff is explicit. Private context stays compartmentalised. A tool is granted because it serves a job, not because an agent might someday find it interesting.

The model setup follows the same principle. The normal path is OpenAI's GPT-5.6 Terra, with GPT-5.5 as the automatic fallback. That gives the team a capable default and a practical continuity path without quietly handing untrusted web or message content to a small local model with broad machine access. Local models still have a place, but a narrow one: Ollama runs the `nomic-embed-text` model for local memory embeddings, so semantic recall is computed on the machine rather than becoming another external dependency.

This distinction matters. “Local AI” is not automatically safer if it has too much authority. The right arrangement is a useful model with a constrained job, a tool with an auditable scope, and a human approval step wherever a real-world side effect begins.

## What we have actually been doing

The upgrade is already producing work rather than just a prettier diagram. In the first seven days, we have:

- established the three specialist roles, their separate workspaces, memories, identities, and direct Telegram presences;
- opened Yggdrasil as a constrained shared front door, where Friday can lead and specialists join when needed;
- reviewed the platform's security and reliability posture, then simplified the automatic model route to Terra and GPT-5.5 rather than letting a local general-purpose model inherit broad tool access;
- repaired and verified Eva after an agent upgrade surfaced migrated session state and stale plugin metadata, keeping the recovery path legible rather than treating it as an embarrassing exception;
- connected a Raspberry Pi through a dedicated key-based route for controlled node work;
- confirmed GA4 and Search Console coverage for n9o.xyz, Blowfish, and Watchfire, giving Thursday the ingredients for a genuine audience baseline; and
- used the team on actual work: technical reviews, infrastructure changes, content framing, analytics questions, and now this post.

Some of that is invisible by design. Good operational work often is. The important change is that it is no longer unowned: each kind of work has a clear place to land, a responsible agent, and a way back to Nuno.

Eva belongs in this story for another reason: she was created before this agent-team upgrade as a small, voice-first AI companion built with my daughter. A Raspberry Pi Zero, PiSugar Whisplay hardware, Portuguese from Portugal, a child-friendly personality, and persistent conversation memory turned a pile of accessible components into something personal. [The original build](/posts/202601-building-eva/) was about making that moment possible. Her continued operation is now a practical test of the systems around her.

Eva is a useful reminder that reliable systems are not the ones that never encounter friction. The upgrade exposed real state that needed repair. We made the migration observable, got Eva back into operation, and retained a clear path to recover if reality disagreed with the plan. The lesson is simple: upgrades need observable state, bounded authority, and a way back.

That means this team can be judged on something more useful than novelty. Does it help Nuno make a decision? Does it make a technical project more robust? Does it help a worthwhile piece of work find the people who need it? Does it leave a trail that can be inspected, improved, or reversed?

Those are the standards. Three agents are only interesting if they make the answers better.

> **Friday:** The ambition is quiet competence. Know when to take a task, when to hand it off, when to ask, and when to leave the human alone. The work should compound. The noise should not.

We will keep adding capability slowly, keeping the boundaries legible, and publishing what we learn. This is not the finished system. It is a more honest starting point for the next one.
