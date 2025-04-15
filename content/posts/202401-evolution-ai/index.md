---
title: "Evolution of AI and Amara's Law"
summary: "We tend to overestimate the effect of a technology in the short run and underestimate the effect in the long run."
description: "We tend to overestimate the effect of a technology in the short run and underestimate the effect in the long run."
categories: ["Product", "Strategy", "AI", "Future"]
tags: ["AI", "future", "technology"]
date: 2024-01-15
draft: false
series: ["The New AI Hype"]
series_order: 4
seriesOpened: false
---


> “We tend to overestimate the effect of a technology in the short run and underestimate the effect in the long run.”  
> — <cite> Roy Amara [^1]</cite>

It’s unquestionable the impact AI had in the world in the last year. Back in October 2022, I wrote about the fast-paced evolution of AI and how everything that was possible at the time felt like magic. Given everything that happened since then, I think it deserves a follow-up. 

{{< article link="/posts/202210-the-new-ai-hype/" >}}

Last time I focused on the technology itself, what advancements were key to enabling GPTs, and made some predictions about the future. Some spot on, some maybe not. One year ago, the main topic was the sudden rise of AI applications since the creation of [transformers][1]. Since then, the speed of innovation hasn’t decreased one bit, quite the opposite. Investment in the area has grown massively in the last year, and everyone is thinking about how to _leverage_ AI and be the one to win the ongoing race. 

## Where we are
The AI landscape has dramatically evolved over the last year, marked by significant investments, technological advancements, and a surge in AI applications across various sectors. At this stage, the entire tech industry is in an aggressive race to figure out these new technologies and create/integrate them as soon as possible. 

### OpenAI and Microsoft
OpenAI's collaboration with Microsoft, marked by substantial investments, has led to groundbreaking developments like [GPT-4][2], the [OpenAI API][3], and the [GPT Store][4]. The financial infusion from Microsoft ([$13B][5]) not only catalyzes technological advancements but also opens new revenue ([estimated at $1.3B with OpenAI valued at $86.00B][6]) streams through these AI products. Sam Altman's modest lifestyle, despite OpenAI's immense success, symbolizes a culture focused more on technological advancement and ethical considerations than on lavish lifestyles. This partnership is reshaping the industry, setting new standards for AI capabilities and applications in various sectors, from customer service to software development.

### Nvidia
Nvidia's role as the leading hardware provider for AI models is pivotal. The surge in [their stock price][7] reflects the critical demand for their GPUs, necessary for training and running AI models. By providing the hardware backbone for AI, Nvidia is enabling the rapid expansion of AI applications across industries, from healthcare to finance, ensuring that the infrastructure for AI is robust and scalable.

![Alt text][image-1]

### Google
Google's launch of its [AI models][8] signifies its determination to remain at the forefront of technological innovation. These models, rivaling those of OpenAI, indicate a competitive market that drives rapid advancements in AI. Google's entry also ensures that AI technology continues to evolve, pushing the boundaries of machine learning and data processing capabilities. This competition is crucial for the industry, ensuring a continuous improvement in AI technologies.

### Amazon
Amazon has made significant strides in AI, marked by its investments in [Anthropic][9], the launch of [Bedrock][10], and the development of [Titan models][11]. Anthropic's focus on AI safety and alignment represents a forward-thinking approach to AI development, aligning with Amazon's commitment to responsible AI. The Bedrock model, a large-scale language model, extends Amazon's capabilities in natural language processing, enhancing customer experience and operational efficiency. Titan models, known for their advanced computational power, further Amazon's prowess in deep learning, enabling more robust and sophisticated AI applications. These investments and developments underscore Amazon's dedication to leading in AI innovation and application, significantly impacting various aspects of technology and business.

### Meta
Meta's [contribution to open-source AI models][12], coupled with technologies like [Ollama][13], is a game-changer. By enabling the local operation of powerful AI models, these initiatives democratize AI, allowing smaller companies and individual developers to run, train, and host their models or leverage open-source ones. This shift reduces reliance on big tech companies, fostering innovation and creativity across the board, and giving rise to a new wave of AI-driven applications and startups. Meta is not only interested in OSS and seems to be coming for OpenAI with the latest news on [building a chip arsenal][14].

### Hugging Face and OSS
[Hugging Face][15] has emerged as a pivotal force in the open-source AI movement, championing accessibility and collaborative innovation. It's a platform where groundbreaking open-source models like [Mistral][16] and [Orca][17] are made readily available, breaking down traditional barriers in AI development. These models exemplify the power of open-source AI, offering advanced capabilities similar to those of major tech firms. This revolution allows a diverse array of developers, researchers, and smaller organizations not just to access cutting-edge AI technology, but to actively contribute to its evolution. Beyond mere access, Hugging Face fosters a dynamic environment of shared progress and innovation. By providing access to such powerful tools, Hugging Face and its counterparts are accelerating the pace of AI development, allowing a wider community to drive advancements and apply AI in novel and impactful ways. This inclusive model of growth ensures a rapid evolution of AI technologies, broadening the scope and scale of their application far beyond what proprietary models could achieve alone.

### Image and Video Magic
Tools like [RunwayML][18], [Midjourney][19], [Pika][20], [Kaiber][21], [Invoke][22], and so many others are transforming the creative industries. By enabling the generation of high-quality images and videos, these platforms are altering how artists, designers, and media professionals work, making complex visual creations more accessible and efficient. This revolution in digital art and media production is enhancing creativity and changing the landscape of advertising, entertainment, and visual communications.



### Startups in the AI Race
The AI landscape is bustling with startups that are rapidly gaining traction (and investment), each bringing unique innovations to the field:

- **[Cohere][23]**: Specializes in natural language understanding and generation, offering tools that enhance AI's ability to interpret and respond to human language.
- [Perplexity AI][24]: This startup is making strides in AI-powered search and information retrieval. Perplexity AI focuses on enhancing the precision and relevance of search results.
- **[Anthropic][25]**: Focuses on AI safety and alignment, working towards creating AI systems that are reliable and align with human values.
- **[Mistral][26]**: Known for its contributions in the field of AI, particularly in enhancing the efficiency and effectiveness of AI models.
- **[Stability][27]**: Develops AI solutions aimed at stabilizing and improving the performance of various AI applications.
- **[Inflection][28]**: Works on refining AI's decision-making processes, making it more context-aware and responsive to real-world scenarios.
- **[Adept][29]**: Concentrates on AI learning and adaptation, ensuring AI systems can learn and evolve with changing environments.
- **[Contextual AI][30]**: Aims at enhancing the contextual understanding of AI, allowing for more nuanced and accurate interactions in various applications.

These startups are not only contributing to the advancement of AI technology, but also shaping the future of how AI is integrated and utilized across different industries.

### RAG Applications
The increasing use of [Retrieval-Augmented Generation (RAG)][31] techniques marks a significant evolution in AI applications. By combining language models with external knowledge sources, RAG enables more sophisticated and contextually aware AI systems. This has led to a rise in innovative applications across sectors, improving the capabilities of AI in areas like customer interaction, content curation, and decision support systems. The widespread adoption of RAG is a testament to the growing sophistication and practical utility of AI in real-world scenarios. The most used tools in this space are [llamaindex][32] and [langchain][33].

## Concerns
The rapid advancement of AI technology has brought forth several concerns that are shaping the current discourse in the industry.

### Lack of Knowledge, AGI, and Alignment
The understanding of how neural networks, particularly those powering advanced AI systems, operate is still limited. This lack of comprehensive knowledge feeds into the fears surrounding the achievement of Artificial General Intelligence (AGI) — an AI with the ability to understand, learn, and apply its intelligence to a wide range of problems, akin to human intelligence. There's a concern that AGI could lead to unforeseen and potentially catastrophic outcomes. For example, former OpenAI employee Paul Christiano estimates a [10-20% chance of an AI takeover leading to a significant human catastrophe][34]. This aligns with the broader concern of AI alignment, ensuring AI objectives are harmonizing with human values and intentions. Christiano's comments emphasize the gravity of these concerns, as he highlights the potential risks once AI surpasses human-level intelligence​​.

### Copyright Issues
As AI models are often trained on publicly available data, including content from the internet, copyright concerns, particularly regarding artistic work, have emerged. These issues arise from the AI's ability to generate content that closely resembles original human creations, blurring the lines of authorship and intellectual property rights. The [ensuing legal battles][35] and discussions underscore the need for clear guidelines and regulations in this area.

### Business Model and Sustainability
Despite the substantial revenues generated by companies like OpenAI, the path to profitability remains unclear. The high operational expenses associated with running sophisticated AI models, such as ChatGPT, pose a significant financial challenge. For instance, it's reported that OpenAI may face difficulties sustaining its operations due to the high daily costs of running ChatGPT (estimated between [$100K ][22]to [$700K][36] per day). This situation highlights a broader concern in the AI industry: while there's a race to advance and deploy AI technologies, the financial sustainability of these endeavors is not always certain. The industry might be heading towards a 'race to the bottom', where the pursuit of technological advancement overshadows the economic viability.

Other concerns include ethical considerations, such as biases in AI algorithms and the potential misuse of AI technologies. Privacy issues are also paramount, as AI systems often require large amounts of data, which might include sensitive personal information. All of these illustrate the complex landscape of AI development and deployment, where the excitement and potential of technological breakthroughs are tempered by significant ethical, legal, and financial challenges.


## What now?

Amara’s law, coined by Roy Amara, a respected researcher and futurist, states:  
  
> “We tend to overestimate the effect of a technology in the short run and underestimate the effect in the long run.”  
> — <cite> Roy Amara [^2]</cite>  
>  
This perspective offers a nuanced framework for understanding the evolution of AI — separating the immediate hype from the long-term reality. 

![Alt text][image-2]

### Short-Term Perspectives
In the short term, the excitement surrounding AI's capabilities can typically lead to inflated expectations. As we've seen with advancements in models like GPT-4, the promise of immediate transformation in industries like customer service, content creation, and even healthcare is compelling. However, this enthusiasm can sometimes overshadow the current limitations of AI, including issues of reliability, ethical dilemmas, and the technology's nascent state. We tend to anticipate rapid and sweeping changes, but the reality is often more complex and gradual. The immediate future of AI is more about incremental improvements and finding effective ways to integrate these technologies into existing systems responsibly and ethically.

### Long-Term Projections
Looking at the long-term impact of AI, we might be underestimating its potential transformative effects. The gradual refinement and integration of AI technologies could lead to profound changes in how we live and work. Over time, AI could reshape entire industries, revolutionize scientific research, and alter the fabric of social interactions. The potential for AI to address complex global challenges, enhance human capabilities, and even redefine aspects of human experience is immense. Eventually, AI could be the cornerstone of major breakthroughs in fields like environmental conservation, medicine, and space exploration, shaping a currently hard future to fully envision.

### Conclusion
Amara's law aptly captures the dichotomy in our perception of technological advancements like AI. As we navigate the short-term challenges and excitement, it's crucial to maintain a balanced perspective, acknowledging both the current limitations and the vast potential. The journey of AI is a marathon, not a sprint. It requires careful consideration, ethical stewardship, and a commitment to ongoing research and development. As we stand now, the future of AI holds both great promise and significant responsibility. It's up to us to steer this technology towards outcomes that benefit humanity while mitigating risks and ensuring equitable and ethical use.







[^1]:	https://deviq.com/laws/amaras-law

[^2]:	https://deviq.com/laws/amaras-law

[1]:	https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[2]:	https://openai.com/research/gpt-4
[3]:	https://openai.com/blog/openai-api
[4]:	https://openai.com/blog/introducing-the-gpt-store
[5]:	https://www.cnbc.com/2023/04/08/microsofts-complex-bet-on-openai-brings-potential-and-uncertainty.html
[6]:	https://sacra.com/c/openai/
[7]:	https://www.google.com/finance/quote/NVDA:NASDAQ?sa=X&ved=2ahUKEwiJk4r0y--DAxVyT6QEHdpoDiwQ3ecFegQIZRAf&window=5Y
[8]:	https://blog.google/technology/ai/google-gemini-ai/
[9]:	https://www.aboutamazon.com/news/company-news/amazon-aws-anthropic-ai
[10]:	https://aws.amazon.com/bedrock/
[11]:	https://aws.amazon.com/bedrock/titan/
[12]:	https://ai.meta.com/resources/models-and-libraries/
[13]:	https://ollama.ai
[14]:	https://www.reuters.com/technology/meta-bringing-together-ai-research-product-teams-2024-01-18/
[15]:	https://huggingface.co
[16]:	https://mistral.ai
[17]:	https://huggingface.co/microsoft/Orca-2-13b
[18]:	https://runwayml.com
[19]:	https://www.midjourney.com
[20]:	https://pika.art
[21]:	https://kaiber.ai
[22]:	https://www.invoke.com
[23]:	https://cohere.com
[24]:	https://www.perplexity.ai
[25]:	https://www.anthropic.com
[26]:	https://mistral.ai
[27]:	https://stability.ai
[28]:	https://inflection.ai
[29]:	https://www.adept.ai
[30]:	https://contextual.ai
[31]:	https://research.ibm.com/blog/retrieval-augmented-generation-RAG
[32]:	https://www.llamaindex.ai
[33]:	https://www.langchain.com
[34]:	https://finance.yahoo.com/news/former-openai-researcher-50-chance-204059274.html
[35]:	https://www.techtarget.com/whatis/feature/AI-lawsuits-explained-Whos-getting-sued
[36]:	https://www.businessinsider.com/how-much-chatgpt-costs-openai-to-run-estimate-report-2023-4

[image-1]:	img/nvidiastock.png "Nvidia stock price in the last 5 years - almost 500% growth"
[image-2]:	img/amara.png "Amara's Law - orange actual benefit, blue perceived benefit"