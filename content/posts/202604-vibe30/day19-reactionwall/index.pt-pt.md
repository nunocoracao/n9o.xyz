---
title: "30 Dias de Vibe Coding - Dia 19 - ReactionWall"
description: "Um mural de reações ao vivo para eventos com emojis voadores e mensagens de texto, alimentado pela sincronização em tempo real do Firebase."
summary: "Um mural de reações ao vivo para eventos com emojis voadores e mensagens de texto, alimentado pela sincronização em tempo real do Firebase."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-19", "react", "firebase", "framer-motion"]
series: ["30 Days of Vibe Coding"]
series_order: 19
seriesOpened: false
date: 2026-04-24
draft: false
#type: "hidden"
---

Dia 19. Queria algo divertido e interativo para eventos ao vivo. Daquele tipo que se mete num projetor num meetup e o pessoal manda reações a partir dos telemóveis.

## O Prompt

> "Constrói um mural de reações ao vivo para eventos. Cria um evento, partilha um link ou código QR, e as reações voam pelo ecrã em tempo real. Barra de emojis em baixo, mensagens de texto também. Modo de projeção em ecrã inteiro. Firebase para sincronização em tempo real."

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day19-reaction-wall.vercel.app)
{{< /alert >}}

## Como Foi Construído

O [Watchfire](https://watchfire.io) dividiu isto em 9 tarefas. As primeiras eram a base: configurar a Firebase Realtime Database, o fluxo de criação de eventos e autenticação anónima para que ninguém precise de se registar. Depois veio a barra de reações com emojis, as animações de emojis voadores usando Framer Motion, o modo de ecrã inteiro para projetores, toggle de som e um passo final de polimento.

A parte de tempo real era o desafio principal aqui. Cada reação precisa de aparecer instantaneamente em todos os ecrãs a ver aquele evento. A Firebase Realtime Database trata disso nativamente, mas há muitas nuances para que a experiência seja boa. As reações usam uma janela deslizante de 30 segundos para que as antigas desapareçam, e há limitação de frequência a 1 reação por segundo para que as coisas não saiam de controlo.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

A página inicial é limpa e escura. Um botão para criar um mural de evento.

![Página inicial](images/screenshot-01.png)

Dás um nome ao teu evento e carregas em "Go Live." A configuração é toda essa.

![Criação de evento](images/screenshot-02.png)

Quando entras, tens um código QR e um link partilhável no canto superior esquerdo para que os participantes possam entrar instantaneamente a partir dos telemóveis. Na parte inferior do ecrã há uma barra de emojis com 8 opções mais um campo de texto para mensagens personalizadas até 50 caracteres.

![Mural de evento com barra de emojis e código QR](images/screenshot-03.png)

![Reações no ecrã](images/screenshot-04.png)

O modo de exibição é onde a coisa fica divertida. Ecrã inteiro, fundo escuro, reações a voar com efeitos de brilho. Os emojis têm trajetórias aleatórias, tamanhos variados e uma animação de oscilação. As mensagens de texto também flutuam pelo ecrã em bolhas roxas. Quando o pessoal começa a mandar reações sem parar, há um efeito de explosão que entra em ação.

![Modo de exibição com reações voadoras e texto](images/screenshot-05.png)

Há pormenores simpáticos que não pedi explicitamente. Feedback háptico no telemóvel quando mandas uma reação. Sons pop via Web Audio API com toggle para os desligar. Um indicador de cooldown para saberes quando podes mandar outra reação após o limite de frequência.

## A Tecnologia

- React 19 com TypeScript e Vite
- Firebase Anonymous Auth mais Realtime Database
- Framer Motion para todas as animações voadoras
- QRCode.react para os códigos QR partilháveis

O Framer Motion faz o trabalho pesado no lado visual. Cada reação tem a sua própria animação com parâmetros aleatórios para trajetória, rotação e escala. O resultado é que nenhuma reação parece igual quando voa pelo ecrã.

## Experimenta

{{< github repo="nunocoracao/Vibe30-day19-ReactionWall" showThumbnail=true >}}

**[Experimenta o ReactionWall](https://vibe30-day19-reaction-wall.vercel.app)**

Cria um evento, abre o link no telemóvel e começa a mandar reações para ti próprio. É mais satisfatório do que devia.

## Veredito do Dia 19

Este é um daqueles projetos em que o aspeto de tempo real o faz parecer vivo. Apps estáticas são fixes, mas há algo em ver reações a aparecer no instante em que alguém toca no telemóvel que faz parecer um produto a sério. O Firebase tratou da camada de sincronização, o Framer Motion tratou da camada de animação, e tudo se juntou de uma forma que realmente funciona para um evento ao vivo.

A partilha por código QR, o modo de ecrã inteiro, o facto de ninguém precisar de instalar nada ou criar uma conta. Para um meetup ou uma talk numa conferência, isto faz o trabalho. Não é production-grade, mas é suficiente para pôr num projetor e animar a malta.

---

*Este é o dia 19 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
