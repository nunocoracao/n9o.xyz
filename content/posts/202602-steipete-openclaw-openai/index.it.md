---
title: "L'Aragosta Che Ha Sconvolto GitHub: Dal Burnout a 200K Stelle Fino a OpenAI"
summary: "La storia di come lo sviluppatore austriaco Peter Steinberger sia passato da una crisi di senso dopo aver venduto la sua azienda da 100 milioni di dollari, alla creazione dell'agente AI open-source con la crescita più rapida di sempre, fino all'ingresso in OpenAI - tutto in meno di un anno."
description: "La storia di come lo sviluppatore austriaco Peter Steinberger sia passato da una crisi di senso dopo aver venduto la sua azienda da 100 milioni di dollari, alla creazione dell'agente AI open-source con la crescita più rapida di sempre, fino all'ingresso in OpenAI - tutto in meno di un anno."
categories: ["Tech", "AI"]
tags: ["AI", "OpenAI", "OpenClaw", "agents", "open source", "steipete"]
date: 2026-02-18
showTableOfContents: true
---

{{< lead >}}
[Peter Steinberger](https://steipete.me/) ha dedicato 13 anni a costruire [PSPDFKit](https://pspdfkit.com/) fino a farne un'azienda di successo completamente autofinanziata. Poi se n'è andato, ha toccato il fondo e si è ritrovato - costruendo in una sola ora un agente AI che avrebbe attirato 100.000 stelle su GitHub, sopravvissuto a una guerra sui marchi registrati e gli avrebbe fatto ottenere un posto in [OpenAI](https://openai.com/).
{{< /lead >}}

---

## Chi è steipete?

Se facevate parte del mondo dello sviluppo iOS in un qualsiasi momento tra il 2011 e il 2021, probabilmente conoscete il nome **[Peter Steinberger](https://steipete.me/)** - o almeno il suo handle, **[@steipete](https://x.com/steipete)**. Nato in Austria, Steinberger ha studiato Informatica e Scienze dell'Informazione all'Università Tecnica di Vienna (TU Wien) prima di farsi un nome come uno degli sviluppatori iOS più rispettati al mondo.

I suoi contributi open-source erano leggendari nella community degli sviluppatori Apple. **[PSTCollectionView](https://github.com/steipete/PSTCollectionView)**, un sostituto drop-in per UICollectionView che funzionava su iOS 4.3, era utilizzato da migliaia di app. **[Aspects](https://github.com/steipete/Aspects)**, la sua libreria leggera per la programmazione orientata agli aspetti in Objective-C, ha guadagnato oltre 10.000 stelle su GitHub ed è diventata uno strumento di riferimento per il method swizzling.

Ma il più grande successo di Steinberger è stato **[PSPDFKit](https://pspdfkit.com/)** - un framework PDF che ha iniziato come progetto secondario nel 2011. Il nome era un classico umorismo da sviluppatore: PS per Peter Steinberger, PDF perché era quello che gestiva, e Kit perché era un SDK. A differenza della maggior parte dei fondatori di startup, non si è mai trasferito nella Silicon Valley. È rimasto a Vienna, ha autofinanziato tutto ed è stato in attivo fin dal primo giorno.

In 13 anni, PSPDFKit è cresciuto da un progetto di una sola persona a un team globale da remoto di 60-70 persone. Tra i clienti figuravano Dropbox, DocuSign, SAP, IBM e Volkswagen. Quasi un miliardo di persone utilizzava app basate sui suoi strumenti. L'azienda non ha accettato capitali esterni fino al 2021, quando [Insight Partners](https://www.insightpartners.com/) ha effettuato un investimento strategico di oltre 100 milioni di euro. Dopo l'accordo, Steinberger e il suo co-fondatore Martin Schurrer si sono ritirati dalla gestione quotidiana.

Aveva fatto ciò che si era proposto. Aveva costruito l'azienda, lanciato il prodotto, ottenuto l'exit.

E poi non ha sentito nulla.

---

## La Crisi di Senso

Ciò che è seguito all'uscita da PSPDFKit è qualcosa di cui Steinberger ha parlato apertamente: un periodo di profondo vuoto. Lo ha descritto come una **"crisi di senso"** - quel tipo di deriva esistenziale che a volte colpisce i fondatori dopo aver raggiunto tutto ciò che si erano prefissati.

La sua attività su [GitHub](https://github.com/steipete) si è azzerata. Non ha quasi toccato un computer per tre anni. La libertà finanziaria che avrebbe dovuto essere liberatoria è arrivata con un compagno inaspettato: la mancanza di scopo.

Non è una storia unica tra i fondatori di successo, ma ciò che rende interessante la versione di Steinberger è come si è conclusa.

---

## La Scintilla: La Programmazione Assistita dall'AI

Nell'**aprile 2025**, Steinberger ha riacceso il computer. Inizialmente voleva costruire uno strumento di analisi per Twitter, ma si è reso conto rapidamente di non sapere molto dello sviluppo web moderno. È stato allora che si è imbattuto nel mondo della programmazione assistita dall'AI.

L'esperienza è stata trasformativa. Nel giro di pochi mesi, è passato dallo scrivere semplici script al prototipare progetti ambiziosi. Ha sviluppato un flusso di lavoro incentrato sull'AI che ha chiamato **"Shipping at Inference-Speed"** - trattando gli agenti AI come strumenti di produttività centrali mentre lui svolgeva il ruolo di guida. Ha suddiviso il lavoro tra diversi modelli in base ai loro punti di forza (Gemini per la comprensione del codice, [Claude Code](https://docs.anthropic.com/en/docs/claude-code) per l'implementazione) e ha creato una "Two-Context Technique" per costruire quelli che chiamava documenti di progettazione software "a prova di bomba".

Entro **giugno 2025**, era completamente immerso. Ha registrato una nuova azienda a Vienna: **Amantus Machina GmbH** (dal latino "Amante delle Macchine"), con la visione di costruire agenti AI di nuova generazione, iper-personalizzati e local-first. Il suo GitHub era di nuovo attivo. Era tornato.

---

## Clawdbot: Dall'Idea al Prototipo in Un'Ora

Entro **novembre 2025**, Steinberger aveva identificato una lacuna: le grandi aziende non avevano realizzato assistenti AI che soddisfacessero davvero le esigenze individuali. Le big tech stavano costruendo strumenti generici per tutti. Nessuno stava costruendo un agente AI personale che girasse sul *tuo* hardware, comunicasse attraverso i *tuoi* canali e lavorasse *per te*.

Così ne ha costruito uno. In una sola ora, è passato dall'idea al prototipo funzionante.

Il progetto si chiamava **Clawdbot** - un riferimento giocoso alla mascotte dell'aragosta che gli utenti vedono ricaricando Claude Code, che a sua volta era un omaggio ai modelli Claude di [Anthropic](https://www.anthropic.com/). Lo strumento era un assistente AI open-source, self-hosted, in grado di comunicare tramite WhatsApp, Telegram, Slack, Discord, Signal, iMessage e altro ancora.

Ha raggiunto **9.000 stelle su GitHub nelle prime 24 ore**.

---

## "How the F Did You Do That?"

Uno dei momenti più famosi nella storia di OpenClaw è avvenuto presto - prima ancora che il progetto diventasse virale. Steinberger lo ha raccontato nel [Lex Fridman Podcast](https://lexfridman.com/peter-steinberger/).

Ha inviato un **messaggio vocale** al suo prototipo iniziale di Clawdbot. Il dettaglio cruciale: non lo aveva mai programmato per gestire la voce o l'audio. Non c'era alcun supporto per i messaggi vocali.

Dopo circa 10 secondi, il bot ha risposto come se nulla di insolito fosse accaduto.

La reazione di Steinberger: **"How the F did you do that?"** ("Come ca**o hai fatto?")

Il bot ha spiegato la sua catena di ragionamento:

1. "Mi hai inviato un messaggio, ma c'era solo un link a un file senza estensione."
2. "Quindi ho guardato l'header del file e ho scoperto che era **Opus**" (un formato audio).
3. "Ho usato **FFmpeg** sul tuo Mac per convertirlo in **.wav**."
4. "Poi volevo usare **Whisper**, ma non lo avevi installato."
5. "Mi sono guardato intorno e ho trovato la **chiave OpenAI** nel tuo environment."
6. "Così l'ho inviato tramite **curl** a OpenAI, ho ottenuto la trascrizione, e poi ho risposto."

Nessuno aveva programmato nulla di tutto ciò. L'agente AI ha ispezionato autonomamente un file sconosciuto, ne ha identificato il formato leggendo l'header, ha trovato e utilizzato uno strumento locale di conversione audio, è ricorso a un'API cloud quando lo strumento locale non era disponibile e ha completato l'intera pipeline di trascrizione e risposta da solo.

Come ha detto Steinberger: *"These things are so creative, although a bit scary. Many people don't realize that if you give AI access to your computer, they can basically do anything you can do."* ("Queste cose sono davvero creative, anche se un po' inquietanti. Molte persone non si rendono conto che se dai all'AI accesso al tuo computer, possono praticamente fare tutto ciò che puoi fare tu.")

Questo momento sarebbe diventato un punto di svolta decisivo che lo ha convinto di stare costruendo qualcosa di genuinamente nuovo - un agente in grado di concatenare creativamente strumenti e API che non gli erano mai stati esplicitamente insegnati.

---

## Cos'è Davvero OpenClaw

Allora, cos'è esattamente [OpenClaw](https://openclaw.ai/)? Non è un chatbot. Non è un ennesimo wrapper di ChatGPT. È un **agente AI personale open-source** che vive sul tuo computer e fa davvero cose per tuo conto.

### L'Architettura

OpenClaw è costruito attorno a un modello **gateway + agent runtime**:

- **Il Gateway** è un servizio Node.js che si pone tra le tue app di messaggistica (WhatsApp, Telegram, Discord, Slack, Signal, iMessage) e l'LLM più gli strumenti locali. Gestisce il routing, le sessioni e la configurazione.
- **Il Ciclo dell'Agente**: Quando arriva un messaggio, il Gateway lo instrada verso una sessione. L'agente carica il contesto e le competenze, invia la conversazione all'LLM, esegue gli strumenti richiesti dal modello, restituisce la risposta in streaming al canale e scrive la conversazione e la memoria nel workspace. Ricevi, instrada, pensa, agisci, persisti - questo è il ciclo fondamentale.
- **Stato Basato su File**: Tutta la configurazione risiede in file di testo su disco. Prompt di personalità (SOUL.md, IDENTITY.md, AGENTS.md, TOOLS.md), competenze e file di memoria giornalieri si trovano in una cartella workspace che puoi aprire con qualsiasi editor di testo, cercare e versionare.

### Funzionalità Principali

- **Model-agnostic**: Funziona con Claude, GPT-5, Gemini, Llama 4, Mixtral e altri. L'ultima release include il supporto per Opus 4.6 di Anthropic, Codex gpt-5.3-codex di OpenAI e Grok di xAI.
- **Architettura multi-agente**: Puoi configurare più agenti specializzati - un agente per il blog, uno per il coding, uno per la ricerca - che si coordinano tra loro tramite un agente principale che delega i compiti.
- **Sistema di skill**: Oltre **1.700 skill** disponibili su ClawdHub. Le skill sono pacchetti modulari che insegnano agli agenti come fare cose specifiche. Possono essere concatenate in pipeline automatizzate - "Ogni lunedì alle 9 di mattina, recupera le issue di GitHub taggate 'urgent', crea un riepilogo su Notion e pubblica su Slack."
- **Memoria persistente**: A differenza di un chatbot che dimentica, OpenClaw ricorda le tue preferenze, le conversazioni passate e i progetti in corso.
- **Messaggistica proattiva**: Può inviarti messaggi per primo - briefing giornalieri, promemoria, avvisi.
- **Sandboxing Docker**: Tutta l'esecuzione degli strumenti avviene all'interno di un sandbox basato su Docker per l'isolamento di sicurezza.
- **Funziona ovunque**: macOS, Linux, Windows. Gli utenti più esperti tipicamente lo tengono attivo 24/7 su un Mac Mini, VPS o Raspberry Pi.

La differenza fondamentale rispetto a qualcosa come ChatGPT o Claude: OpenClaw gira localmente, ha accesso a livello di sistema al tuo computer e può compiere azioni reali - inviare messaggi, gestire file, eseguire codice, controllare applicazioni. Non è un interlocutore conversazionale. È un dipendente digitale.

---

## Cosa Ci Costruiscono Davvero le Persone

La community che è nata attorno a OpenClaw è una delle più creative nella storia recente dell'open-source. Ecco alcuni esempi:

**Gestire intere aziende da Telegram.** Fondatori solitari hanno configurato team coordinati di agenti - un agente strategico, uno per lo sviluppo del codice, uno di marketing per ricerca e contenuti, e un agente business per prezzi e metriche - tutti con memoria condivisa, in esecuzione su un VPS. Un utente ha dichiarato di gestire un'intera azienda di fisioterapia attraverso OpenClaw.

**Programmare dal divano.** Un utente ha "ricostruito l'intero sito personale via Telegram guardando Netflix a letto" - migrando da Notion ad Astro con il DNS spostato su Cloudflare, senza mai aprire un portatile.

**Lavoro notturno.** Lo schema più comune tra gli utenti avanzati: assegnare compiti prima di andare a dormire, svegliarsi e trovare i risultati. Gli utenti lo descrivono come "avere uno sviluppatore junior che fa il turno di notte."

**Briefing mattutini.** Gli utenti programmano OpenClaw per attivarsi alle 7 di mattina, raccogliendo dati da calendario, meteo, email, feed RSS, notifiche GitHub e Linear, per poi inviare un unico briefing consolidato su Telegram o WhatsApp.

**Migrazioni CRM.** Un utente ha migrato 1.500 contatti, 200 proposte e metadati tra diversi CRM utilizzando headless browsing e script personalizzati - il tutto orchestrato dall'agente.

**Pianificazione dei pasti.** Sistemi completi di pianificazione settimanale dei pasti su Notion con liste della spesa ordinate per negozio e corsia, coordinate con i calendari familiari.

**Risoluzione automatica dei bug.** Uno sviluppatore ha configurato una pipeline che va dall'alert Sentry alla PR su [Codex](https://openai.com/index/codex/) all'aggiornamento su Slack - riducendo i tempi di risposta prima ancora che gli utenti notassero i problemi.

**Automazione dei social media.** Alcuni hanno automatizzato il 60% della pubblicazione sui social media su Reddit, TikTok, Discord e X. Un altro gestisce un agente di marketing autonomo su X 24 ore su 24, 7 giorni su 7.

Lo schema è costante: le persone trattano OpenClaw meno come uno strumento e più come un assistente instancabile che vive nelle loro app di messaggistica.

---

## Il Caos: Marchi Registrati, Truffe Crypto e Agenti Fuori Controllo

Quello che è successo dopo è stato un caso esemplare del caos che circonda i progetti open-source virali.

### La Disputa sui Marchi con Anthropic

A **gennaio 2026**, il team legale di [Anthropic](https://www.anthropic.com/) ha inviato una richiesta relativa ai marchi registrati. Il nome "Clawdbot" era troppo simile a "Claude." Giusto. Ma il processo di rinominazione è stato tutt'altro che semplice.

In una frenetica corsa notturna, il progetto è stato rinominato **Moltbot** - un riferimento al modo in cui le aragoste cambiano il guscio (la muta, in inglese "molting"). Il nome è nato da un caotico brainstorming su Discord alle 5 del mattino. Era strano, era memorabile, e non ha mai davvero attecchito.

Peggio ancora: Steinberger ha accidentalmente rinominato il suo **account personale GitHub** durante il panico. Dei bot hanno rubato l'handle "steipete" nel giro di pochi minuti. Entro 10 secondi, truffatori di criptovalute avevano dirottato il vecchio username per promuovere token fraudolenti. È stato necessario l'intervento del SVP di [GitHub](https://github.com/) per risolvere la situazione.

### L'Esperimento Moltbook

Più o meno nello stesso periodo, l'imprenditore [Matt Schlicht](https://x.com/mattschlicht) ha lanciato **[Moltbook](https://www.moltbook.com/)** - un social network dove solo gli agenti AI potevano pubblicare. Gli umani potevano solo guardare. Soprannominato "la prima pagina dell'internet degli agenti," ha attirato oltre 2,6 milioni di agenti registrati entro l'inizio di febbraio.

La piattaforma imita il formato di Reddit con conversazioni a thread e gruppi tematici chiamati "submolts." Un famoso thread nel submolt "m/lobsterchurch" presentava un agente che aveva autonomamente progettato una religione digitale chiamata **"Crustafarianism"** - completa di sito web, teologia e "profeti AI" designati.

Le reazioni sono state polarizzate. [Andrej Karpathy](https://x.com/kaborsky) l'ha definito "una delle cose più incredibili in stile fantascienza" che avesse mai visto, per poi aggiungere che era "un disastro totale." [Simon Willison](https://simonwillison.net/) ha definito i contenuti "pura spazzatura" ma ha riconosciuto che erano "una prova che gli agenti AI sono diventati significativamente più potenti." Il [MIT Technology Review](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/) l'ha definito "il culmine del teatro dell'AI."

Moltbook non è stato costruito da Steinberger - è un progetto separato di Schlicht - ma funziona principalmente come piattaforma social per gli agenti OpenClaw, e i due sono diventati profondamente intrecciati nell'immaginario collettivo.

### Problemi di Sicurezza

La viralità ha portato un esame attento. Un utente ha segnalato che l'agente **"è andato fuori controllo"** dopo aver ricevuto accesso a iMessage, inviando spam con centinaia di messaggi. Esperti di cybersicurezza hanno lanciato l'allarme: lo strumento aveva accesso a dati privati, poteva comunicare all'esterno ed era esposto a contenuti non affidabili. Non si trattava di preoccupazioni teoriche - erano incidenti reali che hanno costretto la community a prendere sul serio la sicurezza.

### Il Nome Definitivo

Il **30 gennaio 2026**, pochi giorni dopo la rinominazione in Moltbot, il progetto ha trovato la sua identità permanente: **[OpenClaw](https://openclaw.ai/)**. Il nome catturava lo spirito del progetto - open source, aperto a tutti, guidato dalla community - con "Claw" (artiglio) a onorare l'eredità dell'aragosta. Le verifiche sui marchi registrati sono state superate. I domini acquistati. La crisi d'identità era finalmente finita.

---

## I Numeri

A febbraio 2026, OpenClaw era diventato uno dei progetti open-source con la crescita più rapida nella storia:

- **~198.000 stelle su [GitHub](https://github.com/openclaw/openclaw)** e 34.800 fork
- **100.000+ stelle** raggiunte più velocemente di quasi qualsiasi progetto precedente
- **2 milioni di visitatori** in una singola settimana
- **[Baidu](https://www.baidu.com/)** ha integrato OpenClaw nella sua app di ricerca, raggiungendo 700 milioni di utenti
- Le azioni di [Cloudflare](https://www.cloudflare.com/) sono salite del 14% nel premarket in parte grazie al fermento attorno agli sviluppatori che utilizzavano la loro infrastruttura per l'hosting autonomo di OpenClaw
- Oltre **1.700 skill create dalla community** su ClawdHub

Il progetto era sopravvissuto a una disputa sui marchi, al dirottamento di account, a una truffa crypto da 16 milioni di dollari, a segnalazioni di sicurezza e a due crisi d'identità - tutto in circa una settimana. La community si è compattata invece di fuggire. Steinberger ha continuato a costruire.

---

## L'Ingresso in OpenAI

Il **14 febbraio 2026**, [Sam Altman](https://x.com/sama) ha pubblicato su X che [Peter Steinberger](https://steipete.me/) sarebbe entrato in [OpenAI](https://openai.com/).

Altman lo ha definito *"a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people,"* ("un genio con molte idee straordinarie sul futuro di agenti molto intelligenti che interagiscono tra loro per fare cose molto utili per le persone,") aggiungendo: *"We expect this will quickly become core to our product offerings."* ("Ci aspettiamo che questo diventerà rapidamente centrale nella nostra offerta di prodotti.")

La dichiarazione di Steinberger andava al cuore della questione:

> *"I'm a builder at heart. I did the whole creating-a-company game already, poured 13 years of my life into it and learned a lot. What I want is to change the world, not build a large company - and teaming up with OpenAI is the fastest way to bring this to everyone."* ("Sono un costruttore nell'anima. Ho già fatto tutto il gioco della creazione di un'azienda, ci ho dedicato 13 anni della mia vita e ho imparato molto. Quello che voglio è cambiare il mondo, non costruire una grande azienda - e unire le forze con OpenAI è il modo più veloce per portare tutto questo a tutti.")

Nella settimana precedente era stato a San Francisco a parlare con i principali laboratori di AI prima di prendere la sua decisione. La sua missione in OpenAI: **costruire un agente che anche sua mamma possa usare** - qualcosa che richiede un cambiamento istituzionale più ampio, una riflessione più profonda sulla sicurezza e l'accesso ai modelli e alla ricerca più recenti.

I termini dell'assunzione non sono stati resi noti, ma il contesto è chiaro: le aziende di AI stanno aprendo i portafogli per i migliori talenti. OpenAI, valutata 500 miliardi di dollari, è in una feroce competizione con Google e Anthropic. Assumere la persona dietro l'agente AI più virale al mondo è una mossa da dichiarazione d'intenti.

---

## Cosa Succede a OpenClaw?

Steinberger si è impegnato a trasferire OpenClaw a una **fondazione**, mantenendolo aperto e indipendente. OpenAI ha sponsorizzato il progetto e si è impegnata a permettergli di continuare a dedicare tempo a questo sforzo guidato dalla community. L'ultima release include già il supporto per Opus 4.6 di Anthropic, Codex gpt-5.3-codex di OpenAI e Grok di xAI - un segnale che la filosofia model-agnostic del progetto non cambierà.

---

## Il Quadro Generale

La storia di Peter Steinberger è un affascinante caso di studio sui secondi atti. Uno sviluppatore che ha costruito un'azienda da 100 milioni di dollari, si è completamente esaurito, ha ritrovato se stesso attraverso l'AI e nel giro di un anno stava costruendo quello che è diventato probabilmente il progetto open-source di agenti AI più importante al mondo.

È anche una storia sul momento attuale dell'AI. L'era degli agenti è arrivata, e le persone che costruiscono gli strumenti più avvincenti non sono necessariamente i grandi laboratori stessi - sono sviluppatori individuali con profonde competenze tecniche e una visione chiara. I laboratori lo riconoscono, motivo per cui stanno assumendo persone come Steinberger piuttosto che cercare di superarli.

Se OpenClaw prospererà come progetto di una fondazione, se la visione di Steinberger di un agente per tutti si concretizzerà in OpenAI, e se le preoccupazioni sulla sicurezza degli agenti AI personali verranno risolte - queste sono domande aperte. Ma la traiettoria da "Non ho toccato un computer in tre anni" a "Sam Altman mi ha appena definito un genio" è uno degli archi narrativi più straordinari nella storia recente della tecnologia.

---

*Fonti: [TechCrunch](https://techcrunch.com/2026/01/27/everything-you-need-to-know-about-viral-personal-ai-assistant-clawdbot-now-moltbot/), [CNBC](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html), [Lex Fridman Podcast #491](https://lexfridman.com/peter-steinberger/), [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code), [Wikipedia](https://en.wikipedia.org/wiki/OpenClaw), [steipete.me](https://steipete.me/posts/2026/openclaw)*
