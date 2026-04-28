---
title: "30 Days of Vibe Coding - Day 23 - RetroOS"
description: "一个Windows 95风格的桌面环境，完全在浏览器中运行，配备可拖拽窗口、经典应用和开机启动序列。"
summary: "一个Windows 95风格的桌面环境，完全在浏览器中运行，配备可拖拽窗口、经典应用和开机启动序列。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-23", "windows95", "retro", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 23
seriesOpened: false
date: 2026-04-28
draft: false
#type: "hidden"
---

第23天。我让AI给我搞了个Windows 95。

## 提示词

这次纯粹是怀旧驱动：

> "搭建一个在浏览器中运行的Windows 95风格桌面环境。包含任务栏、开始菜单、可拖拽和可调整大小的窗口，以及记事本、计算器、画图、扫雷、终端、Internet Explorer和我的电脑等经典应用。加上开机启动序列、像素风SVG图标、音效、壁纸选择、CRT显示效果，还有蓝屏彩蛋。"

{{< alert icon="fire">}}
自己试试看 [点这里](https://vibe30-day23-retroos.vercel.app)
{{< /alert >}}

## 怎么做的

[Watchfire](https://watchfire.io)把这个拆成了10个任务。这次的规模太疯狂了。这不是一个单独的应用，而是一整套操作系统UI，包含窗口管理器、任务栏、开始菜单，还有七个独立的应用程序全都在里面运行。每个应用都需要自己的行为逻辑、自己的窗口装饰、自己的交互方式。

任务列表先搞定了桌面外壳（任务栏、开始菜单、窗口管理），然后逐一搞定每个应用程序，最后是启动序列、蓝屏、CRT扫描线效果和音效这些收尾工作。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 最终效果

这玩意儿真能开机。

![启动画面](images/screenshot-02.png)

打开页面会看到一个黑屏，显示"RetroOS 95 - Click anywhere to start."。点击后会看到文本模式的POST自检序列滚动而过，跟真的一模一样。然后是一个"Starting RetroOS..."的进度条，之后桌面才加载出来。

![POST自检序列](images/screenshot-03.png)

![加载进度条](images/screenshot-04.png)

接着桌面出现了，看起来完全对味。那个标志性的蓝绿色。底部粗粗的灰色任务栏。角落里的开始按钮。左侧整齐排列的桌面图标是像素风SVG图标，真的有1995年那味儿。

![桌面](images/screenshot-05.png)

**开始菜单能用。**点击开始会弹出经典的级联菜单，有程序、文档、设置、查找、帮助、运行和关机。应用程序就列在那里。甚至还有Win95标志性的立体浮雕边框。

![开始菜单](images/screenshot-06.png)

**终端出乎意料地有深度。**它不只是个装饰。你可以运行`dir`，会显示AUTOEXEC.BAT和CONFIG.SYS的假文件列表。输出格式跟DOS一模一样，连日期格式和字节数都对。输入`ver`还会返回版本字符串。

![终端](images/screenshot-07.png)

![终端dir输出](images/screenshot-08.png)

**计算器能用。**标准的按钮布局、凹陷的显示屏、浮雕边框。能做真正的计算。看起来跟你上电脑课无聊时打开的那个一模一样。

![计算器和终端](images/screenshot-09.png)

**画图能用。**有画布、底部有调色板，真的能画。工具选择也有。我在里面画了个脸，因为1997年大家在MS Paint里都是这么干的。

![画图应用](images/screenshot-10.png)

**Internet Explorer有个假主页。**加载出来的是一个复古风格的"Welcome to my Homepage"页面，有彩色文字、访客计数器和留言本链接。这个细节真的绝了。

![IE和其他应用](images/screenshot-12.png)

**我的电脑显示驱动器。**软驱A:、硬盘C:、光驱D:。这是一个根本不存在的文件系统的文件浏览器，但看起来完全正确。

![我的电脑](images/screenshot-13.png)

**扫雷能玩。**经典的网格，顶部有计数器和笑脸。数字、旗子、地雷。跟真的一样。

**所有窗口都能拖拽和调整大小。**可以叠放、移动、最小化到任务栏，任务栏会像真正的操作系统一样显示所有打开的窗口。整个窗口管理系统都能正常工作。

![打开多个窗口](images/screenshot-01.png)

还有蓝屏彩蛋。怎么触发我就不剧透了，但它确实在里面，而且看起来很逼真。

## Bug报告

老实说，没什么好报告的。窗口管理第一次就跑通了。所有应用都正确加载了。我注意到的主要问题：

- 把窗口拖得太靠下的话可能会和任务栏重叠
- 在小屏幕上CRT效果有点过重
- 扫雷第一次点击有时会踩到雷（真正的版本会保护你不被炸）

都是小问题。核心体验从一开始就很扎实。

## 试试看

{{< github repo="nunocoracao/Vibe30-day23-retroos" showThumbnail=true >}}

**[启动RetroOS](https://vibe30-day23-retroos.vercel.app)**

点击黑屏启动。点击开始探索。全部打开。试试终端命令。在画图里画点什么。玩玩扫雷。找到蓝屏。

![画图和计算器并排显示](images/screenshot-11.png)

![我的电脑文件浏览器](images/screenshot-14.png)

## 第23天总结

这是那种光靠怀旧情怀就值得做的项目之一。但除此之外，技术规模也很impressive。一个窗口管理器、七个独立应用、一个启动序列、音效、键盘快捷键、一个假文件系统、一个假互联网。全部来自一次提示词会话。

让我惊叹的是对细节的把控。蓝绿色的桌面颜色。窗口装饰那种特定的灰色。浮雕边框。窗口激活和未激活时任务栏按钮的不同外观。没人告诉它要把这些细节做对。它就是知道Windows 95长什么样，然后完美地还原了那个美学。

如果你是在90年代中期第一次在米色的塔式机上点击开始按钮长大的，去试试这个吧。它会带你回到那个年代。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第23天。跟着我一起用AI辅助编程在30天内发布30个项目吧。*
