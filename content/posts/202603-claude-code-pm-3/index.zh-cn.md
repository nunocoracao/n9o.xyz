---
title: "用 Claude Code 做产品管理：第三章 - 上帝模式"
summary: "将 Google Workspace 和 Slack 连接到 Claude Code 后，整个闭环完成了。日历安排、文档编辑、Sheets 仪表盘和 Slack 搜索——全部在一个终端中完成。"
description: "将 Google Workspace 和 Slack 连接到 Claude Code 后，整个闭环完成了。日历安排、文档编辑、Sheets 仪表盘和 Slack 搜索——全部在一个终端中完成。"
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Google Workspace", "Slack", "integrations"]
series: ["PMing with Claude Code"]
series_order: 3
date: 2026-03-05
draft: false
---

在第二章结尾，我列出了剩余的短板：Google Docs、Slack 和日历。我在一次会话中就把这三个全部补上了。当我看到 Claude 检查十五个人的日程、创建日历邀请、修改一份实时 Google Doc 中的定价错误，并在 Sheets 中构建多标签页仪表盘——而我全程没有打开浏览器——这时我意识到这套配置已经跨越了一个门槛。这不再是一个 AI 助手了，这是一个控制中心。

## Google Workspace：gws CLI

Google 的生态系统一直是最难与外部工具对接的。虽然什么 API 都有，但认证流程很痛苦，覆盖面也非常广。然后 Google 发布了一个改变一切的东西——他们推出了一个覆盖整个 Workspace 套件的官方 CLI。3 月 2 日宣布，用 Rust 编写，以 Apache 2.0 协议开源。它封装了整个 Google Workspace API，基于 Google 的 Discovery Service 动态构建。Gmail、Calendar、Drive、Docs、Sheets、Slides、Tasks、Chat、Admin——全部通过一个命令行工具实现。它甚至内置了 MCP 服务器支持和超过 100 个预构建的代理技能。

{{< github repo="googleworkspace/cli" >}}

### 安装配置

安装通过 npm 进行（它捆绑了预编译的原生二进制文件，不需要 Rust 工具链），你也可以从 GitHub Releases 下载二进制文件或用 Cargo 从源码构建：

```bash
npm install -g @googleworkspace/cli
```

然后有一个引导式设置命令，会带你完成 GCP 项目配置：

```bash
gws auth setup     # walks you through Google Cloud project config
gws auth login     # subsequent OAuth login
```

有一个前提条件可能会让你踩坑：你需要一个配置了 OAuth 的 Google Cloud 项目。gws CLI 通过 GCP 进行认证，所以如果没有设置好项目和 OAuth 同意屏幕，就无法继续。幸运的是，我的团队已经有一个内部 GCP 项目可以使用，所以我不需要从零开始创建。我只需要配置 OAuth 同意屏幕，然后在 Google Cloud Console 中启用我想使用的特定 API——Calendar、Gmail、Drive、Docs、Sheets。如果你是从零开始，那需要额外花 15 分钟在 GCP 设置页面上点点点。不难，就是繁琐。

OAuth 配置完成后，认证流程会打开浏览器进行 Google 登录。之后会话会持续保持。但要确保启用你计划使用的每个 API——漏掉一个就会遇到那种不明不白的权限错误，而且报错信息不会清楚地告诉你到底缺了什么。

### 第零步：让 Claude 自己学习工具

在我开始使用这些工具之前，我做了一件事，后来省了我好几个小时。我让 Claude 自己去探索 gws CLI——运行 `gws --help`，翻翻子命令，试试各种功能——然后把学到的一切记录在 `CLAUDE.md` 里。Claude 遍历了整个命令树，搞清楚了每个服务（Calendar、Docs、Sheets、Drive、Gmail）的使用模式，记录了常用的标志和参数格式，并全部写了下来。

这是每个新工具集成的第零步。不要试图自己手动写文档，不要自己写速查表。直接让 Claude 去研究，告诉它"学习这个工具，把你发现的都记下来。"结果就是一份完美契合 Claude 实际使用方式的参考文档——因为是 Claude 为自己写的。

经过这番探索后，Claude 掌握了这些命令：

```bash
# Check today's calendar
gws calendar +agenda --today --format table

# Read a Google Doc
gws docs documents get --params '{"documentId": "DOC_ID"}'

# Update a Google Doc
gws docs documents batchUpdate ...

# Push data to a Google Sheet
gws sheets spreadsheets values update ...

# Create a calendar event
gws calendar events insert ...
```

和第二章中 Snowflake 的模式一样，和第一章中 GitHub 的模式一样。模式本身就是关键：安装工具，让 Claude 探索它，把发现记录在 `CLAUDE.md` 中，之后每次新会话都自带完整上下文。

到现在，我的 `CLAUDE.md` 已经成长为一份相当完整的参考文档。这不是我坐下来专门写的——它是随着 Claude 探索每个工具、我在过程中添加补充信息而有机积累起来的。里面有数据仓库表结构及列描述和计算值公式，GitHub 仓库结构及用于查询 epic 和任务的 GraphQL 查询模式，Notion 页面索引使 Claude 能直接获取正确的产品规格而不需要我去翻 URL，从日历邀请中提取的团队名单，每个集成工具的 CLI 命令参考，连接配置和认证说明。

它读起来像一本没人会费心手写的操作手册。但因为 Claude 在使用过程中为自己编写，这本手册是自动构建起来的。而且每次新对话都会加载所有这些上下文。Claude 不会再问"你的数据仓库结构是什么？"或"产品规格在哪里？"——它已经知道了。

## Slack：内置插件

Slack 比预期的要容易。Claude Code 有一个内置的 Slack 插件，提供用于搜索、阅读和发送消息的 MCP 工具。

```
/install-slack-app    # Install the Slack app
                      # Complete authorization in browser
/mcp                  # Connect to the plugin (may need a second attempt)
```

连接后，你会获得一组涵盖核心 Slack 操作的工具：跨公共频道搜索消息、阅读消息线程、按日期范围阅读频道历史、发送消息、查找用户和查看个人资料。虽然不是完整的 Slack API，但恰好是产品经理实际需要的功能范围。

## 用例 1：从日历中找到我的团队

这是一个经常出现的场景。你需要你的团队名单——不是组织架构图上的那种，而是真正出现在你的定期会议中的人。房间里的那些人。

我让 Claude 查找我每周团队同步的定期会议并提取参会者。它查询了 Calendar API，找到了那个会议，提取出十五个人及其邮箱地址。然后我让它把名单保存到 `CLAUDE.md` 中，这样以后每次会话都知道我的团队成员，不需要我再解释一遍。

这是一件小事，但会产生复利效应。每次 Claude 需要安排日程、检查空闲时间或提到某个队友时，它已经知道在和谁打交道。

## 用例 2：安排会议

这个用例的流畅程度让我惊讶。

我需要在周一下午安排一个全团队会议——十五个人一起来评审一份策略文档。正常的流程是：打开 Google Calendar，目测下午的空闲时段，手动检查重要人物是否有空，检查到五个人就放弃了，挑一个看起来差不多的时间，然后听天由命。

取而代之的是，我让 Claude 找一个周一下午全团队都有空的时段。它：

1. 列出了我周一下午的日历以确定空闲时段
2. 同时为所有十五名团队成员查询了 freebusy API
3. 发现有四个人在我首选时段有冲突
4. 汇报了谁在忙以及忙的时间
5. 通过 `events insert` 创建了邀请，并在描述中附上了文档链接

邀请自动发出了。整个过程大概花了三十秒。仅仅是空闲检查这一步，如果我手动逐个翻日历就要花十分钟——而且我可能查了五个人就放弃了。

## 用例 3：编辑实时 Google Doc

这个用例改变了我对文档工作流的看法。

我有一份定价方案的 Google Doc 需要审核。与其在浏览器中打开它、通读一遍、手动修改，我让 Claude 去获取并审核它。

Claude 通过 `docs documents get` 拉取了完整文档，解析了所有内容（包括段落和表格），然后通读了一遍。它发现了一个不一致之处：一个定价表中有一个过时的数字，与当前的套餐价格不匹配。这种错误在快速浏览时很容易忽略，但被利益相关者发现时就很尴尬了。

关键在于：Claude 使用 `batchUpdate` 配合 `replaceAllText` 直接在实时 Google Doc 中修复了这个错误。不需要下载，不需要本地编辑，不需要重新上传。修改直接发生在每个人都在看的那份正式文档上。

这消除了一整类文档管理的摩擦。文档留在 Google Docs 里，你的团队期望它在那里。Claude 就地读取和编辑。

有一件事我还需要尝试：审核和回复评论。Google Docs 的评论功能是实际协作的半壁江山——建议、提问、反馈讨论串。如果 Claude 能读取这些评论、总结未处理的评论并起草回复，那就又闭合了一个环。这是我下一步要做的事。

## 用例 4：在 Google Sheets 中构建仪表盘

这纯粹是一个测试。我想看看 Claude 能否从 Snowflake 取数并自动构建一个完整的 Google Sheet——端到端，没有手动步骤。这种事通常要耗掉一个下午：跑查询、导出 CSV、创建表格、建标签页、粘贴数据、格式化表头、制作图表。

于是我把 Claude 指向几个数据集，说"给我在 Sheets 里建一个仪表盘。"它：

1. **从 Snowflake 拉取了 6 个数据集**——周趋势、日指标、套餐分布、功能采用率、按细分市场的使用量等
2. **在 Google Sheet 中创建了 6 个标签页**，通过 `spreadsheets batchUpdate`
3. **将所有数据推送**到对应的标签页，通过 `spreadsheets values update`
4. **格式化了所有内容**——加粗表头、灰色背景、冻结首行、自动调整列宽
5. **添加了 9 个图表**——折线图用于趋势、柱状图用于对比、面积图用于累计指标、堆叠条形图用于分布

全部是程序化完成的。没有手动操作表格。没有在工具之间复制粘贴。第二章的 Snowflake CLI 和本章的 gws CLI 在同一个会话中协同工作。虽然只是个测试，但效果好到我可以考虑用它来制作面向利益相关者的正式仪表盘。

这就是复合效应在实践中的样子。我添加的每个集成——GitHub、Notion、Snowflake、Google Workspace、Slack——不仅仅是增加了一项能力，它乘以了其他所有能力。Snowflake 的数据流入 Google Sheets。Calendar 中的团队信息辅助会议安排。Slack 中的讨论为文档审核提供上下文。

## 用例 5：搜索 Slack

最后一块拼图是沟通记录。我使用 Slack 搜索在各个频道中查找与定价方案相关的讨论。Claude 在 `#product-launches` 和 `#pricing-strategy` 中找到了相关讨论串，阅读了完整对话，获得了与之前已审核的定价文档进行交叉参考所需的上下文。

这闭合了信息循环。以前，我可能审核完一份文档，想起三周前有人在 Slack 里提了一个疑虑，试图找到那个讨论串，花十分钟翻来翻去，最后可能就放弃了。现在 Claude 搜索、找到、阅读并在同一次对话中综合分析。

## 完整工具栈

现在工作空间的样子是这样的：

```
pm-workspace/
├── CLAUDE.md                # Everything: schemas, team lists, tool docs
├── .claude/
│   └── settings.local.json  # Permissions for all CLIs and MCPs
├── docs/                    # Fallback for docs that can't live in Google/Notion
├── data_reports/            # Fallback for datasets too large for live queries
└── roadmap.md               # Living roadmap document
```

以及所有集成：

| 工具 | 方式 | 功能 |
|------|--------|-------------|
| GitHub | `gh` CLI | 议题、epic、项目管理 |
| Notion | MCP | 产品规格和文档 |
| Snowflake | `snow` CLI | 数据仓库查询 |
| Google Workspace | `gws` CLI | 日历、文档、表格、邮件 |
| Slack | MCP 插件 | 搜索、阅读和发送消息 |

五个集成，五个不同的数据源。全部可以从一个终端访问，全部通过一次对话共享上下文。

## 搭建建议

一些我踩坑后学到的经验：

- **把所有东西都记录在 `CLAUDE.md` 中。** Claude 无法使用它不知道的工具。每次添加新集成时，告诉 Claude 有哪些可用命令以及如何使用。更好的做法是，让 Claude 自己去探索并记录工具。
- **Slack 插件可能需要重新连接。** 执行 `/install-slack-app` 后，运行 `/mcp` 进行连接。如果第一次不成功，再试一次。首次设置时可能不稳定，但之后就很稳定了。
- **复杂的 Sheet 操作使用原始 API。** 当你进行多标签页操作并需要格式化和图表时，`spreadsheets values update` 命令比高级封装工具更好用。
- **将团队名单和集成详情存储在 `CLAUDE.md` 中。** 它们会跨会话持久保存。Claude 从对话开始的那一刻就知道你的团队、你的数据结构和你的工具——这才是让它感觉像控制中心而不是聊天机器人的关键。

## 变化

第一章之后，我有了一个互联的工作空间。第二章之后，我有了数据访问。这一章之后，我什么都有了。日历、文档、表格、沟通记录、数据仓库、项目管理、设计上下文——全部在一个地方。

工作流的转变是真实的。我不再打开 Google Calendar 安排会议。不再打开 Google Docs 审核文档。不再打开 Google Sheets 制作仪表盘。不再在 Slack 里翻找旧讨论。我描述我需要什么，然后它就完成了。

完美吗？不。认证设置很折腾。gws CLI 还很年轻，错误信息不总是有帮助。有些操作需要用 Python subprocess 调用来避免 shell 转义问题。但设置的摩擦是一次性成本，节省的时间是每一天。

三章下来，论点依然成立：每个新集成都在乘以现有集成的价值。从"我有个问题"到"我有答案，并附有来自五个不同数据源的支撑数据"之间的差距，已经从数小时坍缩为数秒。

这就是上帝模式。
