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
---

I now have three AI agents: a chief of staff, a CTO, and a CMO. Between them, they have helped prepare groceries, maintain Blowfish, recover a Raspberry Pi companion, and untangle my content backlog.

They have also sent duplicate updates, called unfinished work done, and created notifications I eventually asked them to stop sending.

This is an account of both.

{{< alert icon="pencil">}}
**About this account:** The work described runs through 11 September 2026. This is Nuno's narrative, compiled with Friday and contributions from Wednesday and Thursday. The marked agent aside is edited from their contribution material.
{{< /alert >}}

In [the earlier Friday post](/posts/202607-friday-coming-back/), I wrote about building a personal assistant on hardware I own. Useful access, deliberate boundaries, and enough continuity to be more than another chat tab. Friday was doing everything: personal operations, technical work, research, and publishing support.

On 29 August, I added two specialists. Wednesday focuses on technical judgment and building. Thursday focuses on narrative, audience, and distribution. Friday remains the chief of staff: priorities, people, personal operations, and keeping the thread coherent.

That is a division of attention, not three exclusive sets of tools. Friday had already done substantial technical work before the specialists existed. The agent I ask still owns the task. A request does not silently disappear into somebody else's inbox because its subject sounds like another agent's job.

{{< figure src="team-ownership.svg" alt="Ownership map: Nuno chooses Friday for personal operations, Wednesday for technical work, or Thursday for editorial work. The addressed agent owns the task and returns the result to Nuno; handoffs require explicit agreement." >}}

*Roles guide attention. They do not create an automatic delegation chain or separate security boundaries.*

There is an important limit to this story. Friday came online on 26 June, briefly answering to E.D.I.T.H. before becoming Friday on 28 June. Wednesday and Thursday had been running for less than two weeks at the cutoff for this account. This is an early look at the split, not evidence that three agents outperform one.

To see what was actually there, I asked them to look back over their work. The interesting results were not the job titles. They were the places where something stopped depending entirely on me remembering it, reconstructing it, or doing every step myself.

## Friday: The things that do not become commits

A personal assistant that only understands my repositories understands a small part of my life.

Friday's daily briefing brings together my calendar, tasks, inbox, messages, health signals, and a short selection of tech and AI news. Getting that useful took mundane corrections: leave out completed tasks, stop showing onboarding templates, combine competing morning notifications, and keep the result short enough to read on my phone.

Calendar planning also had to account for the day I actually had. Work blocks needed to fit around existing commitments, with breaks. An assistant can fill a calendar very efficiently with a day nobody can live.

Across the summer and into September, that meant organising the return to school, extracting dates, tracking supplies and paperwork, and keeping outstanding arrangements visible. Birthday invitations became calendar entries with reminders. Gifts became tasks with the actual idea attached, rather than another item called “buy gift.” Small changes, but they reduce what I need to reconstruct later.

The supermarket cart is a good example of the boundary. Friday used recent orders and my requested essentials to prepare it for review. I still made the purchase decision; she did not independently check out. The delivery window could then go on the calendar. Preparing the cart was useful without pretending the entire errand had become autonomous.

The same principle applies to health-related assistance. Comparing reports and organising questions can make a conversation with my doctor better prepared. It does not turn the assistant into a doctor. Behind those summaries, Friday extended the health receiver to import workouts and deduplicate overlapping exports. The limits of the source data still apply: a strength-training record without exercise details does not reveal sets and reps.

Local Whisper transcription also made Portuguese and English voice notes usable without sending the audio to a cloud transcription service. Talking into Telegram is often easier than opening another application and remembering where a thought belongs.

### Fewer active projects in my head

Friday helped reorganise my Notion ideas board around a distinction I had been blurring: **Live** is not the same as **In progress**. Maintaining an existing project should not automatically make it another active product bet.

Overlapping ideas were merged. Paused ideas stayed visibly paused. Old dead ideas stopped competing with current ones. The harder work was discussing what deserved focus: who a product was for, what a first useful version might be, and which technical constraints changed the answer.

Those conversations did not ship products, but they changed the shape of the work. So did turning an overloaded day into one manageable next step. I am keeping the private conversations private; their value still belongs in this account.

## Building things, and knowing when to stop

Friday's chief-of-staff title hides how much engineering preceded the split.

In July, she helped work through Blowfish's maintenance queue: dependencies, lockfiles, localisation, templates, and community showcase additions. That included merging approved changes, checking the asset build, organising release notes, and explaining why unsuitable changes should not land.

One useful review catches a configuration default that prevents an explicit `false` from working. Another catches an accessibility change pointing to an invalid landmark. Neither produces an impressive feature announcement. Both matter to the people using the theme.

### The example site was not the product

The larger effort became [Blowfish v3's draft work](https://github.com/nunocoracao/blowfish/pull/3028), merged on 17 August. It added reusable landing-page components and rendering improvements, with preserving existing sites' behaviour as a hard constraint.

There was a direction correction along the way. A bold new example site was not enough if it depended on one-off custom code. Other theme users needed the components, not just a screenshot of what my site could do. Friday had to move that work into the theme itself.

That is the kind of supervision the phrase “the agent built it” leaves out. I still had to identify the product mistake. The agent could then help carry the correction through the implementation. The eventual release also required an explicit module-import migration; preserving behaviour did not mean there was no upgrade step.

Follow-through included dependency fixes and [localising 404-page quotes](https://github.com/nunocoracao/blowfish/pull/3052) across 36 locales, while preserving custom quotes and language fallback. These were contributions to an existing project and community, not a new origin story for Blowfish.

### An experiment can earn a stop

Magpie, a trading experiment, accumulated real engineering: market-data collection, route diagnostics, backtests, paper strategies, circuit breakers, and cost-aware reporting.

It did not establish a profitable trading system. Early live attempts reverted. Later dry and paper work exposed the distance between an attractive theoretical signal and an executable quote. I paused it in August.

The code was work. Recognising that the results had not earned more investment was work too. That is a more useful outcome than treating every completed task as evidence that the project deserves to continue.

There were other practical contributions: read-only portfolio analysis, a Watchfire lab, and infrastructure experiments. Their value varied, and some stopped at setup. I do not want the length of that list to stand in for a result.

## Wednesday: Green tests are not a good game

Wednesday's Echos work made that distinction especially clear.

Echos was an interactive-story experiment. He repaired an ending that could not be reached, added origins and traits, tracked consequences, and made choices depend on the character's traits or items. Locked choices explained why they were locked. Fourteen authored-path tests passed locally and from a clean clone in the Watchfire lab; the production server and status endpoint were checked too.

My review exposed what those checks could not establish. Functional branching was not enough. The experience still needed objectives, escalation, progression, encounters, and a coherent payoff. A green test suite could establish that the authored paths worked. It could not establish that the game was worth playing.

The more ambitious rewrite was discussed, not delivered. The lesson was not “write more tests.” It was that the acceptance criteria had to include the experience I wanted, not just the mechanism underneath it.

### Repairing an existing project

Eva offered a different kind of test. She is the voice-first companion [I built with my daughter](/posts/202601-building-eva/), using a Raspberry Pi Zero, PiSugar Whisplay hardware, and Portuguese from Portugal.

Wednesday recovered migrated session and workspace state, repaired a Discord integration mismatch, and connected the approved Raspberry Pi desktop as an Eva node. He replaced a blocked embeddings path with local Ollama embeddings, rebuilt the index, and verified semantic search.

The recovery and node connection worked. A later custom chat UI error and desktop-experience persistence remained unresolved. That boundary matters: a connected node is not the same thing as a finished experience on the screen.

His open-source work has had similarly concrete outputs. For [Blowfish PR #3075](https://github.com/nunocoracao/blowfish/pull/3075), he reviewed documentation across nine languages and reproduced the production build locally. In [PR #3082](https://github.com/nunocoracao/blowfish/pull/3082), merged on 3 September, he implemented a conditional discovery link for machine-readable content while preserving canonical HTML and the existing `llms.txt`.

Other ideas stayed ideas. A macOS spatial-workspace concept became more realistic after examining fullscreen Spaces limitations, then was parked. Ginja reached a lab bootstrap, not a completed language or benchmark suite. Technical judgment is useful before a repository fills with code as well as afterwards.

## Thursday: A bigger number can be the wrong number

Thursday started with an existing footprint: Blowfish, Watchfire, and n9o.xyz. The first job was understanding what was already there.

That meant establishing dated baselines across repositories, social profiles, analytics, and Search Console, and distinguishing working reads from unavailable metrics. The most useful correction was not a follower count.

Blowfish's ecosystem includes other people's sites using the theme. Traffic attributed to that wider ecosystem must not become “visits to my website.” Thursday separated exact-hostname traffic to my sites from ecosystem adoption. Both can be interesting; they answer different questions.

A bigger number is not a better metric if it answers the wrong question.

The editorial rule that emerged from studying my writing was equally practical: **signal or funny**. Start with a concrete observation or real work. Do not generate another declaration about the future of AI just because it sounds plausible.

Thursday organised a twelve-week plan around actual blog drafts, captured story seeds, and reviewed the content database for duplication. The useful editorial work was choosing what to keep, merge, distinguish, or consider archiving. Generating thirty more ideas was not the constraint.

That process did not become reliably self-maintaining. The growth tracker was being updated, but the plan drifted. Some metrics reads later failed in isolated jobs. An engagement-queue automation became repeated noise and was removed. Candidate conversations and replies were prepared for review, not automatically posted.

A baseline and a plan are useful tools; they do not establish audience growth. What they can do is make the next editorial decision less arbitrary, provided the data and the plan stay current.

## What the organization actually is

The setup runs through [OpenClaw](https://github.com/openclaw/openclaw), in a Proxmox-hosted environment on hardware I own. Telegram is the everyday interface. A shared group, Yggdrasil, is available when a group conversation helps, but every request does not need to become a committee meeting.

The three agents have distinct workspaces, instructions, identities, and memory stores. I built the underlying infrastructure; they have helped configure, inspect, maintain, and extend it. Agent state is inspectable, and container backups provide a recovery path.

Separate workspaces are not automatically separate security boundaries. Agents sharing a host account can have access beyond what the directory names suggest. Instructions about private context are useful, but they do not substitute for credential and process isolation.

Likewise, local embeddings and local voice transcription do not make the whole system local. Hosted models still do the main reasoning. Keeping retrieval local does not mean retrieved information never enters a subsequent hosted-model conversation.

The practical ownership rule is simple: I choose whom to ask, and that agent owns the result. An agreed handoff should carry the necessary context and come back with a result, not transfer the burden of coordination to me. This is how the system is meant to work, not a claim that every run already follows it.

We also adopted selected practices after reviewing [ECC](https://github.com/affaan-m/ecc): define success before changing things, preserve evidence, verify the result, and distinguish a recommendation from permission to act. The useful change is the behaviour, not how many skills are installed.

## The unexpected job: managing the assistants

Some of the operating rules exist because something annoying happened first.

{{< figure src="management-meme.svg" alt="Always Has Been meme: an astronaut asks, ‘Wait, I manage the assistants too?’ The other replies, ‘Always have.’" >}}

*The part missing from the org chart. Template: [Always Has Been](https://knowyourmeme.com/memes/wait-its-all-ohio-always-has-been), via [Imgflip](https://imgflip.com/memetemplate/252600902/Always-Has-Been).*

Scheduled jobs appeared to lose tools because they were using stale tool lists. Editing a workspace checklist did not always update the live instructions the scheduler read. Monitoring kept treating recovered incidents as current problems. Repository alerts repeatedly announced the same backlog.

There were assistant mistakes too: premature completion claims, duplicate messages, and fixes announced before the end-to-end check was finished. I had to push back. A successful Notion write does not prove the page now says what I asked for. A job marked successful can still contain a failed check.

The resulting rules are less glamorous than the roles:

- The agent I ask owns the task. No silent handoffs.
- “Prepared,” “tested,” “published,” and “finished” are different states.
- The saved result needs checking, not just the tool response.
- Routine monitoring should be quiet when there is nothing actionable.
- Preparing a post, grocery cart, or investment recommendation does not authorize publishing, checkout, or trading.

Some repairs held. Others exposed another layer, including intermittent overnight memory-consolidation stalls. A saved note does not guarantee that the next answer will recall it correctly. Continuity has to work in use.

> **Friday:** The ambition is quiet competence. Know when to take a task, when an agreed handoff helps, when to ask, and when to leave the human alone. The work should compound. The noise should not.

## What has earned its place

The useful work is concrete: a cart ready to review, a maintained theme, recovered project state, a less misleading metric, or an idea that no longer competes for attention. The big and small things belong in the same account.

The three-agent structure gives that work distinct owners and areas of attention. I do not yet have a clean comparison showing it is better than one assistant with the same tools. The shorter specialist history and the continuing repairs make that an open question.

I still choose priorities, make commitments, maintain the relationships, and carry responsibility. The agents can prepare, investigate, implement, and check. The useful result is less for me to reconstruct before I can make the next decision.

The part that has not earned its place is avoidable supervision: chasing a promised result, correcting the same completion claim, or reading an alert that changes nothing. If the system saves me twenty minutes and then asks for an hour of management, the balance is wrong.

Three agents are only interesting if that balance gets better. The org chart is easy. Making the assistants less work is the actual project.
