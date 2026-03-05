---
title: "PMing mit Claude Code: Kapitel 3 - Gottmodus"
summary: "Die Anbindung von Google Workspace und Slack an Claude Code hat den Kreis geschlossen. Kalenderplanung, Dokumentenbearbeitung, Sheets-Dashboards und Slack-Suche - alles aus einem Terminal."
description: "Die Anbindung von Google Workspace und Slack an Claude Code hat den Kreis geschlossen. Kalenderplanung, Dokumentenbearbeitung, Sheets-Dashboards und Slack-Suche - alles aus einem Terminal."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Google Workspace", "Slack", "integrations"]
series: ["PMing with Claude Code"]
series_order: 3
date: 2026-03-05
draft: false
---

Am Ende von Kapitel zwei hatte ich die verbleibenden Lücken aufgelistet: Google Docs, Slack und Kalender. Ich habe alle drei in einer einzigen Sitzung geschlossen. Und irgendwann mittendrin - als ich zusah, wie Claude die Verfügbarkeit von fünfzehn Personen prüfte, eine Kalendereinladung erstellte, einen Preisfehler in einem aktiven Google Doc korrigierte und ein Dashboard mit mehreren Tabs in Sheets baute - alles ohne dass ich einen Browser öffnete - wurde mir klar, dass das Setup eine Schwelle überschritten hatte. Das ist kein KI-Assistent mehr. Das ist eine Kommandozentrale.

## Google Workspace: Die gws CLI

Googles Ökosystem war schon immer am schwierigsten mit irgendetwas zu verbinden. Es gibt APIs für alles, aber die Authentifizierung ist mühsam und die Angriffsfläche enorm. Dann brachte Google etwas heraus, das alles veränderte - sie veröffentlichten eine offizielle CLI für die gesamte Workspace-Suite. Angekündigt am 2. März, geschrieben in Rust, Open-Source unter Apache 2.0. Sie umfasst die gesamte Google Workspace API-Oberfläche, dynamisch aufgebaut aus Googles Discovery Service. Gmail, Calendar, Drive, Docs, Sheets, Slides, Tasks, Chat, Admin - alles über ein einziges Kommandozeilentool. Es wird sogar mit MCP-Server-Unterstützung und über 100 vorgefertigten Agent Skills ausgeliefert.

{{< github repo="googleworkspace/cli" >}}

### Einrichtung

Die Installation erfolgt über npm (es enthält vorkompilierte native Binaries, keine Rust-Toolchain nötig), oder man kann ein Binary von GitHub Releases herunterladen oder aus dem Quellcode mit Cargo bauen:

```bash
npm install -g @googleworkspace/cli
```

Dann gibt es einen geführten Setup-Befehl, der durch die GCP-Projektkonfiguration leitet:

```bash
gws auth setup     # walks you through Google Cloud project config
gws auth login     # subsequent OAuth login
```

Es gibt eine Voraussetzung, die einen stolpern lassen kann: Man braucht ein Google Cloud-Projekt mit konfiguriertem OAuth. Die gws CLI authentifiziert sich über GCP, also kommt man ohne ein Projekt und einen eingerichteten OAuth-Zustimmungsbildschirm nicht weiter. Glücklicherweise hatte mein Team bereits ein internes GCP-Projekt, das ich nutzen konnte, sodass ich keines von Grund auf erstellen musste. Ich musste nur den OAuth-Zustimmungsbildschirm konfigurieren und dann die spezifischen APIs aktivieren, die ich nutzen wollte - Calendar, Gmail, Drive, Docs, Sheets - über die Google Cloud Console. Wenn man bei null anfängt, sind das zusätzliche 15 Minuten Herumklicken in GCP-Einrichtungsbildschirmen. Nicht schwer, nur mühsam.

Sobald OAuth konfiguriert ist, öffnet der Auth-Flow einen Browser für die Google-Anmeldung. Die Sitzung bleibt danach bestehen. Aber man sollte sicherstellen, dass jede API aktiviert ist, die man nutzen möchte - verpasst man eine, bekommt man kryptische Berechtigungsfehler, die nicht klar sagen, was fehlt.

### Schritt Null: Claude das Tool lernen lassen

Bevor ich irgendetwas davon nutzte, tat ich etwas, das mir später Stunden ersparte. Ich sagte Claude, die gws CLI selbst zu erkunden - `gws --help` ausführen, die Unterbefehle durchgehen, Dinge ausprobieren - und alles Gelernte in `CLAUDE.md` zu dokumentieren. Claude ging den Befehlsbaum durch, erkannte die Muster für jeden Dienst (Calendar, Docs, Sheets, Drive, Gmail), notierte die gängigen Flags und Parameterformate und schrieb alles auf.

Das ist Schritt null für jede neue Tool-Integration. Versuche nicht, die CLI selbst manuell zu dokumentieren. Schreib keinen Spickzettel. Zeig einfach Claude darauf und sag "Lern das, schreib auf, was du findest." Das Ergebnis ist eine Referenz, die perfekt darauf zugeschnitten ist, wie Claude das Tool tatsächlich nutzen wird - weil Claude sie für sich selbst geschrieben hat.

Nach dieser Erkundung kannte Claude Befehle wie:

```bash
# Check today's calendar
gws calendar +agenda --today --format table

# Read a Google Doc
gws docs documents get --params '{"documentId": "DOC_ID"}'

# Update a Google Doc
gws docs documents batchUpdate ...

# Push data to a Google Sheet
gws sheets spreadsheets values update ...

# Create a calendar event
gws calendar events insert ...
```

Gleiches Muster wie bei Snowflake in Kapitel zwei. Gleiches Muster wie bei GitHub in Kapitel eins. Das Muster ist der Punkt: Tool installieren, Claude es erkunden lassen, die Erkenntnisse in `CLAUDE.md` dokumentieren, und jede zukünftige Sitzung startet mit vollem Kontext.

Inzwischen ist meine `CLAUDE.md` zu einem ernstzunehmenden Referenzdokument herangewachsen. Es ist nichts, was ich mich hingesetzt und geschrieben hätte - es hat sich organisch angesammelt, während Claude jedes Tool erkundete und ich unterwegs Kontext hinzufügte. Es enthält Data-Warehouse-Tabellenschemata mit Spaltenbeschreibungen und Formeln für berechnete Werte. GitHub-Repo-Struktur mit GraphQL-Abfragemustern für Epics und Tasks. Notion-Seitenindexe, damit Claude die richtige Produktspezifikation abrufen kann, ohne dass ich nach URLs suchen muss. Teamlisten aus Kalendereinladungen. CLI-Befehlsreferenzen für jedes integrierte Tool. Verbindungskonfigurationen und Auth-Notizen.

Es liest sich wie ein Betriebshandbuch, das niemand jemals von Hand schreiben würde. Aber weil Claude es im Laufe der Zeit für sich selbst schreibt, baut sich das Handbuch von selbst auf. Und jedes neue Gespräch startet mit all diesem Kontext geladen. Claude fragt nicht "Wie sieht euer Data-Warehouse-Schema aus?" oder "Wo finde ich die Produktspezifikationen?" - es weiß es bereits.

## Slack: Das integrierte Plugin

Slack war einfacher als erwartet. Claude Code hat ein integriertes Slack-Plugin, das MCP-Tools zum Suchen, Lesen und Senden von Nachrichten bereitstellt.

```
/install-slack-app    # Install the Slack app
                      # Complete authorization in browser
/mcp                  # Connect to the plugin (may need a second attempt)
```

Sobald verbunden, hat man eine Reihe von Tools, die die wichtigsten Slack-Operationen abdecken: Nachrichten über öffentliche Kanäle hinweg suchen, Threads lesen, Kanalverlauf nach Datumsbereich lesen, Nachrichten senden, Benutzer finden und Profile anzeigen. Es ist nicht die vollständige Slack-API, aber es ist genau die Funktionsfläche, die ein PM tatsächlich braucht.

## Anwendungsfall 1: Mein Team über den Kalender finden

Hier ist ein Szenario, das ständig vorkommt. Man braucht seine Teamliste - nicht die Organigramm-Version, sondern die tatsächlichen Menschen, die zu den wiederkehrenden Meetings erscheinen. Die Leute im Raum.

Ich bat Claude, mein wöchentliches Team-Sync-Meeting nachzuschlagen und die Teilnehmer zu extrahieren. Es fragte die Calendar API ab, fand das Event und zog fünfzehn Personen mit ihren E-Mail-Adressen heraus. Dann ließ ich die Liste in `CLAUDE.md` speichern, damit jede zukünftige Sitzung mein Team kennt, ohne dass ich es erneut erklären muss.

Das ist eine Kleinigkeit, die sich summiert. Jedes Mal, wenn Claude etwas planen, Verfügbarkeiten prüfen oder ein Teammitglied referenzieren muss, weiß es bereits, mit wem es arbeitet.

## Anwendungsfall 2: Ein Meeting planen

Dieser Fall überraschte mich damit, wie reibungslos er funktionierte.

Ich musste ein Meeting am Montagnachmittag mit meinem gesamten Team planen - alle fünfzehn Personen - um gemeinsam ein Strategiedokument zu besprechen. Im normalen Workflow würde ich Google Calendar öffnen, die Nachmittagsslots überfliegen, manuell prüfen, ob die wichtigen Leute frei sind, aufgeben, alle fünfzehn zu prüfen, eine Zeit wählen, die vernünftig aussieht, und auf das Beste hoffen.

Stattdessen sagte ich Claude, einen freien Slot am Montagnachmittag für das ganze Team zu finden. Es:

1. Listete meinen Montagnachmittagskalender auf, um offene Slots zu identifizieren
2. Fragte die freebusy API für alle fünfzehn Teammitglieder gleichzeitig ab
3. Stellte fest, dass vier Personen Konflikte in meinem bevorzugten Slot hatten
4. Berichtete zurück, wer beschäftigt war und wann
5. Erstellte die Einladung über `events insert` mit einem Doc-Link in der Beschreibung

Die Einladungen gingen automatisch raus. Das Ganze dauerte vielleicht dreißig Sekunden. Allein die Freebusy-Prüfung hätte mich zehn Minuten Durchklicken einzelner Kalender gekostet - und ich hätte wahrscheinlich nach fünf Personen aufgegeben.

## Anwendungsfall 3: Ein aktives Google Doc bearbeiten

Dieser Fall veränderte meine Sichtweise auf Dokumenten-Workflows.

Ich hatte ein Google Doc mit einem Preisvorschlag, das überprüft werden musste. Statt es im Browser zu öffnen, durchzulesen und manuell zu bearbeiten, bat ich Claude, es abzurufen und zu prüfen.

Claude holte das vollständige Dokument über `docs documents get`, parsierte den gesamten Inhalt einschließlich Absätze und Tabellen und las es durch. Es fand eine Inkonsistenz: Eine Preistabelle hatte eine veraltete Zahl, die nicht mit den aktuellen Planpreisen übereinstimmte. Die Art von Fehler, die beim Überfliegen leicht zu übersehen ist, aber peinlich wird, wenn ein Stakeholder ihn findet.

Hier ist der entscheidende Teil: Claude korrigierte es direkt im aktiven Google Doc mit `batchUpdate` und `replaceAllText`. Kein Herunterladen, keine lokalen Änderungen, kein erneutes Hochladen. Die Korrektur erfolgte im kanonischen Dokument, das alle anderen bereits betrachten.

Das eliminiert eine ganze Klasse von Dokumentenmanagement-Reibung. Das Dokument bleibt in Google Docs, wo das Team es erwartet. Claude liest und bearbeitet es direkt vor Ort.

Eine Sache, die ich noch ausprobieren muss: Kommentare überprüfen und beantworten. Google Docs-Kommentare sind der Ort, an dem die Hälfte der eigentlichen Zusammenarbeit stattfindet - Vorschläge, Fragen, Feedback-Threads. Wenn Claude diese lesen, offene Kommentare zusammenfassen und Antworten entwerfen kann, würde das einen weiteren Kreislauf schließen. Das steht als Nächstes auf meiner Liste.

## Anwendungsfall 4: Ein Dashboard in Google Sheets bauen

Dieser Fall war ein reiner Test. Ich wollte sehen, ob Claude Daten aus Snowflake nehmen und ein vollständiges Google Sheet automatisch bauen kann - von Anfang bis Ende, ohne manuelle Schritte. Die Art von Aufgabe, die normalerweise einen Nachmittag frisst: Abfragen ausführen, CSVs exportieren, ein Sheet erstellen, Tabs anlegen, Daten einfügen, Überschriften formatieren, Diagramme erstellen.

Also zeigte ich Claude auf ein paar Datensätze und sagte "Bau mir ein Dashboard in Sheets." Es:

1. **Zog 6 Datensätze aus Snowflake** - Wochentrends, Tagesmetriken, Planaufschlüsselungen, Feature-Adoption, Nutzung nach Segment und mehr
2. **Erstellte 6 Tabs in einem Google Sheet** über `spreadsheets batchUpdate`
3. **Schob alle Daten** in die richtigen Tabs über `spreadsheets values update`
4. **Formatierte alles** - fette Überschriften, graue Hintergründe, fixierte obere Zeilen, automatisch angepasste Spaltenbreiten
5. **Fügte 9 Diagramme** über die Tabs hinzu - Liniendiagramme für Trends, Säulendiagramme für Vergleiche, Flächendiagramme für kumulative Metriken, gestapelte Balken für Aufschlüsselungen

Alles programmatisch. Keine manuelle Sheet-Arbeit. Kein Kopieren und Einfügen zwischen Tools. Die Snowflake CLI aus Kapitel zwei und die gws CLI aus diesem Kapitel arbeiteten in einer einzigen Sitzung zusammen. Es war nur ein Test, aber es funktionierte gut genug, dass ich mir vorstellen könnte, es für echte Stakeholder-Dashboards zu nutzen.

Das ist es, wie der kumulative Effekt in der Praxis aussieht. Jede Integration, die ich hinzugefügt habe - GitHub, Notion, Snowflake, Google Workspace, Slack - fügt nicht nur eine Fähigkeit hinzu. Sie multipliziert jede andere Fähigkeit. Daten aus Snowflake fließen in Google Sheets. Teaminfos aus dem Kalender informieren die Meetingplanung. Diskussionen aus Slack liefern Kontext für Dokumentenprüfungen.

## Anwendungsfall 5: In Slack suchen

Das letzte Puzzlestück war die Kommunikationshistorie. Ich nutzte die Slack-Suche, um Diskussionen zum Preisvorschlag über unsere Kanäle hinweg zu finden. Claude fand relevante Threads in `#product-launches` und `#pricing-strategy`, las die vollständigen Gespräche und hatte den Kontext, den es brauchte, um sie mit dem bereits geprüften Preisdokument abzugleichen.

Das schloss die Informationsschleife. Vorher hätte ich vielleicht ein Dokument geprüft, mich erinnert, dass jemand vor drei Wochen ein Bedenken in Slack geäußert hat, versucht, diesen Thread zu finden, zehn Minuten beim Scrollen verloren und vielleicht aufgegeben. Jetzt sucht Claude, findet es, liest es und synthetisiert es im selben Gespräch.

## Der komplette Stack

So sieht der Arbeitsbereich jetzt aus:

```
pm-workspace/
├── CLAUDE.md                # Everything: schemas, team lists, tool docs
├── .claude/
│   └── settings.local.json  # Permissions for all CLIs and MCPs
├── docs/                    # Fallback for docs that can't live in Google/Notion
├── data_reports/            # Fallback for datasets too large for live queries
└── roadmap.md               # Living roadmap document
```

Und die Integrationen:

| Tool | Methode | Was es tut |
|------|---------|-----------|
| GitHub | `gh` CLI | Issues, Epics, Projektmanagement |
| Notion | MCP | Produktspezifikationen und Dokumentation |
| Snowflake | `snow` CLI | Data-Warehouse-Abfragen |
| Google Workspace | `gws` CLI | Calendar, Docs, Sheets, Gmail |
| Slack | MCP Plugin | Suchen, Lesen und Senden von Nachrichten |

Fünf Integrationen. Fünf verschiedene Datenquellen. Alle erreichbar aus einem Terminal, alle mit Kontext durch ein einziges Gespräch verbunden.

## Tipps für die Einrichtung

Ein paar Dinge, die ich auf die harte Tour gelernt habe:

- **Alles in `CLAUDE.md` dokumentieren.** Claude kann keine Tools nutzen, von denen es nichts weiß. Jedes Mal, wenn eine Integration hinzugefügt wird, sage Claude, welche Befehle verfügbar sind und wie man sie nutzt. Noch besser: Bitte Claude, das Tool selbst zu erkunden und zu dokumentieren.
- **Das Slack-Plugin braucht möglicherweise eine erneute Verbindung.** Nach `/install-slack-app` führe `/mcp` aus, um die Verbindung herzustellen. Wenn es beim ersten Mal nicht funktioniert, versuche es erneut. Beim ersten Setup ist es instabil, aber danach stabil.
- **Die rohe API für komplexe Sheet-Operationen nutzen.** Der Befehl `spreadsheets values update` funktioniert besser als höherstufige Helfer, wenn man Multi-Tab-Operationen mit Formatierung und Diagrammen durchführt.
- **Teamlisten und Integrationsdetails in `CLAUDE.md` speichern.** Sie bleiben über Sitzungen hinweg erhalten. Wenn Claude von Beginn eines Gesprächs an das Team, die Schemata und die Tools kennt, fühlt sich das wie eine Kommandozentrale an und nicht wie ein Chatbot.

## Was sich verändert hat

Nach Kapitel eins hatte ich einen vernetzten Arbeitsbereich. Nach Kapitel zwei hatte ich Datenzugang. Nach diesem Kapitel habe ich alles. Kalender, Dokumente, Tabellenkalkulationen, Kommunikationshistorie, Data Warehouse, Projektmanagement, Design-Kontext - alles an einem Ort.

Die Veränderung im Workflow ist real. Ich öffne Google Calendar nicht mehr, um Meetings zu planen. Ich öffne Google Docs nicht mehr, um Dokumente zu prüfen. Ich öffne Google Sheets nicht mehr, um Dashboards zu bauen. Ich scrolle nicht mehr durch Slack, um alte Diskussionen zu finden. Ich beschreibe, was ich brauche, und es passiert.

Ist es perfekt? Nein. Auth-Setups sind heikel. Die gws CLI ist jung und die Fehlermeldungen sind nicht immer hilfreich. Manche Operationen brauchen Python-Subprocess-Aufrufe, um Shell-Escaping-Probleme zu vermeiden. Aber die Reibung der Einrichtung ist ein einmaliger Aufwand. Die gesparte Zeit kommt jeden einzelnen Tag.

Drei Kapitel rein, die These hält: Jede neue Integration multipliziert den Wert jeder bestehenden. Die Lücke zwischen "Ich habe eine Frage" und "Ich habe eine Antwort mit unterstützenden Daten aus fünf verschiedenen Quellen" ist von Stunden auf Sekunden geschrumpft.

Das ist der Gottmodus.
