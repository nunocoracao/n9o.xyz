---
title: "30 Days of Vibe Coding - Giorno 25 - SoundScape"
description: "Un mixer di suoni ambientali con audio generato proceduralmente, preset, un generatore di beat lo-fi e mix condivisibili."
summary: "Un mixer di suoni ambientali con audio generato proceduralmente, preset, un generatore di beat lo-fi e mix condivisibili."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-25", "web-audio", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 25
seriesOpened: false
date: 2026-04-30
draft: false
#type: "hidden"
---

Giorno 25. Mi sono costruito esattamente l'app che userei davvero mentre costruivo tutti gli altri giorni.

## Il Prompt

L'idea era semplice: un mixer di suoni ambientali dove sovrapponi suoni insieme per creare un'atmosfera di sottofondo per lavorare, rilassarti o dormire. Pensa a quei video YouTube "atmosfera da caffetteria", ma interattivo e personalizzabile.

Il vincolo interessante era che volevo che tutto l'audio fosse generato proceduralmente usando la Web Audio API. Niente file di campioni, niente asset audio da caricare. Tutto sintetizzato nel browser.

{{< alert icon="fire">}}
Provalo tu stesso [qui](https://vibe30-day25-soundscape.vercel.app)
{{< /alert >}}

## Come è stato costruito

[Watchfire](https://watchfire.io) ha suddiviso tutto in 10 task. Il piano iniziale in realtà usava Howler.js con file audio pre-registrati, ma ho cambiato rotta presto verso la generazione procedurale con la Web Audio API. Questo significa che ogni suono che senti, dalla pioggia al crepitio di un camino, viene generato matematicamente in tempo reale. Niente MP3, niente download, niente schermate di caricamento.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

![Vista principale di SoundScape](images/screenshot-01.png)

**12 suoni divisi in 3 categorie.** Natura, Urbano e Accogliente. Ognuno ha la sua card con uno slider del volume, e puoi mixare come vuoi. La categoria Natura ha cose come pioggia, foresta e onde dell'oceano. Urbano ha il chiacchiericcio da caffetteria e il rumore di tastiera. Accogliente ha il crepitio del camino.

![Controlli principali](images/screenshot-02.png)

**I controlli principali sono puliti.** Tre slider in alto per Ambiente, Musica e volume generale, più un pulsante timer per la modalità sonno. L'interfaccia con glassmorfismo è davvero bella sullo sfondo scuro.

![Suoni attivi con il preset Forest Cabin](images/screenshot-03.png)

**I preset lo rendono subito utile.** Ci sono quattro preset integrati: Rainy Coffee Shop, Forest Cabin, Late Night Coding e Ocean Breeze. Un click e ottieni un mix curato. Forest Cabin, per esempio, attiva Foresta, Vento, Uccelli e Camino a diversi livelli di volume. Puoi anche salvare i tuoi preset personalizzati nel localStorage.

![Griglia suoni - Natura e Urbano](images/screenshot-05.png)

![Griglia suoni - Categoria Accogliente](images/screenshot-06.png)

**Ogni suono è generato proceduralmente.** La pioggia è rumore bianco modellato con filtri. Il vento sono oscillatori a bassa frequenza con modulazione lenta. Gli uccelli sono brevi cinguettii a onda sinusoidale con tempistiche casuali. Il camino è rumore filtrato con scoppiettii improvvisi. Niente di tutto questo suona perfetto, ma tutto è riconoscibile e si mescola abbastanza bene da far sì che il cervello riempia le lacune.

![Generatore di beat lo-fi](images/screenshot-04.png)

**C'è un generatore di beat lo-fi.** Non era nel piano originale ma è spuntato come bonus. Ha preset di umore (Chill, Happy, Sad, Dreamy) e controlli individuali per Batteria, Basso, Tastiere, Melodia e crepitio Vinile. Gira a 74 BPM e produce davvero qualcosa che vorresti in sottofondo. I beat si sovrappongono ai suoni ambientali, quindi puoi avere pioggia più beat lo-fi più un camino tutto insieme.

**Lo sfondo cambia con il tuo mix.** Un gradiente dinamico di sfondo cambia in base a quali suoni sono attivi. I mix pesanti sulla natura tendono verso verdi e blu, l'urbano verso toni più caldi. È sottile ma rende tutto più vivo.

**Condividi via URL.** Puoi condividere il tuo mix esatto con qualcuno copiando l'URL. Codifica quali suoni sono attivi e i loro livelli di volume, quindi chiunque apra il link ottiene esattamente la tua configurazione.

**Scorciatoie da tastiera ovunque.** Spazio per mettere tutto in pausa, tasti numerici 1-9 e 0 per attivare/disattivare i singoli suoni, Escape per fermare tutto. Il timer per il sonno fa una dissolvenza graduale sulla durata scelta (15, 30, 60 o 90 minuti).

## I Bug

L'approccio con audio procedurale significava che la maggior parte dei bug erano legati all'audio:

- Alcuni suoni avevano click e pop quando venivano attivati e disattivati (serviva un ramping del gain corretto)
- Il timing del generatore di beat lo-fi derivava leggermente nelle sessioni lunghe
- Alcuni suoni sintetizzati erano troppo aggressivi a volume pieno prima che i filtri fossero regolati

Niente di grave. La Web Audio API è potente ma spietata se non gestisci correttamente il ciclo di vita del contesto audio.

## Provalo

{{< github repo="nunocoracao/Vibe30-day25-soundscape" showThumbnail=true >}}

**[Apri SoundScape](https://vibe30-day25-soundscape.vercel.app)**

Esperienza migliore con le cuffie. Prova il preset "Late Night Coding" e attiva i Beat Lo-Fi.

## Verdetto del Giorno 25

C'è qualcosa di soddisfacente nel mixare il proprio sottofondo ambientale invece di cercare il video YouTube o la playlist Spotify giusta. E il fatto che sia tutto generato proceduralmente significa che non ci sono loop, niente ripetizioni. La pioggia continua semplicemente, sempre leggermente diversa.

La Web Audio API è sottovalutata. Non avevo idea che si potessero sintetizzare così tanti suoni diversi puramente con oscillatori, generatori di rumore e filtri. Non è qualità da studio, ma per un'ambientazione di sottofondo funziona sorprendentemente bene. Zero file audio significa che l'app si carica istantaneamente e funziona offline.

Mancano cinque giorni.

---

*Questo è il giorno 25 di [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre consegno 30 progetti in 30 giorni usando il coding assistito dall'IA.*
