---
title: Place Order Sequence Diagram
description: A UML sequence diagram for the Place Order use case across five participants, with both branches of an alt combined fragment, optional timing budgets, and a play-through animation.
image: /sims/place-order-sequence-diagram/place-order-sequence-diagram.png
og:image: /sims/place-order-sequence-diagram/place-order-sequence-diagram.png
twitter:image: /sims/place-order-sequence-diagram/place-order-sequence-diagram.png
status: implemented
library: p5.js
bloom_level: Apply
social:
   cards: false
---

# Place Order Sequence Diagram

<iframe src="main.html" height="702px" width="100%" scrolling="no"></iframe>

[Run the Sequence Diagram MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A canonical UML sequence diagram for placing an order across five participants — Customer, Web Frontend, Order Service, Inventory Service, Payment Gateway. Toggle between the **payment-succeeds** and **payment-fails** branches of the `alt` fragment. Click **Show Timing** to overlay realistic latency budgets on each message — the diagram now does double duty as a performance-budget conversation.

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Read a UML sequence diagram and identify each participant
2. Distinguish synchronous from return messages
3. Trace both branches of an alt combined fragment
4. Read approximate latency budgets at each message arrow

## Related Resources

- [Chapter 10: Systems Analysis and Design](../../chapters/10-sad/index.md)
