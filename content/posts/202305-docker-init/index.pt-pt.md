---
title: "Docker Init"
summary: "Inicializa Dockerfiles e ficheiros Compose com um único comando CLI"
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/"
date: 2023-05-11
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

O Docker revolucionou a forma como os programadores constroem, empacotam e implementam as suas aplicações. Os containers Docker fornecem um ambiente de runtime leve, portátil e consistente que pode correr em qualquer infraestrutura. E agora, a equipa Docker desenvolveu o `docker init`, um novo comando de interface de linha de comandos (CLI) introduzido como funcionalidade beta que simplifica o processo de adicionar Docker a um projeto (Figura 1).

{{< alert >}}
Nota: Docker Init não deve ser confundido com o executável docker-init usado internamente, que é invocado pelo Docker quando se utiliza o flag –init com o comando docker run.
{{< /alert >}}

{{< gallery >}}
  <img src="/posts/202305-docker-init/img/img1.webp" class="grid-w50" />
  <img src="/posts/202305-docker-init/img/img2.webp" class="grid-w50" />
{{< /gallery >}}


*Com um comando, todos os ficheiros Docker necessários são criados e adicionados ao teu projeto.*

## Criar recursos automaticamente
O novo comando docker init automatiza a criação de recursos Docker necessários, como Dockerfiles, ficheiros Compose e ficheiros .dockerignore, com base nas características do projeto. Ao executar o comando docker init, os programadores podem rapidamente containerizar os seus projetos. Docker init é uma ferramenta valiosa para programadores que querem experimentar com Docker, aprender sobre containerização ou integrar Docker nos seus projetos existentes.

Para usar docker init, os programadores precisam de atualizar para a versão 4.19.0 ou posterior do Docker Desktop e executar o comando na pasta do projeto alvo. O Docker init irá detetar as definições do projeto e gerar automaticamente os ficheiros necessários para correr o projeto em Docker.

A versão Beta atual do docker init suporta Go, Node e Python, e a nossa equipa de desenvolvimento está a trabalhar ativamente para estender o suporte a linguagens e frameworks adicionais, incluindo Java, Rust e .NET. Se há uma linguagem ou stack que gostarias de ver adicionada ou se tens outro feedback sobre o docker init, diz-nos através do nosso formulário Google.

Em conclusão, docker init é uma ferramenta valiosa para programadores que querem simplificar o processo de adicionar suporte Docker aos seus projetos. Automatiza a criação de recursos Docker necessários e pode ajudar a padronizar a criação de recursos Docker em diferentes projetos. Ao permitir que os programadores se concentrem no desenvolvimento das suas aplicações e reduzindo o risco de erros e inconsistências, Docker init pode ajudar a acelerar a adoção do Docker e da containerização.

## Ver Docker Init em ação
Para ver docker init em ação, vê o seguinte vídeo de visão geral de Francesco Ciulla, que demonstra a construção dos recursos Docker necessários para o teu projeto.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/f4cHtDRZv5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/>

{{< alert >}}
**Nota:** este post foi originalmente publicado externamente, por favor vai ao [blog do Docker](https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/) para ler o post completo
{{< /alert >}}
