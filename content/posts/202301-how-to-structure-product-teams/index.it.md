---
title: "Come Strutturare i Team di Prodotto"
summary: "Non importa se lavori in una startup, scale-up o in un'organizzazione più grande, in ogni caso il successo di un team di prodotto di solito equivale alla crescita di quel team. Questi cambiamenti portano sfide e opportunità alle organizzazioni. Ecco alcune strategie per organizzare i team di prodotto, cosa ottimizzano e in quale situazione usarle."
categories: ["Prodotto", "Strategia", "Management"]
tags: ["team","organizzazione"]
# externalUrl: ""
date: 2023-01-08
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

> Qualsiasi organizzazione che progetta un sistema (definito in senso ampio) produrrà un design la cui struttura è una copia della struttura di comunicazione dell'organizzazione.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

Non importa se lavori in una startup, scale-up o in un'organizzazione più grande, in ogni caso il successo di un team di prodotto tipicamente equivale alla crescita di quel team. Prima devi assumere più persone, poi dividere il team, ora c'è un gruppo di team da organizzare, e dopo un po' il ciclo alla fine ricomincia. Questi cambiamenti portano sfide e opportunità alle organizzazioni. Ecco alcune strategie per organizzare i team di prodotto, cosa ottimizzano e in quale situazione usarle.

## Per cosa ottimizzare?

Quando si organizzano i team di prodotto è importante considerare i seguenti quattro fattori: **completezza**, **indipendenza**, **chiarezza** e **bilanciamento**. _Spoiler alert:_ Non ho trovato alcun modo per ottimizzarli tutti. Tuttavia, ci sono alcuni pattern chiari su quali di questi fattori contano di più, a seconda della fase in cui si troveranno la tua organizzazione e quei team.

### Completezza
Assicurarsi che i team e i gruppi possiedano un dominio end-to-end. In un dominio completo, i team/gruppi dovrebbero essere in grado di costruire una visione e roadmap chiare basate sul valore. I domini devono essere abbastanza stretti (senza buchi) e abbastanza ampi da portare valore completo nel tempo invece di consegnare solo funzionalità.

### Indipendenza
Muoversi velocemente è uno degli aspetti più essenziali del successo di un team. Assicurarsi che ogni team sia indipendente sul proprio dominio contribuirà molto alla sua capacità di muoversi velocemente e creare valore complessivo. L'indipendenza si raggiunge quando un team può promuovere la sua missione e raggiungere i suoi obiettivi con il team di sviluppo con cui lavora, e con dipendenze minime da altri team. Le dipendenze di prodotto non si limitano ai team di sviluppo e alle dipendenze tecniche. Dipendenze aggiuntive includono altri PM, altri team di delivery come data, UX, design, marketing, e anche stakeholder come legal, compliance e finance.

### Chiarezza
Il dominio dovrebbe essere chiaro per il team interno e gli stakeholder esterni. Questo assicurerà che a) il team sappia qual è la sua funzione core e i suoi obiettivi e b) che sarà più facile allineare gli stakeholder esterni alla stessa visione. Tutti gli artefatti e i documenti del team dovrebbero mirare a trasmettere quella chiarezza, es. il nome del team.

### Bilanciamento
Quando si creano o si dividono domini per team di prodotto, o all'interno di un gruppo di prodotto, è importante assicurarsi che ci sia una distribuzione bilanciata in termini di rilevanza e carico degli argomenti. Altrimenti, i team possono trovarsi in scenari dove un singolo team sta affrontando tutti i problemi più significativi per l'azienda con solo una quantità limitata delle risorse totali disponibili. Il bilanciamento dovrebbe anche assicurare che, in una certa misura, tutti i gruppi e team abbiano un certo livello di rilevanza e impatto; altrimenti, potrebbe essere difficile assumere e motivare i membri del team.



## Strategie

Ecco alcune opzioni su come organizzare i team e come ogni strategia si confronta con i quattro fattori sopra.

### Funzionale
*alias per Prodotti, Funzionalità, Componenti Tecnici*

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

<figcaption align = "center">Esempi di organizzazione funzionale dei tuoi team con 3 team: frontend, backend e platform</figcaption>

| Fattore       | Punteggio                                                          |
| ------------- | ------------------------------------------------------------------ |
| Completezza   | ⭐️  <br/>_alto per startup, cala drasticamente con la scalabilità_ |
| Indipendenza  | ⭐️ ⭐️                                                              |
| Chiarezza     | ⭐️ ⭐️ ⭐️                                                           |
| Bilanciamento | ⭐️ ⭐️                                                              |

Questa struttura divide gruppi e team per moduli funzionali come prodotti, funzionalità, componenti o layer (FE vs. BE). Questa opzione è più adatta per un'azienda in fase iniziale, dove è richiesto un lavoro pesante per consegnare anche le prime release. La visione e la roadmap a questo punto sono tipicamente quelle del prodotto complessivo, e hai principalmente bisogno che le diverse parti lavorino bene insieme verso lo scope già definito. Man mano che le organizzazioni scalano, questa diventa un'opzione negativa perché quando i team crescono e la loro divisione diventa sempre più granulare, questo porta a un aumento drammatico del livello di dipendenze tra i team, e la visione e roadmap di ogni team/gruppo sono limitate, il che risulta in bassa centralità del cliente.

| Pro                                                                                                                                                                                                                           | Contro                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Chiaro quale team dovrebbe gestire feedback/bug specifici <br/><br/>- Meno dipendenze rispetto ad altre opzioni per organizzazioni più piccole <br/><br/>- Facile portare la persona di prodotto giusta a meeting esterni, come una sales call | - Causa confusione quando le funzionalità richiedono aggiornamenti infrastrutturali/architetturali <br/><br/>- Limita visione/strategia/roadmap al livello di modulo, funzionalità o prodotto (non molto customer-centric) <br/><br/>- Richiede molta coordinazione cross-team quando i prodotti sono strettamente integrati o hanno dipendenze di livello inferiore (es. platform) |



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

<figcaption align = "center">Esempi di organizzazione dei tuoi team attorno a una customer journey</figcaption>

| Fattore       | Punteggio    |
| ------------- | ------------ |
| Completezza   | ⭐️ ⭐️ ⭐️     |
| Indipendenza  | ⭐️ ⭐️        |
| Chiarezza     | ⭐️ ⭐️ ⭐️     |
| Bilanciamento | ⭐️ ⭐️        |


In questa struttura, ogni team/gruppo è responsabile per un'intera customer journey, o una fase specifica di quel percorso. Per esempio, in un flusso di acquisto, un team di prodotto può possedere l'acquisizione utenti, un altro l'onboarding, un altro la discovery e un altro il processo di checkout. Questo metodo richiede che ogni fase della customer journey abbia abbastanza sostanza. Spesso ci sono metriche di business importanti che rispecchiano da vicino il successo o fallimento dei clienti nel continuare il loro percorso in quei punti critici, permettendo la delega di responsabilità. Tuttavia, ottimizzare per metriche specifiche in parti del flusso complessivo potrebbe non aiutare le metriche complessive. Questa struttura organizzativa richiede molta coordinazione di design per assicurare un'esperienza cliente coesa attraverso il/i prodotto/i.


| Pro                                                                                                                                                                                                                                                                                                          | Contro                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - L'approccio permette una scalabilità di prodotto efficiente<br/><br/>—il team di growth porta clienti al prodotto mentre altri team migliorano le esperienze di trial e engagement del prodotto. <br/><br/>- Metriche chiare che puoi assegnare a ogni product manager, come conversione da trial gratuito a pagato o retention | - Se i membri del team non capiscono la fase cliente assegnata, potrebbe portare a funzionalità di prodotto inadeguate, e quindi a una scarsa esperienza di prodotto. <br/><br/>- Richiede una governance stretta per assicurare un'esperienza utente consistente e ottima attraverso le fasi della customer journey |


### Definizione del Problema
*Alias Obiettivi, Metriche, Jobs-to-be-Done*

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

<figcaption align = "center">Esempi di organizzazione dei tuoi team attorno a una definizione del problema basata su metriche, in questo caso un sottoinsieme delle metriche AARRR</figcaption>

| Fattore       | Punteggio    |
| ------------- | ------------ |
| Completezza   | ⭐️ ⭐️ ⭐️     |
| Indipendenza  | ⭐️ ⭐️        |
| Chiarezza     | ⭐️ ⭐️        |
| Bilanciamento | ⭐️ ⭐️ ⭐️     |

In questo metodo, ogni team e gruppo è responsabile per una definizione del problema, che può essere tradotta in un obiettivo, metriche e jobs-to-be-done. I team possono quindi toccare qualsiasi funzionalità che credono risolverà quel problema. Il principale beneficio di questo approccio è spingere la responsabilità verso i singoli product manager. Può risultare in più team che vogliono (o devono) lavorare sugli stessi componenti di prodotto contemporaneamente, e quindi nessuno si sente proprietario di quelle cose. Questa è una buona scelta per aziende con key performance indicator (KPI) di prodotto ben consolidati che catturano risultati per clienti e business. La differenza dal metodo precedente è che le preoccupazioni complessive attraverso diversi team non sono necessariamente parte di un singolo flusso utente.

| Pro                                                                                                                                                                                                                                  | Contro                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Il cliente è sempre al centro del tuo pensiero di prodotto <br/><br/>- Facile assegnare obiettivi ai team e poi misurare il successo del prodotto <br/><br/>- Facile delegare il processo decisionale e la responsabilità tra i product manager | - Richiede un set stabile di KPI che non cambino spesso <br/><br/>- Richiede coordinazione della roadmap cross-team poiché i singoli team potrebbero dover toccare molte aree di prodotto per raggiungere gli obiettivi <br/><br/>- Ci vuole tempo per entrare nella testa dei clienti (Ecco perché è importante non saltare subito nel design del prodotto, ma assicurarsi che tutti capiscano come ogni dipartimento vede il cliente) |


### Personas Utente

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

<figcaption align = "center">Esempi di organizzazione dei tuoi team attorno alle personas, ogni team si concentra sui bisogni di un tipo specifico di utente</figcaption>

| Fattore       | Punteggio                                                                     |
| ------------- | ----------------------------------------------------------------------------- |
| Completezza   | ⭐️ ⭐️ ⭐️                                                                      |
| Indipendenza  | ⭐️  </br> _proporzionale all'indipendenza dei bisogni di ogni persona_        |
| Chiarezza     | ⭐️ ⭐️ ⭐️                                                                      |
| Bilanciamento | ⭐️  </br> _dipende dalla rilevanza di ogni persona per il business_           |


Ogni team e gruppo viene assegnato a una persona e diventa responsabile per i bisogni di quella persona end-to-end. Solitamente usato in prodotti con multiple personas, dove i bisogni delle varie personas sono indipendenti e non entrano in conflitto tra loro (es. marketplace dove ci sono acquirenti e venditori). Questa organizzazione focalizza i team sui bisogni degli utenti, ma richiede una forte coordinazione tra team e gruppi per evitare di duplicare gli sforzi, deviare dai principi di design stabiliti o portare il prodotto in direzioni diverse contemporaneamente.

| Pro                                                                                                                                                                                                                                                        | Contro                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Molto customer-centric, incoraggia i team a pensare ai bisogni/risultati del cliente <br/><br/>- Semplifica la ricerca utente, ogni team può targetizzare le interviste per tipo di persona con cui vuole parlare e può diventare esperto di quella persona nel tempo | - Può tirare il prodotto in più direzioni contemporaneamente <br/><br/>- Se le personas hanno forti connessioni tra loro (es. due personas che sono entrambe acquirenti) porterà a scontri e bassa indipendenza tra team e gruppi |


## Conclusione

![Pedone solitario che guarda un gruppo di pedoni rossi](/posts/202301-how-to-structure-product-teams/img/lonely.webp)

Non c'è una singola soluzione per tutti i problemi organizzativi attraverso aziende, industrie, ecc. Tuttavia, le strategie sopra forniscono alcuni modi interessanti per evitare grandi insidie.

Come esempio, se stai lavorando in un'azienda in fase iniziale, potrebbe avere senso andare con una divisione *funzionale*. Team e scope saranno cristallini, e ti porterà attraverso le prime fasi di validazione del prodotto più velocemente. Allo stesso modo, se il tuo prodotto ha già un flusso utente ben definito (*es. e-commerce con Acquisition, Activation, Conversion, ecc.*), potrebbe essere un'opzione focalizzare ogni team attorno a una delle *fasi nel flusso cliente*. Questo renderà più facile fornire KPI e scope chiari per ogni team, e ti permetterà di scalare facilmente. Se hai più di una *persona* distinta (pensa al tipo acquirente-venditore), puoi ottimizzare quelle due esperienze chiaramente.

Tutte queste strategie ti permettono di adattarti al tuo contesto, e far evolvere la struttura del tuo team mentre quel contesto cambia (*perché cambierà*). Non ci sono risposte chiare, e i *suggerimenti* sopra sono semplicemente esempi di come puoi sfruttare alcune strategie presentate qui.

**L'unica cosa che non dovresti fare** è provare a mescolare alcuni di questi framework all'interno della stessa struttura. Questo genererà confusione, dipendenze poco chiare e rumore nella tua organizzazione.

Alla fine, indipendentemente da quale opzione scegli, mentre scali, il tuo obiettivo dovrebbe sempre essere assicurarti che i tuoi team non perdano il loro **focus sul cliente** perché questo porterà a a) clienti insoddisfatti e b) fallimento.

> Qualsiasi organizzazione che progetta un sistema (definito in senso ampio) produrrà un design la cui struttura è una copia della struttura di comunicazione dell'organizzazione.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

[^1]:	Formulazione originale della *Legge di Conway*, introdotta nel 1967, da [Wikipedia][1].


[1]:	https://en.wikipedia.org/wiki/Conway%27s_law
