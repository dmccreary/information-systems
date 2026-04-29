---
title: The Enterprise Systems Landscape with ERP at the Center
description: The Enterprise Systems Landscape with ERP at the Center
status: scaffold
library: vis-network
bloom_level: TBD
---

# The Enterprise Systems Landscape with ERP at the Center

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
[Chapter 13: 'Enterprise Systems'](../../chapters/13-enterprise-systems/index.md).

```text
Type: interactive-infographic
**sim-id:** enterprise-systems-landscape<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network hub-and-spoke diagram with the ERP system as a central node (large mascot-emerald circle labeled "ERP — system of record") surrounded by satellite enterprise systems: CRM (sales, marketing, service), SCM (planning, logistics, warehouse), HRIS (core HR, talent), Payroll, Procurement (source-to-pay), Industry-Cloud overlays, and BI/Reporting. Each satellite is connected to ERP by a labeled integration arrow that names the type of integration (real-time API, nightly batch, event stream, master-data sync) and the direction of the dominant data flow. Edges between satellites (e.g., CRM ↔ Procurement when a customer has a referral relationship to a supplier) show the secondary integration burden that grows with best-of-breed strategies.

Color palette: ERP node in mascot-emerald with white text, satellites in alternating soft-blue and coral, integration edges in teal (real-time) vs. amber (batch) vs. dashed slate (event-driven). To work around the vis-network horizontal-edge label rendering bug, satellite nodes use a slight y-offset (e.g., 480 to 490) so labels render on initial load.

Interactivity: hovering each satellite reveals (a) the system category, (b) representative vendors, and (c) the typical integration pattern with ERP. A "best of breed vs suite" toggle adds or removes satellite edges to show the integration-burden difference between the two strategies — students see visibly how many extra arrows appear when each function is a separate vendor product. A "show master data flow" highlight draws the customer, vendor, item, and employee master records flowing from ERP outward.

Layout: hub-and-spoke, full canvas width, height ~560px. Canvas resizes on window resize.

Learning objective (Bloom: Understanding): Students can name the major enterprise system categories, identify ERP as the typical system-of-record hub, and articulate why integration complexity grows non-linearly with the number of separate systems.

Implementation: vis-network, deployed at `/information-systems/sims/enterprise-systems-landscape/`.
```

## Related Resources

- [Chapter 13: 'Enterprise Systems'](../../chapters/13-enterprise-systems/index.md)
