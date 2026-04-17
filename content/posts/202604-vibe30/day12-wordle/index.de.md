---
title: "30 Tage Vibe Coding - Tag 12 - Wordle"
description: "Ein vollwertiger Wordle-Klon mit Animationen, dunklem/hellem Theme, schwierigem Modus, Farbenblind-Modus, Soundeffekten und Konfetti-Feiern."
summary: "Ein vollwertiger Wordle-Klon mit Animationen, dunklem/hellem Theme, schwierigem Modus, Farbenblind-Modus, Soundeffekten und Konfetti-Feiern."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-12", "react", "nextjs", "typescript", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 12
seriesOpened: false
date: 2026-04-17
draft: false
---

Tag 12. Jeder hat schon Wordle gespielt. Mal sehen, wie nah die KI an das Original rankommt.

## Der Prompt

> "Bau einen Wordle-Klon mit einer ordentlichen Wortliste, Kachel-Animationen, Tastatur, Statistik-Tracking und Teilen-Funktion."

## Wie Es Gebaut Wurde

Dieses Projekt durchlief 7 Watchfire-Aufgaben, und die Progression zu beobachten war interessant, weil sie widerspiegelt, wie man tatsächlich ein poliertes Spiel bauen würde, wenn man unendlich Geduld hätte.

1. **Spiel-Engine mit Wortlisten.** Das Fundament: eine Lösungsliste mit rund 2.300 Wörtern, eine Liste gültiger Versuche mit rund 10.000 Wörtern und die zentrale Auswertungslogik für Versuche. Grün, gelb, grau. Die Grundlagen.
2. **Polierte UI mit Kachel-Animationen und Tastatur.** Die Kacheln drehen sich beim Aufdecken, springen bei der Eingabe, zittern bei ungültigen Wörtern. Eine Bildschirmtastatur, die die Buchstabenfarben aktualisiert, während du spielst.
3. **Statistiken und Teilen.** Gewinnprozentsatz, Balkendiagramm mit Versuchsverteilung, aktuelle und maximale Siegesserie. Der Teilen-Button kopiert dein Emoji-Raster in die Zwischenablage, genau wie beim echten Wordle.
4. **Hilfe-Modal, dunkles/helles Theme, schwieriger Modus.** Ein Wie-man-spielt-Overlay mit visuellen Beispielen. Theme-Umschalter mit sanften Übergängen. Schwieriger Modus, der dich zwingt, aufgedeckte Hinweise in den folgenden Versuchen zu verwenden.
5. **Farbenblind-Modus, Barrierefreiheit, React-Refs-Bug-Fix.** Kontraststarke Farben für farbenblinde Spieler. Diese Aufgabe hat auch einen React-Refs-Bug entdeckt und behoben, der Probleme mit den Kachel-Animationen verursachte.
6. **Soundeffekte mit Web Audio API.** Audio-Feedback für Tastendruck, Kachel-Aufdeckung, Siege und Fehler. Alles mit der Web Audio API generiert, also keine Audiodateien zum Laden.
7. **Konfetti-Feier beim Gewinnen.** Ein Canvas-basiertes Partikelsystem, das feuert, wenn du das Rätsel löst. Weil du es dir verdient hast.

Das Ganze lebt in einem einzigen benutzerdefinierten React Hook (`useWordle.ts`) für die Spiellogik, mit der UI als Next.js-Seite. Saubere Trennung.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

![Wordle dunkler Modus Gameplay](images/screenshot-01.png)

**Es fühlt sich an wie Wordle.** Das war die Messlatte, und sie wird übertroffen. Die Kachel-Drehanimation beim Aufdecken, das leichte Springen beim Tippen eines Buchstabens, das Zittern bei einem ungültigen Wort. Diese Mikro-Interaktionen sind es, die das echte Wordle so befriedigend machen, und sie sind alle hier.

![Wordle heller Modus](images/screenshot-02.png)

**Dunkles und helles Theme.** Beide sehen sauber aus. Der dunkle Modus ist Standard (wie es sein sollte), aber der helle Modus funktioniert auch gut. Der Umschalter ist im Header, die Übergänge sind sanft.

![Statistik-Modal](images/screenshot-03.png)

**Statistiken, die bestehen bleiben.** Gespielte Spiele, Gewinnprozentsatz, aktuelle Serie, maximale Serie und ein Versuchsverteilungsdiagramm. Alles in localStorage gespeichert, also überleben deine Statistiken zwischen den Sitzungen. Der Teilen-Button formatiert deine Ergebnisse als Emoji-Raster, bereit zum Einfügen überall.

![Einstellungen mit schwierigem Modus und Farbenblind-Modus](images/screenshot-04.png)

**Einstellungen, die zählen.** Der schwierige Modus ist eine echte Einschränkung, nicht nur ein Label. Wenn du herausfindest, dass das Wort ein A an Position 3 hat, muss jeder folgende Versuch ein A an Position 3 haben. Das Spiel erzwingt es und sagt dir, warum dein Versuch abgelehnt wurde. Der Farbenblind-Modus tauscht Grün und Gelb gegen Orange und Blau, was eine Kleinigkeit ist, die das Spiel für viel mehr Menschen spielbar macht.

**Soundeffekte ohne Audiodateien.** Der Web-Audio-API-Ansatz ist clever. Keine mp3s zum Laden, keine Audio-Sprites, kein Vorladen. Die Sounds werden in Echtzeit synthetisiert. Ein sanftes Klicken für die Tasteneingabe, eine befriedigende Tonfolge für die Kachel-Aufdeckung, eine kleine Fanfare fürs Gewinnen. Sie fügen viel hinzu, ohne Download-Gewicht hinzuzufügen.

**Konfetti, das sich richtig anfühlt.** Gewinn das Spiel und Canvas-Partikel explodieren aus der Bildschirmmitte. Es ist ein kleiner Touch, aber er verwandelt einen stillen "geschafft"-Moment in eine Feier.

## Die Bug-Reports

Das React-Refs-Problem in Aufgabe 5 war der einzige echte Bug. Die Kachel-Drehanimationen wurden nicht konsistent ausgelöst, weil React die Refs bei Re-Renders falsch handhabte. Watchfire hat es beim Barrierefreiheits-Durchgang entdeckt und in der gleichen Aufgabe behoben. Ich musste dafür keinen separaten Bericht erstellen.

Davon abgesehen funktionierte das Spiel von Anfang an korrekt. Gültige Wörter wurden akzeptiert, ungültige mit einem Zittern abgelehnt, die Tastaturfarben aktualisierten sich korrekt und der schwierige Modus setzte seine Regeln ordnungsgemäß durch.

## Die Zahlen

- **~2.300 Lösungswörter** und **~10.000 gültige Versuche**
- **7 Watchfire-Aufgaben** von der Basis-Engine bis zum Konfetti
- **1 benutzerdefinierter Hook** (`useWordle.ts`) mit der gesamten Spiellogik
- **Web Audio API** für Soundeffekte ohne Download
- **Canvas-Partikelsystem** für Siegesfeiern
- **localStorage** für Persistenz von Statistiken und Spielstand

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day12-wordle" showThumbnail=true >}}

**[Spiel Wordle](https://vibe30-day12-wordle.vercel.app)**

Tippe ein 5-Buchstaben-Wort und drücke Enter. Grün bedeutet richtiger Buchstabe, richtige Stelle. Gelb bedeutet richtiger Buchstabe, falsche Stelle. Grau bedeutet, der Buchstabe ist nicht im Wort. Sechs Versuche, um es herauszufinden.

## Fazit Tag 12

Wordle ist eins dieser Spiele, die einfach aussehen, bis man versucht, es zu bauen. Die Kernlogik ist geradlinig, aber der Feinschliff ist das, was es funktionieren lässt. Die Animationen, das Tastatur-Feedback, die Statistiken, die Teilen-Funktion, die Durchsetzung des schwierigen Modus. Nimm irgendeins davon weg und es fühlt sich nicht mehr wie Wordle an.

Was mich hier beeindruckt hat, war die Progression. Aufgabe 1 gab mir ein funktionales, aber hässliches Wörter-Ratespiel. Bei Aufgabe 7 hatte es alles, was das echte Wordle hat, plus Soundeffekte und Konfetti. Jede Aufgabe fügte eine spezifische Kategorie von Feinschliff hinzu, und keine davon hat das Vorherige kaputt gemacht. Das ist nicht einfach mit Animationen und State-Management in React.

Die Wahl der Web Audio API für Soundeffekte war eine nette Überraschung. Ich hätte erwartet, dass es auf Audiodateien zurückgreift. Stattdessen generiert es die Sounds programmatisch, was null zusätzliche Assets und sofortige Wiedergabe bedeutet. Ein kluger Trade-off.

Das Muster hält. Jeder Tag fügt Feinschliff hinzu, und nichts ist bisher auseinandergefallen.

---

*Das ist Tag 12 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir, während ich 30 Projekte in 30 Tagen mit KI-unterstützter Programmierung veröffentliche.*
