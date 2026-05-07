---
title: "30 Days of Vibe Coding - The Wrapup"
description: "30 projects in 30 days using AI-assisted coding. Here's what was easy, what was hard, what was unexpected, and where this is all going."
summary: "30 projects in 30 days using AI-assisted coding. Here's what was easy, what was hard, what was unexpected, and where this is all going."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "wrapup"]
series: ["30 Days of Vibe Coding"]
series_order: 31
seriesOpened: false
date: 2026-05-07
draft: false
#type: "hidden"
---

It's done. Thirty projects. Thirty days.

A platformer. A Snake clone on a Nokia 3310. An RPG with isometric graphics. Tetris with procedural music. Breakout. A Pomodoro timer in Go. A git dashboard. A notes app with an MCP server. A kanban board an AI can manage. A Miro clone. A Trello clone. Wordle. A portfolio generator. A weather dashboard with ASCII art. An auto-battler. A tic-tac-toe game where the AI learns from losing. A hacking game about an AI escaping containment. A real-time polling app. A reaction wall for events. A collaborative mood board. Anonymous chat rooms. A live Q&A tool. Windows 95 in a browser. A blog redesign. An ambient sound mixer with zero audio files. Collaborative pixel art. A terminal emulator in Rust. A code editor in Go. A Notion clone. And an operating system that contains all of the above.

This was possible because of coding agents. Mainly Claude, sometimes Codex, but also [Watchfire](https://watchfire.io) to orchestrate complex work by turning rough ideas into detailed specs for my agents to execute against.

## The Numbers

- **30 projects** shipped and deployed
- **~326,000 lines of code** across all projects
- **~1,200 commits** total
- **~450 Watchfire tasks** (from 4 tasks for tic-tac-toe to 43 for the code editor)
- **8 tech stacks:** TypeScript/React, Go/Bubble Tea, Python/Textual, Rust/Tauri, Go/Wails, vanilla JS, Astro, Next.js
- **6 Firebase projects** with real-time sync
- **5 games,** 5 TUI apps, 3 native desktop apps, 17 web apps
- **3 platforms** (macOS, Linux, Windows) for the native apps
- **7 languages** per blog post (English, Portuguese, Spanish, German, French, Italian, Japanese, Chinese)

## What's Easy

The things that worked almost every time, with minimal iteration.

**Games and self-contained apps.** Anything with clear rules and a defined scope. Tetris, Wordle, Breakout, Snake. The AI knows what these games should feel like because they're well-documented patterns. You describe the game, the AI builds the game. The results were playable on the first build almost every time.

**Frontend UI.** React components, Tailwind styling, layout, animations. The AI generates clean UI code fast. Card layouts, modals, sidebars, dashboards, form flows. If you can describe what it should look like, you get something close on the first pass.

**Systems and logic.** Combat engines, Q-learning, kanban state management, undo/redo, file watchers, MCP servers. The AI handles algorithmic work and state machines well. The Pomodoro timer's state machine, the MyBrute combat system, the Q-learning implementation in tic-tac-toe. All of these came together without me having to debug the core logic.

**Wrapping existing tools.** Day 7 proved you can point the AI at any CLI with structured output and get a wrapper UI built around it. It shells out to git, parses the text, builds a dashboard. Same pattern works for Docker, kubectl, anything with a text interface.

**Firebase integration.** Anonymous auth, Firestore listeners, real-time sync. The AI knew the Firebase patterns cold. Six projects used Firebase and the real-time collaboration worked on first deploy every time. Security rules, data modeling, connection management. All handled.

## What's Still Hard

The things that consistently needed human intervention, iteration, and patience.

**Visual style and art direction.** This goes beyond games. Any time you want a specific visual identity for a frontend app, the AI struggles. Day 15 (MyBrute) went through four completely different character styles before landing on one that worked. But the same problem shows up in web apps. Landing page aesthetics, color palettes that feel right, typography pairings, spacing that looks intentional rather than generated. The AI produces output. A human decides if it's good.

**Deployment and infrastructure.** The code works on your machine. Then you deploy and everything breaks. Day 29 (n0ti0n) had dozens of commits just debugging Firestore in production. Long polling config, cache settings, environment variable trimming, connection timeouts. Things that only surface after deployment. Day 28 (ideA) was a multi-commit war getting Wails to build for three platforms in GitHub Actions. The AI can suggest fixes fast, but the deploy-test-iterate cycle is slow no matter what.

**Native app CI/CD.** Cross-platform builds are painful. WebKit dependencies on Linux, build tags per platform, Wails bindings generation, code signing, install scripts that detect OS and architecture. Days 27 and 28 spent more time on CI than on the actual applications. Watchfire helped a lot here by going on endless loops of debugging, testing, running, failing, and repeating until the pipeline finally worked. Without that persistence, I would have given up on cross-platform releases.

**Polish and edge cases.** Window snapping in Day 30 had a new bug every time I thought it was fixed. What happens when you snap a maximized window? What if you switch workspaces mid-drag? What about resizing a snapped window? The AI builds the happy path well. The edge cases need a human testing and reporting.

## What Was Unexpected

The things I didn't see coming when I started this challenge.

**The AI makes product decisions.** Day 21 (ChatRooms) used anonymous auth without me specifying it. The AI decided that for a casual chat app, forcing account creation would be a conversion killer. That's not code generation. That's product instinct. It happened repeatedly. Features I didn't ask for showed up because the AI inferred they belonged. This might be related to spec-driven development. In Watchfire, you specify a product direction for the project. Agents work toward that vision and keep iterating until the code matches the spec. When the spec is clear about what the product should feel like, the AI makes better judgment calls.

**Unfamiliar tech stacks work fine.** I can't write Go. I've never touched Bubble Tea, Lip Gloss, Tauri, or Wails. I don't know Rust. But Days 6-9 shipped polished Go TUI apps, Day 27 shipped a Rust-backed terminal emulator, and Day 28 shipped a Go/Wails code editor. The barrier to trying new tech stacks collapsed. Using Context7 MCP to feed current documentation to the agents helps a lot here. The AI doesn't need to rely on training data when it can pull the latest docs on demand.

**The bottleneck moved.** I stopped spending time building and started spending time reviewing, testing, and filing bug reports. The limiting factor was never "can the AI write this code." It was "did I test this thoroughly enough" and "does this actually feel right."

**Procedural audio is viable.** Days 4 (Tetris), 12 (Wordle), and 25 (SoundScape) used the Web Audio API to synthesize all sound effects and music. Zero audio files. Rain, wind, fireplace crackle, lo-fi beats, game sound effects. All generated with oscillators and noise buffers. I had no idea this was practical for production.

**The narrative mattered more than the code.** The projects that resonated most weren't the technically impressive ones. Day 17 (Genesis) worked because of the story, not the minigames. Day 23 (RetroOS) worked because of nostalgia, not the window manager. Day 15 (MyBrute) worked because I had a personal connection to the original game. The code was the easy part. The angle was the hard part.

## My Future Prediction

The cost of building a prototype just collapsed. Not the cost of building great software. That still takes time, taste, and iteration. But the cost of testing an idea? The cost of exploring a tech stack you've never used? Near zero.

**Adding features to existing software got dramatically cheaper too.** Once a project is set up with the right architecture, adding new features is easier than building from scratch. The AI understands the existing codebase, the patterns are established, and each new feature builds on what's already there. The marginal cost of the next feature approaches zero.

**The bottleneck shifted from writing code to deciding what to ship.** How do you market it? How do you sell it? When do you launch? The engineering isn't the constraint anymore. Product strategy, go-to-market, and distribution are.

**This is already changing how teams work.** If you can build features in hours instead of sprints, do roadmaps make sense anymore? How do you test everything you can ship? How do you know it's having the right impact on the right business metrics? How do you kill things as fast as you can deploy them? I predict that experimentation tools will become critically important for companies building software. A/B testing, feature flags, progressive rollouts. The ability to deploy fast is worthless if you can't measure and revert just as fast.

**AI won't replace developers. It will enhance them.** The real challenge is organizational. Entire companies are built from the ground up around planning, roadmaps, sprint cycles, and estimation. Now that building is fast, how do the rest of the functions keep up? Product, design, QA, marketing, sales. The engineering bottleneck disappearing doesn't mean work disappears. It means the bottleneck moves upstream and downstream. The companies that adapt to this shift will outship everyone else.

The tools aren't replacing developers. They're removing the reasons not to try.

## Watchfire

Every project in this challenge was built with [Watchfire](https://watchfire.io). I'm really proud of this one. It's my project. This challenge was partly about stress-testing it in production while creating content. Now you know.

I gave it a rough idea, it turned that into a detailed spec, broke the work into tasks, and executed each one through coding agents. Some days that was 4 tasks. Some days it was 43. I reviewed the output, tested it, filed bug reports when things broke, and iterated until it shipped.

I started building Watchfire while doing this challenge. The first Platformer project was built on v0. By the time miniOs shipped on Day 30, we were on v5. Each project gave me a chance to stress-test the tool, find bugs, gather feedback, and ship improvements. The challenge and the tool evolved together.

Here's what changed in Watchfire during the 30 days:

- **v1.0 Ember** (Day 8) — JSONL transcript logs replaced garbled terminal output with clean conversation logs. Fixed the agent restart loop that was causing infinite loops on rate limits. Fixed sandbox issues blocking projects in macOS protected directories.
- **v2.0 Spark** (Day 11) — Pluggable agent backend interface. OpenAI Codex, opencode, and Gemini CLI shipped as first-class backends alongside Claude Code. Per-task agent override so you can mix and match agents within a single project. Agent pickers in the init wizard, TUI settings, and GUI settings.
- **v3.0 Blaze** (Day 15) — GitHub Copilot CLI as a fifth backend. Fixed cross-filesystem update failures on Linux. Fixed task list rotation bug in projects with many tasks. Fixed GUI update prompts firing on every launch.
- **v4.0 Beacon** (Day 28) — The big one. Dashboard with aggregate status, filter chips, elapsed time badges, live terminal preview, and needs-attention treatment for failed tasks. OS notifications for task failures and run completions. Inline diff viewer. Per-task metrics capture (duration, tokens, cost). Project and cross-project insights views with KPI strips and charts. Report export to CSV and Markdown. Weekly digest notifications. Outbound integrations with Slack, Discord, and webhooks. GitHub auto-PR creation. Inbound HTTP server with GitHub, Slack, and Discord handlers.
- **v5.0 Flare** (Day 30) — Closed the inbound loop from Beacon. OAuth bot tokens for Slack and Discord. GitHub Enterprise, GitLab, and Bitbucket support. Per-IP rate limiting. Slack interactive components with retry/cancel buttons. Discord slash-command auto-registration. macOS-style settings UI with search. Fixed run-all silently halting on merge failures.

And the biggest one: Watchfire went from macOS-only to full cross-platform support for macOS, Linux, and Windows during the challenge. That alone changed who could use it.

Five major versions in 30 days. From a macOS-only task runner to a cross-platform orchestration platform with multi-agent support, a dashboard, notifications, integrations, insights, and delivery pipelines.

Watchfire supports multiple coding agents (Claude Code, Codex, Gemini, opencode, Copilot), works across platforms, and can be used as a GUI, CLI, or TUI. I'm currently working on v6, adding Cursor support and fixing a concurrency bug. Or more accurately, Watchfire is building Watchfire now. The tool orchestrates its own development. That's a sentence I didn't expect to write when I started this challenge.

There's a lot more coming. I'll write a full deep-dive on Watchfire after I recover from the last 30 days.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Thank You

If you followed along, tried any of the projects, shared a post, or just read a few articles, thank you. This was a lot of work and a lot of fun. Building in public is weird because you're shipping rough work for everyone to see. But that was the point. Not polish. Not perfection. Just consistent output and learning.

If you want to follow whatever I'm doing next, subscribe to the blog (link below) or follow me on social. And if any of this resonated, share it with someone who might find it useful. That's the best way to support this kind of work.

Thirty projects. Thirty days. Done.

## All 30 Projects

| Day | Project | Type | Try It |
|-----|---------|------|--------|
| 1 | [Platformer](/posts/202604-vibe30/day01-platformer/) | Game | [Play](https://vibe30-day01-the-platformer.vercel.app) |
| 2 | [Snake](/posts/202604-vibe30/day02-snake/) | Game | [Play](https://vibe30-day02-snake.vercel.app) |
| 3 | [Realm of Shadows](/posts/202604-vibe30/day03-rpg/) | Game | [Play](https://vibe30-day03-rpg.vercel.app) |
| 4 | [Tetris](/posts/202604-vibe30/day04-tetris/) | Game | [Play](https://vibe30-day04-tetris.vercel.app) |
| 5 | [Breakout](/posts/202604-vibe30/day05-breakout/) | Game | [Play](https://vibe30-day05-breakout.vercel.app) |
| 6 | [Pomodoro](/posts/202604-vibe30/day06-pomodoro/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day06-pomodoro/releases/latest) |
| 7 | [GitDash](/posts/202604-vibe30/day07-gitdash/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day07-gitdash/releases/latest) |
| 8 | [NotesTUI](/posts/202604-vibe30/day08-notestui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day08-notestui/releases/latest) |
| 9 | [TaskTUI](/posts/202604-vibe30/day09-tasktui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day09-tasktui/releases/latest) |
| 10 | [Miro Clone](/posts/202604-vibe30/day10-miroclone/) | Web App | [Try](https://vibe30-day10-miroclone.vercel.app) |
| 11 | [Treelo](/posts/202604-vibe30/day11-trelloclone/) | Web App | [Try](https://vibe30-day11-trelloclone.vercel.app) |
| 12 | [Wordle](/posts/202604-vibe30/day12-wordle/) | Game | [Play](https://vibe30-day12-wordle.vercel.app) |
| 13 | [GitFolio](/posts/202604-vibe30/day13-githubportfolio/) | Web App | [Try](https://vibe30-day13-githubportfolio.vercel.app) |
| 14 | [WeatherTUI](/posts/202604-vibe30/day14-weathertui/) | TUI | [Repo](https://github.com/nunocoracao/Vibe30-day14-weathertui) |
| 15 | [MyBrute Arena](/posts/202604-vibe30/day15-mybrute/) | Game | [Play](https://vibe30-day15-mybrute.vercel.app) |
| 16 | [Tic-Tac-Toe: Evolved](/posts/202604-vibe30/day16-tictactoe/) | Game | [Play](https://vibe30-day16-tictactoe-evolved.vercel.app) |
| 17 | [Project GENESIS](/posts/202604-vibe30/day17-genesis/) | Game | [Play](https://vibe30-day17-genesis.vercel.app) |
| 18 | [PollBox](/posts/202604-vibe30/day18-pollbox/) | Web App | [Try](https://vibe30-day18-pollbox.vercel.app) |
| 19 | [ReactionWall](/posts/202604-vibe30/day19-reactionwall/) | Web App | [Try](https://vibe30-day19-reactionwall.vercel.app) |
| 20 | [MoodBoard](/posts/202604-vibe30/day20-moodboard/) | Web App | [Try](https://vibe30-day20-moodboard.vercel.app) |
| 21 | [ChatRooms](/posts/202604-vibe30/day21-chatrooms/) | Web App | [Try](https://vibe30-day21-chatrooms-nir8.vercel.app) |
| 22 | [LiveQ&A](/posts/202604-vibe30/day22-liveqa/) | Web App | [Try](https://vibe30-day22-liveqa.vercel.app) |
| 23 | [RetroOS](/posts/202604-vibe30/day23-retroos/) | Web App | [Try](https://vibe30-day23-retroos.vercel.app) |
| 24 | [Reblog](/posts/202604-vibe30/day24-reblog/) | Web App | [Try](https://vibe30-day24-reblog.vercel.app) |
| 25 | [SoundScape](/posts/202604-vibe30/day25-soundscape/) | Web App | [Try](https://vibe30-day25-soundscape.vercel.app) |
| 26 | [PixelForge](/posts/202604-vibe30/day26-pixelforge/) | Web App | [Try](https://vibe30-day26-pixelforge.vercel.app) |
| 27 | [Terminal](/posts/202604-vibe30/day27-terminal/) | Native | [Release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest) |
| 28 | [ideA](/posts/202604-vibe30/day28-idea/) | Native | [Release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest) |
| 29 | [n0ti0n](/posts/202604-vibe30/day29-n0ti0n/) | Web App | [Try](https://blocknotes-lime.vercel.app) |
| 30 | [miniOs](/posts/202604-vibe30/day30-minios/) | Web App | [Try](https://vibe30-day30-minios.vercel.app) |

---

*This is the final post of the [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/) series. All 30 projects are open source on [GitHub](https://github.com/nunocoracao/30DaysOfVibeCoding).*
