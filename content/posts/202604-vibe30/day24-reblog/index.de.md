---
title: "30 Tage Vibe Coding - Tag 24 - Reblog"
description: "Ein modernes Redesign meines persönlichen Blogs, neu aufgebaut von Hugo/Blowfish zu Astro + Tailwind CSS mit Fuzzy-Suche, Dark Mode und individueller Typografie."
summary: "Ein modernes Redesign meines persönlichen Blogs, neu aufgebaut von Hugo/Blowfish zu Astro + Tailwind CSS mit Fuzzy-Suche, Dark Mode und individueller Typografie."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-24", "astro", "tailwind", "blog", "redesign"]
series: ["30 Days of Vibe Coding"]
series_order: 24
seriesOpened: false
date: 2026-04-29
draft: false
#type: "hidden"
---

Tag 24. Ich habe meinen eigenen Blog neu gebaut.

Dieser hier ist persönlich. Mein Blog auf [n9o.xyz](https://n9o.xyz) läuft seit Jahren auf Hugo mit meinem eigenen Theme, [Blowfish](https://blowfish.page). Ich habe Blowfish gebaut, ich pflege es, tausende Leute benutzen es. Aber ich wollte schon seit einer Weile zu etwas anderem wechseln. Eine frische visuelle Identität, ein anderer Stack, etwas das sich mehr nach mir anfühlt und weniger nach einem Theme, das ich für alle anderen gemacht habe.

Also war das heutige Projekt Reblog: ein komplettes Redesign von n9o.xyz, neu aufgebaut von Hugo zu Astro 5 mit Tailwind CSS.

{{< alert icon="fire">}}
Probier es selbst aus [hier](https://vibe30-day24-reblog.vercel.app)
{{< /alert >}}

## Der Prompt

Das war nicht ein einzelner Prompt. Das waren 18 [Watchfire](https://watchfire.io)-Tasks über den Tag verteilt. Die anfängliche Richtung war so etwas wie:

> "Baue einen persönlichen Blog mit Astro 5, Tailwind CSS und MDX. Dark Mode, hervorgehobene Posts, Tag-Filterung, Fuzzy-Suche, eine Lebenslauf-Seite, eine Musik-Seite und eine Projekt-Seite. Individuelle Typografie mit Sora, Crimson Pro und JetBrains Mono."

Von da an war es ein iterativer Prozess. Layout-Anpassungen, Farb-Tweaks, strukturierte Daten hinzufügen, Druck-Styles fixen, Serien-Support für mehrteilige Inhalte verdrahten. Die Art von Arbeit, die normalerweise Wochen von Hin und Her zwischen Design und Code braucht.

## Was Ich Bekommen Habe

Eine komplette Blog-Plattform mit sechs verschiedenen Bereichen.

![Homepage im Dark Mode](images/screenshot-01.png)

**Die Homepage** hat einen Hero-Bereich mit meinem Foto, Titel, Bio und sozialen Links. Darunter ein Bereich für hervorgehobene Posts mit großen Karten, dann ein Raster mit aktuellen Posts. Sauber, zentriert und warm. Der Dark Mode verwendet eine gedämpfte olivbraune Palette, die mir wirklich gut gefällt. Es ist nicht das typische Dunkelgrau oder reines Schwarz.

![Bereich für hervorgehobene Posts](images/screenshot-02.png)

![Raster mit aktuellen Posts](images/screenshot-03.png)

**Die Posts-Seite** hat Tag-Filterung am oberen Rand. Klick auf einen Tag, die Liste filtert sofort. Kein Seiten-Reload, kein Server-Roundtrip. Einfach Astro, das sein Ding macht.

![Alle Posts mit Tag-Filterung](images/screenshot-05.png)

**Die Fuzzy-Suche** wird von Fuse.js angetrieben. Sie lädt clientseitig und sucht über Titel, Beschreibungen und Tags. Das ist eine der wenigen interaktiven Inseln in einer ansonsten JS-freien Seite. Astros Insel-Architektur bedeutet, dass die Such-Komponente eigenständig hydriert, ohne ein Framework für die gesamte Seite mitzuschleppen.

**Die Über-mich-Seite** zeigt meine Bio, Links und einen Mentoring-Hinweis. Die Lebenslauf-Seite listet meinen Karriereverlauf mit Firmenlogos und Rollenentwicklung auf. Beide sind sauber und gut lesbar.

![Über-mich-Seite](images/screenshot-04.png)

![Lebenslauf-Seite](images/screenshot-07.png)

**Die Projekt-Seite** zeigt Open-Source-Arbeit mit Status-Badges, Tech-Tags und Links zu Repos und Websites.

![Projekt-Seite](images/screenshot-06.png)

**Die Musik-Seite** ist ein Raster von Album-Covern von Tracks, die ich unter dem Namen N9O veröffentlicht habe. Jedes verlinkt zu Streaming-Plattformen. Das ist eine Seite, die ich in der Hugo-Version nie hatte und immer haben wollte.

![Musik-Seite](images/screenshot-08.png)

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Light Mode

Das Ganze funktioniert auch im Light Mode mit Systemeinstellungs-Erkennung. Gleiches Layout, andere Palette.

![Homepage im Light Mode](images/screenshot-09.png)

![Hervorgehobene Posts im Light Mode](images/screenshot-10.png)

Die helle Version verwendet einen warmen Creme-Hintergrund mit der gleichen Typografie. Sie wechselt automatisch basierend auf deinen Betriebssystem-Einstellungen, oder du kannst manuell umschalten.

## Unter der Haube

Die Technologie-Entscheidungen hier waren bewusst:

- **Astro 5** für statische Generierung mit standardmäßig null JS
- **MDX** für Blog-Posts, damit ich bei Bedarf Komponenten in Markdown einbauen kann
- **Tailwind CSS** zum Stylen, ohne gegen das CSS eines Themes zu kämpfen
- **Fuse.js** für clientseitige Fuzzy-Suche
- **Sharp** für automatische Bildoptimierung
- **Sora + Crimson Pro + JetBrains Mono** für Typografie, die sich durchdacht anfühlt
- **Strukturierte Daten** und **Sitemap** für SEO
- **RSS-Feed** für die drei Leute, die noch RSS benutzen (ich bin einer davon)
- **Druck-Styles** weil ich manchmal Artikel ausdrucke und die sollten ordentlich aussehen

## Die 18 Tasks

Watchfire hat das in 18 Tasks aufgeteilt, was die detaillierteste Aufteilung ist, die ich bisher davon gesehen habe. Der erste Schwung deckte das Wesentliche ab: Projekt-Scaffolding, Layout-Komponenten, Homepage, Posts-Seite, Über-mich-Seite, Dark Mode. Dann habe ich weiter Anfragen hinzugefügt. "Füge eine Musik-Seite hinzu." "Füge Serien-Support hinzu." "Die hervorgehobenen Karten brauchen mehr Kontrast." "Füge Druck-Styles hinzu." "Füge strukturierte Daten hinzu."

Jede Iteration kam schnell zurück und war größtenteils richtig. Das visuelle Design durchlief ein paar Runden, bevor ich bei der warmen Palette gelandet bin. Die erste Version war zu steril. Die zweite war zu dunkel. Die dritte Version traf die richtige Balance zwischen gemütlich und professionell.

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day24-reblog" showThumbnail=true >}}

**[Live Demo](https://vibe30-day24-reblog.vercel.app)**

## Fazit Tag 24

Das ist das persönlich bedeutsamste Projekt der Challenge bisher. Nicht weil es das technisch beeindruckendste ist, sondern weil es etwas ist, das ich seit Monaten vor mir herschiebe. Die eigene Website neu zu gestalten ist eine dieser Aufgaben, die sich nie dringend genug anfühlt, um anzufangen. Es gibt immer etwas Wichtigeres. Und dann schaust du eines Tages drauf und merkst, dass sie dich nicht mehr repräsentiert.

Eine komplette Blog-Plattform mit sechs Seiten, Dark Mode, Suche, Tag-Filterung, Serien-Support, strukturierten Daten und Druck-Styles an einem einzigen Tag zu bauen, ist nicht etwas, das ich alleine hätte schaffen können. Nicht mal annähernd. Die Hugo/Blowfish-Version hat mich Wochen von Abenden und Wochenenden gekostet, und das mit einem Framework, das ich bereits in- und auswendig kannte.

Wird das tatsächlich n9o.xyz ersetzen? Vielleicht. Ich muss den Content migrieren und eine Weile damit leben. Aber die Tatsache, dass ich eine funktionierende Alternative fertig habe, die an einem Tag gebaut wurde, ist schon ziemlich verrückt.

---

*Das ist Tag 24 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mit, während ich 30 Projekte in 30 Tagen mit KI-unterstütztem Programmieren shippe.*
