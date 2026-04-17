---
title: "30 Days of Vibe Coding - Giorno 12 - Wordle"
description: "Un clone completo di Wordle con animazioni, tema scuro/chiaro, modalità difficile, modalità daltonici, effetti sonori e coriandoli di celebrazione."
summary: "Un clone completo di Wordle con animazioni, tema scuro/chiaro, modalità difficile, modalità daltonici, effetti sonori e coriandoli di celebrazione."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-12", "react", "nextjs", "typescript", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 12
seriesOpened: false
date: 2026-04-17
draft: false
#type: "hidden"
---

Giorno 12. Tutti hanno giocato a Wordle. Vediamo quanto l'IA riesce ad avvicinarsi all'originale.

## Il Prompt

> "Costruisci un clone di Wordle con una lista di parole vera, animazioni delle tessere, tastiera, tracciamento delle statistiche e funzionalità di condivisione."

## Come è stato costruito

Questo è passato attraverso 7 task di Watchfire, e osservare la progressione è stato interessante perché rispecchia come si costruirebbe davvero un gioco rifinito se si avesse pazienza infinita.

1. **Motore di gioco con liste di parole.** Le fondamenta: una lista di soluzioni di circa 2.300 parole, una lista di tentativi validi di circa 10.000 parole, e la logica di valutazione dei tentativi. Verde, giallo, grigio. Le basi.
2. **Interfaccia curata con animazioni delle tessere e tastiera.** Le tessere si girano durante la rivelazione, saltano all'inserimento, tremano per le parole non valide. Una tastiera a schermo che aggiorna i colori delle lettere mentre si gioca.
3. **Statistiche e condivisione.** Percentuale di vittorie, grafico a barre della distribuzione dei tentativi, tracciamento della serie attuale e della serie massima. Il pulsante di condivisione copia la griglia emoji negli appunti, proprio come il vero Wordle.
4. **Modale di aiuto, tema scuro/chiaro, modalità difficile.** Una schermata esplicativa con esempi visivi. Toggle del tema con transizioni fluide. La modalità difficile obbliga a usare gli indizi rivelati nei tentativi successivi.
5. **Modalità daltonici, accessibilità, fix del bug React refs.** Colori ad alto contrasto per i giocatori daltonici. Questo task ha anche individuato e corretto un bug React refs che causava problemi con le animazioni delle tessere.
6. **Effetti sonori con Web Audio API.** Feedback audio per la pressione dei tasti, la rivelazione delle tessere, le vittorie e gli errori. Tutto generato con la Web Audio API, quindi nessun file audio da caricare.
7. **Coriandoli di celebrazione alla vittoria.** Un sistema di particelle basato su canvas che si attiva quando si risolve il puzzle. Perché te lo sei meritato.

Il tutto vive in un singolo hook React personalizzato (`useWordle.ts`) per la logica di gioco, con l'interfaccia come pagina Next.js. Separazione pulita.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![Wordle dark mode gameplay](images/screenshot-01.png)

**Sembra Wordle.** Questo era l'obiettivo, e lo supera. L'animazione di ribaltamento della tessera durante la rivelazione, il leggero rimbalzo quando si digita una lettera, il tremore quando si inserisce una parola non valida. Queste micro-interazioni sono ciò che rende il vero Wordle soddisfacente da giocare, e sono tutte presenti.

![Wordle light mode](images/screenshot-02.png)

**Temi scuro e chiaro.** Entrambi sono curati. Il tema scuro è quello predefinito (com'è giusto che sia), ma anche il tema chiaro funziona bene. Il toggle è nell'header, le transizioni sono fluide.

![Statistics modal](images/screenshot-03.png)

**Statistiche che persistono.** Partite giocate, percentuale di vittorie, serie attuale, serie massima, e un grafico di distribuzione dei tentativi. Tutto salvato in localStorage, quindi le statistiche sopravvivono tra le sessioni. Il pulsante di condivisione formatta i risultati come griglia emoji, pronti da incollare ovunque.

![Settings with hard mode and colorblind mode](images/screenshot-04.png)

**Impostazioni che contano.** La modalità difficile è un vincolo vero, non solo un'etichetta. Se si rivela che la parola ha una A in posizione 3, ogni tentativo successivo deve avere una A in posizione 3. Il gioco lo applica e spiega perché il tentativo è stato rifiutato. La modalità daltonici scambia il verde e il giallo con l'arancione e il blu, che è un piccolo dettaglio che rende il gioco giocabile per molte più persone.

**Effetti sonori senza file audio.** L'approccio Web Audio API è furbo. Nessun mp3 da caricare, nessun audio sprite, nessun precaricamento. I suoni sono sintetizzati al volo. Un click morbido per l'input, una sequenza di toni soddisfacente per la rivelazione delle tessere, una piccola fanfara per la vittoria. Aggiungono molto senza aggiungere peso al download.

**Coriandoli che fanno effetto.** Vinci la partita e le particelle canvas esplodono dal centro dello schermo. È un piccolo tocco, ma trasforma un momento tranquillo "ce l'hai fatta" in una celebrazione.

## I report dei bug

Il problema React refs nel task 5 era l'unico vero bug. Le animazioni di ribaltamento delle tessere non si attivavano in modo costante a causa di come React gestiva i refs durante i re-render. Watchfire l'ha individuato durante il passaggio di accessibilità e l'ha corretto nello stesso task. Non ho dovuto creare un report separato per quello.

A parte questo, il gioco funzionava correttamente fin dall'inizio. Le parole valide venivano accettate, le parole non valide venivano rifiutate con un tremore, i colori della tastiera si aggiornavano correttamente, e la modalità difficile applicava le sue regole in modo appropriato.

## I numeri

- **~2.300 parole soluzione** e **~10.000 tentativi validi**
- **7 task Watchfire** dal motore di gioco base ai coriandoli
- **1 hook personalizzato** (`useWordle.ts`) contenente tutta la logica di gioco
- **Web Audio API** per effetti sonori a zero download
- **Sistema di particelle canvas** per le celebrazioni di vittoria
- **localStorage** per la persistenza delle statistiche e dello stato del gioco

## Provalo

{{< github repo="nunocoracao/Vibe30-day12-wordle" showThumbnail=true >}}

**[Gioca a Wordle](https://vibe30-day12-wordle.vercel.app)**

Digita una parola di 5 lettere e premi Invio. Verde significa lettera giusta, posizione giusta. Giallo significa lettera giusta, posizione sbagliata. Grigio significa che la lettera non è nella parola. Sei tentativi per indovinarla.

## Verdetto del Giorno 12

Wordle è uno di quei giochi che sembrano semplici finché non si prova a costruirlo. La logica di base è lineare, ma è la rifinitura che lo fa funzionare. Le animazioni, il feedback della tastiera, le statistiche, la funzionalità di condivisione, l'applicazione della modalità difficile. Togli uno qualsiasi di questi elementi e smette di sembrare Wordle.

Quello che mi ha impressionato qui è stata la progressione. Il task 1 mi ha dato un gioco di indovinare le parole funzionale ma brutto. Al task 7 aveva tutto quello che ha il vero Wordle, più effetti sonori e coriandoli. Ogni task ha aggiunto una categoria specifica di rifinitura, e nessuno ha rotto quello che c'era prima. Non è facile da fare con animazioni e gestione dello stato in React.

La scelta della Web Audio API per gli effetti sonori è stata una bella sorpresa. Mi sarei aspettato che usasse file audio. Invece genera i suoni in modo programmatico, il che significa zero asset aggiuntivi e riproduzione istantanea. Un compromesso intelligente.

Il pattern regge. Ogni giorno aggiunge rifinitura, e niente è ancora andato in pezzi.

---

*Questo è il giorno 12 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
