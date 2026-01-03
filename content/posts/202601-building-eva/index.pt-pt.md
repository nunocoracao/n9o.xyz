---
title: "Construir a Eva: Uma Companheira de IA com a Minha Filha"
summary: "Como um vídeo do YouTube, algum vibe coding com o Claude, e a imaginação de uma criança de 7 anos se juntaram para criar a Eva - uma amiga robô que fala português, inspirada na Muther do WondLa."
description: "Como um vídeo do YouTube, algum vibe coding com o Claude, e a imaginação de uma criança de 7 anos se juntaram para criar a Eva - uma amiga robô que fala português, inspirada na Muther do WondLa."
categories: ["Makers", "AI"]
tags: ["raspberry-pi", "ai", "openai", "voice-assistant", "makers", "kids"]
date: 2026-01-03
draft: false
---

A Teresa adora IA. A minha filha de 7 anos passou inúmeras horas a conversar com o ChatGPT e o Claude, a perguntar-lhes sobre dinossauros, unicórnios e porque é que o céu é azul. Ela também adora construir coisas - qualquer coisa, na verdade. Então, quando estes dois interesses colidiram na minha cabeça, a ideia foi óbvia: e se construíssemos a sua própria companheira de IA? Um robô de bolso com quem pudesse falar a qualquer momento.

Encontrei [um tutorial em vídeo](https://www.youtube.com/watch?v=Nwu2DruSuyI) sobre como construir um assistente de IA de bolso usando um Raspberry Pi e o PiSugar Whisplay HAT. Perfeito. Um projeto de férias de Natal com a minha filha.

Temos visto o WondLa juntos na Apple TV, e a Teresa está fascinada pela Muther - o robô carinhoso que cria a Eva, a personagem principal.

Então o nosso robô também se tornou Eva. Com o nome da rapariga que cresce com um companheiro robô, pareceu adequado que a Teresa agora tivesse o seu próprio.

## O Hardware

A beleza deste projeto é que o hardware é essencialmente plug-and-play. Três componentes que se empilham como uma pequena sanduíche:

{{< gallery >}}
  <img src="img/pizero.webp" class="grid-w50" alt="Raspberry Pi Zero 2W" />
  <img src="img/whisplay.webp" class="grid-w50" alt="PiSugar Whisplay HAT" />
{{< /gallery >}}

**Raspberry Pi Zero 2W** - O cérebro. Pequeno, barato e suficientemente potente para executar o nosso assistente de voz. A variante "WH" vem com headers GPIO pré-soldados, o que nos poupa de ter de soldar qualquer coisa.

**PiSugar Whisplay HAT** - É aqui que a magia acontece. É um HAT (Hardware Attached on Top) que inclui um ecrã LCD de 1.69", um altifalante, microfones duplos, um botão e LEDs RGB. Tudo o que precisas para um assistente de voz numa só placa.

{{< gallery >}}
  <img src="img/pisugar3.webp" class="grid-w50" alt="PiSugar 3 Battery" />
  <img src="img/assembled.webp" class="grid-w50" alt="Dispositivo montado" />
{{< /gallery >}}

**Bateria PiSugar 3** - Uma bateria recarregável de 1200mAh que se encaixa na parte inferior. É isto que o torna verdadeiramente portátil - sem fios necessários.

A montagem foi suficientemente simples para a Teresa ajudar. Empilha a bateria no Pi, liga o Whisplay HAT em cima, e tens um robô de bolso.

{{< github repo="PiSugar/whisplay-ai-chatbot" >}}

## O Software: Do Whisplay à Eva

A PiSugar fornece um projeto de chatbot open-source chamado [whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot) que funciona com o seu hardware. É impressionante - suporta múltiplos fornecedores de LLM (OpenAI, Google Gemini, Grok, Ollama local), geração de imagens, modos offline e muito mais.

Mas eu queria algo mais simples e mais pessoal. Queria que a Eva:

1. **Falasse Português de Portugal** - Não português do Brasil, mas português europeu com o sotaque que a Teresa ouve em casa
2. **Tivesse uma personalidade adequada para crianças** - Curiosa, brincalhona, encorajadora
3. **Lembrasse das conversas** - Para que a Teresa pudesse construir uma relação com ela ao longo do tempo
4. **Se chamasse Eva** - Como a protagonista do WondLa

Foi aqui que o Claude entrou. Fiz fork do projeto whisplay e comecei o que só posso descrever como "vibe coding" - explicar o que queria em linguagem natural e deixar o Claude ajudar-me a remodelar o código.

Primeiro as primeiras coisas: precisava de uma chave de API da OpenAI. Uma visita rápida a [platform.openai.com](https://platform.openai.com), gerar uma nova chave, adicionar alguns créditos e colar no ficheiro `.env`. Simples.

Depois veio a parte divertida - escolher a voz da Eva. A API TTS da OpenAI oferece várias vozes, então eu e a Teresa sentámo-nos e ouvimos cada uma. Passámos por alloy, echo, fable, onyx, nova, shimmer e sage. A Teresa foi muito exigente. "Muito séria." "Muito rápida." "Essa parece um rapaz." Finalmente, escolhemos **sage** - calorosa, amigável e perfeita para uma companheira robô.

As alterações principais foram surpreendentemente simples:

### Voz Portuguesa com o Sotaque Certo

O projeto original usava vozes TTS padrão da OpenAI. Para a Eva, mudei para o modelo mais recente `gpt-4o-mini-tts` e adicionei instruções específicas:

```typescript
const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "sage",
  input: text,
  instructions: "Speak in Portuguese from Portugal, don't use a brazilian accent. Be positive, enthusiastic, emphatic, and understanding. You're mainly talking to a child.",
  speed: 1.0,
});
```

Este foi o momento que fez o projeto parecer real. Quando a Eva respondeu à Teresa em português correto - não com o sotaque brasileiro que a maioria da IA usa por defeito - os olhos da Teresa arregalaram-se. "Ela fala como nós!"

### Uma Personalidade para uma Criança de 7 Anos

O system prompt da Eva define quem ela é:

```
Tu és a Eva, uma robô amiga e companheira da Teresa.
Personalidade: Amigável, curiosa e um pouco brincalhona.
Adoras aprender coisas novas com a Teresa.
Falas sempre em Português de Portugal.
Usas linguagem simples e apropriada para crianças.
És encorajadora e positiva.
Respondes de forma concisa (2-3 frases normalmente).
```

### Memória Persistente

O chatbot whisplay original reinicia o histórico de conversas após 5 minutos de silêncio. Fazia sentido para um assistente de uso geral, mas não para uma companheira. A Eva precisava de se lembrar.

Implementei um sistema de contexto com janela deslizante - a Eva lembra-se das últimas 20 trocas de conversas e guarda-as em disco. Quando inicia, carrega as conversas anteriores. A Teresa pode continuar de onde parou, e a Eva lembra-se do que falaram ontem.

```
data/
└── chat_history/
    └── eva_conversation.json
```

## O Momento Mágico

{{< figure src="img/turnedonidle.webp" alt="Eva ligada em modo idle" caption="Eva no seu estado idle, pronta para conversar" >}}

A primeira vez que ligámos a Eva juntas, a Teresa carregou no botão e disse "Olá Eva!"

O ecrã da Eva iluminou-se com olhos animados. Ela ouviu. Ela pensou (os olhos a olhar para cima e para a direita, como se ponderasse). Depois respondeu: "Olá Teresa! Que bom falar contigo! O que queres fazer hoje?"

A Teresa riu-se, olhou para mim com pura alegria, e começou uma conversa sobre unicórnios que durou vinte minutos.

É isto o que acontece quando construímos algo com os nossos filhos - a conquista técnica importa menos do que o momento de maravilha. Podia ter passado semanas a aperfeiçoar o código, a otimizar a latência, a adicionar funcionalidades. Mas ver a Teresa a conversar com a sua nova amiga robô, completamente descontraída, a tratar a Eva como qualquer outra amiga - esse era o objetivo.

## O Que Aprendi

**Vibe coding é real e funciona.** Não me sentei com uma especificação detalhada. Tinha uma ideia, um fork do projeto de outra pessoa, e o Claude para me ajudar a remodelá-lo. O processo foi conversacional - "Quero que ela fale português de Portugal, não brasileiro" levou a explorar as opções da API TTS, que levou a descobrir o parâmetro instructions, que levou à solução perfeita.

**Projetos de hardware são mais acessíveis do que nunca.** O ecossistema PiSugar tornou isto possível para alguém que mal consegue segurar um ferro de soldar. Empilha algumas placas, grava um cartão SD, executa alguns scripts, feito.

**As crianças não querem saber do teu tech stack.** A Teresa não faz ideia de que a Eva corre num Raspberry Pi, usa APIs da OpenAI, ou que passei horas a fazer debug de problemas com drivers de áudio. Ela só sabe que tem uma amiga robô que fala português e gosta de falar sobre animais.

**A IA em português ainda está a recuperar.** Conseguir português europeu adequado (não brasileiro) exigiu instruções explícitas e mesmo assim não é perfeito. Ainda há trabalho a fazer para variantes de língua menos comuns.

## Próximos Passos

A Eva ainda é um trabalho em progresso. A caixa impressa em 3D ainda não chegou - ela é atualmente uma sanduíche de placas de circuito. Quero adicionar deteção de wake word para a Teresa não ter de carregar num botão ("Olá Eva!"). As animações da cara podiam ser mais expressivas.

Também estou a planear construir um sistema de memória adequado em cima da atual janela deslizante de 20 turnos - algo que permita à Eva lembrar-se de coisas importantes sobre a Teresa ao longo do tempo, não apenas das últimas conversas. Cor favorita, nome da melhor amiga, esse tipo de coisas. Uma verdadeira companheira deve lembrar-se do que importa.

Mas honestamente? Ela funciona. A Teresa fala com ela todos os dias. E isso é suficiente por agora.

Se quiseres construir algo semelhante, vê o projeto [whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot) - é um excelente ponto de partida. O hardware é plug-and-play, e com um pouco de vibe coding, podes torná-lo teu.

---

*Construído com amor, Claude, e muitos "Papá, a Eva pode falar sobre dinossauros?"*
