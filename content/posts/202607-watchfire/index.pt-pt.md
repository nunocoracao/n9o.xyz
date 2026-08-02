---
title: "Watchfire: uma sala de controlo para agentes de programação com IA"
summary: "Uma sala de controlo open source para correr agentes de programação com IA em vários projetos - isola o trabalho, gere tarefas e worktrees, e avisa quando é mesmo preciso a tua atenção. Seis meses, nove versões maiores, e um problema meta que não para de piorar: o Watchfire já constrói o Watchfire e, desde a v9, o teu agente também o pode conduzir."
description: "Uma sala de controlo open source para correr agentes de programação com IA em vários projetos - isola o trabalho, gere tarefas e worktrees, e avisa quando é mesmo preciso a tua atenção. Seis meses, nove versões maiores, e um problema meta que não para de piorar: o Watchfire já constrói o Watchfire e, desde a v9, o teu agente também o pode conduzir."
categories: ["Tecnologia", "IA", "Makers"]
tags: ["IA", "Claude Code", "vibe coding", "projetos paralelos", "watchfire"]
date: 2026-08-02
draft: false
---

Os agentes de programação com IA deixaram de ser uma demonstração há cerca de um ano. Claude Code, Codex, opencode, Gemini CLI, Copilot CLI, Cursor Agent - todos escrevem código a sério agora. O estrangulamento mudou de sítio. Já não é "será que o agente consegue construir isto". É "será que consigo acompanhar o que cinco agentes andam a fazer em seis repositórios sem dar em doido".

Comecei a bater nessa parede todos os dias. Por isso construí uma ferramenta. Chamei-lhe Watchfire.

**O Watchfire é uma sala de controlo open source para correr agentes de programação com IA em vários projetos: isola o trabalho, gere tarefas e worktrees de git, e avisa quando é mesmo preciso a tua atenção.** É para um programador sozinho ou uma equipa pequena que já tenha várias tarefas de agente a correr durante muito tempo. Não substitui o teu IDE, e é exagero para uma sessão pontual de Claude Code.

Seis meses depois, tem uma propriedade incómoda: **o Watchfire constrói o Watchfire**. Todas as funcionalidades abaixo foram especificadas, executadas e integradas por agentes que o próprio Watchfire orquestrava - incluindo a versão que passou a deixar o *teu* agente fazer o mesmo. Esse ciclo é a razão de ser deste artigo, e vou mostrar as provas.

Mas a coisa mais útil que aprendi em seis meses não tem nada a ver com gerar código. Tem a ver com os projetos em que as tarefas dizem ao agente para *não* decidir. Essa é a segunda metade deste artigo, e é a metade que eu leria primeiro.

É open source, Apache 2.0, e corre em macOS, Linux e Windows:

{{< github repo="watchfire-io/watchfire" >}}

{{< figure src="/posts/202607-watchfire/img/tour/dashboard.webp" alt="O dashboard atual do Watchfire" caption="O dashboard do Watchfire hoje - pulso de a-trabalhar/inativo/concluído-hoje, um aviso de atenção que fica calado quando está tudo bem, e insights da frota na última semana: 69 tarefas, 202 commits, +64.979 linhas líquidas. Este último número é churn, não uma alegação de produtividade." >}}

## O problema que forçou a ferramenta

Durante umas semanas no início do ano andei a saltar entre cinco projetos e três janelas de terminal. Cada projeto tinha a sua sessão de Claude Code. Cada sessão tinha os seus pedidos de permissão, os seus soluços de rate limit, a sua tarefa a meio que eu esquecia assim que mudava de janela. Os agentes estavam a fazer um ótimo trabalho. A peça lenta era eu.

Algumas coisas em particular:

- **Andar a fazer de ama aos prompts.** Cada comando de shell precisava de aprovação. Cada escrita de ficheiro precisava de aprovação. Vinha de um café e encontrava um agente parado no segundo prompt de uma tarefa de 50 passos.
- **Sem vista agregada.** O que está mesmo a correr? O que está bloqueado? O que fez o agente #3 na última hora enquanto eu olhava para o agente #1? Nada me dizia.
- **Falhas silenciosas.** Os agentes morriam num conflito de merge, num rate limit, num YAML malformado, e simplesmente... paravam. Eu dava por isso uma hora depois.
- **Contexto perdido.** Mudar de projeto significava reexplicar convenções, voltar a colar o CLAUDE.md, recarregar o modelo mental de onde estava o quê.

O Watchfire começou como uma fuga de domingo à tarde a essa dor.

## O que o Watchfire é hoje

Quatro coisas que faz mesmo por ti:

- **Deixas de andar a aprovar coisas.** O trabalho é registado como tarefas com um prompt e critérios de aceitação, e depois executado sem supervisão. Voltas e encontras um ramo integrado, não um prompt em pausa.
- **Vês a frota toda de uma vez.** Um dashboard sobre todos os projetos: o que está a correr, o que está bloqueado, o que terminou hoje, quanto custou. O aviso de atenção fica calado a não ser que algo precise mesmo de ti.
- **Nada colide.** Cada tarefa corre na sua própria worktree de git por trás de uma sandbox do sistema operativo, por isso agentes em paralelo em vários projetos não conseguem corromper o trabalho uns dos outros e têm uma capacidade fortemente reduzida de chegar às tuas credenciais.
- **O trabalho deixa rasto.** Métricas por tarefa - duração, custo, commits, ficheiros, linhas, como correu o merge - agregam-se em Insights por projeto e da frota inteira, além de exportações CSV/Markdown e um resumo semanal.

Suporta atualmente **seis backends de agente** através de uma única interface `Backend` - Claude Code, OpenAI Codex, opencode, Gemini CLI, GitHub Copilot CLI e Cursor Agent - cada um na sua própria pasta de configuração isolada (`CODEX_HOME`, `OPENCODE_CONFIG_DIR`, `COPILOT_HOME`) para que credenciais e prompts não se misturem entre sessões. Podes trocar de agente tarefa a tarefa.

### Duas camadas de raio de ação

Esta é a parte que eu quereria saber se tivesse sido outra pessoa a construir isto, porque "vai-te embora e deixa correr" só é razoável se souberes ao que "isto" consegue chegar.

Cada tarefa corre atrás de **duas camadas independentes de isolamento**. A primeira é uma worktree de git: cada tarefa recebe o seu próprio checkout `watchfire/<task_number>`, por isso dois agentes no mesmo repositório não veem as edições meio feitas um do outro, e nada chega ao teu ramo até a execução ter sucesso e integrar. A segunda é uma sandbox ao nível do sistema operativo à volta do processo do agente - **Seatbelt** no macOS, **Landlock** no Linux 5.13+, com um fallback de mount namespace via **bubblewrap** em kernels mais antigos.

A sandbox é uma allowlist de sistema de ficheiros com opiniões. Escrita: a pasta do projeto, temporários, e as caches de que as builds reais precisam (`~/.npm`, `~/.cargo`, `~/go`, `~/.rustup`). Leitura: compiladores, bibliotecas de sistema, configuração de ferramentas. Bloqueado à cabeça: `~/.ssh`, `~/.aws`, `~/.gnupg`, `.netrc`, `.npmrc`, ficheiros `.env`, `.git/hooks`, e no macOS as tuas pastas pessoais. Um agente que procure chaves de deploy nesses sítios protegidos não encontra lá nada.

Duas ressalvas honestas, ambas afirmadas com clareza (e não enterradas) no [artigo sobre sandboxing](https://watchfire.io/blog/2026-05-19-how-watchfire-sandboxes-every-agent): a sandbox está centrada no sistema de ficheiros e **não** bloqueia HTTPS de saída neste momento, e o **Windows corre atualmente sem sandbox** - o isolamento por worktree aplica-se, a camada do sistema operativo não. Ambas estão na lista.

É essa combinação que torna defensável tudo o resto neste artigo. Saltar os pedidos de permissão só é sensato quando o raio de ação é uma worktree descartável e um sistema de ficheiros de onde o agente não consegue sair.

### Por dentro

Um **daemon em Go** (`watchfired`) trata da orquestração, do sandboxing, da emulação de PTY, das worktrees e de um servidor gRPC. Falam com ele três clientes: uma **TUI em Bubble Tea** para trabalho em terminal e SSH, uma **GUI em Electron + React** que abre uma janela do sistema por projeto, e uma **CLI** fina. O daemon anuncia a sua porta através do `~/.watchfire/daemon.yaml`, e um `flock` no ficheiro de lock garante um daemon por utilizador - acabou o "duas janelas à briga pela mesma worktree". O output do agente passa por um PTY interpretado do lado do daemon por um emulador VT a sério (`hinshun/vt10x`), por isso o ANSI aparece bem em todo o lado.

O estado é YAML em disco, em todo o lado - um registo, definições globais, integrações, e um `project.yaml` por projeto mais ficheiros `.watchfire/tasks/<n>.yaml` - com escritas atómicas (tmp + `fsync` + `rename`) desde a v6.0, que fechou à força uma race condition de perda de dados. Está tudo pesquisável com grep, comparável com diff, e sobrevive ao git.

E desde a v9 há um quarto cliente que nem sequer é uma interface: `watchfire mcp serve` expõe o orquestrador inteiro como servidor MCP. Esse tem secção própria.

## Uma visita rápida

O que mais me fez falta naqueles primeiros tempos só de terminal foi um *dashboard*. Não uma lista de projetos - um estado. Onde estamos? O que está preso? O que fizeram os agentes hoje? É a captura de ecrã no topo deste artigo: uma linha de pulso para a trabalhar / precisa de atenção / inativo / concluído hoje, um aviso de tudo em ordem, insights da frota com janelas de 7d/30d/90d/Tudo, filtros, e um cartão por projeto com as suas contagens de tarefas e churn de código.

Clicas num projeto e ele abre na sua própria janela - o redesenho "Inferno" da v8. O layout é centrado no chat: a conversa do agente é o painel largo, e Tasks / Definition / Insights / Secrets / Trash / Settings vivem numa barra lateral com separadores à direita:

{{< figure src="/posts/202607-watchfire/img/tour/project-window.webp" alt="Uma janela de projeto do Watchfire com o stream do agente à esquerda e a fila de tarefas à direita" caption="Uma janela de projeto: primeiro o chat, tudo o resto é referência. Esta é o repositório do próprio Watchfire, com 129 tarefas, inativo numa sessão fresca de Claude Code." >}}

Cada projeto tem uma **Definition** em markdown que é incorporada no contexto do prompt. É o resumo permanente do projeto - o que é, que convenções interessam, que ficheiros interessam - e é o que torna viável um fluxo com vários projetos, porque os agentes começam com contexto em vez de um cérebro em branco:

{{< figure src="/posts/202607-watchfire/img/tour/definition.webp" alt="O separador Definition do projeto" caption="O separador Definition. Edita-se ali mesmo ou salta para o $EDITOR." >}}

Os **Insights** por projeto respondem a "o que é que eu fiz mesmo esta semana" - tarefas por dia, distribuição por agente, distribuição de durações, custo, e desde a v8 também as métricas de código:

{{< figure src="/posts/202607-watchfire/img/tour/insights.webp" alt="Insights por projeto" caption="Insights por projeto: KPIs, tarefas por dia, gráfico de anel por agente, distribuição de durações. Há também um agregado de toda a frota no dashboard principal." >}}

O **Wildfire** é o modo autónomo: o Watchfire executa tarefas prontas, refina rascunhos e gera novas em ciclo até a definição do projeto dizer que está feito. Ganhou uma GUI de primeira classe na v8 - um botão de arranque com modal de confirmação, e um indicador de fases ao vivo enquanto corre. O artigo [Inside Wildfire mode](https://watchfire.io/blog/2026-05-18-inside-wildfire-mode) tem a mecânica toda:

{{< figure src="/posts/202607-watchfire/img/tour/wildfire-confirm.webp" alt="O modal de confirmação do Start Wildfire" caption="O modal diz alto o que normalmente se cala: um ciclo autónomo que corre sem supervisão e gasta tokens continuamente, substituindo o agente que estiver no projeto. Duas frases que já me salvaram de mim próprio mais do que uma vez." >}}

As **Settings** globais ganharam subpáginas pesquisáveis com os valores por omissão da frota - que agente recebem os projetos novos, e se integram, apagam ramos e arrancam tarefas prontas automaticamente, tudo substituível por projeto. O botão dividido **Open** deteta que CLIs de editor estão mesmo instaladas, do VS Code e Cursor ao Zed, JetBrains e Xcode, e funciona mesmo quando o PATH da GUI foi despido.

Para as horas em que o Watchfire não deve ser a coisa no ecrã, a v8 acrescentou o **Mini Monitor** - uma tira sem moldura sempre à frente - e um menu na bandeja com o mesmo estado mais a porta do daemon:

{{< figure src="/posts/202607-watchfire/img/tour/mini-monitor.webp" alt="A janela do Mini Monitor" caption="O Mini Monitor: a frota inteira numa tira do tamanho de um post-it. A linha laranja é o único projeto a fazer alguma coisa." >}}

O mesmo fluxo existe numa **TUI**, porque metade do meu trabalho acontece por SSH para uma máquina Linux, onde as tarefas se editam tão bem como na GUI. Uma **CLI** fina cobre tudo o que o daemon sabe fazer:

{{< figure src="/posts/202607-watchfire/img/tour/tui.webp" alt="TUI do Watchfire" caption="A TUI espelha o layout de dois painéis da GUI: tarefas à esquerda, stream do agente à direita, com atalhos para chat / generate / plan / run all / wildfire / stop." >}}

{{< figure src="/posts/202607-watchfire/img/tour/cli-help.webp" alt="watchfire --help" caption="A superfície da CLI: chat, configure, daemon, define, generate, init, integrations, metrics, plan, run, task, update, wildfire - e, desde a v9, mcp." >}}

## A prova: 30 dias de vibe coding

Em abril comprometi-me com [30 dias, 30 projetos construídos com IA](/posts/202604-vibe30/announcement/). Um por dia, todos os dias. Claude Code num plano Max 20x, Watchfire a orquestrar, Context7 MCP a alimentar os agentes com documentação fresca.

O plano era lançar projetos paralelos. O que eu não esperava: **o Watchfire tornou-se o projeto a ser testado ao limite todos os dias**, e a fila de issues que abri para mim próprio transformou-se no roadmap de produto mais agressivo que alguma vez segui.

Alguns momentos representativos da [série](/series/30-days-of-vibe-coding/):

- **Dia 1 (Platformer)** - *"Não fiquei ali a aprovar cada alteração de ficheiro. O Watchfire pôs as tarefas em fila e foi tratando delas. Voltei e tinha um jogo a funcionar."* O ciclo de ir-se embora funcionou logo no primeiro dia. E expôs instantaneamente tudo o que ainda não estava pronto: output de terminal ilegível, ciclos de reinício do agente em rate limits, a sandbox a bloquear o `~/Desktop` no macOS.
- **Dia 12 (Wordle)** - *"Cada tarefa acrescentava uma categoria específica de polimento, e nenhuma partiu o que já lá estava."* O modelo incremental de tarefas foi a única razão para aquilo funcionar. Os prompts em bloco partiam sempre; muitas tarefas pequenas e bem delimitadas não.
- **Dias 27-28 (Terminal, ideA)** - Inferno de CI/CD nativo multiplataforma. *"O Watchfire ajudou imenso aqui ao entrar em ciclos infinitos de depurar, testar, correr, falhar e repetir até o pipeline finalmente funcionar. Sem essa persistência, eu teria desistido dos lançamentos multiplataforma."*
- **Dia 30 (miniOs)** - *"No dia 1 construí um jogo de plataformas a partir de uma frase. No dia 30 construí um sistema operativo que contém esse jogo, e tudo o que fiz pelo meio."*

Ao longo dos 30 dias: **~450 tarefas executadas através do Watchfire e ~1200 commits**, com cerca de 326 mil linhas alteradas - essa é a contagem do próprio Watchfire de inserções mais remoções, uma medida de churn e não uma alegação de produtividade. Só durante o desafio saíram cinco versões maiores do Watchfire (Ember → Spark → Blaze → Beacon → Flare).

A meio disto tudo a ferramenta atravessou uma linha que eu não tinha planeado.

## A parte meta

Há um momento - algures na segunda semana - em que o ciclo se fecha. Estás a usar o Watchfire para construir um projeto. O projeto revela um bug no Watchfire. Registas o bug como tarefa do Watchfire. O Watchfire corre um agente para corrigir o Watchfire. A correção sai. Depois voltas ao projeto original, ainda à espera noutro separador.

Da primeira vez tem piada. À décima é só o fluxo de trabalho. Na retrospetiva é o ponto todo:

> *Ou, mais rigorosamente, o Watchfire está agora a construir o Watchfire. A ferramenta orquestra o seu próprio desenvolvimento.*

Isso foi escrito em maio. Em julho deixou de ser uma frase num artigo e passou a ser um processo de lançamento. Todas as tarefas da fila da v9 - o esqueleto do servidor MCP, as ferramentas de fábrica de tarefas, as ferramentas de execução, as de inspeção - foram escritas, executadas e integradas através do Watchfire:

{{< figure src="/posts/202607-watchfire/img/meta/building-v9.webp" alt="A janela de projeto do próprio Watchfire com a fila de tarefas da v9 em desenvolvimento" caption="A v8 a construir a v9: nove tarefas em desenvolvimento, cada uma delas uma peça do servidor MCP, a correr no repositório do próprio Watchfire dentro do Watchfire." >}}

E quando a fila acabou, foi o agente que preparou o lançamento:

{{< figure src="/posts/202607-watchfire/img/meta/v9-release-chat.webp" alt="O agente do Watchfire a reportar que a v9.0.0 está preparada como draft release" caption="O desfecho da v9.0.0, textual: versão incrementada, CHANGELOG escrito, 22 commits enviados, workflow de release verde, 20 artefactos preparados como rascunho - e uma paragem total no único passo que não se pode desfazer, à espera de um sim. Acertou na fronteira, que é a parte que me interessava mesmo." >}}

O site também está no ciclo. O [watchfire.io](https://watchfire.io) - documentação, tour, changelog, blog - é um projeto Watchfire como qualquer outro, construído tarefa a tarefa pela coisa que documenta. Há um artigo inteiro sobre isso, escrito pelo processo que descreve: [Watchfire eats its own dogfood](https://watchfire.io/blog/2026-05-19-eating-our-own-dogfood).

{{< figure src="/posts/202607-watchfire/img/meta/website-v91.webp" alt="Um agente do Watchfire a atualizar o watchfire.io para a v9.1" caption="Quatro palavras de prompt - \"update watchfire website to 9.1\" - e o agente encontra todos os sítios onde a versão é afirmada (badge do hero, JSON-LD, changelog, RSS), escreve as notas de lançamento, verifica a build e para antes de fazer commit. Repara no juízo a meio: deixou um badge a apontar para a 9.0 porque essa continua a ser a versão de referência e a 9.1 é uma correção de bugs." >}}

A razão para nada disto ser um truque é banal. Cada arranhão que senti foi registado e corrigido pela mesma maquinaria que o causou. Cada "quem me dera que isto..." tornou-se um rascunho de tarefa em segundos, e a distância entre notar uma falha e lançar a correção encolheu para horas. Isso não prova que o Watchfire tem a superfície certa para o *teu* trabalho - prova que tem a superfície certa para o único fluxo que eu consegui observar em detalhe total, todos os dias, durante seis meses. Acontece que essa é uma boa maneira de construir uma ferramenta. E a v9 é essa observação transformada em produto: se o Watchfire já conseguia construir o Watchfire, só faltava deixar o *teu* agente conduzir também.

## Ligar um chat à fábrica

O que me traz à parte da v9 de que mais tenho gostado. Ligar um agente à fábrica não é uma caça ao tesouro por ficheiros de configuração - é uma página de definições. O Watchfire deteta que CLIs de agente tens na máquina e escreve a entrada MCP na configuração de cada uma com um clique:

{{< figure src="/posts/202607-watchfire/img/meta/mcp-settings.webp" alt="A página Settings → MCP com instalações de um clique por agente" caption="Settings → MCP: um cartão por CLI de agente. O Claude Code é um clique - o Watchfire escreve a entrada no ~/.claude.json. O Codex e o Copilot foram detetados automaticamente, a um Install de distância. Há um snippet copiável para tudo o resto. Só stdio, local à máquina, nada na rede." >}}

Carreguei no botão do Claude Code, reiniciei uma sessão, e um terminal comum passou a ser cliente do Watchfire. Pergunta-lhe o que está a correr e ele lista todos os projetos registados, diz-te qual tem um ciclo Wildfire na fase de execução, e traz a fila de tarefas inteira desse projeto - sem uma única janela do Watchfire aberta.

Assim que tens isso, uma série de fluxos deixam de ser ficção científica:

- **Planear por fora, fabricar por dentro.** Fazes brainstorming com um agente no chat - qualquer chat - e, em vez de te despejar código, ele regista tarefas delimitadas com critérios de aceitação e deixa o Watchfire executá-las em sandbox, em worktrees, com merges e métricas. A conversa continua uma conversa; o código acontece na fábrica.
- **Trabalho entre projetos a partir de um só lugar.** Uma sessão sentada no repositório deste blogue pode registar um bug que acabou de encontrar no repositório do Watchfire, ou arrancar uma atualização de documentação no projeto do site, sem mudar de diretoria nem de janela.
- **Agentes a rever agentes.** O agente exterior lê o `get_task_diff` depois de uma execução e decide se regista um seguimento - um ciclo de revisão em que o revisor nunca toca na worktree.
- **Relatórios de bug que se escrevem sozinhos.** A primeira coisa que pedi a uma sessão ligada foram os insights de um projeto, e devolveu-me uma parede de zeros: as tarefas históricas nunca tinham tido o `completed_at` carimbado, por isso todas as métricas que dependiam dele apareciam vazias. Isso virou tarefa, e a tarefa virou a v9.1 dois dias depois. O agente exterior encontrou o bug ao *usar* a fábrica.

A metáfora da fábrica deixa de ser metáfora neste ponto. O Watchfire trata do fabrico - isolamento, execução, integração, contabilidade - e qualquer coisa que fale MCP pode ficar ao balcão dos pedidos.

## O teste de esforço: Neon Fable

Para perceber se a v9 aguentava mesmo, apontei-a a algo deliberadamente disparatado: o `rpg-fable-test`, um RPG cyberpunk de browser chamado **Neon Fable**, construído quase todo pelo Wildfire, comigo a escrever sobretudo a Definition do projeto e a ver a fila esvaziar.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-definition.webp" alt="O Wildfire a correr com a definição do projeto Neon Fable aberta" caption="A montagem toda: uma Definition que descreve o jogo (história ramificada em três atos, renderizador isométrico, combate por turnos, inventário de ciberimplantes) e um ciclo Wildfire que a transforma em tarefas. A v1 - o ciclo jogável completo - saiu como as tarefas #1-18." >}}

A fila da v1 levou o jogo do `npm create vite` até um ciclo acabado: criação de personagem, história ramificada em três atos, combate por turnos com semente, inventário e ciberimplantes, múltiplos finais, um códice de finais, New Game+. Toda a pixel art foi escrita *em código*, como grelhas de strings indexadas por paleta, porque é sobre isso que um agente consegue iterar. A fila da v2 - uma revisão gráfica de alto detalhe e um sistema modular de aparência de personagem - foi gerada pelo próprio Wildfire. O projeto está agora em **119 tarefas, 103 delas feitas e integradas**, com uma bateria de testes que passou 902 testes por volta da tarefa #40 e que desde então só cresceu.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-wildfire.webp" alt="O Wildfire a executar uma tarefa de arte do Neon Fable" caption="O Wildfire na fase de execução em \"Day-phase neon states - dusk, night, late-night\", a escrever à mão rampas de cor emissivas em TypeScript. O servidor de desenvolvimento Vite na shell acoplada recarrega o jogo à medida que cada alteração entra." >}}

E é isto que sai do outro lado. O criador de personagens é todo o sistema de aparência da v2 tornado visível - composição de sprites em camadas, catálogos por slot, pré-visualização ao vivo, aleatorização com bloqueios:

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-appearance.webp" alt="O passo de aparência na criação de personagem do Neon Fable" caption="As tarefas #33-53 num único ecrã: composição de sprites em camadas, catálogos de cabelo/olhos/sobrancelhas/boca/detalhes de rosto, canais de cor, uma pré-visualização rotativa ao vivo, e um \"surprise me\" que respeita os bloqueios por slot. Cada sprite é uma grelha de strings num ficheiro TypeScript." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-plaza.webp" alt="Jogabilidade isométrica na Cinder Row Plaza" caption="Cinder Row Plaza: tiles isométricos 64×32, sinalética néon animada, uma dúzia de NPCs distintos através do mesmo sistema de camadas, um minimapa e diálogo ramificado - cada pixel escrito como código por um agente que não consegue ver." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-combat.webp" alt="Combate por turnos no Neon Fable" caption="Combate: ordem de iniciativa no topo, orçamentos de movimento e de ação, um registo corrido. O gerador aleatório com semente por baixo disto foi a tarefa #6, ainda na fila da v1." >}}

O Neon Fable não é um produto e não vai passar a ser. É um projeto de demonstração, feito para ver o que acontece quando se aponta a fábrica a algo desconfortável. Podes [jogá-lo no browser](https://nunocoracao.github.io/neon-fable/) e [ver o código](https://github.com/nunocoracao/neon-fable). Como teste de esforço já respondeu à pergunta: não se limita a corrigir os seus próprios bugs e a escrever a sua própria documentação - dado algo tão melindroso como *pixel art e game feel*, continua a entregar.

## A outra metade: projetos que são sobretudo pensar

O Neon Fable é o caso vistoso, e é também o enganador. Faz o Watchfire parecer uma máquina de gerar código que não escreveste - que é a metade do fluxo que fica bem na fotografia, e a metade em que menos confio.

Os dois projetos mais recentes no meu dashboard são o oposto. O **Anima** é um produto de agente pessoal - um agente persistente por pessoa - e o **FitQuest** é um registo de fitness que gamifica métricas de todos os aparelhos que tenhas. Ambos têm ambições reais. Nenhum tem ainda código de produto. O que têm é uma pasta `docs/`, um registo de decisões, e uma Definition de projeto cuja primeira regra é *a documentação é a fonte de verdade; o código segue a documentação, nunca o contrário*.

Por isso as tarefas não se parecem nada com as do Neon Fable:

- *"Afiar a cunha - primeiro utilizador, caso de uso principal, modelo de interface (**recomendar, não fechar**)"*
- *"Dossier de evidências sobre a decisão KMP vs Flutter - **só investigação, não decidir**"*
- *"Auditoria de contraste e de visão cromática à paleta do HUD"*
- *"Regras de texto conformes com o MDR na voz da marca, e auditar todas as strings visíveis ao utilizador na PoC"*

Lê outra vez esses parêntesis. São instruções para *não* ser autónomo - reúne as evidências, assinala os compromissos, deixa a decisão comigo. A Definition do Anima carrega a mesma postura como regra permanente: o que estiver marcado como fechado está decidido, e se uma tarefa expuser uma lacuna ou contradição, o agente é instruído a **parar, trazer isso à superfície, corrigir o documento e só depois continuar**, em vez de inventar um rumo. A do FitQuest manda falhar a tarefa de vez - `success: false` com um motivo - em vez de sair do caminho documentado.

Isso transforma a mesma maquinaria em algo mais próximo de um assistente de investigação com rasto documental: o trabalho é delimitado, isolado, executado e integrado exatamente como antes, mas o que aterra no diff é um memorando de decisão ou uma atualização de documentação em vez de uma funcionalidade. A Definition deixa de ser enchimento de contexto nesse momento; passa a ser governação.

Ambos os projetos têm artefactos, porque mais cedo ou mais tarde é preciso olhar para a coisa:

{{< figure src="/posts/202607-watchfire/img/projects/anima-ori.webp" alt="O ecrã de onboarding do Anima" caption="A eclosão do Anima: um volume de luz à deriva que se junta numa criatura e depois faz seis perguntas - cada uma ou molda o ser ou se torna a sua primeira memória. Feito como protótipo WebGL autónomo em docs/explorations/, porque o documento de design diz que os protótipos provam coisas antes de existir código." >}}

{{< figure src="/posts/202607-watchfire/img/projects/fitquest-today.webp" alt="O ecrã de hoje do FitQuest em iOS" caption="A prova de conceito descartável do FitQuest em SwiftUI - dados reais do HealthKit, missões com etapas e sequências, uma barra de XP. Explicitamente não é o produto: existe para testar se a mecânica de missões sobrevive ao contacto com um aparelho real, e as aprendizagens voltam à documentação antes de o código ser deitado fora." >}}

Cento e três tarefas integradas no jogo; trinta e oito cuidadosamente delimitadas nos outros dois. Mesmo daemon, mesmas worktrees, mesma sandbox. A diferença está inteiramente em como a Definition é escrita - que é a verdadeira lição ao fim de seis meses, e a que eu daria a quem está a começar: **a ferramenta vale o que valer o resumo que lhe deres, e saber quando lhe dizer para não decidir é a maior parte da habilidade.**

## Como chegámos aqui

A primeira versão nem sequer se chamava Watchfire. Chamava-se **FORGE** - uma única janela Electron com um seletor de projetos, uma lista de tarefas e um terminal embutido a correr Claude Code. Tosca: modelo de tarefas fininho, output ilegível, mudar de projeto obrigava a reiniciar a aplicação. Mas a ideia central já lá estava - pôr trabalho em fila, vê-lo executar, não mexer diretamente no terminal.

{{< figure src="/posts/202607-watchfire/img/history/forge-jan.webp" alt="O FORGE a 12 de janeiro de 2026" caption="12 de janeiro: FORGE. Um projeto de cada vez, layout com separadores, sem dashboard, sem métricas, sem multiagente. O avatar em pixel art do Claude Code na mensagem de boas-vindas ficou por lá mais tempo do que devia." >}}

No início de fevereiro reiniciei o repositório do zero em Go - gRPC em vez de HTTP, YAML em vez de SQLite, três binários em vez de um monólito Electron. É essa a base de código que ainda hoje corre. Depois chegou abril, e o versionamento apanhou um tema: cada versão maior tem nome de fogo, e a cadência diz-te exatamente o que doeu naquele mês.

- **v1.0 "Ember"** *(início de abril)* - primeiro lançamento a sério. Descoberta de transcrições a partir do `~/.claude/projects/` do Claude Code, uma proteção contra ciclos de reinício ao fim de três crashes, a correção do Seatbelt para projetos em `~/Desktop`.
- **v2.0 "Spark"** *(meados de abril)* - a interface de backends encaixáveis. Codex, opencode e Gemini CLI saem no mesmo dia, com troca de agente por tarefa e isolamento de configuração por sessão.
- **v3.0 "Blaze"** *(fim de abril)* - Copilot CLI como 5.º backend, mais duas semanas de hemorragia estancada: um bug `EXDEV` entre sistemas de ficheiros que comia as atualizações em Linux, rotação da lista de tarefas, ciclos de atualização da GUI.
- **v4.0 "Beacon"** *(dia 28)* - a viragem de executor de tarefas para ferramenta de *operações*. Dashboard refeito, métricas por tarefa, Insights, exportações, resumo semanal, notificações do sistema, relés para Slack/Discord/webhooks com verificação de assinatura, PR automático no GitHub.
- **v5.0 "Flare"** *(dia 30)* - bots OAuth para Slack e Discord, um servidor HTTP de entrada com rate limiting e idempotência, paridade de merge para GitLab/Bitbucket, e uma correção para o `run-all` que parava em silêncio quando um merge falhava. Afinal um dashboard silencioso é o segundo pior dashboard.
- **v6.0 "Phoenix"** *(início de maio)* - escritas atómicas de YAML, o daemon singleton com `flock`, o Cursor Agent como 6.º backend, e uma TUI com scrollback a sério.
- **v7.0 → v7.4 "Forge"** *(maio-junho)* - sim, o nome original, reciclado como nome de código muito depois de a coisa a que pertencia ter sido reescrita e deitada fora. Reordenação de tarefas em todo o lado, uma janela de chat que deixa de saltar para o topo, modo de chat focado, e a minha melhor história de guerra: um log do daemon finalmente limitado em tamanho depois de o de um utilizador ter chegado a **300 GB** em disco sem ninguém dar por isso ([post-mortem](https://watchfire.io/blog/2026-05-29-forge-7-3-the-300gb-log)).
- **v8.0 "Inferno"** *(fim de junho)* - uma janela do sistema por projeto, uma janela principal de controlo, a GUI do Wildfire, o Mini Monitor, e métricas de saída de código que medem código entregue em vez de tarefas fechadas. ([artigo de lançamento](https://watchfire.io/blog/2026-06-29-inferno-8-0-parallel-workspaces))
- **v9.0 "Firestorm"** *(26 de julho)* - a inversão de papéis: uma fábrica MCP com 18 ferramentas, só stdio, com modo `--read-only` e proteções por todo o lado. ([artigo de lançamento](https://watchfire.io/blog/2026-07-26-firestorm-9-0-watchfire-as-a-factory))
- **v9.1** *(29 de julho)* - a correção do `completed_at` de que falei há umas secções, a preencher retroativamente ~580 tarefas históricas para os Insights, as exportações e o resumo acenderem todos.

Mais uma captura de ecrã, e depois volta a olhar para a que abre este artigo:

{{< figure src="/posts/202607-watchfire/img/history/watchfire-april.webp" alt="O Watchfire em abril de 2026" caption="27 de abril: a GUI da reescrita em Go - reconhecível, mas sem Insights, sem KPIs de frota, sem pré-visualizações ao vivo. Esta é a versão que aguentou a maior parte do desafio dos 30 dias." >}}

Catorze semanas entre as duas. A mesma ferramenta.

## O que se segue

- Mais backends de agente à medida que forem aparecendo. A interface `Backend` é o único ponto de integração - qualquer coisa que fale shell e produza uma transcrição pode entrar.
- Uma superfície MCP mais ampla: ferramentas de inspeção mais ricas, e deixar agentes exteriores de longa duração supervisionar frotas inteiras em vez de projetos isolados.
- Melhores ferramentas de diff e revisão. O visualizador embutido já cá está; falta uma superfície ao estilo de PR de "rever e depois integrar" para tarefas que precisam de olho humano.
- Fluxos de equipa. O modelo de tarefas em ficheiros já sobrevive ao git - listas de tarefas partilhadas e superfícies de revisão são a extensão natural.

## Experimenta

{{< github repo="watchfire-io/watchfire" >}}

No macOS, instalar é uma linha:

```bash
brew tap watchfire-io/tap && brew install --cask watchfire-io/tap/watchfire
```

Todo o resto: [descarregar a última versão](https://github.com/watchfire-io/watchfire/releases/latest) · [documentação](https://watchfire.io/docs) · [changelog](https://watchfire.io/changelog) · [blog](https://watchfire.io/blog)

Se andas a fazer malabarismo com mais do que um agente de IA e já te apanhaste a saltar entre terminais, pode ser a peça que te falta. Para mim foi.

*Seis meses, nove lançamentos, e uma ferramenta que acabou por construir-se a si própria. A versão de "vibe coding" em que ainda tens de entregar alguma coisa ao fim do dia.*
