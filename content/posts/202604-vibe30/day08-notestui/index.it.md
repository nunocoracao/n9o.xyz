---
title: "30 Days of Vibe Coding - Giorno 8 - NotesTUI"
description: "Un'app per prendere appunti in markdown nel terminale con ricerca full-text, categorie, temi e un server MCP per l'integrazione IA."
summary: "Un'app per prendere appunti in markdown nel terminale con ricerca full-text, categorie, temi e un server MCP per l'integrazione IA."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-08", "go", "tui", "terminal", "notes", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 8
seriesOpened: false
date: 2026-04-13
draft: false
#type: "hidden"
---

Giorno 8. Ieri ho costruito un TUI per i repo git. Oggi ne ho costruito uno per il mio cervello.

## Il Prompt

> "Costruisci un'app di note nel terminale in Go con supporto markdown e un server MCP."

Questo era il punto di partenza. Corto, vago, a malapena una specifica. L'ho dato in pasto a [Watchfire](https://watchfire.io) e l'ho lasciato espandere l'idea in una definizione di prodotto completa: editing integrato con Glamour per l'anteprima markdown, SQLite con FTS5 per la ricerca full-text, categorie, tag, temi di colori multipli, scorciatoie vim, modalità server MCP, GoReleaser, GitHub Actions CI, script di installazione. Tutto questo è venuto fuori da Watchfire che ha preso la mia riga singola e l'ha trasformata in 36 task.

## Come è stato costruito

I primi 30 task circa hanno costruito l'app di note principale: creare e modificare note nel terminale, rendering markdown con Glamour, ricerca full-text alimentata da SQLite FTS5, categorie, tag, temi multipli e scorciatoie stile vim. Il tutto salva i dati in `~/.notestui/` con un database SQLite e un file di configurazione YAML.

Poi l'ultimo gruppo di task ha gestito il lato distribuzione. Configurazione GoReleaser per build multi-piattaforma, GitHub Actions per la CI, uno script di installazione che rileva automaticamente il tuo OS e architettura, e uno script di disinstallazione per pulire tutto. Alla fine aveva un README fatto bene ed era pronto per essere distribuito come binario standalone.

La modalità server MCP era la parte interessante. Eseguire `notestui serve` avvia un server Model Context Protocol che espone le tue note agli strumenti IA. Elencare note, cercare, creare, aggiornare, eliminare, tutto tramite MCP. Questo significa che Claude Code o qualsiasi assistente IA compatibile con MCP può lavorare direttamente con le tue note.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![NotesTUI empty state with welcome screen](images/screenshot-01.png)

**Lo stato iniziale è accogliente.** La prima volta che lo avvii ottieni una schermata di benvenuto pulita che ti dice di premere `n` per creare la tua prima nota. La barra in basso mostra tutte le scorciatoie a colpo d'occhio.

![Creating a new note with title, tags, and content](images/screenshot-02.png)

**L'editor è integrato direttamente.** Premi `n` e ottieni campi per titolo, tag e contenuto. Tab si sposta tra i campi, Ctrl+S salva. Nessun editor esterno da lanciare, tutto resta dentro il TUI.

![Notes list with preview panel](images/screenshot-03.png)

**Layout a pannelli divisi.** Lista delle note a sinistra, anteprima a destra. I tag appaiono come badge colorati sotto il titolo. La barra di stato in alto dice "Your markdown notes, beautifully organized", un tocco carino che l'IA ha aggiunto da sola.

![Editing a longer note with markdown content](images/screenshot-04.png)

**L'editing markdown funziona per contenuti veri.** Ho incollato una nota più lunga e l'editor l'ha gestita senza problemi. L'area del contenuto scrolla, e quando salvi, il pannello di anteprima renderizza il markdown con Glamour.

![Full-text search results with preview](images/screenshot-05.png)

**La ricerca è veloce e utile.** Premi `/` per cercare e fa una ricerca full-text su tutte le tue note usando SQLite FTS5. I risultati appaiono nel pannello sinistro con l'anteprima della nota corrispondente a destra. La query di ricerca viene evidenziata nell'anteprima.

![MCP settings screen - not connected](images/screenshot-06.png)

**L'integrazione MCP ha la sua schermata di impostazioni.** Premi `m` per aprire le impostazioni MCP. Mostra lo stato della connessione, gli strumenti disponibili e le istruzioni di configurazione. Quando non è connesso, ti guida attraverso la configurazione.

![MCP settings screen - connected to Claude Code](images/screenshot-07.png)

**Una volta connesso, mostra lo stato.** La schermata delle impostazioni si aggiorna per mostrare che NotesTUI è configurato con Claude Code, con un pulsante per disconnettersi e un'opzione per aggiornare lo stato.

![Claude Code creating notes through MCP](images/screenshot-08.png)

**Qui la cosa diventa pazzesca.** Ho chiesto a Claude Code di "scrivermi delle note su tutti i personaggi Marvel, una per ciascuno." Ha iniziato a chiamare `notestui - create_note` tramite MCP, generando profili dettagliati dei personaggi e inserendoli direttamente nel mio database di note.

![Claude Code bulk-creating Marvel character notes](images/screenshot-09.png)

**Ha continuato senza fermarsi.** Claude ha creato note per Thor, Hulk, Black Widow, Hawkeye, Captain America, Iron Man, ognuna con poteri, abilità, fatti chiave e informazioni sugli attori. Tutto tramite chiamate di strumenti MCP da Claude Code verso NotesTUI.

![More Marvel notes being created via MCP](images/screenshot-10.png)

**Le note continuavano ad arrivare.** Si può vedere la lista delle note a sinistra che cresce man mano che Claude le crea. Ognuna riceve tag appropriati come "marvel", "avengers", "mcu". L'IA ha persino deciso di andare oltre i 6 Avengers originali e aggiungere Scarlet Witch, Vision e altri.

![Search results for "spiderman" across all notes](images/screenshot-11.png)

**16 note create, tutte ricercabili.** Dopo che l'IA ha finito, ho cercato "spiderman" e ho ottenuto il profilo completo del personaggio con nome reale, poteri, fatti chiave e apparizioni MCU. La vista a pannelli mostra l'anteprima markdown renderizzata a destra.

![Note detail view with markdown rendering](images/screenshot-12.png)

**Il rendering markdown è solido.** Glamour gestisce intestazioni, testo in grassetto, elenchi puntati e citazioni. L'anteprima della nota nel pannello destro è pulita e leggibile.

![Side-by-side NotesTUI and Claude Code](images/screenshot-13.png)

**Fianco a fianco con Claude Code.** NotesTUI a sinistra e Claude Code a destra. Mentre Claude crea note tramite MCP, appaiono nel TUI in tempo reale. La lista scorre verso il basso man mano che arrivano nuove note.

![Claude Code querying notes through MCP](images/screenshot-14.png)

**L'IA può anche leggere le tue note.** Ho chiesto a Claude "Qual è il nome di Spiderman in base alle mie note?" e ha chiamato `notestui - get_note` tramite MCP per cercare la risposta. Ha estratto i dati dalle mie note e ha risposto correttamente: Peter Benjamin Parker. L'IA può sia scrivere che leggere dal tuo database di note personali.

## I Numeri

- **36 task Watchfire** dal repo vuoto al binario distribuito
- **Go puro** senza dipendenze CGO (usa SQLite in Go puro)
- **6 strumenti MCP**: elencare, cercare, ottenere, creare, aggiornare, eliminare
- **Temi multipli** e scorciatoie vim
- **GoReleaser + GitHub Actions** per build automatizzate multi-piattaforma
- **Script di installazione e disinstallazione** inclusi
- **Tempo pratico totale:** circa 25 minuti di test, prompting e sperimentazione con l'integrazione MCP

## Provalo

{{< github repo="nunocoracao/Vibe30-day08-notestui" showThumbnail=true >}}

Installalo con un singolo comando:

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day08-notestui/main/scripts/install.sh | bash
```

O dal sorgente:

```bash
go install github.com/nunocoracao/Vibe30-day08-notestui@latest
```

Poi basta eseguire `notestui` per iniziare a prendere appunti, o `notestui serve` per avviare il server MCP.

## Verdetto del Giorno 8

L'app di note in sé è solida. TUI pulito, ricerca veloce, bel rendering markdown. Se non fossi già migrato su Obsidian, questo è il tipo di strumento che userei davvero ogni giorno. Ma è il server MCP che rende questo progetto diverso da qualsiasi altro nella challenge finora.

La demo dei personaggi Marvel è stata divertente, ma pensate a cosa permette realmente il server MCP. Non è solo un'app di note in cui un'IA può scaricare curiosità. È un archivio di conoscenze persistente in cui qualsiasi agente IA può leggere e scrivere. Potreste usarlo per alimentare la memoria di un agente. Dategli note di riunioni, contesto di progetto, risultati di ricerca, e poi qualsiasi assistente compatibile MCP può interrogare quella conoscenza su richiesta. Il confine tra "app di note" e "base di conoscenza per agenti" si rivela essere un server MCP.

Guardare le note apparire in tempo reale nel TUI mentre Claude scriveva in un altro terminale è stato uno di quei momenti in cui tutto il concetto del vibe coding ha senso. Costruisci uno strumento, gli dai un'interfaccia IA, e improvvisamente può fare cose che non avevi pensato di chiedere.

36 task Watchfire. La complessità extra è venuta dal server MCP, dagli script di distribuzione e dalla pipeline CI. Ma il risultato è un vero strumento Go che si installa con un singolo comando curl e funziona con gli assistenti IA fin da subito.

---

*Questo è il giorno 8 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando coding assistito dall'IA.*
