---
title: "30 Dias de Vibe Coding - Dia 24 - Reblog"
description: "Um redesign moderno do meu blog pessoal, reconstruído de Hugo/Blowfish para Astro + Tailwind CSS com pesquisa fuzzy, modo escuro e tipografia personalizada."
summary: "Um redesign moderno do meu blog pessoal, reconstruído de Hugo/Blowfish para Astro + Tailwind CSS com pesquisa fuzzy, modo escuro e tipografia personalizada."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-24", "astro", "tailwind", "blog", "redesign"]
series: ["30 Days of Vibe Coding"]
series_order: 24
seriesOpened: false
date: 2026-04-29
draft: false
#type: "hidden"
---

Dia 24. Reconstruí o meu próprio blog.

Este é pessoal. O meu blog em [n9o.xyz](https://n9o.xyz) tem estado a correr em Hugo com o meu próprio tema, [Blowfish](https://blowfish.page), há anos. Fui eu que construí o Blowfish, sou eu que o mantenho, milhares de pessoas usam-no. Mas já há algum tempo que queria mudar para algo diferente. Uma identidade visual fresca, um stack diferente, algo que pareça mais comigo e menos com um tema que fiz para toda a gente.

Então o projeto de hoje foi o Reblog: um redesign de raiz do n9o.xyz, reconstruído de Hugo para Astro 5 com Tailwind CSS.

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day24-reblog.vercel.app)
{{< /alert >}}

## O Prompt

Isto não foi um único prompt. Foram 18 tarefas do [Watchfire](https://watchfire.io) ao longo do dia. A direção inicial foi algo do género:

> "Constrói um blog pessoal com Astro 5, Tailwind CSS e MDX. Modo escuro, posts em destaque, filtragem por tags, pesquisa fuzzy, uma página de currículo, uma página de música e uma página de projetos. Tipografia personalizada com Sora, Crimson Pro e JetBrains Mono."

A partir daí foi um processo iterativo. Ajustes de layout, afinações de cores, adicionar dados estruturados, corrigir estilos de impressão, ligar o suporte de séries para conteúdo em várias partes. O tipo de trabalho que normalmente leva semanas de vai-e-vem entre design e código.

## O Que Obtive

Uma plataforma de blog completa com seis secções distintas.

![Homepage em modo escuro](images/screenshot-01.png)

**A homepage** tem uma secção hero com a minha foto, título, bio e links sociais. Abaixo disso, uma secção de posts em destaque com cartões grandes, depois uma grelha de posts recentes. Limpo, centrado e acolhedor. O modo escuro usa uma paleta suave de verde-oliva acastanhado que eu gosto mesmo. Não é o típico cinzento escuro ou preto puro.

![Secção de posts em destaque](images/screenshot-02.png)

![Grelha de posts recentes](images/screenshot-03.png)

**A página de posts** tem filtragem por tags ao longo do topo. Clicas numa tag, a lista filtra instantaneamente. Sem recarregar a página, sem ida ao servidor. Apenas o Astro a fazer o que faz.

![Todos os posts com filtragem por tags](images/screenshot-05.png)

**A pesquisa fuzzy** é alimentada pelo Fuse.js. Carrega do lado do cliente e pesquisa em títulos, descrições e tags. Esta é uma das poucas ilhas interativas num site que de resto tem zero JS. A arquitetura de ilhas do Astro significa que o componente de pesquisa hidrata sozinho sem arrastar um framework para a página inteira.

**A página sobre** puxa a minha bio, links e um destaque de mentoria. A página de currículo lista o meu percurso profissional com logótipos de empresas e progressão de cargos. Ambas são limpas e legíveis.

![Página sobre](images/screenshot-04.png)

![Página de currículo](images/screenshot-07.png)

**A página de projetos** mostra trabalho open source com badges de estado, tags de tecnologia e links para repos e websites.

![Página de projetos](images/screenshot-06.png)

**A página de música** é uma grelha de capas de álbuns de faixas que lancei sob o nome N9O. Cada uma tem link para plataformas de streaming. Esta é uma página que nunca tive na versão Hugo e sempre quis ter.

![Página de música](images/screenshot-08.png)

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Modo Claro

A coisa toda também funciona em modo claro com deteção de preferência do sistema. Mesmo layout, paleta diferente.

![Homepage em modo claro](images/screenshot-09.png)

![Posts em destaque em modo claro](images/screenshot-10.png)

A versão clara usa um fundo creme quente com a mesma tipografia. Muda automaticamente com base nas definições do teu SO, ou podes alternar manualmente.

## Por Baixo do Capô

As escolhas tecnológicas aqui foram deliberadas:

- **Astro 5** para geração estática com zero JS por defeito
- **MDX** para posts do blog para poder incluir componentes em markdown quando necessário
- **Tailwind CSS** para estilizar sem lutar contra o CSS de um tema
- **Fuse.js** para pesquisa fuzzy do lado do cliente
- **Sharp** para otimização automática de imagens
- **Sora + Crimson Pro + JetBrains Mono** para tipografia que parece intencional
- **Dados estruturados** e **sitemap** para SEO
- **Feed RSS** para as três pessoas que ainda usam RSS (eu sou uma delas)
- **Estilos de impressão** porque às vezes imprimo artigos e devem ter bom aspeto

## As 18 Tarefas

O Watchfire dividiu isto em 18 tarefas. O lote inicial cobriu o essencial: scaffolding do projeto, componentes de layout, homepage, página de posts, página sobre, modo escuro. Depois continuei a adicionar pedidos. "Adiciona uma página de música." "Adiciona suporte de séries." "Os cartões em destaque precisam de mais contraste." "Adiciona estilos de impressão." "Adiciona dados estruturados."

Cada iteração voltou rápida e maioritariamente correta. O design visual passou por algumas rondas antes de chegar à paleta quente. A primeira versão era demasiado estéril. A segunda era demasiado escura. A terceira versão acertou no equilíbrio entre acolhedor e profissional.

## Experimenta

{{< github repo="nunocoracao/Vibe30-day24-reblog" showThumbnail=true >}}

**[Demo ao Vivo](https://vibe30-day24-reblog.vercel.app)**

## Veredito do Dia 24

Este é o projeto mais pessoalmente significativo do desafio até agora. Não porque seja o mais impressionante tecnicamente, mas porque é algo que tenho andado a adiar há meses. Redesenhar o teu próprio site é uma daquelas tarefas que nunca parece urgente o suficiente para começar. Há sempre algo mais importante. E depois um dia olhas para ele e percebes que já não te representa.

Construir uma plataforma de blog completa com seis páginas, modo escuro, pesquisa, filtragem por tags, suporte de séries, dados estruturados e estilos de impressão num único dia não é algo que eu conseguisse fazer sozinho. Nem de perto. A versão Hugo/Blowfish levou-me semanas de noites e fins de semana, e isso com um framework que eu já conhecia de trás para a frente.

Isto vai mesmo substituir o n9o.xyz? Talvez. Preciso de migrar o conteúdo e viver com ele durante um bocado. Mas o facto de ter uma alternativa funcional pronta, construída num dia, é meio selvagem.

---

*Este é o dia 24 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
