---
title: "Gerir Produto com o Claude Code: Capítulo 2 - Dados"
summary: "Como adicionar o Snowflake CLI ao Claude Code o transformou num analista de dados para PMs - a executar queries SQL, comparar retenção entre versões do produto e a dar sentido a dados confusos rapidamente."
description: "Como adicionar o Snowflake CLI ao Claude Code o transformou num analista de dados para PMs - a executar queries SQL, comparar retenção entre versões do produto e a dar sentido a dados confusos rapidamente."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Snowflake", "data analysis"]
series: ["PMing with Claude Code"]
series_order: 2
date: 2026-02-26
draft: false
---

No primeiro capítulo, escrevi sobre como configurar o Claude Code como centro de comando de um PM - issues do GitHub, documentos do Notion, ficheiros de estratégia locais, tudo ligado através de um terminal. A maior lacuna que apontei? Dados. Estava a exportar CSVs manualmente do Looker ou do Sigma e a deixá-los numa pasta. Funcionava, mas criava atrito. Essa lacuna está agora fechada.

## A Peça que Faltava: Acesso SQL

O problema nunca foi o Claude não conseguir analisar dados. Dá-lhe um CSV e ele encontra padrões, resume tendências, esboça observações. O problema era fazer chegar os dados ao Claude. Sempre que precisava de números atualizados, tinha de abrir o browser, navegar até um dashboard, exportar um ficheiro, movê-lo para o workspace. Quando o Claude finalmente tinha os dados, eu já tinha gasto cinco minutos em algo que deveria demorar cinco segundos.

A solução era óbvia em retrospetiva: dar ao Claude acesso direto ao data warehouse. Os nossos dados analíticos vivem no Snowflake, e o Snowflake tem um CLI. (Obrigado por isto, Abhi!)

## Configurar o Snowflake CLI

O [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index) (`snow`) é uma ferramenta de linha de comandos para interagir com o Snowflake. Instala-se, configura-se uma ligação e pode-se executar queries SQL diretamente a partir do terminal. O que significa que o Claude também as pode executar.

A configuração da ligação fica em `~/.snowflake/connections.toml`:

```toml
[my_org]
account = "your-account"
user = "your-user"
authenticator = "externalbrowser"
role = "ROLE_READONLY"
warehouse = "your-warehouse"
```

Algumas notas importantes. O autenticador `externalbrowser` significa que a autenticação passa pelo SSO da empresa. Autentica-se uma vez no browser e a sessão persiste. Sem API keys ou passwords em ficheiros de configuração. E o role é apenas de leitura. O Claude pode consultar dados mas não pode modificar nada. A mesma filosofia das permissões do GitHub do primeiro capítulo: dar à ferramenta exatamente o acesso de que precisa, nada mais.

Uma vez configurada a ligação, executar uma query é um único comando:

```bash
snow sql -c my_org -q "SELECT COUNT(*) FROM my_table" --format json
```

Depois pedi ao Claude para explorar e documentar no `CLAUDE.md` algumas das tabelas, schemas e padrões de queries comuns. Feito isso, discuti alguns detalhes sobre valores calculados para que os considerasse nas queries SQL. O Claude acabou por documentar algo assim:

```markdown
## Snowflake Access
- CLI: `snow sql -c my_org -q "..." --format json`
- Role: read-only
- Key tables:
  - `MARTY.ENTITIES.L3_DIM_MOBIULE>__USER` - User dimension
  - `PREP.AI_SERVICE.L1_AI_TRACE` - API event traces
- The ATTRIBUTES column is a JSON variant with: username,
  planName, model, origin, gordonTag, token counts, cost, etc.
```

Este é o mesmo padrão do primeiro capítulo. O `CLAUDE.md` dá ao Claude o contexto necessário para escrever queries corretas sem eu ter de explicar o schema de cada vez. E não é preciso escrevê-lo - pode-se pedir ao Claude para capturar a informação que se quiser.

## A Análise de Retenção

Foi aqui que ficou interessante. Precisava de perceber a retenção na primeira semana do nosso assistente de IA ao longo de cinco versões diferentes do produto. Cada versão tinha sido lançada com funcionalidades diferentes, UX diferente, fluxos de onboarding diferentes. A pergunta era simples: qual versão reteve melhor os utilizadores nos primeiros sete dias?

No fluxo de trabalho antigo, isto teria levado dias de trabalho e dependências com outras equipas. Abrir o Snowflake, descobrir que tags de versão correspondem a que lançamentos, escrever a query de cohort, executá-la, exportá-la, ficar a olhar para uma folha de cálculo, tentar identificar o padrão. Ou pedir a um analista de dados e esperar que a fila dele ficasse livre.

Com o Claude, descrevi o que precisava em linguagem natural:

> "Compare week 1 retention for Gordon across the last 5 major versions."

O Claude já conhecia o schema a partir do `CLAUDE.md`. Sabia que o `gordonTag` identifica a versão do produto, que o `EVENT_TIMESTAMP` regista quando os eventos aconteceram, e sabia como identificar utilizadores. Escreveu o SQL, executou-o através do Snowflake CLI, obteve os resultados e formatou-os numa tabela comparativa.

E em menos de 5 minutos tinha os meus resultados...

## No que é Bom (e no que Não é)

Deixem-me ser claro sobre o que isto substitui e o que não substitui.

**Não constrói dashboards.** Se precisam de uma visualização persistente e partilhável que se atualiza diariamente, continuam a querer o Looker, o Sigma ou o que a vossa equipa usar. O Claude responde a perguntas. Não cria infraestrutura de monitorização.

**Não substitui a vossa equipa de dados.** Modelação de dados complexa, trabalho de pipelines, otimização de warehouses - isso é trabalho de engenharia. O Claude está a executar queries ad-hoc contra tabelas existentes, não a construir novos modelos de dados.

**O que faz é reduzir o tempo entre pergunta e resposta.** O fluxo de trabalho de um PM sempre teve este bottleneck: pensa-se numa pergunta, descobre-se onde estão os dados, escreve-se ou pede-se uma query, espera-se pelos resultados, interpretam-se, pensa-se numa pergunta de seguimento, e o ciclo repete-se. Cada ciclo pode demorar minutos ou dias, dependendo de se consegue ser autónomo ou não.

Com Claude + Snowflake CLI, o ciclo é conversacional. Pergunta, query, resultado, seguimento - tudo na mesma sessão de terminal, tudo em segundos. A velocidade muda a forma como se trabalha. Fazem-se mais perguntas. Exploram-se mais hipóteses. Detetam-se coisas que se teriam perdido porque o custo de verificar é tão baixo.

## O Efeito Composto

O verdadeiro poder não está em nenhuma integração isolada. Está na combinação. Numa única conversa, o Claude pode:

1. Consultar as últimas issues do GitHub para ver o que foi lançado em cada versão
2. Fazer queries ao Snowflake para obter dados de retenção dessas versões
3. Pesquisar no Notion as decisões de produto por trás de cada lançamento
4. Cruzar tudo e redigir um resumo

São quatro ferramentas, quatro fontes de dados diferentes, sintetizadas numa conversa. O contexto mantém-se ao longo da sessão. Quando o Claude descobre que a versão X teve uma queda na retenção, pode imediatamente consultar as issues do GitHub para ver o que mudou nesse lançamento e depois procurar o documento no Notion para perceber o raciocínio. Sem trocar de separadores, sem copiar dados entre ferramentas.

É isto que quis dizer no primeiro capítulo quando falei do Claude como hub de fluxo de trabalho, e não apenas como assistente de IA. Cada nova integração multiplica o valor de todas as existentes.

## Configuração Atualizada

Para referência, eis como o workspace se apresenta agora:

```
pm-workspace/
├── CLAUDE.md                # Workflow conventions, templates, Snowflake schemas
├── .claude/
│   └── settings.local.json  # Permissions: gh, snow sql, MCP servers
├── docs/                    # Strategy docs, analysis, specs
├── data_reports/            # Exported data (still useful for large datasets)
└── roadmap.md               # Living roadmap document
```

E as permissões cresceram:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)",
      "Bash(snow sql*)"
    ]
  }
}
```

Uma linha nova. Foi tudo o que foi preciso para passar de "exportar CSVs manualmente" para "pedir ao Claude para consultar o warehouse diretamente."

## Próximos Passos

A pasta `data_reports/` não ficou obsoleta. Para grandes volumes de dados ou visualizações complexas, a exportação continua a fazer sentido. Mas para as perguntas diárias de um PM - "como está a tendência de retenção?", "qual é a distribuição de utilização por plano?", "quantos utilizadores usaram esta funcionalidade na última semana?" - já não abro o browser.

As lacunas restantes do primeiro capítulo estão a diminuir. O Notion está ligado via MCP. O GitHub está ligado via CLI. O Snowflake está ligado via CLI. Os que ainda faltam: Google Docs (ainda sem MCP), Slack (existe MCP mas ainda não o configurei) e integrações de calendário. Cada um que adiciono torna todo o sistema mais útil.

Se são PMs com acesso a um data warehouse com CLI, esta é a integração com maior alavancagem que podem adicionar à vossa configuração do Claude Code. As queries que o Claude escreve nem sempre são perfeitas à primeira. Mas o ciclo de iteração é tão rápido que não importa. Três queries imperfeitas em trinta segundos batem uma query perfeita que demora uma hora a escrever.

O objetivo não é a perfeição. É a rapidez até ao insight.
