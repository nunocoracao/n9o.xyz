---
title: "用 Claude Code 做产品管理：第四章 - 第二大脑"
summary: "Claude Code 能触及一切，却什么也记不住。将它连接到 Obsidian 后，零散的文件变成了一个知识图谱——实体、任务提取和会议记录彼此互联互通。"
description: "Claude Code 能触及一切，却什么也记不住。将它连接到 Obsidian 后，零散的文件变成了一个知识图谱——实体、任务提取和会议记录彼此互联互通。"
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Obsidian", "Granola", "knowledge management"]
series: ["PMing with Claude Code"]
series_order: 4
date: 2026-03-18
draft: false
---

在第三章结尾，我把那套配置称为"上帝模式"。Claude Code 能触及 GitHub、Notion、Snowflake、Google Workspace 和 Slack——全部从一个终端完成。五个集成，五个数据源，几秒钟就能得到原本需要几小时才能找到的答案。触及一切。

但每次对话都从零开始。

Claude 在一次会话中挖掘出的洞察不会带入下一次。它在 Slack 讨论串和定价文档之间建立的关联，在对话结束时就消失了。我可以让 Claude 找到任何东西，但它记不住自己已经找到过什么。差距不在于更多工具，而在于让知识积累起来——构建一个层，让每一条新信息都与之前的所有信息相互连接。

这就是本章要讲的内容。不是又一个集成，而是一个第二大脑。

## 为什么选择 Obsidian

Obsidian 是一款基于纯 markdown 文件的笔记应用。没有专有格式，没有云数据库，没有供应商锁定。你的 vault 就是磁盘上的一个文件夹——用任何文本编辑器打开，一切都在那里。

对于这个用例来说，真正有意思的是叠加在这些文件之上的功能组合。Wikilinks（`[[像这样]]`）让你可以零摩擦地将任何笔记与任何其他笔记相连。图谱视图将这些连接可视化。YAML frontmatter 为每篇笔记提供结构化元数据。插件生态系统从 kanban 面板到数据库视图应有尽有。而通过 iCloud 同步，整个 vault 可以在手机上访问。

关键是：不需要配置任何 API。没有 OAuth 认证流程，没有 MCP 服务器，没有认证令牌。它就是本地文件系统上的一个 markdown 文件夹。Claude Code 已经有文件系统访问权限。这就是全部的集成。

## 最简单的集成

在 macOS 上配合 iCloud 同步，Obsidian vault 位于：

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/<vault-name>/
```

不需要 MCP 服务器。不需要插件。Claude 已经知道如何读写文件。我在 `CLAUDE.md` 中添加了一个"Knowledge Base"部分，写上 vault 路径，并标注这是所有持久化文件的主要位置。然后我更新了 `/sync` 技能，让它同时将路线图写入 Obsidian vault 和 git 仓库——vault 为主，仓库作为版本控制备份。

就这样。从那以后，每次对话都知道在哪里查找和存储东西。机械性的部分花了五分钟。

## Vault 结构

连接到位后，我建立了文件夹结构：

| 文件夹 | 用途 |
|--------|---------|
| `roadmap/` | 从 GitHub 同步的路线图文件 |
| `meetings/` | 会议记录，用于搜索和上下文 |
| `tasks/` | 个人任务和待办事项 |
| `docs/` | 策略文档、分析、研究 |
| `blogs/` | 博客文章草稿 |
| `entities/` | 可复用的知识实体——人员、项目、产品、计划 |

之前放在 git 仓库里的 `docs/` 和 `blogs/` 文件夹移到了 vault 中。同样的文件，但现在可以通过 Obsidian 搜索、通过 wikilinks 关联，并通过 iCloud 在手机上访问。一个单一信息源，而不是两个。

## Obsidian CLI

有意思的地方来了。Obsidian 自带一个内置 CLI，位于 `/Applications/Obsidian.app/Contents/MacOS/obsidian`。我做了和每个新工具一样的事情——前几章中的第零步模式：把 Claude 指向它，说"去探索这个，把你发现的记录在 `CLAUDE.md` 里。"

Claude 遍历了命令树，测试了子命令，并梳理了所有功能。结果是：两种互补的方式与 vault 交互。

**直接文件访问**处理读写——快速且简单。但 CLI 添加了文件系统操作无法实现的结构化查询：

```bash
# Full-text search across the vault
obsidian search "launch plan" --vault nexus

# Find what links to any note
obsidian backlinks "Project Alpha" --vault nexus

# Read/write YAML frontmatter programmatically
obsidian properties get "tasks/review-api.md" --vault nexus

# List and query tags across all notes
obsidian tags --vault nexus

# List and filter tasks
obsidian tasks --vault nexus --status open
```

文件系统用于速度，CLI 用于关系。这种组合意味着 Claude 既能读取文件内容，又能理解它在更广泛的知识图谱中的位置。

## 实体：知识图谱

这是整套配置的概念核心。

`entities/` 文件夹使用一个简单的约定：每个实体有自己的 markdown 文件，用 YAML frontmatter 存储元数据，用 wikilinks 建立连接。实体类型包括人员、产品、项目、团队、计划和概念。每种类型有自己的子文件夹。

一个实体长这样：

```yaml
---
type: product
tags: [platform, ai, agents]
---
# Project Alpha

Internal AI assistant. Started as a CLI tool,
expanding to web and desktop surfaces.

Related: [[Platform Team]], [[Desktop App]], [[MCP]]
```

简单，但力量在于网络效应。每个 wikilink 都是一个双向连接。当我创建一篇提到 `[[Project Alpha]]` 的会议笔记时，它会自动出现在 Project Alpha 的反向链接中。当一个任务引用了 `[[Platform Team]]`，就可以从团队的实体页面被发现。图谱自动构建。

我创建了 `/entities` 技能来自动化提取。它扫描 vault 内容——`CLAUDE.md`（团队名单）、`roadmap.md`（epic、负责人）、会议记录（提到的人员）、任务（实体引用）——并为找到的所有内容创建结构化实体文件。

第一次提取产出了 **39 个实体**，分布在六个子文件夹中：

```
entities/
  _index.md              # Master index
  people/                # 20 people
  products/              # 10 products
  projects/              # 2 active projects
  teams/                 # 1 team
  initiatives/           # 2 strategic initiatives
  concepts/              # 3 technical concepts
```

当我打开 Obsidian 图谱视图时，连接立刻浮现——谁在做什么产品，哪些计划横跨哪些团队，哪些概念支撑着哪些项目。这些信息一直隐含在我的文档中，现在变得显式且可导航。

每一份进入 vault 并使用 wikilinks 的新文档都会自动加入这个网络。图谱随着时间推移变得越来越密集、越来越有用，无需任何维护工作。

## 任务管理与 Kanban

回到第一章，我标记了一个缺口："不是所有事情都是路线图上的 epic。我有个人待办事项……这些不属于 GitHub issues。"三章之后，我终于补上了这个缺口。

系统是每个任务一个文件，带有结构化的 frontmatter：

```yaml
---
status: todo
priority: high
source: slack
due: 2026-03-20
entities: ["[[Project Alpha]]", "[[Sarah Chen]]"]
---
# Review launch plan feedback

## Description
Review and address Sarah's feedback on the Project Alpha launch plan.

## Output
Updated launch plan with resolved comments.

## Context
From 1:1 with [[Sarah Chen]] on 2026-03-17.
```

每个任务文件都有状态、优先级、来源（行动项的出处）、截止日期和关联实体。格式包含了"完成"的定义以及任务的来源——足够的结构使其有用，又不至于让创建任务变成负担。

为了可视化，我通过 CLI 安装了 Obsidian Kanban 社区插件：

```bash
obsidian plugin:install id=obsidian-kanban enable
```

四列：**Todo**、**Doing**、**Done**、**Dropped**。卡片是指向任务文件的 wikilinks，点击卡片就能打开完整详情。Kanban 面板成了我从未有过的每日仪表盘——一个统一视图，展示我需要做的所有事情，来源遍布我工作的各个地方。

## Granola：会议记录

最后一个输入源是会议。我安装了 Granola——一个会议转录工具——以及 granola-to-obsidian 插件。流程很简单：Granola 录制并转录会议，插件自动将转录文本导出到 vault 的 `meetings/` 文件夹。

现在每场会议都可搜索。Claude 可以阅读转录文本，提取行动项，找出谁说了什么，并将讨论内容与现有实体交叉引用。一次 1:1 中关于产品发布的对话自然地链接到产品实体和人员实体。转录文本落入 vault 的那一刻，就成为知识图谱的一部分。

真正的流水线是这样的：**转录 > 实体 > 任务 > kanban**。会议发生，转录出现在 vault 中，实体引用将其连接到图谱，行动项被提取为任务文件，任务文件显示在 kanban 面板上。每一步都是自动化的，或者只需一个命令。

## 实际运行 /pm-task

这是所有东西汇聚的地方。

`/pm-task` 技能从四个来源扫描行动项：Slack、邮件、日历和 Granola 会议笔记。它读取最近的活动，识别任何看起来像任务或承诺的内容，展示候选项供审核，确认后创建任务文件和 kanban 卡片。

我用一天正常工作量的活动来测试——最近的 Slack 消息、未读邮件、今天的日历和几份 Granola 转录。它提取出 **8 个任务**并添加到 kanban 面板。每个任务都有正确的实体链接、来源上下文和优先级。它正确地跳过了噪音——告知类消息、已解决的讨论串、营销邮件、信息性日历邀请。信号进来，噪音过滤掉。

四个输入源通过一个技能汇入结构化任务文件，带有实体链接和 kanban 可视化。这种跨来源的任务提取，手动扫描需要三十分钟，在大约二十秒内就完成了。

## 变化

集成表现在是这样的：

| 工具 | 方式 | 功能 |
|------|--------|-------------|
| GitHub | `gh` CLI | 议题、epic、项目管理 |
| Notion | MCP | 产品规格和文档 |
| Snowflake | `snow` CLI | 数据仓库查询 |
| Google Workspace | `gws` CLI | 日历、文档、表格、邮件 |
| Slack | MCP 插件 | 搜索、阅读和发送消息 |
| **Obsidian** | **文件系统 + CLI** | **知识图谱、任务、实体、vault** |
| **Granola** | **Obsidian 插件** | **会议记录** |

现在七个集成了。但这一章的重点其实不是往表格里多加两行。

真正改变的是：`CLAUDE.md` 中的一个 vault 路径。两个新技能——`/pm-task` 和 `/entities`。三十九个实体被提取并连接。八个任务从四个不同来源拉取。一个之前不存在的 kanban 面板。而在这一切之下，是一个每次 Claude 接触 vault 时都变得更密集的知识图谱。

## 下一步

Obsidian 最近推出了 Bases——结构化数据库视图，可以使用 frontmatter 属性跨笔记查询。这可能将实体系统变成更接近真正关系数据库的东西。我还想把 Claude Code 自身的记忆文件导入 vault，让它的持久化记忆和知识图谱合并为一个系统。而 kanban 面板上排第一的任务是：构建 AI 原生路线图原型。

但这一章的核心论点不在于下一步要做什么。而是差距从来不在于更多输入——而在于构建让所有输入得以积累的那一层。第一章到第三章将 Claude Code 连接到了外部世界。这一章给了它一个记住所发现之事的地方。

访问加记忆。这才是真正的复合效应。
