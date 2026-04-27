---
title: "30 Days of Vibe Coding - Day 19 - ReactionWall"
description: "一个用于活动现场的实时反应墙，支持飞舞的表情和文字消息，由Firebase实时同步驱动。"
summary: "一个用于活动现场的实时反应墙，支持飞舞的表情和文字消息，由Firebase实时同步驱动。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-19", "react", "firebase", "framer-motion"]
series: ["30 Days of Vibe Coding"]
series_order: 19
seriesOpened: false
date: 2026-04-24
draft: false
#type: "hidden"
---

第19天。我想做一个有趣又有互动性的东西，专门用在现场活动上。就是那种你在聚会上投到投影仪上，然后大家用手机发反应的那种。

## 提示词

> "做一个活动用的实时反应墙。创建一个活动，分享链接或二维码，反应就会实时飞过屏幕。底部有表情栏，也能发文字消息。全屏投影模式。用Firebase做实时同步。"

{{< alert icon="fire">}}
自己试试看 [点这里](https://vibe30-day19-reactionwall.vercel.app)
{{< /alert >}}

## 怎么做的

[Watchfire](https://watchfire.io)把这个拆成了9个任务。前几个是基础部分：搭建Firebase Realtime Database、活动创建流程，以及匿名认证让大家不需要注册。然后是表情反应栏、用Framer Motion做的飞行动画、投影仪用的全屏显示模式、声音开关，最后是整体打磨。

实时部分是这里的核心挑战。每个反应都需要在查看该活动的所有屏幕上即时显示。Firebase Realtime Database开箱即用地处理了这个问题，但要让体验感觉舒服需要很多细节调整。反应使用30秒的滑动窗口，旧的会自动消失，还有每秒1个反应的速率限制，防止场面失控。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成品展示

落地页干净又暗色系。一个按钮就能创建活动墙。

![落地页](images/screenshot-01.png)

给活动起个名字然后点"Go Live"。整个设置就这么多。

![创建活动](images/screenshot-02.png)

进入之后，左上角会显示二维码和可分享的链接，参与者可以用手机即时加入。屏幕底部有一个带8个选项的表情栏，还有一个最多50个字符的自定义消息文字输入框。

![带表情栏和二维码的活动墙](images/screenshot-03.png)

![屏幕上的反应](images/screenshot-04.png)

显示模式是最好玩的部分。全屏、暗色背景、反应带着发光效果飞过屏幕。表情有随机的轨迹、大小和摇摆动画。文字消息也会在紫色的小气泡里飘过。当大家开始疯狂发反应的时候，会触发爆发效果。

![飞舞反应和文字的显示模式](images/screenshot-05.png)

还有一些我没有明确要求但自动加上的好细节。在手机上发送反应时的触觉反馈。通过Web Audio API的弹出音效，带开关控制。还有冷却指示器，让你知道速率限制后什么时候可以再次发送。

## 技术栈

- React 19 + TypeScript + Vite
- Firebase Anonymous Auth + Realtime Database
- Framer Motion（所有飞行动画）
- QRCode.react（可分享的二维码）

Framer Motion在视觉方面承担了大部分重活。每个反应都有自己的动画，轨迹、旋转和缩放参数都是随机的。结果就是飞过屏幕的反应没有两个是一样的。

## 试试看

{{< github repo="nunocoracao/Vibe30-day19-ReactionWall" showThumbnail=true >}}

**[试试ReactionWall](https://vibe30-day19-reactionwall.vercel.app)**

创建一个活动，在手机上打开链接，然后给自己发反应。比你想象的要爽得多。

## 第19天总结

这是那种实时特性让项目活起来的项目。静态应用也行，但当你看到有人点了手机的瞬间反应就弹出来的时候，感觉就像一个真正的产品。Firebase处理同步层，Framer Motion处理动画层，整个东西以一种在现场活动中真正好用的方式融合在了一起。

二维码分享、全屏显示模式、不需要安装任何东西也不需要创建账号。对于聚会或者会议演讲来说，这完全够用了。不是生产级别的，但足以投到投影仪上让现场嗨起来。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第19天。跟着我一起看如何用AI辅助编程在30天内发布30个项目吧。*
