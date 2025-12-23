---
title: "Der Docker MCP Catalog: Der sichere Weg, MCP Server zu entdecken und auszuführen"
summary: "Das Model Context Protocol (MCP) Ökosystem explodiert. In nur wenigen Wochen hat unser Docker MCP Catalog 1 Million Pulls überschritten, was bestätigt, dass Entwickler hungrig nach einem sicheren Weg sind, MCP Server auszuführen. Heute freuen wir uns, wichtige Updates für den Docker MCP Catalog zu teilen, einschließlich verbesserter Discovery-Funktionen und unserem neuen offenen Einreichungsprozess."
categories: ["Extern"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/"
date: 2025-07-01
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Das Model Context Protocol (MCP) Ökosystem explodiert. In nur wenigen Wochen hat unser Docker MCP Catalog 1 Million Pulls überschritten, was bestätigt, dass Entwickler hungrig nach einem sicheren Weg sind, MCP Server auszuführen. Heute freuen wir uns, wichtige Updates für den Docker MCP Catalog zu teilen, einschließlich verbesserter Discovery-Funktionen und unserem neuen offenen Einreichungsprozess. Mit Hunderten von Entwicklern, die bereits darum bitten, ihre MCP Server über Docker zu veröffentlichen, beschleunigen wir unsere Mission, containerisierte MCP Server zum Standard für sichere KI-Tool-Distribution zu machen.

Die schnelle Adoption von MCP Servern hebt auch ein kritisches Problem hervor — die aktuelle Praxis, sie über npx- oder uvx-Befehle auszuführen, setzt Systeme unverifiziertem Code mit vollem Host-Zugriff aus, ganz zu schweigen von der Dependency-Management-Friktion. In diesem Beitrag erklären wir, warum Docker in das MCP-Ökosystem investiert, zeigen die neuen Catalog-Funktionen und teilen, wie Sie zum Aufbau einer sichereren Grundlage für KI-Anwendungen beitragen können.

## Warum Docker den MCP Catalog baut
### Die Sicherheitsprobleme bei der MCP-Distribution
Jedes Mal, wenn ein Entwickler npx -y @untrusted/mcp-server oder uvx some-mcp-tool ausführt, geht er einen gefährlichen Kompromiss ein: Bequemlichkeit vor Sicherheit. Diese Befehle führen beliebigen Code direkt auf dem Host-System mit vollem Zugriff auf:

- Das gesamte Dateisystem
- Netzwerkverbindungen
- Umgebungsvariablen und Secrets
- Systemressourcen

Einige MCP-Clients beschränken den Zugriff auf Umgebungsvariablen, aber selbst das ist keine universelle Praxis. Das ist nicht nachhaltig. Da MCP von der Experimentierphase zur Produktion übergeht, brauchen wir einen grundlegend anderen Ansatz.

### Dockers einzigartige Position
Docker hat über ein Jahrzehnt damit verbracht, genau diese Probleme für Cloud-native Anwendungen zu lösen. Wir haben die Infrastruktur, Tools und das Vertrauen aufgebaut, auf das Entwickler sich verlassen, um Milliarden von Containern in der Produktion auszuführen. Jetzt wenden wir dieselben Prinzipien auf das MCP-Ökosystem an.

Wenn Sie einen MCP Server aus unserem Catalog ausführen, erhalten Sie:

- Kryptographische Signaturen, die verifizieren, dass das Image nicht manipuliert wurde
- Software Bill of Materials (SBOMs), die jede Komponente dokumentieren
- Vollständige Isolation von Ihrem Host-System
- Kontrollierten Zugriff nur auf das, was der Server tatsächlich benötigt

Es geht nicht darum, Entwicklern das Leben schwerer zu machen — es geht darum, Sicherheit zum Weg des geringsten Widerstands zu machen.

## Einführung des erweiterten MCP Catalog
### Gebaut für MCP Discovery
Wir haben den MCP Catalog neu konzipiert, um ihn zugänglicher und einfacher zu navigieren zu machen. Sie können den MCP Catalog wie bisher über Docker Hub und das MCP Toolkit in Docker Desktop aufrufen oder direkt zum MCP Catalog gehen. Wir sind über generische Container-Image-Listings hinausgegangen, indem wir Funktionen gebaut haben, die Ihnen helfen, schnell die richtigen MCP Server für Ihre KI-Anwendungen zu finden.

Nach Anwendungsfall durchsuchen: MCP Server sind danach organisiert, was sie tatsächlich tun:

- Datenintegration (Datenbanken, APIs, Dateisysteme)
- Entwicklungstools (IDEs, Code-Analyse, Testing)
- Kommunikation (E-Mail, Slack, Messaging-Plattformen)
- Produktivität (Task-Management, Kalender, Notizen)
- Analytics (Datenverarbeitung, Visualisierung, Reporting)

**Erweiterte Suche**: Finden Sie Server nach Fähigkeit, Tools, GitHub-Tags und Kategorien — nicht nur nach Namen.

**Sicherheitstransparenz**: Jeder Catalog-Eintrag zeigt klar, ob er Docker-gebaut (mit transparenter Build-Signierung und Verifizierung) oder Community-gebaut (containerisiert und vom Publisher gepflegt) ist.

### Wie wir MCP Server klassifizieren: Docker-gebaut vs. Community-gebaut
**Docker-gebaute Server**: Wenn Sie "Built by Docker" sehen, erhalten Sie unsere vollständige Sicherheitsbehandlung. Wir kontrollieren die gesamte Build-Pipeline und bieten kryptographische Signaturen, SBOMs, Provenance-Attestierungen und kontinuierliches Vulnerability-Scanning.

**Community-gebaute Server**: Diese Server werden von ihren Entwicklern als Docker-Images verpackt. Obwohl wir ihren Build-Prozess nicht kontrollieren, profitieren sie immer noch von der Container-Isolation, was eine massive Sicherheitsverbesserung gegenüber direkter Ausführung ist.

Tiers erfüllen wichtige Rollen: Docker-gebaute Server demonstrieren den Goldstandard für Sicherheit, während Community-gebaute Server sicherstellen, dass wir schnell skalieren können, um der Entwicklernachfrage gerecht zu werden. Entwickler können ihre Meinung nach dem Einreichen eines Community-gebauten Servers ändern und ihn als Docker-gebauten Server neu einreichen.

Screenshot 2025-06-26 105434
Abbildung 3: Ein Beispiel für einen Built by Docker MCP Server.

## Offen für MCP Server-Einreichungen: Treten Sie der sicheren MCP-Bewegung bei

{{< github repo="docker/mcp-registry" >}}


Ab heute öffnen wir unseren Einreichungsprozess für die Community. Ob Sie ein einzelner Entwickler oder ein Enterprise-Team sind, Sie können Ihre MCP Server im Docker MCP Catalog präsentieren. Indem Sie über unseren Catalog veröffentlichen, verteilen Sie nicht nur Ihren MCP Server — Sie helfen, einen neuen Sicherheitsstandard für das gesamte Ökosystem zu etablieren, während Sie Ihre MCP-Tools Millionen von Entwicklern zur Verfügung stellen, die Docker bereits über Docker Hub und Docker Desktop nutzen. Ihr containerisierter Server wird Teil der Lösung und demonstriert, dass produktionsreife KI-Tools keine Kompromisse bei der Sicherheit erfordern.


Lesen Sie den Originalbeitrag weiter im [Docker Blog](https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/).
