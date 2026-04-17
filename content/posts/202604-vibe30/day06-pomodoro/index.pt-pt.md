---
title: "30 Days of Vibe Coding - Day 6 - Pomodoro"
description: "Um temporizador Pomodoro para terminal construído em Go com Bubble Tea, com arte ASCII, registo de sessões e estatísticas semanais."
summary: "Um temporizador Pomodoro para terminal construído em Go com Bubble Tea, com arte ASCII, registo de sessões e estatísticas semanais."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-06", "go", "tui", "bubbletea"]
series: ["30 Days of Vibe Coding"]
series_order: 6
seriesOpened: false
date: 2026-04-11
draft: false
#type: "hidden"
---

Dia 6. Chegou a hora de abandonar o browser — e de sair completamente da minha zona de conforto.

Todos os projetos até agora foram em TypeScript, React, Canvas. Linguagens e frameworks que conheço. Hoje quis testar algo diferente: o que acontece quando peço à IA para construir com ferramentas que nunca toquei?

## O Prompt

> "Cria um temporizador Pomodoro para terminal em Go usando Bubble Tea com contagem decrescente ASCII grande, registo de sessões com SQLite, estatísticas diárias e semanais, etiquetas de tarefas e durações personalizáveis."

Nunca escrevi Go. Nunca usei Bubble Tea. Nunca toquei em Lip Gloss. Não conseguia dizer a diferença entre uma `goroutine` e um `channel` sem ir pesquisar. Toda a stack tecnológica neste prompt é-me completamente estranha.

Era esse o objetivo. Cinco dias a construir jogos web em território familiar fizeram-me questionar: a IA só é boa com coisas que eu já conheço? E se lhe atirasse uma stack que nem consigo rever devidamente?

## Como Foi Construído

O [Watchfire](https://watchfire.io) recebeu o prompt e desmontou-o da mesma forma que fez com os projetos em TypeScript. O facto de ser Go em vez de TypeScript não pareceu importar. Escolheu Bubble Tea para o framework TUI, Lip Gloss para o estilo, SQLite para persistência. Sem servidor web, sem wrapper Electron, sem browser. Apenas um binário que podes executar a partir de qualquer lado.

O projeto chegou como um módulo Go limpo com 11 ficheiros fonte distribuídos por 6 packages: `main`, `ascii`, `config`, `db`, `stats`, `timer` e `ui`. Cada package tem uma responsabilidade clara. O package timer gere a máquina de estados (inativo, em execução, pausado, terminado). O package UI renderiza tudo com Bubble Tea. O package da base de dados gere a persistência em SQLite. O package stats agrega os dados das sessões para vistas diárias e semanais.

Veio inclusive com um script de instalação, um Makefile e flags CLI adequadas usando um carregador de configuração personalizado que combina um ficheiro de configuração YAML com argumentos da linha de comandos. Eu não saberia como configurar nada disto em Go por conta própria.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Temporizador Pomodoro pronto para iniciar](images/screenshot-01.png)

**Números ASCII grandes.** O ecrã de contagem decrescente usa dígitos personalizados em caracteres de bloco com 5 linhas de altura. São legíveis do outro lado da sala, que é precisamente o ponto de um temporizador Pomodoro. Deves conseguir olhar e saber imediatamente quanto tempo te resta.

![Temporizador em execução com barra de progresso](images/screenshot-02.png)

**Sessões com código de cores.** As sessões de trabalho brilham a vermelho. As pausas curtas ficam verdes. As pausas longas têm uma tonalidade diferente. Toda a interface muda de cor consoante a fase em que estás, para saberes de relance se deves estar a trabalhar ou a descansar.

![Pausa curta pronta](images/screenshot-03.png)

**Regista tudo.** Cada sessão é guardada numa base de dados SQLite local em `~/.pomo/sessions.db`. A barra de cabeçalho mostra as tuas estatísticas diárias em tempo real: quantos pomodoros concluíste e o tempo total de foco. Executa `pomo stats` e obtens um resumo semanal com gráficos de barras ASCII.

![Pausa curta em execução](images/screenshot-04.png)

**O ciclo de sessões funciona.** Quatro sessões de trabalho, depois uma pausa longa. O indicador de progresso no canto superior direito mostra onde estás no ciclo (por exemplo, `[WORK 1/4]`). Após a quarta sessão de trabalho, muda automaticamente para uma pausa longa de 15 minutos em vez da pausa curta habitual de 5 minutos.

**Etiquetas de tarefas.** Executa `pomo -t "Escrever post do blog"` e o nome da tarefa aparece no cabeçalho. Também é guardado na base de dados, para que quando consultares as tuas estatísticas mais tarde, possas ver em que estavas realmente a trabalhar.

**Campainha do terminal.** Quando uma sessão termina, toca a campainha do terminal. Simples, eficaz, e funciona com qualquer sistema de notificações que o teu terminal suporte.

## Os Relatórios de Erros

Nenhum desta vez. O temporizador funcionou corretamente na primeira compilação. Iniciar, pausar, retomar, avançar, reiniciar, transições de sessão — tudo funcionou como esperado. Os controlos de teclado responderam bem e a máquina de estados geriu os casos extremos de forma limpa.

## Os Números

- **11 ficheiros fonte Go** distribuídos por 6 packages
- **1 ficheiro de testes** com testes da máquina de estados do temporizador
- **4 tipos de sessão:** trabalho, pausa curta, pausa longa e as transições entre elas
- **Persistência SQLite** para o histórico de sessões
- **Configuração YAML + CLI** com valores predefinidos sensatos (ciclos de 25/5/15 minutos)
- **Tempo total de envolvimento:** cerca de 20 minutos a testar e a afinar o prompt

## Experimenta

{{< github repo="nunocoracao/Vibe30-day06-pomodoro" showThumbnail=true >}}

Instala com:

```bash
go install github.com/nunocoracao/Vibe30-day06-pomodoro@latest
```

Ou usa o script de instalação:

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day06-pomodoro/main/install.sh | bash
```

Depois basta executar `pomo` no teu terminal.

## Veredicto do Dia 6

Este projeto respondeu a uma questão que carregava desde o dia 1: a programação assistida por IA só funciona quando já conheces a stack?

Não. Não funciona assim. Não sei escrever Go. Não consigo construir um TUI com Bubble Tea. Não saberia como estruturar um módulo Go com seis packages, configurar bindings SQLite, ou escrever um Makefile para compilação cruzada. Mas a ferramenta existe, funciona, e é algo que uso realmente todos os dias. Um único binário, sem dependências em tempo de execução, funciona em qualquer terminal.

O que me surpreendeu mais foi a arquitetura. Seis packages com fronteiras claras. Uma máquina de estados adequada para o temporizador. Tratamento gracioso da base de dados onde, se o SQLite falhar, o temporizador continua a funcionar — apenas não tens estatísticas. É o tipo de decisão que um programador sénior tomaria, e veio de um prompt escrito por alguém que não conhece a linguagem.

Isto muda o que "não convencional" significa. Se consigo lançar uma aplicação Go TUI polida sem saber Go, então a barreira para experimentar stacks tecnológicas desconhecidas simplesmente desapareceu. O custo da experimentação caiu para perto de zero.

Seis dias depois e este é o primeiro projeto que mantive em execução depois de escrever o post do blog.

---

*Este é o dia 6 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Segue o desafio enquanto lanço 30 projetos em 30 dias com programação assistida por IA.*
