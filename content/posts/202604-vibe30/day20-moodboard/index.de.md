---
title: "30 Tage Vibe Coding - Tag 20 - MoodBoard"
description: "Ein kollaboratives Mood Board, auf dem jeder Bilder, Links und Notizen auf eine gemeinsame Leinwand pinnen kann – mit Echtzeit-Updates."
summary: "Ein kollaboratives Mood Board, auf dem jeder Bilder, Links und Notizen auf eine gemeinsame Leinwand pinnen kann – mit Echtzeit-Updates."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-20", "firebase", "collaboration", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 20
seriesOpened: false
date: 2026-04-25
draft: false
#type: "hidden"
---

Tag 20. Ich wollte eine gemeinsame Leinwand, auf der eine Gruppe von Leuten Bilder, Links und Notizen an eine Wand werfen kann, um zu sehen, was hängen bleibt. Wortwörtlich.

## Der Prompt

> "Baue eine kollaborative Mood-Board-App. Jeder mit dem Link kann Bilder, Textnotizen und Links auf eine gemeinsame Leinwand pinnen. Echtzeit-Sync, anonyme Authentifizierung, freies Layout."

Das war der Ausgangspunkt. [Watchfire](https://watchfire.io) hat das in 7 Aufgaben aufgeteilt, die es von einem einfachen Firebase-Grundgerüst zu einem vollständigen kollaborativen Pinboard gebracht haben.

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day20-moodboard.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

Sieben Aufgaben, jede mit einer neuen Schicht:

1. Firebase Echtzeit-Sync als Fundament
2. Drei Pin-Typen: Text-Haftnotizen, Bild-Uploads und Link-Karten mit OG-Vorschau
3. Pins per Drag auf einer freien Leinwand anordnen
4. Farbige Pin-Tags, um Dinge visuell zu gruppieren
5. Zoom und Pan plus Pin-Größenänderung für Leinwand-Kontrolle
6. Board-Sperre, damit der Ersteller ein Board auf Nur-Lesen setzen kann, und Export als PNG
7. Cursor-Präsenz, um zu sehen, wo andere Leute gerade hovern, plus ein visueller Redesign-Durchgang

Die Abfolge ergab Sinn. Man kann keine Pins ziehen, bevor sie existieren, und man muss sich nicht um visuellen Feinschliff kümmern, bis die Kerninteraktionen funktionieren.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Dabei Rauskam

Das hier hat sofort geklickt.

![MoodBoard Startseite](images/screenshot-02.png)

**Die Startseite gibt den Ton an.** Großes Logo, verstreute Beispiel-Pins im Hintergrund, ein Button zum Erstellen eines Boards. Keine Anmeldung, kein Konto, keine Hürden. Du klickst auf "Create New Board" und bist drin.

![Leeres Board bereit für Pins](images/screenshot-03.png)

**Ein frisches Board ist eine leere Leinwand.** Dunkler Hintergrund mit einem dezenten Punktraster. Die Toolbar ist minimal — nur Optionen zum Sperren, Exportieren und Kopieren der Share-URL oben rechts. Der schwebende Aktionsbutton unten rechts öffnet den Pin-Typ-Selektor.

![Pin-Typ-Selektor](images/screenshot-04.png)

**Drei Pin-Typen decken das Wesentliche ab.** Text für Haftnotizen, Bild für Uploads und Link für URL-Karten. Drück den Plus-Button, wähl deinen Typ und leg ihn auf der Leinwand ab. Einfach genug, dass jeder mit dem Link es ohne Anleitung versteht.

![Text-Haftnotiz auf der Leinwand](images/screenshot-05.png)

**Haftnotizen sehen aus wie echte Haftnotizen.** Sie haben dieses leicht geneigte, papierartige Gefühl. Du kannst reinschreiben was du willst, eine Farbe wählen und sie hinziehen wo du willst. Die Pfirsichfarbe auf einer dunklen Leinwand sieht überraschend gut aus.

![Bild-Upload-Dialog](images/screenshot-06.png)

**Der Bild-Upload ist unkompliziert.** Ein Modal erscheint, du wählst eine Datei und sie wird in Firebase Storage hochgeladen. Das Bild erscheint als Pin auf der Leinwand, den du wie alles andere ziehen und in der Größe ändern kannst.

![Board mit gemischtem Inhalt](images/screenshot-07.png)

**Misch alles zusammen und es fängt an, wie ein echtes Mood Board auszusehen.** Bilder, Haftnotizen, verschiedene Größen. Du kannst Dinge herumschieben, um Anordnungen zu finden, die funktionieren. Die freie Leinwand bedeutet, dass nichts an ein Raster gebunden ist — so bekommt man dieses organische Collagen-Feeling.

![Vollständiges Board mit Link-Karten](images/screenshot-08.png)

**Link-Karten ziehen OG-Metadaten.** Füg eine URL ein und es holt sich Titel, Beschreibung und Vorschaubild. Die Watchfire-Karte, die Blowfish-Karte, die OpenClaw-Karte — alle haben sich sauber mit ihrem Branding gerendert. Das sieht viel besser aus als einfach eine nackte URL einzufügen.

## Die Bug Reports

Echtzeit-Kollaboration hat immer Grenzfälle:

- Die Cursor-Präsenz flackerte gelegentlich, wenn mehrere Nutzer sich schnell bewegten
- Sehr große Bild-Uploads konnten die Leinwand träge machen, bis das Bild fertig geladen war
- Der PNG-Export hat manchmal Pins verpasst, die weit vom Viewport-Zentrum entfernt waren

Nichts, was die Erfahrung kaputt gemacht hätte, aber die Art von Feinschliff-Problemen, die man vor einem echten Einsatz beheben würde.

## Die Zahlen

- **7 Watchfire-Aufgaben** vom Firebase-Setup bis zum visuellen Redesign
- **Firebase-Stack:** Anonymous Auth, Firestore für Echtzeit-Sync, Storage für Bild-Uploads
- **Next.js 15 + Tailwind CSS 4** im Frontend
- **html2canvas** für die PNG-Export-Funktion
- **Drei Pin-Typen:** Text, Bild, Link (mit OG-Vorschau)
- **Kollaborations-Features:** Echtzeit-Sync, Cursor-Präsenz, Board-Sperre

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day20-moodboard" showThumbnail=true >}}

**[MoodBoard Öffnen](https://vibe30-day20-moodboard.vercel.app)**

Erstell ein Board und teil den Link. Jeder kann darauf pinnen.

## Fazit Tag 20

Zwei Drittel der Challenge geschafft. Tag 10 war ein Miro-Klon ohne Kollaboration. Tag 20 ist ein Mood Board mit vollständiger Echtzeit-Synchronisation. Das fühlt sich nach Fortschritt an.

Die Firebase-Integration ist das, was dieses Projekt zum Laufen bringt. Anonyme Authentifizierung bedeutet null Hürden, um einem Board beizutreten. Firestore Echtzeit-Listener sorgen dafür, dass Pins sofort für alle erscheinen. Cursor-Präsenz bedeutet, dass du sehen kannst, dass jemand anderes tatsächlich mit dir da ist. Das sind die Features, die eine Solo-Leinwand in einen geteilten Raum verwandeln.

Was mich am meisten überrascht hat, waren die Link-Karten. Eine URL einfügen und eine schön formatierte Karte mit dem Branding der Seite, Beschreibung und Vorschaubild zu bekommen, hat die Boards sofort reichhaltiger wirken lassen. Dieses eine Feature hat es verwandelt — von "ein Ort für Haftnotizen" zu etwas, das man tatsächlich nutzen würde, um Referenzen für ein Projekt zu sammeln und zu teilen.

Sieben Aufgaben war ein enger Rahmen für eine kollaborative Echtzeit-App. Aber jede Aufgabe hat sauber auf der vorherigen aufgebaut, und das Endprodukt fühlt sich stimmig an. Nicht schlecht für Tag 20.

---

*Das ist Tag 20 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir, während ich 30 Projekte in 30 Tagen mit KI-gestützter Programmierung veröffentliche.*
