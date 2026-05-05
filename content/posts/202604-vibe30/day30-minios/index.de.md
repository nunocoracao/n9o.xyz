---
title: "30 Tage Vibe Coding - Tag 30 - miniOs"
description: "Ein webbasiertes Desktop-Betriebssystem, komplett im Browser gebaut, mit allen 30 Vibe30-Projekten als installierbare Apps."
summary: "Ein webbasiertes Desktop-Betriebssystem, komplett im Browser gebaut, mit allen 30 Vibe30-Projekten als installierbare Apps."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-30", "nextjs", "react", "typescript", "os"]
series: ["30 Days of Vibe Coding"]
series_order: 30
seriesOpened: false
date: 2026-05-05
draft: false
#type: "hidden"
---

Tag 30. Der letzte. Ich habe ein Betriebssystem gebaut.

Kein echtes. Ein falsches im Browser. Aber die Art von falsch, wo du es hochfährst, dich einloggst, einen Dateimanager öffnest, Fenster in der Größe änderst, sie an Ecken andockst, Arbeitsbereiche wechselst, ein Terminal öffnest das neofetch ausführt, das Hintergrundbild änderst, und dann jedes der 29 Projekte startest, die ich diesen Monat schon gebaut habe, als Apps darin. Diese Art von falsch.

Das ist das Abschlussprojekt. Jedes Projekt der letzten 30 Tage lebt in diesem hier.

## Der Prompt

> "Baue ein webbasiertes Desktop-OS. Fensterverwaltung mit Ziehen, Größenänderung, Minimieren, Maximieren, Snap. Mehrere Arbeitsbereiche. Taskleiste, Startmenü, Spotlight-Suche, Alt-Tab. Boot-Sequenz, Login-Bildschirm, Sperrbildschirm, Screensaver. Dunkles und helles Theme mit Akzentfarben. Hintergrundbilder mit Parallax. Desktop-Widgets. Eingebaute Apps: Dateimanager, Texteditor, Terminal mit neofetch, Browser, Taschenrechner, Einstellungen, Musikplayer, Bildbetrachter, Paint, Kalender. Und jedes einzelne Vibe30-Projekt soll als installierte App zugänglich sein."

Der größte Prompt der Challenge, für das größte Projekt.

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day30-minios.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

[Watchfire](https://watchfire.io) hat dieses in 25 Aufgaben aufgeteilt. Nicht die höchste Anzahl der Challenge (der Code-Editor kam auf 43), aber dieses hatte den breitesten Umfang. Das war keine App. Es war eine Shell, die alle anderen Apps enthalten musste.

Die Aufgaben deckten alles ab, was man von einem OS-Bau erwarten würde (wenn man es so nennen kann): Core-Fensterverwaltung, das Arbeitsbereiche-System, Taskleiste und System Tray, Startmenü, Spotlight-Suche, den Alt-Tab-Switcher, Boot- und Login-Flows, den Sperrbildschirm und Screensaver, Theme-Engine, Hintergrundbild-System mit Parallax, Desktop-Widgets, und dann jede eingebaute App als eigene Aufgabe. Die letzten Aufgaben kümmerten sich um die Integration aller 30 Vibe30-Projekte als startbare Apps und den Bau einer Willkommenstour.

Ich habe bei diesem die meiste Hands-on-Zeit von allen 30 Tagen verbracht. Nicht Code schreiben, sondern Interaktionen testen. Fenster-Snapping hat viele Edge Cases. Was passiert wenn du in eine Ecke ziehst? Was ist mit dem Maximieren eines bereits angedockten Fensters? Was wenn du den Arbeitsbereich wechselst während ein Fenster gezogen wird? Das sind die Dinge, die ich ausprobieren und zurückmelden musste.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

![miniOs Desktop](images/screenshot-01.png)

Es fährt hoch. Es gibt eine Boot-Sequenz-Animation mit einem Ladebalken und durchlaufenden Systemmeldungen. Dann ein Login-Bildschirm. Dann lädt der Desktop.

![Boot und Login](images/screenshot-02.png)

**Die Fensterverwaltung funktioniert wirklich.** Zieh Fenster herum. Greif jede Kante oder Ecke zum Größenändern. Doppelklick auf die Titelleiste zum Maximieren. Zieh zum linken Rand zum Links-Andocken, rechten Rand zum Rechts-Andocken, Ecken zum Andocken in Quadranten. Minimiere in die Taskleiste und klicke zum Wiederherstellen. Das ist die Art von Ding, die einfach klingt aber eine Million kleine Interaktionsdetails hat.

![Fensterverwaltung](images/screenshot-03.png)

**Vier Arbeitsbereiche.** Wechsle zwischen ihnen mit Ctrl+1 bis Ctrl+4, oder klicke in der Taskleiste. Jeder Arbeitsbereich hat seinen eigenen Satz Fenster. Es fühlt sich an wie ein echtes Multi-Desktop-Setup.

**Die Taskleiste ist echt.** Startmenü-Button, angepinnte Apps, Indikatoren für offene Fenster, Arbeitsbereiche-Switcher, System Tray mit Uhr. Klick auf das Startmenü und du bekommst einen kategorisierten App-Launcher. Drück Cmd+K für Spotlight-Suche und tippe um jede App sofort zu finden. Alt+Tab bringt einen Fenster-Switcher mit Vorschauen.

![Startmenü und Taskleiste](images/screenshot-04.png)

**Dunkle und helle Themes mit 9 Akzentfarben.** Öffne Einstellungen, wähle dein Theme, wähle deine Akzentfarbe, und das gesamte OS zeichnet sich neu. Es gibt 4 Hintergrundbilder mit einem Parallax-Effekt, der auf Mausbewegungen reagiert.

![Einstellungen und Themes](images/screenshot-05.png)

**Die eingebauten Apps funktionieren.** Der Dateimanager durchsucht ein virtuelles Dateisystem. Der Texteditor kann Undo/Redo und Dateien speichern/öffnen. Das Terminal führt Befehle aus und hat ein funktionierendes neofetch, das Systeminformationen für miniOs anzeigt. Der Taschenrechner verarbeitet Tastatureingaben. Paint lässt dich zeichnen. Der Kalender funktioniert.

![Eingebaute Apps](images/screenshot-06.png)

**Und dann gibt es die Vibe30-Apps.** Alle 30 Projekte tauchen im Startmenü unter ihrer eigenen Kategorie auf. Web-Projekte öffnen sich in einem eingebetteten iframe direkt in einem miniOs-Fenster. TUI- und native Projekte, die nicht im Browser laufen können, zeigen eine Projektkarte mit Links zum Repo und zur Live-Demo. Du kannst den Platformer in einem Fenster laufen haben, Snake in einem anderen, und Wordle in einem dritten, während der Musikplayer im Hintergrund läuft.

![Vibe30-Apps laufend](images/screenshot-07.png)

Dieser letzte Teil macht das zum Abschlussprojekt. Es ist nicht nur ein OS-Klon. Es ist ein Container für die gesamte Challenge.

## Die Bug Reports

Dieses hatte die längste Bug-Liste aller Projekte:

- Die Resize-Handles der Fenster waren am unteren Rand zu klein
- Das Andocken an Ecken funktionierte nicht wenn ein Fenster bereits maximiert war
- Der Screensaver wurde nicht ausgelöst wenn ein Fenster den Fokus hatte
- Die Alt-Tab-Reihenfolge war falsch nach dem Minimieren eines Fensters
- Die Spotlight-Suchergebnisse aktualisierten sich nicht beim Wechsel der Arbeitsbereiche
- Einige Vibe30-iframes luden nicht wegen X-Frame-Options-Headern
- Die Boot-Sequenz war zu schnell (ironischer Bug Report, aber es musste sich echt anfühlen)
- Der Parallax-Effekt war ruckelig auf Safari

Edge Cases der Fensterverwaltung waren das Hauptthema. Jedes Mal wenn ich dachte das Snapping funktioniert, fand ich eine andere Kombination die es kaputt machte.

## Die Zahlen

- **25 Watchfire-Aufgaben** von der Architektur bis zur Willkommenstour
- **30 Vibe30-Projekte** als startbare Apps integriert
- **10 eingebaute Apps** (Dateimanager, Texteditor, Terminal, Browser, Taschenrechner, Einstellungen, Musikplayer, Bildbetrachter, Paint, Kalender)
- **4 Arbeitsbereiche**, **9 Akzentfarben**, **4 Hintergrundbilder**, **2 Themes**
- **Next.js 16, React 19, TypeScript, Tailwind CSS 4**

## Ausprobieren

{{< github repo="nunocoracao/Vibe30-day30-minios" showThumbnail=true >}}

**[miniOs öffnen](https://vibe30-day30-minios.vercel.app)**

Am besten auf dem Desktop. Probier die Tastenkürzel: Cmd+K für Spotlight, Ctrl+1-4 für Arbeitsbereiche, Alt+Tab zum Fenster wechseln.

## Fazit Tag 30

Ich komme immer wieder auf das Absurde hieran zurück. Ich habe eine KI gebeten mir ein Betriebssystem zu bauen und sie hat es getan. Keine Spielzeug-Demo mit einer falschen Taskleiste und nichts dahinter. Ein Ding mit echter Fensterverwaltung, echter Arbeitsbereich-Isolation, echter Tastaturnavigation, echtem Theming, und 40 funktionierenden Anwendungen darin.

Ist es ein echtes OS? Offensichtlich nicht. Aber es ist ein echtes Stück Software. Allein das Fenster-Snapping ist etwas, das ich nur schwer korrekt alleine implementieren könnte. Alle 30 Projekte dieser Challenge können darin laufen, gleichzeitig, in ihren eigenen Fenstern, auf separaten Arbeitsbereichen.

An Tag 1 habe ich einen Platformer aus einem Satz gebaut. An Tag 30 habe ich ein Betriebssystem gebaut, das den Platformer enthält, und alles was ich dazwischen gemacht habe.

Dreißig Projekte. Dreißig Tage. Fertig.

---

*Das ist Tag 30 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Das war das letzte Projekt, aber es kommt noch ein Post: das komplette Wrapup mit allem was ich gelernt habe beim Ausliefern von 30 Projekten in 30 Tagen.*
