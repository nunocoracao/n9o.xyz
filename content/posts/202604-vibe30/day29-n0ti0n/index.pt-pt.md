---
title: "30 Dias de Vibe Coding - Dia 29 - n0ti0n"
description: "Um editor de blocos inspirado no Notion com páginas aninhadas, comandos slash e sincronização em tempo real via Firebase Firestore"
summary: "Um editor de blocos inspirado no Notion com páginas aninhadas, comandos slash e sincronização em tempo real via Firebase Firestore"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-29"]
series: ["30 Days of Vibe Coding"]
series_order: 29
seriesOpened: false
date: 2026-05-04
draft: false
#type: "hidden"
---

Dia 29. Falta um dia depois deste. Então clonei o Notion.

Não tudo. Mas a experiência central: um editor de blocos com páginas aninhadas, comandos slash e uma barra lateral limpa para navegação. O resultado é o n0ti0n. O frontend ficou pronto rapidamente. O deployment foi outra história.

## O Prompt

> "Constrói um editor de blocos inspirado no Notion com páginas aninhadas, comandos slash, formatação de texto rico, blocos de código com syntax highlighting, tabelas, listas de tarefas e uma barra lateral para navegação. Usa Tiptap para o editor, Firebase Firestore para persistência em tempo real, autenticação anónima para que qualquer pessoa possa experimentar, e modo escuro."

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://blocknotes-lime.vercel.app)
{{< /alert >}}

## O Que Obtive

O editor usa Tiptap 3, que é um framework fantástico de editor baseado em blocos, e deu-me quase tudo o que queria logo de início com as extensões certas. Tens comandos slash que aparecem quando escreves `/`, permitindo inserir títulos, listas, blocos de código, tabelas, listas de tarefas, divisores e até páginas aninhadas. Seleciona qualquer texto e aparece um menu flutuante com opções de formatação inline como negrito, itálico, rasurado, destaque e links.

![Página de boas-vindas com navegação na barra lateral e visão geral das funcionalidades](images/screenshot-02.png)

A barra lateral é onde as páginas aninhadas realmente brilham. Podes criar páginas dentro de páginas, e a estrutura em árvore aparece no painel esquerdo com secções recolhíveis. Há uma paleta de pesquisa/comandos (Cmd+K) que te permite saltar entre páginas rapidamente, alternar o modo claro ou criar novas páginas na hora.

![Navegação na barra lateral com árvore de páginas recolhível](images/screenshot-05.png)

Também há templates incorporados. Quando crias uma nova página, podes escolher entre templates pré-construídos como itinerários de viagem, notas de reunião ou planos de projeto. Cada template vem pré-preenchido com uma estrutura útil.

![Seletor de templates para novas páginas](images/screenshot-06.png)

O menu de comandos slash em si é limpo e funcional. Escreve `/` em qualquer lugar no editor e aparece um dropdown com todos os tipos de bloco: títulos, texto, listas com marcadores, listas numeradas, listas de tarefas, blocos de código, tabelas, citações, divisores, imagens e páginas aninhadas.

![Menu de comandos slash com opções de tipos de bloco](images/screenshot-10.png)

As páginas podem ser partilhadas na web com um toggle, e há opções de exportação para Markdown e JSON. A coisa toda é responsiva também, funcionando bem no telemóvel.

![Funcionalidade de partilha na web](images/screenshot-14.png)

![Opções de exportação incluindo Markdown e JSON](images/screenshot-16.png)

![Vista móvel do editor](images/screenshot-17.png)

Tudo sincroniza em tempo real através do Firebase Firestore com autenticação anónima, então qualquer pessoa pode abrir a app e começar a escrever sem criar uma conta.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## A Saga do Firestore

Aqui está a coisa sobre este projeto que realmente vale a pena falar em detalhe. O editor em si ficou pronto de forma relativamente tranquila. O Tiptap está bem documentado, as extensões são modulares, e o Claude tratou da integração sem precisar de muita ajuda. O verdadeiro desafio foi pôr o Firestore a funcionar corretamente em produção.

O git log deste projeto é brutal. Há dezenas de commits só a fazer debug de problemas de deployment do Firestore. Configuração de long polling, definições de cache, fallbacks para REST API, trimming de variáveis de ambiente, gestão de timeouts de conexão... foi um desfile de problemas pequenos e dolorosos que só apareciam depois do deploy no Vercel.

Localmente tudo funcionava na perfeição. Mas em produção, as conexões do Firestore ficavam penduradas, os dados não carregavam, ou a app falhava silenciosamente a sincronizar. Cada correção levava a descobrir o problema seguinte. Limpar espaços em branco das variáveis de ambiente resolveu um problema. Mudar de WebSocket para long polling resolveu outro. Ajustar a configuração de cache resolveu um terceiro. Foi uma situação clássica de "funciona na minha máquina" espalhada por provavelmente 15-20 commits.

Isto é honestamente uma das partes mais realistas de todo o desafio. Construir a UI é a parte divertida. Fazê-la realmente funcionar em produção com um backend real é onde o tempo vai. E com coding assistido por IA, o loop de debugging é interessante porque o Claude pode sugerir correções rapidamente, mas ainda precisas de fazer deploy, testar e iterar. O ciclo de feedback é mais lento que o desenvolvimento local independentemente da rapidez da IA.

O [Watchfire](https://watchfire.io) apanhou os problemas de deployment quase imediatamente, o que pelo menos me poupou de os descobrir dias depois através de relatórios de utilizadores.

## Experimenta

{{< github repo="nunocoracao/Vibe30-day29-n0ti0n" showThumbnail=true >}}

**[Demo ao Vivo](https://blocknotes-lime.vercel.app)**

![Editor com notas, listas, itens de tarefas e blocos de código](images/screenshot-01.png)

![Barra de formatação na seleção de texto](images/screenshot-03.png)

![Paleta de comandos para navegação rápida](images/screenshot-13.png)

![Template de itinerário de viagem em modo claro](images/screenshot-15.png)

## Veredito do Dia 29

Um editor de blocos com persistência real, páginas aninhadas e uma UI limpa é algo que as pessoas realmente precisam. O Tiptap 3 fez grande parte do trabalho pesado no lado do editor, e o Firebase tratou do backend, mas ligar tudo junto e especialmente pôr o deployment a comportar-se deu trabalho a sério. A saga do debugging do Firestore é um bom lembrete de que a parte difícil de entregar software raramente é o código das funcionalidades. É a infraestrutura, os casos extremos e as coisas que só rebentam em produção. Falta mais um dia.

---

*Este é o dia 29 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando coding assistido por IA.*
