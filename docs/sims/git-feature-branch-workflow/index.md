---
title: Feature-Branch Git Workflow
description: An interactive vis-network visualization of a feature-branch Git workflow — branch creation, commits, pull request, code review, fix-up commits, CI, approval, merge, and deployment.
image: /sims/git-feature-branch-workflow/git-feature-branch-workflow.png
og:image: /sims/git-feature-branch-workflow/git-feature-branch-workflow.png
twitter:image: /sims/git-feature-branch-workflow/git-feature-branch-workflow.png
status: implemented
library: vis-network
bloom_level: Apply
social:
   cards: false
---

# Feature-Branch Git Workflow

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Git Workflow MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A typical feature-branch workflow as a graph of commits and review events: branch off `main`, push three commits (one of which fails CI), open a pull request, address review comments with a fix-up commit, get approval, merge, deploy. The diagram makes the *whole* lifecycle visible — including the parts that don't appear in `git log`.

### How to Use

1. Click **Play Feature Lifecycle** to walk through every step in order
2. **Click any node** to see its commit message, author, and CI status

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/git-feature-branch-workflow/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Trace a feature from branch creation through deployment
2. Identify where code review and CI checks fit in the timeline
3. Distinguish a regular commit from a merge commit and a deployment
4. Explain why fix-up commits are normal and expected, not signs of bad work

### Suggested Activities

1. **Lifecycle Walk (5 min)** — Play the lifecycle; pause at each step and explain
2. **CI Failure Drill (10 min)** — Locate the failing commit; describe what the developer does next
3. **Review Comment Practice (10 min)** — Write the kind of review comment that would prompt the F5 fix-up commit

## References

- Atlassian. *Git Tutorials — Feature Branch Workflow*.
- Pro Git Book, ch. 3 (Branching).

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
