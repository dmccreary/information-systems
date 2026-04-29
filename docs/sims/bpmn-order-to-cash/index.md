---
title: Anatomy of a BPMN Order-to-Cash Process
description: Anatomy of a BPMN Order-to-Cash Process
status: scaffold
library: vis-network
bloom_level: TBD
---

# Anatomy of a BPMN Order-to-Cash Process

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
[Chapter 5: Business Process Management](../../chapters/05-bpm/index.md).

```text
Type: interactive-infographic
**sim-id:** bpmn-order-to-cash<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network BPMN diagram showing a simplified order-to-cash process inside a single Customer-Facing-Company pool with three lanes: Sales, Credit, and Fulfillment. The process begins with a start event labeled "Order received" in the Sales lane, flows through a "Validate order" task, then crosses into the Credit lane via an exclusive gateway labeled "Order > $10,000?". The yes path runs a "Manager credit review" task; the no path runs an "Auto-approve credit" task. Both paths re-merge at a converging exclusive gateway, then cross into the Fulfillment lane via a parallel gateway that triggers two simultaneous tasks: "Pick and pack" and "Generate invoice". A converging parallel gateway joins them, followed by a "Ship order" task and an end event labeled "Order shipped". A second pool labeled "Customer" sits below, with a message flow connecting the Customer to the start event ("places order") and another message flow back from "Order shipped" ("delivery confirmation"). To work around the vis-network horizontal-edge label rendering bug, sequence flows use a slight y-offset (e.g., 480 to 490) so labels render on initial load.

Color palette: pool boundaries in slate-gray, lanes in alternating soft-blue tints, activity rounded rectangles in mascot-emerald with white text, exclusive gateways in amber with the "X" marker, parallel gateways in coral with the "+" marker, events in mascot-magenta gradients. Sequence flows in dark teal; message flows dashed in muted gray.

Interactivity: hovering each element reveals (a) the BPMN element type, (b) its formal definition, and (c) a concrete real-world example. A "trace execution" button animates a token traveling through the diagram following one of two paths (large order vs. small order), pausing briefly at each gateway to show the routing decision. A toggle highlights every "lane crossing" — the visible handoffs in the process — to reinforce the systems-thinking lesson that handoffs are where processes break.

Layout: hierarchical, left-to-right, full canvas width, height ~560px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can read a BPMN diagram, name each element type by its shape, identify lane handoffs, and trace a token through both paths of an exclusive gateway.

Implementation: vis-network, deployed at `/information-systems/sims/bpmn-order-to-cash/`.
```

## Related Resources

- [Chapter 5: Business Process Management](../../chapters/05-bpm/index.md)
