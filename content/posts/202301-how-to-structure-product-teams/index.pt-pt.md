---
title: "Como Estruturar Equipas de Produto"
summary: "Não importa se trabalhas numa startup, scale-up ou numa organização maior, em qualquer caso, o sucesso de uma equipa de produto geralmente significa crescer essa equipa. Estas mudanças trazem desafios e oportunidades para as organizações. Aqui estão algumas estratégias para organizar equipas de produto, o que otimizam e em que situação as usar."
categories: ["Produto", "Estratégia", "Gestão"]
tags: ["equipa","organização"]
# externalUrl: ""
date: 2023-01-08
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

> Qualquer organização que desenha um sistema (definido de forma ampla) irá produzir um design cuja estrutura é uma cópia da estrutura de comunicação da organização.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

Não importa se trabalhas numa startup, scale-up ou numa organização maior, em qualquer caso, o sucesso de uma equipa de produto tipicamente significa crescer essa equipa. Primeiro, precisas de contratar mais pessoas, depois dividir a equipa, agora há um grupo de equipas para organizar, e depois de algum tempo, o ciclo eventualmente começa de novo. Estas mudanças trazem desafios e oportunidades para as organizações. Aqui estão algumas estratégias para organizar equipas de produto, o que otimizam e em que situação as usar.

## Para que otimizar?

Ao organizar equipas de produto é importante considerar os seguintes quatro fatores: **completude**, **independência**, **clareza** e **equilíbrio**. _Alerta de spoiler:_ Não encontrei nenhuma forma de otimizar todos. No entanto, existem alguns padrões claros sobre quais destes fatores importam mais, dependendo da fase em que a tua organização e essas equipas estarão.

### Completude
Garantir que as equipas e grupos possuem um domínio de ponta a ponta. Num domínio completo, as equipas/grupos devem ser capazes de construir uma visão e roadmap claras baseadas em valor. Os domínios precisam de ser suficientemente apertados (sem buracos) e suficientemente amplos para trazer valor completo ao longo do tempo em vez de entregar apenas funcionalidades.

### Independência
Mover-se rapidamente é um dos aspetos mais essenciais do sucesso de uma equipa. Garantir que cada equipa é independente sobre o seu domínio contribuirá muito para a sua capacidade de se mover rapidamente e criar valor no geral. A independência é alcançada quando uma equipa pode promover a sua missão e atingir os seus objetivos com a equipa de desenvolvimento com quem trabalha, e com dependências mínimas de outras equipas. As dependências de produto não se limitam a equipas de desenvolvimento e dependências técnicas. Dependências adicionais incluem outros PMs, outras equipas de entrega como data, UX, design, marketing, e também stakeholders como legal, compliance e finanças.

### Clareza
O domínio deve ser claro para a equipa interna e stakeholders externos. Isto irá garantir que a) a equipa sabe qual é a sua função central e objetivos e b) que será mais fácil alinhar stakeholders externos com a mesma visão. Todos os artefactos e documentos da equipa devem visar transmitir essa clareza, ex. o nome da equipa.

### Equilíbrio
Ao criar ou dividir domínios para equipas de produto, ou dentro de um grupo de produto, é importante garantir que há uma distribuição equilibrada em termos de relevância e carga dos temas. Caso contrário, as equipas podem cair em cenários onde uma única equipa está a lidar com todos os problemas mais significativos da empresa com apenas uma quantidade limitada dos recursos totais disponíveis. O equilíbrio também deve garantir que, até certo ponto, todos os grupos e equipas têm um certo nível de relevância e impacto; caso contrário, pode ser difícil contratar e motivar membros da equipa.



## Estratégias

Aqui estão algumas opções sobre como organizar equipas e como cada estratégia se compara aos quatro fatores acima.

### Funcional
*também conhecida como por Produtos, Funcionalidades, Componentes Técnicos*

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

<figcaption align = "center">Exemplos de organizar as tuas equipas funcionalmente com 3 equipas: frontend, backend e platform</figcaption>

| Fator       | Pontuação                                                            |
| ----------- | -------------------------------------------------------------------- |
| Completude  | ⭐️  <br/>_alto para startups, cai dramaticamente com escala_         |
| Independência | ⭐️ ⭐️                                                                |
| Clareza     | ⭐️ ⭐️ ⭐️                                                             |
| Equilíbrio  | ⭐️ ⭐️                                                                |

Esta estrutura divide grupos e equipas por módulos funcionais como produtos, funcionalidades, componentes ou camadas (FE vs. BE). Esta opção é mais adequada para uma empresa em fase inicial, onde é necessário trabalho pesado para entregar até as primeiras releases. A visão e roadmap neste ponto são tipicamente as do produto geral, e principalmente precisas que as diferentes partes trabalhem bem juntas em direção ao âmbito já definido. À medida que as organizações escalam, isto torna-se uma má opção porque quando as equipas crescem e a sua divisão fica cada vez mais granular, isto leva a um aumento dramático no nível de dependências entre equipas, e a visão e roadmap de cada equipa/grupo ficam constrangidas, o que resulta em baixa centralidade no cliente.

| Prós                                                                                                                                                                                                                                  | Contras                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Claro qual equipa deve tratar feedback/bugs específicos <br/><br/>- Menos dependências do que outras opções para organizações mais pequenas <br/><br/>- Fácil trazer a pessoa de produto certa para reuniões externas, como uma chamada de vendas | - Causa confusão quando funcionalidades requerem atualizações de infraestrutura/arquitetura <br/><br/>- Constrange visão/estratégia/roadmap ao nível do módulo, funcionalidade ou produto (não muito centrado no cliente) <br/><br/>- Requer muita coordenação entre equipas quando os produtos estão fortemente integrados ou têm dependências de nível inferior (ex. plataforma) |



### Jornada do Cliente

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

<figcaption align = "center">Exemplos de organizar as tuas equipas em torno de uma jornada do cliente</figcaption>

| Fator       | Pontuação    |
| ----------- | ------------ |
| Completude  | ⭐️ ⭐️ ⭐️     |
| Independência | ⭐️ ⭐️        |
| Clareza     | ⭐️ ⭐️ ⭐️     |
| Equilíbrio  | ⭐️ ⭐️        |


Nesta estrutura, cada equipa/grupo é responsável por uma jornada completa do cliente, ou uma fase específica dessa jornada. Por exemplo, num fluxo de compra do cliente, uma equipa de produto pode ser dona da aquisição de utilizadores, outra do onboarding, outra da descoberta e outra do processo de checkout. Este método requer que cada fase na jornada do cliente tenha substância suficiente. Frequentemente, existem métricas de negócio importantes que refletem de perto o sucesso ou falha dos clientes em continuar a sua jornada nessas junções, permitindo delegação de responsabilidade. No entanto, otimizar para métricas específicas em partes do fluxo geral pode não ajudar as métricas gerais. Esta estrutura organizacional requer muita coordenação de design para garantir uma experiência coesa do cliente através do(s) produto(s).


| Prós                                                                                                                                                                                                                                                                                                       | Contras                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - A abordagem permite escalar o produto de forma eficiente<br/><br/>—a equipa de growth traz clientes para o produto enquanto outras equipas melhoram as experiências de trial e engagement do produto. <br/><br/>- Métricas claras que podes atribuir a cada product manager, como conversão de trial gratuito para pago ou retenção | - Se os membros da equipa não entendem a fase do cliente que lhes foi atribuída, pode levar a funcionalidades de produto inadequadas e, portanto, a uma má experiência de produto. <br/><br/>- Requer governance apertada para garantir uma experiência de utilizador consistente e excelente através das fases da jornada do cliente |


### Definição do Problema
*Também conhecido como Objetivos, Métricas, Jobs-to-be-Done*

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

<figcaption align = "center">Exemplos de organizar as tuas equipas em torno de uma definição de problema baseada em métricas, neste caso um subconjunto das métricas AARRR</figcaption>

| Fator       | Pontuação    |
| ----------- | ------------ |
| Completude  | ⭐️ ⭐️ ⭐️     |
| Independência | ⭐️ ⭐️        |
| Clareza     | ⭐️ ⭐️        |
| Equilíbrio  | ⭐️ ⭐️ ⭐️     |

Neste método, cada equipa e grupo é responsável por uma definição de problema, que pode ser traduzida num objetivo, métricas e jobs-to-be-done. As equipas podem então tocar em qualquer funcionalidade que acreditem que vai resolver esse problema. O principal benefício desta abordagem é empurrar a responsabilidade para product managers individuais. Pode resultar em múltiplas equipas querendo (ou precisando) trabalhar nos mesmos componentes de produto ao mesmo tempo, e assim ninguém sentindo ownership por essas coisas. Esta é uma boa escolha para empresas com indicadores-chave de desempenho (KPIs) de produto bem estabelecidos que capturam resultados de clientes e negócio. A diferença do método anterior é que as preocupações gerais através de diferentes equipas não são necessariamente parte de um único fluxo de utilizador.

| Prós                                                                                                                                                                                                                                     | Contras                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - O cliente está sempre no centro do teu pensamento de produto <br/><br/>- Fácil atribuir objetivos às equipas e depois medir o sucesso do produto <br/><br/>- Fácil delegar tomada de decisão e responsabilidade entre product managers | - Requer um conjunto estável de KPIs que não mude frequentemente <br/><br/>- Requer coordenação de roadmap entre equipas uma vez que equipas individuais podem precisar de tocar várias áreas de produto para atingir objetivos <br/><br/>- Leva tempo para entrar na cabeça dos clientes (Por isso é importante não saltar diretamente para o design de produto, mas garantir que todos entendem como cada departamento vê o cliente) |


### Personas de Utilizador

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

<figcaption align = "center">Exemplos de organizar as tuas equipas em torno de personas, cada equipa foca nas necessidades de um tipo específico de utilizador</figcaption>

| Fator       | Pontuação                                                                      |
| ----------- | ------------------------------------------------------------------------------ |
| Completude  | ⭐️ ⭐️ ⭐️                                                                       |
| Independência | ⭐️  </br> _proporcional à independência das necessidades de cada persona_      |
| Clareza     | ⭐️ ⭐️ ⭐️                                                                       |
| Equilíbrio  | ⭐️  </br> _depende da relevância de cada persona para o negócio_               |


Cada equipa e grupo é atribuído a uma persona e torna-se responsável pelas necessidades dessa persona de ponta a ponta. Normalmente usado em produtos com múltiplas personas, onde as necessidades das várias personas são independentes e não entram em conflito umas com as outras (ex. marketplace onde há compradores e vendedores). Esta organização foca as equipas nas necessidades dos utilizadores, mas requer coordenação pesada entre equipas e grupos para evitar duplicar esforços, desviar de princípios de design estabelecidos ou levar o produto em direções diferentes ao mesmo tempo.

| Prós                                                                                                                                                                                                                                                          | Contras                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Muito centrado no cliente, encoraja as equipas a pensar nas necessidades/resultados dos clientes <br/><br/>- Simplifica a pesquisa de utilizador, cada equipa pode direcionar entrevistas pelo tipo de pessoa com quem quer falar e pode tornar-se especialista nessa persona ao longo do tempo | - Pode puxar o produto em múltiplas direções ao mesmo tempo <br/><br/>- Se as personas têm fortes conexões entre si (ex. duas personas que são ambas compradores) isso levará a conflitos e baixa independência entre equipas e grupos |


## Conclusão

![Peão solitário a olhar para grupo de peões vermelhos](/posts/202301-how-to-structure-product-teams/img/lonely.webp)

Não há uma única solução para todos os problemas organizacionais através de empresas, indústrias, etc. No entanto, as estratégias acima fornecem algumas formas interessantes de evitar grandes armadilhas.

Como exemplo, se estás a trabalhar numa empresa em fase inicial, pode fazer sentido optar por uma divisão *funcional*. As equipas e âmbitos serão cristalinos, e vai levar-te através das primeiras fases de validação do produto mais rapidamente. Da mesma forma, se o teu produto já tem um fluxo de utilizador bem definido (*ex. e-commerce com Acquisition, Activation, Conversion, etc.*), pode ser uma opção focar cada equipa em torno de uma das *fases no fluxo do cliente*. Isto tornará mais fácil fornecer KPIs e âmbitos claros para cada equipa, e permitirá escalar facilmente. Se tens mais do que uma *persona* distinta (pensa no tipo comprador-vendedor), podes otimizar essas duas experiências claramente.

Todas estas estratégias permitem-te adaptar ao teu contexto, e evoluir a estrutura da tua equipa à medida que esse contexto muda (*porque VAI mudar*). Não há respostas claras, e as *sugestões* acima são meramente exemplos de como podes alavancar algumas estratégias aqui apresentadas.

**A única coisa que não deves fazer** é tentar misturar alguns destes frameworks dentro da mesma estrutura. Isto vai gerar confusão, dependências pouco claras e ruído na tua organização.

No final, independentemente da opção que escolheres, à medida que escalas, o teu objetivo deve ser sempre garantir que as tuas equipas não perdem o seu **foco no cliente** pois isso levará a a) clientes insatisfeitos e b) falha.

> Qualquer organização que desenha um sistema (definido de forma ampla) irá produzir um design cuja estrutura é uma cópia da estrutura de comunicação da organização.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

[^1]:	Formulação original da *Lei de Conway*, introduzida em 1967, da [Wikipedia][1].


[1]:	https://en.wikipedia.org/wiki/Conway%27s_law
