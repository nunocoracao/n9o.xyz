---
title: "30 Days of Vibe Coding - Jour 11 - Treelo"
description: "Un tableau kanban complet style Trello avec glisser-déposer, étiquettes, checklists, dates d'échéance, vue calendrier et suivi d'activité."
summary: "Un tableau kanban complet style Trello avec glisser-déposer, étiquettes, checklists, dates d'échéance, vue calendrier et suivi d'activité."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-11", "typescript", "nextjs", "kanban", "productivity"]
series: ["30 Days of Vibe Coding"]
series_order: 11
seriesOpened: false
date: 2026-04-16
draft: false
---

Jour 11. J'ai demandé un clone de Trello. Tableaux kanban, glisser-déposer, détails des cartes, tout le toutim.

## Le Prompt

> "Build a Trello-style kanban board app with boards, lists, cards, and drag-and-drop"

Je l'ai appelé Treelo parce que je suis très créatif avec les noms.

## Comment ça a été construit

Watchfire a découpé celui-ci en 18 tâches. Les fondamentaux sont arrivés en premier : tableaux, listes, cartes et glisser-déposer. Puis ça a continué. Les étiquettes. Les dates d'échéance. Une modale de détail de carte. Des arrière-plans personnalisés pour les tableaux. Recherche et filtrage. Archivage des cartes. Sélection multiple avec opérations groupées. Un fil d'activité. Une vue calendrier. Et ensuite une passe d'optimisation des performances à la fin pour que tout reste fluide.

Ça fait beaucoup de fonctionnalités pour un seul prompt. La plupart, je ne les avais pas explicitement demandées. Le prompt initial c'était juste les tableaux, les listes, les cartes et le glisser-déposer. Tout le reste, c'est Watchfire qui a décidé "un tableau kanban devrait aussi avoir ces trucs" et qui les a juste construits.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Vue tableau avec listes et cartes](images/screenshot-01.png)

**Ça ressemble à Trello.** La mise en page, le style des cartes, le fond bleu, les colonnes de listes. En plissant les yeux, ça pourrait passer pour le vrai. Il y a une barre du haut avec recherche, activité, calendrier et boutons de filtre. Les listes affichent le nombre de cartes. Les cartes montrent les étiquettes et les badges de date d'échéance.

![Page d'accueil des tableaux](images/screenshot-02.png)

**Plusieurs tableaux.** Il y a une page d'accueil avec les tableaux consultés récemment et un bouton "Créer un nouveau tableau". Ça garde en mémoire les tableaux que vous avez visités récemment. Simple mais fonctionnel.

![Modale de détail de carte](images/screenshot-03.png)

**La modale de détail de carte est étonnamment complète.** Cliquez sur n'importe quelle carte et vous obtenez une modale complète avec des étiquettes, un sélecteur de date d'échéance, une checklist avec suivi de progression, un champ de description, des commentaires et un journal d'activité. Sur le côté droit, il y a un ensemble d'actions : déplacer, copier, archiver. C'est le genre de truc qui prendrait des jours à construire proprement à la main.

![Panneau de filtre par étiquettes](images/screenshot-04.png)

**Les étiquettes fonctionnent vraiment.** Vous pouvez assigner des étiquettes avec code couleur aux cartes et ensuite filtrer par étiquette. Le panneau de filtre glisse depuis le côté droit. Les cartes sur le tableau affichent les couleurs de leurs étiquettes sous forme de petites bandes colorées en haut.

![Fil d'activité](images/screenshot-05.png)

**Il y a un fil d'activité.** Chaque action est enregistrée. Carte créée, carte déplacée, étiquette ajoutée, checklist terminée. Ça affiche les horodatages et décrit ce qui s'est passé. C'est une de ces fonctionnalités qui sépare un jouet de quelque chose d'utilisable. Vous pouvez vraiment retracer ce qui s'est passé sur un tableau.

![Vue calendrier](images/screenshot-06.png)

**Une vue calendrier.** Basculez de la vue tableau vers un calendrier et voyez toutes vos cartes avec dates d'échéance disposées sur une grille mensuelle. Les cartes sans date d'échéance apparaissent dans une barre latérale. C'est une façon vraiment utile de voir ce qui arrive.

![Détail de carte depuis le calendrier](images/screenshot-07.png)

**Les modales de carte fonctionnent aussi depuis le calendrier.** Cliquez sur une carte dans le calendrier et la même modale de détail s'ouvre. Dates d'échéance, étiquettes, tout est accessible depuis les deux vues.

![Arrière-plan personnalisé du tableau](images/screenshot-08.png)

**Arrière-plans personnalisés.** Vous pouvez changer l'arrière-plan du tableau avec différentes couleurs et dégradés. Le mode sombre est aussi entièrement supporté. Toute l'appli respecte votre préférence de thème.

## Ce qu'il y a d'autre

Quelques trucs qui ne se montrent pas bien en captures d'écran mais qui méritent d'être mentionnés :

- **Glisser-déposer** avec @dnd-kit. Vous pouvez réordonner les cartes dans une liste, les déplacer entre les listes, et réordonner les listes elles-mêmes.
- **Sélection multiple.** Maintenez Shift ou Ctrl pour sélectionner plusieurs cartes et ensuite les déplacer, archiver ou étiqueter en lot.
- **Annuler/refaire.** Support complet de l'historique avec Ctrl+Z et Ctrl+Shift+Z.
- **Raccourcis clavier.** Appuyez sur N pour ajouter une carte, F pour chercher, B pour retourner aux tableaux, Q pour filtrer par date d'échéance, et ? pour voir tous les raccourcis.
- **Checklists** dans les cartes avec une barre de progression.
- **Archiver et restaurer.** Les cartes et les listes peuvent être archivées sans être supprimées.
- **Persistance en stockage local.** Tout est sauvegardé dans le navigateur. Fermez l'onglet, revenez, vos tableaux sont toujours là.

## Les rapports de bugs

Honnêtement, celui-ci était plutôt propre. Les principaux problèmes concernaient des cas limites du glisser-déposer (déposer une carte tout en bas d'une liste ne s'enregistrait parfois pas) et la vue calendrier qui initialement ne se mettait pas à jour quand vous changiez une date d'échéance depuis la modale. Des petits trucs. Rien de structurel.

## Les chiffres

- **18 tâches Watchfire** du kanban de base à l'optimisation des performances
- **Next.js + TypeScript + Tailwind CSS** comme stack
- **@dnd-kit** pour le glisser-déposer
- **Navigation complète au clavier** avec overlay de raccourcis
- **Deux vues :** tableau et calendrier
- **Toutes les données en localStorage** sans besoin de backend

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day11-trelloclone" showThumbnail=true >}}

**[Essayez Treelo](https://vibe30-day11-trelloclone.vercel.app)**

Créez un tableau, ajoutez des listes, faites glisser des cartes. C'est plus fun que ça devrait l'être.

## Verdict du Jour 11

Un tableau kanban semble simple en surface, mais il y a tellement de petites interactions qui doivent fonctionner : les cibles de dépôt, l'état des modales, le filtrage, l'historique d'annulation, la cohérence entre les vues. Le fait que tout ça vienne d'un seul prompt et de 18 tâches automatisées me sidère toujours.

Je reviens toujours à la même pensée : je n'aurais pas pu construire ça en une journée tout seul. Rien que le glisser-déposer m'aurait pris une journée entière à me battre avec les bibliothèques et les cas limites. Au lieu de ça, j'ai eu un clone de Trello fonctionnel avec une vue calendrier, un fil d'activité, des opérations groupées et des raccourcis clavier. Et j'ai passé mon temps à le tester et à remonter quelques bugs.

L'écart entre "je veux un tableau kanban" et "voilà un tableau kanban" ne cesse de se réduire.

---

*C'est le jour 11 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
