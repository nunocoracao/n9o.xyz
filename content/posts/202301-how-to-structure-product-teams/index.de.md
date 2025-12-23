---
title: "Wie man Produktteams strukturiert"
summary: "Es spielt keine Rolle, ob Sie in einem Startup, Scale-up oder einer größeren Organisation arbeiten – in jedem Fall bedeutet der Erfolg eines Produktteams in der Regel, dass dieses Team wächst. Diese Veränderungen bringen Herausforderungen und Chancen für Organisationen mit sich. Hier sind einige Strategien zur Organisation von Produktteams, wofür sie optimieren und in welcher Situation sie eingesetzt werden sollten."
categories: ["Produkt", "Strategie", "Management"]
tags: ["team","organisation"]
# externalUrl: ""
date: 2023-01-08
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

> Jede Organisation, die ein System entwirft (im weitesten Sinne), wird ein Design produzieren, dessen Struktur eine Kopie der Kommunikationsstruktur der Organisation ist.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

Es spielt keine Rolle, ob Sie in einem Startup, Scale-up oder einer größeren Organisation arbeiten – in jedem Fall bedeutet der Erfolg eines Produktteams typischerweise, dass dieses Team wächst. Zuerst müssen Sie mehr Leute einstellen, dann das Team aufteilen, jetzt gibt es eine Gruppe von Teams zu organisieren, und nach einer Weile beginnt die Schleife schließlich von vorne. Diese Veränderungen bringen Herausforderungen und Chancen für Organisationen mit sich. Hier sind einige Strategien zur Organisation von Produktteams, wofür sie optimieren und in welcher Situation sie eingesetzt werden sollten.

## Wofür optimieren?

Bei der Organisation von Produktteams ist es wichtig, die folgenden vier Faktoren zu berücksichtigen: **Vollständigkeit**, **Unabhängigkeit**, **Klarheit** und **Balance**. _Spoiler-Alarm:_ Ich habe keinen Weg gefunden, alle zu optimieren. Es gibt jedoch einige klare Muster, welche dieser Faktoren am wichtigsten sind, abhängig von der Phase, in der sich Ihre Organisation und diese Teams befinden.

### Vollständigkeit
Sicherstellen, dass Teams und Gruppen einen Bereich End-to-End besitzen. In einem vollständigen Bereich sollten Teams/Gruppen in der Lage sein, eine klare wertbasierte Vision und Roadmap zu erstellen. Bereiche müssen eng genug (keine Lücken) und breit genug sein, um im Laufe der Zeit vollständigen Wert zu liefern, anstatt nur Features zu liefern.

### Unabhängigkeit
Schnell voranzukommen ist einer der wichtigsten Aspekte für den Erfolg eines Teams. Sicherzustellen, dass jedes Team über seinen Bereich unabhängig ist, trägt erheblich zu seiner Fähigkeit bei, schnell zu handeln und insgesamt Wert zu schaffen. Unabhängigkeit wird erreicht, wenn ein Team seine Mission vorantreiben und seine Ziele mit dem Entwicklungsteam, mit dem es arbeitet, erreichen kann – mit minimalen Abhängigkeiten von anderen Teams. Produktabhängigkeiten beschränken sich nicht auf Entwicklungsteams und technische Abhängigkeiten. Zusätzliche Abhängigkeiten umfassen andere PMs, andere Lieferteams wie Data, UX, Design, Marketing sowie Stakeholder wie Legal, Compliance und Finance.

### Klarheit
Der Bereich sollte für das interne Team und externe Stakeholder klar sein. Dies stellt sicher, dass a) das Team weiß, was seine Kernfunktion und Ziele sind und b) es einfacher sein wird, externe Stakeholder auf dieselbe Vision auszurichten. Alle Artefakte und Dokumente des Teams sollten darauf abzielen, diese Klarheit zu vermitteln, z.B. der Name des Teams.

### Balance
Beim Erstellen oder Aufteilen von Bereichen für Produktteams oder innerhalb einer Produktgruppe ist es wichtig, eine ausgewogene Verteilung in Bezug auf Relevanz und Arbeitslast der Themen sicherzustellen. Andernfalls können Teams in Szenarien geraten, in denen ein einzelnes Team alle wichtigsten Probleme des Unternehmens mit nur einem begrenzten Teil der verfügbaren Ressourcen bewältigt. Die Balance sollte auch sicherstellen, dass bis zu einem gewissen Grad alle Gruppen und Teams ein bestimmtes Maß an Relevanz und Impact haben; andernfalls könnte es schwierig sein, Teammitglieder einzustellen und zu motivieren.



## Strategien

Hier sind einige Optionen zur Organisation von Teams und wie jede Strategie im Vergleich zu den vier oben genannten Faktoren abschneidet.

### Funktional
*auch bekannt als nach Produkten, Features, technischen Komponenten*

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Frontend
FPM(Product Manager)
FEM(Engineering Manager)
FPD(Product Designer)
FFD(Frontend Developers)
end


subgraph Backend
BPM(Product Manager)
BEM(Engineering Manager)
BBD(Backend Developers)
end

subgraph Platform
PPM(Product Manager)
PEM(Engineering Manager)
PBD(Backend Developers)
end

O --> Frontend
O --> Backend
O --> Platform

{{< /mermaid >}}
</div>

<figcaption align = "center">Beispiele für die funktionale Organisation Ihrer Teams mit 3 Teams: Frontend, Backend und Platform</figcaption>

| Faktor         | Bewertung                                                        |
| -------------- | ---------------------------------------------------------------- |
| Vollständigkeit | ⭐️  <br/>_hoch für Startups, sinkt dramatisch mit Skalierung_    |
| Unabhängigkeit | ⭐️ ⭐️                                                            |
| Klarheit       | ⭐️ ⭐️ ⭐️                                                         |
| Balance        | ⭐️ ⭐️                                                            |

Diese Struktur teilt Gruppen und Teams nach funktionalen Modulen wie Produkten, Features, Komponenten oder Schichten (FE vs. BE) auf. Diese Option eignet sich am besten für ein Unternehmen in einer frühen Phase, in der schwere Arbeit erforderlich ist, um auch nur die ersten Releases zu liefern. Die Vision und Roadmap zu diesem Zeitpunkt sind typischerweise die des Gesamtprodukts, und Sie brauchen hauptsächlich die verschiedenen Teile, um gut zusammen auf den bereits definierten Umfang hinzuarbeiten. Wenn Organisationen skalieren, wird dies zu einer schlechten Option, denn wenn Teams wachsen und ihre Aufteilung immer granularer wird, führt dies zu einem dramatischen Anstieg der Abhängigkeiten zwischen Teams, und die Vision und Roadmap jedes Teams/jeder Gruppe werden eingeschränkt, was zu geringer Kundenzentrierung führt.

| Vorteile                                                                                                                                                                                                                           | Nachteile                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Klar, welches Team spezifisches Feedback/Bugs bearbeiten soll <br/><br/>- Weniger Abhängigkeiten als andere Optionen für kleinere Organisationen <br/><br/>- Einfach, die richtige Produktperson zu externen Meetings mitzubringen, wie z.B. Verkaufsgesprächen | - Verursacht Verwirrung, wenn Features Infrastruktur-/Architekturaktualisierungen erfordern <br/><br/>- Beschränkt Vision/Strategie/Roadmap auf Modul-, Feature- oder Produktebene (nicht sehr kundenorientiert) <br/><br/>- Erfordert viel teamübergreifende Koordination, wenn Produkte eng integriert sind oder niedrigere Abhängigkeiten haben (z.B. Plattform) |



### Customer Journey

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Discovery
DPM(Product Manager)
DEM(Engineering Manager)
DPD(Product Designer)
DFD(Frontend Developers)
DBD(Backend Developers)
end

subgraph Purchase
PPM(Product Manager)
PEM(Engineering Manager)
PPD(Product Designer)
PFD(Frontend Developers)
PBD(Backend Developers)
end

subgraph Authentication
APM(Product Manager)
AEM(Engineering Manager)
APD(Product Designer)
AFD(Frontend Developers)
ABD(Backend Developers)
end

O --> Discovery
O --> Purchase
O --> Authentication

{{< /mermaid >}}
</div>

<figcaption align = "center">Beispiele für die Organisation Ihrer Teams um eine Customer Journey</figcaption>

| Faktor         | Bewertung    |
| -------------- | ------------ |
| Vollständigkeit | ⭐️ ⭐️ ⭐️     |
| Unabhängigkeit | ⭐️ ⭐️        |
| Klarheit       | ⭐️ ⭐️ ⭐️     |
| Balance        | ⭐️ ⭐️        |


In dieser Struktur ist jedes Team/jede Gruppe für eine gesamte Customer Journey oder eine bestimmte Phase dieser Journey verantwortlich. Zum Beispiel kann in einem Kaufablauf ein Produktteam die Benutzerakquisition besitzen, ein anderes das Onboarding, ein weiteres die Discovery und ein anderes den Checkout-Prozess. Diese Methode erfordert, dass jede Phase der Customer Journey genügend Substanz hat. Oft gibt es wichtige Geschäftsmetriken, die den Erfolg oder Misserfolg von Kunden an diesen Knotenpunkten eng widerspiegeln, was eine Delegation von Verantwortlichkeit ermöglicht. Allerdings hilft die Optimierung für spezifische Metriken in Teilen des Gesamtflusses möglicherweise nicht den Gesamtmetriken. Diese Organisationsstruktur erfordert viel Design-Koordination, um ein kohärentes Kundenerlebnis über das/die Produkt(e) hinweg sicherzustellen.


| Vorteile                                                                                                                                                                                                                                                                                                 | Nachteile                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Der Ansatz ermöglicht effiziente Produktskalierung<br/><br/>—das Growth-Team bringt Kunden zum Produkt, während andere Teams die Produkttest- und Engagement-Erlebnisse verbessern. <br/><br/>- Klare Metriken, die Sie jedem Product Manager zuweisen können, wie Konversion von Testversion zu bezahlt oder Retention | - Wenn Teammitglieder ihre zugewiesene Kundenphase nicht verstehen, könnte dies zu unzureichenden Produktfunktionen und damit zu einem schlechten Produkterlebnis führen. <br/><br/>- Erfordert enge Governance, um ein konsistentes und großartiges Benutzererlebnis über alle Customer-Journey-Phasen sicherzustellen |


### Problemdefinition
*Auch bekannt als Ziele, Metriken, Jobs-to-be-Done*

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Acquisition
ACPM(Product Manager)
ACEM(Engineering Manager)
ACPD(Product Designer)
ACFD(Frontend Developers)
ACBD(Backend Developers)
end


subgraph Activation
ACTPM(Product Manager)
ACTEM(Engineering Manager)
ACTPD(Product Designer)
ACTFD(Frontend Developers)
ACTBD(Backend Developers)
end

subgraph Engagement
EPM(Product Manager)
EEM(Engineering Manager)
EPD(Product Designer)
EFD(Frontend Developers)
EBD(Backend Developers)
end

subgraph Conversion
CPM(Product Manager)
CEM(Engineering Manager)
CPD(Product Designer)
CFD(Frontend Developers)
CBD(Backend Developers)
end

O --> Acquisition
O --> Activation
O --> Engagement
O --> Conversion


{{< /mermaid >}}
</div>

<figcaption align = "center">Beispiele für die Organisation Ihrer Teams um eine metrikbasierte Problemdefinition, in diesem Fall eine Teilmenge der AARRR-Metriken</figcaption>

| Faktor         | Bewertung    |
| -------------- | ------------ |
| Vollständigkeit | ⭐️ ⭐️ ⭐️     |
| Unabhängigkeit | ⭐️ ⭐️        |
| Klarheit       | ⭐️ ⭐️        |
| Balance        | ⭐️ ⭐️ ⭐️     |

Bei dieser Methode ist jedes Team und jede Gruppe für eine Problemdefinition verantwortlich, die in ein Ziel, Metriken und Jobs-to-be-Done übersetzt werden kann. Teams können dann jede Funktionalität berühren, von der sie glauben, dass sie dieses Problem lösen wird. Der Hauptvorteil dieses Ansatzes ist, dass Verantwortlichkeit auf einzelne Product Manager übertragen wird. Es kann dazu führen, dass mehrere Teams gleichzeitig an denselben Produktkomponenten arbeiten wollen (oder müssen), und dadurch niemand Ownership für diese Dinge empfindet. Dies ist eine gute Wahl für Unternehmen mit gut etablierten Produkt-Key-Performance-Indicators (KPIs), die Kunden- und Geschäftsergebnisse erfassen. Der Unterschied zur vorherigen Methode besteht darin, dass die Gesamtbelange der verschiedenen Teams nicht unbedingt Teil eines einzigen Benutzerflusses sind.

| Vorteile                                                                                                                                                                                                                           | Nachteile                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Der Kunde steht immer im Zentrum Ihres Produktdenkens <br/><br/>- Einfach, Teams Ziele zuzuweisen und dann den Produkterfolg zu messen <br/><br/>- Einfach, Entscheidungsfindung und Verantwortlichkeit unter Product Managern zu delegieren | - Erfordert einen stabilen Satz von KPIs, der sich nicht oft ändert <br/><br/>- Erfordert teamübergreifende Roadmap-Koordination, da einzelne Teams möglicherweise viele Produktbereiche berühren müssen, um Ziele zu erreichen <br/><br/>- Es braucht Zeit, um in die Köpfe der Kunden zu gelangen (Deshalb ist es wichtig, nicht direkt ins Produktdesign zu springen, sondern sicherzustellen, dass jeder versteht, wie jede Abteilung den Kunden sieht) |


### Benutzer-Personas

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Buyer
BPM(Product Manager)
BEM(Engineering Manager)
BPD(Product Designer)
BFD(Frontend Developers)
BBD(Backend Developers)
end


subgraph Seller
SPM(Product Manager)
SEM(Engineering Manager)
SPD(Product Designer)
SFD(Frontend Developers)
SBD(Backend Developers)
end

subgraph Advertiser
APM(Product Manager)
AEM(Engineering Manager)
APD(Product Designer)
AFD(Frontend Developers)
ABD(Backend Developers)
end

O --> Buyer
O --> Seller
O --> Advertiser


{{< /mermaid >}}
</div>

<figcaption align = "center">Beispiele für die Organisation Ihrer Teams um Personas, jedes Team konzentriert sich auf die Bedürfnisse eines bestimmten Benutzertyps</figcaption>

| Faktor         | Bewertung                                                                     |
| -------------- | ----------------------------------------------------------------------------- |
| Vollständigkeit | ⭐️ ⭐️ ⭐️                                                                      |
| Unabhängigkeit | ⭐️  </br> _proportional zur Unabhängigkeit der Bedürfnisse jeder Persona_      |
| Klarheit       | ⭐️ ⭐️ ⭐️                                                                      |
| Balance        | ⭐️  </br> _abhängig von der Relevanz jeder Persona für das Geschäft_          |


Jedes Team und jede Gruppe wird einer Persona zugewiesen und wird End-to-End für die Bedürfnisse dieser Persona verantwortlich. Üblicherweise verwendet bei Produkten mit mehreren Personas, bei denen die Bedürfnisse der verschiedenen Personas unabhängig sind und nicht miteinander in Konflikt stehen (z.B. Marktplatz mit Käufern und Verkäufern). Diese Organisation konzentriert Teams auf die Bedürfnisse der Benutzer, erfordert aber eine starke Koordination über Teams und Gruppen hinweg, um Doppelarbeit zu vermeiden, von etablierten Designprinzipien abzuweichen oder das Produkt gleichzeitig in verschiedene Richtungen zu treiben.

| Vorteile                                                                                                                                                                                                                                               | Nachteile                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Sehr kundenorientiert, ermutigt Teams, über Kundenbedürfnisse/-ergebnisse nachzudenken <br/><br/>- Vereinfacht die Benutzerforschung, jedes Team kann Interviews nach dem Personentyp ausrichten, mit dem es sprechen möchte, und kann im Laufe der Zeit Experte für diese Persona werden | - Kann das Produkt gleichzeitig in mehrere Richtungen ziehen <br/><br/>- Wenn Personas starke Verbindungen zueinander haben (z.B. zwei Personas, die beide Käufer sind), führt dies zu Konflikten und geringer Unabhängigkeit über Teams und Gruppen |


## Zusammenfassung

![Einsamer Bauer schaut auf Gruppe roter Bauern](/posts/202301-how-to-structure-product-teams/img/lonely.webp)

Es gibt keine einzelne Lösung für alle organisatorischen Probleme über Unternehmen, Branchen usw. hinweg. Die oben genannten Strategien bieten jedoch einige interessante Wege, um große Fallstricke zu vermeiden.

Als Beispiel: Wenn Sie in einem frühen Unternehmensstadium arbeiten, könnte es sinnvoll sein, mit einer *funktionalen* Aufteilung zu beginnen. Teams und Bereiche werden kristallklar sein, und es wird Sie schneller durch die ersten Phasen der Produktvalidierung bringen. Ebenso, wenn Ihr Produkt bereits einen gut definierten Benutzerfluss hat (*z.B. E-Commerce mit Acquisition, Activation, Conversion usw.*), könnte es eine Option sein, jedes Team um eine der *Phasen im Kundenfluss* zu fokussieren. Dies wird es einfacher machen, klare KPIs und Bereiche für jedes Team bereitzustellen, und wird Ihnen eine einfache Skalierung ermöglichen. Wenn Sie mehr als eine unterschiedliche *Persona* haben (denken Sie an Käufer-Verkäufer-Typ), können Sie diese beiden Erlebnisse klar optimieren.

Alle diese Strategien erlauben es Ihnen, sich an Ihren Kontext anzupassen und die Struktur Ihres Teams weiterzuentwickeln, wenn sich dieser Kontext ändert (*denn er WIRD sich ändern*). Es gibt keine eindeutigen Antworten, und die obigen *Vorschläge* sind lediglich Beispiele dafür, wie Sie einige der hier präsentierten Strategien nutzen können.

**Das Einzige, was Sie nicht tun sollten**, ist zu versuchen, einige dieser Frameworks innerhalb derselben Struktur zu mischen. Dies wird Verwirrung, unklare Abhängigkeiten und Rauschen in Ihrer Organisation erzeugen.

Am Ende, unabhängig davon, welche Option Sie wählen, sollte Ihr Ziel bei der Skalierung immer sein, sicherzustellen, dass Ihre Teams nicht ihren **Kundenfokus** verlieren, da dies zu a) unzufriedenen Kunden und b) Misserfolg führen wird.

> Jede Organisation, die ein System entwirft (im weitesten Sinne), wird ein Design produzieren, dessen Struktur eine Kopie der Kommunikationsstruktur der Organisation ist.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

[^1]:	Originaler Wortlaut für *Conways Gesetz*, eingeführt 1967, von [Wikipedia][1].


[1]:	https://en.wikipedia.org/wiki/Conway%27s_law
