# Chapter Design Session Log

**Date:** 2026-04-28
**Skill:** book-chapter-generator
**Input:** `docs/course-description.md`, `docs/learning-graph/learning-graph.json`
**Output:** 25-chapter structure under `docs/chapters/`

This log records the design decisions made when generating the chapter
structure for the Information Systems textbook. It exists so that future
chapter content generation, future restructurings, and future readers of
this repo can understand *why* the chapter outline looks the way it does
rather than having to reverse-engineer the intent from the directory names.

## 1. Inputs analyzed

### 1.1 Course description

`docs/course-description.md` is an ABET CAC-aligned course description with a
quality score of 96. It targets sophomore/junior undergraduates in IS, IT,
Business Analytics, and CIS programs and is structured around the ABET CAC
2025–2026 Program Criteria for Information Systems plus the ACM/AIS IS2020
guidelines.

The course description signals two important features that drove the chapter
design:

1. **AI is treated as a load-bearing competency**, not an elective add-on.
   The description allocates roughly five distinct topic areas to AI (AI in
   IS, Responsible AI, AI Law, AI and Security, AI Productivity Impact).
   That suggests the textbook needs a substantial AI section rather than a
   single "AI chapter."
2. **Knowledge Graphs and the Enterprise Nervous System are positioned as
   the future IS stack** — also as multi-topic territory rather than a
   single tail chapter. The course description spends an entire bullet on
   them and lists multiple capstones in this area.

These two emphases mean the back half of the book carries more chapters
than a traditional IS textbook would, which interacts directly with the
chapter-count tradeoff discussed below.

### 1.2 Learning graph

`learning-graph.json` contains:

- **580 concepts** across **24 taxonomy groups**.
- **946 dependency edges** in the dependency direction
  (`from = dependent, to = prerequisite`).
- **5 foundational concepts** with zero prerequisites: Information System,
  Data, Hardware, Software, Organization. These are simple, introductory
  terms — confirming the edge direction is correct (this validation is
  required by the skill before chapter design proceeds).

### 1.3 Taxonomy distribution

| Group   | Concepts | Group   | Concepts |
|---------|----------|---------|----------|
| FOUND   | 18       | PRIV    | 22       |
| ROLE    | 18       | PM      | 30       |
| ARCH    | 23       | BPM     | 19       |
| APPDEV  | 25       | SAD     | 24       |
| DATA    | **60**   | HCI     | 14       |
| DATAGOV | 18       | ITSM    | 25       |
| BI      | 19       | AIIS    | 26       |
| ENT     | 15       | RAI     | 25       |
| NET     | 15       | AILAW   | 20       |
| CLOUD   | 22       | AISEC   | 25       |
| SEC     | **37**   | AIPROD  | 25       |
|         |          | KGENS   | **44**   |
|         |          | EMRG    | 11       |

Three groups stand out as being too large for a single chapter under
the skill's 8–25 concepts/chapter guideline: **DATA (60)**, **KGENS (44)**,
and **SEC (37)**. Each was handled differently (see §3).

## 2. Chapter count: the central tradeoff

The skill specifies two constraints that **cannot both be satisfied** for
this learning graph:

1. **Maximum 20 chapters.**
2. **8–25 concepts per chapter** (with absolute optimum 12–18).

The math: 580 / 25 = 23.2 chapters minimum to keep every chapter at 25 or
fewer; 580 / 20 = 29 concepts/chapter average if we cap at 20 chapters,
violating the size limit. With 580 concepts (roughly 3× the typical
200-concept book the skill is calibrated for), constraint (2) is the more
pedagogically meaningful one — a 29-concept chapter is genuinely too
heavy for a sophomore-level reader, but a 25-chapter book is normal.

**Decision:** Prioritize chapter size and dependency correctness. Accept
**25 chapters** with **6 chapters slightly oversized** (26–37 concepts)
where splitting would fragment cohesive subject matter. This was presented
to the user explicitly and approved.

The 6 oversized chapters and why each remained one chapter:

| Ch | Title (abbreviated)                | Size | Why not split                                                                                           |
|----|------------------------------------|------|---------------------------------------------------------------------------------------------------------|
| 6  | Data Management Foundations        | 30   | Already split from a larger DATA group; further split would fragment the SQL/normalization narrative.   |
| 7  | Modern Databases & Lakehouses      | 30   | Already half of a split group; further split would separate "the six database categories" comparison.   |
| 14 | Security of Information Assets     | 37   | The CIA + IAM + threat modeling + incident response sequence is one coherent learning unit.             |
| 16 | IS Project Management              | 30   | Charter → WBS → schedule → risk → change → agile is a single PM workflow that students traverse once.   |
| 19 | AI in Information Systems          | 26   | Sets up vocabulary used by Ch 20–23. Splitting it would force forward references in every later chapter.|
| 24 | Knowledge Graphs and the EKG       | 29   | Already half of a split group; further split would separate property-graph theory from EKG application. |

## 3. Group-to-chapter assignment

The default assignment was **one chapter per taxonomy group (24 chapters)**.
Three modifications were applied:

### 3.1 Splits (large groups → multiple chapters)

- **DATA (60) → 2 chapters.** Split at concept ID 114/115. Rationale: the
  first 30 concepts (85–114) form the "relational, SQL, transactional"
  curriculum (modeling → ER → normalization → SQL → ACID → isolation).
  The second 30 (115–144) form the "modern multi-store" curriculum
  (warehouse, star/snowflake, key-value, column-family, document, graph,
  lake, lakehouse). The split point sits at the natural boundary between
  OLTP/SQL and OLAP/NoSQL.
- **KGENS (44) → 2 chapters.** Split at concept ID 554/555. The first 29
  (526–554) cover graph theory, ontology, EKG construction, and GraphRAG.
  The last 15 (555–569) cover the Enterprise Nervous System
  (Kafka/Flink/CEP/sense-and-respond). This split mirrors the course
  description's own framing.
- **SEC (37)** was *not* split despite being the single largest chapter.
  The 37 concepts form one tightly coupled curriculum (CIA, AAA, IAM,
  cryptography, NIST CSF, ISO 27001, threat modeling, incident response).
  Splitting would force a "Security Part 1 / Part 2" division with no
  natural seam, and most concepts in the back half depend on concepts in
  the front half.

### 3.2 Merges (small groups → shared chapter)

- **HCI (14) + EMRG (11 → 10 after one move) = 24 concepts → Ch 18.**
  HCI and Emerging Topics are both small and both peripheral to the core
  ABET criteria. Combining them avoids two thin chapters and gives one
  chapter that reads as "modern usability and forward-looking topics."

### 3.3 Reassignments (concepts moved between groups for dependency reasons)

- **"Cutover Plan" (id 365)** was tagged SAD in the learning graph but
  depends on **ERP Implementation** (in ENT). Cutover planning is in
  practice an ERP/enterprise-system activity, not a pure SAD activity, so
  it was moved from SAD (Ch 10) to Enterprise Systems (Ch 13). This is the
  more accurate placement and resolves the dependency.
- **"AI-Native Organization" (id 580)** was tagged EMRG but depends on
  **Responsible AI Principles** and the **Enterprise Knowledge Graph**.
  It was moved from the HCI/Emerging chapter (Ch 18) into the final
  chapter (Ch 25). It now serves as the closing synthesis concept,
  which is also where it belongs pedagogically — it ties the AI thread
  and the EKG/ENS thread together.

## 4. Chapter ordering: dependency repair

The default order (group-by-group as listed in the taxonomy) produced
**22 dependency violations**. Two structural reorderings fixed all 22:

### 4.1 Move SAD after Data Management

Original placement put Systems Analysis and Design as Ch 4 (right after
Architecture). But several SAD concepts depend on later concepts:

- `Class Diagram` depends on `Entity` and `Relationship` (Data ch).
- `Use Case`, `Prototyping`, `Functional Specification`,
  `Requirements Traceability`, `Joint Application Design` all depend on
  Application Development concepts (`Requirements Elicitation`,
  `Functional Requirement`, `Acceptance Criteria`, `SDLC`,
  `Continuous Integration`).
- `Activity Diagram` depends on `Process Modeling` (BPM ch).
- `Gap Analysis` depends on `As-Is Process` and `To-Be Process` (BPM ch).
- `Make or Buy Decision` depends on `Build vs Buy vs SaaS` (APPDEV ch).

**Decision:** SAD was moved to **Ch 10**, after Application Development,
BPM, Data Management, Data Governance, and BI. This lets SAD examples
reference real schemas, real pipelines, and real process diagrams instead
of forward-referencing material the student hasn't seen.

### 4.2 Swap Cloud and Enterprise Systems

Original placement put Enterprise Systems before Cloud, but `Industry Cloud`
(in ENT) depends on `IaaS` (in CLOUD). Swapped to Cloud (Ch 12) → Enterprise
Systems (Ch 13). This is also the modern reality: most enterprise systems
are now consumed as SaaS over IaaS/PaaS.

### 4.3 Final validation

After the two reorderings and the two concept reassignments (§3.3), the
strict dependency check was re-run:

```
Dependency violations: 0
Total: 580, Unique: 580
```

All 580 concepts are assigned to exactly one chapter, and no concept
appears before any of its prerequisites.

## 5. Final part structure

The 25 chapters are grouped into 7 parts that match the natural
pedagogical arc of the course:

- **Part I — Foundations** (Ch 1–3)
- **Part II — Building Information Systems** (Ch 4–5)
- **Part III — Data, Information, and Analytics** (Ch 6–9)
- **Part IV — Designing and Operating Systems** (Ch 10–13)
- **Part V — Security, Compliance, and Project Delivery** (Ch 14–18)
- **Part VI — AI in Information Systems** (Ch 19–23)
- **Part VII — The Future IS Stack** (Ch 24–25)

The part boundaries were chosen so that each part ends at a natural
"breath-out" point and the student arrives at the next part with all the
vocabulary they need.

## 6. What this log does NOT cover

- **Per-chapter concept ordering inside each chapter.** The chapter
  index.md files list concepts in their learning-graph ID order, which
  is roughly topological. The chapter-content-generator skill is
  expected to refine intra-chapter ordering when it generates prose.
- **MicroSim selection.** The chapter-content-generator skill chooses
  which concepts get MicroSims based on its own heuristics; this skill
  only structures the chapter shells.
- **Quiz alignment.** The quiz-generator skill builds chapter quizzes
  later from the same concept list.

## 7. Summary

| Statistic                     | Value |
|-------------------------------|-------|
| Total concepts                | 580   |
| Total chapters                | 25    |
| Average concepts per chapter  | 23.2  |
| Smallest chapter              | 15    |
| Largest chapter               | 37    |
| Chapters > 25 concepts        | 6     |
| Dependency violations         | 0     |
| Concepts covered exactly once | 580   |
