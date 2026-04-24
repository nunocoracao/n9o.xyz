---
title: "30 Days of Vibe Coding - Giorno 19 - ReactionWall"
description: "Un muro di reazioni dal vivo per eventi con emoji volanti e messaggi di testo, alimentato dalla sincronizzazione in tempo reale di Firebase."
summary: "Un muro di reazioni dal vivo per eventi con emoji volanti e messaggi di testo, alimentato dalla sincronizzazione in tempo reale di Firebase."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-19", "react", "firebase", "framer-motion"]
series: ["30 Days of Vibe Coding"]
series_order: 19
seriesOpened: false
date: 2026-04-24
draft: false
#type: "hidden"
---

Giorno 19. Volevo qualcosa di divertente e interattivo per gli eventi dal vivo. Il tipo di cosa che butti su un proiettore a un meetup e lasci che la gente mandi reazioni dal telefono.

## Il Prompt

> "Costruisci un muro di reazioni dal vivo per eventi. Crea un evento, condividi un link o un QR code, e le reazioni volano sullo schermo in tempo reale. Barra di emoji in basso, anche messaggi di testo. Modalità a schermo intero per la proiezione. Firebase per la sincronizzazione in tempo reale."

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day19-reaction-wall.vercel.app)
{{< /alert >}}

## Come è stato costruito

[Watchfire](https://watchfire.io) ha suddiviso il tutto in 9 task. I primi erano le fondamenta: configurazione di Firebase Realtime Database, flusso di creazione eventi e autenticazione anonima così nessuno deve registrarsi. Poi sono arrivati la barra delle reazioni emoji, le reazioni animate che volano grazie a Framer Motion, la modalità a schermo intero per i proiettori, il toggle del suono e un passaggio finale di rifinitura.

La parte in tempo reale era la sfida principale qui. Ogni reazione deve apparire istantaneamente su tutti gli schermi che stanno visualizzando quell'evento. Firebase Realtime Database gestisce tutto questo nativamente, ma ci sono molte sfumature per farlo funzionare bene. Le reazioni usano una finestra scorrevole di 30 secondi così le vecchie scompaiono, e c'è un rate limiting di 1 reazione al secondo per evitare che le cose sfuggano di mano.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

La landing page è pulita e scura. Un solo pulsante per creare un muro per eventi.

![Landing page](images/screenshot-01.png)

Dai un nome al tuo evento e premi "Go Live." Questo è tutto il setup.

![Creazione evento](images/screenshot-02.png)

Una volta dentro, hai un QR code e un link condivisibile in alto a sinistra così i partecipanti possono unirsi istantaneamente dal telefono. In basso c'è una barra di emoji con 8 opzioni più un campo di testo per messaggi personalizzati fino a 50 caratteri.

![Muro evento con barra emoji e QR code](images/screenshot-03.png)

![Reazioni sullo schermo](images/screenshot-04.png)

La modalità display è dove diventa divertente. Schermo intero, sfondo scuro, reazioni che volano con effetti di bagliore. Gli emoji hanno traiettorie casuali, dimensioni variabili e un'animazione di oscillazione. Anche i messaggi di testo fluttuano in piccole bolle viola. Quando la gente inizia a spammare reazioni, si attiva un effetto burst.

![Modalità display con reazioni volanti e testo](images/screenshot-05.png)

Ci sono dettagli carini che non avevo esplicitamente chiesto. Feedback aptico su mobile quando invii una reazione. Suoni pop tramite la Web Audio API con un toggle per disattivarli. Un indicatore di cooldown per sapere quando puoi inviare di nuovo dopo il rate limit.

## La Tech

- React 19 con TypeScript e Vite
- Firebase Anonymous Auth più Realtime Database
- Framer Motion per tutte le animazioni volanti
- QRCode.react per i QR code condivisibili

Framer Motion fa il lavoro pesante sul lato visivo. Ogni reazione ha la sua animazione con parametri casuali per traiettoria, rotazione e scala. Il risultato è che non esistono due reazioni uguali quando attraversano lo schermo.

## Provalo

{{< github repo="nunocoracao/Vibe30-day19-ReactionWall" showThumbnail=true >}}

**[Prova ReactionWall](https://vibe30-day19-reaction-wall.vercel.app)**

Crea un evento, apri il link sul telefono e inizia a mandarti reazioni da solo. È più soddisfacente di quanto dovrebbe essere.

## Verdetto del Giorno 19

Questo è uno di quei progetti dove l'aspetto in tempo reale lo fa sembrare vivo. Le app statiche vanno bene, ma c'è qualcosa nel vedere le reazioni apparire nell'istante in cui qualcuno tocca il telefono che lo fa sembrare un prodotto vero. Firebase ha gestito il livello di sincronizzazione, Framer Motion ha gestito il livello di animazione, e il tutto si è assemblato in un modo che funziona davvero per un evento dal vivo.

La condivisione tramite QR code, la modalità a schermo intero, il fatto che nessuno deve installare nulla o creare un account. Per un meetup o una conferenza, fa il suo lavoro. Non è production-grade, ma abbastanza buono da buttare su un proiettore e far partire la folla.

---

*Questo è il giorno 19 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito da IA.*
