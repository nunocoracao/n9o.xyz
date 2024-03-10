---
title: "Como executar difusão estável em seu laptop"
description: "No ano passado, vários modelos de aprendizado de máquina foram disponibilizados ao público para gerar imagens a partir de descrições textuais. Este tem sido um desenvolvimento interessante no espaço da IA. No entanto, apenas recentemente esta tecnologia ficou disponível para todos experimentarem."
summary: "No ano passado, vários modelos de aprendizado de máquina foram disponibilizados ao público para gerar imagens a partir de descrições textuais. Este tem sido um desenvolvimento interessante no espaço da IA. No entanto, apenas recentemente esta tecnologia ficou disponível para todos experimentarem."
categories: ["Tecnologia","Tutorial",]
tags: ["AI","Difusão Estável","Rede Neural"]
#externalUrl: ""
date: 2022-10-06
draft: false
authors:
  - nunocoracao
series: ["The New AI Hype"]
series_order: 3

---
No último ano, diversos modelos de aprendizado de máquina foram disponibilizados ao público para gerar imagens a partir de descrições textuais. Este tem sido um desenvolvimento interessante no espaço da IA. No entanto, a maioria desses modelos permaneceu de código fechado por razões éticas válidas. Por causa disso, mesmo que você possa interagir com eles por meio de alguma interface, você está limitado no número de coisas que pode testar. Até agora…

O mais recente desses modelos é o Stable Diffusion, que é um modelo aberto de aprendizado de máquina desenvolvido pela <a href="https://stability.ai/" target="_blank">Stability AI</a> para gerar imagens digitais a partir de imagens naturais. descrições de linguagem. Este modelo tornou-se bastante popular, principalmente por ter sido o primeiro a ter código aberto.

Já brinquei com <a href="https://openai.com/dall-e-2/" target="_blank">Dall-E</a> e <a href="https:// www.midjourney.com/home/" target="_blank">Midjourney</a>, mas queria tentar executar um modelo localmente e ter mais liberdade para brincar com as coisas. Consegui instalar e executar o modelo com sucesso em meu M1 Pro e em minha área de trabalho do Windows. Este guia detalha as etapas que segui para fazer tudo funcionar no meu Mac.


## Notas Iniciais
Algumas notas antes de chegarmos ao assunto. Tentei vários guias online e não consegui uma experiência tranquila com nenhum deles. Tive que tentar vários repositórios, soluções, etc. O objetivo principal deste guia é fornecer instruções sobre como executar o Stable Diffusion em um M1, que foi aquele onde encontrei mais desafios. A instalação no Windows foi muito mais simples.

Dito isto, o repositório que acabei adotando contém guias detalhados para todas as plataformas: <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_WINDOWS.md" target=" _blank">Windows</a>, <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md" target="_blank">Mac</a>, e <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_LINUX.md" target="_blank">Linux</a>. Não hesite em usar qualquer um deles se estiver usando outra plataforma ou se este guia não funcionar para você em um Mac.

{{< alerta >}}
*Observação: não tentei o guia do Mac acima, pois quando encontrei este repositório, já havia descoberto a maioria das soluções alternativas necessárias para fazer o modelo funcionar.*
{{< /alert >}}


## Obtenha o código

Vamos começar obtendo o código. Estou usando o <a href="https://github.com/invoke-ai/InvokeAI" target="_blank">o fork do Stable Diffusion</a> do InvokeAI, que eu bifurquei <a href="https:// github.com/nunocoracao/InvokeAI" target="_blank">aqui</a>. Você pode usar o repositório original da InvokeAI se desejar. Vou usar meu fork para garantir que o guia permaneça atualizado e funcionando ao longo do tempo. Acabei escolhendo este repo porque 1) foi o primeiro que consegui e 2) fazia parte de alguns forks que tinham uma UI Web, o que tornava as interações com tudo muito mais fáceis.

Para começar, clone o repositório em sua máquina local.

```bash
clone do git https://github.com/nunocoracao/InvokeAI
```

## Obtenha o modelo

Agora, você precisa obter o modelo real que contém os pesos da rede. Isso é o resultado de ciclos massivos de treinamento com enormes conjuntos de dados com os quais um usuário normal com hardware médio não consegue nem tentar competir. O modelo não é distribuído com o código devido ao seu tamanho (cerca de 7,5 GB) e para garantir que os usuários precisem cumprir uma licença para ele, é aí que entra o Hugging Face.

Basta acessar o <a href="https://huggingface.co/" target="_blank">site do Hugging Face</a> e fazer login ou criar uma conta, se ainda não tiver uma. Depois de configurar, clique <a href="https://huggingface.co/CompVis/stable-diffusion-v-1-4-original" target="_blank">aqui</a> e aceite os termos em o modelo do cartão e baixe o arquivo chamado `sd-v1-4-full-ema.ckpt`. Depois de baixar o modelo, vá para a pasta de código e coloque-o em `models/ldm/stable-diffusion-v1/` com o nome `model.ckpt`. A pasta `stable-diffusion-v1` não existe e precisa ser criada.


{{< alerta >}}
*Nota: existem outras variantes do modelo que você pode explorar, esta é a recomendada pela maioria dos repositórios que vi.*
{{< /alert >}}

## Ambiente de configuração

Com o código e o modelo prontos, o próximo passo é configurar o ambiente local para rodar tudo.

### Instale o Xcode

O primeiro passo é instalar o Xcode, que é um conjunto de ferramentas que os desenvolvedores usam para criar aplicativos para plataformas Apple. O Xcode pode ser instalado na App Store ou você pode baixá-lo no site de desenvolvedores da Apple.

Conforme definido na documentação, o pacote de ferramentas de linha de comando é um pequeno pacote independente disponível para download separadamente do Xcode e que permite desenvolver a linha de comando no macOS.

Para uma nova instalação ou para garantir que você tenha tudo o que precisamos, este comando deve ser suficiente:

```bash
xcode-select --install
```

### Instale o Conda

A maioria das soluções que vi usa <a href="https://docs.conda.io/projects/conda/en/latest/#" target="_blank">Conda</a> para gerenciar os pacotes necessários e ambientes necessários para executar a solução. O guia do Conda para instalar em qualquer plataforma é super claro, então aconselho apenas seguir as instruções <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/index .html#regular-installation" target="_blank">aqui</a>. Eles têm dois _sabores_ de seu software: Anaconda e Miniconda. Tentei o Miniconda sem sucesso. Acabei usando o Anaconda que resolveu alguns dos problemas que estava enfrentando. Além disso, segui <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/macos.html" target="_blank">este guia</a>, quando estiver configurado, você pode usar este comando para verificar sua instalação (_Nota: não se esqueça de reiniciar seu aplicativo de terminal_):

```bash
Conda
```

Se o processo de instalação foi bem-sucedido, você deverá ver algo como a imagem abaixo.

<img class="thumbnailshadow" src="conda_result.png"/>

{{< alerta >}}
*Nota: `conda` exigirá que os comandos `python` e `pip` estejam disponíveis no terminal ao criar o ambiente nas próximas etapas. Certifique-se de tê-los configurados corretamente, pois no Mac os padrões são python3 e pip3, então provavelmente você precisará criar um alias.*
{{</ alerta >}}


### Instalar ferrugem

Ao seguir alguns outros guias, sempre teria problemas na próxima parte do processo, a construção dos ambientes. Depois de muitas tentativas, percebi que estava faltando o compilador Rust em meu sistema. Segui o guia de instalação do Rust <a href="https://www.rust-lang.org/tools/install" target="_blank">aqui</a>, o que equivale a executar o seguinte comando:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | eh
```

{{< alerta >}}
*Observação: não voltei a todos os guias do repositório que estou usando para verificar se isso é necessário ou não em seu método. Não hesite em tentar a próxima etapa sem instalar o Rust e volte se tiver problemas.*
{{< /alert >}}

### Construa e ative o ambiente

Estamos quase lá. Agora vamos criar o ambiente `ldm` e ativá-lo antes de começar a gerar imagens. Para fazer isso, faça `cd` na raiz do repositório que você clonou no início deste guia e crie o ambiente usando o seguinte comando:

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env create -f ambiente-mac.yml
```

Caso você tenha algum problema nesta etapa e precise reconstruir o ambiente, você tem duas opções: 1) usando o comando abaixo:

```bash
PIP_EXISTS_ACTION = w CONDA_SUBDIR = osx-arm64 conda env atualização -f ambiente-mac.yml
```

*Se você estiver em um Mac Intel, o comando deve ser:*
```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-64 conda env create -f ambiente-mac.yml
```

Ou 2) vá para a pasta do Anaconda, exclua o ambiente e crie o ambiente com o comando original nesta seção. Depois de tentar vários repositórios, tive que confiar em 2) para limpar a bagunça.

Agora é hora de ativar o ambiente usando:

```bash
conda ativar invocaai
```

A última etapa é pré-carregar os modelos usando o comando:

```bash
scripts python/preload_models.py
```


## Divirta-se…

Agora é hora de começar a brincar com o Stable Diffusion. Correr:

```bash
scripts python/invoke.py --full_precision --web
```

E abra seu navegador em `localhost:9090`

Você deverá ver uma interface da Web como a mostrada abaixo.

<img class="thumbnailshadow" src="webui_new.png"/>


Escolha seu primeiro prompt e experimente o modelo, todas as imagens serão salvas em `output/img-samples`. Explore os vários modelos e configurações possíveis. Estou executando o meu com imagens `512x512`, cerca de `100` ciclos para as imagens finais (`5` para as variantes iniciais) e escala de configuração em. `7,5`. Como amostrador eu prefiro os resultados usando `DDIM`, você pode encontrar alguns detalhes sobre as diferenças entre amostradores e alguns exemplos em <a href="https://www.reddit.com/r/StableDiffusion/comments/x4zs1r/comparison \_between\_ Different\_samplers\_in\_stable/" target="_blank">este tópico do Reddit</a>.

Desde que escrevi este artigo originalmente, há uma nova versão da implementação de difusão estável do InvokeAI. Além do que descrevi acima, há muitos novos recursos que você pode explorar, mais detalhes [aqui](https://github.com/invoke -ai/InvokeAI/releases/tag/v2.0.0).

## Alguns exemplos

Aqui estão alguns exemplos de imagens de minhas execuções iniciais do modelo. Devo dizer que há alguma _arte_ em fazer isso funcionar. Estou deixando aqui alguns links para ter algumas idéias sobre como começar a projetar `prompts`.

- <a href="https://decentralizedcreator.com/10-best-text-to-image-prompts-for-ai-art-generator-disco-diffusion-a-visual-treat-inside/" target=" _blank">10 melhores solicitações de texto para imagem para AI Art Generator</a>
- <a href="https://prompthero.com/" target="_blank">Prompthero</a>


<div style="display: flex; flex-wrap: wrap;">

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000008.2887160172.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000023.4136023390.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000024.2854274560.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000028.4255152621.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000031.1604394908.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000036.1662843642.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000043.2287582219.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000045.234321637.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000057.107659121.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000058.157499426.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000063.2383238266.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000067.2841883613.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000102.4159217524.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000116.829934269.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000145.2404672998.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="examples/000149.811067720.png"/>
  </div>
  
</div>

## Isenção de responsabilidade e outras opções

Algumas coisas antes de encerrar. Embora eu tenha instalado isso em um Mac e em um Windows, e a experiência do Mac com um M1 Pro não tenha sido nada ruim, o desempenho em minha máquina Windows com uma Nvidia RTX 2070 foi muito melhor. A maioria das imagens que você vê neste guia foram geradas a partir desse sistema, pois me permitiu ser mais rápido ao testar variantes e obter mais qualidade das amostras que gostei.

Um dos objetivos iniciais que eu tinha era ser capaz de estender o modelo com treinamento adicional, ou seja, colocar meu rosto no modelo e brincar com ele. Infelizmente, isso não foi possível porque não consegui executar os métodos de treinamento no Mac e minha GPU no Windows não possui os requisitos adequados para treinar o modelo. Atualmente, parece que você precisa de pelo menos 16 Gb de VRAM para fazer isso.

Em última análise, existem inúmeras opções para executar o modelo Stable Diffusion, algumas localmente, outras na nuvem (por exemplo, Google Colab), então não fique frustrado se quiser experimentar isso, mas não tiver acesso a um máquina que possa executá-lo. Provavelmente existem outras soluções que você pode usar.

Marque-me em suas criações nas redes sociais se você fizer isso funcionar:

<div style="display: flex; flex-wrap: wrap;">

  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://twitter.com/nunocoracao" target="_blank" >}}
    {{< ícone "Twitter" >}}
    Siga me no twitter
    {{< /botão >}}
  </div>

  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://www.instagram.com/nunocoracao/" target="_blank" >}}
    {{<ícone "instagram" >}}
    Me siga no Instagram
    {{< /botão >}}
  </div>

</div>