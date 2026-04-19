---
title: "30 Days of Vibe Coding - Giorno 14 - WeatherTUI"
description: "Una dashboard meteo da terminale con scene meteo in arte ASCII, effetti animati e supporto multi-località."
summary: "Una dashboard meteo da terminale con scene meteo in arte ASCII, effetti animati e supporto multi-località."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-14", "python", "tui", "weather", "textual"]
series: ["30 Days of Vibe Coding"]
series_order: 14
seriesOpened: false
date: 2026-04-19
draft: false
#type: "hidden"
---

Giorno 14. Volevo vedere com'è un'app meteo quando togli ogni framework UI moderno e forzi tutto in un terminale.

## Il Prompt

> "Costruisci una dashboard meteo da terminale con scene meteo in arte ASCII, effetti meteo animati e supporto multi-località"

## Come è stato costruito

Ho usato [Watchfire](https://watchfire.io) e ha suddiviso il lavoro in 23 task. Sembra tanto per un'app meteo, ma lo scope è cresciuto in fretta una volta che l'arte ASCII e le animazioni sono entrate in gioco.

La lista di task copriva prima le cose prevedibili: setup del progetto, integrazione API con Open-Meteo, layout di base. Poi è entrata nel territorio divertente: 12 scene meteo uniche in arte ASCII (sole, luna, pioggia, neve, temporale, nebbia, vento, nuvole), effetti animati a particelle per ogni condizione meteo, grafici di temperatura e precipitazioni, viste previsioni orarie e giornaliere, una dashboard multi-località, temi colore, supporto mouse e un layout scrollabile.

23 task. Non sono rimasto lì a guidare ognuno. Watchfire li ha messi in coda e li ha elaborati mentre facevo altro.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

Questo mi ha sorpreso più della maggior parte.

![Vista dettagliata con informazioni meteo](images/screenshot-10.png)

**L'arte ASCII è davvero impressionante.** Ogni condizione meteo ha la sua scena. C'è un grande cielo coperto con strati di nuvole, pioggia con gocce che cadono, neve con fiocchi che fluttuano, un sole con raggi che irradiano. L'arte è dettagliata e riempie il terminale con un vero carattere. Non il tipo pigro "piove: //" di arte ASCII. Vere scene multi-riga con ombreggiature e profondità.

**Le animazioni sono fluide.** Le gocce di pioggia cadono. I fiocchi di neve fluttuano. Le stelle brillano nel cielo notturno. Le particelle di vento soffiano attraverso lo schermo. I fulmini lampeggiano durante i temporali. Tutto questo in un terminale. Si possono mettere in pausa e riprendere le animazioni con un singolo tasto.

![Dashboard con più località](images/screenshot-02.png)

**La dashboard è pulita.** Più località mostrate in una griglia, ognuna con una piccola icona meteo ASCII, temperatura attuale e condizioni a colpo d'occhio. Cliccate su qualsiasi card o premete un tasto numerico per entrare nella vista dettagliata di quella località.

![Vista dettagliata per New York](images/screenshot-08.png)

**La vista dettagliata ha tutto.** Indice di qualità dell'aria, orari alba/tramonto, indice UV con codifica colore, barra di umidità, velocità e direzione del vento, copertura nuvolosa, dettaglio precipitazioni (pioggia vs neve). Più una previsione a 7 giorni in basso con mini arte ASCII per ogni giorno. Si può anche passare a una vista oraria su 12 ore.

![Ricerca località](images/screenshot-03.png)

![Risultati di ricerca per Lisbona](images/screenshot-04.png)

**La gestione delle località funziona bene.** Cercate qualsiasi città nel mondo, aggiungetela alla dashboard, riordinate le località, impostate un default. La ricerca di geocoding restituisce risultati velocemente e l'interfaccia di selezione è pulita.

![Dashboard con quattro località](images/screenshot-05.png)

**Quattro temi colore.** Default, oceano (blu e ciano), tramonto (arancioni caldi) e foresta (verdi e toni terrosi). Premete `t` per scorrerli. La vostra preferenza viene salvata in un file di configurazione.

![Selettore di temi](images/screenshot-06.png)

![Tema oceano applicato](images/screenshot-07.png)

**Nessuna chiave API necessaria.** Usa l'API gratuita Open-Meteo, quindi clonate, installate le dipendenze e lanciate. Nessuna registrazione, nessun token, nessuna configurazione necessaria.

## I Numeri

- **12 scene meteo uniche in arte ASCII** con effetti animati corrispondenti
- **4 temi colore** con preferenze persistenti
- **23 task Watchfire** dal setup alla rifinitura finale
- **Costruito con Python e Textual** (il framework TUI di Textualize)
- **Tempo totale di interazione:** forse 20 minuti a provare diverse città e scorrere i temi

## Provalo

{{< github repo="nunocoracao/Vibe30-day14-weathertui" showThumbnail=true >}}

Clonate il repo e lanciate `python -m weather_tui`. Nessuna chiave API necessaria. Tasti freccia per navigare, tasti numerici per saltare tra le località, `t` per cambiare tema, `?` per la lista completa delle scorciatoie da tastiera.

## Verdetto del Giorno 14

La sola arte ASCII mi avrebbe richiesto giorni per essere progettata a mano. Gli effetti meteo animati in aggiunta? Non ci avrei nemmeno provato.

Quello che mi colpisce è l'attenzione ai dettagli. Le card delle previsioni a 7 giorni hanno ognuna la propria piccola icona meteo ASCII. L'umidità si mostra come una barra di progresso. Il vento include sia la velocità che la direzione cardinale. L'indice UV cambia colore in base alla severità. Niente di tutto questo è stato specificato esplicitamente. L'IA ha semplicemente capito che una dashboard meteo ha bisogno di questi elementi e li ha costruiti tutti.

Le app da terminale sembrano essere un sweet spot per il coding assistito da IA. I vincoli di un'interfaccia testuale aiutano a concentrare il risultato piuttosto che a limitarlo.

---

*Questo è il giorno 14 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Seguite l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito da IA.*
