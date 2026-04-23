---
title: "30 Days of Vibe Coding - Day 18 - PollBox"
description: "一个实时投票应用，带有动画效果的实时结果展示，由Firebase驱动，一天内搞定。"
summary: "一个实时投票应用，带有动画效果的实时结果展示，由Firebase驱动，一天内搞定。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-18", "nextjs", "firebase", "react", "typescript"]
series: ["30 Days of Vibe Coding"]
series_order: 18
seriesOpened: false
date: 2026-04-23
draft: false
#type: "hidden"
---

Day 18。我想做点协作性的东西。那种你分享一个链接，马上就能看到其他人在互动的东西。实时投票应用感觉刚好合适。

## 提示词

> "构建一个实时投票创建和投票应用。用户应该能够创建包含多个选项的投票，通过链接分享，并通过动画条形图实时查看结果更新。"

{{< alert icon="fire">}}
自己试试看 [点这里](https://vibe30-day18-pollbox.vercel.app)
{{< /alert >}}

## 怎么构建的

[Watchfire](https://watchfire.io)把这个项目拆分成了31个任务。对于一个投票应用来说挺多的，但一旦你开始想那些让投票体验完整的小细节，功能列表就会迅速膨胀。

核心部分先行：Firebase实时数据库集成、投票创建流程、投票机制，以及带动画的结果展示。然后层层叠加其他功能。用于快速创建投票的分类和模板。无障碍改进。加载骨架屏避免内容闪烁。一个像样的404页面。当然，最后还有惯例的部署修复环节。

Firebase集成是整个项目的骨架。Firestore负责数据持久化，实时监听器把投票更新推送给每一个连接的客户端，匿名认证意味着没人需要为了投个票而创建账号。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 最终成果

创建流程对于一天的构建来说功能出奇地完善。

![投票创建表单](images/screenshot-02.png)

你可以设置标题、描述、分类标签、多个选项，甚至还有颜色主题选择器。还支持封面图片、定时投票、密码保护和过期时间。底部有常见投票类型的模板，比如"是或否"、"1-5评分"和"团队投票"，这样你可以完全跳过设置环节。

![带主题和模板的创建选项](images/screenshot-03.png)

结果页面才是真正有趣的地方。投票后，条形图以动画方式出现，领先的选项高亮显示，彩纸屑在屏幕上炸开。

![带彩纸屑的实时结果](images/screenshot-05.png)

每个投票页面还有表情反应、评论区、带二维码生成的分享链接，以及CSV数据和图片的导出选项。功能面覆盖得相当广。

![团队投票结果](images/screenshot-06.png)

![评分投票结果](images/screenshot-07.png)

"我的投票"仪表板可以追踪你创建的所有内容，支持搜索和分类筛选。每个投票显示状态、选项数、投票数，还有一个复制按钮方便快速复用。

![我的投票仪表板](images/screenshot-01.png)

## Bug报告

部署环节是主要的痛点。Firebase配置需要针对生产环境做调整，还有一些常见的Vercel特有问题需要处理。对于依赖外部服务的项目来说这很正常。每个用户只能投一票的限制需要Firestore事务才能正确工作，这花了几轮迭代才搞定。

## 试试看

{{< github repo="nunocoracao/Vibe30-day18-pollbox" showThumbnail=true >}}

**[试试PollBox](https://vibe30-day18-pollbox.vercel.app)**

创建一个投票然后分享链接。不需要注册账号。

## Day 18 总结

这里的功能列表非常密集。一个Firebase驱动的实时投票应用，带动画结果、二维码分享、表情反应、评论、CSV导出、图片导出、模板、分类、密码保护和仪表板。这是把生产级的功能列表塞进了一天里。

实时功能是让它活起来的关键。你分享一个链接，有人投票，你屏幕上的条形图就会动。不需要刷新。Firebase的实时监听器加上Framer Motion动画，让整个体验变得响应迅速且精致，这是静态结果永远无法做到的。

Watchfire的31个任务，深度可见一斑。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第18天。跟随我用AI辅助编程在30天内交付30个项目的旅程。*
