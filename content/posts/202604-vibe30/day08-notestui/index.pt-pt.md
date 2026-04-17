---
title: "30 Dias de Vibe Coding - Dia 8 - NotesTUI"
description: "Uma aplicação de notas em markdown para o terminal com pesquisa de texto integral, categorias, temas e um servidor MCP para integração com IA."
summary: "Uma aplicação de notas em markdown para o terminal com pesquisa de texto integral, categorias, temas e um servidor MCP para integração com IA."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-08", "go", "tui", "terminal", "notes", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 8
seriesOpened: false
date: 2026-04-13
draft: false
#type: "hidden"
---

Dia 8. Ontem construí uma TUI para repositórios git. Hoje construí uma para o meu cérebro.

## O Prompt

> "Build a terminal notes app in Go with markdown support and an MCP server."

Este foi o ponto de partida. Curto, vago, mal chega a ser uma especificação. Meti-o no [Watchfire](https://watchfire.io) e deixei-o expandir a ideia numa definição de produto completa: edição na aplicação com Glamour para pré-visualização de markdown, SQLite com FTS5 para pesquisa de texto integral, categorias, tags, múltiplos temas de cores, atalhos vim, modo servidor MCP, GoReleaser, GitHub Actions CI, scripts de instalação. Tudo isto veio do Watchfire a pegar na minha frase e a transformá-la em 36 tarefas.

## Como Foi Construído

As primeiras 30 e tal tarefas construíram a aplicação de notas principal: criar e editar notas no terminal, renderização de markdown com Glamour, pesquisa de texto integral com SQLite FTS5, categorias, tags, múltiplos temas e atalhos estilo vim. Tudo guarda dados em `~/.notestui/` com uma base de dados SQLite e um ficheiro de configuração YAML.

Depois, o último lote de tarefas tratou do lado da distribuição. Configuração GoReleaser para builds multiplataforma, GitHub Actions para CI, um script de instalação que detecta automaticamente o vosso SO e arquitectura, e um script de desinstalação para limpar tudo. No final tinha um README a sério e estava pronto para ser lançado como um binário independente.

O modo servidor MCP foi a parte interessante. Executar `notestui serve` inicia um servidor Model Context Protocol que expõe as vossas notas a ferramentas de IA. Listar notas, pesquisar, criar, actualizar, apagar, tudo através de MCP. Isto significa que o Claude Code ou qualquer assistente de IA compatível com MCP pode trabalhar directamente com as vossas notas.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![NotesTUI estado vazio com ecrã de boas-vindas](images/screenshot-01.png)

**O estado vazio é simpático.** A primeira vez que o executam, aparece um ecrã de boas-vindas limpo a dizer para carregarem `n` para criar a primeira nota. A barra inferior mostra todos os atalhos de uma só vez.

![Criar uma nova nota com título, tags e conteúdo](images/screenshot-02.png)

**O editor está integrado.** Carregam `n` e aparecem campos para título, tags e conteúdo. Tab move entre campos, Ctrl+S guarda. Sem abrir um editor externo, tudo fica dentro da TUI.

![Lista de notas com painel de pré-visualização](images/screenshot-03.png)

**Layout em painel dividido.** Lista de notas à esquerda, pré-visualização à direita. As tags aparecem como badges coloridos debaixo do título. A barra de estado no topo diz "Your markdown notes, beautifully organized", o que é um toque simpático que a IA adicionou por conta própria.

![Editar uma nota mais longa com conteúdo markdown](images/screenshot-04.png)

**A edição de markdown funciona para conteúdo a sério.** Colei uma nota mais longa e o editor tratou-a sem problemas. A área de conteúdo faz scroll, e quando guardam, o painel de pré-visualização renderiza o markdown com Glamour.

![Resultados de pesquisa de texto integral com pré-visualização](images/screenshot-05.png)

**A pesquisa é rápida e útil.** Carregam `/` para pesquisar e faz pesquisa de texto integral em todas as notas usando SQLite FTS5. Os resultados aparecem no painel esquerdo com a pré-visualização da nota correspondente à direita. A consulta de pesquisa fica destacada na pré-visualização.

![Ecrã de definições MCP - não ligado](images/screenshot-06.png)

**A integração MCP tem o seu próprio ecrã de definições.** Carregam `m` para abrir as definições MCP. Mostra o estado da ligação, ferramentas disponíveis e instruções de configuração. Quando não está ligado, guia-vos pelo processo de configuração.

![Ecrã de definições MCP - ligado ao Claude Code](images/screenshot-07.png)

**Uma vez ligado, mostra o estado.** O ecrã de definições actualiza-se para mostrar que o NotesTUI está configurado para o Claude Code, com um botão para desligar e uma opção para actualizar o estado.

![Claude Code a criar notas através de MCP](images/screenshot-08.png)

**Aqui é que a coisa fica louca.** Pedi ao Claude Code para "write me some notes on all Marvel characters, one for each." Ele começou a chamar `notestui - create_note` através de MCP, gerando perfis detalhados de personagens e enviando-os directamente para a minha base de dados de notas.

![Claude Code a criar notas de personagens Marvel em massa](images/screenshot-09.png)

**E continuou.** O Claude criou notas para o Thor, Hulk, Black Widow, Hawkeye, Capitão América, Homem de Ferro, cada uma com poderes, habilidades, factos-chave e informação sobre quem os interpretou. Tudo via chamadas de ferramentas MCP do Claude Code para o NotesTUI.

![Mais notas Marvel a serem criadas via MCP](images/screenshot-10.png)

**As notas continuaram a chegar.** Podem ver a lista de notas à esquerda a crescer à medida que o Claude as cria. Cada uma recebe tags adequadas como "marvel", "avengers", "mcu". A IA até decidiu expandir para além dos 6 Avengers originais e adicionar a Feiticeira Escarlate, o Visão e mais.

![Resultados de pesquisa para "spiderman" em todas as notas](images/screenshot-11.png)

**16 notas criadas, todas pesquisáveis.** Depois da IA terminar, pesquisei por "spiderman" e obtive o perfil completo da personagem com nome verdadeiro, poderes, factos-chave e aparições no MCU. A vista em painel dividido mostra a pré-visualização do markdown renderizado à direita.

![Vista de detalhe da nota com renderização markdown](images/screenshot-12.png)

**A renderização de markdown é sólida.** O Glamour trata de cabeçalhos, texto a negrito, listas e citações. A pré-visualização da nota no painel direito fica limpa e legível.

![NotesTUI e Claude Code lado a lado](images/screenshot-13.png)

**Lado a lado com o Claude Code.** A executar o NotesTUI à esquerda e o Claude Code à direita. À medida que o Claude cria notas através de MCP, elas aparecem na TUI em tempo real. A lista faz scroll para baixo à medida que chegam novas notas.

![Claude Code a consultar notas através de MCP](images/screenshot-14.png)

**A IA também pode ler as vossas notas.** Perguntei ao Claude "What's Spiderman's name based on my notes?" e ele chamou `notestui - get_note` através de MCP para procurar a resposta. Puxou os dados das minhas notas e respondeu correctamente: Peter Benjamin Parker. A IA consegue tanto escrever como ler da vossa base de dados de notas pessoal.

## Os Números

- **36 tarefas Watchfire** de repositório vazio a binário lançado
- **Go puro** sem dependência CGO (usa SQLite em Go puro)
- **6 ferramentas MCP**: listar, pesquisar, obter, criar, actualizar, apagar
- **Múltiplos temas** e atalhos vim
- **GoReleaser + GitHub Actions** para builds automatizados multiplataforma
- **Scripts de instalação e desinstalação** incluídos
- **Tempo total prático:** cerca de 25 minutos de testes, prompts e a brincar com a integração MCP

## Experimenta

{{< github repo="nunocoracao/Vibe30-day08-notestui" showThumbnail=true >}}

Instala com uma única linha:

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day08-notestui/main/scripts/install.sh | bash
```

Ou a partir do código-fonte:

```bash
go install github.com/nunocoracao/Vibe30-day08-notestui@latest
```

Depois basta executar `notestui` para começar a tomar notas, ou `notestui serve` para iniciar o servidor MCP.

## Veredicto do Dia 8

A aplicação de notas em si é sólida. TUI limpa, pesquisa rápida, renderização de markdown impecável. Se eu não tivesse já migrado para o Obsidian, este é o tipo de ferramenta que usaria diariamente. Mas o servidor MCP é o que torna esta diferente de tudo o resto no desafio até agora.

A demonstração com personagens Marvel foi divertida, mas pensem no que o servidor MCP realmente permite. Isto não é apenas uma aplicação de notas onde uma IA pode despejar trivialidades. É um armazém de conhecimento persistente que qualquer agente de IA pode ler e escrever. Podiam usá-lo para alimentar a memória de um agente. Metam lá notas de reuniões, contexto de projectos, resultados de pesquisa, e depois qualquer assistente compatível com MCP pode consultar esse conhecimento a pedido. A linha entre "aplicação de notas" e "base de conhecimento para agentes" afinal é um servidor MCP.

Ver as notas a aparecer em tempo real na TUI enquanto o Claude escrevia noutro terminal foi um daqueles momentos em que toda esta cena do vibe coding faz clique. Constróis uma ferramenta, dás-lhe uma interface de IA, e de repente consegue fazer coisas que nem te lembraste de pedir.

36 tarefas Watchfire. A complexidade extra veio do servidor MCP, dos scripts de distribuição e do pipeline de CI. Mas o resultado é uma ferramenta Go a sério que se instala com um único comando curl e funciona com assistentes de IA logo à partida.

---

*Este é o dia 8 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha a série enquanto lanço 30 projectos em 30 dias usando programação assistida por IA.*
