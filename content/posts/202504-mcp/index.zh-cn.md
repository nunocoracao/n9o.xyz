---
title: "MCP服务器：AI代理的USB-C时刻"
summary: "模型上下文协议（MCP）正迅速成为AI代理的通用连接器，实现了一个模块化、安全且快速增长的工具生态系统。这就是为什么它重要——以及它解锁了什么。了解MCP服务器如何重新定义AI应用程序连接工具、系统和数据的方式。"
description: "模型上下文协议（MCP）正迅速成为AI代理的通用连接器，实现了一个模块化、安全且快速增长的工具生态系统。这就是为什么它重要——以及它解锁了什么。"
categories: [技术, 人工智能, 产品]
tags: [AI代理, 开发者工具, 协议]
date: 2025-04-14
draft: false
---

模型上下文协议（MCP）是AI获得通用连接器时发生的事情——想想USB-C——但是是为智能系统准备的。它定义了一个简单的客户端-服务器协议，使AI模型能够通过轻量级、可发现和标准化的接口访问工具、数据源，甚至复杂的工作流程。[^ref-1]

本文概述了MCP是什么、它如何工作、为什么它对AI开发很重要，以及其采用的当前状态——为您提供概念理解和实践背景。

在其核心，MCP（模型上下文协议）定义了一种一致的方式，让AI系统使用标准化协议与外部工具和数据源进行通信。将其视为一种接口规范，将AI代理与它们交互的系统解耦。开发人员不是硬编码每个集成，而是定义一个以已知格式公开功能的服务器，[^ref-4]AI客户端（如Claude、ChatGPT或自定义助手）通过本地或远程流使用JSON-RPC连接。[^ref-4]

该协议围绕客户端-服务器模型：

- **MCP客户端**存在于AI应用程序内部。它处理连接、能力发现和请求路由。
- **MCP服务器**是一个独立程序（通常是微服务或容器）[^ref-3]，以客户端可以理解的格式公开特定功能（"工具"）、数据源（"资源"）和指令模板（"提示"）。

当AI代理需要做某事时——比如查找文件、查询数据库或调用外部服务——它使用客户端向适当的服务器发送结构化请求。该服务器执行逻辑（如查询API或抓取文档），并将结果发送回客户端，客户端将其注入AI的上下文。

这种分离有深远的影响。[^ref-1] [^ref-4]首先，它从AI模型中抽象出外部系统的复杂性。其次，它在AI逻辑和业务逻辑之间引入了一个可重用、可发现的层。第三，它启用了安全功能，如受控访问、身份验证和沙盒——当允许模型在外部系统上行动时，这是至关重要的。但也许最重要的影响是：AI代理的价值直接与它能访问的**上下文**和它能采取的**行动**相关。没有上下文的模型是通用的。没有接口的模型是惰性的。给AI真正实用性的不仅是智能，而是相关性——用有意义的输入进行推理并做出有意义的响应的能力。

MCP服务器将孤立的AI模型转变为连接的、有能力的系统。通过公开结构化上下文（通过资源）、可操作的能力（通过工具）和战略指导（通过提示），它们给AI模型提供了在现实世界应用中真正交付价值所需的基础和可供性。

### 为什么重要

今天大多数AI代理都有同样的致命缺陷：它们没有*做*太多事情。当然，它们可以回答问题或写文本——但当涉及到采取行动（查询数据库、发送电子邮件、预订会议）时，它们需要帮助。今天大多数AI代理像孤立的大脑一样运作——聪明，但断开连接。没有访问及时、与任务相关的信息，没有在世界中行动的能力，它们的实用性是有限的。

MCP改变了这一点。它为AI配备了与外部系统的接口层，使代理能够对实时数据进行推理并采取有意义的行动。这将它们从被动顾问转变为工作流中的活跃参与者。这意味着您的AI不仅推荐任务——它使用您的实际技术栈来安排它、记录它或完成它。

### MCP服务器的解剖

每个服务器公开三个核心元素：

- **工具** — 模型可以调用的函数（如`send_email`、`run_query`）
- **资源** — 模型可以加载到上下文中的只读数据（文件、记录）
- **提示** — 帮助模型有效使用工具的模板或示例

这种结构给AI一个高度模块化、可检查的环境。工具可以被范围化和版本化。资源可以实时更新。提示可以携带领域特定的指令，在模型之间标准化行为。

对于不熟悉技术协议的读者，JSON-RPC是一种轻量级消息格式，请求和响应以JSON结构化。它允许客户端（AI代理）发送诸如"用这些参数调用这个工具"的指令，并收到结构化的结果返回。

![MCP架构图](/posts/202504-mcp/mcparch.webp)

当前的MCP规范使用**JSON-RPC**作为消息格式，通常通过流传输（例如HTTP流、Unix管道或WebSocket）。此外，身份验证和授权流程通过**OAuth 2.1**标准化。

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
sequenceDiagram autonumber
    participant Agent as AI代理（客户端）
    participant Server as MCP服务器
    participant Tool as 外部系统

    Agent->>Server: JSON-RPC调用
    Server->>Tool: API/工具调用
    Tool-->>Server: 响应
    Server-->>Agent: JSON-RPC结果
{{< /mermaid >}}
</div>

由于所有内容都通过可发现的模式公开，即使是新连接的代理也可以立即理解给定MCP服务器提供什么。这支持零配置模型，AI代理可以动态适应新功能。

### 即插即用的互操作性

MCP是开放的，与模型无关。这意味着：

- 一个GitHub MCP服务器可以与Claude、ChatGPT或任何其他代理一起工作。
- 一个开发人员可以构建一次连接器，每个AI模型都可以使用它。
- 团队可以交换或链接工具而没有硬依赖。

这种设计鼓励"一次编写，多次服务"的方法。开发人员可以为Notion编写一次连接器——每个兼容的AI助手立即获得Notion功能的访问权限。它正在将集成转变为基础设施。

### 正在发生什么

自Anthropic于2024年底开源发布以来，MCP迅速在AI行业获得了广泛采用：

- **OpenAI**：2025年3月，OpenAI宣布其产品支持MCP，包括ChatGPT桌面应用和Agents SDK。CEO Sam Altman强调了MCP的流行性。[^ref-6]

- **Microsoft**：与Anthropic合作，Microsoft推出了MCP的C# SDK，简化了与.NET应用程序的集成。[^ref-7]

- **Google Cloud**：在Google Cloud Next 2025上，Google推出了"Agentspace"和"Agent2Agent"（A2A）协议，促进AI代理之间的互操作性。[^ref-8]

- **Azure AI**：Microsoft的Azure AI Agent Service现在支持MCP，使AI代理能够访问各种数据源。[^ref-9]

- **企业采用**：Block、Apollo和Sourcegraph等公司已将MCP集成到其系统中。[^ref-1]

- **开源生态系统**：MCP社区已开发了300多个开源MCP服务器，涵盖与Docker、Gmail、GitHub和PostgreSQL等平台的集成。[^ref-10]

这些采用不仅仅是理论上的。Sourcegraph的开发人员使用MCP让他们的Cody AI助手按需检索索引文档和代码引用。

### 开发者力量行动

作为构建者，您现在可以：
- 通过运行Docker容器为您的代理添加新技能。[^ref-3]
- 用Python、JS或C#编写您自己的MCP服务器——所有主要技术栈都有SDK。
- 在Docker、Kubernetes甚至Cloudflare Workers上远程或本地托管连接器。[^ref-5]

MCP颠倒了集成负担。我们不是在每个工具中构建AI支持，而是构建任何AI都可以访问的工具。这对小团队或独立开发者来说是改变游戏规则的。

MCP不是另一个开发工具——它是可组合AI的**设计模式**。

### 战略影响

- **标准化→生态系统**：就像HTTP创建了网络一样，MCP正在创建一个共享的AI接口层。
- **可组合代理**：一个代理的输出通过MCP资源成为另一个代理的上下文。
- **新类别**：整个产品正在作为"代理中心"或"MCP市场"出现。

越多的工具使用MCP，就越容易将它们链接成复杂的代理工作流。想象一个AI从Salesforce提取销售数据，生成报告，创建幻灯片，并安排会议——所有这些都通过互连的MCP服务器完成。

### 展望未来

当然，实现这个未来需要导航一些关键的技术和组织考虑。与遗留系统的集成通常需要将现有API包装成符合MCP的服务器。安全性也变得至关重要——向AI公开工具和资源需要强大的身份验证和沙盒机制。

这也代表了重塑整个行业的一代机会。从开发者工具到客户支持，从法律自动化到IT运营——MCP为AI原生接口成为常态铺平了道路。

展望更远的未来，这可能是取代传统"应用"概念的东西。用户将不再启动离散的应用程序，而是委托智能代理使用MCP连接的工具动态组装工作流。

### 你会构建什么？

如果你在2025年构建AI工具，不要硬编码——构建一个MCP服务器。MCP赋予你的代理行动、扩展和连接到更广泛生态系统的能力。

📌 查看这些起点：
- [MCP SDK和规范](https://modelcontextprotocol.io)
- [Docker MCP服务器社区仓库](https://github.com/docker/mcp-servers)
- [Ardor Cloud的快速入门指南](https://ardor.cloud/blog/early-adopters-mcp-open-source-implementations)

### 参考文献

[^ref-1]: https://modelcontextprotocol.io
[^ref-2]: https://openai.com/blog/openai-embraces-mcp
[^ref-3]: https://github.com/docker/mcp-servers
[^ref-4]: https://github.com/modelcontextprotocol
[^ref-5]: https://developers.cloudflare.com/workers/tutorials/mcp-servers
[^ref-6]: https://techcrunch.com/2025/03/26/openai-adopts-rival-anthropics-standard-for-connecting-ai-models-to-data/
[^ref-7]: https://visualstudiomagazine.com/articles/2025/04/14/trending-model-context-protocol-for-ai-agents-gets-csharp-sdk.aspx
[^ref-8]: https://www.techradar.com/pro/live/google-cloud-next-2025-all-the-news-and-updates-as-it-happens
[^ref-9]: https://devblogs.microsoft.com/foundry/integrating-azure-ai-agents-mcp/
[^ref-10]: https://ardor.cloud/blog/early-adopters-mcp-open-source-implementations
