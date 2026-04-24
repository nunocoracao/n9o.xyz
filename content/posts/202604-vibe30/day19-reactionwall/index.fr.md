---
title: "30 Days of Vibe Coding - Jour 19 - ReactionWall"
description: "Un mur de réactions en direct pour les événements avec des emojis volants et des messages texte, alimenté par la synchronisation en temps réel de Firebase."
summary: "Un mur de réactions en direct pour les événements avec des emojis volants et des messages texte, alimenté par la synchronisation en temps réel de Firebase."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-19", "react", "firebase", "framer-motion"]
series: ["30 Days of Vibe Coding"]
series_order: 19
seriesOpened: false
date: 2026-04-24
draft: false
#type: "hidden"
---

Jour 19. Je voulais quelque chose de fun et interactif pour les événements en direct. Le genre de truc qu'on balance sur un projecteur lors d'un meetup et qui permet aux gens d'envoyer des réactions depuis leur téléphone.

## Le Prompt

> "Construis un mur de réactions en direct pour les événements. Crée un événement, partage un lien ou un QR code, et les réactions traversent l'écran en temps réel. Barre d'emojis en bas, messages texte aussi. Mode plein écran pour projection. Firebase pour la synchronisation en temps réel."

{{< alert icon="fire">}}
Essayez-le vous-même [ici](https://vibe30-day19-reaction-wall.vercel.app)
{{< /alert >}}

## Comment c'est construit

[Watchfire](https://watchfire.io) a découpé ça en 9 tâches. Les premières étaient les fondations : mise en place de Firebase Realtime Database, flux de création d'événements, et authentification anonyme pour que personne n'ait besoin de s'inscrire. Ensuite sont venues la barre de réactions emoji, les réactions animées qui volent grâce à Framer Motion, le mode plein écran pour les projecteurs, le toggle du son, et une passe de polish finale.

La partie temps réel était le défi principal ici. Chaque réaction doit apparaître instantanément sur tous les écrans qui regardent cet événement. Firebase Realtime Database gère ça nativement, mais il y a beaucoup de subtilités pour que ça soit agréable. Les réactions utilisent une fenêtre glissante de 30 secondes pour que les anciennes disparaissent, et il y a une limitation de débit à 1 réaction par seconde pour éviter que ça parte en vrille.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

La page d'accueil est propre et sombre. Un seul bouton pour créer un mur d'événement.

![Page d'accueil](images/screenshot-01.png)

Tu donnes un nom à ton événement et tu cliques "Go Live." C'est tout le setup.

![Création d'événement](images/screenshot-02.png)

Une fois dedans, tu as un QR code et un lien partageable en haut à gauche pour que les participants puissent rejoindre instantanément depuis leur téléphone. Le bas de l'écran a une barre d'emojis avec 8 options plus un champ texte pour des messages personnalisés jusqu'à 50 caractères.

![Mur d'événement avec barre d'emojis et QR code](images/screenshot-03.png)

![Réactions à l'écran](images/screenshot-04.png)

Le mode affichage, c'est là que ça devient fun. Plein écran, fond sombre, réactions qui volent avec des effets de lueur. Les emojis ont des trajectoires aléatoires, des tailles variées, et une animation de tremblement. Les messages texte flottent aussi dans de petites bulles violettes. Quand les gens commencent à spammer les réactions, un effet de rafale se déclenche.

![Mode affichage avec réactions volantes et texte](images/screenshot-05.png)

Il y a des petits détails sympas que je n'avais pas explicitement demandés. Un retour haptique sur mobile quand tu envoies une réaction. Des sons pop via la Web Audio API avec un toggle pour les désactiver. Un indicateur de cooldown pour savoir quand tu peux renvoyer après la limitation de débit.

## La Tech

- React 19 avec TypeScript et Vite
- Firebase Anonymous Auth plus Realtime Database
- Framer Motion pour toutes les animations volantes
- QRCode.react pour les QR codes partageables

Framer Motion fait le gros du travail côté visuel. Chaque réaction a sa propre animation avec des paramètres aléatoires pour la trajectoire, la rotation et l'échelle. Le résultat, c'est que deux réactions ne se ressemblent jamais quand elles traversent l'écran.

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day19-ReactionWall" showThumbnail=true >}}

**[Essayez ReactionWall](https://vibe30-day19-reaction-wall.vercel.app)**

Créez un événement, ouvrez le lien sur votre téléphone, et commencez à vous envoyer des réactions. C'est plus satisfaisant que ça ne devrait l'être.

## Verdict du Jour 19

C'est un de ces projets où l'aspect temps réel lui donne vie. Les applis statiques c'est bien, mais il y a quelque chose dans le fait de voir les réactions apparaître à l'instant où quelqu'un tapote son téléphone qui donne l'impression d'un vrai produit. Firebase a géré la couche de synchronisation, Framer Motion a géré la couche d'animation, et l'ensemble s'est assemblé d'une manière qui fonctionne vraiment pour un événement en direct.

Le partage par QR code, le mode plein écran, le fait que personne n'a besoin d'installer quoi que ce soit ou de créer un compte. Pour un meetup ou une conférence, ça fait le job. Pas du niveau production, mais suffisant pour balancer sur un projecteur et mettre l'ambiance.

---

*Ceci est le jour 19 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
