---
title: 'Data Management Foundations: Modeling, SQL, and Transactions'
description: The relational data foundation every IS professional needs — conceptual to physical modeling, ER diagrams, normalization, SQL from SELECT to window functions, and the transaction guarantees that keep data trustworthy.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# Data Management Foundations: Modeling, SQL, and Transactions

## Summary

Develops the relational data foundation: conceptual/logical/physical modeling, ER diagrams, normalization, SQL (joins, subqueries, window functions, stored procedures), transactions, ACID, and isolation.

**Role in the course:** Give students the working SQL and modeling skills the rest of the book — and the rest of their career — assumes.

## Concepts Covered

This chapter covers the following 30 concepts from the learning graph:

1. Data Modeling
2. Conceptual Data Model
3. Logical Data Model
4. Physical Data Model
5. Entity Relationship Diagram
6. Entity
7. Attribute
8. Relationship
9. Cardinality
10. Primary Key
11. Foreign Key
12. Database Index
13. Database Constraint
14. Normalization
15. First Normal Form
16. Second Normal Form
17. Third Normal Form
18. Denormalization
19. SQL Language
20. SELECT Statement
21. JOIN Operation
22. Subquery
23. Window Function
24. Stored Procedure
25. Database View
26. Transaction
27. ACID Properties
28. Isolation Level
29. Concurrency Control
30. Database Migration

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Information Systems](../01-foundations/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 6. The previous chapter ended with a question: how should we model, store, and trust the data that every process is shoveling around? This chapter answers it. By the end you will be able to draw a clean entity-relationship diagram, defend a normalization choice in a meeting, write a SQL query that does something genuinely useful (joins, subqueries, window functions — the works), and explain to a skeptical CFO why ACID transactions are the reason their bank balance is not occasionally off by a few thousand dollars. Half the IS professionals in the world cannot do all four of those things. After this chapter, you will be in the half that can.

## Why Data Modeling Is the Highest-Leverage Activity in IS

Every information system is, eventually, a data system. The application is the front door, the workflow is the hallway, but the data is the house. And the most consequential decisions you make about a data system are the ones you make *before you write any code* — the decisions about what entities exist in the world your system models, what attributes they carry, and how they relate to each other. Those decisions are the **data model**, and they are the highest-leverage decisions in the entire IS toolbox.

**Data Modeling** is the disciplined activity of designing the structure of a database before it is built — naming the things the system must remember, the facts it must record about each thing, and the connections among them. A good data model is forgiving: future requirements that nobody anticipated can usually be added without restructuring the foundation. A bad data model is unforgiving: every new requirement collides with the original mistakes, and every "small change" turns into a six-month migration. The cost of a bad data model is paid every day for years; the cost of a good data model is paid once, up front. This is one of the few places in software where doing the work carefully really does compound.

The discipline traditionally proceeds in three layers, each more concrete than the last: conceptual, logical, and physical. Skipping a layer is technically possible — junior developers do it all the time — and it is almost always a mistake.

### Conceptual, Logical, and Physical: The Three Layers

A **Conceptual Data Model** is the highest-altitude view: a picture of the *things* the business cares about and the relationships among them, in language a business stakeholder can read without an engineering degree. No data types, no keys, no tables — just nouns and verbs. *A Customer places Orders. An Order contains Products. A Product is supplied by a Supplier.* The conceptual model is the artifact you bring to the conference room to argue with the business about whether you have correctly understood their world. If the business cannot read it, it is too detailed to be conceptual.

A **Logical Data Model** is the middle layer: the conceptual model translated into the language of relational structure, but still independent of any specific database product. Entities become tables (in spirit), attributes get data types in the abstract (string, integer, date), keys are identified, relationships are made explicit with cardinalities. The logical model is what a data architect hands to a database engineer and says, "build this." Crucially, the logical model still doesn't care whether you are using PostgreSQL or Oracle or SQL Server — it captures *what* must be stored, not *how* the storage will be implemented.

A **Physical Data Model** is the ground-level layer: the logical model rendered in the dialect of a specific database engine, with concrete data types (`VARCHAR(255)` versus `TEXT`, `BIGINT` versus `NUMERIC(19,0)`), index definitions, partitioning strategies, tablespaces, storage engines, and any vendor-specific tuning. Two organizations with identical logical models can have radically different physical models because their query patterns, hardware, and budgets differ. The physical model is where the engineer's craft shows up.

| Layer       | Audience              | Concerns                                | Example artifact                       |
|-------------|-----------------------|-----------------------------------------|----------------------------------------|
| Conceptual  | Business stakeholders | What entities exist, what they relate to| ER sketch with nouns and verbs         |
| Logical     | Architects, engineers | Tables, columns, keys, cardinalities    | Normalized ERD with abstract types     |
| Physical    | DBAs, engineers       | Vendor types, indexes, storage tuning   | DDL script for a specific engine       |

The systems-thinking insight here is that each layer is a different *audience contract*. A conceptual model that argues over `VARCHAR(255)` versus `TEXT` has lost its audience. A physical model that pretends it can stay vendor-neutral has lost its purpose. The reason to keep the layers distinct is that they protect you from the wrong conversation at the wrong altitude.

## Entity-Relationship Diagrams: The Map of the World

The standard notation for expressing a data model — at the conceptual or logical layer — is the **Entity Relationship Diagram** (ERD). ERDs were introduced by Peter Chen in 1976 and have become to data modeling what BPMN is to process modeling: a small, expressive, mostly universal vocabulary that almost every database professional knows on sight. Modern ERD dialects include Chen notation (the original, with diamonds for relationships), Crow's Foot notation (the most common today, with little three-pronged "crow's feet" for the *many* side of a relationship), and IDEF1X (used in government work). The notation is less important than the discipline.

An ERD has three primary elements that every IS student must internalize: entity, attribute, and relationship. Let's define each in prose before any diagram, because the diagram only makes sense once the words do.

An **Entity** is a thing the system needs to remember as a distinct *kind* of thing. *Customer*, *Order*, *Product*, *Employee*, *Invoice*, *Course*, *Hummingbird* — each is an entity. In the eventual database, an entity becomes a table; each individual customer is a *row* in the Customer table. Entities are usually nouns, usually concrete, and usually correspond to something a business person would recognize as a real thing.

An **Attribute** is a fact recorded about an entity — a *property* of the thing the entity represents. The Customer entity might have attributes for `customer_id`, `first_name`, `last_name`, `email`, `created_at`, and `loyalty_tier`. In the eventual database, attributes become columns. The art of attribute selection is knowing what facts about a thing the system actually needs (so you can support the queries the business will ask) without dragging in every fact you can imagine (which makes the schema brittle and the tables sparse).

A **Relationship** is a connection between two entities — a fact that links one entity to another. *A Customer places an Order.* *An Order contains Products.* *An Employee reports to an Employee.* Relationships are usually verbs, and they are how the entities form a *graph* of the business domain rather than a list of disconnected lists.

Once you have entities and relationships, you need one more concept to describe them precisely: cardinality.

**Cardinality** is the numeric specification of how many instances of one entity can or must participate in a relationship with how many instances of another. The four canonical cardinality patterns are *one-to-one* (a Person has one Passport), *one-to-many* (a Customer places many Orders, but each Order belongs to one Customer), *many-to-one* (the inverse view of the same relationship), and *many-to-many* (a Student enrolls in many Courses, and each Course enrolls many Students). Cardinality also covers *optionality* — whether participation is required (a Order must have a Customer) or optional (a Customer need not have any Orders yet). Crow's Foot notation captures both with a small marker on each end of the relationship line: a single bar means "one and only one," a circle means "zero," and the three-pronged crow's foot means "many."

The footgun in cardinality is the silent default. Many beginners draw every relationship as one-to-many because that is the most common pattern, and quietly miss the many-to-many relationships that actually exist in the domain. A many-to-many drawn as a one-to-many forces a structural lie into the schema; the lie shows up later as duplicated rows, mysterious data loss, or an inability to express a perfectly reasonable business question. Naming cardinalities explicitly — out loud, in the meeting — is one of the highest-value habits a junior data modeler can develop.

#### Diagram: A Small Business ERD — Customer, Order, Product, Supplier

<details markdown="1">
<summary>A Small Business ERD — Customer, Order, Product, Supplier</summary>
Type: interactive-infographic
**sim-id:** small-business-erd<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network entity-relationship diagram (Crow's Foot notation) showing four entities for a small e-commerce business: Customer, Order, Product, and Supplier. Each entity is rendered as a labeled box with two compartments: the upper compartment holds the entity name; the lower compartment lists the primary attributes (Customer: customer_id (PK), email, first_name, last_name, created_at; Order: order_id (PK), customer_id (FK), order_date, status, total; Product: product_id (PK), supplier_id (FK), name, price, in_stock; Supplier: supplier_id (PK), name, contact_email, country). Relationships connect the entities with Crow's Foot markers: Customer 1-to-many Order ("places"), Order many-to-many Product through an OrderLine join entity ("contains"), Supplier 1-to-many Product ("supplies"). The OrderLine join table is shown as a fifth box with order_id, product_id, quantity, unit_price.

Color palette: entity boxes in mascot-emerald with white text for the entity name and pale-emerald for the attribute compartment, primary-key attributes underlined and in mascot-magenta, foreign-key attributes italicized in coral. Relationship lines in dark teal, with Crow's Foot markers rendered crisply.

Interactivity: hovering an entity reveals (a) a plain-language description of what the entity represents in the business, (b) the rationale for each attribute, and (c) sample row values. Hovering a relationship line reveals its cardinality in plain English ("each Customer places zero or more Orders; each Order is placed by exactly one Customer"). A "show normal forms" toggle highlights which attributes would violate 1NF, 2NF, and 3NF if added carelessly. To work around the vis-network horizontal-edge label rendering bug, relationship lines use a slight y-offset so labels render correctly on initial load.

Layout: hierarchical with manual positioning, full canvas width, height ~560px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can read a Crow's Foot ERD, name each entity's primary key and foreign keys, identify cardinalities in plain English, and recognize where a join entity is required for a many-to-many relationship.

Implementation: vis-network, deployed at `/information-systems/sims/small-business-erd/`.
</details>

## Keys: The Identity Backbone of a Database

Every entity in a relational database needs a way to be *uniquely identified*. That identity comes from a **Primary Key** — one or more columns whose values are guaranteed unique across all rows in the table and never null. The primary key is the answer to "which row are we talking about?" and it is the load-bearing concept in relational design. When somebody asks for "customer 4827", they mean the row in the Customer table whose primary key is 4827.

Primary keys come in two main flavors. A *natural key* uses an attribute that already exists in the business domain — a Social Security Number, an ISBN, a vehicle VIN. A *surrogate key* is a synthetic identifier the system makes up — typically an auto-incrementing integer or a UUID — with no meaning outside the database. Modern practice strongly favors surrogate keys for almost every entity, because natural keys have a habit of changing (people change phone numbers, companies rebrand, the government re-issues identifiers) and a primary key that changes is a primary key that breaks every foreign key referring to it. Surrogate keys are boring on purpose; that is their virtue.

A **Foreign Key** is a column (or set of columns) in one table whose values must match a primary key value in another table — or be null, if the relationship is optional. Foreign keys are the *connecting tissue* that turns a collection of disconnected tables into a coherent relational structure. The Order table's `customer_id` column is a foreign key to the Customer table's primary key; that single design choice is what makes "find all orders by this customer" a one-line query rather than an application-side mess.

Together, primary keys and foreign keys form the *identity backbone* of a relational database. Every relationship the data model describes is implemented physically as a foreign key pointing at a primary key. If the keys are right, almost everything else can be fixed; if the keys are wrong, almost nothing can.

## Constraints and Indexes: Rules and Shortcuts

Once the keys are in place, two more structural elements complete the foundation. The first is constraints, which encode rules; the second is indexes, which encode shortcuts.

A **Database Constraint** is a rule the database enforces about what values are allowed in a column or combination of columns. Constraints come in five canonical kinds: *NOT NULL* (this column may never be empty), *UNIQUE* (no two rows may share this value), *PRIMARY KEY* (the combination of NOT NULL and UNIQUE for the row-identity columns), *FOREIGN KEY* (this column's value must match a primary key in another table), and *CHECK* (this column must satisfy an arbitrary condition, e.g., `price > 0`). Constraints are checked by the database itself, on every insert and update. They are the cheapest, most reliable place to put data-integrity rules — and they are routinely under-used by teams who put the same rules in application code instead, where bugs and bypasses can let bad data sneak in.

A **Database Index** is an auxiliary data structure — typically a B-tree or a hash table — that the database maintains alongside a table to accelerate lookups by some column or combination of columns. Without an index, a query that filters by a non-primary-key column must scan every row in the table; with an index, the same query can find matching rows in roughly the time it takes to look something up in the back of a textbook. Indexes are why a query against a million-row table can return in milliseconds.

The systems-thinking tradeoff in indexing is that *every index makes reads faster and writes slower*. Each insert, update, or delete must update not only the table but also every index on it. A table with twenty indexes will have brisk reads and excruciating writes. The footgun is that the slowdown is silent: the writes still succeed, just gradually slower, and the team only notices when nightly batch loads start spilling over into business hours. The structural fix is index discipline — add indexes for queries you actually run, measure before and after, and remove indexes that no query plan has touched in months.

!!! mascot-thinking "Pause here"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    Here is the leverage hierarchy of data work, from lowest to highest leverage: tune a query, add an index, rewrite the query, refactor the schema, *fix the data model*. Most of the time, the highest-impact intervention is several rungs above the one the team instinctively reaches for. A clever query against a bad model is a temporary win that locks in the bad model. A good model makes most queries trivial. Donella Meadows would call the data model the *paradigm* level of leverage in a database — the level above which everything else is parameter tuning. Spend your design effort there.

## Normalization: The Theory of Not Repeating Yourself

The single most influential idea in relational database design is **Normalization** — the systematic process of organizing tables so that each fact about the world is stored in exactly one place. Normalization was developed by Edgar F. Codd in the 1970s, who introduced a numbered series of *normal forms* — progressively stricter conditions a schema can satisfy. We will cover the three that matter for almost every business application: 1NF, 2NF, and 3NF. (Higher normal forms — BCNF, 4NF, 5NF — exist and are occasionally worth the effort, but a database in 3NF is a database that will not ruin your week.)

The motivation for normalization is the *update anomaly*. Suppose your Customer table stores the customer's loyalty-tier name in every order row: "Gold", "Gold", "Gold". When the customer is promoted to "Platinum", you must update every one of their order rows. Miss one, and the same customer is now simultaneously Gold and Platinum, depending on which row you read. Normalization prevents this by storing the loyalty tier in exactly one place — the Customer table — and referring to it from elsewhere via the customer's primary key.

### First Normal Form: One Value Per Cell

A table is in **First Normal Form** (1NF) if every cell contains a single, atomic value — no lists, no nested structures, no comma-separated strings pretending to be lists. A row representing a customer with phone numbers stored as `"555-1212, 555-3434, 555-5656"` is not in 1NF; the phone numbers should live in a separate Phone table, with one row per phone number, each pointing back at the customer via foreign key. A row that stores three columns named `phone_1`, `phone_2`, `phone_3` is also not in 1NF — it is 1NF wearing a disguise, and it falls apart the moment a customer needs a fourth phone number.

The 1NF discipline is what lets SQL queries work cleanly. Every relational operator — JOIN, GROUP BY, WHERE — assumes that the values it is comparing are atomic. The moment cells contain lists, every query becomes a string-parsing exercise, and string-parsing in SQL is exactly as joyful as it sounds.

### Second Normal Form: No Partial Dependencies

A table is in **Second Normal Form** (2NF) if it is in 1NF *and* every non-key column depends on the *entire* primary key, not just part of it. 2NF only matters when the primary key is *composite* — made up of more than one column. If the primary key is a single column (the usual case with surrogate keys), 2NF is automatic.

The classic 2NF violation is an OrderLine table with a composite primary key of `(order_id, product_id)` and a `product_name` column. The product name depends only on the product_id, not on the order_id — so it is *partially dependent* on the primary key. Storing product_name on every OrderLine row means that when a product gets renamed, you must update every order line that ever sold it. The 2NF fix: move product_name to the Product table where it belongs, and look it up via the product_id foreign key.

### Third Normal Form: No Transitive Dependencies

A table is in **Third Normal Form** (3NF) if it is in 2NF *and* no non-key column depends on another non-key column. Put another way: every non-key column must depend *directly* on the primary key, not transitively through some other non-key column.

The classic 3NF violation is an Employee table with columns `employee_id` (primary key), `name`, `department_id`, and `department_name`. The department_name depends on department_id, which depends on employee_id — a transitive chain. Updating a department's name now requires updating every employee in that department. The 3NF fix: split the department information into its own Department table with department_id as primary key and department_name as an attribute, and let the Employee table refer to the department by foreign key.

| Normal form | Rule (informally)                                          | Fixes                              | Common violation                              |
|-------------|-------------------------------------------------------------|------------------------------------|-----------------------------------------------|
| 1NF         | Every cell is atomic; no lists, no repeating columns.       | Insert/query anomalies for lists   | Comma-separated strings; phone_1, phone_2 cols|
| 2NF         | 1NF plus: every non-key column depends on the whole key.    | Update anomalies for shared facts  | Product name stored on every OrderLine row    |
| 3NF         | 2NF plus: no transitive dependencies among non-key columns. | Update anomalies for related facts | Department name stored on every Employee row  |

#### Diagram: Normalization Journey from 1NF to 3NF

<details markdown="1">
<summary>Normalization Journey from 1NF to 3NF</summary>
Type: interactive-infographic
**sim-id:** normalization-journey-1nf-to-3nf<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js step-through diagram showing a single denormalized table (an Order Report with columns customer_name, customer_email, product_list, order_total, salesperson, salesperson_region) and walking it through three transformations: 1NF (split the product_list into a separate OrderLine table, one row per product), 2NF (extract product_name and price into a Product table referenced by product_id), and 3NF (extract salesperson_region into a Salesperson table referenced by salesperson_id). Each step is rendered as a side-by-side before/after panel with the violating columns highlighted in coral and the corrected schema highlighted in mascot-emerald.

Color palette: violation columns in coral with a pulsing red border, corrected columns in mascot-emerald, foreign-key arrows in dark teal. Update-anomaly icons (a small cracked-pencil symbol) appear over violating columns to telegraph the underlying problem.

Interactivity: a "Next step" button advances through the four states (denormalized → 1NF → 2NF → 3NF). At each step, a side panel explains in plain English (a) what rule was violated, (b) the update anomaly the violation creates, and (c) the structural fix. A "show update" button animates a hypothetical change (e.g., renaming a product, moving a salesperson to a new region) and shows how many rows must be updated in the violating schema versus the corrected schema — usually a dramatic ratio (50 vs 1).

Layout: side-by-side panels stacked vertically across four steps, full canvas width, height ~640px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Applying): Students can take a denormalized table, identify 1NF, 2NF, and 3NF violations, propose the structural fix for each, and quantify the update-anomaly cost of leaving the violation in place.

Implementation: p5.js, deployed at `/information-systems/sims/normalization-journey-1nf-to-3nf/`.
</details>

### Denormalization: When the Rules Earn an Exception

Once you understand normalization, the corresponding question is: when should you *deliberately violate* it? The answer has a name. **Denormalization** is the deliberate introduction of redundancy into a normalized schema in order to optimize for read performance. A reporting table might intentionally duplicate the customer's name on every order row, because the read-heavy reporting workload reads order rows ten thousand times a day and would otherwise pay a JOIN cost on every read.

Denormalization is a tradeoff, and the key word is *deliberate*. Denormalization done thoughtfully — with explicit awareness of which queries it accelerates, which update anomalies it admits, and how those anomalies will be managed (typically by triggers, batch jobs, or a separate analytical store) — is good engineering. Denormalization done casually, because somebody thought normalization was "academic", is a footgun: silent (the duplicates seem to work fine), easy to trigger (just add the column), and damaging in delayed ways (six months later the duplicates have drifted and nobody knows which copy is right). The structural fix is to require denormalization to come with two artifacts: a documented query whose performance it serves, and a documented mechanism for keeping the duplicates consistent. No artifacts, no denormalization.

The systems-thinking framing: normalization optimizes for *write integrity*, denormalization optimizes for *read speed*. Most operational databases (the ones serving live applications) should lean normalized; most analytical databases (warehouses, reporting marts) should lean denormalized. The two workloads are different beasts, and the modern architecture acknowledges this by physically separating them — normalized OLTP up front, denormalized OLAP downstream — rather than forcing a single schema to serve both.

## SQL: The Lingua Franca of Relational Data

The **SQL Language** — Structured Query Language, pronounced "sequel" or "ess-cue-ell" depending on which professor's class you sat through — is the standard language for interacting with relational databases. SQL was developed at IBM in the early 1970s, standardized by ANSI in 1986, and has survived nearly every fashion in computing since: client-server, three-tier, web, mobile, NoSQL, cloud, microservices, AI. When the dust settles after each cycle, SQL is still there. If you learn one technology this semester deeply, learn this one.

SQL is *declarative*, which is its central design choice. You describe *what* result you want, not *how* to compute it; the database's query planner figures out the how. This is also what makes SQL surprising at scale: the same query can run a thousand times faster after a small change to an index, because the query planner picks a different execution strategy. SQL has four broad sub-languages: DML (Data Manipulation — SELECT, INSERT, UPDATE, DELETE), DDL (Data Definition — CREATE, ALTER, DROP), DCL (Data Control — GRANT, REVOKE), and TCL (Transaction Control — BEGIN, COMMIT, ROLLBACK). For most application work, DML dominates. We will spend most of our SQL time on the most useful statement in the entire language: SELECT.

### The SELECT Statement: Asking the Database a Question

The **SELECT Statement** is how you read data from a database. Its full grammar is intimidating, but its core is simple: name the columns you want, name the table they come from, and optionally narrow the rows down with a WHERE clause and order them with an ORDER BY clause.

The query below reads three columns — `customer_id`, `email`, and `created_at` — from the Customer table, keeps only customers whose loyalty tier is `'Gold'`, and orders the results from newest to oldest by sign-up date, returning at most ten rows. Each clause has a job: `SELECT` chooses columns, `FROM` chooses the source table, `WHERE` filters the rows, `ORDER BY` arranges the surviving rows, and `LIMIT` truncates the result.

```sql
SELECT customer_id, email, created_at
FROM   customer
WHERE  loyalty_tier = 'Gold'
ORDER  BY created_at DESC
LIMIT  10;
```

The `=` in `WHERE loyalty_tier = 'Gold'` compares the column value to the literal string 'Gold' and keeps only matching rows. The `DESC` after `ORDER BY created_at` means "descending" — newest first. `LIMIT 10` means "give me at most ten rows." Drop any clause and the query still parses, just with a different meaning: drop WHERE and you get every customer; drop ORDER BY and the rows come back in whatever order the database finds convenient (which is *not* guaranteed to be insertion order — many a beginner has been bitten by this).

### JOINs: Combining Tables Across Foreign Keys

A **JOIN Operation** is how SQL combines rows from two or more tables based on a related column — typically a foreign-key relationship. JOINs are why normalized schemas remain queryable: the data lives in many tables, but a JOIN reassembles it on demand. There are four canonical JOIN types every IS student must know.

The query below answers the question "show me each order along with the email of the customer who placed it." The `INNER JOIN` keeps only orders that have a matching customer (which should be all of them, if foreign keys are enforced) and only customers who have at least one order. The `ON o.customer_id = c.customer_id` clause is the *join condition* — it tells the database how to match rows between the two tables. The aliases `o` and `c` are just shorthand to keep the query readable.

```sql
SELECT o.order_id, o.order_date, c.email
FROM   orders        o
INNER JOIN customer  c  ON o.customer_id = c.customer_id
ORDER  BY o.order_date DESC;
```

A **LEFT JOIN** (also called LEFT OUTER JOIN) keeps every row from the left-hand table even when no match exists on the right; non-matching right-hand columns come back as NULL. A **RIGHT JOIN** is the mirror image. A **FULL OUTER JOIN** keeps non-matching rows from both sides. A **CROSS JOIN** combines every row of the left table with every row of the right (the Cartesian product), which is almost always a mistake unless you genuinely meant it.

| JOIN type        | Keeps unmatched rows from...        | Typical use                                            |
|------------------|-------------------------------------|--------------------------------------------------------|
| INNER JOIN       | Neither side                        | "Combine matching rows only"                           |
| LEFT JOIN        | Left side                           | "Every customer, with their orders if any"             |
| RIGHT JOIN       | Right side                          | Rare in practice — usually rewritten as LEFT           |
| FULL OUTER JOIN  | Both sides                          | Reconciliation reports between two systems             |
| CROSS JOIN       | (Cartesian product)                 | Generating combinations; otherwise a bug               |

The footgun in JOINs is *forgetting the ON clause* and producing a Cartesian product on a million-row table — 10^12 rows of garbage and a database server that needs a stiff drink. The structural fix is that most modern SQL clients refuse to execute a JOIN without an ON clause; rely on that, and double-check before clicking Run.

!!! mascot-tip "Iris's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    When a JOIN result has more rows than you expected, the cause is almost always a *fan-out* — one row on the left matches many rows on the right because of a one-to-many relationship you forgot was there. Before you reach for `DISTINCT` to clean it up (the wrong fix), draw the cardinalities of the JOIN on a napkin. The correct fix is usually either an aggregation in a subquery on the many-side, or a LEFT JOIN on a join-table that has the right grain. `DISTINCT` masks the symptom and quietly hides legitimate duplicates that *should* have been kept.

### Subqueries: A Query Inside a Query

A **Subquery** is a SELECT statement nested inside another SQL statement. Subqueries appear in three main places: in the WHERE clause (as a filter condition), in the FROM clause (as a derived table), and in the SELECT list (as a scalar value).

The query below answers "show me every customer who has placed at least one order over $1000." The inner subquery — `SELECT customer_id FROM orders WHERE total > 1000` — returns a list of customer IDs. The outer query then filters the Customer table to those IDs using `WHERE customer_id IN (...)`. The IN operator means "the value on the left matches any value in the set on the right."

```sql
SELECT customer_id, email
FROM   customer
WHERE  customer_id IN (
         SELECT customer_id
         FROM   orders
         WHERE  total > 1000
       );
```

Subqueries are sometimes the cleanest way to express a question, and sometimes the slowest way. The query planner will often (but not always) rewrite a subquery into an equivalent JOIN under the hood. When in doubt, write whichever form is most readable, and only optimize if profiling tells you to.

### Window Functions: Aggregations Without Losing the Rows

A **Window Function** is a SQL feature that performs a calculation across a set of rows *related to the current row*, without collapsing the rows the way GROUP BY does. Window functions are the single biggest reason modern SQL is more powerful than the SQL of 1995, and they are the feature that separates a SQL beginner from a SQL professional.

The query below ranks the orders within each customer from largest to smallest by total amount, returning every order with its rank. The `RANK() OVER (PARTITION BY customer_id ORDER BY total DESC)` clause says: "for each customer (the partition), rank the rows in descending order of total." The OVER clause is what makes this a window function — it defines the *window* of rows the calculation applies to. Crucially, every original order row is preserved in the result; the rank is just an extra column.

```sql
SELECT order_id,
       customer_id,
       total,
       RANK() OVER (PARTITION BY customer_id
                    ORDER BY total DESC) AS rank_within_customer
FROM   orders;
```

Other useful window functions include `ROW_NUMBER()` (assigns a unique sequence within the partition), `LAG(column, 1)` (returns the value of `column` from the previous row in the partition), `LEAD(column, 1)` (the value of the next row), `SUM(column) OVER (...)` (a running total), and `AVG(column) OVER (...)` (a moving average). The pattern is always the same: an aggregate-shaped function, the keyword OVER, and an optional PARTITION BY to define the windows.

### Database Views: Saved Queries with a Name

A **Database View** is a stored, named SELECT query that behaves, to the user, like a table. Querying a view runs the underlying SELECT and returns the result; the view itself stores no data (in the standard form — *materialized views* are a separate beast that does cache results). Views are how you expose simplified, sanitized, or pre-joined slices of the underlying schema to applications, reports, and end users without exposing the messy real tables.

The view below presents a clean "customer order summary" by joining Customer and Orders and aggregating per customer. Anyone querying `customer_order_summary` sees three columns and never has to write the JOIN themselves; if the underlying schema changes, the view definition can be updated without breaking the consumers.

```sql
CREATE VIEW customer_order_summary AS
SELECT c.customer_id,
       c.email,
       COUNT(o.order_id) AS order_count,
       COALESCE(SUM(o.total), 0) AS lifetime_spend
FROM   customer c
LEFT JOIN orders o ON o.customer_id = c.customer_id
GROUP  BY c.customer_id, c.email;
```

Views are also a security mechanism: a user who is granted SELECT on a view but not on the underlying tables can only see what the view exposes. This is one of the cleanest patterns for masking columns (e.g., omitting Social Security Numbers from a customer view) without rewriting application code.

### Stored Procedures: Logic That Lives in the Database

A **Stored Procedure** is a named, parameterized block of SQL (and procedural extensions like loops and conditionals) that lives inside the database and is invoked by name. Stored procedures predate every modern application framework, and they are still the right answer for some classes of work — particularly batch operations where moving data out to an application server and back would be wasteful, or operations whose business logic must run *exactly* the same way regardless of which application calls them.

The procedure below issues a refund: it inserts a row into the Refunds table, updates the Order's status to 'Refunded', and returns the new refund_id. Wrapping all three steps in one procedure means an application can issue a refund with a single call, and the database can guarantee the three steps run together (more on that under transactions in a minute).

```sql
CREATE PROCEDURE issue_refund(
    IN  p_order_id  BIGINT,
    IN  p_amount    NUMERIC(12,2),
    OUT p_refund_id BIGINT
) AS $$
BEGIN
    INSERT INTO refunds (order_id, amount, refunded_at)
    VALUES (p_order_id, p_amount, NOW())
    RETURNING refund_id INTO p_refund_id;

    UPDATE orders
    SET    status = 'Refunded'
    WHERE  order_id = p_order_id;
END;
$$ LANGUAGE plpgsql;
```

Stored procedures have a reputation problem in modern shops — they live outside source control by default, they are awkward to test, and they fragment business logic across the application and the database. The structural fixes (version-controlling the procedure source, automated tests against a containerized database, clear ownership rules) are well-known but not universally adopted. The footgun is "logic creep": a single helpful procedure becomes a hundred procedures, and now half the business logic is in a place no one's IDE understands. Use stored procedures with intent, not as a default.

## Transactions: All Or Nothing

The single most important thing a relational database does for an application is *guarantee that a sequence of operations either all succeed or all fail*. That guarantee is the **Transaction**. A transaction is a unit of work, bracketed by `BEGIN` and `COMMIT` (or `ROLLBACK`), that the database treats as atomic from the perspective of any other client. Inside a transaction, you can update three tables, insert a row, delete two rows, and update a fourth — and either the whole bundle commits, or none of it does. The classic example is a bank transfer: debit one account, credit another. If the debit succeeds and the credit fails, the money has vanished. A transaction makes that scenario impossible.

```sql
BEGIN;

UPDATE account
SET    balance = balance - 100
WHERE  account_id = 42;

UPDATE account
SET    balance = balance + 100
WHERE  account_id = 99;

COMMIT;
```

If anything between BEGIN and COMMIT fails — a constraint violation, a network drop, a deadlock — the transaction is aborted, and the database rolls back any changes the transaction made. From the perspective of every other client reading the database, it is as if the transaction never happened.

### ACID: The Four Promises

Transactions deliver four guarantees, traditionally summarized by the acronym **ACID Properties**: Atomicity, Consistency, Isolation, Durability.

- **Atomicity** — a transaction is all-or-nothing. Either every operation in it succeeds, or none of them do. Partial application is impossible.
- **Consistency** — a transaction takes the database from one valid state to another. All constraints, foreign keys, and CHECK conditions hold before the transaction begins and after it commits.
- **Isolation** — concurrent transactions appear to run as if they were serial. Transaction A cannot see Transaction B's incomplete work, and vice versa, except in the carefully controlled ways the chosen isolation level allows.
- **Durability** — once a transaction commits, its effects survive crashes, power loss, and the kind of weather the data center's marketing brochure promised would never happen.

| Property      | Plain-language meaning                                            | What it protects against                              |
|---------------|--------------------------------------------------------------------|-------------------------------------------------------|
| Atomicity     | All operations succeed together, or none do.                       | Partial updates after a crash                         |
| Consistency   | Constraints and rules hold across the transaction.                 | Schema-violating data sneaking in                     |
| Isolation     | Concurrent transactions don't see each other's incomplete work.    | Race conditions between simultaneous users            |
| Durability    | Committed transactions survive failures.                           | Losing committed work to a server crash               |

ACID is the contract that lets applications be written without paranoia. Without ACID, every application would have to be written as if the database might lie — which is roughly the position you find yourself in when working with some non-relational stores that explicitly weaken these guarantees in exchange for scale. (We will meet those tradeoffs in a later chapter on distributed data. For now, ACID is the baseline.)

### Isolation Levels: How Strict Is "Isolated"?

The "I" in ACID — Isolation — has a dial. The strictest setting, *Serializable*, makes concurrent transactions behave as if they had run one at a time, in some serial order. The loosest commonly-used setting, *Read Uncommitted*, lets a transaction see another transaction's uncommitted writes. Between them lie *Read Committed* (the default in most databases) and *Repeatable Read*. The choice is an **Isolation Level**, and it controls a tradeoff between *anomaly prevention* and *concurrency throughput*.

The reason the dial exists is that perfect isolation is expensive. To make concurrent transactions appear serial, the database must lock rows, hold those locks for the duration of the transaction, and either block or abort other transactions that would conflict. Higher isolation = more locking = lower throughput. The standard isolation levels and the anomalies they admit are summarized below.

| Isolation level   | Dirty read | Non-repeatable read | Phantom read | Write skew | Throughput |
|-------------------|-----------|---------------------|--------------|------------|------------|
| Read Uncommitted  | Possible  | Possible            | Possible     | Possible   | Highest    |
| Read Committed    | Prevented | Possible            | Possible     | Possible   | High       |
| Repeatable Read   | Prevented | Prevented           | Possible*    | Possible   | Medium     |
| Serializable      | Prevented | Prevented           | Prevented    | Prevented  | Lowest     |

*PostgreSQL's Repeatable Read prevents phantom reads as well; the SQL standard does not require this.

A *dirty read* is reading uncommitted data from another transaction. A *non-repeatable read* is reading the same row twice and getting different values. A *phantom read* is running the same query twice and getting different sets of rows. *Write skew* is two transactions reading overlapping data, each making decisions consistent with what they read, but together producing an inconsistent state — the most subtle of the anomalies.

#### Diagram: Write Skew Under Read Committed Isolation

<details markdown="1">
<summary>Write Skew Under Read Committed Isolation</summary>
Type: interactive-infographic
**sim-id:** write-skew-read-committed<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js timeline visualization showing two concurrent transactions on a hospital on-call schedule. The rule: at least one doctor must remain on call. Transaction A reads "Dr. Jones is on call AND Dr. Smith is on call — two doctors, fine, I can release Dr. Jones." Transaction B reads "Dr. Jones is on call AND Dr. Smith is on call — two doctors, fine, I can release Dr. Smith." Both commit under Read Committed isolation. Result: zero doctors on call. The visualization animates two transaction timelines side-by-side, with shared reads of the schedule, divergent writes, and a final merged state showing the rule violation. A toggle switches the isolation level to Serializable and replays the scenario; under Serializable, one of the two transactions is aborted and re-tried, and the rule holds.

Color palette: Transaction A in mascot-emerald, Transaction B in coral, shared database state in slate-gray, rule-violation flash in mascot-magenta. A small clock at the top of the canvas advances along the timeline as the simulation plays.

Interactivity: a "Play" button advances the two transactions step-by-step. A "Step through" mode lets the student advance one event at a time and observe the database state after each event. An isolation-level dropdown lets the student select Read Committed, Repeatable Read, or Serializable and replay the same scenario, watching how the outcome differs. A side panel shows a running explanation of what each transaction sees and why the anomaly occurs (or doesn't).

Layout: two horizontal timelines stacked vertically, with a database-state panel below, full canvas width, height ~520px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can trace two concurrent transactions through a write-skew scenario, identify why Read Committed allows the anomaly, and explain how Serializable isolation prevents it at the cost of one aborted-and-retried transaction.

Implementation: p5.js, deployed at `/information-systems/sims/write-skew-read-committed/`.
</details>

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    The default isolation level on most databases is Read Committed, and it is correct for the vast majority of OLTP workloads. But Read Committed silently permits write skew — and write skew is responsible for some of the most expensive bugs in the history of financial systems, healthcare scheduling systems, and inventory management systems. The footgun is silent: every individual transaction looks correct on its own; the anomaly only emerges when two of them run concurrently on overlapping data. The structural fix when write skew matters is to bump the relevant transaction up to Serializable isolation (or use explicit locking), accept the throughput hit, and document why. "Whatever the default is" is not a defensible answer when money is on the line.

### Concurrency Control: How the Database Keeps Its Promises

The mechanism by which the database actually enforces isolation is **Concurrency Control**. Two main strategies dominate:

*Locking* — also called *pessimistic concurrency control* — has the transaction acquire locks on the rows it reads or writes, and other transactions that need conflicting locks wait. The classic implementation is *two-phase locking* (2PL), in which a transaction acquires locks as it goes and releases them all at commit time. Locking guarantees correctness but can produce deadlocks (transaction A holds lock X and wants Y; transaction B holds Y and wants X) which the database resolves by aborting one of the transactions.

*Multi-Version Concurrency Control* (MVCC) — also called *optimistic concurrency control* in its purest form — has the database keep multiple versions of each row, so that readers can see a consistent snapshot of the database without blocking writers, and writers can proceed without blocking readers. PostgreSQL, Oracle, and MySQL InnoDB all use MVCC. Conflicts are detected at commit time, and conflicting transactions are aborted and re-tried. MVCC is the reason modern databases can serve hundreds of concurrent transactions without spending most of their time waiting on locks.

The systems-thinking lesson is that concurrency control is *invisible until it isn't*. Every database commits to some scheme; the application developer notices it only when a transaction unexpectedly aborts due to a deadlock, or a snapshot read returns "stale" data, or a high-throughput workload starts seeing serialization-failure errors under load. Understanding what your database does — and which isolation level you have requested — is the difference between debugging concurrency anomalies in five minutes and debugging them in five days.

## Database Migration: Schemas Change, and Change Hurts

Schemas are not finished when the application ships. They evolve. New entities show up, old columns get renamed, constraints get tightened, indexes get added, large tables get partitioned. Each of these changes is a **Database Migration** — a versioned, reversible (ideally) change to the database schema, applied through a tool like Flyway, Liquibase, Alembic, or the migration framework built into Rails, Django, or Laravel.

Migrations are versioned because the schema must be in a known state at every point in time — otherwise an application built for schema version 7 cannot tell whether the database it just connected to is at 5, 6, 7, or 8. Migrations are written as small, numbered scripts, applied in order, with a small `schema_migrations` table inside the database itself recording which scripts have run. Rolling forward applies the next pending script; rolling back applies its inverse. The discipline of treating migrations as code — version-controlled, peer-reviewed, deployed through CI/CD — is what turns "evolving the schema" from a terrifying outage into a routine operation.

The systems-thinking insight is the *schema-drift feedback loop*. Without disciplined migrations, schema changes get applied ad-hoc to the production database — somebody runs a quick ALTER TABLE during an incident, somebody else adds an index for a slow report, somebody else drops a column that "wasn't being used." A year later, the production schema no longer matches anything in source control, every deploy is a small surprise, and reproducing a bug locally is nearly impossible. The disciplined-migration loop is the *balancing feedback* that fights drift: every change goes through a script, every script lives in source control, every environment can be recreated from scratch. Without that loop, drift wins. With it, the schema is just another piece of code.

The footgun in migrations is *destructive changes on large tables*. `ALTER TABLE orders DROP COLUMN legacy_status` on a billion-row table can lock the table for hours and bring the application down. The structural fix is the *expand-contract* migration pattern: first expand the schema to support both the old and new shape, deploy application code that writes the new shape, backfill the data, deploy code that reads only the new shape, and only then contract by dropping the old column. Each step is small and reversible. The expand-contract pattern is a high-leverage skill that few teams learn until they have been burned at least once.

## Putting It All Together

Data management is the discipline of designing, querying, and evolving the relational stores that nearly every information system depends on.

- **Data modeling** is the highest-leverage activity in IS. The **conceptual data model** captures the business view, the **logical data model** captures the relational structure, and the **physical data model** captures the vendor-specific implementation. Skip a layer at your peril.
- **Entity-relationship diagrams** are the standard notation. **Entities** become tables, **attributes** become columns, **relationships** become foreign keys, and **cardinality** specifies how many of each side participate.
- **Primary keys** and **foreign keys** form the identity backbone. **Database constraints** enforce rules at the cheapest possible layer; **database indexes** accelerate reads at the cost of write throughput.
- **Normalization** stores each fact once. **First normal form** demands atomic cells; **second normal form** removes partial dependencies; **third normal form** removes transitive ones. **Denormalization** is normalization's deliberate exception, paid for by extra integrity discipline.
- The **SQL language** is the durable lingua franca. The **SELECT statement** reads, **JOIN operations** combine related tables, **subqueries** nest one query inside another, **window functions** aggregate without collapsing rows, **database views** name reusable queries, and **stored procedures** push logic into the database for batch and integrity work.
- **Transactions** bundle operations into atomic units. **ACID properties** — atomicity, consistency, isolation, durability — are the contract that makes applications writable without paranoia. **Isolation levels** dial the strictness of the I-in-ACID against throughput. **Concurrency control**, via locking or MVCC, is the mechanism by which the database keeps its promises.
- **Database migrations** are how schemas evolve safely. Disciplined, version-controlled migrations beat schema drift; expand-contract beats destructive ALTERs.

A graduate of this chapter walking into their first data engagement should be able to ask, in order: *What entities does this domain have, and what are their relationships? Is the schema in 3NF, and where have we deliberately denormalized? Which queries does the application actually run, and are they indexed for? Are the application's critical operations wrapped in transactions, and at what isolation level? How does the schema evolve — through versioned migrations or by ad-hoc surgery? And who reviews the migrations before they hit production?* Asking those questions in a kickoff meeting will earn you the slightly-startled respect of every senior engineer in the room.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just learned the working vocabulary of relational data — conceptual/logical/physical modeling, entities and attributes and relationships and cardinality, primary keys and foreign keys, constraints and indexes, the three normal forms and the deliberate art of denormalization, SELECT and JOIN and subquery and window function, views and stored procedures, transactions and ACID and isolation levels and concurrency control, and the discipline of versioned migrations. That is genuinely a lot, and you read it in one chapter. The next time somebody pitches a "quick schema change," you will hear *what's the migration script and what's the rollback?* The next time somebody complains the database is slow, you will hear *which query, with which plan, against which indexes?* And the next time somebody is mystified that two simultaneous users produced an inconsistent state, you will hear *write skew under Read Committed* — and you will know exactly how to fix it. Onward to Chapter 7, where we leave the relational world long enough to meet its modern cousins: data warehouses, lakes, and the distributed stores that picked up where ACID had to compromise.
