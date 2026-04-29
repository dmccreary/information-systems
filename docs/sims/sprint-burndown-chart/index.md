---
title: A Sprint Burndown Chart (Ideal vs Actual)
description: A Sprint Burndown Chart (Ideal vs Actual)
status: scaffold
library: Chart.js
bloom_level: TBD
---

# A Sprint Burndown Chart (Ideal vs Actual)

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
**sim-id:** sprint-burndown-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

A Chart.js line chart showing a 10-day sprint with two lines: an ideal burndown (a straight diagonal from 50 story points on day 0 to 0 on day 10, in dashed slate-gray) and an actual burndown (a real-looking jagged line that plateaus on day 3 due to a blocked story, drops sharply on day 5 when it unblocks, ticks upward on day 7 when scope is added mid-sprint, and ends at 8 points remaining on day 10 — a missed sprint goal).

Color palette: ideal line in slate-gray dashed, actual line in mascot-magenta solid, scope-added events marked with coral upward arrows, completed-story events marked with mascot-emerald downward steps.

Interactivity: students can drag the actual line at each day to simulate different scenarios and see whether the sprint goal is met. A "what-if" toggle adds an overlay showing the velocity-based forecast for the next sprint based on the current sprint's outcome. A second chart shows team velocity over the last six sprints with a trendline.

Layout: full canvas width, height ~480px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can read a burndown chart, distinguish ideal from actual, identify scope-change events, and forecast the next sprint's likely outcome from velocity history.

Implementation: Chart.js, deployed at `/information-systems/sims/sprint-burndown-chart/`.
```

## Related Resources

- [Chapter 16: 'IS Project Management'](../../chapters/16-project-management/index.md)
