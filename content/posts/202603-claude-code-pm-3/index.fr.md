---
title: "PMer avec Claude Code : Chapitre 3 - Le Mode Dieu"
summary: "Connecter Google Workspace et Slack a Claude Code a boucle la boucle. Planification d'agenda, edition de documents, tableaux de bord Sheets et recherche Slack - le tout depuis un seul terminal."
description: "Connecter Google Workspace et Slack a Claude Code a boucle la boucle. Planification d'agenda, edition de documents, tableaux de bord Sheets et recherche Slack - le tout depuis un seul terminal."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Google Workspace", "Slack", "integrations"]
series: ["PMing with Claude Code"]
series_order: 3
date: 2026-03-05
draft: false
---

A la fin du chapitre deux, j'avais liste les lacunes restantes : Google Docs, Slack et le calendrier. J'ai comble les trois en une seule session. Et quelque part au milieu, en regardant Claude verifier la disponibilite de quinze personnes, creer une invitation calendrier, corriger une erreur de tarification dans un Google Doc en production, et construire un tableau de bord multi-onglets dans Sheets - le tout sans que j'ouvre un navigateur - j'ai realise que la configuration avait franchi un seuil. Ce n'est plus un assistant IA. C'est une salle de controle.

## Google Workspace : Le CLI gws

L'ecosysteme de Google a toujours ete le plus difficile a connecter a quoi que ce soit. Il y a des API pour tout, mais l'authentification est penible et la surface d'API est enorme. Puis Google a sorti quelque chose qui a tout change - ils ont publie un CLI officiel pour toute la suite Workspace. Annonce le 2 mars, ecrit en Rust, open-source sous licence Apache 2.0. Il encapsule toute la surface API de Google Workspace, construite dynamiquement a partir du Discovery Service de Google. Gmail, Calendar, Drive, Docs, Sheets, Slides, Tasks, Chat, Admin - tout a travers un seul outil en ligne de commande. Il est meme livre avec un support de serveur MCP et plus de 100 skills d'agent pre-construites.

{{< github repo="googleworkspace/cli" >}}

### Installation

L'installation se fait via npm (il embarque des binaires natifs pre-compiles, pas besoin de toolchain Rust), ou vous pouvez recuperer un binaire depuis les GitHub Releases ou compiler depuis les sources avec Cargo :

```bash
npm install -g @googleworkspace/cli
```

Ensuite, il y a une commande de configuration guidee qui vous accompagne dans la configuration du projet GCP :

```bash
gws auth setup     # walks you through Google Cloud project config
gws auth login     # subsequent OAuth login
```

Il y a un prerequis qui pourrait vous bloquer : vous avez besoin d'un projet Google Cloud avec OAuth configure. Le CLI gws s'authentifie via GCP, donc sans projet et ecran de consentement OAuth configures, vous n'irez nulle part. Heureusement, mon equipe avait deja un projet GCP interne que j'ai pu utiliser, donc je n'ai pas eu a en creer un de zero. J'ai juste du configurer l'ecran de consentement OAuth puis activer les API specifiques que je voulais utiliser - Calendar, Gmail, Drive, Docs, Sheets - via la Google Cloud Console. Si vous partez de zero, c'est 15 minutes supplementaires a cliquer dans les ecrans de configuration GCP. Pas difficile, juste fastidieux.

Une fois OAuth configure, le flux d'authentification ouvre un navigateur pour la connexion Google. La session persiste apres cela. Mais assurez-vous d'activer chaque API que vous prevoyez d'utiliser - si vous en oubliez une, vous obtiendrez des erreurs de permission cryptiques qui ne vous disent pas clairement ce qui manque.

### Etape zero : Laisser Claude apprendre l'outil

Avant de commencer a utiliser tout cela, j'ai fait quelque chose qui m'a fait gagner des heures par la suite. J'ai dit a Claude d'explorer le CLI gws par lui-meme - lancer `gws --help`, fouiller dans les sous-commandes, essayer des choses - et documenter tout ce qu'il apprenait dans `CLAUDE.md`. Claude a parcouru l'arbre de commandes, compris les patterns pour chaque service (Calendar, Docs, Sheets, Drive, Gmail), note les flags communs et les formats de parametres, et a tout consigne.

C'est l'etape zero pour chaque nouvelle integration d'outil. N'essayez pas de documenter manuellement le CLI vous-meme. N'ecrivez pas un aide-memoire. Pointez simplement Claude dessus et dites "apprends ca, note ce que tu trouves." Le resultat est une reference parfaitement adaptee a la facon dont Claude utilisera reellement l'outil - parce que Claude l'a ecrite pour lui-meme.

Apres cette exploration, Claude connaissait des commandes comme :

```bash
# Check today's calendar
gws calendar +agenda --today --format table

# Read a Google Doc
gws docs documents get --params '{"documentId": "DOC_ID"}'

# Update a Google Doc
gws docs documents batchUpdate ...

# Push data to a Google Sheet
gws sheets spreadsheets values update ...

# Create a calendar event
gws calendar events insert ...
```

Meme pattern que Snowflake au chapitre deux. Meme pattern que GitHub au chapitre un. Le pattern est le point essentiel : installer l'outil, laisser Claude l'explorer, documenter les decouvertes dans `CLAUDE.md`, et chaque session future demarre avec le contexte complet.

A ce stade, mon `CLAUDE.md` est devenu un serieux document de reference. Ce n'est pas quelque chose que je me suis assis pour ecrire - il s'est accumule organiquement au fur et a mesure que Claude explorait chaque outil et que j'ajoutais du contexte en cours de route. Il contient des schemas de tables d'entrepot de donnees avec des descriptions de colonnes et des formules de valeurs calculees. La structure des repos GitHub avec les patterns de requetes GraphQL pour les epics et les taches. Des index de pages Notion pour que Claude puisse recuperer la bonne spec produit sans que j'aie a chercher les URLs. Des listes d'equipe extraites des invitations calendrier. Des references de commandes CLI pour chaque outil integre. Des configurations de connexion et des notes d'authentification.

Ca se lit comme un manuel d'operations que personne ne prendrait jamais la peine d'ecrire a la main. Mais comme Claude l'ecrit pour lui-meme au fur et a mesure, le manuel se construit tout seul. Et chaque nouvelle conversation demarre avec tout ce contexte charge. Claude ne demande pas "quel est votre schema d'entrepot de donnees ?" ou "ou est-ce que je trouve les specs produit ?" - il sait deja.

## Slack : Le plugin integre

Slack a ete plus facile que prevu. Claude Code dispose d'un plugin Slack integre qui fournit des outils MCP pour rechercher, lire et envoyer des messages.

```
/install-slack-app    # Install the Slack app
                      # Complete authorization in browser
/mcp                  # Connect to the plugin (may need a second attempt)
```

Une fois connecte, vous obtenez un ensemble d'outils qui couvrent les operations Slack essentielles : recherche de messages dans les canaux publics, lecture de fils de discussion, lecture de l'historique d'un canal par plage de dates, envoi de messages, recherche d'utilisateurs et consultation de profils. Ce n'est pas l'API Slack complete, mais c'est exactement la surface dont un PM a reellement besoin.

## Cas d'usage 1 : Trouver mon equipe depuis le calendrier

Voici un scenario qui arrive constamment. Vous avez besoin de la liste de votre equipe - pas la version organigramme, mais les vrais humains qui se presentent a vos reunions recurrentes. Les gens dans la salle.

J'ai demande a Claude de chercher ma reunion recurrente de sync d'equipe hebdomadaire et d'extraire les participants. Il a interroge l'API Calendar, trouve l'evenement et extrait quinze personnes avec leurs adresses email. Ensuite, je lui ai fait sauvegarder la liste dans `CLAUDE.md` pour que chaque session future connaisse mon equipe sans que j'aie a l'expliquer a nouveau.

C'est un petit detail qui se compose. Chaque fois que Claude a besoin de planifier quelque chose, verifier une disponibilite ou referencer un collegue, il sait deja avec qui il travaille.

## Cas d'usage 2 : Planifier une reunion

Celui-ci m'a surpris par sa fluidite.

J'avais besoin de planifier une reunion le lundi apres-midi avec toute mon equipe - les quinze personnes - pour revoir ensemble un document de strategie. Dans le workflow normal, j'ouvrirais Google Calendar, regarderais les creneaux de l'apres-midi, verifierais manuellement si les personnes importantes sont libres, abandonnerais l'idee de verifier les quinze, choisirais un horaire qui semble raisonnable, et espererais que ca passe.

A la place, j'ai dit a Claude de trouver un creneau libre lundi apres-midi pour toute l'equipe. Il a :

1. Liste mon calendrier du lundi apres-midi pour identifier les creneaux disponibles
2. Interroge l'API freebusy pour les quinze membres de l'equipe simultanement
3. Identifie que quatre personnes avaient des conflits sur mon creneau prefere
4. Rapporte qui etait occupe et quand
5. Cree l'invitation via `events insert` avec un lien vers le document dans la description

Les invitations sont parties automatiquement. Le tout a pris peut-etre trente secondes. La verification freebusy seule m'aurait pris dix minutes a cliquer dans les calendriers individuels - et j'aurais probablement abandonne apres en avoir verifie cinq.

## Cas d'usage 3 : Editer un Google Doc en direct

Celui-ci a change ma facon de penser les workflows documentaires.

J'avais un Google Doc de proposition tarifaire qui necessitait une relecture. Au lieu de l'ouvrir dans un navigateur, de le lire en entier et de faire les modifications manuellement, j'ai demande a Claude de le recuperer et de le revoir.

Claude a extrait le document complet via `docs documents get`, parse tout le contenu y compris les paragraphes et les tableaux, et l'a lu. Il a signale une incoherence : un tableau de tarification avait un chiffre obsolete qui ne correspondait pas aux prix actuels du plan. Le genre d'erreur facile a manquer quand on survole, mais embarrassante quand un stakeholder la repere.

Voici la partie qui compte : Claude l'a corrige directement dans le Google Doc en production en utilisant `batchUpdate` avec `replaceAllText`. Pas de telechargement, pas de modifications locales, pas de re-upload. La correction a eu lieu dans le document canonique que tout le monde consulte deja.

Cela elimine toute une categorie de frictions dans la gestion documentaire. Le document reste dans Google Docs la ou votre equipe s'attend a le trouver. Claude le lit et le modifie sur place.

Une chose que je dois encore tester : relire et repondre aux commentaires. Les commentaires Google Docs sont l'endroit ou la moitie de la vraie collaboration se passe - suggestions, questions, fils de feedback. Si Claude peut les lire, resumer les commentaires ouverts et rediger des reponses, cela bouclerait une autre boucle entierement. C'est le prochain point sur ma liste.

## Cas d'usage 4 : Construire un tableau de bord dans Google Sheets

Celui-ci etait purement un test. Je voulais voir si Claude pouvait prendre des donnees de Snowflake et construire un Google Sheet complet automatiquement - de bout en bout, sans etape manuelle. Le genre de chose qui mange normalement un apres-midi : lancer des requetes, exporter des CSV, creer un sheet, faire des onglets, coller les donnees, formater les en-tetes, construire des graphiques.

J'ai donc pointe Claude vers quelques jeux de donnees et dit "construis-moi un tableau de bord dans Sheets." Il a :

1. **Extrait 6 jeux de donnees de Snowflake** - tendances hebdomadaires, metriques quotidiennes, repartitions par plan, adoption des fonctionnalites, utilisation par segment, et plus encore
2. **Cree 6 onglets dans un Google Sheet** via `spreadsheets batchUpdate`
3. **Pousse toutes les donnees** vers les bons onglets via `spreadsheets values update`
4. **Formate le tout** - en-tetes en gras, arriere-plans gris, lignes superieures figees, colonnes redimensionnees automatiquement
5. **Ajoute 9 graphiques** a travers les onglets - graphiques en ligne pour les tendances, histogrammes pour les comparaisons, graphiques en aires pour les metriques cumulatives, barres empilees pour les repartitions

Tout de maniere programmatique. Pas de travail manuel dans le sheet. Pas de copier-coller entre les outils. Le CLI Snowflake du chapitre deux et le CLI gws de ce chapitre travaillant ensemble dans une seule session. C'etait juste un test, mais ca a suffisamment bien fonctionne pour que je puisse m'imaginer l'utiliser pour de vrais tableaux de bord destines aux parties prenantes.

C'est a cela que ressemble l'effet compose en pratique. Chaque integration que j'ai ajoutee - GitHub, Notion, Snowflake, Google Workspace, Slack - n'ajoute pas simplement une capacite. Elle multiplie chaque autre capacite. Les donnees de Snowflake se deversent dans Google Sheets. Les informations d'equipe du Calendar alimentent la planification de reunions. Les discussions de Slack fournissent du contexte pour les revues de documents.

## Cas d'usage 5 : Rechercher dans Slack

La derniere piece etait l'historique des communications. J'ai utilise la recherche Slack pour trouver des discussions liees a la proposition tarifaire dans nos canaux. Claude a trouve des fils pertinents dans `#product-launches` et `#pricing-strategy`, lu les conversations completes, et avait le contexte necessaire pour croiser avec le document de tarification qu'il avait deja relu.

Cela a boucle la boucle informationnelle. Avant, je pouvais relire un document, me souvenir que quelqu'un avait souleve un probleme dans Slack il y a trois semaines, essayer de trouver ce fil, perdre dix minutes a defiler, et peut-etre abandonner. Maintenant Claude cherche, trouve, lit et synthetise dans la meme conversation.

## La stack complete

Voici a quoi ressemble l'espace de travail maintenant :

```
pm-workspace/
├── CLAUDE.md                # Everything: schemas, team lists, tool docs
├── .claude/
│   └── settings.local.json  # Permissions for all CLIs and MCPs
├── docs/                    # Fallback for docs that can't live in Google/Notion
├── data_reports/            # Fallback for datasets too large for live queries
└── roadmap.md               # Living roadmap document
```

Et les integrations :

| Outil | Methode | Ce qu'il fait |
|-------|---------|---------------|
| GitHub | CLI `gh` | Issues, epics, gestion de projet |
| Notion | MCP | Specs produit et documentation |
| Snowflake | CLI `snow` | Requetes sur l'entrepot de donnees |
| Google Workspace | CLI `gws` | Calendar, Docs, Sheets, Gmail |
| Slack | Plugin MCP | Recherche, lecture et envoi de messages |

Cinq integrations. Cinq sources de donnees differentes. Toutes accessibles depuis un seul terminal, toutes portant le contexte a travers une seule conversation.

## Conseils si vous mettez cela en place

Quelques choses que j'ai apprises a mes depens :

- **Documentez tout dans `CLAUDE.md`.** Claude ne peut pas utiliser des outils dont il ne connait pas l'existence. Chaque fois que vous ajoutez une integration, dites a Claude quelles commandes sont disponibles et comment les utiliser. Mieux encore, demandez a Claude d'explorer et de documenter l'outil lui-meme.
- **Le plugin Slack peut necessiter une reconnexion.** Apres `/install-slack-app`, lancez `/mcp` pour vous connecter. Si ca ne marche pas la premiere fois, reessayez. C'est capricieux au premier setup mais stable apres.
- **Utilisez l'API brute pour les operations complexes sur les Sheets.** La commande `spreadsheets values update` fonctionne mieux que les helpers de plus haut niveau quand vous faites des operations multi-onglets avec du formatage et des graphiques.
- **Stockez les listes d'equipe et les details d'integration dans `CLAUDE.md`.** Ils persistent entre les sessions. Le fait que Claude connaisse votre equipe, vos schemas et vos outils des le debut d'une conversation est ce qui fait que ca ressemble a une salle de controle plutot qu'a un chatbot.

## Ce qui a change

Apres le chapitre un, j'avais un espace de travail connecte. Apres le chapitre deux, j'avais l'acces aux donnees. Apres ce chapitre, j'ai tout. Calendrier, documents, tableurs, historique des communications, entrepot de donnees, gestion de projet, contexte de design - tout est au meme endroit.

Le changement de workflow est reel. Je n'ouvre plus Google Calendar pour planifier des reunions. Je n'ouvre plus Google Docs pour relire des documents. Je n'ouvre plus Google Sheets pour construire des tableaux de bord. Je ne defile plus dans Slack pour retrouver d'anciennes discussions. Je decris ce dont j'ai besoin, et ca se fait.

Est-ce parfait ? Non. Les configurations d'authentification sont capricieuses. Le CLI gws est jeune et les messages d'erreur ne sont pas toujours utiles. Certaines operations necessitent des appels subprocess Python pour eviter les problemes d'echappement shell. Mais la friction de la mise en place est un cout unique. Le temps economise, c'est chaque jour.

Trois chapitres plus tard, la these tient : chaque nouvelle integration multiplie la valeur de chaque integration existante. L'ecart entre "j'ai une question" et "j'ai une reponse avec des donnees de cinq sources differentes" est passe de plusieurs heures a quelques secondes.

Ca, c'est le mode dieu.
