---
title: "30 Days of Vibe Coding - Jour 5 - Breakout"
description: "Un jeu d'arcade Breakout classique avec 5 niveaux, des power-ups, un système de combo, et des effets de particules, construit avec TypeScript et HTML5 Canvas."
summary: "Un jeu d'arcade Breakout classique avec 5 niveaux, des power-ups, un système de combo, et des effets de particules, construit avec TypeScript et HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-05", "typescript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 5
seriesOpened: false
date: 2026-04-10
draft: false
---

Jour 5. Encore un grand classique de l'arcade. Cette fois, je voulais voir ce qui se passe quand je demande un Breakout.

## Le Prompt

> "Je veux créer un jeu d'arcade de style Breakout/Arkanoid avec plusieurs niveaux, des power-ups, un système de combo, et une physique fluide"

Un peu plus précis que certains de mes prompts précédents. Au jour 5, j'apprenais qu'être légèrement plus intentionnel avec les fonctionnalités souhaitées dès le départ permet d'éviter de devoir remonter des bugs plus tard.

## Comment C'a Été Construit

J'ai de nouveau utilisé [Watchfire](https://watchfire.io) pour celui-ci. On peut le voir dans le package.json, qui est automatiquement nommé avec un préfixe `watchfire-0000`. J'ai fourni le prompt et il s'est occupé du reste. L'intégralité du jeu tient dans un seul composant React encapsulant un HTML5 Canvas, un schéma que j'ai vu plusieurs fois dans ces constructions quotidiennes. Pas l'architecture la plus propre, mais ça fonctionne et ça se livre.

La stack technique est Next.js avec TypeScript et Tailwind CSS. Le rendu du jeu est entièrement basé sur Canvas, React gérant l'interface superposée pour les menus et les écrans de pause.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce Que J'ai Obtenu

Un clone de Breakout entièrement jouable avec bien plus de finition que prévu.

![Début du niveau 1 avec la grille complète de briques](images/screenshot-01.png)

**Cinq niveaux avec des motifs uniques.** "Le Début" est une grille standard complète. "Formation Diamant" dispose les briques en forme de diamant. "Forteresse" construit des murs avec des espaces. "Vagues" alterne les rangées. "Le Défi Final" est un motif dense et superposé. Chaque niveau augmente le multiplicateur de vitesse de la balle, passant de 1,0x à 1,5x.

![Mi-partie avec traînée de balle et briques qui se brisent](images/screenshot-02.png)

**Les power-ups comptent vraiment.** Quatre types tombent des briques brisées : palette large (10 secondes), balle lente (8 secondes), multi-balle (se divise en plusieurs balles jusqu'à ce que vous les perdiez), et vie supplémentaire (instantanée). Les briques "super" spéciales ont le double des chances de faire tomber un power-up. Les power-ups descendent comme des orbes lumineux que vous attrapez avec votre palette.

![Destruction des briques avec des power-ups actifs](images/screenshot-03.png)

**Le système de combo ajoute de la profondeur.** Les enchaînements de frappes construisent un multiplicateur de score jusqu'à 3x. Le combo diminue après 2 secondes sans frappe, vous incitant à garder la balle en mouvement rapide et à frapper les briques en succession rapide. C'est un petit détail, mais il change votre façon de jouer.

![Niveau avancé avec disposition de briques clairsemée](images/screenshot-04.png)

**Des effets visuels partout.** Des explosions de particules quand les briques se brisent. Un effet de traînée pour la balle. Des tremblements d'écran sur certains impacts. Des effets de flash. Un fond d'étoiles scintillantes. Les briques ont un jeu de couleurs dégradé néon avec des rangées rose vif, orange, jaune, vert et cyan. Rien de tout cela n'était strictement nécessaire pour un jeu de Breakout, mais cela donne vie à l'ensemble.

![Niveau 2 avec formation en diamant](images/screenshot-05.png)

**Trois types de briques.** Les briques normales se brisent en un coup. Les briques solides nécessitent plusieurs coups (elles ont un indicateur de PV visible). Les briques super sont encore plus résistantes et ont une plus grande chance de faire tomber un power-up. Les motifs de niveaux mélangent ces types pour créer différents défis.

## Les Rapports de Bugs

Honnêtement, celui-ci était plutôt propre. La physique était bonne dès le départ, le mouvement de la palette était fluide avec la souris et le clavier, et les niveaux se chargeaient correctement. Pas de bugs majeurs à signaler pour cette construction.

## Les Chiffres

- **5 niveaux** avec des motifs de briques uniques et une difficulté croissante
- **4 types de power-ups** avec des durées limitées dans le temps
- **~2 300 lignes de TypeScript** dans un seul composant de jeu
- **3 types de briques** (normale, solide, super)
- **3 méthodes de contrôle :** clavier, souris et tactile

## Essayez-Le

{{< github repo="nunocoracao/Vibe30-day05-breakout" showThumbnail=true >}}

**[Jouer à Breakout](https://vibe30-day05-breakout.vercel.app)**

Souris ou touches fléchées pour déplacer la palette. Espace ou clic pour lancer la balle. P ou Échap pour mettre en pause.

## Verdict du Jour 5

Cinq jours passés et je remarque un schéma. Ces jeux basés sur Canvas sont un point de douceur pour le codage assisté par IA. La portée est claire, les règles sont bien définies, et il y a un moyen immédiat de tester si ça fonctionne : il suffit de jouer.

Ce qui m'a surpris ici, c'est le système de particules et la finition visuelle. Je n'avais pas demandé de tremblements d'écran, de traînées de balle, ni de fond étoilé. L'IA a simplement décidé que le jeu se sentirait mieux avec ces éléments, et elle avait raison. Le système de combo était également une belle touche. Il transforme un simple jeu "rebondir la balle, casser des briques" en quelque chose où vous pensez réellement aux angles et au timing.

Va-t-il concurrencer le vrai Arkanoid ? Non. Mais c'est un jeu complet avec plusieurs niveaux, des power-ups, et un système de score qui vous donne vraiment envie de rejouer les niveaux. Construit en une journée, à partir d'un seul prompt.

---

*C'est le jour 5 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez-moi pendant que je livre 30 projets en 30 jours grâce au codage assisté par IA.*
