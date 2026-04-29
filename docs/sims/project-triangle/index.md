---
title: The Project Triangle (Scope, Time, Cost — and Quality in the Middle)
description: The Project Triangle (Scope, Time, Cost — and Quality in the Middle)
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Project Triangle (Scope, Time, Cost — and Quality in the Middle)

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
**sim-id:** project-triangle<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js interactive triangle with three sides labeled Scope, Time, and Cost, and a quality indicator at the center. Three sliders below the canvas let students set the locked sides; whenever two are locked, the third one's slider moves freely, and the quality indicator in the middle visibly degrades when the student tries to lock all three. A small commentary panel narrates the tradeoff in plain language ("You locked scope and time, so cost has to rise — adding 2 more developers").

Color palette: locked sides in mascot-emerald, flexing side in coral, quality indicator color-shifting from green to amber to red as it degrades.

Interactivity: students can drag any vertex to expand or contract the triangle and see how the others must respond. A "real project" mode loads three preset scenarios (a fixed-bid contract, a startup MVP, a regulatory deadline project) and asks the student which side they predict will flex.

Layout: full canvas width, height ~480px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Evaluating): Students can apply the project triangle to a real scenario, identify which constraints are fixed, predict which dimension must flex, and articulate the quality consequences of trying to fix all three.

Implementation: p5.js, deployed at `/information-systems/sims/project-triangle/`.
```

## Related Resources

- [Chapter 16: 'IS Project Management'](../../chapters/16-project-management/index.md)
