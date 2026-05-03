---
title: "30 Days of Vibe Coding - Tag 28 - ideA"
description: "Ein nativer Desktop-Code-Editor, gebaut mit Wails, Go, React und Monaco Editor."
summary: "Ein nativer Desktop-Code-Editor, gebaut mit Wails, Go, React und Monaco Editor."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-28", "go", "wails", "react", "monaco", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 28
seriesOpened: false
date: 2026-05-03
draft: false
#type: "hidden"
---

Tag 28. Noch drei Tage. Gestern war ein Terminal-Emulator. Heute? Ein Code-Editor.

Keine Web-App. Nichts, das in einem Browser-Tab laeuft. Eine native Desktop-Anwendung, die du auf deinem Rechner installierst. Die Art von Sache, fuer die ganze Teams Jahre brauchen.

## Der Prompt

{{< alert icon="fire">}}
Lade es von der [neuesten Release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest) herunter
{{< /alert >}}

> "Baue einen nativen Desktop-Code-Editor mit Wails v2, Go-Backend und React-Frontend mit Monaco Editor. Dateibaum-Seitenleiste, Tabs, Syntax-Highlighting. Multi-Plattform-Builds fuer macOS, Linux und Windows."

## Wie Es Gebaut Wurde

Dieses Projekt war ein Biest. [Watchfire](https://watchfire.io) hat die Arbeit in 43 Aufgaben aufgeteilt, was mit Abstand die meisten Aufgaben fuer jedes Projekt in dieser Challenge sind. Und viele davon waren CI-Fixes, denn native Desktop-Apps fuer drei Plattformen zu bauen ist... nicht gerade unkompliziert.

Der Stack ist Wails v2 fuer den nativen Wrapper, Go fuer die Dateisystem-Operationen im Backend, React fuer die UI, und Monaco Editor (dieselbe Editor-Engine, die VS Code antreibt) fuer das eigentliche Code-Editing. Das Go-Backend kuemmert sich um das gesamte Datei-I/O, Verzeichnisse lesen, Dateien oeffnen, Aenderungen speichern, und stellt das alles als Funktionen bereit, die das React-Frontend ueber Wails-Bindings aufrufen kann.

Die CI-Pipeline war der Punkt, an dem der echte Schmerz auftauchte. WebKit-Abhaengigkeiten unter Linux, Build-Tags, die genau stimmen mussten, Wails-Bindings-Generierung, plattformuebergreifendes Packaging. Ich habe aufgehoert zu zaehlen, wie viele "fix CI"-Commits es gab. Das Git-Log ist voll davon. Aber das ist die Realitaet beim Ausliefern nativer Apps. Der Code kann auf deinem Rechner perfekt funktionieren und trotzdem in einem GitHub-Actions-Runner spektakulaer scheitern.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

![Willkommensbildschirm](images/screenshot-01.png)

**Ein richtiger Willkommensbildschirm.** Schnellaktionen zum Oeffnen von Ordnern und Dateien, Liste der letzten Projekte und eine Referenz fuer Tastenkuerzel. Es sieht aus wie eine echte IDE-Willkommensseite.

![Dateibaum mit geoeffnetem Projekt](images/screenshot-02.png)

**Ein Dateibaum, der funktioniert.** Oeffne einen Ordner und du bekommst einen vollstaendigen Verzeichnisbaum in der Seitenleiste mit Aufklappen/Zuklappen, Datei-Icons und dem ganzen Drumherum. Es gibt eine Minimap unten, die einen Ueberblick ueber die Dateistruktur zeigt.

![Code-Bearbeitung mit Syntax-Highlighting](images/screenshot-03.png)

**Monaco Editor in Aktion.** Volles Syntax-Highlighting, Zeilennummern, die Minimap auf der rechten Seite. Es ist dasselbe Editing-Erlebnis wie VS Code, weil es buchstaeblich dieselbe Editor-Komponente ist. JavaScript, Go, TypeScript, JSON, was auch immer du oeffnest, bekommt korrektes Highlighting.

![Befehlspalette](images/screenshot-04.png)

**Eine Befehlspalette.** Dieses Fuzzy-Search-Overlay, das jeder moderne Editor hat. Befehle suchen, zu Dateien springen. Es funktioniert.

![Integriertes Terminal](images/screenshot-05.png)

**Ein integriertes Terminal.** Es gibt ein Terminal-Panel am unteren Rand des Editors. Fuehre deine Builds aus, pruefe den Git-Status, was auch immer du brauchst, ohne die App zu verlassen.

![Dateisuche](images/screenshot-07.png)

**Dateisuche mit Fuzzy-Matching.** Schnelloeffnungs-Overlay zum Springen zwischen Dateien in deinem Projekt. Tipp ein paar Zeichen und es filtert.

## Der CI-Krieg

Das verdient seinen eigenen Abschnitt, denn es hat den Build dominiert. Wails dazu zu bringen, auf GitHub Actions fuer macOS, Linux und Windows gleichzeitig korrekt zu kompilieren und zu paketieren, war eine Schlacht ueber mehrere Commits. Einige Highlights:

- WebKit-Abhaengigkeiten unter Linux brauchten spezifische Pakete (`libgtk-3-dev`, `libwebkit2gtk-4.0-dev`)
- Build-Tags mussten fuer jede Plattform korrekt gesetzt werden
- Die Wails-Bindings-Generierung musste vor dem Build passieren
- Der Release-Workflow musste `.app`-Bundles fuer macOS, Tarballs fuer Linux und `.exe` fuer Windows erzeugen
- Mehrere Runden von Fixen, Testen, wieder Fixen

Das Endergebnis ist ein GitHub-Actions-Workflow, der automatisch fuer alle drei Plattformen baut und released, wenn du einen Tag pushst. Es funktioniert. Es hat nur eine Weile gedauert, dahin zu kommen.

## Installiere Es

Das ist eine native App, also kein Vercel-Link diesmal. Du installierst es auf deinem Rechner.

**Schnellinstallation (macOS und Linux):**

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day28-idea/main/install.sh | bash
```

Oder hol dir ein Binary von der [Releases-Seite](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest):

| Plattform | Architektur | Download |
|----------|-------------|----------|
| macOS | Intel (x86_64) | [VibEdit-macos-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-amd64.zip) |
| macOS | Apple Silicon (arm64) | [VibEdit-macos-arm64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-arm64.zip) |
| Linux | x86_64 | [VibEdit-linux-amd64.tar.gz](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-linux-amd64.tar.gz) |
| Windows | x86_64 | [VibEdit-windows-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-windows-amd64.zip) |

**Aus dem Quellcode bauen**, wenn du willst (erfordert Go 1.23+, Node.js 20+, Wails CLI v2):

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
git clone https://github.com/nunocoracao/Vibe30-day28-idea.git
cd Vibe30-day28-idea
cd frontend && npm install && cd ..
wails build
```

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day28-idea" showThumbnail=true >}}

## Die Zahlen

- **43 Watchfire-Aufgaben** vom Setup bis zu den letzten CI-Fixes
- **3 Zielplattformen** (macOS, Linux, Windows)
- **Wails v2 + Go** Backend mit React + Monaco Editor Frontend
- **GitHub Actions** Release-Workflow fuer automatisierte Multi-Plattform-Builds

## Fazit Tag 28

Der Editor selbst kam relativ schnell zusammen. Monaco Editor uebernimmt einen Grossteil der schweren Arbeit, und Wails macht die Bruecke zwischen Go und React ueberraschend sauber. Der schwierige Teil war alles rund um den Code: das CI dazu bringen, native Apps fuer drei Betriebssysteme zu bauen, plattformspezifische Abhaengigkeiten handhaben, korrekt fuer jedes Ziel paketieren.

Wird das VS Code ersetzen? Offensichtlich nicht. Aber es ist ein funktionierender nativer Code-Editor mit Dateibaum, Tabs, Syntax-Highlighting, Befehlspalette, integriertem Terminal und Multi-Plattform-Releases. An einem Tag gebaut. Die Tatsache, dass derselbe Monaco Editor, der VS Code antreibt, als React-Komponente verfuegbar ist, bedeutet, dass du ein echtes Editing-Erlebnis gratis bekommst. Der Rest ist Klempnerarbeit, und das ist genau die Art von Arbeit, in der KI gut ist.

43 Aufgaben ist viel. Die meisten Tage in dieser Challenge lagen im Bereich von 15-25. Aber native Desktop-Apps mit CI-Pipelines sind ein anderes Kaliber. Jede Plattform hat ihre Eigenheiten, jedes Build-System hat seine Meinungen, und keines stimmt mit dem anderen ueberein. Noch zwei mehr.

---

*Das ist Tag 28 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Folge der Serie, waehrend ich 30 Projekte in 30 Tagen mit KI-unterstuetztem Coding ausliefere.*
