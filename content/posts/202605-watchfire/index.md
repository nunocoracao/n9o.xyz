---
title: "Watchfire: A Control Room for AI Coding Agents"
summary: "Five months, seven major versions, and around 450 tasks shipped through the tool itself. The story of how a side-prototype to babysit Claude Code turned into a multi-agent orchestrator with a daemon, an Electron GUI, a Bubble Tea TUI, and a meta problem: Watchfire now builds Watchfire."
description: "Five months, seven major versions, and around 450 tasks shipped through the tool itself. The story of how a side-prototype to babysit Claude Code turned into a multi-agent orchestrator with a daemon, an Electron GUI, a Bubble Tea TUI, and a meta problem: Watchfire now builds Watchfire."
categories: ["Tech", "AI", "Makers"]
tags: ["AI", "Claude Code", "vibe coding", "side projects", "watchfire"]
date: 2026-08-02
draft: true
---

AI coding agents stopped being a demo about a year ago. Claude Code, Codex, opencode, Gemini CLI, Copilot CLI, Cursor Agent — they all genuinely write code now. The bottleneck moved. It's not "can the agent build this." It's "can I keep track of what five agents are doing across six repos without losing my mind."

I started running into that wall every day. So I built a tool. I called it Watchfire.

This post is the long version of what it is, why it exists, and how the [30 Days of Vibe Coding](/posts/202604-vibe30/announcement/) challenge took it from a Jan prototype called *FORGE* to **v7.3.0 "Forge"** in five months and seven major releases.

{{< figure src="img/watchfire-dashboard-now.png" alt="The current Watchfire dashboard" caption="The current Watchfire dashboard — fleet status, daily activity, per-project cards with live agent output." >}}

## The Problem That Forced the Tool

For a few weeks at the start of the year I was bouncing between five projects and three terminal windows. Each project had its own Claude Code session. Each session had its own permission prompts, its own rate-limit hiccups, its own half-finished task I'd forget about as soon as I switched windows. The agents were doing great work. I was the slow piece.

A few things in particular:

- **Babysitting prompts.** Every shell command needed approval. Every file write needed approval. I'd come back from a coffee to find an agent paused on the second prompt of a 50-step task.
- **No aggregate view.** What's actively running? What's blocked? What did agent #3 do in the last hour while I was looking at agent #1? Nothing told me.
- **Silent failures.** Agents would die on a merge conflict, a rate limit, a malformed YAML, and just... stop. I'd notice an hour later.
- **Lost context.** Switching between projects meant re-explaining conventions, re-pasting CLAUDE.md, re-loading the mental model of what was where.

Watchfire started as a Sunday-afternoon escape from that pain.

## From FORGE to Watchfire (Jan–Feb 2026)

The first version wasn't even called Watchfire. It was called **FORGE** — a single Electron window with a project selector, a task list, and an embedded terminal running Claude Code.

{{< figure src="img/forge-jan.png" alt="FORGE on Jan 12, 2026" caption="FORGE on Jan 12, 2026. Tabs were Agent / Tasks / History / Archived / Settings. The Claude Code pixel-art avatar showed up in the welcome message — I never got around to removing it." >}}

It was rough. The task model was thin, the terminal output was garbled, switching projects required restarting the app. But the core idea was already there: queue work, watch it execute, don't touch the terminal directly.

Within a couple of weeks the layout had grown into three panes — projects on the left, tasks in the middle, an "Agent Panel" on the right with Live / Chat / Branches sub-tabs:

{{< figure src="img/forge-three-pane.png" alt="The three-pane FORGE layout" caption="Mid-January: three panes, status-grouped task accordions (Done / In Review / Running / Ready / Todo), a real agent panel with live output." >}}

I also tried a web version that didn't survive the year:

{{< figure src="img/watchfire-web-splash.png" alt="The short-lived watchfire-web bootstrap screen" caption="The browser version's splash, late January. The project survived a few weeks before I decided to consolidate on the desktop app." >}}

By early February the rewrite was on. I started the current `watchfire` Go repo from scratch — gRPC instead of HTTP, YAML instead of SQLite, three binaries (`watchfired`, `watchfire`, `Watchfire.app`) instead of one Electron monolith. That's the codebase that's still running today.

Then April happened.

## What 30 Days of Vibe Coding Actually Did

I committed to [30 days, 30 AI-built projects](/posts/202604-vibe30/announcement/). One a day, every day. Claude Code on a Max 20x plan, Watchfire orchestrating, Context7 MCP feeding fresh docs to agents.

The plan was to ship side projects. What I didn't expect: **Watchfire became the project being stress-tested every single day**, and the issues queue I cut for myself turned into the most aggressive product roadmap I've ever run.

A few representative beats from the [series](/series/30-days-of-vibe-coding/):

- **Day 1 (Platformer)** — *"I didn't sit there approving every file change. Watchfire queued up the tasks and worked through them. I came back to a working game."* That walk-away loop was the whole point and it worked on day one. It also instantly exposed everything that wasn't ready: garbled terminal output, agent restart loops on rate limits, the sandbox blocking `~/Desktop` on macOS.
- **Days 8–9 (NotesTUI, TaskTUI)** — Both projects shipped their own MCP servers so Claude could read/write data into the TUIs live. Watchfire had to actually keep up with multi-agent + MCP server lifecycles.
- **Day 12 (Wordle)** — *"Each task layered on a specific category of polish, and none of them broke what came before."* The incremental task model was the only reason that worked. Big-bang prompts kept breaking. Many small scoped tasks didn't.
- **Day 15 (MyBrute)** — Four full character redesigns before the art read at combat scale. Playtesting, not coding, was the bottleneck — a phrase that keeps coming back through the rest of the challenge.
- **Days 27–28 (Terminal, ideA)** — Cross-platform native CI/CD hell. *"Watchfire helped a lot here by going on endless loops of debugging, testing, running, failing, and repeating until the pipeline finally worked. Without that persistence, I would have given up on cross-platform releases."*
- **Day 29 (n0ti0n)** — A multi-day Firestore saga. Dozens of commits debugging production. The "Start All" / Wildfire modes earned their keep.
- **Day 30 (miniOs)** — *"Day 1, I built a platformer from one sentence. Day 30, I built an operating system that contains the platformer, and everything I made in between."*

Somewhere in there the tool crossed a line I hadn't planned for: it started building itself. More on that below.

By the numbers across the 30 days: **~450 tasks executed through Watchfire, ~326k lines of code shipped, ~1,200 commits, five major Watchfire versions released during the challenge** (Ember → Spark → Blaze → Beacon → Flare), and two more after it (Phoenix and Forge).

## What Watchfire Is Today

Concretely: a **Go daemon** (`watchfired`) that owns orchestration, sandboxing, PTY emulation, git worktrees, and a gRPC server; a **Bubble Tea TUI** for project-scoped work in a terminal; and an **Electron + React GUI** (`Watchfire.app`) for the full multi-project view. The TUI and the GUI both talk to the same daemon over gRPC (with gRPC-Web for the browser-y front end), on a dynamically chosen port that the daemon advertises through `~/.watchfire/daemon.yaml`. A `flock` on the lockfile guarantees a single daemon per user — no more "two windows fighting over the same git worktree."

It runs on macOS, Linux, and Windows. Every agent task runs inside a platform sandbox (Seatbelt on macOS, Landlock with a bubblewrap fallback on Linux) and inside its own `watchfire/<task_number>` git worktree, so concurrent tasks across projects don't step on each other. Outputs stream live through a PTY, parsed daemon-side by a real VT emulator (`hinshun/vt10x`), and rendered with proper ANSI in both the GUI and the TUI.

It currently supports **six agent backends** via a single `Backend` interface:

- Claude Code
- OpenAI Codex
- opencode
- Gemini CLI
- GitHub Copilot CLI
- Cursor Agent

Each one runs in its own isolated config dir (`CODEX_HOME`, `OPENCODE_CONFIG_DIR`, `COPILOT_HOME`, etc.), so credentials and prompts don't bleed between sessions, and you can override the agent per task.

Storage is YAML, everywhere: `~/.watchfire/projects.yaml` for the registry, `~/.watchfire/settings.yaml` for global settings, `~/.watchfire/integrations.yaml` for Slack/Discord/webhook config, and per-project `.watchfire/project.yaml` plus `.watchfire/tasks/<n>.yaml` files. Writes are atomic (tmp + `fsync` + `rename`) as of v6.0, which closed a long-standing data-loss race the hard way.

## A Quick Tour

The thing I missed most in those early terminal-only days was a *dashboard*. Not a list of projects — a status. Where are we? What's stuck? What did agents do today?

{{< figure src="img/watchfire-dashboard-now.png" alt="Watchfire fleet dashboard" caption="Fleet view: status pulse line, 7d/30d/90d/All filters, KPI tiles (tasks, success rate, time spent, cost), filter pills, and a card per project with a live last-line preview of whatever the agent is doing." >}}

Click into a project and you land on its task board, with the agent's live conversation streaming on the right:

{{< figure src="img/watchfire-project-tasks.png" alt="Watchfire project task view with live chat" caption="A project's task list — drafts, ready, in-dev, done, trash — with a live Chat / Branches / Logs panel on the right and a docked terminal at the bottom." >}}

Every project has a markdown **Definition** that gets folded into the prompt context. It's the project's standing brief — what it is, what conventions matter, what files matter. The same Definition is what the agent reads before it touches anything:

{{< figure src="img/watchfire-definition.png" alt="The project Definition tab" caption="The Definition tab. Edit it inline or shell out to $EDITOR. This is the thing that makes a multi-project workflow actually feasible — agents start with project context instead of a blank brain." >}}

Per-project **Insights** are the answer to "what did I actually do this week" — tasks per day, agent breakdown, duration distribution, cost:

{{< figure src="img/watchfire-insights.png" alt="Per-project insights" caption="Per-project Insights: KPIs, tasks-per-day, agent breakdown donut, duration distribution. There's also a fleet-wide rollup on the main dashboard." >}}

The **Settings** tab is where you pick an agent for the project, set a color, and toggle the autonomous behaviors — auto-merge, auto-delete branches, auto-start ready tasks, mute notifications:

{{< figure src="img/watchfire-settings.png" alt="Project settings" caption="Project Settings: agent, color, auto-merge, auto-delete branches, auto-start tasks, and a Danger Zone for clean removal." >}}

The **Open** split-button became one of my favorite small things. Click the project in any installed editor — VS Code, Cursor, Windsurf, Zed, JetBrains, Sublime, Xcode, Fleet, or the OS file manager:

{{< figure src="img/watchfire-open-ide.png" alt="The Open menu showing installed editors" caption="The Open menu detects which editor CLIs are actually on your machine and only shows those. Works even when the GUI's PATH is stripped." >}}

The same workflow exists in a **TUI**, because half of my dev work happens over SSH to a Linux box:

{{< figure src="img/watchfire-tui.png" alt="Watchfire TUI" caption="The TUI mirrors the GUI's two-pane layout: tasks on the left, agent stream on the right, with keyboard shortcuts for chat / generate / plan / run all / wildfire / stop." >}}

{{< figure src="img/watchfire-tui-edit-task.png" alt="TUI edit-task modal" caption="Tasks are first-class in the TUI too — full edit modal with title, prompt, acceptance criteria, agent override, and status." >}}

And there's a thin CLI for everything the daemon can do:

{{< figure src="img/watchfire-cli-help.png" alt="watchfire --help" caption="The CLI surface: chat, configure, daemon, define, generate, init, integrations, metrics, plan, run, task, update, wildfire." >}}

## Five Months, Seven Versions

The versioning has a theme — every major release is fire-coded — and the cadence tells you exactly what hurt that week.

- **v1.0 "Ember"** *(early April)* — first real release. JSONL transcript discovery from Claude Code's `~/.claude/projects/`. Restart-loop guard after three crashes (the rate-limit infinite-restart bug from day 1). Seatbelt fix for `~/Desktop` projects.
- **v2.0 "Spark"** *(mid-April)* — pluggable backend interface. Codex, opencode, Gemini CLI ship the same day. Per-task agent override. Backend-owned transcript discovery. Per-session config isolation so different agents stop trampling each other's auth files.
- **v2.0.1** — silent work-loss fix: agents that forgot to `git commit` were losing changes on merge. `MergeWorktree` now auto-commits.
- **v3.0 "Blaze"** *(mid-month)* — Copilot CLI as the 5th backend. Cross-filesystem `EXDEV` fix on `watchfire update` (Linux ate it for two weeks). Task-list rotation bug on projects with many tasks. GUI update-prompt loop. Newly-installed agents finally visible in pickers.
- **v4.0 "Beacon"** *(day 28)* — the big one. Dashboard rebuild — the thing in the hero shot above. Per-task metrics (duration, tokens, cost). Per-project + cross-project Insights. CSV/Markdown export. Weekly digest. OS notifications + dynamic tray menu. Outbound relays (webhook, Slack, Discord) with HMAC/Ed25519 verification. GitHub auto-PR.
- **v5.0 "Flare"** *(day 30, last release of the challenge)* — closed Beacon's loose ends. OAuth Slack and Discord bots. Inbound HTTP server with per-IP rate limiting and idempotency cache. GitHub Enterprise / GitLab / Bitbucket PR-merge parity. Slack interactive buttons (Retry / Cancel / View) with cancel-reason modal. Discord auto-registration on guild join. Searchable settings sub-pages. Fix for `run-all` silently halting on a merge failure (yes, that was a real bug — turns out a silent dashboard is the second-worst dashboard).
- **v6.0 "Phoenix"** *(post-challenge)* — atomic YAML writes; the `flock`-based singleton daemon; Cursor Agent as the 6th backend; TUI Project Settings sidebar with `/`-search; Trash filter mode; Definition tab `$EDITOR` shellout; Branches overlay (`Ctrl+B`); text-select mode (`Ctrl+T`); the TUI agent pane moved to `charmbracelet/x/vt` with real scrollback.
- **v7.0 "Forge"** — manual task reordering across the whole stack (TUI `Shift+↑/↓`, GUI drag-and-drop, a new `ReorderTasks` RPC); a GUI chat viewport that no longer snaps back to the top on every scroll; Open-in-IDE that finds editor CLIs outside the GUI's stripped PATH.
- **v7.1 → v7.3** — the long tail of polish and paper-cuts. A chat-terminal regression hunt after 7.0 (no more `[Agent stopped]` floods on reconnect). A whole class of YAML-scalar bugs that could quietly kill a wildfire chain mid-run, fixed at the root. A GUI **focus-chat mode** that collapses everything but the agent conversation when you just want to watch it work. The running version surfaced right under the sidebar logo, so you always know what you're on. And — my favorite war story — a daemon log that's *finally* size-capped at ~1 GB, after one user's grew to **300 GB** on disk before anyone noticed.

The shape of that list is the shape of the work. The early Ember/Spark releases were "make the thing usable." Blaze was "stop bleeding." Beacon was the moment Watchfire stopped being a glorified task runner and became an *operations* tool. Flare and Phoenix closed the safety gaps you only notice once you start trusting the dashboard. Forge has been about polish you can actually feel — drag tasks, scroll without jumping, never lose a task again to a YAML quirk.

## How Far It's Come

Two screenshots, side by side, do a better job than I can:

{{< figure src="img/forge-jan.png" alt="FORGE in January 2026" caption="January 12: FORGE, the original Electron prototype. One project at a time. Tabbed layout. No dashboard. No metrics. No multi-agent. Garbled terminal output." >}}

{{< figure src="img/watchfire-april.png" alt="Watchfire in April 2026" caption="April 27: same shell, recognizable today — but no Insights tab, no Fleet KPIs, no filter pills, no live PTY previews on cards. This is the version that ran most of the 30-day challenge." >}}

{{< figure src="img/watchfire-dashboard-now.png" alt="Watchfire today" caption="May 26: today. The April layout filled in with everything Beacon, Flare, Phoenix, and Forge added — and the live PTY preview on every card means I can glance at the dashboard and see what each agent is doing right now." >}}

## The Meta Bit

There's a moment — somewhere in the second week of the 30-day challenge — when the loop closes. You're using Watchfire to build a project. The project surfaces a bug in Watchfire. You file the bug as a Watchfire task. Watchfire runs an agent to fix Watchfire. The fix ships. You release v3.1.something. Then you go back to the original project, which is still waiting in another tab.

The first time it happens it's funny. By the tenth time it's just the workflow. By the wrapup it's the whole point:

> *Or more accurately, Watchfire is building Watchfire now. The tool orchestrates its own development.*

The reason that's not a gimmick is that a tool which can build itself has, by definition, the right surface area for the job. Every paper cut a human felt got logged and fixed by the same machinery. Every "I wish it would..." became a draft task in a few seconds. Every painful demo became a CHANGELOG entry the next morning.

## What's Next

The roadmap is the same as it always was, but quieter:

- More agent backends as they appear. The `Backend` interface is the single integration point — anything that speaks shell and produces a transcript can join.
- More inbound integrations (GitLab webhooks, custom triggers). Closing the loop so Watchfire reacts to the world, not just the other way around.
- Better diff and review tooling. The inline diff viewer is in; what's missing is a proper PR-style "review then merge" surface for tasks that need a human eye.
- Open sourcing the agent runtime so the sandboxing + worktree + PTY plumbing is reusable outside the Watchfire shell.

And the obvious one: ship the **macOS Sparkle / Windows MSIX / Linux flatpak** distribution polish so installation is a one-liner regardless of platform.

## If You Want to Try It

The website lives at [watchfire.io](https://watchfire.io) with full docs (changelog, GUI tour, CLI reference, integrations). Grab the latest build for macOS, Linux, or Windows here:

{{< button href="https://github.com/watchfire-io/watchfire/releases/latest" target="_blank" >}}
Download the latest release
{{< /button >}}

If you're juggling more than one AI agent and have caught yourself alt-tabbing between terminals, it might be the thing you're missing. It was for me.

*Built with too many agents at once. Managed by Watchfire. Powered by the version of "vibe coding" where you actually have to ship something at the end of the day.*
