---
title: "O Novo Hype da Inteligência Artificial"
summary: "Nos últimos anos, o hype em torno da inteligência artificial tem aumentado (novamente). A maior parte deve-se a pesquisas revolucionárias e showcases inovadores na área. De máquinas a ganhar jogos complexos como Go e Dota 2, a várias técnicas de geração de conteúdo, estas tecnologias terão impacto no nosso futuro."
categories: ["Produto","Estratégia","Tecnologia"]
tags: ["Stable Diffusion","Midjourney","Dall-e","IA", "Machine Learning"]
# externalUrl: ""
date: 2022-10-25
draft: false
series: ["O Novo Hype da IA"]
series_order: 1
---

Nos últimos anos, o hype em torno da inteligência artificial tem aumentado (novamente). A maior parte deve-se a empresas como [OpenAI][1], [Google][2], [DeepMind][3] (subsidiária da Google), [Meta][4] e outras a produzirem pesquisas revolucionárias e showcases inovadores na área. De máquinas a ganhar jogos complexos como [Go][5] e [Dota 2][6] a uma variedade de técnicas de geração de conteúdo que produzem texto, imagens, áudio e agora vídeo, estas tecnologias terão um impacto no nosso futuro.

Parece que já experienciámos este hype em relação à IA no passado, mas nunca se materializou verdadeiramente em algo relevante para as nossas vidas. Das tentativas do Watson da IBM de revolucionar a saúde às _profecias_ dos carros autónomos, sempre nos disseram como a IA melhoraria a nossa sociedade, mas parece haver sempre algo a impedir-nos de lá chegar.

No entanto, desta vez parece diferente. Primeiro, os casos de uso são muito menos ambiciosos do que no passado e têm aplicações práticas (e divertidas) concretas; segundo, a pesquisa nos últimos 5-10 anos teve alguns dos maiores avanços de sempre nos campos de machine learning e deep learning. [Generative Adversarial Networks (GANs)][7], [Modelos de Difusão][8] e [Modelos Transformer][9] são bons exemplos de tais avanços.

{{< alert >}}
Estima-se que a OpenAI gastou cerca de 10 a 20 milhões de dólares para treinar o seu modelo text-to-text GPT-3. O custo deve ser mais elevado com modelos que lidam com imagens.
{{</ alert >}}

## Onde estamos e como chegámos aqui?

Então, onde estamos agora? Nos últimos 5 a 7 anos, várias inovações específicas e aplicações práticas de IA trouxeram a tecnologia (e as suas respetivas implicações) para a discussão pública.

**2015 - Google cria o DeepDream - [Ler mais][10]**

A Google lança um novo método usando [Redes Convolucionais][11] que consegue _sonhar_ novas imagens baseadas no seu conjunto de treino.

**2016 - Google constrói o AlphaGo que vence o campeão mundial de Go - [Ler mais][12]**

O AlphaGo foi treinado usando técnicas de [aprendizagem não supervisionada][13] para fazer a rede competir contra si mesma milhões de vezes.

**2019 - OpenAI Five vence os campeões de Dota 2 - [Ler mais][14]**

O OpenAI Five foi treinado usando técnicas semelhantes ao AlphaGo.

**2020 - OpenAI revela o GPT-3 - [Ler mais][15]**

**Generative Pre-trained Transformer 3 (GPT-3)** é um modelo de linguagem autoregressivo que usa deep learning para produzir texto semelhante ao humano.

{{< youtube TfVYxnhuEdU >}}

**2021/22 - OpenAI anuncia Dall-E e Dall-E 2 - [Ler mais][17]**

Dall-E e Dall-E 2 são redes treinadas usando modelos de difusão para gerar imagens a partir de prompts textuais.

**2022 - Leap Motion lança o Midjourney - [Ler mais][19]**

O Midjourney é também um modelo text-to-image com capacidades semelhantes ao Dall-E.

**2022 - Stable Diffusion lançado pela Stability AI, CompVis LMU e Runway - [Ler mais][20]**

O Stable Diffusion é outro modelo para gerar imagens a partir de prompts textuais. A principal diferença é que é open source.

{{< youtube 6AmdZoSgTeE >}}

## Isto é magia?

Todos estes avanços recentes são principalmente atribuídos a três grandes marcos na pesquisa de Deep Learning: [Generative Adversarial Networks (GANs)][21], [Modelos de Difusão][22] e [Modelos Transformer][23].

**GAN** foi um framework revolucionário para treinar redes massivas. A alto nível, o método define que duas redes diferentes competirão uma contra a outra num jogo onde apenas uma pode ganhar. Os [Deepfakes][24], por exemplo, são geralmente gerados usando este método.

Os **Modelos de Difusão** foram criados para que o problema de gerar uma imagem válida não aconteça num só passo, mas ao longo de um processo de _denoising_ que pode levar _N_ passos.

{{< youtube 1CIpzeNxIhU >}}

Finalmente, temos os **Modelos Transformer**, um dos avanços mais importantes no campo do machine learning. Estes modelos são redes neuronais que podem aprender contexto e, portanto, inferir significado a partir de dados sequenciais.

## Democratização da IA

Uma das principais diferenças entre esta _onda de hype da IA_ e as anteriores é que o número de pessoas que podem experimentá-la e interagir com ela é muito maior do que alguma vez foi.

De outro ângulo, nunca tantos destes avanços foram disponibilizados como tecnologias open source. A OpenAI lançou recentemente o [whisper][27] e o seu [modelo Dall-E 2][28] ao público. O modelo Stable Diffusion também está disponível para a comunidade. Se estiveres interessado em executar o Stable Diffusion localmente, escrevi um tutorial sobre isso.

{{< article link="/posts/202210-stable-diffusion-tutorial/" >}}

Uma das empresas que tem liderado estes esforços é a [HuggingFace][29]. Um exemplo é o [BLOOM][30], um modelo de linguagem open source criado colaborativamente por milhões de investigadores.

Esta democratização da IA é uma característica única desta nova onda de hype:

- **Os casos de uso são divertidos e todos podem experimentá-los**
- **Quase todos podem experimentar mesmo sem perceber como funciona**
- **A comunidade pode construir sobre isso facilmente**

## O que podes fazer com isto hoje?

Estes modelos e tecnologias estão a commoditizar a capacidade de gerar conteúdo, que era o último passo na _Cadeia de Valor de Propagação de Ideias_ que ainda não tinha sido fundamentalmente disruptado pela tecnologia.

Como exemplo, usei o Stable Diffusion para gerar a miniatura deste artigo.

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

Além disso, já existem sites inteiros focados em indexar e fornecer os melhores prompts. [Lexica][31] e [Prompthero][32] são dois exemplos.

## Para além das imagens

Comecei a brincar com o Stable Diffusion há algumas semanas, e tenho de admitir que as notícias que saíram desde então surpreenderam-me.

{{< tweet user="mkbhd" id="1582772722240999425" >}}

Fiquei surpreendido por já existirem resultados tão bons para modelos text-to-video. Nessa semana, descobri uma startup chamada [Runway][33] que está a trabalhar num editor de vídeo alimentado por todas estas inovações de machine learning. Também vi artigos sobre a nova rede text-video da Google, [Imagen Video][34], e o anúncio da Meta do [Make-a-Video][35].

No entanto, o mais surpreendente (e também um pouco perturbador pelas potenciais implicações) foi um podcast que encontrei do Joe Rogan a entrevistar Steve Jobs, criado pela [podcast.ai][36]. O Steve Jobs está morto. Estes dois homens nunca tiveram a oportunidade de estar na mesma sala juntos, mas há 20 minutos de áudio deles a falar como se a conversa tivesse acontecido.

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/22f16c7f"></iframe>

Enquanto pensava nos impactos de usar estas tecnologias para _emular_ pessoas que já não estão entre nós, encontrei [este artigo][37]. Existem empresas como a DeepBrain AI que já monetizam tal serviço.

## Potenciais armadilhas

### Legais & Éticas

Uma das potenciais armadilhas são as implicações legais e éticas destes novos sistemas de IA. Quem é dono do produto final ao gerar uma imagem? A pessoa que cria o prompt? A equipa que constrói o modelo? Os artistas cujas imagens estavam no conjunto de treino?

Uma das discussões relevantes sobre este tema diz respeito aos problemas de direitos de autor do produto Copilot do GitHub. Mais informações [aqui][38].

Os artistas também estão a descobrir como a sua arte foi usada para treinar estes modelos e não estão [contentes][39].

### Valor percebido & Reação

Inicialmente, pensava que esta tecnologia tornaria todos bons artistas, mas depois de brincar com ela, já não estou convencido disso. Neste momento, penso que estas tecnologias permitirão que pessoas normais possam _criar_ algo, mas darão aos artistas profissionais **superpoderes**.

Já existe uma nova área chamada [Engenharia de Prompts][42].

## O que vem a seguir?

Com o aviso acima, eis o que penso que acontecerá neste espaço nos próximos 2 a 5 anos:

- **As questões legais em torno da propriedade aumentarão até surgir uma boa solução**
- **Aumento dramático no financiamento para empresas a trabalhar nestes problemas**:
  - [A StabilityAI levantou uma seed round de 101 milhões de dólares][44]
  - [A Jasper levantou 125 milhões de dólares numa avaliação de 1,5 mil milhões de dólares][45]
- **A tecnologia começará a ser produtizada como funcionalidades em produtos existentes** - A Adobe já [começou a incluir estas ferramentas no seu software][47]
- **Todas estas áreas começarão a fundir-se com resultados coerentes**
- **Jogos, VR e o Metaverse** - O maior potencial está em quanto esta tecnologia pode acelerar a criação de conteúdo

{{< alert >}}
Nota: Entretanto, criei uma conta no Instagram para partilhar as minhas criações com Stable Diffusion.
{{</ alert >}}

</br>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"\><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicação no Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Uma publicação partilhada por Art by a Ghost (@artbyaghost)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

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
