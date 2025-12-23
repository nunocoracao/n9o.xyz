---
title: "Docker MCP Catalog：发现和运行MCP服务器的安全方式"
summary: "模型上下文协议（MCP）生态系统正在爆发式增长。在短短几周内，我们的Docker MCP Catalog已超过100万次拉取，验证了开发者对安全运行MCP服务器的渴望。今天，我们很高兴分享Docker MCP Catalog的重大更新，包括增强的发现功能和我们新的开放提交流程。"
categories: ["外部"]
tags: ["docker","博客","发布"]
externalUrl: "https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/"
date: 2025-07-01
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

模型上下文协议（MCP）生态系统正在爆发式增长。在短短几周内，我们的Docker MCP Catalog已超过100万次拉取，验证了开发者对安全运行MCP服务器的渴望。今天，我们很高兴分享Docker MCP Catalog的重大更新，包括增强的发现功能和我们新的开放提交流程。已有数百名开发者请求通过Docker发布他们的MCP服务器，我们正在加速我们的使命，使容器化MCP服务器成为安全AI工具分发的标准。

MCP服务器的快速采用也凸显了一个关键问题——当前通过npx或uvx命令运行它们的做法使系统暴露于具有完全主机访问权限的未经验证的代码，更不用说依赖管理的摩擦。在这篇文章中，我们将解释为什么Docker要投资MCP生态系统，展示新的catalog功能，并分享您如何为构建更安全的AI应用基础做出贡献。

## 为什么Docker要构建MCP Catalog
### MCP分发中的安全问题
每当开发者运行npx -y @untrusted/mcp-server或uvx some-mcp-tool时，他们都在做一个危险的权衡：便利优先于安全。这些命令直接在主机系统上执行任意代码，具有完全访问权限：

- 整个文件系统
- 网络连接
- 环境变量和密钥
- 系统资源

一些MCP客户端限制环境变量访问，但即使这也不是通用做法。这是不可持续的。随着MCP从实验走向生产，我们需要一种根本不同的方法。

### Docker的独特地位
Docker花了十多年时间为云原生应用解决这些问题。我们构建了开发者赖以在生产中运行数十亿容器的基础设施、工具和信任。现在，我们正在将这些相同的原则应用于MCP生态系统。

当您从我们的Catalog运行MCP服务器时，您将获得：

- 验证镜像未被篡改的加密签名
- 记录每个组件的软件物料清单（SBOM）
- 与主机系统完全隔离
- 仅对服务器实际需要的内容进行受控访问

这不是要让开发者的生活更困难——而是让安全成为阻力最小的路径。

## 介绍增强版MCP Catalog
### 为MCP发现而构建
我们重新设计了MCP Catalog，使其更易于访问和导航。您仍然可以像以前一样从Docker Hub和Docker Desktop中的MCP Toolkit访问MCP Catalog，或直接进入MCP catalog。我们超越了通用容器镜像列表，构建了帮助您快速找到适合您AI应用的MCP服务器的功能。

按用例浏览：MCP服务器按其实际功能组织：

- 数据集成（数据库、API、文件系统）
- 开发工具（IDE、代码分析、测试）
- 通信（电子邮件、Slack、消息平台）
- 生产力（任务管理、日历、笔记）
- 分析（数据处理、可视化、报告）

**增强搜索**：按功能、工具、GitHub标签和类别查找服务器——不仅仅是按名称。

**安全透明度**：每个catalog条目清楚地显示它是Docker构建的（具有透明的构建签名和验证）还是社区构建的（由发布者容器化和维护）。

### 我们如何分类MCP服务器：Docker构建 vs. 社区构建
**Docker构建的服务器**：当您看到"Built by Docker"时，您将获得我们完整的安全处理。我们控制整个构建管道，提供加密签名、SBOM、来源证明和持续漏洞扫描。

**社区构建的服务器**：这些服务器由其开发者打包为Docker镜像。虽然我们不控制他们的构建过程，但它们仍然受益于容器隔离，这比直接执行是一个巨大的安全改进。

层级发挥重要作用：Docker构建的服务器展示了安全的黄金标准，而社区构建的服务器确保我们能够快速扩展以满足开发者需求。开发者可以在提交社区构建的服务器后改变主意，选择重新提交为Docker构建的服务器。

Screenshot 2025-06-26 105434
图3：Built by Docker MCP服务器示例。

## 开放MCP服务器提交：加入安全MCP运动

{{< github repo="docker/mcp-registry" >}}


从今天开始，我们向社区开放我们的提交流程。无论您是个人开发者还是企业团队，您都可以在Docker MCP Catalog上展示您的MCP服务器。通过我们的catalog发布，您不仅是在分发您的MCP服务器——您正在帮助为整个生态系统建立新的安全标准，同时让数百万已经通过Docker Hub和Docker Desktop使用Docker的开发者可以使用您的MCP工具。您的容器化服务器成为解决方案的一部分，证明生产就绪的AI工具不需要在安全性上妥协。


继续阅读[Docker博客](https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/)上的原文。
