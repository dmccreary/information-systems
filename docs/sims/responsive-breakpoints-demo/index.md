---
title: Mobile-First Responsive Breakpoints
description: Mobile-First Responsive Breakpoints
status: scaffold
library: p5.js
bloom_level: TBD
---

# Mobile-First Responsive Breakpoints

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
**sim-id:** responsive-breakpoints-demo<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js interactive demo showing how a single layout responds to changing viewport width. A simulated browser frame at the top of the canvas can be dragged-resized horizontally between 320px and 1920px. The content inside the frame contains a header, a navigation bar, a hero image, three content cards, and a footer. As the user drags the resize handle, the layout reorganizes at four breakpoints: at <600px, the navigation collapses to a hamburger menu and the content cards stack vertically; at 600-900px, the cards arrange in two columns; at 900-1200px, three columns appear with a side rail; at >1200px, a fourth column adds a marketing module. A breakpoint indicator on the side highlights which breakpoint is currently active.

Color palette: viewport frame in slate-gray, content blocks in mascot-emerald and coral with white text, breakpoint markers in mascot-magenta. The active breakpoint is highlighted with a ring.

Interactivity: the resize handle is the primary control. A "show breakpoint code" toggle reveals the underlying CSS media queries. A "device preset" dropdown jumps the viewport to common device widths (iPhone SE, iPad, MacBook, 4K monitor) so students see the layout at canonical screen sizes.

Layout: full canvas width, height ~620px. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Understanding): Students can describe what a responsive breakpoint is, identify the canonical breakpoints in modern web design, and explain why a mobile-first approach produces simpler, more maintainable layouts than a desktop-first approach.

Implementation: p5.js, deployed at `/information-systems/sims/responsive-breakpoints-demo/`.
```

## Related Resources

- [Chapter 18: 'Human-Computer Interaction and Emerging Topics'](../../chapters/18-hci-and-emerging/index.md)
