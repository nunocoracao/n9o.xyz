---
title: "Watchfire: una sala di controllo per agenti di codice IA"
summary: "Una sala di controllo open source per far girare agenti di codice IA su più progetti - isola il lavoro, gestisce task e worktree, e ti avvisa quando serve davvero la tua attenzione. Sei mesi, nove versioni maggiori e un problema meta che continua a peggiorare: Watchfire ormai costruisce Watchfire, e dalla v9 anche il tuo agente può guidarlo."
description: "Una sala di controllo open source per far girare agenti di codice IA su più progetti - isola il lavoro, gestisce task e worktree, e ti avvisa quando serve davvero la tua attenzione. Sei mesi, nove versioni maggiori e un problema meta che continua a peggiorare: Watchfire ormai costruisce Watchfire, e dalla v9 anche il tuo agente può guidarlo."
categories: ["Tech", "IA", "Makers"]
tags: ["IA", "Claude Code", "vibe coding", "progetti collaterali", "watchfire"]
date: 2026-08-02
draft: false
---

Gli agenti di codice IA hanno smesso di essere una demo circa un anno fa. Claude Code, Codex, opencode, Gemini CLI, Copilot CLI, Cursor Agent - ormai scrivono tutti codice sul serio. Il collo di bottiglia si è spostato. Non è più "l'agente riesce a costruire questa cosa". È "riesco a tenere traccia di cosa fanno cinque agenti su sei repository senza uscirne pazzo".

Ho iniziato a sbattere contro quel muro tutti i giorni. Così ho costruito uno strumento. L'ho chiamato Watchfire.

**Watchfire è una sala di controllo open source per far girare agenti di codice IA su più progetti: isola il lavoro, gestisce task e worktree git, e ti avvisa quando serve davvero la tua attenzione.** È pensato per uno sviluppatore solo o per un piccolo team che ha già più task di agente di lunga durata in corso. Non sostituisce il tuo IDE, ed è sovradimensionato per una sessione occasionale di Claude Code.

A sei mesi di distanza ha una proprietà scomoda: **Watchfire costruisce Watchfire**. Ogni funzionalità qui sotto è stata specificata, eseguita e integrata da agenti che Watchfire stesso orchestrava - compresa la versione che permette al *tuo* agente di fare lo stesso. Quel ciclo è la ragione di questo articolo, e mostrerò le prove.

Ma la cosa più utile che ho imparato in sei mesi non riguarda affatto la generazione di codice. Riguarda i progetti in cui i task dicono all'agente di *non* decidere. È la seconda metà di questo articolo, ed è la metà che leggerei per prima.

È open source, Apache 2.0, e gira su macOS, Linux e Windows:

{{< github repo="watchfire-io/watchfire" >}}

{{< figure src="/posts/202607-watchfire/img/tour/dashboard.webp" alt="La dashboard attuale di Watchfire" caption="La dashboard di Watchfire oggi - il polso in lavorazione/inattivo/completato-oggi, un banner di attenzione che resta zitto quando va tutto bene, e gli insight della flotta sull'ultima settimana: 69 task, 202 commit, +64.979 righe nette. Quest'ultimo numero è churn, non una pretesa di produttività." >}}

## Il problema che ha imposto lo strumento

Per qualche settimana a inizio anno ho rimbalzato tra cinque progetti e tre finestre di terminale. Ogni progetto aveva la sua sessione di Claude Code. Ogni sessione aveva le sue richieste di permesso, i suoi singhiozzi da rate limit, il suo task a metà che dimenticavo appena cambiavo finestra. Gli agenti lavoravano benissimo. Il pezzo lento ero io.

Alcune cose in particolare:

- **Fare da balia ai prompt.** Ogni comando di shell richiedeva approvazione. Ogni scrittura di file richiedeva approvazione. Tornavo da un caffè e trovavo un agente fermo al secondo prompt di un task da 50 passaggi.
- **Nessuna vista aggregata.** Cosa sta girando davvero? Cosa è bloccato? Cosa ha fatto l'agente #3 nell'ultima ora mentre guardavo l'agente #1? Niente me lo diceva.
- **Fallimenti silenziosi.** Gli agenti morivano su un conflitto di merge, un rate limit, uno YAML malformato, e poi semplicemente... si fermavano. Me ne accorgevo un'ora dopo.
- **Contesto perso.** Cambiare progetto significava rispiegare le convenzioni, riattaccare il CLAUDE.md, ricaricare il modello mentale di cosa stava dove.

Watchfire è nato come una via di fuga domenicale da quel dolore.

## Cos'è Watchfire oggi

Quattro cose che fa davvero per te:

- **Smetti di approvare cose.** Il lavoro viene registrato come task con un prompt e criteri di accettazione, poi eseguito senza supervisione. Torni e trovi un branch integrato, non un prompt in pausa.
- **Vedi tutta la flotta in una volta.** Una dashboard su tutti i progetti: cosa gira, cosa è bloccato, cosa è finito oggi, quanto è costato. Il banner di attenzione resta zitto a meno che qualcosa non abbia davvero bisogno di te.
- **Niente collide.** Ogni task gira nella propria worktree git dietro una sandbox di sistema, quindi agenti paralleli su più progetti non possono corrompere il lavoro l'uno dell'altro e hanno una capacità nettamente ridotta di arrivare alle tue credenziali.
- **Il lavoro lascia traccia.** Metriche per task - durata, costo, commit, file, righe, come è andato il merge - confluiscono negli Insights per progetto e di tutta la flotta, più esportazioni CSV/Markdown e un riepilogo settimanale.

Attualmente supporta **sei backend di agente** attraverso una sola interfaccia `Backend` - Claude Code, OpenAI Codex, opencode, Gemini CLI, GitHub Copilot CLI e Cursor Agent - ciascuno nella propria cartella di configurazione isolata (`CODEX_HOME`, `OPENCODE_CONFIG_DIR`, `COPILOT_HOME`) perché credenziali e prompt non si mescolino tra sessioni. Puoi cambiare agente task per task.

### Due strati di raggio d'azione

Questa è la parte che vorrei conoscere se l'avesse costruita qualcun altro, perché "vattene e lascialo girare" è ragionevole solo se sai a cosa può arrivare "esso".

Ogni task gira dietro **due strati indipendenti di isolamento**. Il primo è una worktree git: ogni task riceve il proprio checkout `watchfire/<task_number>`, così due agenti nello stesso repository non vedono le modifiche a metà dell'altro, e niente atterra sul tuo branch finché l'esecuzione non ha successo e integra. Il secondo è una sandbox a livello di sistema operativo attorno al processo dell'agente - **Seatbelt** su macOS, **Landlock** su Linux 5.13+, con un fallback a mount namespace via **bubblewrap** sui kernel più vecchi.

La sandbox è una allowlist del filesystem con opinioni precise. In scrittura: la cartella del progetto, i temporanei e le cache di cui le build vere hanno bisogno (`~/.npm`, `~/.cargo`, `~/go`, `~/.rustup`). In lettura: compilatori, librerie di sistema, configurazione degli strumenti. Bloccati del tutto: `~/.ssh`, `~/.aws`, `~/.gnupg`, `.netrc`, `.npmrc`, i file `.env`, `.git/hooks`, e su macOS le tue cartelle personali. Un agente che cerca chiavi di deploy in quei percorsi protetti non ci trova niente.

Due avvertenze oneste, entrambe dichiarate chiaramente e non sepolte nell'[articolo sul sandboxing](https://watchfire.io/blog/2026-05-19-how-watchfire-sandboxes-every-agent): la sandbox è incentrata sul filesystem e al momento **non** blocca l'HTTPS in uscita, e **Windows al momento gira senza sandbox** - l'isolamento per worktree vale, lo strato di sistema no. Entrambe sono in lista.

È quella combinazione a rendere difendibile tutto il resto di questo articolo. Saltare le richieste di permesso ha senso solo quando il raggio d'azione è una worktree usa e getta e un filesystem da cui l'agente non può uscire.

### Sotto il cofano

Un **daemon in Go** (`watchfired`) si occupa di orchestrazione, sandboxing, emulazione PTY, worktree e di un server gRPC. Tre client gli parlano: una **TUI in Bubble Tea** per il lavoro da terminale e via SSH, una **GUI Electron + React** che apre una finestra di sistema per progetto, e una **CLI** leggera. Il daemon annuncia la sua porta tramite `~/.watchfire/daemon.yaml`, e un `flock` sul file di lock garantisce un daemon per utente - basta con "due finestre che litigano sulla stessa worktree". L'output dell'agente passa da un PTY interpretato lato daemon da un vero emulatore VT (`hinshun/vt10x`), così l'ANSI si vede bene ovunque.

Lo stato è YAML su disco, dappertutto - un registro, impostazioni globali, integrazioni, e un `project.yaml` per progetto più i file `.watchfire/tasks/<n>.yaml` - con scritture atomiche (tmp + `fsync` + `rename`) dalla v6.0, che ha chiuso a caro prezzo una race condition di perdita dati. Tutto è greppabile, diffabile e sopravvive a git.

E dalla v9 c'è un quarto client che non è affatto un'interfaccia: `watchfire mcp serve` espone l'intero orchestratore come server MCP. Quello ha una sezione tutta sua.

## Un giro veloce

La cosa che mi è mancata di più in quei primi tempi solo-terminale era una *dashboard*. Non un elenco di progetti - uno stato. A che punto siamo? Cosa è incastrato? Cosa hanno fatto gli agenti oggi? È lo screenshot in cima a questo articolo: una linea del polso per in lavorazione / richiede attenzione / inattivo / completato oggi, un banner di tutto a posto, insight della flotta con finestre 7g/30g/90g/Tutto, filtri, e una scheda per progetto con i propri conteggi di task e il churn di codice.

Clicchi un progetto e si apre in una finestra sua - il redesign "Inferno" della v8. Il layout è centrato sulla chat: la conversazione dell'agente è il pannello largo, e Tasks / Definition / Insights / Secrets / Trash / Settings vivono in una barra laterale a schede sulla destra:

{{< figure src="/posts/202607-watchfire/img/tour/project-window.webp" alt="Una finestra di progetto di Watchfire con lo stream dell'agente a sinistra e la coda dei task a destra" caption="Una finestra di progetto: prima la chat, tutto il resto è riferimento. Questo è il repository di Watchfire stesso, 129 task di profondità, inattivo su una sessione fresca di Claude Code." >}}

Ogni progetto ha una **Definition** in markdown che viene incorporata nel contesto del prompt. È il briefing permanente del progetto - cos'è, quali convenzioni contano, quali file contano - ed è ciò che rende praticabile un flusso multi-progetto, perché gli agenti partono con contesto invece che a mente vuota:

{{< figure src="/posts/202607-watchfire/img/tour/definition.webp" alt="La scheda Definition del progetto" caption="La scheda Definition. La modifichi lì o salti su $EDITOR." >}}

Gli **Insights** per progetto rispondono a "cosa ho fatto davvero questa settimana" - task al giorno, ripartizione per agente, distribuzione delle durate, costo, e dalla v8 anche le metriche di codice:

{{< figure src="/posts/202607-watchfire/img/tour/insights.webp" alt="Insights per progetto" caption="Insights per progetto: KPI, task al giorno, grafico ad anello per agente, distribuzione delle durate. C'è anche un aggregato di tutta la flotta nella dashboard principale." >}}

**Wildfire** è la modalità autonoma: Watchfire esegue i task pronti, rifinisce le bozze e ne genera di nuovi in un ciclo finché la definizione del progetto non dice che è finita. Ha avuto una GUI di prima classe nella v8 - un pulsante di avvio con finestra di conferma e un indicatore di fase dal vivo mentre gira. L'articolo [Inside Wildfire mode](https://watchfire.io/blog/2026-05-18-inside-wildfire-mode) ha tutta la meccanica:

{{< figure src="/posts/202607-watchfire/img/tour/wildfire-confirm.webp" alt="La finestra di conferma di Start Wildfire" caption="La finestra dice ad alta voce quello che di solito si tace: un ciclo autonomo che gira senza supervisione e consuma token in continuazione, sostituendo l'agente che sta sul progetto. Due frasi che mi hanno salvato da me stesso più di una volta." >}}

Le **Settings** globali hanno guadagnato sottopagine ricercabili con i valori predefiniti della flotta - quale agente ricevono i nuovi progetti, e se integrano, cancellano i branch e avviano i task pronti in automatico, tutto sovrascrivibile per progetto. Il pulsante diviso **Open** rileva quali CLI di editor sono davvero installate, da VS Code e Cursor fino a Zed, JetBrains e Xcode, e funziona anche quando il PATH della GUI è stato spogliato.

Per le ore in cui Watchfire non dovrebbe essere la cosa sullo schermo, la v8 ha aggiunto il **Mini Monitor** - una striscia senza cornice sempre in primo piano - e un menu nella barra di stato con lo stesso stato più la porta del daemon:

{{< figure src="/posts/202607-watchfire/img/tour/mini-monitor.webp" alt="La finestra del Mini Monitor" caption="Il Mini Monitor: tutta la flotta in una striscia grande come un post-it. La linea arancione è l'unico progetto che sta effettivamente facendo qualcosa." >}}

Lo stesso flusso esiste in una **TUI**, perché metà del mio lavoro avviene via SSH su una macchina Linux, dove i task si modificano bene quanto nella GUI. Una **CLI** leggera copre tutto ciò che il daemon sa fare:

{{< figure src="/posts/202607-watchfire/img/tour/tui.webp" alt="TUI di Watchfire" caption="La TUI rispecchia il layout a due pannelli della GUI: task a sinistra, stream dell'agente a destra, con scorciatoie per chat / generate / plan / run all / wildfire / stop." >}}

{{< figure src="/posts/202607-watchfire/img/tour/cli-help.webp" alt="watchfire --help" caption="La superficie della CLI: chat, configure, daemon, define, generate, init, integrations, metrics, plan, run, task, update, wildfire - e, dalla v9, mcp." >}}

## La prova: 30 giorni di vibe coding

Ad aprile mi sono impegnato in [30 giorni, 30 progetti costruiti con l'IA](/posts/202604-vibe30/announcement/). Uno al giorno, tutti i giorni. Claude Code su un piano Max 20x, Watchfire a orchestrare, Context7 MCP a fornire agli agenti documentazione fresca.

Il piano era pubblicare progetti collaterali. Quello che non mi aspettavo: **Watchfire è diventato il progetto messo sotto stress ogni singolo giorno**, e la coda di issue che mi ero aperto da solo si è trasformata nella roadmap di prodotto più aggressiva che abbia mai portato avanti.

Alcuni momenti rappresentativi della [serie](/series/30-days-of-vibe-coding/):

- **Giorno 1 (Platformer)** - *"Non sono rimasto lì ad approvare ogni modifica di file. Watchfire ha messo in coda i task e li ha smaltiti. Sono tornato e avevo un gioco funzionante."* Il ciclo del "vattene" ha funzionato il primo giorno. E ha esposto all'istante tutto ciò che non era pronto: output di terminale illeggibile, cicli di riavvio dell'agente sui rate limit, la sandbox che bloccava `~/Desktop` su macOS.
- **Giorno 12 (Wordle)** - *"Ogni task aggiungeva una categoria precisa di rifinitura, e nessuno ha rotto quello che c'era prima."* Il modello incrementale dei task è stato l'unico motivo per cui ha funzionato. I prompt in blocco si rompevano sempre; tanti task piccoli e ben delimitati no.
- **Giorni 27-28 (Terminal, ideA)** - Inferno di CI/CD nativo multipiattaforma. *"Watchfire ha aiutato moltissimo qui, andando in cicli infiniti di debug, test, esecuzione, fallimento e ripetizione finché la pipeline non ha finalmente funzionato. Senza quella ostinazione avrei mollato le release multipiattaforma."*
- **Giorno 30 (miniOs)** - *"Il giorno 1 ho costruito un platform partendo da una frase. Il giorno 30 ho costruito un sistema operativo che contiene quel platform, e tutto quello che ho fatto nel mezzo."*

Nell'arco dei 30 giorni: **~450 task eseguiti tramite Watchfire e ~1.200 commit**, con circa 326 mila righe modificate - è il conteggio di Watchfire stesso di inserimenti più cancellazioni, una misura di churn e non una pretesa di produttività. Solo durante la sfida sono uscite cinque versioni maggiori di Watchfire (Ember → Spark → Blaze → Beacon → Flare).

Da qualche parte lì in mezzo lo strumento ha superato una linea che non avevo previsto.

## La parte meta

C'è un momento - da qualche parte nella seconda settimana - in cui il ciclo si chiude. Stai usando Watchfire per costruire un progetto. Il progetto fa emergere un bug in Watchfire. Registri il bug come task di Watchfire. Watchfire lancia un agente per riparare Watchfire. La correzione esce. Poi torni al progetto originale, ancora in attesa in un altro tab.

La prima volta fa ridere. Alla decima è semplicemente il flusso di lavoro. Al momento del bilancio è tutto il punto:

> *O più precisamente, adesso è Watchfire che costruisce Watchfire. Lo strumento orchestra il proprio sviluppo.*

Era scritto a maggio. A luglio ha smesso di essere una riga in un articolo ed è diventato un processo di release. Ogni task nella coda della v9 - lo scheletro del server MCP, gli strumenti della fabbrica di task, quelli di esecuzione, quelli di ispezione - è stato scritto, eseguito e integrato tramite Watchfire:

{{< figure src="/posts/202607-watchfire/img/meta/building-v9.webp" alt="La finestra di progetto di Watchfire stesso con la coda di task della v9 in sviluppo" caption="La v8 che costruisce la v9: nove task in sviluppo, ognuno un pezzo del server MCP, in esecuzione nel repository di Watchfire stesso dentro Watchfire." >}}

E quando la coda si è svuotata, è stato l'agente a preparare la release:

{{< figure src="/posts/202607-watchfire/img/meta/v9-release-chat.webp" alt="L'agente di Watchfire che riferisce che la v9.0.0 è preparata come draft release" caption="Il finale della v9.0.0, testuale: versione incrementata, CHANGELOG scritto, 22 commit pubblicati, workflow di release verde, 20 artefatti preparati come bozza - e uno stop netto all'unico passaggio che non si può annullare, in attesa di un sì. Ha messo il confine nel punto giusto, che è la parte a cui tenevo davvero." >}}

Anche il sito è nel ciclo. [watchfire.io](https://watchfire.io) - documentazione, tour, changelog, blog - è un progetto Watchfire come un altro, costruito task dopo task dalla cosa che documenta. C'è un intero articolo a riguardo, scritto dal processo che descrive: [Watchfire eats its own dogfood](https://watchfire.io/blog/2026-05-19-eating-our-own-dogfood).

{{< figure src="/posts/202607-watchfire/img/meta/website-v91.webp" alt="Un agente di Watchfire che aggiorna watchfire.io alla v9.1" caption="Quattro parole di prompt - \"update watchfire website to 9.1\" - e l'agente trova ogni punto in cui la versione è dichiarata (badge dell'hero, JSON-LD, changelog, RSS), scrive le note di rilascio, verifica la build e si ferma prima di fare commit. Nota il giudizio a metà strada: ha lasciato un badge puntato alla 9.0 perché quella resta la release di riferimento e la 9.1 è una correzione di bug." >}}

Il motivo per cui niente di tutto questo è un espediente è banale. Ogni piccola escoriazione che ho sentito è stata registrata e corretta dalla stessa macchina che l'ha causata. Ogni "vorrei che facesse..." è diventato una bozza di task in pochi secondi, e la distanza tra notare una mancanza e rilasciare la correzione si è ridotta a ore. Questo non dimostra che Watchfire abbia la superficie giusta per il *tuo* lavoro - dimostra che ha la superficie giusta per l'unico flusso che ho potuto osservare in pieno dettaglio, ogni giorno, per sei mesi. Si dà il caso che quello sia un buon modo di costruire uno strumento. E la v9 è quell'osservazione trasformata in prodotto: se Watchfire poteva già costruire Watchfire, mancava soltanto lasciare il volante anche al *tuo* agente.

## Collegare una chat alla fabbrica

Il che mi porta alla parte della v9 che mi sono goduto di più. Collegare un agente alla fabbrica non è una caccia al tesoro tra file di configurazione - è una pagina di impostazioni. Watchfire rileva quali CLI di agente hai sulla macchina e scrive la voce MCP nella configurazione di ciascuna con un clic:

{{< figure src="/posts/202607-watchfire/img/meta/mcp-settings.webp" alt="La pagina Settings → MCP con installazioni a un clic per agente" caption="Settings → MCP: una scheda per ogni CLI di agente. Claude Code è un clic - Watchfire scrive la voce in ~/.claude.json. Codex e Copilot sono stati rilevati in automatico, a un Install di distanza. C'è uno snippet copiabile per tutto il resto. Solo stdio, locale alla macchina, niente in rete." >}}

Ho premuto il pulsante di Claude Code, riavviato una sessione, e un normale terminale è diventato un client Watchfire. Chiedigli cosa sta girando e ti elenca ogni progetto registrato, ti dice quale ha un ciclo Wildfire in fase di esecuzione, e tira fuori l'intera coda di task di quel progetto - senza una sola finestra di Watchfire aperta.

Una volta che hai quello, una serie di flussi smettono di essere fantascienza:

- **Pianificare fuori, fabbricare dentro.** Fai brainstorming con un agente in chat - una chat qualsiasi - e invece di sputarti codice, registra task delimitati con criteri di accettazione e lascia che Watchfire li esegua in sandbox, in worktree, con merge e metriche. La conversazione resta una conversazione; il codice avviene in fabbrica.
- **Lavoro tra progetti da un unico posto.** Una sessione seduta nel repository di questo blog può registrare un bug appena trovato nel repository di Watchfire, o avviare un aggiornamento della documentazione sul progetto del sito, senza cambiare cartella né finestra.
- **Agenti che revisionano agenti.** L'agente esterno legge `get_task_diff` dopo un'esecuzione e decide se registrare un seguito - un ciclo di revisione in cui il revisore non tocca mai la worktree.
- **Segnalazioni di bug che si scrivono da sole.** La prima cosa che ho chiesto a una sessione collegata sono stati gli insight di un progetto, e mi ha restituito un muro di zeri: i task storici non avevano mai avuto il `completed_at` impostato, quindi ogni metrica che ci si appoggiava risultava vuota. È diventato un task, e il task è diventato la v9.1 due giorni dopo. L'agente esterno ha trovato il bug *usando* la fabbrica.

La metafora della fabbrica smette di essere una metafora a questo punto. Watchfire si occupa della produzione - isolamento, esecuzione, integrazione, contabilità - e qualsiasi cosa parli MCP può mettersi al banco degli ordini.

## Il test di carico: Neon Fable

Per capire se la v9 reggeva davvero, l'ho puntata su qualcosa di deliberatamente irragionevole: `rpg-fable-test`, un GDR cyberpunk da browser chiamato **Neon Fable**, costruito quasi interamente da Wildfire, con me perlopiù a scrivere la Definition del progetto e a guardare la coda svuotarsi.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-definition.webp" alt="Wildfire in esecuzione con la definizione del progetto Neon Fable aperta" caption="Tutto l'allestimento: una Definition che descrive il gioco (storia ramificata in tre atti, renderer isometrico, combattimento a turni, inventario di cyberware) e un ciclo Wildfire che la trasforma in task. La v1 - il ciclo giocabile completo - è uscita come task #1-18." >}}

La coda della v1 ha portato il gioco da `npm create vite` a un ciclo finito: creazione del personaggio, storia ramificata in tre atti, combattimento a turni con seed, inventario e potenziamenti cibernetici, finali multipli, un codice dei finali, New Game+. Tutta la pixel art scritta *in codice* come griglie di stringhe indicizzate per palette, perché è su quello che un agente può iterare. La coda della v2 - una revisione grafica ad alto dettaglio e un sistema modulare per l'aspetto dei personaggi - è stata generata da Wildfire stesso. Il progetto è ora a **119 task, 103 dei quali completati e integrati**, con una suite di test che passava 902 test intorno al task #40 e da allora è solo cresciuta.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-wildfire.webp" alt="Wildfire che esegue un task grafico di Neon Fable" caption="Wildfire in fase di esecuzione su \"Day-phase neon states - dusk, night, late-night\", mentre scrive a mano rampe di colore emissive in TypeScript. Il server di sviluppo Vite nella shell agganciata ricarica il gioco a ogni modifica che atterra." >}}

Ed ecco cosa esce dall'altro lato. Il creatore di personaggi è tutto il sistema di aspetto della v2 reso visibile - composizione di sprite a livelli, cataloghi per slot, anteprima dal vivo, casualità con blocchi:

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-appearance.webp" alt="Il passaggio dell'aspetto nella creazione del personaggio di Neon Fable" caption="I task #33-53 in una sola schermata: composizione di sprite a livelli, cataloghi di capelli/occhi/sopracciglia/bocca/dettagli del viso, canali di colore, un'anteprima rotante dal vivo, e un \"surprise me\" che rispetta i blocchi per slot. Ogni sprite è una griglia di stringhe in un file TypeScript." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-plaza.webp" alt="Gioco isometrico a Cinder Row Plaza" caption="Cinder Row Plaza: tile isometrici 64×32, insegne al neon animate, una dozzina di PNG distinti con lo stesso sistema a livelli, una minimappa e dialoghi ramificati - ogni pixel scritto come codice da un agente che non può vedere." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-combat.webp" alt="Combattimento a turni in Neon Fable" caption="Combattimento: ordine di iniziativa in alto, budget di movimento e azione, un registro che scorre. Il generatore casuale con seed che sta sotto era il task #6, ai tempi della coda v1." >}}

Neon Fable non è un prodotto e non lo diventerà. È un progetto dimostrativo, fatto per vedere cosa succede quando si punta la fabbrica su qualcosa di scomodo. Puoi [giocarci nel browser](https://nunocoracao.github.io/neon-fable/) e [leggere il codice](https://github.com/nunocoracao/neon-fable). Come test di carico ha già risposto alla domanda: non si limita a correggere i propri bug e a scrivere la propria documentazione - messo davanti a qualcosa di delicato come *la pixel art e il feeling di gioco*, continua a consegnare.

## L'altra metà: progetti che sono soprattutto pensiero

Neon Fable è il caso vistoso, ed è anche quello fuorviante. Fa sembrare Watchfire una macchina per generare codice che non hai scritto - che è la metà del flusso che viene bene in fotografia, e la metà di cui mi fido di meno.

I due progetti più recenti sulla mia dashboard sono l'opposto. **Anima** è un prodotto di agente personale - un agente persistente per persona - e **FitQuest** è un tracker di fitness che rende un gioco le metriche di tutti i dispositivi che possiedi. Entrambi hanno ambizioni vere. Nessuno dei due ha ancora codice di prodotto. Quello che hanno è una cartella `docs/`, un registro delle decisioni e una Definition di progetto la cui prima regola è *la documentazione è la fonte di verità; il codice segue la documentazione, mai il contrario*.

Per questo i task non somigliano per niente a quelli di Neon Fable:

- *"Affilare il cuneo - primo utente, caso d'uso principale, modello di interfaccia (**raccomandare, non fissare**)"*
- *"Dossier di evidenze per la decisione KMP vs Flutter - **solo ricerca, non decidere**"*
- *"Verifica di contrasto e visione dei colori della palette dell'HUD"*
- *"Regole di testo conformi al MDR nella voce del marchio, e verifica di ogni stringa visibile all'utente nella PoC"*

Rileggi quelle parentesi. Sono istruzioni a *non* essere autonomo - raccogli le prove, segnala i compromessi, lascia la decisione a me. La Definition di Anima porta la stessa postura come regola permanente: quello che è segnato come bloccato è deciso, e se un task espone una lacuna o una contraddizione, all'agente si dice di **fermarsi, portarla a galla, correggere il documento e poi continuare**, invece di inventarsi una direzione. Quella di FitQuest dice di far fallire il task del tutto - `success: false` con una motivazione - piuttosto che uscire dal percorso documentato.

Questo trasforma la stessa macchina in qualcosa di più simile a un assistente di ricerca con tracciabilità: il lavoro viene delimitato, isolato, eseguito e integrato esattamente come prima, ma quello che atterra nel diff è una nota di decisione o un aggiornamento della documentazione invece di una funzionalità. A quel punto la Definition non è riempimento di contesto; è governance.

Entrambi i progetti hanno comunque degli artefatti, perché prima o poi bisogna guardare la cosa:

{{< figure src="/posts/202607-watchfire/img/projects/anima-ori.webp" alt="La schermata di onboarding di Anima" caption="La schiusa di Anima: un volume di luce alla deriva che si coagula in una creatura e poi pone sei domande - ognuna o plasma l'essere o diventa il suo primo ricordo. Costruita come prototipo WebGL autonomo sotto docs/explorations/, perché il documento di design dice che i prototipi dimostrano le cose prima che esista codice." >}}

{{< figure src="/posts/202607-watchfire/img/projects/fitquest-today.webp" alt="La schermata di oggi di FitQuest su iOS" caption="La prova di concetto usa e getta di FitQuest in SwiftUI - dati reali di HealthKit, missioni con tappe e serie, una barra di XP. Esplicitamente non è il prodotto: esiste per verificare se la meccanica delle missioni sopravvive al contatto con un dispositivo vero, e quello che si impara torna nella documentazione prima che il codice venga buttato." >}}

Centotré task integrati sul gioco; trentotto accuratamente recintati sugli altri due. Stesso daemon, stesse worktree, stessa sandbox. La differenza sta interamente in come è scritta la Definition - che è la vera lezione dopo sei mesi, e quella che darei a chiunque cominci adesso: **lo strumento vale quanto vale il briefing che gli dai, e sapere quando dirgli di non decidere è gran parte del mestiere.**

## Come ci siamo arrivati

La prima versione non si chiamava nemmeno Watchfire. Si chiamava **FORGE** - una singola finestra Electron con un selettore di progetti, una lista di task e un terminale incorporato che faceva girare Claude Code. Grezza: modello di task esile, output illeggibile, cambiare progetto voleva dire riavviare l'applicazione. Ma l'idea di fondo c'era già - metti il lavoro in coda, guardalo eseguire, non toccare il terminale direttamente.

{{< figure src="/posts/202607-watchfire/img/history/forge-jan.webp" alt="FORGE il 12 gennaio 2026" caption="12 gennaio: FORGE. Un progetto alla volta, layout a schede, niente dashboard, niente metriche, niente multi-agente. L'avatar in pixel art di Claude Code nel messaggio di benvenuto è rimasto più a lungo di quanto avrebbe dovuto." >}}

A inizio febbraio ho ricominciato il repository da zero in Go - gRPC invece di HTTP, YAML invece di SQLite, tre binari invece di un monolite Electron. È la base di codice che gira ancora oggi. Poi è arrivato aprile, e il versionamento ha preso un tema: ogni versione maggiore ha un nome di fuoco, e la cadenza ti dice esattamente cosa ha fatto male quel mese.

- **v1.0 "Ember"** *(inizio aprile)* - prima release vera. Scoperta delle trascrizioni da `~/.claude/projects/` di Claude Code, una protezione contro i cicli di riavvio dopo tre crash, la correzione Seatbelt per i progetti in `~/Desktop`.
- **v2.0 "Spark"** *(metà aprile)* - l'interfaccia a backend intercambiabili. Codex, opencode e Gemini CLI escono lo stesso giorno, con cambio di agente per task e isolamento della configurazione per sessione.
- **v3.0 "Blaze"** *(fine aprile)* - Copilot CLI come 5° backend, più due settimane di emorragia fermata: un bug `EXDEV` tra filesystem che si mangiava gli aggiornamenti su Linux, rotazione della lista dei task, cicli di aggiornamento della GUI.
- **v4.0 "Beacon"** *(giorno 28)* - la svolta da esecutore di task a strumento di *operazioni*. Dashboard rifatta, metriche per task, Insights, esportazioni, riepilogo settimanale, notifiche di sistema, relay Slack/Discord/webhook con verifica della firma, PR automatica su GitHub.
- **v5.0 "Flare"** *(giorno 30)* - bot OAuth per Slack e Discord, un server HTTP in ingresso con rate limiting e idempotenza, parità di merge per GitLab/Bitbucket, e una correzione per `run-all` che si fermava in silenzio quando un merge falliva. A quanto pare una dashboard silenziosa è la seconda peggiore dashboard.
- **v6.0 "Phoenix"** *(inizio maggio)* - scritture atomiche di YAML, il daemon singleton con `flock`, Cursor Agent come 6° backend, e una TUI con vero scrollback.
- **v7.0 → v7.4 "Forge"** *(maggio-giugno)* - sì, il nome originale, riciclato come nome in codice molto dopo che la cosa a cui apparteneva era stata riscritta e messa da parte. Riordino dei task ovunque, una finestra di chat che smette di saltare in cima, modalità chat concentrata, e la mia storia di guerra preferita: un log del daemon finalmente limitato nelle dimensioni dopo che quello di un utente era arrivato a **300 GB** su disco senza che nessuno se ne accorgesse ([post-mortem](https://watchfire.io/blog/2026-05-29-forge-7-3-the-300gb-log)).
- **v8.0 "Inferno"** *(fine giugno)* - una finestra di sistema per progetto, una finestra principale da centro di controllo, la GUI di Wildfire, il Mini Monitor, e metriche di output del codice che misurano il codice consegnato invece dei task chiusi. ([articolo di rilascio](https://watchfire.io/blog/2026-06-29-inferno-8-0-parallel-workspaces))
- **v9.0 "Firestorm"** *(26 luglio)* - l'inversione di ruoli: una fabbrica MCP da 18 strumenti, solo stdio, con una modalità `--read-only` e protezioni ovunque. ([articolo di rilascio](https://watchfire.io/blog/2026-07-26-firestorm-9-0-watchfire-as-a-factory))
- **v9.1** *(29 luglio)* - la correzione di `completed_at` di qualche sezione fa, con il riempimento retroattivo di ~580 task storici perché Insights, esportazioni e riepilogo si accendano tutti.

Un ultimo screenshot, e poi torna a guardare quello che apre questo articolo:

{{< figure src="/posts/202607-watchfire/img/history/watchfire-april.webp" alt="Watchfire ad aprile 2026" caption="27 aprile: la GUI della riscrittura in Go - riconoscibile, ma senza Insights, senza KPI di flotta, senza anteprime dal vivo. È la versione che ha retto la maggior parte della sfida dei 30 giorni." >}}

Quattordici settimane tra le due. Lo stesso strumento.

## Cosa viene dopo

- Altri backend di agente man mano che compaiono. L'interfaccia `Backend` è l'unico punto di integrazione - qualsiasi cosa parli shell e produca una trascrizione può entrare.
- Una superficie MCP più ampia: strumenti di ispezione più ricchi, e agenti esterni di lunga durata che sorvegliano intere flotte invece di singoli progetti.
- Strumenti di diff e revisione migliori. Il visualizzatore integrato c'è; manca una vera superficie in stile PR "prima revisiona, poi integra" per i task che richiedono un occhio umano.
- Flussi di squadra. Il modello di task su file sopravvive già a git - liste di task condivise e superfici di revisione sono l'estensione naturale.

## Provalo

{{< github repo="watchfire-io/watchfire" >}}

Su macOS, installarlo è una riga:

```bash
brew tap watchfire-io/tap && brew install --cask watchfire-io/tap/watchfire
```

Tutto il resto: [scarica l'ultima versione](https://github.com/watchfire-io/watchfire/releases/latest) · [documentazione](https://watchfire.io/docs) · [changelog](https://watchfire.io/changelog) · [blog](https://watchfire.io/blog)

Se stai facendo il giocoliere con più di un agente IA e ti sei sorpreso a saltare tra terminali, potrebbe essere il pezzo che ti manca. Per me lo è stato.

*Sei mesi, nove release, e uno strumento che ha finito per costruirsi da solo. La versione di "vibe coding" in cui devi comunque consegnare qualcosa a fine giornata.*
