---
title: "30 Days of Vibe Coding - Giorno 5 - Breakout"
description: "Un classico gioco arcade Breakout con 5 livelli, power-up, punteggio combo ed effetti particellari, costruito con TypeScript e HTML5 Canvas."
summary: "Un classico gioco arcade Breakout con 5 livelli, power-up, punteggio combo ed effetti particellari, costruito con TypeScript e HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-05", "typescript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 5
seriesOpened: false
date: 2026-04-10
draft: false
---

Giorno 5. Un altro classico arcade. Questa volta volevo vedere cosa succede chiedendo di fare Breakout.

## Il Prompt

> "Voglio creare un gioco arcade in stile Breakout/Arkanoid con più livelli, power-up, punteggio combo e fisica fluida"

Un po' più specifico rispetto ad alcuni dei miei prompt precedenti. Arrivato al giorno 5 stavo imparando che essere leggermente più intenzionale con le funzionalità desiderate fin dall'inizio evita di dover aprire segnalazioni di bug in seguito.

## Come È Stato Costruito

Ho usato [Watchfire](https://watchfire.io) anche per questo. Lo si intuisce dal package.json, che viene automaticamente rinominato con il prefisso `watchfire-0000`. Ho fornito il prompt e lui ha gestito il resto. L'intero gioco vive in un singolo componente React che avvolge un HTML5 Canvas, un pattern che ho visto diverse volte ormai in queste build quotidiane. Non è l'architettura più pulita, ma funziona e si pubblica.

Lo stack tecnologico è Next.js con TypeScript e Tailwind CSS. Il rendering del gioco è interamente basato su Canvas, con React che gestisce l'interfaccia utente sovrapposta per i menu e le schermate di pausa.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa Ho Ottenuto

Un clone di Breakout completamente giocabile, con molto più polish di quanto mi aspettassi.

![Inizio livello 1 con griglia di mattoni completa](images/screenshot-01.png)

**Cinque livelli con pattern unici.** "L'Inizio" è una griglia standard completa. "Formazione a Diamante" dispone i mattoni a forma di diamante. "Fortezza" costruisce muri con spazi vuoti. "Onde" alterna le righe. "La Sfida Finale" è un pattern denso a strati. Ogni livello aumenta il moltiplicatore di velocità della pallina, passando da 1.0x fino a 1.5x.

![Partita in corso con scia della pallina e mattoni che si rompono](images/screenshot-02.png)

**I power-up fanno davvero la differenza.** Quattro tipi cadono dai mattoni rotti: paddle largo (10 secondi), pallina lenta (8 secondi), multi-palla (si divide in più palline finché non le perdi) e vita extra (istantanea). I mattoni speciali "super" hanno il doppio della probabilità di rilascio. I power-up scendono come sfere luminose e li raccogli con il tuo paddle.

![Pulizia dei mattoni con power-up attivi](images/screenshot-03.png)

**Il sistema combo aggiunge profondità.** I colpi concatenati costruiscono un moltiplicatore di punteggio fino a 3x. Il combo decade dopo 2 secondi senza colpi, quindi sei incentivato a mantenere la pallina in movimento veloce e a colpire i mattoni in rapida successione. È una cosa piccola, ma cambia il modo in cui giochi.

![Livello avanzato con layout di mattoni rado](images/screenshot-04.png)

**Effetti visivi ovunque.** Esplosioni di particelle quando i mattoni si rompono. Un effetto scia sulla pallina. Scuotimento dello schermo su certi colpi. Effetti flash. Uno sfondo con stelle scintillanti. I mattoni hanno una combinazione di colori a gradiente neon con file rosa acceso, arancione, giallo, verde e ciano. Nulla di tutto questo era strettamente necessario per un gioco Breakout, ma rende il tutto vivo.

![Livello 2 con formazione a diamante](images/screenshot-05.png)

**Tre tipi di mattoni.** I mattoni normali si rompono con un colpo. I mattoni resistenti richiedono più colpi (hanno un indicatore HP visibile). I mattoni super sono ancora più duri e hanno una probabilità maggiore di rilasciare power-up. I pattern dei livelli mescolano questi tipi per creare sfide diverse.

## I Bug Report

Onestamente, questo è stato abbastanza pulito. La fisica si sentiva giusta fin dall'inizio, il movimento del paddle era fluido sia con mouse che con tastiera, e i livelli si caricavano correttamente. Nessun bug significativo da segnalare in questa build.

## I Numeri

- **5 livelli** con pattern di mattoni unici e difficoltà crescente
- **4 tipi di power-up** con durate temporizzate
- **~2.300 righe di TypeScript** in un singolo componente di gioco
- **3 tipi di mattoni** (normale, resistente, super)
- **3 metodi di controllo:** tastiera, mouse e touch

## Provalo

{{< github repo="nunocoracao/Vibe30-day05-breakout" showThumbnail=true >}}

**[Gioca a Breakout](https://vibe30-day05-breakout.vercel.app)**

Mouse o frecce direzionali per muovere il paddle. Spazio o clic per lanciare la pallina. P o Escape per mettere in pausa.

## Verdetto del Giorno 5

Cinque giorni dentro e sto notando uno schema. Questi giochi basati su Canvas sono un punto di forza per la programmazione assistita dall'AI. L'ambito è chiaro, le regole sono ben definite, e c'è un modo immediato per verificare se funziona: lo giochi e basta.

Quello che mi ha sorpreso qui è stato il sistema di particelle e il polish visivo. Non ho chiesto lo scuotimento dello schermo, né la scia della pallina né lo sfondo stellato. L'AI ha semplicemente deciso che il gioco si sarebbe sentito meglio con queste cose, e aveva ragione. Anche il sistema combo è stato un bel tocco. Trasforma un semplice gioco di "rimbalza la pallina, rompi i mattoni" in qualcosa in cui stai effettivamente pensando all'angolo e al ritmo.

Gareggerà con il vero Arkanoid? No. Ma è un gioco completo con più livelli, power-up e un sistema di punteggio che ti fa davvero venir voglia di rigiocare i livelli. Costruito in un giorno, da un singolo prompt.

---

*Questo è il giorno 5 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Seguimi mentre pubblico 30 progetti in 30 giorni usando la programmazione assistita dall'AI.*
