---
title: Six Rs Cloud Migration Decision Tree
description: An interactive decision tree for choosing one of the Six Rs (Retire, Repurchase, Refactor, Replatform, Rehost, Retain) for a cloud migration workload, with worked examples.
image: /sims/six-rs-decision-tree/six-rs-decision-tree.png
og:image: /sims/six-rs-decision-tree/six-rs-decision-tree.png
twitter:image: /sims/six-rs-decision-tree/six-rs-decision-tree.png
status: implemented
library: vis-network
bloom_level: Apply
social:
   cards: false
---

# Six Rs Cloud Migration Decision Tree

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Six Rs MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

When you've got a portfolio of legacy applications and a migration deadline, you need a way to *triage* — and the **Six Rs** (Retire, Repurchase, Refactor, Replatform, Rehost, Retain) is the framework most cloud teams use. This decision tree walks through five questions that lead to one of the six recommendations.

### How to Use

1. Click **Trace Example: HR Portal** for a worked walkthrough
2. **Click any leaf** to see what the strategy means, its typical timeline, and a real-world example

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/six-rs-decision-tree/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Apply the Six Rs decision tree to an unfamiliar workload
2. Choose the appropriate R and defend the choice
3. Estimate the timeline implications of each strategy
4. Identify when *Retain* is a better short-term choice than any of the others

### Suggested Activities

1. **Portfolio Triage (15 min)** — Given 8 sample applications, walk each through the tree
2. **Defend Your Choice (10 min)** — For your chosen R on one workload, write a one-paragraph rationale
3. **Replatform vs Refactor (10 min)** — When does Replatform stop being enough? Where's the threshold?

## References

- AWS. *6 Strategies for Migrating Applications to the Cloud*.
- Gartner. *Five Ways to Migrate Applications to the Cloud*.

## Related Resources

- [Chapter 12: Cloud Computing and Infrastructure](../../chapters/12-cloud/index.md)
