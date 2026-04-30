---
title: Technical Debt Feedback Loop
description: An interactive causal-loop diagram showing the reinforcing feedback that turns technical debt into a doom loop, with three leverage-point interventions that turn it into a controllable system.
image: /sims/tech-debt-feedback-loop/tech-debt-feedback-loop.png
og:image: /sims/tech-debt-feedback-loop/tech-debt-feedback-loop.png
twitter:image: /sims/tech-debt-feedback-loop/tech-debt-feedback-loop.png
status: implemented
library: vis-network
bloom_level: Analyze
social:
   cards: false
---

# Technical Debt Feedback Loop

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Tech Debt Feedback MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A **causal-loop diagram** that makes the *reinforcing* dynamic of technical debt visible. Five variables — Technical Debt, Development Velocity, Schedule Pressure, Shortcut Rate, Defect Rate — feed back into each other, and the more debt you have, the more debt you accumulate.

Click **Add Leverage Points** to introduce three structural interventions:

- **Protected Refactor Capacity** (cuts the shortcut path)
- **Debt Visibility** (cuts the debt-accumulation path)
- **Engineering Leadership Cover** (cuts the schedule-pressure path)

The visual transition from doom loop to controllable system is the lesson.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/tech-debt-feedback-loop/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Identify a reinforcing feedback loop in a system diagram
2. Articulate why a reinforcing loop produces compounding cost over time
3. Name three structural interventions that break the loop
4. Apply the same loop pattern to other domains (operational debt, customer-support debt, security debt)

### Suggested Activities

1. **Read the Loop (5 min)** — Trace each arrow; recite the polarity in your own words
2. **Apply the Pattern (15 min)** — Build a similar loop diagram for *security debt* or *operational debt*
3. **Defend a Leverage Point (10 min)** — In one paragraph, explain why "protected refactor capacity" is more powerful than "telling engineers to write better code"

## References

- Cunningham, W. (1992). *The WyCash Portfolio Management System* (origin of "tech debt").
- Meadows, D. (2008). *Thinking in Systems: A Primer*.

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
