---
title: "The Ultracustomization of Software"
summary: ""
description: ""
categories: []
tags: []
date: 2029-08-04
draft: true
---

Software has always been built once and shipped to everyone, because that was the only economics that worked. When building drops to near zero, that constraint disappears and the natural unit stops being the product and starts being the person. This is about what software looks like when everyone gets their own version, and what breaks when they do.

## Outline

- The old economics: one codebase, many users, and every feature a compromise between people who wanted different things. Settings pages are the fossil record of arguments nobody won.
- What changes: generating a variant per person becomes cheaper than negotiating a shared one. Personalization stops being a config layer and becomes the artifact itself.
- The spectrum, because "customization" hides three different things: configuring the same product, generating a variant of it, and the user building their own outright. They fail in different ways and are worth separating early.
- What it fixes. The compromise tax disappears. So does the roadmap fight over whose use case wins.
- What it breaks: no shared surface to document, support, or teach; no common ground between two people using "the same" tool; no reproducible bug reports; and a product whose behaviour nobody can describe, including the people who make it.
- The support and trust problem is the one I'd lead on. Every previous personalization wave got sold on delight and paid for in "it works differently on my machine."
- Where the line actually sits: which parts of a product must stay identical for everyone, and which are free to bend. That's the real design question, and it's a judgment call, not a technical one.
- Tension worth naming: this is the opposite answer to the same problem as feature slop. One says ship less to everyone, the other says ship something different to each. Both are responses to build cost collapsing, and I don't think they're reconcilable. Say so rather than pretending they are.

<!--
TODO:
- feature.webp
- link FUTURE-feature-slop once written; they're two answers to one problem and
  the pair is more interesting than either alone.
- avoid the obvious "AI will build your app for you" framing. The interesting
  part is the loss of a shared artifact, not the generation.
- find a real example. Dotfiles and browser extensions are the closest existing
  analogue: heavy personal customization plus a support story that never worked.
-->
