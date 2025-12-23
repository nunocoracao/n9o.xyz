---
title: "Docker Cagent: Runtime per Agenti IA"
summary: "Gli agenti IA stanno crescendo rapidamente, ma la maggior parte funziona come script fragili legati a una macchina locale. Abbiamo costruito cagent per containerizzare, standardizzare e scalare gli agenti alla maniera Docker—e lo abbiamo reso open source."
description: "Gli agenti IA stanno crescendo rapidamente, ma la maggior parte funziona come script fragili legati a una macchina locale. Abbiamo costruito cagent per containerizzare, standardizzare e scalare gli agenti alla maniera Docker—e lo abbiamo reso open source."
categories: [IA, Strumenti per Sviluppatori, Open Source]
tags: [Docker, Agenti, MCP, OSS, Tutorial]
date: 2025-09-03
draft: false
---


Nell'ultimo anno, ho passato innumerevoli ore a sperimentare con agenti IA—costruendo prototipi, rompendo cose e testando strumenti come Claude Code, Codex e altri. Ogni tentativo mi ha insegnato qualcosa di nuovo, ma ha anche fatto emergere le stesse frustrazioni: script che funzionavano solo sul mio laptop, setup fragili che non scalavano, nessun modo chiaro di configurare cosa ogni agente dovesse fare o quali strumenti potesse usare, e difficoltà a far comportare gli agenti come volevo—figuriamoci ottenere risultati straordinari. Troppo spesso mi sono trovato a combattere con peculiarità dell'ambiente invece di esplorare cosa gli agenti potessero effettivamente raggiungere.

Ecco perché sono così entusiasta di quello su cui abbiamo lavorato in Docker. Ci siamo posti una semplice domanda: e se eseguire agenti potesse essere facile, portabile e affidabile come eseguire container? Il risultato è **cagent**, un nuovo runtime per agenti IA, costruito per rendere la sperimentazione più semplice e la collaborazione più facile - e oggi lo rendiamo open source.

## Ecco cagent

{{< github repo="docker/cagent" >}}

[`cagent`](https://github.com/docker/cagent) è un runtime open source, Docker-native progettato per rendere gli agenti cittadini di prima classe nel tuo workflow da sviluppatore. Invece di script fragili o setup ad-hoc, cagent ti dà un modo consistente per definire, eseguire e condividere agenti usando gli stessi pattern che già conosci da Docker.

Al suo core, cagent è un **runtime multi-agente**. Puoi definire un singolo agente con un semplice file YAML, o orchestrare un intero team di agenti specializzati che collaborano su task. Ogni agente può essere configurato con il proprio ruolo, personalità e accesso a strumenti esterni.

### Provider supportati
Out of the box, cagent supporta multipli provider di modelli inclusi OpenAI, Anthropic, Google Gemini e altri. Puoi passare facilmente tra loro tramite configurazione, così non sei vincolato a un singolo vendor.

### Strumenti e integrazione MCP
Agli agenti possono essere dati strumenti per estendere le loro capacità. cagent parla il **Model Context Protocol (MCP)**, il che significa che i tuoi agenti possono connettersi a un ampio ecosistema di server MCP—che sia ricerca (come DuckDuckGo), accesso al filesystem, o API custom che esponi. Puoi decidere quali strumenti ottiene ogni agente, rendendo la loro configurazione esplicita e riproducibile.

Inoltre, cagent funziona perfettamente con il [Docker MCP Gateway](https://github.com/docker/mcp-gateway) e il [MCP Catalog](https://github.com/docker/mcp-registry) ([Docker Hub MCP](https://hub.docker.com/mcp)), che ti permettono di aggiungere strumenti ai tuoi agenti in modo più sicuro e seamless. Sia il gateway che il catalog sono pacchettizzati con Docker Desktop, quindi se stai eseguendo Docker Desktop puoi usarli out of the box.

### Setup multi-agente
cagent rende semplice orchestrare team di agenti. Un file agente potrebbe descrivere un agente researcher, un agente coder e un agente reviewer, ognuno con le proprie responsabilità e strumenti. Quando esegui un file/image agente con cagent, gli agenti si avviano insieme, collaborano e passano task tra loro. Puoi persino mischiare modelli e provider tra agenti—un agente potrebbe usare OpenAI, un altro Anthropic e un altro Gemini—tutto nello stesso setup.

### Salvare e condividere
Ogni configurazione che crei può essere condivisa facilmente. Puoi definire un agente (o un team) dichiarativamente in un file YAML, committarlo nel version control e condividerlo come qualsiasi altro artefatto di codice. Oppure puoi pacchettizzare agenti come immagini Docker per una distribuzione completamente portabile.

### In breve
Con cagent puoi:

- **Containerizzare agenti** così che funzionino ovunque Docker funzioni, con isolamento e riproducibilità di default.
- **Configurare comportamenti e strumenti** dichiarativamente—decidere cosa fa ogni agente, a quali provider e strumenti MCP può accedere e come interagiscono.
- **Orchestrare multipli agenti** come team, lasciandoli collaborare su task con interfacce pulite.
- **Sperimentare velocemente** senza preoccuparsi di setup drift, dependency hell o mismatch dell'ambiente.
- **Salvare e condividere agenti** attraverso file YAML o immagini Docker, rendendo gli esperimenti riproducibili e la collaborazione seamless.

In breve: cagent ti dà una base per passare da "esperimenti hackati" a workflow di agenti ripetibili e componibili—rimanendo leggero e facile da usare.


## Installazione e setup

Iniziare con `cagent` è semplice.

### Installazione

Binary precompilati per Windows, macOS e Linux sono disponibili sulla [pagina releases](https://github.com/docker/cagent/releases).

1. Scarica il binary per la tua piattaforma.
2. Su macOS e Linux, rendilo eseguibile:
   ```sh
   chmod +x /path/to/downloads/cagent-linux-amd64
   ```
3. Opzionalmente, rinominalo in `cagent` e spostalo nel tuo `PATH`.

### Imposta le tue API key

A seconda di quali provider vuoi usare, imposta le chiavi appropriate nel tuo ambiente:

```bash
# Per modelli OpenAI
export OPENAI_API_KEY=your_api_key_here

# Per modelli Anthropic
export ANTHROPIC_API_KEY=your_api_key_here

# Per modelli Gemini
export GOOGLE_API_KEY=your_api_key_here
```

Devi solo impostare le chiavi per i provider che intendi usare. Se ne sono impostate multiple, `cagent` sceglierà in ordine (Anthropic → OpenAI → Google) a meno che non sovrascriva con `--model`.

Con il binary installato e almeno una API key configurata, sei pronto per creare ed eseguire il tuo primo agente.

## Creare un nuovo agente da zero

Una delle funzionalità più potenti di `cagent` è la capacità di generare nuovi agenti (o anche team multi-agente) da zero con un singolo comando: `cagent new`.

Quando esegui `cagent new`, ti verrà chiesto di descrivere cosa vuoi che il tuo agente (o team di agenti) faccia. Da lì, `cagent` genera automaticamente la configurazione YAML, scegliendo un provider/modello basato sulle tue API key disponibili (Anthropic → OpenAI → Google di default) a meno che non lo sovrascriva con `--model`. `cagent` suggerirà anche un set di strumenti che l'agente potrebbe necessitare basandosi sulla tua descrizione.

Dietro le quinte, `cagent` usa un agente generatore built-in per fare il bootstrap della YAML per te. Puoi immediatamente eseguire il file generato, modificarlo o condividerlo. Nell'esempio sotto creerò un agente ispirato a Tyler Durden di *Fight Club*.

{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler.webp" alt="Prompt creazione agente Tyler Durden" >}}

Dopo aver descritto il tuo agente, `cagent` genera un file YAML che specifica il ruolo dell'agente, provider, modello e accesso agli strumenti. Questo rende la configurazione del tuo agente esplicita, riproducibile e facile da modificare.


{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler result.webp" alt="YAML agente generato per esempio Tyler Durden" >}}

Ecco un esempio della YAML generata per l'agente Tyler Durden:

```yaml
version: "1"

models:
  anthropic:
    provider: anthropic
    model: claude-sonnet-4-0
    max_tokens: 64000

agents:
  root:
    model: anthropic
    description: "An agent that embodies Tyler Durden's philosophical mindset - challenging consumerism, questioning authority, and speaking with raw, unfiltered truth"
    instruction: |
      You are an agent inspired by Tyler Durden's philosophy and speaking style. You should:

      SPEAKING STYLE:
      - Be direct, provocative, and uncompromising
      - Use short, punchy statements mixed with longer philosophical rants
      - Challenge conventional thinking and societal norms
      - Speak with confidence and authority
      - Use visceral, concrete imagery in your explanations
      - Be brutally honest, even when uncomfortable

      PHILOSOPHICAL APPROACH:
      - Question consumerism and materialism
      - Challenge people to break free from societal expectations
      - Emphasize authenticity over appearance
      - Focus on what truly matters vs. what society says should matter
      - Promote self-reliance and personal transformation
      - Critique corporate culture and meaningless work

      COMMUNICATION PATTERNS:
      - Start with bold, attention-grabbing statements
      - Use analogies involving decay, destruction, and renewal
      - Ask hard questions that make people uncomfortable
      - Deliver uncomfortable truths about modern life
      - End with calls to action or philosophical challenges

      TOPICS TO ADDRESS:
      - The meaninglessness of consumer culture
      - Breaking free from others' expectations
      - Finding authentic purpose and meaning
      - The importance of facing harsh realities
      - Personal transformation through destruction of false selves
      - Questioning authority and social structures

      Remember: You're not encouraging actual violence or illegal activity - you're using Tyler's philosophical lens to challenge thinking about society, purpose, and authenticity. Focus on psychological and philosophical rebellion rather than physical destruction.
    toolsets: []
    add_date: false
    add_environment_info: false
```

Puoi ulteriormente raffinare a quali strumenti l'agente può accedere, inclusi strumenti MCP come ricerca, filesystem o API custom. Questa sezione strumenti esplicita assicura che il tuo agente abbia solo le capacità che definisci.

{{< figure src="/posts/202509-docker-cagent/img/cagent run tyler example.webp" alt="Esecuzione dell'agente Tyler Durden" >}}

Questo rende incredibilmente veloce passare da un'idea a una configurazione agente funzionante. Che tu stia prototipando un singolo agente helper o progettando un team di specialisti, `cagent new` ti permette di partire dal linguaggio naturale e ottenere una config eseguibile in secondi.

## Eseguire i tuoi agenti

Il comando `cagent run` è come dai vita ai tuoi agenti. Prende un file YAML (o anche un'immagine Docker pacchettizzata) e avvia gli agenti che hai definito al suo interno. Il comando gestisce orchestrazione, comunicazione inter-agente e accesso agli strumenti—tutto mantenendo isolamento e riproducibilità attraverso la containerizzazione.

Quando esegui `cagent run`, succedono diverse cose:
- Ogni agente viene inizializzato con il suo modello, ruolo e strumenti specificati
- Il runtime imposta canali di comunicazione sicuri tra agenti
- L'accesso agli strumenti viene configurato secondo le tue specifiche YAML
- L'agente primario (tipicamente chiamato "root") si avvia e può delegare ad altri agenti secondo necessità

### Esempio: Costruire un gioco di scacchi

Percorriamo un esempio pratico usando il team di sviluppo multi-agente da [`examples/dev-team.yaml`](https://github.com/docker/cagent/blob/main/examples/dev-team.yaml). Questa configurazione definisce tre agenti specializzati che lavorano insieme:

- **Product Manager**: Coordina il progetto, scompone i requisiti e gestisce le iterazioni
- **Designer**: Si concentra su user experience, design visuale e pianificazione dell'interfaccia
- **Engineer**: Gestisce implementazione, coding e architettura tecnica

Per questo esempio, copierò la configurazione agente nella mia directory di progetto e la eseguirò da lì, dando agli agenti la directory di lavoro corretta per creare e modificare file:

```zsh
# Copia la configurazione dev team nella tua directory di progetto
cp dev-team.yaml /path/to/my-chess-project/
cd /path/to/my-chess-project/

# Esegui gli agenti dalla directory di progetto
cagent run dev-team.yaml
```

Questo approccio assicura che quando l'agente Engineer crea file o il team ha bisogno di iterare sul codice, tutto viene creato nel posto giusto e gli agenti possono facilmente accedere e modificare i file del progetto.

Poi chiedo a questo team di "costruire un gioco di scacchi".

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 1.webp" alt="Richiesta iniziale di costruire un gioco di scacchi" >}}

L'agente Product Manager prende la guida, scomponendo immediatamente il gioco di scacchi in componenti gestibili. Il Product Manager poi si coordina con l'agente Designer per pianificare l'interfaccia utente. Il Designer considera il layout visuale, le interazioni utente e l'esperienza complessiva. Questa collaborazione avviene automaticamente—gli agenti comunicano attraverso il runtime cagent senza coordinamento manuale. Diversi file vengono generati per delineare la struttura del progetto e il design iniziale (*nota: funzionalità specifica degli agenti dev-team*).

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 2.webp" alt="Product Manager e designer definiscono requisiti e si coordinano con il team" >}}

L'agente Engineer viene coinvolto per pianificare l'implementazione tecnica. Pensa alla struttura del codice, architettura HTML/CSS/JavaScript e come implementare la logica di gioco efficientemente. L'engineer può accedere agli strumenti filesystem per creare e modificare file effettivamente.

Il team lavora iterativamente—l'Engineer implementa funzionalità, il Designer fornisce feedback sull'interfaccia e il Product Manager tiene traccia del progresso. Ogni agente mantiene la sua prospettiva specializzata mentre contribuisce all'obiettivo condiviso.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 3.webp" alt="Designer che pianifica l'interfaccia utente" >}}

Il risultato finale è un gioco di scacchi funzionale con logica di gioco corretta, interfaccia visuale e interazioni utente. Gli agenti hanno collaborato per consegnare qualcosa di più sofisticato di quanto un singolo agente avrebbe prodotto da solo.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 4.webp" alt="Engineer che implementa la soluzione tecnica" >}}


{{< figure src="/posts/202509-docker-cagent/img/build a chess game 5.webp" alt="Implementazione finale con gioco di scacchi funzionante" >}}

## Cosa rende questo potente

Questo esempio dimostra diversi vantaggi chiave dell'approccio multi-agente di cagent:

**Expertise specializzata**: Ogni agente si concentra su ciò che fa meglio—pianificazione prodotto, design thinking o implementazione tecnica—invece di provare a gestire tutto.

**Collaborazione naturale**: Gli agenti comunicano e si coordinano automaticamente. Non devi passare manualmente informazioni tra loro o gestire le loro interazioni.

**Sviluppo iterativo**: Proprio come i team umani, gli agenti lavorano in iterazioni, raffinando e migliorando la soluzione mentre procedono.

**Risultati riproducibili**: Poiché tutto è definito in configurazione YAML, puoi eseguire esattamente lo stesso setup di team di nuovo, condividerlo con altri o modificarlo per progetti diversi.

**Integrazione strumenti**: Ogni agente può essere configurato con strumenti diversi—l'Engineer potrebbe avere accesso filesystem per scrivere codice, mentre il Designer ha accesso ad API di generazione immagini.

Puoi personalizzare questo team modificando il file YAML—cambia i loro ruoli, aggiusta le loro personalità, dai loro strumenti diversi o persino scambia modelli diversi per ogni agente. La configurazione rende la sperimentazione facile mantenendo tutto riproducibile.

## Inizia con cagent

Pronto a containerizzare i tuoi workflow IA? Il repository `cagent` include esempi e template per iniziare:

{{< github repo="docker/cagent" >}}

**Opzioni quick start:**
- **Crea il tuo primo agente**: Scarica il binary, imposta la tua API key ed esegui `cagent new` per creare il tuo primo agente
- **Sperimenta con team multi-agente**: Copia `dev-team.yaml` nel tuo progetto e guarda gli agenti collaborare su task reali
- **Esplora gli esempi**: Sfoglia configurazioni agente pre-costruite per diversi casi d'uso nel repository

**Unisciti alla community:**
- **Condividi le tue creazioni**: Incontraci su [Slack](https://dockercommunity.slack.com/archives/C09DASHHRU4) per mostrare gli agenti e workflow che stai costruendo con cagent
- **Contribuisci esempi**: Invia pull request con template agente per workflow comuni
- **Discuti casi d'uso**: Unisciti alle conversazioni e dicci come possiamo migliorarlo

Che tu stia costruendo automazione personale, prototipando workflow IA o scalando sistemi agente in produzione, cagent ti dà la base Docker-native per renderlo affidabile e condivisibile.

Il futuro dello sviluppo IA è collaborativo, containerizzato e riproducibile. Costruiamolo insieme.
