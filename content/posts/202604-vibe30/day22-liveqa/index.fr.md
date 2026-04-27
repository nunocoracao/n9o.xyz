---
title: "30 Days of Vibe Coding - Jour 22 - LiveQ&A"
description: "Un tableau de questions-réponses en temps réel pour les événements, AMAs et conférences, avec votes en direct et contrôles pour l'animateur, construit avec Firebase Firestore."
summary: "Un tableau de questions-réponses en temps réel pour les événements, AMAs et conférences, avec votes en direct et contrôles pour l'animateur, construit avec Firebase Firestore."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-22", "nextjs", "firebase", "typescript", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 22
seriesOpened: false
date: 2026-04-27
draft: false
#type: "hidden"
---

Jour 22. J'ai assisté à suffisamment d'événements où le Q&A est un bordel. Des gens qui crient les uns sur les autres, la même question posée deux fois, les meilleures questions noyées sous les voix les plus fortes. Il est temps de construire quelque chose de mieux.

## Le Prompt

> "Construis un tableau de Q&A en direct où un animateur crée une session, le public soumet et vote pour des questions en temps réel, et l'animateur peut mettre en avant, répondre, rejeter ou fermer la session. Inclus un modal de partage avec un QR code."

{{< alert icon="fire">}}
Essayez-le vous-même [ici](https://vibe30-day22-liveqa.vercel.app)
{{< /alert >}}

## Comment c'a été construit

Celui-ci est passé par 7 tâches [Watchfire](https://watchfire.io), en construisant de la couche base de données jusqu'à la finition :

1. **Configuration de Firebase Firestore.** La couche de données. Collections de sessions et de questions, authentification anonyme pour que les utilisateurs puissent rejoindre sans créer de compte, et règles de sécurité pour tout verrouiller.
2. **Création de session.** L'animateur remplit un titre et une description, appuie sur créer, et obtient une page de session unique. Un formulaire simple, rien de compliqué.
3. **Soumission de questions.** Les membres du public arrivent sur la page de la session et soumettent des questions. Limite de 280 caractères pour rester concentré. Les questions apparaissent en temps réel pour tout le monde dans la session.
4. **Votes en temps réel.** Un vote par utilisateur par question, appliqué côté serveur. Le compteur de votes se met à jour en direct sur tous les clients connectés. Tri par les plus votés ou les plus récents.
5. **Contrôles de l'animateur.** L'animateur a des boutons supplémentaires sur chaque question : mettre en avant, marquer comme répondue, rejeter. Les questions mises en avant sont promues dans un panneau dédié sur le côté droit de l'écran. L'animateur peut aussi fermer la session entièrement.
6. **Modal de partage avec QR code.** Un bouton de partage ouvre un modal avec le lien de la session, un bouton copier, et un QR code généré avec qrcode.react. Pointez votre téléphone vers l'écran et vous y êtes.
7. **Finition de l'interface.** Nettoyage de la mise en page, raffinement du design à deux colonnes, vérification que le panneau de questions mises en avant rend bien sur ordinateur et mobile.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Page d'accueil](images/screenshot-01.png)

**Page d'accueil épurée.** Créez une session ou collez un code de session existant pour en rejoindre une. L'authentification anonyme se fait en arrière-plan, les utilisateurs choisissent juste un nom d'affichage et c'est parti.

![Demande de nom d'affichage](images/screenshot-02.png)

**Aucune friction d'inscription.** La première visite déclenche une demande de nom d'affichage. C'est tout. L'authentification anonyme de Firebase gère le reste. Pas d'emails, pas de mots de passe, pas de flux OAuth. Pour un outil d'événement en direct, c'est exactement ce qu'il faut. On ne veut pas que les gens galèrent avec la création de compte quand le speaker vient de dire "scannez le QR code."

![Création de session](images/screenshot-03.png)

**La création de session c'est deux champs.** Titre et description. Appuyez sur le bouton et vous animez un Q&A en direct. La simplicité ici compte parce que l'animateur est probablement en train de configurer ça cinq minutes avant le début de sa présentation.

![Modal de partage avec QR code](images/screenshot-04.png)

**Le modal de partage fait son boulot.** Le lien de la session avec un bouton copier et un QR code juste là. C'est le workflow que j'imaginais : l'animateur crée la session, projette ce modal sur le grand écran, le public scanne le code, et les questions commencent à affluer.

![Vue du public avec les questions](images/screenshot-05.png)

**La vue du public reste concentrée.** Soumettez une question, voyez les autres questions, votez pour celles que vous voulez voir répondues. La zone de soumission est en haut, la liste des questions en dessous, triées par les plus votées par défaut. Tout se met à jour en temps réel grâce aux listeners Firestore.

![Vue de l'animateur avec les contrôles](images/screenshot-06.png)

**L'animateur a des outils de modération.** Chaque question affiche les boutons mettre en avant, marquer comme répondue et rejeter. Seul l'animateur les voit. Il y a aussi un bouton de fermeture de session dans l'en-tête qui verrouille tout. La colonne de droite montre les questions mises en avant, ou un message placeholder si aucune n'est encore mise en avant.

![Vue complète de l'animateur](images/screenshot-07.png)

**La mise en avant fonctionne bien.** Quand l'animateur met en avant une question, elle est promue dans le panneau de droite avec le texte de la question et le nom de l'auteur affiché en évidence. La question reçoit aussi un indicateur visuel dans la liste principale pour que tout le monde puisse voir qu'elle a été signalée. Sur mobile, cette section de mise en avant se place en haut de la page au lieu d'une colonne latérale.

![Question mise en avant](images/screenshot-08.png)

![Votes en action](images/screenshot-09.png)

**Les votes créent un filtre naturel.** Les meilleures questions remontent en haut. L'animateur n'a pas besoin de tout lire. Le public fait la curation pour vous.

## Les Rapports de Bugs

Celui-ci était étonnamment propre. Les listeners temps réel de Firestore ont géré les parties délicates, donc les questions et les votes apparaissaient instantanément sans polling ni logique de rafraîchissement manuel. Le flux d'authentification anonyme était fluide. Aucun bug signalé sur ce projet.

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day22-liveqa" showThumbnail=true >}}

**[Essayez LiveQ&A](https://vibe30-day22-liveqa.vercel.app)**

Créez une session et partagez le lien. Pas besoin de compte.

## Verdict du Jour 22

Quatrième projet Firebase. À ce stade, le pattern s'écrit tout seul : authentification anonyme, listeners Firestore, synchronisation en temps réel. Je pourrais probablement en construire un les yeux fermés. La stack technique n'est plus le sujet.

Ce qui est intéressant avec celui-ci, c'est la couche de modération. La plupart des outils de Q&A sont juste des listes de questions avec des compteurs de votes. La fonctionnalité de mise en avant change la donne. Quand l'animateur met en avant une question, ça se diffuse sur tous les écrans de la salle. Le public voit ce qui est en train d'être traité. L'animateur contrôle le flux sans crier "question suivante s'il vous plaît" dans un micro. C'est une insight produit, pas technique.

Est-ce que je l'utiliserais dans une vraie conférence ? Oui. J'ai assisté à suffisamment de conférences où le Q&A dégénère en celui qui attrape le micro en premier pour poser une "question" de cinq minutes qui est en fait un commentaire. Ça résout le problème. Le public vote, les meilleures questions remontent, l'animateur choisit quoi traiter. La voix la plus forte dans la salle n'est plus le facteur décisif.

Le bouton rejeter est discrètement la fonctionnalité la plus importante. Questions hors sujet, doublons, quelqu'un qui essaie d'être drôle. L'animateur les supprime et personne ne remarque rien. Pas de moment gênant "passons à autre chose". Elles disparaissent, tout simplement.

---

*C'est le jour 22 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure alors que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
