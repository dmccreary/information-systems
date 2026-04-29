---
title: Executive IS Roles and Reporting Relationships
description: Executive IS Roles and Reporting Relationships
status: scaffold
library: vis-network
bloom_level: TBD
---

# Executive IS Roles and Reporting Relationships

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
[Chapter 2: The Role of IS in Organizations](../../chapters/02-role-of-is/index.md).

```text
Type: interactive-infographic
**sim-id:** is-executive-roles<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network organizational diagram showing nine nodes: the **CEO** at the top, the **Audit Committee** to the side at the same level, and below them the four IS executive roles (**CIO**, **CTO**, **CDO**, **CISO**) plus three supporting professional roles (**Enterprise Architect**, **Business Analyst**, **Data Steward**). Edges represent reporting lines, drawn with a slight y-offset (e.g., 480 → 490) to avoid the vis-network horizontal-edge rendering bug.

Color palette: CEO = navy, Audit Committee = burgundy (signaling independence), CIO = teal, CTO = lime green, CDO = gold, CISO = warm coral, EA / BA / Data Steward = lavender. Each node has an icon: CEO = `mdi-crown`, CIO = `mdi-briefcase`, CTO = `mdi-chip`, CDO = `mdi-database-cog`, CISO = `mdi-shield-lock`, EA = `mdi-sitemap`, BA = `mdi-clipboard-text`, Data Steward = `mdi-database-check`.

Interactivity: clicking a node opens a side panel showing (a) the role's primary accountability in one sentence, (b) two example day-in-the-life activities, and (c) the most common career path into that role. A toggle at the top of the diagram switches between two structural patterns: "CISO reports to CIO" versus "CISO reports independently to the audit committee." The reporting edges animate to the new configuration when toggled, illustrating the separation-of-duties tradeoff visually.

Layout: hierarchical, top-down. Canvas resizes on window resize, height ~520px.

Learning objective (Bloom: Analyzing): Students can compare two reporting structures and articulate which separation-of-duties risk each one mitigates or creates.

Implementation: vis-network, deployed at `/sims/is-executive-roles/`.
```

## Related Resources

- [Chapter 2: The Role of IS in Organizations](../../chapters/02-role-of-is/index.md)
