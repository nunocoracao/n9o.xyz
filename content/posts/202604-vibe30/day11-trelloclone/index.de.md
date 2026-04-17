---
title: "30 Days of Vibe Coding - Tag 11 - Treelo"
description: "Ein vollausgestattetes Kanban-Board im Trello-Stil mit Drag-and-Drop, Labels, Checklisten, Fälligkeitsdaten, Kalenderansicht und Aktivitätsverfolgung."
summary: "Ein vollausgestattetes Kanban-Board im Trello-Stil mit Drag-and-Drop, Labels, Checklisten, Fälligkeitsdaten, Kalenderansicht und Aktivitätsverfolgung."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-11", "typescript", "nextjs", "kanban", "productivity"]
series: ["30 Days of Vibe Coding"]
series_order: 11
seriesOpened: false
date: 2026-04-16
draft: false
#type: "hidden"
---

Tag 11. Ich habe nach einem Trello-Klon gefragt. Kanban-Boards, Drag and Drop, Kartendetails, das volle Programm.

## Der Prompt

> "Build a Trello-style kanban board app with boards, lists, cards, and drag-and-drop"

Ich habe es Treelo genannt, weil ich super kreativ mit Namen bin.

## Wie Es Gebaut Wurde

Watchfire hat das in 18 Aufgaben aufgeteilt. Die Kernfunktionen kamen zuerst: Boards, Listen, Karten und Drag-and-Drop. Dann ging es weiter. Labels. Fälligkeitsdaten. Ein Kartendetail-Modal. Benutzerdefinierte Board-Hintergründe. Suche und Filterung. Kartenarchivierung. Mehrfachauswahl mit Massenoperationen. Ein Aktivitäts-Feed. Eine Kalenderansicht. Und dann am Ende eine Performance-Optimierung, um alles flüssig zu halten.

Das sind eine Menge Features für einen einzigen Prompt. Die meisten davon habe ich nicht explizit angefragt. Der ursprüngliche Prompt war nur Boards, Listen, Karten und Drag-and-Drop. Alles andere war Watchfire, das entschied "ein Kanban-Board sollte auch diese Dinge haben" und sie einfach gebaut hat.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

![Board-Ansicht mit Listen und Karten](images/screenshot-01.png)

**Es sieht aus wie Trello.** Das Layout, das Kartenstyling, der blaue Hintergrund, die Listenspalten. Wenn man die Augen zusammenkneift, könnte es als das Original durchgehen. Es gibt eine obere Leiste mit Suche, Aktivität, Kalender und Filterbuttons. Listen zeigen die Kartenanzahl. Karten zeigen Labels und Fälligkeitsdatum-Badges.

![Boards-Startseite](images/screenshot-02.png)

**Mehrere Boards.** Es gibt eine Startseite mit kürzlich angesehenen Boards und einem "Create new board"-Button. Es verfolgt, welche Boards du kürzlich besucht hast. Einfach aber funktional.

![Kartendetail-Modal](images/screenshot-03.png)

**Das Kartendetail-Modal ist überraschend vollständig.** Klick auf eine beliebige Karte und du bekommst ein komplettes Modal mit Labels, einem Fälligkeitsdatum-Picker, einer Checkliste mit Fortschrittsverfolgung, einem Beschreibungsfeld, Kommentaren und einem Aktivitätsprotokoll. Auf der rechten Seite gibt es eine Reihe von Aktionen: verschieben, kopieren, archivieren. Das ist die Art von Sache, die von Hand Tage dauern würde, um sie richtig zu bauen.

![Label-Filterpanel](images/screenshot-04.png)

**Labels funktionieren tatsächlich.** Du kannst farbcodierte Labels an Karten zuweisen und dann danach filtern. Das Filterpanel gleitet von der rechten Seite herein. Karten auf dem Board zeigen ihre Label-Farben als kleine farbige Streifen oben an.

![Aktivitäts-Feed](images/screenshot-05.png)

**Es gibt einen Aktivitäts-Feed.** Jede Aktion wird protokolliert. Karte erstellt, Karte verschoben, Label hinzugefügt, Checkliste abgeschlossen. Es zeigt Zeitstempel und beschreibt, was passiert ist. Das ist eines dieser Features, das ein Spielzeug von etwas Nutzbarem trennt. Man kann tatsächlich nachverfolgen, was auf einem Board passiert ist.

![Kalenderansicht](images/screenshot-06.png)

**Eine Kalenderansicht.** Wechsle von der Board-Ansicht zu einem Kalender und sieh alle deine Karten mit Fälligkeitsdaten auf einem Monatsraster angeordnet. Karten ohne Fälligkeitsdaten erscheinen in einer Seitenleiste. Es ist eine wirklich nützliche Art zu sehen, was als Nächstes kommt.

![Kartendetail vom Kalender](images/screenshot-07.png)

**Kartenmodals funktionieren auch vom Kalender aus.** Klick auf eine Karte im Kalender und dasselbe Detail-Modal öffnet sich. Fälligkeitsdaten, Labels, alles ist von jeder Ansicht aus zugänglich.

![Benutzerdefinierter Board-Hintergrund](images/screenshot-08.png)

**Benutzerdefinierte Board-Hintergründe.** Du kannst den Board-Hintergrund auf verschiedene Farben und Verläufe ändern. Der Dark Mode wird ebenfalls vollständig unterstützt. Die gesamte App respektiert deine Theme-Einstellung.

## Was Sonst Noch Drin Ist

Einige Dinge, die sich in Screenshots nicht gut zeigen, aber erwähnenswert sind:

- **Drag-and-Drop** mit @dnd-kit. Du kannst Karten innerhalb einer Liste neu anordnen, sie zwischen Listen verschieben und die Listen selbst neu anordnen.
- **Mehrfachauswahl.** Halte Shift oder Ctrl gedrückt, um mehrere Karten auszuwählen und sie dann in Masse zu verschieben, archivieren oder mit Labels zu versehen.
- **Rückgängig/Wiederholen.** Volle Verlaufsunterstützung mit Ctrl+Z und Ctrl+Shift+Z.
- **Tastaturkürzel.** Drücke N um eine Karte hinzuzufügen, F zum Suchen, B um zu den Boards zurückzugehen, Q um nach Fälligkeitsdatum zu filtern und ? um alle Kürzel zu sehen.
- **Checklisten** in Karten mit einem Fortschrittsbalken.
- **Archivieren und Wiederherstellen.** Karten und Listen können archiviert werden, ohne gelöscht zu werden.
- **Local Storage Persistenz.** Alles wird im Browser gespeichert. Schließ den Tab, komm zurück, deine Boards sind noch da.

## Die Bug Reports

Ehrlich gesagt, dieser hier war ziemlich sauber. Die Hauptprobleme waren Drag-and-Drop-Grenzfälle (eine Karte ganz unten in einer Liste abzulegen registrierte manchmal nicht) und die Kalenderansicht aktualisierte sich anfangs nicht, wenn man ein Fälligkeitsdatum vom Modal aus änderte. Kleine Sachen. Nichts Strukturelles.

## Die Zahlen

- **18 Watchfire-Aufgaben** vom Kern-Kanban bis zur Performance-Optimierung
- **Next.js + TypeScript + Tailwind CSS** Stack
- **@dnd-kit** für Drag-and-Drop
- **Vollständige Tastaturnavigation** mit Kürzel-Overlay
- **Zwei Ansichten:** Board und Kalender
- **Alle Daten in localStorage** ohne Backend nötig

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day11-trelloclone" showThumbnail=true >}}

**[Probier Treelo aus](https://vibe30-day11-trelloclone.vercel.app)**

Erstell ein Board, füg ein paar Listen hinzu, zieh ein paar Karten herum. Es macht mehr Spaß als es sollte.

## Fazit Tag 11

Ein Kanban-Board klingt an der Oberfläche einfach, aber es gibt so viele kleine Interaktionen, die funktionieren müssen: Drag-Ziele, Modal-Zustand, Filterung, Undo-Verlauf, Konsistenz zwischen Ansichten. Die Tatsache, dass all das aus einem Prompt und 18 automatisierten Aufgaben kam, ist für mich immer noch verrückt.

Ich komme immer wieder zum gleichen Gedanken zurück: Ich hätte das nicht an einem Tag alleine bauen können. Allein das Drag-and-Drop hätte mich einen ganzen Tag gekostet, mit Bibliotheken und Grenzfällen zu kämpfen. Stattdessen bekam ich einen funktionierenden Trello-Klon mit einer Kalenderansicht, einem Aktivitäts-Feed, Massenoperationen und Tastaturkürzeln. Und ich habe meine Zeit damit verbracht, es zu testen und ein paar Bug Reports zu schreiben.

Die Lücke zwischen "Ich will ein Kanban-Board" und "Hier ist ein Kanban-Board" wird immer kleiner.

---

*Das ist Tag 11 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Verfolge mit, wie ich 30 Projekte in 30 Tagen mit KI-unterstützter Programmierung veröffentliche.*
