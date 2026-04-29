---
title: A Modern Enterprise Network — LAN, WAN, VPN, SD-WAN, Cloud
description: A Modern Enterprise Network — LAN, WAN, VPN, SD-WAN, Cloud
status: scaffold
library: vis-network
bloom_level: TBD
---

# A Modern Enterprise Network — LAN, WAN, VPN, SD-WAN, Cloud

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
[Chapter 11: 'Networks and Telecommunications for Business'](../../chapters/11-networks/index.md).

```text
Type: interactive-infographic
**sim-id:** enterprise-network-topology<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network topology diagram showing a typical mid-size enterprise network. On the left: three sites — Headquarters (large), Branch Office (medium), and a Manufacturing Plant (medium) — each rendered as a rounded container with internal LAN icons (switch, wireless access points, user laptops). Each site has an SD-WAN appliance at its edge. The HQ has two WAN connections (MPLS + broadband internet); the branch has two broadband internet connections; the plant has one broadband + one LTE failover. Lines from each site cross the WAN cloud in the middle of the diagram. Beyond the WAN cloud sit three destinations: the public Internet (with a sample customer device), a "Cloud Provider" container labeled AWS with a Direct Connect circuit drawn as a thick private line from HQ, and a SaaS icon (Salesforce). A remote worker icon at the bottom shows a VPN tunnel (dashed encrypted line) crossing the public internet and entering HQ.

Color palette: LAN regions in soft mascot-emerald, WAN cloud in slate-gray, public internet in pale yellow, cloud provider in mascot-magenta tints, SD-WAN appliances in coral, VPN tunnel in dashed teal. Direct Connect circuit drawn thicker than the public-internet links.

Interactivity: hovering each element reveals (a) what category it is (LAN/WAN/VPN/SD-WAN/Direct Connect), (b) typical bandwidth, (c) typical latency, (d) typical monthly cost order-of-magnitude. A "trace a packet" button animates a packet from a HQ user to (a) the public website, (b) Salesforce SaaS, (c) AWS via Direct Connect, (d) a remote VPN user — showing the path each one takes. A "fail a link" button lets the student knock out the MPLS circuit at HQ and watch SD-WAN reroute traffic over broadband automatically.

Layout: hierarchical, left-to-right, full canvas width, height ~600px. Edge labels use a slight y-offset to work around the vis-network horizontal-edge label rendering bug. Canvas resizes on window resize.

Learning objective (Bloom: Understanding): Students can identify each network category in a real-world enterprise topology, trace traffic from a user to four different destinations, and explain what SD-WAN does when a primary link fails.

Implementation: vis-network, deployed at `/information-systems/sims/enterprise-network-topology/`.
```

## Related Resources

- [Chapter 11: 'Networks and Telecommunications for Business'](../../chapters/11-networks/index.md)
