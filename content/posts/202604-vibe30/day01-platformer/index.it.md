---
title: "30 Days of Vibe Coding - Giorno 1 - Platformer"
description: "Un gioco platformer basato su browser con 10 livelli, costruito con JavaScript vanilla e HTML5 Canvas."
summary: "Un gioco platformer basato su browser con 10 livelli, costruito con JavaScript vanilla e HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-01", "javascript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 1
seriesOpened: false
date: 2026-04-06
draft: false
---

Giorno 1. Vediamo cosa succede quando chiedo a un'AI di costruirmi un gioco.

## Il Prompt

Ho iniziato con questo:

> "Voglio creare un platformer web con 10 livelli"

Tutto qui. Questa era l'intera direzione creativa.

## Come È Stato Costruito

Questo è stato uno dei primi progetti per cui ho usato [Watchfire](https://watchfire.io). Ho fornito il singolo prompt e ha suddiviso il lavoro in 21 attività separate:

1. Configurazione del progetto e canvas di gioco
2. Nucleo del motore di gioco con game loop e rendering
3. Personaggio del giocatore con movimento e animazioni
4. Fisica e rilevamento delle collisioni
5. Sistema di piattaforme e ostacoli
6. Sistema di livelli con loader e camera
7. Livelli facili (1-3)
8. Livelli medi (4-6) con pericoli
9. Livelli difficili (7-10)
10. Sistema UI/HUD
11. Stati di gioco e menu
12. Sistema audio con effetti sonori 8-bit e musica
13. Rifinitura, sistema di salvataggio, controlli touch

Poi sono arrivate le segnalazioni di bug: correzione della compatibilità con i browser, ristrutturazione per il deployment e diversi bug di gameplay che ho riscontrato durante il playtest.

Non stavo lì ad approvare ogni modifica ai file. Watchfire ha messo in coda le attività e le ha portate a termine. Sono tornato con un gioco funzionante e poi l'ho sottoposto a playtest.

## Cosa Ho Ottenuto

Non me lo aspettavo.

![Menu principale](images/screenshot-01.webp)

**Ha una grafica vera.** Non quadrati segnaposto. C'è un piccolo personaggio con gli occhi, piattaforme con colori diversi, effetti particellari quando si atterra. Il tutto ha uno stile visivo coerente che non avevo certo specificato.

**Ha la musica.** Musica di sottofondo 8-bit che va in loop mentre giochi. Non avevo mai chiesto l'audio. L'ha aggiunta e basta.

![Gameplay livello 1](images/screenshot-02.webp)

**I livelli diventano davvero più difficili.** Il livello 1 è un tutorial tranquillo chiamato "First Steps." Dal livello 4 ci sono delle spine ("Danger Ahead"). Il livello 7 si chiama "Speed Demon." La curva di difficoltà esiste ed è sensata.

![Livello 4 con pericoli](images/screenshot-05.webp)

**C'è un sistema di menu completo.** Menu principale, selezione livello, schermata di pausa, schermata di game over, schermata di completamento livello. Posso scegliere qualsiasi livello che ho sbloccato. È molto più rifinito di quello che avevo chiesto.

![Selezione livello](images/screenshot-06.webp)

**Salva i miei progressi.** Chiudo il browser, torno più tardi, i livelli sbloccati sono ancora lì. Persistenza con localStorage che non avevo richiesto.

**18 moduli.** GameEngine, Player, Physics, Camera, LevelLoader, LevelManager, ParticleSystem, AudioManager, SaveManager, TouchControls... ha costruito un'architettura vera con separazione delle responsabilità. Ogni modulo ha una responsabilità precisa. Non avevo specificato nulla di tutto questo.

## Le Segnalazioni di Bug

Non era perfetto al primo tentativo. Ho dovuto fare il playtest e segnalare i problemi:

- "Vedo solo un rettangolo blu" (compatibilità browser, serviva un polyfill per roundRect)
- "Il livello non finisce quando raggiungo la bandiera"
- "Il giocatore continua a muoversi a destra quando inizio il livello successivo"
- "La selezione livello carica sempre il livello 1"
- "La musica è troppo ripetitiva"

Descrizioni semplici. Non ho fatto debug da solo, ho solo descritto quello che vedevo. Le correzioni sono arrivate e hanno funzionato.

![Livello 7](images/screenshot-07.webp)

![Game over](images/screenshot-08.webp)

## I Numeri

- **18 moduli di gioco** con chiara separazione delle responsabilità
- **10 livelli** con definizioni di livello in JSON
- **~3.500 righe di JavaScript vanilla** (nessun framework per il gioco stesso)
- **21 attività Watchfire** dalla configurazione iniziale alle correzioni finali dei bug
- **Tempo totale dedicato:** forse 30 minuti di playtest e scrittura delle segnalazioni di bug

## Provalo

{{< github repo="nunocoracao/Vibe30-day01-ThePlatformer" showThumbnail=true >}}

**[Gioca al Platformer](https://vibe30-day01-the-platformer.vercel.app)**

Tasti freccia o WASD per muoversi, spazio per saltare. Funziona anche su mobile.

## Il Verdetto del Giorno 1

Un prompt di una frase. Un gioco completo con 10 livelli, musica, menu e un sistema di salvataggio.

Ecco la cosa: non so come costruire un platformer. Non ho mai scritto un motore di gioco, non ho mai implementato il rilevamento delle collisioni, non ho mai progettato un sistema di progressione dei livelli. Non avrei potuto costruirlo da solo. Non in un giorno, probabilmente nemmeno in una settimana.

È il miglior platformer mai realizzato? Neanche lontanamente. Ma esiste. Funziona. La gente ci può giocare. E mi ha richiesto un paio d'ore invece di settimane. Questo è ciò che è cambiato. Il costo di produrre qualcosa di così complesso è appena calato drasticamente. E se volessi, potrei continuare a rifinirlo, aggiungere livelli, migliorare la fisica. Il punto di partenza non è più un file vuoto.

Penso che questo sarà un modello per tutti i 30 progetti. Non costruirò la versione migliore di nulla. Ma costruirò una versione funzionante di cose che non avrei potuto costruire prima, e lo farò velocemente.

---

*Questo è il giorno 1 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Seguimi mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'AI.*
