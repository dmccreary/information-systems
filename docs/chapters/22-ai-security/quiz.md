# Quiz: AI and Information Security

Test your understanding of AI-specific threats and the frameworks that catalog them.

---

#### 1. Prompt injection is best characterized as:

<div class="upper-alpha" markdown>
1. A type of SQL injection attack on relational databases
2. An attack in which adversarial instructions are embedded in inputs to an LLM, causing the model to ignore its system prompt or take unintended actions
3. The act of writing better prompts to improve AI quality
4. A method to compress prompt text
</div>

??? question "Show Answer"
    The correct answer is **B**. Prompt injection embeds adversarial instructions in user inputs (or in retrieved content) so that the LLM follows the attacker's instructions instead of the developer's. Direct prompt injection comes from the user; indirect injection comes from content the model ingests (web pages, documents, emails). It is the OWASP LLM Top 10's #1 risk for a reason.

    **Concept Tested:** Prompt Injection

---

#### 2. Indirect prompt injection differs from direct prompt injection in that:

<div class="upper-alpha" markdown>
1. Indirect injection comes through retrieved or referenced content (web pages, documents, emails the LLM reads as part of a task) rather than from the user's direct input
2. Indirect injection is an outdated term with no real meaning
3. Indirect injection requires physical access to the server
4. Indirect injection can only target image models
</div>

??? question "Show Answer"
    The correct answer is **A**. Indirect injection is especially dangerous because the malicious instructions ride along in legitimate-looking content the LLM is asked to summarize, browse, or analyze. Defenses include input sanitization, output filtering, restricted tool access, and clear separation between system instructions and untrusted content. The other options misstate the concept.

    **Concept Tested:** Indirect Prompt Injection

---

#### 3. Training data poisoning is an attack in which:

<div class="upper-alpha" markdown>
1. The model's runtime memory is corrupted with random bytes
2. The attacker physically damages the GPU
3. The attacker raises the cloud bill of the training run
4. An adversary contaminates the training dataset (often through scraped sources) so that the resulting model behaves incorrectly on specific inputs or in specific ways
</div>

??? question "Show Answer"
    The correct answer is **D**. Data poisoning targets the training pipeline — adding mislabeled, biased, or backdoored examples so the trained model misbehaves predictably. Defenses include data provenance tracking, supply-chain validation, anomaly detection during training, and limiting training on uncurated public sources. The other options describe unrelated issues.

    **Concept Tested:** Training Data Poisoning

---

#### 4. The OWASP LLM Top 10 catalogs the most critical risks specific to LLM applications. Which of the following best describes its purpose?

<div class="upper-alpha" markdown>
1. To replace the existing OWASP Web Top 10
2. To list ten specific LLM products organizations should buy
3. To provide a structured, current catalog of common, high-impact LLM vulnerabilities (prompt injection, insecure output handling, sensitive information disclosure, etc.) for security teams to use as a checklist
4. To promote a single AI vendor's products
</div>

??? question "Show Answer"
    The correct answer is **C**. The OWASP LLM Top 10 is a community-maintained catalog of high-impact LLM application risks, updated as the field evolves. It complements the broader OWASP Web Top 10 rather than replacing it, and it gives security teams a shared starting vocabulary for LLM threat modeling. The other options misread the project.

    **Concept Tested:** OWASP LLM Top 10

---

#### 5. MITRE ATLAS is best characterized as:

<div class="upper-alpha" markdown>
1. A globe of the world used in classrooms
2. A knowledge base of adversary tactics, techniques, and case studies for attacks on AI systems, modeled on MITRE ATT&CK
3. A specific cloud database product
4. The same as ISO/IEC 42001
</div>

??? question "Show Answer"
    The correct answer is **B**. MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) catalogs documented techniques used to attack ML systems, organized along ATT&CK-style tactics (reconnaissance, initial access, etc.). It supports threat modeling, red-teaming, and defender training in a way no single vendor's documentation could.

    **Concept Tested:** MITRE ATLAS

---

#### 6. AI red teaming is best described as:

<div class="upper-alpha" markdown>
1. A marketing exercise where vendors color their slides red
2. A specific set of compliance certifications
3. The systematic, often adversarial probing of an AI system before and after deployment to discover failure modes, harmful outputs, jailbreaks, and abuse patterns
4. Only relevant to military AI
</div>

??? question "Show Answer"
    The correct answer is **C**. Red teaming for AI extends the security-red-team concept to AI behavior — adversarial probing for harmful outputs, biased responses, jailbreaks, sensitive-information leaks, and dangerous capabilities. It is increasingly required by regulation (EU AI Act for foundation models, U.S. EO requirements for frontier models) and is now standard practice for serious AI deployments.

    **Concept Tested:** AI Red Teaming

---

#### 7. A team is designing input sanitization and output filtering for an LLM application that ingests user content and tools' outputs, and produces text responses. Which design captures the chapter's framing?

<div class="upper-alpha" markdown>
1. Input sanitization checks user-supplied and retrieved content for injection patterns and sensitive data; output filtering checks responses for harmful content, sensitive disclosure, format violations, and policy breaches; both layers are essential and complementary
2. Input sanitization alone is sufficient
3. Output filtering alone is sufficient
4. Both layers can be replaced by a single regex
</div>

??? question "Show Answer"
    The correct answer is **A**. Input sanitization and output filtering are layered defenses — input filters catch malicious prompts and sensitive data before they reach the model; output filters catch harmful, leaky, or noncompliant responses before they reach the user. Each addresses different risks, neither replaces the other, and a single regex is unequal to the threat surface.

    **Concept Tested:** AI Output Filtering

---

#### 8. A SOC team begins applying ML to large security-event volumes to detect anomalies humans cannot see at scale. This is an example of:

<div class="upper-alpha" markdown>
1. Defensive AI in the SOC — using AI to augment threat detection, triage, and response while preserving analyst oversight
2. A regulatory violation under GDPR
3. A new type of prompt injection
4. The end of all human security analysts
</div>

??? question "Show Answer"
    The correct answer is **A**. Defensive AI is increasingly central to SOC operations — anomaly detection, alert triage, suspicious-pattern surfacing, and (cautiously) automated response. The chapter's framing preserves human oversight; the AI augments analysts, it does not replace careful judgment on consequential actions.

    **Concept Tested:** Defensive AI in SOC

---

#### 9. An organization wants to train an ML model on data from multiple parties without any party's raw data leaving its premises. Which technique most directly enables this?

<div class="upper-alpha" markdown>
1. A standard centralized training run on one party's GPU
2. Posting all data to a public S3 bucket
3. Sending the data via email between parties
4. Federated learning, in which model updates (not raw data) are exchanged and aggregated, often combined with differential privacy and secure aggregation
</div>

??? question "Show Answer"
    The correct answer is **D**. Federated learning trains models across distributed parties without centralizing raw data — each party computes local updates that are aggregated. Combined with differential privacy and secure aggregation, the privacy properties become rigorous. The other options either centralize the data or leak it dramatically.

    **Concept Tested:** Federated Learning

---

#### 10. A company plans to give analysts access to a sensitive dataset for ML experimentation. Evaluating the privacy techniques available, which best describes how differential privacy and synthetic data each contribute?

<div class="upper-alpha" markdown>
1. Both replace any need for access controls
2. Differential privacy adds calibrated noise to outputs (or training) to bound any individual's impact on results, providing a formal privacy guarantee; synthetic data generates artificial records that mimic statistical properties of the original — useful but with weaker formal guarantees and risk of memorization
3. They are identical techniques with two names
4. Neither has any role in privacy-preserving ML
</div>

??? question "Show Answer"
    The correct answer is **B**. Differential privacy provides a formal, mathematical privacy guarantee through calibrated noise — but with utility tradeoffs. Synthetic data generates statistically similar records and is often easier to use, but lacks formal guarantees and can leak via memorization. They are complementary tools, not substitutes for access controls or for each other.

    **Concept Tested:** Differential Privacy

---
