---
title: Zero Trust vs Castle-and-Moat
description: A side-by-side comparison of perimeter security (castle-and-moat) vs zero trust, with simulations of compromised credentials and unhealthy devices to show the blast-radius difference.
image: /sims/zero-trust-vs-castle-moat/zero-trust-vs-castle-moat.png
og:image: /sims/zero-trust-vs-castle-moat/zero-trust-vs-castle-moat.png
twitter:image: /sims/zero-trust-vs-castle-moat/zero-trust-vs-castle-moat.png
status: implemented
library: vis-network
bloom_level: Analyze
social:
   cards: false
---

# Zero Trust vs Castle-and-Moat

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Zero Trust MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A side-by-side comparison of the two dominant network-security paradigms:

- **Castle-and-Moat** (left) — a perimeter firewall protects a flat internal network. Once past the moat, the attacker has broad lateral access.
- **Zero Trust** (right) — no implicit perimeter. Every request is authenticated, authorized, and posture-checked at a Policy Enforcement Point.

Click **Simulate Compromised Credential** to see the difference in blast radius. Click **Simulate Unhealthy Device** to see Zero Trust revoke access mid-session — something Castle-and-Moat fundamentally cannot do.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/zero-trust-vs-castle-moat/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Articulate the structural difference between perimeter and zero-trust security
2. Predict the blast radius of a credential compromise under each model
3. Identify the three components of Zero Trust (identity, device posture, policy)
4. Explain why Zero Trust requires per-request authorization

### Suggested Activities

1. **Blast-Radius Drill (10 min)** — Run both simulations; quantify reachable resources for each
2. **Architecture Mapping (15 min)** — For your school or workplace, identify which paradigm dominates today
3. **Migration Sketch (15 min)** — Sketch a 90-day plan to start moving one application toward Zero Trust

## References

- NIST SP 800-207, *Zero Trust Architecture* (2020).
- Forrester. *No More Chewy Centers* (2010).

## Related Resources

- [Chapter 14: Security of Information Assets](../../chapters/14-security/index.md)
