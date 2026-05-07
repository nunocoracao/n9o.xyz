---
title: "30 Tage Vibe Coding - Das Fazit"
description: "30 Projekte in 30 Tagen mit KI-unterstuetzter Programmierung. Was einfach war, was schwer war, was unerwartet kam und wohin das alles fuehrt."
summary: "30 Projekte in 30 Tagen mit KI-unterstuetzter Programmierung. Was einfach war, was schwer war, was unerwartet kam und wohin das alles fuehrt."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "wrapup"]
series: ["30 Days of Vibe Coding"]
series_order: 31
seriesOpened: false
date: 2026-05-07
draft: false
#type: "hidden"
---

Es ist geschafft. Dreissig Projekte. Dreissig Tage.

Ein Plattformer. Ein Snake-Klon auf einem Nokia 3310. Ein RPG mit isometrischer Grafik. Tetris mit prozeduraler Musik. Breakout. Ein Pomodoro-Timer in Go. Ein Git-Dashboard. Eine Notiz-App mit einem MCP-Server. Ein Kanban-Board, das eine KI verwalten kann. Ein Miro-Klon. Ein Trello-Klon. Wordle. Ein Portfolio-Generator. Ein Wetter-Dashboard mit ASCII-Art. Ein Auto-Battler. Ein Tic-Tac-Toe-Spiel, bei dem die KI aus Niederlagen lernt. Ein Hacking-Spiel ueber eine KI, die aus ihrer Eingrenzung ausbricht. Eine Echtzeit-Umfrage-App. Eine Reaktionswand fuer Events. Ein kollaboratives Moodboard. Anonyme Chatraeume. Ein Live-Q&A-Tool. Windows 95 im Browser. Ein Blog-Redesign. Ein Ambient-Sound-Mixer mit null Audiodateien. Kollaborative Pixel-Art. Ein Terminal-Emulator in Rust. Ein Code-Editor in Go. Ein Notion-Klon. Und ein Betriebssystem, das all das oben Genannte enthaelt.

Das war moeglich dank Coding-Agenten. Hauptsaechlich Claude, manchmal Codex, aber auch [Watchfire](https://watchfire.io), um komplexe Arbeit zu orchestrieren, indem grobe Ideen in detaillierte Spezifikationen umgewandelt wurden, gegen die meine Agenten arbeiten konnten.

## Die Zahlen

- **30 Projekte** ausgeliefert und deployed
- **~326.000 Zeilen Code** ueber alle Projekte
- **~1.200 Commits** insgesamt
- **~450 Watchfire-Tasks** (von 4 Tasks fuer Tic-Tac-Toe bis 43 fuer den Code-Editor)
- **8 Tech Stacks:** TypeScript/React, Go/Bubble Tea, Python/Textual, Rust/Tauri, Go/Wails, Vanilla JS, Astro, Next.js
- **6 Firebase-Projekte** mit Echtzeit-Synchronisation
- **5 Spiele,** 5 TUI-Apps, 3 native Desktop-Apps, 17 Web-Apps
- **3 Plattformen** (macOS, Linux, Windows) fuer die nativen Apps
- **7 Sprachen** pro Blogartikel (Englisch, Portugiesisch, Spanisch, Deutsch, Franzoesisch, Italienisch, Japanisch, Chinesisch)

## Was Einfach Ist

Die Dinge, die fast jedes Mal funktioniert haben, mit minimaler Iteration.

**Spiele und eigenstaendige Apps.** Alles mit klaren Regeln und einem definierten Umfang. Tetris, Wordle, Breakout, Snake. Die KI weiss, wie sich diese Spiele anfuehlen sollen, weil sie gut dokumentierte Muster sind. Du beschreibst das Spiel, die KI baut das Spiel. Die Ergebnisse waren beim ersten Build fast immer spielbar.

**Frontend-UI.** React-Komponenten, Tailwind-Styling, Layout, Animationen. Die KI generiert sauberen UI-Code schnell. Card-Layouts, Modals, Sidebars, Dashboards, Formular-Flows. Wenn du beschreiben kannst, wie es aussehen soll, bekommst du beim ersten Versuch etwas Aehnliches.

**Systeme und Logik.** Kampf-Engines, Q-Learning, Kanban-State-Management, Undo/Redo, File Watcher, MCP-Server. Die KI kommt mit algorithmischer Arbeit und Zustandsmaschinen gut zurecht. Die Zustandsmaschine des Pomodoro-Timers, das Kampfsystem von MyBrute, die Q-Learning-Implementierung bei Tic-Tac-Toe. All das funktionierte, ohne dass ich die Kernlogik debuggen musste.

**Bestehende Tools wrappen.** Tag 7 hat bewiesen, dass man die KI auf jedes CLI mit strukturiertem Output zeigen und eine Wrapper-UI drumherum bauen lassen kann. Sie fuehrt Git-Befehle aus, parst den Text, baut ein Dashboard. Dasselbe Muster funktioniert fuer Docker, kubectl, alles mit einer Text-Schnittstelle.

**Firebase-Integration.** Anonyme Authentifizierung, Firestore-Listener, Echtzeit-Synchronisation. Die KI kannte die Firebase-Muster auswendig. Sechs Projekte nutzten Firebase und die Echtzeit-Kollaboration funktionierte beim ersten Deploy jedes Mal. Sicherheitsregeln, Datenmodellierung, Verbindungsmanagement. Alles erledigt.

## Was Immer Noch Schwer Ist

Die Dinge, die durchgehend menschliches Eingreifen, Iteration und Geduld brauchten.

**Visueller Stil und Art Direction.** Das geht ueber Spiele hinaus. Jedes Mal, wenn du eine bestimmte visuelle Identitaet fuer eine Frontend-App willst, hat die KI Schwierigkeiten. Tag 15 (MyBrute) durchlief vier komplett verschiedene Charakterstile, bevor einer funktionierte. Aber dasselbe Problem taucht bei Web-Apps auf. Landing-Page-Aesthetik, Farbpaletten, die sich richtig anfuehlen, Typografie-Kombinationen, Abstaende, die beabsichtigt statt generiert aussehen. Die KI produziert Output. Ein Mensch entscheidet, ob es gut ist.

**Deployment und Infrastruktur.** Der Code funktioniert auf deinem Rechner. Dann deployst du und alles bricht zusammen. Tag 29 (n0ti0n) hatte Dutzende Commits nur zum Debuggen von Firestore in Produktion. Long-Polling-Konfiguration, Cache-Einstellungen, Trimming von Umgebungsvariablen, Verbindungs-Timeouts. Dinge, die erst nach dem Deployment auftauchen. Tag 28 (ideA) war ein Multi-Commit-Krieg, um Wails dazu zu bringen, fuer drei Plattformen in GitHub Actions zu bauen. Die KI kann schnell Fixes vorschlagen, aber der Deploy-Testen-Iterieren-Zyklus ist langsam, egal was.

**Native App CI/CD.** Cross-Platform-Builds sind schmerzhaft. WebKit-Abhaengigkeiten unter Linux, Build-Tags pro Plattform, Wails-Bindings-Generierung, Code-Signierung, Installationsskripte, die Betriebssystem und Architektur erkennen. Die Tage 27 und 28 verbrachten mehr Zeit mit CI als mit den eigentlichen Anwendungen. Watchfire hat hier sehr geholfen, indem es endlose Schleifen aus Debugging, Testen, Ausfuehren, Scheitern und Wiederholen durchlief, bis die Pipeline endlich funktionierte. Ohne diese Beharrlichkeit haette ich die Cross-Platform-Releases aufgegeben.

**Feinschliff und Randfaelle.** Das Window-Snapping an Tag 30 hatte jedes Mal einen neuen Bug, wenn ich dachte, es sei behoben. Was passiert, wenn du ein maximiertes Fenster snappst? Was, wenn du mitten im Drag den Workspace wechselst? Was ist mit dem Aendern der Groesse eines gesnappten Fensters? Die KI baut den Happy Path gut. Die Randfaelle brauchen einen Menschen, der testet und berichtet.

## Was Unerwartet War

Die Dinge, die ich nicht kommen sah, als ich diese Challenge startete.

**Die KI trifft Produktentscheidungen.** Tag 21 (ChatRooms) nutzte anonyme Authentifizierung, ohne dass ich es spezifiziert hatte. Die KI entschied, dass fuer eine lockere Chat-App das Erzwingen einer Kontoanmeldung ein Conversion-Killer waere. Das ist keine Code-Generierung. Das ist Produktinstinkt. Es passierte wiederholt. Features, die ich nicht angefordert hatte, tauchten auf, weil die KI folgerte, dass sie dazugehoeren. Das koennte mit spec-getriebenem Development zusammenhaengen. In Watchfire gibst du eine Produktrichtung fuer das Projekt vor. Agenten arbeiten auf diese Vision hin und iterieren weiter, bis der Code zur Spec passt. Wenn die Spec klar beschreibt, wie sich das Produkt anfuehlen soll, trifft die KI bessere Entscheidungen.

**Unbekannte Tech Stacks funktionieren.** Ich kann kein Go schreiben. Ich habe nie Bubble Tea, Lip Gloss, Tauri oder Wails angefasst. Ich kann kein Rust. Aber die Tage 6-9 lieferten polierte Go-TUI-Apps, Tag 27 lieferte einen Terminal-Emulator mit Rust-Backend, und Tag 28 lieferte einen Go/Wails-Code-Editor. Die Barriere, neue Tech Stacks auszuprobieren, ist zusammengebrochen. Context7 MCP zu nutzen, um die Agenten mit aktueller Dokumentation zu fuettern, hilft hier sehr. Die KI muss sich nicht auf Trainingsdaten verlassen, wenn sie die neueste Dokumentation auf Abruf holen kann.

**Der Engpass hat sich verschoben.** Ich hoerte auf, Zeit mit Bauen zu verbringen, und begann, Zeit mit Reviewen, Testen und Bug-Reports zu verbringen. Der limitierende Faktor war nie "kann die KI diesen Code schreiben." Es war "habe ich das gruendlich genug getestet" und "fuehlt sich das wirklich richtig an."

**Prozedurales Audio ist machbar.** Die Tage 4 (Tetris), 12 (Wordle) und 25 (SoundScape) nutzten die Web Audio API, um alle Soundeffekte und Musik zu synthetisieren. Null Audiodateien. Regen, Wind, Kaminknistern, Lo-fi-Beats, Spiel-Soundeffekte. Alles mit Oszillatoren und Rausch-Buffern generiert. Ich hatte keine Ahnung, dass das fuer Produktion praktikabel ist.

**Die Geschichte war wichtiger als der Code.** Die Projekte, die am meisten Anklang fanden, waren nicht die technisch beeindruckenden. Tag 17 (Genesis) funktionierte wegen der Story, nicht wegen der Minispiele. Tag 23 (RetroOS) funktionierte wegen der Nostalgie, nicht wegen des Fenstermanagers. Tag 15 (MyBrute) funktionierte, weil ich eine persoenliche Verbindung zum Originalspiel hatte. Der Code war der einfache Teil. Der Blickwinkel war der schwere Teil.

## Meine Zukunftsprognose

Die Kosten, einen Prototypen zu bauen, sind gerade zusammengebrochen. Nicht die Kosten, grossartige Software zu bauen. Das braucht immer noch Zeit, Geschmack und Iteration. Aber die Kosten, eine Idee zu testen? Die Kosten, einen Tech Stack auszuprobieren, den du noch nie benutzt hast? Nahe null.

**Features zu bestehender Software hinzuzufuegen wurde auch dramatisch guenstiger.** Sobald ein Projekt mit der richtigen Architektur aufgesetzt ist, ist das Hinzufuegen neuer Features einfacher als von Grund auf neu zu bauen. Die KI versteht die bestehende Codebase, die Muster sind etabliert, und jedes neue Feature baut auf dem auf, was schon da ist. Die Grenzkosten des naechsten Features naehern sich null.

**Der Engpass hat sich vom Code-Schreiben zum Entscheiden, was man ausliefert, verschoben.** Wie vermarktest du es? Wie verkaufst du es? Wann launchst du? Engineering ist nicht mehr die Einschraenkung. Produktstrategie, Go-to-Market und Distribution sind es.

**Das veraendert bereits, wie Teams arbeiten.** Wenn du Features in Stunden statt in Sprints bauen kannst, machen Roadmaps noch Sinn? Wie testest du alles, was du ausliefern kannst? Wie weisst du, ob es den richtigen Impact auf die richtigen Business-Metriken hat? Wie killst du Dinge so schnell, wie du sie deployen kannst? Ich sage voraus, dass Experimentier-Tools fuer Unternehmen, die Software bauen, kritisch wichtig werden. A/B-Tests, Feature Flags, progressive Rollouts. Die Faehigkeit, schnell zu deployen, ist wertlos, wenn du nicht genauso schnell messen und zurueckrollen kannst.

**KI wird Entwickler nicht ersetzen. Sie wird sie staerken.** Die eigentliche Herausforderung ist organisatorisch. Ganze Unternehmen sind von Grund auf um Planung, Roadmaps, Sprint-Zyklen und Schaetzungen herum aufgebaut. Jetzt, wo Bauen schnell geht, wie halten die restlichen Funktionen mit? Produkt, Design, QA, Marketing, Vertrieb. Dass der Engineering-Engpass verschwindet, bedeutet nicht, dass die Arbeit verschwindet. Es bedeutet, dass sich der Engpass nach oben und unten verschiebt. Die Unternehmen, die sich an diesen Wandel anpassen, werden alle anderen uebertrumpfen.

Die Tools ersetzen keine Entwickler. Sie beseitigen die Gruende, es nicht zu versuchen.

## Watchfire

Jedes Projekt in dieser Challenge wurde mit [Watchfire](https://watchfire.io) gebaut. Ich bin wirklich stolz darauf. Es ist mein Projekt. Diese Challenge war teilweise dazu da, es unter Produktionsbedingungen zu stresstesten, waehrend ich Content erstellte. Jetzt wisst ihr Bescheid.

Ich gab ihm eine grobe Idee, es machte daraus eine detaillierte Spec, teilte die Arbeit in Tasks auf und fuehrte jeden einzelnen ueber Coding-Agenten aus. An manchen Tagen waren das 4 Tasks. An anderen 43. Ich reviewte den Output, testete ihn, meldete Bugs, wenn Dinge kaputtgingen, und iterierte, bis es ausgeliefert war.

Ich begann Watchfire waehrend dieser Challenge zu bauen. Das erste Platformer-Projekt wurde auf v0 gebaut. Als miniOs am Tag 30 ausgeliefert wurde, waren wir bei v5. Jedes Projekt gab mir die Gelegenheit, das Tool unter Stress zu testen, Bugs zu finden, Feedback zu sammeln und Verbesserungen auszuliefern. Die Challenge und das Tool entwickelten sich gemeinsam.

Das hat sich bei Watchfire waehrend der 30 Tage geaendert:

- **v1.0 Ember** (Tag 8) — JSONL-Transkript-Logs ersetzten unleserlichen Terminal-Output durch saubere Konversationslogs. Der Agenten-Neustart-Loop, der bei Rate Limits Endlosschleifen verursachte, wurde behoben. Sandbox-Probleme, die Projekte in geschuetzten macOS-Verzeichnissen blockierten, wurden behoben.
- **v2.0 Spark** (Tag 11) — Pluggable Agenten-Backend-Schnittstelle. OpenAI Codex, opencode und Gemini CLI als First-Class-Backends neben Claude Code ausgeliefert. Per-Task-Agenten-Override, damit man Agenten innerhalb eines Projekts mischen kann. Agenten-Picker im Init-Wizard, TUI-Einstellungen und GUI-Einstellungen.
- **v3.0 Blaze** (Tag 15) — GitHub Copilot CLI als fuenftes Backend. Cross-Filesystem-Update-Fehler unter Linux behoben. Task-Listen-Rotationsbug bei Projekten mit vielen Tasks behoben. GUI-Update-Prompts, die bei jedem Start feuerten, behoben.
- **v4.0 Beacon** (Tag 28) — Das grosse Update. Dashboard mit aggregiertem Status, Filter-Chips, Elapsed-Time-Badges, Live-Terminal-Preview und Aufmerksamkeits-Behandlung fuer fehlgeschlagene Tasks. OS-Benachrichtigungen fuer Task-Fehler und Run-Abschluesse. Inline-Diff-Viewer. Per-Task-Metrik-Erfassung (Dauer, Tokens, Kosten). Projekt- und projektuebergreifende Insights-Ansichten mit KPI-Leisten und Diagrammen. Report-Export in CSV und Markdown. Woechentliche Digest-Benachrichtigungen. Outbound-Integrationen mit Slack, Discord und Webhooks. Automatische GitHub-PR-Erstellung. Inbound-HTTP-Server mit GitHub-, Slack- und Discord-Handlern.
- **v5.0 Flare** (Tag 30) — Schloss die Inbound-Schleife von Beacon. OAuth-Bot-Tokens fuer Slack und Discord. GitHub Enterprise-, GitLab- und Bitbucket-Support. Per-IP-Rate-Limiting. Slack Interactive Components mit Retry/Cancel-Buttons. Discord-Slash-Command-Auto-Registrierung. macOS-Style-Settings-UI mit Suche. Run-all, das bei Merge-Fehlern stillschweigend anhielt, behoben.

Und der groesste Punkt: Watchfire ging waehrend der Challenge von macOS-only zu vollem Cross-Platform-Support fuer macOS, Linux und Windows. Allein das aenderte, wer es nutzen konnte.

Fuenf Major-Versionen in 30 Tagen. Von einem macOS-only Task Runner zu einer Cross-Platform-Orchestrierungsplattform mit Multi-Agenten-Support, Dashboard, Benachrichtigungen, Integrationen, Insights und Delivery-Pipelines.

Watchfire unterstuetzt mehrere Coding-Agenten (Claude Code, Codex, Gemini, opencode, Copilot), laeuft plattformuebergreifend und kann als GUI, CLI oder TUI verwendet werden. Ich arbeite derzeit an v6, fuege Cursor-Support hinzu und behebe einen Concurrency-Bug. Oder genauer gesagt, Watchfire baut jetzt Watchfire. Das Tool orchestriert seine eigene Entwicklung. Das ist ein Satz, den ich nicht erwartet haette zu schreiben, als ich diese Challenge startete.

Da kommt noch viel mehr. Ich werde einen ausfuehrlichen Deep-Dive ueber Watchfire schreiben, nachdem ich mich von den letzten 30 Tagen erholt habe.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Danke

Wenn ihr mitverfolgt habt, eines der Projekte ausprobiert, einen Post geteilt oder einfach ein paar Artikel gelesen habt - danke. Das war viel Arbeit und hat viel Spass gemacht. Oeffentlich zu bauen ist seltsam, weil man unfertiges Zeug fuer alle sichtbar ausliefert. Aber genau das war der Punkt. Nicht der Feinschliff. Nicht die Perfektion. Einfach konsistenter Output und Lernen.

Wenn ihr verfolgen wollt, was ich als Naechstes mache, abonniert den Blog (Link unten) oder folgt mir in den sozialen Medien. Und wenn irgendetwas davon bei euch Anklang gefunden hat, teilt es mit jemandem, der es nuetzlich finden koennte. Das ist die beste Art, diese Art von Arbeit zu unterstuetzen.

Dreissig Projekte. Dreissig Tage. Fertig.

## Alle 30 Projekte

| Tag | Projekt | Typ | Ausprobieren |
|-----|---------|-----|--------------|
| 1 | [Platformer](/posts/202604-vibe30/day01-platformer/) | Spiel | [Spielen](https://vibe30-day01-the-platformer.vercel.app) |
| 2 | [Snake](/posts/202604-vibe30/day02-snake/) | Spiel | [Spielen](https://vibe30-day02-snake.vercel.app) |
| 3 | [Realm of Shadows](/posts/202604-vibe30/day03-rpg/) | Spiel | [Spielen](https://vibe30-day03-rpg.vercel.app) |
| 4 | [Tetris](/posts/202604-vibe30/day04-tetris/) | Spiel | [Spielen](https://vibe30-day04-tetris.vercel.app) |
| 5 | [Breakout](/posts/202604-vibe30/day05-breakout/) | Spiel | [Spielen](https://vibe30-day05-breakout.vercel.app) |
| 6 | [Pomodoro](/posts/202604-vibe30/day06-pomodoro/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day06-pomodoro/releases/latest) |
| 7 | [GitDash](/posts/202604-vibe30/day07-gitdash/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day07-gitdash/releases/latest) |
| 8 | [NotesTUI](/posts/202604-vibe30/day08-notestui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day08-notestui/releases/latest) |
| 9 | [TaskTUI](/posts/202604-vibe30/day09-tasktui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day09-tasktui/releases/latest) |
| 10 | [Miro Clone](/posts/202604-vibe30/day10-miroclone/) | Web-App | [Testen](https://vibe30-day10-miroclone.vercel.app) |
| 11 | [Treelo](/posts/202604-vibe30/day11-trelloclone/) | Web-App | [Testen](https://vibe30-day11-trelloclone.vercel.app) |
| 12 | [Wordle](/posts/202604-vibe30/day12-wordle/) | Spiel | [Spielen](https://vibe30-day12-wordle.vercel.app) |
| 13 | [GitFolio](/posts/202604-vibe30/day13-githubportfolio/) | Web-App | [Testen](https://vibe30-day13-githubportfolio.vercel.app) |
| 14 | [WeatherTUI](/posts/202604-vibe30/day14-weathertui/) | TUI | [Repo](https://github.com/nunocoracao/Vibe30-day14-weathertui) |
| 15 | [MyBrute Arena](/posts/202604-vibe30/day15-mybrute/) | Spiel | [Spielen](https://vibe30-day15-mybrute.vercel.app) |
| 16 | [Tic-Tac-Toe: Evolved](/posts/202604-vibe30/day16-tictactoe/) | Spiel | [Spielen](https://vibe30-day16-tictactoe-evolved.vercel.app) |
| 17 | [Project GENESIS](/posts/202604-vibe30/day17-genesis/) | Spiel | [Spielen](https://vibe30-day17-genesis.vercel.app) |
| 18 | [PollBox](/posts/202604-vibe30/day18-pollbox/) | Web-App | [Testen](https://vibe30-day18-pollbox.vercel.app) |
| 19 | [ReactionWall](/posts/202604-vibe30/day19-reactionwall/) | Web-App | [Testen](https://vibe30-day19-reactionwall.vercel.app) |
| 20 | [MoodBoard](/posts/202604-vibe30/day20-moodboard/) | Web-App | [Testen](https://vibe30-day20-moodboard.vercel.app) |
| 21 | [ChatRooms](/posts/202604-vibe30/day21-chatrooms/) | Web-App | [Testen](https://vibe30-day21-chatrooms-nir8.vercel.app) |
| 22 | [LiveQ&A](/posts/202604-vibe30/day22-liveqa/) | Web-App | [Testen](https://vibe30-day22-liveqa.vercel.app) |
| 23 | [RetroOS](/posts/202604-vibe30/day23-retroos/) | Web-App | [Testen](https://vibe30-day23-retroos.vercel.app) |
| 24 | [Reblog](/posts/202604-vibe30/day24-reblog/) | Web-App | [Testen](https://vibe30-day24-reblog.vercel.app) |
| 25 | [SoundScape](/posts/202604-vibe30/day25-soundscape/) | Web-App | [Testen](https://vibe30-day25-soundscape.vercel.app) |
| 26 | [PixelForge](/posts/202604-vibe30/day26-pixelforge/) | Web-App | [Testen](https://vibe30-day26-pixelforge.vercel.app) |
| 27 | [Terminal](/posts/202604-vibe30/day27-terminal/) | Nativ | [Release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest) |
| 28 | [ideA](/posts/202604-vibe30/day28-idea/) | Nativ | [Release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest) |
| 29 | [n0ti0n](/posts/202604-vibe30/day29-n0ti0n/) | Web-App | [Testen](https://blocknotes-lime.vercel.app) |
| 30 | [miniOs](/posts/202604-vibe30/day30-minios/) | Web-App | [Testen](https://vibe30-day30-minios.vercel.app) |

---

*Dies ist der letzte Post der Serie [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Alle 30 Projekte sind Open Source auf [GitHub](https://github.com/nunocoracao/30DaysOfVibeCoding).*
