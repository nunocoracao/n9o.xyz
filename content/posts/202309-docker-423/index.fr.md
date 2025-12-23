---
title: "Docker Desktop 4.23"
summary: "Docker Desktop 4.23 est maintenant disponible et inclut de nombreuses améliorations, notamment le support d'ASP.NET Core dans Docker Init, la vérification de l'intégrité de la configuration pour alerter sur tout changement de configuration nécessitant une attention, et la gestion des identités inter-domaines."
categories: ["Externe"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-23/"
date: 2023-09-12
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Docker Desktop 4.23 est maintenant disponible et inclut de nombreuses améliorations, notamment le support d'ASP.NET Core dans Docker Init, la vérification de l'intégrité de la configuration pour alerter sur tout changement de configuration nécessitant une attention, et la gestion des identités inter-domaines. Cette version améliore également la Recherche Rapide, permettant de rechercher parmi les conteneurs, applications, Docker Hub, Docs et tout volume, et d'effectuer des actions rapides (démarrer/arrêter/supprimer). VirtioFS est maintenant défini par défaut pour offrir des gains de performance aux utilisateurs Mac. Avec la version Docker Desktop 4.23, les utilisateurs Mac verront également des performances réseau accrues avec les connexions réseau traditionnelles.

Dans cet article, nous explorons les nouveautés et mises à jour de la dernière version de Docker Desktop.

## ASP.NET Core avec Docker Init
Nous sommes ravis d'annoncer le support ajouté pour ASP.NET Core. Que vous soyez nouveau avec Docker ou un professionnel expérimenté, Docker Init simplifie maintenant la Dockerisation pour vos projets ASP.NET Core. Avec une simple commande docker init dans le dossier de votre projet et la dernière version de Docker Desktop, regardez Docker Init générer des Dockerfiles personnalisés, des fichiers Compose et des fichiers .dockerignore adaptés.

Spécifiquement pour ASP.NET Core, nous avons également amélioré le support et les commentaires dans le Dockerfile pour les builds multi-architecture. Cette avancée aidera les utilisateurs à gérer le partage de leurs images entre différentes architectures CPU et à simplifier les déploiements sur les fournisseurs cloud comme Azure, AWS et GCP. Créez des images adaptées à diverses architectures, augmentant la flexibilité et l'efficacité dans les déploiements cloud.

Commencez en vous assurant d'avoir la dernière version de Docker Desktop. Ensuite, exécutez docker init dans le répertoire de votre projet via la ligne de commande. Laissez Docker Init faire le travail difficile, vous permettant de vous concentrer sur votre tâche principale — créer des applications exceptionnelles !

## Vérification de l'intégrité de la configuration
Assurez-vous que Docker Desktop fonctionne correctement avec notre nouvelle Vérification de l'Intégrité de la Configuration. Cela vous permet de continuer à utiliser plusieurs applications et outils locaux, rendant parfois les changements de configuration sans tracas. Cette mise à jour détecte automatiquement et alerte de tout changement de configuration, invitant à un simple clic pour rétablir les configurations Docker Desktop afin de suivre et assurer un développement ininterrompu.


## Gestion des identités inter-domaines
La gestion des accès utilisateurs pour Docker est devenue plus puissante. SCIM aide au provisionnement ou déprovisionnement automatique des utilisateurs, et le mapping des rôles de groupe est maintenant supporté pour vous permettre d'organiser vos équipes et leurs accès en conséquence :

Vous pouvez attribuer des rôles aux membres de votre organisation dans l'IdP. Pour configurer un rôle, vous pouvez utiliser des attributs optionnels au niveau utilisateur pour la personne à qui vous voulez attribuer un rôle.
Vous pouvez également définir une organisation et une équipe pour remplacer les valeurs de provisionnement par défaut définies par la connexion SSO.
Le tableau suivant liste les attributs optionnels au niveau utilisateur supportés.

## Améliorations de la Recherche Rapide
Donnant aux développeurs un accès transparent aux ressources essentielles quand ils en ont besoin, notre fonction de Recherche Rapide remaniée a reçu des mises à niveau significatives. Maintenant, les utilisateurs peuvent facilement localiser :

Conteneurs et applications Compose : Repérez facilement tout conteneur ou application Compose résidant sur votre système local. De plus, accédez rapidement aux variables d'environnement et effectuez des actions essentielles comme les démarrer, les arrêter ou les supprimer.
Images Docker Hub : Qu'il s'agisse d'images Docker Hub publiques, locales ou de dépôts distants, la Recherche Rapide fournira des résultats rapides et pertinents.
Extensions : Découvrez-en plus sur des extensions spécifiques et simplifiez l'installation en un seul clic.
Volumes : Naviguez facilement à travers vos volumes et obtenez des informations sur les conteneurs associés.
Documentation : Accédez instantanément à une aide précieuse depuis la documentation officielle de Docker, le tout directement depuis Docker Desktop.
La Recherche Rapide améliorée est votre outil ultime pour la découverte et la gestion des ressources, offrant une commodité inégalée pour les développeurs.

## Standardisation du partage de fichiers haute performance avec VirtioFS pour les utilisateurs Mac
Docker Desktop 4.23 utilise maintenant par défaut VirtioFS sur macOS 12.5+ comme standard pour offrir des gains de performance substantiels lors du partage de fichiers avec les conteneurs via docker run -v ou les montages bind dans Compose YAML. VirtioFS minimise la surcharge de transfert de fichiers en permettant aux conteneurs d'accéder aux fichiers sans montages de volumes ni partages réseau.

Éviter les protocoles de transfert de fichiers réseau conduit également à des transferts de fichiers plus rapides. Nous avons mesuré des améliorations de performance, réduisant le temps de transfert de fichiers de 7:13.21s à 1:4.4s — une augmentation de vitesse de 85,15%. Nous tenons à noter que l'amélioration mesurée dépend de la taille du fichier, des autres applications en cours d'exécution et du matériel de l'ordinateur.

## Améliorations de la vitesse réseau de Docker Desktop pour les utilisateurs Mac
Docker Desktop 4.23 arrive avec des performances réseau améliorées pour les utilisateurs Mac. Maintenant, lorsqu'un conteneur nécessite une connexion réseau traditionnelle, les utilisateurs bénéficieront de performances réseau accrues de ces façons :

Accès aux ports exposés ~10x plus rapide
Transmission Control Protocol (TCP) ~1,5x – 2x plus rapide
Aucune action utilisateur n'est requise pour bénéficier de ces avantages — tous les utilisateurs Mac mis à jour vers 4.23 auront maintenant un réseau plus rapide !

## Conclusion
Mettez à jour maintenant pour explorer les nouveautés de la version 4.23 de Docker Desktop. Vous avez des commentaires ? Laissez vos retours sur notre feuille de route publique GitHub et dites-nous ce que vous aimeriez voir dans les prochaines versions.

En savoir plus
Lisez les Notes de Version de Docker Desktop.
Obtenez la dernière version de Docker Desktop.
Des questions ? La communauté Docker est là pour vous aider.
Nouveau avec Docker ? Commencez.


{{< alert >}}
**Note :** cet article a été initialement publié en externe, veuillez consulter le [blog de Docker](https://www.docker.com/blog/docker-desktop-4-23/) pour lire l'article complet
{{< /alert >}}

