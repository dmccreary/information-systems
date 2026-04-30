---
title: Sprint Burndown Chart (Ideal vs Actual)
description: An interactive Chart.js sprint burndown showing ideal vs actual progress, with annotated blockers, scope-change events, and a velocity-based forecast for the next sprint.
image: /sims/sprint-burndown-chart/sprint-burndown-chart.png
og:image: /sims/sprint-burndown-chart/sprint-burndown-chart.png
twitter:image: /sims/sprint-burndown-chart/sprint-burndown-chart.png
status: implemented
library: Chart.js
bloom_level: Analyze
social:
   cards: false
---

# Sprint Burndown Chart (Ideal vs Actual)

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Sprint Burndown Chart Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This MicroSim shows a 10-day sprint that *missed its goal* — and then explains why. The dashed slate-gray line is the **ideal burndown** (a perfectly linear 50→0 over 10 days). The magenta line is the **actual burndown**, complete with the bumps real teams encounter:

- **Day 3-4 plateau** — the API authentication story got blocked on a security review
- **Day 5 sharp drop** — unblocked, the team cleared 12 points in a single day
- **Day 7 upward tick** — the product owner added a "small" 5-point story mid-sprint
- **Day 10 ending at 8 points** — sprint goal missed

Below the burndown is a **velocity history** for the team's last six sprints with a trendline. Click **Show Velocity Forecast** to overlay a velocity-based projection for the next sprint — a far more honest commitment than the ideal line.

### How to Use

1. **Hover** any point on the actual line to see what happened that day
2. **Click** *Show Velocity Forecast* to overlay the velocity-based forecast for the next sprint
3. **Compare** the actual line against the velocity history below — does the team's commitment match its capacity?

## Embedding This MicroSim

You can include this MicroSim on your website using the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/sprint-burndown-chart/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Read a burndown chart and distinguish ideal from actual progress
2. Identify scope-change events, blockers, and breakthroughs from the chart's shape
3. Calculate average team velocity from sprint history
4. Forecast a realistic next-sprint commitment using velocity rather than aspiration

### Suggested Activities

1. **Pattern Reading (10 min)** — Show the burndown without annotations. Have students predict which day a blocker hit and which day scope was added.
2. **Velocity Math (10 min)** — Compute the team's average velocity across the six historical sprints. Compare against the 50-point commitment.
3. **Re-Plan the Sprint (15 min)** — Given the velocity forecast, what's a realistic story-point target for Sprint 28? Justify in two sentences.
4. **Spot the Anti-Pattern (10 min)** — Identify the *scope-creep moment* on Day 7 and draft a one-paragraph response the team could give to the product owner.

### Assessment

- Quiz: Match each shape (plateau, sharp drop, upward tick) to its likely cause
- Short answer: "Why is the velocity forecast a more honest commitment than the ideal line?"
- Essay: "If you were the scrum master in Sprint 27, what *one* change would you advocate for Sprint 28?"

## References

- Schwaber, K. & Sutherland, J. (2020). *The Scrum Guide*.
- Cohn, M. (2005). *Agile Estimating and Planning*.
- Atlassian — [Burndown Charts](https://www.atlassian.com/agile/tutorials/burndown-charts)

## Related Resources

- [Chapter 16: IS Project Management](../../chapters/16-project-management/index.md)
