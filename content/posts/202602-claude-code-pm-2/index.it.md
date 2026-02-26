---
title: "Fare il PM con Claude Code: Capitolo 2 - Dati"
summary: "Come l'aggiunta della Snowflake CLI a Claude Code lo ha trasformato in un analista dati per PM - eseguendo query SQL, confrontando la retention tra versioni di prodotto e dando senso a dati complessi in tempi rapidi."
description: "Come l'aggiunta della Snowflake CLI a Claude Code lo ha trasformato in un analista dati per PM - eseguendo query SQL, confrontando la retention tra versioni di prodotto e dando senso a dati complessi in tempi rapidi."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Snowflake", "data analysis"]
series: ["PMing with Claude Code"]
series_order: 2
date: 2026-02-26
draft: false
---

Nel primo capitolo ho raccontato come ho configurato Claude Code come centro di comando per il PM - issue su GitHub, documenti su Notion, file strategici locali, tutto collegato attraverso un unico terminale. La lacuna piu grande che avevo segnalato? I dati. Esportavo manualmente CSV da Looker o Sigma e li trascinavo in una cartella. Funzionava, ma creava attrito. Ora quella lacuna e colmata.

## Il Pezzo Mancante: Accesso SQL

Il problema non e mai stato che Claude non sapesse analizzare i dati. Dategli un CSV e trovera pattern, riassumera trend, abbozzera osservazioni. Il problema era far arrivare i dati a Claude. Ogni volta che avevo bisogno di numeri aggiornati, dovevo aprire un browser, navigare fino a una dashboard, esportare un file, spostarlo nel workspace. Prima che Claude avesse i dati, avevo gia speso cinque minuti per qualcosa che dovrebbe richiederne cinque secondi.

La soluzione era ovvia col senno di poi: dare a Claude accesso diretto al data warehouse. Le nostre analytics risiedono in Snowflake, e Snowflake ha una CLI. (Grazie Abhi per questo!)

## Configurare la Snowflake CLI

La [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index) (`snow`) e uno strumento a riga di comando per interagire con Snowflake. La installi, configuri una connessione e puoi eseguire query SQL direttamente dal terminale. Il che significa che anche Claude puo farlo.

La configurazione della connessione si trova in `~/.snowflake/connections.toml`:

```toml
[my_org]
account = "your-account"
user = "your-user"
authenticator = "externalbrowser"
role = "ROLE_READONLY"
warehouse = "your-warehouse"
```

Alcune cose da notare. L'autenticatore `externalbrowser` significa che l'autenticazione passa attraverso il SSO aziendale. Ti autentichi una volta nel browser e la sessione persiste. Niente API key o password nei file di configurazione. E il ruolo e in sola lettura. Claude puo interrogare i dati ma non puo modificare nulla. Stessa filosofia dei permessi GitHub del primo capitolo: dare allo strumento esattamente l'accesso di cui ha bisogno, niente di piu.

Una volta configurata la connessione, eseguire una query richiede un solo comando:

```bash
snow sql -c my_org -q "SELECT COUNT(*) FROM my_table" --format json
```

Poi ho chiesto a Claude di esplorare e documentare in `CLAUDE.md` alcune delle tabelle, degli schemi e dei pattern di query piu comuni. Una volta fatto, ho discusso alcuni dettagli su certi valori calcolati in modo che li tenesse in considerazione nelle query SQL. Claude ha finito per documentare qualcosa del genere:

```markdown
## Snowflake Access
- CLI: `snow sql -c my_org -q "..." --format json`
- Role: read-only
- Key tables:
  - `MARTY.ENTITIES.L3_DIM_MOBIULE>__USER` - User dimension
  - `PREP.AI_SERVICE.L1_AI_TRACE` - API event traces
- The ATTRIBUTES column is a JSON variant with: username,
  planName, model, origin, gordonTag, token counts, cost, etc.
```

E lo stesso pattern del primo capitolo. `CLAUDE.md` fornisce a Claude il contesto necessario per scrivere query corrette senza che io debba spiegare lo schema ogni volta. E non serve scriverlo a mano, basta chiedere a Claude di catturare le informazioni che vuoi.

## L'Analisi della Retention

Qui le cose si sono fatte interessanti. Dovevo capire la retention della prima settimana per il nostro assistente AI attraverso cinque diverse versioni di prodotto. Ogni versione era stata rilasciata con funzionalita diverse, UX diverse, flussi di onboarding diversi. La domanda era semplice: quale versione tratteneva meglio gli utenti nei primi sette giorni?

Con il vecchio workflow, questo avrebbe richiesto giorni di lavoro e dipendenze con altri team. Aprire Snowflake, capire quali tag di versione corrispondono a quali release, scrivere la query di coorte, eseguirla, esportarla, fissare un foglio di calcolo, cercare di individuare il pattern. Oppure chiedere a un data analyst e aspettare che si liberasse dalla coda.

Con Claude, ho descritto cio di cui avevo bisogno in linguaggio naturale:

> "Confronta la retention della settimana 1 per Gordon nelle ultime 5 versioni principali."

Claude conosceva gia lo schema grazie a `CLAUDE.md`. Sapeva che `gordonTag` identifica la versione del prodotto, che `EVENT_TIMESTAMP` traccia quando si verificano gli eventi, e sapeva come identificare gli utenti. Ha scritto il SQL, lo ha eseguito tramite la Snowflake CLI, ha ottenuto i risultati e li ha formattati in una tabella comparativa.

E in meno di 5 minuti avevo i miei risultati...

## In Cosa e Bravo (e in Cosa No)

Voglio essere chiaro su cosa sostituisce e cosa no.

**Non costruisce dashboard.** Se hai bisogno di una visualizzazione persistente e condivisibile che si aggiorna quotidianamente, ti serve ancora Looker o Sigma o qualsiasi strumento usi il tuo team. Claude risponde a domande. Non crea infrastruttura di monitoraggio.

**Non sostituisce il tuo team dati.** Modellazione dati complessa, lavoro sulle pipeline, ottimizzazione del warehouse - quello e lavoro di ingegneria. Claude esegue query ad-hoc su tabelle esistenti, non costruisce nuovi modelli di dati.

**Quello che fa e comprimere il tempo tra domanda e risposta.** Il workflow del PM ha sempre avuto questo collo di bottiglia: pensi a una domanda, capisci dove risiedono i dati, scrivi o richiedi una query, aspetti i risultati, li interpreti, pensi a una domanda di follow-up, e il ciclo ricomincia. Ogni ciclo puo richiedere minuti o giorni a seconda che tu possa fare self-service o meno.

Con Claude + Snowflake CLI, il ciclo e conversazionale. Domanda, query, risultato, follow-up - tutto nella stessa sessione del terminale, tutto in pochi secondi. La velocita cambia il modo in cui lavori. Fai piu domande. Esplori piu ipotesi. Noti cose che ti saresti perso perche il costo di verificare e cosi basso.

## L'Effetto Composto

Il vero potere non sta in una singola integrazione. Sta nella combinazione. In una sola conversazione, Claude puo:

1. Recuperare le ultime issue da GitHub per vedere cosa e stato rilasciato in ogni versione
2. Interrogare Snowflake per ottenere i dati di retention per quelle versioni
3. Cercare su Notion le decisioni di prodotto dietro ogni release
4. Incrociare tutto e redigere un riepilogo

Quattro strumenti, quattro fonti dati diverse, sintetizzate in una conversazione. Il contesto si mantiene. Quando Claude scopre che la versione X ha avuto un calo di retention, puo immediatamente controllare le issue su GitHub per vedere cosa e cambiato in quella release, poi consultare il documento su Notion per capire il ragionamento. Niente cambio di tab, niente copia di dati tra strumenti.

E questo che intendevo nel primo capitolo quando parlavo di Claude come hub di workflow, non solo come assistente AI. Ogni nuova integrazione moltiplica il valore di tutte quelle esistenti.

## Setup Aggiornato

Per riferimento, ecco come appare il workspace ora:

```
pm-workspace/
├── CLAUDE.md                # Convenzioni di workflow, template, schemi Snowflake
├── .claude/
│   └── settings.local.json  # Permessi: gh, snow sql, server MCP
├── docs/                    # Documenti strategici, analisi, specifiche
├── data_reports/            # Dati esportati (ancora utile per dataset grandi)
└── roadmap.md               # Documento roadmap in evoluzione
```

E i permessi sono cresciuti:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)",
      "Bash(snow sql*)"
    ]
  }
}
```

Una riga in piu. Questo e tutto cio che e servito per passare da "esportare CSV manualmente" a "chiedere a Claude di interrogare il warehouse direttamente."

## Prossimi Passi

La cartella `data_reports/` non e obsoleta. Per dataset grandi o visualizzazioni complesse, l'esportazione ha ancora senso. Ma per le domande quotidiane da PM - "come sta andando la retention?", "qual e la distribuzione di utilizzo per piano?", "quanti utenti hanno usato questa funzionalita la settimana scorsa?" - non apro piu un browser.

Le lacune rimaste dal primo capitolo si stanno riducendo. Notion e collegato via MCP. GitHub e collegato via CLI. Snowflake e collegato via CLI. Quelli ancora mancanti: Google Docs (nessun MCP ancora), Slack (l'MCP esiste ma non l'ho ancora configurato) e integrazioni con il calendario. Ognuno che aggiungo rende l'intero sistema piu utile.

Se sei un PM con accesso CLI a un data warehouse, questa e la cosa a piu alto impatto che puoi aggiungere al tuo setup di Claude Code. Le query che Claude scrive non sono sempre perfette al primo tentativo. Ma il ciclo di iterazione e cosi veloce che non importa. Tre query imperfette in trenta secondi battono una query perfetta che richiede un'ora per essere scritta.

Il punto non e la perfezione. E la velocita con cui si arriva all'insight.
