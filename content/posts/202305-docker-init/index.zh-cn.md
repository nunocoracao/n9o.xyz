---
title: "Docker Init"
summary: "使用单个CLI命令初始化Dockerfile和Compose文件"
categories: ["外部"]
tags: ["docker","博客","发布"]
externalUrl: "https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/"
date: 2023-05-11
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Docker彻底改变了开发人员构建、打包和部署应用程序的方式。Docker容器提供了一个轻量级、可移植且一致的运行时环境，可以在任何基础设施上运行。现在，Docker团队开发了`docker init`，这是一个作为测试版功能引入的新命令行界面（CLI）命令，简化了向项目添加Docker的过程（图1）。

{{< alert >}}
注意：Docker Init不应与内部使用的docker-init可执行文件混淆，后者是在使用docker run命令的–init标志时由Docker调用的。
{{< /alert >}}

{{< gallery >}}
  <img src="/posts/202305-docker-init/img/img1.webp" class="grid-w50" />
  <img src="/posts/202305-docker-init/img/img2.webp" class="grid-w50" />
{{< /gallery >}}


*使用一个命令，所有必需的Docker文件都会被创建并添加到您的项目中。*

## 自动创建资源
新的docker init命令根据项目的特征自动创建必要的Docker资源，如Dockerfile、Compose文件和.dockerignore文件。通过执行docker init命令，开发人员可以快速将其项目容器化。Docker init对于想要尝试Docker、学习容器化或将Docker集成到现有项目中的开发人员来说是一个有价值的工具。

要使用docker init，开发人员需要升级到Docker Desktop 4.19.0或更高版本，并在目标项目文件夹中执行该命令。Docker init将检测项目定义，并自动生成在Docker中运行项目所需的文件。

当前docker init的Beta版本支持Go、Node和Python，我们的开发团队正在积极努力扩展对更多语言和框架的支持，包括Java、Rust和.NET。如果有您希望添加的语言或技术栈，或者您对docker init有其他反馈，请通过我们的Google表单告诉我们。

总之，docker init对于希望简化向项目添加Docker支持过程的开发人员来说是一个有价值的工具。它自动创建必要的Docker资源，并可以帮助标准化不同项目中Docker资源的创建。通过使开发人员能够专注于开发应用程序并降低错误和不一致性的风险，Docker init可以帮助加速Docker和容器化的采用。

## 观看Docker Init实战
要观看docker init的实际操作，请查看Francesco Ciulla的以下概述视频，该视频演示了如何为您的项目构建所需的Docker资源。

<iframe width="100%" height="315" src="https://www.youtube.com/embed/f4cHtDRZv5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/>

{{< alert >}}
**注意：**此帖子最初是外部发布的，请访问[Docker博客](https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/)阅读完整帖子
{{< /alert >}}
