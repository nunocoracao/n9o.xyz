---
title: "Il Nuovo Hype sull'Intelligenza Artificiale"
summary: "Negli ultimi anni, l'hype intorno all'intelligenza artificiale è aumentato (di nuovo). La maggior parte è dovuta a ricerche rivoluzionarie e showcase innovativi nel campo. Dalle macchine che vincono giochi complessi come Go e Dota 2, a varie tecniche di generazione di contenuti, queste tecnologie avranno un impatto sul nostro futuro."
categories: ["Prodotto","Strategia","Tecnologia"]
tags: ["Stable Diffusion","Midjourney","Dall-e","IA", "Machine Learning"]
# externalUrl: ""
date: 2022-10-25
draft: false
series: ["Il Nuovo Hype dell'IA"]
series_order: 1
---

Negli ultimi anni, l'hype intorno all'intelligenza artificiale è aumentato (di nuovo). La maggior parte è dovuta a aziende come [OpenAI][1], [Google][2], [DeepMind][3] (sussidiaria di Google), [Meta][4] e altre che producono ricerche rivoluzionarie e showcase innovativi nel campo. Dalle macchine che vincono giochi complessi come [Go][5] e [Dota 2][6] a una varietà di tecniche di generazione di contenuti che producono testo, immagini, audio e ora video, queste tecnologie avranno un impatto sul nostro futuro.

Sembra che abbiamo già sperimentato questo hype verso l'IA in passato, ma non si è mai materializzato in qualcosa di rilevante per le nostre vite. Dai tentativi di Watson di IBM di rivoluzionare la sanità alle _profezie_ delle auto a guida autonoma, ci è sempre stato detto come l'IA migliorerà la nostra società, eppure sembra sempre esserci qualcosa che ci impedisce di arrivarci.

Tuttavia, questa volta sembra diverso. In primo luogo, i casi d'uso sono molto meno ambiziosi rispetto al passato e hanno applicazioni pratiche (e divertenti) concrete; in secondo luogo, la ricerca negli ultimi 5-10 anni ha avuto alcuni dei maggiori progressi di sempre nei campi del machine learning e deep learning. [Generative Adversarial Networks (GANs)][7], [Diffusion Models][8] e [Transformer Models][9] sono buoni esempi di tali breakthrough.

{{< alert >}}
Si stima che OpenAI abbia speso circa 10-20 milioni di dollari per addestrare il suo modello text-to-text GPT-3. Il costo dovrebbe essere più alto con i modelli che trattano immagini.
{{</ alert >}}

## Dove siamo e come ci siamo arrivati?

Quindi, dove siamo adesso? Negli ultimi 5-7 anni, diverse innovazioni specifiche e applicazioni pratiche dell'IA hanno portato la tecnologia (e le sue rispettive implicazioni) alla discussione pubblica.

**2015 - Google crea DeepDream - [Leggi di più][10]**

Google rilascia un nuovo metodo usando [Reti Convoluzionali][11] che può _sognare_ nuove immagini basate sul suo training set.

**2016 - Google costruisce AlphaGo che batte il campione mondiale di Go - [Leggi di più][12]**

AlphaGo è stato addestrato usando tecniche di [apprendimento non supervisionato][13] per far competere la rete contro se stessa milioni di volte.

**2019 - OpenAI Five batte i campioni di Dota 2 - [Leggi di più][14]**

OpenAI Five è stato addestrato usando tecniche simili ad AlphaGo.

**2020 - OpenAI rivela GPT-3 - [Leggi di più][15]**

**Generative Pre-trained Transformer 3 (GPT-3)** è un modello di linguaggio autoregressivo che usa il deep learning per produrre testo simile a quello umano.

{{< youtube TfVYxnhuEdU >}}

**2021/22 - OpenAI annuncia Dall-E e Dall-E 2 - [Leggi di più][17]**

Dall-E e Dall-E 2 sono reti addestrate usando diffusion models per generare immagini da prompt testuali.

**2022 - Leap Motion rilascia Midjourney - [Leggi di più][19]**

Midjourney è anche un modello text-to-image con capacità simili a Dall-E.

**2022 - Stable Diffusion rilasciato da Stability AI, CompVis LMU e Runway - [Leggi di più][20]**

Stable Diffusion è un altro modello per generare immagini da prompt testuali. La differenza principale è che è open source.

{{< youtube 6AmdZoSgTeE >}}

## È magia?

Tutti questi recenti progressi sono principalmente attribuiti a tre grandi pietre miliari nella ricerca sul Deep Learning: [Generative Adversarial Networks (GANs)][21], [Diffusion Models][22] e [Transformer Models][23].

**GAN** è stato un framework rivoluzionario per addestrare reti massive. Ad alto livello, il metodo definisce che due reti diverse competeranno l'una contro l'altra in un gioco dove solo una può vincere. I [Deepfakes][24], ad esempio, sono solitamente generati usando questo metodo.

I **Diffusion Models** sono stati creati in modo che il problema della generazione di un'immagine valida non avvenga in un passo, ma lungo un processo di _denoising_ che può richiedere _N_ passi.

{{< youtube 1CIpzeNxIhU >}}

Infine, abbiamo i **Transformer Models**, uno dei progressi più importanti nel campo del machine learning. Questi modelli sono reti neurali che possono imparare il contesto e quindi dedurre il significato da dati sequenziali.

## Democratizzazione dell'IA

Una delle principali differenze tra questa _ondata di hype dell'IA_ e quelle passate è che il numero di persone che possono provarla e interagire con essa è molto maggiore di quanto non sia mai stato.

Da un'altra angolazione, non ci sono mai stati così tanti progressi resi disponibili come tecnologie open source. OpenAI ha recentemente rilasciato [whisper][27] e il suo [modello Dall-E 2][28] al pubblico. Il modello Stable Diffusion è anche disponibile per la community. Se sei interessato a eseguire Stable Diffusion localmente, ho scritto un tutorial a riguardo.

{{< article link="/posts/202210-stable-diffusion-tutorial/" >}}

Una delle aziende che sta guidando questi sforzi è [HuggingFace][29]. Un esempio è [BLOOM][30], un modello di linguaggio open source creato collaborativamente da milioni di ricercatori.

Questa democratizzazione dell'IA è una caratteristica unica di questa nuova ondata di hype:

- **I casi d'uso sono divertenti e tutti possono provarli**
- **Quasi tutti possono provarlo anche se non capiscono come funziona**
- **La community può costruirci sopra facilmente**

## Cosa puoi farci oggi?

Questi modelli e tecnologie stanno commoditizzando la capacità di generare contenuti, che era l'ultimo passo nella _Catena del Valore della Propagazione delle Idee_ che doveva ancora essere fondamentalmente disrupted dalla tecnologia.

Come esempio, ho usato Stable Diffusion per generare la thumbnail di questo articolo.

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000104.1330334134.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000108.1301020889.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000121.1119286522.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000126.2675941357.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:200px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000085.2682514393.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:200px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000145.2404672998.webp"/>
  </div>
</div>

Inoltre, ci sono già interi siti focalizzati sull'indicizzazione e fornitura dei migliori prompt. [Lexica][31] e [Prompthero][32] sono due esempi.

## Oltre le immagini

Ho iniziato a giocare con Stable Diffusion un paio di settimane fa, e devo ammettere che le notizie uscite da allora mi hanno stupito.

{{< x user="mkbhd" id="1582772722240999425" >}}

Sono stato sorpreso che ci fossero già risultati così buoni per i modelli text-to-video. Quella settimana ho scoperto una startup chiamata [Runway][33] che sta lavorando a un editor video alimentato da tutte queste innovazioni di machine learning. Ho anche visto articoli sulla nuova rete text-video di Google, [Imagen Video][34], e l'annuncio di Meta di [Make-a-Video][35].

Tuttavia, la più sorprendente (e anche un po' inquietante per le potenziali implicazioni) è stata un podcast in cui Joe Rogan intervista Steve Jobs, creato da [podcast.ai][36]. Steve Jobs è notoriamente deceduto. Quei due uomini non hanno mai avuto la possibilità di essere nella stessa stanza insieme, eppure ci sono 20 minuti di audio di loro che parlano come se la conversazione fosse avvenuta.

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/22f16c7f"></iframe>

Mentre pensavo agli impatti dell'uso di queste tecnologie per _emulare_ persone che non sono più tra noi, mi sono imbattuto in [questo articolo][37]. Ci sono aziende come DeepBrain AI che già monetizzano un tale servizio.

## Potenziali insidie

### Legali & Etiche

Una delle potenziali insidie sono le implicazioni legali ed etiche di questi nuovi sistemi di IA. Chi possiede il prodotto finale quando si genera un'immagine? La persona che crea il prompt? Il team che costruisce il modello? Gli artisti le cui immagini erano nel training set?

Una delle discussioni rilevanti su questo argomento riguarda i problemi di copyright del prodotto Copilot di GitHub. Maggiori informazioni [qui][38].

Gli artisti stanno anche scoprendo come la loro arte è stata usata per addestrare questi modelli e non sono [contenti][39].

### Valore percepito & Contraccolpo

Inizialmente pensavo che questa tecnologia avrebbe reso tutti buoni artisti, ma dopo averci giocato, non ne sono più convinto. Al momento, penso che queste tecnologie permetteranno alle persone normali di _creare_ qualcosa, ma daranno agli artisti professionisti **superpoteri**.

C'è già una nuova area chiamata [Prompt Engineering][42].

## Cosa succede dopo?

Con il disclaimer sopra, ecco cosa penso succederà in questo spazio nei prossimi 2-5 anni:

- **Le questioni legali sulla proprietà aumenteranno fino a quando non verrà trovata una buona soluzione**
- **Aumento drammatico dei finanziamenti per le aziende che lavorano su questi problemi**:
  - [StabilityAI ha raccolto un seed round di 101 milioni di dollari][44]
  - [Jasper ha raccolto 125 milioni di dollari con una valutazione di 1,5 miliardi di dollari][45]
- **La tecnologia inizierà a essere prodottizzata come funzionalità in prodotti esistenti** - Adobe ha già [iniziato a includere questi strumenti nel suo software][47]
- **Tutte queste aree inizieranno a fondersi con risultati coerenti**
- **Giochi, VR e Metaverse** - Il più grande potenziale sta in quanto questa tecnologia può accelerare la creazione di contenuti

{{< alert >}}
Nota: Nel frattempo, ho creato un account Instagram per condividere le mie creazioni Stable Diffusion.
{{</ alert >}}

</br>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"\><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Visualizza questo post su Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Un post condiviso da Art by a Ghost (@artbyaghost)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

[1]:	https://openai.com/about/
[2]:	https://about.google
[3]:	https://www.deepmind.com
[4]:	https://about.meta.com/company-info/
[5]:	https://www.deepmind.com/research/highlighted-research/alphago
[6]:	https://openai.com/five/
[7]:	https://en.wikipedia.org/wiki/Generative_adversarial_network
[8]:	https://en.wikipedia.org/wiki/Diffusion_model
[9]:	https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[10]:	https://en.wikipedia.org/wiki/DeepDream
[11]:	https://en.wikipedia.org/wiki/Convolutional_neural_network
[12]:	https://artsandculture.google.com/story/the-story-of-alphago-barbican-centre/kQXBk0X1qEe5KA?hl=en
[13]:	https://en.wikipedia.org/wiki/Unsupervised_learning
[14]:	https://openai.com/blog/openai-five-defeats-dota-2-world-champions/
[15]:	https://en.wikipedia.org/wiki/GPT-3
[17]:	https://en.wikipedia.org/wiki/DALL-E
[19]:	https://en.wikipedia.org/wiki/Midjourney
[20]:	https://en.wikipedia.org/wiki/Stable_Diffusion
[21]:	https://en.wikipedia.org/wiki/Generative_adversarial_network
[22]:	https://en.wikipedia.org/wiki/Diffusion_model
[23]:	https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[24]:	https://en.wikipedia.org/wiki/Deepfake
[27]:	https://openai.com/blog/whisper/
[28]:	https://www.openculture.com/2022/10/dall-e-the-new-ai-art-generator-is-now-open-for-everyone-to-use.html
[29]:	https://huggingface.co
[30]:	https://huggingface.co/bigscience/bloom
[31]:	https://lexica.art/
[32]:	https://prompthero.com/
[33]:	https://runwayml.com
[34]:	https://imagen.research.google/video/
[35]:	https://ai.facebook.com/blog/generative-ai-text-to-video/
[36]:	https://podcast.ai/
[37]:	https://technode.global/2022/10/21/this-startup-allows-you-to-reunite-with-deceased-loved-ones-using-ai-technology/
[38]:	https://githubcopilotinvestigation.com/
[39]:	https://edition.cnn.com/2022/10/21/tech/artists-ai-images
[42]:	https://en.wikipedia.org/wiki/Prompt_engineering
[44]:	https://techcrunch.com/2022/10/17/stability-ai-the-startup-behind-stable-diffusion-raises-101m/
[45]:	https://techcrunch.com/2022/10/18/ai-content-platform-jasper-raises-125m-at-a-1-7b-valuation/
[47]:	https://blog.adobe.com/en/publish/2022/10/18/bringing-next-wave-ai-creative-cloud
