---
title: Cross-Border Data Transfer Decision Tree
description: An interactive GDPR decision tree for cross-border personal-data transfers, including adequacy decisions, BCRs, SCCs with Transfer Impact Assessments, supplementary measures, and Article 49 derogations.
image: /sims/cross-border-transfer-decision/cross-border-transfer-decision.png
og:image: /sims/cross-border-transfer-decision/cross-border-transfer-decision.png
twitter:image: /sims/cross-border-transfer-decision/cross-border-transfer-decision.png
status: implemented
library: vis-network
bloom_level: Apply
social:
   cards: false
---

# Cross-Border Data Transfer Decision Tree

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Cross-Border Transfer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

When you transfer personal data **out of the EU**, GDPR forces you down a decision tree. This MicroSim walks the full path: adequacy decisions, Binding Corporate Rules, Standard Contractual Clauses + Transfer Impact Assessment (the **Schrems II** layer), supplementary measures, and Article 49 derogations as a last resort.

Pick one of three preloaded scenarios to animate the path:

- **EU → US cloud provider** ends in *permitted with safeguards* after supplementary measures
- **EU → Indian outsourcer** ends in *DO NOT TRANSFER*
- **EU → UK intra-group** ends in *permitted under adequacy*

### How to Use

1. **Pick a scenario** to watch the tree highlight the correct path
2. **Click any node** for the legal basis and case-law reference
3. **Read the Schrems II callout** — that's why TIAs exist on the SCC branch

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/cross-border-transfer-decision/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Walk the cross-border transfer decision tree for a realistic scenario
2. Identify when a Transfer Impact Assessment is required and why
3. Distinguish adequacy from BCRs from SCCs from derogations
4. Articulate the impact of *Schrems II* on routine US-bound transfers

### Suggested Activities

1. **Scenario Walk (10 min)** — Run all three scenarios; record the legal basis at each leaf
2. **Apply Your Own (15 min)** — Pick a real cloud service the school uses; walk it through the tree
3. **Schrems II Reflection (5 min)** — In one paragraph: how did Schrems II change everyday transfers?

### Assessment

- Match a scenario to its correct GDPR mechanism
- Explain why an adequacy decision makes downstream paperwork unnecessary
- Defend or challenge the use of Article 49 derogations as a routine mechanism

## References

- Regulation (EU) 2016/679 — General Data Protection Regulation, Articles 44-49.
- Court of Justice of the EU, *Schrems II* (Case C-311/18, 2020).
- EDPB (2021). *Recommendations on Supplementary Measures*.

## Related Resources

- [Chapter 15: Privacy, Compliance, and Regulation](../../chapters/15-privacy-compliance/index.md)
