---
title: "Simplifica a Dockerização com Docker Init GA"
summary: "Inicializa Dockerfiles e ficheiros Compose com um único comando CLI"
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/"
date: 2024-02-06
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---


Em maio de 2023, a Docker anunciou o lançamento beta do docker init, uma nova ferramenta de interface de linha de comandos (CLI) no Docker Desktop concebida para simplificar o processo de configuração Docker para vários tipos de aplicações e ajudar os utilizadores a containerizar os seus projetos existentes. Estamos agora entusiasmados em anunciar a disponibilidade geral do docker init, com suporte para múltiplas linguagens e stacks, tornando mais simples do que nunca containerizar as tuas aplicações.


<img src="/posts/202402-docker-init-ga/feature.webp"/>


## O que é docker init?
Inicialmente lançado na sua forma beta no Docker 4.18, o docker init passou por várias melhorias. docker init é um utilitário de linha de comandos que ajuda na inicialização de recursos Docker dentro de um projeto. Gera automaticamente Dockerfiles, ficheiros Compose e ficheiros .dockerignore com base na natureza do projeto, reduzindo significativamente o tempo de configuração e a complexidade associada às configurações Docker.

O lançamento beta inicial do init veio apenas com suporte para Go e projetos genéricos. A versão mais recente, disponível no Docker Desktop 4.27, suporta Go, Python, Node.js, Rust, ASP.NET, PHP e Java.

## Como usar docker init
Usar o docker init é simples e envolve alguns passos simples. Começa por navegar até ao diretório do teu projeto onde queres que os recursos Docker sejam inicializados. No terminal, executa o comando docker init. Este comando inicia a ferramenta e prepara-a para analisar o teu projeto (Figura 1).


<img src="/posts/202402-docker-init-ga/img/img1.webp"/>


docker init irá analisar o teu projeto e pedir-te para confirmar e escolher o template que melhor se adequa à tua aplicação. Assim que selecionares o template, o docker init pede algumas informações específicas do projeto, gerando automaticamente os recursos Docker necessários para o teu projeto (Figura 2).

<img src="/posts/202402-docker-init-ga/img/img2.webp"/>

Este passo inclui a criação de um Dockerfile e um ficheiro Compose adaptados à linguagem e framework da tua escolha, bem como outros ficheiros relevantes. O último passo é executar docker-compose up para iniciar o teu projeto recém-containerizado.

## Porquê usar docker init?
A ferramenta docker init simplifica o processo de dockerização, tornando-o acessível mesmo para quem é novo no Docker. Elimina a necessidade de escrever manualmente Dockerfiles e outros ficheiros de configuração do zero, poupando tempo e reduzindo o potencial de erros. Com a sua abordagem baseada em templates, o docker init garante que a configuração Docker é otimizada para o tipo específico de aplicação em que estás a trabalhar e que o teu projeto seguirá as melhores práticas da indústria.

## Conclusão
A disponibilidade geral do docker init oferece uma forma eficiente e amigável de integrar o Docker nos teus projetos. Quer sejas um utilizador Docker experiente ou novo na containerização, o docker init está pronto para melhorar o teu fluxo de trabalho de desenvolvimento.

{{< alert >}}
**Nota:** este post foi originalmente publicado externamente, por favor vai ao [blog do Docker](https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/) para ler o post completo
{{< /alert >}}
