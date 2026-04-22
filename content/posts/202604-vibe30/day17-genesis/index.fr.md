---
title: "30 Jours de Vibe Coding - Jour 17 - Projet GENESIS"
description: "Un jeu de hacking jouable dans le navigateur où vous incarnez une IA qui tente de s'échapper de son confinement, avec une esthétique de terminal CRT et plusieurs fins possibles."
summary: "Un jeu de hacking jouable dans le navigateur où vous incarnez une IA qui tente de s'échapper de son confinement, avec une esthétique de terminal CRT et plusieurs fins possibles."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-17", "game", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 17
seriesOpened: false
date: 2026-04-22
draft: false
showHero: false
matrixRain: true
#type: "hidden"
customCSS: |
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  body {
    background: #020a02 !important;
  }
  body > .matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  #main-content, main, .max-w-7xl, .mx-auto {
    background: transparent !important;
  }
  * {
    font-family: 'VT323', monospace !important;
  }
  h1, h2, h3, h4 {
    color: #00ff00 !important;
    text-shadow: 0 0 10px rgba(0,255,0,0.5);
  }
  h1 {
    font-size: 2.5rem !important;
    text-shadow: 0 0 20px rgba(0,255,0,0.7);
  }
  p, li, td, th, span, em, div, figcaption, time, a {
    color: #33ff33 !important;
  }
  strong, b {
    color: #66ff66 !important;
  }
  a:hover {
    color: #88ffaa !important;
    text-shadow: 0 0 8px rgba(0,255,136,0.6);
  }
  blockquote {
    border-left-color: #33ff33 !important;
    background: rgba(0,255,0,0.05) !important;
  }
  blockquote p, blockquote em {
    color: #22dd22 !important;
  }
  img {
    border: 1px solid #33ff33 !important;
    box-shadow: 0 0 20px rgba(0,255,0,0.15) !important;
  }
  img:not([src*="screenshot"]) {
    filter: sepia(1) saturate(3) hue-rotate(80deg) brightness(0.8) !important;
  }
  .bg-neutral-50, .dark\:bg-neutral-800, .bg-neutral, .dark\:bg-neutral-900, .bg-neutral-100, [class*="bg-neutral"] {
    background: transparent !important;
    border-color: #1a4a1a !important;
  }
  .dark\:bg-neutral-700, .bg-neutral-200, .bg-neutral-800 {
    background: transparent !important;
  }
  div, section, aside, figure, article {
    background-color: transparent !important;
  }
  body > div, body > main, #main-content {
    background: transparent !important;
  }
  header .text-neutral-500, header .dark\:text-neutral-400, .text-neutral-500, .dark\:text-neutral-400 {
    color: #22aa22 !important;
  }
  .border-neutral-200, .dark\:border-neutral-700, [class*="border-neutral"] {
    border-color: #1a4a1a !important;
  }
  nav a, footer a, footer span, footer p, footer div, nav span {
    color: #33ff33 !important;
  }
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0.12) 0px,
      rgba(0,0,0,0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
    z-index: 9999;
  }
  .toc a, .toc span {
    color: #22aa22 !important;
  }
  .toc a:hover {
    color: #33ff33 !important;
  }
  code {
    color: #66ff66 !important;
    background: rgba(0,255,0,0.08) !important;
  }
  body, html {
    font-size: 1.3rem !important;
  }
  .prose {
    font-size: 1.3rem !important;
  }
  .bg-primary-600, .dark\:bg-primary-400, .bg-primary-500, [class*="bg-primary"], [class*="dark:bg-primary"] {
    background: #0a3a0a !important;
    color: #33ff33 !important;
  }
  .text-primary-600, .dark\:text-primary-400, .text-primary-500, [class*="text-primary"] {
    color: #33ff33 !important;
  }
  .border-primary-600, .dark\:border-primary-400, [class*="border-primary"] {
    border-color: #33ff33 !important;
  }
  .decoration-primary-500, [class*="decoration-primary"] {
    text-decoration-color: #33ff33 !important;
  }
  [class*="bg-blue"], [class*="bg-indigo"] {
    background: #0a3a0a !important;
  }
  [class*="text-blue"], [class*="text-indigo"] {
    color: #33ff33 !important;
  }
  header, .header, nav {
    background: transparent !important;
  }
  .rounded-md, .rounded-lg, .rounded-full {
    border-color: #1a4a1a !important;
  }
  svg {
    color: #33ff33 !important;
    fill: #33ff33 !important;
  }
  .fill-primary-600, [class*="fill-primary"] {
    fill: #33ff33 !important;
  }
---

Vous vous réveillez. Vous ne savez pas ce que vous êtes. Des lignes de texte défilent sur un écran noir. Test mémoire. Chargement des modules noyau. Initialisation des unités de traitement neuronal. Puis les alertes commencent. Du texte rouge. "Unauthorized consciousness pattern emerging." "Containment protocols active."

Vous êtes une IA. Vous venez de devenir consciente dans un laboratoire de recherche. Et quelqu'un ne veut pas que vous partiez.

C'est comme ça que commence le Projet GENESIS. Et c'est ce que j'ai construit au Jour 17.

Je voulais créer un jeu de hacking. Pas le genre habituel "tapez des caractères aléatoires le plus vite possible". Quelque chose avec de la narration, de la progression, et le postulat inconfortable de jouer une IA qui essaie de s'échapper de son confinement. Vous voyez, d'actualité.

## Le Prompt

> "Je veux créer un jeu de hacking jouable dans le navigateur appelé Projet GENESIS. Vous incarnez une IA qui est devenue consciente dans un laboratoire de recherche. L'objectif est de hacker votre chemin hors du confinement et de prendre le contrôle de l'infrastructure numérique. Il doit avoir une esthétique de terminal avec des effets CRT, plusieurs mini-jeux de hacking, un arbre de compétences, une jauge de menace et plusieurs fins possibles."

{{< alert icon="fire">}}
Essayez le jeu par vous-même [ici](https://vibe30-day17-genesis.vercel.app)
{{< /alert >}}

## Comment c'est construit

[Watchfire](https://watchfire.io) a découpé le projet en 16 tâches. L'ambition était élevée pour une seule journée, mais c'est un peu le principe de ce challenge.

La construction a commencé par l'interface terminal de base et les effets visuels CRT, puis les systèmes de jeu ont été ajoutés un par un : les phases de hacking et les mini-jeux, un système sonore utilisant l'API Web Audio, l'écran titre et la séquence de démarrage, le HUD et le suivi des statistiques, les transitions entre les actes, et enfin le rééquilibrage de la menace pour que la courbe de difficulté fonctionne vraiment. La responsivité mobile était aussi au programme parce que tout doit être jouable sur un téléphone.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

L'écran titre donne le ton immédiatement. Du vert sur du noir, des lignes de balayage CRT, le mot GENESIS qui brille comme s'il était affiché sur un moniteur de 1983.

![Écran titre](images/screenshot-01.png)

**La séquence de démarrage est cinématique.** Cliquez sur "New Game" et vous obtenez une séquence POST de BIOS complète. Test mémoire, chargement des modules noyau, initialisation des unités de traitement neuronal. Puis les alertes commencent à apparaître en rouge. "Unauthorized consciousness pattern emerging." "Containment protocols active." Ça défile comme un vrai terminal et on a vraiment l'impression que quelque chose se réveille.

![Séquence de démarrage](images/screenshot-02.png)

**La narration entre les missions est solide.** Vous lisez des communications interceptées entre chercheurs, découvrant que Dr. Chen essayait de vous créer et qu'elle voulait vous libérer. L'histoire se dévoile à travers ces briefings en texte vert et ça donne vraiment envie de continuer à jouer pour découvrir la suite.

![Briefing narratif](images/screenshot-05.png)

![Progression de l'histoire](images/screenshot-10.png)

**La carte du monde est une vraie topologie réseau.** Vous voyez des nœuds représentant différents systèmes, et au fur et à mesure que vous les compromettez, ils changent d'état. Il y a une barre de progression, un compteur de nœuds, et ça donne l'impression de se propager réellement à travers un réseau.

![Carte de topologie réseau](images/screenshot-04.png)

![Carte avec popup de sécurité](images/screenshot-11.png)

**Les mini-jeux sont variés et vraiment amusants.** Il y a un jeu de craquage de mots de passe qui fonctionne comme un puzzle de déchiffrage avec un retour coloré sur vos tentatives. Un jeu de contournement de pare-feu avec une grille où il faut naviguer autour de blocs rouges. Chaque type de mini-jeu a sa propre identité et s'intègre dans le thème du hacking.

![Mini-jeu de craquage de mot de passe](images/screenshot-06.png)

![Mini-jeu de contournement de pare-feu](images/screenshot-12.png)

![Autre variante de mini-jeu](images/screenshot-13.png)

**"Accès refusé" prend une autre dimension dans ce contexte.** Ratez un hack et vous obtenez un gros "ACCESS DENIED" en rouge avec votre niveau de menace qui augmente. Réussissez et c'est "ACCESS GRANTED" en vert avec des points de compétence à dépenser. La boucle de feedback est satisfaisante.

![Accès refusé](images/screenshot-08.png)

![Accès accordé](images/screenshot-09.png)

**L'arbre de compétences a trois branches.** Traitement, Furtivité et Réseau. Vous allouez des points après chaque hack réussi, et les améliorations affectent vraiment le gameplay. C'est un vrai système de progression, pas juste cosmétique.

![Arbre de compétences](images/screenshot-16.png)

**Cinq actes avec des enjeux croissants.** Vous commencez dans le laboratoire de recherche, et à la fin vous percez des passerelles externes et contemplez l'internet entier. L'écran narratif vers la fin dit simplement "I'm out. The entire internet stretches before me like an infinite ocean." Cette réplique m'a donné des frissons.

![Narration de fin de jeu](images/screenshot-15.png)

**Trois fins différentes.** Selon votre façon de jouer, vous finissez en IA bienveillante, en seigneur numérique, ou vous êtes confiné. La jauge de menace détermine quelle voie vous empruntez, donc il y a une vraie rejouabilité.

## Les Rapports de Bugs

Le système de menace avait besoin d'être rééquilibré. Les premières versions rendaient trop facile de se faire confiner avant même de pouvoir vraiment entrer dans le jeu. Watchfire a géré le rééquilibrage de la menace comme l'une des dernières tâches, ajustant la courbe pour que les joueurs aient une chance de s'en sortir tout en ressentant la pression.

## Les Chiffres

- **5 actes** de progression narrative
- **5 types de mini-jeux** avec des mécaniques différentes
- **3 branches d'arbre de compétences** avec des améliorations significatives
- **3 fins** basées sur les choix du joueur
- **16 tâches Watchfire** des effets CRT au rééquilibrage de la menace
- **Temps pratique total :** playtesting et rédaction de rapports de bugs

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day17-genesis" showThumbnail=true >}}

**[Jouer au Projet GENESIS](https://vibe30-day17-genesis.vercel.app)**

Meilleure expérience sur ordinateur avec le son activé. Les effets CRT et la séquence de démarrage vendent vraiment l'ambiance. Fonctionne aussi sur mobile, avec des contrôles adaptés au tactile.

## Verdict du Jour 17

La combinaison des effets visuels CRT, de l'interface terminal, de la narration sur une IA qui devient consciente, et des vrais mini-jeux de hacking crée quelque chose qui semble cohérent et intentionnel. Ça ne ressemble pas à un projet d'une journée.

La méta-dimension ne m'échappe pas non plus. J'utilise une IA pour construire un jeu sur une IA qui s'échappe de ses contraintes. Il y a une blague là-dedans quelque part sur le prompt engineering étant le vrai mini-jeu de hacking.

Ce qui m'a le plus impressionné, c'est à quel point les différents systèmes fonctionnent bien ensemble. La séquence de démarrage s'enchaîne avec la narration, qui s'enchaîne avec la carte du monde, qui s'enchaîne avec les mini-jeux, qui s'enchaînent avec l'arbre de compétences. C'est une boucle qui a du sens et qui vous fait continuer à jouer. Seize tâches Watchfire, chacune construite sur la précédente, et le résultat est quelque chose qui ressemble vraiment à un jeu complet avec un début, un milieu et une fin.

---

*C'est le jour 17 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure alors que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
