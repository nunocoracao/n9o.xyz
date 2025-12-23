---
title: "如何在你的笔记本电脑上运行 Stable Diffusion"
description: "在过去一年中，多个机器学习模型已向公众开放，用于从文本描述生成图像。这是人工智能领域一个有趣的发展。然而，直到最近，这项技术才变得人人可用。"
summary: "在过去一年中，多个机器学习模型已向公众开放，用于从文本描述生成图像。这是人工智能领域一个有趣的发展。然而，直到最近，这项技术才变得人人可用。"
categories: ["技术","教程"]
tags: ["人工智能","Stable Diffusion","神经网络"]
#externalUrl: ""
date: 2022-10-06
draft: false
series: ["新一轮人工智能热潮"]
series_order: 3
---

在过去一年中，多个机器学习模型已向公众开放，用于从文本描述生成图像。这是人工智能领域一个有趣的发展。然而，出于合理的伦理原因，这些模型大多保持闭源状态。因此，即使你可以通过某些界面与它们交互，你能测试的内容也是有限的。直到现在……

这些模型中最新的是 Stable Diffusion，这是由 <a href="https://stability.ai/" target="_blank">Stability AI</a> 开发的开放机器学习模型，用于从自然语言描述生成数字图像。这个模型变得相当流行，主要是因为它是第一个开源的此类模型。

我已经玩过 <a href="https://openai.com/dall-e-2/" target="_blank">Dall-E</a> 和 <a href="https://www.midjourney.com/home/" target="_blank">Midjourney</a>，但我想尝试在本地运行模型，以获得更多自由来进行实验。我成功地在我的 M1 Pro 和 Windows 台式机上安装并运行了该模型。本指南详细介绍了我在 Mac 上让一切正常运行的步骤。

## 初始说明

在开始之前有几点说明。我尝试了多个在线指南，但没有一个能给我带来流畅的体验。我不得不尝试大量的仓库、解决方案等。本指南的主要目标是提供如何在 M1 上运行 Stable Diffusion 的说明，这是我遇到最多挑战的地方。在 Windows 上安装要简单得多。

话虽如此，我最终使用的仓库有所有平台的详细指南：<a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_WINDOWS.md" target="_blank">Windows</a>、<a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md" target="_blank">Mac</a> 和 <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_LINUX.md" target="_blank">Linux</a>。如果你使用其他平台，或者本指南在 Mac 上对你不起作用，请随时使用这些指南。

{{< alert >}}
*注意：我没有尝试上面的 Mac 指南，因为当我找到这个仓库时，我已经弄清楚了让模型工作所需的大部分变通方法。*
{{< /alert >}}

## 获取代码

让我们从获取代码开始。我使用的是 <a href="https://github.com/invoke-ai/InvokeAI" target="_blank">InvokeAI 的 Stable Diffusion 分支</a>，我在<a href="https://github.com/nunocoracao/InvokeAI" target="_blank">这里</a>进行了 fork。欢迎使用 InvokeAI 的原始仓库。我将使用我的 fork 来确保指南保持更新和可用。

首先，将仓库克隆到你的本地机器。

```bash
git clone https://github.com/nunocoracao/InvokeAI
```

## 获取模型

现在你需要获取包含网络权重的实际模型。这是通过海量数据集进行大规模训练周期的结果，普通用户使用普通硬件根本无法与之竞争。由于其大小（约 7.5 GB）以及确保用户需要遵守许可证，模型不随代码一起分发。

只需访问 <a href="https://huggingface.co/" target="_blank">Hugging Face 网站</a>并登录，如果没有账户则创建一个。设置完成后，点击<a href="https://huggingface.co/CompVis/stable-diffusion-v-1-4-original" target="_blank">这里</a>，接受模型卡上的条款，然后下载名为 `sd-v1-4-full-ema.ckpt` 的文件。下载模型后，进入代码文件夹，将其放在 `models/ldm/stable-diffusion-v1/` 中，命名为 `model.ckpt`。`stable-diffusion-v1` 文件夹不存在，需要创建。

{{< alert >}}
*注意：还有其他模型变体可以探索，这是我见过的大多数仓库推荐的版本。*
{{< /alert >}}

## 设置环境

代码和模型准备就绪后，下一步是设置本地环境来运行一切。

### 安装 Xcode

第一步是安装 Xcode。Xcode 可以从 App Store 安装，或者你可以从 Apple 的开发者网站下载。

```bash
xcode-select --install
```

### 安装 Conda

我见过的大多数解决方案都使用 <a href="https://docs.conda.io/projects/conda/en/latest/#" target="_blank">Conda</a> 来管理所需的包和环境。Conda 的安装指南非常清晰，所以我建议你按照<a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation" target="_blank">这里</a>的说明操作。

```bash
conda
```

如果安装过程成功，你应该看到类似下图的内容。

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/conda_result.webp"/>

### 安装 Rust

在遵循其他指南时，我在下一部分过程（构建环境）中总是遇到问题。经过多次尝试，我发现我的系统缺少 Rust 编译器。

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 构建并激活环境

我们快完成了。现在我们将创建 `ldm` 环境并在开始生成图像之前激活它。

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env create -f environment-mac.yml
```

如果在此步骤遇到任何问题，需要重建环境：

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env update -f environment-mac.yml
```

*如果你使用的是 Intel Mac，命令应该是：*
```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-64 conda env create -f environment-mac.yml
```

现在是时候使用以下命令激活环境：

```bash
conda activate invokeai
```

最后一步是使用以下命令预加载模型：

```bash
python scripts/preload_models.py
```

## 开始玩耍…

现在是时候开始使用 Stable Diffusion 了。运行：

```bash
python scripts/invoke.py --full_precision --web
```

然后在浏览器中打开 `localhost:9090`

你应该看到类似下面的 Web 界面。

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/webui_new.webp"/>

选择你的第一个提示词并尝试模型，所有图像将保存在 `output/img-samples` 中。探索各种模型和配置。我一直使用 `512x512` 的图像，最终图像大约 `100` 个周期（初始变体 `5` 个），config scale 设为 `7.5`。作为采样器，我更喜欢使用 `DDIM` 的结果。

## 一些示例

以下是我初次运行模型的一些图像示例。这里有一些链接，可以获取关于如何开始设计 `prompts` 的想法。

- <a href="https://decentralizedcreator.com/10-best-text-to-image-prompts-for-ai-art-generator-disco-diffusion-a-visual-treat-inside/" target="_blank">10 个最佳 AI 艺术生成器文本到图像提示词</a>
- <a href="https://prompthero.com/" target="_blank">Prompthero</a>

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000008.2887160172.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000023.4136023390.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000024.2854274560.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000028.4255152621.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000031.1604394908.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000036.1662843642.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000043.2287582219.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000045.234321637.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000057.107659121.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000058.157499426.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000063.2383238266.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000067.2841883613.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000102.4159217524.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000116.829934269.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000145.2404672998.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000149.811067720.webp"/>
  </div>
</div>

## 免责声明与其他选项

运行 Stable Diffusion 模型有很多选项，有些是本地的，有些是在云端的（例如 Google Colab），所以如果你想尝试但没有能运行它的机器，不要沮丧。可能还有其他解决方案可以使用。

如果你成功让它运行了，在社交媒体上标记我分享你的创作：

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://twitter.com/nunocoracao" target="_blank" >}}
    {{< icon "twitter" >}}&nbsp;
    在 Twitter 上关注我
    {{< /button >}}
  </div>
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://www.instagram.com/nunocoracao/" target="_blank" >}}
    {{< icon "instagram" >}}&nbsp;
    在 Instagram 上关注我
    {{< /button >}}
  </div>
</div>
