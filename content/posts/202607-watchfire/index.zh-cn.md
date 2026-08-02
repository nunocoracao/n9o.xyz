---
title: "Watchfire：AI 编码智能体的控制室"
summary: "一个开源控制室，用来跨多个项目运行 AI 编码智能体 - 它隔离工作、管理任务与 worktree，并且只在真正需要你时才出声。六个月、九个大版本，以及一个越滚越大的元问题：Watchfire 如今在构建 Watchfire，而从 v9 起，你的智能体也能来开这台车。"
description: "一个开源控制室，用来跨多个项目运行 AI 编码智能体 - 它隔离工作、管理任务与 worktree，并且只在真正需要你时才出声。六个月、九个大版本，以及一个越滚越大的元问题：Watchfire 如今在构建 Watchfire，而从 v9 起，你的智能体也能来开这台车。"
categories: ["技术", "AI", "创客"]
tags: ["AI", "Claude Code", "vibe coding", "副业项目", "watchfire"]
date: 2026-08-02
draft: false
---

大约一年前，AI 编码智能体就不再只是演示了。Claude Code、Codex、opencode、Gemini CLI、Copilot CLI、Cursor Agent - 它们现在是真的会写代码。瓶颈换了位置。问题不再是「智能体能不能把这个做出来」，而是「我能不能在不发疯的前提下，盯住五个智能体在六个仓库里干的事」。

我开始每天撞上这堵墙。于是我做了个工具，取名 Watchfire。

**Watchfire 是一个开源控制室，用来跨多个项目运行 AI 编码智能体：它隔离工作、管理任务与 git worktree，并且只在真正需要你时才出声。** 它面向的是已经同时挂着多个长时间智能体任务的独立开发者或小团队。它不替代你的 IDE，对一次性的 Claude Code 会话来说也过于隆重。

六个月过去，它有了一个令人不太自在的性质：**Watchfire 构建 Watchfire**。下文提到的每一项功能，都是由 Watchfire 自己编排的智能体来定义、执行并合并的 - 包括那个让*你的*智能体也能这么干的版本。这个闭环正是这篇文章存在的理由，我会把凭据摆出来。

不过六个月里我学到的最有用的东西，跟生成代码完全无关。它关于那些任务明确告诉智能体*不要*做决定的项目。那是本文的后半部分，也是我会先读的那一半。

它是开源的，Apache 2.0，可在 macOS、Linux 和 Windows 上运行：

{{< github repo="watchfire-io/watchfire" >}}

{{< figure src="/posts/202607-watchfire/img/tour/dashboard.webp" alt="当前的 Watchfire 仪表盘" caption="今天的 Watchfire 仪表盘 - 运行中/空闲/今日完成的脉搏线，一条在一切正常时保持安静的提醒横幅，以及最近一周的舰队指标：69 个任务、202 次提交、净增 64,979 行。最后这个数字是 churn，不是生产力的主张。" >}}

## 逼出这个工具的问题

年初有几周，我在五个项目和三个终端窗口之间来回蹦跶。每个项目都有自己的 Claude Code 会话。每个会话都有自己的权限弹窗、自己的限流打嗝、自己那个我一切窗口就忘掉的半截任务。智能体干得很好。慢的那一环是我。

具体来说有这么几点：

- **给提示当保姆。** 每条 shell 命令都要批准。每次写文件都要批准。我去倒杯咖啡回来，发现智能体停在一个五十步任务的第二个提示上。
- **没有汇总视图。** 现在到底什么在跑？什么卡住了？我盯着 1 号智能体的这一小时里，3 号干了什么？没有任何东西告诉我。
- **无声的失败。** 智能体会死在合并冲突、限流、格式错误的 YAML 上，然后就……停住。我一小时后才发现。
- **丢失的上下文。** 切换项目意味着重新解释约定、重新粘贴 CLAUDE.md、重新加载「什么东西在哪里」的心智模型。

Watchfire 起初只是一个周日下午对这种痛苦的逃避。

## Watchfire 今天是什么

它实际为你做的有四件事：

- **你不用再点批准了。** 工作以任务的形式登记，带提示词和验收标准，然后无人值守地执行。你回来看到的是一个已合并的分支，而不是一个卡住的提示。
- **你能一眼看到整支舰队。** 一块横跨所有项目的仪表盘：什么在跑、什么被堵住、今天完成了什么、花了多少钱。除非真的需要你，提醒横幅一直保持安静。
- **什么都不会撞车。** 每个任务都在自己的 git worktree 里、在操作系统沙箱后面运行，因此跨项目并行的智能体无法破坏彼此的工作，触及你的凭据的能力也被大幅削弱。
- **工作留下纸面痕迹。** 每个任务的指标 - 时长、成本、提交、文件、行数、合并的结果 - 汇总进项目级和舰队级的 Insights，另有 CSV/Markdown 导出和每周摘要。

目前它通过单一的 `Backend` 接口支持**六种智能体后端** - Claude Code、OpenAI Codex、opencode、Gemini CLI、GitHub Copilot CLI 和 Cursor Agent - 每一种都在自己独立的配置目录里（`CODEX_HOME`、`OPENCODE_CONFIG_DIR`、`COPILOT_HOME`），这样凭据和提示词不会在会话之间串味。你可以按任务覆盖使用哪个智能体。

### 两层爆炸半径

如果这东西是别人做的，这就是我最想知道的部分，因为「走开让它跑」只有在你清楚「它」能碰到什么的时候才算合理。

每个任务都在**两层相互独立的隔离**之后运行。第一层是 git worktree：每个任务拿到自己的 `watchfire/<task_number>` 检出，因此同一仓库里的两个智能体看不到对方改到一半的内容，并且在运行成功并合并之前，什么都不会落到你的分支上。第二层是围绕智能体进程的操作系统级沙箱 - macOS 上是 **Seatbelt**，Linux 5.13+ 上是 **Landlock**，更老的内核上则回落到 **bubblewrap** 的挂载命名空间。

这个沙箱是一份有主见的文件系统白名单。可写：项目目录、临时目录，以及真实构建需要的缓存（`~/.npm`、`~/.cargo`、`~/go`、`~/.rustup`）。可读：编译器、系统库、工具配置。直接封死：`~/.ssh`、`~/.aws`、`~/.gnupg`、`.netrc`、`.npmrc`、`.env` 文件、`.git/hooks`，以及 macOS 上你的个人文件夹。一个跑到这些受保护位置去找部署密钥的智能体，在那里什么也找不到。

两点诚实的保留，[关于沙箱的那篇文章](https://watchfire.io/blog/2026-05-19-how-watchfire-sandboxes-every-agent)都是明说而非埋着：沙箱以文件系统为主，目前**不**拦截出站 HTTPS；以及 **Windows 目前在无沙箱状态下运行** - worktree 隔离仍然生效，操作系统那一层没有。两件事都在清单上。

正是这个组合，让本文其余的一切站得住脚。绕过权限提示只有在爆炸半径限于一个用完即弃的 worktree、以及一个智能体走不出去的文件系统时，才算清醒。

### 引擎盖之下

一个 **Go 守护进程**（`watchfired`）负责编排、沙箱、PTY 模拟、worktree 以及一个 gRPC 服务。三个客户端与它通话：面向终端与 SSH 工作的 **Bubble Tea TUI**、为每个项目开一个系统窗口的 **Electron + React GUI**，以及一个轻薄的 **CLI**。守护进程通过 `~/.watchfire/daemon.yaml` 公布自己的端口，锁文件上的 `flock` 保证每个用户只有一个守护进程 - 再也不会「两个窗口抢同一个 worktree」。智能体的输出经由 PTY 传出，在守护进程侧由一个真正的 VT 模拟器（`hinshun/vt10x`）解析，因此 ANSI 在哪儿都能正确渲染。

状态到处都是磁盘上的 YAML - 一份注册表、全局设置、集成配置，以及每个项目的 `project.yaml` 加上 `.watchfire/tasks/<n>.yaml` 文件 - 自 v6.0 起采用原子写入（tmp + `fsync` + `rename`），那是用惨痛代价堵上的一个数据丢失竞态。所有东西都能 grep、能 diff，并且经得起 git。

而从 v9 起，还有第四个根本不是界面的客户端：`watchfire mcp serve` 把整个编排器暴露为一个 MCP 服务。这个值得单开一节。

## 快速导览

在那些只有终端的早期日子里，我最想念的是一块*仪表盘*。不是项目列表 - 是状态。我们到哪儿了？什么卡住了？智能体今天干了什么？那就是本文开头那张截图：一条运行中 / 需要关注 / 空闲 / 今日完成的脉搏线、一条一切正常的横幅、带 7 天/30 天/90 天/全部窗口的舰队指标、筛选标签，以及每个项目一张卡片，各自带着自己的任务计数和代码 churn。

点开一个项目，它会在自己的窗口里打开 - 这是 v8「Inferno」的重新设计。布局以聊天为主：智能体对话占据宽面板，Tasks / Definition / Insights / Secrets / Trash / Settings 则住在右侧的标签式侧栏里：

{{< figure src="/posts/202607-watchfire/img/tour/project-window.webp" alt="一个 Watchfire 项目窗口，左边是智能体流，右边是任务队列" caption="一个项目窗口：先是聊天，其余都是参考资料。这个是 Watchfire 自己的仓库，积累了 129 个任务，此刻在一个全新的 Claude Code 会话上空闲着。" >}}

每个项目都有一份 markdown 写的 **Definition**，会被折进提示词上下文。它是项目的常设简报 - 这是什么、哪些约定重要、哪些文件重要 - 也正是它让多项目工作流成为可能，因为智能体开局就带着上下文，而不是一颗空脑袋：

{{< figure src="/posts/202607-watchfire/img/tour/definition.webp" alt="项目的 Definition 标签页" caption="Definition 标签页。可以就地编辑，也可以甩给 $EDITOR。" >}}

项目级的 **Insights** 回答「我这周究竟干了什么」 - 每日任务数、按智能体的分布、时长分布、成本，以及从 v8 起还有代码指标：

{{< figure src="/posts/202607-watchfire/img/tour/insights.webp" alt="项目级 Insights" caption="项目级 Insights：KPI、每日任务数、按智能体的环形图、时长分布。主仪表盘上还有一份舰队级的汇总。" >}}

**Wildfire** 是自主模式：Watchfire 执行就绪的任务、打磨草稿、生成新任务，循环往复，直到项目定义说完成为止。它在 v8 里拿到了一等公民的 GUI - 一个带确认弹窗的启动按钮，以及运行时的实时阶段指示。[Inside Wildfire mode](https://watchfire.io/blog/2026-05-18-inside-wildfire-mode) 这篇文章写了完整机制：

{{< figure src="/posts/202607-watchfire/img/tour/wildfire-confirm.webp" alt="Start Wildfire 的确认弹窗" caption="这个弹窗把平时不说破的话说了出来：一个无人值守运行、持续消耗 token 的自主循环，并且会替换掉当前在该项目上的智能体。就这两句话，已经不止一次把我从我自己手里救回来。" >}}

全局 **Settings** 长出了可搜索的子页面，承载舰队级默认值 - 新项目分到哪个智能体，以及它们是否自动合并、自动删除分支、自动启动就绪任务，全部可按项目覆盖。**Open** 这个分体按钮会检测哪些编辑器 CLI 真的装了，从 VS Code、Cursor 到 Zed、JetBrains 和 Xcode，即使 GUI 的 PATH 被剥光了也照样能用。

为了那些 Watchfire 不该占据屏幕的时段，v8 加入了 **Mini Monitor** - 一条无边框、始终置顶的窄条 - 以及一个托盘菜单，带着同样的状态外加守护进程的端口：

{{< figure src="/posts/202607-watchfire/img/tour/mini-monitor.webp" alt="Mini Monitor 窗口" caption="Mini Monitor：整支舰队塞进一条便利贴大小的窄条里。橙色那行是唯一真正在干活的项目。" >}}

同样的工作流也存在于 **TUI** 中，因为我一半的开发工作是通过 SSH 连到一台 Linux 机器上完成的，在那里任务编辑起来和 GUI 里一样顺手。一个轻薄的 **CLI** 覆盖了守护进程能做的一切：

{{< figure src="/posts/202607-watchfire/img/tour/tui.webp" alt="Watchfire TUI" caption="TUI 镜像了 GUI 的双栏布局：左边任务，右边智能体流，并带有 chat / generate / plan / run all / wildfire / stop 的快捷键。" >}}

{{< figure src="/posts/202607-watchfire/img/tour/cli-help.webp" alt="watchfire --help" caption="CLI 的表面：chat、configure、daemon、define、generate、init、integrations、metrics、plan、run、task、update、wildfire - 以及从 v9 起的 mcp。" >}}

## 证据：30 天 vibe coding

四月，我给自己定下了[30 天、30 个用 AI 造出来的项目](/posts/202604-vibe30/announcement/)。一天一个，天天如此。Claude Code 跑在 Max 20x 套餐上，Watchfire 负责编排，Context7 MCP 给智能体喂新鲜文档。

计划是发布一批副业项目。我没料到的是：**Watchfire 自己成了那个每天都被压力测试的项目**，而我给自己切出来的 issue 队列，变成了我做过的最激进的产品路线图。

从这个[系列](/series/30-days-of-vibe-coding/)里挑几个有代表性的片段：

- **第 1 天（Platformer）** - *「我没有坐在那儿逐个批准文件改动。Watchfire 把任务排好队，一个个做完了。我回来时已经有一个能玩的游戏。」* 走开式的循环在第一天就奏效了。它同时也立刻暴露了所有还没准备好的东西：乱码的终端输出、限流时智能体的重启循环、macOS 上沙箱挡住 `~/Desktop`。
- **第 12 天（Wordle）** - *「每个任务叠加一类特定的打磨，而且没有一个破坏了先前的成果。」* 增量式的任务模型是这件事能成立的唯一原因。一口气的大提示词总是崩，许多小而有边界的任务不会。
- **第 27-28 天（Terminal、ideA）** - 跨平台原生 CI/CD 的地狱。*「Watchfire 在这里帮了大忙，它进入无休止的调试、测试、运行、失败、再重复的循环，直到流水线终于跑通。没有那份执拗，我大概会放弃跨平台发布。」*
- **第 30 天（miniOs）** - *「第 1 天，我用一句话造了个平台跳跃游戏。第 30 天，我造了个操作系统，里面装着那个游戏，以及这中间我做的一切。」*

整整 30 天：**通过 Watchfire 执行了约 450 个任务、约 1,200 次提交**，改动约 32.6 万行 - 这是 Watchfire 自己统计的新增加删除，是 churn 的度量，而不是生产力的主张。仅在挑战期间就发布了五个 Watchfire 大版本（Ember → Spark → Blaze → Beacon → Flare）。

在这中间的某个地方，这个工具越过了一条我并没有计划的线。

## 元的那部分

有那么一刻 - 大概在第二周的某处 - 闭环合拢了。你在用 Watchfire 构建一个项目。这个项目暴露出 Watchfire 的一个 bug。你把这个 bug 登记成 Watchfire 的一个任务。Watchfire 跑一个智能体去修 Watchfire。修复发布了。然后你回到原来那个项目，它还在另一个标签页里等着。

第一次觉得好笑。第十次就只是工作流。到写总结的时候，它已经是全部重点：

> *或者更准确地说，现在是 Watchfire 在构建 Watchfire。这个工具在编排它自己的开发。*

那是五月写下的。到了七月，它不再是文章里的一句话，而成了发布流程。v9 队列里的每一个任务 - MCP 服务的骨架、任务工厂工具、运行类工具、检查类工具 - 都是通过 Watchfire 撰写、执行并合并的：

{{< figure src="/posts/202607-watchfire/img/meta/building-v9.webp" alt="Watchfire 自己的项目窗口，里面是开发中的 v9 任务队列" caption="v8 在构建 v9：九个开发中的任务，每一个都是 MCP 服务的一块，在 Watchfire 自己的仓库里、在 Watchfire 内部运行。" >}}

而当队列清空时，是智能体自己准备好了这次发布：

{{< figure src="/posts/202607-watchfire/img/meta/v9-release-chat.webp" alt="Watchfire 智能体报告 v9.0.0 已作为草稿发布准备就绪" caption="v9.0.0 的收尾，原样记录：版本号已提升、CHANGELOG 已写、22 次提交已推送、发布工作流全绿、20 个产物已备为草稿 - 然后在那唯一无法撤销的一步前彻底停住，等一个「是」。它把边界画对了，而这正是我真正在意的部分。" >}}

网站也在这个闭环里。[watchfire.io](https://watchfire.io) - 文档、导览、changelog、博客 - 和其他项目一样，是一个 Watchfire 项目，由它所记录的那个东西一个任务一个任务地建起来。关于这件事还有一整篇文章，而那篇文章正是由它所描述的流程写的：[Watchfire eats its own dogfood](https://watchfire.io/blog/2026-05-19-eating-our-own-dogfood)。

{{< figure src="/posts/202607-watchfire/img/meta/website-v91.webp" alt="一个 Watchfire 智能体正在把 watchfire.io 更新到 v9.1" caption="四个词的提示 - 「update watchfire website to 9.1」 - 智能体就找出了每一处声明版本号的地方（首屏徽章、JSON-LD、changelog、RSS），写好发布说明，验证构建，然后在提交之前停手。注意中间那次判断：它把一个徽章留在 9.0，因为那仍是主打版本，而 9.1 只是修 bug。" >}}

这一切之所以不是噱头，理由平淡无奇。我感受到的每一处擦伤，都被造成它的同一套机器记录下来并修好。每一句「要是它能……就好了」都在几秒内变成一条草稿任务，而从察觉缺口到发布修复的距离缩短到了几个小时。这并不能证明 Watchfire 对*你的*工作有合适的表面 - 它证明的是，对我能够连续六个月、每天、以全部细节观察的那唯一一条工作流，它有合适的表面。碰巧，那是一种打造工具的好办法。而 v9 就是把这个观察产品化：既然 Watchfire 已经能构建 Watchfire，缺的只是让*你的*智能体也来握方向盘。

## 把一个聊天接进工厂

这就说到 v9 里我玩得最开心的部分。把一个智能体接进工厂，不是在配置文件里寻宝 - 而是一个设置页。Watchfire 检测你机器上装了哪些智能体 CLI，然后一键把 MCP 条目写进各自的配置里：

{{< figure src="/posts/202607-watchfire/img/meta/mcp-settings.webp" alt="Settings → MCP 页面，每个智能体都有一键安装" caption="Settings → MCP：每个智能体 CLI 一张卡片。Claude Code 一点就好 - Watchfire 会把条目写进 ~/.claude.json。Codex 和 Copilot 被自动检测到，按一下 Install 就行。其余的都有可复制的片段。仅 stdio、仅本机，网络上什么都不放。" >}}

我按下 Claude Code 那个按钮，重启一个会话，一个普通终端就成了 Watchfire 的客户端。问它现在什么在跑，它会列出每一个已注册的项目，告诉你哪个的 Wildfire 循环正处在执行阶段，并把那个项目的整个任务队列拉出来 - 而且哪儿都没开着 Watchfire 的窗口。

一旦有了这个，一堆工作流就不再是科幻：

- **在外面规划，在里面制造。** 你在聊天里和一个智能体做头脑风暴 - 任何聊天都行 - 它不再往你脸上糊代码，而是登记带验收标准、划好边界的任务，交给 Watchfire 在沙箱里、在 worktree 里执行，带合并和指标。对话依然是对话；代码发生在工厂里。
- **一个座位跨项目干活。** 一个坐在这个博客仓库里的会话，可以把它刚在 Watchfire 仓库里发现的 bug 登记下来，或者在网站项目上发起一次文档更新，不用换目录也不用换窗口。
- **智能体审查智能体。** 外层智能体在一次运行之后读取 `get_task_diff`，判断是否要登记一个后续任务 - 一个审查者从不碰 worktree 的审查闭环。
- **自己会写自己的 bug 报告。** 我向一个接好的会话要的第一样东西，是某个项目的 insights，它还给我一堵零组成的墙：历史任务从来没有被打上 `completed_at`，所以所有依赖它的指标都是空的。这变成了一个任务，而这个任务两天后变成了 v9.1。外层智能体是靠*使用*这座工厂发现这个 bug 的。

到这一步，工厂这个比喻就不再是比喻了。Watchfire 负责制造 - 隔离、执行、合并、记账 - 任何会说 MCP 的东西都可以站到订单柜台前。

## 压力测试：Neon Fable

为了弄清 v9 是不是真的扛得住，我把它对准了一件刻意不讲理的事：`rpg-fable-test`，一个叫 **Neon Fable** 的浏览器赛博朋克 RPG，几乎完全由 Wildfire 建成，我主要负责写项目的 Definition，然后看着队列一点点烧下去。

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-definition.webp" alt="Wildfire 正在运行，旁边开着 Neon Fable 的项目定义" caption="整套装置：一份描述这款游戏的 Definition（三幕分支剧情、等距渲染器、回合制战斗、义体库存），以及一个把它变成任务的 Wildfire 循环。v1 - 完整可玩的一轮 - 以任务 #1-18 的形式交付。" >}}

v1 队列把这个游戏从 `npm create vite` 一路带到一个成型的闭环：角色创建、三幕分支剧情、带随机种子的回合制战斗、库存与义体强化、多结局、结局图鉴、New Game+。所有像素美术都是*用代码*写的，写成按调色板索引的字符串网格，因为那才是智能体能够迭代的东西。v2 队列 - 一次高精度图形翻新和一套模块化的角色外观系统 - 是 Wildfire 自己生成的。这个项目现在停在**119 个任务，其中 103 个已完成并合并**，测试套件在任务 #40 前后跑过 902 个测试，此后只增不减。

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-wildfire.webp" alt="Wildfire 正在执行一个 Neon Fable 的美术任务" caption="Wildfire 处在「Day-phase neon states - dusk, night, late-night」的执行阶段，正在用 TypeScript 手写自发光色阶。停靠 shell 里的 Vite 开发服务器随着每次改动落地热重载游戏。" >}}

而这就是另一头出来的东西。角色创建器就是 v2 那套外观系统被完整地摆到眼前 - 分层精灵合成、按槽位的目录、实时预览、可锁定的随机。

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-appearance.webp" alt="Neon Fable 角色创建中的外观步骤" caption="任务 #33-53 浓缩在一屏里：分层精灵合成，头发/眼睛/眉毛/嘴/面部细节的目录，颜色通道，一个旋转的实时预览，以及一个尊重逐槽锁定的「surprise me」。每个精灵都是某个 TypeScript 文件里的字符串网格。" >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-plaza.webp" alt="Cinder Row Plaza 的等距玩法" caption="Cinder Row Plaza：64×32 的等距瓦片、会动的霓虹招牌、通过同一套分层系统做出的十几个各不相同的 NPC、一张小地图，以及分支对话 - 每一个像素都是由一个看不见的智能体当作代码写出来的。" >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-combat.webp" alt="Neon Fable 的回合制战斗" caption="战斗：顶部是先攻顺序，移动与行动预算，一条滚动的日志。底下那个带种子的随机数生成器是任务 #6，还是 v1 队列时候的事。" >}}

Neon Fable 不是产品，也不会变成产品。它是一个演示项目，做出来是为了看看把工厂对准一件别扭的事会发生什么。你可以[在浏览器里玩](https://nunocoracao.github.io/neon-fable/)，也可以[读代码](https://github.com/nunocoracao/neon-fable)。作为压力测试，它已经回答了那个问题：它不只是修自己的 bug、写自己的文档 - 给它*像素美术和游戏手感*这种磨人的东西，它照样持续交付。

## 另一半：主要在思考的项目

Neon Fable 是花哨的那个案例，也是会误导人的那个。它让 Watchfire 看起来像一台生成你没写过的代码的机器 - 那是这套工作流里上镜的那一半，也是我最不信任的那一半。

我仪表盘上最新的两个项目恰恰相反。**Anima** 是一款个人智能体产品 - 一人一个持久的智能体 - 而 **FitQuest** 是一个把你所有设备上的指标游戏化的健身追踪器。两者都有真实的野心。两者都还没有产品代码。它们有的是一个 `docs/` 目录、一份决策记录，以及一份第一条规则就是*文档是唯一真相；代码跟随文档，绝不反过来*的项目 Definition。

所以任务长得跟 Neon Fable 的完全不一样：

- *「把楔子磨尖 - 首批用户、核心用例、界面模型（**给建议，不要拍板**）」*
- *「KMP 与 Flutter 之争的证据简报 - **只做调研，不做决定**」*
- *「HUD 配色的对比度与色觉审查」*
- *「把符合 MDR 的文案规则并入品牌语调，并审查 PoC 中每一条用户可见字符串」*

再读一遍那些括号。那是*不要*自主行事的指令 - 把证据摆出来，标出权衡，决定留给我。Anima 的 Definition 把同样的姿态写成了常设规则：标记为锁定的就是已定的，如果某个任务暴露出缺口或矛盾，智能体被要求**停下、把它摆到台面上、修好文档、然后再继续**，而不是自己编一个方向。FitQuest 那份则说，宁可让任务干脆失败 - 带上理由的 `success: false` - 也不要偏离文档铺好的路。

这就把同一套机器变成了更接近一个留有档案的研究助理：工作照样被划定范围、隔离、执行并合并，但落进 diff 的是一份决策简报或一次文档更新，而不是一个功能。到那个时候，Definition 就不是往上下文里塞东西了；它是治理。

两个项目确实都有产物，因为你终归得看看实物：

{{< figure src="/posts/202607-watchfire/img/projects/anima-ori.webp" alt="Anima 的引导界面" caption="Anima 的孵化：一团漂浮的光凝聚成一只生物，然后问六个问题 - 每一个问题要么塑造这个存在，要么成为它的第一段记忆。做成了 docs/explorations/ 下一个自包含的 WebGL 原型，因为设计文档说，原型要在代码存在之前先把事情证明出来。" >}}

{{< figure src="/posts/202607-watchfire/img/projects/fitquest-today.webp" alt="iOS 上 FitQuest 的今日界面" caption="FitQuest 那个用完即丢的 SwiftUI 概念验证 - 真实的 HealthKit 数据、带阶段和连续记录的任务、一条经验条。它明确不是产品：它存在的意义是检验任务机制能否经受真机的考验，而学到的东西会在代码被丢弃之前回流到文档里。" >}}

游戏那边一百零三个已合并的任务；另外两个项目上三十八个小心围起来的任务。同一个守护进程、同样的 worktree、同一个沙箱。差别完全在于 Definition 是怎么写的 - 这才是六个月下来真正的教训，也是我想交给任何刚起步的人的那一条：**工具的上限就是你给它的那份简报，而知道什么时候该告诉它不要做决定，是这门手艺的大部分。**

## 它是怎么走到这一步的

第一个版本甚至不叫 Watchfire。它叫 **FORGE** - 一个 Electron 单窗口，带一个项目选择器、一个任务列表，和一个跑着 Claude Code 的内嵌终端。很粗糙：任务模型单薄、输出乱码、换项目意味着重启应用。但核心想法已经在那儿了 - 把工作排队，看着它执行，别直接碰终端。

{{< figure src="/posts/202607-watchfire/img/history/forge-jan.webp" alt="2026 年 1 月 12 日的 FORGE" caption="1 月 12 日：FORGE。一次一个项目、标签式布局，没有仪表盘、没有指标、没有多智能体。欢迎消息里那个 Claude Code 的像素头像留得比它该留的久。" >}}

到二月初，我用 Go 把仓库从零重写了 - gRPC 而不是 HTTP，YAML 而不是 SQLite，三个二进制而不是一个 Electron 巨石。那就是今天仍在运行的代码库。然后四月来了，版本命名也有了主题：每个大版本都以火为名，而它的节奏会准确告诉你那个月哪里疼。

- **v1.0「Ember」** *(四月初)* - 第一个真正的版本。从 Claude Code 的 `~/.claude/projects/` 发现会话记录，三次崩溃后触发的重启循环保护，针对 `~/Desktop` 项目的 Seatbelt 修复。
- **v2.0「Spark」** *(四月中)* - 可插拔的后端接口。Codex、opencode 和 Gemini CLI 同一天上线，附带按任务覆盖智能体和按会话隔离配置。
- **v3.0「Blaze」** *(四月末)* - Copilot CLI 作为第 5 个后端，外加两周的止血：一个吃掉 Linux 更新的跨文件系统 `EXDEV` bug、任务列表轮转、GUI 更新循环。
- **v4.0「Beacon」** *(第 28 天)* - 从任务执行器转向*运维*工具的转折点。仪表盘重建、任务级指标、Insights、导出、每周摘要、系统通知、带签名校验的 Slack/Discord/webhook 转发、GitHub 自动 PR。
- **v5.0「Flare」** *(第 30 天)* - Slack 与 Discord 的 OAuth 机器人、带限流和幂等的入站 HTTP 服务、GitLab/Bitbucket 的合并对等支持，以及修好 `run-all` 在合并失败时悄悄停住的问题。事实证明，安静的仪表盘是第二糟的仪表盘。
- **v6.0「Phoenix」** *(五月初)* - YAML 原子写入、基于 `flock` 的单例守护进程、Cursor Agent 作为第 6 个后端，以及一个有了真正回滚缓冲的 TUI。
- **v7.0 → v7.4「Forge」** *(五月-六月)* - 是的，就是那个最初的名字，在它所属的东西早已被重写掉之后，被回收成了代号。到处都能重排任务、聊天视口不再往顶部跳、专注聊天模式，还有我最爱的战地故事：某位用户的守护进程日志在无人察觉的情况下长到 **300 GB**，之后日志终于加上了大小上限（[事后复盘](https://watchfire.io/blog/2026-05-29-forge-7-3-the-300gb-log)）。
- **v8.0「Inferno」** *(六月末)* - 每个项目一个系统窗口、一个作为指挥中心的主窗口、Wildfire 的 GUI、Mini Monitor，以及衡量已交付代码而非已关闭任务的代码产出指标。（[发布文章](https://watchfire.io/blog/2026-06-29-inferno-8-0-parallel-workspaces)）
- **v9.0「Firestorm」** *(7 月 26 日)* - 角色反转：一个 18 件工具的 MCP 工厂，仅 stdio，带 `--read-only` 模式和贯穿始终的安全护栏。（[发布文章](https://watchfire.io/blog/2026-07-26-firestorm-9-0-watchfire-as-a-factory)）
- **v9.1** *(7 月 29 日)* - 前面几节提到的 `completed_at` 修复，回填约 580 个历史任务，好让 Insights、导出和摘要全都亮起来。

再看一张截图，然后请回头看开篇那一张：

{{< figure src="/posts/202607-watchfire/img/history/watchfire-april.webp" alt="2026 年 4 月的 Watchfire" caption="4 月 27 日：Go 重写版的 GUI - 认得出来，但没有 Insights、没有舰队 KPI、没有实时预览。30 天挑战的大部分就是这个版本扛下来的。" >}}

这两张之间隔了十四周。同一个工具。

## 接下来

- 新的智能体后端一出现就接进来。`Backend` 接口是唯一的集成点 - 任何会说 shell 并产出会话记录的东西都能加入。
- 更宽的 MCP 表面：更丰富的检查类工具，以及让长期运行的外层智能体去照看整支舰队，而不只是单个项目。
- 更好的 diff 与审查工具。内嵌查看器已经有了；缺的是一个真正 PR 式的「先审后合」界面，给那些需要人眼的任务用。
- 团队工作流。基于文件的任务模型已经经得起 git - 共享任务列表和审查界面是自然的延伸。

## 试试看

{{< github repo="watchfire-io/watchfire" >}}

在 macOS 上，安装就是一行：

```bash
brew tap watchfire-io/tap && brew install --cask watchfire-io/tap/watchfire
```

其余的一切：[下载最新版本](https://github.com/watchfire-io/watchfire/releases/latest) · [文档](https://watchfire.io/docs) · [changelog](https://watchfire.io/changelog) · [博客](https://watchfire.io/blog)

如果你正在同时应付不止一个 AI 智能体，并且发现自己在终端之间来回 alt-tab，它也许就是你缺的那一块。对我来说是的。

*六个月、九次发布，以及一个最终开始构建自己的工具。这是那种到了一天结束你仍然得交付点什么的「vibe coding」。*
