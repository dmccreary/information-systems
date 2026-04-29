---
title: 'Networks and Telecommunications for Business'
description: How IS managers think about networks — LANs, WANs, VPNs, SD-WAN, cloud connectivity, capacity, latency, SLAs, redundancy, monitoring, and procurement — without getting buried in routing-protocol minutiae.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# Networks and Telecommunications for Business

## Summary

Treats networks at the level the IS professional must manage them: LAN/WAN concepts, cloud connectivity, VPN, SD-WAN, telecom procurement, capacity planning, and SLAs.

**Role in the course:** Equip students to *manage* networks, not engineer them — the procurement, capacity, and SLA decisions IS leaders actually make.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

1. Local Area Network
2. Wide Area Network
3. Internet
4. Intranet
5. Extranet
6. VPN
7. SD-WAN
8. Bandwidth Capacity Planning
9. Latency
10. Throughput
11. Service Level Agreement
12. Cloud Connectivity
13. Network Redundancy
14. Network Monitoring
15. Telecom Procurement

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Information Systems](../01-foundations/index.md)
- [Chapter 2: The Role of IS in Organizations](../02-role-of-is/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 11. The good news: this chapter will not ask you to memorize the OSI model or recite the difference between BGP and OSPF. Those are wonderful topics for a networking class, but this is an IS-management book, and the questions you will actually face in your career are different. You will be the person who has to decide whether to buy a 1 Gbps circuit or a 10 Gbps circuit. You will be the person who notices that the "redundant" pair of fiber links from your "two different carriers" both run through the same conduit under the same bridge. You will be the person reading an SLA at 11pm trying to figure out whether the credits cover the lost weekend. By the end of this chapter you will know how to ask the right questions, read the right contracts, and avoid the most expensive footguns. Let's go.

## Why Networks Are an IS-Management Topic

Networks are the circulatory system of every information system. Every database query, every video call, every ERP transaction, every prompt sent to an LLM, every log line shipped to a monitoring service — all of it travels over a network. When the network is healthy, nobody thinks about it. When the network is unhealthy, *nothing else works*, and the people who built the database, the application, and the AI model all stand around looking at the network team. This is structurally similar to plumbing in a building: invisible until it isn't, and then suddenly the most important thing in the world.

For an IS manager, the network is mostly a procurement-and-design problem rather than a coding problem. You are deciding which carriers to buy from, how much capacity to buy, how to connect the office to the cloud, whether to encrypt traffic over the public internet or pay for a private circuit, what response times to demand, and what penalties apply when the carrier misses them. The technology underneath those decisions is genuinely fascinating — but the *decisions* are where careers are made. Get them right and the network fades into the background, which is exactly where it belongs. Get them wrong and you will have eight ways to discover it, all of them painful.

There is also a systems-thinking reason networks deserve their own chapter. A network is the part of the information system where local optimization is most likely to backfire. Adding capacity at one site can shift the bottleneck somewhere else. Tightening security controls can drive users to consumer-grade workarounds. Saving money on redundancy looks brilliant for years and catastrophic on one Tuesday afternoon. Networks reward the manager who thinks holistically and punishes the one who optimizes in isolation.

## Local Area Network: The Inside

A **Local Area Network** (LAN) is the network inside a single physical site — an office building, a campus, a factory floor, a hospital wing. The defining property of a LAN is that the organization owns and operates the wiring, the switches, and the wireless access points that make it work. You decide where the cables go, what equipment to buy, and how to configure it. Latency on a LAN is measured in microseconds; speeds of 1 Gbps to 100 Gbps are routine; you are not paying anyone per gigabyte to move data inside it.

For most organizations the LAN is where the user experience is *born*. A user's laptop joins the wireless, gets an IP address, and from there reaches everything else — the printer, the file server, the on-premises ERP, the path to the WAN, and, eventually, the cloud. A wobbly LAN is a wobbly company; if Wi-Fi is bad in the executive conference room, you have an organizational problem dressed up as a technical one.

## Wide Area Network: The Outside

A **Wide Area Network** (WAN) connects geographically separated sites — a headquarters in Minneapolis to a regional office in Phoenix to a manufacturing plant in Tijuana. The defining property of a WAN is that you do *not* own the wires; you lease connectivity from a telecommunications carrier. The WAN is what crosses property lines, county lines, state lines, and oceans. Latency is measured in milliseconds (a US coast-to-coast round trip is around 60-80 ms at the speed of light, and real circuits add to that). Speeds typically range from tens of Mbps for small branches up to multi-gigabit circuits for data-center interconnects. You pay for capacity by the month, often for years at a time.

The IS-management questions about a WAN are entirely different from the ones about a LAN. *How much capacity?* *From which carriers?* *On what kind of contract?* *What happens when a backhoe finds the fiber?* This is where the business of telecom lives.

| Dimension          | Local Area Network (LAN)            | Wide Area Network (WAN)                 |
|--------------------|-------------------------------------|-----------------------------------------|
| Geographic scope   | Single site or campus               | Multiple sites, often global            |
| Ownership          | Organization owns wires & equipment | Carrier owns the wires; you lease       |
| Typical speed      | 1-100 Gbps                          | 10 Mbps - 100 Gbps per circuit          |
| Typical latency    | Microseconds                        | Milliseconds (often 10-200 ms)          |
| Cost model         | Capital + small ongoing             | Recurring monthly per circuit           |
| Failure mode       | Bad cable, bad switch, bad AP       | Carrier outage, fiber cut, BGP issue    |
| Manager's question | "Is the Wi-Fi good enough?"         | "Are we buying enough, and from whom?"  |

## Internet, Intranet, and Extranet: Three Audiences, Three Networks

The next three terms are easy to confuse because they sound similar and were named in an era when the prefix "intra-" was apparently endorsed by every marketing department. Sort them out once and they stay sorted.

The **Internet** is the global network of networks — the public, decentralized internetwork that any organization can join by buying connectivity from any internet service provider. The internet is what your customers use to reach you, what your phone uses to fetch email, what your applications use to call third-party APIs. It is enormous, cheap per bit, and entirely beyond your control. Anyone can be on it; that is its strength and the source of every security problem you will ever have.

An **Intranet** is a private network that uses the *same technologies* as the internet (TCP/IP, HTTP, browsers, the whole stack) but is restricted to inside the organization. The classic intranet hosts internal portals, HR systems, the company directory, and the wiki where someone wrote down the password for the conference-room AV system three years ago. An intranet is *technically* an internet in miniature; what makes it an intranet is that the audience is your own employees and the network it runs on is yours.

An **Extranet** is a private network that extends *beyond* the organization to selected partners — suppliers, distributors, contractors, key customers. An extranet is what a manufacturer offers a supplier so the supplier can see open purchase orders, ship-to addresses, and inventory positions. It uses internet technology, sometimes runs over the public internet (with VPN or other access controls), and is restricted to a defined set of named outsiders. The audience is the discriminator: the internet is *everyone*, the intranet is *us*, the extranet is *us-plus-some-of-them*.

| Network type | Audience                       | Typical content                            | Access control                      |
|--------------|--------------------------------|--------------------------------------------|-------------------------------------|
| Internet     | Anyone in the world            | Public website, customer portal, APIs      | Public, with site-by-site auth      |
| Intranet     | Employees of the organization  | HR portal, internal wiki, expense system   | Domain login, often network-bound   |
| Extranet     | Named external partners        | Supplier portal, customer order tracking   | Strong identity + contract-bound    |

## VPN: Pretending the Public Internet Is Private

A **Virtual Private Network** (VPN) is a tunnel that makes a remote device or site behave, network-wise, as if it were directly on a private network — even though the traffic is actually crossing the public internet. The "virtual" is doing real work in that name: there is no actual private wire; there is a stream of encrypted packets that the endpoints decrypt and treat as if they had arrived over a leased line.

VPNs come in two main flavors. *Remote-access* VPNs let an individual user (the laptop in a coffee shop, the engineer working from home) appear to be on the corporate network. *Site-to-site* VPNs connect entire offices to each other — typically a small branch to a headquarters — over the public internet, replacing what would historically have been a leased line.

The strategic value of a VPN is cost. Encrypting traffic over the public internet is dramatically cheaper than buying a private circuit, especially for low-traffic remote sites. The cost is *predictability*: VPN traffic shares the public internet with everyone else's traffic, so latency and throughput are whatever the public internet happens to be doing today. For email, file access, and ordinary business apps that's fine. For a real-time control system or a phone call, sometimes it isn't.

There is a footgun here worth naming. Many organizations treat "we have a VPN" as the answer to *all* security and connectivity questions. A VPN proves the *connection* is encrypted; it says nothing about whether the *device* on the other end is trustworthy, whether the user is who they claim to be, or whether the application requires further controls. Treating the VPN tunnel as a perimeter and the inside as automatically trusted is exactly the model that "zero trust" architectures emerged to replace. The structural fix is to authenticate every request to every application regardless of how the user got onto the network, which we will revisit when we get to security.

## SD-WAN: The WAN Gets Smart

For decades, WAN connectivity meant buying expensive private circuits — typically MPLS, the dominant carrier offering — and letting the carrier handle the routing. MPLS gave you predictable performance and a single throat to choke when things went wrong, at a price per megabit that could make a CFO weep. Then the public internet got fast and reliable enough that the calculus changed.

**SD-WAN** — Software-Defined WAN — is a category of equipment and software that lets an organization use *multiple* underlying connections (broadband internet, LTE/5G, satellite, MPLS) at each site, with a controller that decides in real time which traffic should ride which path. Voice traffic might prefer the lowest-latency link; bulk backup traffic might prefer the cheapest link; a critical SAP transaction might be sent down two links simultaneously and whichever copy arrives first wins. The "software-defined" part is that the routing policy is centralized — an administrator sets policies in a controller and pushes them to every site, instead of configuring each branch router by hand.

The strategic appeal of SD-WAN is dramatic cost reduction without losing reliability. A branch that used to need an expensive MPLS circuit can often be served by two cheap broadband connections plus an SD-WAN box, at a fraction of the cost, with redundancy *better* than the single MPLS circuit it replaced. The tradeoff is that you are now responsible for the policy: when SD-WAN works well, it is because somebody thought carefully about which apps are sensitive to latency, which to packet loss, which to bandwidth. Drop in SD-WAN with default settings and the savings appear; the *quality* improvement requires attention.

## Cloud Connectivity: The New Gravity Center

Twenty years ago a company's "network" terminated mostly at its own data centers. Today, for most companies, the most important destinations on the network are AWS, Azure, GCP, and a handful of SaaS providers (Salesforce, Workday, ServiceNow). The network has, in effect, a new center of gravity, and **Cloud Connectivity** is the discipline of designing the path between your sites and that gravity center.

Cloud connectivity comes in three increasingly serious flavors:

- **Internet connectivity to public endpoints.** The cheapest option: your traffic to AWS goes out your normal internet connection, across the public internet, into AWS's edge. Fine for most workloads. Subject to the variability of the public internet.
- **Peering** — the cloud provider has a presence in a major internet exchange, and your ISP exchanges traffic with them there directly, cutting out intermediate hops. Cheaper and more predictable than pure public-internet routing for high-volume destinations.
- **Direct connect** (AWS Direct Connect, Azure ExpressRoute, Google Cloud Interconnect) — a private circuit from your data center or colocation facility into the cloud provider's backbone, with predictable bandwidth, predictable latency, often a price-per-gigabyte that's *lower* than egress over the public internet, and a private SLA. Used for large, latency-sensitive, or compliance-bound workloads.

The IS-management decision is which workloads deserve which tier. Email and web apps over public internet — fine. Backup of half a petabyte of clinical imaging from on-premises to S3 every night — direct connect, every time, both for cost and for the predictable completion window. Voice traffic to a cloud-hosted call center — peering at minimum. The footgun here is treating "cloud" as a single thing with a single connectivity story; in reality each major workload deserves its own answer.

#### Diagram: A Modern Enterprise Network — LAN, WAN, VPN, SD-WAN, Cloud

<details markdown="1">
<summary>A Modern Enterprise Network — LAN, WAN, VPN, SD-WAN, Cloud</summary>
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
</details>

!!! mascot-thinking "Pause here"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    The single mental model worth carrying out of this chapter is the *layering*: LAN inside, WAN between, internet/cloud beyond. Every connectivity decision lives in exactly one of those three layers, and the right answer almost always depends on which layer the decision belongs to. A weak Wi-Fi signal in a conference room is a LAN problem and no amount of bandwidth from your carrier will fix it. A slow ERP transaction from a branch office may be a WAN problem and no amount of LAN-side tuning will help. A laggy SaaS dashboard is often a *cloud connectivity* problem disguised as either of the others. When users complain about "the network being slow," your first job is to figure out *which* network they mean. The fix is in a different drawer for each one.

## Bandwidth, Latency, and Throughput: Three Words That Are Not Synonyms

Now we get to the three words that every IS manager must distinguish, because they are casually used as synonyms by everyone outside the field and the confusion costs real money in real procurement decisions.

**Bandwidth** is the *capacity* of a link — the maximum rate at which it can move data, usually measured in bits per second. A "1 Gbps circuit" has a bandwidth of one gigabit per second. Bandwidth is what you buy. It is a property of the *pipe*, not of any particular conversation flowing through it.

**Latency** is the *time delay* between sending a packet and that packet arriving at its destination, usually measured in milliseconds. Latency is dominated by physics (the speed of light through fiber, plus a small overhead for each hop) and by congestion (queues at intermediate routers). Latency is a property of the *path*, not of how much you are sending. A 100 Gbps link from Boston to Sydney still has roughly 200 ms of one-way latency, because Sydney is a long way away and light has commitments.

**Throughput** is the *actual achieved data rate* of a particular conversation — what you measure, end-to-end, in practice. Throughput depends on bandwidth (you can't push more data than the pipe permits), latency (TCP and many other protocols slow down on long paths), packet loss, the application's own behavior, and the capacity of *every* device along the way. The general intuition is:

\( \text{throughput} \approx \min(\text{bandwidth along path}, \text{capacity of slowest device}, \text{protocol limit at this latency}) \)

This is why "we bought a 1 Gbps circuit and we're only seeing 200 Mbps" is a perfectly common, deeply confusing experience. The bandwidth is 1 Gbps. The throughput, on a high-latency path with TCP and lossy intermediate links, can easily be a fraction of that. **Bandwidth is what you bought; throughput is what you got; latency is part of why they differ.**

| Term       | What it is                            | Units                | Analogy                            |
|------------|---------------------------------------|----------------------|------------------------------------|
| Bandwidth  | Maximum capacity of the pipe          | bits per second      | Width of the highway               |
| Latency    | One-way (or round-trip) time delay    | milliseconds         | Length of the highway              |
| Throughput | Actual rate of a real data transfer   | bits per second      | Cars per second actually arriving  |

A useful rule of thumb: bandwidth problems are solved by *buying more*. Latency problems are solved by *moving the endpoints closer* (caching, CDNs, regional cloud). Throughput problems are solved by *finding the bottleneck* — which is, most often, somewhere you weren't looking.

#### Diagram: Bandwidth, Latency, and Throughput at a Glance

<details markdown="1">
<summary>Bandwidth, Latency, and Throughput at a Glance</summary>
Type: interactive-infographic
**sim-id:** bandwidth-latency-throughput<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js animation showing a horizontal "highway" between two nodes labeled Sender and Receiver. The pipe has an adjustable width (representing bandwidth) and an adjustable length (representing latency). Tiny packet rectangles travel left-to-right along the pipe, queuing at the entrance when the sender tries to push more than fits. A throughput meter on the right side measures actual packets-arrived-per-second. Three sliders let the student vary bandwidth (1 Mbps to 10 Gbps), one-way latency (1 ms to 300 ms), and packet loss (0% to 5%). A "TCP behavior" toggle shows how throughput collapses on long, lossy paths even when bandwidth is high.

Color palette: pipe walls in slate-gray, packets in mascot-emerald, queued packets in coral when they back up, throughput meter in mascot-magenta. Latency drawn as visible distance traveled.

Interactivity: students drag the sliders and see throughput change in real time. A preset menu provides representative scenarios: "LAN", "Same-region cloud", "Coast-to-coast", "Trans-Pacific", "Satellite link." Each preset locks bandwidth and latency to realistic values and lets the student observe the resulting throughput.

Layout: full canvas width, height ~480px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can predict why a high-bandwidth long-latency link delivers less throughput than its bandwidth would suggest, and identify the conditions under which adding bandwidth does and does not help.

Implementation: p5.js, deployed at `/information-systems/sims/bandwidth-latency-throughput/`.
</details>

## Bandwidth Capacity Planning: Buying Just Enough

**Bandwidth Capacity Planning** is the discipline of forecasting how much bandwidth each site, link, and cloud destination will need over a planning horizon (typically 12-36 months), and procuring accordingly. It sits at the intersection of telecom contracts (which lock in capacity for years) and business growth (which is uncertain by definition).

The three load-bearing inputs to a capacity plan are:

- **Current utilization.** What is each link actually carrying today, at peak, on a representative business day? Without instrumentation, you are guessing.
- **Growth drivers.** New users, new sites, new applications, new data flows. A cloud migration is a capacity event. A video-conferencing rollout is a capacity event. An AI initiative that ships training data to a cloud GPU cluster is a capacity event most organizations do not see coming.
- **Headroom policy.** A standard rule of thumb is to upgrade a link when sustained peak utilization passes 60-70%. Running links hot looks economically efficient and feels economically efficient until the day the application stack wedges and everyone discovers what queuing delay feels like.

There is a feedback loop worth seeing here. Capacity planning underestimate → outage on a peak day → emergency overprovision under pressure → permanent overspend → CFO scrutiny → underinvestment in the next round → repeat. The structural fix is to make capacity planning a *quarterly rhythm* with measured baselines, not an *annual budget exercise*. A capacity plan that updates only once a year is one that learns from outages instead of preventing them.

## Service Level Agreements: The Contract Underneath

A **Service Level Agreement** (SLA) is the contractual specification of the performance the carrier (or cloud provider, or any service vendor) commits to deliver, the metrics by which performance is measured, and the financial consequences of missing the commitment. SLAs are how the IS manager turns "we should have a reliable network" into a *number* that someone is on the hook for.

A well-formed network SLA names at least the following:

- **Availability.** The percentage of time the service is operational. "99.9% availability" sounds like a lot until you do the arithmetic: 99.9% allows about 8.76 hours of downtime per year. "99.99%" allows about 52 minutes. "99.999%" — the famous "five nines" — allows about 5 minutes. Each additional nine costs roughly an order of magnitude more.
- **Latency target.** The maximum round-trip latency between specified points, measured how, over what window.
- **Packet loss target.** The maximum percentage of packets that can be lost before the carrier is in violation.
- **Mean Time to Repair (MTTR).** How quickly the carrier commits to restoring service after an outage.
- **Service credits.** What the carrier will refund — usually a percentage of the affected month's charges — if the targets are missed.
- **Exclusions.** What the carrier will not be on the hook for. Acts of God, scheduled maintenance, customer-caused outages, force majeure. Read the exclusions before you read anything else.

| SLA component        | Typical value (mid-tier)        | Footgun to watch for                              |
|----------------------|---------------------------------|---------------------------------------------------|
| Availability         | 99.9% - 99.99%                  | Counted per circuit, not per *site*               |
| Latency              | 50 ms regional, 80 ms US-wide   | Measured between carrier POPs, not your routers   |
| Packet loss          | <0.1%                           | Averaged over a long window, hiding bursts        |
| MTTR                 | 4 hours target                  | Clock starts when *carrier* opens ticket          |
| Service credits      | 5%-25% of monthly fee           | Credits never approach business loss              |
| Maintenance windows  | "Reasonable notice"             | Sometimes interpreted as 24 hours                 |

!!! mascot-tip "Iris's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    Pro move when reading any vendor SLA: read the *exclusions* section first, the *credit calculation* section second, and the *headline availability number* last. The headline number is what the salesperson wants to talk about; the exclusions and the credit math are what determine whether the SLA is worth the paper. Ask one specific question before signing: "Walk me through what credits I would receive for a four-hour outage starting at 10am on a Tuesday." If the answer is vague, the SLA is vague, and you have just identified the work that needs to happen at the negotiating table.

The footgun in SLAs deserves to be stated as a *footgun* in the proper sense: it is silent, easy to trigger, and damaging in delayed, invisible ways. The footgun is treating *service credits as the cost of an outage*. They are not. A 25% credit on a $5,000 circuit is $1,250. A four-hour outage that prevents a manufacturing line from shipping is six figures of business loss, minimum. The SLA does not make you whole; it gives the carrier a number small enough to write off and large enough to feel motivating. The structural fix is to invest in *redundancy* (next section) so that *no single SLA failure causes a business outage*. The SLA is a backstop; it is not a strategy.

## Network Redundancy: Two Of Everything That Matters

**Network Redundancy** is the practice of providing more than one path for traffic to take, more than one device to handle a function, more than one carrier providing connectivity, so that the failure of any one component does not cause an outage. The principle is ancient (sailing ships had two masts) and the implementation is endlessly subtle.

The IS manager's redundancy checklist for a critical site looks roughly like this:

- **Two carriers.** Not "one carrier with two circuits" — two genuinely different carriers, with separate billing, separate operations centers, and separate fiber networks. When AT&T has a bad day, Verizon usually does not, and vice versa.
- **Two physical paths.** The carriers' fiber must take physically different routes into the building. This is the part organizations get wrong constantly: they buy two circuits from two carriers and discover, the day a backhoe finds the conduit under the river, that *both circuits ran through the same conduit*. Demand circuit-route diversity in writing, demand the carrier produce maps, and demand it again at every contract renewal.
- **Two pieces of equipment.** Router pairs, switch stacks, firewall clusters. Single boxes are single points of failure.
- **Two power feeds.** From two different utility transformers, ideally on two different grids, with a generator and UPS.
- **Two locations.** For genuinely critical workloads, the work itself runs in two data centers (or two cloud regions) so that the loss of an entire site is recoverable.

Redundancy costs money. Two carriers cost more than one. Two paths cost more than one. Two routers cost more than one. The systems-thinking question is *how much availability does each marginal dollar of redundancy actually buy?* The relationship is non-linear: the second carrier might double your effective availability; the third carrier might add a fraction of a percent. Most organizations find their sweet spot at *two of everything* and stop there, accepting that the rare cases when both fail simultaneously are handled by disaster recovery rather than by a third leg.

The classic footgun here, repeated in nearly every survey of post-incident reports, is the **shared-risk failure** — two circuits that the carriers swore were diverse but that converged at some point neither party disclosed. Shared conduits, shared bridges, shared central offices, shared submarine cables. The structural fix is *carrier diversity by ownership* (different companies, not different products from the same parent) plus *route diversity in writing* (with maps) plus *periodic re-verification* (carriers reroute their own networks all the time, and your "diverse" pair might quietly converge on a Tuesday in Q3 without anyone telling you).

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    Every IS manager eventually meets the *shared-conduit* story. It usually goes like this: "We had two circuits, one from Carrier A and one from Carrier B, and we paid extra for diversity, and a backhoe in the parking lot took both of them out at 11am on a Tuesday." It turns out the two carriers had quietly leased the same physical fiber bundle for the last mile. The lesson is not "redundancy is a lie." The lesson is that *carrier diversity is a measurement, not a marketing claim* — and the measurement has to be re-taken at every contract renewal, with route maps in hand. Trust, but verify, then verify again next year.

## Network Monitoring: The Source of Truth

**Network Monitoring** is the continuous, automated observation of the network — devices, links, traffic patterns, performance metrics, and security events — so that problems are detected and characterized before users notice them, and so that arguments about what happened during an incident can be settled by data instead of by memory.

A modern monitoring stack has roughly four layers:

- **Device health.** Are the routers, switches, firewalls, and access points up and reachable? CPU, memory, fan, temperature.
- **Link performance.** Bandwidth utilization, latency, jitter, packet loss, error rates per circuit.
- **Application performance.** Synthetic transactions that simulate a user logging into Salesforce or an ERP from each major site, measuring the actual end-to-end experience.
- **Flow analysis.** Where is traffic coming from, where is it going, what protocols, what volumes? Used both for capacity planning and for spotting anomalies that hint at security incidents.

Tools in common use include SolarWinds, Datadog, Splunk, ThousandEyes, PRTG, LogicMonitor, Cisco DNA Center, and a host of cloud-native monitoring offerings. The choice of tool matters less than the *commitment* to monitoring as the source of truth — the place that gets believed when carrier and customer disagree about whether there was an outage, the place that stores the baseline that capacity-planning decisions reference, the place that fires the alert before the help desk does.

This is one of the highest-leverage places in the entire IS portfolio. Per Donella Meadows' framing of leverage points, *information flow* is far higher leverage than parameter tuning. A network with weak monitoring is a network where every problem turns into a debate; a network with strong monitoring is one where problems are *measured*, *prioritized*, and *fixed*. Investing one engineer-year in monitoring, in most organizations, returns more uptime than buying another circuit.

## Telecom Procurement: Where the Money Actually Goes

**Telecom Procurement** is the process of selecting carriers, negotiating contracts, executing agreements, and managing the carrier relationship over the life of the contract. For a mid-size enterprise, telecom is typically a multi-million-dollar annual line item, and it has the unusual property that the contracts are long (typically 36 months), the pricing is opaque, the bills are notoriously inaccurate, and the renewal-versus-switch decision is operationally painful enough that incumbents often win by default.

A serviceable telecom-procurement playbook looks something like this:

1. **Inventory what you have.** Most enterprises do not actually know what circuits they are paying for. Do a true-up before you renew anything. Telecom expense management (TEM) services exist because this problem is so universal.
2. **Define what you need.** Capacity per site, redundancy requirements, cloud connectivity needs, latency targets, application priorities. Write it down before you talk to a carrier.
3. **Solicit competing bids.** Multiple carriers, on identical specifications, with identical SLAs. The first quote is never the right one. The competitive process itself routinely returns 20-40% savings.
4. **Negotiate the SLA, not just the price.** A cheap circuit with a bad SLA is more expensive than a slightly more expensive circuit with a good SLA. Read the credit clauses, the MTTR, the maintenance-window provisions.
5. **Watch the auto-renewals.** Many telecom contracts auto-renew on punitive terms if you miss a notice window. Calendar the notice dates the day you sign.
6. **Audit the bills.** Telecom bills routinely contain errors — billing for circuits that no longer exist, charging for services that were canceled, applying old rates after a renegotiation. Most enterprises that audit recover 5-15% of telecom spend in the first year alone.

The systems-thinking observation about telecom procurement is that it is one of the rare IS domains where the *quality of your inventory and your governance* dominates the quality of your technical decisions. The team that knows what it has, has a defined renewal calendar, and audits its bills will outperform a more technically sophisticated team that doesn't, almost every time.

## Putting It All Together

Networks, for the IS manager, are a layered set of decisions about *capacity*, *connectivity*, *cost*, and *contracts*.

- The **LAN** is the network you own and operate inside a single site; the **WAN** is the network you lease to connect sites together; the **internet** is the public network that connects everyone; the **intranet** is your private internet for employees; the **extranet** is the version you extend to selected partners.
- A **VPN** uses encryption to make the public internet behave like a private network; **SD-WAN** uses software policy to route traffic intelligently across multiple underlying links, often replacing expensive MPLS circuits with cheaper, more flexible internet connectivity.
- **Cloud connectivity** decisions — public internet, peering, or direct connect — depend on the workload's tolerance for variability, its volume, and its compliance posture. Different workloads deserve different answers.
- **Bandwidth capacity planning**, **latency**, and **throughput** are three different concepts that should never be confused: bandwidth is what you bought, latency is how far away you are, throughput is what the actual conversation got. Buying more bandwidth fixes some problems; for many of the others, you need a different lever entirely.
- **Service Level Agreements** specify the performance commitment, the metrics, and the credits, but service credits never make you whole — that is what **network redundancy** is for. Two carriers, two paths, two devices, two power feeds, verified at every renewal.
- **Network monitoring** is the source of truth that everything else depends on; it is one of the highest-leverage investments an IS organization can make. **Telecom procurement** is where the money actually flows, and disciplined inventory, competitive bidding, SLA negotiation, and bill auditing routinely save more than any single technical optimization.

A graduate of this chapter walking into their first job should be able to ask, the first time the network gets blamed for something: *Which network — LAN, WAN, internet, or cloud connectivity? What does the monitoring data show? Are we hitting bandwidth limits, latency limits, or throughput limits? Are we in violation of an SLA, and if so, what does that get us? Is the redundancy doing its job, and have we verified the diversity recently? When does the contract renew, and what's our walk-away?* Those are the questions of someone who manages networks, rather than someone who is managed by them.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just learned to think about networks the way an IS leader has to think about them — as a layered set of capacity, connectivity, cost, and contract decisions, rather than as a stack of routing protocols. You can now distinguish bandwidth from latency from throughput, you know why "five nines" costs an order of magnitude more than "four nines," you know why the second carrier has to be a *different company* and not a different product from the same parent, and you know that monitoring is the place every other network decision either gets validated or gets exposed. Most importantly, you know which questions to ask when a vendor tells you their SLA covers everything — because nothing covers everything, and the manager who knows that is the manager who designs around it. Onward to Chapter 12, where we leave telecom and step into the world of enterprise systems — the ERP, CRM, and SCM platforms that all this connectivity exists to serve.


## References

[See Annotated References](./references.md)
