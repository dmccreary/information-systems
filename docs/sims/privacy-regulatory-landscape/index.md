---
title: The Regulatory Landscape Map
description: The Regulatory Landscape Map
status: scaffold
library: vis-network
bloom_level: TBD
---

# The Regulatory Landscape Map

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** vis-network

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 15: 'Privacy, Compliance, and Regulation'](../../chapters/15-privacy-compliance/index.md).

```text
Type: interactive-infographic
**sim-id:** privacy-regulatory-landscape<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network 2D map laying out the major privacy and compliance regimes on two axes: the horizontal axis is *geographic scope* (single state, national, multi-national, global), the vertical axis is *sector scope* (cross-sector / general, finance-only, healthcare-only, payments-only). Each regulation is rendered as a labeled node placed at its intersection: GDPR in the upper-right (multi-national, cross-sector), CCPA/CPRA in the lower-left (single-state, cross-sector), HIPAA in the upper-middle (national, healthcare), SOX in the upper-middle (national, finance), PCI-DSS spanning the right side (global, payments). Edges connect regulations that share data subject rights, breach notification requirements, or enforcement patterns.

Color palette: GDPR in mascot-emerald, CCPA/CPRA in coral, HIPAA in mascot-magenta, SOX in slate-blue, PCI-DSS in amber. Background quadrant tints distinguish geographic regions.

Interactivity: hovering each regulation reveals a popup with (a) the year of force, (b) the regulator, (c) the maximum penalty, and (d) a one-line plain-English summary of what it actually demands. A "filter by data type" dropdown highlights which regulations apply when a given data type (health, finance, card, generic personal) is in play. A "what applies to me?" walk-through asks the student five questions and lights up the regulations that would apply.

Layout: full canvas width, height ~560px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can place each regulation on a sector/geography map, identify which regulations co-apply to a given system, and read the matrix to scope a compliance program.

Implementation: vis-network, deployed at `/information-systems/sims/privacy-regulatory-landscape/`.
```

## Related Resources

- [Chapter 15: 'Privacy, Compliance, and Regulation'](../../chapters/15-privacy-compliance/index.md)
