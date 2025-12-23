---
title: "Docker Desktop 4.18"
summary: "Nous cherchons toujours des moyens d'améliorer votre expérience avec Docker, que vous utilisiez une intégration, une extension ou directement dans le produit. Docker Desktop 4.18 se concentre sur les améliorations dans la ligne de commande et dans Docker Desktop."
categories: ["Externe"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-18/"
date: 2023-04-05
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Nous cherchons toujours des moyens d'améliorer votre expérience avec Docker, que vous utilisiez une intégration, une extension ou directement dans le produit. Docker Desktop 4.18 se concentre sur les améliorations dans la ligne de commande et dans Docker Desktop.

Lisez la suite pour découvrir les nouvelles fonctionnalités CLI dans Docker Scout, et découvrez Docker init, une fonctionnalité CLI Beta passionnante pour vous aider à ajouter rapidement Docker à n'importe quel projet. Nous passons également en revue de nouvelles fonctionnalités pour vous aider à démarrer avec Docker plus rapidement : Container File Explorer, installation macOS sans admin, et une nouvelle fonctionnalité expérimentale dans Docker Compose.

## Docker Scout CLI
Dans Docker Desktop 4.17, nous avons introduit Docker Scout, un outil qui offre une visibilité sur les vulnérabilités des images et des recommandations pour une remédiation rapide. Nous sommes ravis d'annoncer la sortie de plusieurs nouvelles fonctionnalités dans la ligne de commande Docker Scout, qui est livrée avec Docker Desktop 4.18. Ces mises à jour arrivent après avoir reçu une quantité écrasante de retours de la communauté.

La version 4.18 de Docker Scout inclut une vue rapide des vulnérabilités, des recommandations d'images directement sur la ligne de commande, une guidance de remédiation améliorée avec utilisation SBOM de BuildKit, et une fonctionnalité de prévisualisation comparant les images (imaginez utiliser diff, mais pour les images container).

## Quickview
Supposons que vous ayez créé une nouvelle image container et que vous souhaitiez évaluer sa posture de sécurité. Vous pouvez maintenant exécuter docker scout quickview pour un aperçu de sécurité instantané et de haut niveau de votre image. Si des problèmes sont trouvés, Docker Scout vous guidera sur ce qu'il faut faire ensuite.

## Recommandations en ligne de commande
Si vous avez précédemment utilisé docker scout cves pour comprendre quelles CVE existent dans vos images, vous vous êtes peut-être demandé quelle action entreprendre ensuite. Avec la nouvelle commande docker scout recommendations, vous recevez une liste de recommandations qui suggèrent directement les mises à jour disponibles pour l'image de base.

La commande docker scout recommendations analyse l'image et affiche des recommandations pour actualiser ou mettre à jour l'image de base, ainsi qu'une liste d'avantages, y compris des opportunités de réduire les vulnérabilités ou comment obtenir des tailles d'images plus petites.

## Provenance BuildKit et attestations SBOM
En janvier 2023, BuildKit a été étendu pour supporter la construction d'images avec des attestations. Ces images peuvent maintenant utiliser la ligne de commande docker scout pour traiter ces informations et déterminer les prochaines étapes pertinentes. Nous pouvons supporter cela car l'outil en ligne de commande docker scout sait exactement avec quelle image de base vous avez construit et peut fournir des recommandations plus précises.

Si une image a été construite et poussée avec une attestation SBOM attachée, docker scout lit les informations du paquet depuis l'attestation SBOM au lieu de créer un nouveau SBOM local.

Pour apprendre comment construire des images avec des attestations en utilisant BuildKit, lisez "Generating SBOMs for Your Image with BuildKit."

## Comparer les images
Note : C'est une fonctionnalité expérimentale de Docker Scout et peut changer et évoluer au fil du temps.

Documenter rétrospectivement les changements effectués pour résoudre un problème de sécurité après avoir terminé une remédiation de vulnérabilité est considéré comme une bonne pratique. Docker Desktop 4.18 introduit un aperçu précoce de la comparaison d'images.

Cette fonctionnalité met en évidence les différences de vulnérabilités entre deux images et comment les packages se comparent. Ces détails incluent la version du package, les variables d'environnement dans chaque image, et plus encore. De plus, la sortie de la ligne de commande peut être configurée en format markdown. Ces informations peuvent ensuite être utilisées pour générer des aperçus diff dans les pull requests via GitHub Actions.

Nous aimerions savoir quels scénarios vous pourriez imaginer utiliser cette fonctionnalité diff. Vous pouvez le faire en ouvrant Docker Desktop, en naviguant vers l'onglet Images, et en sélectionnant "Donner un feedback".

Lisez la documentation pour en savoir plus sur ces fonctionnalités.

## Container File Explorer
Une autre fonctionnalité que nous sommes heureux d'annoncer est la sortie GA de Container File Explorer. Lorsque vous avez besoin de vérifier ou de remplacer rapidement des fichiers dans un container, Container File Explorer vous aidera à le faire — et bien plus — directement depuis l'interface de Docker Desktop.

Vous n'aurez pas besoin de vous souvenir de longues commandes CLI, de manipuler de longs paramètres de chemin sur la commande docker cp, ou d'être frustré que votre container n'a pas de shell du tout pour vérifier les fichiers. Container File Explorer fournit une interface simple qui vous permet de :

- Vérifier un système de fichiers container
- Copier des fichiers et dossiers entre l'hôte et les containers
- Glisser-déposer facilement des fichiers dans un container
- Modifier rapidement des fichiers avec coloration syntaxique
- Supprimer des fichiers

Avec Container File Explorer, vous pouvez voir les fichiers de vos containers dans n'importe quel état (arrêté/en cours/en pause/…) et pour tout type de container, y compris les slim-containers/slim-images (containers sans shell). Ouvrez le tableau de bord, allez à l'onglet Containers, ouvrez le menu d'action du container, et vérifiez vos fichiers :

## Installation sans admin sur macOS
Nous avons ajusté notre flux d'installation macOS pour rendre super facile pour les développeurs d'installer Docker Desktop sans leur accorder des privilèges d'admin. Certains développeurs travaillent dans des environnements avec des exigences de sécurité élevées où l'accès admin local peut être interdit sur leurs machines. Nous voulions nous assurer que les utilisateurs dans ces environnements puissent se désinscrire des fonctionnalités de Docker Desktop qui nécessitent des privilèges d'admin.

Le flux d'installation par défaut sur macOS demandera toujours des privilèges d'admin, car nous croyons que cela nous permet de fournir une expérience optimisée pour la grande majorité des cas d'utilisation des développeurs. Après avoir accordé les privilèges d'admin, Docker Desktop installe automatiquement les outils CLI Docker, permettant aux bibliothèques tierces de s'intégrer de manière transparente avec Docker (en activant le socket Docker par défaut) et permettant aux utilisateurs de se lier aux ports privilégiés entre 1 et 1024.

Si vous souhaitez modifier les paramètres que vous avez configurés lors de l'installation, vous pouvez le faire facilement dans l'onglet Avancé des Paramètres de Docker Desktop.

## Docker init (Beta)
Une autre fonctionnalité passionnante que nous sortons en Beta est docker init. C'est une nouvelle commande CLI qui vous permet d'ajouter rapidement Docker à votre projet en créant automatiquement les ressources requises : Dockerfiles, fichiers Compose et .dockerignore. En utilisant cette fonctionnalité, vous pouvez facilement mettre à jour des projets existants pour les exécuter en utilisant des containers ou configurer de nouveaux projets même si vous n'êtes pas familier avec Docker.

Vous pouvez essayer docker init en mettant à jour vers la dernière version de Docker Desktop (4.18.0) et en tapant docker init dans la ligne de commande tout en étant dans un dossier de projet cible. docker init créera tous les fichiers requis pour exécuter votre projet dans Docker.

Consultez la documentation docker init pour en savoir plus.

La version Beta de docker init est livrée avec le support Go, et l'équipe Docker travaille déjà à ajouter plus de langages et frameworks, y compris Node.js, Python, Java, Rust et .Net, plus d'autres fonctionnalités dans les mois à venir. S'il y a un langage ou framework spécifique que vous aimeriez que nous supportions, faites-le nous savoir. Soumettez d'autres retours et suggestions dans notre roadmap publique.

Note : Veuillez noter que docker init ne doit pas être confondu avec l'exécutable docker-init utilisé en interne, qui est invoqué par Docker lors de l'utilisation du flag –init avec la commande docker run. Consultez la documentation pour en savoir plus.

## Docker Compose File Watch (Expérimental)
Docker Compose a un nouveau tour ! Docker Compose File Watch est disponible maintenant en tant que fonctionnalité Expérimentale pour maintenir automatiquement tous vos containers de service à jour pendant que vous travaillez.

(...)

Une fois configuré, la nouvelle commande docker compose alpha watch commencera à surveiller les modifications de fichiers dans votre projet :

Sur une modification de ./web/App.jsx, par exemple, Compose le synchronisera automatiquement vers /src/web/App.jsx à l'intérieur du container.
Pendant ce temps, si vous modifiez package.json (comme en installant un nouveau package npm), Compose reconstruira l'image et remplacera le service existant par une version mise à jour.
Le mode Compose File Watch n'est que le début. Avec presque 100 commits depuis la dernière sortie de Docker Compose, nous avons corrigé des bugs et fait beaucoup d'améliorations de qualité de vie. (Un grand merci à tous nos récents contributeurs pour la première fois !)

Nous sommes enthousiastes à propos de Docker Compose File Watch et travaillons activement sur les mécaniques sous-jacentes et le format de configuration.

## Conclusion
C'est tout pour notre mise à jour Docker Desktop 4.18. Cette version inclut de nombreuses fonctionnalités nouvelles et cool, y compris certaines que vous pouvez aider à façonner ! Nous avons également mis à jour le Docker Engine pour traiter certaines CVE. Comme toujours, nous aimons entendre vos retours. Veuillez laisser tout feedback sur notre roadmap GitHub publique et faites-nous savoir ce que vous aimeriez voir d'autre.

Consultez les notes de version pour une répartition complète des nouveautés dans Docker Desktop 4.18.



{{< alert >}}
**Note :** ce post a été originellement publié en externe, veuillez aller sur [le blog de Docker](https://www.docker.com/blog/docker-desktop-4-18/) pour lire le post complet
{{< /alert >}}
