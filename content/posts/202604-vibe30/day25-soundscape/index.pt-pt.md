---
title: "30 Dias de Vibe Coding - Dia 25 - SoundScape"
description: "Um misturador de sons ambiente com áudio gerado proceduralmente, presets, um gerador de beats lo-fi e mixes partilháveis."
summary: "Um misturador de sons ambiente com áudio gerado proceduralmente, presets, um gerador de beats lo-fi e mixes partilháveis."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-25", "web-audio", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 25
seriesOpened: false
date: 2026-04-30
draft: false
#type: "hidden"
---

Dia 25. Construí exatamente a app que eu próprio usaria enquanto construía todos os outros dias.

## O Prompt

A ideia era simples: um misturador de sons ambiente onde se sobrepõem sons para criar uma atmosfera de fundo para trabalhar, relaxar ou dormir. Tipo aqueles vídeos do YouTube de "ambiente de café", mas interativo e personalizável.

A restrição interessante era que eu queria que todo o áudio fosse gerado proceduralmente usando a Web Audio API. Sem ficheiros de som, sem assets de áudio para carregar. Tudo sintetizado no browser.

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day25-soundscape.vercel.app)
{{< /alert >}}

## Como Foi Construído

O [Watchfire](https://watchfire.io) dividiu isto em 10 tarefas. O plano inicial na verdade usava Howler.js com ficheiros de som pré-gravados, mas mudei cedo para geração procedural com a Web Audio API. Isso significou que cada som que se ouve, desde a chuva até uma lareira a crepitar, está a ser gerado matematicamente em tempo real. Sem MP3s, sem downloads, sem ecrãs de carregamento.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Vista principal do SoundScape](images/screenshot-01.png)

**12 sons em 3 categorias.** Natureza, Urbano e Acolhedor. Cada um tem o seu próprio cartão com um slider de volume, e podes misturar e combinar como quiseres. A categoria Natureza tem coisas como chuva, floresta e ondas do mar. Urbano tem conversa de café e teclar no teclado. Acolhedor tem lareira a crepitar.

![Controlos principais](images/screenshot-02.png)

**Os controlos principais são limpos.** Três sliders no topo para Ambiente, Música e volume geral, mais um botão de temporizador para modo de sono. A interface com glassmorphism fica genuinamente bem contra o fundo escuro.

![Sons ativos com preset Forest Cabin](images/screenshot-03.png)

**Os presets tornam-no instantaneamente útil.** Há quatro presets incluídos: Rainy Coffee Shop, Forest Cabin, Late Night Coding e Ocean Breeze. Um clique e tens uma mistura curada. Forest Cabin, por exemplo, ativa Floresta, Vento, Pássaros e Lareira a diferentes níveis de volume. Também podes guardar os teus próprios presets personalizados no localStorage.

![Grelha de sons - Natureza e Urbano](images/screenshot-05.png)

![Grelha de sons - Categoria Acolhedor](images/screenshot-06.png)

**Todos os sons são gerados proceduralmente.** A chuva é ruído branco moldado com filtros. O vento são osciladores de baixa frequência com modulação lenta. Os pássaros são pequenos chirps de ondas sinusoidais com timing aleatório. A lareira é ruído filtrado com explosões de crepitar. Nada soa perfeito, mas tudo soa reconhecível e mistura-se bem o suficiente para o cérebro preencher as lacunas.

![Gerador de beats lo-fi](images/screenshot-04.png)

**Há um gerador de beats lo-fi.** Isto não estava no plano original mas apareceu como bónus. Tem presets de mood (Chill, Happy, Sad, Dreamy) e controlos individuais para Bateria, Baixo, Teclas, Melodia e Crackle de vinil. Corre a 74 BPM e na verdade produz algo que quererias ter de fundo. Os beats sobrepõem-se aos sons ambiente, por isso podes ter chuva mais beats lo-fi mais lareira tudo ao mesmo tempo.

**O fundo muda com a tua mistura.** Um gradiente de fundo dinâmico muda com base nos sons que estão ativos. Misturas com mais natureza puxam para verdes e azuis, urbano puxa para tons mais quentes. É subtil mas faz com que tudo pareça mais vivo.

**Partilha por URL.** Podes partilhar a tua mistura exata com alguém copiando o URL. Ele codifica quais sons estão ativos e os seus níveis de volume, por isso qualquer pessoa que abra o link recebe exatamente a tua configuração.

**Atalhos de teclado por todo o lado.** Espaço para pausar tudo, teclas numéricas 1-9 e 0 para alternar sons individuais, Escape para parar tudo. O temporizador de sono faz um fade-out suave durante a duração escolhida (15, 30, 60 ou 90 minutos).

## Os Bugs

A abordagem de áudio procedural significou que a maioria dos bugs eram relacionados com áudio:

- Alguns sons tinham cliques e pops ao ligar e desligar (era preciso ramping de ganho adequado)
- O timing do gerador de beats lo-fi desviava ligeiramente em sessões longas
- Alguns dos sons sintetizados eram demasiado agressivos a volume máximo antes dos filtros serem afinados

Nada de grave. A Web Audio API é poderosa mas implacável se não tratares do ciclo de vida do contexto de áudio corretamente.

## Experimenta

{{< github repo="nunocoracao/Vibe30-day25-soundscape" showThumbnail=true >}}

**[Abrir SoundScape](https://vibe30-day25-soundscape.vercel.app)**

Melhor experiência com auscultadores. Experimenta o preset "Late Night Coding" e liga os Lo-Fi Beats.

## Veredito do Dia 25

Há algo satisfatório em misturar o teu próprio fundo ambiente em vez de andar à procura do vídeo certo no YouTube ou playlist no Spotify. E o facto de ser tudo gerado proceduralmente significa que não há loops, não há repetição. A chuva simplesmente continua, sempre ligeiramente diferente.

A Web Audio API é subestimada. Não fazia ideia de que se conseguia sintetizar tantos sons diferentes puramente com osciladores, geradores de ruído e filtros. Não é qualidade de estúdio, mas para ambiente de fundo funciona surpreendentemente bem. Zero ficheiros de áudio significa que a app carrega instantaneamente e funciona offline.

Faltam cinco dias.

---

*Este é o dia 25 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
