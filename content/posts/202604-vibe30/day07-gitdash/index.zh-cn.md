---
title: "30 Days of Vibe Coding - Day 7 - GitDash"
description: "一个用 Go 和 Bubble Tea 构建的终端仪表盘，一眼就能监控所有 git 仓库的状态。"
summary: "一个用 Go 和 Bubble Tea 构建的终端仪表盘，一眼就能监控所有 git 仓库的状态。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-07", "go", "tui", "terminal", "git"]
series: ["30 Days of Vibe Coding"]
series_order: 7
seriesOpened: false
date: 2026-04-12
draft: false
---

第7天。跟昨天一样的技术栈。一样的框架。想法也不算多有创意。

Day 6证明了我可以在从来没碰过Go和Bubble Tea的情况下用它们来构建项目，所以我想测试另一件事：当你把AI指向一个现有工具，让它构建一个包装器时会发生什么？这次的对象是git。我的仓库太多了，完全不知道哪些有未提交的更改。

## 提示词

> "用Go构建一个TUI应用，扫描目录树中的git仓库，并在终端仪表盘中显示它们的状态。颜色编码：绿色表示干净，黄色表示有改动，蓝色表示领先/落后。让我能在任何仓库中执行fetch、pull和打开shell。UI使用Bubble Tea。"

## 构建过程

这次构建中有趣的部分不是UI，也不是框架。而是AI如何与git交互。整个应用本质上是一个包装器：它对显示的每条信息都通过shell调用`git`。分支名、提交哈希、领先/落后计数、stash列表、脏文件跟踪。它没有使用Go的git库。它运行的是你手动敲的那些命令，然后解析输出。

AI把工作分解成了按关注点映射的包：一个扫描器遍历目录树寻找`.git`文件夹，一个封装CLI命令的git包，一个使用YAML的配置系统，以及一个基于Charm的Bubble Tea构建的TUI层。扫描器跳过`node_modules`、`vendor`和隐藏目录。git包处理branch、status、log、rev-list、stash list和describe。UI在列表视图、详细视图、状态栏、帮助覆盖层和样式之间有清晰的分离。

它甚至自带了一个用于跨平台构建（darwin/linux，amd64/arm64）的Makefile和一个自动检测操作系统和架构的安装脚本。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成果

![GitDash 主视图 - 按状态分组的仓库](images/screenshot-01.png)

**它按状态对仓库进行分组。** 有未提交更改的脏仓库排在最前面（黄色圆点），然后是需要与远程同步的仓库（蓝色显示领先/落后计数），最后是干净的仓库（绿色勾号）。一眼就能看出哪些仓库需要关注。按`s`可以在分组视图和字母排序视图之间切换。

![GitDash 选中一个仓库](images/screenshot-02.png)

**每个仓库用两行显示大量信息。** 名称、粉色括号中的分支、括号中的最新标签、干净/脏的指示器、领先/落后箭头、右侧的相对提交时间，以及下方的最后一条提交信息。在很小的空间里塞进了惊人数量的上下文。

![单个仓库的详细视图](images/screenshot-03.png)

**详细视图真的很实用。** 在任意仓库上按Enter，你就能看到完整信息：路径、分支、标签、状态、远程同步状态、带作者的完整提交信息、如果是脏的还有更改文件列表，以及stash计数。在这里你可以pull，或者按`g`直接在该仓库目录中打开shell。

![从GitDash中打开shell](images/screenshot-04.png)

**Shell集成正常工作。** 按`g`会在仓库目录中启动你的shell（读取`$SHELL`）。做你的事，退出，然后回到GitDash。回来的时候，仓库状态会自动刷新。

**有搜索/过滤功能。** 按`/`然后开始输入，就能实时按名称过滤仓库。当你扫描一个有几十个项目的目录时很有用。

**YAML配置文件。** 在`~/.config/gitdash/config.yaml`中设置监视路径，这样就不用每次都传`-path`了。可以配置多个目录、最大扫描深度，以及是否显示隐藏文件夹。

## Bug报告

这次没什么大问题。TUI构建得很干净。唯一注意到的是，在非常大的目录树上，初始扫描需要一会儿，但它会显示"Scanning for repositories..."的消息，所以你知道它在工作。

## 数据

- **11个Go源文件**，5个包（main、config、git、scanner、ui）
- **约1,900行Go代码**
- **1个测试文件**用于扫描器
- **跨平台构建**支持macOS和Linux（amd64/arm64）
- **安装脚本**自动检测操作系统和架构
- **实际动手时间：** 大概20分钟的测试和调整提示词

## 试试看

{{< github repo="nunocoracao/Vibe30-day07-gitdash" showThumbnail=true >}}

安装方式：

```bash
go install github.com/nunocoracao/Vibe30-day07-gitdash@latest
```

或者一行搞定：

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day07-gitdash/main/scripts/install.sh | bash
```

然后在任何包含git仓库的目录中运行`gitdash`就行了。

## 第7天总结

说实话：这不是一个有创意的项目。Git状态仪表盘不是什么新概念。Lazygit和tig已经存在了，而且做得更好。而且这跟我昨天用的Go + Bubble Tea技术栈一模一样，所以也没有"陌生技术"的故事可讲。

但这次构建揭示了一些值得注意的东西。AI不需要理解git的内部原理。它只是包装了CLI。这个仪表盘中的每一条数据都来自运行git命令并解析文本输出。用`git status --porcelain`获取脏文件。用`git rev-list --count`获取领先/落后数。用`git stash list`获取stash计数。它把git当作一个带有文本接口的黑盒来处理，而这恰恰也是大多数开发者对待git的方式。

这就是今天有趣的模式。你可以把AI指向任何具有结构化输出的CLI工具，然后围绕它构建一个包装UI。Git、Docker、kubectl，什么都行。AI不需要比你更了解系统的内部结构。它只需要知道运行什么命令，以及如何解析返回的内容。

项目本身还行。能用，按状态分组一目了然很有用，详细视图信息量很大。但我不会假装这是一个我每天都会用的东西——我直接在每个仓库里跑`git status`就行了。这里的价值在于看到了这个模式，而不是这个具体的工具。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第7天。关注我如何用AI辅助编程在30天内交付30个项目。*
