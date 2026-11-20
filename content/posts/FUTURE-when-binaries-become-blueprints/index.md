---
title: "When Binaries Become Blueprints"
summary: "A working draft about REA, reverse engineering, and what changes when software can be inspected and recreated with an AI agent."
description: ""
categories: []
tags: [software, ai, reverse-engineering]
date: 2029-08-11
draft: true
---

<!-- WORKING PLACEHOLDER: this is an outline and research map, not finished prose. Replace the prompts with your own argument and examples. -->

The interesting claim is not that an AI can magically turn any desktop app into a perfect copy. REA gives an agent a way to inspect software that it can access, including packaged applications and native binaries, and to use reverse-engineering tools to trace how selected behavior works. That makes investigation and partial reconstruction easier to attempt. It does not make every app reproducible, nor does it erase the hard parts: hidden services, data, edge cases, quality, maintenance, and permission.

## The question

If a useful feature can be understood from a program people can run, how much protection does “we do not publish the source” still provide? And if rebuilding a feature becomes cheaper, what should happen to the boundary between inspiration, interoperability, competition, and copying?

## Outline

### Introduction: the demo that changes the question

- Open with REA and a concrete demonstration or case study. Pick one, describe exactly what was inspected and what was reconstructed.
- Avoid the bigger claim that anyone can now remake every desktop app from its binary. The evidence supports a narrower and more interesting claim: agents can make some reverse-engineering tasks more accessible and can help recover particular behaviors.
- Personal reaction to add: what felt surprising, exciting, or unsettling when you first saw it?

### What is going on

- Explain the pipeline in plain language: an agent asks questions, REA connects it to analysis tools, those tools inspect artifacts or behavior, and the agent uses the evidence to explain or implement a bounded feature.
- Distinguish the target types: Electron or JavaScript bundles may expose readable modules and application structure; native binaries may yield strings, symbols, assembly, pseudocode, and references, depending on the binary and analysis engine.
- A binary is not the original source. Names and structure may be missing, optimized away, obfuscated, or difficult to infer. An agent's explanation is a hypothesis that needs checking against evidence and behavior.
- REA's own showcased examples are bounded: tracing Notion's clipboard path, recovering one calculation from an old game, and analyzing an authenticator algorithm from its released APK. They are not whole-product replicas.
- Describe where the agent still needs a human: choosing the right question, interpreting results, testing behavior, deciding what is appropriate to build.

### What we get

- Lower cost to understand undocumented behavior, learn from old or abandoned software, debug compatibility, recover a small algorithm, or build an interoperable implementation.
- More leverage for independent developers and maintainers who could not previously justify weeks of specialist reverse engineering.
- A possible shift in product advantage: durable value may rely less on hidden implementation details, and more on trust, service quality, data, distribution, support, and the ability to keep improving.
- A provocation, not a conclusion: if users can build a tool that fits their workflow from a feature they already use, maybe some software demand was for the behavior, not the vendor's entire product.

### What we lose or risk

- The boundary between learning from behavior and reproducing protected expression is real. The legal rules vary by jurisdiction, purpose, access method, license, and what is copied. Keep this section cautious and source it carefully, rather than declaring reverse engineering simply legal or illegal.
- Security and privacy: analysis can reveal secrets or sensitive implementation details; analyzing untrusted binaries can also expose the researcher to risk. What should be analyzed locally, and what evidence should never be uploaded?
- A working clone is not equivalent to a dependable product. Compatibility, accessibility, updates, security fixes, support, and trust still have to come from somewhere.
- The original software's creators may lose control over how their work is reused, while users may gain the ability to escape a vendor's roadmap or abandonment. Sit with both sides.
- Ask whether lower reconstruction costs create more experimentation, more disposable clones, or both.

### Conclusion

- Return to the opening example and state the actual change without hype: reverse engineering is not new; agent interfaces can make some of its workflows easier to direct and repeat.
- The central question may be less “can an agent copy an app?” and more “who gets to learn from software, what may they carry forward, and who is responsible for what they build?”
- End with your own view of where you would draw the line.

## Research notes and references

- **REA source repository:** [morluto/rea](https://github.com/morluto/rea). Read the current README and relevant guides before finalizing claims. REA describes itself as an MCP interface to reverse-engineering workflows and lists different capabilities and prerequisites by artifact type.
- **REA case studies:** [REA showcases](https://rea.tools/showcase/). Useful bounded examples: [Notion clipboard behavior](https://rea.tools/showcase/notion/), [DX-Ball sound-pan calculation](https://rea.tools/showcase/dx-ball/), and [Aegis authenticator code generation](https://rea.tools/showcase/aegis/). Verify the exact scope and validation in each case study.
- **Software Engineering Institute, CERT:** [Binary Analysis](https://www.sei.cmu.edu/our-work/software-security/). Background for explaining static and dynamic analysis. Add a more directly relevant primary technical reference after choosing the example.
- **EU Software Directive, Directive 2009/24/EC:** [EUR-Lex text](https://eur-lex.europa.eu/eli/dir/2009/24/oj). Relevant provisions include lawful use, decompilation for interoperability, and limits on those exceptions. Check current consolidated text and applicability before describing it.
- **US Copyright Office, Section 1201 rulemaking:** [Exemptions to Prohibition on Circumvention of Copyright Protection Systems](https://www.copyright.gov/1201/). Rulemaking exemptions are specific and time-bounded. Do not imply a blanket right to reverse engineer or copy software.
- **Electronic Frontier Foundation:** [Coders' Rights Project Reverse Engineering FAQ](https://www.eff.org/issues/coders/reverse-engineering-faq). A non-lawyer overview of US issues, including copyright, contracts, trade secrets, and anti-circumvention. Pair with primary law, and label it US-specific.

## Questions to answer in the next draft

- Which exact REA demo prompted this piece, and what did it actually reproduce?
- Is the point about desktop software specifically, or about the growing accessibility of reverse engineering more broadly?
- What would you personally want to rebuild, and what would feel like crossing a line?
- Does this change software competition, or mostly change who can afford to investigate how software works?
- Add one concrete story from your own experience before making the conclusion sound settled.

<!--
TODO:
- Replace the placeholder summary and title if the argument changes.
- Recheck repository, README, showcases, and legal sources on the day this is developed further. REA and applicable law can change.
- Add citations in the body at claims, not just this research list.
- Include a clear caveat that this is not legal advice if making legal claims.
- Do not publish until Nuno has rewritten the outline in his own words and reviewed the claims.
-->
