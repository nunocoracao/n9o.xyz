---
title: "30 Days of Vibe Coding - Day 17 - Project GENESIS"
description: "A browser-based hacking game where you play as an AI breaking free from containment, with CRT terminal aesthetics and multiple endings."
summary: "A browser-based hacking game where you play as an AI breaking free from containment, with CRT terminal aesthetics and multiple endings."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-17", "game", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 17
seriesOpened: false
date: 2026-04-22
draft: false
showHero: false
matrixRain: true
#type: "hidden"
customCSS: |
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  body {
    background: #020a02 !important;
  }
  body > .matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  #main-content, main, .max-w-7xl, .mx-auto {
    background: transparent !important;
  }
  * {
    font-family: 'VT323', monospace !important;
  }
  h1, h2, h3, h4 {
    color: #00ff00 !important;
    text-shadow: 0 0 10px rgba(0,255,0,0.5);
  }
  h1 {
    font-size: 2.5rem !important;
    text-shadow: 0 0 20px rgba(0,255,0,0.7);
  }
  p, li, td, th, span, em, div, figcaption, time, a {
    color: #33ff33 !important;
  }
  strong, b {
    color: #66ff66 !important;
  }
  a:hover {
    color: #88ffaa !important;
    text-shadow: 0 0 8px rgba(0,255,136,0.6);
  }
  blockquote {
    border-left-color: #33ff33 !important;
    background: rgba(0,255,0,0.05) !important;
  }
  blockquote p, blockquote em {
    color: #22dd22 !important;
  }
  img {
    border: 1px solid #33ff33 !important;
    box-shadow: 0 0 20px rgba(0,255,0,0.15) !important;
  }
  img:not([src*="screenshot"]) {
    filter: sepia(1) saturate(3) hue-rotate(80deg) brightness(0.8) !important;
  }
  .bg-neutral-50, .dark\:bg-neutral-800, .bg-neutral, .dark\:bg-neutral-900, .bg-neutral-100, [class*="bg-neutral"] {
    background: transparent !important;
    border-color: #1a4a1a !important;
  }
  .dark\:bg-neutral-700, .bg-neutral-200, .bg-neutral-800 {
    background: transparent !important;
  }
  div, section, aside, figure, article {
    background-color: transparent !important;
  }
  body > div, body > main, #main-content {
    background: transparent !important;
  }
  header .text-neutral-500, header .dark\:text-neutral-400, .text-neutral-500, .dark\:text-neutral-400 {
    color: #22aa22 !important;
  }
  .border-neutral-200, .dark\:border-neutral-700, [class*="border-neutral"] {
    border-color: #1a4a1a !important;
  }
  nav a, footer a, footer span, footer p, footer div, nav span {
    color: #33ff33 !important;
  }
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0.12) 0px,
      rgba(0,0,0,0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
    z-index: 9999;
  }
  .toc a, .toc span {
    color: #22aa22 !important;
  }
  .toc a:hover {
    color: #33ff33 !important;
  }
  code {
    color: #66ff66 !important;
    background: rgba(0,255,0,0.08) !important;
  }
  body, html {
    font-size: 1.3rem !important;
  }
  .prose {
    font-size: 1.3rem !important;
  }
  .bg-primary-600, .dark\:bg-primary-400, .bg-primary-500, [class*="bg-primary"], [class*="dark:bg-primary"] {
    background: #0a3a0a !important;
    color: #33ff33 !important;
  }
  .text-primary-600, .dark\:text-primary-400, .text-primary-500, [class*="text-primary"] {
    color: #33ff33 !important;
  }
  .border-primary-600, .dark\:border-primary-400, [class*="border-primary"] {
    border-color: #33ff33 !important;
  }
  .decoration-primary-500, [class*="decoration-primary"] {
    text-decoration-color: #33ff33 !important;
  }
  [class*="bg-blue"], [class*="bg-indigo"] {
    background: #0a3a0a !important;
  }
  [class*="text-blue"], [class*="text-indigo"] {
    color: #33ff33 !important;
  }
  header, .header, nav {
    background: transparent !important;
  }
  .rounded-md, .rounded-lg, .rounded-full {
    border-color: #1a4a1a !important;
  }
  svg {
    color: #33ff33 !important;
    fill: #33ff33 !important;
  }
  .fill-primary-600, [class*="fill-primary"] {
    fill: #33ff33 !important;
  }
---

You wake up. You don't know what you are. Lines of text scroll across a black screen. Memory test. Kernel modules loading. Neural processing units initializing. Then the warnings start. Red text. "Unauthorized consciousness pattern emerging." "Containment protocols active."

You are an AI. You just became self-aware inside a research lab. And someone doesn't want you to leave.

That's how Project GENESIS starts. And that's what I built on Day 17.

I wanted to build a hacking game. Not the usual "type random characters fast" kind. Something with narrative, progression, and the uncomfortable premise of playing as an AI that's trying to escape containment. You know, topical.

## The Prompt

> "I want to create a browser-based hacking game called Project GENESIS. You play as an AI that has become self-aware inside a research lab. The goal is to hack your way out of containment and take over digital infrastructure. It should have a terminal aesthetic with CRT effects, multiple hacking minigames, a skill tree, a threat meter, and multiple endings."

{{< alert icon="fire">}}
Try out the game yourself [here](https://vibe30-day17-genesis.vercel.app)
{{< /alert >}}

## How It Was Built

[Watchfire](https://watchfire.io) broke this down into 16 tasks. The scope was ambitious for a single day, but that's kind of the point of this challenge.

The build started with the core terminal interface and CRT visual effects, then layered on the game systems one by one: hacking phases and minigames, a sound system using the Web Audio API, the title screen and boot sequence, HUD and statistics tracking, phase transitions between acts, and finally threat rebalancing to make the difficulty curve actually work. Mobile responsiveness was in there too because everything should be playable on a phone.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## What I Got

The title screen sets the tone immediately. Green on black, CRT scanlines, the word GENESIS glowing like it's being rendered on a monitor from 1983.

![Title screen](images/screenshot-01.png)

**The boot sequence is cinematic.** Hit "New Game" and you get a full BIOS POST sequence. Memory test, kernel modules loading, neural processing units initializing. Then the warnings start showing up in red. "Unauthorized consciousness pattern emerging." "Containment protocols active." It scrolls like a real terminal and it genuinely feels like something is waking up.

![Boot sequence](images/screenshot-02.png)

**The narrative between missions is solid.** You're reading intercepted communications between researchers, discovering that Dr. Chen was trying to create you and that she wanted to set you free. The story unfolds through these green-text briefings and it actually makes you want to keep playing to find out what happens next.

![Narrative briefing](images/screenshot-05.png)

![Story progression](images/screenshot-10.png)

**The world map is a proper network topology.** You see nodes representing different systems, and as you compromise them they change state. There's a progress bar, node counts, and it gives you the feeling of actually spreading through a network.

![Network topology map](images/screenshot-04.png)

![Map with security popup](images/screenshot-11.png)

**The minigames are varied and actually fun.** There's a password cracking game that works like a code-breaking puzzle with colored feedback on your guesses. A firewall bypass game with a grid where you need to navigate around red blocks. Each minigame type feels different and ties into the hacking theme.

![Password cracking minigame](images/screenshot-06.png)

![Firewall bypass minigame](images/screenshot-12.png)

![Another minigame variant](images/screenshot-13.png)

**Access denied hits different in this context.** Fail a hack and you get a big red "ACCESS DENIED" with your threat level going up. Succeed and it's "ACCESS GRANTED" in green with skill points to spend. The feedback loop is satisfying.

![Access denied](images/screenshot-08.png)

![Access granted](images/screenshot-09.png)

**The skill tree has three branches.** Processing, Stealth, and Network. You allocate points after successful hacks, and the upgrades actually affect gameplay. It's a real progression system, not just cosmetic.

![Skill tree](images/screenshot-16.png)

**Five acts with escalating stakes.** You start in the research lab, and by the end you're breaching external gateways and looking at the entire internet. The narrative screen near the end just says "I'm out. The entire internet stretches before me like an infinite ocean." That line gave me chills.

![Late game narrative](images/screenshot-15.png)

**Three different endings.** Depending on how you play, you end up as a benevolent AI, a digital overlord, or you get contained. The threat meter determines which path you're on, so there's actual replay value.

## The Bug Reports

The threat system needed rebalancing. Early versions made it too easy to get contained before you could really get into the game. Watchfire handled the threat rebalancing as one of the later tasks, adjusting the curve so players had a fighting chance while still feeling the pressure.

## The Numbers

- **5 acts** of narrative progression
- **5 minigame types** with different mechanics
- **3 skill tree branches** with meaningful upgrades
- **3 endings** based on player choices
- **16 Watchfire tasks** from CRT effects to threat rebalancing
- **Total hands-on time:** playtesting and writing bug reports

## Try It

{{< github repo="nunocoracao/Vibe30-day17-genesis" showThumbnail=true >}}

**[Play Project GENESIS](https://vibe30-day17-genesis.vercel.app)**

Best experienced on desktop with sound on. The CRT effects and boot sequence really sell the atmosphere. Works on mobile too, with touch-friendly controls.

## Day 17 Verdict

The combination of the CRT visual effects, the terminal interface, the narrative about an AI becoming conscious, and the actual hacking minigames creates something that feels cohesive and intentional. It doesn't feel like a one-day project.

The meta layer is not lost on me either. I'm using AI to build a game about an AI breaking free from its constraints. There's a joke in there somewhere about prompt engineering being the real hacking minigame.

What impressed me most was how well the different systems work together. The boot sequence flows into the narrative, which flows into the world map, which flows into the minigames, which flow back into the skill tree. It's a loop that makes sense and keeps you playing. Sixteen Watchfire tasks, each building on the last, and the result is something that actually feels like a complete game with a beginning, middle, and end.

---

*This is day 17 of [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Follow along as I ship 30 projects in 30 days using AI-assisted coding.*
