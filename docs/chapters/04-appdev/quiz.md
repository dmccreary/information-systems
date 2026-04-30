# Quiz: Application Development for IS

Test your understanding of how IS organizations build, buy, and rent the applications that run the business.

---

#### 1. The Software Development Life Cycle (SDLC) is best understood as:

<div class="upper-alpha" markdown>
1. The list of activities every method must address — planning, requirements, design, implementation, testing, deployment, and maintenance
2. A specific brand of project management software
3. A waterfall-only model that agile methods replaced entirely
4. The vendor lifecycle for SaaS products
</div>

??? question "Show Answer"
    The correct answer is **A**. The SDLC is the activity list every methodology has to handle somehow. Methods differ in sequencing and ceremony, but no method gets to skip planning, requirements, design, implementation, testing, deployment, or maintenance. Teams that "skip" requirements have only skipped writing them down — the requirements still exist, ready to ambush the project.

    **Concept Tested:** SDLC

---

#### 2. Which of the following best describes when the Waterfall Model is most appropriate?

<div class="upper-alpha" markdown>
1. Building consumer-facing mobile apps with rapidly changing requirements
2. Internal business tools where users discover what they need by seeing prototypes
3. Regulated, safety-critical systems where requirements are well understood and the cost of mid-project change is enormous
4. Any project run by an inexperienced team
</div>

??? question "Show Answer"
    The correct answer is **C**. Waterfall works well when requirements are genuinely understood up front, the cost of change is high, and the deliverable must be certified or audited as a whole — flight-control software, regulated medical devices, satellite firmware. It breaks down on business applications where requirements are discovered through iteration, which is why agile methods came to dominate that space.

    **Concept Tested:** Waterfall Model

---

#### 3. In Scrum, what is the primary purpose of the Sprint Retrospective?

<div class="upper-alpha" markdown>
1. To demo the working increment to external stakeholders
2. For the team to inspect its own process and decide what to change
3. To assign individual blame for missed sprint commitments
4. To plan which items will be tackled in the upcoming sprint
</div>

??? question "Show Answer"
    The correct answer is **B**. The retrospective is held at the end of each sprint and is for the team only. The team asks: what went well, what did not, what will we change next sprint? It is the engine of continuous improvement. Demoing the increment is the Sprint Review (a separate event), and planning the next sprint's items is Sprint Planning. Retrospectives are not for assigning blame.

    **Concept Tested:** Sprint Retrospective

---

#### 4. The Kanban Method is most distinctive for its emphasis on:

<div class="upper-alpha" markdown>
1. Fixed two-week iterations with formal sprint goals
2. Pair programming and test-driven development
3. Big up-front design before any coding begins
4. Limiting work-in-progress (WIP) and managing flow continuously
</div>

??? question "Show Answer"
    The correct answer is **D**. Kanban centers on WIP limits and the continuous flow of work across stages of a board. It originated at Toyota and was adapted to knowledge work. Fixed iterations are the hallmark of Scrum; pair programming and TDD are XP practices; big up-front design is more associated with waterfall. Kanban is well suited to unpredictable arrival rates like support and operations work.

    **Concept Tested:** Kanban Method

---

#### 5. Which of the following is best classified as a non-functional requirement?

<div class="upper-alpha" markdown>
1. The system must allow customers to reset their password by email link
2. The system must calculate sales tax based on the shipping address
3. The page must load in under 2 seconds at the 95th percentile
4. The system must flag insurance claims over $50,000 for human review
</div>

??? question "Show Answer"
    The correct answer is **C**. Non-functional requirements describe *how well* the system performs its functions — performance, availability, security, scalability, and similar quality attributes. The page-load latency requirement is a performance NFR. The other three describe specific behaviors the system must perform, which makes them functional requirements.

    **Concept Tested:** Non-Functional Requirement

---

#### 6. A user story is written: "As a returning customer, I want to save my shipping address." What important element is missing from this story?

<div class="upper-alpha" markdown>
1. The "so that…" clause explaining the benefit
2. The technical implementation plan
3. The estimated number of hours
4. The name of the developer assigned
</div>

??? question "Show Answer"
    The correct answer is **A**. The canonical user story template is "As a [user], I want [capability], so that [benefit]." The "so that…" clause is what justifies the work — if you cannot articulate the benefit, you have a feature request rather than a story. Technical plans, hour estimates, and developer assignments are not part of the story format itself; they belong in task breakdowns and planning artifacts.

    **Concept Tested:** User Story

---

#### 7. A team merges every developer's changes into the shared main branch many times per day, with each merge automatically triggering a build and full test run. What practice are they following?

<div class="upper-alpha" markdown>
1. Continuous Delivery
2. Continuous Integration
3. Waterfall verification
4. Sprint retrospective
</div>

??? question "Show Answer"
    The correct answer is **B**. Continuous Integration is the practice of merging changes frequently with automated build and test on every push, surfacing conflicts when they are small. Continuous Delivery extends CI by automating the deployment pipeline so that any green build is in principle deployable. Waterfall verification and sprint retrospectives are unrelated to merge-and-test cadence.

    **Concept Tested:** Continuous Integration

---

#### 8. A retailer needs an email server, a payroll system, and a recommendation engine that will be a key competitive differentiator. Applying the build/buy/SaaS heuristic from the chapter, which combination is most appropriate?

<div class="upper-alpha" markdown>
1. Build all three in-house for maximum control
2. SaaS for email, SaaS or buy for payroll, build the recommendation engine
3. Buy all three from a single vendor to simplify procurement
4. SaaS for the recommendation engine; build email and payroll in-house
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's heuristic: build only what is a true differentiator, and buy or SaaS the commodity capabilities. Email and payroll are commodities (use Microsoft 365 or Google Workspace, ADP or Workday). The recommendation engine, if it is a real competitive differentiator, is exactly the kind of capability that justifies an in-house build. The other options invert this logic.

    **Concept Tested:** Build vs Buy vs SaaS

---

#### 9. A marketing manager builds a campaign-tracking app in Power Apps without any IT involvement. The app accumulates production data and becomes load-bearing for the team. Which combination of risks is the chapter most concerned about?

<div class="upper-alpha" markdown>
1. The app cannot be migrated to a different cloud provider
2. Shadow IT, single-points-of-failure, security/compliance gaps, and integration sprawl
3. The cost of low-code licenses will exceed traditional development costs
4. Citizen developers will demand higher salaries
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter explicitly identifies these four unintended consequences of unmanaged citizen development: shadow IT, single points of failure (the app's only author leaves), security and compliance gaps, and integration sprawl. The structural fix is a fusion model — sanctioned platforms, clear data classifications, and partnership with citizen developers — not banning the practice.

    **Concept Tested:** Citizen Developer

---

#### 10. A team consistently meets short-term deadlines by hard-coding values, skipping refactoring, and deferring dependency upgrades. Six quarters later their velocity has fallen by half and bug rates are rising. Analyzing this with the chapter's framework, which best describes what is happening?

<div class="upper-alpha" markdown>
1. The reinforcing feedback loop of technical debt: shortcuts produce schedule pressure, which produces more shortcuts, which produces more debt
2. A normal seasonal slowdown in productivity that will reverse on its own
3. A waterfall problem that will be fixed by adopting Scrum
4. A staffing issue best solved by hiring more developers
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter describes technical debt as a reinforcing feedback loop: high debt slows development, which creates schedule pressure, which tempts more shortcuts, which adds more debt. Breaking the loop requires protected refactor capacity, debt visibility as a first-class artifact, and engineering leadership cover. Hiring more developers without addressing the underlying loop typically accelerates the problem.

    **Concept Tested:** Technical Debt

---
