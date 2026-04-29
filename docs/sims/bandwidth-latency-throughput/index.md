---
title: Bandwidth, Latency, and Throughput at a Glance
description: Bandwidth, Latency, and Throughput at a Glance
status: scaffold
library: p5.js
bloom_level: TBD
---

# Bandwidth, Latency, and Throughput at a Glance

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
[Chapter 11: 'Networks and Telecommunications for Business'](../../chapters/11-networks/index.md).

```text
Type: interactive-infographic
**sim-id:** bandwidth-latency-throughput<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js animation showing a horizontal "highway" between two nodes labeled Sender and Receiver. The pipe has an adjustable width (representing bandwidth) and an adjustable length (representing latency). Tiny packet rectangles travel left-to-right along the pipe, queuing at the entrance when the sender tries to push more than fits. A throughput meter on the right side measures actual packets-arrived-per-second. Three sliders let the student vary bandwidth (1 Mbps to 10 Gbps), one-way latency (1 ms to 300 ms), and packet loss (0% to 5%). A "TCP behavior" toggle shows how throughput collapses on long, lossy paths even when bandwidth is high.

Color palette: pipe walls in slate-gray, packets in mascot-emerald, queued packets in coral when they back up, throughput meter in mascot-magenta. Latency drawn as visible distance traveled.

Interactivity: students drag the sliders and see throughput change in real time. A preset menu provides representative scenarios: "LAN", "Same-region cloud", "Coast-to-coast", "Trans-Pacific", "Satellite link." Each preset locks bandwidth and latency to realistic values and lets the student observe the resulting throughput.

Layout: full canvas width, height ~480px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can predict why a high-bandwidth long-latency link delivers less throughput than its bandwidth would suggest, and identify the conditions under which adding bandwidth does and does not help.

Implementation: p5.js, deployed at `/information-systems/sims/bandwidth-latency-throughput/`.
```

## Related Resources

- [Chapter 11: 'Networks and Telecommunications for Business'](../../chapters/11-networks/index.md)
