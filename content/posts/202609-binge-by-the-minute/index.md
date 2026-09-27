---
title: "Netflix Taught Us to Binge. These Apps Sell It by the Minute."
summary: "An Instagram ad for a secretly omnipotent nobody led me to a disposable landing page, a 100-million-install app, a company in a Hong Kong industrial building and a weekly pass that people say they cannot cancel. I followed the money."
description: "What a vertical-drama ad is really selling: the funnel, the coin economy, the companies behind ShortMax, ReelShort and DramaBox, and whether any of it is AI slop."
categories: ["Tech", "Media", "Business"]
tags: ["media", "mobile", "advertising", "microdrama", "ai", "investigation"]
date: 2026-09-27
---

For one week, Instagram insisted that I meet Nate Ryder.

Nate is poor. Everyone hates him. A richer boy has ruined his family. There is a national tournament coming up. Fortunately, Nate is also secretly an SSS-rank thunder god, which feels like useful information he might have mentioned earlier.

Just as he is about to reveal himself, the ad stops.

The series is called *SSS-Rank: The Slum-Born Thunder God*. It does not waste time on ambiguity. Its villains have chosen public humiliation as a full-time career, its hero is one glowing fist away from revenge, and the button beneath the video offers the only thing I now want: the next minute.

The quality of the entire thing was awful. The acting, the writing, the lighting, the sound, the editing, the pacing, the lip sync, the crowd shots, the hands, the faces changing between shots, the text on screen: all of it was wrong. It was also compelling. This was AI-generated slop with a hook, and I wanted to see what happened next.

I did not press the button. I opened the page source instead.

Blame [my career](/about/). I spent its first six or seven years working in TV and streaming, and I never lost the habit of watching what the big players do: Netflix, Amazon Prime Video, HBO and the rest. The last couple of years have been fascinating to follow. This was different. Not the AI, which I expected, but how much machinery was sitting behind one bad minute of video.

So this is what I was watching, where the button goes, and who gets paid. What I found was a very old machine dressed in new clothes, and a first look at what stories become when the only question left is whether you will pay.

## What was I watching

Strip the lightning away and what is left is the Netflix playbook.

Netflix spent a decade teaching us to binge. It [declared binge watching "the new normal"](https://www.prnewswire.com/news-releases/netflix-declares-binge-watching-is-the-new-normal-235713431.html) back in 2013, and built the product around it: every episode ends on a hook so that the autoplay countdown wins and six hours disappear on a Tuesday. The thunder-god ad is that idea boiled down. There is no season to get through. There is one minute, one injustice, one hook, and then a lock.

Every episode advances the story by exactly one emotional unit:

- insult;
- reaction shot;
- evidence that the hero may be special;
- nobody believes the evidence;
- somebody raises the stakes;
- cut to the lock.

The story exists to manufacture one feeling, fast: this person is being wronged, and you want to watch it get corrected. The [official synopsis](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605) does the job in four sentences. Nate is "dismissed as a worthless failure". His father's health was "destroyed by selling blood for a serum" that a "privileged bully" then destroyed. The bully "expects to humiliate him before thousands". Instead, Nate "shocks the world, and begins his unstoppable rise". Subtle characterization would only slow down the transaction.

The poster is the clearest tell.

{{< figure src="poster.webp" alt="Poster for SSS-Rank: The Slum-Born Thunder God. A young man crouches in a boxing ring with blue lightning around his fists. Behind him stand three near-identical blonde women and a scowling man in a hoodie. The title is stamped into the floor in metal letters." caption="The poster for [*SSS-Rank: The Slum-Born Thunder God*](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605), as served by ShortMax's campaign server. Uploaded 18 August 2026." >}}

Three near-identical blonde women in a boxing ring, skin without pores, lighting without a source, and a title stamped into the floor in metal. The series page credits a "Creator: Grace Whitman" and nobody else. No cast, no director, no studio. Sixty-one episodes, and not one human name that can be checked.

The story is not the product. The story is the bait, and the product is the next minute. Netflix removed the wait between episodes. This removes everything else: the script, the acting, the taste, the production values, the human names. What is left is a machine for making you want to see what happens next, and the art of storytelling replaced by a casino transaction.

## What happens next

The ad's link goes to [`storyreel.life`](https://w2a.storyreel.life/v6/2/fb02.html?shorttv_adid=288123&language=en), branded **StoryReel**. It looks like a streaming site: the poster, the synopsis, a pulsing orange button that says "Continue Watch" and a little animated hand pointing at it.

It is not a streaming site. StoryReel does not host a single video. Its code does four things that matter.

1. It fetches the poster, title and synopsis from a **ShortMax** campaign server, keyed by the ad ID in the URL.
2. It fingerprints your browser, works out your IP address and reports that you arrived, together with the click ID Meta attached to the link.
3. When you tap anywhere on the page (the button is decorative; the whole page is the button), it copies a hidden code with the episode ID to your clipboard.
4. It tries to open the ShortMax app with a `shorttv://` link. If the app is not installed, it sends you to the [App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) or [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps). The clipboard code is there so that the app can read it after install and drop you straight into the episode you were watching.

That last trick is why the funnel does not lose you between the ad and the app. It is also why the page never asked me anything. There is no account, no price, no terms. All of that waits inside the app, after the hook has done its work.

{{< inlinesvg src="funnel.svg" alt="Animated diagram of two loops joined at a shared node. On the left, a viewer moves from a feed ad to free episodes, to a cliffhanger, to installing the app, and back around. On the right, money moves from the cliffhanger to coins or a pass, to buying more ads, and back to the free episodes." caption="Two loops that share a cliffhanger. The viewer goes around the left one. The money goes around the right one. Neither has an exit built in." >}}

The series itself lives on ShortMax's own site as [drama 32605](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605), with 61 episodes. The [campaign server](https://prod-api.storyreel.life/prod-api/16/app/hiCampaignLink/getConfig?adId=288123&pageType=1&ver=001) reports 6,076,623 plays. The poster file is dated 18 August 2026, five weeks before it reached my feed.

Did I have to pay? Not yet. Once I found the series on ShortMax's own site, it offered the first five episodes free. Anything past that requires the app. I watched none of them and installed nothing, so the prices come from the [store listing](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) rather than the paywall itself. The listing shows what is waiting: coin packs from $3.49 to $24.99, and a "Weekly Pass Pro" at $9.99 or $19.99. Twenty dollars a week is not a typo. A reviewer on the listing notes that episodes cost up to 60 coins each, and that "you only see the amount once you've run out of coins and the app wants you to buy more".

The app is rated 18+ and, according to Apple's privacy summary, uses your device identifiers to track you across other companies' apps. The page had already fingerprinted me before I got that far.

## Who makes these

The category is called **microdrama**, **short drama** or **vertical drama**: scripted fiction made for a phone held upright, in episodes that last about a minute. It is not small.

By the first quarter of 2026, [Sensor Tower estimated](https://sensortower.com/blog/state-of-short-drama-apps-2026-report) that short-drama apps had passed **850 million downloads in three months**, up 140% year over year. In-app purchase revenue reached roughly **$750 million in the quarter**, or **$3 billion a year** at that rate. Six short-drama apps ranked among the world's top 40 apps by downloads. People were spending an average of 25 minutes a day inside them by April. The episode is a minute long. The habit is not.

Those figures are estimates of App Store and Google Play activity. They exclude ad revenue and third-party Android stores, so the real number is bigger.

Three companies show three versions of the same export.

**ReelShort** belongs to [Crazy Maple Studio](https://www.crazymaplestudios.com/), founded in San Francisco in 2016, which is itself a subsidiary of [COL Group](https://restofworld.org/2023/what-is-reelshort/), a Chinese web-literature company. That lineage matters: they did not arrive at short drama by shrinking television. They arrived from serialized web fiction, which already knew how to make people pay by the chapter. [TechCrunch caught the machine accelerating](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/) in November 2023: $22 million in net revenue since launch, one Saturday with 326,000 installs and $459,000 in revenue, and around 8,100 ads running in the US on Meta at once. By Q1 2026 Sensor Tower had it close to $140 million in in-app revenue for the quarter.

**DramaBox** is sold by [StoryMatrix Pte. Ltd.](https://apps.apple.com/us/app/dramabox-stream-drama-shorts/id6445905219), a Singapore entity, and its parent is [Dianzhong Technology](https://restofworld.org/2023/what-is-reelshort/). It is the one walking onto the studio lot. DramaBox joined the [2025 Disney Accelerator](https://thewaltdisneycompany.com/news/disney-accelerator-2025/), where Disney Publishing said it is in discussions to adapt young-adult fantasy novels into microdramas for Disney platforms, and Disney Music is exploring turning albums into vertical video shorts. This is not only a badge. Disney says [participants "receive investment capital"](https://thewaltdisneycompany.com/news/disney-accelerator-companies-2025/), so it owns a piece, however small; the amount is not disclosed. An accelerator is not an acquisition. It does mean a format dismissed as feed sludge two years ago is now something Disney has paid to sit closer to. The thunder god has entered the building. He is wearing a visitor badge, and Disney bought it for him.

**ShortMax**, the app behind my ad, is the biggest and the least legible. [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps) shows more than 100 million installs. The [App Store listing](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) claims 50,000 dramas and movies in 19 languages. The seller on both stores is **SHORTTV LIMITED**, which its own [terms of service](https://www.shorttv.live/Temsof) place at "Unit 2-J3, 1st Floor, Fuk Hong Industrial Building" in Mong Kok, Hong Kong. Chinese state media [reports](https://www.chinadailyhk.com/hk/article/624225) that ShortMax belongs to Jiuzhou Culture, a Chinese short-drama producer. I found no filing that confirms it.

{{< inlinesvg src="layers.svg" alt="Diagram of four boxes in a row, each more solid than the last: StoryReel, the name in the ad; ShortMax, the app; SHORTTV LIMITED, the seller in Hong Kong; and Owner, reported to be Jiuzhou Culture with no filings seen. Coins flow beneath them from left to right." caption="Each layer is more solid than the one before it, and each is harder to reach. The ad brand can be thrown away tomorrow. The owner is a press report." >}}

That structure is not sinister by itself. A campaign brand can be replaced without rebuilding the app. The app keeps your account and payment relationship. The legal seller stays invisible unless someone reads the small print.

### Are they all Chinese?

Yes, and none of them serve China.

Every one of the three traces back to a Chinese parent: ReelShort to COL Group, DramaBox to Dianzhong, ShortMax reportedly to Jiuzhou Culture. The California, Singapore and Hong Kong companies in between are the standard shape for a Chinese consumer app going abroad. TikTok, Shein and Temu are built the same way.

They are export products. The domestic market runs on Douyin, Kuaishou, WeChat and ByteDance's Hongguo, with different apps and different shows, and it is far bigger: the regulator counts [800 million users and over 100 billion yuan (about $15 billion) in 2025](https://www.globaltimes.cn/page/202609/1370760.shtml). At home, microdramas are licensed, [68,000 were taken down this year](https://www.globaltimes.cn/page/202609/1370760.shtml) as harmful, lowbrow or pirated, and [AI-made ones must carry a label](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html). The thunder god carries no label. None of those rules follow the export versions out of the country.

Is this state-sponsored? Not in the sense of an operation. In the sense of industrial policy, openly. The regulator's vice minister said on 17 September 2026 that through 2030 the state will ["support content and platforms going overseas"](https://www.globaltimes.cn/page/202609/1370760.shtml), and that Chinese microdramas already hold [more than 80% of the overseas market](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html). [Cities are competing with subsidies](https://www.globaltimes.cn/page/202605/1362076.shtml) to host the studios. South Korea did something similar for K-drama, and nobody called it an attack. A [Yale Journal of International Affairs essay](https://www.yalejournal.org/publications/micro-drama-as-soft-power-yedbr) from May 2026 argues that whether Beijing directs this or merely permits it is a secondary question. What matters is that a pipeline this large decides "which stories enter American leisure time", and every chokepoint in it sits outside Western regulation.

The fingerprinting and IP collection I found on the landing page are real, and they are also standard adtech. I have no evidence connecting them to anything but conversion tracking, and I am not going to invent any.

Not sinister, then. But those four layers are what make the next part very hard to fix.

### The subscription nobody can find

ShortMax's terms say a subscription "will be auto-renewed 24 hours before the expiration date", and that to cancel you should "refer to the 'About Subscription' section in the ShortMax App". They also say payments "must be done via methods specified by ShortMax", which the company "has the right to adjust".

Users say they cannot find the exit. On [Trustpilot](https://www.trustpilot.com/review/www.shortmax.app), ShortMax scores 1.2 out of 5 across 77 reviews, 99% of them one star. The complaints repeat: charged $19.99 a week after cancelling, charged $13.99 without ever subscribing, a free trial that turned into $239.88. That last figure is twelve times $19.99, which is what twelve weekly renewals would cost. Several say the subscription does not appear in their Apple or Google settings, which is where you would normally cancel it, and that the only thing that worked was calling their bank.

The [Better Business Bureau](https://www.bbb.org/us/fl/miami/profile/mobile-apps/shortmax-innovations-0633-92056233/complaints) lists a "Shortmax Innovations" at a Brickell Avenue address in Miami with an F rating and 149 complaints closed in three years. Its June 2026 investigation found no valid corporate registration, no identified owners, and no working email or phone. Whether that is the name on people's card statements or a coincidence, I cannot tell from public records. It is not the company in the terms of service.

I want to be careful here. These are user reports and a complaint aggregator, not a court finding. But the pattern is consistent across sources, it is consistent with the terms, and it fits the funnel. A product this effective at removing friction on the way in has no commercial reason to add any on the way out.

### Why the coin is the real protagonist

The economics make sense once you stop comparing these apps with Netflix.

Netflix sells access to a library. Microdrama apps sell **resolution**. A subscription asks whether a whole service is worth paying for, once a month, in a calm moment. A coin asks a smaller question at a much hotter one: do you want to know what happens next?

So the number that matters is not revenue. It is the ratio between what it costs to acquire a paying viewer and what that viewer spends before they leave. If a cohort covers production, the app-store cut, the free viewers and the next round of ads, the campaign scales. If it does not, StoryReel vanishes and a new brand appears tomorrow with a billionaire werewolf, an abandoned heiress or a surgeon whose family has made the catastrophic mistake of doubting him.

That is where AI comes in, and it is not where I expected.

Human-shot microdramas cost real money: the New York Times [put a series at $150,000 to $300,000](https://www.c21media.net/news/ai-slashing-cost-of-microdrama-production-in-china-to-30-per-minute/) in May 2026. The same report found Chinese producers making them for as little as **$30 a minute** with AI tools that "almost completely remove humans". DataEye counted nearly 50,000 new AI-generated microdramas on Douyin in March 2026 alone. By September the regulator itself said China had released [430,000 microdramas in the first eight months of the year, more than 90% of them AI-made](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html), thirteen times the whole of 2025.

{{< inlinesvg src="cost.svg" alt="Bar chart comparing the cost of one series. Human-shot: a long bar labelled 150,000 to 300,000 dollars. AI-made, 61 minutes at 30 dollars a minute: a bar four pixels wide labelled about 1,800 dollars." caption="What one 61-episode series costs to make, on the same scale. The AI bar is drawn to size." >}}

At $30 a minute, my 61-episode thunder god would cost about $1,800 to produce. At that price the acquisition maths changes completely. You no longer need a hit. You need a thousand attempts, a dashboard, and the discipline to kill everything that does not convert. The story stops being the product. It becomes an ad variant.

## Is this AI slop?

In my opinion, yes, without question. I listed what was wrong in the opening and I will not repeat it. It is not a matter of taste. It is a matter of craft.

Some time ago I overheard two friends arguing about art, technology and AI. One of them is an artist. One said, "well, but art is subjective", and the reply was, "yes, but craft is not". That is the distinction here. Nobody involved in the thunder god was trying to tell a story, so there is no story to judge. The show exists to make you want to press a button, and the fact that you want to press it does not make it good. Slot machines are compelling too.

China's own regulator, in the same announcement that counted more than 90% of this year's releases as AI-made, [called live-action "the mainstay of quality productions"](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html) and put money behind it. The country producing the slop agrees it is slop.

The AI is a tool, not a magic wand. It is not the reason this is happening. It is the enabler. Someone decided the story was never the point, and AI made that decision nearly free. No soul, no craft, no art. Just a machine that plays on a reflex, with a button at the end of it.

## Conclusions

I went looking for who gets paid and found the answer at every layer except the last one. What I did not expect to find was how little of the money had anything to do with the show.

**Art versus casino.** Netflix taught us to binge, but it had to make something people loved to keep them. The hook only worked because you cared what happened to the characters. The thunder god keeps the hook and throws away the caring. Wanting to know what happens next used to be the reward for a story well told. Here it has been isolated, purified and sold by the minute, like the active ingredient extracted from a plant. That is the difference between a theatre and a slot machine, and the two should not be confused because they share a screen.

**The government side.** Users say they cannot cancel because the subscription never appears in their Apple or Google settings, which means it is being billed some other way. Every subscription those two bill gets a cancel button in your phone's settings, next to Netflix's. Whatever billed these users did not give them one. The fix is as old as mail-order: whoever takes a recurring payment has to make stopping it as easy as starting it. Two more fixes are just as boring: a label on synthetic video, which China requires at home and does not require of its exports, and a seller whose name matches the one on your card statement. None of this needs a new law about AI. It needs the old rules about selling things applied to an app that has worked hard to sit just outside them.

**The tech side.** AI did not invent this. It brought the marginal story down to something like eighteen hundred dollars, and when the story is that close to free you do not make a better one, you make 430,000 of them and let the dashboard pick. Automation optimizes whatever it is pointed at. This was pointed at the button.

**What slop is, and is not.** Slop is not a verdict on AI, and it is not a verdict on the people watching 25 minutes a day, who are getting exactly the reflex they were sold. Slop is content made with no intent beyond the transaction. It matters because it works, and whatever works gets copied. Disney did not put money into DramaBox to learn about storytelling. It put money in to learn about the button.

We made stories to find out who we are. Nate Ryder was made to find out whether you would pay.

This is what it looks like when taste, feeling, soul and creativity get pushed out of the way, and what takes their place is cheap, efficient and predatory, and pointed straight at your wallet. It is not a new kind of entertainment. It is what is left of entertainment once everything that made it worth paying for has been removed, except the paying.

Somewhere tonight he will be insulted again by people who are going to regret it in sixty seconds. Beside him, somebody has a dashboard open. It is not measuring whether the story was any good. It never was.

## Sources and method

I inspected only publicly available page code and store listings. I did not create an account, buy coins or touch any non-public system. Market figures are third-party estimates, not audited company disclosures. Complaint figures are user reports. Research checked on 27 September 2026; app-store counts, prices and marketing pages change frequently.

- [StoryReel campaign landing page](https://w2a.storyreel.life/v6/2/fb02.html?shorttv_adid=288123&language=en) and its [campaign config](https://prod-api.storyreel.life/prod-api/16/app/hiCampaignLink/getConfig?adId=288123&pageType=1&ver=001).
- [*SSS-Rank: The Slum-Born Thunder God* on ShortMax](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605).
- ShortMax on the [Apple App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) and [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps); [ShortMax terms of service](https://www.shorttv.live/Temsof).
- [ShortMax on Trustpilot](https://www.trustpilot.com/review/www.shortmax.app); [Shortmax Innovations on the BBB](https://www.bbb.org/us/fl/miami/profile/mobile-apps/shortmax-innovations-0633-92056233/complaints).
- [Sensor Tower, State of Short Drama Apps 2026](https://sensortower.com/blog/state-of-short-drama-apps-2026-report).
- [Crazy Maple Studio](https://www.crazymaplestudios.com/); [Rest of World on ReelShort and its owners](https://restofworld.org/2023/what-is-reelshort/); [TechCrunch on ReelShort's 2023 breakout](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/).
- [DramaBox on the App Store](https://apps.apple.com/us/app/dramabox-stream-drama-shorts/id6445905219); [The Walt Disney Company, 2025 Accelerator Demo Day](https://thewaltdisneycompany.com/news/disney-accelerator-2025/) and [2025 class announcement](https://thewaltdisneycompany.com/news/disney-accelerator-companies-2025/).
- [China Daily HK on Jiuzhou Culture and ShortMax](https://www.chinadailyhk.com/hk/article/624225).
- [C21Media summarising the New York Times on AI microdrama costs](https://www.c21media.net/news/ai-slashing-cost-of-microdrama-production-in-china-to-30-per-minute/).
- [Global Times on NRTA figures and overseas support, September 2026](https://www.globaltimes.cn/page/202609/1370760.shtml); [Xinhua on AI-made microdramas and labelling rules](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html); [Global Times on local subsidies, May 2026](https://www.globaltimes.cn/page/202605/1362076.shtml).
- [Yale Journal of International Affairs, Micro-Drama as Soft Power](https://www.yalejournal.org/publications/micro-drama-as-soft-power-yedbr).
