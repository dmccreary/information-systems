---
title: 'Data Governance and Quality'
description: How organizations treat data as a managed asset — pipelines, master data, quality, lineage, catalogs, ownership, governance councils, the DAMA DMBOK, data mesh, data products, contracts, schema evolution, retention, and records management.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# Data Governance and Quality

## Summary

Treats data as a managed organizational asset: stewardship, lineage, master data management, data quality dimensions, metadata, and data lifecycle.

**Role in the course:** Make explicit what most students absorb implicitly: data has owners, rules, and a lifecycle, and IS organizations enforce them.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

1. ETL Process
2. ELT Process
3. Data Pipeline
4. Master Data Management
5. Data Quality
6. Data Lineage
7. Data Catalog
8. Data Dictionary
9. Metadata Management
10. Data Owner
11. Data Governance Council
12. DAMA DMBOK
13. Data Mesh
14. Data Product
15. Data Contract
16. Schema Evolution
17. Data Retention Policy
18. Records Management

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Information Systems](../01-foundations/index.md)
- [Chapter 2: The Role of IS in Organizations](../02-role-of-is/index.md)
- [Chapter 3: Information Systems Architecture](../03-architecture/index.md)
- [Chapter 6: Data Management Foundations: Modeling, SQL, and Transactions](../06-data-foundations/index.md)
- [Chapter 7: Modern Databases, Warehousing, and Lakehouses](../07-modern-databases/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 8. The previous two chapters gave you the storage and the queries — schemas, transactions, warehouses, lakehouses. This chapter gives you the *care and feeding*. Data does not stay good on its own; it drifts, decays, ages out, gets duplicated across systems, and quietly tells inconsistent stories about the same customer until somebody notices the company has been emailing two welcome packets to one human for three years. Governance is the discipline that keeps that from happening — or, more honestly, the discipline that keeps it from happening *invisibly*. By the end of this chapter you will be able to read a data lineage diagram, defend an MDM golden-record strategy to a skeptical CFO, name the six dimensions of data quality without looking, tell a data mesh apart from a data lake, and recognize the moment when "we'll add governance later" is the most expensive sentence in the building. Pour something warm. Let's go.

## Why Governance Matters Before Anything Else

Every organization eventually wakes up to the same uncomfortable realization: it has *more* data than it has *trust* in its data. The CRM says one thing about a customer. The billing system says another. The analytics dashboard says a third, and confidently. A new analyst joins, asks an innocent question — "how many active customers do we have?" — and discovers that there are at least four defensible answers, all produced by people who are absolutely sure they're right. This is not a bug; it is the default state of any organization that grew faster than its data discipline.

**Data Governance** is the system of decisions, roles, processes, and policies that determines who is accountable for which data, how that data is defined, where it can flow, when it must be deleted, and what "good" looks like along the way. Governance is *not* a piece of software. It is not a single committee. It is the combined organizational answer to a question every system silently asks at runtime: *whose data is this, and can we trust it?* When that question has no clear answer, every dashboard becomes a debate, every report becomes a lawsuit risk, and every machine-learning model gets trained on something the team can't quite vouch for.

The deeper argument for governance is a feedback loop. Bad data erodes trust; eroded trust drives users back to spreadsheets; spreadsheets fragment the data further; further fragmentation makes the next dashboard worse. Good data builds trust; trust drives adoption; adoption produces more data, more usage signal, more pressure to keep the data clean. *Data quality and data adoption reinforce each other in both directions* — and the direction is set by whether anyone is actively governing. Skip governance and you don't get neutral; you get the bad loop, slowly, until you can't get out of it.

## Pipelines, ETL, and ELT

Before we talk about *governing* data, we have to talk about how it *moves*, because data in motion is where most quality and lineage problems are born. A **Data Pipeline** is any automated, scheduled (or event-driven) flow that takes data from one or more sources, transforms it, and lands it in one or more destinations — a warehouse, a lakehouse, a feature store, a downstream application. Pipelines are the circulatory system of an enterprise data platform. When the pipelines are healthy, the analytics layer is healthy. When the pipelines are silently broken, the analytics layer is confidently wrong, which is worse.

The two dominant architectural patterns for data pipelines are ETL and ELT, and the order of those three letters matters more than students expect.

The **ETL Process** — Extract, Transform, Load — is the older pattern, born in the 1990s when storage was expensive and compute had to live close to the data. In ETL, data is *extracted* from source systems, *transformed* on a dedicated transformation server (cleaned, joined, reshaped, business rules applied), and only then *loaded* into the target warehouse. Because the warehouse only ever sees the polished output, the warehouse stays small and tidy. The downside is that the transformation logic lives in proprietary middleware (Informatica, Talend, IBM DataStage, SSIS) and the *raw* data — the version before transformation — is often not preserved anywhere. If someone later asks "what did this field look like before we fixed it?", the honest answer is frequently "nobody kept that."

The **ELT Process** — Extract, Load, Transform — flipped the order once cloud warehouses (Snowflake, BigQuery, Redshift, Databricks SQL) made compute cheap and elastic inside the warehouse itself. In ELT, data is *extracted* from the source, *loaded* into the warehouse (or lakehouse) in something close to its raw form, and *transformed* in place using SQL, dbt models, or notebook code. The warehouse becomes the transformation engine, the raw landing zone is preserved as a permanent record, and transformations become version-controlled SQL artifacts that any analyst can read. ELT is the dominant modern pattern for a reason: it pushes raw data preservation, version control, and lineage to the surface where governance can actually see them.

| Dimension                | ETL                                          | ELT                                           |
|--------------------------|----------------------------------------------|-----------------------------------------------|
| Order                    | Transform before load                        | Load raw, then transform in place             |
| Compute lives in         | Dedicated middleware server                  | The warehouse / lakehouse itself              |
| Raw data preserved       | Often not                                    | Yes — that's the whole point                  |
| Transformation lives in  | Proprietary GUI tools                        | SQL, dbt, notebooks (version-controlled)      |
| Best era                 | On-prem, expensive storage, scarce compute   | Cloud warehouses, cheap storage, elastic compute |
| Lineage friendliness     | Low — logic hidden in vendor tooling         | High — SQL is readable and diffable           |
| Common today             | Legacy estates, regulated migrations         | Modern analytics platforms                    |

The footgun in pipeline design is *transformation logic that nobody can read*. A pipeline whose business rules live inside a vendor GUI accessible to three people is a pipeline whose outputs cannot be defended. The structural fix — the one ELT enables almost as a side effect — is to put every transformation into source-controlled code that any analyst can review, diff, and reproduce. When you can't reproduce a number, you can't govern it.

<details markdown="1">
<summary>Diagram: ETL vs ELT Pipeline Architecture</summary>
Type: interactive-infographic
**sim-id:** etl-vs-elt-pipeline<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram comparing two pipeline architectures side-by-side. Top panel (ETL): three source-system icons (CRM, ERP, web logs) feeding into a central "Transformation Server" node (proprietary middleware, drawn in slate-gray with a vendor-lock icon), which then loads polished tables into a "Data Warehouse" node. A faded ghost-box labeled "raw data (often discarded)" sits to the side with a dashed boundary. Bottom panel (ELT): the same three sources feeding directly into a "Raw Landing Zone" inside a cloud warehouse (drawn in mascot-emerald), with a downstream "Transformation Layer" (labeled with dbt / SQL icons) producing curated marts. A "lineage trail" overlay shows that every curated table has a clear provenance back to raw rows.

Color palette: ETL middleware in muted slate (signaling "legacy"), ELT warehouse compute in mascot-emerald, raw-landing zones in mascot-magenta (preserved-and-protected), curated marts in coral. Edge labels carry a slight y-offset (e.g., 480 to 490) to work around vis-network's horizontal-edge label rendering bug.

Interactivity: hovering each node reveals its definition and a typical product example. A toggle button switches a single source between ETL and ELT routing so students can see the change in raw-data preservation. A "trace lineage" button highlights the path from a curated metric back to its raw source rows.

Layout: hierarchical, left-to-right, full canvas width, height ~560px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can explain why ELT preserves lineage more naturally than ETL, identify where transformation logic lives in each pattern, and articulate the governance implications of each choice.

Implementation: vis-network, deployed at `/information-systems/sims/etl-vs-elt-pipeline/`.
</details>

## Master Data Management: One Customer, One Truth

Most enterprises have several systems that each believe they own "the customer." The CRM has one customer record. The billing system has another. The support ticketing system has a third. The marketing automation tool has a fourth. None of them quite agree on the spelling of the customer's address, the canonical email, or whether "Acme Corp" and "ACME CORPORATION" are the same legal entity. This is not negligence; it is what happens when systems are bought and built by different teams over twenty years.

**Master Data Management** (MDM) is the discipline of producing, for each critical business entity — customer, product, employee, supplier, location, account — a *single authoritative record* that downstream systems can defer to. The authoritative record is sometimes called a **golden record**: the version of the truth that the organization has decided is canonical, often by merging fragments from many systems, applying matching and survivorship rules, and resolving conflicts according to agreed precedence. ("If billing and CRM disagree on the address, billing wins, because billing is the system that has to mail the invoice and gets feedback when the address is wrong.")

MDM platforms (Informatica MDM, Reltio, Stibo, SAP MDG, Profisee, and a growing field of cloud-native entrants) provide the matching, merging, hierarchy management, stewardship workflow, and publication APIs needed to run an MDM program. But the technology is the easy part. The hard part is *organizational*: who decides which system wins when records conflict? Who approves a merge? Who reviews a flagged duplicate? MDM without clear ownership is just an expensive deduplication project that quietly diverges again within a year.

The systems-thinking tradeoff inside MDM is *completeness vs. cost*. A 100% complete, perfectly matched golden record for every customer is achievable only at very high stewardship cost, and the marginal cleanups get more expensive as you approach 100%. A more pragmatic posture is to define an "acceptable match confidence" threshold, automate the easy cases, and route the ambiguous ones to a human steward — accepting that some small percentage of records will remain merged-in-error or split-in-error until somebody complains. Pretending you can have perfection without cost is the path to an MDM project that is "almost ready to launch" for five consecutive fiscal years.

## Data Quality: Six Dimensions to Argue About

If MDM produces the canonical record, **Data Quality** is the discipline of measuring whether *any* data — master or otherwise — is fit for the purposes it serves. Quality is famously hard to define in the abstract, so the field has converged on a small set of *dimensions* that can each be measured and reported. The exact list varies by source (DAMA lists more, ISO lists fewer), but a working set of six covers most practical use:

- **Accuracy** — does the data match the real-world thing it represents? (Is the customer's actual ZIP code 55102?)
- **Completeness** — are all required fields populated? (Did anyone fill in the phone number, or is it null in 38% of records?)
- **Consistency** — does the same fact agree across systems? (Does the customer's address match between CRM and billing?)
- **Timeliness** — is the data current enough for its use? (Is the inventory count from this morning, or from last Tuesday?)
- **Uniqueness** — is each entity represented exactly once? (Or is "Acme Corp" in the database 14 times?)
- **Validity** — does the data conform to the rules of its domain? (Is the email address syntactically an email, or is "n/a@please.fix" pretending?)

A practical data-quality program instruments each dimension for each critical dataset, reports on the metrics regularly, sets thresholds at which alerts fire, and ties remediation to actual humans who own the cleanup. The footgun in DQ programs is *measuring without acting*: dashboards full of red squares that nobody is empowered to fix produce pure cynicism. The structural fix is to *pair every metric with an owner and an SLA*. Unowned metrics are theater.

| Dimension     | Asks                                           | Failure example                                    |
|---------------|------------------------------------------------|----------------------------------------------------|
| Accuracy      | Does it match reality?                         | Customer ZIP says 55102; real one is 55401         |
| Completeness  | Are required fields populated?                 | 38% of records have null phone numbers             |
| Consistency   | Do systems agree?                              | CRM address differs from billing address           |
| Timeliness    | Is it current enough?                          | Inventory count is from last Tuesday               |
| Uniqueness    | One entity, one record?                        | "Acme Corp" appears 14 times under variant names   |
| Validity      | Does it follow domain rules?                   | Email field contains "n/a@please.fix"              |

There is also a feedback loop hidden in quality work. Higher quality drives higher *trust*, which drives higher *adoption*, which drives more user *feedback* on the data ("hey, this customer's address is wrong"), which drives more *cleanup* opportunities, which drives quality higher still. The reverse is the same loop running backwards. Where you are on the loop today is mostly determined by whether you have invested in any of it.

## Data Lineage: Where Did This Number Come From?

When the CFO asks, *"where did this revenue number come from?"*, the answer should not be "I'll get back to you." **Data Lineage** is the recorded, queryable trail showing how every piece of data flowed from its original source through every transformation, join, filter, and aggregation, all the way to the cell on the dashboard. Lineage answers questions like: *which upstream tables feed this metric? what transformation produced this column? if this source system is offline, which dashboards go stale? if we change this calculation, who downstream is affected?*

Lineage has two flavors. *Coarse-grained* lineage tracks at the dataset level: "the revenue mart depends on the orders table and the customers table." *Fine-grained* lineage tracks at the column or even the row level: "this dashboard's `total_revenue` field comes from `orders.amount` summed across `orders.status = 'completed'` rows joined to `customers` on `customer_id`." Coarse is cheaper to capture and good enough for most operational decisions. Fine is what auditors and data scientists eventually demand, and what modern lineage platforms (OpenLineage, Marquez, Alation, Collibra, Atlan, Microsoft Purview, Informatica IDMC) increasingly extract automatically from query logs, dbt manifests, and pipeline metadata.

The systems-thinking value of lineage is *impact analysis*. Before changing an upstream schema, you can ask the lineage graph "what breaks if I rename this column?" and get a real answer instead of a hopeful guess. The leverage point is enormous: a small investment in automated lineage capture saves an outsize amount of debugging time over the lifetime of the platform. The footgun is *manually maintained lineage* — a documentation page somewhere that lists the upstream sources of each report. Manual lineage is wrong before it's saved; automated lineage from the actual query logs is the only kind that stays true.

<details markdown="1">
<summary>Diagram: Data Lineage Flow from Source to Dashboard</summary>
Type: interactive-infographic
**sim-id:** data-lineage-flow<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network directed acyclic graph showing fine-grained lineage from three operational source systems (CRM, ERP, web events) through a raw landing zone, through a series of dbt-style transformation models (staging, intermediate, mart), and finally into three downstream consumers: an executive revenue dashboard, a marketing-attribution model, and a finance regulatory report. Each node is annotated with the table or model name and a row-count badge. Each edge represents a data dependency — solid for direct column-level provenance, dashed for derived/aggregated dependencies.

Color palette: source systems in slate-gray, raw landing in mascot-magenta, staging/intermediate in coral, marts in mascot-emerald, downstream consumers in teal. Edge labels use a slight y-offset to render correctly.

Interactivity: clicking any node highlights both upstream ancestors and downstream descendants, demonstrating impact analysis. A "simulate failure" mode lets students click a source system and see every downstream artifact go red, illustrating which dashboards would be affected. A "rename column" mode highlights every artifact that references a chosen field. A "lineage depth" slider controls how many hops upstream/downstream are shown.

Layout: hierarchical left-to-right, full canvas width, height ~600px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can read a lineage diagram, perform an impact analysis for an upstream schema change, and articulate why automated lineage capture is more reliable than manually maintained documentation.

Implementation: vis-network, deployed at `/information-systems/sims/data-lineage-flow/`.
</details>

## Catalogs, Dictionaries, and Metadata

A piece of data sitting in a warehouse is, by itself, useless. To use it, someone needs to know what it means, where it came from, who owns it, when it was last updated, what units it's in, and whether it can be trusted. All of that information *about* the data is called **metadata** — literally "data about data" — and managing it well is one of the most underrated capabilities in a modern data platform.

A **Data Catalog** is the searchable, browsable directory of every dataset the organization knows about, with rich metadata attached: descriptions, owners, tags, classifications (PII? confidential?), quality scores, usage statistics, sample rows, and lineage links. Modern catalog tools (Atlan, Alation, Collibra, Informatica IDMC, Microsoft Purview, DataHub, Amundsen, OpenMetadata) are essentially "Google for your enterprise data" — an analyst types "customer churn" and gets back the relevant tables, who owns them, how fresh they are, and a one-click query to start exploring. A catalog is the single highest-leverage piece of governance infrastructure, because it converts tacit organizational knowledge ("ask Priya, she knows where that lives") into a searchable artifact.

A **Data Dictionary** is the more focused cousin: a structured definition list of every field in every table — name, type, allowed values, business definition, derivation rule, source system, sensitivity classification. Where the catalog answers "what datasets exist?", the dictionary answers "what does this column actually mean?" Many modern catalog tools subsume the dictionary as a feature; in older or more regulated environments, the dictionary is often a separate, formally maintained artifact reviewed by a data governance committee.

**Metadata Management** is the umbrella program — the policies, tools, and processes for capturing, curating, and surfacing all of the above. It typically distinguishes three flavors of metadata: *technical* (schemas, types, partitions, file paths), *business* (definitions, ownership, classifications, glossary terms), and *operational* (refresh times, row counts, quality scores, query patterns). A mature metadata program ties all three together: an analyst looking at a column should see its technical type, its business definition, its current freshness, and a link to its owner — without leaving the catalog.

The footgun in metadata is *the dictionary nobody updates*. A data dictionary that was carefully filled out in 2019 and has been silently drifting from reality ever since is *worse than no dictionary*, because users still trust it. The structural fix is automation: have the platform extract technical metadata directly from running systems, and require business metadata changes to be approved as part of the same code review that changes the underlying table. Manually maintained metadata, like manually maintained lineage, decays at a predictable rate.

!!! mascot-thinking "Pause here"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    The catalog/dictionary distinction trips up almost everyone, so internalize it now. The *catalog* is the answer to "what tables and datasets exist, and which ones might help me?" The *dictionary* is the answer to "for this specific column, what does it mean and what are its rules?" Catalogs are *discovery* tools; dictionaries are *definition* tools. A platform without a catalog produces analysts who reinvent the same dataset every quarter because they can't find the existing one. A platform without a dictionary produces dashboards where "active customer" means six different things on six different reports. You need both, and the modern tools mostly let you maintain both in one place.

## Roles: Owners, Stewards, and the Council

In Chapter 2 we introduced the **data steward** as the person responsible for the day-to-day quality, definitions, and curation of a particular data domain. Stewards are the operational backbone of governance — they review data quality issues, approve definitional changes, mediate disputes between consumers and producers, and sit closest to the actual data work. The steward role is so important that any governance program without named, accountable stewards is, quite literally, ungoverned.

But stewards do not have decision authority on their own. That belongs to the **Data Owner** — typically a senior business leader (a VP of Sales for customer data, a CFO for financial data, a CMO for marketing data) who is *accountable* for the strategic decisions about a data domain: who can access it, how it can be used, what the retention policy is, what the quality SLAs should be, what investments to fund. Owners do not edit the data; they decide the *rules* under which it lives. Stewards execute within those rules. The pairing is deliberate: the owner has authority but not capacity; the steward has capacity but not authority. Together they form a complete decision unit.

When decisions affect *multiple* domains — a change that crosses customer, product, and finance — they go to a **Data Governance Council**, a cross-functional standing committee whose members include the data owners (or their delegates), the chief data officer (CDO) or equivalent, representatives from legal, security, privacy, and IT, and often a few senior stewards. The council sets enterprise-wide policies (classification schemes, retention defaults, ethics guidelines), arbitrates disputes that no single owner can resolve, approves new data products that cross domains, and reports up to executive leadership on the state of the data estate. A council that meets quarterly and approves things in batches is operating at the right tempo for most organizations; a council that has to meet weekly is usually a sign that lower-level decision rights have not been delegated properly.

| Role                       | Authority                                  | Capacity                                | Tempo                          |
|----------------------------|--------------------------------------------|-----------------------------------------|--------------------------------|
| Data Owner                 | Strategic — sets rules and SLAs            | Low — does not touch the data           | As needed; major decisions     |
| Data Steward               | Operational — executes within the rules    | High — daily curation                   | Continuous                     |
| Data Governance Council    | Cross-domain — sets enterprise policy      | Moderate — meets in committee           | Monthly or quarterly           |
| Chief Data Officer (CDO)   | Executive sponsor of the program           | Convening — makes the program possible  | Continuous strategic oversight |

The single highest-leverage governance lever in any organization is *clear, named ownership*. Most data quality problems trace back to a dataset whose owner is "well, it's complicated." When ownership is unambiguous, every other piece of governance becomes tractable. When ownership is ambiguous, no amount of tooling rescues the program.

## DAMA DMBOK: The Field's Reference Manual

If you want to read the field's consensus on all of this in one place, the canonical reference is the **DAMA DMBOK** — the *Data Management Body of Knowledge*, published by DAMA International (the Data Management Association), currently in its second edition. The DMBOK is to data management what the PMBOK is to project management: a comprehensive, vendor-neutral, somewhat textbookish but genuinely useful reference covering eleven knowledge areas: data governance, data architecture, data modeling and design, data storage and operations, data security, data integration and interoperability, document and content management, reference and master data, data warehousing and business intelligence, metadata, and data quality.

The DMBOK is most useful as a *checklist* and a *vocabulary*. It will not tell you which MDM vendor to pick or how to write a dbt model, but it will give you a defensible, industry-standard outline of what a complete data management program contains. When you are starting a governance program from scratch, working through the DMBOK's knowledge areas in order is a low-risk way to make sure you don't skip a major capability. Many organizations frame their governance maturity assessments directly against DMBOK areas. (The DAMA also runs the CDMP — Certified Data Management Professional — credential, which is built on the DMBOK and which appears more often in data-job postings each year.)

## Data Mesh: Decentralizing the Decentralization

For most of the last thirty years, data architecture trended toward *centralization*. A central data warehouse. A central data lake. A central data team that owned the pipelines and produced the marts. Centralization solved real problems — consistency, economies of scale, single source of truth — but it also produced a recurring failure pattern: the central team became a bottleneck, business domains felt unheard, and the warehouse drifted out of sync with the realities of the source systems because the central team didn't have the domain knowledge to keep up.

Around 2019, Zhamak Dehghani introduced a counter-proposal called **Data Mesh** — an architectural and organizational pattern that pushes data ownership *back into the business domains* (sales, marketing, finance, supply chain, etc.) and treats each domain's curated data as a *product* served to the rest of the enterprise. The data mesh is built on four principles:

1. **Domain-oriented data ownership** — the domain that produces the data also owns its curated, analytics-ready form.
2. **Data as a product** — domain teams treat their published datasets the way software teams treat APIs: with documentation, SLAs, versioning, and consumer support.
3. **Self-serve data platform** — a central platform team builds the *infrastructure* (storage, pipelines, catalog, observability, access control) so domain teams can publish data products without reinventing it each time.
4. **Federated computational governance** — global rules (classifications, privacy, interoperability standards) are set centrally and enforced computationally by the platform; everything else is delegated to domains.

A **Data Product** in this framing is a curated, owned, documented, versioned, SLA-backed dataset (or a small set of related datasets) published by a domain team for use by the rest of the organization. A "customer" data product, owned by the sales domain, would have a clear definition of what counts as a customer, a documented schema, a freshness SLA ("updated every fifteen minutes"), a quality SLA ("uniqueness > 99.5%"), an owner, a steward, a consumer-feedback channel, and a published API or table address. Treating data this way — as a product with consumers — is the cultural shift mesh asks for.

The systems-thinking tradeoff inside data mesh is sharp: *centralized governance vs. domain ownership*. Pure centralization scales poorly and demoralizes domains; pure decentralization fragments the enterprise and destroys interoperability. Mesh's bet is that you can split the difference — centralize the *rules* and the *platform*, decentralize the *data* and the *teams* — provided you have the contracts, classifications, and platform investment to make it work. The footgun is *adopting mesh terminology without the platform investment*: domains are told they own their data, the central team is dissolved, no platform is built, and within a year every domain has reinvented its own wobbly pipelines and the enterprise has seventeen incompatible "customer" tables. Mesh without contracts and platform is just chaos with a more fashionable name.

## Data Contracts: The Promise Between Producer and Consumer

The structural piece that holds data mesh together — and that increasingly shows up in centralized architectures too — is the **Data Contract**. A data contract is an explicit, versioned, machine-readable agreement between a data *producer* (the team that publishes a dataset) and its *consumers* (the teams that depend on it), specifying the schema, semantics, quality SLAs, freshness SLAs, breaking-change policy, and access controls of the published dataset. Contracts are typically expressed as YAML or JSON files checked into source control, validated on every pipeline run, and enforced at the platform level: if the producer pushes a change that violates the contract, the deployment fails before consumers ever see the broken data.

The strategic payoff of contracts is *predictable change*. Without contracts, every upstream schema change is a gamble — somebody might break, and the producer might not even know which somebody. With contracts, the producer knows exactly who depends on each field, and the consumer is protected from silent breakage. Contracts also enable **Schema Evolution** — the disciplined practice of changing schemas over time without breaking consumers. A backward-compatible change (adding a nullable column, adding a new optional field) can be deployed at any time. A breaking change (removing a column, renaming a field, changing a type, narrowing an enum) requires a deprecation cycle: announce the change, support both versions during a transition window, give consumers time to migrate, and only then retire the old version. Schema evolution policies are usually written into the contract itself ("breaking changes require a 90-day deprecation notice and a major version bump"), which converts a vague organizational hope into an enforceable commitment.

The leverage point of contracts is enormous because they make the implicit *explicit*. Before contracts, the dependency graph between producer and consumer lives in nobody's head completely; people learn it by breaking things. After contracts, the graph is in source control, the breakages happen in CI before production, and the conversation about a schema change starts before the change is shipped, not after.

!!! mascot-tip "Iris's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    When a domain team announces it is "going to data mesh," your first question should be *show me the contract template*. Not the org chart, not the platform tour, not the slide deck — the contract template. A mesh program with serious contracts is a serious mesh program. A mesh program without contracts is a reorg with extra steps, and within eighteen months you'll be having reconciliation meetings to figure out why three domains all built incompatible "customer" data products. Contracts are not paperwork; they are the schema-evolution insurance policy that makes federated ownership survivable.

<details markdown="1">
<summary>Diagram: Data Mesh Domain Layout with Contracts</summary>
Type: interactive-infographic
**sim-id:** data-mesh-domain-layout<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram showing a data mesh organized as four business domains (Sales, Marketing, Finance, Supply Chain), each rendered as a labeled pool containing one or more "data product" nodes (e.g., Sales publishes "Customers" and "Orders"; Finance publishes "Revenue" and "AR Aging"). Beneath the four domains sits a horizontal "Self-Serve Data Platform" band providing storage, pipelines, catalog, observability, and access control. Above the domains sits a "Federated Computational Governance" band showing the global rules (PII classification, retention defaults, interoperability standards) that the platform enforces computationally. Edges between data products represent contract-mediated dependencies, each labeled with a schema version (e.g., "v2.1 — backward compatible").

Color palette: domains in distinct soft tints (sales coral, marketing teal, finance mascot-emerald, supply chain mascot-magenta), platform band in slate-gray, governance band in amber, contract edges in dark teal with version labels offset slightly off the edge midpoint to dodge the vis-network horizontal-edge label rendering bug.

Interactivity: clicking any data product opens a panel showing its contract (schema, SLAs, owner, consumers). A "simulate breaking change" toggle highlights all consumers affected if a producer breaks contract, illustrating why the deprecation cycle matters. A "remove platform" toggle visually collapses the platform band to dramatize what mesh-without-platform looks like (chaos).

Layout: three horizontal bands (governance / domains / platform), full canvas width, height ~620px. Canvas resizes on window resize.

Learning objective (Bloom: Evaluating): Students can articulate the four data mesh principles, identify the role of contracts in mediating cross-domain dependencies, and explain why mesh requires platform investment to succeed.

Implementation: vis-network, deployed at `/information-systems/sims/data-mesh-domain-layout/`.
</details>

## The Lifecycle Endgame: Retention and Records

Data is not free to keep. Every byte stored has a cost — direct (storage), indirect (backup, replication, encryption, indexing, searching), and structural (privacy risk, breach blast radius, regulatory exposure). The naive default — *keep everything forever* — was tenable when storage was the dominant cost and privacy law was a weaker force. It is no longer tenable, and modern governance programs have to take the lifecycle seriously.

A **Data Retention Policy** is a written, approved policy specifying, for each class of data, *how long it will be kept, where it will be kept, when it will be moved to cheaper storage, and when it will be deleted*. Retention policies are driven by three forces: *regulation* (some data must be kept — financial records for seven years, medical records for decades, legal-hold data indefinitely until released), *privacy* (some data must be deleted — GDPR's storage limitation principle requires that personal data not be kept longer than necessary, and CCPA grants deletion rights to consumers), and *cost* (everything else has a finite economic justification for being kept).

A good retention policy is specific. "Customer transaction data: keep at full fidelity for 13 months in the operational store; archive to cold storage for an additional 6 years to satisfy financial regulation; delete after that unless on legal hold." Bad retention policies are vague ("keep what's needed") and therefore unenforceable, which means in practice everything is kept forever and the cost compounds.

The systems-thinking tradeoff here is *retention vs. minimization*. Keeping more data preserves optionality (you can answer questions you didn't anticipate), but increases privacy risk, storage cost, and breach blast radius. Keeping less data reduces all three, but means some future analyst will not have the dataset they wish for. The right tradeoff varies by data class and by regulatory regime; the wrong move is to never make the tradeoff explicitly, which is what "keep everything" really means.

**Records Management** is the older sibling discipline that retention policy descends from — the formal practice (heavily codified in regulated industries: financial services, healthcare, government, legal, pharma) of identifying *records* (data with regulatory, legal, or business significance), classifying them, applying retention schedules, managing legal holds, controlling chain of custody, and disposing of records according to a documented schedule when their retention period expires. The ISO 15489 standard codifies records management practices internationally, and many regulated industries layer their own requirements on top (SOX, HIPAA, FRCP, FINRA, GxP).

Modern records management is increasingly automated — classification labels applied by ML, retention schedules enforced by the platform, deletion executed automatically with auditable receipts — but the *policy* layer remains a human responsibility. Software does not decide which classes of data are records; lawyers, compliance officers, and the data governance council do. Software then enforces the resulting rules. The footgun in records management is *manual processes that depend on individual humans remembering* — those processes fail predictably during turnover, reorganizations, and acquisitions. The structural fix is to push as much enforcement as possible into the platform: classification at ingest, retention schedules attached to datasets at creation time, automatic legal-hold flagging, tamper-evident deletion logs.

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    There is a classic governance failure mode where the retention policy says one thing, the legal-hold system says another, the backup tapes say a third, and the developer copies of production data on engineers' laptops say a fourth. When discovery hits — and in regulated industries it eventually does — the organization discovers that "deleted" data is still findable in three places, "retained" data is gone from two places, and the receipts don't match. This is not a theoretical risk; it is the single most common reason regulated organizations end up paying eight-figure settlements for issues that began as governance shortcuts. Your structural fix: every data store, including backups and dev copies, has to be on the same retention map. If a system holds the data, it has to hold the policy.

## Putting It All Together

Data governance is the operating system of an enterprise data estate. Without it, every other data investment — warehouse, lakehouse, ML platform, dashboard layer — slowly degrades. With it, those investments compound into something the business can actually trust.

- **Data pipelines** — ETL, ELT — move data between systems. ELT preserves raw data and lineage by default, making it the modern standard.
- **Master Data Management** produces a single golden record per entity, balancing completeness against stewardship cost.
- **Data quality** is measured along six dimensions — accuracy, completeness, consistency, timeliness, uniqueness, validity — and every metric needs an owner.
- **Data lineage** records where every number came from, enabling impact analysis and trust.
- **Data catalogs** make data discoverable; **data dictionaries** make it definable; **metadata management** ties technical, business, and operational metadata into one program.
- **Data owners** set the rules; **stewards** execute within them; the **data governance council** arbitrates across domains; the **DAMA DMBOK** is the field's checklist and vocabulary.
- **Data mesh** decentralizes data ownership into business domains and reframes datasets as **data products**, mediated by **data contracts** that enforce **schema evolution** discipline.
- **Data retention policies** and **records management** govern the end of the lifecycle, balancing regulatory must-keep against privacy must-delete.

A graduate of this chapter should be able to walk into any data conversation and ask: *who owns this data? what's its quality, and how do we know? where did it come from? what does each field mean? when does it get deleted, and by whom? what's the contract with downstream consumers? and which dial — ownership, contract, lineage, retention — would most improve our trust in this dataset right now?* That last question — which lever to pull — is the systems-thinking move that separates a governance professional from a governance ticket-writer.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just absorbed the working vocabulary of enterprise data governance — pipelines, MDM, the six quality dimensions, lineage, catalogs and dictionaries, the steward/owner/council triangle, the DMBOK, mesh, products, contracts, schema evolution, retention, and records management. That is more governance literacy than most analytics engineers pick up in their first three years on the job, and you can deploy it the next time someone says "let's just spin up a quick dashboard" — which, you now know, is the moment to ask whose data it is, how stale it is, who owns the definition, and what happens to the data when the project is over. Onward to Chapter 9, where we shift gears from how data is governed to how the *projects* that build information systems get planned, staffed, and delivered.


## References

[See Annotated References](./references.md)
