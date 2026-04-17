---
title: "30 Días de Vibe Coding - Día 12 - Wordle"
description: "Un clon completo de Wordle con animaciones, tema oscuro/claro, modo difícil, modo para daltónicos, efectos de sonido y celebraciones con confeti."
summary: "Un clon completo de Wordle con animaciones, tema oscuro/claro, modo difícil, modo para daltónicos, efectos de sonido y celebraciones con confeti."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-12", "react", "nextjs", "typescript", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 12
seriesOpened: false
date: 2026-04-17
draft: false
#type: "hidden"
---

Día 12. Todo el mundo ha jugado Wordle. Veamos qué tan cerca puede llegar la IA del original.

## El Prompt

> "Construye un clon de Wordle con una lista de palabras decente, animaciones en los bloques, teclado, seguimiento de estadísticas y funcionalidad para compartir."

## Cómo Se Construyó

Este pasó por 7 tareas de Watchfire, y ver la progresión fue interesante porque refleja cómo realmente construirías un juego pulido si tuvieras paciencia infinita.

1. **Motor de juego con listas de palabras.** La base: una lista de soluciones de unas 2.300 palabras, una lista de intentos válidos de unas 10.000 palabras y la lógica central de evaluación de intentos. Verde, amarillo, gris. Lo básico.
2. **UI pulida con animaciones en los bloques y teclado.** Los bloques giran al revelar, saltan al escribir, tiemblan cuando la palabra es inválida. Un teclado en pantalla que actualiza los colores de las letras mientras juegas.
3. **Estadísticas y compartir.** Porcentaje de victorias, gráfico de barras con distribución de intentos, racha actual y máxima. El botón de compartir copia tu cuadrícula de emojis al portapapeles, igual que el Wordle original.
4. **Modal de ayuda, tema oscuro/claro, modo difícil.** Un overlay de cómo jugar con ejemplos visuales. Alternancia de tema con transiciones suaves. Modo difícil que te obliga a usar las pistas reveladas en los intentos siguientes.
5. **Modo para daltónicos, accesibilidad, corrección de bug con React refs.** Colores de alto contraste para jugadores daltónicos. Esta tarea también detectó y corrigió un bug de React refs que estaba causando problemas con las animaciones de los bloques.
6. **Efectos de sonido con Web Audio API.** Retroalimentación sonora para pulsaciones de teclas, revelación de bloques, victorias y errores. Todo generado con la Web Audio API, así que no hay archivos de audio que cargar.
7. **Celebración con confeti al ganar.** Un sistema de partículas basado en canvas que se dispara cuando resuelves el puzzle. Porque te lo ganaste.

Todo vive en un único hook React personalizado (`useWordle.ts`) para la lógica del juego, con la UI como una página Next.js. Separación limpia.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Wordle modo oscuro gameplay](images/screenshot-01.png)

**Se siente como Wordle.** Esa era la vara, y la supera. La animación de giro de los bloques al revelar, el ligero salto cuando escribes una letra, el temblor cuando introduces una palabra inválida. Estas micro-interacciones son lo que hace que el Wordle original sea satisfactorio de jugar, y están todas aquí.

![Wordle modo claro](images/screenshot-02.png)

**Temas oscuro y claro.** Ambos se ven bien. El modo oscuro es el predeterminado (como debe ser), pero el modo claro también funciona bien. El interruptor está en el encabezado, las transiciones son suaves.

![Modal de estadísticas](images/screenshot-03.png)

**Estadísticas que persisten.** Juegos jugados, porcentaje de victorias, racha actual, racha máxima y un gráfico de distribución de intentos. Todo almacenado en localStorage, así que tus estadísticas sobreviven entre sesiones. El botón de compartir formatea tus resultados como una cuadrícula de emojis, listo para pegar en cualquier sitio.

![Ajustes con modo difícil y modo para daltónicos](images/screenshot-04.png)

**Ajustes que importan.** El modo difícil es una restricción real, no solo una etiqueta. Si descubres que la palabra tiene una A en la posición 3, todos los intentos siguientes deben tener una A en la posición 3. El juego lo aplica y te dice por qué tu intento fue rechazado. El modo para daltónicos cambia el verde y el amarillo por naranja y azul, que es algo pequeño que hace el juego jugable para mucha más gente.

**Efectos de sonido sin archivos de audio.** El enfoque con Web Audio API es inteligente. Sin mp3s que cargar, sin audio sprites, sin precarga. Los sonidos se sintetizan en tiempo real. Un clic suave para la entrada de teclado, una secuencia de tonos satisfactoria para la revelación de bloques, una pequeña fanfarria para ganar. Añaden mucho sin añadir peso a la descarga.

**Confeti que se siente bien.** Gana el juego y partículas de canvas explotan desde el centro de la pantalla. Es un toque pequeño, pero convierte un momento tranquilo de "lo conseguiste" en una celebración.

## Los Reportes de Bugs

El problema con React refs en la tarea 5 fue el único bug real. Las animaciones de giro de los bloques no se activaban consistentemente por cómo React estaba manejando refs durante los re-renders. Watchfire lo detectó durante la pasada de accesibilidad y lo corrigió en la misma tarea. No tuve que abrir un reporte separado para ese.

Fuera de eso, el juego funcionó correctamente desde el principio. Las palabras válidas se aceptaban, las inválidas se rechazaban con un temblor, los colores del teclado se actualizaban correctamente y el modo difícil aplicaba sus reglas como debe ser.

## Los Números

- **~2.300 palabras de solución** y **~10.000 intentos válidos**
- **7 tareas de Watchfire** de motor de juego básico a confeti
- **1 hook personalizado** (`useWordle.ts`) con toda la lógica del juego
- **Web Audio API** para efectos de sonido sin descarga
- **Sistema de partículas en canvas** para celebraciones de victoria
- **localStorage** para persistencia de estadísticas y estado del juego

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day12-wordle" showThumbnail=true >}}

**[Juega Wordle](https://vibe30-day12-wordle.vercel.app)**

Escribe una palabra de 5 letras y pulsa Enter. Verde significa letra correcta, posición correcta. Amarillo significa letra correcta, posición incorrecta. Gris significa que la letra no está en la palabra. Seis intentos para adivinarlo.

## Veredicto del Día 12

Wordle es uno de esos juegos que parecen simples hasta que intentas construirlo. La lógica central es directa, pero es el pulido lo que lo hace funcionar. Las animaciones, la retroalimentación del teclado, las estadísticas, la función de compartir, la aplicación del modo difícil. Quita cualquiera de esas cosas y deja de sentirse como Wordle.

Lo que me impresionó aquí fue la progresión. La tarea 1 me dio un juego de adivinar palabras funcional pero feo. Para la tarea 7 ya tenía todo lo que tiene el Wordle original, más efectos de sonido y confeti. Cada tarea añadió una categoría específica de pulido, y ninguna rompió lo que vino antes. Eso no es fácil de hacer con animaciones y gestión de estado en React.

La elección de Web Audio API para los efectos de sonido fue una sorpresa agradable. Habría esperado que recurriera a archivos de audio. En su lugar genera los sonidos programáticamente, lo que significa cero assets adicionales y reproducción instantánea. Un trade-off inteligente.

El patrón se mantiene. Cada día añade pulido, y nada se ha desmoronado todavía.

---

*Este es el día 12 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
