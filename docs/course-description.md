---
title: Course Description for Information Systems
description: A detailed course description for an ABET-aligned college-level Information Systems course, including overview, topics covered, and learning objectives in the format of the 2001 Bloom Taxonomy.
quality_score: 96
---

# Information Systems

**Title:** Information Systems

**Target Audience:** College undergraduate students (typically sophomore or junior year) pursuing degrees in Information Systems, Information Technology, Business Analytics, Computer Information Systems, or related computing-and-business disciplines. Suitable for programs seeking ABET Computing Accreditation Commission (CAC) accreditation under the Information Systems program criteria.

**Prerequisites:**

- Introductory programming course (CS1 equivalent) in any modern language (Python, Java, JavaScript, C#, or similar)
- Introductory course in business fundamentals or organizational behavior — recommended
- Familiarity with spreadsheets and basic data manipulation
- Comfort with the command line on at least one operating system (Linux, macOS, or Windows)
- Discrete mathematics or equivalent exposure to sets, logic, and elementary statistics — recommended

## Course Overview

Information systems sit at the seam between people, processes, and technology. Every modern organization — a hospital admitting a patient, a bank approving a loan, a logistics firm routing a truck, a university registering a student — runs on information systems that capture data, transform it into decisions, and propagate the result back into the world. This course gives students a working mental model of how those systems are designed, built, governed, and improved, and how the role of the information systems professional differs from that of a pure software engineer or a pure business analyst.

The course is grounded in the **ABET Computing Accreditation Commission (CAC) 2025–2026 Program Criteria for Information Systems**, which require coverage of: application development; data and information management; networks and telecommunications for business; the role of IS in organizations; project management of IS resources; and security of information assets — all situated within an "environment of an organization" rather than treated as standalone technical topics. Topic depth and sequencing are also aligned with the **ACM/AIS IS2020 curriculum guidelines** for undergraduate programs in Information Systems, ensuring graduates speak the vocabulary that employers, graduate programs, and IS professional societies expect.

A defining feature of this edition is **the integration of artificial intelligence throughout the IS curriculum**. Generative AI, machine learning, and intelligent automation are no longer adjacent topics — they are reshaping every layer of the IS stack, from the help desk that triages tickets, to the developer writing code with an AI pair-programmer, to the security analyst correlating alerts, to the executive interpreting an AI-generated business forecast. The course treats AI both as a *capability to deploy* (how to build, evaluate, and govern AI features in business systems) and as a *force changing the IS profession itself* (how AI is altering productivity, job roles, controls, and risk). Coverage is grounded in current responsible-AI frameworks (NIST AI RMF 1.0, the EU AI Act, ISO/IEC 42001) and current legal-and-ethical guidance, so students graduate able to participate credibly in the AI conversations every IS organization is now having.

The pedagogical approach emphasizes case studies of real organizational IS deployments, hands-on database and application work, business process modeling, and a sequence of capstone-style projects in which students plan, build, and govern an information system end-to-end — including AI-enabled components. Where the textbook touches advanced areas — enterprise architecture, AI governance, data mesh, zero-trust security — it does so to give students a vocabulary for what comes next, not to replace specialized graduate or professional coursework.

## Main Topics Covered

- **The Role of IS in Organizations** — strategic alignment, value chains, IS as competitive advantage, digital transformation, IS governance frameworks (COBIT, ITIL), the CIO/CTO/CDO function, IS ethics and professional responsibility
- **Information Systems Architecture** — application portfolios, three-tier and n-tier architectures, enterprise architecture frameworks (TOGAF, Zachman), integration patterns, service-oriented and microservice architectures, API economy
- **Application Development for IS** — software development life cycle, requirements elicitation, agile and waterfall methods, low-code/no-code platforms, business application frameworks, build-vs-buy-vs-SaaS decisions
- **Data and Information Management** — relational data modeling, normalization, SQL, transaction processing (ACID), data warehousing, dimensional modeling, ETL/ELT, master data management, data quality, data lakes and lakehouses, and the major database categories the modern IS professional must select among: (1) **Relational (SQL)** databases for transactional workloads, (2) **Analytical (OLAP)** databases for warehousing and business intelligence, (3) **Key-Value Stores** for caches, sessions, and high-throughput simple lookups, (4) **Column-Family Stores** for wide, sparse, time-series and large-scale operational workloads, (5) **Graph Databases** for relationship-heavy domains and knowledge-graph workloads, (6) **Document Databases (JSON and XML)** for semi-structured and content-oriented applications — including the workload characteristics, consistency tradeoffs, and integration patterns that drive selection between them
- **Business Intelligence and Analytics** — descriptive, diagnostic, predictive, and prescriptive analytics, dashboards, KPIs, OLAP, self-service BI, the role of analytics in decision support
- **Enterprise Systems** — ERP, CRM, SCM, HRIS, the integration challenges of packaged enterprise software, customization vs. configuration tradeoffs
- **Networks and Telecommunications for Business** — LAN/WAN concepts at a managerial level, cloud connectivity, VPNs, SD-WAN, telecom procurement, capacity planning, service-level agreements
- **Cloud Computing and Infrastructure** — IaaS, PaaS, SaaS, public/private/hybrid cloud, cost models (CapEx vs OpEx), cloud migration patterns, vendor lock-in, FinOps
- **Security of Information Assets** — confidentiality, integrity, availability, identity and access management, authentication and authorization, encryption in transit and at rest, security governance, NIST CSF, ISO 27001, incident response
- **Privacy, Compliance, and Regulation** — GDPR, CCPA/CPRA, HIPAA, SOX, PCI-DSS, data residency, retention and disposal, privacy by design, data subject rights
- **IS Project Management** — project charters, scope/time/cost triangle, stakeholder management, work breakdown structures, agile project management (Scrum, Kanban, SAFe), risk registers, change management
- **Business Process Management** — process modeling (BPMN), process re-engineering, workflow automation, robotic process automation (RPA), continuous improvement (Lean, Six Sigma)
- **Systems Analysis and Design** — feasibility studies, use cases, user stories, UML for IS, prototyping, joint application design, requirements traceability
- **Human-Computer Interaction for IS** — usability principles, accessibility (WCAG), user research methods for enterprise tools, interface design patterns for data-heavy applications
- **IT Service Management and Operations** — ITIL service lifecycle, incident/problem/change management, configuration management databases, monitoring and observability for business systems, on-call practices
- **AI in Information Systems** — the AI-in-IS landscape (predictive ML, generative AI, agentic systems, retrieval-augmented generation), AI capabilities embedded in ERP/CRM/ITSM platforms, the AI value chain (data → model → application → outcome), build-vs-buy-vs-API decisions for AI features, the role of the IS organization in selecting and integrating AI services
- **Responsible and Ethical Use of AI** — NIST AI Risk Management Framework (AI RMF 1.0), ISO/IEC 42001 AI management systems, fairness and bias auditing, transparency and explainability, human oversight and human-in-the-loop design, AI incident management, environmental and labor impacts, organizational AI policies and acceptable-use standards
- **AI Law, Regulation, and Compliance** — the EU AI Act and risk tiering, US executive orders and emerging federal/state AI law (including Colorado AI Act and NYC AEDT), sector-specific rules (HIPAA + AI in healthcare, ECOA/FCRA + AI in lending, FERPA + AI in education), copyright and training-data provenance, AI in contracts and procurement, vendor model cards and system cards, cross-border data transfer issues for AI workloads
- **AI and Information Security** — AI-specific threats (prompt injection, jailbreaks, model and data exfiltration, training-data poisoning, model inversion, membership inference), the OWASP Top 10 for LLM Applications, MITRE ATLAS adversarial-ML threat model, secure AI software development lifecycle, red-teaming generative AI, defensive uses of AI (alert triage, phishing detection, anomaly detection, code review), shadow AI and data leakage through public AI tools
- **AI Productivity Impact on IS Operations** — AI in the help desk (intelligent ticket routing, virtual agents, knowledge-base copilots, deflection metrics), AI in application development (code completion, test generation, code review, refactoring, documentation, the changing developer workflow), AI in IT operations (AIOps, intelligent observability, automated remediation, change-risk prediction), AI in business analysis and project management (requirements drafting, status synthesis, risk identification), measuring productivity uplift, change management for AI-augmented teams
- **Knowledge Graphs and the Enterprise Nervous System** — labeled property graph data models, ontologies and taxonomies, schema.org and lightweight domain vocabularies, building small domain knowledge graphs from structured and unstructured sources, entity resolution and identity reconciliation, graph queries (Cypher, GQL), graph databases (Neo4j, Amazon Neptune, TigerGraph, Memgraph), the rise of **Enterprise Knowledge Graphs (EKGs)** as the semantic backbone that unifies siloed application data into a shared "single source of meaning," vector + graph (GraphRAG) patterns for grounding generative AI in trustworthy organizational knowledge, the **Enterprise Nervous System (ENS)** — an event-driven, graph-backed architecture that senses external signals (competitor product launches, supply chain disruptions, regulatory changes, customer sentiment shifts, social media trends) and propagates them through the organization in real time to trigger automated responses or escalate to human decision-makers, complex event processing, streaming platforms (Kafka, Flink, Pulsar), the role of the EKG and ENS in AI-ready enterprises
- **Emerging Topics** — intelligent automation and agentic workflows, sustainable IT, data mesh, zero-trust architectures, post-quantum readiness

## Topics Not Covered

This is an undergraduate ABET-aligned foundation course in Information Systems. The following adjacent topics are explicitly **out of scope** and belong in dedicated follow-on courses:

- **Operating system internals and computer architecture** — kernel design, virtual memory, instruction set design (covered in Computer Science / Computer Engineering programs)
- **Compiler construction and programming language theory** — lexers, parsers, type systems, formal semantics (CS electives)
- **Advanced algorithms and complexity theory** — NP-completeness proofs, advanced data structures, algorithmic game theory
- **Networking at the protocol-engineering level** — packet-level protocol design, BGP convergence, congestion control internals (covered in a dedicated Networking and Communication course)
- **Cryptanalysis and protocol design** — algorithm design, formal proofs of cryptographic protocols (dedicated cryptography course)
- **Machine learning model development** — algorithm selection, hyperparameter tuning, training infrastructure, foundation-model pretraining, fine-tuning math (covered in a dedicated ML/Data Science course; this course addresses ML and AI *as deployed and governed in business systems*, not as model-engineering disciplines)
- **Hardware-level cybersecurity offense** — exploit development, reverse engineering, red-teaming engagements (covered in a dedicated Cybersecurity program)
- **Embedded systems and IoT firmware development** — real-time operating systems, microcontroller programming
- **Pure managerial accounting and corporate finance** — capital budgeting math, GAAP/IFRS reporting (covered in business school core courses; this course uses these concepts but does not teach them)

## Learning Outcomes

After completing this course, students will be able to:

### Remember
*Retrieving, recognizing, and recalling relevant knowledge from long-term memory.*

- Recall the ABET CAC Information Systems program criteria and identify each criterion's curricular topic area.
- List the major categories of enterprise information systems (ERP, CRM, SCM, HRIS, BI) and a representative product for each.
- Recognize the standard phases of a systems development life cycle (planning, analysis, design, implementation, maintenance).
- Identify the components of a relational database schema (table, row, column, primary key, foreign key, constraint, index).
- Recall the CIA triad (confidentiality, integrity, availability) and the AAA framework (authentication, authorization, accounting).
- List the five service models and four deployment models of cloud computing as defined by NIST SP 800-145.
- Recognize the major project management process groups (initiating, planning, executing, monitoring/controlling, closing) and the Scrum events (sprint, planning, review, retrospective, daily scrum).
- State the key roles in an information systems organization (CIO, CDO, CISO, IS project manager, business analyst, data steward, enterprise architect).
- Identify the major regulatory regimes that shape IS practice (GDPR, HIPAA, SOX, PCI-DSS, CCPA).
- Recall the four functions of the NIST AI Risk Management Framework (Govern, Map, Measure, Manage) and the risk tiers of the EU AI Act (unacceptable, high, limited, minimal).
- Identify common AI-specific threats (prompt injection, training-data poisoning, model inversion, membership inference, model exfiltration) and the frameworks that catalog them (OWASP LLM Top 10, MITRE ATLAS).
- Recognize the major categories of AI capability deployed in business systems (predictive ML, generative AI, retrieval-augmented generation, agentic systems) and a representative use case for each.
- Recall the labeled property graph data model and the query languages used to access it (Cypher, GQL).
- Identify the core components of an Enterprise Knowledge Graph (ontology, instance data, identity layer, mappings to source systems, query and reasoning layer) and a representative graph database for each model.
- Recognize the building blocks of an Enterprise Nervous System (event sources, streaming platform, event broker, knowledge graph, rule/policy engine, response actuators) and the role of each.

### Understand
*Constructing meaning from instructional messages, including oral, written, and graphic communication.*

- Explain how an information system creates business value, distinguishing between automating, informating, and transforming a process.
- Describe how the three-tier architecture separates presentation, application, and data concerns and why this separation matters operationally.
- Explain the differences between OLTP and OLAP workloads and why organizations typically run both.
- Describe how data flows through an ETL or ELT pipeline from source systems to a warehouse to a dashboard.
- Summarize the difference between IaaS, PaaS, and SaaS in terms of which responsibilities the provider owns versus the customer.
- Explain how role-based access control, attribute-based access control, and least privilege combine to protect information assets.
- Describe how a business process model (BPMN) captures actors, activities, gateways, and events for a real organizational workflow.
- Explain the tradeoffs between buying packaged enterprise software, building custom software, and adopting a SaaS service.
- Summarize how an IS project is governed by a charter, scope statement, schedule, budget, risk register, and change control process.
- Explain how privacy-by-design principles influence the architecture and data model of a new information system.
- Describe how a generative AI feature flows through a business system, from user prompt through retrieval, model invocation, guardrails, and audit logging.
- Summarize the responsible-AI principles (fairness, accountability, transparency, safety, privacy, human oversight) and how each translates into a control or design decision.
- Explain how AI tools are reshaping the help desk and software development workflows, including which tasks they accelerate, which they replace, and which they amplify rather than replace.
- Describe how legal obligations under the EU AI Act, HIPAA, ECOA/FCRA, and state AI laws differ in their treatment of automated decision-making and what that means for system design.
- Explain how an ontology differs from a relational schema and why graph data models excel at integrating heterogeneous, evolving organizational data.
- Describe how an Enterprise Knowledge Graph unifies data from ERP, CRM, document repositories, and external sources into a shared semantic layer that both humans and AI agents can query.
- Explain how GraphRAG (graph-augmented retrieval) improves the trustworthiness of generative AI answers compared with vector-only RAG, and where each is appropriate.
- Describe the Enterprise Nervous System as an event-driven architecture: how external signals (competitor pricing changes, supply disruptions, regulatory updates, sentiment shifts) are sensed, enriched against the EKG, evaluated by rules or AI, and routed to automated or human responders in real time.
- Summarize the role of streaming platforms (Kafka, Flink, Pulsar) and complex event processing in enabling near-real-time organizational reflexes.

### Apply
*Carrying out or using a procedure in a given situation.*

- Design a normalized relational schema (3NF) for a small business domain and implement it in a relational database.
- Write SQL queries — including joins, aggregations, subqueries, and window functions — to answer realistic business questions against a multi-table schema.
- Build a small full-stack business application (browser front end, application tier, database) that supports authenticated CRUD operations.
- Construct a BPMN diagram for an end-to-end business process (e.g., procure-to-pay, hire-to-retire, order-to-cash) and identify automation opportunities.
- Develop a project charter and work breakdown structure for a small IS project, including milestones and a risk register.
- Create a dimensional (star-schema) data warehouse design for a given operational schema and load it with a simple ETL job.
- Build a dashboard in a BI tool (Power BI, Tableau, or Looker Studio) that exposes three to five KPIs against a sample dataset.
- Apply a threat-modeling method (STRIDE or PASTA) to a small information system and document the resulting controls.
- Configure identity and access management for a small cloud deployment using IAM roles, groups, and policies.
- Conduct a structured requirements interview and translate the results into user stories with acceptance criteria.
- Build a small retrieval-augmented generation (RAG) prototype that answers questions against a defined organizational document set, with citations and a refusal path for out-of-scope questions.
- Apply a responsible-AI checklist (drawn from NIST AI RMF or ISO/IEC 42001) to a proposed AI feature and document the mitigations selected for each identified risk.
- Configure an AI acceptable-use policy and the supporting technical controls (data loss prevention, prompt logging, sanctioned-model list) for a small organization.
- Use an AI coding assistant to implement a small feature and produce a written reflection on which suggestions were accepted, rejected, and why.
- Threat-model a generative AI feature against the OWASP LLM Top 10 and propose mitigations for the three highest-priority risks.
- Build a small domain knowledge graph (50-200 entities) from a mix of structured and unstructured sources, defining a lightweight ontology, loading it into a graph database, and answering business questions with Cypher.
- Implement an entity-resolution pass that reconciles duplicate records of the same real-world entity (customer, product, supplier) across two source systems and integrates them into the knowledge graph.
- Construct a GraphRAG prototype that grounds an LLM in a small Enterprise Knowledge Graph and demonstrates higher answer fidelity than a vector-only RAG baseline on the same questions.
- Wire a minimal Enterprise Nervous System pipeline that ingests an external event stream (e.g., a simulated competitor price feed or a public news API), enriches each event against a knowledge graph, applies a rule, and triggers a downstream action (notification, ticket creation, dashboard update).

### Analyze
*Breaking material into constituent parts and determining how the parts relate to one another and to an overall structure or purpose.*

- Decompose an existing organization's application portfolio into core, supporting, and innovation systems and identify integration risks.
- Analyze a poorly performing business process to identify bottlenecks, manual handoffs, and rework loops, and quantify their impact.
- Examine a database schema for normalization defects, missing constraints, and indexing opportunities.
- Differentiate the responsibilities of customer and cloud provider under each cloud service model in the shared-responsibility model.
- Analyze an information security incident and trace it through the phases of the NIST incident response framework (preparation, detection, containment, eradication, recovery, lessons learned).
- Decompose a vendor's SaaS contract into its functional, operational, security, and exit-strategy components.
- Compare on-premises, public cloud, and hybrid deployments for a given workload across cost, control, latency, compliance, and resilience dimensions.
- Examine a project that ran over schedule or budget and attribute the variance to scope, estimation, dependency, or change-management causes.
- Analyze a privacy impact assessment for a new system and identify the highest-risk data flows.
- Decompose an AI-augmented help desk workflow and quantify the effect of AI assistance on first-contact resolution, average handle time, and ticket deflection.
- Analyze a published AI incident (e.g., an LLM data leak, a biased credit-decision model, an autonomous-agent failure) using the NIST AI RMF lens and identify which controls were absent.
- Examine an organization's developer productivity data before and after introducing an AI coding assistant and separate genuine throughput gains from confounders (review burden, defect rates, code churn).
- Differentiate the responsibilities of the customer, the model provider, and the application developer under the AI shared-responsibility model for a SaaS LLM feature.
- Decompose a proposed Enterprise Knowledge Graph initiative into ontology design, source-system mapping, identity reconciliation, query layer, and governance components, and identify the highest-risk component.
- Analyze an event-driven Enterprise Nervous System pipeline for latency, ordering, idempotency, and back-pressure characteristics, and trace where a single external event becomes an organizational response.
- Compare a relational data warehouse, a data lakehouse, and an Enterprise Knowledge Graph for a given organizational integration problem, and identify the workload characteristics that favor each.

### Evaluate
*Making judgments based on criteria and standards through checking and critiquing.*

- Critique a proposed information system architecture against criteria for scalability, security, maintainability, total cost of ownership, and strategic alignment.
- Evaluate a build-vs-buy-vs-SaaS decision for a given business need and defend the recommendation with quantified tradeoffs.
- Judge whether a vendor's data processing addendum adequately addresses an organization's regulatory obligations.
- Assess the security posture of a small organization against a recognized framework (NIST CSF, ISO 27001, CIS Controls) and prioritize remediations.
- Compare two competing project management approaches (waterfall, Scrum, Kanban, SAFe) for a specific organizational context and defend the choice.
- Evaluate a BI dashboard against principles of effective data visualization and decision support, identifying misleading or low-value elements.
- Judge whether a proposed AI/ML feature in a business system meets emerging standards for transparency, fairness, and human oversight.
- Critique a data governance program against the dimensions of stewardship, quality, lineage, access, and lifecycle management.
- Assess the readiness of an organization for a cloud migration and recommend a sequencing strategy.
- Judge whether a proposed AI feature is suitable for full automation, human-in-the-loop oversight, or human-only decision-making, citing the EU AI Act risk tiers and the cost of an incorrect decision.
- Evaluate a vendor's model card, system card, and AI data processing addendum for completeness against NIST AI RMF and ISO/IEC 42001 expectations.
- Critique an organization's "shadow AI" exposure and recommend a sanctioned-AI program that balances productivity, security, and compliance.
- Evaluate competing AI productivity claims (for help desk, application development, or analytics) for methodological soundness, baseline integrity, and generalizability beyond the vendor's pilot.
- Judge whether a given organizational integration problem is best solved with a relational warehouse, a lakehouse, or an Enterprise Knowledge Graph, citing data heterogeneity, query patterns, and governance needs.
- Evaluate a vendor's Enterprise Knowledge Graph platform against criteria for ontology management, identity resolution quality, query performance, and openness (avoidance of vendor lock-in).
- Assess an organization's readiness for an Enterprise Nervous System initiative by examining its event sources, latency tolerances, decision-rights structure, and capacity to act on real-time signals without overwhelming staff.

### Create
*Putting elements together to form a coherent or functional whole; reorganizing elements into a new pattern or structure.*

- **Capstone — Design and build a small enterprise application** with authenticated users, role-based access, a normalized database, an audit log, and a deployed front end, accompanied by user and administrator documentation.
- **Capstone — Author an enterprise architecture proposal** for a fictional mid-sized organization, covering application portfolio, integration strategy, cloud posture, security model, and a three-year roadmap with budget estimates.
- **Capstone — Build an end-to-end analytics pipeline** that ingests data from at least two source systems, models it in a star schema, transforms it with an ETL/ELT tool, and exposes KPIs through a self-service dashboard.
- **Capstone — Produce an IS project plan** for a realistic transformation initiative, including charter, stakeholder map, work breakdown structure, schedule, risk register, communications plan, and change management strategy.
- **Capstone — Construct an information security program** for a small organization, including policies, an asset inventory, a control mapping to NIST CSF, an IAM design, an incident response runbook, and a tabletop exercise.
- Design a data governance framework for a chosen organization, including stewardship roles, data quality metrics, lineage tracking, and policy lifecycle.
- Develop a business case memo recommending the adoption (or rejection) of a generative AI capability in an existing business process, including risk and ROI analysis.
- Produce a written incident postmortem for a simulated IS outage that traces root cause, contributing factors, detection gaps, business impact, and prioritized remediations.
- Synthesize a digital transformation strategy for a fictional traditional firm entering a digital-first competitive landscape, integrating people, process, and technology dimensions.
- **Capstone — Design an AI-augmented help desk** for a fictional mid-sized organization, including intelligent ticket routing, an LLM-backed knowledge-base copilot, deflection metrics, escalation paths to humans, an AI acceptable-use policy, and a measurement plan for productivity and satisfaction.
- **Capstone — Build a responsible-AI program** for a fictional organization, including an AI inventory, a risk-tiering process aligned to the EU AI Act, a NIST AI RMF control mapping, an AI incident response runbook, a model-card template, and a sanctioned-model catalog.
- Author a legal-and-ethical brief that compares how a single proposed AI feature (e.g., automated resume screening, AI-assisted clinical triage, AI loan adjudication) is treated under at least three distinct regulatory regimes, and recommends a deployment posture.
- Construct a measurement plan for an AI coding assistant rollout that defines baselines, productivity metrics, quality guardrails, and a stop-loss criterion for rolling back the program if quality regresses.
- **Capstone — Build a small Enterprise Knowledge Graph** for a fictional organization that integrates at least three source systems (e.g., a CRM, a product catalog, and a public dataset), defines a domain ontology, performs entity resolution, exposes a Cypher query endpoint, and includes a GraphRAG-powered natural-language interface.
- **Capstone — Design an Enterprise Nervous System** for a chosen industry (retail, supply chain, financial services, healthcare) that monitors a defined set of external signals (competitor product launches, commodity price moves, regulatory filings, social media sentiment), enriches them against an Enterprise Knowledge Graph, evaluates them with a rules-and-AI hybrid policy layer, and routes responses to the right humans or automated actuators — including the governance, observability, and human-override design.
- Author a strategy memo for an executive audience arguing whether a chosen organization should invest in an Enterprise Knowledge Graph as the foundation of its AI program, including build-vs-buy options, sequencing, and a measurable first-year outcome.

## Course Importance and Relevance

Information systems are the connective tissue of the modern organization. Whether a graduate enters consulting, corporate IT, healthcare, finance, government, or a high-growth technology firm, the work involves shaping how data flows between people and systems to produce decisions and outcomes. ABET-accredited Information Systems programs identify a small set of topic areas every IS graduate must encounter — application development, data management, networks and telecommunications, security, project management, and the organizational role of IS — because graduates without that foundation cannot function as the technology-fluent business partners their employers need.

This course also serves as a critical gateway to specialization. Students drawn toward data and analytics will build on it in dedicated database, data warehousing, and machine learning courses. Students drawn toward cybersecurity, IT audit, or governance, risk, and compliance (GRC) will rely on it when they enter security electives and professional certifications (CISSP, CISA, CISM). Students drawn toward product management or technology consulting will recognize the same architectural and project-management vocabulary in their first jobs.

By grounding the curriculum in the ABET CAC Information Systems program criteria and aligning topic depth with the ACM/AIS IS2020 guidelines, the course produces graduates whose foundation is recognized by employers, by graduate IS and MBA programs, and by professional bodies such as AIS, ISACA, and PMI. The hands-on labs, case studies, and capstone projects give students artifacts they can show in interviews — schemas, dashboards, project plans, security programs, AI governance documents, RAG prototypes — and a working understanding that survives long after the final exam.

The AI thread running through the course is deliberate. Every IS function — help desk, application development, data management, security operations, project management, executive decision support — is being reshaped by AI on a timeline measured in quarters, not years. A graduate who can talk credibly about the EU AI Act, threat-model a generative AI feature against the OWASP LLM Top 10, design a sanctioned-AI program, and measure the productivity impact of an AI coding assistant is materially more employable than one who learned IS as it existed in 2019. This course treats AI literacy not as an elective add-on but as a load-bearing competency of the modern IS professional.

## Disclaimer

This course is aligned with the ABET CAC Information Systems program criteria and the ACM/AIS IS2020 curriculum guidelines but is not endorsed by ABET, ACM, or AIS.
