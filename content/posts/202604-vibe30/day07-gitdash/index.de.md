---
title: "30 Days of Vibe Coding - Tag 7 - GitDash"
description: "Ein Terminal-Dashboard zur Statusueberwachung aller Git-Repositories auf einen Blick, gebaut mit Go und Bubble Tea."
summary: "Ein Terminal-Dashboard zur Statusueberwachung aller Git-Repositories auf einen Blick, gebaut mit Go und Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-07", "go", "tui", "terminal", "git"]
series: ["30 Days of Vibe Coding"]
series_order: 7
seriesOpened: false
date: 2026-04-12
draft: false
#type: "hidden"
---

Tag 7. Gleicher Stack wie gestern. Gleiches Framework. Auch nicht die originellste Idee.

Nachdem Tag 6 bewiesen hatte, dass ich mit Go und Bubble Tea bauen kann, obwohl ich beides noch nie angefasst hatte, wollte ich etwas anderes testen: Was passiert, wenn man die KI auf ein bestehendes Tool richtet und sie bittet, einen Wrapper zu bauen? In diesem Fall: git. Ich habe zu viele Repos und null Ahnung, welche davon uncommittete Aenderungen haben.

## Der Prompt

> "Baue eine TUI-App in Go, die einen Verzeichnisbaum nach Git-Repos durchsucht und deren Status in einem Terminal-Dashboard anzeigt. Farbcodiert: Gruen fuer sauber, Gelb fuer schmutzig, Blau fuer voraus/hinterher. Lass mich fetchen, pullen und eine Shell in jedem Repo oeffnen. Verwende Bubble Tea fuer die UI."

## Wie es gebaut wurde

Der interessante Teil dieses Builds ist nicht die UI oder das Framework. Es ist die Art, wie die KI mit git interagiert hat. Die ganze App ist im Grunde ein Wrapper: Sie ruft `git` fuer jede angezeigte Information als Shell-Befehl auf. Branch-Namen, Commit-Hashes, Voraus/Hinterher-Zaehler, Stash-Listen, Tracking geaenderter Dateien. Es wird keine Go-Git-Bibliothek verwendet. Es werden die gleichen Befehle ausgefuehrt, die man von Hand tippen wuerde, und die Ausgabe wird geparst.

Die KI hat die Arbeit in Pakete aufgeteilt, die den Verantwortlichkeiten entsprechen: Ein Scanner, der Verzeichnisbaeume nach `.git`-Ordnern durchsucht, ein Git-Paket, das CLI-Befehle wrapt, ein Konfigurationssystem mit YAML und eine TUI-Schicht auf Basis von Charms Bubble Tea. Der Scanner ueberspringt `node_modules`, `vendor` und versteckte Verzeichnisse. Das Git-Paket kuemmert sich um Branch, Status, Log, Rev-List, Stash-Liste und Describe. Die UI hat eine saubere Trennung zwischen Listenansicht, Detailansicht, Statusleiste, Hilfe-Overlay und Styles.

Es kam sogar mit einem Makefile fuer plattformuebergreifende Builds (darwin/linux, amd64/arm64) und einem Install-Skript, das Betriebssystem und Architektur automatisch erkennt.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was dabei rauskam

![GitDash Hauptansicht mit nach Status gruppierten Repos](images/screenshot-01.png)

**Es gruppiert Repos nach Status.** Schmutzige Repos mit uncommitteten Aenderungen erscheinen zuerst (gelber Punkt), dann Repos die mit dem Remote synchronisiert werden muessen (Voraus/Hinterher-Zaehler in Blau), dann saubere Repos (gruenes Haekchen). Auf einen Blick sehe ich, welche Repos Aufmerksamkeit brauchen. Druecke `s` um zwischen gruppierter und alphabetischer Ansicht zu wechseln.

![GitDash mit ausgewaehltem Repo](images/screenshot-02.png)

**Jedes Repo zeigt viele Infos auf zwei Zeilen.** Name, Branch in rosa Klammern, letzter Tag in Klammern, Sauber/Schmutzig-Indikator, Voraus/Hinterher-Pfeile, relative Commit-Zeit rechts, und die letzte Commit-Nachricht darunter. Es packt ueberraschend viel Kontext in wenig Platz.

![Detailansicht fuer ein einzelnes Repo](images/screenshot-03.png)

**Die Detailansicht ist wirklich nuetzlich.** Druecke Enter bei einem Repo und du bekommst das volle Bild: Pfad, Branch, Tag, Status, Remote-Sync-Status, vollstaendige Commit-Nachricht mit Autor, Liste geaenderter Dateien falls schmutzig, und Stash-Anzahl. Von hier aus kannst du pullen oder `g` druecken, um direkt eine Shell im Verzeichnis des Repos zu oeffnen.

![Von GitDash geoeffnete Shell](images/screenshot-04.png)

**Die Shell-Integration funktioniert.** Druecke `g` und es startet deine Shell (liest `$SHELL`) im Repo-Verzeichnis. Mach dein Ding, beende die Shell, und du bist zurueck in GitDash. Wenn du zurueckkommst, wird der Repo-Status automatisch aktualisiert.

**Es hat Suche/Filter.** Druecke `/` und tippe los, um Repos in Echtzeit nach Namen zu filtern. Nuetzlich, wenn du ein Verzeichnis mit Dutzenden von Projekten durchsuchst.

**YAML-Konfigurationsdatei.** Lege deine Watch-Pfade in `~/.config/gitdash/config.yaml` fest, damit du nicht jedes Mal `-path` uebergeben musst. Konfiguriere mehrere Verzeichnisse, maximale Scan-Tiefe und ob versteckte Ordner angezeigt werden sollen.

## Die Bug-Reports

Nichts Gravierendes bei diesem Projekt. Die TUI kam sauber zusammen. Das Einzige, was mir aufgefallen ist: Bei sehr grossen Verzeichnisbaeumen dauert der initiale Scan einen Moment, aber es zeigt eine "Scanning for repositories..."-Meldung, damit man weiss, dass es arbeitet.

## Die Zahlen

- **11 Go-Quelldateien** verteilt auf 5 Pakete (main, config, git, scanner, ui)
- **~1.900 Zeilen Go**
- **1 Testdatei** fuer den Scanner
- **Plattformuebergreifende Builds** fuer macOS und Linux (amd64/arm64)
- **Install-Skript** mit automatischer Erkennung von Betriebssystem und Architektur
- **Tatsaechliche Hands-on-Zeit:** vielleicht 20 Minuten Testen und Prompt-Anpassung

## Ausprobieren

{{< github repo="nunocoracao/Vibe30-day07-gitdash" showThumbnail=true >}}

Installiere es mit:

```bash
go install github.com/nunocoracao/Vibe30-day07-gitdash@latest
```

Oder der Einzeiler:

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day07-gitdash/main/scripts/install.sh | bash
```

Dann einfach `gitdash` in einem beliebigen Verzeichnis ausfuehren, das Git-Repos enthaelt.

## Fazit zu Tag 7

Ich will ehrlich sein: Das ist kein kreatives Projekt. Ein Git-Status-Dashboard ist keine neue Idee. Lazygit und tig existieren bereits und machen es besser. Und es ist der gleiche Go + Bubble Tea Stack, den ich gestern verwendet habe, also gibt es auch keine "unbekannte Technologie"-Geschichte zu erzaehlen.

Aber der Build hat etwas Bemerkenswertes gezeigt. Die KI musste gits Interna nicht verstehen. Sie hat einfach die CLI gewrapt. Jedes Datenstueck in diesem Dashboard stammt aus einem ausgefuehrten Git-Befehl und dem Parsen der Textausgabe. `git status --porcelain` fuer geaenderte Dateien. `git rev-list --count` fuer Voraus/Hinterher. `git stash list` fuer Stash-Zaehler. Es hat git als Black Box mit Textschnittstelle behandelt, was genau das ist, wie die meisten Entwickler es auch tun.

Das ist das interessante Muster von heute. Man kann die KI auf jedes CLI-Tool mit strukturierter Ausgabe richten und bekommt eine Wrapper-UI darum gebaut. Git, Docker, kubectl, was auch immer. Die KI muss die Interna des Systems nicht besser verstehen als du. Sie muss nur wissen, welche Befehle sie ausfuehren und wie sie die Rueckgabe parsen soll.

Das Projekt selbst ist okay. Es funktioniert, die Gruppierung nach Status ist auf einen Blick nuetzlich, die Detailansicht packt viele Infos rein. Aber ich werde nicht so tun, als wuerde ich das taeglich nutzen, wenn ich einfach `git status` in jedem Repo ausfuehren kann. Der Wert lag hier darin, das Muster zu erkennen, nicht im spezifischen Tool.

---

*Dies ist Tag 7 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Begleite mich, waehrend ich in 30 Tagen 30 Projekte mit KI-gestuetztem Coding shippe.*
