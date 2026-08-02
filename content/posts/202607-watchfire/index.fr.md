---
title: "Watchfire : une salle de contrôle pour agents de code IA"
summary: "Une salle de contrôle open source pour faire tourner des agents de code IA sur plusieurs projets - elle isole le travail, gère les tâches et les worktrees, et vous prévient quand votre attention est réellement nécessaire. Six mois, neuf versions majeures et un problème méta qui ne cesse d'empirer : Watchfire construit désormais Watchfire, et depuis la v9 votre agent peut le piloter aussi."
description: "Une salle de contrôle open source pour faire tourner des agents de code IA sur plusieurs projets - elle isole le travail, gère les tâches et les worktrees, et vous prévient quand votre attention est réellement nécessaire. Six mois, neuf versions majeures et un problème méta qui ne cesse d'empirer : Watchfire construit désormais Watchfire, et depuis la v9 votre agent peut le piloter aussi."
categories: ["Tech", "IA", "Makers"]
tags: ["IA", "Claude Code", "vibe coding", "projets perso", "watchfire"]
date: 2026-08-02
draft: false
---

Les agents de code IA ont cessé d'être une démo il y a environ un an. Claude Code, Codex, opencode, Gemini CLI, Copilot CLI, Cursor Agent - ils écrivent tous du vrai code maintenant. Le goulot d'étranglement s'est déplacé. Ce n'est plus « est-ce que l'agent sait construire ça ». C'est « est-ce que j'arrive à suivre ce que font cinq agents sur six dépôts sans y laisser ma santé mentale ».

Je me suis mis à heurter ce mur tous les jours. Alors j'ai construit un outil. Je l'ai appelé Watchfire.

**Watchfire est une salle de contrôle open source pour faire tourner des agents de code IA sur plusieurs projets : elle isole le travail, gère les tâches et les worktrees git, et vous prévient quand votre attention est réellement nécessaire.** C'est fait pour un développeur seul ou une petite équipe qui a déjà plusieurs tâches d'agent de longue haleine en cours. Ça ne remplace pas votre IDE, et c'est démesuré pour une session ponctuelle de Claude Code.

Six mois plus tard, l'outil a une propriété dérangeante : **Watchfire construit Watchfire**. Chaque fonctionnalité ci-dessous a été spécifiée, exécutée et fusionnée par des agents que Watchfire lui-même orchestrait - y compris la version qui permet à *votre* agent d'en faire autant. Cette boucle est la raison d'être de cet article, et je vais montrer les preuves.

Mais la chose la plus utile que j'ai apprise en six mois n'a rien à voir avec la génération de code. Elle concerne les projets où les tâches disent à l'agent de *ne pas* décider. C'est la seconde moitié de cet article, et c'est celle que je lirais en premier.

C'est open source, sous Apache 2.0, et ça tourne sur macOS, Linux et Windows :

{{< github repo="watchfire-io/watchfire" >}}

{{< figure src="/posts/202607-watchfire/img/tour/dashboard.webp" alt="Le tableau de bord actuel de Watchfire" caption="Le tableau de bord de Watchfire aujourd'hui - pouls en cours/inactif/terminé-aujourd'hui, une bannière d'alerte qui reste silencieuse quand tout va bien, et les insights de la flotte sur la dernière semaine : 69 tâches, 202 commits, +64 979 lignes nettes. Ce dernier chiffre est du churn, pas une prétention de productivité." >}}

## Le problème qui a imposé l'outil

Pendant quelques semaines en début d'année, je faisais des allers-retours entre cinq projets et trois fenêtres de terminal. Chaque projet avait sa session Claude Code. Chaque session avait ses demandes d'autorisation, ses hoquets de rate limit, sa tâche à moitié finie que j'oubliais dès que je changeais de fenêtre. Les agents faisaient un excellent travail. La pièce lente, c'était moi.

Quelques points en particulier :

- **Materner les prompts.** Chaque commande shell demandait une validation. Chaque écriture de fichier demandait une validation. Je revenais d'un café pour trouver un agent en pause au deuxième prompt d'une tâche de 50 étapes.
- **Aucune vue d'ensemble.** Qu'est-ce qui tourne vraiment ? Qu'est-ce qui est bloqué ? Qu'a fait l'agent n° 3 pendant l'heure où je regardais l'agent n° 1 ? Rien ne me le disait.
- **Échecs silencieux.** Les agents mouraient sur un conflit de merge, un rate limit, un YAML mal formé, et puis... s'arrêtaient. Je m'en apercevais une heure plus tard.
- **Contexte perdu.** Changer de projet, c'était réexpliquer les conventions, recoller le CLAUDE.md, recharger le modèle mental de ce qui se trouvait où.

Watchfire a commencé comme une échappatoire du dimanche après-midi à cette douleur.

## Ce qu'est Watchfire aujourd'hui

Quatre choses qu'il fait vraiment pour vous :

- **Vous arrêtez de valider.** Le travail est consigné sous forme de tâches avec un prompt et des critères d'acceptation, puis exécuté sans surveillance. Vous revenez à une branche fusionnée, pas à un prompt en attente.
- **Vous voyez toute la flotte d'un coup.** Un tableau de bord sur tous les projets : ce qui tourne, ce qui est bloqué, ce qui s'est terminé aujourd'hui, ce que ça a coûté. La bannière d'alerte reste silencieuse tant que rien n'a vraiment besoin de vous.
- **Rien n'entre en collision.** Chaque tâche tourne dans sa propre worktree git derrière un bac à sable système, si bien que des agents en parallèle sur plusieurs projets ne peuvent pas corrompre le travail des autres et voient leur capacité à atteindre vos identifiants fortement réduite.
- **Le travail laisse une trace.** Des métriques par tâche - durée, coût, commits, fichiers, lignes, comment le merge s'est passé - remontent dans des Insights par projet et sur toute la flotte, plus des exports CSV/Markdown et un récapitulatif hebdomadaire.

Il prend actuellement en charge **six backends d'agent** via une seule interface `Backend` - Claude Code, OpenAI Codex, opencode, Gemini CLI, GitHub Copilot CLI et Cursor Agent - chacun dans son propre répertoire de configuration isolé (`CODEX_HOME`, `OPENCODE_CONFIG_DIR`, `COPILOT_HOME`) pour que les identifiants et les prompts ne débordent pas d'une session à l'autre. Vous pouvez changer d'agent tâche par tâche.

### Deux couches de rayon d'action

C'est la partie que je voudrais connaître si quelqu'un d'autre avait construit ça, parce que « laissez tourner et allez-vous-en » n'est raisonnable que si vous savez jusqu'où « ça » peut aller.

Chaque tâche tourne derrière **deux couches d'isolation indépendantes**. La première est une worktree git : chaque tâche obtient son propre checkout `watchfire/<task_number>`, si bien que deux agents dans le même dépôt ne voient pas les modifications à moitié faites de l'autre, et rien n'atterrit sur votre branche tant que l'exécution n'a pas réussi et fusionné. La seconde est un bac à sable au niveau du système autour du processus de l'agent - **Seatbelt** sur macOS, **Landlock** sur Linux 5.13+, avec un repli sur les mount namespaces via **bubblewrap** sur les noyaux plus anciens.

Le bac à sable est une liste blanche de système de fichiers, avec des opinions. En écriture : le répertoire du projet, les fichiers temporaires et les caches dont les vraies builds ont besoin (`~/.npm`, `~/.cargo`, `~/go`, `~/.rustup`). En lecture : compilateurs, bibliothèques système, configuration des outils. Bloqué net : `~/.ssh`, `~/.aws`, `~/.gnupg`, `.netrc`, `.npmrc`, les fichiers `.env`, `.git/hooks`, et sur macOS vos dossiers personnels. Un agent qui cherche des clés de déploiement dans ces emplacements protégés n'y trouve rien.

Deux réserves honnêtes, toutes deux énoncées clairement - et non enfouies - dans l'[article sur le sandboxing](https://watchfire.io/blog/2026-05-19-how-watchfire-sandboxes-every-agent) : le bac à sable est centré sur le système de fichiers et ne bloque **pas** le HTTPS sortant à ce jour, et **Windows tourne actuellement sans bac à sable** - l'isolation par worktree s'applique, la couche système non. Les deux sont sur la liste.

C'est cette combinaison qui rend défendable tout le reste de cet article. Contourner les demandes d'autorisation n'est raisonnable que quand le rayon d'action se limite à une worktree jetable et à un système de fichiers dont l'agent ne peut pas sortir.

### Sous le capot

Un **démon Go** (`watchfired`) gère l'orchestration, le sandboxing, l'émulation PTY, les worktrees et un serveur gRPC. Trois clients lui parlent : une **TUI en Bubble Tea** pour le travail en terminal et en SSH, une **GUI Electron + React** qui ouvre une fenêtre système par projet, et une **CLI** légère. Le démon annonce son port via `~/.watchfire/daemon.yaml`, et un `flock` sur le fichier de verrou garantit un démon par utilisateur - fini les « deux fenêtres qui se disputent la même worktree ». La sortie de l'agent transite par un PTY interprété côté démon par un vrai émulateur VT (`hinshun/vt10x`), si bien que l'ANSI s'affiche correctement partout.

L'état, c'est du YAML sur disque, partout - un registre, des réglages globaux, des intégrations, et un `project.yaml` par projet plus des fichiers `.watchfire/tasks/<n>.yaml` - avec des écritures atomiques (tmp + `fsync` + `rename`) depuis la v6.0, qui a refermé à la dure une race condition de perte de données. Tout est greppable, diffable et survit à git.

Et depuis la v9 il y a un quatrième client qui n'est pas du tout une interface : `watchfire mcp serve` expose tout l'orchestrateur comme serveur MCP. Celui-là a droit à sa propre section.

## Petite visite

Ce qui m'a le plus manqué à cette époque tout-terminal, c'était un *tableau de bord*. Pas une liste de projets - un état. Où en est-on ? Qu'est-ce qui coince ? Qu'ont fait les agents aujourd'hui ? C'est la capture qui ouvre cet article : une ligne de pouls pour en cours / demande attention / inactif / terminé aujourd'hui, une bannière tout-va-bien, des insights de flotte avec des fenêtres 7j/30j/90j/Tout, des filtres, et une carte par projet portant ses propres compteurs de tâches et son churn de code.

Vous cliquez sur un projet et il s'ouvre dans sa propre fenêtre - la refonte « Inferno » de la v8. La disposition est centrée sur le chat : la conversation de l'agent occupe le grand panneau, et Tasks / Definition / Insights / Secrets / Trash / Settings vivent dans une barre latérale à onglets sur la droite :

{{< figure src="/posts/202607-watchfire/img/tour/project-window.webp" alt="Une fenêtre de projet Watchfire avec le flux de l'agent à gauche et la file de tâches à droite" caption="Une fenêtre de projet : le chat d'abord, tout le reste est de la référence. Celle-ci, c'est le dépôt de Watchfire lui-même, 129 tâches au compteur, inactif sur une session Claude Code toute neuve." >}}

Chaque projet a une **Definition** en markdown qui est intégrée au contexte du prompt. C'est le brief permanent du projet - ce qu'il est, quelles conventions comptent, quels fichiers comptent - et c'est ce qui rend viable un flux multi-projets, parce que les agents démarrent avec du contexte plutôt qu'avec un cerveau vide :

{{< figure src="/posts/202607-watchfire/img/tour/definition.webp" alt="L'onglet Definition du projet" caption="L'onglet Definition. On l'édite sur place ou on bascule vers $EDITOR." >}}

Les **Insights** par projet répondent à « qu'est-ce que j'ai vraiment fait cette semaine » - tâches par jour, répartition par agent, distribution des durées, coût, et depuis la v8 les métriques de code aussi :

{{< figure src="/posts/202607-watchfire/img/tour/insights.webp" alt="Insights par projet" caption="Insights par projet : KPI, tâches par jour, anneau de répartition par agent, distribution des durées. Il y a aussi un cumul sur toute la flotte dans le tableau de bord principal." >}}

**Wildfire** est le mode autonome : Watchfire exécute les tâches prêtes, affine les brouillons et en génère de nouvelles en boucle jusqu'à ce que la définition du projet dise que c'est terminé. Il a eu une GUI de plein droit en v8 - un bouton de démarrage avec fenêtre de confirmation, et un indicateur de phase en direct pendant l'exécution. L'article [Inside Wildfire mode](https://watchfire.io/blog/2026-05-18-inside-wildfire-mode) en détaille toute la mécanique :

{{< figure src="/posts/202607-watchfire/img/tour/wildfire-confirm.webp" alt="La fenêtre de confirmation Start Wildfire" caption="La fenêtre dit tout haut ce qu'on tait d'habitude : une boucle autonome qui tourne sans surveillance et consomme des tokens en continu, en remplaçant l'agent actuellement sur le projet. Deux phrases qui m'ont sauvé de moi-même plus d'une fois." >}}

Les **Settings** globaux ont gagné des sous-pages consultables portant les valeurs par défaut de la flotte - quel agent reçoivent les nouveaux projets, et s'ils fusionnent, suppriment les branches et démarrent les tâches prêtes automatiquement, le tout redéfinissable par projet. Le bouton scindé **Open** détecte quelles CLI d'éditeur sont réellement installées, de VS Code et Cursor jusqu'à Zed, JetBrains et Xcode, et fonctionne même quand le PATH de la GUI a été dépouillé.

Pour les heures où Watchfire ne doit pas être ce qu'on a sous les yeux, la v8 a ajouté le **Mini Monitor** - une bande sans cadre toujours au premier plan - et un menu de barre d'état portant le même statut plus le port du démon :

{{< figure src="/posts/202607-watchfire/img/tour/mini-monitor.webp" alt="La fenêtre Mini Monitor" caption="Le Mini Monitor : toute la flotte dans une bande de la taille d'un Post-it. La ligne orange, c'est le seul projet qui fait vraiment quelque chose." >}}

Le même flux existe en **TUI**, parce que la moitié de mon travail se passe en SSH vers une machine Linux, où les tâches s'éditent aussi bien que dans la GUI. Une **CLI** légère couvre tout ce que le démon sait faire :

{{< figure src="/posts/202607-watchfire/img/tour/tui.webp" alt="TUI de Watchfire" caption="La TUI reprend la disposition à deux panneaux de la GUI : tâches à gauche, flux de l'agent à droite, avec des raccourcis pour chat / generate / plan / run all / wildfire / stop." >}}

{{< figure src="/posts/202607-watchfire/img/tour/cli-help.webp" alt="watchfire --help" caption="La surface de la CLI : chat, configure, daemon, define, generate, init, integrations, metrics, plan, run, task, update, wildfire - et, depuis la v9, mcp." >}}

## La preuve : 30 jours de vibe coding

En avril, je me suis engagé sur [30 jours, 30 projets construits par IA](/posts/202604-vibe30/announcement/). Un par jour, tous les jours. Claude Code sur un forfait Max 20x, Watchfire à l'orchestration, Context7 MCP pour alimenter les agents en documentation fraîche.

Le plan, c'était de sortir des projets perso. Ce que je n'avais pas prévu : **Watchfire est devenu le projet mis à l'épreuve chaque jour**, et la file d'issues que je m'étais ouverte à moi-même s'est transformée en la feuille de route produit la plus agressive que j'aie jamais menée.

Quelques moments représentatifs de la [série](/series/30-days-of-vibe-coding/) :

- **Jour 1 (Platformer)** - *« Je ne suis pas resté là à valider chaque modification de fichier. Watchfire a mis les tâches en file et les a traitées. Je suis revenu à un jeu qui marchait. »* La boucle « on s'en va » a fonctionné dès le premier jour. Et elle a instantanément exposé tout ce qui n'était pas prêt : sortie terminal illisible, boucles de redémarrage de l'agent sur les rate limits, le bac à sable qui bloquait `~/Desktop` sur macOS.
- **Jour 12 (Wordle)** - *« Chaque tâche ajoutait une catégorie précise de finition, et aucune n'a cassé ce qui précédait. »* Le modèle de tâches incrémental est la seule raison pour laquelle ça a marché. Les prompts en bloc cassaient tout le temps ; beaucoup de petites tâches bien cadrées, non.
- **Jours 27-28 (Terminal, ideA)** - L'enfer du CI/CD natif multiplateforme. *« Watchfire a beaucoup aidé ici en partant dans des boucles interminables de débogage, test, exécution, échec, et rebelote jusqu'à ce que le pipeline finisse par marcher. Sans cette persévérance, j'aurais abandonné les releases multiplateformes. »*
- **Jour 30 (miniOs)** - *« Jour 1, j'ai construit un jeu de plateforme à partir d'une phrase. Jour 30, j'ai construit un système d'exploitation qui contient ce jeu, et tout ce que j'ai fait entre les deux. »*

Sur les 30 jours : **~450 tâches exécutées via Watchfire et ~1 200 commits**, avec environ 326 000 lignes modifiées - c'est le décompte de Watchfire lui-même, insertions plus suppressions, une mesure de churn et non une prétention de productivité. Cinq versions majeures de Watchfire sont sorties pendant le seul défi (Ember → Spark → Blaze → Beacon → Flare).

Quelque part là-dedans, l'outil a franchi une ligne que je n'avais pas prévue.

## La partie méta

Il y a un moment - quelque part dans la deuxième semaine - où la boucle se referme. Vous utilisez Watchfire pour construire un projet. Le projet révèle un bug dans Watchfire. Vous consignez le bug comme tâche Watchfire. Watchfire lance un agent pour corriger Watchfire. Le correctif sort. Puis vous revenez au projet d'origine, qui attend toujours dans un autre onglet.

La première fois, c'est drôle. À la dixième, c'est juste le flux de travail. Au moment du bilan, c'est tout l'enjeu :

> *Ou plus exactement, Watchfire construit Watchfire maintenant. L'outil orchestre son propre développement.*

C'était écrit en mai. En juillet, ça a cessé d'être une phrase dans un article pour devenir un processus de release. Chaque tâche de la file de la v9 - le squelette du serveur MCP, les outils d'usine à tâches, les outils d'exécution, ceux d'inspection - a été rédigée, exécutée et fusionnée via Watchfire :

{{< figure src="/posts/202607-watchfire/img/meta/building-v9.webp" alt="La fenêtre de projet de Watchfire lui-même avec la file de tâches de la v9 en développement" caption="La v8 en train de construire la v9 : neuf tâches en développement, chacune un morceau du serveur MCP, tournant dans le dépôt de Watchfire lui-même, à l'intérieur de Watchfire." >}}

Et quand la file a été vidée, c'est l'agent qui a préparé la release :

{{< figure src="/posts/202607-watchfire/img/meta/v9-release-chat.webp" alt="L'agent Watchfire annonçant que la v9.0.0 est préparée en draft release" caption="La fin de partie de la v9.0.0, mot pour mot : version incrémentée, CHANGELOG écrit, 22 commits poussés, workflow de release au vert, 20 artefacts préparés en brouillon - et un arrêt net à la seule étape irréversible, en attente d'un oui. Il a placé la limite au bon endroit, ce qui est la partie qui m'importait vraiment." >}}

Le site aussi est dans la boucle. [watchfire.io](https://watchfire.io) - docs, tour, changelog, blog - est un projet Watchfire comme un autre, construit tâche après tâche par ce qu'il documente. Il y a tout un article là-dessus, écrit par le processus qu'il décrit : [Watchfire eats its own dogfood](https://watchfire.io/blog/2026-05-19-eating-our-own-dogfood).

{{< figure src="/posts/202607-watchfire/img/meta/website-v91.webp" alt="Un agent Watchfire mettant watchfire.io à jour en v9.1" caption="Quatre mots de prompt - « update watchfire website to 9.1 » - et l'agent trouve tous les endroits où la version est affirmée (badge du hero, JSON-LD, changelog, RSS), rédige les notes de version, vérifie la build et s'arrête avant de committer. Notez le jugement au milieu : il a laissé un badge sur la 9.0 parce que c'est encore la release phare et que la 9.1 est un correctif." >}}

La raison pour laquelle rien de tout cela n'est un gadget est banale. Chaque petite écorchure que j'ai ressentie a été consignée et corrigée par la machinerie même qui la causait. Chaque « ah, si seulement ça faisait... » est devenu un brouillon de tâche en quelques secondes, et la distance entre repérer un manque et livrer le correctif s'est réduite à quelques heures. Ça ne prouve pas que Watchfire a la bonne surface pour *votre* travail - ça prouve qu'il a la bonne surface pour le seul flux que j'ai pu observer en détail complet, tous les jours, pendant six mois. Il se trouve que c'est une bonne façon de construire un outil. Et la v9, c'est cette observation transformée en produit : si Watchfire pouvait déjà construire Watchfire, il ne manquait plus qu'à laisser *votre* agent prendre le volant aussi.

## Brancher un chat sur l'usine

Ce qui m'amène à la partie de la v9 que j'ai le plus appréciée. Connecter un agent à l'usine n'est pas une chasse au trésor dans les fichiers de configuration - c'est une page de réglages. Watchfire détecte quelles CLI d'agent sont sur votre machine et écrit l'entrée MCP dans la configuration de chacune en un clic :

{{< figure src="/posts/202607-watchfire/img/meta/mcp-settings.webp" alt="La page Settings → MCP avec des installations en un clic par agent" caption="Settings → MCP : une carte par CLI d'agent. Claude Code, c'est un clic - Watchfire écrit l'entrée dans ~/.claude.json. Codex et Copilot ont été détectés automatiquement, à un Install de distance. Il y a un snippet copiable pour tout le reste. Stdio uniquement, local à la machine, rien sur le réseau." >}}

J'ai appuyé sur le bouton Claude Code, relancé une session, et un simple terminal est devenu un client Watchfire. Demandez-lui ce qui tourne et il liste tous les projets enregistrés, vous dit lequel a une boucle Wildfire en phase d'exécution, et sort toute la file de tâches de ce projet - sans la moindre fenêtre Watchfire ouverte.

Une fois qu'on a ça, tout un tas de flux cessent d'être de la science-fiction :

- **Planifier dehors, fabriquer dedans.** Vous brainstormez avec un agent dans un chat - n'importe lequel - et au lieu de vous recracher du code, il consigne des tâches cadrées avec des critères d'acceptation et laisse Watchfire les exécuter en bac à sable, dans des worktrees, avec merges et métriques. La conversation reste une conversation ; le code se passe à l'usine.
- **Travail inter-projets depuis un seul siège.** Une session assise dans le dépôt de ce blog peut consigner un bug qu'elle vient de trouver dans le dépôt de Watchfire, ou lancer une mise à jour de documentation sur le projet du site, sans changer de répertoire ni de fenêtre.
- **Des agents qui relisent des agents.** L'agent extérieur lit `get_task_diff` après une exécution et décide s'il consigne un suivi - une boucle de relecture où le relecteur ne touche jamais à la worktree.
- **Des rapports de bug qui s'écrivent tout seuls.** La première chose que j'ai demandée à une session connectée, ce sont les insights d'un projet, et elle m'a renvoyé un mur de zéros : les tâches historiques n'avaient jamais eu de `completed_at` estampillé, si bien que toute métrique qui s'appuyait dessus ressortait vide. C'est devenu une tâche, et la tâche est devenue la v9.1 deux jours plus tard. L'agent extérieur a trouvé le bug en *utilisant* l'usine.

La métaphore de l'usine cesse d'être une métaphore à ce stade. Watchfire s'occupe de la fabrication - isolation, exécution, fusion, comptabilité - et tout ce qui parle MCP peut se tenir au comptoir des commandes.

## Le test de charge : Neon Fable

Pour savoir si la v9 tenait vraiment le coup, je l'ai pointée sur quelque chose de délibérément déraisonnable : `rpg-fable-test`, un RPG cyberpunk dans le navigateur appelé **Neon Fable**, construit presque entièrement par Wildfire, mon rôle se limitant surtout à écrire la Definition du projet et à regarder la file se vider.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-definition.webp" alt="Wildfire en cours d'exécution avec la définition du projet Neon Fable ouverte" caption="Tout le montage : une Definition qui décrit le jeu (histoire ramifiée en trois actes, moteur de rendu isométrique, combat au tour par tour, inventaire de cyberware) et une boucle Wildfire qui la transforme en tâches. La v1 - la boucle jouable complète - est sortie sous forme des tâches #1-18." >}}

La file de la v1 a mené le jeu de `npm create vite` à une boucle achevée : création de personnage, histoire ramifiée en trois actes, combat au tour par tour à graine fixe, inventaire et cyber-améliorations, fins multiples, un codex des fins, New Game+. Tout le pixel art rédigé *en code* sous forme de grilles de chaînes indexées par palette, parce que c'est là-dessus qu'un agent peut itérer. La file de la v2 - une refonte graphique haute définition et un système modulaire d'apparence de personnage - a été générée par Wildfire lui-même. Le projet en est maintenant à **119 tâches, dont 103 faites et fusionnées**, avec une suite de tests qui passait 902 tests vers la tâche #40 et n'a fait que grossir depuis.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-wildfire.webp" alt="Wildfire exécutant une tâche graphique de Neon Fable" caption="Wildfire en phase d'exécution sur « Day-phase neon states - dusk, night, late-night », en train d'écrire à la main des rampes de couleur émissives en TypeScript. Le serveur de développement Vite dans le shell ancré recharge le jeu à chaque changement." >}}

Et voilà ce qui sort de l'autre côté. Le créateur de personnage, c'est tout le système d'apparence de la v2 rendu visible - composition de sprites en couches, catalogues par emplacement, aperçu en direct, aléatoire verrouillable :

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-appearance.webp" alt="L'étape apparence de la création de personnage dans Neon Fable" caption="Les tâches #33-53 en un seul écran : composition de sprites en couches, catalogues de cheveux/yeux/sourcils/bouche/détails du visage, canaux de couleur, un aperçu rotatif en direct, et un « surprise me » qui respecte les verrous par emplacement. Chaque sprite est une grille de chaînes dans un fichier TypeScript." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-plaza.webp" alt="Jeu isométrique à Cinder Row Plaza" caption="Cinder Row Plaza : tuiles isométriques 64×32, enseignes néon animées, une douzaine de PNJ distincts via le même système de couches, une minicarte et des dialogues ramifiés - chaque pixel rédigé comme du code par un agent qui ne voit pas." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-combat.webp" alt="Combat au tour par tour dans Neon Fable" caption="Combat : ordre d'initiative en haut, budgets de déplacement et d'action, un journal déroulant. Le générateur aléatoire à graine fixe en dessous, c'était la tâche #6, du temps de la file v1." >}}

Neon Fable n'est pas un produit et n'en deviendra pas un. C'est un projet de démonstration, fait pour voir ce qui se passe quand on pointe l'usine sur quelque chose d'inconfortable. Vous pouvez [y jouer dans le navigateur](https://nunocoracao.github.io/neon-fable/) et [lire le code](https://github.com/nunocoracao/neon-fable). Comme test de charge, il a déjà répondu à la question : l'outil ne se contente pas de corriger ses propres bugs et d'écrire sa propre documentation - confronté à quelque chose d'aussi délicat que *le pixel art et le ressenti d'un jeu*, il continue de livrer.

## L'autre moitié : les projets qui sont surtout de la réflexion

Neon Fable est le cas tape-à-l'œil, et c'est aussi le cas trompeur. Il fait passer Watchfire pour une machine à générer du code que vous n'avez pas écrit - c'est la moitié du flux qui est photogénique, et celle en qui j'ai le moins confiance.

Les deux projets les plus récents de mon tableau de bord sont l'inverse. **Anima** est un produit d'agent personnel - un agent persistant par personne - et **FitQuest** est un suivi de forme qui gamifie les métriques de tous les appareils que vous possédez. Les deux ont de vraies ambitions. Aucun n'a encore de code produit. Ce qu'ils ont, c'est un répertoire `docs/`, un journal de décisions, et une Definition de projet dont la première règle est *la documentation fait foi ; le code suit la documentation, jamais l'inverse*.

Du coup, les tâches ne ressemblent en rien à celles de Neon Fable :

- *« Affûter le coin - premier utilisateur, cas d'usage principal, modèle d'interface (**recommander, ne pas figer**) »*
- *« Note de synthèse sur la décision KMP vs Flutter - **recherche uniquement, ne pas décider** »*
- *« Audit de contraste et de vision des couleurs de la palette du HUD »*
- *« Règles de rédaction conformes au MDR dans la voix de marque, et audit de toutes les chaînes visibles par l'utilisateur dans la PoC »*

Relisez ces parenthèses. Ce sont des instructions pour *ne pas* être autonome - rassemble les éléments, signale les compromis, laisse-moi la décision. La Definition d'Anima porte la même posture en règle permanente : ce qui est marqué verrouillé est tranché, et si une tâche expose un manque ou une contradiction, il est demandé à l'agent de **s'arrêter, le remonter, corriger le document, puis continuer** plutôt que d'inventer une direction. Celle de FitQuest dit de faire échouer la tâche purement et simplement - `success: false` avec un motif - plutôt que de sortir du chemin documenté.

Cela transforme la même machinerie en quelque chose de plus proche d'un assistant de recherche avec traçabilité : le travail est cadré, isolé, exécuté et fusionné exactement comme avant, mais ce qui atterrit dans le diff est une note de décision ou une mise à jour de documentation plutôt qu'une fonctionnalité. À ce stade, la Definition n'est plus du bourrage de contexte ; c'est de la gouvernance.

Les deux projets ont bien des artefacts, parce qu'il faut finir par regarder la chose :

{{< figure src="/posts/202607-watchfire/img/projects/anima-ori.webp" alt="L'écran d'accueil d'Anima" caption="L'éclosion d'Anima : un volume de lumière à la dérive qui se rassemble en créature, puis pose six questions - chacune façonne l'être ou devient son premier souvenir. Réalisé comme prototype WebGL autonome sous docs/explorations/, parce que le document de design dit que les prototypes démontrent des choses avant que le code existe." >}}

{{< figure src="/posts/202607-watchfire/img/projects/fitquest-today.webp" alt="L'écran du jour de FitQuest sur iOS" caption="La preuve de concept jetable de FitQuest en SwiftUI - vraies données HealthKit, quêtes avec paliers et séries, une barre d'XP. Explicitement pas le produit : elle existe pour tester si la mécanique de quête survit au contact d'un vrai appareil, et les enseignements repartent dans la documentation avant que le code soit jeté." >}}

Cent trois tâches fusionnées sur le jeu ; trente-huit soigneusement bornées sur les deux autres. Même démon, mêmes worktrees, même bac à sable. La différence tient entièrement à la façon dont la Definition est écrite - et c'est la vraie leçon au bout de six mois, celle que je donnerais à quiconque débute : **l'outil ne vaut que ce que vaut le brief qu'on lui donne, et savoir quand lui dire de ne pas décider constitue l'essentiel du métier.**

## Comment on en est arrivé là

La première version ne s'appelait même pas Watchfire. Elle s'appelait **FORGE** - une unique fenêtre Electron avec un sélecteur de projets, une liste de tâches et un terminal embarqué faisant tourner Claude Code. Rugueuse : modèle de tâches indigent, sortie illisible, changer de projet imposait de relancer l'application. Mais l'idée centrale était déjà là - mettre du travail en file, le regarder s'exécuter, ne pas toucher au terminal directement.

{{< figure src="/posts/202607-watchfire/img/history/forge-jan.webp" alt="FORGE le 12 janvier 2026" caption="12 janvier : FORGE. Un projet à la fois, disposition à onglets, pas de tableau de bord, pas de métriques, pas de multi-agent. L'avatar en pixel art de Claude Code dans le message d'accueil est resté plus longtemps qu'il n'aurait dû." >}}

Début février, j'ai repris le dépôt de zéro en Go - gRPC au lieu de HTTP, YAML au lieu de SQLite, trois binaires au lieu d'un monolithe Electron. C'est la base de code qui tourne encore aujourd'hui. Puis avril est arrivé, et le versionnage a pris un thème : chaque version majeure porte un nom de feu, et la cadence vous dit exactement ce qui a fait mal ce mois-là.

- **v1.0 « Ember »** *(début avril)* - première vraie release. Découverte des transcriptions depuis `~/.claude/projects/` de Claude Code, un garde-fou contre les boucles de redémarrage après trois plantages, le correctif Seatbelt pour les projets dans `~/Desktop`.
- **v2.0 « Spark »** *(mi-avril)* - l'interface de backends enfichables. Codex, opencode et Gemini CLI sortent le même jour, avec changement d'agent par tâche et isolation de configuration par session.
- **v3.0 « Blaze »** *(fin avril)* - Copilot CLI comme 5e backend, plus quinze jours d'hémorragie stoppée : un bug `EXDEV` inter-systèmes de fichiers qui mangeait les mises à jour Linux, la rotation de la liste de tâches, les boucles de mise à jour de la GUI.
- **v4.0 « Beacon »** *(jour 28)* - le basculement d'exécuteur de tâches vers outil d'*exploitation*. Tableau de bord refait, métriques par tâche, Insights, exports, récapitulatif hebdomadaire, notifications système, relais Slack/Discord/webhooks avec vérification de signature, PR automatique sur GitHub.
- **v5.0 « Flare »** *(jour 30)* - bots OAuth Slack et Discord, un serveur HTTP entrant avec rate limiting et idempotence, parité de merge GitLab/Bitbucket, et un correctif pour `run-all` qui s'arrêtait en silence quand un merge échouait. Il se trouve qu'un tableau de bord silencieux est le deuxième pire tableau de bord.
- **v6.0 « Phoenix »** *(début mai)* - écritures YAML atomiques, le démon singleton avec `flock`, Cursor Agent comme 6e backend, et une TUI dotée d'un vrai historique de défilement.
- **v7.0 → v7.4 « Forge »** *(mai-juin)* - oui, le nom d'origine, recyclé en nom de code bien après que la chose à laquelle il appartenait eut été réécrite et abandonnée. Réordonnancement des tâches partout, une fenêtre de chat qui cesse de sauter en haut, un mode chat concentré, et ma meilleure anecdote de guerre : un log de démon enfin plafonné en taille après que celui d'un utilisateur eut atteint **300 Go** sur disque sans que personne ne le remarque ([post-mortem](https://watchfire.io/blog/2026-05-29-forge-7-3-the-300gb-log)).
- **v8.0 « Inferno »** *(fin juin)* - une fenêtre système par projet, une fenêtre d'accueil façon centre de contrôle, la GUI de Wildfire, le Mini Monitor, et des métriques de sortie de code qui mesurent le code livré plutôt que les tâches fermées. ([article de release](https://watchfire.io/blog/2026-06-29-inferno-8-0-parallel-workspaces))
- **v9.0 « Firestorm »** *(26 juillet)* - l'inversion des rôles : une usine MCP de 18 outils, stdio uniquement, avec un mode `--read-only` et des garde-fous partout. ([article de release](https://watchfire.io/blog/2026-07-26-firestorm-9-0-watchfire-as-a-factory))
- **v9.1** *(29 juillet)* - le correctif `completed_at` dont je parlais quelques sections plus haut, avec remplissage rétroactif de ~580 tâches historiques pour que les Insights, les exports et le récapitulatif s'allument tous.

Une dernière capture, puis revenez à celle qui ouvre cet article :

{{< figure src="/posts/202607-watchfire/img/history/watchfire-april.webp" alt="Watchfire en avril 2026" caption="27 avril : la GUI de la réécriture en Go - reconnaissable, mais sans Insights, sans KPI de flotte, sans aperçus en direct. C'est la version qui a encaissé l'essentiel du défi des 30 jours." >}}

Quatorze semaines entre les deux. Le même outil.

## La suite

- Davantage de backends d'agent au fur et à mesure qu'ils apparaissent. L'interface `Backend` est le point d'intégration unique - tout ce qui parle shell et produit une transcription peut s'y greffer.
- Une surface MCP plus large : des outils d'inspection plus riches, et permettre à des agents extérieurs de longue durée de superviser des flottes entières plutôt que des projets isolés.
- De meilleurs outils de diff et de relecture. La visionneuse intégrée est là ; ce qui manque, c'est une vraie surface façon PR « relire puis fusionner » pour les tâches qui demandent un œil humain.
- Les flux d'équipe. Le modèle de tâches en fichiers survit déjà à git - des listes de tâches partagées et des surfaces de relecture en sont l'extension naturelle.

## Essayez-le

{{< github repo="watchfire-io/watchfire" >}}

Sur macOS, l'installation tient en une ligne :

```bash
brew tap watchfire-io/tap && brew install --cask watchfire-io/tap/watchfire
```

Tout le reste : [télécharger la dernière version](https://github.com/watchfire-io/watchfire/releases/latest) · [documentation](https://watchfire.io/docs) · [changelog](https://watchfire.io/changelog) · [blog](https://watchfire.io/blog)

Si vous jonglez avec plus d'un agent IA et que vous vous êtes surpris à alterner entre des terminaux, c'est peut-être la pièce qui vous manque. Pour moi, ça l'était.

*Six mois, neuf releases, et un outil qui a fini par se construire lui-même. La version du « vibe coding » où il faut encore livrer quelque chose à la fin de la journée.*
