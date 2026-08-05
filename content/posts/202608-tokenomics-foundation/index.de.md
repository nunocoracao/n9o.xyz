---
title: "Die Linux Foundation Nimmt Sich der KI-Tokenomics An, Ohne die Labore"
summary: "Die Linux Foundation hat diese Woche die Tokenomics Foundation gestartet, um zu standardisieren, wie Kosten und ROI von KI gemessen werden. Neunundzwanzig Gründungsmitglieder, von denen keines einen Tokenpreis festlegt. Das ist erschienen, das fehlt, und das sind die Spannungen eines Messstandards, den die Anbieter nie unterschrieben haben."
description: "Die Linux Foundation hat diese Woche die Tokenomics Foundation gestartet, um zu standardisieren, wie Kosten und ROI von KI gemessen werden. Neunundzwanzig Gründungsmitglieder, von denen keines einen Tokenpreis festlegt. Das ist erschienen, das fehlt, und das sind die Spannungen eines Messstandards, den die Anbieter nie unterschrieben haben."
categories: ["KI", "Technik", "Meinung"]
tags: ["KI", "Tokens", "finops", "Standards", "Wirtschaft"]
date: 2026-08-05
draft: false
---

Das letzte Mal, dass jemand "Tokenomics" zu mir sagte, saß ich einem Krypto-Gründer gegenüber, der mir erklärte, wie seine Firma ihre Entwickler bezahlt. Ich stellte eine, wie ich dachte, einfache Frage, sinngemäß: Woher weiß irgendjemand, was das an dem Tag wert ist, an dem es auf jemandes Konto landet? Die Antwort war "das ist, weil du die Tokenomics nicht verstehst." Ein Satz, der nichts bedeutet und gleichzeitig das Gespräch beendet.

Als das Wort diese Woche also im Namen einer neuen Organisation der Linux Foundation auftauchte, zuckte ich kurz zusammen, bevor ich den Rest las. Anderes Token. Aber dieselbe Frage: Woher weißt du, was es an dem Tag wert war, an dem die Rechnung kommt.

Auch darauf hat noch niemand eine gute Antwort.

> [!info] TL;DR
> - Die Linux Foundation hat am 4. August die **Tokenomics Foundation** gestartet, ein herstellerneutrales Standardisierungsgremium für die Messung von KI-Kosten und ROI.
> - Neunundzwanzig Gründungsmitglieder: Banken, Integratoren, Unternehmenssoftware und rund ein Dutzend Anbieter von FinOps-Werkzeugen.
> - **Kein Frontier-Labor ist dabei.** Kein OpenAI, kein Anthropic, kein Google, kein Microsoft, kein AWS, kein NVIDIA.
> - Google Cloud, Microsoft, Salesforce und KPMG bekundeten im Juni Unterstützung und stehen nicht auf der August-Liste.
> - Der nächstliegende erfolgreiche Präzedenzfall, FOCUS, funktionierte erst, als die Hyperscaler dazukamen. Diese Bedingung ist hier nicht erfüllt.

## Was gestartet wurde

Am 4. August hat die [Linux Foundation](https://www.linuxfoundation.org/) die [Tokenomics Foundation](https://www.tokeneconomics.com/) [gestartet](https://www.linuxfoundation.org/press/linux-foundation-launches-the-tokenomics-foundation-to-define-the-economics-and-roi-of-ai-value), ein Standardisierungsgremium für die Ökonomie der KI. Geleitet wird sie von [J.R. Storment](https://www.linkedin.com/in/jrstorment), derselben Person, die nebenan die [FinOps Foundation](https://www.finops.org/) leitet. Der Vorstand tagte am 30. Juli, ein technisches Steuerungsgremium folgt, und beide Organisationen teilen sich die Abrechnungsspezifikation [FOCUS](https://focus.finops.org/) und einen Konferenzkalender.

Die erste Roadmap ist konkret genug, um sie zu beurteilen:

- Ein **Definitionsdokument** für Tokenomics und KI-Wertmetriken
- Ein **Big-T Framework**, das Tokenkomplexität für das Routing von Workloads klassifiziert
- **Token-Kostentelemetrie**, eingebettet in FOCUS v1.5 und später
- Eine **Cost-to-Serve**-Methodik, die die pro Aufruf geleistete Arbeit misst
- **AI Value Frameworks**, die Ausgaben an Geschäftsergebnisse koppeln
- Schulung und Zertifizierung sowie eine Konferenz im September in Amsterdam

Bis Jahresende sind monatliche Veröffentlichungen versprochen. Das benannte Problem ist real und alle erkennen es an: KI ist inzwischen der am schnellsten wachsende Posten im Technologiebudget, und es gibt keine gemeinsame Art zu sagen, was ein Token wert ist.

## Wer im Raum ist

Die Gründungsliste umfasst neunundzwanzig Namen: Accenture, BNY, Broadcom, Calero, Cast.ai, DoiT, Finout, Flexera, GoDaddy, Greenpixie, Hitachi, IBM, JPMorganChase, Kion, Lenovo, Nebius, North Cloud, Oracle, Pay-i, Pointfive, Revenium, SAP, ServiceNow, SHI, Stacklet, Vantage, WWT, XOsphere und Yarken.

Die Liste sortiert sich in drei Gruppen. Unternehmen, die KI im großen Stil einkaufen ([JPMorganChase](https://www.jpmorganchase.com/), [BNY](https://www.bny.com/), [GoDaddy](https://www.godaddy.com/), [Lenovo](https://www.lenovo.com/), [Hitachi](https://www.hitachi.com/)). Integratoren und Reseller ([Accenture](https://www.accenture.com/), [WWT](https://www.wwt.com/), [SHI](https://www.shi.com/)). Und rund ein Dutzend Anbieter von Kostenmanagement ([Kion](https://kion.io/), [Yarken](https://www.yarken.com/), [Flexera](https://www.flexera.com/) und weitere).

Keiner von ihnen legt einen Tokenpreis fest.

Zwei Abwesenheiten. Die erste sind die Frontier-Labore: [OpenAI](https://openai.com/) und [Anthropic](https://www.anthropic.com/) sind keine Mitglieder, und [Google](https://cloud.google.com/), [Microsoft](https://www.microsoft.com/), [AWS](https://aws.amazon.com/), [NVIDIA](https://www.nvidia.com/), [Mistral](https://mistral.ai/) und [Cohere](https://cohere.com/) ebenso wenig. Keine Organisation, die Preise für Frontier-Modelle festlegt, ist Mitglied.

Die zweite hat weniger Aufmerksamkeit bekommen. Als die Linux Foundation am 3. Juni ihre [Absicht ankündigte](https://www.linuxfoundation.org/press/linux-foundation-announces-the-intent-to-launch-the-tokenomics-foundation-to-establish-open-standards-for-ai-cost-management), die Stiftung zu gründen, nannte sie zwölf Organisationen, die "anfängliche Unterstützung bekundet" hatten: Accenture, [Booking.com](https://www.booking.com/), Flexera, Google Cloud, [IBM](https://www.ibm.com/), JPMorganChase, [KPMG](https://kpmg.com/), Microsoft, [Oracle](https://www.oracle.com/), [Salesforce](https://www.salesforce.com/), [SAP](https://www.sap.com/) und [ServiceNow](https://www.servicenow.com/). Vergleiche das mit der August-Liste. Google Cloud, Microsoft, Salesforce, KPMG und Booking.com sind verschwunden. Zwei Monate erklärter Unterstützung, die sich nicht in eine Gründungsmitgliedschaft verwandelt hat.

Die Berichterstattung hat das anders beschrieben. [CIO Dive](https://www.ciodive.com/news/foundation-tackle-ai-token-cost-management/822839/) schrieb, der Start bringe "Unternehmen, Hyperscaler und Frontier-Modellentwickler" zusammen, was die veröffentlichte Liste nicht zeigt. [The New Stack](https://thenewstack.io/tokenomics-foundation/) brachte es unter der Überschrift, die KI-Kostenkrise habe endlich einen Wachhund, "nur nicht die Unternehmen, die sie verursachen".

## Was die Labore getan haben

Kein Frontier-Labor hat sich öffentlich zum Start geäußert. Ich habe weder von OpenAI, Anthropic, Google noch Microsoft eine Stellungnahme gefunden, weder zustimmend noch ablehnend.

Zum Vergleich: Im Dezember 2025 startete die Linux Foundation die [Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation). Anthropic, OpenAI und [Block](https://block.xyz/) haben diese mitgegründet, unterstützt von Google, AWS, Microsoft und [Cloudflare](https://www.cloudflare.com/). Anthropic spendete [MCP](https://modelcontextprotocol.io/), und [OpenAI spendete AGENTS.md](https://openai.com/index/agentic-ai-foundation/). Derselbe Initiator, acht Monate früher, volle Beteiligung.

Im selben Zeitraum brachten beide eigene Kostenkontrollen heraus. OpenAI ergänzte ChatGPT Enterprise am 18. Juni um Ausgabenkontrollen und monatliche Kreditobergrenzen. Anthropic lieferte für Claude Enterprise Verwaltungskontrollen mit Berechtigungen auf Modellebene, Ausgabenwarnungen und eine Admin-API. Beide geben Kunden echte Transparenz. Beide leben in der Konsole des jeweiligen Anbieters, und die Zahlen, die sie erzeugen, sind zwischen Anbietern nicht vergleichbar.

## Hat das jemals funktioniert

Messstandards binden Anbieter durchaus, historisch aber nur unter einer von drei Bedingungen.

**Der Anbieter macht freiwillig mit**, weil Vergleichbarkeit ihm im Wettbewerb hilft. [SPEC](https://www.spec.org/) und [TPC](https://www.tpc.org/) entstanden beide 1988, SPEC aus einem Konsortium von Workstation-Herstellern, zu dem HP, Sun und MIPS gehörten, TPC zur Messung von Transaktionsverarbeitung. Beide setzten sich durch, in Märkten ohne dominanten Akteur, weil jeder Anbieter eine Anzeigetafel wollte, auf der er gewinnen konnte.

So funktionierte auch [FOCUS](https://focus.finops.org/). Die [FinOps Foundation](https://www.finops.org/about/) entstand 2019 und schloss sich 2020 der Linux Foundation an. FOCUS wurde 2023 angekündigt und [erreichte im Juni 2024 Version 1.0](https://www.finops.org/insights/focus-1-0-available/), wobei AWS, Azure, Google Cloud und Oracle Cloud alle am selben Tag native FOCUS-Abrechnungsexporte lieferten. Fünf Jahre von der Stiftung bis zur Spezifikation, und es gelang, weil die Verkäufer im Raum saßen. 2023 war AWS nicht einmal FinOps-Sponsor.

**Ein Regulierer erzwingt es.** Verbrauchskennzeichnungen, Nährwertangaben, Rufnummernmitnahme. Niemand reguliert die Tokenabrechnung.

**Käufer bündeln genug Ausgaben, um es zur Verkaufsbedingung zu machen.** Im Januar 2017 [sagte](https://www.adexchanger.com/advertiser/pritchards-progress-pg-marketing-chief-impact-digital-ultimatums/) Marc Pritchard von P&G dem IAB, Google und Facebook hätten bis Jahresende Zeit, eine vom [MRC](https://mediaratingcouncil.org/) akkreditierte unabhängige Prüfung zu akzeptieren, sonst sei das Geld weg. Beide stimmten Audits zu. Facebook prüfte dann zuerst die ausgelieferten Impressionen und brauchte für sichtbare Impressionen erheblich länger.

Zwei Anläufe, die anders ausgingen. Das [Open Cloud Manifesto](https://www.theregister.com/2009/03/30/open_cloud_manifesto_in_out/) hatte im März 2009 sechsunddreißig Unterzeichner mit IBM im Zentrum, und Amazon, Google, Microsoft und Salesforce weigerten sich allesamt zu unterschreiben. Es führte zu nichts. SNIAs [CDMI](https://www.snia.org/cdmi) wurde ISO-Standard für Cloud-Speicher, S3 wurde trotzdem der De-facto-Standard, und CDMI ergänzte später S3-Kompatibilität.

Der nächstliegende erfolgreiche Präzedenzfall ist also genau der, an dem sich diese Stiftung orientiert, und er erfüllte eine Bedingung, die dieser Start derzeit nicht erfüllt.

## Drei Spannungen

**Die Käuferseite ist standardisierbar. Die Verkäuferseite nicht.** Zuordnung, Tagging, Stückkosten, Cost-to-Serve, ROI-Definitionen: All das lässt sich standardisieren, ohne ein Labor um irgendetwas zu bitten, und es ist der Großteil des alltäglichen Nutzens. Was sich nicht einseitig standardisieren lässt, ist Vergleichbarkeit. Tokenizer sind proprietär und unterschiedlich, derselbe Prompt ergibt bei verschiedenen Anbietern also nicht dieselbe Tokenzahl. Die Preisgestaltung ist bewusst mehrstufig: Vergleiche die veröffentlichten Sätze von [Anthropic](https://docs.claude.com/en/docs/about-claude/pricing) und [OpenAI](https://platform.openai.com/docs/pricing) und du bekommst Eingabe, zwischengespeicherte Eingabe, Cache-Schreibvorgänge mit je nach TTL unterschiedlichen Multiplikatoren, Ausgabe und verborgene Reasoning-Tokens, die als Ausgabe abgerechnet werden, mit auf jeder Seite anders definierten Stufen. Ein Schema kann all das getreu erfassen und dich trotzdem nicht zwei Rechnungen vergleichen lassen.

**Der Standard existiert vielleicht schon.** Die [GenAI-Semantikkonventionen von OpenTelemetry](https://opentelemetry.io/blog/2026/genai-observability/) tragen `gen_ai.usage.input_tokens` und Verwandte seit 2024, und FOCUS dehnt sich bereits auf Tokenausgaben aus. Der FinOps-Praktiker [Dvir Mizrahi](https://www.linkedin.com/pulse/lets-talk-tokenomics-foundation-dvir-mizrahi-uauzf) vertritt das direkt und fragt, warum eine FOCUS-Arbeitsgruppe eine eigene Stiftung, einen eigenen Vorstand und einen eigenen Konferenzzirkus braucht, mit dem Schluss, die Motivation sei "nicht technisch. Sie ist kommerziell." Das lohnt sich abzuwägen gegen den Anteil der Mitglieder, die Kostenwerkzeuge verkaufen.

**Der Hebel wirkt in die falsche Richtung.** Die Werbeanalogie ist verlockend, aber die Ökonomie kehrt sich um. Facebook und Google brauchten das Geld der Werbetreibenden und hatten Inventar im Überfluss. Die Labore sind angebotsbeschränkt, und ihre größten Umsatzlinien sind Verbraucherabos und Coding-Lizenzen, nicht die Enterprise-API-Verträge, die diese Mitglieder halten. Nach den meisten Schätzungen halten Anthropic und OpenAI zusammen annähernd sechzig Prozent der Unternehmensausgaben für LLM-APIs. Budget zurückzuhalten ist eine schwache Drohung, wenn die Warteschlange ohnehin voll ist.

Und unter allen dreien liegt womöglich schlicht die falsche Einheit. [Uber](https://www.uber.com/) verbrannte sein gesamtes KI-Budget für 2026 bis April, verteilt auf rund fünftausend Entwickler, und [deckelte Mitarbeitende dann bei 1.500 Dollar im Monat](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/). Es hatte nicht versäumt, Tokens zu zählen. Es zählte sie einwandfrei. Es hatte Entwickler in Bestenlisten zur Claude-Code-Nutzung gesteckt, was ein Anreizproblem ist und kein Messproblem. Ubers COO Andrew Macdonald zu der Frage, ob die Ausgaben mit irgendetwas verbunden waren, das Kunden spürten: ["Diese Verbindung gibt es noch nicht."](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/) Unterdessen fielen die Preise pro Token im vergangenen Jahr um rund achtzig Prozent, während die Gesamtausgaben stiegen. Das ist das [Jevons-Paradoxon](https://de.wikipedia.org/wiki/Jevons-Paradoxon), und kein Telemetrieschema rührt daran.

## Offene Fragen

1. Ändert ein Messstandard, den die Anbieter ignorieren, überhaupt Verhalten, oder schafft er vor allem einen Zertifizierungsmarkt?
2. Gibt es irgendwo eine Käuferkoalition mit genug gebündelten Ausgaben, um Konformität zur Verkaufsbedingung zu machen, wo die Labore doch angebotsbeschränkt sind?
3. Wenn OTel und FOCUS das Schema bereits tragen, was fügt eine eigene Stiftung jenseits von Governance und einer Konferenz hinzu?
4. Was genau würde ein Labor durch einen Beitritt preisgeben? Vergleichbarkeit pro Token nützt demjenigen, der bei gleicher Qualität am günstigsten ist, und das ist ein bewegliches Ziel. Ist die Ablehnung Strategie, oder hat nur noch niemand gefragt?
5. Standardisieren wir den falschen Nenner? Kosten pro Token sind messbar und weitgehend gelöst. Wert pro Entscheidung ist beides nicht, und das war die Zahl, die Uber tatsächlich gebraucht hätte.

## Worauf ich achte

Drei Marker, alle vor Jahresende überprüfbar. Ob bis zur Amsterdamer Konferenz im September ein Frontier-Labor beitritt. Ob das Token-Schema von FOCUS v1.5 im versprochenen monatlichen Takt erscheint. Und ob Google Cloud und Microsoft die im Juni erklärte Unterstützung in echte Mitgliedschaft überführen, oder ob die Juni-Liste der Höchststand bleibt.

Ich will, dass das gelingt. Unternehmen können tatsächlich nicht beantworten, was ihre KI-Ausgaben eingebracht haben, und das sollte jemand lösen. Ich glaube nur, die Version, die erscheint, wird deine Ausgaben beschreiben statt deine Anbieter zu disziplinieren, und das sind sehr verschiedene Produkte.
