---
title: The Scrum Sprint Cycle
description: The Scrum Sprint Cycle
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Scrum Sprint Cycle

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
Type: interactive-infographic
**sim-id:** scrum-sprint-cycle<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js circular diagram showing the Scrum sprint cycle. The outer ring depicts the sprint as a closed loop, with sprint planning at the top (12 o'clock), the development work spanning the right side, sprint review at the bottom (6 o'clock), and sprint retrospective just past it. The inner ring shows the daily standup repeating at each "day" tick around the loop. The product backlog feeds into sprint planning from the left; the potentially shippable increment exits from sprint review on the right.

Color palette: warm orange-to-amber for sprint events, soft green for development work, slate-gray for backlog and increment artifacts. Mascot-emerald accent on the retrospective to highlight it as the learning moment.

Interactivity: a "play" button advances a marker around the cycle, pausing at each event to display (a) participants, (b) duration, (c) primary output, and (d) the most common dysfunction associated with that event (e.g., "Standup turns into status theater"). A speed slider controls the animation. A toggle lets the user switch between 1-week, 2-week, and 4-week sprint cadences, which redistributes the day ticks accordingly.

Layout: square aspect ratio, full canvas width, height ~520px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Applying): Students can identify each Scrum event by its participants, output, and timebox, and explain how the events compose into nested feedback loops.

Implementation: p5.js, deployed at `/information-systems/sims/scrum-sprint-cycle/`.
```

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
