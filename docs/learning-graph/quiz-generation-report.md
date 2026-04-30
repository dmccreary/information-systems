# Quiz Generation Quality Report

**Generated:** 2026-04-29
**Skill version:** quiz-generator v0.4
**Execution mode:** Serial (1 agent for all 25 chapters)

## Overall Statistics

| Metric                       | Value      |
|------------------------------|------------|
| Total chapters quizzed       | 25         |
| Total questions              | 250        |
| Questions per chapter        | 10 (exact) |
| Format compliance            | 100%       |
| `??? question` admonition    | 25/25      |
| `<div class="upper-alpha">`  | 25/25      |
| Files written                | 25/25      |
| Overall quality score        | 82 / 100   |

## Per-Chapter Summary

| # | Chapter                                | Questions | A | B | C | D |
|---|----------------------------------------|-----------|---|---|---|---|
| 1 | Foundations of Information Systems     | 10 | 2 | 3 | 4 | 1 |
| 2 | The Role of IS in Organizations        | 10 | 2 | 4 | 2 | 2 |
| 3 | Information Systems Architecture       | 10 | 2 | 4 | 2 | 2 |
| 4 | Application Development for IS         | 10 | 3 | 4 | 2 | 1 |
| 5 | Business Process Management            | 10 | 2 | 3 | 3 | 2 |
| 6 | Data Management Foundations            | 10 | 2 | 3 | 3 | 2 |
| 7 | Modern Databases and Lakehouses        | 10 | 3 | 3 | 3 | 1 |
| 8 | Data Governance and Quality            | 10 | 3 | 3 | 3 | 1 |
| 9 | Business Intelligence and Analytics    | 10 | 2 | 4 | 2 | 2 |
| 10 | Systems Analysis and Design           | 10 | 3 | 2 | 4 | 1 |
| 11 | Networks and Telecommunications       | 10 | 3 | 4 | 2 | 1 |
| 12 | Cloud Computing and Infrastructure    | 10 | 2 | 3 | 3 | 2 |
| 13 | Enterprise Systems                    | 10 | 2 | 4 | 3 | 1 |
| 14 | Security of Information Assets        | 10 | 2 | 4 | 2 | 2 |
| 15 | Privacy, Compliance, and Regulation   | 10 | 3 | 4 | 2 | 1 |
| 16 | IS Project Management                 | 10 | 3 | 4 | 2 | 1 |
| 17 | IT Service Management and Operations  | 10 | 3 | 2 | 4 | 1 |
| 18 | HCI and Emerging Topics               | 10 | 3 | 4 | 2 | 1 |
| 19 | AI in Information Systems             | 10 | 3 | 3 | 3 | 1 |
| 20 | Responsible and Ethical Use of AI     | 10 | 3 | 3 | 2 | 2 |
| 21 | AI Law, Regulation, and Compliance    | 10 | 3 | 3 | 3 | 1 |
| 22 | AI and Information Security           | 10 | 3 | 3 | 2 | 2 |
| 23 | AI Productivity Impact                | 10 | 2 | 3 | 3 | 2 |
| 24 | Knowledge Graphs and the EKG          | 10 | 2 | 3 | 3 | 2 |
| 25 | The Enterprise Nervous System         | 10 | 3 | 2 | 3 | 2 |

## Bloom's Taxonomy Distribution by Tier

Quizzes were generated against three difficulty tiers, matched to where each
chapter sits in the book.

### Introductory tier — Chapters 1–3

Per-chapter target: 4 Remember / 4 Understand / 1 Apply / 1 Analyze.

The introductory tier emphasizes vocabulary and conceptual comprehension —
the foundation students need before any of the deeper material in Parts II–VII
makes sense.

### Intermediate tier — Chapters 4–18

Per-chapter target: 2–3 Remember / 3 Understand / 3 Apply / 1–2 Analyze.

The intermediate tier shifts weight onto *Apply* and *Analyze*, reflecting
the hands-on character of the database, networking, security, project
management, and BPM chapters. Students should be able to walk into a
real-world scenario and pick the right approach.

### Advanced tier — Chapters 19–25

Per-chapter target: 1–2 Remember / 2 Understand / 2–3 Apply / 2–3 Analyze /
1 Evaluate / 0–1 Create.

The AI / EKG / ENS chapters target the highest cognitive levels —
students must judge competing AI deployments, weigh regulatory regimes,
and design event-driven architectures. *Evaluate* and *Create* questions
appear here because the chapters themselves call for judgment and synthesis.

## Aggregate Answer Distribution

| Choice | Count | % of total | Target band (20–30%) |
|--------|-------|-----------:|----------------------|
| A      | 64    | 25.6%      | within band          |
| B      | 82    | 32.8%      | **above band (+2.8)** |
| C      | 67    | 26.8%      | within band          |
| D      | 37    | 14.8%      | **below band (–5.2)** |
| Total  | 250   | 100%       |                      |

**Answer balance score: 11 / 15.** A and C are well-distributed. B is
slightly over-represented and D is meaningfully under-represented. No
single chapter shows a clustering pattern (e.g. AAAA or strict ABAB
alternation), so the imbalance is corpus-wide rather than localized.

## Concept Coverage

Each quiz tests 10 distinct concepts, drawn from the chapter's headings,
bold terms, and explicit concept lists. Across the 25 chapters this gives
**~250 concept-touch events** against a learning graph of ~580 concepts —
roughly 43% of the graph receives at least one direct quiz question, with
the remainder reinforced through chapter prose and FAQ entries.

Priority-1 concepts (chapter title concepts and high-centrality concepts)
were tested at high rates. Peripheral concepts were generally exercised
via distractors rather than as the focus of a question.

## Quality Validation

| Check                                    | Result   |
|------------------------------------------|----------|
| 10 questions per chapter                 | 25 / 25  |
| `<div class="upper-alpha" markdown>`     | 250 / 250 |
| Numbered (not lettered) options          | 250 / 250 |
| `??? question "Show Answer"` admonition  | 250 / 250 |
| Bolded answer letter `**X**`             | 250 / 250 |
| `**Concept Tested:**` line               | 250 / 250 |
| Explanation present                      | 250 / 250 |
| `**See:**` source links omitted (per spec) | 250 / 250 |
| "All of the above" / "None of the above" | 0 (good) |
| American English spelling                | clean    |
| Duplicate questions across chapters      | none observed |

## Recommendations

1. **Rebalance D-position correct answers in a future pass.** D appears
   in 15% of correct slots versus the 20–30% target. A targeted pass
   that rotates ~10 correct answers from B-position to D-position would
   bring all four options into the target band without rewriting any
   questions. Easy follow-up work.
2. **Optional source links.** The skill's `**See:**` link feature was
   intentionally omitted on this run because no verified anchor map
   exists between concepts and chapter section IDs. When the chapters
   gain stable section IDs (or when an explicit concept→anchor map is
   built), a follow-up pass can add `**See:**` links to every question.
3. **Consider a periodic rerun.** As chapter prose evolves the quiz
   bank should evolve with it. A reasonable cadence is one rerun per
   semester or after any chapter sees substantive revision (>20% word
   change).

## Files Created

All quiz files live alongside their chapter `index.md`:

- `docs/chapters/01-foundations/quiz.md`
- `docs/chapters/02-role-of-is/quiz.md`
- `docs/chapters/03-architecture/quiz.md`
- `docs/chapters/04-appdev/quiz.md`
- `docs/chapters/05-bpm/quiz.md`
- `docs/chapters/06-data-foundations/quiz.md`
- `docs/chapters/07-modern-databases/quiz.md`
- `docs/chapters/08-data-governance/quiz.md`
- `docs/chapters/09-bi-and-analytics/quiz.md`
- `docs/chapters/10-sad/quiz.md`
- `docs/chapters/11-networks/quiz.md`
- `docs/chapters/12-cloud/quiz.md`
- `docs/chapters/13-enterprise-systems/quiz.md`
- `docs/chapters/14-security/quiz.md`
- `docs/chapters/15-privacy-compliance/quiz.md`
- `docs/chapters/16-project-management/quiz.md`
- `docs/chapters/17-itsm/quiz.md`
- `docs/chapters/18-hci-and-emerging/quiz.md`
- `docs/chapters/19-ai-in-is/quiz.md`
- `docs/chapters/20-responsible-ai/quiz.md`
- `docs/chapters/21-ai-law/quiz.md`
- `docs/chapters/22-ai-security/quiz.md`
- `docs/chapters/23-ai-productivity/quiz.md`
- `docs/chapters/24-knowledge-graphs/quiz.md`
- `docs/chapters/25-ens/quiz.md`
