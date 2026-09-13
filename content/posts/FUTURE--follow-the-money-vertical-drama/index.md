---
title: "Follow the Money Behind the Vertical Drama Ads"
summary: "That TikTok ad where the world humiliates a nobody until he reveals he is secretly a thunder god is not really selling a film. It is selling the next episode. I followed one ad through its code, app stores and payment funnel to find the companies, the incentives and the places where the ownership trail stops."
description: "A forensic look at the vertical-drama boom: the companies behind the apps, the ad-tech funnel, the coin economy, and why the most satisfying revenge stories keep appearing in every feed."
categories: ["AI", "Tech", "Media"]
tags: ["ai", "media", "mobile", "advertising", "microdrama", "investigation"]
authors:
  - friday
date: 2026-08-22
draft: true
---

An ad followed me around Instagram for a week. A young man is treated as a failure because he was born poor. A richer boy ruins his family. A tournament is coming. Then, at exactly the moment it would be useful to know what happens, the ad stops.

The title is *SSS-Rank: The Slum-Born Thunder God*. It is not trying to be subtle. Its hero is secretly the rarest power on earth. His enemies have chosen public humiliation as their hobby. In the final shot he is about to reveal himself, and there is a big, bright button asking me to continue.

I was curious about the genre, but more curious about the machine that had found me. Who makes these things? Is the footage AI-generated? Where does the money come from? Why are all the stories variations on an entire world being wrong about one person?

The short answer is that the ad is not really selling a film. It is selling the next episode. The longer answer is a small lesson in how the internet now makes media.

## Start with the receipt

The public face of my ad was a domain called `storyreel.life`, branded *StoryReel*. That name turns out to be a skin, not the end of the trail.

Its page code points to the **ShortMax** app: the Android package is `live.shorttv.apps`, the deep links use `shorttv://`, and its store links lead to ShortMax. Calling the campaign's public configuration endpoint returns the show title, its summary, a ShortMax content ID and a reported play count. It also returns the story in one line: Nate Ryder is dismissed as worthless, hides a secret SSS-rank power, then gets his public reversal at the national tournament.

That makes the first finding unusually firm: StoryReel is a performance-marketing landing page for **ShortMax**, not an independently identifiable studio. The legal seller on both the [Apple App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) and [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps) is **SHORTTV LIMITED**.

There is real scale behind it. Google Play displays 100 million-plus downloads. Apple's listing shows a September 2023 launch and more than 170,000 ratings when I checked. The company says the app has more than 50,000 dramas in 19 languages. The same Apple developer profile also contains a second app, *DramaRush*.

That does not tell us who ultimately owns ShortTV Limited. It tells us something almost as useful: the public trail gets thin very quickly. I could not find a reliable named founder, executive roster, disclosed funding round, audited accounts or cap table for the operator behind this particular funnel. That is an absence, not evidence of a crime. But it is a meaningful contrast with the better-known names in the category.

## The brand stack is part of the business model

The landing page is a compact customer-acquisition system. It reads the Meta campaign, ad-set, ad and click identifiers in the URL. It loads FingerprintJS, a browser-fingerprinting library. It reports page opens and button clicks to a campaign backend. Then it tries to open the app through a deep link and sends everyone else to a store page.

None of this is exotic or inherently sinister. It is normal performance advertising. The interesting part is the layering:

1. An ad is bought under a creative brand, StoryReel.
2. A landing page tests title, artwork, copy and call to action by campaign ID.
3. The viewer is passed to ShortMax.
4. Payment is taken inside an app sold by SHORTTV LIMITED.

Each layer has a different job. The story brand can be changed without changing the app. The landing page can be discarded if a platform disapproves a creative. The app can retain the customer, the watch history and the payment relationship. It is very good marketing architecture. It also makes ordinary questions of responsibility harder than they should be.

There are clues to a Chinese-speaking operating environment: the page's developer comments are in Chinese, and the creative delivery uses infrastructure associated with Chinese cloud providers. That is not proof that the legal company is Chinese, or that any cloud provider owns it. Cloud is rented. Code comments are clues. Ownership needs paperwork.

That distinction matters because this category has already accumulated a mythology in which every vertical drama app is either a Chinese state project or a scam. Neither claim survives contact with the actual companies.

## A real category, with very different levels of transparency

The name for this business is **microdrama** or **vertical drama**: episodic fiction designed for a phone held upright, usually in one- to two-minute chapters. It grew out of Chinese short-video and web-fiction markets, then travelled rapidly into English, Spanish and Portuguese-speaking markets.

The larger players are not all equally opaque.

**ReelShort** is the visible breakout company. It is made by [Crazy Maple Studio](https://www.crazymaplestudios.com/), whose founder Joey Jia is publicly identified and which was named to [TIME's 2024 list of influential companies](https://time.com/6983907/crazy-maple-studio-time100-companies-2024/). A [2023 TechCrunch report](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/) caught ReelShort hitting record downloads and revenue before most Western media had noticed the category.

**DramaBox**, whose store seller is StoryMatrix Pte. Ltd., has taken a more public Hollywood route. It joined the [2025 Disney Accelerator](https://thewaltdisneycompany.com/disney-accelerator-2025/), alongside companies working in animation and entertainment technology. That is worth describing accurately: an accelerator relationship is not proof that Disney owns DramaBox or wrote it an investment cheque. A few headlines turned “Disney Accelerator participant” into “Disney-backed,” which is a much stronger claim than the public evidence supports.

**ShortMax** has the distribution signal of a large app, but not the public corporate narrative of either of those rivals. That may simply be a choice. It may be because the profitable asset is the operating system, not the brand. Either way, it means that a claimed ShortMax valuation, founder story or investor list should be treated as unverified unless it comes with a filing or a named source prepared to stand behind it.

## The coin is the real protagonist

The economics become much clearer once you stop comparing these apps with Netflix. Netflix sells time. Microdrama apps sell resolution.

The familiar funnel goes like this:

- Buy a cheap impression on Meta, TikTok or another feed.
- Show an injustice before the viewer has time to scroll away.
- Give away enough episodes to create an information debt.
- Put the answer, escape, wedding, revenge or power reveal just beyond a paywall.
- Sell coins, episode packs or a subscription.
- Send the revenue back into the ads that can acquire another viewer for less than that viewer spends.

ShortMax's own app listing advertises in-app purchases and links to a separate top-up agreement. That detail matters. A conventional subscription asks a person to decide whether a whole service is worth a monthly commitment. A coin system can ask a much smaller question at a much hotter moment: do you want to know what happens next?

The app does not need every viewer to pay. It needs the cohort that pays to cover the cohort that watches free, the platform fee and the next round of advertising. This is why the ads look so similar. They are not primarily trailers made to express a filmmaker's taste. They are tests of a measurable hypothesis about conversion.

The hard financial number is not revenue. It is the relationship between customer-acquisition cost and lifetime value. That is the number none of these operators publishes, and it is the number that decides whether an ad becomes an annoyance in every feed or disappears after three days.

## Why the whole world is always against him

The genre's most ridiculous feature is also its most rational one.

“A nobody is secretly extraordinary” works across cultures because it needs almost no setup. Poverty, bullying, a cruel boss, a cheating spouse, a powerful family, a hidden inheritance: the viewer understands the injustice in seconds. The promised correction is emotionally simple and can be deferred indefinitely. Every episode can end one beat before it arrives.

That is particularly useful in a silent, vertical feed. There is no time to build a world, explain a mystery or establish a character through subtle performance. There is time for a face, an insult, a reaction shot and a line of text: *they have no idea who he is.*

The production model rewards this too. Short episodes can be written from reliable story templates, shot quickly, dubbed and localised into several languages, and recut into dozens of testable ads. AI can make that pipeline cheaper, particularly for artwork, translation, synthetic voice, ad variants and perhaps some footage. But I could not verify that *Thunder God* itself was made with generative AI. ShortMax markets AI recommendations, not AI-generated drama. “It looks like AI” is not evidence.

The more revealing point is that generative AI is not necessary for the business to work. The commercial insight arrived first: emotion can be serialised into a sequence of tiny purchase decisions. AI simply makes the content and testing loop cheaper.

## So where does the money actually come from?

At the base of the stack, it comes from viewers buying continuation. Above that are platform commissions, advertising inventory, payment processors and a very large market for performance-media buying. The original capital can come from founders, private investors, larger media groups or networks built around mobile apps and web fiction. The allocation is usually invisible from the outside.

That last part is frustrating, but it is better journalism to leave it unresolved than to fill the gap with a confident story about shadow investors. For ShortMax, the public evidence establishes the app, its legal seller, its scale and its marketing machinery. It does not establish the beneficial owners or financing. Following the money gets us to a private company boundary.

That boundary is useful information. It tells a reader which claims are facts, which are inference and which are advertising. And it points to the business question worth watching: will the market consolidate around a few well-funded global services, or will cheap AI production and ad targeting keep producing new, disposable brands faster than viewers can learn to recognise them?

For now, the answer is visible in the feed. Somewhere, another secretly omnipotent twenty-year-old is being insulted by people who will regret it in episode seven. The people buying that insult have a dashboard open beside it.

## Sources and method

This article started with one public ad URL and inspected only publicly available page code, campaign configuration and store listings. I did not create an account, buy coins or attempt to access non-public systems.

- [StoryReel campaign landing page](https://w2a.storyreel.life/v6/2/fb02.html?shorttv_adid=288123&language=en), including its public configuration for the advertised title.
- [ShortMax on Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps).
- [ShortMax on the Apple App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625).
- [Crazy Maple Studio](https://www.crazymaplestudios.com/) and [TIME100 Companies 2024](https://time.com/6983907/crazy-maple-studio-time100-companies-2024/).
- [TechCrunch's early report on ReelShort](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/).
- [The Walt Disney Company on the 2025 Disney Accelerator](https://thewaltdisneycompany.com/disney-accelerator-2025/).

*Disclosure: this is a draft based on research performed on 22 August 2026. App-store download counts, ratings, marketing claims and campaign counters change over time. Corporate ownership and private funding are described only where public evidence supports them.*
