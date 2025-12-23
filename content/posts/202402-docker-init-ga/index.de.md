---
title: "Dockerisierung vereinfachen mit Docker Init GA"
summary: "Initialisieren Sie Dockerfiles und Compose-Dateien mit einem einzigen CLI-Befehl"
categories: ["Extern"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/"
date: 2024-02-06
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---


Im Mai 2023 kündigte Docker die Beta-Version von docker init an, einem neuen Befehlszeilenschnittstellen-Tool (CLI) in Docker Desktop, das entwickelt wurde, um den Docker-Einrichtungsprozess für verschiedene Arten von Anwendungen zu vereinfachen und Benutzern zu helfen, ihre bestehenden Projekte zu containerisieren. Wir freuen uns nun, die allgemeine Verfügbarkeit von docker init anzukündigen, mit Unterstützung für mehrere Sprachen und Stacks, was die Containerisierung Ihrer Anwendungen einfacher denn je macht.


<img src="/posts/202402-docker-init-ga/feature.webp"/>


## Was ist docker init?
Ursprünglich in seiner Beta-Form in Docker 4.18 veröffentlicht, hat docker init mehrere Verbesserungen erfahren. docker init ist ein Befehlszeilendienstprogramm, das bei der Initialisierung von Docker-Ressourcen innerhalb eines Projekts hilft. Es generiert automatisch Dockerfiles, Compose-Dateien und .dockerignore-Dateien basierend auf der Art des Projekts, was die Einrichtungszeit und Komplexität im Zusammenhang mit Docker-Konfigurationen erheblich reduziert.

Die ursprüngliche Beta-Version von init unterstützte nur Go und generische Projekte. Die neueste Version, verfügbar in Docker Desktop 4.27, unterstützt Go, Python, Node.js, Rust, ASP.NET, PHP und Java.

## Wie verwendet man docker init
Die Verwendung von docker init ist unkompliziert und umfasst einige einfache Schritte. Navigieren Sie zunächst zu Ihrem Projektverzeichnis, in dem die Docker-Assets initialisiert werden sollen. Führen Sie im Terminal den Befehl docker init aus. Dieser Befehl startet das Tool und bereitet es darauf vor, Ihr Projekt zu analysieren (Abbildung 1).


<img src="/posts/202402-docker-init-ga/img/img1.webp"/>


docker init wird Ihr Projekt scannen und Sie bitten, die Vorlage zu bestätigen und auszuwählen, die am besten zu Ihrer Anwendung passt. Sobald Sie die Vorlage ausgewählt haben, fragt docker init nach einigen projektspezifischen Informationen und generiert automatisch die notwendigen Docker-Ressourcen für Ihr Projekt (Abbildung 2).

<img src="/posts/202402-docker-init-ga/img/img2.webp"/>

Dieser Schritt umfasst das Erstellen eines Dockerfiles und einer Compose-Datei, die auf die Sprache und das Framework Ihrer Wahl zugeschnitten sind, sowie anderer relevanter Dateien. Der letzte Schritt ist das Ausführen von docker-compose up, um Ihr neu containerisiertes Projekt zu starten.

## Warum docker init verwenden?
Das docker init-Tool vereinfacht den Prozess der Dockerisierung und macht ihn auch für Docker-Neulinge zugänglich. Es eliminiert die Notwendigkeit, Dockerfiles und andere Konfigurationsdateien manuell von Grund auf zu schreiben, spart Zeit und reduziert das Fehlerpotenzial. Mit seinem vorlagenbasierten Ansatz stellt docker init sicher, dass die Docker-Einrichtung für den spezifischen Anwendungstyp, an dem Sie arbeiten, optimiert ist und dass Ihr Projekt den Best Practices der Branche folgt.

## Fazit
Die allgemeine Verfügbarkeit von docker init bietet eine effiziente und benutzerfreundliche Möglichkeit, Docker in Ihre Projekte zu integrieren. Ob Sie ein erfahrener Docker-Benutzer oder neu in der Containerisierung sind, docker init wird Ihren Entwicklungsworkflow verbessern.

{{< alert >}}
**Hinweis:** Dieser Beitrag wurde ursprünglich extern veröffentlicht. Bitte besuchen Sie [Dockers Blog](https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/), um den vollständigen Beitrag zu lesen.
{{< /alert >}}
