---
title: Frequently Asked Questions
description: Answers to common questions about this Information Systems textbook — the course, the concepts, the tricky parts, the best practices, and the advanced material.
---

# Information Systems FAQ

Welcome! This FAQ collects the questions students, instructors, and curious readers ask most often about this textbook. Use it as a fast on-ramp to the material, a quick refresher when a concept fades, or a starting point for the chatbot you're about to build with the [chatbot training data](learning-graph/faq-chatbot-training.json).

The questions are grouped into six categories:

1. **Getting Started** — what this course is and how to use it.
2. **Core Concepts** — the foundational ideas every chapter builds on.
3. **Technical Details** — the precise definitions and distinctions.
4. **Common Challenges** — where smart students reliably get stuck.
5. **Best Practices** — how working IS professionals actually do the work.
6. **Advanced Topics** — the frontier material that becomes a superpower in two years.

If your question isn't here, check the [course description](course-description.md), browse the [chapters](chapters/index.md), or open an issue on the [GitHub repository](https://github.com/dmccreary/information-systems).

---

## Getting Started Questions

### What is this course about?

This course is a college-level introduction to **Information Systems (IS)** — the discipline that sits at the seam between people, processes, and technology. You will learn how organizations capture data, transform it into decisions, and propagate the result back into the world. The course is grounded in the **ABET Computing Accreditation Commission (CAC) 2025–2026 Program Criteria for Information Systems** and aligned with the **ACM/AIS IS2020 curriculum guidelines**, so the vocabulary you graduate with is the vocabulary employers, graduate programs, and professional societies expect.

A defining feature of this edition is that **artificial intelligence runs through the entire curriculum**, not as a special exhibit but as a load-bearing competency. By the time you finish, you will be able to threat-model a generative AI feature, design a sanctioned-AI program, build a small RAG prototype, and explain to a CFO why any of it matters. See the full [course description](course-description.md) for scope and learning outcomes.

### Who is this course for?

This course is designed for college undergraduates — typically sophomores or juniors — pursuing degrees in Information Systems, Information Technology, Business Analytics, Computer Information Systems, or any computing-and-business hybrid. It is also a good fit for graduate students who arrive without an undergraduate IS background and need the working vocabulary fast. If your program is seeking ABET CAC accreditation under the IS program criteria, the topic coverage and depth here are designed to satisfy those criteria. See the [course description](course-description.md) for prerequisites.

### What will I learn by the end?

You will leave with a working mental model of how modern information systems are designed, built, governed, and improved — and a working vocabulary for talking about them with developers, executives, vendors, auditors, and lawyers. Concretely, you will be able to design a normalized relational schema, write non-trivial SQL, build a small full-stack application, model a business process in BPMN, design a star-schema data warehouse, threat-model a system with STRIDE, plan an IS project, build a small Enterprise Knowledge Graph, design an Enterprise Nervous System, and apply the NIST AI Risk Management Framework to a proposed AI feature. See the **Learning Outcomes** section in the [course description](course-description.md) for the full Bloom-aligned list.

### What do I need to know before starting?

The hard prerequisite is **one introductory programming course (CS1) in any modern language** — Python, JavaScript, Java, C#, or similar. Nice-to-haves: a course in business fundamentals or organizational behavior, comfort with spreadsheets, comfort with the command line on at least one operating system, and exposure to discrete math or elementary statistics. If you are missing some of those, you will still survive — the textbook flags background material as it goes — but expect a steeper climb in the data and analytics chapters.

### How is the textbook organized?

Twenty-five chapters in seven parts: **Foundations**, **Building IS**, **Data and Analytics**, **Designing and Operating Systems**, **Security, Compliance, and Project Delivery**, **AI in Information Systems**, and **The Future IS Stack**. Chapters are sequenced so every concept's prerequisites appear in earlier chapters. See the [chapter index](chapters/index.md) for the full table of contents and the role each chapter plays in the larger arc.

### How long should I expect this course to take?

A typical college semester is fifteen weeks. At one chapter per ~half-week plus the occasional capstone project, the textbook fits a single semester comfortably with room for in-class case studies. Self-paced readers usually take longer — there are 580 concepts, 179,000+ words of prose, and dozens of MicroSims to run. Plan on two to three months at a steady pace, with extra time for the AI chapters if you have not used a generative-AI tool before.

### Do I have to read the chapters in order?

You can skip around, but the chapters are written assuming that earlier chapters already happened. The data chapters (6–9) build on each other; the AI chapters (19–23) build on the security chapter (14); and the final two chapters (24–25) tie the AI thread and the data thread together. If you must jump in mid-book, read the **Concepts Covered** and **Prerequisites** sections at the top of each chapter and back-fill anything you don't recognize.

### What makes this textbook different from other IS textbooks?

Three things. First, **AI is integrated throughout** — five of the twenty-five chapters are dedicated to AI in IS, and AI considerations appear in every other chapter that touches data, security, or operations. Second, **systems thinking is a running thread** — every chapter looks for tradeoffs, unintended consequences, and leverage points rather than reducing topics to checklists. Third, **the Enterprise Knowledge Graph and the Enterprise Nervous System** get serious treatment as the architectural vision the AI-native organization is moving toward. See [Chapter 24](chapters/24-knowledge-graphs/index.md) and [Chapter 25](chapters/25-ens/index.md).

### Is this textbook free?

Yes. The textbook is published as a static [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) site and the source lives on [GitHub](https://github.com/dmccreary/information-systems) under an open license. See the [License page](license.md) for the specific terms. Pull requests, errata, and improvement suggestions are welcome.

### Who is Iris?

Iris is the textbook's mascot — an emerald-green hummingbird with a ruby-magenta gorget and wire-rim glasses. She appears in admonitions throughout the book to **welcome you** at the start of each chapter, **flag the ideas that turn into your first promotion**, **share working-pro tips**, **warn you gently about footguns**, **encourage you through hard concepts**, and **celebrate with you at the end of each chapter**. She is never decorative — if you see her, the surrounding paragraph is doing real work.

### How do I use the MicroSims?

MicroSims are small interactive visualizations embedded throughout the book. They are written in p5.js (and a few other libraries) and run in your browser without installation. Most have controls — buttons, sliders, dropdowns — that let you change parameters and watch the system respond. Browse the full list at the [MicroSims index](sims/index.md) or run them in fullscreen by following the link below each iframe.

### Where can I find the learning graph?

The full learning graph — 580 concepts and their dependencies — lives in `docs/learning-graph/`. The interactive viewer is at the [Learning Graph Viewer MicroSim](sims/graph-viewer/index.md). The viewer lets you trace prerequisites for any concept, see which chapter introduces it, and filter by taxonomy category. It is the single best tool for figuring out *why* a chapter assumes you know something.

### How is this textbook ABET-aligned?

ABET CAC accredits Information Systems programs against six criterion areas: application development, data and information management, networks and telecommunications for business, the role of IS in organizations, project management of IS resources, and security of information assets — all situated within the environment of an organization. Every one of those areas has a dedicated chapter (often more than one), and the concept list in each chapter maps back to the corresponding ABET criterion. See [Chapter 1](chapters/01-foundations/index.md) for the full mapping.

---

## Core Concepts

### What is an information system?

An **information system (IS)** is a coordinated set of components — hardware, software, data, networks, people, and processes — that collectively capture, store, process, and distribute information to support decisions and operations within an organization. The key word is *system*: an IS is more than the sum of its components, and its behavior emerges from the relationships among them. A spreadsheet on a single laptop is barely an information system; a hospital's electronic medical record platform is a large one. See [Chapter 1](chapters/01-foundations/index.md) for the working definition the rest of the textbook uses.

### What is the difference between data, information, and knowledge?

**Data** is raw facts and figures with no inherent meaning — the bits on the disk. **Information** is data that has been organized, contextualized, and given meaning — facts arranged so a human can interpret them. **Knowledge** is information that has been connected to other information and acted upon — the patterns, relationships, and judgments built from many pieces of information over time. The textbook extends this with **insight** to form the **DIKI hierarchy**. See [Chapter 1](chapters/01-foundations/index.md) and the [DIKI Pyramid MicroSim](sims/diki-pyramid/index.md).

### What is the DIKI hierarchy?

The **DIKI hierarchy** is a four-layer mental model: **D**ata, **I**nformation, **K**nowledge, **I**nsight. Each layer is built from the layer beneath it: information is data plus context, knowledge is information plus connections, and insight is knowledge plus the *aha* moment that changes a decision. The textbook uses this vocabulary precisely — when later chapters say "data," "information," or "knowledge," they mean these specific definitions, not the loose marketing-slide versions. See [Chapter 1](chapters/01-foundations/index.md).

### What is the difference between IT and IS?

**Information Technology (IT)** is the technology stack itself — the hardware, software, and networks. **Information Systems (IS)** is the larger discipline that includes IT *plus* the people, processes, and organizational context that make the technology useful. An IT professional asks "is the server up?"; an IS professional asks "is the loan-approval process producing fair, fast, auditable decisions?" The IS professional cares about the IT, but treats it as one component of a sociotechnical system. See [Chapter 1](chapters/01-foundations/index.md).

### What is a sociotechnical system?

A **sociotechnical system** is a system in which the social subsystem (people, roles, culture, incentives) and the technical subsystem (hardware, software, data) are jointly responsible for the system's behavior, and you cannot redesign one without affecting the other. Most IS failures are sociotechnical: the technology worked, but the people, the process, or the incentives did not. Treating IS as purely technical is the single most common source of IS project failure. See [Chapter 1](chapters/01-foundations/index.md).

### What is the three-tier architecture?

The **three-tier architecture** separates an application into a **presentation tier** (the user interface), an **application tier** (the business logic), and a **data tier** (the database). Each tier can be developed, scaled, and operated independently. This is the architectural shape underneath most enterprise web applications you will ever encounter. See [Chapter 3](chapters/03-architecture/index.md) and the [Three-Tier Architecture MicroSim](sims/three-tier-architecture/index.md).

### What is the difference between OLTP and OLAP?

**OLTP (Online Transaction Processing)** systems handle the day-to-day operational workload — inserts, updates, deletes — at high concurrency with strict consistency. They are optimized for short, frequent transactions. **OLAP (Online Analytical Processing)** systems handle large analytical queries that scan millions of rows to produce aggregates and trends. They are optimized for read-heavy, long-running queries. Most organizations run both, with data flowing nightly (or in near-real-time) from OLTP into OLAP. See [Chapter 7](chapters/07-modern-databases/index.md).

### What is database normalization?

**Normalization** is the process of organizing a relational schema to eliminate redundancy and the anomalies it causes. The standard goal is **Third Normal Form (3NF)**: each fact appears in exactly one place, every non-key column depends on the primary key, and nothing depends on a non-key column. Normalization makes updates cheap and consistent; denormalization makes specific queries cheap and is something you do *intentionally*, with a named query in mind, after profiling. See [Chapter 6](chapters/06-data-foundations/index.md) and the [Normalization Journey MicroSim](sims/normalization-journey-1nf-to-3nf/index.md).

### What are ACID transactions?

**ACID** stands for **Atomicity, Consistency, Isolation, Durability** — the four properties a database transaction must satisfy. Atomicity: the transaction either fully commits or fully rolls back. Consistency: the database moves from one valid state to another. Isolation: concurrent transactions do not interfere. Durability: once committed, the change survives crashes. ACID is the contract that makes "transfer money from account A to account B" safe. See [Chapter 6](chapters/06-data-foundations/index.md).

### What is the CIA triad?

The **CIA triad** is the foundational model for information security: **Confidentiality** (only authorized parties can read), **Integrity** (data is not modified by unauthorized parties or in unauthorized ways), and **Availability** (authorized parties can access the system when they need to). Almost every security control maps to one or more of these three properties. See [Chapter 14](chapters/14-security/index.md).

### What is the AAA framework?

**AAA** stands for **Authentication, Authorization, Accounting**. Authentication answers "who are you?", authorization answers "what are you allowed to do?", and accounting answers "what did you actually do?" — the audit log. Most IS security failures are a breakdown in one of these three: a stolen credential (authentication), excessive permissions (authorization), or missing logs (accounting). See [Chapter 14](chapters/14-security/index.md).

### What are the cloud service models?

Cloud computing has three classic service models. **IaaS (Infrastructure as a Service)** provides virtual machines, storage, and networks — the customer manages everything above the hypervisor. **PaaS (Platform as a Service)** provides a managed runtime — the customer ships code, the provider runs it. **SaaS (Software as a Service)** provides a finished application — the customer logs in and configures. The newer **FaaS (Function as a Service)** sits between PaaS and SaaS for event-driven workloads. See [Chapter 12](chapters/12-cloud/index.md) and the [Shared Responsibility MicroSim](sims/cloud-shared-responsibility-stack/index.md).

### What is the shared responsibility model?

The **shared responsibility model** divides operational and security responsibility between the cloud provider and the cloud customer. As you move from IaaS to PaaS to SaaS, the provider takes on more responsibility (the OS, the runtime, the application) and the customer takes on less. The customer is *always* responsible for their data, their identity configuration, and their access controls. Misunderstanding this model is the single most common source of cloud security incidents. See [Chapter 12](chapters/12-cloud/index.md).

### What is BPMN?

**Business Process Model and Notation (BPMN)** is a visual modeling language for describing business processes. It uses a small vocabulary — actors (swimlanes), activities (rounded rectangles), gateways (diamonds), and events (circles) — to describe how work flows through an organization. BPMN is the lingua franca of the business analyst and the bridge between "what the business wants" and "what the system will do." See [Chapter 5](chapters/05-bpm/index.md) and the [BPMN Order-to-Cash MicroSim](sims/bpmn-order-to-cash/index.md).

### What is the systems development life cycle (SDLC)?

The **systems development life cycle (SDLC)** is the named sequence of phases a software-or-systems project moves through: **planning, analysis, design, implementation, testing, deployment, and maintenance**. Different methodologies (waterfall, agile, spiral, RAD) traverse these phases differently — sequentially in waterfall, iteratively in agile — but the activities themselves are universal. See [Chapter 4](chapters/04-appdev/index.md).

### What is agile development?

**Agile** is a family of iterative, incremental software development methodologies — Scrum, Kanban, Extreme Programming, SAFe — that emphasize working software, customer collaboration, and responding to change over heavy upfront planning. The Agile Manifesto (2001) is the canonical reference. Agile is not the absence of planning; it is replacing big up-front planning with continuous, lightweight planning. See [Chapter 4](chapters/04-appdev/index.md) and [Chapter 16](chapters/16-project-management/index.md).

### What is ETL/ELT?

**ETL (Extract, Transform, Load)** is the classic data-pipeline pattern: pull data from source systems, transform it into the warehouse's schema, then load it. **ELT (Extract, Load, Transform)** flips the order: load the raw data first, then transform inside the warehouse. ELT became dominant once cloud warehouses became cheap enough to store the raw data and powerful enough to transform it in place. Both move data from operational systems into analytical systems. See [Chapter 9](chapters/09-bi-and-analytics/index.md).

### What is a data warehouse?

A **data warehouse** is a centralized, analytics-optimized database that consolidates data from multiple operational systems into a query-friendly schema (typically a star schema). It exists because OLTP systems are bad at analytics and analytical queries are bad for OLTP performance. The warehouse is read-mostly, organized around subjects (customers, products, sales) rather than transactions, and feeds dashboards, reports, and ML training pipelines. See [Chapter 7](chapters/07-modern-databases/index.md) and [Chapter 9](chapters/09-bi-and-analytics/index.md).

### What is a data lakehouse?

A **lakehouse** is a hybrid that puts warehouse-style table semantics (ACID transactions, schema enforcement, time travel) on top of cheap object storage that originally hosted a data lake. Technologies like Delta Lake, Apache Iceberg, and Apache Hudi made lakehouses practical. The pitch: you no longer choose between the cheap-and-flexible lake and the expensive-and-strict warehouse; you get both behaviors against the same storage. See [Chapter 7](chapters/07-modern-databases/index.md).

### What is master data management (MDM)?

**Master data management (MDM)** is the discipline of making sure every system in the organization agrees on the canonical version of the entities the business cares about: customers, products, employees, suppliers, locations. Without MDM, your CRM thinks "Acme Corp" and your ERP thinks "ACME CORPORATION" are different companies. With MDM, there is one customer ID, one master record, and a set of rules for resolving conflicts. See [Chapter 8](chapters/08-data-governance/index.md).

### What is an ERP system?

**Enterprise Resource Planning (ERP)** systems are integrated software suites that run the back-office processes of a large organization: finance, HR, procurement, supply chain, manufacturing, and project accounting, all sharing a single database. Major vendors include SAP, Oracle, Microsoft Dynamics, Workday, and NetSuite. The trade-off: ERPs eliminate data silos but force the organization to either adopt the vendor's process model or pay heavily to customize it. See [Chapter 13](chapters/13-enterprise-systems/index.md).

### What is the build-vs-buy-vs-SaaS decision?

For any new business capability, IS leaders face three options. **Build** custom software (maximum fit, maximum cost, full ownership of maintenance). **Buy** packaged software and run it yourself (faster than build, requires customization, you own the operations). **SaaS** subscribe to a cloud service (fastest, lowest upfront cost, you give up control over upgrades, integration, and data residency). The right answer depends on how strategic the capability is, how unique the requirements are, and how mature the SaaS market is. See [Chapter 4](chapters/04-appdev/index.md) and the [Build vs Buy vs SaaS MicroSim](sims/build-buy-saas-decision/index.md).

### What is a knowledge graph?

A **knowledge graph** is a graph data structure that represents entities (people, products, events, concepts) as nodes and the relationships between them as edges, with both nodes and edges typed and labeled. Knowledge graphs excel at integrating heterogeneous, evolving data — exactly the problem most enterprises have. They also serve as the grounding layer for trustworthy generative AI through patterns like GraphRAG. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### What is an Enterprise Knowledge Graph (EKG)?

An **Enterprise Knowledge Graph (EKG)** is a knowledge graph that unifies an organization's data — across ERP, CRM, document repositories, data warehouses, and external sources — into a single semantic layer that humans, applications, and AI agents can query. The EKG is the "single source of meaning" the AI-ready enterprise is converging toward. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### What is the Enterprise Nervous System (ENS)?

The **Enterprise Nervous System (ENS)** is an event-driven architecture, backed by an Enterprise Knowledge Graph, that senses external signals (competitor moves, supply disruptions, regulatory changes, sentiment shifts), enriches them against the EKG, evaluates them with rules and AI, and routes responses to humans or automated actuators in real time. It is the architectural vision that ties the AI thread and the data thread together — and the answer to "what comes after the data warehouse?" See [Chapter 25](chapters/25-ens/index.md).

### What is generative AI?

**Generative AI** refers to AI systems — typically large language models (LLMs) and diffusion models — that produce new content (text, code, images, audio, video) rather than only classifying or predicting. The most consequential class for IS is the **LLM**, which can summarize, draft, translate, code, and reason over text and structured data. Generative AI is a capability the IS organization both *deploys* (in chatbots, copilots, and RAG systems) and *governs* (through acceptable-use policies, sanctioned-model lists, and risk frameworks). See [Chapter 19](chapters/19-ai-in-is/index.md).

### What is retrieval-augmented generation (RAG)?

**Retrieval-augmented generation (RAG)** is a pattern where a generative model is given relevant context — retrieved from a document store, a vector database, or a knowledge graph — *at inference time*, so its answer is grounded in current, authoritative data instead of relying solely on its training data. RAG is the default architecture for organizational chatbots and copilots because it cuts hallucinations and lets you update the AI's "knowledge" by updating the underlying data. See [Chapter 19](chapters/19-ai-in-is/index.md).

### What is GraphRAG?

**GraphRAG** is RAG that retrieves from a knowledge graph (or a graph plus vectors) instead of, or in addition to, plain document chunks. By following relationships in the graph, GraphRAG can answer multi-hop questions that vector-only RAG mishandles ("which of our customers is exposed to the supplier whose region just had a hurricane?"). When the source data is structured and relational, GraphRAG produces materially higher answer fidelity than vector-only RAG. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### What are the four functions of the NIST AI Risk Management Framework?

The **NIST AI Risk Management Framework (AI RMF 1.0)** organizes AI risk management into four functions. **Govern**: establish the culture, policies, roles, and accountability. **Map**: understand the context, intended uses, and stakeholders. **Measure**: assess and track AI risks against the intended outcomes. **Manage**: prioritize, treat, and monitor identified risks. NIST AI RMF is the de facto framework U.S. organizations use to operationalize responsible AI. See [Chapter 20](chapters/20-responsible-ai/index.md).

### What are the EU AI Act risk tiers?

The **EU AI Act** classifies AI systems into four tiers. **Unacceptable risk**: prohibited (e.g., social scoring by governments, real-time biometric ID in public spaces with limited exceptions). **High risk**: heavily regulated (e.g., AI in hiring, credit, education, critical infrastructure) — requires conformity assessments, technical documentation, and human oversight. **Limited risk**: transparency obligations (e.g., chatbots must disclose they are AI). **Minimal risk**: largely unregulated. The tier determines the obligations. See [Chapter 21](chapters/21-ai-law/index.md).

---

## Technical Detail Questions

### What is a primary key?

A **primary key** is a column (or combination of columns) that uniquely identifies each row in a relational table. The primary key is required to be unique and non-null, and it is typically the column that foreign keys in other tables reference. Choosing a primary key is a design decision — natural keys (a real-world identifier) versus surrogate keys (an arbitrary integer or UUID generated by the database) — and the choice has long-term consequences. See [Chapter 6](chapters/06-data-foundations/index.md).

### What is a foreign key?

A **foreign key** is a column in one table that references the primary key of another table, establishing a relationship between rows. Foreign keys enforce **referential integrity** — the database refuses to insert or update a row if the referenced row does not exist, and refuses to delete a referenced row unless you tell it what to do (cascade, restrict, set null). See [Chapter 6](chapters/06-data-foundations/index.md).

### What is a SQL JOIN?

A **JOIN** combines rows from two or more tables based on a related column. **INNER JOIN** returns only rows that match in both tables. **LEFT JOIN** (and RIGHT JOIN) returns all rows from one side plus matched rows from the other, filling unmatched columns with NULL. **FULL OUTER JOIN** returns all rows from both sides. **CROSS JOIN** returns the Cartesian product. JOINs are the workhorse of relational query work; if you cannot read a four-table join, the BI chapter will hurt. See [Chapter 6](chapters/06-data-foundations/index.md).

### What is a star schema?

A **star schema** is the canonical dimensional model for a data warehouse. A central **fact table** (e.g., sales transactions) is surrounded by **dimension tables** (e.g., customers, products, dates, stores). Each dimension joins to the fact table by a foreign key. Star schemas are denormalized on purpose — they trade write efficiency for blazing-fast read aggregates. The variant with normalized dimensions is a **snowflake schema**. See [Chapter 9](chapters/09-bi-and-analytics/index.md).

### What is a transaction isolation level?

**Isolation levels** control how visible concurrent transactions are to each other. The standard SQL levels — **read uncommitted, read committed, repeatable read, serializable** — trade off consistency for concurrency. Higher isolation prevents anomalies (dirty reads, non-repeatable reads, phantom reads, write skew) but reduces throughput. Most production databases default to **read committed**, which leaves you exposed to write skew unless you opt up. See [Chapter 6](chapters/06-data-foundations/index.md) and the [Write Skew MicroSim](sims/write-skew-read-committed/index.md).

### What is the difference between SQL and NoSQL?

**SQL databases** are relational: data lives in tables with fixed schemas, queries are expressed in SQL, and transactions are ACID. **NoSQL** is an umbrella for the four non-relational families: **key-value** stores (Redis, DynamoDB), **document** stores (MongoDB, Couchbase), **column-family** stores (Cassandra, HBase), and **graph** databases (Neo4j, Amazon Neptune). NoSQL stores trade some of SQL's guarantees (schemas, joins, sometimes transactions) for scale, flexibility, or workload fit. The right answer is almost always *both, used for what each is good at* — that is the polyglot persistence story. See [Chapter 7](chapters/07-modern-databases/index.md).

### What is a microservice architecture?

A **microservice architecture** decomposes a single application into a set of small, independently deployable services that communicate over a network (typically HTTP or asynchronous messaging). Each service owns its data and exposes an API. Microservices trade development complexity (you now have a distributed system) for organizational scalability (teams ship independently). Most organizations should start with a well-modularized monolith and only break it up when team-coordination cost exceeds operational cost. See [Chapter 3](chapters/03-architecture/index.md).

### What is an API gateway?

An **API gateway** is a single entry point that sits in front of a set of backend services and handles cross-cutting concerns: authentication, rate limiting, routing, request/response transformation, observability, and (often) caching. It keeps each backend service from re-implementing the same edge concerns. See [Chapter 3](chapters/03-architecture/index.md) and the [API Gateway MicroSim](sims/api-gateway-flow/index.md).

### What is the difference between a container and a virtual machine?

A **virtual machine (VM)** virtualizes hardware: each VM runs its own operating system on top of a hypervisor. A **container** virtualizes the operating system: each container runs as an isolated process group on a shared kernel. Containers are dramatically lighter (megabytes, seconds to start) but trade some isolation strength. **Docker** popularized containers; **Kubernetes** is how organizations run them at scale. See [Chapter 12](chapters/12-cloud/index.md) and the [Container vs VM MicroSim](sims/container-vs-vm-architecture/index.md).

### What is zero trust architecture?

**Zero trust** is a security model that assumes the network perimeter is already breached and that every request must be authenticated, authorized, and encrypted regardless of where it originates. The slogan is "never trust, always verify." It replaces the older "castle-and-moat" model where everything inside the corporate network was implicitly trusted. See [Chapter 14](chapters/14-security/index.md) and the [Zero Trust vs Castle-and-Moat MicroSim](sims/zero-trust-vs-castle-moat/index.md).

### What is STRIDE?

**STRIDE** is a threat-modeling mnemonic developed at Microsoft. It stands for **Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege** — the six categories of threats every system component should be analyzed against. Walking a system diagram with STRIDE in hand surfaces the threats the design must handle. See [Chapter 14](chapters/14-security/index.md) and the [STRIDE Overlay MicroSim](sims/stride-threat-model-overlay/index.md).

### What is GDPR?

The **General Data Protection Regulation (GDPR)** is the EU's comprehensive data protection law, in force since 2018. It applies to any organization that processes personal data of people in the EU, regardless of where the organization is based. Key concepts: **lawful basis** for processing, **data subject rights** (access, correction, deletion, portability), **data protection by design and by default**, **breach notification within 72 hours**, and fines up to 4% of global annual revenue. See [Chapter 15](chapters/15-privacy-compliance/index.md).

### What is HIPAA?

The **Health Insurance Portability and Accountability Act (HIPAA)** is the U.S. federal law that protects the confidentiality and security of **Protected Health Information (PHI)**. The HIPAA Privacy Rule governs use and disclosure of PHI; the Security Rule mandates administrative, physical, and technical safeguards. Covered entities and their business associates are subject to HIPAA, and breaches can trigger both monetary penalties and reputational damage. AI features in healthcare add a new layer — see [Chapter 21](chapters/21-ai-law/index.md).

### What is SOX?

The **Sarbanes-Oxley Act (SOX)**, passed in 2002, is U.S. federal legislation that imposes strict requirements on the financial reporting of publicly traded companies. From an IS perspective, the most consequential provisions are **Section 302** (executive certification of financial reports) and **Section 404** (assessment of internal controls). SOX is the reason every public-company IS shop has change-management, segregation-of-duties, and audit-log controls. See [Chapter 15](chapters/15-privacy-compliance/index.md).

### What is ITIL?

**ITIL (Information Technology Infrastructure Library)** is a globally adopted framework for IT service management, defining best practices across the service lifecycle: service strategy, design, transition, operation, and continual improvement. ITIL gives the IS organization a shared vocabulary for incidents, problems, changes, configuration items, and service-level agreements. See [Chapter 17](chapters/17-itsm/index.md).

### What is the difference between an incident and a problem?

In ITIL terminology, an **incident** is an unplanned interruption or quality reduction of an IT service — it is acute, and the goal is to restore service as quickly as possible. A **problem** is the underlying cause (or set of causes) of one or more incidents — it is chronic, and the goal is to eliminate the cause permanently. Confusing the two leads to fixing the same thing repeatedly without ever finding why it keeps breaking. See [Chapter 17](chapters/17-itsm/index.md).

### What is a service-level agreement (SLA)?

A **service-level agreement (SLA)** is a contractual commitment about the quality of a service — typically expressed as availability percentages (e.g., 99.9% uptime), response times, and remediation obligations when targets are missed. Internal teams often use **SLOs (service-level objectives)** as the target they aim for and **SLIs (service-level indicators)** as the metrics they measure, with the SLA as the customer-visible commitment built on top. See [Chapter 17](chapters/17-itsm/index.md).

### What is BPMN swimlane notation?

In BPMN, **swimlanes** divide a process diagram horizontally (or vertically) by **actor** — each lane represents a role, department, or system. Activities are placed in the lane of whoever performs them. Swimlanes make handoffs visible: every time an arrow crosses a lane boundary, work is being passed between actors, which is where most process delay and error accumulates. See [Chapter 5](chapters/05-bpm/index.md).

### What is RPA?

**Robotic Process Automation (RPA)** is software that automates rule-based, repetitive tasks by mimicking the keystrokes and mouse clicks a human user would make in existing applications. RPA is most useful for legacy systems with no API. It is fast to deploy and easy to break — when an underlying screen layout changes, the bot fails silently. The successor pattern is **intelligent automation**, which combines RPA with ML and LLMs. See [Chapter 5](chapters/05-bpm/index.md) and the [As-Is vs To-Be MicroSim](sims/as-is-to-be-automation-comparison/index.md).

### What is the project triangle?

The **project triangle** (sometimes called the iron triangle) captures the three constraints of any project: **scope, time, and cost** — with **quality** in the middle as the dependent variable. Tightening any vertex affects the others. The classic punch line: pick two of "fast, cheap, good." See [Chapter 16](chapters/16-project-management/index.md) and the [Project Triangle MicroSim](sims/project-triangle/index.md).

### What is earned value management (EVM)?

**Earned value management (EVM)** is a project-control technique that combines scope, schedule, and cost into a single set of indices: **Schedule Variance (SV), Cost Variance (CV), Schedule Performance Index (SPI), Cost Performance Index (CPI)**. EVM tells you not just how much you have spent, but whether you have produced as much as you should have for that spend. See [Chapter 16](chapters/16-project-management/index.md) and the [EVM Variance MicroSim](sims/evm-variance-visualization/index.md).

### What is a Scrum sprint?

A **sprint** is a fixed-length time-box (typically two weeks) within which a Scrum team commits to delivering a shippable increment of product. The sprint contains four ceremonies: **sprint planning** (what we will do), **daily scrum** (a 15-minute coordination meeting), **sprint review** (demonstrate the increment), and **sprint retrospective** (improve the process). See [Chapter 16](chapters/16-project-management/index.md) and the [Scrum Sprint Cycle MicroSim](sims/scrum-sprint-cycle/index.md).

### What is the OWASP Top 10 for LLM Applications?

The **OWASP Top 10 for LLM Applications** is a community-maintained list of the most critical security risks specific to applications that use large language models. The list includes **prompt injection, insecure output handling, training data poisoning, model denial of service, supply chain vulnerabilities, sensitive information disclosure, insecure plugin design, excessive agency, overreliance, and model theft**. It is the LLM-era complement to the original OWASP Top 10 for web applications. See [Chapter 22](chapters/22-ai-security/index.md).

### What is prompt injection?

**Prompt injection** is an attack in which a malicious actor causes an LLM to follow instructions embedded in *input data* rather than instructions from the application developer or user. **Direct prompt injection** comes through the user's prompt; **indirect prompt injection** comes through data the LLM retrieves (a webpage, a PDF, an email). Mitigations include input/output filtering, structured prompt isolation, retrieval source validation, and least-privilege tool use — but no mitigation is complete. See [Chapter 22](chapters/22-ai-security/index.md).

### What is MITRE ATLAS?

**MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems)** is a knowledge base of adversarial tactics, techniques, and case studies for ML and AI systems — the AI-specific complement to MITRE ATT&CK. ATLAS catalogs reconnaissance, model evasion, model extraction, data poisoning, and inference attacks observed in the wild. See [Chapter 22](chapters/22-ai-security/index.md).

### What is the labeled property graph data model?

The **labeled property graph (LPG)** is the data model used by most graph databases (Neo4j, Memgraph, TigerGraph, Amazon Neptune in property-graph mode). Nodes have **labels** (types) and **properties** (key-value pairs). Edges (relationships) have **types**, **direction**, and their own properties. The LPG is the property-rich cousin of the simpler RDF triple model and is the model the textbook focuses on for EKG work. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### What is Cypher?

**Cypher** is the declarative query language created for Neo4j and now adopted (with variations) by most LPG graph databases. Its signature visual pattern syntax — `(a:Person)-[:KNOWS]->(b:Person)` — reads almost as a diagram. Cypher is the basis for **GQL (Graph Query Language)**, the ISO/IEC standard graph query language ratified in 2024. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### What is event-driven architecture?

**Event-driven architecture (EDA)** is a software architecture pattern where components communicate by producing and consuming **events** — immutable records of something that happened — rather than by direct request/response calls. Events flow through a **streaming platform** (Kafka, Pulsar, Kinesis) or **broker** that decouples producers from consumers. EDA is the architectural substrate of the Enterprise Nervous System. See [Chapter 25](chapters/25-ens/index.md).

---

## Common Challenge Questions

### Why is normalization so confusing?

Because the textbooks usually teach it as a sequence of rules ("eliminate transitive dependencies!") instead of as a problem to solve ("don't store the same fact twice"). The trick is to start with the *anomaly* — the bad thing that happens when you violate the rule (an update gets out of sync, an insert is impossible, a delete loses information) — and then see normalization as the move that prevents that anomaly. Once you have seen the same anomaly twice, the rules feel inevitable. See [Chapter 6](chapters/06-data-foundations/index.md) and the [Normalization Journey MicroSim](sims/normalization-journey-1nf-to-3nf/index.md).

### When should I denormalize?

Only when you have profiled a specific, named query that is too slow at the normalized schema, and you have decided that the cost of maintaining a redundant copy is acceptable. Denormalization without a query in mind is a future bug with extra steps. The footgun pattern: a developer denormalizes "for speed," every subsequent update has to remember to update both copies, and six months later production has two versions of the same fact and nobody knows which is correct. See [Chapter 6](chapters/06-data-foundations/index.md).

### Why do data warehouse projects fail so often?

Because they are usually treated as IT projects when they are actually business-and-IT projects. The classic failure modes: nobody owns the dimensions, the source-system semantics are not documented, the transformations encode undocumented business rules, and by the time the dashboard ships nobody trusts the numbers. The fix is governance — data stewards, metric definitions, lineage tracking — *before* the technology choices. See [Chapter 8](chapters/08-data-governance/index.md) and [Chapter 9](chapters/09-bi-and-analytics/index.md).

### What is the difference between a data lake and a swamp?

A **data lake** is a storage layer that holds raw, multi-format organizational data. A **data swamp** is what the lake becomes when nobody catalogs it, schemas are not enforced, lineage is not tracked, and the data nobody is using is not deleted. The difference is governance, not technology. The lakehouse pattern (with Iceberg, Delta, or Hudi) helps by adding schema enforcement and ACID transactions, but governance still has to be done. See [Chapter 7](chapters/07-modern-databases/index.md).

### Why do ERP implementations go over budget?

Because customizing the ERP to match the organization's existing process is almost always more expensive than changing the organization's process to match the ERP's standard model. Most overruns are paid customization where the rational answer was process change. The other big driver is data migration: the data quality problems your old system was hiding become visible on day one of the new system. See [Chapter 13](chapters/13-enterprise-systems/index.md) and the [ERP Implementation Timeline MicroSim](sims/erp-implementation-timeline/index.md).

### Why is SQL so hard at first?

Because you have to think *declaratively* — describe what you want, not how to get it — and most introductory programming teaches you to think *imperatively*. The two-table join is the conceptual hurdle: once it clicks that "I am specifying a set, and the database is choosing the algorithm," the rest of SQL falls into place. Iris's prediction: you will love SQL within two weeks of being annoyed by it. See [Chapter 6](chapters/06-data-foundations/index.md).

### Why doesn't my AI chatbot give the right answer?

Most likely one of three things. First, **the data it is retrieving is wrong or stale** — fix the index. Second, **the retrieval is missing the right chunk** — adjust chunking, embeddings, or add metadata filters. Third, **the model is hallucinating around the retrieved context** — tighten the prompt, add citations, lower the temperature. Generative AI failures are usually retrieval failures dressed up as model failures. See [Chapter 19](chapters/19-ai-in-is/index.md).

### Why is "shadow AI" such a big deal?

Because it is the modern equivalent of email-attachments-with-customer-data, except faster, harder to detect, and amplified by the model's tendency to memorize. When employees paste sensitive data into a public AI tool, the data leaves the organization's control and may be retained, used in future training, or exposed in a breach. The fix is a sanctioned-AI program: an approved-tools list, a data-loss prevention layer, prompt logging, and clear acceptable-use policies. See [Chapter 22](chapters/22-ai-security/index.md) and [Chapter 23](chapters/23-ai-productivity/index.md).

### Why are AI productivity claims so hard to evaluate?

Because vendors compare their tool against the most pessimistic baseline available, the pilot teams are self-selected enthusiasts, the metrics are gameable (lines of code is a famously bad proxy for value), and the confounders (review burden, defect rates, code churn, tech debt) are rarely measured. A defensible measurement plan needs a real baseline, a stable metric, a stop-loss criterion, and instrumentation for the confounders. See [Chapter 23](chapters/23-ai-productivity/index.md).

### Why is identity resolution so hard?

Because the same real-world entity ("ACME Corp", "Acme Corporation, Inc.", "ACME") appears in different systems with different spellings, missing fields, conflicting values, and different identifiers. Naïve matching produces false merges (combining two real customers into one) and naïve splits (treating one customer as two). Production-quality entity resolution combines deterministic rules, fuzzy matching, ML scoring, and a human-in-the-loop review step for ambiguous cases. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### What do I do when stakeholders disagree on requirements?

Get them in the same room (or call) and make the disagreement *visible*, usually by drawing the system or process they think they are agreeing about. Disagreements that look like requirements conflicts are often vocabulary conflicts — two stakeholders using the same word for different concepts, or different words for the same concept. A glossary is the single most under-rated requirements artifact. See [Chapter 10](chapters/10-sad/index.md).

### Why does scope keep creeping?

Because every new request *individually* sounds reasonable, and the cost of saying yes is invisible while the cost of saying no is visible right now. The countermeasure is a documented change-control process with a sign-off — not because change is bad (it usually is not), but because the schedule and budget consequences must be made visible at the moment the change is approved. See [Chapter 16](chapters/16-project-management/index.md).

### Why do my SQL queries get so slow on large tables?

Usually one of: missing indexes (full table scans), bad join order (the planner picked wrong because statistics are stale), implicit type conversions disabling an index, a SELECT *that pulls more columns than needed*, or a function on an indexed column blocking index use (`WHERE LOWER(email) = ...`). Run `EXPLAIN`, look at the plan, and fix the highest-cost step. Performance tuning is mostly about making the planner's job easy. See [Chapter 6](chapters/06-data-foundations/index.md).

### Why is GraphRAG weird the first time I see it?

Because most students learn vector RAG first, where retrieval is "find similar chunks." Graph retrieval is "follow relationships," which is a different mental model and a different prompt-engineering style. The unfair advantage shows up on multi-hop questions and when the data is genuinely relational — the kind of question where vector RAG starts hallucinating links between unrelated chunks. Stick with it; the second example is much easier than the first. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### Why do help desks struggle to measure AI productivity?

Because the easy metrics — total tickets, average handle time, deflection rate — move for reasons other than the AI. The hard metric, **first-contact resolution quality weighted by user satisfaction**, requires instrumentation most help desks have not built. AI also changes the *shape* of the ticket queue: it absorbs the easy tickets, leaving the harder mix for humans, which can make average-handle-time go *up* even as the operation gets more efficient. See [Chapter 23](chapters/23-ai-productivity/index.md).

---

## Best Practice Questions

### How should I choose between SQL, NoSQL, and graph databases?

Match the database to the workload, not to fashion. **Relational** for transactional, well-structured, integrity-critical data with ad-hoc analytical queries. **Key-value** for caches, sessions, and high-throughput simple lookups. **Document** for semi-structured content where the schema varies per record. **Column-family** for wide, sparse, time-series, write-heavy operational data at very large scale. **Graph** for relationship-heavy domains where the questions you are asking are about the *connections*. Most enterprise systems end up polyglot — multiple stores, each used for what it is good at. See [Chapter 7](chapters/07-modern-databases/index.md).

### How should I write good user stories?

Follow the **role-feature-benefit** template — *"As a [role], I want [feature] so that [benefit]"* — and pair every story with **acceptance criteria** in Given-When-Then form. Keep stories small enough to finish in a single sprint (the **INVEST** criteria: Independent, Negotiable, Valuable, Estimable, Small, Testable). The benefit clause is non-negotiable: a story without a stated benefit cannot be prioritized rationally. See [Chapter 10](chapters/10-sad/index.md).

### How should I scope a small RAG prototype?

Start with the **smallest defensible source set** (one well-curated document collection, not the entire intranet), the **narrowest user task** (answer questions about *this thing*, refuse the rest), and a **strict refusal path** for out-of-scope questions. Add citations to every answer so users can verify. Measure on a **gold question set** before letting real users near it. Resist the urge to ship "a chatbot for everything" — focused RAG works; broad RAG hallucinates. See [Chapter 19](chapters/19-ai-in-is/index.md).

### How should I threat-model a generative AI feature?

Walk the feature against the **OWASP Top 10 for LLM Applications**, with **prompt injection** at the top of the list. Pay special attention to: where does retrieved content come from (indirect injection surface), what tools can the model invoke (excessive agency), what data flows through the model (sensitive disclosure), and what does the model's output get fed into (insecure output handling). Pick the three highest-priority risks and design a mitigation for each — perfect is not the goal; *not catastrophic* is. See [Chapter 22](chapters/22-ai-security/index.md).

### How should I structure an AI acceptable-use policy?

Cover at minimum: **what data is allowed in which AI tools** (with a sanctioned-tool list), **what tasks are appropriate for AI assistance**, **what review or human-in-the-loop is required for high-stakes uses**, **how AI-generated content is disclosed and attributed**, **how prompt and output logs are retained**, and **how violations are handled**. Keep the policy short enough to actually read, and pair it with technical controls (DLP, sanctioned-model list) so compliance is the path of least resistance. See [Chapter 20](chapters/20-responsible-ai/index.md).

### How should I evaluate a SaaS vendor?

Read the **data processing addendum (DPA)** carefully — what data is collected, where it is stored, who else gets it, how long it is kept. Check **certifications** (SOC 2 Type II, ISO 27001, FedRAMP if applicable). Test the **integration story** (APIs, SSO, audit log export). Demand a **realistic exit plan** — can you get your data out, in a usable format, on commercially reasonable terms. And ask the demo question vendors hate: "show me the audit log." See [Chapter 12](chapters/12-cloud/index.md) and [Chapter 13](chapters/13-enterprise-systems/index.md).

### How should I approach a cloud migration?

Use the **Six Rs framework**: **Rehost** (lift and shift), **Replatform** (small adjustments to use cloud services), **Repurchase** (replace with SaaS), **Refactor** (re-architect for cloud-native), **Retain** (leave on-prem for now), **Retire** (delete). Most workloads are not Refactor candidates on day one — that is where teams overspend. Sequence by business value, technical risk, and dependencies; do *not* sequence by who shouts the loudest. See [Chapter 12](chapters/12-cloud/index.md) and the [Six Rs Decision Tree MicroSim](sims/six-rs-decision-tree/index.md).

### How should I run an effective requirements interview?

Prepare an **interview guide** with open-ended questions, but be willing to follow the conversation. Ask for **examples and stories** ("walk me through the last time this went wrong") rather than abstractions. Capture verbatim language — the user's words become the user stories. Always ask **"who else should I talk to?"** to surface stakeholders the org chart hides. End with **"what did I miss?"** And — crucially — write up your understanding within 24 hours and circulate it for correction. See [Chapter 10](chapters/10-sad/index.md).

### How should I design an effective dashboard?

Lead with the **decision the dashboard supports**, not the data the dashboard has. A dashboard is a tool for action; if no decision changes when a number changes, that number does not belong on the dashboard. Limit yourself to **3–7 KPIs**. Use **direct comparisons** (this period vs. previous, actual vs. target) to give context. Resist 3D pie charts, dual axes, and rainbow color schemes — they look serious and read badly. See [Chapter 9](chapters/09-bi-and-analytics/index.md).

### How should I respond to a security incident?

Follow the **NIST incident response lifecycle**: **Preparation, Detection and Analysis, Containment, Eradication, Recovery, Post-Incident Activity**. Resist the urge to skip Containment (the natural reaction is to delete the malware, but you also need to preserve evidence and stop the attacker first). Keep a **timeline log** as the incident unfolds. After it is over, run a **blameless postmortem** that focuses on contributing factors, not on individuals. See [Chapter 14](chapters/14-security/index.md).

### How should I structure an incident postmortem?

Include: a **timeline** with timestamps, a **summary of business impact**, a **root cause analysis** (often the **Five Whys** or a fishbone diagram), **contributing factors** (the things that did not cause the incident but made it worse or harder to detect), **detection gaps**, and **prioritized remediations** with owners and dates. Keep it **blameless** — assign the work to systems and processes, not to individuals. The artifact's job is to make this incident not happen again, not to assign blame. See [Chapter 17](chapters/17-itsm/index.md).

### How should I measure AI coding-assistant productivity?

Set a **baseline before the rollout** (cycle time, defect rate, code churn, review time). Track **multiple metrics, not just lines of code or tickets closed**. Watch for **confounders**: review burden, increased churn, regression rates, on-call volume. Set a **stop-loss criterion** in advance — if quality regresses past a defined threshold, the program pauses. And get qualitative input through structured developer surveys; the gut feel of senior engineers usually leads the metrics. See [Chapter 23](chapters/23-ai-productivity/index.md).

### How should I select an Enterprise Knowledge Graph platform?

Evaluate against four dimensions. **Ontology management**: can the platform support evolving, governed ontologies, or are you stuck with whatever you loaded first? **Identity resolution quality**: does the platform expose the entity-resolution pipeline, or hide it? **Query performance**: can the platform handle the multi-hop queries your use cases require, at the data volumes you will see in two years? **Openness**: can you get your graph out — schema and data — without paying ransom? Vendor lock-in for a knowledge graph is especially painful because the graph eventually contains the meaning of everything else. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### How should I prioritize between security controls?

Use a recognized framework — **NIST Cybersecurity Framework (CSF), CIS Controls, or ISO 27001** — as the menu, then prioritize by **risk-reduction-per-dollar**. Start with the controls that prevent or detect the most common attack patterns (phishing, credential reuse, unpatched software, misconfigured cloud storage). Resist the temptation to chase exotic threats while basic hygiene is missing. See [Chapter 14](chapters/14-security/index.md).

### How should I handle vendor model cards and system cards?

Treat them as **the start of due diligence, not the end**. A model card describes intended uses, limitations, training data, and evaluation results; a system card extends that to the application context. Read them carefully for what is *not* said — undisclosed evaluations, narrow benchmark sets, training-data omissions. For high-risk uses, demand additional information (red-team results, incident history, retraining cadence) and document any gaps in your risk register. See [Chapter 20](chapters/20-responsible-ai/index.md) and [Chapter 21](chapters/21-ai-law/index.md).

---

## Advanced Topic Questions

### How does GraphRAG outperform vector-only RAG?

Vector RAG retrieves the top-k chunks most semantically similar to the query and stuffs them into the prompt. That is fine for *flat* lookups but breaks on multi-hop queries ("which customers in regions affected by Supplier A's outage have open orders for products containing components from Supplier A?") because the answer is not in any single chunk — it is in the *connections*. **GraphRAG** retrieves a subgraph: the entities the query mentions, the relationships from them, and the entities those relationships lead to. The model then reasons over a structured context that already encodes the multi-hop joins. On enterprise data, the fidelity gap is large enough that GraphRAG is becoming the default for serious enterprise AI work. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### How would I design an Enterprise Nervous System for retail?

Identify the **external signals** (competitor pricing, supply chain disruptions, weather, social-media sentiment, regulatory filings) and the **internal signals** (inventory, sell-through, returns, foot traffic). Build the **streaming layer** (Kafka or equivalent) and the **enrichment layer** (against the EKG — what products, stores, suppliers, and customers does this signal touch?). Add the **policy layer** (rules-and-AI hybrid: rules for crisp cases, AI for ambiguous ones). Wire **actuators** (price changes, inventory transfers, marketing alerts, ticket creation) and **human-override** at every level above "pure rules." Instrument **latency, ordering, idempotency, and back-pressure** — the four properties an event system has to get right. See [Chapter 25](chapters/25-ens/index.md).

### When should I choose a lakehouse over a knowledge graph?

When the **questions are tabular and aggregational** — sums, averages, time-series, group-bys over largely homogeneous data — a lakehouse is the right answer. When the **questions are about relationships across heterogeneous, evolving entities** — paths, neighborhoods, multi-hop joins, ontology-driven inference — a knowledge graph wins. Many enterprises end up with both: the lakehouse for analytics and ML training, the EKG for the semantic layer the AI applications query. See [Chapter 24](chapters/24-knowledge-graphs/index.md).

### How should I think about post-quantum cryptography?

Today's public-key cryptography (RSA, ECC) is breakable by a sufficiently large quantum computer, which does not exist *yet* but plausibly will within the planning horizon of long-lived data. The threat model is **harvest-now-decrypt-later**: adversaries collecting encrypted data today and decrypting it once quantum hardware arrives. NIST has standardized post-quantum algorithms (ML-KEM, ML-DSA, SLH-DSA). The action item for IS leaders: inventory cryptographic dependencies, identify long-confidentiality-life data, and start planning a hybrid-then-PQ-only migration. See [Chapter 18](chapters/18-hci-and-emerging/index.md).

### How does the EU AI Act differ from the NIST AI RMF?

The **EU AI Act** is **binding law** with conformity-assessment requirements, penalties, and risk-tier-specific obligations. The **NIST AI RMF** is a **voluntary framework** that organizes risk management activities. They are complementary: NIST AI RMF is *how* a U.S. organization can operationalize the kinds of practices the EU AI Act *requires* of high-risk systems. A multinational organization typically uses NIST AI RMF as the internal program and the EU AI Act as the conformance overlay for systems that touch the EU market. See [Chapter 21](chapters/21-ai-law/index.md).

### How do I argue for an EKG investment to an executive audience?

Frame the EKG as **the data layer the AI strategy is going to need anyway**. Quantify the cost of the alternative (every AI project re-doing its own integration, every chatbot grounded on a different source of truth, every analytics question requiring a custom join). Show a **measurable first-year outcome** — typically a single high-leverage use case (customer 360, supplier risk, regulatory exposure) — that proves the EKG carries its weight before the broader investment. Avoid vendor jargon; the executive question is "what business question can I now answer that I could not answer last year?" See [Chapter 25](chapters/25-ens/index.md).

### How does AI change the IS shared-responsibility model?

Three parties now matter, not two. The **model provider** is responsible for the model's safety properties, training-data provenance, and base evaluations. The **application developer** is responsible for the deployed system — prompt engineering, retrieval grounding, output handling, monitoring. The **customer** is responsible for the inputs (what data is allowed in), the use case (what decisions the AI is being trusted with), and the human oversight. Misallocating responsibility — assuming the model provider has already handled fairness in your specific context, for instance — is the AI-era equivalent of misunderstanding the cloud shared-responsibility model. See [Chapter 19](chapters/19-ai-in-is/index.md) and [Chapter 22](chapters/22-ai-security/index.md).

### How do agentic AI systems change the threat model?

An **agentic AI** system can take actions — call APIs, write to databases, send messages — based on its own reasoning over a goal. That changes the blast radius: a prompt-injection attack against an agentic system is not just a bad answer, it is a *bad action*. The standard mitigations: **least-privilege tool access** (the agent can only call the APIs it actually needs), **dry-run modes** for high-impact actions, **human-in-the-loop checkpoints** before irreversible changes, and **strong audit logging** of every decision the agent made and why. The OWASP "excessive agency" risk is the canonical framing. See [Chapter 22](chapters/22-ai-security/index.md).

### How should I think about AI in regulated industries?

Sector-specific rules often pre-date the AI Act and apply to AI by extension. **Healthcare**: HIPAA on PHI plus FDA guidance on software-as-a-medical-device. **Lending**: ECOA and FCRA on adverse-action explanations and disparate-impact testing. **Education**: FERPA on student records plus emerging state AI laws. **Employment**: NYC AEDT, Illinois AI Video Interview Act, and disparate-impact case law on hiring tools. The IS leader's job is to map the proposed AI feature against *both* the cross-cutting AI law (EU AI Act, NIST AI RMF) and the sector-specific rules — and to design the system so the latter does not become a surprise late in deployment. See [Chapter 21](chapters/21-ai-law/index.md).

### What does the AI-native organization actually look like?

A working hypothesis: every operational decision is **sensed** as an event, **enriched** against an Enterprise Knowledge Graph, **evaluated** by a hybrid of rules and AI, and **acted upon** by either an automated actuator or an alerted human — within seconds-to-minutes, not days. Reporting becomes a side effect of the event stream, not a separate batch job. AI is embedded in every function (help desk, development, security, analysis, project management) and governed centrally through a sanctioned-AI program. The data layer is the EKG; the application layer is mostly composed services and AI agents; the human layer is smaller, more senior, and more focused on judgment. The textbook ends here on purpose — this is the architecture students should be ready to argue for in their first job interviews. See [Chapter 25](chapters/25-ens/index.md).

---

!!! mascot-celebration "Iris's Sign-Off"
    <img src="img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates the end of the FAQ">
    You made it to the end of the FAQ! You now have warm answers for ninety of the questions students reliably ask, and the chapter pointers to follow up on every one of them. If you find yourself wishing this list had a question it doesn't, that is a gift — tell us, and we will add it. The textbook gets smarter every time a curious reader asks a question that surprised it.

---

## See Also

- [Course Description](course-description.md) — full scope, audience, and learning outcomes.
- [Chapter Index](chapters/index.md) — table of contents for all 25 chapters.
- [Learning Graph](learning-graph/index.md) — the 580-concept dependency graph.
- [MicroSim Index](sims/index.md) — interactive visualizations referenced throughout the FAQ.
- [Chatbot Training Data](learning-graph/faq-chatbot-training.json) — structured JSON export of this FAQ for RAG integration.
- [FAQ Quality Report](learning-graph/faq-quality-report.md) — metrics, coverage, and recommendations.
