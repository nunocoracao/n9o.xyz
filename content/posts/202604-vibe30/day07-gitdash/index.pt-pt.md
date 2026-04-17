---
title: "30 Dias de Vibe Coding - Dia 7 - GitDash"
description: "Um painel de terminal para monitorizar o estado de todos os teus repositórios git de relance, construído com Go e Bubble Tea."
summary: "Um painel de terminal para monitorizar o estado de todos os teus repositórios git de relance, construído com Go e Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-07", "go", "tui", "terminal", "git"]
series: ["30 Days of Vibe Coding"]
series_order: 7
seriesOpened: false
date: 2026-04-12
draft: false
#type: "hidden"
---

Dia 7. A mesma stack de ontem. O mesmo framework. Também não é a ideia mais original.

Depois do Dia 6 ter provado que eu conseguia construir com Go e Bubble Tea sem nunca ter tocado em nenhum dos dois, quis testar outra coisa: o que acontece quando apontas a IA a uma ferramenta existente e lhe pedes para construir um wrapper? Neste caso, git. Tenho demasiados repos e zero noção de quais têm alterações por fazer commit.

## O Prompt

> "Constrói uma app TUI em Go que percorra uma árvore de diretórios à procura de repos git e mostre o seu estado num painel de terminal. Com código de cores: verde para limpo, amarelo para sujo, azul para ahead/behind. Deixa-me fazer fetch, pull e abrir uma shell em qualquer repo. Usa Bubble Tea para a UI."

## Como Foi Construído

A parte interessante desta construção não é a UI nem o framework. É como a IA fez interface com o git. A app inteira é essencialmente um wrapper: faz shell out para o `git` para cada pedaço de informação que mostra. Nomes de branches, hashes de commits, contagens de ahead/behind, listas de stash, tracking de ficheiros sujos. Não usa uma biblioteca Go para git. Executa os mesmos comandos que escreveias à mão e faz parse do output.

A IA dividiu o trabalho em packages que mapeiam para responsabilidades: um scanner que percorre árvores de diretórios à procura de pastas `.git`, um package git que encapsula comandos CLI, um sistema de configuração usando YAML, e uma camada TUI construída sobre o Bubble Tea da Charm. O scanner salta `node_modules`, `vendor` e diretórios ocultos. O package git trata de branch, status, log, rev-list, stash list e describe. A UI tem separação limpa entre vista de lista, vista de detalhe, barra de estado, overlay de ajuda e estilos.

Veio até com um Makefile para builds cross-platform (darwin/linux, amd64/arm64) e um script de instalação que deteta automaticamente o teu SO e arquitetura.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Vista principal do GitDash mostrando repos agrupados por estado](images/screenshot-01.png)

**Agrupa repos por estado.** Repos sujos com alterações por fazer commit aparecem primeiro (ponto amarelo), depois repos que precisam de sincronizar com o remoto (contagens ahead/behind em azul), depois repos limpos (marca verde). De relance consigo ver quais repos precisam de atenção. Carrega `s` para alternar entre vistas agrupada e alfabética.

![GitDash com um repo selecionado](images/screenshot-02.png)

**Cada repo mostra muita informação em duas linhas.** Nome, branch em parênteses retos cor-de-rosa, tag mais recente entre parênteses, indicador limpo/sujo, setas ahead/behind, tempo relativo do commit à direita, e a última mensagem de commit em baixo. Consegue comprimir uma quantidade surpreendente de contexto num espaço pequeno.

![Vista de detalhe para um único repo](images/screenshot-03.png)

**A vista de detalhe é genuinamente útil.** Carrega Enter em qualquer repo e tens o quadro completo: caminho, branch, tag, estado, estado de sincronização com remoto, mensagem de commit completa com autor, lista de ficheiros alterados se estiver sujo, e contagem de stashes. A partir daqui podes fazer pull, ou carregar `g` para abrir uma shell diretamente no diretório desse repo.

![Shell aberta a partir do GitDash](images/screenshot-04.png)

**A integração com a shell funciona.** Carrega `g` e abre a tua shell (lê `$SHELL`) no diretório do repo. Faz o que precisares, sai, e estás de volta ao GitDash. Quando voltas, atualiza o estado do repo automaticamente.

**Tem pesquisa/filtro.** Carrega `/` e começa a escrever para filtrar repos por nome em tempo real. Útil quando estás a percorrer um diretório com dezenas de projetos.

**Ficheiro de configuração YAML.** Define os teus caminhos de monitorização em `~/.config/gitdash/config.yaml` para não teres de passar `-path` todas as vezes. Configura múltiplos diretórios, profundidade máxima de pesquisa, e se deve mostrar pastas ocultas.

## Os Bug Reports

Nada de grave neste. A TUI montou-se de forma limpa. A única coisa que notei foi que em árvores de diretórios muito grandes, o scan inicial demora um momento, mas mostra uma mensagem "Scanning for repositories..." para saberes que está a trabalhar.

## Os Números

- **11 ficheiros fonte Go** distribuídos por 5 packages (main, config, git, scanner, ui)
- **~1.900 linhas de Go**
- **1 ficheiro de teste** para o scanner
- **Builds cross-platform** para macOS e Linux (amd64/arm64)
- **Script de instalação** com deteção automática de SO e arquitetura
- **Tempo total hands-on:** talvez 20 minutos a testar e a afinar o prompt

## Experimenta

{{< github repo="nunocoracao/Vibe30-day07-gitdash" showThumbnail=true >}}

Instala com:

```bash
go install github.com/nunocoracao/Vibe30-day07-gitdash@latest
```

Ou o one-liner:

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day07-gitdash/main/scripts/install.sh | bash
```

Depois basta executar `gitdash` em qualquer diretório que contenha repos git.

## Veredicto do Dia 7

Vou ser honesto: este não é um projeto criativo. Um painel de estado git não é uma ideia nova. O Lazygit e o tig já existem e fazem-no melhor. E é a mesma stack Go + Bubble Tea que usei ontem, por isso não há história de "tecnologia desconhecida" para contar.

Mas a construção revelou algo que vale a pena notar. A IA não precisou de perceber os internos do git. Simplesmente encapsulou o CLI. Cada pedaço de dados neste painel vem de executar um comando git e fazer parse do texto de saída. `git status --porcelain` para ficheiros sujos. `git rev-list --count` para ahead/behind. `git stash list` para contagens de stash. Tratou o git como uma caixa negra com uma interface de texto, que é exatamente como a maioria dos programadores o trata também.

É esse o padrão interessante de hoje. Podes apontar a IA a qualquer ferramenta CLI com output estruturado e obter uma UI wrapper construída à volta dela. Git, Docker, kubectl, o que quiseres. A IA não precisa de perceber os internos do sistema mais do que tu. Só precisa de saber que comandos executar e como fazer parse do que volta.

O projeto em si está bem. Funciona, o agrupamento por estado é útil de relance, a vista de detalhe compacta muita informação. Mas não vou fingir que isto é algo que vou usar diariamente quando posso simplesmente executar `git status` em cada repo. O valor aqui foi ver o padrão, não a ferramenta específica.

---

*Este é o dia 7 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
