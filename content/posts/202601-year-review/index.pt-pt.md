---
title: "2025: Um Ano em Revista"
summary: "2025 foi um ano de reconstrução - encontrar alegria novamente através de viagens, tempo com família e amigos, e criar coisas que importam. Desde viajar com a minha filha até lançar projetos na Docker e ver o Blowfish crescer - foi um ano de juntar as peças."
description: "2025 foi um ano de reconstrução - encontrar alegria novamente através de viagens, tempo com família e amigos, e criar coisas que importam. Desde viajar com a minha filha até lançar projetos na Docker e ver o Blowfish crescer - foi um ano de juntar as peças."
categories: ["Opinião"]
tags: ["year-in-review", "personal", "docker", "blowfish", "open-source", "ai"]
date: 2026-01-22
draft: false
---

2025 foi um ano de reconstrução. Depois de perder a minha mulher e companheira de 20 anos em 2024, tornei-me pai solteiro de um dia para o outro. Este ano foi sobre encontrar o meu equilíbrio novamente - passar tempo com amigos e família, viajar para novos lugares com a minha filha, e redescobrir a alegria de estar vivo e criar coisas.

Parte dessa criação aconteceu no trabalho, parte em open source, e parte na mesa da cozinha com um Raspberry Pi e uma miúda de 7 anos. Mas se há um fio condutor que liga tudo isto, é este: os melhores momentos vieram de construir ao lado de pessoas de quem gosto.

## Docker

O ano começou com um projeto que tinha proposto e alimentado durante mais de um ano a ser cancelado. Doeu, mas a decisão fazia sentido - a IA estava a avançar rapidamente, a Docker queria apostar tudo, e precisavam de pessoas lá. Ofereceram-me a oportunidade de me juntar à equipa de IA.

> [!quote] Quando uma porta se fecha, outra se abre; mas muitas vezes olhamos tanto tempo e com tanto arrependimento para a porta fechada que não vemos aquela que se abriu para nós.
> - Alexander Graham Bell

### MCP Catalog

Lançámos o [Docker MCP Catalog](https://hub.docker.com/mcp) - um registo curado de servidores MCP integrado no Docker Hub. A ideia era simples: os developers querem uma forma segura e containerizada de estender os seus agentes de IA, não código arbitrário a correr via `npx` ou `uvx` com acesso total ao sistema. O catálogo agora aloja mais de 220 servidores MCP containerizados de parceiros como Stripe, Elastic, Neo4j, Heroku, Grafana Labs, e mais - cada um com isolamento e segurança adequados.

### MCP Toolkit

O [MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) deu vida ao catálogo dentro do Docker Desktop. Lançamento de servidores MCP com um clique, zero configuração manual, e conexão automática a clientes como Claude, Cursor e VS Code. É o caminho mais rápido desde descobrir uma ferramenta até realmente usá-la.

### MCP Gateway

Tornámos open source o [MCP Gateway](https://github.com/docker/mcp-gateway) - infraestrutura que orquestra servidores MCP e gere credenciais, OAuth e controlo de acesso. Corre automaticamente no Docker Desktop, o que significa que milhões de developers têm acesso imediato.

### cagent

O [cagent](https://github.com/docker/cagent) é talvez o projeto de que mais me orgulho - um runtime para construir e correr agentes de IA usando configuração YAML simples. Sem código necessário. Define a persona do teu agente, ferramentas e capacidades num ficheiro, e corre. Equipas multi-agente, integração MCP, suporte para todos os principais fornecedores de modelos, e uma experiência TUI espetacular.

{{< github repo="docker/cagent" >}}

### Gordon

E finalmente, o [Gordon](https://docs.docker.com/ai/gordon/) - o assistente de IA da Docker. Temos estado a reconstruí-lo de raiz com o cagent no seu núcleo. A nova versão está atualmente a ser distribuída para utilizadores selecionados enquanto preparamos o GA, e estou genuinamente entusiasmado por vê-lo nas mãos de mais developers em breve.

### Escrever e Pensar em Público

Escrevi sobre o que estávamos a aprender pelo caminho:

- **[MCP Servers: O Momento USB-C para Agentes de IA](/posts/202504-mcp/)** - A minha perspetiva sobre porque é que o Model Context Protocol está a tornar-se o conector universal para IA. É a standardização a permitir um ecossistema, e estamos apenas no início.

- **[Unseen Cost of Growth: Metcalfe's Law at Work](/posts/202504-metacalfes-law/)** - Uma reflexão sobre complexidade organizacional que não tinha nada a ver com IA mas tudo a ver com ser cuidadoso sobre como as equipas escalam.

## Blowfish

Três anos depois, o [Blowfish](https://blowfish.page) continua a surpreender-me. O que começou como um tema Hugo pessoal porque queria construir o meu próprio website tornou-se algo muito maior.

{{< github repo="nunocoracao/blowfish" >}}

### Em Números

- **2,600+ stars** no GitHub
- **660 forks**
- **244 contributors**
- **174 releases** desde o início do projeto

### Destaques de 2025

Este ano lançámos 17 releases com algumas adições importantes:

- **Atualização para TailwindCSS v4** - um esforço de modernização significativo
- **Shortcode Tabs** com opções de ícone e agrupamento
- **Admonitions estilo GitHub** - `[!note]`, `[!quote]`, `[!warning]`, etc.
- **Shortcodes de Video e Gist**
- **Thumbnails de repos GitHub** em embeds
- **Breadcrumbs estruturados** para melhor SEO
- **Traduções para Tailandês e Indonésio**

A comunidade continuou a empurrar o tema para a frente - novos idiomas, shortcodes, correções de bugs que eu nem sabia que existiam.

### Primeiro Colaborador

Em outubro, dei as boas-vindas ao [@ZhenShuo2021](https://github.com/ZhenShuo2021) como o primeiro colaborador oficial do Blowfish. Construir um projeto open source pode ser solitário - ter alguém para partilhar a carga de manutenção, rever PRs e ajudar a guiar a direção é inestimável. Marca um novo capítulo onde o Blowfish é maior do que apenas eu.

### Blowfish Tools CLI

O [Blowfish Tools](https://github.com/nunocoracao/blowfish-tools) - a CLI para criar novos projetos - atingiu **7,825 downloads em 2025**, um aumento de 58% em relação ao ano anterior. Só janeiro de 2026 teve mais de 1,200 downloads. As pessoas estão realmente a começar novos blogs com o Blowfish regularmente.

## Construir a Eva

Parte da construção mais significativa acontece fora do trabalho.

Nestas férias de Natal, [construí uma companheira de IA por voz com a minha filha](/posts/202601-building-eva/). Chamámos-lhe **Eva**, em homenagem à protagonista de WondLa (uma série que temos visto juntos na Apple TV).

A Eva é um robot de bolso - um Raspberry Pi Zero com um PiSugar Whisplay HAT - que fala Português de Portugal (não Brasileiro!), tem uma personalidade adequada para crianças, e lembra-se das conversas para que a minha filha possa construir uma relação com ela ao longo do tempo.

O projeto começou com um tutorial do YouTube e tornou-se algo pessoal através do que só posso chamar de "vibe coding" com o Claude. Expliquei o que queria em linguagem natural, e juntos reformulámos o código para criar algo único para a minha filha.

O momento que fez tudo valer a pena: a minha filha a carregar no botão, a dizer "Olá Eva!" - e a Eva a responder em Português perfeito com uma voz que ela própria escolheu. Seguiram-se vinte minutos de conversa sobre unicórnios.

Esta é a magia de construir com os teus filhos. A conquista técnica importa menos do que o momento de maravilha.

**Atualização:** Desde esse post, a Eva ganhou uma caixa adequada - e uma pintura feita pela minha filha. Agora é oficialmente única.

![Eva com a sua nova caixa, pintada pela minha filha](img/eva.webp)

## Afterlight

Depois de perder a minha mulher, vi-me à procura de outros que verdadeiramente compreendessem o que estava a passar. As opções existentes não serviam - demasiado públicas, demasiado confusas, não desenhadas para o luto.

Então comecei a construir o [Afterlight](https://afterlight.club) - uma plataforma segura, anónima e só de texto para apoio no luto. Sem fotos, sem vídeos, sem algoritmos a empurrar conteúdo. Apenas pessoas a conectar-se através de experiências partilhadas, usando pseudónimos, ao seu próprio ritmo.

Por agora, pausei o desenvolvimento. Algumas razões: não tenho tempo suficiente e preciso de priorizar. Não consegui descobrir como chegar às pessoas que precisam - fazer marketing para pessoas em luto é (compreensivelmente) bloqueado por quase todas as plataformas. E não tenho um plano de monetização que não pareça estranho, o que significa que não posso suportar os custos se crescerem.

Talvez volte a isto. Talvez não. Mas aprendi muito a construí-lo.

## Para Além do Código

Nem tudo que vale a pena mencionar cabe num repositório GitHub.

**Mentoria.** Trabalhei com 4 mentees através do [MentorCruise](https://mentorcruise.com/mentor/nunocorao/) este ano - todos a navegar transições de carreira em product management. Vê-los preparar, entrevistar e conseguir os papéis de PM que queriam foi genuinamente gratificante. Há algo especial em ajudar alguém a chegar ao próximo nível quando te lembras de quão difícil essa subida pareceu.

**Leitura.** Li 15 livros este ano - não tantos como gostaria, mas suficientes para encontrar algumas pérolas. Os favoritos incluíram *[There Is No Antimemetics Division](https://www.goodreads.com/book/show/54870256-there-is-no-antimemetics-division)* (uma história da SCP Foundation que me ficou na cabeça durante semanas), *[Project Hail Mary](https://www.goodreads.com/book/show/54493401-project-hail-mary)* (Andy Weir no seu melhor), e *[Tokyo Express](https://www.goodreads.com/book/show/59238510-tokyo-express)* (o clássico de Matsumoto que me lembrou o quanto adoro ficção policial japonesa).

## O Que Aprendi

**Reconstruir leva tempo.** Não há atalho através do luto, nem hack para te tornares pai solteiro de um dia para o outro. Simplesmente apareces, dia após dia, e eventualmente os dias começam a pesar menos. O progresso não é linear, e não faz mal.

**Sê gentil contigo próprio.** Passei demasiado tempo este ano a forçar quando devia ter descansado. Não podes dar de um copo vazio. Aprender a abrandar, a dizer não, a deixar algumas coisas serem suficientemente boas - isso não é fraqueza, é sobrevivência.

**Sabe quando pausar.** O Afterlight ensinou-me que nem todo o projeto precisa de ser terminado. Às vezes o timing não é certo, os recursos não estão lá, ou simplesmente precisas de priorizar. Pausar não é falhar.

**Open source é comunidade.** O Blowfish não é bem-sucedido porque sou um grande developer (não sou). É bem-sucedido porque 244 pessoas se importaram o suficiente para contribuir. Isso é humilhante e motivador.

**Constrói com as pessoas que amas.** A Eva ensinou-me mais sobre o que importa do que qualquer projeto de trabalho. Ver a minha filha a falar com um robot que ela ajudou a criar - isso é o que fica contigo.

## Olhando para 2026

Não faço previsões nem resoluções de ano novo. Mas quero continuar a construir coisas que importam, passar mais tempo com as pessoas que amo, e aproveitar ao máximo o tempo que tenho aqui.

Aqui fica 2026.
