# Quiz: Modern Databases and Lakehouses

Test your fluency across the modern database categories and the warehouse, lake, and lakehouse patterns.

---

#### 1. The acronym OLTP refers to:

<div class="upper-alpha" markdown>
1. Online Library and Text Processing
2. Online Transaction Processing — short, frequent reads and writes that keep the business running
3. Open Logical Table Protocol
4. Offline Long-Term Persistence
</div>

??? question "Show Answer"
    The correct answer is **B**. OLTP (Online Transaction Processing) describes workloads with many short, concurrent reads and writes — the workloads that run the day-to-day business (order entry, banking transactions, inventory updates). OLAP (Online Analytical Processing) describes the opposite workload pattern — large analytical queries over historical data. The two have very different storage and indexing requirements.

    **Concept Tested:** OLTP vs OLAP

---

#### 2. In a star schema, what does the fact table contain?

<div class="upper-alpha" markdown>
1. Numerical measurements (such as sales amounts) and foreign keys to dimension tables
2. Descriptive attributes about customers, products, and dates
3. Only metadata about the database
4. Encrypted historical archives
</div>

??? question "Show Answer"
    The correct answer is **A**. The fact table holds the quantitative measurements of business events (sales amount, units sold, profit) along with foreign keys to surrounding dimension tables that provide descriptive context (which customer, which product, which date). Dimensions are the "by what" columns; facts are the "how much" columns.

    **Concept Tested:** Fact Table

---

#### 3. A "Slowly Changing Dimension" handles which problem?

<div class="upper-alpha" markdown>
1. How to make queries run faster on small dimension tables
2. How to compress dimension tables for cold storage
3. How to track changes to dimension attributes over time, such as a customer changing address
4. How to convert relational tables to JSON documents
</div>

??? question "Show Answer"
    The correct answer is **C**. Slowly Changing Dimensions (SCD) address how to track attribute changes that happen infrequently — a customer moves, a product is reclassified. Type 1 overwrites; Type 2 keeps history with effective dates; Type 3 keeps a limited prior value. Choosing the right SCD type for each attribute is a core dimensional-modeling decision.

    **Concept Tested:** Slowly Changing Dimension

---

#### 4. Which database category is best suited for a use case requiring extremely fast, simple lookups by exact key — for example, a session cache for a high-traffic web application?

<div class="upper-alpha" markdown>
1. Relational database
2. Graph database
3. Key-value store
4. Data warehouse
</div>

??? question "Show Answer"
    The correct answer is **C**. Key-value stores like Redis and DynamoDB excel at extremely fast, simple lookups by an exact key. Session caches, leaderboards, and rate-limiter counters all fit naturally. Relational databases handle richer queries but are slower for pure key lookup; graph databases optimize for relationship traversal; data warehouses optimize for analytical queries.

    **Concept Tested:** Key-Value Store

---

#### 5. A document database like MongoDB is most appropriate when:

<div class="upper-alpha" markdown>
1. The data has a fixed schema enforced rigidly across all rows
2. Queries primarily traverse many-to-many relationships
3. The system requires Serializable isolation across millions of small transactions
4. Data is naturally hierarchical and varies in shape across records, such as product catalogs with category-specific attributes
</div>

??? question "Show Answer"
    The correct answer is **D**. Document databases store records as JSON-like documents, naturally fitting hierarchical data with variable structure — product catalogs with category-specific attributes, content-management systems, user-profile data. Rigid schemas favor relational; many-to-many traversals favor graph; strict isolation across millions of transactions tends toward relational with mature concurrency control.

    **Concept Tested:** Document Database

---

#### 6. The CAP theorem states that a distributed data store can simultaneously guarantee at most two of which three properties?

<div class="upper-alpha" markdown>
1. Concurrency, Auditability, Performance
2. Consistency, Availability, Partition tolerance
3. Compression, Atomicity, Persistence
4. Caching, Aggregation, Pipelining
</div>

??? question "Show Answer"
    The correct answer is **B**. The CAP theorem (Brewer) holds that in the presence of a network partition, a distributed data store must choose between consistency (every read sees the latest write) and availability (every request gets a response). Since partitions are inevitable in real distributed systems, the practical choice is between CP and AP behavior during partitions. The other lists are not the CAP properties.

    **Concept Tested:** CAP Theorem

---

#### 7. A retail company uses a relational database for transactions, a search engine for product search, a cache for sessions, and a graph database for product recommendations. This architectural pattern is called:

<div class="upper-alpha" markdown>
1. Polyglot persistence
2. Database normalization
3. Star schema
4. Two-phase commit
</div>

??? question "Show Answer"
    The correct answer is **A**. Polyglot persistence is the deliberate use of multiple database technologies, each chosen for the workload it serves best. The tradeoff is operational complexity (more systems to run, more integration work) against fit-for-purpose performance and developer experience. Normalization, star schemas, and two-phase commit are unrelated concepts.

    **Concept Tested:** Polyglot Persistence

---

#### 8. What is the most accurate description of a data lakehouse?

<div class="upper-alpha" markdown>
1. A traditional relational warehouse with no support for unstructured data
2. A small subset of a data lake limited to one department's use
3. An architecture that combines the open, low-cost storage of a data lake with the schema, ACID guarantees, and SQL performance traditionally associated with a warehouse
4. A physical building where data engineers work
</div>

??? question "Show Answer"
    The correct answer is **C**. A lakehouse (Delta Lake, Iceberg, Hudi) layers schema, transactions, and SQL performance on top of object-storage data lakes, eliminating the historical split between cheap-but-messy lakes and expensive-but-rigorous warehouses. The result is one system serving both raw and curated data with consistent governance and good query performance.

    **Concept Tested:** Data Lakehouse

---

#### 9. A team needs to store and query connections between millions of users in a social network — friend-of-friend queries, shortest paths, community detection. Which database category is best fit?

<div class="upper-alpha" markdown>
1. Relational database with many JOINs
2. Graph database
3. Key-value store
4. Columnar warehouse
</div>

??? question "Show Answer"
    The correct answer is **B**. Graph databases (Neo4j, Amazon Neptune, TigerGraph) are designed for traversing connected data efficiently — friend-of-friend queries that take many JOINs in a relational system can run in milliseconds in a graph database. Relational tables struggle with deep, variable-depth traversals; key-value stores have no concept of relationships; columnar warehouses optimize for analytical scans, not graph traversals.

    **Concept Tested:** Database Selection

---

#### 10. An analytics team selects Snowflake for a data warehouse over a traditional row-store database. Which property of columnar storage most directly drives this choice?

<div class="upper-alpha" markdown>
1. Columnar storage scans only the columns the query needs and compresses better, dramatically speeding analytical queries that aggregate a few columns over many rows
2. Columnar storage eliminates the need for any SQL knowledge
3. Columnar storage is required for transactional integrity
4. Columnar storage is the only format that supports JSON
</div>

??? question "Show Answer"
    The correct answer is **A**. Columnar storage organizes data by column rather than by row, which means analytical queries that touch a few columns over many rows scan vastly less data and compress far better. This is why columnar systems (Snowflake, Redshift, BigQuery) are dominant for OLAP workloads. Row stores remain better for OLTP. The other options misstate columnar storage's purpose.

    **Concept Tested:** Columnar Storage

---
