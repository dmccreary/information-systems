---
title: Normalization Journey from 1NF to 3NF
description: Normalization Journey from 1NF to 3NF
status: scaffold
library: p5.js
bloom_level: TBD
---

# Normalization Journey from 1NF to 3NF

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
[Chapter 6: 'Data Management Foundations: Modeling, SQL, and Transactions'](../../chapters/06-data-foundations/index.md).

```text
Type: interactive-infographic
**sim-id:** normalization-journey-1nf-to-3nf<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js step-through diagram showing a single denormalized table (an Order Report with columns customer_name, customer_email, product_list, order_total, salesperson, salesperson_region) and walking it through three transformations: 1NF (split the product_list into a separate OrderLine table, one row per product), 2NF (extract product_name and price into a Product table referenced by product_id), and 3NF (extract salesperson_region into a Salesperson table referenced by salesperson_id). Each step is rendered as a side-by-side before/after panel with the violating columns highlighted in coral and the corrected schema highlighted in mascot-emerald.

Color palette: violation columns in coral with a pulsing red border, corrected columns in mascot-emerald, foreign-key arrows in dark teal. Update-anomaly icons (a small cracked-pencil symbol) appear over violating columns to telegraph the underlying problem.

Interactivity: a "Next step" button advances through the four states (denormalized → 1NF → 2NF → 3NF). At each step, a side panel explains in plain English (a) what rule was violated, (b) the update anomaly the violation creates, and (c) the structural fix. A "show update" button animates a hypothetical change (e.g., renaming a product, moving a salesperson to a new region) and shows how many rows must be updated in the violating schema versus the corrected schema — usually a dramatic ratio (50 vs 1).

Layout: side-by-side panels stacked vertically across four steps, full canvas width, height ~640px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Applying): Students can take a denormalized table, identify 1NF, 2NF, and 3NF violations, propose the structural fix for each, and quantify the update-anomaly cost of leaving the violation in place.

Implementation: p5.js, deployed at `/information-systems/sims/normalization-journey-1nf-to-3nf/`.
```

## Related Resources

- [Chapter 6: 'Data Management Foundations: Modeling, SQL, and Transactions'](../../chapters/06-data-foundations/index.md)
