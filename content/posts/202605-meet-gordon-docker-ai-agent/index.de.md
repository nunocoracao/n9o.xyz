---
title: "Lernen Sie Gordon kennen: Dockers KI-Agent für Ihren gesamten Container-Workflow"
summary: "Gordon ist jetzt allgemein verfügbar — Dockers KI-Agent, integriert in Docker Desktop und die CLI, der Ihre Umgebung liest, Fehler zurückverfolgt und mit Ihrer Genehmigung in Ihrem gesamten Container-Workflow Aktionen ausführt."
categories: ["Extern"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/"
date: 2026-05-19
draft: false
---

Container-Workflows sind voller kleiner Reibungspunkte, die sich summieren: Build-Caches, die zum schlechtesten Zeitpunkt ungültig werden, Services, die sich gegenseitig nicht finden, Images, die lokal funktionieren, aber in der CI abstürzen, und Fehlermeldungen, die auf nicht mehr existierende Ressourcen verweisen. Allgemeine Coding-Assistenten sind großartig bei der Anwendungslogik, aber sie können Ihre laufenden Container, Ihre Logs, Ihre Compose-Dateien oder den Zustand Ihrer Maschine nicht sehen. Sie wissen nur, was Sie einfügen.

Gordon wurde genau für diese Lücke gebaut. Heute ist Gordon allgemein verfügbar — Dockers KI-Agent, speziell für Container-Workflows entwickelt, integriert in Docker Desktop und die CLI.

## Was Gordon macht

Gordon liest Ihre Umgebung, bevor Sie fragen. Er schaut sich Logs, Images, Compose-Dateien und laufende Container an, verfolgt Fehler bis zur eigentlichen Ursache zurück, schlägt eine Lösung vor und führt — mit Ihrer Genehmigung — Aktionen über die Docker CLI und Ihr Dateisystem aus.

Ein paar Dinge, die Gordon von Stunden auf Minuten reduziert:

- **Defekte Container debuggen** — "Mein Container beendet sich ständig" → Gordon liest die Logs, identifiziert die fehlende Umgebungsvariable, das falsche Base-Image oder das falsch konfigurierte Volume und schlägt eine Lösung vor.
- **Neue Apps containerisieren** — "Containerisiere diese App und richte eine Dev-Umgebung mit Postgres ein" → Gordon schreibt das Dockerfile, den Compose-Stack und startet ihn.
- **Dockerfiles optimieren** — Multi-Stage-Builds, Layer-Reihenfolge für bessere Cache-Hits, schlankere Base-Images, Health Checks.
- **Routineoperationen** — "Räume ungenutzte Images auf" → Gordon zeigt Ihnen die Befehle zur Genehmigung, kein Nachschlagen von Flags nötig.
- **Kontextabfragen** — Fragen Sie zu laufenden Containern, Speicherplatz oder Images, ohne sich Docker-Flags merken zu müssen.
- **Lernen im Kontext** — Lassen Sie sich Docker-Konzepte anhand Ihres tatsächlichen Setups erklären, nicht anhand eines veralteten Blogposts.

## Wo Gordon lebt

Gordon ist an zwei Stellen integriert:

- **Docker Desktop** — ein eigener Tab mit vollem Umgebungskontext, plus kontextuelles Einblenden, wenn Probleme auftauchen.
- **CLI** — führen Sie `docker ai` in Ihrem Terminal aus.

Verfügbar in Docker Desktop 4.74 und höher.

## Genehmigung zuerst — by Design

Jede Aktion, die Gordon ausführt — jeder Shell-Befehl, jede Dateimodifikation, jede Docker-Operation — wird Ihnen vor der Ausführung zur Genehmigung angezeigt. Berechtigungen sind sitzungsgebunden und werden beim Schließen der Sitzung zurückgesetzt. Sie können optional Auto-Approve für vertrauenswürdige Workflows aktivieren. Es wird kein Code oder persönliche Daten gespeichert, und KI-Anbieter behalten Ihre Daten nicht. Die zugrundeliegende Infrastruktur ist SOC 2 Type 2 attestiert und ISO 27001 zertifiziert.

## Gordon im Stack

Gordon ersetzt keine Coding-Assistenten wie Cursor, Copilot oder Claude Code — er ergänzt sie. Diese Tools sind für Anwendungslogik und neue Code-Generierung zuständig. Gordon ist für Container-Workflows, Infrastruktur, Debugging und Deployment zuständig. Zusammen decken sie den gesamten Weg vom Code bis zur Produktion ab, ohne Kontextwechsel.

## Preise

Gordon ist kostenlos mit jedem Docker-Konto, mit Nutzungslimits, die sich alle paar Stunden zurücksetzen. Für intensivere Nutzung bietet Gordon Plus 2x Kapazität für 20 USD/Monat, mit Plänen, die bis zu 20x skalieren.

## Loslegen

1. Aktualisieren Sie Docker Desktop auf 4.74 oder höher
2. Klicken Sie auf das Gordon-Symbol in der Seitenleiste oder führen Sie `docker ai` in Ihrem Terminal aus
3. Richten Sie ihn auf ein Projekt und fragen Sie etwas — "optimiere mein Dockerfile" ist ein guter erster Prompt

Lesen Sie den Originalbeitrag weiter im [Docker Blog](https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/).
