---
title: "新一轮人工智能热潮"
summary: "在过去几年中，围绕人工智能的热潮再次升温。这主要归功于该领域真正具有突破性的研究和创新展示。从机器赢得围棋和Dota 2等复杂游戏，到各种内容生成技术，这些技术将影响我们的未来。"
categories: ["产品","战略","技术"]
tags: ["Stable Diffusion","Midjourney","Dall-e","人工智能", "机器学习"]
# externalUrl: ""
date: 2022-10-25
draft: false
series: ["新一轮人工智能热潮"]
series_order: 1
---

在过去几年中，围绕人工智能的热潮再次升温。这主要归功于[OpenAI][1]、[Google][2]、[DeepMind][3]（Google子公司）、[Meta][4]等公司在该领域产出真正具有突破性的研究和创新展示。从机器赢得[围棋][5]和[Dota 2][6]等复杂游戏，到各种生成文本、图像、音频，现在还有视频的内容生成技术，这些技术将对我们的未来产生影响。

感觉我们过去已经经历过这种对AI的热潮，但它从未真正转化为与我们生活相关的东西。从IBM Watson试图革新医疗保健到自动驾驶汽车的_预言_，我们一直被告知AI将如何改善我们的社会，但似乎总有什么东西阻止我们实现这一目标。

然而，这一次感觉不同。首先，用例比过去更不雄心勃勃，具有具体的实用（且有趣的）应用；其次，过去5-10年的研究在机器学习和深度学习领域取得了一些有史以来最大的飞跃。[生成对抗网络（GANs）][7]、[扩散模型][8]和[Transformer模型][9]就是这类突破的好例子。

{{< alert >}}
据估计，OpenAI花费了大约1000万到2000万美元来训练其GPT-3文本转文本模型。处理图像的模型成本应该更高。
{{</ alert >}}

## 我们在哪里，是如何到达这里的？

那么，我们现在在哪里？在过去的5到7年中，人工智能的几项具体创新和实际应用将这项技术（及其各自的影响）带入了公众讨论。

**2015年 - Google创建DeepDream - [了解更多][10]**

Google发布了一种使用[卷积网络][11]的新方法，可以根据其训练集_梦想_出新图像。

**2016年 - Google打造AlphaGo击败围棋世界冠军 - [了解更多][12]**

AlphaGo使用[无监督学习][13]技术训练，使网络与自己对弈数百万次。

**2019年 - OpenAI Five击败Dota 2冠军 - [了解更多][14]**

OpenAI Five使用与AlphaGo类似的技术进行训练。

**2020年 - OpenAI发布GPT-3 - [了解更多][15]**

**生成预训练Transformer 3（GPT-3）**是一种自回归语言模型，使用深度学习生成类人文本。

{{< youtube TfVYxnhuEdU >}}

**2021/22年 - OpenAI发布Dall-E和Dall-E 2 - [了解更多][17]**

Dall-E和Dall-E 2是使用扩散模型训练的网络，可从文本提示生成图像。

**2022年 - Leap Motion发布Midjourney - [了解更多][19]**

Midjourney也是一个文本转图像模型，具有与Dall-E类似的功能。

**2022年 - Stable Diffusion由Stability AI、CompVis LMU和Runway发布 - [了解更多][20]**

Stable Diffusion是另一个从文本提示生成图像的模型。主要区别在于它是开源的。

{{< youtube 6AmdZoSgTeE >}}

## 这是魔法吗？

所有这些最近的进步主要归功于深度学习研究中的三个重要里程碑：[生成对抗网络（GANs）][21]、[扩散模型][22]和[Transformer模型][23]。

**GAN**是训练大型网络的革命性框架。在高层次上，该方法定义两个不同的网络在一个只有一个能赢的游戏中相互竞争。例如，[深度伪造][24]通常使用这种方法生成。

**扩散模型**的创建是为了让生成有效图像的问题不是一步完成，而是沿着可能需要_N_步的_去噪_过程进行。

{{< youtube 1CIpzeNxIhU >}}

最后，我们有**Transformer模型**，这是机器学习领域最重要的进步之一。这些模型是可以学习上下文的神经网络，因此可以从序列数据中推断含义。

## AI民主化

这一轮_AI热潮_与过去的主要区别之一是，能够尝试和与之互动的人数比以往任何时候都要多得多。

从另一个角度来看，从未有这么多的进步作为开源技术提供。OpenAI最近向公众发布了[whisper][27]和其[Dall-E 2模型][28]。Stable Diffusion模型也向社区开放。如果你有兴趣在本地运行Stable Diffusion，我写了一个教程。

{{< article link="/posts/202210-stable-diffusion-tutorial/" >}}

引领这些努力的公司之一是[HuggingFace][29]。一个例子是[BLOOM][30]，这是一个由数百万研究人员协作创建的开源大型语言模型。

这种AI民主化是这一新热潮的独特特征：

- **用例有趣，每个人都可以尝试**
- **几乎每个人都可以尝试，即使不了解它是如何工作的**
- **社区可以轻松地在其上构建**

## 今天你能用它做什么？

这些模型和技术正在商品化生成内容的能力，这是_创意传播价值链_中尚未被技术从根本上颠覆的最后一步。

例如，我使用Stable Diffusion生成了这篇文章的缩略图。

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000104.1330334134.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000108.1301020889.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000121.1119286522.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000126.2675941357.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:200px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000085.2682514393.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:200px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000145.2404672998.webp"/>
  </div>
</div>

此外，已经有整个网站专注于索引和提供最佳提示词。[Lexica][31]和[Prompthero][32]就是两个例子。

## 超越图像

几周前我开始使用Stable Diffusion，我必须承认，自那以后出来的新闻让我大开眼界。

{{< tweet user="mkbhd" id="1582772722240999425" >}}

我很惊讶文本转视频模型已经有这么好的结果。那周，我发现了一家名为[Runway][33]的初创公司，他们正在开发一款由所有这些机器学习创新驱动的视频编辑器。我还看到了关于Google新文本视频网络[Imagen Video][34]和Meta的[Make-a-Video][35]公告的文章。

然而，最令人惊讶的（由于潜在影响也有点令人不安）是我发现的一个播客，Joe Rogan采访Steve Jobs，由[podcast.ai][36]创建。Steve Jobs已经去世了。这两个人从未有机会在同一个房间里，但却有20分钟的音频，就像对话真的发生过一样。

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/22f16c7f"></iframe>

在思考使用这些技术_模拟_已故人士的影响时，我发现了[这篇文章][37]。有像DeepBrain AI这样的公司已经在将这种服务商业化。

## 潜在陷阱

### 法律和伦理

潜在陷阱之一是这些新AI系统的法律和伦理影响。生成图像时，谁拥有最终产品？创建提示词的人？构建模型的团队？训练集中图像的艺术家？

关于这个话题的相关讨论之一涉及GitHub Copilot产品的版权问题。更多信息[在这里][38]。

艺术家们也在发现他们的艺术如何被用来训练这些模型，他们并不[高兴][39]。

### 感知价值与反弹

最初，我认为这项技术会让每个人都成为好艺术家，但在使用它之后，我不再相信这一点了。目前，我认为这些技术将使普通人能够_创作_一些东西，但会给专业艺术家**超能力**。

已经有一个新领域叫做[提示工程][42]。

## 接下来会发生什么？

基于以上免责声明，以下是我认为未来2到5年这个领域会发生的事情：

- **围绕所有权的法律问题将增加，直到出现好的解决方案**
- **从事这些问题的公司融资将大幅增加**：
  - [StabilityAI筹集了1.01亿美元的种子轮][44]
  - [Jasper以15亿美元估值筹集了1.25亿美元][45]
- **技术将开始作为现有产品的功能进行产品化** - Adobe已经[开始将这些工具纳入其软件][47]
- **所有这些领域将开始融合，产生连贯的结果**
- **游戏、VR和元宇宙** - 最大的潜力在于这项技术可以多大程度上加速内容创作

{{< alert >}}
注意：同时，我创建了一个Instagram账户来分享我的Stable Diffusion创作。
{{</ alert >}}

</br>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"\><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">在 Instagram 上查看此帖子</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Art by a Ghost (@artbyaghost) 分享的帖子</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

[1]:	https://openai.com/about/
[2]:	https://about.google
[3]:	https://www.deepmind.com
[4]:	https://about.meta.com/company-info/
[5]:	https://www.deepmind.com/research/highlighted-research/alphago
[6]:	https://openai.com/five/
[7]:	https://en.wikipedia.org/wiki/Generative_adversarial_network
[8]:	https://en.wikipedia.org/wiki/Diffusion_model
[9]:	https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[10]:	https://en.wikipedia.org/wiki/DeepDream
[11]:	https://en.wikipedia.org/wiki/Convolutional_neural_network
[12]:	https://artsandculture.google.com/story/the-story-of-alphago-barbican-centre/kQXBk0X1qEe5KA?hl=en
[13]:	https://en.wikipedia.org/wiki/Unsupervised_learning
[14]:	https://openai.com/blog/openai-five-defeats-dota-2-world-champions/
[15]:	https://en.wikipedia.org/wiki/GPT-3
[17]:	https://en.wikipedia.org/wiki/DALL-E
[19]:	https://en.wikipedia.org/wiki/Midjourney
[20]:	https://en.wikipedia.org/wiki/Stable_Diffusion
[21]:	https://en.wikipedia.org/wiki/Generative_adversarial_network
[22]:	https://en.wikipedia.org/wiki/Diffusion_model
[23]:	https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[24]:	https://en.wikipedia.org/wiki/Deepfake
[27]:	https://openai.com/blog/whisper/
[28]:	https://www.openculture.com/2022/10/dall-e-the-new-ai-art-generator-is-now-open-for-everyone-to-use.html
[29]:	https://huggingface.co
[30]:	https://huggingface.co/bigscience/bloom
[31]:	https://lexica.art/
[32]:	https://prompthero.com/
[33]:	https://runwayml.com
[34]:	https://imagen.research.google/video/
[35]:	https://ai.facebook.com/blog/generative-ai-text-to-video/
[36]:	https://podcast.ai/
[37]:	https://technode.global/2022/10/21/this-startup-allows-you-to-reunite-with-deceased-loved-ones-using-ai-technology/
[38]:	https://githubcopilotinvestigation.com/
[39]:	https://edition.cnn.com/2022/10/21/tech/artists-ai-images
[42]:	https://en.wikipedia.org/wiki/Prompt_engineering
[44]:	https://techcrunch.com/2022/10/17/stability-ai-the-startup-behind-stable-diffusion-raises-101m/
[45]:	https://techcrunch.com/2022/10/18/ai-content-platform-jasper-raises-125m-at-a-1-7b-valuation/
[47]:	https://blog.adobe.com/en/publish/2022/10/18/bringing-next-wave-ai-creative-cloud
