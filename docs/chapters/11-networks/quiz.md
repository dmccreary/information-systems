# Quiz: Networks and Telecommunications

Test your understanding of the network procurement, capacity, and SLA decisions IS leaders actually make.

---

#### 1. The primary distinction between a Local Area Network (LAN) and a Wide Area Network (WAN) is:

<div class="upper-alpha" markdown>
1. LANs use copper wire while WANs use fiber
2. LANs are owned and operated within a single building or campus; WANs interconnect locations across cities, countries, or continents
3. LANs are wireless; WANs are wired
4. LANs run TCP/IP while WANs do not
</div>

??? question "Show Answer"
    The correct answer is **B**. LANs cover a single site (office, campus, building) and are typically owned and operated by the organization. WANs span geography and usually rely on a carrier's network to interconnect sites. Both can use copper or fiber, both can be wired or wireless, and both run TCP/IP — the defining axis is geographic scope and ownership pattern.

    **Concept Tested:** Wide Area Network

---

#### 2. An "extranet" is best described as:

<div class="upper-alpha" markdown>
1. The same as the public internet
2. A subset of the LAN limited to executives only
3. A controlled-access network that extends part of an organization's intranet to authorized external partners (suppliers, customers)
4. A backup of the corporate intranet
</div>

??? question "Show Answer"
    The correct answer is **C**. An extranet selectively shares intranet resources with trusted external parties — supplier portals, partner ordering systems, customer self-service apps — typically with authentication, encryption, and limited scope. It is neither the public internet nor a backup; it is a controlled extension of internal resources to external participants.

    **Concept Tested:** Extranet

---

#### 3. A VPN (Virtual Private Network) primarily provides:

<div class="upper-alpha" markdown>
1. Encrypted, authenticated tunnels that let remote users or sites securely use a private network over the public internet
2. Faster internet bandwidth than the underlying carrier provides
3. Free long-distance phone service
4. A replacement for any need for firewalls
</div>

??? question "Show Answer"
    The correct answer is **A**. A VPN creates an encrypted, authenticated tunnel over an untrusted network (usually the public internet), so remote users or branch sites can securely access private resources. VPNs do not increase raw bandwidth, do not replace firewalls, and have nothing to do with telephony pricing. They are a security mechanism with a routing side-effect.

    **Concept Tested:** VPN

---

#### 4. SD-WAN technology is most distinctive for its ability to:

<div class="upper-alpha" markdown>
1. Eliminate the need for any physical network hardware
2. Centrally manage and dynamically steer WAN traffic across multiple links (MPLS, broadband, LTE) based on application policy and link health
3. Provide infinite bandwidth at zero cost
4. Replace LANs entirely
</div>

??? question "Show Answer"
    The correct answer is **B**. SD-WAN abstracts the WAN by centralizing policy and dynamically choosing paths across multiple underlying transports based on application requirements and real-time link health. It does not eliminate hardware or LANs and certainly does not provide free bandwidth — it provides agility and visibility that pure MPLS does not.

    **Concept Tested:** SD-WAN

---

#### 5. In network performance terms, latency refers to:

<div class="upper-alpha" markdown>
1. The total amount of data that can be transferred per second
2. The percentage of packets that arrive corrupted
3. The number of hops between source and destination
4. The time it takes for a packet to travel from source to destination
</div>

??? question "Show Answer"
    The correct answer is **D**. Latency is the elapsed time for a packet to travel from source to destination, typically measured in milliseconds. It is distinct from throughput (data volume per second) and from packet loss. Some workloads — voice, video, real-time trading — are far more sensitive to latency than to raw throughput. Light speed and physical distance impose hard floors on latency.

    **Concept Tested:** Latency

---

#### 6. A telecom contract specifies "99.99% uptime" with credit penalties for downtime. This contract is most likely a:

<div class="upper-alpha" markdown>
1. Service Level Agreement (SLA)
2. Acceptable Use Policy
3. Master Service Agreement only, with no SLA provisions
4. Data Processing Agreement
</div>

??? question "Show Answer"
    The correct answer is **A**. An SLA is the contractual commitment to specific service levels — uptime, response time, mean-time-to-repair — with defined consequences if the levels are missed. SLAs are central to telecom procurement and to any IS-vendor relationship where service quality is load-bearing. The other documents serve different purposes.

    **Concept Tested:** Service Level Agreement

---

#### 7. An organization buys "redundant" fiber circuits from two different carriers and discovers a year later that both circuits run through the same conduit under the same bridge. The conduit is severed and both circuits go down at once. What was the underlying problem?

<div class="upper-alpha" markdown>
1. Genuine redundancy requires diverse physical paths, not just diverse logical providers; the carriers shared a physical right-of-way
2. The carriers were lying about being different companies
3. The fiber was the wrong color
4. The organization should have bought only one circuit instead of two
</div>

??? question "Show Answer"
    The correct answer is **A**. True network redundancy requires physical path diversity — different conduits, different routes, different points of entry to the building. Buying from two carriers does not guarantee path diversity, because carriers often lease capacity from each other or share underlying fiber. The structural fix is to require and verify physical diversity in the procurement contract, often by reviewing carrier route maps.

    **Concept Tested:** Network Redundancy

---

#### 8. Bandwidth capacity planning for the next three years should primarily account for:

<div class="upper-alpha" markdown>
1. Only current peak usage with a small buffer
2. Projected business growth, new applications, cloud migration patterns, and the lead time required to provision new circuits
3. Only the lowest possible price the carrier will accept
4. The marketing budget for the next quarter
</div>

??? question "Show Answer"
    The correct answer is **B**. Capacity planning is forward-looking: it must account for projected business growth, new bandwidth-hungry applications (video, large file transfers, cloud workloads), planned cloud migrations, and the practical reality that new circuits often take months to provision. Sizing only to today's peak guarantees future scrambles; lowest price ignores fitness for purpose.

    **Concept Tested:** Bandwidth Capacity Planning

---

#### 9. A company's offices need a dedicated, low-latency connection to its public-cloud provider with predictable performance and bypassing the public internet. Which solution is most appropriate?

<div class="upper-alpha" markdown>
1. A consumer-grade home internet connection
2. A standard site-to-site VPN over the public internet only
3. A dedicated cloud connectivity service such as AWS Direct Connect or Azure ExpressRoute
4. Sending all traffic by satellite for redundancy
</div>

??? question "Show Answer"
    The correct answer is **C**. Dedicated cloud-connectivity offerings (Direct Connect, ExpressRoute, Google Cloud Interconnect) provide private, predictable, often higher-bandwidth connections to a cloud provider that bypass the public internet — important for latency-sensitive or high-volume workloads. VPNs over public internet add encryption but inherit internet variability; consumer connections lack required SLAs.

    **Concept Tested:** Cloud Connectivity

---

#### 10. A network team observes that an unusual traffic pattern is silently degrading user experience for one application but is not triggering any alerts. The team has uptime monitoring but not application-level monitoring. Analyzing this gap, what is the most useful next investment?

<div class="upper-alpha" markdown>
1. More uptime probes pinging the same router every minute
2. Application-aware network monitoring that observes flows, latency per application, and end-user experience metrics
3. Replacing all routers with new hardware
4. Hiring more help-desk staff to answer phones
</div>

??? question "Show Answer"
    The correct answer is **B**. Modern network monitoring observes not just whether the link is up but how each application performs across it — per-application latency, jitter, packet loss, and synthetic user transactions. The team has visibility for the wrong layer. Adding more uptime probes does not surface application-level degradation; new hardware and more help-desk staff address symptoms, not the visibility gap.

    **Concept Tested:** Network Monitoring

---
