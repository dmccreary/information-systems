# Quiz: AI Productivity Impact

Test your understanding of how AI is reshaping IS work — from help desks to development to operations and the workforce.

---

#### 1. Intelligent ticket routing in an AI-augmented help desk most directly aims to:

<div class="upper-alpha" markdown>
1. Automatically classify incoming tickets and route them to the team most likely to resolve them, reducing manual triage time
2. Replace all human help-desk agents
3. Prevent users from filing tickets at all
4. Replace the CMDB
</div>

??? question "Show Answer"
    The correct answer is **A**. AI-driven ticket routing classifies incoming tickets by topic, urgency, and required skill, then routes them to the appropriate queue or specialist — reducing the manual triage that historically consumed Tier 1 time. It augments rather than replaces agents and complements (not replaces) the CMDB.

    **Concept Tested:** Intelligent Ticket Routing

---

#### 2. Ticket deflection refers to:

<div class="upper-alpha" markdown>
1. Forwarding tickets to the CFO
2. Shortening every ticket's text artificially
3. Resolving user requests through self-service or AI virtual agents before they need to enter the human-supported queue
4. Hiding tickets from management dashboards
</div>

??? question "Show Answer"
    The correct answer is **C**. Deflection happens when an AI virtual agent or knowledge-base copilot resolves the user's question — often through guided answers from approved sources — without engaging a human agent. Done well, deflection reduces volume on the human queue while still satisfying the user. Done badly, it produces frustrated users and angrier escalations.

    **Concept Tested:** Ticket Deflection

---

#### 3. AI pair programming tools (e.g., Copilot-style assistants) most reliably improve developer productivity when:

<div class="upper-alpha" markdown>
1. Developers blindly accept every suggestion the AI produces
2. Developers treat suggestions as drafts to evaluate, retain test discipline, and use AI for boilerplate, exploration, and unfamiliar APIs while applying judgment to consequential code
3. Developers use AI only on weekends
4. Developers disable code review entirely
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's framing is that AI pair programming is most effective when developers retain ownership: AI accelerates routine work, exploration, and unfamiliar APIs, but human review, tests, and judgment remain central. Blind acceptance, weekend-only use, or disabling code review undermine the productivity gains and create new defect sources.

    **Concept Tested:** AI Pair Programmer

---

#### 4. AIOps (AI for IT Operations) primarily applies AI to:

<div class="upper-alpha" markdown>
1. The marketing of IT services
2. Replacing the CFO with a model
3. Designing the company logo
4. Detecting anomalies in operational telemetry, correlating events, predicting incidents, and (cautiously) automating remediation in IT operations
</div>

??? question "Show Answer"
    The correct answer is **D**. AIOps applies ML to operational data — logs, metrics, traces, alerts — to surface anomalies, correlate events, predict incidents, and feed automated runbooks. It is now a standard layer in mature operations practice. The other options are unrelated to AIOps.

    **Concept Tested:** AIOps

---

#### 5. A team is evaluating whether AI-augmented developer productivity is actually improving over time. Which combination best fits the chapter's productivity-measurement framing?

<div class="upper-alpha" markdown>
1. Lines of code written per hour as the primary metric
2. A balanced set of metrics — DORA-style outcomes, defect rates, lead time, developer-experience surveys, and rework rates — measured against a clear baseline, with safeguards against gaming
3. A single dashboard showing only commits per day
4. No measurement at all, since productivity cannot be measured
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's framing is that productivity must be measured with a balanced set of leading and lagging indicators — flow metrics, quality, lead time, developer experience — against a documented baseline, with attention to Goodhart's Law. Single-axis metrics like LOC or commit count distort behavior and miss the harder questions about quality and value.

    **Concept Tested:** Productivity Measurement

---

#### 6. The "baseline and stop-loss" practice in AI productivity initiatives is best described as:

<div class="upper-alpha" markdown>
1. A daily standup ceremony
2. The same as a sprint retrospective
3. A regulatory requirement under HIPAA
4. Establishing the pre-AI baseline metrics, defining target improvements and minimum acceptable thresholds, and committing to roll back or modify the AI initiative if metrics drop below the stop-loss line
</div>

??? question "Show Answer"
    The correct answer is **D**. The discipline is to measure before launching the AI initiative, set both a target and a "if we cross this line, we stop" threshold, and commit to acting on the data. Without baselines and stop-losses, AI initiatives drift on enthusiasm and survive bad evidence. The other options describe unrelated practices.

    **Concept Tested:** Baseline and Stop Loss

---

#### 7. A virtual agent in an enterprise help desk works best when paired with:

<div class="upper-alpha" markdown>
1. No knowledge base at all
2. Random web search results
3. A grounded knowledge base, clear escalation paths to humans, content moderation, conversation logging for review, and continuous tuning based on outcomes
4. A blanket policy of never escalating to humans
</div>

??? question "Show Answer"
    The correct answer is **C**. Effective virtual agents combine grounding (RAG over approved knowledge), a clean escalation path to humans for complex or sensitive cases, content moderation, conversation logging for analysis, and ongoing tuning. Without these, virtual agents either hallucinate or frustrate users into bypassing them entirely.

    **Concept Tested:** Virtual Agent

---

#### 8. AI status synthesis in project management is most useful for:

<div class="upper-alpha" markdown>
1. Replacing human project managers entirely
2. Generating fictitious metrics to please executives
3. Automatically aggregating updates from tools, chats, and documents into a draft status summary that a project manager reviews and adjusts before sharing
4. Eliminating the need for any human review
</div>

??? question "Show Answer"
    The correct answer is **C**. AI status synthesis drafts the recurring status from many fragmented sources, saving the PM the manual aggregation work — but the PM must review for accuracy, judgment, and tone before sharing. The framing preserves accountability and prevents the silent introduction of errors that AI-generated summaries can otherwise inject.

    **Concept Tested:** AI Status Synthesis

---

#### 9. An IS organization launches an AI augmentation program. Evaluating its change-management plan, which combination is most aligned with the chapter's guidance?

<div class="upper-alpha" markdown>
1. Mandate AI use immediately, terminate roles that don't change, and skip training
2. Communicate intent and expected impact, invest in reskilling and new role definitions, redesign work rather than just speed it up, support workforce transitions, and track productivity and morale together
3. Replace the entire organization at once
4. Hide the AI initiative from employees until launch
</div>

??? question "Show Answer"
    The correct answer is **B**. AI change management requires honest communication, role redesign rather than mere speed-up, real reskilling investment, support for transitions where roles do change, and integrated measurement of productivity and morale. The other options either skip the human side entirely or lean on cynical theatrics that produce the very outcomes they claim to avoid.

    **Concept Tested:** AI Change Management

---

#### 10. A reskilling strategy for AI-augmented IS teams is most effective when it:

<div class="upper-alpha" markdown>
1. Combines role mapping (what is changing in each role), targeted training on AI-augmented workflows, hands-on practice with sanctioned tools, mentorship, and clear advancement paths into new specializations
2. Hands every employee a single MOOC and assumes that solves the problem
3. Prioritizes layoffs over training in every case
4. Targets only senior leaders
</div>

??? question "Show Answer"
    The correct answer is **A**. Effective reskilling is structured: it maps how each role is changing, delivers targeted training, lets people practice on real work with real tools, supplies mentorship, and shows credible career paths into the new specializations. Single-MOOC and layoff-first approaches predictably produce attrition and capability gaps.

    **Concept Tested:** Reskilling Strategy

---
