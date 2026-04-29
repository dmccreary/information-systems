---
title: Write Skew Under Read Committed Isolation
description: Write Skew Under Read Committed Isolation
status: scaffold
library: p5.js
bloom_level: TBD
---

# Write Skew Under Read Committed Isolation

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
[Chapter 6: 'Data Management Foundations: Modeling, SQL, and Transactions'](../../chapters/06-data-foundations/index.md).

```text
Type: interactive-infographic
**sim-id:** write-skew-read-committed<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js timeline visualization showing two concurrent transactions on a hospital on-call schedule. The rule: at least one doctor must remain on call. Transaction A reads "Dr. Jones is on call AND Dr. Smith is on call — two doctors, fine, I can release Dr. Jones." Transaction B reads "Dr. Jones is on call AND Dr. Smith is on call — two doctors, fine, I can release Dr. Smith." Both commit under Read Committed isolation. Result: zero doctors on call. The visualization animates two transaction timelines side-by-side, with shared reads of the schedule, divergent writes, and a final merged state showing the rule violation. A toggle switches the isolation level to Serializable and replays the scenario; under Serializable, one of the two transactions is aborted and re-tried, and the rule holds.

Color palette: Transaction A in mascot-emerald, Transaction B in coral, shared database state in slate-gray, rule-violation flash in mascot-magenta. A small clock at the top of the canvas advances along the timeline as the simulation plays.

Interactivity: a "Play" button advances the two transactions step-by-step. A "Step through" mode lets the student advance one event at a time and observe the database state after each event. An isolation-level dropdown lets the student select Read Committed, Repeatable Read, or Serializable and replay the same scenario, watching how the outcome differs. A side panel shows a running explanation of what each transaction sees and why the anomaly occurs (or doesn't).

Layout: two horizontal timelines stacked vertically, with a database-state panel below, full canvas width, height ~520px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can trace two concurrent transactions through a write-skew scenario, identify why Read Committed allows the anomaly, and explain how Serializable isolation prevents it at the cost of one aborted-and-retried transaction.

Implementation: p5.js, deployed at `/information-systems/sims/write-skew-read-committed/`.
```

## Related Resources

- [Chapter 6: 'Data Management Foundations: Modeling, SQL, and Transactions'](../../chapters/06-data-foundations/index.md)
