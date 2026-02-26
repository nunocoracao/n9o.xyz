---
title: "PM-Arbeit mit Claude Code: Kapitel 2 - Daten"
summary: "Wie die Anbindung der Snowflake CLI an Claude Code es in einen PM-Datenanalysten verwandelt hat - SQL-Abfragen ausführen, Retention über Produktversionen vergleichen und unübersichtliche Daten schnell verstehen."
description: "Wie die Anbindung der Snowflake CLI an Claude Code es in einen PM-Datenanalysten verwandelt hat - SQL-Abfragen ausführen, Retention über Produktversionen vergleichen und unübersichtliche Daten schnell verstehen."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Snowflake", "data analysis"]
series: ["PMing with Claude Code"]
series_order: 2
date: 2026-02-26
draft: false
---

In Kapitel eins habe ich beschrieben, wie ich Claude Code als PM-Kommandozentrale eingerichtet habe - GitHub Issues, Notion-Dokumente, lokale Strategiedateien, alles über ein Terminal verbunden. Die größte Lücke, die ich angesprochen habe? Daten. Ich exportierte manuell CSVs aus Looker oder Sigma und legte sie in einen Ordner. Es funktionierte, aber es war umständlich. Diese Lücke ist jetzt geschlossen.

## Das fehlende Puzzlestück: SQL-Zugriff

Das Problem war nie, dass Claude keine Daten analysieren konnte. Gib ihm eine CSV-Datei und es findet Muster, fasst Trends zusammen, formuliert Beobachtungen. Das Problem war, die Daten überhaupt erst zu Claude zu bekommen. Jedes Mal, wenn ich aktuelle Zahlen brauchte, musste ich einen Browser öffnen, zu einem Dashboard navigieren, eine Datei exportieren und sie in den Workspace verschieben. Bis Claude die Daten hatte, hatte ich bereits fünf Minuten mit etwas verbracht, das fünf Sekunden dauern sollte.

Die Lösung war im Nachhinein offensichtlich: Claude direkten Zugriff auf das Data Warehouse geben. Unsere Analysen liegen in Snowflake, und Snowflake hat eine CLI. (Danke dafür, Abhi!)

## Einrichtung der Snowflake CLI

Die [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index) (`snow`) ist ein Kommandozeilen-Tool zur Interaktion mit Snowflake. Installieren, eine Verbindung konfigurieren, und schon kann man SQL-Abfragen direkt aus dem Terminal ausführen. Was bedeutet, dass Claude sie auch ausführen kann.

Die Verbindungskonfiguration liegt in `~/.snowflake/connections.toml`:

```toml
[my_org]
account = "your-account"
user = "your-user"
authenticator = "externalbrowser"
role = "ROLE_READONLY"
warehouse = "your-warehouse"
```

Ein paar Dinge sind erwähnenswert. Der `externalbrowser`-Authenticator bedeutet, dass die Authentifizierung über das SSO eures Unternehmens läuft. Man authentifiziert sich einmal im Browser und die Sitzung bleibt bestehen. Keine API-Keys oder Passwörter in Konfigurationsdateien. Und die Rolle ist schreibgeschützt. Claude kann Daten abfragen, aber nichts verändern. Dieselbe Philosophie wie bei den GitHub-Berechtigungen aus Kapitel eins: Gib dem Tool genau den Zugriff, den es braucht, nicht mehr.

Sobald die Verbindung steht, ist eine Abfrage ein einziger Befehl:

```bash
snow sql -c my_org -q "SELECT COUNT(*) FROM my_table" --format json
```

Dann habe ich Claude gebeten, einige Tabellen, Schemas und gängige Abfragemuster in `CLAUDE.md` zu erkunden und zu dokumentieren. Danach habe ich ein paar Details zu berechneten Werten besprochen, damit Claude diese in SQL berücksichtigt. Claude hat dann etwa Folgendes dokumentiert:

```markdown
## Snowflake Access
- CLI: `snow sql -c my_org -q "..." --format json`
- Role: read-only
- Key tables:
  - `MARTY.ENTITIES.L3_DIM_MOBIULE>__USER` - User dimension
  - `PREP.AI_SERVICE.L1_AI_TRACE` - API event traces
- The ATTRIBUTES column is a JSON variant with: username,
  planName, model, origin, gordonTag, token counts, cost, etc.
```

Das ist dasselbe Muster wie in Kapitel eins. `CLAUDE.md` gibt Claude den Kontext, den es braucht, um korrekte Abfragen zu schreiben, ohne dass ich jedes Mal das Schema erklären muss. Und man muss es nicht selbst schreiben - man kann Claude bitten, alle gewünschten Informationen festzuhalten.

## Die Retention-Analyse

Hier wurde es interessant. Ich musste die Woche-eins-Retention für unseren KI-Assistenten über fünf verschiedene Produktversionen hinweg verstehen. Jede Version war mit unterschiedlichen Features, unterschiedlicher UX und unterschiedlichen Onboarding-Flows ausgeliefert worden. Die Frage war einfach: Welche Version hielt Nutzer in den ersten sieben Tagen am besten?

Im alten Workflow wäre das tagelange Arbeit und Abhängigkeiten mit anderen Teams gewesen. Snowflake öffnen, herausfinden welche Versions-Tags zu welchen Releases gehören, die Kohortenabfrage schreiben, ausführen, exportieren, auf eine Tabelle starren, versuchen das Muster zu erkennen. Oder einen Datenanalysten fragen und warten, bis dessen Queue abgearbeitet ist.

Mit Claude habe ich beschrieben, was ich brauchte - in einfachem Englisch:

> "Compare week 1 retention for Gordon across the last 5 major versions."

Claude kannte das Schema bereits aus `CLAUDE.md`. Es wusste, dass `gordonTag` die Produktversion identifiziert, dass `EVENT_TIMESTAMP` festhält, wann Ereignisse stattfanden, und es wusste, wie Nutzer identifiziert werden. Es schrieb das SQL, führte es über die Snowflake CLI aus, erhielt die Ergebnisse und formatierte sie in eine Vergleichstabelle.

Und in weniger als 5 Minuten hatte ich meine Ergebnisse...

## Wofür es gut ist (und wofür nicht)

Lassen Sie mich klarstellen, was das ersetzt und was nicht.

**Es baut keine Dashboards.** Wenn man eine dauerhafte, teilbare Visualisierung braucht, die sich täglich aktualisiert, will man weiterhin Looker oder Sigma oder was auch immer das Team nutzt. Claude beantwortet Fragen. Es erstellt keine Monitoring-Infrastruktur.

**Es ersetzt nicht euer Data-Team.** Komplexe Datenmodellierung, Pipeline-Arbeit, Warehouse-Optimierung - das ist Engineering-Arbeit. Claude führt Ad-hoc-Abfragen gegen bestehende Tabellen aus, es baut keine neuen Datenmodelle.

**Was es macht, ist die Zeit zwischen Frage und Antwort zu komprimieren.** Der PM-Workflow hatte immer diesen Engpass: Man denkt sich eine Frage aus, findet heraus wo die Daten liegen, schreibt oder beauftragt eine Abfrage, wartet auf Ergebnisse, interpretiert sie, denkt sich eine Anschlussfrage aus, und der Zyklus wiederholt sich. Jeder Zyklus kann Minuten oder Tage dauern, je nachdem ob man sich selbst helfen kann.

Mit Claude + Snowflake CLI wird der Zyklus zum Gespräch. Frage, Abfrage, Ergebnis, Nachfrage - alles in derselben Terminal-Sitzung, alles in Sekunden. Die Geschwindigkeit verändert die Arbeitsweise. Man stellt mehr Fragen. Man untersucht mehr Hypothesen. Man entdeckt Dinge, die man sonst übersehen hätte, weil die Kosten des Nachprüfens so gering sind.

## Der Zinseszinseffekt

Die eigentliche Stärke liegt nicht in einer einzelnen Integration. Es ist die Kombination. In einer einzigen Konversation kann Claude:

1. Die neuesten GitHub Issues abrufen, um zu sehen, was in jeder Version ausgeliefert wurde
2. Snowflake abfragen, um Retention-Daten für diese Versionen zu erhalten
3. Notion nach den Produktentscheidungen hinter jedem Release durchsuchen
4. Alles miteinander abgleichen und eine Zusammenfassung entwerfen

Das sind vier Tools, vier verschiedene Datenquellen, in einem Gespräch zusammengeführt. Der Kontext bleibt erhalten. Wenn Claude feststellt, dass Version X einen Retention-Einbruch hatte, kann es sofort die GitHub Issues prüfen, um zu sehen, was sich in diesem Release geändert hat, und dann das Notion-Dokument nachschlagen, um die Begründung zu verstehen. Kein Tab-Wechsel, kein Kopieren von Daten zwischen Tools.

Das ist es, was ich in Kapitel eins damit meinte, dass Claude ein Workflow-Hub ist und nicht nur ein KI-Assistent. Jede neue Integration vervielfacht den Wert jeder bestehenden.

## Aktualisiertes Setup

Zur Referenz: So sieht der Workspace jetzt aus:

```
pm-workspace/
├── CLAUDE.md                # Workflow conventions, templates, Snowflake schemas
├── .claude/
│   └── settings.local.json  # Permissions: gh, snow sql, MCP servers
├── docs/                    # Strategy docs, analysis, specs
├── data_reports/            # Exported data (still useful for large datasets)
└── roadmap.md               # Living roadmap document
```

Und die Berechtigungen sind gewachsen:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)",
      "Bash(snow sql*)"
    ]
  }
}
```

Eine neue Zeile. Mehr brauchte es nicht, um von "CSVs manuell exportieren" zu "Claude direkt das Warehouse abfragen lassen" zu wechseln.

## Was kommt als Nächstes

Der `data_reports/`-Ordner ist nicht überflüssig geworden. Für große Datensätze oder komplexe Visualisierungen macht der Export weiterhin Sinn. Aber für die täglichen PM-Fragen - "Wie entwickelt sich die Retention?", "Wie verteilt sich die Nutzung nach Tarif?", "Wie viele Nutzer haben dieses Feature letzte Woche genutzt?" - öffne ich keinen Browser mehr.

Die verbleibenden Lücken aus Kapitel eins schrumpfen. Notion ist über MCP verbunden. GitHub ist über CLI verbunden. Snowflake ist über CLI verbunden. Was noch fehlt: Google Docs (noch kein MCP), Slack (MCP existiert, aber ich habe es noch nicht eingerichtet) und Kalender-Integrationen. Jede Ergänzung macht das Gesamtsystem nützlicher.

Wenn ihr PMs seid und auf einem Data Warehouse mit CLI-Zugang sitzt: Das ist die wirkungsvollste Erweiterung, die ihr eurem Claude Code Setup hinzufügen könnt. Die Abfragen, die Claude schreibt, sind beim ersten Versuch nicht immer perfekt. Aber die Iterationsschleife ist so schnell, dass es keine Rolle spielt. Drei unperfekte Abfragen in dreißig Sekunden schlagen eine perfekte Abfrage, die eine Stunde zum Schreiben braucht.

Es geht nicht um Perfektion. Es geht um Geschwindigkeit bis zur Erkenntnis.
