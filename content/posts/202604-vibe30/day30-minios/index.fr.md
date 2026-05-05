---
title: "30 Days of Vibe Coding - Jour 30 - miniOs"
description: "Un système d'exploitation de bureau web construit entièrement dans le navigateur, avec les 30 projets Vibe30 comme applications installables."
summary: "Un système d'exploitation de bureau web construit entièrement dans le navigateur, avec les 30 projets Vibe30 comme applications installables."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-30", "nextjs", "react", "typescript", "os"]
series: ["30 Days of Vibe Coding"]
series_order: 30
seriesOpened: false
date: 2026-05-05
draft: false
#type: "hidden"
---

Jour 30. Le dernier. J'ai construit un système d'exploitation.

Pas un vrai. Un faux dans le navigateur. Mais le genre de faux où tu le démarres, tu te connectes, tu ouvres un gestionnaire de fichiers, tu redimensionnes des fenêtres, tu les accroches aux coins, tu changes d'espace de travail, tu ouvres un terminal qui lance neofetch, tu changes le fond d'écran, et ensuite tu lances n'importe lequel des 29 projets que j'ai déjà construits ce mois-ci comme des apps à l'intérieur. Ce genre de faux.

C'est le projet final. Chaque projet des 30 derniers jours vit à l'intérieur de celui-ci.

## Le Prompt

> "Construis un OS de bureau web. Gestion de fenêtres avec glisser, redimensionner, minimiser, maximiser, accrocher. Plusieurs espaces de travail. Barre des tâches, menu démarrer, recherche spotlight, alt-tab. Séquence de démarrage, écran de connexion, écran de verrouillage, économiseur d'écran. Thèmes sombre et clair avec couleurs d'accentuation. Fonds d'écran avec parallaxe. Widgets de bureau. Apps intégrées : Gestionnaire de fichiers, Éditeur de texte, Terminal avec neofetch, Navigateur, Calculatrice, Paramètres, Lecteur de musique, Visionneuse d'images, Paint, Calendrier. Et chaque projet Vibe30 doit être accessible comme une app installée."

Le plus gros prompt du challenge, pour le plus gros projet.

{{< alert icon="fire">}}
Essayez-le vous-même [ici](https://vibe30-day30-minios.vercel.app)
{{< /alert >}}

## Comment ça a été construit

[Watchfire](https://watchfire.io) a découpé celui-ci en 25 tâches. Pas le nombre le plus élevé du challenge (l'éditeur de code a atteint 43), mais celui-ci avait la portée la plus large. Ce n'était pas une seule app. C'était un shell qui devait contenir toutes les autres apps.

Les tâches couvraient tout ce qu'on attend d'une construction d'OS (si on peut appeler ça comme ça) : gestion de fenêtres de base, système d'espaces de travail, barre des tâches et zone de notification, menu démarrer, recherche spotlight, le switcher alt-tab, flux de démarrage et de connexion, écran de verrouillage et économiseur d'écran, moteur de thèmes, système de fond d'écran avec parallaxe, widgets de bureau, et ensuite chaque app intégrée comme sa propre tâche. Les dernières tâches ont géré l'intégration des 30 projets Vibe30 comme apps lançables et la construction d'un tour de bienvenue.

J'ai passé le plus de temps en pratique sur celui-ci parmi les 30 jours. Pas à écrire du code, mais à tester les interactions. L'accrochage de fenêtres a beaucoup de cas limites. Que se passe-t-il quand tu glisses vers un coin ? Et si tu maximises une fenêtre déjà accrochée ? Et si tu changes d'espace de travail pendant qu'une fenêtre est en cours de déplacement ? Ce sont le genre de trucs que j'ai dû essayer et rapporter.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Bureau miniOs](images/screenshot-01.png)

Ça démarre. Il y a une animation de séquence de démarrage avec une barre de chargement et des messages système qui défilent. Puis un écran de connexion. Puis le bureau se charge.

![Démarrage et connexion](images/screenshot-02.png)

**La gestion de fenêtres fonctionne vraiment.** Glisse les fenêtres. Attrape n'importe quel bord ou coin pour redimensionner. Double-clique sur la barre de titre pour maximiser. Glisse vers le bord gauche pour accrocher à gauche, bord droit pour accrocher à droite, coins pour accrocher en quadrants. Minimise dans la barre des tâches et clique pour restaurer. C'est le genre de truc qui semble simple mais qui a un million de petits détails d'interaction.

![Gestion de fenêtres](images/screenshot-03.png)

**Quatre espaces de travail.** Bascule entre eux avec Ctrl+1 à Ctrl+4, ou clique dans la barre des tâches. Chaque espace de travail a son propre ensemble de fenêtres. Ça donne l'impression d'un vrai setup multi-bureau.

**La barre des tâches est solide.** Bouton menu démarrer, apps épinglées, indicateurs de fenêtres ouvertes, switcher d'espaces de travail, zone de notification avec horloge. Clique sur le menu démarrer et tu obtiens un lanceur d'apps par catégories. Appuie sur Cmd+K pour la recherche spotlight et tape pour trouver n'importe quelle app instantanément. Alt+Tab affiche un switcher de fenêtres avec aperçus.

![Menu démarrer et barre des tâches](images/screenshot-04.png)

**Thèmes sombre et clair avec 9 couleurs d'accentuation.** Ouvre les Paramètres, choisis ton thème, choisis ta couleur d'accentuation, et tout l'OS se redessine. Il y a 4 fonds d'écran avec un effet parallaxe qui réagit au mouvement de la souris.

![Paramètres et thèmes](images/screenshot-05.png)

**Les apps intégrées fonctionnent.** Le Gestionnaire de fichiers parcourt un système de fichiers virtuel. L'Éditeur de texte fait annuler/refaire et peut sauvegarder/ouvrir des fichiers. Le Terminal exécute des commandes et a un neofetch fonctionnel qui affiche les infos système de miniOs. La Calculatrice gère la saisie au clavier. Paint te permet de dessiner. Le Calendrier fonctionne.

![Apps intégrées](images/screenshot-06.png)

**Et ensuite il y a les apps Vibe30.** Les 30 projets apparaissent dans le menu démarrer sous leur propre catégorie. Les projets web s'ouvrent dans un iframe intégré directement dans une fenêtre miniOs. Les projets TUI et natifs qui ne peuvent pas tourner dans un navigateur affichent une carte de projet avec des liens vers le repo et la démo en live. Tu peux avoir le Platformer qui tourne dans une fenêtre, Snake dans une autre, et Wordle dans une troisième, le tout pendant que le Lecteur de musique joue en arrière-plan.

![Apps Vibe30 en cours d'exécution](images/screenshot-07.png)

Cette dernière partie est ce qui en fait un projet final. Ce n'est pas juste un clone d'OS. C'est un conteneur pour l'ensemble du challenge.

## Les Rapports de Bugs

Celui-ci a eu la plus longue liste de bugs de tous les projets :

- Les poignées de redimensionnement de fenêtre étaient trop petites sur le bord inférieur
- L'accrochage aux coins ne fonctionnait pas quand une fenêtre était déjà maximisée
- L'économiseur d'écran ne se déclenchait pas si une fenêtre avait le focus
- L'ordre alt-tab était faux après avoir minimisé une fenêtre
- Les résultats de recherche spotlight ne se mettaient pas à jour en changeant d'espace de travail
- Certains iframes Vibe30 ne chargeaient pas à cause des en-têtes X-Frame-Options
- La séquence de démarrage était trop rapide (rapport de bug ironique, mais il fallait que ça ait l'air réel)
- L'effet parallaxe était saccadé sur Safari

Les cas limites de gestion de fenêtres étaient le thème principal. Chaque fois que je pensais que l'accrochage fonctionnait, je trouvais une autre combinaison qui le cassait.

## Les Chiffres

- **25 tâches Watchfire** de l'architecture au tour de bienvenue
- **30 projets Vibe30** intégrés comme apps lançables
- **10 apps intégrées** (Gestionnaire de fichiers, Éditeur de texte, Terminal, Navigateur, Calculatrice, Paramètres, Lecteur de musique, Visionneuse d'images, Paint, Calendrier)
- **4 espaces de travail**, **9 couleurs d'accentuation**, **4 fonds d'écran**, **2 thèmes**
- **Next.js 16, React 19, TypeScript, Tailwind CSS 4**

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day30-minios" showThumbnail=true >}}

**[Ouvrir miniOs](https://vibe30-day30-minios.vercel.app)**

Meilleure expérience sur desktop. Essayez les raccourcis clavier : Cmd+K pour spotlight, Ctrl+1-4 pour les espaces de travail, Alt+Tab pour changer de fenêtre.

## Verdict du Jour 30

Je reviens sans cesse à l'absurdité de tout ça. J'ai demandé à une IA de me construire un système d'exploitation et elle l'a fait. Pas une démo jouet avec une fausse barre des tâches et rien derrière. Un truc avec une vraie gestion de fenêtres, un vrai isolement d'espaces de travail, une vraie navigation au clavier, un vrai système de thèmes, et 40 applications fonctionnelles à l'intérieur.

Est-ce un vrai OS ? Évidemment non. Mais c'est un vrai logiciel. L'accrochage de fenêtres à lui seul est quelque chose que j'aurais du mal à implémenter correctement tout seul. Les 30 projets de ce challenge peuvent tourner à l'intérieur, simultanément, dans leurs propres fenêtres, sur des espaces de travail séparés.

Jour 1, j'ai construit un platformer à partir d'une seule phrase. Jour 30, j'ai construit un système d'exploitation qui contient le platformer, et tout ce que j'ai fait entre les deux.

Trente projets. Trente jours. Terminé.

---

*Ceci est le jour 30 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). C'était le dernier projet, mais il reste encore un post à venir : le récapitulatif complet avec tout ce que j'ai appris en livrant 30 projets en 30 jours.*
