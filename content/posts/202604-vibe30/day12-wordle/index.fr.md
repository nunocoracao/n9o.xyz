---
title: "30 Days of Vibe Coding - Jour 12 - Wordle"
description: "Un clone complet de Wordle avec des animations, thème sombre/clair, mode difficile, mode daltonien, effets sonores et confettis de célébration."
summary: "Un clone complet de Wordle avec des animations, thème sombre/clair, mode difficile, mode daltonien, effets sonores et confettis de célébration."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-12", "react", "nextjs", "typescript", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 12
seriesOpened: false
date: 2026-04-17
draft: false
#type: "hidden"
---

Jour 12. Tout le monde a joué à Wordle. Voyons à quel point l'IA peut s'en approcher.

## Le Prompt

> "Construis un clone de Wordle avec une vraie liste de mots, des animations de tuiles, un clavier, un suivi des statistiques et une fonctionnalité de partage."

## Comment ça a été construit

Celui-ci est passé par 7 tâches Watchfire, et observer la progression était intéressant parce que ça reflète la façon dont on construirait réellement un jeu bien fini si on avait une patience infinie.

1. **Moteur de jeu avec listes de mots.** La base : une liste de solutions d'environ 2 300 mots, une liste de devinettes valides d'environ 10 000 mots, et la logique d'évaluation des tentatives. Vert, jaune, gris. Les fondamentaux.
2. **Interface soignée avec animations de tuiles et clavier.** Les tuiles se retournent lors de la révélation, sautent à la saisie, tremblent pour les mots invalides. Un clavier à l'écran qui met à jour les couleurs des lettres au fur et à mesure qu'on joue.
3. **Statistiques et partage.** Pourcentage de victoires, graphique en barres de distribution des tentatives, suivi de la série en cours et de la série maximale. Le bouton de partage copie la grille d'emojis dans le presse-papiers, exactement comme le vrai Wordle.
4. **Modal d'aide, thème sombre/clair, mode difficile.** Un écran explicatif avec des exemples visuels. Basculement de thème avec des transitions fluides. Le mode difficile oblige à utiliser les indices révélés dans les tentatives suivantes.
5. **Mode daltonien, accessibilité, correction de bug React refs.** Des couleurs à fort contraste pour les joueurs daltoniens. Cette tâche a aussi détecté et corrigé un bug React refs qui causait des problèmes avec les animations de tuiles.
6. **Effets sonores avec Web Audio API.** Retour audio pour les pressions de touches, les révélations de tuiles, les victoires et les erreurs. Tout est généré avec la Web Audio API, donc aucun fichier audio à charger.
7. **Confettis de célébration à la victoire.** Un système de particules basé sur le canvas qui se déclenche quand on résout le puzzle. Parce qu'on l'a mérité.

Le tout vit dans un seul hook React personnalisé (`useWordle.ts`) pour la logique de jeu, avec l'interface en tant que page Next.js. Séparation propre.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Wordle dark mode gameplay](images/screenshot-01.png)

**Ça ressemble à Wordle.** C'était la barre à franchir, et c'est réussi. L'animation de retournement de tuile lors de la révélation, le petit rebond quand on tape une lettre, le tremblement quand on entre un mot invalide. Ces micro-interactions sont ce qui rend le vrai Wordle agréable à jouer, et elles sont toutes là.

![Wordle light mode](images/screenshot-02.png)

**Thèmes sombre et clair.** Les deux sont soignés. Le mode sombre est celui par défaut (comme il se doit), mais le mode clair marche bien aussi. Le basculeur est dans l'en-tête, les transitions sont fluides.

![Statistics modal](images/screenshot-03.png)

**Des statistiques qui persistent.** Parties jouées, pourcentage de victoires, série en cours, série maximale, et un graphique de distribution des tentatives. Tout est stocké dans localStorage, donc les stats survivent entre les sessions. Le bouton de partage formate les résultats en grille d'emojis, prêts à coller n'importe où.

![Settings with hard mode and colorblind mode](images/screenshot-04.png)

**Des réglages qui comptent.** Le mode difficile est une vraie contrainte, pas juste un label. Si on révèle que le mot a un A en position 3, chaque tentative suivante doit avoir un A en position 3. Le jeu l'applique et explique pourquoi la tentative a été refusée. Le mode daltonien remplace le vert et le jaune par de l'orange et du bleu, ce qui est un petit détail qui rend le jeu jouable pour beaucoup plus de monde.

**Des effets sonores sans fichiers audio.** L'approche Web Audio API est astucieuse. Pas de mp3 à charger, pas de sprites audio, pas de préchargement. Les sons sont synthétisés à la volée. Un clic doux pour la saisie, une séquence de tons satisfaisante pour les révélations de tuiles, une petite fanfare pour la victoire. Ils ajoutent beaucoup sans ajouter de poids au téléchargement.

**Des confettis qui font mouche.** Gagnez la partie et des particules canvas explosent depuis le centre de l'écran. C'est un petit détail, mais ça transforme un moment discret "tu l'as trouvé" en une célébration.

## Les rapports de bugs

Le problème React refs de la tâche 5 était le seul vrai bug. Les animations de retournement de tuiles ne se déclenchaient pas de manière constante à cause de la façon dont React gérait les refs pendant les re-renders. Watchfire l'a détecté pendant la passe d'accessibilité et l'a corrigé dans la même tâche. Pas besoin de créer un rapport séparé pour celui-là.

En dehors de ça, le jeu fonctionnait correctement dès le départ. Les mots valides étaient acceptés, les mots invalides étaient rejetés avec un tremblement, les couleurs du clavier se mettaient à jour correctement, et le mode difficile appliquait ses règles proprement.

## Les chiffres

- **~2 300 mots solutions** et **~10 000 devinettes valides**
- **7 tâches Watchfire** du moteur de jeu nu aux confettis
- **1 hook personnalisé** (`useWordle.ts`) contenant toute la logique de jeu
- **Web Audio API** pour des effets sonores sans téléchargement
- **Système de particules canvas** pour les célébrations de victoire
- **localStorage** pour la persistance des statistiques et de l'état du jeu

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day12-wordle" showThumbnail=true >}}

**[Jouer à Wordle](https://vibe30-day12-wordle.vercel.app)**

Tapez un mot de 5 lettres et appuyez sur Entrée. Vert signifie bonne lettre, bon emplacement. Jaune signifie bonne lettre, mauvais emplacement. Gris signifie que la lettre n'est pas dans le mot. Six essais pour trouver.

## Verdict du Jour 12

Wordle est un de ces jeux qui paraissent simples jusqu'à ce qu'on essaie de le construire. La logique de base est simple, mais c'est la finition qui fait que ça marche. Les animations, le retour du clavier, les statistiques, la fonctionnalité de partage, l'application du mode difficile. Enlevez n'importe lequel de ces éléments et ça ne ressemble plus à Wordle.

Ce qui m'a impressionné ici, c'est la progression. La tâche 1 m'a donné un jeu de devinettes de mots fonctionnel mais moche. À la tâche 7, il avait tout ce que le vrai Wordle a, plus des effets sonores et des confettis. Chaque tâche a ajouté une catégorie spécifique de finition, et aucune n'a cassé ce qui avait été fait avant. C'est pas facile à faire avec des animations et la gestion d'état en React.

Le choix de la Web Audio API pour les effets sonores était une bonne surprise. Je m'attendais à ce qu'il utilise des fichiers audio. Au lieu de ça, il génère les sons de manière programmatique, ce qui signifie zéro asset supplémentaire et une lecture instantanée. Un compromis intelligent.

Le pattern tient bon. Chaque jour ajoute de la finition, et rien n'a encore lâché.

---

*C'est le jour 12 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure alors que je livre 30 projets en 30 jours en utilisant le codage assisté par IA.*
