---
title: "Fare il PM con Claude Code"
summary: "Come ho configurato Claude Code come centro di comando per il PM - collegando GitHub issues, documenti Notion e assistenza AI in un unico workflow."
description: "Come ho configurato Claude Code come centro di comando per il PM - collegando GitHub issues, documenti Notion e assistenza AI in un unico workflow."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow"]
date: 2026-01-28
draft: false
---

La maggior parte degli strumenti AI è pensata per gli sviluppatori. Copilot che completano automaticamente il codice, agenti che scrivono test, assistenti che debuggano errori. Ma il lavoro del PM - tracciare roadmap, scrivere specifiche, interrogare issue, sintetizzare note di riunione - è altrettanto maturo per l'assistenza AI. La sfida è che il lavoro del PM si estende su così tanti strumenti: GitHub per le issue, Notion per i documenti, fogli di calcolo per la prioritizzazione, Slack per il contesto. Nessun singolo strumento AI li collega tutti.

Fino a quando non ho iniziato a fare il mio lavoro da PM in Claude Code.

## Perché Claude Code per il PM?

Claude Code è l'assistente AI per la programmazione basato su CLI di Anthropic. Gira nel terminale, il che potrebbe sembrare una scelta strana per un PM... Ma sentite questa. Primo, vive dove passo una parte rilevante del mio tempo. Sono costantemente nel terminale - eseguendo comandi git, controllando deployment, guardando i log quando faccio debug con gli ingegneri. Avere Claude disponibile nello stesso contesto significa che non cambio contesto tra strumenti per alcuni di questi casi d'uso.

Secondo, il sistema [MCP (Model Context Protocol)](https://modelcontextprotocol.io) permette a Claude Code di connettersi a strumenti esterni. GitHub, Notion, Linear, Slack - se esiste un server MCP per quello strumento, Claude Code può interrogarlo. Questo trasforma un semplice assistente AI in un vero e proprio hub di workflow.

Terzo, se non esiste un server MCP, posso comunque usare comandi shell per connettermi a qualsiasi strumento con una CLI. La GitHub CLI (`gh`) è perfetta per il lavoro del PM. Claude può eseguire comandi `gh` per elencare issue, visualizzare dettagli, creare nuovi elementi e altro. Questo mi dà accesso in lettura e scrittura alle mie GitHub issue direttamente da Claude.

Quarto, il file `CLAUDE.md` dà a Claude un contesto persistente su come lavoro. Le mie convenzioni, i miei template, le mie preferenze. Ogni conversazione inizia con Claude che già conosce il mio workflow.

E infine, il sistema di permessi mantiene tutto al sicuro. Controllo esattamente quali comandi Claude può eseguire, quali API può chiamare. Nessuna sorpresa.

## La Configurazione

Il mio spazio di lavoro PM è una semplice struttura di repository:

```
pm-workspace/
├── CLAUDE.md                # Convenzioni di workflow e template
├── .claude/
│   └── settings.local.json  # Permessi e configurazione MCP
├── docs/                    # Documenti strategici, analisi, specifiche
├── data_reports/            # Dati analytics esportati manualmente
└── roadmap.md               # Documento roadmap aggiornato
```

La filosofia è documentation-first, con GitHub come fonte di verità per l'esecuzione - è quello che il mio team usa per tracciare il lavoro, non sarebbe molto diverso per Jira, Notion, Linear, ecc. Il repository contiene i miei documenti di lavoro - documenti strategici, write-up di analisi, qualsiasi cosa voglia che Claude abbia come contesto. GitHub contiene le issue effettive e il tracciamento del progetto. Notion ha la knowledge base in formato più esteso. E quando ho bisogno di contesto analitico, i dati esportati vivono in `data_reports/`.

Il file `CLAUDE.md` è dove avviene la magia. Contiene le mie convenzioni:

```markdown
# PM Workflow

## Fonte di Verità
- **GitHub:** Tutte le epic e issue vivono nel repo principale
- **Notion:** PRD, note di riunione, log delle decisioni
- **Documenti locali:** Documenti strategici in `/docs/`
- **Dati:** Analytics esportati in `/data_reports/`

## Convenzioni
- Le epic usano il tipo di issue `Epic`
- Gli stream sono tracciati tramite label
- Gli obiettivi trimestrali taggati con `Q1-2026`, `Q2-2026`, ecc.

## Comandi Utili
- Elencare epic aperte: `gh api graphql -f query='...'` (query completa sotto)
- Visualizzare dettagli epic: `gh issue view <number>`
- Sincronizzare roadmap: Recuperare lo stato più recente delle epic e aggiornare roadmap.md

## Template
Quando si creano elementi della roadmap, usare questa struttura:
- Problema: Quale problema utente stiamo risolvendo?
- Soluzione: Approccio ad alto livello
- Metriche di successo: Come sappiamo se ha funzionato?
- Dipendenze: Cosa blocca questo?

## Indice della Documentazione
| File | Descrizione |
|------|-------------|
| `docs/strategy.md` | Strategia e visione del prodotto |
| `docs/analysis.md` | Ricerca e analisi dei dati |
```

Questo file si carica automaticamente ogni volta che avvio Claude Code in questa directory. Claude sa già come nomino le cose, dove trovare le informazioni e che formato mi aspetto.

## Collegare gli Strumenti

### Integrazione GitHub CLI

La GitHub CLI (`gh`) è la spina dorsale della mia configurazione. Claude Code può eseguire comandi shell, quindi configuro i permessi per consentire operazioni GitHub specifiche:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)"
    ]
  }
}
```

Questo concede a Claude accesso in lettura e scrittura alle issue e ai progetti, ma nient'altro. Niente push di codice, niente gestione delle release, niente che tocchi qualcosa al di fuori del workflow del PM.

Con questa configurazione, posso chiedere a Claude cose come:

- "Mostrami tutte le epic aperte per Q1"
- "Qual è lo stato dell'epic sull'autenticazione?"
- "Crea una nuova issue per il redesign della dashboard"
- "Elenca tutte le issue che bloccano il rilascio mobile"
- "Ci sono commenti aperti dal team a cui devo rispondere?"

Claude traduce il mio linguaggio naturale nei comandi `gh` giusti, li esegue e riassume i risultati. Per query più complesse, può usare l'API GraphQL di GitHub:

```bash
gh api graphql -f query='
  query {
    repository(owner: "myorg", name: "myrepo") {
      projectV2(number: 1) {
        items(first: 50) {
          nodes {
            content { ... on Issue { title state } }
            fieldValues(first: 10) { nodes { ... on ProjectV2ItemFieldSingleSelectValue { name } } }
          }
        }
      }
    }
  }
'
```

Non devo ricordare questa sintassi. Chiedo semplicemente "cosa c'è nella board del progetto Q1?" e Claude capisce la query.

### Notion MCP

Per documenti in formato più esteso - PRD, note di riunione, log delle decisioni - uso Notion. Claude Code supporta i server MCP, che sono servizi esterni che estendono le sue capacità. Il server MCP di Notion dà a Claude accesso in lettura al mio workspace:

```json
{
  "mcpServers": {
    "notion": {
      "type": "url",
      "url": "https://mcp.notion.com/sse"
    }
  }
}
```

Con questo collegato, posso chiedere a Claude di cercare nel mio workspace Notion per contesto. "Cosa abbiamo deciso sul modello di pricing?" o "Trova il PRD per le notifiche utente" o "Riassumi le ultime tre sincronizzazioni di prodotto."

La potenza sta nella combinazione. Claude può interrogare GitHub per lo stato delle issue, poi fare un riferimento incrociato con i documenti Notion per il contesto, poi aiutarmi a scrivere un aggiornamento che fa riferimento a entrambi. Uno strumento, molteplici fonti.

## Il Workflow nella Pratica

Ecco come appare una giornata tipica:

**Preparazione mattutina.** Apro Claude Code e chiedo: "Quali issue sono state chiuse ieri? Sono stati segnalati nuovi bug?" Claude interroga GitHub, riassume l'attività e ho i miei punti per lo standup in trenta secondi.

**Sincronizzazione roadmap.** "Sincronizza la roadmap da GitHub - ottieni lo stato più recente di tutte le epic aperte." Claude esegue la query GraphQL dal mio `CLAUDE.md`, recupera lo stato attuale, gli assegnatari e le milestone, poi aggiorna `roadmap.md` con dati freschi. Il documento roadmap rimane sincronizzato con GitHub senza che io debba controllare manualmente ogni issue.

**Contesto strategico.** "Qual è il nostro approccio sul lavoro dell'infrastruttura della piattaforma?" Claude legge il documento strategico rilevante dalla mia cartella `docs/` e riassume i punti chiave. Quando ho bisogno di fare riferimento a una decisione o ricordarmi del ragionamento dietro una direzione, è istantaneo.

**Analisi dei dati.** Esporto un CSV - metriche di engagement degli utenti per l'ultimo trimestre - e lo metto in `data_reports/`. "Analizza i dati di engagement e riassumi i trend." Claude legge il file, identifica i pattern e redige le osservazioni. Non è fluido come un'integrazione diretta, ma funziona.

**Scrivere specifiche.** Parto da un'idea grezza: "Ho bisogno di un elemento roadmap per il nuovo flusso di onboarding." Claude conosce il mio template da `CLAUDE.md`, quindi fa le domande giuste - qual è il problema, chi ne è interessato, qual è lo scope - e redige un documento strutturato. Io modifico, rifinisco e quando è pronto, dico a Claude di creare l'epic su GitHub.

**Cercare contesto.** "Cosa abbiamo deciso sul rate limiting?" Claude cerca su Notion note di riunione e documenti delle decisioni, trova la discussione rilevante e riassume l'esito. Niente più scavare tra mesi di note.

**Fine settimana.** "Scrivi un riassunto di cosa abbiamo rilasciato questa settimana per l'aggiornamento agli stakeholder." Claude interroga le issue chiuse, le raggruppa per stream e redige un riassunto leggibile. Io rivedo, aggiusto il framing e invio.

I template in `CLAUDE.md` assicurano un output consistente. Quando chiedo un elemento roadmap, segue sempre la stessa struttura. Quando chiedo un riassunto settimanale, include sempre le stesse sezioni. Consistenza senza la noia.

## Cosa Manca Ancora

La configurazione non è completa. Alcune lacune che sto attivamente aggirando:

**Strumenti per i dati.** Vivo in Looker e Sigma per l'analytics - metriche di utilizzo, dati di funnel, analisi di coorte. Non c'è MCP per nessuno dei due. Quando ho bisogno che Claude mi aiuti ad analizzare dati o scrivere un riassunto che includa metriche, esporto manualmente i CSV in una cartella `data_reports/` nel mio workspace. Funziona, ma c'è attrito. Ogni volta che voglio dati freschi, sono di nuovo nel browser a cliccare pulsanti di esportazione.

**Google Docs.** Molto del lavoro cross-funzionale avviene in Google Docs - specifiche condivise, PRD collaborativi, commenti dagli stakeholder. Niente MCP neanche lì. Stesso workaround: esportare in markdown o PDF, mettere nel workspace. Claude può leggerlo, ma è uno snapshot, non una connessione live.

**Gestione delle attività.** Non tutto è un'epic della roadmap. Ho todo personali - "fare follow-up con il design sui mockup," "rivedere la proposta API," "preparare domande per la chiamata col cliente." Questi non appartengono alle GitHub issue. Sto ancora cercando di capire il modo giusto per tracciarli. Per ora vivono in un semplice file markdown, ma mi piacerebbe un'integrazione più stretta - magari un MCP per Linear o Todoist che Claude possa interrogare e aggiornare.

L'ecosistema MCP sta crescendo velocemente. Slack, Linear, integrazioni con il calendario stanno tutte emergendo. Ma per ora, il workflow di esportazione manuale è un ponte necessario per gli strumenti che non hanno ancora connessioni native.

## Cosa Sta Funzionando

I workflow di lettura sono dove Claude brilla. Interrogare issue, cercare documenti, riassumere stati - prima mi prendevano dieci minuti di click in giro, ora trenta secondi. I workflow di scrittura richiedono più giudizio umano. Claude può redigere una specifica, ma devo comunque pensare alla strategia.

La combinazione di GitHub + Notion + documenti locali copre la maggior parte del mio lavoro quotidiano. Quando ho bisogno di contesto analitico, l'esportazione manuale aggiunge un passaggio, ma una volta che i dati sono nel workspace, Claude li gestisce bene.

Il quadro più ampio è AI come co-pilota del PM, non come sostituto. Claude non prende decisioni di prodotto. Non parla con i clienti né negozia con gli stakeholder né sente l'intuizione che qualcosa non va. Ma gestisce le parti meccaniche del lavoro - l'interrogare, il formattare, il cercare, il redigere - così posso concentrarmi sulle parti che richiedono effettivamente giudizio umano.

Se sei un PM curioso degli strumenti AI, prova Claude Code. Configura un workspace semplice, collega GitHub, aggiungi le tue convenzioni a `CLAUDE.md` e vedi come si adatta al tuo workflow. Non si tratta di sostituire i tuoi strumenti esistenti. Si tratta di aggiungere uno strato di intelligenza che li collega insieme.

E se costruisci qualcosa di interessante, condividi la tua configurazione. Mi piacerebbe vedere come altri PM stanno usando questo strumento.
