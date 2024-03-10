---
title: "O novo hype da inteligência artificial"
summary: "Nos últimos anos, o entusiasmo em torno da inteligência artificial tem aumentado (de novo). A maior parte disso se deve a pesquisas verdadeiramente inovadoras e apresentações inovadoras no campo. Desde máquinas que ganham jogos complexos como Go e Dota 2, até geração de vários conteúdos técnicas, essas tecnologias impactarão nosso futuro."
categories: ["Produto","Estratégia","Tecnologia"]
tags: ["Difusão Estável","Meio da Jornada","Dall-e","AI", "Aprendizado de Máquina"]
# externalUrl: ""
date: 2022-10-25
draft: false
authors:
  - nunocoracao
series: ["The New AI Hype"]
series_order: 1

---
Nos últimos anos, o entusiasmo em torno da inteligência artificial tem aumentado (novamente). A maior parte disso se deve a empresas como [OpenAI][1], [Google][2], [DeepMind][3] (subsidiária do Google), [Meta][4] e outras que produzem pesquisas verdadeiramente inovadoras e vitrines inovadoras em o campo. Desde máquinas que ganham jogos complexos como [Go][5] e [Dota 2][6] até uma variedade de técnicas de geração de conteúdo que produzem texto, imagens, áudio e agora vídeo, essas tecnologias terão um impacto no nosso futuro.

Parece que já experimentamos esse entusiasmo em relação à IA no passado, mas isso nunca se materializou em algo relevante para nossas vidas. Desde as tentativas do Watson da IBM de revolucionar os cuidados de saúde até às _profecias_ dos carros autónomos, fomos informados sobre como a IA irá melhorar a nossa sociedade, mas sempre parece haver algo que nos impede de chegar lá. Por um lado, a tecnologia pode ainda não estar disponível para alguns desses problemas avançados; por outro, os humanos tendem a ser cépticos em relação às máquinas que assumem algumas das nossas áreas de especialização (a Skynet não ajudou aqui).

No entanto, desta vez parece diferente. Em primeiro lugar, os casos de utilização são muito menos ambiciosos do que no passado e têm aplicações práticas (e divertidas) concretas; em segundo lugar, a investigação nos últimos 5 a 10 anos teve alguns dos maiores avanços de sempre nos campos da máquina e da aprendizagem profunda. [Redes Adversariais Gerativas (GANs)][7], [Modelos de Difusão][8] e [Modelos de Transformadores][9] são bons exemplos de tais avanços. Em terceiro lugar, desta vez a tecnologia e o poder de processamento necessários estão aqui para nos permitir gerir e treinar estas redes massivas.

{{< alerta >}}
Estima-se que a OpenAI gastou cerca de US$ 10 milhões a US$ 20 milhões para treinar seu modelo de conversão de texto em texto GPT-3. O custo deve ser maior com modelos que lidam com imagens.
{{</ alerta >}}

## Onde estamos e como chegamos aqui?

Então, onde estamos agora? Nos últimos 5 a 7 anos, várias inovações específicas e aplicações práticas da IA ​​trouxeram a tecnologia (e as suas respetivas implicações) para discussão pública. Antes de entrar no que já é possível, vejamos os anúncios mais relevantes dos últimos anos.

**2015 - Google cria DeepDream - [Leia mais][10]**

O Google lança um novo método usando [Redes Convolucionais][11] que pode _sonhar_ novas imagens com base em seu conjunto de treinamento. A rede poderia gerar **novas** imagens de gatos, por exemplo, depois de aprender com toneladas de imagens reais de gatos.

**2016 - Google cria AlphaGo que vence o campeão mundial de Go - [Leia mais][12]**

AlphaGo, que foi treinado usando técnicas de [aprendizado não supervisionado] [13] para fazer a rede competir contra si mesma milhões de vezes para tentar se vencer e melhorar no jogo a cada iteração. AlphaGo venceu o campeão de Go e foi até capaz de exibir movimentos de Go que nunca foram vistos, mostrando que ele foi além de _aprender_ movimentos de outros jogos para descobrir suas jogadas únicas.

**2019 - OpenAI Five vence os campeões do Dota 2 - [Leia mais][14]**

OpenAI Five estava treinando usando técnicas semelhantes ao AlphaGo, essa rede passou por milhões de jogos contra si mesma e ficou cada vez melhor. O desafio de jogar um jogo 3D multijogador online como o Dota 2 era o imenso _espaço de ação_ possível para o jogador. A OpenAI provou que utilizando os seus modelos e novas técnicas de treino foi possível resolver estes problemas com sucesso.

**2020 - OpenAI revela GPT-3 - [Leia mais][15]**

**Generative Pre-trained Transformer 3 (GPT-3)** é um modelo de linguagem autorregressivo que usa aprendizado profundo para produzir texto semelhante ao humano. A rede foi treinada em mais de 400 bilhões de tokens de texto de um conjunto gigante de treinamento textual. O modelo pode então continuar escrevendo o texto após uma solicitação inicial. A parte impressionante é que, mais do que gramatical e sintaticamente correta, a história contada é coerente entre as frases. Dê uma olhada no vídeo abaixo se quiser alguns exemplos do que ele pode fazer. Para uma explicação mais detalhada do que está acontecendo, você pode conferir [este vídeo][16] em que uma rede apresenta uma história muito _crível_ sobre um cientista que descobriu unicórnios na América do Sul.

{{< youtube TfVYxnhuEdU >}}

**2021/22 - OpenAI anuncia Dall-E e Dall-E 2 - [Leia mais][17] e [Aqui][18]**

Dall-E e Dall-E 2 são redes treinadas utilizando modelos de difusão para serem capazes de gerar imagens a partir de prompts textuais. Você pode escrever uma frase e a IA criará uma imagem para ela em um curto espaço de tempo. O modelo pode produzir diferentes tipos de estilos, e imagens anteriores podem ser usadas para orientar a criação de novos.

**2022 - Leap Motion lança Midjourney - [Leia mais][19]**

Midjourney também é um modelo de texto para imagem. O que alguém pode fazer com isso é quase idêntico ao Dall-E; no entanto, há uma diferença notável nos resultados fornecidos devido aos diferentes conjuntos de treinamento. Não significa necessariamente que um seja melhor que o outro, apenas diferente.

**2022 - Stable Diffusion lançado por uma colaboração de Stability AI, CompVis LMU e Runway com suporte de EleutherAI e LAION - [Leia mais][20]**

Assim como Dall-E e Midjourney, Stable Diffusion é outro modelo para gerar imagens a partir de prompts textuais. A principal diferença é que as entidades que criaram este modelo o tornaram open-source, o que significa que qualquer pessoa pode brincar com ele. Isso gerou muito burburinho em torno dele, já que os modelos anteriores eram proprietários na época.

A partir de agora, é possível usar a maioria dessas tecnologias localmente ou através de um serviço (por exemplo, API OpenAI) para gerar texto e imagens. É possível gerar capítulos inteiros para um livro a partir de pequenos prompts de texto, pode não ser uma saída _pronta para lançamento_, mas pelo menos ajudará no bloqueio do escritor. Também é possível gerar imagens a partir de texto, imagens a partir de imagens e até mesmo pintar imagens existentes. Além disso, é possível apagar parte de uma imagem que você possui e fazer com que um desses modelos a complete usando outra imagem ou um prompt de texto. Além disso, também é possível estender uma imagem existente utilizando as mesmas técnicas (exemplo abaixo).

{{< youtube 6AmdZoSgTeE >}}

## Isso é mágico?

Todos esses avanços recentes são atribuídos principalmente a três grandes marcos na pesquisa de Deep Learning: [Redes Adversariais Generativas (GANs)] [21], [Modelos de Difusão] [22] e [Modelos de Transformadores] [23].

**GAN** foi uma estrutura revolucionária para treinar redes massivas sem ter exatamente um conjunto completo de dados para isso. Em alto nível, o método define que duas redes diferentes tentarão competir entre si em um jogo onde apenas uma pode vencer, aprendendo e melhorando a cada interação. [Deepfakes][24], por exemplo, geralmente são gerados usando esse método. Uma rede tenta gerar uma imagem _falsa_ de alguém e outra tenta adivinhar se é falsa ou real. Este método também foi usado para desenvolver AlphaGO e OpenAI Five.

O problema com essas técnicas é que o treinamento é difícil e, depois que a rede sabe como _enganar_ o segundo, há pouco ou nenhum incentivo para tentar coisas novas e interessantes.

Insira **Modelos de difusão**. Esses modelos foram feitos para que a questão da geração de uma imagem válida não aconteça em uma etapa, mas sim ao longo de um processo _denoize_ que pode levar _N_ etapas. Um conjunto de treinamento é construído adicionando diferentes níveis de ruído a imagens reais válidas (e suas respectivas descrições textuais). O processo de aprendizagem consiste então na rede aprender como remover ruído em pequenas quantidades para chegar à imagem final. Isso aumenta o controle sobre o processo de aprendizagem e acaba produzindo redes que podem produzir um número muito maior de resultados do que antes. Se você quiser saber mais sobre como tudo funciona, recomendo o vídeo abaixo.

{{< youtube 1CIpzeNxIhU >}}

Por fim, temos **Modelos de Transformadores**, este foi um dos avanços mais importantes no campo de aprendizado de máquina e, sem dúvida, um dos pilares que torna possível tudo o que vemos hoje. Esses modelos são redes neurais que podem aprender o contexto e, portanto, inferir significado a partir de dados sequenciais.

Antes dos transformadores, as redes dependiam de [redes neurais convolucionais (CNNs)] [25] e [redes neurais recorrentes (RNNs)] [26] para _aprender_ com um grande conjunto de dados rotulado. Eles levaram muito tempo e dinheiro para serem produzidos e aumentaram a complexidade do modelo final. Os transformadores não requerem conjuntos de dados rotulados porque podem encontrar os padrões matematicamente. Isso significa que agora é possível treinar os novos modelos com os trilhões de imagens e petabytes de dados de texto disponíveis na internet e nos bancos de dados das empresas.


## Democratização da IA

Uma das principais diferenças entre esta _onda de hype da IA_ e as anteriores é que o número de pessoas que podem experimentá-la e interagir com ela é muito maior do que nunca. A internet possibilitou a criação de serviços para explorar o que é possível e deixar as pessoas brincarem com isso. Em alguns casos, até criar novos modelos de negócios para as empresas por trás dessas inovações. Pessoalmente, ainda estou me perguntando quantas pessoas pagam OpenAI para brincar com Dall-E.

De um ângulo diferente, nunca houve tantos desses avanços disponibilizados como tecnologias de código aberto que as pessoas pudessem baixar, brincar e até mesmo desenvolver. A OpenAI lançou recentemente [whisper][27] e seu [modelo Dall-E 2][28] ao público. O modelo de Difusão Estável também está disponível para a comunidade e já existem vários projetos notáveis ​​por trás dele. Se você estiver interessado em executar o Stable Diffusion localmente, escrevi um tutorial sobre ele, experimente se estiver interessado.

{{< article link="/posts/202210-stable-diffusion-tutorial/" >}}

Uma das empresas que tem liderado esses esforços é a [HuggingFace][29]. A empresa fornece ferramentas que permitem aos usuários construir, treinar e implantar modelos de aprendizado de máquina baseados em tecnologias e códigos de código aberto. Também ajuda inúmeras partes a partilharem os seus modelos e a desenvolverem-se mutuamente. Um exemplo disso é o [BLOOM][30], um grande modelo de linguagem de código aberto criado de forma colaborativa entre milhões de pesquisadores.

Esta democratização da IA ​​é uma característica única desta nova onda de hype que o mundo está a viver, que tem o potencial de mudar completamente o resultado de como irá impactar as nossas vidas por três razões:

- **Os casos de uso são divertidos e todos podem experimentá-los** - Ao contrário das profecias autônomas ou das IAs de saúde oniscientes dos anos 80, esses casos de uso são muito mais simples e onipresentes, atraindo, portanto, mais pessoas.
- **Quase todo mundo pode experimentá-lo, mesmo que não entenda como funciona** - disponível por meio de licenças de software de código aberto ou por meio de um site, quase todo mundo que quiser pode experimentá-lo e se divertir com ele.
- **A comunidade pode desenvolver facilmente** - O fato de alguns deles serem abertos ao público aumentará exponencialmente a inovação que acontecerá no espaço.

Em última análise, todas as razões acima mencionadas contribuirão para tornar a IA como um todo uma tecnologia mais difundida e bem aceite, o que, esperançosamente, nos afastará das visões da cultura pop de filmes como _Terminator_ ou _The Matrix_.


## O que você pode fazer com isso hoje?

Estes modelos e tecnologias estão a tornar a capacidade de geração de conteúdos comoditizadora, que foi o último passo na _Cadeia de Valor de Propagação de Ideias_ que ainda não tinha sido fundamentalmente perturbada pela tecnologia. A internet já mudou totalmente a forma como distribuímos conteúdo (a última parte da cadeia). Quase todos os arquivos são digitais, podem ser copiados sem custo e enviados quase instantaneamente para qualquer pessoa no planeta. Essas novas tecnologias revolucionarão os estágios iniciais da cadeia de valor de propagação: a **criação** e a **substanciação** de uma ideia.

Considerando apenas as tecnologias com as quais tive a oportunidade de experimentar (Dall-e, Midjourney e Stable Diffusion), os pré-requisitos para aprender a desenhar, pintar ou modelar e renderizar conteúdo 3D desaparecem completamente. Qualquer um poderá dizer a um agente artificial o que deseja ver, e ele criará isso para ele.

Por exemplo, usei Difusão Estável para gerar a miniatura deste artigo. Eu sabia mais ou menos o que queria, então foi só uma questão de passar por algumas dezenas de ideias até encontrar algo que gostasse, alguns exemplos estão abaixo.

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

Além disso, se você ficar sem ideias e precisar de ajuda para projetar os prompts, já existem sites inteiros focados em indexar e fornecer os melhores prompts com exemplos do que outros criaram. [Lexica][31] e [Prompthero][32] são dois exemplos que experimentei com ótimos resultados.

No entanto, as imagens são apenas o começo…

## Além das imagens

Comecei a brincar com o Stable Diffusion há algumas semanas e tenho que admitir que as notícias que surgiram desde então me surpreenderam. Ao me surpreender com a facilidade que atualmente é pedir a uma IA para gerar imagens, percebi que alguns projetos estão tentando ir muito além disso.

Tudo começou quando me deparei com este retuíte do MKBHD:

{{< tweet user="mkbhd" id="1582772722240999425" >}}

Fiquei surpreso ao ver que já existiam resultados tão bons para modelos de texto para vídeo e que tantas empresas estavam trabalhando nisso. Naquela semana, descobri uma startup chamada [Runway][33] que está trabalhando em um editor de vídeo alimentado por todas essas inovações de aprendizado de máquina. Alguns dias depois, vi artigos para a nova rede de texto e vídeo do Google, [Imagen Video][34], e o anúncio da Meta sobre [Make-a-Video][35].

Depois de descobrir rapidamente todo o trabalho que está acontecendo também para gerar modelos 3D a partir de texto e imagens planas, e animar modos 3D com base em descrições textuais.

No entanto, o mais surpreendente (e também um pouco desanimador devido às possíveis implicações) foi um podcast que encontrei de Joe Rogan entrevistando Steve Jobs, criado por [podcast.ai][36]. Para quem não sabe, Joe Rogan tem um programa de podcast de grande sucesso que dura anos e Steve Jobs está, bem, morto. No entanto, esses dois homens nunca tiveram a chance de estar juntos na mesma sala e, sem a permissão deles, imagino, há 20 minutos de áudio deles conversando como se a conversa tivesse acontecido.

<iframe width="100%" height="180" frameborder="no" scrolling="no" Seamless src="https://share.transistor.fm/e/22f16c7f"></iframe>

Ao pensar nos impactos do uso dessas tecnologias para _emular_ pessoas que não estão mais entre nós, me deparei com [este artigo][37]. Portanto, não existem apenas alguns exemplos de pessoas que fazem isso com celebridades, mas também empresas como a DeepBrain AI que já monetizam esse serviço e podem criar um avatar digital de seus entes queridos perdidos.

## Potenciais armadilhas

Ao longo da nossa história como espécie, sempre houve problemas e questões que tiveram que ser resolvidas após o surgimento de uma nova invenção.

### Legal e Ético

Uma das potenciais armadilhas são as implicações legais e éticas destes novos sistemas de IA e os seus impactos na sociedade. Por exemplo, ao gerar uma imagem usando um dos modelos de texto para imagem deste artigo, quem é o proprietário do produto final? A pessoa que vem com o prompt? A equipe que constrói o modelo? A equipe que constrói o conjunto de treinamento? Os artistas cujas imagens estavam naquele set? Todos eles? Nenhum deles? Nada disso está resolvido nesta fase e já é uma grande preocupação.

Uma das discussões relevantes que estão acontecendo agora em relação a este tópico é sobre questões de direitos autorais do produto Copilot do GitHub. Copilot é uma IA que foi treinada usando todos os repositórios de código disponíveis no GitHub para capacitar um desenvolvedor a codificar mais rapidamente, transformando comentários em código, por exemplo. Como você se sentiria tendo seu código sendo usado para gerar potencialmente milhões para uma empresa privada sem receber um centavo por isso? Há mais informações [aqui][38] se você estiver interessado.

Os artistas também estão descobrindo como sua arte foi usada para treinar esses modelos e não estão [felizes com isso] [39]. As empresas e startups também precisam se preocupar com infrações de propriedade intelectual [40] se estiverem usando alguma dessas soluções ou criando-as.

Por fim, há um problema ainda maior quando se considera que esta tecnologia pode ser utilizada por pessoas mal intencionadas. Gerar imagens de pessoas fazendo coisas que nunca fizeram ou dizendo algo que nunca fizeram. Este é o mesmo problema com Deepfakes, que já tem diversas iniciativas de pesquisa em andamento, mas ainda é uma preocupação real. Pelo que vale a pena, algumas ferramentas neste artigo fizeram um ótimo trabalho garantindo que você não possa gerar esse tipo de conteúdo adicionando filtros de segurança aos seus serviços. No entanto, para todos os de código aberto, qualquer pessoa tem o poder de ignorar essas medidas de segurança.

Todas estas são preocupações jurídicas muito válidas dentro da indústria que devem ser abordadas o mais rápido possível, ou existe o risco de que tudo isso se transforme numa tempestade jurídica que nos fará retroceder anos. Mais do que apenas os aspectos legais, esta tecnologia tem um potencial muito real para destruir a vida de alguém; portanto deve ser pensado com tempo e baixa tolerância a erros.

### Valor percebido e reação negativa

Inicialmente, pensei que esta tecnologia faria de todos bons artistas, mas depois de brincar com ela, não estou mais convencido de que seja esse o caso. O que faz um bom artista é mais do que apenas sua habilidade bruta de execução. Fatores como criatividade, o que você realmente quer criar e conhecimento artístico são de super importância para se ter um bom produto final. Nesta fase, penso que estas tecnologias permitirão que pessoas normais sejam capazes de _criar_ algo, mas darão aos atuais artistas profissionais **superpoderes** que lhes permitirão levar o seu trabalho a outro nível.

Dito isto, o facto de estes modelos nos permitirem, como sociedade, produzir mais, mais rapidamente e a um custo menor, terá um impacto no valor percebido dos seus resultados. Por exemplo, imagine um departamento de design de uma determinada publicação de mídia com cerca de 20 pessoas. Se a tecnologia atual se tornar popular, provavelmente esse mesmo departamento não precisará de 20 pessoas.

Houve uma história não muito longa sobre um jornalista do The Atlantic que usou o Midjourney para gerar imagens para um artigo e recebeu uma reação massiva no Twitter. Você pode ler a opinião dele sobre o que aconteceu [aqui][41]. Dado o ambiente já difícil e competitivo em que alguns destes artistas trabalham, o potencial retrocesso contra estas ferramentas é compreensível. Existe um potencial impacto real no mercado de trabalho. Embora seja mau para algumas pessoas a curto prazo, a verdadeira questão é se será bom ou mau a longo prazo. Esse fenômeno é bastante comum em grandes inovações tecnológicas e já aconteceu diversas vezes ao longo da história.
  
_Nota: Já existe uma nova área chamada [Prompt Engineering][42], e outras poderão aparecer em breve._

Curiosamente, **preocupações legais** e **reações humanas** sempre foram as principais armadilhas para a adoção de qualquer sistema de IA no passado, mais do que com a tecnologia em geral.


## Qual é o próximo?

Penso que as aplicações actuais da tecnologia já existente serão enormes e, portanto, qualquer previsão que se possa fazer terá um elevado grau de incerteza. Essas tecnologias afetam a atual _Cadeia de Valor de Propagação de Ideias_, especificamente nas partes dessa cadeia que nunca foram tocadas até agora, _**criação**_ e _**substanciação**_. Este fato por si só tem o potencial de nos impactar mais do que a Internet, que mudou as partes de _**duplicação**_ e _**distribuição**_ da cadeia. Somente esses impactos poderiam ser uma discussão para páginas e páginas de uma série inteira de livros. Se você estiver interessado nesta parte do tópico, recomendo fortemente o [artigo] [43] de Ben Thompson sobre o assunto.

Com a isenção de responsabilidade acima, aqui está o que acho que acontecerá neste espaço nos próximos 2 a 5 anos.

- **As questões jurídicas em torno da propriedade aumentarão até que surja uma boa solução** - Já discutimos algumas possíveis questões jurídicas neste artigo, se não forem resolvidas, existe o risco de descarrilar tudo o que está acontecendo no espaço. No que diz respeito aos direitos de autor, penso que os fundamentos para acções legais são confusos, para dizer o mínimo, o que poderá arrastar estas discussões durante anos antes que haja realmente qualquer impacto real na inovação.
- **Aumento dramático no financiamento para empresas que trabalham nestes problemas** – Hype geralmente significa FOMO, o que significa mais dinheiro para quem quiser resolver problemas no espaço (sim, mesmo na atual situação macroeconómica). Já estamos vendo os primeiros sinais em torno disso, com algumas empresas levantando algumas das maiores rodadas de sementes da história:
- [StabilityAI, os criadores do Stable Diffusion, levantaram uma semente de US$ 101 milhões em uma avaliação pós-dinheiro de US$ 1 bilhão] [44].
- [Jasper, o criador de uma plataforma de conteúdo para profissionais de marketing, levantou US$ 125 milhões em uma avaliação de US$ 1,5 bilhão] [45]
- **A tecnologia começará a ser produzida como recursos de produtos existentes** - Parte dessa tecnologia tem potencial para ser usada em softwares de edição de imagem e vídeo hoje. Empresas como a [Runway][46] já estão criando produtos totalmente novos com essa tecnologia em sua essência. Empresas estabelecidas como a Adobe já [começaram a incluir essas ferramentas em seus softwares] [47], ou seja, Dall-E direto para a Adobe Creative Cloud.
- **Todas essas áreas começarão a se fundir com resultados coesos** - Espero ver algo acontecendo em torno disso nos próximos 12 a 18 meses. Pelo menos algum tipo de PoC que fundirá no mínimo 2 dessas áreas em algo novo, ou seja, vídeo + áudio ou 3D + animação, etc.
- **Jogos, VR e Metaverso** - Sinto que o maior potencial desta tecnologia é o quanto ela pode acelerar a criação de conteúdo (uma vez que a qualidade é constante, o que ainda não é o caso). Jogos e conteúdos 3D são onde vejo o maior problema que esses modelos poderiam resolver. Pense na quantidade de tempo, recursos e dinheiro gastos para criar personagens para um jogo, incluindo conceituação, modelagem, rigging, animação, etc. As ferramentas de IA poderiam tornar a criação desses enormes mundos de jogo mais eficaz e eficiente.

Enquanto esperamos para saber o que acontecerá neste espaço emocionante, continuarei pesquisando e brincando com essas tecnologias o máximo que puder. O que você criará com esses sistemas? Quais você acha que são os impactos de implantá-los em escala? Entre em contato comigo e me avise.


{{< alerta >}}
Nota: Enquanto isso, criei uma conta no Instagram para compartilhar minhas criações do Stable Diffusion com a web 😬
{{</ alerta >}}

</br>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" plano de fundo :#FFF; borda:0; raio da borda:3px; sombra da caixa:0 0 1px 0 rgba(0,0,0,0,5),0 1px 10px 0 rgba(0,0,0,0,15); margem: 1px; largura máxima:540px; largura mínima:326px; preenchimento:0; largura:99,375%; largura:-webkit-calc(100% - 2px); largura:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&utm_campaign=loading" style=" background:#FFFFFF; line-height:0; preenchimento :0 0; alinhamento de texto:centro; decoração de texto:nenhum; largura:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex- crescer: 0; altura: 40px; margem direita: 14px; largura: 40px;"></div> <div style="display: flex; flex-direction: coluna; flex-grow: 1; justificar-content: centro ;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style =" cor de fundo: #F4F4F4; raio da borda: 4px; flex-grow: 0; altura: 14px; largura: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\<svg width="50px" height="50px" viewBox= "0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"\>< g acidente vascular cerebral="none" acidente vascular cerebral-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g> <caminho d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 5 60,59,36,186 560,59,34,131 C560,59,32,076 558,924, 30,41 556,869,30,41 M541,60,657 C535.114,60,657 530,342,55,887 530,342,50 C530,342,44,114 535,114,39,342 541,39,342 C546,887,39 0,342 551,658,44,114 551,658,50 C551,658,55,887 546,887,60,657 541, 60,657 M541,33,886 C532,1,33,886 524,886,41,1 524,886,50 C524,886,58,899 532,1,66,113 541,66,113 C549,9,66,113 557,115,58,899 5 57.115,50 C557.115,41,1 549,9,33,886 541,33,886 M565. 378.62.101 C565.244.65.022 564.756.66.606 564.346.67.663 C563.803.69.06 563.154.70.057 562.106.71.106 C561.058.72.155 560.06,7 2.803 558.662.73.347 C557.607.73.757 556.021.74.244 553.102.74.378 C549.944 . C521.94.72.803 520.942.72.155 519.894.71.106 C518.846.70.057 518.197.69.06 517.654 . 516.623.37.899 C516.755.34.978 517.244.33.391 517.654.32.338 C518.197, 30.939 23 C532.057,25.479 533.004,25.448 541.25.448 C548.997,25.448 549.943,25.479 553.102, 25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30,9 38 564.346.32.338 C564.756.33.391 565.244.34.978 565.378.37.899 C565.522.41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425, 30.349 C568.659,28.377 567.633.26.702 565.965,25.035 C564.297,23.368 562.623 . 33 528.631.20.18 C525.438.20.326 523.257.20.834 521.349.21.575 C519 . 1.37.631 C511.035.40.831 511.41.851 511.50 C511.58.147 511.035.59.17 511.181 . 0,658 521,349,78,425 C523,257,79,167 525,438,79,673 528,631,79,82 C531,831, 79.965 532.853.80.001 541.80.001 C549.148.80.001 550.169.79.965 553.369.79.82 C556.562.79.673 558.743.79.167 560.652.78.425 C5 62.623,77,658 564,297,76,634 565,965,74,965 C567,633,73,296 568,659,71,625 569,425, " </caminho></g></g></g> </svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; família de fontes: Arial, sem serifa; tamanho da fonte: 14px; estilo da fonte: normal; peso da fonte: 550; line-height:18px;">Veja esta postagem no Instagram</div></div><div style="padding: 12.5% ​​0;"></div> <div style="display: flex; direção flexível: linha; margem inferior: 14px; alinhar itens: centro;"><div> <div style="background-color: #F4F4F4; raio da fronteira: 50%; altura: 12,5px; largura: 12,5px; transformar: traduzirX(0px) traduzirY(7px);"></div> <div style="background-color: #F4F4F4; altura: 12,5px; transformar: girar(-45deg) traduzirX(3px) traduzirY(1px); largura: 12,5px; flex-crescer: 0; margem direita: 14px; margem esquerda: 2px;"></div> <div style="background-color: #F4F4F4; raio da fronteira: 50%; altura: 12,5px; largura: 12,5px; transformar: traduzirX(9px) traduzirY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; raio da fronteira: 50%; flex-crescer: 0; altura: 20px; largura: 20px;"></div> <div style=" largura: 0; altura: 0; borda superior: 2px sólido transparente; borda esquerda: 6px sólido #f4f4f4; borda inferior: 2px sólido transparente; transformar: traduzirX(16px) traduzirY(-4px) girar(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; borda superior: 8px sólido #F4F4F4; borda direita: 8px sólido transparente; transformar: traduzirY(16px);"></div> <div style=" background-color: #F4F4F4; flex-crescer: 0; altura: 12px; largura: 16px; transformar: traduzirY(-4px);"></div> <div style=" largura: 0; altura: 0; borda superior: 8px sólido #F4F4F4; borda esquerda: 8px sólido transparente; transformar: traduzirY(-4px) traduzirX(8px);"></div></div></div> <div style="display: flex; direção flexível: coluna; crescimento flexível: 1; justificar-conteúdo: centro; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; raio da borda: 4px; flex-crescer: 0; altura: 14px; margem inferior: 6px; largura: 224px;"></div> <div style=" background-color: #F4F4F4; raio da borda: 4px; flex-crescer: 0; altura: 14px; largura: 144px;"></div></div></a><p style=" color:#c9c8cd; família de fontes: Arial, sem serifa; tamanho da fonte: 14px; altura da linha: 17px; margem inferior:0; margem superior: 8px; estouro: oculto; preenchimento:8px 0 7px; alinhamento de texto:centro; estouro de texto: reticências; espaço em branco:nowrap;"><a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&utm_campaign=loading" style=" color:#c9c8cd; família de fontes: Arial, sem serifa; tamanho da fonte: 14px; estilo da fonte: normal; peso da fonte:normal; altura da linha: 17px; text-decoration:none;" target="_blank">Uma postagem compartilhada por Art by a Ghost (@artbyaghost)</a></p></div></blockquote> <script async src="//www .instagram.com/embed.js"></script>

[1]: https://openai.com/about/
[2]: https://about.google
[3]: https://www.deepmind.com
[4]: https://about.meta.com/company-info/
[5]: https://www.deepmind.com/research/highlighted-research/alphago
[6]: https://openai.com/five/
[7]: https://en.wikipedia.org/wiki/Generative_adversarial_network
[8]: https://en.wikipedia.org/wiki/Diffusion_model
[9]: https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[10]: https://en.wikipedia.org/wiki/DeepDream
[11]: https://en.wikipedia.org/wiki/Convolutional_neural_network
[12]: https://artsandculture.google.com/story/the-story-of-alphago-barbican-centre/kQXBk0X1qEe5KA?hl=en
[13]: https://en.wikipedia.org/wiki/Unsupervised_learning
[14]: https://openai.com/blog/openai-five-defeats-dota-2-world-champions/
[15]: https://en.wikipedia.org/wiki/GPT-3
[16]: https://www.youtube.com/watch?v=89A4jGvaaKk
[17]: https://en.wikipedia.org/wiki/DALL-E
[18]: https://en.wikipedia.org/wiki/DALL-E
[19]: https://en.wikipedia.org/wiki/Midjourney
[20]: https://en.wikipedia.org/wiki/Stable_Diffusion
[21]: https://en.wikipedia.org/wiki/Generative_adversarial_network
[22]: https://en.wikipedia.org/wiki/Diffusion_model
[23]: https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[24]: https://en.wikipedia.org/wiki/Deepfake
[25]: https://en.wikipedia.org/wiki/Convolutional_neural_network
[26]: https://en.wikipedia.org/wiki/Recurrent_neural_network
[27]: https://openai.com/blog/whisper/
[28]: https://www.openculture.com/2022/10/dall-e-the-new-ai-art-generator-is-now-open-for-everyone-to-use.html
[29]: https://huggingface.co
[30]: https://huggingface.co/bigscience/bloom?text=Poor+English%3A+She+no+went+to+the+market.+Corrected+English%3A
[31]: https://lexica.art/
[32]: https://prompthero.com/
[33]: https://runwayml.com
[34]: https://imagen.research.google/video/
[35]: https://ai.facebook.com/blog/generative-ai-text-to-video/%0a
[36]: https://podcast.ai/
[37]: https://technode.global/2022/10/21/this-startup-allows-you-to-reunite-with-deceasel-loved-ones-using-ai-technology/
[38]: https://githubcopilotinvestigation.com/
[39]: https://edition.cnn.com/2022/10/21/tech/artists-ai-images
[40]: https://techcrunch.com/2022/10/07/5-key-ip-considerations-for-ai-startups/
[41]: https://newsletters.theatlantic.com/galaxy-brain/62fc502abcbd490021afea1e/twitter-viral-outrage-ai-art/
[42]: https://en.wikipedia.org/wiki/prompt_engineering
[43]: https://stratechery.com/2022/the-ai-unbundling/
[44]: %20https: //techcrunch.com/2022/10/17/stability-ai-the-startup-behind-stable-diffusion-raises-101m/%0a
[45]: https://techcrunch.com/2022/10/18/ai-content-platform-jasper-raises-125m-at-a-1-7b-valuation/
[46]: https://runwayml.com
[47]: https://blog.adobe.com/en/publish/2022/10/18/bringing-next-tave-ai-creative-cloud