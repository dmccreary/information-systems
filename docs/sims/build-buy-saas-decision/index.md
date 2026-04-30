---
title: Build vs Buy vs SaaS Decision Flow
description: An interactive decision tree that walks through the four key questions IS leaders use to choose between Building, Buying, and Subscribing to SaaS for any given capability.
image: /sims/build-buy-saas-decision/build-buy-saas-decision.png
og:image: /sims/build-buy-saas-decision/build-buy-saas-decision.png
twitter:image: /sims/build-buy-saas-decision/build-buy-saas-decision.png
status: implemented
library: vis-network
bloom_level: Evaluate
social:
   cards: false
---

# Build vs Buy vs SaaS Decision Flow

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Decision-Tree MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

Every IS organization faces a recurring question for every new capability: do we **build** it, **buy** a packaged product, or **subscribe** to a SaaS? This decision tree codifies the four questions that experienced practitioners ask:

1. Is this capability a **strategic differentiator**?
2. Will it **change frequently**?
3. Does a mature SaaS cover **80%+** of requirements?
4. Are there **data sovereignty or regulatory** constraints?

Each leaf shows a recommendation with a real-world example, the most common failure mode of choosing that path inappropriately, and the typical 5-year cost shape.

### How to Use

1. **Click any node** for examples and failure modes
2. **Walk a real capability** down the tree (e.g., "tax calculation," "recommendation engine," "payroll")
3. **Reflect** on whether your organization has chosen the path the tree predicts

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/build-buy-saas-decision/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Apply the four-question heuristic to any capability
2. Justify a Build, Buy, or SaaS recommendation with explicit reasoning
3. Name the most common failure mode for each path
4. Estimate the 5-year cost shape for each option

### Suggested Activities

1. **Capability Sort (10 min)** — Given 8 capabilities (CRM, payroll, recommendation engine, etc.), walk each one down the tree
2. **Find a Mistake (10 min)** — In a case study, identify a capability where the company chose the *wrong* path, and explain why
3. **Defend a Choice (15 min)** — Pick one capability your school or workplace runs. Defend or challenge the choice in two sentences

### Assessment

- Match real-world examples to their tree path
- Explain why "80% fit" is the threshold for SaaS rather than 60% or 100%
- Describe the failure mode of building a commodity capability

## References

- Hax, A. & Wilde, D. (2003). *The Delta Project*.
- Carr, N. (2003). "IT Doesn't Matter," *Harvard Business Review*.

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
