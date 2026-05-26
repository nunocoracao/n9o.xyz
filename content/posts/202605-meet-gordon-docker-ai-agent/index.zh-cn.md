---
title: "认识 Gordon：Docker 面向整个容器工作流的 AI 智能体"
summary: "Gordon 正式全面可用——Docker 的 AI 智能体，内置于 Docker Desktop 和 CLI 中，能够读取你的环境、追踪故障，并在你明确批准下贯穿整个容器工作流采取行动。"
categories: ["外部"]
tags: ["docker","博客","AI"]
externalUrl: "https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/"
date: 2026-05-19
draft: false
---

容器工作流充满了不断累积的小摩擦：在最糟糕的时刻失效的构建缓存、彼此找不到的服务、本地能跑但在 CI 上崩溃的镜像，以及指向已不存在资源的错误信息。通用代码助手在应用逻辑上很出色，但它们看不到你正在运行的容器、你的日志、你的 compose 文件，或者你机器的状态。它们只知道你贴进去的内容。

Gordon 正是为这一空缺而生。今天，Gordon 正式全面可用——Docker 的 AI 智能体，专为容器工作流打造，集成于 Docker Desktop 和 CLI 中。

## Gordon 能做什么

Gordon 在你提问之前就先读取你的环境。它查看日志、镜像、compose 文件和正在运行的容器，把故障追溯到真正的根本原因，提出修复方案，并在你的批准下通过 Docker CLI 和你的文件系统执行操作。

Gordon 把这些工作从数小时压缩到数分钟：

- **调试故障容器** —— "我的容器一直在退出" → Gordon 读取日志，识别出缺失的环境变量、错误的基础镜像或配置不当的卷，并提出修复方案。
- **将新应用容器化** —— "把这个应用容器化，并搭一个带 Postgres 的开发环境" → Gordon 编写 Dockerfile、compose 栈并运行起来。
- **优化 Dockerfile** —— 多阶段构建、为更好的缓存命中重排层次、更精简的基础镜像、健康检查。
- **常规操作** —— "清理未使用的镜像" → Gordon 向你展示待批准的命令，无需查找参数。
- **上下文查询** —— 询问正在运行的容器、磁盘使用情况或镜像，而无需记忆 Docker 参数。
- **在上下文中学习** —— 基于你真实的环境讲解 Docker 概念，而不是一篇过时的博客文章。

## Gordon 在哪里

Gordon 集成在两个地方：

- **Docker Desktop** —— 一个具有完整环境上下文的专属标签页，并在问题出现时按上下文展示。
- **CLI** —— 在终端中运行 `docker ai`。

需要 Docker Desktop 4.74 或更高版本。

## 设计上：批准优先

Gordon 执行的每一个操作——每一条 shell 命令、每一次文件修改、每一次 Docker 操作——在运行前都会向你展示以供批准。权限按会话作用域生效，会话关闭时即重置。你可以为可信工作流可选地启用自动批准。不存储任何代码或个人数据，AI 提供方也不会留存你的数据。底层基础设施通过 SOC 2 Type 2 鉴证并取得 ISO 27001 认证。

## Gordon 在技术栈中的位置

Gordon 并不取代 Cursor、Copilot 或 Claude Code 这类代码助手——它是对它们的补充。那些工具负责应用逻辑和新代码生成。Gordon 负责容器工作流、基础设施、调试与部署。两者结合即可覆盖从代码到生产的全流程，无需上下文切换。

## 价格

Gordon 对所有 Docker 账户免费提供，使用额度每隔几小时重置。如需更高强度使用，Gordon Plus 以 20 美元/月提供 2 倍容量，套餐最高可扩展到 20 倍。

## 开始使用

1. 将 Docker Desktop 更新到 4.74 或更高版本
2. 点击侧边栏中的 Gordon 图标，或在终端中运行 `docker ai`
3. 把它指向一个项目并提个问题——"优化我的 Dockerfile" 是一个不错的起手提示

继续阅读 [Docker Blog](https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/) 上的原文。
