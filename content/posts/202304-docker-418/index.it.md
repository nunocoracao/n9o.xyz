---
title: "Docker Desktop 4.18"
summary: "Siamo sempre alla ricerca di modi per migliorare la tua esperienza con Docker, che tu stia usando un'integrazione, un'estensione o direttamente nel prodotto. Docker Desktop 4.18 si concentra sui miglioramenti nella riga di comando e in Docker Desktop."
categories: ["Esterno"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-18/"
date: 2023-04-05
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Siamo sempre alla ricerca di modi per migliorare la tua esperienza con Docker, che tu stia usando un'integrazione, un'estensione o direttamente nel prodotto. Docker Desktop 4.18 si concentra sui miglioramenti nella riga di comando e in Docker Desktop.

Continua a leggere per scoprire le nuove funzionalità CLI in Docker Scout, e scopri Docker init, un'entusiasmante funzionalità CLI Beta per aiutarti ad aggiungere rapidamente Docker a qualsiasi progetto. Esaminiamo anche nuove funzionalità per aiutarti a iniziare con Docker più velocemente: Container File Explorer, installazione macOS senza admin e una nuova funzionalità sperimentale in Docker Compose.

## Docker Scout CLI
In Docker Desktop 4.17, abbiamo introdotto Docker Scout, uno strumento che fornisce visibilità sulle vulnerabilità delle immagini e raccomandazioni per una rapida remediation. Siamo lieti di annunciare il rilascio di diverse nuove funzionalità nella riga di comando di Docker Scout, che viene fornita con Docker Desktop 4.18. Questi aggiornamenti arrivano dopo aver ricevuto una quantità schiacciante di feedback dalla community.

Il rilascio 4.18 di Docker Scout include una quickview delle vulnerabilità, raccomandazioni per le immagini direttamente sulla riga di comando, guida alla remediation migliorata con utilizzo SBOM di BuildKit e una funzionalità di anteprima per confrontare le immagini (immagina di usare diff, ma per le immagini container).

## Quickview
Supponiamo che tu abbia creato una nuova immagine container e desideri valutare la sua postura di sicurezza. Ora puoi eseguire docker scout quickview per un'informazione di sicurezza istantanea e di alto livello sulla tua immagine. Se vengono trovati problemi, Docker Scout ti guiderà su cosa fare dopo.

## Raccomandazioni da riga di comando
Se hai precedentemente usato docker scout cves per capire quali CVE esistono nelle tue immagini, potresti esserti chiesto quale corso d'azione intraprendere successivamente. Con il nuovo comando docker scout recommendations, ricevi una lista di raccomandazioni che suggeriscono direttamente gli aggiornamenti disponibili per l'immagine base.

Il comando docker scout recommendations analizza l'immagine e mostra raccomandazioni per aggiornare l'immagine base, insieme a una lista di benefici, incluse opportunità per ridurre le vulnerabilità o come ottenere dimensioni di immagine più piccole.

## Provenance BuildKit e attestazioni SBOM
A gennaio 2023, BuildKit è stato esteso per supportare la creazione di immagini con attestazioni. Queste immagini possono ora usare la riga di comando docker scout per processare queste informazioni e determinare i prossimi passi rilevanti. Possiamo supportare questo perché lo strumento da riga di comando docker scout sa esattamente con quale immagine base hai costruito e può fornire raccomandazioni più accurate.

Se un'immagine è stata costruita e pushata con un'attestazione SBOM allegata, docker scout legge le informazioni sui pacchetti dall'attestazione SBOM invece di creare un nuovo SBOM locale.

Per imparare come costruire immagini con attestazioni usando BuildKit, leggi "Generating SBOMs for Your Image with BuildKit."

## Confronta immagini
Nota: Questa è una funzionalità sperimentale di Docker Scout e potrebbe cambiare ed evolvere nel tempo.

Documentare retrospettivamente le modifiche fatte per affrontare un problema di sicurezza dopo aver completato una remediation di vulnerabilità è considerata una buona pratica. Docker Desktop 4.18 introduce un'anteprima anticipata del confronto tra immagini.

Questa funzionalità evidenzia le differenze di vulnerabilità tra due immagini e come si confrontano i pacchetti. Questi dettagli includono la versione del pacchetto, le variabili d'ambiente in ogni immagine e altro. Inoltre, l'output della riga di comando può essere impostato in formato markdown. Queste informazioni possono poi essere usate per generare anteprime diff nelle pull request tramite GitHub Actions.

Ci piacerebbe sapere quali scenari potresti immaginare usando questa funzionalità diff. Puoi farlo aprendo Docker Desktop, navigando alla scheda Images e selezionando "Dai feedback".

Leggi la documentazione per saperne di più su queste funzionalità.

## Container File Explorer
Un'altra funzionalità che siamo felici di annunciare è il rilascio GA di Container File Explorer. Quando hai bisogno di controllare o sostituire rapidamente i file all'interno di un container, Container File Explorer ti aiuterà a farlo — e molto altro — direttamente dall'interfaccia di Docker Desktop.

Non dovrai ricordare lunghi comandi CLI, armeggiare con lunghi parametri di percorso sul comando docker cp, o frustrarti che il tuo container non ha alcuna shell per controllare i file. Container File Explorer fornisce una semplice UI che ti permette di:

- Controllare un filesystem container
- Copiare file e cartelle tra host e container
- Trascinare e rilasciare facilmente file in un container
- Modificare rapidamente file con evidenziazione della sintassi
- Eliminare file

Con Container File Explorer, puoi visualizzare i file dei tuoi container in qualsiasi stato (fermato/in esecuzione/in pausa/…) e per qualsiasi tipo di container, inclusi slim-container/slim-images (container senza shell). Apri la dashboard, vai alla scheda Containers, apri il menu azioni del container e controlla i tuoi file:

## Installazione senza admin su macOS
Abbiamo adattato il nostro flusso di installazione macOS per rendere super facile per gli sviluppatori installare Docker Desktop senza concedere loro privilegi di admin. Alcuni sviluppatori lavorano in ambienti con requisiti di sicurezza elevati dove l'accesso admin locale potrebbe essere proibito sulle loro macchine. Volevamo assicurarci che gli utenti in questi ambienti possano rinunciare alle funzionalità di Docker Desktop che richiedono privilegi di admin.

Il flusso di installazione predefinito su macOS chiederà ancora i privilegi di admin, poiché crediamo che questo ci permetta di fornire un'esperienza ottimizzata per la grande maggioranza dei casi d'uso degli sviluppatori. Dopo aver concesso i privilegi di admin, Docker Desktop installa automaticamente gli strumenti CLI Docker, permettendo alle librerie di terze parti di integrarsi senza problemi con Docker (abilitando il socket Docker predefinito) e permettendo agli utenti di collegarsi a porte privilegiate tra 1 e 1024.

Se vuoi cambiare le impostazioni che hai configurato all'installazione, puoi farlo facilmente nella scheda Advanced delle Impostazioni di Docker Desktop.

## Docker init (Beta)
Un'altra funzionalità entusiasmante che stiamo rilasciando in Beta è docker init. Questo è un nuovo comando CLI che ti permette di aggiungere rapidamente Docker al tuo progetto creando automaticamente gli asset richiesti: Dockerfile, file Compose e .dockerignore. Usando questa funzionalità, puoi facilmente aggiornare progetti esistenti per eseguirli usando container o configurare nuovi progetti anche se non hai familiarità con Docker.

Puoi provare docker init aggiornando all'ultima versione di Docker Desktop (4.18.0) e digitando docker init nella riga di comando mentre sei dentro una cartella di progetto target. docker init creerà tutti i file richiesti per eseguire il tuo progetto in Docker.

Consulta la documentazione di docker init per saperne di più.

La versione Beta di docker init viene fornita con supporto Go, e il team Docker sta già lavorando per aggiungere più linguaggi e framework, inclusi Node.js, Python, Java, Rust e .Net, più altre funzionalità nei prossimi mesi. Se c'è un linguaggio o framework specifico che vorresti che supportassimo, faccelo sapere. Invia altri feedback e suggerimenti nella nostra roadmap pubblica.

Nota: Ti preghiamo di essere consapevole che docker init non deve essere confuso con l'eseguibile docker-init usato internamente, che viene invocato da Docker quando si utilizza il flag –init con il comando docker run. Consulta la documentazione per saperne di più.

## Docker Compose File Watch (Sperimentale)
Docker Compose ha un nuovo trucco! Docker Compose File Watch è disponibile ora come funzionalità Sperimentale per mantenere automaticamente tutti i tuoi container di servizio aggiornati mentre lavori.

(...)

Una volta configurato, il nuovo comando docker compose alpha watch inizierà a monitorare le modifiche ai file nel tuo progetto:

Su una modifica a ./web/App.jsx, per esempio, Compose lo sincronizzerà automaticamente a /src/web/App.jsx all'interno del container.
Nel frattempo, se modifichi package.json (come installando un nuovo pacchetto npm), Compose ricostruirà l'immagine e sostituirà il servizio esistente con una versione aggiornata.
La modalità Compose File Watch è solo l'inizio. Con quasi 100 commit dal ultimo rilascio di Docker Compose, abbiamo risolto bug e fatto molti miglioramenti alla qualità della vita. (Un ringraziamento speciale a tutti i nostri recenti contributori per la prima volta!)

Siamo entusiasti di Docker Compose File Watch e stiamo lavorando attivamente sulla meccanica sottostante e sul formato di configurazione.

## Conclusione
Questo è tutto per il nostro aggiornamento Docker Desktop 4.18. Questo rilascio include molte nuove funzionalità interessanti, incluse alcune che puoi aiutare a plasmare! Abbiamo anche aggiornato il Docker Engine per affrontare alcuni CVE. Come sempre, amiamo sentire il tuo feedback. Per favore lascia qualsiasi feedback sulla nostra roadmap GitHub pubblica e facci sapere cos'altro vorresti vedere.

Controlla le note di rilascio per una ripartizione completa delle novità in Docker Desktop 4.18.



{{< alert >}}
**Nota:** questo post è stato originariamente pubblicato esternamente, per favore vai al [blog di Docker](https://www.docker.com/blog/docker-desktop-4-18/) per leggere il post completo
{{< /alert >}}
