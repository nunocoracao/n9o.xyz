---
title: "How to Structure Product Teams"
summary: "It doesn't matter if you work in a startup, scale-up, or a larger organization, in any case, the success of a product team usually equals growing such a team. These changes bring challenges and opportunities to organizations. Here are some strategies for organizing product teams, what they optimize, and in which situation to use them."
categories: ["Product", "Strategy", "Management"]
tags: ["team","organization"]
# externalUrl: ""
date: 2023-01-08
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.</br>
> 
> - <cite>Melvin E. Conway[^1]</cite>

It doesn't matter if you work in a startup, scale-up, or a larger organization, in any case, the success of a product team typically equals growing such a team. First, you need to hire more people, then split the team, now there’s a group of teams to organize, and after a while, the loop eventually begins again. These changes bring challenges and opportunities to organizations. Here are some strategies for organizing product teams, what they optimize, and in which situation to use them.  

## What to solve for?

When organizing product teams it is important to consider the following four factors: **completeness**, **independence**, **clarity**, and **balance**. _Spoiler alert:_ I haven’t found any way to optimize all of them. However, there are some clear patterns in which of these factors matter the most, depending on the stage your organization and those teams will be in.

### Completeness
Making sure that teams and groups own a domain end-to-end. In a complete domain, teams/groups should be able to build a clear value-based vision and roadmap. Domains need to be tight enough (no holes) and wide enough to bring complete value over time instead of delivering features.

### Independence
Moving fast is one of the most essential aspects of a team’s success. Making sure that each team is independent over its domain will highly contribute to its ability to move fast and create value overall. Independence is achieved when a team can promote its mission and achieve its goals with the development team they are working with, and with minimum dependencies on other teams. Product dependencies are not limited to development teams and technical dependencies. Additional dependencies include the other PMs, other delivery teams like data, UX, design, marketing, and also stakeholders like legal, compliance, and finance.

### Clarity
The domain should be clear for the internal team and external stakeholders. This will ensure that a) the team knows what its core function and goals are and b) that it will be easier to align external stakeholders to the same vision. All the team’s artifacts and docs should aim to convey that clarity, e.g., the team’s name.

### Balance
When creating or splitting domains for product teams, or within a product group, it is important to ensure that there is a balanced distribution in terms of relevance and load of the topics. Otherwise, teams can fall into scenarios where a single team is tackling all the most significant problems for the company with only a limited amount of the total available resources. The balance should also ensure that, to some extent, all groups and teams have a certain level of relevance and impact; otherwise, it could be hard to hire and motivate team members.



## Strategies

Here are some options on how to organize teams and how each strategy compares to the four factors above.
 
### Functional
*aka by Products, Features, Tech Components*

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

<figcaption align = "center">Examples of organizing your teams functionally with 3 teams: frontend, backend, and platform</figcaption>

| Factor       | Score                                                       |
| ------------ | ----------------------------------------------------------- |
| Completeness | ⭐️  <br/>_high for startups, drops dramatically with scale_ |
| Independence | ⭐️ ⭐️                                                       |
| Clarity      | ⭐️ ⭐️ ⭐️                                                    |
| Balance      | ⭐️ ⭐️                                                       |

This structure splits groups and teams by functional modules like products, features, components, or layers (FE vs. BE). This option is best suited for a company in an early stage, where heavy lifting is required to deliver even the first releases. The vision and roadmap at this point are typically the overall product ones, and you mostly need the different parts to work well together toward the already defined scope. As organizations scale, this becomes a bad option because as teams grow and their split gets increasingly granular. This leads to a dramatic increase in the level of dependencies between teams, and each team/group’s vision and roadmap are constrained, which results in low customer centricity. 

| Pros                                                                                                                                                                                                                             | Cons                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Clear which team should handle specific feedback/bugs <br/><br/>- Fewer dependencies than other options for smaller orgs <br/><br/>- Easy to bring the right product person to external product meetings, such as a sales call | - Causes confusion when features require infrastructure/architectural updates <br/><br/>- Constraints vision/strategy/roadmap to the module, feature, or product level (not very customer-centric) <br/><br/>- Requires a lot of cross-team coordination when products are tightly integrated, or have lower-level dependencies (e.g. platform) |



### Customer Journey

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

<figcaption align = "center">Examples of organizing your teams around a customer journey</figcaption>

| Factor       | Score    |
| ------------ | -------- |
| Completeness | ⭐️ ⭐️ ⭐️ |
| Independence | ⭐️ ⭐️    |
| Clarity      | ⭐️ ⭐️ ⭐️ |
| Balance      | ⭐️ ⭐️    |


In this structure, each team/group is responsible for an overall customer journey, or a specific phase in that journey. For example, in a customer purchase flow, a product team can own user acquisition, another onboarding, another discovery, and another the checkout process. This method requires that each phase in the customer journey has enough substance to it. Often, there are important business metrics that closely mirror the success or failure of customers continuing their journey at those junctures, allowing for delegation of accountability. However, optimizing for specific metrics in parts of the overall flow might not help the overall metrics. This org structure requires a lot of design coordination to ensure a cohesive customer experience across the product(s). 


| Pros                                                                                                                                                                                                                                                                                                    | Cons                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - The approach allows efficient product scaling<br/><br/>—the growth team drives customers to the product while other teams enhance product trial and engagement experiences. <br/><br/>- Clear metrics you can assign to each product manager, such as conversion from free trial to paid or retention | - If team members don’t understand their assigned customer stage, it could lead to inadequate product features, and thus a poor product experience. <br/><br/>- Requires tight governance to ensure a consistent and great user experience across customer journey stages |


### Problem Definition
*Aka Goals, Metrics, Jobs-to-be-Done*

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

<figcaption align = "center">Examples of organizing your teams around a metrics problem definition, in this case a subset of the AARRR metrics</it></figcaption>

| Factor       | Score    |
| ------------ | -------- |
| Completeness | ⭐️ ⭐️ ⭐️ |
| Independence | ⭐️ ⭐️    |
| Clarity      | ⭐️ ⭐️    |
| Balance      | ⭐️ ⭐️ ⭐️ |

In this metfhod, each team and group is responsible for a problem definition, which can be translated to a goal, metrics, and jobs-to-be-done. Teams can then touch whichever functionality they believe is going to solve that problem. The main benefit of this approach is pushing accountability to individual product managers. It can result in multiple teams wanting (or needing) to work on the same product components at the same time, and thus no one feeling ownership for those things. This is a good choice for companies with well-established product key performance indicators (KPIs) that capture customer and business outcomes. The difference from the previous method is that the overall concerns across different teams are not necessarily part of a single user flow.

| Pros                                                                                                                                                                                                                              | Cons                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - The customer is always at the center of your product thinking <br/><br/>- Easy to assign goals to teams and then measure product success <br/><br/>- Easy to delegate decision-making and accountability among product managers | - Requires a stable set of KPIs that won’t change often <br/><br/>- Requires cross-team roadmap coordination as individual teams may need to touch plenty of product areas to hit goals <br/><br/>- It takes time to get into customers’ heads (That’s why it’s important not to jump right into product design, but make sure everyone understands how each department views the customer) |


### User Personas

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

<figcaption align = "center">Examples of organizing your teams around personas, each team focus on the needs of a specific type of user</it></figcaption>

| Factor       | Score                                                              |
| ------------ | ------------------------------------------------------------------ |
| Completeness | ⭐️ ⭐️ ⭐️                                                           |
| Independence | ⭐️  </br> _proportional to independence of needs for each persona_ |
| Clarity      | ⭐️ ⭐️ ⭐️                                                           |
| Balance      | ⭐️  </br> _depends on relevance of each persona for the business_  |


Each team and group are assigned a persona and become responsible for that persona’s needs end-to-end. Usually used in products with multiple personas, where the needs of the various personas are independent and don’t conflict with each other (e.g., marketplace where there are buyers and sellers). This organization focuses teams on the needs of users, but it requires heavy coordination across teams and groups to avoid duplicating efforts, deviating from established design principles, or taking the product in different directions at the same time.

| Pros                                                                                                                                                                                                                                               | Cons                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Very customer-centric, encourages teams to think about customer needs/outcomes <br/><br/>- Simplifies user research, each team can target interviews by the type of person they want to talk to and can become experts in that persona over time | - Can pull the product in multiple directions at once <br/><br/>- If personas have strong connections between them (e.g., two personas that are buyers) it will lead to clashes and low independence across teams and groups |


## Wrap Up  

![Lone pawn looking at group of red pawns][image-1]

There’s no single solution for all organizational issues across companies, industries, etc. However, the above strategies provide some interesting ways of avoiding big pitfalls. 

As an example, if you are working on an early-stage company, it might sense to go with a *functional* split. Teams and scopes will be crystal clear, and it will get you through the first initial stages of product validation faster. In the same way, if your product already has a well-defined user flow (*e.g., e-commerce with Acquisition, Activation, Conversion, etc.*), it might be an option to focus each team around one of the *stages in the customer flow*. This will it make it easier to provide clear KPIs and scopes for each team, and will allow you to scale easily. If you have more than one distinct *personas* (think buyer-seller type), you can optimize those two experiences clearly. 

All of these strategies allow you to adapt to your context, and evolve your team's structure as that context changes (*because it WILL change*). There are no clear answers, and the above *suggestions* are merely examples of how you can leverage some strategies presented here.

**The only thing that you shouldn't do** is try to mix some of these frameworks inside the same structure. This will generate confusion, unclear dependencies, and noise across our organization.

At the end, regardless of which option you choose, as you scale, your goal should always be to make sure that your teams don't lose their **customer-focus** as that will lead to a) unhappy customers and b) failure.

> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.</br>
> 
> - <cite>Melvin E. Conway[^1]</cite>

[^1]:	Original wording for the *Coway's Law*, introduced in 1967, from [Wikipedia][1].


[1]:	https://en.wikipedia.org/wiki/Conway%27s_law

[image-1]:	img/lonely.jpg