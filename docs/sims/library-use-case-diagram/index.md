---
title: Use Case Diagram for a Small Library System
description: Use Case Diagram for a Small Library System
status: scaffold
library: vis-network
bloom_level: TBD
---

# Use Case Diagram for a Small Library System

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
**sim-id:** library-use-case-diagram<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network use case diagram showing a small public-library system. The system boundary is a labeled rectangle titled "Library System." Inside the rectangle, ellipses represent the use cases: *Search Catalog*, *Borrow Item*, *Return Item*, *Renew Loan*, *Place Hold*, *Pay Fine*, *Manage Catalog*, *Generate Reports*, and *Authenticate User*. Outside the rectangle, three actors as stick figures: *Patron* (left), *Librarian* (right), and a system actor *Payment Gateway* (bottom). Lines connect each actor to the use cases they participate in: Patron connects to Search/Borrow/Return/Renew/Hold/Pay; Librarian connects to Manage Catalog/Generate Reports plus all Patron-facing use cases (since librarians also help walk-in patrons); Payment Gateway connects to Pay Fine. *Authenticate User* is connected via dashed `<<include>>` arrows from *Borrow Item*, *Place Hold*, and *Pay Fine*. *Apply Late-Fee Waiver* is shown as an `<<extend>>` of *Pay Fine*. To work around the vis-network horizontal-edge label rendering bug, lines with `<<include>>` and `<<extend>>` labels use a slight y-offset (480 to 490) so labels render correctly on initial load.

Color palette: system boundary in slate-gray, ellipses in mascot-emerald, actors in dark teal, include/extend arrows in coral with dashed line styles. Authentication use case highlighted in mascot-magenta as the cross-cutting concern.

Interactivity: hovering each use case opens a side panel showing the canonical use-case template for that case (preconditions, main success scenario, alternative flows, postconditions). Clicking an actor highlights every use case that actor participates in. A "show includes/extends" toggle hides or reveals the dashed relationship arrows so students can see the diagram with and without the advanced notation.

Layout: actors on the left and right margins, use cases clustered inside the boundary, height ~520px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can read a use case diagram, identify the actors and use cases, distinguish `<<include>>` from `<<extend>>`, and produce a use case template for any ellipse on the page.

Implementation: vis-network, deployed at `/information-systems/sims/library-use-case-diagram/`.
```

## Related Resources

- [Chapter 10: 'Systems Analysis and Design'](../../chapters/10-sad/index.md)
