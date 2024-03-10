---
title: "Construa sua página inicial usando Blowfish e Hugo"
summary: "Há apenas um ano, criei o Blowfish, um tema Hugo elaborado para construir minha visão única para minha página pessoal. Também decidi torná-lo um projeto de código aberto. Avançando até hoje, o Blowfish se transformou em um próspero projeto aberto -source com mais de 600 estrelas no GitHub e uma base de usuários de centenas. Neste tutorial, mostrarei como começar e ter seu site funcionando em alguns minutos."
description: "Há apenas um ano, criei o Blowfish, um tema Hugo elaborado para construir minha visão única para minha página pessoal. Também decidi torná-lo um projeto de código aberto. Avançando até hoje, o Blowfish se transformou em um próspero projeto aberto -source com mais de 600 estrelas no GitHub e uma base de usuários de centenas. Neste tutorial, mostrarei como começar e ter seu site funcionando em alguns minutos."
categories: ["Código aberto", "Blowfish"]
tags: ["tutorial", "baiacu", "hugo"]
date: 2023-10-04
draft: false
showauthor: false
authors:
  - nunocoracao

---
Há apenas um ano, criei o [Blowfish](https://blowfish.page/), um tema [Hugo](https://gohugo.io/) criado para construir minha visão única para minha página pessoal. Também decidi torná-lo um projeto de código aberto. Avançando até hoje, o Blowfish se transformou em um próspero projeto de código aberto com mais de 600 estrelas no GitHub e uma base de usuários de centenas. Neste tutorial, mostrarei como começar e ter seu site funcionando em alguns minutos.

{{< github repo="nunocoracao/blowfish" >}}

##TL;DR

O objetivo deste guia é orientar um novato no Hugo sobre como instalar, gerenciar e publicar seu próprio site. A versão final do código está disponível neste [repo](https://github.com/nunocoracao/blowfish-tutorial/tree/main) - para quem quiser ir direto ao fim.

![Exemplo de tutorial](img/01.png)

O estilo visual é apenas uma das muitas possibilidades disponíveis no Blowfish. Os usuários são incentivados a verificar a [página de documentação](https://blowfish.page/) e aprender como personalizar o tema de acordo com suas necessidades. Além disso, já existem [ótimos exemplos](https://blowfish.page/users/) do tema de outros usuários disponíveis para inspiração. O Blowfish também oferece vários recursos extras na forma de `shortcodes` disponíveis imediatamente no tema - confira [aqui](https://blowfish.page/docs/shortcodes/) e inspire-se.

## Configure seu ambiente

Vamos começar instalando todas as ferramentas que você precisa. Este guia cobrirá as etapas para Mac, portanto, essas instruções podem não se aplicar ao seu hardware e sistema operacional. Se você estiver no Windows ou Linux, consulte os guias sobre como [instalar o Hugo](https://gohugo.io/installation/) e [CLI do GitHub](https://cli.github.com/) para seu sistema operacional.

De qualquer forma, se você estiver usando MacOS vamos instalar o `brew` - um gerenciador de pacotes para mac - pois isso ajudará na instalação e gerenciamento das outras ferramentas.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Depois que o `brew` estiver instalado, vamos instalar o Git, o Hugo e a CLI do GitHub.
```bash
preparar instalar git
preparar instalar hugo
preparar instalar gh
```

Crie uma pasta para o seu código e abra uma sessão de terminal nela (escolhi _blowfish-tutorial_ nos comandos abaixo, fique à vontade para chamar a pasta como quiser).
```bash
mkdir tutorial sobre baiacu
CD Blowfish-tutorial
```

Uma vez dentro da pasta, o próximo passo é inicializar seu repositório `git` local.
```bash
git init -b principal
```

Agora, vamos criar e sincronizar o repositório local com um repositório GitHub para que seu código seja armazenado remotamente.
```bash
login de autenticação gh
gh repositório criar
git push --set-upstream origem principal
```

Verifique na imagem abaixo as opções que selecionei para este guia, novamente fique à vontade para alterar os nomes e a descrição de acordo com seu caso de uso.

![gh repo create exemplo](img/ghcreate.png)


Por fim, crie um arquivo **.gitignore** que permite excluir automaticamente determinados arquivos do seu repositório. Eu começaria com algo como o exemplo abaixo.

```bash
#outros
node_modules
.hugo_build.lock

# arquivos gerados pelo SO
.DS_Store
.DS_Loja?
._*
.Spotlight-V100
.Lixos

#Hugo
público
```

A última etapa é salvar todas as alterações no repositório.
```bash
adicione.
git commit -m “commit inicial”
dê um empurrão
```


## Crie um site e configure-o

Com todas as ferramentas prontas, criar e configurar seu site será fácil. Ainda dentro da pasta que você criou na última seção, vamos criar um site vazio do Hugo (_sem tema_).

```bash
hugo novo site --force .
```

Assim que o scaffolding terminar, tente o comando abaixo para executar sua página. Abra um navegador em _[https://localhost:1313](https://localhost:1313)_ para ver seu site…
 
```bash
servidor hugo
```

 Ups… Página não encontrada – certo?
Isso era esperado, mesmo que você tenha criado um site, o Hugo não oferece nenhuma experiência padrão – ou seja, seu site não tem nenhuma página para mostrar.

Próximo passo, vamos instalar o Blowfish usando `git submodules`, o que tornará mais fácil o gerenciamento e a atualização para novas versões no futuro.
 
```bash
git submódulo add -b main https://github.com/nunocoracao/blowfish.git temas/blowfish
```

Em seguida, crie a seguinte estrutura de pastas na raiz do seu diretório de código - `config/_default/`. Agora você precisará baixar [estes arquivos](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fnunocoracao%2Fblowfish%2Ftree%2Fmain%2Fconfig%2F% 5C_default) e coloque-os na pasta _\_default_ que você acabou de criar. A estrutura final deve ser parecida com isto.

```md
configuração/_default/
├─config.toml
├─ idiomas.en.toml
├─ marcação.toml
├─ menus.en.toml
└─ params.toml
`
```


Abra o **config.toml** e descomente a linha **theme = "blowfish”** e você está pronto para começar. Tente executar o site novamente e verifique o resultado em _[https://localhost:1313] (https://localhost:1313)_

```bash
servidor hugo
```

Você deverá ver algo como a imagem abaixo. Ainda não muito, pois não adicionamos nenhum conteúdo, mas o esqueleto principal do Blowfish já está instalado - requer apenas configuração.

![site vazio do blowfish](img/blowfishempty.png)

Agora vamos configurar o tema.

{{< alerta d>}}
**Para sua informação** Este guia não abordará em detalhes o que cada parâmetro disponível no Blowfish faz – para tudo o que está disponível e como usá-lo, verifique a [documentação do Blowfish](https://blowfish.page/docs/configuration/#theme- parâmetros) para cada opção em cada arquivo.
{{< /alert >}}

### menus.en.toml
Este arquivo define a estrutura do seu menu, para o banner superior e rodapé. Para este guia, vamos criar duas seções de menu: uma para _Postagens_ e outra para _Tags_.
- **Postagens** - exibirá a lista completa de entradas
- **Tags** - geradas automaticamente com base nas tags colocadas em cada artigo

Para conseguir isso, certifique-se de que as seguintes entradas existam no arquivo **menus.en.toml**. Depois que as alterações forem feitas, você deverá ver os menus aparecendo ao executar novamente o **hugo server**.

```toml
[[principal]]
  nome = "Postagens"
  pageRef = "postagens"
  peso = 10

[[principal]]
  nome = "Tags"
  pageRef = "tags"
  peso = 30
```


### idiomas.en.toml

Este arquivo irá configurar seus principais dados como autor do site. Altere a seção abaixo para refletir seus detalhes.

```bash
[autor]
   nome = "Seu nome aqui"
   imagem = "perfil.jpg"
   headline = "Sou apenas humano"
   bio = "Um pouco sobre você" # aparece no cartão do autor de cada artigo
```

As imagens do site devem ser colocadas na pasta _assets_. Para esta etapa, adicione uma foto de perfil à pasta chamada _profile.jpg_ ou altere a configuração acima para o nome de arquivo que você escolheu. Se você não tiver uma imagem de perfil disponível, poderá usar a imagem abaixo para o tutorial.

![perfil](img/profile.jpg "ativos/perfil.jpg")

A última etapa é configurar seus links – redes sociais, GitHub, etc. O arquivo inclui todas as opções suportadas, mas elas são comentadas. Você pode descomentar tudo e excluir aqueles que prefere não usar. Substitua os links corretos por aqueles que você decidiu manter. Você também pode alterar a ordem.



### params.toml

Este é o arquivo de configuração principal do Blowfish. A maioria das opções visuais ou customizações disponíveis podem ser configuradas por meio dele, e abrange diversas áreas do tema. Para este tutorial, decidi usar um layout de **fundo** - [verifique outros layouts para a página inicial do Blowfish](https://blowfish.page/) - com o esquema de cores **Neon** - você pode escolher um esquema de cores diferente se desejar - verifique [esta lista](https://blowfish.page/docs/getting-started/#colour-schemes) ou [crie o seu próprio](https://blowfish.page/docs/ personalização avançada/#esquemas de cores).

Adicione um **image.jpg** à pasta de ativos que será o plano de fundo do site. Você também pode baixar os exemplos que estou usando neste tutorial.

![fundo](img/background.jpg "assets/image.jpg")

Agora vamos pular para _params.toml_ e começar a configurar o arquivo. Vou focar apenas nos valores que precisam ser alterados, não exclua o restante do arquivo sem ler a documentação. Vamos começar certificando-nos de que temos o esquema de cores correto, que a otimização da imagem está ativada e configuramos a imagem de fundo padrão.

```bash
colorScheme = "néon"
desativarImageOptimization = falso
defaultBackgroundImage = "image.jpg" # usado como padrão para imagens de fundo
```

A seguir, vamos configurar nossa página inicial. Vamos com o layout _background_, configurando a imagem da página inicial e os itens recentes. Além disso, estamos usando a **visualização de cartão** para itens da categoria recente. Finalmente, vamos configurar o cabeçalho a ser corrigido.

```bash
[pagina inicial]
  layout = "background" # opções válidas: página, perfil, herói, cartão, plano de fundo, personalizado
  homepageImage = "image.jpg" # usado em: herói e cartão
  mostrarRecente = verdadeiro
  mostrarItemsRecentes = 6
  mostrarMaisLink = verdadeiro
  showMoreLinkDest = "/postagens"
  cardView = verdadeiro
  cardViewScreenWidth = falso
  layoutBackgroundBlur = true # usado apenas quando o layout é igual ao plano de fundo

[cabeçalho]
  layout = "fixo"
```

Agora configure a aparência das páginas do artigo e da lista. Aqui estão as configurações para eles.

```bash
[artigo]
  showHero = verdadeiro
  heroStyle = "plano de fundo"
  mostrarSummary = verdadeiro
  showTableOfContents = verdadeiro
  showRelatedContent = verdadeiro
  relacionadoContentLimit = 3

[lista]
  mostrarCards = verdadeiro
  grupoByYear = falso
  cardView = verdadeiro
```


Se você executar **hugo server** novamente, deverá ver algo como a imagem abaixo.


![blowfish sem artigos](img/blowfishnoarticles.png)



## Adicionando conteúdo ao seu site

Crie uma pasta para colocar suas postagens em `/content/posts`. Este também foi o diretório configurado em seu menu para listar todos os artigos. Dentro dessa pasta, vamos criar um novo diretório e dar a ele o nome **myfirstpost**. Dentro dele, crie um arquivo **index.md** – seu artigo e coloque um arquivo feature.jpg ou .png no mesmo diretório da miniatura do artigo. Use o exemplo abaixo para começar. As primeiras linhas do arquivo são o Front Matter, que informa ao Hugo qual será o visual e a experiência do artigo – diferentes temas suportam diferentes parâmetros para isso. Verifique os [documentos](https://blowfish.page/docs/front-matter/) para mais informações.

```md