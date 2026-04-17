---
title: "30 Days of Vibe Coding - Giorno 6 - Pomodoro"
description: "Un timer Pomodoro da terminale scritto in Go con Bubble Tea, con ASCII art, monitoraggio delle sessioni e statistiche settimanali."
summary: "Un timer Pomodoro da terminale scritto in Go con Bubble Tea, con ASCII art, monitoraggio delle sessioni e statistiche settimanali."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-06", "go", "tui", "bubbletea"]
series: ["30 Days of Vibe Coding"]
series_order: 6
seriesOpened: false
date: 2026-04-11
draft: false
#type: "hidden"
---

Giorno 6. È ora di abbandonare il browser — e uscire completamente dalla mia zona di comfort.

Fino a ora ogni progetto è stato TypeScript, React, Canvas. Linguaggi e framework che conosco. Oggi volevo mettere alla prova qualcosa di diverso: cosa succede quando chiedo all'AI di costruire con strumenti che non ho mai toccato?

## Il Prompt

> "Costruisci un timer Pomodoro da terminale in Go usando Bubble Tea con un grande conto alla rovescia ASCII, monitoraggio delle sessioni con SQLite, statistiche giornaliere e settimanali, etichette per le attività e durate personalizzabili."

Non ho mai scritto Go. Non ho mai usato Bubble Tea. Non ho mai toccato Lip Gloss. Non saprei dirti la differenza tra una `goroutine` e un `channel` senza cercarlo. L'intero stack tecnologico di questo prompt mi è completamente estraneo.

Era questo il punto. Cinque giorni a costruire giochi web in territorio familiare mi avevano fatto chiedere: l'AI è brava solo con le cose che già conosco? E se le affidassimo uno stack che non riesco nemmeno a valutare correttamente?

## Come È Stato Costruito

[Watchfire](https://watchfire.io) ha preso il prompt e lo ha scomposto nello stesso modo in cui aveva fatto con i progetti TypeScript. Il fatto che fosse Go invece di TypeScript non sembrava fare differenza. Ha scelto Bubble Tea per il framework TUI, Lip Gloss per lo styling, SQLite per la persistenza. Nessun web server, nessun wrapper Electron, nessun browser. Solo un binario che puoi eseguire da qualsiasi posto.

Il progetto è arrivato come un modulo Go pulito con 11 file sorgente distribuiti in 6 package: `main`, `ascii`, `config`, `db`, `stats`, `timer` e `ui`. Ogni package ha una responsabilità precisa. Il package timer gestisce la macchina a stati (inattivo, in esecuzione, in pausa, terminato). Il package UI esegue il rendering di tutto con Bubble Tea. Il package database gestisce la persistenza con SQLite. Il package stats aggrega i dati delle sessioni per le visualizzazioni giornaliere e settimanali.

È arrivato persino con uno script di installazione, un Makefile e flag CLI appropriati usando un loader di configurazione personalizzato che unisce un file di configurazione YAML con gli argomenti da riga di comando. Non saprei come impostare nulla di tutto questo in Go da solo.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa Ho Ottenuto

![Timer Pomodoro pronto per partire](images/screenshot-01.png)

**Grandi numeri ASCII.** Il display del conto alla rovescia usa cifre personalizzate a caratteri a blocchi alte 5 righe. Sono leggibili dall'altro capo della stanza, che è un po' lo scopo di un timer Pomodoro. Dovresti poterci dare un'occhiata e sapere immediatamente quanto tempo ti resta.

![Timer in esecuzione con barra di avanzamento](images/screenshot-02.png)

**Sessioni con codifica a colori.** Le sessioni di lavoro brillano di rosso. Le pause brevi diventano verdi. Le pause lunghe hanno una tonalità diversa. L'intera UI cambia colore in base alla fase in cui ti trovi, così sai a colpo d'occhio se dovresti lavorare o riposare.

![Pausa breve pronta](images/screenshot-03.png)

**Tiene traccia di tutto.** Ogni sessione viene salvata in un database SQLite locale in `~/.pomo/sessions.db`. La barra dell'intestazione mostra le statistiche giornaliere in tempo reale: quanti pomodori hai completato e il tempo totale di concentrazione. Esegui `pomo stats` e ottieni un riepilogo settimanale con grafici a barre ASCII.

![Pausa breve in corso](images/screenshot-04.png)

**Il ciclo delle sessioni funziona.** Quattro sessioni di lavoro, poi una pausa lunga. Il badge di avanzamento in alto a destra mostra dove ti trovi nel ciclo (es. `[WORK 1/4]`). Dopo la quarta sessione di lavoro, passa automaticamente a una pausa lunga di 15 minuti invece della solita pausa breve di 5 minuti.

**Etichette per le attività.** Esegui `pomo -t "Scrivi il post del blog"` e il nome dell'attività appare nell'intestazione. Viene anche salvato nel database, così quando guardi le statistiche in seguito puoi vedere su cosa stavi effettivamente lavorando.

**Campanella del terminale.** Quando una sessione termina, suona la campanella del terminale. Semplice, efficace, e funziona con qualsiasi sistema di notifiche supportato dal tuo terminale.

## I Bug Report

Nessuno questa volta. Il timer ha funzionato correttamente dalla prima build. Avvio, pausa, ripresa, salto, reset, transizioni di sessione — tutto ha funzionato come previsto. I controlli da tastiera erano reattivi e la macchina a stati ha gestito i casi limite in modo pulito.

## I Numeri

- **11 file sorgente Go** distribuiti in 6 package
- **1 file di test** con test sulla macchina a stati del timer
- **4 tipi di sessione:** lavoro, pausa breve, pausa lunga e le transizioni tra di esse
- **Persistenza SQLite** per la cronologia delle sessioni
- **Configurazione YAML + CLI** con valori predefiniti sensati (cicli di 25/5/15 minuti)
- **Tempo di lavoro totale:** circa 20 minuti di test e ottimizzazione del prompt

## Provalo

{{< github repo="nunocoracao/Vibe30-day06-pomodoro" showThumbnail=true >}}

Installalo con:

```bash
go install github.com/nunocoracao/Vibe30-day06-pomodoro@latest
```

Oppure usa lo script di installazione:

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day06-pomodoro/main/install.sh | bash
```

Poi esegui semplicemente `pomo` nel tuo terminale.

## Verdetto del Giorno 6

Questo ha risposto a una domanda che mi portavo dietro dal giorno 1: la programmazione assistita dall'AI funziona solo quando conosci già lo stack?

No. Non è così. Non so scrivere Go. Non so costruire una TUI con Bubble Tea. Non saprei come strutturare un modulo Go con sei package, configurare i binding SQLite o scrivere un Makefile per la cross-compilazione. Ma lo strumento esiste, funziona, ed è qualcosa che uso davvero ogni giorno. Un singolo binario, nessuna dipendenza a runtime, funziona in qualsiasi terminale.

Ciò che mi ha sorpreso di più è stata l'architettura. Sei package con confini netti. Una macchina a stati adeguata per il timer. Una gestione del database elegante dove, se SQLite fallisce, il timer continua a funzionare — semplicemente non ottieni le statistiche. È il tipo di decisione che prenderebbe uno sviluppatore senior, e viene da un prompt scritto da qualcuno che non conosce il linguaggio.

Questo cambia il significato di "non convenzionale". Se posso spedire un'app Go TUI rifinita senza conoscere Go, allora la barriera per provare stack tecnologici non familiari è appena scomparsa. Il costo della sperimentazione è sceso quasi a zero.

Sei giorni e questo è il primo progetto che ho continuato a usare dopo aver scritto il post del blog.

---

*Questo è il giorno 6 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Seguimi mentre spedisco 30 progetti in 30 giorni usando la programmazione assistita dall'AI.*
