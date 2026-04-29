---
title: EVM Cost and Schedule Variance Visualization
description: EVM Cost and Schedule Variance Visualization
status: scaffold
library: Chart.js
bloom_level: TBD
---

# EVM Cost and Schedule Variance Visualization

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** Chart.js

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: 'IS Project Management'](../../chapters/16-project-management/index.md).

```text
Type: interactive-infographic
**sim-id:** evm-variance-visualization<br/>
**Library:** Chart.js<br/>
**Status:** Specified

A Chart.js multi-line chart with three curves over a 12-month project timeline: Planned Value (PV) in slate-gray, Earned Value (EV) in mascot-emerald, and Actual Cost (AC) in mascot-magenta. The vertical gap between EV and PV at any date is the schedule variance (highlighted as a coral band when EV is below PV). The vertical gap between AC and EV is the cost variance (highlighted as a red band when AC is above EV). A side panel computes and displays CV, SV, CPI, SPI, and EAC for the date currently selected by a draggable cursor.

Color palette: PV in slate-gray, EV in mascot-emerald, AC in mascot-magenta, schedule-variance band in coral, cost-variance band in red, EAC forecast line in dashed amber.

Interactivity: students can drag the cursor along the timeline to see the metrics at any date. Three preset scenarios — "ahead and under budget", "behind but under budget", "on schedule but over budget" — let students see how the four metrics differ across project health states. A challenge mode asks students to predict EAC and CPI from the chart before revealing the answer.

Layout: full canvas width, height ~520px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can compute CV, SV, CPI, SPI, and EAC from PV, EV, and AC; interpret each metric; and diagnose project health from the EVM chart.

Implementation: Chart.js, deployed at `/information-systems/sims/evm-variance-visualization/`.
```

## Related Resources

- [Chapter 16: 'IS Project Management'](../../chapters/16-project-management/index.md)
