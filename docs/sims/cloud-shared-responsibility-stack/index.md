---
title: Cloud Shared Responsibility Stack
description: An interactive visualization of customer-vs-provider responsibility across On-Premises, IaaS, PaaS, SaaS, and FaaS, with hover details and a billing-view toggle.
image: /sims/cloud-shared-responsibility-stack/cloud-shared-responsibility-stack.png
og:image: /sims/cloud-shared-responsibility-stack/cloud-shared-responsibility-stack.png
twitter:image: /sims/cloud-shared-responsibility-stack/cloud-shared-responsibility-stack.png
status: implemented
library: p5.js
bloom_level: Analyze
social:
   cards: false
---

# Cloud Shared Responsibility Stack

<iframe src="main.html" height="662px" width="100%" scrolling="no"></iframe>

[Run the Shared Responsibility MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

The canonical **shared responsibility** chart for cloud computing, but interactive. Five service models (On-Prem, IaaS, PaaS, SaaS, FaaS) × eight layers (Networking → Data). Green = your responsibility; gray = the provider's. Hover any cell to see what the layer means and a concrete task at that layer.

Toggle **Show Billing View** to see a related but distinct dimension: who you actually pay line-item for vs. who has costs baked into a flat per-seat or per-call price.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/cloud-shared-responsibility-stack/main.html"
        height="662px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Identify which party is responsible for each operational task under each model
2. Compare the tradeoff each model makes (effort vs control)
3. Distinguish responsibility from billing
4. Match a real workload to the appropriate service model

### Suggested Activities

1. **Task Sort (10 min)** — For 10 tasks (patch kernel, classify data, replace switch, etc.), name the responsible party in each model
2. **Architecture Drill (15 min)** — Pick three workloads; recommend a model for each and defend

## References

- AWS Shared Responsibility Model — official documentation.

## Related Resources

- [Chapter 12: Cloud Computing and Infrastructure](../../chapters/12-cloud/index.md)
