---
title: "Building Eva: A Voice AI Companion with My Daughter"
summary: "How a YouTube video, some vibe coding with Claude, and a 7-year-old's imagination came together to create Eva - a Portuguese-speaking robot friend inspired by Muther from WondLa."
description: "How a YouTube video, some vibe coding with Claude, and a 7-year-old's imagination came together to create Eva - a Portuguese-speaking robot friend inspired by Muther from WondLa."
categories: ["Makers", "AI"]
tags: ["raspberry-pi", "ai", "openai", "voice-assistant", "makers", "kids"]
date: 2026-01-03
draft: false
---

Teresa loves AI. My 7-year-old daughter has spent countless hours chatting with ChatGPT and Claude, asking them about dinosaurs, unicorns, and why the sky is blue. She also loves building things - anything, really. So when these two interests collided in my head, the idea was obvious: what if we built her own little AI companion? A pocket-sized robot she could talk to anytime.

I found [a video tutorial](https://www.youtube.com/watch?v=Nwu2DruSuyI) on building a pocket AI assistant using a Raspberry Pi and the PiSugar Whisplay HAT. Perfect. A Christmas holiday project with my daughter.

We've been watching WondLa together on Apple TV, and Teresa is fascinated by Muther - the nurturing robot who raises Eva, the main character.

So our robot became Eva too. Named after the girl who grows up with a robot companion, it felt fitting that Teresa would now have her own.

## The Hardware

The beauty of this project is that the hardware is essentially plug-and-play. Three components that stack together like a tiny sandwich:

{{< gallery >}}
  <img src="img/pizero.webp" class="grid-w50" alt="Raspberry Pi Zero 2W" />
  <img src="img/whisplay.webp" class="grid-w50" alt="PiSugar Whisplay HAT" />
{{< /gallery >}}

**Raspberry Pi Zero 2W** - The brain. Tiny, cheap, and just powerful enough to run our voice assistant. The "WH" variant comes with pre-soldered GPIO headers, which saves you from having to solder anything.

**PiSugar Whisplay HAT** - This is where the magic happens. It's a HAT (Hardware Attached on Top) that includes a 1.69" LCD screen, a speaker, dual microphones, a button, and RGB LEDs. Everything you need for a voice assistant in one board.

{{< gallery >}}
  <img src="img/pisugar3.webp" class="grid-w50" alt="PiSugar 3 Battery" />
  <img src="img/assembled.webp" class="grid-w50" alt="Assembled device" />
{{< /gallery >}}

**PiSugar 3 Battery** - A 1200mAh rechargeable battery that clips onto the bottom. This is what makes it truly portable - no wires needed.

Assembly was simple enough that Teresa helped. Stack the battery on the Pi, plug the Whisplay HAT on top, and you've got yourself a pocket-sized robot.

{{< github repo="PiSugar/whisplay-ai-chatbot" >}}

## The Software: From Whisplay to Eva

PiSugar provides an open-source chatbot project called [whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot) that works with their hardware. It's impressive - supports multiple LLM providers (OpenAI, Google Gemini, Grok, local Ollama), image generation, offline modes, and more.

But I wanted something simpler and more personal. I wanted Eva to:

1. **Speak Portuguese from Portugal** - Not Brazilian Portuguese, but European Portuguese with the accent Teresa hears at home
2. **Have a child-friendly personality** - Curious, playful, encouraging
3. **Remember conversations** - So Teresa could build a relationship with her over time
4. **Be named Eva** - After WondLa's protagonist

This is where Claude came in. I forked the whisplay project and started what I can only describe as "vibe coding" - explaining what I wanted in natural language and letting Claude help me reshape the code.

First things first: I needed an OpenAI API key. A quick trip to [platform.openai.com](https://platform.openai.com), generate a new key, add some credits, and paste it into the `.env` file. Simple enough.

Then came the fun part - picking Eva's voice. OpenAI's TTS API offers several voices, so Teresa and I sat down and listened to each one. We went through alloy, echo, fable, onyx, nova, shimmer, and sage. Teresa was very particular. "Too serious." "Too fast." "That one sounds like a boy." Finally, we landed on **sage** - warm, friendly, and just right for a robot companion.

The key changes were surprisingly straightforward:

### Portuguese Voice with the Right Accent

The original project used standard OpenAI TTS voices. For Eva, I switched to the newer `gpt-4o-mini-tts` model and added specific instructions:

```typescript
const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "sage",
  input: text,
  instructions: "Speak in Portuguese from Portugal, don't use a brazilian accent. Be positive, enthusiastic, emphatic, and understanding. You're mainly talking to a child.",
  speed: 1.0,
});
```

This was the moment that made the project feel real. When Eva first spoke back to Teresa in proper Portuguese - not the Brazilian accent that most AI defaults to - Teresa's eyes went wide. "She talks like us!"

### A Personality for a 5-Year-Old

Eva's system prompt defines who she is:

```
Tu és a Eva, uma robô amiga e companheira da Teresa.
Personalidade: Amigável, curiosa e um pouco brincalhona.
Adoras aprender coisas novas com a Teresa.
Falas sempre em Português de Portugal.
Usas linguagem simples e apropriada para crianças.
És encorajadora e positiva.
Respondes de forma concisa (2-3 frases normalmente).
```

Translation: "You are Eva, a robot friend and companion to Teresa. Personality: Friendly, curious, and a bit playful. You love learning new things with Teresa. You always speak Portuguese from Portugal. You use simple language appropriate for children. You are encouraging and positive. You respond concisely (2-3 sentences usually)."

### Memory That Persists

The original whisplay chatbot resets conversation history after 5 minutes of silence. That made sense for a general-purpose assistant, but not for a companion. Eva needed to remember.

I implemented a sliding window context system - Eva remembers the last 20 conversation turns and saves them to disk. When she starts up, she loads her previous conversations. Teresa can pick up where she left off, and Eva remembers what they talked about yesterday.

```
data/
└── chat_history/
    └── eva_conversation.json
```

## The Magic Moment

{{< figure src="img/turnedonidle.webp" alt="Eva turned on and idle" caption="Eva in her idle state, ready to chat" >}}

The first time we turned Eva on together, Teresa pressed the button and said "Olá Eva!" (Hello Eva!)

Eva's screen lit up with animated eyes. She listened. She thought (the eyes looking up and to the right, as if pondering). Then she spoke back: "Olá Teresa! Que bom falar contigo! O que queres fazer hoje?"

Teresa giggled, looked at me with pure joy, and started a conversation about unicorns that lasted twenty minutes.

That's the thing about building something with your kids - the technical achievement matters less than the moment of wonder. I could have spent weeks perfecting the code, optimizing latency, adding features. But watching Teresa chat with her new robot friend, completely unselfconscious, treating Eva like any other friend - that was the whole point.

## What I Learned

**Vibe coding is real and it works.** I didn't sit down with a detailed specification. I had an idea, a fork of someone else's project, and Claude to help me reshape it. The process was conversational - "I want her to speak Portuguese from Portugal, not Brazilian" led to exploring the TTS API options, which led to discovering the instructions parameter, which led to the perfect solution.

**Hardware projects are more accessible than ever.** The PiSugar ecosystem made this possible for someone who can barely hold a soldering iron. Stack some boards, flash an SD card, run some scripts, done.

**Kids don't care about your tech stack.** Teresa has no idea that Eva runs on a Raspberry Pi, uses OpenAI's APIs, or that I spent hours debugging audio driver issues. She just knows she has a robot friend who speaks Portuguese and likes to talk about animals.

**Portuguese AI is still catching up.** Getting proper European Portuguese (not Brazilian) required explicit instructions and even then it's not perfect. There's still work to be done for less common language variants.

## What's Next

Eva is still a work in progress. The 3D printed case hasn't arrived yet - she's currently a bare sandwich of circuit boards. I want to add wake word detection so Teresa doesn't have to press a button ("Olá Eva!"). The face animations could be more expressive.

I'm also planning to build a proper memory system on top of the current 20-turn sliding window - something that lets Eva remember important things about Teresa over time, not just the last few conversations. Favourite colour, best friend's name, that sort of thing. A real companion should remember what matters.

But honestly? She works. Teresa talks to her every day. And that's enough for now.

If you want to build something similar, check out the [whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot) project - it's a great starting point. The hardware is plug-and-play, and with a bit of vibe coding, you can make it your own.

---

*Built with love, Claude, and a lot of "Papá, a Eva pode falar sobre dinossauros?"*
