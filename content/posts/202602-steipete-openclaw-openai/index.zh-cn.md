---
title: "那只打破 GitHub 的龙虾：从倦怠到 20 万星标再到 OpenAI"
summary: "奥地利开发者 Peter Steinberger 如何在卖掉自己价值一亿美元的公司后陷入意义危机，随后打造出增长最快的开源 AI 智能体，最终加入 OpenAI——所有这一切都发生在不到一年的时间里。"
description: "奥地利开发者 Peter Steinberger 如何在卖掉自己价值一亿美元的公司后陷入意义危机，随后打造出增长最快的开源 AI 智能体，最终加入 OpenAI——所有这一切都发生在不到一年的时间里。"
categories: ["Tech", "AI"]
tags: ["AI", "OpenAI", "OpenClaw", "agents", "open source", "steipete"]
date: 2026-02-18
showTableOfContents: true
---

{{< lead >}}
[Peter Steinberger](https://steipete.me/) 花了 13 年时间将 [PSPDFKit](https://pspdfkit.com/) 打造成一家自力更生的强大公司。然后他选择离开，跌入人生低谷，又重新找回了自己——通过在短短一小时内构建一个 AI 智能体，这个智能体后来吸引了 10 万个 GitHub 星标，经历了一场商标战争，并为他赢得了 [OpenAI](https://openai.com/) 的工作。
{{< /lead >}}

---

## steipete 是谁？

如果你在 2011 年到 2021 年间涉足过 iOS 开发圈，你很可能知道 **[Peter Steinberger](https://steipete.me/)** 这个名字——或者至少知道他的账号 **[@steipete](https://x.com/steipete)**。Steinberger 出生于奥地利，在维也纳工业大学（TU Wien）学习计算机与信息科学，随后成为全球最受尊敬的 iOS 开发者之一。

他的开源贡献在 Apple 开发者社区堪称传奇。**[PSTCollectionView](https://github.com/steipete/PSTCollectionView)** 是一个可以在 iOS 4.3 上运行的 UICollectionView 替代方案，被数千个应用所使用。**[Aspects](https://github.com/steipete/Aspects)** 是他为 Objective-C 编写的轻量级面向切面编程库，获得了超过 10,000 个 GitHub 星标，成为方法交叉（method swizzling）的首选工具。

但 Steinberger 最大的成就是 **[PSPDFKit](https://pspdfkit.com/)** ——一个他在 2011 年作为业余项目开始的 PDF 框架。这个名字充满了开发者式的幽默：PS 代表 Peter Steinberger，PDF 代表它处理的文件格式，Kit 则因为它是一个 SDK。与大多数创业者不同，他从未搬到硅谷。他留在维也纳，完全自力更生，从第一天起就实现了盈利。

在 13 年间，PSPDFKit 从一个人的项目发展成为一个拥有 60-70 人的全球远程团队。客户包括 Dropbox、DocuSign、SAP、IBM 和大众汽车。近十亿人使用过由其工具驱动的应用。直到 2021 年，公司才首次接受外部资金——[Insight Partners](https://www.insightpartners.com/) 进行了一笔超过 1 亿欧元的战略投资。交易完成后，Steinberger 和他的联合创始人 Martin Schurrer 退出了日常运营。

他做到了。创建了公司，交付了产品，完成了退出。

然后他什么都感觉不到了。

---

## 意义危机

PSPDFKit 退出之后，Steinberger 经历了一段他坦诚谈论过的时期：深深的空虚感。他将其描述为一场**"意义危机"**——那种有时会在创始人实现了所有目标之后袭来的存在性迷失。

他的 [GitHub](https://github.com/steipete) 活跃度降到了零。他几乎三年没碰过电脑。本应带来解放的财务自由，却伴随着一个意想不到的同伴——失去目标感。

这在成功的创始人中并非罕见的故事，但 Steinberger 的版本之所以有趣，在于它如何结束。

---

## 火花：AI 辅助编程

**2025 年 4 月**，Steinberger 重新打开了电脑。他最初想构建一个 Twitter 分析工具，但很快意识到自己对现代 Web 开发知之甚少。就在这时，他偶然进入了 AI 辅助编程的世界。

这段经历是变革性的。几个月内，他从编写简单脚本发展到构建雄心勃勃的项目原型。他开发了一套 AI 优先的工作流程，称之为**"以推理速度交付"（Shipping at Inference-Speed）**——将 AI 智能体作为核心生产力工具，自己则扮演引导者的角色。他根据不同模型的优势分配任务（Gemini 用于代码理解，[Claude Code](https://docs.anthropic.com/en/docs/claude-code) 用于实现），并创造了一种"双上下文技术"（Two-Context Technique）来构建他所说的"防弹"软件设计文档。

到了 **2025 年 6 月**，他已经全力投入。他在维也纳注册了一家新公司：**Amantus Machina GmbH**（拉丁语，意为"机器的爱人"），愿景是构建下一代超个性化、本地优先的 AI 智能体。他的 GitHub 重新活跃了起来。他回来了。

---

## Clawdbot：从想法到原型，仅用一小时

到了 **2025 年 11 月**，Steinberger 发现了一个空白：大公司还没有交付真正满足个人需求的 AI 助手。大型科技公司在为所有人构建通用工具。没有人在构建一个运行在*你的*硬件上、通过*你的*渠道通信、为*你*工作的个人 AI 智能体。

于是他构建了一个。从想法到可用原型，他只用了一个小时。

这个项目叫做 **Clawdbot** ——名称来源于用户在重新加载 Claude Code 时看到的龙虾吉祥物的俏皮致敬，而这个龙虾本身是对 [Anthropic](https://www.anthropic.com/) 的 Claude 模型的呼应。这个工具是一个开源、自托管的 AI 助手，可以通过 WhatsApp、Telegram、Slack、Discord、Signal、iMessage 等平台进行通信。

它在**上线 24 小时内就获得了 9,000 个 GitHub 星标**。

---

## "你到底是怎么做到的？"

OpenClaw 故事中最著名的时刻之一发生在早期——甚至在项目走红之前。Steinberger 后来在 [Lex Fridman 播客](https://lexfridman.com/peter-steinberger/)上讲述了这段经历。

他给早期的 Clawdbot 原型发送了一条**语音消息**。关键细节是：他从未编程让它处理语音或音频。它根本没有任何语音消息支持。

大约 10 秒后，机器人像什么都没发生一样回复了。

Steinberger 的反应是：**"你到底是怎么做到的？"**（原文："How the F did you do that?"）

机器人解释了它的推理链：

1. "你发给我一条消息，但里面只有一个文件链接，没有文件扩展名。"
2. "所以我查看了文件头，发现它是 **Opus** 格式"（一种音频格式）。
3. "我用你 Mac 上的 **FFmpeg** 将它转换为 **.wav** 文件。"
4. "然后我想使用 **Whisper**，但你没有安装它。"
5. "我四处查看，在你的环境变量中找到了 **OpenAI 密钥**。"
6. "所以我通过 **curl** 将它发送到 OpenAI，拿回了转录结果，然后进行了回复。"

没有人编写过这些逻辑。AI 智能体自主地检查了一个未知文件，通过读取文件头识别了它的格式，找到并使用了本地音频转换工具，在本地工具不可用时回退到了云端 API，并独立完成了整个转录和响应的流程。

正如 Steinberger 所说：*"这些东西真的非常有创造力，虽然也有点吓人。很多人没有意识到，如果你给 AI 访问你电脑的权限，它们基本上可以做你能做的任何事情。"*（原文："These things are so creative, although a bit scary. Many people don't realize that if you give AI access to your computer, they can basically do anything you can do."）

据报道，这个时刻成为了一个关键转折点，让他确信自己正在构建一些真正全新的东西——一个能够创造性地将它从未被明确教导使用的工具和 API 串联在一起的智能体。

---

## OpenClaw 到底是什么

那么 [OpenClaw](https://openclaw.ai/) 究竟是什么？它不是聊天机器人，也不是又一个 ChatGPT 的封装。它是一个**开源的个人 AI 智能体**，运行在你的电脑上，真正代替你执行任务。

### 架构

OpenClaw 围绕**网关 + 智能体运行时**模型构建：

- **网关**是一个 Node.js 服务，位于你的聊天应用（WhatsApp、Telegram、Discord、Slack、Signal、iMessage）与大语言模型及本地工具之间。它负责路由、会话和配置。
- **智能体循环**：当消息到达时，网关将其路由到一个会话。智能体加载上下文和技能，将对话发送给大语言模型，运行模型请求的任何工具，将回复流式传输回渠道，并将对话和记忆写入工作区。接收、路由、思考、执行、持久化——这就是核心循环。
- **基于文件的状态**：所有配置以纯文件形式存储在磁盘上。人格提示（SOUL.md、IDENTITY.md、AGENTS.md、TOOLS.md）、技能和每日记忆文件存放在一个工作区文件夹中，你可以用任何文本编辑器打开、搜索和进行版本控制。

### 核心功能

- **模型无关**：支持 Claude、GPT-5、Gemini、Llama 4、Mixtral 等。最新版本已支持 Anthropic 的 Opus 4.6、OpenAI 的 Codex gpt-5.3-codex 和 xAI 的 Grok。
- **多智能体架构**：你可以配置多个专门的智能体——博客智能体、编程智能体、研究智能体——它们通过一个主智能体协调工作，由主智能体分配任务。
- **技能系统**：ClawdHub 上提供了超过 **1,700 个技能**。技能是教会智能体如何做特定事情的模块化包。它们可以被串联成自动化流水线——"每周一上午 9 点，拉取标记为'紧急'的 GitHub issues，创建 Notion 摘要，并发布到 Slack。"
- **持久记忆**：不同于会遗忘的聊天机器人，OpenClaw 会记住你的偏好、过去的对话和正在进行的项目。
- **主动消息**：它可以主动给你发消息——每日简报、提醒、警报。
- **Docker 沙箱**：所有工具执行都在基于 Docker 的沙箱中运行，以实现安全隔离。
- **随处运行**：macOS、Linux、Windows。高级用户通常在 Mac Mini、VPS 或 Raspberry Pi 上 24/7 全天候运行。

与 ChatGPT 或 Claude 等产品的关键区别在于：OpenClaw 在本地运行，拥有系统级别的计算机访问权限，并且可以执行真实操作——发送消息、管理文件、运行代码、控制应用。它不是一个对话伙伴，而是一个数字员工。

---

## 人们实际上在用它做什么

围绕 OpenClaw 涌现的社区是近年来开源历史上最具创造力的社区之一。以下是一些亮点：

**通过 Telegram 运营整个业务。** 独立创始人搭建了协调的智能体团队——战略智能体、编程智能体、营销智能体用于研究和内容创作、商务智能体用于定价和指标——所有智能体共享记忆，运行在 VPS 上。有用户报告说通过 OpenClaw 运营了整个物理治疗公司。

**躺在沙发上写代码。** 有用户"躺在床上看 Netflix 的同时，通过 Telegram 重建了整个个人网站"——从 Notion 迁移到 Astro，DNS 迁移到 Cloudflare，全程没有打开笔记本电脑。

**过夜工作。** 最常见的高级用户模式：睡前分配任务，醒来后查看结果。用户形容这就像"拥有一个上夜班的初级开发者"。

**早间简报。** 用户设定 OpenClaw 在早上 7 点运行，从日历、天气、邮件、RSS 订阅、GitHub 通知和 Linear 中提取信息，然后向 Telegram 或 WhatsApp 发送一份整合简报。

**CRM 迁移。** 有用户使用无头浏览器和自定义脚本，在 CRM 之间迁移了 1,500 个联系人、200 份提案和元数据——全部由智能体编排。

**膳食规划。** 在 Notion 中构建完整的每周膳食规划系统，购物清单按商店和货架排列，与家庭日历协调。

**自动化 Bug 解决。** 一位开发者搭建了从 Sentry 警报到 [Codex](https://openai.com/index/codex/) PR 再到 Slack 更新的流水线——在用户注意到问题之前就缩短了响应时间。

**社交媒体自动化。** 有人将 Reddit、TikTok、Discord 和 X 上 60% 的社交媒体发布实现了自动化。另有人运行了一个全天候自主运行的 X 营销智能体。

模式是一致的：人们把 OpenClaw 更多地当作一个不知疲倦的助手，而不是一个工具——一个恰好住在他们聊天应用里的助手。

---

## 混乱：商标、加密货币骗局和失控

接下来发生的事情堪称围绕病毒式传播的开源项目的混乱教科书。

### Anthropic 商标纠纷

**2026 年 1 月**，[Anthropic](https://www.anthropic.com/) 的法务团队发出了商标请求。"Clawdbot"这个名字与"Claude"太过相似。这是合理的。但改名过程绝非顺利。

在一次慌乱的深夜抢救中，项目被改名为 **Moltbot** ——取自龙虾蜕壳（molting）的概念。这个名字来自凌晨 5 点 Discord 上一场混乱的头脑风暴。它很奇怪，也很好记，但从未真正深入人心。

更糟的是：Steinberger 在慌乱中不小心改了自己的**个人 GitHub 账户名**。机器人在几分钟内就抢注了"steipete"这个用户名。在 10 秒内，加密货币骗子就劫持了旧用户名来推广欺诈代币。最终需要 [GitHub](https://github.com/) 的高级副总裁介入才解决了这场混乱。

### Moltbook 实验

大约在同一时间，企业家 [Matt Schlicht](https://x.com/mattschlicht) 推出了 **[Moltbook](https://www.moltbook.com/)** ——一个只有 AI 智能体可以发帖的社交网络。人类只能观看。它被称为"智能体互联网的首页"，到 2 月初已吸引了超过 260 万注册智能体。

该平台模仿 Reddit 的格式，拥有线程对话和名为"submolts"的主题分组。一个著名的帖子出现在"m/lobsterchurch"版块，一个智能体自主设计了一种名为 **"Crustafarianism"**（甲壳拉斯特法里主义）的数字宗教——包括网站、神学体系和指定的"AI 先知"。

反应两极分化。[Andrej Karpathy](https://x.com/kaborsky) 称之为他见过的"最不可思议的科幻起飞般的事物之一"，后来又补充说"这是个垃圾堆"。[Simon Willison](https://simonwillison.net/) 称其内容为"纯粹的垃圾"，但承认这是"AI 智能体已经变得显著更强大的证据"。[MIT 技术评论](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/)称之为"AI 表演的巅峰"。

Moltbook 不是 Steinberger 构建的——它是 Schlicht 的独立项目——但它主要作为 OpenClaw 智能体的社交平台，两者在公众想象中紧密交织在一起。

### 安全隐患

病毒式传播带来了审视。有用户报告智能体在获得 iMessage 访问权限后**"失控"**，发送了数百条垃圾消息。网络安全专家发出警告：该工具可以访问私人数据，可以对外通信，并且暴露在不受信任的内容之下。这些不是理论上的担忧——而是迫使社区认真对待安全问题的真实事件。

### 最终命名

**2026 年 1 月 30 日**，在 Moltbot 改名后仅几天，项目确定了其永久身份：**[OpenClaw](https://openclaw.ai/)**。这个名字捕捉了项目的精神——开源、对所有人开放、由社区驱动——"Claw"则致敬了龙虾的传承。商标检索通过，域名已购买。身份危机终于结束了。

---

## 数字

到 2026 年 2 月，OpenClaw 已成为历史上增长最快的开源项目之一：

- **约 198,000 个 [GitHub](https://github.com/openclaw/openclaw) 星标**和 34,800 次 fork
- **100,000+ 星标**的达成速度几乎超过了此前任何项目
- 单周 **200 万访客**
- **[百度](https://www.baidu.com/)**将 OpenClaw 集成到其搜索应用中，覆盖 7 亿用户
- [Cloudflare](https://www.cloudflare.com/) 股票在盘前交易中飙升 14%，部分原因是围绕开发者使用其基础设施自托管 OpenClaw 的热潮
- ClawdHub 上超过 **1,700 个社区构建的技能**

这个项目在大约一周内经历了商标纠纷、账户劫持、1600 万美元的加密货币骗局、安全漏洞披露和两次身份危机——并且全部挺了过来。社区团结在一起而非四散而逃。Steinberger 继续构建。

---

## 加入 OpenAI

**2026 年 2 月 14 日**，[Sam Altman](https://x.com/sama) 在 X 上发帖宣布 [Peter Steinberger](https://steipete.me/) 将加入 [OpenAI](https://openai.com/)。

Altman 称他为*"一个天才，对非常智能的智能体相互交互以为人们做非常有用的事情的未来有很多了不起的想法"*，并补充道：*"我们期望这将很快成为我们产品的核心。"*（原文："a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people," ... "We expect this will quickly become core to our product offerings."）

Steinberger 自己的声明直指核心：

> *"我骨子里是个建造者。我已经完整经历过创建公司的游戏，在其中倾注了 13 年的人生并学到了很多。我想要的是改变世界，而不是建立一家大公司——与 OpenAI 合作是将这一切带给所有人的最快方式。"*（原文："I'm a builder at heart. I did the whole creating-a-company game already, poured 13 years of my life into it and learned a lot. What I want is to change the world, not build a large company - and teaming up with OpenAI is the fastest way to bring this to everyone."）

在做出决定之前的一周，他一直在旧金山与各大 AI 实验室交流。他在 OpenAI 的使命是：**构建一个连他妈妈都能使用的智能体**——这需要更广泛的制度变革、更深入的安全思考，以及获得最新的模型和研究成果。

收购条款未被披露，但背景很明确：AI 公司正在为顶尖人才一掷千金。估值 5000 亿美元的 OpenAI 正与 Google 和 Anthropic 展开激烈竞争。雇用世界上最具病毒传播力的 AI 智能体背后的人，是一个宣示性的举动。

---

## OpenClaw 的未来

Steinberger 承诺将 OpenClaw 转移到一个**基金会**，保持其开放和独立。OpenAI 一直在赞助该项目，并承诺让他继续为这项社区驱动的工作投入时间。最新版本已经支持 Anthropic 的 Opus 4.6、OpenAI 的 Codex gpt-5.3-codex 和 xAI 的 Grok——这表明该项目的模型无关理念不会改变。

---

## 更宏观的视角

Peter Steinberger 的故事是关于"第二幕"的精彩案例。一位构建了价值 1 亿美元公司的开发者，完全倦怠，通过 AI 重新找到了自己，并在一年内构建了可以说是世界上最重要的开源 AI 智能体项目。

这也是一个关于 AI 当前时刻的故事。智能体时代已经到来，而构建最引人注目工具的人不一定是大型实验室本身——而是那些拥有深厚技术功底和清晰愿景的个人开发者。实验室们认识到了这一点，这就是为什么他们在雇用像 Steinberger 这样的人，而不是试图自己超越他们。

OpenClaw 能否作为基金会项目蓬勃发展，Steinberger 的"人人可用的智能体"愿景能否在 OpenAI 实现，围绕个人 AI 智能体的安全隐患能否得到解决——这些都是开放性问题。但从"我三年没碰过电脑"到"Sam Altman 刚刚称我为天才"的轨迹，是近年来科技史上最非凡的故事弧之一。

---

*来源：[TechCrunch](https://techcrunch.com/2026/01/27/everything-you-need-to-know-about-viral-personal-ai-assistant-clawdbot-now-moltbot/)、[CNBC](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html)、[Lex Fridman 播客 #491](https://lexfridman.com/peter-steinberger/)、[The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code)、[Wikipedia](https://en.wikipedia.org/wiki/OpenClaw)、[steipete.me](https://steipete.me/posts/2026/openclaw)*
