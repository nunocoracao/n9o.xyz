---
title: "30 Dias de Vibe Coding - Dia 12 - Wordle"
description: "Um clone completo do Wordle com animações, tema escuro/claro, modo difícil, modo para daltónicos, efeitos sonoros e celebrações com confetti."
summary: "Um clone completo do Wordle com animações, tema escuro/claro, modo difícil, modo para daltónicos, efeitos sonoros e celebrações com confetti."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-12", "react", "nextjs", "typescript", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 12
seriesOpened: false
date: 2026-04-17
draft: false
---

Dia 12. Toda a gente já jogou Wordle. Vamos ver quão perto a IA consegue chegar do original.

## O Prompt

> "Constrói um clone do Wordle com uma lista de palavras decente, animações nos blocos, teclado, estatísticas e funcionalidade de partilha."

## Como Foi Construído

Este passou por 7 tarefas no Watchfire, e acompanhar a progressão foi interessante porque espelha como realmente construirias um jogo polido se tivesses paciência infinita.

1. **Motor de jogo com listas de palavras.** A base: uma lista de soluções com cerca de 2.300 palavras, uma lista de palpites válidos com cerca de 10.000 palavras e a lógica central de avaliação dos palpites. Verde, amarelo, cinzento. O básico.
2. **UI polida com animações nos blocos e teclado.** Os blocos rodam ao revelar, saltam ao escrever, tremem quando a palavra é inválida. Um teclado no ecrã que atualiza as cores das letras à medida que jogas.
3. **Estatísticas e partilha.** Percentagem de vitórias, gráfico de barras com distribuição de palpites, sequência atual e máxima. O botão de partilha copia a tua grelha de emojis para a área de transferência, tal como no Wordle original.
4. **Modal de ajuda, tema escuro/claro, modo difícil.** Um overlay de como jogar com exemplos visuais. Alternância de tema com transições suaves. Modo difícil que te obriga a usar as dicas reveladas nos palpites seguintes.
5. **Modo para daltónicos, acessibilidade, correção de bug com React refs.** Cores de alto contraste para jogadores daltónicos. Esta tarefa também apanhou e corrigiu um bug de React refs que estava a causar problemas com as animações dos blocos.
6. **Efeitos sonoros com Web Audio API.** Feedback sonoro para pressão de teclas, revelação de blocos, vitórias e erros. Tudo gerado com a Web Audio API, por isso não há ficheiros de áudio para carregar.
7. **Celebração com confetti ao ganhar.** Um sistema de partículas baseado em canvas que dispara quando resolves o puzzle. Porque mereceste.

A coisa toda vive num único hook React customizado (`useWordle.ts`) para a lógica do jogo, com a UI como uma página Next.js. Separação limpa.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Wordle modo escuro gameplay](images/screenshot-01.png)

**Sabe a Wordle.** Era essa a fasquia, e passa-a. A animação de rotação dos blocos ao revelar, o ligeiro salto quando escreves uma letra, o tremer quando metes uma palavra inválida. Estas micro-interações são o que torna o Wordle original satisfatório de jogar, e estão todas aqui.

![Wordle modo claro](images/screenshot-02.png)

**Temas escuro e claro.** Ambos ficam bem. O modo escuro é o padrão (como deve ser), mas o modo claro também funciona bem. O alternador está no cabeçalho, as transições são suaves.

![Modal de estatísticas](images/screenshot-03.png)

**Estatísticas que persistem.** Jogos jogados, percentagem de vitórias, sequência atual, sequência máxima e um gráfico de distribuição de palpites. Tudo guardado em localStorage, por isso as tuas estatísticas sobrevivem entre sessões. O botão de partilha formata os teus resultados como uma grelha de emojis, pronto a colar em qualquer lado.

![Definições com modo difícil e modo para daltónicos](images/screenshot-04.png)

**Definições que importam.** O modo difícil é uma restrição real, não apenas um rótulo. Se descobres que a palavra tem um A na posição 3, todos os palpites seguintes têm de ter um A na posição 3. O jogo aplica a regra e diz-te porque é que o teu palpite foi rejeitado. O modo para daltónicos troca o verde e o amarelo por laranja e azul, o que é uma coisa pequena que torna o jogo jogável para muito mais pessoas.

**Efeitos sonoros sem ficheiros de áudio.** A abordagem com Web Audio API é esperta. Sem mp3s para carregar, sem audio sprites, sem pré-carregamento. Os sons são sintetizados em tempo real. Um clique suave para input de tecla, uma sequência de tons satisfatória para a revelação dos blocos, uma pequena fanfarra para a vitória. Acrescentam muito sem acrescentar peso ao download.

**Confetti que sabe bem.** Ganha o jogo e partículas de canvas explodem a partir do centro do ecrã. É um toque pequeno, mas transforma um momento calmo de "acertaste" numa celebração.

## Os Relatórios de Bugs

O problema com React refs na tarefa 5 foi o único bug real. As animações de rotação dos blocos não estavam a disparar consistentemente por causa de como o React estava a lidar com refs durante re-renders. O Watchfire apanhou-o durante a passagem de acessibilidade e corrigiu-o na mesma tarefa. Não tive de abrir um relatório separado para esse.

Fora isso, o jogo funcionou corretamente desde o início. Palavras válidas eram aceites, palavras inválidas eram rejeitadas com um tremer, as cores do teclado atualizavam-se corretamente e o modo difícil aplicava as suas regras como deve ser.

## Os Números

- **~2.300 palavras de solução** e **~10.000 palpites válidos**
- **7 tarefas do Watchfire** de motor de jogo básico a confetti
- **1 hook customizado** (`useWordle.ts`) com toda a lógica do jogo
- **Web Audio API** para efeitos sonoros sem download
- **Sistema de partículas em canvas** para celebrações de vitória
- **localStorage** para persistência de estatísticas e estado do jogo

## Experimenta

{{< github repo="nunocoracao/Vibe30-day12-wordle" showThumbnail=true >}}

**[Joga Wordle](https://vibe30-day12-wordle.vercel.app)**

Escreve uma palavra de 5 letras e carrega Enter. Verde significa letra certa, sítio certo. Amarelo significa letra certa, sítio errado. Cinzento significa que a letra não está na palavra. Seis tentativas para descobrir.

## Veredicto do Dia 12

O Wordle é daqueles jogos que parecem simples até tentares construí-lo. A lógica central é direta, mas é o polimento que o faz funcionar. As animações, o feedback do teclado, as estatísticas, a funcionalidade de partilha, a aplicação do modo difícil. Tira qualquer uma dessas coisas e deixa de parecer Wordle.

O que me impressionou aqui foi a progressão. A tarefa 1 deu-me um jogo de adivinhar palavras funcional mas feio. Pela tarefa 7 já tinha tudo o que o Wordle original tem, mais efeitos sonoros e confetti. Cada tarefa adicionou uma categoria específica de polimento, e nenhuma delas partiu o que veio antes. Isso não é fácil de fazer com animações e gestão de estado em React.

A escolha da Web Audio API para os efeitos sonoros foi uma surpresa agradável. Eu esperaria que recorresse a ficheiros de áudio. Em vez disso, gera os sons programaticamente, o que significa zero assets adicionais e reprodução instantânea. Trade-off inteligente.

O padrão mantém-se. Cada dia acrescenta polimento, e nada se desmoronou ainda.

---

*Este é o dia 12 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
