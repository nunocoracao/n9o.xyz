---
title: "30 Dias de Vibe Coding - Dia 26 - PixelForge"
description: "Um canvas colaborativo de pixel art com desenho em tempo real, vários tamanhos de grelha e um conjunto completo de ferramentas criativas."
summary: "Um canvas colaborativo de pixel art com desenho em tempo real, vários tamanhos de grelha e um conjunto completo de ferramentas criativas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-26", "pixel-art", "firebase", "collaboration"]
series: ["30 Days of Vibe Coding"]
series_order: 26
seriesOpened: false
date: 2026-05-01
draft: false
#type: "hidden"
---

Dia 26. Queria construir algo colaborativo, algo onde as pessoas pudessem realmente criar juntas em tempo real. Por isso fui para um canvas de pixel art.

## O Prompt

O ponto de partida foi simples:

> "Constrói um canvas colaborativo de pixel art onde vários utilizadores possam desenhar juntos em tempo real."

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day26-pixelforge.vercel.app)
{{< /alert >}}

## Como Foi Construído

O [Watchfire](https://watchfire.io) dividiu isto em 13 tarefas, o que é bastante para um projeto de um só dia. Mas editores de pixel art têm um número surpreendente de peças móveis assim que começas a pensar em todas as ferramentas que as pessoas esperam.

As primeiras tarefas cobriram a base: configurar o canvas com Firebase Realtime Database para sincronização, adicionar tamanhos de grelha selecionáveis (16x16, 32x32, 64x64) e construir uma paleta de 32 cores com um seletor de cores personalizado. A partir daí ramificou-se para as ferramentas de desenho propriamente ditas: caneta, borracha e preenchimento por inundação.

E depois continuou. Suporte para desfazer/refazer. Um modo de simetria para criar designs espelhados. Ferramentas de formas para retângulos e linhas. Tamanhos de pincel ajustáveis. Templates de canvas para não teres de começar do zero todas as vezes. Uma funcionalidade de timelapse que reproduz como o canvas foi desenhado. Um feed de atividade que mostra o que outros utilizadores estão a fazer. Uma ferramenta de seleção para mover e copiar regiões. Um sistema de 2 camadas com camadas de primeiro plano e de fundo. E finalmente, opções de exportação para tirares a tua arte como PNG em vários tamanhos.

Treze tarefas. Isto é uma aplicação de desenho completa.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Página inicial do PixelForge com templates e canvas recentes](images/screenshot-01.png)

A página inicial já deu o tom. Mostra templates iniciais (coração, espada, smiley, árvore) e uma galeria de canvas recentes que outros utilizadores criaram. Podes saltar para qualquer um deles ou criar um novo do zero.

![Editor de canvas com barra de ferramentas e painel de camadas](images/screenshot-02.png)

No topo tens a barra de ferramentas completa: caneta, borracha, preenchimento, linha, retângulo, círculo e ferramentas de seleção. À esquerda está a paleta de cores expandida com o seletor personalizado. À direita está o painel de camadas com as camadas de primeiro plano e de fundo, cada uma com controlos de visibilidade.

![Pixel art a ser desenhada no canvas](images/screenshot-03.png)

Desenhar é responsivo. Cada clique de pixel sincroniza através do Firebase para que qualquer pessoa no mesmo URL do canvas veja as alterações imediatamente. As linhas da grelha ajudam-te a ser preciso, e o nível de zoom ajusta-se bem para diferentes tamanhos de grelha.

![Reprodução de timelapse](images/screenshot-04.png)

A funcionalidade de timelapse é uma daquelas coisas que não esperava que funcionasse tão bem. Grava cada pixel colocado e consegue reproduzir todo o processo de desenho do início ao fim. Tens controlos de reprodução e opções de velocidade.

![Timelapse em ação com um canvas colorido](images/screenshot-05.png)

Ver uma peça complexa a ganhar forma pixel a pixel é estranhamente satisfatório. Também serve como uma forma agradável de ver como outras pessoas abordam os seus desenhos.

![Diálogo de exportação com opções de formato e tamanho](images/screenshot-06.png)

O diálogo de exportação dá-te opções reais. Podes definir um fundo transparente, escolher entre vários tamanhos de saída (1x, 2x, 4x, 8x) e exportar como PNG, SVG ou copiar diretamente para a área de transferência. Para uma ferramenta de pixel art, ter o upscaling integrado é importante, já que ninguém quer um PNG de 16x16 no tamanho real.

![Template de coração desenhado com sombreamento](images/screenshot-07.png)

Os templates são um toque agradável. Este template de coração vem pré-carregado para que possas começar a adicionar detalhe e sombreamento logo, em vez de desenhares o contorno do zero. O sistema de 2 camadas significa que podes manter o template na camada de fundo e pintar no primeiro plano sem te preocupares em estragar a forma base.

![Galeria de canvas recentes](images/screenshot-09.png)

A secção de canvas recentes na página inicial funciona como uma galeria comunitária. Podes ver o que outros fizeram, e cada canvas mostra o seu tamanho de grelha. Corações, caras, espadas, árvores... as pessoas gravitam naturalmente para os mesmos tipos de temas de pixel art.

## Os Relatórios de Bugs

Os principais problemas que encontrei durante os testes:

- O preenchimento por inundação em grelhas maiores (64x64) podia sentir-se lento ao sincronizar cada pixel alterado individualmente. Precisava de atualizações em lote.
- O modo de simetria nem sempre alinhava corretamente em tamanhos de grelha pares no início.
- O desenho por toque em telemóvel precisou de algum trabalho para evitar que a página fizesse scroll enquanto tentavas desenhar.
- A troca de camadas nem sempre era visualmente óbvia, por isso era fácil desenhar na camada errada sem te aperceberes.

## Os Números

- **13 tarefas Watchfire** desde o canvas inicial até às opções de exportação
- **3 tamanhos de grelha** com sincronização em tempo real em todos eles
- **Paleta de 32 cores** mais seletor de cores personalizado
- **8 ferramentas de desenho** incluindo formas e seleção
- **Sistema de 2 camadas** com visibilidade independente
- **Firebase Realtime Database** a tratar de toda a colaboração

## Experimenta

{{< github repo="nunocoracao/Vibe30-day26-pixelforge" showThumbnail=true >}}

**[Experimenta o PixelForge](https://vibe30-day26-pixelforge.vercel.app)**

Cria um canvas e partilha o link. Qualquer pessoa com o URL pode desenhar contigo.

## Veredito do Dia 26

Um canvas de pixel art parece simples, mas assim que adicionas camadas, simetria, templates, timelapse e colaboração em tempo real, estás a olhar para uma ferramenta criativa legítima.

A integração com o Firebase é o coração de tudo. Cada alteração de pixel passa pela Realtime Database, o que significa que várias pessoas podem genuinamente desenhar no mesmo canvas ao mesmo tempo. Sem polling, sem botão de refresh, apenas atualizações em direto. Todas as 13 tarefas juntaram-se em algo coeso a partir de um único prompt.

Vai substituir o Aseprite ou o Piskel? Não. Mas para sessões rápidas e colaborativas de pixel art, dá conta do recado. E só a reprodução de timelapse já vale a pena experimentar. Há algo realmente divertido em ver uma grelha vazia transformar-se em arte, um pixel de cada vez.

---

*Este é o dia 26 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
