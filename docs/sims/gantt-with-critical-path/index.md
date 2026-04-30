---
title: Gantt Chart with Critical Path Highlighted
description: An interactive 12-week Gantt chart for a CRM rollout with the critical path highlighted in magenta, non-critical tasks in emerald, and a toggle to visualize slack.
image: /sims/gantt-with-critical-path/gantt-with-critical-path.png
og:image: /sims/gantt-with-critical-path/gantt-with-critical-path.png
twitter:image: /sims/gantt-with-critical-path/gantt-with-critical-path.png
status: implemented
library: vis-timeline
bloom_level: Analyze
social:
   cards: false
---

# Gantt Chart with Critical Path Highlighted

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Gantt MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This MicroSim shows a small **CRM rollout project** as a 12-week Gantt chart with twelve tasks across twelve swim lanes. The **critical path** — the chain of tasks where any delay slips the entire Go-Live — is rendered in **mascot-magenta**. Tasks with slack (the freedom to slip without slipping the project) are rendered in **mascot-emerald**, and the slack itself can be revealed as a faint coral trailing region.

### How to Use

1. **Drag any task bar** to a new start date to see whether the move pushes the project finish
2. Click **Show Slack on Non-Critical Tasks** to reveal each task's free time
3. Click **Reset Schedule** to undo your changes
4. Watch the status message: green when the project still finishes on day 84, magenta when it slips

### Critical Path

The eight critical-path tasks (in order):

1. Charter Signed (milestone)
2. Requirements Gathering (2 weeks)
3. Vendor Selection (2 weeks)
4. Configuration (3 weeks)
5. Data Migration Build (2 weeks)
6. UAT (2 weeks)
7. Cutover (1 week)
8. Go-Live (milestone)

The three off-critical-path tasks — Test Environment Setup, Training Materials, and Training Delivery — each have slack, meaning they can slip a few days without affecting Go-Live.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/gantt-with-critical-path/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Read a Gantt chart and identify task durations and dependencies
2. Distinguish critical-path tasks from non-critical tasks by their effect on project finish
3. Predict the schedule effect of moving any task by a given number of days
4. Explain why "slack" matters and where to find resources to compress the critical path

### Suggested Activities

1. **Critical Path ID (5 min)** — Without dragging, students should identify which 8 of the 12 tasks lie on the critical path
2. **Schedule Slip Drill (10 min)** — Drag Configuration to start one week late; record what happens to Go-Live
3. **Compression Challenge (15 min)** — Students propose how to compress the schedule by 2 weeks. Where do they add resources, and why?
4. **Slack Reading (10 min)** — Toggle slack on. For each non-critical task, write the maximum number of days it could slip without becoming critical

### Assessment

- Identify the critical path in a fresh Gantt chart drawn on the board
- Given a task's slack value, predict whether moving it by N days affects the project finish
- Explain *why* compressing a non-critical task does not shorten the project

## References

- PMI (2021). *PMBOK Guide*, 7th ed., Schedule Management.
- Kelley, J. & Walker, M. (1959). *Critical-Path Planning and Scheduling*.

## Related Resources

- [Chapter 16: IS Project Management](../../chapters/16-project-management/index.md)
