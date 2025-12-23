---
title: "Como Executar o Stable Diffusion no Teu Portátil"
description: "No último ano, vários modelos de aprendizagem automática tornaram-se disponíveis ao público para gerar imagens a partir de descrições textuais. Este foi um desenvolvimento interessante no espaço da IA. No entanto, só recentemente esta tecnologia se tornou disponível para todos experimentarem."
summary: "No último ano, vários modelos de aprendizagem automática tornaram-se disponíveis ao público para gerar imagens a partir de descrições textuais. Este foi um desenvolvimento interessante no espaço da IA. No entanto, só recentemente esta tecnologia se tornou disponível para todos experimentarem."
categories: ["Tecnologia","Tutorial"]
tags: ["IA","Stable Diffusion","Rede Neuronal"]
#externalUrl: ""
date: 2022-10-06
draft: false
series: ["O Novo Hype da IA"]
series_order: 3
---

No último ano, vários modelos de aprendizagem automática tornaram-se disponíveis ao público para gerar imagens a partir de descrições textuais. Este foi um desenvolvimento interessante no espaço da IA. No entanto, a maioria destes modelos permaneceu closed source por razões éticas válidas. Por causa disto, mesmo que possas interagir com eles através de alguma interface, estás limitado no número de coisas que podes testar. Até agora…

O mais recente destes modelos é o Stable Diffusion, um modelo de aprendizagem automática aberto desenvolvido pela <a href="https://stability.ai/" target="_blank">Stability AI</a> para gerar imagens digitais a partir de descrições em linguagem natural. Este modelo tornou-se bastante popular, principalmente porque foi o primeiro a ser open source.

Já brinquei com o <a href="https://openai.com/dall-e-2/" target="_blank">Dall-E</a> e o <a href="https://www.midjourney.com/home/" target="_blank">Midjourney</a>, mas queria tentar executar um modelo localmente e ter mais liberdade para experimentar. Consegui instalar e executar o modelo com sucesso no meu M1 Pro e no meu desktop Windows. Este guia detalha os passos que segui para pôr tudo a funcionar no meu Mac.

## Notas Iniciais

Algumas notas antes de começarmos. Tentei vários guias online e não consegui ter uma experiência suave com nenhum deles. Tive de tentar inúmeros repos, soluções, etc. O principal objetivo deste guia é fornecer instruções sobre como executar o Stable Diffusion num M1, que foi onde encontrei mais desafios. Instalar no Windows foi muito mais direto.

Dito isto, o repo que acabei por usar tem guias detalhados para todas as plataformas: <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_WINDOWS.md" target="_blank">Windows</a>, <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md" target="_blank">Mac</a> e <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_LINUX.md" target="_blank">Linux</a>. Não hesites em usar qualquer um desses se estiveres a usar outra plataforma ou se este guia não funcionar para ti no Mac.

{{< alert >}}
*Nota: Não experimentei o guia Mac acima, pois quando encontrei este repo já tinha descoberto a maioria dos workarounds necessários para fazer o modelo funcionar.*
{{< /alert >}}

## Obter o Código

Vamos começar por obter o código. Estou a usar o <a href="https://github.com/invoke-ai/InvokeAI" target="_blank">fork do InvokeAI do Stable Diffusion</a>, que forkei <a href="https://github.com/nunocoracao/InvokeAI" target="_blank">aqui</a>. Podes usar o repo original do InvokeAI se preferires. Vou usar o meu fork para garantir que o guia permanece atualizado e funcional ao longo do tempo.

Para começar, clona o repo para a tua máquina local.

```bash
git clone https://github.com/nunocoracao/InvokeAI
```

## Obter o Modelo

Agora precisas de obter o modelo real que contém os pesos para a rede. Este é o resultado de ciclos massivos de treino com conjuntos de dados enormes com os quais um utilizador normal com hardware médio não pode competir. O modelo não é distribuído com o código devido ao seu tamanho (cerca de 7,5 GB) e para garantir que os utilizadores têm de cumprir uma licença.

Vai simplesmente ao <a href="https://huggingface.co/" target="_blank">site da Hugging Face</a> e faz login, ou cria uma conta se não tiveres uma. Quando estiveres configurado, clica <a href="https://huggingface.co/CompVis/stable-diffusion-v-1-4-original" target="_blank">aqui</a>, aceita os termos no model card e descarrega o ficheiro chamado `sd-v1-4-full-ema.ckpt`. Depois de descarregares o modelo, vai para a pasta do código e coloca-o em `models/ldm/stable-diffusion-v1/` com o nome `model.ckpt`. A pasta `stable-diffusion-v1` não existe e precisa de ser criada.

{{< alert >}}
*Nota: existem outras variantes do modelo que podes explorar, esta é a recomendada pela maioria dos repos que vi.*
{{< /alert >}}

## Configurar o Ambiente

Com o código e o modelo prontos, o próximo passo é configurar o ambiente local para executar tudo.

### Instalar o Xcode

O primeiro passo é instalar o Xcode. O Xcode pode ser instalado a partir da App Store, ou podes descarregá-lo do site Developer da Apple.

```bash
xcode-select --install
```

### Instalar o Conda

A maioria das soluções que vi usa o <a href="https://docs.conda.io/projects/conda/en/latest/#" target="_blank">Conda</a> para gerir os pacotes e ambientes necessários. O guia de instalação do Conda é muito claro, por isso aconselho-te a seguir as instruções <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation" target="_blank">aqui</a>.

```bash
conda
```

Se o processo de instalação foi bem-sucedido, deves ver algo como a imagem abaixo.

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/conda_result.webp"/>

### Instalar o Rust

Quando seguia outros guias, tinha sempre problemas na parte seguinte do processo, a construção dos ambientes. Depois de muitas tentativas, percebi que me faltava o compilador Rust.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Construir e Ativar o Ambiente

Estamos quase lá. Agora vamos criar o ambiente `ldm` e ativá-lo antes de começar a gerar imagens.

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env create -f environment-mac.yml
```

Se tiveres problemas neste passo e precisares de reconstruir o ambiente:

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env update -f environment-mac.yml
```

*Se estiveres num Mac Intel o comando deve ser:*
```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-64 conda env create -f environment-mac.yml
```

Agora é hora de ativar o ambiente usando:

```bash
conda activate invokeai
```

O último passo é pré-carregar os modelos usando o comando:

```bash
python scripts/preload_models.py
```

## Diverte-te…

Agora é hora de começar a brincar com o Stable Diffusion. Executa:

```bash
python scripts/invoke.py --full_precision --web
```

E abre o teu browser em `localhost:9090`

Deves ver uma interface Web como a abaixo.

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/webui_new.webp"/>

Escolhe o teu primeiro prompt e experimenta o modelo, todas as imagens serão guardadas em `output/img-samples`. Explora os vários modelos e configurações possíveis. Tenho executado o meu com imagens `512x512`, cerca de `100` ciclos para as imagens finais (`5` para as variantes iniciais), e config scale a `7.5`. Como sampler prefiro os resultados usando `DDIM`.

## Alguns Exemplos

Aqui estão alguns exemplos de imagens das minhas execuções iniciais do modelo. Deixo aqui alguns links para obter ideias sobre como começar a desenhar `prompts`.

- <a href="https://decentralizedcreator.com/10-best-text-to-image-prompts-for-ai-art-generator-disco-diffusion-a-visual-treat-inside/" target="_blank">10 Melhores Prompts Text-to-Image para Gerador de Arte IA</a>
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

## Aviso & Outras Opções

Existem imensas opções para executar o modelo Stable Diffusion, algumas locais, algumas na cloud (ex: Google Colab), por isso não te frustres se quiseres experimentar isto mas não tiveres acesso a uma máquina que o possa executar. Existem provavelmente outras soluções que podes usar.

Identifica-me nas redes sociais com as tuas criações se conseguires pôr isto a funcionar:

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://twitter.com/nunocoracao" target="_blank" >}}
    {{< icon "twitter" >}}&nbsp;
    Segue-me no Twitter
    {{< /button >}}
  </div>
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://www.instagram.com/nunocoracao/" target="_blank" >}}
    {{< icon "instagram" >}}&nbsp;
    Segue-me no Instagram
    {{< /button >}}
  </div>
</div>
