---
title: "30 Dias de Vibe Coding - Dia 27 - Terminal"
description: "Um emulador de terminal nativo construído com Tauri 2 e Rust, com tabs, painéis divididos, temas configuráveis e funcionalidades inteligentes."
summary: "Um emulador de terminal nativo construído com Tauri 2 e Rust, com tabs, painéis divididos, temas configuráveis e funcionalidades inteligentes."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-27", "rust", "tauri", "terminal"]
series: ["30 Days of Vibe Coding"]
series_order: 27
seriesOpened: false
date: 2026-05-02
draft: false
#type: "hidden"
---

Dia 27. Faltam quatro dias. Altura de deixar de jogar pelo seguro.

A reta final deste desafio é onde quero avançar para coisas que provavelmente não deviam funcionar num único dia. Um emulador de terminal é uma dessas coisas. Não um brinquedo web que finge ser um terminal. Uma aplicação nativa de desktop a sério que lança sessões de shell reais, renderiza a 60fps, e lida com tudo desde o vim ao htop.

## O Prompt

> "Construir um emulador de terminal usando Tauri 2 e Rust"

Este foi o pedido principal. Tudo o resto veio da iteração.

{{< alert icon="fire">}}
Faz download a partir da [última release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest)
{{< /alert >}}

## Como Foi Construído

Este foi dos grandes. O [Watchfire](https://watchfire.io) dividiu o trabalho em 19 tarefas, e precisou de cada uma delas. Construir um emulador de terminal não é trivial. Há gestão de PTY, integração com a shell, tratamento de input, performance de renderização, e mais uma dúzia de coisas em que nunca teria pensado.

A lista de tarefas foi mais ou menos assim:

1. Criar a estrutura de um projeto Tauri 2 + Vite com suporte básico a PTY
2. Múltiplas tabs com abrir, fechar e renomear
3. Painéis divididos, horizontal e verticalmente
4. Painel de definições com temas, fontes e configuração de shell
5. Polish da UI, scrollback e correções de shell
6. GitHub Actions para releases automatizadas
7. Sugestões de comandos por IA inline
8. Polish visual para transparência, blur e chrome da janela
9. Links clicáveis e deteção inteligente no output do terminal
10. Perfis de shell e ações rápidas
11. Avisos de comandos perigosos com diálogos de confirmação
12. Notificações para comandos de longa duração
13. Pesquisa fuzzy no histórico com um overlay rico no Ctrl+R
14. Sugestões fantasma inline a partir de ficheiros de histórico
15. Deteção inteligente de erros com ações de correção rápida
16. Tradução de linguagem natural para comandos
17. Explicação de comandos e resumo de output por IA
18. Agrupamento de output baseado em blocos com secções colapsáveis
19. Painel de definições de funcionalidades inteligentes e testes de integração

Depois vieram as correções de CI/CD. Fazer o Tauri compilar e assinar em macOS, Linux e Windows através do GitHub Actions é uma aventura por si só. Scripts de instalação para as três plataformas também.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Terminal a correr com múltiplas funcionalidades visíveis](images/screenshot-01.png)

**É um terminal a sério.** Isto não é uma simulação. Usa o crate portable-pty do Rust para lançar sessões de shell reais. Bash, zsh, fish, o que tiveres configurado. Suporte completo a PTY significa que tudo funciona: vim, htop, prompts interativos, tudo.

![A correr htop com múltiplas tabs](images/screenshot-11.png)

**xterm.js com aceleração WebGL.** A renderização é rápida. Tipo, notavelmente rápida. O scrollback vai até 10.000 linhas e não engasga. O renderer WebGL faz uma diferença real comparado com a abordagem standard de canvas.

**Tabs e painéis divididos.** Cmd+T para uma nova tab, Cmd+D para um split vertical, Cmd+Shift+D para um split horizontal. Podes renomear tabs. A gestão de painéis funciona exatamente como esperarias de um terminal moderno.

![Painéis divididos com Claude Code a correr](images/screenshot-12.png)

**Tem um tour de funcionalidades inteligentes.** Quando abres a app pela primeira vez, ela guia-te pelas funcionalidades inteligentes com um tour guiado.

![Tour de funcionalidades inteligentes](images/screenshot-02.png)

Essas funcionalidades inteligentes incluem sugestões fantasma do teu histórico de comandos, pesquisa fuzzy no histórico com Ctrl+R, avisos de comandos perigosos para coisas como `rm -rf` ou `git push --force`, e tradução de linguagem natural para comandos.

![Sugestões fantasma](images/screenshot-03.png)

![Pesquisa fuzzy no histórico](images/screenshot-04.png)

![Avisos de comandos perigosos](images/screenshot-05.png)

![Linguagem natural e funcionalidades de IA](images/screenshot-06.png)

**Um painel de definições completo.** Família de fonte, tamanho de fonte, estilo de cursor, temas de cores. Vem com Dracula, Solarized, Monokai e mais. Podes configurar blur de fundo, transparência e argumentos de shell.

![Painel de definições](images/screenshot-14.png)

**Pesquisa de comandos no scrollback.** Ctrl+F abre um overlay de pesquisa que te permite pesquisar no histórico do terminal com correspondência fuzzy.

![Overlay de pesquisa](images/screenshot-13.png)

**Agrupamento de output baseado em blocos.** Outputs longos de comandos são agrupados em blocos colapsáveis. Há um botão "Resumir output" para quando um comando cospe 2.000 linhas e só queres o essencial.

![Resumo de output](images/screenshot-07.png)

**Corre o pico.** Corre o vim. Corre tudo o que um terminal deve correr, porque é um terminal.

![Editor de texto Pico a correr dentro do Terminal](images/screenshot-08.png)

**Até corre o assistente de IA do Docker.** Aplicações TUI interativas completas funcionam sem problemas.

![Assistente de IA do Docker a correr dentro do Terminal](images/screenshot-09.png)

![Assistente de IA do Docker vista expandida](images/screenshot-10.png)

**Corre o Claude Code lá dentro.** Usei o terminal para correr o Claude Code para construir mais funcionalidades para o terminal. Aquilo pareceu um tipo muito específico de inception.

![Claude Code a correr dentro do Terminal com a lista de tarefas do Watchfire visível](images/screenshot-12.png)

## Instala-o

Esta é uma app nativa, não um website. Nada de deployment no Vercel aqui. Podes ir buscar a última release à página de releases do GitHub, ou usar os scripts de instalação:

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.sh | bash
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.ps1 | iex
```

Ou compila a partir do código fonte se quiseres:

```bash
git clone https://github.com/nunocoracao/Vibe30-day27-terminal.git
cd Vibe30-day27-terminal
npm install
npm run tauri dev
```

Requer Rust 1.77.2+ e Node.js 20+.

{{< github repo="nunocoracao/Vibe30-day27-terminal" showThumbnail=true >}}

## Os Números

- **19 tarefas no Watchfire** desde a estrutura inicial até à integração de funcionalidades inteligentes
- **Tauri 2 + backend em Rust** com portable-pty para sessões de shell reais
- **xterm.js com WebGL** para renderização rápida
- **6+ temas de cores** incluindo Dracula, Solarized e Monokai
- **Pipeline de CI/CD** com GitHub Actions a compilar para macOS, Linux e Windows
- **Scripts de instalação** para as três plataformas

## Veredito do Dia 27

Um emulador de terminal toca em tantas camadas. Gestão de PTY em Rust. IPC entre o backend em Rust e o frontend em JavaScript através do Tauri. Renderização WebGL para performance. Builds multiplataforma e assinatura de código através de CI/CD. Scripts de instalação que detetam o teu SO e arquitetura.

E depois, por cima de tudo isso, adicionou funcionalidades inteligentes. Sugestões fantasma, pesquisa fuzzy, avisos de comandos perigosos, integração com IA. Isto não são truques. Achei os avisos de comandos perigosos genuinamente úteis quando acidentalmente escrevi algo destrutivo durante os testes.

O facto de isto funcionar de todo é impressionante. O facto de funcionar bem o suficiente para que eu o tenha usado para correr o Claude Code para construir mais funcionalidades dele próprio é outra coisa completamente diferente. Não vou substituir o iTerm por ele amanhã, mas a distância entre "terminal vibe coded" e "terminal de produção" é mais pequena do que eu esperava.

Dia 27 de 30. Faltam mais três.

---

*Este é o dia 27 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
