---
title: DIKI Hierarchy Interactive Pyramid
description: DIKI Hierarchy Interactive Pyramid
status: scaffold
library: p5.js
bloom_level: TBD
---

# DIKI Hierarchy Interactive Pyramid

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
[Chapter 1: Foundations of Information Systems](../../chapters/01-foundations/index.md).

```text
Type: interactive-infographic
**sim-id:** diki-pyramid<br/>
**Library:** p5.js<br/>
**Status:** Specified

A four-level pyramid drawn in p5.js, drawn responsively to fill the available iframe width. From bottom to top, the four layers are labeled **Data**, **Information**, **Knowledge**, **Insight**, in that order. Bottom layer is widest (full canvas width minus padding) and shortest in height; each layer above is narrower; top "Insight" layer is smallest.

Color palette (light mode): Data = light steel blue, Information = medium teal, Knowledge = forest green, Insight = warm gold. Each layer has a 1px darker border and white label text centered horizontally.

Interactivity: when the user hovers over (or taps) a layer, a callout box slides out to the right of the pyramid showing:

- The layer name in bold
- A one-line definition
- A concrete example using a hospital-patient scenario:
  - Data: "98.6"
  - Information: "Patient Marisol Chen, oral temperature 98.6°F, 14:32 on April 28"
  - Knowledge: "Marisol's six consecutive normal readings indicate she meets the discharge criterion"
  - Insight: "Patients matching Marisol's discharge profile have a 15% higher 72-hour readmission rate when transportation is not pre-confirmed before 3pm"

Below the pyramid, a single sentence reads: "Most IS projects fail at a layer transition. Which layer are you actually serving?"

A small footer note on the diagram reads: "Older texts call this the DIKW Hierarchy with *Wisdom* at the top; modern data-science practice prefers *Insight* because it names a deliverable rather than a virtue."

Layout: pyramid centered, callout box appears to the right at desktop widths and below at narrow widths (responsive). Canvas resizes on window resize events. The setup() function calls updateCanvasSize() as its first step. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Understanding): Students can correctly classify a given example into Data, Information, Knowledge, or Insight and explain why.

Implementation: p5.js, single `main.html`, accompanying `index.md` doc, deployed at `/sims/diki-pyramid/`.
```

## Related Resources

- [Chapter 1: Foundations of Information Systems](../../chapters/01-foundations/index.md)
