---
title: "Gordon：Docker 的 AI 智能体刚刚迎来更新"
summary: "认识 Gordon，Docker 内置于 Docker Desktop 的 AI 智能体。它理解你的容器、镜像和环境——帮助你调试、生成 Dockerfile 并在获得批准后执行修复。"
categories: ["外部"]
tags: ["docker","博客","AI"]
externalUrl: "https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/"
date: 2026-02-23
draft: false
---

AI 智能体正在从演示走向日常工作流。它们编写代码、运行命令、完成多步骤任务，无需持续手动干预。但通用智能体并不了解 Docker。它们不理解你的容器、你的镜像或你的特定配置。

Gordon 了解。只需在终端运行 `docker ai`，或在 Docker Desktop 中试用。

Gordon 现已在 Docker Desktop 4.61 中提供（仍处于测试阶段），是一款专为 Docker 打造的 AI 智能体。它拥有 shell 访问权限、Docker CLI 访问权限、文件系统访问权限，以及对 Docker 最佳实践的深入了解。将它指向一个问题，批准它的操作，然后看它工作。

## 为什么 Docker 需要自己的智能体

当你的容器以代码 137 退出时，Claude 或 ChatGPT 会解释 OOM 的含义。Gordon 则会检查容器的内存限制、查看日志、找出内存占用过高的进程，并提出修复方案。一次批准，问题解决。

当你需要将 Next.js 应用容器化时，Copilot 可能会建议一个 Dockerfile。Gordon 会检查你的项目结构，检测依赖项，生成带有多阶段构建的生产级 Dockerfile，创建包含正确服务的 docker-compose.yml，并配置好环境变量。

区别在于上下文和执行力。Gordon 知道你的机器上正在运行什么。它可以读取你的 Docker 状态、访问你的文件系统并采取行动。它不是在猜测——它是在与你的实际环境协同工作。

## Gordon 能做什么

**调试和修复** – 容器无法启动。服务不健康。某个进程正在消耗所有内存。Gordon 检查日志、查看容器状态、定位根本原因并提出修复方案。你批准，它执行。

**构建和容器化** – 将这个应用放到 Docker 中运行。Gordon 检查你的项目，生成带有多阶段构建的生产级 Dockerfile，创建包含正确服务的 docker-compose.yml，处理环境配置和依赖项。

**执行和管理** – 清理磁盘空间。停止所有容器。拉取并运行特定镜像。日常的 Docker 操作应该是对话式的，而不是翻文档。

**开发和优化** – 添加健康检查。实现多阶段构建。应用安全最佳实践。缩小镜像体积。让现有的 Docker 配置达到生产级标准。

这一切，Gordon 都能处理。

## Gordon 的工作原理

Gordon 基于 **cagent** 构建，这是 Docker Desktop 自带的智能体框架，在 Docker Desktop 中本地运行。它可以访问：

- **你的 shell** – 经批准后可执行命令
- **你的文件系统** – 读取项目结构、配置文件、日志
- **Docker CLI** – 完全访问 Docker 操作
- **Docker 知识库** – 文档、最佳实践、常见模式

你可以配置 Gordon 的工作目录，指向特定的代码库。这让 Gordon 能够完整了解你的项目结构、依赖项和现有的 Docker 配置。

权限模型很简单：Gordon 向你展示它想要执行的操作，你批准或拒绝，然后它执行。每一条命令。每一次文件更新。每一个 Docker 操作。你不是在被动旁观——你在指挥一个深谙 Docker 之道的智能体。

## 在哪里找到 Gordon

**Docker Desktop：** 在左侧边栏找到 Gordon 图标

**命令行：** 在终端运行 `docker ai`

Gordon 包含在所有 Docker 订阅计划中：

- **Personal：** 已包含
- **Pro：** 3 倍使用量
- **Team：** 3 倍使用量
- **Business：** 6 倍使用量

**Business 用户请注意：** 如果你看不到 Gordon，你的管理员需要为你的组织申请启用。请联系你的 Docker 客户团队或联系支持部门。

## 立即开始

1. 下载 Docker Desktop 4.61+
2. 使用你的 Docker 账户登录
3. 点击 Gordon 图标，选择项目目录，然后输入"优化我的 Dockerfile"
4. 在 Docker Docs 中查阅完整文档

Gordon 现已在 Docker Desktop 4.61 及更高版本中提供。

继续阅读原文，请访问 [Docker 博客](https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/)。
