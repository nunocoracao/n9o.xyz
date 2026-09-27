---
title: "Netflix ci ha insegnato il binge. Queste app lo vendono al minuto."
summary: "Una pubblicità su Instagram per un nessuno segretamente onnipotente mi ha portato a una landing page usa e getta, a un'app con 100 milioni di installazioni, a una società in un edificio industriale di Hong Kong e a un pass settimanale che, dicono gli utenti, non si riesce a disdire. Ho seguito i soldi."
description: "Cosa vende davvero una pubblicità di vertical drama: il funnel, l'economia delle monete, le società dietro ShortMax, ReelShort e DramaBox, e se tutto questo sia slop generato dall'AI."
categories: ["Tech", "Media", "Business"]
tags: ["media", "mobile", "pubblicità", "microdrama", "ai", "inchiesta"]
date: 2026-09-27
---

Per una settimana, Instagram ha insistito perché conoscessi Nate Ryder.

Nate è povero. Tutti lo odiano. Un ragazzo più ricco ha rovinato la sua famiglia. C'è un torneo nazionale in arrivo. Per fortuna, Nate è anche, in segreto, un dio del tuono di rango SSS, che sembra un'informazione utile che avrebbe potuto menzionare prima.

Proprio mentre sta per rivelarsi, la pubblicità si ferma.

La serie si chiama *SSS-Rank: The Slum-Born Thunder God*. Non perde tempo con le ambiguità. I suoi cattivi hanno scelto l'umiliazione pubblica come carriera a tempo pieno, il suo eroe è a un pugno luminoso dalla vendetta, e il pulsante sotto il video offre l'unica cosa che adesso voglio: il minuto successivo.

La qualità dell'insieme era pessima. La recitazione, la scrittura, l'illuminazione, il suono, il montaggio, il ritmo, il labiale, le inquadrature della folla, le mani, i volti che cambiano tra un'inquadratura e l'altra, il testo sullo schermo: tutto era sbagliato. Era anche avvincente. Era slop generato dall'AI con un gancio, e volevo vedere cosa succedeva dopo.

Non ho premuto il pulsante. Ho aperto il codice sorgente della pagina.

Date la colpa alla [mia carriera](/about/). Ne ho passato i primi sei o sette anni lavorando in TV e streaming, e non ho mai perso l'abitudine di osservare cosa fanno i grandi: Netflix, Amazon Prime Video, HBO e gli altri. Gli ultimi due anni sono stati affascinanti da seguire. Questo era diverso. Non l'AI, che mi aspettavo, ma quanta macchina ci fosse dietro un solo brutto minuto di video.

Quindi ecco cosa stavo guardando, dove porta il pulsante e chi viene pagato. Quello che ho trovato è una macchina molto vecchia vestita con abiti nuovi, e un primo sguardo a cosa diventano le storie quando l'unica domanda rimasta è se pagherai.

## Cosa stavo guardando

Togliete i fulmini e quello che resta è il manuale di Netflix.

Netflix ha passato un decennio a insegnarci il binge. Ha [dichiarato il binge watching "la nuova normalità"](https://www.prnewswire.com/news-releases/netflix-declares-binge-watching-is-the-new-normal-235713431.html) già nel 2013, e ha costruito il prodotto attorno a quell'idea: ogni episodio finisce con un gancio, così il conto alla rovescia dell'autoplay vince e sei ore spariscono in un martedì. La pubblicità del dio del tuono è quell'idea ridotta all'osso. Non c'è una stagione da finire. C'è un minuto, un'ingiustizia, un gancio, e poi un lucchetto.

Ogni episodio fa avanzare la storia di esattamente un'unità emotiva:

- insulto;
- inquadratura di reazione;
- prova che l'eroe potrebbe essere speciale;
- nessuno crede alla prova;
- qualcuno alza la posta;
- stacco sul lucchetto.

La storia esiste per fabbricare un solo sentimento, in fretta: questa persona subisce un torto, e tu vuoi vederlo corretto. La [sinossi ufficiale](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605) fa il suo lavoro in quattro frasi. Nate è "liquidato come un fallito senza valore". La salute di suo padre è stata "distrutta dal vendere sangue per un siero" che un "bullo privilegiato" ha poi distrutto. Il bullo "si aspetta di umiliarlo davanti a migliaia di persone". Invece, Nate "sconvolge il mondo, e inizia la sua ascesa inarrestabile". Una caratterizzazione sottile non farebbe che rallentare la transazione.

Il poster è l'indizio più chiaro.

{{< figure src="poster.webp" alt="Poster di SSS-Rank: The Slum-Born Thunder God. Un giovane è accovacciato in un ring di pugilato con fulmini blu attorno ai pugni. Dietro di lui ci sono tre donne bionde quasi identiche e un uomo accigliato con la felpa col cappuccio. Il titolo è impresso nel pavimento in lettere di metallo." caption="Il poster di [*SSS-Rank: The Slum-Born Thunder God*](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605), come servito dal server delle campagne di ShortMax. Caricato il 18 agosto 2026." >}}

Tre donne bionde quasi identiche in un ring di pugilato, pelle senza pori, luce senza sorgente, e un titolo impresso nel pavimento in metallo. La pagina della serie accredita un "Creator: Grace Whitman" e nessun altro. Nessun cast, nessun regista, nessuno studio. Sessantuno episodi, e non un solo nome umano che si possa verificare.

La storia non è il prodotto. La storia è l'esca, e il prodotto è il minuto successivo. Netflix ha eliminato l'attesa tra un episodio e l'altro. Questo elimina tutto il resto: la sceneggiatura, la recitazione, il gusto, i valori di produzione, i nomi umani. Quello che resta è una macchina per farti desiderare di vedere cosa succede dopo, e l'arte del raccontare storie sostituita da una transazione da casinò.

## Cosa succede dopo

Il link della pubblicità porta a [`storyreel.life`](https://w2a.storyreel.life/v6/2/fb02.html?shorttv_adid=288123&language=en), con il marchio **StoryReel**. Sembra un sito di streaming: il poster, la sinossi, un pulsante arancione pulsante con scritto "Continue Watch" e una piccola mano animata che lo indica.

Non è un sito di streaming. StoryReel non ospita un solo video. Il suo codice fa quattro cose che contano.

1. Recupera poster, titolo e sinossi da un server delle campagne di **ShortMax**, indicizzato dall'ID della pubblicità nell'URL.
2. Fa il fingerprinting del tuo browser, ricava il tuo indirizzo IP e segnala che sei arrivato, insieme al click ID che Meta ha attaccato al link.
3. Quando tocchi un punto qualsiasi della pagina (il pulsante è decorativo; l'intera pagina è il pulsante), copia negli appunti un codice nascosto con l'ID dell'episodio.
4. Prova ad aprire l'app ShortMax con un link `shorttv://`. Se l'app non è installata, ti manda all'[App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) o a [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps). Il codice negli appunti serve perché l'app possa leggerlo dopo l'installazione e portarti direttamente all'episodio che stavi guardando.

Quest'ultimo trucco è il motivo per cui il funnel non ti perde tra la pubblicità e l'app. È anche il motivo per cui la pagina non mi ha mai chiesto nulla. Nessun account, nessun prezzo, nessuna condizione. Tutto questo aspetta dentro l'app, dopo che il gancio ha fatto il suo lavoro.

{{< inlinesvg src="funnel.svg" alt="Diagramma animato di due anelli uniti in un nodo condiviso. A sinistra, uno spettatore passa da una pubblicità nel feed agli episodi gratuiti, a un cliffhanger, all'installazione dell'app, e di nuovo da capo. A destra, il denaro passa dal cliffhanger alle monete o a un pass, all'acquisto di altre pubblicità, e di nuovo agli episodi gratuiti." caption="Due anelli che condividono un cliffhanger. Lo spettatore gira in quello di sinistra. Il denaro gira in quello di destra. Nessuno dei due ha un'uscita prevista." >}}

La serie in sé vive sul sito di ShortMax come [drama 32605](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605), con 61 episodi. Il [server delle campagne](https://prod-api.storyreel.life/prod-api/16/app/hiCampaignLink/getConfig?adId=288123&pageType=1&ver=001) riporta 6.076.623 riproduzioni. Il file del poster è datato 18 agosto 2026, cinque settimane prima che arrivasse nel mio feed.

Ho dovuto pagare? Non ancora. Una volta trovata la serie sul sito di ShortMax, mi ha offerto i primi cinque episodi gratis. Tutto ciò che viene dopo richiede l'app. Non ne ho guardato nessuno e non ho installato niente, quindi i prezzi vengono dalla [scheda dello store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) e non dal paywall stesso. La scheda mostra cosa ti aspetta: pacchetti di monete da $3.49 a $24.99, e un "Weekly Pass Pro" a $9.99 o $19.99. Venti dollari a settimana non è un refuso. Un recensore sulla scheda nota che gli episodi costano fino a 60 monete ciascuno, e che "vedi l'importo solo quando hai finito le monete e l'app vuole che ne compri altre".

L'app è classificata 18+ e, secondo il riepilogo sulla privacy di Apple, usa gli identificatori del tuo dispositivo per tracciarti nelle app di altre società. La pagina mi aveva già fatto il fingerprinting prima che arrivassi a quel punto.

## Chi li produce

La categoria si chiama **microdrama**, **short drama** o **vertical drama**: fiction sceneggiata fatta per un telefono tenuto in verticale, in episodi che durano circa un minuto. Non è piccola.

Nel primo trimestre del 2026, [Sensor Tower stimava](https://sensortower.com/blog/state-of-short-drama-apps-2026-report) che le app di short drama avessero superato **850 milioni di download in tre mesi**, con una crescita del 140% su base annua. I ricavi da acquisti in-app hanno raggiunto circa **$750 milioni nel trimestre**, ovvero **$3 miliardi l'anno** a quel ritmo. Sei app di short drama erano tra le prime 40 app al mondo per download. Ad aprile le persone ci passavano in media 25 minuti al giorno. L'episodio dura un minuto. L'abitudine no.

Quelle cifre sono stime dell'attività su App Store e Google Play. Escludono i ricavi pubblicitari e gli store Android di terze parti, quindi il numero reale è più grande.

Tre società mostrano tre versioni della stessa esportazione.

**ReelShort** appartiene a [Crazy Maple Studio](https://www.crazymaplestudios.com/), fondata a San Francisco nel 2016, che è a sua volta una controllata di [COL Group](https://restofworld.org/2023/what-is-reelshort/), una società cinese di letteratura web. Quella genealogia conta: non sono arrivati allo short drama rimpicciolendo la televisione. Sono arrivati dalla narrativa web a puntate, che sapeva già come far pagare la gente per capitolo. [TechCrunch ha colto la macchina in accelerazione](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/) nel novembre 2023: $22 milioni di ricavi netti dal lancio, un sabato con 326.000 installazioni e $459.000 di ricavi, e circa 8.100 pubblicità in corso contemporaneamente su Meta negli Stati Uniti. Nel primo trimestre del 2026 Sensor Tower la stimava vicina ai $140 milioni di ricavi in-app nel trimestre.

**DramaBox** è venduta da [StoryMatrix Pte. Ltd.](https://apps.apple.com/us/app/dramabox-stream-drama-shorts/id6445905219), un'entità di Singapore, e la sua capogruppo è [Dianzhong Technology](https://restofworld.org/2023/what-is-reelshort/). È quella che sta entrando negli studios. DramaBox ha partecipato al [Disney Accelerator 2025](https://thewaltdisneycompany.com/news/disney-accelerator-2025/), dove Disney Publishing ha detto di essere in trattative per adattare romanzi fantasy young adult in microdrama per le piattaforme Disney, e Disney Music sta valutando di trasformare album in brevi video verticali. Non è solo un distintivo. Disney dice che [i partecipanti "ricevono capitale di investimento"](https://thewaltdisneycompany.com/news/disney-accelerator-companies-2025/), quindi ne possiede una quota, per quanto piccola; l'importo non è reso noto. Un acceleratore non è un'acquisizione. Significa però che un formato liquidato come fanghiglia da feed due anni fa è ora qualcosa a cui Disney ha pagato per sedersi più vicino. Il dio del tuono è entrato nell'edificio. Indossa un badge da visitatore, e glielo ha comprato Disney.

**ShortMax**, l'app dietro la mia pubblicità, è la più grande e la meno leggibile. [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps) mostra più di 100 milioni di installazioni. La [scheda sull'App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) dichiara 50.000 drama e film in 19 lingue. Il venditore su entrambi gli store è **SHORTTV LIMITED**, che le sue stesse [condizioni di servizio](https://www.shorttv.live/Temsof) collocano in "Unit 2-J3, 1st Floor, Fuk Hong Industrial Building" a Mong Kok, Hong Kong. I media di stato cinesi [riportano](https://www.chinadailyhk.com/hk/article/624225) che ShortMax appartiene a Jiuzhou Culture, un produttore cinese di short drama. Non ho trovato alcun documento depositato che lo confermi.

{{< inlinesvg src="layers.svg" alt="Diagramma di quattro riquadri in fila, ognuno più solido del precedente: StoryReel, il nome nella pubblicità; ShortMax, l'app; SHORTTV LIMITED, il venditore a Hong Kong; e Proprietario, che secondo le fonti sarebbe Jiuzhou Culture, senza documenti visti. Le monete scorrono sotto di loro da sinistra a destra." caption="Ogni strato è più solido del precedente, e ognuno è più difficile da raggiungere. Il marchio della pubblicità può essere buttato via domani. Il proprietario è un articolo di stampa." >}}

Quella struttura non è sinistra di per sé. Un marchio da campagna può essere sostituito senza ricostruire l'app. L'app conserva il tuo account e il rapporto di pagamento. Il venditore legale resta invisibile a meno che qualcuno non legga le scritte in piccolo.

### Sono tutte cinesi?

Sì, e nessuna di loro serve la Cina.

Ognuna delle tre risale a una capogruppo cinese: ReelShort a COL Group, DramaBox a Dianzhong, ShortMax, a quanto si riporta, a Jiuzhou Culture. Le società in California, Singapore e Hong Kong nel mezzo sono la forma standard di un'app consumer cinese che va all'estero. TikTok, Shein e Temu sono costruite allo stesso modo.

Sono prodotti da esportazione. Il mercato interno gira su Douyin, Kuaishou, WeChat e Hongguo di ByteDance, con app diverse e serie diverse, ed è molto più grande: il regolatore conta [800 milioni di utenti e oltre 100 miliardi di yuan (circa $15 miliardi) nel 2025](https://www.globaltimes.cn/page/202609/1370760.shtml). In patria, i microdrama sono soggetti a licenza, [68.000 sono stati rimossi quest'anno](https://www.globaltimes.cn/page/202609/1370760.shtml) in quanto dannosi, volgari o piratati, e [quelli fatti con l'AI devono portare un'etichetta](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html). Il dio del tuono non porta alcuna etichetta. Nessuna di quelle regole segue le versioni da esportazione fuori dal paese.

È sponsorizzato dallo stato? Non nel senso di un'operazione. Nel senso di politica industriale, apertamente. Il vice ministro del regolatore ha detto il 17 settembre 2026 che fino al 2030 lo stato ["sosterrà contenuti e piattaforme che vanno all'estero"](https://www.globaltimes.cn/page/202609/1370760.shtml), e che i microdrama cinesi detengono già [più dell'80% del mercato estero](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html). [Le città competono a colpi di sussidi](https://www.globaltimes.cn/page/202605/1362076.shtml) per ospitare gli studios. La Corea del Sud ha fatto qualcosa di simile per i K-drama, e nessuno l'ha chiamato un attacco. Un [saggio dello Yale Journal of International Affairs](https://www.yalejournal.org/publications/micro-drama-as-soft-power-yedbr) del maggio 2026 sostiene che se Pechino diriga tutto questo o si limiti a permetterlo sia una questione secondaria. Quello che conta è che una pipeline così grande decide "quali storie entrano nel tempo libero degli americani", e ogni punto di controllo al suo interno si trova fuori dalla regolamentazione occidentale.

Il fingerprinting e la raccolta dell'IP che ho trovato sulla landing page sono reali, e sono anche adtech standard. Non ho alcuna prova che li colleghi a qualcosa di diverso dal tracciamento delle conversioni, e non ho intenzione di inventarne.

Non sinistro, quindi. Ma quei quattro strati sono ciò che rende la parte successiva molto difficile da sistemare.

### L'abbonamento che nessuno riesce a trovare

Le condizioni di ShortMax dicono che un abbonamento "verrà rinnovato automaticamente 24 ore prima della data di scadenza", e che per disdire bisogna "fare riferimento alla sezione 'About Subscription' nell'app ShortMax". Dicono anche che i pagamenti "devono essere effettuati tramite i metodi specificati da ShortMax", che la società "ha il diritto di modificare".

Gli utenti dicono di non riuscire a trovare l'uscita. Su [Trustpilot](https://www.trustpilot.com/review/www.shortmax.app), ShortMax ottiene 1,2 su 5 in 77 recensioni, il 99% delle quali a una stella. Le lamentele si ripetono: addebito di $19.99 a settimana dopo la disdetta, addebito di $13.99 senza mai essersi abbonati, una prova gratuita trasformata in $239.88. Quest'ultima cifra è dodici volte $19.99, cioè quanto costerebbero dodici rinnovi settimanali. Diversi dicono che l'abbonamento non compare nelle impostazioni Apple o Google, che è dove normalmente lo si disdirebbe, e che l'unica cosa che ha funzionato è stata chiamare la banca.

Il [Better Business Bureau](https://www.bbb.org/us/fl/miami/profile/mobile-apps/shortmax-innovations-0633-92056233/complaints) elenca una "Shortmax Innovations" a un indirizzo di Brickell Avenue a Miami con una valutazione F e 149 reclami chiusi in tre anni. La sua indagine del giugno 2026 non ha trovato alcuna registrazione societaria valida, nessun proprietario identificato, e nessuna email o telefono funzionante. Se quello sia il nome sugli estratti conto delle persone o una coincidenza, non riesco a dirlo dai registri pubblici. Non è la società indicata nelle condizioni di servizio.

Voglio essere cauto qui. Si tratta di segnalazioni di utenti e di un aggregatore di reclami, non di una sentenza. Ma lo schema è coerente tra le fonti, è coerente con le condizioni, e si incastra nel funnel. Un prodotto così efficace nel rimuovere l'attrito all'ingresso non ha alcuna ragione commerciale per aggiungerne all'uscita.

### Perché la moneta è il vero protagonista

L'economia ha senso una volta che si smette di confrontare queste app con Netflix.

Netflix vende l'accesso a un catalogo. Le app di microdrama vendono la **risoluzione**. Un abbonamento chiede se un intero servizio valga la pena di essere pagato, una volta al mese, in un momento di calma. Una moneta pone una domanda più piccola in un momento molto più caldo: vuoi sapere cosa succede dopo?

Quindi il numero che conta non sono i ricavi. È il rapporto tra quanto costa acquisire uno spettatore pagante e quanto quello spettatore spende prima di andarsene. Se una coorte copre la produzione, la quota dell'app store, gli spettatori gratuiti e il prossimo giro di pubblicità, la campagna scala. Se non lo fa, StoryReel sparisce e domani compare un nuovo marchio con un lupo mannaro miliardario, un'ereditiera abbandonata o un chirurgo la cui famiglia ha commesso l'errore catastrofico di dubitare di lui.

È qui che entra l'AI, e non è dove me l'aspettavo.

I microdrama girati con esseri umani costano soldi veri: il New York Times [stimava una serie tra $150,000 e $300,000](https://www.c21media.net/news/ai-slashing-cost-of-microdrama-production-in-china-to-30-per-minute/) nel maggio 2026. Lo stesso articolo trovava produttori cinesi che li realizzano per appena **$30 al minuto** con strumenti AI che "eliminano quasi completamente gli esseri umani". DataEye ha contato quasi 50.000 nuovi microdrama generati dall'AI su Douyin nel solo marzo 2026. A settembre il regolatore stesso ha detto che la Cina aveva pubblicato [430.000 microdrama nei primi otto mesi dell'anno, più del 90% dei quali fatti con l'AI](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html), tredici volte l'intero 2025.

{{< inlinesvg src="cost.svg" alt="Grafico a barre che confronta il costo di una serie. Girata con esseri umani: una barra lunga etichettata da 150.000 a 300.000 dollari. Fatta con l'AI, 61 minuti a 30 dollari al minuto: una barra larga quattro pixel etichettata circa 1.800 dollari." caption="Quanto costa produrre una serie da 61 episodi, sulla stessa scala. La barra dell'AI è disegnata in proporzione." >}}

A $30 al minuto, il mio dio del tuono da 61 episodi costerebbe circa $1,800 da produrre. A quel prezzo il calcolo dell'acquisizione cambia completamente. Non hai più bisogno di un successo. Hai bisogno di mille tentativi, di una dashboard e della disciplina di uccidere tutto ciò che non converte. La storia smette di essere il prodotto. Diventa una variante della pubblicità.

## È slop generato dall'AI?

Secondo me sì, senza dubbio. Ho elencato cosa non andava all'inizio e non lo ripeterò. Non è una questione di gusto. È una questione di mestiere.

Qualche tempo fa ho sentito due amici discutere di arte, tecnologia e AI. Uno di loro è un artista. Uno ha detto: "beh, però l'arte è soggettiva", e la risposta è stata: "sì, ma il mestiere no". È questa la distinzione qui. Nessuno di quelli coinvolti nel dio del tuono stava cercando di raccontare una storia, quindi non c'è alcuna storia da giudicare. La serie esiste per farti venire voglia di premere un pulsante, e il fatto che tu voglia premerlo non la rende buona. Anche le slot machine sono avvincenti.

Il regolatore cinese stesso, nello stesso annuncio in cui contava più del 90% delle uscite di quest'anno come fatte con l'AI, ha [definito il live action "il pilastro delle produzioni di qualità"](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html) e ci ha messo dei soldi. Il paese che produce lo slop concorda che sia slop.

L'AI è uno strumento, non una bacchetta magica. Non è il motivo per cui questo sta succedendo. È l'abilitatore. Qualcuno ha deciso che la storia non è mai stata il punto, e l'AI ha reso quella decisione quasi gratuita. Nessuna anima, nessun mestiere, nessuna arte. Solo una macchina che gioca su un riflesso, con un pulsante alla fine.

## Conclusioni

Sono andato a cercare chi viene pagato e ho trovato la risposta a ogni strato tranne l'ultimo. Quello che non mi aspettavo di trovare è quanto poco del denaro avesse a che fare con la serie.

**Arte contro casinò.** Netflix ci ha insegnato il binge, ma doveva fare qualcosa che la gente amasse per trattenerla. Il gancio funzionava solo perché ti importava di cosa succedeva ai personaggi. Il dio del tuono tiene il gancio e butta via l'importare. Voler sapere cosa succede dopo era la ricompensa per una storia ben raccontata. Qui è stato isolato, purificato e venduto al minuto, come il principio attivo estratto da una pianta. È questa la differenza tra un teatro e una slot machine, e le due cose non vanno confuse solo perché condividono uno schermo.

**Il lato governativo.** Gli utenti dicono di non riuscire a disdire perché l'abbonamento non compare mai nelle impostazioni Apple o Google, il che significa che viene addebitato in qualche altro modo. Ogni abbonamento fatturato da quei due ha un pulsante di disdetta nelle impostazioni del telefono, accanto a quello di Netflix. Chiunque abbia addebitato questi utenti non gliene ha dato uno. La soluzione è vecchia quanto la vendita per corrispondenza: chi incassa un pagamento ricorrente deve rendere l'interruzione facile quanto l'avvio. Altre due soluzioni sono altrettanto noiose: un'etichetta sui video sintetici, che la Cina richiede in patria e non richiede alle sue esportazioni, e un venditore il cui nome corrisponda a quello sul tuo estratto conto. Niente di tutto questo richiede una nuova legge sull'AI. Richiede le vecchie regole sulla vendita delle cose applicate a un'app che si è impegnata a fondo per restarne appena fuori.

**Il lato tecnologico.** L'AI non ha inventato questo. Ha portato il costo marginale della storia a qualcosa come milleottocento dollari, e quando la storia è così vicina al gratis non ne fai una migliore, ne fai 430.000 e lasci che sia la dashboard a scegliere. L'automazione ottimizza qualsiasi cosa verso cui è puntata. Questa era puntata sul pulsante.

**Cosa è lo slop, e cosa non è.** Lo slop non è un verdetto sull'AI, e non è un verdetto sulle persone che guardano 25 minuti al giorno, che ottengono esattamente il riflesso che gli è stato venduto. Lo slop è contenuto fatto senza alcuna intenzione oltre la transazione. Conta perché funziona, e tutto ciò che funziona viene copiato. Disney non ha messo soldi in DramaBox per imparare a raccontare storie. Ce li ha messi per imparare il pulsante.

Abbiamo creato le storie per scoprire chi siamo. Nate Ryder è stato creato per scoprire se avresti pagato.

Ecco come appare quando gusto, sentimento, anima e creatività vengono spinti da parte, e quello che prende il loro posto è economico, efficiente e predatorio, e puntato dritto sul tuo portafoglio. Non è un nuovo tipo di intrattenimento. È ciò che resta dell'intrattenimento una volta rimosso tutto ciò che lo rendeva degno di essere pagato, tranne il pagare.

Da qualche parte stanotte verrà insultato di nuovo da persone che se ne pentiranno entro sessanta secondi. Accanto a lui, qualcuno ha una dashboard aperta. Non sta misurando se la storia fosse buona. Non lo ha mai fatto.

## Fonti e metodo

Ho ispezionato solo codice di pagine pubblicamente accessibili e schede degli store. Non ho creato un account, comprato monete o toccato alcun sistema non pubblico. Le cifre di mercato sono stime di terze parti, non dati societari certificati. Le cifre sui reclami sono segnalazioni di utenti. Ricerca verificata il 27 settembre 2026; i conteggi degli app store, i prezzi e le pagine di marketing cambiano frequentemente.

- [Landing page della campagna StoryReel](https://w2a.storyreel.life/v6/2/fb02.html?shorttv_adid=288123&language=en) e la sua [configurazione della campagna](https://prod-api.storyreel.life/prod-api/16/app/hiCampaignLink/getConfig?adId=288123&pageType=1&ver=001).
- [*SSS-Rank: The Slum-Born Thunder God* su ShortMax](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605).
- ShortMax sull'[Apple App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) e su [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps); [condizioni di servizio di ShortMax](https://www.shorttv.live/Temsof).
- [ShortMax su Trustpilot](https://www.trustpilot.com/review/www.shortmax.app); [Shortmax Innovations sul BBB](https://www.bbb.org/us/fl/miami/profile/mobile-apps/shortmax-innovations-0633-92056233/complaints).
- [Sensor Tower, State of Short Drama Apps 2026](https://sensortower.com/blog/state-of-short-drama-apps-2026-report).
- [Crazy Maple Studio](https://www.crazymaplestudios.com/); [Rest of World su ReelShort e i suoi proprietari](https://restofworld.org/2023/what-is-reelshort/); [TechCrunch sull'esplosione di ReelShort nel 2023](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/).
- [DramaBox sull'App Store](https://apps.apple.com/us/app/dramabox-stream-drama-shorts/id6445905219); [The Walt Disney Company, Demo Day dell'Accelerator 2025](https://thewaltdisneycompany.com/news/disney-accelerator-2025/) e [annuncio della classe 2025](https://thewaltdisneycompany.com/news/disney-accelerator-companies-2025/).
- [China Daily HK su Jiuzhou Culture e ShortMax](https://www.chinadailyhk.com/hk/article/624225).
- [C21Media che riassume il New York Times sui costi dei microdrama AI](https://www.c21media.net/news/ai-slashing-cost-of-microdrama-production-in-china-to-30-per-minute/).
- [Global Times sulle cifre NRTA e il sostegno all'estero, settembre 2026](https://www.globaltimes.cn/page/202609/1370760.shtml); [Xinhua sui microdrama fatti con l'AI e le regole di etichettatura](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html); [Global Times sui sussidi locali, maggio 2026](https://www.globaltimes.cn/page/202605/1362076.shtml).
- [Yale Journal of International Affairs, Micro-Drama as Soft Power](https://www.yalejournal.org/publications/micro-drama-as-soft-power-yedbr).
