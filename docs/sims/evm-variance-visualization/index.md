---
title: EVM Cost and Schedule Variance Visualization
description: An interactive Chart.js visualization of Earned Value Management — PV, EV, AC curves with live-computed CV, SV, CPI, SPI, and EAC at any month, across three project-health scenarios.
image: /sims/evm-variance-visualization/evm-variance-visualization.png
og:image: /sims/evm-variance-visualization/evm-variance-visualization.png
twitter:image: /sims/evm-variance-visualization/evm-variance-visualization.png
status: implemented
library: Chart.js
bloom_level: Apply
social:
   cards: false
---

# EVM Cost and Schedule Variance Visualization

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the EVM Variance MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

**Earned Value Management** (EVM) is the closest thing project managers have to a vital-signs monitor. From three numbers — Planned Value, Earned Value, and Actual Cost — five derived metrics fall out, and from those metrics you can diagnose whether a project is *behind, over, both,* or *neither*.

This MicroSim plots all three curves over a 12-month project and lets you slide a cursor along the timeline. The side panel **computes CV, SV, CPI, SPI, and EAC live** as you move the cursor, color-coding each metric green or magenta depending on whether it's healthy.

Three preset **scenarios** let you see how the metrics behave under different project-health states:

- **Behind Schedule, Under Budget** — the most common pattern: cheap and slow
- **Ahead of Schedule, Under Budget** — the rarest and best
- **On Schedule, Over Budget** — fast and expensive

### How to Use

1. **Pick a scenario** with the buttons at the top
2. **Slide the cursor** to any month; metrics update instantly
3. **Watch the EAC** — when CPI < 1, EAC blows past BAC and goes red

### The Five Metrics at a Glance

| Metric | Formula | Healthy when |
|---|---|---|
| **CV** Cost Variance | EV − AC | ≥ 0 |
| **SV** Schedule Variance | EV − PV | ≥ 0 |
| **CPI** Cost Performance Index | EV ÷ AC | ≥ 1.0 |
| **SPI** Schedule Performance Index | EV ÷ PV | ≥ 1.0 |
| **EAC** Estimate at Completion | BAC ÷ CPI | ≤ BAC |

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/evm-variance-visualization/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Compute CV, SV, CPI, SPI, and EAC from PV, EV, and AC
2. Interpret what each metric says about project health
3. Diagnose project status from the visual relationship of the three curves
4. Forecast final cost (EAC) given current performance trend

### Suggested Activities

1. **Three-Curve Reading (5 min)** — Show one scenario without the metrics panel. Have students sketch where they think CPI and SPI sit before revealing.
2. **Scenario Diagnosis (10 min)** — For each of the three preset scenarios, write a one-sentence executive summary of project health.
3. **EAC Forecast (10 min)** — At month 6 of the "Behind, Under" scenario, will the project finish under or over budget? Justify with the numbers.
4. **Status Report Drill (15 min)** — Pick any month + scenario. Write a 100-word status update for a steering committee.

### Assessment

- Compute all five metrics given a stated PV, EV, AC
- Match a project narrative ("we're cheap but late") to its EVM signature
- Explain to a non-technical stakeholder why CPI < 1 is a worse sign than SV < 0

## References

- PMI (2021). *A Guide to the Project Management Body of Knowledge (PMBOK Guide)*, 7th ed.
- Fleming, Q. & Koppelman, J. (2010). *Earned Value Project Management*, 4th ed.

## Related Resources

- [Chapter 16: IS Project Management](../../chapters/16-project-management/index.md)
