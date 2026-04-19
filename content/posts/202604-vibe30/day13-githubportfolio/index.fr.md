---
title: "30 Jours de Vibe Coding - Jour 13 - GitFolio"
description: "Un générateur de portfolio GitHub qui transforme n'importe quel nom d'utilisateur en un site portfolio soigné avec 5 templates et 7 thèmes de couleurs."
summary: "Un générateur de portfolio GitHub qui transforme n'importe quel nom d'utilisateur en un site portfolio soigné avec 5 templates et 7 thèmes de couleurs."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-13", "github", "portfolio", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 13
seriesOpened: false
date: 2026-04-18
draft: false
#type: "hidden"
---

Jour 13. Et si on pouvait transformer n'importe quel profil GitHub en un beau site portfolio sans écrire une seule ligne de code ?

## Le Prompt

> "Construis un générateur de portfolio GitHub. On entre un nom d'utilisateur, on obtient un portfolio soigné avec des stats, des repos, des langages et l'activité. Plusieurs templates, plusieurs thèmes de couleurs, export en HTML."

## Comment ça a été construit

Watchfire a découpé ça en 19 tâches. Le gros du travail a commencé par l'intégration de l'API GitHub et la récupération de toutes les données qu'on voudrait dans un portfolio : infos de profil, repos, activité de contribution, langages, organisations. À partir de là, il a construit le système de templates, le moteur de thèmes, et toutes les fonctionnalités d'export et de partage.

La liste des tâches couvrait pas mal de terrain : cinq templates de portfolio (Minimal, Developer Card, Creative/Bento Grid, Corporate/Showcase, et un thème Hacker/Terminal), sept thèmes de couleurs, couleurs d'accent personnalisées, mode impression et PDF, détection automatique des compétences, guides de déploiement, export README, et un générateur de cartes de partage social. C'est un ensemble de fonctionnalités étonnamment riche pour quelque chose qui tourne entièrement dans le navigateur sans backend.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

La page d'accueil a déjà un look soigné. Mode sombre par défaut, typographie propre, un explicatif en trois étapes, et un aperçu de tous les templates et thèmes directement sur la homepage.

![Page d'accueil](images/screenshot-01.png)

![Trois étapes vers votre portfolio](images/screenshot-02.png)

**Cinq templates, chacun avec sa propre personnalité.** Showcase est l'option complète avec une disposition en bento grid. Developer Card est compact et va droit au but. Bento Grid mise sur le look de cartes asymétriques. Minimal réduit tout à la typographie. Et Terminal rend le tout comme une interface en ligne de commande, avec de l'art ASCII et des polices monospaced.

![Sélecteur de template et thème](images/screenshot-03.png)

**Sept thèmes de couleurs plus des accents personnalisés.** Midnight, Ocean, Forest, Sunset, Rose, Slate, et une option personnalisée où vous choisissez votre propre couleur d'accent. La page d'accueil a même une variante en mode clair.

![Page d'accueil mode clair](images/screenshot-04.png)

**Les portfolios générés sont bourrés de données.** Stats avec compteurs animés, heatmap de contributions, répartition des langages avec un graphique en barres empilées, meilleurs repositories, activité récente, organisations, liens sociaux. Le tout récupéré depuis l'API publique GitHub sans aucune authentification requise.

![Template Showcase avec stats](images/screenshot-05.png)

![Template Minimal](images/screenshot-06.png)

**Le panneau de personnalisation est complet.** On peut activer ou désactiver des sections individuellement, changer de thème et de template en direct, modifier le texte de bio, et voir les changements reflétés instantanément. Tout se passe côté client donc il n'y a aucun chargement entre les changements.

![Panneau de personnalisation](images/screenshot-07.png)

**Le template Bento Grid est superbe.** C'est celui qui m'a surpris. Il dispose les infos de profil, les stats, les repos en vedette, l'activité récente et les langages dans une grille de cartes asymétrique qui ressemble à un vrai projet de design.

![Template Bento Grid](images/screenshot-08.png)

**Le template Terminal est dingue.** Il rend tout votre portfolio comme si vous exécutiez des commandes dans un terminal. Les infos de profil s'affichent comme un output style fetch, les stats apparaissent comme des réponses CLI, les repos se listent comme des entrées de répertoire. Il y a même un curseur clignotant.

![Template Terminal](images/screenshot-09.png)

**Guides de déploiement intégrés.** Une fois votre portfolio HTML exporté, une modale de déploiement vous guide pour l'héberger sur Netlify Drop, GitHub Pages, ou Vercel. Des instructions étape par étape avec des liens vers chaque plateforme. C'est le genre de finition qui transforme une démo en quelque chose que les gens peuvent vraiment utiliser.

![Modale de déploiement - Netlify](images/screenshot-10.png)

![Modale de déploiement - GitHub Pages](images/screenshot-11.png)

![Modale de déploiement - Vercel](images/screenshot-12.png)

## Les Bugs

L'API publique GitHub vous limite à 60 requêtes par heure sans authentification, et chaque génération de portfolio utilise environ 4 requêtes. Pendant les tests, j'ai atteint la limite de débit plusieurs fois en régénérant rapidement des portfolios. Pas vraiment un bug, juste une contrainte à connaître. L'appli gère ça proprement et vous dit d'attendre.

Le README mentionne 6 thèmes et 4 templates, mais l'appli réelle embarque 5 templates et 7 thèmes. Le code a dépassé la documentation, ce qui est un peu l'histoire de tout ce challenge.

## Les Chiffres

- **5 templates de portfolio** avec des dispositions distinctes
- **7 thèmes de couleurs** plus des couleurs d'accent personnalisées
- **19 tâches Watchfire** de l'intégration API aux guides de déploiement
- **Zéro backend** requis, tout tourne côté client
- **4 appels API GitHub** par génération de portfolio
- **Formats d'export :** téléchargement HTML, copie dans le presse-papier, lien partageable, README, et carte de partage social

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day13-githubportfolio" showThumbnail=true >}}

**[Générez Votre Portfolio](https://vibe30-day13-githubportfolio.vercel.app)**

Entrez simplement n'importe quel nom d'utilisateur GitHub public et choisissez un template.

## Verdict du Jour 13

Celui-ci comble un vrai manque. La plupart des outils de portfolio pour développeurs exigent soit de monter tout un projet, soit vous enferment dans un design spécifique. GitFolio prend juste un nom d'utilisateur et vous donne un fichier HTML autonome que vous pouvez héberger n'importe où. La variété de templates est solide, le thème Terminal à lui seul vaut le coup d'essayer, et les guides de déploiement suppriment le dernier point de friction entre générer un portfolio et le mettre réellement en ligne.

Le fait que ça tourne entièrement dans le navigateur sans auth, sans base de données et sans tracking est un bon point. On pourrait donner cette URL à quelqu'un qui n'a jamais touché un terminal et il pourrait avoir un site portfolio en ligne en cinq minutes.

Est-ce que la qualité croissante des résultats vient du fait que je m'améliore en prompting ou que les outils deviennent meilleurs pour déduire ce que je veux ? Je ne suis pas sûr. Probablement les deux.

---

*Ceci est le jour 13 de [30 Jours de Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je lance 30 projets en 30 jours en utilisant le coding assisté par IA.*
