---
title: "Simplifique a Dockerização com Docker Init GA"
summary: "Inicializar Dockerfiles e Compor arquivos com um único comando CLI"
categories: ["Externo"]
tags: ["docker","blog","lançamento"]
externalUrl: "https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/"
date: 2024-02-06
draft: false
showauthor: false
authors:
  - nunocoracao
# series: ["The Complete PM"]
# series\_order: 1

---
Em maio de 2023, o Docker anunciou o lançamento beta do docker init, uma nova ferramenta de interface de linha de comando (CLI) no Docker Desktop projetada para agilizar o processo de configuração do Docker para vários tipos de aplicativos e ajudar os usuários a conteinerizar seus projetos existentes. Agora temos o prazer de anunciar a disponibilidade geral do docker init, com suporte para vários idiomas e pilhas, tornando mais simples do que nunca a conteinerização de seus aplicativos.


<img src="feature.webp"/>


## O que é inicialização do docker?
Lançado inicialmente em sua forma beta no Docker 4.18, o docker init passou por diversas melhorias. docker initis é um utilitário de linha de comando que auxilia na inicialização de recursos do Docker em um projeto. Ele gera automaticamente Dockerfiles, arquivos Compose e arquivos.dockerignore com base na natureza do projeto, reduzindo significativamente o tempo de configuração e a complexidade associada às configurações do Docker.

A versão beta inicial do init veio com suporte apenas para projetos Go e genéricos. A versão mais recente, disponível no Docker Desktop 4.27, oferece suporte a Go, Python, Node.js, Rust, ASP.NET, PHP e Java.

## Como usar o docker init
Usar o docker init é direto e envolve algumas etapas simples. Comece navegando até o diretório do projeto onde deseja que os ativos do Docker sejam inicializados. No terminal, execute o comando docker init. Este comando inicia a ferramenta e a prepara para analisar seu projeto (Figura 1).


<img src="img/img1.webp"/>


docker init irá escanear seu projeto e pedir que você confirme e escolha o modelo que melhor se adapta à sua aplicação. Depois de selecionar o modelo, o docker init solicita algumas informações específicas do projeto, gerando automaticamente os recursos Docker necessários para o seu projeto (Figura 2).

<img src="img/img2.webp"/>

Esta etapa inclui a criação de um Dockerfile e um arquivo Compose adaptados à linguagem e estrutura de sua escolha, bem como outros arquivos relevantes. A última etapa é executar docker-compose up para iniciar seu projeto recém-conteinerizado.

## Por que usar o docker init?
A ferramenta docker init simplifica o processo de dockerização, tornando-o acessível até mesmo para quem é novo no Docker. Ele elimina a necessidade de escrever manualmente Dockerfiles e outros arquivos de configuração do zero, economizando tempo e reduzindo o potencial de erros. Com sua abordagem baseada em modelos, o docker init garante que a configuração do Docker seja otimizada para o tipo específico de aplicativo em que você está trabalhando e que seu projeto seguirá as melhores práticas do setor.

## Conclusão
A disponibilidade geral do docker init oferece uma maneira eficiente e fácil de integrar o Docker aos seus projetos. Quer você seja um usuário experiente do Docker ou novo na conteinerização, o docker init foi configurado para aprimorar seu fluxo de trabalho de desenvolvimento.

{{< alerta >}}
**Observação:** esta postagem foi postada originalmente externamente, acesse o [blog do Docker](https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/) para ler a postagem completa
{{< /alert >}}