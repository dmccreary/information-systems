---
title: Shared Responsibility Across IaaS, PaaS, SaaS, and FaaS
description: Shared Responsibility Across IaaS, PaaS, SaaS, and FaaS
status: scaffold
library: p5.js
bloom_level: TBD
---

# Shared Responsibility Across IaaS, PaaS, SaaS, and FaaS

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
[Chapter 12: 'Cloud Computing and Infrastructure'](../../chapters/12-cloud/index.md).

```text
Type: interactive-infographic
**sim-id:** cloud-shared-responsibility-stack<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js stacked-bar visualization of the cloud responsibility split. Five vertical columns: On-Premises, IaaS, PaaS, SaaS, FaaS. Each column is divided into eight horizontal layers from bottom to top: Networking, Storage, Servers, Virtualization, OS, Runtime, Application, Data. Each layer is colored mascot-emerald when the customer owns it and slate-gray when the provider owns it. The On-Premises column is entirely emerald (you own it all). IaaS turns the bottom four layers gray. PaaS turns the bottom six gray, leaving only Application and Data emerald. SaaS turns everything gray except the very top "Data" layer. FaaS leaves only "Application" (function code) and "Data" emerald.

Color palette: customer-managed layers in mascot-emerald, provider-managed layers in slate-gray with a subtle gradient, FaaS column highlighted with a coral border to indicate the "rent a moment" pattern. Labels in clear sans-serif white text on each band.

Interactivity: hovering each cell shows (a) what that layer means in plain English, (b) a concrete example of a task at that layer (e.g., "patch the OS kernel"), and (c) which party performs that task in that model. A toggle switches between "responsibility" and "billing" views — the billing view shows what you pay for in each model, often counter-intuitively (e.g., in SaaS you don't pay for storage line-item, but it's baked into seat licensing).

Layout: full canvas width, height ~580px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can identify, for any given operational task, which party (customer or provider) is responsible for it under each of the five models, and articulate the tradeoff each model makes.

Implementation: p5.js, deployed at `/information-systems/sims/cloud-shared-responsibility-stack/`.
```

## Related Resources

- [Chapter 12: 'Cloud Computing and Infrastructure'](../../chapters/12-cloud/index.md)
