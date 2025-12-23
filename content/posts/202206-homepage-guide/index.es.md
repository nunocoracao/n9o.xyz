---
title: "Cómo Creé Mi Página Web Personal (gratis) Usando Docker, Hugo y Firebase"
description: "Actualmente, existen varias soluciones para crear y alojar tu sitio web personal. Quise desafiarme a mí mismo para ver si podía hacerlo con el mismo conjunto de funcionalidades que algunas de las soluciones de pago y de forma gratuita. Aquí están los resultados."
summary: "Actualmente, existen varias soluciones para crear y alojar tu sitio web personal. Quise desafiarme a mí mismo para ver si podía hacerlo con el mismo conjunto de funcionalidades que algunas de las soluciones de pago y de forma gratuita. Aquí están los resultados."
categories: ["Desarrollo", "Tutorial"]
tags: ["Hugo", "Congo", "Docker", "VSCode"]
#externalUrl: ""
date: 2022-06-27
draft: false
---

## Resumen

Actualmente, existen varias soluciones para crear y alojar tu sitio web personal. Quise desafiarme a mí mismo para ver si podía hacerlo con el mismo conjunto de funcionalidades que algunas de las soluciones de pago y de forma gratuita. Aquí están los resultados.

## Por qué un PM construiría su propia página web desde cero…

Hace un par de meses decidí que quería empezar a escribir más para a) ejercitar mis habilidades de escritura y b) obtener retroalimentación sobre algunas de mis ideas. Con este objetivo en mente, comencé a investigar herramientas/plataformas que me ayudarían a publicar sin crear demasiada fricción para mí, o para las personas que quisieran leer lo que tengo que decir, por ejemplo, tener que pagar. Finalmente decidí crear mi propio sitio web.

Tenía un par de razones para querer probar esto:

- desafiarme para ver si yo, un antiguo estudiante de ingeniería de software, todavía podía armar algo que funcionara y sentirme bien de no haber olvidado todo lo que aprendí sobre programación,

- encontrar una solución gratuita flexible que me permitiera iniciar mi sitio web sin invertir dinero de inmediato, es decir, evitar costos operativos con plataformas y servicios que me encadenarían en el futuro,

- tener mi contenido alojado en un lugar que no requiera que las personas paguen por leerlo,

- experimentar con los <a target="_blank" href="https://docs.docker.com/desktop/dev-environments/">entornos de desarrollo de Docker</a> y los <a target="_blank" href="https://github.com/microsoft/vscode-dev-containers">contenedores de desarrollo de Microsoft</a> para familiarizarme con ambas soluciones.

## Empecemos…

Después de investigar, decidí elegir un framework generador de sitios web y un servicio de alojamiento gratuito. Para el framework del sitio web, elegí <a target="_blank" href="https://gohugo.io">Hugo</a> con <a target="_blank" href="https://github.com/jpanther/congoand">Congo</a> como tema, y para el servicio de alojamiento <a target="_blank" href="https://firebase.google.com">Firebase</a>. Y por razones obvias, decidí configurar mi entorno de desarrollo usando <a target="_blank" href="https://www.docker.com">Docker</a> para ponerme en los zapatos del usuario en este experimento.

No hice un análisis profundo de cuál framework era el mejor para mi problema ya que quería sacar un MVP rápido, así que revisé un par de opciones y elegí la primera que me gustó. Hay varias otras opciones con diferentes características y enfoques del que elegí. Si quieres explorar otras opciones, estas son algunas que puedes investigar: <a target="_blank" href="https://docusaurus.io/">Docussaurus</a>, <a target="_blank" href="https://www.gatsbyjs.com/">Gatsby</a>, <a target="_blank" href="https://jekyllrb.com/">Jekyll</a>, <a target="_blank" href="https://ghost.org/">Ghost</a>, e incluso <a target="_blank" href="https://wordpress.com/">WordPress</a>. Lo mismo aplica para la parte del alojamiento, aunque elegí <a target="_blank" href="https://firebase.google.com/">Firebase</a> hay otras soluciones como <a target="_blank" href="https://pages.cloudflare.com/">Cloudflare Pages</a>, <a target="_blank" href="https://pages.github.com/">GitHub Pages</a>, <a target="_blank" href="https://www.digitalocean.com/">Digital Ocean</a>, <a target="_blank" href="https://www.netlify.com/">Netlify</a>, <a target="_blank" href="https://vercel.com/">Vercel</a>, y otras que podrías considerar explorar. Si tienes alguna sugerencia para esta guía no dudes en contactarme, siempre estoy feliz de charlar y aprender.


## Herramientas

Para esta guía, usaré las siguientes herramientas, que deberían estar instaladas en tu máquina. Aquí hay una pequeña explicación de para qué se usará cada componente y un enlace a las instrucciones de instalación.

- **Docker** - Usaré Docker para configurar un entorno de desarrollo para este proyecto para que podamos omitir la necesidad de instalar todo el software requerido para ejecutar Hugo y Firebase CLI, es decir, cURL, Go, Hugo, Node, NPM, etc. Esto te permitirá comenzar desde un repositorio git, iniciar el entorno e ir directamente a escribir código en lugar de pasar horas averiguando cómo instalar un compilador específico para la arquitectura de tu CPU. <a target="_blank" href="https://www.docker.com/get-started/">Instalar Docker</a>

- **Visual Studio Code** - Estoy usando Visual Studio Code como mi editor de código actualmente, y todo el material en la guía asume que esto es lo que estás usando. Si tienes una preferencia diferente necesitarás adaptar algunas partes de esta guía para lograr los mismos resultados. <a target="_blank" href="https://code.visualstudio.com/">Instalar Visual Studio Code</a>

## Configurar el Entorno de Desarrollo

Empecemos configurando tu entorno de desarrollo usando <a target="_blank" href="https://www.docker.com">Docker</a>. Esto te permitirá crear un contenedor con todas las herramientas que necesitas dentro sin tener que modificar las configuraciones de tu sistema. Además, también facilitará simplemente eliminar el contenedor y reconstruirlo cuando lo necesites en lugar de mantener versiones antiguas de software que no requieres diariamente en tu máquina personal.

{{< alert >}}
Nota: Si solo quieres clonar un repositorio con el esqueleto final siéntete libre de clonar <a target="_blank" href="https://github.com/nunocoracao/homepage-hugo-congo">este repositorio</a> y saltar a la sección de despliegue


{{</ alert >}}

Proporcionaré dos formas de configurar tu entorno de desarrollo, siéntete libre de elegir la que prefieras o probar ambas para explorar las diferencias entre ellas. Ambas opciones dependen de un `Dockerfile` construido por mí que usa `klakegg/hugo:0.93.2-ubuntu` como imagen base, aunque esta no es la imagen oficial de Hugo (ya que no hay una en este momento) es la <a target="_blank" href="https://gohugo.io/getting-started/installing/#docker">recomendada en su sitio web</a>.

### Usando Docker

Para iniciar un Dev Environment simplemente abre Docker Dashboard y selecciona la pestaña "Dev Environments" a la izquierda. Si no tienes ningún entorno de desarrollo configurado selecciona "Create New Environment", de lo contrario usa el botón en la esquina superior derecha "Create". Procede al paso de configuración.

<img src="/posts/202206-homepage-guide/devenvs/step2.webp"/>


Aquí elige la opción "Existing Git repo" y usa la siguiente URL de GitHub:

```
https://github.com/nunocoracao/homepage-kickstart
```

{{< alert >}}
**Nota:** Si clonas el repositorio localmente también puedes comenzar desde la carpeta local
{{< /alert >}}

Una vez que el contenedor esté ejecutándose deberías ver algo similar a las imágenes de abajo.

<img style="float: left" width="50%" src="/posts/202206-homepage-guide/devenvs/step4.webp"/>
<img style="float: left" width="50%" src="/posts/202206-homepage-guide/devenvs/step5.webp"/>

En ambas situaciones, podrás ver y hacer clic en el botón "Open in VSCode" que abrirá el editor y te permitirá comenzar a trabajar. Desde allí abre una terminal y procede a [crear el esqueleto del sitio](#crear-el-esqueleto-del-sitio)

### Usando Visual Studio Code

Comienza clonando el repositorio de GitHub con las configuraciones del entorno de desarrollo.

```
git clone https://github.com/nunocoracao/homepage-kickstart
```

Este método requiere la instalación de una extensión extra de VSCode para poder iniciar los contenedores. Por favor busca **Remote - Containers** e instala la extensión para continuar esta guía.

Después de instalar exitosamente la extensión, abre tu carpeta de código fuente en VSCode y abre el panel de la extensión "Remote - Containers" a la izquierda. Selecciona "Open Folder in Container" para iniciar un contenedor con el entorno de desarrollo.

<img src="/posts/202206-homepage-guide/setup/extension.webp"/>

Espera un par de minutos mientras se construye la imagen. Docker está creando una imagen con todo el software requerido para el desarrollo del sitio web. Esto solo sucederá la primera vez que inicies el entorno.

<img src="/posts/202206-homepage-guide/setup/imagebuild.webp"/>


Una vez que la imagen está construida, VSCode iniciará el contenedor y colocará tu entorno de trabajo dentro de él (información disponible en la esquina inferior izquierda de la ventana). Ahora tienes un entorno de desarrollo con Go, Hugo, Firebase CLI, y todas las herramientas que necesitarás para esta guía. Solo abre una nueva terminal y estarás listo para comenzar a crear tu sitio.

<img src="/posts/202206-homepage-guide/setup/newterminal.webp"/>

### ...pero realmente quiero ejecutar todo localmente

Si prefieres o necesitas ejecutar tu entorno localmente sigue las guías de abajo para instalar todo lo que necesitas para tu configuración:

- **Homebrew** - <a target="_blank" href="https://brew.sh/">Instalar homebrew</a>
- **Hugo** - <a target="_blank" href="https://gohugo.io/getting-started/installing/">Instalar Hugo</a>
- **Node.js y NPM** - <a target="_blank" href="https://nodejs.org/en/download/">Instalar node.js y NPM</a> (más fácil para instalar Firebase CLI)
- **Firebase CLI** - <a target="_blank" href="https://firebase.google.com/docs/cli#install_the_firebase_cli">Instalar Firebase CLI</a>

## Crear el Esqueleto del Sitio

Ahora que tenemos un entorno de desarrollo funcionando, el primer paso es crear la versión base de tu sitio web. Para esto usemos **Hugo** para generar la plantilla de carpetas y archivos de configuración que necesitamos ejecutando el siguiente comando (el parámetro `--force` es requerido para ejecutar Hugo en un directorio no vacío):

```
hugo new site . --force
```
Esto debería haber creado un conjunto de carpetas dentro de tu espacio de trabajo de las que no necesitas preocuparte por ahora. El siguiente paso es instalar un tema para Hugo. Elegí <a target="_blank" href="https://github.com/jpanther/congo">Congo</a> ya que tenía todas las características que requería para mi sitio web y parecía fácil de cambiar si alguna vez lo necesitara. Si quieres probar un tema diferente hay varios disponibles en la documentación de Hugo, cada uno con documentación y ejemplos.

Instala Congo usando git submodules ejecutando el siguiente comando:

```
git submodule add -b stable https://github.com/jpanther/congo.git themes/congo
```

Ahora necesitamos hacer algunos cambios a la estructura de directorios y archivos para que Congo pueda funcionar correctamente. No entraré en los detalles de lo que está sucediendo en esta guía (puedes consultar la documentación de Congo si quieres aprender más), lo principal es que estamos creando y configurando una carpeta en <code>config/_default/</code> que contendrá todos los archivos de configuración importantes para Hugo y Congo.

Por favor ejecuta los siguientes comandos en orden:

```
mkdir -p config/_default
rm config.toml
cp themes/congo/config/_default/*.toml config/_default/
echo 'theme = "congo"' | cat - config/_default/config.toml > temp && mv temp config/_default/config.toml
```

Felicitaciones, deberías tener tu sitio funcionando ahora. Vamos a probarlo ejecutando el servidor de depuración de Hugo:

```
hugo server -D
```

Por favor abre tu navegador favorito y navega a <a target="_blank" href="http://localhost:1313">localhost:1313</a> para ver tu página.

<img src="/posts/202206-homepage-guide/theme/vanilla.webp"/>

Deberías ver algo similar a la imagen de arriba. No se ve tan emocionante, ¿verdad? Configuremos el tema en las siguientes secciones y aprendamos cómo crear tu primer artículo.


## Configurar el Tema

Ahora cubriré cómo cambiar la apariencia de tu sitio web, agregar información personal y activar el modo oscuro (también conocido como la característica más importante en cualquier sitio web hoy en día).

{{< alert >}}
Una nota, estoy cubriendo una configuración muy simple para este tema, por favor consulta la <a target="_blank" href="https://jpanther.github.io/congo/docs/">documentación del tema Congo</a> para entender todo lo que puedes hacer con este tema.
{{< /alert >}}

### Foto de perfil

Comencemos agregando una foto de perfil a tu sitio. Crea una carpeta llamada "assets" en la raíz de tu proyecto. Elige una foto de perfil y colócala dentro de la carpeta assets. El resto de la guía asumirá que la imagen final se llama "profile.webp", así que por favor renombra tu imagen o tenlo en cuenta al configurar algunos de los otros archivos.

<figure>
 	<img src="/posts/202206-homepage-guide/configure/profile.webp"/>
  <figcaption>Si aún necesitas tomar una foto increíble adecuada para esto, siéntete libre de descargar esta para continuar con el tutorial.</figcaption>
</figure>



### Archivos de Configuración

Abramos un par de archivos de configuración y comencemos a actualizarlos. Todos los archivos que vamos a cambiar están dentro de la carpeta <code>config/_default/</code>.

#### config.toml

Descomenta el parámetro <code>baseURL</code> y reemplázalo con el dominio final de tu sitio web. Este valor se usará para crear el archivo robots.txt para que cualquier motor de búsqueda pueda rastrear e indexar exitosamente tu sitio web.

<img src="/posts/202206-homepage-guide/configure/config.webp"/>

{{< alert >}}
Nota: si quieres configurar Google Analytics por favor agrega la siguiente línea con tu id a este archivo `googleAnalytics = "G-XXXXXX"`

{{</ alert >}}

#### languages.en.toml

Este archivo controlará la información principal del sitio web y del autor de la página (tú). Reemplaza el <code>title</code> y <code>description</code> por los que quieras para tu página, estos valores controlarán las etiquetas HTML de título y descripción.

Dentro del bloque <code>[author]</code> puedes actualizar los detalles que deseas destacar en tu perfil. Lo mínimo sería <code>name</code>, <code>image</code>, <code>headline</code>, y <code>links</code>. Para el parámetro <code>links</code> no olvides descomentar la última línea del archivo ya que es un array json. Actualiza cada entrada con tus enlaces personales.

<img src="/posts/202206-homepage-guide/configure/languages.webp"/>

#### params.toml

Este archivo define gran parte del comportamiento general en todo el framework. Para este tutorial cambié algunos de los valores generales y uno para la página de inicio, si quieres aprender más sobre las otras configuraciones disponibles por favor consulta la <a target="_blank" href="https://jpanther.github.io/congo/docs/">documentación del tema Congo</a>.

He cambiado <code>colorScheme</code> a "ocean" que cambia el tema global de la UI. Congo define una paleta de tres colores que se usa en todo el tema. Los valores válidos son congo (predeterminado), avocado, ocean, fire, y slate. Aunque estos son los esquemas predeterminados, también puedes crear los tuyos propios. Consulta la documentación principal del tema para aprender cómo.

Activé <code>showAppearanceSwitcher</code> para habilitar el interruptor de modo claro/oscuro. Activé <code>enableSearch</code> que indexa todas las publicaciones futuras cada vez que construyes el sitio y proporciona una función de búsqueda simple. También cambié el valor de <code>layout</code>, dentro de <code>[homepage]</code>, a "profile" que cambia la forma en que se renderiza la página de inicio. Finalmente, el último valor interesante aquí es <code>showRecent</code>, que cuando se activa muestra las publicaciones recientes en la página de inicio.

<img src="/posts/202206-homepage-guide/configure/params.webp"/>

### Final

Veamos cómo se ve, ejecuta Hugo nuevamente:

```
hugo server -D
```

Y navega a <a target="_blank" href="http://localhost:1313">localhost:1313</a> deberías ver algo similar a la página de abajo.

<img class="thumbnailshadow" src="/posts/202206-homepage-guide/configure/final.webp"/>

Felicitaciones se ve genial, aprendamos cómo generar tus primeros artículos.

## Cómo generar artículos

Hugo proporciona algunas herramientas para generar tus artículos (archivos <a target="_blank" href="https://www.markdownguide.org/">markdown</a>) con un conjunto base de etiquetas ya incluidas. Ejecuta el siguiente comando para crear tu primera publicación

```
hugo new posts/my-first-post.md
```

reemplaza el contenido del archivo con lo siguiente:

```
---
title: "Mi Publicación Publicada"
date: 2022-06-19T20:10:29Z
draft: false
categories: ["publicado", "prueba"]
tags: ["primero", "increíble"]
---

Esta es mi primera publicación de blog
```

Esto acaba de crear tu primera publicación de blog. Hemos agregado un par de categorías y etiquetas, que serán indexadas por Hugo durante el tiempo de construcción. Estas etiquetas se usarán para crear las secciones de Categorías y Etiquetas del sitio web automáticamente para ti. Nota que he cambiado el <code>draft</code> a false para simular una publicación publicada.

Ejecuta el siguiente comando para crear tu segunda publicación

```
hugo new posts/my-draft-post.md
```
y reemplaza el contenido de ese archivo con lo siguiente:

```markdown
---
title: "Mi Publicación Borrador"
date: 2022-06-19T20:20:39Z
draft: true
categories: ["borrador", "prueba"]
tags: ["segundo", "increíble"]
---

Esta es mi segunda publicación de blog
```
Para la segunda publicación, dejé el parámetro <code>draft</code> en true para simular una publicación borrador.

Hugo automáticamente oculta las publicaciones borrador de la generación final del sitio. Puedes seguir trabajando en artículos dejando la etiqueta draft en true y serán ignorados por el motor. Si quieres ejecutar en modo DEBUG solo usa el comando:

```
hugo server -D
```

Si vas a las publicaciones en el sitio deberías poder ver ambas entradas. Si luego ejecutas el servidor en modo normal los artículos borrador desaparecerán. Puedes usar el comando de abajo para hacerlo:


```
hugo server
```

Puedes usar este comando para probar la versión final del sitio web o un artículo antes de generar la construcción final. Cuando estés listo solo usa el comando 'Hugo' para generar el sitio web final dentro de la carpeta /public.

```
hugo
```

Todos los archivos están escritos en <a target="_blank" href="https://en.wikipedia.org/wiki/Markdown">Markdown</a> que Hugo luego usa para generar las páginas finales. No te enseñaré cómo escribir archivos markdown en esta guía pero puedo recomendarte este tutorial de <a target="_blank" href="https://www.markdownguide.org/getting-started/">"primeros pasos"</a> y esta <a target="_blank" href="https://www.markdownguide.org/cheat-sheet/">"hoja de trucos"</a> para comenzar.

## Despliegue

Ok, has configurado tu sitio web y creado un par de artículos, pero aún necesitamos desplegarlo en algún lugar. Como mencioné antes elegí Firebase para esta guía, aunque sé que ofrece mucho más que solo un simple servicio de alojamiento me permite alojar mi sitio gratis sin mucha complicación.

### Crear Proyecto Firebase

Empecemos yendo a <a target="_blank" href="https://firebase.google.com">https://firebase.google.com</a> y creando una cuenta. Una vez hecho eso puedes crear un proyecto gratis. El proceso debería ser sencillo y cuando termines deberías estar en el panel de control del proyecto de Firebase.

### Configurar Firebase

Ahora puedes volver a tu entorno que ya tiene las herramientas Firebase CLI instaladas y listas para usar. Empecemos autenticándonos usando:

```
firebase login
```
Una vez que hayas iniciado sesión exitosamente necesitas iniciar las configuraciones del proyecto para firebase. Para eso por favor usa:

```
firebase init
```

La herramienta te ofrecerá una amplia variedad de diferentes opciones para configurar tu proyecto Firebase. Por ahora solo queremos configurar el hosting. Si estás usando GitHub, podrías considerar configurar los despliegues con GitHub actions que pueden construir y desplegar automáticamente tu sitio cada vez que hay un push a una rama específica o un pull request fusionado.

<img src="/posts/202206-homepage-guide/deploy/firebasehosting.webp"/>

Elige el proyecto Firebase creado antes como destino de alojamiento. Y selecciona las configuraciones que deseas para el proceso de despliegue. La importante aquí es la carpeta donde se colocarán los archivos finales para el servidor y esta es la carpeta <code>public</code>. Para los otros parámetros puedes experimentar con lo que mejor se adapte a tu caso de uso, la imagen de abajo te muestra lo que elegí (*Nota: para este tutorial no configuré GitHub actions pero lo estoy usando en mi configuración real*).

<img src="/posts/202206-homepage-guide/deploy/firebaseconfig.webp"/>

### Despliegue

Ok, ahora para el largo y aburrido proceso de despliegue… ¡es broma! Una vez que estés listo y tengas todos tus archivos generados por el comando <code>hugo</code> en la carpeta public solo usa el siguiente comando para desplegar:

```
firebase deploy
```

<img src="/posts/202206-homepage-guide/deploy/firebasedeploy.webp"/>

El proceso debería tomar un par de segundos y ahí lo tienes, tu sitio está desplegado. La línea final de la herramienta CLI te dará una URL para verlo por ti mismo, de lo contrario puedes explorar la sección de alojamiento de tu panel de Firebase que tendrá más información sobre el despliegue.

<img src="/posts/202206-homepage-guide/deploy/final.webp"/>

## Conclusión

A estas alturas deberías tener una versión simple de tu sitio web que puedes configurar según tus necesidades. La principal ventaja de esta solución es que es flexible y extensible para una variedad de diferentes necesidades especialmente si te tomas el tiempo de explorar el catálogo de temas de Hugo. Es verdad que podría requerir algo de programación para implementar cosas complejas pero supongo que esto resuelve el problema para casi todos.

Sobre todo, es una solución completamente gratuita si estás buscando comenzar y no puedes (o no quieres) gastar dinero. Espero que esta guía te ayude, siéntete libre de compartirla con tu red y darme retroalimentación para que pueda mejorarla con el tiempo.

## Recursos

- <a target="_blank" href="https://github.com/nunocoracao/homepage-kickstart">Repositorio GitHub para entorno de desarrollo</a>
- <a target="_blank" href="https://github.com/nunocoracao/homepage-hugo-congo">Repositorio GitHub para configuración base de Hugo y Congo</a>
- <a target="_blank" href="https://github.com/nunocoracao/homepage-dockerimage">Repositorio GitHub para imagen base</a>
- <a target="_blank" href="https://hub.docker.com/r/nunocoracao/homepage-dockerimage">URL de imagen Docker Hub</a>
- <a target="_blank" href="https://gohugo.io/documentation/">Documentación de Hugo</a>
- <a target="_blank" href="https://github.com/jpanther/congo">Documentación de Congo</a>
- <a target="_blank" href="https://firebase.google.com/docs">Documentación de Firebase</a>
- <a target="_blank" href="https://www.markdownguide.org/">Guía de Markdown</a>
- <a target="_blank" href="https://www.markdownguide.org/getting-started/">Primeros Pasos con Markdown</a>
- <a target="_blank" href="https://www.markdownguide.org/cheat-sheet/">Hoja de Trucos de Markdown</a>
