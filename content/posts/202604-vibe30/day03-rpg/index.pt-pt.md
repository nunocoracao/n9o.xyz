---
title: "30 Days of Vibe Coding - Dia 3 - RPG"
description: "Um RPG por turnos com gráficos isométricos, criação de personagem, combate, missões e um sistema de gravação, tudo a correr no browser."
summary: "Um RPG por turnos com gráficos isométricos, criação de personagem, combate, missões e um sistema de gravação, tudo a correr no browser."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-03", "typescript", "pixi.js", "game", "rpg"]
series: ["30 Days of Vibe Coding"]
series_order: 3
seriesOpened: false
date: 2026-04-08
draft: false
#type: "hidden"
---

Dia 3. Pedi um RPG completo. Num browser. Num dia.

## O Prompt

> "Quero criar um RPG para browser com gráficos isométricos, personalização de personagem, combate por turnos, missões e um sistema de guardar/carregar."

É uma quantidade absurda para pedir num único prompt. Um RPG não é um jogo pequeno. Há classes de personagem, sistemas de inventário, árvores de diálogo, rastreamento de missões, mecânicas de combate, exploração de mapas. Qualquer um destes tópicos é um projeto por si só. Queria ver o que acontecia se pedisse todos ao mesmo tempo.

## Como Foi Construído

O [Watchfire](https://watchfire.io) pegou no prompt e dividiu-o em tarefas. O package.json ainda tem a marca da primeira tarefa no seu nome: `watchfire-0000-project-setup---initialize-nex`. A partir da estrutura do projeto, consigo ver que o trabalho foi dividido pelos sistemas centrais: configuração do projeto com Next.js e Pixi.js, definições de tipos, gestão do estado do jogo, dados de mapa para três zonas (aldeia, floresta, masmorra), motor de combate, bases de dados de itens e inimigos, sistema de diálogo, base de dados de missões, renderização isométrica, e todos os componentes de interface por cima disso.

A lista de componentes por si só diz-nos quanto foi construído: CharacterCreation, CombatUI, DialogueBox, EquipmentPanel, GameHUD, GameMenu, Inventory, IsometricWorld, ItemTooltip, MainMenu, QuestLog, SaveLoadMenu, SettingsPanel, VictoryScreen. São 14 componentes React mais a camada de lógica do jogo por baixo.

Não fiquei ali a orientar cada peça. Voltei e tinha um jogo funcional à minha espera.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

Este surpreendeu-me genuinamente.

![Ecrã de título com a marca Realm of Shadows](images/screenshot-01.png)

**Deu-se um nome a si próprio.** "Realm of Shadows: An Isometric Adventure." Nunca lhe dei um nome. Escolheu um, desenhou um ecrã de título com texto estilizado e adicionou uma opção de definições no menu principal. O esquema de cores azul-escuro e dourado percorre todo o jogo.

![Criação de personagem - entrada do nome](images/screenshot-02.png)

**A criação de personagem é um assistente de vários passos.** Introduzes um nome, escolhes uma classe e revês as tuas estatísticas antes de começar. Guia-te por três ecrãs com pontos de progresso no topo. Cada classe (Warrior, Mage, Rogue) tem distribuições de estatísticas e equipamento inicial diferentes.

![Ecrã de seleção de classe](images/screenshot-04.png)

Os cartões de seleção de classe mostram a distribuição de estatísticas para cada opção. O Warrior tem saúde e força elevadas. O Mage tem magia e mana elevadas. O Rogue tem estatísticas equilibradas com velocidade elevada. Há pequenos ícones para cada classe e barras de estatísticas coloridas. Este é um trabalho de interface polido.

![Resumo da personagem antes de começar](images/screenshot-05.png)

**O ecrã de resumo mostra o teu equipamento inicial.** Um Mage chamado John começa com um Cajado de Madeira, Túnica de Pano, Calças de Couro e Botas Gastas. Podes ver todas as tuas estatísticas base antes de confirmar. Este é o tipo de detalhe que faz um jogo parecer acabado.

![Vista isométrica da aldeia](images/screenshot-06.png)

**O mundo isométrico funciona mesmo.** Há uma aldeia com edifícios, caminhos e NPCs a circular. A tua personagem tem um HUD no canto superior esquerdo a mostrar HP, MP e nível. Há um minimapa no canto superior direito a mostrar "Willowbrook" como a localização atual. Moves-te clicando nos tiles ou usando WASD.

![Diálogo NPC com Elder Mira](images/screenshot-08.png)

**Os NPCs têm árvores de diálogo.** A Elder Mira cumprimenta-te: "Ah, finalmente acordaste! Sou a Elder Mira, guardiã da Aldeia de Willowbrook." A caixa de diálogo aparece na parte inferior do ecrã com o nome do NPC destacado a dourado. Clicas ou premes Enter para continuar.

![Opções de diálogo com ramificações](images/screenshot-10.png)

**O diálogo tem ramificações.** A Elder Mira pergunta se vais ajudar com criaturas das trevas na floresta. Tens duas opções: "Vou ajudar-te" ou "Conta-me mais sobre essas criaturas." Não é apenas texto de preenchimento. Está ligado ao sistema de missões.

![Registo de missões com missão ativa](images/screenshot-13.png)

**Há um registo completo de missões.** Rastreia missões ativas e concluídas com separadores. "A New Beginning" é a missão principal, marcada como história principal. Mostra objetivos ("Fala com a Elder Mira"), recompensas (ouro e XP) e descrições das missões. A interface tem o mesmo estilo dourado e escuro que todo o resto.

![Menu de pausa](images/screenshot-12.png)

**O menu de pausa é completo.** Retomar, Inventário, Personagem, Registo de Missões, Guardar Jogo, Definições, Menu Principal. Mostra o nome da tua personagem, classe, nível, HP e MP no topo. Isto não é um arranjo rápido. Alguém pensou na hierarquia de informação aqui.

![Combate por turnos](images/screenshot-14.png)

**O combate é por turnos com opções reais.** Combates contra um Green Slime. Tu e o inimigo têm barras de HP. A tua barra de ações na parte inferior dá-te cinco opções: Atacar, Magia, Defender, Item, Fugir. Cada uma tem uma cor diferente. O ecrã de combate é limpo e legível.

![Combate com botões de ação em destaque](images/screenshot-15.png)

![Ecrã de vitória com recompensas de XP e ouro](images/screenshot-16.png)

**A vitória dá-te XP e ouro.** Depois de derrotares o Green Slime, ganhas experiência e moeda. O ecrã de vitória mostra exatamente o que ganhaste com um botão para continuar. Ciclo de feedback simples e satisfatório.

![Sistema de inventário e equipamento](images/screenshot-17.png)

**O sistema de inventário tem slots de equipamento e uma mochila.** Há slots para arma, cabeça, tronco, pernas, pés e dois slots de acessórios. A tua mochila mostra itens numa grelha. Podes ver os danos da arma e as estatísticas de defesa da armadura na parte inferior.

![Tooltip de item com opção de uso](images/screenshot-18.png)

**Os itens têm tooltips e ações.** Pairar sobre uma Poção de Saúde Pequena mostra a sua descrição ("Restaura 30 HP") com botões Usar e Cancelar. Este é um sistema de inventário real, não um espaço reservado.

![Painel de estatísticas da personagem sobreposto](images/screenshot-19.png)

**O painel de estatísticas da personagem mostra tudo.** A tua ficha completa de estatísticas sobreposta ao mundo do jogo. Nome, classe, nível, barra de experiência, HP, MP e todas as estatísticas individuais. Também lista os teus itens equipados com os seus valores de estatísticas.

## Os Relatórios de Bugs

Não registei bugs específicos neste além dos testes iniciais. O jogo funcionou no primeiro carregamento, o que foi uma mudança agradável em relação ao dia 1. As interações com NPCs, o fluxo de combate e o sistema de gravação funcionaram todos sem eu precisar de registar problemas. Dito isso, ainda tem arestas por limar. O movimento isométrico pode parecer um pouco rígido, e o combate poderia ter mais variedade de inimigos. Mas nada estava partido.

## Os Números

- **34 ficheiros de código-fonte** distribuídos por componentes, lógica de jogo, hooks, tipos e utilitários
- **3 zonas de mapa** (aldeia, floresta, masmorra) com dados de tiles isométricos
- **14 componentes React** para toda a interface do jogo
- **6 módulos do motor de jogo** (combate, itens, inimigos, diálogo, missões, renderização isométrica)
- **Stack tecnológico: Next.js 16 + Pixi.js 8 + React 19 + TypeScript**
- **Tempo total de uso:** talvez 20 minutos a jogar e explorar

## Experimenta

{{< github repo="nunocoracao/Vibe30-day03-rpg" showThumbnail=true >}}

**[Jogar Realm of Shadows](https://vibe30-day03-rpg.vercel.app)**

WASD ou teclas de seta para mover. Clica em NPCs para falar. I, C, Q para inventário, personagem e registo de missões. ESC para o menu. F5 para guardar rapidamente.

## Veredicto do Dia 3

Este é o projeto onde deixei de encarar este desafio como uma novidade. Um RPG por turnos com gráficos isométricos, três classes de personagem, diálogo com ramificações, um sistema de missões, gestão de inventário, slots de equipamento, combate por turnos e gravações persistentes. Num browser. A partir de um prompt.

Nunca construí um RPG. Nunca implementei um motor de renderização isométrica. Nunca desenhei um sistema de combate, um sistema de equipamento ou uma árvore de diálogo. Não saberia por onde começar com nenhum destes individualmente, quanto mais com todos ao mesmo tempo. Este teria sido um projeto de meses para mim, assumindo que conseguia terminá-lo.

É um RPG completo? Não exatamente. Tem o esqueleto de um. O conteúdo é escasso, há talvez um punhado de encontros, e a história é uma configuração de fantasia genérica. Mas todos os sistemas estão presentes e funcionam em conjunto. A personagem que crias mantém-se durante o combate, o teu equipamento afeta as tuas estatísticas, as missões acompanham o teu progresso e as gravações persistem entre sessões. A arquitetura é sólida.

O que mais me impressiona é a qualidade da interface. O esquema de cores dourado sobre fundo escuro, o assistente de criação de personagem em vários passos, as barras de estatísticas, o registo de missões com separadores, a grelha de inventário. Nada disso estava no meu prompt. Pedi sistemas e obtive uma experiência desenhada. Essa é a parte que eu não conseguia ter feito mesmo com tempo ilimitado. Não sou designer.

O custo de construir algo assim colapsou. Não o custo de construir um grande RPG. Isso ainda leva anos de conteúdo, equilíbrio e polimento. Mas o custo de construir um protótipo de RPG funcional com sistemas reais? Isso passou de meses para horas.

---

*Este é o dia 3 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
