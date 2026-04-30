# Quiz: Responsible and Ethical Use of AI

Test your understanding of NIST AI RMF, ISO/IEC 42001, fairness, transparency, and the operating practices of responsible AI.

---

#### 1. The NIST AI Risk Management Framework organizes AI risk management around four core functions:

<div class="upper-alpha" markdown>
1. Plan, Build, Run, Retire
2. Govern, Map, Measure, Manage
3. Define, Measure, Analyze, Improve
4. Identify, Protect, Detect, Respond
</div>

??? question "Show Answer"
    The correct answer is **B**. NIST AI RMF (1.0, 2023) organizes its activities into four functions: Govern (organizational culture and oversight), Map (context and risk identification), Measure (assessment and monitoring), and Manage (prioritization and response). The other lists are real frameworks for other purposes — DMAIC (Six Sigma), NIST CSF (cybersecurity), and a generic SDLC list.

    **Concept Tested:** NIST AI RMF

---

#### 2. ISO/IEC 42001 is best characterized as:

<div class="upper-alpha" markdown>
1. A specific cloud product
2. A regulation only for healthcare
3. A type of model architecture
4. A management-system standard for AI, providing certifiable requirements for organizations to govern AI systems responsibly
</div>

??? question "Show Answer"
    The correct answer is **D**. ISO/IEC 42001 (2023) provides a certifiable management-system standard for artificial intelligence, parallel to ISO 27001 for information security. Organizations can be certified against it. The other options misstate the standard's scope and purpose.

    **Concept Tested:** ISO IEC 42001

---

#### 3. A bias audit on a hiring AI model finds that the model's recommend rate for one demographic group is meaningfully lower than for another, given equivalent qualifications. Evaluating possible responses, which is most appropriate?

<div class="upper-alpha" markdown>
1. Investigate root causes (training data, features, labels), apply fairness mitigations where feasible, document tradeoffs explicitly, and consider whether the model should be deployed at all for high-stakes hiring
2. Ignore the finding and ship the model
3. Hide the finding from the AI ethics committee
4. Increase the model's training data volume without further analysis and assume the issue resolves itself
</div>

??? question "Show Answer"
    The correct answer is **A**. Responsible response to bias findings combines root-cause analysis (where does the disparity come from?), targeted mitigation (data, features, post-processing), explicit documentation of tradeoffs, and a deployment decision that takes the residual risk seriously — including the option not to deploy. The other options ignore, conceal, or oversimplify the response.

    **Concept Tested:** Bias Audit

---

#### 4. Explainability in AI primarily refers to:

<div class="upper-alpha" markdown>
1. Marketing copy explaining the AI product to executives
2. The model's training cost
3. The ability to provide humans with understandable reasons for an AI system's outputs or decisions, often at varying technical depths for different audiences
4. The number of GPUs used during training
</div>

??? question "Show Answer"
    The correct answer is **C**. Explainability covers techniques and practices that make AI outputs understandable — feature importance, counterfactuals, rationale text, transparent rules — at appropriate fidelity for the audience (data scientist, end user, regulator). It supports accountability, debugging, and contestability of decisions. The other options miss the concept.

    **Concept Tested:** Explainability

---

#### 5. "Shadow AI" describes:

<div class="upper-alpha" markdown>
1. A specific deep-learning architecture
2. The dark mode on AI applications
3. AI usage by employees outside sanctioned tools and policies — for example, pasting customer data into unsanctioned chatbots or using personal accounts for company work
4. AI systems trained on synthetic data only
</div>

??? question "Show Answer"
    The correct answer is **C**. Shadow AI is the AI parallel of shadow IT — employees using AI tools outside organizational oversight. It creates real risks (data leakage, IP exposure, compliance violations) but cannot be eliminated by edict. The chapter's framing is to combine sanctioned tools, clear acceptable-use policies, training, and monitoring rather than blanket bans.

    **Concept Tested:** Shadow AI

---

#### 6. An AI Inventory most directly supports which responsible-AI practice?

<div class="upper-alpha" markdown>
1. Compiling source code faster
2. Knowing what AI systems exist in the organization, who owns them, what they do, and what risks they carry — so risk decisions can be made at all
3. Marketing AI capabilities to customers
4. Replacing the data catalog
</div>

??? question "Show Answer"
    The correct answer is **B**. You cannot govern what you cannot see. An AI inventory captures every AI system in the organization with owner, purpose, data sources, risk classification, and lifecycle stage. Without it, AI governance is theater. The other options misstate the inventory's purpose.

    **Concept Tested:** AI Inventory

---

#### 7. A team is preparing to deploy an AI system that may affect the rights or safety of individuals. The structured analysis they should perform first is:

<div class="upper-alpha" markdown>
1. An AI Impact Assessment that documents intended use, affected populations, potential harms, mitigations, and residual risk
2. A standard performance benchmark only
3. A pricing review
4. A vendor T-shirt size estimate
</div>

??? question "Show Answer"
    The correct answer is **A**. AI Impact Assessments (related to PIAs in privacy and DPIAs in GDPR) systematically analyze who is affected, what harms are possible, and what mitigations apply, before deployment. They are increasingly required by regulation (EU AI Act for high-risk systems) and best practice. Performance benchmarks alone do not surface human-impact risks.

    **Concept Tested:** AI Impact Assessment

---

#### 8. A "datasheet for datasets" provides:

<div class="upper-alpha" markdown>
1. The Excel formulas inside a spreadsheet
2. A type of secure database
3. The hardware specs of a server
4. Standardized documentation of a training dataset's motivation, composition, collection process, preprocessing, intended uses, and known limitations
</div>

??? question "Show Answer"
    The correct answer is **D**. Datasheets for datasets (Gebru et al., 2018) bring the discipline of nutrition labels to training data — documenting how the dataset was collected, who is in it, what the labels mean, and how it should and should not be used. Adoption is uneven but increasing. The other options misread the artifact.

    **Concept Tested:** Datasheet for Datasets

---

#### 9. An organization defines tiers of human oversight for AI systems — autonomous, human-on-the-loop (review high-risk outputs), human-in-the-loop (approve every output), and not-deployed. Evaluating this design, what is the strongest argument for the tiered approach?

<div class="upper-alpha" markdown>
1. The tiers cost the same to operate
2. Different decision contexts have different stakes; tying oversight intensity to impact lets the organization use AI broadly while keeping high-stakes decisions appropriately supervised
3. Tiers eliminate any need for monitoring
4. The tiers are required by every privacy law
</div>

??? question "Show Answer"
    The correct answer is **B**. Tiered oversight matches scrutiny to impact: low-impact routine decisions can be largely autonomous; high-impact contestable decisions warrant human review or non-deployment. Without tiering, organizations either over-supervise everything (and never benefit from AI) or under-supervise critical decisions. The other options misjudge cost, monitoring needs, and the regulatory landscape.

    **Concept Tested:** Human Oversight Tier

---

#### 10. A team is designing an AI Acceptable Use Policy. Creating an effective policy requires balancing several tensions. Which set of design choices best fits the chapter's guidance?

<div class="upper-alpha" markdown>
1. Sanctioned tool list with secure default access, clear data-class rules, examples of allowed and prohibited uses, training, an exception process, and monitoring — supporting safe AI use rather than blanket prohibition
2. A blanket ban on all AI use, with no exceptions
3. A one-page policy that simply says "use good judgment"
4. A policy applying only to engineers, not to other employees
</div>

??? question "Show Answer"
    The correct answer is **A**. An effective AUP enables safe AI adoption by combining sanctioned tools, clear data-handling rules, concrete examples, training, an exception path, and ongoing monitoring. Blanket bans drive shadow AI; vague policies provide no guidance; engineer-only policies miss most of the actual usage. Creating a workable policy is design work, not paperwork.

    **Concept Tested:** AI Acceptable Use Policy

---
