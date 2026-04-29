---
title: Zero Trust Architecture vs Castle-and-Moat
description: Zero Trust Architecture vs Castle-and-Moat
status: scaffold
library: vis-network
bloom_level: TBD
---

# Zero Trust Architecture vs Castle-and-Moat

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
[Chapter 14: 'Security of Information Assets'](../../chapters/14-security/index.md).

```text
Type: interactive-infographic
**sim-id:** zero-trust-vs-castle-moat<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network side-by-side architectural comparison. Left panel (Castle-and-Moat): a thick perimeter firewall surrounds a flat internal network containing app servers, databases, and file shares; once a user/device crosses the perimeter via VPN, they have broad access to everything inside. Right panel (Zero Trust): no implicit perimeter; every user, device, and service connects through a *policy enforcement point* that consults an identity provider, a device-posture service, and a policy engine on every request; each app/db is a separately protected resource, and a compromised laptop or stolen credential can only reach exactly what the policy currently permits.

Color palette: castle perimeter in slate-gray with a stone-wall texture, internal network in soft-blue, zero-trust policy engines in mascot-emerald, identity provider in mascot-magenta, denied paths in muted red. An animated "attacker" token can be dropped into either panel; in the castle panel it spreads laterally to multiple resources; in the zero-trust panel it gets stopped at the first policy enforcement point past the breached endpoint.

Interactivity: hover any node for a definition; toggle the "compromised credential" simulation to watch the difference in blast radius; toggle a "device unhealthy" condition to see the zero-trust policy engine refuse access mid-session. A side panel quantifies blast radius (number of reachable resources) for each scenario.

Layout: side-by-side panels, full canvas width, height ~580px. Sequence flows use slight y-offsets to work around the vis-network horizontal-edge-label rendering bug.

Learning objective (Bloom: Analyzing): Students can articulate the structural difference between perimeter-based and zero-trust security, and predict the blast radius of a credential compromise under each model.

Implementation: vis-network, deployed at `/information-systems/sims/zero-trust-vs-castle-moat/`.
```

## Related Resources

- [Chapter 14: 'Security of Information Assets'](../../chapters/14-security/index.md)
