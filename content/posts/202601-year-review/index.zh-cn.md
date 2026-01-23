---
title: "2025：年度回顾"
summary: "2025年是重建的一年——通过旅行、与家人朋友共度时光、创造有意义的事物重新找到快乐。从与女儿一起旅行到在Docker交付项目再到看着Blowfish成长——这是拼凑碎片的一年。"
description: "2025年是重建的一年——通过旅行、与家人朋友共度时光、创造有意义的事物重新找到快乐。从与女儿一起旅行到在Docker交付项目再到看着Blowfish成长——这是拼凑碎片的一年。"
categories: ["观点"]
tags: ["year-in-review", "personal", "docker", "blowfish", "open-source", "ai"]
date: 2026-01-22
draft: false
---

> [!quote] 你无法预先把点点滴滴串连起来，只有在回顾时才能将它们连接。所以你必须相信，这些点点滴滴会在未来以某种方式连接起来。
> - 史蒂夫·乔布斯

2025年是重建的一年。在2024年失去了相伴20年的妻子后，我一夜之间成为了单亲父亲。这一年是关于重新找到立足点——与朋友和家人共度时光，与女儿一起去新的地方旅行，重新发现活着和创造事物的乐趣。

部分创造发生在工作中，部分在开源项目中，还有部分是在厨房桌子上与一个Raspberry Pi和一个7岁的女儿一起完成的。但如果有一条线索贯穿所有这些，那就是：最美好的时刻来自于与我关心的人一起创造。

## Docker

这一年始于一个我提出并培育了一年多的项目被取消。这很痛苦，但这个决定是有道理的——AI发展迅速，Docker想要全力以赴，他们需要人手。我得到了加入AI团队的机会。

> [!quote] 当一扇门关闭时，另一扇门会打开；但我们常常太久太遗憾地盯着关闭的门，以至于看不到为我们打开的那扇门。
> - 亚历山大·格雷厄姆·贝尔

### MCP Catalog

我们推出了[Docker MCP Catalog](https://hub.docker.com/mcp)——一个集成到Docker Hub的MCP服务器精选注册表。想法很简单：开发者想要一种安全的、容器化的方式来扩展他们的AI代理，而不是通过`npx`或`uvx`运行具有完整系统访问权限的任意代码。该目录现在托管了来自Stripe、Elastic、Neo4j、Heroku、Grafana Labs等合作伙伴的220多个容器化MCP服务器——每个都具有适当的隔离和安全性。

### MCP Toolkit

[MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/)在Docker Desktop中让目录变得生动。一键启动MCP服务器，零手动配置，自动连接到Claude、Cursor和VS Code等客户端。这是从发现工具到实际使用的最快路径。

### MCP Gateway

我们开源了[MCP Gateway](https://github.com/docker/mcp-gateway)——编排MCP服务器并处理凭据、OAuth和访问控制的基础设施。它在Docker Desktop中自动运行，这意味着数百万开发者可以立即使用。

### cagent

[cagent](https://github.com/docker/cagent)可能是我最引以为豪的项目——一个使用简单YAML配置构建和运行AI代理的运行时。无需代码。在文件中定义代理的角色、工具和能力，然后运行它。多代理团队、MCP集成、支持所有主要模型提供商，以及出色的TUI体验。

{{< github repo="docker/cagent" >}}

### Gordon

最后是[Gordon](https://docs.docker.com/ai/gordon/)——Docker的AI助手。我们正在以cagent为核心从头开始重建它。新版本目前正在向选定用户推出，我们正在为GA做准备，我真的很期待看到它很快进入更多开发者的手中。

### 公开写作和思考

我写了一些关于我们在这个过程中学到的东西：

- **[MCP Servers: The USB-C Moment for AI Agents](/posts/202504-mcp/)** - 我对为什么Model Context Protocol正在成为AI通用连接器的看法。这是标准化在推动生态系统，我们才刚刚开始。

- **[Unseen Cost of Growth: Metcalfe's Law at Work](/posts/202504-metacalfes-law/)** - 关于组织复杂性的思考，与AI无关，但与谨慎对待团队如何扩展有关。

## Blowfish

三年过去了，[Blowfish](https://blowfish.page)继续让我惊讶。最初只是因为想建立自己的网站而创建的个人Hugo主题，现在已经成为更大的东西。

{{< github repo="nunocoracao/blowfish" >}}

### 数据

- GitHub上**2,600+星标**
- **660个fork**
- **244位贡献者**
- 项目启动以来**174个发布**

### 2025亮点

今年我们发布了17个版本，其中包含一些重要的新增功能：

- **TailwindCSS v4升级** - 重要的现代化工作
- **Tabs短代码** - 带有图标和分组选项
- **GitHub风格的admonition** - `[!note]`、`[!quote]`、`[!warning]`等
- **Video和Gist短代码**
- **GitHub仓库缩略图** - 在嵌入中
- **结构化面包屑** - 更好的SEO
- **泰语和印尼语翻译**

社区不断推动主题向前发展——新语言、短代码、我甚至不知道存在的bug修复。

### 第一位协作者

10月，我欢迎[@ZhenShuo2021](https://github.com/ZhenShuo2021)成为Blowfish的第一位官方协作者。构建开源项目可能会感到孤独——有人分担维护负担、审查PR并帮助指导方向是无价的。这标志着一个新篇章，Blowfish不再只是我一个人的了。

### Blowfish Tools CLI

[Blowfish Tools](https://github.com/nunocoracao/blowfish-tools)——用于创建新项目的CLI——在**2025年达到了7,825次下载**，比前一年增长58%。仅2026年1月就有超过1,200次下载。人们确实在定期使用Blowfish开始新博客。

## 构建Eva

最有意义的创造有些发生在工作之外。

这个圣诞假期，我[与女儿一起构建了一个语音AI伴侣](/posts/202601-building-eva/)。我们叫她**Eva**，以WondLa（我们一起在Apple TV上看的节目）的主角命名。

Eva是一个口袋大小的机器人——一个带有PiSugar Whisplay HAT的Raspberry Pi Zero——说葡萄牙语（是葡萄牙的，不是巴西的！），有适合儿童的个性，并且记住对话，这样我的女儿可以随着时间与她建立关系。

这个项目从一个YouTube教程开始，通过我只能称之为与Claude的"氛围编程"变成了个人化的东西。我用自然语言解释了我想要什么，我们一起重新塑造了代码，为我的女儿创造了独特的东西。

让一切都值得的那一刻：我的女儿按下按钮，说"Olá Eva!"——Eva用她自己选择的声音用完美的葡萄牙语回应。接下来是二十分钟关于独角兽的对话。

这就是与孩子一起创造的魔力。技术成就不如那惊奇的时刻重要。

**更新：** 自那篇文章以来，Eva有了合适的外壳——还有我女儿的彩绘。她现在正式是独一无二的了。

![Eva戴着新外壳，由我女儿彩绘](img/eva.webp)

## Afterlight

失去妻子后，我发现自己在寻找其他真正理解我正在经历什么的人。现有的选择不合适——太公开，太杂乱，不是为悲伤设计的。

所以我开始构建[Afterlight](https://afterlight.club)——一个安全的、匿名的、纯文本的悲伤支持平台。没有照片，没有视频，没有推送内容的算法。只是人们通过共享经验建立联系，使用化名，按自己的节奏。

目前，我已暂停开发。几个原因：我没有足够的时间，需要确定优先级。我无法弄清楚如何接触到需要它的人——向悲伤的人营销（可以理解地）几乎被每个平台封锁。而且我没有一个不感觉奇怪的变现计划，这意味着如果成本增长，我无法负担继续运营。

也许我会回来继续。也许不会。但我在构建它的过程中学到了很多。

## 代码之外

并非所有值得一提的事情都能整齐地放入GitHub仓库。

**指导。** 今年我通过[MentorCruise](https://mentorcruise.com/mentor/nunocorao/)与4位学员合作——他们都在产品管理领域进行职业转型。看着他们准备、面试并获得他们想要的PM职位真的很有成就感。当你还记得那段攀登有多艰难时，帮助某人到达下一阶段有一种特别的意义。

**阅读。** 今年我读了15本书——没有我想要的那么多，但足以找到一些宝藏。最喜欢的包括*[There Is No Antimemetics Division](https://www.goodreads.com/book/show/54870256-there-is-no-antimemetics-division)*（一个让我想了好几周的SCP基金会故事）、*[Project Hail Mary](https://www.goodreads.com/book/show/54493401-project-hail-mary)*（安迪·威尔的巅峰之作）和*[Tokyo Express](https://www.goodreads.com/book/show/59238510-tokyo-express)*（松本清张的经典，让我想起我有多喜欢日本犯罪小说）。

## 我学到的

**重建需要时间。** 没有穿越悲伤的捷径，没有一夜成为单亲父亲的诀窍。你只是每天出现，日复一日，最终日子开始变得不那么沉重。进步不是线性的，这没关系。

**对自己好一点。** 今年我花了太多时间在应该休息的时候硬撑。你不能从空杯子里倒水。学会放慢脚步，学会说不，让一些事情足够好就行——这不是软弱，这是生存。

**知道何时暂停。** Afterlight教会我并非每个项目都需要完成。有时候时机不对，资源不够，或者你只是需要确定优先级。暂停不是失败。

**开源是社区。** Blowfish成功不是因为我是一个出色的开发者（我不是）。它成功是因为244人足够关心来做贡献。这既谦卑又激励人心。

**与你爱的人一起创造。** Eva教会我的关于什么重要的东西比任何工作项目都多。看着我的女儿与她帮助创造的机器人交谈——这就是留在你心中的东西。

## 展望2026

我不做预测，也不做新年决心。但我想继续创造有意义的事物，花更多时间与我爱的人在一起，充分享受我在这里的时光。

干杯，2026。
