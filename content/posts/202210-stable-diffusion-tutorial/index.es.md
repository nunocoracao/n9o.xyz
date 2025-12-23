---
title: "Cómo Ejecutar Stable Diffusion en Tu Laptop"
description: "En el último año, varios modelos de machine learning se han puesto a disposición del público para generar imágenes a partir de descripciones textuales. Este ha sido un desarrollo interesante en el espacio de la IA. Sin embargo, solo recientemente esta tecnología se ha vuelto disponible para que todos la prueben."
summary: "En el último año, varios modelos de machine learning se han puesto a disposición del público para generar imágenes a partir de descripciones textuales. Este ha sido un desarrollo interesante en el espacio de la IA. Sin embargo, solo recientemente esta tecnología se ha vuelto disponible para que todos la prueben."
categories: ["Tecnología","Tutorial"]
tags: ["IA","Stable Diffusion","Red Neuronal"]
#externalUrl: ""
date: 2022-10-06
draft: false
series: ["El Nuevo Hype de la IA"]
series_order: 3
---

En el último año, varios modelos de machine learning se han puesto a disposición del público para generar imágenes a partir de descripciones textuales. Este ha sido un desarrollo interesante en el espacio de la IA. Sin embargo, la mayoría de estos modelos han permanecido closed source por razones éticas válidas. Debido a esto, aunque puedes interactuar con ellos a través de alguna interfaz, estás limitado en la cantidad de cosas que puedes probar. Hasta ahora…

El más reciente de estos modelos es Stable Diffusion, un modelo de machine learning abierto desarrollado por <a href="https://stability.ai/" target="_blank">Stability AI</a> para generar imágenes digitales a partir de descripciones en lenguaje natural. Este modelo se ha vuelto bastante popular, principalmente porque fue el primero en ser open source.

Ya he jugado con <a href="https://openai.com/dall-e-2/" target="_blank">Dall-E</a> y <a href="https://www.midjourney.com/home/" target="_blank">Midjourney</a>, pero quería intentar ejecutar un modelo localmente y tener más libertad para experimentar. Logré instalar y ejecutar el modelo con éxito en mi M1 Pro y en mi escritorio Windows. Esta guía detalla los pasos que seguí para que todo funcionara en mi Mac.

## Notas Iniciales

Algunas notas antes de empezar. Probé varias guías en línea y no pude tener una experiencia fluida con ninguna de ellas. Tuve que probar numerosos repos, soluciones, etc. El objetivo principal de esta guía es proporcionar instrucciones sobre cómo ejecutar Stable Diffusion en un M1, que es donde encontré más desafíos. Instalar en Windows fue mucho más directo.

Dicho esto, el repo que terminé usando tiene guías detalladas para todas las plataformas: <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_WINDOWS.md" target="_blank">Windows</a>, <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md" target="_blank">Mac</a> y <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_LINUX.md" target="_blank">Linux</a>. No dudes en usar cualquiera de esas si estás usando otra plataforma o si esta guía no te funciona en Mac.

{{< alert >}}
*Nota: No probé la guía Mac anterior, ya que cuando encontré este repo ya había descubierto la mayoría de los workarounds necesarios para que el modelo funcionara.*
{{< /alert >}}

## Obtener el Código

Empecemos obteniendo el código. Estoy usando el <a href="https://github.com/invoke-ai/InvokeAI" target="_blank">fork de InvokeAI de Stable Diffusion</a>, que forkeé <a href="https://github.com/nunocoracao/InvokeAI" target="_blank">aquí</a>. Eres bienvenido a usar el repo original de InvokeAI si lo prefieres. Voy a usar mi fork para asegurar que la guía permanezca actualizada y funcionando a través del tiempo.

Para comenzar, clona el repo en tu máquina local.

```bash
git clone https://github.com/nunocoracao/InvokeAI
```

## Obtener el Modelo

Ahora necesitas obtener el modelo real que contiene los pesos para la red. Este es el resultado de ciclos masivos de entrenamiento con conjuntos de datos enormes con los que un usuario normal con hardware promedio no puede competir. El modelo no se distribuye con el código debido a su tamaño (alrededor de 7.5 GB) y para asegurar que los usuarios cumplan con una licencia.

Simplemente ve al <a href="https://huggingface.co/" target="_blank">sitio de Hugging Face</a> e inicia sesión, o crea una cuenta si no tienes una. Una vez configurado, haz clic <a href="https://huggingface.co/CompVis/stable-diffusion-v-1-4-original" target="_blank">aquí</a>, acepta los términos en el model card y descarga el archivo llamado `sd-v1-4-full-ema.ckpt`. Después de descargar el modelo, ve a la carpeta del código y colócalo en `models/ldm/stable-diffusion-v1/` con el nombre `model.ckpt`. La carpeta `stable-diffusion-v1` no existe y necesita ser creada.

{{< alert >}}
*Nota: hay otras variantes del modelo que puedes explorar, esta es la recomendada por la mayoría de los repos que he visto.*
{{< /alert >}}

## Configurar el Entorno

Con el código y el modelo listos, el siguiente paso es configurar el entorno local para ejecutar todo.

### Instalar Xcode

El primer paso es instalar Xcode. Xcode se puede instalar desde la App Store, o puedes descargarlo del sitio Developer de Apple.

```bash
xcode-select --install
```

### Instalar Conda

La mayoría de las soluciones que he visto usan <a href="https://docs.conda.io/projects/conda/en/latest/#" target="_blank">Conda</a> para gestionar los paquetes y entornos necesarios. La guía de instalación de Conda es muy clara, así que te aconsejo seguir las instrucciones <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation" target="_blank">aquí</a>.

```bash
conda
```

Si el proceso de instalación fue exitoso, deberías ver algo como la imagen de abajo.

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/conda_result.webp"/>

### Instalar Rust

Cuando seguía otras guías, siempre tenía problemas en la siguiente parte del proceso, construir los entornos. Después de muchos intentos, descubrí que me faltaba el compilador Rust.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Construir y Activar el Entorno

Ya casi llegamos. Ahora crearemos el entorno `ldm` y lo activaremos antes de empezar a generar imágenes.

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env create -f environment-mac.yml
```

Si tienes problemas en este paso y necesitas reconstruir el entorno:

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env update -f environment-mac.yml
```

*Si estás en un Mac Intel el comando debería ser:*
```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-64 conda env create -f environment-mac.yml
```

Ahora es momento de activar el entorno usando:

```bash
conda activate invokeai
```

El último paso es precargar los modelos usando el comando:

```bash
python scripts/preload_models.py
```

## Diviértete…

Ahora es momento de empezar a jugar con Stable Diffusion. Ejecuta:

```bash
python scripts/invoke.py --full_precision --web
```

Y abre tu navegador en `localhost:9090`

Deberías ver una interfaz Web como la de abajo.

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/webui_new.webp"/>

Elige tu primer prompt y prueba el modelo, todas las imágenes se guardarán en `output/img-samples`. Explora los varios modelos y configuraciones posibles. He estado ejecutando el mío con imágenes de `512x512`, alrededor de `100` ciclos para las imágenes finales (`5` para las variantes iniciales), y config scale en `7.5`. Como sampler prefiero los resultados usando `DDIM`.

## Algunos Ejemplos

Aquí hay algunos ejemplos de imágenes de mis ejecuciones iniciales del modelo. Dejo aquí algunos enlaces para obtener ideas sobre cómo empezar a diseñar `prompts`.

- <a href="https://decentralizedcreator.com/10-best-text-to-image-prompts-for-ai-art-generator-disco-diffusion-a-visual-treat-inside/" target="_blank">10 Mejores Prompts Text-to-Image para Generador de Arte IA</a>
- <a href="https://prompthero.com/" target="_blank">Prompthero</a>

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000008.2887160172.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000023.4136023390.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000024.2854274560.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000028.4255152621.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000031.1604394908.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000036.1662843642.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000043.2287582219.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000045.234321637.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000057.107659121.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000058.157499426.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000063.2383238266.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000067.2841883613.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000102.4159217524.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000116.829934269.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000145.2404672998.webp"/>
  </div>
  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000149.811067720.webp"/>
  </div>
</div>

## Aviso y Otras Opciones

Hay un montón de opciones para ejecutar el modelo Stable Diffusion, algunas locales, algunas en la nube (ej. Google Colab), así que no te frustres si quieres probar esto pero no tienes acceso a una máquina que pueda ejecutarlo. Probablemente hay otras soluciones que puedes usar.

Etiquétame en redes sociales con tus creaciones si logras que esto funcione:

<div style="display: flex; flex-wrap: wrap;">
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://twitter.com/nunocoracao" target="_blank" >}}
    {{< icon "twitter" >}}&nbsp;
    Sígueme en Twitter
    {{< /button >}}
  </div>
  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://www.instagram.com/nunocoracao/" target="_blank" >}}
    {{< icon "instagram" >}}&nbsp;
    Sígueme en Instagram
    {{< /button >}}
  </div>
</div>
