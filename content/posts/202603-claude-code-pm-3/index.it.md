---
title: "PMing with Claude Code: Capitolo 3 - God Mode"
summary: "Collegare Google Workspace e Slack a Claude Code ha chiuso il cerchio. Pianificazione del calendario, modifica documenti, dashboard in Sheets e ricerca su Slack - tutto da un unico terminale."
description: "Collegare Google Workspace e Slack a Claude Code ha chiuso il cerchio. Pianificazione del calendario, modifica documenti, dashboard in Sheets e ricerca su Slack - tutto da un unico terminale."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Google Workspace", "Slack", "integrations"]
series: ["PMing with Claude Code"]
series_order: 3
date: 2026-03-05
draft: false
---

Alla fine del capitolo due, avevo elencato le lacune rimanenti: Google Docs, Slack e il calendario. Le ho colmate tutte e tre in una sola sessione. E da qualche parte, nel mezzo dell'osservare Claude controllare la disponibilità di quindici persone, creare un invito sul calendario, correggere un errore di prezzo in un Google Doc attivo e costruire una dashboard multi-tab in Sheets - il tutto senza che io aprissi un browser - mi sono reso conto che la configurazione aveva superato una soglia. Non è più un assistente AI. È una sala di controllo.

## Google Workspace: La CLI gws

L'ecosistema di Google è sempre stato il più difficile da collegare a qualsiasi cosa. Ci sono API per tutto, ma l'autenticazione è dolorosa e la superficie è enorme. Poi Google ha rilasciato qualcosa che ha cambiato tutto - una CLI ufficiale per l'intera suite Workspace. Annunciata il 2 marzo, scritta in Rust, open-source sotto licenza Apache 2.0. Incapsula l'intera superficie delle API di Google Workspace, costruita dinamicamente dal Discovery Service di Google. Gmail, Calendar, Drive, Docs, Sheets, Slides, Tasks, Chat, Admin - tutto attraverso un unico strumento da riga di comando. Include persino il supporto per server MCP e oltre 100 competenze pre-costruite per agenti.

{{< github repo="googleworkspace/cli" >}}

### Configurazione

L'installazione avviene tramite npm (include binari nativi pre-compilati, nessun toolchain Rust necessario), oppure si può scaricare un binario dalle GitHub Releases o compilare dal sorgente con Cargo:

```bash
npm install -g @googleworkspace/cli
```

Poi c'è un comando di configurazione guidata che vi accompagna nella configurazione del progetto GCP:

```bash
gws auth setup     # walks you through Google Cloud project config
gws auth login     # subsequent OAuth login
```

C'è un prerequisito che potrebbe farvi inciampare: serve un progetto Google Cloud con OAuth configurato. La CLI gws si autentica tramite GCP, quindi senza un progetto e una schermata di consenso OAuth configurata, non si va da nessuna parte. Fortunatamente, il mio team aveva già un progetto GCP interno che potevo usare, quindi non ho dovuto crearne uno da zero. Ho dovuto solo configurare la schermata di consenso OAuth e poi abilitare le API specifiche che volevo usare - Calendar, Gmail, Drive, Docs, Sheets - tramite la Google Cloud Console. Se partite da zero, sono circa 15 minuti in più di clic nelle schermate di configurazione di GCP. Non difficile, solo noioso.

Una volta configurato OAuth, il flusso di autenticazione apre un browser per l'accesso Google. La sessione persiste dopo. Ma assicuratevi di abilitare ogni API che intendete usare - saltarne una e otterrete errori di permesso criptici che non vi dicono chiaramente cosa manca.

### Passo Zero: Lasciare che Claude Impari lo Strumento

Prima di iniziare a usare qualsiasi cosa, ho fatto qualcosa che mi ha risparmiato ore nel lungo periodo. Ho detto a Claude di esplorare la CLI gws da solo - eseguire `gws --help`, curiosare tra i sottocomandi, provare cose - e documentare tutto ciò che aveva imparato in `CLAUDE.md`. Claude ha attraversato l'albero dei comandi, ha capito i pattern per ogni servizio (Calendar, Docs, Sheets, Drive, Gmail), ha annotato i flag comuni e i formati dei parametri, e ha scritto tutto.

Questo è il passo zero per ogni nuova integrazione di strumenti. Non provate a documentare manualmente la CLI. Non scrivete un foglio riassuntivo. Puntate Claude sullo strumento e dite "impara questo, scrivi ciò che trovi." Il risultato è un riferimento perfettamente calibrato su come Claude userà effettivamente lo strumento - perché Claude l'ha scritto per sé stesso.

Dopo quell'esplorazione, Claude conosceva comandi come:

```bash
# Check today's calendar
gws calendar +agenda --today --format table

# Read a Google Doc
gws docs documents get --params '{"documentId": "DOC_ID"}'

# Update a Google Doc
gws docs documents batchUpdate ...

# Push data to a Google Sheet
gws sheets spreadsheets values update ...

# Create a calendar event
gws calendar events insert ...
```

Stesso pattern di Snowflake nel capitolo due. Stesso pattern di GitHub nel capitolo uno. Il pattern è il punto: installare lo strumento, lasciare che Claude lo esplori, documentare le scoperte in `CLAUDE.md`, e ogni sessione futura parte con il contesto completo.

A questo punto, il mio `CLAUDE.md` è diventato un documento di riferimento serio. Non è qualcosa che mi sono seduto a scrivere - si è accumulato organicamente man mano che Claude esplorava ogni strumento e io aggiungevo contesto lungo il percorso. Contiene schemi delle tabelle del data warehouse con descrizioni delle colonne e formule dei valori calcolati. Struttura dei repository GitHub con pattern di query GraphQL per epic e task. Indici delle pagine Notion così Claude può recuperare la spec di prodotto giusta senza che io debba cercare URL. Liste del team estratte dagli inviti del calendario. Riferimenti ai comandi CLI per ogni strumento integrato. Configurazioni di connessione e note sull'autenticazione.

Si legge come un manuale operativo che nessuno si prenderebbe mai la briga di scrivere a mano. Ma poiché Claude lo scrive per sé stesso man mano che procede, il manuale si costruisce da solo. E ogni nuova conversazione parte con tutto quel contesto caricato. Claude non chiede "qual è lo schema del tuo data warehouse?" o "dove trovo le spec di prodotto?" - lo sa già.

## Slack: Il Plugin Integrato

Slack è stato più facile del previsto. Claude Code ha un plugin Slack integrato che fornisce strumenti MCP per cercare, leggere e inviare messaggi.

```
/install-slack-app    # Install the Slack app
                      # Complete authorization in browser
/mcp                  # Connect to the plugin (may need a second attempt)
```

Una volta connesso, si ottiene un set di strumenti che coprono le operazioni Slack principali: ricerca di messaggi nei canali pubblici, lettura di thread, lettura della cronologia di un canale per intervallo di date, invio di messaggi, ricerca di utenti e visualizzazione dei profili. Non è l'intera API di Slack, ma è esattamente la superficie di cui un PM ha effettivamente bisogno.

## Caso d'Uso 1: Trovare il Mio Team dal Calendario

Ecco uno scenario che succede continuamente. Serve la lista del team - non la versione dell'organigramma, ma gli esseri umani reali che si presentano alle riunioni ricorrenti. Le persone nella stanza.

Ho chiesto a Claude di cercare la mia riunione ricorrente di sync settimanale del team e di estrarre i partecipanti. Ha interrogato l'API Calendar, ha trovato l'evento e ha estratto quindici persone con i loro indirizzi email. Poi gli ho fatto salvare la lista in `CLAUDE.md` così ogni sessione futura avrebbe conosciuto il mio team senza che dovessi spiegarlo di nuovo.

È una piccola cosa che si accumula. Ogni volta che Claude deve pianificare qualcosa, controllare la disponibilità o fare riferimento a un collega, sa già con chi sta lavorando.

## Caso d'Uso 2: Pianificare una Riunione

Questo mi ha sorpreso per quanto fluidamente ha funzionato.

Dovevo pianificare una riunione il lunedì pomeriggio con tutto il mio team - tutte e quindici le persone - per rivedere insieme un documento strategico. Nel flusso di lavoro normale, avrei aperto Google Calendar, guardato a occhio gli slot del pomeriggio, controllato manualmente se le persone importanti erano libere, rinunciato a controllare tutti e quindici, scelto un orario che sembrava ragionevole, e sperato per il meglio.

Invece, ho detto a Claude di trovare uno slot libero il lunedì pomeriggio per tutto il team. Ha:

1. Elencato il mio calendario del lunedì pomeriggio per identificare gli slot aperti
2. Interrogato l'API freebusy per tutti e quindici i membri del team simultaneamente
3. Identificato che quattro persone avevano conflitti nel mio slot preferito
4. Riportato chi era occupato e quando
5. Creato l'invito tramite `events insert` con un link al documento nella descrizione

Gli inviti sono partiti automaticamente. Il tutto ha richiesto forse trenta secondi. Solo il controllo freebusy mi avrebbe richiesto dieci minuti di clic attraverso calendari individuali - e probabilmente avrei rinunciato dopo averne controllati cinque.

## Caso d'Uso 3: Modificare un Google Doc Attivo

Questo ha cambiato il mio modo di pensare ai flussi di lavoro dei documenti.

Avevo un Google Doc con una proposta di prezzi che necessitava di revisione. Invece di aprirlo nel browser, leggerlo e fare modifiche manualmente, ho chiesto a Claude di recuperarlo e rivederlo.

Claude ha estratto l'intero documento tramite `docs documents get`, ha analizzato tutto il contenuto inclusi paragrafi e tabelle, e lo ha letto. Ha segnalato un'incongruenza: una tabella dei prezzi aveva un numero obsoleto che non corrispondeva ai prezzi del piano attuale. Il tipo di errore facile da perdere quando si scorre velocemente ma imbarazzante quando un stakeholder lo nota.

Ecco la parte che conta: Claude l'ha corretto direttamente nel Google Doc attivo usando `batchUpdate` con `replaceAllText`. Nessun download, nessuna modifica locale, nessun re-upload. La correzione è avvenuta nel documento canonico che tutti gli altri stanno già guardando.

Questo elimina un'intera classe di attrito nella gestione dei documenti. Il documento resta in Google Docs dove il team se lo aspetta. Claude lo legge e lo modifica sul posto.

Una cosa che devo ancora provare: rivedere e rispondere ai commenti. I commenti di Google Docs sono dove avviene metà della collaborazione reale - suggerimenti, domande, thread di feedback. Se Claude può leggerli, riassumere i commenti aperti e preparare le risposte, questo chiuderebbe un altro cerchio completamente. È il prossimo sulla mia lista.

## Caso d'Uso 4: Costruire una Dashboard in Google Sheets

Questo era puramente un test. Volevo vedere se Claude potesse prendere dati da Snowflake e costruire un Google Sheet completo automaticamente - da cima a fondo, senza passaggi manuali. Il tipo di cosa che normalmente divora un pomeriggio: eseguire query, esportare CSV, creare un foglio, fare tab, incollare dati, formattare intestazioni, costruire grafici.

Quindi ho puntato Claude verso alcuni dataset e ho detto "costruiscimi una dashboard in Sheets." Ha:

1. **Estratto 6 dataset da Snowflake** - trend settimanali, metriche giornaliere, suddivisioni per piano, adozione delle funzionalità, utilizzo per segmento e altro
2. **Creato 6 tab in un Google Sheet** tramite `spreadsheets batchUpdate`
3. **Inserito tutti i dati** nei tab corretti tramite `spreadsheets values update`
4. **Formattato tutto** - intestazioni in grassetto, sfondi grigi, righe superiori bloccate, colonne auto-ridimensionate
5. **Aggiunto 9 grafici** attraverso i tab - grafici a linee per i trend, grafici a colonne per i confronti, grafici ad area per le metriche cumulative, barre impilate per le suddivisioni

Tutto programmaticamente. Nessun lavoro manuale sui fogli. Nessun copia-incolla tra strumenti. La CLI di Snowflake del capitolo due e la CLI gws di questo capitolo che lavorano insieme in una singola sessione. Era solo un test, ma ha funzionato abbastanza bene da potermi immaginare di usarlo per dashboard reali destinati agli stakeholder.

Questo è l'aspetto dell'effetto composto nella pratica. Ogni integrazione che ho aggiunto - GitHub, Notion, Snowflake, Google Workspace, Slack - non aggiunge solo una capacità. Moltiplica ogni altra capacità. I dati da Snowflake fluiscono in Google Sheets. Le informazioni sul team dal Calendar informano la pianificazione delle riunioni. Le discussioni da Slack forniscono contesto per le revisioni dei documenti.

## Caso d'Uso 5: Cercare su Slack

L'ultimo pezzo era la cronologia delle comunicazioni. Ho usato la ricerca Slack per trovare discussioni relative alla proposta di prezzi nei nostri canali. Claude ha trovato thread rilevanti in `#product-launches` e `#pricing-strategy`, ha letto le conversazioni complete e aveva il contesto necessario per incrociare i riferimenti con il documento sui prezzi che aveva già revisionato.

Questo ha chiuso il cerchio delle informazioni. Prima, avrei potuto revisionare un documento, ricordare che qualcuno aveva sollevato una preoccupazione su Slack tre settimane fa, provare a trovare quel thread, perdere dieci minuti scrollando, e magari arrendermi. Ora Claude cerca, trova, legge e sintetizza nella stessa conversazione.

## Lo Stack Completo

Ecco come appare il workspace ora:

```
pm-workspace/
├── CLAUDE.md                # Everything: schemas, team lists, tool docs
├── .claude/
│   └── settings.local.json  # Permissions for all CLIs and MCPs
├── docs/                    # Fallback for docs that can't live in Google/Notion
├── data_reports/            # Fallback for datasets too large for live queries
└── roadmap.md               # Living roadmap document
```

E le integrazioni:

| Strumento | Metodo | Cosa Fa |
|-----------|--------|---------|
| GitHub | `gh` CLI | Issue, epic, gestione progetti |
| Notion | MCP | Spec di prodotto e documentazione |
| Snowflake | `snow` CLI | Query sul data warehouse |
| Google Workspace | `gws` CLI | Calendar, Docs, Sheets, Gmail |
| Slack | MCP Plugin | Cercare, leggere e inviare messaggi |

Cinque integrazioni. Cinque fonti di dati diverse. Tutte accessibili da un unico terminale, tutte portando contesto attraverso una singola conversazione.

## Consigli se State Configurando Tutto Questo

Alcune cose che ho imparato a mie spese:

- **Documentate tutto in `CLAUDE.md`.** Claude non può usare strumenti di cui non sa nulla. Ogni volta che aggiungete un'integrazione, dite a Claude quali comandi sono disponibili e come usarli. Meglio ancora, chiedete a Claude di esplorare e documentare lo strumento da solo.
- **Il plugin Slack potrebbe necessitare una riconnessione.** Dopo `/install-slack-app`, eseguite `/mcp` per connettervi. Se non funziona la prima volta, riprovate. È instabile alla prima configurazione ma stabile dopo.
- **Usate l'API raw per operazioni Sheet complesse.** Il comando `spreadsheets values update` funziona meglio degli helper di livello superiore quando fate operazioni multi-tab con formattazione e grafici.
- **Salvate le liste del team e i dettagli delle integrazioni in `CLAUDE.md`.** Persistono tra le sessioni. Il fatto che Claude conosca il vostro team, i vostri schemi e i vostri strumenti dal momento in cui inizia una conversazione è ciò che fa sembrare questo una sala di controllo invece di un chatbot.

## Cosa È Cambiato

Dopo il capitolo uno, avevo un workspace connesso. Dopo il capitolo due, avevo accesso ai dati. Dopo questo capitolo, ho tutto. Calendario, documenti, fogli di calcolo, cronologia delle comunicazioni, data warehouse, gestione progetti, contesto di design - è tutto in un unico posto.

Il cambiamento nel flusso di lavoro è reale. Non apro Google Calendar per pianificare riunioni. Non apro Google Docs per revisionare documenti. Non apro Google Sheets per costruire dashboard. Non scrollo Slack per trovare vecchie discussioni. Descrivo ciò di cui ho bisogno, e succede.

È perfetto? No. Le configurazioni di autenticazione sono capricciose. La CLI gws è giovane e i messaggi di errore non sempre sono utili. Alcune operazioni necessitano di chiamate subprocess Python per evitare problemi di escape della shell. Ma l'attrito della configurazione è un costo una tantum. Il tempo risparmiato è ogni singolo giorno.

Tre capitoli dopo, la tesi regge: ogni nuova integrazione moltiplica il valore di ogni integrazione esistente. Il divario tra "ho una domanda" e "ho una risposta con dati di supporto da cinque fonti diverse" è collassato da ore a secondi.

Questo è il god mode.
