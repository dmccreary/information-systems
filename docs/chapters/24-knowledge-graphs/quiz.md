# Quiz: Knowledge Graphs and the EKG

Test your understanding of property graphs, ontologies, the Enterprise Knowledge Graph, and GraphRAG.

---

#### 1. The labeled property graph model represents data as:

<div class="upper-alpha" markdown>
1. Rows and columns in tables, joined by foreign keys
2. Documents nested inside other documents
3. Nodes (with labels and properties) connected by edges (with types and properties)
4. Bitmap images stored in a hash table
</div>

??? question "Show Answer"
    The correct answer is **C**. The property graph model — used by Neo4j, Memgraph, TigerGraph, Amazon Neptune (in property-graph mode) — represents entities as nodes with labels and key-value properties, and relationships as directed edges with types and properties. The other options describe relational, document, and image storage respectively.

    **Concept Tested:** Property Graph Model

---

#### 2. An ontology in IS contexts is best characterized as:

<div class="upper-alpha" markdown>
1. A philosophy department's syllabus
2. The set of physical servers in a data center
3. A type of password policy
4. A formal model of the entities, relationships, and rules in a domain — typically expressed in a standard like RDF/OWL or as a graph schema
</div>

??? question "Show Answer"
    The correct answer is **D**. An ontology formally defines the concepts and relationships of a domain — what counts as a "Customer," how it relates to "Account," what constraints apply. Compared to a taxonomy (which is a hierarchical classification), an ontology is richer, supporting reasoning and integration across systems. The other options misread the term.

    **Concept Tested:** Ontology

---

#### 3. Cypher is best characterized as:

<div class="upper-alpha" markdown>
1. A specific encryption algorithm
2. A declarative query language for graph databases, originally created by Neo4j and now being standardized as part of the GQL effort
3. A natural-language interface to ChatGPT
4. A spreadsheet macro language
</div>

??? question "Show Answer"
    The correct answer is **B**. Cypher uses ASCII-art-like patterns (e.g., `(p:Person)-[:WORKS_AT]->(c:Company)`) to express graph queries declaratively. It is widely used and influenced the new ISO GQL standard. It is not encryption (despite the name), a chat interface, or a spreadsheet language.

    **Concept Tested:** Cypher Query Language

---

#### 4. Entity resolution in the context of an EKG primarily addresses the problem of:

<div class="upper-alpha" markdown>
1. Resolving DNS names to IP addresses
2. Resolving disputes among employees
3. Determining whether two records (in the same or different sources) refer to the same real-world entity, and merging or linking them appropriately
4. Compressing data files
</div>

??? question "Show Answer"
    The correct answer is **C**. Entity resolution (sometimes called identity reconciliation or record linkage) decides when "John Smith" in CRM and "J. Smith" in billing are the same person, and when they are not. It is foundational to building any EKG that unifies data across systems. The other options misread the concept.

    **Concept Tested:** Entity Resolution

---

#### 5. The Enterprise Knowledge Graph is best characterized in the chapter as:

<div class="upper-alpha" markdown>
1. A replacement for the relational data warehouse
2. A specific cloud service
3. A semantic layer that unifies entities, relationships, and meaning across siloed application data — providing a "single source of meaning" that humans and AI agents can both query
4. A backup of the corporate intranet
</div>

??? question "Show Answer"
    The correct answer is **C**. The EKG is the semantic backbone of the AI-ready enterprise — unifying entities (customers, products, suppliers), their relationships, and the rules that govern them across many source systems. It does not replace the warehouse; it complements it by providing meaning and connectivity that the warehouse's tables alone cannot express.

    **Concept Tested:** Enterprise Knowledge Graph

---

#### 6. GraphRAG differs from standard vector-based RAG primarily in that:

<div class="upper-alpha" markdown>
1. GraphRAG is illegal under GDPR
2. GraphRAG retrieves relevant subgraphs (entities and their relationships) from a knowledge graph to ground LLM responses in connected, structured knowledge — capturing relationships that pure vector similarity cannot
3. GraphRAG runs only on quantum computers
4. GraphRAG and vector RAG are identical
</div>

??? question "Show Answer"
    The correct answer is **B**. GraphRAG augments or replaces vector-only retrieval by traversing a knowledge graph to bring relationships, multi-hop context, and structured facts into the prompt. Many production systems combine vector and graph retrieval (the "vector and graph hybrid"). The other options misstate the concept.

    **Concept Tested:** GraphRAG

---

#### 7. A team needs to build an EKG from a mix of relational systems and unstructured documents. Which combination of techniques most directly fits the chapter's framing of KG construction?

<div class="upper-alpha" markdown>
1. Hand-typing every node and edge in a spreadsheet
2. Asking a single junior analyst to do it overnight
3. Skipping the ontology and just dumping JSON
4. ETL/ELT pipelines from structured sources, NLP-based extraction (named entity recognition, relation extraction, ideally LLM-assisted) from unstructured text, schema and ontology design, entity resolution, lineage capture, and ongoing curation
</div>

??? question "Show Answer"
    The correct answer is **D**. Realistic KG construction blends structured ETL/ELT, NLP-based extraction (increasingly LLM-assisted) for unstructured text, schema/ontology design that anchors meaning, entity resolution to merge duplicates, lineage capture, and continuous curation. Manual entry, single-handed creation, and schemaless dumps are all anti-patterns.

    **Concept Tested:** KG Construction

---

#### 8. A retail company computes "shortest path" between two customers in its EKG to surface non-obvious connections (shared address, employer, household). This is an example of:

<div class="upper-alpha" markdown>
1. A standard SQL aggregation
2. A graph algorithm — graphs make path-based queries efficient where relational joins struggle
3. An OLAP cube operation
4. A regulatory requirement under SOX
</div>

??? question "Show Answer"
    The correct answer is **B**. Graph algorithms (shortest path, community detection, centrality) operate naturally on graph representations and surface relational structure that is awkward or expensive to express in SQL. Many fraud, recommendation, and KYC use cases lean on these algorithms. The other options misread the concept.

    **Concept Tested:** Graph Algorithm

---

#### 9. An organization is debating whether to invest in an EKG. The CFO asks for the strongest argument that the EKG is worth the cost. Evaluating the chapter's framing, which is the most defensible answer?

<div class="upper-alpha" markdown>
1. The EKG produces a single source of meaning across siloed data, dramatically improves LLM grounding via GraphRAG, accelerates entity resolution and analytics across domains, and lays the semantic foundation for the Enterprise Nervous System
2. The EKG eliminates the need for any other data infrastructure
3. The EKG immediately replaces all human analysts
4. The EKG has no measurable benefits
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's strongest argument combines several leverage points: a single source of meaning, better AI grounding, accelerated entity resolution and cross-domain analytics, and the semantic substrate for the ENS. The case is real but requires honest scoping — overpromising "EKG replaces everything" or denying any benefit are both indefensible.

    **Concept Tested:** Single Source of Meaning

---

#### 10. A team is asked to design a vector + graph hybrid retrieval architecture for an enterprise assistant. Designing this from the chapter's framing, the most appropriate combination is:

<div class="upper-alpha" markdown>
1. Use vector search to find candidate documents/passages by semantic similarity, then traverse the knowledge graph from those candidates to enrich with related entities and relationships, and feed both into the LLM with provenance
2. Use only one technique for everything
3. Skip retrieval entirely and trust the LLM's parametric memory
4. Run the LLM with no system prompt
</div>

??? question "Show Answer"
    The correct answer is **A**. The vector-plus-graph hybrid uses each technique where it shines: vectors for semantic similarity over text, graphs for explicit relationships and structured facts. Combining them with provenance gives the LLM grounded, traceable context. Single-technique-only or no-retrieval approaches give up the most reliable defense against hallucination on factual queries.

    **Concept Tested:** Vector and Graph Hybrid

---
