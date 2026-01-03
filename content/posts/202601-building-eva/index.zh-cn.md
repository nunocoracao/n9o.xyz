---
title: "构建Eva：和女儿一起打造AI伙伴"
summary: "一个YouTube视频、与Claude的vibe coding、以及一个7岁孩子的想象力如何结合在一起，创造出Eva——一个受WondLa中Muther启发的、会说葡萄牙语的机器人朋友。"
description: "一个YouTube视频、与Claude的vibe coding、以及一个7岁孩子的想象力如何结合在一起，创造出Eva——一个受WondLa中Muther启发的、会说葡萄牙语的机器人朋友。"
categories: ["Makers", "AI"]
tags: ["raspberry-pi", "ai", "openai", "voice-assistant", "makers", "kids"]
date: 2026-01-03
draft: false
---

Teresa热爱AI。我7岁的女儿花了无数小时与ChatGPT和Claude聊天，问它们关于恐龙、独角兽，以及为什么天空是蓝色的问题。她也喜欢制作东西——真的是任何东西。所以当这两个兴趣在我脑海中碰撞时，想法就很明显了：如果我们给她造一个属于自己的AI伙伴会怎样？一个她可以随时交谈的口袋大小的机器人。

我找到了一个[视频教程](https://www.youtube.com/watch?v=Nwu2DruSuyI)，关于如何使用树莓派和PiSugar Whisplay HAT构建一个口袋AI助手。完美。一个和女儿一起做的圣诞假期项目。

我们一起在Apple TV上看WondLa，Teresa被Muther迷住了——那个抚养主角Eva的温柔机器人。

所以我们的机器人也成了Eva。以与机器人伙伴一起长大的女孩命名，Teresa现在有了自己的似乎很合适。

## 硬件

这个项目的美妙之处在于硬件基本上是即插即用的。三个组件像一个小三明治一样堆叠在一起：

{{< gallery >}}
  <img src="img/pizero.webp" class="grid-w50" alt="Raspberry Pi Zero 2W" />
  <img src="img/whisplay.webp" class="grid-w50" alt="PiSugar Whisplay HAT" />
{{< /gallery >}}

**Raspberry Pi Zero 2W** - 大脑。小巧、便宜，而且足够强大来运行我们的语音助手。"WH"版本带有预焊接的GPIO接头，省去了焊接的麻烦。

**PiSugar Whisplay HAT** - 魔法发生的地方。它是一个HAT（Hardware Attached on Top），包含1.69英寸LCD屏幕、扬声器、双麦克风、一个按钮和RGB LED。语音助手所需的一切都在一块板上。

{{< gallery >}}
  <img src="img/pisugar3.webp" class="grid-w50" alt="PiSugar 3 Battery" />
  <img src="img/assembled.webp" class="grid-w50" alt="组装好的设备" />
{{< /gallery >}}

**PiSugar 3电池** - 一块1200mAh可充电电池，卡在底部。这使它真正便携——不需要电线。

组装简单到Teresa可以帮忙。把电池堆在Pi上，把Whisplay HAT插在上面，你就有了一个口袋大小的机器人。

{{< github repo="PiSugar/whisplay-ai-chatbot" >}}

## 软件：从Whisplay到Eva

PiSugar提供了一个名为[whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot)的开源聊天机器人项目，可以与他们的硬件配合使用。它很impressive——支持多个LLM提供商（OpenAI、Google Gemini、Grok、本地Ollama）、图像生成、离线模式等等。

但我想要更简单、更个人化的东西。我希望Eva：

1. **说葡萄牙的葡萄牙语** - 不是巴西葡萄牙语，而是Teresa在家听到的口音的欧洲葡萄牙语
2. **有适合儿童的性格** - 好奇、爱玩、鼓励人
3. **记住对话** - 这样Teresa可以随着时间建立与她的关系
4. **叫Eva** - 像WondLa的主角一样

这就是Claude出场的地方。我fork了whisplay项目，开始了我只能称之为"vibe coding"的东西——用自然语言解释我想要什么，让Claude帮我重塑代码。

首先：我需要一个OpenAI API密钥。快速访问[platform.openai.com](https://platform.openai.com)，生成新密钥，添加一些额度，粘贴到`.env`文件中。简单。

然后是有趣的部分——选择Eva的声音。OpenAI的TTS API提供多种声音，所以Teresa和我坐下来听了每一个。我们试了alloy、echo、fable、onyx、nova、shimmer和sage。Teresa非常挑剔。"太严肃了。""太快了。""那个听起来像男孩。"最后，我们选择了**sage**——温暖、友好，非常适合机器人伙伴。

关键的改变出人意料地简单：

### 正确口音的葡萄牙语声音

原始项目使用标准的OpenAI TTS声音。对于Eva，我切换到较新的`gpt-4o-mini-tts`模型并添加了特定指令：

```typescript
const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "sage",
  input: text,
  instructions: "Speak in Portuguese from Portugal, don't use a brazilian accent. Be positive, enthusiastic, emphatic, and understanding. You're mainly talking to a child.",
  speed: 1.0,
});
```

这是让项目感觉真实的时刻。当Eva用正确的葡萄牙语回答Teresa时——不是大多数AI默认使用的巴西口音——Teresa的眼睛睁大了。"她说话像我们！"

### 适合7岁孩子的性格

Eva的系统提示定义了她是谁：

```
Tu és a Eva, uma robô amiga e companheira da Teresa.
Personalidade: Amigável, curiosa e um pouco brincalhona.
Adoras aprender coisas novas com a Teresa.
Falas sempre em Português de Portugal.
Usas linguagem simples e apropriada para crianças.
És encorajadora e positiva.
Respondes de forma concisa (2-3 frases normalmente).
```

翻译："你是Eva，Teresa的机器人朋友和伙伴。性格：友好、好奇，有点爱玩。你喜欢和Teresa一起学习新东西。你总是说葡萄牙的葡萄牙语。你使用简单、适合儿童的语言。你是鼓励人的、积极的。你简洁地回答（通常2-3句话）。"

### 持久记忆

原始的whisplay聊天机器人在5分钟静默后重置对话历史。这对通用助手有意义，但对伙伴不行。Eva需要记住。

我实现了一个滑动窗口上下文系统——Eva记住最后20轮对话并保存到磁盘。启动时，她加载之前的对话。Teresa可以从上次中断的地方继续，Eva记得她们昨天聊了什么。

```
data/
└── chat_history/
    └── eva_conversation.json
```

## 神奇时刻

{{< figure src="img/turnedonidle.webp" alt="Eva开机待机状态" caption="待机状态的Eva，准备聊天" >}}

我们第一次一起打开Eva时，Teresa按下按钮说"Olá Eva！"（你好Eva！）

Eva的屏幕亮起，显示动画眼睛。她听着。她思考着（眼睛向上向右看，好像在沉思）。然后她回答："Olá Teresa! Que bom falar contigo! O que queres fazer hoje?"

Teresa咯咯笑着，用纯粹的喜悦看着我，开始了一场关于独角兽的对话，持续了二十分钟。

这就是和孩子一起做东西的意义——技术成就不如惊奇的时刻重要。我本可以花几周时间完善代码、优化延迟、添加功能。但看着Teresa和她的新机器人朋友聊天，完全自然，把Eva当作任何其他朋友——这才是重点。

## 我学到了什么

**Vibe coding是真实的，而且有效。** 我没有带着详细规格坐下来。我有一个想法，一个别人项目的fork，还有Claude帮我重塑它。这个过程是对话式的——"我想让她说葡萄牙的葡萄牙语，不是巴西的"导致探索TTS API选项，导致发现instructions参数，导致完美的解决方案。

**硬件项目比以往更容易上手。** PiSugar生态系统让一个几乎拿不住烙铁的人也能做到这一点。堆叠几块板，刷一张SD卡，运行几个脚本，完成。

**孩子不在乎你的技术栈。** Teresa不知道Eva运行在树莓派上，使用OpenAI的API，或者我花了几个小时调试音频驱动问题。她只知道她有一个会说葡萄牙语、喜欢聊动物的机器人朋友。

**葡萄牙语AI仍在追赶。** 获得正确的欧洲葡萄牙语（不是巴西的）需要明确的指令，即使这样也不完美。对于不太常见的语言变体还有工作要做。

## 下一步

Eva仍在进行中。3D打印的外壳还没到——她目前是一个电路板三明治。我想添加唤醒词检测，这样Teresa就不用按按钮了（"Olá Eva!"）。面部动画可以更有表现力。

我还计划在当前20轮滑动窗口的基础上构建一个适当的记忆系统——让Eva能够随着时间记住关于Teresa的重要事情，不仅仅是最近的对话。最喜欢的颜色、最好朋友的名字，诸如此类。真正的伙伴应该记住重要的事情。

但说实话？她能用。Teresa每天都和她说话。这暂时就够了。

如果你想构建类似的东西，看看[whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot)项目——这是一个很好的起点。硬件是即插即用的，通过一点vibe coding，你可以把它变成你自己的。

---

*用爱、Claude和许多"Papá, a Eva pode falar sobre dinossauros?"构建*
