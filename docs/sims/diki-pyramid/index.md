---
title: DIKI Hierarchy Interactive Pyramid
description: An interactive four-level pyramid visualizing the Data, Information, Knowledge, and Insight hierarchy with a hospital-patient example at every layer.
image: /sims/diki-pyramid/diki-pyramid.png
og:image: /sims/diki-pyramid/diki-pyramid.png
twitter:image: /sims/diki-pyramid/diki-pyramid.png
status: implemented
library: p5.js
bloom_level: Understand
social:
   cards: false
---

# DIKI Hierarchy Interactive Pyramid

<iframe src="main.html" height="602px" width="100%" scrolling="no"></iframe>

[Run the DIKI Hierarchy Pyramid Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This interactive pyramid visualizes the **DIKI Hierarchy** — Data, Information, Knowledge, and Insight — using a single hospital-patient scenario that climbs the pyramid one rung at a time. The same value (`98.6`) starts as a raw number at the base, becomes a contextualized record, then a discharge-readiness rule, and finally an AI-derived insight about readmission risk.

The footer note acknowledges that older sources call this the **DIKW Hierarchy** with *Wisdom* at the top. Modern data-science practice prefers *Insight* because it names a deliverable rather than a virtue.

### How to Use

1. **Hover** over any layer to see its definition and the hospital-patient example
2. **Click** on a layer to pin the callout so you can read the longer text
3. **Click again** to release the pin and continue exploring

### The Four Layers

- **Data** (base): Raw, unprocessed facts without context
- **Information**: Data placed in context — who, what, when, where
- **Knowledge**: Patterns and rules derived from information that support decisions
- **Insight** (top): Actionable, often non-obvious findings distilled from knowledge

## Embedding This MicroSim

You can include this MicroSim on your website using the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/diki-pyramid/main.html"
        height="602px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Name the four layers of the DIKI Hierarchy in order from bottom to top
2. Classify a given example as Data, Information, Knowledge, or Insight, and justify the choice
3. Explain why most failed IS projects fail at a *layer transition* rather than at a single layer
4. Describe how the DIKI framing differs from the older DIKW Hierarchy and why "Insight" is now preferred over "Wisdom"

### Suggested Activities

1. **Exploration (5 min)** — Have students hover through all four layers, reading the patient example at each level
2. **Classification Drill (10 min)** — Present 10 short statements drawn from a different domain (e.g., retail, weather, school) and have students classify each as Data, Information, Knowledge, or Insight
3. **Find-the-Layer-Transition (15 min)** — Present three IS project failure case studies and have students identify *which transition* failed: D→I, I→K, or K→Insight
4. **Build-Your-Own (10 min)** — Students pick a domain (their own job, a hobby, a sport) and write one example at each of the four layers

### Assessment

- Quiz items asking the student to classify a statement into the correct DIKI layer
- Short answer: "Describe a real or fictional IS project that failed at the Information→Knowledge transition. What broke?"
- Comparison essay: "When would you call the top layer *Insight* instead of *Wisdom*, and why does it matter to a data team?"

## References

- Ackoff, R. L. (1989). From Data to Wisdom. *Journal of Applied Systems Analysis*.
- Rowley, J. (2007). The wisdom hierarchy: representations of the DIKW hierarchy. *Journal of Information Science*.
- Frické, M. (2009). The Knowledge Pyramid: A Critique of the DIKW Hierarchy. *Journal of Information Science*.

## Related Resources

- [Chapter 1: Foundations of Information Systems](../../chapters/01-foundations/index.md)
