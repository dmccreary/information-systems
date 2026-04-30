# Quiz: Data Governance and Quality

Test your understanding of how organizations treat data as a managed asset with owners, rules, and a lifecycle.

---

#### 1. The key difference between ETL and ELT is:

<div class="upper-alpha" markdown>
1. ETL transforms data before loading it into the destination; ELT loads first and transforms inside the destination using its compute power
2. ETL is for relational data only; ELT is for unstructured data only
3. ETL is faster than ELT in every scenario
4. ETL is only used for streaming pipelines; ELT only for batch
</div>

??? question "Show Answer"
    The correct answer is **A**. ETL (Extract, Transform, Load) transforms data in a separate engine before loading. ELT (Extract, Load, Transform) loads raw data first and uses the destination warehouse or lakehouse to transform — a pattern enabled by modern cloud warehouses with elastic compute. ELT has become dominant for cloud-native data platforms because the destination can scale transformation independently.

    **Concept Tested:** ELT Process

---

#### 2. Master Data Management (MDM) primarily addresses:

<div class="upper-alpha" markdown>
1. Encrypting data at rest
2. Ensuring there is a single, authoritative version of core business entities like customer, product, and employee, used consistently across systems
3. Backing up databases nightly
4. Migrating data between cloud providers
</div>

??? question "Show Answer"
    The correct answer is **B**. MDM produces and maintains golden records for the entities that recur across many systems — customer, product, employee, supplier — so that all systems agree on who someone is and what something is. Without MDM, the same customer appears differently in CRM, billing, and support, and analytics across the three becomes impossible. MDM is not a backup or encryption activity.

    **Concept Tested:** Master Data Management

---

#### 3. Data lineage describes:

<div class="upper-alpha" markdown>
1. The genealogy of the database vendor
2. The age of the data center hardware
3. The traceable origin and transformation history of data — where it came from, how it was processed, and where it flowed
4. The number of users authorized to read a table
</div>

??? question "Show Answer"
    The correct answer is **C**. Data lineage tracks the path data takes from source through every transformation to consumption. Lineage is essential for impact analysis (what breaks if I change this column?), for regulatory compliance (where did this number come from?), and for trust in analytics. Tools like OpenLineage, Apache Atlas, and commercial catalogs surface lineage automatically.

    **Concept Tested:** Data Lineage

---

#### 4. A data catalog primarily exists to:

<div class="upper-alpha" markdown>
1. Replace the relational database with a NoSQL store
2. Encrypt sensitive columns
3. Enforce ACID transactions across services
4. Provide a searchable inventory of data assets with descriptions, owners, lineage, and quality metrics so users can find and understand data
</div>

??? question "Show Answer"
    The correct answer is **D**. A data catalog (Alation, Collibra, Atlan, Microsoft Purview) is the searchable index of data assets — what tables exist, who owns them, what each column means, where it came from, and whether it is trustworthy. Without a catalog, data consumers spend most of their time hunting for data instead of using it. The other options describe unrelated functions.

    **Concept Tested:** Data Catalog

---

#### 5. The DAMA-DMBOK is best described as:

<div class="upper-alpha" markdown>
1. A specific software product for data quality
2. A body of knowledge that organizes data management into knowledge areas like governance, quality, modeling, and security
3. A regulatory law for personal data
4. A vendor's proprietary architecture
</div>

??? question "Show Answer"
    The correct answer is **B**. DAMA-DMBOK (Data Management Body of Knowledge), maintained by DAMA International, organizes the data-management discipline into knowledge areas — governance, architecture, modeling, storage, security, integration, master data, warehousing, metadata, quality. It is to data management what PMBOK is to project management — a vendor-neutral reference shared across the profession.

    **Concept Tested:** DAMA DMBOK

---

#### 6. Data mesh is best characterized as:

<div class="upper-alpha" markdown>
1. A specific cloud product offered by AWS
2. A federation of domain-owned data products with a shared self-serve platform and federated governance
3. A strict centralization of all data into one team
4. A new programming language for ETL pipelines
</div>

??? question "Show Answer"
    The correct answer is **B**. Data mesh, articulated by Zhamak Dehghani, decentralizes data ownership to the business domains that produce it, treats datasets as products with their own SLAs, and federates governance across domains while providing a shared self-serve platform. It is an organizational pattern as much as a technical one, and is a reaction to the bottlenecks of centralized data teams.

    **Concept Tested:** Data Mesh

---

#### 7. A data contract between an upstream service and downstream consumers typically specifies:

<div class="upper-alpha" markdown>
1. The schema, semantics, freshness, quality, and change-management commitments for a dataset
2. The number of CPUs allocated to the database
3. The vendor's billing terms
4. The encryption algorithm at rest
</div>

??? question "Show Answer"
    The correct answer is **A**. A data contract makes the producer's commitments explicit and machine-checkable: schema, semantic definitions, freshness SLAs, quality thresholds, and rules for how breaking changes will be communicated. Contracts let downstream consumers depend on data with confidence and shift the conversation about breakage from "who owns this?" to "did the producer meet the contract?"

    **Concept Tested:** Data Contract

---

#### 8. A producer team renames a column from `cust_id` to `customer_id` in a dataset that is consumed by twelve downstream pipelines, breaking all of them silently. Analyzing this incident, what is the underlying problem?

<div class="upper-alpha" markdown>
1. The producer team needs more developers
2. The consumers should have used a different programming language
3. The dataset lacked schema-evolution discipline — breaking changes need versioning, deprecation periods, and contract tests
4. The data should have been encrypted
</div>

??? question "Show Answer"
    The correct answer is **C**. Schema evolution is the discipline of changing data schemas without breaking consumers. Renaming a column is a breaking change and requires either a versioned dataset, a deprecation period (publish both column names temporarily), or a coordinated migration. Contract tests in CI catch breakage before it ships. The other options miss the structural issue.

    **Concept Tested:** Schema Evolution

---

#### 9. A healthcare provider must keep certain patient records for seven years and then delete them. The policy that governs this is:

<div class="upper-alpha" markdown>
1. A data retention policy aligned with regulatory and legal requirements
2. A data lineage diagram
3. A schema-evolution rule
4. An ETL pipeline schedule
</div>

??? question "Show Answer"
    The correct answer is **A**. A data retention policy specifies how long different classes of data must be kept and when they must be deleted. Healthcare, finance, and government all have legal retention requirements. Holding data longer than required is its own risk — it raises breach impact and may violate privacy regulations. Deleting too soon can violate legal-hold or audit requirements.

    **Concept Tested:** Data Retention Policy

---

#### 10. An organization sets up a Data Governance Council with cross-functional representation from business, IT, legal, and risk. Which combination best describes its core purpose?

<div class="upper-alpha" markdown>
1. Writing application code
2. Replacing the CIO
3. Setting data policies, resolving cross-domain disputes about ownership and definitions, and approving major data initiatives
4. Running daily ETL operations
</div>

??? question "Show Answer"
    The correct answer is **C**. A Data Governance Council exists precisely to make decisions that no single team can make alone — what counts as a "customer," who owns master data for products, which data classifications apply, how to balance privacy against analytics utility. It is a forum, not an operations team. Coding, executive replacement, and ETL operations are unrelated to its purpose.

    **Concept Tested:** Data Governance Council

---
