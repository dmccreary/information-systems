---
title: The ERP Implementation Timeline with Cutover
description: The ERP Implementation Timeline with Cutover
status: scaffold
library: p5.js
bloom_level: TBD
---

# The ERP Implementation Timeline with Cutover

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
[Chapter 13: 'Enterprise Systems'](../../chapters/13-enterprise-systems/index.md).

```text
Type: interactive-infographic
**sim-id:** erp-implementation-timeline<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js horizontal Gantt-style timeline showing a representative 24-month ERP implementation broken into the seven phases (Strategy/Selection, Discovery/Design, Build/Configure, Test, Train, Cutover, Hypercare). Each phase is a colored bar of proportional length. Overlaid on the timeline is the *cutover plan* itself, expanded as a 96-hour window in the middle of the cutover phase: a vertical zoom showing the hour-by-hour activities (freeze legacy systems → final extract → data migration → reconciliation → smoke tests → go/no-go decision → user enablement → first transactions → hypercare standby).

Below the main timeline, a parallel "rollout strategy" lane lets students switch between Big Bang (single cutover bar at month 22) and Phased (three smaller cutover bars at months 14, 18, and 24, each covering a region or business unit). A "show interim integration" toggle in phased mode draws temporary integration arrows between the on-old-system and on-new-system populations.

Color palette: phase bars in mascot-emerald with darker shades for the more risk-bearing phases; cutover window in coral with amber for the go/no-go decision point; hypercare in soft-blue with a "support hotline" icon. Interim-integration arrows in dashed slate-gray.

Interactivity: hovering each phase shows typical duration, deliverables, and the most common failure modes. A "what if we skip testing" button compresses the timeline and shows in red the cutover failures that result. A "post-ERP review" marker appears at month 30 (six months after go-live) showing what the post-implementation audit typically covers.

Layout: full canvas width, height ~620px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can describe the phases of an ERP implementation, identify the cutover window, contrast big-bang and phased rollout strategies on the same timeline, and explain why testing and hypercare are non-negotiable.

Implementation: p5.js, deployed at `/information-systems/sims/erp-implementation-timeline/`.
```

## Related Resources

- [Chapter 13: 'Enterprise Systems'](../../chapters/13-enterprise-systems/index.md)
