---
title: "Docker Business 和 Teams 批量添加用户"
description: "忘掉手动邀请团队成员加入 Docker Desktop 吧。使用 Docker Business 的批量添加功能，通过 CSV 文件或 Docker ID 邀请整个团队！"
summary: "忘掉手动邀请团队成员加入 Docker Desktop 吧。使用 Docker Business 的批量添加功能，通过 CSV 文件或 Docker ID 邀请整个团队！"
categories: ["产品"]
tags: ["Docker"]
externalUrl: "https://www.docker.com/blog/bulk-user-add-for-docker-business-and-teams/"
date: 2022-07-27
draft: false
---

{{< alert >}}
本文最初在外部发布，阅读原文请点击<a target="_blank" href="https://www.docker.com/blog/bulk-user-add-for-docker-business-and-teams/">这里</a>。
{{</ alert >}}

Docker 的目标是为客户创造世界级的产品体验。我们希望构建一个强大的产品，帮助所有团队实现他们的目标。为此，我们尝试通过 Docker Business 和 Docker Team 订阅的批量用户添加功能来简化将团队加入 Docker 生态系统的过程。

你可以通过上传包含团队成员电子邮件地址的文件到 Docker Hub 来邀请他们加入账户。CSV 文件可以是你专门为此目的创建的文件，也可以是从其他内部系统导出的文件。唯一的要求是文件包含一列将被邀请加入 Docker 的用户的电子邮件地址。一旦通过 Docker Hub 上传 CSV 文件，文件中的每个团队成员都将收到使用其账户的邀请。

<img src="/posts/202207-docker-bulk-add/image1.webp"/>

我们还更新了 Docker Hub 的网页界面，支持一次添加多个成员。我们希望这对较小的团队有用，他们可以直接在网页界面中复制粘贴电子邮件列表并加入所需的每个人。一旦你的团队被邀请，你可以通过 Docker Hub 查看待处理和已接受的邀请。

<img src="/posts/202207-docker-bulk-add/image2.webp.webp"/>

批量用户添加功能可以在不需要为组织设置 SSO 的情况下使用。此功能使你能够充分利用 Docker Team 或 Business 订阅，并大大简化了入职流程。

在我们的文档页面上了解更多关于此功能的信息，并登录你的 Docker Hub 账户亲自体验。

如果你有任何问题或想讨论此功能，请参加我们即将举办的
