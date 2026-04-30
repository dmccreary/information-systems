# Quiz: Data Management Foundations

Test your fluency with relational data modeling, SQL, and the transaction guarantees that keep data trustworthy.

---

#### 1. Which type of data model is most abstract — independent of any specific database technology and focused on entities and relationships in the business domain?

<div class="upper-alpha" markdown>
1. Conceptual data model
2. Logical data model
3. Physical data model
4. Storage data model
</div>

??? question "Show Answer"
    The correct answer is **A**. The conceptual data model captures business entities and their relationships at the highest level of abstraction, independent of any specific DBMS. The logical model adds attributes, normalization, and platform-neutral structure. The physical model specifies tables, indexes, partitioning, and DBMS-specific optimizations. There is no formally named "storage data model" in the standard hierarchy.

    **Concept Tested:** Conceptual Data Model

---

#### 2. In an Entity Relationship Diagram, what does cardinality describe?

<div class="upper-alpha" markdown>
1. The amount of disk space consumed by a table
2. The numerical relationship between instances of two entities (such as one-to-many or many-to-many)
3. The order in which rows are inserted into a database
4. The encryption algorithm used on a column
</div>

??? question "Show Answer"
    The correct answer is **B**. Cardinality specifies how many instances of one entity may relate to instances of another — for example, one customer may place many orders (1:N), or many students may enroll in many courses (M:N). Cardinality is fundamental to data modeling because it constrains schema design and influences foreign-key placement.

    **Concept Tested:** Cardinality

---

#### 3. A primary key is best defined as:

<div class="upper-alpha" markdown>
1. The first column physically stored on disk
2. The column that contains the most data in the table
3. The encryption key used to protect the table
4. A column or set of columns whose values uniquely identify each row in a table
</div>

??? question "Show Answer"
    The correct answer is **D**. A primary key uniquely identifies each row and is enforced by the database — no two rows can share the same primary key value, and no row's primary key can be null. It is foundational to relational integrity. Foreign keys reference primary keys to maintain relationships across tables. The other options describe storage layout or security, not relational identity.

    **Concept Tested:** Primary Key

---

#### 4. A table has columns (StudentID, StudentName, CourseID, CourseName, Instructor). The same course information repeats for every student enrolled. This table most clearly violates which normal form?

<div class="upper-alpha" markdown>
1. First Normal Form
2. Boyce-Codd Normal Form
3. Second Normal Form
4. Sixth Normal Form
</div>

??? question "Show Answer"
    The correct answer is **C**. Second Normal Form requires that non-key attributes depend on the *whole* primary key. CourseName and Instructor depend only on CourseID, not on the (StudentID, CourseID) composite — a partial dependency that 2NF eliminates by splitting Course attributes into a separate Course table. 1NF concerns atomic values; BCNF and 6NF address more advanced anomalies.

    **Concept Tested:** Second Normal Form

---

#### 5. Which SQL clause is used to combine rows from two or more tables based on a related column?

<div class="upper-alpha" markdown>
1. GROUP BY
2. ORDER BY
3. JOIN
4. WHERE
</div>

??? question "Show Answer"
    The correct answer is **C**. JOIN combines rows from multiple tables based on a related column — typically a foreign key matching a primary key. INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN are the common variants. GROUP BY aggregates rows, ORDER BY sorts the result, and WHERE filters rows but does not combine tables.

    **Concept Tested:** JOIN Operation

---

#### 6. A SQL window function differs from a regular aggregate function in that it:

<div class="upper-alpha" markdown>
1. Can only be used in stored procedures
2. Must always operate on the entire table at once
3. Returns binary data instead of numeric data
4. Computes results across a set of rows related to the current row, while preserving the original row in the output
</div>

??? question "Show Answer"
    The correct answer is **D**. Window functions (using OVER()) compute results across a "window" of rows related to the current row — running totals, ranks, moving averages — without collapsing rows the way GROUP BY aggregates do. Each row in the input survives in the output with the windowed value attached. They are powerful for analytics queries that need both row-level detail and group-level context.

    **Concept Tested:** Window Function

---

#### 7. A bank transfers $100 from account A to account B. The system debits A but the database server crashes before crediting B. Which ACID property guarantees that on recovery, the partial transfer is rolled back so neither account is affected?

<div class="upper-alpha" markdown>
1. Consistency
2. Atomicity
3. Isolation
4. Durability
</div>

??? question "Show Answer"
    The correct answer is **B**. Atomicity guarantees that a transaction is all-or-nothing — either every operation commits, or none does. The partial transfer is rolled back on recovery so the database returns to its prior consistent state. Consistency ensures invariants hold; isolation ensures concurrent transactions don't interfere; durability ensures committed transactions survive crashes. Atomicity is the property at work here.

    **Concept Tested:** ACID Properties

---

#### 8. A reporting team complains that the same query returns different results when run twice within a long-running transaction, because other transactions are committing changes in between. Which isolation level addresses this "non-repeatable read" problem?

<div class="upper-alpha" markdown>
1. Read Uncommitted
2. Read Committed
3. Repeatable Read or higher
4. None of the standard isolation levels can address this
</div>

??? question "Show Answer"
    The correct answer is **C**. Repeatable Read guarantees that any row read within a transaction will return the same value if read again later in the same transaction. Read Uncommitted allows dirty reads and is the weakest level; Read Committed prevents dirty reads but allows non-repeatable reads. Serializable is even stricter than Repeatable Read and also addresses phantom reads.

    **Concept Tested:** Isolation Level

---

#### 9. An analytics team frequently runs a query that joins six tables to compute a summary report. The query is slow. After confirming the query is well-written, which controlled denormalization step would most directly help?

<div class="upper-alpha" markdown>
1. Drop all foreign-key constraints to speed inserts
2. Add a redundant denormalized summary table or materialized view that pre-joins the tables, refreshed on a known schedule
3. Convert the database to a key-value store
4. Increase the isolation level to Serializable
</div>

??? question "Show Answer"
    The correct answer is **B**. Denormalization for performance — typically as a summary table or materialized view — trades some redundancy and refresh complexity for query speed when read patterns are well known. Dropping constraints would harm data integrity for unrelated reasons; switching database type is disproportionate; raising isolation slows queries further. Controlled denormalization is the targeted answer.

    **Concept Tested:** Denormalization

---

#### 10. A development team wants to track every change made to the database schema as their application evolves, with the ability to apply or roll back changes consistently across environments. Which discipline addresses this need?

<div class="upper-alpha" markdown>
1. Database migration with versioned migration scripts
2. Manual SQL changes in production with no version control
3. Dropping and recreating the database for each release
4. Storing all data in a single denormalized JSON blob
</div>

??? question "Show Answer"
    The correct answer is **A**. Database migration uses versioned scripts (Flyway, Liquibase, Alembic, Rails migrations) to evolve schema in a controlled, repeatable, reversible way across environments. Manual production changes lose the history; dropping and recreating destroys data; a single JSON blob defeats the purpose of relational structure. Migrations are now standard practice for any serious application.

    **Concept Tested:** Database Migration

---
