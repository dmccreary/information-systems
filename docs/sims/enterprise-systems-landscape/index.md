---
title: Enterprise Systems Landscape with ERP at the Center
description: An interactive hub-and-spoke diagram of the enterprise systems landscape with ERP as the system of record, surrounded by CRM, SCM, HRIS, Payroll, Procurement, and BI satellites.
image: /sims/enterprise-systems-landscape/enterprise-systems-landscape.png
og:image: /sims/enterprise-systems-landscape/enterprise-systems-landscape.png
twitter:image: /sims/enterprise-systems-landscape/enterprise-systems-landscape.png
status: implemented
library: vis-network
bloom_level: Understand
social:
   cards: false
---

# Enterprise Systems Landscape

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Enterprise Systems MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A typical mid-to-large enterprise runs an **ERP** as the *system of record* surrounded by satellite systems for the functions ERP doesn't do natively (CRM, SCM, HRIS, Payroll, Procurement, BI). Each integration has its own pattern — real-time API, nightly batch, or event stream.

The MicroSim renders this landscape as a hub-and-spoke graph. Two toggles reveal the structure that makes integration *visibly* hard:

- **Show Best-of-Breed Edges** — adds the cross-satellite integrations you inherit when you pick best-in-class vendors for every function. Watch how many extra magenta arrows appear; this is why integration burden grows roughly O(n²).
- **Show Master Data Flow** — highlights the customer/vendor/item/employee master records flowing outward from ERP. Master-data drift is a different problem from integration breakage.

### How to Use

1. **Click any node** for the system's category, vendors, and ERP integration pattern
2. **Toggle Best-of-Breed Edges** to see the integration burden
3. **Toggle Master Data Flow** to see what flows outward from ERP

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/enterprise-systems-landscape/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Name the major enterprise system categories (ERP, CRM, SCM, HRIS, Payroll, Procurement, BI)
2. Identify ERP as the typical system-of-record hub
3. Articulate why integration complexity grows non-linearly with the number of separate systems
4. Distinguish real-time API integrations from batch and event-stream patterns

### Suggested Activities

1. **Vendor Match (5 min)** — Click each satellite; quiz students on which vendors fit each category
2. **Integration Burden (10 min)** — Toggle Best-of-Breed Edges; count the new arrows; estimate the integration team size needed
3. **Master Data Drill (10 min)** — In small groups, pick one master record (customer, vendor, item, employee); diagram what happens if two systems disagree on its value

### Assessment

- Match each satellite to its system category and at least one vendor
- Explain the difference between real-time, batch, and event-stream integration patterns
- Defend or challenge the "ERP at the center" architecture for a small startup

## References

- Davenport, T. (1998). *Putting the Enterprise into the Enterprise System*, HBR.
- Gartner (2023). *Magic Quadrant for Cloud ERP*.

## Related Resources

- [Chapter 13: Enterprise Systems](../../chapters/13-enterprise-systems/index.md)
