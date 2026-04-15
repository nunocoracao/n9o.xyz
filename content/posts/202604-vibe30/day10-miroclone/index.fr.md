---
title: "30 Days of Vibe Coding - Jour 10 - Clone de Miro"
description: "Un tableau blanc à canevas infini local-first avec des formes, des post-it, des connecteurs, des calques et un mode présentation."
summary: "Un tableau blanc à canevas infini local-first avec des formes, des post-it, des connecteurs, des calques et un mode présentation."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-10", "typescript", "canvas", "whiteboard"]
series: ["30 Days of Vibe Coding"]
series_order: 10
seriesOpened: false
date: 2026-04-15
draft: false
---

Jour 10. J'ai demandé un clone de Miro. Un canevas infini complet avec des formes, des connecteurs, des calques et un mode présentation.

## Le Prompt

> "Construis une app de tableau blanc à canevas infini comme Miro. Local-first, TypeScript, HTML5 Canvas."

C'était le point de départ. Tout le reste est venu du découpage en tâches.

## Comment Ça a Été Construit

Celui-là était énorme. Watchfire l'a découpé en 27 tâches, c'est le plus que j'ai vu jusqu'ici dans ce challenge. Le découpage couvrait :

1. Les formes et outils de dessin (rectangles, ellipses, lignes, flèches)
2. L'outil stylo à main levée
3. Les éléments texte
4. Les post-it avec code couleur
5. Les connecteurs intelligents entre les formes
6. La grille et l'accrochage à la grille
7. L'historique annuler/rétablir
8. L'export en PNG et JSON
9. Le panneau de calques
10. Le sélecteur de couleurs
11. Les contrôles de zoom et de déplacement
12. Les raccourcis clavier pour tout
13. Le mode sombre
14. L'écran de bienvenue avec l'onboarding
15. Le mode présentation

27 tâches, c'est beaucoup. Mais elles étaient bien cadrées. Chacune ajoutait un morceau de fonctionnalité spécifique sans casser ce qui venait avant.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce Que J'ai Obtenu

Ce truc est étonnamment complet.

![Canevas principal avec post-it et connecteurs](images/screenshot-01.png)

**Ça ressemble à un vrai outil de tableau blanc.** Tu l'ouvres et il y a un canevas infini avec une grille en pointillés. Tu peux te déplacer, zoomer, poser des formes, écrire du texte, relier des choses avec des flèches. La boucle de base du tableau blanc fonctionne tout simplement.

![Écran de bienvenue avec les raccourcis](images/screenshot-02.png)

**Il y a un vrai écran de bienvenue.** Il te montre les raccourcis clavier et comment démarrer. Tu peux le fermer et cocher une case pour ne plus le voir. Petite touche, mais ça donne à l'app une impression de produit fini.

![Formes et connecteurs](images/screenshot-04.png)

**Les connecteurs sont intelligents.** Tu traces une ligne entre deux formes et elle s'accroche aux points de connexion. Déplace une forme et le connecteur suit. C'est le genre de fonctionnalité qui sépare une app de dessin d'un outil de diagramme.

![Panneau de calques](images/screenshot-06.png)

**Le panneau de calques fonctionne vraiment.** Chaque élément apparaît dans une liste latérale. Tu peux voir la hiérarchie, réorganiser les choses, et gérer ce qui est au-dessus de quoi. C'est comme un mini panneau de calques à la Figma.

![Superposition des raccourcis clavier](images/screenshot-05.png)

**Des raccourcis clavier pour tout.** V pour sélectionner, R pour rectangle, O pour ellipse, P pour stylo, T pour texte, S pour post-it. Plus tous les trucs standards comme Cmd+Z pour annuler, Cmd+Shift+Z pour rétablir. Il y a une superposition complète des raccourcis que tu peux afficher avec ?.

![Dessin à main levée](images/screenshot-07.png)

**L'outil stylo est fluide.** J'ai dessiné un visage juste pour tester. Les traits sont réactifs et naturels. Pas sensible à la pression ni rien de fancy, mais suffisamment bien pour esquisser des idées pendant un brainstorm.

## Les Rapports de Bugs

Celui-là était relativement propre. Avec 27 tâches, je m'attendais à plus de problèmes, mais l'approche incrémentale a fait que chaque pièce était testée avant que la suivante n'arrive. Les principaux trucs que j'ai remarqués :

- Les post-it chevauchaient parfois le texte quand on les redimensionnait trop petit
- La mini-carte dans le coin pouvait se désynchroniser après de gros zooms
- L'export en PNG coupait parfois des éléments aux bords du canevas

Rien de majeur. L'expérience de base du tableau blanc était solide dès le début.

## Les Chiffres

- **27 tâches Watchfire** de la configuration du canevas au mode présentation
- **TypeScript + Vite** avec rendu HTML5 Canvas
- **Suite d'outils complète :** sélection, déplacement, rectangle, ellipse, ligne, flèche, connecteur, stylo, texte, post-it
- **Mode sombre, calques, export, raccourcis clavier, mode présentation**
- **Zéro bibliothèque UI externe.** Tout est construit sur mesure sur canevas

## Essaie-le

{{< github repo="nunocoracao/Vibe30-day10-miroclone" showThumbnail=true >}}

**[Ouvrir le Tableau Blanc](https://vibe30-day10-miroclone.vercel.app)**

Fonctionne mieux sur desktop. Utilise les raccourcis clavier pour l'expérience complète.

## Verdict du Jour 10

Un canevas infini avec déplacement et zoom, plusieurs outils de forme, dessin à main levée, connecteurs intelligents, un système de calques, annuler/rétablir, export, mode sombre, et un mode présentation. Ça fait beaucoup de fonctionnalités pour une seule journée.

Ce qui ressort, c'est l'architecture. Le code est découpé en modules propres pour la gestion des entrées, le rendu, la gestion d'état, les outils et l'UI. Chaque outil est son propre module. La gestion d'état s'occupe de l'historique pour annuler/rétablir. Ce n'est pas un prototype bricolé, c'est une app correctement structurée.

Est-ce que ça pourrait remplacer Miro ? Non. Pas de collaboration, pas de synchronisation en temps réel, pas de stockage cloud. Mais en tant qu'outil local-first de croquis et de diagramme ? C'est étonnamment utilisable. Je me suis surpris à poser des idées dessus pour de vrai au lieu de juste le tester.

Un tiers du challenge terminé. L'ampleur de ce qui rentre dans une seule journée continue de s'étendre.

---

*C'est le jour 10 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suis l'aventure pendant que je livre 30 projets en 30 jours avec du coding assisté par IA.*
