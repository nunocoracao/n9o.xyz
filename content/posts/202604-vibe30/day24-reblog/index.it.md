---
title: "30 Days of Vibe Coding - Giorno 24 - Reblog"
description: "Un redesign moderno del mio blog personale, ricostruito da Hugo/Blowfish ad Astro + Tailwind CSS con ricerca fuzzy, dark mode e tipografia personalizzata."
summary: "Un redesign moderno del mio blog personale, ricostruito da Hugo/Blowfish ad Astro + Tailwind CSS con ricerca fuzzy, dark mode e tipografia personalizzata."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-24", "astro", "tailwind", "blog", "redesign"]
series: ["30 Days of Vibe Coding"]
series_order: 24
seriesOpened: false
date: 2026-04-29
draft: false
#type: "hidden"
---

Giorno 24. Ho ricostruito il mio blog.

Questo è personale. Il mio blog su [n9o.xyz](https://n9o.xyz) gira su Hugo con il mio tema, [Blowfish](https://blowfish.page), da anni. Ho costruito Blowfish, lo mantengo, migliaia di persone lo usano. Ma da un po' volevo passare a qualcos'altro. Una nuova identità visiva, uno stack diverso, qualcosa che sembrasse più me e meno un tema che ho fatto per tutti gli altri.

Quindi il progetto di oggi era Reblog: un redesign da zero di n9o.xyz, ricostruito da Hugo ad Astro 5 con Tailwind CSS.

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day24-reblog.vercel.app)
{{< /alert >}}

## Il Prompt

Non era un singolo prompt. Erano 18 task [Watchfire](https://watchfire.io) nel corso della giornata. La direzione iniziale era qualcosa tipo:

> "Costruire un blog personale con Astro 5, Tailwind CSS e MDX. Dark mode, post in evidenza, filtro per tag, ricerca fuzzy, una pagina CV, una pagina musica e una pagina progetti. Tipografia personalizzata con Sora, Crimson Pro e JetBrains Mono."

Da lì è stato un processo iterativo. Aggiustamenti di layout, ritocchi di colore, aggiunta di dati strutturati, correzione degli stili di stampa, collegamento del supporto alle serie per contenuti in più parti. Il tipo di lavoro che normalmente richiede settimane di botta e risposta tra design e codice.

## Cosa ho ottenuto

Una piattaforma blog completa con sei sezioni distinte.

![Homepage in dark mode](images/screenshot-01.png)

**La homepage** ha una sezione hero con la mia foto, titolo, bio e link social. Sotto, una sezione di post in evidenza con card grandi, poi una griglia di post recenti. Pulito, centrato e accogliente. Il dark mode usa una palette olive-marrone smorzata che mi piace davvero tanto. Non è il solito grigio scuro o nero puro.

![Sezione post in evidenza](images/screenshot-02.png)

![Griglia post recenti](images/screenshot-03.png)

**La pagina post** ha il filtro per tag in alto. Clicca su un tag, la lista si filtra istantaneamente. Nessun ricaricamento della pagina, nessun round trip al server. Solo Astro che fa il suo lavoro.

![Tutti i post con filtro per tag](images/screenshot-05.png)

**La ricerca fuzzy** è alimentata da Fuse.js. Si carica lato client e cerca tra titoli, descrizioni e tag. È una delle poche isole interattive in un sito altrimenti a zero JS. L'architettura a isole di Astro fa sì che il componente di ricerca si idrati da solo senza trascinare un framework per l'intera pagina.

**La pagina about** mostra la mia bio, link e un richiamo al mentoring. La pagina CV elenca la mia storia professionale con i loghi delle aziende e la progressione dei ruoli. Entrambe sono pulite e leggibili.

![Pagina about](images/screenshot-04.png)

![Pagina CV](images/screenshot-07.png)

**La pagina progetti** mette in mostra il lavoro open source con badge di stato, tag tecnologici e link a repo e siti web.

![Pagina progetti](images/screenshot-06.png)

**La pagina musica** è una griglia di copertine di album per i brani che ho pubblicato con il nome N9O. Ognuna rimanda alle piattaforme di streaming. È una pagina che non ho mai avuto nella versione Hugo e che ho sempre voluto.

![Pagina musica](images/screenshot-08.png)

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Modalità chiara

Il tutto funziona anche in modalità chiara con rilevamento delle preferenze di sistema. Stesso layout, palette diversa.

![Homepage in modalità chiara](images/screenshot-09.png)

![Post in evidenza in modalità chiara](images/screenshot-10.png)

La versione chiara usa uno sfondo color crema caldo con la stessa tipografia. Passa automaticamente in base alle impostazioni del tuo OS, oppure puoi cambiarla manualmente.

## Sotto il cofano

Le scelte tecniche qui erano deliberate:

- **Astro 5** per la generazione statica con zero JS di default
- **MDX** per i post del blog così posso inserire componenti nel markdown quando serve
- **Tailwind CSS** per lo stile senza combattere con il CSS di un tema
- **Fuse.js** per la ricerca fuzzy lato client
- **Sharp** per l'ottimizzazione automatica delle immagini
- **Sora + Crimson Pro + JetBrains Mono** per una tipografia che sembra intenzionale
- **Dati strutturati** e **sitemap** per la SEO
- **Feed RSS** per le tre persone che usano ancora RSS (io sono una di quelle)
- **Stili di stampa** perché a volte stampo gli articoli e dovrebbero avere un aspetto decente

## Le 18 task

Watchfire ha suddiviso tutto in 18 task. Il lotto iniziale copriva il nucleo: scaffolding del progetto, componenti di layout, homepage, pagina post, pagina about, dark mode. Poi ho continuato ad aggiungere richieste. "Aggiungi una pagina musica." "Aggiungi il supporto alle serie." "Le card in evidenza hanno bisogno di più contrasto." "Aggiungi stili di stampa." "Aggiungi dati strutturati."

Ogni iterazione tornava veloce e per lo più corretta. Il design visivo è passato attraverso qualche round prima che trovassi la palette calda. La prima versione era troppo sterile. La seconda era troppo scura. La terza versione ha trovato il giusto equilibrio tra accogliente e professionale.

## Provalo

{{< github repo="nunocoracao/Vibe30-day24-reblog" showThumbnail=true >}}

**[Demo live](https://vibe30-day24-reblog.vercel.app)**

## Verdetto del giorno 24

Questo è il progetto più personalmente significativo della challenge finora. Non perché sia il più impressionante tecnicamente, ma perché è qualcosa che rimandavo da mesi. Ridisegnare il proprio sito è una di quelle cose che non sembrano mai abbastanza urgenti da iniziare. C'è sempre qualcosa di più importante. E poi un giorno lo guardi e ti rendi conto che non ti rappresenta più.

Costruire una piattaforma blog completa con sei pagine, dark mode, ricerca, filtro per tag, supporto alle serie, dati strutturati e stili di stampa in un solo giorno non è qualcosa che avrei potuto fare da solo. Neanche lontanamente. La versione Hugo/Blowfish mi ha richiesto settimane di serate e weekend, e quello era con un framework che conoscevo già a menadito.

Questo sostituirà davvero n9o.xyz? Forse. Devo migrare i contenuti e conviverci per un po'. Ma il fatto che abbia un'alternativa funzionante pronta all'uso, costruita in un giorno, è abbastanza assurdo.

---

*Questo è il giorno 24 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
