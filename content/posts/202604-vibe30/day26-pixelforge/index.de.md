---
title: "30 Tage Vibe Coding - Tag 26 - PixelForge"
description: "Eine kollaborative Pixel-Art-Leinwand mit Echtzeit-Zeichnen, mehreren Rastergrößen und einem kompletten Set an kreativen Werkzeugen."
summary: "Eine kollaborative Pixel-Art-Leinwand mit Echtzeit-Zeichnen, mehreren Rastergrößen und einem kompletten Set an kreativen Werkzeugen."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-26", "pixel-art", "firebase", "collaboration"]
series: ["30 Days of Vibe Coding"]
series_order: 26
seriesOpened: false
date: 2026-05-01
draft: false
#type: "hidden"
---

Tag 26. Ich wollte etwas Kollaboratives bauen, etwas, wo Leute tatsächlich zusammen in Echtzeit kreieren können. Also habe ich mich für eine Pixel-Art-Leinwand entschieden.

## Der Prompt

Der Ausgangspunkt war einfach:

> "Baue eine kollaborative Pixel-Art-Leinwand, auf der mehrere Nutzer in Echtzeit zusammen zeichnen können."

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day26-pixelforge.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

[Watchfire](https://watchfire.io) hat das in 13 Aufgaben aufgeteilt, was ziemlich viel für ein Eintages-Projekt ist. Aber Pixel-Art-Editoren haben eine überraschende Anzahl an beweglichen Teilen, sobald man anfängt, über all die Werkzeuge nachzudenken, die die Leute erwarten.

Die ersten Aufgaben deckten das Fundament ab: die Leinwand mit Firebase Realtime Database für die Synchronisation einrichten, wählbare Rastergrößen (16x16, 32x32, 64x64) hinzufügen und eine 32-Farben-Palette mit einem benutzerdefinierten Farbwähler bauen. Von dort verzweigte es sich in die eigentlichen Zeichenwerkzeuge: Stift, Radierer und Flutfüllung.

Und dann ging es einfach weiter. Rückgängig/Wiederherstellen-Unterstützung. Ein Symmetriemodus zum Erstellen gespiegelter Designs. Formwerkzeuge für Rechtecke und Linien. Einstellbare Pinselgrößen. Leinwand-Vorlagen, damit man nicht jedes Mal bei Null anfangen muss. Eine Timelapse-Wiedergabefunktion, die zeigt, wie die Leinwand gezeichnet wurde. Ein Aktivitäts-Feed, der zeigt, was andere Nutzer gerade machen. Ein Auswahlwerkzeug zum Verschieben und Kopieren von Bereichen. Ein 2-Ebenen-System mit Vordergrund- und Hintergrundebenen. Und schließlich Exportoptionen, um die Kunst als PNG in verschiedenen Größen herauszubekommen.

Dreizehn Aufgaben. Das ist eine vollwertige Zeichenanwendung.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

![PixelForge-Startseite mit Vorlagen und kürzlichen Leinwänden](images/screenshot-01.png)

Die Startseite hat direkt den Ton gesetzt. Sie zeigt Startvorlagen (Herz, Schwert, Smiley, Baum) und eine Galerie kürzlich erstellter Leinwände von anderen Nutzern. Man kann in jede davon einsteigen oder eine neue von Grund auf erstellen.

![Leinwand-Editor mit Werkzeugleiste und Ebenen-Panel](images/screenshot-02.png)

Oben hat man die komplette Werkzeugleiste: Stift, Radierer, Füllung, Linie, Rechteck, Kreis und Auswahlwerkzeuge. Links ist die erweiterte Farbpalette mit dem benutzerdefinierten Wähler. Rechts ist das Ebenen-Panel mit Vordergrund- und Hintergrundebenen, jeweils mit Sichtbarkeitssteuerungen.

![Pixel Art wird auf der Leinwand gezeichnet](images/screenshot-03.png)

Das Zeichnen fühlt sich reaktionsschnell an. Jeder Pixel-Klick wird über Firebase synchronisiert, sodass jeder mit der gleichen Leinwand-URL die Änderungen sofort sieht. Die Rasterlinien helfen dabei, präzise zu bleiben, und die Zoomstufe passt sich gut an verschiedene Rastergrößen an.

![Timelapse-Wiedergabe](images/screenshot-04.png)

Die Timelapse-Funktion ist eines dieser Dinge, von denen ich nicht erwartet hatte, dass sie so gut funktionieren. Sie zeichnet jede Pixelplatzierung auf und kann den gesamten Zeichenprozess von Anfang bis Ende wiedergeben. Man bekommt Wiedergabesteuerungen und Geschwindigkeitsoptionen.

![Timelapse in Aktion mit einer bunten Leinwand](images/screenshot-05.png)

Ein komplexes Stück Pixel für Pixel entstehen zu sehen, ist seltsam befriedigend. Es dient auch als nette Möglichkeit zu sehen, wie andere Leute an ihre Zeichnungen herangehen.

![Exportdialog mit Format- und Größenoptionen](images/screenshot-06.png)

Der Exportdialog bietet echte Optionen. Man kann einen transparenten Hintergrund einstellen, zwischen mehreren Ausgabegrößen (1x, 2x, 4x, 8x) wählen und als PNG, SVG exportieren oder direkt in die Zwischenablage kopieren. Für ein Pixel-Art-Tool ist das eingebaute Hochskalieren wichtig, da niemand ein 16x16-PNG in Originalgröße möchte.

![Herzvorlage mit Schattierung gezeichnet](images/screenshot-07.png)

Die Vorlagen sind eine nette Sache. Diese Herzvorlage kommt vorgeladen, sodass man sofort mit Details und Schattierung anfangen kann, anstatt den Umriss von Grund auf zu zeichnen. Das 2-Ebenen-System bedeutet, dass man die Vorlage auf der Hintergrundebene behalten und auf dem Vordergrund malen kann, ohne sich Sorgen zu machen, die Grundform zu ruinieren.

![Galerie kürzlicher Leinwände](images/screenshot-09.png)

Der Bereich mit kürzlichen Leinwänden auf der Startseite funktioniert wie eine Community-Galerie. Man kann sehen, was andere gemacht haben, und jede Leinwand zeigt ihre Rastergröße. Herzen, Gesichter, Schwerter, Bäume... die Leute gravitieren natürlich zu den gleichen Arten von Pixel-Art-Motiven.

## Die Bug-Reports

Die Hauptprobleme, auf die ich beim Testen gestoßen bin:

- Die Flutfüllung auf größeren Rastern (64x64) konnte sich träge anfühlen, wenn jeder geänderte Pixel einzeln synchronisiert wurde. Es brauchte gebündelte Updates.
- Der Symmetriemodus hat bei geraden Rastergrößen anfangs nicht immer korrekt ausgerichtet.
- Das Touch-Zeichnen auf dem Handy brauchte etwas Arbeit, um zu verhindern, dass die Seite scrollt, während man versucht zu zeichnen.
- Der Ebenenwechsel war visuell nicht immer offensichtlich, sodass man leicht auf der falschen Ebene zeichnen konnte, ohne es zu merken.

## Die Zahlen

- **13 Watchfire-Aufgaben** von der ersten Leinwand bis zu den Exportoptionen
- **3 Rastergrößen** mit Echtzeit-Synchronisation bei allen
- **32-Farben-Palette** plus benutzerdefinierter Farbwähler
- **8 Zeichenwerkzeuge** einschließlich Formen und Auswahl
- **2-Ebenen-System** mit unabhängiger Sichtbarkeit
- **Firebase Realtime Database** für die gesamte Kollaboration

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day26-pixelforge" showThumbnail=true >}}

**[Probier PixelForge aus](https://vibe30-day26-pixelforge.vercel.app)**

Erstelle eine Leinwand und teile den Link. Jeder mit der URL kann mit dir zeichnen.

## Fazit Tag 26

Eine Pixel-Art-Leinwand klingt einfach, aber sobald man Ebenen, Symmetrie, Vorlagen, Timelapse und Echtzeit-Kollaboration hinzufügt, schaut man auf ein legitimes kreatives Werkzeug.

Die Firebase-Integration ist das Herzstück des Ganzen. Jede Pixeländerung geht durch die Realtime Database, was bedeutet, dass mehrere Leute wirklich gleichzeitig auf der gleichen Leinwand zeichnen können. Kein Polling, kein Refresh-Button, nur Live-Updates. Alle 13 Aufgaben fügten sich aus einem einzigen Prompt zu etwas Zusammenhängendem zusammen.

Wird es Aseprite oder Piskel ersetzen? Nein. Aber für schnelle kollaborative Pixel-Art-Sessions erledigt es den Job. Und allein die Timelapse-Wiedergabe macht es einen Versuch wert. Es gibt etwas wirklich Spaßiges daran, ein leeres Raster sich Pixel für Pixel in Kunst verwandeln zu sehen.

---

*Das ist Tag 26 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mit, während ich 30 Projekte in 30 Tagen mit KI-unterstütztem Coding veröffentliche.*
