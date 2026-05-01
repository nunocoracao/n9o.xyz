---
title: "30 Giorni di Vibe Coding - Giorno 26 - PixelForge"
description: "Un canvas collaborativo di pixel art con disegno in tempo reale, diverse dimensioni di griglia e una suite completa di strumenti creativi."
summary: "Un canvas collaborativo di pixel art con disegno in tempo reale, diverse dimensioni di griglia e una suite completa di strumenti creativi."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-26", "pixel-art", "firebase", "collaboration"]
series: ["30 Days of Vibe Coding"]
series_order: 26
seriesOpened: false
date: 2026-05-01
draft: false
#type: "hidden"
---

Giorno 26. Volevo costruire qualcosa di collaborativo, qualcosa dove le persone potessero davvero creare insieme in tempo reale. Così ho scelto un canvas di pixel art.

## Il Prompt

Il punto di partenza era semplice:

> "Costruisci un canvas collaborativo di pixel art dove più utenti possono disegnare insieme in tempo reale."

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day26-pixelforge.vercel.app)
{{< /alert >}}

## Come è stato costruito

[Watchfire](https://watchfire.io) ha suddiviso il tutto in 13 task, che sono tanti per un progetto di un solo giorno. Ma gli editor di pixel art hanno un numero sorprendente di parti in movimento una volta che inizi a pensare a tutti gli strumenti che le persone si aspettano.

I primi task coprivano le fondamenta: configurare il canvas con Firebase Realtime Database per la sincronizzazione, aggiungere dimensioni di griglia selezionabili (16x16, 32x32, 64x64), e costruire una palette di 32 colori con un selettore di colori personalizzato. Da lì si è passati agli strumenti di disegno veri e propri: penna, gomma e riempimento.

E poi ha continuato ad andare avanti. Supporto annulla/ripristina. Una modalità simmetria per creare design speculari. Strumenti forma per rettangoli e linee. Dimensioni del pennello regolabili. Template per il canvas così non devi partire da zero ogni volta. Una funzionalità di timelapse che riproduce come un canvas è stato disegnato. Un feed di attività che mostra cosa stanno facendo gli altri utenti. Uno strumento di selezione per spostare e copiare regioni. Un sistema a 2 livelli con livelli primo piano e sfondo. E infine, opzioni di esportazione per ottenere la tua arte in PNG in varie dimensioni.

Tredici task. Questa è un'applicazione di disegno completa.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![Home page di PixelForge con template e canvas recenti](images/screenshot-01.png)

La landing page dava già il tono. Mostra dei template di partenza (cuore, spada, faccina, albero) e una galleria di canvas recenti creati da altri utenti. Puoi entrare in qualsiasi di essi o crearne uno nuovo da zero.

![Editor del canvas con barra degli strumenti e pannello livelli](images/screenshot-02.png)

In alto hai la barra degli strumenti completa: penna, gomma, riempimento, linea, rettangolo, cerchio e strumenti di selezione. A sinistra c'è la palette colori espansa con il selettore personalizzato. A destra c'è il pannello livelli con i livelli primo piano e sfondo, ciascuno con toggle di visibilità.

![Pixel art in fase di disegno sul canvas](images/screenshot-03.png)

Il disegno è reattivo. Ogni clic su un pixel si sincronizza tramite Firebase, quindi chiunque si trovi sullo stesso URL del canvas vede i cambiamenti immediatamente. Le linee della griglia aiutano a restare precisi, e il livello di zoom si adatta bene alle diverse dimensioni della griglia.

![Riproduzione del timelapse](images/screenshot-04.png)

La funzionalità timelapse è una di quelle cose che non mi aspettavo funzionasse così bene. Registra ogni posizionamento di pixel e può riprodurre l'intero processo di disegno dall'inizio alla fine. Hai controlli di riproduzione e opzioni di velocità.

![Timelapse in azione con un canvas colorato](images/screenshot-05.png)

Guardare un pezzo complesso prendere forma pixel per pixel è stranamente soddisfacente. Serve anche come un bel modo per vedere come altre persone approcciano i loro disegni.

![Dialogo di esportazione con opzioni di formato e dimensione](images/screenshot-06.png)

Il dialogo di esportazione ti dà opzioni concrete. Puoi impostare uno sfondo trasparente, scegliere tra diverse dimensioni di output (1x, 2x, 4x, 8x), ed esportare come PNG, SVG, o copiare direttamente negli appunti. Per uno strumento di pixel art, avere l'upscaling integrato è importante dato che nessuno vuole un PNG 16x16 a dimensione reale.

![Template cuore disegnato con ombreggiature](images/screenshot-07.png)

I template sono un bel tocco. Questo template cuore viene pre-caricato così puoi iniziare ad aggiungere dettagli e ombreggiature subito invece di disegnare il contorno da zero. Il sistema a 2 livelli significa che puoi tenere il template sul livello di sfondo e dipingere sul primo piano senza preoccuparti di rovinare la forma base.

![Galleria dei canvas recenti](images/screenshot-09.png)

La sezione dei canvas recenti sulla home page funziona come una galleria della community. Puoi vedere cosa hanno creato gli altri, e ogni canvas mostra la sua dimensione di griglia. Cuori, facce, spade, alberi... le persone gravitano naturalmente verso gli stessi tipi di soggetti nella pixel art.

## I Report dei Bug

I principali problemi che ho riscontrato durante i test:

- Il riempimento sulle griglie più grandi (64x64) poteva risultare lento quando ogni pixel modificato veniva sincronizzato individualmente. Servivano aggiornamenti in batch.
- La modalità simmetria non si allineava sempre correttamente sulle griglie di dimensioni pari all'inizio.
- Il disegno touch su mobile aveva bisogno di lavoro per impedire alla pagina di scorrere mentre cercavi di disegnare.
- Il cambio di livello non era sempre evidente visivamente, quindi era facile disegnare sul livello sbagliato senza rendersene conto.

## I Numeri

- **13 task Watchfire** dal canvas iniziale alle opzioni di esportazione
- **3 dimensioni di griglia** con sincronizzazione in tempo reale su tutte
- **Palette di 32 colori** più selettore colori personalizzato
- **8 strumenti di disegno** inclusi forme e selezione
- **Sistema a 2 livelli** con visibilità indipendente
- **Firebase Realtime Database** che gestisce tutta la collaborazione

## Provalo

{{< github repo="nunocoracao/Vibe30-day26-pixelforge" showThumbnail=true >}}

**[Prova PixelForge](https://vibe30-day26-pixelforge.vercel.app)**

Crea un canvas e condividi il link. Chiunque abbia l'URL può disegnare con te.

## Verdetto del Giorno 26

Un canvas di pixel art sembra semplice, ma una volta che aggiungi livelli, simmetria, template, timelapse e collaborazione in tempo reale, ti ritrovi davanti a uno strumento creativo legittimo.

L'integrazione Firebase è il cuore di tutto. Ogni cambiamento di pixel passa attraverso il Realtime Database, il che significa che più persone possono genuinamente disegnare sullo stesso canvas contemporaneamente. Niente polling, niente pulsante aggiorna, solo aggiornamenti in diretta. Tutti i 13 task si sono uniti in qualcosa di coeso partendo da un singolo prompt.

Sostituirà Aseprite o Piskel? No. Ma per sessioni rapide di pixel art collaborativa, fa il suo lavoro. E la sola riproduzione del timelapse vale la pena provarlo. C'è qualcosa di davvero divertente nel guardare una griglia vuota trasformarsi in arte un pixel alla volta.

---

*Questo è il giorno 26 di [30 Giorni di Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
