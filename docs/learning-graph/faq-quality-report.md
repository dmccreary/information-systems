---
title: FAQ Quality Report
description: Quality metrics, Bloom's taxonomy distribution, coverage, and recommendations for the FAQ generated for the Information Systems textbook.
---

# FAQ Quality Report

**Generated:** 2026-04-29
**Source FAQ:** [docs/faq.md](../faq.md)
**Chatbot Training Data:** [faq-chatbot-training.json](faq-chatbot-training.json)

## Overall Statistics

| Metric                          | Value     |
|---------------------------------|-----------|
| Total Questions                 | 111       |
| Overall Quality Score           | **88/100** |
| Content Completeness Score      | 85/100    |
| Concept Coverage (approx.)      | 72%       |
| Categories                      | 6         |

The FAQ exceeds the skill's minimum-question threshold (40) by a wide margin and exceeds every link/example/length target.

## Category Breakdown

| Category                       | Questions | Avg Word Count | Predominant Bloom Levels   |
|--------------------------------|----------:|---------------:|----------------------------|
| Getting Started                |        13 |             ~140 | Remember, Understand       |
| Core Concepts                  |        30 |             ~150 | Understand, Remember, Apply |
| Technical Detail Questions     |        28 |             ~135 | Remember, Understand        |
| Common Challenge Questions     |        15 |             ~150 | Analyze, Understand, Evaluate |
| Best Practice Questions        |        15 |             ~165 | Apply, Evaluate, Create     |
| Advanced Topic Questions       |        10 |             ~190 | Analyze, Evaluate, Create   |

## Bloom's Taxonomy Distribution

The textbook's six Bloom levels are present and biased appropriately by category — early categories lean Remember/Understand, later categories lean Analyze/Evaluate/Create.

| Level       | Actual | Approx. Target | Deviation |
|-------------|-------:|---------------:|----------:|
| Remember    |    31% |            25% |       +6% |
| Understand  |    27% |            30% |       -3% |
| Apply       |    14% |            20% |       -6% |
| Analyze     |    14% |            13% |       +1% |
| Evaluate    |    10% |             8% |       +2% |
| Create      |     5% |             4% |       +1% |

**Bloom's Distribution Score:** 23/25 (slight Remember-skew, otherwise excellent)

## Answer Quality Analysis

| Metric            | Value          | Target     | Status |
|-------------------|----------------|------------|--------|
| With Examples     | 77/111 (69%)   | ≥ 40%      | ✓      |
| With File Links   | 107/111 (96%)  | ≥ 60%      | ✓      |
| Avg Length (words) | 100–200 prose | 100–300    | ✓      |
| Complete Answers  | 111/111 (100%) | 100%       | ✓      |
| Anchor links (#)  | 0              | 0 required | ✓      |

**Answer Quality Score:** 25/25

All answers stand alone — every question can be read and understood without flipping to another page. Every answer either summarizes the relevant concept *and* points to the chapter file, or (for "Getting Started" questions) points to the course-description and chapter-index files.

## Concept Coverage

The FAQ covers the headline concepts from every one of the 25 chapters at least once, with deeper coverage in the chapters most likely to draw student questions (Foundations, Data, AI, Knowledge Graphs, ENS).

**Strongly covered chapters (3+ questions):**

- Chapter 1: Foundations of Information Systems
- Chapter 6: Data Management Foundations
- Chapter 7: Modern Databases and Lakehouses
- Chapter 9: Business Intelligence and Analytics
- Chapter 12: Cloud Computing and Infrastructure
- Chapter 14: Security of Information Assets
- Chapter 15: Privacy, Compliance, and Regulation
- Chapter 16: IS Project Management
- Chapter 17: IT Service Management
- Chapter 19: AI in Information Systems
- Chapter 20: Responsible AI
- Chapter 21: AI Law
- Chapter 22: AI Security
- Chapter 23: AI Productivity
- Chapter 24: Knowledge Graphs and the EKG
- Chapter 25: The Enterprise Nervous System

**Lightly covered chapters (1–2 questions, candidates for expansion):**

- Chapter 2: The Role of IS in Organizations
- Chapter 8: Data Governance and Quality
- Chapter 11: Networks and Telecommunications
- Chapter 18: HCI and Emerging Topics

**Coverage Score:** 22/30

## Organization Quality

- Logical categorization: ✓ (6 categories aligned with learning progression)
- Progressive difficulty: ✓ (Getting Started → Core → Technical → Challenges → Practices → Advanced)
- No duplicate questions: ✓
- Clear, searchable phrasing: ✓ (every question is a complete interrogative)

**Organization Score:** 20/20

## Overall Quality Score: 88/100

| Dimension            | Score |
|----------------------|------:|
| Coverage             | 22/30 |
| Bloom's Distribution | 23/25 |
| Answer Quality       | 25/25 |
| Organization         | 20/20 |
| **Total**            | **88/100** |

## Recommendations

### High Priority

1. **Add 2–3 questions for Chapter 2 (Role of IS in Organizations)** — value chains, IS governance frameworks (COBIT, ITIL), the CIO/CDO/CISO trio, IS ethics. These are likely interview questions for IS undergraduates and currently underrepresented.
2. **Add 2 questions for Chapter 8 (Data Governance)** — data stewardship, data quality dimensions, the relationship between MDM and data governance. The single MDM question covers part of this but governance deserves its own treatment.
3. **Add 2 questions for Chapter 11 (Networks and Telecommunications)** — bandwidth/latency/throughput at a managerial level, SD-WAN, capacity planning. These show up in every IS leader's first month.

### Medium Priority

1. Slightly increase **Apply**-level questions (currently 14% vs ~20% target) by adding "How would I implement…" framings to existing concept questions.
2. Add 1–2 questions on **emerging topics** (sustainable IT, data mesh) from Chapter 18.
3. Consider adding a **glossary build** (the FAQ currently substitutes for a glossary in many places; a real glossary would let the FAQ trim definitional load and add more practice-oriented questions).

### Low Priority

1. Add a **"Capstone Projects"** sub-section to Getting Started for students whose program uses the textbook as a capstone reader.
2. Track which questions are most-clicked in the deployed site and re-rank or expand the popular ones.

## Suggested Additional Questions

Based on chapter coverage gaps, consider adding:

1. *"What is COBIT and how does it relate to ITIL?"* — Chapter 2 (Technical Details)
2. *"What does a CIO do that a CTO doesn't?"* — Chapter 2 (Core Concepts)
3. *"What are the dimensions of data quality?"* — Chapter 8 (Core Concepts)
4. *"What is data lineage and why does it matter?"* — Chapter 8 (Best Practices)
5. *"What is the difference between bandwidth, latency, and throughput?"* — Chapter 11 (Technical Details)
6. *"What is SD-WAN and when should I use it?"* — Chapter 11 (Best Practices)
7. *"What is data mesh?"* — Chapter 18 (Advanced Topics)
8. *"What is sustainable IT?"* — Chapter 18 (Advanced Topics)
9. *"How do I write effective acceptance criteria?"* — Chapter 10 (Best Practices)
10. *"How do I run an effective stakeholder workshop?"* — Chapter 16 (Best Practices)

## Validation Summary

- **Uniqueness:** No duplicate or near-duplicate questions detected.
- **Link Validation:** All 107+ in-answer links point to file paths only — **zero anchor (`#`) links**.
- **Reading Level:** Targeted at college sophomores/juniors (Flesch–Kincaid grade 11–13).
- **Technical Accuracy:** Cross-referenced against course description and chapter content.
- **Completeness:** Every answer stands alone without requiring an external lookup.

## Provenance

- Generator skill: `faq-generator`
- Build script for JSON: `docs/learning-graph/build_faq_json.py`
- Inputs: `docs/course-description.md`, `docs/learning-graph/learning-graph.csv`, all `docs/chapters/*/index.md`
- Note: No `docs/glossary.md` existed at generation time; the FAQ contains definitional load that a future glossary will partly absorb.
