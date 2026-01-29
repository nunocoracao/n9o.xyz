---
title: "Building Watchfire: A Dashboard for AI Coding Agents"
summary: "How I built a tool to manage coding projects with Claude Code - and used it to build a chess game, a Trello clone, and more."
description: "How I built a tool to manage coding projects with Claude Code - and used it to build a chess game, a Trello clone, and more."
categories: ["Tech", "AI", "Makers"]
tags: ["AI", "Claude Code", "vibe coding", "side projects", "watchfire"]
date: 2027-01-21
draft: true
---

AI coding assistants are getting remarkably good at writing code. But managing them? That's still a mess. You're juggling terminal windows, switching between repos, losing track of what's running where. I built watchfire to fix that - a dashboard that lets me manage multiple coding projects, track tasks, and let AI agents work autonomously while I watch what they're doing.

## The Problem

I've been using Claude Code for just about everything lately - building side projects, experimenting with ideas, refactoring old code. It's incredible. But the more projects I had going, the more chaotic it became.

Every project lives in its own directory, its own terminal session. Want to check what Claude is doing on project A? Switch terminals. Now project B needs attention? Switch again. Lose track of which task you gave it? Scroll through hundreds of lines of logs.

There was no central place to see: what projects am I working on? What tasks are in progress? What did the AI actually do? I wanted a control room - somewhere I could see all my projects at a glance, assign tasks, and watch AI agents work without constantly context-switching between terminal windows.

So I built one.

## What Watchfire Does

Watchfire is a desktop dashboard for managing coding projects with AI agents. Here's the basic flow:

{{< figure src="img/watchfire-dashboard.png" alt="Watchfire dashboard showing miro-clone project" caption="The watchfire dashboard showing a project with tasks and live agent output" >}}

On the left, you see your projects - each one linked to a GitHub repo. Click a project and you get a task board with familiar columns: Todo, In Development, Done. Each task syncs with a GitHub issue, so everything stays connected to your actual codebase.

The right panel is where it gets interesting. That's the agent panel - showing live output from Claude Code as it works on your tasks. You can see exactly what it's doing: reading files, making edits, running commands. No black box.

Click a task, and watchfire spins up a Claude Code agent to work on it. The agent runs in the background, streaming its progress to the dashboard. You can chat with it directly if you want to guide it, or just let it work. There's a stop button if things go sideways.

Each project has its own settings and instructions that get passed to Claude. Think of it as project-specific context - coding conventions, architectural decisions, things the AI should know before touching your code.

## The Evolution

The tool went through several iterations before becoming watchfire.

It started as "FORGE" - a simpler interface focused on just running Claude Code with a task panel. The early versions were rough: a basic project selector, a simple task list, and an embedded terminal for Claude.

{{< figure src="img/forge-early.png" alt="Early FORGE interface" caption="The original FORGE interface with Claude Code's pixel art avatar" >}}

I liked the aesthetic - there's something charming about Claude Code's pixel art avatar showing up in a welcome message. But the interface was too cramped. Tasks were hard to manage, and switching between projects felt clunky.

{{< figure src="img/forge-task-panel.png" alt="FORGE task panel" caption="Task organization with status columns" >}}

The next version added proper task management with status columns and filtering. This is when I started using it for real projects instead of just testing. The agent panel got better too - live logs, branch information, the ability to see exactly what Claude was reading and writing.

{{< figure src="img/forge-agent-log.png" alt="FORGE with agent log" caption="The agent log panel showing Claude's work in real-time" >}}

Eventually I renamed it to watchfire - partly because I liked the name better, partly because the tool had evolved beyond the original concept. It wasn't just a forge for running Claude anymore; it was a control center for watching AI agents work.

I also built a web version (watchfire-web) for more flexibility - same functionality, but running in a browser instead of a desktop app.

{{< figure src="img/watchfire-web-definitions.png" alt="Watchfire web project definitions" caption="The web version showing project definitions and custom instructions" >}}

## What I Built With It

The best way to show what watchfire can do is to show what I've built using it. Here are some projects visible in my dashboard:

### Chess CLI

{{< figure src="img/chess-cli.png" alt="Chess CLI game" caption="A terminal chess game with Unicode pieces, built entirely by giving tasks to Claude" >}}

A complete terminal chess game with Unicode pieces, move validation, captured pieces tracking, and undo/redo. I created GitHub issues for features like "add move history" and "implement castling," then let Claude work through them one by one. The whole thing came together in an evening.

### Krello

{{< figure src="img/krello-board.png" alt="Krello board" caption="A Trello clone with boards, lists, and cards" >}}

A Trello clone with boards, lists, drag-and-drop cards, due dates, and labels. This one was more ambitious - multiple pages, database schema, authentication. Watchfire made it manageable by breaking it into discrete tasks. Each feature was a GitHub issue, each issue got picked up by an agent.

### Miro Clone

A collaborative whiteboard for sticky notes and shapes. Still a work in progress, but the core functionality - creating and moving elements, multiple shapes, collaborative editing - all came from tasks I assigned through watchfire.

### tictactoe-forge-test

This was the first test project, back when the tool was still called FORGE. A simple tic-tac-toe game to prove the concept worked. It did.

## How It Works

Behind the scenes, watchfire manages project definitions, GitHub sync, and agent orchestration.

{{< figure src="img/watchfire-web-dashboard.png" alt="Watchfire web dashboard" caption="The web dashboard showing multiple projects and tasks" >}}

**Project definitions** are markdown files that describe each project: what it's for, coding conventions, important files. These get included in the context when Claude starts working, so it understands the project before writing any code.

**GitHub sync** keeps tasks connected to issues. When I create an issue on GitHub, it appears in watchfire. When an agent completes a task, it can commit and push. Everything stays in version control.

**Agent management** handles running Claude Code in the background. Each agent gets its own process, its own conversation history, its own branch. The dashboard streams output in real-time so you can watch progress or intervene if needed.

There's also settings per project - things like which branch to work on, whether to auto-commit, and any environment variables the project needs.

## What's Next

Watchfire is still evolving. The web version is in active development, adding features from the desktop app and improving the UI. I want to support more agent providers beyond Claude - local models, other APIs, whatever makes sense for different projects.

Task dependencies would be useful too. Right now each task is independent, but some projects need sequential work: "do X before Y." And there's the open source question - whether to release this publicly or keep it as a personal tool.

The meta aspect isn't lost on me either. I'm using AI to build a tool that manages AI. Watchfire itself was built partly through watchfire - early versions helping build later versions. It's a strange loop, but it works.

---

If you're juggling multiple AI-assisted projects and getting lost in terminal windows, you might need something like this. A place to see everything at once, assign tasks, and watch your AI agents work. That's what watchfire became for me - less chaos, more building.

*Built with Claude Code, managed by watchfire, powered by too much curiosity.*
