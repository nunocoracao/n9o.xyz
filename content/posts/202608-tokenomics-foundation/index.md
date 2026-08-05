---
title: "The Linux Foundation Takes On AI Tokenomics, Without the Labs"
summary: "The Linux Foundation launched the Tokenomics Foundation this week to standardize how AI cost and ROI get measured. Twenty-nine founding members, none of whom set a token price. Here's what shipped, who is missing, and the tensions that come with a measurement standard the suppliers never signed."
description: "The Linux Foundation launched the Tokenomics Foundation this week to standardize how AI cost and ROI get measured. Twenty-nine founding members, none of whom set a token price. Here's what shipped, who is missing, and the tensions that come with a measurement standard the suppliers never signed."
categories: ["AI", "Tech", "Opinion"]
tags: ["ai", "tokens", "finops", "standards", "economics"]
date: 2026-08-05
draft: false
---

The last time anyone said "tokenomics" to me, I was sitting across from a crypto founder explaining how his company paid its developers. I asked what I thought was a simple question, roughly: how does anyone know what that is worth on the day it lands in someone's account? The answer was "that's because you don't understand the tokenomics." Which is a sentence that means nothing and ends a conversation at the same time.

So when the word turned up in the name of a new Linux Foundation organization this week, I flinched a little before reading the rest of it. Different token. Same question, though: how do you know what it was worth on the day the bill arrives.

Nobody has a good answer to that one yet either.

> [!info] TL;DR
> - The Linux Foundation launched the **Tokenomics Foundation** on August 4, a vendor-neutral standards body for measuring AI cost and ROI.
> - Twenty-nine founding members: banks, integrators, enterprise software, and about a dozen FinOps tool vendors.
> - **No frontier lab is in it.** No OpenAI, no Anthropic, no Google, no Microsoft, no AWS, no NVIDIA.
> - Google Cloud, Microsoft, Salesforce and KPMG all expressed support in June and did not make the August roster.
> - The closest successful precedent, FOCUS, only worked once the hyperscalers joined. That condition is not met here.

## What launched

On August 4 the [Linux Foundation](https://www.linuxfoundation.org/) [launched](https://www.linuxfoundation.org/press/linux-foundation-launches-the-tokenomics-foundation-to-define-the-economics-and-roi-of-ai-value) the [Tokenomics Foundation](https://www.tokeneconomics.com/), a standards body for the economics of AI. [J.R. Storment](https://www.linkedin.com/in/jrstorment) runs it, the same person who runs the [FinOps Foundation](https://www.finops.org/) next door. The governing board convened on July 30, a technical steering committee is coming, and the two orgs will share the [FOCUS](https://focus.finops.org/) billing spec and a conference calendar.

The initial roadmap is concrete enough to judge:

- A **definitions** document for tokenomics and AI value metrics
- A **Big-T Framework** classifying token complexity for workload routing
- **Token cost telemetry** folded into FOCUS v1.5 and beyond
- A **cost-to-serve** methodology, measuring work performed per call
- **AI Value Frameworks** tying spend to business outcomes
- Education and certification, plus a conference in Amsterdam in September

Monthly releases are promised through the end of the year. The problem it names is real and everyone recognizes it: AI is now the fastest-growing line on the technology budget and nobody has a shared way to say what a token is worth.

## Who is in the room

The founding roster runs to twenty-nine names: Accenture, BNY, Broadcom, Calero, Cast.ai, DoiT, Finout, Flexera, GoDaddy, Greenpixie, Hitachi, IBM, JPMorganChase, Kion, Lenovo, Nebius, North Cloud, Oracle, Pay-i, Pointfive, Revenium, SAP, ServiceNow, SHI, Stacklet, Vantage, WWT, XOsphere and Yarken.

The list sorts into three groups. Enterprises buying AI at scale ([JPMorganChase](https://www.jpmorganchase.com/), [BNY](https://www.bny.com/), [GoDaddy](https://www.godaddy.com/), [Lenovo](https://www.lenovo.com/), [Hitachi](https://www.hitachi.com/)). Integrators and resellers ([Accenture](https://www.accenture.com/), [WWT](https://www.wwt.com/), [SHI](https://www.shi.com/)). And roughly a dozen cost-management vendors ([Kion](https://kion.io/), [Yarken](https://www.yarken.com/), [Flexera](https://www.flexera.com/) and others).

None of them sets a token price.

Two absences. The first is the frontier labs: [OpenAI](https://openai.com/) and [Anthropic](https://www.anthropic.com/) are not members, and neither are [Google](https://cloud.google.com/), [Microsoft](https://www.microsoft.com/), [AWS](https://aws.amazon.com/), [NVIDIA](https://www.nvidia.com/), [Mistral](https://mistral.ai/) or [Cohere](https://cohere.com/). No organization that sets frontier model pricing is a member.

The second has had less attention. When the Linux Foundation [announced its intent](https://www.linuxfoundation.org/press/linux-foundation-announces-the-intent-to-launch-the-tokenomics-foundation-to-establish-open-standards-for-ai-cost-management) to form the foundation on June 3, it named twelve organizations that had "expressed initial support": Accenture, [Booking.com](https://www.booking.com/), Flexera, Google Cloud, [IBM](https://www.ibm.com/), JPMorganChase, [KPMG](https://kpmg.com/), Microsoft, [Oracle](https://www.oracle.com/), [Salesforce](https://www.salesforce.com/), [SAP](https://www.sap.com/) and [ServiceNow](https://www.servicenow.com/). Compare that to the August list. Google Cloud, Microsoft, Salesforce, KPMG and Booking.com are gone. Two months of stated support that did not convert into founding membership.

Coverage has described this differently. [CIO Dive](https://www.ciodive.com/news/foundation-tackle-ai-token-cost-management/822839/) wrote that the launch brings together "enterprises, hyperscalers, and frontier model developers," which the published roster does not show. [The New Stack](https://thenewstack.io/tokenomics-foundation/) ran it under the headline that the AI cost crisis has a watchdog, "just not the companies causing it."

## What the labs did

No frontier lab has publicly commented on the launch. I could not find a statement from OpenAI, Anthropic, Google or Microsoft, supportive or otherwise.

For comparison: in December 2025 the Linux Foundation launched the [Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation). Anthropic, OpenAI and [Block](https://block.xyz/) co-founded that one, with Google, AWS, Microsoft and [Cloudflare](https://www.cloudflare.com/) backing it. Anthropic donated [MCP](https://modelcontextprotocol.io/), and [OpenAI donated AGENTS.md](https://openai.com/index/agentic-ai-foundation/). Same convener, eight months earlier, full participation.

In the same window, both shipped first-party cost controls. OpenAI added spend controls and monthly credit caps to ChatGPT Enterprise on June 18. Anthropic shipped Claude Enterprise admin controls with model-level entitlements, spend alerts and an Admin API. Both give customers real visibility. Both live inside the vendor's own console, and the numbers they produce are not comparable across vendors.

## Has this ever worked

Measurement standards do bind suppliers, but historically only under one of three conditions.

**The supplier joins voluntarily**, because being comparable helps it compete. [SPEC](https://www.spec.org/) and [TPC](https://www.tpc.org/) both formed in 1988, SPEC out of a workstation vendor consortium that included HP, Sun and MIPS, TPC to benchmark transaction processing. Both stuck, in markets with no dominant player, because every vendor wanted a scoreboard it could win on.

It is also how [FOCUS](https://focus.finops.org/) worked. The [FinOps Foundation](https://www.finops.org/about/) formed in 2019 and joined the Linux Foundation in 2020. FOCUS was announced in 2023 and [reached 1.0 in June 2024](https://www.finops.org/insights/focus-1-0-available/), with AWS, Azure, Google Cloud and Oracle Cloud all shipping native FOCUS billing exports on the same day. Five years from foundation to spec, and it landed because the sellers were in the room. AWS was not even a FinOps sponsor in 2023.

**A regulator forces it.** Fuel economy labels, nutrition facts, telephone number portability. Nobody is regulating token billing.

**Buyers concentrate enough spend to make it a condition of sale.** In January 2017 P&G's Marc Pritchard [told the IAB](https://www.adexchanger.com/advertiser/pritchards-progress-pg-marketing-chief-impact-digital-ultimatums/) that Google and Facebook had until year end to accept [MRC](https://mediaratingcouncil.org/)-accredited third-party verification or lose the spend. Both agreed to audits. Facebook then audited served impressions first and took considerably longer on viewable impressions.

Two efforts that went the other way. The [Open Cloud Manifesto](https://www.theregister.com/2009/03/30/open_cloud_manifesto_in_out/) in March 2009 had thirty-six signatories with IBM at the center, and Amazon, Google, Microsoft and Salesforce all declined to sign. It did not lead anywhere. SNIA's [CDMI](https://www.snia.org/cdmi) became an ISO standard for cloud storage, S3 became the de facto one regardless, and CDMI later added S3 compatibility.

So the nearest successful precedent is the one this foundation is modeled on, and it met a condition this launch currently does not.

## Three tensions

**The buy side is standardizable. The sell side is not.** Allocation, tagging, unit economics, cost-to-serve, ROI definitions: all of that can be standardized without asking a lab for anything, and it is most of the day-to-day value. What cannot be standardized unilaterally is comparability. Tokenizers are proprietary and differ, so the same prompt is not the same token count across vendors. Pricing is multi-bucket by design: compare [Anthropic's](https://docs.claude.com/en/docs/about-claude/pricing) and [OpenAI's](https://platform.openai.com/docs/pricing) published rates and you get input, cached input, cache writes at different multipliers depending on TTL, output, and hidden reasoning tokens billed as output, with the buckets defined differently on each side. A schema can record all of that faithfully and still not let you compare two invoices.

**The standard may already exist.** [OpenTelemetry's GenAI semantic conventions](https://opentelemetry.io/blog/2026/genai-observability/) have carried `gen_ai.usage.input_tokens` and friends since 2024, and FOCUS is already extending into token spend. FinOps practitioner [Dvir Mizrahi](https://www.linkedin.com/pulse/lets-talk-tokenomics-foundation-dvir-mizrahi-uauzf) makes this case directly, asking why a FOCUS working group needs its own foundation, board and conference circuit, and concluding the motivation is "not technical. It's commercial." Worth weighing against how much of the membership sells cost tooling.

**Leverage runs the wrong way.** The advertising analogy is tempting but the economics invert. Facebook and Google needed advertiser money and had inventory to spare. The labs are supply constrained, and their biggest revenue lines are consumer subscriptions and coding seats rather than the enterprise API contracts these members hold. On most estimates Anthropic and OpenAI together hold something close to sixty percent of enterprise LLM API spend. Withholding budget is a weak threat when the queue is already full.

And underneath all three, the unit might simply be wrong. [Uber](https://www.uber.com/) burned its entire 2026 AI budget by April across roughly five thousand engineers, then [capped employees at $1,500 a month](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/). It had not failed to count tokens. It counted them fine. It had put engineers on Claude Code usage leaderboards, which is an incentive problem rather than a measurement one. Uber's COO Andrew Macdonald, on whether the spend connected to anything customers felt: ["That link is not there yet."](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/) Meanwhile per-token prices fell roughly eighty percent over the past year while total spend rose. That is [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox), and no telemetry schema touches it.

## Open questions

1. Does a measurement standard the suppliers ignore change any behavior, or does it mostly create a certification market?
2. Is there a buyer coalition anywhere with enough concentrated spend to make compliance a condition of sale, given that the labs are supply constrained?
3. If OTel and FOCUS already carry the schema, what does a separate foundation add beyond governance and a conference?
4. What exactly would a lab be conceding by joining? Per-token comparability helps whoever is cheapest at equal quality, which is a moving target. Is refusal strategy, or just nobody having asked yet?
5. Are we standardizing the wrong denominator? Cost per token is measurable and mostly solved. Value per decision is neither, and that is the number Uber actually needed.

## What I'm watching

Three markers, all falsifiable before the end of the year. Whether any frontier lab joins by the Amsterdam conference in September. Whether the FOCUS v1.5 token schema ships on the promised monthly cadence. And whether Google Cloud and Microsoft convert June's stated support into actual membership, or whether the June list stays the high-water mark.

I want this to work. Enterprises genuinely cannot answer what their AI spend bought, and someone should fix that. I just think the version that ships will describe your spending rather than discipline your suppliers, and those are very different products.
