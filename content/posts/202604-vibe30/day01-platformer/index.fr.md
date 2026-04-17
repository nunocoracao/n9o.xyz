---
title: "30 jours de Vibe Coding - Jour 1 - Platformer"
description: "Un jeu de plateforme dans le navigateur avec 10 niveaux, construit avec du JavaScript vanilla et HTML5 Canvas."
summary: "Un jeu de plateforme dans le navigateur avec 10 niveaux, construit avec du JavaScript vanilla et HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-01", "javascript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 1
seriesOpened: false
date: 2026-04-06
draft: false
#type: "hidden"
---

Jour 1. Voyons ce qui se passe quand je demande à une IA de me créer un jeu.

## Le Prompt

J'ai commencé avec ceci :

> "Je veux créer un jeu de plateforme web avec 10 niveaux"

C'est tout. C'était l'intégralité de la direction créative.

## Comment C'est Été Construit

C'est l'un des premiers projets pour lesquels j'ai utilisé [Watchfire](https://watchfire.io). J'ai donné ce prompt unique et il a décomposé le travail en 21 tâches distinctes :

1. Configuration du projet et canvas de jeu
2. Moteur de jeu principal avec boucle de jeu et rendu
3. Personnage joueur avec mouvements et animations
4. Physique et détection des collisions
5. Système de plateformes et d'obstacles
6. Système de niveaux avec chargeur et caméra
7. Niveaux faciles (1-3)
8. Niveaux moyens (4-6) avec dangers
9. Niveaux difficiles (7-10)
10. Système UI/HUD
11. États de jeu et menus
12. Système audio avec effets sonores 8 bits et musique
13. Finition, système de sauvegarde, contrôles tactiles

Puis sont venus les rapports de bugs : correction de compatibilité navigateur, restructuration pour le déploiement, et plusieurs bugs de gameplay que j'ai détectés lors des tests.

Je n'étais pas là à approuver chaque modification de fichier. Watchfire a mis les tâches en file d'attente et les a traitées. Je suis revenu à un jeu fonctionnel, puis je l'ai testé.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce Que J'ai Obtenu

Je ne m'attendais pas à ça.

![Menu principal](images/screenshot-01.webp)

**Il a de vrais graphismes.** Pas des carrés de remplacement. Il y a un petit personnage avec des yeux, des plateformes aux couleurs différentes, des effets de particules quand on atterrit. L'ensemble a un style visuel cohérent que je n'avais absolument pas spécifié.

**Il a de la musique.** Une musique de fond 8 bits qui tourne en boucle pendant le jeu. Je n'avais jamais demandé d'audio. Il l'a simplement ajoutée.

![Gameplay niveau 1](images/screenshot-02.webp)

**Les niveaux deviennent vraiment plus difficiles.** Le niveau 1 est un tutoriel doux appelé "Premiers pas". Au niveau 4, il y a des pics ("Danger devant"). Le niveau 7 s'appelle "Démon de la vitesse". La courbe de difficulté existe et a du sens.

![Niveau 4 avec dangers](images/screenshot-05.webp)

**Il y a un système de menus complet.** Menu principal, sélection de niveau, écran de pause, écran de fin de partie, écran de niveau terminé. Je peux choisir n'importe quel niveau que j'ai débloqué. C'est bien plus abouti que ce que j'avais demandé.

![Sélection de niveau](images/screenshot-06.webp)

**Il sauvegarde ma progression.** Fermez le navigateur, revenez plus tard, mes niveaux débloqués sont toujours là. Une persistance localStorage que je n'avais pas demandée.

**18 modules.** GameEngine, Player, Physics, Camera, LevelLoader, LevelManager, ParticleSystem, AudioManager, SaveManager, TouchControls... il a construit une architecture correcte avec séparation des responsabilités. Chaque module a une responsabilité claire. Je n'avais rien spécifié de tout cela.

## Les Rapports de Bugs

Ce n'était pas parfait dès le premier essai. J'ai dû tester et signaler des problèmes :

- "Je ne vois qu'un carré bleu" (compatibilité navigateur, nécessitait un polyfill roundRect)
- "Le niveau ne se termine pas quand j'atteins le drapeau"
- "Le joueur continue d'aller à droite quand je commence le niveau suivant"
- "La sélection de niveau charge toujours le niveau 1"
- "La musique est trop répétitive"

Des descriptions simples. Je n'ai rien débogué moi-même, j'ai juste décrit ce que je voyais. Les corrections sont revenues et ont fonctionné.

![Niveau 7](images/screenshot-07.webp)

![Fin de partie](images/screenshot-08.webp)

## Les Chiffres

- **18 modules de jeu** avec séparation claire des responsabilités
- **10 niveaux** avec des définitions de niveaux en JSON
- **~3 500 lignes de JavaScript vanilla** (pas de framework pour le jeu lui-même)
- **21 tâches Watchfire** de la configuration initiale aux corrections de bugs finaux
- **Temps total en main propre :** peut-être 30 minutes de tests et de rédaction de rapports de bugs

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day01-ThePlatformer" showThumbnail=true >}}

**[Jouer au Platformer](https://vibe30-day01-the-platformer.vercel.app)**

Touches fléchées ou WASD pour se déplacer, espace pour sauter. Fonctionne aussi sur mobile.

## Verdict du Jour 1

Un prompt d'une phrase. Un jeu complet avec 10 niveaux, de la musique, des menus et un système de sauvegarde.

Voilà la chose : je n'ai pas écrit de moteur de jeu depuis plus d'une décennie — pas depuis l'université. J'avais tout oublié de la détection de collisions et des systèmes de progression de niveaux. Je n'aurais pas pu le construire moi-même. Pas en un jour, probablement pas en une semaine.

Est-ce le meilleur jeu de plateforme jamais fait ? Loin de là. Mais il existe. Il fonctionne. Les gens peuvent y jouer. Et ça m'a pris quelques heures au lieu de semaines. C'est ça qui a changé. Le coût de production de quelque chose d'aussi complexe vient de chuter radicalement. Et si je le voulais, je pourrais continuer à le peaufiner, ajouter des niveaux, améliorer la physique. Le point de départ n'est plus un fichier vide.

Je pense que ce sera un schéma récurrent sur l'ensemble des 30 projets. Je ne vais pas construire la meilleure version de quoi que ce soit. Mais je vais construire une version fonctionnelle de choses que je n'aurais pas pu construire avant, et je vais le faire rapidement.

---

*C'est le jour 1 des [30 jours de Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours avec du codage assisté par IA.*
