---
title: "30 Dias de Vibe Coding - Dia 2 - Snake"
description: "Um jogo Snake ao estilo Nokia 3310, com gráficos LCD autênticos, efeitos sonoros retro e uma moldura completa de telemóvel."
summary: "Um jogo Snake ao estilo Nokia 3310, com gráficos LCD autênticos, efeitos sonoros retro e uma moldura completa de telemóvel."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-02", "typescript", "react", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 2
seriesOpened: false
date: 2026-04-07
draft: false
---

Dia 2. Queria algo nostálgico.

## O Prompt

Fui com este:

> "Constrói um jogo Snake ao estilo do Nokia 3310. Ecrã LCD verde, blocos pixelizados, tudo isso. Coloca-o dentro de uma moldura de telemóvel."

Este foi praticamente o briefing completo. Tinha uma imagem visual clara na cabeça, mas não dei nenhum detalhe de implementação.

## Como Foi Construído

O [Watchfire](https://watchfire.io) pegou nesse prompt e dividiu-o em tarefas que cobriam o motor do jogo, o estilo visual Nokia, efeitos sonoros, controlos móveis e a interface da moldura do telemóvel. A lógica do jogo, a renderização LCD, o ecrã de pontuação de sete segmentos — tudo saiu desse único prompt.

Não fiquei ali a guiar cada decisão. Descrevi a vibe que queria e voltei para encontrar algo jogável.

## O Que Obtive

Este surpreendeu-me pelo quanto foi longe na estética.

![Ecrã inicial com moldura do Nokia](images/screenshot-01.png)

**Construiu um telemóvel inteiro.** Não apenas um canvas de jogo. Uma moldura Nokia 3310 completa com grelha de altifalante, marca NOKIA, D-pad, botões de ação e um bisel de ecrã com profundidade. O corpo do telemóvel tem gradientes e sombras que o fazem parecer tridimensional. Pedi uma moldura de telemóvel. Recebi um telemóvel.

![Jogabilidade com grelha LCD](images/screenshot-02.png)

**O ecrã LCD é autêntico.** O verde clássico do Nokia (#9bbc0f para quem for curioso), com uma grelha de píxeis visível, sobreposição de linhas de varrimento e um efeito de brilho no ecrã num canto. Cada célula da grelha tem uma pequena margem para simular segmentos LCD reais. A cabeça da cobra tem até olhinhos pixelizados.

**Tem um ecrã de pontuação de sete segmentos.** Não é apenas um número no ecrã. É um ecrã LCD de sete segmentos renderizado em SVG, posicionado fora do ecrã de jogo, como o ecrã secundário de um telemóvel. Pontuação e recorde, ambos renderizados com o sombreamento adequado dos segmentos inativos.

![Cobra a crescer a meio do jogo](images/screenshot-03.png)

**A comida pulsa.** Há uma animação sinusoidal no bloco de comida que o faz vibrar suavemente. A cobra acelera cada vez que come. Começa nos 150ms por tick e reduz até um mínimo de 50ms. A curva de dificuldade está integrada no ciclo do jogo, não definida por nível de forma estática.

**Efeitos sonoros retro.** Sons de oscilador de onda quadrada gerados através da Web Audio API. Tons ascendentes ao iniciar, um gorjeio alegre ao comer, tons descendentes tristes no fim do jogo. Tudo sintetizado em tempo real, sem necessidade de ficheiros de áudio. Até guarda a tua preferência de silêncio no localStorage.

![Ecrã de fim de jogo com recorde](images/screenshot-04.png)

**Persistência do recorde.** Guarda a melhor pontuação no localStorage e mostra uma mensagem "NEW HIGH SCORE!" com animação de pulso quando o bates. O ecrã de fim de jogo tem um ícone de caveira em pixel art construído com uma grelha CSS.

**Controlos móveis.** Em dispositivos tácteis, renderiza um D-pad com um botão de pausa central. No computador, mostra botões decorativos que combinam com a estética do telemóvel. Deteta o tipo de dispositivo e adapta-se. Há também controlos por deslize como alternativa.

**Moldura de telemóvel alternável.** Podes alternar entre a moldura completa do Nokia e uma vista minimalista apenas com o ecrã de jogo. A preferência persiste no localStorage.

## Os Números

- **8 módulos de código fonte** (GameBoard, StartScreen, GameOverScreen, PauseOverlay, ScoreDisplay, useSnakeGame, useSound, mais o layout da página)
- **~2.100 linhas de TypeScript e React**
- **Zero bibliotecas externas de jogo** (apenas Next.js e React, a lógica do jogo está toda em hooks personalizados e Canvas)
- **5 efeitos sonoros sintetizados** via Web Audio API
- **Tempo total envolvido:** talvez 20 minutos a jogar e a ajustar o prompt

## Experimenta

{{< github repo="nunocoracao/Vibe30-day02-Snake" showThumbnail=true >}}

**[Jogar Snake II](https://vibe30-day02-snake.vercel.app)**

Teclas de seta ou WASD para mover, espaço para pausar. Funciona em dispositivos móveis com controlos D-pad.

## Veredicto do Dia 2

Pedi um jogo Snake numa moldura Nokia. Recebi uma simulação completa de telemóvel com áudio sintetizado, ecrãs de sete segmentos, efeitos de linhas de varrimento LCD e persistência no localStorage para pontuações, preferências de som e visibilidade da moldura.

O que se destaca é quanto do trabalho foi dedicado a detalhes que nunca pedi. O brilho do ecrã. Os pontos da grelha do altifalante. A animação de pulso na comida. A caveira em pixel art no ecrã de fim de jogo. Estas são decisões de polimento que levariam horas a implementar manualmente, e apareceram de graça.

Conseguiria ter construído o Snake sozinho? Provavelmente, dado tempo suficiente. Mas teria feito um quadrado verde numa grelha com um contador de pontuação. Não teria construído um simulador de Nokia 3310 com áudio chiptune sintetizado e controlos móveis responsivos. O abismo entre o que eu teria construído e o que obtive é o ponto central deste desafio.

Dois dias, dois jogos lançados. O padrão do Dia 1 mantém-se: o ponto de partida já não é um ficheiro em branco, e o ponto de chegada está muito além do que eu teria visado por conta própria.

---

*Este é o dia 2 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias com programação assistida por IA.*
