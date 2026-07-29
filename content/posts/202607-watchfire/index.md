---
title: "Watchfire: A Control Room for AI Coding Agents"
summary: "Six months, nine major versions, and hundreds of tasks shipped through the tool itself. The story of how a side-prototype to babysit Claude Code turned into a multi-agent orchestrator with a daemon, a multi-window GUI, a Bubble Tea TUI — and, as of v9, an MCP factory that agents can drive. The meta problem got worse: Watchfire now builds Watchfire."
description: "Six months, nine major versions, and hundreds of tasks shipped through the tool itself. The story of how a side-prototype to babysit Claude Code turned into a multi-agent orchestrator with a daemon, a multi-window GUI, a Bubble Tea TUI — and, as of v9, an MCP factory that agents can drive. The meta problem got worse: Watchfire now builds Watchfire."
categories: ["Tech", "AI", "Makers"]
tags: ["AI", "Claude Code", "vibe coding", "side projects", "watchfire"]
date: 2026-08-02
draft: true
---

AI coding agents stopped being a demo about a year ago. Claude Code, Codex, opencode, Gemini CLI, Copilot CLI, Cursor Agent — they all genuinely write code now. The bottleneck moved. It's not "can the agent build this." It's "can I keep track of what five agents are doing across six repos without losing my mind."

I started running into that wall every day. So I built a tool. I called it Watchfire.

This post is the long version of what it is, why it exists, and how the [30 Days of Vibe Coding](/posts/202604-vibe30/announcement/) challenge took it from a Jan prototype called *FORGE* to **v9.1.0 "Firestorm"** in six months and nine major releases.

{{< figure src="img/watchfire-v91-dashboard.webp" alt="The current Watchfire dashboard" caption="The Watchfire dashboard today — working/idle/done-today pulse, an attention banner that's quiet when things are fine, and fleet insights that count what the agents actually shipped: 69 tasks, 202 commits, +64,979 net lines in a week." >}}

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

{{< figure src="img/forge-jan.webp" alt="FORGE on Jan 12, 2026" caption="FORGE on Jan 12, 2026. Tabs were Agent / Tasks / History / Archived / Settings. The Claude Code pixel-art avatar showed up in the welcome message — I never got around to removing it." >}}

It was rough. The task model was thin, the terminal output was garbled, switching projects required restarting the app. But the core idea was already there: queue work, watch it execute, don't touch the terminal directly.

Within a couple of weeks the layout had grown into three panes — projects on the left, tasks in the middle, an "Agent Panel" on the right with Live / Chat / Branches sub-tabs:

{{< figure src="img/forge-three-pane.webp" alt="The three-pane FORGE layout" caption="Mid-January: three panes, status-grouped task accordions (Done / In Review / Running / Ready / Todo), a real agent panel with live output." >}}

I also tried a web version that didn't survive the year:

{{< figure src="img/watchfire-web-splash.webp" alt="The short-lived watchfire-web bootstrap screen" caption="The browser version's splash, late January. The project survived a few weeks before I decided to consolidate on the desktop app." >}}

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

By the numbers across the 30 days: **~450 tasks executed through Watchfire, ~326k lines of code shipped, ~1,200 commits, five major Watchfire versions released during the challenge** (Ember → Spark → Blaze → Beacon → Flare), and four more since (Phoenix, Forge, Inferno, Firestorm).

## What Watchfire Is Today

Concretely: a **Go daemon** (`watchfired`) that owns orchestration, sandboxing, PTY emulation, git worktrees, and a gRPC server; a **Bubble Tea TUI** for project-scoped work in a terminal; and an **Electron + React GUI** (`Watchfire.app`) that, since v8, opens **one OS window per project** with a mission-control home window over the whole fleet. The TUI and the GUI both talk to the same daemon over gRPC (with gRPC-Web for the browser-y front end), on a dynamically chosen port that the daemon advertises through `~/.watchfire/daemon.yaml`. A `flock` on the lockfile guarantees a single daemon per user — no more "two windows fighting over the same git worktree."

And as of v9 the daemon has a fourth client that isn't a UI at all: `watchfire mcp serve` exposes the whole orchestration surface as an **MCP server**, so an agent can drive Watchfire the same way the GUI does. More on that below — it deserves its own section.

It runs on macOS, Linux, and Windows. Outputs stream live through a PTY, parsed daemon-side by a real VT emulator (`hinshun/vt10x`), and rendered with proper ANSI in both the GUI and the TUI.

It currently supports **six agent backends** via a single `Backend` interface:

- Claude Code
- OpenAI Codex
- opencode
- Gemini CLI
- GitHub Copilot CLI
- Cursor Agent

Each one runs in its own isolated config dir (`CODEX_HOME`, `OPENCODE_CONFIG_DIR`, `COPILOT_HOME`, etc.), so credentials and prompts don't bleed between sessions, and you can override the agent per task.

### Two Layers of Blast Radius

This is the part I'd want to know about if someone else had built it, because "walk away and let it run" is only reasonable if you know what "it" can reach.

Every task runs behind **two independent layers of isolation**. The first is a git worktree: each task gets its own `watchfire/<task_number>` checkout, so two agents working the same repo can't see each other's half-finished edits, and nothing lands on your branch until the run succeeds and merges. The second is an OS-level sandbox around the agent process itself — **Seatbelt** (`sandbox-exec`) on macOS, **Landlock** on Linux 5.13+, with a **bubblewrap** mount-namespace fallback on older kernels.

The sandbox is a filesystem allowlist, and its shape is opinionated. Writable: the project directory, temp, and the caches real builds need — `~/.npm`, `~/.cargo`, `~/go`, `~/.rustup`, `~/Library/Caches`. Readable: compilers, system libraries, tool config. Blocked outright: `~/.ssh`, `~/.aws`, `~/.gnupg`, `.netrc`, `.npmrc`, `.env` files, `.git/hooks`, and — on macOS — your personal folders (`~/Desktop`, `~/Documents`, `~/Downloads`, and friends). An agent that goes looking for your deploy keys finds nothing there.

Two honest caveats, both of which the [sandboxing post](https://watchfire.io/blog/2026-05-19-how-watchfire-sandboxes-every-agent) states plainly rather than burying. The sandbox is filesystem-focused: it does **not** block outbound HTTPS today, so network isolation is still a host-firewall or per-project-proxy problem. And **Windows currently runs unsandboxed** — the worktree isolation still applies, the OS layer doesn't. Both are on the list.

That combination is what makes the rest of this post possible. Bypassing permission prompts is only sane when the blast radius is a disposable worktree and a filesystem the agent can't wander out of.

Storage is YAML, everywhere: `~/.watchfire/projects.yaml` for the registry, `~/.watchfire/settings.yaml` for global settings, `~/.watchfire/integrations.yaml` for Slack/Discord/webhook config, and per-project `.watchfire/project.yaml` plus `.watchfire/tasks/<n>.yaml` files. Writes are atomic (tmp + `fsync` + `rename`) as of v6.0, which closed a long-standing data-loss race the hard way. Since v8, every task also snapshots a `metrics.yaml` — commits, files changed, lines added and removed, how the merge landed — so the Insights charts measure *shipped code*, not just closed tasks.

## A Quick Tour

The thing I missed most in those early terminal-only days was a *dashboard*. Not a list of projects — a status. Where are we? What's stuck? What did agents do today?

{{< figure src="img/watchfire-v91-dashboard.webp" alt="Watchfire fleet dashboard" caption="Mission control: the pulse line up top (working / needs attention / idle / done today), an all-clear banner, fleet insights with 7d/30d/90d/All windows, filter pills, and a card per project carrying its own task counts and code churn." >}}

Click a project and it opens in its own window — that's the v8 "Inferno" redesign. The layout is chat-primary now: the agent conversation is the wide pane, and Tasks / Definition / Insights / Secrets / Trash / Settings live in a tabbed sidebar on the right:

{{< figure src="img/watchfire-v91-chat.webp" alt="A Watchfire project window with the agent stream on the left and the task queue on the right" caption="A project window: chat first, everything else is reference. This one is Watchfire's own repo, 126 tasks deep, sitting idle on a fresh Claude Code session." >}}

Every project has a markdown **Definition** that gets folded into the prompt context. It's the project's standing brief — what it is, what conventions matter, what files matter. The same Definition is what the agent reads before it touches anything:

{{< figure src="img/watchfire-definition.webp" alt="The project Definition tab" caption="The Definition tab. Edit it inline or shell out to $EDITOR. This is the thing that makes a multi-project workflow actually feasible — agents start with project context instead of a blank brain." >}}

Per-project **Insights** are the answer to "what did I actually do this week" — tasks per day, agent breakdown, duration distribution, cost. Since v8 they also roll up the code metrics, so the charts track commits and lines shipped rather than tasks ticked:

{{< figure src="img/watchfire-insights.webp" alt="Per-project insights" caption="Per-project Insights: KPIs, tasks-per-day, agent breakdown donut, duration distribution. There's also a fleet-wide rollup on the main dashboard." >}}

**Wildfire** — the autonomous mode where Watchfire executes ready tasks, refines drafts, and generates new ones in a loop until the project definition says done — finally got a first-class GUI in v8. There's a start button with a confirmation modal (it *is* the "spend my API budget autonomously" button), and a live phase stepper in the header while it runs. If you want the full mechanics, the [Inside Wildfire mode](https://watchfire.io/blog/2026-05-18-inside-wildfire-mode) post on the Watchfire blog is the deep dive:

{{< figure src="img/watchfire-wildfire-confirm.webp" alt="The Start Wildfire confirmation modal" caption="The modal says the quiet part out loud: an autonomous loop that runs unattended and spends tokens continuously, replacing whatever agent is currently on the project. Two sentences that have saved me from myself more than once." >}}

Global **Settings** grew searchable sub-pages — appearance, defaults for new projects, agent paths, notifications, integrations, inbound, updates:

{{< figure src="img/watchfire-settings-defaults.webp" alt="Global settings, Defaults page" caption="Fleet-wide defaults: which agent new projects get, and whether they auto-merge, auto-delete branches, and auto-start ready tasks out of the box. Per-project settings can still override all of it." >}}

The **Open** split-button became one of my favorite small things. Click the project in any installed editor — VS Code, Cursor, Windsurf, Zed, JetBrains, Sublime, Xcode, Fleet, or the OS file manager:

{{< figure src="img/watchfire-open-ide.webp" alt="The Open menu showing installed editors" caption="The Open menu detects which editor CLIs are actually on your machine and only shows those. Works even when the GUI's PATH is stripped." >}}

For the hours when Watchfire shouldn't be the thing on screen, v8 added two smaller surfaces. The **Mini Monitor** is a frameless always-on-top strip with one line per project, and the **tray menu** carries the same status — plus the daemon's port, which has saved me more debugging time than I'd like to admit:

{{< figure src="img/watchfire-mini-monitor.webp" alt="The Mini Monitor window" caption="The Mini Monitor: the whole fleet in a strip the size of a Post-it. The orange line is the one project actually doing something." >}}

{{< figure src="img/watchfire-tray-menu.webp" alt="The macOS tray menu" caption="The tray menu: version, daemon port, working/idle breakdown, notifications. Glanceable from any app." >}}

The same workflow exists in a **TUI**, because half of my dev work happens over SSH to a Linux box:

{{< figure src="img/watchfire-tui.webp" alt="Watchfire TUI" caption="The TUI mirrors the GUI's two-pane layout: tasks on the left, agent stream on the right, with keyboard shortcuts for chat / generate / plan / run all / wildfire / stop." >}}

{{< figure src="img/watchfire-tui-edit-task.webp" alt="TUI edit-task modal" caption="Tasks are first-class in the TUI too — full edit modal with title, prompt, acceptance criteria, agent override, and status." >}}

And there's a thin CLI for everything the daemon can do:

{{< figure src="img/watchfire-cli-help.webp" alt="watchfire --help" caption="The CLI surface: chat, configure, daemon, define, generate, init, integrations, metrics, plan, run, task, update, wildfire — and, since v9, mcp." >}}

## Six Months, Nine Versions

The versioning has a theme — every major release is fire-coded — and the cadence tells you exactly what hurt that week.

- **v1.0 "Ember"** *(early April)* — first real release. JSONL transcript discovery from Claude Code's `~/.claude/projects/`. Restart-loop guard after three crashes (the rate-limit infinite-restart bug from day 1). Seatbelt fix for `~/Desktop` projects.
- **v2.0 "Spark"** *(mid-April)* — pluggable backend interface. Codex, opencode, Gemini CLI ship the same day. Per-task agent override. Backend-owned transcript discovery. Per-session config isolation so different agents stop trampling each other's auth files.
- **v2.0.1** — silent work-loss fix: agents that forgot to `git commit` were losing changes on merge. `MergeWorktree` now auto-commits.
- **v3.0 "Blaze"** *(mid-month)* — Copilot CLI as the 5th backend. Cross-filesystem `EXDEV` fix on `watchfire update` (Linux ate it for two weeks). Task-list rotation bug on projects with many tasks. GUI update-prompt loop. Newly-installed agents finally visible in pickers.
- **v4.0 "Beacon"** *(day 28)* — the big one. Dashboard rebuild. Per-task metrics (duration, tokens, cost). Per-project + cross-project Insights. CSV/Markdown export. Weekly digest. OS notifications + dynamic tray menu. Outbound relays (webhook, Slack, Discord) with HMAC/Ed25519 verification. GitHub auto-PR.
- **v5.0 "Flare"** *(day 30, last release of the challenge)* — closed Beacon's loose ends. OAuth Slack and Discord bots. Inbound HTTP server with per-IP rate limiting and idempotency cache. GitHub Enterprise / GitLab / Bitbucket PR-merge parity. Slack interactive buttons (Retry / Cancel / View) with cancel-reason modal. Discord auto-registration on guild join. Searchable settings sub-pages. Fix for `run-all` silently halting on a merge failure (yes, that was a real bug — turns out a silent dashboard is the second-worst dashboard).
- **v6.0 "Phoenix"** *(early May)* — atomic YAML writes; the `flock`-based singleton daemon; Cursor Agent as the 6th backend; TUI Project Settings sidebar with `/`-search; Trash filter mode; Definition tab `$EDITOR` shellout; Branches overlay (`Ctrl+B`); text-select mode (`Ctrl+T`); the TUI agent pane moved to `charmbracelet/x/vt` with real scrollback.
- **v7.0 "Forge"** *(mid-May)* — manual task reordering across the whole stack (TUI `Shift+↑/↓`, GUI drag-and-drop, a new `ReorderTasks` RPC); a GUI chat viewport that no longer snaps back to the top on every scroll; Open-in-IDE that finds editor CLIs outside the GUI's stripped PATH.
- **v7.1 → v7.4** *(May–June)* — the long tail of polish and paper-cuts. A chat-terminal regression hunt after 7.0 (no more `[Agent stopped]` floods on reconnect). A whole class of YAML-scalar bugs that could quietly kill a wildfire chain mid-run, fixed at the root. A GUI **focus-chat mode** that collapses everything but the agent conversation when you just want to watch it work. The running version surfaced right under the sidebar logo, so you always know what you're on. And — my favorite war story — a daemon log that's *finally* size-capped at ~1 GB, after one user's grew to **300 GB** on disk before anyone noticed. The [full post-mortem](https://watchfire.io/blog/2026-05-29-forge-7-3-the-300gb-log) is on the Watchfire blog.
- **v8.0 "Inferno"** *(end of June)* — the biggest GUI change since the rewrite: **one OS window per project**, with a mission-control home window and a "Needs attention" panel that aggregates blockers across the fleet. Chat-primary layout. The Wildfire GUI button with the live phase stepper. The Mini Monitor. Code-output metrics (`metrics.yaml`). A real markdown editor (CodeMirror 6) for definitions, prompts, and acceptance criteria. The [Inferno release post](https://watchfire.io/blog/2026-06-29-inferno-8-0-parallel-workspaces) has the details.
- **v9.0 "Firestorm"** *(July 26)* — the role inversion. `watchfire mcp serve` exposes the daemon as an **18-tool MCP factory**: any MCP client — Claude Code, Codex, whatever comes next — can create tasks, run them, inspect results, and let Watchfire handle the sandboxing, worktrees, and merging. Stdio transport only, no listening sockets; a `--read-only` mode that registers just the 8 inspection tools; safety rails everywhere (no direct YAML writes, overwrite pre-checks, soft deletes). The [Firestorm release post](https://watchfire.io/blog/2026-07-26-firestorm-9-0-watchfire-as-a-factory) explains why the tool descriptions themselves are the API contract.
- **v9.1** *(July 29)* — a bug-fix with a good story attached. Insights had been quietly reporting zeros: the daemon only stamped `completed_at` through one interactive path, so most finished tasks had no completion timestamp, which collapsed every duration to zero and hid the task from every rollup. 9.1 stamps it on the done transition and back-fills roughly 580 historical tasks through a `completed_at` → metrics `captured_at` → `updated_at` fallback chain, so per-project insights, fleet metrics, CSV/Markdown exports and the weekly digest all light up without rewriting a single file. I found this one the fun way — see below.

The shape of that list is the shape of the work. The early Ember/Spark releases were "make the thing usable." Blaze was "stop bleeding." Beacon was the moment Watchfire stopped being a glorified task runner and became an *operations* tool. Flare and Phoenix closed the safety gaps you only notice once you start trusting the dashboard. Forge was polish you can actually feel — drag tasks, scroll without jumping, never lose a task to a YAML quirk. Inferno made supervising many projects the default posture instead of a stretch goal. And Firestorm flipped the whole premise: Watchfire stopped being just the thing *you* use to drive agents, and became a thing *agents* can drive.

## How Far It's Come

Three screenshots, in order, do a better job than I can:

{{< figure src="img/forge-jan.webp" alt="FORGE in January 2026" caption="January 12: FORGE, the original Electron prototype. One project at a time. Tabbed layout. No dashboard. No metrics. No multi-agent. Garbled terminal output." >}}

{{< figure src="img/watchfire-april.webp" alt="Watchfire in April 2026" caption="April 27: the Go rewrite's GUI, recognizable but sparse — no Insights, no Fleet KPIs, no live previews. This is the version that ran most of the 30-day challenge." >}}

{{< figure src="img/watchfire-v91-dashboard.webp" alt="Watchfire today" caption="July 29: today, on v9.1.0. Multi-window, mission control, and a fleet insights panel that can tell you a week cost 113 hours of agent time and produced 202 commits." >}}

Four weeks separate the last two of those screenshots. That's the pace this whole post is really about.

## The Meta Bit

There's a moment — somewhere in the second week of the 30-day challenge — when the loop closes. You're using Watchfire to build a project. The project surfaces a bug in Watchfire. You file the bug as a Watchfire task. Watchfire runs an agent to fix Watchfire. The fix ships. You release v3.1.something. Then you go back to the original project, which is still waiting in another tab.

The first time it happens it's funny. By the tenth time it's just the workflow. By the wrapup it's the whole point:

> *Or more accurately, Watchfire is building Watchfire now. The tool orchestrates its own development.*

That was written in May. In July it stopped being a line in a blog post and became a release process. Every task in v9's queue — the MCP server skeleton, the task-factory tools, the run tools, the inspect tools — was authored, executed, and merged through Watchfire:

{{< figure src="img/watchfire-v8-building-v9.webp" alt="Watchfire's own project window with the v9 task queue in development" caption="v8 building v9: nine tasks in development, every one of them a piece of the MCP server, running in Watchfire's own repo inside Watchfire." >}}

And when the queue was done, the agent staged the release itself:

{{< figure src="img/watchfire-v9-release-chat.webp" alt="The Watchfire agent reporting that v9.0.0 is staged as a draft release" caption="The v9.0.0 endgame, verbatim: version bumped, CHANGELOG written, 22 commits pushed, release workflow green, 20 assets staged as a draft — and the agent stopping at the one irreversible step to ask whether it should publish. It understood the difference. I said yes." >}}

The website is in the loop too. [watchfire.io](https://watchfire.io) — docs, tour, changelog, blog — is a Watchfire project like any other, built task by task by the thing it documents. There's a whole post about that, written by the process it describes: [Watchfire eats its own dogfood](https://watchfire.io/blog/2026-05-19-eating-our-own-dogfood).

{{< figure src="img/watchfire-website-v91.webp" alt="A Watchfire agent updating watchfire.io to v9.1" caption="Four words of prompt — \"update watchfire website to 9.1\" — and the agent finds every place the version is asserted (hero badge, JSON-LD, changelog, RSS), writes the release notes, verifies the build, and stops short of committing. Note the judgment call in the middle: it left one badge pointing at 9.0 because that's still the tentpole release and 9.1 is a bug-fix." >}}

The reason none of this is a gimmick is that a tool which can build itself has, by definition, the right surface area for the job. Every paper cut a human felt got logged and fixed by the same machinery. Every "I wish it would..." became a draft task in a few seconds. Every painful demo became a CHANGELOG entry the next morning. And Firestorm is that observation productized: if Watchfire could already build Watchfire, the only thing missing was letting *your* agent do the driving too.

## Plugging a Chat Into the Factory

Which brings me to the part of v9 I've been enjoying the most. Connecting an agent to the factory is not a config-file scavenger hunt — it's a Settings page. Watchfire detects which agent CLIs are on your machine and writes the MCP entry into each one's config with a single click:

{{< figure src="img/watchfire-mcp-settings.webp" alt="The Settings → MCP page with one-click installs per agent" caption="Settings → MCP: one card per agent CLI. Claude Code is a click — Watchfire writes the entry into ~/.claude.json. Codex and Copilot were auto-detected and one Install away. There's a copyable snippet for anything else. Stdio only, host-local, nothing on the network." >}}

I pressed the Claude Code button, restarted a session, and the terminal I write this blog in became a Watchfire client. This isn't hypothetical — the draft you're reading was edited in a Claude Code session that, over MCP, listed my nine registered projects, noticed that one of them had a Wildfire run in its execute phase, and pulled that project's full 118-task queue to fact-check this very post. No Watchfire window involved.

Once you have that, a bunch of workflows stop being science fiction:

- **Plan outside, manufacture inside.** You brainstorm with an agent in chat — any chat — and instead of it pasting code at you, it files scoped tasks with acceptance criteria and lets Watchfire run them sandboxed, in worktrees, with merges and metrics. The conversation stays a conversation; the code happens in the factory.
- **Cross-project work from one seat.** A session sitting in this blog's repo can file a bug it just found in Watchfire's repo, or kick off a docs update on the website project, without changing directories or windows.
- **Agents reviewing agents.** The outer agent reads `get_task_diff` after a run and decides whether to file a follow-up task — a reviewer loop where the reviewer never touches the worktree.
- **Status anywhere.** "Which tasks are running?" is now a question any connected agent can answer — from a terminal, from a chat, eventually from a phone.
- **Bug reports that write themselves.** While drafting this section I asked the connected session for the test project's insights and got a wall of zeros back. That turned into a task, which turned into v9.1 two days later. The outer agent found the bug by *using* the factory, which is exactly the loop this whole post keeps circling.

The factory metaphor stops being a metaphor at this point. Watchfire handles the manufacturing — isolation, execution, merging, bookkeeping — and anything that speaks MCP can stand at the order desk.

## The Stress Test: Neon Fable

To find out whether v9 actually holds up, I'm ending where the article's screenshots kept pointing: `rpg-fable-test`. It's a deliberately unreasonable test project — a browser-based cyberpunk RPG called **Neon Fable**, built almost entirely by Wildfire, with me mostly writing the project Definition and watching the queue burn down.

{{< figure src="img/game/neon-fable-definition.webp" alt="Wildfire running with the Neon Fable project definition open" caption="The whole setup: a Definition that describes the game (three-act branching story, isometric renderer, turn-based combat, cyberware inventory) and a Wildfire loop that turns it into tasks. v1 — the complete playable loop — shipped as tasks #1–18." >}}

The v1 queue took the game from `npm create vite` to a finished loop: character creation, a branching three-act story, seeded turn-based combat, inventory and cyber-enhancements, multiple endings, an endings codex, New Game+. All pixel art authored *in code* as palette-indexed string grids, because that's what an agent can iterate on. The v2 queue — a high-detail graphics overhaul and a modular character appearance system — was generated by Wildfire itself and currently stands at **118 tasks, 60 done**, with the loop working through the low sixties. Its own test suite passed 902 tests somewhere around task #40 and has only grown since. In the last seven days alone that one project accounts for 60 merged tasks and roughly +56,500 net lines — every one of them written while I was doing something else.

{{< figure src="img/game/neon-fable-wildfire.webp" alt="Wildfire executing a Neon Fable art task" caption="Wildfire in its execute phase on \"Day-phase neon states — dusk, night, late-night\", hand-authoring emissive color ramps in TypeScript. 58 tasks still queued behind it. The Vite dev server in the docked shell hot-reloads the game as each change lands." >}}

And this is what comes out the other end:

{{< figure src="img/game/neon-fable-title.webp" alt="The Neon Fable title screen" caption="Neon Fable's title screen. New Game, Continue, Load, an endings codex, settings — all Wildfire tasks." >}}

{{< figure src="img/game/neon-fable-gameplay.webp" alt="Isometric gameplay in Cinder Row Plaza" caption="Cinder Row Plaza in the hi-res v2 art: 64×32 isometric tiles, animated neon signage, layered NPC sprites — every pixel authored as code by an agent that cannot see." >}}

I'll do a proper write-up of the game when the v2 queue is empty. But as a stress test it has already answered the question: the factory doesn't just fix its own bugs and write its own docs — pointed at something as fiddly as *pixel art and game feel*, it keeps shipping.

## What's Next

The roadmap is the same as it always was, but quieter:

- More agent backends as they appear. The `Backend` interface is the single integration point — anything that speaks shell and produces a transcript can join.
- A wider MCP surface. Firestorm shipped the factory; the obvious next moves are richer inspection tools and letting long-running outer agents supervise whole fleets, not single projects.
- Better diff and review tooling. The inline diff viewer is in; what's missing is a proper PR-style "review then merge" surface for tasks that need a human eye.
- Team workflows. The file-based task model already survives git — shared task lists and review surfaces for more-than-one-human fleets are the natural extension.

## If You Want to Try It

Everything lives at [watchfire.io](https://watchfire.io) — [docs](https://watchfire.io/docs), a [visual tour](https://watchfire.io/tour), the [changelog](https://watchfire.io/changelog), and a [blog](https://watchfire.io/blog) with thirty-odd posts of design notes and war stories. The code is open source under Apache 2.0.

On macOS the whole thing is a one-liner:

```bash
brew tap watchfire-io/tap && brew install --cask watchfire-io/tap/watchfire
```

Or grab the latest build for macOS, Linux, or Windows directly:

{{< button href="https://github.com/watchfire-io/watchfire/releases/latest" target="_blank" >}}
Download the latest release
{{< /button >}}

If you're juggling more than one AI agent and have caught yourself alt-tabbing between terminals, it might be the thing you're missing. It was for me.

*Built with too many agents at once. Managed by Watchfire. Powered by the version of "vibe coding" where you actually have to ship something at the end of the day.*
