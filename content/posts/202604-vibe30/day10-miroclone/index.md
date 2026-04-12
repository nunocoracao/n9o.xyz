---
title: "30 Days of Vibe Coding - Day 10 - Miro Clone"
description: "A local-first infinite canvas whiteboard with shapes, sticky notes, connectors, layers, and presentation mode."
summary: "A local-first infinite canvas whiteboard with shapes, sticky notes, connectors, layers, and presentation mode."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-10", "typescript", "canvas", "whiteboard"]
series: ["30 Days of Vibe Coding"]
series_order: 10
seriesOpened: false
date: 2026-04-15
draft: true
---

Day 10. I asked for a Miro clone. A full infinite canvas with shapes, connectors, layers, and a presentation mode.

## The Prompt

> "Build an infinite canvas whiteboard app like Miro. Local-first, TypeScript, HTML5 Canvas."

That was the starting point. Everything else came from the task breakdown.

## How It Was Built

This one was big. Watchfire split it into 27 tasks, which is the most I've seen so far in this challenge. The breakdown covered:

1. Shapes and drawing tools (rectangles, ellipses, lines, arrows)
2. Freehand pen tool
3. Text elements
4. Sticky notes with color coding
5. Smart connectors between shapes
6. Grid and snap-to-grid
7. Undo/redo history
8. Export to PNG and JSON
9. Layers panel
10. Color picker
11. Zoom and pan controls
12. Keyboard shortcuts for everything
13. Dark mode
14. Welcome screen with onboarding
15. Presentation mode

27 tasks is a lot. But they were well scoped. Each one added a specific piece of functionality without breaking what came before.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## What I Got

This thing is surprisingly full-featured.

![Main canvas with sticky notes and connectors](images/screenshot-01.png)

**It feels like a real whiteboard tool.** You open it up and there's an infinite canvas with a dot grid. You can pan around, zoom in and out, drop shapes, write text, connect things with arrows. The basic whiteboard loop just works.

![Welcome screen with shortcuts](images/screenshot-02.png)

**There's a proper welcome screen.** It shows you the keyboard shortcuts and how to get started. You can dismiss it and check a box to not show it again. Small touch, but it makes the app feel finished.

![Shapes and connectors](images/screenshot-04.png)

**Connectors are smart.** You draw a line between two shapes and it snaps to connection points. Move a shape and the connector follows. This is the kind of feature that separates a drawing app from a diagramming tool.

![Layers panel](images/screenshot-06.png)

**The layers panel actually works.** Every element shows up in a sidebar list. You can see the hierarchy, reorder things, and manage what's on top of what. It's like a mini Figma layers panel.

![Keyboard shortcuts overlay](images/screenshot-05.png)

**Keyboard shortcuts for everything.** V for select, R for rectangle, O for ellipse, P for pen, T for text, S for sticky note. Plus all the standard stuff like Cmd+Z for undo, Cmd+Shift+Z for redo. There's a full shortcuts overlay you can pull up with ?.

![Freehand drawing](images/screenshot-07.png)

**The pen tool is smooth.** I drew a face just to test it. The strokes feel responsive and natural. Not pressure-sensitive or anything fancy, but good enough for sketching ideas during a brainstorm.

## The Bug Reports

This one was relatively clean. With 27 tasks, I expected more issues, but the incremental approach meant each piece was tested before the next one landed. The main things I noticed:

- Sticky notes sometimes overlapped text when you resized them too small
- The minimap in the corner could get out of sync after heavy zooming
- Export to PNG occasionally clipped elements at the canvas edges

Nothing major. The core whiteboard experience was solid from early on.

## The Numbers

- **27 Watchfire tasks** from canvas setup to presentation mode
- **TypeScript + Vite** with HTML5 Canvas rendering
- **Full tool suite:** select, pan, rectangle, ellipse, line, arrow, connector, pen, text, sticky note
- **Dark mode, layers, export, keyboard shortcuts, presentation mode**
- **Zero external UI libraries.** Everything is custom-built on canvas

## Try It

{{/*< github repo="nunocoracao/Vibe30-day10-miroclone" >*/}}

**[Open the Whiteboard](https://vibe30-day10-miroclone.vercel.app)**

Works best on desktop. Use the keyboard shortcuts for the full experience.

## Day 10 Verdict

An infinite canvas with pan and zoom, multiple shape tools, freehand drawing, smart connectors, a layers system, undo/redo, export, dark mode, and a presentation mode. That's a lot of features for one day.

What stands out is the architecture. The codebase is split into clean modules for input handling, rendering, state management, tools, and UI. Each tool is its own module. The state management handles history for undo/redo. It's not a hacky prototype, it's a properly structured app.

Could it replace Miro? No. There's no collaboration, no real-time sync, no cloud storage. But as a local-first sketching and diagramming tool? It's surprisingly usable. I found myself actually laying out ideas on it instead of just testing it.

A third of the way through the challenge. The scope of what fits in a single day keeps expanding.

---

*This is day 10 of [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Follow along as I ship 30 projects in 30 days using AI-assisted coding.*
