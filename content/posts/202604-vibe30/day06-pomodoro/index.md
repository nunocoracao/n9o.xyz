---
title: "30 Days of Vibe Coding - Day 6 - Pomodoro"
description: "A terminal-based Pomodoro timer built in Go with Bubble Tea, featuring ASCII art, session tracking, and weekly statistics."
summary: "A terminal-based Pomodoro timer built in Go with Bubble Tea, featuring ASCII art, session tracking, and weekly statistics."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-06", "go", "tui", "bubbletea"]
series: ["30 Days of Vibe Coding"]
series_order: 6
seriesOpened: true
date: 2026-04-11
draft: true
---

Day 6. Time to leave the browser behind and build something for the terminal.

## The Prompt

> "Build a terminal Pomodoro timer in Go using Bubble Tea with large ASCII countdown, session tracking with SQLite, daily and weekly stats, task labels, and customizable durations."

## How It Was Built

I wanted something I'd actually use. I already run most of my workflow in the terminal, and switching to a browser tab for a Pomodoro timer always felt wrong. So the prompt was specific: Go, Bubble Tea for the TUI framework, Lip Gloss for styling, SQLite for persistence. No web server, no Electron wrapper, no browser. Just a binary you can run from anywhere.

The project landed as a clean Go module with 11 source files across 6 packages: `main`, `ascii`, `config`, `db`, `stats`, `timer`, and `ui`. Each package has a clear responsibility. The timer package handles the state machine (idle, running, paused, finished). The UI package renders everything with Bubble Tea. The database package manages SQLite persistence. The stats package aggregates session data for daily and weekly views.

It even came with an install script, a Makefile, and proper CLI flags using a custom config loader that merges a YAML config file with command-line arguments.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## What I Got

![Pomodoro timer ready to start](images/screenshot-01.png)

**Big ASCII numbers.** The countdown display uses custom block-character digits that are 5 lines tall. They're readable from across the room, which is kind of the point of a Pomodoro timer. You should be able to glance at it and know how much time you have left.

![Timer running with progress bar](images/screenshot-02.png)

**Color-coded sessions.** Work sessions glow red. Short breaks turn green. Long breaks get a different shade. The whole UI shifts color based on what phase you're in, so you know at a glance whether you should be working or resting.

![Short break ready](images/screenshot-03.png)

**It tracks everything.** Every session goes into a local SQLite database at `~/.pomo/sessions.db`. The header bar shows your daily stats in real time: how many pomodoros you've completed and total focus time. Run `pomo stats` and you get a weekly breakdown with ASCII bar charts.

![Short break running](images/screenshot-04.png)

**The session cycle works.** Four work sessions, then a long break. The progress badge in the top right shows where you are in the cycle (e.g., `[WORK 1/4]`). After the fourth work session, it automatically switches to a 15-minute long break instead of the usual 5-minute short break.

**Task labels.** Run `pomo -t "Write blog post"` and the task name shows up in the header. It also gets stored in the database, so when you look at your stats later, you can see what you were actually working on.

**Terminal bell.** When a session ends, it rings the terminal bell. Simple, effective, and it works with whatever notification system your terminal supports.

## The Bug Reports

None this time. The timer worked correctly on the first build. Start, pause, resume, skip, reset, session transitions, all of it functioned as expected. The keyboard controls were responsive and the state machine handled edge cases cleanly.

## The Numbers

- **11 Go source files** across 6 packages
- **1 test file** with timer state machine tests
- **4 session types:** work, short break, long break, and the transitions between them
- **SQLite persistence** for session history
- **YAML + CLI config** with sensible defaults (25/5/15 minute cycles)
- **Total hands-on time:** about 20 minutes of testing and tweaking the prompt

## Try It

{{/*< github repo="nunocoracao/Vibe30-day06-pomodoro" >*/}}

Install it with:

```bash
go install github.com/nunocoracao/Vibe30-day06-pomodoro@latest
```

Or use the install script:

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day06-pomodoro/main/install.sh | bash
```

Then just run `pomo` in your terminal.

## Day 6 Verdict

This one felt different because it's a tool, not a toy. The previous projects were fun to build and show off, but this is something I'd actually run on my machine every day. A single binary, no dependencies at runtime, works in any terminal.

The Bubble Tea framework was a great choice for this. The result looks polished without being over-engineered. The ASCII digits, the color-coded phases, the progress bar, it all comes together into something that feels intentional rather than thrown together.

What surprised me most was the architecture. Six packages with clean boundaries. A proper state machine for the timer. Graceful database handling where if SQLite fails, the timer still works, you just don't get stats. That's the kind of decision a senior developer would make, and it came straight from the prompt.

Six days in and this is the first project I've kept running after writing the blog post.

---

*This is day 6 of [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Follow along as I ship 30 projects in 30 days using AI-assisted coding.*
