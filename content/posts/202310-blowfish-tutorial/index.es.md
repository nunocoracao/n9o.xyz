---
title: "Construye tu homepage usando Blowfish y Hugo"
summary: "Hace apenas un año, creé Blowfish, un tema Hugo diseñado para construir mi visión única de mi página de inicio personal. También decidí convertirlo en un proyecto open-source. Hoy, Blowfish se ha transformado en un próspero proyecto open-source con más de 600 estrellas en GitHub y una base de usuarios de cientos. En este tutorial, te mostraré cómo empezar y tener tu sitio web funcionando en cuestión de minutos."
description: "Hace apenas un año, creé Blowfish, un tema Hugo diseñado para construir mi visión única de mi página de inicio personal. También decidí convertirlo en un proyecto open-source. Hoy, Blowfish se ha transformado en un próspero proyecto open-source con más de 600 estrellas en GitHub y una base de usuarios de cientos. En este tutorial, te mostraré cómo empezar y tener tu sitio web funcionando en cuestión de minutos."
categories: ["Open-Source", "Blowfish"]
tags: ["tutorial", "blowfish", "hugo"]
date: 2023-10-04
draft: false
---

Hace apenas un año, creé [Blowfish](https://blowfish.page/), un tema [Hugo](https://gohugo.io/) diseñado para construir mi visión única de mi página de inicio personal. También decidí convertirlo en un proyecto open-source. Hoy, Blowfish se ha transformado en un próspero proyecto open-source con más de 600 estrellas en GitHub y una base de usuarios de cientos. En este tutorial, te mostraré cómo empezar y tener tu sitio web funcionando en cuestión de minutos.

{{< github repo="nunocoracao/blowfish" >}}

## TL;DR

El objetivo de esta guía es orientar a un principiante en Hugo sobre cómo instalar, gestionar y publicar su propio sitio web. La versión final del código está disponible en este [repo](https://github.com/nunocoracao/blowfish-tutorial/tree/main) - para quienes quieran saltar al final.

![Ejemplo del tutorial](/posts/202310-blowfish-tutorial/img/01.webp)

El estilo visual es solo una de las muchas posibilidades disponibles en Blowfish. Se anima a los usuarios a consultar la [página de documentación](https://blowfish.page/) y aprender a personalizar el tema según sus necesidades. Además, ya hay [excelentes ejemplos](https://blowfish.page/users/) del tema de otros usuarios disponibles para inspiración. Blowfish también ofrece varias características extra en forma de `shortcodes` disponibles directamente en el tema - descúbrelos [aquí](https://blowfish.page/docs/shortcodes/) e inspírate.

## Configura tu entorno

Comencemos instalando todas las herramientas que necesitas. Esta guía cubrirá los pasos para Mac, por lo que estas instrucciones podrían no aplicarse a tu hardware y OS. Si estás en Windows o Linux, por favor consulta las guías sobre cómo [instalar Hugo](https://gohugo.io/installation/) y la [CLI de GitHub](https://cli.github.com/) para tu OS.

Si estás usando MacOS, instalemos `brew` - un gestor de paquetes para Mac - ya que eso ayudará a instalar y gestionar las otras herramientas.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Una vez instalado `brew`, instalemos Git, Hugo y la CLI de GitHub.
```bash
brew install git
brew install hugo
brew install gh
```

Crea una carpeta para tu código y abre una sesión de terminal en ella (elegí _blowfish-tutorial_ en los comandos de abajo, siéntete libre de llamar a la carpeta como quieras).
```bash
mkdir blowfish-tutorial
cd blowfish-tutorial
```

Una vez dentro de la carpeta, el siguiente paso es inicializar tu repo `git` local.
```bash
git init -b main
```

Ahora, creemos y sincronicemos el repo local con un repo de GitHub para que tu código se almacene remotamente.
```bash
gh auth login
gh repo create
git push --set-upstream origin main
```

Consulta la imagen de abajo para las opciones que seleccioné para esta guía, siéntete libre de cambiar nombres y descripción para tu caso de uso.

![ejemplo gh repo create](/posts/202310-blowfish-tutorial/img/ghcreate.webp)


Finalmente, crea un archivo **.gitignore** que te permite excluir ciertos archivos de tu repo automáticamente. Yo empezaría con algo como el ejemplo de abajo.

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

El último paso es guardar todos los cambios en el repo.
```bash
git add .
git commit -m "initial commit"
git push
```


## Crea el sitio y configúralo

Con todas las herramientas listas, crear y configurar tu sitio será fácil. Todavía dentro de la carpeta que creaste en la última sección, creemos un sitio web Hugo vacío (_sin tema_).

```bash
hugo new site --force .
```

Una vez que termine el scaffolding, prueba el comando de abajo para ejecutar tu página. Abre un navegador en _[https://localhost:1313](https://localhost:1313)_ para ver tu sitio…

```bash
hugo server
```

 Ups… ¿Página no encontrada – verdad?
Esto era esperado, aunque creaste un sitio web, Hugo no da ninguna experiencia por defecto – es decir, tu sitio no tiene ninguna página que mostrar.

Siguiente paso, instalemos Blowfish usando `git submodules` lo que facilitará gestionarlo y actualizarlo a nuevas versiones en el futuro.

```bash
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

A continuación, crea la siguiente estructura de carpetas en la raíz de tu directorio de código - `config/_default/`. Ahora necesitarás descargar [estos archivos](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fnunocoracao%2Fblowfish%2Ftree%2Fmain%2Fconfig%2F%5C_default) y colocarlos en la carpeta _\_default_ que acabas de crear. La estructura final debería verse así.

```md
config/_default/
├─ config.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
└─ params.toml
`
```


Abre el **config.toml** y descomenta la línea **theme = "blowfish"** y estás listo. Intenta ejecutar el sitio de nuevo y verifica el resultado en _[https://localhost:1313](https://localhost:1313)_

```bash
hugo server
```

Deberías ver algo como la imagen de abajo. No mucho aún ya que no hemos añadido contenido, pero el esqueleto principal de Blowfish ya está en su lugar - solo requiere configuración.

![sitio blowfish vacío](/posts/202310-blowfish-tutorial/img/blowfishempty.webp)

Ahora configuremos el tema.

{{< alert  d>}}
**FYI** Esta guía no cubrirá en detalle lo que hace cada parámetro disponible en Blowfish – para todo lo disponible y cómo usarlo, consulta la [documentación de Blowfish](https://blowfish.page/docs/configuration/#theme-parameters) para cada opción en cada archivo.
{{< /alert >}}

### menus.en.toml
Este archivo define la estructura de tu menú, para el banner superior y el pie de página. Para esta guía, creemos dos secciones de menú: una para _Posts_ y una para _Tags_.
- **Posts** - mostrará la lista completa de entradas
- **Tags** - generado automáticamente basándose en las etiquetas colocadas en cada artículo

Para lograr esto, asegúrate de que las siguientes entradas existan en el archivo **menus.en.toml**. Una vez hechos los cambios, deberías ver los menús aparecer al volver a ejecutar **hugo server**.

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

Este archivo configurará tus detalles principales como autor del sitio web. Cambia la sección de abajo para reflejar tus detalles.

```bash
[author]
   name = "Tu nombre aquí"
   image = "profile.jpg"
   headline = "Solo soy humano"
   bio = "Un poco sobre ti" # aparece en la tarjeta del autor para cada artículo
```

Las imágenes para el sitio web deben colocarse en la carpeta _assets_. Para este paso, por favor añade una foto de perfil a esa carpeta llamada _profile.jpg_ o cambia la configuración de arriba al nombre de archivo que elegiste. Si no tienes una imagen de perfil disponible, puedes usar la de abajo para el tutorial.

![perfil](/posts/202310-blowfish-tutorial/img/profile.jpg "assets/profile.jpg")

El último paso es configurar tus enlaces – redes sociales, GitHub, etc. El archivo incluye todas las opciones soportadas, pero están comentadas. Eres libre de descomentar todo y eliminar las que prefieras no usar. Reemplaza los enlaces correctos en las que decidas mantener. También puedes cambiar el orden.



### params.toml

Este es el archivo de configuración principal de Blowfish. La mayoría de las opciones visuales o personalización disponible pueden configurarse usándolo, y cubre varias áreas del tema. Para este tutorial, decidí usar un layout **background** - [ver otros layouts para la landing page de Blowfish](https://blowfish.page/) - con el esquema de colores **Neon** - puedes elegir un esquema de colores diferente si quieres - consulta [esta lista](https://blowfish.page/docs/getting-started/#colour-schemes) o [crea el tuyo propio](https://blowfish.page/docs/advanced-customisation/#colour-schemes).

Añade un **image.jpg** a la carpeta assets que será el fondo del sitio. También puedes descargar los ejemplos que estoy usando en este tutorial.

![fondo](/posts/202310-blowfish-tutorial/img/background.jpg "assets/image.jpg")

Ahora pasemos al _params.toml_ y empecemos a configurar el archivo. Me centraré solo en los valores que necesitan cambiarse, no elimines el resto del archivo sin leer la documentación. Empecemos asegurándonos de que tenemos el esquema de colores correcto, que la optimización de imágenes está activada, y configuremos la imagen de fondo por defecto.

```bash
colorScheme = "neon"
disableImageOptimization = false
defaultBackgroundImage = "image.jpg" # usado por defecto para imágenes de fondo
```

A continuación, configuremos nuestra homepage. Vamos con el layout _background_, configurando la imagen de la homepage y los elementos recientes. Además, estamos usando la **vista de tarjetas** para elementos en la categoría recientes. Finalmente, configuremos el header como fijo.

```bash
[homepage]
  layout = "background" # opciones válidas: page, profile, hero, card, background, custom
  homepageImage = "image.jpg" # usado en: hero y card
  showRecent = true
  showRecentItems = 6
  showMoreLink = true
  showMoreLinkDest = "/posts"
  cardView = true
  cardViewScreenWidth = false
  layoutBackgroundBlur = true # solo usado cuando layout es background

[header]
  layout = "fixed"
```

Ahora configuremos cómo se verán las páginas de artículos y listas. Aquí están las configuraciones para esas.

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


Si ejecutas **hugo server** de nuevo, deberías ver algo como la imagen de abajo.


![blowfish sin artículos](/posts/202310-blowfish-tutorial/img/blowfishnoarticles.webp)



## Añadir contenido a tu sitio

Crea una carpeta para tus posts en `/content/posts`. Este también era el directorio configurado en tu menú para listar todos los artículos. Dentro de esa carpeta, creemos un nuevo directorio y démosle el nombre **myfirstpost**. Dentro de él crea un archivo **index.md** – tu artículo y coloca un featured.jpg o .webp en el mismo directorio como miniatura para el artículo. Usa el ejemplo de abajo para empezar. Las primeras líneas en el archivo son el Front Matter, que le dicen a Hugo cuál será la apariencia y experiencia del artículo – diferentes temas soportan diferentes parámetros para esto. Consulta la [documentación](https://blowfish.page/docs/front-matter/) para más información.

```md
---
title: "Mi primer post"
date: 2023-08-14
draft: false
summary: "Este es mi primer post en mi sitio"
tags: ["space"]
---

## Un subtítulo

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisl, vulputate eu lacus vitae, maximus molestie libero. Vestibulum laoreet, odio et sollicitudin sollicitudin, quam ligula tempus urna, sed sagittis eros eros ac felis. In tristique tortor vitae lacinia commodo. Mauris venenatis ultrices purus nec fermentum. Nunc sit amet aliquet metus. Morbi nisl felis, gravida ac consequat vitae, blandit eu libero. Curabitur porta est in dui elementum porttitor. Maecenas fermentum, tortor ac feugiat fringilla, orci sem sagittis massa, a congue risus ipsum vel massa. Aliquam sit amet nunc vulputate, facilisis neque in, faucibus nisl.
```

Puedes crear artículos adicionales para ver cómo se verá tu sitio una vez que haya contenido. Tu sitio debería verse como las imágenes de abajo. La página principal muestra los artículos recientes, cada artículo está conectado a través de otros automáticamente vía sección relacionada, tienes agregación de tags y búsqueda de texto completo.

{{< gallery >}}
  <img src="/posts/202310-blowfish-tutorial/img/blowfishrecent.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/article.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/search.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/tag.webp" class="grid-w50" />
{{< /gallery >}}


## Publícalo

Lo único que falta es publicar tu sitio. Voy a usar [Firebase](https://firebase.google.com/) para hosting - es una alternativa gratuita y proporciona características más avanzadas si estás creando algo más complejo. Ve a Firebase y crea un nuevo proyecto. Una vez hecho eso, cambiemos al CLI ya que será más fácil configurar todo.

Instalemos el CLI de Firebase - si no estás en Mac consulta las [instrucciones de instalación en Firebase](https://firebase.google.com/docs/cli).
```bash
brew install firebase
```

Ahora inicia sesión e inicializa el hosting de Firebase para el proyecto.

```bash
firebase login
firebase init
```

Selecciona hosting y procede.

![firebase init](/posts/202310-blowfish-tutorial/img/firebasecli.webp)

Sigue la imagen de abajo para las opciones que recomiendo. Asegúrate de configurar los archivos de workflow para las GitHub Actions. Estos garantizarán que tu código se despliegue una vez que haya un cambio en el repo.

![opciones firebase](/posts/202310-blowfish-tutorial/img/firebaseoptions.webp)

Sin embargo, esos archivos no funcionarán de inmediato, ya que Hugo requiere pasos extra para que el build funcione. Por favor copia y pega los bloques de código de abajo en los respectivos archivos dentro de la carpeta **.github**, pero mantén el **projectId** original en los archivos generados por Firebase.

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


El último paso es hacer commit de tu código a GitHub y dejar que los workflows que creaste se encarguen de desplegar tu sitio. Ya que configuramos las GitHub Actions, esto activará un job que configurará y desplegará tu sitio automáticamente.

```bash
git add .
git commit -m "add github actions workflows"
git push
```

En la pestaña Actions de tu repo, deberías ver algo como esto.

![gh actions](/posts/202310-blowfish-tutorial/img/githubactions.webp)

Una vez que todos los pasos terminen, tu consola de Firebase debería mostrar algo como la imagen de abajo - incluyendo los enlaces para ver tu app – tengo una versión de este tutorial corriendo en [https://blowfish-tutorial.web.app/](https://blowfish-tutorial.web.app/).

![consola firebase](/posts/202310-blowfish-tutorial/img/firebaseconsole.webp)


## Conclusión y próximos pasos

Ahora tienes tu primera versión de tu homepage. Puedes hacer cambios localmente y una vez que hagas commit de tu código se reflejarán automáticamente en línea. ¿Qué deberías hacer después? Te dejo algunos enlaces útiles para inspirarte y aprender más sobre Blowfish y Hugo.

- https://blowfish.page/docs/
- https://blowfish.page/docs/configuration/
- https://blowfish.page/docs/shortcodes/
- https://blowfish.page/examples/
- https://blowfish.page/users/
- https://gohugo.io/documentation/

![blowfish final](/posts/202310-blowfish-tutorial/img/01.webp)
