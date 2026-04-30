---
title: BPMN Order-to-Cash Process
description: An interactive BPMN order-to-cash diagram with three lanes (Sales, Credit, Fulfillment), exclusive and parallel gateways, and a token-trace animation for both large and small orders.
image: /sims/bpmn-order-to-cash/bpmn-order-to-cash.png
og:image: /sims/bpmn-order-to-cash/bpmn-order-to-cash.png
twitter:image: /sims/bpmn-order-to-cash/bpmn-order-to-cash.png
status: implemented
library: vis-network
bloom_level: Apply
social:
   cards: false
---

# BPMN Order-to-Cash Process

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the BPMN MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A simplified **order-to-cash** process drawn in BPMN, with three lanes inside one company-facing pool: **Sales**, **Credit**, **Fulfillment** — plus the **Customer** as a black-box pool below. The process flows left-to-right with one *exclusive* gateway (orders over $10k get a manager review) and one *parallel* gateway (pick-and-pack and invoicing happen simultaneously).

Click **Trace Large Order** to watch a token take the manager-review path. Click **Trace Small Order** for the auto-approve path. Click **Highlight Lane Handoffs** to make the *crossings* visible — handoffs are where most processes break.

### How to Use

1. **Click any element** to see its BPMN type, definition, and a real-world example
2. **Trace** either the large-order or small-order path
3. **Highlight handoffs** to see where work moves between teams

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/bpmn-order-to-cash/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Read a BPMN diagram and name each element type by its shape
2. Distinguish exclusive (XOR) from parallel (AND) gateways
3. Trace a token through both branches of an exclusive gateway
4. Identify lane handoffs and explain why they are points of risk

### Suggested Activities

1. **Element Quiz (5 min)** — Show one element at a time; students name the BPMN type
2. **Trace Both Paths (5 min)** — Run both traces; describe what's the same and what's different
3. **Find the Handoffs (10 min)** — Highlight handoffs; for each, propose one improvement (automation, SLA, queue)
4. **Add a Failure Branch (15 min)** — Sketch what the diagram should look like if the credit review *rejects* the order

### Assessment

- Match BPMN shapes to formal element types
- Explain the difference between an XOR gateway and an AND gateway in your own words
- Identify each lane crossing in a fresh BPMN diagram

## References

- OMG (2014). *BPMN 2.0 Specification*.
- White, S. & Miers, D. (2008). *BPMN Modeling and Reference Guide*.

## Related Resources

- [Chapter 5: Business Process Management](../../chapters/05-bpm/index.md)
