---
title: Six-Component Model of an Information System
description: Six-Component Model of an Information System
status: scaffold
library: vis-network
bloom_level: TBD
---

# Six-Component Model of an Information System

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
[Chapter 1: Foundations of Information Systems](../../chapters/01-foundations/index.md).

```text
Type: interactive-infographic
**sim-id:** six-component-model<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram with six labeled nodes arranged in a hexagon: **Hardware**, **Software**, **Network**, **Data**, **User**, **Business Process**. Each node is colored by category — Hardware (slate gray), Software (lime green), Network (steel blue), Data (gold), User (warm coral), Business Process (lavender). Each node has an icon (Material Design Icons): hardware = `mdi-server`, software = `mdi-application-braces`, network = `mdi-lan`, data = `mdi-database`, user = `mdi-account`, business process = `mdi-sitemap`.

All six nodes are connected to each of the other five (a complete graph K6), but edges have a slight y-offset (e.g., 480 → 490 baseline) to avoid the vis-network horizontal-edge label rendering bug. Edges are unlabeled by default, light gray, 1px.

Interactivity: when a user clicks a node, a side panel reveals (a) a one-sentence definition of that component, (b) a concrete example from a hospital admission scenario, and (c) the question *"What breaks if this component is missing?"* with a one-line answer. Example for "User": "If the nurse cannot or will not chart accurately, the data layer becomes unreliable and every dashboard above it lies."

A toggle below the diagram switches between three example scenarios: hospital admission, loan approval, university course registration. The same six components remain; only the side-panel descriptions change.

Layout: responsive, fills available iframe width, height ~500px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Given a real-world organizational task, students can identify which entity in the scenario plays each of the six roles.

Implementation: vis-network, deployed at `/sims/six-component-model/`.
```

## Related Resources

- [Chapter 1: Foundations of Information Systems](../../chapters/01-foundations/index.md)
