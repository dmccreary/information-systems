---
title: Six-Component Model of an Information System
description: Interactive K6 graph showing the six components of an information system, with three real-world scenarios that map the same six roles onto very different organizational tasks.
image: six-component-model.png
og:image: six-component-model.png
status: implemented
library: vis-network
bloom_level: Apply
---

# Six-Component Model of an Information System

A vis-network diagram of the six components of an information system arranged
as a complete graph (K6) — every component is connected to every other
component, because in a working information system, every component depends
on every other one. Click any node to see (a) a one-sentence definition,
(b) a concrete example from the currently selected scenario, and (c) what
breaks if that component is missing. Toggle the scenario dropdown to see
the same six roles played by very different actors in three different
organizations.

## Learning Objective

Given a real-world organizational task, students can **identify** which
entity in the scenario plays each of the six component roles
(Hardware, Software, Network, Data, User, Business Process).

- **Bloom Level:** Apply
- **Bloom Verb:** Identify
- **Library:** vis-network

## Preview

<iframe src="main.html" width="100%" height="602" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Embedding This MicroSim

To embed this MicroSim in another page, copy and paste the following:

```html
<iframe src="../../sims/six-component-model/main.html"
        width="100%" height="602" scrolling="no"></iframe>
```

## How to Use

1. Pick a scenario from the dropdown in the upper-right panel
   (hospital admission, loan approval, or course registration).
2. Click any of the six nodes in the graph.
3. The right panel reveals the component's definition, a concrete example
   from that scenario, and a one-line answer to *"What breaks if this
   component is missing?"*
4. Switch scenarios while a node is selected to see how the same role plays
   out in a completely different organizational context.

## Why a Complete Graph?

Every component is connected to every other component (15 edges total)
because the components are **interdependent**. Upgrading one without
considering the other five is the most common rookie failure mode in IS
projects. A new server (hardware) that the old database (software) cannot
exploit, a new application that the user is not trained for, a redesigned
process that fights the existing software — these are not three different
mistakes; they are the same mistake.

## Lesson Plan

**Pre-class (5 min).** Read the *Computers, Programs, and Information
Systems* and *The Six Components* sections of Chapter 1.

**In-class (10 min).**

1. Project the MicroSim. Start in **Hospital Admission** mode.
2. Ask the class to predict, before clicking, what *Network* might mean
   in the hospital scenario. Then click the Network node and compare.
3. Switch to **Loan Approval**. Click the same six nodes in the same
   order. Discuss: which component felt the *most* different? Which felt
   the *least* different?
4. Switch to **Course Registration**. Have students nominate one
   "what-breaks" answer they think their classmates will guess wrong.

**Post-class (10 min).** Students choose any organizational task from
their own life (ordering food delivery, booking an exam, returning a
library book) and write one paragraph identifying the entity that plays
each of the six roles.

## References

- Kroenke, D. M. & Boyle, R. J. *Using MIS* — the canonical
  five-component formulation that this six-component model extends.
- Laudon, K. C. & Laudon, J. P. *Management Information Systems:
  Managing the Digital Firm* — the modern six-component view (Hardware,
  Software, Data, Network, People, Process).
- Chapter 1: [Foundations of Information Systems](../../chapters/01-foundations/index.md)

## Related Resources

- [Chapter 1: Foundations of Information Systems](../../chapters/01-foundations/index.md)
- [Knowledge Triangle MicroSim](../knowledge-triangle/index.md)
- [DIKI Hierarchy MicroSim](../diki-hierarchy/index.md)
