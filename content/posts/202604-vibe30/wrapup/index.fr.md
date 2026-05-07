---
title: "30 Jours de Vibe Coding - Le Bilan"
description: "30 projets en 30 jours avec du coding assisté par IA. Voici ce qui était facile, ce qui était difficile, ce qui était inattendu, et où tout ça nous mène."
summary: "30 projets en 30 jours avec du coding assisté par IA. Voici ce qui était facile, ce qui était difficile, ce qui était inattendu, et où tout ça nous mène."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "wrapup"]
series: ["30 Days of Vibe Coding"]
series_order: 31
seriesOpened: false
date: 2026-05-07
draft: false
#type: "hidden"
---

C'est fait. Trente projets. Trente jours.

Un jeu de plateforme. Un clone de Snake sur un Nokia 3310. Un RPG avec des graphismes isométriques. Tetris avec de la musique procédurale. Breakout. Un minuteur Pomodoro en Go. Un tableau de bord git. Une appli de notes avec un serveur MCP. Un tableau kanban qu'une IA peut gérer. Un clone de Miro. Un clone de Trello. Wordle. Un générateur de portfolio. Un tableau de bord météo en art ASCII. Un auto-battler. Un jeu de morpion où l'IA apprend de ses défaites. Un jeu de hacking sur une IA qui s'échappe de son confinement. Une appli de sondage en temps réel. Un mur de réactions pour les événements. Un mood board collaboratif. Des salons de chat anonymes. Un outil de Q&R en direct. Windows 95 dans un navigateur. Un redesign de blog. Un mixeur de sons d'ambiance sans aucun fichier audio. Du pixel art collaboratif. Un émulateur de terminal en Rust. Un éditeur de code en Go. Un clone de Notion. Et un système d'exploitation qui contient tout ce qui précède.

Tout ça a été possible grâce aux agents de coding. Principalement Claude, parfois Codex, mais aussi [Watchfire](https://watchfire.io) pour orchestrer le travail complexe en transformant des idées brutes en spécifications détaillées que mes agents pouvaient exécuter.

## Les Chiffres

- **30 projets** livrés et déployés
- **~326 000 lignes de code** sur l'ensemble des projets
- **~1 200 commits** au total
- **~450 tâches Watchfire** (de 4 tâches pour le morpion à 43 pour l'éditeur de code)
- **8 stacks technologiques :** TypeScript/React, Go/Bubble Tea, Python/Textual, Rust/Tauri, Go/Wails, vanilla JS, Astro, Next.js
- **6 projets Firebase** avec synchronisation en temps réel
- **5 jeux,** 5 applis TUI, 3 applis desktop natives, 17 applis web
- **3 plateformes** (macOS, Linux, Windows) pour les applis natives
- **7 langues** par article de blog (anglais, portugais, espagnol, allemand, français, italien, japonais, chinois)

## Ce Qui Est Facile

Les choses qui ont fonctionné presque à chaque fois, avec un minimum d'itération.

**Les jeux et les applis autonomes.** Tout ce qui a des règles claires et un périmètre défini. Tetris, Wordle, Breakout, Snake. L'IA sait à quoi ces jeux doivent ressembler parce que ce sont des modèles bien documentés. Vous décrivez le jeu, l'IA construit le jeu. Les résultats étaient jouables dès la première compilation presque à chaque fois.

**L'UI frontend.** Les composants React, le style Tailwind, la mise en page, les animations. L'IA génère du code UI propre et rapidement. Layouts en cartes, modales, barres latérales, tableaux de bord, formulaires. Si vous pouvez décrire à quoi ça doit ressembler, vous obtenez quelque chose de proche dès le premier passage.

**Les systèmes et la logique.** Moteurs de combat, Q-learning, gestion d'état kanban, annuler/rétablir, watchers de fichiers, serveurs MCP. L'IA gère bien le travail algorithmique et les machines à états. La machine à états du minuteur Pomodoro, le système de combat MyBrute, l'implémentation du Q-learning dans le morpion. Tout s'est assemblé sans que j'aie à débugger la logique de base.

**L'encapsulation d'outils existants.** Le Jour 7 a prouvé qu'on peut pointer l'IA vers n'importe quel CLI avec une sortie structurée et obtenir une interface wrapper construite autour. Ça exécute git en shell, parse le texte, construit un tableau de bord. Le même pattern fonctionne pour Docker, kubectl, tout ce qui a une interface texte.

**L'intégration Firebase.** Authentification anonyme, écouteurs Firestore, synchronisation en temps réel. L'IA connaissait les patterns Firebase sur le bout des doigts. Six projets utilisaient Firebase et la collaboration en temps réel fonctionnait dès le premier déploiement à chaque fois. Règles de sécurité, modélisation des données, gestion des connexions. Tout géré.

## Ce Qui Est Encore Difficile

Les choses qui ont systématiquement nécessité une intervention humaine, de l'itération et de la patience.

**Le style visuel et la direction artistique.** Ça va au-delà des jeux. Chaque fois que vous voulez une identité visuelle spécifique pour une appli frontend, l'IA galère. Le Jour 15 (MyBrute) est passé par quatre styles de personnages complètement différents avant d'en trouver un qui marchait. Mais le même problème se pose dans les applis web. L'esthétique des landing pages, les palettes de couleurs qui sonnent juste, les associations typographiques, les espacements qui semblent intentionnels plutôt que générés. L'IA produit un résultat. Un humain décide si c'est bien.

**Le déploiement et l'infrastructure.** Le code marche sur votre machine. Puis vous déployez et tout casse. Le Jour 29 (n0ti0n) a eu des dizaines de commits juste pour débugger Firestore en production. Configuration du long polling, paramètres de cache, trimming des variables d'environnement, timeouts de connexion. Des trucs qui ne se manifestent qu'après le déploiement. Le Jour 28 (ideA) a été une guerre de commits pour faire builder Wails sur trois plateformes dans GitHub Actions. L'IA peut suggérer des correctifs rapidement, mais le cycle déployer-tester-itérer est lent quoi qu'il arrive.

**Le CI/CD des applis natives.** Les builds cross-platform sont pénibles. Les dépendances WebKit sur Linux, les build tags par plateforme, la génération des bindings Wails, la signature de code, les scripts d'installation qui détectent l'OS et l'architecture. Les Jours 27 et 28 ont passé plus de temps sur le CI que sur les applications elles-mêmes. Watchfire a beaucoup aidé ici en faisant des boucles infinies de débugging, test, exécution, échec, et répétition jusqu'à ce que le pipeline finisse par fonctionner. Sans cette persévérance, j'aurais abandonné les releases cross-platform.

**La finition et les cas limites.** Le snapping de fenêtres au Jour 30 avait un nouveau bug à chaque fois que je pensais que c'était corrigé. Que se passe-t-il quand on snappe une fenêtre maximisée ? Et si on change de workspace en plein drag ? Et le redimensionnement d'une fenêtre snappée ? L'IA construit bien le chemin nominal. Les cas limites ont besoin d'un humain qui teste et signale.

## Ce Qui Était Inattendu

Les choses que je n'avais pas vu venir quand j'ai commencé ce défi.

**L'IA prend des décisions produit.** Le Jour 21 (ChatRooms) utilisait l'authentification anonyme sans que je le spécifie. L'IA a décidé que pour une appli de chat décontractée, forcer la création de compte serait un frein à la conversion. Ce n'est pas de la génération de code. C'est de l'instinct produit. Ça s'est produit à plusieurs reprises. Des fonctionnalités que je n'avais pas demandées apparaissaient parce que l'IA avait déduit qu'elles avaient leur place. C'est peut-être lié au développement piloté par les spécifications. Dans Watchfire, vous spécifiez une direction produit pour le projet. Les agents travaillent vers cette vision et itèrent jusqu'à ce que le code corresponde à la spec. Quand la spec est claire sur ce que le produit doit transmettre comme sensation, l'IA fait de meilleurs choix.

**Les stacks technologiques inconnus fonctionnent bien.** Je ne sais pas écrire du Go. Je n'ai jamais touché Bubble Tea, Lip Gloss, Tauri ou Wails. Je ne connais pas Rust. Mais les Jours 6 à 9 ont livré des applis TUI Go bien finies, le Jour 27 a livré un émulateur de terminal basé sur Rust, et le Jour 28 a livré un éditeur de code Go/Wails. La barrière pour essayer de nouvelles stacks technologiques s'est effondrée. Utiliser Context7 MCP pour alimenter les agents avec la documentation à jour aide beaucoup ici. L'IA n'a pas besoin de se fier à ses données d'entraînement quand elle peut récupérer les dernières docs à la demande.

**Le goulot d'étranglement s'est déplacé.** J'ai arrêté de passer du temps à construire et j'ai commencé à passer du temps à revoir, tester et rédiger des rapports de bugs. Le facteur limitant n'a jamais été "est-ce que l'IA peut écrire ce code." C'était "est-ce que j'ai testé ça assez minutieusement" et "est-ce que ça donne vraiment la bonne sensation."

**L'audio procédural est viable.** Les Jours 4 (Tetris), 12 (Wordle) et 25 (SoundScape) utilisaient la Web Audio API pour synthétiser tous les effets sonores et la musique. Zéro fichier audio. Pluie, vent, crépitement de cheminée, beats lo-fi, effets sonores de jeu. Tout généré avec des oscillateurs et des buffers de bruit. Je n'avais aucune idée que c'était utilisable en production.

**La narration comptait plus que le code.** Les projets qui ont le plus résonné n'étaient pas les plus techniquement impressionnants. Le Jour 17 (Genesis) fonctionnait grâce à l'histoire, pas aux mini-jeux. Le Jour 23 (RetroOS) fonctionnait grâce à la nostalgie, pas au gestionnaire de fenêtres. Le Jour 15 (MyBrute) fonctionnait parce que j'avais un lien personnel avec le jeu original. Le code était la partie facile. L'angle était la partie difficile.

## Ma Prédiction Pour l'Avenir

Le coût de construction d'un prototype vient de s'effondrer. Pas le coût de construction d'un excellent logiciel. Ça prend toujours du temps, du goût et de l'itération. Mais le coût pour tester une idée ? Le coût pour explorer une stack technologique que vous n'avez jamais utilisée ? Quasiment zéro.

**Ajouter des fonctionnalités à un logiciel existant est aussi devenu drastiquement moins cher.** Une fois qu'un projet est mis en place avec la bonne architecture, ajouter de nouvelles fonctionnalités est plus facile que de partir de zéro. L'IA comprend le codebase existant, les patterns sont établis, et chaque nouvelle fonctionnalité s'appuie sur ce qui est déjà là. Le coût marginal de la fonctionnalité suivante tend vers zéro.

**Le goulot d'étranglement est passé de l'écriture du code à la décision de ce qu'on livre.** Comment le marketer ? Comment le vendre ? Quand lancer ? L'ingénierie n'est plus la contrainte. La stratégie produit, le go-to-market et la distribution le sont.

**Ça change déjà la façon dont les équipes travaillent.** Si vous pouvez construire des fonctionnalités en heures plutôt qu'en sprints, est-ce que les roadmaps ont encore un sens ? Comment tester tout ce que vous pouvez livrer ? Comment savoir si ça a le bon impact sur les bonnes métriques business ? Comment tuer les choses aussi vite que vous pouvez les déployer ? Je prédis que les outils d'expérimentation deviendront d'une importance critique pour les entreprises qui développent du logiciel. Tests A/B, feature flags, déploiements progressifs. La capacité à déployer vite ne vaut rien si vous ne pouvez pas mesurer et revenir en arrière tout aussi vite.

**L'IA ne remplacera pas les développeurs. Elle les augmentera.** Le vrai défi est organisationnel. Des entreprises entières sont construites de A à Z autour de la planification, des roadmaps, des cycles de sprints et de l'estimation. Maintenant que construire est rapide, comment les autres fonctions suivent-elles le rythme ? Produit, design, QA, marketing, ventes. La disparition du goulot d'étranglement de l'ingénierie ne signifie pas que le travail disparaît. Ça signifie que le goulot d'étranglement se déplace en amont et en aval. Les entreprises qui s'adaptent à ce changement vont surpasser toutes les autres.

Les outils ne remplacent pas les développeurs. Ils suppriment les raisons de ne pas essayer.

## Watchfire

Chaque projet de ce défi a été construit avec [Watchfire](https://watchfire.io). Je suis vraiment fier de celui-là. C'est mon projet. Ce défi était en partie un moyen de le stress-tester en production tout en créant du contenu. Maintenant vous savez.

Je lui donnais une idée brute, il la transformait en une spec détaillée, découpait le travail en tâches, et exécutait chacune via des agents de coding. Certains jours c'était 4 tâches. D'autres jours c'était 43. Je revoyais le résultat, je testais, je signalais les bugs quand ça cassait, et j'itérais jusqu'à ce que ce soit livré.

J'ai commencé à construire Watchfire pendant ce défi. Le premier projet Platformer a été construit sur la v0. Au moment où miniOs a été livré au Jour 30, on en était à la v5. Chaque projet m'a donné l'occasion de stress-tester l'outil, trouver des bugs, collecter des retours et livrer des améliorations. Le défi et l'outil ont évolué ensemble.

Voici ce qui a changé dans Watchfire pendant les 30 jours :

- **v1.0 Ember** (Jour 8) — Les logs de transcription JSONL ont remplacé la sortie terminal illisible par des logs de conversation propres. Correction de la boucle de redémarrage d'agent qui causait des boucles infinies sur les limites de débit. Correction des problèmes de sandbox bloquant les projets dans les répertoires protégés de macOS.
- **v2.0 Spark** (Jour 11) — Interface backend d'agent pluggable. OpenAI Codex, opencode et Gemini CLI livrés comme backends de première classe aux côtés de Claude Code. Override d'agent par tâche pour pouvoir mixer les agents au sein d'un même projet. Sélecteurs d'agents dans l'assistant d'initialisation, les paramètres TUI et les paramètres GUI.
- **v3.0 Blaze** (Jour 15) — GitHub Copilot CLI comme cinquième backend. Correction des échecs de mise à jour cross-filesystem sur Linux. Correction du bug de rotation de la liste de tâches dans les projets avec beaucoup de tâches. Correction des prompts de mise à jour GUI qui se déclenchaient à chaque lancement.
- **v4.0 Beacon** (Jour 28) — La grosse release. Tableau de bord avec statut agrégé, filtres à puces, badges de temps écoulé, prévisualisation terminal en direct et traitement attention-nécessaire pour les tâches échouées. Notifications OS pour les échecs de tâches et les complétions de runs. Visualiseur de diff inline. Capture de métriques par tâche (durée, tokens, coût). Vues d'insights par projet et cross-projet avec bandes de KPI et graphiques. Export de rapports en CSV et Markdown. Notifications de digest hebdomadaire. Intégrations sortantes avec Slack, Discord et webhooks. Création automatique de PR GitHub. Serveur HTTP entrant avec handlers GitHub, Slack et Discord.
- **v5.0 Flare** (Jour 30) — Fermeture de la boucle entrante de Beacon. Tokens OAuth pour bots Slack et Discord. Support GitHub Enterprise, GitLab et Bitbucket. Limitation de débit par IP. Composants interactifs Slack avec boutons retry/annuler. Auto-enregistrement des commandes slash Discord. UI de paramètres style macOS avec recherche. Correction du run-all qui s'arrêtait silencieusement sur les échecs de merge.

Et le plus important : Watchfire est passé de macOS uniquement à un support cross-platform complet pour macOS, Linux et Windows pendant le défi. Ça seul a changé qui pouvait l'utiliser.

Cinq versions majeures en 30 jours. D'un task runner macOS-only à une plateforme d'orchestration cross-platform avec support multi-agent, un tableau de bord, des notifications, des intégrations, des insights et des pipelines de livraison.

Watchfire supporte plusieurs agents de coding (Claude Code, Codex, Gemini, opencode, Copilot), fonctionne sur toutes les plateformes, et peut être utilisé comme GUI, CLI ou TUI. Je travaille actuellement sur la v6, qui ajoute le support de Cursor et corrige un bug de concurrence. Ou plus précisément, Watchfire construit Watchfire maintenant. L'outil orchestre son propre développement. C'est une phrase que je ne m'attendais pas à écrire quand j'ai commencé ce défi.

Il y a beaucoup plus à venir. J'écrirai un article approfondi sur Watchfire après m'être remis des 30 derniers jours.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Merci

Si vous avez suivi, essayé l'un des projets, partagé un post, ou simplement lu quelques articles, merci. C'était beaucoup de travail et beaucoup de plaisir. Construire en public c'est bizarre parce qu'on livre du travail brut pour que tout le monde voie. Mais c'était le but. Pas la finition. Pas la perfection. Juste de la production constante et de l'apprentissage.

Si vous voulez suivre ce que je fais ensuite, abonnez-vous au blog (lien ci-dessous) ou suivez-moi sur les réseaux sociaux. Et si quelque chose ici a résonné, partagez-le avec quelqu'un qui pourrait trouver ça utile. C'est la meilleure façon de soutenir ce genre de travail.

Trente projets. Trente jours. Terminé.

## Les 30 Projets

| Jour | Projet | Type | Essayer |
|------|--------|------|---------|
| 1 | [Platformer](/posts/202604-vibe30/day01-platformer/) | Game | [Jouer](https://vibe30-day01-the-platformer.vercel.app) |
| 2 | [Snake](/posts/202604-vibe30/day02-snake/) | Game | [Jouer](https://vibe30-day02-snake.vercel.app) |
| 3 | [Realm of Shadows](/posts/202604-vibe30/day03-rpg/) | Game | [Jouer](https://vibe30-day03-rpg.vercel.app) |
| 4 | [Tetris](/posts/202604-vibe30/day04-tetris/) | Game | [Jouer](https://vibe30-day04-tetris.vercel.app) |
| 5 | [Breakout](/posts/202604-vibe30/day05-breakout/) | Game | [Jouer](https://vibe30-day05-breakout.vercel.app) |
| 6 | [Pomodoro](/posts/202604-vibe30/day06-pomodoro/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day06-pomodoro/releases/latest) |
| 7 | [GitDash](/posts/202604-vibe30/day07-gitdash/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day07-gitdash/releases/latest) |
| 8 | [NotesTUI](/posts/202604-vibe30/day08-notestui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day08-notestui/releases/latest) |
| 9 | [TaskTUI](/posts/202604-vibe30/day09-tasktui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day09-tasktui/releases/latest) |
| 10 | [Miro Clone](/posts/202604-vibe30/day10-miroclone/) | Web App | [Essayer](https://vibe30-day10-miroclone.vercel.app) |
| 11 | [Treelo](/posts/202604-vibe30/day11-trelloclone/) | Web App | [Essayer](https://vibe30-day11-trelloclone.vercel.app) |
| 12 | [Wordle](/posts/202604-vibe30/day12-wordle/) | Game | [Jouer](https://vibe30-day12-wordle.vercel.app) |
| 13 | [GitFolio](/posts/202604-vibe30/day13-githubportfolio/) | Web App | [Essayer](https://vibe30-day13-githubportfolio.vercel.app) |
| 14 | [WeatherTUI](/posts/202604-vibe30/day14-weathertui/) | TUI | [Repo](https://github.com/nunocoracao/Vibe30-day14-weathertui) |
| 15 | [MyBrute Arena](/posts/202604-vibe30/day15-mybrute/) | Game | [Jouer](https://vibe30-day15-mybrute.vercel.app) |
| 16 | [Tic-Tac-Toe: Evolved](/posts/202604-vibe30/day16-tictactoe/) | Game | [Jouer](https://vibe30-day16-tictactoe-evolved.vercel.app) |
| 17 | [Project GENESIS](/posts/202604-vibe30/day17-genesis/) | Game | [Jouer](https://vibe30-day17-genesis.vercel.app) |
| 18 | [PollBox](/posts/202604-vibe30/day18-pollbox/) | Web App | [Essayer](https://vibe30-day18-pollbox.vercel.app) |
| 19 | [ReactionWall](/posts/202604-vibe30/day19-reactionwall/) | Web App | [Essayer](https://vibe30-day19-reactionwall.vercel.app) |
| 20 | [MoodBoard](/posts/202604-vibe30/day20-moodboard/) | Web App | [Essayer](https://vibe30-day20-moodboard.vercel.app) |
| 21 | [ChatRooms](/posts/202604-vibe30/day21-chatrooms/) | Web App | [Essayer](https://vibe30-day21-chatrooms-nir8.vercel.app) |
| 22 | [LiveQ&A](/posts/202604-vibe30/day22-liveqa/) | Web App | [Essayer](https://vibe30-day22-liveqa.vercel.app) |
| 23 | [RetroOS](/posts/202604-vibe30/day23-retroos/) | Web App | [Essayer](https://vibe30-day23-retroos.vercel.app) |
| 24 | [Reblog](/posts/202604-vibe30/day24-reblog/) | Web App | [Essayer](https://vibe30-day24-reblog.vercel.app) |
| 25 | [SoundScape](/posts/202604-vibe30/day25-soundscape/) | Web App | [Essayer](https://vibe30-day25-soundscape.vercel.app) |
| 26 | [PixelForge](/posts/202604-vibe30/day26-pixelforge/) | Web App | [Essayer](https://vibe30-day26-pixelforge.vercel.app) |
| 27 | [Terminal](/posts/202604-vibe30/day27-terminal/) | Native | [Release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest) |
| 28 | [ideA](/posts/202604-vibe30/day28-idea/) | Native | [Release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest) |
| 29 | [n0ti0n](/posts/202604-vibe30/day29-n0ti0n/) | Web App | [Essayer](https://blocknotes-lime.vercel.app) |
| 30 | [miniOs](/posts/202604-vibe30/day30-minios/) | Web App | [Essayer](https://vibe30-day30-minios.vercel.app) |

---

*Ceci est le dernier article de la série [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Les 30 projets sont open source sur [GitHub](https://github.com/nunocoracao/30DaysOfVibeCoding).*
