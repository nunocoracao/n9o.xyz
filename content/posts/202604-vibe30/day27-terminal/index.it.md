---
title: "30 Giorni di Vibe Coding - Giorno 27 - Terminal"
description: "Un emulatore di terminale nativo costruito con Tauri 2 e Rust, con tab, pannelli divisi, temi configurabili e funzionalità intelligenti."
summary: "Un emulatore di terminale nativo costruito con Tauri 2 e Rust, con tab, pannelli divisi, temi configurabili e funzionalità intelligenti."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-27", "rust", "tauri", "terminal"]
series: ["30 Days of Vibe Coding"]
series_order: 27
seriesOpened: false
date: 2026-05-02
draft: false
#type: "hidden"
---

Giorno 27. Mancano quattro giorni. È ora di smettere di giocare sul sicuro.

L'ultimo tratto di questa challenge è dove voglio spingermi verso cose che probabilmente non dovrebbero funzionare in un solo giorno. Un emulatore di terminale è una di quelle cose. Non un giocattolino web che finge di essere un terminale. Una vera app desktop nativa che lancia sessioni shell reali, fa rendering a 60fps e gestisce tutto, da vim a htop.

## Il Prompt

> "Costruisci un emulatore di terminale usando Tauri 2 e Rust"

Questa era la richiesta base. Tutto il resto è venuto dall'iterazione.

{{< alert icon="fire">}}
Scaricalo dall'[ultima release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest)
{{< /alert >}}

## Come è stato costruito

Questo è stato un bel pezzo. [Watchfire](https://watchfire.io) ha suddiviso il lavoro in 19 task, e ne serviva ogni singolo. Costruire un emulatore di terminale non è banale. C'è la gestione dei PTY, l'integrazione shell, la gestione degli input, le performance di rendering e una dozzina di altre cose a cui non avrei mai pensato.

La lista dei task era più o meno così:

1. Impostare un progetto Tauri 2 + Vite con supporto PTY di base
2. Tab multipli con apertura, chiusura e rinominazione
3. Pannelli divisi, orizzontali e verticali
4. Pannello impostazioni con temi, font e configurazione shell
5. Polish UI, scrollback e fix shell
6. GitHub Actions per release automatizzate
7. Suggerimenti comandi IA inline
8. Polish visuale per trasparenza, sfocatura e chrome della finestra
9. Link cliccabili e rilevamento intelligente nell'output del terminale
10. Profili shell e azioni rapide
11. Avvisi per comandi pericolosi con dialoghi di conferma
12. Notifiche per comandi di lunga durata
13. Ricerca fuzzy nella cronologia con un overlay ricco Ctrl+R
14. Suggerimenti fantasma inline dai file di cronologia
15. Rilevamento intelligente degli errori con azioni di fix rapido
16. Traduzione dal linguaggio naturale ai comandi
17. Spiegazione dei comandi e riassunto IA dell'output
18. Raggruppamento dell'output in blocchi con sezioni richiudibili
19. Pannello impostazioni funzionalità intelligenti e test di integrazione

Poi sono arrivati i fix CI/CD. Far compilare e firmare Tauri su macOS, Linux e Windows tramite GitHub Actions è un'avventura a sé. Più gli script di installazione per tutte e tre le piattaforme.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![Terminale in esecuzione con molteplici funzionalità visibili](images/screenshot-01.png)

**È un vero terminale.** Questa non è una simulazione. Usa il crate portable-pty di Rust per lanciare sessioni shell reali. Bash, zsh, fish, qualsiasi cosa abbiate configurato. Il supporto PTY completo significa che funziona tutto: vim, htop, prompt interattivi, tutto quanto.

![htop in esecuzione con tab multipli](images/screenshot-11.png)

**xterm.js con accelerazione WebGL.** Il rendering è veloce. Tipo, notevolmente veloce. Lo scrollback arriva fino a 10.000 righe e non si impalla. Il renderer WebGL fa una differenza reale rispetto all'approccio canvas standard.

**Tab e pannelli divisi.** Cmd+T per un nuovo tab, Cmd+D per una divisione verticale, Cmd+Shift+D per una divisione orizzontale. Potete rinominare i tab. La gestione dei pannelli funziona esattamente come vi aspettereste da un terminale moderno.

![Pannelli divisi con Claude Code in esecuzione](images/screenshot-12.png)

**Ha un tour delle funzionalità intelligenti.** Quando aprite l'app per la prima volta, vi guida attraverso le funzionalità intelligenti con un tour guidato.

![Tour delle funzionalità intelligenti](images/screenshot-02.png)

Queste funzionalità intelligenti includono suggerimenti fantasma dalla cronologia dei comandi, ricerca fuzzy nella cronologia con Ctrl+R, avvisi per comandi pericolosi come `rm -rf` o `git push --force`, e traduzione dal linguaggio naturale ai comandi.

![Suggerimenti fantasma](images/screenshot-03.png)

![Ricerca fuzzy nella cronologia](images/screenshot-04.png)

![Avvisi per comandi pericolosi](images/screenshot-05.png)

![Linguaggio naturale e funzionalità IA](images/screenshot-06.png)

**Un pannello impostazioni completo.** Famiglia di font, dimensione font, stile cursore, temi colori. Viene fornito con Dracula, Solarized, Monokai e altri. Potete configurare la sfocatura dello sfondo, la trasparenza e gli argomenti shell.

![Pannello impostazioni](images/screenshot-14.png)

**Ricerca comandi nello scrollback.** Ctrl+F apre un overlay di ricerca che vi permette di cercare nella cronologia del terminale con corrispondenza fuzzy.

![Overlay di ricerca](images/screenshot-13.png)

**Raggruppamento dell'output in blocchi.** Gli output lunghi dei comandi vengono raggruppati in blocchi richiudibili. C'è un pulsante "Riassumi output" per quando un comando sputa fuori 2.000 righe e volete solo il succo.

![Riassunto dell'output](images/screenshot-07.png)

**Fa girare pico.** Fa girare vim. Fa girare tutto quello che un terminale dovrebbe far girare, perché è un terminale.

![Editor di testo Pico in esecuzione dentro Terminal](images/screenshot-08.png)

**Fa girare persino l'assistente IA di Docker.** Le applicazioni TUI interattive complete funzionano senza problemi.

![Assistente IA Docker in esecuzione dentro Terminal](images/screenshot-09.png)

![Vista espansa dell'assistente IA Docker](images/screenshot-10.png)

**Fa girare Claude Code al suo interno.** Ho usato il terminale per lanciare Claude Code per costruire altre funzionalità per il terminale. Mi è sembrato un tipo molto specifico di inception.

![Claude Code in esecuzione dentro Terminal con la lista task Watchfire visibile](images/screenshot-12.png)

## Installalo

Questa è un'app nativa, non un sito web. Niente deploy su Vercel qui. Potete prendere l'ultima release dalla pagina delle release su GitHub, oppure usare gli script di installazione:

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.sh | bash
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.ps1 | iex
```

Oppure compilate dai sorgenti se volete:

```bash
git clone https://github.com/nunocoracao/Vibe30-day27-terminal.git
cd Vibe30-day27-terminal
npm install
npm run tauri dev
```

Richiede Rust 1.77.2+ e Node.js 20+.

{{< github repo="nunocoracao/Vibe30-day27-terminal" showThumbnail=true >}}

## I numeri

- **19 task Watchfire** dallo scaffold all'integrazione delle funzionalità intelligenti
- **Backend Tauri 2 + Rust** con portable-pty per sessioni shell reali
- **xterm.js con WebGL** per un rendering veloce
- **6+ temi colori** inclusi Dracula, Solarized e Monokai
- **Pipeline CI/CD** con GitHub Actions che compila per macOS, Linux e Windows
- **Script di installazione** per tutte e tre le piattaforme

## Verdetto del Giorno 27

Un emulatore di terminale tocca così tanti livelli. Gestione PTY in Rust. IPC tra il backend Rust e il frontend JavaScript tramite Tauri. Rendering WebGL per le performance. Build multi-piattaforma e firma del codice tramite CI/CD. Script di installazione che rilevano il vostro OS e la vostra architettura.

E sopra tutto questo, ha aggiunto funzionalità intelligenti. Suggerimenti fantasma, ricerca fuzzy, avvisi per comandi pericolosi, integrazione IA. Non sono trovate. Ho trovato gli avvisi per comandi pericolosi davvero utili quando ho accidentalmente digitato qualcosa di distruttivo durante i test.

Il fatto che funzioni è già impressionante. Il fatto che funzioni abbastanza bene da usarlo davvero per lanciare Claude Code per costruire ancora più funzionalità proprie, è tutta un'altra storia. Non sostituirò iTerm con questo domani, ma il divario tra "terminale vibe codato" e "terminale di produzione" è più piccolo di quanto mi aspettassi.

Giorno 27 di 30. Ne mancano tre.

---

*Questo è il giorno 27 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre consegno 30 progetti in 30 giorni usando coding assistito dall'IA.*
