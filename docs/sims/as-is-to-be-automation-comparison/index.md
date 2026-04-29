---
title: As-Is vs To-Be — Manual, RPA, and Workflow Automation
description: As-Is vs To-Be — Manual, RPA, and Workflow Automation
status: scaffold
library: p5.js
bloom_level: TBD
---

# As-Is vs To-Be — Manual, RPA, and Workflow Automation

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
[Chapter 5: Business Process Management](../../chapters/05-bpm/index.md).

```text
Type: interactive-infographic
**sim-id:** as-is-to-be-automation-comparison<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js side-by-side comparison diagram showing three versions of the same employee-onboarding process. Panel 1 (As-Is, Manual): five lanes — HR clerk, IT, Facilities, Manager, Payroll — each performing manual handoffs by email; total cycle time labeled at the top (e.g., "9 days"). Panel 2 (To-Be with RPA): same lane structure, but two RPA bot icons replace the HR-clerk's repetitive data-entry steps and the IT account-creation steps; cycle time labeled (e.g., "3 days"); a small caution icon notes "fragile to UI changes". Panel 3 (To-Be with Workflow Automation): collapsed to three lanes (HR, Manager, Payroll) with a workflow-engine icon orchestrating system-to-system integration via APIs; cycle time labeled (e.g., "1 day"); a small "strategic foundation" badge.

Color palette: manual-only lanes in slate-gray, RPA bot icons in coral with caution-stripe borders, workflow-automation engine in mascot-emerald, integration arrows in teal. Cycle-time bar at the top of each panel scales proportionally so students can see the time difference visually.

Interactivity: hovering each step in any panel shows duration and actor. A "show waste" toggle highlights the eight Lean wastes wherever they occur in the as-is panel (especially Waiting and Motion). A "switch panel" tab lets the student bring any of the three panels into a primary focused view. A side panel shows total cycle time, value-added ratio, and number of human handoffs for the panel currently in focus.

Layout: three vertical stacked panels, full canvas width, height ~640px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Evaluating): Students can compare a manual, RPA-automated, and workflow-automated version of the same process; quantify the cycle-time and handoff differences; and articulate the tradeoffs of each approach.

Implementation: p5.js, deployed at `/information-systems/sims/as-is-to-be-automation-comparison/`.
```

## Related Resources

- [Chapter 5: Business Process Management](../../chapters/05-bpm/index.md)
