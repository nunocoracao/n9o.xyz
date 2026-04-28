---
title: "30 Days of Vibe Coding - Jour 23 - RetroOS"
description: "Un environnement de bureau inspiré de Windows 95 qui tourne entièrement dans le navigateur, avec des fenêtres déplaçables, des applis classiques et une séquence de démarrage."
summary: "Un environnement de bureau inspiré de Windows 95 qui tourne entièrement dans le navigateur, avec des fenêtres déplaçables, des applis classiques et une séquence de démarrage."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-23", "windows95", "retro", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 23
seriesOpened: false
date: 2026-04-28
draft: false
#type: "hidden"
---

Jour 23. J'ai demandé à une IA de me construire Windows 95.

## Le Prompt

Celui-là, c'était de la pure nostalgie :

> "Construis un environnement de bureau inspiré de Windows 95 qui tourne dans le navigateur. Inclus une barre des tâches, un menu Démarrer, des fenêtres déplaçables et redimensionnables, et des applis classiques comme le Bloc-notes, la Calculatrice, Paint, le Démineur, le Terminal, Internet Explorer et Poste de travail. Ajoute une séquence de démarrage, des icônes SVG en pixel art, des effets sonores, un choix de fond d'écran, un effet CRT et un easter egg écran bleu de la mort."

{{< alert icon="fire">}}
Essayez-le vous-même [ici](https://vibe30-day23-retroos.vercel.app)
{{< /alert >}}

## Comment c'a été construit

[Watchfire](https://watchfire.io) a découpé ça en 10 tâches. L'ampleur du truc était dingue. Ce n'est pas une simple appli, c'est toute une interface de système d'exploitation avec un gestionnaire de fenêtres, une barre des tâches, un menu Démarrer et sept applications distinctes qui tournent à l'intérieur. Chacune avait besoin de son propre comportement, de son propre chrome de fenêtre, de ses propres interactions.

La liste des tâches couvrait d'abord le shell du bureau (barre des tâches, menu Démarrer, gestion des fenêtres), puis chaque application une par une, puis les touches finales comme la séquence de démarrage, l'écran bleu, l'effet de lignes de balayage CRT et les effets sonores.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

Ce truc démarre.

![Écran de démarrage](images/screenshot-02.png)

Vous chargez la page et vous avez un écran noir qui dit "RetroOS 95 - Click anywhere to start." Cliquez dessus et vous obtenez une séquence POST en mode texte qui défile, exactement comme le vrai. Puis une barre de progression avec "Starting RetroOS..." avant que le bureau ne se charge.

![Séquence POST](images/screenshot-03.png)

![Barre de chargement](images/screenshot-04.png)

Puis le bureau apparaît et il a le bon look. Cette nuance spécifique de bleu sarcelle. La barre des tâches grise et massive en bas. Le bouton Démarrer dans le coin. Les icônes du bureau alignées sur le côté gauche avec des icônes SVG en pixel art qui ont vraiment l'air de sortir de 1995.

![Bureau](images/screenshot-05.png)

**Le menu Démarrer fonctionne.** Cliquez sur Démarrer et vous obtenez le menu en cascade classique avec Programmes, Documents, Paramètres, Rechercher, Aide, Exécuter et Arrêter. Les applis sont listées directement là. Il a même cette bordure biseautée 3D pour laquelle Win95 était connu.

![Menu Démarrer](images/screenshot-06.png)

**Le Terminal est étonnamment profond.** Ce n'est pas juste un accessoire visuel. Vous pouvez taper `dir` et obtenir un faux listing de fichiers avec AUTOEXEC.BAT et CONFIG.SYS. Le formatage de la sortie correspond à DOS, jusqu'au format de date et au compteur d'octets. Il répond même à `ver` avec une chaîne de version.

![Terminal](images/screenshot-07.png)

![Terminal avec sortie dir](images/screenshot-08.png)

**La Calculatrice fonctionne.** Disposition correcte des boutons, l'affichage en retrait, le cadre biseauté. Elle fait de vrais calculs. Elle ressemble exactement à celle que vous ouvriez quand vous vous ennuyiez en cours d'informatique.

![Calculatrice et Terminal](images/screenshot-09.png)

**Paint est fonctionnel.** Vous avez un canevas, une palette de couleurs en bas, et vous pouvez vraiment dessiner. La sélection d'outils est là. J'ai dessiné un visage dedans parce que c'est ce que tout le monde faisait dans MS Paint en 1997.

![Application Paint](images/screenshot-10.png)

**Internet Explorer a une fausse page d'accueil.** Il charge une page rétro "Welcome to my Homepage" avec du texte coloré, un compteur de visiteurs et un lien vers un livre d'or. L'attention aux détails sur celui-là m'a bluffé.

![IE et autres applis](images/screenshot-12.png)

**Poste de travail affiche les lecteurs.** Disquette A:, disque dur C: et CD-ROM D:. C'est un explorateur de fichiers pour un système de fichiers qui n'existe pas, mais ça a exactement le bon look.

![Poste de travail](images/screenshot-13.png)

**Le Démineur est jouable.** La grille classique avec le compteur et le smiley en haut. Des chiffres, des drapeaux, des mines. C'est la vraie affaire.

**Toutes les fenêtres sont déplaçables et redimensionnables.** Vous pouvez les empiler, les déplacer, les minimiser dans la barre des tâches, et la barre des tâches affiche toutes les fenêtres ouvertes exactement comme le vrai OS le faisait. Tout le système de gestion de fenêtres fonctionne.

![Plusieurs fenêtres ouvertes](images/screenshot-01.png)

Et puis il y a l'easter egg de l'écran bleu de la mort. Je ne vais pas spoiler comment le déclencher, mais il est là, et il a l'air authentique.

## Les rapports de bugs

Honnêtement, pas grand-chose à signaler ici. La gestion des fenêtres a fonctionné du premier coup. Toutes les applis se sont chargées correctement. Les principaux trucs que j'ai remarqués :

- Certaines fenêtres pouvaient chevaucher la barre des tâches si vous les tiriez trop bas
- L'effet CRT était un peu lourd sur les petits écrans
- Le premier clic au Démineur pouvait parfois tomber sur une mine (la vraie version vous protégeait de ça)

Des trucs mineurs. L'expérience de base était solide dès le départ.

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day23-retroos" showThumbnail=true >}}

**[Lancer RetroOS](https://vibe30-day23-retroos.vercel.app)**

Cliquez sur l'écran noir pour démarrer. Cliquez sur Démarrer pour explorer. Ouvrez tout. Essayez les commandes du Terminal. Dessinez quelque chose dans Paint. Jouez au Démineur. Trouvez l'écran bleu.

![Paint et Calculatrice côte à côte](images/screenshot-11.png)

![Explorateur de fichiers Poste de travail](images/screenshot-14.png)

## Verdict du jour 23

C'est un de ces projets où le facteur nostalgie à lui seul justifie la construction. Mais au-delà de ça, l'ampleur technique est impressionnante. Un gestionnaire de fenêtres, sept applis distinctes, une séquence de démarrage, des effets sonores, des raccourcis clavier, un faux système de fichiers, un faux internet. Le tout à partir d'une seule session de prompts.

Ce qui me frappe, c'est l'attention aux détails. La couleur bleu sarcelle du bureau. Le gris spécifique du chrome des fenêtres. Les bordures biseautées. La façon dont les boutons de la barre des tâches changent quand une fenêtre est active ou inactive. Personne ne lui a dit de bien faire ces détails. L'IA savait juste à quoi ressemblait Windows 95 et elle a parfaitement capturé l'esthétique.

Si vous avez grandi en cliquant sur Démarrer pour la première fois sur une tour beige au milieu des années 90, allez essayer celui-là. Ça va vous ramener direct à cette époque.

---

*C'est le jour 23 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
