---
title: "30 Days of Vibe Coding - Giorno 30 - miniOs"
description: "Un sistema operativo desktop web costruito interamente nel browser, con tutti i 30 progetti Vibe30 come app installabili."
summary: "Un sistema operativo desktop web costruito interamente nel browser, con tutti i 30 progetti Vibe30 come app installabili."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-30", "nextjs", "react", "typescript", "os"]
series: ["30 Days of Vibe Coding"]
series_order: 30
seriesOpened: false
date: 2026-05-05
draft: false
#type: "hidden"
---

Giorno 30. L'ultimo. Ho costruito un sistema operativo.

Non uno vero. Uno finto nel browser. Ma il tipo di finto dove lo avvii, fai il login, apri un file manager, ridimensioni delle finestre, le agganci agli angoli, cambi workspace, apri un terminale che lancia neofetch, cambi lo sfondo, e poi lanci qualsiasi dei 29 progetti che ho già costruito questo mese come app al suo interno. Quel tipo di finto.

Questo è il progetto finale. Ogni progetto degli ultimi 30 giorni vive dentro questo.

## Il Prompt

> "Costruisci un OS desktop web. Gestione finestre con drag, ridimensionamento, minimizza, massimizza, snap. Workspace multipli. Taskbar, menu start, ricerca spotlight, alt-tab. Sequenza di boot, schermata di login, schermata di blocco, screensaver. Temi scuro e chiaro con colori di accento. Sfondi con parallasse. Widget desktop. App integrate: File Manager, Editor di testo, Terminale con neofetch, Browser, Calcolatrice, Impostazioni, Lettore musicale, Visualizzatore immagini, Paint, Calendario. E ogni singolo progetto Vibe30 deve essere accessibile come app installata."

Il prompt più grande della challenge, per il progetto più grande.

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day30-minios.vercel.app)
{{< /alert >}}

## Come è stato costruito

[Watchfire](https://watchfire.io) ha suddiviso questo in 25 task. Non il numero più alto della challenge (l'editor di codice ha raggiunto 43), ma questo aveva la portata più ampia. Non era una singola app. Era una shell che doveva contenere tutte le altre app.

I task coprivano tutto quello che ti aspetteresti dalla costruzione di un OS (se puoi chiamarlo così): gestione finestre di base, sistema workspace, taskbar e system tray, menu start, ricerca spotlight, lo switcher alt-tab, flussi di boot e login, schermata di blocco e screensaver, motore dei temi, sistema sfondi con parallasse, widget desktop, e poi ogni app integrata come task a sé. Gli ultimi task hanno gestito l'integrazione di tutti i 30 progetti Vibe30 come app lanciabili e la costruzione di un tour di benvenuto.

Ho passato più tempo pratico su questo di tutti i 30 giorni. Non a scrivere codice, ma a testare le interazioni. Lo snap delle finestre ha un sacco di casi limite. Cosa succede quando trascini verso un angolo? E massimizzare una finestra già agganciata? E se cambi workspace mentre una finestra è in fase di trascinamento? Sono il tipo di cose che ho dovuto provare e riportare.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![Desktop miniOs](images/screenshot-01.png)

Si avvia. C'è un'animazione di sequenza di boot con una barra di caricamento e messaggi di sistema che scorrono. Poi una schermata di login. Poi il desktop si carica.

![Boot e login](images/screenshot-02.png)

**La gestione finestre funziona davvero.** Trascina le finestre. Afferra qualsiasi bordo o angolo per ridimensionare. Doppio click sulla barra del titolo per massimizzare. Trascina verso il bordo sinistro per agganciare a sinistra, bordo destro per agganciare a destra, angoli per agganciare ai quadranti. Minimizza nella taskbar e clicca per ripristinare. È il tipo di cosa che sembra semplice ma ha un milione di piccoli dettagli di interazione.

![Gestione finestre](images/screenshot-03.png)

**Quattro workspace.** Passa da uno all'altro con Ctrl+1 fino a Ctrl+4, o clicca nella taskbar. Ogni workspace ha il suo set di finestre. Sembra un vero setup multi-desktop.

**La taskbar è seria.** Pulsante menu start, app pinnate, indicatori finestre aperte, switcher workspace, system tray con orologio. Clicca sul menu start e ottieni un launcher di app per categorie. Premi Cmd+K per la ricerca spotlight e digita per trovare qualsiasi app istantaneamente. Alt+Tab mostra uno switcher di finestre con anteprime.

![Menu start e taskbar](images/screenshot-04.png)

**Temi scuro e chiaro con 9 colori di accento.** Apri Impostazioni, scegli il tuo tema, scegli il tuo colore di accento, e l'intero OS si ridisegna. Ci sono 4 sfondi con un effetto parallasse che risponde al movimento del mouse.

![Impostazioni e temi](images/screenshot-05.png)

**Le app integrate funzionano.** Il File Manager naviga un filesystem virtuale. L'Editor di testo fa undo/redo e può salvare/aprire file. Il Terminale esegue comandi e ha un neofetch funzionante che mostra le info di sistema di miniOs. La Calcolatrice gestisce l'input da tastiera. Paint ti permette di disegnare. Il Calendario funziona.

![App integrate](images/screenshot-06.png)

**E poi ci sono le app Vibe30.** Tutti i 30 progetti compaiono nel menu start sotto la loro categoria. I progetti web si aprono in un iframe integrato direttamente in una finestra miniOs. I progetti TUI e nativi che non possono girare nel browser mostrano una scheda progetto con link al repo e alla demo live. Puoi avere il Platformer in una finestra, Snake in un'altra, e Wordle in una terza, il tutto mentre il Lettore musicale suona in background.

![App Vibe30 in esecuzione](images/screenshot-07.png)

Quest'ultima parte è ciò che lo rende un progetto finale. Non è solo un clone di OS. È un contenitore per l'intera challenge.

## I Report dei Bug

Questo ha avuto la lista di bug più lunga di qualsiasi progetto:

- Le maniglie di ridimensionamento delle finestre erano troppo piccole sul bordo inferiore
- Lo snap agli angoli non funzionava quando una finestra era già massimizzata
- Lo screensaver non si attivava se una finestra aveva il focus
- L'ordine alt-tab era sbagliato dopo aver minimizzato una finestra
- I risultati della ricerca spotlight non si aggiornavano cambiando workspace
- Alcuni iframe Vibe30 non si caricavano a causa degli header X-Frame-Options
- La sequenza di boot era troppo veloce (report di bug ironico, ma doveva sembrare reale)
- L'effetto parallasse era scattoso su Safari

I casi limite della gestione finestre erano il tema principale. Ogni volta che pensavo che lo snap funzionasse, trovavo un'altra combinazione che lo rompeva.

## I Numeri

- **25 task Watchfire** dall'architettura al tour di benvenuto
- **30 progetti Vibe30** integrati come app lanciabili
- **10 app integrate** (File Manager, Editor di testo, Terminale, Browser, Calcolatrice, Impostazioni, Lettore musicale, Visualizzatore immagini, Paint, Calendario)
- **4 workspace**, **9 colori di accento**, **4 sfondi**, **2 temi**
- **Next.js 16, React 19, TypeScript, Tailwind CSS 4**

## Provalo

{{< github repo="nunocoracao/Vibe30-day30-minios" showThumbnail=true >}}

**[Apri miniOs](https://vibe30-day30-minios.vercel.app)**

Migliore esperienza su desktop. Prova le scorciatoie da tastiera: Cmd+K per spotlight, Ctrl+1-4 per i workspace, Alt+Tab per cambiare finestra.

## Verdetto del Giorno 30

Continuo a tornare sull'assurdità di tutto questo. Ho chiesto a un'IA di costruirmi un sistema operativo e l'ha fatto. Non una demo giocattolo con una finta taskbar e niente dietro. Una cosa con vera gestione finestre, vero isolamento workspace, vera navigazione da tastiera, vero sistema di temi, e 40 applicazioni funzionanti al suo interno.

È un vero OS? Ovviamente no. Ma è un vero software. Lo snap delle finestre da solo è qualcosa che farei fatica a implementare correttamente da solo. Tutti i 30 progetti di questa challenge possono girare al suo interno, simultaneamente, nelle loro finestre, su workspace separati.

Giorno 1, ho costruito un platformer da una singola frase. Giorno 30, ho costruito un sistema operativo che contiene il platformer, e tutto quello che ho fatto nel mezzo.

Trenta progetti. Trenta giorni. Fatto.

---

*Questo è il giorno 30 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Questo era l'ultimo progetto, ma c'è ancora un post in arrivo: il riepilogo completo con tutto quello che ho imparato spedendo 30 progetti in 30 giorni.*
