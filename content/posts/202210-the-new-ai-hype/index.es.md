---
title: "El Nuevo Hype de la Inteligencia Artificial"
summary: "En los últimos años, el hype alrededor de la inteligencia artificial ha aumentado (de nuevo). La mayor parte se debe a investigaciones revolucionarias y demostraciones innovadoras en el campo. Desde máquinas ganando juegos complejos como Go y Dota 2, hasta varias técnicas de generación de contenido, estas tecnologías tendrán un impacto en nuestro futuro."
categories: ["Producto","Estrategia","Tecnología"]
tags: ["Stable Diffusion","Midjourney","Dall-e","IA", "Machine Learning"]
# externalUrl: ""
date: 2022-10-25
draft: false
series: ["El Nuevo Hype de la IA"]
series_order: 1
---

En los últimos años, el hype alrededor de la inteligencia artificial ha aumentado (de nuevo). La mayor parte se debe a empresas como [OpenAI][1], [Google][2], [DeepMind][3] (subsidiaria de Google), [Meta][4] y otras produciendo investigaciones revolucionarias y demostraciones innovadoras en el campo. Desde máquinas ganando juegos complejos como [Go][5] y [Dota 2][6] hasta una variedad de técnicas de generación de contenido que producen texto, imágenes, audio y ahora video, estas tecnologías tendrán un impacto en nuestro futuro.

Parece que ya hemos experimentado este hype hacia la IA en el pasado, pero nunca se materializó realmente en algo relevante para nuestras vidas. Desde los intentos de Watson de IBM de revolucionar la salud hasta las _profecías_ de los autos autónomos, siempre nos han dicho cómo la IA mejorará nuestra sociedad, pero siempre parece haber algo que nos impide llegar allí.

Sin embargo, esta vez se siente diferente. Primero, los casos de uso son mucho menos ambiciosos que en el pasado y tienen aplicaciones prácticas (y divertidas) concretas; segundo, la investigación en los últimos 5-10 años ha tenido algunos de los mayores avances en los campos de machine learning y deep learning. [Generative Adversarial Networks (GANs)][7], [Modelos de Difusión][8] y [Modelos Transformer][9] son buenos ejemplos de tales avances.

{{< alert >}}
Se estima que OpenAI gastó alrededor de 10 a 20 millones de dólares para entrenar su modelo text-to-text GPT-3. El costo debería ser mayor con modelos que manejan imágenes.
{{</ alert >}}

## ¿Dónde estamos y cómo llegamos aquí?

Entonces, ¿dónde estamos ahora? En los últimos 5 a 7 años, varias innovaciones específicas y aplicaciones prácticas de IA han traído la tecnología (y sus respectivas implicaciones) a la discusión pública.

**2015 - Google crea DeepDream - [Leer más][10]**

Google lanza un nuevo método usando [Redes Convolucionales][11] que puede _soñar_ nuevas imágenes basadas en su conjunto de entrenamiento.

**2016 - Google construye AlphaGo que vence al campeón mundial de Go - [Leer más][12]**

AlphaGo fue entrenado usando técnicas de [aprendizaje no supervisado][13] para hacer que la red compita contra sí misma millones de veces.

**2019 - OpenAI Five vence a los campeones de Dota 2 - [Leer más][14]**

OpenAI Five fue entrenado usando técnicas similares a AlphaGo.

**2020 - OpenAI revela GPT-3 - [Leer más][15]**

**Generative Pre-trained Transformer 3 (GPT-3)** es un modelo de lenguaje autorregresivo que usa deep learning para producir texto similar al humano.

{{< youtube TfVYxnhuEdU >}}

**2021/22 - OpenAI anuncia Dall-E y Dall-E 2 - [Leer más][17]**

Dall-E y Dall-E 2 son redes entrenadas usando modelos de difusión para generar imágenes a partir de prompts textuales.

**2022 - Leap Motion lanza Midjourney - [Leer más][19]**

Midjourney es también un modelo text-to-image con capacidades similares a Dall-E.

**2022 - Stable Diffusion lanzado por Stability AI, CompVis LMU y Runway - [Leer más][20]**

Stable Diffusion es otro modelo para generar imágenes a partir de prompts textuales. La principal diferencia es que es open source.

{{< youtube 6AmdZoSgTeE >}}

## ¿Es esto magia?

Todos estos avances recientes se atribuyen principalmente a tres grandes hitos en la investigación de Deep Learning: [Generative Adversarial Networks (GANs)][21], [Modelos de Difusión][22] y [Modelos Transformer][23].

**GAN** fue un framework revolucionario para entrenar redes masivas. A alto nivel, el método define que dos redes diferentes competirán entre sí en un juego donde solo una puede ganar. Los [Deepfakes][24], por ejemplo, generalmente se generan usando este método.

Los **Modelos de Difusión** fueron creados para que el problema de generar una imagen válida no ocurra en un solo paso, sino a lo largo de un proceso de _denoising_ que puede tomar _N_ pasos.

{{< youtube 1CIpzeNxIhU >}}

Finalmente, tenemos los **Modelos Transformer**, uno de los avances más importantes en el campo del machine learning. Estos modelos son redes neuronales que pueden aprender contexto y, por lo tanto, inferir significado a partir de datos secuenciales.

## Democratización de la IA

Una de las principales diferencias entre esta _ola de hype de la IA_ y las anteriores es que el número de personas que pueden probarla e interactuar con ella es mucho mayor de lo que jamás ha sido.

Desde otro ángulo, nunca tantos de estos avances se han puesto a disposición como tecnologías open source. OpenAI ha lanzado recientemente [whisper][27] y su [modelo Dall-E 2][28] al público. El modelo Stable Diffusion también está disponible para la comunidad. Si estás interesado en ejecutar Stable Diffusion localmente, escribí un tutorial sobre ello.

{{< article link="/posts/202210-stable-diffusion-tutorial/" >}}

Una de las empresas que ha estado liderando estos esfuerzos es [HuggingFace][29]. Un ejemplo es [BLOOM][30], un modelo de lenguaje open source creado colaborativamente por millones de investigadores.

Esta democratización de la IA es una característica única de esta nueva ola de hype:

- **Los casos de uso son divertidos y todos pueden probarlos**
- **Casi todos pueden probarlo incluso si no entienden cómo funciona**
- **La comunidad puede construir sobre ello fácilmente**

## ¿Qué puedes hacer con esto hoy?

Estos modelos y tecnologías están commoditizando la capacidad de generar contenido, que era el último paso en la _Cadena de Valor de Propagación de Ideas_ que aún no había sido fundamentalmente disrumpido por la tecnología.

Como ejemplo, usé Stable Diffusion para generar la miniatura de este artículo.

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

Además, ya existen sitios enteros enfocados en indexar y proporcionar los mejores prompts. [Lexica][31] y [Prompthero][32] son dos ejemplos.

## Más allá de las imágenes

Empecé a jugar con Stable Diffusion hace un par de semanas, y tengo que admitir que las noticias que salieron desde entonces me dejaron boquiabierto.

{{< x user="mkbhd" id="1582772722240999425" >}}

Me sorprendió que ya hubiera tan buenos resultados para modelos text-to-video. Esa semana descubrí una startup llamada [Runway][33] que está trabajando en un editor de video impulsado por todas estas innovaciones de machine learning. También vi artículos sobre la nueva red text-video de Google, [Imagen Video][34], y el anuncio de Meta de [Make-a-Video][35].

Sin embargo, la más sorprendente (y también un poco inquietante por las implicaciones potenciales) fue un podcast que encontré de Joe Rogan entrevistando a Steve Jobs, creado por [podcast.ai][36]. Steve Jobs está muerto. Esos dos hombres nunca tuvieron la oportunidad de estar en la misma habitación juntos, pero hay 20 minutos de audio de ellos hablando como si la conversación hubiera ocurrido.

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/22f16c7f"></iframe>

Mientras pensaba en los impactos de usar estas tecnologías para _emular_ personas que ya no están entre nosotros, encontré [este artículo][37]. Hay empresas como DeepBrain AI que ya monetizan tal servicio.

## Posibles trampas

### Legales y Éticas

Una de las posibles trampas son las implicaciones legales y éticas de estos nuevos sistemas de IA. ¿Quién es dueño del producto final al generar una imagen? ¿La persona que crea el prompt? ¿El equipo que construye el modelo? ¿Los artistas cuyas imágenes estaban en el conjunto de entrenamiento?

Una de las discusiones relevantes sobre este tema se refiere a los problemas de derechos de autor del producto Copilot de GitHub. Más información [aquí][38].

Los artistas también están descubriendo cómo su arte fue usado para entrenar estos modelos y no están [contentos][39].

### Valor percibido y Reacción

Inicialmente, pensé que esta tecnología haría que todos fueran buenos artistas, pero después de jugar con ella, ya no estoy convencido de eso. Actualmente, creo que estas tecnologías permitirán a las personas normales _crear_ algo, pero darán a los artistas profesionales **superpoderes**.

Ya existe una nueva área llamada [Ingeniería de Prompts][42].

## ¿Qué sigue?

Con el descargo de responsabilidad anterior, esto es lo que creo que sucederá en este espacio en los próximos 2 a 5 años:

- **Los problemas legales en torno a la propiedad aumentarán hasta que surja una buena solución**
- **Aumento dramático en la financiación para empresas que trabajan en estos problemas**:
  - [StabilityAI recaudó una ronda seed de 101 millones de dólares][44]
  - [Jasper recaudó 125 millones de dólares con una valoración de 1.5 mil millones de dólares][45]
- **La tecnología comenzará a ser productizada como características en productos existentes** - Adobe ya [comenzó a incluir estas herramientas en su software][47]
- **Todas estas áreas comenzarán a fusionarse con resultados coherentes**
- **Juegos, VR y el Metaverse** - El mayor potencial está en cuánto puede esta tecnología acelerar la creación de contenido

{{< alert >}}
Nota: Mientras tanto, creé una cuenta de Instagram para compartir mis creaciones con Stable Diffusion.
{{</ alert >}}

</br>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"\><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicación en Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Una publicación compartida por Art by a Ghost (@artbyaghost)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

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
