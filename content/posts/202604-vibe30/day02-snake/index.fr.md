---
title: "30 Days of Vibe Coding - Jour 2 - Snake"
description: "Un jeu Snake dans le style du Nokia 3310, avec des graphismes LCD authentiques, des effets sonores rétro et un cadre de téléphone complet."
summary: "Un jeu Snake dans le style du Nokia 3310, avec des graphismes LCD authentiques, des effets sonores rétro et un cadre de téléphone complet."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-02", "typescript", "react", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 2
seriesOpened: false
date: 2026-04-07
draft: false
---

Jour 2. Je voulais quelque chose de nostalgique.

## Le Prompt

J'ai opté pour ceci :

> "Crée un jeu Snake dans le style du Nokia 3310. Écran vert LCD, blocs pixelisés, tout le tralala. Mets-le dans un cadre de téléphone."

C'était à peu près tout le cahier des charges. J'avais une image claire en tête mais n'ai donné aucun détail d'implémentation.

## Comment C'est Construit

[Watchfire](https://watchfire.io) a pris ce prompt et l'a décomposé en tâches couvrant le moteur de jeu, le style visuel Nokia, les effets sonores, les contrôles mobiles et l'interface du cadre de téléphone. La logique du jeu, le rendu LCD, l'affichage du score à sept segments — tout cela est sorti de ce seul prompt.

Je ne suis pas resté là à guider chaque décision. J'ai décrit l'ambiance que je voulais et je suis revenu sur quelque chose de jouable.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce Que J'ai Obtenu

Celui-ci m'a surpris par la profondeur qu'il a atteinte sur le plan esthétique.

![Écran de démarrage avec cadre de téléphone Nokia](images/screenshot-01.png)

**Il a construit un téléphone entier.** Pas seulement un canvas de jeu. Un cadre Nokia 3310 complet avec une grille de haut-parleur, le logo NOKIA, un D-pad, des boutons d'action et un cadre d'écran en relief. Le corps du téléphone a des dégradés et des ombres qui lui donnent un aspect tridimensionnel. J'ai demandé un cadre de téléphone. J'ai eu un téléphone.

![Gameplay avec grille LCD](images/screenshot-02.png)

**L'écran LCD est authentique.** Le vert Nokia classique (#9bbc0f pour les curieux), avec une grille de pixels visible, une superposition de lignes de balayage et un effet de reflet sur le coin de l'écran. Chaque cellule de la grille a un léger espacement pour simuler de vrais segments LCD. La tête du serpent a même de petits yeux pixelisés.

**Il dispose d'un affichage de score à sept segments.** Pas seulement un chiffre à l'écran. Un véritable affichage LCD à sept segments rendu en SVG, positionné en dehors de l'écran de jeu, comme l'affichage secondaire du téléphone. Score et meilleur score, tous deux rendus avec un fantôme de segment inactif approprié.

![Le serpent qui grandit en cours de partie](images/screenshot-03.png)

**La nourriture pulse.** Il y a une animation sinusoïdale sur le bloc de nourriture qui lui fait battre doucement. Le serpent accélère à chaque fois qu'il mange. Il commence à 150 ms par tick et descend jusqu'à un minimum de 50 ms. La courbe de difficulté est intégrée dans la boucle de jeu, pas codée en dur par niveau.

**Effets sonores rétro.** Sons à oscillateur en onde carrée générés via l'API Web Audio. Tons ascendants au démarrage, un pépiement joyeux quand vous mangez, tons descendants tristes en fin de partie. Tout est synthétisé à l'exécution, sans fichiers audio. Votre préférence de mise en sourdine est même sauvegardée dans localStorage.

![Écran de fin de partie avec meilleur score](images/screenshot-04.png)

**Persistance du meilleur score.** Il sauvegarde votre meilleur score dans localStorage et affiche un message "NEW HIGH SCORE !" avec une animation de pulse quand vous le battez. L'écran de fin de partie possède une icône de crâne en pixel art construite à partir d'une grille CSS.

**Contrôles mobiles.** Sur les appareils tactiles, il affiche un D-pad avec un bouton pause central. Sur bureau, il affiche des boutons décoratifs correspondant à l'esthétique du téléphone. Il détecte le type d'appareil et s'adapte. Des contrôles par glissement sont également disponibles en solution de repli.

**Cadre de téléphone commutable.** Vous pouvez basculer entre le cadre complet du téléphone Nokia et une vue minimale avec seulement l'écran de jeu. La préférence persiste dans localStorage.

## Les Chiffres

- **8 modules sources** (GameBoard, StartScreen, GameOverScreen, PauseOverlay, ScoreDisplay, useSnakeGame, useSound, plus la mise en page)
- **~2 100 lignes de TypeScript et React**
- **Aucune bibliothèque de jeu externe** (Next.js et React uniquement, la logique du jeu repose sur des hooks et Canvas personnalisés)
- **5 effets sonores synthétisés** via l'API Web Audio
- **Temps total de manipulation :** peut-être 20 minutes de jeu et d'ajustement du prompt

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day02-Snake" showThumbnail=true >}}

**[Jouer à Snake II](https://vibe30-day02-snake.vercel.app)**

Touches fléchées ou WASD pour se déplacer, espace pour mettre en pause. Fonctionne sur mobile avec les contrôles D-pad.

## Verdict du Jour 2

J'ai demandé un jeu Snake dans un cadre Nokia. J'ai obtenu une simulation complète de téléphone avec audio synthétisé, affichages à sept segments, effets de lignes de balayage LCD et persistance localStorage pour les scores, les préférences sonores et la visibilité du cadre.

Ce qui ressort, c'est la quantité de travail consacrée à des détails que je n'avais jamais demandés. Le reflet de l'écran. Les points de la grille du haut-parleur. L'animation de pulse sur la nourriture. Le crâne en pixel art sur l'écran de fin de partie. Ce sont des décisions de finition qui prendraient des heures à implémenter à la main, et elles sont apparues gratuitement.

Aurais-je pu construire Snake moi-même ? Probablement, avec suffisamment de temps. Mais j'aurais fait un carré vert sur une grille avec un compteur de score. Je n'aurais pas construit un simulateur Nokia 3310 avec audio chiptune synthétisé et contrôles mobiles adaptatifs. L'écart entre ce que j'aurais construit et ce que j'ai obtenu est tout l'enjeu de ce défi.

Deux jours, deux jeux livrés. Le schéma du Jour 1 se confirme : le point de départ n'est plus un fichier vide, et le point d'arrivée est bien au-delà de ce que j'aurais visé par moi-même.

---

*Ceci est le jour 2 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours avec du code assisté par IA.*
