---
title: "30 Dias de Vibe Coding - Dia 13 - GitFolio"
description: "Um gerador de portfólio GitHub que transforma qualquer username num site de portfólio polido com 5 templates e 7 temas de cor."
summary: "Um gerador de portfólio GitHub que transforma qualquer username num site de portfólio polido com 5 templates e 7 temas de cor."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-13", "github", "portfolio", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 13
seriesOpened: false
date: 2026-04-18
draft: false
#type: "hidden"
---

Dia 13. E se pudesses transformar qualquer perfil GitHub num site de portfólio com bom aspeto sem escrever uma única linha de código?

## O Prompt

> "Constrói um gerador de portfólio GitHub. Insere um username, obtém um portfólio polido com estatísticas, repos, linguagens e atividade. Múltiplos templates, múltiplos temas de cor, exportação para HTML."

## Como Foi Construído

O Watchfire dividiu isto em 19 tarefas. O trabalho principal começou com a integração da API do GitHub e a recolha de todos os dados que quererias num portfólio: informação de perfil, repos, atividade de contribuições, linguagens, organizações. A partir daí construiu o sistema de templates, o motor de temas, e todas as funcionalidades de exportação e partilha.

A lista de tarefas cobriu bastante terreno: cinco templates de portfólio (Minimal, Developer Card, Creative/Bento Grid, Corporate/Showcase, e um tema Hacker/Terminal), sete temas de cor, cores de destaque personalizadas, modo de impressão e PDF, competências detetadas automaticamente, guias de deployment, exportação de README, e um gerador de cartões de partilha social. É um conjunto de funcionalidades surpreendentemente profundo para algo que corre inteiramente no browser sem backend.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

A landing page já tem um aspeto polido. Modo escuro por defeito, tipografia limpa, um explicador em três passos, e uma pré-visualização de todos os templates e temas logo na homepage.

![Landing page](images/screenshot-01.png)

![Três passos para o teu portfólio](images/screenshot-02.png)

**Cinco templates, cada um com uma personalidade distinta.** O Showcase é a opção completa com um layout de grelha bento. O Developer Card é compacto e direto ao assunto. O Bento Grid aposta no visual de cartões assimétricos. O Minimal reduz tudo à tipografia. E o Terminal renderiza tudo como uma interface de linha de comandos, completa com arte ASCII e fontes monoespaçadas.

![Seletor de template e tema](images/screenshot-03.png)

**Sete temas de cor mais cores de destaque personalizadas.** Midnight, Ocean, Forest, Sunset, Rose, Slate, e uma opção personalizada onde escolhes a tua própria cor de destaque. A landing page até tem uma variante de modo claro.

![Landing em modo claro](images/screenshot-04.png)

**Os portfólios gerados estão repletos de dados.** Estatísticas com contadores animados, mapa de calor de contribuições, distribuição de linguagens com um gráfico de barras empilhadas, repositórios principais, atividade recente, organizações, links sociais. Tudo extraído da API pública do GitHub sem necessidade de autenticação.

![Template Showcase com estatísticas](images/screenshot-05.png)

![Template Minimal](images/screenshot-06.png)

**O painel de personalização é completo.** Podes ativar e desativar secções individuais, trocar temas e templates em tempo real, substituir o texto da bio, e ver as alterações refletidas instantaneamente. Tudo acontece do lado do cliente, por isso não há carregamento entre trocas.

![Painel de personalização](images/screenshot-07.png)

**O template Bento Grid tem um aspeto fantástico.** Este foi o que me surpreendeu. Organiza informação de perfil, estatísticas, repos em destaque, atividade recente e linguagens numa grelha de cartões assimétrica que parece um projeto de design a sério.

![Template Bento Grid](images/screenshot-08.png)

**O template Terminal é incrível.** Renderiza todo o teu portfólio como se estivesses a correr comandos num terminal. A informação de perfil aparece como um output estilo fetch, as estatísticas mostram-se como respostas CLI, os repos listam-se como entradas de diretório. Até tem um cursor a piscar.

![Template Terminal](images/screenshot-09.png)

**Guias de deployment integrados.** Depois de exportares o HTML do teu portfólio, um modal de deploy guia-te passo a passo para o alojares no Netlify Drop, GitHub Pages ou Vercel. Instruções passo a passo com links para cada plataforma. Este é o tipo de toque final que transforma uma demo em algo que as pessoas conseguem mesmo usar.

![Modal de deploy - Netlify](images/screenshot-10.png)

![Modal de deploy - GitHub Pages](images/screenshot-11.png)

![Modal de deploy - Vercel](images/screenshot-12.png)

## Os Bugs Reportados

A API pública do GitHub limita-te a 60 pedidos por hora sem autenticação, e cada geração de portfólio usa cerca de 4 pedidos. Durante os testes atingi o limite de taxa algumas vezes ao regenerar portfólios rapidamente. Não é propriamente um bug, apenas uma limitação que vale a pena conhecer. A app lida com isso de forma elegante e diz-te para esperares.

O README menciona 6 temas e 4 templates, mas a app em si vem com 5 templates e 7 temas. O código ultrapassou a documentação, o que é basicamente a história deste desafio todo.

## Os Números

- **5 templates de portfólio** com layouts distintos
- **7 temas de cor** mais cores de destaque personalizadas
- **19 tarefas Watchfire** desde integração da API até guias de deployment
- **Zero backend** necessário, tudo corre do lado do cliente
- **4 chamadas à API do GitHub** por geração de portfólio
- **Formatos de exportação:** download HTML, cópia para clipboard, link partilhável, README e cartão de partilha social

## Experimenta

{{< github repo="nunocoracao/Vibe30-day13-githubportfolio" showThumbnail=true >}}

**[Gera o Teu Portfólio](https://vibe30-day13-githubportfolio.vercel.app)**

Basta inserires qualquer username público do GitHub e escolheres um template.

## Veredicto do Dia 13

Este preenche uma lacuna real. A maioria das ferramentas de portfólio para developers ou exige que montes um projeto inteiro ou prende-te a um design específico. O GitFolio simplesmente pega num username e dá-te um ficheiro HTML autónomo que podes alojar em qualquer lado. A variedade de templates é sólida, o tema Terminal sozinho já vale a pena experimentar, e os guias de deployment removem o último ponto de fricção entre gerar um portfólio e realmente pô-lo online.

O facto de correr inteiramente no browser sem autenticação, sem base de dados e sem tracking é um bom toque. Poderias dar este URL a alguém que nunca tocou num terminal e essa pessoa teria um site de portfólio online em cinco minutos.

Se a melhoria na qualidade do output se deve a eu estar a ficar melhor nos prompts ou às ferramentas estarem a ficar melhores a inferir o que quero, não tenho a certeza. Provavelmente ambos.

---

*Este é o dia 13 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
