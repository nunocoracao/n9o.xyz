---
title: "Conoce a Gordon: El Agente de IA de Docker para Todo tu Flujo de Trabajo con Contenedores"
summary: "Gordon ya está disponible de forma general — el agente de IA de Docker, integrado en Docker Desktop y la CLI, que lee tu entorno, rastrea fallos y ejecuta acciones en todo tu flujo de trabajo con tu aprobación explícita."
categories: ["Externo"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/"
date: 2026-05-19
draft: false
---

Los flujos de trabajo con contenedores están llenos de pequeñas fricciones que se acumulan: cachés de build que se invalidan en el peor momento, servicios que no se encuentran entre sí, imágenes que funcionan localmente pero fallan en CI, y mensajes de error que apuntan a recursos que ya no existen. Los asistentes de código de propósito general son excelentes con la lógica de la aplicación, pero no pueden ver tus contenedores en ejecución, tus logs, tus archivos compose o el estado de tu máquina. Solo saben lo que les pegas.

Gordon fue creado exactamente para esa brecha. Hoy, Gordon está disponible de forma general — el agente de IA de Docker, diseñado específicamente para flujos de trabajo con contenedores, integrado en Docker Desktop y la CLI.

## Qué hace Gordon

Gordon lee tu entorno antes de que preguntes. Mira logs, imágenes, archivos compose y contenedores en ejecución, rastrea los fallos hasta su causa real, propone una solución y — con tu aprobación — ejecuta acciones a través de la CLI de Docker y tu sistema de archivos.

Algunas de las cosas que Gordon reduce de horas a minutos:

- **Depurar contenedores rotos** — "Mi contenedor sigue saliendo" → Gordon lee los logs, identifica la variable de entorno faltante, la imagen base incorrecta o el volumen mal configurado, y propone una solución.
- **Containerizar nuevas apps** — "Containeriza esta app y configura un entorno de desarrollo con Postgres" → Gordon escribe el Dockerfile, el stack de compose y lo ejecuta.
- **Optimizar Dockerfiles** — Builds multi-etapa, reordenamiento de capas para mejores aciertos de caché, imágenes base más ligeras, health checks.
- **Operaciones rutinarias** — "Limpia imágenes no usadas" → Gordon te muestra los comandos para aprobación, sin necesidad de buscar flags.
- **Consultas de contexto** — Pregunta sobre contenedores en ejecución, uso de disco o imágenes sin memorizar los flags de Docker.
- **Aprender en contexto** — Obtén conceptos de Docker explicados contra tu configuración real, no un blog post desactualizado.

## Dónde vive Gordon

Gordon está integrado en dos lugares:

- **Docker Desktop** — una pestaña dedicada con contexto completo del entorno, además de aparecer contextualmente cuando surgen problemas.
- **CLI** — ejecuta `docker ai` desde tu terminal.

Disponible en Docker Desktop 4.74 y superior.

## Aprobación primero, por diseño

Cada acción que Gordon ejecuta — cada comando de shell, cada modificación de archivo, cada operación de Docker — se te muestra para aprobación antes de ejecutarse. Los permisos tienen alcance de sesión y se reinician cuando la sesión se cierra. Opcionalmente puedes habilitar auto-aprobación para flujos de confianza. No se almacena código ni datos personales, y los proveedores de IA no retienen tus datos. La infraestructura subyacente está atestada SOC 2 Tipo 2 y certificada ISO 27001.

## Gordon en el stack

Gordon no es un reemplazo para asistentes de código como Cursor, Copilot o Claude Code — los complementa. Esas herramientas se ocupan de la lógica de la aplicación y la generación de nuevo código. Gordon se ocupa de los flujos de trabajo con contenedores, infraestructura, depuración y despliegue. Juntos cubren todo el camino del código a producción sin cambio de contexto.

## Precios

Gordon es gratis con cualquier cuenta de Docker, con límites de uso que se reinician cada pocas horas. Para uso más intensivo, Gordon Plus añade 2x de capacidad por $20/mes, con planes que escalan hasta 20x.

## Empezar

1. Actualiza Docker Desktop a 4.74 o superior
2. Haz clic en el icono de Gordon en la barra lateral, o ejecuta `docker ai` en tu terminal
3. Apúntalo a un proyecto y pregúntale algo — "optimiza mi Dockerfile" es un buen primer prompt

Continúa leyendo el post original en el [Docker Blog](https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/).
