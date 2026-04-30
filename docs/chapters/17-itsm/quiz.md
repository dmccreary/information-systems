# Quiz: IT Service Management and Operations

Test your understanding of how IS keeps the lights on after a system ships.

---

#### 1. ITIL distinguishes incident management from problem management primarily because:

<div class="upper-alpha" markdown>
1. Incident management restores service quickly after a disruption; problem management investigates root causes to prevent recurrence
2. Incidents are always physical and problems are always logical
3. Incidents are caused by users and problems are caused by hardware
4. There is no real difference between the two
</div>

??? question "Show Answer"
    The correct answer is **A**. Incident management focuses on rapid service restoration when something is broken (the email server is down). Problem management investigates underlying causes to prevent recurrence (why does the email server crash every Tuesday?). Confusing the two is a common pathology — firefighting feels productive while root-cause work feels slow, so problems quietly compound.

    **Concept Tested:** Incident Management

---

#### 2. A Configuration Management Database (CMDB) is best described as:

<div class="upper-alpha" markdown>
1. A backup copy of the company's source code
2. A database of customer purchase history
3. A repository of configuration items (servers, applications, network devices, services) and their relationships, supporting change, incident, and problem management
4. The same as a relational data warehouse
</div>

??? question "Show Answer"
    The correct answer is **C**. A CMDB stores configuration items and their relationships — what depends on what, who owns each item, what changes have been applied — so that incidents can be diagnosed, changes can be impact-assessed, and the topology of the IT estate can be reasoned about. Source code, customer history, and warehouses serve different purposes.

    **Concept Tested:** CMDB

---

#### 3. A service catalog typically lists:

<div class="upper-alpha" markdown>
1. The set of services available to users, with descriptions, request procedures, fulfillment expectations, and (often) costs
2. All known security incidents
3. The names of every employee
4. The set of allowed cloud regions
</div>

??? question "Show Answer"
    The correct answer is **A**. The service catalog is the user-facing menu of available services — request a laptop, request access, report an issue, request a new SaaS license — with clear descriptions, fulfillment SLAs, and ownership. A well-maintained catalog reduces ambiguity and is foundational to a mature service desk.

    **Concept Tested:** Service Catalog

---

#### 4. SLOs (Service Level Objectives) and SLIs (Service Level Indicators) differ from SLAs in that:

<div class="upper-alpha" markdown>
1. SLOs and SLIs apply only to networks, while SLAs apply only to applications
2. There is no functional difference among the three
3. SLAs are external, contractual commitments; SLIs are the measurements; SLOs are the internal targets that allow some buffer before SLA breach
4. SLAs are technical; SLOs and SLIs are legal
</div>

??? question "Show Answer"
    The correct answer is **C**. SLAs are external contractual commitments to customers. SLOs are internal targets, typically tighter, that the team manages to. SLIs are the underlying measurements (e.g., 95th-percentile latency, error rate). SRE practice uses the SLI/SLO/SLA hierarchy with error budgets to manage risk explicitly.

    **Concept Tested:** SLO and SLI

---

#### 5. An "error budget" gives a service team:

<div class="upper-alpha" markdown>
1. A literal cash budget for fixing bugs
2. A quantified allowance of acceptable unreliability (such as 0.1% error rate per quarter), which can be spent on risk-tolerant changes and protects against over-investment in reliability
3. The maximum number of users who may complain
4. A regulatory limit on outages
</div>

??? question "Show Answer"
    The correct answer is **B**. An error budget is the quantitative complement of an SLO — if the SLO is 99.9% availability, the error budget is 0.1%. Teams can "spend" the budget on aggressive deploys, risky experiments, or rapid iteration. When the budget is exhausted, the policy typically requires the team to stop new feature work and invest in reliability. It makes the reliability/feature tradeoff explicit.

    **Concept Tested:** Error Budget

---

#### 6. A service desk's tiered structure (Tier 1, Tier 2, Tier 3) is intended to:

<div class="upper-alpha" markdown>
1. Charge users different prices based on their seniority
2. Hide problems from senior staff
3. Match incident complexity to skill level — common requests are resolved by Tier 1, complex investigations escalate to Tier 2 or Tier 3 specialists
4. Replace the need for a CMDB
</div>

??? question "Show Answer"
    The correct answer is **C**. Tiers route work by complexity: Tier 1 handles password resets and common requests fast; Tier 2 handles more involved issues; Tier 3 brings in subject-matter experts for hard cases. Done well, tiers shorten resolution time and free senior staff from routine work. They are not a pricing scheme or a replacement for the CMDB.

    **Concept Tested:** Service Desk Tier

---

#### 7. ITIL Change Management exists primarily to:

<div class="upper-alpha" markdown>
1. Prevent any new changes from happening to production
2. Control the introduction of changes to the IT environment so that risk is assessed, stakeholders are informed, and changes are scheduled to minimize disruption
3. Replace the need for testing
4. Force every change through a 90-day review board
</div>

??? question "Show Answer"
    The correct answer is **B**. Change management is risk management for production changes — assessing impact, communicating, scheduling, and authorizing changes through clearly defined paths. Modern ITIL distinguishes standard, normal, and emergency changes, with proportional review for each. It is not meant to block change or replace testing; it is meant to make change safer and more visible.

    **Concept Tested:** ITIL Change Management

---

#### 8. After a major outage, the team conducts a postmortem in which engineers walk through what happened, what was learned, and what will change — without identifying or punishing individuals for honest mistakes. This practice is called:

<div class="upper-alpha" markdown>
1. Blameless postmortem culture
2. Tier 1 escalation
3. ITIL Service Strategy
4. Resource leveling
</div>

??? question "Show Answer"
    The correct answer is **A**. Blameless postmortems separate "what went wrong" from "who did it wrong," focusing on systemic causes and improvements. The premise is that punishing individuals for honest mistakes drives information underground and prevents learning. Many organizations adopted the blameless approach after Google SRE and Etsy popularized it. The other options are unrelated practices.

    **Concept Tested:** Blameless Culture

---

#### 9. An on-call rotation distributes after-hours support responsibility across a team. A healthy rotation typically includes:

<div class="upper-alpha" markdown>
1. One overworked person doing all on-call shifts indefinitely
2. No documentation, since the experts will remember everything
3. Random alerts that bypass the team and go directly to the CEO
4. Clear primary/secondary roles, defined hand-off, runbooks, compensated time, sustainable frequency, and a feedback loop to reduce alert noise
</div>

??? question "Show Answer"
    The correct answer is **D**. Sustainable on-call requires structure — clear roles, runbooks, fair rotation, compensation, and continuous improvement of alerts so that the rotation does not burn the team out. Pager fatigue, undocumented systems, and random executive escalation are anti-patterns that destroy on-call sustainability and accelerate attrition.

    **Concept Tested:** On-Call Rotation

---

#### 10. A team has logging, but cannot quickly correlate logs to traces or metrics when investigating a production issue. Analyzing this gap, the most appropriate next investment is in:

<div class="upper-alpha" markdown>
1. More marketing budget
2. Replacing the relational database
3. Observability tooling that unifies logs, metrics, and traces and supports rich querying
4. Removing all monitoring entirely
</div>

??? question "Show Answer"
    The correct answer is **C**. Observability — the ability to ask new questions about a system from the outside — depends on unified collection of logs, metrics, and traces, with rich querying and correlation. The chapter distinguishes monitoring (what you knew to watch) from observability (what you can investigate later). The team has monitoring; what they need is observability.

    **Concept Tested:** Observability

---
