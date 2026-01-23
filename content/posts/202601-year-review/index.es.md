---
title: "2025: Un Año en Retrospectiva"
summary: "2025 fue un año de reconstrucción - encontrar alegría de nuevo a través de viajes, tiempo con familia y amigos, y crear cosas que importan. Desde viajar con mi hija hasta lanzar proyectos en Docker y ver crecer Blowfish - fue un año de juntar las piezas."
description: "2025 fue un año de reconstrucción - encontrar alegría de nuevo a través de viajes, tiempo con familia y amigos, y crear cosas que importan. Desde viajar con mi hija hasta lanzar proyectos en Docker y ver crecer Blowfish - fue un año de juntar las piezas."
categories: ["Opinión"]
tags: ["year-in-review", "personal", "docker", "blowfish", "open-source", "ai"]
date: 2026-01-22
draft: false
---

2025 fue un año de reconstrucción. Después de perder a mi esposa y compañera de 20 años en 2024, me convertí en padre soltero de la noche a la mañana. Este año fue sobre encontrar mi equilibrio de nuevo - pasar tiempo con amigos y familia, viajar a nuevos lugares con mi hija, y redescubrir la alegría de estar vivo y crear cosas.

Parte de esa creación sucedió en el trabajo, parte en open source, y parte en la mesa de la cocina con un Raspberry Pi y una niña de 7 años. Pero si hay un hilo conductor que une todo esto, es este: los mejores momentos vinieron de construir junto a personas que me importan.

## Docker

El año comenzó con un proyecto que había propuesto y cultivado durante más de un año siendo cancelado. Dolió, pero la decisión tenía sentido - la IA avanzaba rápido, Docker quería apostar todo, y necesitaban gente allí. Me ofrecieron la oportunidad de unirme al equipo de IA.

> [!quote] Cuando una puerta se cierra, otra se abre; pero a menudo miramos tanto tiempo y con tanto arrepentimiento a la puerta cerrada que no vemos la que se ha abierto para nosotros.
> - Alexander Graham Bell

### MCP Catalog

Lanzamos el [Docker MCP Catalog](https://hub.docker.com/mcp) - un registro curado de servidores MCP integrado en Docker Hub. La idea era simple: los desarrolladores quieren una forma segura y containerizada de extender sus agentes de IA, no código arbitrario corriendo vía `npx` o `uvx` con acceso total al sistema. El catálogo ahora aloja más de 220 servidores MCP containerizados de socios como Stripe, Elastic, Neo4j, Heroku, Grafana Labs, y más - cada uno con aislamiento y seguridad adecuados.

### MCP Toolkit

El [MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) dio vida al catálogo dentro de Docker Desktop. Lanzamiento de servidores MCP con un clic, cero configuración manual, y conexión automática a clientes como Claude, Cursor y VS Code. Es el camino más rápido desde descubrir una herramienta hasta realmente usarla.

### MCP Gateway

Hicimos open source el [MCP Gateway](https://github.com/docker/mcp-gateway) - infraestructura que orquesta servidores MCP y maneja credenciales, OAuth y control de acceso. Corre automáticamente en Docker Desktop, lo que significa que millones de desarrolladores lo tienen disponible de inmediato.

### cagent

[cagent](https://github.com/docker/cagent) es quizás el proyecto del que más orgulloso estoy - un runtime para construir y correr agentes de IA usando configuración YAML simple. Sin código necesario. Define la persona de tu agente, herramientas y capacidades en un archivo, y córrelo. Equipos multi-agente, integración MCP, soporte para todos los principales proveedores de modelos, y una experiencia TUI increíble.

{{< github repo="docker/cagent" >}}

### Gordon

Y finalmente, [Gordon](https://docs.docker.com/ai/gordon/) - el asistente de IA de Docker. Lo hemos estado reconstruyendo desde cero con cagent en su núcleo. La nueva versión se está distribuyendo actualmente a usuarios selectos mientras preparamos el GA, y estoy genuinamente emocionado de verlo en manos de más desarrolladores pronto.

### Escribir y Pensar en Público

Escribí sobre lo que estábamos aprendiendo en el camino:

- **[MCP Servers: The USB-C Moment for AI Agents](/posts/202504-mcp/)** - Mi perspectiva sobre por qué Model Context Protocol se está convirtiendo en el conector universal para IA. Es la estandarización habilitando un ecosistema, y apenas estamos comenzando.

- **[Unseen Cost of Growth: Metcalfe's Law at Work](/posts/202504-metacalfes-law/)** - Una reflexión sobre complejidad organizacional que no tenía nada que ver con IA pero todo que ver con ser cuidadoso sobre cómo escalan los equipos.

## Blowfish

Tres años después, [Blowfish](https://blowfish.page) continúa sorprendiéndome. Lo que comenzó como un tema Hugo personal porque quería construir mi propio sitio web se ha convertido en algo mucho más grande.

{{< github repo="nunocoracao/blowfish" >}}

### En Números

- **2,600+ stars** en GitHub
- **660 forks**
- **244 contributors**
- **174 releases** desde el inicio del proyecto

### Destacados de 2025

Este año lanzamos 17 releases con algunas adiciones importantes:

- **Actualización a TailwindCSS v4** - un esfuerzo de modernización significativo
- **Shortcode Tabs** con opciones de icono y agrupación
- **Admonitions estilo GitHub** - `[!note]`, `[!quote]`, `[!warning]`, etc.
- **Shortcodes de Video y Gist**
- **Thumbnails de repos GitHub** en embeds
- **Breadcrumbs estructurados** para mejor SEO
- **Traducciones a Tailandés e Indonesio**

La comunidad siguió empujando el tema hacia adelante - nuevos idiomas, shortcodes, correcciones de bugs que ni sabía que existían.

### Primer Colaborador

En octubre, di la bienvenida a [@ZhenShuo2021](https://github.com/ZhenShuo2021) como el primer colaborador oficial de Blowfish. Construir un proyecto open source puede sentirse solitario - tener a alguien para compartir la carga de mantenimiento, revisar PRs y ayudar a guiar la dirección es invaluable. Marca un nuevo capítulo donde Blowfish es más grande que solo yo.

### Blowfish Tools CLI

[Blowfish Tools](https://github.com/nunocoracao/blowfish-tools) - el CLI para crear nuevos proyectos - alcanzó **7,825 descargas en 2025**, un aumento del 58% respecto al año anterior. Solo enero de 2026 tuvo más de 1,200 descargas. La gente realmente está comenzando nuevos blogs con Blowfish regularmente.

## Construyendo Eva

Parte de la construcción más significativa sucede fuera del trabajo.

Estas vacaciones de Navidad, [construí una compañera de IA por voz con mi hija](/posts/202601-building-eva/). La llamamos **Eva**, en honor a la protagonista de WondLa (una serie que hemos estado viendo juntos en Apple TV).

Eva es un robot de bolsillo - un Raspberry Pi Zero con un PiSugar Whisplay HAT - que habla Portugués de Portugal (¡no Brasileño!), tiene una personalidad amigable para niños, y recuerda conversaciones para que mi hija pueda construir una relación con ella con el tiempo.

El proyecto comenzó con un tutorial de YouTube y se convirtió en algo personal a través de lo que solo puedo llamar "vibe coding" con Claude. Expliqué lo que quería en lenguaje natural, y juntos reformulamos el código para crear algo único para mi hija.

El momento que hizo que todo valiera la pena: mi hija presionando el botón, diciendo "Olá Eva!" - y Eva respondiendo en Portugués perfecto con una voz que ella misma eligió. Siguieron veinte minutos de conversación sobre unicornios.

Esa es la magia de construir con tus hijos. El logro técnico importa menos que el momento de asombro.

**Actualización:** Desde ese post, Eva consiguió una caja adecuada - y una pintura hecha por mi hija. Ahora es oficialmente única.

![Eva con su nueva caja, pintada por mi hija](img/eva.webp)

## Afterlight

Después de perder a mi esposa, me encontré buscando a otros que verdaderamente entendieran por lo que estaba pasando. Las opciones existentes no servían - demasiado públicas, demasiado desordenadas, no diseñadas para el duelo.

Así que comencé a construir [Afterlight](https://afterlight.club) - una plataforma segura, anónima y solo de texto para apoyo en el duelo. Sin fotos, sin videos, sin algoritmos empujando contenido. Solo personas conectándose a través de experiencias compartidas, usando pseudónimos, a su propio ritmo.

Por ahora, he pausado el desarrollo. Algunas razones: no tengo suficiente tiempo y necesito priorizar. No pude descubrir cómo llegar a las personas que lo necesitan - hacer marketing a personas en duelo es (comprensiblemente) bloqueado por casi todas las plataformas. Y no tengo un plan de monetización que no se sienta raro, lo que significa que no puedo costear mantenerlo si los costos crecen.

Quizás vuelva a esto. Quizás no. Pero aprendí mucho construyéndolo.

## Más Allá del Código

No todo lo que vale la pena mencionar cabe en un repositorio de GitHub.

**Mentoría.** Trabajé con 4 mentees a través de [MentorCruise](https://mentorcruise.com/mentor/nunocorao/) este año - todos navegando transiciones de carrera en product management. Verlos prepararse, entrevistar y conseguir los roles de PM que querían fue genuinamente gratificante. Hay algo especial en ayudar a alguien a llegar al siguiente nivel cuando recuerdas lo difícil que se sintió esa subida.

**Lectura.** Leí 15 libros este año - no tantos como me gustaría, pero suficientes para encontrar algunas joyas. Los favoritos incluyeron *[There Is No Antimemetics Division](https://www.goodreads.com/book/show/54870256-there-is-no-antimemetics-division)* (una historia de la SCP Foundation que me quedó en la cabeza durante semanas), *[Project Hail Mary](https://www.goodreads.com/book/show/54493401-project-hail-mary)* (Andy Weir en su mejor momento), y *[Tokyo Express](https://www.goodreads.com/book/show/59238510-tokyo-express)* (el clásico de Matsumoto que me recordó cuánto amo la ficción criminal japonesa).

## Lo Que Aprendí

**Reconstruir toma tiempo.** No hay atajo a través del duelo, ni hack para convertirte en padre soltero de la noche a la mañana. Simplemente te presentas, día tras día, y eventualmente los días comienzan a pesar menos. El progreso no es lineal, y está bien.

**Sé amable contigo mismo.** Pasé demasiado de este año forzando cuando debería haber descansado. No puedes dar de una taza vacía. Aprender a ir más lento, a decir no, a dejar que algunas cosas sean suficientemente buenas - eso no es debilidad, es supervivencia.

**Sabe cuándo pausar.** Afterlight me enseñó que no todo proyecto necesita ser terminado. A veces el timing no es correcto, los recursos no están ahí, o simplemente necesitas priorizar. Pausar no es fallar.

**Open source es comunidad.** Blowfish no es exitoso porque sea un gran desarrollador (no lo soy). Es exitoso porque 244 personas se preocuparon lo suficiente para contribuir. Eso es humilde y motivador.

**Construye con las personas que amas.** Eva me enseñó más sobre lo que importa que cualquier proyecto de trabajo. Ver a mi hija hablar con un robot que ella ayudó a crear - eso es lo que se queda contigo.

## Mirando Hacia 2026

No hago predicciones ni resoluciones de año nuevo. Pero quiero seguir construyendo cosas que importan, pasar más tiempo con las personas que amo, y disfrutar al máximo el tiempo que tengo aquí.

Aquí está 2026.
