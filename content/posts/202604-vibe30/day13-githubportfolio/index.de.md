---
title: "30 Tage Vibe Coding - Tag 13 - GitFolio"
description: "Ein GitHub-Portfolio-Generator, der jeden Benutzernamen in eine ansprechende Portfolio-Seite mit 5 Templates und 7 Farbthemen verwandelt."
summary: "Ein GitHub-Portfolio-Generator, der jeden Benutzernamen in eine ansprechende Portfolio-Seite mit 5 Templates und 7 Farbthemen verwandelt."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-13", "github", "portfolio", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 13
seriesOpened: false
date: 2026-04-18
draft: false
#type: "hidden"
---

Tag 13. Was wäre, wenn du jedes GitHub-Profil in eine gut aussehende Portfolio-Seite verwandeln könntest, ohne eine einzige Zeile Code zu schreiben?

## Der Prompt

> "Baue einen GitHub-Portfolio-Generator. Gib einen Benutzernamen ein, bekomme ein poliertes Portfolio mit Statistiken, Repos, Sprachen und Aktivität. Mehrere Templates, mehrere Farbthemen, Export als HTML."

## Wie Es Gebaut Wurde

Watchfire hat das in 19 Aufgaben aufgeteilt. Die Kernarbeit begann mit der GitHub-API-Integration und dem Abrufen aller Daten, die man in einem Portfolio haben möchte: Profilinformationen, Repos, Beitragsaktivität, Sprachen, Organisationen. Von dort aus wurde das Template-System, die Theme-Engine und alle Export- und Sharing-Features aufgebaut.

Die Aufgabenliste deckte viel ab: fünf Portfolio-Templates (Minimal, Developer Card, Creative/Bento Grid, Corporate/Showcase und ein Hacker/Terminal-Theme), sieben Farbthemen, benutzerdefinierte Akzentfarben, Druck- und PDF-Modus, automatisch erkannte Skills, Deployment-Anleitungen, README-Export und ein Generator für Social-Share-Karten. Es ist ein überraschend umfangreiches Feature-Set für etwas, das komplett im Browser ohne Backend läuft.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

Die Landing Page sieht schon poliert aus. Dark Mode als Standard, saubere Typografie, ein Drei-Schritte-Erklärer und eine Vorschau aller Templates und Themes direkt auf der Startseite.

![Landing Page](images/screenshot-01.png)

![Drei Schritte zu deinem Portfolio](images/screenshot-02.png)

**Fünf Templates, jedes mit einer eigenen Persönlichkeit.** Showcase ist die Vollversion mit einem Bento-Grid-Layout. Developer Card ist kompakt und auf den Punkt. Bento Grid setzt auf den asymmetrischen Karten-Look. Minimal reduziert alles auf Typografie. Und Terminal rendert das Ganze als Kommandozeilen-Interface, komplett mit ASCII-Art und Monospace-Schriften.

![Template- und Theme-Auswahl](images/screenshot-03.png)

**Sieben Farbthemen plus benutzerdefinierte Akzentfarben.** Midnight, Ocean, Forest, Sunset, Rose, Slate und eine benutzerdefinierte Option, bei der du deine eigene Akzentfarbe wählst. Die Landing Page hat sogar eine Light-Mode-Variante.

![Landing im Light Mode](images/screenshot-04.png)

**Die generierten Portfolios sind vollgepackt mit Daten.** Statistiken mit animierten Zählern, Beitrags-Heatmap, Sprachenverteilung mit gestapeltem Balkendiagramm, Top-Repositories, aktuelle Aktivität, Organisationen, Social Links. Alles von der öffentlichen GitHub-API abgerufen, ganz ohne Authentifizierung.

![Showcase-Template mit Statistiken](images/screenshot-05.png)

![Minimal-Template](images/screenshot-06.png)

**Das Anpassungs-Panel ist gründlich.** Du kannst einzelne Abschnitte ein- und ausschalten, Themes und Templates live wechseln, den Bio-Text überschreiben und Änderungen sofort sehen. Alles passiert clientseitig, also gibt es kein Laden zwischen den Wechseln.

![Anpassungs-Panel](images/screenshot-07.png)

**Das Bento-Grid-Template sieht großartig aus.** Das war das, was mich überrascht hat. Es ordnet Profilinformationen, Statistiken, vorgestellte Repos, aktuelle Aktivität und Sprachen in einem asymmetrischen Karten-Grid an, das sich wie ein echtes Design-Projekt anfühlt.

![Bento-Grid-Template](images/screenshot-08.png)

**Das Terminal-Template ist der Wahnsinn.** Es rendert dein gesamtes Portfolio, als würdest du Befehle in einem Terminal ausführen. Profilinformationen erscheinen als Fetch-Style-Output, Statistiken werden als CLI-Antworten angezeigt, Repos listen sich als Verzeichniseinträge. Es hat sogar einen blinkenden Cursor.

![Terminal-Template](images/screenshot-09.png)

**Eingebaute Deployment-Anleitungen.** Sobald du dein Portfolio-HTML exportiert hast, führt dich ein Deploy-Modal Schritt für Schritt durch das Hosting auf Netlify Drop, GitHub Pages oder Vercel. Schritt-für-Schritt-Anleitungen mit Links zu jeder Plattform. Das ist die Art von Feinschliff, die eine Demo in etwas verwandelt, das Leute tatsächlich nutzen können.

![Deploy-Modal - Netlify](images/screenshot-10.png)

![Deploy-Modal - GitHub Pages](images/screenshot-11.png)

![Deploy-Modal - Vercel](images/screenshot-12.png)

## Die Bug-Reports

Die öffentliche GitHub-API begrenzt dich auf 60 Anfragen pro Stunde ohne Authentifizierung, und jede Portfolio-Generierung verbraucht etwa 4 Anfragen. Beim Testen bin ich ein paar Mal ans Rate-Limit gestoßen, als ich Portfolios schnell hintereinander neu generiert habe. Kein wirklicher Bug, nur eine Einschränkung, die man kennen sollte. Die App geht elegant damit um und sagt dir, dass du warten sollst.

Das README erwähnt 6 Themes und 4 Templates, aber die eigentliche App kommt mit 5 Templates und 7 Themes. Der Code ist über die Dokumentation hinausgewachsen, was irgendwie die Geschichte dieser ganzen Challenge ist.

## Die Zahlen

- **5 Portfolio-Templates** mit unterschiedlichen Layouts
- **7 Farbthemen** plus benutzerdefinierte Akzentfarben
- **19 Watchfire-Aufgaben** von API-Integration bis Deployment-Anleitungen
- **Kein Backend** nötig, alles läuft clientseitig
- **4 GitHub-API-Aufrufe** pro Portfolio-Generierung
- **Exportformate:** HTML-Download, Zwischenablage-Kopie, teilbarer Link, README und Social-Share-Karte

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day13-githubportfolio" showThumbnail=true >}}

**[Generiere Dein Portfolio](https://vibe30-day13-githubportfolio.vercel.app)**

Gib einfach einen beliebigen öffentlichen GitHub-Benutzernamen ein und wähle ein Template.

## Fazit Tag 13

Dieser hier füllt eine echte Lücke. Die meisten Developer-Portfolio-Tools erfordern entweder, dass du ein ganzes Projekt aufsetzt, oder binden dich an ein bestimmtes Design. GitFolio nimmt einfach einen Benutzernamen und gibt dir eine eigenständige HTML-Datei, die du überall hosten kannst. Die Template-Vielfalt ist solide, das Terminal-Theme allein ist schon einen Versuch wert, und die Deployment-Anleitungen beseitigen den letzten Reibungspunkt zwischen Portfolio-Generierung und dem tatsächlichen Online-Stellen.

Die Tatsache, dass es komplett im Browser läuft, ohne Auth, ohne Datenbank und ohne Tracking, ist ein nettes Detail. Du könntest diese URL jemandem geben, der noch nie ein Terminal angefasst hat, und diese Person hätte in fünf Minuten eine Portfolio-Seite online.

Ob die bessere Output-Qualität daran liegt, dass ich besser im Prompting werde, oder daran, dass die Tools besser darin werden zu erkennen, was ich will, bin ich mir nicht sicher. Wahrscheinlich beides.

---

*Das ist Tag 13 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mit, während ich 30 Projekte in 30 Tagen mit KI-unterstützter Programmierung shippe.*
