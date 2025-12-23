---
title: "Docker Desktop 4.23"
summary: "Docker Desktop 4.23 ya está disponible e incluye numerosas mejoras, incluyendo soporte para ASP.NET Core en Docker Init, Verificación de Integridad de Configuración para alertar sobre cualquier cambio de configuración que requiera atención, y gestión de identidad entre dominios."
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-23/"
date: 2023-09-12
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Docker Desktop 4.23 ya está disponible e incluye numerosas mejoras, incluyendo soporte para ASP.NET Core en Docker Init, Verificación de Integridad de Configuración para alertar sobre cualquier cambio de configuración que requiera atención, y gestión de identidad entre dominios. Este lanzamiento también mejora la Búsqueda Rápida, permitiendo buscar a través de contenedores, apps, Docker Hub, Docs y cualquier volumen, y realizar acciones rápidas (iniciar/detener/eliminar). VirtioFS ahora está configurado por defecto para proporcionar mejoras de rendimiento a los usuarios de Mac. Con el lanzamiento de Docker Desktop 4.23, los usuarios de Mac también verán un aumento en el rendimiento de red usando conexiones de red tradicionales.

En este post, profundizamos en las novedades y actualizaciones del último lanzamiento de Docker Desktop.

## ASP.NET Core con Docker Init
Estamos emocionados de anunciar el soporte añadido para ASP.NET Core. Ya seas nuevo en Docker o un profesional experimentado, Docker Init ahora simplifica la Dockerización para tus proyectos ASP.NET Core. Con un simple comando docker init en la carpeta de tu proyecto y la última versión de Docker Desktop, observa cómo Docker Init genera Dockerfiles personalizados, archivos Compose y archivos .dockerignore a medida.

Específicamente para ASP.NET Core, también mejoramos el soporte y comentarios en el Dockerfile para builds multi-arquitectura. Este avance ayudará a los usuarios a gestionar el compartir sus imágenes entre diferentes arquitecturas de CPU y simplificar deployments en proveedores cloud como Azure, AWS y GCP. Crea imágenes que se adaptan a varias arquitecturas, aumentando la flexibilidad y eficiencia en deployments cloud.

Comienza asegurándote de tener la última versión de Docker Desktop. Luego, ejecuta docker init en el directorio de tu proyecto a través de la línea de comandos. ¡Deja que Docker Init haga el trabajo pesado, permitiéndote concentrarte en tu tarea principal — crear aplicaciones excepcionales!

## Verificación de Integridad de Configuración
Asegúrate de que Docker Desktop funcione sin problemas con nuestra nueva Verificación de Integridad de Configuración. Esto te permite seguir usando múltiples aplicaciones y herramientas locales, haciendo a veces los cambios de configuración sin complicaciones. Esta actualización detecta automáticamente y alerta sobre cualquier cambio de configuración, solicitando un simple clic para restablecer las configuraciones de Docker Desktop y asegurar un desarrollo ininterrumpido.


## Gestión de identidad entre dominios
La gestión de acceso de usuarios para Docker se ha vuelto más poderosa. SCIM ayuda a aprovisionar o desaprovisionar usuarios automáticamente, y el mapeo de roles de grupo ahora es compatible para que puedas organizar tus equipos y su acceso en consecuencia:

Puedes asignar roles a miembros en tu organización en el IdP. Para configurar un rol, puedes usar atributos opcionales a nivel de usuario para la persona a la que quieres asignar un rol.
También puedes establecer una organización y equipo para sobrescribir los valores de aprovisionamiento predeterminados establecidos por la conexión SSO.
La siguiente tabla lista los atributos opcionales a nivel de usuario soportados.

## Mejoras en la Búsqueda Rápida
Empoderando a los desarrolladores con acceso fluido a recursos esenciales cuando los necesitan, nuestra renovada función de Búsqueda Rápida ha recibido mejoras significativas. Ahora, los usuarios pueden localizar sin esfuerzo:

Contenedores y apps Compose: Encuentra fácilmente cualquier contenedor o app Compose que resida en tu sistema local. Además, obtén acceso rápido a variables de entorno y realiza acciones esenciales como iniciarlos, detenerlos o eliminarlos.
Imágenes de Docker Hub: Ya sean imágenes públicas de Docker Hub, locales o de repositorios remotos, la Búsqueda Rápida proporcionará resultados rápidos y relevantes.
Extensiones: Descubre más sobre extensiones específicas y simplifica la instalación con un solo clic.
Volúmenes: Navega sin esfuerzo a través de tus volúmenes y obtén información sobre los contenedores asociados.
Documentación: Accede instantáneamente a asistencia invaluable desde la documentación oficial de Docker, todo directamente desde Docker Desktop.
La Búsqueda Rápida mejorada es tu herramienta definitiva para el descubrimiento y gestión de recursos, ofreciendo comodidad incomparable para desarrolladores.

## Estandarizando el compartir archivos de alto rendimiento con VirtioFS para usuarios Mac
Docker Desktop 4.23 ahora utiliza por defecto VirtioFS en macOS 12.5+ como estándar para ofrecer ganancias de rendimiento sustanciales al compartir archivos con contenedores a través de docker run -v o bind mounts en Compose YAML. VirtioFS minimiza la sobrecarga de transferencia de archivos al permitir que los contenedores accedan a archivos sin montajes de volúmenes ni comparticiones de red.

Omitir los protocolos de transferencia de archivos de red también lleva a transferencias de archivos más rápidas. Medimos mejoras de rendimiento, disminuyendo el tiempo de transferencia de archivos de 7:13.21s a 1:4.4s — un aumento de velocidad del 85,15%. Queremos notar que la mejora medida depende del tamaño del archivo, qué otras apps están ejecutándose y el hardware del computador.

## Mejoras de velocidad de red de Docker Desktop para usuarios Mac
Docker Desktop 4.23 viene con rendimiento de red mejorado para usuarios Mac. Ahora, cuando un contenedor requiere una conexión de red tradicional, los usuarios experimentarán mayor rendimiento de red de estas formas:

Acceso a puertos expuestos ~10x más rápido
Transmission Control Protocol (TCP) ~1,5x – 2x más rápido
¡No se requiere ninguna acción del usuario para experimentar estos beneficios — todos los usuarios Mac actualizados a 4.23 ahora tendrán red más rápida!

## Conclusión
Actualiza ahora para explorar las novedades en el lanzamiento 4.23 de Docker Desktop. ¿Tienes comentarios? Deja tus comentarios en nuestra hoja de ruta pública de GitHub y cuéntanos qué más te gustaría ver en próximos lanzamientos.

Más información
Lee las Notas de Lanzamiento de Docker Desktop.
Obtén el último lanzamiento de Docker Desktop.
¿Tienes preguntas? La comunidad Docker está aquí para ayudar.
¿Nuevo en Docker? Comienza.


{{< alert >}}
**Nota:** este post fue publicado originalmente externamente, por favor ve al [blog de Docker](https://www.docker.com/blog/docker-desktop-4-23/) para leer el post completo
{{< /alert >}}

