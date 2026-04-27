---
title: "30 Days of Vibe Coding - Jour 21 - ChatRooms"
description: "Une appli de salons de discussion anonymes en temps réel avec Firebase, réactions, partage de fichiers et indicateurs de présence."
summary: "Une appli de salons de discussion anonymes en temps réel avec Firebase, réactions, partage de fichiers et indicateurs de présence."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-21", "react", "nextjs", "typescript", "firebase", "realtime"]
series: ["30 Days of Vibe Coding"]
series_order: 21
seriesOpened: false
date: 2026-04-26
draft: false
#type: "hidden"
---

Jour 21. Je voulais construire quelque chose qui semble vivant. Quelque chose où on peut voir d'autres personnes faire des choses en temps réel. Alors aujourd'hui, ce sont des salons de discussion anonymes.

## Le Prompt

> "Construis une appli de salons de discussion en temps réel. Authentification anonyme avec pseudos personnalisés, création de salons, messagerie en direct, réactions, partage de fichiers, indicateurs de frappe et présence en ligne."

{{< alert icon="fire">}}
Essayez par vous-même [ici](https://vibe30-day21-chatrooms-nir8.vercel.app)
{{< /alert >}}

## Comment ça a été construit

Celui-ci est passé par 7 tâches [Watchfire](https://watchfire.io), et l'ordre était très logique pour une appli temps réel comme celle-ci :

1. **Firebase Realtime Database.** La fondation. Mise en place de l'authentification anonyme, des règles de base de données et du modèle de données pour les salons, les messages et les utilisateurs. C'est la plomberie dont tout le reste dépend.
2. **Création de salons.** La possibilité de créer de nouveaux salons et de parcourir ceux qui existent. Une barre latérale avec les noms des salons, le nombre de participants et un aperçu du dernier message.
3. **Messagerie en temps réel.** La fonctionnalité principale. Les messages apparaissent instantanément pour tout le monde dans le salon. Les listeners Firebase gèrent la synchronisation, donc pas de polling, pas de bouton rafraîchir. Tu tapes, tu envoies, tout le monde voit.
4. **Réactions.** Appuie sur un message pour y réagir. Petite fonctionnalité, mais ça rend le chat plus interactif que de simples murs de texte.
5. **Partage de fichiers.** Upload et partage de fichiers dans un salon de discussion. Une couche d'utilité supplémentaire au-delà de la simple messagerie texte.
6. **Présence et indicateurs de frappe.** Voir qui est en ligne, voir qui est en train d'écrire. Ce sont les détails qui font qu'une appli de chat ressemble à une vraie appli de chat plutôt qu'à un forum.
7. **Finitions mobile.** Ajustements de mise en page responsive, zones tactiles, s'assurer que toute l'expérience fonctionne bien sur un écran de téléphone.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Écran d'accueil](images/screenshot-01.png)

**Un onboarding ultra simple.** Tu arrives sur l'appli, tu choisis un pseudo, et t'es dedans. Pas d'email, pas de mot de passe, pas de flux OAuth. Firebase Anonymous Auth gère l'identité en coulisses. Tu tapes juste un nom et tu cliques "C'est parti."

![Liste des salons et état d'accueil](images/screenshot-03.png)

**Un navigateur de salons propre.** La barre latérale gauche affiche tous les salons disponibles avec le nombre de participants. Il y a un bouton "Créer un salon" en haut et une barre de recherche pour filtrer les salons. L'état par défaut affiche un message de bienvenue invitant à sélectionner un salon ou à en créer un nouveau.

![Salon de discussion avec messages](images/screenshot-04.png)

**De la messagerie en temps réel qui marche, tout simplement.** Les messages apparaissent instantanément. Chaque message affiche le pseudo de l'expéditeur avec un avatar coloré, un horodatage et le contenu du message. Le bas de l'écran montre qui est actuellement dans le salon et un champ de saisie avec un bouton d'envoi. Le compteur en ligne se trouve en haut à droite.

![Conversation active](images/screenshot-05.png)

**Indicateurs de frappe et présence.** Tu peux voir qui est en ligne et qui est en train d'écrire. Ces petites touches sont ce qui sépare une appli de chat d'une section commentaires. L'ensemble donne une sensation réactive et vivante.

**Le thème sombre est superbe.** Le fond bleu marine foncé avec des accents violets donne un look d'appli de chat moderne. Ça ne ressemble pas à un projet de cours. La typographie est propre, l'espacement est bon, et le code couleur pour les différents utilisateurs rend les conversations faciles à suivre.

## Les rapports de bugs

Les applis Firebase en temps réel ont tendance à avoir une catégorie de bugs qui n'apparaissent qu'avec plusieurs utilisateurs ou lors de la reconnexion. Pour ce projet, les tâches Watchfire ont géré la progression assez proprement pour que je ne tombe sur aucun problème bloquant. Le système de présence et les indicateurs de frappe ont fonctionné dès le premier déploiement, ce qui m'a honnêtement surpris. Ces fonctionnalités nécessitent généralement quelques tours de débogage autour des cas limites comme le changement d'onglet et les coupures réseau.

## Les chiffres

- **7 tâches Watchfire** de la configuration de la base de données aux finitions mobile
- **Firebase Realtime Database** pour une synchronisation des messages sans latence
- **Authentification anonyme** pour un onboarding sans friction
- **Réactions, partage de fichiers, indicateurs de frappe, présence** le tout ajouté de manière incrémentale

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day21-chatrooms" showThumbnail=true >}}

**[Ouvrir ChatRooms](https://vibe30-day21-chatrooms-nir8.vercel.app)**

Choisis un pseudo et commence à chatter. Crée un salon ou rejoins-en un existant.

## Verdict du jour 21

Le temps réel, c'est dur. Ou du moins, ça l'était. Mettre en place des connexions WebSocket, gérer l'état des connexions, gérer les reconnexions, synchroniser les données entre les clients, gérer les conditions de concurrence. C'est beaucoup de travail d'infrastructure avant même d'arriver aux fonctionnalités de chat proprement dites.

Firebase abstrait la plupart de tout ça, et l'IA savait exactement comment l'utiliser. La progression de "la base de données existe" à "les gens chattent avec des réactions et des indicateurs de frappe" s'est faite en 7 tâches sans que j'aie à penser à la gestion des connexions du tout.

Ce que je trouve intéressant dans ce projet, c'est que l'authentification anonyme était le bon choix. Pour une appli de chat décontractée, forcer les gens à créer un compte tue la conversion. Choisis un nom et c'est parti. Firebase gère l'identité, l'utilisateur n'a jamais à y penser. C'est une décision produit que l'IA a prise correctement sans que je la spécifie.

Vingt-et-un jours. On est dans la dernière ligne droite et les projets deviennent de plus en plus interactifs.

---

*Ceci est le jour 21 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure alors que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
