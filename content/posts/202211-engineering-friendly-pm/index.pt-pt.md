---
title: "Gerente de Produto Amigável à Engenharia"
summary: "As regras de engajamento em parceria sólida com a engenharia. O que fazer e o que não fazer visto da perspectiva de um desenvolvedor de software."
categories: ["Convidado", "Produto"]
tags: ["Engenharia de produto"]
date: 2022-11-02
draft: false
showauthor: false
authors:
  - davidsimao
#series: ["The Complete PM"]
#series_order: 5

---
A função de gerente de produto vem ganhando popularidade na indústria de tecnologia nos últimos anos. À medida que mais empresas adicionam PMs aos seus organogramas, ainda há muita experimentação com configurações de equipe para encontrar o melhor alinhamento possível entre produto e engenharia. Estas duas funções trabalham agora mais próximas do que nunca e, embora se diga que esta é a receita para equipas de alto desempenho, muitas empresas ainda lutam para alcançar bons níveis de colaboração.

As estratégias para fazer isso funcionar são bem abordadas no [site de Martin Fowler](https://martinfowler.com/articles/bottlenecks-of-scaleups/03-product-v-engineering.html). Neste artigo vou me concentrar em mais sobre a perspectiva do engenheiro e quais são nossas expectativas para um bom gerente de produto.

## O que não esperar

Como engenheiro, tenho observado atritos vindos de ambos os lados, mas também algumas parcerias produtivas, e embora se possa argumentar que a equipe ou a organização podem influenciar o resultado, isso depende principalmente de quanto cada função está disposta a colaborar com a outra. .

Vamos fazer um exercício e pensar nessas expectativas ao contrário. Acredito que o papel do PM ainda é incipiente e por isso assume diferentes contornos, principalmente em empresas menos maduras que estão começando a construir suas estratégias de desenvolvimento de produtos. Se você trabalha na indústria de tecnologia agora, deve estar familiarizado com alguns dos estereótipos a seguir.

### Gerenciador Excel

Um ás com macros e um mestre em relatar o progresso na direção semanal. Todo o projeto parece uma obra de arte geométrica com barras empilhadas umas sobre as outras, alinhadas horizontalmente com uma coluna de células vermelhas que ficam verdes quando você digita a palavra “Entregue”. O gerente do Excel se preocupa muito pouco com o ciclo de vida do produto e gastará todas as suas fichas para fazer com que os desenvolvedores se comprometam com esses prazos.

[![Gerenciador Excel](./img/dilbert-excel.gif)](https://dilbert.com/strip/2016-01-07)

### Apresentador

Especialista em pesquisa de mercado 360º. Ela sabe tudo sobre Steve Jobs e a história do iPod, e se preocupa com o ciclo de vida do produto, mas não pode perder tempo construindo estratégias porque “Os detalhes são importantes, vale a pena esperar para acertar”. Contanto que você construa um design responsivo, com botões de compartilhamento social, o dinheiro começará a fluir. Não deixe de conferir “[Evitando Featurismo](https://tdarb.org/blog/avoid-featurism.html?utm_source=pocket_mylist)”, de onde roubei a palavra _featurist_.

[![Featurist](./img/dilbert-featurist.gif)](https://dilbert.com/strip/2001-04-14)

### Programador aposentado

Descontente com a ideia de ser macaco do código para sempre, ela abandonou a engenharia em busca da felicidade e do sucesso. Olhando com pesar para a vida que deixou para trás, a programadora aposentada é uma boa aliada e está disposta a administrar as expectativas de liderança e adiar prazos na troca de compartilhar algumas ideias para a arquitetura de software e também aquela história de tirar A+ em programação projeto na universidade.

![Programador aposentado](./img/retired-programmer.jpg)

### Mão do Rei

Porquê partilhar as nossas ideias quando estamos todos aqui para servir um propósito maior? Como um filtro passa-tudo, a mão do rei não se arrisca quando os dedos apontam em sua direção. Ela é apenas a mensageira e se você não concordar, espere algumas escaladas para que todos possam pedir orientação ao mestre.

[![Mão do Rei](./img/kings-hand.png)](https://workchronicles.com/product-managers-guide-to-prioritization/)

## A ideia única de gerenciamento de produtos

Agora [coloca um tom sério], o que os estereótipos acima têm em comum (intencionalmente) é que todos eles delegam chamadas de negócios à camada de liderança, o que considero ser a maior mudança no jogo sobre a função de gerente de produto. Mais do que design ou implementação, o PM é responsável por todo o ciclo de vida do produto, desde a ideia, passando pela implementação, até o feedback do cliente e o desempenho do mercado. Um bom PM atuará como um CEO de nível inferior, responsabilizando-se pelo sucesso de uma pequena parte do negócio (o produto), descarregando essa responsabilidade da liderança. Um PM ainda melhor compartilhará essa responsabilidade com toda a equipe de engenharia de produto.

Dito isto, a forma como a parceria é implementada é uma história diferente. As equipes mais bem-sucedidas que integrei são aquelas onde o PM está presente, às vezes até sob a mesma linha de liderança/subordinação. Quanto menos atrito houver entre as duas funções, melhores resultados. [PM e EM: Regras de engajamento](https://segment.com/blog/product-manager-engineering-manager-rules-of-engagement/) estabelece três regras fundamentais que acredito que podem ser estendidas além de PM e EM para produto e engenharia: Confiança, responsabilidade conjunta e propriedade separada. Embora seja importante que cada função desempenhe um papel diferente, trabalhar em equipe com responsabilidade compartilhada aumentará o alinhamento de todos em relação ao que e por que estão fazendo, bem como reduzirá a burocracia necessária para realizar algo, dando ao PM melhor flexibilidade para construir e adaptar a estratégia do produto de forma iterativa.

## Integre a equipe ao negócio

Uma das coisas que sempre me incomodou é o pouco que os engenheiros sabem sobre os produtos que estão construindo. Surpresa ou não, é possível trabalhar a vida inteira sem saber quem usa o software que você está construindo e quanto dinheiro ele ganha. Uma das vantagens de fazer negócios a um nível inferior é que esta barreira pode ser quebrada. Discussões recorrentes com a equipe sobre o desempenho do produto, bem como a estrela do norte ou outros KPIs relevantes são uma forma poderosa de [fomentar a inovação e manter altos os níveis de motivação](https://www.platohq.com/blog/slack-product- colaboração em engenharia).

## Um roteiro para governar todos eles

Construir um roteiro técnico enquanto trabalhava em uma equipe de produto foi uma das experiências mais contraproducentes que tive. Embora seja importante acompanhar a dívida tecnológica que precisa ser paga, se não houver adesão do produto, a experiência me diz que essas tarefas nunca serão implementadas.

Espremer algumas tarefas em projetos em andamento não é sustentável e, em algum momento, a base de código também não levará ao esgotamento do desenvolvedor e à degradação do desempenho do produto. Um bom PM é capaz de compreender o custo do não pagamento da dívida técnica e irá incluí-lo como parte da estratégia do produto.

## Datas previstas, não prazos

Se quiser estressar um engenheiro, peça a ele um ETA ou se comprometa com um prazo definido pela liderança. Construir software sob pressão só causa danos aos negócios, no sentido de que forçará as pessoas a cometer mais erros que podem custar dinheiro ou diminuir a velocidade da equipe no futuro.

Embora também não seja aceitável que os engenheiros sejam livres para perder muito tempo, o PM deve ser flexível o suficiente para permitir a mudança da data prevista ou a remoção do escopo.

## Considerações finais

Como deveria ser o PM perfeito ainda é uma questão em aberto, mas está claro que se tanto o produto quanto a engenharia trabalharem no sentido de construir uma parceria eficaz, os resultados podem ser muito mais produtivos do que trabalhar em silos (agrupados por atividade em vez de resultado). ). Construir o produto dentro da equipe é fundamental para construir um melhor ambiente de colaboração onde altos níveis de alinhamento, motivação e produtividade são mais prováveis, semelhante a empresas iniciantes. Do ponto de vista de um engenheiro, o PM ideal não é uma parte interessada, mas sim um colega, muito parecido com o CEO de uma pequena startup dentro de uma empresa mais ampla.