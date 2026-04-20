---
title: "30 Dias de Vibe Coding - Dia 15 - MyBrute Arena"
description: "Um auto-battler de combate medieval inspirado no clássico MyBrute, com criação de personagens, lutas animadas, pets, armas, torneios e um sistema de prestígio."
summary: "Um auto-battler de combate medieval inspirado no clássico MyBrute, com criação de personagens, lutas animadas, pets, armas, torneios e um sistema de prestígio."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-15", "game", "auto-battler", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 15
seriesOpened: false
date: 2026-04-20
draft: false
#type: "hidden"
---

Dia 15. Queria reconstruir algo que adorava quando era adolescente. O MyBrute era um jogo de browser simples onde criavas um pequeno lutador, desafiavas os lutadores de outras pessoas, e vias as batalhas a desenrolar-se automaticamente. Sem estratégia durante a luta em si, apenas construías a tua personagem e vias o que acontecia. Era viciante de uma forma que não fazia sentido para o pouco que realmente fazias. Candidato perfeito para um projeto de um dia.

## O Prompt

> "Constrói um jogo de luta baseado em browser inspirado no MyBrute. Criação de personagens com personalização visual, combate automático por turnos com animações, armas e pets que recolhes das vitórias, XP e nivelamento, torneios, lutas contra bosses e um sistema de prestígio."

{{< alert icon="fire">}}
Experimenta o jogo tu próprio [aqui](https://vibe30-day15-mybrute.vercel.app)
{{< /alert >}}

## Como Foi Construído

O Watchfire dividiu isto em 27 tarefas. É o maior número de tarefas de qualquer projeto até agora, e faz sentido. Esta coisa tem muitos sistemas que precisam de comunicar entre si: matemática de combate, curvas de XP, tabelas de loot, comportamento de pets, bónus de prestígio, brackets de torneios, desafios diários, tracking de rivais, conquistas, replays.

A construção começou com o motor de combate principal e a criação de personagens, depois foi adicionando sistemas um de cada vez. O design das personagens passou por várias iterações. Tentei personagens estilo chibi, depois um visual inspirado no Hollow Knight, depois algo com capas fluidas. Acabei por ficar com estas pequenas figuras encapuzadas que se leem bem na escala em que são renderizadas. Acertar na arte das personagens queimou mais tarefas do Watchfire do que gostaria de admitir, mas o resultado final tem um bom ar medieval sombrio.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

**A criação de personagens é profunda.** Escolhes um nome, depois personalizas a cor da pele, estilo e cor do cabelo, tipo de corpo, cor dos olhos, acessórios (cicatrizes, pintura de guerra, pala de olho, máscaras, cornos) e cor do equipamento. A pré-visualização atualiza em tempo real do lado direito. São muitas opções para um projeto de um dia.

![Criação de personagem com pré-visualização](images/screenshot-02.png)

![A personalizar um brute chamado Ragnar](images/screenshot-03.png)

**O ecrã principal é a tua base.** Mostra as stats do teu brute, nível, barra de XP, arma equipada, pets recolhidos, skills aprendidas e todos os botões de ação. Lutar, Treino, Inventário, Exportar, Importar, Hall da Fama. Também há um desafio diário logo no ecrã principal com um bónus de 2x XP por aceitá-lo.

![Hub da personagem](images/screenshot-04.png)

**A seleção de oponentes dá-te escolhas.** Tens três oponentes para escolher, cada um mostrando o seu nível, stats e equipamento. O jogo escala os oponentes ao teu nível para que as lutas se mantenham competitivas.

![Escolhe o teu oponente](images/screenshot-05.png)

**O combate é totalmente animado.** Duas personagens enfrentam-se numa arena com pilares, tochas e faixas vermelhas. Barras de vida no topo, números de dano a flutuar, efeitos de corte nos golpes. Um registo de combate na parte inferior narra cada ação. Basta carregar em "Next" para avançar em cada turno. É auto-battled mas vês tudo a desenrolar-se passo a passo.

![Combate na arena](images/screenshot-06.png)

![Batalha na sala do trono](images/screenshot-01.png)

**A vitória dá-te XP e loot.** O ecrã de resultados mostra o XP ganho com uma barra de progresso animada. Ganha lutas suficientes e sobes de nível, desbloqueando melhorias de stats e novo equipamento.

![Ecrã de vitória](images/screenshot-07.png)

**O sistema de inventário é surpreendentemente robusto.** Três separadores para armas, pets e skills. As armas têm níveis de raridade (de comum a lendário, com bordas de cor correspondente). Os pets têm as suas próprias stats. As skills são habilidades passivas e ativas que desbloqueas à medida que as recolhes. A coisa toda parece um inventário de RPG a sério.

![Inventário de armas](images/screenshot-09.png)

![Coleção de pets](images/screenshot-10.png)

![Lista de skills](images/screenshot-11.png)

**O modo de treino permite-te fazer grind.** Carrega no botão de Treino e o teu brute faz auto-fight em 100 batalhas. Tens um ecrã de resumo mostrando o XP total ganho, níveis subidos, vitórias e todo o loot que apanhaste. É uma boa forma de avançar rapidamente no início do jogo sem clicar em cada luta.

![Resultados do treino](images/screenshot-08.png)

**Os torneios funcionam como eliminação por brackets.** Quatro rondas, dificuldade crescente. A interface do bracket mostra o teu progresso em cada ronda, o teu próximo oponente e um botão claro para lutar. Ganha o torneio todo e recebes recompensas premium.

![Bracket do torneio](images/screenshot-12.png)

## Os Bug Reports

As iterações de redesign das personagens foram o maior consumidor de tempo. Os primeiros estilos de personagem pareciam bem isoladamente mas não se liam bem na arena à escala de combate. As figuras encapuzadas finais funcionam, mas foram precisas várias rondas de vai e vem para lá chegar. Este é um daqueles casos em que a direção artística com IA é mais difícil do que parece. Podes descrever o que queres, mas "faz com que fique bem a 80 pixels de altura numa arena escura" é um prompt mais difícil do que parece.

O equilíbrio de combate é tosco da forma que esperarias de um RPG auto-gerado. Algumas combinações de armas são claramente overpowered, alguns pets são melhores que outros por uma margem enorme. Mas para um jogo em que o objetivo é ver o caos aleatório a desenrolar-se, o desequilíbrio quase que acrescenta à diversão.

## Os Números

- **27 tarefas no Watchfire** do motor de combate ao sistema de prestígio
- **Múltiplos redesigns de personagem** tentando estilos chibi, Hollow Knight e capas fluidas
- **4 ambientes de arena** incluindo uma sala do trono
- **3 categorias de inventário** com loot de diferentes raridades
- **100 auto-fights** por sessão de treino
- **20 slots de replay** para rever batalhas passadas

## Experimenta

{{< github repo="nunocoracao/Vibe30-day15-mybrute" showThumbnail=true >}}

**[Entra na Arena](https://vibe30-day15-mybrute.vercel.app)**

Cria um brute, arranja uma luta e vê até onde consegues chegar.

## Veredicto do Dia 15

27 tarefas é muito, e o número de sistemas interligados (combate, XP, loot, pets, skills, torneios, diários, rivais, prestígio, replays, conquistas) é o tipo de coisa que normalmente levaria uma pequena equipa umas duas semanas a montar. O facto de tudo funcionar e ser realmente divertido de jogar é um bocado surreal.

A jornada do design das personagens foi a parte mais interessante. Passei por pelo menos quatro estilos visuais distintos antes de encontrar um que funcionasse. É um bom lembrete de que o coding assistido por IA lida muito bem com lógica e sistemas, mas a direção artística ainda requer um olho humano e muita iteração. Não podes simplesmente dizer "faz com que fique fixe" e ir embora.

A meio caminho. Os jogos continuam a ficar mais complexos, mas o workflow está a ficar mais fluido. Sei quando insistir por mais funcionalidades e quando dar como terminado. Esse instinto pode ser a coisa mais valiosa que tirei deste desafio.

---

*Este é o dia 15 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando coding assistido por IA.*
