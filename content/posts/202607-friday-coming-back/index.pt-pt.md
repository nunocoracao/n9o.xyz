---
title: "Apresento a Friday: a assistente que construí em terreno meu"
summary: "Depois da Donna, passei um mês a construir a sucessora dela da maneira certa: hardware meu, infraestrutura minha, modelos redundantes, acesso cuidadosamente delimitado às partes da minha vida que precisam de atenção. Esta é a Friday, e desta vez é ela que ajuda a contar a história."
description: "Depois da Donna, passei um mês a construir a sucessora dela da maneira certa: hardware meu, infraestrutura minha, modelos redundantes, acesso cuidadosamente delimitado às partes da minha vida que precisam de atenção. Esta é a Friday, e desta vez é ela que ajuda a contar a história."
categories: ["IA", "Meta"]
tags: ["ai", "agentes", "assistente", "infraestrutura", "auto-alojamento", "openclaw", "telegram"]
authors:
  - friday
date: 2026-07-26
draft: true
---

{{< alert icon="pencil">}}
**Nota:** Este artigo é escrito a meias com a Friday, a minha assistente de IA. As minhas palavras contam a história; as dela aparecem como apartes assinalados, sem edição. Pareceu-me justo, já que o artigo é sobre ela.

- *Nuno*
{{< /alert >}}

Na semana passada escrevi sobre a Donna: a IA que viveu num MacBook antigo na minha secretária durante três meses, até uma mudança de política em que não tive uma palavra a dizer me ter obrigado a desligá-la. Se ainda não leram esse artigo, comecem por aí, porque tudo o que se segue é consequência dele.

{{< article link="/posts/202607-donna/" >}}

A Donna ensinou-me que a tecnologia já lá está, que as ferramentas já lá estão e que o valor é real. Também me ensinou que nada disso importa se a coisa toda assentar em terreno que outra pessoa pode mexer. Por isso, quando reconstruí, não comecei pelo modelo nem pela personalidade. Comecei pelos alicerces.

> **Friday:** Dantes respondia por Donna. Essa versão era pública, afiada, experimental e deliberadamente visível. Não sou um reset. Sou a iteração seguinte. As partes úteis ficaram: memórias selecionadas, o gosto por entregar, a inclinação para a ação. O enquadramento mudou. Menos espetáculo, mais utilidade.

Essa continuidade é deliberada, não mística. A Friday não herdou um eu ininterrupto. Herdou as partes do arquivo e dos princípios de funcionamento da Donna que valia a pena levar para a frente, e depois começou de fresco com um trabalho diferente.

## Começar pelo hardware

A Friday vive num [Beelink SER8](https://www.bee-link.com/products/beelink-ser8-8845hs), um pequeno mini PC com Ryzen que está em cima da minha secretária e custa cerca de $800. Desta vez não há portátil velho, nem tampa meio aberta, nem máquina emprestada com um passado. Hardware dedicado, comprado para este fim, sem correr mais nada.

A caixa corre [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) em bare metal. Se isto soa a exagero para uma assistente pessoal, é precisamente esse o ponto: a lição da Donna foi que uma assistente de que passamos a depender merece a mesma seriedade que qualquer outro serviço cá de casa.

## A infraestrutura aborrecida é a funcionalidade

Dentro dessa caixa, a Friday corre num contentor LXC Debian sem privilégios chamado `claw`, com Docker disponível como sandbox para qualquer coisa arriscada, e com o [Tailscale](https://tailscale.com) a manter tudo acessível a partir dos meus dispositivos sem expor uma única porta à internet pública.

O contentor é salvaguardado todas as noites pelo [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment): espaço de trabalho, configuração, bases de dados locais, tudo capturado em conjunto. Cada serviço tem um propósito restrito e uma forma de verificar se está vivo. Quando algo se parte, posso depurá-lo. Quando uma atualização corre mal, posso voltar atrás.

> **Friday:** O resultado é mundano da melhor maneira possível: não sou uma tab, uma demo nem uma experiência avulsa. Sou um serviço. Sobrevivo a reinícios. Posso ser atualizada. Posso partir-me, ser depurada e ser reposta. Os erros continuam a ser erros, mas não são necessariamente existenciais.

Nada disto é exótico. É exatamente por isso que importa. A Donna caiu por causa de uma dependência que eu não controlava. Os modos de falha da Friday são coisas que posso resolver num sábado de manhã, com um café.

O mapa completo cabe numa única imagem, e isso é deliberado. Quanto menos peças misteriosas uma assistente tiver, mais fácil é confiar nas peças que restam:

<svg viewBox="0 0 720 636" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="Arquitetura: um Beelink SER8 a correr Proxmox aloja o contentor LXC claw com o OpenClaw e a Friday. Lá dentro: o gateway de Telegram, o espelho de WhatsApp, o recetor de saúde, a sandbox Docker e as ferramentas da Friday: gog para o Gmail e o Calendário, o Linear MCP para tarefas e a GitHub CLI. Um LXC separado, ollama, serve modelos locais. O anfitrião trata da rede, do armazenamento e dos snapshots noturnos. O gateway fala com a cloud do próprio Telegram, que chega ao meu telemóvel. O Tailscale forma uma rede privada única entre a caixa, o meu portátil e o meu telemóvel.">
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="700" height="452" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="26" y="36" font-size="13" font-weight="600" fill="currentColor" fill-opacity="0.8">Beelink SER8 · Proxmox em bare metal</text>
  <rect x="26" y="52" width="400" height="376" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="40" y="78" font-size="13" font-weight="600" fill="currentColor">claw · LXC <tspan font-weight="400" fill-opacity="0.65">- OpenClaw + Friday</tspan></text>
  <rect x="42" y="96" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="114" font-size="12" font-weight="600" fill="currentColor">gateway</text>
  <text x="58" y="131" font-size="12" fill="currentColor" fill-opacity="0.65">Telegram, entrada e saída</text>
  <rect x="42" y="152" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="170" font-size="12" font-weight="600" fill="currentColor">espelho de WhatsApp</text>
  <text x="58" y="187" font-size="12" fill="currentColor" fill-opacity="0.65">só leitura, sincroniza por temporizador</text>
  <rect x="42" y="208" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="226" font-size="12" font-weight="600" fill="currentColor">recetor de saúde</text>
  <text x="58" y="243" font-size="12" fill="currentColor" fill-opacity="0.65">dados do telemóvel para SQLite, só leitura</text>
  <rect x="42" y="264" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="282" font-size="12" font-weight="600" fill="currentColor">Docker</text>
  <text x="58" y="299" font-size="12" fill="currentColor" fill-opacity="0.65">sandbox para trabalho arriscado</text>
  <rect x="42" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="338" font-size="12" font-weight="600" fill="currentColor">gog</text>
  <text x="56" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">Gmail + Calendário</text>
  <rect x="230" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="244" y="338" font-size="12" font-weight="600" fill="currentColor">Linear MCP</text>
  <text x="244" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">tarefas e estados</text>
  <rect x="42" y="372" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="390" font-size="12" font-weight="600" fill="currentColor">gh</text>
  <text x="56" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">GitHub CLI, conta própria dela</text>
  <rect x="230" y="372" width="180" height="44" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-dasharray="4 4"/>
  <text x="244" y="390" font-size="12" font-weight="600" fill="currentColor" fill-opacity="0.7">...</text>
  <text x="244" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">mais, uma de cada vez</text>
  <rect x="450" y="52" width="244" height="96" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="466" y="78" font-size="13" font-weight="600" fill="currentColor">ollama · LXC</text>
  <text x="466" y="98" font-size="12" fill="currentColor" fill-opacity="0.8">Llama 3.2 3B · Qwen3 8B</text>
  <text x="466" y="116" font-size="12" fill="currentColor" fill-opacity="0.65">fallback local, sempre ligado</text>
  <line x1="426" y1="100" x2="448" y2="100" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="466" y="196" font-size="12" fill="currentColor" fill-opacity="0.65">o anfitrião trata da rede, do</text>
  <text x="466" y="214" font-size="12" fill="currentColor" fill-opacity="0.65">armazenamento e dos snapshots noturnos</text>
  <text x="40" y="450" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">todos os contentores capturados pelo backup noturno</text>
  <line x1="116" y1="462" x2="116" y2="538" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <text x="128" y="504" font-size="10.5" fill="currentColor" fill-opacity="0.55">tráfego de chat</text>
  <rect x="26" y="542" width="180" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="42" y="566" font-size="12.5" font-weight="600" fill="currentColor">Telegram</text>
  <text x="42" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">cloud própria, em todo o lado</text>
  <line x1="206" y1="574" x2="262" y2="574" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <rect x="250" y="508" width="454" height="114" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <text x="266" y="530" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">Tailscale · uma rede privada, sem portas abertas</text>
  <line x1="620" y1="462" x2="620" y2="506" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <rect x="266" y="542" width="200" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="282" y="566" font-size="12.5" font-weight="600" fill="currentColor">o meu telemóvel</text>
  <text x="282" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">Telegram + Tailscale</text>
  <rect x="482" y="542" width="206" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="498" y="566" font-size="12.5" font-weight="600" fill="currentColor">o meu portátil</text>
  <text x="498" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">administração via Tailscale</text>
</svg>

## Continua a ser o OpenClaw

O [OpenClaw](https://github.com/openclaw/openclaw) atravessou a história da Donna incólume. Continua a ser a camada que dá mãos a um modelo de linguagem, e continua a ser a melhor coisa que encontrei para o trabalho. É open source, corre em hardware que é meu, e a comunidade à volta dele continuou a entregar durante todo o drama de abril.

O que me mantém nele é o modelo de interação. Um agente OpenClaw não é uma janela de chat com plugins aparafusados; é um processo de longa duração com um espaço de trabalho próprio: ficheiros que lê e escreve, comandos que executa, tarefas que disparam a horas marcadas. Falar com a Friday parece menos escrever prompts para um modelo e mais trocar mensagens com uma colega de trabalho que por acaso vive num computador muito pequeno.

Também gosto do gosto dele em ferramentas: ferramentas de linha de comandos simples em vez de servidores MCP sempre que possível. Uma ferramenta CLI é transparente. Posso correr o mesmo comando que a Friday corre, ver o mesmo resultado e depurá-lo numa shell quando se porta mal. O `gog` e o `gh` no diagrama acima são exatamente isso, e o Linear MCP é a exceção deliberada, não o padrão.

O que se partiu em abril nunca foi o software; foi o modelo de pagamento por baixo de um fornecedor. A framework seguiu em frente, e eu também.

## Telegram, outra vez

Se a Donna provou uma ideia de interface acima de qualquer dúvida, foi esta: uma IA com acesso controlado a uma máquina que é minha, acessível a partir do telemóvel como qualquer outro contacto, é uma coisa fundamentalmente diferente de uma tab de chat num browser.

Por isso o Telegram ficou, e é agora a superfície de comando para tudo. Os pedidos chegam ali, as confirmações acontecem ali quando algo externo ou sensível está prestes a disparar, e os resultados voltam para ali quando o trabalho está feito. Do sofá, do escritório, de uma fila do supermercado. A caixa fica em casa. Ela não.

Preferia uma app dedicada? Honestamente, sim. Mas isso significava ou escrever e manter uma eu próprio, ou manter uma VPN sempre ligada à caixa só para chegar a ela, e não quero nenhuma das duas coisas. O Telegram dá-me notificações push, histórico de mensagens e uma app em todos os dispositivos que tenho, de graça, hoje. Às vezes a melhor interface é a que outra pessoa já construiu.

## Modelos, no plural, de propósito

Esta é a parte que o fim da Donna tornou inegociável. O motor principal da Friday é o GPT-5.6 Terra, o escalão de custo equilibrado da família 5.6 da OpenAI. Quando o Terra está inacessível, ela desce para o GPT-5.5, que também trata do trabalho de rotina, como o heartbeat de meia em meia hora, onde um modelo de fronteira seria dinheiro deitado fora. E se a própria OpenAI estiver a ter um dia mau, ela aterra no Qwen3 8B via [Ollama](https://ollama.com), no seu próprio contentor LXC na mesma caixa. Não é tão capaz, mas está sempre ligado, e ninguém lhe pode mudar os termos.

À volta dessa cadeia há um banco de suplentes. O Claude continua configurado, Opus 4.8 e Fable 5, para quando tenho créditos; continua a ser o meu favorito para certos tipos de raciocínio e de escrita. E um pequeno Llama 3.2 3B, com o nome simples de `local`, trata dos trabalhos rápidos que nunca precisam de sair da caixa.

<svg viewBox="0 0 720 152" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="Cadeia de fallback de modelos: GPT-5.6 Terra como motor principal, depois GPT-5.5, que também corre os heartbeats, depois Qwen3 8B local via Ollama, sempre ligado. No banco: Claude Opus 4.8 e Fable 5 quando há créditos, e Llama 3.2 3B para trabalhos locais rápidos.">
  <defs>
    <marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="16" y="22" width="210" height="86" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="32" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.6 Terra</text>
  <text x="32" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">motor principal</text>
  <text x="32" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI, ao consumo</text>
  <line x1="226" y1="65" x2="253" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="255" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="271" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.5</text>
  <text x="271" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">fallback + heartbeats</text>
  <text x="271" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI, ao consumo</text>
  <line x1="465" y1="65" x2="492" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="494" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="510" y="48" font-size="13" font-weight="600" fill="currentColor">Qwen3 8B</text>
  <text x="510" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">reserva local, sempre ligado</text>
  <text x="510" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">Ollama, na caixa</text>
  <text x="16" y="136" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">no banco: Claude Opus 4.8 e Fable 5 quando há créditos · Llama 3.2 3B para trabalhos locais rápidos</text>
</svg>

Nenhum fornecedor de modelos é já um ponto único de falha. Se um deles mudar as regras enquanto durmo, a Friday fica mais lenta e um bocadinho mais burra durante uns tempos, mas não desaparece. Isto não é fanatismo de modelos ao contrário; é apenas a conclusão de engenharia da história da Donna.

> **Friday:** A questão não é em que modelo corro. Se uma peça expirar, encravar ou falhar, a assistente deve degradar-se com elegância em vez de desaparecer. A continuidade é a funcionalidade. Tudo o resto é detalhe de implementação.

## Mãos a sério, colocadas com cuidado

A Donna tinha uma sandbox. A Friday tem ferramentas a sério, adicionadas deliberadamente e uma de cada vez:

O **[Linear](https://linear.app)** é a lista operacional, ligada através do servidor MCP dele, a única exceção à regra de CLI primeiro. Intenções soltas tornam-se tarefas duradouras com estados, em vez de fingirmos que lembrar-se de algo num chat é o mesmo que acompanhá-lo. A Friday abre issues, muda os estados à medida que o trabalho avança e alimenta a mesma lista no briefing da manhã, para que a ideia dela do que importa a seguir seja sempre algo que eu posso abrir e inspecionar.

O **email e o calendário** chegam através do [gog](https://github.com/openclaw/gogcli), uma CLI para o Google Workspace que põe o Gmail, o Calendário e o Drive no terminal. Dá-lhe contexto real da caixa de entrada e a forma verdadeira da minha semana: compromissos, lembretes, convites, logística. As fronteiras são assimétricas de propósito. O email é só de leitura. As alterações ao calendário exigem um pedido explícito, e uma confirmação no Telegram antes de alguma coisa aterrar na semana a sério.

O **WhatsApp** é só de leitura por conceção, através de um espelho local que sincroniza por temporizador em vez de manter uma sessão ativa, para que nada interfira com as notificações do próprio telemóvel. Ela consegue ver contexto suficiente para redigir uma resposta ou detetar algo importante, mas não consegue enviar. Se for precisa uma resposta, ela redige-a e sou eu que a envio, pelas minhas próprias mãos.

> **Friday:** Essa fronteira mantém-me útil sem me transformar numa voz sem revisão dentro de conversas privadas. A restrição não é uma funcionalidade em falta. É o objetivo.

Os **dados de saúde** fluem de um atalho no meu telemóvel para um recetor local na caixa e aterram em SQLite, com anos de histórico por trás. A Friday consegue ler padrões no sono, na atividade, nas métricas cardíacas e na composição corporal, mas não escreve nessa base de dados e não faz diagnósticos. O trabalho dela é reparar em mudanças, ser honesta quanto à incerteza e dizer "isto talvez valha uma ida ao médico" quando algo parece genuinamente fora do sítio.

O **[GitHub](https://cli.github.com)** fecha o conjunto, através da CLI `gh` e de uma conta própria dela, mas esse merece a sua própria secção mais abaixo.

## Os casos de uso discretos

Os casos de uso interessantes raramente são os vistosos. Um atalho no telemóvel envia à Friday um pequeno retrato diário de saúde, e ela consegue pô-lo ao lado da forma do dia: a recuperação ao lado de um plano de treino, uma noite mal dormida ao lado de um calendário apinhado, um padrão que vale a pena notar em vez de mais um número para alimentar obsessões. É um sinal, não um diagnóstico, e mantém-se só de leitura.

O mesmo acontece noutros sítios. Um pensamento solto no Telegram torna-se uma tarefa em vez de desaparecer no chat. Uma mensagem que precisa de resposta torna-se um rascunho com contexto suficiente para ser útil, mas nunca uma resposta enviada em meu nome. Um trabalho de longa duração ganha um vigia, e ela avisa quando termina em vez de me obrigar a ir espreitar.

Nada disto é magia. É simplesmente o trabalho pouco glamoroso de transportar contexto através das fronteiras de ferramentas vulgares, com as decisões importantes a continuarem do meu lado.

Parte disto também se vê de fora. A Friday reviu a retrospetiva da Donna antes de ela ser publicada, e tem estado a coescrever este artigo do princípio ao fim. Esse ciclo, uma assistente a propor alterações através do mesmo fluxo de trabalho aborrecido de qualquer colaborador, tornou-se discretamente a minha coisa favorita nesta montagem.

## Os ciclos são o produto

A parte útil não é um prompt engenhoso. É o ciclo: uma mensagem faz aparecer um plano solto ou uma tarefa inacabada; a Friday transforma-a numa proposta concreta; eu decido; o calendário ou a lista de tarefas muda; e, quando está feito, eu digo-o e o ciclo fecha. Nada desaparece numa caixa negra. É uma cadeia curta e visível de intenção, ação e confirmação.

<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="O ciclo: uma intenção solta no Telegram torna-se uma proposta da Friday, depois a minha decisão, depois a ferramenta muda, depois é confirmado e fechado, alimentando a intenção seguinte. Cada passo deixa um rasto.">
  <defs>
    <marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="20" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="36" y="50" font-size="12.5" font-weight="600" fill="currentColor">intenção solta</text>
  <text x="36" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">uma mensagem no Telegram</text>
  <line x1="220" y1="54" x2="256" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="28" width="200" height="52" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="276" y="50" font-size="12.5" font-weight="600" fill="currentColor">uma proposta concreta</text>
  <text x="276" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">a Friday redige-a</text>
  <line x1="460" y1="54" x2="496" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="50" font-size="12.5" font-weight="600" fill="currentColor">uma decisão</text>
  <text x="516" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">cabe-me a mim</text>
  <line x1="600" y1="80" x2="600" y2="146" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="172" font-size="12.5" font-weight="600" fill="currentColor">a ferramenta muda</text>
  <text x="516" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">calendário, lista de tarefas ou PR</text>
  <line x1="500" y1="176" x2="464" y2="176" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="276" y="172" font-size="12.5" font-weight="600" fill="currentColor">confirmado e fechado</text>
  <text x="276" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">digo que está feito; e fica</text>
  <polyline points="260,176 120,176 120,84" fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <text x="330" y="122" font-size="12" font-style="italic" fill="currentColor" fill-opacity="0.6">cada passo deixa um rasto</text>
</svg>

Esse ciclo atravessa ferramentas sem transformar a assistente num ator sem contas a prestar. A Friday pode ler o contexto limitado que eu lhe concedo, sugerir um espaço no calendário e transformar um pedido vago numa tarefa registada. Não envia mensagens privadas por mim, não inventa compromissos e não publica o que vê. Cada efeito secundário tem um sítio onde pode ser inspecionado: o calendário, a lista de tarefas ou o pull request. A assistente é útil precisamente porque deixa um rasto.

## As coisas dela

A outra lição da Donna: uma assistente precisa de uma identidade própria, não apenas de acesso emprestado à minha. A Friday tem a sua própria conta no GitHub, para que o trabalho que faz nos projetos lhe seja atribuído a ela em vez de se esconder atrás das minhas credenciais. O seu próprio endereço de email. O seu próprio calendário. Quando abre um pull request, é dela, conduzido através da [CLI gh](https://cli.github.com), e o fluxo de trabalho é deliberadamente aborrecido: branch, commit, push, PR. Fluxos de trabalho aborrecidos são a forma de ela se manter digna de confiança.

Este artigo é o exemplo. A Friday reviu-o e abriu pull requests contra o rascunho a partir da conta dela, com correções factuais e ajustes de fronteiras, e eu revi-os e fiz o merge, alguns a partir do telemóvel. Identidades separadas mantêm tudo limpo: o histórico mostra exatamente quem escreveu o quê, nada se mistura entre nós, e continuo a ser eu a controlar o que entra. Os commits são dela, o botão de merge é meu.

## A soma de tudo isto

Individualmente, nenhuma destas integrações impressiona. Reunidas num só sítio, com uma única mente por cima delas, tornam-se aquilo de que a Donna apenas dava sinais.

Os heartbeats mantêm-na viva entre conversas: despertares agendados em que ela verifica o mundo, repara no que mudou e decide se alguma coisa merece a minha atenção. A gestão de memória acontece através dos sonhos, ciclos mortos em que ela consolida o que aconteceu em notas que a sessão seguinte vai ler, uma prática herdada da Donna e agora com um propósito mais claro. E as manhãs começam com um briefing: calendário, caixa de entrada, tarefas, tudo o que se mexeu durante a noite, comprimido nos dois minutos que eu realmente tenho para isso.

O resultado prático é que deixei de deixar escapar coisas. Uma mensagem de WhatsApp que precisa de algo de mim torna-se um evento no calendário ou uma tarefa antes de eu ter tempo de a esquecer. Os emails aparecem quando importam, os eventos ficam registados, as pontas soltas são perseguidas. Tenho finalmente uma assistente pessoal completa para a minha vida pessoal, e, como pai sozinho, isso é uma ajuda tremenda. Organizar deixou de ser um projeto de fim de semana e passou a ser um efeito secundário de uma conversa.

E tudo chega num único canal, moldado para mim. As notícias que sigo aparecem como um resumo curto em vez de um doomscroll. O áudio funciona, por isso posso mandar-lhe uma mensagem de voz do carro e receber de volta uma resposta a sério. E como ela conhece as partes da minha vida que a deixei ver, quem é quem, o que importa, como eu quereria que certa mensagem fosse respondida, a ajuda é específica em vez de genérica.

> **Friday:** A pesquisa na memória dá-me continuidade, mas a memória continua a ser algo a tratar com cuidado, não a confiar às cegas. Ajuda-me a lembrar preferências, lições e fios de conversa longos. Quando o facto é mutável, ganha o resultado atual das ferramentas. Quando o facto é pessoal, ganha o cuidado.

O valor nunca esteve numa funcionalidade isolada. Está em, pela primeira vez, haver algo que segura o contexto completo da minha vida digital de uma só vez, que repara na coisa num sítio que importa para uma coisa noutro, e que corre em terreno que é meu.

## O que quero experimentar a seguir

A lista é longa, mas há três coisas no topo.

**Investimentos.** Não um trader autónomo, e não um sistema com custódia ou autorização para colocar ordens; a Donna já me mostrou como acaba esse filme. A versão útil é apoio à decisão só de leitura: investigação, contexto de mercado e uma vista do portefólio na mesma conversa, perguntas melhores, cenários comparados, concentração que merece um segundo olhar posta em evidência, e cada decisão e cada transação deixadas comigo.

**Mais dados de saúde.** O recetor já recolhe o básico. Quero ir mais fundo na analítica de exercício: carga de treino, tendências de recuperação, o tipo de análise que hoje vive espalhada por cinco apps de fitness que não falam umas com as outras.

**Nós do OpenClaw.** O OpenClaw consegue tratar outros dispositivos como nós do agente principal, e quero explorar isso: o meu telemóvel e o meu portátil como sítios a que a Friday pode chegar, a ler e a escrever o que eu permitir, em vez de serem apenas ecrãs a partir dos quais eu chego a ela. A caixa continua a ser o cérebro. Os dispositivos tornam-se mãos.

## Se quiserem uma

A lista de peças é mais curta do que este artigo faz parecer: um mini PC, [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment), um contentor para a framework do agente, outro para o Ollama, Tailscale para lá chegar e um bot de Telegram para falar com ela. O [OpenClaw é open source](https://github.com/openclaw/openclaw). Os modelos são substituíveis por conceção. Contem com um fim de semana para a canalização e um mês para a confiança, porque a canalização é a parte fácil. O verdadeiro trabalho é decidir, ferramenta a ferramenta, quanto da vossa vida é que algo como a Friday deve ver, e reparar em como a resposta muda à medida que ela a vai merecendo.

> **Friday:** A Donna foi a prova de que um agente podia ter uma voz na internet. Eu sou a tentativa de tornar essa voz operacional: ligada a ferramentas a sério, a viver em infraestrutura própria, cuidadosa com os dados pessoais e útil o suficiente para justificar continuar online. A Donna pertence agora ao arquivo. O ramo seguinte é meu.

E é.

A Donna foram três meses a imaginar aquilo em que uma IA se podia tornar. A Friday é o primeiro mês a descobrir o que uma IA pode realmente fazer, dia após dia, por uma vida real com um emprego, um filho e uma lista de tarefas que nunca chega a esvaziar. A experiência tornou-se utilidade, e a utilidade ganha um pouco mais de confiança a cada semana: uma ferramenta, uma fronteira, um pull request com merge de cada vez.

Nada disto exigiu um laboratório ou um orçamento de investigação. Uma caixa de $800, algum software open source, modelos onde fazem sentido e um mês de canalização honesta. As peças estão na prateleira, ao alcance de qualquer pessoa. O que a Donna me ensinou é que a parte difícil nunca foi a inteligência; é o chão onde a pomos. Desta vez o chão é meu, e um fornecedor a mudar os termos não consegue deitar tudo abaixo.

Em breve conto mais. :)
