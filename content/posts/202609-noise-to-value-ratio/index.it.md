---
title: "Il rapporto rumore-valore: quando l'output dell'AI supera l'attenzione umana"
summary: "L'AI ha reso quasi gratuito produrre messaggi, documenti e codice. L'attenzione umana è rimasta esattamente dov'era. Come provo ad abbassare il rapporto rumore-valore come lettore, come produttore e come parte di un team."
description: "L'AI ha reso quasi gratuito produrre documenti e codice, ma l'attenzione umana non scala. Come abbassare il rapporto rumore-valore da lettore, produttore e team."
categories: ["AI", "Meta"]
tags: ["ai", "attenzione", "produttività", "agenti", "sovraccarico informativo", "product management"]
date: 2026-09-20
alt: "Una persona alla scrivania separa una pagina luminosa e utile da un torrente di messaggi, documenti e codice generati dalle macchine."
---

Quando ho iniziato a usare Slack per lavoro, mi sono accorto di quanta parte della mia giornata se ne andava a decidere cosa ignorare.

La comunicazione era diventata un processo in background a tempo pieno. Messaggi su Slack, thread, reazioni, email, documenti condivisi e riunioni su Zoom rendevano più facile raggiungere le persone. Creavano anche più posti da controllare, più conversazioni da seguire e più decisioni che arrivavano nel corso della giornata.

A volte sembrava di lavorare in un ufficio dove, ogni dieci minuti, qualcuno si alzava e gridava qualcosa a tutti gli altri. Ogni interruzione poteva essere utile a qualcuno. Tutti gli altri dovevano comunque spendere un po' di attenzione per capire se li riguardava.

L'AI generativa non ha creato quel rumore. Lo ha industrializzato.

Negli ultimi due anni, il costo di produrre un messaggio, un documento, una presentazione o un pezzo di codice plausibile è crollato. Aggiungiamo ora gli agenti, che possono elaborare informazioni e generare nuovi artefatti mentre nessuno guarda. Ogni persona può produrre di più, ogni team può chiedere di più, e ogni sistema può riportare di più.

La nostra capacità di prestare attenzione non è cambiata affatto. Herbert Simon ne aveva intuito la forma già nel 1971: [una ricchezza di informazioni crea una povertà di attenzione](https://en.wikipedia.org/wiki/Attention_economy).

## Dal rapporto segnale-rumore al rapporto rumore-valore

Di solito lo descriviamo come un problema di [rapporto segnale-rumore](https://en.wikipedia.org/wiki/Signal-to-noise_ratio). Così però sfugge qualcosa di importante.

Un messaggio può essere pertinente, ben scritto, indirizzato a me, e non avere comunque alcun valore. Un documento può essere accurato e curato senza cambiare una sola decisione. Il codice può funzionare ed essere comunque la cosa sbagliata da aggiungere a un prodotto.

Il segnale è ciò che sembra pertinente. Il valore è ciò che cambia quello che capisco, decido o faccio.

Una volta le due cose erano più vicine. Scrivere un documento ragionato richiedeva tempo, quindi lo sforzo che c'era dietro era almeno un indizio che contasse qualcosa. Quel filtro non è mai stato perfetto, ma esisteva. Oggi per produrre qualcosa di curato può bastare un prompt. Può contenere valore vero, o nessuno. L'apparenza dello sforzo non mi dice più granché sul valore che c'è sotto.

Quindi la misura che mi interessa è un rapporto rumore-valore: quanta roba una persona deve attraversare per ogni cosa che cambia quello che capisce, decide o fa. L'AI fa crescere il primo numero gratis. Il secondo dipende dal giudizio umano, che non è diventato più veloce.

Il collo di bottiglia si è spostato dalla produzione al consumo. Possiamo generare più di quanto chiunque riesca a rivedere in modo responsabile.

{{< inlinesvg src="attention-gate.svg" alt="Diagramma animato: un flusso denso di punti grigi scorre verso un muro con una sola fessura stretta davanti a una persona. Passano solo i pochi punti allineati con la fessura. Dei quattro punti luminosi nel flusso, uno raggiunge la persona e tre restano bloccati contro il muro insieme a tutti gli altri." caption="Produrre è quasi gratis. La fessura è l'attenzione, e non si è allargata. Una parte di ciò che resta bloccato dietro il muro è proprio quella di valore." >}}

## Due modi per abbassare il rapporto

Una risposta è rallentare. Nessun team che voglia restare competitivo lo farà.

L'altra è lavorare su entrambi i lati del rapporto: diventare più bravo a trovare il valore in ciò che mi arriva, ed essere intenzionale su ciò che aggiungo per tutti gli altri.

Entrambe le cose contano soprattutto dove le persone decidono insieme cosa costruire, come affrontarlo e perché. Quelle decisioni poggiano su cose che un modello non ha. Non è mai stato infastidito da un'interfaccia. Se quella conversazione si riempie di materiale generato, le voci umane al suo interno diventano più difficili da sentire, e sono il motivo per cui la conversazione esiste.

{{< inlinesvg src="human-voices.svg" alt="Diagramma animato: tre persone collegate a triangolo si scambiano messaggi mentre una deriva costante di punti grigi attraversa la loro conversazione." caption="La conversazione tra persone è il canale stretto. Tutto ciò che viene generato le fa concorrenza." >}}

## Il discreto è più difficile da filtrare del pessimo

Il materiale difficile non è quello palesemente rotto. Lo spam è facile da scartare. Un brutto documento si riconosce da solo. Gran parte del nuovo output è discreta: coerente, abbastanza pertinente e impaginata in modo professionale.

Anche il lavoro discreto consuma attenzione. Qualcuno deve leggere il documento, rivedere la pull request, controllare il riassunto o decidere se la raccomandazione conta. Il costo di produzione è sparito, ma il costo di revisione si è spostato su qualcun altro. Alcuni ricercatori, scrivendo su Harvard Business Review, gli hanno dato un nome, [workslop](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity): lavoro generato dall'AI che sembra finito e lascia la fatica vera a chi lo riceve.

Vedo lo stesso effetto con [i miei agenti](/it/posts/202609-an-organization-of-three/#gestire-gli-assistenti). Un aggiornamento di stato può essere corretto e non dirmi comunque nulla che mi serva sapere. Un compito completato può creare un altro documento da rivedere. Una notifica pensata per dimostrare che è stato fatto del lavoro utile può diventare a sua volta altro lavoro.

Il fallimento tipico è più silenzioso dell'annegare: scorrere tutto di fretta, cambiare contesto di continuo e non dare a niente l'attenzione che merita.

## Da lettore: proteggere l'attenzione, poi lasciare che l'AI la ordini

Parto da qualcosa che con l'AI non ha niente a che fare. Blocco del tempo per il [deep work](https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/). Tutto ciò che richiede comprensione, invenzione o una decisione difficile ha bisogno di spazio, senza un flusso in diretta che scorre accanto.

I messaggi continuano ad accumularsi, e io li smaltisco a blocchi. Leggere venti aggiornamenti in una volta costa molto meno che essere interrotto venti volte, anche se il volume è identico. Una [ricerca sul lavoro interrotto](https://ics.uci.edu/~gmark/chi08-mark.pdf) ha mostrato che le persone compensano lavorando più in fretta, e lo pagano in stress e frustrazione.

L'AI è parte della causa, ma è anche l'unico modo pratico che ho trovato per smaltire una parte del volume che ne deriva.

Al lavoro, l'AI può aiutare a individuare i messaggi che potrebbero richiedere un'azione. Quelli li leggo per primi. Tutto il resto lo scorro comunque, perché essere consapevoli di ciò che succede va oltre una lista di cose da fare. Il contesto, i segnali deboli e ogni tanto la cosa che il filtro ha frainteso contano ancora.

Uso l'AI per ordinare la mia attenzione, non per cederla. Il filtro impara cosa tende a contare, ma di ciò che mi sfugge resto responsabile io.

Per il lavoro ripetibile, vado volentieri oltre. Se una cosa funziona come un orologio, va automatizzata. Se il processo è noto, gli input sono chiari e gli errori costano poco da individuare o da annullare, la delega completa può bastare.

Tutto ciò che sta fuori da quella categoria richiede giudizio.

## Da produttore: lavoro ponderato invece di output usa e getta

L'altro lato del rapporto è ciò che ci aggiungo io. Usare l'AI per un lavoro che richiede giudizio non significa chiedere una risposta e accettarla.

Quando la uso per scrivere un documento corposo, parto decidendo cosa voglio dire. Definisco la struttura, fornisco il contesto rilevante e spiego l'obiettivo. Poi genero una sezione, la modifico a mano, la metto in discussione, aggiungo il contesto che manca e ripeto.

Lo stesso vale per il codice. Un agente può produrre un'implementazione in fretta, ma tocca ancora a me decidere se la funzionalità debba esistere, se l'approccio abbia senso nel sistema e se il risultato sia manutenibile. I test che passano rispondono solo a una parte di queste domande.

Sapere se una cosa l'ha scritta un'AI o una persona mi dice poco. Conta se è output usa e getta o lavoro ponderato, e l'output usa e getta è da dove arriva la maggior parte del rumore.

L'AI può partecipare al lavoro ponderato. Può mettere in dubbio, abbozzare, confrontare e rivedere a una velocità che io non posso eguagliare. Ma il valore nasce dal ciclo: struttura, contesto, generazione, revisione, modifiche a mano e un altro giro. La mia testa va nelle parti che non funzionano come un orologio.

## Mandare meno cose alle persone

C'è una trappola evidente nell'usare l'AI per riassumere tutto il materiale che l'AI ci ha aiutato a creare. Un filtro migliore può rendere il volume sopportabile senza chiedersi perché quel volume esista.

L'output totale può continuare a crescere. Quello che deve ridursi è la quota indirizzata alle persone. Non ogni aggiornamento va inviato. Non ogni idea ha bisogno di un documento. Non ogni pezzo di codice funzionante deve diventare una funzionalità. Prima di chiedere all'AI di riassumere un artefatto, vale la pena chiedersi se quell'artefatto dovesse esistere.

Chi produce dovrebbe farsi carico di una parte del costo del consumo. Qualsiasi cosa venga passata a un'altra persona, da una persona o da un agente, dovrebbe dire cosa è cambiato, perché conta e quale decisione serve. Se non so rispondere a queste tre domande, l'artefatto probabilmente non è pronto per essere inviato, e forse non ha bisogno di esistere. I miei agenti ora lavorano con la stessa regola: il monitoraggio di routine resta in silenzio quando non c'è niente su cui agire. A volte l'aggiornamento giusto è il silenzio.

## I team hanno adottato gli strumenti e si sono tenuti il processo

Gran parte del modo in cui lavorano i team di prodotto è stata progettata quando produrre le cose costava caro. Una specifica richiedeva una settimana di scrittura, quindi di specifiche da rivedere ne arrivavano poche. Un prototipo richiedeva uno sprint, quindi prima si discuteva se costruirlo. Il costo faceva da limite di velocità, e il processo ci faceva affidamento.

Quel limite non c'è più. Tutti possono generare un documento e tutti possono generare codice, ma la riunione di revisione, la catena di approvazione e il numero di persone che possono prendere la decisione sono gli stessi di prima. Abbiamo adottato gli strumenti e ci siamo tenuti l'organizzazione.

{{< inlinesvg src="rate-limit.svg" alt="Diagramma animato con due corsie. Nella corsia in alto una persona produce un documento alla volta, che viaggia verso un revisore. Nella corsia in basso una persona con un assistente AI produce documenti in rapida successione, e questi si accumulano davanti allo stesso unico revisore." caption="Quando produrre costava caro, il costo era il limite di velocità. Il revisore a destra è lo stesso in entrambe le corsie." >}}

La nuova struttura non l'ho ancora capita. Penso che cominci dal trattare l'attenzione di chi decide come il budget attorno a cui si pianifica tutto il resto: meno artefatti indirizzati alle persone, gruppi più piccoli a prendere le decisioni, e una risposta chiara su chi deve vedere cosa.

L'attenzione è ormai il limite vero. I team che se la caveranno bene saranno quelli che proteggono abbastanza giudizio da trovare il valore dentro il volume.

Niente di tutto questo è un argomento a favore o contro l'AI. La uso ogni giorno per pensare, creare e farmi strada nel rumore. Ma le decisioni che contano le prendono ancora persone che si parlano, con un'attenzione finita e un giudizio che richiede tempo. Voglio che questi strumenti facciano spazio a quella conversazione, così da essere presenti per le parti che contano.
