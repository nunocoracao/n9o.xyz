---
title: "30 Dias de Vibe Coding - O Resumo Final"
description: "30 projetos em 30 dias usando programação assistida por IA. O que foi fácil, o que foi difícil, o que foi inesperado e para onde isto tudo vai."
summary: "30 projetos em 30 dias usando programação assistida por IA. O que foi fácil, o que foi difícil, o que foi inesperado e para onde isto tudo vai."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "wrapup"]
series: ["30 Days of Vibe Coding"]
series_order: 31
seriesOpened: false
date: 2026-05-07
draft: false
#type: "hidden"
---

Está feito. Trinta projetos. Trinta dias.

Um jogo de plataformas. Um clone do Snake num Nokia 3310. Um RPG com gráficos isométricos. Tetris com música procedural. Breakout. Um temporizador Pomodoro em Go. Um dashboard de git. Uma app de notas com um servidor MCP. Um quadro kanban que uma IA pode gerir. Um clone do Miro. Um clone do Trello. Wordle. Um gerador de portfólios. Um dashboard meteorológico com arte ASCII. Um auto-battler. Um jogo do galo onde a IA aprende a perder. Um jogo de hacking sobre uma IA a escapar do confinamento. Uma app de votações em tempo real. Um mural de reações para eventos. Um moodboard colaborativo. Salas de chat anónimas. Uma ferramenta de Q&A ao vivo. Windows 95 num browser. Um redesign de blog. Um misturador de sons ambiente com zero ficheiros de áudio. Pixel art colaborativa. Um emulador de terminal em Rust. Um editor de código em Go. Um clone do Notion. E um sistema operativo que contém tudo o que foi referido acima.

Isto foi possível graças a agentes de programação. Principalmente o Claude, às vezes o Codex, mas também o [Watchfire](https://watchfire.io) para orquestrar trabalho complexo, transformando ideias vagas em especificações detalhadas para os meus agentes executarem.

## Os Números

- **30 projetos** lançados e implantados
- **~326.000 linhas de código** em todos os projetos
- **~1.200 commits** no total
- **~450 tarefas Watchfire** (de 4 tarefas para o jogo do galo até 43 para o editor de código)
- **8 tech stacks:** TypeScript/React, Go/Bubble Tea, Python/Textual, Rust/Tauri, Go/Wails, vanilla JS, Astro, Next.js
- **6 projetos Firebase** com sincronização em tempo real
- **5 jogos,** 5 apps TUI, 3 apps nativas de desktop, 17 apps web
- **3 plataformas** (macOS, Linux, Windows) para as apps nativas
- **7 idiomas** por artigo de blog (Inglês, Português, Espanhol, Alemão, Francês, Italiano, Japonês, Chinês)

## O Que é Fácil

As coisas que funcionaram quase sempre, com iteração mínima.

**Jogos e apps autocontidas.** Qualquer coisa com regras claras e um âmbito definido. Tetris, Wordle, Breakout, Snake. A IA sabe como estes jogos devem funcionar porque são padrões bem documentados. Descreves o jogo, a IA constrói o jogo. Os resultados eram jogáveis logo na primeira build quase sempre.

**UI de frontend.** Componentes React, estilos Tailwind, layout, animações. A IA gera código de UI limpo rapidamente. Layouts de cartões, modais, barras laterais, dashboards, fluxos de formulários. Se consegues descrever como deve ficar, recebes algo próximo logo na primeira tentativa.

**Sistemas e lógica.** Motores de combate, Q-learning, gestão de estado kanban, undo/redo, file watchers, servidores MCP. A IA lida bem com trabalho algorítmico e máquinas de estado. A máquina de estado do Pomodoro, o sistema de combate do MyBrute, a implementação de Q-learning no jogo do galo. Tudo isto ficou pronto sem eu ter de fazer debug à lógica central.

**Envolver ferramentas existentes.** O Dia 7 provou que podes apontar a IA a qualquer CLI com output estruturado e conseguir uma UI wrapper construída à volta. Ela executa comandos git, faz parse do texto, constrói um dashboard. O mesmo padrão funciona para Docker, kubectl, qualquer coisa com uma interface de texto.

**Integração com Firebase.** Autenticação anónima, listeners de Firestore, sincronização em tempo real. A IA sabia os padrões do Firebase de cor e salteado. Seis projetos usaram Firebase e a colaboração em tempo real funcionou logo no primeiro deploy sempre. Regras de segurança, modelação de dados, gestão de ligações. Tudo tratado.

## O Que Ainda é Difícil

As coisas que consistentemente precisaram de intervenção humana, iteração e paciência.

**Estilo visual e direção artística.** Isto vai além dos jogos. Sempre que queres uma identidade visual específica para uma app frontend, a IA tem dificuldades. O Dia 15 (MyBrute) passou por quatro estilos de personagem completamente diferentes antes de acertar num que funcionava. Mas o mesmo problema aparece em apps web. Estética de landing pages, paletas de cores que parecem certas, combinações de tipografia, espaçamento que parece intencional em vez de gerado. A IA produz output. Um humano decide se é bom.

**Deployment e infraestrutura.** O código funciona na tua máquina. Depois fazes deploy e tudo rebenta. O Dia 29 (n0ti0n) teve dezenas de commits só a fazer debug do Firestore em produção. Configuração de long polling, definições de cache, trimming de variáveis de ambiente, timeouts de ligação. Coisas que só aparecem depois do deployment. O Dia 28 (ideA) foi uma guerra de múltiplos commits para conseguir que o Wails compilasse para três plataformas no GitHub Actions. A IA consegue sugerir correções rapidamente, mas o ciclo de deploy-testar-iterar é lento independentemente de tudo.

**CI/CD de apps nativas.** Builds cross-platform são dolorosos. Dependências de WebKit no Linux, build tags por plataforma, geração de bindings do Wails, assinatura de código, scripts de instalação que detetam SO e arquitetura. Os Dias 27 e 28 gastaram mais tempo em CI do que nas próprias aplicações. O Watchfire ajudou muito aqui ao entrar em loops infinitos de debug, testes, execução, falha e repetição até o pipeline finalmente funcionar. Sem essa persistência, teria desistido dos lançamentos cross-platform.

**Polimento e casos extremos.** O window snapping no Dia 30 tinha um bug novo cada vez que eu pensava que estava corrigido. O que acontece quando fazes snap a uma janela maximizada? E se mudas de workspace a meio de um drag? E redimensionar uma janela com snap? A IA constrói o caminho feliz bem. Os casos extremos precisam de um humano a testar e a reportar.

## O Que Foi Inesperado

As coisas que não previ quando comecei este desafio.

**A IA toma decisões de produto.** O Dia 21 (ChatRooms) usou autenticação anónima sem eu especificar. A IA decidiu que, para uma app de chat casual, forçar a criação de conta seria um assassino de conversão. Isto não é geração de código. É instinto de produto. Aconteceu repetidamente. Funcionalidades que eu não pedi apareceram porque a IA inferiu que pertenciam ali. Isto pode estar relacionado com desenvolvimento orientado por specs. No Watchfire, especificas uma direção de produto para o projeto. Os agentes trabalham em direção a essa visão e continuam a iterar até o código corresponder à spec. Quando a spec é clara sobre como o produto se deve sentir, a IA toma melhores decisões.

**Tech stacks desconhecidas funcionam bem.** Eu não sei escrever Go. Nunca toquei em Bubble Tea, Lip Gloss, Tauri ou Wails. Não sei Rust. Mas os Dias 6-9 lançaram apps TUI em Go polidas, o Dia 27 lançou um emulador de terminal com backend em Rust, e o Dia 28 lançou um editor de código em Go/Wails. A barreira para experimentar novas tech stacks desmoronou. Usar o Context7 MCP para alimentar os agentes com documentação atualizada ajuda muito aqui. A IA não precisa de depender dos dados de treino quando pode ir buscar a documentação mais recente a pedido.

**O bottleneck mudou.** Deixei de gastar tempo a construir e comecei a gastar tempo a rever, testar e reportar bugs. O fator limitante nunca foi "a IA consegue escrever este código." Foi "testei isto de forma suficientemente rigorosa" e "isto realmente parece certo."

**Áudio procedural é viável.** Os Dias 4 (Tetris), 12 (Wordle) e 25 (SoundScape) usaram a Web Audio API para sintetizar todos os efeitos sonoros e música. Zero ficheiros de áudio. Chuva, vento, crepitar de lareira, beats lo-fi, efeitos sonoros de jogos. Tudo gerado com osciladores e buffers de ruído. Eu não fazia ideia de que isto era prático para produção.

**A narrativa importou mais do que o código.** Os projetos que mais ressonaram não foram os tecnicamente impressionantes. O Dia 17 (Genesis) funcionou por causa da história, não dos minijogos. O Dia 23 (RetroOS) funcionou por causa da nostalgia, não do gestor de janelas. O Dia 15 (MyBrute) funcionou porque eu tinha uma ligação pessoal ao jogo original. O código foi a parte fácil. O ângulo foi a parte difícil.

## A Minha Previsão para o Futuro

O custo de construir um protótipo acabou de colapsar. Não o custo de construir software excelente. Isso ainda requer tempo, bom gosto e iteração. Mas o custo de testar uma ideia? O custo de explorar uma tech stack que nunca usaste? Perto de zero.

**Adicionar funcionalidades a software existente também ficou dramaticamente mais barato.** Uma vez que um projeto está configurado com a arquitetura certa, adicionar novas funcionalidades é mais fácil do que construir de raiz. A IA compreende a codebase existente, os padrões estão estabelecidos, e cada nova funcionalidade constrói sobre o que já existe. O custo marginal da próxima funcionalidade aproxima-se de zero.

**O bottleneck passou de escrever código para decidir o que lançar.** Como é que o comercializas? Como é que o vendes? Quando é que lanças? A engenharia já não é a restrição. Estratégia de produto, go-to-market e distribuição são.

**Isto já está a mudar como as equipas trabalham.** Se consegues construir funcionalidades em horas em vez de sprints, os roadmaps ainda fazem sentido? Como é que testas tudo o que podes lançar? Como é que sabes se está a ter o impacto certo nas métricas de negócio certas? Como é que matas coisas tão rápido como as consegues implantar? Prevejo que as ferramentas de experimentação se vão tornar criticamente importantes para empresas que constroem software. Testes A/B, feature flags, rollouts progressivos. A capacidade de fazer deploy rápido não vale nada se não consegues medir e reverter com a mesma rapidez.

**A IA não vai substituir programadores. Vai potenciá-los.** O verdadeiro desafio é organizacional. Empresas inteiras são construídas de raiz à volta de planeamento, roadmaps, ciclos de sprint e estimativas. Agora que construir é rápido, como é que as restantes funções acompanham? Produto, design, QA, marketing, vendas. O desaparecimento do bottleneck de engenharia não significa que o trabalho desaparece. Significa que o bottleneck se move para montante e jusante. As empresas que se adaptarem a esta mudança vão ultrapassar todas as outras em output.

As ferramentas não estão a substituir programadores. Estão a remover as razões para não tentar.

## Watchfire

Todos os projetos deste desafio foram construídos com o [Watchfire](https://watchfire.io). Tenho muito orgulho deste. É o meu projeto. Este desafio foi em parte para o testar em produção enquanto criava conteúdo. Agora já sabem.

Eu dava-lhe uma ideia vaga, ele transformava-a numa spec detalhada, dividia o trabalho em tarefas e executava cada uma através de agentes de programação. Alguns dias foram 4 tarefas. Outros foram 43. Eu revisto o output, testava, reportava bugs quando as coisas partiam e iterava até estar lançado.

Comecei a construir o Watchfire durante este desafio. O primeiro projeto Platformer foi construído na v0. Quando o miniOs foi lançado no Dia 30, já estávamos na v5. Cada projeto deu-me a oportunidade de testar a ferramenta sob stress, encontrar bugs, recolher feedback e lançar melhorias. O desafio e a ferramenta evoluíram juntos.

Eis o que mudou no Watchfire durante os 30 dias:

- **v1.0 Ember** (Dia 8) — Os logs de transcrição JSONL substituíram output de terminal ilegível por logs de conversa limpos. Corrigido o loop de reinício do agente que causava loops infinitos nos rate limits. Corrigidos problemas de sandbox que bloqueavam projetos em diretórios protegidos do macOS.
- **v2.0 Spark** (Dia 11) — Interface pluggable de backend de agente. OpenAI Codex, opencode e Gemini CLI lançados como backends de primeira classe ao lado do Claude Code. Override de agente por tarefa para poderes misturar agentes dentro de um único projeto. Seletores de agente no wizard de inicialização, definições da TUI e definições da GUI.
- **v3.0 Blaze** (Dia 15) — GitHub Copilot CLI como quinto backend. Corrigidas falhas de atualização cross-filesystem no Linux. Corrigido bug de rotação da lista de tarefas em projetos com muitas tarefas. Corrigidos prompts de atualização da GUI a disparar a cada arranque.
- **v4.0 Beacon** (Dia 28) — O grande. Dashboard com estado agregado, chips de filtro, badges de tempo decorrido, preview de terminal ao vivo e tratamento de atenção necessária para tarefas falhadas. Notificações do SO para falhas de tarefas e conclusões de runs. Visualizador de diffs inline. Captura de métricas por tarefa (duração, tokens, custo). Vistas de insights por projeto e cross-projeto com barras de KPI e gráficos. Exportação de relatórios para CSV e Markdown. Notificações de digest semanal. Integrações outbound com Slack, Discord e webhooks. Criação automática de PR no GitHub. Servidor HTTP inbound com handlers para GitHub, Slack e Discord.
- **v5.0 Flare** (Dia 30) — Fechou o loop inbound do Beacon. Tokens OAuth de bot para Slack e Discord. Suporte para GitHub Enterprise, GitLab e Bitbucket. Rate limiting por IP. Componentes interativos do Slack com botões de retry/cancel. Auto-registo de slash-commands no Discord. UI de definições estilo macOS com pesquisa. Corrigido run-all a parar silenciosamente em falhas de merge.

E o maior de todos: o Watchfire passou de apenas macOS para suporte completo cross-platform para macOS, Linux e Windows durante o desafio. Só isso mudou quem o podia usar.

Cinco versões major em 30 dias. De um task runner apenas para macOS a uma plataforma de orquestração cross-platform com suporte multi-agente, um dashboard, notificações, integrações, insights e pipelines de entrega.

O Watchfire suporta múltiplos agentes de programação (Claude Code, Codex, Gemini, opencode, Copilot), funciona em várias plataformas e pode ser usado como GUI, CLI ou TUI. Estou atualmente a trabalhar na v6, adicionando suporte para Cursor e a corrigir um bug de concorrência. Ou, mais precisamente, o Watchfire está a construir o Watchfire agora. A ferramenta orquestra o seu próprio desenvolvimento. É uma frase que não esperava escrever quando comecei este desafio.

Há muito mais a caminho. Vou escrever um deep-dive completo sobre o Watchfire depois de recuperar dos últimos 30 dias.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Obrigado

Se acompanhaste, experimentaste algum dos projetos, partilhaste um post, ou simplesmente leste alguns artigos, obrigado. Isto deu muito trabalho e foi muito divertido. Construir em público é estranho porque estás a lançar trabalho inacabado para toda a gente ver. Mas era esse o objetivo. Não o polimento. Não a perfeição. Apenas output consistente e aprendizagem.

Se queres acompanhar o que vou fazer a seguir, subscreve o blog (link em baixo) ou segue-me nas redes sociais. E se algo disto ressoou contigo, partilha com alguém que possa achar útil. Essa é a melhor forma de apoiar este tipo de trabalho.

Trinta projetos. Trinta dias. Feito.

## Todos os 30 Projetos

| Dia | Projeto | Tipo | Experimenta |
|-----|---------|------|-------------|
| 1 | [Platformer](/posts/202604-vibe30/day01-platformer/) | Jogo | [Jogar](https://vibe30-day01-the-platformer.vercel.app) |
| 2 | [Snake](/posts/202604-vibe30/day02-snake/) | Jogo | [Jogar](https://vibe30-day02-snake.vercel.app) |
| 3 | [Realm of Shadows](/posts/202604-vibe30/day03-rpg/) | Jogo | [Jogar](https://vibe30-day03-rpg.vercel.app) |
| 4 | [Tetris](/posts/202604-vibe30/day04-tetris/) | Jogo | [Jogar](https://vibe30-day04-tetris.vercel.app) |
| 5 | [Breakout](/posts/202604-vibe30/day05-breakout/) | Jogo | [Jogar](https://vibe30-day05-breakout.vercel.app) |
| 6 | [Pomodoro](/posts/202604-vibe30/day06-pomodoro/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day06-pomodoro/releases/latest) |
| 7 | [GitDash](/posts/202604-vibe30/day07-gitdash/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day07-gitdash/releases/latest) |
| 8 | [NotesTUI](/posts/202604-vibe30/day08-notestui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day08-notestui/releases/latest) |
| 9 | [TaskTUI](/posts/202604-vibe30/day09-tasktui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day09-tasktui/releases/latest) |
| 10 | [Miro Clone](/posts/202604-vibe30/day10-miroclone/) | App Web | [Experimentar](https://vibe30-day10-miroclone.vercel.app) |
| 11 | [Treelo](/posts/202604-vibe30/day11-trelloclone/) | App Web | [Experimentar](https://vibe30-day11-trelloclone.vercel.app) |
| 12 | [Wordle](/posts/202604-vibe30/day12-wordle/) | Jogo | [Jogar](https://vibe30-day12-wordle.vercel.app) |
| 13 | [GitFolio](/posts/202604-vibe30/day13-githubportfolio/) | App Web | [Experimentar](https://vibe30-day13-githubportfolio.vercel.app) |
| 14 | [WeatherTUI](/posts/202604-vibe30/day14-weathertui/) | TUI | [Repo](https://github.com/nunocoracao/Vibe30-day14-weathertui) |
| 15 | [MyBrute Arena](/posts/202604-vibe30/day15-mybrute/) | Jogo | [Jogar](https://vibe30-day15-mybrute.vercel.app) |
| 16 | [Tic-Tac-Toe: Evolved](/posts/202604-vibe30/day16-tictactoe/) | Jogo | [Jogar](https://vibe30-day16-tictactoe-evolved.vercel.app) |
| 17 | [Project GENESIS](/posts/202604-vibe30/day17-genesis/) | Jogo | [Jogar](https://vibe30-day17-genesis.vercel.app) |
| 18 | [PollBox](/posts/202604-vibe30/day18-pollbox/) | App Web | [Experimentar](https://vibe30-day18-pollbox.vercel.app) |
| 19 | [ReactionWall](/posts/202604-vibe30/day19-reactionwall/) | App Web | [Experimentar](https://vibe30-day19-reactionwall.vercel.app) |
| 20 | [MoodBoard](/posts/202604-vibe30/day20-moodboard/) | App Web | [Experimentar](https://vibe30-day20-moodboard.vercel.app) |
| 21 | [ChatRooms](/posts/202604-vibe30/day21-chatrooms/) | App Web | [Experimentar](https://vibe30-day21-chatrooms-nir8.vercel.app) |
| 22 | [LiveQ&A](/posts/202604-vibe30/day22-liveqa/) | App Web | [Experimentar](https://vibe30-day22-liveqa.vercel.app) |
| 23 | [RetroOS](/posts/202604-vibe30/day23-retroos/) | App Web | [Experimentar](https://vibe30-day23-retroos.vercel.app) |
| 24 | [Reblog](/posts/202604-vibe30/day24-reblog/) | App Web | [Experimentar](https://vibe30-day24-reblog.vercel.app) |
| 25 | [SoundScape](/posts/202604-vibe30/day25-soundscape/) | App Web | [Experimentar](https://vibe30-day25-soundscape.vercel.app) |
| 26 | [PixelForge](/posts/202604-vibe30/day26-pixelforge/) | App Web | [Experimentar](https://vibe30-day26-pixelforge.vercel.app) |
| 27 | [Terminal](/posts/202604-vibe30/day27-terminal/) | Nativa | [Release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest) |
| 28 | [ideA](/posts/202604-vibe30/day28-idea/) | Nativa | [Release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest) |
| 29 | [n0ti0n](/posts/202604-vibe30/day29-n0ti0n/) | App Web | [Experimentar](https://blocknotes-lime.vercel.app) |
| 30 | [miniOs](/posts/202604-vibe30/day30-minios/) | App Web | [Experimentar](https://vibe30-day30-minios.vercel.app) |

---

*Este e o post final da serie [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Todos os 30 projetos sao open source no [GitHub](https://github.com/nunocoracao/30DaysOfVibeCoding).*
