---
title: "Produktmanagement mit Claude Code"
summary: "Wie ich Claude Code als meine PM-Kommandozentrale eingerichtet habe - GitHub Issues, Notion-Dokumente und KI-Unterstützung in einem Workflow verbunden."
description: "Wie ich Claude Code als meine PM-Kommandozentrale eingerichtet habe - GitHub Issues, Notion-Dokumente und KI-Unterstützung in einem Workflow verbunden."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow"]
date: 2026-01-28
draft: false
---

Die meisten KI-Tools sind für Entwickler gebaut. Copilots, die Code vervollständigen, Agents, die Tests schreiben, Assistenten, die Fehler debuggen. Aber PM-Arbeit - Roadmaps verfolgen, Specs schreiben, Issues abfragen, Meeting-Notizen zusammenfassen - ist genauso reif für KI-Unterstützung. Die Herausforderung ist, dass PM-Arbeit so viele Tools umfasst: GitHub für Issues, Notion für Dokumente, Tabellen für Priorisierung, Slack für Kontext. Kein einzelnes KI-Tool verbindet sie alle.

Bis ich anfing, meine PM-Arbeit in Claude Code zu erledigen.

## Warum Claude Code für PM?

Claude Code ist Anthropics CLI-basierter KI-Coding-Assistent. Er läuft in deinem Terminal, was für einen PM vielleicht wie eine seltsame Wahl erscheint... Aber hör mir zu. Erstens lebt er dort, wo ich einen relevanten Teil meiner Zeit verbringe. Ich bin ständig im Terminal - führe git-Befehle aus, prüfe Deployments, verfolge Logs beim Debuggen mit Entwicklern. Claude im selben Kontext verfügbar zu haben bedeutet, dass ich für einige dieser Anwendungsfälle nicht zwischen Tools wechseln muss.

Zweitens ermöglicht das [MCP (Model Context Protocol)](https://modelcontextprotocol.io) System Claude Code, sich mit externen Tools zu verbinden. GitHub, Notion, Linear, Slack - wenn es einen MCP-Server dafür gibt, kann Claude Code ihn abfragen. Das verwandelt einen einfachen KI-Assistenten in einen echten Workflow-Hub.

Drittens, wenn es keinen MCP-Server gibt, kann ich immer noch Shell-Befehle verwenden, um mich mit jedem Tool mit einer CLI zu verbinden. Die GitHub CLI (`gh`) ist perfekt für PM-Arbeit. Claude kann `gh`-Befehle ausführen, um Issues aufzulisten, Details anzuzeigen, neue Elemente zu erstellen und mehr. Das gibt mir Lese- und Schreibzugriff auf meine GitHub Issues direkt aus Claude.

Viertens gibt die `CLAUDE.md`-Datei Claude persistenten Kontext darüber, wie ich arbeite. Meine Konventionen, meine Templates, meine Präferenzen. Jede Konversation beginnt damit, dass Claude meinen Workflow bereits kennt.

Und schließlich hält das Berechtigungssystem alles sicher. Ich kontrolliere genau, welche Befehle Claude ausführen kann, welche APIs es aufrufen kann. Keine Überraschungen.

## Das Setup

Mein PM-Arbeitsbereich ist eine einfache Repo-Struktur:

```
pm-workspace/
├── CLAUDE.md                # Workflow-Konventionen und Templates
├── .claude/
│   └── settings.local.json  # Berechtigungen und MCP-Konfiguration
├── docs/                    # Strategie-Dokumente, Analysen, Specs
├── data_reports/            # Manuell exportierte Analysedaten
└── roadmap.md               # Lebendiges Roadmap-Dokument
```

Die Philosophie ist Documentation-first, mit GitHub als Single Source of Truth für die Ausführung - das ist es, was mein Team für die Arbeitsverfolgung verwendet, es wäre nicht viel anders für Jira, Notion, Linear, etc. Das Repo enthält meine Arbeitsdokumente - Strategiedokumente, Analyse-Writeups, alles, worauf Claude Kontext haben soll. GitHub hält die eigentlichen Issues und das Projekt-Tracking. Notion hat die längere Wissensbasis. Und wenn ich Analytics-Kontext brauche, liegen exportierte Daten in `data_reports/`.

Die `CLAUDE.md`-Datei ist, wo die Magie passiert. Sie enthält meine Konventionen:

```markdown
# PM Workflow

## Source of Truth
- **GitHub:** Alle Epics und Issues leben im Haupt-Repo
- **Notion:** PRDs, Meeting-Notizen, Entscheidungsprotokolle
- **Lokale Docs:** Strategiedokumente in `/docs/`
- **Daten:** Exportierte Analytics in `/data_reports/`

## Conventions
- Epics verwenden den `Epic` Issue-Typ
- Streams werden über Labels verfolgt
- Quartalsziele mit `Q1-2026`, `Q2-2026`, etc. getaggt

## Useful Commands
- Offene Epics auflisten: `gh api graphql -f query='...'` (vollständige Query unten)
- Epic-Details anzeigen: `gh issue view <number>`
- Roadmap synchronisieren: Neuesten Epic-Status holen und roadmap.md aktualisieren

## Templates
Beim Erstellen von Roadmap-Elementen diese Struktur verwenden:
- Problem: Welches Nutzerproblem lösen wir?
- Lösung: High-Level-Ansatz
- Erfolgsmetriken: Woran erkennen wir, dass es funktioniert hat?
- Abhängigkeiten: Was blockiert dies?

## Documentation Index
| Datei | Beschreibung |
|-------|--------------|
| `docs/strategy.md` | Produktstrategie und Vision |
| `docs/analysis.md` | Recherche und Datenanalyse |
```

Diese Datei wird automatisch geladen, jedes Mal wenn ich Claude Code in diesem Verzeichnis starte. Claude weiß bereits, wie ich Dinge benenne, wo es Informationen findet und welches Format ich erwarte.

## Die Tools verbinden

### GitHub CLI Integration

Die GitHub CLI (`gh`) ist das Rückgrat meines Setups. Claude Code kann Shell-Befehle ausführen, also konfiguriere ich Berechtigungen, um bestimmte GitHub-Operationen zu erlauben:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)"
    ]
  }
}
```

Das gewährt Claude Lese- und Schreibzugriff auf Issues und Projekte, aber nichts anderes. Kein Code pushen, keine Releases verwalten, nichts außerhalb des PM-Workflows anfassen.

Mit diesem Setup kann ich Claude Dinge fragen wie:

- "Zeig mir alle offenen Epics für Q1"
- "Was ist der Status des Authentifizierungs-Epics?"
- "Erstelle ein neues Issue für das Dashboard-Redesign"
- "Liste alle Issues auf, die das Mobile-Release blockieren"
- "Gibt es offene Kommentare vom Team, die ich adressieren muss?"

Claude übersetzt meine natürliche Sprache in die richtigen `gh`-Befehle, führt sie aus und fasst die Ergebnisse zusammen. Für komplexere Abfragen kann es die GitHub GraphQL API verwenden:

```bash
gh api graphql -f query='
  query {
    repository(owner: "myorg", name: "myrepo") {
      projectV2(number: 1) {
        items(first: 50) {
          nodes {
            content { ... on Issue { title state } }
            fieldValues(first: 10) { nodes { ... on ProjectV2ItemFieldSingleSelectValue { name } } }
          }
        }
      }
    }
  }
'
```

Ich muss mir diese Syntax nicht merken. Ich frage einfach "Was ist im Q1-Projektboard?" und Claude findet die richtige Query heraus.

### Notion MCP

Für längere Dokumente - PRDs, Meeting-Notizen, Entscheidungsprotokolle - verwende ich Notion. Claude Code unterstützt MCP-Server, das sind externe Dienste, die seine Fähigkeiten erweitern. Der Notion MCP-Server gibt Claude Lesezugriff auf meinen Workspace:

```json
{
  "mcpServers": {
    "notion": {
      "type": "url",
      "url": "https://mcp.notion.com/sse"
    }
  }
}
```

Mit dieser Verbindung kann ich Claude bitten, meinen Notion-Workspace nach Kontext zu durchsuchen. "Was haben wir zum Preismodell entschieden?" oder "Finde das PRD für Benutzerbenachrichtigungen" oder "Fasse die letzten drei Produkt-Syncs zusammen."

Die Stärke liegt in der Kombination. Claude kann GitHub nach Issue-Status abfragen, dann mit Notion-Docs für Kontext abgleichen, und mir dann helfen, ein Update zu verfassen, das beides referenziert. Ein Tool, mehrere Quellen.

## Der Workflow in der Praxis

So sieht ein typischer Tag aus:

**Morgenvorbereitung.** Ich öffne Claude Code und frage: "Welche Issues wurden gestern geschlossen? Gibt es neue Bugs?" Claude fragt GitHub ab, fasst die Aktivität zusammen, und ich habe meine Standup-Punkte in dreißig Sekunden.

**Roadmap-Sync.** "Synchronisiere die Roadmap von GitHub - hol den aktuellen Status aller offenen Epics." Claude führt die GraphQL-Query aus meiner `CLAUDE.md` aus, holt den aktuellen Stand, Zuständige und Meilensteine, dann aktualisiert es `roadmap.md` mit frischen Daten. Das Roadmap-Dokument bleibt mit GitHub synchron, ohne dass ich jedes Issue manuell prüfen muss.

**Strategie-Kontext.** "Was ist unser Ansatz bei der Plattform-Infrastruktur-Arbeit?" Claude liest das relevante Strategiedokument aus meinem `docs/`-Ordner und fasst die Kernpunkte zusammen. Wenn ich eine Entscheidung referenzieren oder mich an die Begründung hinter einer Richtung erinnern muss, geht es sofort.

**Datenanalyse.** Ich exportiere eine CSV - Nutzer-Engagement-Metriken für das letzte Quartal - und lege sie in `data_reports/` ab. "Analysiere die Engagement-Daten und fasse die Trends zusammen." Claude liest die Datei, identifiziert Muster und verfasst Beobachtungen. Nicht so nahtlos wie eine direkte Integration, aber es funktioniert.

**Specs schreiben.** Ich beginne mit einer groben Idee: "Ich brauche ein Roadmap-Element für den neuen Onboarding-Flow." Claude kennt mein Template aus `CLAUDE.md`, also stellt es die richtigen Fragen - was ist das Problem, wer ist betroffen, was ist der Umfang - und verfasst ein strukturiertes Dokument. Ich bearbeite, verfeinere, und wenn es fertig ist, sage ich Claude, dass es das GitHub Epic erstellen soll.

**Nach Kontext suchen.** "Was haben wir zum Rate Limiting entschieden?" Claude durchsucht Notion nach Meeting-Notizen und Entscheidungsdokumenten, findet die relevante Diskussion und fasst das Ergebnis zusammen. Kein Wühlen mehr durch Monate von Notizen.

**Wochenende.** "Verfasse eine Zusammenfassung, was diese Woche ausgeliefert wurde, für das Stakeholder-Update." Claude fragt geschlossene Issues ab, gruppiert sie nach Stream und verfasst eine lesbare Zusammenfassung. Ich überprüfe, justiere das Framing und versende.

Die Templates in `CLAUDE.md` sorgen für konsistente Ausgaben. Wenn ich nach einem Roadmap-Element frage, folgt es immer der gleichen Struktur. Wenn ich nach einer Wochenzusammenfassung frage, enthält sie immer die gleichen Abschnitte. Konsistenz ohne die Langeweile.

## Was noch fehlt

Das Setup ist nicht vollständig. Einige Lücken, an denen ich aktiv arbeite:

**Daten-Tools.** Ich lebe in Looker und Sigma für Analytics - Nutzungsmetriken, Funnel-Daten, Kohortenanalyse. Es gibt keinen MCP für beide. Wenn ich Claude brauche, um Daten zu analysieren oder eine Zusammenfassung zu schreiben, die Metriken enthält, exportiere ich manuell CSVs in einen `data_reports/`-Ordner in meinem Workspace. Es funktioniert, aber es ist Reibung. Jedes Mal, wenn ich frische Daten will, bin ich wieder im Browser und klicke Export-Buttons.

**Google Docs.** Viel funktionsübergreifende Arbeit passiert in Google Docs - geteilte Specs, kollaborative PRDs, Kommentare von Stakeholdern. Auch dort kein MCP. Gleicher Workaround: Export nach Markdown oder PDF, ablegen im Workspace. Claude kann es lesen, aber es ist ein Snapshot, keine Live-Verbindung.

**Aufgabenverwaltung.** Nicht alles ist ein Roadmap-Epic. Ich habe persönliche Todos - "nachfassen bei Design wegen der Mockups," "API-Vorschlag reviewen," "Fragen für den Kundencall vorbereiten." Diese gehören nicht in GitHub Issues. Ich finde noch den richtigen Weg, diese zu tracken. Momentan leben sie in einer einfachen Markdown-Datei, aber ich würde eine engere Integration lieben - vielleicht einen Linear oder Todoist MCP, den Claude abfragen und aktualisieren könnte.

Das MCP-Ökosystem wächst schnell. Slack, Linear, Kalender-Integrationen entstehen alle. Aber im Moment ist der manuelle Export-Workflow eine notwendige Brücke für Tools, die noch keine nativen Verbindungen haben.

## Was funktioniert

Die leseintensiven Workflows sind, wo Claude glänzt. Issues abfragen, Docs durchsuchen, Status zusammenfassen - das hat mich früher zehn Minuten Herumklicken gekostet, jetzt dauert es dreißig Sekunden. Die schreibintensiven Workflows brauchen mehr menschliches Urteilsvermögen. Claude kann einen Spec entwerfen, aber ich muss die Strategie immer noch durchdenken.

Die Kombination aus GitHub + Notion + lokalen Docs deckt den Großteil meiner täglichen Arbeit ab. Wenn ich Analytics-Kontext brauche, fügt der manuelle Export einen Schritt hinzu, aber sobald die Daten im Workspace sind, handhabt Claude sie gut.

Das größere Bild ist KI als PM-Copilot, nicht als Ersatz. Claude trifft keine Produktentscheidungen. Es spricht nicht mit Kunden oder verhandelt mit Stakeholdern oder spürt die Intuition, dass etwas nicht stimmt. Aber es erledigt die mechanischen Teile der Arbeit - das Abfragen, das Formatieren, das Suchen, das Verfassen - damit ich mich auf die Teile konzentrieren kann, die tatsächlich menschliches Urteilsvermögen erfordern.

Wenn du ein PM bist und neugierig auf KI-Tools, probier Claude Code aus. Richte einen einfachen Workspace ein, verbinde GitHub, füge deine Konventionen zu `CLAUDE.md` hinzu und schau, wie es zu deinem Workflow passt. Es geht nicht darum, deine bestehenden Tools zu ersetzen. Es geht darum, eine Schicht Intelligenz hinzuzufügen, die sie miteinander verbindet.

Und wenn du etwas Interessantes baust, teil dein Setup. Ich würde gerne sehen, wie andere PMs das nutzen.
