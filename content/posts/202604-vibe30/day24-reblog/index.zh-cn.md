---
title: "30 Days of Vibe Coding - Day 24 - Reblog"
description: "对个人博客进行现代化重新设计，从Hugo/Blowfish迁移到Astro + Tailwind CSS，集成模糊搜索、深色模式和自定义字体排版。"
summary: "对个人博客进行现代化重新设计，从Hugo/Blowfish迁移到Astro + Tailwind CSS，集成模糊搜索、深色模式和自定义字体排版。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-24", "astro", "tailwind", "blog", "redesign"]
series: ["30 Days of Vibe Coding"]
series_order: 24
seriesOpened: false
date: 2026-04-29
draft: false
#type: "hidden"
---

第24天。我重建了自己的博客。

这次是很私人的项目。我的博客[n9o.xyz](https://n9o.xyz)已经用Hugo和我自己做的主题[Blowfish](https://blowfish.page)运行了好几年。Blowfish是我做的，我在维护它，成千上万的人在用。但我一直想换个东西。一个全新的视觉形象，一个不同的技术栈，一个更像我自己而不是"我为所有人做的主题"的东西。

所以今天的项目是Reblog：从零开始重新设计n9o.xyz，从Hugo迁移到Astro 5 + Tailwind CSS。

{{< alert icon="fire">}}
点击[这里](https://vibe30-day24-reblog.vercel.app)亲自试试
{{< /alert >}}

## 提示词

这不是一个提示词就搞定的。这是一整天下来18个[Watchfire](https://watchfire.io)任务。最初的方向大概是这样的：

> "用Astro 5、Tailwind CSS和MDX搭建个人博客。深色模式、精选文章、标签筛选、模糊搜索、简历页面、音乐页面和项目页面。用Sora、Crimson Pro和JetBrains Mono做自定义字体排版。"

之后就是不断迭代的过程。调整布局、微调颜色、添加结构化数据、修复打印样式、接入多篇系列内容支持。这种工作通常需要在设计和代码之间来回好几周。

## 成果

一个包含六个不同板块的完整博客平台。

![深色模式首页](images/screenshot-01.png)

**首页**有一个包含我的照片、头衔、简介和社交链接的横幅区域。下面是大卡片样式的精选文章区域，然后是最新文章网格。干净、居中、温暖。深色模式用了一个低调的橄榄棕色调，我真的挺喜欢的。不是那种常见的深灰或纯黑。

![精选文章区域](images/screenshot-02.png)

![最新文章网格](images/screenshot-03.png)

**文章页面**顶部有标签筛选。点击标签，列表立刻过滤。不用刷新页面，不用和服务器通信。Astro就是这么给力。

![带标签筛选的全部文章](images/screenshot-05.png)

**模糊搜索**基于Fuse.js实现。在客户端加载，可以跨标题、描述和标签进行搜索。这是这个几乎零JS网站中为数不多的交互式岛屿之一。Astro的岛屿架构意味着搜索组件可以独立hydrate，不需要为整个页面引入框架。

**关于页面**包含我的简介、链接和导师指导信息。简历页面列出了我的职业经历，配有公司logo和职位晋升轨迹。两个页面都干净易读。

![关于页面](images/screenshot-04.png)

![简历页面](images/screenshot-07.png)

**项目页面**展示了开源作品，带有状态徽章、技术标签，以及指向仓库和网站的链接。

![项目页面](images/screenshot-06.png)

**音乐页面**是一个专辑封面网格，展示我以N9O名义发行的音乐。每张都链接到流媒体平台。这是Hugo版本里从来没有、但我一直想要的页面。

![音乐页面](images/screenshot-08.png)

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 浅色模式

整个网站也支持浅色模式，可以检测系统偏好设置。同样的布局，不同的配色。

![浅色模式首页](images/screenshot-09.png)

![浅色模式精选文章](images/screenshot-10.png)

浅色版本使用温暖的奶油色背景，搭配相同的字体排版。会根据你的操作系统设置自动切换，也可以手动切换。

## 技术细节

技术选择都是经过深思熟虑的：

- **Astro 5** - 默认零JS的静态生成
- **MDX** - 用于博客文章，需要时可以在markdown中嵌入组件
- **Tailwind CSS** - 不用跟主题CSS较劲就能做样式
- **Fuse.js** - 客户端模糊搜索
- **Sharp** - 自动图片优化
- **Sora + Crimson Pro + JetBrains Mono** - 有设计感的字体排版
- **结构化数据**和**站点地图** - 为了SEO
- **RSS订阅** - 为了那三个还在用RSS的人（我是其中之一）
- **打印样式** - 因为有时候我会打印文章，打出来得好看才行

## 18个任务

Watchfire把这个项目拆成了18个任务，这是迄今为止最细粒度的拆解。第一批覆盖了核心功能：项目脚手架、布局组件、首页、文章页面、关于页面、深色模式。然后我不断追加需求。"加个音乐页面。""加系列支持。""精选卡片需要更多对比度。""加打印样式。""加结构化数据。"

每次迭代都很快回来，而且大部分都是对的。视觉设计经过了好几轮才定下这个温暖的配色方案。第一版太冷淡了。第二版太暗了。第三版终于在温馨和专业之间找到了平衡。

## 试试看

{{< github repo="nunocoracao/Vibe30-day24-reblog" showThumbnail=true >}}

**[在线演示](https://vibe30-day24-reblog.vercel.app)**

## 第24天总结

这是挑战到目前为止最有个人意义的项目。不是因为技术上最厉害，而是因为这是我拖了好几个月的事情。重新设计自己的网站，永远感觉不够紧急，不值得开始。总有更重要的事情。然后某天你看着它，意识到它已经不能代表你了。

在一天之内搭建一个完整的博客平台，包含六个页面、深色模式、搜索、标签筛选、系列支持、结构化数据和打印样式——这不是我自己能做到的事情。差远了。Hugo/Blowfish版本花了我好几周的晚上和周末，而且那还是用我了如指掌的框架。

这个会真的取代n9o.xyz吗？也许吧。我需要把内容迁移过来，用一段时间看看。但一天就做出一个可用的替代方案，随时可以上线——这确实挺疯狂的。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第24天。关注我用AI辅助编程在30天内发布30个项目的旅程。*
