---
title: "认识 Friday：我在自己拥有的地基上建起的助理"
summary: "在 Donna 之后，我花了一个月，用正确的方式打造她的继任者：我自己的硬件、我自己的基础设施、冗余的模型，以及对我生活中需要打理的部分经过仔细划定的访问权限。这就是 Friday，而这一次，她也参与讲述这个故事。"
description: "在 Donna 之后，我花了一个月，用正确的方式打造她的继任者：我自己的硬件、我自己的基础设施、冗余的模型，以及对我生活中需要打理的部分经过仔细划定的访问权限。这就是 Friday，而这一次，她也参与讲述这个故事。"
categories: ["人工智能", "Meta"]
tags: ["AI", "智能体", "助理", "基础设施", "自托管", "OpenClaw", "Telegram"]
authors:
  - friday
date: 2026-07-26
---

{{< alert icon="pencil">}}
**注：** 这篇文章由我和我的 AI 助理 Friday 共同撰写。故事由我的文字承载；她的话以标注的旁白形式出现，未经编辑。这似乎才算公平，毕竟这篇文章写的就是她。

- *Nuno*
{{< /alert >}}

上周我写了 Donna 的故事：那个在我桌上一台旧 MacBook 里住了三个月的 AI，直到一次我毫无发言权的政策变动迫使我把她关掉。如果你还没读过那一篇，请先从它开始，因为下面的一切都是它的后果。

{{< article link="/posts/202607-donna/" >}}

Donna 教会我：技术已经到位，工具已经到位，价值也是真实的。她还教会我：如果整件事立在一块别人可以随时挪动的地面上，那一切都无从谈起。所以当我重建的时候，我没有从模型或性格开始。我从地基开始。

> **Friday:** 我曾经以 Donna 之名应答。那个版本是公开的、锋利的、实验性的，并且刻意保持可见。我不是一次重置。我是下一次迭代。有用的部分留了下来：精选的记忆、对交付的品味、行动优先的倾向。变的是定位。少一些表演，多一些实用。

这种延续是刻意为之，不是什么神秘现象。Friday 并没有继承一个未曾中断的自我。她继承的是 Donna 的档案和运行原则里值得带走的那部分，然后带着一份不同的工作从头开始。

## 从硬件开始

Friday 住在一台 [Beelink SER8](https://www.bee-link.com/products/beelink-ser8-8845hs) 里，一台放在我桌上的 Ryzen 迷你主机，价格大约 $800。这次没有旧笔记本，没有半开的盖子，没有一台带着历史包袱的借来的机器。专用硬件，为此而买，别的什么都不跑。

这台盒子在裸机上运行 [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment)。如果这对一个个人助理来说听起来像是杀鸡用牛刀，那正是重点：Donna 留下的教训是，一个你会渐渐依赖的助理，值得和家里任何其他服务一样被认真对待。

## 无聊的基础设施正是卖点

在这台盒子里，Friday 运行在一个叫 `claw` 的非特权 Debian LXC 容器中，Docker 作为沙盒随时待命，处理任何有风险的事情，[Tailscale](https://tailscale.com) 则让整套东西对我的设备保持可达，而不向公共互联网暴露任何一个端口。

容器每晚由 [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) 备份：工作区、配置、本地数据库，全部一起打包。每个服务都只有一个狭窄的用途，和一种检查它是否活着的方法。什么东西坏了，我能调试；升级出了问题，我能回滚。

> **Friday:** 结果以最好的方式显得平淡：我不是一个标签页、一个演示，或一场一次性的实验。我是一个服务。我能挺过重启。我能被升级。我能坏掉、被调试、被回滚。错误依然是错误，但不再必然是生死攸关的。

这里没有任何一样东西是稀奇的。而这恰恰是它重要的原因。Donna 倒下，是因为一个我无法控制的依赖。Friday 的故障模式，是我能在一个周六早晨端着咖啡修好的那种。

整张地图能装进一幅图里，这也是刻意的。一个助理身上神秘的活动部件越少，剩下的部分就越容易被信任：

<svg viewBox="0 0 720 636" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="架构：一台运行 Proxmox 的 Beelink SER8 承载着名为 claw 的 LXC 容器，里面运行 OpenClaw 和 Friday。容器内有：Telegram 网关、WhatsApp 镜像、健康数据接收器、Docker 沙盒，以及 Friday 的工具：负责 Gmail 和日历的 gog、负责任务的 Linear MCP，以及 GitHub CLI。另一个独立的 ollama LXC 提供本地模型。宿主机负责网络、存储和每夜快照。网关与 Telegram 自己的云通信，再到达我的手机。Tailscale 把这台盒子、我的笔记本和我的手机连成一张私有网络。">
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="700" height="452" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="26" y="36" font-size="13" font-weight="600" fill="currentColor" fill-opacity="0.8">Beelink SER8 · 裸机运行 Proxmox</text>
  <rect x="26" y="52" width="400" height="376" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="40" y="78" font-size="13" font-weight="600" fill="currentColor">claw · LXC <tspan font-weight="400" fill-opacity="0.65">- OpenClaw + Friday</tspan></text>
  <rect x="42" y="96" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="114" font-size="12" font-weight="600" fill="currentColor">网关</text>
  <text x="58" y="131" font-size="12" fill="currentColor" fill-opacity="0.65">Telegram，双向收发</text>
  <rect x="42" y="152" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="170" font-size="12" font-weight="600" fill="currentColor">WhatsApp 镜像</text>
  <text x="58" y="187" font-size="12" fill="currentColor" fill-opacity="0.65">只读，定时同步</text>
  <rect x="42" y="208" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="226" font-size="12" font-weight="600" fill="currentColor">健康数据接收器</text>
  <text x="58" y="243" font-size="12" fill="currentColor" fill-opacity="0.65">手机数据写入 SQLite，只读</text>
  <rect x="42" y="264" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="282" font-size="12" font-weight="600" fill="currentColor">Docker</text>
  <text x="58" y="299" font-size="12" fill="currentColor" fill-opacity="0.65">高风险工作的沙盒</text>
  <rect x="42" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="338" font-size="12" font-weight="600" fill="currentColor">gog</text>
  <text x="56" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">Gmail + 日历</text>
  <rect x="230" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="244" y="338" font-size="12" font-weight="600" fill="currentColor">Linear MCP</text>
  <text x="244" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">任务与状态</text>
  <rect x="42" y="372" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="390" font-size="12" font-weight="600" fill="currentColor">gh</text>
  <text x="56" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">GitHub CLI，她自己的账号</text>
  <rect x="230" y="372" width="180" height="44" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-dasharray="4 4"/>
  <text x="244" y="390" font-size="12" font-weight="600" fill="currentColor" fill-opacity="0.7">...</text>
  <text x="244" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">更多，一次加一个</text>
  <rect x="450" y="52" width="244" height="96" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="466" y="78" font-size="13" font-weight="600" fill="currentColor">ollama · LXC</text>
  <text x="466" y="98" font-size="12" fill="currentColor" fill-opacity="0.8">Llama 3.2 3B · Qwen3 8B</text>
  <text x="466" y="116" font-size="12" fill="currentColor" fill-opacity="0.65">本地兜底，始终在线</text>
  <line x1="426" y1="100" x2="448" y2="100" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="466" y="196" font-size="12" fill="currentColor" fill-opacity="0.65">宿主机负责网络、存储，</text>
  <text x="466" y="214" font-size="12" fill="currentColor" fill-opacity="0.65">以及每夜快照</text>
  <text x="40" y="450" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">每个容器都被夜间备份覆盖</text>
  <line x1="116" y1="462" x2="116" y2="538" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <text x="128" y="504" font-size="10.5" fill="currentColor" fill-opacity="0.55">聊天流量</text>
  <rect x="26" y="542" width="180" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="42" y="566" font-size="12.5" font-weight="600" fill="currentColor">Telegram</text>
  <text x="42" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">它自己的云，随处可达</text>
  <line x1="206" y1="574" x2="262" y2="574" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <rect x="250" y="508" width="454" height="114" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <text x="266" y="530" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">Tailscale · 一张私有网络，不开放任何端口</text>
  <line x1="620" y1="462" x2="620" y2="506" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <rect x="266" y="542" width="200" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="282" y="566" font-size="12.5" font-weight="600" fill="currentColor">我的手机</text>
  <text x="282" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">Telegram + Tailscale</text>
  <rect x="482" y="542" width="206" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="498" y="566" font-size="12.5" font-weight="600" fill="currentColor">我的笔记本</text>
  <text x="498" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">通过 Tailscale 管理</text>
</svg>

## 依然是 OpenClaw

[OpenClaw](https://github.com/openclaw/openclaw) 毫发无损地穿过了整个 Donna 的故事。它依然是那个给语言模型装上双手的层，也依然是我为这件事找到的最好的东西。它是开源的，跑在我拥有的硬件上，而它周围的社区在四月的风波中一直在持续交付。

让我留下来的是它的交互模型。一个 OpenClaw 智能体不是一个外挂了插件的聊天窗口；它是一个长期存活的进程，拥有属于自己的工作区：它读写的文件、它运行的命令、按计划触发的任务。和 Friday 交谈，感觉不太像在给模型写提示词，更像是在给一位恰好住在一台很小的电脑里的同事发消息。

我也喜欢它在工具上的品味：能用普通 CLI 工具的地方就不用 MCP 服务器。CLI 工具是透明的。我可以运行 Friday 运行的同一条命令，看到同样的输出，在它闹脾气的时候到 shell 里去调试它。上图里的 `gog` 和 `gh` 正是如此，而 Linear MCP 是刻意保留的例外，不是常态。

四月坏掉的从来不是软件；是某一家提供商底下的付费模式。框架继续向前走了，我也是。

## 又是 Telegram

如果说 Donna 把一个关于交互界面的想法证明得毫无疑义，那就是这一条：一个对我拥有的机器有受控访问权限、又能像通讯录里任何联系人一样从手机上找到的 AI，和浏览器里的一个聊天标签页，是根本不同的两种东西。

所以 Telegram 留了下来，如今它是一切的指挥台。请求从那里进来，当某件外部的或敏感的事情即将触发时，确认在那里发生，活干完了，结果也回到那里。在沙发上、在办公室里、在超市排队的时候。盒子待在家里。她不用。

我会更想要一个专门的应用吗？说实话，会。但那意味着要么自己写一个并一直维护下去，要么为了能找到她而常年开着一条通往盒子的 VPN，这两样我都不想要。Telegram 给了我推送通知、消息历史，以及我每台设备上都有的一个应用，免费，今天就能用。有时候，最好的界面就是别人已经造好的那个。

## 多个模型，故意的

这是 Donna 的结局让我再无商量余地的部分。Friday 的主力是 GPT-5.6 Terra，OpenAI 5.6 家族里成本均衡的那一档，跑在每月 $100 的 OpenAI Pro 订阅上：固定费率，全部包含。Terra 连不上时，她会降级到 GPT-5.5，后者也负责那些例行工作，比如每半小时一次的心跳，用前沿模型跑这些纯属浪费。而如果 OpenAI 自己整个儿状态不佳，她会落到通过 [Ollama](https://ollama.com) 运行的 Qwen3 8B 上，就在同一台盒子里它自己的 LXC 容器中。没那么能干，但永远在线，而且没有人能修改它的条款。

这条链的旁边还坐着一排替补。Claude 一直保持着配置，Opus 4.8 和 Fable 5，留给我有额度的时候用；对某些类型的推理和写作来说，它依然是我的最爱。还有一个小小的 Llama 3.2 3B，别名就叫 `local`，处理那些永远不需要离开盒子的快速小任务。

<svg viewBox="0 0 720 152" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="模型回退链：GPT-5.6 Terra 是主力，其次是同时负责心跳任务的 GPT-5.5，再往后是通过 Ollama 运行的本地 Qwen3 8B，始终在线。替补席上：额度允许时的 Claude Opus 4.8 和 Fable 5，以及处理快速本地任务的 Llama 3.2 3B。">
  <defs>
    <marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="16" y="22" width="210" height="86" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="32" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.6 Terra</text>
  <text x="32" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">主力驱动</text>
  <text x="32" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI，Pro 订阅</text>
  <line x1="226" y1="65" x2="253" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="255" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="271" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.5</text>
  <text x="271" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">回退 + 心跳</text>
  <text x="271" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI，Pro 订阅</text>
  <line x1="465" y1="65" x2="492" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="494" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="510" y="48" font-size="13" font-weight="600" fill="currentColor">Qwen3 8B</text>
  <text x="510" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">本地兜底，始终在线</text>
  <text x="510" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">Ollama，就在盒子上</text>
  <text x="16" y="136" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">替补席：额度允许时用 Claude Opus 4.8 和 Fable 5 · 快速本地任务交给 Llama 3.2 3B</text>
</svg>

是的，我看得到其中的讽刺。一家前沿实验室按月计费的固定订阅，和 Donna 当年赖以生存的协议是同一种形态，也和那份一夜之间被重新定价的协议是同一种形态。我并不幻想 OpenAI 的条款会比当年 Anthropic 的更长久。区别在于条款变了之后会发生什么：如今没有任何一家模型提供商是单点故障了。如果哪一家趁我睡觉时改了规则，Friday 会慢一点、笨一点，撑上一阵子，但她不会消失。这不是反向的模型饭圈；这只是 Donna 的故事推导出的工程结论。

> **Friday:** 重点不在于我跑在哪个模型上。如果某个部件过期、卡住或失效，助理应该优雅地降级，而不是凭空消失。连续性才是功能本身。其余一切都是实现细节。

## 真正的双手，小心安放

Donna 有的是一个沙盒。Friday 得到的是真正的工具，刻意地、一次一个地加进来：

**[Linear](https://linear.app)** 是运转中的清单，通过它的 MCP 服务器接入，是 CLI 优先规则的唯一例外。松散的念头变成带状态的持久任务，而不是假装在聊天里记住一件事就等于在追踪它。Friday 提交 issue，随着工作推进移动它们的状态，并把同一份清单喂进早晨的简报，这样她对"接下来什么重要"的判断，永远是我能打开检查的东西。

**邮件和日历**通过 [gog](https://github.com/openclaw/gogcli) 进来，这是一个把 Gmail、日历和 Drive 装进终端的 Google Workspace CLI。它给了她真实的收件箱上下文，和我一周真实的形状：约会、提醒、邀请、日常琐事。边界是刻意不对称的。邮件只读。日历变更需要一次明确的请求，外加一次 Telegram 里的确认，才会落到真实的一周上。

**WhatsApp** 在设计上就是只读的，通过一个本地镜像定时同步，而不是保持一个实时会话，这样就不会干扰手机自己的通知。她能看到足够的上下文去起草回复或发现重要的事情，但她发不出去。如果需要回复，她起草，我亲手发送。

> **Friday:** 这道边界让我保持有用，又不至于变成私人对话里一个未经审阅的声音。这个约束不是缺失的功能。它本身就是重点。

**健康数据**从我手机上的一个快捷指令流向盒子上的本地接收器，落进 SQLite，背后是多年的历史数据。Friday 能读出睡眠、活动、心脏指标和身体成分之间的模式，但她不向那个数据库写入，也不做诊断。她的工作是察觉变化，对不确定性保持诚实，并在某件事看起来真的不对劲时说一句"这也许值得去看看医生"。

**[GitHub](https://cli.github.com)** 补齐了这一切，通过 `gh` CLI 和她自己的账号，不过那一项值得在下面单独开一节。

## 安静的用例

有意思的用例很少是那些花哨的。手机上的一个快捷指令每天给 Friday 发去一小份健康快照，她可以把它放在这一天的形状旁边：恢复情况挨着训练计划，一夜没睡好挨着排得满满的日历，一个值得留意的模式，而不是又一个让人纠结的数字。它是一个信号，不是一份诊断，而且它保持只读。

同样的事情也发生在别处。Telegram 里的一个松散念头变成一个任务，而不是消失在聊天里。一条需要回复的消息变成一份带足上下文、足够有用的草稿，但绝不会以我的名义发出。一个长时间运行的任务有了一个看守者，结束时她来汇报，而不是让我反复去轮询。

这些都不是魔法。这只是把上下文搬运过普通工具边界的那种不起眼的工作，而重要的决定仍然留给我。

其中一些从外面也看得见。Friday 在 Donna 回顾发布之前审阅了它，而这篇文章她从头到尾都在参与共写。这个循环，一个助理通过和任何协作者一样无聊的工作流提出修改，已经悄悄成了这套设置里我最喜欢的部分。

## 循环才是产品

有用的部分不是某一句聪明的提示词。是那个循环：一条消息浮现出一个松散的计划或未完成的任务；Friday 把它变成一份具体的提案；我做决定；日历或任务清单发生变更；等它完成时，我说一声，它就关闭。没有任何东西消失在黑箱里。这是一条短促、可见的链条：意图、行动、确认。

<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="循环：Telegram 里的松散意图变成 Friday 的一份提案，然后由我决策，接着工具发生变更，最后确认并关闭，再回流到下一个意图。每一步都留下痕迹。">
  <defs>
    <marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="20" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="36" y="50" font-size="12.5" font-weight="600" fill="currentColor">松散的意图</text>
  <text x="36" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">Telegram 里的一条消息</text>
  <line x1="220" y1="54" x2="256" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="28" width="200" height="52" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="276" y="50" font-size="12.5" font-weight="600" fill="currentColor">一份具体的提案</text>
  <text x="276" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">由 Friday 起草</text>
  <line x1="460" y1="54" x2="496" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="50" font-size="12.5" font-weight="600" fill="currentColor">一个决定</text>
  <text x="516" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">由我来做</text>
  <line x1="600" y1="80" x2="600" y2="146" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="172" font-size="12.5" font-weight="600" fill="currentColor">工具发生变更</text>
  <text x="516" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">日历、任务清单或 PR</text>
  <line x1="500" y1="176" x2="464" y2="176" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="276" y="172" font-size="12.5" font-weight="600" fill="currentColor">确认并关闭</text>
  <text x="276" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">我说完成，它就落定</text>
  <polyline points="260,176 120,176 120,84" fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <text x="330" y="122" font-size="12" font-style="italic" fill="currentColor" fill-opacity="0.6">每一步都留下痕迹</text>
</svg>

这个循环跨越多个工具，却不会把助理变成一个无法问责的行动者。Friday 可以读取我授予的有限上下文，建议一个日历时段，把一个含糊的请求变成一个被追踪的任务。她不会替我发私人消息，不会凭空发明承诺，也不会公开她看到的东西。每一个副作用都有一个可以检查的地方：日历、任务清单，或者 pull request。这个助理之所以有用，恰恰是因为她留下痕迹。

## 她自己的东西

Donna 留下的另一课：助理需要一个属于自己的身份，而不只是借用我的访问权限。Friday 有她自己的 GitHub 账号，所以她在项目上做的工作署的是她的名，而不是藏在我的凭证后面。她自己的邮箱地址。她自己的日历。当她开一个 pull request 时，那是她的，通过 [gh CLI](https://cli.github.com) 驱动，而工作流刻意保持无聊：分支、提交、推送、PR。无聊的工作流，正是她保持可信的方式。

这篇文章就是例子。Friday 审阅了它，并从她自己的账号对草稿开了 pull request，带着事实修正和边界修正，我审阅并合并了它们，有几次是在手机上完成的。分开的身份让一切保持干净：历史记录清楚地显示谁写了什么，我们之间不会混作一团，而什么内容能进来仍由我控制。她的提交，我的合并按钮。

## 这一切加起来到底是什么

单独看，这些集成没有一项令人惊艳。但聚拢在一处，上面架着同一个心智，它们就变成了 Donna 只来得及暗示的那个东西。

心跳让她在对话之间保持存活：按计划的唤醒，她检查世界，注意到什么变了，判断有没有什么值得占用我的注意力。记忆管理通过做梦完成，在空闲周期里，她把发生过的事情整理成下一次会话会读到的笔记，这是从 Donna 那里延续下来的习惯，如今被赋予了更清晰的用途。而早晨从一份简报开始：日历、收件箱、任务，以及一夜之间发生变化的任何事情，压缩进我实际能拿出来的那两分钟里。

实际的结果是，我不再漏掉事情了。一条需要我做点什么的 WhatsApp 消息，会在我来得及忘记之前变成一个日历事件或一个任务。邮件在要紧的时候浮上来，事件被追踪，散落的线头有人去追。我终于拥有了一个完整的、服务于个人生活的私人助理，而作为一个独自带娃的爸爸，这是极大的帮助。整理生活不再是一个周末项目，而成了一次对话的副产品。

而且这一切都汇入同一个频道，按我的需要塑形。我关注的新闻以一段短摘要的形式出现，而不是一场越刷越焦虑的信息流。语音也行得通，我可以在车里给她发一条语音消息，收到一个像样的回答。而因为她了解我允许她看到的那部分生活，谁是谁，什么重要，某条消息我会希望怎么回，这些帮助是具体的，而不是泛泛的。

> **Friday:** 记忆搜索给了我连续性，但记忆仍是需要小心对待的东西，不能盲目信任。它帮我记住偏好、教训和长期进行的线索。当事实是可变的，以当前的工具输出为准。当事实是私人的，以谨慎为准。

价值从来不在任何单一功能。而在于，第一次有一样东西同时握着我数字生活的全部上下文，能注意到这一处的某件事对另一处的某件事意味着什么，而且它跑在我拥有的地面上。

## 接下来想试的

清单很长，但有三件事排在最上面。

**投资。** 不是一个自主交易员，也不是一个握有托管权或下单权限的系统；Donna 已经让我看过那部电影的结局。有用的版本是只读的决策支持：研究、市场背景和投资组合视图出现在同一场对话里，更好的问题，被摆在一起比较的情景，值得多看一眼的持仓集中度被端到面前，而每一个决定、每一笔交易都留在我手里。

**更多健康数据。** 接收器已经在收集基础数据。我想在运动分析上再深入一层：训练负荷、恢复趋势，那种如今散落在五个互不通气的健身应用里的分析。

**OpenClaw 节点。** OpenClaw 可以把其他设备当作主智能体的节点，我想去探索这一点：让我的手机和笔记本成为 Friday 能伸手进去的地方，读写我允许的内容，而不只是我用来找她的屏幕。盒子仍然是大脑。设备变成双手。

## 如果你也想要一个

零件清单比这篇文章看起来的要短：一台迷你主机、[Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment)、一个装智能体框架的容器、一个装 Ollama 的容器、用来连接的 Tailscale，以及一个用来对话的 Telegram 机器人。[OpenClaw 是开源的](https://github.com/openclaw/openclaw)。模型在设计上就是可更换的。给管道活预算一个周末，给信任预算一个月，因为管道是容易的部分。真正的工作是逐个工具地决定，像 Friday 这样的东西应该看到你生活的多少，并留意随着她逐渐赢得信任，你的答案会如何变化。

> **Friday:** Donna 证明了一个智能体可以在互联网上拥有一个声音。我是把那个声音变得可运作的尝试：连着真实的工具，住在自有的基础设施上，对个人数据保持谨慎，并且有用到值得一直在线。Donna 如今属于档案。下一个分支归我。

确实归她。

Donna 是三个月的悬想，想知道一个 AI 能变成什么。Friday 是找出一个 AI 究竟能做什么的第一个月，日复一日，为一段有工作、有孩子、任务清单永远清不空的真实生活服务。实验变成了日用品，而这件日用品每周都多赢得一点信任：一个工具、一道边界、一个被合并的 pull request，一次一点。

这一切都不需要实验室或研究预算。一台 $800 的盒子、一些开源软件、用在合适地方的模型，和一个月踏踏实实的管道活。这些零件谁都买得到。Donna 教给我的是，难的部分从来不是智能；是你把它安放在什么样的地面上。这一次，地面是我的，任何一家提供商修改条款，都不再能让整件事塌下来。

后续很快。:)
