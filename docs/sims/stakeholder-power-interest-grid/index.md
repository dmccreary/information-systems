---
title: The Stakeholder Power/Interest Grid
description: The Stakeholder Power/Interest Grid
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Stakeholder Power/Interest Grid

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** p5.js

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: 'IS Project Management'](../../chapters/16-project-management/index.md).

```text
Type: interactive-infographic
**sim-id:** stakeholder-power-interest-grid<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js 2x2 matrix with "Interest in Project" on the X axis and "Power to Affect Project" on the Y axis. The four quadrants are labeled Manage Closely (top-right), Keep Satisfied (top-left), Keep Informed (bottom-right), and Monitor (bottom-left). Pre-populated with twelve stakeholder dots from a sample IS project (e.g., CFO, end users, IT Director, vendor account manager, compliance officer, union steward, help desk lead, project sponsor, departmental power user, intern team, board of directors, external auditor).

Color palette: each quadrant tinted by its strategy — Manage Closely in mascot-emerald, Keep Satisfied in coral, Keep Informed in mascot-magenta tints, Monitor in slate-gray. Stakeholder dots colored by current attitude (champion=green, supporter=teal, neutral=gray, skeptic=amber, blocker=red).

Interactivity: students can drag stakeholder dots around to reposition them, and the suggested engagement strategy updates in a side panel. A "what if" toggle simulates an attitude shift over time, animating dots to show how a regulator's interest spikes after a public incident, or how a sponsor's power decays after a reorg. Clicking a dot reveals the stakeholder's role, concerns, and preferred communication cadence.

Layout: full canvas width, height ~520px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can place stakeholders on a power/interest grid, justify the placement, and select an appropriate engagement strategy for each quadrant.

Implementation: p5.js, deployed at `/information-systems/sims/stakeholder-power-interest-grid/`.
```

## Related Resources

- [Chapter 16: 'IS Project Management'](../../chapters/16-project-management/index.md)
