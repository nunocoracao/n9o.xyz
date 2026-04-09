---
title: "30 Days of Vibe Coding - Dia 4 - Tetris"
description: "Um clone clássico do Tetris com blocos em estilo 3D, o tema Korobeiniki, efeitos sonoros e todas as funcionalidades que se esperariam de um verdadeiro clone do Tetris."
summary: "Um clone clássico do Tetris com blocos em estilo 3D, o tema Korobeiniki, efeitos sonoros e todas as funcionalidades que se esperariam de um verdadeiro clone do Tetris."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-04", "typescript", "nextjs", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 4
seriesOpened: true
date: 2026-04-09
draft: false
---

Dia 4. Toda a gente conhece o Tetris. É precisamente isso que o torna um bom teste. Sabes exactamente como deve ser a sensação, por isso notas imediatamente quando algo está errado.

## O Prompt

> "Quero criar um jogo de Tetris para a web com blocos em estilo 3D, música e efeitos sonoros"

## Como Foi Construído

Este passou pelo [Watchfire](https://watchfire.io) como os outros. O nome do pacote no repositório conta a história: `watchfire-0001-initialize-nextjs-project-with`. Começou a partir de um único prompt e o Watchfire dividiu-o em tarefas que cobriram a configuração do projecto, a gestão do estado do jogo, o renderizador do tabuleiro, as definições das peças com estados de rotação, o sistema de áudio e os componentes de interface.

A arquitectura escolhida foi React com hooks. Três hooks personalizados tratam da lógica principal: `useGameState` para o redutor do jogo e o ciclo de tick, `useGameMusic` para o tema Korobeiniki, e `useSoundEffects` para todo o áudio dentro do jogo. O próprio estado do jogo é um redutor com acções para cada movimento, rotação, queda rápida e pausa. Wall kicks, eliminação de linhas, progressão de nível, pontuação. Todos os fundamentos do Tetris.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

Este surpreendeu-me genuinamente.

![Tetris 3D a meio do jogo](images/screenshot-01.png)

**Os blocos têm profundidade real.** Cada tipo de tetromino tem o seu próprio esquema de cores com uma cor principal, um realce claro para as arestas superior esquerda, uma sombra escura para as arestas inferior direita, e um efeito de brilho. A peça I é ciana com um brilho azul suave. A peça T é roxa. A peça Z é vermelha. Parecem pequenas peças de rebuçado 3D pousadas numa grelha escura. Pedi "blocos em estilo 3D" e o resultado parece genuinamente polido.

**Toca o tema Korobeiniki.** A melodia original do Tetris, gerada em tempo real usando a Web Audio API. Sem ficheiros de áudio. Cria osciladores e nós de ganho dinamicamente, toca uma melodia de onda quadrada com uma linha de baixo de onda triangular, e faz o loop de forma contínua. A música acelera à medida que subes de nível, passando de 1.0x no nível 0 para 1.5x no nível 15. Até se lembra da tua preferência de silenciar no localStorage.

**Os efeitos sonoros são surpreendentemente bons.** Existem 8 efeitos sonoros distintos: clique de movimento, whoosh de rotação, baque de aterragem da peça (com buffer de ruído para textura de impacto), arpejo de eliminação de linha, uma fanfarra especial de Tetris ao eliminar quatro linhas, swoosh de queda rápida, um arpejo triste de fim de jogo em descida, e um jingle de celebração de subida de nível. Tudo sintetizado. Sem ficheiros de áudio em lado nenhum.

**Tem todas as funcionalidades reais do Tetris.** Pré-visualização da próxima peça, registo de pontuação com multiplicadores adequados (100 para simples, 300 para dupla, 500 para tripla, 800 para Tetris), progressão de nível a cada 10 linhas, velocidade que aumenta efectivamente, persistência da pontuação máxima, pausa com retoma, e um ecrã de fim de jogo que mostra as tuas estatísticas finais comparadas com a tua pontuação máxima.

![Jogo em pausa](images/screenshot-02.png)

**Os controlos parecem certos.** Teclas de seta ou WASD para movimento, W ou Cima para rodar no sentido horário, Z para o sentido anti-horário, Espaço para queda rápida, P ou Escape para pausar. Inclui até wall kicks para que as peças se afastem das paredes ao rodar perto das margens.

## Os Números

- **22 ficheiros de código-fonte** entre componentes, hooks, constantes e tipos
- **~2.000 linhas de TypeScript**
- **8 efeitos sonoros sintetizados distintos** mais uma banda sonora completa em loop
- **7 tipos de tetrominos** com 4 estados de rotação cada (28 definições de formas)
- **16 níveis de velocidade** de 1000ms até 100ms por tick
- **0 ficheiros de áudio** em todo o projecto

## Experimenta

{{< github repo="nunocoracao/Vibe30-day04-tetris" showThumbnail=true >}}

**[Jogar Tetris](https://vibe30-day04-tetris.vercel.app)**

Teclas de seta ou WASD para mover, Espaço para queda rápida, P para pausar. Funciona melhor no computador.

## Veredicto do Dia 4

Quatro dias passados e estou a construir jogos clássicos mais depressa do que consigo testá-los. Esse é o verdadeiro bottleneck agora. Não a programação, não a depuração. Os testes.

Este clone do Tetris é genuinamente divertido de jogar. O estilo 3D dos blocos dá-lhe personalidade, o tema Korobeiniki faz-o parecer autêntico, e o design de som acrescenta feedback satisfatório a cada acção. O facto de todo o áudio ser gerado proceduralmente a partir de osciladores e buffers de ruído é, honestamente, extraordinário. Não existe nenhum ficheiro de áudio em todo este projecto.

O que continua a surpreender-me é a completude. Pedi Tetris com blocos 3D e música. Obtive wall kicks, persistência de pontuação máxima, multiplicadores de pontuação por nível, um ecrã de pausa com um botão gradiente, estado de silêncio guardado no localStorage, e um painel de fim de jogo que te diz se bateste o teu recorde. Todas estas são funcionalidades que acabaria por pedir, mas não precisei.

A implementação de wall kicks é tão boa quanto as directrizes oficiais do Tetris? Provavelmente não. O sistema de pontuação é 100% autêntico? Perto, mas não verifiquei contra a especificação. Nada disso importa para um projecto de um dia. O que importa é que funciona, tem boa sensação, e alguém pode jogá-lo agora mesmo.

---

*Este é o dia 4 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projectos em 30 dias usando programação assistida por IA.*
