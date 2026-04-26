---
title: "30 Days of Vibe Coding - Day 20 - MoodBoard"
description: "一个协作灵感板，任何人都可以把图片、链接和笔记钉到共享画布上，支持实时更新。"
summary: "一个协作灵感板，任何人都可以把图片、链接和笔记钉到共享画布上，支持实时更新。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-20", "firebase", "collaboration", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 20
seriesOpened: false
date: 2026-04-25
draft: false
#type: "hidden"
---

Day 20。我想要一个共享画布，一群人可以把图片、链接和笔记往墙上扔，看看什么能留住。字面意思。

## 提示词

> "做一个协作灵感板应用。任何有链接的人都可以把图片、文字笔记和链接钉到共享画布上。实时同步、匿名认证、自由布局。"

这就是起点。[Watchfire](https://watchfire.io) 把它拆成了7个任务，从基本的 Firebase 骨架一路做到完整的协作钉板。

{{< alert icon="fire">}}
自己试试看 [这里](https://vibe30-day20-moodboard.vercel.app)
{{< /alert >}}

## 怎么搭建的

七个任务，每个都在前一个基础上加一层新东西：

1. Firebase 实时同步作为基础
2. 三种钉子类型：文字便签、图片上传、带 OG 预览的链接卡片
3. 在自由画布上拖拽排列钉子
4. 钉子颜色标签，方便视觉分组
5. 缩放和平移，加上钉子大小调整，控制画布
6. 画板锁定，让创建者可以冻结为只读，还能导出 PNG
7. 光标存在感，让你看到其他人在哪里悬停，外加一次视觉重设计

这个推进顺序很合理。钉子还不存在的时候你没法拖拽它们，核心交互还没跑通的时候也没必要操心视觉打磨。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成品什么样

这个项目一上手就感觉对了。

![MoodBoard 落地页](images/screenshot-02.png)

**落地页定下了基调。** 大 logo，背景散落着示例钉子，一个按钮创建画板。不用注册，不用账号，零摩擦。点一下"Create New Board"就能开始。

![等待添加钉子的空画板](images/screenshot-03.png)

**新画板就是一张空白画布。** 深色背景配上微妙的点阵网格。工具栏极简，右上角只有锁定、导出和复制分享链接。右下角的浮动按钮打开钉子类型选择器。

![钉子类型选择器](images/screenshot-04.png)

**三种钉子类型覆盖基本需求。** 文字用于便签，图片用于上传，链接用于 URL 卡片。按加号按钮，选类型，放到画布上。简单到任何有链接的人不用说明就能搞懂。

![画布上的文字便签](images/screenshot-05.png)

**便签看起来就像真正的便签。** 有那种微微倾斜的纸质感。你可以随便写内容，选颜色，拖到任何位置。深色画布上的桃色，效果出乎意料地好。

![图片上传对话框](images/screenshot-06.png)

**图片上传很直接。** 弹出一个模态框，选择文件，就上传到 Firebase Storage。图片会作为钉子出现在画布上，和其他元素一样可以拖拽和调整大小。

![混合内容的画板](images/screenshot-07.png)

**把所有东西混在一起，就开始有真正灵感板的感觉了。** 图片、便签、各种尺寸。你可以拖来拖去找到合适的排列。自由画布意味着不会被锁定在网格上，所以你能得到那种有机的拼贴感。

![带链接卡片的完整画板](images/screenshot-08.png)

**链接卡片会拉取 OG 元数据。** 粘贴一个 URL，它就会获取标题、描述和预览图。Watchfire 卡片、Blowfish 卡片、OpenClaw 卡片都完美呈现了它们的品牌形象。比直接粘贴一个裸 URL 好看太多了。

## Bug 报告

实时协作总会有边界情况：

- 多个用户快速移动时，光标存在感偶尔会闪烁
- 非常大的图片上传会让画布在图片加载完成前变卡
- PNG 导出有时会漏掉离视口中心较远的钉子

都不会破坏体验，但属于正式上线前需要打磨的问题。

## 数据一览

- **7 个 Watchfire 任务**，从 Firebase 搭建到视觉重设计
- **Firebase 技术栈：** 匿名认证、Firestore 实时同步、Storage 图片上传
- **Next.js 15 + Tailwind CSS 4** 前端
- **html2canvas** 用于 PNG 导出功能
- **三种钉子类型：** 文字、图片、链接（带 OG 预览）
- **协作功能：** 实时同步、光标存在感、画板锁定

## 试试看

{{< github repo="nunocoracao/Vibe30-day20-moodboard" showThumbnail=true >}}

**[打开 MoodBoard](https://vibe30-day20-moodboard.vercel.app)**

创建一个画板，分享链接。任何人都可以往上面钉东西。

## Day 20 评价

挑战完成了三分之二。Day 10 是一个没有协作功能的 Miro 克隆。Day 20 是一个支持完整实时同步的灵感板。这就是进步。

Firebase 集成是让这个项目成立的关键。匿名认证意味着加入画板零门槛。Firestore 实时监听让钉子瞬间出现在所有人面前。光标存在感让你知道有人真的和你在一起。这些功能把一个人的画布变成了共享空间。

最让我惊喜的是链接卡片。粘贴一个 URL 就能得到一张带网站品牌、描述和预览图的精美卡片，这让画板瞬间丰富起来。就这一个功能，就把它从"一个贴便签的地方"变成了你真的会用来收集和分享项目参考资料的工具。

七个任务对于一个实时协作应用来说是很紧凑的范围。但每个任务都干净利落地建立在上一个之上，最终产品感觉很有整体感。Day 20，不错。

---

*这是 [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/) 的第20天。跟着我一起见证如何用 AI 辅助编程在30天内发布30个项目。*
