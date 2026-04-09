---
title: "30 Days of Vibe Coding - Day 3 - RPG"
description: "Un RPG a turni con grafica isometrica, creazione del personaggio, combattimento, missioni e un sistema di salvataggio, tutto nel browser."
summary: "Un RPG a turni con grafica isometrica, creazione del personaggio, combattimento, missioni e un sistema di salvataggio, tutto nel browser."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-03", "typescript", "pixi.js", "game", "rpg"]
series: ["30 Days of Vibe Coding"]
series_order: 3
seriesOpened: true
date: 2026-04-08
draft: false
---

Giorno 3. Ho chiesto un RPG completo. In un browser. In un giorno solo.

## Il Prompt

> "Voglio creare un RPG browser-based con grafica isometrica, personalizzazione del personaggio, combattimento a turni, missioni e un sistema di salvataggio/caricamento."

È una quantità assurda di cose da richiedere in un singolo prompt. Un RPG non è un gioco piccolo. Ci sono classi di personaggio, sistemi d'inventario, alberi di dialogo, tracciamento delle missioni, meccaniche di combattimento, esplorazione della mappa. Ognuna di queste sarebbe già un progetto a sé stante. Volevo vedere cosa sarebbe successo chiedendole tutte insieme.

## Come È Stato Costruito

[Watchfire](https://watchfire.io) ha preso il prompt e lo ha suddiviso in attività. Il package.json conserva ancora l'impronta del primo task nel suo nome: `watchfire-0000-project-setup---initialize-nex`. Dalla struttura del progetto si vede come il lavoro sia stato distribuito tra i sistemi principali: setup del progetto con Next.js e Pixi.js, definizioni dei tipi, gestione dello stato di gioco, dati delle mappe per tre zone (città, foresta, dungeon), motore di combattimento, database di oggetti e nemici, sistema di dialogo, database delle missioni, rendering isometrico, e infine tutti i componenti UI sopra di esso.

La sola lista dei componenti dice già quanto è stato costruito: CharacterCreation, CombatUI, DialogueBox, EquipmentPanel, GameHUD, GameMenu, Inventory, IsometricWorld, ItemTooltip, MainMenu, QuestLog, SaveLoadMenu, SettingsPanel, VictoryScreen. Sono 14 componenti React più il livello di logica di gioco sottostante.

Non stavo lì a guidare ogni singolo pezzo. Sono tornato e ho trovato un gioco funzionante, e ho cominciato a giocarci.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa Ho Ottenuto

Questo mi ha davvero sorpreso.

![Schermata del titolo con il brand Realm of Shadows](images/screenshot-01.png)

**Si è dato un nome da solo.** "Realm of Shadows: An Isometric Adventure." Non gli avevo mai dato un nome. Ne ha scelto uno, ha progettato una schermata del titolo con testo stilizzato, e ha aggiunto un'opzione impostazioni nel menu principale. La combinazione di colori blu notte e oro attraversa l'intero gioco.

![Creazione del personaggio - inserimento del nome](images/screenshot-02.png)

**La creazione del personaggio è una procedura guidata in più passaggi.** Inserisci un nome, scegli una classe e rivedi le tue statistiche prima di iniziare. Ti guida attraverso tre schermate con indicatori di progresso nella parte superiore. Ogni classe (Warrior, Mage, Rogue) ha distribuzioni di statistiche e equipaggiamento iniziale diversi.

![Schermata di selezione della classe](images/screenshot-04.png)

Le schede di selezione della classe mostrano le statistiche dettagliate per ciascuna opzione. Il Warrior ha salute e forza elevate. Il Mage ha magia e mana elevati. Il Rogue ha statistiche bilanciate con velocità alta. Ci sono piccole icone per ogni classe e barre delle statistiche colorate. Questo è un lavoro di UI raffinato.

![Riepilogo del personaggio prima di iniziare](images/screenshot-05.png)

**La schermata di riepilogo mostra il tuo equipaggiamento iniziale.** Un Mage di nome John inizia con uno Staff di Legno, una Tunica di Tela, Pantaloni di Cuoio e Stivali Consumati. Puoi vedere tutte le tue statistiche di base prima di confermare. È il tipo di dettaglio che fa sembrare un gioco finito.

![Veduta isometrica della città](images/screenshot-06.png)

**Il mondo isometrico funziona davvero.** C'è una città con edifici, sentieri e NPC che camminano in giro. Il tuo personaggio ha un HUD in alto a sinistra con HP, MP e livello. C'è una minimappa in alto a destra che mostra "Willowbrook" come posizione attuale. Ci si muove cliccando sulle tessere o usando WASD.

![Dialogo con l'NPC Elder Mira](images/screenshot-08.png)

**Gli NPC hanno alberi di dialogo.** Elder Mira ti accoglie: "Ah, finalmente ti sei svegliato! Sono Elder Mira, guardiana del Villaggio di Willowbrook." La finestra di dialogo appare in fondo allo schermo con il nome dell'NPC evidenziato in oro. Clicchi o premi Invio per continuare.

![Opzioni di dialogo ramificato](images/screenshot-10.png)

**Il dialogo si ramifica.** Elder Mira ti chiede se aiuterai con le creature oscure nella foresta. Hai due scelte: "Ti aiuterò" oppure "Dimmi di più su queste creature." Non è solo testo decorativo. Si collega al sistema delle missioni.

![Diario delle missioni con la missione attiva](images/screenshot-13.png)

**C'è un diario delle missioni completo.** Tiene traccia delle missioni attive e completate con schede separate. "A New Beginning" è la missione principale, contrassegnata come storia principale. Mostra gli obiettivi ("Parla con Elder Mira"), le ricompense (oro e XP) e le descrizioni delle missioni. L'interfaccia ha lo stesso stile oro e scuro del resto del gioco.

![Menu di pausa](images/screenshot-12.png)

**Il menu di pausa è completo.** Riprendi, Inventario, Personaggio, Diario Missioni, Salva Partita, Impostazioni, Menu Principale. Mostra il nome del personaggio, la classe, il livello, gli HP e gli MP in cima. Non è un'aggiunta frettolosa. Qualcuno ha pensato alla gerarchia delle informazioni.

![Combattimento a turni](images/screenshot-14.png)

**Il combattimento è a turni con opzioni reali.** Combatti contro un Green Slime. Sia tu che il nemico avete barre HP. La barra delle azioni in basso ti dà cinque scelte: Attack, Magic, Defend, Item, Flee. Ognuna ha un colore diverso. La schermata di combattimento è pulita e leggibile.

![Combattimento con i pulsanti delle azioni evidenziati](images/screenshot-15.png)

![Schermata di vittoria con ricompense di XP e oro](images/screenshot-16.png)

**La vittoria ti dà XP e oro.** Dopo aver sconfitto il Green Slime, ottieni esperienza e valuta. La schermata di vittoria mostra esattamente cosa hai guadagnato con un pulsante per continuare. Ciclo di feedback semplice e soddisfacente.

![Sistema di inventario e equipaggiamento](images/screenshot-17.png)

**Il sistema di inventario ha slot equipaggiamento e uno zaino.** Ci sono slot per arma, testa, busto, gambe, piedi e due slot accessori. Lo zaino mostra gli oggetti in una griglia. Puoi vedere i danni delle armi e la difesa dell'armatura in fondo.

![Tooltip dell'oggetto con l'opzione di utilizzo](images/screenshot-18.png)

**Gli oggetti hanno tooltip e azioni.** Passando sopra a una Small Health Potion viene mostrata la sua descrizione ("Ripristina 30 HP") con i pulsanti Usa e Annulla. Questo è un vero sistema di inventario, non un segnaposto.

![Pannello delle statistiche del personaggio in sovrapposizione](images/screenshot-19.png)

**Il pannello delle statistiche del personaggio mostra tutto.** La tua scheda statistiche completa sovrapposta al mondo di gioco. Nome, classe, livello, barra dell'esperienza, HP, MP e tutte le singole statistiche. Elenca anche gli oggetti equipaggiati con i loro valori statistici.

## I Bug Report

Non ho registrato bug specifici su questo progetto oltre ai test iniziali. Il gioco funzionava al primo caricamento, il che è stato un bel cambiamento rispetto al giorno 1. Le interazioni con gli NPC, il flusso del combattimento e il sistema di salvataggio hanno funzionato tutti senza che io dovessi aprire segnalazioni. Detto questo, ha ancora qualche aspetto grezzo. Il movimento isometrico può sembrare un po' rigido e il combattimento potrebbe avere più varietà di nemici. Ma niente era rotto.

## I Numeri

- **34 file sorgente** tra componenti, logica di gioco, hook, tipi e utility
- **3 zone mappa** (città, foresta, dungeon) con dati delle tessere isometriche
- **14 componenti React** per tutta l'interfaccia di gioco
- **6 moduli del motore di gioco** (combattimento, oggetti, nemici, dialogo, missioni, rendering isometrico)
- **Next.js 16 + Pixi.js 8 + React 19 + TypeScript** tech stack
- **Tempo totale a mani sul progetto:** forse 20 minuti di gioco ed esplorazione

## Prova il Gioco

{{< github repo="nunocoracao/Vibe30-day03-rpg" showThumbnail=true >}}

**[Gioca a Realm of Shadows](https://vibe30-day03-rpg.vercel.app)**

WASD o frecce direzionali per muoversi. Clicca sugli NPC per parlare. I, C, Q per inventario, personaggio e diario missioni. ESC per il menu. F5 per il salvataggio rapido.

## Verdetto del Giorno 3

Questo è il progetto in cui ho smesso di considerare questa sfida come una novità. Un RPG a turni con grafica isometrica, tre classi di personaggio, dialogo ramificato, un sistema di missioni, gestione dell'inventario, slot equipaggiamento, combattimento a turni e salvataggi persistenti. In un browser. Da un solo prompt.

Non ho mai costruito un RPG. Non ho mai implementato un motore di rendering isometrico. Non ho mai progettato un sistema di combattimento, un sistema di equipaggiamento o un albero di dialogo. Non saprei da dove cominciare con nessuno di questi individualmente, figuriamoci tutti insieme. Sarebbe stato un progetto di mesi per me, ammesso che riuscissi a finirlo.

È un RPG completo? Non proprio. Ne ha lo scheletro. Il contenuto è esile, ci sono forse una manciata di incontri, e la storia è una classica ambientazione fantasy generica. Ma tutti i sistemi ci sono e funzionano insieme. Il personaggio che crei si porta nel combattimento, il tuo equipaggiamento influenza le statistiche, le missioni tracciano i tuoi progressi e i salvataggi persistono tra le sessioni. L'architettura è solida.

Quello che mi colpisce di più è la qualità dell'interfaccia. La combinazione di colori oro su scuro, la procedura guidata per la creazione del personaggio in più passaggi, le barre delle statistiche, il diario delle missioni con le schede, la griglia dell'inventario. Niente di tutto questo era nel mio prompt. Ho chiesto sistemi e ho ottenuto un'esperienza progettata. È la parte che non avrei potuto fare da solo nemmeno con tempo illimitato. Non sono un designer.

Il costo di costruire qualcosa del genere è crollato. Non il costo di costruire un grande RPG. Quello richiede ancora anni di contenuti, bilanciamento e rifinitura. Ma il costo di costruire un prototipo di RPG funzionante con sistemi reali? È passato da mesi a ore.

---

*Questo è il giorno 3 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Seguimi mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'AI.*
