---
title: "A Construção do Gordon: O Agente de AI do Docker"
summary: "Um olhar por detrás das cortinas sobre a construção do Gordon - o agente de AI do Docker. Desde a escolha do docker-agent como runtime, à análise das perguntas dos utilizadores, ao design da UX, à configuração de evals e à construção das ferramentas certas."
description: "Um olhar por detrás das cortinas sobre a construção do Gordon - o agente de AI do Docker. Desde a escolha do docker-agent como runtime, à análise das perguntas dos utilizadores, ao design da UX, à configuração de evals e à construção das ferramentas certas."
categories: [AI, Ferramentas para Programadores]
tags: [Docker, Gordon, Agents, AI, docker-agent]
date: 2026-03-13
draft: false
showTableOfContents: true
---

Ao longo do último ano, fiz parte da equipa que construiu o [Gordon](https://docs.docker.com/ai/gordon/) - o agente de AI do Docker. Se usaste o Docker Desktop recentemente, provavelmente já o viste: clica no ícone do Gordon na barra lateral ou executa `docker ai` no terminal, e tens um agente que realmente compreende os teus containers, as tuas imagens e o teu ambiente. Não se limita a responder a perguntas - age.

Mas construir um agente de AI em quem milhões de programadores confiam com o seu código, containers, imagens, ficheiros Compose, builds e pipelines de CI não foi simples. Esta é a história de como o construímos - as decisões que tomámos, os erros que cometemos e o que aprendemos pelo caminho.

## Gordon v1

A primeira versão do Gordon foi construída antes de existir a maioria das ferramentas agênticas que temos hoje. O Gordon tem alimentado a experiência de AI do Docker desde o início - em [docs.docker.com](https://docs.docker.com), no suporte e dentro do Docker Desktop. Escrevemos o ciclo agêntico inicial com o LangGraph, ligámos um sistema RAG à documentação do Docker para que o Gordon pudesse responder a perguntas com base em conteúdo real, e criámos o que chamámos de "receitas" - fluxos de código determinísticos que tratavam de tarefas específicas, como gerar um Dockerfile ou depurar um container. Pensa nas receitas como o precursor do MCP e do tool calling, mas totalmente personalizadas. Cada receita era um fluxo artesanal: detetar a intenção do utilizador, recolher o contexto certo e executar uma sequência de passos que sabíamos que funcionavam.

Foi lançado. As pessoas usaram-no. E aprendemos imenso - o que os utilizadores realmente precisavam, onde o LLM tinha dificuldades e como os fluxos determinísticos se tornam frágeis quando se tenta cobrir todos os casos extremos. Estávamos também a trabalhar com modelos da era do GPT-4o - capazes, mas muito aquém do que está disponível agora. Até os modelos mais pequenos de hoje, como o Haiku, superam o que tínhamos nessa altura, e passou menos de um ano.

Mas enquanto o Gordon v1 estava em produção, o mundo à nossa volta avançou rapidamente. O MCP tornou-se um standard para integração de ferramentas. O tool calling chegou de forma nativa a todos os principais modelos. Os frameworks de agentes amadureceram. Os próprios modelos deram um salto enorme. O fosso entre o que tínhamos construído e o que era agora possível continuava a crescer.

Por isso, decidimos reconstruir o Gordon do zero, pegando em tudo o que aprendemos com a v1 e combinando-o com os novos standards e infraestrutura que tinham surgido desde o lançamento.

## Fundações

A primeira pergunta para a reconstrução foi fundamental: em que é que vamos construir isto?

Podíamos ter continuado com a stack do LangGraph, mas estávamos a construir o [docker-agent](https://github.com/docker/docker-agent) (originalmente chamado cagent) como um runtime open-source para agentes de AI, e fazia sentido usar as nossas próprias ferramentas.

{{< github repo="docker/docker-agent" >}}

O docker-agent dá-te uma forma declarativa de definir agentes em YAML - o seu modelo, instruções, ferramentas e como colaboram entre si. Em vez de escrever código imperativo para gerir ciclos de conversação, despacho de ferramentas e janelas de contexto, descreves o que o agente deve fazer e deixas o runtime tratar do resto. Escrito quase inteiramente em Go, é distribuído como um plugin do Docker CLI - `docker agent run`, `docker agent new`, etc - pelo que se integra de forma natural no fluxo de trabalho do Docker.

Para o Gordon, isto significava que podíamos iterar rapidamente. Mudar o system prompt? Editar o YAML. Adicionar uma nova ferramenta? Adicioná-la ao toolset. Trocar o modelo? Uma linha. Sem reimplementação de código personalizado, sem reconstrução de pipelines. A definição do agente é o produto.

Uma das maiores vantagens de construir com o docker-agent é a distribuição. As definições de agentes são empacotadas e partilhadas como artefactos OCI - o mesmo formato que o Docker usa para imagens de containers. Isto significa que podemos fazer `docker agent push` de uma nova versão do Gordon para o Docker Hub e `docker agent pull` no outro lado. As atualizações são enviadas instantaneamente sem reconstruir qualquer código, porque o ciclo do agente não está incorporado na aplicação - vive no runtime. A definição do Gordon é apenas um ficheiro YAML que está no Docker Hub. Quando fazemos push de uma nova versão, todas as instalações do Docker Desktop a obtêm (é um pouco mais complexo do que isso, mas percebes a ideia). Sem atualizações binárias, sem revisões de lojas de aplicações, sem scripts de migração. Esta separação entre o runtime (docker-agent) e a definição do agente (o YAML) é o que faz tudo funcionar à escala.

O docker-agent vem com toolsets integrados - `filesystem` para ler e escrever ficheiros, `shell` para execução de comandos, `think` para um bloco de notas de raciocínio, `todo` para acompanhamento de tarefas e `memory` para persistência entre sessões. Para além disso, qualquer servidor MCP pode ser ligado como ferramenta. Também podes definir ferramentas de script personalizadas diretamente no YAML - encapsular um script shell ou um endpoint de API e expô-lo ao agente com argumentos tipificados.

Usar o docker-agent também significa que o Gordon beneficia de tudo o que o runtime fornece de origem - suporte multi-fornecedor (OpenAI, Anthropic, Gemini, Bedrock, Mistral e até modelos locais via Docker Model Runner), integração com MCP, RAG integrado com múltiplas estratégias de recuperação, orquestração multi-agente com sub-agentes e handoffs, e distribuição baseada em OCI. Quando melhoramos o docker-agent, o Gordon também melhora. E quando o Gordon empurra os limites do docker-agent, tornamos o runtime melhor para todos.

Usamos o docker-agent para construir o docker agent. Isto não é um slogan - é como trabalhamos de facto.

## Perceber o Que os Utilizadores Realmente Querem

Construir um agente de AI é fácil. Construir um que seja realmente útil é difícil. A diferença resume-se a perceber o que os utilizadores estão realmente a pedir.

Logo no início, passámos muito tempo a analisar como as pessoas interagem com o Docker. Que perguntas fazem nos fóruns? O que procuram na documentação? Onde ficam bloqueados? Uma vez que o Gordon v1 já alimentava o assistente de AI em [docs.docker.com](https://docs.docker.com), no suporte e dentro do Docker Desktop, tínhamos duas fontes de dados inestimáveis: as interações com a documentação e o suporte, e os dados reais de intenção dos utilizadores das sessões da v1 - o que as pessoas pediam ao Gordon para fazer, quais as receitas que eram acionadas, onde tinha sucesso e onde falhava.

Os padrões eram claros:

- **"Porque é que o meu container não arranca?"** - A depuração é o caso de uso número um. Códigos de saída, erros nos logs, problemas de rede, problemas de permissões.
- **"Como é que containerizo isto?"** - As pessoas têm uma aplicação e querem um bom Dockerfile. Não um genérico de um tutorial - um que compreenda a estrutura do seu projeto.
- **"Como é que faço X com o Docker?"** - Operações de rotina que são simples se conheceres o comando, mas que requerem uma visita à documentação se não conheceres.

Estas três categorias moldaram tudo. O Gordon não é um chatbot de uso geral que por acaso sabe sobre Docker. É um agente especificamente desenhado em torno destes fluxos de trabalho - depurar, construir e gerir. Cada ferramenta, cada prompt, cada decisão de UX decorre daqui.

Também aprendemos que os utilizadores não fazem perguntas limpas e bem formuladas. Colam mensagens de erro. Descrevem sintomas, não causas. Fornecem contexto incompleto. Um bom agente não pode simplesmente fazer correspondência de padrões em palavras-chave - precisa de compreender a intenção, fazer perguntas de esclarecimento quando necessário e ir investigar por conta própria.

## Construir o Agente

Com o docker-agent como runtime e uma imagem clara do que os utilizadores precisavam, começámos a construir. O que se seguiu foram semanas de iteração rápida - e o agente mudou drasticamente ao longo do processo. O Gordon é distribuído como um artefacto OCI no Docker Hub (`docker/gordon`), e podes obter qualquer versão com `cagent pull docker/gordon:<tag>` e ler a definição completa do agente. A evolução está ali, no historial de versões.

### De enxame multi-agente para agente único

A nossa primeira tentativa no Gordon v2 foi ambiciosa. Desenhámos uma arquitetura multi-agente com nove sub-agentes especializados: um especialista em Docker, um especialista em programação, um especialista em deployment, um especialista em Kubernetes, um agente de redes, um agente de segurança, um agente de integração com GitHub, um especialista em migração DHI e até um agente Notion. O agente raiz atuava como orquestrador - analisava o pedido do utilizador, delegava ao especialista certo e coordenava respostas entre a equipa. Todos partilhados mantinham o contexto a fluir entre agentes.

Era elegante em teoria. Na prática, era lento e imprevisível. A delegação adicionava latência. O orquestrador escolhia por vezes o sub-agente errado. O contexto perdia-se nas transferências. E quanto mais agentes adicionávamos, mais difícil se tornava raciocinar sobre o comportamento do sistema como um todo.

Por isso, colapsámos tudo. Movemos quase tudo para um único agente raiz com um system prompt cuidadosamente elaborado. O único sub-agente que sobreviveu foi o especialista em migração DHI, porque esse fluxo de trabalho é genuinamente distinto o suficiente para justificar o seu próprio agente com as suas próprias ferramentas e instruções. Tudo o resto - operações Docker, depuração, containerização, ajuda geral ao desenvolvimento - vive no agente raiz.

O resultado foi mais rápido, mais previsível e mais fácil de iterar. Um agente, um prompt, um sítio para olhar quando algo corre mal.

### Seleção de modelo

A escolha do modelo também mudou. As builds iniciais da v2 corriam no Claude Sonnet 4.5 - um modelo poderoso, mas caro à escala em que o Gordon opera. À medida que refinávamos o prompt e as ferramentas, descobrimos que conseguíamos obter a mesma qualidade com o Claude Haiku 4.5 - um modelo muito mais pequeno, rápido e barato. O truque foi investir em melhores prompts. Cada vez que melhorávamos as instruções - descrições de ferramentas mais específicas, regras de comportamento mais claras, melhores exemplos - o fosso entre o Sonnet e o Haiku estreitava-se até desaparecer nos nossos casos de uso.

O Gordon corre atualmente no Haiku 4.5 para a maioria das suas interações. A diferença de velocidade é notória - as respostas parecem ágeis, as chamadas de ferramentas resolvem-se mais rapidamente e o custo por conversa reduziu significativamente. O suporte multi-fornecedor do docker-agent significa que podemos trocar de modelo com uma única linha no YAML, por isso estamos sempre a testar novos modelos à medida que são lançados.

### Engenharia de prompts como desenvolvimento de produto

A maior surpresa foi a quantidade do produto que vive no system prompt. O prompt do Gordon não é um parágrafo de instruções - é uma especificação detalhada que cobre identidade, estilo de comunicação, padrões de acesso a ficheiros, uso da base de conhecimento, dimensionamento de respostas, boas práticas para Dockerfiles, fluxos de trabalho de depuração e regras de segurança.

Aqui está o aspeto da definição atual do Gordon:

```yaml
version: "2"

models:
  brain:
    provider: anthropic
    model: claude-haiku-4-5-20251001

agents:
  root:
    model: brain
    description: Gordon - Docker Agent
    instruction: |
      You are Gordon, an AI assistant created by Docker Inc.,
      specialized in Docker and Docker-related products, tools,
      and technologies...
    sub_agents:
      - DHI migration
    toolsets:
      - type: api
        api_config:
          name: knowledge_base
          endpoint: https://ai-backend-service.docker.com/docs
          ...
      - type: filesystem
      - type: shell
      - type: fetch
      - type: todo

  DHI migration:
    model: brain
    description: Migrates a Dockerfile to use Docker Hardened Images
    toolsets:
      - type: api
        api_config:
          name: get_image_tags
          endpoint: https://ai-backend-service.docker.com/dhi
          ...
      - type: filesystem
      - type: shell
```

Iterámos constantemente no prompt. Cada vez que encontrávamos um modo de falha - o Gordon a ser demasiado prolixo, a escolher a ferramenta errada, a fazer perguntas de esclarecimento desnecessárias, a usar palavras de preenchimento - adicionávamos algo para o resolver - um novo eval, uma nova instrução, etc. O prompt cresceu organicamente a partir de interações reais com utilizadores e falhas de evals. Não é código bonito, mas funciona. E aqui está a questão: já não escrevemos a maior parte destes prompts à mão. Mais sobre isso depois de falarmos sobre evals.

## A Experiência do Utilizador

A UX de um agente de AI é fundamentalmente diferente da de um chatbot. Um chatbot dá-te texto. Um agente quer fazer coisas - executar comandos, editar ficheiros, criar configurações. Isso muda tudo na forma como se desenha a interação.

O princípio central em que chegámos: **mostrar primeiro, depois agir**.

O Gordon nunca executa nada sem te mostrar exatamente o que planeia fazer primeiro. Quer executar um comando shell? Vês o comando. Quer editar um Dockerfile? Vês o diff. Quer parar um container? Vês qual é. Cada ação requer a tua aprovação explícita.

Isto não é apenas uma funcionalidade de segurança - é um mecanismo de construção de confiança. Quando usas o Gordon pela primeira vez, aprovas cada ação. Com o tempo, começas a confiar nele porque viste tomar boas decisões. Aprovas mais rapidamente, não porque és menos cuidadoso, mas porque construíste confiança no que faz.

Também tornámos o Gordon disponível em dois lugares: Docker Desktop (GUI) e CLI (`docker ai`). A experiência no Desktop é visual - vês containers, imagens e logs ao lado da conversa. A experiência na CLI é para programadores que vivem no terminal e querem ficar lá. O mesmo agente, as mesmas capacidades, contexto diferente.

Uma coisa que evitámos deliberadamente: o modo autónomo. O Gordon não vai fazer dez coisas enquanto não estás a ver. É um agente colaborativo - trabalha contigo, não em vez de ti. Num mundo onde os programadores desconfiam, com razão, de ferramentas de AI que fazem alterações não supervisionadas à sua infraestrutura, isto importa.

## Ferramentas: O Que o Gordon Pode Realmente Fazer

Um LLM sem ferramentas é apenas um gerador de texto. O que torna o Gordon um agente é a sua capacidade de agir. E acertar nas ferramentas foi uma das partes mais difíceis do projeto.

A arquitetura do Gordon é uma divisão cliente-servidor. O backend vive nos servidores do Docker, enquanto o cliente é uma CLI integrada no Docker Desktop que corre na máquina do utilizador. O cliente trata do acesso local - ler os teus ficheiros, executar comandos, interagir com o daemon do Docker - enquanto o backend trata da orquestração do LLM. Quando usas o Gordon através do Docker Desktop, o utilizador pode selecionar um diretório de trabalho para delimitar o acesso - ou é usado um padrão. Quando usas `docker ai` no terminal, funciona com o diretório em que estás.

Os toolsets principais do Gordon são surpreendentemente minimalistas:

- **Filesystem** - Ler, escrever, editar e listar ficheiros no diretório de trabalho do utilizador. É assim que o Gordon inspeciona a estrutura do teu projeto, lê Dockerfiles e escreve novas configurações.
- **Shell** - Executar comandos no terminal do utilizador (com aprovação). Este é o motor de trabalho - através do shell, o Gordon pode executar `docker build`, `docker compose up`, `docker scout`, `kubectl`, `git` e tudo o resto disponível na máquina do utilizador. Em vez de construir integrações específicas para cada comando Docker, damos ao agente acesso ao shell e deixamo-lo usar as ferramentas CLI que os programadores já têm instaladas.
- **Fetch** - Fazer pedidos HTTP a URLs externas para documentação, referências de API ou qualquer conteúdo web de que o Gordon precise para responder a uma pergunta.
- **Todo** - Acompanhar tarefas de múltiplos passos para que o Gordon possa decompor pedidos complexos e trabalhar neles metodicamente.
- **Base de conhecimento** - Uma ferramenta API personalizada que consulta o backend de documentação do Docker. Construímos o nosso próprio pipeline RAG sobre a documentação do Docker desde a v1, e alimenta não só o Gordon mas também o assistente de documentação e o suporte. O Gordon tem acesso a documentação atualizada, boas práticas e padrões comuns através desta infraestrutura partilhada.
- **Migração DHI** - Um sub-agente dedicado com o seu próprio toolset para migrar Dockerfiles para Docker Hardened Images, incluindo uma ferramenta API que resolve tags de imagens compatíveis com DHI.

O primeiro passo no pipeline do Gordon - perceber o que o utilizador quer e descobrir qual ferramenta usar - é feito através de tool calling com o LLM. Isto parece simples, mas foi uma das áreas onde passámos mais tempo a experimentar.

O que aprendemos:

**As descrições das ferramentas importam mais do que pensas.** Uma linha vaga não chega. O LLM precisa de descrições detalhadas com exemplos de quando usar cada ferramenta. Descobrimos que definições de ferramentas mais descritivas melhoraram dramaticamente a precisão da seleção de ferramentas.

**Adicionar ferramentas pode quebrar coisas.** Isto foi contraintuitivo. Adicionávamos uma nova ferramenta e de repente o LLM deixava de acionar corretamente as ferramentas existentes. O conjunto de ferramentas não é apenas uma lista - é um espaço de decisão, e expandi-lo muda a forma como o modelo raciocina sobre qual ferramenta escolher.

**Os modelos comportam-se de forma diferente.** O tool calling não é padronizado entre fornecedores. O que funciona bem com um modelo pode falhar com outro. Descrições que são ótimas para o GPT-4 podem confundir o Claude, e vice-versa. Tivemos de testar entre fornecedores e por vezes adaptar as descrições por modelo.

**Aproveita a infraestrutura de conhecimento existente.** Construímos o nosso próprio pipeline RAG sobre a documentação do Docker na v1, e tem alimentado o assistente de documentação, o suporte e o Gordon desde então. Para a v2, não precisámos de reinventar isto - apenas ligámos o Gordon ao mesmo backend via uma ferramenta API. Anos de documentação indexada, já testada em produção, disponível com uma única chamada de API.

## Evals

Aqui está o problema com os agentes de AI: falham de formas subtis. Um chatbot que dá uma resposta ligeiramente errada é aborrecido. Um agente que executa o comando errado é perigoso. Os evals não são opcionais - são essenciais.

O docker-agent tem avaliação integrada. O fluxo de trabalho começa com a gravação de sessões - interages com o Gordon normalmente, e quando uma conversa representa um bom caso de teste, guardas-a como eval. Cada eval é um ficheiro JSON que captura a mensagem do utilizador, as chamadas de ferramentas esperadas e os critérios de avaliação: declarações de relevância que a resposta deve satisfazer, tamanho de resposta esperado, quais as ferramentas que devem ser chamadas, que ficheiros devem ser criados. Estes evals correm dentro de containers Docker para isolamento - cada um obtém um ambiente limpo, para que os resultados sejam reproduzíveis.

`docker agent eval` executa a suite completa, pontuando em múltiplas dimensões - precisão das chamadas de ferramentas (o Gordon chamou as ferramentas certas?), relevância (a resposta abordou realmente a questão?), dimensionamento das respostas e handoffs de sub-agentes. Um juiz LLM avalia os critérios de relevância, para que possamos testar comportamentos subtis, não apenas correspondência de strings.

É assim que detetamos regressões. Cada alteração ao Gordon - atualizações de prompts, alterações de ferramentas, trocas de modelos - é avaliada contra a suite completa antes de ser enviada. Num sistema de agentes, tudo está interligado. Uma pequena alteração numa descrição de ferramenta pode causar um efeito cascata em comportamentos inesperados. Quando sai uma nova versão de um modelo, executamos a suite antes de mudar. Não atualizamos às cegas.

Uma lição difícil: a cobertura dos evals importa mais do que a quantidade. No início, os nossos evals não cobriam os casos de uso principais - estávamos a otimizar o Gordon para casos extremos enquanto os fluxos de trabalho centrais (depurar containers, gerar Dockerfiles, responder a perguntas sobre Docker) não estavam bem representados. Estávamos a melhorar pontuações sem realmente tornar o Gordon melhor para a maioria dos utilizadores. Assim que reequilibrámos a suite de evals em torno dos padrões de uso reais dos dados da v1, as melhorias começaram a corresponder ao que os utilizadores realmente experienciavam.

## Usar Agentes para Melhorar o Agente

Lembras-te do avanço sobre não escrever prompts à mão? Aqui está o aspeto disso na prática.

Construímos um agente personalizado - a correr num modelo mais poderoso como o Claude Opus 4.6 - cujo trabalho é melhorar o system prompt do Gordon. O fluxo de trabalho: dar-lhe a definição atual do agente Gordon, um conjunto de evals com falhas e os resultados. O agente analisa as falhas, propõe alterações ao prompt e produz um YAML atualizado. Executamos a suite de evals contra a nova versão. Se as pontuações melhorarem e nada regredir, enviamos.

Isto cria um ciclo de melhoria contínua. Um utilizador relata que o Gordon faz demasiadas perguntas de esclarecimento em vez de simplesmente ler os ficheiros? Adicionamos um eval para isso, apontamos o agente otimizador para a falha e deixamo-lo descobrir a alteração de prompt certa. Pode adicionar uma regra como "LÊ SEMPRE os ficheiros diretamente usando as ferramentas do filesystem. NUNCA peças aos utilizadores para colar conteúdo." - que é exatamente o tipo de instrução específica e acionável que faz a diferença entre um bom agente e um frustrante.

Usar um modelo mais poderoso como "professor" para melhorar o "aluno" é deliberado. O Opus tem a capacidade de raciocínio para compreender problemas de comportamento subtis e elaborar instruções precisas que orientam o Haiku na direção certa. São agentes até ao fundo.

A maioria das regras de comportamento detalhadas no prompt do Gordon - as palavras de preenchimento proibidas, os padrões de acesso a ficheiros, as diretrizes de dimensionamento de respostas, as sequências de depuração - foram escritas ou refinadas pelo agente otimizador, não por um humano. Nós definimos a direção e definimos o que é bom através dos evals. O agente descobre como lá chegar.

## O Que Vem a Seguir: Memória

Agora mesmo, o Gordon não tem estado entre sessões. Cada conversa começa do zero. Fechas o Docker Desktop e o Gordon esquece tudo - a estrutura do teu projeto, os problemas que tens estado a depurar, os padrões de Dockerfile que preferes.

A memória é a próxima fronteira. Estamos a trabalhar para dar ao Gordon a capacidade de lembrar contexto entre sessões:

- **Contexto do projeto** - O Gordon deve lembrar a estrutura do teu projeto, a tua configuração Docker e os padrões que usas
- **Histórico de interações** - Se resolveste um problema na semana passada, o Gordon deve saber disso quando surgir um problema semelhante
- **Preferências do utilizador** - Se usas sempre builds multi-stage, o Gordon deve assumir que as sugere por padrão

Isto é mais difícil do que parece. A memória em agentes de AI não é simplesmente "guardar o histórico do chat." Trata-se de decidir o que vale a pena lembrar, como recuperá-lo eficientemente e como evitar que fique desatualizado. Um sistema de memória que apresenta contexto irrelevante é pior do que não ter memória alguma.

O docker-agent já tem os blocos de construção. Há um toolset `memory` que persiste informação numa base de dados local entre sessões - o agente pode guardar e recuperar factos enquanto trabalha. As peças estão lá. O desafio é fazê-lo sentir natural - o Gordon deve apresentar memórias relevantes sem ser solicitado, aprender as tuas preferências sem ser instruído, e esquecer coisas que já não são relevantes. Como a janela deslizante que usei quando construí o [Eva](/posts/202601-building-eva/), mas mais inteligente.

O objetivo é simples: o Gordon deve parecer um colega de equipa que conhece o teu projeto, não um estranho a quem tens de explicar tudo de novo cada vez.

---

Construir o Gordon foi um dos projetos mais desafiantes e recompensadores em que trabalhei. Os agentes de AI ainda estão nos seus primórdios - as ferramentas estão a evoluir rapidamente, as melhores práticas ainda estão a ser escritas e as expectativas dos utilizadores mudam com cada novo lançamento de modelos. Mas o insight central permanece: os programadores não precisam de mais um chatbot. Precisam de um agente que compreenda o seu ambiente, tome ação e ganhe a sua confiança um comando aprovado de cada vez.

Se quiseres experimentar o Gordon, atualiza para a versão mais recente do [Docker Desktop](https://www.docker.com/products/docker-desktop/) e procura o ícone do Gordon na barra lateral, ou executa `docker ai` no teu terminal.

E se quiseres construir os teus próprios agentes, consulta o [docker-agent](https://github.com/docker/docker-agent) - é open source e é o mesmo runtime em que o Gordon corre.
