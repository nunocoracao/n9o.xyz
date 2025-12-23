---
title: "Comment Structurer les Équipes Produit"
summary: "Que vous travailliez dans une startup, une scale-up ou une organisation plus grande, dans tous les cas, le succès d'une équipe produit équivaut généralement à la croissance de cette équipe. Ces changements apportent des défis et des opportunités aux organisations. Voici quelques stratégies pour organiser les équipes produit, ce qu'elles optimisent et dans quelle situation les utiliser."
categories: ["Produit", "Stratégie", "Management"]
tags: ["équipe","organisation"]
# externalUrl: ""
date: 2023-01-08
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

> Toute organisation qui conçoit un système (défini au sens large) produira une conception dont la structure est une copie de la structure de communication de l'organisation.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

Que vous travailliez dans une startup, une scale-up ou une organisation plus grande, dans tous les cas, le succès d'une équipe produit équivaut typiquement à la croissance de cette équipe. D'abord, vous devez embaucher plus de personnes, puis diviser l'équipe, maintenant il y a un groupe d'équipes à organiser, et après un certain temps, la boucle finit par recommencer. Ces changements apportent des défis et des opportunités aux organisations. Voici quelques stratégies pour organiser les équipes produit, ce qu'elles optimisent et dans quelle situation les utiliser.

## Que faut-il optimiser ?

Lors de l'organisation des équipes produit, il est important de considérer les quatre facteurs suivants : **complétude**, **indépendance**, **clarté** et **équilibre**. _Alerte spoiler :_ Je n'ai trouvé aucun moyen de tous les optimiser. Cependant, il existe des patterns clairs sur lesquels de ces facteurs comptent le plus, selon l'étape où se trouveront votre organisation et ces équipes.

### Complétude
S'assurer que les équipes et groupes possèdent un domaine de bout en bout. Dans un domaine complet, les équipes/groupes devraient pouvoir construire une vision et une roadmap claires basées sur la valeur. Les domaines doivent être suffisamment serrés (pas de trous) et suffisamment larges pour apporter une valeur complète au fil du temps au lieu de simplement livrer des fonctionnalités.

### Indépendance
Aller vite est l'un des aspects les plus essentiels du succès d'une équipe. S'assurer que chaque équipe est indépendante sur son domaine contribuera grandement à sa capacité à avancer rapidement et à créer de la valeur globalement. L'indépendance est atteinte quand une équipe peut promouvoir sa mission et atteindre ses objectifs avec l'équipe de développement avec laquelle elle travaille, et avec un minimum de dépendances envers d'autres équipes. Les dépendances produit ne se limitent pas aux équipes de développement et aux dépendances techniques. Les dépendances supplémentaires incluent les autres PM, d'autres équipes de delivery comme data, UX, design, marketing, ainsi que des parties prenantes comme legal, compliance et finance.

### Clarté
Le domaine devrait être clair pour l'équipe interne et les parties prenantes externes. Cela garantira que a) l'équipe sait quelle est sa fonction centrale et ses objectifs et b) qu'il sera plus facile d'aligner les parties prenantes externes sur la même vision. Tous les artefacts et documents de l'équipe devraient viser à transmettre cette clarté, par ex. le nom de l'équipe.

### Équilibre
Lors de la création ou de la division de domaines pour les équipes produit, ou au sein d'un groupe produit, il est important de s'assurer qu'il y a une distribution équilibrée en termes de pertinence et de charge des sujets. Sinon, les équipes peuvent se retrouver dans des scénarios où une seule équipe s'attaque à tous les problèmes les plus importants pour l'entreprise avec seulement une quantité limitée des ressources totales disponibles. L'équilibre devrait également garantir que, dans une certaine mesure, tous les groupes et équipes ont un certain niveau de pertinence et d'impact ; sinon, il pourrait être difficile d'embaucher et de motiver les membres de l'équipe.



## Stratégies

Voici quelques options sur comment organiser les équipes et comment chaque stratégie se compare aux quatre facteurs ci-dessus.

### Fonctionnelle
*alias par Produits, Fonctionnalités, Composants Techniques*

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Frontend
FPM(Product Manager)
FEM(Engineering Manager)
FPD(Product Designer)
FFD(Frontend Developers)
end


subgraph Backend
BPM(Product Manager)
BEM(Engineering Manager)
BBD(Backend Developers)
end

subgraph Platform
PPM(Product Manager)
PEM(Engineering Manager)
PBD(Backend Developers)
end

O --> Frontend
O --> Backend
O --> Platform

{{< /mermaid >}}
</div>

<figcaption align = "center">Exemples d'organisation fonctionnelle de vos équipes avec 3 équipes : frontend, backend et platform</figcaption>

| Facteur     | Score                                                                   |
| ----------- | ----------------------------------------------------------------------- |
| Complétude  | ⭐️  <br/>_élevé pour les startups, chute dramatiquement avec l'échelle_ |
| Indépendance | ⭐️ ⭐️                                                                   |
| Clarté      | ⭐️ ⭐️ ⭐️                                                                |
| Équilibre   | ⭐️ ⭐️                                                                   |

Cette structure divise les groupes et équipes par modules fonctionnels comme les produits, fonctionnalités, composants ou couches (FE vs. BE). Cette option convient mieux à une entreprise en phase précoce, où un travail important est nécessaire pour livrer même les premières releases. La vision et la roadmap à ce stade sont typiquement celles du produit global, et vous avez principalement besoin que les différentes parties travaillent bien ensemble vers le périmètre déjà défini. À mesure que les organisations grandissent, cela devient une mauvaise option car lorsque les équipes grandissent et leur division devient de plus en plus granulaire, cela conduit à une augmentation dramatique du niveau de dépendances entre les équipes, et la vision et roadmap de chaque équipe/groupe sont contraintes, ce qui résulte en une faible orientation client.

| Avantages                                                                                                                                                                                                                                  | Inconvénients                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Clair quelle équipe devrait gérer les retours/bugs spécifiques <br/><br/>- Moins de dépendances que d'autres options pour les petites organisations <br/><br/>- Facile d'amener la bonne personne produit aux réunions externes, comme un appel commercial | - Cause de la confusion quand les fonctionnalités nécessitent des mises à jour d'infrastructure/architecture <br/><br/>- Contraint la vision/stratégie/roadmap au niveau du module, fonctionnalité ou produit (pas très centré client) <br/><br/>- Nécessite beaucoup de coordination inter-équipes quand les produits sont étroitement intégrés ou ont des dépendances de niveau inférieur (ex. platform) |



### Parcours Client

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Discovery
DPM(Product Manager)
DEM(Engineering Manager)
DPD(Product Designer)
DFD(Frontend Developers)
DBD(Backend Developers)
end

subgraph Purchase
PPM(Product Manager)
PEM(Engineering Manager)
PPD(Product Designer)
PFD(Frontend Developers)
PBD(Backend Developers)
end

subgraph Authentication
APM(Product Manager)
AEM(Engineering Manager)
APD(Product Designer)
AFD(Frontend Developers)
ABD(Backend Developers)
end

O --> Discovery
O --> Purchase
O --> Authentication

{{< /mermaid >}}
</div>

<figcaption align = "center">Exemples d'organisation de vos équipes autour d'un parcours client</figcaption>

| Facteur     | Score        |
| ----------- | ------------ |
| Complétude  | ⭐️ ⭐️ ⭐️     |
| Indépendance | ⭐️ ⭐️        |
| Clarté      | ⭐️ ⭐️ ⭐️     |
| Équilibre   | ⭐️ ⭐️        |


Dans cette structure, chaque équipe/groupe est responsable d'un parcours client global, ou d'une phase spécifique de ce parcours. Par exemple, dans un flux d'achat client, une équipe produit peut posséder l'acquisition utilisateur, une autre l'onboarding, une autre la découverte, et une autre le processus de checkout. Cette méthode nécessite que chaque phase du parcours client ait suffisamment de substance. Souvent, il y a des métriques business importantes qui reflètent de près le succès ou l'échec des clients à continuer leur parcours à ces jonctions, permettant la délégation de responsabilité. Cependant, optimiser pour des métriques spécifiques dans des parties du flux global pourrait ne pas aider les métriques globales. Cette structure organisationnelle nécessite beaucoup de coordination design pour assurer une expérience client cohérente à travers le(s) produit(s).


| Avantages                                                                                                                                                                                                                                                                                                             | Inconvénients                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - L'approche permet une mise à l'échelle efficace du produit<br/><br/>—l'équipe growth amène les clients au produit tandis que d'autres équipes améliorent les expériences d'essai et d'engagement du produit. <br/><br/>- Métriques claires que vous pouvez assigner à chaque product manager, comme la conversion d'essai gratuit à payant ou la rétention | - Si les membres de l'équipe ne comprennent pas leur étape client assignée, cela pourrait conduire à des fonctionnalités produit inadéquates, et donc à une mauvaise expérience produit. <br/><br/>- Nécessite une gouvernance stricte pour assurer une expérience utilisateur cohérente et excellente à travers les étapes du parcours client |


### Définition du Problème
*Alias Objectifs, Métriques, Jobs-to-be-Done*

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Acquisition
ACPM(Product Manager)
ACEM(Engineering Manager)
ACPD(Product Designer)
ACFD(Frontend Developers)
ACBD(Backend Developers)
end


subgraph Activation
ACTPM(Product Manager)
ACTEM(Engineering Manager)
ACTPD(Product Designer)
ACTFD(Frontend Developers)
ACTBD(Backend Developers)
end

subgraph Engagement
EPM(Product Manager)
EEM(Engineering Manager)
EPD(Product Designer)
EFD(Frontend Developers)
EBD(Backend Developers)
end

subgraph Conversion
CPM(Product Manager)
CEM(Engineering Manager)
CPD(Product Designer)
CFD(Frontend Developers)
CBD(Backend Developers)
end

O --> Acquisition
O --> Activation
O --> Engagement
O --> Conversion


{{< /mermaid >}}
</div>

<figcaption align = "center">Exemples d'organisation de vos équipes autour d'une définition de problème basée sur les métriques, dans ce cas un sous-ensemble des métriques AARRR</figcaption>

| Facteur     | Score        |
| ----------- | ------------ |
| Complétude  | ⭐️ ⭐️ ⭐️     |
| Indépendance | ⭐️ ⭐️        |
| Clarté      | ⭐️ ⭐️        |
| Équilibre   | ⭐️ ⭐️ ⭐️     |

Dans cette méthode, chaque équipe et groupe est responsable d'une définition de problème, qui peut être traduite en objectif, métriques et jobs-to-be-done. Les équipes peuvent alors toucher à n'importe quelle fonctionnalité qu'elles pensent résoudre ce problème. Le principal avantage de cette approche est de pousser la responsabilité vers les product managers individuels. Cela peut résulter en plusieurs équipes voulant (ou devant) travailler sur les mêmes composants produit en même temps, et donc personne ne se sentant propriétaire de ces choses. C'est un bon choix pour les entreprises avec des indicateurs clés de performance (KPI) produit bien établis qui capturent les résultats clients et business. La différence avec la méthode précédente est que les préoccupations globales à travers différentes équipes ne font pas nécessairement partie d'un seul flux utilisateur.

| Avantages                                                                                                                                                                                                                                    | Inconvénients                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Le client est toujours au centre de votre réflexion produit <br/><br/>- Facile d'assigner des objectifs aux équipes puis de mesurer le succès du produit <br/><br/>- Facile de déléguer la prise de décision et la responsabilité parmi les product managers | - Nécessite un ensemble stable de KPI qui ne changera pas souvent <br/><br/>- Nécessite une coordination de roadmap inter-équipes car les équipes individuelles peuvent avoir besoin de toucher plusieurs zones produit pour atteindre les objectifs <br/><br/>- Il faut du temps pour entrer dans la tête des clients (C'est pourquoi il est important de ne pas sauter directement dans le design produit, mais de s'assurer que tout le monde comprend comment chaque département voit le client) |


### Personas Utilisateur

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Buyer
BPM(Product Manager)
BEM(Engineering Manager)
BPD(Product Designer)
BFD(Frontend Developers)
BBD(Backend Developers)
end


subgraph Seller
SPM(Product Manager)
SEM(Engineering Manager)
SPD(Product Designer)
SFD(Frontend Developers)
SBD(Backend Developers)
end

subgraph Advertiser
APM(Product Manager)
AEM(Engineering Manager)
APD(Product Designer)
AFD(Frontend Developers)
ABD(Backend Developers)
end

O --> Buyer
O --> Seller
O --> Advertiser


{{< /mermaid >}}
</div>

<figcaption align = "center">Exemples d'organisation de vos équipes autour des personas, chaque équipe se concentre sur les besoins d'un type spécifique d'utilisateur</figcaption>

| Facteur     | Score                                                                         |
| ----------- | ----------------------------------------------------------------------------- |
| Complétude  | ⭐️ ⭐️ ⭐️                                                                      |
| Indépendance | ⭐️  </br> _proportionnel à l'indépendance des besoins de chaque persona_      |
| Clarté      | ⭐️ ⭐️ ⭐️                                                                      |
| Équilibre   | ⭐️  </br> _dépend de la pertinence de chaque persona pour le business_        |


Chaque équipe et groupe se voit assigner une persona et devient responsable des besoins de cette persona de bout en bout. Habituellement utilisé dans les produits avec plusieurs personas, où les besoins des différentes personas sont indépendants et n'entrent pas en conflit les uns avec les autres (ex. marketplace où il y a des acheteurs et des vendeurs). Cette organisation concentre les équipes sur les besoins des utilisateurs, mais elle nécessite une forte coordination entre équipes et groupes pour éviter de dupliquer les efforts, dévier des principes de design établis, ou emmener le produit dans différentes directions en même temps.

| Avantages                                                                                                                                                                                                                                                               | Inconvénients                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Très centré client, encourage les équipes à penser aux besoins/résultats des clients <br/><br/>- Simplifie la recherche utilisateur, chaque équipe peut cibler les entretiens par le type de personne avec qui elle veut parler et peut devenir experte de cette persona au fil du temps | - Peut tirer le produit dans plusieurs directions à la fois <br/><br/>- Si les personas ont de fortes connexions entre elles (ex. deux personas qui sont des acheteurs), cela mènera à des conflits et une faible indépendance entre équipes et groupes |


## Conclusion

![Pion solitaire regardant un groupe de pions rouges](/posts/202301-how-to-structure-product-teams/img/lonely.webp)

Il n'y a pas de solution unique pour tous les problèmes organisationnels à travers les entreprises, industries, etc. Cependant, les stratégies ci-dessus fournissent des moyens intéressants d'éviter les grands pièges.

Par exemple, si vous travaillez dans une entreprise en phase précoce, il peut être judicieux d'opter pour une division *fonctionnelle*. Les équipes et les périmètres seront cristallins, et cela vous fera traverser les premières étapes de validation du produit plus rapidement. De même, si votre produit a déjà un flux utilisateur bien défini (*ex. e-commerce avec Acquisition, Activation, Conversion, etc.*), il peut être judicieux de concentrer chaque équipe autour d'une des *étapes du flux client*. Cela facilitera la fourniture de KPI et périmètres clairs pour chaque équipe, et vous permettra de grandir facilement. Si vous avez plus d'une *persona* distincte (pensez au type acheteur-vendeur), vous pouvez clairement optimiser ces deux expériences.

Toutes ces stratégies vous permettent de vous adapter à votre contexte, et de faire évoluer la structure de votre équipe à mesure que ce contexte change (*parce qu'il changera*). Il n'y a pas de réponses claires, et les *suggestions* ci-dessus ne sont que des exemples de comment vous pouvez exploiter certaines stratégies présentées ici.

**La seule chose que vous ne devriez pas faire** est d'essayer de mélanger certains de ces frameworks au sein de la même structure. Cela générera de la confusion, des dépendances peu claires et du bruit à travers votre organisation.

À la fin, quelle que soit l'option que vous choisissez, à mesure que vous grandissez, votre objectif devrait toujours être de vous assurer que vos équipes ne perdent pas leur **focus client** car cela mènera à a) des clients mécontents et b) l'échec.

> Toute organisation qui conçoit un système (défini au sens large) produira une conception dont la structure est une copie de la structure de communication de l'organisation.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

[^1]:	Formulation originale de la *Loi de Conway*, introduite en 1967, de [Wikipedia][1].


[1]:	https://en.wikipedia.org/wiki/Conway%27s_law
