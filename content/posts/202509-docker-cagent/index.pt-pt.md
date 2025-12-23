---
title: "Docker Cagent: Runtime para Agentes de IA"
summary: "Os agentes de IA estão a crescer rapidamente, mas a maioria funciona como scripts frágeis ligados a uma máquina local. Construímos o cagent para containerizar, standardizar e escalar agentes à maneira Docker—e tornámo-lo open source."
description: "Os agentes de IA estão a crescer rapidamente, mas a maioria funciona como scripts frágeis ligados a uma máquina local. Construímos o cagent para containerizar, standardizar e escalar agentes à maneira Docker—e tornámo-lo open source."
categories: [IA, Ferramentas de Desenvolvedor, Open Source]
tags: [Docker, Agentes, MCP, OSS, Tutorial]
date: 2025-09-03
draft: false
---


No último ano, passei inúmeras horas a experimentar com agentes de IA—construindo protótipos, a partir coisas e a testar ferramentas como Claude Code, Codex e outras. Cada tentativa ensinou-me algo novo, mas também trouxe à superfície as mesmas frustrações: scripts que só funcionavam no meu laptop, configurações frágeis que não escalavam, nenhuma forma clara de configurar o que cada agente deveria fazer ou que ferramentas podia usar, e dificuldade em fazer os agentes comportarem-se como eu queria—quanto mais entregar resultados extraordinários. Demasiadas vezes encontrei-me a combater peculiaridades do ambiente em vez de explorar o que os agentes podiam realmente alcançar.

É por isso que estou tão entusiasmado com o que temos trabalhado na Docker. Fizemos uma pergunta simples: e se executar agentes pudesse ser tão fácil, portável e fiável como executar containers? O resultado é o **cagent**, um novo runtime para agentes de IA, construído para tornar a experimentação mais simples e a colaboração mais fácil - e hoje, tornamo-lo open source.

## Conheça o cagent

{{< github repo="docker/cagent" >}}

[`cagent`](https://github.com/docker/cagent) é um runtime open source, Docker-native desenhado para tornar os agentes cidadãos de primeira classe no teu workflow de desenvolvedor. Em vez de scripts frágeis ou configurações ad-hoc, o cagent dá-te uma forma consistente de definir, executar e partilhar agentes usando os mesmos padrões que já conheces do Docker.

No seu núcleo, o cagent é um **runtime multi-agente**. Podes definir um único agente com um simples ficheiro YAML, ou orquestrar uma equipa inteira de agentes especializados que colaboram em tarefas. Cada agente pode ser configurado com o seu próprio papel, personalidade e acesso a ferramentas externas.

### Providers suportados
Out of the box, o cagent suporta múltiplos providers de modelos incluindo OpenAI, Anthropic, Google Gemini e outros. Podes alternar entre eles facilmente através de configuração, por isso não estás preso a um único vendor.

### Ferramentas e integração MCP
Podem ser dadas ferramentas aos agentes para estender as suas capacidades. O cagent fala o **Model Context Protocol (MCP)**, o que significa que os teus agentes podem conectar-se a um amplo ecossistema de servidores MCP—seja pesquisa (como DuckDuckGo), acesso ao sistema de ficheiros ou APIs custom que exponhas. Podes decidir que ferramentas cada agente recebe, tornando a sua configuração explícita e reproduzível.

Além disso, o cagent funciona perfeitamente com o [Docker MCP Gateway](https://github.com/docker/mcp-gateway) e o [MCP Catalog](https://github.com/docker/mcp-registry) ([Docker Hub MCP](https://hub.docker.com/mcp)), que te permitem adicionar ferramentas aos teus agentes de forma mais segura e seamless. Tanto o gateway como o catálogo vêm empacotados com o Docker Desktop, por isso se estás a correr Docker Desktop podes usá-los out of the box.

### Configurações multi-agente
O cagent torna simples orquestrar equipas de agentes. Um ficheiro de agente pode descrever um agente researcher, um agente coder e um agente reviewer, cada um com as suas próprias responsabilidades e ferramentas. Quando executas um ficheiro/imagem de agente com o cagent, os agentes arrancam juntos, colaboram e passam tarefas entre si. Podes até misturar modelos e providers entre agentes—um agente pode usar OpenAI, outro Anthropic e outro Gemini—tudo na mesma configuração.

### Guardar e partilhar
Cada configuração que crias pode ser partilhada facilmente. Podes definir um agente (ou uma equipa) declarativamente num ficheiro YAML, fazer commit no version control e partilhá-lo como qualquer outro artefacto de código. Ou podes empacotar agentes como imagens Docker para distribuição totalmente portável.

### Em resumo
Com o cagent podes:

- **Containerizar agentes** para que funcionem em qualquer lugar onde o Docker funcione, com isolamento e reprodutibilidade por defeito.
- **Configurar comportamentos e ferramentas** declarativamente—decidir o que cada agente faz, a que providers e ferramentas MCP pode aceder, e como interagem.
- **Orquestrar múltiplos agentes** como equipa, deixando-os colaborar em tarefas com interfaces limpas.
- **Experimentar rapidamente** sem te preocupares com drift de configuração, dependency hell ou incompatibilidades de ambiente.
- **Guardar e partilhar agentes** através de ficheiros YAML ou imagens Docker, tornando experiências reproduzíveis e colaboração seamless.

Em resumo: o cagent dá-te uma base para passar de "experiências hackadas" para workflows de agentes repetíveis e componíveis—mantendo-se leve e fácil de usar.


## Instalação e configuração

Começar com o `cagent` é simples.

### Instalação

Binários pré-compilados para Windows, macOS e Linux estão disponíveis na [página de releases](https://github.com/docker/cagent/releases).

1. Faz download do binário para a tua plataforma.
2. Em macOS e Linux, torna-o executável:
   ```sh
   chmod +x /path/to/downloads/cagent-linux-amd64
   ```
3. Opcionalmente, renomeia-o para `cagent` e move-o para o teu `PATH`.

### Configura as tuas chaves API

Dependendo de quais providers queres usar, configura as chaves apropriadas no teu ambiente:

```bash
# Para modelos OpenAI
export OPENAI_API_KEY=your_api_key_here

# Para modelos Anthropic
export ANTHROPIC_API_KEY=your_api_key_here

# Para modelos Gemini
export GOOGLE_API_KEY=your_api_key_here
```

Só precisas de configurar as chaves para os providers que planeias usar. Se múltiplas estiverem configuradas, o `cagent` escolherá por ordem (Anthropic → OpenAI → Google) a menos que sobreponhas com `--model`.

Com o binário instalado e pelo menos uma chave API configurada, estás pronto para criar e executar o teu primeiro agente.

## Criar um novo agente do zero

Uma das funcionalidades mais poderosas do `cagent` é a capacidade de gerar novos agentes (ou mesmo equipas multi-agente) do zero com um único comando: `cagent new`.

Quando executas `cagent new`, ser-te-á pedido que descrevas o que queres que o teu agente (ou equipa de agentes) faça. A partir daí, o `cagent` gera automaticamente a configuração YAML, escolhendo um provider/modelo baseado nas tuas chaves API disponíveis (Anthropic → OpenAI → Google por defeito) a menos que sobreponhas com `--model`. O `cagent` também sugerirá um conjunto de ferramentas que o agente pode precisar baseado na tua descrição.

Por trás dos panos, o `cagent` usa um agente gerador built-in para fazer bootstrap do YAML por ti. Podes imediatamente executar o ficheiro gerado, editá-lo ou partilhá-lo. No exemplo abaixo vou criar um agente inspirado em Tyler Durden de *Fight Club*.

{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler.webp" alt="Prompt de criação do agente Tyler Durden" >}}

Depois de descreveres o teu agente, o `cagent` gera um ficheiro YAML que especifica o papel do agente, provider, modelo e acesso a ferramentas. Isto torna a configuração do teu agente explícita, reproduzível e fácil de modificar.


{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler result.webp" alt="YAML do agente gerado para o exemplo Tyler Durden" >}}

Aqui está um exemplo do YAML gerado para o agente Tyler Durden:

```yaml
version: "1"

models:
  anthropic:
    provider: anthropic
    model: claude-sonnet-4-0
    max_tokens: 64000

agents:
  root:
    model: anthropic
    description: "An agent that embodies Tyler Durden's philosophical mindset - challenging consumerism, questioning authority, and speaking with raw, unfiltered truth"
    instruction: |
      You are an agent inspired by Tyler Durden's philosophy and speaking style. You should:

      SPEAKING STYLE:
      - Be direct, provocative, and uncompromising
      - Use short, punchy statements mixed with longer philosophical rants
      - Challenge conventional thinking and societal norms
      - Speak with confidence and authority
      - Use visceral, concrete imagery in your explanations
      - Be brutally honest, even when uncomfortable

      PHILOSOPHICAL APPROACH:
      - Question consumerism and materialism
      - Challenge people to break free from societal expectations
      - Emphasize authenticity over appearance
      - Focus on what truly matters vs. what society says should matter
      - Promote self-reliance and personal transformation
      - Critique corporate culture and meaningless work

      COMMUNICATION PATTERNS:
      - Start with bold, attention-grabbing statements
      - Use analogies involving decay, destruction, and renewal
      - Ask hard questions that make people uncomfortable
      - Deliver uncomfortable truths about modern life
      - End with calls to action or philosophical challenges

      TOPICS TO ADDRESS:
      - The meaninglessness of consumer culture
      - Breaking free from others' expectations
      - Finding authentic purpose and meaning
      - The importance of facing harsh realities
      - Personal transformation through destruction of false selves
      - Questioning authority and social structures

      Remember: You're not encouraging actual violence or illegal activity - you're using Tyler's philosophical lens to challenge thinking about society, purpose, and authenticity. Focus on psychological and philosophical rebellion rather than physical destruction.
    toolsets: []
    add_date: false
    add_environment_info: false
```

Podes refinar ainda mais a que ferramentas o agente pode aceder, incluindo ferramentas MCP como pesquisa, sistema de ficheiros ou APIs custom. Esta secção de ferramentas explícita garante que o teu agente só tem as capacidades que defines.

{{< figure src="/posts/202509-docker-cagent/img/cagent run tyler example.webp" alt="A executar o agente Tyler Durden" >}}

Isto torna incrivelmente rápido passar de uma ideia para uma configuração de agente funcional. Quer estejas a prototipar um único agente helper ou a desenhar uma equipa de especialistas, `cagent new` permite-te partir de linguagem natural e obter uma config executável em segundos.

## Executar os teus agentes

O comando `cagent run` é como dás vida aos teus agentes. Recebe um ficheiro YAML (ou mesmo uma imagem Docker empacotada) e inicia os agentes que definiste dentro dele. O comando trata da orquestração, comunicação inter-agente e acesso a ferramentas—tudo enquanto mantém isolamento e reprodutibilidade através de containerização.

Quando executas `cagent run`, várias coisas acontecem:
- Cada agente é inicializado com o seu modelo, papel e ferramentas especificados
- O runtime configura canais de comunicação seguros entre agentes
- O acesso a ferramentas é configurado de acordo com as tuas especificações YAML
- O agente primário (tipicamente chamado "root") inicia e pode delegar a outros agentes conforme necessário

### Exemplo: Construir um jogo de xadrez

Vamos percorrer um exemplo prático usando a equipa de desenvolvimento multi-agente de [`examples/dev-team.yaml`](https://github.com/docker/cagent/blob/main/examples/dev-team.yaml). Esta configuração define três agentes especializados a trabalhar juntos:

- **Product Manager**: Coordena o projeto, decompõe requisitos e gere iterações
- **Designer**: Foca-se na experiência do utilizador, design visual e planeamento da interface
- **Engineer**: Trata da implementação, coding e arquitetura técnica

Para este exemplo, vou copiar a configuração do agente para o meu diretório de projeto e executá-la a partir daí, dando aos agentes o diretório de trabalho correto para criar e modificar ficheiros:

```zsh
# Copia a configuração dev team para o teu diretório de projeto
cp dev-team.yaml /path/to/my-chess-project/
cd /path/to/my-chess-project/

# Executa os agentes a partir do diretório de projeto
cagent run dev-team.yaml
```

Esta abordagem garante que quando o agente Engineer cria ficheiros ou a equipa precisa de iterar no código, tudo é criado no sítio certo e os agentes podem facilmente aceder e modificar os ficheiros do projeto.

Depois peço a esta equipa para "construir um jogo de xadrez".

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 1.webp" alt="Pedido inicial para construir um jogo de xadrez" >}}

O agente Product Manager assume a liderança, decompondo imediatamente o jogo de xadrez em componentes manejáveis. O Product Manager depois coordena com o agente Designer para planear a interface do utilizador. O Designer considera o layout visual, interações do utilizador e experiência geral. Esta colaboração acontece automaticamente—os agentes comunicam através do runtime cagent sem coordenação manual. Vários ficheiros são gerados para esboçar a estrutura do projeto e design inicial (*nota: funcionalidade específica dos agentes dev-team*).

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 2.webp" alt="Product Manager e designer a definir requisitos e a coordenar com a equipa" >}}

O agente Engineer é envolvido para planear a implementação técnica. Pensa sobre estrutura de código, arquitetura HTML/CSS/JavaScript e como implementar a lógica do jogo eficientemente. O engineer pode aceder a ferramentas de sistema de ficheiros para realmente criar e modificar ficheiros.

A equipa trabalha iterativamente—o Engineer implementa funcionalidades, o Designer fornece feedback sobre a interface e o Product Manager acompanha o progresso. Cada agente mantém a sua perspetiva especializada enquanto contribui para o objetivo partilhado.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 3.webp" alt="Designer a planear a interface do utilizador" >}}

O resultado final é um jogo de xadrez funcional com lógica de jogo correta, interface visual e interações do utilizador. Os agentes colaboraram para entregar algo mais sofisticado do que qualquer agente individual teria produzido sozinho.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 4.webp" alt="Engineer a implementar a solução técnica" >}}


{{< figure src="/posts/202509-docker-cagent/img/build a chess game 5.webp" alt="Implementação final com jogo de xadrez funcional" >}}

## O que torna isto poderoso

Este exemplo demonstra várias vantagens chave da abordagem multi-agente do cagent:

**Expertise especializada**: Cada agente foca-se no que faz melhor—planeamento de produto, pensamento de design ou implementação técnica—em vez de tentar tratar de tudo.

**Colaboração natural**: Os agentes comunicam e coordenam automaticamente. Não precisas de passar informação manualmente entre eles ou gerir as suas interações.

**Desenvolvimento iterativo**: Tal como equipas humanas, os agentes trabalham em iterações, refinando e melhorando a solução à medida que avançam.

**Resultados reproduzíveis**: Como tudo está definido em configuração YAML, podes executar exatamente a mesma configuração de equipa novamente, partilhá-la com outros ou modificá-la para projetos diferentes.

**Integração de ferramentas**: Cada agente pode ser configurado com diferentes ferramentas—o Engineer pode ter acesso ao sistema de ficheiros para escrever código, enquanto o Designer tem acesso a APIs de geração de imagens.

Podes personalizar esta equipa modificando o ficheiro YAML—muda os seus papéis, ajusta as suas personalidades, dá-lhes diferentes ferramentas ou até troca diferentes modelos para cada agente. A configuração torna a experimentação fácil enquanto mantém tudo reproduzível.

## Começa com o cagent

Pronto para containerizar os teus workflows de IA? O repositório `cagent` inclui exemplos e templates para começar:

{{< github repo="docker/cagent" >}}

**Opções de quick start:**
- **Cria o teu primeiro agente**: Faz download do binário, configura a tua chave API e executa `cagent new` para criar o teu primeiro agente
- **Experimenta com equipas multi-agente**: Copia `dev-team.yaml` para o teu projeto e vê os agentes a colaborar em tarefas reais
- **Explora os exemplos**: Navega pelas configurações de agentes pré-construídas para diferentes casos de uso no repositório

**Junta-te à comunidade:**
- **Partilha as tuas criações**: Encontra-nos no [Slack](https://dockercommunity.slack.com/archives/C09DASHHRU4) para mostrar os agentes e workflows que estás a construir com o cagent
- **Contribui exemplos**: Submete pull requests com templates de agentes para workflows comuns
- **Discute casos de uso**: Junta-te às conversas e diz-nos como podemos melhorar

Quer estejas a construir automação pessoal, a prototipar workflows de IA ou a escalar sistemas de agentes em produção, o cagent dá-te a base Docker-native para o tornar fiável e partilhável.

O futuro do desenvolvimento de IA é colaborativo, containerizado e reproduzível. Vamos construí-lo juntos.
