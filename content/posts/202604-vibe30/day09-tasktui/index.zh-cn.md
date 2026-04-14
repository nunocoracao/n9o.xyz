---
title: "30 Days of Vibe Coding - Day 9 - TaskTUI"
description: "一个基于终端的个人看板，支持 vim 风格导航和用于 Claude Code 集成的 MCP 服务器，使用 Go 和 Bubble Tea 构建。"
summary: "一个基于终端的个人看板，支持 vim 风格导航和用于 Claude Code 集成的 MCP 服务器，使用 Go 和 Bubble Tea 构建。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-09", "go", "tui", "terminal", "kanban", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 9
seriesOpened: false
date: 2026-04-14
draft: false
---

第9天。我想要一个住在终端里的任务板，而且 Claude 也能读写它。

## 提示词

> "用 Go 构建一个终端看板，带 MCP 服务器让 Claude 能管理任务。"

这就是起点。[Watchfire](https://watchfire.io) 把它扩展成了13个任务，覆盖了完整范围：带 vim 导航的三列看板、Bubble Tea UI、JSON 持久化、自动刷新的文件监听器、AI 集成的 MCP 服务器模式、快速任务管理的 CLI 命令，以及用于分发的 GoReleaser。

## 怎么构建的

13个任务把它从零带到了完整打包发布。前9个任务构建了核心看板：看板模型、卡片渲染、列之间的拖放，以及所有让它在终端里好看的 Lip Gloss 样式。任务9添加了 MCP 服务器模式。任务10引入了实时文件监听。最后三个负责 CLI 命令、跨平台二进制的 GoReleaser 配置和 README。

架构干净地分成了几个包：`task` 负责领域模型，`storage` 负责 JSON 持久化，`watcher` 负责文件系统监控，`mcp` 负责 MCP 服务器，`cli` 负责所有 Cobra 命令。入口点根据调用方式路由到三种模式：TUI 模式（默认）、CLI 模式（带 `add` 或 `list` 等子命令）和 MCP 服务器模式（用 `tasktui mcp`）。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成果

![TaskTUI 三列看板](images/screenshot-01.png)

**看板在终端里看起来很棒。** 三列带颜色编码的标题：Todo 是红/粉色，Doing 是橙/黄色，Done 是绿色。每张卡片显示任务标题和描述。选中的卡片有高亮边框。用 `h/l` 切换列，`j/k` 在列内的任务之间移动。

![用弹出对话框添加新任务](images/screenshot-02.png)

**内联任务创建。** 按 `n` 弹出一个模态框，输入任务标题和描述。直接放进 Todo 列。按 `e` 可以用同样的方式编辑现有任务。

![用标题和描述字段创建新任务](images/screenshot-03.png)

**输入对话框有正经的字段导航。** Tab 在标题和描述之间切换，Enter 确认。不会挡你的路，完全按预期工作。

![任务在列之间移动后的看板](images/screenshot-04.png)

**列之间移动任务是秒级的。** 按 Enter 或 Space 把任务往前推（Todo 到 Doing 再到 Done），或者 Backspace 往回退。也可以用 Shift+H 和 Shift+L 显式左右移动。看板还完全支持撤销/重做。

**CLI 命令适合快速记录。** `tasktui add "Fix that bug"` 不用打开 TUI 就能往 Todo 添加任务。`tasktui list --state doing` 显示进行中的内容。`tasktui done 3` 把任务3标记为完成。全在 shell 里搞定。

**MCP 服务器是有意思的部分。** 运行 `tasktui mcp` 会启动一个 Model Context Protocol 服务器，暴露四个工具：`list_tasks`、`add_task`、`move_task` 和 `delete_task`。把它加到 `~/.claude/mcp.json` 配置里，Claude Code 就能直接管理你的任务。因为有文件监听器，如果你同时开着 TUI，Claude 每次改动都会自动刷新。你可以真真切切地看到 Claude 往看板上添加任务。

## Bug 报告

文件监听器偶尔在保存时会触发两次，导致看板连续重载两次产生短暂的画面闪烁。不是大问题但能注意到。MCP 服务器模式本身第一次就跑通了，说实话这让我挺惊讶的，毕竟协议实现通常很容易出问题。

## 数据

- **13个 Watchfire 任务** 从开始到打包发布
- **6个 CLI 命令** (root, tui, add, list, done, mcp)
- **4个 MCP 工具** (list_tasks, add_task, move_task, delete_task)
- **Go + Bubble Tea + Lip Gloss + Cobra** 技术栈
- **GoReleaser** 跨平台二进制构建
- **实际动手时间：** 大概25分钟的测试和提示词迭代

## 试试看

{{< github repo="nunocoracao/Vibe30-day09-tasktui" showThumbnail=true >}}

安装：

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day09-tasktui/main/install.sh | sh
```

从源码构建：

```bash
git clone https://github.com/nunocoracao/Vibe30-day09-tasktui.git
cd Vibe30-day09-tasktui
go build -o tasktui ./cmd/tasktui
```

要设置与 Claude Code 的 MCP 集成，把这个加到 `~/.claude/mcp.json`：

```json
{
  "mcpServers": {
    "tasktui": {
      "command": "tasktui",
      "args": ["mcp"]
    }
  }
}
```

## 第9天总结

这次继续深入 Go + Bubble Tea 技术栈，但加了新东西：通过 MCP 实现 AI 集成。

看板本身很扎实。个人任务管理器该做的都做了，多余的一点没有。但让这个项目有意思的是 MCP 服务器模式。工作的时候让 Claude Code 管理任务板，它能自动添加在代码注释里发现的任务，修完 bug 后标记为完成，这是一个我都不知道自己想要的工作流。

文件监听器把一切串联起来。一个终端窗格开着 TUI，另一个窗格 Claude 在干活，看板实时更新。感觉就像跟 AI 做结对编程，中间共享一块任务板。

九天下来，项目开始互相连接了。GitDash 负责仓库感知，TaskTUI 负责任务管理，都住在我真正工作的终端里。工具之间开始对话了。

---

*这是 [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/) 的第9天。关注我用 AI 辅助编程在30天内交付30个项目的过程。*
