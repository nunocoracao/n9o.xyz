---
title: "30 Days of Vibe Coding - Dia 11 - Treelo"
description: "Um quadro kanban completo ao estilo Trello com drag-and-drop, etiquetas, checklists, datas de entrega, vista de calendário e registo de atividade."
summary: "Um quadro kanban completo ao estilo Trello com drag-and-drop, etiquetas, checklists, datas de entrega, vista de calendário e registo de atividade."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-11", "typescript", "nextjs", "kanban", "productivity"]
series: ["30 Days of Vibe Coding"]
series_order: 11
seriesOpened: false
date: 2026-04-16
draft: false
#type: "hidden"
---

Dia 11. Pedi um clone do Trello. Quadros kanban, drag and drop, detalhes dos cartões, tudo.

## O Prompt

> "Build a Trello-style kanban board app with boards, lists, cards, and drag-and-drop"

Chamei-lhe Treelo porque sou muito criativo com nomes.

## Como Foi Construído

O Watchfire dividiu isto em 18 tarefas. As coisas essenciais vieram primeiro: quadros, listas, cartões e drag-and-drop. Depois continuou. Etiquetas. Datas de entrega. Um modal de detalhes do cartão. Fundos personalizados para os quadros. Pesquisa e filtragem. Arquivamento de cartões. Multi-seleção com operações em massa. Um feed de atividade. Uma vista de calendário. E depois uma passagem de otimização de performance no final para manter tudo fluido.

São muitas funcionalidades para um único prompt. A maioria destas eu não pedi explicitamente. O prompt inicial era apenas quadros, listas, cartões e drag-and-drop. Todo o resto foi o Watchfire a decidir "um quadro kanban também devia ter estas coisas" e simplesmente construí-las.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Vista do quadro com listas e cartões](images/screenshot-01.png)

**Parece o Trello.** O layout, o estilo dos cartões, o fundo azul, as colunas das listas. Se semicerrar os olhos pode passar pelo original. Há uma barra superior com pesquisa, atividade, calendário e botões de filtro. As listas mostram a contagem de cartões. Os cartões mostram etiquetas e badges de data de entrega.

![Página inicial dos quadros](images/screenshot-02.png)

**Vários quadros.** Há uma página inicial com os quadros vistos recentemente e um botão "Create new board". Regista quais os quadros que visitámos recentemente. Simples mas funcional.

![Modal de detalhes do cartão](images/screenshot-03.png)

**O modal de detalhes do cartão é surpreendentemente completo.** Clica em qualquer cartão e tens um modal completo com etiquetas, um seletor de data de entrega, uma checklist com acompanhamento de progresso, um campo de descrição, comentários e um registo de atividade. No lado direito há um conjunto de ações: mover, copiar, arquivar. Este é o tipo de coisa que demoraria dias a construir bem à mão.

![Painel de filtro de etiquetas](images/screenshot-04.png)

**As etiquetas funcionam mesmo.** Podes atribuir etiquetas com cores aos cartões e depois filtrar por elas. O painel de filtro desliza a partir do lado direito. Os cartões no quadro mostram as cores das etiquetas como pequenas faixas coloridas no topo.

![Feed de atividade](images/screenshot-05.png)

**Há um feed de atividade.** Cada ação é registada. Cartão criado, cartão movido, etiqueta adicionada, checklist concluída. Mostra timestamps e descreve o que aconteceu. Esta é uma daquelas funcionalidades que separa um brinquedo de algo utilizável. Consegues realmente rastrear o que aconteceu num quadro.

![Vista de calendário](images/screenshot-06.png)

**Uma vista de calendário.** Alterna da vista de quadro para um calendário e vê todos os teus cartões com datas de entrega dispostos numa grelha mensal. Cartões sem datas de entrega aparecem numa barra lateral. É uma forma genuinamente útil de ver o que vem a seguir.

![Detalhe do cartão a partir do calendário](images/screenshot-07.png)

**Os modais dos cartões também funcionam a partir do calendário.** Clica num cartão no calendário e o mesmo modal de detalhes abre. Datas de entrega, etiquetas, tudo é acessível a partir de qualquer vista.

![Fundo personalizado do quadro](images/screenshot-08.png)

**Fundos personalizados para os quadros.** Podes mudar o fundo do quadro para diferentes cores e gradientes. O modo escuro também é totalmente suportado. Toda a aplicação respeita a tua preferência de tema.

## O Que Mais Está Lá Dentro

Algumas coisas que não se mostram bem em capturas de ecrã mas valem a pena mencionar:

- **Drag-and-drop** usando @dnd-kit. Podes reordenar cartões dentro de uma lista, movê-los entre listas e reordenar as próprias listas.
- **Multi-seleção.** Mantém shift ou ctrl para selecionar vários cartões e depois move-os, arquiva-os ou etiqueta-os em massa.
- **Desfazer/refazer.** Suporte completo de histórico com Ctrl+Z e Ctrl+Shift+Z.
- **Atalhos de teclado.** Carrega N para adicionar um cartão, F para pesquisar, B para voltar aos quadros, Q para filtrar por data de entrega e ? para ver todos os atalhos.
- **Checklists** dentro dos cartões com uma barra de progresso.
- **Arquivar e restaurar.** Cartões e listas podem ser arquivados sem serem eliminados.
- **Persistência em local storage.** Tudo é guardado no browser. Fecha o separador, volta, e os teus quadros continuam lá.

## Os Bug Reports

Honestamente, este ficou bastante limpo. Os principais problemas eram em casos extremos de drag-and-drop (largar um cartão mesmo no fundo de uma lista às vezes não registava) e a vista de calendário inicialmente não atualizar quando mudavas uma data de entrega a partir do modal. Coisas pequenas. Nada estrutural.

## Os Números

- **18 tarefas do Watchfire** desde o kanban base até otimização de performance
- Stack **Next.js + TypeScript + Tailwind CSS**
- **@dnd-kit** para drag-and-drop
- **Navegação completa por teclado** com overlay de atalhos
- **Duas vistas:** quadro e calendário
- **Todos os dados em localStorage** sem necessidade de backend

## Experimenta

{{< github repo="nunocoracao/Vibe30-day11-trelloclone" showThumbnail=true >}}

**[Experimenta o Treelo](https://vibe30-day11-trelloclone.vercel.app)**

Cria um quadro, adiciona algumas listas, arrasta alguns cartões. É mais divertido do que devia ser.

## Veredito do Dia 11

Um quadro kanban parece simples à superfície, mas há tantas pequenas interações que precisam de funcionar: alvos de drag, estado do modal, filtragem, histórico de undo, consistência entre vistas. O facto de tudo isto ter vindo de um prompt e 18 tarefas automatizadas continua a ser surreal para mim.

Continuo a voltar ao mesmo pensamento: eu não conseguiria ter construído isto num dia sozinho. Só o drag-and-drop ter-me-ia levado um dia inteiro a lutar com bibliotecas e casos extremos. Em vez disso, obtive um clone funcional do Trello com uma vista de calendário, um feed de atividade, operações em massa e atalhos de teclado. E passei o meu tempo a testar e a reportar alguns bugs.

A distância entre "quero um quadro kanban" e "aqui tens um quadro kanban" continua a diminuir.

---

*Este é o dia 11 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
