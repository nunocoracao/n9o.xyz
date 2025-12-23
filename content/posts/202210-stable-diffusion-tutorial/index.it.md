---
title: "Come Eseguire Stable Diffusion sul Tuo Laptop"
description: "Nell'ultimo anno, diversi modelli di machine learning sono diventati disponibili al pubblico per generare immagini da descrizioni testuali. Questo è stato uno sviluppo interessante nello spazio dell'IA. Tuttavia, solo di recente questa tecnologia è diventata disponibile per tutti."
summary: "Nell'ultimo anno, diversi modelli di machine learning sono diventati disponibili al pubblico per generare immagini da descrizioni testuali. Questo è stato uno sviluppo interessante nello spazio dell'IA. Tuttavia, solo di recente questa tecnologia è diventata disponibile per tutti."
categories: ["Tecnologia","Tutorial"]
tags: ["IA","Stable Diffusion","Rete Neurale"]
#externalUrl: ""
date: 2022-10-06
draft: false
series: ["Il Nuovo Hype dell'IA"]
series_order: 3
---

Nell'ultimo anno, diversi modelli di machine learning sono diventati disponibili al pubblico per generare immagini da descrizioni testuali. Questo è stato uno sviluppo interessante nello spazio dell'IA. Tuttavia, la maggior parte di questi modelli è rimasta closed source per valide ragioni etiche. Per questo motivo, anche se puoi interagire con loro tramite qualche interfaccia, sei limitato nel numero di cose che puoi testare. Fino ad ora…

L'ultimo di questi modelli è Stable Diffusion, un modello di machine learning aperto sviluppato da <a href="https://stability.ai/" target="_blank">Stability AI</a> per generare immagini digitali da descrizioni in linguaggio naturale. Questo modello è diventato piuttosto popolare, principalmente perché è stato il primo ad essere open source.

Ho già giocato con <a href="https://openai.com/dall-e-2/" target="_blank">Dall-E</a> e <a href="https://www.midjourney.com/home/" target="_blank">Midjourney</a>, ma volevo provare a eseguire un modello localmente e avere più libertà di sperimentare. Sono riuscito a installare e far funzionare il modello con successo sul mio M1 Pro e sul mio desktop Windows. Questa guida dettaglia i passaggi che ho seguito per far funzionare tutto sul mio Mac.

## Note Iniziali
Un paio di note prima di iniziare. Ho provato diverse guide online e non sono riuscito ad avere un'esperienza fluida con nessuna di esse. Ho dovuto provare numerosi repo, soluzioni, ecc. L'obiettivo principale di questa guida è fornire istruzioni su come eseguire Stable Diffusion su un M1, dove ho trovato più sfide. L'installazione su Windows è stata molto più semplice.

Detto questo, il repo che ho finito per usare ha guide dettagliate per tutte le piattaforme: <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_WINDOWS.md" target="_blank">Windows</a>, <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md" target="_blank">Mac</a> e <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_LINUX.md" target="_blank">Linux</a>. Non esitare a usare una di quelle se stai usando un'altra piattaforma o se questa guida non funziona per te su Mac.

{{< alert >}}
*Nota: Non ho provato la guida Mac sopra, poiché quando ho trovato questo repo avevo già capito la maggior parte dei workaround necessari per far funzionare il modello.*
{{< /alert >}}

## Ottenere il Codice

Iniziamo ottenendo il codice. Sto usando <a href="https://github.com/invoke-ai/InvokeAI" target="_blank">il fork di Stable Diffusion di InvokeAI</a>, che ho forkato <a href="https://github.com/nunocoracao/InvokeAI" target="_blank">qui</a>. Sei libero di usare il repo originale di InvokeAI se preferisci. Userò il mio fork per assicurare che la guida rimanga aggiornata e funzionante nel tempo.

Per iniziare, clona il repo sulla tua macchina locale.

```bash
git clone https://github.com/nunocoracao/InvokeAI
```

## Ottenere il Modello

Ora devi ottenere il modello vero e proprio che contiene i pesi per la rete. Questo è il risultato di cicli massivi di training con dataset enormi con cui un utente normale con hardware medio non può competere. Il modello non è distribuito con il codice per le sue dimensioni (circa 7,5 GB) e per assicurare che gli utenti debbano conformarsi a una licenza.

Vai semplicemente sul <a href="https://huggingface.co/" target="_blank">sito di Hugging Face</a> e accedi, o crea un account se non ne hai uno. Una volta configurato, clicca <a href="https://huggingface.co/CompVis/stable-diffusion-v-1-4-original" target="_blank">qui</a>, accetta i termini sulla model card e scarica il file chiamato `sd-v1-4-full-ema.ckpt`. Dopo aver scaricato il modello, vai nella cartella del codice e posizionalo in `models/ldm/stable-diffusion-v1/` con il nome `model.ckpt`. La cartella `stable-diffusion-v1` non esiste e deve essere creata.

{{< alert >}}
*Nota: ci sono altre varianti del modello che puoi esplorare, questa è quella raccomandata dalla maggior parte dei repo che ho visto.*
{{< /alert >}}

## Configurare l'Ambiente

Con il codice e il modello pronti, il passo successivo è configurare l'ambiente locale per eseguire tutto.

### Installare Xcode

Il primo passo è installare Xcode. Xcode può essere installato dall'App Store, o puoi scaricarlo dal sito Developer di Apple.

```bash
xcode-select --install
```

### Installare Conda

La maggior parte delle soluzioni che ho visto usa <a href="https://docs.conda.io/projects/conda/en/latest/#" target="_blank">Conda</a> per gestire i pacchetti e gli ambienti necessari. La guida di installazione di Conda per qualsiasi piattaforma è super chiara, quindi ti consiglio di seguire le istruzioni <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation" target="_blank">qui</a>.

```bash
conda
```

Se il processo di installazione ha avuto successo, dovresti vedere qualcosa come l'immagine sotto.

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/conda_result.webp"/>

### Installare Rust

Quando seguivo altre guide, avevo sempre problemi nella parte successiva del processo, la costruzione degli ambienti. Dopo molti tentativi, ho capito che mi mancava il compilatore Rust.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Costruire e Attivare l'Ambiente

Ci siamo quasi. Ora creeremo l'ambiente `ldm` e lo attiveremo prima di iniziare a generare immagini.

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env create -f environment-mac.yml
```

Ora è il momento di attivare l'ambiente usando:

```bash
conda activate invokeai
```

L'ultimo passo è precaricare i modelli usando il comando:

```bash
python scripts/preload_models.py
```

## Divertiti…

Ora è il momento di iniziare a giocare con Stable Diffusion. Esegui:

```bash
python scripts/invoke.py --full_precision --web
```

E apri il tuo browser su `localhost:9090`

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/webui_new.webp"/>

## Alcuni Esempi

Ecco alcuni esempi di immagini dalle mie prime esecuzioni del modello.

- <a href="https://decentralizedcreator.com/10-best-text-to-image-prompts-for-ai-art-generator-disco-diffusion-a-visual-treat-inside/" target="_blank">10 Migliori Prompt Text-to-Image per Generatore di Arte IA</a>
- <a href="https://prompthero.com/" target="_blank">Prompthero</a>

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000008.2887160172.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000023.4136023390.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000024.2854274560.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000028.4255152621.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000031.1604394908.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000036.1662843642.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000043.2287582219.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000045.234321637.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000057.107659121.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000058.157499426.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000063.2383238266.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000067.2841883613.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000102.4159217524.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000116.829934269.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000145.2404672998.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000149.811067720.webp"/>
  </div>
</div>

## Disclaimer & Altre Opzioni

Ci sono una tonnellata di opzioni per eseguire il modello Stable Diffusion, alcune locali, alcune nel cloud (es. Google Colab), quindi non frustrarti se vuoi provare questo ma non hai accesso a una macchina che può eseguirlo. Ci sono probabilmente altre soluzioni che puoi usare.

Taggami sui social con le tue creazioni se riesci a farlo funzionare:

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://twitter.com/nunocoracao" target="_blank" >}}
    {{< icon "twitter" >}}&nbsp;
    Seguimi su Twitter
    {{< /button >}}
  </div>
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://www.instagram.com/nunocoracao/" target="_blank" >}}
    {{< icon "instagram" >}}&nbsp;
    Seguimi su Instagram
    {{< /button >}}
  </div>
</div>
