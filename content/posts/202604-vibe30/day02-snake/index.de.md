---
title: "30 Days of Vibe Coding - Tag 2 - Snake"
description: "Ein Snake-Spiel im Nokia-3310-Stil mit authentischer LCD-Grafik, Retro-Soundeffekten und einem vollständigen Telefonrahmen."
summary: "Ein Snake-Spiel im Nokia-3310-Stil mit authentischer LCD-Grafik, Retro-Soundeffekten und einem vollständigen Telefonrahmen."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-02", "typescript", "react", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 2
seriesOpened: false
date: 2026-04-07
draft: false
---

Tag 2. Ich wollte etwas Nostalgisches.

## Der Prompt

Ich habe mich für Folgendes entschieden:

> „Baue ein Snake-Spiel im Stil des Nokia 3310. LCD-Grünbildschirm, Pixelblöcke, das ganze Programm. Steck es in einen Telefonrahmen."

Das war so ziemlich das gesamte Briefing. Ich hatte eine klare visuelle Vorstellung, gab aber keinerlei Implementierungsdetails vor.

## Wie es gebaut wurde

[Watchfire](https://watchfire.io) nahm diesen Prompt und zerlegte ihn in Aufgaben, die die Spielengine, das Nokia-Visual-Styling, Soundeffekte, mobile Steuerung und die Telefonrahmen-UI abdeckten. Die Spiellogik, das LCD-Rendering, die Siebensegment-Punkteanzeige – alles entstand aus diesem einzigen Prompt.

Ich saß nicht dabei und lenkte jede Entscheidung. Ich beschrieb das Feeling, das ich wollte, und kam zu etwas Spielbarem zurück.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was ich bekommen habe

Dieses hier hat mich überrascht, wie weit es beim Äußeren gegangen ist.

![Startbildschirm mit Nokia-Telefonrahmen](images/screenshot-01.png)

**Es hat ein komplettes Telefon gebaut.** Nicht nur eine Spielfläche. Einen vollständigen Nokia-3310-Rahmen mit Lautsprechergitter, NOKIA-Branding, einem D-Pad, Aktionstasten und einer Bildschirmblende mit Tiefe. Der Telefonkörper hat Farbverläufe und Schatten, die ihn dreidimensional wirken lassen. Ich bat um einen Telefonrahmen. Ich bekam ein Telefon.

![Gameplay mit LCD-Raster](images/screenshot-02.png)

**Der LCD-Bildschirm ist authentisch.** Das klassische Nokia-Grün (#9bbc0f für alle Neugierigen), mit einem sichtbaren Pixelraster, Scan-Line-Overlay und einem Bildschirmspiegelungseffekt in der Ecke. Jede Zelle im Raster hat einen leichten Abstand, um tatsächliche LCD-Segmente zu simulieren. Der Schlangenkopf hat sogar kleine Pixelaugen.

**Es hat eine Siebensegment-Punkteanzeige.** Nicht nur eine Zahl auf dem Bildschirm. Eine tatsächlich SVG-gerenderte Siebensegment-LCD-Anzeige außerhalb des Spielbildschirms, wie die Sekundäranzeige auf dem Telefon. Punktestand und Highscore, beide korrekt mit inaktivem Segment-Ghosting gerendert.

![Wachsende Schlange mitten im Spiel](images/screenshot-03.png)

**Das Futter pulsiert.** Es gibt eine Sinuswellenanimation auf dem Futterblock, der ihn sanft pochen lässt. Die Schlange beschleunigt jedes Mal, wenn sie frisst. Es beginnt bei 150 ms pro Tick und rampt auf ein Minimum von 50 ms herunter. Die Schwierigkeitskurve ist in die Spielschleife eingebaut, nicht fest pro Level kodiert.

**Retro-Soundeffekte.** Rechteckwellen-Oszillator-Sounds, die über die Web Audio API erzeugt werden. Aufsteigende Töne beim Start, ein fröhliches Zwitschern beim Fressen, absteigende traurige Töne beim Game Over. Alles zur Laufzeit synthetisiert, keine Audiodateien erforderlich. Es speichert sogar die Stummschaltpräferenz in localStorage.

![Game-Over-Bildschirm mit Highscore](images/screenshot-04.png)

**Highscore-Persistenz.** Es speichert den besten Punktestand in localStorage und zeigt eine „NEW HIGH SCORE!"-Nachricht mit einer Pulsanimation, wenn man ihn übertrifft. Der Game-Over-Bildschirm hat ein Pixel-Art-Totenkopfsymbol, das aus einem CSS-Raster aufgebaut ist.

**Mobile Steuerung.** Auf Touch-Geräten rendert es ein D-Pad mit einem Pause-Button in der Mitte. Auf dem Desktop zeigt es dekorative Tasten, die zur Telefonästhetik passen. Es erkennt den Gerätetyp und passt sich an. Es gibt auch Wischgesten als Fallback.

**Umschaltbarer Telefonrahmen.** Man kann zwischen dem vollständigen Nokia-Telefonrahmen und einer minimalen Ansicht mit nur dem Spielbildschirm wechseln. Die Präferenz bleibt in localStorage erhalten.

## Die Zahlen

- **8 Quellmodule** (GameBoard, StartScreen, GameOverScreen, PauseOverlay, ScoreDisplay, useSnakeGame, useSound sowie das Seitenlayout)
- **~2.100 Zeilen TypeScript und React**
- **Keine externen Spielbibliotheken** (nur Next.js und React, die Spiellogik besteht ausschließlich aus Custom-Hooks und Canvas)
- **5 synthetisierte Soundeffekte** über die Web Audio API
- **Gesamte Hands-on-Zeit:** vielleicht 20 Minuten Spielen und Anpassen des Prompts

## Ausprobieren

{{< github repo="nunocoracao/Vibe30-day02-Snake" showThumbnail=true >}}

**[Snake II spielen](https://vibe30-day02-snake.vercel.app)**

Pfeiltasten oder WASD zum Bewegen, Leertaste zum Pausieren. Funktioniert auf Mobilgeräten mit D-Pad-Steuerung.

## Tag-2-Fazit

Ich bat um ein Snake-Spiel in einem Nokia-Rahmen. Ich bekam eine vollständige Telefonsimulation mit synthetisiertem Audio, Siebensegment-Anzeigen, LCD-Scan-Line-Effekten und localStorage-Persistenz für Punkte, Tonpräferenzen und Rahmensichtbarkeit.

Was auffällt, ist, wie viel Arbeit in Details geflossen ist, um die ich nie gebeten habe. Der Bildschirmspiegelungseffekt. Die Lautsprechergitterpunkte. Die Pulsanimation beim Futter. Der Pixel-Art-Totenkopf auf dem Game-Over-Bildschirm. Das sind Verfeinerungsentscheidungen, deren manuelle Umsetzung Stunden dauern würde – und sie tauchten kostenlos auf.

Hätte ich Snake selbst bauen können? Wahrscheinlich, wenn ich genug Zeit gehabt hätte. Aber ich hätte ein grünes Quadrat auf einem Raster mit einem Punktezähler gemacht. Ich hätte keinen Nokia-3310-Simulator mit synthetisiertem Chiptune-Audio und responsiver mobiler Steuerung gebaut. Die Lücke zwischen dem, was ich gebaut hätte, und dem, was ich bekommen habe, ist der ganze Sinn dieser Challenge.

Zwei Tage rein, zwei Spiele ausgeliefert. Das Muster von Tag 1 hält: Der Ausgangspunkt ist nicht mehr eine leere Datei, und der Endpunkt liegt weit über dem, was ich alleine angestrebt hätte.

---

*Dies ist Tag 2 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Begleite mich, während ich in 30 Tagen 30 Projekte mit KI-gestütztem Coding ausliefere.*
