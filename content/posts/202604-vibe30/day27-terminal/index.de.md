---
title: "30 Tage Vibe Coding - Tag 27 - Terminal"
description: "Ein nativer Terminal-Emulator, gebaut mit Tauri 2 und Rust, mit Tabs, geteilten Panels, konfigurierbaren Themes und smarten Features."
summary: "Ein nativer Terminal-Emulator, gebaut mit Tauri 2 und Rust, mit Tabs, geteilten Panels, konfigurierbaren Themes und smarten Features."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-27", "rust", "tauri", "terminal"]
series: ["30 Days of Vibe Coding"]
series_order: 27
seriesOpened: false
date: 2026-05-02
draft: false
#type: "hidden"
---

Tag 27. Noch vier Tage. Zeit, aufzuhören auf Nummer sicher zu gehen.

Die Zielgerade dieser Challenge ist, wo ich mich an Dinge wagen will, die wahrscheinlich nicht an einem einzigen Tag funktionieren sollten. Ein Terminal-Emulator ist eines dieser Dinge. Kein Web-Spielzeug, das so tut, als wäre es ein Terminal. Eine echte native Desktop-App, die reale Shell-Sessions startet, mit 60fps rendert und alles von vim bis htop bewältigt.

## Der Prompt

> "Baue einen Terminal-Emulator mit Tauri 2 und Rust"

Das war die Kernanfrage. Alles andere kam durch Iteration.

{{< alert icon="fire">}}
Lade ihn von der [neuesten Release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest) herunter
{{< /alert >}}

## Wie Es Gebaut Wurde

Das war ein großes Ding. [Watchfire](https://watchfire.io) hat die Arbeit in 19 Aufgaben aufgeteilt, und jede einzelne war nötig. Einen Terminal-Emulator zu bauen ist nicht trivial. Da gibt es PTY-Management, Shell-Integration, Input-Handling, Rendering-Performance und ein Dutzend anderer Dinge, an die ich nie gedacht hätte.

Die Aufgabenliste sah ungefähr so aus:

1. Ein Tauri 2 + Vite Projekt mit grundlegendem PTY-Support aufsetzen
2. Mehrere Tabs mit Öffnen, Schließen und Umbenennen
3. Geteilte Panels, horizontal und vertikal
4. Einstellungs-Panel mit Themes, Schriften und Shell-Konfiguration
5. UI-Polish, Scrollback und Shell-Fixes
6. GitHub Actions für automatisierte Releases
7. KI-Befehlsvorschläge inline
8. Visuelles Polish für Transparenz, Blur und Fenster-Chrome
9. Klickbare Links und smarte Erkennung im Terminal-Output
10. Shell-Profile und Schnellaktionen
11. Warnungen bei gefährlichen Befehlen mit Bestätigungsdialogen
12. Benachrichtigungen bei lang laufenden Befehlen
13. Fuzzy-Verlaufssuche mit einem reichhaltigen Ctrl+R-Overlay
14. Inline-Ghost-Vorschläge aus Verlaufsdateien
15. Intelligente Fehlererkennung mit Quick-Fix-Aktionen
16. Übersetzung von natürlicher Sprache in Befehle
17. Befehlserklärung und KI-Output-Zusammenfassung
18. Blockbasierte Output-Gruppierung mit einklappbaren Abschnitten
19. Einstellungs-Panel für smarte Features und Integrationstests

Dann kamen die CI/CD-Fixes. Tauri dazu zu bringen, über GitHub Actions für macOS, Linux und Windows zu bauen und zu signieren, ist ein Abenteuer für sich. Installationsskripte für alle drei Plattformen auch.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Dabei Rauskam

![Terminal läuft mit mehreren sichtbaren Features](images/screenshot-01.png)

**Es ist ein echtes Terminal.** Das ist keine Simulation. Es nutzt Rusts portable-pty Crate, um echte Shell-Sessions zu starten. Bash, zsh, fish, was auch immer du konfiguriert hast. Voller PTY-Support bedeutet, dass alles funktioniert: vim, htop, interaktive Prompts, alles.

![htop läuft mit mehreren Tabs](images/screenshot-11.png)

**xterm.js mit WebGL-Beschleunigung.** Das Rendering ist schnell. Also, spürbar schnell. Der Scrollback geht bis zu 10.000 Zeilen und verschluckt sich nicht. Der WebGL-Renderer macht einen echten Unterschied im Vergleich zum Standard-Canvas-Ansatz.

**Tabs und geteilte Panels.** Cmd+T für einen neuen Tab, Cmd+D für einen vertikalen Split, Cmd+Shift+D für einen horizontalen Split. Du kannst Tabs umbenennen. Das Panel-Management funktioniert genau so, wie man es von einem modernen Terminal erwarten würde.

![Geteilte Panels mit Claude Code](images/screenshot-12.png)

**Es hat eine Tour für smarte Features.** Wenn du die App zum ersten Mal öffnest, führt sie dich durch die intelligenten Features mit einer geführten Tour.

![Tour der smarten Features](images/screenshot-02.png)

Diese smarten Features beinhalten Ghost-Vorschläge aus deinem Befehlsverlauf, Fuzzy-Verlaufssuche mit Ctrl+R, Warnungen bei gefährlichen Befehlen wie `rm -rf` oder `git push --force`, und Übersetzung von natürlicher Sprache in Befehle.

![Ghost-Vorschläge](images/screenshot-03.png)

![Fuzzy-Verlaufssuche](images/screenshot-04.png)

![Warnungen bei gefährlichen Befehlen](images/screenshot-05.png)

![Natürliche Sprache und KI-Features](images/screenshot-06.png)

**Ein vollständiges Einstellungs-Panel.** Schriftfamilie, Schriftgröße, Cursor-Stil, Farbthemes. Es kommt mit Dracula, Solarized, Monokai und mehr. Du kannst Hintergrund-Blur, Transparenz und Shell-Argumente konfigurieren.

![Einstellungs-Panel](images/screenshot-14.png)

**Befehlssuche im Scrollback.** Ctrl+F öffnet ein Such-Overlay, mit dem du deinen Terminal-Verlauf mit Fuzzy-Matching durchsuchen kannst.

![Such-Overlay](images/screenshot-13.png)

**Blockbasierte Output-Gruppierung.** Lange Befehlsausgaben werden in einklappbare Blöcke gruppiert. Es gibt einen "Output zusammenfassen"-Button für wenn ein Befehl 2.000 Zeilen ausspuckt und du nur das Wesentliche willst.

![Output-Zusammenfassung](images/screenshot-07.png)

**Es läuft pico.** Es läuft vim. Es läuft alles, was ein Terminal können sollte, weil es ein Terminal ist.

![Pico-Texteditor läuft im Terminal](images/screenshot-08.png)

**Es läuft sogar Dockers KI-Assistent.** Vollständige interaktive TUI-Anwendungen funktionieren ohne Probleme.

![Docker KI-Assistent läuft im Terminal](images/screenshot-09.png)

![Docker KI-Assistent erweiterte Ansicht](images/screenshot-10.png)

**Es läuft Claude Code darin.** Ich habe das Terminal benutzt, um Claude Code laufen zu lassen, um weitere Features für das Terminal zu bauen. Das fühlte sich nach einer sehr speziellen Art von Inception an.

![Claude Code läuft im Terminal mit sichtbarer Watchfire-Aufgabenliste](images/screenshot-12.png)

## Installiere Es

Das ist eine native App, keine Website. Kein Vercel-Deployment hier. Du kannst die neueste Release von der GitHub-Releases-Seite holen, oder die Installationsskripte verwenden:

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.sh | bash
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.ps1 | iex
```

Oder baue es aus dem Quellcode, wenn du willst:

```bash
git clone https://github.com/nunocoracao/Vibe30-day27-terminal.git
cd Vibe30-day27-terminal
npm install
npm run tauri dev
```

Erfordert Rust 1.77.2+ und Node.js 20+.

{{< github repo="nunocoracao/Vibe30-day27-terminal" showThumbnail=true >}}

## Die Zahlen

- **19 Watchfire-Aufgaben** vom Grundgerüst bis zur Integration smarter Features
- **Tauri 2 + Rust-Backend** mit portable-pty für echte Shell-Sessions
- **xterm.js mit WebGL** für schnelles Rendering
- **6+ Farbthemes** inklusive Dracula, Solarized und Monokai
- **CI/CD-Pipeline** mit GitHub Actions für macOS, Linux und Windows
- **Installationsskripte** für alle drei Plattformen

## Fazit Tag 27

Ein Terminal-Emulator berührt so viele Schichten. PTY-Management in Rust. IPC zwischen dem Rust-Backend und dem JavaScript-Frontend über Tauri. WebGL-Rendering für Performance. Plattformübergreifende Builds und Code-Signierung über CI/CD. Installationsskripte, die dein OS und deine Architektur erkennen.

Und dann, obendrauf, hat es smarte Features bekommen. Ghost-Vorschläge, Fuzzy-Suche, Warnungen bei gefährlichen Befehlen, KI-Integration. Das sind keine Spielereien. Ich fand die Warnungen bei gefährlichen Befehlen tatsächlich nützlich, als ich beim Testen versehentlich etwas Destruktives getippt habe.

Die Tatsache, dass das überhaupt funktioniert, ist beeindruckend. Die Tatsache, dass es gut genug funktioniert, dass ich es tatsächlich benutzt habe, um Claude Code laufen zu lassen, um weitere Features von sich selbst zu bauen, ist nochmal eine ganz andere Sache. Ich werde iTerm morgen nicht damit ersetzen, aber der Abstand zwischen "vibe coded Terminal" und "Produktions-Terminal" ist kleiner, als ich erwartet hatte.

Tag 27 von 30. Noch drei.

---

*Dies ist Tag 27 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir, während ich 30 Projekte in 30 Tagen mit KI-unterstützter Programmierung shippe.*
