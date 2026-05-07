---
title: "30 Giorni di Vibe Coding - Il Bilancio"
description: "30 progetti in 30 giorni usando coding assistito dall'IA. Ecco cosa è stato facile, cosa è stato difficile, cosa è stato inaspettato e dove sta andando tutto questo."
summary: "30 progetti in 30 giorni usando coding assistito dall'IA. Ecco cosa è stato facile, cosa è stato difficile, cosa è stato inaspettato e dove sta andando tutto questo."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "wrapup"]
series: ["30 Days of Vibe Coding"]
series_order: 31
seriesOpened: false
date: 2026-05-07
draft: false
#type: "hidden"
---

È fatta. Trenta progetti. Trenta giorni.

Un platformer. Un clone di Snake su un Nokia 3310. Un RPG con grafica isometrica. Tetris con musica procedurale. Breakout. Un timer Pomodoro in Go. Una dashboard git. Un'app per appunti con un server MCP. Una kanban board che un'IA può gestire. Un clone di Miro. Un clone di Trello. Wordle. Un generatore di portfolio. Una dashboard meteo con arte ASCII. Un auto-battler. Un gioco di tris dove l'IA impara dalle sconfitte. Un gioco di hacking su un'IA che scappa dal contenimento. Un'app di sondaggi in tempo reale. Un muro di reazioni per eventi. Una mood board collaborativa. Chat room anonime. Uno strumento di Q&A dal vivo. Windows 95 in un browser. Un redesign del blog. Un mixer di suoni ambientali senza nessun file audio. Pixel art collaborativa. Un emulatore di terminale in Rust. Un editor di codice in Go. Un clone di Notion. E un sistema operativo che contiene tutto quanto sopra.

Tutto questo è stato possibile grazie agli agenti di coding. Principalmente Claude, a volte Codex, ma anche [Watchfire](https://watchfire.io) per orchestrare il lavoro complesso trasformando idee grezze in specifiche dettagliate che i miei agenti potevano eseguire.

## I Numeri

- **30 progetti** consegnati e deployati
- **~326.000 righe di codice** su tutti i progetti
- **~1.200 commit** totali
- **~450 task Watchfire** (da 4 task per il tris a 43 per l'editor di codice)
- **8 stack tecnologici:** TypeScript/React, Go/Bubble Tea, Python/Textual, Rust/Tauri, Go/Wails, vanilla JS, Astro, Next.js
- **6 progetti Firebase** con sincronizzazione in tempo reale
- **5 giochi,** 5 app TUI, 3 app desktop native, 17 app web
- **3 piattaforme** (macOS, Linux, Windows) per le app native
- **7 lingue** per articolo del blog (inglese, portoghese, spagnolo, tedesco, francese, italiano, giapponese, cinese)

## Cosa È Facile

Le cose che hanno funzionato quasi ogni volta, con iterazione minima.

**Giochi e app autonome.** Qualsiasi cosa con regole chiare e un ambito definito. Tetris, Wordle, Breakout, Snake. L'IA sa come dovrebbero funzionare questi giochi perché sono pattern ben documentati. Descrivi il gioco, l'IA costruisce il gioco. I risultati erano giocabili alla prima build quasi ogni volta.

**UI frontend.** Componenti React, stile Tailwind, layout, animazioni. L'IA genera codice UI pulito e velocemente. Layout a card, modali, sidebar, dashboard, flussi di form. Se riesci a descrivere come dovrebbe apparire, ottieni qualcosa di vicino al primo tentativo.

**Sistemi e logica.** Motori di combattimento, Q-learning, gestione dello stato kanban, undo/redo, file watcher, server MCP. L'IA gestisce bene il lavoro algoritmico e le macchine a stati. La macchina a stati del timer Pomodoro, il sistema di combattimento MyBrute, l'implementazione del Q-learning nel tris. Tutto si è messo insieme senza che dovessi debuggare la logica di base.

**Wrapping di strumenti esistenti.** Il Giorno 7 ha dimostrato che puoi puntare l'IA verso qualsiasi CLI con output strutturato e ottenere un'interfaccia wrapper costruita attorno. Esegue git in shell, fa il parsing del testo, costruisce una dashboard. Lo stesso pattern funziona per Docker, kubectl, qualsiasi cosa con un'interfaccia testuale.

**Integrazione Firebase.** Autenticazione anonima, listener Firestore, sincronizzazione in tempo reale. L'IA conosceva i pattern Firebase a memoria. Sei progetti usavano Firebase e la collaborazione in tempo reale funzionava al primo deploy ogni volta. Regole di sicurezza, modellazione dei dati, gestione delle connessioni. Tutto gestito.

## Cosa È Ancora Difficile

Le cose che hanno costantemente richiesto intervento umano, iterazione e pazienza.

**Stile visivo e direzione artistica.** Questo va oltre i giochi. Ogni volta che vuoi un'identità visiva specifica per un'app frontend, l'IA fa fatica. Il Giorno 15 (MyBrute) è passato attraverso quattro stili di personaggi completamente diversi prima di trovarne uno che funzionasse. Ma lo stesso problema si presenta nelle app web. L'estetica delle landing page, le palette di colori che suonano giuste, gli abbinamenti tipografici, la spaziatura che sembra intenzionale piuttosto che generata. L'IA produce un output. Un umano decide se è buono.

**Deploy e infrastruttura.** Il codice funziona sulla tua macchina. Poi fai il deploy e tutto si rompe. Il Giorno 29 (n0ti0n) ha avuto decine di commit solo per debuggare Firestore in produzione. Configurazione del long polling, impostazioni di cache, trimming delle variabili d'ambiente, timeout di connessione. Cose che si manifestano solo dopo il deploy. Il Giorno 28 (ideA) è stata una guerra di commit per far buildare Wails su tre piattaforme in GitHub Actions. L'IA può suggerire fix velocemente, ma il ciclo deploy-test-itera è lento in ogni caso.

**CI/CD delle app native.** Le build cross-platform sono dolorose. Dipendenze WebKit su Linux, build tag per piattaforma, generazione dei binding Wails, firma del codice, script di installazione che rilevano OS e architettura. I Giorni 27 e 28 hanno speso più tempo sul CI che sulle applicazioni stesse. Watchfire ha aiutato molto qui facendo loop infiniti di debugging, test, esecuzione, fallimento e ripetizione finché la pipeline non ha finalmente funzionato. Senza quella persistenza, avrei rinunciato alle release cross-platform.

**Rifinitura e casi limite.** Lo snapping delle finestre al Giorno 30 aveva un nuovo bug ogni volta che pensavo fosse risolto. Cosa succede quando snappi una finestra massimizzata? E se cambi workspace durante il drag? E il ridimensionamento di una finestra snappata? L'IA costruisce bene il percorso felice. I casi limite hanno bisogno di un umano che testa e segnala.

## Cosa È Stato Inaspettato

Le cose che non mi aspettavo quando ho iniziato questa sfida.

**L'IA prende decisioni di prodotto.** Il Giorno 21 (ChatRooms) usava l'autenticazione anonima senza che lo specificassi. L'IA ha deciso che per un'app di chat informale, forzare la creazione di un account sarebbe stato un killer della conversione. Questa non è generazione di codice. È istinto di prodotto. È successo ripetutamente. Funzionalità che non avevo chiesto apparivano perché l'IA aveva dedotto che ci appartenevano. Questo potrebbe essere legato allo sviluppo guidato dalle specifiche. In Watchfire, specifichi una direzione di prodotto per il progetto. Gli agenti lavorano verso quella visione e iterano finché il codice non corrisponde alla spec. Quando la spec è chiara su come il prodotto dovrebbe far sentire l'utente, l'IA fa scelte migliori.

**Stack tecnologici sconosciuti funzionano bene.** Non so scrivere Go. Non ho mai toccato Bubble Tea, Lip Gloss, Tauri o Wails. Non conosco Rust. Ma i Giorni 6-9 hanno consegnato app TUI Go rifinite, il Giorno 27 ha consegnato un emulatore di terminale basato su Rust, e il Giorno 28 ha consegnato un editor di codice Go/Wails. La barriera per provare nuovi stack tecnologici è crollata. Usare Context7 MCP per alimentare gli agenti con la documentazione aggiornata aiuta molto qui. L'IA non ha bisogno di affidarsi ai dati di addestramento quando può recuperare le ultime doc su richiesta.

**Il collo di bottiglia si è spostato.** Ho smesso di passare tempo a costruire e ho iniziato a passare tempo a revisionare, testare e scrivere bug report. Il fattore limitante non è mai stato "l'IA può scrivere questo codice." Era "ho testato abbastanza a fondo" e "questo dà davvero la sensazione giusta."

**L'audio procedurale è praticabile.** I Giorni 4 (Tetris), 12 (Wordle) e 25 (SoundScape) usavano la Web Audio API per sintetizzare tutti gli effetti sonori e la musica. Zero file audio. Pioggia, vento, crepitio del camino, beat lo-fi, effetti sonori di gioco. Tutto generato con oscillatori e buffer di rumore. Non avevo idea che fosse pratico per la produzione.

**La narrativa contava più del codice.** I progetti che hanno risuonato di più non erano quelli tecnicamente più impressionanti. Il Giorno 17 (Genesis) funzionava grazie alla storia, non ai minigiochi. Il Giorno 23 (RetroOS) funzionava grazie alla nostalgia, non al window manager. Il Giorno 15 (MyBrute) funzionava perché avevo un legame personale con il gioco originale. Il codice era la parte facile. L'angolazione era la parte difficile.

## La Mia Previsione Per il Futuro

Il costo di costruire un prototipo è appena crollato. Non il costo di costruire ottimo software. Quello richiede ancora tempo, gusto e iterazione. Ma il costo di testare un'idea? Il costo di esplorare uno stack tecnologico che non hai mai usato? Quasi zero.

**Anche aggiungere funzionalità a software esistente è diventato drasticamente più economico.** Una volta che un progetto è impostato con l'architettura giusta, aggiungere nuove funzionalità è più facile che costruire da zero. L'IA capisce il codebase esistente, i pattern sono stabiliti, e ogni nuova funzionalità si basa su quello che c'è già. Il costo marginale della prossima funzionalità tende a zero.

**Il collo di bottiglia si è spostato dallo scrivere codice al decidere cosa consegnare.** Come lo promuovi? Come lo vendi? Quando lanci? L'ingegneria non è più il vincolo. La strategia di prodotto, il go-to-market e la distribuzione lo sono.

**Questo sta già cambiando il modo in cui i team lavorano.** Se puoi costruire funzionalità in ore invece che in sprint, le roadmap hanno ancora senso? Come testi tutto quello che puoi consegnare? Come sai se sta avendo il giusto impatto sulle giuste metriche di business? Come elimini le cose velocemente quanto le deployi? Prevedo che gli strumenti di sperimentazione diventeranno criticamente importanti per le aziende che sviluppano software. Test A/B, feature flag, rollout progressivi. La capacità di deployare velocemente non vale nulla se non puoi misurare e fare rollback altrettanto velocemente.

**L'IA non sostituirà gli sviluppatori. Li potenzierà.** La vera sfida è organizzativa. Intere aziende sono costruite da zero attorno a pianificazione, roadmap, cicli di sprint e stime. Ora che costruire è veloce, come fanno le altre funzioni a tenere il passo? Prodotto, design, QA, marketing, vendite. La scomparsa del collo di bottiglia dell'ingegneria non significa che il lavoro scompare. Significa che il collo di bottiglia si sposta a monte e a valle. Le aziende che si adattano a questo cambiamento supereranno tutte le altre.

Gli strumenti non stanno sostituendo gli sviluppatori. Stanno rimuovendo le ragioni per non provare.

## Watchfire

Ogni progetto in questa sfida è stato costruito con [Watchfire](https://watchfire.io). Sono davvero orgoglioso di questo. È il mio progetto. Questa sfida era in parte un modo per stress-testarlo in produzione mentre creavo contenuti. Ora lo sapete.

Gli davo un'idea grezza, lui la trasformava in una spec dettagliata, spezzava il lavoro in task, e eseguiva ognuno attraverso agenti di coding. Alcuni giorni erano 4 task. Altri giorni erano 43. Revisionavo l'output, testavo, segnalavo bug quando qualcosa si rompeva, e iteravo finché non era consegnato.

Ho iniziato a costruire Watchfire durante questa sfida. Il primo progetto Platformer è stato costruito sulla v0. Quando miniOs è stato consegnato al Giorno 30, eravamo alla v5. Ogni progetto mi ha dato l'opportunità di stress-testare lo strumento, trovare bug, raccogliere feedback e consegnare miglioramenti. La sfida e lo strumento si sono evoluti insieme.

Ecco cosa è cambiato in Watchfire durante i 30 giorni:

- **v1.0 Ember** (Giorno 8) — I log di trascrizione JSONL hanno sostituito l'output terminale confuso con log di conversazione puliti. Corretto il loop di riavvio dell'agente che causava loop infiniti sui limiti di frequenza. Corretti i problemi di sandbox che bloccavano i progetti nelle directory protette di macOS.
- **v2.0 Spark** (Giorno 11) — Interfaccia backend agente pluggabile. OpenAI Codex, opencode e Gemini CLI consegnati come backend di prima classe insieme a Claude Code. Override dell'agente per task per poter mixare agenti all'interno di un singolo progetto. Selettori di agenti nel wizard di inizializzazione, nelle impostazioni TUI e nelle impostazioni GUI.
- **v3.0 Blaze** (Giorno 15) — GitHub Copilot CLI come quinto backend. Corretti i fallimenti di aggiornamento cross-filesystem su Linux. Corretto il bug di rotazione della lista task nei progetti con molti task. Corretti i prompt di aggiornamento GUI che si attivavano ad ogni lancio.
- **v4.0 Beacon** (Giorno 28) — La release importante. Dashboard con stato aggregato, chip filtro, badge di tempo trascorso, anteprima terminale dal vivo e trattamento richiede-attenzione per i task falliti. Notifiche OS per fallimenti di task e completamenti di run. Visualizzatore diff inline. Cattura metriche per task (durata, token, costo). Viste di insight per progetto e cross-progetto con strisce KPI e grafici. Esportazione report in CSV e Markdown. Notifiche digest settimanali. Integrazioni in uscita con Slack, Discord e webhook. Creazione automatica PR GitHub. Server HTTP in entrata con handler GitHub, Slack e Discord.
- **v5.0 Flare** (Giorno 30) — Chiusura del loop in entrata di Beacon. Token OAuth per bot Slack e Discord. Supporto GitHub Enterprise, GitLab e Bitbucket. Rate limiting per IP. Componenti interattivi Slack con pulsanti retry/annulla. Auto-registrazione dei comandi slash Discord. UI impostazioni stile macOS con ricerca. Corretto il run-all che si fermava silenziosamente sui fallimenti di merge.

E la più importante: Watchfire è passato da solo-macOS al supporto cross-platform completo per macOS, Linux e Windows durante la sfida. Solo quello ha cambiato chi poteva usarlo.

Cinque versioni major in 30 giorni. Da un task runner solo-macOS a una piattaforma di orchestrazione cross-platform con supporto multi-agente, una dashboard, notifiche, integrazioni, insight e pipeline di consegna.

Watchfire supporta più agenti di coding (Claude Code, Codex, Gemini, opencode, Copilot), funziona su tutte le piattaforme, e può essere usato come GUI, CLI o TUI. Attualmente sto lavorando alla v6, aggiungendo il supporto per Cursor e correggendo un bug di concorrenza. O più precisamente, Watchfire sta costruendo Watchfire adesso. Lo strumento orchestra il proprio sviluppo. È una frase che non mi aspettavo di scrivere quando ho iniziato questa sfida.

C'è molto altro in arrivo. Scriverò un approfondimento completo su Watchfire dopo essermi ripreso dagli ultimi 30 giorni.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Grazie

Se avete seguito, provato qualcuno dei progetti, condiviso un post, o semplicemente letto qualche articolo, grazie. È stato tanto lavoro e tanto divertimento. Costruire in pubblico è strano perché stai consegnando lavoro grezzo perché tutti lo vedano. Ma quello era il punto. Non la rifinitura. Non la perfezione. Solo output costante e apprendimento.

Se volete seguire quello che faccio dopo, iscrivetevi al blog (link sotto) o seguitemi sui social. E se qualcosa di tutto questo ha risuonato, condividetelo con qualcuno che potrebbe trovarlo utile. È il modo migliore per supportare questo tipo di lavoro.

Trenta progetti. Trenta giorni. Fatto.

## Tutti i 30 Progetti

| Giorno | Progetto | Tipo | Provalo |
|--------|----------|------|---------|
| 1 | [Platformer](/posts/202604-vibe30/day01-platformer/) | Game | [Gioca](https://vibe30-day01-the-platformer.vercel.app) |
| 2 | [Snake](/posts/202604-vibe30/day02-snake/) | Game | [Gioca](https://vibe30-day02-snake.vercel.app) |
| 3 | [Realm of Shadows](/posts/202604-vibe30/day03-rpg/) | Game | [Gioca](https://vibe30-day03-rpg.vercel.app) |
| 4 | [Tetris](/posts/202604-vibe30/day04-tetris/) | Game | [Gioca](https://vibe30-day04-tetris.vercel.app) |
| 5 | [Breakout](/posts/202604-vibe30/day05-breakout/) | Game | [Gioca](https://vibe30-day05-breakout.vercel.app) |
| 6 | [Pomodoro](/posts/202604-vibe30/day06-pomodoro/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day06-pomodoro/releases/latest) |
| 7 | [GitDash](/posts/202604-vibe30/day07-gitdash/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day07-gitdash/releases/latest) |
| 8 | [NotesTUI](/posts/202604-vibe30/day08-notestui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day08-notestui/releases/latest) |
| 9 | [TaskTUI](/posts/202604-vibe30/day09-tasktui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day09-tasktui/releases/latest) |
| 10 | [Miro Clone](/posts/202604-vibe30/day10-miroclone/) | Web App | [Prova](https://vibe30-day10-miroclone.vercel.app) |
| 11 | [Treelo](/posts/202604-vibe30/day11-trelloclone/) | Web App | [Prova](https://vibe30-day11-trelloclone.vercel.app) |
| 12 | [Wordle](/posts/202604-vibe30/day12-wordle/) | Game | [Gioca](https://vibe30-day12-wordle.vercel.app) |
| 13 | [GitFolio](/posts/202604-vibe30/day13-githubportfolio/) | Web App | [Prova](https://vibe30-day13-githubportfolio.vercel.app) |
| 14 | [WeatherTUI](/posts/202604-vibe30/day14-weathertui/) | TUI | [Repo](https://github.com/nunocoracao/Vibe30-day14-weathertui) |
| 15 | [MyBrute Arena](/posts/202604-vibe30/day15-mybrute/) | Game | [Gioca](https://vibe30-day15-mybrute.vercel.app) |
| 16 | [Tic-Tac-Toe: Evolved](/posts/202604-vibe30/day16-tictactoe/) | Game | [Gioca](https://vibe30-day16-tictactoe-evolved.vercel.app) |
| 17 | [Project GENESIS](/posts/202604-vibe30/day17-genesis/) | Game | [Gioca](https://vibe30-day17-genesis.vercel.app) |
| 18 | [PollBox](/posts/202604-vibe30/day18-pollbox/) | Web App | [Prova](https://vibe30-day18-pollbox.vercel.app) |
| 19 | [ReactionWall](/posts/202604-vibe30/day19-reactionwall/) | Web App | [Prova](https://vibe30-day19-reactionwall.vercel.app) |
| 20 | [MoodBoard](/posts/202604-vibe30/day20-moodboard/) | Web App | [Prova](https://vibe30-day20-moodboard.vercel.app) |
| 21 | [ChatRooms](/posts/202604-vibe30/day21-chatrooms/) | Web App | [Prova](https://vibe30-day21-chatrooms-nir8.vercel.app) |
| 22 | [LiveQ&A](/posts/202604-vibe30/day22-liveqa/) | Web App | [Prova](https://vibe30-day22-liveqa.vercel.app) |
| 23 | [RetroOS](/posts/202604-vibe30/day23-retroos/) | Web App | [Prova](https://vibe30-day23-retroos.vercel.app) |
| 24 | [Reblog](/posts/202604-vibe30/day24-reblog/) | Web App | [Prova](https://vibe30-day24-reblog.vercel.app) |
| 25 | [SoundScape](/posts/202604-vibe30/day25-soundscape/) | Web App | [Prova](https://vibe30-day25-soundscape.vercel.app) |
| 26 | [PixelForge](/posts/202604-vibe30/day26-pixelforge/) | Web App | [Prova](https://vibe30-day26-pixelforge.vercel.app) |
| 27 | [Terminal](/posts/202604-vibe30/day27-terminal/) | Native | [Release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest) |
| 28 | [ideA](/posts/202604-vibe30/day28-idea/) | Native | [Release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest) |
| 29 | [n0ti0n](/posts/202604-vibe30/day29-n0ti0n/) | Web App | [Prova](https://blocknotes-lime.vercel.app) |
| 30 | [miniOs](/posts/202604-vibe30/day30-minios/) | Web App | [Prova](https://vibe30-day30-minios.vercel.app) |

---

*Questo è l'ultimo articolo della serie [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Tutti i 30 progetti sono open source su [GitHub](https://github.com/nunocoracao/30DaysOfVibeCoding).*
