---
title: "30 Days of Vibe Coding - Dia 5 - Breakout"
description: "Um clássico jogo de arcade Breakout com 5 níveis, power-ups, sistema de combo, e efeitos de partículas, construído com TypeScript e HTML5 Canvas."
summary: "Um clássico jogo de arcade Breakout com 5 níveis, power-ups, sistema de combo, e efeitos de partículas, construído com TypeScript e HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-05", "typescript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 5
seriesOpened: true
date: 2026-04-10
draft: false
---

Dia 5. Mais um clássico dos arcades. Desta vez quis ver o que acontece quando peço o Breakout.

## O Prompt

> "Quero criar um jogo de arcade estilo Breakout/Arkanoid com vários níveis, power-ups, sistema de combo de pontuação, e física suave"

Um pouco mais específico do que alguns dos meus prompts anteriores. Ao fim de 5 dias, estava a aprender que ser ligeiramente mais intencional com as funcionalidades que se querem logo de início poupa o trabalho de registar bugs mais tarde.

## Como Foi Construído

Usei o [Watchfire](https://watchfire.io) novamente para este. É fácil de perceber pelo package.json, que é automaticamente nomeado com o prefixo `watchfire-0000`. Dei-lhe o prompt e ele tratou do resto. O jogo inteiro vive num único componente React que envolve um HTML5 Canvas, um padrão que já vi algumas vezes nestas construções diárias. Não é a arquitetura mais limpa, mas funciona e é lançada.

A stack tecnológica é Next.js com TypeScript e Tailwind CSS. O rendering do jogo é todo baseado em Canvas, com o React a tratar da interface de sobreposição para menus e ecrãs de pausa.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

Um clone do Breakout totalmente jogável com muito mais polimento do que esperava.

![Início do nível 1 com grelha completa de blocos](images/screenshot-01.png)

**Cinco níveis com padrões únicos.** "The Beginning" é uma grelha completa standard. "Diamond Formation" organiza os blocos em forma de diamante. "Fortress" constrói paredes com brechas. "Waves" alterna filas. "Final Challenge" é um padrão denso em camadas. Cada nível aumenta o multiplicador de velocidade da bola, passando de 1,0x até 1,5x.

![A meio do jogo com rasto da bola e blocos a partir](images/screenshot-02.png)

**Os power-ups realmente importam.** Quatro tipos caem dos blocos destruídos: raquete larga (10 segundos), bola lenta (8 segundos), multi-bola (divide-se em várias bolas até as perder), e vida extra (instantâneo). Blocos especiais "super" têm o dobro da probabilidade de largar power-ups. Os power-ups descem a flutuar como esferas brilhantes que se apanham com a raquete.

![A limpar blocos com power-ups ativos](images/screenshot-03.png)

**O sistema de combo acrescenta profundidade.** Acertos encadeados constroem um multiplicador de pontuação até 3x. O combo decai após 2 segundos sem acertos, pelo que há incentivo para manter a bola a mover-se rapidamente e a acertar em blocos em sucessão rápida. É um pormenor pequeno, mas muda a forma como se joga.

![Nível avançado com disposição de blocos esparsa](images/screenshot-04.png)

**Efeitos visuais por todo o lado.** Explosões de partículas quando os blocos partem. Um efeito de rasto na bola. Vibração do ecrã em certos acertos. Efeitos de flash. Um fundo de campo de estrelas a cintilar. Os blocos têm um esquema de cores em gradiente neon com filas em rosa quente, laranja, amarelo, verde e ciano. Nada disto era estritamente necessário para um jogo de Breakout, mas faz com que tudo pareça vivo.

![Nível 2 com formação em diamante](images/screenshot-05.png)

**Três tipos de blocos.** Os blocos normais partem com um acerto. Os blocos fortes precisam de vários acertos (têm um indicador de HP visível). Os blocos super são ainda mais resistentes e têm maior probabilidade de largar power-ups. Os padrões dos níveis misturam estes tipos para criar desafios diferentes.

## Os Relatórios de Bugs

Honestamente, este foi bastante limpo. A física pareceu certa desde o início, o movimento da raquete era suave tanto com rato como com teclado, e os níveis carregaram corretamente. Nenhum bug de relevo a reportar nesta build.

## Os Números

- **5 níveis** com padrões de blocos únicos e dificuldade crescente
- **4 tipos de power-up** com durações temporizadas
- **~2.300 linhas de TypeScript** num único componente de jogo
- **3 tipos de blocos** (normal, forte, super)
- **3 métodos de controlo:** teclado, rato e toque

## Experimenta

{{< github repo="nunocoracao/Vibe30-day05-breakout" showThumbnail=true >}}

**[Jogar Breakout](https://vibe30-day05-breakout.vercel.app)**

Rato ou teclas de seta para mover a raquete. Espaço ou clique para lançar a bola. P ou Escape para pausar.

## Veredicto do Dia 5

Cinco dias passados e estou a notar um padrão. Estes jogos baseados em Canvas são o ponto ideal para programação assistida por IA. O âmbito é claro, as regras são bem definidas, e há uma forma imediata de testar se funciona: basta jogar.

O que me surpreendeu aqui foi o sistema de partículas e o polimento visual. Não pedi vibração de ecrã, rastros de bola, nem um fundo de estrelas. A IA simplesmente decidiu que o jogo ficaria melhor com essas coisas, e tinha razão. O sistema de combo também foi um toque agradável. Transforma um simples jogo de "bate na bola, parte os blocos" em algo onde se pensa realmente no ângulo e no timing.

Vai competir com o Arkanoid original? Não. Mas é um jogo completo com vários níveis, power-ups, e um sistema de pontuação que nos faz querer repetir os níveis. Construído em um dia, a partir de um único prompt.

---

*Este é o dia 5 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
