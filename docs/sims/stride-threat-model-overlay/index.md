---
title: STRIDE Threat Model Overlay
description: An interactive STRIDE threat model overlaid on a small web application's data-flow diagram. Click any element to see applicable threats and recommended mitigations.
image: /sims/stride-threat-model-overlay/stride-threat-model-overlay.png
og:image: /sims/stride-threat-model-overlay/stride-threat-model-overlay.png
twitter:image: /sims/stride-threat-model-overlay/stride-threat-model-overlay.png
status: implemented
library: vis-network
bloom_level: Apply
social:
   cards: false
---

# STRIDE Threat Model Overlay

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the STRIDE MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A simple web-application **Data Flow Diagram** (Browser → Web Server → App Server → Database, plus an Auth Service) with the **STRIDE** threat model overlaid as clickable threats per element. STRIDE is six categories of threat:

- **S**poofing — impersonating someone
- **T**ampering — modifying data
- **R**epudiation — denying having done something
- **I**nformation Disclosure — leaking data
- **D**enial of Service — making the system unavailable
- **E**levation of Privilege — gaining unauthorized access

Click any element to see which threats apply, the threat description, and the standard mitigating control.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/stride-threat-model-overlay/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Apply the STRIDE method to a small system architecture
2. Identify at least one threat per category for each element type
3. Propose a standard mitigating control for each identified threat
4. Distinguish threats appropriate to data stores vs. processes vs. data flows

### Suggested Activities

1. **Threat Hunt (15 min)** — Without clicking, identify all threats you can; check against the canonical answer
2. **Mitigation Match (10 min)** — For each threat, write the control before toggling Show Mitigations
3. **Architecture Drill (15 min)** — Add a CDN in front of the web server; what new threats emerge?

## References

- Shostack, A. (2014). *Threat Modeling: Designing for Security*.
- Microsoft. *STRIDE Threat Model*.

## Related Resources

- [Chapter 14: Security of Information Assets](../../chapters/14-security/index.md)
