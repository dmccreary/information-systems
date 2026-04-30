---
title: Bandwidth, Latency, and Throughput
description: An interactive p5.js visualization of the relationship between bandwidth, latency, and throughput, with sliders, packet loss, and a TCP-collapse toggle to show why fat long-haul pipes underperform.
image: /sims/bandwidth-latency-throughput/bandwidth-latency-throughput.png
og:image: /sims/bandwidth-latency-throughput/bandwidth-latency-throughput.png
twitter:image: /sims/bandwidth-latency-throughput/bandwidth-latency-throughput.png
status: implemented
library: p5.js
bloom_level: Analyze
social:
   cards: false
---

# Bandwidth, Latency, and Throughput

<iframe src="main.html" height="602px" width="100%" scrolling="no"></iframe>

[Run the Networking MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A pipe-and-packets metaphor for the three networking quantities students confuse the most. The **width** of the pipe is bandwidth. The **length** is latency. The **packets-arrived-per-second** counter is throughput — the only quantity users actually feel.

Slide the controls and watch throughput change. Pick a preset (LAN → Trans-Pacific → Satellite) to see why "more bandwidth" stops helping past a certain latency. Flip the **TCP collapse** toggle to see how throughput tanks on long, lossy paths even when bandwidth is high.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/bandwidth-latency-throughput/main.html"
        height="602px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Define bandwidth, latency, and throughput in plain English
2. Predict why a high-bandwidth long-latency link delivers less throughput than its bandwidth would suggest
3. Identify the conditions under which adding bandwidth helps and the conditions under which it does not
4. Match real-world links (LAN, cloud, coast-to-coast, trans-Pacific, satellite) to their characteristic numbers

### Suggested Activities

1. **Three Definitions (5 min)** — Have students define each term in their own words before touching the sliders
2. **Preset Walk (10 min)** — Run all five presets; record the resulting throughput
3. **Adding Bandwidth (10 min)** — On the satellite preset, double the bandwidth. Does throughput double? Why not?

## References

- Tanenbaum, A. (2011). *Computer Networks*, 5th ed.
- Mathis, M. et al. (1997). *The macroscopic behavior of the TCP congestion avoidance algorithm*.

## Related Resources

- [Chapter 11: Networks and Telecommunications for Business](../../chapters/11-networks/index.md)
