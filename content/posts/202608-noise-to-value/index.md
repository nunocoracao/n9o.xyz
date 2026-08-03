---
title: "The Noise-to-Value Ratio"
summary: "AI made producing content nearly free, and the cost of that shows up on the other side of the pipe: everything arrives faster and in greater volume than any human can process. The scarce resource isn't generation anymore. It's attention, and the only defence is deciding what gets through."
description: "AI made producing content nearly free, and the cost of that shows up on the other side of the pipe: everything arrives faster and in greater volume than any human can process. The scarce resource isn't generation anymore. It's attention, and the only defence is deciding what gets through."
categories: ["AI", "Meta"]
tags: ["ai", "attention", "productivity", "agents", "information"]
date: 2026-08-16
draft: true
---

<!--
DRAFT SKELETON: outline only, nothing here is written yet.

NAMING: decided. Going with "noise-to-value" over the classic signal-to-noise
ratio, and the post has to earn it early (see the Intro section). The claim:
signal is what's addressed to you, value is what changes a decision. Under the
old regime those were close enough to treat as the same thing, because the
effort of producing something addressed to you was evidence someone meant it.
That collapsed. Now a message can be perfect signal by every classical measure
(relevant, on-topic, well-formed, genuinely for you) and still be worth nothing,
because nothing you do changes as a result. SNR can't see that gap. This is the
sharpest idea in the post and belongs in the first few paragraphs, not the end.

SCOPE: this post is the general law. The applied case in products (feature slop,
user burndown, deprecation discipline) is a separate follow-up post that links
back here. Do not absorb it. Keep the product-surface examples in this post
brief and illustrative, one line at most.
-->

## Intro: why this is a problem now

- The ratio was always there. What changed is the denominator: producing plausible, well-formed, on-topic content went to roughly zero cost.
- Every filter we relied on was implicitly a *cost* filter. Writing something took effort, so effort was a proxy for intent. That proxy is gone.
- Earn the title here. Signal is what's addressed to you. Value is what changes a decision. They used to travel together because effort bound them; now they've come apart, and the gap between them is the whole subject of the post.
- Thesis: the bottleneck moved from production to consumption, and almost nobody has restructured around that.

## Where the noise comes from

- **Our own agents.** Every agent produces logs, summaries, PRs, notifications, "here's what I did." Run five and you've built yourself a firehose you personally authored. This is the one people don't see coming, because it arrives labelled as productivity.
- **Everyone else's agents.** Content, emails, comments, docs, replies, all written at machine speed and addressed to humans.
- **The internet as a whole.** Search results, feeds, and recommendation systems now index a corpus that grows faster than it can be curated.
- **The subtle one:** a lot of it isn't wrong or spammy. It's *fine*. Fine is harder to filter than bad, because every cheap heuristic you have for rejecting things looks for defects, and there aren't any.

## Impact: biological bandwidth

- Human throughput hasn't moved: same reading speed, same working memory, same number of real decisions per day.
- What the mismatch actually costs is not just time, but decision quality, context switching, and the erosion of trust in your own inbox, feed and queue.
- The failure mode isn't drowning. It's *skimming*: processing everything shallowly and catching none of it.
- (Maybe a concrete example here from running the agent fleet, the moment the notifications became noise to me.)

## How: closing the bandwidth

- Default to closed. Nothing gets through unless it earned it.
- Batch instead of stream. Interrupts are the expensive part, not volume.
- Push filtering upstream. Make the producers summarise, rank, and stay quiet. Agents that only speak when attention is genuinely needed.
- Measure the ratio, don't just feel it: of everything that reached you today, how much changed a decision? This is the operational form of the signal-versus-value distinction from the intro, so call back to it explicitly.
- Organisation as a bandwidth strategy, not tidiness for its own sake.

## Conclusion

- Attention is the scarce input now. Treat it like a budget with a hard ceiling.
- The skill of the next few years isn't producing more, it's choosing what gets in.
- Landing line: TBD.

<!--
TODO:
- featured.webp (every post in this repo has one)
- consider linking the Watchfire post for the "agents as noise sources" thread
- forward-link the feature slop post once it's written, as the applied case
-->
