---
title: Build vs Buy vs SaaS Decision Flow
description: Build vs Buy vs SaaS Decision Flow
status: scaffold
library: vis-network
bloom_level: TBD
---

# Build vs Buy vs SaaS Decision Flow

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
[Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md).

```text
Type: interactive-infographic
**sim-id:** build-buy-saas-decision<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network decision-tree diagram laid out top-to-bottom. The root question at the top is "Is this capability a strategic differentiator?" Branches lead to follow-up questions: "Does a mature SaaS product cover 80%+ of the requirements?", "Is data sovereignty or regulation a constraint?", "Is the capability core to ongoing competitive advantage?", "Will the capability change frequently?" Leaf nodes recommend Build, Buy, or SaaS, each with a brief rationale.

Color palette: question nodes in slate-gray, decision branches in teal/amber, terminal Build leaves in mascot-emerald, Buy leaves in deep blue, SaaS leaves in coral. To work around the vis-network horizontal-edge label rendering bug, edges use a slight y-offset (e.g., 480 to 490) where labels are present.

Interactivity: clicking any node opens a side panel showing (a) representative real-world examples for that path (e.g., "Example: Netflix recommendation engine → Build"), (b) the most common failure mode of choosing this path inappropriately (e.g., "Building commodity capabilities you should have bought"), and (c) the typical cost-curve shape over five years.

Layout: hierarchical, top-down. Canvas resizes on window resize, height ~600px.

Learning objective (Bloom: Evaluating): Given a capability description, students can walk the decision tree, justify their recommendation, and name the failure mode of the alternatives.

Implementation: vis-network, deployed at `/information-systems/sims/build-buy-saas-decision/`.
```

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
