---
title: "Docker Desktop 4.23"
summary: "Docker Desktop 4.23 è ora disponibile e include numerosi miglioramenti, tra cui il supporto per ASP.NET Core in Docker Init, il controllo dell'integrità della configurazione per avvisare su eventuali modifiche alla configurazione che richiedono attenzione e la gestione delle identità cross-domain."
categories: ["Esterno"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-23/"
date: 2023-09-12
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Docker Desktop 4.23 è ora disponibile e include numerosi miglioramenti, tra cui il supporto per ASP.NET Core in Docker Init, il controllo dell'integrità della configurazione per avvisare su eventuali modifiche alla configurazione che richiedono attenzione e la gestione delle identità cross-domain. Questa release migliora anche la Ricerca Rapida, permettendo di cercare tra container, app, Docker Hub, Docs e qualsiasi volume, ed eseguire azioni rapide (avvio/stop/eliminazione). VirtioFS è ora impostato di default per fornire miglioramenti delle prestazioni per gli utenti Mac. Con il rilascio di Docker Desktop 4.23, gli utenti Mac vedranno anche un aumento delle prestazioni di rete utilizzando connessioni di rete tradizionali.

In questo post, approfondiamo le novità e gli aggiornamenti nell'ultima release di Docker Desktop.

## ASP.NET Core con Docker Init
Siamo entusiasti di annunciare il supporto aggiunto per ASP.NET Core. Che tu sia nuovo in Docker o un professionista esperto, Docker Init ora semplifica la Dockerizzazione per i tuoi progetti ASP.NET Core. Con un semplice comando docker init nella cartella del tuo progetto e l'ultima versione di Docker Desktop, osserva come Docker Init genera Dockerfile personalizzati, file Compose e file .dockerignore su misura.

Specificamente per ASP.NET Core, abbiamo anche migliorato il supporto e i commenti nel Dockerfile per le build multi-architettura. Questo avanzamento aiuterà gli utenti a gestire la condivisione delle loro immagini tra diverse architetture CPU e semplificare i deployment su provider cloud come Azure, AWS e GCP. Crea immagini adatte a varie architetture, aumentando flessibilità ed efficienza nei deployment cloud.

Inizia assicurandoti di avere l'ultima versione di Docker Desktop. Quindi, esegui docker init nella directory del tuo progetto tramite la riga di comando. Lascia che Docker Init gestisca il lavoro pesante, permettendoti di concentrarti sul tuo compito principale — creare applicazioni eccezionali!

## Controllo dell'Integrità della Configurazione
Assicurati che Docker Desktop funzioni senza problemi con il nostro nuovo Controllo dell'Integrità della Configurazione. Questo ti permette di continuare a usare più applicazioni e strumenti locali, rendendo a volte le modifiche alla configurazione senza problemi. Questo aggiornamento rileva automaticamente e avvisa di qualsiasi modifica alla configurazione, invitando con un semplice clic a ristabilire le configurazioni di Docker Desktop per tracciare e garantire uno sviluppo ininterrotto.


## Gestione delle identità cross-domain
La gestione dell'accesso degli utenti per Docker è diventata più potente. SCIM aiuta a provisioning o de-provisioning automatico degli utenti, e la mappatura dei ruoli di gruppo è ora supportata così puoi organizzare i tuoi team e il loro accesso di conseguenza:

Puoi assegnare ruoli ai membri nella tua organizzazione nell'IdP. Per impostare un ruolo, puoi usare attributi opzionali a livello utente per la persona a cui vuoi assegnare un ruolo.
Puoi anche impostare un'organizzazione e un team per sovrascrivere i valori di provisioning predefiniti impostati dalla connessione SSO.
La seguente tabella elenca gli attributi opzionali a livello utente supportati.

## Miglioramenti alla Ricerca Rapida
Dando agli sviluppatori accesso senza interruzioni alle risorse essenziali ogni volta che ne hanno bisogno, la nostra rinnovata funzione di Ricerca Rapida ha ricevuto aggiornamenti significativi. Ora, gli utenti possono localizzare senza sforzo:

Container e app Compose: Individua facilmente qualsiasi container o app Compose residente sul tuo sistema locale. Inoltre, ottieni accesso rapido alle variabili d'ambiente ed esegui azioni essenziali come avviare, fermare o eliminarli.
Immagini Docker Hub: Che siano immagini Docker Hub pubbliche, locali o quelle da repository remoti, la Ricerca Rapida fornirà risultati rapidi e pertinenti.
Estensioni: Scopri di più su estensioni specifiche e semplifica l'installazione con un singolo clic.
Volumi: Naviga senza sforzo attraverso i tuoi volumi e ottieni informazioni sui container associati.
Documentazione: Accedi istantaneamente all'assistenza inestimabile dalla documentazione ufficiale di Docker, tutto direttamente da Docker Desktop.
La Ricerca Rapida migliorata è il tuo strumento definitivo per la scoperta e la gestione delle risorse, offrendo comodità senza pari per gli sviluppatori.

## Standardizzazione della condivisione file ad alte prestazioni con VirtioFS per utenti Mac
Docker Desktop 4.23 ora utilizza di default VirtioFS su macOS 12.5+ come standard per fornire sostanziali miglioramenti delle prestazioni quando si condividono file con i container tramite docker run -v o bind mount in Compose YAML. VirtioFS minimizza l'overhead del trasferimento file permettendo ai container di accedere ai file senza mount di volumi o condivisioni di rete.

Saltare i protocolli di trasferimento file di rete porta anche a trasferimenti file più veloci. Abbiamo misurato miglioramenti delle prestazioni, diminuendo il tempo di trasferimento file da 7:13.21s a 1:4.4s — un aumento di velocità dell'85,15%. Vogliamo notare che il miglioramento misurato dipende dalla dimensione del file, dalle altre app in esecuzione e dall'hardware del computer.

## Miglioramenti della velocità di rete di Docker Desktop per utenti Mac
Docker Desktop 4.23 viene con prestazioni di rete migliorate per gli utenti Mac. Ora, quando un container richiede una connessione di rete tradizionale, gli utenti sperimenteranno prestazioni di rete aumentate in questi modi:

Accesso alle porte esposte ~10x più veloce
Transmission Control Protocol (TCP) ~1,5x – 2x più veloce
Non è richiesta alcuna azione da parte dell'utente per sperimentare questi benefici — tutti gli utenti Mac aggiornati a 4.23 navigheranno in rete più velocemente!

## Conclusione
Aggiorna ora per esplorare le novità nella release 4.23 di Docker Desktop. Hai feedback? Lascia un feedback sulla nostra roadmap pubblica su GitHub e facci sapere cos'altro vorresti vedere nei prossimi rilasci.

Per saperne di più
Leggi le Note di Rilascio di Docker Desktop.
Ottieni l'ultima release di Docker Desktop.
Hai domande? La community Docker è qui per aiutare.
Nuovo in Docker? Inizia.


{{< alert >}}
**Nota:** questo post è stato originariamente pubblicato esternamente, vai al [blog di Docker](https://www.docker.com/blog/docker-desktop-4-23/) per leggere il post completo
{{< /alert >}}

