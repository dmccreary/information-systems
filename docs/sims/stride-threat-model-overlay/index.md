---
title: STRIDE Overlay on a Simple Web Application
description: STRIDE Overlay on a Simple Web Application
status: scaffold
library: vis-network
bloom_level: TBD
---

# STRIDE Overlay on a Simple Web Application

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
[Chapter 14: 'Security of Information Assets'](../../chapters/14-security/index.md).

```text
Type: interactive-infographic
**sim-id:** stride-threat-model-overlay<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network data flow diagram of a small web application: a browser (external entity) connects through a TLS boundary to a web server (process), which talks to an application server (process), which talks to a database (data store) and an authentication service (process). Trust boundaries are drawn as dashed regions: browser-to-server, server-to-internal-services, services-to-database. Overlaid on each element and data flow are STRIDE threat indicators — small colored badges (S, T, R, I, D, E) — that students can click to reveal the specific threat scenario, the security property it violates, and the standard mitigating control.

Color palette: external entities in slate-gray, processes in mascot-emerald, data stores in mascot-magenta, trust boundaries in coral dashed lines, STRIDE badges color-coded per category. A "show mitigations" toggle replaces each threat badge with the corresponding control (TLS for spoofing on the wire, hashed passwords for tampering on stored credentials, audit logs for repudiation, encryption-at-rest for information disclosure on the DB, rate limiting for denial of service, RBAC for elevation of privilege).

Interactivity: hovering an element lists every applicable STRIDE threat for that element type; clicking a threat badge opens a panel with the threat description and recommended controls. A scoring mode lets students attempt to identify all threats on each element and reveals their score against the canonical answer.

Layout: full canvas width, height ~600px. Sequence flows use slight y-offsets to work around the vis-network horizontal-edge-label rendering bug.

Learning objective (Bloom: Applying): Students can apply the STRIDE method to a small system architecture, identify at least one threat per category, and propose a standard mitigating control for each.

Implementation: vis-network, deployed at `/information-systems/sims/stride-threat-model-overlay/`.
```

## Related Resources

- [Chapter 14: 'Security of Information Assets'](../../chapters/14-security/index.md)
