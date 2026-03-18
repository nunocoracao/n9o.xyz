---
title: "PMing com Claude Code: Capítulo 4 - Segundo Cérebro"
summary: "O Claude Code conseguia aceder a tudo mas não se lembrava de nada. Ligá-lo ao Obsidian transformou ficheiros dispersos num grafo de conhecimento - com entidades, extração de tarefas e transcrições de reuniões que se alimentam mutuamente."
description: "O Claude Code conseguia aceder a tudo mas não se lembrava de nada. Ligá-lo ao Obsidian transformou ficheiros dispersos num grafo de conhecimento - com entidades, extração de tarefas e transcrições de reuniões que se alimentam mutuamente."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Obsidian", "Granola", "knowledge management"]
series: ["PMing with Claude Code"]
series_order: 4
date: 2026-03-18
draft: false
---

No final do capítulo três, chamei à configuração "modo deus." O Claude Code conseguia aceder ao GitHub, Notion, Snowflake, Google Workspace e Slack - tudo a partir de um terminal. Cinco integrações, cinco fontes de dados, respostas em segundos em vez de horas. Acesso a tudo.

Mas cada conversa começava do zero.

Os insights que o Claude encontrava numa sessão não transitavam para a seguinte. As ligações que fazia entre uma thread do Slack e um documento de preços desapareciam quando a conversa terminava. Eu podia pedir ao Claude para encontrar qualquer coisa, mas ele não se lembrava do que já tinha encontrado. A lacuna não era mais ferramentas. Era fazer o conhecimento acumular-se - construir uma camada onde cada nova informação se liga a tudo o que veio antes.

É disso que trata este capítulo. Não mais uma integração. Um segundo cérebro.

## Porquê o Obsidian

O Obsidian é uma aplicação de notas construída sobre ficheiros markdown simples. Sem formato proprietário, sem base de dados na cloud, sem dependência de fornecedor. O teu vault é apenas uma pasta no disco - abre-a em qualquer editor de texto e está tudo lá.

O que o torna interessante para este caso de uso é a combinação de funcionalidades que assentam sobre esses ficheiros. Wikilinks (`[[assim]]`) permitem ligar qualquer nota a qualquer outra nota sem qualquer fricção. Uma vista de grafo visualiza essas ligações. Frontmatter em YAML dá-te metadados estruturados em cada nota. Um ecossistema de plugins adiciona tudo, desde quadros kanban a vistas de base de dados. E com a sincronização via iCloud, todo o vault fica disponível no telemóvel.

O ponto crítico: não há API para configurar. Sem dança de OAuth, sem servidor MCP, sem tokens de autenticação. É uma pasta de ficheiros markdown no teu sistema de ficheiros local. O Claude Code já tem acesso ao sistema de ficheiros. Essa é toda a integração.

## A Integração Mais Simples

No macOS com sincronização iCloud, um vault do Obsidian fica em:

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/<vault-name>/
```

Sem servidor MCP necessário. Sem plugin. O Claude já sabe ler e escrever ficheiros. Adicionei uma secção "Knowledge Base" ao `CLAUDE.md` com o caminho do vault e uma nota de que é a localização principal para todos os ficheiros persistentes. Depois atualizei a skill `/sync` para escrever o roadmap tanto no vault do Obsidian como no repositório git - vault como principal, repositório como backup com controlo de versões.

É tudo. A partir desse momento, cada conversa sabia onde encontrar e guardar coisas. A parte mecânica demorou cinco minutos.

## Estrutura do Vault

Com a ligação em funcionamento, montei uma estrutura de pastas:

| Pasta | Finalidade |
|--------|---------|
| `roadmap/` | Ficheiros de roadmap sincronizados do GitHub |
| `meetings/` | Transcrições de reuniões para pesquisa e contexto |
| `tasks/` | Tarefas pessoais e to-dos |
| `docs/` | Documentos de estratégia, análises, investigação |
| `blogs/` | Rascunhos de artigos de blog |
| `entities/` | Entidades de conhecimento reutilizáveis - pessoas, projetos, produtos, iniciativas |

As pastas `docs/` e `blogs/` que eu mantinha no repositório git foram movidas para o vault. Os mesmos ficheiros, mas agora pesquisáveis através do Obsidian, ligáveis via wikilinks e acessíveis no telemóvel através do iCloud. Uma única fonte de verdade em vez de duas.

## O CLI do Obsidian

Foi aqui que ficou interessante. O Obsidian vem com um CLI integrado em `/Applications/Obsidian.app/Contents/MacOS/obsidian`. Fiz o que faço com cada nova ferramenta agora - o padrão de passo zero dos capítulos anteriores: apontar o Claude para a ferramenta e dizer "explora isto, documenta o que encontrares no `CLAUDE.md`."

O Claude percorreu a árvore de comandos, testou subcomandos e mapeou as capacidades. O resultado: duas formas complementares de interagir com o vault.

**Acesso direto a ficheiros** trata de leituras e escritas - rápido e simples. Mas o CLI adiciona queries estruturadas que operações de sistema de ficheiros não conseguem fazer:

```bash
# Full-text search across the vault
obsidian search "launch plan" --vault nexus

# Find what links to any note
obsidian backlinks "Project Alpha" --vault nexus

# Read/write YAML frontmatter programmatically
obsidian properties get "tasks/review-api.md" --vault nexus

# List and query tags across all notes
obsidian tags --vault nexus

# List and filter tasks
obsidian tasks --vault nexus --status open
```

Sistema de ficheiros para velocidade, CLI para relações. A combinação significa que o Claude consegue tanto ler o conteúdo de um ficheiro como compreender o seu lugar no grafo de conhecimento mais amplo.

## Entidades: O Grafo de Conhecimento

Este é o centro conceptual de toda a configuração.

A pasta `entities/` usa uma convenção simples: cada entidade tem o seu próprio ficheiro markdown com frontmatter em YAML para metadados e wikilinks para ligações. Os tipos de entidade incluem pessoas, produtos, projetos, equipas, iniciativas e conceitos. Cada tipo tem a sua própria subpasta.

Eis o aspeto de uma entidade:

```yaml
---
type: product
tags: [platform, ai, agents]
---
# Project Alpha

Internal AI assistant. Started as a CLI tool,
expanding to web and desktop surfaces.

Related: [[Platform Team]], [[Desktop App]], [[MCP]]
```

Simples, mas o poder está no efeito de rede. Cada wikilink é uma ligação bidirecional. Quando crio uma nota de reunião que menciona `[[Project Alpha]]`, ela aparece automaticamente nos backlinks do Project Alpha. Quando uma tarefa referencia `[[Platform Team]]`, é descobrível a partir da página da entidade da equipa. O grafo constrói-se sozinho.

Criei a skill `/entities` para automatizar a extração. Ela analisa o conteúdo do vault - `CLAUDE.md` (listas de equipa), `roadmap.md` (epics, responsáveis), transcrições de reuniões (pessoas referenciadas), tarefas (referências a entidades) - e cria ficheiros de entidade estruturados para tudo o que encontra.

A primeira extração produziu **39 entidades** em seis subpastas:

```
entities/
  _index.md              # Master index
  people/                # 20 people
  products/              # 10 products
  projects/              # 2 active projects
  teams/                 # 1 team
  initiatives/           # 2 strategic initiatives
  concepts/              # 3 technical concepts
```

Quando abri a vista de grafo do Obsidian, as ligações apareceram imediatamente - quem trabalha em que produto, que iniciativas abrangem que equipas, que conceitos sustentam que projetos. Informação que sempre esteve implícita nos meus documentos, agora explícita e navegável.

Cada novo documento que entra no vault e usa wikilinks junta-se a esta rede automaticamente. O grafo torna-se mais denso e mais útil ao longo do tempo sem qualquer esforço de manutenção.

## Gestão de Tarefas e Kanban

No capítulo um, assinalei uma lacuna: "Nem tudo é um epic de roadmap. Tenho todos pessoais... Estes não pertencem a issues do GitHub." Três capítulos depois, finalmente fechei essa lacuna.

O sistema é um ficheiro por tarefa, com frontmatter estruturado:

```yaml
---
status: todo
priority: high
source: slack
due: 2026-03-20
entities: ["[[Project Alpha]]", "[[Sarah Chen]]"]
---
# Review launch plan feedback

## Description
Review and address Sarah's feedback on the Project Alpha launch plan.

## Output
Updated launch plan with resolved comments.

## Context
From 1:1 with [[Sarah Chen]] on 2026-03-17.
```

Cada ficheiro de tarefa tem um estado, prioridade, origem (de onde veio a ação), data limite e entidades ligadas. O formato inclui o que "feito" significa e de onde a tarefa surgiu - estrutura suficiente para ser útil, mas não tanta que criar uma tarefa se torne pesado.

Para visualização, instalei o plugin da comunidade Obsidian Kanban via CLI:

```bash
obsidian plugin:install id=obsidian-kanban enable
```

Quatro colunas: **Todo**, **Doing**, **Done**, **Dropped**. Os cartões são wikilinks para ficheiros de tarefa, por isso clicar num cartão abre o detalhe completo. O quadro kanban tornou-se no dashboard diário que nunca tive - uma vista única de tudo o que preciso de fazer, vindo de todos os sítios onde trabalho.

## Granola: Transcrições de Reuniões

A última fonte de input foram as reuniões. Instalei o Granola - uma ferramenta de transcrição de reuniões - e o plugin granola-to-obsidian. O pipeline é simples: o Granola grava e transcreve reuniões, o plugin exporta automaticamente as transcrições para a pasta `meetings/` no vault.

Agora cada reunião é pesquisável. O Claude consegue ler transcrições, extrair ações, encontrar quem disse o quê e cruzar discussões com entidades existentes. Uma conversa sobre o lançamento de um produto numa reunião 1:1 liga-se naturalmente à entidade do produto e à entidade da pessoa. A transcrição torna-se parte do grafo de conhecimento no momento em que chega ao vault.

O pipeline real é este: **transcrições > entidades > tarefas > kanban**. A reunião acontece, a transcrição aparece no vault, as referências a entidades ligam-na ao grafo, as ações são extraídas para ficheiros de tarefa, os ficheiros de tarefa aparecem no quadro kanban. Cada passo é automatizado ou está a um comando de distância.

## Executar o /pm-task a Sério

Foi aqui que tudo se juntou.

A skill `/pm-task` analisa quatro fontes à procura de ações: Slack, Email, Calendar e notas de reunião do Granola. Lê a atividade recente, identifica tudo o que pareça uma tarefa ou compromisso, apresenta candidatos para revisão e cria ficheiros de tarefa mais cartões kanban após confirmação.

Executei-a contra um dia normal de atividade - mensagens recentes do Slack, emails não lidos, calendário do dia e algumas transcrições do Granola. Extraiu **8 tarefas** e adicionou-as ao quadro kanban. Cada uma tinha as ligações de entidade corretas, contexto de origem e prioridade. Ignorou corretamente o ruído - mensagens informativas, threads resolvidas, emails de marketing, convites de calendário informativos. Sinal entra, ruído fica de fora.

Quatro fontes de input canalizadas através de uma skill para ficheiros de tarefa estruturados com ligações de entidade e visualização kanban. O tipo de extração de tarefas multi-fonte que levaria trinta minutos de análise manual aconteceu em cerca de vinte segundos.

## O Que Mudou

A tabela de integrações agora tem este aspeto:

| Ferramenta | Método | O Que Faz |
|------|--------|-------------|
| GitHub | `gh` CLI | Issues, epics, gestão de projetos |
| Notion | MCP | Specs de produto e documentação |
| Snowflake | `snow` CLI | Queries ao data warehouse |
| Google Workspace | `gws` CLI | Calendar, Docs, Sheets, Gmail |
| Slack | MCP Plugin | Pesquisar, ler e enviar mensagens |
| **Obsidian** | **Filesystem + CLI** | **Grafo de conhecimento, tarefas, entidades, vault** |
| **Granola** | **Plugin Obsidian** | **Transcrições de reuniões** |

Sete integrações agora. Mas este capítulo não foi realmente sobre adicionar mais duas linhas à tabela.

O que realmente mudou: um caminho de vault no `CLAUDE.md`. Duas novas skills - `/pm-task` e `/entities`. Trinta e nove entidades extraídas e ligadas. Oito tarefas extraídas de quatro fontes diferentes. Um quadro kanban que não existia antes. E por baixo de tudo isto, um grafo de conhecimento que se torna mais denso cada vez que o Claude toca no vault.

## O Que Vem a Seguir

O Obsidian lançou recentemente o Bases - vistas de base de dados estruturadas que consultam notas usando propriedades do frontmatter. Isso poderia transformar o sistema de entidades em algo mais próximo de uma verdadeira base de dados relacional. Também quero encaminhar os ficheiros de memória do próprio Claude Code para o vault, para que a sua memória persistente e o grafo de conhecimento se fundam num único sistema. E o item no topo do quadro kanban: construir o protótipo de roadmap AI-native.

Mas a tese deste capítulo não é sobre o que vem a seguir. É que a lacuna nunca foram mais inputs - foi construir a camada que faz todos os inputs acumularem-se. Os capítulos um a três ligaram o Claude Code ao mundo. Este capítulo deu-lhe um sítio para se lembrar do que encontrou.

Acesso mais memória. Esse é o verdadeiro efeito composto.
