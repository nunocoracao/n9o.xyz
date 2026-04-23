---
title: "30 Days of Vibe Coding - Giorno 18 - PollBox"
description: "Un'app di voto in tempo reale con risultati animati dal vivo, alimentata da Firebase e costruita in un giorno."
summary: "Un'app di voto in tempo reale con risultati animati dal vivo, alimentata da Firebase e costruita in un giorno."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-18", "nextjs", "firebase", "react", "typescript"]
series: ["30 Days of Vibe Coding"]
series_order: 18
seriesOpened: false
date: 2026-04-23
draft: false
#type: "hidden"
---

Giorno 18. Volevo qualcosa di collaborativo. Qualcosa dove puoi condividere un link e vedere immediatamente altre persone che interagiscono. Un'app di sondaggi in tempo reale sembrava la scelta giusta.

## Il Prompt

> "Costruisci un'app di creazione e voto di sondaggi in tempo reale. Gli utenti devono poter creare sondaggi con più opzioni, condividerli tramite link e vedere i risultati aggiornarsi in diretta con grafici a barre animati."

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day18-pollbox.vercel.app)
{{< /alert >}}

## Come è stato costruito

[Watchfire](https://watchfire.io) ha suddiviso il progetto in 31 task. Sono tanti per un'app di sondaggi, ma la lista delle funzionalità cresce in fretta una volta che inizi a pensare a tutti i piccoli dettagli che rendono un'esperienza di voto completa.

Il nucleo è arrivato per primo: l'integrazione del database in tempo reale di Firebase, il flusso di creazione dei sondaggi, le meccaniche di voto e la vista dei risultati animati. Poi si è aggiunto tutto il resto, strato dopo strato. Categorie e template per creare sondaggi velocemente. Miglioramenti di accessibilità. Skeleton di caricamento per evitare che l'app mostri contenuti vuoti. Una pagina 404 fatta bene. E ovviamente, il solito giro di fix per il deploy alla fine.

L'integrazione Firebase era la spina dorsale di tutto il progetto. Firestore gestisce la persistenza, i listener in tempo reale inviano gli aggiornamenti dei voti a ogni client connesso, e l'autenticazione anonima fa sì che nessuno debba creare un account solo per votare.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

Il flusso di creazione è sorprendentemente completo per un progetto di un giorno.

![Modulo di creazione sondaggio](images/screenshot-02.png)

Hai un titolo, una descrizione, tag di categoria, opzioni multiple e persino un selettore di tema colore. C'è anche il supporto per immagini di copertina, sondaggi programmati, protezione con password e date di scadenza. In fondo, ci sono template per i tipi di sondaggio comuni come "Sì o No", "Valuta da 1 a 5" e "Voto di squadra" così puoi saltare la configurazione del tutto.

![Opzioni di creazione con temi e template](images/screenshot-03.png)

La pagina dei risultati è dove diventa divertente. Dopo aver votato, le barre si animano, l'opzione vincente si evidenzia e i coriandoli esplodono sullo schermo.

![Risultati in diretta con coriandoli](images/screenshot-05.png)

Ogni pagina di sondaggio ha anche reazioni emoji, una sezione commenti, link di condivisione con generazione di QR code e opzioni di esportazione sia in CSV che in immagini. È un sacco di roba.

![Risultati del voto di squadra](images/screenshot-06.png)

![Risultati del sondaggio di valutazione](images/screenshot-07.png)

La dashboard "I miei sondaggi" tiene traccia di tutto ciò che hai creato, con ricerca e filtri per categoria. Ogni sondaggio mostra il suo stato, il numero di opzioni, il conteggio dei voti e ha un pulsante di duplicazione per il riutilizzo rapido.

![Dashboard I miei sondaggi](images/screenshot-01.png)

## I Bug

La fase di deploy è stata il principale punto dolente. La configurazione di Firebase aveva bisogno di aggiustamenti per la produzione, e c'erano i soliti problemi specifici di Vercel da risolvere. Niente di insolito per un progetto che dipende da servizi esterni. L'applicazione di un voto per utente richiedeva transazioni Firestore per funzionare correttamente, e ci sono volute alcune iterazioni per farlo funzionare bene.

## Provalo

{{< github repo="nunocoracao/Vibe30-day18-pollbox" showThumbnail=true >}}

**[Prova PollBox](https://vibe30-day18-pollbox.vercel.app)**

Crea un sondaggio e condividi il link. Nessun account necessario.

## Verdetto del Giorno 18

La lista delle funzionalità qui è densa. Un'app di voto in tempo reale con Firebase, risultati animati, condivisione QR, reazioni emoji, commenti, esportazione CSV, esportazione immagini, template, categorie, protezione con password e una dashboard. È una lista di funzionalità da produzione compressa in un solo giorno.

Il tempo reale è ciò che dà vita al progetto. Condividi un link, qualcuno vota e le barre si muovono sul tuo schermo. Nessun refresh necessario. I listener in tempo reale di Firebase più le animazioni di Framer Motion rendono il tutto reattivo e curato in un modo che i risultati statici non potrebbero mai raggiungere.

31 task Watchfire, e la profondità si vede.

---

*Questo è il giorno 18 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui il progetto mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
