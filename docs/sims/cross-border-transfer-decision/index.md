---
title: A Cross-Border Data Flow Decision Tree
description: A Cross-Border Data Flow Decision Tree
status: scaffold
library: vis-network
bloom_level: TBD
---

# A Cross-Border Data Flow Decision Tree

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** vis-network

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 15: 'Privacy, Compliance, and Regulation'](../../chapters/15-privacy-compliance/index.md).

```text
Type: interactive-infographic
**sim-id:** cross-border-transfer-decision<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network decision tree walking through the question: "I want to transfer personal data from the EU to country X — what do I do?" The root node poses the question; the first branch tests "Is X covered by an adequacy decision?" with a yes-path leading directly to a green "Transfer permitted" terminal node and a no-path branching to "Can the transfer rely on Binding Corporate Rules?" The tree continues through SCCs (which require a Transfer Impact Assessment node that itself branches based on the destination country's surveillance laws), supplementary measures (encryption with EU-held keys), and finally derogations as a last resort. Schrems II is rendered as a callout node attached to the SCC branch, explaining why TIAs were added.

Color palette: green terminal nodes for permitted transfers, amber for "permitted with conditions," red for "do not transfer." Schrems II callout in mascot-magenta. Decision diamonds in slate-blue.

Interactivity: hovering each branch reveals the legal basis (article number, case citation). A "scenario picker" preloads common transfer scenarios — US cloud provider, Indian outsourcer, intra-group US-to-Germany transfer — and animates the path the decision takes. A toggle highlights the supplementary measures that would mitigate the highest-risk paths.

Layout: hierarchical top-to-bottom, full canvas width, height ~600px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can walk through the cross-border transfer decision tree for a realistic scenario, identify the correct legal mechanism, and articulate when a Transfer Impact Assessment is required.

Implementation: vis-network, deployed at `/information-systems/sims/cross-border-transfer-decision/`.
```

## Related Resources

- [Chapter 15: 'Privacy, Compliance, and Regulation'](../../chapters/15-privacy-compliance/index.md)
