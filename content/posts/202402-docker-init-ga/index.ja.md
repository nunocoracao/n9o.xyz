---
title: "Docker Init GAでDockerizationを効率化"
summary: "単一のCLIコマンドでDockerfileとComposeファイルを初期化"
categories: ["外部"]
tags: ["docker","ブログ","リリース"]
externalUrl: "https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/"
date: 2024-02-06
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---


2023年5月、Dockerはdocker initのベータリリースを発表しました。これはDocker Desktopの新しいコマンドラインインターフェース（CLI）ツールで、様々なタイプのアプリケーションのDockerセットアッププロセスを効率化し、ユーザーが既存のプロジェクトをコンテナ化するのを支援するために設計されています。このたび、複数の言語とスタックをサポートするdocker initの一般提供を発表できることを嬉しく思います。アプリケーションのコンテナ化がこれまで以上に簡単になりました。


<img src="feature.webp"/>


## docker initとは？
Docker 4.18でベータ版としてリリースされたdocker initは、その後いくつかの強化を受けています。docker initはプロジェクト内のDockerリソースの初期化を支援するコマンドラインユーティリティです。プロジェクトの性質に基づいて、Dockerfile、Composeファイル、.dockerignoreファイルを自動的に生成し、Docker設定に関連するセットアップ時間と複雑さを大幅に削減します。

初期のベータリリースはGoと汎用プロジェクトのみをサポートしていました。Docker Desktop 4.27で利用可能な最新バージョンは、Go、Python、Node.js、Rust、ASP.NET、PHP、Javaをサポートしています。

{{< alert >}}
**注：** この投稿は元々外部に投稿されました。全文を読むには[Dockerのブログ](https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/)をご覧ください
{{< /alert >}}
