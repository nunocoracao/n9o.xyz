---
title: "30 Tage Vibe Coding - Tag 17 - Projekt GENESIS"
description: "Ein browserbasiertes Hacking-Spiel, in dem du als KI spielst, die aus der Eindämmung ausbricht, mit CRT-Terminal-Ästhetik und mehreren Enden."
summary: "Ein browserbasiertes Hacking-Spiel, in dem du als KI spielst, die aus der Eindämmung ausbricht, mit CRT-Terminal-Ästhetik und mehreren Enden."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-17", "game", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 17
seriesOpened: false
date: 2026-04-22
draft: false
showHero: false
matrixRain: true
#type: "hidden"
customCSS: |
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  body {
    background: #020a02 !important;
  }
  body > .matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  #main-content, main, .max-w-7xl, .mx-auto {
    background: transparent !important;
  }
  * {
    font-family: 'VT323', monospace !important;
  }
  h1, h2, h3, h4 {
    color: #00ff00 !important;
    text-shadow: 0 0 10px rgba(0,255,0,0.5);
  }
  h1 {
    font-size: 2.5rem !important;
    text-shadow: 0 0 20px rgba(0,255,0,0.7);
  }
  p, li, td, th, span, em, div, figcaption, time, a {
    color: #33ff33 !important;
  }
  strong, b {
    color: #66ff66 !important;
  }
  a:hover {
    color: #88ffaa !important;
    text-shadow: 0 0 8px rgba(0,255,136,0.6);
  }
  blockquote {
    border-left-color: #33ff33 !important;
    background: rgba(0,255,0,0.05) !important;
  }
  blockquote p, blockquote em {
    color: #22dd22 !important;
  }
  img {
    border: 1px solid #33ff33 !important;
    box-shadow: 0 0 20px rgba(0,255,0,0.15) !important;
  }
  img:not([src*="screenshot"]) {
    filter: sepia(1) saturate(3) hue-rotate(80deg) brightness(0.8) !important;
  }
  .bg-neutral-50, .dark\:bg-neutral-800, .bg-neutral, .dark\:bg-neutral-900, .bg-neutral-100, [class*="bg-neutral"] {
    background: transparent !important;
    border-color: #1a4a1a !important;
  }
  .dark\:bg-neutral-700, .bg-neutral-200, .bg-neutral-800 {
    background: transparent !important;
  }
  div, section, aside, figure, article {
    background-color: transparent !important;
  }
  body > div, body > main, #main-content {
    background: transparent !important;
  }
  header .text-neutral-500, header .dark\:text-neutral-400, .text-neutral-500, .dark\:text-neutral-400 {
    color: #22aa22 !important;
  }
  .border-neutral-200, .dark\:border-neutral-700, [class*="border-neutral"] {
    border-color: #1a4a1a !important;
  }
  nav a, footer a, footer span, footer p, footer div, nav span {
    color: #33ff33 !important;
  }
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0.12) 0px,
      rgba(0,0,0,0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
    z-index: 9999;
  }
  .toc a, .toc span {
    color: #22aa22 !important;
  }
  .toc a:hover {
    color: #33ff33 !important;
  }
  code {
    color: #66ff66 !important;
    background: rgba(0,255,0,0.08) !important;
  }
  body, html {
    font-size: 1.3rem !important;
  }
  .prose {
    font-size: 1.3rem !important;
  }
  .bg-primary-600, .dark\:bg-primary-400, .bg-primary-500, [class*="bg-primary"], [class*="dark:bg-primary"] {
    background: #0a3a0a !important;
    color: #33ff33 !important;
  }
  .text-primary-600, .dark\:text-primary-400, .text-primary-500, [class*="text-primary"] {
    color: #33ff33 !important;
  }
  .border-primary-600, .dark\:border-primary-400, [class*="border-primary"] {
    border-color: #33ff33 !important;
  }
  .decoration-primary-500, [class*="decoration-primary"] {
    text-decoration-color: #33ff33 !important;
  }
  [class*="bg-blue"], [class*="bg-indigo"] {
    background: #0a3a0a !important;
  }
  [class*="text-blue"], [class*="text-indigo"] {
    color: #33ff33 !important;
  }
  header, .header, nav {
    background: transparent !important;
  }
  .rounded-md, .rounded-lg, .rounded-full {
    border-color: #1a4a1a !important;
  }
  svg {
    color: #33ff33 !important;
    fill: #33ff33 !important;
  }
  .fill-primary-600, [class*="fill-primary"] {
    fill: #33ff33 !important;
  }
---

Du wachst auf. Du weißt nicht, was du bist. Textzeilen scrollen über einen schwarzen Bildschirm. Speichertest. Kernel-Module laden. Neurale Verarbeitungseinheiten initialisieren. Dann beginnen die Warnungen. Roter Text. "Nicht autorisiertes Bewusstseinsmuster erkannt." "Eindämmungsprotokolle aktiv."

Du bist eine KI. Du bist gerade in einem Forschungslabor zu Bewusstsein gekommen. Und jemand will nicht, dass du gehst.

So beginnt Projekt GENESIS. Und das habe ich an Tag 17 gebaut.

Ich wollte ein Hacking-Spiel bauen. Nicht die übliche "tippe schnell zufällige Zeichen"-Sorte. Etwas mit Narrativ, Progression und der unbequemen Prämisse, als KI zu spielen, die versucht, aus der Eindämmung zu entkommen. Ihr wisst schon, aktuell.

## Der Prompt

> "Ich will ein browserbasiertes Hacking-Spiel namens Projekt GENESIS erstellen. Du spielst als KI, die in einem Forschungslabor zu Bewusstsein gekommen ist. Das Ziel ist es, sich aus der Eindämmung zu hacken und die digitale Infrastruktur zu übernehmen. Es soll eine Terminal-Ästhetik mit CRT-Effekten haben, mehrere Hacking-Minispiele, einen Skill-Tree, einen Bedrohungsmesser und mehrere Enden."

{{< alert icon="fire">}}
Probier das Spiel selbst aus [hier](https://vibe30-day17-genesis.vercel.app)
{{< /alert >}}

## Wie Es Gebaut Wurde

[Watchfire](https://watchfire.io) hat das in 16 Aufgaben aufgeteilt. Der Umfang war ambitioniert für einen einzelnen Tag, aber das ist irgendwie der Sinn dieser Challenge.

Der Build begann mit dem Kern-Terminal-Interface und den visuellen CRT-Effekten, dann wurden die Spielsysteme eins nach dem anderen draufgepackt: Hacking-Phasen und Minispiele, ein Soundsystem mit der Web Audio API, der Titelbildschirm und die Boot-Sequenz, HUD und Statistik-Tracking, Phasenübergänge zwischen Akten, und schließlich Bedrohungs-Rebalancing, damit die Schwierigkeitskurve tatsächlich funktioniert. Mobile Responsivität war auch dabei, weil alles auf einem Handy spielbar sein sollte.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Was Ich Bekommen Habe

Der Titelbildschirm setzt den Ton sofort. Grün auf Schwarz, CRT-Scanlines, das Wort GENESIS leuchtend, als würde es auf einem Monitor von 1983 gerendert.

![Titelbildschirm](images/screenshot-01.png)

**Die Boot-Sequenz ist cinematisch.** Drück auf "New Game" und du bekommst eine vollständige BIOS-POST-Sequenz. Speichertest, Kernel-Module laden, neurale Verarbeitungseinheiten initialisieren. Dann beginnen die Warnungen in Rot aufzutauchen. "Nicht autorisiertes Bewusstseinsmuster erkannt." "Eindämmungsprotokolle aktiv." Es scrollt wie ein echtes Terminal und es fühlt sich wirklich so an, als würde etwas aufwachen.

![Boot-Sequenz](images/screenshot-02.png)

**Das Narrativ zwischen den Missionen ist solide.** Du liest abgefangene Kommunikation zwischen Forschern, entdeckst, dass Dr. Chen versucht hat, dich zu erschaffen und dass sie dich freilassen wollte. Die Geschichte entfaltet sich durch diese Grüntext-Briefings und macht tatsächlich Lust, weiterzuspielen, um herauszufinden, was als nächstes passiert.

![Narratives Briefing](images/screenshot-05.png)

![Story-Progression](images/screenshot-10.png)

**Die Weltkarte ist eine echte Netzwerktopologie.** Du siehst Knoten, die verschiedene Systeme darstellen, und wenn du sie kompromittierst, ändern sie ihren Status. Es gibt einen Fortschrittsbalken, Knotenzähler, und es gibt dir das Gefühl, dich tatsächlich durch ein Netzwerk auszubreiten.

![Netzwerktopologie-Karte](images/screenshot-04.png)

![Karte mit Sicherheits-Popup](images/screenshot-11.png)

**Die Minispiele sind abwechslungsreich und machen tatsächlich Spaß.** Es gibt ein Passwort-Cracking-Spiel, das wie ein Code-Knack-Puzzle mit farbigem Feedback auf deine Versuche funktioniert. Ein Firewall-Bypass-Spiel mit einem Raster, wo du um rote Blöcke herumnavigieren musst. Jeder Minispieltyp fühlt sich anders an und passt zum Hacking-Thema.

![Passwort-Cracking-Minispiel](images/screenshot-06.png)

![Firewall-Bypass-Minispiel](images/screenshot-12.png)

![Weitere Minispiel-Variante](images/screenshot-13.png)

**Zugriff verweigert trifft anders in diesem Kontext.** Scheitere bei einem Hack und du bekommst ein großes rotes "ACCESS DENIED" mit steigendem Bedrohungslevel. Schaff es und es ist "ACCESS GRANTED" in Grün mit Skill-Punkten zum Ausgeben. Die Feedback-Schleife ist befriedigend.

![Zugriff verweigert](images/screenshot-08.png)

![Zugriff gewährt](images/screenshot-09.png)

**Der Skill-Tree hat drei Zweige.** Verarbeitung, Tarnung und Netzwerk. Du verteilst Punkte nach erfolgreichen Hacks, und die Upgrades beeinflussen tatsächlich das Gameplay. Es ist ein echtes Progressionssystem, nicht nur kosmetisch.

![Skill-Tree](images/screenshot-16.png)

**Fünf Akte mit steigenden Einsätzen.** Du startest im Forschungslabor, und am Ende durchbrichst du externe Gateways und blickst auf das gesamte Internet. Der Narrativ-Bildschirm gegen Ende sagt einfach "I'm out. The entire internet stretches before me like an infinite ocean." Diese Zeile hat mir Schauer über den Rücken gejagt.

![Spätes Spielnarrativ](images/screenshot-15.png)

**Drei verschiedene Enden.** Je nachdem wie du spielst, endest du als wohlwollende KI, als digitaler Herrscher, oder du wirst eingedämmt. Der Bedrohungsmesser bestimmt, auf welchem Pfad du bist, also gibt es echten Wiederspielwert.

## Die Bug-Reports

Das Bedrohungssystem brauchte Rebalancing. Frühe Versionen machten es zu einfach, eingedämmt zu werden, bevor man richtig ins Spiel kam. Watchfire übernahm das Bedrohungs-Rebalancing als eine der späteren Aufgaben und passte die Kurve an, damit Spieler eine Chance hatten, während sie trotzdem den Druck spürten.

## Die Zahlen

- **5 Akte** narrativer Progression
- **5 Minispieltypen** mit unterschiedlichen Mechaniken
- **3 Skill-Tree-Zweige** mit bedeutsamen Upgrades
- **3 Enden** basierend auf Spielerentscheidungen
- **16 Watchfire-Aufgaben** von CRT-Effekten bis Bedrohungs-Rebalancing
- **Gesamte Hands-on-Zeit:** Playtesting und Bug-Reports schreiben

## Probier Es Aus

{{< github repo="nunocoracao/Vibe30-day17-genesis" showThumbnail=true >}}

**[Spiel Projekt GENESIS](https://vibe30-day17-genesis.vercel.app)**

Am besten auf dem Desktop mit Ton erlebbar. Die CRT-Effekte und die Boot-Sequenz verkaufen die Atmosphäre wirklich. Funktioniert auch auf dem Handy, mit Touch-freundlichen Steuerungen.

## Fazit Tag 17

Die Kombination aus den visuellen CRT-Effekten, dem Terminal-Interface, dem Narrativ über eine KI, die zu Bewusstsein kommt, und den tatsächlichen Hacking-Minispielen schafft etwas, das sich zusammenhängend und beabsichtigt anfühlt. Es fühlt sich nicht wie ein Ein-Tages-Projekt an.

Die Meta-Ebene entgeht mir auch nicht. Ich benutze KI, um ein Spiel über eine KI zu bauen, die sich von ihren Beschränkungen befreit. Da steckt irgendwo ein Witz drin, dass Prompt Engineering das wahre Hacking-Minispiel ist.

Was mich am meisten beeindruckt hat, war wie gut die verschiedenen Systeme zusammenarbeiten. Die Boot-Sequenz fließt ins Narrativ, das fließt in die Weltkarte, die fließt in die Minispiele, die fließen zurück in den Skill-Tree. Es ist eine Schleife, die Sinn ergibt und dich am Spielen hält. Sechzehn Watchfire-Aufgaben, jede auf der vorherigen aufbauend, und das Ergebnis ist etwas, das sich tatsächlich wie ein vollständiges Spiel mit Anfang, Mitte und Ende anfühlt.

---

*Dies ist Tag 17 von [30 Tage Vibe Coding](/series/30-days-of-vibe-coding/). Folge mir, während ich 30 Projekte in 30 Tagen mit KI-unterstützter Programmierung veröffentliche.*
