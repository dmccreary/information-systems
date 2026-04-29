---
title: A Value Stream Map of an Invoice-Approval Process
description: A Value Stream Map of an Invoice-Approval Process
status: scaffold
library: p5.js
bloom_level: TBD
---

# A Value Stream Map of an Invoice-Approval Process

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
[Chapter 5: Business Process Management](../../chapters/05-bpm/index.md).

```text
Type: interactive-infographic
**sim-id:** value-stream-map-invoice-approval<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js value stream map showing an invoice-approval process from end to end: invoice received → AP-clerk data entry → manager approval → director approval (over $10K) → AP-clerk payment scheduling → payment issued. Each process box is rendered as a labeled rectangle with three sub-fields (cycle time, change-over time, uptime). Between each pair of process boxes is an inventory triangle showing the typical queue depth (e.g., "23 invoices waiting"). At the bottom of the canvas runs a time ladder: the upper rung shows non-value-added time (the wait time at each queue), the lower rung shows value-added time (the actual processing time). A summary box on the right reports total lead time, total value-added time, and the value-added ratio (typically 2-4%). Information flows (manual vs electronic) are shown above the process boxes with appropriate arrow styles.

Color palette: process boxes in mascot-emerald, inventory triangles in coral (red triangles to evoke "stop, pile-up here"), value-added time in green on the timeline, non-value-added time in red. Information flow arrows in slate-gray (manual = jagged line, electronic = lightning bolt).

Interactivity: hovering each process box shows the activity description and the real-world cycle time. A "to-be" toggle redraws the map after Lean improvements (e.g., eliminating the duplicate-approval step, batching reviews, auto-approving small invoices) and shows the updated value-added ratio. The dramatic before/after comparison — typically a jump from 3% to 25% value-added ratio — is the pedagogical payoff. A "wait time" slider lets students stress-test the model under different queue conditions to see how lead time explodes when WIP is unbounded.

Layout: full canvas width, height ~520px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can read a value stream map, compute a value-added ratio, identify the largest sources of waste, and propose a sequence of Lean interventions that improves the ratio.

Implementation: p5.js, deployed at `/information-systems/sims/value-stream-map-invoice-approval/`.
```

## Related Resources

- [Chapter 5: Business Process Management](../../chapters/05-bpm/index.md)
