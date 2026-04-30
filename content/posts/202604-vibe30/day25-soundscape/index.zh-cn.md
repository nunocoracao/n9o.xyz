---
title: "30 Days of Vibe Coding - Day 25 - SoundScape"
description: "一个环境声音混音器，具有程序化生成音频、预设、Lo-Fi节拍生成器和可分享的混音功能。"
summary: "一个环境声音混音器，具有程序化生成音频、预设、Lo-Fi节拍生成器和可分享的混音功能。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-25", "web-audio", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 25
seriesOpened: false
date: 2026-04-30
draft: false
#type: "hidden"
---

第25天。我给自己做了一个在做其他所有项目时都会真正用到的应用。

## 提示词

想法很简单：一个环境声音混音器，你可以把不同的声音叠加在一起，为工作、放松或睡眠创造背景氛围。就像YouTube上那些"咖啡馆氛围"视频一样，但是可交互、可自定义的。

有趣的约束是，我希望所有音频都用Web Audio API程序化生成。没有采样文件，没有需要加载的音频素材。一切都在浏览器中合成。

{{< alert icon="fire">}}
自己试试看 [点这里](https://vibe30-day25-soundscape.vercel.app)
{{< /alert >}}

## 怎么做的

[Watchfire](https://watchfire.io)把这个项目拆分成了10个任务。最初的计划其实是用Howler.js加预录制的声音文件，但我很早就转向了用Web Audio API做程序化生成。这意味着你听到的每一个声音，从雨声到噼啪作响的壁炉，都是实时用数学方法生成的。没有MP3，没有下载，没有加载画面。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 成果

![SoundScape主界面](images/screenshot-01.png)

**3个类别共12种声音。** Nature、Urban和Cozy。每个声音都有自己的卡片和音量滑块，你可以随意混搭。Nature类别有雨声、森林、海浪等。Urban有咖啡馆聊天声和键盘打字声。Cozy有壁炉噼啪声。

![主控制台](images/screenshot-02.png)

**主控制台很简洁。** 顶部有Ambience、Music和总音量三个滑块，还有一个用于睡眠模式的计时器按钮。毛玻璃风格的UI在深色背景上看起来真的很棒。

![Forest Cabin预设下的活跃声音](images/screenshot-03.png)

**预设让它立刻就能用。** 有四个内置预设：Rainy Coffee Shop、Forest Cabin、Late Night Coding和Ocean Breeze。一键就能获得精心调配的混音。比如Forest Cabin会以不同的音量级别激活Forest、Wind、Birds和Fireplace。你也可以把自定义预设保存到localStorage。

![声音网格 - Nature和Urban](images/screenshot-05.png)

![声音网格 - Cozy类别](images/screenshot-06.png)

**每一个声音都是程序化生成的。** 雨声是用滤波器塑形的白噪音。风声是带慢速调制的低频振荡器。鸟声是随机时间间隔的短正弦波啁啾。壁炉是带噼啪爆发的滤波噪音。没有一个听起来完美，但都能被辨认出来，混合在一起效果不错，你的大脑会自动填补空隙。

![Lo-Fi节拍生成器](images/screenshot-04.png)

**还有个Lo-Fi节拍生成器。** 这不在原始计划里，但作为额外功能出现了。它有情绪预设（Chill、Happy、Sad、Dreamy）和Drums、Bass、Keys、Melody、Vinyl噼啪声的独立控制。以74 BPM运行，生成的东西确实适合放在背景里听。节拍叠加在环境声音之上，所以你可以同时放雨声加Lo-Fi节拍加壁炉。

**背景会随你的混音变化。** 动态渐变背景会根据哪些声音处于活跃状态而改变。Nature为主的混音偏向绿色和蓝色，Urban偏暖色调。很微妙，但让整个应用感觉更有生命力。

**通过URL分享。** 你可以复制URL把你的混音分享给别人。它会编码哪些声音处于活跃状态以及它们的音量级别，所以打开链接的人会得到你完全一样的设置。

**到处都有键盘快捷键。** 空格键暂停全部，数字键1-9和0切换单个声音，Escape停止全部。睡眠计时器会在你选择的时长（15、30、60或90分钟）内进行柔和的淡出。

## Bug报告

程序化音频的方式意味着大部分bug都跟音频有关：

- 一些声音在开关切换时会有咔嗒声和爆音（需要正确的增益渐变）
- Lo-Fi节拍生成器的节奏在长时间播放后会轻微漂移
- 在滤波器调优之前，一些合成声音在满音量时太刺耳了

没什么大问题。Web Audio API很强大，但如果不正确处理音频上下文的生命周期，它是很无情的。

## 试试看

{{< github repo="nunocoracao/Vibe30-day25-soundscape" showThumbnail=true >}}

**[打开SoundScape](https://vibe30-day25-soundscape.vercel.app)**

建议戴耳机体验。试试"Late Night Coding"预设，然后打开Lo-Fi Beats。

## 第25天总结

自己混合环境背景音而不是到处找YouTube视频或Spotify播放列表，这感觉挺爽的。而且因为全部是程序化生成的，所以没有循环，没有重复。雨就一直下着，永远是略微不同的。

Web Audio API被低估了。我完全不知道光靠振荡器、噪音生成器和滤波器就能合成这么多不同的声音。算不上录音棚品质，但作为背景环境音出奇地好用。零音频文件意味着整个应用瞬间加载，而且离线也能用。

还剩5天。

---

*这是[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)的第25天。跟着我用AI辅助编程在30天内发布30个项目吧。*
