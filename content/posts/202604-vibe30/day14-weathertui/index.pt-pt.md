---
title: "30 Dias de Vibe Coding - Dia 14 - WeatherTUI"
description: "Um painel meteorológico para terminal com cenas em ASCII art, efeitos animados e suporte para múltiplas localizações."
summary: "Um painel meteorológico para terminal com cenas em ASCII art, efeitos animados e suporte para múltiplas localizações."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-14", "python", "tui", "weather", "textual"]
series: ["30 Days of Vibe Coding"]
series_order: 14
seriesOpened: false
date: 2026-04-19
draft: false
#type: "hidden"
---

Dia 14. Quis ver como ficava uma app de meteorologia quando se tira todos os frameworks de UI modernos e se força tudo para um terminal.

## O Prompt

> "Constrói um painel meteorológico para terminal com cenas em ASCII art, efeitos animados de meteorologia e suporte para múltiplas localizações"

## Como Foi Construído

Usei o [Watchfire](https://watchfire.io) e ele dividiu o trabalho em 23 tarefas. Parece muito para uma app de meteorologia, mas o âmbito cresceu rapidamente assim que a ASCII art e as animações entraram em cena.

A lista de tarefas cobriu primeiro o esperado: configuração do projecto, integração com a API Open-Meteo, layout básico. Depois entrou na parte divertida: 12 cenas únicas em ASCII art (sol, lua, chuva, neve, trovoada, nevoeiro, vento, nuvens), efeitos animados baseados em partículas para cada condição meteorológica, gráficos de temperatura e precipitação, vistas de previsão horária e diária, um painel com múltiplas localizações, temas de cores, suporte para rato e um layout com scroll.

23 tarefas. Não fiquei ali a orientar cada uma. O Watchfire pôs tudo em fila e foi trabalhando enquanto eu fazia outras coisas.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

Este surpreendeu-me mais do que a maioria.

![Vista focada com detalhes meteorológicos](images/screenshot-10.png)

**A ASCII art é genuinamente impressionante.** Cada condição meteorológica tem a sua própria cena. Há um céu encoberto com camadas de nuvens, chuva com gotas a cair, neve com flocos à deriva, um sol com raios a irradiar. A arte é detalhada e enche o terminal com verdadeiro carácter. Não é aquela ASCII art preguiçosa tipo "está a chover: //". Cenas reais multi-linha com sombreamento e profundidade.

**As animações são suaves.** Gotas de chuva caem. Flocos de neve flutuam. Estrelas cintilam no céu nocturno. Partículas de vento sopram pelo ecrã. Relâmpagos brilham durante trovoadas. Tudo isto a acontecer num terminal. Podes pausar e retomar as animações com uma única tecla.

![Painel com múltiplas localizações](images/screenshot-02.png)

**O painel está limpo.** Múltiplas localizações apresentadas numa grelha, cada uma com um pequeno ícone ASCII de meteorologia, temperatura actual e condições num relance. Clica em qualquer cartão ou carrega numa tecla numérica para saltar para a vista detalhada dessa localização.

![Vista focada para Nova Iorque](images/screenshot-08.png)

**A vista de detalhe tem tudo.** Índice de qualidade do ar, horas do nascer/pôr do sol, índice UV com código de cores, barra de humidade, velocidade e direcção do vento, cobertura de nuvens, detalhes de precipitação (chuva vs neve). Mais uma previsão de 7 dias no fundo com mini ASCII art para cada dia. Também podes alternar para uma vista horária de 12 horas.

![Pesquisa de localização](images/screenshot-03.png)

![Resultados de pesquisa para Lisboa](images/screenshot-04.png)

**A gestão de localizações funciona bem.** Pesquisa qualquer cidade do mundo, adiciona-a ao teu painel, reordena localizações, define uma predefinida. A pesquisa de geocodificação devolve resultados rapidamente e a interface de selecção é limpa.

![Painel com quatro localizações](images/screenshot-05.png)

**Quatro temas de cores.** Predefinido, oceano (azuis e cianos), pôr do sol (laranjas quentes) e floresta (verdes e tons terrosos). Carrega `t` para alternar entre eles. A tua preferência fica guardada num ficheiro de configuração.

![Selector de temas](images/screenshot-06.png)

![Tema oceano aplicado](images/screenshot-07.png)

**Sem necessidade de chave de API.** Usa a API gratuita Open-Meteo, por isso clonas o repositório, instalas as dependências e executas. Sem registo, sem tokens, sem configuração necessária.

## Os Números

- **12 cenas únicas em ASCII art** com efeitos animados correspondentes
- **4 temas de cores** com preferências persistentes
- **23 tarefas no Watchfire** desde a configuração até ao polimento final
- **Construído com Python e Textual** (o framework TUI da Textualize)
- **Tempo total hands-on:** talvez 20 minutos a experimentar diferentes cidades e a alternar entre temas

## Experimenta

{{< github repo="nunocoracao/Vibe30-day14-weathertui" showThumbnail=true >}}

Clona o repositório e executa `python -m weather_tui`. Sem necessidade de chave de API. Teclas de seta para navegar, teclas numéricas para saltar entre localizações, `t` para mudar temas, `?` para a lista completa de atalhos.

## Veredicto do Dia 14

Só a ASCII art ter-me-ia levado dias a desenhar à mão. Os efeitos animados de meteorologia por cima disso? Nem sequer teria tentado.

O que me impressiona é a atenção ao detalhe. Os cartões de previsão de 7 dias têm cada um o seu próprio ícone ASCII de meteorologia em miniatura. A humidade aparece como uma barra de progresso. O vento inclui velocidade e direcção da bússola. O índice UV muda de cor consoante a severidade. Nada disto foi especificado explicitamente. Simplesmente percebeu que um painel meteorológico precisa destas coisas e construiu-as todas.

As apps de terminal parecem ser um ponto ideal para coding assistido por IA. As limitações de uma interface baseada em texto ajudam a focar o resultado em vez de o limitar.

---

*Este é o dia 14 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projectos em 30 dias usando coding assistido por IA.*
