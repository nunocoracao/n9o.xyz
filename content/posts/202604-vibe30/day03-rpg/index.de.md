---
title: "30 Days of Vibe Coding - Tag 3 - RPG"
description: "Ein rundenbasiertes RPG mit isometrischer Grafik, Charaktererstellung, Kampfsystem, Quests und einem Speichersystem – alles im Browser."
summary: "Ein rundenbasiertes RPG mit isometrischer Grafik, Charaktererstellung, Kampfsystem, Quests und einem Speichersystem – alles im Browser."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-03", "typescript", "pixi.js", "game", "rpg"]
series: ["30 Days of Vibe Coding"]
series_order: 3
seriesOpened: false
date: 2026-04-08
draft: false
#type: "hidden"
---

Tag 3. Ich habe ein vollständiges RPG verlangt. Im Browser. An einem Tag.

## Der Prompt

> „Ich möchte ein browserbasiertes RPG mit isometrischer Grafik, Charakteranpassung, rundenbasiertem Kampf, Quests und einem Speicher-/Ladesystem erstellen."

Das ist eine absurde Menge, die man in einem einzigen Prompt verlangen kann. Ein RPG ist kein kleines Spiel. Es gibt Charakterklassen, Inventarsysteme, Dialogbäume, Quest-Tracking, Kampfmechaniken, Kartenerkundung. Jedes dieser Elemente wäre für sich allein schon ein eigenes Projekt. Ich wollte sehen, was passiert, wenn ich all das auf einmal verlange.

## Wie es gebaut wurde

[Watchfire](https://watchfire.io) nahm den Prompt und teilte ihn in Aufgaben auf. Die package.json trägt in ihrem Namen noch die Handschrift der ersten Aufgabe: `watchfire-0000-project-setup---initialize-nex`. Anhand der Projektstruktur ist zu erkennen, dass die Arbeit auf die Kernsysteme aufgeteilt wurde: Projektsetup mit Next.js und Pixi.js, Typdefinitionen, Game-State-Management, Kartendaten für drei Zonen (Stadt, Wald, Verlies), Kampf-Engine, Gegenstands- und Gegnerdatenbanken, Dialogsystem, Quest-Datenbank, isometrisches Rendering und darüber alle UI-Komponenten.

Die Komponentenliste allein zeigt, wie viel gebaut wurde: CharacterCreation, CombatUI, DialogueBox, EquipmentPanel, GameHUD, GameMenu, Inventory, IsometricWorld, ItemTooltip, MainMenu, QuestLog, SaveLoadMenu, SettingsPanel, VictoryScreen. Das sind 14 React-Komponenten plus die darunter liegende Spiellogikschicht.

Ich saß nicht dabei und steuerte jeden Schritt. Ich kam zu einem fertigen, spielbaren Spiel zurück und fing an zu spielen.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was ich bekam

Dieses Projekt hat mich wirklich überrascht.

![Titelbildschirm mit Realm of Shadows-Branding](images/screenshot-01.png)

**Es hat sich selbst einen Namen gegeben.** „Realm of Shadows: An Isometric Adventure." Ich habe keinen Namen vorgegeben. Es hat sich einen ausgedacht, einen Titelbildschirm mit stilisiertem Text gestaltet und eine Einstellungsoption im Hauptmenü hinzugefügt. Das dunkle Marine-Blau und Gold-Farbschema zieht sich durch das gesamte Spiel.

![Charaktererstellung – Namenseingabe](images/screenshot-02.png)

**Die Charaktererstellung ist ein mehrstufiger Assistent.** Man gibt einen Namen ein, wählt eine Klasse und überprüft die Werte vor dem Start. Es führt durch drei Bildschirme mit Fortschrittspunkten oben. Jede Klasse (Warrior, Mage, Rogue) hat unterschiedliche Werteverteilungen und Startausrüstung.

![Klassenauswahlbildschirm](images/screenshot-04.png)

Die Klassenauswahl-Karten zeigen Werteaufschlüsselungen für jede Option. Der Warrior bekommt viel HP und Stärke. Der Mage bekommt hohe Magie und Mana. Der Rogue hat ausgeglichene Werte mit hoher Geschwindigkeit. Es gibt kleine Icons für jede Klasse und farbige Werteleisten. Das ist polierte UI-Arbeit.

![Charakterzusammenfassung vor dem Start](images/screenshot-05.png)

**Der Zusammenfassungsbildschirm zeigt die Startausrüstung.** Ein Mage namens John startet mit einem Holzstab, einem Tuchgewand, einer Lederhosse und abgenutzten Stiefeln. Alle Grundwerte sind vor dem Bestätigen sichtbar. Dieses Detail lässt ein Spiel fertig wirken.

![Isometrische Stadtansicht](images/screenshot-06.png)

**Die isometrische Welt funktioniert wirklich.** Es gibt eine Stadt mit Gebäuden, Wegen und umherlaufenden NPCs. Der Charakter hat ein HUD oben links mit HP, MP und Level. Oben rechts gibt es eine Minikarte, die „Willowbrook" als aktuellen Ort anzeigt. Bewegt wird sich durch Klicken auf Kacheln oder WASD.

![NPC-Dialog mit Elder Mira](images/screenshot-08.png)

**NPCs haben Dialogbäume.** Elder Mira begrüßt einen: „Ah, du bist endlich erwacht! Ich bin Elder Mira, Hüterin von Willowbrook Village." Das Dialogfeld erscheint am unteren Bildschirmrand, der NPC-Name ist in Gold hervorgehoben. Man klickt oder drückt Enter, um weiterzumachen.

![Verzweigte Dialogoptionen](images/screenshot-10.png)

**Die Dialoge verzweigen sich.** Elder Mira fragt, ob man ihr gegen dunkle Kreaturen im Wald helfen wird. Man hat zwei Möglichkeiten: „Ich werde euch helfen" oder „Erzählt mir mehr über diese Kreaturen." Das ist kein bloßer Fülltext. Es ist mit dem Quest-System verbunden.

![Quest-Log mit aktivem Quest](images/screenshot-13.png)

**Es gibt ein vollständiges Quest-Log.** Es verfolgt aktive und abgeschlossene Quests mit Registerkarten. „A New Beginning" ist die Hauptquest, als Hauptstory gekennzeichnet. Es zeigt Ziele („Sprich mit Elder Mira"), Belohnungen (Gold und XP) und Quest-Beschreibungen. Das UI hat dieselbe Gold-auf-Dunkel-Optik wie alles andere.

![Pausemenü](images/screenshot-12.png)

**Das Pausemenü ist umfassend.** Fortsetzen, Inventar, Charakter, Quest-Log, Spiel speichern, Einstellungen, Hauptmenü. Oben werden Charaktername, Klasse, Level, HP und MP angezeigt. Das ist kein schneller Hack. Jemand hat sich Gedanken über die Informationshierarchie gemacht.

![Rundenbasierter Kampf](images/screenshot-14.png)

**Der Kampf ist rundenbasiert mit echten Optionen.** Man kämpft gegen einen Green Slime. Beide Seiten haben HP-Leisten. Die Aktionsleiste unten bietet fünf Möglichkeiten: Attack, Magic, Defend, Item, Flee. Jede ist farbcodiert. Der Kampfbildschirm ist übersichtlich und lesbar.

![Kampf mit hervorgehobenen Aktionsschaltflächen](images/screenshot-15.png)

![Siegesbildschirm mit XP- und Goldbelohnungen](images/screenshot-16.png)

**Der Sieg bringt XP und Gold.** Nach dem Besiegen des Green Slime erhält man Erfahrung und Währung. Der Siegesbildschirm zeigt genau, was man verdient hat, mit einem Weiter-Button. Einfaches, befriedigendes Feedback.

![Inventar- und Ausrüstungssystem](images/screenshot-17.png)

**Das Inventarsystem hat Ausrüstungsslots und einen Rucksack.** Es gibt Slots für Waffe, Kopf, Brust, Beine, Füße und zwei Zubehörslots. Der Rucksack zeigt Gegenstände in einem Raster. Unten sind Waffenschaden und Rüstungsverteidigung einsehbar.

![Gegenstand-Tooltip mit Benutzen-Option](images/screenshot-18.png)

**Gegenstände haben Tooltips und Aktionen.** Beim Hovern über ein Kleines Heiltrank zeigt sich dessen Beschreibung („Stellt 30 HP wieder her") mit Benutzen- und Abbrechen-Schaltflächen. Das ist ein echtes Inventarsystem, kein Platzhalter.

![Charakterwerte-Panel als Overlay](images/screenshot-19.png)

**Das Charakterwerte-Panel zeigt alles.** Das vollständige Werte-Blatt als Overlay auf der Spielwelt. Name, Klasse, Level, Erfahrungsleiste, HP, MP und alle Einzelwerte. Außerdem werden die ausgerüsteten Gegenstände mit ihren Werteangaben aufgelistet.

## Die Fehlerberichte

Über das anfängliche Spieltesten hinaus habe ich bei diesem Projekt keine spezifischen Fehler protokolliert. Das Spiel funktionierte beim ersten Laden, was eine willkommene Abwechslung gegenüber Tag 1 war. Die NPC-Interaktionen, der Kampfablauf und das Speichersystem funktionierten, ohne dass ich Tickets einreichen musste. Trotzdem ist es noch etwas rau an den Rändern. Die isometrische Bewegung kann sich etwas steif anfühlen, und der Kampf könnte mehr Gegnervarianz vertragen. Aber nichts war kaputt.

## Die Zahlen

- **34 Quelldateien** über Komponenten, Spiellogik, Hooks, Typen und Hilfsfunktionen
- **3 Kartenzonen** (Stadt, Wald, Verlies) mit isometrischen Kacheldaten
- **14 React-Komponenten** für die gesamte Spiel-UI
- **6 Spiel-Engine-Module** (Kampf, Gegenstände, Gegner, Dialoge, Quests, isometrisches Rendering)
- **Next.js 16 + Pixi.js 8 + React 19 + TypeScript** Tech-Stack
- **Gesamte aktive Zeit:** vielleicht 20 Minuten Spielen und Erkunden

## Ausprobieren

{{< github repo="nunocoracao/Vibe30-day03-rpg" showThumbnail=true >}}

**[Realm of Shadows spielen](https://vibe30-day03-rpg.vercel.app)**

WASD oder Pfeiltasten zum Bewegen. NPCs anklicken zum Reden. I, C, Q für Inventar, Charakter und Quest-Log. ESC für das Menü. F5 zum Schnellspeichern.

## Fazit Tag 3

Das ist das Projekt, bei dem ich aufgehört habe, diese Challenge als Kuriosität zu betrachten. Ein rundenbasiertes RPG mit isometrischer Grafik, drei Charakterklassen, verzweigten Dialogen, einem Quest-System, Inventarverwaltung, Ausrüstungsslots, rundenbasiertem Kampf und persistentem Speichern. Im Browser. Aus einem einzigen Prompt.

Ich habe noch nie ein RPG gebaut. Ich habe noch nie eine isometrische Rendering-Engine implementiert. Ich habe noch nie ein Kampfsystem, ein Ausrüstungssystem oder einen Dialogbaum entworfen. Ich würde nicht wissen, wo ich mit einem davon allein anfangen sollte, geschweige denn mit allen zusammen. Das wäre für mich ein monatelanges Projekt gewesen – vorausgesetzt, ich hätte es überhaupt fertiggestellt.

Ist es ein vollständiges RPG? Nicht wirklich. Es hat das Skelett eines RPGs. Der Inhalt ist dünn, es gibt vielleicht eine Handvoll Begegnungen, und die Geschichte ist ein generisches Fantasy-Setting. Aber alle Systeme sind vorhanden und funktionieren zusammen. Der Charakter, den man erstellt, trägt sich durch den Kampf, die Ausrüstung beeinflusst die Werte, Quests verfolgen den Fortschritt, und Speicherstände bleiben sitzungsübergreifend erhalten. Die Architektur ist solide.

Was mich am meisten beeindruckt, ist die UI-Qualität. Das Gold-auf-Dunkel-Farbschema, der mehrstufige Charaktererstellungsassistent, die Werteleisten, das Quest-Log mit Registerkarten, das Inventarraster. Nichts davon war in meinem Prompt. Ich habe nach Systemen gefragt und ein gestaltetes Erlebnis bekommen. Das ist der Teil, den ich selbst mit unbegrenzter Zeit nicht hätte umsetzen können. Ich bin kein Designer.

Die Kosten, so etwas zu bauen, sind gerade eingestürzt. Nicht die Kosten, ein großartiges RPG zu bauen. Das erfordert immer noch jahrelangen Inhalt, Balancing und Politur. Aber die Kosten, einen funktionierenden RPG-Prototypen mit echten Systemen zu bauen? Die sind von Monaten auf Stunden gesunken.

---

*Dies ist Tag 3 von [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Begleitet mich, während ich 30 Projekte in 30 Tagen mit KI-unterstütztem Coding veröffentliche.*
