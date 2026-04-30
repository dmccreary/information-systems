---
title: Normalization Journey 1NF to 3NF
description: A four-step walk-through of database normalization from a denormalized table through 1NF, 2NF, and 3NF, with the violation, anomaly, and structural fix at each step.
image: /sims/normalization-journey-1nf-to-3nf/normalization-journey-1nf-to-3nf.png
og:image: /sims/normalization-journey-1nf-to-3nf/normalization-journey-1nf-to-3nf.png
twitter:image: /sims/normalization-journey-1nf-to-3nf/normalization-journey-1nf-to-3nf.png
status: implemented
library: p5.js
bloom_level: Apply
social:
   cards: false
---

# Normalization Journey 1NF to 3NF

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Normalization MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A four-step walk-through of normalization. Start with a denormalized Order Report. Step into **1NF** (split multivalued column into OrderLine), then **2NF** (extract Product), then **3NF** (extract Salesperson). At each step you see the violated rule, the update anomaly it creates, and the structural fix.

Click **Show Update Anomaly Cost** to see how many rows must change for a simple rename in the violating schema vs the normalized schema.

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Identify 1NF, 2NF, and 3NF violations in a given table
2. Propose the structural fix for each violation
3. Quantify the update-anomaly cost of leaving a violation in place

## Related Resources

- [Chapter 6: Data Management Foundations](../../chapters/06-data-foundations/index.md)
