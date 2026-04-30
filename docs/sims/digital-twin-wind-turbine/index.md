---
title: Digital Twin of a Wind Turbine
description: An interactive digital twin demo with a physical turbine, live-data dials on the virtual twin, a wind-speed slider, a predictive-maintenance simulation, and a data-path overlay.
image: /sims/digital-twin-wind-turbine/digital-twin-wind-turbine.png
og:image: /sims/digital-twin-wind-turbine/digital-twin-wind-turbine.png
twitter:image: /sims/digital-twin-wind-turbine/digital-twin-wind-turbine.png
status: implemented
library: p5.js
bloom_level: Understand
social:
   cards: false
---

# Digital Twin of a Wind Turbine

<iframe src="main.html" height="662px" width="100%" scrolling="no"></iframe>

[Run the Digital Twin MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A **digital twin** is a live virtual model of a physical asset. The MicroSim shows a wind turbine on the left and its twin's dashboard of dials on the right, with bidirectional data flow: sensor readings going one way, control commands the other. Drag the **wind-speed slider** and watch the blades, the twin's dials, and the pitch-angle command all update in lockstep. Click **Predict Bearing Failure** to run a 14-day time-lapse where vibration creeps up and the twin issues a maintenance alert *before* the physical turbine would have failed.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/digital-twin-wind-turbine/main.html"
        height="662px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Define a digital twin
2. Identify the four components: physical asset, sensor stream, virtual model, bidirectional control
3. Explain how a digital twin enables predictive maintenance
4. Describe the data path from sensor to dashboard

### Suggested Activities

1. **Component Match (5 min)** — Identify each of the four components in the MicroSim
2. **Predict Drill (10 min)** — Run the failure prediction; describe what the operator should do at day 7

## References

- Grieves, M. (2014). *Digital Twin: Manufacturing Excellence Through Virtual Factory Replication*.

## Related Resources

- [Chapter 18: HCI and Emerging Topics](../../chapters/18-hci-and-emerging/index.md)
