---
title: "用 Claude Code 做产品管理：第二章 - 数据"
summary: "将 Snowflake CLI 接入 Claude Code 后，它变成了 PM 的数据分析师——直接执行 SQL 查询、对比不同产品版本的留存率，快速从杂乱数据中提炼洞察。"
description: "将 Snowflake CLI 接入 Claude Code 后，它变成了 PM 的数据分析师——直接执行 SQL 查询、对比不同产品版本的留存率，快速从杂乱数据中提炼洞察。"
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Snowflake", "data analysis"]
series: ["PMing with Claude Code"]
series_order: 2
date: 2026-02-26
draft: false
---

在第一章中，我介绍了如何将 Claude Code 打造成 PM 的指挥中心——GitHub issues、Notion 文档、本地策略文件，全部通过一个终端串联起来。当时我指出的最大短板是什么？数据。我一直在手动从 Looker 或 Sigma 导出 CSV 文件，然后丢到一个文件夹里。虽然能用，但充满摩擦。现在，这个短板补上了。

## 缺失的拼图：SQL 访问

问题从来不在于 Claude 能不能分析数据。给它一个 CSV，它就能发现规律、总结趋势、给出观察。真正的问题是如何把数据送到 Claude 手里。每次我需要最新数据时，都得打开浏览器、找到对应的仪表盘、导出文件、再把文件移到工作目录。等 Claude 拿到数据的时候，我已经在一件本该五秒钟搞定的事情上花了五分钟。

回过头来看，解决方案显而易见：让 Claude 直接访问数据仓库。我们的分析数据存在 Snowflake 里，而 Snowflake 有 CLI 工具。（感谢 Abhi！）

## 配置 Snowflake CLI

[Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index)（`snow`）是一个用于与 Snowflake 交互的命令行工具。安装好、配置好连接，就能直接在终端里运行 SQL 查询。也就是说 Claude 也能运行。

连接配置存放在 `~/.snowflake/connections.toml`：

```toml
[my_org]
account = "your-account"
user = "your-user"
authenticator = "externalbrowser"
role = "ROLE_READONLY"
warehouse = "your-warehouse"
```

有几点值得注意。`externalbrowser` 认证方式意味着身份验证走的是公司的 SSO。你在浏览器里认证一次，会话就会持续生效。不需要在配置文件里存放 API 密钥或密码。而且角色是只读的。Claude 可以查询数据但无法修改任何内容。这和第一章中 GitHub 权限的理念一致：只给工具它所需要的最小权限。

连接配置好后，执行查询只需一条命令：

```bash
snow sql -c my_org -q "SELECT COUNT(*) FROM my_table" --format json
```

然后我让 Claude 去探索并在 `CLAUDE.md` 中记录一些表、schema 和常用查询模式。完成之后，我又和它讨论了一些计算值的细节，好让它在写 SQL 时能考虑到这些因素。Claude 记录下来的内容大概是这样的：

```markdown
## Snowflake Access
- CLI: `snow sql -c my_org -q "..." --format json`
- Role: read-only
- Key tables:
  - `MARTY.ENTITIES.L3_DIM_MOBIULE>__USER` - User dimension
  - `PREP.AI_SERVICE.L1_AI_TRACE` - API event traces
- The ATTRIBUTES column is a JSON variant with: username,
  planName, model, origin, gordonTag, token counts, cost, etc.
```

这和第一章的模式一样。`CLAUDE.md` 为 Claude 提供了编写正确查询所需的上下文，不用我每次都从头解释 schema。而且你不需要自己写这些内容，可以让 Claude 帮你记录你想要的任何信息。

## 留存分析

接下来才是真正有意思的地方。我需要了解我们的 AI 助手在五个不同产品版本中的首周留存率。每个版本上线了不同的功能、不同的用户体验、不同的引导流程。问题很简单：哪个版本在前七天的用户留存最好？

按照以前的工作流程，这得花好几天时间，还得依赖其他团队。打开 Snowflake，弄清楚哪些版本标签对应哪些发布，写出队列分析查询，运行，导出，盯着电子表格看，试图找出规律。或者提个需求给数据分析师，然后排队等着。

用 Claude，我只需要用自然语言描述需求：

> "对比 Gordon 最近 5 个主要版本的首周留存率。"

Claude 已经通过 `CLAUDE.md` 了解了 schema。它知道 `gordonTag` 标识产品版本，`EVENT_TIMESTAMP` 记录事件发生时间，也知道如何识别用户。它写好 SQL，通过 Snowflake CLI 执行，获取结果，并整理成一张对比表。

不到五分钟，我就拿到了结果……

## 擅长什么，不擅长什么

让我明确说一下它能替代什么，不能替代什么。

**它不能构建仪表盘。** 如果你需要一个持久的、可分享的、每天自动更新的可视化看板，你还是需要 Looker、Sigma 或者你们团队在用的工具。Claude 是用来回答问题的，不是用来搭建监控基础设施的。

**它不能替代你的数据团队。** 复杂的数据建模、管道搭建、数据仓库优化——那些是工程工作。Claude 只是在现有表上跑即席查询，而不是构建新的数据模型。

**它真正做到的是压缩了从提出问题到获得答案之间的时间。** PM 的工作流程一直存在这样一个瓶颈：你想到一个问题，你得弄清数据在哪里，写查询或者提需求，等待结果，解读结果，想到下一个问题，然后循环往复。每一轮可能花几分钟到几天，取决于你能不能自助完成。

有了 Claude + Snowflake CLI，这个循环变成了对话式的。提问、查询、结果、追问——全在同一个终端会话里，全在几秒钟内完成。速度改变了工作方式。你会提更多问题，探索更多假设，发现更多原本会遗漏的东西，因为验证的成本太低了。

## 复合效应

真正的威力不在于单个集成，而在于组合。在同一次对话中，Claude 可以：

1. 拉取最新的 GitHub issues，查看每个版本发布了什么
2. 查询 Snowflake，获取这些版本的留存数据
3. 搜索 Notion，找到每次发布背后的产品决策
4. 把所有信息交叉比对，起草一份总结

四个工具，四个不同的数据源，在一次对话中完成整合。上下文是贯通的。当 Claude 发现某个版本的留存下降时，它可以立刻查看 GitHub issues 看看那个版本改了什么，然后去查 Notion 文档了解当时的决策逻辑。不需要切换标签页，不需要在工具之间复制数据。

这就是我在第一章中说的——Claude 是一个工作流中枢，而不仅仅是一个 AI 助手。每新增一个集成，都会让现有的每一个集成变得更有价值。

## 更新后的配置

供参考，目前工作空间的结构如下：

```
pm-workspace/
├── CLAUDE.md                # 工作流规范、模板、Snowflake schema
├── .claude/
│   └── settings.local.json  # 权限配置：gh、snow sql、MCP 服务器
├── docs/                    # 策略文档、分析、规格说明
├── data_reports/            # 导出的数据（对大数据集仍然有用）
└── roadmap.md               # 持续更新的路线图
```

权限配置也扩展了：

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)",
      "Bash(snow sql*)"
    ]
  }
}
```

只多了一行。这就是从"手动导出 CSV"到"让 Claude 直接查询数据仓库"所需的全部改动。

## 下一步

`data_reports/` 文件夹并没有过时。对于大数据集或复杂的可视化，导出仍然有意义。但对于日常的 PM 问题——"留存趋势怎么样？"、"各套餐的使用占比是多少？"、"上周有多少用户用了这个功能？"——我再也不需要打开浏览器了。

第一章中提到的剩余短板正在缩小。Notion 通过 MCP 接入了。GitHub 通过 CLI 接入了。Snowflake 通过 CLI 接入了。还没接入的有：Google Docs（还没有 MCP）、Slack（MCP 已有但我还没配置）以及日历集成。每增加一个，整个系统就更好用一分。

如果你是一个能通过 CLI 访问数据仓库的 PM，这是你能为 Claude Code 配置中增加的最高杠杆率的东西。Claude 写的查询第一次不一定完美，但迭代循环太快了，完美与否根本不重要。三十秒内跑三条不完美的查询，胜过花一小时写一条完美的查询。

重点不是完美，而是快速获得洞察。
