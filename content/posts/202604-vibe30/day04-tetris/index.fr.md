---
title: "30 Days of Vibe Coding - Jour 4 - Tetris"
description: "Un jeu Tetris classique avec des blocs au style 3D, le thème Korobeiniki, des effets sonores et toutes les fonctionnalités que l'on attend d'un vrai clone de Tetris."
summary: "Un jeu Tetris classique avec des blocs au style 3D, le thème Korobeiniki, des effets sonores et toutes les fonctionnalités que l'on attend d'un vrai clone de Tetris."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-04", "typescript", "nextjs", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 4
seriesOpened: false
date: 2026-04-09
draft: false
#type: "hidden"
---

Jour 4. Tout le monde connaît Tetris. C'est ce qui en fait un bon test. Vous savez exactement ce que ça devrait ressentir, donc vous remarquez immédiatement quand quelque chose cloche.

## Le Prompt

> « Je veux créer un jeu Tetris en ligne avec des blocs au style 3D, de la musique et des effets sonores »

## Comment C'est Été Construit

Celui-ci est passé par [Watchfire](https://watchfire.io) comme les autres. Le nom du package dans le dépôt raconte l'histoire : `watchfire-0001-initialize-nextjs-project-with`. Tout a commencé avec un seul prompt et Watchfire l'a décomposé en tâches couvrant la configuration du projet, la gestion de l'état du jeu, le rendu du plateau, les définitions des pièces avec leurs états de rotation, le système audio et les composants d'interface.

L'architecture choisie était React avec des hooks. Trois hooks personnalisés gèrent la logique centrale : `useGameState` pour le réducteur de jeu et la boucle de tick, `useGameMusic` pour le thème Korobeiniki, et `useSoundEffects` pour tous les sons du jeu. L'état du jeu lui-même est un vrai réducteur avec des actions pour chaque déplacement, rotation, chute rapide et pause. Les wall kicks, l'effacement des lignes, la progression des niveaux, le score. Tous les fondamentaux de Tetris.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce Que J'ai Obtenu

Celui-ci m'a vraiment surpris.

![Tetris 3D en cours de partie](images/screenshot-01.png)

**Les blocs ont une vraie profondeur.** Chaque type de tétromino possède son propre schéma de couleurs avec une couleur principale, un reflet clair sur les bords en haut à gauche, une ombre sombre sur les bords en bas à droite, et un effet de halo. La pièce I est cyan avec un doux halo bleu. La pièce T est violette. La pièce Z est rouge. Elles ressemblent à de petits bonbons 3D posés sur une grille sombre. J'avais demandé des « blocs au style 3D » et le résultat a l'air véritablement soigné.

**Il joue le thème Korobeiniki.** La vraie mélodie de Tetris, générée en temps réel grâce à la Web Audio API. Aucun fichier audio. Il crée des oscillateurs et des nœuds de gain à la volée, joue une mélodie en onde carrée avec une ligne de basse en onde triangulaire, et boucle de façon transparente. La musique s'accélère à mesure que vous montez de niveau, passant de 1,0x au niveau 0 à 1,5x au niveau 15. Il mémorise même votre préférence de sourdine dans le localStorage.

**Les effets sonores sont étonnamment bons.** Il y a 8 effets sonores distincts : le clic de déplacement, le whoosh de rotation, le bruit sourd de l'atterrissage d'une pièce (avec un tampon de bruit pour la texture d'impact), l'arpège d'effacement de ligne, une fanfare spéciale pour effacer quatre lignes, le swoosh de la chute rapide, un arpège descendant triste pour la fin de partie, et un jingle joyeux pour la montée de niveau. Tout est synthétisé. Aucun fichier audio nulle part.

**Il intègre toutes les vraies fonctionnalités de Tetris.** Aperçu de la prochaine pièce, suivi du score avec des multiplicateurs appropriés (100 pour une ligne, 300 pour deux, 500 pour trois, 800 pour un Tetris), progression de niveau toutes les 10 lignes, vitesse qui augmente réellement, sauvegarde du meilleur score, pause avec reprise, et un écran de fin de partie affichant vos statistiques finales par rapport à votre meilleur score.

![Partie en pause](images/screenshot-02.png)

**Les contrôles sont bien pensés.** Les touches fléchées ou WASD pour les déplacements, W ou Haut pour tourner dans le sens des aiguilles d'une montre, Z pour le sens inverse, Espace pour la chute rapide, P ou Échap pour la pause. Il dispose même de wall kicks pour que les pièces s'écartent des murs lorsque vous les faites tourner près des bords.

## Les Chiffres

- **22 fichiers sources** répartis entre composants, hooks, constantes et types
- **~2 000 lignes de TypeScript**
- **8 effets sonores synthétisés distincts** plus une bande-son bouclée complète
- **7 types de tétrominos** avec 4 états de rotation chacun (28 définitions de formes)
- **16 niveaux de vitesse** de 1 000 ms à 100 ms par tick
- **0 fichier audio** dans tout le projet

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day04-tetris" showThumbnail=true >}}

**[Jouer à Tetris](https://vibe30-day04-tetris.vercel.app)**

Touches fléchées ou WASD pour bouger, Espace pour la chute rapide, P pour la pause. Fonctionne mieux sur ordinateur.

## Verdict du Jour 4

Quatre jours ont passé et je construis des jeux classiques plus vite que je ne peux les tester. C'est le vrai goulot d'étranglement maintenant. Pas le code, pas le débogage. Les tests de jeu.

Ce clone de Tetris est vraiment agréable à jouer. Le style 3D des blocs lui donne de la personnalité, le thème Korobeiniki lui confère une authenticité, et le design sonore ajoute un retour satisfaisant à chaque action. Le fait que tout l'audio soit généré de façon procédurale à partir d'oscillateurs et de tampons de bruit est franchement impressionnant. Il n'y a aucun fichier audio dans tout ce projet.

Ce qui continue de me surprendre, c'est la complétude. J'avais demandé Tetris avec des blocs 3D et de la musique. J'ai obtenu des wall kicks, la sauvegarde du meilleur score, des multiplicateurs de score par niveau, un écran de pause avec un bouton à dégradé, l'état de sourdine sauvegardé dans le localStorage, et un panneau de fin de partie qui vous indique si vous avez battu votre meilleur score. Ce sont tous des éléments que j'aurais fini par demander, mais je n'ai pas eu à le faire.

L'implémentation des wall kicks est-elle aussi bonne que les directives officielles de Tetris ? Probablement pas. Le système de score est-il 100 % authentique ? Proche, mais je n'ai pas vérifié par rapport aux spécifications. Rien de tout cela n'a d'importance pour un projet d'une journée. Ce qui compte, c'est que ça fonctionne, que ça se ressent bien, et que quelqu'un peut y jouer dès maintenant.

---

*Ceci est le jour 4 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure alors que je livre 30 projets en 30 jours avec du code assisté par IA.*
