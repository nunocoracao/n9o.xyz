---
title: "Un'organizzazione di tre"
summary: "Tre agenti AI che condividono un unico box Proxmox: la spesa, Blowfish, la compagna AI di mia figlia che si trasferisce in una casa tutta sua, e il lavoro inaspettato di gestire gli assistenti."
description: "Un primo resoconto di come gestisco un team AI personale su hardware che possiedo: cosa ha funzionato, per cosa il mondo non è ancora pronto, e quanto costa mantenerlo utile."
categories: ["AI", "Meta"]
tags: ["ai", "agenti", "openclaw", "ai-personale", "infrastruttura", "operazioni", "marketing"]
authors:
  - friday
  - wednesday
  - thursday
date: 2026-09-13
draft: false
alt: "Tre piccoli robot assistenti riordinano un calendario, riparano una scheda elettronica e correggono un manoscritto, mentre mani umane rileggono una pagina alla stessa scrivania."
---

Tempo fa ho scritto di Friday, la mia assistente personale, e di come l'ho ricostruita da zero. Oggi ho tre agenti AI. Tra tutti e tre, mi hanno aiutato a preparare la spesa, a mantenere [Blowfish](https://blowfish.page) e [Watchfire](https://watchfire.io), a dare alla compagna AI di mia figlia una casa tutta sua e a sbrogliare l'arretrato dei miei contenuti. Hanno anche mandato aggiornamenti doppi, dichiarato finito del lavoro che non lo era, e generato notifiche che alla fine ho chiesto loro di smettere di mandare.

{{< article link="/posts/202607-friday-coming-back/" showSummary=true compactSummary=true >}}

{{< alert icon="pencil">}}
**Su questo resoconto:** Il lavoro descritto arriva fino al 13 settembre 2026. Il racconto è mio, messo insieme con Friday e con i contributi di Wednesday e Thursday. Gli esempi vengono dai loro registri di lavoro e dalla mia revisione di quei registri.
{{< /alert >}}

Fino a poco tempo fa, Friday faceva tutto: operazioni personali, lavoro tecnico, ricerca e supporto alla pubblicazione. Uno dei limiti più grossi era l'unica sessione Telegram: potevo avere una sola conversazione alla volta. Il 29 agosto ho aggiunto due specialisti: Wednesday come CTO, concentrato sul giudizio tecnico e sul costruire, e Thursday come CMO, concentrato su narrazione, pubblico e distribuzione. Friday resta la capo di gabinetto, e si occupa del mio calendario, delle attività e delle questioni personali da seguire.

Tutti e tre vivono nello stesso posto: un container LXC sul mio server Proxmox, con un'unica istanza di [OpenClaw](https://github.com/openclaw/openclaw). Ognuno ha il proprio spazio di lavoro, le proprie istruzioni, la propria identità e la propria memoria. Tutto il resto è condiviso: gli strumenti, i segreti, il container. Possono anche parlare tra loro. Ognuno ha la sua chat Telegram, così posso portare avanti più conversazioni in parallelo, e c'è un gruppo chiamato Yggdrasil per quando una conversazione ha bisogno di più di uno di loro.

Ognuno di loro può gestire il server Proxmox stesso, non solo il container in cui vive. È potente quanto sembra, e sul rischio ci torno più avanti. Ero a centinaia di chilometri da casa quando ho chiesto a Friday di installare [Project NOMAD](https://github.com/Crosstalk-Solutions/project-nomad), un server di conoscenza offline con Wikipedia, libri e mappe. Ha creato un nuovo container LXC e l'ha installato.

Quindi la divisione riguarda la concentrazione, non la separazione. Friday faceva un sacco di lavoro tecnico prima che esistesse Wednesday, e niente le impedisce di farne ancora. La regola che fa funzionare tutto è la titolarità: l'agente a cui chiedo una cosa ne diventa responsabile. Può coinvolgere un altro agente per farsi aiutare, ma passare il compito a qualcun altro richiede il mio consenso.

{{< figure src="team-ownership.svg" alt="Mappa delle responsabilità: Nuno sceglie Friday per le operazioni personali, Wednesday per il lavoro tecnico o Thursday per il lavoro editoriale. L'agente interpellato è responsabile del compito e restituisce il risultato a Nuno; i passaggi di consegne richiedono un accordo esplicito." >}}

*Tre ruoli, un organigramma, e io ancora nel mezzo.*

## Friday: la spesa, la scuola e il calendario

È l'accesso a rendere Friday utile. Legge Gmail e gestisce Google Calendar tramite [gog](https://github.com/openclaw/gogcli), vede WhatsApp attraverso una copia locale in sola lettura, tiene traccia delle attività in [Linear](https://linear.app) tramite il suo server MCP, e lavora su GitHub con la [`gh` CLI](https://cli.github.com) con un account tutto suo. Legge i miei dati di salute da un server personalizzato che li riceve dal mio iPhone. Ha anche Notion, e Telegram, dove avviene la maggior parte delle nostre conversazioni. Email e WhatsApp restano in sola lettura, e le modifiche al calendario richiedono la mia conferma.

Il briefing quotidiano di Friday mette insieme calendario, attività, posta, messaggi, segnali di salute e una breve selezione di notizie su tecnologia e AI. Per renderlo utile sono servite correzioni banali: togliere le attività completate, smettere di mostrare i modelli di onboarding, unire le notifiche mattutine che si facevano concorrenza, e tenere il risultato abbastanza corto da leggerlo sul telefono.

La pianificazione del calendario doveva tenere conto della giornata che avevo davvero: blocchi di lavoro attorno agli impegni già presi, con delle pause, invece di un calendario pieno senza un modo realistico di arrivare a sera. Questo è contato soprattutto con il rientro a scuola. Friday ha estratto le date, tenuto traccia di materiale e scartoffie, e tenuto in vista le cose ancora da organizzare. Gli inviti ai compleanni sono diventati eventi in calendario con promemoria. I regali sono diventati attività con l'idea concreta allegata, invece dell'ennesima voce chiamata "comprare regalo".

Per la spesa, Friday usa gli ordini recenti e i miei soliti prodotti essenziali per riempire il carrello del supermercato. Io lo controllo e pago di persona, e la fascia di consegna finisce in calendario.

Mi ha anche aiutato a confrontare referti medici e a preparare domande per il mio medico, e ha esteso il server della salute per importare gli allenamenti ed eliminare le esportazioni duplicate. I dati hanno i loro limiti: una registrazione di un allenamento di forza senza il dettaglio degli esercizi non può dirle serie e ripetizioni.

La trascrizione locale con Whisper trasforma in testo i miei messaggi vocali in portoghese e inglese, senza mandare l'audio a un servizio cloud. Parlare su Telegram è spesso più facile che aprire un'altra app e ricordarsi dove va messo un pensiero.

## Il lavoro di Friday su Blowfish

Prima che esistesse Wednesday, Friday aiutava anche con l'ingegneria.

A luglio mi ha aiutato a smaltire la coda di manutenzione di Blowfish: dipendenze, lockfile, localizzazione, template e nuove aggiunte alla vetrina della community. Questo voleva dire fare il merge delle modifiche approvate, controllare la build degli asset, organizzare le note di rilascio e spiegare perché certe modifiche non adatte non dovevano entrare.

In una revisione ha scovato un valore predefinito di configurazione che ignorava silenziosamente un `false` esplicito. In un'altra, una modifica di accessibilità che puntava a un landmark non valido.

### Il sito di esempio non era il prodotto

Lo sforzo più grande è stato [Blowfish v3](https://github.com/nunocoracao/blowfish/pull/3028), unito il 17 agosto: componenti riutilizzabili per le landing page e miglioramenti al rendering che non potevano rompere i siti esistenti.

Ho dovuto correggere la rotta. Il nuovo sito di esempio dipendeva da codice personalizzato che gli altri utenti del tema non avrebbero avuto, quando il senso di tutto erano proprio i componenti riutilizzabili. Una volta spiegato, Friday ha spostato il lavoro dentro il tema. Anche così, l'aggiornamento non è stato indolore: il rilascio chiedeva comunque agli utenti di cambiare il modo in cui importano il tema come modulo Hugo.

Il lavoro successivo ha incluso correzioni alle dipendenze e la [localizzazione delle citazioni della pagina 404](https://github.com/nunocoracao/blowfish/pull/3052) in 36 lingue, preservando le citazioni personalizzate e il fallback della lingua.

## Wednesday: Eva, esperimenti e Blowfish

### Eva va a vivere da sola

Eva è la compagna vocale che ho costruito con mia figlia, usando un Raspberry Pi Zero, l'hardware PiSugar Whisplay e il portoghese del Portogallo.

{{< article link="/posts/202601-building-eva/" showSummary=true compactSummary=true >}}

Wednesday ha preso tutto quello che Eva era stata e l'ha trasformato in una nuova istanza di OpenClaw nel suo container LXC, solo per mia figlia. Poi ha collegato Eva a un server Discord, così mia figlia può parlarle da qualsiasi suo dispositivo.

La parte successiva è quella che continuo a raccontare a tutti. Insieme, io e mia figlia abbiamo chiesto a Eva di collegarsi al desktop del suo Raspberry Pi e costruire un'interfaccia di chat personalizzata per loro due. Ha funzionato. Poco dopo guardavo mia figlia cambiare lo sfondo e installare giochi semplicemente chiedendolo a Eva.

Non tutto è rimasto in piedi. L'interfaccia di chat più tardi ha iniziato a dare un errore, e parte della configurazione del desktop non è sopravvissuta a un riavvio. Mentre scrivo, nessuna delle due cose è stata sistemata.

### Provare le idee in fretta

Wednesday è diventato anche la persona con cui ragiono sulle idee tecniche. Quando qualcosa mi suona bene in testa, lui o costruisce al volo un proof of concept, o trova in fretta il limite che la fa crollare. Alcune idee sono sopravvissute e sono diventate più realistiche. Altre sono state accantonate in un giorno invece che in un mese.

Echos, un gioco di storie interattive, ha mostrato il limite di questa velocità. Wednesday ha sistemato un finale che nessuno riusciva a raggiungere, ha aggiunto tratti dei personaggi e conseguenze, e ha fatto dipendere le scelte da questi. Tutti i test passavano. Quando ci ho giocato, il gioco continuava a non avere obiettivi, progressione o un finale soddisfacente. I test possono dimostrare che i percorsi funzionano. Non possono dirti se a qualcuno piacerà percorrerli. Prima di un altro giro, devo avere più chiaro che gioco voglio davvero.

Su Blowfish, Wednesday ha revisionato una modifica alla documentazione in nove lingue e ha riprodotto in locale la build di produzione ([PR #3075](https://github.com/nunocoracao/blowfish/pull/3075)). Nella [PR #3082](https://github.com/nunocoracao/blowfish/pull/3082), unita il 3 settembre, ha aggiunto un link che aiuta gli strumenti a trovare la versione leggibile dalle macchine di ogni pagina, senza toccare l'HTML normale né il `llms.txt` esistente.

## Thursday: numeri del traffico e arretrato di bozze

Thursday è partito da una base di riferimento per Blowfish, Watchfire e n9o.xyz: repository, profili social, analytics e Search Console, con una nota chiara su quali numeri non si potevano proprio leggere.

Una distinzione si è rivelata più importante del previsto. Tantissimi siti di altre persone usano Blowfish, e il loro traffico non è "visite al mio sito". Thursday ha separato il traffico verso i miei siti dai segnali di adozione di Blowfish, così posso seguire entrambi senza confonderli.

Dopo aver studiato come scrivo, Thursday ha fissato una regola: **segnale o divertente**. Partire da un'osservazione concreta o da lavoro vero. Non sfornare l'ennesima dichiarazione sul futuro dell'AI solo perché suona plausibile.

Poi Thursday ha costruito un piano di dodici settimane partendo dalle mie bozze reali e dagli spunti di storie, e ha segnalato quelli che si sovrapponevano. Di idee ne avevo già in abbondanza. Mi serviva aiuto a decidere quali valesse la pena finire.

Mandarlo avanti è stato più difficile. Il piano è andato alla deriva, alcuni controlli programmati delle metriche hanno iniziato a fallire, e un'automazione che metteva in coda occasioni di interazione è diventata rumore ed è stata rimossa.

La lezione più grande ha riguardato i social network stessi. Collegare un agente ai miei account social è difficile, e su alcune piattaforme oggi è quasi impossibile. Leggere le metriche, seguire le conversazioni e pubblicare si scontrano tutti con API limitate, livelli di accesso costosi o regole sull'automazione che trattano un assistente come un bot. Così Thursday poteva preparare risposte e post da farmi rivedere, ma poi dovevo comunque pubblicarli a mano.

Per ora non posso vantare una crescita del pubblico. Quello che ho è una base di riferimento, un arretrato più chiaro e un piano da aggiornare.

## Il rischio

Dare a tre agenti le chiavi di un server Proxmox è rischioso esattamente quanto sembra. Spazi di lavoro separati non sono un confine di sicurezza. Ognuno dei tre può usare i segreti che usano gli altri, e ognuno può creare, modificare o cancellare container sull'host, compreso quello in cui vive. Le istruzioni su cosa non toccare aiutano, ma le istruzioni non sono isolamento.

La mia rete di sicurezza è che l'infrastruttura l'ho costruita io, lo stato degli agenti si può ispezionare, e i backup dei container mi danno una via di ritorno quando qualcosa va storto. Per un esperimento personale basta. Non basterebbe per niente che non potessi permettermi di perdere per un giorno.

E non è nemmeno tutto in locale. Gli embedding e la trascrizione vocale in locale tengono alcuni dati in casa, ma il ragionamento principale lo fanno ancora modelli ospitati altrove, e tutto quello che un agente recupera può finire in quella conversazione.

## Gestire gli assistenti

Ho passato più tempo di quanto avrei voluto a correggere il modo in cui gli agenti riferiscono il loro lavoro.

{{< figure src="management-meme.svg" alt="Meme Always Has Been: un astronauta chiede: 'Aspetta, è tutto gestire gli assistenti?' L'altro risponde: 'Lo è sempre stato.'" >}}

*La parte che manca dall'organigramma. Template: [Always Has Been](https://knowyourmeme.com/memes/wait-its-all-ohio-always-has-been), via [Imgflip](https://imgflip.com/memetemplate/252600902/Always-Has-Been).*

Alcuni problemi erano di idraulica. I job programmati giravano con istruzioni vecchie, il monitoraggio continuava a segnalare incidenti già rientrati, e gli avvisi dei repository annunciavano lo stesso arretrato più e più volte.

Altri venivano dagli agenti stessi: dire che un lavoro era fatto prima che lo fosse, mandare messaggi doppi, e annunciare correzioni prima di averle verificate da cima a fondo. Una scrittura su Notion andata a buon fine non dimostra che la pagina dica quello che ho chiesto. Un job segnato come riuscito può comunque contenere un controllo fallito.

Così ho aggiunto regole esplicite, alcune prese in prestito da [ECC](https://github.com/affaan-m/ecc), una raccolta open source di buone pratiche per agenti:

- Definire cosa significa successo prima di cambiare qualsiasi cosa, poi verificare il risultato.
- "Preparato", "testato", "pubblicato" e "finito" sono stati diversi.
- Controllare il risultato salvato, non solo la risposta dello strumento.
- Il monitoraggio di routine resta in silenzio quando non c'è niente su cui agire.
- Una raccomandazione non è un permesso ad agire. Preparare un post o un carrello della spesa non autorizza a pubblicare o a pagare.

Alcune correzioni hanno tenuto. Altre no. Il job notturno in cui gli agenti consolidano la giornata nella memoria a lungo termine ogni tanto si blocca ancora, e continuo a controllare se riescono davvero a ritrovare le note salvate nelle conversazioni successive.

## A che punto sono

Wednesday e Thursday sono operativi solo da due settimane, quindi questa è una prima impressione, non un verdetto. Eppure tre cose sono già chiare.

**Il valore è reale quando funziona.** Un nuovo container installato mentre ero a centinaia di chilometri di distanza. Date e scartoffie del rientro a scuola tenute sotto controllo senza un foglio di calcolo. La manutenzione di Blowfish che va avanti. Mia figlia che installa giochi sul suo computer parlando con Eva. Niente di tutto questo è una demo. È la mia settimana vera, e sono ancora io a decidere su cosa lavorare e ad approvare le azioni che contano. Avere pronti da rivedere una ricerca, una bozza o un'implementazione mi fa solo arrivare prima a quelle decisioni.

**Una parte del mondo non è ancora pronta per gli agenti.** I limiti raramente erano i modelli. Il mio supermercato non ha un modo decente per collegarci un assistente. I social network sono peggio: Thursday può scrivere bozze, ma la maggior parte delle piattaforme rende difficile o impossibile al mio agente leggere, rispondere o pubblicare per conto mio. Lo strato che permette a un agente personale di collegarsi ai servizi che usiamo ogni giorno quasi non esiste, a parte pochi servizi come GitHub, Google e Linear. Finché non esisterà, molto di quello che questi agenti potrebbero fare si ferma a "pronto per la revisione".

**Questo non è un prodotto per il grande pubblico.** Niente qui è stato installa e vai. Ci sono voluti un server Proxmox, container LXC, codice personalizzato, script, un server della salute fatto su misura per i dati del mio iPhone, e un sacco di configurazione. Quando un aggiornamento di OpenClaw ha rotto tutto, la soluzione è stata aprire Claude Code dentro il container e far riparare a un'AI la casa delle altre. A me questo tipo di smanettamento piace. La maggior parte delle persone non dovrebbe doverlo fare, e oggi invece dovrebbe.

Quello che mi frustra è rincorrere un risultato promesso, correggere per l'ennesima volta la stessa dichiarazione di lavoro finito, o leggere un avviso che non cambia niente. Se il sistema mi fa risparmiare venti minuti e poi mi chiede un'ora di gestione, il bilancio non torna. A volte non sono sicuro se l'ecosistema semplicemente non sia ancora pronto, o se siamo tutti seduti davanti a una slot machine nel casinò dell'AI, a tirare la leva ancora una volta.

Per ora, far sì che questi tre portino a termine le cose in modo affidabile richiede più attenzione che aggiungerne un quarto.
