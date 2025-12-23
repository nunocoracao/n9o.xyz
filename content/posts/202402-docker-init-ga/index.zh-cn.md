---
title: "使用 Docker Init GA 简化 Docker 化"
summary: "用单个 CLI 命令初始化 Dockerfile 和 Compose 文件"
categories: ["外部"]
tags: ["docker","博客","发布"]
externalUrl: "https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/"
date: 2024-02-06
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---


2023年5月，Docker 宣布了 docker init 的测试版发布，这是 Docker Desktop 中的一个新命令行界面（CLI）工具，旨在简化各种类型应用程序的 Docker 设置过程，并帮助用户容器化其现有项目。我们现在很高兴地宣布 docker init 正式发布，支持多种语言和技术栈，使容器化应用程序比以往任何时候都更简单。


<img src="/posts/202402-docker-init-ga/feature.webp"/>


## 什么是 docker init？
docker init 最初在 Docker 4.18 中以测试版形式发布，经过了多次改进。docker init 是一个命令行工具，帮助在项目中初始化 Docker 资源。它根据项目的性质自动生成 Dockerfile、Compose 文件和 .dockerignore 文件，大大减少了与 Docker 配置相关的设置时间和复杂性。

init 的最初测试版仅支持 Go 和通用项目。最新版本可在 Docker Desktop 4.27 中使用，支持 Go、Python、Node.js、Rust、ASP.NET、PHP 和 Java。

## 如何使用 docker init
使用 docker init 非常简单，只需几个简单的步骤。首先导航到你希望初始化 Docker 资源的项目目录。在终端中执行 docker init 命令。此命令启动该工具并准备分析你的项目（图1）。


<img src="/posts/202402-docker-init-ga/img/img1.webp"/>


docker init 将扫描你的项目并要求你确认并选择最适合你应用程序的模板。选择模板后，docker init 会询问一些项目特定的信息，自动为你的项目生成必要的 Docker 资源（图2）。

<img src="/posts/202402-docker-init-ga/img/img2.webp"/>

此步骤包括创建针对你选择的语言和框架定制的 Dockerfile 和 Compose 文件，以及其他相关文件。最后一步是运行 docker-compose up 来启动你新容器化的项目。

## 为什么使用 docker init？
docker init 工具简化了 Docker 化过程，使其即使对 Docker 新手也易于访问。它消除了从头手动编写 Dockerfile 和其他配置文件的需要，节省时间并减少错误的可能性。通过其基于模板的方法，docker init 确保 Docker 设置针对你正在处理的特定类型的应用程序进行了优化，并且你的项目将遵循行业最佳实践。

## 结论
docker init 的正式发布提供了一种高效且用户友好的方式来将 Docker 集成到你的项目中。无论你是经验丰富的 Docker 用户还是容器化新手，docker init 都将增强你的开发工作流程。

{{< alert >}}
**注意：** 此文章最初在外部发布，请访问 [Docker 博客](https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/) 阅读完整文章
{{< /alert >}}
