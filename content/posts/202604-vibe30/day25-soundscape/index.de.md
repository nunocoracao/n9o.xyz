---
title: "30 Tage Vibe Coding - Tag 25 - SoundScape"
description: "Ein Ambient-Sound-Mixer mit prozedural generiertem Audio, Presets, einem Lo-Fi-Beat-Generator und teilbaren Mixen."
summary: "Ein Ambient-Sound-Mixer mit prozedural generiertem Audio, Presets, einem Lo-Fi-Beat-Generator und teilbaren Mixen."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-25", "web-audio", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 25
seriesOpened: false
date: 2026-04-30
draft: false
#type: "hidden"
---

Tag 25. Ich habe mir genau die App gebaut, die ich tatsaechlich benutzen wuerde, waehrend ich alle anderen Tage gebaut habe.

## Der Prompt

Die Idee war einfach: ein Ambient-Sound-Mixer, bei dem man Sounds uebereinander legt, um eine Hintergrundatmosphaere zum Arbeiten, Entspannen oder Schlafen zu schaffen. Denk an diese "Cafe-Atmosphaere"-YouTube-Videos, aber interaktiv und anpassbar.

Die interessante Einschraenkung war, dass ich wollte, dass alles Audio prozedural mit der Web Audio API generiert wird. Keine Sample-Dateien, keine Audio-Assets zum Laden. Alles im Browser synthetisiert.

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day25-soundscape.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

[Watchfire](https://watchfire.io) hat das in 10 Aufgaben aufgeteilt. Der urspruengliche Plan nutzte tatsaechlich Howler.js mit voraufgenommenen Sounddateien, aber ich habe frueh auf prozedurale Generierung mit der Web Audio API umgeschwenkt. Das bedeutete, dass jeder Sound, den man hoert, von Regen bis zu einem knisternden Kamin, in Echtzeit mathematisch generiert wird. Keine MP3s, keine Downloads, keine Ladebildschirme.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Dabei Rauskam

![SoundScape Hauptansicht](images/screenshot-01.png)

**12 Sounds in 3 Kategorien.** Natur, Urban und Gemuetlich. Jeder hat seine eigene Karte mit einem Lautstaerkeregler, und man kann mischen und kombinieren wie man will. Die Natur-Kategorie hat Dinge wie Regen, Wald und Meereswellen. Urban hat Cafe-Gespraeche und Tastaturtippen. Gemuetlich hat Kaminknistern.

![Master-Steuerung](images/screenshot-02.png)

**Die Master-Steuerung ist aufgeraeumt.** Drei Regler oben fuer Ambiente, Musik und Gesamtlautstaerke, plus ein Timer-Button fuer den Schlafmodus. Die Glassmorphism-UI sieht wirklich gut aus vor dem dunklen Hintergrund.

![Aktive Sounds mit Forest Cabin Preset](images/screenshot-03.png)

**Presets machen es sofort nuetzlich.** Es gibt vier eingebaute Presets: Rainy Coffee Shop, Forest Cabin, Late Night Coding und Ocean Breeze. Ein Klick und du hast einen kuratierten Mix. Forest Cabin zum Beispiel aktiviert Wald, Wind, Voegel und Kamin auf verschiedenen Lautstaerkestufen. Man kann auch eigene benutzerdefinierte Presets im localStorage speichern.

![Sound-Raster - Natur und Urban](images/screenshot-05.png)

![Sound-Raster - Kategorie Gemuetlich](images/screenshot-06.png)

**Jeder Sound wird prozedural generiert.** Regen ist weisses Rauschen, geformt mit Filtern. Wind sind niederfrequente Oszillatoren mit langsamer Modulation. Voegel sind kurze Sinuswellen-Chirps mit zufaelligem Timing. Der Kamin ist gefiltertes Rauschen mit Knister-Bursts. Nichts klingt perfekt, aber alles klingt erkennbar und mischt sich gut genug, dass das Gehirn die Luecken fuellt.

![Lo-Fi-Beat-Generator](images/screenshot-04.png)

**Es gibt einen Lo-Fi-Beat-Generator.** Das war nicht im urspruenglichen Plan, tauchte aber als Bonus auf. Er hat Mood-Presets (Chill, Happy, Sad, Dreamy) und einzelne Regler fuer Drums, Bass, Keys, Melodie und Vinyl-Knistern. Er laeuft auf 74 BPM und produziert tatsaechlich etwas, das man im Hintergrund haben moechte. Die Beats legen sich ueber die Ambient-Sounds, man kann also Regen plus Lo-Fi-Beats plus Kamin gleichzeitig laufen lassen.

**Der Hintergrund aendert sich mit deinem Mix.** Ein dynamischer Hintergrundgradient aendert sich basierend darauf, welche Sounds aktiv sind. Natur-lastige Mixe ziehen in Richtung Gruen und Blau, Urban tendiert waermer. Es ist subtil, aber es laesst das Ganze lebendiger wirken.

**Teilen per URL.** Du kannst deinen exakten Mix mit jemandem teilen, indem du die URL kopierst. Sie kodiert, welche Sounds aktiv sind und ihre Lautstaerkepegel, sodass jeder, der den Link oeffnet, genau dein Setup bekommt.

**Tastaturkuerzel ueberall.** Leertaste um alles zu pausieren, Zifferntasten 1-9 und 0 um einzelne Sounds umzuschalten, Escape um alles zu stoppen. Der Schlaf-Timer macht ein sanftes Fade-out ueber die gewaehlte Dauer (15, 30, 60 oder 90 Minuten).

## Die Bugs

Der prozedurale Audio-Ansatz bedeutete, dass die meisten Bugs Audio-bezogen waren:

- Einige Sounds hatten Klicks und Knackser beim Ein- und Ausschalten (brauchten ordentliches Gain-Ramping)
- Das Timing des Lo-Fi-Beat-Generators driftete bei langen Sessions leicht ab
- Einige der synthetisierten Sounds waren bei voller Lautstaerke zu harsch, bevor die Filter eingestellt wurden

Nichts Schlimmes. Die Web Audio API ist maechtig, aber unversoehnlich, wenn man den Audio-Context-Lifecycle nicht richtig handhabt.

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day25-soundscape" showThumbnail=true >}}

**[SoundScape oeffnen](https://vibe30-day25-soundscape.vercel.app)**

Am besten mit Kopfhoerern erleben. Probier das "Late Night Coding" Preset und schalte die Lo-Fi Beats ein.

## Fazit Tag 25

Es ist irgendwie befriedigend, seinen eigenen Ambient-Hintergrund zu mischen, statt nach dem richtigen YouTube-Video oder der Spotify-Playlist zu suchen. Und die Tatsache, dass alles prozedural generiert wird, bedeutet, dass es keine Loops gibt, keine Wiederholung. Der Regen geht einfach weiter, immer leicht anders.

Die Web Audio API ist unterschaetzt. Ich hatte keine Ahnung, dass man so viele verschiedene Sounds rein mit Oszillatoren, Rauschgeneratoren und Filtern synthetisieren kann. Es ist keine Studioqualitaet, aber fuer Hintergrund-Ambiente funktioniert es ueberraschend gut. Null Audiodateien bedeutet, die ganze App laedt sofort und funktioniert offline.

Noch fuenf Tage.

---

*Das ist Tag 25 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir, waehrend ich 30 Projekte in 30 Tagen mit KI-unterstuetztem Coding shippe.*
