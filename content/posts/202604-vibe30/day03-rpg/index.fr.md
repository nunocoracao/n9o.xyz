---
title: "30 Days of Vibe Coding - Jour 3 - RPG"
description: "Un RPG au tour par tour avec des graphismes isométriques, la création de personnage, des combats, des quêtes et un système de sauvegarde, le tout dans le navigateur."
summary: "Un RPG au tour par tour avec des graphismes isométriques, la création de personnage, des combats, des quêtes et un système de sauvegarde, le tout dans le navigateur."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-03", "typescript", "pixi.js", "game", "rpg"]
series: ["30 Days of Vibe Coding"]
series_order: 3
seriesOpened: true
date: 2026-04-08
draft: false
---

Jour 3. J'ai demandé un RPG complet. Dans un navigateur. En une journée.

## Le Prompt

> « Je veux créer un RPG dans le navigateur avec des graphismes isométriques, la personnalisation du personnage, des combats au tour par tour, des quêtes et un système de sauvegarde/chargement. »

C'est une quantité absurde de choses à demander en un seul prompt. Un RPG, ce n'est pas un petit jeu. Il y a des classes de personnages, des systèmes d'inventaire, des arbres de dialogue, le suivi des quêtes, les mécaniques de combat, l'exploration de la carte. N'importe lequel de ces éléments constitue un projet à lui seul. Je voulais voir ce qui se passerait si je les demandais tous en même temps.

## Comment C'est Été Construit

[Watchfire](https://watchfire.io) a pris le prompt et l'a décomposé en tâches. Le fichier package.json porte encore la trace de la première tâche dans son nom : `watchfire-0000-project-setup---initialize-nex`. D'après la structure du projet, je peux voir que le travail a été réparti entre les systèmes principaux : la configuration du projet avec Next.js et Pixi.js, les définitions de types, la gestion de l'état du jeu, les données de carte pour trois zones (ville, forêt, donjon), le moteur de combat, les bases de données d'objets et d'ennemis, le système de dialogue, la base de données des quêtes, le rendu isométrique, et tous les composants d'interface par-dessus.

La liste des composants à elle seule vous indique l'ampleur de ce qui a été construit : CharacterCreation, CombatUI, DialogueBox, EquipmentPanel, GameHUD, GameMenu, Inventory, IsometricWorld, ItemTooltip, MainMenu, QuestLog, SaveLoadMenu, SettingsPanel, VictoryScreen. C'est 14 composants React plus la couche de logique de jeu en dessous.

Je n'étais pas là à guider chaque étape. Je suis revenu sur un jeu fonctionnel et j'ai commencé à y jouer.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce Que J'ai Obtenu

Celui-là m'a vraiment surpris.

![Écran titre avec la marque Realm of Shadows](images/screenshot-01.png)

**Il s'est nommé lui-même.** « Realm of Shadows : An Isometric Adventure. » Je ne lui ai jamais donné de nom. Il en a choisi un, a conçu un écran titre avec du texte stylisé, et a ajouté une option de paramètres dans le menu principal. Le schéma de couleurs bleu marine foncé et or se retrouve dans tout le jeu.

![Création de personnage - saisie du nom](images/screenshot-02.png)

**La création de personnage est un assistant en plusieurs étapes.** Vous entrez un nom, choisissez une classe et vérifiez vos statistiques avant de commencer. Il vous guide à travers trois écrans avec des points de progression en haut. Chaque classe (Warrior, Mage, Rogue) a des répartitions de statistiques et un équipement de départ différents.

![Écran de sélection de classe](images/screenshot-04.png)

Les cartes de sélection de classe affichent les détails des statistiques pour chaque option. Le Warrior obtient une santé et une force élevées. Le Mage obtient une magie et un mana élevés. Le Rogue obtient des statistiques équilibrées avec une vitesse élevée. Il y a de petites icônes pour chaque classe et des barres de statistiques colorées. C'est un travail d'interface soigné.

![Récapitulatif du personnage avant de commencer](images/screenshot-05.png)

**L'écran récapitulatif affiche votre équipement de départ.** Un Mage nommé John commence avec un Bâton en Bois, une Tunique en Tissu, un Pantalon en Cuir et des Bottes Usées. Vous pouvez voir toutes vos statistiques de base avant de vous engager. C'est le genre de détail qui donne l'impression qu'un jeu est terminé.

![Vue isométrique de la ville](images/screenshot-06.png)

**Le monde isométrique fonctionne vraiment.** Il y a une ville avec des bâtiments, des chemins et des PNJ qui se promènent. Votre personnage possède un HUD en haut à gauche affichant les PV, les PM et le niveau. Il y a une minicarte en haut à droite indiquant « Willowbrook » comme emplacement actuel. Vous vous déplacez en cliquant sur des cases ou en utilisant WASD.

![Dialogue PNJ avec l'Ancienne Mira](images/screenshot-08.png)

**Les PNJ ont des arbres de dialogue.** L'Ancienne Mira vous accueille : « Ah, vous vous êtes enfin réveillé ! Je suis l'Ancienne Mira, gardienne du Village de Willowbrook. » La boîte de dialogue apparaît en bas de l'écran avec le nom du PNJ mis en évidence en or. Vous cliquez ou appuyez sur Entrée pour continuer.

![Options de dialogue à embranchements](images/screenshot-10.png)

**Le dialogue se ramifie.** L'Ancienne Mira vous demande si vous allez l'aider avec les créatures obscures dans la forêt. Vous avez deux choix : « Je vais vous aider » ou « Parlez-moi davantage de ces créatures. » Ce n'est pas juste du texte d'ambiance. Cela se connecte au système de quêtes.

![Journal de quêtes affichant la quête active](images/screenshot-13.png)

**Il y a un journal de quêtes complet.** Il suit les quêtes actives et complétées avec des onglets. « Un Nouveau Départ » est la quête principale, marquée comme histoire principale. Elle affiche les objectifs (« Parlez avec l'Ancienne Mira »), les récompenses (or et XP) et les descriptions de quête. L'interface a le même style doré et sombre que tout le reste.

![Menu pause](images/screenshot-12.png)

**Le menu pause est complet.** Reprendre, Inventaire, Personnage, Journal de quêtes, Sauvegarder, Paramètres, Menu principal. Il affiche le nom de votre personnage, sa classe, son niveau, ses PV et ses PM en haut. Ce n'est pas une solution rapide. Quelqu'un a réfléchi à la hiérarchie de l'information ici.

![Combat au tour par tour](images/screenshot-14.png)

**Le combat est au tour par tour avec de vraies options.** Vous combattez un Slime Vert. Vous et l'ennemi avez des barres de PV. Votre barre d'actions en bas vous donne cinq choix : Attaquer, Magie, Défendre, Objet, Fuir. Chacun est codé par couleur. L'écran de combat est propre et lisible.

![Combat avec les boutons d'action mis en évidence](images/screenshot-15.png)

![Écran de victoire avec récompenses XP et or](images/screenshot-16.png)

**La victoire vous donne de l'XP et de l'or.** Après avoir vaincu le Slime Vert, vous obtenez de l'expérience et de la monnaie. L'écran de victoire montre exactement ce que vous avez gagné avec un bouton continuer. Une boucle de rétroaction simple et satisfaisante.

![Système d'inventaire et d'équipement](images/screenshot-17.png)

**Le système d'inventaire possède des emplacements d'équipement et un sac à dos.** Il y a des emplacements pour l'arme, la tête, le torse, les jambes, les pieds et deux emplacements d'accessoires. Votre sac à dos affiche les objets dans une grille. Vous pouvez voir les statistiques de dégâts des armes et de défense des armures en bas.

![Infobulle d'objet avec option d'utilisation](images/screenshot-18.png)

**Les objets ont des infobulles et des actions.** Survoler une Petite Potion de Soin affiche sa description (« Restaure 30 PV ») avec des boutons Utiliser et Annuler. C'est un vrai système d'inventaire, pas un espace réservé.

![Panneau des statistiques du personnage en superposition](images/screenshot-19.png)

**Le panneau des statistiques du personnage affiche tout.** Votre fiche de statistiques complète superposée sur le monde du jeu. Nom, classe, niveau, barre d'expérience, PV, PM et toutes les statistiques individuelles. Il répertorie également vos objets équipés avec leurs valeurs de statistiques.

## Les Rapports de Bugs

Je n'ai pas consigné de bugs spécifiques sur celui-là au-delà des premiers tests. Le jeu a fonctionné dès le premier chargement, ce qui était un changement agréable par rapport au jour 1. Les interactions avec les PNJ, le déroulement du combat et le système de sauvegarde ont tous fonctionné sans que je dépose de problèmes. Cela dit, c'est encore brut sur les bords. Le déplacement isométrique peut sembler un peu rigide, et le combat pourrait bénéficier de plus de variété d'ennemis. Mais rien n'était cassé.

## Les Chiffres

- **34 fichiers sources** répartis entre composants, logique de jeu, hooks, types et utilitaires
- **3 zones de carte** (ville, forêt, donjon) avec des données de tuiles isométriques
- **14 composants React** pour toute l'interface du jeu
- **6 modules du moteur de jeu** (combat, objets, ennemis, dialogue, quêtes, rendu isométrique)
- **Next.js 16 + Pixi.js 8 + React 19 + TypeScript** comme stack technique
- **Temps de travail total :** peut-être 20 minutes de jeu et d'exploration

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day03-rpg" showThumbnail=true >}}

**[Jouez à Realm of Shadows](https://vibe30-day03-rpg.vercel.app)**

WASD ou les touches fléchées pour se déplacer. Cliquez sur les PNJ pour parler. I, C, Q pour l'inventaire, le personnage et le journal de quêtes. ÉCHAP pour le menu. F5 pour la sauvegarde rapide.

## Verdict du Jour 3

C'est le projet où j'ai arrêté de considérer ce défi comme une nouveauté. Un RPG au tour par tour avec des graphismes isométriques, trois classes de personnages, des dialogues à embranchements, un système de quêtes, la gestion d'inventaire, des emplacements d'équipement, des combats au tour par tour et des sauvegardes persistantes. Dans un navigateur. À partir d'un seul prompt.

Je n'ai jamais construit de RPG. Je n'ai jamais implémenté de moteur de rendu isométrique. Je n'ai jamais conçu un système de combat ou un système d'équipement ou un arbre de dialogue. Je ne saurais pas par où commencer avec l'un d'eux individuellement, et encore moins tous ensemble. Cela aurait été un projet de plusieurs mois pour moi, en supposant que je puisse le terminer.

Est-ce un RPG complet ? Pas vraiment. Il en a le squelette. Le contenu est mince, il y a peut-être une poignée de rencontres, et l'histoire est une mise en place fantastique générique. Mais tous les systèmes sont là et ils fonctionnent ensemble. Le personnage que vous créez persiste jusqu'au combat, votre équipement affecte vos statistiques, les quêtes suivent votre progression et les sauvegardes persistent entre les sessions. L'architecture est solide.

Ce qui me frappe le plus, c'est la qualité de l'interface. Le schéma de couleurs or sur fond sombre, l'assistant de création de personnage en plusieurs étapes, les barres de statistiques, le journal de quêtes avec onglets, la grille d'inventaire. Rien de tout cela ne figurait dans mon prompt. J'ai demandé des systèmes et j'ai obtenu une expérience conçue. C'est la partie que je n'aurais pas pu faire moi-même même avec un temps illimité. Je ne suis pas designer.

Le coût de la construction de quelque chose comme ça vient de s'effondrer. Pas le coût de la création d'un excellent RPG. Cela prend encore des années de contenu, d'équilibrage et de finition. Mais le coût de la création d'un prototype de RPG fonctionnel avec de vrais systèmes ? Il est passé de plusieurs mois à quelques heures.

---

*Ceci est le jour 3 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez la progression alors que je publie 30 projets en 30 jours avec du codage assisté par IA.*
