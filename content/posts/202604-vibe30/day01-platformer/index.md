---
title: "30 Days of Vibe Coding - Day 1 - Platformer"
description: "A browser-based platformer game with 10 levels, built with vanilla JavaScript and HTML5 Canvas."
summary: "A browser-based platformer game with 10 levels, built with vanilla JavaScript and HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-01", "javascript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 1
seriesOpened: false
date: 2026-04-07
draft: true
---

Day 1. Let's see what happens when I tell an AI to build me a game.

## The Prompt

I started with this:

> "I want to create a web based platformer with 10 levels"

That's it. That was the entire creative direction.

## How It Was Built

This was one of the first projects I used [Watchfire](https://watchfire.io) for. I gave it the single prompt and it broke the work down into 21 separate tasks:

1. Project setup and game canvas
2. Game engine core with game loop and rendering
3. Player character with movement and animations
4. Physics and collision detection
5. Platform and obstacle system
6. Level system with loader and camera
7. Easy levels (1-3)
8. Medium levels (4-6) with hazards
9. Hard levels (7-10)
10. UI/HUD system
11. Game states and menus
12. Audio system with 8-bit sound effects and music
13. Polish, save system, touch controls

Then came the bug reports: browser compatibility fix, restructuring for deployment, and several gameplay bugs I caught while playtesting.

I didn't sit there approving every file change. Watchfire queued up the tasks and worked through them. I came back to a working game and then playtested it.

## What I Got

I was not expecting this.

![Main menu](images/screenshot-01.webp)

**It has actual graphics.** Not placeholder squares. There's a little character with eyes, platforms with different colors, particle effects when you land. The whole thing has a cohesive visual style that I definitely didn't specify.

**It has music.** 8-bit background music that loops while you play. I never asked for audio. It just added it.

![Level 1 gameplay](images/screenshot-02.webp)

**The levels actually get harder.** Level 1 is a gentle tutorial called "First Steps." By level 4, there are spikes ("Danger Ahead"). Level 7 is called "Speed Demon." The difficulty curve exists and makes sense.

![Level 4 with hazards](images/screenshot-05.webp)

**There's a full menu system.** Main menu, level select, pause screen, game over screen, level complete screen. I can pick any level I've unlocked. This is way more polished than what I asked for.

![Level select](images/screenshot-06.webp)

**It saves my progress.** Close the browser, come back later, my unlocked levels are still there. localStorage persistence that I didn't ask for.

**18 modules.** GameEngine, Player, Physics, Camera, LevelLoader, LevelManager, ParticleSystem, AudioManager, SaveManager, TouchControls... it built a proper architecture with separation of concerns. Each module has a clear responsibility. I didn't specify any of this.

## The Bug Reports

It wasn't perfect on the first try. I had to playtest and report issues:

- "Only see a blue box" (browser compatibility, needed a roundRect polyfill)
- "Level doesn't end when I reach the flag"
- "Player keeps moving right when I start the next level"
- "Level select always loads level 1"
- "Music is too repetitive"

Simple descriptions. I didn't debug anything myself, just described what I saw. The fixes came back and worked.

![Level 7](images/screenshot-07.webp)

![Game over](images/screenshot-08.webp)

## The Numbers

- **18 game modules** with clear separation of concerns
- **10 levels** with JSON-based level definitions
- **~3,500 lines of vanilla JavaScript** (no framework for the game itself)
- **21 Watchfire tasks** from initial setup to final bug fixes
- **Total hands-on time:** maybe 30 minutes of playtesting and writing bug reports

## Try It

<!-- {{< github repo="nunocoracao/Vibe30-day01-ThePlatformer" >}} -->

**[Play the Platformer](https://vibe30-day01-the-platformer.vercel.app)**

Arrow keys or WASD to move, space to jump. Works on mobile too.

## Day 1 Verdict

One sentence prompt. A complete game with 10 levels, music, menus, and a save system.

Here's the thing: I don't know how to build a platformer. I've never written a game engine, never implemented collision detection, never designed a level progression system. I couldn't have built this myself. Not in a day, probably not in a week.

Is this the best platformer ever made? Not even close. But it exists. It works. People can play it. And it took me a couple of hours instead of weeks. That's what changed. The cost of producing something this complex just dropped dramatically. And if I wanted to, I could keep polishing it, adding levels, improving the physics. The starting point is no longer a blank file.

I think this will be a pattern across all 30 projects. I'm not going to build the best version of anything. But I'm going to build a working version of things I couldn't have built before, and I'm going to do it fast.

---

*This is day 1 of [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Follow along as I ship 30 projects in 30 days using AI-assisted coding.*
