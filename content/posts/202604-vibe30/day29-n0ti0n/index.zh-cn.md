---
title: "30 Days of Vibe Coding - Day 29 - n0ti0n"
description: "一个受Notion启发的块编辑器，支持嵌套页面、斜杠命令，以及通过Firebase Firestore实现的实时同步"
summary: "一个受Notion启发的块编辑器，支持嵌套页面、斜杠命令，以及通过Firebase Firestore实现的实时同步"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-29"]
series: ["30 Days of Vibe Coding"]
series_order: 29
seriesOpened: false
date: 2026-05-04
draft: false
#type: "hidden"
---

第29天。过了今天就剩最后一天了。所以我克隆了Notion。

不是全部。但核心体验做到了：一个带有嵌套页面、斜杠命令和简洁侧边栏导航的块编辑器。成品就是n0ti0n。前端部分很快就搞定了。部署嘛，那就是另一回事了。

## 提示词

> "构建一个受Notion启发的块编辑器，支持嵌套页面、斜杠命令、富文本格式、带语法高亮的代码块、表格、任务列表和导航侧边栏。编辑器使用Tiptap，实时持久化使用Firebase Firestore，匿名认证让任何人都能试用，还要有暗色模式。"

{{< alert icon="fire">}}
自己试试看 [点这里](https://blocknotes-lime.vercel.app)
{{< /alert >}}

## 做出了什么

编辑器使用了Tiptap 3，这是一个出色的基于块的编辑器框架，搭配合适的扩展，开箱即用就能满足我大部分需求。输入`/`就会弹出斜杠命令，可以插入标题、列表、代码块、表格、任务列表、分割线，甚至嵌套页面。选中任意文本就会出现气泡菜单，提供加粗、斜体、删除线、高亮和链接等行内格式选项。

![带侧边栏导航和功能概览的欢迎页面](images/screenshot-02.png)

侧边栏是嵌套页面真正发光的地方。你可以在页面里创建页面，树状结构会在左侧面板中以可折叠的方式展示。还有搜索/命令面板（Cmd+K），可以快速在页面间跳转、切换亮色模式，或者即时创建新页面。

![可折叠页面树的侧边栏导航](images/screenshot-05.png)

还内置了模板功能。创建新页面时，可以从预设模板中选择，比如旅行计划、会议记录或项目计划。每个模板都预填了实用的结构。

![新页面的模板选择器](images/screenshot-06.png)

斜杠命令菜单本身简洁好用。在编辑器的任何位置输入`/`，就会出现一个包含所有块类型的下拉菜单：标题、文本、无序列表、有序列表、待办列表、代码块、表格、引用块、分割线、图片和嵌套页面。

![带块类型选项的斜杠命令菜单](images/screenshot-10.png)

页面可以通过开关分享到网络，还有Markdown和JSON的导出选项。整个应用也做了响应式适配，在手机上用起来体验很好。

![分享到网络功能](images/screenshot-14.png)

![Markdown和JSON导出选项](images/screenshot-16.png)

![编辑器的移动端视图](images/screenshot-17.png)

所有数据都通过Firebase Firestore的匿名认证实时同步，所以任何人都可以打开应用直接开始写，不需要创建账号。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Firestore的折腾之旅

这个项目真正值得详细聊的就是这部分。编辑器本身组装得相对顺利。Tiptap文档很完善，扩展是模块化的，Claude也不需要太多手把手就搞定了集成。真正的挑战是让Firestore在生产环境中正常工作。

这个项目的git日志简直疯了。光是调试Firestore部署问题就有几十个提交。长轮询配置、缓存设置、REST API回退、环境变量修剪、连接超时处理……一连串小而痛苦的问题，只有部署到Vercel之后才会冒出来。

本地一切运行完美。但在生产环境中，Firestore连接会卡住，数据加载不出来，或者应用悄悄地同步失败。每修好一个问题就发现下一个。修剪环境变量的空白字符解决了一个问题。从WebSocket切换到长轮询解决了另一个。调整缓存配置又解决了一个。典型的"在我机器上能跑"的场景，大概持续了15到20个提交。

说实话，这是整个挑战中最真实的部分之一。搭建UI是有趣的部分。让它在真正的后端上在生产环境中正常工作，才是时间真正花在的地方。而用AI辅助编码时，调试循环很有意思——Claude能很快给出修复建议，但你仍然需要部署、测试、迭代。不管AI多快，反馈周期都比本地开发慢。

[Watchfire](https://watchfire.io)几乎立刻就发现了部署问题，至少让我避免了几天后才通过用户报告发现这些问题。

## 试试看

{{< github repo="nunocoracao/Vibe30-day29-n0ti0n" showThumbnail=true >}}

**[在线演示](https://blocknotes-lime.vercel.app)**

![带笔记、列表、任务项和代码块的编辑器](images/screenshot-01.png)

![选中文本时的格式工具栏](images/screenshot-03.png)

![快速导航的命令面板](images/screenshot-13.png)

![亮色模式下的旅行计划模板](images/screenshot-15.png)

## 第29天总结

一个带有真正持久化、嵌套页面和简洁UI的块编辑器，是人们确实需要的东西。Tiptap 3在编辑器方面承担了大量重活，Firebase处理了后端，但把所有东西串在一起，尤其是让部署乖乖工作，确实费了不少功夫。Firestore调试之旅很好地提醒了我们，发布软件最难的部分很少是功能代码本身。而是基础设施、边界情况，以及那些只在生产环境才会出问题的东西。还剩最后一天。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第29天。跟随我用AI辅助编码在30天内发布30个项目的挑战吧。*
