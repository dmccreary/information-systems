# Quiz: Cloud Computing and Infrastructure

Test your understanding of cloud service models, deployment models, cost dynamics, and migration patterns.

---

#### 1. The NIST definition of cloud computing names five essential characteristics. Which of the following is one of them?

<div class="upper-alpha" markdown>
1. On-demand self-service
2. Mandatory single-tenancy
3. Strict 24-hour billing cycles
4. Required co-location of all customers in one data center
</div>

??? question "Show Answer"
    The correct answer is **A**. The NIST definition lists five essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. The other options misstate cloud properties — multi-tenancy is the norm, billing is granular (often per-second), and customer workloads are deliberately distributed across data centers.

    **Concept Tested:** NIST Cloud Definition

---

#### 2. Which cloud service model gives the customer the most control over the operating system and underlying infrastructure?

<div class="upper-alpha" markdown>
1. Software as a Service (SaaS)
2. Platform as a Service (PaaS)
3. Function as a Service (FaaS)
4. Infrastructure as a Service (IaaS)
</div>

??? question "Show Answer"
    The correct answer is **D**. IaaS provides virtual machines, storage, and networking, leaving the customer responsible for the operating system and everything above it — and giving them the most control. PaaS abstracts the OS; FaaS abstracts the runtime as well; SaaS is a fully managed application. The tradeoff is consistent: more control means more operational responsibility.

    **Concept Tested:** IaaS

---

#### 3. A hybrid cloud is best described as:

<div class="upper-alpha" markdown>
1. Two private clouds owned by the same company
2. A multi-region public cloud deployment
3. An on-premise data center connected to and orchestrated with one or more public cloud environments
4. The same as multi-cloud
</div>

??? question "Show Answer"
    The correct answer is **C**. Hybrid cloud combines on-premise infrastructure with public cloud, integrated so that workloads, identity, and data can flow across the boundary in controlled ways. Multi-cloud — using multiple public cloud providers — is a different concept, though hybrid and multi-cloud often overlap. Two private clouds and multi-region public deployments are not hybrid by themselves.

    **Concept Tested:** Hybrid Cloud

---

#### 4. The shift from CapEx to OpEx in cloud computing means that organizations:

<div class="upper-alpha" markdown>
1. No longer pay for any IT
2. Treat technology spending as ongoing operating expense (subscriptions, consumption) rather than as a depreciated capital asset (purchased servers)
3. Are required to use only one cloud vendor by accounting standards
4. Avoid all financial reporting obligations
</div>

??? question "Show Answer"
    The correct answer is **B**. Cloud spending appears in the operating-expense column rather than the capital-expense column — an accounting shift that has real strategic effects on how organizations budget, forecast, and approve technology investments. Cloud does not mean free, single-vendor, or unreported; it means a different cost model with different forecasting dynamics.

    **Concept Tested:** CapEx vs OpEx

---

#### 5. FinOps is best characterized as:

<div class="upper-alpha" markdown>
1. A regulatory requirement for SOX compliance
2. A specific AWS service
3. The accounting term for depreciation of servers
4. A practice combining engineering, finance, and product to manage cloud cost as a continuous, cross-functional discipline
</div>

??? question "Show Answer"
    The correct answer is **D**. FinOps is the cultural and operational practice of managing cloud cost across engineering, finance, and product — visibility, accountability, optimization, and cost-aware engineering decisions. Without FinOps, cloud bills tend to drift upward unsupervised. It is a cross-functional discipline rather than a regulation, a product, or pure accounting.

    **Concept Tested:** FinOps

---

#### 6. Containers (such as Docker images) primarily provide:

<div class="upper-alpha" markdown>
1. The same isolation and resource overhead as full virtual machines
2. Lightweight, portable packaging of applications with their dependencies, sharing the host OS kernel
3. A new programming language for cloud applications
4. A replacement for source-code repositories
</div>

??? question "Show Answer"
    The correct answer is **B**. Containers package an application together with its dependencies, isolated through OS-level mechanisms but sharing the host kernel — far lighter than full VMs, and consistent across development, test, and production environments. They are not a language or a replacement for git, and the resource overhead is much lower than VMs.

    **Concept Tested:** Container

---

#### 7. Kubernetes' core role in a modern cloud architecture is to:

<div class="upper-alpha" markdown>
1. Compile source code into binary form
2. Replace relational databases with key-value stores
3. Orchestrate the deployment, scaling, and management of containerized applications across a cluster of machines
4. Encrypt all data at rest by default
</div>

??? question "Show Answer"
    The correct answer is **C**. Kubernetes is the dominant container-orchestration platform, automating deployment, scaling, networking, health checks, and rolling updates for containerized workloads across clusters. Compilation, database replacement, and default encryption are unrelated to its purpose, though Kubernetes can integrate with tools that handle each.

    **Concept Tested:** Kubernetes

---

#### 8. The "Six Rs of Migration" framework helps an organization decide how to move each application to the cloud. The "Lift and Shift" pattern (Rehost) is most appropriate when:

<div class="upper-alpha" markdown>
1. Time pressure is high and the goal is to exit a data center quickly, accepting that further optimization will come later
2. The application must be rewritten as cloud-native microservices before any move
3. The application has no business value
4. The organization wants maximum cloud-native efficiency from day one
</div>

??? question "Show Answer"
    The correct answer is **A**. Lift-and-shift (Rehost) moves a workload to cloud VMs with minimal change — fast, low-risk, often used when a data-center exit deadline drives urgency. The tradeoff is that you do not yet capture cloud-native efficiencies; those come from later steps (Replatform, Refactor). Refactoring before any move is a different pattern; the option about no business value confuses Retire.

    **Concept Tested:** Lift and Shift

---

#### 9. A company has built deeply on a single cloud provider's proprietary services (managed AI APIs, proprietary databases, identity services), and now finds it would take 18 months and seven figures to migrate to a competitor. Analyzing this situation:

<div class="upper-alpha" markdown>
1. The migration cost is normal and unavoidable for any cloud user
2. The company has experienced significant vendor lock-in; preserving optionality requires deliberate architectural choices and accepted cost
3. The company should immediately move all workloads to a third cloud
4. There is no problem because the company is not currently being charged for migration
</div>

??? question "Show Answer"
    The correct answer is **B**. Vendor lock-in becomes severe when applications depend deeply on proprietary services. The chapter's framing is "preserve optionality where the cost is reasonable" — using portable layers (containers, open standards, standard SQL where possible) for workloads where switching might matter. Lock-in is sometimes worth accepting for the productivity gains; the discipline is making it a deliberate choice.

    **Concept Tested:** Vendor Lock-In

---

#### 10. A large enterprise establishes a Cloud Center of Excellence (CCoE). Which combination best describes its core purpose?

<div class="upper-alpha" markdown>
1. To replace the CIO with cloud-native talent
2. To prohibit any use of cloud infrastructure outside the original data center
3. To provide reusable patterns, guardrails, FinOps practices, and shared expertise that enable other teams to adopt cloud safely and efficiently
4. To negotiate the lowest possible price with one cloud vendor
</div>

??? question "Show Answer"
    The correct answer is **C**. A CCoE codifies and shares cloud expertise — reference architectures, security guardrails, cost-management tooling, training, and patterns — so individual teams do not have to relearn the same lessons in isolation. It is an enabling function, not a gatekeeping or anti-cloud function, and it does not exist primarily to negotiate price.

    **Concept Tested:** Cloud Center of Excellence

---
