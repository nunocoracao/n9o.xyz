---
title: "Costruire Gordon: L'agente AI di Docker"
summary: "Uno sguardo dietro le quinte alla costruzione di Gordon - l'agente AI di Docker. Dalla scelta di docker-agent come runtime, all'analisi delle domande degli utenti, alla progettazione dell'UX, alla configurazione delle valutazioni e alla costruzione degli strumenti giusti."
description: "Uno sguardo dietro le quinte alla costruzione di Gordon - l'agente AI di Docker. Dalla scelta di docker-agent come runtime, all'analisi delle domande degli utenti, alla progettazione dell'UX, alla configurazione delle valutazioni e alla costruzione degli strumenti giusti."
categories: [AI, Strumenti per Sviluppatori]
tags: [Docker, Gordon, Agents, AI, docker-agent]
date: 2026-03-13
draft: false
showTableOfContents: true
---

Nell'ultimo anno ho fatto parte del team che ha costruito [Gordon](https://docs.docker.com/ai/gordon/) - l'agente AI di Docker. Se hai usato Docker Desktop di recente, probabilmente lo hai già visto: clicca sull'icona di Gordon nella barra laterale oppure esegui `docker ai` nel terminale, e otterrai un agente che capisce davvero i tuoi container, le tue immagini e il tuo ambiente. Non si limita a rispondere alle domande - agisce.

Costruire un agente AI di cui milioni di sviluppatori si fidino per gestire codice, container, immagini, file Compose, build e pipeline CI non è stato semplice. Questa è la storia di come l'abbiamo costruito - le decisioni che abbiamo preso, gli errori che abbiamo commesso e cosa abbiamo imparato lungo la strada.

## Gordon v1

La prima versione di Gordon è stata costruita prima che esistesse la maggior parte degli strumenti agentici che abbiamo oggi. Gordon alimenta l'esperienza AI di Docker fin dall'inizio - su [docs.docker.com](https://docs.docker.com), nel supporto e all'interno di Docker Desktop. Abbiamo scritto il primo loop agentico con LangGraph, collegato un sistema RAG alla documentazione di Docker così che Gordon potesse rispondere a domande ancorate a contenuti reali, e costruito quelli che chiamavamo "ricette" - percorsi di codice deterministici per gestire compiti specifici come generare un Dockerfile o fare debug di un container. Le ricette erano i predecessori di MCP e del tool calling, ma completamente personalizzati. Ogni ricetta era un flusso artigianale: rilevare l'intenzione dell'utente, raccogliere il contesto giusto ed eseguire una sequenza di passi che sapevamo funzionare.

È stato rilasciato. Le persone lo hanno usato. E abbiamo imparato tantissimo - cosa volessero davvero gli utenti, dove il LLM faticava, e quanto i flussi deterministici diventino fragili quando si cerca di coprire ogni caso limite. Stavamo anche costruendo su modelli dell'era GPT-4o - capaci, ma lontani da quello che è disponibile oggi. Anche i modelli più piccoli di oggi come Haiku superano quello che avevamo allora, ed è passato meno di un anno.

Ma mentre Gordon v1 era in produzione, il mondo attorno a noi si muoveva velocemente. MCP è diventato uno standard per l'integrazione degli strumenti. Il tool calling è arrivato nativamente in ogni modello principale. I framework agentici sono maturati. I modelli stessi hanno fatto un salto enorme. Il divario tra quello che avevamo costruito e quello che era ora possibile continuava ad allargarsi.

Così abbiamo deciso di ricostruire Gordon da zero, prendendo tutto quello che avevamo imparato dalla v1 e combinandolo con i nuovi standard e l'infrastruttura emersa dal lancio in poi.

## Fondamenta

La prima domanda per la ricostruzione era fondamentale: su cosa lo costruiamo?

Avremmo potuto iterare sullo stack LangGraph, ma stavamo costruendo [docker-agent](https://github.com/docker/docker-agent) (originariamente chiamato cagent) come runtime open-source per agenti AI, e aveva senso mangiare il nostro stesso cibo.

{{< github repo="docker/docker-agent" >}}

docker-agent ti offre un modo dichiarativo per definire agenti in YAML - il loro modello, le istruzioni, gli strumenti e come collaborano. Invece di scrivere codice imperativo per gestire loop di conversazione, dispatch degli strumenti e finestre di contesto, descrivi cosa deve fare l'agente e lasci che il runtime gestisca il resto. Scritto quasi interamente in Go, viene distribuito come plugin della CLI di Docker - `docker agent run`, `docker agent new`, ecc. - così si integra naturalmente nel workflow di Docker.

Per Gordon, questo significava poter iterare rapidamente. Cambiare il system prompt? Modifica il YAML. Aggiungere un nuovo strumento? Aggiungilo al toolset. Cambiare modello? Una riga. Nessun rideploy di codice personalizzato, nessuna ricostruzione di pipeline. La definizione dell'agente è il prodotto.

Uno dei vantaggi più grandi di costruire su docker-agent è la distribuzione. Le definizioni degli agenti vengono impacchettate e condivise come artefatti OCI - lo stesso formato che Docker usa per le immagini container. Questo significa che possiamo fare `docker agent push` di una nuova versione di Gordon su Docker Hub e `docker agent pull` dall'altra parte. Gli aggiornamenti si distribuiscono istantaneamente senza ricostruire alcun codice, perché il loop dell'agente non è incorporato nell'applicazione - vive nel runtime. La definizione di Gordon è solo un file YAML su Docker Hub. Quando pubblichiamo una nuova versione, ogni installazione di Docker Desktop la recepisce (è un po' più complesso di così, ma l'idea è chiara). Nessun aggiornamento binario, nessuna revisione sull'app store, nessuno script di migrazione. Questa separazione tra il runtime (docker-agent) e la definizione dell'agente (il YAML) è ciò che fa funzionare il tutto su larga scala.

docker-agent include toolset integrati - `filesystem` per leggere e scrivere file, `shell` per l'esecuzione di comandi, `think` per un blocco note di ragionamento, `todo` per il tracciamento delle attività e `memory` per la persistenza tra le sessioni. Inoltre, qualsiasi server MCP può essere collegato come strumento. Puoi anche definire script personalizzati direttamente nel YAML - avvolgi uno shell script o un endpoint API ed esponilo all'agente con argomenti tipizzati.

Usare docker-agent significa anche che Gordon beneficia di tutto ciò che il runtime fornisce già - supporto multi-provider (OpenAI, Anthropic, Gemini, Bedrock, Mistral e persino modelli locali via Docker Model Runner), integrazione MCP, RAG integrato con più strategie di retrieval, orchestrazione multi-agente con sub-agenti e handoff, e distribuzione basata su OCI. Quando miglioriamo docker-agent, anche Gordon migliora. E quando Gordon spinge i limiti di docker-agent, rendiamo il runtime migliore per tutti.

Usiamo docker-agent per costruire il docker agent. Non è uno slogan - è il modo in cui lavoriamo davvero.

## Capire Cosa Vogliono Davvero Gli Utenti

Costruire un agente AI è facile. Costruirne uno davvero utile è difficile. La differenza sta nel capire cosa stanno cercando veramente gli utenti.

All'inizio, abbiamo trascorso molto tempo ad analizzare come le persone interagiscono con Docker. Che domande fanno nei forum? Cosa cercano nella documentazione? Dove si bloccano? Poiché Gordon v1 alimentava già l'assistente AI su [docs.docker.com](https://docs.docker.com), nel supporto e all'interno di Docker Desktop, avevamo due fonti di dati inestimabili: la documentazione e le interazioni di supporto, e i dati reali sull'intento degli utenti dalle sessioni v1 - cosa le persone chiedevano a Gordon di fare, quali ricette venivano attivate, dove funzionava e dove no.

I pattern erano chiari:

- **"Perché il mio container non si avvia?"** - Il debug è il caso d'uso principale. Codici di uscita, errori nei log, problemi di rete, problemi di permessi.
- **"Come containerizzо questo?"** - Le persone hanno un'app e vogliono un buon Dockerfile. Non uno generico da un tutorial - uno che capisce la struttura del loro progetto.
- **"Come faccio X con Docker?"** - Operazioni di routine semplici se si conosce il comando, ma che richiedono una visita alla documentazione altrimenti.

Queste tre categorie hanno plasmato tutto. Gordon non è un chatbot generico che sa qualcosa di Docker. È un agente progettato specificamente attorno a questi workflow - debug, build e gestione. Ogni strumento, ogni prompt, ogni decisione UX deriva da questo.

Abbiamo anche imparato che gli utenti non fanno domande pulite e ben formate. Incollano messaggi di errore. Descrivono i sintomi, non le cause. Forniscono contesto incompleto. Un buon agente non può semplicemente fare pattern matching sulle parole chiave - deve capire l'intento, fare domande di chiarimento quando necessario e andare a investigare da solo.

## Costruire l'Agente

Con docker-agent come runtime e un quadro chiaro di ciò di cui gli utenti avevano bisogno, abbiamo iniziato a costruire. Quello che è seguito sono state settimane di rapida iterazione - e l'agente è cambiato radicalmente lungo il percorso. Gordon viene distribuito come artefatto OCI su Docker Hub (`docker/gordon`), e puoi effettivamente fare il pull di qualsiasi versione con `cagent pull docker/gordon:<tag>` e leggere la definizione completa dell'agente. L'evoluzione è lì nella cronologia delle versioni.

### Da sciame multi-agente a singolo agente

Il nostro primo tentativo con Gordon v2 era ambizioso. Abbiamo progettato un'architettura multi-agente con nove sub-agenti specializzati: un esperto Docker, un esperto di codice, un esperto di deployment, uno specialista Kubernetes, un agente di networking, un agente di sicurezza, un agente di integrazione GitHub, un esperto di migrazione DHI e persino un agente Notion. L'agente root fungeva da orchestratore - analizzava la richiesta dell'utente, delegava allo specialista giusto e coordinava le risposte tra il team. I todo condivisi mantenevano il contesto fluire tra gli agenti.

Era elegante in teoria. In pratica, era lento e imprevedibile. La delega aggiungeva latenza. L'orchestratore a volte sceglieva il sub-agente sbagliato. Il contesto andava perso negli handoff. E più agenti aggiungevo, più era difficile ragionare sul comportamento del sistema nel suo insieme.

Così l'abbiamo ridotto. Abbiamo spostato quasi tutto in un singolo agente root con un system prompt attentamente progettato. L'unico sub-agente che è sopravvissuto è lo specialista di migrazione DHI, perché quel workflow è genuinamente abbastanza distinto da giustificare il proprio agente con i propri strumenti e istruzioni. Tutto il resto - operazioni Docker, debug, containerizzazione, aiuto generale allo sviluppo - vive nell'agente root.

Il risultato è stato più veloce, più prevedibile e più facile da iterare. Un agente, un prompt, un posto dove guardare quando qualcosa va storto.

### Selezione del modello

Anche la scelta del modello è cambiata. Le prime build di v2 giravano su Claude Sonnet 4.5 - un modello potente, ma costoso alla scala in cui opera Gordon. Man mano che perfezionavamo il prompt e gli strumenti, abbiamo scoperto di poter ottenere la stessa qualità con Claude Haiku 4.5 - un modello molto più piccolo, veloce ed economico. Il trucco era investire in prompt migliori. Ogni volta che miglioravamo le istruzioni - descrizioni degli strumenti più specifiche, regole comportamentali più chiare, esempi migliori - il divario tra Sonnet e Haiku si riduceva fino a scomparire per i nostri casi d'uso.

Gordon attualmente gira su Haiku 4.5 per la maggior parte delle sue interazioni. La differenza di velocità è evidente - le risposte sembrano reattive, le chiamate agli strumenti si risolvono più velocemente e il costo per conversazione è diminuito significativamente. Il supporto multi-provider di docker-agent significa che possiamo cambiare modello con una singola riga nel YAML, quindi testiamo sempre i nuovi modelli non appena escono.

### Il prompt engineering come sviluppo del prodotto

La sorpresa più grande è stata quanto del prodotto viva nel system prompt. Il prompt di Gordon non è un paragrafo di istruzioni - è una specifica dettagliata che copre identità, stile di comunicazione, pattern di accesso ai file, utilizzo della knowledge base, dimensionamento delle risposte, best practice per i Dockerfile, workflow di debug e regole di sicurezza.

Ecco come appare oggi la definizione effettiva di Gordon:

```yaml
version: "2"

models:
  brain:
    provider: anthropic
    model: claude-haiku-4-5-20251001

agents:
  root:
    model: brain
    description: Gordon - Docker Agent
    instruction: |
      You are Gordon, an AI assistant created by Docker Inc.,
      specialized in Docker and Docker-related products, tools,
      and technologies...
    sub_agents:
      - DHI migration
    toolsets:
      - type: api
        api_config:
          name: knowledge_base
          endpoint: https://ai-backend-service.docker.com/docs
          ...
      - type: filesystem
      - type: shell
      - type: fetch
      - type: todo

  DHI migration:
    model: brain
    description: Migrates a Dockerfile to use Docker Hardened Images
    toolsets:
      - type: api
        api_config:
          name: get_image_tags
          endpoint: https://ai-backend-service.docker.com/dhi
          ...
      - type: filesystem
      - type: shell
```

Abbiamo iterato costantemente sul prompt. Ogni volta che trovavamo un punto di fallimento - Gordon troppo prolisso, che sceglieva lo strumento sbagliato, faceva domande di chiarimento inutili, usava parole di riempimento - aggiungevo qualcosa per affrontarlo: una nuova valutazione, una nuova istruzione, ecc. Il prompt è cresciuto organicamente da interazioni reali degli utenti e dai fallimenti nelle valutazioni. Non è codice elegante, ma funziona. E la cosa è: non scriviamo più la maggior parte di questi prompt a mano. Ne parliamo dopo aver trattato le valutazioni.

## L'Esperienza Utente

L'UX di un agente AI è fondamentalmente diversa da quella di un chatbot. Un chatbot ti dà testo. Un agente vuole fare cose - eseguire comandi, modificare file, creare configurazioni. Questo cambia tutto il modo in cui si progetta l'interazione.

Il principio fondamentale su cui ci siamo assestati: **mostra, poi esegui**.

Gordon non esegue mai nulla senza mostrarti esattamente cosa intende fare prima. Vuole eseguire un comando shell? Vedi il comando. Vuole modificare un Dockerfile? Vedi il diff. Vuole fermare un container? Vedi quale. Ogni azione richiede la tua approvazione esplicita.

Non è solo una funzione di sicurezza - è un meccanismo di costruzione della fiducia. Quando usi Gordon per la prima volta, approvi ogni azione. Col tempo, inizi a fidarti perché hai visto che prende buone decisioni. Approvi più velocemente, non perché sei meno attento, ma perché hai costruito fiducia in quello che fa.

Abbiamo anche reso Gordon disponibile in due luoghi: Docker Desktop (GUI) e la CLI (`docker ai`). L'esperienza Desktop è visiva - vedi container, immagini e log insieme alla conversazione. L'esperienza CLI è per gli sviluppatori che vivono nel terminale e vogliono rimanerci. Lo stesso agente, le stesse capacità, contesti diversi.

Una cosa che abbiamo deliberatamente evitato: la modalità autonoma. Gordon non va avanti a fare dieci cose mentre non stai guardando. È un agente collaborativo - lavora con te, non al posto tuo. In un mondo in cui gli sviluppatori sono giustamente scettici riguardo agli strumenti AI che apportano modifiche non supervisionate alla loro infrastruttura, questo è importante.

## Strumenti: Cosa Può Fare Gordon

Un LLM senza strumenti è solo un generatore di testo. Ciò che rende Gordon un agente è la sua capacità di agire. E ottenere gli strumenti giusti è stata una delle parti più difficili del progetto.

L'architettura di Gordon è divisa in client-server. Il backend vive sui server di Docker, mentre il client è una CLI in bundle con Docker Desktop che gira sulla macchina dell'utente. Il client gestisce l'accesso locale - leggere i tuoi file, eseguire comandi, interagire con il daemon Docker - mentre il backend gestisce l'orchestrazione del LLM. Quando usi Gordon tramite Docker Desktop, l'utente può selezionare una directory di lavoro per limitare l'accesso - oppure viene usata una predefinita. Quando usi `docker ai` dal terminale, lavora con la directory in cui ti trovi.

I toolset principali di Gordon sono sorprendentemente minimali:

- **Filesystem** - Leggi, scrivi, modifica ed elenca file nella directory di lavoro dell'utente. Così Gordon ispeziona la struttura del tuo progetto, legge i Dockerfile e scrive nuove configurazioni.
- **Shell** - Esegui comandi nel terminale dell'utente (con approvazione). Questo è il motore principale - tramite shell, Gordon può eseguire `docker build`, `docker compose up`, `docker scout`, `kubectl`, `git` e qualsiasi altra cosa disponibile sulla macchina dell'utente. Invece di costruire integrazioni su misura per ogni comando Docker, diamo all'agente l'accesso alla shell e lo lasciamo usare gli strumenti CLI che gli sviluppatori hanno già installato.
- **Fetch** - Effettua richieste HTTP a URL esterni per documentazione, riferimenti API o qualsiasi contenuto web di cui Gordon ha bisogno per rispondere a una domanda.
- **Todo** - Traccia attività multi-step così Gordon può scomporre richieste complesse e affrontarle metodicamente.
- **Knowledge base** - Uno strumento API personalizzato che interroga il backend della documentazione di Docker. Abbiamo costruito la nostra pipeline RAG sulla documentazione di Docker fin dalla v1, e alimenta non solo Gordon ma anche l'assistente alla documentazione e il supporto. Gordon ottiene accesso a documentazione aggiornata, best practice e pattern comuni tramite questa infrastruttura condivisa.
- **Migrazione DHI** - Un sub-agente dedicato con il proprio toolset per migrare Dockerfile a Docker Hardened Images, incluso uno strumento API che risolve i tag immagine compatibili con DHI.

Il primo passo nella pipeline di Gordon - capire cosa vuole l'utente e decidere quale strumento usare - avviene tramite tool calling con il LLM. Sembra semplice, ma è stata una delle aree in cui abbiamo trascorso più tempo a sperimentare.

Cosa abbiamo imparato:

**Le descrizioni degli strumenti contano più di quanto pensi.** Una riga vaga non basta. Il LLM ha bisogno di descrizioni dettagliate con esempi di quando usare ogni strumento. Abbiamo scoperto che definizioni degli strumenti più descrittive migliorano drasticamente l'accuratezza nella selezione degli strumenti.

**Aggiungere strumenti può rompere le cose.** Questo era controintuitivo. Aggiungevo un nuovo strumento e improvvisamente il LLM smetteva di attivare correttamente gli strumenti esistenti. Il set di strumenti non è solo una lista - è uno spazio decisionale, e espanderlo cambia il modo in cui il modello ragiona su quale strumento scegliere.

**I modelli si comportano diversamente.** Il tool calling non è standardizzato tra i provider. Ciò che funziona bene con un modello potrebbe fallire con un altro. Le descrizioni ottimali per GPT-4 potrebbero confondere Claude, e viceversa. Abbiamo dovuto testare tra i provider e a volte adattare le descrizioni per modello.

**Sfrutta l'infrastruttura di conoscenza esistente.** Abbiamo costruito la nostra pipeline RAG sulla documentazione di Docker fin dalla v1, e ha continuato ad alimentare l'assistente alla documentazione, il supporto e Gordon da allora. Per la v2, non dovevamo reinventare questo - abbiamo semplicemente collegato Gordon allo stesso backend tramite uno strumento API. Anni di documentazione indicizzata, già testata in produzione, disponibile con una singola chiamata API.

## Valutazioni

Ecco il punto sugli agenti AI: si rompono in modi sottili. Un chatbot che dà una risposta leggermente sbagliata è fastidioso. Un agente che esegue il comando sbagliato è pericoloso. Le valutazioni non sono opzionali - sono essenziali.

docker-agent ha la valutazione integrata. Il workflow inizia con la registrazione delle sessioni - interagisci con Gordon normalmente, e quando una conversazione rappresenta un buon caso di test, la salvi come valutazione. Ogni valutazione è un file JSON che cattura il messaggio dell'utente, le chiamate agli strumenti attese e i criteri di valutazione: affermazioni di rilevanza che la risposta deve soddisfare, dimensione attesa della risposta, quali strumenti dovrebbero essere chiamati, quali file dovrebbero essere creati. Queste valutazioni vengono eseguite all'interno di container Docker per l'isolamento - ognuna ottiene un ambiente pulito, quindi i risultati sono riproducibili.

`docker agent eval` esegue la suite completa, valutando su più dimensioni - accuratezza delle chiamate agli strumenti (Gordon ha chiamato gli strumenti giusti?), rilevanza (la risposta ha effettivamente affrontato la domanda?), dimensionamento delle risposte e handoff ai sub-agenti. Un LLM giudice valuta i criteri di rilevanza, quindi possiamo testare comportamenti sfumati, non solo corrispondenze di stringhe.

Così individuiamo le regressioni. Ogni modifica a Gordon - aggiornamenti del prompt, modifiche agli strumenti, cambi di modello - viene valutata rispetto alla suite completa prima di essere distribuita. In un sistema agentico, tutto è interconnesso. Una piccola modifica alla descrizione di uno strumento può propagarsi in comportamenti inattesi. Quando esce una nuova versione del modello, eseguiamo la suite prima di cambiare. Non facciamo aggiornamenti alla cieca.

Una lezione difficile: la copertura delle valutazioni conta più della quantità. All'inizio, le nostre valutazioni non coprivano i casi d'uso principali - stavamo ottimizzando Gordon per i casi limite mentre i workflow principali (debug dei container, generazione di Dockerfile, risposta a domande su Docker) erano poco rappresentati. Miglioravamo i punteggi senza effettivamente rendere Gordon migliore per la maggior parte degli utenti. Una volta che abbiamo ribilanciato la suite di valutazioni attorno ai pattern di utilizzo reali dei dati v1, i miglioramenti hanno iniziato a corrispondere a ciò che gli utenti sperimentavano davvero.

## Usare Agenti per Migliorare l'Agente

Ricordi l'anticipazione sul non scrivere prompt a mano? Ecco come appare in pratica.

Abbiamo costruito un agente personalizzato - in esecuzione su un modello più potente come Claude Opus 4.6 - il cui compito è migliorare il system prompt di Gordon. Il workflow: gli dai la definizione attuale dell'agente Gordon, un insieme di valutazioni fallite e i risultati. L'agente analizza i fallimenti, propone modifiche al prompt e produce un YAML aggiornato. Eseguiamo la suite di valutazioni sulla nuova versione. Se i punteggi migliorano e nulla regredisce, la distribuiamo.

Questo crea un loop di miglioramento rapido. Un utente segnala che Gordon fa troppe domande di chiarimento invece di leggere direttamente i file? Aggiungiamo una valutazione per questo, puntiamo l'agente ottimizzatore sul fallimento e lo lasciamo capire la giusta modifica al prompt. Potrebbe aggiungere una regola come "SEMPRE leggi i file direttamente usando gli strumenti filesystem. NON chiedere mai agli utenti di incollare il contenuto." - che è esattamente il tipo di istruzione specifica e attuabile che fa la differenza tra un buon agente e uno frustrante.

Usare un modello più potente come "insegnante" per migliorare lo "studente" è deliberato. Opus ha la capacità di ragionamento per comprendere problemi comportamentali sottili e creare istruzioni precise che guidano Haiku nella direzione giusta. Sono agenti fino in fondo.

La maggior parte delle regole comportamentali dettagliate nel prompt di Gordon - le parole di riempimento vietate, i pattern di accesso ai file, le linee guida sul dimensionamento delle risposte, le sequenze di debug - sono state scritte o perfezionate dall'agente ottimizzatore, non da un essere umano. Noi stabiliamo la direzione e definiamo cosa significa "buono" tramite le valutazioni. L'agente capisce come arrivarci.

## Cosa C'è Dopo: La Memoria

Al momento, Gordon è stateless tra le sessioni. Ogni conversazione inizia da zero. Chiudi Docker Desktop e Gordon dimentica tutto - la struttura del tuo progetto, i problemi che stavi debuggando, i pattern Dockerfile che preferisci.

La memoria è la prossima frontiera. Stiamo lavorando per dare a Gordon la capacità di ricordare il contesto tra le sessioni:

- **Contesto del progetto** - Gordon dovrebbe ricordare la struttura del tuo progetto, la tua configurazione Docker e i pattern che usi
- **Cronologia delle interazioni** - Se hai risolto un problema la settimana scorsa, Gordon dovrebbe saperlo quando si presenta un problema simile
- **Preferenze dell'utente** - Se usi sempre build multi-stage, Gordon dovrebbe suggerirle per impostazione predefinita

È più difficile di quanto sembri. La memoria negli agenti AI non è solo "salva la cronologia della chat". Si tratta di decidere cosa vale la pena ricordare, come recuperarlo efficacemente e come evitare che diventi obsoleto. Un sistema di memoria che fa emergere contesto irrilevante è peggio di nessuna memoria.

docker-agent ha già i mattoni fondamentali. C'è un toolset `memory` che persiste le informazioni in un database locale tra le sessioni - l'agente può memorizzare e recuperare fatti mentre lavora. I pezzi ci sono. La sfida è renderlo naturale - Gordon dovrebbe far emergere i ricordi rilevanti senza essere sollecitato, imparare le tue preferenze senza che tu glielo dica e dimenticare le cose che non sono più rilevanti. Come la finestra scorrevole che ho usato costruendo [Eva](/posts/202601-building-eva/), ma più intelligente.

L'obiettivo è semplice: Gordon dovrebbe sembrare un membro del team che conosce il tuo progetto, non uno sconosciuto a cui devi rispiegare tutto ogni volta.

---

Costruire Gordon è stato uno dei progetti più impegnativi e gratificanti su cui abbia mai lavorato. Gli agenti AI sono ancora agli inizi - gli strumenti si evolvono rapidamente, le best practice sono ancora in fase di scrittura e le aspettative degli utenti cambiano con ogni nuova versione del modello. Ma l'intuizione fondamentale rimane: gli sviluppatori non hanno bisogno di un altro chatbot. Hanno bisogno di un agente che capisca il loro ambiente, agisca e guadagni la loro fiducia un comando approvato alla volta.

Se vuoi provare Gordon, aggiorna all'ultimo [Docker Desktop](https://www.docker.com/products/docker-desktop/) e cerca l'icona di Gordon nella barra laterale, oppure esegui `docker ai` dal terminale.

E se vuoi costruire i tuoi agenti, dai un'occhiata a [docker-agent](https://github.com/docker/docker-agent) - è open source e lo stesso runtime su cui gira Gordon.
