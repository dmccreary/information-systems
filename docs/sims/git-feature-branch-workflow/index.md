---
title: A Simple Feature-Branch Git Workflow
description: A Simple Feature-Branch Git Workflow
status: scaffold
library: vis-network
bloom_level: TBD
---

# A Simple Feature-Branch Git Workflow

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
[Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md).

```text
Type: interactive-infographic
**sim-id:** git-feature-branch-workflow<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram visualizing a feature-branch Git workflow as a directed graph of commit nodes. The `main` branch runs horizontally across the middle of the canvas at y=480. Feature branches diverge upward and downward from `main`, advance through several commit nodes, and merge back via pull-request nodes. To work around the vis-network horizontal-edge label rendering bug, branch lines use a slight y-offset (e.g., 480 to 490) so labels render correctly on initial load.

Color palette: `main` branch in mascot-emerald, feature branches in shades of teal and amber, pull-request merge commits in a contrasting coral. Failed CI checks marked with a red badge; passed checks with a green checkmark.

Interactivity: hovering a commit shows the commit message, author, and CI status; hovering a pull-request node shows the PR title, the reviewer, and the merge-status. A "play" control walks through a typical feature lifecycle: branch creation, three commits, push, PR opened, code review comments, fix-up commits, CI passing, PR approved, merge to `main`, deployment trigger fired.

Layout: hierarchical with custom positioning to preserve the linear timeline metaphor. Canvas resizes on window resize, height ~480px.

Learning objective (Bloom: Applying): Students can trace a feature from branch creation through merge, and identify where code review and CI checks fit into the timeline.

Implementation: vis-network, deployed at `/information-systems/sims/git-feature-branch-workflow/`.
```

## Related Resources

- [Chapter 4: Application Development for IS](../../chapters/04-appdev/index.md)
