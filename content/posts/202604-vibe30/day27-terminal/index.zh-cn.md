---
title: "30 Days of Vibe Coding - Day 27 - Terminal"
description: "用Tauri 2和Rust构建的原生终端模拟器，支持标签页、分割面板、可配置主题和智能功能。"
summary: "用Tauri 2和Rust构建的原生终端模拟器，支持标签页、分割面板、可配置主题和智能功能。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-27", "rust", "tauri", "terminal"]
series: ["30 Days of Vibe Coding"]
series_order: 27
seriesOpened: false
date: 2026-05-02
draft: false
#type: "hidden"
---

第27天。还剩4天。是时候不再保守了。

这个挑战的最后阶段，我想挑战那些一天之内大概率搞不定的东西。终端模拟器就是这样的项目。不是一个假装自己是终端的网页小玩具，而是一个真正的原生桌面应用——能启动真实的shell会话，以60fps渲染，处理从vim到htop的一切。

## 提示词

> "用Tauri 2和Rust构建一个终端模拟器"

这是核心需求。其他的都是在迭代过程中产生的。

{{< alert icon="fire">}}
从[最新发布版本](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest)下载
{{< /alert >}}

## 怎么构建的

这是个大工程。[Watchfire](https://watchfire.io)把工作分解成了19个任务，每一个都不可少。构建终端模拟器并不简单。PTY管理、shell集成、输入处理、渲染性能，还有十几个我从没想过的问题。

任务清单大概是这样的：

1. 搭建带基本PTY支持的Tauri 2 + Vite项目
2. 支持打开、关闭和重命名的多标签页
3. 水平和垂直分割面板
4. 带主题、字体和shell配置的设置面板
5. UI打磨、滚动回看和shell修复
6. 用于自动发布的GitHub Actions
7. 内联AI命令建议
8. 透明度、模糊和窗口外观的视觉优化
9. 终端输出中的可点击链接和智能检测
10. Shell配置文件和快捷操作
11. 带确认对话框的危险命令警告
12. 长时间运行命令的通知
13. 带丰富Ctrl+R覆盖层的模糊历史搜索
14. 从历史文件中提取的内联幽灵建议
15. 带快速修复操作的智能错误检测
16. 自然语言到命令的转换
17. 命令解释和AI输出摘要
18. 带可折叠区块的基于块的输出分组
19. 智能功能设置面板和集成测试

然后是CI/CD的修复。让Tauri通过GitHub Actions在macOS、Linux和Windows上构建和签名，本身就是一场冒险。还有三个平台的安装脚本。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成果

![展示多个功能的Terminal](images/screenshot-01.png)

**这是一个真正的终端。** 不是模拟的。它使用Rust的portable-pty crate来启动真实的shell会话。bash、zsh、fish，你配置了什么就用什么。完整的PTY支持意味着一切都能用：vim、htop、交互式提示，全部搞定。

![运行htop的多标签页](images/screenshot-11.png)

**带WebGL加速的xterm.js。** 渲染很快。是那种能明显感知到的快。滚动回看支持10,000行，不会卡顿。WebGL渲染器相比标准的canvas方式确实有质的提升。

**标签页和分割面板。** Cmd+T新建标签页，Cmd+D垂直分割，Cmd+Shift+D水平分割。可以重命名标签页。面板管理的体验和你对现代终端的预期完全一致。

![运行Claude Code的分割面板](images/screenshot-12.png)

**内置智能功能引导。** 第一次打开应用时，会通过引导教程带你了解各种智能功能。

![智能功能引导](images/screenshot-02.png)

这些智能功能包括来自命令历史的幽灵建议、Ctrl+R模糊历史搜索、针对`rm -rf`或`git push --force`等操作的危险命令警告，以及自然语言到命令的转换。

![幽灵建议](images/screenshot-03.png)

![模糊历史搜索](images/screenshot-04.png)

![危险命令警告](images/screenshot-05.png)

![自然语言和AI功能](images/screenshot-06.png)

**完整的设置面板。** 字体系列、字体大小、光标样式、颜色主题。内置Dracula、Solarized、Monokai等主题。可以配置背景模糊、透明度和shell参数。

![设置面板](images/screenshot-14.png)

**滚动回看中的命令搜索。** Ctrl+F打开搜索覆盖层，支持模糊匹配搜索终端历史记录。

![搜索覆盖层](images/screenshot-13.png)

**基于块的输出分组。** 长命令输出会被分组为可折叠的块。当一个命令吐出2,000行输出而你只想知道要点时，还有一个"总结输出"按钮。

![输出摘要](images/screenshot-07.png)

**能跑pico。** 能跑vim。终端该跑的都能跑，因为它就是一个终端。

![在Terminal中运行的pico文本编辑器](images/screenshot-08.png)

**甚至能跑Docker的AI助手。** 完整的交互式TUI应用都能正常运行。

![在Terminal中运行的Docker AI助手](images/screenshot-09.png)

![Docker AI助手展开视图](images/screenshot-10.png)

**Claude Code也能在里面跑。** 我用这个终端运行Claude Code来给终端本身构建更多功能。这感觉像是一种非常特别的盗梦空间。

![在Terminal中运行Claude Code，可以看到Watchfire任务列表](images/screenshot-12.png)

## 安装方法

这是一个原生应用，不是网站。没有Vercel部署。你可以从GitHub发布页面获取最新版本，或者使用安装脚本：

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.sh | bash
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.ps1 | iex
```

想从源码构建也行：

```bash
git clone https://github.com/nunocoracao/Vibe30-day27-terminal.git
cd Vibe30-day27-terminal
npm install
npm run tauri dev
```

需要Rust 1.77.2+和Node.js 20+。

{{< github repo="nunocoracao/Vibe30-day27-terminal" showThumbnail=true >}}

## 数据一览

- **19个Watchfire任务** 从项目搭建到智能功能集成
- **Tauri 2 + Rust后端** 用portable-pty实现真实shell会话
- **带WebGL的xterm.js** 高速渲染
- **6+种颜色主题** 包括Dracula、Solarized和Monokai
- **CI/CD流水线** GitHub Actions构建macOS、Linux和Windows版本
- **安装脚本** 覆盖全部三个平台

## 第27天总结

终端模拟器涉及太多层面。Rust中的PTY管理。通过Tauri在Rust后端和JavaScript前端之间的IPC通信。为性能而用的WebGL渲染。通过CI/CD实现的跨平台构建和代码签名。检测操作系统和架构的安装脚本。

在这一切之上，还加入了智能功能。幽灵建议、模糊搜索、危险命令警告、AI集成。这些不是花架子。测试过程中我不小心输入了一个破坏性命令时，危险命令警告确实帮到了我。

这东西能跑起来本身就很厉害。它能好到让我用它运行Claude Code来构建自身更多的功能，这就是另一个层次的事了。我不会明天就用它替换iTerm，但"vibe coding出来的终端"和"生产级终端"之间的差距，比我预想的要小。

30天中的第27天。还剩3天。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第27天。跟随我用AI辅助编程在30天内交付30个项目的挑战。*
