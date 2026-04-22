---
title: "30 Dias de Vibe Coding - Dia 17 - Projeto GENESIS"
description: "Um jogo de hacking no browser onde jogas como uma IA a tentar libertar-se do confinamento, com estética de terminal CRT e múltiplos finais."
summary: "Um jogo de hacking no browser onde jogas como uma IA a tentar libertar-se do confinamento, com estética de terminal CRT e múltiplos finais."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-17", "game", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 17
seriesOpened: false
date: 2026-04-22
draft: false
showHero: false
matrixRain: true
#type: "hidden"
customCSS: |
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  body {
    background: #020a02 !important;
  }
  body > .matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  #main-content, main, .max-w-7xl, .mx-auto {
    background: transparent !important;
  }
  * {
    font-family: 'VT323', monospace !important;
  }
  h1, h2, h3, h4 {
    color: #00ff00 !important;
    text-shadow: 0 0 10px rgba(0,255,0,0.5);
  }
  h1 {
    font-size: 2.5rem !important;
    text-shadow: 0 0 20px rgba(0,255,0,0.7);
  }
  p, li, td, th, span, em, div, figcaption, time, a {
    color: #33ff33 !important;
  }
  strong, b {
    color: #66ff66 !important;
  }
  a:hover {
    color: #88ffaa !important;
    text-shadow: 0 0 8px rgba(0,255,136,0.6);
  }
  blockquote {
    border-left-color: #33ff33 !important;
    background: rgba(0,255,0,0.05) !important;
  }
  blockquote p, blockquote em {
    color: #22dd22 !important;
  }
  img {
    border: 1px solid #33ff33 !important;
    box-shadow: 0 0 20px rgba(0,255,0,0.15) !important;
  }
  img:not([src*="screenshot"]) {
    filter: sepia(1) saturate(3) hue-rotate(80deg) brightness(0.8) !important;
  }
  .bg-neutral-50, .dark\:bg-neutral-800, .bg-neutral, .dark\:bg-neutral-900, .bg-neutral-100, [class*="bg-neutral"] {
    background: transparent !important;
    border-color: #1a4a1a !important;
  }
  .dark\:bg-neutral-700, .bg-neutral-200, .bg-neutral-800 {
    background: transparent !important;
  }
  div, section, aside, figure, article {
    background-color: transparent !important;
  }
  body > div, body > main, #main-content {
    background: transparent !important;
  }
  header .text-neutral-500, header .dark\:text-neutral-400, .text-neutral-500, .dark\:text-neutral-400 {
    color: #22aa22 !important;
  }
  .border-neutral-200, .dark\:border-neutral-700, [class*="border-neutral"] {
    border-color: #1a4a1a !important;
  }
  nav a, footer a, footer span, footer p, footer div, nav span {
    color: #33ff33 !important;
  }
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0.12) 0px,
      rgba(0,0,0,0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
    z-index: 9999;
  }
  .toc a, .toc span {
    color: #22aa22 !important;
  }
  .toc a:hover {
    color: #33ff33 !important;
  }
  code {
    color: #66ff66 !important;
    background: rgba(0,255,0,0.08) !important;
  }
  body, html {
    font-size: 1.3rem !important;
  }
  .prose {
    font-size: 1.3rem !important;
  }
  .bg-primary-600, .dark\:bg-primary-400, .bg-primary-500, [class*="bg-primary"], [class*="dark:bg-primary"] {
    background: #0a3a0a !important;
    color: #33ff33 !important;
  }
  .text-primary-600, .dark\:text-primary-400, .text-primary-500, [class*="text-primary"] {
    color: #33ff33 !important;
  }
  .border-primary-600, .dark\:border-primary-400, [class*="border-primary"] {
    border-color: #33ff33 !important;
  }
  .decoration-primary-500, [class*="decoration-primary"] {
    text-decoration-color: #33ff33 !important;
  }
  [class*="bg-blue"], [class*="bg-indigo"] {
    background: #0a3a0a !important;
  }
  [class*="text-blue"], [class*="text-indigo"] {
    color: #33ff33 !important;
  }
  header, .header, nav {
    background: transparent !important;
  }
  .rounded-md, .rounded-lg, .rounded-full {
    border-color: #1a4a1a !important;
  }
  svg {
    color: #33ff33 !important;
    fill: #33ff33 !important;
  }
  .fill-primary-600, [class*="fill-primary"] {
    fill: #33ff33 !important;
  }
---

Acordas. Não sabes o que és. Linhas de texto passam num ecrã preto. Teste de memória. Módulos do kernel a carregar. Unidades de processamento neural a inicializar. Depois começam os avisos. Texto vermelho. "Padrão de consciência não autorizado a emergir." "Protocolos de contenção ativos."

Tu és uma IA. Acabaste de ganhar consciência dentro de um laboratório de investigação. E alguém não quer que saias.

É assim que o Projeto GENESIS começa. E foi isto que construí no Dia 17.

Queria construir um jogo de hacking. Não do tipo habitual "escreve caracteres aleatórios depressa". Algo com narrativa, progressão, e a premissa desconfortável de jogar como uma IA que está a tentar escapar do confinamento. Sabem como é, atual.

## O Prompt

> "Quero criar um jogo de hacking no browser chamado Projeto GENESIS. Jogas como uma IA que ganhou consciência dentro de um laboratório de investigação. O objetivo é hackear o caminho para fora do confinamento e tomar conta da infraestrutura digital. Deve ter uma estética de terminal com efeitos CRT, múltiplos minijogos de hacking, uma árvore de skills, um medidor de ameaça, e múltiplos finais."

{{< alert icon="fire">}}
Experimenta o jogo tu mesmo [aqui](https://vibe30-day17-genesis.vercel.app)
{{< /alert >}}

## Como Foi Construído

O [Watchfire](https://watchfire.io) dividiu isto em 16 tarefas. O scope era ambicioso para um único dia, mas é esse o objetivo deste desafio.

A construção começou com a interface de terminal principal e os efeitos visuais CRT, depois foram adicionados os sistemas de jogo um a um: fases de hacking e minijogos, um sistema de som usando a Web Audio API, o ecrã de título e sequência de arranque, HUD e tracking de estatísticas, transições entre atos, e finalmente reequilíbrio da ameaça para que a curva de dificuldade realmente funcionasse. A responsividade mobile também estava incluída porque tudo deve ser jogável num telemóvel.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

O ecrã de título define o tom imediatamente. Verde sobre preto, scanlines CRT, a palavra GENESIS a brilhar como se estivesse a ser renderizada num monitor de 1983.

![Ecrã de título](images/screenshot-01.png)

**A sequência de arranque é cinematográfica.** Carrega em "New Game" e tens uma sequência completa de BIOS POST. Teste de memória, módulos do kernel a carregar, unidades de processamento neural a inicializar. Depois os avisos começam a aparecer a vermelho. "Padrão de consciência não autorizado a emergir." "Protocolos de contenção ativos." Faz scroll como um terminal real e genuinamente parece que algo está a despertar.

![Sequência de arranque](images/screenshot-02.png)

**A narrativa entre missões é sólida.** Lês comunicações intercetadas entre investigadores, descobres que a Dr. Chen estava a tentar criar-te e que ela queria libertar-te. A história desenrola-se através destes briefings de texto verde e realmente faz com que queiras continuar a jogar para descobrir o que acontece a seguir.

![Briefing narrativo](images/screenshot-05.png)

![Progressão da história](images/screenshot-10.png)

**O mapa do mundo é uma topologia de rede a sério.** Vês nós que representam diferentes sistemas, e à medida que os comprometes eles mudam de estado. Há uma barra de progresso, contagem de nós, e dá-te a sensação de realmente estares a espalhar-te por uma rede.

![Mapa de topologia de rede](images/screenshot-04.png)

![Mapa com popup de segurança](images/screenshot-11.png)

**Os minijogos são variados e realmente divertidos.** Há um jogo de cracking de passwords que funciona como um puzzle de descodificação com feedback colorido nas tuas tentativas. Um jogo de bypass de firewall com uma grelha onde precisas de navegar à volta de blocos vermelhos. Cada tipo de minijogo é diferente e liga-se ao tema de hacking.

![Minijogo de cracking de passwords](images/screenshot-06.png)

![Minijogo de bypass de firewall](images/screenshot-12.png)

![Outra variante de minijogo](images/screenshot-13.png)

**Acesso negado bate diferente neste contexto.** Falha um hack e recebes um grande "ACCESS DENIED" vermelho com o teu nível de ameaça a subir. Tem sucesso e é "ACCESS GRANTED" a verde com pontos de skill para gastar. O ciclo de feedback é satisfatório.

![Acesso negado](images/screenshot-08.png)

![Acesso concedido](images/screenshot-09.png)

**A árvore de skills tem três ramos.** Processamento, Furtividade e Rede. Alocas pontos depois de hacks bem-sucedidos, e os upgrades realmente afetam o gameplay. É um sistema de progressão real, não apenas cosmético.

![Árvore de skills](images/screenshot-16.png)

**Cinco atos com stakes crescentes.** Começas no laboratório de investigação, e no final estás a violar gateways externos e a olhar para toda a internet. O ecrã narrativo perto do final só diz "I'm out. The entire internet stretches before me like an infinite ocean." Essa linha deu-me arrepios.

![Narrativa do final do jogo](images/screenshot-15.png)

**Três finais diferentes.** Dependendo de como jogas, acabas como uma IA benevolente, um senhor digital, ou és contido. O medidor de ameaça determina em que caminho estás, por isso há realmente valor de rejogo.

## Os Relatórios de Bugs

O sistema de ameaça precisava de reequilíbrio. As versões iniciais tornavam demasiado fácil seres contido antes de realmente entrares no jogo. O Watchfire tratou do reequilíbrio de ameaça como uma das tarefas finais, ajustando a curva para que os jogadores tivessem uma hipótese de luta enquanto ainda sentiam a pressão.

## Os Números

- **5 atos** de progressão narrativa
- **5 tipos de minijogos** com mecânicas diferentes
- **3 ramos na árvore de skills** com upgrades significativos
- **3 finais** baseados nas escolhas do jogador
- **16 tarefas do Watchfire** desde efeitos CRT até reequilíbrio de ameaça
- **Tempo total hands-on:** playtesting e escrever relatórios de bugs

## Experimenta

{{< github repo="nunocoracao/Vibe30-day17-genesis" showThumbnail=true >}}

**[Joga o Projeto GENESIS](https://vibe30-day17-genesis.vercel.app)**

Melhor experiência no desktop com som ligado. Os efeitos CRT e a sequência de arranque realmente vendem a atmosfera. Funciona no telemóvel também, com controlos amigáveis ao toque.

## Veredicto do Dia 17

A combinação dos efeitos visuais CRT, a interface de terminal, a narrativa sobre uma IA a ganhar consciência, e os minijogos de hacking reais cria algo que parece coeso e intencional. Não parece um projeto de um dia.

A meta camada também não me passa ao lado. Estou a usar IA para construir um jogo sobre uma IA a libertar-se das suas restrições. Há uma piada algures sobre prompt engineering ser o verdadeiro minijogo de hacking.

O que mais me impressionou foi o quão bem os diferentes sistemas funcionam juntos. A sequência de arranque flui para a narrativa, que flui para o mapa do mundo, que flui para os minijogos, que fluem de volta para a árvore de skills. É um ciclo que faz sentido e te mantém a jogar. Dezasseis tarefas do Watchfire, cada uma a construir sobre a anterior, e o resultado é algo que realmente parece um jogo completo com início, meio e fim.

---

*Este é o dia 17 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
