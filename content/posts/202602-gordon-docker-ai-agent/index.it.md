---
title: "Gordon: l'agente AI di Docker ha appena ricevuto un aggiornamento"
summary: "Ecco Gordon, l'agente AI di Docker integrato in Docker Desktop. Comprende i tuoi container, le tue immagini e il tuo ambiente — e ti aiuta a fare debug, generare Dockerfile ed eseguire correzioni con la tua approvazione."
categories: ["Esterno"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/"
date: 2026-02-23
draft: false
---

Gli agenti AI stanno passando dalle demo ai flussi di lavoro quotidiani. Scrivono codice, eseguono comandi e completano attività a più passaggi senza bisogno di assistenza continua. Ma gli agenti generici non conoscono Docker. Non comprendono i tuoi container, le tue immagini o la tua configurazione specifica.

Gordon sì. Basta eseguire `docker ai` nel terminale o provarlo in Docker Desktop.

Disponibile oggi in Docker Desktop 4.61, ancora in beta, Gordon è un agente AI progettato appositamente per Docker. Ha accesso alla shell, alla Docker CLI, al tuo filesystem e una conoscenza approfondita delle best practice di Docker. Indicagli un problema, approva le sue azioni e guardalo lavorare.

## Perché Docker ha bisogno del suo agente

Quando il tuo container termina con codice 137, Claude o ChatGPT ti spiegheranno cosa significa OOM. Gordon controlla il limite di memoria del tuo container, ispeziona i log, identifica il processo che consuma troppa memoria e propone una soluzione. Una sola approvazione, e il gioco è fatto.

Quando devi containerizzare un'app Next.js, Copilot potrebbe suggerirti un Dockerfile. Gordon esamina la struttura del tuo progetto, rileva le dipendenze, genera un Dockerfile pronto per la produzione con build multi-stage, crea il docker-compose.yml con i servizi corretti e configura le variabili d'ambiente.

La differenza sta nel contesto e nell'esecuzione. Gordon sa cosa è in esecuzione sulla tua macchina. Può leggere lo stato di Docker, accedere al tuo filesystem e agire. Non sta tirando a indovinare — sta lavorando con il tuo ambiente reale.

## Cosa fa Gordon

**Debug e correzione** – Il container non si avvia. Un servizio non è integro. Qualcosa sta consumando tutta la memoria. Gordon ispeziona i log, controlla lo stato del container, identifica la causa principale e propone le correzioni. Tu approvi, lui esegue.

**Build e containerizzazione** – Prendi questa applicazione e falla girare in Docker. Gordon esamina il tuo progetto, genera Dockerfile pronti per la produzione con build multi-stage, crea il docker-compose.yml con i servizi corretti, gestisce le configurazioni d'ambiente e le dipendenze.

**Esecuzione e gestione** – Libera spazio su disco. Ferma tutti i container. Scarica ed esegui immagini specifiche. Le operazioni Docker di routine dovrebbero essere conversazionali, non richiedere una consultazione della documentazione.

**Sviluppo e ottimizzazione** – Aggiungi health check. Implementa build multi-stage. Applica le best practice di sicurezza. Riduci le dimensioni delle immagini. Rendi le configurazioni Docker esistenti pronte per la produzione.

Gordon gestisce tutto questo.

## Come funziona Gordon

Gordon è costruito su **cagent**, il framework per agenti di Docker incluso in Docker Desktop, e viene eseguito localmente all'interno di Docker Desktop. Ha accesso a:

- **La tua shell** – Può eseguire comandi dopo l'approvazione
- **Il tuo filesystem** – Legge la struttura del progetto, le configurazioni, i log
- **Docker CLI** – Accesso completo alle operazioni Docker
- **Base di conoscenza Docker** – Documentazione, best practice, pattern comuni

Puoi configurare la directory di lavoro di Gordon per puntare a un codebase specifico. Questo fornisce a Gordon il contesto completo sulla struttura del tuo progetto, le dipendenze e la configurazione Docker esistente.

Il modello di permessi è semplice: Gordon ti mostra cosa vuole fare, tu approvi o rifiuti, e poi lui esegue. Ogni comando. Ogni aggiornamento di file. Ogni operazione Docker. Non stai guardando passivamente — stai dirigendo un agente che conosce Docker a fondo.

## Dove trovare Gordon

**Docker Desktop:** Cerca l'icona di Gordon nella barra laterale sinistra

**CLI:** Esegui `docker ai` dal tuo terminale

Gordon è incluso in tutti gli abbonamenti Docker:

- **Personal:** Incluso
- **Pro:** Capacità di utilizzo 3x
- **Team:** Capacità di utilizzo 3x
- **Business:** Capacità di utilizzo 6x

**Nota per gli utenti Business:** Se non vedi Gordon, il tuo amministratore deve richiedere l'abilitazione per la tua organizzazione. Contatta il team del tuo account Docker o il supporto.

## Inizia oggi

1. Scarica Docker Desktop 4.61+
2. Accedi con il tuo account Docker
3. Clicca sull'icona di Gordon, seleziona una directory del progetto e chiedi "Ottimizza il mio Dockerfile"
4. Esplora la documentazione completa su Docker Docs

Gordon è disponibile ora in Docker Desktop 4.61 e versioni successive.

Continua a leggere il post originale sul [Docker Blog](https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/).
