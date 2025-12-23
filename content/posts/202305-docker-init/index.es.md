---
title: "Docker Init"
summary: "Inicializa Dockerfiles y archivos Compose con un solo comando CLI"
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/"
date: 2023-05-11
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Docker ha revolucionado la forma en que los desarrolladores construyen, empaquetan y despliegan sus aplicaciones. Los contenedores Docker proporcionan un entorno de runtime ligero, portable y consistente que puede ejecutarse en cualquier infraestructura. Y ahora, el equipo de Docker ha desarrollado `docker init`, un nuevo comando de interfaz de línea de comandos (CLI) introducido como característica beta que simplifica el proceso de agregar Docker a un proyecto (Figura 1).

{{< alert >}}
Nota: Docker Init no debe confundirse con el ejecutable docker-init usado internamente, que es invocado por Docker cuando se utiliza el flag –init con el comando docker run.
{{< /alert >}}

{{< gallery >}}
  <img src="/posts/202305-docker-init/img/img1.webp" class="grid-w50" />
  <img src="/posts/202305-docker-init/img/img2.webp" class="grid-w50" />
{{< /gallery >}}


*Con un comando, todos los archivos Docker requeridos son creados y agregados a tu proyecto.*

## Crear recursos automáticamente
El nuevo comando docker init automatiza la creación de recursos Docker necesarios, como Dockerfiles, archivos Compose y archivos .dockerignore, basándose en las características del proyecto. Al ejecutar el comando docker init, los desarrolladores pueden containerizar rápidamente sus proyectos. Docker init es una herramienta valiosa para desarrolladores que quieren experimentar con Docker, aprender sobre containerización o integrar Docker en sus proyectos existentes.

Para usar docker init, los desarrolladores necesitan actualizar a la versión 4.19.0 o posterior de Docker Desktop y ejecutar el comando en la carpeta del proyecto objetivo. Docker init detectará las definiciones del proyecto y generará automáticamente los archivos necesarios para ejecutar el proyecto en Docker.

La versión Beta actual de docker init soporta Go, Node y Python, y nuestro equipo de desarrollo está trabajando activamente para extender el soporte a lenguajes y frameworks adicionales, incluyendo Java, Rust y .NET. Si hay un lenguaje o stack que te gustaría ver agregado o si tienes otros comentarios sobre docker init, háznoslo saber a través de nuestro formulario de Google.

En conclusión, docker init es una herramienta valiosa para desarrolladores que quieren simplificar el proceso de agregar soporte Docker a sus proyectos. Automatiza la creación de recursos Docker necesarios y puede ayudar a estandarizar la creación de recursos Docker en diferentes proyectos. Al permitir que los desarrolladores se concentren en desarrollar sus aplicaciones y reducir el riesgo de errores e inconsistencias, Docker init puede ayudar a acelerar la adopción de Docker y la containerización.

## Ver Docker Init en acción
Para ver docker init en acción, mira el siguiente video de descripción general de Francesco Ciulla, que demuestra la construcción de los recursos Docker requeridos para tu proyecto.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/f4cHtDRZv5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/>

{{< alert >}}
**Nota:** este post fue originalmente publicado externamente, por favor ve al [blog de Docker](https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/) para leer el post completo
{{< /alert >}}
