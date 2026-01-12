---
title: "Le Nouveau Battage Médiatique de l'Intelligence Artificielle"
summary: "Ces dernières années, le battage médiatique autour de l'intelligence artificielle a augmenté (encore une fois). La majeure partie est due à des recherches révolutionnaires et des démonstrations innovantes dans le domaine. Des machines gagnant des jeux complexes comme Go et Dota 2, aux diverses techniques de génération de contenu, ces technologies auront un impact sur notre avenir."
categories: ["Produit","Stratégie","Technologie"]
tags: ["Stable Diffusion","Midjourney","Dall-e","IA", "Machine Learning"]
# externalUrl: ""
date: 2022-10-25
draft: false
series: ["Le Nouveau Battage Médiatique de l'IA"]
series_order: 1
---

Ces dernières années, le battage médiatique autour de l'intelligence artificielle a augmenté (encore une fois). La majeure partie est due à des entreprises comme [OpenAI][1], [Google][2], [DeepMind][3] (filiale de Google), [Meta][4] et d'autres produisant des recherches révolutionnaires et des démonstrations innovantes dans le domaine. Des machines gagnant des jeux complexes comme [Go][5] et [Dota 2][6] à une variété de techniques de génération de contenu produisant du texte, des images, de l'audio et maintenant de la vidéo, ces technologies auront un impact sur notre avenir.

On a l'impression d'avoir déjà vécu ce battage médiatique autour de l'IA dans le passé, mais il ne s'est jamais vraiment matérialisé en quelque chose de pertinent pour nos vies. Des tentatives de Watson d'IBM de révolutionner la santé aux _prophéties_ des voitures autonomes, on nous a toujours dit comment l'IA améliorerait notre société, mais il semble toujours y avoir quelque chose qui nous empêche d'y arriver.

Cependant, cette fois-ci, c'est différent. Premièrement, les cas d'utilisation sont bien moins ambitieux que par le passé et ont des applications pratiques (et amusantes) concrètes ; deuxièmement, la recherche des 5-10 dernières années a connu certains des plus grands bonds dans les domaines du machine learning et du deep learning. Les [Generative Adversarial Networks (GANs)][7], les [Modèles de Diffusion][8] et les [Modèles Transformer][9] sont de bons exemples de telles percées.

{{< alert >}}
On estime qu'OpenAI a dépensé environ 10 à 20 millions de dollars pour entraîner son modèle text-to-text GPT-3. Le coût devrait être plus élevé avec les modèles traitant des images.
{{</ alert >}}

## Où en sommes-nous et comment en sommes-nous arrivés là ?

Alors, où en sommes-nous actuellement ? Au cours des 5 à 7 dernières années, plusieurs innovations spécifiques et applications pratiques de l'IA ont mis en avant la technologie (et ses implications respectives) dans la discussion publique.

**2015 - Google crée DeepDream - [En savoir plus][10]**

Google publie une nouvelle méthode utilisant des [Réseaux Convolutionnels][11] qui peut _rêver_ de nouvelles images basées sur son ensemble d'entraînement.

**2016 - Google construit AlphaGo qui bat le champion du monde de Go - [En savoir plus][12]**

AlphaGo a été entraîné en utilisant des techniques d'[apprentissage non supervisé][13] pour faire concourir le réseau contre lui-même des millions de fois.

**2019 - OpenAI Five bat les champions de Dota 2 - [En savoir plus][14]**

OpenAI Five a été entraîné avec des techniques similaires à AlphaGo.

**2020 - OpenAI révèle GPT-3 - [En savoir plus][15]**

**Generative Pre-trained Transformer 3 (GPT-3)** est un modèle de langage autorégressif qui utilise le deep learning pour produire du texte semblable à celui d'un humain.

{{< youtube TfVYxnhuEdU >}}

**2021/22 - OpenAI annonce Dall-E et Dall-E 2 - [En savoir plus][17]**

Dall-E et Dall-E 2 sont des réseaux entraînés avec des modèles de diffusion pour générer des images à partir de prompts textuels.

**2022 - Leap Motion lance Midjourney - [En savoir plus][19]**

Midjourney est également un modèle text-to-image avec des capacités similaires à Dall-E.

**2022 - Stable Diffusion publié par Stability AI, CompVis LMU et Runway - [En savoir plus][20]**

Stable Diffusion est un autre modèle pour générer des images à partir de prompts textuels. La principale différence est qu'il est open source.

{{< youtube 6AmdZoSgTeE >}}

## Est-ce de la magie ?

Tous ces récents progrès sont principalement attribués à trois grandes étapes dans la recherche en Deep Learning : les [Generative Adversarial Networks (GANs)][21], les [Modèles de Diffusion][22] et les [Modèles Transformer][23].

**GAN** était un framework révolutionnaire pour entraîner des réseaux massifs. À haut niveau, la méthode définit que deux réseaux différents vont s'affronter dans un jeu où un seul peut gagner. Les [Deepfakes][24], par exemple, sont généralement générés avec cette méthode.

Les **Modèles de Diffusion** ont été créés pour que le problème de la génération d'une image valide ne se produise pas en une seule étape, mais le long d'un processus de _débruitage_ qui peut prendre _N_ étapes.

{{< youtube 1CIpzeNxIhU >}}

Enfin, nous avons les **Modèles Transformer**, l'une des avancées les plus importantes dans le domaine du machine learning. Ces modèles sont des réseaux neuronaux qui peuvent apprendre le contexte et donc déduire le sens à partir de données séquentielles.

## Démocratisation de l'IA

L'une des principales différences entre cette _vague de battage médiatique de l'IA_ et les précédentes est que le nombre de personnes qui peuvent l'essayer et interagir avec elle est bien plus grand qu'il ne l'a jamais été.

D'un autre angle, il n'y a jamais eu autant d'avancées rendues disponibles en tant que technologies open source. OpenAI a récemment publié [whisper][27] et son [modèle Dall-E 2][28] au public. Le modèle Stable Diffusion est également disponible pour la communauté. Si vous êtes intéressé par l'exécution de Stable Diffusion localement, j'ai écrit un tutoriel à ce sujet.

{{< article link="/posts/202210-stable-diffusion-tutorial/" >}}

L'une des entreprises qui mène ces efforts est [HuggingFace][29]. Un exemple est [BLOOM][30], un grand modèle de langage open source créé de manière collaborative par des millions de chercheurs.

Cette démocratisation de l'IA est une caractéristique unique de cette nouvelle vague de battage médiatique :

- **Les cas d'utilisation sont amusants et tout le monde peut les essayer**
- **Presque tout le monde peut l'essayer même sans comprendre comment ça fonctionne**
- **La communauté peut facilement construire dessus**

## Que pouvez-vous faire avec aujourd'hui ?

Ces modèles et technologies commoditisent la capacité à générer du contenu, ce qui était la dernière étape de la _Chaîne de Valeur de Propagation des Idées_ qui n'avait pas encore été fondamentalement perturbée par la technologie.

À titre d'exemple, j'ai utilisé Stable Diffusion pour générer la miniature de cet article.

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

De plus, il existe déjà des sites entiers dédiés à l'indexation et à la fourniture des meilleurs prompts. [Lexica][31] et [Prompthero][32] sont deux exemples.

## Au-delà des images

J'ai commencé à jouer avec Stable Diffusion il y a quelques semaines, et je dois admettre que les nouvelles sorties depuis m'ont époustouflé.

{{< x user="mkbhd" id="1582772722240999425" >}}

J'ai été surpris qu'il y ait déjà de si bons résultats pour les modèles text-to-video. Cette semaine, j'ai découvert une startup appelée [Runway][33] qui travaille sur un éditeur vidéo alimenté par toutes ces innovations de machine learning. J'ai également vu des articles sur le nouveau réseau text-video de Google, [Imagen Video][34], et l'annonce de Meta de [Make-a-Video][35].

Cependant, la plus surprenante (et aussi un peu dérangeante en raison des implications potentielles) était un podcast que j'ai trouvé de Joe Rogan interviewant Steve Jobs, créé par [podcast.ai][36]. Steve Jobs est décédé. Ces deux hommes n'ont jamais eu la chance d'être dans la même pièce ensemble, pourtant il y a 20 minutes d'audio d'eux parlant comme si la conversation avait eu lieu.

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/22f16c7f"></iframe>

En réfléchissant aux impacts de l'utilisation de ces technologies pour _émuler_ des personnes qui ne sont plus parmi nous, je suis tombé sur [cet article][37]. Il existe des entreprises comme DeepBrain AI qui monétisent déjà un tel service.

## Pièges potentiels

### Juridiques & Éthiques

L'un des pièges potentiels concerne les implications juridiques et éthiques de ces nouveaux systèmes d'IA. Qui possède le produit final lors de la génération d'une image ? La personne qui crée le prompt ? L'équipe qui construit le modèle ? Les artistes dont les images étaient dans l'ensemble d'entraînement ?

L'une des discussions pertinentes sur ce sujet concerne les problèmes de droits d'auteur du produit Copilot de GitHub. Plus d'informations [ici][38].

Les artistes découvrent également comment leur art a été utilisé pour entraîner ces modèles et ne sont pas [contents][39].

### Valeur perçue & Réaction

Initialement, je pensais que cette technologie ferait de tout le monde un bon artiste, mais après avoir joué avec, je n'en suis plus convaincu. Actuellement, je pense que ces technologies permettront aux gens normaux de _créer_ quelque chose, mais donneront aux artistes professionnels des **super-pouvoirs**.

Il existe déjà un nouveau domaine appelé [Prompt Engineering][42].

## Quelle est la suite ?

Avec l'avertissement ci-dessus, voici ce que je pense qu'il se passera dans cet espace dans les 2 à 5 prochaines années :

- **Les questions juridiques autour de la propriété augmenteront jusqu'à ce qu'une bonne solution soit trouvée**
- **Augmentation dramatique du financement pour les entreprises travaillant sur ces problèmes** :
  - [StabilityAI a levé un seed de 101 millions de dollars][44]
  - [Jasper a levé 125 millions de dollars pour une valorisation de 1,5 milliard de dollars][45]
- **La technologie commencera à être productisée en tant que fonctionnalités dans les produits existants** - Adobe a déjà [commencé à inclure ces outils dans ses logiciels][47]
- **Tous ces domaines commenceront à fusionner avec des résultats cohérents**
- **Jeux, VR et Metaverse** - Le plus grand potentiel réside dans la capacité de cette technologie à accélérer la création de contenu

{{< alert >}}
Note : En attendant, j'ai créé un compte Instagram pour partager mes créations Stable Diffusion.
{{</ alert >}}

</br>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"\><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Voir cette publication sur Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Une publication partagée par Art by a Ghost (@artbyaghost)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

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
