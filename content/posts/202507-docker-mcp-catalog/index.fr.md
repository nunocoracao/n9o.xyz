---
title: "Le Docker MCP Catalog : La Façon Sécurisée de Découvrir et Exécuter des Serveurs MCP"
summary: "L'écosystème Model Context Protocol (MCP) explose. En quelques semaines, notre Docker MCP Catalog a dépassé 1 million de pulls, confirmant que les développeurs recherchent une façon sécurisée d'exécuter des serveurs MCP. Aujourd'hui, nous sommes ravis de partager des mises à jour majeures du Docker MCP Catalog, incluant des fonctionnalités de découverte améliorées et notre nouveau processus de soumission ouvert."
categories: ["Externe"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/"
date: 2025-07-01
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

L'écosystème Model Context Protocol (MCP) explose. En quelques semaines, notre Docker MCP Catalog a dépassé 1 million de pulls, confirmant que les développeurs recherchent une façon sécurisée d'exécuter des serveurs MCP. Aujourd'hui, nous sommes ravis de partager des mises à jour majeures du Docker MCP Catalog, incluant des fonctionnalités de découverte améliorées et notre nouveau processus de soumission ouvert. Avec des centaines de développeurs demandant déjà à publier leurs serveurs MCP via Docker, nous accélérons notre mission de faire des serveurs MCP containerisés le standard pour la distribution sécurisée d'outils IA.

L'adoption rapide des serveurs MCP met également en évidence un problème critique — la pratique actuelle de les exécuter via des commandes npx ou uvx expose les systèmes à du code non vérifié avec un accès complet à l'hôte, sans parler de la friction dans la gestion des dépendances. Dans ce post, nous expliquerons pourquoi Docker investit dans l'écosystème MCP, présenterons les nouvelles capacités du catalog et partagerons comment vous pouvez contribuer à construire une base plus sécurisée pour les applications IA.

## Pourquoi Docker construit le MCP Catalog
### Les problèmes de sécurité dans la distribution MCP
Chaque fois qu'un développeur exécute npx -y @untrusted/mcp-server ou uvx some-mcp-tool, il fait un compromis dangereux : la commodité avant la sécurité. Ces commandes exécutent du code arbitraire directement sur le système hôte avec un accès complet à :

- L'ensemble du système de fichiers
- Les connexions réseau
- Les variables d'environnement et les secrets
- Les ressources système

Certains clients MCP limitent l'accès aux variables d'environnement, mais même cela n'est pas une pratique universelle. Ce n'est pas durable. Alors que MCP passe de l'expérimentation à la production, nous avons besoin d'une approche fondamentalement différente.

### La position unique de Docker
Docker a passé plus d'une décennie à résoudre exactement ces problèmes pour les applications cloud-native. Nous avons construit l'infrastructure, les outils et la confiance sur lesquels les développeurs comptent pour exécuter des milliards de conteneurs en production. Maintenant, nous appliquons ces mêmes principes à l'écosystème MCP.

Lorsque vous exécutez un serveur MCP depuis notre Catalog, vous obtenez :

- Des signatures cryptographiques vérifiant que l'image n'a pas été altérée
- Un Software Bill of Materials (SBOM) documentant chaque composant
- Une isolation complète de votre système hôte
- Un accès contrôlé uniquement à ce dont le serveur a réellement besoin

Il ne s'agit pas de rendre la vie plus difficile aux développeurs — il s'agit de faire de la sécurité le chemin de moindre résistance.

## Présentation du MCP Catalog amélioré
### Conçu pour la découverte MCP
Nous avons repensé le MCP Catalog pour le rendre plus accessible et plus facile à naviguer. Vous pouvez toujours accéder au MCP Catalog depuis Docker Hub et le MCP Toolkit dans Docker Desktop comme avant, ou aller directement au MCP catalog. Nous sommes allés au-delà des listes génériques d'images conteneurs en construisant des fonctionnalités qui vous aident à trouver rapidement les bons serveurs MCP pour vos applications IA.

Parcourir par Cas d'Usage : Les serveurs MCP sont organisés par ce qu'ils font réellement :

- Intégration de Données (bases de données, APIs, systèmes de fichiers)
- Outils de Développement (IDEs, analyse de code, testing)
- Communication (email, Slack, plateformes de messagerie)
- Productivité (gestion de tâches, calendriers, prise de notes)
- Analytics (traitement de données, visualisation, reporting)

**Recherche Améliorée** : Trouvez des serveurs par capacité, outils, tags GitHub et catégories — pas seulement par nom.

**Transparence de Sécurité** : Chaque entrée du catalog montre clairement si elle est construite par Docker (avec signature et vérification transparentes du build) ou construite par la communauté (containerisée et maintenue par l'éditeur).

### Comment nous classifions les Serveurs MCP : Construits par Docker vs. Construits par la Communauté
**Serveurs Construits par Docker** : Quand vous voyez "Built by Docker", vous obtenez notre traitement de sécurité complet. Nous contrôlons l'ensemble du pipeline de build, fournissant des signatures cryptographiques, SBOMs, attestations de provenance et scan continu des vulnérabilités.

**Serveurs Construits par la Communauté** : Ces serveurs sont packagés comme images Docker par leurs développeurs. Bien que nous ne contrôlions pas leur processus de build, ils bénéficient toujours de l'isolation des conteneurs, ce qui représente une amélioration massive de la sécurité par rapport à l'exécution directe.

Les tiers jouent des rôles importants : Les serveurs construits par Docker démontrent le standard d'or pour la sécurité, tandis que les serveurs construits par la communauté nous permettent de scaler rapidement pour répondre à la demande des développeurs. Les développeurs peuvent changer d'avis après avoir soumis un serveur construit par la communauté et choisir de le resoumettre comme serveur construit par Docker.

Screenshot 2025-06-26 105434
Figure 3 : Un exemple de Serveur MCP Built by Docker.

## Ouvert aux soumissions de Serveurs MCP : Rejoignez le mouvement MCP sécurisé

{{< github repo="docker/mcp-registry" >}}


À partir d'aujourd'hui, nous ouvrons notre processus de soumission à la communauté. Que vous soyez un développeur individuel ou une équipe enterprise, vous pouvez présenter vos serveurs MCP sur le Docker MCP Catalog. En publiant via notre catalog, vous ne distribuez pas seulement votre serveur MCP — vous aidez à établir un nouveau standard de sécurité pour tout l'écosystème tout en rendant vos outils MCP disponibles à des millions de développeurs utilisant déjà Docker via Docker Hub et Docker Desktop. Votre serveur containerisé devient partie de la solution, démontrant que les outils IA prêts pour la production n'exigent pas de compromettre la sécurité.


Continuez à lire le post original sur le [Docker Blog](https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/).
