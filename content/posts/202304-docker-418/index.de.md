---
title: "Docker Desktop 4.18"
summary: "Wir sind immer auf der Suche nach Möglichkeiten, Ihre Erfahrung mit Docker zu verbessern, egal ob Sie eine Integration, Erweiterung oder direkt im Produkt arbeiten. Docker Desktop 4.18 konzentriert sich auf Verbesserungen in der Kommandozeile und in Docker Desktop."
categories: ["Extern"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-18/"
date: 2023-04-05
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Wir sind immer auf der Suche nach Möglichkeiten, Ihre Erfahrung mit Docker zu verbessern, egal ob Sie eine Integration, Erweiterung oder direkt im Produkt arbeiten. Docker Desktop 4.18 konzentriert sich auf Verbesserungen in der Kommandozeile und in Docker Desktop.

Lesen Sie weiter, um mehr über neue CLI-Funktionen in Docker Scout zu erfahren, und erfahren Sie mehr über Docker init, eine aufregende CLI-Beta-Funktion, die Ihnen hilft, Docker schnell zu jedem Projekt hinzuzufügen. Wir überprüfen auch neue Funktionen, die Ihnen helfen, schneller mit Docker loszulegen: Container File Explorer, adminlose macOS-Installation und eine neue experimentelle Funktion in Docker Compose.

## Docker Scout CLI
In Docker Desktop 4.17 haben wir Docker Scout eingeführt, ein Tool, das Einblick in Image-Schwachstellen und Empfehlungen für schnelle Behebung bietet. Wir freuen uns, die Veröffentlichung mehrerer neuer Funktionen in der Docker Scout-Kommandozeile bekannt zu geben, die mit Docker Desktop 4.18 ausgeliefert wird. Diese Updates kommen nach einer überwältigenden Menge an Community-Feedback.

Das 4.18-Release von Docker Scout enthält eine Schwachstellen-Schnellansicht, Image-Empfehlungen direkt in der Kommandozeile, verbesserte Behebungsanleitungen mit BuildKit-SBOM-Nutzung und eine Vorschaufunktion zum Vergleichen von Images (stellen Sie sich diff vor, aber für Container-Images).

## Quickview
Angenommen, Sie haben ein neues Container-Image erstellt und möchten seine Sicherheitslage bewerten. Sie können jetzt docker scout quickview ausführen, um einen sofortigen, allgemeinen Sicherheitseinblick in Ihr Image zu erhalten. Wenn Probleme gefunden werden, wird Docker Scout Sie anleiten, was als nächstes zu tun ist.

## Kommandozeilen-Empfehlungen
Wenn Sie zuvor docker scout cves verwendet haben, um zu verstehen, welche CVEs in Ihren Images existieren, haben Sie sich vielleicht gefragt, welche Handlungsoptionen als nächstes zu ergreifen sind. Mit dem neuen docker scout recommendations-Befehl erhalten Sie eine Liste von Empfehlungen, die direkt verfügbare Updates für das Basis-Image vorschlagen.

Der docker scout recommendations-Befehl analysiert das Image und zeigt Empfehlungen an, um das Basis-Image zu aktualisieren, zusammen mit einer Liste von Vorteilen, einschließlich Möglichkeiten zur Reduzierung von Schwachstellen oder zur Erreichung kleinerer Image-Größen.

## BuildKit-Provenienz und SBOM-Attestierungen
Im Januar 2023 wurde BuildKit erweitert, um das Erstellen von Images mit Attestierungen zu unterstützen. Diese Images können nun die docker scout-Kommandozeile verwenden, um diese Informationen zu verarbeiten und relevante nächste Schritte zu bestimmen. Wir können dies unterstützen, da das docker scout-Kommandozeilentool genau weiß, mit welchem Basis-Image Sie gebaut haben, und genauere Empfehlungen geben kann.

Wenn ein Image mit einer angehängten SBOM-Attestierung erstellt und gepusht wurde, liest docker scout die Paketinformationen aus der SBOM-Attestierung, anstatt eine neue lokale SBOM zu erstellen.

Um zu erfahren, wie man Images mit Attestierungen mit BuildKit erstellt, lesen Sie "Generating SBOMs for Your Image with BuildKit."

## Images vergleichen
Hinweis: Dies ist eine experimentelle Docker Scout-Funktion und kann sich im Laufe der Zeit ändern und weiterentwickeln.

Das rückwirkende Dokumentieren der Änderungen zur Behebung eines Sicherheitsproblems nach Abschluss einer Schwachstellenbehebung gilt als gute Praxis. Docker Desktop 4.18 führt eine frühe Vorschau des Image-Vergleichs ein.

Diese Funktion hebt die Schwachstellenunterschiede zwischen zwei Images hervor und wie sich Pakete vergleichen. Diese Details umfassen die Paketversion, Umgebungsvariablen in jedem Image und mehr. Zusätzlich kann die Kommandozeilenausgabe im Markdown-Format eingerichtet werden. Diese Informationen können dann verwendet werden, um Diff-Vorschauen in Pull Requests über GitHub Actions zu generieren.

Wir würden gerne wissen, welche Szenarien Sie sich für die Verwendung dieser Diff-Funktion vorstellen können. Sie können dies tun, indem Sie Docker Desktop öffnen, zum Images-Tab navigieren und "Feedback geben" auswählen.

Lesen Sie die Dokumentation, um mehr über diese Funktionen zu erfahren.

## Container File Explorer
Eine weitere Funktion, die wir gerne ankündigen, ist das GA-Release des Container File Explorers. Wenn Sie Dateien in einem Container überprüfen oder schnell ersetzen müssen, hilft Ihnen der Container File Explorer dabei — und vieles mehr — direkt über die UI von Docker Desktop.

Sie müssen sich keine langen CLI-Befehle merken, mit langen Pfadparametern beim docker cp-Befehl herumfummeln oder frustriert sein, dass Ihr Container überhaupt keine Shell hat, um die Dateien zu überprüfen. Container File Explorer bietet eine einfache UI, die es Ihnen ermöglicht:

- Ein Container-Dateisystem zu überprüfen
- Dateien und Ordner zwischen Host und Containern zu kopieren
- Dateien einfach per Drag-and-Drop in einen Container zu ziehen
- Dateien schnell mit Syntaxhervorhebung zu bearbeiten
- Dateien zu löschen

Mit Container File Explorer können Sie die Dateien Ihrer Container in jedem Zustand (gestoppt/laufend/pausiert/…) und für jeden Container-Typ anzeigen, einschließlich Slim-Container/Slim-Images (Container ohne Shell). Öffnen Sie das Dashboard, gehen Sie zum Containers-Tab, öffnen Sie das Container-Aktionsmenü und überprüfen Sie Ihre Dateien:

## Adminlose Installation auf macOS
Wir haben unseren macOS-Installationsablauf angepasst, um es Entwicklern super einfach zu machen, Docker Desktop zu installieren, ohne ihnen Admin-Privilegien zu gewähren. Einige Entwickler arbeiten in Umgebungen mit erhöhten Sicherheitsanforderungen, in denen lokaler Admin-Zugang auf ihren Maschinen verboten sein kann. Wir wollten sicherstellen, dass Benutzer in diesen Umgebungen sich von Docker Desktop-Funktionalität abmelden können, die Admin-Privilegien erfordert.

Der Standard-Installationsablauf auf macOS wird weiterhin nach Admin-Privilegien fragen, da wir glauben, dass dies uns ermöglicht, eine optimierte Erfahrung für die große Mehrheit der Entwickler-Anwendungsfälle zu bieten. Nach Gewährung der Admin-Privilegien installiert Docker Desktop automatisch die Docker CLI-Tools, ermöglicht die nahtlose Integration von Drittanbieter-Bibliotheken mit Docker (durch Aktivierung des Standard-Docker-Sockets) und ermöglicht Benutzern die Bindung an privilegierte Ports zwischen 1 und 1024.

Wenn Sie die bei der Installation konfigurierten Einstellungen ändern möchten, können Sie dies einfach im Advanced-Tab der Docker Desktop-Einstellungen tun.

## Docker init (Beta)
Eine weitere aufregende Funktion, die wir in Beta veröffentlichen, ist docker init. Dies ist ein neuer CLI-Befehl, mit dem Sie Docker schnell zu Ihrem Projekt hinzufügen können, indem automatisch die erforderlichen Assets erstellt werden: Dockerfiles, Compose-Dateien und .dockerignore. Mit dieser Funktion können Sie bestehende Projekte einfach aktualisieren, um sie mit Containern auszuführen, oder neue Projekte einrichten, auch wenn Sie mit Docker nicht vertraut sind.

Sie können docker init ausprobieren, indem Sie auf die neueste Version von Docker Desktop (4.18.0) aktualisieren und docker init in der Kommandozeile eingeben, während Sie sich in einem Zielprojektordner befinden. docker init erstellt alle erforderlichen Dateien, um Ihr Projekt in Docker auszuführen.

Lesen Sie die docker init-Dokumentation, um mehr zu erfahren.

Die Beta-Version von docker init wird mit Go-Unterstützung ausgeliefert, und das Docker-Team arbeitet bereits daran, in den kommenden Monaten weitere Sprachen und Frameworks hinzuzufügen, darunter Node.js, Python, Java, Rust und .Net sowie andere Funktionen. Wenn es eine bestimmte Sprache oder ein Framework gibt, das wir unterstützen sollen, lassen Sie es uns wissen. Reichen Sie weiteres Feedback und Vorschläge in unserer öffentlichen Roadmap ein.

Hinweis: Bitte beachten Sie, dass docker init nicht mit der intern verwendeten docker-init-Ausführbaren verwechselt werden sollte, die von Docker aufgerufen wird, wenn Sie das –init-Flag mit dem docker run-Befehl verwenden. Lesen Sie die Dokumentation, um mehr zu erfahren.

## Docker Compose File Watch (Experimentell)
Docker Compose hat einen neuen Trick! Docker Compose File Watch ist jetzt als experimentelle Funktion verfügbar, um automatisch alle Ihre Service-Container während der Arbeit auf dem neuesten Stand zu halten.

(...)

Nach der Konfiguration beginnt der neue docker compose alpha watch-Befehl mit der Überwachung von Dateiänderungen in Ihrem Projekt:

Bei einer Änderung an ./web/App.jsx zum Beispiel synchronisiert Compose diese automatisch nach /src/web/App.jsx innerhalb des Containers.
Wenn Sie package.json ändern (z.B. durch Installation eines neuen npm-Pakets), wird Compose das Image neu erstellen und den bestehenden Service durch eine aktualisierte Version ersetzen.
Der Compose File Watch-Modus ist erst der Anfang. Mit fast 100 Commits seit dem letzten Docker Compose-Release haben wir Bugs behoben und viele Verbesserungen der Lebensqualität vorgenommen. (Ein besonderer Gruß an alle unsere neuen Erstbeitragenden!)

Wir sind begeistert von Docker Compose File Watch und arbeiten aktiv an den zugrunde liegenden Mechaniken und dem Konfigurationsformat.

## Fazit
Das war's für unser Docker Desktop 4.18-Update. Dieses Release enthält viele coole, neue Funktionen, einschließlich einiger, die Sie mitgestalten können! Wir haben auch die Docker Engine aktualisiert, um einige CVEs zu beheben. Wie immer freuen wir uns über Ihr Feedback. Bitte hinterlassen Sie Feedback auf unserer öffentlichen GitHub-Roadmap und lassen Sie uns wissen, was Sie sich sonst noch wünschen.

Schauen Sie sich die Release-Notes für eine vollständige Aufschlüsselung der Neuerungen in Docker Desktop 4.18 an.



{{< alert >}}
**Hinweis:** Dieser Beitrag wurde ursprünglich extern veröffentlicht. Bitte besuchen Sie [Docker's Blog](https://www.docker.com/blog/docker-desktop-4-18/), um den vollständigen Beitrag zu lesen
{{< /alert >}}
