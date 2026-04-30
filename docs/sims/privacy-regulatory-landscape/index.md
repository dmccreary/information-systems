---
title: Privacy & Compliance Regulatory Landscape
description: An interactive 2D map of the major privacy and compliance regimes (GDPR, CCPA/CPRA, HIPAA, SOX, PCI-DSS, PIPL, LGPD, PIPEDA), with hover details and a filter that highlights which apply to a given data type.
image: /sims/privacy-regulatory-landscape/privacy-regulatory-landscape.png
og:image: /sims/privacy-regulatory-landscape/privacy-regulatory-landscape.png
twitter:image: /sims/privacy-regulatory-landscape/privacy-regulatory-landscape.png
status: implemented
library: vis-network
bloom_level: Analyze
social:
   cards: false
---

# Privacy & Compliance Regulatory Landscape

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Regulatory Landscape MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A 2D map of the major privacy and compliance regimes plotted on two axes: **geographic scope** (single state → global) and **sector scope** (cross-sector → sector-specific). Edges connect regulations with shared rights (e.g., access, deletion) or modeling lineage (LGPD and PIPL are GDPR-modeled).

Use the filter to see which regulations apply to a given **data type** (health, finance, card, generic personal). Click any node for the year of force, regulator, max penalty, and a one-line summary of what it actually demands.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/privacy-regulatory-landscape/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Place each major privacy/compliance regulation on a sector × geography map
2. Identify which regulations co-apply to a given system or data type
3. Read the matrix to scope a compliance program for a hypothetical company
4. Compare maximum penalties across regimes

### Suggested Activities

1. **Map Walk (5 min)** — Click each node; recite year, regulator, max penalty
2. **Co-Application Drill (10 min)** — For a US healthcare startup serving EU customers, list every applicable regulation
3. **Penalty Reflection (5 min)** — Order the eight regulations by maximum penalty; what does this say about regulatory priorities?

## References

- IAPP (annual). *Global Privacy Law Tracker*.
- Bygrave, L. (2014). *Data Privacy Law: An International Perspective*.

## Related Resources

- [Chapter 15: Privacy, Compliance, and Regulation](../../chapters/15-privacy-compliance/index.md)
