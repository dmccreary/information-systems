---
title: As-Is vs To-Be Automation Comparison
description: A side-by-side comparison of manual, RPA, and workflow-automation versions of the same employee onboarding process, with cycle-time bars, handoff counts, and Lean-waste highlights.
image: /sims/as-is-to-be-automation-comparison/as-is-to-be-automation-comparison.png
og:image: /sims/as-is-to-be-automation-comparison/as-is-to-be-automation-comparison.png
twitter:image: /sims/as-is-to-be-automation-comparison/as-is-to-be-automation-comparison.png
status: implemented
library: p5.js
bloom_level: Evaluate
social:
   cards: false
---

# As-Is vs To-Be Automation Comparison

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Automation Comparison MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

The same employee-onboarding process modeled three ways: **Manual** (9 days, lots of handoffs), **RPA** (3 days, bots replace data entry), and **Workflow Automation** (1 day, API orchestration). Switch panels to compare cycle time, handoff count, and value-added ratio. Toggle **Show 8 Wastes** to highlight the Lean wastes that disappear with each generation of automation.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/as-is-to-be-automation-comparison/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Compare manual, RPA, and workflow-automation versions of the same process
2. Quantify cycle-time and handoff differences
3. Articulate the tradeoffs of each approach (RPA = quick + fragile; Workflow = slower + strategic)
4. Identify Lean wastes in a manual process

### Suggested Activities

1. **Three-Panel Walk (10 min)** — Walk through each panel; record stats
2. **Tradeoff Essay (15 min)** — Defend RPA-first or Workflow-first as a starting strategy for a small company
3. **Waste Hunt (10 min)** — In the manual panel, find every instance of Waiting and Motion

## References

- van der Aalst, W. (2018). *Robotic Process Automation*.
- Lean Enterprise Institute. *Lean Lexicon*.

## Related Resources

- [Chapter 5: Business Process Management](../../chapters/05-bpm/index.md)
