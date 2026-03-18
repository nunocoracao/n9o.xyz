---
title: "PMing mit Claude Code: Kapitel 4 - Second Brain"
summary: "Claude Code konnte auf alles zugreifen, aber sich an nichts erinnern. Die Anbindung an Obsidian verwandelte verstreute Dateien in einen Knowledge Graph - mit Entities, Task-Extraktion und Meeting-Transkripten, die sich gegenseitig nähren."
description: "Claude Code konnte auf alles zugreifen, aber sich an nichts erinnern. Die Anbindung an Obsidian verwandelte verstreute Dateien in einen Knowledge Graph - mit Entities, Task-Extraktion und Meeting-Transkripten, die sich gegenseitig nähren."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Obsidian", "Granola", "knowledge management"]
series: ["PMing with Claude Code"]
series_order: 4
date: 2026-03-18
draft: false
---

Am Ende von Kapitel drei hatte ich das Setup als "Gottmodus" bezeichnet. Claude Code konnte auf GitHub, Notion, Snowflake, Google Workspace und Slack zugreifen - alles aus einem Terminal. Fünf Integrationen, fünf Datenquellen, Antworten in Sekunden statt Stunden. Zugang zu allem.

Aber jedes Gespräch begann bei null.

Die Erkenntnisse, die Claude in einer Sitzung zutage förderte, übertrugen sich nicht in die nächste. Die Verbindungen, die es zwischen einem Slack-Thread und einem Preisdokument herstellte, verschwanden, wenn das Gespräch endete. Ich konnte Claude bitten, alles zu finden, aber es konnte sich nicht erinnern, was es bereits gefunden hatte. Die Lücke war nicht mehr Tools. Es ging darum, Wissen zu akkumulieren - eine Schicht aufzubauen, in der jede neue Information mit allem verbunden wird, was davor kam.

Darum geht es in diesem Kapitel. Nicht eine weitere Integration. Ein Second Brain.

## Warum Obsidian

Obsidian ist eine Notiz-App, die auf reinen Markdown-Dateien basiert. Kein proprietäres Format, keine Cloud-Datenbank, kein Vendor Lock-in. Der Vault ist einfach ein Ordner auf der Festplatte - öffne ihn in einem beliebigen Texteditor und alles ist direkt da.

Was es für diesen Anwendungsfall interessant macht, ist die Kombination von Features, die auf diesen Dateien aufsetzen. Wikilinks (`[[so wie hier]]`) lassen einen jede Notiz mit jeder anderen Notiz ohne Reibung verbinden. Eine Graph-Ansicht visualisiert diese Verbindungen. YAML frontmatter liefert strukturierte Metadaten zu jeder Notiz. Ein Plugin-Ökosystem fügt alles hinzu, von kanban-Boards bis zu Datenbankansichten. Und mit iCloud-Sync ist der gesamte Vault auf dem Handy verfügbar.

Entscheidend: Es gibt keine API zu konfigurieren. Keinen OAuth-Tanz, keinen MCP-Server, keine Auth-Tokens. Es ist ein Ordner mit Markdown-Dateien auf dem lokalen Dateisystem. Claude Code hat bereits Dateisystemzugriff. Das ist die gesamte Integration.

## Die einfachste Integration

Unter macOS mit iCloud-Sync liegt ein Obsidian-Vault unter:

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/<vault-name>/
```

Kein MCP-Server nötig. Kein Plugin. Claude weiß bereits, wie man Dateien liest und schreibt. Ich fügte einen Abschnitt "Knowledge Base" zu `CLAUDE.md` mit dem Vault-Pfad hinzu und dem Hinweis, dass dies der primäre Speicherort für alle persistenten Dateien ist. Dann aktualisierte ich den `/sync`-Skill, um die Roadmap sowohl in den Obsidian-Vault als auch ins Git-Repo zu schreiben - Vault als Primärquelle, Repo als versionskontrolliertes Backup.

Das war's. Von da an wusste jedes Gespräch, wo Dinge zu finden und zu speichern sind. Der mechanische Teil dauerte fünf Minuten.

## Vault-Struktur

Mit der Verbindung an Ort und Stelle richtete ich eine Ordnerstruktur ein:

| Ordner | Zweck |
|--------|-------|
| `roadmap/` | Roadmap-Dateien, synchronisiert von GitHub |
| `meetings/` | Meeting-Transkripte für Suche und Kontext |
| `tasks/` | Persönliche Aufgaben und To-dos |
| `docs/` | Strategiedokumente, Analysen, Recherchen |
| `blogs/` | Blog-Post-Entwürfe |
| `entities/` | Wiederverwendbare Wissens-Entities - Personen, Projekte, Produkte, Initiativen |

Die Ordner `docs/` und `blogs/`, die ich bisher im Git-Repo gehalten hatte, wanderten in den Vault. Dieselben Dateien, aber jetzt durchsuchbar über Obsidian, verlinkbar über wikilinks und auf dem Handy über iCloud zugänglich. Eine einzige Quelle der Wahrheit statt zwei.

## Die Obsidian CLI

Hier wurde es interessant. Obsidian liefert eine eingebaute CLI unter `/Applications/Obsidian.app/Contents/MacOS/obsidian`. Ich tat, was ich jetzt bei jedem neuen Tool mache - das Schritt-Null-Muster aus den vorherigen Kapiteln: Claude darauf zeigen und sagen "Erkunde das, dokumentiere, was du findest, in `CLAUDE.md`."

Claude ging den Befehlsbaum durch, testete Unterbefehle und kartierte die Fähigkeiten. Das Ergebnis: zwei komplementäre Wege, um mit dem Vault zu interagieren.

**Direkter Dateizugriff** erledigt Lesen und Schreiben - schnell und einfach. Aber die CLI fügt strukturierte Abfragen hinzu, die Dateisystemoperationen nicht leisten können:

```bash
# Full-text search across the vault
obsidian search "launch plan" --vault nexus

# Find what links to any note
obsidian backlinks "Project Alpha" --vault nexus

# Read/write YAML frontmatter programmatically
obsidian properties get "tasks/review-api.md" --vault nexus

# List and query tags across all notes
obsidian tags --vault nexus

# List and filter tasks
obsidian tasks --vault nexus --status open
```

Dateisystem für Geschwindigkeit, CLI für Beziehungen. Die Kombination bedeutet, dass Claude sowohl den Inhalt einer Datei lesen als auch ihren Platz im breiteren Knowledge Graph verstehen kann.

## Entities: Der Knowledge Graph

Das ist das konzeptuelle Herzstück des gesamten Setups.

Der Ordner `entities/` nutzt eine einfache Konvention: Jede Entity bekommt ihre eigene Markdown-Datei mit YAML frontmatter für Metadaten und wikilinks für Verbindungen. Entity-Typen umfassen Personen, Produkte, Projekte, Teams, Initiativen und Konzepte. Jeder Typ bekommt seinen eigenen Unterordner.

So sieht eine Entity aus:

```yaml
---
type: product
tags: [platform, ai, agents]
---
# Project Alpha

Internal AI assistant. Started as a CLI tool,
expanding to web and desktop surfaces.

Related: [[Platform Team]], [[Desktop App]], [[MCP]]
```

Einfach, aber die Kraft liegt im Netzwerkeffekt. Jeder wikilink ist eine bidirektionale Verbindung. Wenn ich eine Meeting-Notiz erstelle, die `[[Project Alpha]]` erwähnt, taucht sie automatisch in den Backlinks von Project Alpha auf. Wenn eine Aufgabe `[[Platform Team]]` referenziert, ist sie von der Entity-Seite des Teams aus auffindbar. Der Graph baut sich selbst auf.

Ich erstellte den `/entities`-Skill, um die Extraktion zu automatisieren. Er scannt Vault-Inhalte - `CLAUDE.md` (Teamlisten), `roadmap.md` (Epics, Zuständige), Meeting-Transkripte (referenzierte Personen), Aufgaben (Entity-Referenzen) - und erstellt strukturierte Entity-Dateien für alles, was er findet.

Die erste Extraktion ergab **39 Entities** in sechs Unterordnern:

```
entities/
  _index.md              # Master index
  people/                # 20 people
  products/              # 10 products
  projects/              # 2 active projects
  teams/                 # 1 team
  initiatives/           # 2 strategic initiatives
  concepts/              # 3 technical concepts
```

Als ich die Obsidian Graph-Ansicht öffnete, erschienen sofort Verbindungen - wer an welchem Produkt arbeitet, welche Initiativen welche Teams umspannen, welche Konzepte welchen Projekten zugrunde liegen. Informationen, die in meinen Dokumenten immer implizit vorhanden waren, jetzt explizit und navigierbar.

Jedes neue Dokument, das in den Vault gelangt und wikilinks verwendet, tritt automatisch diesem Netzwerk bei. Der Graph wird mit der Zeit dichter und nützlicher, ohne jeglichen Wartungsaufwand.

## Aufgabenverwaltung und Kanban

Bereits in Kapitel eins hatte ich eine Lücke markiert: "Nicht alles ist ein Roadmap-Epic. Ich habe persönliche Todos... Die gehören nicht in GitHub Issues." Drei Kapitel später habe ich sie endlich geschlossen.

Das System besteht aus einer Datei pro Aufgabe mit strukturiertem frontmatter:

```yaml
---
status: todo
priority: high
source: slack
due: 2026-03-20
entities: ["[[Project Alpha]]", "[[Sarah Chen]]"]
---
# Review launch plan feedback

## Description
Review and address Sarah's feedback on the Project Alpha launch plan.

## Output
Updated launch plan with resolved comments.

## Context
From 1:1 with [[Sarah Chen]] on 2026-03-17.
```

Jede Aufgabendatei hat einen Status, eine Priorität, eine Quelle (woher der Aktionspunkt stammt), ein Fälligkeitsdatum und verknüpfte Entities. Das Format enthält, wie "erledigt" aussieht und wo die Aufgabe ihren Ursprung hat - genug Struktur, um nützlich zu sein, aber nicht so viel, dass das Erstellen einer Aufgabe zum Overhead wird.

Zur Visualisierung installierte ich das Obsidian Kanban Community-Plugin über die CLI:

```bash
obsidian plugin:install id=obsidian-kanban enable
```

Vier Spalten: **Todo**, **Doing**, **Done**, **Dropped**. Karten sind wikilinks zu Aufgabendateien, ein Klick auf eine Karte öffnet also die vollständigen Details. Das kanban-Board wurde das tägliche Dashboard, das ich nie hatte - eine einzige Ansicht von allem, was ich erledigen muss, aus allen Quellen, in denen ich arbeite.

## Granola: Meeting-Transkripte

Die letzte Eingabequelle waren Meetings. Ich installierte Granola - ein Meeting-Transkriptions-Tool - und das granola-to-obsidian-Plugin. Die Pipeline ist einfach: Granola zeichnet Meetings auf und transkribiert sie, das Plugin exportiert Transkripte automatisch in den Ordner `meetings/` im Vault.

Jetzt ist jedes Meeting durchsuchbar. Claude kann Transkripte lesen, Aktionspunkte herausziehen, finden, wer was gesagt hat, und Diskussionen mit bestehenden Entities abgleichen. Ein Gespräch über einen Produktlaunch in einem 1:1 verlinkt sich natürlich mit der Produkt-Entity und der Personen-Entity. Das Transkript wird Teil des Knowledge Graph, sobald es im Vault landet.

Die eigentliche Pipeline sieht so aus: **Transkripte > Entities > Aufgaben > kanban**. Ein Meeting findet statt, das Transkript erscheint im Vault, Entity-Referenzen verbinden es mit dem Graph, Aktionspunkte werden in Aufgabendateien extrahiert, Aufgabendateien tauchen auf dem kanban-Board auf. Jeder Schritt ist automatisiert oder einen Befehl entfernt.

## /pm-task in der Praxis

Hier kam alles zusammen.

Der `/pm-task`-Skill scannt vier Quellen nach Aktionspunkten: Slack, E-Mail, Kalender und Granola Meeting-Notizen. Er liest aktuelle Aktivitäten, identifiziert alles, was nach einer Aufgabe oder Zusage aussieht, präsentiert Kandidaten zur Prüfung und erstellt bei Bestätigung Aufgabendateien plus kanban-Karten.

Ich ließ ihn gegen die Aktivitäten eines normalen Tages laufen - aktuelle Slack-Nachrichten, ungelesene E-Mails, den heutigen Kalender und ein paar Granola-Transkripte. Er zog **8 Aufgaben** heraus und fügte sie dem kanban-Board hinzu. Jede hatte die richtigen Entity-Links, den Quellkontext und die richtige Priorität. Er übersprang korrekt das Rauschen - FYI-Nachrichten, erledigte Threads, Marketing-E-Mails, informative Kalendereinladungen. Signal rein, Rauschen raus.

Vier Eingabequellen, durch einen Skill in strukturierte Aufgabendateien mit Entity-Links und kanban-Visualisierung kanalisiert. Die Art von quellenübergreifender Aufgabenextraktion, die dreißig Minuten manuelles Durchforsten erfordern würde, passierte in etwa zwanzig Sekunden.

## Was sich verändert hat

Die Integrationstabelle sieht jetzt so aus:

| Tool | Methode | Was es tut |
|------|---------|-----------|
| GitHub | `gh` CLI | Issues, Epics, Projektmanagement |
| Notion | MCP | Produktspezifikationen und Dokumentation |
| Snowflake | `snow` CLI | Data-Warehouse-Abfragen |
| Google Workspace | `gws` CLI | Calendar, Docs, Sheets, Gmail |
| Slack | MCP Plugin | Suchen, Lesen und Senden von Nachrichten |
| **Obsidian** | **Filesystem + CLI** | **Knowledge Graph, Aufgaben, Entities, Vault** |
| **Granola** | **Obsidian Plugin** | **Meeting-Transkripte** |

Sieben Integrationen jetzt. Aber in diesem Kapitel ging es nicht wirklich darum, zwei weitere Zeilen zur Tabelle hinzuzufügen.

Was sich tatsächlich verändert hat: ein Vault-Pfad in `CLAUDE.md`. Zwei neue Skills - `/pm-task` und `/entities`. Neununddreißig Entities extrahiert und verbunden. Acht Aufgaben aus vier verschiedenen Quellen gezogen. Ein kanban-Board, das vorher nicht existierte. Und unter all dem ein Knowledge Graph, der dichter wird, jedes Mal wenn Claude den Vault berührt.

## Was kommt als Nächstes

Obsidian hat kürzlich Bases veröffentlicht - strukturierte Datenbankansichten, die Notizen anhand von frontmatter-Eigenschaften abfragen. Das könnte das Entity-System in etwas verwandeln, das einer echten relationalen Datenbank näherkommt. Ich möchte außerdem Claude Codes eigene Memory-Dateien in den Vault leiten, damit sein persistenter Speicher und der Knowledge Graph zu einem System verschmelzen. Und der oberste Punkt auf dem kanban-Board: den KI-nativen Roadmap-Prototyp bauen.

Aber die These dieses Kapitels dreht sich nicht um das, was als Nächstes kommt. Es geht darum, dass die Lücke nie mehr Inputs waren - sondern die Schicht aufzubauen, die alle Inputs akkumulieren lässt. Kapitel eins bis drei haben Claude Code mit der Welt verbunden. Dieses Kapitel hat ihm einen Ort gegeben, um sich zu erinnern, was es gefunden hat.

Zugang plus Gedächtnis. Das ist der wahre kumulative Effekt.
