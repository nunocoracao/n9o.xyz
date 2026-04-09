---
title: "30 Days of Vibe Coding - Day 8 - NotesTUI"
description: "A terminal-based markdown note-taking app with full-text search, categories, themes, and an MCP server for AI integration."
summary: "A terminal-based markdown note-taking app with full-text search, categories, themes, and an MCP server for AI integration."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-08", "go", "tui", "terminal", "notes", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 8
seriesOpened: true
date: 2026-04-13
draft: true
build:
  render: false
  list: false
---

Day 8. Yesterday I built a TUI for git repos. Today I built one for my brain.

## The Prompt

> "Build a Go TUI markdown notes app called NotesTUI. Full in-app editing with markdown preview using Glamour. SQLite with FTS5 for full-text search. Categories, tags, multiple color themes, vim keybindings. Add an MCP server mode so AI assistants can read and write notes. Include GoReleaser, GitHub Actions CI, install and uninstall scripts."

## How It Was Built

This one took 36 [Watchfire](https://watchfire.io) tasks to get right. The first 30 or so built the core notes app: creating and editing notes in the terminal, markdown rendering with Glamour, full-text search powered by SQLite FTS5, categories, tags, multiple themes, and vim-style keybindings. The whole thing stores data in `~/.notestui/` with a SQLite database and a YAML config file.

Then the last batch of tasks handled the distribution side. GoReleaser config for cross-platform builds, GitHub Actions for CI, an install script that auto-detects your OS and architecture, and an uninstall script to clean everything up. By the end it had a proper README and was ready to ship as a standalone binary.

The MCP server mode was the interesting part. Running `notestui serve` starts a Model Context Protocol server that exposes your notes to AI tools. List notes, search, create, update, delete, all through MCP. That means Claude Code or any MCP-compatible AI assistant can work with your notes directly.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## What I Got

![NotesTUI empty state with welcome screen](images/screenshot-01.png)

**The empty state is friendly.** First time you run it you get a clean welcome screen telling you to press `n` to create your first note. The bottom bar shows all the keybindings at a glance.

![Creating a new note with title, tags, and content](images/screenshot-02.png)

**The editor is built right in.** Press `n` and you get fields for title, tags, and content. Tab moves between fields, Ctrl+S saves. No spawning an external editor, everything stays inside the TUI.

![Notes list with preview panel](images/screenshot-03.png)

**Split-pane layout.** Notes list on the left, preview on the right. Tags show up as colored badges under the title. The status bar at the top says "Your markdown notes, beautifully organized" which is a nice touch the AI added on its own.

![Editing a longer note with markdown content](images/screenshot-04.png)

**Markdown editing works for real content.** I pasted in a longer note and the editor handled it fine. The content area scrolls, and when you save, the preview panel renders the markdown with Glamour.

![Full-text search results with preview](images/screenshot-05.png)

**Search is fast and useful.** Press `/` to search and it does full-text search across all your notes using SQLite FTS5. Results show up in the left panel with the matched note's preview on the right. The search query gets highlighted in the preview.

![MCP settings screen - not connected](images/screenshot-06.png)

**MCP integration has its own settings screen.** Press `m` to open the MCP settings. It shows connection status, available tools, and setup instructions. When not connected, it walks you through how to set it up.

![MCP settings screen - connected to Claude Code](images/screenshot-07.png)

**Once connected, it shows the status.** The settings screen updates to show that NotesTUI is configured to Claude Code, with a button to disconnect and a refresh status option.

![Claude Code creating notes through MCP](images/screenshot-08.png)

**This is where it gets wild.** I asked Claude Code to "write me some notes on all Marvel characters, one for each." It started calling `notestui - create_note` through MCP, generating detailed character profiles and pushing them straight into my notes database.

![Claude Code bulk-creating Marvel character notes](images/screenshot-09.png)

**It just kept going.** Claude created notes for Thor, Hulk, Black Widow, Hawkeye, Captain America, Iron Man, each with powers, abilities, key facts, and played-by information. All via MCP tool calls from Claude Code into NotesTUI.

![More Marvel notes being created via MCP](images/screenshot-10.png)

**The notes kept flowing in.** You can see the notes list on the left growing as Claude creates them. Each one gets proper tags like "marvel", "avengers", "mcu". The AI even decided to expand beyond the original 6 Avengers and add Scarlet Witch, Vision, and more.

![Search results for "spiderman" across all notes](images/screenshot-11.png)

**16 notes created, all searchable.** After the AI was done, I searched for "spiderman" and got the full character profile with real name, powers, key facts, and MCU appearances. The split-pane view shows the rendered markdown preview on the right.

![Note detail view with markdown rendering](images/screenshot-12.png)

**The markdown rendering is solid.** Glamour handles headers, bold text, bullet points, and blockquotes. The note preview in the right panel looks clean and readable.

![Side-by-side NotesTUI and Claude Code](images/screenshot-13.png)

**Side by side with Claude Code.** Running NotesTUI on the left and Claude Code on the right. As Claude creates notes through MCP, they appear in the TUI in real time. The list scrolls down as new notes arrive.

![Claude Code querying notes through MCP](images/screenshot-14.png)

**AI can also read your notes.** I asked Claude "What's Spiderman's name based on my notes?" and it called `notestui - get_note` through MCP to look up the answer. It pulled the data from my notes and answered correctly: Peter Benjamin Parker. The AI can both write to and read from your personal notes database.

## The Numbers

- **36 Watchfire tasks** from blank repo to shipped binary
- **Pure Go** with no CGO dependency (uses pure Go SQLite)
- **6 MCP tools**: list, search, get, create, update, delete
- **Multiple themes** and vim keybindings
- **GoReleaser + GitHub Actions** for automated cross-platform builds
- **Install and uninstall scripts** included
- **Total hands-on time:** about 25 minutes of testing, prompting, and playing with the MCP integration

## Try It

{{/*< github repo="nunocoracao/Vibe30-day08-notestui" >*/}}

Install it with the one-liner:

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day08-notestui/main/scripts/install.sh | bash
```

Or from source:

```bash
go install github.com/nunocoracao/Vibe30-day08-notestui@latest
```

Then just run `notestui` to start taking notes, or `notestui serve` to start the MCP server.

## Day 8 Verdict

Yesterday's GitDash was the first project I said I might actually keep using. Today's NotesTUI goes a step further because of the MCP server. The notes app itself is solid. Clean TUI, fast search, nice markdown rendering. But the ability to run `notestui serve` and let an AI assistant read and write to your notes database? That turns a simple notes app into something genuinely interesting.

The demo where Claude created 16 Marvel character notes by calling MCP tools was not something I planned. I just wanted to test if the integration worked. Watching the notes appear in real time in the TUI while Claude was typing away in another terminal was one of those moments where the whole vibe coding thing clicks. You build a tool, give it an AI interface, and suddenly it can do things you didn't think to ask for.

36 Watchfire tasks is the most for any project so far in the challenge. The extra complexity came from the MCP server, the distribution scripts, and the CI pipeline. But the result is a proper Go tool that installs from a single curl command and works with AI assistants out of the box.

---

*This is day 8 of [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Follow along as I ship 30 projects in 30 days using AI-assisted coding.*
