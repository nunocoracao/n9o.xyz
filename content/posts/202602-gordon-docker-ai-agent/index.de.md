---
title: "Gordon: Dockers KI-Agent hat ein Update bekommen"
summary: "Lernen Sie Gordon kennen, Dockers KI-Agent, der in Docker Desktop integriert ist. Er versteht Ihre Container, Images und Umgebung — und hilft Ihnen beim Debuggen, beim Erstellen von Dockerfiles und beim Ausführen von Korrekturen mit Ihrer Genehmigung."
categories: ["Extern"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/"
date: 2026-02-23
draft: false
---

KI-Agenten bewegen sich von Demos zu täglichen Arbeitsabläufen. Sie schreiben Code, führen Befehle aus und erledigen mehrstufige Aufgaben ohne ständige Anleitung. Aber universelle Agenten kennen Docker nicht. Sie verstehen weder Ihre Container noch Ihre Images oder Ihre spezifische Konfiguration.

Gordon schon. Führen Sie einfach `docker ai` in Ihrem Terminal aus oder probieren Sie es in Docker Desktop aus.

Gordon ist ab heute in Docker Desktop 4.61 verfügbar, noch in der Beta-Phase, und ist ein speziell für Docker entwickelter KI-Agent. Er hat Zugriff auf die Shell, die Docker CLI, Ihr Dateisystem und umfassendes Wissen über Docker-Best-Practices. Zeigen Sie ihm ein Problem, genehmigen Sie seine Aktionen und sehen Sie ihm bei der Arbeit zu.

## Warum Docker seinen eigenen Agenten braucht

Wenn Ihr Container mit Code 137 beendet wird, erklärt Claude oder ChatGPT, was OOM bedeutet. Gordon prüft das Speicherlimit Ihres Containers, untersucht die Logs, identifiziert den speicherhungrigen Prozess und schlägt eine Lösung vor. Eine Genehmigung, und es ist erledigt.

Wenn Sie eine Next.js-App containerisieren müssen, schlägt Copilot vielleicht ein Dockerfile vor. Gordon untersucht Ihre Projektstruktur, erkennt Ihre Abhängigkeiten, generiert ein produktionsreifes Dockerfile mit Multi-Stage-Builds, erstellt eine docker-compose.yml mit den richtigen Diensten und richtet Ihre Umgebungskonfigurationen ein.

Der Unterschied liegt im Kontext und in der Ausführung. Gordon weiß, was auf Ihrem Rechner läuft. Er kann Ihren Docker-Zustand lesen, auf Ihr Dateisystem zugreifen und Maßnahmen ergreifen. Er rät nicht — er arbeitet mit Ihrer tatsächlichen Umgebung.

## Was Gordon kann

**Debuggen und beheben** – Container startet nicht. Dienst ist fehlerhaft. Irgendetwas verbraucht den gesamten Speicher. Gordon untersucht Logs, prüft den Container-Status, identifiziert die Ursache und schlägt Lösungen vor. Sie genehmigen, er führt aus.

**Erstellen und containerisieren** – Nimm diese Anwendung und bring sie in Docker zum Laufen. Gordon untersucht Ihr Projekt, generiert produktionsreife Dockerfiles mit Multi-Stage-Builds, erstellt eine docker-compose.yml mit den richtigen Diensten und kümmert sich um Umgebungskonfigurationen und Abhängigkeiten.

**Ausführen und verwalten** – Speicherplatz freigeben. Alle Container stoppen. Bestimmte Images pullen und ausführen. Routinemäßige Docker-Operationen sollten im Gespräch erledigt werden, nicht durch einen Blick in die Dokumentation.

**Entwickeln und optimieren** – Health Checks hinzufügen. Multi-Stage-Builds implementieren. Sicherheits-Best-Practices anwenden. Image-Größen reduzieren. Bestehende Docker-Setups produktionsreif machen.

Gordon erledigt all das.

## Wie Gordon funktioniert

Gordon basiert auf **cagent**, Dockers Agent-Framework, das in Docker Desktop enthalten ist, und läuft lokal innerhalb von Docker Desktop. Er hat Zugriff auf:

- **Ihre Shell** – Kann nach Genehmigung Befehle ausführen
- **Ihr Dateisystem** – Liest Projektstruktur, Konfigurationen, Logs
- **Docker CLI** – Vollständiger Zugriff auf Docker-Operationen
- **Docker-Wissensdatenbank** – Dokumentation, Best Practices, gängige Muster

Sie können Gordons Arbeitsverzeichnis auf eine bestimmte Codebasis ausrichten. Damit erhält Gordon den vollständigen Kontext über Ihre Projektstruktur, Abhängigkeiten und das bestehende Docker-Setup.

Das Berechtigungsmodell ist unkompliziert: Gordon zeigt Ihnen, was er tun möchte, Sie genehmigen oder lehnen ab, dann führt er aus. Jeden Befehl. Jede Dateiänderung. Jede Docker-Operation. Sie schauen nicht passiv zu — Sie leiten einen Agenten, der Docker in- und auswendig kennt.

## Wo Sie Gordon finden

**Docker Desktop:** Suchen Sie nach dem Gordon-Symbol in der linken Seitenleiste

**CLI:** Führen Sie `docker ai` in Ihrem Terminal aus

Gordon ist in allen Docker-Abonnements enthalten:

- **Personal:** Enthalten
- **Pro:** 3-fache Nutzungskapazität
- **Team:** 3-fache Nutzungskapazität
- **Business:** 6-fache Nutzungskapazität

**Hinweis für Business-Nutzer:** Wenn Sie Gordon nicht sehen, muss Ihr Administrator die Aktivierung für Ihre Organisation anfordern. Wenden Sie sich an Ihr Docker-Account-Team oder kontaktieren Sie den Support.

## Jetzt loslegen

1. Laden Sie Docker Desktop 4.61+ herunter
2. Melden Sie sich mit Ihrem Docker-Konto an
3. Klicken Sie auf das Gordon-Symbol, wählen Sie ein Projektverzeichnis und fragen Sie „Optimiere mein Dockerfile"
4. Erkunden Sie die vollständige Dokumentation in den Docker Docs

Gordon ist jetzt in Docker Desktop 4.61 und höher verfügbar.

Lesen Sie den Originalbeitrag auf dem [Docker Blog](https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/) weiter.
