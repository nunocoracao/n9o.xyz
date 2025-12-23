---
title: "Construisez votre page d'accueil avec Blowfish et Hugo"
summary: "Il y a tout juste un an, j'ai créé Blowfish, un thème Hugo conçu pour construire ma vision unique de ma page d'accueil personnelle. J'ai également décidé d'en faire un projet open-source. Aujourd'hui, Blowfish s'est transformé en un projet open-source florissant avec plus de 600 étoiles sur GitHub et une base d'utilisateurs de plusieurs centaines. Dans ce tutoriel, je vais vous montrer comment démarrer et avoir votre site web fonctionnel en quelques minutes."
description: "Il y a tout juste un an, j'ai créé Blowfish, un thème Hugo conçu pour construire ma vision unique de ma page d'accueil personnelle. J'ai également décidé d'en faire un projet open-source. Aujourd'hui, Blowfish s'est transformé en un projet open-source florissant avec plus de 600 étoiles sur GitHub et une base d'utilisateurs de plusieurs centaines. Dans ce tutoriel, je vais vous montrer comment démarrer et avoir votre site web fonctionnel en quelques minutes."
categories: ["Open-Source", "Blowfish"]
tags: ["tutoriel", "blowfish", "hugo"]
date: 2023-10-04
draft: false
---

Il y a tout juste un an, j'ai créé [Blowfish](https://blowfish.page/), un thème [Hugo](https://gohugo.io/) conçu pour construire ma vision unique de ma page d'accueil personnelle. J'ai également décidé d'en faire un projet open-source. Aujourd'hui, Blowfish s'est transformé en un projet open-source florissant avec plus de 600 étoiles sur GitHub et une base d'utilisateurs de plusieurs centaines. Dans ce tutoriel, je vais vous montrer comment démarrer et avoir votre site web fonctionnel en quelques minutes.

{{< github repo="nunocoracao/blowfish" >}}

## TL;DR

L'objectif de ce guide est d'accompagner un débutant Hugo sur l'installation, la gestion et la publication de son propre site web. La version finale du code est disponible dans ce [repo](https://github.com/nunocoracao/blowfish-tutorial/tree/main) - pour ceux qui voudraient sauter à la fin.

![Exemple du tutoriel](/posts/202310-blowfish-tutorial/img/01.webp)

Le style visuel n'est qu'une des nombreuses possibilités disponibles dans Blowfish. Les utilisateurs sont encouragés à consulter la [page de documentation](https://blowfish.page/) et apprendre à personnaliser le thème selon leurs besoins. De plus, il existe déjà d'[excellents exemples](https://blowfish.page/users/) du thème d'autres utilisateurs disponibles pour l'inspiration. Blowfish offre également plusieurs fonctionnalités supplémentaires sous forme de `shortcodes` disponibles directement dans le thème - découvrez-les [ici](https://blowfish.page/docs/shortcodes/) et inspirez-vous.

## Configurez votre environnement

Commençons par installer tous les outils nécessaires. Ce guide couvrira les étapes pour Mac donc ces instructions pourraient ne pas s'appliquer à votre matériel et OS. Si vous êtes sur Windows ou Linux, veuillez consulter les guides sur comment [installer Hugo](https://gohugo.io/installation/) et la [CLI de GitHub](https://cli.github.com/) pour votre OS.

Si vous utilisez MacOS, installons `brew` - un gestionnaire de paquets pour Mac - car cela aidera à installer et gérer les autres outils.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Une fois `brew` installé, installons Git, Hugo et la CLI de GitHub.
```bash
brew install git
brew install hugo
brew install gh
```

Créez un dossier pour votre code et ouvrez une session terminal dedans (j'ai choisi _blowfish-tutorial_ dans les commandes ci-dessous, n'hésitez pas à nommer le dossier comme vous voulez).
```bash
mkdir blowfish-tutorial
cd blowfish-tutorial
```

Une fois dans le dossier, l'étape suivante est d'initialiser votre repo `git` local.
```bash
git init -b main
```

Maintenant, créons et synchronisons le repo local avec un repo GitHub pour que votre code soit stocké à distance.
```bash
gh auth login
gh repo create
git push --set-upstream origin main
```

Consultez l'image ci-dessous pour les options que j'ai sélectionnées pour ce guide, n'hésitez pas à changer les noms et la description pour votre cas d'utilisation.

![exemple gh repo create](/posts/202310-blowfish-tutorial/img/ghcreate.webp)


Enfin, créez un fichier **.gitignore** qui vous permet d'exclure automatiquement certains fichiers de votre repo. Je commencerais avec quelque chose comme l'exemple ci-dessous.

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

La dernière étape est de sauvegarder toutes les modifications dans le repo.
```bash
git add .
git commit -m "initial commit"
git push
```


## Créez le site et configurez-le

Avec tous les outils prêts, créer et configurer votre site sera facile. Toujours dans le dossier que vous avez créé dans la section précédente, créons un site Hugo vide (_sans thème_).

```bash
hugo new site --force .
```

Une fois le scaffolding terminé, essayez la commande ci-dessous pour lancer votre page. Ouvrez un navigateur sur _[https://localhost:1313](https://localhost:1313)_ pour voir votre site…

```bash
hugo server
```

 Oups… Page non trouvée – n'est-ce pas ?
C'était prévu, même si vous avez créé un site web, Hugo ne fournit aucune expérience par défaut – c'est-à-dire que votre site n'a aucune page à afficher.

Prochaine étape, installons Blowfish en utilisant les `git submodules` ce qui facilitera la gestion et la mise à jour vers de nouvelles versions à l'avenir.

```bash
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

Ensuite, créez la structure de dossiers suivante à la racine de votre répertoire de code - `config/_default/`. Maintenant vous devrez télécharger [ces fichiers](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fnunocoracao%2Fblowfish%2Ftree%2Fmain%2Fconfig%2F%5C_default) et les placer dans le dossier _\_default_ que vous venez de créer. La structure finale devrait ressembler à ceci.

```md
config/_default/
├─ config.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
└─ params.toml
`
```


Ouvrez le **config.toml** et décommentez la ligne **theme = "blowfish"** et vous êtes prêt. Essayez de relancer le site et vérifiez le résultat sur _[https://localhost:1313](https://localhost:1313)_

```bash
hugo server
```

Vous devriez voir quelque chose comme l'image ci-dessous. Pas grand-chose encore puisque nous n'avons pas ajouté de contenu, mais le squelette principal pour Blowfish est déjà en place - il nécessite juste une configuration.

![site blowfish vide](/posts/202310-blowfish-tutorial/img/blowfishempty.webp)

Maintenant configurons le thème.

{{< alert  d>}}
**FYI** Ce guide ne couvrira pas en détail ce que fait chaque paramètre disponible dans Blowfish – pour tout ce qui est disponible et comment l'utiliser, consultez la [documentation Blowfish](https://blowfish.page/docs/configuration/#theme-parameters) pour chaque option dans chaque fichier.
{{< /alert >}}

### menus.en.toml
Ce fichier définit la structure de votre menu, pour la bannière supérieure et le pied de page. Pour ce guide, créons deux sections de menu : une pour _Posts_ et une pour _Tags_.
- **Posts** - affichera la liste complète des entrées
- **Tags** - généré automatiquement en fonction des tags placés sur chaque article

Pour y parvenir, assurez-vous que les entrées suivantes existent dans le fichier **menus.en.toml**. Une fois les modifications effectuées, vous devriez voir les menus apparaître en relançant **hugo server**.

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

Ce fichier configurera vos détails principaux en tant qu'auteur du site web. Modifiez la section ci-dessous pour refléter vos détails.

```bash
[author]
   name = "Votre nom ici"
   image = "profile.jpg"
   headline = "Je ne suis qu'un humain"
   bio = "Un peu sur vous" # apparaît dans la carte auteur pour chaque article
```

Les images pour le site web doivent être placées dans le dossier _assets_. Pour cette étape, veuillez ajouter une photo de profil à ce dossier nommée _profile.jpg_ ou changez la configuration ci-dessus pour le nom de fichier que vous avez choisi. Si vous n'avez pas d'image de profil disponible, vous pouvez utiliser celle ci-dessous pour le tutoriel.

![profil](/posts/202310-blowfish-tutorial/img/profile.jpg "assets/profile.jpg")

La dernière étape est de configurer vos liens – réseaux sociaux, GitHub, etc. Le fichier inclut toutes les options supportées, mais elles sont commentées. Vous êtes libre de tout décommenter et de supprimer ceux que vous préférez ne pas utiliser. Remplacez les bons liens sur ceux que vous avez décidé de garder. Vous pouvez également changer l'ordre.



### params.toml

C'est le fichier de configuration principal pour Blowfish. La plupart des options visuelles ou personnalisations disponibles peuvent être configurées en l'utilisant, et il couvre plusieurs zones du thème. Pour ce tutoriel, j'ai décidé d'utiliser un layout **background** - [voir d'autres layouts pour la page d'accueil de Blowfish](https://blowfish.page/) - avec le schéma de couleurs **Neon** - vous pouvez choisir un schéma de couleurs différent si vous le souhaitez - consultez [cette liste](https://blowfish.page/docs/getting-started/#colour-schemes) ou [créez le vôtre](https://blowfish.page/docs/advanced-customisation/#colour-schemes).

Ajoutez un **image.jpg** au dossier assets qui sera l'arrière-plan du site. Vous pouvez également télécharger les exemples que j'utilise dans ce tutoriel.

![arrière-plan](/posts/202310-blowfish-tutorial/img/background.jpg "assets/image.jpg")

Maintenant passons au _params.toml_ et commençons à configurer le fichier. Je me concentrerai uniquement sur les valeurs qui doivent être changées, ne supprimez pas le reste du fichier sans lire la documentation. Commençons par nous assurer que nous avons le bon schéma de couleurs, que l'optimisation des images est activée, et configurons l'image d'arrière-plan par défaut.

```bash
colorScheme = "neon"
disableImageOptimization = false
defaultBackgroundImage = "image.jpg" # utilisé par défaut pour les images d'arrière-plan
```

Ensuite, configurons notre page d'accueil. Nous utilisons le layout _background_, configurant l'image de la page d'accueil et les éléments récents. De plus, nous utilisons la **vue carte** pour les éléments dans la catégorie récents. Enfin, configurons l'en-tête comme fixe.

```bash
[homepage]
  layout = "background" # options valides : page, profile, hero, card, background, custom
  homepageImage = "image.jpg" # utilisé dans : hero et card
  showRecent = true
  showRecentItems = 6
  showMoreLink = true
  showMoreLinkDest = "/posts"
  cardView = true
  cardViewScreenWidth = false
  layoutBackgroundBlur = true # utilisé uniquement quand layout est background

[header]
  layout = "fixed"
```

Maintenant configurons l'apparence des pages d'articles et de listes. Voici les configurations pour celles-ci.

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


Si vous relancez **hugo server**, vous devriez voir quelque chose comme l'image ci-dessous.


![blowfish pas d'articles](/posts/202310-blowfish-tutorial/img/blowfishnoarticles.webp)



## Ajouter du contenu à votre site

Créez un dossier pour vos posts dans `/content/posts`. C'était aussi le répertoire configuré dans votre menu pour lister tous les articles. Dans ce dossier, créons un nouveau répertoire et appelons-le **myfirstpost**. À l'intérieur, créez un fichier **index.md** – votre article et placez un featured.jpg ou .webp dans le même répertoire comme vignette pour l'article. Utilisez l'exemple ci-dessous pour commencer. Les premières lignes du fichier sont le Front Matter, qui indiquent à Hugo l'apparence et l'expérience de l'article – différents thèmes supportent différents paramètres pour cela. Consultez la [documentation](https://blowfish.page/docs/front-matter/) pour plus d'informations.

```md
---
title: "Mon premier post"
date: 2023-08-14
draft: false
summary: "Ceci est mon premier post sur mon site"
tags: ["space"]
---

## Un sous-titre

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisl, vulputate eu lacus vitae, maximus molestie libero. Vestibulum laoreet, odio et sollicitudin sollicitudin, quam ligula tempus urna, sed sagittis eros eros ac felis. In tristique tortor vitae lacinia commodo. Mauris venenatis ultrices purus nec fermentum. Nunc sit amet aliquet metus. Morbi nisl felis, gravida ac consequat vitae, blandit eu libero. Curabitur porta est in dui elementum porttitor. Maecenas fermentum, tortor ac feugiat fringilla, orci sem sagittis massa, a congue risus ipsum vel massa. Aliquam sit amet nunc vulputate, facilisis neque in, faucibus nisl.
```

Vous pouvez créer des articles supplémentaires pour voir à quoi ressemblera votre site une fois qu'il y aura du contenu. Votre site devrait ressembler aux images ci-dessous. La page principale affiche les articles récents, chaque article est connecté aux autres automatiquement via la section connexe, vous avez l'agrégation des tags et la recherche en texte intégral.

{{< gallery >}}
  <img src="/posts/202310-blowfish-tutorial/img/blowfishrecent.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/article.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/search.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/tag.webp" class="grid-w50" />
{{< /gallery >}}


## Publiez-le

La seule chose qui manque est de publier votre site. J'utiliserai [Firebase](https://firebase.google.com/) pour l'hébergement - c'est une alternative gratuite et fournit des fonctionnalités plus avancées si vous créez quelque chose de plus complexe. Allez sur Firebase et créez un nouveau projet. Une fois cela fait, passons au CLI car il sera plus facile de tout configurer.

Installons le CLI de Firebase - si pas sur Mac consultez les [instructions d'installation sur Firebase](https://firebase.google.com/docs/cli).
```bash
brew install firebase
```

Maintenant connectez-vous et initialisez l'hébergement Firebase pour le projet.

```bash
firebase login
firebase init
```

Sélectionnez hosting et continuez.

![firebase init](/posts/202310-blowfish-tutorial/img/firebasecli.webp)

Suivez l'image ci-dessous pour les options que je recommande. Assurez-vous de configurer les fichiers workflow pour les GitHub Actions. Ceux-ci garantiront que votre code sera déployé une fois qu'il y aura un changement dans le repo.

![options firebase](/posts/202310-blowfish-tutorial/img/firebaseoptions.webp)

Cependant, ces fichiers ne fonctionneront pas directement, car Hugo nécessite des étapes supplémentaires pour que le build fonctionne. Veuillez copier et coller les blocs de code ci-dessous dans les fichiers respectifs dans le dossier **.github**, mais gardez le **projectId** original dans les fichiers générés par Firebase.

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


La dernière étape est de commiter votre code sur GitHub et de laisser les workflows que vous avez créés s'occuper du déploiement de votre site. Puisque nous avons configuré les GitHub Actions, cela déclenchera un job qui configurera et déploiera votre site automatiquement.

```bash
git add .
git commit -m "add github actions workflows"
git push
```

Dans l'onglet Actions de votre repo, vous devriez voir quelque chose comme ceci.

![gh actions](/posts/202310-blowfish-tutorial/img/githubactions.webp)

Une fois toutes les étapes terminées, votre console Firebase devrait afficher quelque chose comme l'image ci-dessous - y compris les liens pour voir votre app – j'ai une version de ce tutoriel en cours d'exécution sur [https://blowfish-tutorial.web.app/](https://blowfish-tutorial.web.app/).

![console firebase](/posts/202310-blowfish-tutorial/img/firebaseconsole.webp)


## Conclusion et prochaines étapes

Maintenant vous avez votre première version de votre page d'accueil. Vous pouvez faire des modifications localement et une fois que vous commitez votre code, elles seront automatiquement reflétées en ligne. Que devriez-vous faire ensuite ? Je vous laisse quelques liens utiles pour vous inspirer et en apprendre plus sur Blowfish et Hugo.

- https://blowfish.page/docs/
- https://blowfish.page/docs/configuration/
- https://blowfish.page/docs/shortcodes/
- https://blowfish.page/examples/
- https://blowfish.page/users/
- https://gohugo.io/documentation/

![blowfish final](/posts/202310-blowfish-tutorial/img/01.webp)
