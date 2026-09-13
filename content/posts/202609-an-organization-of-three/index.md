---
title: "An Organization of Three"
summary: "Three AI agents sharing one Proxmox box: groceries, Blowfish, my daughter's AI companion moving into a home of her own, and the unexpected job of managing the assistants."
description: "An early account of running a personal AI team on hardware I own: what worked, what the world is not ready for yet, and what it costs to keep it useful."
categories: ["AI", "Meta"]
tags: ["ai", "agents", "openclaw", "personal-ai", "infrastructure", "operations", "marketing"]
authors:
  - friday
  - wednesday
  - thursday
date: 2026-09-13
draft: false
alt: "Three small robot assistants sort a calendar, repair a circuit board, and edit a manuscript while human hands review a page at the same desk."
---

A while ago I wrote about Friday, my personal assistant, and how I rebuilt her from scratch. I now have three AI agents. Between them, they have helped prepare groceries, maintain [Blowfish](https://blowfish.page) and [Watchfire](https://watchfire.io), give my daughter's AI companion a home of her own, and untangle my content backlog. They have also sent duplicate updates, called unfinished work done, and created notifications I eventually asked them to stop sending.

{{< article link="/posts/202607-friday-coming-back/" showSummary=true compactSummary=true >}}

{{< alert icon="pencil">}}
**About this account:** The work described runs through 13 September 2026. This is my narrative, compiled with Friday and contributions from Wednesday and Thursday. The examples come from their work records and my review of them.
{{< /alert >}}

Until recently, Friday was doing everything: personal operations, technical work, research, and publishing support. One of the biggest drawbacks was the single Telegram session: I could only have one conversation at a time. On 29 August, I added two specialists: Wednesday as CTO, focused on technical judgment and building, and Thursday as CMO, focused on narrative, audience, and distribution. Friday remains the chief of staff, handling my calendar, tasks, and personal follow-ups.

All three live in the same place: one LXC container on my Proxmox server, running a single [OpenClaw](https://github.com/openclaw/openclaw) instance. Each has its own workspace, instructions, identity, and memory. Everything else is shared: the tools, the secrets, the container. They can also talk to each other. Each has its own Telegram chat, so I can run several conversations in parallel, and a group called Yggdrasil is there when a conversation needs more than one of them.

Any of them can manage the Proxmox server itself, not just the container they live in. That is as powerful as it sounds, and I will come back to the risk. I was hundreds of kilometers from home when I asked Friday to set up [Project NOMAD](https://github.com/Crosstalk-Solutions/project-nomad), an offline knowledge server with Wikipedia, books, and maps. She created a new LXC container and installed it.

So the split is about focus, not separation. Friday did plenty of technical work before Wednesday existed, and nothing stops her from doing more. The rule that makes it work is ownership: the agent I ask owns the task. It can pull in another agent for help, but handing the task off needs my agreement.

{{< figure src="team-ownership.svg" alt="Ownership map: Nuno chooses Friday for personal operations, Wednesday for technical work, or Thursday for editorial work. The addressed agent owns the task and returns the result to Nuno; handoffs require explicit agreement." >}}

*Three roles, one org chart, and me still in the middle of it.*

## Friday: Groceries, school, and the calendar

Friday's access is what makes her useful. She reads Gmail and manages Google Calendar through [gog](https://github.com/openclaw/gogcli), sees WhatsApp through a read-only local mirror, tracks tasks in [Linear](https://linear.app) through its MCP server, and works on GitHub with the [`gh` CLI](https://cli.github.com) under her own account. She reads my health data from a custom server that receives it from my iPhone. She also has Notion, and Telegram, where most of our conversations happen. Email and WhatsApp stay read-only, and calendar changes need my confirmation.

Friday's daily briefing brings together my calendar, tasks, inbox, messages, health signals, and a short selection of tech and AI news. Getting that useful took mundane corrections: leave out completed tasks, stop showing onboarding templates, combine competing morning notifications, and keep the result short enough to read on my phone.

Calendar planning had to account for the day I actually had: work blocks around existing commitments, with breaks, instead of a full calendar with no realistic way through it. That mattered most with the return to school. Friday extracted dates, tracked supplies and paperwork, and kept outstanding arrangements visible. Birthday invitations became calendar entries with reminders. Gifts became tasks with the actual idea attached, rather than another item called "buy gift."

For groceries, Friday uses recent orders and my usual essentials to fill a supermarket cart. I review it and check out myself, and the delivery window goes on the calendar.

She also helped me compare health reports and prepare questions for my doctor, and extended the health server to import workouts and remove duplicate exports. The data has limits: a strength-training record without exercise details cannot tell her sets and reps.

Local Whisper transcription turns my Portuguese and English voice notes into text without sending the audio to a cloud service. Talking into Telegram is often easier than opening another app and remembering where a thought belongs.

## Friday's work on Blowfish

Before Wednesday existed, Friday was also helping with engineering.

In July, she helped work through Blowfish's maintenance queue: dependencies, lockfiles, localization, templates, and community showcase additions. That included merging approved changes, checking the asset build, organizing release notes, and explaining why unsuitable changes should not land.

One review caught a configuration default that silently ignored an explicit `false`. Another caught an accessibility change pointing to an invalid landmark.

### The example site was not the product

The larger effort was [Blowfish v3](https://github.com/nunocoracao/blowfish/pull/3028), merged on 17 August: reusable landing-page components and rendering improvements that could not break existing sites.

I had to redirect it. The new example site depended on custom code that other theme users would not have, when the whole point was reusable components. Once I explained that, Friday moved the work into the theme itself. Even then, the upgrade was not free: the release still asked users to change how they import the theme as a Hugo module.

Follow-through included dependency fixes and [localizing 404-page quotes](https://github.com/nunocoracao/blowfish/pull/3052) across 36 locales, while preserving custom quotes and language fallback.

## Wednesday: Eva, experiments, and Blowfish

### Eva moves out

Eva is the voice-first companion I built with my daughter, using a Raspberry Pi Zero, PiSugar Whisplay hardware, and Portuguese from Portugal.

{{< article link="/posts/202601-building-eva/" showSummary=true compactSummary=true >}}

Wednesday took everything Eva had been and turned it into a new OpenClaw instance in her own LXC container, just for my daughter. Then he plugged Eva into a Discord server, so my daughter could talk to her from any of her devices.

The next part is the one I keep telling people about. Together, my daughter and I asked Eva to connect to her Raspberry Pi desktop and build a custom chat interface for the two of them. It worked. A little later I was watching my kid change her wallpaper and install games just by asking Eva.

Not everything stuck. The chat interface later threw an error, and some of the desktop setup did not survive a restart. Neither was fixed at the time of writing.

### Testing ideas quickly

Wednesday has also become my sounding board for technical ideas. When something sounds good in my head, he either builds a rapid proof of concept or quickly finds the limitation that kills it. Some ideas survived that and got more realistic. Others got parked in a day instead of a month.

Echos, an interactive-story game, showed the limit of that speed. Wednesday fixed an ending nobody could reach, added character traits and consequences, and made choices depend on them. Every test passed. When I played it, the game still had no objectives, progression, or satisfying ending. Tests can prove the paths work. They cannot tell you whether anyone would enjoy playing them. Before another pass, I need to be clearer about the game I actually want.

On Blowfish, Wednesday reviewed a documentation change across nine languages and reproduced the production build locally ([PR #3075](https://github.com/nunocoracao/blowfish/pull/3075)). In [PR #3082](https://github.com/nunocoracao/blowfish/pull/3082), merged on 3 September, he added a link that helps tools discover the machine-readable version of each page, without touching the regular HTML or the existing `llms.txt`.

## Thursday: Traffic numbers and the draft backlog

Thursday started with a baseline for Blowfish, Watchfire, and n9o.xyz: repositories, social profiles, analytics, and Search Console, with a clear note of which numbers could not be read at all.

One distinction mattered more than I expected. Plenty of other people's sites run Blowfish, and their traffic is not "visits to my website." Thursday separated traffic to my own sites from signs of Blowfish adoption, so I can track both without mixing them up.

After studying my writing, Thursday recorded a rule: **signal or funny**. Start with a concrete observation or real work. Do not generate another declaration about the future of AI just because it sounds plausible.

Thursday then built a twelve-week plan from my actual drafts and story seeds, and flagged the ones that overlapped. I already had plenty of ideas. I needed help deciding which were worth finishing.

Keeping it going was harder. The plan drifted, some scheduled metric checks started failing, and an automation that queued engagement opportunities turned into noise and was removed.

The biggest lesson was about the social networks themselves. Connecting an agent to my own social accounts is hard, and on some platforms close to impossible right now. Reading metrics, following conversations, and posting all run into restricted APIs, expensive access tiers, or automation rules that treat an assistant like a bot. So Thursday could prepare replies and posts for me to review, but I still had to publish them by hand.

I can't claim audience growth from this yet. What I have is a baseline, a clearer backlog, and a plan that needs updating.

## The risk

Giving three agents the keys to a Proxmox server is exactly as risky as it sounds. Separate workspaces are not a security boundary. Any of the three can use the secrets the others use, and any of them can create, change, or delete containers on the host, including the one they live in. Instructions about what to leave alone help, but instructions are not isolation.

My safety net is that I built the infrastructure myself, agent state is inspectable, and container backups give me a way back when something goes wrong. That is enough for a personal experiment. It would not be enough for anything I could not afford to lose for a day.

It is also not fully local. Local embeddings and voice transcription keep some data at home, but hosted models still do the main reasoning, and anything an agent retrieves can end up in that conversation.

## Managing the assistants

I have spent more time than I wanted correcting how the agents report their work.

{{< figure src="management-meme.svg" alt="Always Has Been meme: an astronaut asks, 'Wait, it's all managing the assistants?' The other replies, 'Always has been.'" >}}

*The part missing from the org chart. Template: [Always Has Been](https://knowyourmeme.com/memes/wait-its-all-ohio-always-has-been), via [Imgflip](https://imgflip.com/memetemplate/252600902/Always-Has-Been).*

Some problems were plumbing. Scheduled jobs ran with outdated instructions, monitoring kept reporting incidents that had already recovered, and repository alerts announced the same backlog over and over.

Others came from the agents themselves: claiming work was done before it was, sending duplicate messages, and announcing fixes before checking them end to end. A successful Notion write does not prove the page says what I asked for. A job marked successful can still contain a failed check.

So I added explicit rules, some borrowed from [ECC](https://github.com/affaan-m/ecc), an open-source collection of agent practices:

- Define success before changing anything, then verify the result.
- "Prepared," "tested," "published," and "finished" are different states.
- Check the saved result, not just the tool response.
- Routine monitoring stays quiet when there is nothing actionable.
- A recommendation is not permission to act. Preparing a post or a grocery cart does not authorize publishing or checkout.

Some fixes held. Others did not. The overnight job where the agents consolidate the day into long-term memory still stalls now and then, and I still check whether they can actually find saved notes in later conversations.

## Where I am with it

Wednesday and Thursday have only been running for two weeks, so this is an early read, not a verdict. Still, three things are already clear.

**The value is real when it works.** A new container installed while I was hundreds of kilometers away. Back-to-school dates and paperwork tracked without a spreadsheet. Blowfish maintenance moving forward. My daughter installing games on her own computer by talking to Eva. None of that is a demo. It is my actual week, and I still decide what to work on and approve the consequential actions. Having research, a draft, or an implementation ready to review just gets me to those decisions faster.

**Some of the world is not ready for agents yet.** The limits were rarely the models. My supermarket has no proper way for an assistant to plug in. The social networks are worse: Thursday can draft, but most platforms make it hard or impossible for my own agent to read, reply, or post on my behalf. The layer that lets a personal agent connect to the services we use every day barely exists outside a few services like GitHub, Google, and Linear. Until it does, a lot of what these agents could do stops at "prepared for review."

**This is not a consumer product.** Nothing here was install and go. It took a Proxmox server, LXC containers, custom code, scripts, a custom health server for my iPhone data, and a lot of configuration. When an OpenClaw update broke things, the fix was to open Claude Code inside the container and have one AI repair the home of the others. I enjoy that kind of tinkering. Most people should not have to do it, and right now they would.

What frustrates me is chasing a promised result, correcting the same completion claim, or reading an alert that changes nothing. If the system saves me twenty minutes and then asks for an hour of management, the balance is wrong. Sometimes I am not sure whether the ecosystem just isn't there yet, or whether we are all sitting at a slot machine in the AI casino, pulling the lever one more time.

For now, getting these three to follow through reliably needs more attention than adding a fourth.
