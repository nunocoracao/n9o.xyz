---
title: "O Docker MCP Catalog: A Forma Segura de Descobrir e Executar Servidores MCP"
summary: "O ecossistema Model Context Protocol (MCP) está a explodir. Em apenas algumas semanas, o nosso Docker MCP Catalog ultrapassou 1 milhão de pulls, validando que os programadores procuram uma forma segura de executar servidores MCP. Hoje, estamos entusiasmados por partilhar atualizações importantes do Docker MCP Catalog, incluindo funcionalidades de descoberta melhoradas e o nosso novo processo de submissão aberto."
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/"
date: 2025-07-01
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

O ecossistema Model Context Protocol (MCP) está a explodir. Em apenas algumas semanas, o nosso Docker MCP Catalog ultrapassou 1 milhão de pulls, validando que os programadores procuram uma forma segura de executar servidores MCP. Hoje, estamos entusiasmados por partilhar atualizações importantes do Docker MCP Catalog, incluindo funcionalidades de descoberta melhoradas e o nosso novo processo de submissão aberto. Com centenas de programadores já a solicitar a publicação dos seus servidores MCP através do Docker, estamos a acelerar a nossa missão de tornar os servidores MCP containerizados o padrão para distribuição segura de ferramentas de IA.

A rápida adoção de servidores MCP também destaca um problema crítico — a prática atual de os executar via comandos npx ou uvx expõe sistemas a código não verificado com acesso total ao host, para não mencionar a fricção na gestão de dependências. Neste post, explicaremos porque é que o Docker está a investir no ecossistema MCP, mostraremos as novas capacidades do catalog e partilharemos como podes contribuir para construir uma base mais segura para aplicações de IA.

## Porque é que o Docker está a construir o MCP Catalog
### Os problemas de segurança na distribuição MCP
Cada vez que um programador executa npx -y @untrusted/mcp-server ou uvx some-mcp-tool, está a fazer um compromisso perigoso: conveniência antes da segurança. Estes comandos executam código arbitrário diretamente no sistema host com acesso total a:

- Todo o sistema de ficheiros
- Conexões de rede
- Variáveis de ambiente e secrets
- Recursos do sistema

Alguns clientes MCP limitam o acesso a variáveis de ambiente, mas mesmo isso não é uma prática universal. Isto não é sustentável. À medida que o MCP passa da experimentação para produção, precisamos de uma abordagem fundamentalmente diferente.

### A posição única do Docker
O Docker passou mais de uma década a resolver exatamente estes problemas para aplicações cloud-native. Construímos a infraestrutura, ferramentas e confiança em que os programadores confiam para executar milhares de milhões de containers em produção. Agora, estamos a aplicar estes mesmos princípios ao ecossistema MCP.

Quando executas um servidor MCP do nosso Catalog, obtens:

- Assinaturas criptográficas que verificam que a imagem não foi adulterada
- Software Bill of Materials (SBOMs) documentando cada componente
- Isolamento completo do teu sistema host
- Acesso controlado apenas ao que o servidor realmente precisa

Não se trata de tornar a vida mais difícil para os programadores — trata-se de tornar a segurança o caminho de menor resistência.

## Apresentação do MCP Catalog melhorado
### Construído para descoberta MCP
Reimaginámos o MCP Catalog para o tornar mais acessível e fácil de navegar. Podes ainda aceder ao MCP Catalog a partir do Docker Hub e do MCP Toolkit no Docker Desktop como antes, ou ir diretamente ao MCP catalog. Fomos além das listagens genéricas de imagens de container construindo funcionalidades que te ajudam a encontrar rapidamente os servidores MCP certos para as tuas aplicações de IA.

Navegar por Caso de Uso: Os servidores MCP estão organizados pelo que realmente fazem:

- Integração de Dados (bases de dados, APIs, sistemas de ficheiros)
- Ferramentas de Desenvolvimento (IDEs, análise de código, testing)
- Comunicação (email, Slack, plataformas de mensagens)
- Produtividade (gestão de tarefas, calendários, notas)
- Analytics (processamento de dados, visualização, reporting)

**Pesquisa Avançada**: Encontra servidores por capacidade, ferramentas, tags GitHub e categorias — não apenas por nome.

**Transparência de Segurança**: Cada entrada do catalog mostra claramente se é construída pelo Docker (com assinatura e verificação transparente do build) ou construída pela comunidade (containerizada e mantida pelo publisher).

### Como classificamos Servidores MCP: Construídos pelo Docker vs. Construídos pela Comunidade
**Servidores Construídos pelo Docker**: Quando vês "Built by Docker", estás a obter o nosso tratamento de segurança completo. Controlamos toda a pipeline de build, fornecendo assinaturas criptográficas, SBOMs, atestações de proveniência e scanning contínuo de vulnerabilidades.

**Servidores Construídos pela Comunidade**: Estes servidores são empacotados como imagens Docker pelos seus programadores. Embora não controlemos o seu processo de build, ainda beneficiam do isolamento de containers, que é uma melhoria massiva de segurança comparada com execução direta.

Os tiers cumprem papéis importantes: Servidores construídos pelo Docker demonstram o padrão ouro para segurança, enquanto servidores construídos pela comunidade garantem que podemos escalar rapidamente para satisfazer a procura dos programadores. Os programadores podem mudar de ideias após submeter um servidor construído pela comunidade e optar por resubmetê-lo como servidor construído pelo Docker.

Screenshot 2025-06-26 105434
Figura 3: Um exemplo de Servidor MCP Built by Docker.

## Aberto para submissão de Servidores MCP: Junta-te ao movimento MCP seguro

{{< github repo="docker/mcp-registry" >}}


A partir de hoje, estamos a abrir o nosso processo de submissão à comunidade. Quer sejas um programador individual ou uma equipa enterprise, podes apresentar os teus servidores MCP no Docker MCP Catalog. Ao publicar através do nosso catalog, não estás apenas a distribuir o teu servidor MCP — estás a ajudar a estabelecer um novo padrão de segurança para todo o ecossistema enquanto tornas as tuas ferramentas MCP disponíveis para milhões de programadores que já usam Docker via Docker Hub e Docker Desktop. O teu servidor containerizado torna-se parte da solução, demonstrando que ferramentas de IA prontas para produção não requerem comprometer a segurança.


Continua a ler o post original no [Docker Blog](https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/).
