---
title: "30天极速编程挑战 - 第6天 - 番茄钟"
description: "用 Go 语言和 Bubble Tea 构建的终端番茄钟，具备 ASCII 艺术字、会话追踪和每周统计功能。"
summary: "用 Go 语言和 Bubble Tea 构建的终端番茄钟，具备 ASCII 艺术字、会话追踪和每周统计功能。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-06", "go", "tui", "bubbletea"]
series: ["30 Days of Vibe Coding"]
series_order: 6
seriesOpened: false
date: 2026-04-11
draft: false
---

第6天。是时候离开浏览器了——彻底走出我的舒适区。

到目前为止，每个项目都是 TypeScript、React、Canvas。这些都是我熟悉的语言和框架。今天我想尝试一些不同的东西：当我让 AI 用我从未接触过的工具来构建项目时，会发生什么？

## 提示词

> "用 Go 语言构建一个终端番茄钟，使用 Bubble Tea，具备大号 ASCII 倒计时、基于 SQLite 的会话追踪、每日和每周统计、任务标签，以及可自定义的时长。"

我从未写过 Go。我从未用过 Bubble Tea。我从未接触过 Lip Gloss。不查资料的话，我甚至说不清 `goroutine` 和 `channel` 的区别。这个提示词里的整个技术栈对我来说都是陌生的。

这正是重点所在。五天来在熟悉的领域里构建网页游戏，让我不禁开始思考：AI 辅助编程是否只在我已经懂的技术栈上才有效？如果我扔给它一个我根本看不懂的技术栈，结果会怎样？

## 构建过程

[Watchfire](https://watchfire.io) 拿到提示词后，以与 TypeScript 项目相同的方式进行了分解。用 Go 而非 TypeScript 这件事似乎无关紧要。它选择了 Bubble Tea 作为 TUI 框架，Lip Gloss 负责样式，SQLite 负责持久化存储。没有 Web 服务器，没有 Electron 包装，没有浏览器。只是一个可以在任何地方运行的二进制文件。

项目生成了一个结构清晰的 Go 模块，包含 6 个包下的 11 个源文件：`main`、`ascii`、`config`、`db`、`stats`、`timer` 和 `ui`。每个包都有明确的职责。timer 包处理状态机（空闲、运行、暂停、完成）。UI 包用 Bubble Tea 渲染所有内容。database 包管理 SQLite 持久化。stats 包汇总会话数据，用于每日和每周视图。

它甚至附带了安装脚本、Makefile，以及使用自定义配置加载器实现的规范 CLI 标志——该加载器将 YAML 配置文件与命令行参数合并。这些在 Go 里我自己都不知道怎么设置。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成果展示

![番茄钟准备启动](images/screenshot-01.png)

**大号 ASCII 数字。** 倒计时显示使用了高达 5 行的自定义块字符数字。在房间的另一端也能看清，而这正是番茄钟的意义所在。你应该能一眼瞥到并知道还剩多少时间。

![计时器运行中，带进度条](images/screenshot-02.png)

**颜色区分会话类型。** 工作会话发出红色光芒。短休息变为绿色。长休息则是另一种色调。整个 UI 根据当前阶段切换颜色，让你一眼就知道该工作还是该休息。

![短休息准备开始](images/screenshot-03.png)

**全程追踪记录。** 每个会话都存入本地 SQLite 数据库 `~/.pomo/sessions.db`。顶部信息栏实时显示今日统计：已完成的番茄数和总专注时间。运行 `pomo stats` 可以看到带 ASCII 条形图的每周分解数据。

![短休息进行中](images/screenshot-04.png)

**会话循环正常运作。** 四个工作会话后进入长休息。右上角的进度徽章显示你在循环中的位置（例如 `[WORK 1/4]`）。第四个工作会话结束后，自动切换到 15 分钟的长休息，而不是通常的 5 分钟短休息。

**任务标签。** 运行 `pomo -t "Write blog post"` 后，任务名称会显示在标题栏中，同时也会存入数据库，让你之后查看统计时能看到自己具体在做什么。

**终端提示音。** 会话结束时，终端铃声响起。简单、有效，与你的终端支持的任何通知系统都能配合使用。

## 错误报告

这次没有。计时器在第一次构建时就能正确运行。启动、暂停、恢复、跳过、重置、会话切换，一切都按预期运行。键盘控制响应灵敏，状态机干净利落地处理了各种边界情况。

## 数据指标

- **11 个 Go 源文件**，分布在 6 个包中
- **1 个测试文件**，包含计时器状态机测试
- **4 种会话类型：** 工作、短休息、长休息，以及它们之间的切换
- **SQLite 持久化**，用于会话历史记录
- **YAML + CLI 配置**，带合理的默认值（25/5/15 分钟循环）
- **总实际操作时间：** 大约 20 分钟的测试和提示词调整

## 试用

{{< github repo="nunocoracao/Vibe30-day06-pomodoro" showThumbnail=true >}}

通过以下命令安装：

```bash
go install github.com/nunocoracao/Vibe30-day06-pomodoro@latest
```

或使用安装脚本：

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day06-pomodoro/main/install.sh | bash
```

然后在终端中运行 `pomo` 即可。

## 第6天总结

这个项目回答了我从第1天起就一直萦绕心头的问题：AI 辅助编程是否只在你已经熟悉技术栈时才有效？

不是的。我不会写 Go。我不会用 Bubble Tea 构建 TUI。我不知道如何组织一个六个包的 Go 模块、设置 SQLite 绑定，或者为交叉编译编写 Makefile。但这个工具存在，它能运行，而且是我每天都会实际使用的东西。一个单独的二进制文件，运行时无需依赖，在任何终端中都能工作。

最让我惊喜的是架构设计。六个包，边界清晰。计时器有规范的状态机。优雅的数据库处理——如果 SQLite 失败，计时器仍然可以工作，只是没有统计数据。这正是高级开发者才会做出的决策，而它来自一个不懂这门语言的人写的提示词。

这改变了"非标准"的定义。如果我可以在不懂 Go 的情况下交付一个精良的 Go TUI 应用，那么尝试陌生技术栈的门槛就消失了。实验的成本降到了接近于零。

六天过去了，这是我在写完博客文章后唯一一个还在持续运行的项目。

---

*这是[30天极速编程挑战](/series/30-days-of-vibe-coding/)的第6天。关注我，见证我如何用 AI 辅助编程在30天内交付30个项目。*
