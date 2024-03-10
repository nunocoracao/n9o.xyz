---
title: "Iniciação do Docker"
summary: "Inicializar Dockerfiles e Compor arquivos com um único comando CLI"
categories: ["Externo"]
tags: ["docker","blog","lançamento"]
externalUrl: "https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/"
date: 2023-05-11
draft: false
showauthor: false
authors:
  - nunocoracao
# series: ["The Complete PM"]
# series\_order: 1

---
O Docker revolucionou a maneira como os desenvolvedores criam, empacotam e implantam seus aplicativos. Os contêineres Docker fornecem um ambiente de tempo de execução leve, portátil e consistente que pode ser executado em qualquer infraestrutura. E agora, a equipe do Docker desenvolveu o `docker init`, um novo comando de interface de linha de comando (CLI) introduzido como um recurso beta que simplifica o processo de adição do Docker a um projeto (Figura 1).

{{< alerta >}}
Nota: Docker Init não deve ser confundido com o executável docker-init usado internamente, que é invocado pelo Docker ao utilizar o sinalizador –init com o comando docker run.
{{< /alert >}}

{{< galeria >}}
  <img src="img/img1.webp" class="grid-w50" />
  <img src="img/img2.webp" class="grid-w50" />
{{< /galeria >}}


*Com um comando, todos os arquivos Docker necessários são criados e adicionados ao seu projeto.*

## Crie ativos automaticamente
O novo comando docker init automatiza a criação de ativos Docker necessários, como Dockerfiles, arquivos Compose e arquivos .dockerignore, com base nas características do projeto. Ao executar o comando docker init, os desenvolvedores podem rapidamente colocar seus projetos em contêineres. Docker init é uma ferramenta valiosa para desenvolvedores que desejam experimentar o Docker, aprender sobre conteinerização ou integrar o Docker em seus projetos existentes.

Para usar o docker init, os desenvolvedores precisam atualizar para a versão 4.19.0 ou posterior do Docker Desktop e executar o comando na pasta do projeto de destino. O Docker init detectará as definições do projeto e gerará automaticamente os arquivos necessários para executar o projeto no Docker.

A versão beta atual do docker init oferece suporte a Go, Node e Python, e nossa equipe de desenvolvimento está trabalhando ativamente para estender o suporte a linguagens e estruturas adicionais, incluindo Java, Rust e .NET. Se houver um idioma ou pilha que você gostaria de ver adicionado ou se tiver outro feedback sobre o docker init, informe-nos através do nosso formulário do Google.

Concluindo, docker init é uma ferramenta valiosa para desenvolvedores que desejam simplificar o processo de adição de suporte Docker a seus projetos. Ele automatiza a criação de ativos Docker necessários e pode ajudar a padronizar a criação de ativos Docker em diferentes projetos. Ao permitir que os desenvolvedores se concentrem no desenvolvimento de seus aplicativos e na redução do risco de erros e inconsistências, o Docker init pode ajudar a acelerar a adoção do Docker e da conteinerização.

## Veja o Docker Init em ação
Para ver o docker init em ação, confira o seguinte vídeo de visão geral de Francesco Ciulla, que demonstra a construção dos ativos do Docker necessários para o seu projeto.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/f4cHtDRZv5U" title="Leitor de vídeo do YouTube" frameborder="0" permitir="acelerômetro; reprodução automática; área de transferência -write; mídia criptografada; giroscópio; picture-in-picture; compartilhamento na web" permitir tela cheia></iframe>

<br/>

{{< alerta >}}
**Observação:** esta postagem foi postada originalmente externamente, acesse o [blog do Docker](https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a- single-cli-command/) para ler a postagem completa
{{< /alert >}}