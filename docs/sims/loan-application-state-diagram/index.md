---
title: Loan Application State Diagram
description: An interactive UML state machine for a loan application lifecycle, with a play-through demo and a toggle that highlights invalid (forbidden) transitions.
image: /sims/loan-application-state-diagram/loan-application-state-diagram.png
og:image: /sims/loan-application-state-diagram/loan-application-state-diagram.png
twitter:image: /sims/loan-application-state-diagram/loan-application-state-diagram.png
status: implemented
library: vis-network
bloom_level: Analyze
social:
   cards: false
---

# Loan Application State Diagram

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the State Diagram MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A loan application is a textbook example of an **object with a meaningful lifecycle**. It moves through a fixed set of states — Draft, Submitted, Under Review, Conditionally Approved, Awaiting Documents, Approved, Denied, Funded, Closed, Withdrawn — and only a small subset of transitions is legal between them. Toggling **Show Invalid Transitions** makes the state diagram's role as a business-rule guardrail visible.

### How to Use

1. Click **Play Example Application** to walk one application from Draft to Closed
2. **Click any state** for the business operations legal in that state
3. **Toggle Invalid Transitions** to see the forbidden moves the state machine prevents

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/loan-application-state-diagram/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Read a UML state diagram and identify states, transitions, and events
2. List legal transitions out of any state
3. Explain why a state diagram is the right tool for an object with a lifecycle
4. Recognize how a state machine acts as a business-rule guardrail

### Suggested Activities

1. **State Walk (5 min)** — Click each state; recite legal operations
2. **Forbidden Move (10 min)** — Toggle invalid transitions; explain why each one is forbidden
3. **Add a State (15 min)** — Propose adding "Auto-Underwritten." Where would it fit, and what transitions would change?

## References

- OMG. *UML 2.5 Specification*, State Machines.
- Harel, D. (1987). *Statecharts: A Visual Formalism*.

## Related Resources

- [Chapter 10: Systems Analysis and Design](../../chapters/10-sad/index.md)
