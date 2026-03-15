---
title: "Gordon bauen: Dockers KI-Agent"
summary: "Ein Blick hinter die Kulissen der Entwicklung von Gordon - Dockers KI-Agent. Von der Wahl von docker-agent als Runtime über die Analyse von Nutzerfragen, das UX-Design und das Einrichten von Evals bis hin zum Entwickeln der richtigen Tools."
description: "Ein Blick hinter die Kulissen der Entwicklung von Gordon - Dockers KI-Agent. Von der Wahl von docker-agent als Runtime über die Analyse von Nutzerfragen, das UX-Design und das Einrichten von Evals bis hin zum Entwickeln der richtigen Tools."
categories: [KI, Entwicklerwerkzeuge]
tags: [Docker, Gordon, Agents, AI, docker-agent]
date: 2026-03-13
draft: false
showTableOfContents: true
---

Im vergangenen Jahr war ich Teil des Teams, das [Gordon](https://docs.docker.com/ai/gordon/) entwickelt hat - Dockers KI-Agent. Wer Docker Desktop in letzter Zeit genutzt hat, hat ihn wahrscheinlich schon gesehen: Klick auf das Gordon-Symbol in der Seitenleiste oder `docker ai` im Terminal eingeben, und man bekommt einen Agent, der die eigenen Container, Images und die gesamte Umgebung wirklich versteht. Er beantwortet nicht nur Fragen - er handelt.

Aber einen KI-Agent zu bauen, dem Millionen von Entwicklern ihren Code, ihre Container, Images, Compose-Dateien, Builds und CI-Pipelines anvertrauen, war alles andere als einfach. Dies ist die Geschichte, wie wir ihn gebaut haben - die Entscheidungen, die wir getroffen haben, die Dinge, die wir falsch gemacht haben, und was wir dabei gelernt haben.

## Gordon v1

Die erste Version von Gordon wurde gebaut, bevor ein Großteil der agentischen Tooling-Infrastruktur existierte, die wir heute haben. Gordon treibt Dockers KI-Erfahrung von Anfang an an - auf [docs.docker.com](https://docs.docker.com), im Support und in Docker Desktop. Wir haben die initiale agentische Schleife mit LangGraph geschrieben, ein RAG-System über Dockers Dokumentation aufgebaut, damit Gordon Fragen auf Basis echter Inhalte beantworten kann, und was wir "Rezepte" nannten - deterministische Code-Pfade, die spezifische Aufgaben erledigten, wie das Generieren eines Dockerfile oder das Debuggen eines Containers. Rezepte können als Vorläufer von MCP und Tool Calling betrachtet werden, aber vollständig selbst entwickelt. Jedes Rezept war ein handgefertigter Ablauf: die Absicht des Nutzers erkennen, den richtigen Kontext sammeln und eine Folge von Schritten ausführen, von denen wir wussten, dass sie funktionieren.

Es wurde ausgeliefert. Menschen nutzten es. Und wir lernten enorm viel - was Nutzer wirklich brauchten, wo das LLM Schwierigkeiten hatte und wie brüchig deterministische Abläufe werden, wenn man versucht, jeden Randfall abzudecken. Wir bauten auch auf GPT-4o-Ära-Modellen - fähig, aber weit entfernt von dem, was heute verfügbar ist. Selbst die kleinsten heutigen Modelle wie Haiku übertreffen das, was wir damals hatten - und das war vor weniger als einem Jahr.

Aber während Gordon v1 in Produktion war, bewegte sich die Welt um uns herum rasend schnell. MCP wurde zum Standard für Tool-Integration. Tool Calling landete nativ in jedem wichtigen Modell. Agent-Frameworks reiften. Die Modelle selbst machten einen gewaltigen Sprung. Die Lücke zwischen dem, was wir gebaut hatten, und dem, was nun möglich war, wuchs stetig.

Also entschieden wir uns, Gordon von Grund auf neu zu bauen - mit allem, was wir aus v1 gelernt hatten, kombiniert mit den neuen Standards und der Infrastruktur, die seit dem Launch entstanden war.

## Grundlagen

Die erste Frage für den Neuaufbau war grundlegend: Worauf bauen wir das auf?

Wir hätten den LangGraph-Stack weiterentwickeln können, aber wir hatten [docker-agent](https://github.com/docker/docker-agent) (ursprünglich cagent genannt) als Open-Source-Runtime für KI-Agenten entwickelt, und es lag nahe, das eigene Produkt zu nutzen.

{{< github repo="docker/docker-agent" >}}

docker-agent bietet eine deklarative Möglichkeit, Agenten in YAML zu definieren - ihr Modell, ihre Anweisungen, ihre Tools und wie sie zusammenarbeiten. Anstatt imperativen Code zu schreiben, der Gesprächsschleifen, Tool-Dispatch und Kontextfenster verwaltet, beschreibt man, was der Agent tun soll, und überlässt der Runtime den Rest. Nahezu vollständig in Go geschrieben, wird es als Docker CLI-Plugin ausgeliefert - `docker agent run`, `docker agent new` usw. - sodass es sich nativ in den Docker-Workflow einfügt.

Für Gordon bedeutete das, dass wir schnell iterieren konnten. System-Prompt ändern? YAML bearbeiten. Neues Tool hinzufügen? Zum Toolset hinzufügen. Modell tauschen? Eine Zeile. Kein Neudeployment von benutzerdefiniertem Code, kein Neuaufbau von Pipelines. Die Agent-Definition ist das Produkt.

Einer der größten Vorteile beim Aufbau auf docker-agent ist die Distribution. Agent-Definitionen werden als OCI-Artefakte verpackt und geteilt - dasselbe Format, das Docker für Container-Images verwendet. Das bedeutet, wir können mit `docker agent push` eine neue Version von Gordon auf Docker Hub pushen und sie am anderen Ende mit `docker agent pull` holen. Updates werden sofort ausgeliefert, ohne Code neu zu bauen, denn die Agent-Schleife ist nicht in die Anwendung eingebaut - sie lebt in der Runtime. Gordons Definition ist nur eine YAML-Datei auf Docker Hub. Wenn wir eine neue Version pushen, lädt jede Docker Desktop-Installation sie herunter (es ist etwas komplexer als das, aber das Prinzip stimmt). Keine Binary-Updates, keine App-Store-Reviews, keine Migrationsskripte. Diese Trennung zwischen Runtime (docker-agent) und Agent-Definition (das YAML) ist das, was das Ganze im großen Maßstab funktionieren lässt.

docker-agent kommt mit eingebauten Toolsets - `filesystem` zum Lesen und Schreiben von Dateien, `shell` für die Befehlsausführung, `think` für ein Reasoning-Notizbuch, `todo` für die Aufgabenverfolgung und `memory` für die Persistenz über Sitzungen hinweg. Darüber hinaus kann jeder MCP-Server als Tool eingebunden werden. Man kann auch benutzerdefinierte Script-Tools direkt im YAML definieren - ein Shell-Skript oder einen API-Endpunkt einbetten und dem Agent mit typisierten Argumenten bereitstellen.

Die Nutzung von docker-agent bedeutete auch, dass Gordon von allem profitiert, was die Runtime von Haus aus bietet - Multi-Provider-Unterstützung (OpenAI, Anthropic, Gemini, Bedrock, Mistral und sogar lokale Modelle über Docker Model Runner), MCP-Integration, eingebautes RAG mit mehreren Retrieval-Strategien, Multi-Agent-Orchestrierung mit Sub-Agenten und Handoffs sowie OCI-basierte Distribution. Wenn wir docker-agent verbessern, wird Gordon besser. Und wenn Gordon die Grenzen von docker-agent auslotet, machen wir die Runtime für alle besser.

Wir nutzen docker-agent, um den docker agent zu bauen. Das ist kein Slogan - so arbeiten wir tatsächlich.

## Verstehen, was Nutzer wirklich wollen

Einen KI-Agent zu bauen ist einfach. Einen zu bauen, der wirklich nützlich ist, ist schwer. Der Unterschied liegt darin, zu verstehen, was Nutzer wirklich fragen.

Zu Beginn haben wir viel Zeit damit verbracht zu analysieren, wie Menschen mit Docker interagieren. Welche Fragen stellen sie in Foren? Wonach suchen sie in der Dokumentation? Wo kommen sie nicht weiter? Da Gordon v1 bereits den KI-Assistenten auf [docs.docker.com](https://docs.docker.com), im Support und in Docker Desktop antrieb, hatten wir zwei unschätzbar wertvolle Datenquellen: die Dokumentations- und Support-Interaktionen sowie die tatsächlichen Nutzerabsichtsdaten aus v1-Sitzungen - was Menschen Gordon zu tun baten, welche Rezepte ausgelöst wurden, wo es erfolgreich war und wo es scheiterte.

Die Muster waren klar:

- **"Warum startet mein Container nicht?"** - Debugging ist der mit Abstand häufigste Anwendungsfall. Exit-Codes, Log-Fehler, Netzwerkprobleme, Berechtigungsprobleme.
- **"Wie containerisiere ich das?"** - Menschen haben eine App und wollen ein gutes Dockerfile. Nicht ein generisches aus einem Tutorial - sondern eines, das ihre Projektstruktur versteht.
- **"Wie mache ich X mit Docker?"** - Routineoperationen, die einfach sind, wenn man den Befehl kennt, aber einen Gang zur Dokumentation erfordern, wenn nicht.

Diese drei Kategorien haben alles geprägt. Gordon ist kein Allzweck-Chatbot, der zufällig etwas über Docker weiß. Es ist ein Agent, der speziell für diese Workflows konzipiert wurde - debuggen, bauen und verwalten. Jedes Tool, jeder Prompt, jede UX-Entscheidung ergibt sich daraus.

Wir haben auch gelernt, dass Nutzer keine sauber formulierten Fragen stellen. Sie fügen Fehlermeldungen ein. Sie beschreiben Symptome, nicht Ursachen. Sie liefern unvollständigen Kontext. Ein guter Agent kann nicht einfach Schlüsselwörter abgleichen - er muss die Absicht verstehen, bei Bedarf klärende Fragen stellen und selbstständig nachforschen.

## Den Agent bauen

Mit docker-agent als Runtime und einem klaren Bild davon, was Nutzer brauchten, begannen wir mit dem Aufbau. Es folgten Wochen intensiver Iteration - und der Agent veränderte sich dabei dramatisch. Gordon wird als OCI-Artefakt auf Docker Hub (`docker/gordon`) verteilt, und man kann jede Version mit `cagent pull docker/gordon:<tag>` herunterladen und die vollständige Agent-Definition lesen. Die Entwicklung ist direkt in der Versionshistorie nachvollziehbar.

### Von Multi-Agent-Schwarm zu Single-Agent

Unser erster Ansatz für Gordon v2 war ambitioniert. Wir entwarfen eine Multi-Agent-Architektur mit neun spezialisierten Sub-Agenten: einem Docker-Experten, einem Coding-Experten, einem Deployment-Experten, einem Kubernetes-Spezialisten, einem Netzwerk-Agent, einem Sicherheits-Agent, einem GitHub-Integrations-Agent, einem DHI-Migrations-Experten und sogar einem Notion-Agent. Der Root-Agent fungierte als Orchestrator - er analysierte die Anfrage des Nutzers, delegierte an den richtigen Spezialisten und koordinierte die Antworten über das Team hinweg. Geteilte Todos hielten den Kontext zwischen den Agenten aufrecht.

In der Theorie war es elegant. In der Praxis war es langsam und unberechenbar. Delegation fügte Latenz hinzu. Der Orchestrator wählte manchmal den falschen Sub-Agenten. Kontext ging bei Übergaben verloren. Und je mehr Agenten wir hinzufügten, desto schwieriger wurde es, das Verhalten des Gesamtsystems nachzuvollziehen.

Also haben wir es zusammengeführt. Wir konsolidierten fast alles in einem einzigen Root-Agent mit einem sorgfältig entwickelten System-Prompt. Der einzige Sub-Agent, der überlebte, war der DHI-Migrations-Spezialist, weil dieser Workflow tatsächlich eigenständig genug ist, um einen eigenen Agent mit eigenen Tools und Anweisungen zu rechtfertigen. Alles andere - Docker-Operationen, Debugging, Containerisierung, allgemeine Entwicklungshilfe - lebt im Root-Agent.

Das Ergebnis war schneller, berechenbarer und einfacher zu iterieren. Ein Agent, ein Prompt, eine Anlaufstelle, wenn etwas schiefläuft.

### Modellauswahl

Auch die Modellwahl änderte sich. Frühe Builds von v2 liefen auf Claude Sonnet 4.5 - ein leistungsstarkes Modell, aber teuer in dem Ausmaß, in dem Gordon operiert. Als wir Prompt und Tools verfeinerten, stellten wir fest, dass wir dieselbe Qualität mit Claude Haiku 4.5 erreichen konnten - einem deutlich kleineren, schnelleren und günstigeren Modell. Der Trick war, in bessere Prompts zu investieren. Jedes Mal, wenn wir die Anweisungen verbesserten - spezifischere Tool-Beschreibungen, klarere Verhaltensregeln, bessere Beispiele - schrumpfte die Lücke zwischen Sonnet und Haiku, bis sie für unsere Anwendungsfälle verschwand.

Gordon läuft derzeit für die meisten seiner Interaktionen auf Haiku 4.5. Der Geschwindigkeitsunterschied ist spürbar - Antworten fühlen sich schnell an, Tool-Aufrufe lösen sich schneller auf, und die Kosten pro Gespräch sanken erheblich. Die Multi-Provider-Unterstützung von docker-agent bedeutet, dass wir Modelle mit einer einzigen Zeilenänderung im YAML wechseln können, sodass wir immer neue Modelle testen, sobald sie verfügbar sind.

### Prompt-Engineering als Produktentwicklung

Die größte Überraschung war, wie viel des Produkts im System-Prompt lebt. Gordons Prompt ist kein kurzer Absatz mit Anweisungen - er ist eine detaillierte Spezifikation, die Identität, Kommunikationsstil, Dateizugriffsmuster, Wissensdatenbanknutzung, Antwortgröße, Dockerfile-Best-Practices, Debugging-Workflows und Sicherheitsregeln abdeckt.

So sieht die aktuelle Gordon-Definition aus:

```yaml
version: "2"

models:
  brain:
    provider: anthropic
    model: claude-haiku-4-5-20251001

agents:
  root:
    model: brain
    description: Gordon - Docker Agent
    instruction: |
      You are Gordon, an AI assistant created by Docker Inc.,
      specialized in Docker and Docker-related products, tools,
      and technologies...
    sub_agents:
      - DHI migration
    toolsets:
      - type: api
        api_config:
          name: knowledge_base
          endpoint: https://ai-backend-service.docker.com/docs
          ...
      - type: filesystem
      - type: shell
      - type: fetch
      - type: todo

  DHI migration:
    model: brain
    description: Migrates a Dockerfile to use Docker Hardened Images
    toolsets:
      - type: api
        api_config:
          name: get_image_tags
          endpoint: https://ai-backend-service.docker.com/dhi
          ...
      - type: filesystem
      - type: shell
```

Wir haben den Prompt ständig überarbeitet. Jedes Mal, wenn wir einen Fehlerfall entdeckten - Gordon ist zu wortreich, wählt das falsche Tool, stellt unnötige Rückfragen, verwendet Füllwörter - fügten wir etwas hinzu, um es zu beheben - ein neues Eval, eine neue Anweisung usw. Der Prompt wuchs organisch aus echten Nutzerinteraktionen und Eval-Fehlern. Er ist kein schöner Code, aber er funktioniert. Und hier ist das Entscheidende: Wir schreiben die meisten dieser Prompts heutzutage nicht mehr von Hand. Dazu mehr, nachdem wir über Evals gesprochen haben.

## Die Nutzererfahrung

Die UX eines KI-Agents unterscheidet sich grundlegend von der eines Chatbots. Ein Chatbot liefert Text. Ein Agent will Dinge tun - Befehle ausführen, Dateien bearbeiten, Konfigurationen erstellen. Das verändert alles an der Gestaltung der Interaktion.

Das Kernprinzip, auf das wir uns einigten: **zeigen, dann handeln**.

Gordon führt nie etwas aus, ohne vorher genau zu zeigen, was er plant. Will er einen Shell-Befehl ausführen? Man sieht den Befehl. Will er ein Dockerfile bearbeiten? Man sieht den Diff. Will er einen Container stoppen? Man sieht, welchen. Jede Aktion erfordert die ausdrückliche Genehmigung des Nutzers.

Das ist nicht nur ein Sicherheitsmerkmal - es ist ein Vertrauensaufbaumechanismus. Wenn man Gordon zum ersten Mal nutzt, genehmigt man jede Aktion. Mit der Zeit beginnt man ihm zu vertrauen, weil man gesehen hat, dass er gute Entscheidungen trifft. Man genehmigt schneller, nicht weil man weniger sorgfältig ist, sondern weil man Vertrauen in das aufgebaut hat, was er tut.

Wir haben Gordon auch an zwei Orten verfügbar gemacht: Docker Desktop (GUI) und die CLI (`docker ai`). Die Desktop-Erfahrung ist visuell - man sieht Container, Images und Logs neben dem Gespräch. Die CLI-Erfahrung richtet sich an Entwickler, die im Terminal leben und dort bleiben wollen. Derselbe Agent, dieselben Fähigkeiten, unterschiedlicher Kontext.

Etwas, das wir bewusst vermieden haben: autonomer Modus. Gordon macht nicht zehn Dinge, während man nicht hinschaut. Es ist ein kollaborativer Agent - er arbeitet mit einem zusammen, nicht anstelle von einem. In einer Welt, in der Entwickler zu Recht skeptisch gegenüber KI-Tools sind, die unbeaufsichtigt Änderungen an ihrer Infrastruktur vornehmen, ist das wichtig.

## Tools: Was Gordon wirklich kann

Ein LLM ohne Tools ist nur ein Textgenerator. Was Gordon zu einem Agent macht, ist seine Fähigkeit zu handeln. Und die richtigen Tools zu finden war eines der schwierigsten Teile des Projekts.

Gordons Architektur ist eine Client-Server-Aufteilung. Das Backend lebt auf Dockers Servern, während der Client eine CLI ist, die mit Docker Desktop gebündelt wird und auf dem Rechner des Nutzers läuft. Der Client übernimmt den lokalen Zugriff - Dateien lesen, Befehle ausführen, mit dem Docker Daemon interagieren - während das Backend die LLM-Orchestrierung übernimmt. Wenn man Gordon über Docker Desktop nutzt, kann man ein Arbeitsverzeichnis auswählen, um den Zugriff einzuschränken - oder es wird ein Standardverzeichnis verwendet. Wenn man `docker ai` vom Terminal aus nutzt, arbeitet es mit dem aktuellen Verzeichnis.

Gordons Kern-Toolsets sind überraschend minimal:

- **Filesystem** - Dateien im Arbeitsverzeichnis des Nutzers lesen, schreiben, bearbeiten und auflisten. So inspiziert Gordon die Projektstruktur, liest Dockerfiles und schreibt neue Konfigurationen.
- **Shell** - Befehle im Terminal des Nutzers ausführen (mit Genehmigung). Das ist das Arbeitstier - über Shell kann Gordon `docker build`, `docker compose up`, `docker scout`, `kubectl`, `git` und alles andere ausführen, was auf dem Rechner des Nutzers installiert ist. Anstatt benutzerdefinierte Integrationen für jeden Docker-Befehl zu bauen, geben wir dem Agent Shell-Zugriff und lassen ihn die CLI-Tools nutzen, die Entwickler bereits haben.
- **Fetch** - HTTP-Anfragen an externe URLs für Dokumentation, API-Referenzen oder andere Webinhalte, die Gordon benötigt, um eine Frage zu beantworten.
- **Todo** - Mehrstufige Aufgaben verfolgen, damit Gordon komplexe Anfragen aufschlüsseln und methodisch durcharbeiten kann.
- **Wissensdatenbank** - Ein benutzerdefiniertes API-Tool, das Dockers Dokumentations-Backend abfragt. Wir haben seit v1 eine eigene RAG-Pipeline über Dockers Dokumentation aufgebaut, die nicht nur Gordon, sondern auch den Docs-Assistenten und den Support antreibt. Gordon erhält über diese gemeinsame Infrastruktur Zugriff auf aktuelle Dokumentation, Best Practices und gängige Muster.
- **DHI-Migration** - Ein dedizierter Sub-Agent mit eigenem Toolset für die Migration von Dockerfiles zu Docker Hardened Images, einschließlich eines API-Tools, das DHI-kompatible Image-Tags auflöst.

Der erste Schritt in Gordons Pipeline - zu verstehen, was der Nutzer will, und herauszufinden, welches Tool zu verwenden ist - erfolgt durch Tool Calling mit dem LLM. Das klingt einfach, aber es war eines der Bereiche, in denen wir die meiste Zeit mit Experimenten verbracht haben.

Was wir gelernt haben:

**Tool-Beschreibungen sind wichtiger als man denkt.** Eine vage Zeile reicht nicht. Das LLM benötigt detaillierte Beschreibungen mit Beispielen, wann welches Tool zu verwenden ist. Wir stellten fest, dass ausführlichere Tool-Definitionen die Genauigkeit der Tool-Auswahl dramatisch verbesserten.

**Das Hinzufügen von Tools kann Dinge kaputt machen.** Das war kontraintuitiv. Wir fügten ein neues Tool hinzu, und plötzlich löste das LLM bestehende Tools nicht mehr korrekt aus. Das Tool-Set ist nicht nur eine Liste - es ist ein Entscheidungsraum, und dessen Erweiterung verändert, wie das Modell darüber nachdenkt, welches Tool es wählt.

**Modelle verhalten sich unterschiedlich.** Tool Calling ist nicht über Anbieter hinweg standardisiert. Was mit einem Modell gut funktioniert, kann bei einem anderen scheitern. Beschreibungen, die für GPT-4 optimal sind, könnten Claude verwirren und umgekehrt. Wir mussten über Anbieter hinweg testen und manchmal Beschreibungen pro Modell anpassen.

**Vorhandene Wissensinfrastruktur nutzen.** Wir haben seit v1 unsere eigene RAG-Pipeline über Dockers Dokumentation aufgebaut, die seitdem den Docs-Assistenten, den Support und Gordon antreibt. Für v2 mussten wir das nicht neu erfinden - wir haben Gordon einfach über ein API-Tool an dasselbe Backend angebunden. Jahre indizierter Dokumentation, bereits in der Produktion erprobt, mit einem einzigen API-Aufruf verfügbar.

## Evals

Das Problem mit KI-Agenten ist folgendes: Sie versagen auf subtile Weise. Ein Chatbot, der eine leicht falsche Antwort gibt, ist ärgerlich. Ein Agent, der den falschen Befehl ausführt, ist gefährlich. Evals sind keine Option - sie sind unverzichtbar.

docker-agent hat Evaluation eingebaut. Der Workflow beginnt mit der Aufzeichnung von Sitzungen - man interagiert normal mit Gordon, und wenn ein Gespräch einen guten Testfall darstellt, speichert man es als Eval. Jedes Eval ist eine JSON-Datei, die die Nutzernachricht, die erwarteten Tool-Aufrufe und Bewertungskriterien erfasst: Relevanzaussagen, die die Antwort erfüllen muss, erwartete Antwortgröße, welche Tools aufgerufen werden sollen, welche Dateien erstellt werden sollen. Diese Evals laufen zur Isolation in Docker Containern - jedes bekommt eine saubere Umgebung, sodass die Ergebnisse reproduzierbar sind.

`docker agent eval` führt die gesamte Suite aus und bewertet anhand mehrerer Dimensionen - Tool-Call-Genauigkeit (hat Gordon die richtigen Tools aufgerufen?), Relevanz (hat die Antwort die Frage tatsächlich beantwortet?), Antwortgröße und Sub-Agent-Übergaben. Ein LLM-Richter bewertet die Relevanzkriterien, sodass wir nuancierte Verhaltensweisen testen können, nicht nur String-Matching.

So erkennen wir Regressionen. Jede Änderung an Gordon - Prompt-Updates, Tool-Änderungen, Modellwechsel - wird vor der Auslieferung gegen die vollständige Suite bewertet. In einem Agent-System ist alles miteinander verbunden. Eine kleine Anpassung einer Tool-Beschreibung kann zu unerwartetem Verhalten führen. Wenn eine neue Modellversion erscheint, führen wir die Suite durch, bevor wir wechseln. Wir aktualisieren nicht blind.

Eine harte Lektion: Eval-Abdeckung ist wichtiger als Eval-Menge. Anfangs deckten unsere Evals die Hauptanwendungsfälle nicht ab - wir optimierten Gordon für Randfälle, während die Kern-Workflows (Container debuggen, Dockerfiles generieren, Docker-Fragen beantworten) nicht gut repräsentiert waren. Wir verbesserten Scores, ohne Gordon für die meisten Nutzer tatsächlich besser zu machen. Sobald wir die Eval-Suite auf die realen Nutzungsmuster aus den v1-Daten ausrichteten, stimmten die Verbesserungen mit dem überein, was Nutzer tatsächlich erlebten.

## Agenten nutzen, um den Agent zu verbessern

Erinnern Sie sich an den Vorausblick auf das Nicht-von-Hand-Schreiben von Prompts? So sieht das in der Praxis aus.

Wir haben einen benutzerdefinierten Agent gebaut - der auf einem leistungsstärkeren Modell wie Claude Opus 4.6 läuft - dessen Aufgabe es ist, Gordons System-Prompt zu verbessern. Der Workflow: Man gibt ihm Gordons aktuelle Agent-Definition, einen Satz fehlschlagender Evals und die Ergebnisse. Der Agent analysiert die Fehler, schlägt Prompt-Änderungen vor und gibt ein aktualisiertes YAML aus. Wir führen die Eval-Suite gegen die neue Version aus. Wenn die Scores sich verbessern und nichts regressiert, liefern wir aus.

Das schafft eine enge Verbesserungsschleife. Ein Nutzer berichtet, dass Gordon zu viele Rückfragen stellt, anstatt einfach die Dateien zu lesen? Wir fügen dafür ein Eval hinzu, zeigen dem Optimierungs-Agent den Fehler, und lassen ihn die richtige Prompt-Änderung herausfinden. Er könnte eine Regel wie "ALWAYS read files directly using filesystem tools. NEVER ask users to paste content." hinzufügen - genau die Art von spezifischer, umsetzbarer Anweisung, die den Unterschied zwischen einem guten und einem frustrierenden Agent ausmacht.

Das bewusste Nutzen eines leistungsstärkeren Modells als "Lehrer" zur Verbesserung des "Schülers" ist beabsichtigt. Opus hat die Reasoning-Kapazität, subtile VerhaltensProbleme zu verstehen und präzise Anweisungen zu formulieren, die Haiku in die richtige Richtung lenken. Es sind Agenten bis ganz nach unten.

Die meisten detaillierten Verhaltensregeln in Gordons Prompt - die verbotenen Füllwörter, die Dateizugriffsmuster, die Richtlinien zur Antwortgröße, die Debugging-Sequenzen - wurden vom Optimierungs-Agent geschrieben oder verfeinert, nicht von einem Menschen. Wir geben die Richtung vor und definieren, wie Qualität aussieht, durch Evals. Der Agent findet heraus, wie er dorthin gelangt.

## Was als Nächstes kommt: Memory

Im Moment ist Gordon sitzungsübergreifend zustandslos. Jedes Gespräch beginnt von vorne. Man schließt Docker Desktop, und Gordon vergisst alles - die Projektstruktur, die Probleme, die man debuggt hat, die bevorzugten Dockerfile-Muster.

Memory ist die nächste Grenze. Wir arbeiten daran, Gordon die Fähigkeit zu geben, Kontext über Sitzungen hinweg zu speichern:

- **Projektkontext** - Gordon sollte sich die Projektstruktur, das Docker-Setup und die verwendeten Muster merken
- **Interaktionshistorie** - Wenn man letzte Woche ein Problem behoben hat, sollte Gordon davon wissen, wenn ein ähnliches Problem auftaucht
- **Nutzerpräferenzen** - Wenn man immer Multi-Stage-Builds verwendet, sollte Gordon standardmäßig empfehlen, sie zu verwenden

Das ist schwieriger als es klingt. Memory in KI-Agenten bedeutet nicht einfach "den Chat-Verlauf speichern". Es geht darum zu entscheiden, was es wert ist, gespeichert zu werden, wie man es effizient abruft und wie man verhindert, dass es veraltet. Ein Memory-System, das irrelevanten Kontext anzeigt, ist schlimmer als gar kein Memory.

docker-agent hat bereits die Bausteine dafür. Es gibt ein `memory`-Toolset, das Informationen in einer lokalen Datenbank über Sitzungen hinweg persistiert - der Agent kann während der Arbeit Fakten speichern und abrufen. Die Teile sind vorhanden. Die Herausforderung besteht darin, es natürlich wirken zu lassen - Gordon sollte relevante Erinnerungen ohne Aufforderung an die Oberfläche bringen, Präferenzen ohne explizite Anweisung lernen und Dinge vergessen, die nicht mehr relevant sind. Wie das gleitende Fenster, das ich beim Aufbau von [Eva](/posts/202601-building-eva/) verwendet habe, aber intelligenter.

Das Ziel ist einfach: Gordon sollte sich wie ein Teamkollege anfühlen, der das Projekt kennt, nicht wie ein Fremder, dem man jedes Mal alles neu erklären muss.

---

Gordon zu bauen war eines der herausforderndsten und lohnendsten Projekte, an denen ich gearbeitet habe. KI-Agenten sind noch früh - die Tools entwickeln sich schnell, Best Practices werden noch geschrieben, und die Erwartungen der Nutzer verschieben sich mit jeder neuen Modellversion. Aber die Kernaussage bleibt: Entwickler brauchen keinen weiteren Chatbot. Sie brauchen einen Agent, der ihre Umgebung versteht, handelt und ihr Vertrauen verdient - einen genehmigten Befehl nach dem anderen.

Wenn Sie Gordon ausprobieren möchten, aktualisieren Sie auf das neueste [Docker Desktop](https://www.docker.com/products/docker-desktop/) und suchen Sie nach dem Gordon-Symbol in der Seitenleiste, oder führen Sie `docker ai` von Ihrem Terminal aus.

Und wenn Sie eigene Agenten bauen möchten, schauen Sie sich [docker-agent](https://github.com/docker/docker-agent) an - es ist Open Source und dieselbe Runtime, auf der Gordon läuft.
