---
title: "Linux 基金会出手管 AI 代币经济学，只是没有大模型厂商"
summary: "Linux 基金会本周成立 Tokenomics Foundation，要为 AI 成本与 ROI 的衡量方式立标准。二十九家创始成员，没有一家在定代币价格。这是发布的内容、缺席的人，以及一个供应方从未签字的度量标准所带来的张力。"
description: "Linux 基金会本周成立 Tokenomics Foundation，要为 AI 成本与 ROI 的衡量方式立标准。二十九家创始成员，没有一家在定代币价格。这是发布的内容、缺席的人，以及一个供应方从未签字的度量标准所带来的张力。"
categories: ["AI", "技术", "观点"]
tags: ["AI", "代币", "finops", "标准", "经济"]
date: 2026-08-05
draft: false
---

上一次有人对我说"代币经济学"，我正坐在一位加密货币创始人对面，听他解释公司怎么给开发者发薪。我问了一个自认为很简单的问题，大意是：钱落到某个人账户的那天，谁知道它值多少？回答是"那是因为你不懂代币经济学。"这句话什么都没说，同时又把对话终结了。

所以当这个词本周出现在 Linux 基金会一个新组织的名字里时，我在读完后半句之前先愣了一下。代币不是同一种。但问题是同一个：账单到的那天，你怎么知道它值多少。

这个问题，同样还没人给出好答案。

> [!info] TL;DR
> - Linux 基金会于 8 月 4 日成立 **Tokenomics Foundation**，一个衡量 AI 成本与 ROI 的厂商中立标准组织。
> - 二十九家创始成员：银行、系统集成商、企业软件，以及十来家 FinOps 工具厂商。
> - **没有一家前沿实验室在内。** 没有 OpenAI，没有 Anthropic，没有 Google，没有 Microsoft，没有 AWS，没有 NVIDIA。
> - Google Cloud、Microsoft、Salesforce 和 KPMG 都在 6 月表态支持，却没进 8 月的名单。
> - 最接近的成功先例 FOCUS，是在超大规模云厂商加入之后才跑通的。这个条件在这里并不成立。

## 发布了什么

8 月 4 日，[Linux 基金会](https://www.linuxfoundation.org/)[成立了](https://www.linuxfoundation.org/press/linux-foundation-launches-the-tokenomics-foundation-to-define-the-economics-and-roi-of-ai-value) [Tokenomics Foundation](https://www.tokeneconomics.com/)，一个面向 AI 经济的标准组织。负责人是 [J.R. Storment](https://www.linkedin.com/in/jrstorment)，也就是隔壁 [FinOps Foundation](https://www.finops.org/) 的负责人。理事会已于 7 月 30 日召开，技术指导委员会也在筹备中，两家组织将共用 [FOCUS](https://focus.finops.org/) 计费规范和一套会议日程。

初期路线图具体到足以评判：

- 一份关于代币经济学与 AI 价值指标的**定义**文档
- 一个为工作负载路由划分代币复杂度的 **Big-T 框架**
- 并入 FOCUS v1.5 及后续版本的**代币成本遥测**
- 一套衡量每次调用实际工作量的**服务成本**方法论
- 将支出与业务结果挂钩的 **AI Value Frameworks**
- 培训与认证，外加 9 月在阿姆斯特丹举办的一场会议

承诺在年底前每月发布。它指出的问题是真实的，所有人都认：AI 已经是技术预算里增长最快的一项，却没有一种共同的方式来说明一个代币值多少钱。

## 谁在场

创始名单共二十九家：Accenture、BNY、Broadcom、Calero、Cast.ai、DoiT、Finout、Flexera、GoDaddy、Greenpixie、Hitachi、IBM、JPMorganChase、Kion、Lenovo、Nebius、North Cloud、Oracle、Pay-i、Pointfive、Revenium、SAP、ServiceNow、SHI、Stacklet、Vantage、WWT、XOsphere、Yarken。

这份名单可分为三类。大规模采购 AI 的企业（[JPMorganChase](https://www.jpmorganchase.com/)、[BNY](https://www.bny.com/)、[GoDaddy](https://www.godaddy.com/)、[Lenovo](https://www.lenovo.com/)、[Hitachi](https://www.hitachi.com/)）。系统集成商与代理商（[Accenture](https://www.accenture.com/)、[WWT](https://www.wwt.com/)、[SHI](https://www.shi.com/)）。以及十来家成本管理厂商（[Kion](https://kion.io/)、[Yarken](https://www.yarken.com/)、[Flexera](https://www.flexera.com/) 等）。

它们没有一家在定代币价格。

两处缺席。第一处是前沿实验室：[OpenAI](https://openai.com/) 和 [Anthropic](https://www.anthropic.com/) 不是成员，[Google](https://cloud.google.com/)、[Microsoft](https://www.microsoft.com/)、[AWS](https://aws.amazon.com/)、[NVIDIA](https://www.nvidia.com/)、[Mistral](https://mistral.ai/) 和 [Cohere](https://cohere.com/) 也都不是。没有任何一家为前沿模型定价的机构是成员。

第二处受到的关注少一些。Linux 基金会在 6 月 3 日[宣布筹建意向](https://www.linuxfoundation.org/press/linux-foundation-announces-the-intent-to-launch-the-tokenomics-foundation-to-establish-open-standards-for-ai-cost-management)时，点名了十二家"表达初步支持"的机构：Accenture、[Booking.com](https://www.booking.com/)、Flexera、Google Cloud、[IBM](https://www.ibm.com/)、JPMorganChase、[KPMG](https://kpmg.com/)、Microsoft、[Oracle](https://www.oracle.com/)、[Salesforce](https://www.salesforce.com/)、[SAP](https://www.sap.com/) 和 [ServiceNow](https://www.servicenow.com/)。把它和 8 月的名单比一比。Google Cloud、Microsoft、Salesforce、KPMG 和 Booking.com 都不见了。两个月的公开支持，没有转化成创始会员资格。

媒体的描述并不一致。[CIO Dive](https://www.ciodive.com/news/foundation-tackle-ai-token-cost-management/822839/) 写道，此次成立汇集了"企业、超大规模云厂商和前沿模型开发者"，但公布的名单并不支持这一说法。[The New Stack](https://thenewstack.io/tokenomics-foundation/) 的标题则说，AI 成本危机终于有了看门狗，"只是不包括造成它的那些公司"。

## 实验室做了什么

没有任何一家前沿实验室公开评论此次成立。我没有找到 OpenAI、Anthropic、Google 或 Microsoft 的任何声明，无论支持还是反对。

作为对照：2025 年 12 月，Linux 基金会成立了 [Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)。那一个由 Anthropic、OpenAI 和 [Block](https://block.xyz/) 共同创立，Google、AWS、Microsoft 和 [Cloudflare](https://www.cloudflare.com/) 提供支持。Anthropic 捐出了 [MCP](https://modelcontextprotocol.io/)，[OpenAI 捐出了 AGENTS.md](https://openai.com/index/agentic-ai-foundation/)。同一个召集方，早八个月，全员参与。

在同一时间段内，两家都推出了自家的成本管控。OpenAI 于 6 月 18 日为 ChatGPT Enterprise 增加了支出管控和每月额度上限。Anthropic 为 Claude Enterprise 推出了管理控制，包含模型级权限、支出告警和一套 Admin API。两者都给了客户真实的可见性。两者都活在各自厂商的控制台里，产出的数字无法跨厂商比较。

## 这种事成功过吗

度量标准确实能约束供应方，但从历史看，只在以下三个条件之一成立时才行。

**供应方自愿加入**，因为可比性有助于它竞争。[SPEC](https://www.spec.org/) 和 [TPC](https://www.tpc.org/) 都成立于 1988 年，SPEC 出自一个包括 HP、Sun 和 MIPS 的工作站厂商联盟，TPC 则为衡量事务处理而设。两者都立住了，因为市场上没有支配性玩家，而每一家厂商都想要一块自己能赢的计分板。

[FOCUS](https://focus.finops.org/) 也是这么成的。[FinOps Foundation](https://www.finops.org/about/) 2019 年成立，2020 年并入 Linux 基金会。FOCUS 于 2023 年发布，[2024 年 6 月发布 1.0](https://www.finops.org/insights/focus-1-0-available/)，AWS、Azure、Google Cloud 和 Oracle Cloud 在同一天全部上线了原生的 FOCUS 计费导出。从建立基金会到规范落地花了五年，而它能成，是因为卖方在场。2023 年时 AWS 甚至还不是 FinOps 的赞助方。

**监管机构强制推行。** 油耗标签、营养成分表、电话号码携转。没有人在监管代币计费。

**买方集中了足够的支出，把它变成采购条件。** 2017 年 1 月，宝洁的 Marc Pritchard 在 IAB [放话](https://www.adexchanger.com/advertiser/pritchards-progress-pg-marketing-chief-impact-digital-ultimatums/)，Google 和 Facebook 必须在年底前接受 [MRC](https://mediaratingcouncil.org/) 认证的第三方核验，否则就撤走预算。两家都同意接受审计。Facebook 随后先审计了已投放曝光，在可见曝光上则拖了相当久。

两次走向相反的尝试。2009 年 3 月的 [Open Cloud Manifesto](https://www.theregister.com/2009/03/30/open_cloud_manifesto_in_out/) 有三十六家签署方，IBM 居于中心，而 Amazon、Google、Microsoft 和 Salesforce 全都拒绝签字。此事无疾而终。SNIA 的 [CDMI](https://www.snia.org/cdmi) 成了云存储的 ISO 标准，S3 还是成了事实标准，CDMI 后来反过来加上了对 S3 的兼容。

所以最接近的成功先例，正是这家基金会所效仿的那一个，而它满足了此次成立目前并不满足的条件。

## 三处张力

**买方一侧可以标准化，卖方一侧不行。** 分摊、打标、单位经济、服务成本、ROI 定义：这些都能在不向任何实验室提要求的情况下标准化，而且构成了日常价值的大部分。无法单方面标准化的是可比性。分词器是各家私有且互不相同的，所以同一条提示在不同厂商处得到的代币数并不相同。定价在设计上就是多档的：把 [Anthropic](https://docs.claude.com/en/docs/about-claude/pricing) 和 [OpenAI](https://platform.openai.com/docs/pricing) 公布的费率对照着看，你会得到输入、缓存输入、按 TTL 采用不同倍率的缓存写入、输出，以及按输出计费的隐藏推理代币，而且两边对这些档位的定义并不一样。一套 schema 可以忠实记录这一切，却依然不能让你比较两张账单。

**标准可能已经存在。** [OpenTelemetry 的 GenAI 语义约定](https://opentelemetry.io/blog/2026/genai-observability/)自 2024 年起就带着 `gen_ai.usage.input_tokens` 等字段，FOCUS 也已经在向代币支出扩展。FinOps 从业者 [Dvir Mizrahi](https://www.linkedin.com/pulse/lets-talk-tokenomics-foundation-dvir-mizrahi-uauzf) 直接提出了这一点，追问一个 FOCUS 工作组为什么需要自己的基金会、理事会和会议巡回，并断言其动机"不是技术性的，是商业性的"。这值得和成员中有多少家在卖成本工具放在一起掂量。

**杠杆的方向反了。** 广告业的类比很诱人，但经济结构是反过来的。Facebook 和 Google 需要广告主的钱，而且库存有余。实验室受供给约束，最大的收入来源是消费者订阅和编程席位，而不是这些成员手里的企业 API 合同。按多数估算，Anthropic 和 OpenAI 合计占企业 LLM API 支出的近六成。当队伍本来就排满时，扣住预算是很弱的威胁。

而在这三者之下，计量单位本身可能就是错的。[Uber](https://www.uber.com/) 用大约五千名工程师在 4 月之前烧完了 2026 全年的 AI 预算，随后[把每名员工的额度限制在每月 1500 美元](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/)。它并没有算不清代币。它算得很清楚。它把工程师放进了 Claude Code 使用量排行榜，这是激励问题，不是度量问题。关于这笔支出是否连接到了客户能感知的东西，Uber 首席运营官 Andrew Macdonald 的说法是：["那条连接还不存在。"](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/) 与此同时，过去一年单位代币价格下降了约八成，总支出却在上升。这就是[杰文斯悖论](https://zh.wikipedia.org/wiki/杰文斯悖论)，任何遥测 schema 都碰不到它。

## 未决问题

1. 一个供应方无视的度量标准会改变任何行为吗，还是主要催生一个认证市场？
2. 考虑到实验室受供给约束，是否存在某个买方联盟，其集中的支出足以把合规变成采购条件？
3. 如果 OTel 和 FOCUS 已经承载了 schema，一个独立的基金会除了治理和一场会议之外还增加了什么？
4. 加入究竟意味着实验室要让渡什么？按代币可比会利好同等质量下最便宜的一方，而那是个移动靶。拒绝是策略，还是只是还没人开口问？
5. 我们是不是在标准化错误的分母？每代币成本可度量，且基本已解决。每决策价值两者皆非，而那才是 Uber 真正需要的数字。

## 我在关注什么

三个指标，都能在年底前被证伪。9 月阿姆斯特丹会议之前是否有前沿实验室加入。FOCUS v1.5 的代币 schema 是否按承诺的月度节奏发布。以及 Google Cloud 和 Microsoft 会不会把 6 月表态的支持变成实际会员资格，还是说 6 月那份名单就是最高点。

我希望这件事能成。企业确实答不上来自己的 AI 支出买到了什么，这该有人解决。我只是认为，最终出来的版本会描述你的支出，而不是约束你的供应商，这是两种非常不同的产品。
