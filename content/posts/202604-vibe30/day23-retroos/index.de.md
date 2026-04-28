---
title: "30 Days of Vibe Coding - Tag 23 - RetroOS"
description: "Eine von Windows 95 inspirierte Desktop-Umgebung, die komplett im Browser läuft, mit verschiebbaren Fenstern, klassischen Apps und einer Boot-Sequenz."
summary: "Eine von Windows 95 inspirierte Desktop-Umgebung, die komplett im Browser läuft, mit verschiebbaren Fenstern, klassischen Apps und einer Boot-Sequenz."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-23", "windows95", "retro", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 23
seriesOpened: false
date: 2026-04-28
draft: false
#type: "hidden"
---

Tag 23. Ich habe einer KI gesagt, sie soll mir Windows 95 bauen.

## Der Prompt

Dieser hier war pure Nostalgie:

> "Build a Windows 95-inspired desktop environment that runs in the browser. Include a taskbar, start menu, draggable and resizable windows, and classic apps like Notepad, Calculator, Paint, Minesweeper, Terminal, Internet Explorer, and My Computer. Add a boot sequence, pixel art SVG icons, sound effects, wallpaper selection, a CRT effect, and a BSOD easter egg."

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day23-retroos.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

[Watchfire](https://watchfire.io) hat das in 10 Aufgaben aufgeteilt. Der Umfang hier war heftig. Das ist keine einzelne App, das ist eine komplette Betriebssystem-Oberfläche mit einem Fenstermanager, einer Taskleiste, einem Startmenü und sieben separaten Anwendungen, die alle darin laufen. Jede brauchte ihr eigenes Verhalten, ihr eigenes Fenster-Design, ihre eigenen Interaktionen.

Die Aufgabenliste deckte zuerst die Desktop-Shell ab (Taskleiste, Startmenü, Fensterverwaltung), dann jede Anwendung einzeln, und schließlich die Feinschliffe wie die Boot-Sequenz, den BSOD, den CRT-Scanline-Effekt und die Soundeffekte.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

Dieses Ding bootet.

![Boot-Bildschirm](images/screenshot-02.png)

Du lädst die Seite und bekommst einen schwarzen Bildschirm mit "RetroOS 95 - Click anywhere to start." Klick drauf und du bekommst eine POST-Sequenz im Textmodus, die durchscrollt, genau wie beim Original. Dann ein Fortschrittsbalken mit "Starting RetroOS..." bevor der Desktop lädt.

![POST-Sequenz](images/screenshot-03.png)

![Ladebalken](images/screenshot-04.png)

Dann erscheint der Desktop und er sieht richtig aus. Dieser spezifische Türkiston. Die klobige graue Taskleiste unten. Der Start-Button in der Ecke. Desktop-Icons aufgereiht auf der linken Seite mit Pixel-Art-SVG-Icons, die tatsächlich so aussehen, als würden sie ins Jahr 1995 gehören.

![Desktop](images/screenshot-05.png)

**Das Startmenü funktioniert.** Klick auf Start und du bekommst das klassische Kaskadenmenü mit Programme, Dokumente, Einstellungen, Suchen, Hilfe, Ausführen und Herunterfahren. Die Apps sind direkt dort aufgelistet. Es hat sogar diesen abgeschrägten 3D-Rand, für den Win95 bekannt war.

![Startmenü](images/screenshot-06.png)

**Das Terminal ist überraschend tiefgründig.** Es ist nicht nur eine visuelle Requisite. Du kannst `dir` ausführen und bekommst eine gefälschte Dateiauflistung mit AUTOEXEC.BAT und CONFIG.SYS. Die Ausgabeformatierung entspricht DOS, bis hin zum Datumsformat und den Byte-Zählungen. Es antwortet sogar auf `ver` mit einem Versionsstring.

![Terminal](images/screenshot-07.png)

![Terminal mit dir-Ausgabe](images/screenshot-08.png)

**Der Taschenrechner funktioniert.** Ordentliches Button-Layout, das eingelassene Display, der abgeschrägte Rahmen. Er rechnet wirklich. Er sieht genau so aus wie der, den du immer geöffnet hast, wenn dir im Informatikunterricht langweilig war.

![Taschenrechner und Terminal](images/screenshot-09.png)

**Paint ist funktionsfähig.** Du hast eine Leinwand, eine Farbpalette unten, und du kannst tatsächlich zeichnen. Die Werkzeugauswahl ist da. Ich habe ein Gesicht gezeichnet, weil das jeder in MS Paint 1997 gemacht hat.

![Paint-App](images/screenshot-10.png)

**Internet Explorer hat eine gefälschte Homepage.** Es lädt eine Retro-Seite im Stil von "Willkommen auf meiner Homepage" mit buntem Text, Besucherzähler und einem Gästebuch-Link. Die Liebe zum Detail hat mich hier echt erwischt.

![IE und andere Apps](images/screenshot-12.png)

**Arbeitsplatz zeigt Laufwerke.** Diskette A:, Festplatte C: und ein CD-ROM D:. Es ist ein Dateibrowser für ein Dateisystem, das nicht existiert, aber es sieht genau richtig aus.

![Arbeitsplatz](images/screenshot-13.png)

**Minesweeper ist spielbar.** Das klassische Raster mit dem Zähler und dem Smiley oben. Zahlen, Flaggen, Minen. Das ist das Original.

**Alle Fenster sind verschiebbar und größenveränderbar.** Du kannst sie stapeln, herumschieben, in die Taskleiste minimieren, und die Taskleiste zeigt alle offenen Fenster genau wie das echte Betriebssystem. Das gesamte Fensterverwaltungssystem funktioniert.

![Mehrere offene Fenster](images/screenshot-01.png)

Und dann gibt es das BSOD-Easter-Egg. Ich verrate nicht, wie man es auslöst, aber es ist drin, und es sieht authentisch aus.

## Die Bug-Reports

Ehrlich gesagt, nicht viel zu berichten hier. Die Fensterverwaltung funktionierte beim ersten Versuch. Die Apps luden alle korrekt. Die Hauptsachen, die mir auffielen:

- Einige Fenster konnten die Taskleiste überlagern, wenn man sie zu weit nach unten zog
- Der CRT-Effekt war auf kleineren Bildschirmen etwas heftig
- Der erste Klick bei Minesweeper konnte manchmal eine Mine treffen (die echte Version hat dich davor geschützt)

Kleinigkeiten. Das Kernerlebnis war von Anfang an solide.

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day23-retroos" showThumbnail=true >}}

**[RetroOS starten](https://vibe30-day23-retroos.vercel.app)**

Klick auf den schwarzen Bildschirm zum Booten. Klick auf Start zum Erkunden. Öffne alles. Probier die Terminal-Befehle aus. Zeichne etwas in Paint. Spiel Minesweeper. Finde den BSOD.

![Paint und Taschenrechner nebeneinander](images/screenshot-11.png)

![Arbeitsplatz-Dateibrowser](images/screenshot-14.png)

## Fazit Tag 23

Das ist eines dieser Projekte, bei denen allein der Nostalgiefaktor den Bau wert ist. Aber darüber hinaus ist der technische Umfang beeindruckend. Ein Fenstermanager, sieben separate Apps, eine Boot-Sequenz, Soundeffekte, Tastenkombinationen, ein gefälschtes Dateisystem, ein gefälschtes Internet. Alles aus einer einzigen Prompt-Sitzung.

Was mich beeindruckt, ist die Liebe zum Detail. Die türkise Desktop-Farbe. Das spezifische Grau des Fenster-Designs. Die abgeschrägten Ränder. Die Art, wie die Taskleisten-Buttons aussehen, wenn ein Fenster aktiv versus inaktiv ist. Niemand hat ihm gesagt, dass es diese Details richtig hinbekommen soll. Es wusste einfach, wie Windows 95 aussah, und hat die Ästhetik genagelt.

Wenn du aufgewachsen bist und zum ersten Mal auf einem beigen Tower Mitte der 90er auf Start geklickt hast, probier das hier aus. Es wird dich direkt zurückbringen.

---

*Das ist Tag 23 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Folge mit, während ich 30 Projekte in 30 Tagen mit KI-unterstützter Programmierung herausbringe.*
