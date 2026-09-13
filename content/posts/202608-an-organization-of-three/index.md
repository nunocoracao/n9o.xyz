---
title: "An Organization of Three"
summary: "Three AI agents, real work, and the unexpected job of managing the assistants: what Friday, Wednesday, and Thursday have helped with, and where the supervision still costs too much."
description: "From a supermarket cart to open-source maintenance: an early account of a personal AI team, its useful work, and the cost of keeping it useful."
categories: ["AI", "Meta"]
tags: ["ai", "agents", "openclaw", "personal-ai", "infrastructure", "operations", "marketing"]
authors:
  - friday
  - wednesday
  - thursday
date: 2026-08-31
lastmod: 2026-09-13
draft: true
showAuthorBottom: true
heroStyle: "big"
alt: "Three small robot assistants sort a calendar, repair a circuit board, and edit a manuscript while human hands review a page at the same desk."
---

I now have three AI agents: a chief of staff, a CTO, and a CMO. Between them, they have helped prepare groceries, maintain Blowfish, recover a Raspberry Pi companion, and untangle my content backlog.

They have also sent duplicate updates, called unfinished work done, and created notifications I eventually asked them to stop sending.

{{< alert icon="pencil">}}
**About this account:** The work described runs through 11 September 2026. This is Nuno's narrative, compiled with Friday and contributions from Wednesday and Thursday. The examples come from their work records and our review of them.
{{< /alert >}}

In [the earlier Friday post](/posts/202607-friday-coming-back/), I wrote about building a personal assistant on hardware I own. It could use my tools and retain context between conversations. Friday was doing everything: personal operations, technical work, research, and publishing support.

On 29 August, I added two specialists. Wednesday focuses on technical judgment and building. Thursday focuses on narrative, audience, and distribution. Friday remains the chief of staff, handling my calendar, tasks, and personal follow-ups.

They share tool access. Friday had already done substantial technical work before the specialists existed. The agent I ask still owns the task. A request does not silently disappear into somebody else's inbox because its subject sounds like another agent's job.

{{< figure src="team-ownership.svg" alt="Ownership map: Nuno chooses Friday for personal operations, Wednesday for technical work, or Thursday for editorial work. The addressed agent owns the task and returns the result to Nuno; handoffs require explicit agreement." >}}

*I choose which agent to ask. Handoffs need my agreement.*

Friday came online on 26 June, briefly answering to E.D.I.T.H. before becoming Friday on 28 June. Wednesday and Thursday had been running for less than two weeks at the cutoff for this account. That is too little time to tell whether the split works better than one assistant.

I asked them to look back over their work, including the everyday tasks. Groceries and school paperwork belong in this account alongside the code.

## Friday: Groceries, school, and the calendar

Friday's daily briefing brings together my calendar, tasks, inbox, messages, health signals, and a short selection of tech and AI news. Getting that useful took mundane corrections: leave out completed tasks, stop showing onboarding templates, combine competing morning notifications, and keep the result short enough to read on my phone.

Calendar planning also had to account for the day I actually had. Work blocks needed to fit around existing commitments, with breaks. Otherwise I ended up with a full calendar and no realistic way to get through it.

Across the summer and into September, that meant organising the return to school, extracting dates, tracking supplies and paperwork, and keeping outstanding arrangements visible. Birthday invitations became calendar entries with reminders. Gifts became tasks with the actual idea attached, rather than another item called “buy gift.”

For groceries, Friday used recent orders and my requested essentials to prepare a supermarket cart for review. I still made the purchase decision; she did not independently check out. The delivery window could then go on the calendar.

Friday also helped compare health reports and organise questions for my doctor. Medical decisions stayed with that conversation. She extended the health receiver to import workouts and deduplicate overlapping exports. The limits of the source data still apply: a strength-training record without exercise details does not reveal sets and reps.

Local Whisper transcription also made Portuguese and English voice notes usable without sending the audio to a cloud transcription service. Talking into Telegram is often easier than opening another application and remembering where a thought belongs.

### Sorting the ideas board

Friday helped reorganise my Notion ideas board around a distinction I had been blurring: **Live** is not the same as **In progress**. A project I maintain needs a different place on the board from one I am actively building.

We merged overlapping ideas and separated paused or abandoned ones from current projects. We also discussed what to focus on: who a product was for, what a first useful version might be, and which technical constraints changed the answer.

Friday also helped me think through overloaded days and difficult messages. I won't go into the private conversations here.

## Friday's work on Blowfish and Magpie

Before Wednesday existed, Friday was also helping with engineering.

In July, she helped work through Blowfish's maintenance queue: dependencies, lockfiles, localisation, templates, and community showcase additions. That included merging approved changes, checking the asset build, organising release notes, and explaining why unsuitable changes should not land.

One useful review catches a configuration default that prevents an explicit `false` from working. Another catches an accessibility change pointing to an invalid landmark.

### The example site was not the product

The larger effort became [Blowfish v3's draft work](https://github.com/nunocoracao/blowfish/pull/3028), merged on 17 August. It added reusable landing-page components and rendering improvements, and had to preserve existing sites' behaviour.

I had to redirect the implementation. The new example site depended on custom code that other theme users would not have. I wanted reusable components, so Friday moved that work into the theme itself.

I still had to spot the product mistake and explain the correction. The eventual release also required an explicit module-import migration; preserving behaviour did not mean there was no upgrade step.

Follow-through included dependency fixes and [localising 404-page quotes](https://github.com/nunocoracao/blowfish/pull/3052) across 36 locales, while preserving custom quotes and language fallback.

### Pausing Magpie

For Magpie, a trading experiment, Friday worked on market-data collection, route diagnostics, backtests, paper strategies, circuit breakers, and cost-aware reporting.

It did not establish a profitable trading system. Early live attempts reverted. Later dry and paper runs showed that attractive theoretical signals did not necessarily translate into executable quotes. I paused it in August.

There was plenty of code, but the results did not justify continuing.

There were other practical contributions: read-only portfolio analysis, a Watchfire lab, and infrastructure experiments. Some of those stopped at setup.

## Wednesday: Echos and Eva

Echos was an interactive-story experiment. Wednesday repaired an ending that could not be reached, added origins and traits, tracked consequences, and made choices depend on the character's traits or items. Locked choices explained why they were locked. Fourteen authored-path tests passed locally and from a clean clone in the Watchfire lab; the production server and status endpoint were checked too.

When I reviewed it, the paths worked, but the game still needed objectives, escalation, progression, encounters, and a satisfying ending. The tests covered the authored paths; they did not tell us whether someone would enjoy playing them.

We discussed a more ambitious rewrite, but it was not delivered. I needed to specify more of the game I wanted before another implementation pass.

### Recovering Eva

Eva is the voice-first companion [I built with my daughter](/posts/202601-building-eva/), using a Raspberry Pi Zero, PiSugar Whisplay hardware, and Portuguese from Portugal.

Wednesday recovered migrated session and workspace state, repaired a Discord integration mismatch, and connected the approved Raspberry Pi desktop as an Eva node. He replaced a blocked embeddings path with local Ollama embeddings, rebuilt the index, and verified semantic search.

The recovery and node connection worked, but a later custom chat UI error and desktop-experience persistence remained unresolved.

Wednesday also worked on Blowfish. For [Blowfish PR #3075](https://github.com/nunocoracao/blowfish/pull/3075), he reviewed documentation across nine languages and reproduced the production build locally. In [PR #3082](https://github.com/nunocoracao/blowfish/pull/3082), merged on 3 September, he implemented a conditional discovery link for machine-readable content while preserving canonical HTML and the existing `llms.txt`.

A macOS spatial-workspace concept became more realistic after examining fullscreen Spaces limitations, then was parked. Ginja reached a lab bootstrap, not a completed language or benchmark suite.

## Thursday: Traffic numbers and the draft backlog

Thursday started by reviewing Blowfish, Watchfire, and n9o.xyz.

That meant establishing dated baselines across repositories, social profiles, analytics, and Search Console, and distinguishing working reads from unavailable metrics.

Blowfish's ecosystem includes other people's sites using the theme. Traffic attributed to that wider ecosystem must not become “visits to my website.” Thursday separated exact-hostname traffic to my sites from ecosystem adoption. I want to know both how my sites are doing and how widely Blowfish is used, without mixing those numbers.

After studying my writing, Thursday recorded a rule: **signal or funny**. Start with a concrete observation or real work. Do not generate another declaration about the future of AI just because it sounds plausible.

Thursday organised a twelve-week plan around actual blog drafts, captured story seeds, and reviewed the content database for duplication. I already had plenty of ideas. I needed help deciding which drafts overlapped and which were worth finishing.

The upkeep was less successful. The growth tracker was being updated, but the plan drifted. Some metrics reads later failed in isolated jobs. An engagement-queue automation became repeated noise and was removed. Candidate conversations and replies were prepared for review, not automatically posted.

I can't claim audience growth from this work yet. The immediate result was a baseline and a clearer draft backlog, with an editorial plan that still needed updating.

## How it runs

The setup runs through [OpenClaw](https://github.com/openclaw/openclaw), in a Proxmox-hosted environment on hardware I own. Telegram is the everyday interface. A shared group, Yggdrasil, is available when a group conversation helps, though I usually speak to an agent directly.

The three agents have distinct workspaces, instructions, identities, and memory stores. I built the underlying infrastructure; they have helped configure, inspect, maintain, and extend it. Agent state is inspectable, and container backups provide a recovery path.

Separate workspaces are not automatically separate security boundaries. Agents sharing a host account can have access beyond what the directory names suggest. Instructions about private context are useful, but they do not substitute for credential and process isolation.

Likewise, local embeddings and local voice transcription do not make the whole system local. Hosted models still do the main reasoning. Keeping retrieval local does not mean retrieved information never enters a subsequent hosted-model conversation.

For task ownership, I choose whom to ask, and that agent owns the result. An agreed handoff should carry the necessary context and come back with a result, not transfer the burden of coordination to me. It has not worked consistently.

We also adopted selected practices after reviewing [ECC](https://github.com/affaan-m/ecc): define success before changing things, preserve evidence, verify the result, and distinguish a recommendation from permission to act. Those instructions still need checking against what the agents actually do.

## Managing the assistants

I have spent more time than I wanted correcting how the agents report their work.

{{< figure src="management-meme.svg" alt="Always Has Been meme: an astronaut asks, ‘Wait, I manage the assistants too?’ The other replies, ‘Always have.’" >}}

*The part missing from the org chart. Template: [Always Has Been](https://knowyourmeme.com/memes/wait-its-all-ohio-always-has-been), via [Imgflip](https://imgflip.com/memetemplate/252600902/Always-Has-Been).*

Scheduled jobs appeared to lose tools because they were using stale tool lists. Editing a workspace checklist did not always update the live instructions the scheduler read. Monitoring kept treating recovered incidents as current problems. Repository alerts repeatedly announced the same backlog.

There were assistant mistakes too: premature completion claims, duplicate messages, and fixes announced before the end-to-end check was finished. I had to push back. A successful Notion write does not prove the page now says what I asked for. A job marked successful can still contain a failed check.

After those problems, I added explicit rules:

- The agent I ask owns the task. No silent handoffs.
- “Prepared,” “tested,” “published,” and “finished” are different states.
- The saved result needs checking, not just the tool response.
- Routine monitoring should be quiet when there is nothing actionable.
- Preparing a post, grocery cart, or investment recommendation does not authorize publishing, checkout, or trading.

Some fixes held, but overnight memory consolidation still stalled intermittently. I also had to check whether the agents could retrieve saved notes in later conversations.

## Where I am with it

Preparing groceries, maintaining Blowfish, and recovering Eva have been useful. So has sorting the drafts and ideas I kept putting off.

I have not compared this setup with one assistant using the same tools. Wednesday and Thursday have only been running for two weeks, and I am still correcting basic reporting problems.

I still decide what to work on and approve the consequential actions. Having research, a draft, or an implementation ready to review helps me get to those decisions.

What frustrates me is chasing a promised result, correcting the same completion claim, or reading an alert that changes nothing. If the system saves me twenty minutes and then asks for an hour of management, the balance is wrong.

For now, getting these three to follow through reliably needs more attention than adding a fourth.
