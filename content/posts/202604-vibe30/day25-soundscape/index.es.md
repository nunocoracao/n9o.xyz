---
title: "30 Días de Vibe Coding - Día 25 - SoundScape"
description: "Un mezclador de sonidos ambientales con audio generado proceduralmente, presets, un generador de beats lo-fi y mezclas compartibles."
summary: "Un mezclador de sonidos ambientales con audio generado proceduralmente, presets, un generador de beats lo-fi y mezclas compartibles."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-25", "web-audio", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 25
seriesOpened: false
date: 2026-04-30
draft: false
#type: "hidden"
---

Día 25. Me construí exactamente la app que yo mismo usaría mientras construía todos los demás días.

## El Prompt

La idea era simple: un mezclador de sonidos ambientales donde superpones sonidos para crear una atmósfera de fondo para trabajar, relajarte o dormir. Piensa en esos vídeos de YouTube de "ambiente de cafetería", pero interactivo y personalizable.

La restricción interesante era que quería que todo el audio fuera generado proceduralmente usando la Web Audio API. Sin archivos de sonido, sin assets de audio que cargar. Todo sintetizado en el navegador.

{{< alert icon="fire">}}
Pruébalo tú mismo [aquí](https://vibe30-day25-soundscape.vercel.app)
{{< /alert >}}

## Cómo Se Construyó

[Watchfire](https://watchfire.io) dividió esto en 10 tareas. El plan inicial en realidad usaba Howler.js con archivos de sonido pregrabados, pero pivoté pronto hacia la generación procedural con la Web Audio API. Eso significó que cada sonido que escuchas, desde la lluvia hasta una chimenea crepitando, se está generando matemáticamente en tiempo real. Sin MP3s, sin descargas, sin pantallas de carga.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Vista principal de SoundScape](images/screenshot-01.png)

**12 sonidos en 3 categorías.** Naturaleza, Urbano y Acogedor. Cada uno tiene su propia tarjeta con un slider de volumen, y puedes mezclar y combinar como quieras. La categoría Naturaleza tiene cosas como lluvia, bosque y olas del mar. Urbano tiene conversación de cafetería y tecleo de teclado. Acogedor tiene chimenea crepitando.

![Controles principales](images/screenshot-02.png)

**Los controles principales son limpios.** Tres sliders en la parte superior para Ambiente, Música y volumen general, más un botón de temporizador para modo de sueño. La interfaz con glassmorphism se ve genuinamente bien contra el fondo oscuro.

![Sonidos activos con preset Forest Cabin](images/screenshot-03.png)

**Los presets lo hacen instantáneamente útil.** Hay cuatro presets incluidos: Rainy Coffee Shop, Forest Cabin, Late Night Coding y Ocean Breeze. Un clic y tienes una mezcla curada. Forest Cabin, por ejemplo, activa Bosque, Viento, Pájaros y Chimenea a diferentes niveles de volumen. También puedes guardar tus propios presets personalizados en localStorage.

![Cuadrícula de sonidos - Naturaleza y Urbano](images/screenshot-05.png)

![Cuadrícula de sonidos - Categoría Acogedor](images/screenshot-06.png)

**Todos los sonidos son generados proceduralmente.** La lluvia es ruido blanco moldeado con filtros. El viento son osciladores de baja frecuencia con modulación lenta. Los pájaros son pequeños chirps de ondas sinusoidales con timing aleatorio. La chimenea es ruido filtrado con ráfagas de crepitar. Nada suena perfecto, pero todo suena reconocible y se mezcla lo suficientemente bien como para que tu cerebro llene los vacíos.

![Generador de beats lo-fi](images/screenshot-04.png)

**Hay un generador de beats lo-fi.** Esto no estaba en el plan original pero apareció como bonus. Tiene presets de mood (Chill, Happy, Sad, Dreamy) y controles individuales para Batería, Bajo, Teclas, Melodía y Crackle de vinilo. Corre a 74 BPM y realmente produce algo que querrías tener de fondo. Los beats se superponen a los sonidos ambientales, así que puedes tener lluvia más beats lo-fi más chimenea todo a la vez.

**El fondo cambia con tu mezcla.** Un gradiente de fondo dinámico cambia según qué sonidos están activos. Las mezclas con más naturaleza tiran hacia verdes y azules, lo urbano tira hacia tonos más cálidos. Es sutil pero hace que todo se sienta más vivo.

**Comparte por URL.** Puedes compartir tu mezcla exacta con alguien copiando la URL. Codifica qué sonidos están activos y sus niveles de volumen, así que cualquiera que abra el enlace obtiene exactamente tu configuración.

**Atajos de teclado por todas partes.** Espacio para pausar todo, teclas numéricas 1-9 y 0 para alternar sonidos individuales, Escape para parar todo. El temporizador de sueño hace un fade-out suave durante la duración elegida (15, 30, 60 o 90 minutos).

## Los Bugs

El enfoque de audio procedural significó que la mayoría de los bugs estaban relacionados con el audio:

- Algunos sonidos tenían clics y pops al activar y desactivar (necesitaban ramping de ganancia adecuado)
- El timing del generador de beats lo-fi se desviaba ligeramente en sesiones largas
- Algunos de los sonidos sintetizados eran demasiado agresivos a volumen máximo antes de afinar los filtros

Nada grave. La Web Audio API es potente pero implacable si no manejas el ciclo de vida del contexto de audio correctamente.

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day25-soundscape" showThumbnail=true >}}

**[Abrir SoundScape](https://vibe30-day25-soundscape.vercel.app)**

Mejor experiencia con auriculares. Prueba el preset "Late Night Coding" y activa los Lo-Fi Beats.

## Veredicto del Día 25

Hay algo satisfactorio en mezclar tu propio fondo ambiental en vez de andar buscando el vídeo correcto en YouTube o la playlist en Spotify. Y el hecho de que todo sea generado proceduralmente significa que no hay loops, no hay repetición. La lluvia simplemente sigue, siempre ligeramente diferente.

La Web Audio API está infravalorada. No tenía ni idea de que se pudieran sintetizar tantos sonidos diferentes puramente con osciladores, generadores de ruido y filtros. No es calidad de estudio, pero para ambiente de fondo funciona sorprendentemente bien. Cero archivos de audio significa que la app carga instantáneamente y funciona offline.

Quedan cinco días.

---

*Este es el día 25 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
