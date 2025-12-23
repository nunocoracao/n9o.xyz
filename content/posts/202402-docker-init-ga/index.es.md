---
title: "Simplifica la Dockerización con Docker Init GA"
summary: "Inicializa Dockerfiles y archivos Compose con un solo comando CLI"
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/"
date: 2024-02-06
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---


En mayo de 2023, Docker anunció el lanzamiento beta de docker init, una nueva herramienta de interfaz de línea de comandos (CLI) en Docker Desktop diseñada para simplificar el proceso de configuración de Docker para varios tipos de aplicaciones y ayudar a los usuarios a containerizar sus proyectos existentes. Ahora estamos emocionados de anunciar la disponibilidad general de docker init, con soporte para múltiples lenguajes y stacks, haciendo más simple que nunca containerizar tus aplicaciones.


<img src="/posts/202402-docker-init-ga/feature.webp"/>


## ¿Qué es docker init?
Inicialmente lanzado en su forma beta en Docker 4.18, docker init ha experimentado varias mejoras. docker init es una utilidad de línea de comandos que ayuda en la inicialización de recursos Docker dentro de un proyecto. Genera automáticamente Dockerfiles, archivos Compose y archivos .dockerignore basándose en la naturaleza del proyecto, reduciendo significativamente el tiempo de configuración y la complejidad asociada con las configuraciones Docker.

El lanzamiento beta inicial de init venía solo con soporte para Go y proyectos genéricos. La última versión, disponible en Docker Desktop 4.27, soporta Go, Python, Node.js, Rust, ASP.NET, PHP y Java.

## Cómo usar docker init
Usar docker init es sencillo e involucra unos pocos pasos simples. Comienza navegando al directorio de tu proyecto donde quieres que se inicialicen los recursos Docker. En la terminal, ejecuta el comando docker init. Este comando inicia la herramienta y la prepara para analizar tu proyecto (Figura 1).


<img src="/posts/202402-docker-init-ga/img/img1.webp"/>


docker init escaneará tu proyecto y te pedirá que confirmes y elijas la plantilla que mejor se adapte a tu aplicación. Una vez que selecciones la plantilla, docker init pide información específica del proyecto, generando automáticamente los recursos Docker necesarios para tu proyecto (Figura 2).

<img src="/posts/202402-docker-init-ga/img/img2.webp"/>

Este paso incluye la creación de un Dockerfile y un archivo Compose adaptados al lenguaje y framework de tu elección, así como otros archivos relevantes. El último paso es ejecutar docker-compose up para iniciar tu proyecto recién containerizado.

## ¿Por qué usar docker init?
La herramienta docker init simplifica el proceso de dockerización, haciéndolo accesible incluso para quienes son nuevos en Docker. Elimina la necesidad de escribir manualmente Dockerfiles y otros archivos de configuración desde cero, ahorrando tiempo y reduciendo el potencial de errores. Con su enfoque basado en plantillas, docker init asegura que la configuración Docker esté optimizada para el tipo específico de aplicación en la que estás trabajando y que tu proyecto seguirá las mejores prácticas de la industria.

## Conclusión
La disponibilidad general de docker init ofrece una forma eficiente y fácil de usar para integrar Docker en tus proyectos. Ya seas un usuario experimentado de Docker o nuevo en la containerización, docker init está listo para mejorar tu flujo de trabajo de desarrollo.

{{< alert >}}
**Nota:** este post fue publicado originalmente externamente, por favor ve al [blog de Docker](https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/) para leer el post completo
{{< /alert >}}
