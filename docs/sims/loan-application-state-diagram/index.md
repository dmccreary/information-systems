---
title: State Diagram for "Loan Application Status"
description: State Diagram for "Loan Application Status"
status: scaffold
library: vis-network
bloom_level: TBD
---

# State Diagram for "Loan Application Status"

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
[Chapter 10: 'Systems Analysis and Design'](../../chapters/10-sad/index.md).

```text
Type: interactive-infographic
**sim-id:** loan-application-state-diagram<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network state diagram showing the lifecycle of a loan application. States, drawn as rounded rectangles: *Draft*, *Submitted*, *Under Review*, *Awaiting Documents*, *Approved*, *Conditionally Approved*, *Denied*, *Withdrawn*, *Funded*, *Closed*. The initial pseudostate (black dot) connects to *Draft* via a transition labeled `applicantStarts`. From Draft to Submitted via `applicantSubmits`. Submitted to Under Review via `analystAssigned`. Under Review branches to Approved (`creditCheckPasses`), Conditionally Approved (`needsAdditionalInfo`), or Denied (`creditCheckFails`). Conditionally Approved transitions to Awaiting Documents via `requestDocs`, then back to Under Review via `docsReceived`. From any non-terminal state, a transition to Withdrawn via `applicantWithdraws`. Approved transitions to Funded via `disburseFunds`, then to Closed via `paidOff` or `defaulted`. Denied and Withdrawn lead to a final state (bullseye). Self-transitions are shown on Under Review for `analystAddsNote` (no state change, but logged). To work around vis-network's horizontal-edge label rendering bug, transitions use a slight y-offset (480 to 490) where labels are present.

Color palette: states in slate-gray with mascot-emerald accents on terminal-success states (Funded, Closed via paidOff), coral on terminal-failure states (Denied, Withdrawn, Closed via defaulted), amber on intermediate-attention states (Awaiting Documents). Transition arrows in dark teal with event labels in white-bordered text boxes for legibility.

Interactivity: a "play" simulation walks an example application through the states, pausing at each transition to display the event, the guard condition, the action triggered, and which database fields change. A "show invalid transitions" toggle highlights all the transitions that are *not* allowed (e.g., Funded directly to Draft) — making the state diagram's role as a business-rule guardrail explicit. Clicking a state opens a side panel showing what business operations are legal in that state.

Layout: hierarchical, top-down, height ~600px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can read a state diagram, list the legal transitions out of any state, and explain why a state diagram is the appropriate tool for an object with a meaningful lifecycle.

Implementation: vis-network, deployed at `/information-systems/sims/loan-application-state-diagram/`.
```

## Related Resources

- [Chapter 10: 'Systems Analysis and Design'](../../chapters/10-sad/index.md)
