---
title: "Conheça o Gordon: O Agente de IA da Docker para Todo o seu Fluxo de Trabalho com Contentores"
summary: "O Gordon está agora disponível de forma geral — o agente de IA da Docker, integrado no Docker Desktop e na CLI, que lê o seu ambiente, traça falhas e executa ações em todo o seu fluxo de trabalho com a sua aprovação explícita."
categories: ["Externo"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/"
date: 2026-05-19
draft: false
---

Os fluxos de trabalho com contentores estão cheios de pequenas fricções que se acumulam: caches de build invalidadas no pior momento, serviços que não se encontram uns aos outros, imagens que funcionam localmente mas falham em CI, e mensagens de erro que apontam para recursos que já não existem. Os assistentes de código de uso geral são óptimos em lógica de aplicação, mas não conseguem ver os seus contentores em execução, os seus logs, os seus ficheiros compose ou o estado da sua máquina. Apenas sabem o que cola.

O Gordon foi construído precisamente para essa lacuna. Hoje, o Gordon está disponível de forma geral — o agente de IA da Docker, concebido especificamente para fluxos de trabalho com contentores, integrado no Docker Desktop e na CLI.

## O que o Gordon faz

O Gordon lê o seu ambiente antes de perguntar. Olha para logs, imagens, ficheiros compose e contentores em execução, traça as falhas até à causa real, propõe uma solução e — com a sua aprovação — executa ações através da Docker CLI e do seu sistema de ficheiros.

Algumas das coisas que o Gordon reduz de horas para minutos:

- **Depurar contentores partidos** — "O meu contentor está sempre a sair" → o Gordon lê os logs, identifica a variável de ambiente em falta, a imagem base incorrecta ou o volume mal configurado e propõe uma solução.
- **Containerizar novas apps** — "Containeriza esta app e monta um ambiente de desenvolvimento com Postgres" → o Gordon escreve o Dockerfile, a stack de compose e executa-a.
- **Optimizar Dockerfiles** — Builds multi-stage, reordenação de camadas para melhores cache hits, imagens base mais leves, health checks.
- **Operações rotineiras** — "Limpa as imagens não utilizadas" → o Gordon mostra-lhe os comandos para aprovação, sem necessidade de procurar flags.
- **Consultas de contexto** — Pergunte sobre contentores em execução, uso do disco ou imagens sem memorizar os flags do Docker.
- **Aprender em contexto** — Obtenha conceitos do Docker explicados à luz da sua configuração real, não de um post de blogue desactualizado.

## Onde o Gordon vive

O Gordon está integrado em dois lugares:

- **Docker Desktop** — um separador dedicado com contexto completo do ambiente, mais surgimento contextual quando aparecem problemas.
- **CLI** — execute `docker ai` no seu terminal.

Disponível no Docker Desktop 4.74 ou superior.

## Aprovação primeiro, by design

Cada acção que o Gordon executa — cada comando de shell, cada modificação de ficheiro, cada operação Docker — é-lhe mostrada para aprovação antes de correr. As permissões têm âmbito de sessão e são repostas quando a sessão fecha. Pode opcionalmente activar a auto-aprovação para fluxos de confiança. Nenhum código ou dados pessoais são armazenados, e os fornecedores de IA não retêm os seus dados. A infra-estrutura subjacente é atestada SOC 2 Tipo 2 e certificada ISO 27001.

## O Gordon na stack

O Gordon não substitui assistentes de código como o Cursor, Copilot ou Claude Code — complementa-os. Essas ferramentas tratam da lógica da aplicação e da geração de novo código. O Gordon trata dos fluxos de trabalho com contentores, infra-estrutura, depuração e deployment. Juntos, cobrem todo o caminho do código até produção sem mudança de contexto.

## Preços

O Gordon é gratuito com qualquer conta Docker, com limites de uso que se repõem a cada poucas horas. Para uso mais intenso, o Gordon Plus adiciona 2x de capacidade por 20 $/mês, com planos que escalam até 20x.

## Começar

1. Actualize o Docker Desktop para 4.74 ou superior
2. Clique no ícone do Gordon na barra lateral, ou execute `docker ai` no seu terminal
3. Aponte-o para um projecto e pergunte-lhe algo — "optimiza o meu Dockerfile" é um bom primeiro prompt

Continue a ler o post original no [Docker Blog](https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/).
