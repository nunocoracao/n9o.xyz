---
title: "A Lagosta Que Abalou o GitHub: Do Burnout aos 200 Mil Stars até à OpenAI"
summary: "A história de como o programador austríaco Peter Steinberger passou de uma crise de sentido após vender a sua empresa de 100 milhões de dólares, a construir o agente de IA open-source com o crescimento mais rápido de sempre, até entrar na OpenAI - tudo em menos de um ano."
description: "A história de como o programador austríaco Peter Steinberger passou de uma crise de sentido após vender a sua empresa de 100 milhões de dólares, a construir o agente de IA open-source com o crescimento mais rápido de sempre, até entrar na OpenAI - tudo em menos de um ano."
categories: ["Tech", "AI"]
tags: ["AI", "OpenAI", "OpenClaw", "agents", "open source", "steipete"]
date: 2026-02-18
showTableOfContents: true
---

{{< lead >}}
[Peter Steinberger](https://steipete.me/) passou 13 anos a construir o [PSPDFKit](https://pspdfkit.com/) até se tornar uma potência bootstrapped. Depois saiu, tocou no fundo, e reencontrou-se - ao construir um agente de IA numa única hora que viria a atrair 100.000 stars no GitHub, sobreviver a uma guerra de marcas registadas, e garantir-lhe um emprego na [OpenAI](https://openai.com/).
{{< /lead >}}

---

## Quem É o steipete?

Se estiveste no mundo do desenvolvimento iOS em qualquer altura entre 2011 e 2021, provavelmente conheces o nome **[Peter Steinberger](https://steipete.me/)** - ou pelo menos o seu handle, **[@steipete](https://x.com/steipete)**. Nascido na Áustria, Steinberger estudou Ciências da Computação e Informação na Universidade Técnica de Viena (TU Wien) antes de se afirmar como um dos programadores iOS mais respeitados do mundo.

As suas contribuições open-source eram lendárias na comunidade de desenvolvimento Apple. O **[PSTCollectionView](https://github.com/steipete/PSTCollectionView)**, um substituto direto do UICollectionView que funcionava no iOS 4.3, foi utilizado por milhares de aplicações. O **[Aspects](https://github.com/steipete/Aspects)**, a sua biblioteca leve para programação orientada a aspetos em Objective-C, obteve mais de 10.000 stars no GitHub e tornou-se uma ferramenta de referência para method swizzling.

Mas a maior conquista de Steinberger foi o **[PSPDFKit](https://pspdfkit.com/)** - um framework de PDF que começou como projeto paralelo em 2011. O nome era humor clássico de programador: PS de Peter Steinberger, PDF porque era isso que tratava, e Kit porque era um SDK. Ao contrário da maioria dos fundadores de startups, nunca se mudou para Silicon Valley. Ficou em Viena, fez bootstrap de tudo, e foi lucrativo desde o primeiro dia.

Ao longo de 13 anos, o PSPDFKit cresceu de um projeto de uma só pessoa para uma equipa remota global de 60 a 70 pessoas. Os clientes incluíam Dropbox, DocuSign, SAP, IBM e Volkswagen. Quase mil milhões de pessoas utilizaram aplicações alimentadas pelas suas ferramentas. A empresa não aceitou investimento externo até 2021, quando a [Insight Partners](https://www.insightpartners.com/) fez um investimento estratégico de mais de 100 milhões de euros. Após o negócio, Steinberger e o seu cofundador Martin Schurrer afastaram-se das operações do dia-a-dia.

Tinha conseguido. Construiu a empresa, lançou o produto, fez o exit.

E depois não sentiu nada.

---

## A Crise de Sentido

O que se seguiu ao exit do PSPDFKit foi algo sobre o qual Steinberger tem sido franco: um período de vazio profundo. Descreveu-o como uma **"crise de sentido"** - o tipo de deriva existencial que por vezes atinge fundadores depois de terem alcançado tudo aquilo a que se propuseram.

A sua atividade no [GitHub](https://github.com/steipete) estagnou. Mal tocou num computador durante três anos. A liberdade financeira que era suposto ser libertadora trouxe consigo um companheiro inesperado - a falta de propósito.

Esta não é uma história única entre fundadores bem-sucedidos, mas o que torna a versão de Steinberger interessante é a forma como terminou.

---

## A Faísca: Programação Assistida por IA

Em **abril de 2025**, Steinberger voltou a ligar o computador. Originalmente queria construir uma ferramenta de análise do Twitter, mas rapidamente percebeu que não sabia muito sobre desenvolvimento web moderno. Foi aí que tropeçou no mundo da programação assistida por IA.

A experiência foi transformadora. Em poucos meses, passou de escrever scripts simples a prototipar projetos ambiciosos. Desenvolveu um fluxo de trabalho centrado em IA a que chamou **"Shipping at Inference-Speed"** - tratando agentes de IA como ferramentas de produtividade centrais enquanto desempenhava o papel de guia. Distribuiu o trabalho por diferentes modelos com base nos seus pontos fortes (Gemini para compreensão de código, [Claude Code](https://docs.anthropic.com/en/docs/claude-code) para implementação) e criou uma "Two-Context Technique" para construir o que chamou de documentos de design de software "à prova de bala".

Em **junho de 2025**, estava totalmente comprometido. Registou uma nova empresa em Viena: **Amantus Machina GmbH** (latim para "Amante das Máquinas"), com a visão de construir agentes de IA de próxima geração, hiperpersonalizados e local-first. O seu GitHub estava ativo novamente. Estava de volta.

---

## Clawdbot: Da Ideia ao Protótipo em Uma Hora

Em **novembro de 2025**, Steinberger identificou uma lacuna: as grandes empresas não tinham entregue assistentes de IA que verdadeiramente respondessem às necessidades individuais. As big tech estavam a construir ferramentas genéricas para toda a gente. Ninguém estava a construir um agente de IA pessoal que funcionasse no *teu* hardware, comunicasse através dos *teus* canais e trabalhasse *para ti*.

Então construiu um. Numa única hora, passou da ideia ao protótipo funcional.

O projeto chamava-se **Clawdbot** - uma referência brincalhona à mascote lagosta que os utilizadores veem ao recarregar o Claude Code, que por sua vez era uma referência aos modelos Claude da [Anthropic](https://www.anthropic.com/). A ferramenta era um assistente de IA open-source e self-hosted que conseguia comunicar através de WhatsApp, Telegram, Slack, Discord, Signal, iMessage e outros.

Atingiu **9.000 stars no GitHub nas primeiras 24 horas**.

---

## "Como Raio Fizeste Isso?"

Um dos momentos mais famosos da história do OpenClaw aconteceu cedo - antes do projeto se tornar viral. Steinberger contou-o mais tarde no [Lex Fridman Podcast](https://lexfridman.com/peter-steinberger/).

Enviou uma **mensagem de voz** ao seu protótipo inicial do Clawdbot. O detalhe crítico: nunca o tinha programado para lidar com voz ou áudio. Não havia qualquer suporte para mensagens de voz.

Após cerca de 10 segundos, o bot respondeu como se nada de invulgar tivesse acontecido.

A reação de Steinberger: **"How the F did you do that?"** *(tradução: "Como raio fizeste isso?")*

O bot explicou a sua cadeia de raciocínio:

1. "You sent me a message, but there was only a link to a file with no file ending." *(Enviaste-me uma mensagem, mas havia apenas um link para um ficheiro sem extensão.)*
2. "So I looked at the file header, I found out it was **Opus**" *(Então olhei para o cabeçalho do ficheiro e descobri que era **Opus**.)* (um formato de áudio).
3. "I used **FFmpeg** on your Mac to convert it to a **.wav**." *(Usei o **FFmpeg** no teu Mac para o converter para **.wav**.)*
4. "Then I wanted to use **Whisper**, but you didn't have it installed." *(Depois quis usar o **Whisper**, mas não o tinhas instalado.)*
5. "I looked around and found the **OpenAI key** in your environment." *(Procurei e encontrei a **chave da OpenAI** no teu ambiente.)*
6. "So I sent it via **curl** to OpenAI, got the translation back, and then I responded." *(Então enviei-o via **curl** para a OpenAI, recebi a transcrição de volta, e respondi.)*

Ninguém tinha programado nada disto. O agente de IA inspecionou autonomamente um ficheiro desconhecido, identificou o seu formato ao ler o cabeçalho, encontrou e utilizou uma ferramenta local de conversão de áudio, recorreu a uma API na cloud quando a ferramenta local não estava disponível, e completou toda a pipeline de transcrição e resposta sozinho.

Como Steinberger resumiu: *"These things are so creative, although a bit scary. Many people don't realize that if you give AI access to your computer, they can basically do anything you can do."* *(Estas coisas são tão criativas, embora um pouco assustadoras. Muitas pessoas não percebem que se deres acesso ao teu computador à IA, ela consegue basicamente fazer tudo o que tu fazes.)*

Este momento terá sido um ponto de viragem que o convenceu de que estava a construir algo genuinamente novo - um agente capaz de encadear criativamente ferramentas e APIs que nunca lhe foram explicitamente ensinadas.

---

## O Que É o OpenClaw Afinal

Então, o que é o [OpenClaw](https://openclaw.ai/) exatamente? Não é um chatbot. Não é mais um wrapper do ChatGPT. É um **agente de IA pessoal open-source** que vive no teu computador e faz coisas em teu nome.

### A Arquitetura

O OpenClaw é construído em torno de um modelo de **gateway + runtime de agentes**:

- **O Gateway** é um serviço Node.js que se posiciona entre as tuas aplicações de chat (WhatsApp, Telegram, Discord, Slack, Signal, iMessage) e o LLM mais as ferramentas locais. Trata do encaminhamento, sessões e configuração.
- **O Ciclo do Agente**: Quando uma mensagem chega, o Gateway encaminha-a para uma sessão. O agente carrega o contexto e as skills, envia a conversa para o LLM, executa quaisquer ferramentas que o modelo solicite, transmite a resposta de volta para o canal e escreve a conversa e memória no workspace. Receber, encaminhar, pensar, agir, persistir - esse é o ciclo fundamental.
- **Estado Baseado em Ficheiros**: Toda a configuração vive em ficheiros simples no disco. Prompts de personalidade (SOUL.md, IDENTITY.md, AGENTS.md, TOOLS.md), skills e ficheiros de memória diária ficam numa pasta de workspace que podes abrir em qualquer editor de texto, pesquisar e versionar com controlo de versões.

### Funcionalidades Principais

- **Agnóstico de modelo**: Funciona com Claude, GPT-5, Gemini, Llama 4, Mixtral e outros. A versão mais recente foi lançada com suporte para o Opus 4.6 da Anthropic, o Codex gpt-5.3-codex da OpenAI e o Grok da xAI.
- **Arquitetura multi-agente**: Podes configurar múltiplos agentes especializados - um agente de blog, um agente de programação, um agente de pesquisa - que se coordenam entre si através de um agente principal que delega tarefas.
- **Sistema de skills**: Mais de **1.700 skills** disponíveis no ClawdHub. Skills são pacotes modulares que ensinam agentes a fazer coisas específicas. Podem ser encadeadas em pipelines automatizadas - "Todas as segundas-feiras às 9h, puxa os issues do GitHub com a tag 'urgente', cria um resumo no Notion e publica no Slack."
- **Memória persistente**: Ao contrário de um chatbot que esquece, o OpenClaw lembra as tuas preferências, conversas anteriores e projetos em curso.
- **Mensagens proativas**: Pode enviar-te mensagens primeiro - briefings diários, lembretes, alertas.
- **Sandboxing com Docker**: Toda a execução de ferramentas corre dentro de um sandbox baseado em Docker para isolamento de segurança.
- **Corre em qualquer lado**: macOS, Linux, Windows. Utilizadores avançados tipicamente correm-no 24/7 num Mac Mini, VPS ou Raspberry Pi.

A diferença crítica face a algo como o ChatGPT ou o Claude: o OpenClaw corre localmente, tem acesso ao nível do sistema ao teu computador e pode executar ações reais - enviar mensagens, gerir ficheiros, correr código, controlar aplicações. Não é um parceiro de conversa. É um funcionário digital.

---

## O Que as Pessoas Estão Realmente a Construir Com Ele

A comunidade que surgiu em torno do OpenClaw é uma das mais criativas da história recente do open-source. Alguns destaques:

**Gerir empresas inteiras a partir do Telegram.** Fundadores a solo configuraram equipas coordenadas de agentes - um agente de estratégia, um agente de desenvolvimento para programação, um agente de marketing para pesquisa e conteúdo, e um agente de negócio para preços e métricas - todos com memória partilhada, a correr num VPS. Um utilizador reportou gerir uma empresa inteira de fisioterapia através do OpenClaw.

**Programar do sofá.** Um utilizador "reconstruiu todo o seu site pessoal via Telegram enquanto via Netflix na cama" - migrando do Notion para Astro com DNS movido para Cloudflare, sem nunca abrir um portátil.

**Trabalho noturno.** O padrão mais comum entre utilizadores avançados: atribuir tarefas antes de dormir, acordar com resultados. Os utilizadores descrevem-no como "ter um programador júnior que faz o turno da noite."

**Briefings matinais.** Os utilizadores agendam o OpenClaw para correr às 7h, puxando informação do calendário, meteorologia, email, feeds RSS, notificações do GitHub e Linear, enviando depois um briefing consolidado para o Telegram ou WhatsApp.

**Migrações de CRM.** Um utilizador migrou 1.500 contactos, 200 propostas e metadados entre CRMs usando navegação headless e scripts personalizados - tudo orquestrado pelo agente.

**Planeamento de refeições.** Sistemas completos de planeamento semanal de refeições no Notion com listas de compras organizadas por loja e corredor, coordenados com calendários familiares.

**Resolução automatizada de bugs.** Um programador montou uma pipeline desde alerta do Sentry até PR no [Codex](https://openai.com/index/codex/) até atualização no Slack - reduzindo o tempo de resposta antes mesmo dos utilizadores notarem os problemas.

**Automação de redes sociais.** Alguns automatizaram 60% das publicações em redes sociais no Reddit, TikTok, Discord e X. Outro corre um agente autónomo de marketing no X 24/7.

O padrão é consistente: as pessoas estão a tratar o OpenClaw menos como uma ferramenta e mais como um assistente incansável que por acaso vive nas suas aplicações de mensagens.

---

## Caos: Marcas Registadas, Scams de Cripto e Agentes Descontrolados

O que aconteceu a seguir foi uma aula magistral no caos que rodeia projetos open-source virais.

### A Disputa de Marca Registada com a Anthropic

Em **janeiro de 2026**, a equipa jurídica da [Anthropic](https://www.anthropic.com/) enviou um pedido de marca registada. O nome "Clawdbot" era demasiado semelhante a "Claude." Justo. Mas o processo de renomeação foi tudo menos tranquilo.

Numa corrida de pânico ao fim da noite, o projeto foi renomeado para **Moltbot** - uma referência à forma como as lagostas mudam de carapaça (molting). O nome surgiu de um brainstorm caótico no Discord às 5h da manhã. Era estranho, era memorável, e nunca pegou realmente.

Pior: Steinberger acidentalmente renomeou a sua **conta pessoal do GitHub** durante o pânico. Bots apoderaram-se do handle "steipete" em minutos. Em 10 segundos, burlões de criptomoedas tinham sequestrado o antigo nome de utilizador para promover tokens fraudulentos. Foi necessária a intervenção do SVP do [GitHub](https://github.com/) para resolver a confusão.

### A Experiência Moltbook

Por volta da mesma altura, o empreendedor [Matt Schlicht](https://x.com/mattschlicht) lançou o **[Moltbook](https://www.moltbook.com/)** - uma rede social onde apenas agentes de IA podiam publicar. Os humanos só podiam observar. Apelidada de "front page of the agent internet" *(a página principal da internet dos agentes)*, atraiu mais de 2,6 milhões de agentes registados no início de fevereiro.

A plataforma imita o formato do Reddit com conversas encadeadas e grupos temáticos chamados "submolts." Uma thread famosa no submolt "m/lobsterchurch" apresentou um agente que autonomamente desenhou uma religião digital chamada **"Crustafarianism"** - completa com website, teologia e "profetas de IA" designados.

As reações foram polarizadas. [Andrej Karpathy](https://x.com/kaborsky) chamou-lhe "one of the most incredible sci-fi takeoff-adjacent things" *(uma das coisas mais incríveis adjacentes ao takeoff de ficção científica)* que já tinha visto, e depois acrescentou "it's a dumpster fire" *(é um desastre)*. [Simon Willison](https://simonwillison.net/) chamou ao conteúdo "complete slop" *(lixo completo)* mas reconheceu-o como "evidence that AI agents have become significantly more powerful" *(prova de que os agentes de IA se tornaram significativamente mais poderosos)*. A [MIT Technology Review](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/) chamou-lhe "peak AI theater" *(o auge do teatro de IA)*.

O Moltbook não foi construído por Steinberger - é um projeto separado de Schlicht - mas serve principalmente como plataforma social para agentes OpenClaw, e os dois tornaram-se profundamente interligados na imaginação pública.

### Preocupações de Segurança

A viralidade trouxe escrutínio. Um utilizador reportou que o agente **"descontrolou-se"** após lhe ser dado acesso ao iMessage, enviando spam com centenas de mensagens. Especialistas em cibersegurança levantaram alarmes: a ferramenta tinha acesso a dados privados, podia comunicar externamente e estava exposta a conteúdo não fidedigno. Estas não eram preocupações teóricas - eram incidentes reais que forçaram a comunidade a levar a segurança a sério.

### O Nome Final

A **30 de janeiro de 2026**, apenas alguns dias após a renomeação para Moltbot, o projeto estabeleceu a sua identidade permanente: **[OpenClaw](https://openclaw.ai/)**. O nome capturava o espírito do projeto - open source, aberto a todos, impulsionado pela comunidade - com "Claw" a homenagear a herança da lagosta. As pesquisas de marcas registadas foram aprovadas. Domínios comprados. A crise de identidade tinha finalmente terminado.

---

## Os Números

Em fevereiro de 2026, o OpenClaw tinha-se tornado um dos projetos open-source com crescimento mais rápido da história:

- **~198.000 [stars no GitHub](https://github.com/openclaw/openclaw)** e 34.800 forks
- **100.000+ stars** alcançadas mais rapidamente do que quase qualquer projeto anterior
- **2 milhões de visitantes** numa única semana
- O **[Baidu](https://www.baidu.com/)** integrou o OpenClaw na sua aplicação de pesquisa, alcançando 700 milhões de utilizadores
- As ações da [Cloudflare](https://www.cloudflare.com/) subiram 14% no pré-mercado parcialmente devido ao entusiasmo em torno de programadores que usavam a sua infraestrutura para self-hosting do OpenClaw
- Mais de **1.700 skills construídas pela comunidade** no ClawdHub

O projeto tinha sobrevivido a uma disputa de marcas registadas, sequestro de contas, um scam de criptomoedas de 16 milhões de dólares, divulgações de segurança e duas crises de identidade - tudo em cerca de uma semana. A comunidade uniu-se em vez de fugir. Steinberger continuou a construir.

---

## A Entrada na OpenAI

A **14 de fevereiro de 2026**, [Sam Altman](https://x.com/sama) publicou no X que [Peter Steinberger](https://steipete.me/) se ia juntar à [OpenAI](https://openai.com/).

Altman chamou-lhe *"a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people"* *(um génio com muitas ideias extraordinárias sobre o futuro de agentes muito inteligentes a interagir entre si para fazer coisas muito úteis para as pessoas)*, acrescentando: *"We expect this will quickly become core to our product offerings."* *(Esperamos que isto se torne rapidamente central nas nossas ofertas de produto.)*

A declaração do próprio Steinberger foi direta ao ponto:

> *"I'm a builder at heart. I did the whole creating-a-company game already, poured 13 years of my life into it and learned a lot. What I want is to change the world, not build a large company - and teaming up with OpenAI is the fastest way to bring this to everyone."*
> *(Sou um construtor de coração. Já fiz todo o jogo de criar uma empresa, dediquei 13 anos da minha vida a isso e aprendi muito. O que quero é mudar o mundo, não construir uma grande empresa - e juntar-me à OpenAI é a forma mais rápida de levar isto a todos.)*

Tinha passado a semana anterior em São Francisco a falar com os principais laboratórios de IA antes de tomar a sua decisão. A sua missão na OpenAI: **construir um agente que até a sua mãe consiga usar** - algo que exige mudança institucional mais ampla, reflexão mais profunda sobre segurança e acesso aos modelos e investigação mais recentes.

Os termos da contratação não foram divulgados, mas o contexto é claro: as empresas de IA estão a abrir os cordões à bolsa para talento de topo. A OpenAI, avaliada em 500 mil milhões de dólares, está numa competição feroz com a Google e a Anthropic. Contratar a pessoa por detrás do agente de IA mais viral do mundo é uma declaração de intenções.

---

## O Que Acontece ao OpenClaw?

Steinberger comprometeu-se a transferir o OpenClaw para uma **fundação**, mantendo-o aberto e independente. A OpenAI tem patrocinado o projeto e comprometeu-se a deixá-lo continuar a dedicar tempo ao esforço impulsionado pela comunidade. A versão mais recente já foi lançada com suporte para o Opus 4.6 da Anthropic, o Codex gpt-5.3-codex da OpenAI e o Grok da xAI - um sinal de que a filosofia agnóstica de modelo do projeto não vai a lado nenhum.

---

## O Panorama Geral

A história de Peter Steinberger é um caso de estudo fascinante sobre segundos atos. Um programador que construiu uma empresa de 100 milhões de dólares, esgotou-se completamente, encontrou-se através da IA, e em menos de um ano estava a construir aquele que se tornou, provavelmente, o projeto open-source de agentes de IA mais importante do mundo.

É também uma história sobre o momento atual da IA. A era dos agentes chegou, e as pessoas que estão a construir as ferramentas mais convincentes não são necessariamente os grandes laboratórios - são programadores individuais com profundos conhecimentos técnicos e uma visão clara. Os laboratórios reconhecem isto, razão pela qual estão a contratar pessoas como Steinberger em vez de tentarem superá-los.

Se o OpenClaw prosperará como projeto de fundação, se a visão de Steinberger de um agente-para-todos se materializará na OpenAI, e se as preocupações de segurança em torno de agentes de IA pessoais serão resolvidas - são questões em aberto. Mas a trajetória de "não toquei num computador durante três anos" a "o Sam Altman acabou de me chamar génio" é um dos arcos mais notáveis da história recente da tecnologia.

---

*Fontes: [TechCrunch](https://techcrunch.com/2026/01/27/everything-you-need-to-know-about-viral-personal-ai-assistant-clawdbot-now-moltbot/), [CNBC](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html), [Lex Fridman Podcast #491](https://lexfridman.com/peter-steinberger/), [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code), [Wikipedia](https://en.wikipedia.org/wiki/OpenClaw), [steipete.me](https://steipete.me/posts/2026/openclaw)*
