---
title: "30 Days of Vibe Coding - Giorno 4 - Tetris"
description: "Un classico gioco di Tetris con blocchi in stile 3D, il tema Korobeiniki, effetti sonori e tutte le funzionalità che ci si aspetta da un vero clone di Tetris."
summary: "Un classico gioco di Tetris con blocchi in stile 3D, il tema Korobeiniki, effetti sonori e tutte le funzionalità che ci si aspetta da un vero clone di Tetris."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-04", "typescript", "nextjs", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 4
seriesOpened: false
date: 2026-04-09
draft: false
#type: "hidden"
---

Giorno 4. Tutti conoscono Tetris. Questo lo rende un buon test. Sai esattamente com'è che dovrebbe sentirsi, quindi ti accorgi subito quando qualcosa non va.

## Il Prompt

> "Voglio creare un gioco Tetris basato su web con blocchi in stile 3D, musica ed effetti sonori"

## Come È Stato Costruito

Anche questo è passato attraverso [Watchfire](https://watchfire.io) come gli altri. Il nome del pacchetto nel repo racconta la storia: `watchfire-0001-initialize-nextjs-project-with`. È partito da un singolo prompt e Watchfire lo ha suddiviso in attività che coprono la configurazione del progetto, la gestione dello stato di gioco, il renderer della griglia, le definizioni dei pezzi con gli stati di rotazione, il sistema audio e i componenti dell'interfaccia.

L'architettura scelta è stata React con hook. Tre hook personalizzati gestiscono la logica principale: `useGameState` per il reducer del gioco e il loop tick, `useGameMusic` per il tema Korobeiniki, e `useSoundEffects` per tutto l'audio di gioco. Lo stato del gioco è un reducer vero e proprio con azioni per ogni movimento, rotazione, hard drop e pausa. Wall kick, eliminazione di righe, progressione di livello, punteggio. Tutti i fondamentali di Tetris.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa Ho Ottenuto

Questo mi ha davvero sorpreso.

![Tetris 3D a metà partita](images/screenshot-01.png)

**I blocchi hanno una profondità reale.** Ogni tipo di tetromino ha il proprio schema cromatico con un colore principale, un riflesso chiaro per i bordi in alto a sinistra, un'ombra scura per i bordi in basso a destra e un effetto alone. Il pezzo I è ciano con un bagliore blu tenue. Il pezzo T è viola. Il pezzo Z è rosso. Sembrano piccoli dolci 3D posati su una griglia scura. Ho chiesto "blocchi in stile 3D" e il risultato è qualcosa che sembra davvero rifinito.

**Suona il tema Korobeiniki.** La vera melodia di Tetris, generata in tempo reale tramite la Web Audio API. Nessun file audio. Crea oscillatori e nodi di guadagno al volo, esegue una melodia ad onda quadra con una linea di basso ad onda triangolare e la fa girare in loop senza interruzioni. La musica accelera man mano che sali di livello, passando da 1.0x al livello 0 a 1.5x al livello 15. Ricorda persino la tua preferenza di silenziamento in localStorage.

**Gli effetti sonori sono sorprendentemente buoni.** Ci sono 8 effetti sonori distinti: clic di movimento, whoosh di rotazione, tonfo di atterraggio del pezzo (con buffer di rumore per la texture d'impatto), arpeggio di eliminazione riga, una speciale fanfara Tetris per eliminare quattro righe, swoosh di hard drop, un triste arpeggio discendente di game over e un jingle celebrativo di aumento di livello. Tutti sintetizzati. Nessun file audio da nessuna parte.

**Ha tutte le funzionalità reali di Tetris.** Anteprima del pezzo successivo, tracciamento del punteggio con moltiplicatori appropriati (100 per singola, 300 per doppia, 500 per tripla, 800 per Tetris), progressione di livello ogni 10 righe, velocità che aumenta effettivamente, persistenza del punteggio massimo, pausa con ripresa e una schermata di game over che mostra le statistiche finali rispetto al punteggio massimo.

![Partita in pausa](images/screenshot-02.png)

**I controlli sembrano giusti.** Tasti freccia o WASD per il movimento, W o Su per ruotare in senso orario, Z per il senso antiorario, Spazio per l'hard drop, P o Escape per la pausa. Ha persino i wall kick in modo che i pezzi si allontanino dalle pareti quando ruoti vicino ai bordi.

## I Numeri

- **22 file sorgente** tra componenti, hook, costanti e tipi
- **~2.000 righe di TypeScript**
- **8 effetti sonori sintetizzati distinti** più una colonna sonora in loop completa
- **7 tipi di tetromino** con 4 stati di rotazione ciascuno (28 definizioni di forma)
- **16 livelli di velocità** da 1000ms a 100ms per tick
- **0 file audio** nell'intero progetto

## Provalo

{{< github repo="nunocoracao/Vibe30-day04-tetris" showThumbnail=true >}}

**[Gioca a Tetris](https://vibe30-day04-tetris.vercel.app)**

Tasti freccia o WASD per muoversi, Spazio per l'hard drop, P per la pausa. Funziona meglio su desktop.

## Verdetto del Giorno 4

Quattro giorni dentro e sto costruendo giochi classici più in fretta di quanto riesca a testarli. Questo è il vero collo di bottiglia ora. Non il codice, non il debug. Il playtesting.

Questo clone di Tetris è davvero divertente da giocare. Lo stile 3D dei blocchi gli dà personalità, il tema Korobeiniki lo fa sembrare autentico e il sound design aggiunge un feedback soddisfacente a ogni azione. Il fatto che tutto l'audio sia generato proceduralmente da oscillatori e buffer di rumore è onestamente sorprendente. Non ci sono file audio in tutto questo progetto.

La cosa che continua a cogliermi di sorpresa è la completezza. Ho chiesto Tetris con blocchi 3D e musica. Ho ottenuto wall kick, persistenza del punteggio massimo, moltiplicatori di punteggio per livello, una schermata di pausa con un pulsante sfumato, stato di silenziamento salvato in localStorage e un pannello di game over che ti dice se hai battuto il tuo punteggio massimo. Sono tutte cose che avrei eventualmente chiesto, ma non ho dovuto farlo.

L'implementazione dei wall kick è buona quanto le linee guida ufficiali di Tetris? Probabilmente no. Il sistema di punteggio è autentico al 100%? Vicino, ma non l'ho verificato rispetto alle specifiche. Niente di tutto ciò conta per un progetto di un giorno. Quello che conta è che funziona, si sente bene e qualcuno può giocarci adesso.

---

*Questo è il giorno 4 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Seguimi mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'AI.*
