---
title: "30 Tage Vibe Coding - Tag 19 - ReactionWall"
description: "Eine Live-Reaktionswand für Events mit fliegenden Emojis und Textnachrichten, angetrieben durch Echtzeit-Synchronisation mit Firebase."
summary: "Eine Live-Reaktionswand für Events mit fliegenden Emojis und Textnachrichten, angetrieben durch Echtzeit-Synchronisation mit Firebase."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-19", "react", "firebase", "framer-motion"]
series: ["30 Days of Vibe Coding"]
series_order: 19
seriesOpened: false
date: 2026-04-24
draft: false
#type: "hidden"
---

Tag 19. Ich wollte etwas Lustiges und Interaktives für Live-Events. So etwas, das man bei einem Meetup auf einen Beamer wirft und die Leute Reaktionen von ihren Handys schicken lässt.

## Der Prompt

> "Baue eine Live-Reaktionswand für Events. Erstelle ein Event, teile einen Link oder QR-Code, und Reaktionen fliegen in Echtzeit über den Bildschirm. Emoji-Leiste unten, Textnachrichten auch. Vollbild-Projektionsmodus. Firebase für Echtzeit-Synchronisation."

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day19-reaction-wall.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

[Watchfire](https://watchfire.io) hat das in 9 Aufgaben aufgeteilt. Die ersten waren die Grundlage: Firebase Realtime Database einrichten, der Event-Erstellungsablauf und anonyme Authentifizierung, damit sich niemand registrieren muss. Dann kam die Emoji-Reaktionsleiste, die animierten fliegenden Reaktionen mit Framer Motion, der Vollbildmodus für Beamer, Sound-Toggle und ein letzter Feinschliff.

Der Echtzeit-Teil war die zentrale Herausforderung hier. Jede Reaktion muss sofort auf jedem Bildschirm erscheinen, der das Event anzeigt. Firebase Realtime Database erledigt das von Haus aus, aber es gibt jede Menge Feinheiten, damit es sich gut anfühlt. Die Reaktionen nutzen ein 30-Sekunden-Zeitfenster, damit alte verschwinden, und es gibt eine Ratenbegrenzung von 1 Reaktion pro Sekunde, damit die Sache nicht aus dem Ruder läuft.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

Die Startseite ist clean und dunkel. Ein Button, um eine Event-Wand zu erstellen.

![Startseite](images/screenshot-01.png)

Du gibst deinem Event einen Namen und klickst auf "Go Live." Das ist das gesamte Setup.

![Event-Erstellung](images/screenshot-02.png)

Sobald du drin bist, hast du einen QR-Code und einen teilbaren Link oben links, damit Teilnehmer sofort von ihren Handys aus beitreten können. Am unteren Bildschirmrand gibt es eine Emoji-Leiste mit 8 Optionen plus ein Textfeld für eigene Nachrichten bis zu 50 Zeichen.

![Event-Wand mit Emoji-Leiste und QR-Code](images/screenshot-03.png)

![Reaktionen auf dem Bildschirm](images/screenshot-04.png)

Der Anzeigemodus ist der Punkt, wo es richtig Spaß macht. Vollbild, dunkler Hintergrund, Reaktionen fliegen mit Leuchteffekten durch die Gegend. Die Emojis haben zufällige Flugbahnen, verschiedene Größen und eine Wackelanimation. Textnachrichten schweben ebenfalls über den Bildschirm in kleinen lila Blasen. Wenn die Leute anfangen, Reaktionen zu spammen, gibt es einen Burst-Effekt, der einsetzt.

![Anzeigemodus mit fliegenden Reaktionen und Text](images/screenshot-05.png)

Es gibt nette Details, die ich nicht explizit angefragt hatte. Haptisches Feedback auf dem Handy, wenn du eine Reaktion sendest. Pop-Sounds über die Web Audio API mit Toggle zum Ausschalten. Ein Cooldown-Indikator, damit du weißt, wann du nach der Ratenbegrenzung wieder senden kannst.

## Die Technik

- React 19 mit TypeScript und Vite
- Firebase Anonymous Auth plus Realtime Database
- Framer Motion für alle fliegenden Animationen
- QRCode.react für die teilbaren QR-Codes

Framer Motion macht die Schwerstarbeit auf der visuellen Seite. Jede Reaktion bekommt ihre eigene Animation mit zufälligen Parametern für Flugbahn, Rotation und Skalierung. Das Ergebnis: Keine zwei Reaktionen sehen gleich aus, wenn sie über den Bildschirm fliegen.

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day19-ReactionWall" showThumbnail=true >}}

**[Probier ReactionWall aus](https://vibe30-day19-reaction-wall.vercel.app)**

Erstelle ein Event, öffne den Link auf deinem Handy und fang an, dir selbst Reaktionen zu schicken. Es macht mehr Spaß als es sollte.

## Fazit Tag 19

Das ist eins von diesen Projekten, bei denen der Echtzeit-Aspekt es lebendig wirken lässt. Statische Apps sind okay, aber es gibt etwas daran, Reaktionen in dem Moment auftauchen zu sehen, in dem jemand auf sein Handy tippt, das es wie ein echtes Produkt wirken lässt. Firebase hat die Sync-Schicht übernommen, Framer Motion die Animations-Schicht, und das Ganze kam auf eine Weise zusammen, die tatsächlich für ein Live-Event funktioniert.

Das Teilen per QR-Code, der Vollbildmodus, die Tatsache, dass niemand etwas installieren oder ein Konto erstellen muss. Für ein Meetup oder einen Konferenzvortrag erfüllt das seinen Zweck. Nicht production-grade, aber gut genug, um es auf einen Beamer zu werfen und das Publikum in Stimmung zu bringen.

---

*Das ist Tag 19 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir, während ich 30 Projekte in 30 Tagen mit KI-unterstützter Programmierung veröffentliche.*
