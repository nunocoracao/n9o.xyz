---
title: "30 Dias de Vibe Coding - Dia 30 - miniOs"
description: "Um sistema operativo de desktop baseado na web, construído inteiramente no browser, com todos os 30 projetos Vibe30 como apps instaláveis."
summary: "Um sistema operativo de desktop baseado na web, construído inteiramente no browser, com todos os 30 projetos Vibe30 como apps instaláveis."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-30", "nextjs", "react", "typescript", "os"]
series: ["30 Days of Vibe Coding"]
series_order: 30
seriesOpened: false
date: 2026-05-05
draft: false
#type: "hidden"
---

Dia 30. O último. Construí um sistema operativo.

Não um a sério. Um falso no browser. Mas o tipo de falso em que o arranques, fazes login, abres um gestor de ficheiros, redimensionas janelas, encaixas nas esquinas, trocas de áreas de trabalho, abres um terminal que corre neofetch, mudas o wallpaper, e depois lanças qualquer um dos 29 projetos que já construí este mês como apps lá dentro. Esse tipo de falso.

Este é o projeto final. Todos os projetos dos últimos 30 dias vivem dentro deste.

## O Prompt

> "Constrói um SO de desktop baseado na web. Gestão de janelas com arrastar, redimensionar, minimizar, maximizar, snap. Múltiplas áreas de trabalho. Barra de tarefas, menu iniciar, spotlight search, alt-tab. Sequência de arranque, ecrã de login, ecrã de bloqueio, screensaver. Temas escuro e claro com cores de destaque. Wallpapers com parallax. Widgets no desktop. Apps incluídas: Gestor de Ficheiros, Editor de Texto, Terminal com neofetch, Browser, Calculadora, Definições, Leitor de Música, Visualizador de Imagens, Paint, Calendário. E cada projeto Vibe30 deve ser acessível como uma app instalada."

O maior prompt do desafio, para o maior projeto.

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day30-minios.vercel.app)
{{< /alert >}}

## Como Foi Construído

O [Watchfire](https://watchfire.io) dividiu este em 25 tarefas. Não foi a contagem mais alta do desafio (o editor de código chegou às 43), mas este teve o âmbito mais alargado. Isto não era uma app. Era uma shell que tinha de conter todas as outras apps.

As tarefas cobriram tudo o que esperarias de uma construção de SO (se é que lhe podemos chamar isso): gestão core de janelas, o sistema de áreas de trabalho, barra de tarefas e system tray, menu iniciar, spotlight search, o switcher alt-tab, fluxos de arranque e login, o ecrã de bloqueio e screensaver, motor de temas, sistema de wallpapers com parallax, widgets de desktop, e depois cada app incluída como a sua própria tarefa. As tarefas finais trataram de integrar todos os 30 projetos Vibe30 como apps lançáveis e construir um tour de boas-vindas.

Passei mais tempo hands-on com este do que em qualquer um dos 30 dias. Não a escrever código, mas a testar interações. O snap de janelas tem muitos edge cases. O que acontece quando arrastas para uma esquina? E maximizar uma janela já encaixada? E se mudares de área de trabalho enquanto uma janela está a ser arrastada? São esse tipo de coisas que tive de experimentar e reportar.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Desktop do miniOs](images/screenshot-01.png)

Arranca. Há uma animação de sequência de arranque com uma barra de carregamento e mensagens de sistema a passar. Depois um ecrã de login. Depois o desktop carrega.

![Arranque e login](images/screenshot-02.png)

**A gestão de janelas funciona mesmo.** Arrasta janelas. Agarra qualquer borda ou esquina para redimensionar. Duplo clique na barra de título para maximizar. Arrasta para a borda esquerda para encaixar à esquerda, borda direita para encaixar à direita, esquinas para encaixar em quadrantes. Minimiza para a barra de tarefas e clica para restaurar. Este é o tipo de coisa que parece simples mas tem um milhão de pequenos detalhes de interação.

![Gestão de janelas](images/screenshot-03.png)

**Quatro áreas de trabalho.** Alterna entre elas com Ctrl+1 até Ctrl+4, ou clica na barra de tarefas. Cada área de trabalho tem o seu próprio conjunto de janelas. Parece mesmo um setup multi-desktop real.

**A barra de tarefas é a sério.** Botão do menu iniciar, apps fixadas, indicadores de janelas abertas, switcher de áreas de trabalho, system tray com relógio. Clica no menu iniciar e tens um launcher de apps categorizado. Carrega Cmd+K para spotlight search e escreve para encontrar qualquer app instantaneamente. Alt+Tab abre um switcher de janelas com previews.

![Menu iniciar e barra de tarefas](images/screenshot-04.png)

**Temas escuro e claro com 9 cores de destaque.** Abre Definições, escolhe o teu tema, escolhe a tua cor de destaque, e o SO inteiro redesenha-se. Há 4 wallpapers com um efeito parallax que responde ao movimento do rato.

![Definições e temas](images/screenshot-05.png)

**As apps incluídas funcionam.** O Gestor de Ficheiros navega num filesystem virtual. O Editor de Texto faz undo/redo e pode guardar/abrir ficheiros. O Terminal corre comandos e tem um neofetch funcional que mostra informações de sistema do miniOs. A Calculadora aceita input do teclado. O Paint permite desenhar. O Calendário funciona.

![Apps incluídas](images/screenshot-06.png)

**E depois há as apps Vibe30.** Todos os 30 projetos aparecem no menu iniciar na sua própria categoria. Projetos web abrem num iframe embebido diretamente dentro de uma janela do miniOs. Projetos TUI e nativos que não correm no browser mostram um cartão de projeto com links para o repo e demo ao vivo. Podes ter o Platformer a correr numa janela, Snake noutra, e Wordle numa terceira, tudo enquanto o Leitor de Música toca em segundo plano.

![Apps Vibe30 a correr](images/screenshot-07.png)

Esta última parte é o que faz disto um projeto final. Não é apenas um clone de SO. É um contentor para o desafio inteiro.

## Os Bug Reports

Este teve a lista de bugs mais longa de qualquer projeto:

- Os handles de redimensionamento de janelas eram demasiado pequenos na borda inferior
- O snap para esquinas não funcionava quando uma janela já estava maximizada
- O screensaver não disparava se uma janela tivesse foco
- A ordem do alt-tab estava errada depois de minimizar uma janela
- Os resultados do spotlight search não atualizavam ao mudar de área de trabalho
- Alguns iframes Vibe30 não carregavam devido a headers X-Frame-Options
- A sequência de arranque era demasiado rápida (bug report irónico, mas precisava de parecer real)
- O efeito parallax era instável no Safari

Os edge cases da gestão de janelas foram o tema principal. Sempre que pensava que o snap funcionava, encontrava outra combinação que o estragava.

## Os Números

- **25 tarefas Watchfire** desde a arquitetura até ao tour de boas-vindas
- **30 projetos Vibe30** integrados como apps lançáveis
- **10 apps incluídas** (Gestor de Ficheiros, Editor de Texto, Terminal, Browser, Calculadora, Definições, Leitor de Música, Visualizador de Imagens, Paint, Calendário)
- **4 áreas de trabalho**, **9 cores de destaque**, **4 wallpapers**, **2 temas**
- **Next.js 16, React 19, TypeScript, Tailwind CSS 4**

## Experimenta

{{< github repo="nunocoracao/Vibe30-day30-minios" showThumbnail=true >}}

**[Abrir miniOs](https://vibe30-day30-minios.vercel.app)**

Melhor experiência no desktop. Experimenta os atalhos de teclado: Cmd+K para spotlight, Ctrl+1-4 para áreas de trabalho, Alt+Tab para alternar janelas.

## Veredito do Dia 30

Continuo a voltar ao absurdo disto. Pedi a uma IA para me construir um sistema operativo e ela fê-lo. Não uma demo de brinquedo com uma barra de tarefas falsa e nada por trás. Uma coisa com gestão de janelas real, isolamento de áreas de trabalho real, navegação por teclado real, temas reais, e 40 aplicações funcionais lá dentro.

É um SO real? Obviamente não. Mas é um pedaço de software real. Só o snap de janelas é algo que eu teria dificuldade em implementar corretamente sozinho. Todos os 30 projetos deste desafio podem correr dentro dele, simultaneamente, nas suas próprias janelas, em áreas de trabalho separadas.

No dia 1, construí um platformer a partir de uma frase. No dia 30, construí um sistema operativo que contém o platformer, e tudo o que fiz entre eles.

Trinta projetos. Trinta dias. Feito.

---

*Este é o dia 30 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Este foi o último projeto, mas ainda vem mais um post: o wrapup completo com tudo o que aprendi ao entregar 30 projetos em 30 dias.*
