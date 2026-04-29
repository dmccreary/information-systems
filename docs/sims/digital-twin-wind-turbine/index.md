---
title: A Digital Twin of a Wind Turbine
description: A Digital Twin of a Wind Turbine
status: scaffold
library: p5.js
bloom_level: TBD
---

# A Digital Twin of a Wind Turbine

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
**sim-id:** digital-twin-wind-turbine<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js interactive showing a wind turbine on the left side of the canvas (a stylized illustration with rotating blades, nacelle, and tower) and its digital twin on the right side (a schematic representation with live data dials for rotor RPM, blade pitch, generator temperature, vibration amplitude, and wind speed). A bidirectional sensor-data flow is animated between the two: arrows from the physical turbine to the twin carry sensor readings ("temperature 47C", "RPM 14.2"), arrows from the twin to the turbine carry control commands ("pitch +2 degrees"). A simulation panel below the twin lets the user experiment: a wind-speed slider drives both the visual blade rotation and all the dials in real time. A "predict failure" button triggers a simulated bearing-degradation scenario; the dials show vibration creeping up over a simulated week, and the twin issues a maintenance alert before the physical turbine would have failed.

Color palette: physical turbine in slate-gray with mascot-emerald blades, digital twin in mascot-emerald wireframe style, sensor data flow in coral, control commands in teal, simulation results in mascot-magenta when warning, mascot-emerald when normal.

Interactivity: the wind-speed slider is the primary input. Hovering any of the twin's data dials shows the underlying sensor model and units. The "predict failure" button drives the time-lapse demo. A "show data path" toggle reveals the full data pipeline behind the twin (sensors -> gateway -> cloud -> twin model -> dashboard) so students see the IS architecture supporting the visualization.

Layout: full canvas width, height ~580px. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Understanding): Students can define a digital twin, identify the four components (physical asset, sensor stream, virtual model, bidirectional control), and explain how a digital twin enables predictive maintenance.

Implementation: p5.js, deployed at `/information-systems/sims/digital-twin-wind-turbine/`.
```

## Related Resources

- [Chapter 18: 'Human-Computer Interaction and Emerging Topics'](../../chapters/18-hci-and-emerging/index.md)
