---
title: "2025: Ein Jahr im Rückblick"
summary: "2025 war ein Jahr des Wiederaufbaus - Freude wiederfinden durch Reisen, Zeit mit Familie und Freunden, und Dinge erschaffen, die wichtig sind. Von Reisen mit meiner Tochter über Projekte bei Docker bis zum Wachstum von Blowfish - es war ein Jahr, in dem die Teile wieder zusammenkamen."
description: "2025 war ein Jahr des Wiederaufbaus - Freude wiederfinden durch Reisen, Zeit mit Familie und Freunden, und Dinge erschaffen, die wichtig sind. Von Reisen mit meiner Tochter über Projekte bei Docker bis zum Wachstum von Blowfish - es war ein Jahr, in dem die Teile wieder zusammenkamen."
categories: ["Meinung"]
tags: ["year-in-review", "personal", "docker", "blowfish", "open-source", "ai"]
date: 2026-01-22
draft: false
---

> [!quote] Man kann die Punkte nicht verbinden, wenn man nach vorne schaut; man kann sie nur verbinden, wenn man zurückblickt. Also muss man darauf vertrauen, dass sich die Punkte irgendwie in der Zukunft verbinden werden.
> - Steve Jobs

2025 war ein Jahr des Wiederaufbaus. Nachdem ich 2024 meine Frau und Partnerin von 20 Jahren verloren hatte, wurde ich über Nacht alleinerziehend. Dieses Jahr ging es darum, wieder Fuß zu fassen - Zeit mit Freunden und Familie zu verbringen, mit meiner Tochter neue Orte zu bereisen und die Freude am Leben und Erschaffen wiederzuentdecken.

Ein Teil dieses Erschaffens geschah bei der Arbeit, ein Teil in Open Source, und ein Teil am Küchentisch mit einem Raspberry Pi und einer 7-Jährigen. Aber wenn es einen roten Faden gibt, der alles verbindet, dann diesen: Die besten Momente kamen vom Bauen gemeinsam mit Menschen, die mir wichtig sind.

## Docker

Das Jahr begann damit, dass ein Projekt, das ich über ein Jahr lang vorgeschlagen und gepflegt hatte, eingestellt wurde. Es tat weh, aber die Entscheidung ergab Sinn - KI bewegte sich schnell, Docker wollte alles darauf setzen, und sie brauchten Leute dort. Mir wurde die Chance angeboten, dem KI-Team beizutreten.

> [!quote] Wenn sich eine Tür schließt, öffnet sich eine andere; aber wir schauen oft so lange und so bedauernd auf die geschlossene Tür, dass wir die nicht sehen, die sich für uns geöffnet hat.
> - Alexander Graham Bell

### MCP Catalog

Wir haben den [Docker MCP Catalog](https://hub.docker.com/mcp) gestartet - ein kuratiertes Register von MCP-Servern, integriert in Docker Hub. Die Idee war einfach: Entwickler wollen einen sicheren, containerisierten Weg, ihre KI-Agenten zu erweitern, nicht beliebigen Code, der über `npx` oder `uvx` mit vollem Systemzugriff läuft. Der Katalog beherbergt jetzt über 220 containerisierte MCP-Server von Partnern wie Stripe, Elastic, Neo4j, Heroku, Grafana Labs und mehr - jeweils mit angemessener Isolation und Sicherheit.

### MCP Toolkit

Das [MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) erweckte den Katalog in Docker Desktop zum Leben. Ein-Klick-Start von MCP-Servern, null manuelle Konfiguration und automatische Verbindung zu Clients wie Claude, Cursor und VS Code. Es ist der schnellste Weg vom Entdecken eines Tools bis zum tatsächlichen Benutzen.

### MCP Gateway

Wir haben das [MCP Gateway](https://github.com/docker/mcp-gateway) als Open Source veröffentlicht - Infrastruktur, die MCP-Server orchestriert und Credentials, OAuth und Zugriffskontrolle verwaltet. Es läuft automatisch in Docker Desktop, was bedeutet, dass Millionen von Entwicklern es sofort zur Verfügung haben.

### cagent

[cagent](https://github.com/docker/cagent) ist vielleicht das Projekt, auf das ich am stolzesten bin - eine Runtime zum Bauen und Ausführen von KI-Agenten mit einfacher YAML-Konfiguration. Kein Code erforderlich. Definiere die Persona deines Agenten, Tools und Fähigkeiten in einer Datei und führe es aus. Multi-Agenten-Teams, MCP-Integration, Unterstützung für alle wichtigen Modellanbieter und eine großartige TUI-Erfahrung.

{{< github repo="docker/cagent" >}}

### Gordon

Und schließlich [Gordon](https://docs.docker.com/ai/gordon/) - Dockers KI-Assistent. Wir haben ihn von Grund auf neu aufgebaut mit cagent in seinem Kern. Die neue Version wird derzeit an ausgewählte Benutzer ausgerollt, während wir die GA vorbereiten, und ich bin wirklich gespannt, sie bald in mehr Entwicklerhänden zu sehen.

### Schreiben und Öffentlich Denken

Ich schrieb über das, was wir unterwegs lernten:

- **[MCP Servers: The USB-C Moment for AI Agents](/posts/202504-mcp/)** - Meine Sicht darauf, warum das Model Context Protocol zum universellen Connector für KI wird. Es ist Standardisierung, die ein Ökosystem ermöglicht, und wir stehen erst am Anfang.

- **[Unseen Cost of Growth: Metcalfe's Law at Work](/posts/202504-metacalfes-law/)** - Eine Reflexion über organisatorische Komplexität, die nichts mit KI zu tun hatte, aber alles damit, bedacht zu sein, wie Teams skalieren.

## Blowfish

Drei Jahre später überrascht mich [Blowfish](https://blowfish.page) immer noch. Was als persönliches Hugo-Theme begann, weil ich meine eigene Website bauen wollte, ist zu etwas viel Größerem geworden.

{{< github repo="nunocoracao/blowfish" >}}

### In Zahlen

- **2.600+ Stars** auf GitHub
- **660 Forks**
- **244 Contributors**
- **174 Releases** seit Projektbeginn

### 2025 Highlights

Dieses Jahr haben wir 17 Releases mit einigen wichtigen Ergänzungen veröffentlicht:

- **TailwindCSS v4 Upgrade** - ein bedeutender Modernisierungsaufwand
- **Tabs Shortcode** mit Icon- und Gruppierungsoptionen
- **GitHub-Style Admonitions** - `[!note]`, `[!quote]`, `[!warning]`, etc.
- **Video und Gist Shortcodes**
- **GitHub Repo Thumbnails** in Embeds
- **Strukturierte Breadcrumbs** für besseres SEO
- **Thai und Indonesische Übersetzungen**

Die Community hat das Theme weiter vorangetrieben - neue Sprachen, Shortcodes, Bugfixes, von denen ich nicht einmal wusste, dass sie existierten.

### Erster Collaborator

Im Oktober habe ich [@ZhenShuo2021](https://github.com/ZhenShuo2021) als ersten offiziellen Collaborator von Blowfish begrüßt. Ein Open-Source-Projekt zu bauen kann sich einsam anfühlen - jemanden zu haben, der die Wartungslast teilt, PRs reviewed und hilft, die Richtung zu bestimmen, ist unbezahlbar. Es markiert ein neues Kapitel, in dem Blowfish größer ist als nur ich.

### Blowfish Tools CLI

[Blowfish Tools](https://github.com/nunocoracao/blowfish-tools) - das CLI zum Erstellen neuer Projekte - erreichte **7.825 Downloads in 2025**, ein Anstieg von 58% gegenüber dem Vorjahr. Allein Januar 2026 verzeichnete über 1.200 Downloads. Leute starten tatsächlich regelmäßig neue Blogs mit Blowfish.

## Eva Bauen

Ein Teil des bedeutungsvollsten Bauens passiert außerhalb der Arbeit.

In diesen Weihnachtsferien habe ich [einen Sprach-KI-Begleiter mit meiner Tochter gebaut](/posts/202601-building-eva/). Wir nannten sie **Eva**, nach der Protagonistin in WondLa (eine Serie, die wir zusammen auf Apple TV schauen).

Eva ist ein Taschenroboter - ein Raspberry Pi Zero mit einem PiSugar Whisplay HAT - der Portugiesisch aus Portugal spricht (nicht Brasilianisch!), eine kinderfreundliche Persönlichkeit hat und sich an Gespräche erinnert, damit meine Tochter im Laufe der Zeit eine Beziehung zu ihr aufbauen kann.

Das Projekt begann mit einem YouTube-Tutorial und wurde durch das, was ich nur "Vibe Coding" mit Claude nennen kann, zu etwas Persönlichem. Ich erklärte, was ich wollte, in natürlicher Sprache, und zusammen haben wir den Code umgestaltet, um etwas Einzigartiges für meine Tochter zu schaffen.

Der Moment, der alles wert machte: Meine Tochter drückt den Knopf, sagt "Olá Eva!" - und Eva antwortet in perfektem Portugiesisch mit einer Stimme, die sie selbst ausgewählt hat. Zwanzig Minuten Gespräch über Einhörner folgten.

Das ist die Magie des Bauens mit deinen Kindern. Die technische Leistung zählt weniger als der Moment des Staunens.

**Update:** Seit diesem Beitrag hat Eva ein richtiges Gehäuse bekommen - und einen Anstrich von meiner Tochter. Sie ist jetzt offiziell einzigartig.

![Eva mit ihrem neuen Gehäuse, bemalt von meiner Tochter](img/eva.webp)

## Afterlight

Nach dem Verlust meiner Frau fand ich mich auf der Suche nach anderen, die wirklich verstanden, was ich durchmachte. Die vorhandenen Optionen passten nicht - zu öffentlich, zu überladen, nicht für Trauer konzipiert.

Also begann ich [Afterlight](https://afterlight.club) zu bauen - eine sichere, anonyme, reine Text-Plattform für Trauerunterstützung. Keine Fotos, keine Videos, keine Algorithmen, die Inhalte pushen. Nur Menschen, die sich durch geteilte Erfahrungen verbinden, Pseudonyme benutzen, in ihrem eigenen Tempo.

Vorerst habe ich die Entwicklung pausiert. Einige Gründe: Ich habe nicht genug Zeit und muss priorisieren. Ich konnte nicht herausfinden, wie ich Menschen erreiche, die es brauchen - Marketing an trauernde Menschen ist (verständlicherweise) von fast jeder Plattform blockiert. Und ich habe keinen Monetarisierungsplan, der sich nicht komisch anfühlt, was bedeutet, dass ich es mir nicht leisten kann, es am Laufen zu halten, wenn die Kosten steigen.

Vielleicht komme ich darauf zurück. Vielleicht nicht. Aber ich habe viel beim Bauen gelernt.

## Jenseits des Codes

Nicht alles, was erwähnenswert ist, passt ordentlich in ein GitHub-Repository.

**Mentoring.** Ich habe dieses Jahr mit 4 Mentees über [MentorCruise](https://mentorcruise.com/mentor/nunocorao/) gearbeitet - alle navigierten Karriereübergänge im Product Management. Sie dabei zu beobachten, wie sie sich vorbereiteten, Interviews führten und die PM-Rollen bekamen, die sie wollten, war wirklich lohnend. Es ist etwas Besonderes, jemandem zu helfen, die nächste Stufe zu erreichen, wenn du dich erinnerst, wie schwer dieser Aufstieg sich anfühlte.

**Lesen.** Ich habe dieses Jahr 15 Bücher gelesen - nicht so viele, wie ich wollte, aber genug, um einige Perlen zu finden. Favoriten waren *[There Is No Antimemetics Division](https://www.goodreads.com/book/show/54870256-there-is-no-antimemetics-division)* (eine SCP Foundation Geschichte, die mir wochenlang im Kopf blieb), *[Project Hail Mary](https://www.goodreads.com/book/show/54493401-project-hail-mary)* (Andy Weir in Bestform), und *[Tokyo Express](https://www.goodreads.com/book/show/59238510-tokyo-express)* (Matsumotos Klassiker, der mich daran erinnerte, wie sehr ich japanische Krimis liebe).

## Was Ich Gelernt Habe

**Wiederaufbau braucht Zeit.** Es gibt keine Abkürzung durch Trauer, keinen Hack, um über Nacht alleinerziehend zu werden. Du tauchst einfach auf, Tag für Tag, und irgendwann beginnen die Tage weniger schwer zu werden. Fortschritt ist nicht linear, und das ist okay.

**Sei nett zu dir selbst.** Ich habe zu viel von diesem Jahr damit verbracht durchzudrücken, als ich hätte ruhen sollen. Du kannst nicht aus einem leeren Becher gießen. Zu lernen, langsamer zu werden, nein zu sagen, manche Dinge gut genug sein zu lassen - das ist keine Schwäche, das ist Überleben.

**Wisse, wann du pausieren sollst.** Afterlight lehrte mich, dass nicht jedes Projekt fertig werden muss. Manchmal stimmt das Timing nicht, die Ressourcen sind nicht da, oder du musst einfach priorisieren. Pausieren ist kein Scheitern.

**Open Source ist Community.** Blowfish ist nicht erfolgreich, weil ich ein großartiger Entwickler bin (bin ich nicht). Es ist erfolgreich, weil 244 Menschen sich genug gekümmert haben, um beizutragen. Das ist demütigend und motivierend.

**Baue mit den Menschen, die du liebst.** Eva hat mir mehr darüber beigebracht, was wichtig ist, als jedes Arbeitsprojekt. Meine Tochter dabei zu beobachten, wie sie mit einem Roboter spricht, den sie miterschaffen hat - das ist es, was bei dir bleibt.

## Blick auf 2026

Ich mache keine Vorhersagen und keine Neujahrsvorsätze. Aber ich möchte weiterhin Dinge bauen, die wichtig sind, mehr Zeit mit den Menschen verbringen, die ich liebe, und die Zeit, die ich hier habe, in vollen Zügen genießen.

Auf 2026.
