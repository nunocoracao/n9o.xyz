---
title: "30 Tage Vibe Coding - Tag 9 - TaskTUI"
description: "Ein terminalbasiertes persönliches Kanban-Board mit Vim-Navigation und einem MCP-Server für Claude Code Integration, gebaut mit Go und Bubble Tea."
summary: "Ein terminalbasiertes persönliches Kanban-Board mit Vim-Navigation und einem MCP-Server für Claude Code Integration, gebaut mit Go und Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-09", "go", "tui", "terminal", "kanban", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 9
seriesOpened: false
date: 2026-04-14
draft: false
#type: "hidden"
---

Tag 9. Ich wollte ein Task-Board, das im Terminal lebt und das Claude auch lesen und beschreiben kann.

## Der Prompt

> "Baue ein Terminal-Kanban-Board in Go mit einem MCP-Server, damit Claude Aufgaben verwalten kann."

Das war der Ausgangspunkt. [Watchfire](https://watchfire.io) hat daraus 13 Aufgaben gemacht, die den gesamten Umfang abdecken: Drei-Spalten-Board mit Vim-Navigation, Bubble Tea UI, JSON-Persistenz, ein File Watcher für automatische Aktualisierung, ein MCP-Server-Modus für KI-Integration, CLI-Befehle für schnelles Aufgabenmanagement und GoReleaser für die Distribution.

## Wie Es Gebaut Wurde

Die 13 Aufgaben haben es vom Nichts bis zum fertig verpackten Release gebracht. Die ersten neun Aufgaben bauten den Kern des Kanban-Boards auf: das Board-Modell, Karten-Rendering, Drag-and-Drop zwischen Spalten und das gesamte Lip Gloss Styling, damit es im Terminal gut aussieht. Aufgabe 9 fügte den MCP-Server-Modus hinzu. Aufgabe 10 brachte die Echtzeit-Dateiüberwachung. Die letzten drei kümmerten sich um CLI-Befehle, GoReleaser-Konfiguration für plattformübergreifende Binärdateien und das README.

Die Architektur teilt sich sauber in Pakete auf: `task` für das Domain-Modell, `storage` für JSON-Persistenz, `watcher` für Dateisystem-Überwachung, `mcp` für den MCP-Server und `cli` für alle Cobra-Befehle. Der Einstiegspunkt routet zwischen drei Modi je nachdem, wie man es aufruft: TUI-Modus (Standard), CLI-Modus (mit Unterbefehlen wie `add` oder `list`) und MCP-Server-Modus (mit `tasktui mcp`).

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Dabei Rauskam

![TaskTUI Kanban-Board mit drei Spalten](images/screenshot-01.png)

**Das Kanban-Board sieht im Terminal großartig aus.** Drei Spalten mit farbcodierten Überschriften: Rot/Rosa für Todo, Orange/Gelb für Doing, Grün für Done. Jede Karte zeigt Titel und Beschreibung der Aufgabe. Die ausgewählte Karte bekommt einen hervorgehobenen Rahmen. Man navigiert mit `h/l` zum Spaltenwechsel und `j/k` zum Bewegen zwischen Aufgaben innerhalb einer Spalte.

![Neue Aufgabe mit dem Popup-Dialog hinzufügen](images/screenshot-02.png)

**Inline-Aufgabenerstellung.** Drücke `n` und ein Modal erscheint, in dem du Titel und Beschreibung der Aufgabe eingibst. Sie landet direkt in der Todo-Spalte. Drücke `e`, um eine bestehende Aufgabe auf die gleiche Weise zu bearbeiten.

![Neue Aufgabe mit Titel- und Beschreibungsfeldern erstellen](images/screenshot-03.png)

**Der Eingabedialog hat ordentliche Feldnavigation.** Tab zwischen Titel und Beschreibung, Enter zum Bestätigen. Er steht dir nicht im Weg und funktioniert genau so, wie man es erwartet.

![Board mit zwischen Spalten verschobenen Aufgaben](images/screenshot-04.png)

**Aufgaben zwischen Spalten verschieben geht sofort.** Drücke Enter oder Leertaste, um eine Aufgabe vorwärts zu bewegen (Todo zu Doing zu Done), oder Backspace, um sie zurückzubewegen. Du kannst auch Shift+H und Shift+L verwenden, um Aufgaben explizit nach links und rechts zu verschieben. Das Board hat auch volle Undo/Redo-Unterstützung.

**Die CLI-Befehle sind praktisch für schnelle Erfassungen.** `tasktui add "Diesen Bug fixen"` legt eine Aufgabe in Todo ab, ohne die TUI zu öffnen. `tasktui list --state doing` zeigt, was in Arbeit ist. `tasktui done 3` markiert Aufgabe 3 als erledigt. Alles aus der Shell.

**Der MCP-Server ist der interessante Teil.** Führe `tasktui mcp` aus und es startet einen Model Context Protocol Server, der vier Tools bereitstellt: `list_tasks`, `add_task`, `move_task` und `delete_task`. Füge ihn zu deiner `~/.claude/mcp.json` Konfiguration hinzu und Claude Code kann deine Aufgaben direkt verwalten. Der File Watcher bedeutet, dass wenn du die TUI gleichzeitig offen hast, sie sich automatisch aktualisiert, sobald Claude eine Änderung macht. Du kannst buchstäblich zusehen, wie Aufgaben auf deinem Board erscheinen, während Claude sie hinzufügt.

## Die Bug Reports

Der File Watcher feuert gelegentlich doppelt beim Speichern, was ein kurzes visuelles Flackern verursacht, da das Board zweimal in schneller Folge neu lädt. Kein großes Ding, aber merkbar. Der MCP-Server-Modus selbst funktionierte beim ersten Versuch sauber, was mich ehrlich gesagt überrascht hat, wenn man bedenkt, wie zickig Protokoll-Implementierungen sein können.

## Die Zahlen

- **13 Watchfire-Aufgaben** vom Start bis zum verpackten Release
- **6 CLI-Befehle** (root, tui, add, list, done, mcp)
- **4 MCP-Tools** (list_tasks, add_task, move_task, delete_task)
- **Go + Bubble Tea + Lip Gloss + Cobra** Stack
- **GoReleaser** für plattformübergreifende Binär-Builds
- **Gesamte Hands-on-Zeit:** vielleicht 25 Minuten Testen und Prompt-Iteration

## Ausprobieren

{{< github repo="nunocoracao/Vibe30-day09-tasktui" showThumbnail=true >}}

Installiere es mit:

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day09-tasktui/main/install.sh | sh
```

Oder aus dem Quellcode bauen:

```bash
git clone https://github.com/nunocoracao/Vibe30-day09-tasktui.git
cd Vibe30-day09-tasktui
go build -o tasktui ./cmd/tasktui
```

Um die MCP-Integration mit Claude Code einzurichten, füge dies zu `~/.claude/mcp.json` hinzu:

```json
{
  "mcpServers": {
    "tasktui": {
      "command": "tasktui",
      "args": ["mcp"]
    }
  }
}
```

## Fazit Tag 9

Das verdoppelt den Einsatz auf den Go + Bubble Tea Stack, fügt aber etwas Neues hinzu: KI-Integration über MCP.

Das Kanban-Board selbst ist solide. Es macht genau das, was ein persönlicher Aufgabenmanager tun sollte, und nicht mehr. Aber der MCP-Server-Modus ist das, was dieses Projekt interessant macht. Claude Code mein Task-Board verwalten zu lassen, während ich arbeite, Aufgaben hinzufügen, die er in Code-Kommentaren entdeckt, Dinge als erledigt markieren, nachdem er sie gefixt hat, das ist ein Workflow, von dem ich nicht wusste, dass ich ihn wollte.

Der File Watcher verbindet alles. Die TUI bleibt in einem Terminal-Panel offen, Claude arbeitet in einem anderen, und das Board aktualisiert sich in Echtzeit. Es fühlt sich an wie Pair Programming mit einem geteilten Task-Board zwischen dir und der KI.

Neun Tage drin und die Projekte fangen an, sich zu verbinden. GitDash für Repository-Awareness, TaskTUI für Aufgabenverwaltung, beide leben im Terminal, wo ich tatsächlich arbeite. Die Tools fangen an, miteinander zu kommunizieren.

---

*Dies ist Tag 9 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir, während ich 30 Projekte in 30 Tagen mit KI-unterstützter Programmierung herausbringe.*
