---
title: "30 Days of Vibe Coding - Giorno 28 - ideA"
description: "Un editor di codice nativo per desktop costruito con Wails, Go, React e Monaco Editor."
summary: "Un editor di codice nativo per desktop costruito con Wails, Go, React e Monaco Editor."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-28", "go", "wails", "react", "monaco", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 28
seriesOpened: false
date: 2026-05-03
draft: false
#type: "hidden"
---

Giorno 28. Mancano tre giorni. Ieri era un emulatore di terminale. Oggi? Un editor di codice.

Non un'app web. Non qualcosa che gira in una scheda del browser. Un'applicazione desktop nativa che installi sulla tua macchina. Il tipo di progetto che richiede anni a interi team.

## Il Prompt

{{< alert icon="fire">}}
Scaricalo dall'[ultima release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest)
{{< /alert >}}

> "Costruisci un editor di codice nativo per desktop usando Wails v2 con backend Go e frontend React con Monaco Editor. Albero dei file nella sidebar, tab, evidenziazione della sintassi. Build multi-piattaforma per macOS, Linux e Windows."

## Come è stato costruito

Questo è stato un bestione. [Watchfire](https://watchfire.io) ha suddiviso il lavoro in 43 task, che è di gran lunga il numero più alto di task per qualsiasi progetto in questa challenge. E molti di quelli erano fix di CI, perché costruire app desktop native per tre piattaforme si rivela essere... non proprio banale.

Lo stack è Wails v2 per il wrapper nativo, Go per le operazioni backend sul file system, React per l'interfaccia, e Monaco Editor (lo stesso motore di editing che alimenta VS Code) per l'editing vero e proprio del codice. Il backend Go gestisce tutte le operazioni di I/O sui file, lettura delle directory, apertura dei file, salvataggio delle modifiche, e le espone come funzioni che il frontend React può chiamare attraverso i binding di Wails.

La pipeline CI è dove è venuto fuori il vero dolore. Le dipendenze WebKit su Linux, i build tag che dovevano essere perfetti, la generazione dei binding Wails, il packaging multi-piattaforma. Ho perso il conto di quanti commit "fix CI" ci sono stati. Il log git ne è pieno. Ma questa è la realtà quando distribuisci app native. Il codice può funzionare perfettamente sulla tua macchina e comunque fallire in modo spettacolare in un runner GitHub Actions.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![Schermata di benvenuto](images/screenshot-01.png)

**Una vera schermata di benvenuto.** Azioni rapide per aprire cartelle e file, lista dei progetti recenti, e un riferimento per le scorciatoie da tastiera. Sembra una vera pagina di benvenuto di un IDE.

![Albero dei file con progetto aperto](images/screenshot-02.png)

**Un albero dei file che funziona.** Apri una cartella e ottieni un albero completo delle directory nella sidebar con espandi/comprimi, icone dei file, tutto quanto. C'è una minimap in basso che mostra una vista d'insieme della struttura dei file.

![Editing del codice con evidenziazione della sintassi](images/screenshot-03.png)

**Monaco Editor nel suo elemento.** Evidenziazione della sintassi completa, numeri di riga, la minimap sul lato destro. È la stessa esperienza di editing di VS Code perché è letteralmente lo stesso componente editor. JavaScript, Go, TypeScript, JSON, qualsiasi cosa apri ha l'evidenziazione corretta.

![Palette dei comandi](images/screenshot-04.png)

**Una palette dei comandi.** Quell'overlay di ricerca fuzzy che ogni editor moderno ha. Cerca comandi, salta tra i file. Funziona.

![Terminale integrato](images/screenshot-05.png)

**Un terminale integrato.** C'è un pannello terminale in basso nell'editor. Lancia i tuoi build, controlla lo stato git, tutto quello di cui hai bisogno senza uscire dall'app.

![Ricerca file](images/screenshot-07.png)

**Ricerca file con corrispondenza fuzzy.** Un overlay di apertura rapida per navigare tra i file del tuo progetto. Digita qualche carattere e filtra al volo.

## La Guerra del CI

Questa merita una sezione dedicata perché ha dominato il build. Far compilare e pacchettizzare Wails correttamente su GitHub Actions per macOS, Linux e Windows contemporaneamente è stata una battaglia su più commit. Alcuni momenti salienti:

- Le dipendenze WebKit su Linux richiedevano pacchetti specifici (`libgtk-3-dev`, `libwebkit2gtk-4.0-dev`)
- I build tag dovevano essere impostati correttamente per ogni piattaforma
- La generazione dei binding Wails doveva avvenire prima del build
- Il workflow di release doveva produrre bundle `.app` per macOS, tarball per Linux, e `.exe` per Windows
- Molteplici round di correzioni, test, e ancora correzioni

Il risultato finale è un workflow GitHub Actions che fa build e release per tutte e tre le piattaforme automaticamente quando fai push di un tag. Funziona. Ci è solo voluto un po' per arrivarci.

## Installalo

Questa è un'app nativa, quindi niente link Vercel stavolta. La installi sulla tua macchina.

**Installazione rapida (macOS e Linux):**

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day28-idea/main/install.sh | bash
```

Oppure scarica un binario dalla [pagina delle release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest):

| Piattaforma | Architettura | Download |
|----------|-------------|----------|
| macOS | Intel (x86_64) | [VibEdit-macos-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-amd64.zip) |
| macOS | Apple Silicon (arm64) | [VibEdit-macos-arm64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-arm64.zip) |
| Linux | x86_64 | [VibEdit-linux-amd64.tar.gz](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-linux-amd64.tar.gz) |
| Windows | x86_64 | [VibEdit-windows-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-windows-amd64.zip) |

**Build dai sorgenti** se vuoi (richiede Go 1.23+, Node.js 20+, Wails CLI v2):

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
git clone https://github.com/nunocoracao/Vibe30-day28-idea.git
cd Vibe30-day28-idea
cd frontend && npm install && cd ..
wails build
```

## Provalo

{{< github repo="nunocoracao/Vibe30-day28-idea" showThumbnail=true >}}

## I Numeri

- **43 task Watchfire** dalla configurazione alle ultime correzioni CI
- **3 piattaforme target** (macOS, Linux, Windows)
- **Wails v2 + Go** backend con React + Monaco Editor frontend
- **GitHub Actions** workflow di release per build multi-piattaforma automatizzati

## Verdetto del Giorno 28

L'editor in sé si è assemblato abbastanza velocemente. Monaco Editor fa il grosso del lavoro, e Wails rende il ponte tra Go e React sorprendentemente pulito. La parte difficile era tutto ciò che circonda il codice: far compilare alla CI app native per tre sistemi operativi, gestire le dipendenze specifiche di ogni piattaforma, pacchettizzare correttamente per ogni target.

Sostituirà VS Code? Ovviamente no. Ma è un editor di codice nativo funzionante con un albero dei file, tab, evidenziazione della sintassi, una palette dei comandi, un terminale integrato, e release multi-piattaforma. Costruito in un giorno. Il fatto che lo stesso Monaco Editor che alimenta VS Code sia disponibile come componente React significa che ottieni una vera esperienza di editing gratis. Il resto è solo idraulica, ed è esattamente il tipo di lavoro in cui l'IA eccelle.

43 task sono tanti. La maggior parte dei giorni in questa challenge erano nella fascia 15-25. Ma le app desktop native con pipeline CI sono un'altra bestia. Ogni piattaforma ha le sue stranezze, ogni sistema di build ha le sue opinioni, e nessuno è d'accordo con gli altri. Ne mancano due.

---

*Questo è il giorno 28 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre consegno 30 progetti in 30 giorni usando il coding assistito dall'IA.*
