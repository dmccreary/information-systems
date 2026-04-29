---
title: The Waterfall Model
description: The Waterfall Model
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Waterfall Model

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
[Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md).

```text
Type: static-infographic
**sim-id:** waterfall-model<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js infographic showing the classic five-phase waterfall in a stair-step descending pattern from top-left to bottom-right: Requirements, Design, Implementation, Verification, Maintenance. Each phase is rendered as a labeled rectangle on its own ledge, with a curved arrow connecting it to the next ledge below — visually evoking water cascading down. A small dotted "feedback" arrow runs from each downstream phase back to its predecessor, drawn in a muted color to signal that backward movement is possible but expensive.

Color palette: blue gradient from sky-blue (Requirements) to deep navy (Maintenance), with a subtle wave pattern under each ledge. White label text. The two "discovery moments" where requirements typically change in real projects (mid-Design and mid-Verification) are marked with small warning icons.

Interactivity: hovering each phase reveals (a) typical activities in that phase, (b) typical artifacts produced, and (c) the most common reason projects stall there. A toggle switches between "pure waterfall" (no feedback arrows) and "modified waterfall" (feedback arrows visible) to illustrate how organizations actually use the model in practice.

Layout: full canvas width, height ~480px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Understanding): Students can describe each waterfall phase, identify its primary risk, and articulate the conditions under which waterfall is an appropriate method.

Implementation: p5.js, deployed at `/information-systems/sims/waterfall-model/`.
```

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
