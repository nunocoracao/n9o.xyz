---
title: "30 Giorni di Vibe Coding - Giorno 13 - GitFolio"
description: "Un generatore di portfolio GitHub che trasforma qualsiasi username in un sito portfolio curato con 5 template e 7 temi di colore."
summary: "Un generatore di portfolio GitHub che trasforma qualsiasi username in un sito portfolio curato con 5 template e 7 temi di colore."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-13", "github", "portfolio", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 13
seriesOpened: false
date: 2026-04-18
draft: false
#type: "hidden"
---

Giorno 13. E se potessi trasformare qualsiasi profilo GitHub in un bel sito portfolio senza scrivere una singola riga di codice?

## Il Prompt

> "Costruisci un generatore di portfolio GitHub. Inserisci un username, ottieni un portfolio curato con statistiche, repo, linguaggi e attività. Template multipli, temi di colore multipli, esportazione in HTML."

## Come è stato costruito

Watchfire ha suddiviso il tutto in 19 task. Il lavoro principale è iniziato con l'integrazione dell'API GitHub e il recupero di tutti i dati che vorresti in un portfolio: info del profilo, repo, attività di contribuzione, linguaggi, organizzazioni. Da lì ha costruito il sistema di template, il motore dei temi, e tutte le funzionalità di esportazione e condivisione.

La lista dei task copriva un sacco di terreno: cinque template di portfolio (Minimal, Developer Card, Creative/Bento Grid, Corporate/Showcase, e un tema Hacker/Terminal), sette temi di colore, colori accent personalizzati, modalità stampa e PDF, rilevamento automatico delle competenze, guide al deploy, esportazione README, e un generatore di card per la condivisione social. È un set di funzionalità sorprendentemente ricco per qualcosa che gira interamente nel browser senza backend.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

La landing page ha già un aspetto curato. Dark mode di default, tipografia pulita, un esplicativo in tre passaggi, e un'anteprima di tutti i template e temi direttamente nella homepage.

![Landing page](images/screenshot-01.png)

![Tre passaggi per il tuo portfolio](images/screenshot-02.png)

**Cinque template, ognuno con una personalità distinta.** Showcase è l'opzione completa con un layout a bento grid. Developer Card è compatto e va dritto al punto. Bento Grid punta sul look a card asimmetriche. Minimal riduce tutto alla tipografia. E Terminal renderizza il tutto come un'interfaccia a riga di comando, completo di arte ASCII e font monospaced.

![Selettore di template e tema](images/screenshot-03.png)

**Sette temi di colore più accent personalizzati.** Midnight, Ocean, Forest, Sunset, Rose, Slate, e un'opzione personalizzata dove scegli il tuo colore accent. La landing page ha persino una variante in modalità chiara.

![Landing in modalità chiara](images/screenshot-04.png)

**I portfolio generati sono pieni di dati.** Statistiche con contatori animati, heatmap delle contribuzioni, distribuzione dei linguaggi con un grafico a barre impilate, migliori repository, attività recente, organizzazioni, link social. Tutto recuperato dall'API pubblica di GitHub senza alcuna autenticazione richiesta.

![Template Showcase con statistiche](images/screenshot-05.png)

![Template Minimal](images/screenshot-06.png)

**Il pannello di personalizzazione è completo.** Puoi attivare e disattivare le singole sezioni, cambiare tema e template in tempo reale, sovrascrivere il testo della bio, e vedere le modifiche riflesse istantaneamente. Tutto avviene lato client quindi non c'è caricamento tra un cambio e l'altro.

![Pannello di personalizzazione](images/screenshot-07.png)

**Il template Bento Grid è fantastico.** Questo è quello che mi ha sorpreso. Dispone info del profilo, statistiche, repo in evidenza, attività recente e linguaggi in una griglia di card asimmetrica che sembra un vero progetto di design.

![Template Bento Grid](images/screenshot-08.png)

**Il template Terminal è pazzesco.** Renderizza l'intero portfolio come se stessi eseguendo comandi in un terminale. Le info del profilo appaiono come output in stile fetch, le statistiche si mostrano come risposte CLI, i repo si elencano come voci di directory. Ha persino un cursore lampeggiante.

![Template Terminal](images/screenshot-09.png)

**Guide al deploy integrate.** Una volta esportato il portfolio in HTML, una modale di deploy ti guida passo passo per hostarlo su Netlify Drop, GitHub Pages, o Vercel. Istruzioni passo dopo passo con link a ogni piattaforma. Questo è il tipo di tocco finale che trasforma una demo in qualcosa che la gente può davvero usare.

![Modale di deploy - Netlify](images/screenshot-10.png)

![Modale di deploy - GitHub Pages](images/screenshot-11.png)

![Modale di deploy - Vercel](images/screenshot-12.png)

## I Bug

L'API pubblica di GitHub ti limita a 60 richieste all'ora senza autenticazione, e ogni generazione di portfolio usa circa 4 richieste. Durante i test ho raggiunto il rate limit diverse volte rigenerando rapidamente i portfolio. Non è proprio un bug, solo un vincolo da conoscere. L'app lo gestisce con grazia e ti dice di aspettare.

Il README menziona 6 temi e 4 template, ma l'app effettiva include 5 template e 7 temi. Il codice ha superato la documentazione, che è un po' la storia di tutta questa challenge.

## I Numeri

- **5 template di portfolio** con layout distinti
- **7 temi di colore** più colori accent personalizzati
- **19 task Watchfire** dall'integrazione API alle guide di deploy
- **Zero backend** richiesto, tutto gira lato client
- **4 chiamate API GitHub** per generazione di portfolio
- **Formati di esportazione:** download HTML, copia negli appunti, link condivisibile, README, e card di condivisione social

## Provalo

{{< github repo="nunocoracao/Vibe30-day13-githubportfolio" showThumbnail=true >}}

**[Genera il Tuo Portfolio](https://vibe30-day13-githubportfolio.vercel.app)**

Inserisci semplicemente qualsiasi username GitHub pubblico e scegli un template.

## Verdetto del Giorno 13

Questo colma un vero vuoto. La maggior parte degli strumenti per portfolio di sviluppatori richiede di impostare un intero progetto o ti vincola a un design specifico. GitFolio prende semplicemente un username e ti dà un file HTML autonomo che puoi hostare ovunque. La varietà di template è solida, il tema Terminal da solo vale la pena di provare, e le guide al deploy eliminano l'ultimo punto di attrito tra generare un portfolio e metterlo effettivamente online.

Il fatto che giri interamente nel browser senza auth, senza database e senza tracking è un bel tocco. Potresti dare questo URL a qualcuno che non ha mai toccato un terminale e potrebbe avere un sito portfolio online in cinque minuti.

Se la qualità crescente dell'output dipende dal fatto che sto migliorando nel prompting o che gli strumenti stanno diventando più bravi a capire cosa voglio, non ne sono sicuro. Probabilmente entrambe le cose.

---

*Questo è il giorno 13 di [30 Giorni di Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre lancio 30 progetti in 30 giorni usando il coding assistito da IA.*
