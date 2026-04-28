---
title: "30 Days of Vibe Coding - Dia 23 - RetroOS"
description: "Um ambiente de trabalho inspirado no Windows 95 que corre inteiramente no browser, com janelas arrastáveis, aplicações clássicas e uma sequência de arranque."
summary: "Um ambiente de trabalho inspirado no Windows 95 que corre inteiramente no browser, com janelas arrastáveis, aplicações clássicas e uma sequência de arranque."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-23", "windows95", "retro", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 23
seriesOpened: false
date: 2026-04-28
draft: false
#type: "hidden"
---

Dia 23. Disse a uma IA para me construir o Windows 95.

## O Prompt

Este foi pura nostalgia:

> "Build a Windows 95-inspired desktop environment that runs in the browser. Include a taskbar, start menu, draggable and resizable windows, and classic apps like Notepad, Calculator, Paint, Minesweeper, Terminal, Internet Explorer, and My Computer. Add a boot sequence, pixel art SVG icons, sound effects, wallpaper selection, a CRT effect, and a BSOD easter egg."

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day23-retroos.vercel.app)
{{< /alert >}}

## Como Foi Construído

O [Watchfire](https://watchfire.io) dividiu isto em 10 tarefas. O âmbito aqui era brutal. Isto não é uma aplicação simples, é toda uma interface de sistema operativo com um gestor de janelas, uma barra de tarefas, um menu Iniciar e sete aplicações separadas a correr lá dentro. Cada uma precisava do seu próprio comportamento, do seu próprio visual de janela, das suas próprias interações.

A lista de tarefas cobriu primeiro a shell do ambiente de trabalho (barra de tarefas, menu Iniciar, gestão de janelas), depois cada aplicação uma a uma, e finalmente os toques finais como a sequência de arranque, o BSOD, o efeito de scanlines CRT e os efeitos sonoros.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

Esta coisa arranca.

![Ecrã de arranque](images/screenshot-02.png)

Carregas a página e aparece um ecrã preto que diz "RetroOS 95 - Click anywhere to start." Clicas e tens uma sequência POST em modo texto a passar, tal e qual como a coisa real. Depois uma barra de progresso com "Starting RetroOS..." antes do ambiente de trabalho carregar.

![Sequência POST](images/screenshot-03.png)

![Barra de carregamento](images/screenshot-04.png)

Depois o ambiente de trabalho aparece e parece mesmo certo. Aquele tom específico de azul-esverdeado. A barra de tarefas cinzenta e robusta em baixo. O botão Iniciar no canto. Ícones do ambiente de trabalho alinhados do lado esquerdo com ícones SVG em pixel art que parecem mesmo pertencer a 1995.

![Ambiente de trabalho](images/screenshot-05.png)

**O menu Iniciar funciona.** Clicas em Iniciar e aparece o clássico menu em cascata com Programas, Documentos, Definições, Procurar, Ajuda, Executar e Encerrar. As aplicações estão listadas ali mesmo. Até tem aquela borda 3D biselada pela qual o Win95 era conhecido.

![Menu Iniciar](images/screenshot-06.png)

**O Terminal é surpreendentemente profundo.** Não é apenas um adereço visual. Podes executar `dir` e obter uma listagem de ficheiros falsa com AUTOEXEC.BAT e CONFIG.SYS. A formatação do output corresponde ao DOS, incluindo o formato da data e a contagem de bytes. Até responde a `ver` com uma string de versão.

![Terminal](images/screenshot-07.png)

![Terminal com output do dir](images/screenshot-08.png)

**A Calculadora funciona.** Layout de botões como deve ser, o display recuado, a moldura biselada. Faz contas a sério. Parece exatamente aquela que costumavas abrir quando estavas aborrecido na aula de informática.

![Calculadora e Terminal](images/screenshot-09.png)

**O Paint é funcional.** Tens uma tela, uma paleta de cores em baixo, e podes mesmo desenhar. A seleção de ferramentas está lá. Desenhei uma cara porque era isso que toda a gente fazia no MS Paint em 1997.

![Aplicação Paint](images/screenshot-10.png)

**O Internet Explorer tem uma homepage falsa.** Carrega uma página retro estilo "Bem-vindo à minha Homepage" com texto colorido, contador de visitas e um link para o livro de visitas. A atenção ao detalhe nesta apanhou-me.

![IE e outras aplicações](images/screenshot-12.png)

**O Meu Computador mostra drives.** Disquete A:, disco rígido C: e um CD-ROM D:. É um explorador de ficheiros para um sistema de ficheiros que não existe, mas parece exatamente certo.

![Meu Computador](images/screenshot-13.png)

**O Campo Minado é jogável.** A grelha clássica com o contador e a cara sorridente no topo. Números, bandeiras, minas. É a coisa real.

**Todas as janelas são arrastáveis e redimensionáveis.** Podes empilhá-las, movê-las, minimizá-las para a barra de tarefas, e a barra de tarefas mostra todas as janelas abertas tal como o verdadeiro SO fazia. Todo o sistema de gestão de janelas funciona.

![Múltiplas janelas abertas](images/screenshot-01.png)

E depois há o easter egg do BSOD. Não vou estragar a surpresa de como o ativar, mas está lá, e parece autêntico.

## Os Relatórios de Bugs

Honestamente, pouco a reportar aqui. A gestão de janelas funcionou à primeira. As aplicações carregaram todas corretamente. As coisas principais que notei:

- Algumas janelas podiam sobrepor-se à barra de tarefas se as arrastasses demasiado para baixo
- O efeito CRT era um pouco pesado em ecrãs mais pequenos
- O primeiro clique no Campo Minado podia às vezes acertar numa mina (a versão real protegia-te disso)

Coisas menores. A experiência central estava sólida desde o início.

## Experimenta

{{< github repo="nunocoracao/Vibe30-day23-retroos" showThumbnail=true >}}

**[Lançar o RetroOS](https://vibe30-day23-retroos.vercel.app)**

Clica no ecrã preto para arrancar. Clica em Iniciar para explorar. Abre tudo. Experimenta os comandos do Terminal. Desenha algo no Paint. Joga Campo Minado. Encontra o BSOD.

![Paint e Calculadora lado a lado](images/screenshot-11.png)

![Explorador de ficheiros do Meu Computador](images/screenshot-14.png)

## Veredicto do Dia 23

Este é um daqueles projetos em que o fator nostalgia por si só já vale a pena construir. Mas para além disso, o âmbito técnico é impressionante. Um gestor de janelas, sete aplicações separadas, uma sequência de arranque, efeitos sonoros, atalhos de teclado, um sistema de ficheiros falso, uma internet falsa. Tudo a partir de uma única sessão de prompts.

O que me impressiona é a atenção ao detalhe. A cor azul-esverdeada do ambiente de trabalho. O cinzento específico do visual das janelas. As bordas biseladas. A forma como os botões da barra de tarefas parecem quando uma janela está ativa versus inativa. Ninguém lhe disse para acertar nesses detalhes. Simplesmente sabia como o Windows 95 parecia e acertou na estética.

Se cresceste a clicar em Iniciar pela primeira vez numa torre bege a meio dos anos 90, vai experimentar este. Vai levar-te de volta.

---

*Este é o dia 23 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
