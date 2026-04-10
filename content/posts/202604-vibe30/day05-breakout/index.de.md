---
title: "30 Days of Vibe Coding - Tag 5 - Breakout"
description: "Ein klassisches Breakout-Arcade-Spiel mit 5 Levels, Power-ups, Combo-Wertungssystem und Partikeleffekten, entwickelt mit TypeScript und HTML5 Canvas."
summary: "Ein klassisches Breakout-Arcade-Spiel mit 5 Levels, Power-ups, Combo-Wertungssystem und Partikeleffekten, entwickelt mit TypeScript und HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-05", "typescript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 5
seriesOpened: true
date: 2026-04-10
draft: false
---

Tag 5. Noch ein Arcade-Klassiker. Diesmal wollte ich sehen, was passiert, wenn ich nach Breakout frage.

## Der Prompt

> "Ich möchte ein Breakout/Arkanoid-ähnliches Arcade-Spiel erstellen mit mehreren Levels, Power-ups, Combo-Wertungssystem und flüssiger Physik."

Etwas präziser als einige meiner früheren Prompts. An Tag 5 hatte ich gelernt, dass etwas mehr Bedachtheit bei den gewünschten Features von Anfang an mich davor bewahrt, später Fehlerberichte einreichen zu müssen.

## Wie es gebaut wurde

Ich habe wieder [Watchfire](https://watchfire.io) verwendet. Das erkennt man an der package.json, die automatisch mit dem Präfix `watchfire-0000` benannt wird. Ich habe den Prompt eingegeben und den Rest hat Watchfire übernommen. Das gesamte Spiel lebt in einer einzigen React-Komponente, die ein HTML5 Canvas umschließt – ein Muster, das mir bei diesen täglichen Builds schon ein paarmal begegnet ist. Nicht die sauberste Architektur, aber es funktioniert und man kann es ausliefern.

Der Tech-Stack ist Next.js mit TypeScript und Tailwind CSS. Das Spielrendering basiert vollständig auf Canvas, während React die Overlay-UI für Menüs und Pausenbildschirme übernimmt.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was dabei herauskam

Ein vollständig spielbarer Breakout-Klon mit deutlich mehr Politur als erwartet.

![Level 1-Start mit vollem Ziegelraster](images/screenshot-01.png)

**Fünf Levels mit einzigartigen Mustern.** "The Beginning" ist ein klassisches volles Raster. "Diamond Formation" ordnet Ziegel in einer Rautenform an. "Fortress" baut Wände mit Lücken. "Waves" wechselt zwischen Reihen ab. "Final Challenge" ist ein dichtes Schichtmuster. Mit jedem Level steigt der Geschwindigkeitsmultiplikator des Balls, von 1,0x bis auf 1,5x.

![Spielmitte mit Ballspur und brechenden Ziegeln](images/screenshot-02.png)

**Power-ups machen tatsächlich einen Unterschied.** Vier Typen fallen von zerstörten Ziegeln: breites Paddel (10 Sekunden), langsamer Ball (8 Sekunden), Multi-Ball (teilt sich in mehrere Bälle auf, bis man sie verliert) und ein Extra-Leben (sofort). Spezielle "Super"-Ziegel haben eine doppelt so hohe Abwurfchance. Die Power-ups schweben als leuchtende Kugeln herab und werden mit dem Paddel aufgefangen.

![Ziegel räumen mit aktiven Power-ups](images/screenshot-03.png)

**Das Combo-System sorgt für mehr Tiefe.** Aufeinanderfolgende Treffer bauen einen Punktemultiplikator bis zu 3x auf. Die Combo verfällt nach 2 Sekunden ohne Treffer – man wird also angehalten, den Ball schnell zu halten und Ziegel in rascher Folge zu treffen. Eine Kleinigkeit, aber sie verändert die Spielweise.

![Fortgeschrittenes Level mit spärlichem Ziegellayout](images/screenshot-04.png)

**Visuelle Effekte überall.** Partikelexplosionen, wenn Ziegel brechen. Ein Ballspur-Effekt. Bildschirmerschütterung bei bestimmten Treffern. Blitzeffekte. Ein funkelnder Sternenhintergrund. Ziegel haben ein Neon-Farbverlaufsschema mit leuchtend pinken, orangen, gelben, grünen und türkisfarbenen Reihen. Nichts davon war für ein Breakout-Spiel zwingend notwendig, aber es lässt das Ganze lebendig wirken.

![Level 2 mit Rautenformation](images/screenshot-05.png)

**Drei Ziegeltypen.** Normale Ziegel brechen mit einem Treffer. Starke Ziegel benötigen mehrere Treffer (sie haben einen sichtbaren Lebenspunkte-Anzeiger). Super-Ziegel sind noch zäher und haben eine höhere Power-up-Abwurfchance. Die Level-Muster kombinieren diese Typen, um unterschiedliche Herausforderungen zu schaffen.

## Die Fehlerberichte

Ehrlich gesagt war dieser Build ziemlich sauber. Die Physik fühlte sich von Anfang an richtig an, die Paddelbewegung war flüssig – sowohl mit Maus als auch mit Tastatur –, und die Levels wurden korrekt geladen. Keine nennenswerten Fehler bei diesem Build.

## Die Zahlen

- **5 Levels** mit einzigartigen Ziegelmustern und steigendem Schwierigkeitsgrad
- **4 Power-up-Typen** mit zeitlich begrenzter Wirkdauer
- **~2.300 Zeilen TypeScript** in einer einzigen Spielkomponente
- **3 Ziegeltypen** (normal, stark, super)
- **3 Steuerungsmethoden:** Tastatur, Maus und Touch

## Ausprobieren

{{< github repo="nunocoracao/Vibe30-day05-breakout" showThumbnail=true >}}

**[Breakout spielen](https://vibe30-day05-breakout.vercel.app)**

Maus oder Pfeiltasten zum Bewegen des Paddels. Leertaste oder Klick zum Abschießen des Balls. P oder Escape zum Pausieren.

## Das Urteil zu Tag 5

Fünf Tage dabei und ich erkenne ein Muster. Diese Canvas-basierten Spiele sind ein idealer Bereich für KI-gestütztes Programmieren. Der Umfang ist klar, die Regeln sind klar definiert, und es gibt eine unmittelbare Möglichkeit zu testen, ob es funktioniert: Man spielt es einfach.

Was mich hier überraschte, war das Partikelsystem und die visuelle Politur. Ich hatte nicht nach Bildschirmerschütterung, Ballspuren oder einem Sternenhintergrund gefragt. Die KI entschied einfach, dass das Spiel sich mit diesen Elementen besser anfühlen würde – und sie hatte recht. Das Combo-System war ebenfalls eine nette Ergänzung. Es verwandelt ein einfaches "Ball abprallen, Ziegel brechen"-Spiel in etwas, bei dem man tatsächlich über Winkel und Timing nachdenkt.

Wird es mit dem echten Arkanoid konkurrieren? Nein. Aber es ist ein vollständiges Spiel mit mehreren Levels, Power-ups und einem Punktesystem, das einen tatsächlich dazu bringt, Levels zu wiederholen. An einem Tag gebaut, aus einem einzigen Prompt.

---

*Dies ist Tag 5 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Begleite mich, während ich 30 Projekte in 30 Tagen mit KI-gestütztem Programmieren veröffentliche.*
