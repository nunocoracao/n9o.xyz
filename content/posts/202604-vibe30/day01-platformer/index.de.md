---
title: "30 Tage Vibe Coding - Tag 1 - Platformer"
description: "Ein browserbasiertes Platformer-Spiel mit 10 Levels, gebaut mit Vanilla JavaScript und HTML5 Canvas."
summary: "Ein browserbasiertes Platformer-Spiel mit 10 Levels, gebaut mit Vanilla JavaScript und HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-01", "javascript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 1
seriesOpened: false
date: 2026-04-06
draft: false
#type: "hidden"
---

Tag 1. Mal sehen, was passiert, wenn ich einer KI sage, sie soll mir ein Spiel bauen.

## Der Prompt

Ich startete mit folgendem:

> "Ich möchte einen webbasierten Platformer mit 10 Levels erstellen"

Das war es. Das war die gesamte kreative Vorgabe.

## Wie es gebaut wurde

Dies war eines der ersten Projekte, für die ich [Watchfire](https://watchfire.io) verwendet habe. Ich gab ihm den einzelnen Prompt und es zerlegte die Arbeit in 21 separate Aufgaben:

1. Projekt-Setup und Spielfeld-Canvas
2. Game-Engine-Kern mit Game-Loop und Rendering
3. Spielercharakter mit Bewegung und Animationen
4. Physik und Kollisionserkennung
5. Plattform- und Hindernissystem
6. Level-System mit Loader und Kamera
7. Einfache Levels (1-3)
8. Mittlere Levels (4-6) mit Gefahren
9. Schwere Levels (7-10)
10. UI/HUD-System
11. Spielzustände und Menüs
12. Audiosystem mit 8-Bit-Soundeffekten und Musik
13. Feinschliff, Speichersystem, Touch-Steuerung

Dann kamen die Fehlerberichte: Browser-Kompatibilitätsbehebung, Umstrukturierung für den Deployment und mehrere Gameplay-Bugs, die ich beim Testen entdeckt habe.

Ich saß nicht da und genehmigte jede einzelne Dateiänderung. Watchfire reihte die Aufgaben auf und arbeitete sie durch. Ich kam zu einem funktionierenden Spiel zurück und testete es dann.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was ich bekommen habe

Das hatte ich nicht erwartet.

![Hauptmenü](images/screenshot-01.webp)

**Es hat echte Grafiken.** Keine Platzhalter-Rechtecke. Es gibt einen kleinen Charakter mit Augen, Plattformen in verschiedenen Farben, Partikeleffekte beim Landen. Das Ganze hat einen einheitlichen visuellen Stil, den ich definitiv nicht vorgegeben habe.

**Es hat Musik.** 8-Bit-Hintergrundmusik, die während des Spielens in einer Schleife läuft. Ich habe nie nach Audio gefragt. Es wurde einfach hinzugefügt.

![Level-1-Gameplay](images/screenshot-02.webp)

**Die Levels werden tatsächlich schwieriger.** Level 1 ist ein sanftes Tutorial namens "First Steps." Ab Level 4 gibt es Stacheln ("Danger Ahead"). Level 7 heißt "Speed Demon." Die Schwierigkeitskurve existiert und ergibt Sinn.

![Level 4 mit Gefahren](images/screenshot-05.webp)

**Es gibt ein vollständiges Menüsystem.** Hauptmenü, Level-Auswahl, Pause-Bildschirm, Game-Over-Bildschirm, Level-abgeschlossen-Bildschirm. Ich kann jedes Level auswählen, das ich freigeschaltet habe. Das ist weit polierter als das, was ich verlangt habe.

![Level-Auswahl](images/screenshot-06.webp)

**Es speichert meinen Fortschritt.** Browser schließen, später zurückkommen, meine freigeschalteten Levels sind noch da. localStorage-Persistenz, um die ich nicht gebeten habe.

**18 Module.** GameEngine, Player, Physics, Camera, LevelLoader, LevelManager, ParticleSystem, AudioManager, SaveManager, TouchControls... es baute eine ordentliche Architektur mit Trennung der Verantwortlichkeiten. Jedes Modul hat eine klare Zuständigkeit. Das hatte ich alles nicht vorgegeben.

## Die Fehlerberichte

Beim ersten Versuch war es nicht perfekt. Ich musste das Spiel testen und Probleme melden:

- "Ich sehe nur ein blaues Rechteck" (Browser-Kompatibilität, brauchte ein roundRect-Polyfill)
- "Das Level endet nicht, wenn ich die Flagge erreiche"
- "Der Spieler bewegt sich weiter nach rechts, wenn ich das nächste Level starte"
- "Die Level-Auswahl lädt immer Level 1"
- "Die Musik ist zu repetitiv"

Einfache Beschreibungen. Ich habe selbst nichts debuggt, sondern nur beschrieben, was ich sah. Die Korrekturen kamen zurück und funktionierten.

![Level 7](images/screenshot-07.webp)

![Game Over](images/screenshot-08.webp)

## Die Zahlen

- **18 Spielmodule** mit klarer Trennung der Verantwortlichkeiten
- **10 Levels** mit JSON-basierten Level-Definitionen
- **~3.500 Zeilen Vanilla JavaScript** (kein Framework für das Spiel selbst)
- **21 Watchfire-Aufgaben** vom ersten Setup bis zur letzten Fehlerbehebung
- **Gesamte aktive Zeit:** vielleicht 30 Minuten Playtesting und Fehlerberichte schreiben

## Ausprobieren

{{< github repo="nunocoracao/Vibe30-day01-ThePlatformer" showThumbnail=true >}}

**[Platformer spielen](https://vibe30-day01-the-platformer.vercel.app)**

Pfeiltasten oder WASD zum Bewegen, Leertaste zum Springen. Funktioniert auch auf Mobilgeräten.

## Fazit zu Tag 1

Ein Satz als Prompt. Ein vollständiges Spiel mit 10 Levels, Musik, Menüs und einem Speichersystem.

Das ist der Punkt: Ich habe seit über einem Jahrzehnt keine Game-Engine mehr geschrieben — nicht seit der Uni. Ich hatte alles über Kollisionserkennung und Level-Progressionssysteme vergessen. Ich hätte das nicht selbst bauen können. Nicht an einem Tag, wahrscheinlich auch nicht in einer Woche.

Ist das der beste Platformer aller Zeiten? Nicht mal annähernd. Aber er existiert. Er funktioniert. Menschen können ihn spielen. Und es hat mich ein paar Stunden statt Wochen gekostet. Das hat sich verändert. Die Kosten für die Erstellung von etwas so Komplexem sind gerade dramatisch gesunken. Und wenn ich wollte, könnte ich ihn weiter verfeinern, Levels hinzufügen, die Physik verbessern. Der Ausgangspunkt ist nicht mehr eine leere Datei.

Ich glaube, das wird ein Muster bei allen 30 Projekten sein. Ich werde nicht die beste Version von irgendetwas bauen. Aber ich werde eine funktionierende Version von Dingen bauen, die ich vorher nicht hätte bauen können, und ich werde es schnell tun.

---

*Dies ist Tag 1 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Begleite mich, während ich mit KI-unterstütztem Coding 30 Projekte in 30 Tagen veröffentliche.*
