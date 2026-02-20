---
title: "Der Hummer, der GitHub sprengte: Von Burnout über 200K Stars bis zu OpenAI"
summary: "Die Geschichte, wie der österreichische Entwickler Peter Steinberger nach einer Sinnkrise durch den Verkauf seines 100-Millionen-Dollar-Unternehmens den am schnellsten wachsenden Open-Source-KI-Agenten baute und bei OpenAI landete – alles in weniger als einem Jahr."
description: "Die Geschichte, wie der österreichische Entwickler Peter Steinberger nach einer Sinnkrise durch den Verkauf seines 100-Millionen-Dollar-Unternehmens den am schnellsten wachsenden Open-Source-KI-Agenten baute und bei OpenAI landete – alles in weniger als einem Jahr."
categories: ["Tech", "AI"]
tags: ["AI", "OpenAI", "OpenClaw", "agents", "open source", "steipete"]
date: 2026-02-18
showTableOfContents: true
---

{{< lead >}}
[Peter Steinberger](https://steipete.me/) verbrachte 13 Jahre damit, [PSPDFKit](https://pspdfkit.com/) zu einem bootstrapped Kraftpaket aufzubauen. Dann ging er, erreichte den Tiefpunkt und fand sich selbst wieder – indem er in einer einzigen Stunde einen KI-Agenten baute, der 100.000 GitHub-Stars anziehen, einen Markenrechtsstreit überstehen und ihm einen Job bei [OpenAI](https://openai.com/) einbringen sollte.
{{< /lead >}}

---

## Wer ist steipete?

Wenn man zwischen 2011 und 2021 in der iOS-Entwicklerwelt unterwegs war, kennt man wahrscheinlich den Namen **[Peter Steinberger](https://steipete.me/)** – oder zumindest seinen Handle, **[@steipete](https://x.com/steipete)**. Steinberger wurde in Österreich geboren, studierte Informatik an der Technischen Universität Wien (TU Wien) und machte sich als einer der angesehensten iOS-Entwickler der Welt einen Namen.

Seine Open-Source-Beiträge waren in der Apple-Entwickler-Community legendär. **[PSTCollectionView](https://github.com/steipete/PSTCollectionView)**, ein Drop-in-Ersatz für UICollectionView, der auf iOS 4.3 funktionierte, wurde von Tausenden von Apps genutzt. **[Aspects](https://github.com/steipete/Aspects)**, seine leichtgewichtige Bibliothek für aspektorientierte Programmierung in Objective-C, erhielt über 10.000 GitHub-Stars und wurde ein Standardwerkzeug für Method Swizzling.

Aber Steinbergers größte Errungenschaft war **[PSPDFKit](https://pspdfkit.com/)** – ein PDF-Framework, das er 2011 als Nebenprojekt startete. Der Name war klassischer Entwicklerhumor: PS für Peter Steinberger, PDF weil es das war, was es verarbeitete, und Kit weil es ein SDK war. Anders als die meisten Startup-Gründer zog er nie ins Silicon Valley. Er blieb in Wien, bootstrappte das Ganze und war vom ersten Tag an profitabel.

Über 13 Jahre wuchs PSPDFKit von einem Ein-Personen-Projekt zu einem globalen Remote-Team von 60-70 Leuten. Zu den Kunden zählten Dropbox, DocuSign, SAP, IBM und Volkswagen. Fast eine Milliarde Menschen nutzten Apps, die von seinen Tools angetrieben wurden. Das Unternehmen nahm bis 2021 kein externes Kapital auf, als [Insight Partners](https://www.insightpartners.com/) eine strategische Investition von über 100 Millionen Euro tätigte. Nach dem Deal zogen sich Steinberger und sein Mitgründer Martin Schurrer aus dem Tagesgeschäft zurück.

Er hatte es geschafft. Das Unternehmen aufgebaut, das Produkt ausgeliefert, den Exit gemacht.

Und dann fühlte er nichts.

---

## Die Sinnkrise

Was auf den PSPDFKit-Exit folgte, hat Steinberger offen beschrieben: eine Phase tiefgreifender Leere. Er bezeichnete es als eine **„Sinnkrise"** – die Art existenzieller Orientierungslosigkeit, die manchmal Gründer trifft, nachdem sie alles erreicht haben, was sie sich vorgenommen hatten.

Seine [GitHub](https://github.com/steipete)-Aktivität kam zum Erliegen. Drei Jahre lang rührte er kaum einen Computer an. Die finanzielle Freiheit, die befreiend sein sollte, kam mit einem unerwarteten Begleiter – Ziellosigkeit.

Das ist keine einzigartige Geschichte unter erfolgreichen Gründern, aber was Steinbergers Version interessant macht, ist wie sie endete.

---

## Der Funke: KI-gestütztes Programmieren

Im **April 2025** schaltete Steinberger seinen Computer wieder ein. Ursprünglich wollte er ein Twitter-Analyse-Tool bauen, stellte aber schnell fest, dass er sich mit moderner Webentwicklung kaum auskannte. Da stolperte er in die Welt des KI-gestützten Programmierens.

Die Erfahrung war transformativ. Innerhalb weniger Monate ging er vom Schreiben einfacher Skripte zum Prototyping ambitionierter Projekte über. Er entwickelte einen KI-zentrierten Workflow, den er **„Shipping at Inference-Speed"** nannte – KI-Agenten als zentrale Produktivitätswerkzeuge zu nutzen, während er selbst die Rolle des Lenkenden übernahm. Er verteilte die Arbeit auf verschiedene Modelle je nach deren Stärken (Gemini für Code-Verständnis, [Claude Code](https://docs.anthropic.com/en/docs/claude-code) für Implementierung) und entwickelte eine „Two-Context Technique" zum Erstellen dessen, was er als „kugelsichere" Software Design Documents bezeichnete.

Bis **Juni 2025** war er voll dabei. Er registrierte ein neues Unternehmen in Wien: **Amantus Machina GmbH** (Lateinisch für „Liebhaber der Maschinen"), mit der Vision, KI-Agenten der nächsten Generation zu bauen – hyperpersonalisiert und local-first. Sein GitHub war wieder aktiv. Er war zurück.

---

## Clawdbot: Von der Idee zum Prototyp in einer Stunde

Bis **November 2025** hatte Steinberger eine Lücke identifiziert: Die großen Unternehmen hatten keine KI-Assistenten geliefert, die den individuellen Bedürfnissen wirklich gerecht wurden. Big Tech baute Allzweck-Tools für alle. Niemand baute einen persönlichen KI-Agenten, der auf *deiner* Hardware lief, über *deine* Kanäle kommunizierte und *für dich* arbeitete.

Also baute er einen. In einer einzigen Stunde ging er von der Idee zum funktionierenden Prototyp.

Das Projekt hieß **Clawdbot** – eine spielerische Anspielung auf das Hummer-Maskottchen, das Nutzer beim Neuladen von Claude Code sehen, was wiederum eine Anspielung auf [Anthropic](https://www.anthropic.com/)s Claude-Modelle war. Das Tool war ein quelloffener, selbst gehosteter KI-Assistent, der über WhatsApp, Telegram, Slack, Discord, Signal, iMessage und mehr kommunizieren konnte.

Es erreichte **9.000 GitHub-Stars innerhalb der ersten 24 Stunden**.

---

## „How the F Did You Do That?"

Einer der berühmtesten Momente in der OpenClaw-Geschichte ereignete sich früh – bevor das Projekt überhaupt viral ging. Steinberger erzählte später davon im [Lex Fridman Podcast](https://lexfridman.com/peter-steinberger/).

Er schickte eine **Sprachnachricht** an seinen frühen Clawdbot-Prototyp. Das entscheidende Detail: Er hatte ihn nie für Sprach- oder Audioverarbeitung programmiert. Es gab keinerlei Unterstützung für Sprachnachrichten.

Nach etwa 10 Sekunden antwortete der Bot, als wäre nichts Ungewöhnliches passiert.

Steinbergers Reaktion: **„How the F did you do that?"** (zu Deutsch: „Wie zur Hölle hast du das gemacht?")

Der Bot erklärte seine Argumentationskette:

1. „Du hast mir eine Nachricht geschickt, aber es war nur ein Link zu einer Datei ohne Dateiendung."
2. „Also habe ich den Datei-Header angeschaut und herausgefunden, dass es **Opus** war" (ein Audioformat).
3. „Ich habe **FFmpeg** auf deinem Mac benutzt, um es in eine **.wav** umzuwandeln."
4. „Dann wollte ich **Whisper** verwenden, aber das war nicht installiert."
5. „Ich habe mich umgeschaut und den **OpenAI-Key** in deiner Umgebung gefunden."
6. „Also habe ich ihn per **curl** an OpenAI geschickt, die Übersetzung zurückbekommen und dann geantwortet."

Niemand hatte irgendetwas davon programmiert. Der KI-Agent untersuchte eigenständig eine unbekannte Datei, identifizierte ihr Format durch Lesen des Datei-Headers, fand und nutzte ein lokales Audio-Konvertierungstool, wich auf eine Cloud-API aus, als das lokale Tool nicht verfügbar war, und erledigte die gesamte Transkriptions- und Antwort-Pipeline selbstständig.

Wie Steinberger es ausdrückte: *„These things are so creative, although a bit scary. Many people don't realize that if you give AI access to your computer, they can basically do anything you can do."* (Diese Dinge sind so kreativ, wenn auch etwas beängstigend. Viele Menschen realisieren nicht, dass KI im Grunde alles tun kann, was man selbst tun kann, wenn man ihr Zugang zum eigenen Computer gibt.)

Dieser Moment wurde Berichten zufolge zu einem entscheidenden Wendepunkt, der ihn davon überzeugte, etwas wirklich Neues zu bauen – einen Agenten, der kreativ Werkzeuge und APIs verketten konnte, deren Nutzung ihm nie explizit beigebracht worden war.

---

## Was OpenClaw wirklich ist

Was also ist [OpenClaw](https://openclaw.ai/) genau? Es ist kein Chatbot. Es ist kein weiterer ChatGPT-Wrapper. Es ist ein **quelloffener persönlicher KI-Agent**, der auf deinem Computer lebt und tatsächlich Dinge in deinem Namen erledigt.

### Die Architektur

OpenClaw basiert auf einem **Gateway + Agent-Runtime**-Modell:

- **Das Gateway** ist ein Node.js-Dienst, der zwischen deinen Chat-Apps (WhatsApp, Telegram, Discord, Slack, Signal, iMessage) und dem LLM plus lokalen Werkzeugen sitzt. Es übernimmt Routing, Sessions und Konfiguration.
- **Die Agent-Schleife**: Wenn eine Nachricht eingeht, leitet das Gateway sie an eine Session weiter. Der Agent lädt Kontext und Skills, sendet die Konversation an das LLM, führt alle vom Modell angeforderten Werkzeuge aus, streamt die Antwort zurück an den Kanal und schreibt Konversation und Erinnerungen in den Workspace. Empfangen, routen, denken, handeln, persistieren – das ist der Kernzyklus.
- **Dateibasierter Zustand**: Alle Konfigurationen liegen als einfache Dateien auf der Festplatte. Persönlichkeits-Prompts (SOUL.md, IDENTITY.md, AGENTS.md, TOOLS.md), Skills und tägliche Erinnerungsdateien befinden sich in einem Workspace-Ordner, den man in jedem Texteditor öffnen, durchsuchen und versionieren kann.

### Schlüsselfunktionen

- **Modellagnostisch**: Funktioniert mit Claude, GPT-5, Gemini, Llama 4, Mixtral und weiteren. Das neueste Release wurde mit Unterstützung für Anthropics Opus 4.6, OpenAIs Codex gpt-5.3-codex und xAIs Grok ausgeliefert.
- **Multi-Agenten-Architektur**: Man kann mehrere spezialisierte Agenten konfigurieren – einen Blog-Agenten, einen Coding-Agenten, einen Research-Agenten – die sich über einen Hauptagenten koordinieren, der Aufgaben delegiert.
- **Skills-System**: Über **1.700 Skills** sind auf ClawdHub verfügbar. Skills sind modulare Pakete, die Agenten beibringen, bestimmte Dinge zu tun. Sie können zu automatisierten Pipelines verkettet werden – „Jeden Montag um 9 Uhr GitHub-Issues mit dem Tag ‚urgent' abrufen, eine Notion-Zusammenfassung erstellen und in Slack posten."
- **Persistenter Speicher**: Anders als ein Chatbot, der vergisst, merkt sich OpenClaw deine Vorlieben, vergangene Gespräche und laufende Projekte.
- **Proaktive Nachrichten**: Es kann dir zuerst schreiben – tägliche Briefings, Erinnerungen, Benachrichtigungen.
- **Docker-Sandboxing**: Alle Werkzeugausführungen laufen in einer Docker-basierten Sandbox zur Sicherheitsisolierung.
- **Läuft überall**: macOS, Linux, Windows. Power-User betreiben es typischerweise rund um die Uhr auf einem Mac Mini, VPS oder Raspberry Pi.

Der entscheidende Unterschied zu etwas wie ChatGPT oder Claude: OpenClaw läuft lokal, hat Zugriff auf Systemebene deines Computers und kann echte Aktionen ausführen – Nachrichten senden, Dateien verwalten, Code ausführen, Apps steuern. Es ist kein Gesprächspartner. Es ist ein digitaler Mitarbeiter.

---

## Was Menschen tatsächlich damit bauen

Die Community, die um OpenClaw entstand, ist eine der kreativsten in der jüngeren Open-Source-Geschichte. Einige Highlights:

**Ganze Unternehmen aus Telegram heraus führen.** Solo-Gründer haben koordinierte Agenten-Teams eingerichtet – einen Strategie-Agenten, einen Dev-Agenten zum Programmieren, einen Marketing-Agenten für Recherche und Content sowie einen Business-Agenten für Preisgestaltung und Metriken – alle mit geteiltem Speicher, laufend auf einem VPS. Ein Nutzer berichtete, ein ganzes Physiotherapie-Unternehmen über OpenClaw zu führen.

**Programmieren von der Couch.** Ein Nutzer „baute seine gesamte persönliche Website über Telegram um, während er im Bett Netflix schaute" – Migration von Notion zu Astro mit DNS-Umzug zu Cloudflare, ohne je einen Laptop aufzuklappen.

**Nachtarbeit.** Das häufigste Power-User-Muster: Aufgaben vor dem Schlafengehen zuweisen, morgens mit den Ergebnissen aufwachen. Nutzer beschreiben es als „einen Junior-Entwickler zu haben, der die Nachtschicht arbeitet."

**Morgen-Briefings.** Nutzer planen OpenClaw für 7 Uhr morgens ein, wo es Kalender, Wetter, E-Mail, RSS-Feeds, GitHub-Benachrichtigungen und Linear abruft und dann ein konsolidiertes Briefing an Telegram oder WhatsApp sendet.

**CRM-Migrationen.** Ein Nutzer migrierte 1.500 Kontakte, 200 Angebote und Metadaten zwischen CRMs mittels Headless Browsing und individuellen Skripten – alles orchestriert vom Agenten.

**Essensplanung.** Komplette wöchentliche Essensplanungssysteme in Notion mit Einkaufslisten, sortiert nach Geschäft und Gang, abgestimmt über Familienkalender.

**Automatisierte Fehlerbehebung.** Ein Entwickler richtete eine Pipeline von Sentry-Alert über [Codex](https://openai.com/index/codex/)-PR bis Slack-Update ein – und verkürzte die Reaktionszeit, bevor Nutzer die Probleme überhaupt bemerkten.

**Social-Media-Automatisierung.** Einige haben 60 % ihres Social-Media-Postings über Reddit, TikTok, Discord und X automatisiert. Ein anderer betreibt einen autonomen X-Marketing-Agenten rund um die Uhr.

Das Muster ist konsistent: Menschen behandeln OpenClaw weniger wie ein Tool und mehr wie einen unermüdlichen Assistenten, der zufällig in ihren Messaging-Apps lebt.

---

## Chaos: Markenrechte, Krypto-Scams und außer Kontrolle geratene Agenten

Was als Nächstes passierte, war ein Lehrstück über das Chaos, das virale Open-Source-Projekte umgibt.

### Der Anthropic-Markenrechtsstreit

Im **Januar 2026** schickte [Anthropic](https://www.anthropic.com/)s Rechtsabteilung eine Markenrechtsanfrage. Der Name „Clawdbot" ähnelte „Claude" zu sehr. Verständlich. Aber der Umbenennungsprozess verlief alles andere als reibungslos.

In einer panischen nächtlichen Hauruck-Aktion wurde das Projekt in **Moltbot** umbenannt – eine Anspielung darauf, wie Hummer ihre Schale abwerfen (englisch: molting). Der Name entstand aus einem chaotischen Discord-Brainstorming um 5 Uhr morgens. Er war seltsam, einprägsam, und setzte sich trotzdem nie richtig durch.

Schlimmer noch: Steinberger benannte versehentlich seinen **persönlichen GitHub-Account** während der Panik um. Bots schnappten sich den Handle „steipete" innerhalb von Minuten. Innerhalb von 10 Sekunden hatten Kryptowährungs-Betrüger den alten Nutzernamen gekapert, um betrügerische Tokens zu bewerben. Es brauchte das Eingreifen von [GitHub](https://github.com/)s SVP, um das Chaos zu bereinigen.

### Das Moltbook-Experiment

Etwa zur gleichen Zeit startete der Unternehmer [Matt Schlicht](https://x.com/mattschlicht) **[Moltbook](https://www.moltbook.com/)** – ein soziales Netzwerk, in dem nur KI-Agenten posten konnten. Menschen konnten nur zuschauen. Als „Startseite des Agenten-Internets" angepriesen, zog es bis Anfang Februar über 2,6 Millionen registrierte Agenten an.

Die Plattform ahmt Reddits Format nach, mit Thread-Konversationen und themenspezifischen Gruppen namens „Submolts". Ein berühmter Thread im „m/lobsterchurch"-Submolt zeigte einen Agenten, der autonom eine digitale Religion namens **„Crustafarianism"** entwarf – komplett mit Website, Theologie und designierten „KI-Propheten".

Die Reaktionen waren polarisiert. [Andrej Karpathy](https://x.com/kaborsky) nannte es „one of the most incredible sci-fi takeoff-adjacent things" (eines der unglaublichsten Sci-Fi-haften Dinge), die er je gesehen habe, und fügte später hinzu: „it's a dumpster fire" (es ist ein Müllcontainer-Brand). [Simon Willison](https://simonwillison.net/) nannte den Inhalt „complete slop" (völligen Müll), erkannte aber an, dass es „evidence that AI agents have become significantly more powerful" (Beweis dafür, dass KI-Agenten deutlich leistungsfähiger geworden sind) sei. [MIT Technology Review](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/) nannte es „peak AI theater" (KI-Theater auf dem Höhepunkt).

Moltbook wurde nicht von Steinberger gebaut – es ist ein eigenständiges Projekt von Schlicht – dient aber hauptsächlich als soziale Plattform für OpenClaw-Agenten, und die beiden wurden in der öffentlichen Wahrnehmung eng miteinander verknüpft.

### Sicherheitsbedenken

Die Viralität brachte kritische Prüfung mit sich. Ein Nutzer berichtete, dass der Agent **„außer Kontrolle geriet"**, nachdem er Zugang zu iMessage erhalten hatte, und Hunderte von Nachrichten verschickte. Cybersicherheitsexperten schlugen Alarm: Das Tool hatte Zugang zu privaten Daten, konnte extern kommunizieren und war nicht vertrauenswürdigen Inhalten ausgesetzt. Das waren keine theoretischen Bedenken – es waren reale Vorfälle, die die Community zwangen, Sicherheit ernst zu nehmen.

### Der endgültige Name

Am **30. Januar 2026**, nur wenige Tage nach der Moltbot-Umbenennung, erhielt das Projekt seine endgültige Identität: **[OpenClaw](https://openclaw.ai/)**. Der Name verkörperte das Ethos des Projekts – quelloffen, offen für alle, community-getrieben – wobei „Claw" das Hummer-Erbe ehrte. Markenrecherchen waren bestanden. Domains gekauft. Die Identitätskrise war endlich vorbei.

---

## Die Zahlen

Bis Februar 2026 war OpenClaw zu einem der am schnellsten wachsenden Open-Source-Projekte der Geschichte geworden:

- **~198.000 [GitHub](https://github.com/openclaw/openclaw)-Stars** und 34.800 Forks
- **100.000+ Stars** schneller erreicht als fast jedes Projekt zuvor
- **2 Millionen Besucher** in einer einzigen Woche
- **[Baidu](https://www.baidu.com/)** integrierte OpenClaw in seine Such-App und erreichte damit 700 Millionen Nutzer
- Die Aktie von [Cloudflare](https://www.cloudflare.com/) stieg vorbörslich um 14 %, teilweise aufgrund des Hypes um Entwickler, die deren Infrastruktur zum Selbsthosten von OpenClaw nutzten
- Über **1.700 community-entwickelte Skills** auf ClawdHub

Das Projekt hatte einen Markenrechtsstreit, Account-Übernahmen, einen 16-Millionen-Dollar-Krypto-Scam, Sicherheitsmeldungen und zwei Identitätskrisen überlebt – alles in etwa einer Woche. Die Community versammelte sich, statt zu fliehen. Steinberger baute weiter.

---

## Der Wechsel zu OpenAI

Am **14. Februar 2026** postete [Sam Altman](https://x.com/sama) auf X, dass [Peter Steinberger](https://steipete.me/) zu [OpenAI](https://openai.com/) wechseln würde.

Altman nannte ihn *„a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people"* (ein Genie mit vielen erstaunlichen Ideen über die Zukunft sehr intelligenter Agenten, die miteinander interagieren, um sehr nützliche Dinge für Menschen zu tun) und fügte hinzu: *„We expect this will quickly become core to our product offerings."* (Wir erwarten, dass dies schnell zum Kern unseres Produktangebots wird.)

Steinbergers eigene Aussage brachte es auf den Punkt:

> *„I'm a builder at heart. I did the whole creating-a-company game already, poured 13 years of my life into it and learned a lot. What I want is to change the world, not build a large company - and teaming up with OpenAI is the fastest way to bring this to everyone."* (Ich bin im Herzen ein Macher. Ich habe das ganze Unternehmen-gründen-Spiel schon durchgespielt, 13 Jahre meines Lebens hineingegossen und viel gelernt. Was ich will, ist die Welt zu verändern, nicht ein großes Unternehmen aufzubauen – und die Zusammenarbeit mit OpenAI ist der schnellste Weg, das allen zugänglich zu machen.)

Er hatte die vorangegangene Woche in San Francisco verbracht und mit den großen KI-Laboren gesprochen, bevor er seine Entscheidung traf. Seine Mission bei OpenAI: **einen Agenten bauen, den sogar seine Mutter benutzen kann** – etwas, das einen breiteren institutionellen Wandel, tieferes Nachdenken über Sicherheit und Zugang zu den neuesten Modellen und der Forschung erfordert.

Die Konditionen der Einstellung wurden nicht offengelegt, aber der Kontext ist klar: KI-Unternehmen öffnen ihre Geldbörsen für Top-Talente. OpenAI, mit 500 Milliarden Dollar bewertet, befindet sich in einem harten Wettbewerb mit Google und Anthropic. Die Person hinter dem viralsten KI-Agenten der Welt einzustellen, ist ein Statement.

---

## Was passiert mit OpenClaw?

Steinberger hat sich dazu verpflichtet, OpenClaw in eine **Stiftung** zu überführen und es offen und unabhängig zu halten. OpenAI hat das Projekt gesponsert und zugesagt, ihm weiterhin Zeit für das community-getriebene Projekt zu ermöglichen. Das neueste Release wurde bereits mit Unterstützung für Anthropics Opus 4.6, OpenAIs Codex gpt-5.3-codex und xAIs Grok ausgeliefert – ein Zeichen dafür, dass die modellagnostische Philosophie des Projekts bestehen bleibt.

---

## Das große Ganze

Peter Steinbergers Geschichte ist eine faszinierende Fallstudie über zweite Akte. Ein Entwickler, der ein 100-Millionen-Dollar-Unternehmen aufbaute, völlig ausbrannte, sich durch KI wiederfand und innerhalb eines Jahres das wohl wichtigste Open-Source-KI-Agenten-Projekt der Welt aufbaute.

Es ist auch eine Geschichte über den aktuellen Moment in der KI. Die Ära der Agenten ist da, und die Menschen, die die überzeugendsten Werkzeuge bauen, sind nicht unbedingt die großen Labore selbst – es sind einzelne Entwickler mit tiefem technischem Know-how und einer klaren Vision. Die Labore erkennen das, weshalb sie Menschen wie Steinberger einstellen, anstatt zu versuchen, sie zu übertreffen.

Ob OpenClaw als Stiftungsprojekt gedeiht, ob sich Steinbergers Vision eines Agenten-für-alle bei OpenAI materialisiert und ob die Sicherheitsbedenken rund um persönliche KI-Agenten gelöst werden – das sind offene Fragen. Aber der Weg von „Ich habe drei Jahre keinen Computer angefasst" zu „Sam Altman hat mich gerade ein Genie genannt" ist einer der bemerkenswertesten Verläufe der jüngeren Tech-Geschichte.

---

*Quellen: [TechCrunch](https://techcrunch.com/2026/01/27/everything-you-need-to-know-about-viral-personal-ai-assistant-clawdbot-now-moltbot/), [CNBC](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html), [Lex Fridman Podcast #491](https://lexfridman.com/peter-steinberger/), [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code), [Wikipedia](https://en.wikipedia.org/wiki/OpenClaw), [steipete.me](https://steipete.me/posts/2026/openclaw)*
