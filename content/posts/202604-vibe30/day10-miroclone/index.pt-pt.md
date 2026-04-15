---
title: "30 Dias de Vibe Coding - Dia 10 - Clone do Miro"
description: "Um quadro branco de tela infinita local-first com formas, notas autocolantes, conectores, camadas e modo de apresentação."
summary: "Um quadro branco de tela infinita local-first com formas, notas autocolantes, conectores, camadas e modo de apresentação."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-10", "typescript", "canvas", "whiteboard"]
series: ["30 Days of Vibe Coding"]
series_order: 10
seriesOpened: false
date: 2026-04-15
draft: false
---

Dia 10. Pedi um clone do Miro. Uma tela infinita completa com formas, conectores, camadas e um modo de apresentação.

## O Prompt

> "Constrói uma aplicação de quadro branco com tela infinita tipo Miro. Local-first, TypeScript, HTML5 Canvas."

Foi esse o ponto de partida. Tudo o resto veio do desdobramento das tarefas.

## Como Foi Construído

Este foi grande. O Watchfire dividiu tudo em 27 tarefas, o que é o máximo que vi até agora neste desafio. O desdobramento cobriu:

1. Formas e ferramentas de desenho (rectângulos, elipses, linhas, setas)
2. Ferramenta de caneta livre
3. Elementos de texto
4. Notas autocolantes com codificação por cores
5. Conectores inteligentes entre formas
6. Grelha e snap-to-grid
7. Histórico de desfazer/refazer
8. Exportação para PNG e JSON
9. Painel de camadas
10. Seletor de cores
11. Controlos de zoom e pan
12. Atalhos de teclado para tudo
13. Modo escuro
14. Ecrã de boas-vindas com onboarding
15. Modo de apresentação

27 tarefas é muito. Mas estavam bem delimitadas. Cada uma adicionava uma peça específica de funcionalidade sem quebrar o que já tinha sido feito.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Recebi

Isto está surpreendentemente completo.

![Tela principal com notas autocolantes e conectores](images/screenshot-01.png)

**Parece uma ferramenta de quadro branco a sério.** Abres e aparece uma tela infinita com uma grelha de pontos. Podes fazer pan, zoom in e out, largar formas, escrever texto, ligar coisas com setas. O fluxo básico de quadro branco simplesmente funciona.

![Ecrã de boas-vindas com atalhos](images/screenshot-02.png)

**Há um ecrã de boas-vindas como deve ser.** Mostra-te os atalhos de teclado e como começar. Podes fechá-lo e marcar uma caixa para não voltar a mostrar. Pequeno detalhe, mas faz com que a aplicação pareça acabada.

![Formas e conectores](images/screenshot-04.png)

**Os conectores são inteligentes.** Desenhas uma linha entre duas formas e ela encaixa em pontos de ligação. Moves uma forma e o conector segue. É este tipo de funcionalidade que separa uma aplicação de desenho de uma ferramenta de diagramação.

![Painel de camadas](images/screenshot-06.png)

**O painel de camadas funciona mesmo.** Cada elemento aparece numa lista na barra lateral. Consegues ver a hierarquia, reordenar coisas e gerir o que está por cima do quê. É como um mini painel de camadas do Figma.

![Overlay de atalhos de teclado](images/screenshot-05.png)

**Atalhos de teclado para tudo.** V para selecionar, R para rectângulo, O para elipse, P para caneta, T para texto, S para nota autocolante. Mais todo o material padrão como Cmd+Z para desfazer, Cmd+Shift+Z para refazer. Há um overlay completo de atalhos que podes abrir com ?.

![Desenho à mão livre](images/screenshot-07.png)

**A ferramenta de caneta é suave.** Desenhei uma cara só para testar. Os traços parecem responsivos e naturais. Não é sensível à pressão nem nada sofisticado, mas é suficientemente bom para esboçar ideias durante um brainstorm.

## Os Bug Reports

Este foi relativamente limpo. Com 27 tarefas esperava mais problemas, mas a abordagem incremental fez com que cada peça fosse testada antes da seguinte aterrar. As principais coisas que notei:

- As notas autocolantes às vezes sobrepunham-se ao texto quando as redimensionavas demasiado pequenas
- O minimapa no canto podia ficar dessincronizado depois de muito zoom
- A exportação para PNG ocasionalmente cortava elementos nas margens da tela

Nada de grave. A experiência core do quadro branco esteve sólida desde cedo.

## Os Números

- **27 tarefas do Watchfire** desde o setup da tela até ao modo de apresentação
- **TypeScript + Vite** com rendering em HTML5 Canvas
- **Suite completa de ferramentas:** selecionar, pan, rectângulo, elipse, linha, seta, conector, caneta, texto, nota autocolante
- **Modo escuro, camadas, exportação, atalhos de teclado, modo de apresentação**
- **Zero bibliotecas UI externas.** Tudo feito à medida em canvas

## Experimenta

{{< github repo="nunocoracao/Vibe30-day10-miroclone" showThumbnail=true >}}

**[Abrir o Quadro Branco](https://vibe30-day10-miroclone.vercel.app)**

Funciona melhor no desktop. Usa os atalhos de teclado para a experiência completa.

## Veredicto do Dia 10

Uma tela infinita com pan e zoom, várias ferramentas de formas, desenho à mão livre, conectores inteligentes, um sistema de camadas, desfazer/refazer, exportação, modo escuro e um modo de apresentação. É muita funcionalidade para um dia.

O que se destaca é a arquitetura. O codebase está dividido em módulos limpos para tratamento de input, rendering, gestão de estado, ferramentas e UI. Cada ferramenta é o seu próprio módulo. A gestão de estado trata do histórico para desfazer/refazer. Não é um protótipo feito à pressa, é uma aplicação devidamente estruturada.

Podia substituir o Miro? Não. Não há colaboração, não há sincronização em tempo real, não há armazenamento na cloud. Mas como ferramenta local-first para esboçar e fazer diagramas? Está surpreendentemente utilizável. Dei por mim a organizar ideias nele em vez de só o estar a testar.

A um terço do caminho do desafio. O âmbito do que cabe num único dia continua a expandir-se.

---

*Este é o dia 10 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto eu lanço 30 projectos em 30 dias usando coding assistido por IA.*
