---
title: "30 Tage Vibe Coding - Tag 10 - Miro-Klon"
description: "Ein local-first Infinite-Canvas-Whiteboard mit Formen, Haftnotizen, Verbindern, Ebenen und Präsentationsmodus."
summary: "Ein local-first Infinite-Canvas-Whiteboard mit Formen, Haftnotizen, Verbindern, Ebenen und Präsentationsmodus."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-10", "typescript", "canvas", "whiteboard"]
series: ["30 Days of Vibe Coding"]
series_order: 10
seriesOpened: false
date: 2026-04-15
draft: false
---

Tag 10. Ich habe nach einem Miro-Klon gefragt. Ein vollständiges Infinite-Canvas mit Formen, Verbindern, Ebenen und einem Präsentationsmodus.

## Der Prompt

> "Bau eine Whiteboard-App mit unendlichem Canvas wie Miro. Local-first, TypeScript, HTML5 Canvas."

Das war der Ausgangspunkt. Alles andere kam aus dem Task-Breakdown.

## Wie Es Gebaut Wurde

Dieses hier war groß. Watchfire hat es in 27 Tasks aufgeteilt, das ist das Maximum, was ich bisher in dieser Challenge gesehen habe. Das Breakdown deckte ab:

1. Formen und Zeichenwerkzeuge (Rechtecke, Ellipsen, Linien, Pfeile)
2. Freihand-Stift-Werkzeug
3. Textelemente
4. Haftnotizen mit Farbcodierung
5. Intelligente Verbinder zwischen Formen
6. Raster und Snap-to-Grid
7. Undo/Redo-Verlauf
8. Export nach PNG und JSON
9. Ebenen-Panel
10. Farbwähler
11. Zoom- und Pan-Steuerung
12. Tastenkürzel für alles
13. Dark Mode
14. Willkommensbildschirm mit Onboarding
15. Präsentationsmodus

27 Tasks sind eine Menge. Aber sie waren gut abgegrenzt. Jeder hat ein spezifisches Stück Funktionalität hinzugefügt, ohne das Vorherige zu zerbrechen.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

Das Ding ist überraschend umfangreich.

![Hauptcanvas mit Haftnotizen und Verbindern](images/screenshot-01.png)

**Es fühlt sich an wie ein echtes Whiteboard-Tool.** Du öffnest es und da ist ein unendlicher Canvas mit einem Punktraster. Du kannst pannen, rein- und rauszoomen, Formen droppen, Text schreiben, Dinge mit Pfeilen verbinden. Die Basis-Whiteboard-Schleife funktioniert einfach.

![Willkommensbildschirm mit Shortcuts](images/screenshot-02.png)

**Es gibt einen richtigen Willkommensbildschirm.** Er zeigt dir die Tastenkürzel und wie du anfängst. Du kannst ihn schließen und eine Box abhaken, damit er nicht wieder erscheint. Kleine Geste, aber sie lässt die App fertig wirken.

![Formen und Verbinder](images/screenshot-04.png)

**Die Verbinder sind intelligent.** Du ziehst eine Linie zwischen zwei Formen und sie snapped an Verbindungspunkte. Verschiebst du eine Form, folgt der Verbinder. Das ist die Art Feature, die eine Zeichen-App von einem Diagramming-Tool unterscheidet.

![Ebenen-Panel](images/screenshot-06.png)

**Das Ebenen-Panel funktioniert wirklich.** Jedes Element taucht in einer Seitenleisten-Liste auf. Du siehst die Hierarchie, kannst Dinge umsortieren und verwalten, was oben auf was liegt. Wie ein Mini-Figma-Ebenen-Panel.

![Overlay der Tastenkürzel](images/screenshot-05.png)

**Tastenkürzel für alles.** V zum Auswählen, R für Rechteck, O für Ellipse, P für Stift, T für Text, S für Haftnotiz. Plus das ganze Standardzeug wie Cmd+Z für Undo, Cmd+Shift+Z für Redo. Es gibt ein komplettes Shortcut-Overlay, das du mit ? aufrufen kannst.

![Freihand-Zeichnung](images/screenshot-07.png)

**Das Stift-Werkzeug ist smooth.** Ich habe ein Gesicht gezeichnet, nur zum Testen. Die Striche fühlen sich responsiv und natürlich an. Nicht drucksensitiv oder irgendwas Ausgefallenes, aber gut genug, um Ideen bei einem Brainstorm zu skizzieren.

## Die Bug Reports

Dieses hier war relativ sauber. Bei 27 Tasks hätte ich mehr Probleme erwartet, aber der inkrementelle Ansatz bedeutete, dass jedes Stück getestet wurde, bevor das nächste dazukam. Die Hauptsachen, die mir aufgefallen sind:

- Haftnotizen überlappten sich manchmal mit Text, wenn man sie zu klein skalierte
- Die Minimap in der Ecke konnte nach heftigem Zoomen aus dem Sync laufen
- Der PNG-Export schnitt gelegentlich Elemente an den Canvas-Rändern ab

Nichts Gravierendes. Die Kern-Whiteboard-Erfahrung war von früh an solide.

## Die Zahlen

- **27 Watchfire-Tasks** vom Canvas-Setup bis zum Präsentationsmodus
- **TypeScript + Vite** mit HTML5-Canvas-Rendering
- **Komplette Tool-Suite:** Auswahl, Pan, Rechteck, Ellipse, Linie, Pfeil, Verbinder, Stift, Text, Haftnotiz
- **Dark Mode, Ebenen, Export, Tastenkürzel, Präsentationsmodus**
- **Null externe UI-Bibliotheken.** Alles ist individuell auf Canvas gebaut

## Probier's Aus

{{< github repo="nunocoracao/Vibe30-day10-miroclone" showThumbnail=true >}}

**[Whiteboard öffnen](https://vibe30-day10-miroclone.vercel.app)**

Funktioniert am besten auf dem Desktop. Nutze die Tastenkürzel für das volle Erlebnis.

## Fazit Tag 10

Ein unendlicher Canvas mit Pan und Zoom, mehreren Form-Werkzeugen, Freihandzeichnen, intelligenten Verbindern, einem Ebenensystem, Undo/Redo, Export, Dark Mode und Präsentationsmodus. Das ist eine Menge Features für einen Tag.

Was herausragt, ist die Architektur. Die Codebase ist in saubere Module für Input-Handling, Rendering, State Management, Tools und UI aufgeteilt. Jedes Tool ist sein eigenes Modul. Das State Management kümmert sich um den Verlauf für Undo/Redo. Es ist kein zusammengeschusterter Prototyp, sondern eine ordentlich strukturierte App.

Könnte es Miro ersetzen? Nein. Es gibt keine Kollaboration, keine Echtzeit-Synchronisation, keinen Cloud-Speicher. Aber als local-first Skizzen- und Diagramming-Tool? Es ist überraschend nutzbar. Ich habe mich dabei erwischt, wie ich tatsächlich Ideen darauf ausgebreitet habe, statt es nur zu testen.

Ein Drittel der Challenge geschafft. Der Umfang dessen, was in einen einzigen Tag passt, wächst weiter.

---

*Dies ist Tag 10 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Verfolge, wie ich 30 Projekte in 30 Tagen mit KI-gestütztem Coding ausliefere.*
