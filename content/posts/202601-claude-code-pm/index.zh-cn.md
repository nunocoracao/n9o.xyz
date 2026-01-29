---
title: "用 Claude Code 做产品管理"
summary: "我如何将 Claude Code 设置为我的产品管理指挥中心——在一个工作流中连接 GitHub issues、Notion 文档和 AI 助手。"
description: "我如何将 Claude Code 设置为我的产品管理指挥中心——在一个工作流中连接 GitHub issues、Notion 文档和 AI 助手。"
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow"]
date: 2026-01-28
draft: false
---

大多数 AI 工具都是为开发者打造的。自动补全代码的 Copilot、编写测试的 Agent、调试错误的助手。但产品管理工作——跟踪路线图、编写需求文档、查询 issues、整理会议记录——同样非常适合 AI 辅助。挑战在于产品管理工作跨越了太多工具：GitHub 用于 issues，Notion 用于文档，电子表格用于优先级排序，Slack 用于沟通上下文。没有任何一个 AI 工具能把它们全部连接起来。

直到我开始在 Claude Code 中处理产品管理工作。

## 为什么用 Claude Code 做产品管理？

Claude Code 是 Anthropic 基于命令行的 AI 编程助手。它运行在终端中，这对产品经理来说可能看起来是个奇怪的选择……但请听我解释。首先，它存在于我花费大量时间的地方。我经常在终端中——运行 git 命令、检查部署状态、与工程师调试时查看日志。在同一个环境中使用 Claude 意味着我在处理某些场景时不需要在工具之间切换上下文。

其次，[MCP（Model Context Protocol）](https://modelcontextprotocol.io)系统允许 Claude Code 连接外部工具。GitHub、Notion、Linear、Slack——只要有对应的 MCP 服务器，Claude Code 就能查询它。这将一个简单的 AI 助手变成了真正的工作流枢纽。

第三，如果没有 MCP 服务器，我仍然可以使用 shell 命令连接任何有 CLI 的工具。GitHub CLI（`gh`）非常适合产品管理工作。Claude 可以运行 `gh` 命令来列出 issues、查看详情、创建新条目等。这让我可以直接从 Claude 读写我的 GitHub issues。

第四，`CLAUDE.md` 文件为 Claude 提供了关于我工作方式的持久上下文。我的惯例、我的模板、我的偏好。每次对话开始时，Claude 就已经了解我的工作流程。

最后，权限系统确保一切安全。我可以精确控制 Claude 能运行哪些命令、能调用哪些 API。不会有意外发生。

## 配置设置

我的产品管理工作区是一个简单的仓库结构：

```
pm-workspace/
├── CLAUDE.md                # 工作流惯例和模板
├── .claude/
│   └── settings.local.json  # 权限和 MCP 配置
├── docs/                    # 策略文档、分析、需求规格
├── data_reports/            # 手动导出的分析数据
└── roadmap.md               # 动态路线图文档
```

理念是文档优先，以 GitHub 作为执行层面的唯一数据源——这是我的团队用于跟踪工作的工具，对于 Jira、Notion、Linear 等也没什么不同。仓库包含我的工作文档——策略文档、分析报告，任何我希望 Claude 了解的内容。GitHub 保存实际的 issues 和项目跟踪。Notion 存放更长篇幅的知识库。当我需要分析上下文时，导出的数据放在 `data_reports/` 中。

`CLAUDE.md` 文件是魔法发生的地方。它包含我的惯例：

```markdown
# PM Workflow

## Source of Truth
- **GitHub:** All epics and issues live in the main repo
- **Notion:** PRDs, meeting notes, decision logs
- **Local docs:** Strategy documents in `/docs/`
- **Data:** Exported analytics in `/data_reports/`

## Conventions
- Epics use the `Epic` issue type
- Streams are tracked via labels
- Quarterly goals tagged with `Q1-2026`, `Q2-2026`, etc.

## Useful Commands
- List open epics: `gh api graphql -f query='...'` (full query below)
- View epic details: `gh issue view <number>`
- Sync roadmap: Pull latest epic status and update roadmap.md

## Templates
When creating roadmap items, use this structure:
- Problem: What user problem are we solving?
- Solution: High-level approach
- Success metrics: How do we know it worked?
- Dependencies: What blocks this?

## Documentation Index
| File | Description |
|------|-------------|
| `docs/strategy.md` | Product strategy and vision |
| `docs/analysis.md` | Research and data analysis |
```

每次我在这个目录启动 Claude Code 时，这个文件会自动加载。Claude 已经知道我如何命名、在哪里找信息、以及我期望什么格式。

## 连接工具

### GitHub CLI 集成

GitHub CLI（`gh`）是我配置的核心。Claude Code 可以运行 shell 命令，所以我配置权限允许特定的 GitHub 操作：

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)"
    ]
  }
}
```

这授予 Claude 对 issues 和 projects 的读写权限，但不包括其他任何东西。不能推送代码、不能管理发布、不能触碰产品管理工作流之外的任何内容。

有了这个配置，我可以向 Claude 询问这样的问题：

- "显示 Q1 的所有待处理 epics"
- "认证 epic 的状态是什么？"
- "为仪表板重设计创建一个新 issue"
- "列出所有阻塞移动端发布的 issues"
- "有没有团队的待回复评论需要我处理？"

Claude 将我的自然语言转换为正确的 `gh` 命令，运行它们，并总结结果。对于更复杂的查询，它可以使用 GitHub GraphQL API：

```bash
gh api graphql -f query='
  query {
    repository(owner: "myorg", name: "myrepo") {
      projectV2(number: 1) {
        items(first: 50) {
          nodes {
            content { ... on Issue { title state } }
            fieldValues(first: 10) { nodes { ... on ProjectV2ItemFieldSingleSelectValue { name } } }
          }
        }
      }
    }
  }
'
```

我不需要记住这些语法。我只需问"Q1 项目看板里有什么？"然后 Claude 会搞定查询。

### Notion MCP

对于更长篇幅的文档——PRD、会议记录、决策日志——我使用 Notion。Claude Code 支持 MCP 服务器，这是扩展其能力的外部服务。Notion MCP 服务器让 Claude 能够读取我的工作区：

```json
{
  "mcpServers": {
    "notion": {
      "type": "url",
      "url": "https://mcp.notion.com/sse"
    }
  }
}
```

连接后，我可以让 Claude 搜索我的 Notion 工作区获取上下文。"我们对定价模型做了什么决定？"或"找到用户通知的 PRD"或"总结最近三次产品同步会议"。

强大之处在于组合。Claude 可以查询 GitHub 获取 issue 状态，然后交叉引用 Notion 文档获取上下文，然后帮我起草一份同时引用两者的更新。一个工具，多个数据源。

## 实际工作流程

这是我典型一天的样子：

**早间准备。** 我打开 Claude Code 并询问："昨天关闭了哪些 issues？有没有新提交的 bugs？"Claude 查询 GitHub，总结活动，我在三十秒内就有了站会的要点。

**路线图同步。** "从 GitHub 同步路线图——获取所有待处理 epics 的最新状态。"Claude 运行我 `CLAUDE.md` 中的 GraphQL 查询，获取当前状态、负责人和里程碑，然后用最新数据更新 `roadmap.md`。路线图文档与 GitHub 保持同步，无需我手动检查每个 issue。

**策略上下文。** "我们在平台基础设施工作上的方案是什么？"Claude 从我的 `docs/` 文件夹读取相关策略文档并总结要点。当我需要引用某个决定或回顾某个方向背后的理由时，立刻就能得到答案。

**数据分析。** 我导出一个 CSV——上季度的用户参与度指标——然后放到 `data_reports/` 中。"分析参与度数据并总结趋势。"Claude 读取文件，识别模式，并起草观察结论。不如直接集成那么顺畅，但确实有效。

**编写需求规格。** 我从一个粗略的想法开始："我需要为新的用户引导流程创建一个路线图条目。"Claude 从 `CLAUDE.md` 了解我的模板，所以它会问正确的问题——问题是什么、影响谁、范围是什么——然后起草一份结构化文档。我编辑、完善，准备好后告诉 Claude 创建 GitHub epic。

**搜索上下文。** "我们对速率限制做了什么决定？"Claude 在 Notion 中搜索会议记录和决策文档，找到相关讨论，并总结结果。不用再翻找几个月的笔记了。

**周末总结。** "为利益相关者更新起草本周发布内容的摘要。"Claude 查询已关闭的 issues，按流程分组，并起草可读的摘要。我审阅，调整表述，然后发送。

`CLAUDE.md` 中的模板确保输出一致。当我要求一个路线图条目时，它总是遵循相同的结构。当我要求周报时，它总是包含相同的部分。一致性，没有繁琐。

## 还缺什么

这个配置还不完整。一些我正在积极解决的缺口：

**数据工具。** 我在 Looker 和 Sigma 中处理分析——使用指标、漏斗数据、队列分析。两者都没有 MCP。当我需要 Claude 帮助分析数据或写一份包含指标的摘要时，我手动将 CSV 导出到工作区的 `data_reports/` 文件夹。它能用，但有摩擦。每次我想要最新数据，都得回到浏览器点击导出按钮。

**Google Docs。** 很多跨职能工作发生在 Google Docs 中——共享的需求规格、协作的 PRD、利益相关者的评论。那里也没有 MCP。同样的变通方法：导出为 markdown 或 PDF，放到工作区。Claude 可以读取，但这是一个快照，不是实时连接。

**任务管理。** 不是所有事情都是路线图 epic。我有个人待办事项——"跟进设计团队关于原型的问题"、"审阅 API 提案"、"为客户电话准备问题"。这些不适合放在 GitHub issues 中。我还在摸索跟踪这些的正确方式。现在它们放在一个简单的 markdown 文件中，但我希望能有更紧密的集成——也许是一个 Claude 可以查询和更新的 Linear 或 Todoist MCP。

MCP 生态系统正在快速发展。Slack、Linear、日历集成都在涌现。但目前，对于还没有原生连接的工具，手动导出工作流是必要的桥梁。

## 什么在起作用

以读取为主的工作流是 Claude 发光的地方。查询 issues、搜索文档、总结状态——这些过去需要我点击十分钟，现在只需三十秒。以写入为主的工作流需要更多人类判断。Claude 可以起草需求规格，但我仍然需要思考策略。

GitHub + Notion + 本地文档的组合覆盖了我大部分日常工作。当我需要分析上下文时，手动导出增加了一个步骤，但一旦数据在工作区中，Claude 处理得很好。

更大的图景是 AI 作为产品管理副驾驶，而不是替代品。Claude 不做产品决策。它不与客户交谈，不与利益相关者谈判，不会感知到某些事情不对劲的直觉。但它处理工作中机械性的部分——查询、格式化、搜索、起草——这样我就可以专注于真正需要人类判断的部分。

如果你是一位对 AI 工具感兴趣的产品经理，试试 Claude Code。设置一个简单的工作区，连接 GitHub，将你的惯例添加到 `CLAUDE.md`，看看它如何适应你的工作流。这不是要替换你现有的工具。而是添加一层智能，将它们连接在一起。

如果你构建了有趣的东西，分享你的配置。我很想看看其他产品经理是如何使用它的。
