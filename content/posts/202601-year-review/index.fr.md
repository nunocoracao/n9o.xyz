---
title: "2025 : Une Année en Revue"
summary: "2025 fut une année de reconstruction - retrouver la joie à travers les voyages, le temps passé avec famille et amis, et créer des choses qui comptent. Des voyages avec ma fille aux projets livrés chez Docker en passant par la croissance de Blowfish - ce fut une année à rassembler les morceaux."
description: "2025 fut une année de reconstruction - retrouver la joie à travers les voyages, le temps passé avec famille et amis, et créer des choses qui comptent. Des voyages avec ma fille aux projets livrés chez Docker en passant par la croissance de Blowfish - ce fut une année à rassembler les morceaux."
categories: ["Opinion"]
tags: ["year-in-review", "personal", "docker", "blowfish", "open-source", "ai"]
date: 2026-01-22
draft: false
---

2025 fut une année de reconstruction. Après avoir perdu ma femme et partenaire de 20 ans en 2024, je suis devenu parent solo du jour au lendemain. Cette année consistait à retrouver mon équilibre - passer du temps avec amis et famille, voyager vers de nouveaux endroits avec ma fille, et redécouvrir la joie d'être vivant et de créer des choses.

Une partie de cette création s'est passée au travail, une partie en open source, et une partie à la table de la cuisine avec un Raspberry Pi et une fillette de 7 ans. Mais s'il y a un fil conducteur qui relie tout cela, c'est celui-ci : les meilleurs moments sont venus de construire aux côtés de personnes qui me sont chères.

## Docker

L'année a commencé avec un projet que j'avais proposé et nourri pendant plus d'un an qui s'est fait annuler. Ça a fait mal, mais la décision avait du sens - l'IA avançait vite, Docker voulait tout miser dessus, et ils avaient besoin de gens là-bas. On m'a offert la chance de rejoindre l'équipe IA.

> [!quote] Quand une porte se ferme, une autre s'ouvre ; mais souvent nous regardons si longtemps et avec tant de regret la porte fermée que nous ne voyons pas celle qui s'est ouverte pour nous.
> - Alexander Graham Bell

### MCP Catalog

Nous avons lancé le [Docker MCP Catalog](https://hub.docker.com/mcp) - un registre curé de serveurs MCP intégré à Docker Hub. L'idée était simple : les développeurs veulent un moyen sécurisé et containerisé d'étendre leurs agents IA, pas du code arbitraire tournant via `npx` ou `uvx` avec un accès système complet. Le catalogue héberge maintenant plus de 220 serveurs MCP containerisés de partenaires comme Stripe, Elastic, Neo4j, Heroku, Grafana Labs, et plus - chacun avec une isolation et une sécurité appropriées.

### MCP Toolkit

Le [MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) a donné vie au catalogue dans Docker Desktop. Lancement de serveurs MCP en un clic, zéro configuration manuelle, et connexion automatique aux clients comme Claude, Cursor et VS Code. C'est le chemin le plus rapide entre découvrir un outil et l'utiliser réellement.

### MCP Gateway

Nous avons rendu open source le [MCP Gateway](https://github.com/docker/mcp-gateway) - l'infrastructure qui orchestre les serveurs MCP et gère les credentials, OAuth et le contrôle d'accès. Il tourne automatiquement dans Docker Desktop, ce qui signifie que des millions de développeurs l'ont disponible immédiatement.

### cagent

[cagent](https://github.com/docker/cagent) est peut-être le projet dont je suis le plus fier - un runtime pour construire et faire tourner des agents IA en utilisant une simple configuration YAML. Pas de code requis. Définis la persona de ton agent, ses outils et capacités dans un fichier, et lance-le. Équipes multi-agents, intégration MCP, support pour tous les principaux fournisseurs de modèles, et une expérience TUI géniale.

{{< github repo="docker/cagent" >}}

### Gordon

Et finalement, [Gordon](https://docs.docker.com/ai/gordon/) - l'assistant IA de Docker. Nous l'avons reconstruit de zéro avec cagent en son cœur. La nouvelle version est actuellement déployée vers des utilisateurs sélectionnés pendant que nous préparons la GA, et je suis vraiment enthousiaste de la voir entre les mains de plus de développeurs bientôt.

### Écrire et Penser en Public

J'ai écrit sur ce que nous apprenions en chemin :

- **[MCP Servers: The USB-C Moment for AI Agents](/posts/202504-mcp/)** - Mon point de vue sur pourquoi le Model Context Protocol devient le connecteur universel pour l'IA. C'est la standardisation qui permet un écosystème, et nous n'en sommes qu'au début.

- **[Unseen Cost of Growth: Metcalfe's Law at Work](/posts/202504-metacalfes-law/)** - Une réflexion sur la complexité organisationnelle qui n'avait rien à voir avec l'IA mais tout à voir avec être réfléchi sur comment les équipes scalent.

## Blowfish

Trois ans après, [Blowfish](https://blowfish.page) continue de me surprendre. Ce qui a commencé comme un thème Hugo personnel parce que je voulais construire mon propre site web est devenu quelque chose de bien plus grand.

{{< github repo="nunocoracao/blowfish" >}}

### En Chiffres

- **2,600+ stars** sur GitHub
- **660 forks**
- **244 contributeurs**
- **174 releases** depuis le début du projet

### Points Forts de 2025

Cette année nous avons livré 17 releases avec quelques ajouts majeurs :

- **Mise à jour TailwindCSS v4** - un effort de modernisation significatif
- **Shortcode Tabs** avec options d'icône et de groupement
- **Admonitions style GitHub** - `[!note]`, `[!quote]`, `[!warning]`, etc.
- **Shortcodes Video et Gist**
- **Thumbnails de repos GitHub** dans les embeds
- **Breadcrumbs structurés** pour un meilleur SEO
- **Traductions en Thaï et Indonésien**

La communauté a continué à pousser le thème en avant - nouvelles langues, shortcodes, corrections de bugs dont je ne savais même pas qu'ils existaient.

### Premier Collaborateur

En octobre, j'ai accueilli [@ZhenShuo2021](https://github.com/ZhenShuo2021) comme premier collaborateur officiel de Blowfish. Construire un projet open source peut sembler solitaire - avoir quelqu'un pour partager la charge de maintenance, reviewer les PRs et aider à guider la direction est inestimable. Cela marque un nouveau chapitre où Blowfish est plus grand que juste moi.

### Blowfish Tools CLI

[Blowfish Tools](https://github.com/nunocoracao/blowfish-tools) - le CLI pour créer de nouveaux projets - a atteint **7,825 téléchargements en 2025**, en hausse de 58% par rapport à l'année précédente. Janvier 2026 seul a vu plus de 1,200 téléchargements. Les gens commencent vraiment de nouveaux blogs avec Blowfish régulièrement.

## Construire Eva

Une partie de la construction la plus significative se passe en dehors du travail.

Ces vacances de Noël, j'ai [construit une compagne IA vocale avec ma fille](/posts/202601-building-eva/). Nous l'avons appelée **Eva**, d'après la protagoniste de WondLa (une série que nous regardons ensemble sur Apple TV).

Eva est un robot de poche - un Raspberry Pi Zero avec un PiSugar Whisplay HAT - qui parle Portugais du Portugal (pas Brésilien !), a une personnalité adaptée aux enfants, et se souvient des conversations pour que ma fille puisse construire une relation avec elle au fil du temps.

Le projet a commencé avec un tutoriel YouTube et est devenu quelque chose de personnel à travers ce que je ne peux qu'appeler du "vibe coding" avec Claude. J'ai expliqué ce que je voulais en langage naturel, et ensemble nous avons remodelé le code pour créer quelque chose d'unique pour ma fille.

Le moment qui a fait que tout en valait la peine : ma fille appuyant sur le bouton, disant "Olá Eva!" - et Eva répondant en Portugais parfait avec une voix qu'elle a choisie elle-même. Vingt minutes de conversation sur les licornes ont suivi.

C'est la magie de construire avec ses enfants. L'accomplissement technique compte moins que le moment d'émerveillement.

**Mise à jour :** Depuis ce post, Eva a eu un boîtier approprié - et une peinture faite par ma fille. Elle est maintenant officiellement unique.

![Eva avec son nouveau boîtier, peint par ma fille](img/eva.webp)

## Afterlight

Après avoir perdu ma femme, je me suis retrouvé à chercher d'autres personnes qui comprenaient vraiment ce que je traversais. Les options existantes ne convenaient pas - trop publiques, trop encombrées, pas conçues pour le deuil.

Alors j'ai commencé à construire [Afterlight](https://afterlight.club) - une plateforme sûre, anonyme et uniquement textuelle pour le soutien au deuil. Pas de photos, pas de vidéos, pas d'algorithmes poussant du contenu. Juste des personnes se connectant à travers des expériences partagées, utilisant des pseudonymes, à leur propre rythme.

Pour l'instant, j'ai mis le développement en pause. Quelques raisons : je n'ai pas assez de temps et j'ai besoin de prioriser. Je n'ai pas réussi à trouver comment atteindre les personnes qui en ont besoin - faire du marketing auprès de personnes en deuil est (compréhensiblement) bloqué par presque toutes les plateformes. Et je n'ai pas de plan de monétisation qui ne semble pas bizarre, ce qui signifie que je ne peux pas me permettre de le maintenir si les coûts augmentent.

Peut-être que j'y reviendrai. Peut-être pas. Mais j'ai beaucoup appris en le construisant.

## Au-Delà du Code

Tout ce qui vaut la peine d'être mentionné ne rentre pas proprement dans un dépôt GitHub.

**Mentorat.** J'ai travaillé avec 4 mentorés via [MentorCruise](https://mentorcruise.com/mentor/nunocorao/) cette année - tous naviguant des transitions de carrière en product management. Les regarder se préparer, passer des entretiens et décrocher les rôles de PM qu'ils voulaient était vraiment gratifiant. Il y a quelque chose de spécial à aider quelqu'un à atteindre l'étape suivante quand tu te souviens à quel point cette montée semblait difficile.

**Lecture.** J'ai lu 15 livres cette année - pas autant que j'aurais voulu, mais assez pour trouver quelques pépites. Les favoris incluaient *[There Is No Antimemetics Division](https://www.goodreads.com/book/show/54870256-there-is-no-antimemetics-division)* (une histoire de la SCP Foundation qui m'est restée en tête pendant des semaines), *[Project Hail Mary](https://www.goodreads.com/book/show/54493401-project-hail-mary)* (Andy Weir à son meilleur), et *[Tokyo Express](https://www.goodreads.com/book/show/59238510-tokyo-express)* (le classique de Matsumoto qui m'a rappelé combien j'aime la fiction policière japonaise).

## Ce Que J'ai Appris

**Reconstruire prend du temps.** Il n'y a pas de raccourci à travers le deuil, pas de hack pour devenir parent solo du jour au lendemain. Tu te montres simplement, jour après jour, et éventuellement les jours commencent à peser moins lourd. Le progrès n'est pas linéaire, et c'est OK.

**Sois gentil avec toi-même.** J'ai passé trop de cette année à pousser quand j'aurais dû me reposer. Tu ne peux pas verser d'une tasse vide. Apprendre à ralentir, à dire non, à laisser certaines choses être assez bonnes - ce n'est pas de la faiblesse, c'est de la survie.

**Sache quand faire une pause.** Afterlight m'a appris que tous les projets n'ont pas besoin d'être terminés. Parfois le timing n'est pas bon, les ressources ne sont pas là, ou tu as simplement besoin de prioriser. Faire une pause n'est pas échouer.

**L'open source c'est la communauté.** Blowfish n'a pas du succès parce que je suis un super développeur (je ne le suis pas). Il a du succès parce que 244 personnes se sont assez souciées pour contribuer. C'est humiliant et motivant.

**Construis avec les personnes que tu aimes.** Eva m'a appris plus sur ce qui compte que n'importe quel projet de travail. Regarder ma fille parler à un robot qu'elle a aidé à créer - c'est ça qui reste avec toi.

## Regardant Vers 2026

Je ne fais pas de prédictions ni de résolutions de nouvelle année. Mais je veux continuer à construire des choses qui comptent, passer plus de temps avec les personnes que j'aime, et profiter pleinement du temps que j'ai ici.

À 2026.
