---
title: "30 Days of Vibe Coding - Day 13 - GitFolio"
description: "一个GitHub作品集生成器，输入任意用户名就能生成精美的作品集网站，提供5个模板和7种配色主题。"
summary: "一个GitHub作品集生成器，输入任意用户名就能生成精美的作品集网站，提供5个模板和7种配色主题。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-13", "github", "portfolio", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 13
seriesOpened: false
date: 2026-04-18
draft: false
#type: "hidden"
---

第13天。如果你能把任何GitHub个人主页变成一个好看的作品集网站，而且不用写一行代码呢？

## 提示词

> "做一个GitHub作品集生成器。输入用户名，生成一个包含统计数据、仓库、编程语言和活动记录的精美作品集。支持多个模板、多种配色主题，导出为HTML。"

## 怎么做的

Watchfire把这个任务拆分成了19个子任务。核心工作从GitHub API集成开始，拉取作品集需要的所有数据：个人资料、仓库、贡献活动、编程语言、所属组织。然后在此基础上构建模板系统、主题引擎以及所有导出和分享功能。

任务列表覆盖了很多内容：五个作品集模板（Minimal、Developer Card、Creative/Bento Grid、Corporate/Showcase以及Hacker/Terminal主题）、七种配色主题、自定义强调色、打印和PDF模式、自动检测技能、部署指南、README导出和社交分享卡片生成器。对于一个完全在浏览器中运行、没有后端的东西来说，功能集丰富得令人惊讶。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成果展示

落地页已经很精致了。默认深色模式、干净的排版、三步说明，首页上就能预览所有模板和主题。

![落地页](images/screenshot-01.png)

![三步生成你的作品集](images/screenshot-02.png)

**五个模板，各有特色。** Showcase是功能最全的选项，采用bento grid布局。Developer Card简洁直接。Bento Grid走的是不对称卡片风格。Minimal把一切精简到只剩排版。Terminal则把整个页面渲染成命令行界面，配有ASCII艺术字和等宽字体。

![模板和主题选择器](images/screenshot-03.png)

**七种配色主题加自定义强调色。** Midnight、Ocean、Forest、Sunset、Rose、Slate，还有一个可以自己选强调色的自定义选项。落地页甚至还有浅色模式版本。

![浅色模式落地页](images/screenshot-04.png)

**生成的作品集数据丰富。** 带动画计数器的统计数据、贡献热力图、堆叠条形图的语言分布、热门仓库、最近活动、所属组织、社交链接。全部通过公开的GitHub API获取，无需任何身份验证。

![Showcase模板与统计数据](images/screenshot-05.png)

![Minimal模板](images/screenshot-06.png)

**自定义面板很全面。** 你可以单独开关各个部分，实时切换主题和模板，覆盖个人简介文字，所有更改即时生效。一切都在客户端处理，切换之间没有加载时间。

![自定义面板](images/screenshot-07.png)

**Bento Grid模板非常好看。** 这个真的让我惊喜。它把个人资料、统计数据、精选仓库、最近活动和编程语言用不对称卡片网格排列，看起来像是一个正经的设计项目。

![Bento Grid模板](images/screenshot-08.png)

**Terminal模板太酷了。** 它把你的整个作品集渲染成在终端里执行命令的样子。个人资料显示为fetch风格的输出，统计数据显示为CLI响应，仓库列表显示为目录条目。甚至还有闪烁的光标。

![Terminal模板](images/screenshot-09.png)

**内置部署指南。** 导出作品集HTML后，部署弹窗会引导你在Netlify Drop、GitHub Pages或Vercel上进行托管。每个平台都有逐步说明和链接。这种细节上的打磨，才是把一个演示变成真正可用工具的关键。

![部署弹窗 - Netlify](images/screenshot-10.png)

![部署弹窗 - GitHub Pages](images/screenshot-11.png)

![部署弹窗 - Vercel](images/screenshot-12.png)

## Bug报告

GitHub公开API在没有身份验证的情况下限制为每小时60个请求，每次生成作品集大约需要4个请求。测试过程中快速重复生成作品集时，我好几次触发了速率限制。与其说是bug，不如说是需要了解的限制。应用处理得很优雅，会提示你等一下。

README里写的是6个主题和4个模板，但实际应用里有5个模板和7个主题。代码跑在了文档前面——这基本上就是整个挑战的缩影。

## 数据一览

- **5个作品集模板** 各有不同的布局
- **7种配色主题** 加自定义强调色
- **19个Watchfire任务** 从API集成到部署指南
- **零后端** 一切都在客户端运行
- **4次GitHub API调用** 每次生成作品集
- **导出格式：** HTML下载、剪贴板复制、分享链接、README和社交分享卡片

## 试试看

{{< github repo="nunocoracao/Vibe30-day13-githubportfolio" showThumbnail=true >}}

**[生成你的作品集](https://vibe30-day13-githubportfolio.vercel.app)**

输入任何公开的GitHub用户名，选个模板就行。

## Day 13 总结

这个项目填补了一个真实的空白。大多数开发者作品集工具要么需要你搭建一整个项目，要么把你锁定在某个特定设计里。GitFolio只需要一个用户名，就给你一个可以托管在任何地方的独立HTML文件。模板种类丰富，光是Terminal主题就值得一试，部署指南消除了从生成作品集到实际上线之间的最后一道障碍。

完全在浏览器中运行，无需认证、无数据库、无追踪，这点也很不错。你可以把这个URL发给一个从没碰过终端的人，他们也能在五分钟内让一个作品集网站上线。

输出质量在持续提高，是我的提示词写得更好了，还是工具更善于推断我的意图了？我也不确定。大概两者都有吧。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第13天。关注我用AI辅助编程在30天内发布30个项目的全过程。*
