---
title: "30 Days of Vibe Coding - Jour 24 - Reblog"
description: "Un redesign moderne de mon blog personnel, reconstruit de Hugo/Blowfish vers Astro + Tailwind CSS avec recherche floue, mode sombre et typographie personnalisée."
summary: "Un redesign moderne de mon blog personnel, reconstruit de Hugo/Blowfish vers Astro + Tailwind CSS avec recherche floue, mode sombre et typographie personnalisée."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-24", "astro", "tailwind", "blog", "redesign"]
series: ["30 Days of Vibe Coding"]
series_order: 24
seriesOpened: false
date: 2026-04-29
draft: false
#type: "hidden"
---

Jour 24. J'ai reconstruit mon propre blog.

Celui-ci est personnel. Mon blog sur [n9o.xyz](https://n9o.xyz) tourne sur Hugo avec mon propre thème, [Blowfish](https://blowfish.page), depuis des années. J'ai construit Blowfish, je le maintiens, des milliers de personnes l'utilisent. Mais ça fait un moment que je voulais passer à autre chose. Une nouvelle identité visuelle, une stack différente, quelque chose qui me ressemble davantage et qui ressemble moins à un thème que j'ai fait pour tout le monde.

Donc le projet du jour c'était Reblog : un redesign complet de n9o.xyz, reconstruit de Hugo vers Astro 5 avec Tailwind CSS.

{{< alert icon="fire">}}
Essayez-le vous-même [ici](https://vibe30-day24-reblog.vercel.app)
{{< /alert >}}

## Le Prompt

Ce n'était pas un seul prompt. C'était 18 tâches [Watchfire](https://watchfire.io) sur toute la journée. La direction initiale ressemblait à quelque chose comme :

> "Construire un blog personnel avec Astro 5, Tailwind CSS et MDX. Mode sombre, articles mis en avant, filtrage par tags, recherche floue, une page CV, une page musique et une page projets. Typographie personnalisée avec Sora, Crimson Pro et JetBrains Mono."

À partir de là, c'était un processus itératif. Ajustements de mise en page, retouches de couleurs, ajout de données structurées, correction des styles d'impression, mise en place du support des séries pour le contenu en plusieurs parties. Le genre de travail qui prend normalement des semaines d'allers-retours entre design et code.

## Ce que j'ai obtenu

Une plateforme de blog complète avec six sections distinctes.

![Page d'accueil en mode sombre](images/screenshot-01.png)

**La page d'accueil** a une section hero avec ma photo, mon titre, ma bio et mes liens sociaux. En dessous, une section d'articles mis en avant avec de grandes cartes, puis une grille d'articles récents. Propre, centré et chaleureux. Le mode sombre utilise une palette olive-brun atténuée que j'aime vraiment beaucoup. Ce n'est pas le gris foncé typique ou le noir pur.

![Section articles mis en avant](images/screenshot-02.png)

![Grille des articles récents](images/screenshot-03.png)

**La page articles** a un filtrage par tags en haut. Cliquez sur un tag, la liste se filtre instantanément. Pas de rechargement de page, pas d'aller-retour serveur. Juste Astro qui fait son truc.

![Tous les articles avec filtrage par tags](images/screenshot-05.png)

**La recherche floue** est propulsée par Fuse.js. Elle se charge côté client et recherche dans les titres, descriptions et tags. C'est l'un des rares îlots interactifs dans un site autrement sans JS. L'architecture en îlots d'Astro fait que le composant de recherche s'hydrate tout seul sans embarquer un framework pour la page entière.

**La page à propos** affiche ma bio, mes liens et un encart mentorat. La page CV liste mon parcours professionnel avec les logos des entreprises et la progression des postes. Les deux sont propres et lisibles.

![Page à propos](images/screenshot-04.png)

![Page CV](images/screenshot-07.png)

**La page projets** met en valeur le travail open source avec des badges de statut, des tags technos et des liens vers les repos et sites web.

![Page projets](images/screenshot-06.png)

**La page musique** est une grille de pochettes d'albums pour les morceaux que j'ai sortis sous le nom N9O. Chacune renvoie vers les plateformes de streaming. C'est une page que je n'ai jamais eue sur la version Hugo et que j'ai toujours voulue.

![Page musique](images/screenshot-08.png)

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Mode clair

L'ensemble fonctionne aussi en mode clair avec détection des préférences système. Même mise en page, palette différente.

![Page d'accueil en mode clair](images/screenshot-09.png)

![Articles mis en avant en mode clair](images/screenshot-10.png)

La version claire utilise un fond crème chaleureux avec la même typographie. Elle bascule automatiquement selon les paramètres de votre OS, ou vous pouvez la changer manuellement.

## Sous le capot

Les choix techniques ici étaient délibérés :

- **Astro 5** pour la génération statique avec zéro JS par défaut
- **MDX** pour les articles de blog pour pouvoir intégrer des composants dans le markdown quand c'est nécessaire
- **Tailwind CSS** pour le style sans se battre avec le CSS d'un thème
- **Fuse.js** pour la recherche floue côté client
- **Sharp** pour l'optimisation automatique des images
- **Sora + Crimson Pro + JetBrains Mono** pour une typographie qui a l'air intentionnelle
- **Données structurées** et **sitemap** pour le SEO
- **Flux RSS** pour les trois personnes qui utilisent encore le RSS (j'en fais partie)
- **Styles d'impression** parce que parfois j'imprime des articles et ils devraient avoir une bonne tête

## Les 18 tâches

Watchfire a découpé ça en 18 tâches, ce qui est le découpage le plus granulaire que j'ai vu de sa part jusqu'ici. Le lot initial couvrait le cœur : scaffolding du projet, composants de layout, page d'accueil, page articles, page à propos, mode sombre. Puis j'ai continué à ajouter des demandes. "Ajouter une page musique." "Ajouter le support des séries." "Les cartes mises en avant ont besoin de plus de contraste." "Ajouter des styles d'impression." "Ajouter des données structurées."

Chaque itération revenait vite et était globalement correcte. Le design visuel est passé par quelques tours avant que j'atterrisse sur la palette chaude. La première version était trop stérile. La deuxième était trop sombre. La troisième version a trouvé le bon équilibre entre cosy et professionnel.

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day24-reblog" showThumbnail=true >}}

**[Démo en ligne](https://vibe30-day24-reblog.vercel.app)**

## Verdict du jour 24

C'est le projet le plus personnellement significatif du challenge jusqu'ici. Pas parce que c'est le plus impressionnant techniquement, mais parce que c'est quelque chose que je repoussais depuis des mois. Redesigner son propre site, c'est une de ces tâches qui ne semble jamais assez urgente pour s'y mettre. Il y a toujours quelque chose de plus important. Et puis un jour on le regarde et on réalise qu'il ne nous représente plus.

Construire une plateforme de blog complète avec six pages, mode sombre, recherche, filtrage par tags, support des séries, données structurées et styles d'impression en une seule journée, c'est pas quelque chose que j'aurais pu faire tout seul. Même pas de loin. La version Hugo/Blowfish m'a pris des semaines de soirées et de week-ends, et c'était avec un framework que je connaissais déjà par cœur.

Est-ce que ça va vraiment remplacer n9o.xyz ? Peut-être. J'ai besoin de migrer le contenu et de vivre avec pendant un moment. Mais le fait que j'aie une alternative fonctionnelle prête à l'emploi, construite en une journée, c'est quand même dingue.

---

*C'est le jour 24 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
