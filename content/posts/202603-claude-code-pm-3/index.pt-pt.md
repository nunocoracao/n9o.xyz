---
title: "PMing com Claude Code: Capítulo 3 - Modo Deus"
summary: "Ligar o Google Workspace e o Slack ao Claude Code fechou o ciclo. Agendar reuniões, editar documentos, dashboards em Sheets e pesquisa no Slack - tudo a partir de um terminal."
description: "Ligar o Google Workspace e o Slack ao Claude Code fechou o ciclo. Agendar reuniões, editar documentos, dashboards em Sheets e pesquisa no Slack - tudo a partir de um terminal."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Google Workspace", "Slack", "integrations"]
series: ["PMing with Claude Code"]
series_order: 3
date: 2026-03-05
draft: false
---

No final do capítulo dois, listei as lacunas que faltavam: Google Docs, Slack e calendário. Fechei as três numa única sessão. E algures no meio de ver o Claude verificar a disponibilidade de quinze pessoas, criar um convite de calendário, corrigir um erro de preços num Google Doc em produção e construir um dashboard com múltiplos separadores em Sheets - tudo sem eu abrir um browser - percebi que a configuração tinha ultrapassado um limiar. Isto já não é um assistente de IA. É uma sala de controlo.

## Google Workspace: O CLI gws

O ecossistema da Google sempre foi o mais difícil de ligar a qualquer coisa. Existem APIs para tudo, mas a autenticação é dolorosa e a superfície de ataque é enorme. Depois a Google lançou algo que mudou tudo - publicaram um CLI oficial para toda a suite Workspace. Anunciado a 2 de março, escrito em Rust, open-source sob licença Apache 2.0. Encapsula toda a superfície da API do Google Workspace, construída dinamicamente a partir do Discovery Service da Google. Gmail, Calendar, Drive, Docs, Sheets, Slides, Tasks, Chat, Admin - tudo através de uma única ferramenta de linha de comandos. Vem até com suporte para servidor MCP e mais de 100 skills pré-construídas para agentes.

{{< github repo="googleworkspace/cli" >}}

### Configuração

A instalação é feita via npm (inclui binários nativos pré-compilados, não é necessário o toolchain do Rust), ou podes obter um binário dos GitHub Releases ou compilar a partir do código-fonte com Cargo:

```bash
npm install -g @googleworkspace/cli
```

Depois há um comando de configuração guiada que te orienta pela configuração do projeto GCP:

```bash
gws auth setup     # walks you through Google Cloud project config
gws auth login     # subsequent OAuth login
```

Há um pré-requisito que te pode apanhar desprevenido: precisas de um projeto Google Cloud com OAuth configurado. O CLI gws autentica-se através do GCP, portanto sem um projeto e ecrã de consentimento OAuth configurado, não vais a lado nenhum. Felizmente, a minha equipa já tinha um projeto GCP interno que pude usar, por isso não tive de criar um do zero. Bastou configurar o ecrã de consentimento OAuth e depois ativar as APIs específicas que queria usar - Calendar, Gmail, Drive, Docs, Sheets - através da Google Cloud Console. Se estiveres a começar do zero, são mais 15 minutos a clicar em ecrãs de configuração do GCP. Não é difícil, só tedioso.

Uma vez configurado o OAuth, o fluxo de autenticação abre um browser para início de sessão Google. A sessão persiste depois disso. Mas certifica-te de que ativas todas as APIs que planeias usar - se falhares uma, vais obter erros de permissão crípticos que não te dizem claramente o que falta.

### Passo Zero: Deixar o Claude Aprender a Ferramenta

Antes de começar a usar qualquer coisa disto, fiz algo que me poupou horas a longo prazo. Disse ao Claude para explorar o CLI gws por conta própria - executar `gws --help`, investigar os subcomandos, experimentar coisas - e documentar tudo o que aprendeu no `CLAUDE.md`. O Claude percorreu a árvore de comandos, descobriu os padrões de cada serviço (Calendar, Docs, Sheets, Drive, Gmail), anotou as flags comuns e formatos de parâmetros, e escreveu tudo.

Este é o passo zero para cada nova integração de ferramenta. Não tentes documentar manualmente o CLI. Não escrevas uma cheat sheet. Aponta o Claude para a ferramenta e diz "aprende isto, escreve o que encontrares." O resultado é uma referência perfeitamente adaptada à forma como o Claude vai realmente usar a ferramenta - porque o Claude a escreveu para si próprio.

Depois dessa exploração, o Claude conhecia comandos como:

```bash
# Check today's calendar
gws calendar +agenda --today --format table

# Read a Google Doc
gws docs documents get --params '{"documentId": "DOC_ID"}'

# Update a Google Doc
gws docs documents batchUpdate ...

# Push data to a Google Sheet
gws sheets spreadsheets values update ...

# Create a calendar event
gws calendar events insert ...
```

O mesmo padrão do Snowflake no capítulo dois. O mesmo padrão do GitHub no capítulo um. O padrão é que interessa: instalar a ferramenta, deixar o Claude explorá-la, documentar as descobertas no `CLAUDE.md`, e cada sessão futura começa com contexto completo.

A esta altura, o meu `CLAUDE.md` tornou-se num documento de referência sério. Não é algo que me sentei a escrever - acumulou-se organicamente à medida que o Claude explorava cada ferramenta e eu adicionava contexto pelo caminho. Tem schemas de tabelas do data warehouse com descrições de colunas e fórmulas de valores calculados. Estrutura de repos GitHub com padrões de queries GraphQL para epics e tarefas. Índices de páginas Notion para que o Claude possa ir buscar a spec de produto certa sem eu andar à procura de URLs. Listas de equipa extraídas de convites de calendário. Referências de comandos CLI para cada ferramenta integrada. Configurações de ligação e notas de autenticação.

Lê-se como um manual de operações que ninguém se daria ao trabalho de escrever à mão. Mas como o Claude o escreve para si próprio à medida que avança, o manual constrói-se sozinho. E cada nova conversa começa com todo esse contexto carregado. O Claude não pergunta "qual é o schema do teu data warehouse?" ou "onde encontro as specs de produto?" - já sabe.

## Slack: O Plugin Integrado

O Slack foi mais fácil do que esperava. O Claude Code tem um plugin Slack integrado que fornece ferramentas MCP para pesquisar, ler e enviar mensagens.

```
/install-slack-app    # Install the Slack app
                      # Complete authorization in browser
/mcp                  # Connect to the plugin (may need a second attempt)
```

Uma vez ligado, tens um conjunto de ferramentas que cobrem as operações principais do Slack: pesquisar mensagens em canais públicos, ler threads, ler histórico de canais por intervalo de datas, enviar mensagens, encontrar utilizadores e ver perfis. Não é a API completa do Slack, mas é exatamente a superfície que um PM realmente precisa.

## Caso de Uso 1: Encontrar a Minha Equipa pelo Calendário

Eis um cenário que acontece constantemente. Precisas da lista da tua equipa - não a versão do organograma, mas os humanos reais que aparecem nas tuas reuniões recorrentes. As pessoas na sala.

Pedi ao Claude para procurar a minha reunião semanal de sync da equipa e extrair os participantes. Consultou a API do Calendar, encontrou o evento e extraiu quinze pessoas com os seus endereços de email. Depois mandei-o guardar a lista no `CLAUDE.md` para que cada sessão futura soubesse da minha equipa sem eu ter de a explicar novamente.

Isto é uma coisa pequena que se acumula. Sempre que o Claude precisa de agendar algo, verificar disponibilidade ou referenciar um colega, já sabe com quem está a trabalhar.

## Caso de Uso 2: Agendar uma Reunião

Este surpreendeu-me pelo quão bem funcionou.

Precisava de agendar uma reunião na segunda-feira à tarde com toda a minha equipa - as quinze pessoas - para rever um documento de estratégia em conjunto. No fluxo normal, abriria o Google Calendar, olharia para os slots da tarde, verificaria manualmente se as pessoas importantes estão livres, desistiria de verificar as quinze, escolheria um horário que parecesse razoável e esperaria pelo melhor.

Em vez disso, disse ao Claude para encontrar um slot livre na segunda à tarde para toda a equipa. Ele:

1. Listou o meu calendário de segunda à tarde para identificar slots disponíveis
2. Consultou a API freebusy para os quinze membros da equipa simultaneamente
3. Identificou que quatro pessoas tinham conflitos no slot que eu preferia
4. Reportou quem estava ocupado e quando
5. Criou o convite via `events insert` com um link para o documento na descrição

Os convites foram enviados automaticamente. A coisa toda demorou talvez trinta segundos. Só a verificação de disponibilidade ter-me-ia levado dez minutos a clicar em calendários individuais - e provavelmente teria desistido depois de verificar cinco pessoas.

## Caso de Uso 3: Editar um Google Doc em Produção

Este mudou a forma como penso sobre fluxos de trabalho com documentos.

Tinha uma proposta de preços num Google Doc que precisava de revisão. Em vez de a abrir num browser, lê-la e fazer edições manualmente, pedi ao Claude para a ir buscar e rever.

O Claude extraiu o documento completo via `docs documents get`, fez parse de todo o conteúdo incluindo parágrafos e tabelas, e leu-o. Sinalizou uma inconsistência: uma tabela de preços tinha um número desatualizado que não correspondia aos preços do plano atual. O tipo de erro que é fácil de falhar quando se está a ler na diagonal mas embaraçoso quando um stakeholder o apanha.

Aqui está a parte que interessa: o Claude corrigiu-o diretamente no Google Doc em produção usando `batchUpdate` com `replaceAllText`. Sem descarregar, sem edições locais, sem voltar a carregar. A correção aconteceu no documento canónico para o qual toda a gente está a olhar.

Isto elimina toda uma classe de fricção na gestão de documentos. O documento fica no Google Docs onde a tua equipa espera encontrá-lo. O Claude lê-o e edita-o no sítio.

Uma coisa que ainda preciso de experimentar: rever e responder a comentários. Os comentários no Google Docs são onde metade da colaboração real acontece - sugestões, perguntas, threads de feedback. Se o Claude conseguir lê-los, resumir comentários em aberto e rascunhar respostas, isso fecharia mais um ciclo. É o próximo na minha lista.

## Caso de Uso 4: Construir um Dashboard no Google Sheets

Este foi puramente um teste. Queria ver se o Claude conseguia pegar em dados do Snowflake e construir um Google Sheet completo automaticamente - de ponta a ponta, sem passos manuais. O tipo de coisa que normalmente come uma tarde inteira: executar queries, exportar CSVs, criar um sheet, fazer separadores, colar dados, formatar cabeçalhos, construir gráficos.

Apontei o Claude para alguns datasets e disse "constrói-me um dashboard em Sheets." Ele:

1. **Extraiu 6 datasets do Snowflake** - tendências semanais, métricas diárias, análises por plano, adoção de funcionalidades, utilização por segmento e mais
2. **Criou 6 separadores num Google Sheet** via `spreadsheets batchUpdate`
3. **Inseriu todos os dados** nos separadores corretos via `spreadsheets values update`
4. **Formatou tudo** - cabeçalhos a negrito, fundos cinzentos, linhas superiores fixas, colunas auto-redimensionadas
5. **Adicionou 9 gráficos** pelos separadores - gráficos de linhas para tendências, gráficos de colunas para comparações, gráficos de área para métricas cumulativas, barras empilhadas para análises

Tudo programaticamente. Sem trabalho manual em sheets. Sem copiar-colar entre ferramentas. O CLI do Snowflake do capítulo dois e o CLI gws deste capítulo a trabalhar juntos numa única sessão. Foi apenas um teste, mas funcionou bem o suficiente para me imaginar a usar isto para dashboards reais virados para stakeholders.

Isto é o aspeto do efeito composto na prática. Cada integração que adicionei - GitHub, Notion, Snowflake, Google Workspace, Slack - não adiciona apenas uma capacidade. Multiplica todas as outras capacidades. Dados do Snowflake fluem para o Google Sheets. Informação da equipa do Calendar informa o agendamento de reuniões. Discussões do Slack fornecem contexto para revisões de documentos.

## Caso de Uso 5: Pesquisar no Slack

A última peça era o histórico de comunicação. Usei a pesquisa do Slack para encontrar discussões relacionadas com a proposta de preços nos nossos canais. O Claude encontrou threads relevantes em `#product-launches` e `#pricing-strategy`, leu as conversas completas e ficou com o contexto necessário para cruzar com o documento de preços que já tinha revisto.

Isto fechou o ciclo de informação. Antes, eu podia rever um documento, lembrar-me que alguém levantou uma preocupação no Slack há três semanas, tentar encontrar essa thread, perder dez minutos a fazer scroll, e talvez desistir. Agora o Claude pesquisa, encontra, lê e sintetiza na mesma conversa.

## A Stack Completa

Eis o aspeto do workspace agora:

```
pm-workspace/
├── CLAUDE.md                # Everything: schemas, team lists, tool docs
├── .claude/
│   └── settings.local.json  # Permissions for all CLIs and MCPs
├── docs/                    # Fallback for docs that can't live in Google/Notion
├── data_reports/            # Fallback for datasets too large for live queries
└── roadmap.md               # Living roadmap document
```

E as integrações:

| Ferramenta | Método | O Que Faz |
|------|--------|-------------|
| GitHub | `gh` CLI | Issues, epics, gestão de projetos |
| Notion | MCP | Specs de produto e documentação |
| Snowflake | `snow` CLI | Queries ao data warehouse |
| Google Workspace | `gws` CLI | Calendar, Docs, Sheets, Gmail |
| Slack | MCP Plugin | Pesquisar, ler e enviar mensagens |

Cinco integrações. Cinco fontes de dados diferentes. Todas acessíveis a partir de um terminal, todas a transportar contexto através de uma única conversa.

## Dicas Se Estiveres a Configurar Isto

Algumas coisas que aprendi da maneira difícil:

- **Documenta tudo no `CLAUDE.md`.** O Claude não consegue usar ferramentas que não conhece. Sempre que adicionas uma integração, diz ao Claude que comandos estão disponíveis e como usá-los. Melhor ainda, pede ao Claude para explorar e documentar a ferramenta ele próprio.
- **O plugin do Slack pode precisar de reconexão.** Depois de `/install-slack-app`, executa `/mcp` para ligar. Se não funcionar à primeira, tenta novamente. É instável na configuração inicial mas estável depois.
- **Usa a API raw para operações complexas em Sheets.** O comando `spreadsheets values update` funciona melhor do que helpers de nível superior quando estás a fazer operações multi-separador com formatação e gráficos.
- **Guarda listas de equipa e detalhes de integrações no `CLAUDE.md`.** Persistem entre sessões. O Claude saber a tua equipa, os teus schemas e as tuas ferramentas desde o momento em que uma conversa começa é o que faz isto parecer uma sala de controlo em vez de um chatbot.

## O Que Mudou

Depois do capítulo um, tinha um workspace ligado. Depois do capítulo dois, tinha acesso a dados. Depois deste capítulo, tenho tudo. Calendário, documentos, folhas de cálculo, histórico de comunicação, data warehouse, gestão de projetos, contexto de design - está tudo num único sítio.

A mudança de fluxo de trabalho é real. Não abro o Google Calendar para agendar reuniões. Não abro o Google Docs para rever documentos. Não abro o Google Sheets para construir dashboards. Não faço scroll no Slack para encontrar discussões antigas. Descrevo o que preciso, e acontece.

É perfeito? Não. As configurações de autenticação são caprichosas. O CLI gws é jovem e as mensagens de erro nem sempre ajudam. Algumas operações precisam de chamadas Python subprocess para evitar problemas de escaping na shell. Mas a fricção da configuração é um custo único. O tempo poupado é todos os dias.

Três capítulos depois, a tese mantém-se: cada nova integração multiplica o valor de todas as existentes. O intervalo entre "tenho uma pergunta" e "tenho uma resposta com dados de suporte de cinco fontes diferentes" colapsou de horas para segundos.

Isto é o modo deus.
