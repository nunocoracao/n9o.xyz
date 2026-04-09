---
title: "30 Days of Vibe Coding - Day 2 - Snake"
description: "A Nokia 3310-style Snake game with authentic LCD graphics, retro sound effects, and a full phone frame."
summary: "A Nokia 3310-style Snake game with authentic LCD graphics, retro sound effects, and a full phone frame."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-02", "typescript", "react", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 2
seriesOpened: true
date: 2026-04-07
draft: false
---

Day 2. I wanted something nostalgic.

## The Prompt

I went with this:

> "Build a Snake game styled like the Nokia 3310. LCD green screen, pixel blocks, the whole thing. Put it inside a phone frame."

That was pretty much the entire brief. I had a clear visual in mind but gave zero implementation details.

## How It Was Built

[Watchfire](https://watchfire.io) took that prompt and broke it down into tasks covering the game engine, the Nokia visual styling, sound effects, mobile controls, and the phone frame UI. The game logic, the LCD rendering, the seven-segment score display, all of it came out of that single prompt.

I didn't sit there guiding every decision. I described the vibe I wanted and came back to something playable.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## What I Got

This one surprised me with how far it went on the aesthetic.

![Start screen with Nokia phone frame](images/screenshot-01.png)

**It built an entire phone.** Not just a game canvas. A full Nokia 3310 frame with a speaker grille, NOKIA branding, a D-pad, action buttons, and a screen bezel with depth. The phone body has gradients and shadows that make it look three-dimensional. I asked for a phone frame. I got a phone.

![Gameplay with LCD grid](images/screenshot-02.png)

**The LCD screen is authentic.** The classic Nokia green (#9bbc0f for anyone curious), with a visible pixel grid, scanline overlay, and a screen glare effect in the corner. Each cell on the grid has a subtle gap to simulate actual LCD segments. The snake head even has little pixel eyes.

**It has a seven-segment score display.** Not just a number on screen. An actual SVG-rendered seven-segment LCD display sitting outside the game screen, like the secondary display on the phone. Score and high score, both rendered with proper inactive segment ghosting.

![Snake growing mid-game](images/screenshot-03.png)

**The food pulses.** There is a sine-wave animation on the food block that makes it gently throb. The snake speeds up every time it eats. It starts at 150ms per tick and ramps down to a minimum of 50ms. The difficulty curve is baked into the game loop, not hardcoded per level.

**Retro sound effects.** Square-wave oscillator sounds generated through the Web Audio API. Ascending tones when you start, a happy chirp when you eat, descending sad tones on game over. All of it synthesized at runtime, no audio files needed. It even saves your mute preference to localStorage.

![Game over screen with high score](images/screenshot-04.png)

**High score persistence.** It saves your best score to localStorage and shows a "NEW HIGH SCORE!" message with a pulse animation when you beat it. The game over screen has a pixel-art skull icon built from a CSS grid.

**Mobile controls.** On touch devices, it renders a D-pad with a center pause button. On desktop, it shows decorative buttons that match the phone aesthetic. It detects the device type and adapts. There are also swipe controls as a fallback.

**Toggleable phone frame.** You can switch between the full Nokia phone frame and a minimal view with just the game screen. The preference persists in localStorage.

## The Numbers

- **8 source modules** (GameBoard, StartScreen, GameOverScreen, PauseOverlay, ScoreDisplay, useSnakeGame, useSound, plus the page layout)
- **~2,100 lines of TypeScript and React**
- **Zero external game libraries** (Next.js and React only, game logic is all custom hooks and Canvas)
- **5 synthesized sound effects** via Web Audio API
- **Total hands-on time:** maybe 20 minutes of playing and tweaking the prompt

## Try It

{{< github repo="nunocoracao/Vibe30-day02-Snake" showThumbnail=true >}}

**[Play Snake II](https://vibe30-day02-snake.vercel.app)**

Arrow keys or WASD to move, space to pause. Works on mobile with D-pad controls.

## Day 2 Verdict

I asked for a Snake game in a Nokia frame. I got a full phone simulation with synthesized audio, seven-segment displays, LCD scanline effects, and localStorage persistence for scores, sound preferences, and frame visibility.

The thing that stands out is how much of the work went into details I never asked for. The screen glare. The speaker grille dots. The pulse animation on the food. The pixel-art skull on the game over screen. These are polish decisions that would take hours to implement by hand, and they showed up for free.

Could I have built Snake myself? Probably, given enough time. But I would have made a green square on a grid with a score counter. I would not have built a Nokia 3310 simulator with synthesized chiptune audio and responsive mobile controls. The gap between what I would have built and what I got is the whole point of this challenge.

Two days in, two games shipped. The pattern from Day 1 holds: the starting point is no longer a blank file, and the finishing point is way beyond what I would have aimed for on my own.

---

*This is day 2 of [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Follow along as I ship 30 projects in 30 days using AI-assisted coding.*
