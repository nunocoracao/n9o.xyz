---
title: "30 Days of Vibe Coding - Giorno 11 - Treelo"
description: "Un kanban board completo in stile Trello con drag-and-drop, etichette, checklist, date di scadenza, vista calendario e tracciamento attività."
summary: "Un kanban board completo in stile Trello con drag-and-drop, etichette, checklist, date di scadenza, vista calendario e tracciamento attività."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-11", "typescript", "nextjs", "kanban", "productivity"]
series: ["30 Days of Vibe Coding"]
series_order: 11
seriesOpened: false
date: 2026-04-16
draft: false
---

Giorno 11. Ho chiesto un clone di Trello. Kanban board, drag and drop, dettagli delle carte, tutto quanto.

## Il Prompt

> "Build a Trello-style kanban board app with boards, lists, cards, and drag-and-drop"

L'ho chiamato Treelo perché sono molto creativo con i nomi.

## Come è stato costruito

Watchfire ha suddiviso questo in 18 task. Le cose fondamentali sono arrivate per prime: board, liste, carte e drag-and-drop. Poi ha continuato. Etichette. Date di scadenza. Una modale di dettaglio carta. Sfondi personalizzati per i board. Ricerca e filtri. Archiviazione carte. Selezione multipla con operazioni in blocco. Un feed attività. Una vista calendario. E poi un passaggio di ottimizzazione delle prestazioni alla fine per mantenere tutto fluido.

Sono un sacco di funzionalità per un singolo prompt. La maggior parte non le avevo chieste esplicitamente. Il prompt iniziale era solo board, liste, carte e drag-and-drop. Tutto il resto è stato Watchfire che ha deciso "un kanban board dovrebbe avere anche queste cose" e le ha semplicemente costruite.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![Vista board con liste e carte](images/screenshot-01.png)

**Sembra Trello.** Il layout, lo stile delle carte, lo sfondo blu, le colonne delle liste. Se socchiudi gli occhi potrebbe passare per quello vero. C'è una barra superiore con ricerca, attività, calendario e pulsanti filtro. Le liste mostrano il conteggio delle carte. Le carte mostrano etichette e badge con le date di scadenza.

![Homepage dei board](images/screenshot-02.png)

**Board multipli.** C'è una homepage con i board visualizzati di recente e un pulsante "Crea nuovo board". Tiene traccia di quali board hai visitato di recente. Semplice ma funzionale.

![Modale dettaglio carta](images/screenshot-03.png)

**La modale di dettaglio carta è sorprendentemente completa.** Clicca su qualsiasi carta e ottieni una modale completa con etichette, un selettore di data di scadenza, una checklist con tracciamento dei progressi, un campo descrizione, commenti e un registro attività. Sul lato destro c'è un set di azioni: sposta, copia, archivia. Questo è il tipo di cosa che richiederebbe giorni per essere costruita bene a mano.

![Pannello filtro etichette](images/screenshot-04.png)

**Le etichette funzionano davvero.** Puoi assegnare etichette con codice colore alle carte e poi filtrare per etichetta. Il pannello filtro scorre dal lato destro. Le carte sul board mostrano i colori delle etichette come piccole strisce colorate in alto.

![Feed attività](images/screenshot-05.png)

**C'è un feed attività.** Ogni azione viene registrata. Carta creata, carta spostata, etichetta aggiunta, checklist completata. Mostra i timestamp e descrive cosa è successo. Questa è una di quelle funzionalità che separano un giocattolo da qualcosa di utilizzabile. Puoi effettivamente tracciare cosa è successo su un board.

![Vista calendario](images/screenshot-06.png)

**Una vista calendario.** Passa dalla vista board a un calendario e vedi tutte le tue carte con date di scadenza disposte su una griglia mensile. Le carte senza date di scadenza appaiono in una barra laterale. È un modo genuinamente utile per vedere cosa sta arrivando.

![Dettaglio carta dal calendario](images/screenshot-07.png)

**Le modali delle carte funzionano anche dal calendario.** Clicca su una carta nel calendario e si apre la stessa modale di dettaglio. Date di scadenza, etichette, tutto è accessibile da entrambe le viste.

![Sfondo personalizzato del board](images/screenshot-08.png)

**Sfondi personalizzati per i board.** Puoi cambiare lo sfondo del board con diversi colori e gradienti. Anche la modalità scura è completamente supportata. Tutta l'app rispetta la tua preferenza di tema.

## Cos'altro c'è dentro

Alcune cose che non si vedono bene negli screenshot ma che vale la pena menzionare:

- **Drag-and-drop** usando @dnd-kit. Puoi riordinare le carte all'interno di una lista, spostarle tra le liste e riordinare le liste stesse.
- **Selezione multipla.** Tieni premuto Shift o Ctrl per selezionare più carte e poi spostarle, archiviarle o etichettarle in blocco.
- **Annulla/ripristina.** Supporto completo della cronologia con Ctrl+Z e Ctrl+Shift+Z.
- **Scorciatoie da tastiera.** Premi N per aggiungere una carta, F per cercare, B per tornare ai board, Q per filtrare per data di scadenza, e ? per vedere tutte le scorciatoie.
- **Checklist** nelle carte con una barra di avanzamento.
- **Archivia e ripristina.** Le carte e le liste possono essere archiviate senza essere eliminate.
- **Persistenza in localStorage.** Tutto si salva nel browser. Chiudi la scheda, torna, i tuoi board sono ancora lì.

## I report dei bug

Onestamente, questo era abbastanza pulito. I problemi principali riguardavano casi limite del drag-and-drop (rilasciare una carta in fondo a una lista a volte non veniva registrato) e la vista calendario che inizialmente non si aggiornava quando cambiavi una data di scadenza dalla modale. Roba piccola. Niente di strutturale.

## I numeri

- **18 task Watchfire** dal kanban base all'ottimizzazione delle prestazioni
- **Next.js + TypeScript + Tailwind CSS** come stack
- **@dnd-kit** per il drag-and-drop
- **Navigazione completa da tastiera** con overlay delle scorciatoie
- **Due viste:** board e calendario
- **Tutti i dati in localStorage** senza bisogno di backend

## Provalo

{{< github repo="nunocoracao/Vibe30-day11-trelloclone" showThumbnail=true >}}

**[Prova Treelo](https://vibe30-day11-trelloclone.vercel.app)**

Crea un board, aggiungi delle liste, trascina qualche carta. È più divertente di quanto dovrebbe essere.

## Verdetto del Giorno 11

Un kanban board sembra semplice in superficie, ma ci sono così tante piccole interazioni che devono funzionare: i target di rilascio, lo stato delle modali, i filtri, la cronologia degli annullamenti, la coerenza tra le viste. Il fatto che tutto questo venga da un singolo prompt e 18 task automatizzati mi lascia ancora a bocca aperta.

Continuo a tornare allo stesso pensiero: non avrei potuto costruire tutto questo in un giorno da solo. Solo il drag-and-drop mi avrebbe preso una giornata intera a combattere con le librerie e i casi limite. Invece ho ottenuto un clone di Trello funzionante con una vista calendario, un feed attività, operazioni in blocco e scorciatoie da tastiera. E ho passato il mio tempo a testarlo e a segnalare un paio di bug.

Il divario tra "voglio un kanban board" e "ecco un kanban board" continua a ridursi.

---

*Questo è il giorno 11 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
