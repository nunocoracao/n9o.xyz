---
title: "Docker Desktop 4.18"
summary: "Siempre estamos buscando formas de mejorar tu experiencia con Docker, ya sea que estés usando una integración, extensión o directamente en el producto. Docker Desktop 4.18 se enfoca en mejoras en la línea de comandos y en Docker Desktop."
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-18/"
date: 2023-04-05
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Siempre estamos buscando formas de mejorar tu experiencia con Docker, ya sea que estés usando una integración, extensión o directamente en el producto. Docker Desktop 4.18 se enfoca en mejoras en la línea de comandos y en Docker Desktop.

Sigue leyendo para conocer las nuevas características CLI en Docker Scout, y descubre Docker init, una emocionante característica CLI Beta para ayudarte a agregar rápidamente Docker a cualquier proyecto. También revisamos nuevas características para ayudarte a comenzar con Docker más rápido: Container File Explorer, instalación macOS sin admin y una nueva característica experimental en Docker Compose.

## Docker Scout CLI
En Docker Desktop 4.17, introdujimos Docker Scout, una herramienta que proporciona visibilidad sobre vulnerabilidades de imágenes y recomendaciones para remediación rápida. Nos complace anunciar el lanzamiento de varias nuevas características en la línea de comandos de Docker Scout, que viene con Docker Desktop 4.18. Estas actualizaciones llegan después de recibir una cantidad abrumadora de comentarios de la comunidad.

El lanzamiento 4.18 de Docker Scout incluye una vista rápida de vulnerabilidades, recomendaciones de imágenes directamente en la línea de comandos, guía de remediación mejorada con utilización de SBOM de BuildKit, y una característica de vista previa comparando imágenes (imagina usar diff, pero para imágenes container).

## Quickview
Supongamos que has creado una nueva imagen container y te gustaría evaluar su postura de seguridad. Ahora puedes ejecutar docker scout quickview para una visión de seguridad instantánea y de alto nivel de tu imagen. Si se encuentran problemas, Docker Scout te guiará sobre qué hacer después.

## Recomendaciones por línea de comandos
Si has usado previamente docker scout cves para entender qué CVEs existen en tus imágenes, puede que te hayas preguntado qué curso de acción tomar después. Con el nuevo comando docker scout recommendations, recibes una lista de recomendaciones que sugieren directamente actualizaciones disponibles para la imagen base.

El comando docker scout recommendations analiza la imagen y muestra recomendaciones para actualizar la imagen base, junto con una lista de beneficios, incluyendo oportunidades para reducir vulnerabilidades o cómo lograr tamaños de imagen más pequeños.

## Procedencia BuildKit y atestaciones SBOM
En enero de 2023, BuildKit fue extendido para soportar la construcción de imágenes con atestaciones. Estas imágenes ahora pueden usar la línea de comandos docker scout para procesar esta información y determinar los próximos pasos relevantes. Podemos soportar esto porque la herramienta de línea de comandos docker scout sabe exactamente con qué imagen base construiste y puede proporcionar recomendaciones más precisas.

Si una imagen fue construida y subida con una atestación SBOM adjunta, docker scout lee la información del paquete de la atestación SBOM en lugar de crear un nuevo SBOM local.

Para aprender cómo construir imágenes con atestaciones usando BuildKit, lee "Generating SBOMs for Your Image with BuildKit."

## Comparar imágenes
Nota: Esta es una característica experimental de Docker Scout y puede cambiar y evolucionar con el tiempo.

Documentar retrospectivamente los cambios hechos para abordar un problema de seguridad después de completar una remediación de vulnerabilidad se considera una buena práctica. Docker Desktop 4.18 introduce una vista previa temprana de comparación de imágenes.

Esta característica resalta las diferencias de vulnerabilidades entre dos imágenes y cómo se comparan los paquetes. Estos detalles incluyen la versión del paquete, variables de entorno en cada imagen y más. Adicionalmente, la salida de la línea de comandos puede configurarse en formato markdown. Esta información puede luego usarse para generar vistas previas diff en pull requests a través de GitHub Actions.

Nos encantaría saber qué escenarios podrías imaginar usando esta característica diff. Puedes hacerlo abriendo Docker Desktop, navegando a la pestaña Images y seleccionando "Dar feedback".

Lee la documentación para saber más sobre estas características.

## Container File Explorer
Otra característica que nos complace anunciar es el lanzamiento GA de Container File Explorer. Cuando necesitas revisar o reemplazar rápidamente archivos dentro de un container, Container File Explorer te ayudará a hacer esto — y mucho más — directamente desde la interfaz de Docker Desktop.

No necesitarás recordar largos comandos CLI, manipular largos parámetros de ruta en el comando docker cp, o frustrarte porque tu container no tiene shell para revisar los archivos. Container File Explorer proporciona una interfaz simple que te permite:

- Revisar un sistema de archivos container
- Copiar archivos y carpetas entre host y containers
- Arrastrar y soltar fácilmente archivos a un container
- Editar rápidamente archivos con resaltado de sintaxis
- Eliminar archivos

Con Container File Explorer, puedes ver los archivos de tus containers en cualquier estado (detenido/corriendo/pausado/…) y para cualquier tipo de container, incluyendo slim-containers/slim-images (containers sin shell). Abre el dashboard, ve a la pestaña Containers, abre el menú de acciones del container y revisa tus archivos:

## Instalación sin admin en macOS
Hemos ajustado nuestro flujo de instalación macOS para hacer súper fácil para los desarrolladores instalar Docker Desktop sin otorgarles privilegios de admin. Algunos desarrolladores trabajan en entornos con requisitos de seguridad elevados donde el acceso admin local puede estar prohibido en sus máquinas. Queríamos asegurarnos de que los usuarios en estos entornos puedan optar por no usar la funcionalidad de Docker Desktop que requiere privilegios de admin.

El flujo de instalación predeterminado en macOS todavía pedirá privilegios de admin, ya que creemos que esto nos permite proporcionar una experiencia optimizada para la gran mayoría de casos de uso de desarrolladores. Al otorgar privilegios de admin, Docker Desktop instala automáticamente las herramientas CLI de Docker, permitiendo que las bibliotecas de terceros se integren sin problemas con Docker (habilitando el socket Docker predeterminado) y permitiendo a los usuarios enlazar a puertos privilegiados entre 1 y 1024.

Si quieres cambiar la configuración que configuraste en la instalación, puedes hacerlo fácilmente en la pestaña Avanzado de la Configuración de Docker Desktop.

## Docker init (Beta)
Otra característica emocionante que estamos lanzando en Beta es docker init. Este es un nuevo comando CLI que te permite agregar rápidamente Docker a tu proyecto creando automáticamente los recursos requeridos: Dockerfiles, archivos Compose y .dockerignore. Usando esta característica, puedes fácilmente actualizar proyectos existentes para ejecutarlos usando containers o configurar nuevos proyectos incluso si no estás familiarizado con Docker.

Puedes probar docker init actualizando a la última versión de Docker Desktop (4.18.0) y escribiendo docker init en la línea de comandos mientras estás dentro de una carpeta de proyecto objetivo. docker init creará todos los archivos requeridos para ejecutar tu proyecto en Docker.

Consulta la documentación de docker init para saber más.

La versión Beta de docker init viene con soporte Go, y el equipo de Docker ya está trabajando en agregar más lenguajes y frameworks, incluyendo Node.js, Python, Java, Rust y .Net, más otras características en los próximos meses. Si hay un lenguaje o framework específico que te gustaría que soportáramos, háznoslo saber. Envía otros comentarios y sugerencias en nuestro roadmap público.

Nota: Por favor ten en cuenta que docker init no debe confundirse con el ejecutable docker-init usado internamente, que es invocado por Docker cuando se utiliza el flag –init con el comando docker run. Consulta la documentación para saber más.

## Docker Compose File Watch (Experimental)
¡Docker Compose tiene un nuevo truco! Docker Compose File Watch está disponible ahora como característica Experimental para mantener automáticamente todos tus containers de servicio actualizados mientras trabajas.

(...)

Una vez configurado, el nuevo comando docker compose alpha watch comenzará a monitorear ediciones de archivos en tu proyecto:

En un cambio a ./web/App.jsx, por ejemplo, Compose lo sincronizará automáticamente a /src/web/App.jsx dentro del container.
Mientras tanto, si modificas package.json (como al instalar un nuevo paquete npm), Compose reconstruirá la imagen y reemplazará el servicio existente con una versión actualizada.
El modo Compose File Watch es solo el comienzo. Con casi 100 commits desde el último lanzamiento de Docker Compose, hemos corregido bugs y hecho muchas mejoras de calidad de vida. (¡Un agradecimiento especial a todos nuestros recientes contribuyentes por primera vez!)

Estamos emocionados por Docker Compose File Watch y estamos trabajando activamente en la mecánica subyacente y el formato de configuración.

## Conclusión
Eso es todo para nuestra actualización Docker Desktop 4.18. Este lanzamiento incluye muchas características nuevas y geniales, ¡incluyendo algunas que puedes ayudar a dar forma! También actualizamos el Docker Engine para abordar algunos CVEs. Como siempre, nos encanta escuchar tu feedback. Por favor deja cualquier feedback en nuestro roadmap GitHub público y dinos qué más te gustaría ver.

Revisa las notas de lanzamiento para un desglose completo de las novedades en Docker Desktop 4.18.



{{< alert >}}
**Nota:** este post fue originalmente publicado externamente, por favor ve al [blog de Docker](https://www.docker.com/blog/docker-desktop-4-18/) para leer el post completo
{{< /alert >}}
