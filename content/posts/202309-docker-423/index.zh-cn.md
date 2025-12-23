---
title: "Docker Desktop 4.23"
summary: "Docker Desktop 4.23 现已推出，包含众多增强功能，包括 Docker Init 中的 ASP.NET Core 支持、用于提醒任何需要注意的配置更改的配置完整性检查，以及跨域身份管理。"
categories: ["外部"]
tags: ["docker","博客","发布"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-23/"
date: 2023-09-12
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Docker Desktop 4.23 现已推出，包含众多增强功能，包括 Docker Init 中的 ASP.NET Core 支持、用于提醒任何需要注意的配置更改的配置完整性检查，以及跨域身份管理。此版本还改进了快速搜索，允许在容器、应用程序、Docker Hub、文档和任何卷之间进行搜索，并执行快速操作（启动/停止/删除）。VirtioFS 现已设为默认值，为 Mac 用户提供性能提升。通过 Docker Desktop 4.23 版本，Mac 用户在使用传统网络连接时也将看到网络性能的提升。

在这篇文章中，我们深入探讨 Docker Desktop 最新版本中的新功能和更新。

## ASP.NET Core 与 Docker Init
我们很高兴地宣布增加了对 ASP.NET Core 的支持。无论你是 Docker 新手还是经验丰富的专业人士，Docker Init 现在都能简化你的 ASP.NET Core 项目的 Docker 化过程。只需在项目文件夹中执行简单的 docker init 命令，配合最新版本的 Docker Desktop，就能看到 Docker Init 生成量身定制的 Dockerfile、Compose 文件和 .dockerignore 文件。

特别针对 ASP.NET Core，我们还改进了 Dockerfile 中多架构构建的支持和注释。这一进步将帮助用户管理在不同 CPU 架构之间共享镜像，并简化在 Azure、AWS 和 GCP 等云提供商上的部署。创建适合各种架构的镜像，提高云部署的灵活性和效率。

首先确保你拥有最新版本的 Docker Desktop。然后，通过命令行在项目目录中执行 docker init。让 Docker Init 处理繁重的工作，使你能够专注于核心任务——打造出色的应用程序！

## 配置完整性检查
通过我们新的配置完整性检查确保 Docker Desktop 平稳运行。这允许你继续使用多个本地应用程序和工具，有时可以无忧地进行配置更改。此更新会自动检测并提醒任何配置更改，只需简单点击即可重新建立 Docker Desktop 配置，以跟踪并确保不间断的开发。


## 跨域身份管理
Docker 的用户访问管理变得更加强大。SCIM 帮助自动配置或取消配置用户，现在支持组角色映射，以便你可以相应地组织团队及其访问权限：

你可以在 IdP 中为组织中的成员分配角色。要设置角色，可以为你想要分配角色的人使用可选的用户级属性。
你还可以设置组织和团队来覆盖 SSO 连接设置的默认配置值。
下表列出了支持的可选用户级属性。

## 快速搜索改进
为开发人员提供在需要时无缝访问基本资源的能力，我们改进的快速搜索功能获得了重大升级。现在，用户可以轻松找到：

容器和 Compose 应用程序：轻松定位本地系统上的任何容器或 Compose 应用程序。此外，快速访问环境变量并执行基本操作，如启动、停止或删除它们。
Docker Hub 镜像：无论是公共 Docker Hub 镜像、本地镜像还是来自远程仓库的镜像，快速搜索都将提供快速和相关的结果。
扩展：了解更多关于特定扩展的信息，并通过单击简化安装。
卷：轻松浏览你的卷并获取有关关联容器的信息。
文档：直接从 Docker Desktop 内部即时访问 Docker 官方文档中的宝贵帮助。
增强的快速搜索是你进行资源发现和管理的终极工具，为开发人员提供无与伦比的便利。

## 使用 VirtioFS 为 Mac 用户标准化高性能文件共享
Docker Desktop 4.23 现在默认在 macOS 12.5+ 上使用 VirtioFS 作为标准，在通过 docker run -v 或 Compose YAML 中的绑定挂载与容器共享文件时提供显著的性能提升。VirtioFS 通过允许容器在不需要卷挂载或网络共享的情况下访问文件来最小化文件传输开销。

跳过网络文件传输协议也会导致更快的文件传输。我们测量到性能改进，文件传输时间从 7:13.21 秒减少到 1:4.4 秒——速度提高了 85.15%。我们要注意的是，测量的改进取决于文件大小、正在运行的其他应用程序以及计算机的硬件。

## Mac 用户的 Docker Desktop 网络速度改进
Docker Desktop 4.23 为 Mac 用户带来了改进的网络性能。现在，当容器需要传统网络连接时，用户将以以下方式体验到增强的网络性能：

访问暴露端口速度提高约 10 倍
传输控制协议（TCP）速度提高约 1.5 倍 – 2 倍
用户无需执行任何操作即可享受这些好处——所有更新到 4.23 的 Mac 用户现在将拥有更快的网络速度！

## 结论
立即升级以探索 Docker Desktop 4.23 版本中的新功能。有反馈吗？在我们的公共 GitHub 路线图上留下反馈，让我们知道你希望在即将发布的版本中看到什么。

了解更多
阅读 Docker Desktop 发行说明。
获取最新版本的 Docker Desktop。
有问题吗？Docker 社区随时为你提供帮助。
Docker 新手？开始使用。


{{< alert >}}
**注意：** 此文章最初在外部发布，请访问 [Docker 博客](https://www.docker.com/blog/docker-desktop-4-23/) 阅读完整文章
{{< /alert >}}

