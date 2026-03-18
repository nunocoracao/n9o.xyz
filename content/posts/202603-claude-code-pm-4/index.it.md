---
title: "PMing with Claude Code: Capitolo 4 - Second Brain"
summary: "Claude Code poteva raggiungere tutto ma non ricordava nulla. Collegarlo a Obsidian ha trasformato file sparsi in un knowledge graph - con entità, estrazione di task e trascrizioni di riunioni che si alimentano a vicenda."
description: "Claude Code poteva raggiungere tutto ma non ricordava nulla. Collegarlo a Obsidian ha trasformato file sparsi in un knowledge graph - con entità, estrazione di task e trascrizioni di riunioni che si alimentano a vicenda."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Obsidian", "Granola", "knowledge management"]
series: ["PMing with Claude Code"]
series_order: 4
date: 2026-03-18
draft: false
---

Alla fine del capitolo tre, avevo definito la configurazione "god mode." Claude Code poteva accedere a GitHub, Notion, Snowflake, Google Workspace e Slack - tutto da un unico terminale. Cinque integrazioni, cinque fonti di dati, risposte in secondi invece che in ore. Accesso a tutto.

Ma ogni conversazione partiva da zero.

Le intuizioni che Claude faceva emergere in una sessione non si trasferivano alla successiva. Le connessioni che trovava tra un thread su Slack e un documento sui prezzi svanivano quando la conversazione finiva. Potevo chiedere a Claude di trovare qualsiasi cosa, ma non riusciva a ricordare ciò che aveva già trovato. La lacuna non erano più strumenti. Era far sì che la conoscenza si accumulasse - costruire un livello dove ogni nuova informazione si connette a tutto ciò che è venuto prima.

Questo è l'argomento di questo capitolo. Non un'altra integrazione. Un second brain.

## Perché Obsidian

Obsidian è un'app per prendere appunti costruita su semplici file markdown. Nessun formato proprietario, nessun database cloud, nessun vendor lock-in. Il vostro vault è semplicemente una cartella su disco - apritela con qualsiasi editor di testo e tutto è lì.

Ciò che la rende interessante per questo caso d'uso è la combinazione di funzionalità che si appoggiano su quei file. I wikilinks (`[[come questo]]`) permettono di collegare qualsiasi nota a qualsiasi altra nota senza attrito. Una vista a grafo visualizza quelle connessioni. Il frontmatter YAML offre metadati strutturati su ogni nota. Un ecosistema di plugin aggiunge di tutto, dalle kanban board alle viste database. E con la sincronizzazione iCloud, l'intero vault è disponibile sul telefono.

Il punto cruciale: non c'è nessuna API da configurare. Nessuna danza OAuth, nessun server MCP, nessun token di autenticazione. È una cartella di file markdown sul vostro filesystem locale. Claude Code ha già accesso al filesystem. Questa è l'intera integrazione.

## L'Integrazione Più Semplice

Su macOS con la sincronizzazione iCloud, un vault Obsidian si trova in:

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/<vault-name>/
```

Nessun server MCP necessario. Nessun plugin. Claude sa già leggere e scrivere file. Ho aggiunto una sezione "Knowledge Base" a `CLAUDE.md` con il percorso del vault e una nota che indica che è la posizione primaria per tutti i file persistenti. Poi ho aggiornato la skill `/sync` per scrivere la roadmap sia nel vault Obsidian che nel repository git - il vault come primario, il repo come backup versionato.

Tutto qui. Da quel momento in poi, ogni conversazione sapeva dove trovare e archiviare le cose. La parte meccanica ha richiesto cinque minuti.

## Struttura del Vault

Con la connessione in piedi, ho impostato una struttura di cartelle:

| Cartella | Scopo |
|----------|-------|
| `roadmap/` | File della roadmap sincronizzati da GitHub |
| `meetings/` | Trascrizioni delle riunioni per ricerca e contesto |
| `tasks/` | Task personali e to-do |
| `docs/` | Documenti strategici, analisi, ricerche |
| `blogs/` | Bozze di post per il blog |
| `entities/` | Entità di conoscenza riutilizzabili - persone, progetti, prodotti, iniziative |

Le cartelle `docs/` e `blogs/` che tenevo nel repository git sono state spostate nel vault. Stessi file, ma ora sono ricercabili attraverso Obsidian, collegabili via wikilinks e accessibili sul telefono tramite iCloud. Un'unica fonte di verità invece di due.

## La CLI di Obsidian

Qui le cose si sono fatte interessanti. Obsidian include una CLI integrata in `/Applications/Obsidian.app/Contents/MacOS/obsidian`. Ho fatto quello che faccio ormai con ogni nuovo strumento - il pattern del passo zero dei capitoli precedenti: puntare Claude sullo strumento e dire "esplora questo, documenta ciò che trovi in `CLAUDE.md`."

Claude ha esplorato l'albero dei comandi, testato i sottocomandi e mappato le funzionalità. Il risultato: due modi complementari di interagire con il vault.

**L'accesso diretto ai file** gestisce letture e scritture - veloce e semplice. Ma la CLI aggiunge query strutturate che le operazioni sul filesystem non possono fare:

```bash
# Full-text search across the vault
obsidian search "launch plan" --vault nexus

# Find what links to any note
obsidian backlinks "Project Alpha" --vault nexus

# Read/write YAML frontmatter programmatically
obsidian properties get "tasks/review-api.md" --vault nexus

# List and query tags across all notes
obsidian tags --vault nexus

# List and filter tasks
obsidian tasks --vault nexus --status open
```

Filesystem per la velocità, CLI per le relazioni. La combinazione significa che Claude può sia leggere il contenuto di un file sia comprendere la sua posizione nel knowledge graph più ampio.

## Entità: Il Knowledge Graph

Questo è il fulcro concettuale dell'intera configurazione.

La cartella `entities/` usa una convenzione semplice: ogni entità ha il proprio file markdown con frontmatter YAML per i metadati e wikilinks per le connessioni. I tipi di entità includono persone, prodotti, progetti, team, iniziative e concetti. Ogni tipo ha la propria sottocartella.

Ecco come appare un'entità:

```yaml
---
type: product
tags: [platform, ai, agents]
---
# Project Alpha

Internal AI assistant. Started as a CLI tool,
expanding to web and desktop surfaces.

Related: [[Platform Team]], [[Desktop App]], [[MCP]]
```

Semplice, ma la potenza sta nell'effetto rete. Ogni wikilink è una connessione bidirezionale. Quando creo una nota di riunione che menziona `[[Project Alpha]]`, questa appare automaticamente nei backlink di Project Alpha. Quando un task fa riferimento a `[[Platform Team]]`, è scopribile dalla pagina dell'entità del team. Il grafo si costruisce da solo.

Ho creato la skill `/entities` per automatizzare l'estrazione. Scansiona il contenuto del vault - `CLAUDE.md` (liste del team), `roadmap.md` (epic, assegnatari), trascrizioni delle riunioni (persone menzionate), task (riferimenti a entità) - e crea file di entità strutturati per tutto ciò che trova.

La prima estrazione ha prodotto **39 entità** distribuite in sei sottocartelle:

```
entities/
  _index.md              # Master index
  people/                # 20 people
  products/              # 10 products
  projects/              # 2 active projects
  teams/                 # 1 team
  initiatives/           # 2 strategic initiatives
  concepts/              # 3 technical concepts
```

Quando ho aperto la vista a grafo di Obsidian, le connessioni sono apparse immediatamente - chi lavora su quale prodotto, quali iniziative attraversano quali team, quali concetti sono alla base di quali progetti. Informazioni che erano sempre implicite nei miei documenti, ora esplicite e navigabili.

Ogni nuovo documento che entra nel vault e usa wikilinks si unisce a questa rete automaticamente. Il grafo diventa più denso e più utile nel tempo senza alcuno sforzo di manutenzione.

## Gestione dei Task e Kanban

Nel capitolo uno, avevo segnalato una lacuna: "Non tutto è un epic della roadmap. Ho dei todo personali... Questi non appartengono alle issue di GitHub." Tre capitoli dopo, l'ho finalmente colmata.

Il sistema prevede un file per task, con frontmatter strutturato:

```yaml
---
status: todo
priority: high
source: slack
due: 2026-03-20
entities: ["[[Project Alpha]]", "[[Sarah Chen]]"]
---
# Review launch plan feedback

## Description
Review and address Sarah's feedback on the Project Alpha launch plan.

## Output
Updated launch plan with resolved comments.

## Context
From 1:1 with [[Sarah Chen]] on 2026-03-17.
```

Ogni file task ha uno stato, una priorità, una fonte (da dove viene l'azione da compiere), una data di scadenza e le entità collegate. Il formato include com'è fatto il "completato" e da dove ha avuto origine il task - abbastanza struttura per essere utile, non così tanta da rendere la creazione di un task un peso.

Per la visualizzazione, ho installato il plugin community Kanban di Obsidian tramite la CLI:

```bash
obsidian plugin:install id=obsidian-kanban enable
```

Quattro colonne: **Todo**, **Doing**, **Done**, **Dropped**. Le card sono wikilinks ai file dei task, quindi cliccando su una card si apre il dettaglio completo. La kanban board è diventata la dashboard quotidiana che non avevo mai avuto - una vista unica di tutto ciò che devo fare, proveniente da ogni posto in cui lavoro.

## Granola: Trascrizioni delle Riunioni

L'ultima fonte di input erano le riunioni. Ho installato Granola - uno strumento di trascrizione delle riunioni - e il plugin granola-to-obsidian. La pipeline è semplice: Granola registra e trascrive le riunioni, il plugin esporta automaticamente le trascrizioni nella cartella `meetings/` del vault.

Ora ogni riunione è ricercabile. Claude può leggere le trascrizioni, estrarre azioni da compiere, trovare chi ha detto cosa e incrociare le discussioni con le entità esistenti. Una conversazione su un lancio di prodotto in un 1:1 si collega naturalmente all'entità del prodotto e all'entità della persona. La trascrizione diventa parte del knowledge graph nel momento in cui atterra nel vault.

La pipeline reale è questa: **trascrizioni > entità > task > kanban**. La riunione avviene, la trascrizione appare nel vault, i riferimenti alle entità la connettono al grafo, le azioni da compiere vengono estratte in file task, i file task appaiono sulla kanban board. Ogni passaggio è automatizzato o a un solo comando di distanza.

## Eseguire /pm-task per Davvero

Qui tutto si è unito.

La skill `/pm-task` scansiona quattro fonti alla ricerca di azioni da compiere: Slack, Email, Calendar e note delle riunioni Granola. Legge l'attività recente, identifica qualsiasi cosa assomigli a un task o un impegno, presenta i candidati per la revisione e crea file task più card kanban alla conferma.

L'ho eseguita su un giorno normale di attività - messaggi Slack recenti, email non lette, il calendario di oggi e un paio di trascrizioni Granola. Ha estratto **8 task** e li ha aggiunti alla kanban board. Ognuno aveva i link alle entità corretti, il contesto della fonte e la priorità giusta. Ha correttamente ignorato il rumore - messaggi FYI, thread risolti, email di marketing, inviti informativi del calendario. Segnale in ingresso, rumore fuori.

Quattro fonti di input convogliate attraverso una singola skill in file task strutturati con link alle entità e visualizzazione kanban. Il tipo di estrazione di task cross-source che richiederebbe trenta minuti di scansione manuale è avvenuto in circa venti secondi.

## Cosa È Cambiato

La tabella delle integrazioni ora appare così:

| Strumento | Metodo | Cosa Fa |
|-----------|--------|---------|
| GitHub | `gh` CLI | Issue, epic, gestione progetti |
| Notion | MCP | Spec di prodotto e documentazione |
| Snowflake | `snow` CLI | Query sul data warehouse |
| Google Workspace | `gws` CLI | Calendar, Docs, Sheets, Gmail |
| Slack | MCP Plugin | Cercare, leggere e inviare messaggi |
| **Obsidian** | **Filesystem + CLI** | **Knowledge graph, task, entità, vault** |
| **Granola** | **Plugin Obsidian** | **Trascrizioni delle riunioni** |

Sette integrazioni ormai. Ma questo capitolo non riguardava davvero l'aggiunta di altre due righe alla tabella.

Cosa è cambiato davvero: un percorso del vault in `CLAUDE.md`. Due nuove skill - `/pm-task` e `/entities`. Trentanove entità estratte e connesse. Otto task estratti da quattro fonti diverse. Una kanban board che prima non esisteva. E sotto tutto questo, un knowledge graph che diventa più denso ogni volta che Claude tocca il vault.

## Cosa Viene Dopo

Obsidian ha recentemente rilasciato Bases - viste database strutturate che interrogano le note usando le proprietà del frontmatter. Questo potrebbe trasformare il sistema di entità in qualcosa di più simile a un vero database relazionale. Voglio anche instradare i file di memoria di Claude Code nel vault, così la sua memoria persistente e il knowledge graph si fondono in un unico sistema. E il primo elemento sulla kanban board: costruire il prototipo di roadmap AI-native.

Ma la tesi di questo capitolo non riguarda cosa viene dopo. È che la lacuna non erano mai più input - era costruire il livello che fa accumulare tutti gli input. I capitoli da uno a tre hanno connesso Claude Code al mondo. Questo capitolo gli ha dato un posto dove ricordare ciò che ha trovato.

Accesso più memoria. Questo è il vero effetto composto.
