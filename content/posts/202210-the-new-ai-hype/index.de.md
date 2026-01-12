---
title: "Der Neue Hype um Künstliche Intelligenz"
summary: "In den letzten Jahren hat der Hype um künstliche Intelligenz (wieder einmal) zugenommen. Der Großteil davon ist auf bahnbrechende Forschung und innovative Showcases in diesem Bereich zurückzuführen. Von Maschinen, die komplexe Spiele wie Go und Dota 2 gewinnen, bis hin zu verschiedenen Content-Generierungstechniken - diese Technologien werden unsere Zukunft beeinflussen."
categories: ["Produkt","Strategie","Technologie"]
tags: ["Stable Diffusion","Midjourney","Dall-e","KI", "Machine Learning"]
# externalUrl: ""
date: 2022-10-25
draft: false
series: ["Der Neue KI-Hype"]
series_order: 1
---

In den letzten Jahren hat der Hype um künstliche Intelligenz (wieder einmal) zugenommen. Der Großteil davon ist auf Unternehmen wie [OpenAI][1], [Google][2], [DeepMind][3] (Google-Tochter), [Meta][4] und andere zurückzuführen, die bahnbrechende Forschung und innovative Showcases in diesem Bereich produzieren. Von Maschinen, die komplexe Spiele wie [Go][5] und [Dota 2][6] gewinnen, bis hin zu einer Vielzahl von Content-Generierungstechniken, die Text, Bilder, Audio und jetzt auch Video produzieren - diese Technologien werden einen Einfluss auf unsere Zukunft haben.

Es fühlt sich an, als hätten wir diesen KI-Hype in der Vergangenheit schon erlebt, aber er hat sich nie wirklich in etwas Relevantes für unser Leben materialisiert. Von IBMs Watson-Versuchen, das Gesundheitswesen zu revolutionieren, bis hin zu den _Prophezeiungen_ selbstfahrender Autos - uns wurde immer erzählt, wie KI unsere Gesellschaft verbessern wird, doch es scheint immer etwas zu geben, das uns daran hindert, dort anzukommen.

Diesmal fühlt es sich jedoch anders an. Erstens sind die Anwendungsfälle weit weniger ambitioniert als in der Vergangenheit und haben konkrete praktische (und unterhaltsame) Anwendungen; zweitens hatte die Forschung in den letzten 5-10 Jahren einige der größten Sprünge im Machine Learning und Deep Learning überhaupt. [Generative Adversarial Networks (GANs)][7], [Diffusion Models][8] und [Transformer Models][9] sind gute Beispiele für solche Durchbrüche. Drittens ist diesmal die erforderliche Technologie und Rechenleistung vorhanden, um diese massiven Netzwerke zu betreiben und zu trainieren.

{{< alert >}}
Es wird geschätzt, dass OpenAI etwa 10 bis 20 Millionen Dollar ausgegeben hat, um sein GPT-3 Text-zu-Text-Modell zu trainieren. Die Kosten sollten bei Modellen, die mit Bildern arbeiten, höher sein.
{{</ alert >}}

## Wo stehen wir und wie sind wir hierher gekommen?

Also, wo stehen wir gerade? In den letzten 5 bis 7 Jahren haben mehrere spezifische Innovationen und praktische Anwendungen von KI die Technologie (und ihre jeweiligen Implikationen) in die öffentliche Diskussion gebracht. Bevor wir darauf eingehen, was bereits möglich ist, gehen wir die relevanteren Ankündigungen der letzten Jahre durch.

**2015 - Google erschafft DeepDream - [Mehr erfahren][10]**

Google veröffentlicht eine neue Methode mit [Convolutional Networks][11], die neue Bilder basierend auf dem Trainingsset _träumen_ kann.

**2016 - Google baut AlphaGo, das den Go-Weltmeister schlägt - [Mehr erfahren][12]**

AlphaGo wurde mit [unüberwachten Lerntechniken][13] trainiert, um das Netzwerk millionenfach gegen sich selbst antreten zu lassen. AlphaGo schlug den Go-Champion und konnte sogar Go-Züge zeigen, die noch nie gesehen wurden.

**2019 - OpenAI Five schlägt die Dota 2-Champions - [Mehr erfahren][14]**

OpenAI Five wurde mit ähnlichen Techniken wie AlphaGo trainiert. Die Herausforderung bei einem Multiplayer-Online-3D-Spiel wie Dota 2 war der immense _Aktionsraum_, der dem Spieler zur Verfügung steht.

**2020 - OpenAI enthüllt GPT-3 - [Mehr erfahren][15]**

**Generative Pre-trained Transformer 3 (GPT-3)** ist ein autoregressives Sprachmodell, das Deep Learning verwendet, um menschenähnlichen Text zu produzieren. Das Netzwerk wurde mit mehr als 400 Milliarden Text-Tokens trainiert.

{{< youtube TfVYxnhuEdU >}}

**2021/22 - OpenAI kündigt Dall-E und Dall-E 2 an - [Mehr erfahren][17] und [hier][18]**

Dall-E und Dall-E 2 sind Netzwerke, die mit Diffusion Models trainiert wurden, um Bilder aus Textprompts zu generieren.

**2022 - Leap Motion veröffentlicht Midjourney - [Mehr erfahren][19]**

Midjourney ist ebenfalls ein Text-zu-Bild-Modell mit ähnlichen Fähigkeiten wie Dall-E.

**2022 - Stable Diffusion wird von Stability AI, CompVis LMU und Runway veröffentlicht - [Mehr erfahren][20]**

Stable Diffusion ist ein weiteres Modell zur Generierung von Bildern aus Textprompts. Der Hauptunterschied ist, dass es Open Source ist.

{{< youtube 6AmdZoSgTeE >}}

## Ist das Magie?

All diese jüngsten Fortschritte werden hauptsächlich drei großen Meilensteinen in der Deep-Learning-Forschung zugeschrieben: [Generative Adversarial Networks (GANs)][21], [Diffusion Models][22] und [Transformer Models][23].

**GAN** war ein revolutionäres Framework für das Training massiver Netzwerke. Auf hoher Ebene definiert die Methode, dass zwei verschiedene Netzwerke in einem Spiel gegeneinander antreten, bei dem nur eines gewinnen kann. [Deepfakes][24] werden beispielsweise normalerweise mit dieser Methode generiert.

**Diffusion Models** wurden entwickelt, damit das Problem der Bildgenerierung nicht in einem Schritt, sondern entlang eines _Entrauschungs_-Prozesses in _N_ Schritten erfolgt.

{{< youtube 1CIpzeNxIhU >}}

Schließlich haben wir **Transformer Models**, einer der wichtigsten Fortschritte im Machine-Learning-Bereich. Diese Modelle sind neuronale Netzwerke, die Kontext lernen und daher Bedeutung aus sequenziellen Daten ableiten können.

## KI-Demokratisierung

Einer der Hauptunterschiede zwischen dieser _KI-Hype-Welle_ und früheren ist, dass die Anzahl der Menschen, die sie ausprobieren und damit interagieren können, viel größer ist als je zuvor.

Von einem anderen Blickwinkel aus wurden nie so viele dieser Fortschritte als Open-Source-Technologien verfügbar gemacht. OpenAI hat kürzlich [whisper][27] und sein [Dall-E 2-Modell][28] öffentlich freigegeben. Das Stable Diffusion-Modell ist ebenfalls für die Community verfügbar. Wenn du daran interessiert bist, Stable Diffusion lokal auszuführen, habe ich ein Tutorial dazu geschrieben.

{{< article link="/posts/202210-stable-diffusion-tutorial/" >}}

Eines der Unternehmen, das diese Bemühungen anführt, ist [HuggingFace][29]. Ein Beispiel dafür ist [BLOOM][30], ein Open-Source-Large-Language-Modell, das kollaborativ von Millionen von Forschern erstellt wurde.

Diese KI-Demokratisierung ist ein einzigartiges Merkmal dieser neuen Hype-Welle:

- **Anwendungsfälle sind unterhaltsam und jeder kann sie ausprobieren**
- **Fast jeder kann es ausprobieren, auch wenn man nicht versteht, wie es funktioniert**
- **Die Community kann leicht darauf aufbauen**

## Was kann man heute damit machen?

Diese Modelle und Technologien kommerzialisieren die Fähigkeit, Inhalte zu generieren, was der letzte Schritt in der _Ideenverbreitungs-Wertschöpfungskette_ war, der noch nicht grundlegend durch Technologie gestört wurde.

Als Beispiel habe ich Stable Diffusion verwendet, um das Thumbnail für diesen Artikel zu generieren.

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

Außerdem gibt es bereits ganze Websites, die sich auf die Indexierung und Bereitstellung der besten Prompts konzentrieren. [Lexica][31] und [Prompthero][32] sind zwei Beispiele.

## Jenseits von Bildern

Ich begann vor ein paar Wochen mit Stable Diffusion zu spielen, und die Neuigkeiten, die seitdem herauskamen, haben mich umgehauen.

{{< x user="mkbhd" id="1582772722240999425" >}}

Ich war überrascht, dass es bereits so gute Ergebnisse für Text-zu-Video-Modelle gab. Diese Woche entdeckte ich ein Startup namens [Runway][33], das an einem Videoeditor arbeitet, der von all diesen Machine-Learning-Innovationen angetrieben wird. Außerdem sah ich Artikel über Googles neues Text-Video-Netzwerk [Imagen Video][34] und Metas Ankündigung von [Make-a-Video][35].

Das Überraschendste (und auch etwas beunruhigend aufgrund potenzieller Implikationen) war jedoch ein Podcast, auf den ich stieß, in dem Joe Rogan Steve Jobs interviewt, erstellt von [podcast.ai][36]. Steve Jobs ist bekanntlich verstorben. Diese beiden Männer hatten nie die Chance, im selben Raum zu sein, dennoch gibt es 20 Minuten Audio von ihnen, als ob das Gespräch stattgefunden hätte.

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/22f16c7f"></iframe>

Während ich über die Auswirkungen nachdachte, diese Technologien zu verwenden, um Menschen zu _emulieren_, die nicht mehr unter uns sind, stieß ich auf [diesen Artikel][37]. Es gibt Unternehmen wie DeepBrain AI, die einen solchen Service bereits monetarisieren.

## Potenzielle Fallstricke

### Rechtlich & Ethisch

Einer der potenziellen Fallstricke sind die rechtlichen und ethischen Implikationen dieser neuen KI-Systeme. Wer besitzt das Endprodukt bei der Generierung eines Bildes? Die Person mit dem Prompt? Das Team, das das Modell erstellt? Die Künstler, deren Bilder im Trainingsset waren?

Eine der relevanten Diskussionen zu diesem Thema betrifft die Urheberrechtsprobleme von GitHubs Copilot-Produkt. Weitere Informationen [hier][38].

Künstler finden auch heraus, wie ihre Kunst verwendet wurde, um diese Modelle zu trainieren, und sind [nicht glücklich darüber][39].

### Wahrgenommener Wert & Gegenreaktion

Anfangs dachte ich, dass diese Technologie jeden zu einem guten Künstler machen würde, aber nachdem ich damit gespielt habe, bin ich davon nicht mehr überzeugt. Derzeit denke ich, dass diese Technologien normalen Menschen ermöglichen werden, etwas zu _erschaffen_, aber professionellen Künstlern **Superkräfte** verleihen werden.

Es gibt bereits einen neuen Bereich namens [Prompt Engineering][42].

## Was kommt als Nächstes?

Mit dem obigen Disclaimer ist hier, was ich denke, in diesem Bereich in den nächsten 2 bis 5 Jahren passieren wird:

- **Rechtliche Fragen rund um das Eigentum werden zunehmen, bis eine gute Lösung gefunden wird**
- **Dramatische Zunahme der Finanzierung für Unternehmen, die an diesen Problemen arbeiten**:
  - [StabilityAI sammelte eine Seed-Runde von 101 Millionen Dollar][44]
  - [Jasper sammelte 125 Millionen Dollar bei einer Bewertung von 1,5 Milliarden Dollar][45]
- **Die Technologie wird als Features in bestehenden Produkten produktisiert** - Adobe hat bereits [begonnen, diese Tools in ihre Software zu integrieren][47]
- **Alle diese Bereiche werden mit kohärenten Ergebnissen verschmelzen**
- **Spiele, VR und das Metaverse** - Das größte Potenzial liegt darin, wie sehr diese Technologie die Content-Erstellung beschleunigen kann

{{< alert >}}
Hinweis: In der Zwischenzeit habe ich einen Instagram-Account erstellt, um meine Stable Diffusion-Kreationen zu teilen.
{{</ alert >}}

</br>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"\><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Sieh dir diesen Beitrag auf Instagram an</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Ein Beitrag geteilt von Art by a Ghost (@artbyaghost)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

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
[18]:	https://en.wikipedia.org/wiki/DALL-E
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
