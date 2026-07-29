---
title: "Watchfire: A Control Room for AI Coding Agents"
summary: "An open-source control room for running AI coding agents across projects — it isolates the work, manages tasks and worktrees, and tells you when attention is actually needed. Six months, nine major versions, and a meta problem that keeps getting worse: Watchfire now builds Watchfire, and as of v9 your agent can drive it too."
description: "An open-source control room for running AI coding agents across projects — it isolates the work, manages tasks and worktrees, and tells you when attention is actually needed. Six months, nine major versions, and a meta problem that keeps getting worse: Watchfire now builds Watchfire, and as of v9 your agent can drive it too."
categories: ["Tech", "AI", "Makers"]
tags: ["AI", "Claude Code", "vibe coding", "side projects", "watchfire"]
date: 2026-08-02
draft: true
---

AI coding agents stopped being a demo about a year ago. Claude Code, Codex, opencode, Gemini CLI, Copilot CLI, Cursor Agent — they all genuinely write code now. The bottleneck moved. It's not "can the agent build this." It's "can I keep track of what five agents are doing across six repos without losing my mind."

I started running into that wall every day. So I built a tool. I called it Watchfire.

**Watchfire is an open-source control room for running AI coding agents across projects: it isolates the work, manages tasks and git worktrees, and tells you when attention is actually needed.** It's for a solo developer or a small team already running multiple long-lived agent tasks. It is not a replacement for your IDE, and it's overkill for a one-off Claude Code session.

Six months in, it has an uncomfortable property: **Watchfire builds Watchfire**. Every feature below was specced, executed and merged by agents that Watchfire itself was orchestrating — including the release that let *your* agent do the same thing. That loop is the reason this post exists, and I'll show you the receipts.

{{< figure src="img/watchfire-v91-dashboard.webp" alt="The current Watchfire dashboard" caption="The Watchfire dashboard today — working/idle/done-today pulse, an attention banner that's quiet when things are fine, and fleet insights that count what the agents actually shipped: 69 tasks, 202 commits, +64,979 net lines in a week." >}}

## The Problem That Forced the Tool

For a few weeks at the start of the year I was bouncing between five projects and three terminal windows. Each project had its own Claude Code session. Each session had its own permission prompts, its own rate-limit hiccups, its own half-finished task I'd forget about as soon as I switched windows. The agents were doing great work. I was the slow piece.

A few things in particular:

- **Babysitting prompts.** Every shell command needed approval. Every file write needed approval. I'd come back from a coffee to find an agent paused on the second prompt of a 50-step task.
- **No aggregate view.** What's actively running? What's blocked? What did agent #3 do in the last hour while I was looking at agent #1? Nothing told me.
- **Silent failures.** Agents would die on a merge conflict, a rate limit, a malformed YAML, and just... stop. I'd notice an hour later.
- **Lost context.** Switching between projects meant re-explaining conventions, re-pasting CLAUDE.md, re-loading the mental model of what was where.

Watchfire started as a Sunday-afternoon escape from that pain.

## What Watchfire Is Today

Four things it actually does for you:

- **You stop approving things.** Work is filed as tasks with a prompt and acceptance criteria, then executed unattended. You come back to a merged branch, not a paused prompt.
- **You see the whole fleet at once.** One dashboard across every project: what's running, what's blocked, what finished today, what it cost. The attention banner stays quiet unless something genuinely needs you.
- **Nothing collides.** Every task runs in its own git worktree behind an OS sandbox, so parallel agents across projects can't corrupt each other's work — or reach your credentials.
- **The work leaves a paper trail.** Per-task metrics — duration, cost, commits, files, lines, how the merge landed — roll up into per-project and fleet-wide Insights, plus CSV/Markdown exports and a weekly digest.

It currently supports **six agent backends** through a single `Backend` interface — Claude Code, OpenAI Codex, opencode, Gemini CLI, GitHub Copilot CLI, and Cursor Agent — each in its own isolated config dir (`CODEX_HOME`, `OPENCODE_CONFIG_DIR`, `COPILOT_HOME`) so credentials and prompts don't bleed between sessions. You can override the agent per task.

### Two Layers of Blast Radius

This is the part I'd want to know about if someone else had built it, because "walk away and let it run" is only reasonable if you know what "it" can reach.

Every task runs behind **two independent layers of isolation**. The first is a git worktree: each task gets its own `watchfire/<task_number>` checkout, so two agents in the same repo can't see each other's half-finished edits, and nothing lands on your branch until the run succeeds and merges. The second is an OS-level sandbox around the agent process — **Seatbelt** on macOS, **Landlock** on Linux 5.13+, with a **bubblewrap** mount-namespace fallback on older kernels.

The sandbox is a filesystem allowlist with opinions. Writable: the project directory, temp, and the caches real builds need (`~/.npm`, `~/.cargo`, `~/go`, `~/.rustup`). Readable: compilers, system libraries, tool config. Blocked outright: `~/.ssh`, `~/.aws`, `~/.gnupg`, `.netrc`, `.npmrc`, `.env` files, `.git/hooks`, and on macOS your personal folders. An agent that goes looking for your deploy keys finds nothing there.

Two honest caveats, both of which the [sandboxing post](https://watchfire.io/blog/2026-05-19-how-watchfire-sandboxes-every-agent) states plainly rather than burying: the sandbox is filesystem-focused and does **not** block outbound HTTPS today, and **Windows currently runs unsandboxed** — worktree isolation applies, the OS layer doesn't. Both are on the list.

That combination is what makes everything else in this post defensible. Bypassing permission prompts is only sane when the blast radius is a disposable worktree and a filesystem the agent can't wander out of.

### Under the Hood

A **Go daemon** (`watchfired`) owns orchestration, sandboxing, PTY emulation, worktrees and a gRPC server. Three clients talk to it: a **Bubble Tea TUI** for terminal and SSH work, an **Electron + React GUI** that opens one OS window per project, and a thin **CLI**. The daemon advertises its port through `~/.watchfire/daemon.yaml`, and a `flock` on the lockfile guarantees one daemon per user — no more "two windows fighting over the same worktree." Agent output streams through a PTY parsed daemon-side by a real VT emulator (`hinshun/vt10x`), so ANSI renders properly everywhere.

State is YAML on disk, everywhere — a registry, global settings, integrations, and per-project `project.yaml` plus `.watchfire/tasks/<n>.yaml` files — with atomic writes (tmp + `fsync` + `rename`) since v6.0, which closed a data-loss race the hard way. Everything is greppable, diffable and survives git.

And since v9 there's a fourth client that isn't a UI at all: `watchfire mcp serve` exposes the whole orchestrator as an MCP server. That one gets its own section.

## A Quick Tour

The thing I missed most in those early terminal-only days was a *dashboard*. Not a list of projects — a status. Where are we? What's stuck? What did agents do today?

{{< figure src="img/watchfire-v91-dashboard.webp" alt="Watchfire fleet dashboard" caption="Mission control: the pulse line up top (working / needs attention / idle / done today), an all-clear banner, fleet insights with 7d/30d/90d/All windows, filter pills, and a card per project carrying its own task counts and code churn." >}}

Click a project and it opens in its own window — the v8 "Inferno" redesign. The layout is chat-primary: the agent conversation is the wide pane, and Tasks / Definition / Insights / Secrets / Trash / Settings live in a tabbed sidebar on the right:

{{< figure src="img/watchfire-v91-chat.webp" alt="A Watchfire project window with the agent stream on the left and the task queue on the right" caption="A project window: chat first, everything else is reference. This one is Watchfire's own repo, 126 tasks deep, sitting idle on a fresh Claude Code session." >}}

Every project has a markdown **Definition** that gets folded into the prompt context. It's the project's standing brief — what it is, what conventions matter, what files matter — and it's what makes a multi-project workflow feasible, because agents start with context instead of a blank brain:

{{< figure src="img/watchfire-definition.webp" alt="The project Definition tab" caption="The Definition tab. Edit it inline or shell out to $EDITOR." >}}

Per-project **Insights** answer "what did I actually do this week" — tasks per day, agent breakdown, duration distribution, cost, and since v8 the code metrics too:

{{< figure src="img/watchfire-insights.webp" alt="Per-project insights" caption="Per-project Insights: KPIs, tasks-per-day, agent breakdown donut, duration distribution. There's also a fleet-wide rollup on the main dashboard." >}}

**Wildfire** is the autonomous mode: Watchfire executes ready tasks, refines drafts, and generates new ones in a loop until the project definition says done. It got a first-class GUI in v8 — a start button with a confirmation modal, and a live phase stepper while it runs. The [Inside Wildfire mode](https://watchfire.io/blog/2026-05-18-inside-wildfire-mode) post has the full mechanics:

{{< figure src="img/watchfire-wildfire-confirm.webp" alt="The Start Wildfire confirmation modal" caption="The modal says the quiet part out loud: an autonomous loop that runs unattended and spends tokens continuously, replacing whatever agent is currently on the project. Two sentences that have saved me from myself more than once." >}}

Global **Settings** grew searchable sub-pages, and the **Open** split-button detects which editor CLIs are actually installed — VS Code, Cursor, Windsurf, Zed, JetBrains, Sublime, Xcode, Fleet, or the file manager:

{{< figure src="img/watchfire-settings-defaults.webp" alt="Global settings, Defaults page" caption="Fleet-wide defaults: which agent new projects get, and whether they auto-merge, auto-delete branches, and auto-start ready tasks. Per-project settings override all of it." >}}

{{< figure src="img/watchfire-open-ide.webp" alt="The Open menu showing installed editors" caption="The Open menu only shows editors on your machine. Works even when the GUI's PATH is stripped." >}}

For the hours when Watchfire shouldn't be the thing on screen, v8 added the **Mini Monitor** — a frameless always-on-top strip — and a **tray menu** carrying the same status plus the daemon's port:

{{< figure src="img/watchfire-mini-monitor.webp" alt="The Mini Monitor window" caption="The Mini Monitor: the whole fleet in a strip the size of a Post-it. The orange line is the one project actually doing something." >}}

{{< figure src="img/watchfire-tray-menu.webp" alt="The macOS tray menu" caption="The tray menu: version, daemon port, working/idle breakdown, notifications. Glanceable from any app." >}}

The same workflow exists in a **TUI**, because half of my dev work happens over SSH to a Linux box, and a thin **CLI** covers everything the daemon can do:

{{< figure src="img/watchfire-tui.webp" alt="Watchfire TUI" caption="The TUI mirrors the GUI's two-pane layout: tasks on the left, agent stream on the right, with shortcuts for chat / generate / plan / run all / wildfire / stop." >}}

{{< figure src="img/watchfire-tui-edit-task.webp" alt="TUI edit-task modal" caption="Tasks are first-class in the TUI too — title, prompt, acceptance criteria, agent override, status." >}}

{{< figure src="img/watchfire-cli-help.webp" alt="watchfire --help" caption="The CLI surface: chat, configure, daemon, define, generate, init, integrations, metrics, plan, run, task, update, wildfire — and, since v9, mcp." >}}

## The Proof: 30 Days of Vibe Coding

In April I committed to [30 days, 30 AI-built projects](/posts/202604-vibe30/announcement/). One a day, every day. Claude Code on a Max 20x plan, Watchfire orchestrating, Context7 MCP feeding fresh docs to agents.

The plan was to ship side projects. What I didn't expect: **Watchfire became the project being stress-tested every single day**, and the issues queue I cut for myself turned into the most aggressive product roadmap I've ever run.

A few representative beats from the [series](/series/30-days-of-vibe-coding/):

- **Day 1 (Platformer)** — *"I didn't sit there approving every file change. Watchfire queued up the tasks and worked through them. I came back to a working game."* The walk-away loop worked on day one. It also instantly exposed everything that wasn't ready: garbled terminal output, agent restart loops on rate limits, the sandbox blocking `~/Desktop` on macOS.
- **Day 12 (Wordle)** — *"Each task layered on a specific category of polish, and none of them broke what came before."* The incremental task model was the only reason that worked. Big-bang prompts kept breaking; many small scoped tasks didn't.
- **Days 27–28 (Terminal, ideA)** — Cross-platform native CI/CD hell. *"Watchfire helped a lot here by going on endless loops of debugging, testing, running, failing, and repeating until the pipeline finally worked. Without that persistence, I would have given up on cross-platform releases."*
- **Day 30 (miniOs)** — *"Day 1, I built a platformer from one sentence. Day 30, I built an operating system that contains the platformer, and everything I made in between."*

Across the 30 days: **~450 tasks executed through Watchfire and ~1,200 commits**, with about 326k lines changed — that's Watchfire's own tally of insertions plus deletions, a measure of churn rather than a productivity claim. Five major Watchfire versions shipped during the challenge alone (Ember → Spark → Blaze → Beacon → Flare).

Somewhere in there the tool crossed a line I hadn't planned for.

## The Meta Bit

There's a moment — somewhere in the second week — when the loop closes. You're using Watchfire to build a project. The project surfaces a bug in Watchfire. You file the bug as a Watchfire task. Watchfire runs an agent to fix Watchfire. The fix ships. Then you go back to the original project, still waiting in another tab.

The first time it happens it's funny. By the tenth time it's just the workflow. By the wrapup it's the whole point:

> *Or more accurately, Watchfire is building Watchfire now. The tool orchestrates its own development.*

That was written in May. In July it stopped being a line in a blog post and became a release process. Every task in v9's queue — the MCP server skeleton, the task-factory tools, the run tools, the inspect tools — was authored, executed, and merged through Watchfire:

{{< figure src="img/watchfire-v8-building-v9.webp" alt="Watchfire's own project window with the v9 task queue in development" caption="v8 building v9: nine tasks in development, every one of them a piece of the MCP server, running in Watchfire's own repo inside Watchfire." >}}

And when the queue was done, the agent staged the release itself:

{{< figure src="img/watchfire-v9-release-chat.webp" alt="The Watchfire agent reporting that v9.0.0 is staged as a draft release" caption="The v9.0.0 endgame, verbatim: version bumped, CHANGELOG written, 22 commits pushed, release workflow green, 20 assets staged as a draft — and the agent stopping at the one irreversible step to ask whether it should publish. It understood the difference. I said yes." >}}

The website is in the loop too. [watchfire.io](https://watchfire.io) — docs, tour, changelog, blog — is a Watchfire project like any other, built task by task by the thing it documents. There's a whole post about that, written by the process it describes: [Watchfire eats its own dogfood](https://watchfire.io/blog/2026-05-19-eating-our-own-dogfood).

{{< figure src="img/watchfire-website-v91.webp" alt="A Watchfire agent updating watchfire.io to v9.1" caption="Four words of prompt — \"update watchfire website to 9.1\" — and the agent finds every place the version is asserted (hero badge, JSON-LD, changelog, RSS), writes the release notes, verifies the build, and stops short of committing. Note the judgment call in the middle: it left one badge pointing at 9.0 because that's still the tentpole release and 9.1 is a bug-fix." >}}

The reason none of this is a gimmick is that a tool which can build itself has, by definition, the right surface area for the job. Every paper cut a human felt got logged and fixed by the same machinery. Every "I wish it would..." became a draft task in seconds. And v9 is that observation productized: if Watchfire could already build Watchfire, the only thing missing was letting *your* agent do the driving too.

## Plugging a Chat Into the Factory

Which brings me to the part of v9 I've been enjoying the most. Connecting an agent to the factory is not a config-file scavenger hunt — it's a Settings page. Watchfire detects which agent CLIs are on your machine and writes the MCP entry into each one's config with a single click:

{{< figure src="img/watchfire-mcp-settings.webp" alt="The Settings → MCP page with one-click installs per agent" caption="Settings → MCP: one card per agent CLI. Claude Code is a click — Watchfire writes the entry into ~/.claude.json. Codex and Copilot were auto-detected and one Install away. There's a copyable snippet for anything else. Stdio only, host-local, nothing on the network." >}}

I pressed the Claude Code button, restarted a session, and the terminal I write this blog in became a Watchfire client. This isn't hypothetical — the draft you're reading was edited in a Claude Code session that, over MCP, listed my nine registered projects, noticed one had a Wildfire run in its execute phase, and pulled that project's full 118-task queue to fact-check this very post. No Watchfire window involved.

Once you have that, a bunch of workflows stop being science fiction:

- **Plan outside, manufacture inside.** You brainstorm with an agent in chat — any chat — and instead of it pasting code at you, it files scoped tasks with acceptance criteria and lets Watchfire run them sandboxed, in worktrees, with merges and metrics. The conversation stays a conversation; the code happens in the factory.
- **Cross-project work from one seat.** A session sitting in this blog's repo can file a bug it just found in Watchfire's repo, or kick off a docs update on the website project, without changing directories or windows.
- **Agents reviewing agents.** The outer agent reads `get_task_diff` after a run and decides whether to file a follow-up — a reviewer loop where the reviewer never touches the worktree.
- **Bug reports that write themselves.** While drafting this section I asked the connected session for the test project's insights and got a wall of zeros back. That turned into a task, which turned into v9.1 two days later. The outer agent found the bug by *using* the factory, which is exactly the loop this whole post keeps circling.

The factory metaphor stops being a metaphor at this point. Watchfire handles the manufacturing — isolation, execution, merging, bookkeeping — and anything that speaks MCP can stand at the order desk.

## The Stress Test: Neon Fable

To find out whether v9 actually holds up, I pointed it at something deliberately unreasonable: `rpg-fable-test`, a browser-based cyberpunk RPG called **Neon Fable**, built almost entirely by Wildfire, with me mostly writing the project Definition and watching the queue burn down.

{{< figure src="img/game/neon-fable-definition.webp" alt="Wildfire running with the Neon Fable project definition open" caption="The whole setup: a Definition that describes the game (three-act branching story, isometric renderer, turn-based combat, cyberware inventory) and a Wildfire loop that turns it into tasks. v1 — the complete playable loop — shipped as tasks #1–18." >}}

The v1 queue took the game from `npm create vite` to a finished loop: character creation, a branching three-act story, seeded turn-based combat, inventory and cyber-enhancements, multiple endings, an endings codex, New Game+. All pixel art authored *in code* as palette-indexed string grids, because that's what an agent can iterate on. The v2 queue — a high-detail graphics overhaul and a modular character appearance system — was generated by Wildfire itself and currently stands at **118 tasks, 60 done**. Its own test suite passed 902 tests around task #40 and has only grown. In the last seven days that one project accounts for 60 merged tasks and roughly +56,500 net lines — every one written while I was doing something else.

{{< figure src="img/game/neon-fable-wildfire.webp" alt="Wildfire executing a Neon Fable art task" caption="Wildfire in its execute phase on \"Day-phase neon states — dusk, night, late-night\", hand-authoring emissive color ramps in TypeScript. 58 tasks still queued behind it. The Vite dev server in the docked shell hot-reloads the game as each change lands." >}}

And this is what comes out the other end:

{{< figure src="img/game/neon-fable-title.webp" alt="The Neon Fable title screen" caption="Neon Fable's title screen. New Game, Continue, Load, an endings codex, settings — all Wildfire tasks." >}}

{{< figure src="img/game/neon-fable-gameplay.webp" alt="Isometric gameplay in Cinder Row Plaza" caption="Cinder Row Plaza in the hi-res v2 art: 64×32 isometric tiles, animated neon signage, layered NPC sprites — every pixel authored as code by an agent that cannot see." >}}

I'll do a proper write-up of the game when the v2 queue is empty. But as a stress test it has already answered the question: the factory doesn't just fix its own bugs and write its own docs — pointed at something as fiddly as *pixel art and game feel*, it keeps shipping.

## How It Got Here

The first version wasn't even called Watchfire. It was **FORGE** — a single Electron window with a project selector, a task list, and an embedded terminal running Claude Code. Rough: thin task model, garbled output, switching projects meant restarting the app. But the core idea was already there — queue work, watch it execute, don't touch the terminal directly.

{{< figure src="img/forge-jan.webp" alt="FORGE on Jan 12, 2026" caption="January 12: FORGE. One project at a time, tabbed layout, no dashboard, no metrics, no multi-agent. The Claude Code pixel-art avatar in the welcome message stuck around longer than it should have." >}}

By early February I restarted the repo from scratch in Go — gRPC instead of HTTP, YAML instead of SQLite, three binaries instead of one Electron monolith. That's the codebase still running today. Then April happened, and the versioning picked up a theme: every major release is fire-coded, and the cadence tells you exactly what hurt that month.

- **v1.0 "Ember"** *(early April)* — first real release. Transcript discovery from Claude Code's `~/.claude/projects/`, a restart-loop guard after three crashes, the Seatbelt fix for `~/Desktop` projects.
- **v2.0 "Spark"** *(mid-April)* — the pluggable backend interface. Codex, opencode and Gemini CLI ship the same day, with per-task agent override and per-session config isolation.
- **v3.0 "Blaze"** *(late April)* — Copilot CLI as the 5th backend, plus a fortnight of bleeding stopped: a cross-filesystem `EXDEV` bug that ate Linux updates, task-list rotation, GUI update loops.
- **v4.0 "Beacon"** *(day 28)* — the turning point from task runner to *operations* tool. Dashboard rebuild, per-task metrics, Insights, exports, weekly digest, OS notifications, Slack/Discord/webhook relays with signature verification, GitHub auto-PR.
- **v5.0 "Flare"** *(day 30)* — OAuth Slack and Discord bots, an inbound HTTP server with rate limiting and idempotency, GitLab/Bitbucket merge parity, and a fix for `run-all` silently halting on merge failure. Turns out a silent dashboard is the second-worst dashboard.
- **v6.0 "Phoenix"** *(early May)* — atomic YAML writes, the `flock` singleton daemon, Cursor Agent as the 6th backend, and a TUI that grew real scrollback.
- **v7.0 → v7.4 "Forge"** *(May–June)* — task reordering everywhere, a chat viewport that stops snapping to the top, focus-chat mode, and my favorite war story: a daemon log finally size-capped after one user's grew to **300 GB** on disk before anyone noticed. [The post-mortem](https://watchfire.io/blog/2026-05-29-forge-7-3-the-300gb-log) is worth the click.
- **v8.0 "Inferno"** *(end of June)* — one OS window per project, a mission-control home window, the Wildfire GUI, the Mini Monitor, and code-output metrics that measure shipped code rather than closed tasks. ([release post](https://watchfire.io/blog/2026-06-29-inferno-8-0-parallel-workspaces))
- **v9.0 "Firestorm"** *(July 26)* — the role inversion: an 18-tool MCP factory, stdio-only, with a `--read-only` mode and safety rails throughout. ([release post](https://watchfire.io/blog/2026-07-26-firestorm-9-0-watchfire-as-a-factory))
- **v9.1** *(July 29)* — the `completed_at` fix from a few sections ago, back-filling ~580 historical tasks so Insights, exports and the digest all light up.

Two screenshots, four months apart, say the rest:

{{< figure src="img/watchfire-april.webp" alt="Watchfire in April 2026" caption="April 27: the Go rewrite's GUI — recognizable, but no Insights, no fleet KPIs, no live previews. This is the version that ran most of the 30-day challenge." >}}

Compare that to the dashboard at the top of this post. Same tool, thirteen weeks apart.

## What's Next

- More agent backends as they appear. The `Backend` interface is the single integration point — anything that speaks shell and produces a transcript can join.
- A wider MCP surface: richer inspection tools, and letting long-running outer agents supervise whole fleets rather than single projects.
- Better diff and review tooling. The inline viewer is in; what's missing is a proper PR-style "review then merge" surface for tasks that need a human eye.
- Team workflows. The file-based task model already survives git — shared task lists and review surfaces are the natural extension.

## Try It

Watchfire is open source under Apache 2.0, and runs on macOS, Linux and Windows.

{{< button href="https://github.com/watchfire-io/watchfire" target="_blank" >}}
Watchfire on GitHub
{{< /button >}}

On macOS, installing is one line:

```bash
brew tap watchfire-io/tap && brew install --cask watchfire-io/tap/watchfire
```

Everything else: [download the latest release](https://github.com/watchfire-io/watchfire/releases/latest) · [docs](https://watchfire.io/docs) · [changelog](https://watchfire.io/changelog) · [blog](https://watchfire.io/blog)

If you're juggling more than one AI agent and have caught yourself alt-tabbing between terminals, it might be the thing you're missing. It was for me.

*Built with too many agents at once. Managed by Watchfire. Powered by the version of "vibe coding" where you actually have to ship something at the end of the day.*
