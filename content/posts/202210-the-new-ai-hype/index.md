---
title: "The New Artificial Intelligence Hype"
summary: "In the last few years, the hype around artificial intelligence has been increasing (again). Most of it is due to truly groundbreaking research and innovative showcases in the field. From machines winning complex games like Go and Dota 2, to various content generation techniques, these technologies will impact our future."
categories: ["Product","Strategy","Technology"]
tags: ["Stable Diffusion","Midjourney","Dall-e","AI", "Machine Learning"]
# externalUrl: ""
date: 2022-10-25
draft: false
series: ["The New AI Hype"]
series_order: 1
---

In the last few years, the hype around artificial intelligence has been increasing (again). Most of it is due to companies like [OpenAI][1], [Google][2], [DeepMind][3] (Google subsidiary), [Meta][4], and others producing truly groundbreaking research and innovative showcases in the field. From machines winning complex games like [Go][5] and [Dota 2][6]to a variety of content generation techniques that produce text, images, audio, and now video, these technologies will have an impact on our future.

It feels like we have experienced this hype towards AI in the past, but it never really materialized into anything relevant to our lives. From IBM’s Watson attempts to revolutionize healthcare to the _prophecies_ of self-driving cars, we have been told about how AI will improve our society, yet there always seems to be something preventing us from getting there. On one side, technology might not be there yet for some of those advanced problems, in another, humans tend to be skeptical of machines taking over some of our areas of expertise (Skynet didn’t help here). 

However, this time it feels different. Firstly, use cases are way less ambitious than in the past and have concrete practical (and fun) applications; secondly, research in the last 5-10 years had some of the major leaps ever in the machine and deep learning fields. [Generative Adversarial Networks (GANs)][7], [Diffusion Models][8], and [Transformer Models][9] are good examples of such breakthroughs. Thirdly, this time around the required technology and processing power are here to enable us to run and train these massive networks. 

{{< alert >}}
It is estimated that OpenAI spent around $10M to $20M to train its GPT-3 text-to-text model. Cost should be higher with models dealing with images.
{{</ alert >}}

## Where Are We and How We Got Here?

So, where are we right now? In the last 5 to 7 years, several specific innovations and practical applications of AI have brought forward the technology (and its respective implications) to public discussion. Before going into what is already possible, let’s go through the more relevant announcements in the last years.

**2015 - Google creates DeepDream - [Read More][10]**

Google releases a new method using [Convolutional Networks][11] that can _dream_ new images based on its training set. The network could generate **new** images from cats, for example, after learning from tons of real cat images. 

**2016 - Google builds AlphaGo that beats Go world champion - [Read More][12]**

AlphaGo which was trained using [unsupervised learning][13] techniques to make the network compete against itself millions of times to try to beat itself and get better at the game with each iteration. AlphaGo beat the Go champion and was even able to display Go moves that were never seen, showing that it had beyond _learning_ moves from other games into discovering its unique plays.

**2019 - OpenAI Five beats the Dota 2 champions - [Read More][14]**

OpenAI Five was training using similar techniques to AlphaGo, this network went through millions of games against itself and got better and better. The challenge with playing a multiplayer online 3D game like Dota 2 was the immense _action space_ possible to the player. OpenAI proved that by using its models and new training techniques, it was possible to solve these problems successfully. 

**2020 - OpenAI reveals GPT-3  - [Read More][15]**

**Generative Pre-trained Transformer 3 (GPT-3)** is an autoregressive language model that uses deep learning to produce human-like text. The network was trained on more than 400B text tokens from a giant textual training set. The model can then keep writing text given an initial prompt. The impressive part is that more than being grammatically and syntactically correct, the story being told is coherent across sentences. Take a look at the video below if you want some examples of what it can do. For a more detailed explanation of what is happening, you can check [this video][16] in which a network comes up with a very _believable_ story about a scientist that discovered unicorns in South America.

{{< youtube TfVYxnhuEdU >}}

**2021/22 - OpenAI announces Dall-E and Dall-E 2 - [Read More][17] and [Here][18]**

Dall-E and Dall-E 2 are networks trained using diffusion models to be able to generate images from textual prompts. You can write a sentence and the AI will come up with an image for it in a short time frame. The model can output different types of styles, and previous images can be used to guide the creation of new ones. 

**2022 - Leap Motion releases Midjourney - [Read More][19]**

Midjourney is also a text-to-image model. What someone can do with it is almost identical to Dall-E; however, there is a noticeable difference in the outputs it provides because of the different training sets. Not necessarily meaning that one is better than the other, just different.

**2022 - Stable Diffusion released by a collaboration of Stability AI, CompVis LMU, and Runway with support from EleutherAI and LAION - [Read More][20]**

Same as Dall-E and Midjourney, Stable Diffusion is another model to generate images from textual prompts. The main difference is that the entities that created this model made it open-source, which means that anyone can play around with it. This generated lots of buzz around it, as the previous models were proprietary at the time.

As of right now, it is possible to use most of these technologies either locally or through a service (e.g., OpenAI API) to generate text and images. It is possible to generate entire chapters for a book from small prompts of text, might not be a _ready-to-release_ output, but at least it will help with writer’s block. It is also possible to generate images from text, images from images, and even in and out paint existing images. Furthermore, it is possible to erase part of an image you have, and have one of these models complete it using either another image or a text prompt. Additionally, it is also possible to extend an existing image using the same techniques (example below). 

{{< youtube 6AmdZoSgTeE >}}

## Is This Magic?

All of these recent advancements are mainly attributed to three big milestones in Deep Learning research: [Generative Adversarial Networks (GANs)][21], [Diffusion Models][22], and [Transformer Models][23]. 

**GAN** was a revolutionary framework for training massive networks without exactly having a complete set of data to do so. At a high level, the method defines that two different networks will try to compete against each other in a game where only one can win, learning and getting better at each interaction. [Deepfakes][24], for example, are usually generated using this method. One network tries to generate a _fake_ image of someone, and another one attempts to guess if it’s a fake or a real one. This method was also used to develop AlphaGO and OpenAI Five.

The problem with these techniques is that training is hard, and after the network knows how to _fool_ the second one, there is little to no incentive to try interesting new things. 

Enter **Diffusion Models**. These models were made so that the issue of generating a valid image doesn’t happen in one step, but along a _denoize_ process that can take _N_ steps. A training set is built by adding different levels of noise to valid real images (and their respective textual descriptions). The learning process then consists of the network learning how to remove noise in small amounts to get to the final image. This increases the control over the learning process and ends up producing networks that can produce a way bigger number of outputs than previously. If you want to learn more about how it all works, I recommend the video below.

{{< youtube 1CIpzeNxIhU >}}

Finally, we have **Transformer Models**, this was one of the most important advancements in the machine learning field, and arguably one of the cornerstones that makes everything we are seeing today possible. These models are neural networks that can learn context, and therefore infer meaning from sequential data. 

Before transformers, networks relied on [convolutional neural networks (CNNs)][25] and [recurrent neural networks (RNNs)][26] to _learn_ from a large labeled dataset. These took a long time and money to produce and increased the complexity of the final model. Transformers don’t require labeled datasets because they can find the patterns mathematically. This means that now it’s possible to train the new models with the trillions of images and petabytes of text data available on the internet and in company databases.


## AI Democratization

One of the main differences between this _AI hype wave_ to past ones is that the number of people that can try it and interact with it is way bigger than it ever was. The internet made it possible to create services to explore what is possible and let people play around with it. In some cases, even create new business models for the companies behind these innovations. I am personally still wondering how many people pay OpenAI to play around with Dall-E. 

From a different angle, there were never so many of these advances made available as open-source technologies that people can download, play around with, and even build upon of.  OpenAI has recently released [whisper][27] and its [Dall-E 2 model][28] to the public. The Stable Diffusion model is also available to the community and there are already several remarkable projects behind it. If you are interested in running Stable Diffusion locally I wrote a tutorial on it, give it a try if you are interested.  

{{< article link="/posts/202210-stable-diffusion-tutorial/" >}}

One of the companies that have been spearheading these efforts is [HuggingFace][29]. The company provides tools that enable users to build, train, and deploy machine learning models based on open-source technologies and code. It also helps numerous parties share their models and build upon each other. An example of this is [BLOOM][30], an open-source large language model created collaboratively among millions of researchers. 

This AI democratization is a unique characteristic of this new hype wave the world is experiencing, which has the potential to entirely change the outcome of how it will impact our lives because of three reasons:

- **Use-cases are fun and everyone can try them** - Unlike the self-driving prophecies or the _all-knowing_ healthcare AIs of the 80s, these use-cases are way simpler and ubiquitous, therefore appealing to more people.
- **Almost everyone can try it even if you don’t understand how it works** - available through open-source software licenses or via a website almost everyone who wants to, can try these out and have fun with them.
- **The community can build on it easily** - The fact that some of these will be open to the public will exponentially increase the innovation that will happen in the space.

Ultimately, all the above reasons will contribute to making AI as a whole a more widespread and well-accepted technology, which hopefully will get us away from the pop-culture visions of movies like _Terminator_ or _The Matrix_.


## What Can You Do With It Today?

These models and technologies are commoditizing the ability to generate content, which was the last step in the _Idea Propagation Value Chain_ that had yet to be fundamentally disrupted by technology. The internet already entirely changed how we distribute content (the last part of the chain). Almost every file is digital, can be copied at zero cost, and sent almost instantaneously to anyone on earth.  These new technologies will revolutionize the initial stages of the propagation value chain: the **creation** and **substantiation** of an idea.

Just considering the technologies I had a chance to play around with (Dall-e, Midjourney, and Stable Diffusion), the pre-requirements of learning to draw, paint, or model and render 3D content completely go away. Anyone will be able to tell to an artificial agent what they want to see, and it will create it for them.

As an example, I've used Stable Diffusion to generate the thumbnail for this article. I knew more or less what I wanted, so it just became a matter of going through a couple of dozens of ideas until I found something that I liked, some examples are below.

<div style="display: flex; flex-wrap: wrap;">

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="thumbnails/000104.1330334134.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="thumbnails/000108.1301020889.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="thumbnails/000121.1119286522.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="thumbnails/000126.2675941357.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:200px">
    <img class="thumbnailshadow" src="thumbnails/000085.2682514393.png"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:200px">
    <img class="thumbnailshadow" src="thumbnails/000145.2404672998.png"/>
  </div>

</div>

Moreover, if you run out of ideas, and need help with designing the prompts, there are already entire sites focused on indexing and providing the best prompts with examples of what others created. [Lexica][31] and [Prompthero][32] are two examples that I’ve tried with great results.

However, images are just the beginning…

## Beyond Images

I started playing around with Stable Diffusion a couple of weeks ago, and I have to admit that the news that came out since then blew my mind. As I was amazed at how easy it currently is to ask an AI to generate images, I realized that some projects are trying to go well beyond that. 

It began when I came across this re-tweet from MKBHD:

{{< tweet user="mkbhd" id="1582772722240999425" >}}

I was surprised that there were already such good results for text-to-video models and that so many companies were working on it. That week, I discovered a startup called [Runway][33] which is working on a video editor powered by all of these machine-learning innovations. A couple of days after, I’ve seen articles for Google’s new text-video network, [Imagen Video][34], and Meta’s announcement of [Make-a-Video][35].

After quickly discovering all the work happening also to generate 3D models from text and flat images, and animate 3D modes based on textual descriptions. 

However, the most surprising one (and also a bit off-putting due to potential implications) was a podcast I came across of Joe Rogan interviewing Steve Jobs, created by [podcast.ai][36]. For those of you who don’t know, Joe Rogan has a widely successfully podcast show that runs for years and Steve Jobs is, well, dead. Those two men never had the chance to be in the same room together, however, and without their permission I imagine, there is 20 min of audio of them talking as if the conversation had happened. 

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/22f16c7f"></iframe>

While thinking about the impacts of using these technologies to _emulate_ people who are no longer among us, I came across [this article][37]. So, not only there are some examples of people doing this with celebrities, there are companies like DeepBrain AI which already monetize such a service and can create a digital avatar of your lost loved ones.

## Potential Pitfalls

Throughout our history as a species, there were always problems and issues that had to be sorted out after a new invention came along.

### Legal & Ethical

One of the potential pitfalls is the legal and ethical Implications of these new AI systems and their impacts on society. For example, when generating an image using one of the text-to-image models in this article, who owns the final product? The person coming up with the prompt? The team that builds the model? The team that builds the training set? The artists whose images were on that set? All of them? None of them? None of that is sorted out at this stage, and it is already a big concern. 

One of the relevant discussions happening right now regarding this topic is regarding GitHub’s Copilot product copyright issues. Copilot is an AI that was trained using all code repositories available on GitHub to empower a developer to code faster by turning comments into code, for example. How would you feel, having your code being used to generate potentially millions for a private company without getting a dime for it? There’s more information [here][38] if you are interested.

Artists are also finding out how their art was used to train these models and are not [happy about it][39]. Companies and startups also need to [worry about IP][40] infringement if they are using any of these solutions, or creating them. 

Finally, there is an even bigger problem when considering that this technology can be used by ill-intentioned people. Generating images from people doing stuff they never did, or saying something they never did. This is the same issue with Deepfakes which already has several research initiatives happening, but it’s still a real concern. For what it is worth, some tools in this article made a great job making sure you can’t generate that type of content by adding safety filters to their services. However, for all the open-source ones, anyone has the power to override those safety measures. 

All of these are very valid legal concerns within the industry that should be addressed ASAP, or there is a risk that all of it can turn into a legal storm that will take us back years. More than just the legal aspects, this technology has a very real potential to destroy someone’s life; therefore it should be thought through with time and low tolerance for mistakes.

### Perceived Value & Backlash

Initially, I thought that this tech would make everyone a good artist, but after playing around with it, I am not convinced that is the case anymore. What makes a good artist is more than just their raw execution ability. Factors like creativity, what actually do you want to create, and artistic knowledge are of super importance for having a good final product. At this stage, I think that these technologies will enable normal people to be able to _create_ something, but will give current professional artists **super-powers** that will enable them to take their work to another level.

Having said this, the fact that these models enable us as a society to produce more, faster, and at a lower cost, will have an impact on the perceived value of its outputs. As an example, imagine a design department at a given news media publication with around 20 people. If the current technology becomes mainstream, probably that same department will not need 20 people. 

There was a story not so long, about a journalist from The Atlantic that used Midjourney to generate images for an article and received massive backlash on Twitter. You can read his thoughts on what happened [here][41]. Given the already difficult and competitive environment in which some of these artists work, the potential pushback against these tools is understandable. There is a potential real impact on the job market. Even though it will be bad for some people in the short term, the real question is whether it will be good or bad in the long run. This phenomenon is quite common in big technological innovations and has happened several times throughout history. 
  
_Note: There is already a new area called [Prompt Engineering][42], and others might appear soon._

Interestingly enough, **legal concerns** and **human backlash** have always been the major pitfalls for the adoption of any AI system in the past, more so than with technology in general.  


## What’s Next?

I think the current applications of the already existing technology will be massive, and therefore whatever prediction one can make will have a high degree of uncertainty. These technologies affect the current _Idea Propagation Value Chain_, specifically in the parts of that chain that was not ever touched until now, _**creation**_ and _**substantiation**_. This fact alone has the potential to impact us more than the internet, which changed the _**duplication**_ and _**distribution**_ parts of the chain, ever did. Only those impacts could be a discussion for pages and pages of an entire book series. If you are interested in this part of the topic, I highly recommend Ben Thompson’s [article][43] on it. 

With the disclaimer above, here’s what I think will happen in this space in the next 2 to 5 years. 

- **Legal issues around ownership will increase until a good solution comes up** - We already discussed some potential legal issues in this article, if those are not solved, there is a risk of de-railing everything going on in the space. For the copyright ones, I think the grounds for legal action are muddy, to say the least, which might drag these discussions for years before there is actually any real impact on innovation.
- **Dramatical increase in funding for companies working on these problems** – Hype usually means FOMO, which means more money for whoever wants to solve problems in the space (yes, even in the current macroeconomic situation). We are already seeing the early signals around this, with some companies raising some of the biggest seed rounds in history:
	- [StabilityAI, the creators of Stable Diffusion, raised a seed of $101M on a post-money valuation of $1B][44].
	- [Jasper, the creator of a content platform for marketers, raised $125M on a $1.5B valuation][45]
-  **The tech will start being productized as features in existing products** - Some of this tech has the potential to go into image and video editing software today. Companies like [Runway][46] are already creating brand-new products with this tech at their core. Incumbent companies like Adobe already [started to include these tools in their software][47], i.e., Dall-E straight into Adobe Creative Cloud. 
- **All of these areas will start to merge with cohesive results** - I expect to see something happening around this in the next 12 to 18 months. At least some kind of PoC that will merge a minimum of 2 of these areas into something new, i.e., video + audio, or 3D + animation, etc.
- **Games, VR, and the Metaverse** -  I feel like the biggest potential for this technology is how much it can accelerate content creation (once quality is constant, which is still not the case). Games and 3D content are where I see the biggest problem that these models could solve. Think about the amount of time, resources, and money spent to create characters for a game, including conceptualizing, modeling, rigging, animating, etc. AI tools could make the creation of these huge game worlds more effective and efficient.

While we wait to know what will happen across this exciting space, I will keep researching and playing around with these technologies as much as I can. What will you create with these systems? What do you think the impacts of deploying them at scale are? Reach out to me and let me know. 


{{< alert >}}
Note: Meanwhile, I've created an Instagram account to share my Stable Diffusion creations with the web 😬
{{</ alert >}}

</br>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"\><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Art by a Ghost (@artbyaghost)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

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
[16]:	https://www.youtube.com/watch?v=89A4jGvaaKk
[17]:	https://en.wikipedia.org/wiki/DALL-E
[18]:	https://en.wikipedia.org/wiki/DALL-E
[19]:	https://en.wikipedia.org/wiki/Midjourney
[20]:	https://en.wikipedia.org/wiki/Stable_Diffusion
[21]:	https://en.wikipedia.org/wiki/Generative_adversarial_network
[22]:	https://en.wikipedia.org/wiki/Diffusion_model
[23]:	https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[24]:	https://en.wikipedia.org/wiki/Deepfake
[25]:	https://en.wikipedia.org/wiki/Convolutional_neural_network
[26]:	https://en.wikipedia.org/wiki/Recurrent_neural_network
[27]:	https://openai.com/blog/whisper/
[28]:	https://www.openculture.com/2022/10/dall-e-the-new-ai-art-generator-is-now-open-for-everyone-to-use.html
[29]:	https://huggingface.co
[30]:	https://huggingface.co/bigscience/bloom?text=Poor+English%3A+She+no+went+to+the+market.+Corrected+English%3A
[31]:	https://lexica.art/
[32]:	https://prompthero.com/
[33]:	https://runwayml.com
[34]:	https://imagen.research.google/video/
[35]:	https://ai.facebook.com/blog/generative-ai-text-to-video/%0A
[36]:	https://podcast.ai/
[37]:	https://technode.global/2022/10/21/this-startup-allows-you-to-reunite-with-deceased-loved-ones-using-ai-technology/
[38]:	https://githubcopilotinvestigation.com/
[39]:	https://edition.cnn.com/2022/10/21/tech/artists-ai-images
[40]:	https://techcrunch.com/2022/10/07/5-key-ip-considerations-for-ai-startups/
[41]:	https://newsletters.theatlantic.com/galaxy-brain/62fc502abcbd490021afea1e/twitter-viral-outrage-ai-art/
[42]:	https://en.wikipedia.org/wiki/Prompt_engineering
[43]:	https://stratechery.com/2022/the-ai-unbundling/
[44]:	%20https://techcrunch.com/2022/10/17/stability-ai-the-startup-behind-stable-diffusion-raises-101m/%0A
[45]:	https://techcrunch.com/2022/10/18/ai-content-platform-jasper-raises-125m-at-a-1-7b-valuation/
[46]:	https://runwayml.com
[47]:	https://blog.adobe.com/en/publish/2022/10/18/bringing-next-wave-ai-creative-cloud