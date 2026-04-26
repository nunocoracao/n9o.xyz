---
title: "30 Tage Vibe Coding - Tag 21 - ChatRooms"
description: "Eine anonyme Echtzeit-Chaträume-App mit Firebase, Reaktionen, Dateifreigabe und Präsenzanzeigen."
summary: "Eine anonyme Echtzeit-Chaträume-App mit Firebase, Reaktionen, Dateifreigabe und Präsenzanzeigen."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-21", "react", "nextjs", "typescript", "firebase", "realtime"]
series: ["30 Days of Vibe Coding"]
series_order: 21
seriesOpened: false
date: 2026-04-26
draft: false
#type: "hidden"
---

Tag 21. Ich wollte etwas bauen, das sich lebendig anfühlt. Etwas, wo man andere Leute in Echtzeit Dinge tun sehen kann. Also gibt es heute anonyme Chaträume.

## Der Prompt

> "Baue eine Echtzeit-Chaträume-App. Anonyme Authentifizierung mit eigenen Nutzernamen, Raumerstellung, Live-Messaging, Reaktionen, Dateifreigabe, Tipp-Anzeigen und Online-Präsenz."

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day21-chatrooms.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

Dieses Projekt lief über 7 [Watchfire](https://watchfire.io)-Aufgaben, und die Reihenfolge ergab für eine Echtzeit-App wie diese viel Sinn:

1. **Firebase Realtime Database.** Das Fundament. Anonyme Authentifizierung einrichten, Datenbankregeln und das Datenmodell für Räume, Nachrichten und Nutzer. Das ist die Grundinstallation, von der alles andere abhängt.
2. **Raumerstellung.** Die Möglichkeit, neue Räume zu erstellen und bestehende zu durchsuchen. Eine Seitenleiste mit Raumnamen, Teilnehmeranzahl und Vorschauen der letzten Nachricht.
3. **Echtzeit-Messaging.** Das Kernfeature. Nachrichten erscheinen sofort für alle im Raum. Firebase-Listener übernehmen die Synchronisation, also kein Polling, kein Aktualisieren-Button. Du tippst, du sendest, alle sehen es.
4. **Reaktionen.** Tippe auf eine Nachricht, um darauf zu reagieren. Ein kleines Feature, aber es macht den Chat interaktiver als nur Textwände.
5. **Dateifreigabe.** Lade Dateien hoch und teile sie innerhalb eines Chatraums. Eine weitere Nützlichkeitsebene über einfache Textnachrichten hinaus.
6. **Präsenz und Tipp-Anzeigen.** Sieh, wer online ist, sieh, wer tippt. Das sind die Details, die eine Chat-App wie eine echte Chat-App wirken lassen statt wie ein Nachrichtenbrett.
7. **Mobile Feinschliff.** Responsive-Layout-Anpassungen, Touch-Ziele, sicherstellen, dass die gesamte Erfahrung auf einem Handybildschirm gut funktioniert.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

![Willkommensbildschirm](images/screenshot-01.png)

**Kinderleichtes Onboarding.** Du landest in der App, wählst einen Namen und bist drin. Kein E-Mail, kein Passwort, kein OAuth-Flow. Firebase Anonymous Auth kümmert sich im Hintergrund um die Identität. Du tippst einfach einen Namen ein und klickst auf "Let's go."

![Raumliste und Willkommenszustand](images/screenshot-03.png)

**Ein sauberer Raum-Browser.** Die linke Seitenleiste zeigt alle verfügbaren Räume mit Teilnehmeranzahl. Es gibt einen "Create Room"-Button oben und eine Suchleiste zum Filtern von Räumen. Der Standardzustand zeigt eine Willkommensnachricht, die dich auffordert, einen Raum auszuwählen oder einen neuen zu erstellen.

![Chatraum mit Nachrichten](images/screenshot-04.png)

**Echtzeit-Messaging, das einfach funktioniert.** Nachrichten erscheinen sofort. Jede Nachricht zeigt den Namen des Absenders mit einem farbigen Avatar, einen Zeitstempel und den Nachrichteninhalt. Der untere Bildschirmbereich zeigt, wer gerade im Raum ist, und ein Nachrichtenfeld mit Senden-Button. Die Online-Anzahl sitzt in der oberen rechten Ecke.

![Aktive Unterhaltung](images/screenshot-05.png)

**Tipp-Anzeigen und Präsenz.** Du kannst sehen, wer online ist und wer gerade aktiv tippt. Diese kleinen Details sind es, die eine Chat-App von einer Kommentarsektion unterscheiden. Das Ganze fühlt sich responsiv und lebendig an.

**Das dunkle Theme sieht super aus.** Der dunkle Marineblauhintergrund mit lila Akzenten gibt dem Ganzen ein modernes Chat-App-Gefühl. Es sieht nicht aus wie ein Schulprojekt. Die Typografie ist sauber, die Abstände stimmen, und die Farbcodierung für verschiedene Nutzer macht Unterhaltungen leicht verfolgbar.

## Die Bug Reports

Firebase-Echtzeit-Apps neigen dazu, eine Kategorie von Bugs zu haben, die nur mit mehreren Nutzern oder bei Wiederverbindung auftreten. Für dieses Projekt haben die Watchfire-Aufgaben die Progression sauber genug gehandhabt, sodass ich auf keine Showstopper gestoßen bin. Das Präsenzsystem und die Tipp-Anzeigen funktionierten beim ersten Deploy, was mich ehrlich gesagt überrascht hat. Diese Features brauchen normalerweise ein paar Runden Debugging rund um Edge Cases wie Tab-Wechsel und Netzwerkabbrüche.

## Die Zahlen

- **7 Watchfire-Aufgaben** von Datenbank-Setup bis Mobile-Feinschliff
- **Firebase Realtime Database** für Nachrichtensynchronisation ohne Latenz
- **Anonyme Authentifizierung** für reibungsloses Onboarding
- **Reaktionen, Dateifreigabe, Tipp-Anzeigen, Präsenz** alles schrittweise hinzugefügt

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day21-chatrooms" showThumbnail=true >}}

**[ChatRooms Öffnen](https://vibe30-day21-chatrooms.vercel.app)**

Wähl einen Namen und fang an zu chatten. Erstell einen Raum oder tritt einem bestehenden bei.

## Fazit Tag 21

Echtzeit ist schwer. Oder zumindest war es das mal. WebSocket-Verbindungen einrichten, Verbindungsstatus verwalten, Wiederverbindungen handhaben, Daten zwischen Clients synchronisieren, mit Race Conditions umgehen. Das ist eine Menge Infrastrukturarbeit, bevor man überhaupt zu den eigentlichen Chat-Features kommt.

Firebase abstrahiert das meiste davon, und die KI wusste genau, wie man es benutzt. Die Progression von "Datenbank existiert" zu "Leute chatten mit Reaktionen und Tipp-Anzeigen" passierte über 7 Aufgaben hinweg, ohne dass ich über Verbindungsmanagement nachdenken musste.

Was ich an diesem Projekt interessant finde, ist, dass anonyme Authentifizierung die richtige Entscheidung war. Für eine lockere Chat-App ist es ein Conversion-Killer, Leute zu zwingen, Konten zu erstellen. Wähl einen Namen und los. Firebase kümmert sich um die Identität, der Nutzer muss nie darüber nachdenken. Das ist eine Produktentscheidung, die die KI korrekt getroffen hat, ohne dass ich sie spezifiziert habe.

Einundzwanzig Tage geschafft. Wir sind auf der Zielgeraden und die Projekte werden immer interaktiver.

---

*Dies ist Tag 21 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Verfolge die Serie, während ich 30 Projekte in 30 Tagen mit KI-gestützter Programmierung veröffentliche.*
