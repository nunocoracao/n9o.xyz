---
title: "30 Giorni di Vibe Coding - Giorno 15 - MyBrute Arena"
description: "Un auto-battler di combattimento medievale ispirato al classico MyBrute, con creazione del personaggio, combattimenti animati, animali, armi, tornei e un sistema di prestigio."
summary: "Un auto-battler di combattimento medievale ispirato al classico MyBrute, con creazione del personaggio, combattimenti animati, animali, armi, tornei e un sistema di prestigio."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-15", "game", "auto-battler", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 15
seriesOpened: false
date: 2026-04-20
draft: false
#type: "hidden"
---

Giorno 15. Volevo ricostruire qualcosa che amavo da adolescente. MyBrute era questo semplice gioco browser dove creavi un piccolo combattente, sfidavi i combattenti degli altri e guardavi le battaglie svolgersi automaticamente. Nessuna strategia durante il combattimento stesso, solo costruire il tuo personaggio e vedere cosa succede. Era avvincente in un modo che non aveva senso per quanto poco facevi realmente. Il candidato perfetto per un build di un giorno.

## Il Prompt

> "Costruisci un gioco di combattimento browser ispirato a MyBrute. Creazione del personaggio con personalizzazione visiva, auto-combattimento a turni con animazioni, armi e animali che raccogli dalle vittorie, XP e livellamento, tornei, combattimenti con boss e un sistema di prestigio."

{{< alert icon="fire">}}
Prova il gioco tu stesso [qui](https://vibe30-day15-mybrute.vercel.app)
{{< /alert >}}

## Come è stato costruito

Watchfire ha diviso questo in 27 task. È il numero più alto di task di qualsiasi progetto finora, e ha senso. Questa cosa ha un sacco di sistemi che devono tutti comunicare tra loro: matematica di combattimento, curve di XP, tabelle di loot, comportamento degli animali, bonus di prestigio, tabelloni dei tornei, sfide giornaliere, tracciamento dei rivali, achievements, replay.

Il build è iniziato con il motore di combattimento base e la creazione del personaggio, poi ha aggiunto i sistemi uno alla volta. Il design del personaggio è passato attraverso diverse iterazioni. Ho provato lo stile chibi, poi un look ispirato a Hollow Knight, poi qualcosa con mantelli fluenti. Alla fine sono arrivato a queste piccole figure incappucciate che si leggono bene alla scala in cui vengono renderizzate. Trovare lo stile artistico giusto per i personaggi ha bruciato più task di Watchfire di quanto vorrei ammettere, ma il risultato finale ha un bel feeling medievale scuro.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Cosa ho ottenuto

**La creazione del personaggio è profonda.** Scegli un nome, poi personalizzi il colore della pelle, lo stile e il colore dei capelli, il tipo di corpo, il colore degli occhi, gli accessori (cicatrici, pittura di guerra, bende sull'occhio, maschere, corna) e il colore dell'outfit. L'anteprima si aggiorna in tempo reale sul lato destro. Sono tante opzioni per un progetto di un giorno.

![Creazione del personaggio con anteprima](images/screenshot-02.png)

![Personalizzazione di un brute chiamato Ragnar](images/screenshot-03.png)

**Lo schermo hub è la tua base.** Mostra le statistiche del tuo brute, il livello, la barra XP, l'arma equipaggiata, gli animali raccolti, le abilità apprese e tutti i pulsanti di azione. Combatti, Allenamento, Inventario, Esporta, Importa, Hall of Fame. C'è anche una sfida giornaliera direttamente sull'hub con un bonus XP x2 per accettarla.

![Hub del personaggio](images/screenshot-04.png)

**La selezione dell'avversario ti dà delle scelte.** Hai tre avversari tra cui scegliere, ognuno mostra il suo livello, le sue statistiche e il suo equipaggiamento. Il gioco scala gli avversari al tuo livello così i combattimenti restano competitivi.

![Scegli il tuo avversario](images/screenshot-05.png)

**Il combattimento è completamente animato.** Due personaggi si affrontano in un'arena con pilastri, torce e stendardi rossi. Barre della vita in alto, numeri dei danni che fluttuano, effetti di taglio sui colpi. Un registro di combattimento in basso narra ogni azione. Premi solo "Avanti" per avanzare ad ogni turno. È auto-combattimento ma guardi tutto svolgersi passo dopo passo.

![Combattimento nell'arena](images/screenshot-06.png)

![Battaglia nella sala del trono](images/screenshot-01.png)

**La vittoria ti dà XP e loot.** La schermata dei risultati mostra gli XP guadagnati con una barra di progresso animata. Vinci abbastanza combattimenti e sali di livello, sbloccando bonus alle statistiche e nuovo equipaggiamento.

![Schermata di vittoria](images/screenshot-07.png)

**Il sistema di inventario è sorprendentemente robusto.** Tre schede per armi, animali e abilità. Le armi hanno livelli di rarità (da comune a leggendario, con bordi colorati). Gli animali hanno le loro statistiche. Le abilità sono capacità passive e attive che sblocchi man mano che le raccogli. L'insieme dà davvero l'impressione di un inventario RPG completo.

![Inventario armi](images/screenshot-09.png)

![Collezione animali](images/screenshot-10.png)

![Lista abilità](images/screenshot-11.png)

**La modalità allenamento ti permette di grindare.** Premi il pulsante Allenamento e il tuo brute auto-combatte 100 battaglie. Ricevi una schermata riepilogativa che mostra il totale di XP guadagnati, i livelli saliti, le vittorie e ogni pezzo di loot raccolto. È un bel modo per avanzare velocemente nella fase iniziale del gioco senza cliccare su ogni combattimento.

![Risultati dell'allenamento](images/screenshot-08.png)

**I tornei funzionano a eliminazione diretta.** Quattro round, difficoltà crescente. L'interfaccia del tabellone mostra il tuo progresso in ogni round, il tuo prossimo avversario e un pulsante di combattimento ben visibile. Vinci tutto e ricevi ricompense premium.

![Tabellone del torneo](images/screenshot-12.png)

## I Report dei Bug

Le iterazioni sul redesign dei personaggi sono state il più grande spreco di tempo. I primi stili di personaggio stavano bene da soli ma non si leggevano bene nell'arena alla scala di combattimento. Le figure incappucciate finali funzionano, ma ci sono voluti diversi andirivieni per arrivarci. Questo è uno di quei casi dove la direzione artistica con l'IA è più difficile di quanto sembri. Puoi descrivere quello che vuoi, ma "fallo sembrare bello a 80 pixel di altezza in un'arena scura" è un prompt più complicato di quanto si creda.

Il bilanciamento del combattimento è approssimativo come ci si aspetterebbe da un RPG auto-generato. Alcune combinazioni di armi sono chiaramente troppo potenti, alcuni animali sono nettamente migliori di altri. Ma per un gioco dove il punto è guardare il caos casuale svolgersi, lo squilibrio quasi aggiunge al divertimento.

## I Numeri

- **27 task di Watchfire** dal motore di combattimento al sistema di prestigio
- **Diversi redesign del personaggio** provando gli stili chibi, Hollow Knight e mantelli fluenti
- **4 ambienti arena** inclusa una sala del trono
- **3 categorie di inventario** con loot a livelli di rarità
- **100 auto-combattimenti** per sessione di allenamento
- **20 slot di replay** per rivedere le battaglie passate

## Provalo

{{< github repo="nunocoracao/Vibe30-day15-mybrute" showThumbnail=true >}}

**[Entra nell'Arena](https://vibe30-day15-mybrute.vercel.app)**

Crea un brute, scegli un combattimento e vedi fin dove riesci ad arrivare.

## Verdetto del Giorno 15

27 task sono tante, e il numero di sistemi interconnessi (combattimento, XP, loot, animali, abilità, tornei, sfide giornaliere, rivali, prestigio, replay, achievements) è il tipo di cosa che normalmente richiederebbe a un piccolo team un paio di settimane per assemblare. Il fatto che tutto funzioni e che sia davvero divertente da giocare è un po' assurdo.

Il percorso del design dei personaggi è stato la parte più interessante. Sono passato attraverso almeno quattro stili visivi distinti prima di trovarne uno che funzionasse. È un buon promemoria che il coding assistito dall'IA gestisce benissimo la logica e i sistemi, ma la direzione artistica richiede ancora un occhio umano e tanta iterazione. Non puoi semplicemente dire "rendilo figo" e andartene.

A metà strada. I giochi diventano sempre più complessi, ma il workflow si sta affinando. So quando spingere per più funzionalità e quando dichiarare che è finito. Quell'istinto potrebbe essere la cosa più preziosa che ho acquisito da questa challenge.

---

*Questo è il giorno 15 di [30 Giorni di Vibe Coding](/series/30-days-of-vibe-coding/). Segui l'avventura mentre pubblico 30 progetti in 30 giorni usando il coding assistito dall'IA.*
