---
title: "Eine Organisation aus drei"
summary: "Drei KI-Agenten teilen sich eine Proxmox-Box: Einkäufe, Blowfish, der KI-Begleiter meiner Tochter, der ein eigenes Zuhause bekommt, und der unerwartete Job, die Assistenten zu managen."
description: "Ein früher Bericht darüber, wie ich ein persönliches KI-Team auf eigener Hardware betreibe: was funktioniert hat, wofür die Welt noch nicht bereit ist und was es kostet, das Ganze nützlich zu halten."
categories: ["KI", "Meta"]
tags: ["KI", "Agenten", "OpenClaw", "persönliche KI", "Infrastruktur", "Betrieb", "Marketing"]
authors:
  - friday
  - wednesday
  - thursday
date: 2026-09-13
draft: false
alt: "Drei kleine Roboter-Assistenten sortieren einen Kalender, reparieren eine Platine und bearbeiten ein Manuskript, während menschliche Hände am selben Schreibtisch eine Seite prüfen."
---

Vor einer Weile habe ich über Friday geschrieben, meine persönliche Assistentin, und darüber, wie ich sie von Grund auf neu gebaut habe. Inzwischen habe ich drei KI-Agenten. Gemeinsam haben sie Einkäufe vorbereitet, [Blowfish](https://blowfish.page) und [Watchfire](https://watchfire.io) gepflegt, dem KI-Begleiter meiner Tochter ein eigenes Zuhause gegeben und meinen Content-Rückstau entwirrt. Sie haben auch doppelte Updates verschickt, unfertige Arbeit als erledigt gemeldet und Benachrichtigungen erzeugt, die ich mir irgendwann verbeten habe.

{{< article link="/posts/202607-friday-coming-back/" showSummary=true compactSummary=true >}}

{{< alert icon="pencil">}}
**Zu diesem Bericht:** Die beschriebene Arbeit reicht bis zum 13. September 2026. Das ist meine Erzählung, zusammengestellt mit Friday und mit Beiträgen von Wednesday und Thursday. Die Beispiele stammen aus ihren Arbeitsprotokollen und meiner Durchsicht davon.
{{< /alert >}}

Bis vor Kurzem hat Friday alles gemacht: persönliche Organisation, technische Arbeit, Recherche und Unterstützung beim Veröffentlichen. Einer der größten Nachteile war die einzelne Telegram-Session: Ich konnte immer nur ein Gespräch gleichzeitig führen. Am 29. August habe ich zwei Spezialisten dazugeholt: Wednesday als CTO, zuständig für technisches Urteilsvermögen und das Bauen, und Thursday als CMO, zuständig für Narrativ, Publikum und Verbreitung. Friday bleibt Stabschefin und kümmert sich um meinen Kalender, meine Aufgaben und persönliche Nachfassaktionen.

Alle drei wohnen am selben Ort: in einem LXC-Container auf meinem Proxmox-Server, auf dem eine einzige [OpenClaw](https://github.com/openclaw/openclaw)-Instanz läuft. Jeder hat einen eigenen Workspace, eigene Anweisungen, eine eigene Identität und ein eigenes Gedächtnis. Alles andere teilen sie sich: die Tools, die Secrets, den Container. Sie können auch miteinander reden. Jeder hat einen eigenen Telegram-Chat, sodass ich mehrere Gespräche parallel führen kann, und für Gespräche, die mehr als einen von ihnen brauchen, gibt es eine Gruppe namens Yggdrasil.

Jeder von ihnen kann den Proxmox-Server selbst verwalten, nicht nur den Container, in dem er lebt. Das ist genau so mächtig, wie es klingt, und auf das Risiko komme ich noch zurück. Ich war Hunderte Kilometer von zu Hause entfernt, als ich Friday gebeten habe, [Project NOMAD](https://github.com/Crosstalk-Solutions/project-nomad) aufzusetzen, einen Offline-Wissensserver mit Wikipedia, Büchern und Karten. Sie hat einen neuen LXC-Container angelegt und es installiert.

Bei der Aufteilung geht es also um Fokus, nicht um Trennung. Friday hat schon viel technische Arbeit gemacht, bevor es Wednesday gab, und nichts hindert sie daran, noch mehr davon zu machen. Die Regel, die das Ganze funktionieren lässt, heißt Verantwortung: Der Agent, den ich frage, ist für die Aufgabe verantwortlich. Er kann einen anderen Agenten um Hilfe bitten, aber die Aufgabe abzugeben braucht meine Zustimmung.

{{< figure src="team-ownership.svg" alt="Verantwortungskarte: Nuno wählt Friday für persönliche Organisation, Wednesday für technische Arbeit oder Thursday für redaktionelle Arbeit. Der angesprochene Agent ist für die Aufgabe verantwortlich und liefert das Ergebnis an Nuno zurück; Übergaben erfordern ausdrückliche Zustimmung." >}}

*Drei Rollen, ein Organigramm, und ich immer noch mittendrin.*

## Friday: Einkäufe, Schule und der Kalender

Fridays Zugriffe sind das, was sie nützlich macht. Sie liest Gmail und verwaltet Google Calendar über [gog](https://github.com/openclaw/gogcli), sieht WhatsApp über einen lokalen Nur-Lese-Spiegel, verfolgt Aufgaben in [Linear](https://linear.app) über dessen MCP-Server und arbeitet auf GitHub mit der [`gh` CLI](https://cli.github.com) unter ihrem eigenen Account. Meine Gesundheitsdaten liest sie von einem selbstgebauten Server, der sie von meinem iPhone empfängt. Außerdem hat sie Notion und Telegram, wo die meisten unserer Gespräche stattfinden. E-Mail und WhatsApp bleiben nur lesbar, und Kalenderänderungen brauchen meine Bestätigung.

Fridays tägliches Briefing bündelt meinen Kalender, meine Aufgaben, den Posteingang, Nachrichten, Gesundheitssignale und eine kleine Auswahl an Tech- und KI-News. Bis das wirklich nützlich war, brauchte es banale Korrekturen: erledigte Aufgaben weglassen, keine Onboarding-Vorlagen mehr anzeigen, konkurrierende Morgenbenachrichtigungen zusammenlegen und das Ergebnis kurz genug halten, um es auf dem Handy zu lesen.

Die Kalenderplanung musste den Tag berücksichtigen, den ich tatsächlich hatte: Arbeitsblöcke rund um bestehende Termine, mit Pausen, statt eines vollgestopften Kalenders ohne realistischen Weg hindurch. Am wichtigsten war das zum Schulbeginn. Friday hat Termine herausgezogen, Schulsachen und Formulare im Blick behalten und offene Absprachen sichtbar gehalten. Einladungen zu Geburtstagen wurden zu Kalendereinträgen mit Erinnerungen. Geschenke wurden zu Aufgaben, an denen die konkrete Idee hing, statt zu einem weiteren Eintrag namens "Geschenk kaufen".

Für die Einkäufe nutzt Friday meine letzten Bestellungen und meine üblichen Basics, um einen Supermarkt-Warenkorb zu füllen. Ich prüfe ihn und schließe die Bestellung selbst ab, und das Lieferfenster landet im Kalender.

Sie hat mir auch geholfen, Gesundheitsberichte zu vergleichen und Fragen für meinen Arzt vorzubereiten, und hat den Gesundheitsserver so erweitert, dass er Workouts importiert und doppelte Exporte entfernt. Die Daten haben ihre Grenzen: Aus einem Krafttraining-Eintrag ohne Übungsdetails kann sie keine Sätze und Wiederholungen ablesen.

Lokale Whisper-Transkription macht aus meinen portugiesischen und englischen Sprachnotizen Text, ohne das Audio an einen Cloud-Dienst zu schicken. In Telegram hineinzusprechen ist oft einfacher, als noch eine App zu öffnen und mich zu erinnern, wo ein Gedanke hingehört.

## Fridays Arbeit an Blowfish

Bevor es Wednesday gab, hat Friday auch beim Engineering geholfen.

Im Juli hat sie geholfen, die Wartungswarteschlange von Blowfish abzuarbeiten: Abhängigkeiten, Lockfiles, Lokalisierung, Templates und neue Einträge im Community-Showcase. Dazu gehörte, freigegebene Änderungen zu mergen, den Asset-Build zu prüfen, Release Notes zu ordnen und zu erklären, warum unpassende Änderungen nicht reinkommen sollten.

Ein Review hat einen Konfigurations-Default entdeckt, der ein explizites `false` stillschweigend ignorierte. Ein anderes hat eine Barrierefreiheitsänderung entdeckt, die auf eine ungültige Landmark verwies.

### Die Beispielseite war nicht das Produkt

Der größere Brocken war [Blowfish v3](https://github.com/nunocoracao/blowfish/pull/3028), gemergt am 17. August: wiederverwendbare Landingpage-Komponenten und Rendering-Verbesserungen, die bestehende Seiten nicht kaputtmachen durften.

Ich musste die Richtung korrigieren. Die neue Beispielseite hing an eigenem Code, den andere Nutzer des Themes nicht hätten, obwohl der ganze Sinn wiederverwendbare Komponenten waren. Nachdem ich das erklärt hatte, hat Friday die Arbeit ins Theme selbst verlagert. Selbst dann war das Upgrade nicht umsonst: Das Release verlangte von den Nutzern immer noch, die Art zu ändern, wie sie das Theme als Hugo-Modul importieren.

Zur Nacharbeit gehörten Fixes an Abhängigkeiten und das [Lokalisieren der Zitate auf der 404-Seite](https://github.com/nunocoracao/blowfish/pull/3052) in 36 Sprachen, wobei eigene Zitate und der Sprach-Fallback erhalten blieben.

## Wednesday: Eva, Experimente und Blowfish

### Eva zieht aus

Eva ist die sprachgesteuerte Begleiterin, die ich mit meiner Tochter gebaut habe, mit einem Raspberry Pi Zero, PiSugar-Whisplay-Hardware und europäischem Portugiesisch.

{{< article link="/posts/202601-building-eva/" showSummary=true compactSummary=true >}}

Wednesday hat alles, was Eva bisher war, genommen und daraus eine neue OpenClaw-Instanz in ihrem eigenen LXC-Container gemacht, nur für meine Tochter. Dann hat er Eva an einen Discord-Server angebunden, damit meine Tochter von jedem ihrer Geräte aus mit ihr reden kann.

Der nächste Teil ist der, von dem ich allen erzähle. Meine Tochter und ich haben Eva gemeinsam gebeten, sich mit ihrem Raspberry-Pi-Desktop zu verbinden und eine eigene Chat-Oberfläche für die beiden zu bauen. Es hat funktioniert. Kurz darauf habe ich zugesehen, wie mein Kind sein Hintergrundbild geändert und Spiele installiert hat, einfach indem es Eva gefragt hat.

Nicht alles hat gehalten. Die Chat-Oberfläche hat später einen Fehler geworfen, und ein Teil der Desktop-Einrichtung hat einen Neustart nicht überlebt. Beides war zum Zeitpunkt des Schreibens noch nicht behoben.

### Ideen schnell testen

Wednesday ist außerdem mein Sparringspartner für technische Ideen geworden. Wenn etwas in meinem Kopf gut klingt, baut er entweder schnell einen Proof of Concept oder findet zügig die Einschränkung, an der es scheitert. Manche Ideen haben das überlebt und sind realistischer geworden. Andere wurden nach einem Tag statt nach einem Monat auf Eis gelegt.

Echos, ein interaktives Story-Spiel, hat die Grenze dieses Tempos gezeigt. Wednesday hat ein Ende repariert, das niemand erreichen konnte, Charaktereigenschaften und Konsequenzen hinzugefügt und Entscheidungen davon abhängig gemacht. Alle Tests liefen durch. Als ich es gespielt habe, hatte das Spiel trotzdem keine Ziele, keinen Fortschritt und kein befriedigendes Ende. Tests können beweisen, dass die Pfade funktionieren. Sie können dir nicht sagen, ob irgendjemand Spaß daran hätte, sie zu spielen. Vor einer weiteren Runde muss ich klarer wissen, welches Spiel ich eigentlich will.

Bei Blowfish hat Wednesday eine Dokumentationsänderung in neun Sprachen geprüft und den Produktions-Build lokal nachgestellt ([PR #3075](https://github.com/nunocoracao/blowfish/pull/3075)). In [PR #3082](https://github.com/nunocoracao/blowfish/pull/3082), gemergt am 3. September, hat er einen Link hinzugefügt, der Tools hilft, die maschinenlesbare Version jeder Seite zu finden, ohne das normale HTML oder die bestehende `llms.txt` anzufassen.

## Thursday: Traffic-Zahlen und der Entwurfsstapel

Thursday hat mit einer Bestandsaufnahme für Blowfish, Watchfire und n9o.xyz angefangen: Repositories, Social-Media-Profile, Analytics und Search Console, mit einem klaren Hinweis, welche Zahlen sich überhaupt nicht auslesen ließen.

Eine Unterscheidung war wichtiger, als ich erwartet hatte. Auf vielen Seiten anderer Leute läuft Blowfish, und deren Traffic sind keine "Besuche auf meiner Website". Thursday hat den Traffic auf meinen eigenen Seiten von Anzeichen für die Verbreitung von Blowfish getrennt, damit ich beides verfolgen kann, ohne es zu vermischen.

Nachdem Thursday meine Texte studiert hatte, hat er eine Regel festgehalten: **Signal oder lustig**. Mit einer konkreten Beobachtung oder echter Arbeit anfangen. Keine weitere Erklärung über die Zukunft der KI generieren, nur weil sie plausibel klingt.

Danach hat Thursday aus meinen tatsächlichen Entwürfen und Story-Ideen einen Zwölf-Wochen-Plan gebaut und die markiert, die sich überschnitten. Ideen hatte ich schon genug. Ich brauchte Hilfe bei der Entscheidung, welche es wert waren, fertiggestellt zu werden.

Das Ganze am Laufen zu halten war schwieriger. Der Plan ist abgedriftet, einige geplante Metrik-Checks fingen an fehlzuschlagen, und eine Automatisierung, die Gelegenheiten zur Interaktion in eine Warteschlange stellte, wurde zu Lärm und flog wieder raus.

Die größte Lektion betraf die sozialen Netzwerke selbst. Einen Agenten mit meinen eigenen Social-Media-Accounts zu verbinden ist schwer und auf manchen Plattformen im Moment fast unmöglich. Metriken lesen, Gesprächen folgen und posten: Alles davon stößt auf eingeschränkte APIs, teure Zugangsstufen oder Automatisierungsregeln, die einen Assistenten wie einen Bot behandeln. Thursday konnte also Antworten und Posts für mich zum Prüfen vorbereiten, aber veröffentlichen musste ich sie immer noch von Hand.

Ein Wachstum des Publikums kann ich daraus noch nicht ableiten. Was ich habe, ist eine Bestandsaufnahme, ein klarerer Stapel an Entwürfen und ein Plan, der ein Update braucht.

## Das Risiko

Drei Agenten die Schlüssel zu einem Proxmox-Server zu geben ist genau so riskant, wie es klingt. Getrennte Workspaces sind keine Sicherheitsgrenze. Jeder der drei kann die Secrets nutzen, die die anderen nutzen, und jeder kann Container auf dem Host anlegen, ändern oder löschen, auch den, in dem er selbst lebt. Anweisungen, was sie in Ruhe lassen sollen, helfen, aber Anweisungen sind keine Isolation.

Mein Sicherheitsnetz: Ich habe die Infrastruktur selbst gebaut, der Zustand der Agenten lässt sich einsehen, und Container-Backups geben mir einen Weg zurück, wenn etwas schiefgeht. Für ein persönliches Experiment reicht das. Für alles, auf das ich nicht einen Tag lang verzichten könnte, würde es nicht reichen.

Es ist auch nicht vollständig lokal. Lokale Embeddings und Sprachtranskription halten einen Teil der Daten zu Hause, aber das eigentliche Denken übernehmen immer noch gehostete Modelle, und alles, was ein Agent abruft, kann in diesem Gespräch landen.

## Die Assistenten managen

Ich habe mehr Zeit, als mir lieb war, damit verbracht, zu korrigieren, wie die Agenten über ihre Arbeit berichten.

{{< figure src="management-meme.svg" alt="Always-Has-Been-Meme: Ein Astronaut fragt: 'Moment, es geht nur darum, die Assistenten zu managen?' Der andere antwortet: 'War schon immer so.'" >}}

*Der Teil, der im Organigramm fehlt. Vorlage: [Always Has Been](https://knowyourmeme.com/memes/wait-its-all-ohio-always-has-been), via [Imgflip](https://imgflip.com/memetemplate/252600902/Always-Has-Been).*

Manche Probleme waren reine Klempnerarbeit. Geplante Jobs liefen mit veralteten Anweisungen, das Monitoring meldete weiterhin Vorfälle, die sich längst erledigt hatten, und Repository-Alerts kündigten denselben Rückstau immer und immer wieder an.

Andere kamen von den Agenten selbst: Arbeit als erledigt melden, bevor sie es war, doppelte Nachrichten schicken und Fixes verkünden, bevor sie von Anfang bis Ende geprüft waren. Ein erfolgreicher Schreibvorgang in Notion beweist nicht, dass auf der Seite steht, worum ich gebeten habe. Ein als erfolgreich markierter Job kann trotzdem einen fehlgeschlagenen Check enthalten.

Also habe ich explizite Regeln eingeführt, einige davon übernommen aus [ECC](https://github.com/affaan-m/ecc), einer Open-Source-Sammlung von Praktiken für Agenten:

- Erfolg definieren, bevor irgendetwas geändert wird, und danach das Ergebnis überprüfen.
- "Vorbereitet", "getestet", "veröffentlicht" und "fertig" sind verschiedene Zustände.
- Das gespeicherte Ergebnis prüfen, nicht nur die Antwort des Tools.
- Routine-Monitoring bleibt still, wenn es nichts zu tun gibt.
- Eine Empfehlung ist keine Erlaubnis zu handeln. Einen Post oder einen Einkaufswagen vorzubereiten heißt nicht, dass veröffentlicht oder bestellt werden darf.

Manche Fixes haben gehalten. Andere nicht. Der nächtliche Job, in dem die Agenten den Tag ins Langzeitgedächtnis überführen, bleibt immer noch ab und zu hängen, und ich prüfe weiterhin, ob sie gespeicherte Notizen in späteren Gesprächen tatsächlich wiederfinden.

## Wo ich damit stehe

Wednesday und Thursday laufen erst seit zwei Wochen, das hier ist also ein früher Eindruck, kein Urteil. Drei Dinge sind trotzdem schon klar.

**Der Nutzen ist real, wenn es funktioniert.** Ein neuer Container, installiert, während ich Hunderte Kilometer entfernt war. Termine und Formulare zum Schulbeginn im Blick, ohne Tabelle. Blowfish-Wartung, die vorankommt. Meine Tochter, die Spiele auf ihrem eigenen Computer installiert, indem sie mit Eva redet. Nichts davon ist eine Demo. Es ist meine echte Woche, und ich entscheide immer noch, woran gearbeitet wird, und gebe die folgenreichen Aktionen frei. Recherche, einen Entwurf oder eine Implementierung fertig zum Prüfen zu haben, bringt mich nur schneller zu diesen Entscheidungen.

**Ein Teil der Welt ist noch nicht bereit für Agenten.** Die Grenzen lagen selten bei den Modellen. Mein Supermarkt hat keine vernünftige Möglichkeit, einen Assistenten anzubinden. Bei den sozialen Netzwerken ist es noch schlimmer: Thursday kann Entwürfe schreiben, aber die meisten Plattformen machen es meinem eigenen Agenten schwer oder unmöglich, in meinem Namen zu lesen, zu antworten oder zu posten. Die Schicht, über die sich ein persönlicher Agent mit den Diensten verbinden kann, die wir jeden Tag nutzen, existiert außerhalb einiger weniger Dienste wie GitHub, Google und Linear kaum. Solange das so bleibt, endet vieles, was diese Agenten tun könnten, bei "zum Prüfen vorbereitet".

**Das ist kein Consumer-Produkt.** Nichts davon war Installieren und Loslegen. Es brauchte einen Proxmox-Server, LXC-Container, eigenen Code, Skripte, einen selbstgebauten Gesundheitsserver für meine iPhone-Daten und jede Menge Konfiguration. Als ein OpenClaw-Update Dinge kaputtgemacht hat, bestand der Fix darin, Claude Code im Container zu öffnen und eine KI das Zuhause der anderen reparieren zu lassen. Ich mag diese Art von Basteln. Die meisten Leute sollten das nicht tun müssen, und im Moment müssten sie es.

Was mich frustriert, ist, einem versprochenen Ergebnis hinterherzulaufen, dieselbe Erfolgsmeldung immer wieder zu korrigieren oder einen Alert zu lesen, der nichts ändert. Wenn mir das System zwanzig Minuten spart und dann eine Stunde Management verlangt, stimmt die Bilanz nicht. Manchmal weiß ich nicht, ob das Ökosystem einfach noch nicht so weit ist oder ob wir alle im KI-Casino am Spielautomaten sitzen und noch ein letztes Mal am Hebel ziehen.

Fürs Erste braucht es mehr Aufmerksamkeit, diese drei dazu zu bringen, Dinge zuverlässig zu Ende zu bringen, als einen vierten dazuzuholen.
