---
title: "30 Days of Vibe Coding - Day 7 - GitDash"
description: "A terminal dashboard for monitoring the status of all your git repositories at a glance, built with Go and Bubble Tea."
summary: "A terminal dashboard for monitoring the status of all your git repositories at a glance, built with Go and Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-07", "go", "tui", "terminal", "git"]
series: ["30 Days of Vibe Coding"]
series_order: 7
seriesOpened: false
date: 2026-04-12
draft: true
---

Day 7. I have too many git repos and zero idea which ones have uncommitted changes.

## The Prompt

> "Build a TUI app in Go that scans a directory tree for git repos and shows their status in a terminal dashboard. Color-coded: green for clean, yellow for dirty, blue for ahead/behind. Let me fetch, pull, and open a shell in any repo. Use Bubble Tea for the UI."

## How It Was Built

This was the first non-browser project in the challenge. No HTML, no JavaScript, no Vercel deploy. Just a Go binary that runs in the terminal.

The AI broke the work down into packages that map pretty cleanly to concerns: a scanner that walks directory trees looking for `.git` folders, a git package that shells out to git for status info, a config system using YAML, and a full TUI layer built on Charm's Bubble Tea framework.

What I liked about this one is that the architecture actually makes sense. The scanner skips `node_modules`, `vendor`, and hidden directories. The git package wraps every git command I'd normally run by hand: branch, status, log, rev-list for ahead/behind, stash list, describe for tags. The UI layer has clean separation between the list view, detail view, status bar, help overlay, and styles.

It even came with a Makefile for cross-platform builds (darwin/linux, amd64/arm64) and an install script that auto-detects your OS and architecture.

## What I Got

![GitDash main view showing repos grouped by status](images/screenshot-01.png)

**It groups repos by status.** Dirty repos with uncommitted changes show up first (yellow dot), then repos that need syncing with remote (ahead/behind counts in blue), then clean repos (green checkmark). At a glance I can see which repos need attention. Press `s` to toggle between grouped and alphabetical views.

![GitDash with a repo selected](images/screenshot-02.png)

**Each repo shows a lot of info on two lines.** Name, branch in pink brackets, latest tag in parentheses, clean/dirty indicator, ahead/behind arrows, relative commit time on the right, and the last commit message below. It packs a surprising amount of context into a small space.

![Detail view for a single repo](images/screenshot-03.png)

**The detail view is genuinely useful.** Hit Enter on any repo and you get the full picture: path, branch, tag, status, remote sync state, full commit message with author, list of changed files if dirty, and stash count. From here you can pull, or press `g` to drop into a shell right in that repo's directory.

![Shell opened from GitDash](images/screenshot-04.png)

**The shell integration works.** Press `g` and it spawns your shell (reads `$SHELL`) in the repo directory. Do your thing, exit, and you're back in GitDash. When you come back, it refreshes the repo status automatically.

**It has search/filter.** Press `/` and start typing to filter repos by name in real-time. Useful when you're scanning a directory with dozens of projects.

**YAML config file.** Set your watch paths in `~/.config/gitdash/config.yaml` so you don't have to pass `-path` every time. Configure multiple directories, max scan depth, and whether to show hidden folders.

## The Bug Reports

Nothing major on this one. The TUI came together cleanly. The only thing I noticed was that on very large directory trees, the initial scan takes a moment, but it shows a "Scanning for repositories..." message so you know it's working.

## The Numbers

- **11 Go source files** across 5 packages (main, config, git, scanner, ui)
- **~1,900 lines of Go**
- **1 test file** for the scanner
- **Cross-platform builds** for macOS and Linux (amd64/arm64)
- **Install script** with auto-detection of OS and architecture
- **Total hands-on time:** maybe 20 minutes of testing and tweaking the prompt

## Try It

{{/*< github repo="nunocoracao/Vibe30-day07-gitdash" >*/}}

Install it with:

```bash
go install github.com/nunocoracao/Vibe30-day07-gitdash@latest
```

Or the one-liner:

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day07-gitdash/main/scripts/install.sh | bash
```

Then just run `gitdash` in any directory that contains git repos.

## Day 7 Verdict

This is the first project in the challenge that I might actually keep using. The previous six were games and demos. This one solves a real problem I have: I work across a lot of repos and I constantly forget which ones have uncommitted changes or are behind remote.

The Go + Bubble Tea stack was a good fit for a TUI. The Lip Gloss styling gives it that polished terminal aesthetic without being over the top. The whole thing compiles to a single binary with no dependencies, which is exactly what you want for a CLI tool.

What surprised me most is that the AI produced a proper Go project structure. Not everything dumped into main.go. Clean packages, proper error handling, graceful degradation when git commands fail. It even handles edge cases like repos with no commits or no upstream configured.

Seven days in and this is the first project that crossed from "neat demo" into "tool I'd put on my machine." That feels like progress.

---

*This is day 7 of [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Follow along as I ship 30 projects in 30 days using AI-assisted coding.*
