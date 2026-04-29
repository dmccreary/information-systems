---
title: A Modern CI/CD Pipeline
description: A Modern CI/CD Pipeline
status: scaffold
library: p5.js
bloom_level: TBD
---

# A Modern CI/CD Pipeline

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
**sim-id:** cicd-pipeline<br/>
**Library:** p5.js<br/>
**Status:** Specified

A horizontal pipeline diagram in p5.js showing the canonical CI/CD stages from left to right: Commit, Build, Unit Tests, Integration Tests, Static Analysis, Security Scan, Deploy to Staging, Smoke Tests, Deploy to Production. Each stage is a labeled rounded rectangle, with arrows connecting them and small badges showing pass/fail status. A "developer commits" icon enters from the far left; a "users" icon receives the deploy on the far right.

Color palette: stages in a teal-to-emerald gradient when passing, switching to coral when failing. The currently-running stage has a pulsing border in mascot-magenta.

Interactivity: a "trigger commit" button starts a simulated run that walks down the pipeline. A controls panel lets the user inject failures at any stage to see how the pipeline halts and reports. A side panel shows the artifacts produced at each stage (binaries, test reports, scan reports, deployment manifests). A toggle switches between "continuous delivery" (manual approval gate before production) and "continuous deployment" (no gate).

Layout: full canvas width, height ~420px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can trace a commit through a CI/CD pipeline, identify the gates where failures halt deployment, and distinguish continuous delivery from continuous deployment.

Implementation: p5.js, deployed at `/information-systems/sims/cicd-pipeline/`.
```

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
