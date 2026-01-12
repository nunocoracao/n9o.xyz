---
title: "AI 101: A Complete Guide to Understanding AI in 2026"
summary: "Everything you need to know about AI—from neural networks to agents to MCP—explained for humans. Whether you're a complete beginner or a developer who wants clarity on the buzzwords, this guide builds your understanding from the ground up."
description: "Everything you need to know about AI—from neural networks to agents to MCP—explained for humans. Whether you're a complete beginner or a developer who wants clarity on the buzzwords, this guide builds your understanding from the ground up."
categories: ["Tech", "AI"]
tags: ["AI", "machine learning", "LLMs", "tutorial", "agents", "MCP"]
date: 2026-01-12
draft: true
showTableOfContents: true
---

{{< lead >}}
AI terminology is a mess. Every week there's a new acronym, a new capability, a new company claiming they've achieved something revolutionary. This guide cuts through the noise and builds your understanding from first principles—whether you're a complete beginner, a PM trying to evaluate AI products, or a developer who wants the buzzwords demystified.
{{< /lead >}}

Let's start at the beginning and work our way up.

## The Nested Circles: AI vs ML vs Deep Learning

You've probably seen the diagram: three concentric circles with AI on the outside, Machine Learning in the middle, and Deep Learning at the core. It's become a cliché, but it's genuinely useful for understanding how these terms relate.

**Artificial Intelligence** is the broadest term. It just means "making computers do things that would require intelligence if humans did them." That's it. A chess program from the 1970s? AI. Your spam filter? AI. A simple if-else rule that decides whether to show you a popup? Technically, AI. The term is so broad it's almost meaningless on its own.

**Machine Learning** is a *subset* of AI where instead of programming explicit rules, you give the computer examples and let it figure out the patterns. Instead of writing "if email contains 'Nigerian prince', mark as spam," you show it 10,000 emails labeled "spam" or "not spam" and let the algorithm learn what makes spam... spammy.

**Deep Learning** is a *subset* of machine learning that uses neural networks with many layers (hence "deep"). This is where things got interesting in the 2010s. Deep learning enabled breakthroughs in image recognition, speech recognition, and eventually the language models we're all obsessed with now.

{{< alert icon="lightbulb" >}}
**Why should I care?** When someone says "we're using AI," that tells you almost nothing. When they say "we fine-tuned a deep learning model," that's much more specific. Understanding these layers helps you ask better questions and spot BS.
{{< /alert >}}

## Neural Networks: What They Actually Are

Here's an analogy that's imperfect but useful: a neural network is like a very complicated spreadsheet with millions of adjustable numbers.

Data goes in one side. It gets multiplied by these numbers, added together, passed through some mathematical functions, and eventually produces an output on the other side. The "learning" part is adjusting all those numbers until the outputs match what you want.

If you want to go deeper: the network is organized into layers. Each layer contains "neurons" (really just mathematical functions). Each neuron takes inputs, multiplies them by weights, adds them up, and passes the result through an activation function. The magic happens because when you stack many layers together, the network can learn incredibly complex patterns—things no human could program by hand.

The term "neural" comes from a loose analogy to biological neurons in the brain. Don't take this too literally. These systems work nothing like actual brains. The metaphor was useful for the original researchers in the 1940s but has become somewhat misleading.

{{< alert icon="circle-info" >}}
**The key insight:** Neural networks are universal function approximators. Given enough neurons and the right training, they can learn to approximate any mathematical function. That's why they're so powerful—and why they can do things like translate languages or generate images, even though no one explicitly programmed those abilities.
{{< /alert >}}

## Training vs Inference: The Two Phases

Every AI system has two distinct phases, and confusing them causes endless misunderstandings.

**Training** is the expensive part. This is when you show the model millions (or billions) of examples and adjust all those internal numbers until the model gets good at its task. Training GPT-4 reportedly cost over $100 million in compute alone. Training happens once (or periodically when you want to update the model).

**Inference** is the cheap part—relatively speaking. This is when you actually *use* the trained model. You give it an input, it produces an output. Every time you chat with ChatGPT, you're doing inference. The model's numbers are frozen; it's just running calculations.

Think of it like education vs. working. Training is years of school and study. Inference is showing up to work and using what you learned. The investment happens upfront; the payoff comes during use.

{{< alert icon="lightbulb" >}}
**Why should I care?** This distinction explains a lot about the AI industry. Training requires massive capital investment (which is why only a few companies can build frontier models). Inference costs are why API pricing exists and why running AI locally is attractive. When people talk about "AI costs," clarify whether they mean training or inference—they're completely different economic models.
{{< /alert >}}

## LLMs: What Makes Them Different

Large Language Models are a specific type of deep learning model trained to predict text. That's the core insight: at their heart, LLMs are just trying to predict the next word (or token) in a sequence.

"The cat sat on the ___" → "mat" (probably)

But here's what's wild: when you train this simple objective on *trillions* of words from the internet, books, code, and scientific papers, something remarkable happens. The model doesn't just learn grammar. It learns facts, reasoning patterns, coding conventions, and even something that looks like common sense.

This is called **emergent behavior**—capabilities that weren't explicitly trained but arose from the scale of training. Nobody programmed GPT-4 to write poetry or solve math problems. Those abilities emerged from the objective of predicting the next token really, really well.

### Transformers and Attention

The architecture that made modern LLMs possible is called the **Transformer**, introduced in a 2017 paper famously titled "Attention Is All You Need."

The key innovation is the **attention mechanism**. Previous models processed text sequentially—word by word, left to right. Attention allows the model to look at *all* the words simultaneously and learn which words are relevant to each other.

Simple example: "The animal didn't cross the street because *it* was too tired."

What does "it" refer to? The animal. But how does the model know? The attention mechanism learns that "it" should attend strongly to "animal" and weakly to "street." This ability to capture long-range dependencies is what makes Transformers so powerful for language.

{{< alert icon="fire" >}}
**Hot take:** The Transformer architecture is one of the most important inventions of the 21st century. It's not just about chatbots—it's now being applied to biology (AlphaFold), robotics, video generation, and more. We're still discovering what this architecture can do.
{{< /alert >}}

## Tokens and Context Windows

LLMs don't actually see words—they see **tokens**. A token is a chunk of text, typically a word or part of a word. "Understanding" might be one token, while "un" + "derstand" + "ing" might be three tokens depending on the model's tokenizer.

Why does this matter? Because models have limited **context windows**—the maximum number of tokens they can process at once. Early GPT-3 had a 4K token context. GPT-4 Turbo expanded to 128K. Claude can handle 200K. Some newer models claim millions.

Think of the context window as the model's working memory. Everything you want the model to consider—your question, any documents you're sharing, the conversation history—needs to fit in this window.

| Model | Context Window | Rough Equivalent |
|-------|---------------|------------------|
| GPT-3 (2020) | 4K tokens | ~3,000 words |
| GPT-4 Turbo | 128K tokens | ~100,000 words |
| Claude 3 | 200K tokens | ~150,000 words |
| Gemini 1.5 Pro | 1M+ tokens | ~750,000 words |

{{< alert icon="lightbulb" >}}
**Why should I care?** Context window size determines what you can do with a model. Need to analyze a 500-page document? You need a big context window. Building a chatbot? A smaller window is fine but you'll need strategies for conversation memory. Token limits also affect cost—you pay per token processed.
{{< /alert >}}

## Prompts and Prompt Engineering

A **prompt** is just the text you send to an LLM. Your question, your instructions, any context you provide—that's all part of the prompt.

**Prompt engineering** is the art (and increasingly, science) of writing prompts that get better results. It sounds silly—"engineering" your questions?—but it genuinely matters.

Some techniques that work:
- **Be specific.** "Write a poem" vs. "Write a 14-line sonnet about climate change in the style of Shakespeare"—the second gets dramatically better results.
- **Show examples.** Give the model a few examples of what you want before asking for the actual output. This is called "few-shot prompting."
- **Think step by step.** Adding "Let's think through this step by step" before a complex problem improves accuracy. This is called "chain-of-thought" prompting.
- **Assign a role.** "You are an expert tax accountant" focuses the model's responses.

{{< alert icon="circle-info" >}}
**Is prompt engineering overhyped?** A little. Models are getting better at understanding imprecise prompts. But for production applications, careful prompt design still makes a significant difference. It's not magic—it's just clear communication.
{{< /alert >}}

## Temperature and Other Parameters

When you use an LLM API, you can adjust several parameters that affect the output. The most important is **temperature**.

Temperature controls randomness. At temperature 0, the model always picks the most probable next token—deterministic, predictable, sometimes boring. At temperature 1 or higher, it's more willing to pick less probable tokens—more creative, more varied, sometimes nonsensical.

- **Temperature 0:** "The capital of France is Paris."
- **Temperature 1:** "The capital of France is Paris, that magnificent city of lights where revolution and romance dance through cobblestone streets..."

Other common parameters:
- **Top-p (nucleus sampling):** Another way to control randomness by limiting which tokens are considered.
- **Max tokens:** How long the response can be.
- **Stop sequences:** Tell the model when to stop generating.
- **Frequency/presence penalty:** Reduce repetition.

{{< alert icon="lightbulb" >}}
**Practical advice:** For factual tasks, code, and anything where accuracy matters—low temperature (0-0.3). For creative writing, brainstorming, or when you want variety—higher temperature (0.7-1.0). There's no universally "correct" setting.
{{< /alert >}}

## Fine-Tuning vs RAG: Two Approaches to Customization

You've got a base LLM. You want to make it better for your specific use case. Two main approaches:

### Fine-Tuning

Take an existing model and continue training it on your own data. The model's weights actually change. After fine-tuning, the model "knows" your information natively.

**Pros:** Fast inference, deep integration of knowledge, can learn new styles or behaviors.
**Cons:** Expensive, requires ML expertise, knowledge can become stale, risk of catastrophic forgetting (model gets worse at other tasks).

### RAG (Retrieval-Augmented Generation)

Keep the model as-is. When a question comes in, first search your knowledge base for relevant documents, then include those documents in the prompt alongside the question.

**Pros:** Cheaper, knowledge stays up-to-date, no training required, easy to audit (you can see what was retrieved).
**Cons:** Slower (two-step process), limited by context window, retrieval quality matters a lot.

{{< alert icon="fire" >}}
**What most companies actually do:** RAG. Fine-tuning sounds cooler but RAG is more practical for most use cases. Fine-tuning is better when you need to change *how* the model behaves (style, format, specific skills). RAG is better when you need to change *what* the model knows.
{{< /alert >}}

## Embeddings and Vector Databases

This is the technology that makes RAG work—and it's genuinely clever.

An **embedding** is a way to represent text (or images, or anything) as a list of numbers—a vector. The magic: similar things have similar vectors. "Dog" and "puppy" have vectors that are close together. "Dog" and "democracy" are far apart.

You create embeddings using embedding models (different from LLMs, though some LLMs have embedding capabilities). OpenAI, Cohere, and many others offer embedding APIs.

A **vector database** is a database optimized for storing and searching these vectors. When you ask "What's our refund policy?", the system:
1. Converts your question to a vector
2. Searches the vector database for similar vectors
3. Returns the documents those vectors represent
4. Feeds those documents into the LLM with your question

Popular vector databases include Pinecone, Weaviate, Chroma, Qdrant, and Milvus. Postgres with pgvector works surprisingly well too.

{{< alert icon="lightbulb" >}}
**Why should I care?** Embeddings are one of the most useful AI primitives. Beyond RAG, they power semantic search, recommendation systems, duplicate detection, and more. If you're building anything with AI, you'll probably use embeddings somewhere.
{{< /alert >}}

## Hallucinations: Why They Happen

LLMs make things up. They state falsehoods with complete confidence. They cite papers that don't exist. They invent statistics. This is called **hallucination**, and it's not a bug that will be fixed—it's a consequence of how these models work.

Remember: LLMs are trained to predict plausible text, not true text. If you ask about a topic where the model has limited training data, it will generate something that *sounds* right. The model has no internal fact-checker, no connection to ground truth, no way to say "I don't know."

Why does this happen?
1. **Training objective:** Predict the next token, not verify truth.
2. **Probability distribution:** The model samples from possibilities. Even if the true answer is most likely, sampling might pick something else.
3. **No knowledge cutoff awareness:** The model doesn't reliably know the boundaries of its knowledge.

Strategies to reduce hallucinations:
- Use RAG to ground responses in actual documents
- Ask the model to cite sources and verify them
- Lower temperature for factual tasks
- Use structured outputs that constrain the response
- Implement fact-checking layers

{{< alert icon="triangle-exclamation" >}}
**This is a hard problem.** Despite years of research, hallucination remains unsolved. Don't trust LLM outputs for anything important without verification. This isn't pessimism—it's engineering best practice.
{{< /alert >}}

## Agents: More Than Just an LLM

The term "agent" gets thrown around a lot. Here's a working definition: an **agent** is an LLM that can take actions in the world, not just generate text.

A chatbot answers your questions. An agent might answer your questions *and* book a restaurant reservation, send an email, query a database, or write and execute code to solve a problem.

What makes something an agent vs. just an LLM?
1. **Goals:** Agents work toward objectives, not just respond to prompts.
2. **Actions:** Agents can do things, not just say things.
3. **Autonomy:** Agents make decisions about *how* to achieve goals.
4. **Loops:** Agents often run in loops—observe, think, act, repeat.

The simplest agent pattern: give an LLM access to tools and let it decide which tools to use. "Find flights from London to Tokyo next week, check my calendar, and book the cheapest option that works with my schedule." The agent breaks this down, calls flight APIs, calls calendar APIs, and executes the booking.

{{< alert icon="fire" >}}
**This is where things get genuinely exciting.** Chat interfaces are useful but limited. Agents that can actually do work—that's transformative. 2025-2026 has been the year agents went from research demos to production systems.
{{< /alert >}}

## Tool Use and Function Calling

For agents to take actions, they need **tools**—functions they can call. This capability is usually called **function calling** or **tool use**.

Here's how it works:
1. You define tools with names, descriptions, and parameters (usually as JSON schemas)
2. You include these definitions in your prompt/API call
3. The model can choose to "call" a tool instead of generating text
4. Your code executes the function and returns results to the model
5. The model uses those results to continue

Example tool definition:
```json
{
  "name": "get_weather",
  "description": "Get current weather for a city",
  "parameters": {
    "type": "object",
    "properties": {
      "city": {"type": "string", "description": "City name"},
      "units": {"type": "string", "enum": ["celsius", "fahrenheit"]}
    },
    "required": ["city"]
  }
}
```

When you ask "What's the weather in Tokyo?", the model doesn't hallucinate—it calls `get_weather(city="Tokyo")`, gets real data, and responds with facts.

Every major model provider now supports function calling: OpenAI, Anthropic, Google, and others. The syntax varies slightly but the concept is the same.

## MCP: The USB-C Moment for AI

**Model Context Protocol (MCP)** is an open standard for connecting AI models to tools and data sources. Think of it as USB-C for AI—a universal connector that means you don't need a different cable for every device.

Before MCP, every integration was custom. Want your AI to access GitHub? Write a GitHub integration. Salesforce? Another integration. Your internal database? Yet another. This doesn't scale.

MCP defines a standard way for AI clients (like Claude, ChatGPT, or your custom agent) to discover and use tools from MCP servers. An MCP server might expose:
- **Tools:** Functions the AI can call
- **Resources:** Data the AI can read
- **Prompts:** Templates for common tasks

The implications are significant:
- Build an MCP server once, every compatible AI can use it
- Tools become portable and reusable
- Security and permissions can be standardized
- The ecosystem compounds—more servers means more capable agents

{{< alert icon="lightbulb" >}}
**Why should I care?** MCP is becoming critical infrastructure. OpenAI, Microsoft, and Google have all announced support. Docker has an MCP catalog with over a million pulls. If you're building AI applications, understanding MCP will soon be as important as understanding REST APIs.
{{< /alert >}}

For more on MCP, I wrote a deeper dive: [MCP Servers: The USB-C Moment for AI Agents](/posts/202504-mcp/).

## Multimodal Models

Early LLMs only understood text. **Multimodal models** understand multiple types of data—text, images, audio, video.

GPT-4V can look at a photo and describe it. Claude can analyze charts and diagrams. Gemini can watch videos. This isn't just novelty—it opens entirely new use cases:

- Screenshot a bug and ask for help debugging
- Upload a handwritten diagram and get code
- Analyze medical images
- Process video for content moderation
- Voice interfaces without separate speech-to-text

The architectures vary. Some models are trained natively multimodal. Others connect separate vision and language models. The distinction matters for performance but not for most users.

{{< alert icon="circle-info" >}}
**Where multimodal gets interesting:** Robotics and embodied AI. When models can see the world and take physical actions, we're in new territory. This is early but progressing fast.
{{< /alert >}}

## Local vs Cloud Models

**Cloud models** run on someone else's servers. You send requests over the internet and pay per use. OpenAI, Anthropic, Google—this is their business.

**Local models** run on your own hardware. Your laptop, your servers, your data center. Data never leaves your control.

Why run locally?
- **Privacy:** Sensitive data stays on-premise
- **Cost:** No API fees (but hardware isn't free)
- **Latency:** No network round trip
- **Availability:** Works offline, no rate limits
- **Control:** No terms of service, no content filters you didn't choose

The gap between local and cloud has shrunk dramatically. Tools like [Ollama](https://ollama.ai) make running models locally trivially easy. Models like Llama 3, Mistral, and Qwen are competitive with cloud offerings for many tasks.

The tradeoff: frontier capabilities still require cloud. If you need the absolute best performance, GPT-4, Claude 3 Opus, or Gemini Ultra are cloud-only. But for many practical applications, local models are good enough.

## Open Source vs Closed Source Models

**Closed source:** You can use the model via API but can't see the weights, modify the architecture, or run it yourself. OpenAI's GPT-4, Anthropic's Claude, Google's Gemini.

**Open source/open weights:** Weights are publicly available. You can download them, run them locally, fine-tune them, modify them. Meta's Llama, Mistral, Alibaba's Qwen, many others.

The distinction is important but nuanced:
- "Open weights" means you can download and run the model
- "Open source" traditionally means the training code and data are also available (rare for large models)
- Licenses vary—some open models have commercial restrictions

Why does Meta release Llama for free? Strategic reasons: commoditize the complement, build ecosystem, attract talent, set standards. The cynical view: they can't compete with OpenAI on API revenue, so they compete by making the model layer free and profiting elsewhere.

{{< alert icon="fire" >}}
**Hot take:** The open vs. closed debate is overblown. Use whatever works for your use case. Open models are great for cost control, customization, and privacy. Closed models often have better capabilities and are easier to get started with. Most production systems will use both.
{{< /alert >}}

## Where to Go From Here

You've made it through the fundamentals. Where next?

### If you want to build things:
- **Start simple.** Use an API (OpenAI, Anthropic, etc.) and build a basic chatbot or RAG system. Don't overthink the stack initially.
- **Try local models.** Install [Ollama](https://ollama.ai) and run Llama or Mistral on your laptop. It's surprisingly easy.
- **Explore agents.** Check out frameworks like LangChain, LlamaIndex, or CrewAI for building agent systems.
- **Learn MCP.** The [official docs](https://modelcontextprotocol.io) are solid. Try running some MCP servers locally.

### If you want to understand the field:
- **Follow the research.** ArXiv papers, Google Scholar alerts on topics you care about.
- **Read the hype critically.** Most "breakthroughs" are incremental. Look for reproducible results and real benchmarks.
- **Experiment yourself.** Intuition about what works comes from hands-on experience, not reading.

### Useful resources:
- [Hugging Face](https://huggingface.co) — Models, datasets, and an incredible community
- [Papers With Code](https://paperswithcode.com) — Research papers with implementations
- [Ollama](https://ollama.ai) — Dead simple local model running
- [LangChain](https://langchain.com) / [LlamaIndex](https://llamaindex.ai) — Popular frameworks for building with LLMs
- [Model Context Protocol](https://modelcontextprotocol.io) — The MCP specification and SDKs

---

AI in 2026 is simultaneously overhyped and underhyped. The technology is genuinely transformative—but it's also genuinely limited. LLMs make things up. Agents are brittle. Costs are high. Progress is fast but uneven.

The best approach is pragmatic: understand the fundamentals, experiment with real problems, stay skeptical of grand claims, and build things. The people who will thrive in this era aren't the ones who can recite every acronym—they're the ones who can ship products that actually work.

Now go build something.
