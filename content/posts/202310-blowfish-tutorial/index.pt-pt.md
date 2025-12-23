---
title: "Constrói a tua homepage usando Blowfish e Hugo"
summary: "Há apenas um ano, criei o Blowfish, um tema Hugo concebido para construir a minha visão única da minha homepage pessoal. Também decidi torná-lo um projeto open-source. Hoje, o Blowfish transformou-se num projeto open-source próspero com mais de 600 estrelas no GitHub e uma base de utilizadores de centenas. Neste tutorial, vou mostrar-te como começar e ter o teu website a funcionar em poucos minutos."
description: "Há apenas um ano, criei o Blowfish, um tema Hugo concebido para construir a minha visão única da minha homepage pessoal. Também decidi torná-lo um projeto open-source. Hoje, o Blowfish transformou-se num projeto open-source próspero com mais de 600 estrelas no GitHub e uma base de utilizadores de centenas. Neste tutorial, vou mostrar-te como começar e ter o teu website a funcionar em poucos minutos."
categories: ["Open-Source", "Blowfish"]
tags: ["tutorial", "blowfish", "hugo"]
date: 2023-10-04
draft: false
---

Há apenas um ano, criei o [Blowfish](https://blowfish.page/), um tema [Hugo](https://gohugo.io/) concebido para construir a minha visão única da minha homepage pessoal. Também decidi torná-lo um projeto open-source. Hoje, o Blowfish transformou-se num projeto open-source próspero com mais de 600 estrelas no GitHub e uma base de utilizadores de centenas. Neste tutorial, vou mostrar-te como começar e ter o teu website a funcionar em poucos minutos.

{{< github repo="nunocoracao/blowfish" >}}

## TL;DR

O objetivo deste guia é orientar um novato em Hugo sobre como instalar, gerir e publicar o seu próprio website. A versão final do código está disponível neste [repo](https://github.com/nunocoracao/blowfish-tutorial/tree/main) - para quem quiser saltar para o fim.

![Exemplo do tutorial](/posts/202310-blowfish-tutorial/img/01.webp)

O estilo visual é apenas uma das muitas possibilidades disponíveis no Blowfish. Os utilizadores são encorajados a consultar a [página de documentação](https://blowfish.page/) e aprender a personalizar o tema às suas necessidades. Além disso, já existem [ótimos exemplos](https://blowfish.page/users/) do tema de outros utilizadores disponíveis para inspiração. O Blowfish também oferece várias funcionalidades extra na forma de `shortcodes` disponíveis imediatamente no tema - descobre-os [aqui](https://blowfish.page/docs/shortcodes/) e inspira-te.

## Configura o teu ambiente

Vamos começar por instalar todas as ferramentas necessárias. Este guia cobrirá os passos para Mac, pelo que estas instruções podem não se aplicar ao teu hardware e OS. Se estás no Windows ou Linux, por favor consulta os guias sobre como [instalar o Hugo](https://gohugo.io/installation/) e a [CLI do GitHub](https://cli.github.com/) para o teu OS.

Se estás a usar MacOS, vamos instalar o `brew` - um gestor de pacotes para Mac - pois isso ajudará a instalar e gerir as outras ferramentas.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Uma vez instalado o `brew`, vamos instalar o Git, Hugo e a CLI do GitHub.
```bash
brew install git
brew install hugo
brew install gh
```

Cria uma pasta para o teu código e abre uma sessão de terminal nela (escolhi _blowfish-tutorial_ nos comandos abaixo, sente-te à vontade para chamar a pasta como quiseres).
```bash
mkdir blowfish-tutorial
cd blowfish-tutorial
```

Uma vez dentro da pasta, o próximo passo é inicializar o teu repo `git` local.
```bash
git init -b main
```

Agora, vamos criar e sincronizar o repo local com um repo GitHub para que o teu código seja armazenado remotamente.
```bash
gh auth login
gh repo create
git push --set-upstream origin main
```

Consulta a imagem abaixo para as opções que selecionei para este guia, sente-te à vontade para mudar nomes e descrição para o teu caso de uso.

![exemplo gh repo create](/posts/202310-blowfish-tutorial/img/ghcreate.webp)


Finalmente, cria um ficheiro **.gitignore** que te permite excluir certos ficheiros do teu repo automaticamente. Eu começaria com algo como o exemplo abaixo.

```bash
#others
node_modules
.hugo_build.lock

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes

# Hugo
public
```

O último passo é guardar todas as alterações no repo.
```bash
git add .
git commit -m "initial commit"
git push
```


## Cria o site e configura-o

Com todas as ferramentas prontas, criar e configurar o teu site será fácil. Ainda dentro da pasta que criaste na última secção, vamos criar um website Hugo vazio (_sem tema_).

```bash
hugo new site --force .
```

Uma vez terminado o scaffolding, experimenta o comando abaixo para correr a tua página. Abre um browser em _[https://localhost:1313](https://localhost:1313)_ para ver o teu site…

```bash
hugo server
```

 Ups… Página não encontrada – certo?
Isto era esperado, mesmo tendo criado um website, o Hugo não dá nenhuma experiência por defeito – ou seja, o teu site não tem nenhuma página para mostrar.

Próximo passo, vamos instalar o Blowfish usando `git submodules` o que tornará mais fácil gerir e atualizar para novas versões no futuro.

```bash
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

A seguir, cria a seguinte estrutura de pastas na raiz do teu diretório de código - `config/_default/`. Agora precisas de descarregar [estes ficheiros](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fnunocoracao%2Fblowfish%2Ftree%2Fmain%2Fconfig%2F%5C_default) e colocá-los na pasta _\_default_ que acabaste de criar. A estrutura final deve parecer-se com isto.

```md
config/_default/
├─ config.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
└─ params.toml
`
```


Abre o **config.toml** e descomenta a linha **theme = "blowfish"** e estás pronto. Experimenta correr o site novamente e verifica o resultado em _[https://localhost:1313](https://localhost:1313)_

```bash
hugo server
```

Deves ver algo como a imagem abaixo. Ainda não é muito já que não adicionámos conteúdo, mas o esqueleto principal do Blowfish já está em posição - só requer configuração.

![site blowfish vazio](/posts/202310-blowfish-tutorial/img/blowfishempty.webp)

Agora vamos configurar o tema.

{{< alert  d>}}
**FYI** Este guia não cobrirá em detalhe o que cada parâmetro disponível no Blowfish faz – para tudo o que está disponível e como usá-lo, consulta a [documentação do Blowfish](https://blowfish.page/docs/configuration/#theme-parameters) para cada opção em cada ficheiro.
{{< /alert >}}

### menus.en.toml
Este ficheiro define a estrutura do teu menu, para o banner superior e o rodapé. Para este guia, vamos criar duas secções de menu: uma para _Posts_ e uma para _Tags_.
- **Posts** - mostrará a lista completa de entradas
- **Tags** - gerado automaticamente com base nas tags colocadas em cada artigo

Para conseguir isto, certifica-te de que as seguintes entradas existem no ficheiro **menus.en.toml**. Uma vez feitas as alterações, deves ver os menus a aparecer ao voltar a correr **hugo server**.

```toml
[[main]]
  name = "Posts"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Tags"
  pageRef = "tags"
  weight = 30
```


### languages.en.toml

Este ficheiro configurará os teus detalhes principais como autor do website. Altera a secção abaixo para refletir os teus detalhes.

```bash
[author]
   name = "O teu nome aqui"
   image = "profile.jpg"
   headline = "Sou apenas humano"
   bio = "Um pouco sobre ti" # aparece no cartão do autor para cada artigo
```

As imagens para o website devem ser colocadas na pasta _assets_. Para este passo, por favor adiciona uma foto de perfil a essa pasta chamada _profile.jpg_ ou altera a configuração acima para o nome do ficheiro que escolheste. Se não tiveres uma imagem de perfil disponível, podes usar a abaixo para o tutorial.

![perfil](/posts/202310-blowfish-tutorial/img/profile.jpg "assets/profile.jpg")

O último passo é configurar os teus links – redes sociais, GitHub, etc. O ficheiro inclui todas as opções suportadas, mas estão comentadas. És livre de descomentar tudo e eliminar as que preferires não usar. Substitui os links corretos nas que decidires manter. Também podes mudar a ordem.



### params.toml

Este é o ficheiro de configuração principal do Blowfish. A maioria das opções visuais ou personalização disponível pode ser configurada usando-o, e cobre várias áreas do tema. Para este tutorial, decidi usar um layout **background** - [ver outros layouts para a landing page do Blowfish](https://blowfish.page/) - com o esquema de cores **Neon** - podes escolher um esquema de cores diferente se quiseres - consulta [esta lista](https://blowfish.page/docs/getting-started/#colour-schemes) ou [cria o teu próprio](https://blowfish.page/docs/advanced-customisation/#colour-schemes).

Adiciona um **image.jpg** à pasta assets que será o fundo do site. Também podes descarregar os exemplos que estou a usar neste tutorial.

![fundo](/posts/202310-blowfish-tutorial/img/background.jpg "assets/image.jpg")

Agora vamos ao _params.toml_ e começar a configurar o ficheiro. Vou focar-me apenas nos valores que precisam de ser alterados, não apagues o resto do ficheiro sem ler a documentação. Vamos começar por garantir que temos o esquema de cores certo, que a otimização de imagem está ativada, e configurar a imagem de fundo padrão.

```bash
colorScheme = "neon"
disableImageOptimization = false
defaultBackgroundImage = "image.jpg" # usado como padrão para imagens de fundo
```

A seguir, vamos configurar a nossa homepage. Vamos usar o layout _background_, configurando a imagem da homepage e os itens recentes. Além disso, estamos a usar a **vista de cartões** para itens na categoria recentes. Finalmente, vamos configurar o header como fixo.

```bash
[homepage]
  layout = "background" # opções válidas: page, profile, hero, card, background, custom
  homepageImage = "image.jpg" # usado em: hero e card
  showRecent = true
  showRecentItems = 6
  showMoreLink = true
  showMoreLinkDest = "/posts"
  cardView = true
  cardViewScreenWidth = false
  layoutBackgroundBlur = true # só usado quando layout é background

[header]
  layout = "fixed"
```

Agora vamos configurar como as páginas de artigos e listas vão parecer. Aqui estão as configurações para essas.

```bash
[article]
  showHero = true
  heroStyle = "background"
  showSummary = true
  showTableOfContents = true
  showRelatedContent = true
  relatedContentLimit = 3

[list]
  showCards = true
  groupByYear = false
  cardView = true
```


Se correres **hugo server** novamente, deves ver algo como a imagem abaixo.


![blowfish sem artigos](/posts/202310-blowfish-tutorial/img/blowfishnoarticles.webp)



## Adicionar conteúdo ao teu site

Cria uma pasta para os teus posts em `/content/posts`. Este também era o diretório configurado no teu menu para listar todos os artigos. Dentro dessa pasta, vamos criar um novo diretório e dar-lhe o nome **myfirstpost**. Dentro dele cria um ficheiro **index.md** – o teu artigo e coloca um featured.jpg ou .webp no mesmo diretório como thumbnail para o artigo. Usa o exemplo abaixo para começar. As primeiras linhas no ficheiro são o Front Matter, que dizem ao Hugo qual será a aparência e experiência do artigo – diferentes temas suportam diferentes parâmetros para isto. Consulta a [documentação](https://blowfish.page/docs/front-matter/) para mais informações.

```md
---
title: "O meu primeiro post"
date: 2023-08-14
draft: false
summary: "Este é o meu primeiro post no meu site"
tags: ["space"]
---

## Um subtítulo

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisl, vulputate eu lacus vitae, maximus molestie libero. Vestibulum laoreet, odio et sollicitudin sollicitudin, quam ligula tempus urna, sed sagittis eros eros ac felis. In tristique tortor vitae lacinia commodo. Mauris venenatis ultrices purus nec fermentum. Nunc sit amet aliquet metus. Morbi nisl felis, gravida ac consequat vitae, blandit eu libero. Curabitur porta est in dui elementum porttitor. Maecenas fermentum, tortor ac feugiat fringilla, orci sem sagittis massa, a congue risus ipsum vel massa. Aliquam sit amet nunc vulputate, facilisis neque in, faucibus nisl.
```

Podes criar artigos adicionais para ver como o teu site ficará quando tiver conteúdo. O teu site deve parecer-se com as imagens abaixo. A página principal mostra os artigos recentes, cada artigo está conectado através de outros automaticamente via secção relacionada, tens agregação de tags e pesquisa de texto completo.

{{< gallery >}}
  <img src="/posts/202310-blowfish-tutorial/img/blowfishrecent.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/article.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/search.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/tag.webp" class="grid-w50" />
{{< /gallery >}}


## Publica-o

A única coisa que falta é publicar o teu site. Vou usar o [Firebase](https://firebase.google.com/) para hosting - é uma alternativa gratuita e fornece funcionalidades mais avançadas se estiveres a criar algo mais complexo. Vai ao Firebase e cria um novo projeto. Uma vez feito isso, vamos mudar para o CLI pois será mais fácil configurar tudo.

Vamos instalar o CLI do Firebase - se não estiveres em Mac consulta as [instruções de instalação no Firebase](https://firebase.google.com/docs/cli).
```bash
brew install firebase
```

Agora faz login e inicia o Firebase hosting para o projeto.

```bash
firebase login
firebase init
```

Seleciona hosting e prossegue.

![firebase init](/posts/202310-blowfish-tutorial/img/firebasecli.webp)

Segue a imagem abaixo para as opções que recomendo. Certifica-te de configurar os ficheiros de workflow para as GitHub Actions. Estes garantirão que o teu código será deployado assim que houver uma alteração no repo.

![opções firebase](/posts/202310-blowfish-tutorial/img/firebaseoptions.webp)

No entanto, esses ficheiros não funcionarão logo à partida, pois o Hugo requer passos extra para o build funcionar. Por favor copia e cola os blocos de código abaixo nos respetivos ficheiros dentro da pasta **.github**, mas mantém o **projectId** original nos ficheiros gerados pelo Firebase.

### firebase-hosting-merge.yml
```yaml
# This file was auto-generated by the Firebase CLI
# https://github.com/firebase/firebase-tools

name: Deploy to Firebase Hosting on merge
'on':
  push:
    branches:
      - main
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Hugo setup
        uses: peaceiris/actions-hugo@v2.6.0
        with:
          hugo-version: 0.115.4
          extended: true
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: 'true'

      - name: Check out code into the Go module directory
        uses: actions/checkout@v4
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Build with Hugo
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: hugo -E -F --minify -d public

      - name: Deploy Production
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BLOWFISH_TUTORIAL }}'
          channelId: live
          projectId: blowfish-tutorial

```


### firebase-hosting-pull-request.yml
```yaml
# This file was auto-generated by the Firebase CLI
# https://github.com/firebase/firebase-tools

name: Deploy to Firebase Hosting on PR
'on': pull_request
jobs:
  build_and_preview:
    if: '${{ github.event.pull_request.head.repo.full_name == github.repository }}'
    runs-on: ubuntu-latest
    steps:
      - name: Hugo setup
        uses: peaceiris/actions-hugo@v2.6.0
        with:
          hugo-version: 0.115.4
          extended: true
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: 'true'

      - name: Check out code into the Go module directory
        uses: actions/checkout@v4
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Build with Hugo
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run:  hugo -E -F --minify -d public

      - name: Deploy preview
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BLOWFISH_TUTORIAL }}'
          expires: 30d
          channelId: preview-${{ github.event.number }}
          projectId: blowfish-tutorial
```


O último passo é fazer commit do teu código para o GitHub e deixar os workflows que criaste tratarem do deployment do teu site. Uma vez que configurámos as GitHub Actions, isto irá acionar um job que configurará e fará deploy do teu site automaticamente.

```bash
git add .
git commit -m "add github actions workflows"
git push
```

No separador Actions do teu repo, deves ver algo como isto.

![gh actions](/posts/202310-blowfish-tutorial/img/githubactions.webp)

Uma vez que todos os passos terminem, a tua consola do Firebase deve mostrar algo como a imagem abaixo - incluindo os links para ver a tua app – tenho uma versão deste tutorial a correr em [https://blowfish-tutorial.web.app/](https://blowfish-tutorial.web.app/).

![consola firebase](/posts/202310-blowfish-tutorial/img/firebaseconsole.webp)


## Conclusão e próximos passos

Agora tens a primeira versão da tua homepage. Podes fazer alterações localmente e assim que fizeres commit do teu código elas serão automaticamente refletidas online. O que deves fazer a seguir? Deixo-te alguns links úteis para te inspirares e aprender mais sobre Blowfish e Hugo.

- https://blowfish.page/docs/
- https://blowfish.page/docs/configuration/
- https://blowfish.page/docs/shortcodes/
- https://blowfish.page/examples/
- https://blowfish.page/users/
- https://gohugo.io/documentation/

![blowfish final](/posts/202310-blowfish-tutorial/img/01.webp)
