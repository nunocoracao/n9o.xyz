---
title: "30 Days of Vibe Coding - Day 28 - ideA"
description: "用Wails、Go、React和Monaco Editor打造的原生桌面代码编辑器。"
summary: "用Wails、Go、React和Monaco Editor打造的原生桌面代码编辑器。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-28", "go", "wails", "react", "monaco", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 28
seriesOpened: false
date: 2026-05-03
draft: false
#type: "hidden"
---

第28天。还剩3天。昨天做了个终端模拟器。今天呢？代码编辑器。

不是Web应用。不是在浏览器标签页里跑的东西。是一个安装到你电脑上的原生桌面应用。那种团队要花好几年才能搞出来的东西。

## 提示词

{{< alert icon="fire">}}
从[最新发布](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest)下载
{{< /alert >}}

> "用Wails v2搭配Go后端和React前端加Monaco Editor，构建一个原生桌面代码编辑器。文件树侧边栏、标签页、语法高亮。支持macOS、Linux和Windows的多平台构建。"

## 怎么做的

这个项目是个大家伙。[Watchfire](https://watchfire.io)把工作拆成了43个任务，这是整个挑战中任务数量最多的一次。而且其中很多都是CI修复，因为给三个平台构建原生桌面应用这事儿……真不简单。

技术栈是Wails v2做原生包装，Go处理后端文件系统操作，React做UI，Monaco Editor（就是驱动VS Code的那个编辑器引擎）做实际的代码编辑。Go后端处理所有文件I/O——读取目录、打开文件、保存更改——然后通过Wails绑定把这些暴露为React前端可以调用的函数。

CI流水线才是真正痛苦的地方。Linux上的WebKit依赖、需要精确设置的构建标签、Wails绑定生成、跨平台打包。我都数不清有多少个"修复CI"的提交了。git日志里全是。但这就是发布原生应用的现实。代码在你自己的机器上跑得完美无缺，在GitHub Actions运行器上照样能翻车翻得惊天动地。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成果

![欢迎界面](images/screenshot-01.png)

**一个像样的欢迎界面。** 打开文件夹和文件的快捷操作、最近项目列表、键盘快捷键参考。看起来就像一个真正的IDE欢迎页。

![打开项目后的文件树](images/screenshot-02.png)

**能用的文件树。** 打开一个文件夹，侧边栏就会显示完整的目录树，有展开/折叠、文件图标，一应俱全。底部还有一个小地图，显示文件结构的鸟瞰视图。

![带语法高亮的代码编辑](images/screenshot-03.png)

**Monaco Editor大显身手。** 完整的语法高亮、行号、右侧的小地图。编辑体验和VS Code一模一样，因为它确实就是同一个编辑器组件。JavaScript、Go、TypeScript、JSON，打开什么都有正确的高亮。

![命令面板](images/screenshot-04.png)

**命令面板。** 每个现代编辑器都有的那种模糊搜索浮层。搜索命令、跳转到文件。好用。

![集成终端](images/screenshot-05.png)

**集成终端。** 编辑器底部有个终端面板。运行构建、查看git status，不用离开应用就能搞定一切。

![文件搜索](images/screenshot-07.png)

**带模糊匹配的文件搜索。** 快速打开浮层，在项目文件之间跳转。敲几个字符就能过滤出来。

## CI大战

这部分值得单独拿出来说，因为它占了构建的大部分时间。让Wails在GitHub Actions上同时为macOS、Linux和Windows正确编译和打包，是一场跨越多次提交的战斗。一些亮点：

- Linux上的WebKit依赖需要特定的包（`libgtk-3-dev`、`libwebkit2gtk-4.0-dev`）
- 每个平台的构建标签都要设置正确
- 构建之前需要先生成Wails绑定
- 发布工作流需要为macOS生成`.app`包、为Linux生成tarball、为Windows生成`.exe`
- 反复修复、测试、再修复

最终的结果是一个GitHub Actions工作流，当你推送标签时自动为三个平台构建并发布。能用。只是花了不少时间才搞定。

## 安装方法

这是个原生应用，所以这次没有Vercel链接。你要安装到自己的机器上。

**快速安装（macOS和Linux）：**

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day28-idea/main/install.sh | bash
```

或者从[发布页面](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest)下载二进制文件：

| 平台 | 架构 | 下载 |
|----------|-------------|----------|
| macOS | Intel (x86_64) | [VibEdit-macos-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-amd64.zip) |
| macOS | Apple Silicon (arm64) | [VibEdit-macos-arm64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-arm64.zip) |
| Linux | x86_64 | [VibEdit-linux-amd64.tar.gz](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-linux-amd64.tar.gz) |
| Windows | x86_64 | [VibEdit-windows-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-windows-amd64.zip) |

**从源码构建**（需要Go 1.23+、Node.js 20+、Wails CLI v2）：

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
git clone https://github.com/nunocoracao/Vibe30-day28-idea.git
cd Vibe30-day28-idea
cd frontend && npm install && cd ..
wails build
```

## 试试看

{{< github repo="nunocoracao/Vibe30-day28-idea" showThumbnail=true >}}

## 数据一览

- **43个Watchfire任务** 从搭建到最终CI修复
- **3个目标平台**（macOS、Linux、Windows）
- **Wails v2 + Go**后端搭配React + Monaco Editor前端
- **GitHub Actions**发布工作流实现自动化多平台构建

## Day 28总结

编辑器本身做得还挺快的。Monaco Editor承担了大量繁重工作，Wails让Go和React之间的桥接出奇地干净。难的是代码之外的一切：让CI为三个操作系统构建原生应用、处理平台特定的依赖、为每个目标正确打包。

这能取代VS Code吗？显然不能。但这是一个能用的原生代码编辑器，有文件树、标签页、语法高亮、命令面板、集成终端和多平台发布。一天做完的。VS Code背后的Monaco Editor可以作为React组件使用，这意味着你能免费获得真正的编辑体验。剩下的就是管道工程，而这恰恰是AI擅长的活儿。

43个任务确实不少。这个挑战中大多数天的任务数在15到25之间。但带CI流水线的原生桌面应用是另一回事。每个平台都有自己的怪癖，每个构建系统都有自己的脾气，而且谁也不服谁。还剩2天。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第28天。关注我用AI辅助编程在30天内发布30个项目的全过程。*
