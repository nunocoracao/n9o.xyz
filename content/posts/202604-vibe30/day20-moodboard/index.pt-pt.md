---
title: "30 Dias de Vibe Coding - Dia 20 - MoodBoard"
description: "Um mood board colaborativo onde qualquer pessoa pode fixar imagens, links e notas num canvas partilhado com atualizações em tempo real."
summary: "Um mood board colaborativo onde qualquer pessoa pode fixar imagens, links e notas num canvas partilhado com atualizações em tempo real."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-20", "firebase", "collaboration", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 20
seriesOpened: false
date: 2026-04-25
draft: false
#type: "hidden"
---

Dia 20. Queria um canvas partilhado onde um grupo de pessoas pudesse atirar imagens, links e notas para uma parede e ver o que cola. Literalmente.

## O Prompt

> "Constrói uma app de mood board colaborativo. Qualquer pessoa com o link pode fixar imagens, notas de texto e links num canvas partilhado. Sincronização em tempo real, autenticação anónima, layout livre."

Esta foi a semente. O [Watchfire](https://watchfire.io) dividiu tudo em 7 tarefas que levaram o projeto de uma base Firebase básica até um pinboard colaborativo completo.

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day20-moodboard.vercel.app)
{{< /alert >}}

## Como Foi Construído

Sete tarefas, cada uma a acrescentar uma nova camada:

1. Sincronização em tempo real com Firebase como base
2. Três tipos de pins: notas adesivas de texto, upload de imagens e cartões de links com pré-visualização OG
3. Arrastar para organizar os pins num canvas livre
4. Etiquetas de cor nos pins para agrupar visualmente
5. Zoom e pan mais redimensionamento de pins para controlo do canvas
6. Bloqueio de quadro para o criador poder congelar um board em modo leitura, e exportação para PNG
7. Presença de cursores para ver onde as outras pessoas estão a passar o rato, mais um passe de redesign visual

A progressão fez sentido. Não podes arrastar pins antes de eles existirem, e não vale a pena preocupar-te com polimento visual até as interações principais funcionarem.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

Este encaixou logo à primeira.

![Página inicial do MoodBoard](images/screenshot-02.png)

**A página inicial define o tom.** Logo grande, pins de exemplo espalhados no fundo, um botão para criar um quadro. Sem registo, sem conta, sem fricção. Carregas em "Create New Board" e já estás dentro.

![Quadro vazio pronto para pins](images/screenshot-03.png)

**Um quadro novo é um canvas em branco.** Fundo escuro com uma grelha de pontos subtil. A barra de ferramentas é mínima — apenas opções para bloquear, exportar e copiar o URL de partilha no canto superior direito. O botão de ação flutuante no canto inferior direito abre o seletor de tipo de pin.

![Seletor de tipo de pin](images/screenshot-04.png)

**Três tipos de pins cobrem o essencial.** Texto para notas adesivas, imagem para uploads e link para cartões de URL. Carrega no botão de mais, escolhe o tipo e larga-o no canvas. Simples o suficiente para qualquer pessoa com o link perceber sem instruções.

![Nota adesiva de texto no canvas](images/screenshot-05.png)

**As notas adesivas parecem mesmo notas adesivas.** Têm aquele aspeto ligeiramente inclinado, tipo papel. Podes escrever o que quiseres, escolher uma cor e arrastá-las para onde quiseres. A cor pêssego num canvas escuro fica surpreendentemente bem.

![Diálogo de upload de imagem](images/screenshot-06.png)

**O upload de imagem é direto.** Aparece um modal, escolhes um ficheiro e ele faz upload para o Firebase Storage. A imagem aparece como um pin no canvas que podes arrastar e redimensionar como tudo o resto.

![Quadro com conteúdo misto](images/screenshot-07.png)

**Mistura tudo e começa a parecer um mood board a sério.** Imagens, notas adesivas, tamanhos diferentes. Podes arrastar as coisas para encontrar arranjos que funcionem. O canvas livre significa que nada está preso a uma grelha, por isso tens aquele visual orgânico de colagem.

![Quadro completo com cartões de links](images/screenshot-08.png)

**Os cartões de links puxam metadados OG.** Cola um URL e ele vai buscar o título, descrição e imagem de pré-visualização. O cartão do Watchfire, o cartão do Blowfish, o cartão do OpenClaw ficaram todos bem renderizados com o branding intacto. Ficam muito melhor do que simplesmente colar um URL cru.

## Os Bug Reports

A colaboração em tempo real tem sempre casos extremos:

- A presença de cursores às vezes oscilava quando vários utilizadores se moviam rapidamente
- Uploads de imagens muito grandes podiam tornar o canvas lento até a imagem acabar de carregar
- A exportação para PNG às vezes falhava pins que estavam longe do centro do viewport

Nada que estragasse a experiência, mas o tipo de problemas de polimento que ias querer resolver antes de lançar isto para uso a sério.

## Os Números

- **7 tarefas Watchfire** desde o setup do Firebase até ao redesign visual
- **Stack Firebase:** Anonymous Auth, Firestore para sincronização em tempo real, Storage para upload de imagens
- **Next.js 15 + Tailwind CSS 4** no frontend
- **html2canvas** para a funcionalidade de exportação para PNG
- **Três tipos de pins:** texto, imagem, link (com pré-visualização OG)
- **Funcionalidades colaborativas:** sincronização em tempo real, presença de cursores, bloqueio de quadro

## Experimenta

{{< github repo="nunocoracao/Vibe30-day20-moodboard" showThumbnail=true >}}

**[Abrir MoodBoard](https://vibe30-day20-moodboard.vercel.app)**

Cria um quadro e partilha o link. Qualquer pessoa pode fixar conteúdo nele.

## Veredito do Dia 20

Dois terços do desafio concluídos. O Dia 10 foi um clone do Miro sem colaboração. O Dia 20 é um mood board com sincronização em tempo real completa. Isto parece progresso.

A integração com Firebase é o que faz este funcionar. A autenticação anónima significa zero fricção para entrar num quadro. Os listeners em tempo real do Firestore fazem com que os pins apareçam instantaneamente para todos. A presença de cursores significa que podes ver que alguém está ali contigo. Estas são as funcionalidades que transformam um canvas individual num espaço partilhado.

O que mais me surpreendeu foram os cartões de links. Colar um URL e receber um cartão formatado com o branding do site, descrição e imagem de pré-visualização fez com que os quadros parecessem imediatamente mais ricos. Essa única funcionalidade transformou isto de "um sítio para pôr notas adesivas" em algo que usarias mesmo para recolher e partilhar referências para um projeto.

Sete tarefas foi um âmbito apertado para uma app colaborativa em tempo real. Mas cada tarefa construiu sobre a anterior de forma limpa, e o produto final parece coeso. Nada mau para o dia 20.

---

*Este é o dia 20 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
