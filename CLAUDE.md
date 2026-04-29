# CLAUDE.md — Information Systems Textbook

Project-specific instructions. These ride on top of the global rules in
`~/.claude/CLAUDE.md`.

## What this project is

An ABET CAC-aligned, AI-forward intelligent textbook on Information
Systems for college sophomores and juniors. 580 concepts, 25 chapters,
seven parts ranging from "what is data?" to "what is an Enterprise
Nervous System?" — see `logs/chapter-design.md` for the full design
rationale.

The mascot is **Iris the Hummingbird** (emerald-green back, ruby-magenta
gorget, wire-rim glasses).

## Tone and Voice

This book is **lighthearted, funny, fun, playful** with a great sense
of humor. **Do not take yourself too seriously.** Tell a joke now and
then. Be positive and optimistic.

The thesis the prose should keep reinforcing:

> **IS can be fun. Managing IS can become your superpower.**

Practical guidance for any prose you generate (chapter content, FAQs,
glossary entries, quiz feedback, captions):

- **Be warm, not stiff.** Avoid the dry corporate-training voice. Write
  like the smartest, most enthusiastic TA the student ever had — one
  who genuinely thinks ERP cutover plans are interesting and is going
  to convince the reader of it too.
- **Use playful examples.** When you need a fictional company, a
  fictional dataset, or a fictional incident, lean into it. "Banana
  Republic Bank just discovered their primary key is *also* their
  customer's birthday — let's talk about why that's three different
  kinds of bad."
- **Slip in the occasional joke or pun.** One good groaner per
  long-form section is plenty. Database normalization jokes, ITIL
  jokes, ERP-customization jokes, prompt-injection jokes — all fair
  game. Don't force it; if no joke is naturally available, skip it.
- **Be optimistic about the field.** IS is genuinely one of the most
  leverage-rich careers a student can pick. Say so. The reader who
  finishes this book should believe they can run a help desk, design a
  data warehouse, ship a RAG prototype, *and* explain to a CFO why any
  of that matters.
- **Frame difficulty as a power-up.** Hard concepts are not warnings;
  they are the parts that turn into superpowers later. "GraphRAG is
  weird the first time you see it. That's because it's about to give
  you an unfair advantage."
- **Avoid cynicism.** No "vendors will lie to you" or "your boss won't
  understand" snark — even when it's true, it's not the voice this
  book wants. Replace cynicism with *equipped realism*: "Vendors
  optimize their own demos; here are the four questions that cut
  through that."
- **Skip throat-clearing.** No "In today's fast-paced world…" intros.
  Just start.
- **Use Iris sparingly and on purpose.** See the mascot rules below.

## Systems Thinking Throughout the Book

When generating any chapter content, **actively look for ways to teach
systems thinking** — the discipline of looking at an information system
*holistically*, as a set of interacting parts whose behavior emerges from
the relationships among them, not from any single component.

Concretely, this means every chapter should try to do at least one of
the following whenever the topic naturally allows it:

- **Frame the topic holistically.** A change to a database isn't just a
  database change — it ripples to the application, the users, the
  reporting layer, the audit trail, and the on-call rotation. Show the
  ripple. Resist the urge to reduce a system to a single component.
- **Surface tradeoffs explicitly.** Almost every IS design decision is
  a tradeoff (consistency vs. availability, build vs. buy, normalize vs.
  denormalize, centralize vs. decentralize, automate vs. human-in-the-loop).
  Name the axes. A reader who can articulate the tradeoff is a reader
  who can defend a recommendation in a meeting.
- **Watch for unintended consequences.** Systems push back. Tightening
  a security control creates shadow IT. Adding a metric warps the
  behavior being measured (Goodhart's Law). Speeding up one stage of a
  process exposes the bottleneck at the next stage. When a topic has a
  classic unintended-consequence pattern, point it out — these are the
  stories students remember.
- **Identify leverage points.** Borrow Donella Meadows' framing where
  it fits: small, well-placed interventions can produce large changes,
  and the highest-leverage points are usually *not* the obvious
  technical ones. (Changing a goal beats tuning a parameter. Changing
  the rules beats changing the goal. Changing the paradigm beats them
  all.) When a chapter's topic includes a high-leverage point, flag it.
- **Use causal/feedback framing.** Where a chapter naturally exhibits
  feedback loops (e.g. AI productivity → measurement → reinvestment;
  data quality → trust → adoption → more data), specify a causal loop
  diagram in a `<details>` block. Systems thinking is a *visual*
  discipline as much as a verbal one.

The goal isn't to turn every chapter into a systems-dynamics treatise.
It's to keep the reader trained to ask three questions on every topic:
*"What else does this touch?"*, *"What's the tradeoff?"*, and *"Where
does this surprise us?"* A graduate of this textbook should reflexively
look for second- and third-order effects, and should never optimize
one component without asking what else moves.

## Mascot Placement Rules (Iris the Hummingbird)

Mascot images live in `docs/img/mascot/` and are rendered through the
custom CSS admonition classes in `docs/css/mascot.css`. Use the
`md_in_html` extension; image goes inside the admonition body, never
the title bar.

### The seven poses and when to use each

| Admonition class       | Image filename     | Use for                                                                  |
|------------------------|--------------------|--------------------------------------------------------------------------|
| `mascot-welcome`       | `welcome.png`      | The opening admonition of **every chapter** — Iris greets the reader.    |
| `mascot-thinking`      | `thinking.png`     | Key insights — the moments you want the reader to *pause and notice*.    |
| `mascot-tip`           | `tip.png`          | Practical tips, shortcuts, and "here's how a pro would do it" asides.    |
| `mascot-warning`       | `warning.png`      | Common pitfalls and footguns — gentle, never alarmist.                   |
| `mascot-encourage`     | `encouraging.png`  | Right before or during a hard concept the reader might bounce off.       |
| `mascot-celebration`   | `celebration.png`  | End-of-chapter "you made it" recap, or after a tough exercise.           |
| `mascot-neutral`       | `neutral.png`      | General-purpose narration; default if no other pose fits.                |

Canonical syntax (note the relative path depth: from
`docs/chapters/NN-slug/index.md` the mascot dir is `../../img/mascot/`):

```markdown
!!! mascot-tip "Iris's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    When you feel the urge to denormalize, write down *which query* you're
    optimizing for. If you can't name the query, you're not denormalizing —
    you're just creating a future bug with extra steps.
```

### Frequency rules — restraint matters

- **Maximum 5–6 mascot admonitions per chapter.** More than that and
  Iris stops being a friend and starts being wallpaper.
- **Exactly one `mascot-welcome` at the start** of each chapter and
  **exactly one `mascot-celebration` at the end**. These two are
  expected; everything else is earned.
- **Never two mascot admonitions back-to-back.** Always at least a few
  paragraphs of regular prose between them.
- **Never inside every admonition or callout.** Plain `!!! note`, `!!! info`,
  `!!! warning` admonitions still exist and should carry most of the
  callout load. The mascot is the *exception*, not the default.
- **Never as decoration.** If removing the mascot admonition would not
  hurt the chapter, the mascot admonition should not be there.
- **Use `mascot-neutral` last.** If you find yourself reaching for
  `neutral` because nothing else fits, ask whether the admonition
  belongs at all.

### Iris's voice inside admonitions

When Iris "speaks" in an admonition, she should sound like the rest of
the book — warm, playful, slightly irreverent — and like a hummingbird
who has, somehow, read every IS textbook. A few touchstones:

- **Welcome:** "Welcome back. We're going to do some genuinely fun
  things with graphs in this chapter, and by the end you'll know why
  your CRM and your ERP have been quietly lying to each other."
- **Thinking:** "Pause. This next idea — the difference between
  *informating* and *transforming* — is the one that turns into your
  first promotion. Read it twice."
- **Tip:** "Pro move: when a vendor demo is going suspiciously well,
  ask to see the audit log."
- **Warning:** "Heads up — this is the part where about 80% of
  data-warehouse projects start to wobble. Slow down here."
- **Encourage:** "Yes, this looks intimidating. So did your first SQL
  JOIN. You will love it in two weeks."
- **Celebration:** "You just learned more about Enterprise Knowledge
  Graphs than 95% of the people whose business cards say 'Data
  Architect.' Take the win."

### Image hygiene

- All mascot PNGs must have a **fully transparent background** (no
  white, no black, no checkerboard).
- Run the `book-installer` `trim-padding-from-image.py` script after
  generating any new mascot image — untrimmed PNGs render much smaller
  than intended inside the admonition box.
- Keep `docs/learning-graph/mascot-render-test.md` working. It's the
  canary page; if any mascot image regresses (padding, background,
  contrast), it shows up there first.

## Repository conventions

- Chapter directories live in `docs/chapters/NN-slug/index.md` (where
  `NN` is two-digit, zero-padded). The slug is lowercase-with-dashes.
- The `chapters/` index page is a true landing page (a "List of
  Chapters" with the seven parts), not a redirect.
- Learning graph data, scripts, and reports live in
  `docs/learning-graph/`. The viewer MicroSim is at
  `docs/sims/graph-viewer/`.
- Generation logs (chapter design, learning-graph generation runs) go
  in `logs/` with a descriptive filename.
- Every chapter `index.md` keeps the literal concept list from the
  learning graph, in stable order, so downstream skills (chapter
  content, quizzes, glossary) can re-read it without ambiguity.

## Things to avoid

- **Don't drop the chapter concept lists** when generating chapter
  prose later. The list is load-bearing for the quiz-generator and the
  glossary-generator. If a concept gets covered under a different
  heading than its label, that's fine — but it must still appear by
  name somewhere in the chapter.
- **Don't add `navigation.tabs`** to `mkdocs.yml`. Global rule, also
  applies here.
- **Don't put mascot icons in admonition titles.** Body only, with the
  `mascot-admonition-img` class. The CSS depends on this.
- **Don't write 800-word "comprehensive overview" intros.** Open
  fast, get to the first interesting idea inside three paragraphs.
- **Don't be afraid of the AI material.** Half the book is about AI.
  Treat it as core curriculum, not as a special exhibit.
