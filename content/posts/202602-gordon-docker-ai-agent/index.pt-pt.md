---
title: "Gordon: O Agente de IA da Docker Acabou de Receber uma Atualização"
summary: "Conheça o Gordon, o agente de IA da Docker integrado no Docker Desktop. Ele compreende os seus contentores, imagens e ambiente — e ajuda-o a depurar, gerar Dockerfiles e aplicar correções com a sua aprovação."
categories: ["Externo"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/"
date: 2026-02-23
draft: false
---

Os agentes de IA estão a passar das demonstrações para os fluxos de trabalho diários. Escrevem código, executam comandos e completam tarefas com múltiplas etapas sem necessidade de acompanhamento constante. Mas os agentes de uso geral não conhecem o Docker. Não compreendem os seus contentores, as suas imagens, nem a sua configuração específica.

O Gordon compreende. Basta executar `docker ai` no seu terminal ou experimentá-lo no Docker Desktop.

Disponível hoje no Docker Desktop 4.61, ainda em versão beta, o Gordon é um agente de IA concebido especificamente para o Docker. Tem acesso à shell, ao Docker CLI, ao seu sistema de ficheiros e um conhecimento profundo das boas práticas do Docker. Aponte-o para um problema, aprove as suas ações e veja-o trabalhar.

## Porquê o Docker Precisa do Seu Próprio Agente

Quando o seu contentor termina com o código 137, o Claude ou o ChatGPT explicam-lhe o que significa OOM. O Gordon verifica o limite de memória do seu contentor, inspeciona os registos, identifica o processo que está a consumir a memória e propõe uma correção. Uma aprovação, e está feito.

Quando precisa de contentorizar uma aplicação Next.js, o Copilot pode sugerir um Dockerfile. O Gordon examina a estrutura do seu projeto, deteta as suas dependências, gera um Dockerfile pronto para produção com builds multi-etapas, cria um docker-compose.yml com os serviços adequados e configura o seu ambiente.

A diferença está no contexto e na execução. O Gordon sabe o que está a correr na sua máquina. Consegue ler o estado do Docker, aceder ao seu sistema de ficheiros e agir. Não está a adivinhar — está a trabalhar com o seu ambiente real.

## O Que o Gordon Faz

**Depurar e corrigir** – O contentor não arranca. O serviço está com problemas. Algo está a consumir toda a memória. O Gordon inspeciona os registos, verifica o estado do contentor, identifica a causa raiz e propõe correções. Aprova, e ele executa.

**Construir e contentorizar** – Pegue nesta aplicação e faça-a correr no Docker. O Gordon examina o seu projeto, gera Dockerfiles prontos para produção com builds multi-etapas, cria um docker-compose.yml com os serviços adequados, trata das configurações de ambiente e das dependências.

**Executar e gerir** – Libertar espaço em disco. Parar todos os contentores. Descarregar e executar imagens específicas. As operações Docker de rotina devem ser conversacionais, não uma ida à documentação.

**Desenvolver e otimizar** – Adicionar health checks. Implementar builds multi-etapas. Aplicar boas práticas de segurança. Reduzir o tamanho das imagens. Tornar as configurações Docker existentes prontas para produção.

O Gordon trata de tudo isto.

## Como Funciona o Gordon

O Gordon é construído sobre o **cagent**, a framework de agentes da Docker incluída no Docker Desktop, e executa-se localmente dentro do Docker Desktop. Tem acesso a:

- **A sua shell** – Pode executar comandos após aprovação
- **O seu sistema de ficheiros** – Lê a estrutura do projeto, configurações, registos
- **Docker CLI** – Acesso completo às operações Docker
- **Base de conhecimento Docker** – Documentação, boas práticas, padrões comuns

Pode configurar o diretório de trabalho do Gordon para apontar para um código-fonte específico. Isto dá ao Gordon contexto completo sobre a estrutura do seu projeto, dependências e configuração Docker existente.

O modelo de permissões é simples: o Gordon mostra-lhe o que pretende fazer, aprova ou rejeita, e depois executa. Cada comando. Cada atualização de ficheiro. Cada operação Docker. Não está a observar passivamente — está a dirigir um agente que conhece o Docker por dentro e por fora.

## Onde Encontrar o Gordon

**Docker Desktop:** Procure o ícone do Gordon na barra lateral esquerda

**CLI:** Execute `docker ai` a partir do seu terminal

O Gordon está incluído em todas as subscrições Docker:

- **Personal:** Incluído
- **Pro:** 3x a capacidade de utilização
- **Team:** 3x a capacidade de utilização
- **Business:** 6x a capacidade de utilização

**Nota para utilizadores Business:** Se não vir o Gordon, o seu administrador precisa de solicitar a ativação para a sua organização. Contacte a sua equipa de conta Docker ou o suporte.

## Comece hoje mesmo

1. Descarregue o Docker Desktop 4.61+
2. Inicie sessão com a sua conta Docker
3. Clique no ícone do Gordon, selecione um diretório de projeto e pergunte "Otimiza o meu Dockerfile"
4. Explore a documentação completa no Docker Docs

O Gordon está disponível agora no Docker Desktop 4.61 e versões posteriores.

Continue a ler o artigo original no [Blog da Docker](https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/).
