---
title: "30 Tage Vibe Coding - Tag 29 - n0ti0n"
description: "Ein von Notion inspirierter Block-Editor mit verschachtelten Seiten, Slash-Befehlen und Echtzeit-Synchronisation via Firebase Firestore"
summary: "Ein von Notion inspirierter Block-Editor mit verschachtelten Seiten, Slash-Befehlen und Echtzeit-Synchronisation via Firebase Firestore"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-29"]
series: ["30 Days of Vibe Coding"]
series_order: 29
seriesOpened: false
date: 2026-05-04
draft: false
#type: "hidden"
---

Tag 29. Ein Tag noch nach diesem. Also hab ich Notion geklont.

Nicht alles davon. Aber die Kernerfahrung: ein Block-Editor mit verschachtelten Seiten, Slash-Befehlen und einer sauberen Seitenleiste zur Navigation. Das Ergebnis ist n0ti0n. Das Frontend war schnell zusammen. Das Deployment war eine andere Geschichte.

## Der Prompt

> "Baue einen von Notion inspirierten Block-Editor mit verschachtelten Seiten, Slash-Befehlen, Rich-Text-Formatierung, Code-Blöcken mit Syntax-Highlighting, Tabellen, Aufgabenlisten und einer Seitenleiste zur Navigation. Verwende Tiptap für den Editor, Firebase Firestore für Echtzeit-Persistenz, anonyme Authentifizierung damit jeder es ausprobieren kann, und Dark Mode."

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://blocknotes-lime.vercel.app)
{{< /alert >}}

## Was Ich Bekommen Habe

Der Editor verwendet Tiptap 3, ein fantastisches blockbasiertes Editor-Framework, und es gab mir fast alles was ich wollte direkt out of the box mit den richtigen Erweiterungen. Du bekommst Slash-Befehle, die erscheinen wenn du `/` tippst, mit denen du Überschriften, Listen, Code-Blöcke, Tabellen, Aufgabenlisten, Trennlinien und sogar verschachtelte Seiten einfügen kannst. Wähle beliebigen Text aus und ein Bubble-Menü erscheint mit Inline-Formatierungsoptionen wie Fett, Kursiv, Durchgestrichen, Hervorhebung und Links.

![Willkommensseite mit Seitenleisten-Navigation und Funktionsübersicht](images/screenshot-02.png)

Die Seitenleiste ist wo die verschachtelten Seiten wirklich glänzen. Du kannst Seiten in Seiten erstellen, und die Baumstruktur zeigt sich im linken Panel mit einklappbaren Abschnitten. Es gibt eine Such-/Befehlspalette (Cmd+K), mit der du schnell zwischen Seiten springen, den hellen Modus umschalten oder neue Seiten erstellen kannst.

![Seitenleisten-Navigation mit einklappbarem Seitenbaum](images/screenshot-05.png)

Es gibt auch eingebaute Vorlagen. Wenn du eine neue Seite erstellst, kannst du aus vorgefertigten Vorlagen wie Reiseplänen, Meeting-Notizen oder Projektplänen wählen. Jede Vorlage kommt mit einer nützlichen Struktur vorausgefüllt.

![Vorlagen-Auswahl für neue Seiten](images/screenshot-06.png)

Das Slash-Befehlsmenü selbst ist sauber und funktional. Tippe `/` irgendwo im Editor und du bekommst ein Dropdown mit allen Blocktypen: Überschriften, Text, Aufzählungslisten, nummerierte Listen, Aufgabenlisten, Code-Blöcke, Tabellen, Blockzitate, Trennlinien, Bilder und verschachtelte Seiten.

![Slash-Befehlsmenü mit Blocktyp-Optionen](images/screenshot-10.png)

Seiten können per Toggle ins Web geteilt werden, und es gibt Exportoptionen für Markdown und JSON. Das Ganze ist auch responsiv und funktioniert gut auf dem Handy.

![Teilen-ins-Web-Funktionalität](images/screenshot-14.png)

![Exportoptionen inklusive Markdown und JSON](images/screenshot-16.png)

![Mobile Ansicht des Editors](images/screenshot-17.png)

Alles synchronisiert sich in Echtzeit über Firebase Firestore mit anonymer Authentifizierung, sodass jeder die App öffnen und sofort losschreiben kann ohne ein Konto zu erstellen.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Die Firestore-Saga

Hier ist die Sache an diesem Projekt, über die es sich wirklich lohnt im Detail zu reden. Der Editor selbst kam relativ problemlos zusammen. Tiptap ist gut dokumentiert, die Erweiterungen sind modular, und Claude hat die Integration ohne viel Händchenhalten geschafft. Die echte Herausforderung war, Firestore in Produktion richtig zum Laufen zu bringen.

Das Git-Log dieses Projekts ist wild. Es gibt Dutzende von Commits nur zum Debuggen von Firestore-Deployment-Problemen. Long-Polling-Konfiguration, Cache-Einstellungen, REST-API-Fallbacks, Trimmen von Umgebungsvariablen, Verbindungs-Timeout-Handling... es war eine Parade von kleinen, schmerzhaften Problemen, die erst nach dem Deploy auf Vercel aufgetaucht sind.

Lokal hat alles perfekt funktioniert. Aber in Produktion hingen Firestore-Verbindungen, Daten wurden nicht geladen, oder die App hat stillschweigend beim Synchronisieren versagt. Jeder Fix führte zur Entdeckung des nächsten Problems. Whitespace aus Umgebungsvariablen trimmen hat ein Problem behoben. Von WebSocket auf Long Polling umstellen hat ein anderes behoben. Die Cache-Konfiguration anpassen hat ein drittes behoben. Es war eine klassische "Funktioniert auf meinem Rechner"-Situation verteilt über wahrscheinlich 15-20 Commits.

Das ist ehrlich gesagt einer der realistischsten Teile der ganzen Challenge. Die UI zu bauen ist der spaßige Teil. Sie tatsächlich in Produktion mit einem echten Backend zum Laufen zu bringen ist wo die Zeit hingeht. Und beim KI-gestützten Coding ist die Debugging-Schleife interessant, weil Claude schnell Fixes vorschlagen kann, aber du musst trotzdem deployen, testen und iterieren. Der Feedback-Zyklus ist langsamer als lokale Entwicklung, egal wie schnell die KI ist.

[Watchfire](https://watchfire.io) hat die Deployment-Probleme fast sofort erkannt, was mir zumindest erspart hat, sie Tage später durch Nutzerberichte zu entdecken.

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day29-n0ti0n" showThumbnail=true >}}

**[Live Demo](https://blocknotes-lime.vercel.app)**

![Editor mit Notizen, Listen, Aufgaben-Elementen und Code-Blöcken](images/screenshot-01.png)

![Formatierungsleiste bei Textauswahl](images/screenshot-03.png)

![Befehlspalette für schnelle Navigation](images/screenshot-13.png)

![Reiseplan-Vorlage im hellen Modus](images/screenshot-15.png)

## Fazit Tag 29

Ein Block-Editor mit echter Persistenz, verschachtelten Seiten und einer sauberen UI ist etwas, das Leute wirklich brauchen. Tiptap 3 hat auf der Editor-Seite viel Schwerstarbeit geleistet, und Firebase hat das Backend übernommen, aber alles zusammenzustecken und besonders das Deployment zum Funktionieren zu bringen hat echten Aufwand gekostet. Die Firestore-Debugging-Saga ist eine gute Erinnerung daran, dass der schwierige Teil beim Ausliefern von Software selten der Feature-Code ist. Es ist die Infrastruktur, die Grenzfälle und die Dinge, die nur in Produktion kaputtgehen. Noch ein Tag.

---

*Dies ist Tag 29 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir während ich 30 Projekte in 30 Tagen mit KI-gestütztem Coding ausliefere.*
