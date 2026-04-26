---
title: "30 Days of Vibe Coding - Giorno 20 - MoodBoard"
description: "Una mood board collaborativa dove chiunque può fissare immagini, link e note su un canvas condiviso con aggiornamenti in tempo reale."
summary: "Una mood board collaborativa dove chiunque può fissare immagini, link e note su un canvas condiviso con aggiornamenti in tempo reale."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-20", "firebase", "collaboration", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 20
seriesOpened: false
date: 2026-04-25
draft: false
#type: "hidden"
---

Giorno 20. Volevo un canvas condiviso dove un gruppo di persone può lanciare immagini, link e note su un muro e semplicemente vedere cosa attacca. Letteralmente.

## Il Prompt

> "Costruisci un'app di mood board collaborativa. Chiunque abbia il link può fissare immagini, note di testo e link su un canvas condiviso. Sincronizzazione in tempo reale, autenticazione anonima, layout libero."

Questo era il punto di partenza. [Watchfire](https://watchfire.io) l'ha suddiviso in 7 task che l'hanno portato da uno scheletro Firebase di base a una bacheca collaborativa completa.

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day20-moodboard.vercel.app)
{{< /alert >}}

## Come è stato costruito

Sette task, ognuno aggiungendo un nuovo pezzo:

1. Sincronizzazione in tempo reale Firebase come fondamento
2. Tre tipi di pin: post-it testuali, upload di immagini e card di link con anteprime OG
3. Trascinamento per disporre i pin su un canvas libero
4. Tag colore sui pin per raggruppare visivamente
5. Zoom e panoramica più ridimensionamento dei pin per il controllo del canvas
6. Blocco del board per permettere al creatore di congelare un board in sola lettura, ed esportazione in PNG
7. Presenza dei cursori per vedere dove si trovano gli altri, più una passata di redesign visivo

La progressione aveva senso. Non puoi trascinare i pin finché non esistono, e non puoi preoccuparti del polish visivo finché le interazioni di base non funzionano.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

Questo ha funzionato subito.

![Pagina iniziale MoodBoard](images/screenshot-02.png)

**La pagina iniziale dà il tono.** Logo grande, pin d'esempio sparsi sullo sfondo, un solo pulsante per creare un board. Niente registrazione, niente account, zero attrito. Clicchi "Create New Board" e sei dentro.

![Board vuoto pronto per i pin](images/screenshot-03.png)

**Un board appena creato è un canvas bianco.** Sfondo scuro con una griglia di punti sottile. La toolbar è minimale, solo opzioni per bloccare, esportare e copiare l'URL di condivisione in alto a destra. Il pulsante d'azione flottante in basso a destra apre il selettore del tipo di pin.

![Selettore tipo di pin](images/screenshot-04.png)

**Tre tipi di pin coprono l'essenziale.** Testo per i post-it, immagine per gli upload e link per le card URL. Premi il pulsante più, scegli il tipo e posizionalo sul canvas. Abbastanza semplice da capire per chiunque abbia il link, senza istruzioni.

![Post-it testuale sul canvas](images/screenshot-05.png)

**I post-it sembrano veri post-it.** Hanno quel feeling leggermente inclinato, simile alla carta. Puoi scrivere quello che vuoi, scegliere un colore e trascinarli dove vuoi. Il color pesca su sfondo scuro rende sorprendentemente bene.

![Dialogo upload immagine](images/screenshot-06.png)

**L'upload di immagini è semplice.** Appare un modale, scegli un file e viene caricato su Firebase Storage. L'immagine appare come un pin sul canvas che puoi trascinare e ridimensionare come tutto il resto.

![Board con contenuti misti](images/screenshot-07.png)

**Mescola tutto insieme e inizia a sembrare una vera mood board.** Immagini, post-it, dimensioni diverse. Puoi trascinare le cose per trovare disposizioni che funzionano. Il canvas libero significa che niente è bloccato su una griglia, quindi ottieni quel feeling da collage organico.

![Board completo con card di link](images/screenshot-08.png)

**Le card dei link recuperano i metadati OG.** Incolla un URL e vengono recuperati titolo, descrizione e immagine di anteprima. La card di Watchfire, quella di Blowfish, quella di OpenClaw si sono tutte renderizzate bene con il loro branding intatto. Rendono molto meglio di un semplice URL grezzo incollato.

## I Report dei Bug

La collaborazione in tempo reale ha sempre dei casi limite:

- La presenza dei cursori a volte tremolava quando più utenti si muovevano rapidamente
- Upload di immagini molto grandi potevano rendere il canvas lento finché l'immagine non finiva di caricarsi
- L'esportazione PNG a volte mancava i pin che erano lontani dal centro della viewport

Niente che rompesse l'esperienza, ma il tipo di problemi di rifinitura che vorresti sistemare prima di distribuire questo per un uso reale.

## I Numeri

- **7 task Watchfire** dal setup Firebase al redesign visivo
- **Stack Firebase:** Auth Anonima, Firestore per la sincronizzazione in tempo reale, Storage per gli upload di immagini
- **Next.js 15 + Tailwind CSS 4** sul frontend
- **html2canvas** per la funzionalità di esportazione PNG
- **Tre tipi di pin:** testo, immagine, link (con anteprima OG)
- **Funzionalità collaborative:** sincronizzazione in tempo reale, presenza dei cursori, blocco del board

## Provalo

{{< github repo="nunocoracao/Vibe30-day20-moodboard" showThumbnail=true >}}

**[Apri MoodBoard](https://vibe30-day20-moodboard.vercel.app)**

Crea un board e condividi il link. Chiunque può fissare qualcosa.

## Verdetto del Giorno 20

Due terzi della challenge completati. Il giorno 10 era un clone di Miro senza collaborazione. Il giorno 20 è una mood board con sincronizzazione in tempo reale completa. Sembra progresso.

L'integrazione Firebase è quello che fa funzionare questo progetto. L'auth anonima significa zero attrito per unirsi a un board. I listener in tempo reale di Firestore fanno apparire i pin istantaneamente per tutti. La presenza dei cursori significa che puoi vedere che qualcun altro è davvero lì con te. Queste sono le funzionalità che trasformano un canvas solitario in uno spazio condiviso.

Quello che mi ha sorpreso di più sono state le card dei link. Incollare un URL e ottenere una card formattata bene con il branding del sito, la descrizione e l'immagine di anteprima ha reso i board immediatamente più ricchi. Quella singola funzionalità l'ha trasformato da "un posto dove mettere dei post-it" a qualcosa che useresti davvero per raccogliere e condividere riferimenti per un progetto.

Sette task era uno scope stretto per un'app collaborativa in tempo reale. Ma ogni task si è costruito in modo pulito sul precedente, e il prodotto finale sembra coeso. Niente male per il giorno 20.

---

*Questo è il giorno 20 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
