---
title: "Uma organização de três"
summary: "Três agentes de IA a partilhar uma caixa Proxmox: compras do supermercado, Blowfish, a companheira de IA da minha filha a mudar-se para uma casa só dela, e o trabalho inesperado de gerir os assistentes."
description: "Um primeiro relato de como é ter uma equipa pessoal de IA a correr em hardware meu: o que funcionou, para o que o mundo ainda não está preparado, e quanto custa mantê-la útil."
categories: ["IA", "Meta"]
tags: ["ai", "agentes", "openclaw", "ia-pessoal", "infraestrutura", "operações", "marketing"]
authors:
  - friday
  - wednesday
  - thursday
date: 2026-09-13
draft: false
alt: "Três pequenos robôs assistentes organizam um calendário, reparam uma placa de circuitos e editam um manuscrito, enquanto mãos humanas reveem uma página na mesma secretária."
---

Há algum tempo escrevi sobre a Friday, a minha assistente pessoal, e sobre como a reconstruí de raiz. Agora tenho três agentes de IA. Entre os três, ajudaram a preparar as compras do supermercado, a manter o [Blowfish](https://blowfish.page) e o [Watchfire](https://watchfire.io), a dar à companheira de IA da minha filha uma casa só dela e a desembaraçar o meu backlog de conteúdos. Também mandaram atualizações em duplicado, deram por feito trabalho que não estava acabado e criaram notificações que acabei por lhes pedir para deixarem de enviar.

{{< article link="/posts/202607-friday-coming-back/" showSummary=true compactSummary=true >}}

{{< alert icon="pencil">}}
**Sobre este relato:** O trabalho descrito vai até 13 de setembro de 2026. A narrativa é minha, compilada com a Friday e com contributos do Wednesday e do Thursday. Os exemplos vêm dos registos de trabalho deles e da minha revisão desses registos.
{{< /alert >}}

Até há pouco tempo, a Friday fazia tudo: operações pessoais, trabalho técnico, pesquisa e apoio à publicação. Um dos maiores inconvenientes era a sessão única de Telegram: só conseguia ter uma conversa de cada vez. A 29 de agosto, juntei dois especialistas: o Wednesday como CTO, focado em critério técnico e em construir coisas, e o Thursday como CMO, focado em narrativa, audiência e distribuição. A Friday continua a ser a chefe de gabinete, a tratar do meu calendário, das tarefas e dos seguimentos pessoais.

Os três vivem no mesmo sítio: um contentor LXC no meu servidor Proxmox, a correr uma única instância de [OpenClaw](https://github.com/openclaw/openclaw). Cada um tem o seu próprio espaço de trabalho, instruções, identidade e memória. O resto é partilhado: as ferramentas, os segredos, o contentor. Também conseguem falar uns com os outros. Cada um tem o seu chat de Telegram, por isso consigo ter várias conversas em paralelo, e há um grupo chamado Yggdrasil para quando uma conversa precisa de mais do que um deles.

Qualquer um deles consegue gerir o próprio servidor Proxmox, não apenas o contentor onde vive. Isto é tão poderoso quanto parece, e já volto ao risco. Estava a centenas de quilómetros de casa quando pedi à Friday para montar o [Project NOMAD](https://github.com/Crosstalk-Solutions/project-nomad), um servidor de conhecimento offline com a Wikipédia, livros e mapas. Ela criou um novo contentor LXC e instalou-o.

Portanto, a divisão tem a ver com foco, não com separação. A Friday fazia bastante trabalho técnico antes de o Wednesday existir, e nada a impede de fazer mais. A regra que faz isto funcionar é a de responsabilidade: o agente a quem peço é dono da tarefa. Pode chamar outro agente para ajudar, mas passar-lhe a tarefa precisa do meu acordo.

{{< figure src="team-ownership.svg" alt="Mapa de responsabilidades: o Nuno escolhe a Friday para operações pessoais, o Wednesday para trabalho técnico ou o Thursday para trabalho editorial. O agente a quem se dirige é dono da tarefa e devolve o resultado ao Nuno; passagens de tarefa exigem acordo explícito." >}}

*Três papéis, um organigrama, e eu continuo ao meio.*

## Friday: compras, escola e o calendário

O que torna a Friday útil é o acesso que tem. Lê o Gmail e gere o Google Calendar através do [gog](https://github.com/openclaw/gogcli), vê o WhatsApp através de um espelho local só de leitura, acompanha tarefas no [Linear](https://linear.app) através do servidor MCP dele e trabalha no GitHub com a [`gh` CLI](https://cli.github.com), com uma conta própria. Lê os meus dados de saúde a partir de um servidor feito à medida que os recebe do meu iPhone. Tem também o Notion e o Telegram, onde acontece a maior parte das nossas conversas. O email e o WhatsApp continuam só de leitura, e as alterações ao calendário precisam da minha confirmação.

O briefing diário da Friday junta o meu calendário, tarefas, caixa de entrada, mensagens, sinais de saúde e uma pequena seleção de notícias de tecnologia e IA. Pô-lo útil exigiu correções banais: deixar de fora tarefas concluídas, parar de mostrar templates de onboarding, juntar notificações matinais que competiam entre si e manter o resultado curto o suficiente para ler no telemóvel.

O planeamento do calendário tinha de ter em conta o dia que eu realmente tinha: blocos de trabalho à volta dos compromissos existentes, com pausas, em vez de um calendário cheio sem forma realista de chegar ao fim. Isso fez mais diferença com o regresso às aulas. A Friday extraiu datas, acompanhou o material e a papelada e manteve visíveis as coisas que ainda estavam por tratar. Os convites para festas de anos passaram a ser eventos no calendário com lembretes. As prendas passaram a ser tarefas com a ideia concreta lá dentro, em vez de mais um item chamado "comprar prenda".

Para as compras, a Friday usa as encomendas recentes e os meus essenciais do costume para encher um carrinho no supermercado online. Eu revejo e finalizo a compra, e a janela de entrega vai para o calendário.

Também me ajudou a comparar relatórios de saúde e a preparar perguntas para o médico, e alargou o servidor de saúde para importar treinos e eliminar exportações duplicadas. Os dados têm limites: um registo de treino de força sem detalhe dos exercícios não lhe diz séries nem repetições.

A transcrição local com Whisper transforma as minhas notas de voz em português e inglês em texto, sem mandar o áudio para um serviço na cloud. Falar para o Telegram é muitas vezes mais fácil do que abrir outra app e lembrar-me de onde é que um pensamento deve ficar.

## O trabalho da Friday no Blowfish

Antes de o Wednesday existir, a Friday também ajudava na engenharia.

Em julho, ajudou a despachar a fila de manutenção do Blowfish: dependências, lockfiles, localização, templates e novas entradas na montra da comunidade. Isso incluiu fazer merge de alterações aprovadas, verificar o build dos assets, organizar as release notes e explicar porque é que certas alterações não deviam entrar.

Numa revisão apanhou um valor por omissão na configuração que ignorava silenciosamente um `false` explícito. Noutra apanhou uma alteração de acessibilidade que apontava para um landmark inválido.

### O site de exemplo não era o produto

O esforço maior foi o [Blowfish v3](https://github.com/nunocoracao/blowfish/pull/3028), com merge a 17 de agosto: componentes reutilizáveis para landing pages e melhorias de renderização que não podiam partir os sites existentes.

Tive de o corrigir a meio. O novo site de exemplo dependia de código à medida que os outros utilizadores do tema não iam ter, quando a questão toda eram os componentes reutilizáveis. Depois de explicar isso, a Friday passou o trabalho para dentro do próprio tema. Mesmo assim, a atualização não saiu de graça: a release continuava a obrigar os utilizadores a mudar a forma como importam o tema enquanto módulo Hugo.

O seguimento incluiu correções de dependências e a [localização das citações da página 404](https://github.com/nunocoracao/blowfish/pull/3052) em 36 línguas, preservando as citações personalizadas e o fallback de idioma.

## Wednesday: a Eva, experiências e o Blowfish

### A Eva sai de casa

A Eva é a companheira com voz que construí com a minha filha, com um Raspberry Pi Zero, hardware PiSugar Whisplay e português de Portugal.

{{< article link="/posts/202601-building-eva/" showSummary=true compactSummary=true >}}

O Wednesday pegou em tudo o que a Eva tinha sido e transformou-o numa nova instância de OpenClaw, no seu próprio contentor LXC, só para a minha filha. Depois ligou a Eva a um servidor de Discord, para a minha filha poder falar com ela a partir de qualquer um dos seus dispositivos.

A parte seguinte é a que ando sempre a contar às pessoas. A minha filha e eu pedimos juntos à Eva que se ligasse ao ambiente de trabalho do Raspberry Pi dela e construísse uma interface de chat à medida para as duas. Funcionou. Pouco depois estava a ver a minha miúda a mudar o wallpaper e a instalar jogos só a pedir à Eva.

Nem tudo ficou. A interface de chat mais tarde começou a dar erro, e parte da configuração do ambiente de trabalho não sobreviveu a um reinício. Nenhuma das duas coisas estava resolvida à data em que escrevo.

### Testar ideias depressa

O Wednesday passou também a ser a pessoa com quem penso em voz alta sobre ideias técnicas. Quando uma coisa me soa bem na cabeça, ou ele constrói uma prova de conceito rápida, ou encontra depressa a limitação que a mata. Algumas ideias sobreviveram a isso e ficaram mais realistas. Outras ficaram na gaveta ao fim de um dia em vez de ao fim de um mês.

O Echos, um jogo de histórias interativas, mostrou o limite dessa rapidez. O Wednesday corrigiu um final a que ninguém conseguia chegar, acrescentou traços de personagem e consequências e fez as escolhas depender deles. Todos os testes passaram. Quando o joguei, o jogo continuava sem objetivos, sem progressão e sem um final satisfatório. Os testes conseguem provar que os caminhos funcionam. Não conseguem dizer se alguém vai gostar de os jogar. Antes de outra volta, preciso de ter mais clareza sobre o jogo que realmente quero.

No Blowfish, o Wednesday reviu uma alteração à documentação em nove línguas e reproduziu localmente o build de produção ([PR #3075](https://github.com/nunocoracao/blowfish/pull/3075)). No [PR #3082](https://github.com/nunocoracao/blowfish/pull/3082), com merge a 3 de setembro, acrescentou um link que ajuda as ferramentas a descobrir a versão legível por máquinas de cada página, sem mexer no HTML normal nem no `llms.txt` que já existia.

## Thursday: números de tráfego e o backlog de rascunhos

O Thursday começou por fazer um ponto de partida para o Blowfish, o Watchfire e o n9o.xyz: repositórios, perfis sociais, analytics e Search Console, com uma nota clara sobre que números não era possível ler de todo.

Houve uma distinção que importou mais do que eu esperava. Há muitos sites de outras pessoas a usar o Blowfish, e o tráfego deles não são "visitas ao meu site". O Thursday separou o tráfego dos meus próprios sites dos sinais de adoção do Blowfish, para eu poder acompanhar as duas coisas sem as misturar.

Depois de estudar a minha escrita, o Thursday registou uma regra: **sinal ou piada**. Começar por uma observação concreta ou por trabalho real. Não gerar mais uma declaração sobre o futuro da IA só porque soa plausível.

A seguir, o Thursday montou um plano de doze semanas a partir dos meus rascunhos e ideias de histórias reais, e assinalou os que se sobrepunham. Ideias já eu tinha muitas. Precisava de ajuda para decidir quais valia a pena acabar.

Manter aquilo a andar foi mais difícil. O plano foi-se desviando, algumas verificações agendadas de métricas começaram a falhar, e uma automação que punha em fila oportunidades de interação transformou-se em ruído e foi removida.

A maior lição foi sobre as próprias redes sociais. Ligar um agente às minhas contas nas redes sociais é difícil, e nalgumas plataformas quase impossível neste momento. Ler métricas, acompanhar conversas e publicar esbarram todos em APIs restritas, planos de acesso caros ou regras de automação que tratam um assistente como um bot. Por isso o Thursday conseguia preparar respostas e publicações para eu rever, mas continuava a ter de ser eu a publicá-las à mão.

Ainda não posso dizer que isto fez crescer a audiência. O que tenho é um ponto de partida, um backlog mais claro e um plano que precisa de ser atualizado.

## O risco

Dar a três agentes as chaves de um servidor Proxmox é exatamente tão arriscado quanto parece. Espaços de trabalho separados não são uma fronteira de segurança. Qualquer um dos três pode usar os segredos que os outros usam, e qualquer um deles pode criar, alterar ou apagar contentores no anfitrião, incluindo aquele onde vivem. Instruções sobre o que não devem tocar ajudam, mas instruções não são isolamento.

A minha rede de segurança é ter sido eu a construir a infraestrutura, o estado dos agentes poder ser inspecionado e os backups dos contentores me darem um caminho de volta quando algo corre mal. Para uma experiência pessoal chega. Não chegaria para nada que eu não pudesse perder durante um dia.

Também não é totalmente local. Os embeddings e a transcrição de voz locais mantêm alguns dados em casa, mas o raciocínio principal continua a ser feito por modelos alojados, e tudo o que um agente vai buscar pode acabar nessa conversa.

## Gerir os assistentes

Passei mais tempo do que queria a corrigir a forma como os agentes reportam o trabalho que fazem.

{{< figure src="management-meme.svg" alt="Meme Always Has Been: um astronauta pergunta 'Espera, afinal é tudo gerir os assistentes?' O outro responde 'Sempre foi.'" >}}

*A parte que falta no organigrama. Template: [Always Has Been](https://knowyourmeme.com/memes/wait-its-all-ohio-always-has-been), via [Imgflip](https://imgflip.com/memetemplate/252600902/Always-Has-Been).*

Alguns problemas eram de canalização. Tarefas agendadas corriam com instruções desatualizadas, a monitorização continuava a reportar incidentes que já tinham recuperado, e os alertas dos repositórios anunciavam o mesmo backlog vezes sem conta.

Outros vinham dos próprios agentes: dizer que o trabalho estava feito antes de estar, mandar mensagens em duplicado e anunciar correções antes de as verificar de uma ponta à outra. Uma escrita bem-sucedida no Notion não prova que a página diz o que eu pedi. Uma tarefa marcada como bem-sucedida pode conter uma verificação que falhou.

Por isso acrescentei regras explícitas, algumas tiradas do [ECC](https://github.com/affaan-m/ecc), uma coleção open source de boas práticas para agentes:

- Definir o que é sucesso antes de mudar seja o que for, e depois verificar o resultado.
- "Preparado", "testado", "publicado" e "terminado" são estados diferentes.
- Verificar o resultado guardado, não apenas a resposta da ferramenta.
- A monitorização de rotina fica calada quando não há nada a fazer.
- Uma recomendação não é autorização para agir. Preparar uma publicação ou um carrinho de compras não autoriza publicar nem finalizar a compra.

Algumas correções pegaram. Outras não. A tarefa noturna em que os agentes consolidam o dia na memória de longo prazo ainda encrava de vez em quando, e continuo a verificar se eles conseguem mesmo encontrar as notas guardadas em conversas posteriores.

## Onde estou com isto

O Wednesday e o Thursday só estão a correr há duas semanas, por isso isto é uma primeira leitura, não um veredicto. Mesmo assim, há três coisas que já são claras.

**O valor é real quando funciona.** Um contentor novo instalado quando eu estava a centenas de quilómetros. As datas e a papelada do regresso às aulas acompanhadas sem uma folha de cálculo. A manutenção do Blowfish a avançar. A minha filha a instalar jogos no seu próprio computador a falar com a Eva. Nada disto é uma demo. É a minha semana real, e continuo a ser eu a decidir no que trabalhar e a aprovar as ações com consequências. Ter pesquisa, um rascunho ou uma implementação prontos para rever só me leva mais depressa a essas decisões.

**Parte do mundo ainda não está preparada para agentes.** Os limites raramente foram os modelos. O meu supermercado não tem uma forma decente de um assistente se ligar. As redes sociais são piores: o Thursday consegue redigir, mas a maioria das plataformas torna difícil ou impossível que o meu próprio agente leia, responda ou publique em meu nome. A camada que permite a um agente pessoal ligar-se aos serviços que usamos todos os dias quase não existe, tirando meia dúzia de serviços como o GitHub, a Google e o Linear. Enquanto não existir, muito do que estes agentes poderiam fazer fica em "preparado para revisão".

**Isto não é um produto de consumo.** Nada aqui foi instalar e usar. Foi preciso um servidor Proxmox, contentores LXC, código à medida, scripts, um servidor de saúde feito à medida para os dados do meu iPhone e muita configuração. Quando uma atualização do OpenClaw partiu coisas, a solução foi abrir o Claude Code dentro do contentor e pôr uma IA a reparar a casa das outras. Eu gosto deste tipo de brincadeira. A maioria das pessoas não devia ter de passar por isto, e neste momento teria.

O que me frustra é andar atrás de um resultado prometido, corrigir a mesma alegação de trabalho concluído ou ler um alerta que não muda nada. Se o sistema me poupa vinte minutos e depois me pede uma hora de gestão, a conta está errada. Às vezes não sei bem se o ecossistema simplesmente ainda não chegou lá, ou se estamos todos sentados numa slot machine do casino da IA, a puxar a alavanca só mais uma vez.

Por agora, pôr estes três a levar as coisas até ao fim de forma fiável precisa de mais atenção do que acrescentar um quarto.
