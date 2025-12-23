---
title: "Docker Init"
summary: "Initialisieren Sie Dockerfiles und Compose-Dateien mit einem einzigen CLI-Befehl"
categories: ["Extern"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/"
date: 2023-05-11
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Docker hat die Art und Weise revolutioniert, wie Entwickler ihre Anwendungen erstellen, verpacken und bereitstellen. Docker-Container bieten eine leichtgewichtige, portable und konsistente Laufzeitumgebung, die auf jeder Infrastruktur ausgeführt werden kann. Und jetzt hat das Docker-Team `docker init` entwickelt, einen neuen Befehlszeileninterface (CLI) Befehl, der als Beta-Funktion eingeführt wurde und den Prozess vereinfacht, Docker zu einem Projekt hinzuzufügen (Abbildung 1).

{{< alert >}}
Hinweis: Docker Init sollte nicht mit der intern verwendeten docker-init ausführbaren Datei verwechselt werden, die von Docker aufgerufen wird, wenn das –init Flag mit dem docker run Befehl verwendet wird.
{{< /alert >}}

{{< gallery >}}
  <img src="/posts/202305-docker-init/img/img1.webp" class="grid-w50" />
  <img src="/posts/202305-docker-init/img/img2.webp" class="grid-w50" />
{{< /gallery >}}


*Mit einem Befehl werden alle erforderlichen Docker-Dateien erstellt und zu Ihrem Projekt hinzugefügt.*

## Assets automatisch erstellen
Der neue docker init Befehl automatisiert die Erstellung notwendiger Docker-Assets wie Dockerfiles, Compose-Dateien und .dockerignore-Dateien basierend auf den Eigenschaften des Projekts. Durch Ausführung des docker init Befehls können Entwickler ihre Projekte schnell containerisieren. Docker init ist ein wertvolles Werkzeug für Entwickler, die mit Docker experimentieren, über Containerisierung lernen oder Docker in ihre bestehenden Projekte integrieren möchten.

Um docker init zu verwenden, müssen Entwickler auf Version 4.19.0 oder höher von Docker Desktop upgraden und den Befehl im Zielprojektordner ausführen. Docker init erkennt die Projektdefinitionen und generiert automatisch die notwendigen Dateien, um das Projekt in Docker auszuführen.

Die aktuelle Beta-Version von docker init unterstützt Go, Node und Python, und unser Entwicklungsteam arbeitet aktiv daran, die Unterstützung für weitere Sprachen und Frameworks zu erweitern, einschließlich Java, Rust und .NET. Wenn es eine Sprache oder einen Stack gibt, den Sie hinzugefügt sehen möchten, oder wenn Sie anderes Feedback zu docker init haben, lassen Sie es uns über unser Google-Formular wissen.

Zusammenfassend ist docker init ein wertvolles Werkzeug für Entwickler, die den Prozess der Hinzufügung von Docker-Unterstützung zu ihren Projekten vereinfachen möchten. Es automatisiert die Erstellung notwendiger Docker-Assets und kann helfen, die Erstellung von Docker-Assets über verschiedene Projekte hinweg zu standardisieren. Indem es Entwicklern ermöglicht, sich auf die Entwicklung ihrer Anwendungen zu konzentrieren und das Risiko von Fehlern und Inkonsistenzen zu reduzieren, kann Docker init die Einführung von Docker und Containerisierung beschleunigen.

## Docker Init in Aktion sehen
Um docker init in Aktion zu sehen, schauen Sie sich das folgende Übersichtsvideo von Francesco Ciulla an, das das Erstellen der erforderlichen Docker-Assets für Ihr Projekt demonstriert.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/f4cHtDRZv5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/>

{{< alert >}}
**Hinweis:** Dieser Beitrag wurde ursprünglich extern veröffentlicht. Bitte besuchen Sie [Docker's Blog](https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/), um den vollständigen Beitrag zu lesen
{{< /alert >}}
