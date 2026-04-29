---
title: A Small Project's Gantt Chart with the Critical Path Highlighted
description: A Small Project's Gantt Chart with the Critical Path Highlighted
status: scaffold
library: vis-timeline
bloom_level: TBD
---

# A Small Project's Gantt Chart with the Critical Path Highlighted

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** vis-timeline

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: 'IS Project Management'](../../chapters/16-project-management/index.md).

```text
Type: interactive-infographic
**sim-id:** gantt-with-critical-path<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

A vis-timeline Gantt chart showing a 12-week IS project (a small CRM rollout) with twelve tasks: Charter Signed (milestone), Requirements Gathering, Vendor Selection, Data Mapping, Test Environment Setup, Configuration, Data Migration Build, User Acceptance Test, Training Materials, Training Delivery, Cutover, Go-Live (milestone). Dependencies shown as arrows; the critical path (Charter → Requirements → Vendor Selection → Configuration → Data Migration → UAT → Cutover → Go-Live) is rendered in a thick mascot-magenta line. Off-critical-path tasks (Test Environment Setup, Training Materials, Training Delivery) are rendered in mascot-emerald with their slack visualized as a faint trailing rectangle.

Color palette: critical-path bars in mascot-magenta, non-critical bars in mascot-emerald, milestones as gold diamonds, slack regions in faint coral, dependency arrows in slate-gray.

Interactivity: students can drag any task to a new start date and the schedule updates, showing whether the move pushes the project finish (a red flash if it does, green if it doesn't). A "compress schedule" challenge asks students to find the cheapest 2-week compression by adding resources to critical-path tasks. A toggle highlights the slack on every non-critical task to make the concept of "free time" visible.

Layout: full canvas width, height ~560px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can read a Gantt chart, identify the critical path, distinguish critical from non-critical tasks, and predict the schedule effect of moving any task.

Implementation: vis-timeline, deployed at `/information-systems/sims/gantt-with-critical-path/`.
```

## Related Resources

- [Chapter 16: 'IS Project Management'](../../chapters/16-project-management/index.md)
