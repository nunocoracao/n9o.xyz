---
title: “Como estruturar equipes de produto”
summary: "Não importa se você trabalha em uma startup, em expansão ou em uma organização maior, em qualquer caso, o sucesso de uma equipe de produto geralmente equivale ao crescimento dessa equipe. Essas mudanças trazem desafios e oportunidades para as organizações. Aqui estão algumas estratégias para organizar equipes de produtos, o que elas otimizam e em que situação utilizá-las."
categories: ["Produto", "Estratégia", "Gerenciamento"]
tags: ["equipe","organização"]
# externalUrl: ""
date: 2023-01-08
draft: false
showauthor: false
authors:
  - nunocoracao
# series: ["The Complete PM"]
# series\_order: 1

---
> Qualquer organização que projete um sistema (definido de forma ampla) produzirá um design cuja estrutura é uma cópia da estrutura de comunicação da organização.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

Não importa se você trabalha em uma startup, em expansão ou em uma organização maior; em qualquer caso, o sucesso de uma equipe de produto normalmente equivale ao crescimento dessa equipe. Primeiro, você precisa contratar mais pessoas, depois dividir a equipe, agora há um grupo de equipes para organizar e, depois de um tempo, o ciclo finalmente começa novamente. Essas mudanças trazem desafios e oportunidades para as organizações. Aqui estão algumas estratégias para organizar equipes de produto, o que elas otimizam e em que situação utilizá-las.

## O que resolver?

Ao organizar equipes de produto, é importante considerar os quatro fatores a seguir: **completude**, **independência**, **clareza** e **equilíbrio**. _Alerta de spoiler:_ Não encontrei nenhuma maneira de otimizar todos eles. No entanto, existem alguns padrões claros sobre quais desses fatores são mais importantes, dependendo do estágio em que sua organização e essas equipes estarão.

### Completude
Garantir que as equipes e grupos possuam um domínio de ponta a ponta. Num domínio completo, as equipas/grupos devem ser capazes de construir uma visão e um roteiro claros e baseados em valores. Os domínios precisam ser suficientemente estreitos (sem lacunas) e amplos o suficiente para agregar valor total ao longo do tempo, em vez de fornecer recursos.

### Independência
Agir rapidamente é um dos aspectos mais essenciais para o sucesso de uma equipe. Garantir que cada equipe seja independente em relação ao seu domínio contribuirá muito para sua capacidade de agir rapidamente e criar valor em geral. A independência é alcançada quando uma equipe consegue promover sua missão e atingir seus objetivos com a equipe de desenvolvimento com a qual está trabalhando e com dependências mínimas de outras equipes. As dependências do produto não se limitam às equipes de desenvolvimento e às dependências técnicas. Dependências adicionais incluem outros PMs, outras equipes de entrega, como dados, UX, design, marketing, e também partes interessadas, como jurídico, conformidade e finanças.

### Clareza
O domínio deve ser claro para a equipe interna e para as partes interessadas externas. Isto garantirá que a) a equipe saiba quais são suas funções e objetivos principais eb) que será mais fácil alinhar as partes interessadas externas à mesma visão. Todos os artefatos e documentos da equipe devem ter como objetivo transmitir essa clareza, por exemplo, o nome da equipe.

### Equilíbrio
Ao criar ou dividir domínios para equipes de produtos, ou dentro de um grupo de produtos, é importante garantir que haja uma distribuição equilibrada em termos de relevância e carga dos temas. Caso contrário, as equipas podem cair em cenários em que uma única equipa está a resolver todos os problemas mais significativos para a empresa com apenas uma quantidade limitada do total de recursos disponíveis. O equilíbrio também deve garantir que, até certo ponto, todos os grupos e equipas tenham um certo nível de relevância e impacto; caso contrário, poderá ser difícil contratar e motivar os membros da equipe.



## Estratégias

Aqui estão algumas opções de como organizar equipes e como cada estratégia se compara aos quatro fatores acima.
 
### Funcional
*também conhecido como produtos, recursos, componentes técnicos*

<div style="background-color:branco; preenchimento: 20px">
{{< sereia >}}
gráfico LR

O([Organização de Produto e Engenharia])

subgrafo Frontend
FPM (Gerente de Produto)
FEM (Gerente de Engenharia)
FPD (Designer de Produto)
FFD (desenvolvedores front-end)
fim


back-end do subgrafo
BPM (Gerente de Produto)
BEM (Gerente de Engenharia)
BBD (desenvolvedores de back-end)
fim

subgrafo Plataforma
PPM (Gerente de Produto)
PEM (Gerente de Engenharia)
PBD (desenvolvedores de back-end)
fim

O -> Front-end
O -> Back-end
O --> Plataforma

{{< /sereia >}}
</div>

<figcaption align = "center">Exemplos de organização funcional de suas equipes com 3 equipes: frontend, backend e plataforma</figcaption>

| Fator | Pontuação |
| ------------ | -------------------------------------------------- --------- |
| Completude | ⭐️ <br/>_alto para startups, cai drasticamente com escala_ |
| Independência | ⭐️ ⭐️ |
| Clareza | ⭐️ ⭐️ ⭐️ |
| Equilíbrio | ⭐️ ⭐️ |

Essa estrutura divide grupos e equipes por módulos funcionais como produtos, recursos, componentes ou camadas (FE vs. BE). Esta opção é mais adequada para uma empresa em estágio inicial, onde é necessário trabalho pesado para entregar até mesmo os primeiros lançamentos. A visão e o roteiro neste ponto são normalmente os do produto geral, e você precisa principalmente que as diferentes partes funcionem bem juntas em direção ao escopo já definido. À medida que as organizações crescem, esta torna-se uma má opção porque à medida que as equipas crescem e a sua divisão se torna cada vez mais granular. Isto leva a um aumento dramático no nível de dependências entre as equipes, e a visão e o roteiro de cada equipe/grupo são limitados, o que resulta em baixa centralização no cliente.

| Prós | Contras |
| -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------ | -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------- |
| - Claro qual equipe deve lidar com feedback/bugs específicos <br/><br/>- Menos dependências do que outras opções para organizações menores <br/><br/>- Fácil de trazer a pessoa certa para reuniões de produto externas, como uma chamada de vendas | - Causa confusão quando os recursos exigem atualizações de infraestrutura/arquitetura <br/><br/>- Restringe a visão/estratégia/roteiro ao nível do módulo, recurso ou produto (não muito centrado no cliente) <br/><br/>- Requer muita coordenação entre equipes quando os produtos estão totalmente integrados ou têm dependências de nível inferior (por exemplo, plataforma) |



### Viagem do cliente

<div style="background-color:branco; preenchimento: 20px">
{{< sereia >}}
gráfico LR

O([Organização de Produto e Engenharia])

subgráfico Descoberta
DPM (Gerente de Produto)
DEM(Gerente de Engenharia)
DPD (Designer de Produto)
DFD (desenvolvedores front-end)
DBD (desenvolvedores de back-end)
fim

subgráfico Compra
PPM (Gerente de Produto)
PEM (Gerente de Engenharia)
PPD (Designer de Produto)
PFD (desenvolvedores front-end)
PBD (desenvolvedores de back-end)
fim

Autenticação de subgrafo
APM (Gerente de Produto)
AEM (Gerente de Engenharia)
APD (Designer de Produto)
AFD (desenvolvedores front-end)
ABD (desenvolvedores de back-end)
fim

Ó -> Descoberta
Ó --> Compra
O --> Autenticação

{{< /sereia >}}
</div>

<figcaption align = "center">Exemplos de organização de suas equipes em torno da jornada do cliente</figcaption>

| Fator | Pontuação |
| ------------ | -------- |
| Completude | ⭐️ ⭐️ ⭐️ |
| Independência | ⭐️ ⭐️ |
| Clareza | ⭐️ ⭐️ ⭐️ |
| Equilíbrio | ⭐️ ⭐️ |


Nessa estrutura, cada equipe/grupo é responsável por uma jornada geral do cliente ou por uma fase específica dessa jornada. Por exemplo, em um fluxo de compra do cliente, uma equipe de produto pode ser responsável pela aquisição de usuários, outra pela integração, outra pela descoberta e outra pelo processo de checkout. Este método exige que cada fase da jornada do cliente tenha substância suficiente. Muitas vezes, existem métricas de negócios importantes que refletem de perto o sucesso ou o fracasso dos clientes que continuam a sua jornada nessas conjunturas, permitindo a delegação de responsabilidade. No entanto, a otimização de métricas específicas em partes do fluxo geral pode não ajudar nas métricas gerais. Essa estrutura organizacional requer muita coordenação de design para garantir uma experiência coesa do cliente em todos os produtos.


| Prós | Contras |
| -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------------------ | -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------- |
| - A abordagem permite um dimensionamento eficiente do produto<br/><br/>— a equipe de crescimento direciona os clientes para o produto enquanto outras equipes aprimoram as experiências de teste e engajamento do produto. <br/><br/>- Métricas claras que você pode atribuir a cada gerente de produto, como conversão de avaliação gratuita para paga ou retenção | - Se os membros da equipe não compreenderem o estágio atribuído ao cliente, isso poderá levar a recursos inadequados do produto e, portanto, a uma experiência ruim do produto. <br/><br/>- Requer governança rígida para garantir uma experiência de usuário excelente e consistente em todos os estágios da jornada do cliente |


### Definição de problema
*Também conhecido como metas, métricas, tarefas a serem realizadas*

<div style="background-color:branco; preenchimento: 20px">
{{< sereia >}}
gráfico LR

O([Organização de Produto e Engenharia])

Aquisição de subgrafo
ACPM (Gerente de Produto)
ACEM(Gerente de Engenharia)
ACPD (Designer de Produto)
ACFD (desenvolvedores front-end)
ACBD (desenvolvedores de back-end)
fim


Ativação de subgrafo
ACTPM (Gerente de Produto)
ACTEM(Gerente de Engenharia)
ACTPD (Designer de Produto)
ACTFD (desenvolvedores front-end)
ACTBD (desenvolvedores de back-end)
fim

subgrafo Engajamento
EPM (Gerente de Produto)
EEM (Gerente de Engenharia)
EPD (Designer de Produto)
EFD (desenvolvedores front-end)
EBD (desenvolvedores de back-end)
fim

Conversão de subgrafo
CPM (Gerente de Produto)
CEM (Gerente de Engenharia)
CPD (Designer de Produto)
CFD (desenvolvedores front-end)
CBD (desenvolvedores de back-end)
fim

O --> Aquisição
O --> Ativação
O --> Engajamento
Ó -> Conversão


{{< /sereia >}}
</div>

<figcaption align = "center">Exemplos de organização de suas equipes em torno de uma definição de problema de métricas, neste caso um subconjunto das métricas AARRR</it></figcaption>

| Fator | Pontuação |
| ------------ | -------- |
| Completude | ⭐️ ⭐️ ⭐️ |
| Independência | ⭐️ ⭐️ |
| Clareza | ⭐️ ⭐️ |
| Equilíbrio | ⭐️ ⭐️ ⭐️ |

Neste método, cada equipe e grupo é responsável por uma definição do problema, que pode ser traduzida em uma meta, métricas e tarefas a serem realizadas. As equipes podem então tocar em qualquer funcionalidade que acreditem que resolverá o problema. O principal benefício dessa abordagem é levar a responsabilidade aos gerentes de produto individuais. Isso pode resultar em várias equipes querendo (ou precisando) trabalhar nos mesmos componentes do produto ao mesmo tempo e, portanto, ninguém se sentindo responsável por essas coisas. Esta é uma boa escolha para empresas com indicadores-chave de desempenho (KPIs) de produtos bem estabelecidos que capturam resultados de clientes e de negócios. A diferença do método anterior é que as preocupações gerais das diferentes equipes não fazem necessariamente parte de um único fluxo de usuário.

| Prós | Contras |
| -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------- | -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------- |
| - O cliente está sempre no centro do pensamento do seu produto <br/><br/>- Fácil de atribuir metas às equipes e depois medir o sucesso do produto <br/><br/>- Fácil de delegar a tomada de decisões e responsabilidades entre eles gestores de produto | - Requer um conjunto estável de KPIs que não mudam com frequência <br/><br/>- Requer coordenação de roteiro entre equipes, pois equipes individuais podem precisar tocar em muitas áreas de produtos para atingir as metas. <br/><br/> - Leva tempo para entrar na cabeça dos clientes (é por isso que é importante não ir direto ao design do produto, mas garantir que todos entendam como cada departamento vê o cliente) |


### Personagens do usuário

<div style="background-color:branco; preenchimento: 20px">
{{< sereia >}}
gráfico LR

O([Organização de Produto e Engenharia])

subgrafo Comprador
BPM (Gerente de Produto)
BEM (Gerente de Engenharia)
BPD (Designer de Produto)
BFD (desenvolvedores front-end)
BBD (desenvolvedores de back-end)
fim


subgrafo Vendedor
SPM (Gerente de Produto)
SEM (Gerente de Engenharia)
SPD (Designer de Produto)
SFD (desenvolvedores front-end)
SBD (desenvolvedores de back-end)
fim

subgrafo Anunciante
APM (Gerente de Produto)
AEM (Gerente de Engenharia)
APD (Designer de Produto)
AFD (desenvolvedores front-end)
ABD (desenvolvedores de back-end)
fim

Ó -> Comprador
O --> Vendedor
O --> Anunciante


{{< /sereia >}}
</div>

<figcaption align = "center">Exemplos de organização de suas equipes em torno de personas, cada equipe foca nas necessidades de um tipo específico de usuário</it></figcaption>

| Fator | Pontuação |
| ------------ | -------------------------------------------------- ---------------- |
| Completude | ⭐️ ⭐️ ⭐️ |
| Independência | ⭐️ </br> _proporcional à independência de necessidades de cada persona_ |
| Clareza | ⭐️ ⭐️ ⭐️ |
| Equilíbrio | ⭐️ </br> _depende da relevância de cada persona para o negócio_ |


Cada equipe e grupo recebe uma persona e se torna responsável pelas necessidades dessa persona de ponta a ponta. Geralmente utilizado em produtos com múltiplas personas, onde as necessidades das diversas personas são independentes e não entram em conflito entre si (por exemplo, mercado onde existem compradores e vendedores). Esta organização concentra as equipes nas necessidades dos usuários, mas requer forte coordenação entre equipes e grupos para evitar duplicação de esforços, desvio dos princípios de design estabelecidos ou levar o produto em direções diferentes ao mesmo tempo.

| Prós | Contras |
| -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------ | -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------- |
| - Muito centrado no cliente, incentiva as equipes a pensar nas necessidades/resultados do cliente <br/><br/>- Simplifica a pesquisa do usuário, cada equipe pode direcionar entrevistas pelo tipo de pessoa com quem deseja falar e pode se tornar especialista nessa pessoa ao longo do tempo | - Pode puxar o produto em múltiplas direções ao mesmo tempo <br/><br/>- Se as personas tiverem fortes conexões entre elas (por exemplo, duas personas que são compradores) isso levará a conflitos e baixa independência entre equipes e grupos |


## Embrulhar

![Peão solitário olhando para um grupo de peões vermelhos][image-1]

Não existe uma solução única para todos os problemas organizacionais das empresas, indústrias, etc. No entanto, as estratégias acima fornecem algumas formas interessantes de evitar grandes armadilhas.

Por exemplo, se você estiver trabalhando em uma empresa em estágio inicial, pode fazer sentido optar por uma divisão *funcional*. As equipes e os escopos serão extremamente claros e você passará pelos primeiros estágios iniciais de validação do produto com mais rapidez. Da mesma forma, se o seu produto já possui um fluxo de usuários bem definido (*ex. e-commerce com Aquisição, Ativação, Conversão, etc.*), pode ser uma opção focar cada equipe em uma das *etapas no fluxo de clientes*. Isso tornará mais fácil fornecer KPIs e escopos claros para cada equipe e permitirá que você escale facilmente. Se você tiver mais de uma *persona* distinta (pense no tipo comprador-vendedor), poderá otimizar essas duas experiências claramente.

Todas essas estratégias permitem que você se adapte ao seu contexto e evolua a estrutura da sua equipe à medida que o contexto muda (*porque VAI mudar*). Não há respostas claras e as *sugestões* acima são apenas exemplos de como você pode aproveitar algumas estratégias apresentadas aqui.

**A única coisa que você não deve fazer** é tentar misturar alguns desses frameworks dentro da mesma estrutura. Isso gerará confusão, dependências pouco claras e ruído em toda a organização.

No final, independentemente da opção escolhida, à medida que você escala, seu objetivo deve ser sempre garantir que suas equipes não percam o **foco no cliente**, pois isso levará a a) clientes insatisfeitos eb) falha.

> Qualquer organização que projete um sistema (definido de forma ampla) produzirá um design cuja estrutura é uma cópia da estrutura de comunicação da organização.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

[^1]: Redação original da *Lei de Coway*, introduzida em 1967, na [Wikipedia][1].


[1]: https://en.wikipedia.org/wiki/Conway%27s_law

[imagem-1]: img/lonely.jpg