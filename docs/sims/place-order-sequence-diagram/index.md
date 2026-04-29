---
title: Sequence Diagram for "Place Order"
description: Sequence Diagram for "Place Order"
status: scaffold
library: p5.js
bloom_level: TBD
---

# Sequence Diagram for "Place Order"

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** p5.js

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: 'Systems Analysis and Design'](../../chapters/10-sad/index.md).

```text
Type: interactive-infographic
**sim-id:** place-order-sequence-diagram<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js sequence diagram showing the "Place Order" interaction across five participants drawn as columns left to right: *Customer (Browser)*, *Web Frontend*, *Order Service*, *Inventory Service*, *Payment Gateway*. Time flows downward. The Customer sends a synchronous message *submitOrder(items, payment)* to the Web Frontend, which calls *createOrder(...)* on Order Service. Order Service sends *reserveItems(...)* synchronously to Inventory Service, which returns a *reservationId*. Order Service then calls *charge(amount, token)* synchronously on Payment Gateway, which returns a *paymentConfirmation*. An `alt` combined fragment wraps two cases: payment succeeds (Order Service confirms reservation and returns *orderConfirmed*) versus payment fails (Order Service calls *releaseItems(reservationId)* on Inventory Service and returns *orderFailed*). The Web Frontend returns the result to the Customer.

Color palette: lifelines in slate-gray, activation bars in mascot-emerald, synchronous messages in dark teal, return messages dashed in coral, the `alt` fragment outlined in mascot-magenta. Each participant column header includes a small icon indicating whether it is a human, a UI, or a service.

Interactivity: a "play" button animates a token traveling along the messages in time order, pausing at each step to display the message name, payload schema, and expected response. A toggle lets the user step through both branches of the `alt` fragment. Hovering an activation bar shows what the participant is doing during that interval. A "show timing" toggle adds approximate latency budgets to each message arrow, making the diagram pull double-duty as a performance-budget conversation.

Layout: full canvas width, height ~600px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Applying): Students can read a sequence diagram, identify each participant and message type, follow the time order, and trace both branches of an `alt` combined fragment.

Implementation: p5.js, deployed at `/information-systems/sims/place-order-sequence-diagram/`.
```

## Related Resources

- [Chapter 10: 'Systems Analysis and Design'](../../chapters/10-sad/index.md)
