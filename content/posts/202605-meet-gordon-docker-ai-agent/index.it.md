---
title: "Ecco Gordon: l'agente AI di Docker per l'intero workflow dei container"
summary: "Gordon è ora disponibile in versione generale — l'agente AI di Docker, integrato in Docker Desktop e nella CLI, che legge il tuo ambiente, traccia i guasti e agisce sull'intero workflow dei container con la tua approvazione esplicita."
categories: ["Esterno"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/"
date: 2026-05-19
draft: false
---

I workflow dei container sono pieni di piccole frizioni che si sommano: cache di build che si invalidano nel momento peggiore, servizi che non si trovano tra loro, immagini che funzionano in locale ma vanno in crash in CI, e messaggi di errore che puntano a risorse non più esistenti. Gli assistenti di codice generici sono ottimi sulla logica applicativa, ma non possono vedere i tuoi container in esecuzione, i tuoi log, i tuoi file compose o lo stato della tua macchina. Sanno solo ciò che incolli.

Gordon è stato costruito esattamente per colmare questo divario. Oggi, Gordon è disponibile in versione generale — l'agente AI di Docker, pensato appositamente per i workflow dei container, integrato in Docker Desktop e nella CLI.

## Cosa fa Gordon

Gordon legge il tuo ambiente prima che tu glielo chieda. Guarda log, immagini, file compose e container in esecuzione, traccia i guasti fino alla causa reale, propone una soluzione e — con la tua approvazione — agisce tramite la Docker CLI e il tuo filesystem.

Alcune cose che Gordon riduce da ore a minuti:

- **Debug di container rotti** — "Il mio container continua a uscire" → Gordon legge i log, identifica la variabile d'ambiente mancante, l'immagine base sbagliata o il volume mal configurato, e propone una soluzione.
- **Containerizzare nuove app** — "Containerizza questa app e configura un ambiente di dev con Postgres" → Gordon scrive il Dockerfile, lo stack compose e lo avvia.
- **Ottimizzare Dockerfile** — Build multi-stage, riordino dei layer per migliori hit di cache, immagini base più snelle, health check.
- **Operazioni di routine** — "Pulisci le immagini inutilizzate" → Gordon ti mostra i comandi per l'approvazione, nessuna ricerca di flag.
- **Query di contesto** — Chiedi dei container in esecuzione, dell'uso del disco o delle immagini senza dover memorizzare i flag Docker.
- **Imparare nel contesto** — Ottieni spiegazioni sui concetti Docker basate sul tuo setup reale, non su un vecchio blog post.

## Dove vive Gordon

Gordon è integrato in due punti:

- **Docker Desktop** — una scheda dedicata con il contesto completo dell'ambiente, oltre a comparire contestualmente quando emergono problemi.
- **CLI** — esegui `docker ai` dal tuo terminale.

Disponibile in Docker Desktop 4.74 e successivi.

## Approvazione prima di tutto, by design

Ogni azione che Gordon esegue — ogni comando shell, ogni modifica di file, ogni operazione Docker — ti viene mostrata per l'approvazione prima dell'esecuzione. I permessi sono limitati alla sessione e si resettano alla chiusura. Puoi opzionalmente abilitare l'auto-approvazione per i workflow fidati. Nessun codice o dato personale viene memorizzato, e i provider di AI non conservano i tuoi dati. L'infrastruttura sottostante è attestata SOC 2 Type 2 e certificata ISO 27001.

## Gordon nello stack

Gordon non sostituisce gli assistenti di codice come Cursor, Copilot o Claude Code — li completa. Quegli strumenti si occupano della logica applicativa e della generazione di nuovo codice. Gordon si occupa di workflow dei container, infrastruttura, debug e deployment. Insieme coprono l'intero percorso dal codice alla produzione senza cambi di contesto.

## Prezzi

Gordon è gratis con qualsiasi account Docker, con limiti d'uso che si resettano ogni poche ore. Per un uso più intenso, Gordon Plus aggiunge 2x di capacità a 20 $/mese, con piani che arrivano fino a 20x.

## Iniziare

1. Aggiorna Docker Desktop a 4.74 o successivo
2. Clicca sull'icona Gordon nella sidebar, o esegui `docker ai` nel tuo terminale
3. Puntalo su un progetto e chiedigli qualcosa — "ottimizza il mio Dockerfile" è un buon primo prompt

Continua a leggere il post originale sul [Docker Blog](https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/).
