---
title: Modern Enterprise Network Topology
description: An interactive enterprise network topology with three sites (HQ, Branch, Plant), SD-WAN, MPLS, broadband, LTE failover, AWS Direct Connect, SaaS, and a VPN tunnel. Trace packets and simulate a link failure.
image: /sims/enterprise-network-topology/enterprise-network-topology.png
og:image: /sims/enterprise-network-topology/enterprise-network-topology.png
twitter:image: /sims/enterprise-network-topology/enterprise-network-topology.png
status: implemented
library: vis-network
bloom_level: Understand
social:
   cards: false
---

# Modern Enterprise Network Topology

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Network Topology MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A typical mid-size enterprise network: three sites (Headquarters, Branch, Manufacturing Plant), each with their own LAN and SD-WAN edge appliance, connected through a WAN cloud to the public Internet, an AWS region (via Direct Connect), and a Salesforce SaaS. A remote worker reaches HQ over a VPN tunnel.

This MicroSim lets you trace a packet from a HQ user to four very different destinations and watch how the path changes. You can also **fail the HQ MPLS circuit** to see SD-WAN automatically reroute to broadband.

### How to Use

1. **Click any node** to see its category, typical bandwidth, latency, and cost
2. **Pick a trace** to animate a packet from origin to destination
3. **Fail the MPLS circuit** to see SD-WAN failover in action

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/enterprise-network-topology/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Identify each network category (LAN, WAN, VPN, SD-WAN, Direct Connect) in a real-world topology
2. Trace traffic from a user to four different destinations
3. Explain what SD-WAN does when a primary link fails
4. Compare bandwidth, latency, and cost across LAN, WAN, internet, and Direct Connect

### Suggested Activities

1. **Category Quiz (5 min)** — Click each node; quiz students on its category before revealing
2. **Trace Comparison (10 min)** — Run all four traces; rank them by latency
3. **Fail-and-Recover (10 min)** — Fail the MPLS link; describe what happens to user experience and to cost

### Assessment

- Match an enterprise component to its network category
- Order four destinations by typical latency
- Explain the role of SD-WAN in three sentences

## References

- Tanenbaum, A. (2011). *Computer Networks*, 5th ed.
- Cisco. *SD-WAN Architecture Reference Guide*.

## Related Resources

- [Chapter 11: Networks and Telecommunications for Business](../../chapters/11-networks/index.md)
