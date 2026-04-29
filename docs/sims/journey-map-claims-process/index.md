---
title: An Enterprise Journey Map for a Claims Process
description: An Enterprise Journey Map for a Claims Process
status: scaffold
library: p5.js
bloom_level: TBD
---

# An Enterprise Journey Map for a Claims Process

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
[Chapter 18: 'Human-Computer Interaction and Emerging Topics'](../../chapters/18-hci-and-emerging/index.md).

```text
Type: interactive-infographic
**sim-id:** journey-map-claims-process<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js journey-map visualization showing a customer's end-to-end experience filing an insurance claim. The horizontal axis is divided into five stages: Incident, Report, Assess, Repair, Settle. Five horizontal swim-rows display: (1) the customer's *actions* at each stage, (2) the *touchpoints* used (phone, mobile app, web portal, email, in-person), (3) the customer's *thoughts* (rendered as speech bubbles), (4) an *emotional curve* drawn as a continuous line plot with smiley/frowney face markers at peaks and troughs, and (5) *pain points and opportunities* as colored chips below each stage.

Color palette: stage headers in mascot-emerald with white text, touchpoint icons in slate-blue, the emotional curve in coral with high points in green and low points in magenta, opportunity chips in mascot-emerald and pain-point chips in coral.

Interactivity: hovering a stage highlights all five rows for that stage and dims the others. A "switch persona" toggle lets students view the same journey for two contrasting personas (Maria the busy parent vs. Frank the retiree without smartphone) and observe how the emotional curve and pain points shift dramatically. A "show systems" toggle overlays which back-end IS systems are involved at each touchpoint, revealing the integration seams that produce the wait times the customer is feeling.

Layout: full canvas width, height ~600px. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can read a journey map, identify the lowest emotional points, link those points to underlying system gaps, and propose interventions targeted at the highest-pain stages.

Implementation: p5.js, deployed at `/information-systems/sims/journey-map-claims-process/`.
```

## Related Resources

- [Chapter 18: 'Human-Computer Interaction and Emerging Topics'](../../chapters/18-hci-and-emerging/index.md)
