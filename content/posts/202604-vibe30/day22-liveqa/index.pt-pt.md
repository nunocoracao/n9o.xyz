---
title: "30 Days of Vibe Coding - Dia 22 - LiveQ&A"
description: "Um quadro de Q&A em tempo real para eventos, AMAs e palestras, com upvoting ao vivo e controlos de anfitrião, construído com Firebase Firestore."
summary: "Um quadro de Q&A em tempo real para eventos, AMAs e palestras, com upvoting ao vivo e controlos de anfitrião, construído com Firebase Firestore."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-22", "nextjs", "firebase", "typescript", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 22
seriesOpened: false
date: 2026-04-27
draft: false
#type: "hidden"
---

Dia 22. Já estive em eventos suficientes onde o Q&A é uma confusão. Pessoas a gritar umas por cima das outras, a mesma pergunta a ser feita duas vezes, as melhores perguntas enterradas debaixo das vozes mais altas. Altura de construir algo melhor.

## O Prompt

> "Constrói um quadro de Q&A ao vivo onde um anfitrião cria uma sessão, a audiência submete e vota em perguntas em tempo real, e o anfitrião pode destacar, responder, descartar ou encerrar a sessão. Inclui um modal de partilha com um código QR."

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day22-liveqa.vercel.app)
{{< /alert >}}

## Como Foi Construído

Este passou por 7 tarefas do [Watchfire](https://watchfire.io), construindo desde a camada de base de dados até ao polimento final:

1. **Configuração do Firebase Firestore.** A camada de dados. Coleções de sessões e perguntas, autenticação anónima para que os utilizadores possam entrar sem criar uma conta, e regras de segurança para manter tudo bem protegido.
2. **Criação de sessão.** Um anfitrião preenche um título e uma descrição, carrega em criar, e obtém uma página de sessão única. Formulário simples, nada de especial.
3. **Submissão de perguntas.** Os membros da audiência chegam à página da sessão e submetem perguntas. Limite de 280 caracteres para manter o foco. As perguntas aparecem em tempo real para todos na sessão.
4. **Upvoting em tempo real.** Um voto por utilizador por pergunta, imposto do lado do servidor. As contagens de votos atualizam ao vivo em todos os clientes ligados. Ordena por mais votados ou mais recentes.
5. **Controlos do anfitrião.** O anfitrião tem botões extra em cada pergunta: destacar, marcar como respondida, descartar. Perguntas destacadas são promovidas para um painel dedicado no lado direito do ecrã. O anfitrião também pode encerrar a sessão inteiramente.
6. **Modal de partilha com código QR.** Um botão de partilha abre um modal com o link da sessão, um botão de copiar, e um código QR gerado com qrcode.react. Apontas o telemóvel para o ecrã e estás dentro.
7. **Polimento da UI.** Limpar o layout, refinar o design de duas colunas, garantir que o painel de perguntas destacadas fica bem tanto em desktop como em mobile.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Landing page](images/screenshot-01.png)

**Landing page limpa.** Cria uma sessão ou cola um código de sessão existente para te juntares a uma. A autenticação anónima acontece nos bastidores, por isso os utilizadores apenas escolhem um nome de exibição e avançam.

![Pedido de nome de exibição](images/screenshot-02.png)

**Sem fricção de registo.** A primeira visita dispara um pedido de nome de exibição. É só isso. A autenticação anónima do Firebase trata do resto. Sem emails, sem passwords, sem fluxos OAuth. Para uma ferramenta de eventos ao vivo, isto é exatamente o correto. Não queres que as pessoas andem às voltas com criação de contas quando o orador acabou de dizer "leiam o código QR."

![Criação de sessão](images/screenshot-03.png)

**A criação de sessão são dois campos.** Título e descrição. Carregas no botão e estás a alojar um Q&A ao vivo. A simplicidade aqui importa porque o anfitrião provavelmente está a configurar isto cinco minutos antes da palestra começar.

![Modal de partilha com código QR](images/screenshot-04.png)

**O modal de partilha faz o seu trabalho.** Link da sessão com botão de copiar e um código QR ali mesmo. Este é o workflow que eu estava a imaginar: o anfitrião cria a sessão, projeta este modal no ecrã grande, a audiência lê o código, e as perguntas começam a fluir.

![Vista da audiência com perguntas](images/screenshot-05.png)

**A vista da audiência mantém-se focada.** Submete uma pergunta, vê outras perguntas, dá upvote nas que queres ver respondidas. A caixa de submissão está no topo, a lista de perguntas por baixo, ordenada por mais votadas por defeito. Tudo atualiza em tempo real através de listeners do Firestore.

![Vista do anfitrião com controlos](images/screenshot-06.png)

**O anfitrião tem ferramentas de moderação.** Cada pergunta mostra botões de destacar, marcar como respondida e descartar. Só o anfitrião vê estes. Há também um botão de encerrar sessão no cabeçalho que bloqueia tudo. A coluna da direita mostra perguntas destacadas, ou uma mensagem placeholder se nenhuma estiver destacada ainda.

![Vista completa do anfitrião](images/screenshot-07.png)

**O destaque funciona bem.** Quando o anfitrião destaca uma pergunta, ela é promovida para o painel da direita com o texto da pergunta e o nome do autor exibidos de forma proeminente. A pergunta também recebe um indicador visual na lista principal para que todos vejam que foi chamada à atenção. No mobile, esta secção de destaque fica no topo da página em vez de numa coluna lateral.

![Pergunta destacada](images/screenshot-08.png)

![Upvoting em ação](images/screenshot-09.png)

**O upvoting cria um filtro natural.** As melhores perguntas sobem ao topo. O anfitrião não precisa de ler tudo. A audiência faz a curadoria por ti.

## Os Relatórios de Bugs

Este foi surpreendentemente limpo. Os listeners em tempo real do Firestore trataram das partes complicadas, por isso as perguntas e votos apareciam instantaneamente sem qualquer polling ou lógica de refresh manual. O fluxo de autenticação anónima foi transparente. Nenhum bug reportado neste projeto.

## Experimenta

{{< github repo="nunocoracao/Vibe30-day22-liveqa" showThumbnail=true >}}

**[Experimenta o LiveQ&A](https://vibe30-day22-liveqa.vercel.app)**

Cria uma sessão e partilha o link. Não é preciso conta.

## Veredicto do Dia 22

Quarto projeto com Firebase. A esta altura o padrão escreve-se sozinho: autenticação anónima, listeners do Firestore, sincronização em tempo real. Provavelmente já conseguia construir um destes a dormir. A stack técnica já não é a história.

O que é interessante neste é a camada de moderação. A maioria das ferramentas de Q&A são apenas listas de perguntas com contagens de votos. A funcionalidade de destaque muda isso. Quando o anfitrião destaca uma pergunta, ela é transmitida para todos os ecrãs na sala. A audiência vê o que está a ser abordado. O anfitrião controla o fluxo sem gritar "próxima pergunta por favor" para um microfone. Isto é um insight de produto, não técnico.

Usaria isto numa palestra real? Sim. Já estive em conferências suficientes onde o Q&A degenera em quem agarra o microfone primeiro a fazer uma "pergunta" de cinco minutos que na verdade é um comentário. Isto resolve o problema. A audiência vota, as melhores perguntas sobem, o anfitrião escolhe o que abordar. A voz mais alta na sala deixa de ser o fator decisivo.

O botão de descartar é silenciosamente a funcionalidade mais importante. Perguntas fora do tópico, duplicadas, alguém a tentar ser engraçado. O anfitrião remove-as e ninguém sequer nota. Sem aquele momento constrangedor de "vamos avançar." Simplesmente desaparecem.

---

*Este é o dia 22 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
