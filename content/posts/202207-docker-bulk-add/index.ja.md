---
title: "Docker BusinessとTeamsの一括ユーザー追加"
description: "Docker Desktopにチームメンバーを手動で招待するのを忘れましょう。Docker Businessの一括追加機能で、CSVファイルまたはDocker IDでチーム全体を招待できます！"
summary: "Docker Desktopにチームメンバーを手動で招待するのを忘れましょう。Docker Businessの一括追加機能で、CSVファイルまたはDocker IDでチーム全体を招待できます！"
categories: ["プロダクト"]
tags: ["Docker"]
externalUrl: "https://www.docker.com/blog/bulk-user-add-for-docker-business-and-teams/"
date: 2022-07-27
draft: false
---

{{< alert >}}
この記事は元々外部で公開されたものです。オリジナルは<a target="_blank" href="https://www.docker.com/blog/bulk-user-add-for-docker-business-and-teams/">こちら</a>でお読みいただけます。
{{</ alert >}}

Dockerの目標は、お客様に世界クラスの製品体験を提供することです。すべてのチームが目標を達成するのに役立つ堅牢な製品を構築したいと考えています。それに沿って、Docker BusinessおよびDocker Teamサブスクリプション向けの一括ユーザー追加機能で、チームをDockerエコシステムにオンボーディングするプロセスを簡素化しようとしました。

メールアドレスを含むファイルをDocker Hubにアップロードすることで、チームをアカウントに招待できます。CSVファイルは、この特定の目的のために作成したファイル、または別の社内システムから抽出したファイルのいずれかです。唯一の要件は、ファイルにDockerに招待されるユーザーのメールアドレスを含む列があることです。Docker Hubを使用してCSVファイルがアップロードされると、ファイル内の各チームメンバーにアカウントを使用するための招待が送信されます。

<img src="/posts/202207-docker-bulk-add/image1.webp"/>

また、Docker Hubのウェブインターフェースを更新して、一度に複数のメンバーを追加できるようにしました。これは、ウェブインターフェースにメールのリストを直接コピー＆ペーストして、必要な全員をオンボーディングできる小規模なチームにとって便利だと思います。チームが招待されると、Docker Hubを通じて保留中および承認済みの招待の両方を確認できます。

<img src="/posts/202207-docker-bulk-add/image2.webp"/>

一括ユーザー追加は、組織にSSOを設定せずに使用できます。この機能により、Docker TeamまたはBusinessサブスクリプションを最大限に活用でき、オンボーディングプロセスを大幅に簡素化します。

この機能の詳細についてはドキュメントページをご覧いただき、Docker Hubアカウントにサインインしてお試しください。

ご質問がある場合や、この機能について議論したい場合は、今後のイベントにご参加ください。
