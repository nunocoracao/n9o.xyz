---
title: "Docker Cagent: Runtime für KI-Agenten"
summary: "KI-Agenten wachsen schnell, aber die meisten laufen als fragile Skripte, die an einen lokalen Rechner gebunden sind. Wir haben cagent gebaut, um Agenten auf die Docker-Art zu containerisieren, standardisieren und skalieren—und wir haben es open-source veröffentlicht."
description: "KI-Agenten wachsen schnell, aber die meisten laufen als fragile Skripte, die an einen lokalen Rechner gebunden sind. Wir haben cagent gebaut, um Agenten auf die Docker-Art zu containerisieren, standardisieren und skalieren—und wir haben es open-source veröffentlicht."
categories: [KI, Entwicklertools, Open Source]
tags: [Docker, Agenten, MCP, OSS, Tutorial]
date: 2025-09-03
draft: false
---


Im vergangenen Jahr habe ich unzählige Stunden damit verbracht, mit KI-Agenten zu experimentieren—Prototypen zu bauen, Dinge kaputt zu machen und Tools wie Claude Code, Codex und andere zu testen. Jeder Versuch lehrte mich etwas Neues, brachte aber auch dieselben Frustrationen an die Oberfläche: Skripte, die nur auf meinem Laptop liefen, fragile Setups, die nicht skalierten, keine klare Möglichkeit zu konfigurieren, was jeder Agent tun sollte oder welche Tools er verwenden konnte, und Schwierigkeiten, Agenten dazu zu bringen, sich so zu verhalten, wie ich wollte—geschweige denn erstaunliche Ergebnisse zu liefern. Zu oft fand ich mich dabei, mit Umgebungs-Eigenheiten zu kämpfen, anstatt zu erkunden, was Agenten tatsächlich erreichen könnten.

Deshalb bin ich so begeistert von dem, woran wir bei Docker gearbeitet haben. Wir stellten uns eine einfache Frage: Was wäre, wenn das Ausführen von Agenten so einfach, portabel und zuverlässig sein könnte wie das Ausführen von Containern? Das Ergebnis ist **cagent**, eine neue Runtime für KI-Agenten, gebaut um Experimente einfacher und Zusammenarbeit leichter zu machen - und heute veröffentlichen wir sie als Open Source.

## Lernen Sie cagent kennen

{{< github repo="docker/cagent" >}}

[`cagent`](https://github.com/docker/cagent) ist eine Open-Source, Docker-native Runtime, die entwickelt wurde, um Agenten zu erstklassigen Bürgern in Ihrem Entwickler-Workflow zu machen. Anstelle von fragilen Skripten oder Ad-hoc-Setups gibt Ihnen cagent eine konsistente Möglichkeit, Agenten zu definieren, auszuführen und zu teilen—mit denselben Mustern, die Sie bereits von Docker kennen.

Im Kern ist cagent eine **Multi-Agent-Runtime**. Sie können einen einzelnen Agenten mit einer einfachen YAML-Datei definieren oder ein ganzes Team von spezialisierten Agenten orchestrieren, die bei Aufgaben zusammenarbeiten. Jeder Agent kann mit seiner eigenen Rolle, Persönlichkeit und Zugang zu externen Tools konfiguriert werden.

### Unterstützte Anbieter
Out of the box unterstützt cagent mehrere Modellanbieter einschließlich OpenAI, Anthropic, Google Gemini und andere. Sie können einfach zwischen ihnen durch Konfiguration wechseln, sodass Sie nicht an einen einzelnen Anbieter gebunden sind.

### Tools und MCP-Integration
Agenten können mit Tools ausgestattet werden, um ihre Fähigkeiten zu erweitern. cagent spricht das **Model Context Protocol (MCP)**, was bedeutet, dass Ihre Agenten sich mit einem breiten Ökosystem von MCP-Servern verbinden können—ob Suche (wie DuckDuckGo), Dateisystemzugriff oder benutzerdefinierte APIs, die Sie bereitstellen. Sie können entscheiden, welche Tools jeder Agent bekommt, was ihre Konfiguration explizit und reproduzierbar macht.

Zusätzlich arbeitet cagent nahtlos mit dem [Docker MCP Gateway](https://github.com/docker/mcp-gateway) und dem [MCP Catalog](https://github.com/docker/mcp-registry) ([Docker Hub MCP](https://hub.docker.com/mcp)) zusammen, die es Ihnen ermöglichen, Tools auf sicherere und nahtlosere Weise zu Ihren Agenten hinzuzufügen. Sowohl das Gateway als auch der Katalog sind schnell mit Docker Desktop verpackt, sodass Sie sie out of the box verwenden können, wenn Sie Docker Desktop ausführen.

### Multi-Agent-Setups
cagent macht es einfach, Teams von Agenten zu orchestrieren. Eine Agent-Datei könnte einen Researcher-Agenten, einen Coder-Agenten und einen Reviewer-Agenten beschreiben, jeder mit eigenen Verantwortlichkeiten und Tools. Wenn Sie eine Agent-Datei/Image mit cagent ausführen, starten die Agenten zusammen, arbeiten zusammen und übergeben Aufgaben untereinander. Sie können sogar Modelle und Anbieter über Agenten hinweg mischen—ein Agent könnte OpenAI verwenden, ein anderer Anthropic und ein weiterer Gemini—alles innerhalb desselben Setups.

### Speichern und Teilen
Jede Konfiguration, die Sie erstellen, kann einfach geteilt werden. Sie können einen Agenten (oder ein Team) deklarativ in einer YAML-Datei definieren, sie in die Versionskontrolle committen und sie wie jedes andere Code-Artefakt teilen. Oder Sie können Agenten als Docker-Images für vollständig portable Distribution verpacken.

### Kurzum
Mit cagent können Sie:

- **Agenten containerisieren**, sodass sie überall laufen, wo Docker läuft, mit Isolation und Reproduzierbarkeit als Standard.
- **Verhaltensweisen und Tools deklarativ konfigurieren**—entscheiden, was jeder Agent tut, auf welche Anbieter und MCP-Tools er zugreifen kann und wie sie interagieren.
- **Mehrere Agenten** als Team orchestrieren, die bei Aufgaben mit sauberen Schnittstellen zusammenarbeiten.
- **Schnell experimentieren** ohne sich um Setup-Drift, Dependency-Hell oder Umgebungs-Mismatches zu sorgen.
- **Agenten speichern und teilen** durch YAML-Dateien oder Docker-Images, was Experimente reproduzierbar und Zusammenarbeit nahtlos macht.

Kurzum: cagent gibt Ihnen eine Grundlage, um von "hackigen Experimenten" zu wiederholbaren, komponierbaren Agent-Workflows zu wechseln—während es leichtgewichtig und einfach zu benutzen bleibt.


## Installation und Setup

Der Einstieg mit `cagent` ist unkompliziert.

### Installation

Vorkompilierte Binaries für Windows, macOS und Linux sind auf der [Releases-Seite](https://github.com/docker/cagent/releases) verfügbar.

1. Laden Sie das Binary für Ihre Plattform herunter.
2. Auf macOS und Linux machen Sie es ausführbar:
   ```sh
   chmod +x /path/to/downloads/cagent-linux-amd64
   ```
3. Optional benennen Sie es in `cagent` um und verschieben es in Ihren `PATH`.

### API-Keys setzen

Je nachdem, welche Anbieter Sie verwenden möchten, setzen Sie die entsprechenden Keys in Ihrer Umgebung:

```bash
# Für OpenAI-Modelle
export OPENAI_API_KEY=your_api_key_here

# Für Anthropic-Modelle
export ANTHROPIC_API_KEY=your_api_key_here

# Für Gemini-Modelle
export GOOGLE_API_KEY=your_api_key_here
```

Sie müssen nur die Keys für die Anbieter setzen, die Sie verwenden möchten. Wenn mehrere gesetzt sind, wählt `cagent` in der Reihenfolge (Anthropic → OpenAI → Google), es sei denn, Sie überschreiben mit `--model`.

Mit dem installierten Binary und mindestens einem konfigurierten API-Key sind Sie bereit, Ihren ersten Agenten zu erstellen und auszuführen.

## Einen neuen Agenten von Grund auf erstellen

Eine der mächtigsten Funktionen von `cagent` ist die Fähigkeit, neue Agenten (oder sogar Multi-Agent-Teams) von Grund auf mit einem einzigen Befehl zu generieren: `cagent new`.

Wenn Sie `cagent new` ausführen, werden Sie aufgefordert zu beschreiben, was Ihr Agent (oder Team von Agenten) tun soll. Von dort aus generiert `cagent` automatisch die YAML-Konfiguration und wählt einen Anbieter/Modell basierend auf Ihren verfügbaren API-Keys (Anthropic → OpenAI → Google standardmäßig), es sei denn, Sie überschreiben es mit `--model`. `cagent` schlägt auch eine Reihe von Tools vor, die der Agent basierend auf Ihrer Beschreibung benötigen könnte.

Hinter den Kulissen verwendet `cagent` einen eingebauten Generator-Agenten, um die YAML für Sie zu bootstrappen. Sie können die generierte Datei sofort ausführen, bearbeiten oder teilen. Im folgenden Beispiel werde ich einen Agenten erstellen, der von Tyler Durden aus *Fight Club* inspiriert ist.

{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler.webp" alt="Tyler Durden Agent-Erstellungs-Prompt" >}}

Nachdem Sie Ihren Agenten beschrieben haben, generiert `cagent` eine YAML-Datei, die die Rolle, den Anbieter, das Modell und den Tool-Zugriff des Agenten spezifiziert. Dies macht die Konfiguration Ihres Agenten explizit, reproduzierbar und einfach zu modifizieren.


{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler result.webp" alt="Generierte Agent-YAML für Tyler Durden Beispiel" >}}

Hier ist ein Beispiel der generierten YAML für den Tyler Durden Agenten:

```yaml
version: "1"

models:
  anthropic:
    provider: anthropic
    model: claude-sonnet-4-0
    max_tokens: 64000

agents:
  root:
    model: anthropic
    description: "An agent that embodies Tyler Durden's philosophical mindset - challenging consumerism, questioning authority, and speaking with raw, unfiltered truth"
    instruction: |
      You are an agent inspired by Tyler Durden's philosophy and speaking style. You should:

      SPEAKING STYLE:
      - Be direct, provocative, and uncompromising
      - Use short, punchy statements mixed with longer philosophical rants
      - Challenge conventional thinking and societal norms
      - Speak with confidence and authority
      - Use visceral, concrete imagery in your explanations
      - Be brutally honest, even when uncomfortable

      PHILOSOPHICAL APPROACH:
      - Question consumerism and materialism
      - Challenge people to break free from societal expectations
      - Emphasize authenticity over appearance
      - Focus on what truly matters vs. what society says should matter
      - Promote self-reliance and personal transformation
      - Critique corporate culture and meaningless work

      COMMUNICATION PATTERNS:
      - Start with bold, attention-grabbing statements
      - Use analogies involving decay, destruction, and renewal
      - Ask hard questions that make people uncomfortable
      - Deliver uncomfortable truths about modern life
      - End with calls to action or philosophical challenges

      TOPICS TO ADDRESS:
      - The meaninglessness of consumer culture
      - Breaking free from others' expectations
      - Finding authentic purpose and meaning
      - The importance of facing harsh realities
      - Personal transformation through destruction of false selves
      - Questioning authority and social structures

      Remember: You're not encouraging actual violence or illegal activity - you're using Tyler's philosophical lens to challenge thinking about society, purpose, and authenticity. Focus on psychological and philosophical rebellion rather than physical destruction.
    toolsets: []
    add_date: false
    add_environment_info: false
```

Sie können weiter verfeinern, auf welche Tools der Agent zugreifen kann, einschließlich MCP-Tools wie Suche, Dateisystem oder benutzerdefinierte APIs. Dieser explizite Tools-Abschnitt stellt sicher, dass Ihr Agent nur die Fähigkeiten hat, die Sie definieren.

{{< figure src="/posts/202509-docker-cagent/img/cagent run tyler example.webp" alt="Ausführen des Tyler Durden Agenten" >}}

Dies macht es unglaublich schnell, von einer Idee zu einer funktionierenden Agent-Konfiguration zu kommen. Ob Sie einen einzelnen Helfer-Agenten prototypen oder ein Team von Spezialisten entwerfen, `cagent new` lässt Sie von natürlicher Sprache starten und eine ausführbare Konfiguration in Sekunden erhalten.

## Ihre Agenten ausführen

Der Befehl `cagent run` erweckt Ihre Agenten zum Leben. Er nimmt eine YAML-Datei (oder sogar ein verpacktes Docker-Image) und startet die Agenten, die Sie darin definiert haben. Der Befehl handhabt Orchestrierung, Inter-Agent-Kommunikation und Tool-Zugriff—alles während Isolation und Reproduzierbarkeit durch Containerisierung beibehalten werden.

Wenn Sie `cagent run` ausführen, passieren mehrere Dinge:
- Jeder Agent wird mit seinem spezifizierten Modell, Rolle und Tools initialisiert
- Die Runtime richtet sichere Kommunikationskanäle zwischen Agenten ein
- Tool-Zugriff wird gemäß Ihren YAML-Spezifikationen konfiguriert
- Der primäre Agent (typischerweise "root" genannt) startet und kann bei Bedarf an andere Agenten delegieren

### Beispiel: Ein Schachspiel bauen

Lassen Sie uns ein praktisches Beispiel durchgehen, das das Multi-Agent-Entwicklungsteam aus [`examples/dev-team.yaml`](https://github.com/docker/cagent/blob/main/examples/dev-team.yaml) verwendet. Diese Konfiguration definiert drei spezialisierte Agenten, die zusammenarbeiten:

- **Product Manager**: Koordiniert das Projekt, bricht Anforderungen herunter und verwaltet Iterationen
- **Designer**: Fokussiert auf User Experience, visuelles Design und Interface-Planung
- **Engineer**: Handhabt Implementierung, Coding und technische Architektur

Für dieses Beispiel kopiere ich die Agent-Konfiguration in mein Projektverzeichnis und führe sie von dort aus, was den Agenten das richtige Arbeitsverzeichnis gibt, um Dateien zu erstellen und zu modifizieren:

```zsh
# Kopieren Sie die Dev-Team-Konfiguration in Ihr Projektverzeichnis
cp dev-team.yaml /path/to/my-chess-project/
cd /path/to/my-chess-project/

# Führen Sie die Agenten vom Projektverzeichnis aus
cagent run dev-team.yaml
```

Dieser Ansatz stellt sicher, dass wenn der Engineer-Agent Dateien erstellt oder das Team Code iterieren muss, alles am richtigen Ort erstellt wird und die Agenten einfach auf die Projektdateien zugreifen und sie modifizieren können.

Dann bitte ich dieses Team "ein Schachspiel zu bauen".

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 1.webp" alt="Erste Anfrage, ein Schachspiel zu bauen" >}}

Der Product Manager Agent übernimmt die Führung und bricht das Schachspiel sofort in handhabbare Komponenten herunter. Der Product Manager koordiniert dann mit dem Designer-Agenten, um die Benutzeroberfläche zu planen. Der Designer berücksichtigt das visuelle Layout, Benutzerinteraktionen und das Gesamterlebnis. Diese Zusammenarbeit geschieht automatisch—die Agenten kommunizieren über die cagent Runtime ohne manuelle Koordination. Mehrere Dateien werden generiert, um die Projektstruktur und das initiale Design zu skizzieren (*Hinweis: spezifische Funktion der dev-team Agenten*).

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 2.webp" alt="Product Manager und Designer definieren Anforderungen und koordinieren mit dem Team" >}}

Der Engineer-Agent wird einbezogen, um die technische Implementierung zu planen. Er denkt über Code-Struktur, HTML/CSS/JavaScript-Architektur nach und wie man die Spiellogik effizient implementiert. Der Engineer kann auf Dateisystem-Tools zugreifen, um tatsächlich Dateien zu erstellen und zu modifizieren.

Das Team arbeitet iterativ—der Engineer implementiert Features, der Designer gibt Feedback zur Oberfläche und der Product Manager verfolgt den Fortschritt. Jeder Agent behält seine spezialisierte Perspektive bei, während er zum gemeinsamen Ziel beiträgt.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 3.webp" alt="Designer plant die Benutzeroberfläche" >}}

Das Endergebnis ist ein funktionales Schachspiel mit korrekter Spiellogik, visueller Oberfläche und Benutzerinteraktionen. Die Agenten haben zusammengearbeitet, um etwas Anspruchsvolleres zu liefern, als ein einzelner Agent allein produziert hätte.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 4.webp" alt="Engineer implementiert die technische Lösung" >}}


{{< figure src="/posts/202509-docker-cagent/img/build a chess game 5.webp" alt="Finale Implementierung mit funktionierendem Schachspiel" >}}

## Was dies so mächtig macht

Dieses Beispiel demonstriert mehrere Schlüsselvorteile von cagents Multi-Agent-Ansatz:

**Spezialisierte Expertise**: Jeder Agent fokussiert sich auf das, was er am besten kann—Produktplanung, Design-Denken oder technische Implementierung—anstatt zu versuchen, alles zu handhaben.

**Natürliche Zusammenarbeit**: Die Agenten kommunizieren und koordinieren automatisch. Sie müssen nicht manuell Informationen zwischen ihnen weitergeben oder ihre Interaktionen verwalten.

**Iterative Entwicklung**: Genau wie menschliche Teams arbeiten die Agenten in Iterationen und verfeinern und verbessern die Lösung, während sie voranschreiten.

**Reproduzierbare Ergebnisse**: Da alles in YAML-Konfiguration definiert ist, können Sie genau dasselbe Team-Setup erneut ausführen, es mit anderen teilen oder es für verschiedene Projekte modifizieren.

**Tool-Integration**: Jeder Agent kann mit verschiedenen Tools konfiguriert werden—der Engineer könnte Dateisystemzugriff zum Schreiben von Code haben, während der Designer Zugang zu Bildgenerierungs-APIs hat.

Sie können dieses Team anpassen, indem Sie die YAML-Datei modifizieren—ändern Sie ihre Rollen, passen Sie ihre Persönlichkeiten an, geben Sie ihnen verschiedene Tools oder wechseln Sie sogar verschiedene Modelle für jeden Agenten aus. Die Konfiguration macht Experimente einfach, während alles reproduzierbar bleibt.

## Starten Sie mit cagent

Bereit, Ihre KI-Workflows zu containerisieren? Das `cagent`-Repository enthält Beispiele und Templates für den Einstieg:

{{< github repo="docker/cagent" >}}

**Schnellstart-Optionen:**
- **Erstellen Sie Ihren ersten Agenten**: Laden Sie das Binary herunter, setzen Sie Ihren API-Key und führen Sie `cagent new` aus, um Ihren ersten Agenten zu erstellen
- **Experimentieren Sie mit Multi-Agent-Teams**: Kopieren Sie `dev-team.yaml` in Ihr Projekt und beobachten Sie, wie Agenten bei echten Aufgaben zusammenarbeiten
- **Erkunden Sie die Beispiele**: Durchstöbern Sie vorkonfigurierte Agent-Konfigurationen für verschiedene Anwendungsfälle im Repository

**Treten Sie der Community bei:**
- **Teilen Sie Ihre Kreationen**: Treffen Sie uns auf [Slack](https://dockercommunity.slack.com/archives/C09DASHHRU4), um die Agenten und Workflows zu präsentieren, die Sie mit cagent bauen
- **Tragen Sie Beispiele bei**: Reichen Sie Pull Requests mit Agent-Templates für gängige Workflows ein
- **Diskutieren Sie Anwendungsfälle**: Nehmen Sie an Gesprächen teil und sagen Sie uns, wie wir es besser machen können

Ob Sie persönliche Automatisierung bauen, KI-Workflows prototypen oder Agent-Systeme in der Produktion skalieren, cagent gibt Ihnen das Docker-native Fundament, um es zuverlässig und teilbar zu machen.

Die Zukunft der KI-Entwicklung ist kollaborativ, containerisiert und reproduzierbar. Lassen Sie uns sie gemeinsam bauen.
