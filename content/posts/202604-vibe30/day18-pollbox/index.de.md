---
title: "30 Tage Vibe Coding - Tag 18 - PollBox"
description: "Eine Echtzeit-Abstimmungs-App mit animierten Live-Ergebnissen, betrieben von Firebase und an einem Tag gebaut."
summary: "Eine Echtzeit-Abstimmungs-App mit animierten Live-Ergebnissen, betrieben von Firebase und an einem Tag gebaut."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-18", "nextjs", "firebase", "react", "typescript"]
series: ["30 Days of Vibe Coding"]
series_order: 18
seriesOpened: false
date: 2026-04-23
draft: false
#type: "hidden"
---

Tag 18. Ich wollte etwas Kollaboratives. Etwas, wo man einen Link teilen kann und sofort sieht, wie andere Leute damit interagieren. Eine Echtzeit-Umfrage-App schien genau das Richtige zu sein.

## Der Prompt

> "Baue eine Echtzeit-App zum Erstellen und Abstimmen von Umfragen. Nutzer sollen Umfragen mit mehreren Optionen erstellen, sie per Link teilen und die Ergebnisse live mit animierten Balkendiagrammen aktualisieren sehen können."

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day18-pollbox.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

[Watchfire](https://watchfire.io) hat das in 31 Aufgaben aufgeteilt. Das ist viel für eine Umfrage-App, aber die Feature-Liste wuchs schnell, sobald man anfängt, über all die kleinen Dinge nachzudenken, die ein Abstimmungserlebnis vollständig machen.

Der Kern kam zuerst: Firebase-Echtzeit-Datenbankintegration, Umfrage-Erstellungsflow, Abstimmungsmechaniken und die animierte Ergebnisansicht. Dann kamen Schicht für Schicht alle anderen Dinge dazu. Kategorien und Vorlagen für schnelle Umfrageerstellung. Barrierefreiheitsverbesserungen. Lade-Skeletons, damit die App keinen leeren Inhalt flasht. Eine ordentliche 404-Seite. Und natürlich die übliche Runde an Deployment-Fixes am Ende.

Die Firebase-Integration war das Rückgrat des Ganzen. Firestore kümmert sich um die Persistenz, Echtzeit-Listener pushen Abstimmungs-Updates an jeden verbundenen Client, und anonyme Authentifizierung bedeutet, dass niemand ein Konto erstellen muss, nur um über etwas abzustimmen.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

Der Erstellungsflow ist überraschend vollständig für einen Ein-Tages-Build.

![Umfrage-Erstellungsformular](images/screenshot-02.png)

Man bekommt einen Titel, eine Beschreibung, Kategorie-Tags, mehrere Optionen und sogar einen Farbthema-Picker. Es gibt auch Unterstützung für Coverbilder, geplante Umfragen, Passwortschutz und Ablaufdaten. Unten gibt es Vorlagen für gängige Umfragetypen wie "Ja oder Nein", "Bewerte 1-5" und "Team-Abstimmung", damit man das Setup komplett überspringen kann.

![Erstellungsoptionen mit Themes und Vorlagen](images/screenshot-03.png)

Die Ergebnisseite ist wo es richtig Spaß macht. Nachdem man abgestimmt hat, animieren sich die Balken rein, die Gewinneroption hebt sich hervor und Konfetti explodiert über den Bildschirm.

![Live-Ergebnisse mit Konfetti](images/screenshot-05.png)

Jede Umfrageseite hat auch Emoji-Reaktionen, einen Kommentarbereich, Teilen-Links mit QR-Code-Generierung und Exportoptionen für sowohl CSV-Daten als auch Bilder. Das ist viel Oberfläche.

![Team-Abstimmungsergebnisse](images/screenshot-06.png)

![Bewertungsumfrage-Ergebnisse](images/screenshot-07.png)

Das "Meine Umfragen"-Dashboard behält den Überblick über alles, was man erstellt hat, mit Suche und Kategoriefiltern. Jede Umfrage zeigt ihren Status, die Anzahl der Optionen, die Anzahl der Stimmen und hat einen Duplizieren-Button für schnelle Wiederverwendung.

![Meine Umfragen Dashboard](images/screenshot-01.png)

## Die Bug Reports

Die Deployment-Runde war der größte Schmerzpunkt. Die Firebase-Konfiguration brauchte Anpassungen für die Produktion, und es gab die üblichen Vercel-spezifischen Probleme zu lösen. Nichts Ungewöhnliches für ein Projekt, das auf externe Dienste angewiesen ist. Die Durchsetzung von einer Stimme pro Nutzer brauchte Firestore-Transaktionen, um korrekt zu funktionieren, was einige Iterationen erforderte, bis es richtig lief.

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day18-pollbox" showThumbnail=true >}}

**[Probier PollBox aus](https://vibe30-day18-pollbox.vercel.app)**

Erstelle eine Umfrage und teile den Link. Kein Konto nötig.

## Fazit Tag 18

Die Feature-Liste hier ist dicht. Eine Echtzeit-Abstimmungs-App mit Firebase, animierten Ergebnissen, QR-Teilen, Emoji-Reaktionen, Kommentaren, CSV-Export, Bild-Export, Vorlagen, Kategorien, Passwortschutz und einem Dashboard. Das ist eine Produktions-Feature-Liste, die in einen einzigen Tag gequetscht wurde.

Der Echtzeit-Aspekt ist das, was es lebendig anfühlen lässt. Man teilt einen Link, jemand stimmt ab und die Balken bewegen sich auf dem eigenen Bildschirm. Kein Neuladen nötig. Firebases Echtzeit-Listener plus Framer Motion-Animationen lassen das Ganze responsiv und poliert wirken, auf eine Art, die statische Ergebnisse nie könnten.

31 Watchfire-Aufgaben, und die Tiefe zeigt sich.

---

*Dies ist Tag 18 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mit, während ich 30 Projekte in 30 Tagen mit KI-gestützter Programmierung shippe.*
