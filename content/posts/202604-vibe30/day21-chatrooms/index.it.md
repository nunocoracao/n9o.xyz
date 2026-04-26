---
title: "30 Days of Vibe Coding - Giorno 21 - ChatRooms"
description: "Un'app di chat room anonime in tempo reale con Firebase, reazioni, condivisione file e indicatori di presenza."
summary: "Un'app di chat room anonime in tempo reale con Firebase, reazioni, condivisione file e indicatori di presenza."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-21", "react", "nextjs", "typescript", "firebase", "realtime"]
series: ["30 Days of Vibe Coding"]
series_order: 21
seriesOpened: false
date: 2026-04-26
draft: false
#type: "hidden"
---

Giorno 21. Volevo costruire qualcosa che sembrasse vivo. Qualcosa dove puoi vedere altre persone fare cose in tempo reale. Quindi oggi si parla di chat room anonime.

## Il Prompt

> "Costruisci un'app di chat room in tempo reale. Autenticazione anonima con nickname personalizzati, creazione di stanze, messaggistica live, reazioni, condivisione file, indicatori di digitazione e presenza online."

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day21-chatrooms.vercel.app)
{{< /alert >}}

## Come è stato costruito

Questo è passato attraverso 7 task di [Watchfire](https://watchfire.io), e l'ordine aveva molto senso per un'app in tempo reale come questa:

1. **Firebase Realtime Database.** Le fondamenta. Configurazione dell'autenticazione anonima, regole del database e modello dati per stanze, messaggi e utenti. Questo è l'impianto idraulico da cui dipende tutto il resto.
2. **Creazione delle stanze.** La possibilità di creare nuove stanze e navigare tra quelle esistenti. Una barra laterale con i nomi delle stanze, il conteggio dei partecipanti e l'anteprima dell'ultimo messaggio.
3. **Messaggistica in tempo reale.** La funzionalità principale. I messaggi appaiono istantaneamente per tutti nella stanza. I listener di Firebase gestiscono la sincronizzazione, quindi niente polling, niente pulsante di aggiornamento. Scrivi, invii, tutti vedono.
4. **Reazioni.** Tocca un messaggio per reagire. Funzionalità piccola, ma rende la chat più interattiva rispetto a semplici muri di testo.
5. **Condivisione file.** Upload e condivisione di file all'interno di una chat room. Un ulteriore livello di utilità oltre alla semplice messaggistica testuale.
6. **Presenza e indicatori di digitazione.** Vedi chi è online, vedi chi sta scrivendo. Sono i dettagli che fanno sembrare un'app di chat una vera app di chat invece di una bacheca messaggi.
7. **Rifinitura mobile.** Aggiustamenti del layout responsive, aree touch, assicurarsi che tutta l'esperienza funzioni bene su uno schermo del telefono.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![Schermata di benvenuto](images/screenshot-01.png)

**Onboarding semplicissimo.** Arrivi sull'app, scegli un nickname e sei dentro. Niente email, niente password, niente flusso OAuth. Firebase Anonymous Auth gestisce l'identità dietro le quinte. Scrivi un nome e clicchi "Andiamo."

![Lista stanze e stato di benvenuto](images/screenshot-03.png)

**Un browser di stanze pulito.** La barra laterale sinistra mostra tutte le stanze disponibili con il conteggio dei partecipanti. C'è un pulsante "Crea Stanza" in alto e una barra di ricerca per filtrare le stanze. Lo stato predefinito mostra un messaggio di benvenuto che invita a selezionare una stanza o crearne una nuova.

![Chat room con messaggi](images/screenshot-04.png)

**Messaggistica in tempo reale che funziona e basta.** I messaggi appaiono istantaneamente. Ogni messaggio mostra il nickname del mittente con un avatar colorato, un timestamp e il contenuto del messaggio. La parte bassa dello schermo mostra chi è attualmente nella stanza e un campo di input con un pulsante di invio. Il contatore online si trova nell'angolo in alto a destra.

![Conversazione attiva](images/screenshot-05.png)

**Indicatori di digitazione e presenza.** Puoi vedere chi è online e chi sta scrivendo. Questi piccoli tocchi sono ciò che separa un'app di chat da una sezione commenti. L'insieme risulta reattivo e vivo.

**Il tema scuro è fantastico.** Lo sfondo blu navy scuro con accenti viola gli dà un aspetto da app di chat moderna. Non sembra un progetto scolastico. La tipografia è pulita, la spaziatura è giusta e la codifica a colori per i diversi utenti rende le conversazioni facili da seguire.

## I report dei bug

Le app Firebase in tempo reale tendono ad avere una categoria di bug che si manifestano solo con più utenti o alla riconnessione. Per questo progetto, i task di Watchfire hanno gestito la progressione in modo abbastanza pulito da non farmi incontrare nessun problema bloccante. Il sistema di presenza e gli indicatori di digitazione hanno funzionato al primo deploy, cosa che onestamente mi ha sorpreso. Queste funzionalità di solito richiedono qualche giro di debug sui casi limite come il cambio di scheda e le disconnessioni di rete.

## I numeri

- **7 task Watchfire** dalla configurazione del database alla rifinitura mobile
- **Firebase Realtime Database** per la sincronizzazione dei messaggi a latenza zero
- **Autenticazione anonima** per un onboarding senza frizioni
- **Reazioni, condivisione file, indicatori di digitazione, presenza** tutto aggiunto in modo incrementale

## Provalo

{{< github repo="nunocoracao/Vibe30-day21-chatrooms" showThumbnail=true >}}

**[Apri ChatRooms](https://vibe30-day21-chatrooms.vercel.app)**

Scegli un nickname e inizia a chattare. Crea una stanza o unisciti a una esistente.

## Verdetto del giorno 21

Il tempo reale è difficile. O almeno, lo era. Configurare connessioni WebSocket, gestire lo stato delle connessioni, gestire le riconnessioni, sincronizzare i dati tra i client, gestire le race condition. È un sacco di lavoro infrastrutturale prima ancora di arrivare alle funzionalità di chat vere e proprie.

Firebase astrae la maggior parte di tutto ciò, e l'IA sapeva esattamente come usarlo. La progressione da "il database esiste" a "le persone chattano con reazioni e indicatori di digitazione" è avvenuta in 7 task senza che dovessi pensare minimamente alla gestione delle connessioni.

Quello che trovo interessante di questo progetto è che l'autenticazione anonima era la scelta giusta. Per un'app di chat informale, costringere le persone a creare un account ammazza la conversione. Scegli un nome e vai. Firebase gestisce l'identità, l'utente non deve mai pensarci. Questa è una decisione di prodotto che l'IA ha preso correttamente senza che io la specificassi.

Ventuno giorni. Siamo nel rettilineo finale e i progetti diventano sempre più interattivi.

---

*Questo è il giorno 21 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
