---
title: "30 Tage Vibe Coding - Tag 14 - WeatherTUI"
description: "Ein terminalbasiertes Wetter-Dashboard mit ASCII-Art-Wetterszenen, animierten Effekten und Unterstützung für mehrere Standorte."
summary: "Ein terminalbasiertes Wetter-Dashboard mit ASCII-Art-Wetterszenen, animierten Effekten und Unterstützung für mehrere Standorte."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-14", "python", "tui", "weather", "textual"]
series: ["30 Days of Vibe Coding"]
series_order: 14
seriesOpened: false
date: 2026-04-19
draft: false
#type: "hidden"
---

Tag 14. Ich wollte sehen, wie eine Wetter-App aussieht, wenn man jedes moderne UI-Framework weglässt und alles in ein Terminal zwingt.

## Der Prompt

> "Baue ein Terminal-Wetter-Dashboard mit ASCII-Art-Wetterszenen, animierten Wettereffekten und Unterstützung für mehrere Standorte"

## Wie Es Gebaut Wurde

Ich habe [Watchfire](https://watchfire.io) benutzt und es hat die Arbeit in 23 Aufgaben aufgeteilt. Das klingt nach viel für eine Wetter-App, aber der Umfang wuchs schnell, sobald ASCII-Art und Animationen ins Spiel kamen.

Die Aufgabenliste deckte zuerst das Erwartete ab: Projektaufbau, API-Integration mit Open-Meteo, grundlegendes Layout. Dann wurde es spaßig: 12 einzigartige ASCII-Art-Wetterszenen (Sonne, Mond, Regen, Schnee, Gewitter, Nebel, Wind, Wolken), partikelbasierte animierte Effekte für jede Wetterbedingung, Temperatur- und Niederschlagsdiagramme, stündliche und tägliche Vorhersageansichten, ein Dashboard mit mehreren Standorten, Farbthemen, Mausunterstützung und ein scrollbares Layout.

23 Aufgaben. Ich saß nicht da und habe jede einzelne angeleitet. Watchfire hat sie in die Warteschlange gestellt und abgearbeitet, während ich andere Dinge erledigt habe.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

Dieses hat mich mehr überrascht als die meisten.

![Fokussierte Ansicht mit Wetterdetails](images/screenshot-10.png)

**Die ASCII-Art ist wirklich beeindruckend.** Jede Wetterbedingung bekommt ihre eigene Szene. Es gibt einen großen bedeckten Himmel mit geschichteten Wolken, Regen mit fallenden Tropfen, Schnee mit treibenden Flocken, eine Sonne mit strahlenden Strahlen. Die Kunst ist detailliert und füllt das Terminal mit echtem Charakter. Nicht die faule "es regnet: //" Art von ASCII-Art. Echte mehrzeilige Szenen mit Schattierung und Tiefe.

**Die Animationen sind flüssig.** Regentropfen fallen. Schneeflocken treiben. Sterne funkeln am Nachthimmel. Windpartikel wehen über den Bildschirm. Blitze zucken während Gewittern. All das passiert in einem Terminal. Man kann die Animationen mit einem einzigen Tastendruck pausieren und fortsetzen.

![Dashboard mit mehreren Standorten](images/screenshot-02.png)

**Das Dashboard ist aufgeräumt.** Mehrere Standorte in einem Raster dargestellt, jeder mit einem kleinen ASCII-Wettericon, aktueller Temperatur und Bedingungen auf einen Blick. Klick auf eine Karte oder drück eine Zifferntaste, um zur detaillierten Ansicht dieses Standorts zu springen.

![Fokussierte Ansicht für New York](images/screenshot-08.png)

**Die Detailansicht hat alles.** Luftqualitätsindex, Sonnenauf-/untergangszeiten, UV-Index mit Farbcodierung, Feuchtigkeitsbalken, Windgeschwindigkeit und -richtung, Wolkendecke, Niederschlagsaufschlüsselung (Regen vs Schnee). Dazu eine 7-Tage-Vorhersage unten mit Mini-ASCII-Art für jeden Tag. Man kann auch auf eine 12-Stunden-Stundenansicht umschalten.

![Standortsuche](images/screenshot-03.png)

![Suchergebnisse für Lissabon](images/screenshot-04.png)

**Die Standortverwaltung funktioniert gut.** Suche nach jeder Stadt weltweit, füge sie deinem Dashboard hinzu, ordne Standorte um, lege einen Standard fest. Die Geocoding-Suche liefert schnell Ergebnisse und die Auswahlschnittstelle ist sauber.

![Dashboard mit vier Standorten](images/screenshot-05.png)

**Vier Farbthemen.** Standard, Ozean (Blau- und Cyantöne), Sonnenuntergang (warme Orangetöne) und Wald (Grün- und Erdtöne). Drück `t` um durchzuwechseln. Deine Präferenz wird in einer Konfigurationsdatei gespeichert.

![Themenauswahl](images/screenshot-06.png)

![Ozean-Thema angewendet](images/screenshot-07.png)

**Kein API-Schlüssel nötig.** Es nutzt die kostenlose Open-Meteo-API, also klonst du das Repo, installierst die Abhängigkeiten und startest. Keine Anmeldung, keine Tokens, keine Konfiguration nötig.

## Die Zahlen

- **12 einzigartige ASCII-Art-Wetterszenen** mit passenden animierten Effekten
- **4 Farbthemen** mit persistenten Präferenzen
- **23 Watchfire-Aufgaben** vom Setup bis zum finalen Feinschliff
- **Gebaut mit Python und Textual** (das TUI-Framework von Textualize)
- **Gesamte Hands-on-Zeit:** vielleicht 20 Minuten, in denen ich verschiedene Städte ausprobiert und durch Themen gewechselt habe

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day14-weathertui" showThumbnail=true >}}

Klone das Repo und starte `python -m weather_tui`. Kein API-Schlüssel nötig. Pfeiltasten zum Navigieren, Zifferntasten zum Springen zwischen Standorten, `t` zum Themenwechsel, `?` für die vollständige Tastenbelegungsliste.

## Fazit Tag 14

Allein die ASCII-Art hätte mich Tage gekostet, sie von Hand zu entwerfen. Die animierten Wettereffekte obendrauf? Das hätte ich nicht einmal versucht.

Was mich beeindruckt, ist die Liebe zum Detail. Die 7-Tage-Vorhersagekarten haben jeweils ihr eigenes winziges ASCII-Wettericon. Die Feuchtigkeit wird als Fortschrittsbalken angezeigt. Wind beinhaltet sowohl Geschwindigkeit als auch Kompassrichtung. Der UV-Index ändert seine Farbe je nach Schweregrad. Nichts davon wurde explizit angegeben. Es hat einfach verstanden, dass ein Wetter-Dashboard diese Dinge braucht, und hat sie alle gebaut.

Terminal-Apps scheinen ein Sweet Spot für KI-gestütztes Coding zu sein. Die Einschränkungen einer textbasierten Oberfläche helfen, das Ergebnis zu fokussieren, anstatt es zu limitieren.

---

*Dies ist Tag 14 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir, während ich 30 Projekte in 30 Tagen mit KI-gestütztem Coding veröffentliche.*
