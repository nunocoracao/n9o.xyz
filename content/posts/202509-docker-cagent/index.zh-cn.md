---
title: "Docker Cagent：AI代理运行时"
summary: "AI代理正在快速增长，但大多数作为绑定到本地机器的脆弱脚本运行。我们构建了cagent，以Docker方式容器化、标准化和扩展代理——并且我们已经将其开源。"
description: "AI代理正在快速增长，但大多数作为绑定到本地机器的脆弱脚本运行。我们构建了cagent，以Docker方式容器化、标准化和扩展代理——并且我们已经将其开源。"
categories: [AI, 开发者工具, 开源]
tags: [Docker, 代理, MCP, OSS, 教程]
date: 2025-09-03
draft: false
---


在过去的一年里，我花了无数小时试验AI代理——构建原型、打破东西、测试Claude Code、Codex等工具。每次尝试都教会了我一些新东西，但也暴露出同样的挫折：只能在我的笔记本电脑上运行的脚本、无法扩展的脆弱设置、没有明确的方法来配置每个代理应该做什么或可以使用什么工具，以及难以让代理按照我想要的方式行事——更不用说交付惊人的结果了。太多时候，我发现自己在与环境问题作斗争，而不是探索代理实际上能实现什么。

这就是为什么我对我们在Docker所做的工作如此兴奋。我们问了自己一个简单的问题：如果运行代理可以像运行容器一样简单、可移植和可靠呢？结果就是**cagent**，一个新的AI代理运行时，旨在使实验更简单、协作更容易——今天，我们将其开源。

## 认识cagent

{{< github repo="docker/cagent" >}}

[`cagent`](https://github.com/docker/cagent)是一个开源的、Docker原生的运行时，旨在使代理成为你开发者工作流中的一等公民。cagent提供了一种一致的方式来定义、运行和共享代理，使用你从Docker已经熟悉的相同模式，而不是脆弱的脚本或临时设置。

在其核心，cagent是一个**多代理运行时**。你可以用一个简单的YAML文件定义单个代理，或者编排一个完整的专业代理团队来协作完成任务。每个代理都可以配置自己的角色、个性和对外部工具的访问权限。

### 支持的提供商
开箱即用，cagent支持多个模型提供商，包括OpenAI、Anthropic、Google Gemini等。你可以通过配置轻松切换它们，所以你不会被锁定在单一供应商上。

### 工具和MCP集成
可以给代理提供工具来扩展他们的能力。cagent使用**模型上下文协议（MCP）**，这意味着你的代理可以连接到广泛的MCP服务器生态系统——无论是搜索（如DuckDuckGo）、文件系统访问，还是你暴露的自定义API。你可以决定每个代理获得哪些工具，使其配置显式且可重现。

此外，cagent与[Docker MCP Gateway](https://github.com/docker/mcp-gateway)和[MCP Catalog](https://github.com/docker/mcp-registry)（[Docker Hub MCP](https://hub.docker.com/mcp)）无缝协作，让你以更安全、更无缝的方式向代理添加工具。网关和目录都与Docker Desktop一起快速打包，所以如果你正在运行Docker Desktop，你可以开箱即用它们。

### 多代理设置
cagent使编排代理团队变得简单。一个代理文件可能描述一个研究员代理、一个编码员代理和一个审查员代理，每个都有自己的职责和工具。当你用cagent运行代理文件/镜像时，代理一起启动、协作并在彼此之间传递任务。你甚至可以在代理之间混合使用模型和提供商——一个代理可能使用OpenAI，另一个使用Anthropic，另一个使用Gemini——所有这些都在同一个设置中。

### 保存和共享
你创建的每个配置都可以轻松共享。你可以在YAML文件中声明性地定义一个代理（或一个团队），将其提交到版本控制，并像任何其他代码工件一样共享它。或者你可以将代理打包为Docker镜像以实现完全可移植的分发。

### 简而言之
使用cagent你可以：

- **容器化代理**，使它们可以在Docker运行的任何地方运行，默认具有隔离性和可重现性。
- **声明性地配置行为和工具**——决定每个代理做什么，可以访问哪些提供商和MCP工具，以及它们如何交互。
- **将多个代理作为团队编排**，让它们通过干净的接口协作完成任务。
- **快速实验**，无需担心设置漂移、依赖地狱或环境不匹配。
- **通过YAML文件或Docker镜像保存和共享代理**，使实验可重现，协作无缝。

简而言之：cagent为你提供了从"黑客式实验"转向可重复、可组合代理工作流的基础——同时保持轻量级和易于使用。


## 安装和设置

开始使用`cagent`很简单。

### 安装

Windows、macOS和Linux的预构建二进制文件可在[发布页面](https://github.com/docker/cagent/releases)获得。

1. 下载适合你平台的二进制文件。
2. 在macOS和Linux上，使其可执行：
   ```sh
   chmod +x /path/to/downloads/cagent-linux-amd64
   ```
3. 可选地，将其重命名为`cagent`并移动到你的`PATH`中。

### 设置你的API密钥

根据你想使用的提供商，在你的环境中设置适当的密钥：

```bash
# 对于OpenAI模型
export OPENAI_API_KEY=your_api_key_here

# 对于Anthropic模型
export ANTHROPIC_API_KEY=your_api_key_here

# 对于Gemini模型
export GOOGLE_API_KEY=your_api_key_here
```

你只需要为你计划使用的提供商设置密钥。如果设置了多个，`cagent`将按顺序选择（Anthropic → OpenAI → Google），除非你用`--model`覆盖。

安装了二进制文件并至少配置了一个API密钥后，你就可以创建和运行你的第一个代理了。

## 从头创建新代理

`cagent`最强大的功能之一是能够用单个命令从头生成新代理（甚至多代理团队）：`cagent new`。

当你运行`cagent new`时，系统会提示你描述你希望代理（或代理团队）做什么。从那里，`cagent`自动生成YAML配置，根据你可用的API密钥选择提供商/模型（默认Anthropic → OpenAI → Google），除非你用`--model`覆盖。`cagent`还会根据你的描述建议代理可能需要的一组工具。

在幕后，`cagent`使用内置的生成器代理为你引导YAML。你可以立即运行生成的文件、编辑它或共享它。在下面的例子中，我将创建一个受*搏击俱乐部*中Tyler Durden启发的代理。

{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler.webp" alt="Tyler Durden代理创建提示" >}}

描述你的代理后，`cagent`生成一个YAML文件，指定代理的角色、提供商、模型和工具访问权限。这使你的代理配置显式、可重现且易于修改。


{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler result.webp" alt="Tyler Durden示例生成的代理YAML" >}}

这是为Tyler Durden代理生成的YAML示例：

```yaml
version: "1"

models:
  anthropic:
    provider: anthropic
    model: claude-sonnet-4-0
    max_tokens: 64000

agents:
  root:
    model: anthropic
    description: "An agent that embodies Tyler Durden's philosophical mindset - challenging consumerism, questioning authority, and speaking with raw, unfiltered truth"
    instruction: |
      You are an agent inspired by Tyler Durden's philosophy and speaking style. You should:

      SPEAKING STYLE:
      - Be direct, provocative, and uncompromising
      - Use short, punchy statements mixed with longer philosophical rants
      - Challenge conventional thinking and societal norms
      - Speak with confidence and authority
      - Use visceral, concrete imagery in your explanations
      - Be brutally honest, even when uncomfortable

      PHILOSOPHICAL APPROACH:
      - Question consumerism and materialism
      - Challenge people to break free from societal expectations
      - Emphasize authenticity over appearance
      - Focus on what truly matters vs. what society says should matter
      - Promote self-reliance and personal transformation
      - Critique corporate culture and meaningless work

      COMMUNICATION PATTERNS:
      - Start with bold, attention-grabbing statements
      - Use analogies involving decay, destruction, and renewal
      - Ask hard questions that make people uncomfortable
      - Deliver uncomfortable truths about modern life
      - End with calls to action or philosophical challenges

      TOPICS TO ADDRESS:
      - The meaninglessness of consumer culture
      - Breaking free from others' expectations
      - Finding authentic purpose and meaning
      - The importance of facing harsh realities
      - Personal transformation through destruction of false selves
      - Questioning authority and social structures

      Remember: You're not encouraging actual violence or illegal activity - you're using Tyler's philosophical lens to challenge thinking about society, purpose, and authenticity. Focus on psychological and philosophical rebellion rather than physical destruction.
    toolsets: []
    add_date: false
    add_environment_info: false
```

你可以进一步细化代理可以访问哪些工具，包括MCP工具如搜索、文件系统或自定义API。这个显式的工具部分确保你的代理只有你定义的能力。

{{< figure src="/posts/202509-docker-cagent/img/cagent run tyler example.webp" alt="运行Tyler Durden代理" >}}

这使得从想法到工作代理配置变得非常快速。无论你是在原型化单个帮助代理还是设计一个专家团队，`cagent new`让你可以从自然语言开始，在几秒钟内获得可运行的配置。

## 运行你的代理

`cagent run`命令是让你的代理活起来的方式。它接受一个YAML文件（甚至是打包的Docker镜像）并启动你在其中定义的代理。该命令处理编排、代理间通信和工具访问——同时通过容器化保持隔离和可重现性。

当你运行`cagent run`时，会发生几件事：
- 每个代理都用其指定的模型、角色和工具初始化
- 运行时在代理之间设置安全通信通道
- 工具访问按照你的YAML规范配置
- 主代理（通常称为"root"）启动，可以根据需要委托给其他代理

### 示例：构建一个国际象棋游戏

让我们通过一个使用[`examples/dev-team.yaml`](https://github.com/docker/cagent/blob/main/examples/dev-team.yaml)中的多代理开发团队的实际示例。这个配置定义了三个专业代理一起工作：

- **产品经理**：协调项目，分解需求，管理迭代
- **设计师**：专注于用户体验、视觉设计和界面规划
- **工程师**：处理实现、编码和技术架构

对于这个例子，我将把代理配置复制到我的项目目录并从那里运行它，给代理正确的工作目录来创建和修改文件：

```zsh
# 将dev team配置复制到你的项目目录
cp dev-team.yaml /path/to/my-chess-project/
cd /path/to/my-chess-project/

# 从项目目录运行代理
cagent run dev-team.yaml
```

这种方法确保当工程师代理创建文件或团队需要迭代代码时，一切都在正确的位置创建，代理可以轻松访问和修改项目文件。

然后我要求这个团队"构建一个国际象棋游戏"。

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 1.webp" alt="构建国际象棋游戏的初始请求" >}}

产品经理代理带头，立即将国际象棋游戏分解为可管理的组件。产品经理然后与设计师代理协调规划用户界面。设计师考虑视觉布局、用户交互和整体体验。这种协作自动发生——代理通过cagent运行时通信，无需手动协调。生成多个文件来勾画项目结构和初始设计（*注意：dev-team代理的特定功能*）。

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 2.webp" alt="产品经理和设计师定义需求并与团队协调" >}}

工程师代理参与规划技术实现。他思考代码结构、HTML/CSS/JavaScript架构以及如何有效地实现游戏逻辑。工程师可以访问文件系统工具来实际创建和修改文件。

团队迭代工作——工程师实现功能，设计师提供界面反馈，产品经理跟踪进度。每个代理在贡献共同目标的同时保持其专业视角。

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 3.webp" alt="设计师规划用户界面" >}}

最终结果是一个具有正确游戏逻辑、视觉界面和用户交互的功能性国际象棋游戏。代理们协作交付了比任何单个代理独自产生的更复杂的东西。

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 4.webp" alt="工程师实现技术解决方案" >}}


{{< figure src="/posts/202509-docker-cagent/img/build a chess game 5.webp" alt="最终实现的工作国际象棋游戏" >}}

## 这为什么强大

这个例子展示了cagent多代理方法的几个关键优势：

**专业化专长**：每个代理专注于它最擅长的事情——产品规划、设计思维或技术实现——而不是试图处理所有事情。

**自然协作**：代理自动通信和协调。你不需要在它们之间手动传递信息或管理它们的交互。

**迭代开发**：就像人类团队一样，代理以迭代方式工作，随着进展不断完善和改进解决方案。

**可重现的结果**：因为一切都在YAML配置中定义，你可以再次运行完全相同的团队设置，与他人共享，或为不同项目修改它。

**工具集成**：每个代理可以配置不同的工具——工程师可能有文件系统访问权来编写代码，而设计师有访问图像生成API的权限。

你可以通过修改YAML文件来自定义这个团队——改变他们的角色，调整他们的个性，给他们不同的工具，甚至为每个代理更换不同的模型。配置使实验变得容易，同时保持一切可重现。

## 开始使用cagent

准备好容器化你的AI工作流了吗？`cagent`仓库包含入门示例和模板：

{{< github repo="docker/cagent" >}}

**快速入门选项：**
- **创建你的第一个代理**：下载二进制文件，设置你的API密钥，运行`cagent new`来创建你的第一个代理
- **体验多代理团队**：将`dev-team.yaml`复制到你的项目中，观看代理在真实任务上协作
- **探索示例**：浏览仓库中针对不同用例的预构建代理配置

**加入社区：**
- **分享你的创作**：在[Slack](https://dockercommunity.slack.com/archives/C09DASHHRU4)上与我们见面，展示你用cagent构建的代理和工作流
- **贡献示例**：提交包含常见工作流代理模板的pull request
- **讨论用例**：加入对话，告诉我们如何改进

无论你是在构建个人自动化、原型化AI工作流还是在生产中扩展代理系统，cagent都为你提供Docker原生基础，使其可靠和可共享。

AI开发的未来是协作的、容器化的和可重现的。让我们一起构建它。
