---
title: Container vs. Virtual Machine Architecture
description: Container vs. Virtual Machine Architecture
status: scaffold
library: p5.js
bloom_level: TBD
---

# Container vs. Virtual Machine Architecture

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
**sim-id:** container-vs-vm-architecture<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js side-by-side architectural comparison. Left panel (VM architecture): hardware at the bottom, host OS layer, hypervisor layer, then three stacked virtual machines, each containing its own guest OS, its own libraries/binaries, and its own application. Right panel (Container architecture): hardware at the bottom, host OS layer, container runtime (Docker engine), then five containers each containing only libraries/binaries and an application — the guest OS layer is absent because containers share the host kernel.

Color palette: hardware in slate-gray, host OS in deep teal, hypervisor in coral, guest OS in muted gray, container runtime in mascot-emerald, application layers in mascot-magenta. A small "size" badge at the top of each unit shows typical artifact size (VM: 2 GB+, Container: 50-300 MB). A "boot time" badge shows typical startup time (VM: 30-90s, Container: <1s).

Interactivity: hovering any layer shows what it does in plain English. A "scale up" button animates adding three more units to each panel, illustrating how many more containers fit on the same host. A toggle adds a "shared kernel" highlight on the container side, showing the security tradeoff: weaker isolation than full VMs in exchange for density and speed.

Layout: two side-by-side panels, full canvas width, height ~520px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can compare VM and container architectures, explain why containers are smaller and faster, and articulate the isolation/density tradeoff between the two.

Implementation: p5.js, deployed at `/information-systems/sims/container-vs-vm-architecture/`.
```

## Related Resources

- [Chapter 12: 'Cloud Computing and Infrastructure'](../../chapters/12-cloud/index.md)
