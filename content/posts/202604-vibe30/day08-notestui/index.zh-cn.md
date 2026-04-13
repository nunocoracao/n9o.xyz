---
title: "30 Days of Vibe Coding - Day 8 - NotesTUI"
description: "一个基于终端的Markdown笔记应用，支持全文搜索、分类、主题和用于AI集成的MCP服务器。"
summary: "一个基于终端的Markdown笔记应用，支持全文搜索、分类、主题和用于AI集成的MCP服务器。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-08", "go", "tui", "terminal", "notes", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 8
seriesOpened: false
date: 2026-04-13
draft: false
---

第8天。昨天我给git仓库做了个TUI。今天我给自己的大脑做了一个。

## 提示词

> "用Go构建一个支持Markdown和MCP服务器的终端笔记应用。"

这就是起点。简短、模糊，几乎算不上规格说明。我把它扔进了[Watchfire](https://watchfire.io)，让它把这个想法扩展成完整的产品定义：用Glamour做应用内编辑和Markdown预览、SQLite FTS5全文搜索、分类、标签、多种配色主题、vim键位绑定、MCP服务器模式、GoReleaser、GitHub Actions CI、安装脚本。这一切都来自Watchfire把我的一句话变成了36个任务。

## 构建过程

前30个左右的任务构建了核心笔记应用：在终端里创建和编辑笔记、用Glamour渲染Markdown、SQLite FTS5驱动的全文搜索、分类、标签、多种主题、vim风格键位绑定。所有数据存储在 `~/.notestui/` 目录下，包含一个SQLite数据库和一个YAML配置文件。

然后最后一批任务处理了分发侧的工作。用于跨平台构建的GoReleaser配置、GitHub Actions CI、一个自动检测操作系统和架构的安装脚本，以及一个清理一切的卸载脚本。最终有了一个完整的README，作为独立二进制文件准备好发布。

MCP服务器模式是最有意思的部分。运行 `notestui serve` 会启动一个Model Context Protocol服务器，把你的笔记暴露给AI工具。列出笔记、搜索、创建、更新、删除，全部通过MCP完成。这意味着Claude Code或任何兼容MCP的AI助手可以直接操作你的笔记。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成果展示

![NotesTUI empty state with welcome screen](images/screenshot-01.png)

**空状态很友好。** 第一次运行时会看到一个干净的欢迎界面，告诉你按 `n` 来创建第一条笔记。底部栏显示所有键位绑定。

![Creating a new note with title, tags, and content](images/screenshot-02.png)

**编辑器内置在里面。** 按 `n` 会出现标题、标签和内容的输入框。Tab在字段间切换，Ctrl+S保存。不需要启动外部编辑器，一切都在TUI内完成。

![Notes list with preview panel](images/screenshot-03.png)

**分栏布局。** 左边是笔记列表，右边是预览。标签以彩色标签的形式显示在标题下方。顶部状态栏写着"Your markdown notes, beautifully organized"，这是AI自己加的一个小巧思。

![Editing a longer note with markdown content](images/screenshot-04.png)

**Markdown编辑能处理真实内容。** 我粘贴了一篇较长的笔记，编辑器处理得很好。内容区域可以滚动，保存后预览面板用Glamour渲染Markdown。

![Full-text search results with preview](images/screenshot-05.png)

**搜索又快又实用。** 按 `/` 搜索，它会用SQLite FTS5对所有笔记进行全文搜索。结果显示在左面板，匹配笔记的预览在右边。搜索关键词在预览中会被高亮。

![MCP settings screen - not connected](images/screenshot-06.png)

**MCP集成有专门的设置界面。** 按 `m` 打开MCP设置。它显示连接状态、可用工具和设置说明。未连接时，会引导你一步步完成设置。

![MCP settings screen - connected to Claude Code](images/screenshot-07.png)

**连接后会显示状态。** 设置界面更新显示NotesTUI已连接到Claude Code，并提供断开连接的按钮和刷新状态的选项。

![Claude Code creating notes through MCP](images/screenshot-08.png)

**精彩的来了。** 我让Claude Code"给我写一些关于所有漫威角色的笔记，每个角色一条。"它开始通过MCP调用 `notestui - create_note`，生成详细的角色档案并直接推送到我的笔记数据库。

![Claude Code bulk-creating Marvel character notes](images/screenshot-09.png)

**它根本停不下来。** Claude创建了雷神、浩克、黑寡妇、鹰眼、美国队长、钢铁侠的笔记，每条都包含能力、技能、关键事实和扮演者信息。全部通过Claude Code到NotesTUI的MCP工具调用完成。

![More Marvel notes being created via MCP](images/screenshot-10.png)

**笔记源源不断。** 可以看到左边的笔记列表随着Claude的创建不断增长。每条都有恰当的标签，如"marvel"、"avengers"、"mcu"。AI甚至决定超越最初的6个复仇者，添加了绯红女巫、幻视等更多角色。

![Search results for "spiderman" across all notes](images/screenshot-11.png)

**16条笔记创建完毕，全部可搜索。** AI完成后，我搜索了"spiderman"，得到了完整的角色档案，包括真名、能力、关键事实和MCU出场作品。分栏视图在右侧显示渲染后的Markdown预览。

![Note detail view with markdown rendering](images/screenshot-12.png)

**Markdown渲染很扎实。** Glamour处理标题、粗体、列表项和引用块都没问题。右面板的笔记预览干净易读。

![Side-by-side NotesTUI and Claude Code](images/screenshot-13.png)

**与Claude Code并排显示。** 左边运行NotesTUI，右边运行Claude Code。当Claude通过MCP创建笔记时，它们实时出现在TUI中。新笔记到达时列表自动滚动。

![Claude Code querying notes through MCP](images/screenshot-14.png)

**AI也能读你的笔记。** 我问Claude"根据我的笔记，蜘蛛侠的名字是什么？"它通过MCP调用 `notestui - get_note` 来查找答案。它从我的笔记中提取了数据并正确回答：Peter Benjamin Parker。AI既能写入也能读取你的个人笔记数据库。

## 数据

- **36个Watchfire任务**，从空仓库到发布二进制文件
- **纯Go**，无CGO依赖（使用纯Go SQLite）
- **6个MCP工具**：列表、搜索、获取、创建、更新、删除
- **多种主题**和vim键位绑定
- **GoReleaser + GitHub Actions**实现自动跨平台构建
- **安装和卸载脚本**一并包含
- **实际动手时间：** 大约25分钟用于测试、提示和体验MCP集成

## 来试试

{{< github repo="nunocoracao/Vibe30-day08-notestui" showThumbnail=true >}}

一行命令安装：

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day08-notestui/main/scripts/install.sh | bash
```

或者从源码安装：

```bash
go install github.com/nunocoracao/Vibe30-day08-notestui@latest
```

然后运行 `notestui` 开始记笔记，或者运行 `notestui serve` 启动MCP服务器。

## Day 8 总结

笔记应用本身很扎实。干净的TUI、快速的搜索、漂亮的Markdown渲染。如果我没有迁移到Obsidian的话，这就是那种我真的会每天用的工具。但MCP服务器才是让这个项目与挑战中其他所有项目都不同的地方。

漫威角色的演示很有趣，但想想MCP服务器实际上能做什么。这不仅仅是一个AI可以往里塞冷知识的笔记应用。它是一个任何MCP兼容AI代理都能读写的持久化知识库。你可以用它来驱动代理的记忆。把会议笔记、项目上下文、研究成果放进去，然后任何MCP兼容的助手都能按需查询这些知识。"笔记应用"和"代理知识库"之间的界限，原来就是一个MCP服务器。

看着Claude在另一个终端里打字的同时，笔记实时出现在TUI中——这是Vibe Coding这整件事突然说得通的时刻。你构建一个工具，给它一个AI接口，突然它就能做到你压根没想过要要求的事情。

36个Watchfire任务。额外的复杂性来自MCP服务器、分发脚本和CI流水线。但最终的结果是一个正经的Go工具，一条curl命令就能安装，开箱即用地支持AI助手。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第8天。跟随我用AI辅助编程在30天内发布30个项目的旅程。*
