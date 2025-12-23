---
title: "Docker Init"
summary: "単一のCLIコマンドでDockerfileとComposeファイルを初期化"
categories: ["外部"]
tags: ["docker","ブログ","リリース"]
externalUrl: "https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/"
date: 2023-05-11
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Dockerは開発者がアプリケーションを構築、パッケージ化、デプロイする方法を革命的に変えました。Dockerコンテナは、どんなインフラストラクチャでも実行できる軽量でポータブルで一貫したランタイム環境を提供します。そして今、DockerチームはプロジェクトにDockerを追加するプロセスを簡素化するベータ機能として導入された新しいコマンドラインインターフェース（CLI）コマンド`docker init`を開発しました。

{{< alert >}}
注：Docker Initは、docker runコマンドで–initフラグを使用する際にDockerによって呼び出される内部的に使用されるdocker-init実行可能ファイルと混同しないでください。
{{< /alert >}}

{{< gallery >}}
  <img src="img/img1.webp" class="grid-w50" />
  <img src="img/img2.webp" class="grid-w50" />
{{< /gallery >}}


*1つのコマンドで、必要なDockerファイルがすべて作成され、プロジェクトに追加されます。*

## アセットを自動的に作成

新しいdocker initコマンドは、プロジェクトの特性に基づいて、Dockerfile、Composeファイル、.dockerignoreファイルなどの必要なDockerアセットの作成を自動化します。docker initコマンドを実行することで、開発者はプロジェクトをすばやくコンテナ化できます。Docker initは、Dockerを試してみたい、コンテナ化について学びたい、または既存のプロジェクトにDockerを統合したい開発者にとって貴重なツールです。

<br/>

{{< alert >}}
**注：** この投稿は元々外部に投稿されました。全文を読むには[Dockerのブログ](https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/)をご覧ください
{{< /alert >}}
