---
title: "30 Days of Vibe Coding - 总结"
description: "用AI辅助编程在30天内完成30个项目。哪些容易，哪些困难，哪些出乎意料，以及未来的方向。"
summary: "用AI辅助编程在30天内完成30个项目。哪些容易，哪些困难，哪些出乎意料，以及未来的方向。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "wrapup"]
series: ["30 Days of Vibe Coding"]
series_order: 31
seriesOpened: false
date: 2026-05-07
draft: false
#type: "hidden"
---

结束了。三十个项目。三十天。

一个平台跳跃游戏。Nokia 3310上的贪吃蛇克隆。等距视角的RPG。带程序化音乐的俄罗斯方块。打砖块。Go写的番茄钟。git仪表盘。带MCP服务器的笔记应用。AI可以管理的看板。Miro克隆。Trello克隆。Wordle。作品集生成器。ASCII艺术风格的天气仪表盘。自动战斗游戏。一个从失败中学习的AI井字棋。一个关于AI逃离封锁的黑客游戏。实时投票应用。活动反应墙。协作情绪板。匿名聊天室。实时问答工具。浏览器里的Windows 95。博客重新设计。零音频文件的环境音混音器。协作像素画。Rust写的终端模拟器。Go写的代码编辑器。Notion克隆。以及一个包含以上所有项目的操作系统。

这一切之所以可能，是因为编程代理。主要是Claude，偶尔是Codex，还有[Watchfire](https://watchfire.io)来编排复杂的工作，把粗略的想法转化为详细的规格说明，让代理去执行。

## 数据一览

- **30个项目**已交付并部署
- 所有项目累计**约326,000行代码**
- 总共**约1,200次提交**
- **约450个Watchfire任务**（从井字棋的4个任务到代码编辑器的43个任务）
- **8种技术栈：** TypeScript/React、Go/Bubble Tea、Python/Textual、Rust/Tauri、Go/Wails、原生JS、Astro、Next.js
- **6个Firebase项目**（带实时同步）
- **5个游戏，** 5个TUI应用，3个原生桌面应用，17个Web应用
- 原生应用支持**3个平台**（macOS、Linux、Windows）
- 每篇博客**7种语言**（英语、葡萄牙语、西班牙语、德语、法语、意大利语、日语、中文）

## 容易的部分

几乎每次都能顺利完成、迭代最少的东西。

**游戏和自包含应用。** 任何有明确规则和既定范围的东西。俄罗斯方块、Wordle、打砖块、贪吃蛇。AI知道这些游戏应该是什么样的，因为它们是有大量文档记录的模式。你描述游戏，AI就构建游戏。几乎每次第一次构建就能玩。

**前端UI。** React组件、Tailwind样式、布局、动画。AI快速生成干净的UI代码。卡片布局、模态框、侧边栏、仪表盘、表单流程。只要你能描述它应该长什么样，第一遍就能得到接近的结果。

**系统和逻辑。** 战斗引擎、Q学习、看板状态管理、撤销/重做、文件监听、MCP服务器。AI擅长处理算法工作和状态机。番茄钟的状态机、MyBrute的战斗系统、井字棋的Q学习实现。所有这些都不需要我调试核心逻辑就完成了。

**包装现有工具。** 第7天证明了你可以把AI指向任何有结构化输出的CLI，然后围绕它构建一个包装UI。它调用git，解析文本，构建仪表盘。同样的模式适用于Docker、kubectl，任何有文本接口的东西。

**Firebase集成。** 匿名认证、Firestore监听器、实时同步。AI对Firebase的模式了如指掌。六个项目使用了Firebase，实时协作每次首次部署就能工作。安全规则、数据建模、连接管理。全部搞定。

## 仍然困难的部分

始终需要人工干预、迭代和耐心的东西。

**视觉风格和艺术指导。** 这不仅限于游戏。每当你想为前端应用设定特定的视觉标识时，AI就会犯难。第15天（MyBrute）经历了四种完全不同的角色风格才找到一个合适的。但同样的问题也出现在Web应用中。落地页美学、恰到好处的配色方案、字体搭配、看起来是刻意为之而非机器生成的间距。AI产出结果。人类判断好不好。

**部署和基础设施。** 代码在本地能跑。一部署就全崩了。第29天（n0ti0n）光是在生产环境调试Firestore就有几十次提交。长轮询配置、缓存设置、环境变量裁剪、连接超时。只有部署后才会暴露的东西。第28天（ideA）为了让Wails在GitHub Actions中为三个平台构建，打了好几轮提交仗。AI能快速建议修复方案，但部署-测试-迭代的循环无论如何都很慢。

**原生应用CI/CD。** 跨平台构建很痛苦。Linux上的WebKit依赖、每个平台的构建标签、Wails绑定生成、代码签名、检测操作系统和架构的安装脚本。第27天和第28天花在CI上的时间比实际应用还多。Watchfire在这里帮了大忙，它不断循环调试、测试、运行、失败、重复，直到流水线终于跑通。没有那种坚持不懈，我早就放弃跨平台发布了。

**打磨和边缘情况。** 第30天的窗口吸附功能，每次我以为修好了就冒出新bug。最大化的窗口吸附会怎样？拖拽过程中切换工作区呢？调整已吸附窗口的大小呢？AI擅长构建正常路径。边缘情况需要人类去测试和报告。

## 出乎意料的事

开始这个挑战时没有预料到的事情。

**AI会做产品决策。** 第21天（ChatRooms）在我没有指定的情况下使用了匿名认证。AI判断对于一个休闲聊天应用，强制创建账号会是转化杀手。这不是代码生成。这是产品直觉。这种情况反复发生。我没有要求的功能出现了，因为AI推断它们应该在那里。这可能与规格驱动开发有关。在Watchfire中，你为项目指定产品方向。代理朝着那个愿景工作，持续迭代直到代码匹配规格。当规格对产品应该有什么样的感觉描述得很清楚时，AI会做出更好的判断。

**不熟悉的技术栈也没问题。** 我不会写Go。从没碰过Bubble Tea、Lip Gloss、Tauri或Wails。也不懂Rust。但第6-9天交付了精致的Go TUI应用，第27天交付了Rust后端的终端模拟器，第28天交付了Go/Wails的代码编辑器。尝试新技术栈的门槛崩塌了。使用Context7 MCP给代理提供最新文档在这里很有帮助。当AI可以按需获取最新文档时，就不需要依赖训练数据了。

**瓶颈转移了。** 我不再花时间构建，开始花时间审查、测试和提交bug报告。限制因素从来不是"AI能不能写这段代码"。而是"我测试得够不够充分"和"这个感觉对不对"。

**程序化音频是可行的。** 第4天（俄罗斯方块）、第12天（Wordle）和第25天（SoundScape）使用Web Audio API合成了所有音效和音乐。零音频文件。雨声、风声、壁炉噼啪声、lo-fi节拍、游戏音效。全部用振荡器和噪声缓冲区生成。我完全没想到这在生产环境中是可行的。

**叙事比代码更重要。** 最引起共鸣的项目不是技术上最厉害的。第17天（Genesis）靠的是故事而不是小游戏。第23天（RetroOS）靠的是怀旧感而不是窗口管理器。第15天（MyBrute）因为我和原版游戏的个人情感联系才引起共鸣。代码是容易的部分。角度才是困难的部分。

## 我对未来的预测

构建原型的成本已经大幅下降。不是构建优秀软件的成本。那仍然需要时间、品味和迭代。但测试一个想法的成本？探索一个从未用过的技术栈的成本？接近于零。

**给现有软件添加功能也变得极其便宜。** 一旦项目以正确的架构搭建好，添加新功能比从头构建更容易。AI理解现有代码库，模式已经建立，每个新功能都建立在已有的基础上。下一个功能的边际成本趋近于零。

**瓶颈从写代码转向了决定发布什么。** 怎么做营销？怎么卖？什么时候上线？工程不再是瓶颈了。产品策略、上市方案和分发渠道才是。

**这已经在改变团队的工作方式。** 如果你能在几小时而不是几个Sprint内构建功能，路线图还有意义吗？怎么测试所有你能发布的东西？怎么知道它对正确的业务指标产生了正确的影响？怎么像部署一样快速地下线？我预测实验工具将对构建软件的公司变得至关重要。A/B测试、功能开关、渐进式发布。如果不能同样快速地衡量和回滚，快速部署的能力就毫无价值。

**AI不会取代开发者。它会增强开发者。** 真正的挑战是组织层面的。整个公司都是围绕计划、路线图、Sprint周期和估算从零搭建的。现在构建变快了，其他职能怎么跟上？产品、设计、QA、营销、销售。工程瓶颈消失并不意味着工作消失。而是瓶颈向上游和下游转移。适应这一转变的公司将超越所有竞争对手。

工具不是在取代开发者。它们是在消除不去尝试的理由。

## Watchfire

这个挑战中的每个项目都是用[Watchfire](https://watchfire.io)构建的。我真的为此感到骄傲。这是我的项目。这个挑战的部分目的就是在创造内容的同时，在生产环境中对它进行压力测试。现在你知道了。

我给它一个粗略的想法，它把它转化为详细的规格说明，把工作拆分成任务，然后通过编程代理执行每一个任务。有些天是4个任务。有些天是43个。我审查输出，测试它，在出问题时提交bug报告，反复迭代直到交付。

我在做这个挑战的同时开始构建Watchfire。第一个Platformer项目是用v0构建的。到第30天miniOs交付时，已经是v5了。每个项目都给了我压力测试工具、发现bug、收集反馈和交付改进的机会。挑战和工具一起进化。

30天内Watchfire发生的变化：

- **v1.0 Ember**（第8天）- JSONL记录日志替换了乱码的终端输出，变成了干净的对话日志。修复了在速率限制时导致无限循环的代理重启循环。修复了在macOS受保护目录中阻止项目的沙盒问题。
- **v2.0 Spark**（第11天）- 可插拔的代理后端接口。OpenAI Codex、opencode和Gemini CLI作为一等后端与Claude Code并列交付。每个任务可以覆盖代理，在单个项目中混合搭配代理。初始化向导、TUI设置和GUI设置中的代理选择器。
- **v3.0 Blaze**（第15天）- GitHub Copilot CLI作为第五个后端。修复了Linux上跨文件系统更新失败的问题。修复了任务较多项目中的任务列表轮转bug。修复了每次启动都触发的GUI更新提示。
- **v4.0 Beacon**（第28天）- 大更新。带有聚合状态、过滤器标签、经过时间徽章、实时终端预览和失败任务醒目提示的仪表盘。任务失败和运行完成的操作系统通知。内联diff查看器。每个任务的指标捕获（时长、token、成本）。带KPI条和图表的项目及跨项目洞察视图。导出CSV和Markdown报告。每周摘要通知。与Slack、Discord和webhook的出站集成。GitHub自动创建PR。带GitHub、Slack和Discord处理程序的入站HTTP服务器。
- **v5.0 Flare**（第30天）- 关闭了Beacon的入站循环。Slack和Discord的OAuth机器人令牌。GitHub Enterprise、GitLab和Bitbucket支持。按IP限流。带重试/取消按钮的Slack交互组件。Discord斜杠命令自动注册。带搜索的macOS风格设置UI。修复了run-all在合并失败时静默停止的问题。

还有最大的变化：在挑战期间，Watchfire从仅支持macOS变成了完全跨平台支持macOS、Linux和Windows。仅此一项就改变了谁能使用它。

30天内5个大版本。从一个仅限macOS的任务运行器，变成了一个跨平台编排平台，支持多代理、仪表盘、通知、集成、洞察和交付流水线。

Watchfire支持多种编程代理（Claude Code、Codex、Gemini、opencode、Copilot），跨平台运行，可以作为GUI、CLI或TUI使用。我目前正在开发v6，添加Cursor支持并修复一个并发bug。更准确地说，现在是Watchfire在构建Watchfire。工具在编排自己的开发。这是我开始这个挑战时没想到会写下的一句话。

还有很多东西要来。等我从这30天中恢复过来之后，我会写一篇关于Watchfire的深度解析。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 感谢

如果你一路跟随、试过任何项目、分享过帖子，或者只是读了几篇文章，谢谢你。这是一项繁重的工作，也非常有趣。公开构建是一件奇怪的事，因为你在把粗糙的作品展示给所有人看。但这就是重点。不是打磨。不是完美。只是持续的输出和学习。

如果你想关注我接下来做的事情，订阅博客（链接在下方）或者在社交媒体上关注我。如果这些内容引起了你的共鸣，分享给可能觉得有用的人。这是支持这类工作的最好方式。

三十个项目。三十天。完成。

## 全部30个项目

| Day | 项目 | 类型 | 试试看 |
|-----|---------|------|--------|
| 1 | [Platformer](/posts/202604-vibe30/day01-platformer/) | 游戏 | [玩](https://vibe30-day01-the-platformer.vercel.app) |
| 2 | [Snake](/posts/202604-vibe30/day02-snake/) | 游戏 | [玩](https://vibe30-day02-snake.vercel.app) |
| 3 | [Realm of Shadows](/posts/202604-vibe30/day03-rpg/) | 游戏 | [玩](https://vibe30-day03-rpg.vercel.app) |
| 4 | [Tetris](/posts/202604-vibe30/day04-tetris/) | 游戏 | [玩](https://vibe30-day04-tetris.vercel.app) |
| 5 | [Breakout](/posts/202604-vibe30/day05-breakout/) | 游戏 | [玩](https://vibe30-day05-breakout.vercel.app) |
| 6 | [Pomodoro](/posts/202604-vibe30/day06-pomodoro/) | TUI | [发布](https://github.com/nunocoracao/Vibe30-day06-pomodoro/releases/latest) |
| 7 | [GitDash](/posts/202604-vibe30/day07-gitdash/) | TUI | [发布](https://github.com/nunocoracao/Vibe30-day07-gitdash/releases/latest) |
| 8 | [NotesTUI](/posts/202604-vibe30/day08-notestui/) | TUI | [发布](https://github.com/nunocoracao/Vibe30-day08-notestui/releases/latest) |
| 9 | [TaskTUI](/posts/202604-vibe30/day09-tasktui/) | TUI | [发布](https://github.com/nunocoracao/Vibe30-day09-tasktui/releases/latest) |
| 10 | [Miro Clone](/posts/202604-vibe30/day10-miroclone/) | Web应用 | [试试](https://vibe30-day10-miroclone.vercel.app) |
| 11 | [Treelo](/posts/202604-vibe30/day11-trelloclone/) | Web应用 | [试试](https://vibe30-day11-trelloclone.vercel.app) |
| 12 | [Wordle](/posts/202604-vibe30/day12-wordle/) | 游戏 | [玩](https://vibe30-day12-wordle.vercel.app) |
| 13 | [GitFolio](/posts/202604-vibe30/day13-githubportfolio/) | Web应用 | [试试](https://vibe30-day13-githubportfolio.vercel.app) |
| 14 | [WeatherTUI](/posts/202604-vibe30/day14-weathertui/) | TUI | [仓库](https://github.com/nunocoracao/Vibe30-day14-weathertui) |
| 15 | [MyBrute Arena](/posts/202604-vibe30/day15-mybrute/) | 游戏 | [玩](https://vibe30-day15-mybrute.vercel.app) |
| 16 | [Tic-Tac-Toe: Evolved](/posts/202604-vibe30/day16-tictactoe/) | 游戏 | [玩](https://vibe30-day16-tictactoe-evolved.vercel.app) |
| 17 | [Project GENESIS](/posts/202604-vibe30/day17-genesis/) | 游戏 | [玩](https://vibe30-day17-genesis.vercel.app) |
| 18 | [PollBox](/posts/202604-vibe30/day18-pollbox/) | Web应用 | [试试](https://vibe30-day18-pollbox.vercel.app) |
| 19 | [ReactionWall](/posts/202604-vibe30/day19-reactionwall/) | Web应用 | [试试](https://vibe30-day19-reactionwall.vercel.app) |
| 20 | [MoodBoard](/posts/202604-vibe30/day20-moodboard/) | Web应用 | [试试](https://vibe30-day20-moodboard.vercel.app) |
| 21 | [ChatRooms](/posts/202604-vibe30/day21-chatrooms/) | Web应用 | [试试](https://vibe30-day21-chatrooms-nir8.vercel.app) |
| 22 | [LiveQ&A](/posts/202604-vibe30/day22-liveqa/) | Web应用 | [试试](https://vibe30-day22-liveqa.vercel.app) |
| 23 | [RetroOS](/posts/202604-vibe30/day23-retroos/) | Web应用 | [试试](https://vibe30-day23-retroos.vercel.app) |
| 24 | [Reblog](/posts/202604-vibe30/day24-reblog/) | Web应用 | [试试](https://vibe30-day24-reblog.vercel.app) |
| 25 | [SoundScape](/posts/202604-vibe30/day25-soundscape/) | Web应用 | [试试](https://vibe30-day25-soundscape.vercel.app) |
| 26 | [PixelForge](/posts/202604-vibe30/day26-pixelforge/) | Web应用 | [试试](https://vibe30-day26-pixelforge.vercel.app) |
| 27 | [Terminal](/posts/202604-vibe30/day27-terminal/) | 原生 | [发布](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest) |
| 28 | [ideA](/posts/202604-vibe30/day28-idea/) | 原生 | [发布](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest) |
| 29 | [n0ti0n](/posts/202604-vibe30/day29-n0ti0n/) | Web应用 | [试试](https://blocknotes-lime.vercel.app) |
| 30 | [miniOs](/posts/202604-vibe30/day30-minios/) | Web应用 | [试试](https://vibe30-day30-minios.vercel.app) |

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)系列的最后一篇文章。全部30个项目均在[GitHub](https://github.com/nunocoracao/30DaysOfVibeCoding)上开源。*
