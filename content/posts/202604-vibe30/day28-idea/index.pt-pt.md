---
title: "30 Days of Vibe Coding - Dia 28 - ideA"
description: "Um editor de codigo nativo para desktop construido com Wails, Go, React e Monaco Editor."
summary: "Um editor de codigo nativo para desktop construido com Wails, Go, React e Monaco Editor."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-28", "go", "wails", "react", "monaco", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 28
seriesOpened: false
date: 2026-05-03
draft: false
#type: "hidden"
---

Dia 28. Faltam tres dias. Ontem foi um emulador de terminal. Hoje? Um editor de codigo.

Nao uma app web. Nao algo a correr num separador do browser. Uma aplicacao nativa de desktop que instalas na tua maquina. O tipo de coisa que demora anos a equipas inteiras para construir.

## O Prompt

{{< alert icon="fire">}}
Faz download a partir da [ultima release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest)
{{< /alert >}}

> "Construir um editor de codigo nativo para desktop usando Wails v2 com backend em Go e frontend em React com Monaco Editor. Barra lateral com arvore de ficheiros, separadores, syntax highlighting. Builds multi-plataforma para macOS, Linux e Windows."

## Como Foi Construido

Este foi um bicho. O [Watchfire](https://watchfire.io) dividiu o trabalho em 43 tarefas, o que e de longe o maior numero de tarefas de qualquer projeto neste desafio. E muitas dessas foram correcoes de CI, porque construir apps nativas de desktop para tres plataformas acaba por ser... nao propriamente simples.

A stack e Wails v2 para o wrapper nativo, Go para as operacoes de sistema de ficheiros no backend, React para a UI, e Monaco Editor (o mesmo motor de edicao que alimenta o VS Code) para a edicao de codigo propriamente dita. O backend em Go trata de todo o I/O de ficheiros, leitura de diretorias, abertura de ficheiros, gravacao de alteracoes, e expoe tudo isso como funcoes que o frontend React pode chamar atraves dos bindings do Wails.

O pipeline de CI foi onde a verdadeira dor apareceu. Dependencias do WebKit no Linux, build tags que tinham de estar certinhas, geracao de bindings do Wails, empacotamento multi-plataforma. Perdi a conta de quantos commits de "fix CI" houve. O git log esta cheio deles. Mas essa e a realidade de lancar apps nativas. O codigo pode funcionar perfeitamente na tua maquina e mesmo assim falhar espetacularmente num runner do GitHub Actions.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Ecra de boas-vindas](images/screenshot-01.png)

**Um ecra de boas-vindas a serio.** Acoes rapidas para abrir pastas e ficheiros, lista de projetos recentes, e uma referencia de atalhos de teclado. Parece mesmo uma pagina de boas-vindas de um IDE.

![Arvore de ficheiros com projeto aberto](images/screenshot-02.png)

**Arvore de ficheiros que funciona.** Abres uma pasta e tens uma arvore de diretoria completa na barra lateral com expandir/colapsar, icones de ficheiros, e tudo o resto. Ha um minimap no fundo a mostrar uma vista geral da estrutura de ficheiros.

![Edicao de codigo com syntax highlighting](images/screenshot-03.png)

**Monaco Editor a fazer das suas.** Syntax highlighting completo, numeros de linha, o minimap do lado direito. E a mesma experiencia de edicao do VS Code porque e literalmente o mesmo componente de editor. JavaScript, Go, TypeScript, JSON, o que abrires tem highlighting adequado.

![Paleta de comandos](images/screenshot-04.png)

**Uma paleta de comandos.** Aquele overlay de pesquisa fuzzy que todos os editores modernos tem. Procura comandos, salta para ficheiros. Funciona.

![Terminal integrado](images/screenshot-05.png)

**Um terminal integrado.** Ha um painel de terminal no fundo do editor. Corre os teus builds, verifica o git status, o que precisares sem sair da app.

![Pesquisa de ficheiros](images/screenshot-07.png)

**Pesquisa de ficheiros com fuzzy matching.** Overlay de abertura rapida para saltar entre ficheiros no teu projeto. Escreves alguns caracteres e filtra.

## A Guerra do CI

Isto merece a sua propria seccao porque dominou a construcao. Conseguir que o Wails compilasse e empacotasse corretamente no GitHub Actions para macOS, Linux e Windows simultaneamente foi uma batalha de multiplos commits. Alguns destaques:

- Dependencias do WebKit no Linux precisavam de pacotes especificos (`libgtk-3-dev`, `libwebkit2gtk-4.0-dev`)
- As build tags tinham de estar definidas corretamente para cada plataforma
- A geracao de bindings do Wails tinha de acontecer antes do build
- O workflow de release precisava de produzir bundles `.app` para macOS, tarballs para Linux, e `.exe` para Windows
- Multiplas rondas de corrigir, testar, corrigir outra vez

O resultado final e um workflow de GitHub Actions que faz build e release para as tres plataformas automaticamente quando fazes push de uma tag. Funciona. So demorou um bocado a chegar la.

## Instala

Esta e uma app nativa, por isso nada de link do Vercel desta vez. Instalas na tua maquina.

**Instalacao rapida (macOS e Linux):**

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day28-idea/main/install.sh | bash
```

Ou vai buscar um binario a [pagina de releases](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest):

| Plataforma | Arquitetura | Download |
|----------|-------------|----------|
| macOS | Intel (x86_64) | [VibEdit-macos-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-amd64.zip) |
| macOS | Apple Silicon (arm64) | [VibEdit-macos-arm64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-arm64.zip) |
| Linux | x86_64 | [VibEdit-linux-amd64.tar.gz](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-linux-amd64.tar.gz) |
| Windows | x86_64 | [VibEdit-windows-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-windows-amd64.zip) |

**Compilar a partir do codigo fonte** se quiseres (requer Go 1.23+, Node.js 20+, Wails CLI v2):

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
git clone https://github.com/nunocoracao/Vibe30-day28-idea.git
cd Vibe30-day28-idea
cd frontend && npm install && cd ..
wails build
```

## Experimenta

{{< github repo="nunocoracao/Vibe30-day28-idea" showThumbnail=true >}}

## Os Numeros

- **43 tarefas no Watchfire** desde o setup ate as correcoes finais de CI
- **3 plataformas alvo** (macOS, Linux, Windows)
- **Wails v2 + Go** backend com React + Monaco Editor frontend
- **GitHub Actions** workflow de release para builds multi-plataforma automatizados

## Veredito do Dia 28

O editor em si ficou pronto razoavelmente rapido. O Monaco Editor faz grande parte do trabalho pesado, e o Wails torna a ponte entre Go e React surpreendentemente limpa. A parte dificil foi tudo a volta do codigo: conseguir que o CI fizesse build de apps nativas para tres sistemas operativos, lidar com dependencias especificas de cada plataforma, empacotar corretamente para cada alvo.

Isto vai substituir o VS Code? Obviamente que nao. Mas e um editor de codigo nativo funcional com arvore de ficheiros, separadores, syntax highlighting, paleta de comandos, terminal integrado, e releases multi-plataforma. Construido num dia. O facto de o mesmo Monaco Editor que alimenta o VS Code estar disponivel como componente React significa que tens uma experiencia de edicao a serio de graca. O resto e canalizacao, e isso e exatamente o tipo de trabalho em que a IA e boa.

43 tarefas e muito. A maioria dos dias neste desafio ficou entre 15-25. Mas apps nativas de desktop com pipelines de CI sao outro bicho. Cada plataforma tem as suas manias, cada sistema de build tem as suas opinioes, e nenhum concorda com o outro. Faltam mais dois.

---

*Este e o dia 28 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha a serie enquanto lanço 30 projetos em 30 dias usando programacao assistida por IA.*
