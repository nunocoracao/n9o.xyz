---
title: "30 Days of Vibe Coding - Day 15 - MyBrute Arena"
description: "A medieval combat auto-battler inspired by the classic MyBrute, with character creation, animated fights, pets, weapons, tournaments, and a prestige system."
summary: "A medieval combat auto-battler inspired by the classic MyBrute, with character creation, animated fights, pets, weapons, tournaments, and a prestige system."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-15", "game", "auto-battler", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 15
seriesOpened: false
date: 2026-04-20
draft: true
#type: "hidden"
---

Day 15. I wanted to rebuild something I loved as a teenager. MyBrute was this simple browser game where you created a little fighter, challenged other people's fighters, and watched the battles play out automatically. No strategy during the fight itself, just build your character and see what happens. It was addictive in a way that did not make sense for how little you actually did. Perfect candidate for a one-day build.

## The Prompt

> "Build a browser-based fighting game inspired by MyBrute. Character creation with visual customization, turn-based auto-combat with animations, weapons and pets you collect from victories, XP and leveling, tournaments, boss fights, and a prestige system."

## How It Was Built

Watchfire split this into 27 tasks. That is the most tasks of any project so far, and it makes sense. This thing has a lot of systems that all need to talk to each other: combat math, XP curves, loot tables, pet behavior, prestige bonuses, tournament brackets, daily challenges, rival tracking, achievements, replays.

The build started with the core combat engine and character creation, then layered on systems one at a time. The character design went through multiple iterations. I tried chibi-style characters, then a Hollow Knight-inspired look, then something with flowing cloaks. Eventually landed on these small hooded figures that read well at the scale they are rendered. Getting the character art right burned more Watchfire tasks than I would like to admit, but the final result has a nice dark medieval feel to it.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## What I Got

**Character creation is deep.** You pick a name, then customize skin color, hair style and color, body type, eye color, accessories (scars, war paint, eye patches, masks, horns), and outfit color. The preview updates live on the right side. It is a lot of options for a one-day project.

![Character creation with preview](images/screenshot-02.png)

![Customizing a brute named Ragnar](images/screenshot-03.png)

**The hub screen is your home base.** It shows your brute's stats, level, XP bar, equipped weapon, collected pets, learned skills, and all your action buttons. Fight, Training, Inventory, Export, Import, Hall of Fame. There is also a daily challenge prompt right on the hub with a 2x XP bonus for accepting it.

![Character hub](images/screenshot-04.png)

**Opponent selection gives you choices.** You get three opponents to pick from, each showing their level, stats, and equipped gear. The game scales opponents to your level so fights stay competitive.

![Choose your opponent](images/screenshot-05.png)

**Combat is fully animated.** Two characters face off in an arena with pillars, torches, and red banners. Health bars at the top, damage numbers floating up, slash effects on hits. A combat log at the bottom narrates every action. You just hit "Next" to advance through each turn. It is auto-battled but you watch it play out step by step.

![Arena combat](images/screenshot-06.png)

![Throne room battle](images/screenshot-01.png)

**Victory gives you XP and loot.** The results screen shows XP gained with an animated progress bar. Win enough fights and you level up, unlocking stat boosts and new gear.

![Victory screen](images/screenshot-07.png)

**The inventory system is surprisingly robust.** Three tabs for weapons, pets, and skills. Weapons have rarity tiers (common through legendary, color-coded borders). Pets have their own stats. Skills are passive and active abilities you unlock as you collect them. The whole thing feels like a proper RPG inventory.

![Weapons inventory](images/screenshot-09.png)

![Pets collection](images/screenshot-10.png)

![Skills list](images/screenshot-11.png)

**Training mode lets you grind.** Hit the Training button and your brute auto-fights 100 battles. You get a summary screen showing total XP earned, levels gained, wins, and every piece of loot you picked up. It is a nice way to power through the early game without clicking through each fight.

![Training results](images/screenshot-08.png)

**Tournaments run as bracket elimination.** Four rounds, escalating difficulty. The bracket UI shows your progress through each round, your next opponent, and a clear fight button. Win the whole thing and you get premium rewards.

![Tournament bracket](images/screenshot-12.png)

## The Bug Reports

The character redesign iterations were the biggest time sink. The first few character styles looked fine in isolation but did not read well in the arena at combat scale. The final hooded figures work, but it took several rounds of going back and forth to get there. This is one of those cases where AI art direction is harder than it sounds. You can describe what you want, but "make it look good at 80 pixels tall in a dark arena" is a harder prompt than it seems.

Combat balance is rough in the way you would expect from an auto-generated RPG. Some weapon combinations are clearly overpowered, some pets are better than others by a wide margin. But for a game where the whole point is watching random chaos unfold, the imbalance almost adds to the fun.

## The Numbers

- **27 Watchfire tasks** from combat engine to prestige system
- **Multiple character redesigns** trying chibi, Hollow Knight, and flowing cloak styles
- **4 arena environments** including a throne room
- **3 inventory categories** with rarity-tiered loot
- **100 auto-fights** per training session
- **20 replay slots** for rewatching past battles

## Try It

{{/*< github repo="nunocoracao/Vibe30-day15-mybrute" >*/}}

**[Enter the Arena](https://vibe30-day15-mybrute.vercel.app)**

Create a brute, pick a fight, and see how far you can climb.

## Day 15 Verdict

27 tasks is a lot, and the number of interlocking systems (combat, XP, loot, pets, skills, tournaments, dailies, rivals, prestige, replays, achievements) is the kind of thing that would normally take a small team a couple of weeks to wire together. The fact that it all works and is actually fun to play is kind of wild.

The character design journey was the most interesting part. I went through at least four distinct visual styles before landing on one that worked. It is a good reminder that AI-assisted coding handles logic and systems really well, but art direction still requires a human eye and a lot of iteration. You cannot just say "make it look cool" and walk away.

Halfway through. The games keep getting more complex, but the workflow is getting smoother. I know when to push for more features and when to call it done. That instinct might be the most valuable thing I've picked up from this challenge.

---

*This is day 15 of [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Follow along as I ship 30 projects in 30 days using AI-assisted coding.*
