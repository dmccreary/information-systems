# Quiz: Enterprise Systems

Test your understanding of the packaged enterprise systems — ERP, CRM, SCM, HRIS — that run modern organizations.

---

#### 1. Enterprise Resource Planning (ERP) systems are best described as:

<div class="upper-alpha" markdown>
1. Custom-built applications written from scratch by each company's IT department
2. Integrated suites that unify core business processes (finance, HR, procurement, manufacturing) on a shared data model
3. A type of relational database engine
4. A network protocol for connecting offices
</div>

??? question "Show Answer"
    The correct answer is **B**. ERP systems (SAP, Oracle, Microsoft Dynamics, Workday, NetSuite) provide integrated modules that operate on a shared data model, eliminating the data fragmentation that haunts organizations that run separate systems for each function. The shared data model is the strategic point — the same customer, vendor, and product master records support every module.

    **Concept Tested:** Enterprise Resource Planning

---

#### 2. A CRM system primarily supports:

<div class="upper-alpha" markdown>
1. The sales, marketing, and customer-service processes that touch external customers
2. Manufacturing-floor scheduling
3. Payroll processing
4. Tax filing for the corporation
</div>

??? question "Show Answer"
    The correct answer is **A**. Customer Relationship Management systems (Salesforce, Microsoft Dynamics CRM, HubSpot) support customer-facing processes — leads, opportunities, accounts, cases, marketing campaigns. Payroll, manufacturing, and tax compliance are typically handled by HRIS, manufacturing modules of ERP, and finance/tax modules respectively.

    **Concept Tested:** CRM System

---

#### 3. Supply Chain Management (SCM) systems differ from inventory management systems in that they:

<div class="upper-alpha" markdown>
1. Replace the need for any inventory tracking
2. Span the entire flow from suppliers through manufacturing and distribution to customers, including planning and demand-supply balancing
3. Are used only by retailers, never by manufacturers
4. Track only finished goods, not raw materials
</div>

??? question "Show Answer"
    The correct answer is **B**. SCM is the broader discipline covering supplier relationships, demand forecasting, production planning, logistics, and distribution. Inventory management is a focused subset — tracking stock levels and movements. SCM systems include inventory but extend to planning and orchestration across the entire chain.

    **Concept Tested:** Supply Chain Management

---

#### 4. The HRIS (Human Resource Information System) typically integrates with which of the following most directly?

<div class="upper-alpha" markdown>
1. Manufacturing execution systems
2. Customer billing systems
3. Payroll, talent management, and benefits administration
4. Building security cameras
</div>

??? question "Show Answer"
    The correct answer is **C**. The HRIS is the system of record for the workforce — employee data, organizational structure, and the integration backbone for payroll, talent management (recruiting, performance, learning), and benefits. Manufacturing, billing, and physical security are typically separate domains, though they may receive identity data from HRIS.

    **Concept Tested:** HRIS

---

#### 5. The "configuration vs customization" tradeoff in enterprise systems comes down to:

<div class="upper-alpha" markdown>
1. Configuration is always more expensive than customization
2. Customization is always required for any ERP implementation
3. Configuration uses the vendor's supported settings and extension points; customization modifies the vendor's code or data model in ways the vendor may not support across upgrades
4. There is no real difference between the two terms
</div>

??? question "Show Answer"
    The correct answer is **C**. Configuration stays within supported extension points (workflow rules, custom fields, role definitions, vendor-provided extensibility frameworks) and is usually upgrade-safe. Customization modifies code or data models in ways the vendor cannot guarantee will survive an upgrade — creating a long tail of upgrade pain. The chapter's heuristic: configure aggressively, customize sparingly and only with eyes open.

    **Concept Tested:** Configuration vs Customization

---

#### 6. A company is debating whether to use a single ERP suite for all functions or to assemble best-of-breed systems (specialized leader in each category). Which is the most accurate framing of the tradeoff?

<div class="upper-alpha" markdown>
1. Best-of-breed is always cheaper than a suite
2. Suites are only for small companies; best-of-breed is only for enterprises
3. There is no real difference once both are deployed
4. Suites simplify integration and master data; best-of-breed offers deeper functionality per category at the cost of integration complexity
</div>

??? question "Show Answer"
    The correct answer is **D**. Suites give a unified data model, simpler integration, and one vendor relationship — at the cost of "good enough" functionality in some modules. Best-of-breed offers the strongest tools per category but multiplies integration and master-data work. The right answer depends on which categories matter most to competitive advantage and how mature the integration capability is.

    **Concept Tested:** Best of Breed vs Suite

---

#### 7. A retailer goes live with a new ERP across all 4,000 stores on a single weekend, replacing the legacy system in one event. This rollout pattern is called:

<div class="upper-alpha" markdown>
1. Phased rollout
2. Big bang rollout
3. Parallel run
4. Pilot deployment
</div>

??? question "Show Answer"
    The correct answer is **B**. A big bang cutover replaces the legacy system everywhere at once, on one date. Phased rollouts deploy by region, business unit, or module over time. Parallel runs operate old and new systems simultaneously to compare. Big bang is faster to a single end state but concentrates risk into one weekend, which is why it deserves disproportionate planning.

    **Concept Tested:** Big Bang vs Phased Rollout

---

#### 8. An organization launching a major ERP implementation usually engages an external implementation partner. The partner's most important contribution is:

<div class="upper-alpha" markdown>
1. To replace the customer's project sponsor
2. To bring deep ERP product expertise, prior implementation experience, and methodology — accelerating the project and avoiding common pitfalls
3. To take full ownership of operating the system after go-live
4. To approve the customer's budget without question
</div>

??? question "Show Answer"
    The correct answer is **B**. Implementation partners (Big 4 firms, specialty SI firms, vendor professional services) bring product depth, project methodology, and pattern-matching from prior engagements. They do not replace the sponsor or own post-go-live operations — those remain customer responsibilities. The customer-partner relationship is most successful when ownership is clear and the partner is treated as an accelerator rather than as the project itself.

    **Concept Tested:** Implementation Partner

---

#### 9. An "industry cloud" typically refers to:

<div class="upper-alpha" markdown>
1. A general-purpose public cloud like AWS or Azure
2. A network protocol for industrial equipment
3. A pre-built cloud-based ERP/SaaS solution tailored with industry-specific data models, processes, and compliance configurations (e.g., healthcare, banking, retail)
4. The total amount of compute capacity in a sector
</div>

??? question "Show Answer"
    The correct answer is **C**. Industry clouds (Microsoft Cloud for Healthcare, Salesforce Industry Clouds, SAP industry editions) bundle vendor platforms with industry-specific data models, regulatory configurations, and pre-built processes — reducing the customization tax of adapting general-purpose ERP to a regulated industry. They are not the public cloud itself or a network protocol.

    **Concept Tested:** Industry Cloud

---

#### 10. Six months after ERP go-live, the project sponsor wants to evaluate whether the implementation actually delivered the projected business value. Analyzing this need, which activity is most appropriate?

<div class="upper-alpha" markdown>
1. A post-implementation review that compares actual outcomes against the original business case, captures lessons learned, and recommends remediation
2. Cancelling the ERP and starting over
3. Hiring a new implementation partner to redo the work
4. Demanding a refund from the software vendor
</div>

??? question "Show Answer"
    The correct answer is **A**. A post-implementation (or post-ERP) review evaluates whether projected benefits materialized, surfaces lessons for future projects, and identifies follow-on work to close any gaps. It is a normal, valuable practice and the foundation for continuous improvement on the system. The other options are reactive and disproportionate without first understanding what actually happened.

    **Concept Tested:** Post-ERP Review

---
