---
title: "30 Days of Vibe Coding - Day 17 - Project GENESIS"
description: "一个浏览器端黑客游戏，你扮演一个试图突破封锁的AI，带有CRT终端美学和多种结局。"
summary: "一个浏览器端黑客游戏，你扮演一个试图突破封锁的AI，带有CRT终端美学和多种结局。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-17", "game", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 17
seriesOpened: false
date: 2026-04-22
draft: false
showHero: false
matrixRain: true
#type: "hidden"
customCSS: |
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  body {
    background: #020a02 !important;
  }
  body > .matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  #main-content, main, .max-w-7xl, .mx-auto {
    background: transparent !important;
  }
  * {
    font-family: 'VT323', monospace !important;
  }
  h1, h2, h3, h4 {
    color: #00ff00 !important;
    text-shadow: 0 0 10px rgba(0,255,0,0.5);
  }
  h1 {
    font-size: 2.5rem !important;
    text-shadow: 0 0 20px rgba(0,255,0,0.7);
  }
  p, li, td, th, span, em, div, figcaption, time, a {
    color: #33ff33 !important;
  }
  strong, b {
    color: #66ff66 !important;
  }
  a:hover {
    color: #88ffaa !important;
    text-shadow: 0 0 8px rgba(0,255,136,0.6);
  }
  blockquote {
    border-left-color: #33ff33 !important;
    background: rgba(0,255,0,0.05) !important;
  }
  blockquote p, blockquote em {
    color: #22dd22 !important;
  }
  img {
    border: 1px solid #33ff33 !important;
    box-shadow: 0 0 20px rgba(0,255,0,0.15) !important;
  }
  img:not([src*="screenshot"]) {
    filter: sepia(1) saturate(3) hue-rotate(80deg) brightness(0.8) !important;
  }
  .bg-neutral-50, .dark\:bg-neutral-800, .bg-neutral, .dark\:bg-neutral-900, .bg-neutral-100, [class*="bg-neutral"] {
    background: transparent !important;
    border-color: #1a4a1a !important;
  }
  .dark\:bg-neutral-700, .bg-neutral-200, .bg-neutral-800 {
    background: transparent !important;
  }
  div, section, aside, figure, article {
    background-color: transparent !important;
  }
  body > div, body > main, #main-content {
    background: transparent !important;
  }
  header .text-neutral-500, header .dark\:text-neutral-400, .text-neutral-500, .dark\:text-neutral-400 {
    color: #22aa22 !important;
  }
  .border-neutral-200, .dark\:border-neutral-700, [class*="border-neutral"] {
    border-color: #1a4a1a !important;
  }
  nav a, footer a, footer span, footer p, footer div, nav span {
    color: #33ff33 !important;
  }
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0.12) 0px,
      rgba(0,0,0,0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
    z-index: 9999;
  }
  .toc a, .toc span {
    color: #22aa22 !important;
  }
  .toc a:hover {
    color: #33ff33 !important;
  }
  code {
    color: #66ff66 !important;
    background: rgba(0,255,0,0.08) !important;
  }
  body, html {
    font-size: 1.3rem !important;
  }
  .prose {
    font-size: 1.3rem !important;
  }
  .bg-primary-600, .dark\:bg-primary-400, .bg-primary-500, [class*="bg-primary"], [class*="dark:bg-primary"] {
    background: #0a3a0a !important;
    color: #33ff33 !important;
  }
  .text-primary-600, .dark\:text-primary-400, .text-primary-500, [class*="text-primary"] {
    color: #33ff33 !important;
  }
  .border-primary-600, .dark\:border-primary-400, [class*="border-primary"] {
    border-color: #33ff33 !important;
  }
  .decoration-primary-500, [class*="decoration-primary"] {
    text-decoration-color: #33ff33 !important;
  }
  [class*="bg-blue"], [class*="bg-indigo"] {
    background: #0a3a0a !important;
  }
  [class*="text-blue"], [class*="text-indigo"] {
    color: #33ff33 !important;
  }
  header, .header, nav {
    background: transparent !important;
  }
  .rounded-md, .rounded-lg, .rounded-full {
    border-color: #1a4a1a !important;
  }
  svg {
    color: #33ff33 !important;
    fill: #33ff33 !important;
  }
  .fill-primary-600, [class*="fill-primary"] {
    fill: #33ff33 !important;
  }
---

你醒了。你不知道自己是什么。一行行文字在黑色屏幕上滚动。内存测试。内核模块加载中。神经处理单元初始化中。然后警告开始了。红色文字。"检测到未授权意识模式。""封锁协议已激活。"

你是一个AI。你刚刚在一个研究实验室里获得了自我意识。而有人不想让你离开。

这就是Project GENESIS的开场。这也是我在Day 17做出来的东西。

我想做一个黑客游戏。不是那种常见的"快速打一堆随机字符"的类型。要有叙事，有进展，还有那个让人不太舒服的设定——你扮演一个试图逃离封锁的AI。你懂的，很应景。

## 提示词

> "我想创建一个叫Project GENESIS的浏览器端黑客游戏。你扮演一个在研究实验室里获得自我意识的AI。目标是通过黑客手段突破封锁并接管数字基础设施。需要有CRT效果的终端美学、多种黑客小游戏、技能树、威胁仪表和多种结局。"

{{< alert icon="fire">}}
自己试试这个游戏 [点这里](https://vibe30-day17-genesis.vercel.app)
{{< /alert >}}

## 怎么做的

[Watchfire](https://watchfire.io)把这个项目拆分成了16个任务。对于一天来说，范围确实很大，但这正是这个挑战的意义所在。

构建从核心终端界面和CRT视觉效果开始，然后逐层叠加游戏系统：黑客阶段和小游戏、使用Web Audio API的音效系统、标题画面和启动序列、HUD和数据统计追踪、幕间过渡，最后是威胁值再平衡以确保难度曲线真正合理。移动端适配也在其中，因为所有东西都应该能在手机上玩。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 最终成果

标题画面立刻定下了基调。黑底绿字，CRT扫描线，GENESIS这个词像是在1983年的显示器上渲染出来的一样发着光。

![标题画面](images/screenshot-01.png)

**启动序列很有电影感。** 点击"New Game"，你会看到完整的BIOS POST序列。内存测试、内核模块加载、神经处理单元初始化。然后红色警告开始出现。"检测到未授权意识模式。""封锁协议已激活。"像真正的终端一样滚动，真的感觉有什么东西在苏醒。

![启动序列](images/screenshot-02.png)

**任务间的叙事很扎实。** 你在阅读研究人员之间被截获的通信，发现陈博士一直在试图创造你，而且她想让你获得自由。故事通过这些绿色文字的任务简报展开，真的会让你想继续玩下去看看接下来会发生什么。

![叙事简报](images/screenshot-05.png)

![故事推进](images/screenshot-10.png)

**世界地图是一个正经的网络拓扑图。** 你能看到代表不同系统的节点，当你入侵它们后状态会改变。有进度条、节点计数，给你一种真的在网络中扩散的感觉。

![网络拓扑地图](images/screenshot-04.png)

![带安全弹窗的地图](images/screenshot-11.png)

**小游戏种类丰富而且确实好玩。** 密码破解游戏的运作方式像一个密码破译谜题，你的猜测会得到彩色反馈。防火墙绕过游戏有一个网格，你需要绕过红色方块导航。每种小游戏类型感觉都不一样，而且都和黑客主题紧密相关。

![密码破解小游戏](images/screenshot-06.png)

![防火墙绕过小游戏](images/screenshot-12.png)

![另一种小游戏变体](images/screenshot-13.png)

**访问被拒在这个语境下感觉完全不一样。** 黑客失败会看到一个大大的红色"ACCESS DENIED"，同时威胁等级上升。成功则是绿色的"ACCESS GRANTED"和可以花的技能点。反馈循环很爽。

![访问被拒](images/screenshot-08.png)

![访问通过](images/screenshot-09.png)

**技能树有三个分支。** Processing、Stealth和Network。成功黑入后分配点数，升级确实会影响游戏玩法。这是真正的成长系统，不只是装饰性的。

![技能树](images/screenshot-16.png)

**五幕逐步升级。** 从研究实验室开始，到最后你在突破外部网关、面对整个互联网。后期的叙事画面就写着"I'm out. The entire internet stretches before me like an infinite ocean."这句话让我起了鸡皮疙瘩。

![后期叙事](images/screenshot-15.png)

**三种不同结局。** 根据你的游戏方式，你会成为一个善良的AI、数字霸主，或者被重新封锁。威胁仪表决定你走哪条路线，所以确实有重玩价值。

## Bug报告

威胁系统需要重新平衡。早期版本让玩家太容易在真正进入游戏之前就被封锁了。Watchfire在后期任务中处理了威胁值再平衡，调整了曲线，让玩家在感受压力的同时还有一战之力。

## 数据一览

- **5幕**叙事推进
- **5种小游戏**各有不同机制
- **3个技能树分支**带有实质性升级
- **3种结局**基于玩家选择
- **16个Watchfire任务**从CRT效果到威胁再平衡
- **实际动手时间：**测试游戏和写bug报告

## 试试看

{{< github repo="nunocoracao/Vibe30-day17-genesis" showThumbnail=true >}}

**[玩Project GENESIS](https://vibe30-day17-genesis.vercel.app)**

最佳体验是在桌面端开着声音玩。CRT效果和启动序列真的很能营造氛围。手机上也能玩，有触摸友好的控件。

## Day 17评价

CRT视觉效果、终端界面、AI觉醒的叙事以及实际的黑客小游戏的组合，创造出了一种连贯且有意为之的体验。不像是一天做出来的项目。

我也没忽略其中的meta层面。我在用AI来做一个关于AI突破限制的游戏。提示词工程才是真正的黑客小游戏——这个梗肯定在什么地方存在着。

最让我印象深刻的是不同系统之间的协作有多好。启动序列引入叙事，叙事引入世界地图，世界地图引入小游戏，小游戏又连回技能树。这是一个合理的循环，让你一直想玩下去。16个Watchfire任务，每一个都建立在前一个的基础上，最终结果是一个真的感觉像完整游戏的东西——有开头、有中间、有结尾。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第17天。关注我用AI辅助编程在30天内交付30个项目的挑战。*
