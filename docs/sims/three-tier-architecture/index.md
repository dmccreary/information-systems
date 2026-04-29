---
title: Three-Tier Architecture with Request Flow
description: Three-Tier Architecture with Request Flow
status: scaffold
library: p5.js
bloom_level: TBD
---

# Three-Tier Architecture with Request Flow

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
[Chapter 3: Information Systems Architecture](../../chapters/03-architecture/index.md).

```text
Type: interactive-infographic
**sim-id:** three-tier-architecture<br/>
**Library:** p5.js<br/>
**Status:** Specified

A vertical three-layer diagram drawn in p5.js, drawn responsively to fill the available iframe width. From top to bottom, the three layers are labeled **Presentation Tier**, **Application Tier**, and **Data Tier**. Each layer is rendered as a rounded rectangle running the full canvas width, with a clear label and a representative icon (browser/phone for presentation, gears for application, cylinder for data).

Color palette (light mode): Presentation = soft sky blue, Application = medium teal, Data = warm gold. Each layer has a 1px darker border and dark text. Layer separators are dashed gray lines.

Interactivity: when the user clicks the **Trace a Request** button, an animated dot travels from the presentation tier down through the application tier to the data tier (request path), pauses, and then travels back up (response path). At each stop, a small callout shows what that tier does for this request: e.g., presentation = "User clicks 'Apply for Loan'", application = "Validate inputs, run eligibility rules", data = "Fetch credit history, write application record."

A toggle switches between three example requests — view a product page, submit a loan application, generate a monthly report — so the same architecture is shown handling different workloads.

Layout: layers stacked vertically, full width; callout panel appears to the side at desktop widths and below at narrow widths. Canvas resizes on window resize. The setup() function calls updateCanvasSize() as its first step. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Understanding): Students can identify which tier owns a given responsibility (rendering a chart, validating a discount rule, storing a customer record).

Implementation: p5.js, single `main.html`, accompanying `index.md` doc, deployed at `/sims/three-tier-architecture/`.
```

## Related Resources

- [Chapter 3: Information Systems Architecture](../../chapters/03-architecture/index.md)
