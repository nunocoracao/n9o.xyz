---
title: "Il Docker MCP Catalog: Il Modo Sicuro per Scoprire ed Eseguire Server MCP"
summary: "L'ecosistema Model Context Protocol (MCP) sta esplodendo. In poche settimane, il nostro Docker MCP Catalog ha superato 1 milione di pull, confermando che gli sviluppatori cercano un modo sicuro per eseguire server MCP. Oggi siamo entusiasti di condividere importanti aggiornamenti al Docker MCP Catalog, incluse funzionalità di discovery migliorate e il nostro nuovo processo di submission aperto."
categories: ["Esterno"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/"
date: 2025-07-01
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

L'ecosistema Model Context Protocol (MCP) sta esplodendo. In poche settimane, il nostro Docker MCP Catalog ha superato 1 milione di pull, confermando che gli sviluppatori cercano un modo sicuro per eseguire server MCP. Oggi siamo entusiasti di condividere importanti aggiornamenti al Docker MCP Catalog, incluse funzionalità di discovery migliorate e il nostro nuovo processo di submission aperto. Con centinaia di sviluppatori che già richiedono di pubblicare i loro server MCP attraverso Docker, stiamo accelerando la nostra missione di rendere i server MCP containerizzati lo standard per la distribuzione sicura di strumenti AI.

La rapida adozione dei server MCP evidenzia anche un problema critico — la pratica attuale di eseguirli tramite comandi npx o uvx espone i sistemi a codice non verificato con accesso completo all'host, per non parlare della frizione nella gestione delle dipendenze. In questo post, spiegheremo perché Docker sta investendo nell'ecosistema MCP, mostreremo le nuove funzionalità del catalog e condivideremo come potete contribuire a costruire una base più sicura per le applicazioni AI.

## Perché Docker sta costruendo il MCP Catalog
### I problemi di sicurezza nella distribuzione MCP
Ogni volta che uno sviluppatore esegue npx -y @untrusted/mcp-server o uvx some-mcp-tool, sta facendo un compromesso pericoloso: comodità prima della sicurezza. Questi comandi eseguono codice arbitrario direttamente sul sistema host con accesso completo a:

- L'intero file system
- Connessioni di rete
- Variabili d'ambiente e segreti
- Risorse di sistema

Alcuni client MCP limitano l'accesso alle variabili d'ambiente, ma anche questa non è una pratica universale. Questo non è sostenibile. Man mano che MCP passa dalla sperimentazione alla produzione, abbiamo bisogno di un approccio fondamentalmente diverso.

### La posizione unica di Docker
Docker ha trascorso oltre un decennio a risolvere esattamente questi problemi per le applicazioni cloud-native. Abbiamo costruito l'infrastruttura, gli strumenti e la fiducia su cui gli sviluppatori fanno affidamento per eseguire miliardi di container in produzione. Ora stiamo applicando gli stessi principi all'ecosistema MCP.

Quando esegui un server MCP dal nostro Catalog, ottieni:

- Firme crittografiche che verificano che l'immagine non sia stata manomessa
- Software Bill of Materials (SBOM) che documenta ogni componente
- Isolamento completo dal sistema host
- Accesso controllato solo a ciò di cui il server ha effettivamente bisogno

Non si tratta di rendere la vita più difficile agli sviluppatori — si tratta di rendere la sicurezza il percorso di minor resistenza.

## Presentazione del MCP Catalog migliorato
### Costruito per la discovery MCP
Abbiamo ripensato il MCP Catalog per renderlo più accessibile e facile da navigare. Potete ancora accedere al MCP Catalog da Docker Hub e dal MCP Toolkit in Docker Desktop come prima, o andare direttamente al MCP catalog. Siamo andati oltre le liste generiche di immagini container costruendo funzionalità che vi aiutano a trovare rapidamente i server MCP giusti per le vostre applicazioni AI.

Sfoglia per Caso d'Uso: I server MCP sono organizzati per quello che fanno effettivamente:

- Integrazione Dati (database, API, file system)
- Strumenti di Sviluppo (IDE, analisi del codice, testing)
- Comunicazione (email, Slack, piattaforme di messaggistica)
- Produttività (gestione task, calendari, note)
- Analytics (elaborazione dati, visualizzazione, reporting)

**Ricerca Avanzata**: Trova server per capacità, strumenti, tag GitHub e categorie — non solo per nome.

**Trasparenza sulla Sicurezza**: Ogni voce del catalog mostra chiaramente se è costruita da Docker (con firma e verifica trasparente della build) o costruita dalla community (containerizzata e mantenuta dal publisher).

### Come classifichiamo i Server MCP: Costruiti da Docker vs. Costruiti dalla Community
**Server Costruiti da Docker**: Quando vedi "Built by Docker", stai ottenendo il nostro trattamento di sicurezza completo. Controlliamo l'intera pipeline di build, fornendo firme crittografiche, SBOM, attestazioni di provenienza e scansione continua delle vulnerabilità.

**Server Costruiti dalla Community**: Questi server sono pacchettizzati come immagini Docker dai loro sviluppatori. Anche se non controlliamo il loro processo di build, beneficiano comunque dell'isolamento del container, che è un enorme miglioramento della sicurezza rispetto all'esecuzione diretta.

I tier svolgono ruoli importanti: I server costruiti da Docker dimostrano lo standard d'oro per la sicurezza, mentre i server costruiti dalla community assicurano che possiamo scalare rapidamente per soddisfare la domanda degli sviluppatori. Gli sviluppatori possono cambiare idea dopo aver inviato un server costruito dalla community e scegliere di reinviarlo come server costruito da Docker.

Screenshot 2025-06-26 105434
Figura 3: Un esempio di Server MCP Built by Docker.

## Aperto per submission di Server MCP: Unisciti al movimento MCP sicuro

{{< github repo="docker/mcp-registry" >}}


A partire da oggi, stiamo aprendo il nostro processo di submission alla community. Che tu sia uno sviluppatore individuale o un team enterprise, puoi presentare i tuoi server MCP nel Docker MCP Catalog. Pubblicando attraverso il nostro catalog, non stai solo distribuendo il tuo server MCP — stai aiutando a stabilire un nuovo standard di sicurezza per l'intero ecosistema mentre rendi i tuoi strumenti MCP disponibili a milioni di sviluppatori che già usano Docker tramite Docker Hub e Docker Desktop. Il tuo server containerizzato diventa parte della soluzione, dimostrando che gli strumenti AI pronti per la produzione non richiedono compromessi sulla sicurezza.


Continua a leggere il post originale sul [Docker Blog](https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/).
