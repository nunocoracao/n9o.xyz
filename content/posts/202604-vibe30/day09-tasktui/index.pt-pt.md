---
title: "30 Dias de Vibe Coding - Dia 9 - TaskTUI"
description: "Um quadro kanban pessoal para o terminal com navegação estilo vim e um servidor MCP para integração com o Claude Code, construído com Go e Bubble Tea."
summary: "Um quadro kanban pessoal para o terminal com navegação estilo vim e um servidor MCP para integração com o Claude Code, construído com Go e Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-09", "go", "tui", "terminal", "kanban", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 9
seriesOpened: false
date: 2026-04-14
draft: false
#type: "hidden"
---

Dia 9. Queria um quadro de tarefas que vivesse no terminal e que o Claude também conseguisse ler e escrever.

## O Prompt

> "Constrói um quadro kanban para o terminal em Go com um servidor MCP para o Claude poder gerir tarefas."

Esta foi a semente. O [Watchfire](https://watchfire.io) expandiu-a em 13 tarefas que cobriam todo o âmbito: quadro com três colunas e navegação vim, UI com Bubble Tea, persistência em JSON, um file watcher para atualização automática, um modo de servidor MCP para integração com IA, comandos CLI para gestão rápida de tarefas e GoReleaser para distribuição.

## Como Foi Construído

As 13 tarefas levaram-no do zero até um release completo e empacotado. As primeiras nove tarefas construíram o núcleo do quadro kanban: o modelo do quadro, renderização de cartões, arrastar e largar entre colunas e todo o estilo com Lip Gloss para ficar bem no terminal. A tarefa 9 adicionou o modo de servidor MCP. A tarefa 10 trouxe a monitorização de ficheiros em tempo real. As três últimas trataram dos comandos CLI, da configuração do GoReleaser para binários multiplataforma e do README.

A arquitetura divide-se de forma limpa em pacotes: `task` para o modelo de domínio, `storage` para persistência JSON, `watcher` para monitorização do sistema de ficheiros, `mcp` para o servidor MCP e `cli` para todos os comandos Cobra. O ponto de entrada encaminha entre três modos dependendo de como é invocado: modo TUI (por defeito), modo CLI (com subcomandos como `add` ou `list`) e modo servidor MCP (com `tasktui mcp`).

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Quadro kanban TaskTUI com três colunas](images/screenshot-01.png)

**O quadro kanban fica ótimo no terminal.** Três colunas com cabeçalhos codificados por cor: vermelho/rosa para Todo, laranja/amarelo para Doing, verde para Done. Cada cartão mostra o título e a descrição da tarefa. O cartão selecionado recebe um contorno destacado. Navegas com `h/l` para mudar de coluna e `j/k` para te moveres entre tarefas dentro de uma coluna.

![Adicionar uma nova tarefa com o diálogo popup](images/screenshot-02.png)

**Criação de tarefas inline.** Carrega em `n` e aparece um modal onde escreves o título e a descrição da tarefa. Cai diretamente na coluna Todo. Carrega em `e` para editar uma tarefa existente da mesma forma.

![Criar uma nova tarefa com campos de título e descrição](images/screenshot-03.png)

**O diálogo de input tem navegação de campos adequada.** Tab entre título e descrição, Enter para confirmar. Não te atrapalha e funciona exatamente como esperas.

![Quadro com tarefas movidas entre colunas](images/screenshot-04.png)

**Mover tarefas entre colunas é instantâneo.** Carrega em Enter ou Espaço para avançar uma tarefa (Todo para Doing para Done), ou Backspace para a mover para trás. Também podes usar Shift+H e Shift+L para mover tarefas explicitamente para a esquerda e direita. O quadro tem suporte completo de desfazer/refazer.

**Os comandos CLI são práticos para capturas rápidas.** `tasktui add "Corrigir aquele bug"` coloca uma tarefa no Todo sem abrir a TUI. `tasktui list --state doing` mostra o que está em progresso. `tasktui done 3` marca a tarefa 3 como concluída. Tudo a partir da shell.

**O servidor MCP é a parte interessante.** Executa `tasktui mcp` e arranca um servidor Model Context Protocol que expõe quatro ferramentas: `list_tasks`, `add_task`, `move_task` e `delete_task`. Adiciona-o à tua configuração `~/.claude/mcp.json` e o Claude Code consegue gerir as tuas tarefas diretamente. O file watcher significa que, se tiveres a TUI aberta ao mesmo tempo, ela atualiza automaticamente sempre que o Claude faz uma alteração. Podes literalmente ver tarefas a aparecer no teu quadro à medida que o Claude as adiciona.

## Os Bug Reports

O file watcher ocasionalmente dispara duas vezes ao guardar, o que causa um breve tremor visual enquanto o quadro recarrega duas vezes em rápida sucessão. Não é nada de grave, mas nota-se. O modo de servidor MCP em si funcionou bem à primeira, o que honestamente me surpreendeu dado o quão caprichosas as implementações de protocolos podem ser.

## Os Números

- **13 tarefas Watchfire** do início até ao release empacotado
- **6 comandos CLI** (root, tui, add, list, done, mcp)
- **4 ferramentas MCP** (list_tasks, add_task, move_task, delete_task)
- **Stack Go + Bubble Tea + Lip Gloss + Cobra**
- **GoReleaser** para builds de binários multiplataforma
- **Tempo total hands-on:** talvez 25 minutos de testes e iteração de prompts

## Experimenta

{{< github repo="nunocoracao/Vibe30-day09-tasktui" showThumbnail=true >}}

Instala com:

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day09-tasktui/main/install.sh | sh
```

Ou compila a partir do código-fonte:

```bash
git clone https://github.com/nunocoracao/Vibe30-day09-tasktui.git
cd Vibe30-day09-tasktui
go build -o tasktui ./cmd/tasktui
```

Para configurar a integração MCP com o Claude Code, adiciona isto ao `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "tasktui": {
      "command": "tasktui",
      "args": ["mcp"]
    }
  }
}
```

## Veredito do Dia 9

Isto reforça a aposta na stack Go + Bubble Tea mas adiciona algo novo: integração com IA através de MCP.

O quadro kanban em si é sólido. Faz exatamente o que um gestor de tarefas pessoal deve fazer e nada mais. Mas o modo de servidor MCP é o que torna este projeto interessante. Ter o Claude Code a gerir o meu quadro de tarefas enquanto estou a trabalhar, a adicionar tarefas que descobre em comentários no código, a marcar coisas como concluídas depois de as corrigir, é um workflow que não sabia que queria.

O file watcher liga tudo. A TUI fica aberta num painel do terminal, o Claude trabalha noutro, e o quadro atualiza-se em tempo real. Parece programação a pares com um quadro de tarefas partilhado entre ti e a IA.

Nove dias e os projetos começam a ligar-se entre si. GitDash para awareness de repositórios, TaskTUI para gestão de tarefas, ambos a viver no terminal onde eu realmente trabalho. As ferramentas estão a começar a comunicar umas com as outras.

---

*Este é o dia 9 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha à medida que lanço 30 projetos em 30 dias usando programação assistida por IA.*
