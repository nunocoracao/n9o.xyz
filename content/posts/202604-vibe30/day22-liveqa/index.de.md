---
title: "30 Days of Vibe Coding - Tag 22 - LiveQ&A"
description: "Ein Echtzeit-Q&A-Board für Events, AMAs und Vorträge, mit Live-Upvoting und Host-Steuerung, gebaut mit Firebase Firestore."
summary: "Ein Echtzeit-Q&A-Board für Events, AMAs und Vorträge, mit Live-Upvoting und Host-Steuerung, gebaut mit Firebase Firestore."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-22", "nextjs", "firebase", "typescript", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 22
seriesOpened: false
date: 2026-04-27
draft: false
#type: "hidden"
---

Tag 22. Ich war auf genug Events, bei denen das Q&A ein Chaos war. Leute schreien übereinander, die gleiche Frage wird zweimal gestellt, die besten Fragen gehen unter den lautesten Stimmen unter. Zeit, etwas Besseres zu bauen.

## Der Prompt

> "Baue ein Live-Q&A-Board, bei dem ein Host eine Session erstellt, das Publikum Fragen in Echtzeit einreicht und hochvotet, und der Host Fragen hervorheben, beantworten, verwerfen oder die Session schließen kann. Füge ein Teilen-Modal mit QR-Code hinzu."

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day22-liveqa.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

Dieses Projekt durchlief 7 [Watchfire](https://watchfire.io)-Aufgaben, aufgebaut von der Datenbankschicht bis zum finalen Feinschliff:

1. **Firebase Firestore Setup.** Die Datenschicht. Sessions- und Fragen-Collections, anonyme Authentifizierung damit Nutzer ohne Kontoerstellung einsteigen können, und Sicherheitsregeln um alles abzusichern.
2. **Session-Erstellung.** Ein Host füllt Titel und Beschreibung aus, klickt auf Erstellen, und bekommt eine einzigartige Session-Seite. Einfaches Formular, nichts Besonderes.
3. **Fragen einreichen.** Publikumsmitglieder landen auf der Session-Seite und reichen Fragen ein. 280-Zeichen-Limit um den Fokus zu halten. Fragen erscheinen in Echtzeit für alle in der Session.
4. **Echtzeit-Upvoting.** Eine Stimme pro Nutzer pro Frage, serverseitig durchgesetzt. Stimmenzahlen aktualisieren sich live bei allen verbundenen Clients. Sortierung nach meisten Stimmen oder neueste.
5. **Host-Steuerung.** Der Host bekommt extra Buttons bei jeder Frage: hervorheben, als beantwortet markieren, verwerfen. Hervorgehobene Fragen werden in ein dediziertes Panel auf der rechten Bildschirmseite befördert. Der Host kann die Session auch komplett schließen.
6. **Teilen-Modal mit QR-Code.** Ein Teilen-Button öffnet ein Modal mit dem Session-Link, einem Kopieren-Button und einem QR-Code generiert mit qrcode.react. Handy auf den Bildschirm richten und du bist drin.
7. **UI-Feinschliff.** Layout aufräumen, das Zwei-Spalten-Design verfeinern, sicherstellen dass das Panel für hervorgehobene Fragen auf Desktop und Mobile gut aussieht.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Dabei Rauskam

![Landing Page](images/screenshot-01.png)

**Saubere Landing Page.** Erstelle eine Session oder füge einen bestehenden Session-Code ein um einer beizutreten. Anonyme Authentifizierung passiert im Hintergrund, also wählen Nutzer einfach einen Anzeigenamen und los geht's.

![Anzeigename-Abfrage](images/screenshot-02.png)

**Keine Registrierungs-Hürde.** Der erste Besuch löst eine Anzeigename-Abfrage aus. Das war's. Die anonyme Authentifizierung von Firebase erledigt den Rest. Keine E-Mails, keine Passwörter, keine OAuth-Flows. Für ein Live-Event-Tool ist das genau richtig. Du willst nicht, dass Leute mit Kontoerstellung herumfummeln, wenn der Redner gerade gesagt hat "scannt den QR-Code."

![Session-Erstellung](images/screenshot-03.png)

**Die Session-Erstellung sind zwei Felder.** Titel und Beschreibung. Klick auf den Button und du hostest ein Live-Q&A. Die Einfachheit hier ist wichtig, weil der Host das wahrscheinlich fünf Minuten vor Beginn seines Vortrags einrichtet.

![Teilen-Modal mit QR-Code](images/screenshot-04.png)

**Das Teilen-Modal erfüllt seinen Zweck.** Session-Link mit Kopieren-Button und QR-Code direkt da. Das ist der Workflow den ich mir vorgestellt hatte: Host erstellt die Session, projiziert dieses Modal auf die große Leinwand, das Publikum scannt den Code, und die Fragen fließen rein.

![Publikumsansicht mit Fragen](images/screenshot-05.png)

**Die Publikumsansicht bleibt fokussiert.** Reiche eine Frage ein, sieh andere Fragen, vote die hoch die du beantwortet haben willst. Die Eingabebox ist oben, die Fragenliste darunter, standardmäßig nach meisten Stimmen sortiert. Alles aktualisiert sich in Echtzeit über Firestore-Listener.

![Host-Ansicht mit Steuerung](images/screenshot-06.png)

**Der Host bekommt Moderationstools.** Jede Frage zeigt Buttons zum Hervorheben, als beantwortet Markieren und Verwerfen. Nur der Host sieht diese. Es gibt auch einen Session-Schließen-Button im Header der alles sperrt. Die rechte Spalte zeigt hervorgehobene Fragen, oder eine Platzhalternachricht wenn noch keine hervorgehoben sind.

![Vollständige Host-Ansicht](images/screenshot-07.png)

**Das Hervorheben funktioniert gut.** Wenn der Host eine Frage hervorhebt, wird sie in das rechte Panel befördert, mit dem Fragentext und dem Autorennamen prominent angezeigt. Die Frage bekommt auch einen visuellen Indikator in der Hauptliste, damit alle sehen dass sie aufgerufen wurde. Auf Mobile sitzt dieser hervorgehobene Bereich oben auf der Seite statt in einer Seitenspalte.

![Hervorgehobene Frage](images/screenshot-08.png)

![Upvoting in Aktion](images/screenshot-09.png)

**Das Upvoting schafft einen natürlichen Filter.** Die besten Fragen steigen nach oben. Der Host muss nicht alles durchlesen. Das Publikum übernimmt die Kuratierung für dich.

## Die Bug-Reports

Dieses war überraschend sauber. Die Echtzeit-Listener von Firestore haben die kniffligen Teile übernommen, also erschienen Fragen und Stimmen sofort ohne jegliches Polling oder manuelle Refresh-Logik. Der anonyme Authentifizierungs-Flow war nahtlos. Keine Bugs bei diesem Projekt gemeldet.

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day22-liveqa" showThumbnail=true >}}

**[Probier LiveQ&A aus](https://vibe30-day22-liveqa.vercel.app)**

Erstelle eine Session und teile den Link. Kein Konto nötig.

## Fazit Tag 22

Viertes Firebase-Projekt. An diesem Punkt schreibt sich das Muster von selbst: anonyme Authentifizierung, Firestore-Listener, Echtzeit-Synchronisierung. Ich könnte wahrscheinlich eins davon im Schlaf bauen. Der Tech-Stack ist nicht mehr die Story.

Was an diesem hier interessant ist, ist die Moderationsschicht. Die meisten Q&A-Tools sind nur Fragenlisten mit Stimmenzahlen. Die Hervorheben-Funktion ändert das. Wenn der Host eine Frage hervorhebt, wird sie auf jeden Bildschirm im Raum übertragen. Das Publikum sieht was gerade behandelt wird. Der Host steuert den Ablauf ohne "nächste Frage bitte" in ein Mikrofon zu rufen. Das ist ein Produkt-Insight, kein technischer.

Würde ich das bei einem echten Vortrag nutzen? Ja. Ich war auf genug Konferenzen wo das Q&A darin ausartet, dass wer auch immer zuerst das Mikrofon schnappt eine fünfminütige "Frage" stellt, die eigentlich ein Kommentar ist. Das löst das Problem. Das Publikum stimmt ab, die besten Fragen steigen auf, der Host wählt was er ansprechen will. Die lauteste Stimme im Raum ist nicht mehr der entscheidende Faktor.

Der Verwerfen-Button ist leise die wichtigste Funktion. Off-Topic-Fragen, Duplikate, jemand der versucht witzig zu sein. Der Host entfernt sie und niemand merkt es. Kein peinlicher "lasst uns weitermachen"-Moment. Sie verschwinden einfach.

---

*Das ist Tag 22 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir während ich 30 Projekte in 30 Tagen mit KI-unterstützter Programmierung shippe.*
