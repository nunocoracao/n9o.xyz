---
title: "30 Days of Vibe Coding - Giorno 9 - TaskTUI"
description: "Una kanban board personale nel terminale con navigazione stile vim e un server MCP per l'integrazione con Claude Code, costruita con Go e Bubble Tea."
summary: "Una kanban board personale nel terminale con navigazione stile vim e un server MCP per l'integrazione con Claude Code, costruita con Go e Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-09", "go", "tui", "terminal", "kanban", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 9
seriesOpened: false
date: 2026-04-14
draft: false
---

Giorno 9. Volevo una board delle attività che vive nel terminale e che Claude possa anche leggere e modificare.

## Il Prompt

> "Costruisci una kanban board nel terminale in Go con un server MCP così Claude può gestire le attività."

Questo era il punto di partenza. [Watchfire](https://watchfire.io) lo ha espanso in 13 task che coprono l'intero ambito: board a tre colonne con navigazione vim, interfaccia Bubble Tea, persistenza JSON, un file watcher per il refresh automatico, una modalità server MCP per l'integrazione IA, comandi CLI per la gestione rapida delle attività, e GoReleaser per la distribuzione.

## Come è stato costruito

I 13 task lo hanno portato dal nulla a una release completamente pacchettizzata. I primi nove task hanno costruito il cuore della kanban board: il modello della board, il rendering delle card, il drag-and-drop tra colonne, e tutto lo styling Lip Gloss per renderlo bello nel terminale. Il task 9 ha aggiunto la modalità server MCP. Il task 10 ha portato il monitoraggio dei file in tempo reale. Gli ultimi tre hanno gestito i comandi CLI, la configurazione GoReleaser per i binari multi-piattaforma, e il README.

L'architettura si divide in modo pulito in package: `task` per il modello di dominio, `storage` per la persistenza JSON, `watcher` per il monitoraggio del filesystem, `mcp` per il server MCP, e `cli` per tutti i comandi Cobra. Il punto di ingresso smista tra tre modalità a seconda di come lo invochi: modalità TUI (default), modalità CLI (con sottocomandi come `add` o `list`), e modalità server MCP (con `tasktui mcp`).

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![TaskTUI kanban board with three columns](images/screenshot-01.png)

**La kanban board è fantastica nel terminale.** Tre colonne con intestazioni colorate: rosso/rosa per Todo, arancione/giallo per Doing, verde per Done. Ogni card mostra il titolo e la descrizione dell'attività. La card selezionata ha un bordo evidenziato. Si naviga con `h/l` per cambiare colonna e `j/k` per spostarsi tra le attività dentro una colonna.

![Adding a new task with the popup dialog](images/screenshot-02.png)

**Creazione di attività in linea.** Premi `n` e appare una finestra modale dove inserisci il titolo e la descrizione dell'attività. Finisce direttamente nella colonna Todo. Premi `e` per modificare un'attività esistente nello stesso modo.

![Creating a new task with title and description fields](images/screenshot-03.png)

**La finestra di input ha una navigazione dei campi corretta.** Tab per passare tra titolo e descrizione, Invio per confermare. Non dà fastidio e funziona esattamente come ci si aspetta.

![Board with tasks moved across columns](images/screenshot-04.png)

**Spostare le attività tra colonne è istantaneo.** Premi Invio o Spazio per far avanzare un'attività (Todo verso Doing verso Done), o Backspace per spostarla indietro. Puoi anche usare Shift+H e Shift+L per spostare le attività esplicitamente a sinistra e a destra. La board supporta anche undo/redo completo.

**I comandi CLI sono comodi per catture rapide.** `tasktui add "Fix that bug"` inserisce un'attività in Todo senza aprire il TUI. `tasktui list --state doing` mostra cosa è in corso. `tasktui done 3` segna l'attività 3 come completata. Tutto dalla shell.

**Il server MCP è la parte interessante.** Esegui `tasktui mcp` e avvia un server Model Context Protocol che espone quattro strumenti: `list_tasks`, `add_task`, `move_task` e `delete_task`. Aggiungilo alla tua configurazione `~/.claude/mcp.json` e Claude Code può gestire le tue attività direttamente. Il file watcher fa sì che se hai il TUI aperto contemporaneamente, si aggiorna automaticamente quando Claude fa un cambiamento. Puoi letteralmente vedere le attività apparire sulla tua board mentre Claude le aggiunge.

## I Bug Report

Il file watcher occasionalmente scatta due volte durante i salvataggi, il che causa un breve sfarfallio visivo quando la board si ricarica due volte in rapida successione. Niente di grave ma si nota. La modalità server MCP in sé ha funzionato al primo tentativo, cosa che onestamente mi ha sorpreso considerando quanto possano essere capricciose le implementazioni di protocolli.

## I Numeri

- **13 task Watchfire** dall'inizio alla release pacchettizzata
- **6 comandi CLI** (root, tui, add, list, done, mcp)
- **4 strumenti MCP** (list_tasks, add_task, move_task, delete_task)
- **Stack Go + Bubble Tea + Lip Gloss + Cobra**
- **GoReleaser** per build di binari multi-piattaforma
- **Tempo pratico totale:** circa 25 minuti di test e iterazione sui prompt

## Provalo

{{< github repo="nunocoracao/Vibe30-day09-tasktui" showThumbnail=true >}}

Installalo con:

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day09-tasktui/main/install.sh | sh
```

O compila dal sorgente:

```bash
git clone https://github.com/nunocoracao/Vibe30-day09-tasktui.git
cd Vibe30-day09-tasktui
go build -o tasktui ./cmd/tasktui
```

Per configurare l'integrazione MCP con Claude Code, aggiungi questo a `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "tasktui": {
      "command": "tasktui",
      "args": ["mcp"]
    }
  }
}
```

## Verdetto del Giorno 9

Questo approfondisce lo stack Go + Bubble Tea ma aggiunge qualcosa di nuovo: l'integrazione IA tramite MCP.

La kanban board in sé è solida. Fa esattamente quello che un gestore di attività personale dovrebbe fare e niente di più. Ma è la modalità server MCP che rende questo progetto interessante. Avere Claude Code che gestisce la mia board delle attività mentre lavoro, che aggiunge attività che scopre nei commenti del codice, che segna le cose come fatte dopo averle sistemate, questo è un workflow di cui non sapevo di aver bisogno.

Il file watcher lega tutto insieme. Il TUI resta aperto in un pannello del terminale, Claude lavora in un altro, e la board si aggiorna in tempo reale. Sembra pair programming con una board delle attività condivisa tra te e l'IA.

Nove giorni e i progetti iniziano a connettersi. GitDash per la consapevolezza dei repo, TaskTUI per la gestione delle attività, entrambi nel terminale dove lavoro davvero. Gli strumenti iniziano a parlarsi tra loro.

---

*Questo è il giorno 9 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando coding assistito dall'IA.*
