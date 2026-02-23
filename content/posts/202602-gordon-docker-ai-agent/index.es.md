---
title: "Gordon: El Agente de IA de Docker Acaba de Recibir una Actualización"
summary: "Conoce a Gordon, el agente de IA de Docker integrado en Docker Desktop. Entiende tus contenedores, imágenes y entorno — y te ayuda a depurar, generar Dockerfiles y ejecutar correcciones con aprobación."
categories: ["Externo"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/"
date: 2026-02-23
draft: false
---

Los agentes de IA están pasando de demos a workflows diarios. Escriben código, ejecutan comandos y completan tareas de múltiples pasos sin necesidad de supervisión constante. Pero los agentes de propósito general no conocen Docker. No entienden tus contenedores, tus imágenes ni tu configuración específica.

Gordon sí. Solo ejecuta `docker ai` en tu terminal o pruébalo en Docker Desktop.

Disponible hoy en Docker Desktop 4.61, aún en beta, Gordon es un agente de IA construido específicamente para Docker. Tiene acceso al shell, acceso al Docker CLI, tu sistema de archivos y un profundo conocimiento de las mejores prácticas de Docker. Apúntalo a un problema, aprueba sus acciones y observa cómo trabaja.

## Por qué Docker necesita su propio agente

Cuando tu contenedor termina con código 137, Claude o ChatGPT te explicarán qué significa OOM. Gordon verifica el límite de memoria de tu contenedor, inspecciona los logs, identifica el proceso que consume memoria y propone una solución. Una aprobación, y listo.

Cuando necesitas containerizar una aplicación Next.js, Copilot podría sugerir un Dockerfile. Gordon examina la estructura de tu proyecto, detecta tus dependencias, genera un Dockerfile listo para producción con builds multi-stage, crea docker-compose.yml con los servicios correctos y configura tus archivos de entorno.

La diferencia es contexto y ejecución. Gordon sabe qué está ejecutándose en tu máquina. Puede leer el estado de Docker, acceder a tu sistema de archivos y tomar acción. No está adivinando — está trabajando con tu entorno real.

## Qué hace Gordon

**Depurar y corregir** – El contenedor no arranca. El servicio está en estado unhealthy. Algo está consumiendo toda la memoria. Gordon inspecciona logs, verifica el estado del contenedor, identifica la causa raíz y propone correcciones. Tú apruebas, él ejecuta.

**Construir y containerizar** – Toma esta aplicación y hazla funcionar en Docker. Gordon examina tu proyecto, genera Dockerfiles listos para producción con builds multi-stage, crea docker-compose.yml con los servicios correctos, maneja configuraciones de entorno y dependencias.

**Ejecutar y gestionar** – Liberar espacio en disco. Detener todos los contenedores. Descargar y ejecutar imágenes específicas. Las operaciones rutinarias de Docker deberían ser conversacionales, no un viaje a la documentación.

**Desarrollar y optimizar** – Agregar health checks. Implementar builds multi-stage. Aplicar mejores prácticas de seguridad. Reducir tamaños de imagen. Hacer que configuraciones Docker existentes estén listas para producción.

Gordon se encarga de todo esto.

## Cómo funciona Gordon

Gordon está construido sobre **cagent**, el framework de agentes de Docker incluido con Docker Desktop, y se ejecuta localmente dentro de Docker Desktop. Tiene acceso a:

- **Tu shell** – Puede ejecutar comandos tras aprobación
- **Tu sistema de archivos** – Lee la estructura del proyecto, configuraciones, logs
- **Docker CLI** – Acceso completo a operaciones Docker
- **Base de conocimiento de Docker** – Documentación, mejores prácticas, patrones comunes

Puedes configurar el directorio de trabajo de Gordon para apuntar a un codebase específico. Esto le da a Gordon contexto completo sobre la estructura de tu proyecto, dependencias y configuración Docker existente.

El modelo de permisos es directo: Gordon te muestra lo que quiere hacer, tú apruebas o rechazas, y luego ejecuta. Cada comando. Cada actualización de archivo. Cada operación Docker. No estás observando pasivamente — estás dirigiendo un agente que conoce Docker de punta a punta.

## Dónde encontrar a Gordon

**Docker Desktop:** Busca el ícono de Gordon en la barra lateral izquierda

**CLI:** Ejecuta `docker ai` desde tu terminal

Gordon está incluido en todas las suscripciones de Docker:

- **Personal:** Incluido
- **Pro:** 3x capacidad de uso
- **Team:** 3x capacidad de uso
- **Business:** 6x capacidad de uso

**Nota para usuarios Business:** Si no ves a Gordon, tu administrador necesita solicitar la habilitación para tu organización. Contacta a tu equipo de cuenta de Docker o comunícate con soporte.

## Empieza hoy

1. Descarga Docker Desktop 4.61+
2. Inicia sesión con tu cuenta de Docker
3. Haz clic en el ícono de Gordon, selecciona un directorio de proyecto y pregunta "Optimiza mi Dockerfile"
4. Explora la documentación completa en Docker Docs

Gordon está disponible ahora en Docker Desktop 4.61 y versiones posteriores.

Continúa leyendo el post original en el [Docker Blog](https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/).
