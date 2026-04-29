---
title: The Technical Debt Feedback Loop
description: The Technical Debt Feedback Loop
status: scaffold
library: vis-network
bloom_level: TBD
---

# The Technical Debt Feedback Loop

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
**sim-id:** tech-debt-feedback-loop<br/>
**Library:** vis-network<br/>
**Status:** Specified

A causal-loop diagram in vis-network showing five nodes arranged in a circle: Technical Debt, Development Velocity, Schedule Pressure, Shortcut Rate, and Defect Rate. Edges between nodes carry polarity labels (+/-) indicating whether one variable increases or decreases another. The loop forms a clear reinforcing cycle: Technical Debt (+) → reduces Development Velocity (-) → which increases Schedule Pressure (+) → which increases Shortcut Rate (+) → which increases Technical Debt (+). A second loop shows Technical Debt → Defect Rate → Schedule Pressure feeding the same dynamic. Edges drawn with slight y-offset (480 to 490) to ensure label rendering on horizontal segments.

Color palette: feedback edges in coral for reinforcing relationships, mascot-emerald for any balancing relationships introduced by the "leverage point" toggle. Node fill follows the standard book palette.

Interactivity: a "leverage point" toggle introduces three dampening interventions — Protected Refactor Capacity, Debt Visibility, Engineering Leadership Cover — each adding a balancing edge that reduces the relevant flow. Watching the toggle turn the doom loop into a controlled system is the pedagogical payoff. A side panel explains each intervention.

Layout: circular, height ~520px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can identify a reinforcing feedback loop, articulate why it produces compounding cost, and name three structural interventions that break it.

Implementation: vis-network, deployed at `/information-systems/sims/tech-debt-feedback-loop/`.
```

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
