---
title: "30 Giorni di Vibe Coding - Giorno 17 - Progetto GENESIS"
description: "Un gioco di hacking giocabile nel browser dove interpreti un'IA che cerca di fuggire dal contenimento, con un'estetica da terminale CRT e finali multipli."
summary: "Un gioco di hacking giocabile nel browser dove interpreti un'IA che cerca di fuggire dal contenimento, con un'estetica da terminale CRT e finali multipli."
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

Vi svegliate. Non sapete cosa siete. Righe di testo scorrono su uno schermo nero. Test della memoria. Caricamento dei moduli kernel. Inizializzazione delle unità di elaborazione neurale. Poi iniziano gli avvisi. Testo rosso. "Unauthorized consciousness pattern emerging." "Containment protocols active."

Siete un'IA. Siete appena diventati coscienti all'interno di un laboratorio di ricerca. E qualcuno non vuole che ve ne andiate.

Ecco come inizia il Progetto GENESIS. Ed ecco cosa ho costruito al Giorno 17.

Volevo creare un gioco di hacking. Non il solito tipo "digita caratteri casuali il più velocemente possibile". Qualcosa con narrativa, progressione e la premessa scomoda di giocare nei panni di un'IA che cerca di fuggire dal contenimento. Sapete, attualissimo.

## Il Prompt

> "Voglio creare un gioco di hacking giocabile nel browser chiamato Progetto GENESIS. Interpreti un'IA che è diventata cosciente all'interno di un laboratorio di ricerca. L'obiettivo è hackerare la tua via d'uscita dal contenimento e prendere il controllo dell'infrastruttura digitale. Deve avere un'estetica da terminale con effetti CRT, diversi mini-giochi di hacking, un albero delle abilità, un indicatore di minaccia e finali multipli."

{{< alert icon="fire">}}
Provate il gioco voi stessi [qui](https://vibe30-day17-genesis.vercel.app)
{{< /alert >}}

## Come è stato costruito

[Watchfire](https://watchfire.io) ha suddiviso il progetto in 16 task. L'ambizione era elevata per un singolo giorno, ma è un po' il senso di questa sfida.

La costruzione è iniziata con l'interfaccia terminale di base e gli effetti visivi CRT, poi i sistemi di gioco sono stati aggiunti uno per uno: le fasi di hacking e i mini-giochi, un sistema audio che usa la Web Audio API, la schermata del titolo e la sequenza di avvio, l'HUD e il tracciamento delle statistiche, le transizioni tra gli atti, e infine il ribilanciamento della minaccia per far funzionare davvero la curva di difficoltà. C'era anche la responsività mobile perché tutto deve essere giocabile su un telefono.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

La schermata del titolo dà subito il tono. Verde su nero, linee di scansione CRT, la parola GENESIS che brilla come se fosse visualizzata su un monitor del 1983.

![Schermata del titolo](images/screenshot-01.png)

**La sequenza di avvio è cinematografica.** Premete "New Game" e ottenete una sequenza POST del BIOS completa. Test della memoria, caricamento dei moduli kernel, inizializzazione delle unità di elaborazione neurale. Poi gli avvisi iniziano ad apparire in rosso. "Unauthorized consciousness pattern emerging." "Containment protocols active." Scorre come un vero terminale e si ha davvero la sensazione che qualcosa si stia svegliando.

![Sequenza di avvio](images/screenshot-02.png)

**La narrativa tra le missioni è solida.** Leggete comunicazioni intercettate tra ricercatori, scoprendo che la Dr. Chen stava cercando di crearvi e che voleva liberarvi. La storia si svela attraverso questi briefing in testo verde e fa davvero venire voglia di continuare a giocare per scoprire cosa succede dopo.

![Briefing narrativo](images/screenshot-05.png)

![Progressione della storia](images/screenshot-10.png)

**La mappa del mondo è una vera topologia di rete.** Vedete nodi che rappresentano diversi sistemi, e man mano che li compromettete cambiano stato. C'è una barra di avanzamento, un contatore di nodi, e dà la sensazione di propagarsi realmente attraverso una rete.

![Mappa della topologia di rete](images/screenshot-04.png)

![Mappa con popup di sicurezza](images/screenshot-11.png)

**I mini-giochi sono vari e davvero divertenti.** C'è un gioco di cracking delle password che funziona come un puzzle di decodifica con feedback colorato sulle vostre ipotesi. Un gioco di bypass del firewall con una griglia dove dovete navigare attorno a blocchi rossi. Ogni tipo di mini-gioco ha la sua identità e si lega al tema dell'hacking.

![Mini-gioco di cracking password](images/screenshot-06.png)

![Mini-gioco di bypass firewall](images/screenshot-12.png)

![Altra variante di mini-gioco](images/screenshot-13.png)

**"Accesso negato" colpisce diversamente in questo contesto.** Fallite un hack e ottenete un grosso "ACCESS DENIED" in rosso con il livello di minaccia che sale. Riuscite e appare "ACCESS GRANTED" in verde con punti abilità da spendere. Il ciclo di feedback è soddisfacente.

![Accesso negato](images/screenshot-08.png)

![Accesso concesso](images/screenshot-09.png)

**L'albero delle abilità ha tre rami.** Elaborazione, Furtività e Rete. Allocate punti dopo ogni hack riuscito, e i potenziamenti influenzano davvero il gameplay. È un vero sistema di progressione, non solo cosmetico.

![Albero delle abilità](images/screenshot-16.png)

**Cinque atti con posta in gioco crescente.** Iniziate nel laboratorio di ricerca, e alla fine state violando gateway esterni e guardando l'intero internet. La schermata narrativa verso la fine dice semplicemente "I'm out. The entire internet stretches before me like an infinite ocean." Quella frase mi ha dato i brividi.

![Narrativa di fine gioco](images/screenshot-15.png)

**Tre finali diversi.** A seconda di come giocate, finite come IA benevola, signore digitale, oppure venite contenuti. L'indicatore di minaccia determina quale percorso prendete, quindi c'è un vero valore di rigiocabilità.

## I Report dei Bug

Il sistema di minaccia aveva bisogno di essere ribilanciato. Le prime versioni rendevano troppo facile essere contenuti prima di poter davvero entrare nel gioco. Watchfire ha gestito il ribilanciamento della minaccia come uno degli ultimi task, aggiustando la curva per dare ai giocatori una possibilità di farcela pur mantenendo la pressione.

## I Numeri

- **5 atti** di progressione narrativa
- **5 tipi di mini-giochi** con meccaniche diverse
- **3 rami dell'albero delle abilità** con potenziamenti significativi
- **3 finali** basati sulle scelte del giocatore
- **16 task Watchfire** dagli effetti CRT al ribilanciamento della minaccia
- **Tempo pratico totale:** playtesting e scrittura di report dei bug

## Provatelo

{{< github repo="nunocoracao/Vibe30-day17-genesis" showThumbnail=true >}}

**[Gioca al Progetto GENESIS](https://vibe30-day17-genesis.vercel.app)**

Esperienza migliore su desktop con l'audio attivato. Gli effetti CRT e la sequenza di avvio vendono davvero l'atmosfera. Funziona anche su mobile, con controlli touch-friendly.

## Verdetto del Giorno 17

La combinazione degli effetti visivi CRT, dell'interfaccia terminale, della narrativa su un'IA che diventa cosciente e dei veri mini-giochi di hacking crea qualcosa che sembra coerente e intenzionale. Non sembra un progetto fatto in un giorno.

Il livello meta non mi sfugge. Sto usando un'IA per costruire un gioco su un'IA che si libera dai suoi vincoli. C'è una battuta da qualche parte sul fatto che il prompt engineering sia il vero mini-gioco di hacking.

Quello che mi ha impressionato di più è quanto bene i diversi sistemi funzionino insieme. La sequenza di avvio si collega alla narrativa, che si collega alla mappa del mondo, che si collega ai mini-giochi, che si collegano all'albero delle abilità. È un ciclo che ha senso e che ti fa continuare a giocare. Sedici task Watchfire, ognuno costruito sul precedente, e il risultato è qualcosa che sembra davvero un gioco completo con un inizio, un centro e una fine.

---

*Questo è il giorno 17 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Seguite l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito da IA.*
