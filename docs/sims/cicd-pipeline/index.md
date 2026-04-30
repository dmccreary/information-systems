---
title: CI/CD Pipeline
description: An interactive p5.js animation of a modern CI/CD pipeline with nine stages, a failure-injection control, and a toggle between continuous delivery (manual gate) and continuous deployment (no gate).
image: /sims/cicd-pipeline/cicd-pipeline.png
og:image: /sims/cicd-pipeline/cicd-pipeline.png
twitter:image: /sims/cicd-pipeline/cicd-pipeline.png
status: implemented
library: p5.js
bloom_level: Analyze
social:
   cards: false
---

# CI/CD Pipeline

<iframe src="main.html" height="542px" width="100%" scrolling="no"></iframe>

[Run the CI/CD MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A nine-stage CI/CD pipeline: Commit → Build → Unit → Integration → Static Analysis → Security Scan → Deploy Staging → Smoke → Deploy Prod. Trigger a commit and watch the run. Inject a failure at any stage to see the pipeline halt. Toggle between **Continuous Delivery** (a manual approval gate before production) and **Continuous Deployment** (no gate).

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/cicd-pipeline/main.html"
        height="542px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Trace a commit through the canonical CI/CD stages
2. Identify the artifacts produced at each stage
3. Distinguish continuous delivery from continuous deployment
4. Predict the consequences of a failure at any stage

### Suggested Activities

1. **Failure Drill (10 min)** — Inject a failure at three different stages; compare artifacts produced
2. **Mode Compare (10 min)** — In one paragraph, defend or challenge the manual production gate

## References

- Humble, J. & Farley, D. (2010). *Continuous Delivery*.

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
