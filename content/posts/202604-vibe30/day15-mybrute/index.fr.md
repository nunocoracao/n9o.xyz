---
title: "30 Jours de Vibe Coding - Jour 15 - MyBrute Arena"
description: "Un auto-battler de combat médiéval inspiré du classique MyBrute, avec création de personnage, combats animés, animaux, armes, tournois et un système de prestige."
summary: "Un auto-battler de combat médiéval inspiré du classique MyBrute, avec création de personnage, combats animés, animaux, armes, tournois et un système de prestige."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-15", "game", "auto-battler", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 15
seriesOpened: false
date: 2026-04-20
draft: false
#type: "hidden"
---

Jour 15. Je voulais reconstruire quelque chose que j'adorais quand j'étais ado. MyBrute c'était ce petit jeu navigateur où tu créais un petit combattant, tu défiait les combattants des autres, et tu regardais les batailles se dérouler automatiquement. Aucune stratégie pendant le combat lui-même, juste construire ton personnage et voir ce qui se passe. C'était addictif d'une manière qui n'avait aucun sens vu le peu de choses que tu faisais réellement. Le candidat parfait pour un build d'une journée.

## Le Prompt

> "Construis un jeu de combat en navigateur inspiré de MyBrute. Création de personnage avec personnalisation visuelle, auto-combat au tour par tour avec animations, armes et animaux que tu collectes en gagnant, XP et montée de niveau, tournois, combats de boss et un système de prestige."

{{< alert icon="fire">}}
Essaye le jeu par toi-même [ici](https://vibe30-day15-mybrute.vercel.app)
{{< /alert >}}

## Comment ça a été construit

Watchfire a découpé ça en 27 tâches. C'est beaucoup, et c'est logique. Ce truc a plein de systèmes qui doivent tous communiquer entre eux : maths de combat, courbes d'XP, tables de loot, comportement des animaux, bonus de prestige, tableaux de tournoi, défis quotidiens, suivi des rivaux, succès, replays.

Le build a commencé avec le moteur de combat de base et la création de personnage, puis les systèmes ont été ajoutés un par un. Le design du personnage est passé par plusieurs itérations. J'ai essayé un style chibi, puis un look inspiré de Hollow Knight, puis quelque chose avec des capes flottantes. J'ai finalement atterri sur ces petites silhouettes encapuchonnées qui se lisent bien à l'échelle où elles sont rendues. Trouver le bon style artistique pour les personnages a brûlé plus de tâches Watchfire que j'aimerais l'admettre, mais le résultat final a un bel aspect médiéval sombre.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

**La création de personnage est poussée.** Tu choisis un nom, puis tu personnalises la couleur de peau, la coiffure et sa couleur, le type de corps, la couleur des yeux, les accessoires (cicatrices, peinture de guerre, caches-œil, masques, cornes) et la couleur de la tenue. L'aperçu se met à jour en temps réel sur le côté droit. C'est beaucoup d'options pour un projet d'une journée.

![Création de personnage avec aperçu](images/screenshot-02.png)

![Personnalisation d'un brute nommé Ragnar](images/screenshot-03.png)

**L'écran hub est ta base.** Il montre les stats de ton brute, son niveau, sa barre d'XP, l'arme équipée, les animaux collectés, les compétences apprises et tous tes boutons d'action. Combat, Entraînement, Inventaire, Export, Import, Hall of Fame. Il y a aussi un défi quotidien directement sur le hub avec un bonus d'XP x2 pour l'accepter.

![Hub du personnage](images/screenshot-04.png)

**La sélection d'adversaire te donne des choix.** Tu as trois adversaires parmi lesquels choisir, chacun montrant son niveau, ses stats et son équipement. Le jeu ajuste les adversaires à ton niveau pour que les combats restent compétitifs.

![Choisis ton adversaire](images/screenshot-05.png)

**Le combat est entièrement animé.** Deux personnages s'affrontent dans une arène avec des piliers, des torches et des bannières rouges. Barres de vie en haut, nombres de dégâts qui flottent, effets de coupe sur les impacts. Un journal de combat en bas raconte chaque action. Tu appuies juste sur "Suivant" pour avancer à chaque tour. C'est de l'auto-combat mais tu regardes tout se dérouler étape par étape.

![Combat dans l'arène](images/screenshot-06.png)

![Bataille dans la salle du trône](images/screenshot-01.png)

**La victoire te donne de l'XP et du loot.** L'écran de résultats montre l'XP gagnée avec une barre de progression animée. Gagne assez de combats et tu montes de niveau, débloquant des bonus de stats et du nouvel équipement.

![Écran de victoire](images/screenshot-07.png)

**Le système d'inventaire est étonnamment robuste.** Trois onglets pour les armes, animaux et compétences. Les armes ont des niveaux de rareté (commun à légendaire, avec des bordures colorées). Les animaux ont leurs propres stats. Les compétences sont des capacités passives et actives que tu débloques au fur et à mesure. L'ensemble donne vraiment l'impression d'un inventaire de RPG complet.

![Inventaire d'armes](images/screenshot-09.png)

![Collection d'animaux](images/screenshot-10.png)

![Liste de compétences](images/screenshot-11.png)

**Le mode entraînement permet de grinder.** Appuie sur le bouton Entraînement et ton brute auto-combat 100 batailles. Tu reçois un écran récapitulatif montrant le total d'XP gagnée, les niveaux montés, les victoires et chaque pièce de loot récupérée. C'est un bon moyen d'avancer rapidement dans le début du jeu sans cliquer sur chaque combat.

![Résultats d'entraînement](images/screenshot-08.png)

**Les tournois fonctionnent par élimination directe.** Quatre rounds, difficulté croissante. L'interface du tableau montre ta progression à chaque round, ton prochain adversaire et un bouton de combat bien visible. Gagne le tout et tu reçois des récompenses premium.

![Tableau du tournoi](images/screenshot-12.png)

## Les Rapports de Bugs

Les itérations sur le redesign des personnages ont été le plus gros gouffre de temps. Les premiers styles de personnages avaient l'air bien isolément mais ne se lisaient pas bien dans l'arène à l'échelle du combat. Les silhouettes encapuchonnées finales marchent, mais il a fallu plusieurs allers-retours pour y arriver. C'est un de ces cas où la direction artistique par IA est plus difficile qu'il n'y paraît. Tu peux décrire ce que tu veux, mais "fais que ça rende bien à 80 pixels de haut dans une arène sombre" est un prompt plus compliqué qu'on ne le croit.

L'équilibre des combats est approximatif comme on peut s'y attendre d'un RPG auto-généré. Certaines combinaisons d'armes sont clairement surpuissantes, certains animaux sont nettement meilleurs que d'autres. Mais pour un jeu où le but est de regarder le chaos aléatoire se dérouler, le déséquilibre ajoute presque au plaisir.

## Les Chiffres

- **27 tâches Watchfire** du moteur de combat au système de prestige
- **Plusieurs redesigns de personnage** en essayant les styles chibi, Hollow Knight et capes flottantes
- **4 environnements d'arène** dont une salle du trône
- **3 catégories d'inventaire** avec du loot à niveaux de rareté
- **100 auto-combats** par session d'entraînement
- **20 emplacements de replay** pour revoir les batailles passées

## Essaye-le

{{< github repo="nunocoracao/Vibe30-day15-mybrute" showThumbnail=true >}}

**[Entre dans l'Arène](https://vibe30-day15-mybrute.vercel.app)**

Crée un brute, choisis un combat et vois jusqu'où tu peux monter.

## Verdict du Jour 15

27 tâches c'est beaucoup, et le nombre de systèmes interconnectés (combat, XP, loot, animaux, compétences, tournois, défis quotidiens, rivaux, prestige, replays, succès) est le genre de truc qui prendrait normalement à une petite équipe quelques semaines à assembler. Le fait que tout fonctionne et que c'est réellement fun à jouer est un peu dingue.

Le parcours du design des personnages a été la partie la plus intéressante. Je suis passé par au moins quatre styles visuels distincts avant d'en trouver un qui marchait. C'est un bon rappel que le coding assisté par IA gère très bien la logique et les systèmes, mais la direction artistique nécessite toujours un œil humain et beaucoup d'itérations. Tu ne peux pas juste dire "fais que ça soit cool" et partir.

À mi-chemin. Les jeux deviennent de plus en plus complexes, mais le workflow se fluidifie. Je sais quand pousser pour plus de fonctionnalités et quand déclarer que c'est fini. Cet instinct est peut-être la chose la plus précieuse que j'ai retirée de ce challenge.

---

*C'est le jour 15 de [30 Jours de Vibe Coding](/series/30-days-of-vibe-coding/). Suis l'aventure pendant que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
