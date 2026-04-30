# Quiz: AI Law, Regulation, and Compliance

Test your understanding of the legal regimes that AI-using IS organizations now operate under.

---

#### 1. The EU AI Act categorizes AI systems into risk tiers. Which tier prohibits certain uses outright?

<div class="upper-alpha" markdown>
1. Minimal risk
2. Limited risk
3. Unacceptable risk
4. High risk
</div>

??? question "Show Answer"
    The correct answer is **C**. The EU AI Act bans AI systems classified as "unacceptable risk" — for example, government social scoring, certain real-time biometric identification in public spaces, and manipulative AI exploiting vulnerabilities. High-risk AI is permitted with strict requirements; limited risk requires transparency; minimal risk is largely unregulated. The tiers are the structural backbone of the Act.

    **Concept Tested:** Unacceptable Risk AI

---

#### 2. Under the EU AI Act, "high-risk" AI systems are subject to:

<div class="upper-alpha" markdown>
1. No requirements at all
2. Conformity assessments, risk management, data quality, transparency, human oversight, robustness, accuracy, cybersecurity, and registration in an EU database
3. Only marketing-claim restrictions
4. Voluntary certification only
</div>

??? question "Show Answer"
    The correct answer is **B**. High-risk AI (used in hiring, credit scoring, critical infrastructure, education, law enforcement, etc.) must meet substantial requirements covering risk management, data governance, transparency, human oversight, robustness, and post-market monitoring, with conformity assessments before deployment. The other options understate the obligations.

    **Concept Tested:** High Risk AI

---

#### 3. The Colorado AI Act primarily addresses:

<div class="upper-alpha" markdown>
1. State income tax for AI vendors
2. Algorithmic discrimination by developers and deployers of high-risk AI in consequential decisions affecting Colorado consumers
3. State approval of all foundation models
4. AI use only in K-12 public schools
</div>

??? question "Show Answer"
    The correct answer is **B**. The Colorado AI Act (SB 24-205) requires developers and deployers of high-risk AI used in consequential decisions to use reasonable care to avoid algorithmic discrimination, with documentation, impact assessments, consumer notices, and right-to-appeal provisions. It is one of the first U.S. state-level comprehensive AI laws. The other options misstate its scope.

    **Concept Tested:** Colorado AI Act

---

#### 4. NYC's AEDT law (Local Law 144) requires that:

<div class="upper-alpha" markdown>
1. All AI use be banned in New York City
2. Only city government may use AI
3. AI vendors register with the NY Stock Exchange
4. Automated employment decision tools used in NYC undergo independent bias audits before use, with results published and candidates notified
</div>

??? question "Show Answer"
    The correct answer is **D**. AEDT (Local Law 144) covers automated employment decision tools used to substantially assist hiring or promotion decisions in NYC; it requires annual independent bias audits, publication of audit results, and candidate notification. Compliance practice has been challenging, but the structure — audit, publish, notify — is the law's core. The other options misstate the law.

    **Concept Tested:** NYC AEDT Law

---

#### 5. A bank uses an AI model in a lending decision. Under U.S. law (ECOA, FCRA), the bank must generally:

<div class="upper-alpha" markdown>
1. Provide adverse action notices with specific reasons when credit is denied, in language consumers can understand — even when the decision is AI-driven
2. Withhold the reason for any AI-driven denial
3. Tell consumers the model was perfect and infallible
4. Use only models from the FDIC-approved list
</div>

??? question "Show Answer"
    The correct answer is **A**. ECOA and FCRA require adverse action notices with specific principal reasons when credit is denied. The CFPB has clarified that AI-driven decisions are not exempt — vague references to "complex algorithms" do not satisfy the obligation. Lenders must be able to explain decisions in concrete terms to the consumer. The other options misread the law.

    **Concept Tested:** AI in Lending ECOA

---

#### 6. A school district wants to deploy an AI tool that analyzes student performance data. FERPA's primary requirement here is that:

<div class="upper-alpha" markdown>
1. Student education records cannot be disclosed without authorized consent or a recognized exception, and any vendor processing them must operate under appropriate agreements (often as a "school official" with legitimate educational interest)
2. AI tools must always be free
3. Schools must always use only commercial AI products
4. FERPA does not apply to AI tools at all
</div>

??? question "Show Answer"
    The correct answer is **A**. FERPA protects student education records. AI vendors processing those records must operate under arrangements that meet FERPA's requirements (often as a school official under direct control with legitimate educational interest). The other options misstate FERPA's scope.

    **Concept Tested:** AI in Education FERPA

---

#### 7. The current state of copyright law as it applies to AI training data is best characterized as:

<div class="upper-alpha" markdown>
1. Fully settled — all AI training is plainly legal in every jurisdiction
2. Settled — all AI training is plainly illegal everywhere
3. Contested and evolving — multiple lawsuits are pending, fair-use boundaries are being tested, and outcomes vary by jurisdiction; prudent organizations document training-data provenance and obtain rights where possible
4. Irrelevant to enterprise IS practice
</div>

??? question "Show Answer"
    The correct answer is **C**. Copyright law's application to AI training is genuinely contested as of this writing — multiple high-profile suits are in progress, jurisdictions differ, and fair-use analyses are evolving. Prudent enterprises document data provenance, prefer licensed or self-owned training data, and review vendor commitments. Confidence in either direction is unwarranted.

    **Concept Tested:** Copyright and Training Data

---

#### 8. Evaluating an AI vendor proposal, an IS team should review the vendor's system card primarily to:

<div class="upper-alpha" markdown>
1. Confirm the vendor has a marketing department
2. Determine the vendor's stock price
3. Understand the AI system's intended use, capabilities, limitations, evaluations, and known failure modes — informing risk classification, configuration, and human-oversight design
4. Replace the need for any contractual protections
</div>

??? question "Show Answer"
    The correct answer is **C**. A system card (or model card) provides the technical foundation for risk decisions: what does the system do well, where does it fail, what evaluations have been run, what mitigations exist? It complements but does not replace contractual protections, indemnities, or AI-specific procurement clauses. Marketing and stock prices are unrelated to the assessment.

    **Concept Tested:** Vendor System Card Review

---

#### 9. An organization is updating procurement contracts for AI vendors. Which combination of clauses most directly fits the chapter's framing of an "AI procurement clause"?

<div class="upper-alpha" markdown>
1. Data ownership and use restrictions, model-evaluation rights, transparency obligations, indemnification for IP and bias claims, security and audit rights, exit and data-return commitments, and notification of material model changes
2. A clause requiring the vendor to provide free pizza on Fridays
3. A single clause stating "the vendor is solely responsible for everything"
4. No special clauses — standard SaaS terms cover all AI risks
</div>

??? question "Show Answer"
    The correct answer is **A**. AI procurement clauses extend beyond standard SaaS terms because AI introduces new risk surfaces — training-data provenance, model behavior changes, IP claims, bias claims, evaluation rights. The chapter's framing combines data, evaluation, transparency, indemnity, security/audit, exit, and change-notification. Standard SaaS terms typically miss several of these.

    **Concept Tested:** AI Procurement Clause

---

#### 10. A manager argues: "Since the AI made the decision, no human at our company is liable." Evaluating this argument:

<div class="upper-alpha" markdown>
1. The argument is correct — AI liability is fully shifted to the vendor in every jurisdiction
2. The argument is fundamentally wrong; legal regimes increasingly hold deployers accountable for AI-driven decisions affecting people, often jointly with developers, with specific obligations for oversight, documentation, and remediation
3. The argument applies only to high-risk AI in the EU
4. The argument is correct as long as the AI is from a major U.S. vendor
</div>

??? question "Show Answer"
    The correct answer is **B**. Modern AI law (EU AI Act, Colorado AI Act, sector-specific U.S. regulations, common law negligence) increasingly assigns clear obligations to deployers — risk management, oversight, documentation, remediation. Liability is not magically shifted by the presence of AI; in many regimes, deployer obligations expand. "The AI did it" is not a defense.

    **Concept Tested:** AI Liability

---
