---
title: "30 Days of Vibe Coding - Tag 6 - Pomodoro"
description: "Ein terminalbasierter Pomodoro-Timer in Go mit Bubble Tea, mit ASCII-Kunst, Sitzungsverfolgung und Wochenstatistiken."
summary: "Ein terminalbasierter Pomodoro-Timer in Go mit Bubble Tea, mit ASCII-Kunst, Sitzungsverfolgung und Wochenstatistiken."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-06", "go", "tui", "bubbletea"]
series: ["30 Days of Vibe Coding"]
series_order: 6
seriesOpened: false
date: 2026-04-11
draft: false
#type: "hidden"
---

Tag 6. Zeit, den Browser hinter mir zu lassen – und meine Komfortzone vollständig zu verlassen.

Jedes bisherige Projekt war TypeScript, React, Canvas. Sprachen und Frameworks, die ich kenne. Heute wollte ich etwas anderes ausprobieren: Was passiert, wenn ich die KI bitte, mit Werkzeugen zu bauen, die ich noch nie angefasst habe?

## Der Prompt

> „Baue einen Terminal-Pomodoro-Timer in Go mit Bubble Tea: großer ASCII-Countdown, Sitzungsverfolgung mit SQLite, tägliche und wöchentliche Statistiken, Aufgaben-Labels und anpassbare Dauern."

Ich habe noch nie Go geschrieben. Ich habe noch nie Bubble Tea benutzt. Ich habe Lip Gloss noch nie angefasst. Ich könnte dir den Unterschied zwischen einer `goroutine` und einem `channel` nicht erklären, ohne nachzuschlagen. Der gesamte Tech-Stack in diesem Prompt ist mir fremd.

Das war der Sinn der Sache. Fünf Tage lang Webspiele auf vertrautem Terrain zu bauen, ließ mich fragen: Ist die KI nur gut bei Dingen, die ich bereits verstehe? Was, wenn ich ihr einen Stack vorwerfe, den ich nicht mal richtig prüfen kann?

## Wie es gebaut wurde

[Watchfire](https://watchfire.io) nahm den Prompt und zerlegte ihn genauso wie bei den TypeScript-Projekten. Die Tatsache, dass es Go statt TypeScript war, schien keine Rolle zu spielen. Es wählte Bubble Tea als TUI-Framework, Lip Gloss für das Styling und SQLite für die Persistenz. Kein Webserver, kein Electron-Wrapper, kein Browser. Nur ein Binary, das man von überall ausführen kann.

Das Projekt kam als sauberes Go-Modul mit 11 Quelldateien in 6 Paketen heraus: `main`, `ascii`, `config`, `db`, `stats`, `timer` und `ui`. Jedes Paket hat eine klare Verantwortlichkeit. Das Timer-Paket verwaltet die Zustandsmaschine (idle, running, paused, finished). Das UI-Paket rendert alles mit Bubble Tea. Das Datenbankpaket verwaltet die SQLite-Persistenz. Das Stats-Paket aggregiert Sitzungsdaten für tägliche und wöchentliche Ansichten.

Es kam sogar mit einem Install-Skript, einem Makefile und richtigen CLI-Flags über einen benutzerdefinierten Config-Loader, der eine YAML-Konfigurationsdatei mit Kommandozeilenargumenten zusammenführt. Ich würde nicht wissen, wie ich das alles in Go selbst einrichten sollte.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was ich bekommen habe

![Pomodoro-Timer bereit zum Starten](images/screenshot-01.png)

**Große ASCII-Zahlen.** Die Countdown-Anzeige verwendet benutzerdefinierte Block-Zeichen-Ziffern, die 5 Zeilen hoch sind. Sie sind aus der ganzen Raumtiefe lesbar, was gewissermaßen der Sinn eines Pomodoro-Timers ist. Man sollte einen Blick darauf werfen können und wissen, wie viel Zeit noch bleibt.

![Timer läuft mit Fortschrittsbalken](images/screenshot-02.png)

**Farbkodierte Sitzungen.** Arbeitssitzungen leuchten rot. Kurze Pausen werden grün. Lange Pausen erhalten einen anderen Farbton. Die gesamte Benutzeroberfläche wechselt die Farbe je nach aktueller Phase, sodass man auf einen Blick weiß, ob man arbeiten oder sich ausruhen sollte.

![Kurze Pause bereit](images/screenshot-03.png)

**Es verfolgt alles.** Jede Sitzung wird in einer lokalen SQLite-Datenbank unter `~/.pomo/sessions.db` gespeichert. Die Kopfzeile zeigt die Tagesstatistiken in Echtzeit: wie viele Pomodoros abgeschlossen wurden und die gesamte Fokuszeit. Mit `pomo stats` erhält man eine wöchentliche Aufschlüsselung mit ASCII-Balkendiagrammen.

![Kurze Pause läuft](images/screenshot-04.png)

**Der Sitzungszyklus funktioniert.** Vier Arbeitssitzungen, dann eine lange Pause. Das Fortschritts-Badge oben rechts zeigt, wo man sich im Zyklus befindet (z. B. `[WORK 1/4]`). Nach der vierten Arbeitssitzung wechselt es automatisch auf eine 15-minütige lange Pause statt der üblichen 5-minütigen kurzen Pause.

**Aufgaben-Labels.** Mit `pomo -t "Blogbeitrag schreiben"` erscheint der Aufgabenname in der Kopfzeile. Er wird auch in der Datenbank gespeichert, sodass man später in den Statistiken sehen kann, woran man tatsächlich gearbeitet hat.

**Terminal-Glocke.** Wenn eine Sitzung endet, läutet die Terminal-Glocke. Simpel, effektiv und funktioniert mit jedem Benachrichtigungssystem, das das Terminal unterstützt.

## Die Fehlerberichte

Diesmal keine. Der Timer funktionierte beim ersten Build korrekt. Starten, pausieren, fortsetzen, überspringen, zurücksetzen, Sitzungsübergänge – alles funktionierte wie erwartet. Die Tastatursteuerung reagierte zuverlässig und die Zustandsmaschine behandelte Randfälle sauber.

## Die Zahlen

- **11 Go-Quelldateien** in 6 Paketen
- **1 Testdatei** mit Tests für die Timer-Zustandsmaschine
- **4 Sitzungstypen:** Arbeit, kurze Pause, lange Pause und die Übergänge dazwischen
- **SQLite-Persistenz** für den Sitzungsverlauf
- **YAML + CLI-Konfiguration** mit sinnvollen Standardwerten (25/5/15-Minuten-Zyklen)
- **Gesamte praktische Zeit:** etwa 20 Minuten Testen und Anpassen des Prompts

## Ausprobieren

{{< github repo="nunocoracao/Vibe30-day06-pomodoro" showThumbnail=true >}}

Installation mit:

```bash
go install github.com/nunocoracao/Vibe30-day06-pomodoro@latest
```

Oder mit dem Install-Skript:

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day06-pomodoro/main/install.sh | bash
```

Dann einfach `pomo` im Terminal ausführen.

## Fazit Tag 6

Dieses Projekt hat eine Frage beantwortet, die mich seit Tag 1 beschäftigt: Funktioniert KI-gestütztes Programmieren nur, wenn man den Stack bereits kennt?

Nein. Tut es nicht. Ich kann kein Go schreiben. Ich kann kein TUI mit Bubble Tea bauen. Ich würde nicht wissen, wie man ein Go-Modul mit sechs Paketen strukturiert, SQLite-Bindings einrichtet oder ein Makefile für die Kreuzkompilierung schreibt. Aber das Werkzeug existiert, es funktioniert und es ist etwas, das ich täglich nutze. Ein einzelnes Binary, keine Laufzeitabhängigkeiten, funktioniert in jedem Terminal.

Was mich am meisten überraschte, war die Architektur. Sechs Pakete mit klaren Grenzen. Eine ordentliche Zustandsmaschine für den Timer. Elegantes Datenbankhandling: Wenn SQLite fehlschlägt, läuft der Timer trotzdem weiter – man bekommt nur keine Statistiken. Das ist die Art von Entscheidung, die ein erfahrener Entwickler treffen würde, und sie kam aus einem Prompt, der von jemandem geschrieben wurde, der die Sprache nicht kennt.

Das verändert, was „nicht vertraut" bedeutet. Wenn ich eine ausgefeilte Go-TUI-App ausliefern kann, ohne Go zu können, dann ist die Hürde, unbekannte Tech-Stacks auszuprobieren, gerade verschwunden. Die Kosten des Experimentierens sind auf nahezu null gesunken.

Sechs Tage dabei – und das ist das erste Projekt, das ich nach dem Schreiben des Blogbeitrags weiter laufen lasse.

---

*Dies ist Tag 6 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Begleite mich, während ich 30 Projekte in 30 Tagen mit KI-gestütztem Programmieren ausliefere.*
