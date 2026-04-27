---
title: "30 Days of Vibe Coding - Giorno 22 - LiveQ&A"
description: "Una bacheca di domande e risposte in tempo reale per eventi, AMA e talk, con voti dal vivo e controlli per il presentatore, costruita con Firebase Firestore."
summary: "Una bacheca di domande e risposte in tempo reale per eventi, AMA e talk, con voti dal vivo e controlli per il presentatore, costruita con Firebase Firestore."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-22", "nextjs", "firebase", "typescript", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 22
seriesOpened: false
date: 2026-04-27
draft: false
#type: "hidden"
---

Giorno 22. Sono stato a abbastanza eventi dove il Q&A è un casino. Gente che urla sopra gli altri, la stessa domanda fatta due volte, le migliori domande sepolte sotto le voci più forti. È ora di costruire qualcosa di meglio.

## Il Prompt

> "Costruisci una bacheca di Q&A dal vivo dove un presentatore crea una sessione, il pubblico invia e vota domande in tempo reale, e il presentatore può evidenziare, rispondere, scartare o chiudere la sessione. Includi un modale di condivisione con un QR code."

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day22-liveqa.vercel.app)
{{< /alert >}}

## Come è stato costruito

Questo è passato attraverso 7 task di [Watchfire](https://watchfire.io), costruendo dal livello database fino alla rifinitura finale:

1. **Configurazione di Firebase Firestore.** Il livello dati. Collezioni di sessioni e domande, autenticazione anonima così gli utenti possono entrare senza creare un account, e regole di sicurezza per tenere tutto bloccato.
2. **Creazione sessione.** Il presentatore inserisce un titolo e una descrizione, preme crea, e ottiene una pagina di sessione unica. Un form semplice, niente di elaborato.
3. **Invio domande.** I membri del pubblico arrivano sulla pagina della sessione e inviano domande. Limite di 280 caratteri per restare focalizzati. Le domande appaiono in tempo reale per tutti nella sessione.
4. **Voti in tempo reale.** Un voto per utente per domanda, applicato lato server. I conteggi dei voti si aggiornano dal vivo su tutti i client connessi. Ordina per più votati o più recenti.
5. **Controlli del presentatore.** Il presentatore ha pulsanti extra su ogni domanda: evidenzia, segna come risposta, scarta. Le domande evidenziate vengono promosse in un pannello dedicato sul lato destro dello schermo. Il presentatore può anche chiudere la sessione completamente.
6. **Modale di condivisione con QR code.** Un pulsante di condivisione apre un modale con il link della sessione, un pulsante copia, e un QR code generato con qrcode.react. Punta il telefono verso lo schermo e sei dentro.
7. **Rifinitura dell'interfaccia.** Pulizia del layout, perfezionamento del design a due colonne, assicurandosi che il pannello delle domande evidenziate sia bello sia su desktop che su mobile.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![Pagina di benvenuto](images/screenshot-01.png)

**Pagina di benvenuto pulita.** Crea una sessione o incolla un codice di sessione esistente per unirti. L'autenticazione anonima avviene dietro le quinte, quindi gli utenti scelgono solo un nome visualizzato e via.

![Richiesta nome visualizzato](images/screenshot-02.png)

**Nessuna frizione di registrazione.** La prima visita fa apparire una richiesta di nome visualizzato. Questo è tutto. L'autenticazione anonima di Firebase gestisce il resto. Niente email, niente password, niente flussi OAuth. Per uno strumento per eventi dal vivo, è esattamente giusto. Non vuoi che la gente si impantani con la creazione dell'account quando lo speaker ha appena detto "scansionate il QR code."

![Creazione sessione](images/screenshot-03.png)

**La creazione della sessione sono due campi.** Titolo e descrizione. Premi il pulsante e stai presentando un Q&A dal vivo. La semplicità qui conta perché il presentatore probabilmente sta configurando tutto cinque minuti prima dell'inizio del suo talk.

![Modale di condivisione con QR code](images/screenshot-04.png)

**Il modale di condivisione fa il suo lavoro.** Link della sessione con un pulsante copia e un QR code proprio lì. Questo è il workflow che immaginavo: il presentatore crea la sessione, proietta questo modale sul grande schermo, il pubblico scansiona il codice, e le domande iniziano ad arrivare.

![Vista del pubblico con le domande](images/screenshot-05.png)

**La vista del pubblico resta focalizzata.** Invia una domanda, vedi le altre domande, vota per quelle a cui vuoi una risposta. Il box di invio è in alto, la lista delle domande sotto, ordinate per più votate di default. Tutto si aggiorna in tempo reale attraverso i listener di Firestore.

![Vista del presentatore con i controlli](images/screenshot-06.png)

**Il presentatore ha strumenti di moderazione.** Ogni domanda mostra i pulsanti evidenzia, segna come risposta e scarta. Solo il presentatore li vede. C'è anche un pulsante di chiusura sessione nell'header che blocca tutto. La colonna destra mostra le domande evidenziate, o un messaggio placeholder se nessuna è ancora evidenziata.

![Vista completa del presentatore](images/screenshot-07.png)

**L'evidenziazione funziona bene.** Quando il presentatore evidenzia una domanda, viene promossa nel pannello destro con il testo della domanda e il nome dell'autore mostrati in evidenza. La domanda riceve anche un indicatore visivo nella lista principale così tutti possono vedere che è stata segnalata. Su mobile, questa sezione evidenziata si posiziona in cima alla pagina invece che in una colonna laterale.

![Domanda evidenziata](images/screenshot-08.png)

![Voti in azione](images/screenshot-09.png)

**I voti creano un filtro naturale.** Le migliori domande salgono in cima. Il presentatore non deve leggere tutto. Il pubblico fa la curation per te.

## I Report dei Bug

Questo è stato sorprendentemente pulito. I listener in tempo reale di Firestore hanno gestito le parti complicate, quindi le domande e i voti apparivano istantaneamente senza polling o logica di refresh manuale. Il flusso di autenticazione anonima era fluido. Nessun bug segnalato su questo progetto.

## Provalo

{{< github repo="nunocoracao/Vibe30-day22-liveqa" showThumbnail=true >}}

**[Prova LiveQ&A](https://vibe30-day22-liveqa.vercel.app)**

Crea una sessione e condividi il link. Non serve un account.

## Verdetto del Giorno 22

Quarto progetto Firebase. A questo punto il pattern si scrive da solo: autenticazione anonima, listener Firestore, sincronizzazione in tempo reale. Probabilmente potrei costruirne uno nel sonno. Lo stack tecnologico non è più la storia.

Quello che è interessante di questo è il livello di moderazione. La maggior parte degli strumenti di Q&A sono solo liste di domande con contatori di voti. La funzionalità di evidenziazione cambia le cose. Quando il presentatore evidenzia una domanda, viene trasmessa su ogni schermo nella sala. Il pubblico vede cosa viene affrontato. Il presentatore controlla il flusso senza urlare "prossima domanda per favore" in un microfono. Questa è un'intuizione di prodotto, non tecnica.

Lo userei in un talk reale? Sì. Sono stato a abbastanza conferenze dove il Q&A degenera in chiunque afferri il microfono per primo facendo una "domanda" di cinque minuti che in realtà è un commento. Questo risolve il problema. Il pubblico vota, le migliori domande salgono, il presentatore sceglie cosa affrontare. La voce più forte nella sala smette di essere il fattore decisivo.

Il pulsante scarta è silenziosamente la funzionalità più importante. Domande fuori tema, duplicati, qualcuno che cerca di fare il simpatico. Il presentatore le rimuove e nessuno se ne accorge. Nessun momento imbarazzante "passiamo oltre". Semplicemente scompaiono.

---

*Questo è il giorno 22 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
