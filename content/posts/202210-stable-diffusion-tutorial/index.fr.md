---
title: "Comment Exécuter Stable Diffusion sur Votre Ordinateur Portable"
description: "Au cours de l'année dernière, plusieurs modèles d'apprentissage automatique sont devenus disponibles au public pour générer des images à partir de descriptions textuelles. Cela a été un développement intéressant dans l'espace de l'IA. Cependant, cette technologie n'est devenue disponible pour tous que très récemment."
summary: "Au cours de l'année dernière, plusieurs modèles d'apprentissage automatique sont devenus disponibles au public pour générer des images à partir de descriptions textuelles. Cela a été un développement intéressant dans l'espace de l'IA. Cependant, cette technologie n'est devenue disponible pour tous que très récemment."
categories: ["Technologie","Tutoriel"]
tags: ["IA","Stable Diffusion","Réseau Neuronal"]
#externalUrl: ""
date: 2022-10-06
draft: false
series: ["Le Nouveau Battage Médiatique de l'IA"]
series_order: 3
---

Au cours de l'année dernière, plusieurs modèles d'apprentissage automatique sont devenus disponibles au public pour générer des images à partir de descriptions textuelles. Cela a été un développement intéressant dans l'espace de l'IA. Cependant, la plupart de ces modèles sont restés closed source pour des raisons éthiques valides. Pour cette raison, même si vous pouvez interagir avec eux via une interface, vous êtes limité dans le nombre de choses que vous pouvez tester. Jusqu'à maintenant…

Le dernier de ces modèles est Stable Diffusion, un modèle d'apprentissage automatique ouvert développé par <a href="https://stability.ai/" target="_blank">Stability AI</a> pour générer des images numériques à partir de descriptions en langage naturel. Ce modèle est devenu assez populaire, principalement parce qu'il a été le premier à être open source.

J'ai déjà joué avec <a href="https://openai.com/dall-e-2/" target="_blank">Dall-E</a> et <a href="https://www.midjourney.com/home/" target="_blank">Midjourney</a>, mais je voulais essayer d'exécuter un modèle localement et avoir plus de liberté pour expérimenter. J'ai réussi à installer et exécuter le modèle avec succès sur mon M1 Pro et sur mon bureau Windows. Ce guide détaille les étapes que j'ai suivies pour faire fonctionner le tout sur mon Mac.

## Notes Initiales

J'ai essayé plusieurs guides en ligne et je n'ai pas réussi à avoir une expérience fluide avec aucun d'entre eux. Le repo que j'ai finalement choisi a des guides détaillés pour toutes les plateformes : <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_WINDOWS.md" target="_blank">Windows</a>, <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md" target="_blank">Mac</a> et <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_LINUX.md" target="_blank">Linux</a>.

## Obtenir le Code

```bash
git clone https://github.com/nunocoracao/InvokeAI
```

## Obtenir le Modèle

Allez sur le <a href="https://huggingface.co/" target="_blank">site de Hugging Face</a>, connectez-vous, cliquez <a href="https://huggingface.co/CompVis/stable-diffusion-v-1-4-original" target="_blank">ici</a>, acceptez les termes et téléchargez `sd-v1-4-full-ema.ckpt`. Placez-le dans `models/ldm/stable-diffusion-v1/` avec le nom `model.ckpt`.

## Configurer l'Environnement

### Installer Xcode

```bash
xcode-select --install
```

### Installer Conda

Suivez les instructions <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation" target="_blank">ici</a>.

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/conda_result.webp"/>

### Installer Rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Construire et Activer l'Environnement

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env create -f environment-mac.yml
conda activate invokeai
python scripts/preload_models.py
```

## Amusez-vous…

```bash
python scripts/invoke.py --full_precision --web
```

Ouvrez votre navigateur sur `localhost:9090`

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/webui_new.webp"/>

## Quelques Exemples

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

## Avertissement & Autres Options

Il existe de nombreuses options pour exécuter le modèle Stable Diffusion, certaines locales, certaines dans le cloud (ex. Google Colab). Taguez-moi sur les réseaux sociaux avec vos créations si vous réussissez à faire fonctionner ceci :

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://twitter.com/nunocoracao" target="_blank" >}}
    {{< icon "twitter" >}}&nbsp;
    Suivez-moi sur Twitter
    {{< /button >}}
  </div>
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://www.instagram.com/nunocoracao/" target="_blank" >}}
    {{< icon "instagram" >}}&nbsp;
    Suivez-moi sur Instagram
    {{< /button >}}
  </div>
</div>
