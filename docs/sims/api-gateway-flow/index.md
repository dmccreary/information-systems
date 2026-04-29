---
title: API Gateway Request Flow
description: API Gateway Request Flow
status: scaffold
library: vis-network
bloom_level: TBD
---

# API Gateway Request Flow

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
[Chapter 3: Information Systems Architecture](../../chapters/03-architecture/index.md).

```text
Type: interactive-infographic
**sim-id:** api-gateway-flow<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram showing a left-to-right flow: a **Client** node (mobile phone or browser icon) on the left, an **API Gateway** node in the middle, and three backend service nodes on the right (**Orders Service**, **Inventory Service**, **Customer Service**). Each backend service has its own database node attached below it. Edges connect client to gateway and gateway to each backend. All edges use a slight y-offset (e.g., 480 → 490) to avoid the vis-network horizontal-edge label rendering bug.

Color palette: Client = sky blue, API Gateway = teal, Orders = lime green, Inventory = gold, Customer = warm coral. Databases are slate gray cylinders.

Interactivity: clicking the **Send Request** button animates a request token from the client to the gateway, where a side panel highlights the cross-cutting concerns the gateway applies in sequence (authenticate → rate limit → route → log). The token then continues to the appropriate backend service (chosen via a dropdown — orders, inventory, or customer). The response animates back along the same path, and the panel updates to show response-side concerns (caching, transformation, logging).

A toggle reveals what the diagram looks like *without* a gateway — every backend service exposed directly, each one having to reimplement authentication, rate limiting, and logging. The clutter is the point.

Layout: horizontal flow, full canvas width, height ~480px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can articulate which cross-cutting concerns belong in the gateway and which belong in the backend service.

Implementation: vis-network, deployed at `/sims/api-gateway-flow/`.
```

## Related Resources

- [Chapter 3: Information Systems Architecture](../../chapters/03-architecture/index.md)
