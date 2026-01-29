---
title: "Gerir Produto com o Claude Code"
summary: "Como configurei o Claude Code como o meu centro de comando de PM - ligando issues do GitHub, documentos do Notion e assistência de IA num único fluxo de trabalho."
description: "Como configurei o Claude Code como o meu centro de comando de PM - ligando issues do GitHub, documentos do Notion e assistência de IA num único fluxo de trabalho."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow"]
date: 2026-01-28
draft: false
---

A maioria das ferramentas de IA são construídas para programadores. Copilotos que completam código automaticamente, agentes que escrevem testes, assistentes que fazem debug de erros. Mas o trabalho de PM - acompanhar roadmaps, escrever especificações, consultar issues, sintetizar notas de reuniões - está igualmente maduro para assistência de IA. O desafio é que o trabalho de PM abrange tantas ferramentas: GitHub para issues, Notion para documentos, folhas de cálculo para priorização, Slack para contexto. Nenhuma ferramenta de IA as liga todas.

Até eu começar a fazer o meu trabalho de PM no Claude Code.

## Porquê o Claude Code para PM?

O Claude Code é o assistente de programação baseado em CLI da Anthropic. Funciona no terminal, o que pode parecer uma escolha estranha para um PM... Mas oiçam-me. Primeiro, vive onde passo uma parte relevante do meu tempo. Estou constantemente no terminal - a correr comandos git, a verificar deployments, a ver logs quando faço debug com engenheiros. Ter o Claude disponível no mesmo contexto significa que não mudo de contexto entre ferramentas para alguns desses casos de uso.

Segundo, o sistema [MCP (Model Context Protocol)](https://modelcontextprotocol.io) permite ao Claude Code ligar-se a ferramentas externas. GitHub, Notion, Linear, Slack - se existe um servidor MCP para isso, o Claude Code consegue consultá-lo. Isto transforma um simples assistente de IA num verdadeiro hub de fluxo de trabalho.

Terceiro, se não existe servidor MCP, ainda posso usar comandos shell para me ligar a qualquer ferramenta com CLI. O GitHub CLI (`gh`) é perfeito para trabalho de PM. O Claude consegue executar comandos `gh` para listar issues, ver detalhes, criar novos itens e mais. Isto dá-me acesso de leitura e escrita às minhas issues do GitHub diretamente a partir do Claude.

Quarto, o ficheiro `CLAUDE.md` dá ao Claude contexto persistente sobre como trabalho. As minhas convenções, os meus templates, as minhas preferências. Cada conversa começa com o Claude já a conhecer o meu fluxo de trabalho.

E finalmente, o sistema de permissões mantém tudo seguro. Controlo exatamente quais comandos o Claude pode executar, quais APIs pode chamar. Sem surpresas.

## A Configuração

O meu workspace de PM é uma estrutura de repositório simples:

```
pm-workspace/
├── CLAUDE.md                # Convenções de fluxo de trabalho e templates
├── .claude/
│   └── settings.local.json  # Permissões e configuração MCP
├── docs/                    # Documentos de estratégia, análise, especificações
├── data_reports/            # Dados de analytics exportados manualmente
└── roadmap.md               # Documento de roadmap vivo
```

A filosofia é documentação primeiro, com o GitHub como fonte de verdade para execução - é o que a minha equipa usa para acompanhar trabalho, não seria muito diferente para Jira, Notion, Linear, etc. O repositório contém os meus documentos de trabalho - documentos de estratégia, análises escritas, tudo o que quero que o Claude tenha contexto. O GitHub guarda as issues e o acompanhamento de projeto. O Notion tem a base de conhecimento de formato mais longo. E quando preciso de contexto de analytics, dados exportados ficam em `data_reports/`.

O ficheiro `CLAUDE.md` é onde a magia acontece. Contém as minhas convenções:

```markdown
# PM Workflow

## Source of Truth
- **GitHub:** All epics and issues live in the main repo
- **Notion:** PRDs, meeting notes, decision logs
- **Local docs:** Strategy documents in `/docs/`
- **Data:** Exported analytics in `/data_reports/`

## Conventions
- Epics use the `Epic` issue type
- Streams are tracked via labels
- Quarterly goals tagged with `Q1-2026`, `Q2-2026`, etc.

## Useful Commands
- List open epics: `gh api graphql -f query='...'` (full query below)
- View epic details: `gh issue view <number>`
- Sync roadmap: Pull latest epic status and update roadmap.md

## Templates
When creating roadmap items, use this structure:
- Problem: What user problem are we solving?
- Solution: High-level approach
- Success metrics: How do we know it worked?
- Dependencies: What blocks this?

## Documentation Index
| File | Description |
|------|-------------|
| `docs/strategy.md` | Product strategy and vision |
| `docs/analysis.md` | Research and data analysis |
```

Este ficheiro carrega automaticamente cada vez que inicio o Claude Code neste diretório. O Claude já sabe como nomeio as coisas, onde encontrar informação e que formato espero.

## Ligar as Ferramentas

### Integração com GitHub CLI

O GitHub CLI (`gh`) é a espinha dorsal da minha configuração. O Claude Code consegue executar comandos shell, por isso configuro permissões para permitir operações específicas do GitHub:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)"
    ]
  }
}
```

Isto concede ao Claude acesso de leitura e escrita a issues e projetos, mas nada mais. Sem fazer push de código, sem gerir releases, sem tocar em nada fora do fluxo de trabalho de PM.

Com esta configuração, posso perguntar ao Claude coisas como:

- "Mostra-me todos os epics abertos para Q1"
- "Qual é o estado do epic de autenticação?"
- "Cria uma nova issue para o redesign do dashboard"
- "Lista todas as issues que bloqueiam o lançamento mobile"
- "Algum comentário aberto da equipa que precise de resposta?"

O Claude traduz a minha linguagem natural para os comandos `gh` certos, executa-os e resume os resultados. Para queries mais complexas, pode usar a API GraphQL do GitHub:

```bash
gh api graphql -f query='
  query {
    repository(owner: "myorg", name: "myrepo") {
      projectV2(number: 1) {
        items(first: 50) {
          nodes {
            content { ... on Issue { title state } }
            fieldValues(first: 10) { nodes { ... on ProjectV2ItemFieldSingleSelectValue { name } } }
          }
        }
      }
    }
  }
'
```

Não tenho de memorizar esta sintaxe. Apenas pergunto "o que está no quadro de projeto do Q1?" e o Claude descobre a query.

### Notion MCP

Para documentos de formato mais longo - PRDs, notas de reuniões, registos de decisões - uso o Notion. O Claude Code suporta servidores MCP, que são serviços externos que estendem as suas capacidades. O servidor MCP do Notion dá ao Claude acesso de leitura ao meu workspace:

```json
{
  "mcpServers": {
    "notion": {
      "type": "url",
      "url": "https://mcp.notion.com/sse"
    }
  }
}
```

Com isto ligado, posso pedir ao Claude para pesquisar no meu workspace do Notion por contexto. "O que decidimos sobre o modelo de preços?" ou "Encontra o PRD para notificações de utilizador" ou "Resume os últimos três syncs de produto."

O poder está na combinação. O Claude consegue consultar o GitHub para estado de issues, depois cruzar referências com documentos do Notion para contexto, depois ajudar-me a redigir uma atualização que referencia ambos. Uma ferramenta, múltiplas fontes.

## O Fluxo de Trabalho na Prática

Eis como é um dia típico:

**Preparação matinal.** Abro o Claude Code e pergunto: "Que issues foram fechadas ontem? Algum bug novo reportado?" O Claude consulta o GitHub, resume a atividade, e tenho os meus pontos de conversa para o standup em trinta segundos.

**Sincronização do roadmap.** "Sincroniza o roadmap do GitHub - obtém o estado mais recente de todos os epics abertos." O Claude executa a query GraphQL do meu `CLAUDE.md`, puxa o estado atual, assignees e milestones, depois atualiza o `roadmap.md` com dados frescos. O documento de roadmap mantém-se sincronizado com o GitHub sem eu verificar manualmente cada issue.

**Contexto de estratégia.** "Qual é a nossa abordagem no trabalho de infraestrutura da plataforma?" O Claude lê o documento de estratégia relevante da minha pasta `docs/` e resume os pontos-chave. Quando preciso de referenciar uma decisão ou lembrar-me do raciocínio por trás de uma direção, é instantâneo.

**Análise de dados.** Exporto um CSV - métricas de engagement de utilizadores do último trimestre - e coloco-o em `data_reports/`. "Analisa os dados de engagement e resume as tendências." O Claude lê o ficheiro, identifica padrões e redige observações. Não é tão fluido como uma integração direta, mas funciona.

**Escrever especificações.** Começo com uma ideia aproximada: "Preciso de um item de roadmap para o novo fluxo de onboarding." O Claude conhece o meu template do `CLAUDE.md`, por isso faz as perguntas certas - qual é o problema, quem é afetado, qual é o âmbito - e redige um documento estruturado. Eu edito, refino, e quando está pronto, digo ao Claude para criar o epic no GitHub.

**Procurar contexto.** "O que decidimos sobre rate limiting?" O Claude pesquisa no Notion por notas de reuniões e documentos de decisão, encontra a discussão relevante e resume o resultado. Acabou-se o escavar meses de notas.

**Fim de semana.** "Redige um resumo do que foi lançado esta semana para a atualização aos stakeholders." O Claude consulta issues fechadas, agrupa-as por stream e redige um resumo legível. Eu revejo, ajusto o enquadramento e envio.

Os templates no `CLAUDE.md` garantem output consistente. Quando peço um item de roadmap, segue sempre a mesma estrutura. Quando peço um resumo semanal, inclui sempre as mesmas secções. Consistência sem o tédio.

## O Que Ainda Falta

A configuração não está completa. Algumas lacunas que estou ativamente a contornar:

**Ferramentas de dados.** Vivo no Looker e Sigma para analytics - métricas de utilização, dados de funil, análise de coortes. Não há MCP para nenhum deles. Quando preciso que o Claude ajude a analisar dados ou escreva um resumo que inclua métricas, exporto manualmente CSVs para uma pasta `data_reports/` no meu workspace. Funciona, mas é fricção. Cada vez que quero dados frescos, estou de volta ao browser a clicar em botões de exportar.

**Google Docs.** Muito trabalho cross-funcional acontece no Google Docs - especificações partilhadas, PRDs colaborativos, comentários de stakeholders. Também não há MCP aqui. Mesma solução: exportar para markdown ou PDF, colocar no workspace. O Claude consegue ler, mas é um snapshot, não uma ligação em tempo real.

**Gestão de tarefas.** Nem tudo é um epic de roadmap. Tenho todos pessoais - "fazer follow up com design sobre os mockups," "rever a proposta de API," "preparar perguntas para a chamada com o cliente." Estas não pertencem às issues do GitHub. Ainda estou a descobrir a melhor forma de as acompanhar. Neste momento vivem num ficheiro markdown simples, mas adoraria uma integração mais apertada - talvez um MCP de Linear ou Todoist que o Claude pudesse consultar e atualizar.

O ecossistema MCP está a crescer rapidamente. Slack, Linear, integrações de calendário estão todas a emergir. Mas por agora, o fluxo de trabalho de exportação manual é uma ponte necessária para ferramentas que ainda não têm ligações nativas.

## O Que Está a Funcionar

Os fluxos de trabalho com muita leitura são onde o Claude brilha. Consultar issues, pesquisar documentos, resumir estado - estas coisas costumavam levar-me dez minutos a clicar por todo o lado, agora levam trinta segundos. Os fluxos de trabalho com muita escrita precisam de mais julgamento humano. O Claude consegue redigir uma especificação, mas ainda preciso de pensar na estratégia.

A combinação de GitHub + Notion + documentos locais cobre a maior parte do meu trabalho diário. Quando preciso de contexto de analytics, a exportação manual adiciona um passo, mas uma vez que os dados estão no workspace, o Claude lida bem com eles.

A visão maior é IA como copiloto de PM, não substituto. O Claude não toma decisões de produto. Não fala com clientes nem negoceia com stakeholders nem sente a intuição de que algo está errado. Mas lida com as partes mecânicas do trabalho - consultar, formatar, pesquisar, redigir - para que eu me possa focar nas partes que realmente requerem julgamento humano.

Se és um PM curioso sobre ferramentas de IA, experimenta o Claude Code. Configura um workspace simples, liga o GitHub, adiciona as tuas convenções ao `CLAUDE.md`, e vê como encaixa no teu fluxo de trabalho. Não se trata de substituir as tuas ferramentas existentes. Trata-se de adicionar uma camada de inteligência que as liga todas.

E se construíres algo interessante, partilha a tua configuração. Adoraria ver como outros PMs estão a usar isto.
