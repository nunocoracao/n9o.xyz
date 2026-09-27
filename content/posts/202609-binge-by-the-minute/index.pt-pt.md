---
title: "A Netflix ensinou-nos a fazer binge. Estas apps vendem-no ao minuto."
summary: "Um anúncio no Instagram sobre um zé-ninguém secretamente omnipotente levou-me a uma landing page descartável, a uma app com 100 milhões de instalações, a uma empresa num edifício industrial em Hong Kong e a um passe semanal que as pessoas dizem não conseguir cancelar. Segui o dinheiro."
description: "O que um anúncio de drama vertical está realmente a vender: o funil, a economia das moedas, as empresas por trás da ShortMax, da ReelShort e da DramaBox, e se alguma parte disto é slop de IA."
categories: ["Tecnologia", "Media", "Negócios"]
tags: ["media", "mobile", "publicidade", "microdrama", "ai", "investigação"]
date: 2026-09-27
---

Durante uma semana, o Instagram insistiu que eu conhecesse o Nate Ryder.

O Nate é pobre. Toda a gente o odeia. Um rapaz mais rico arruinou-lhe a família. Aproxima-se um torneio nacional. Felizmente, o Nate é também, em segredo, um deus do trovão de rank SSS, o que parece uma informação útil que ele podia ter mencionado mais cedo.

Mesmo quando está prestes a revelar-se, o anúncio acaba.

A série chama-se *SSS-Rank: The Slum-Born Thunder God*. Não perde tempo com ambiguidades. Os vilões escolheram a humilhação pública como carreira a tempo inteiro, o herói está a um punho luminoso da vingança, e o botão por baixo do vídeo oferece a única coisa que eu agora quero: o minuto seguinte.

A qualidade da coisa toda era péssima. A representação, a escrita, a iluminação, o som, a montagem, o ritmo, a sincronização labial, os planos da multidão, as mãos, as caras a mudar entre planos, o texto no ecrã: estava tudo errado. Também era cativante. Isto era slop gerado por IA com um gancho, e eu queria ver o que acontecia a seguir.

Não carreguei no botão. Em vez disso, abri o código-fonte da página.

A culpa é da [minha carreira](/about/). Passei os primeiros seis ou sete anos dela a trabalhar em televisão e streaming, e nunca perdi o hábito de observar o que fazem os grandes: Netflix, Amazon Prime Video, HBO e os restantes. Os últimos dois anos têm sido fascinantes de acompanhar. Isto era diferente. Não a IA, que eu esperava, mas a quantidade de maquinaria que estava por trás de um mau minuto de vídeo.

Portanto, isto é o que eu estava a ver, para onde vai o botão e quem é pago. O que encontrei foi uma máquina muito antiga com roupa nova, e um primeiro vislumbre daquilo em que as histórias se tornam quando a única pergunta que resta é se vamos pagar.

## O que estava eu a ver

Tirem-lhe os relâmpagos e o que sobra é o manual da Netflix.

A Netflix passou uma década a ensinar-nos a fazer binge. [Declarou o binge watching "o novo normal"](https://www.prnewswire.com/news-releases/netflix-declares-binge-watching-is-the-new-normal-235713431.html) ainda em 2013, e construiu o produto à volta disso: cada episódio acaba num gancho para que a contagem decrescente do autoplay ganhe e seis horas desapareçam numa terça-feira. O anúncio do deus do trovão é essa ideia reduzida ao essencial. Não há uma temporada para atravessar. Há um minuto, uma injustiça, um gancho e, depois, um cadeado.

Cada episódio faz avançar a história exatamente uma unidade emocional:

- insulto;
- plano de reação;
- indícios de que o herói pode ser especial;
- ninguém acredita nos indícios;
- alguém sobe a parada;
- corte para o cadeado.

A história existe para fabricar um sentimento, depressa: esta pessoa está a ser injustiçada, e queremos ver isso ser corrigido. A [sinopse oficial](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605) faz o trabalho em quatro frases. O Nate é "desprezado como um falhado sem valor". A saúde do pai foi "destruída por vender sangue para um soro" que um "rufia privilegiado" depois destruiu. O rufia "espera humilhá-lo diante de milhares". Em vez disso, o Nate "choca o mundo e começa a sua ascensão imparável". Uma caracterização subtil só atrasaria a transação.

O cartaz é o sinal mais claro.

{{< figure src="poster.webp" alt="Cartaz de SSS-Rank: The Slum-Born Thunder God. Um jovem agachado num ringue de boxe com relâmpagos azuis à volta dos punhos. Atrás dele estão três mulheres loiras quase idênticas e um homem carrancudo de capuz. O título está gravado no chão em letras de metal." caption="O cartaz de [*SSS-Rank: The Slum-Born Thunder God*](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605), tal como servido pelo servidor de campanhas da ShortMax. Carregado a 18 de agosto de 2026." >}}

Três mulheres loiras quase idênticas num ringue de boxe, pele sem poros, iluminação sem fonte e um título gravado no chão em metal. A página da série credita uma "Criadora: Grace Whitman" e mais ninguém. Sem elenco, sem realizador, sem estúdio. Sessenta e um episódios, e nem um nome humano que se possa verificar.

A história não é o produto. A história é o isco, e o produto é o minuto seguinte. A Netflix removeu a espera entre episódios. Isto remove tudo o resto: o argumento, a representação, o gosto, os valores de produção, os nomes humanos. O que sobra é uma máquina para nos fazer querer ver o que acontece a seguir, e a arte de contar histórias substituída por uma transação de casino.

## O que acontece a seguir

O link do anúncio vai para [`storyreel.life`](https://w2a.storyreel.life/v6/2/fb02.html?shorttv_adid=288123&language=en), com a marca **StoryReel**. Parece um site de streaming: o cartaz, a sinopse, um botão laranja a pulsar que diz "Continue Watch" e uma pequena mão animada a apontar para ele.

Não é um site de streaming. A StoryReel não aloja um único vídeo. O código dela faz quatro coisas que importam.

1. Vai buscar o cartaz, o título e a sinopse a um servidor de campanhas da **ShortMax**, indexado pelo ID do anúncio no URL.
2. Faz o fingerprinting do browser, descobre o endereço IP e reporta que chegámos, juntamente com o ID de clique que a Meta anexou ao link.
3. Quando tocamos em qualquer sítio da página (o botão é decorativo; a página inteira é o botão), copia um código escondido com o ID do episódio para a área de transferência.
4. Tenta abrir a app ShortMax com um link `shorttv://`. Se a app não estiver instalada, envia-nos para a [App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) ou para o [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps). O código na área de transferência está lá para que a app o possa ler depois da instalação e nos deixar diretamente no episódio que estávamos a ver.

Esse último truque é a razão pela qual o funil não nos perde entre o anúncio e a app. É também a razão pela qual a página nunca me perguntou nada. Não há conta, não há preço, não há termos. Tudo isso espera dentro da app, depois de o gancho ter feito o seu trabalho.

{{< inlinesvg src="funnel.svg" alt="Diagrama animado de dois ciclos unidos num nó partilhado. À esquerda, um espectador passa de um anúncio no feed para episódios gratuitos, para um cliffhanger, para a instalação da app, e volta ao início. À direita, o dinheiro passa do cliffhanger para moedas ou um passe, para a compra de mais anúncios, e volta aos episódios gratuitos." caption="Dois ciclos que partilham um cliffhanger. O espectador dá a volta ao da esquerda. O dinheiro dá a volta ao da direita. Nenhum deles tem uma saída incorporada." >}}

A série em si vive no site da própria ShortMax como [drama 32605](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605), com 61 episódios. O [servidor de campanhas](https://prod-api.storyreel.life/prod-api/16/app/hiCampaignLink/getConfig?adId=288123&pageType=1&ver=001) reporta 6,076,623 reproduções. O ficheiro do cartaz tem a data de 18 de agosto de 2026, cinco semanas antes de chegar ao meu feed.

Tive de pagar? Ainda não. Quando encontrei a série no site da própria ShortMax, ofereceu-me os primeiros cinco episódios de graça. Tudo o que vem depois exige a app. Não vi nenhum deles e não instalei nada, por isso os preços vêm da [página da loja](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) e não do paywall em si. A página mostra o que espera: pacotes de moedas de $3.49 a $24.99, e um "Weekly Pass Pro" a $9.99 ou $19.99. Vinte dólares por semana não é uma gralha. Um utilizador que avaliou a app na loja nota que os episódios custam até 60 moedas cada, e que "só se vê o valor quando as moedas acabam e a app quer que compremos mais".

A app é classificada como 18+ e, segundo o resumo de privacidade da Apple, usa os identificadores do dispositivo para nos seguir nas apps de outras empresas. A página já me tinha feito o fingerprinting antes de eu chegar aí.

## Quem faz isto

A categoria chama-se **microdrama**, **short drama** ou **drama vertical**: ficção com argumento feita para um telemóvel ao alto, em episódios que duram cerca de um minuto. Não é pequena.

No primeiro trimestre de 2026, a [Sensor Tower estimava](https://sensortower.com/blog/state-of-short-drama-apps-2026-report) que as apps de short drama tinham ultrapassado **850 milhões de downloads em três meses**, mais 140% do que no ano anterior. A receita de compras dentro da app chegou a cerca de **$750 milhões no trimestre**, ou **$3 mil milhões por ano** a esse ritmo. Seis apps de short drama estavam entre as 40 apps mais descarregadas do mundo. Em abril, as pessoas passavam em média 25 minutos por dia dentro delas. O episódio dura um minuto. O hábito não.

Estes números são estimativas da atividade na App Store e no Google Play. Excluem receita de publicidade e lojas Android de terceiros, por isso o número real é maior.

Três empresas mostram três versões da mesma exportação.

A **ReelShort** pertence à [Crazy Maple Studio](https://www.crazymaplestudios.com/), fundada em São Francisco em 2016, que é por sua vez uma subsidiária do [COL Group](https://restofworld.org/2023/what-is-reelshort/), uma empresa chinesa de literatura online. Essa linhagem importa: não chegaram ao short drama a encolher televisão. Chegaram vindos da ficção online serializada, que já sabia como fazer as pessoas pagar ao capítulo. A [TechCrunch apanhou a máquina a acelerar](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/) em novembro de 2023: $22 milhões em receita líquida desde o lançamento, um sábado com 326,000 instalações e $459,000 em receita, e cerca de 8,100 anúncios a correr ao mesmo tempo nos EUA na Meta. No primeiro trimestre de 2026, a Sensor Tower punha-a perto dos $140 milhões em receita dentro da app no trimestre.

A **DramaBox** é vendida pela [StoryMatrix Pte. Ltd.](https://apps.apple.com/us/app/dramabox-stream-drama-shorts/id6445905219), uma entidade de Singapura, e a empresa-mãe é a [Dianzhong Technology](https://restofworld.org/2023/what-is-reelshort/). É a que está a entrar no estúdio. A DramaBox juntou-se ao [Disney Accelerator de 2025](https://thewaltdisneycompany.com/news/disney-accelerator-2025/), onde a Disney Publishing disse estar em conversações para adaptar romances de fantasia para jovens adultos a microdramas para as plataformas da Disney, e a Disney Music está a explorar transformar álbuns em vídeos verticais curtos. Isto não é só um crachá. A Disney diz que os [participantes "recebem capital de investimento"](https://thewaltdisneycompany.com/news/disney-accelerator-companies-2025/), portanto detém uma parte, por pequena que seja; o montante não é divulgado. Um acelerador não é uma aquisição. Significa, sim, que um formato descartado como lama de feed há dois anos é agora algo a que a Disney pagou para se sentar mais perto. O deus do trovão entrou no edifício. Traz um crachá de visitante, e foi a Disney que lho comprou.

A **ShortMax**, a app por trás do meu anúncio, é a maior e a menos legível. O [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps) mostra mais de 100 milhões de instalações. A [página na App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) afirma ter 50,000 dramas e filmes em 19 línguas. O vendedor em ambas as lojas é a **SHORTTV LIMITED**, que os seus próprios [termos de serviço](https://www.shorttv.live/Temsof) colocam em "Unit 2-J3, 1st Floor, Fuk Hong Industrial Building", em Mong Kok, Hong Kong. Os media estatais chineses [noticiam](https://www.chinadailyhk.com/hk/article/624225) que a ShortMax pertence à Jiuzhou Culture, uma produtora chinesa de short drama. Não encontrei nenhum registo que o confirme.

{{< inlinesvg src="layers.svg" alt="Diagrama de quatro caixas em fila, cada uma mais sólida do que a anterior: StoryReel, o nome no anúncio; ShortMax, a app; SHORTTV LIMITED, o vendedor em Hong Kong; e Proprietário, alegadamente a Jiuzhou Culture, sem registos encontrados. Por baixo delas, as moedas fluem da esquerda para a direita." caption="Cada camada é mais sólida do que a anterior, e cada uma é mais difícil de alcançar. A marca do anúncio pode ser deitada fora amanhã. O proprietário é uma notícia de imprensa." >}}

Essa estrutura não é sinistra por si só. Uma marca de campanha pode ser substituída sem reconstruir a app. A app fica com a nossa conta e com a relação de pagamento. O vendedor legal mantém-se invisível a menos que alguém leia as letras pequenas.

### São todas chinesas?

Sim, e nenhuma delas serve a China.

Cada uma das três remonta a uma empresa-mãe chinesa: a ReelShort ao COL Group, a DramaBox à Dianzhong, a ShortMax alegadamente à Jiuzhou Culture. As empresas da Califórnia, de Singapura e de Hong Kong pelo meio são a forma habitual de uma app de consumo chinesa ir para o estrangeiro. O TikTok, a Shein e a Temu são construídos da mesma maneira.

São produtos de exportação. O mercado doméstico corre no Douyin, no Kuaishou, no WeChat e no Hongguo da ByteDance, com apps diferentes e séries diferentes, e é muito maior: o regulador conta [800 milhões de utilizadores e mais de 100 mil milhões de yuans (cerca de $15 mil milhões) em 2025](https://www.globaltimes.cn/page/202609/1370760.shtml). Em casa, os microdramas são licenciados, [68,000 foram retirados este ano](https://www.globaltimes.cn/page/202609/1370760.shtml) por serem nocivos, de mau gosto ou pirateados, e [os feitos com IA têm de ter uma etiqueta](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html). O deus do trovão não tem etiqueta. Nenhuma dessas regras acompanha as versões de exportação para fora do país.

Isto é patrocinado pelo Estado? Não no sentido de uma operação. No sentido de política industrial, abertamente. O vice-ministro do regulador disse a 17 de setembro de 2026 que até 2030 o Estado vai ["apoiar conteúdos e plataformas a ir para o estrangeiro"](https://www.globaltimes.cn/page/202609/1370760.shtml), e que os microdramas chineses já detêm [mais de 80% do mercado externo](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html). [As cidades competem com subsídios](https://www.globaltimes.cn/page/202605/1362076.shtml) para acolher os estúdios. A Coreia do Sul fez algo parecido com o K-drama, e ninguém lhe chamou um ataque. Um [ensaio do Yale Journal of International Affairs](https://www.yalejournal.org/publications/micro-drama-as-soft-power-yedbr) de maio de 2026 defende que saber se Pequim dirige isto ou apenas o permite é uma questão secundária. O que importa é que um pipeline deste tamanho decide "que histórias entram no tempo de lazer dos americanos", e todos os pontos de estrangulamento nele estão fora da regulação ocidental.

O fingerprinting e a recolha de IP que encontrei na landing page são reais, e são também adtech padrão. Não tenho provas que os liguem a nada além de tracking de conversões, e não as vou inventar.

Não é sinistro, então. Mas essas quatro camadas são o que torna a parte seguinte muito difícil de corrigir.

### A subscrição que ninguém consegue encontrar

Os termos da ShortMax dizem que uma subscrição "será renovada automaticamente 24 horas antes da data de expiração", e que para cancelar se deve "consultar a secção 'About Subscription' na app ShortMax". Dizem também que os pagamentos "têm de ser feitos através dos métodos especificados pela ShortMax", que a empresa "tem o direito de ajustar".

Os utilizadores dizem que não conseguem encontrar a saída. No [Trustpilot](https://www.trustpilot.com/review/www.shortmax.app), a ShortMax tem 1.2 em 5 ao longo de 77 avaliações, 99% delas com uma estrela. As queixas repetem-se: cobrados $19.99 por semana depois de cancelar, cobrados $13.99 sem nunca terem subscrito, um período de teste gratuito que se transformou em $239.88. Este último valor é doze vezes $19.99, que é o que custariam doze renovações semanais. Vários dizem que a subscrição não aparece nas definições da Apple ou da Google, que é onde normalmente se cancelaria, e que a única coisa que funcionou foi ligar ao banco.

O [Better Business Bureau](https://www.bbb.org/us/fl/miami/profile/mobile-apps/shortmax-innovations-0633-92056233/complaints) lista uma "Shortmax Innovations" numa morada na Brickell Avenue, em Miami, com classificação F e 149 queixas encerradas em três anos. A sua investigação de junho de 2026 não encontrou registo empresarial válido, nem proprietários identificados, nem email ou telefone a funcionar. Se é esse o nome nos extratos de cartão das pessoas ou uma coincidência, não consigo dizer a partir dos registos públicos. Não é a empresa dos termos de serviço.

Quero ter cuidado aqui. São relatos de utilizadores e um agregador de queixas, não uma decisão judicial. Mas o padrão é consistente entre fontes, é consistente com os termos e encaixa no funil. Um produto tão eficaz a remover fricção à entrada não tem nenhuma razão comercial para a acrescentar à saída.

### Porque é que a moeda é a verdadeira protagonista

A economia faz sentido assim que deixamos de comparar estas apps com a Netflix.

A Netflix vende acesso a um catálogo. As apps de microdrama vendem **resolução**. Uma subscrição pergunta se vale a pena pagar por um serviço inteiro, uma vez por mês, num momento calmo. Uma moeda faz uma pergunta mais pequena num momento muito mais quente: queres saber o que acontece a seguir?

Por isso, o número que importa não é a receita. É o rácio entre o que custa adquirir um espectador pagante e o que esse espectador gasta antes de se ir embora. Se uma coorte cobre a produção, a comissão da loja de apps, os espectadores gratuitos e a próxima ronda de anúncios, a campanha escala. Se não cobre, a StoryReel desaparece e amanhã aparece uma marca nova com um lobisomem bilionário, uma herdeira abandonada ou um cirurgião cuja família cometeu o erro catastrófico de duvidar dele.

É aí que entra a IA, e não é onde eu esperava.

Os microdramas filmados com humanos custam dinheiro a sério: o New York Times [apontou uma série entre $150,000 e $300,000](https://www.c21media.net/news/ai-slashing-cost-of-microdrama-production-in-china-to-30-per-minute/) em maio de 2026. A mesma reportagem encontrou produtores chineses a fazê-los por apenas **$30 por minuto** com ferramentas de IA que "removem quase completamente os humanos". A DataEye contou quase 50,000 novos microdramas gerados por IA no Douyin só em março de 2026. Em setembro, o próprio regulador disse que a China tinha lançado [430,000 microdramas nos primeiros oito meses do ano, mais de 90% deles feitos com IA](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html), treze vezes o total de 2025.

{{< inlinesvg src="cost.svg" alt="Gráfico de barras a comparar o custo de uma série. Filmada com humanos: uma barra longa com a etiqueta 150,000 a 300,000 dólares. Feita com IA, 61 minutos a 30 dólares por minuto: uma barra com quatro píxeis de largura com a etiqueta cerca de 1,800 dólares." caption="O que custa fazer uma série de 61 episódios, na mesma escala. A barra da IA está desenhada ao tamanho real." >}}

A $30 por minuto, o meu deus do trovão de 61 episódios custaria cerca de $1,800 a produzir. A esse preço, as contas da aquisição mudam por completo. Já não é preciso um êxito. É preciso mil tentativas, um dashboard e a disciplina para matar tudo o que não converte. A história deixa de ser o produto. Passa a ser uma variante do anúncio.

## Isto é slop de IA?

Na minha opinião, sim, sem dúvida nenhuma. Listei o que estava errado na abertura e não o vou repetir. Não é uma questão de gosto. É uma questão de ofício.

Há algum tempo, ouvi dois amigos a discutir sobre arte, tecnologia e IA. Um deles é artista. Um disse "bem, mas a arte é subjetiva", e a resposta foi "sim, mas o ofício não é". É essa a distinção aqui. Ninguém envolvido no deus do trovão estava a tentar contar uma história, por isso não há história para julgar. A série existe para nos fazer querer carregar num botão, e o facto de querermos carregar nele não a torna boa. As slot machines também são cativantes.

O próprio regulador chinês, no mesmo anúncio em que contou mais de 90% dos lançamentos deste ano como feitos com IA, [chamou à imagem real "o pilar das produções de qualidade"](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html) e pôs dinheiro por trás disso. O país que produz o slop concorda que é slop.

A IA é uma ferramenta, não uma varinha mágica. Não é a razão de isto estar a acontecer. É o que o permite. Alguém decidiu que a história nunca foi o ponto, e a IA tornou essa decisão quase gratuita. Sem alma, sem ofício, sem arte. Só uma máquina que joga com um reflexo, com um botão no fim.

## Conclusões

Fui à procura de quem é pago e encontrei a resposta em todas as camadas menos na última. O que não esperava encontrar era quão pouco do dinheiro tinha alguma coisa a ver com a série.

**Arte versus casino.** A Netflix ensinou-nos a fazer binge, mas teve de fazer algo que as pessoas adorassem para as manter. O gancho só funcionava porque nos importávamos com o que acontecia às personagens. O deus do trovão fica com o gancho e deita fora o importar-se. Querer saber o que acontece a seguir costumava ser a recompensa por uma história bem contada. Aqui foi isolado, purificado e vendido ao minuto, como o princípio ativo extraído de uma planta. É essa a diferença entre um teatro e uma slot machine, e os dois não devem ser confundidos por partilharem um ecrã.

**O lado do governo.** Os utilizadores dizem que não conseguem cancelar porque a subscrição nunca aparece nas definições da Apple ou da Google, o que significa que está a ser cobrada de outra forma qualquer. Todas as subscrições que essas duas cobram têm um botão de cancelar nas definições do telemóvel, ao lado do da Netflix. O que quer que tenha cobrado estes utilizadores não lhes deu um. A solução é tão velha como a venda por catálogo: quem recebe um pagamento recorrente tem de tornar a paragem tão fácil como o início. Mais duas soluções são igualmente aborrecidas: uma etiqueta no vídeo sintético, que a China exige em casa e não exige das suas exportações, e um vendedor cujo nome corresponda ao que aparece no extrato do cartão. Nada disto precisa de uma lei nova sobre IA. Precisa das velhas regras sobre vender coisas aplicadas a uma app que se esforçou muito para ficar mesmo fora delas.

**O lado da tecnologia.** A IA não inventou isto. Baixou a história marginal para qualquer coisa como mil e oitocentos dólares, e quando a história está assim tão perto de ser gratuita não se faz uma melhor, fazem-se 430,000 e deixa-se o dashboard escolher. A automação otimiza aquilo para que é apontada. Isto foi apontado ao botão.

**O que o slop é, e o que não é.** O slop não é um veredicto sobre a IA, e não é um veredicto sobre as pessoas que veem 25 minutos por dia, que estão a receber exatamente o reflexo que lhes foi vendido. Slop é conteúdo feito sem intenção nenhuma além da transação. Importa porque funciona, e o que funciona é copiado. A Disney não pôs dinheiro na DramaBox para aprender sobre contar histórias. Pôs dinheiro para aprender sobre o botão.

Fizemos histórias para descobrir quem somos. O Nate Ryder foi feito para descobrir se pagávamos.

É este o aspeto quando o gosto, o sentimento, a alma e a criatividade são empurrados para o lado, e o que toma o lugar deles é barato, eficiente e predatório, e apontado diretamente à nossa carteira. Não é um novo tipo de entretenimento. É o que sobra do entretenimento depois de removido tudo o que fazia valer a pena pagar por ele, exceto o pagar.

Algures esta noite, ele vai ser insultado outra vez por pessoas que se vão arrepender daqui a sessenta segundos. Ao lado dele, alguém tem um dashboard aberto. Não está a medir se a história era boa. Nunca esteve.

## Fontes e método

Inspecionei apenas código de páginas publicamente disponível e páginas de lojas de apps. Não criei conta, não comprei moedas nem toquei em nenhum sistema não público. Os números de mercado são estimativas de terceiros, não divulgações auditadas das empresas. Os números de queixas são relatos de utilizadores. Pesquisa verificada a 27 de setembro de 2026; contagens das lojas, preços e páginas de marketing mudam com frequência.

- [Landing page da campanha StoryReel](https://w2a.storyreel.life/v6/2/fb02.html?shorttv_adid=288123&language=en) e a sua [configuração de campanha](https://prod-api.storyreel.life/prod-api/16/app/hiCampaignLink/getConfig?adId=288123&pageType=1&ver=001).
- [*SSS-Rank: The Slum-Born Thunder God* na ShortMax](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605).
- ShortMax na [Apple App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) e no [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps); [termos de serviço da ShortMax](https://www.shorttv.live/Temsof).
- [ShortMax no Trustpilot](https://www.trustpilot.com/review/www.shortmax.app); [Shortmax Innovations no BBB](https://www.bbb.org/us/fl/miami/profile/mobile-apps/shortmax-innovations-0633-92056233/complaints).
- [Sensor Tower, State of Short Drama Apps 2026](https://sensortower.com/blog/state-of-short-drama-apps-2026-report).
- [Crazy Maple Studio](https://www.crazymaplestudios.com/); [Rest of World sobre a ReelShort e os seus donos](https://restofworld.org/2023/what-is-reelshort/); [TechCrunch sobre a explosão da ReelShort em 2023](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/).
- [DramaBox na App Store](https://apps.apple.com/us/app/dramabox-stream-drama-shorts/id6445905219); [The Walt Disney Company, Demo Day do Accelerator de 2025](https://thewaltdisneycompany.com/news/disney-accelerator-2025/) e [anúncio da turma de 2025](https://thewaltdisneycompany.com/news/disney-accelerator-companies-2025/).
- [China Daily HK sobre a Jiuzhou Culture e a ShortMax](https://www.chinadailyhk.com/hk/article/624225).
- [C21Media a resumir o New York Times sobre os custos dos microdramas com IA](https://www.c21media.net/news/ai-slashing-cost-of-microdrama-production-in-china-to-30-per-minute/).
- [Global Times sobre os números da NRTA e o apoio à internacionalização, setembro de 2026](https://www.globaltimes.cn/page/202609/1370760.shtml); [Xinhua sobre microdramas feitos com IA e regras de etiquetagem](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html); [Global Times sobre subsídios locais, maio de 2026](https://www.globaltimes.cn/page/202605/1362076.shtml).
- [Yale Journal of International Affairs, Micro-Drama as Soft Power](https://www.yalejournal.org/publications/micro-drama-as-soft-power-yedbr).
