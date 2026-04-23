---
title: "30 Dias de Vibe Coding - Dia 18 - PollBox"
description: "Uma app de votação em tempo real com resultados animados ao vivo, alimentada por Firebase e construída num dia."
summary: "Uma app de votação em tempo real com resultados animados ao vivo, alimentada por Firebase e construída num dia."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-18", "nextjs", "firebase", "react", "typescript"]
series: ["30 Days of Vibe Coding"]
series_order: 18
seriesOpened: false
date: 2026-04-23
draft: false
#type: "hidden"
---

Dia 18. Queria algo colaborativo. Algo em que pudesses partilhar um link e imediatamente ver outras pessoas a interagir com ele. Uma app de votações em tempo real pareceu a escolha certa.

## O Prompt

> "Constrói uma app de criação e votação de sondagens em tempo real. Os utilizadores devem poder criar sondagens com múltiplas opções, partilhá-las por link, e ver os resultados a atualizar ao vivo com gráficos de barras animados."

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day18-pollbox.vercel.app)
{{< /alert >}}

## Como Foi Construído

O [Watchfire](https://watchfire.io) dividiu isto em 31 tarefas. É bastante para uma app de votações, mas a lista de funcionalidades cresceu depressa assim que começas a pensar em todas as pequenas coisas que tornam uma experiência de votação completa.

O núcleo veio primeiro: integração com a base de dados em tempo real do Firebase, fluxo de criação de sondagens, mecânicas de votação e a vista animada de resultados. Depois foram-se adicionando camadas com tudo o resto. Categorias e templates para criação rápida de sondagens. Melhorias de acessibilidade. Skeletons de carregamento para que a app não mostre conteúdo vazio. Uma página 404 como deve ser. E claro, a habitual ronda de correções de deployment no final.

A integração com Firebase foi a espinha dorsal de tudo. O Firestore trata da persistência, os listeners em tempo real enviam atualizações de votos para cada cliente ligado, e a autenticação anónima significa que ninguém precisa de criar uma conta só para votar em algo.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

O fluxo de criação é surpreendentemente completo para algo construído num dia.

![Formulário de criação de sondagem](images/screenshot-02.png)

Tens um título, descrição, etiquetas de categoria, múltiplas opções e até um seletor de tema de cores. Também há suporte para imagem de capa, sondagens agendadas, proteção por password e datas de expiração. Na parte de baixo, há templates para tipos comuns de sondagens como "Sim ou Não", "Avalia de 1 a 5" e "Votação de Equipa" para que possas saltar a configuração toda.

![Opções de criação com temas e templates](images/screenshot-03.png)

A página de resultados é onde fica divertido. Depois de votares, as barras animam-se, a opção vencedora destaca-se e confetti explode pelo ecrã.

![Resultados ao vivo com confetti](images/screenshot-05.png)

Cada página de sondagem também tem reações com emoji, uma secção de comentários, links de partilha com geração de código QR e opções de exportação tanto para dados CSV como imagens. É muita área de superfície.

![Resultados da votação de equipa](images/screenshot-06.png)

![Resultados da sondagem de avaliação](images/screenshot-07.png)

O dashboard "As Minhas Sondagens" mantém o registo de tudo o que criaste, com pesquisa e filtros por categoria. Cada sondagem mostra o seu estado, número de opções, número de votos e tem um botão de duplicar para reutilização rápida.

![Dashboard As Minhas Sondagens](images/screenshot-01.png)

## Os Bug Reports

A ronda de deployment foi o principal ponto de dor. A configuração do Firebase precisou de ajustes para produção e houve os habituais problemas específicos do Vercel para resolver. Nada de incomum para um projeto que depende de serviços externos. A imposição de um voto por utilizador precisou de transações Firestore para funcionar corretamente, o que levou alguma iteração até ficar bem.

## Experimenta

{{< github repo="nunocoracao/Vibe30-day18-pollbox" showThumbnail=true >}}

**[Experimenta o PollBox](https://vibe30-day18-pollbox.vercel.app)**

Cria uma sondagem e partilha o link. Não é preciso conta.

## Veredicto do Dia 18

A lista de funcionalidades aqui é densa. Uma app de votação em tempo real com Firebase, resultados animados, partilha por QR, reações com emoji, comentários, exportação CSV, exportação de imagens, templates, categorias, proteção por password e um dashboard. Isso é uma lista de funcionalidades de produção espremida num único dia.

A parte de tempo real é o que faz isto parecer vivo. Partilhas um link, alguém vota e as barras mexem-se no teu ecrã. Sem precisar de atualizar. Os listeners em tempo real do Firebase mais as animações do Framer Motion fazem com que tudo pareça responsivo e polido de uma forma que resultados estáticos nunca conseguiriam.

31 tarefas no Watchfire, e a profundidade nota-se.

---

*Este é o dia 18 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
