---
title: "30 Days of Vibe Coding - Tag 4 - Tetris"
description: "Ein klassisches Tetris-Spiel mit 3D-gestalteten Blöcken, dem Korobeiniki-Thema, Soundeffekten und allen Funktionen, die man von einem echten Tetris-Klon erwartet."
summary: "Ein klassisches Tetris-Spiel mit 3D-gestalteten Blöcken, dem Korobeiniki-Thema, Soundeffekten und allen Funktionen, die man von einem echten Tetris-Klon erwartet."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-04", "typescript", "nextjs", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 4
seriesOpened: false
date: 2026-04-09
draft: false
#type: "hidden"
---

Tag 4. Jeder kennt Tetris. Das macht es zu einem guten Test. Man weiß genau, wie es sich anfühlen soll – und merkt sofort, wenn etwas nicht stimmt.

## Der Prompt

> „Ich möchte ein webbasiertes Tetris-Spiel mit 3D-gestalteten Blöcken, Musik und Soundeffekten erstellen"

## Wie es gebaut wurde

Dieses Projekt lief wie die anderen durch [Watchfire](https://watchfire.io). Der Paketname im Repo erzählt die Geschichte: `watchfire-0001-initialize-nextjs-project-with`. Es begann mit einem einzigen Prompt, und Watchfire teilte ihn in Aufgaben auf, die Projekt-Setup, Game-State-Management, den Board-Renderer, Piece-Definitionen mit Rotationszuständen, das Audiosystem und die UI-Komponenten abdeckten.

Die gewählte Architektur war React mit Hooks. Drei Custom Hooks übernehmen die Kernlogik: `useGameState` für den Game-Reducer und den Tick-Loop, `useGameMusic` für das Korobeiniki-Thema und `useSoundEffects` für alle In-Game-Audioeffekte. Der Game-State selbst ist ein ordentlicher Reducer mit Aktionen für jeden Zug, jede Rotation, jeden Hard Drop und jede Pause. Wall Kicks, Line Clearing, Level-Progression, Punktestand. Alle Tetris-Grundlagen.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was ich bekommen habe

Dieses Ergebnis hat mich wirklich überrascht.

![3D-Tetris mitten im Spiel](images/screenshot-01.png)

**Die Blöcke haben echte Tiefe.** Jeder Tetromino-Typ hat sein eigenes Farbschema mit einer Hauptfarbe, einem hellen Glanzlicht an den oberen linken Kanten, einem dunklen Schatten an den unteren rechten Kanten und einem Glüheffekt. Das I-Stück ist cyan mit einem sanften blauen Glühen. Das T-Stück ist lila. Das Z-Stück ist rot. Sie sehen aus wie kleine 3D-Bonbonstücke auf einem dunklen Raster. Ich bat um „3D-gestaltete Blöcke" und bekam etwas, das wirklich poliert aussieht.

**Es spielt das Korobeiniki-Thema.** Die echte Tetris-Melodie, in Echtzeit mit der Web Audio API generiert. Keine Audiodateien. Es erstellt Oszillatoren und Gain-Nodes im laufenden Betrieb, spielt eine Rechteckwellen-Melodie mit einer Dreieckswellen-Basslinie und loopt sie nahtlos. Die Musik wird schneller, je höher das Level steigt – von 1,0x auf Level 0 bis 1,5x auf Level 15. Es merkt sich sogar die Stummschaltpräferenz im localStorage.

**Die Soundeffekte sind überraschend gut.** Es gibt 8 verschiedene Soundeffekte: Bewegungsklick, Rotationsrauschen, Landungsaufprall des Steins (mit Noise-Buffer für Aufpralltextur), Line-Clear-Arpeggio, ein spezielles Tetris-Fanfare für vier gleichzeitig gelöschte Reihen, Hard-Drop-Swoosh, ein trauriges absteigendes Game-Over-Arpeggio und ein feierliches Level-Up-Jingle. Alles synthetisiert. Keine Audiodateien irgendwo.

**Es hat alle echten Tetris-Funktionen.** Vorschau auf das nächste Stück, Punktestand mit korrekten Multiplikatoren (100 für eine Reihe, 300 für zwei, 500 für drei, 800 für Tetris), Level-Progression alle 10 Reihen, tatsächlich steigende Geschwindigkeit, Highscore-Persistenz, Pause mit Fortsetzung und ein Game-Over-Bildschirm mit den abschließenden Statistiken im Vergleich zum Highscore.

![Pausiertes Spiel](images/screenshot-02.png)

**Die Steuerung fühlt sich richtig an.** Pfeiltasten oder WASD zum Bewegen, W oder Pfeil hoch zum Drehen im Uhrzeigersinn, Z für gegen den Uhrzeigersinn, Leertaste für Hard Drop, P oder Escape zum Pausieren. Es gibt sogar Wall Kicks, sodass Stücke von den Wänden weggedrückt werden, wenn man nah an den Rändern dreht.

## Die Zahlen

- **22 Quelldateien** über Komponenten, Hooks, Konstanten und Typen
- **~2.000 Zeilen TypeScript**
- **8 verschiedene synthetisierte Soundeffekte** plus einen vollständigen loopenden Soundtrack
- **7 Tetromino-Typen** mit je 4 Rotationszuständen (28 Formdefinitionen)
- **16 Geschwindigkeitsstufen** von 1000ms bis 100ms pro Tick
- **0 Audiodateien** im gesamten Projekt

## Ausprobieren

{{< github repo="nunocoracao/Vibe30-day04-tetris" showThumbnail=true >}}

**[Tetris spielen](https://vibe30-day04-tetris.vercel.app)**

Pfeiltasten oder WASD zum Bewegen, Leertaste für Hard Drop, P zum Pausieren. Funktioniert am besten auf dem Desktop.

## Fazit zu Tag 4

Vier Tage dabei und ich baue klassische Spiele schneller, als ich sie austesten kann. Das ist jetzt der eigentliche Engpass. Nicht das Coden, nicht das Debuggen. Das Playtesting.

Dieser Tetris-Klon macht wirklich Spaß. Die 3D-Blockgestaltung verleiht ihm Persönlichkeit, das Korobeiniki-Thema lässt ihn authentisch wirken, und das Sound-Design fügt jeder Aktion befriedigendes Feedback hinzu. Die Tatsache, dass das gesamte Audio prozedural aus Oszillatoren und Noise-Buffern generiert wird, ist ehrlich gesagt beeindruckend. In diesem gesamten Projekt gibt es keine Audiodateien.

Was mich immer wieder überrascht, ist die Vollständigkeit. Ich bat um Tetris mit 3D-Blöcken und Musik. Ich bekam Wall Kicks, Highscore-Persistenz, Punktemultiplikatoren nach Level, einen Pause-Bildschirm mit einem Farbverlaufsknopf, den im localStorage gespeicherten Stummschaltstatus und ein Game-Over-Panel, das anzeigt, ob man seinen Highscore gebrochen hat. Das sind alles Dinge, nach denen ich irgendwann gefragt hätte – aber ich musste es nicht.

Ist die Wall-Kick-Implementierung so gut wie die offiziellen Tetris-Richtlinien? Wahrscheinlich nicht. Ist das Punktesystem zu 100% authentisch? Nahezu, aber ich habe es nicht gegen die Spezifikation geprüft. Das alles spielt bei einem Ein-Tages-Projekt keine Rolle. Was zählt, ist, dass es funktioniert, es sich gut anfühlt und jemand es jetzt sofort spielen kann.

---

*Dies ist Tag 4 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Begleite mich, während ich 30 Projekte in 30 Tagen mit KI-gestütztem Coding veröffentliche.*
