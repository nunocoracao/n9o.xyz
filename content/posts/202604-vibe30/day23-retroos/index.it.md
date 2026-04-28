---
title: "30 Days of Vibe Coding - Giorno 23 - RetroOS"
description: "Un ambiente desktop ispirato a Windows 95 che gira interamente nel browser, completo di finestre trascinabili, app classiche e sequenza di avvio."
summary: "Un ambiente desktop ispirato a Windows 95 che gira interamente nel browser, completo di finestre trascinabili, app classiche e sequenza di avvio."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-23", "windows95", "retro", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 23
seriesOpened: false
date: 2026-04-28
draft: false
#type: "hidden"
---

Giorno 23. Ho chiesto a un'IA di costruirmi Windows 95.

## Il Prompt

Questo era pura nostalgia:

> "Costruisci un ambiente desktop ispirato a Windows 95 che gira nel browser. Includi una barra delle applicazioni, un menu Start, finestre trascinabili e ridimensionabili, e app classiche come Blocco Note, Calcolatrice, Paint, Campo Minato, Terminale, Internet Explorer e Risorse del Computer. Aggiungi una sequenza di avvio, icone SVG in pixel art, effetti sonori, selezione dello sfondo, un effetto CRT e un easter egg con la schermata blu della morte."

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day23-retroos.vercel.app)
{{< /alert >}}

## Come è stato costruito

[Watchfire](https://watchfire.io) ha suddiviso tutto in 10 task. La portata di questo progetto era assurda. Non è una singola app, è un'intera interfaccia di sistema operativo con un gestore di finestre, una barra delle applicazioni, un menu Start e sette applicazioni separate che girano al suo interno. Ognuna aveva bisogno del proprio comportamento, del proprio chrome di finestra, delle proprie interazioni.

La lista dei task copriva prima la shell del desktop (barra delle applicazioni, menu Start, gestione finestre), poi ogni applicazione una per una, e infine i tocchi finali come la sequenza di avvio, la schermata blu, l'effetto scanline CRT e gli effetti sonori.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

Questa cosa si avvia.

![Schermata di avvio](images/screenshot-02.png)

Carichi la pagina e vedi una schermata nera che dice "RetroOS 95 - Click anywhere to start." Clicchi e parte una sequenza POST in modalità testo che scorre, proprio come quella vera. Poi una barra di avanzamento con "Starting RetroOS..." prima che il desktop si carichi.

![Sequenza POST](images/screenshot-03.png)

![Barra di caricamento](images/screenshot-04.png)

Poi appare il desktop e ha l'aspetto giusto. Quella specifica tonalità di verde acqua. La massiccia barra delle applicazioni grigia in basso. Il pulsante Start nell'angolo. Le icone del desktop allineate sul lato sinistro con icone SVG in pixel art che sembrano davvero uscite dal 1995.

![Desktop](images/screenshot-05.png)

**Il menu Start funziona.** Clicca su Start e ottieni il classico menu a cascata con Programmi, Documenti, Impostazioni, Trova, Guida, Esegui e Arresta. Le app sono elencate lì. Ha anche quel bordo smussato 3D per cui Win95 era famoso.

![Menu Start](images/screenshot-06.png)

**Il Terminale è sorprendentemente profondo.** Non è solo un elemento visivo. Puoi digitare `dir` e ottenere un finto elenco di file con AUTOEXEC.BAT e CONFIG.SYS. La formattazione dell'output corrisponde a DOS, fino al formato della data e al conteggio dei byte. Risponde anche a `ver` con una stringa di versione.

![Terminale](images/screenshot-07.png)

![Terminale con output dir](images/screenshot-08.png)

**La Calcolatrice funziona.** Disposizione corretta dei pulsanti, il display incassato, la cornice smussata. Fa calcoli veri. Sembra esattamente quella che aprivi quando ti annoiavi nell'aula di informatica.

![Calcolatrice e Terminale](images/screenshot-09.png)

**Paint è funzionale.** Hai un canvas, una tavolozza di colori in basso e puoi davvero disegnare. La selezione degli strumenti c'è. Ci ho disegnato una faccia perché è quello che tutti facevano in MS Paint nel 1997.

![App Paint](images/screenshot-10.png)

**Internet Explorer ha una finta homepage.** Carica una pagina in stile retrò "Welcome to my Homepage" con testo colorato, contatore di visitatori e un link al guestbook. L'attenzione ai dettagli su questo mi ha colpito.

![IE e altre app](images/screenshot-12.png)

**Risorse del Computer mostra i drive.** Floppy A:, disco rigido C: e CD-ROM D:. È un file browser per un filesystem che non esiste, ma ha esattamente l'aspetto giusto.

![Risorse del Computer](images/screenshot-13.png)

**Campo Minato è giocabile.** La griglia classica con il contatore e la faccina sorridente in alto. Numeri, bandierine, mine. È quello vero.

**Tutte le finestre sono trascinabili e ridimensionabili.** Puoi impilarle, spostarle, minimizzarle nella barra delle applicazioni, e la barra mostra tutte le finestre aperte proprio come faceva il vero OS. L'intero sistema di gestione delle finestre funziona.

![Più finestre aperte](images/screenshot-01.png)

E poi c'è l'easter egg della schermata blu della morte. Non vi svelo come attivarlo, ma c'è, e sembra autentico.

## I bug report

Onestamente, non molto da segnalare qui. La gestione delle finestre ha funzionato al primo colpo. Tutte le app si sono caricate correttamente. Le cose principali che ho notato:

- Alcune finestre potevano sovrapporsi alla barra delle applicazioni se le trascinavi troppo in basso
- L'effetto CRT era un po' pesante sugli schermi più piccoli
- Il primo clic a Campo Minato poteva a volte colpire una mina (la versione vera ti proteggeva da questo)

Roba minore. L'esperienza di base era solida fin da subito.

## Provalo

{{< github repo="nunocoracao/Vibe30-day23-retroos" showThumbnail=true >}}

**[Avvia RetroOS](https://vibe30-day23-retroos.vercel.app)**

Clicca sullo schermo nero per avviare. Clicca su Start per esplorare. Apri tutto. Prova i comandi del Terminale. Disegna qualcosa in Paint. Gioca a Campo Minato. Trova la schermata blu.

![Paint e Calcolatrice affiancati](images/screenshot-11.png)

![File browser Risorse del Computer](images/screenshot-14.png)

## Verdetto del giorno 23

Questo è uno di quei progetti dove il fattore nostalgia da solo vale la costruzione. Ma oltre a questo, la portata tecnica è impressionante. Un gestore di finestre, sette app separate, una sequenza di avvio, effetti sonori, scorciatoie da tastiera, un finto filesystem, un finto internet. Tutto da una singola sessione di prompt.

Quello che mi colpisce è l'attenzione ai dettagli. Il colore verde acqua del desktop. Il grigio specifico del chrome delle finestre. I bordi smussati. Il modo in cui i pulsanti della barra delle applicazioni cambiano quando una finestra è attiva o inattiva. Nessuno gli ha detto di fare bene quei dettagli. L'IA sapeva semplicemente com'era Windows 95 e ha azzeccato l'estetica alla perfezione.

Se sei cresciuto cliccando su Start per la prima volta su un tower beige a metà degli anni '90, vai a provare questo. Ti riporterà dritto a quei tempi.

---

*Questo è il giorno 23 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
