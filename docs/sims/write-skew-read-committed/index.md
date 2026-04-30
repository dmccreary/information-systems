---
title: Write Skew Under Read Committed Isolation
description: A step-through of two concurrent database transactions that trigger a write-skew anomaly under Read Committed isolation, with a Serializable replay that prevents the anomaly.
image: /sims/write-skew-read-committed/write-skew-read-committed.png
og:image: /sims/write-skew-read-committed/write-skew-read-committed.png
twitter:image: /sims/write-skew-read-committed/write-skew-read-committed.png
status: implemented
library: p5.js
bloom_level: Analyze
social:
   cards: false
---

# Write Skew Under Read Committed

<iframe src="main.html" height="582px" width="100%" scrolling="no"></iframe>

[Run the Write Skew MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A canonical **write-skew** anomaly. Two concurrent transactions both check the rule "≥1 doctor must remain on call," each sees that the rule is satisfied, and each releases a different doctor. Under Read Committed, both commit; the result is zero doctors on call. Switch to **Serializable** isolation and replay: one transaction is aborted and retried, and the rule holds.

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Trace two concurrent transactions through a write-skew scenario
2. Identify why Read Committed allows the anomaly
3. Explain how Serializable prevents it at the cost of one rollback

## Related Resources

- [Chapter 6: Data Management Foundations](../../chapters/06-data-foundations/index.md)
