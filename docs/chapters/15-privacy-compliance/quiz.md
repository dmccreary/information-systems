# Quiz: Privacy, Compliance, and Regulation

Test your fluency with the regulatory regimes that shape modern IS practice.

---

#### 1. The GDPR is best characterized as:

<div class="upper-alpha" markdown>
1. A U.S. federal privacy law applying only to government agencies
2. The European Union's comprehensive data protection regulation, with extraterritorial reach to organizations processing EU-resident personal data
3. A voluntary industry standard with no legal force
4. A specific software product for compliance management
</div>

??? question "Show Answer"
    The correct answer is **B**. The GDPR (General Data Protection Regulation) is the EU's comprehensive privacy law, in force since 2018, with extraterritorial reach: organizations outside the EU that process personal data of EU residents must comply. Penalties can reach 4% of global annual revenue. It is law, not a voluntary standard, and not a U.S. law.

    **Concept Tested:** GDPR

---

#### 2. HIPAA is the U.S. regulation primarily governing:

<div class="upper-alpha" markdown>
1. Children's online privacy
2. Financial reporting in publicly traded companies
3. Protected Health Information held by covered entities and their business associates
4. Credit card processing
</div>

??? question "Show Answer"
    The correct answer is **C**. HIPAA (Health Insurance Portability and Accountability Act) governs Protected Health Information (PHI) held by covered entities (health plans, providers, clearinghouses) and their business associates. Children's privacy is COPPA; financial reporting is SOX; credit-card processing is PCI-DSS.

    **Concept Tested:** HIPAA

---

#### 3. SOX (Sarbanes-Oxley) primarily focuses on:

<div class="upper-alpha" markdown>
1. Internal controls over financial reporting in publicly traded U.S. companies
2. Personal medical records
3. EU citizens' privacy rights
4. Patent and copyright enforcement
</div>

??? question "Show Answer"
    The correct answer is **A**. SOX, enacted in 2002 after the Enron and WorldCom scandals, requires public companies to establish, document, and audit internal controls over financial reporting. The IS implications are substantial — segregation of duties, change management, audit logging, and access controls all become regulated. The other options describe different regulatory regimes.

    **Concept Tested:** SOX

---

#### 4. Under GDPR, the "right to erasure" (sometimes called the right to be forgotten) means that:

<div class="upper-alpha" markdown>
1. Companies must permanently delete all data after 30 days
2. Data subjects can request deletion of their personal data under specified conditions, with limited exceptions
3. Companies cannot keep any backups
4. Only EU citizens have any privacy rights
</div>

??? question "Show Answer"
    The correct answer is **B**. The right to erasure allows data subjects to request deletion under defined circumstances — withdrawn consent, no longer needed for the original purpose, unlawful processing — subject to legitimate exceptions (legal obligation, public interest, freedom of expression). It is not a blanket 30-day rule, does not eliminate backups, and applies broadly within scope, not only to EU citizens.

    **Concept Tested:** Right to Erasure

---

#### 5. "Privacy by Design" requires organizations to:

<div class="upper-alpha" markdown>
1. Add a privacy notice after launching a product
2. Hire only privacy lawyers as designers
3. Embed privacy considerations into the design and architecture of systems from the start, rather than as an afterthought
4. Avoid storing any data
</div>

??? question "Show Answer"
    The correct answer is **C**. Privacy by Design (Ann Cavoukian's seven principles, now embedded in GDPR Article 25) means privacy considerations — minimization, purpose limitation, security, transparency — are baked into the system architecture and process design from inception. Tacking privacy on afterward almost always produces fragile, leaky systems. The other options misread the principle.

    **Concept Tested:** Privacy by Design

---

#### 6. Data residency requirements typically mandate:

<div class="upper-alpha" markdown>
1. That data be stored or processed within specific geographic boundaries due to legal or regulatory requirements
2. That all data be replicated to seven different countries
3. That backups be deleted every night
4. That only paper records are allowed
</div>

??? question "Show Answer"
    The correct answer is **A**. Data residency requirements (common in EU member states, Russia, China, and many financial-services regulators) constrain where personal or regulated data may be stored or processed. The implications for cloud architecture are substantial — region selection, replication topology, and provider choice all become regulated decisions. The other options misstate the concept.

    **Concept Tested:** Data Residency

---

#### 7. Under GDPR, an organization's "lawful basis" for processing personal data refers to:

<div class="upper-alpha" markdown>
1. The country where the data center is located
2. The legal grounds (consent, contract, legal obligation, vital interests, public task, legitimate interests) that justify processing the data
3. A specific encryption standard
4. The version of the privacy notice currently published
</div>

??? question "Show Answer"
    The correct answer is **B**. GDPR Article 6 enumerates six lawful bases for processing personal data, and a controller must identify which one applies to each processing activity. Consent is one — but only one — and is often the wrong choice when contract or legitimate interests would apply more cleanly. Documenting lawful basis is foundational to compliance.

    **Concept Tested:** Lawful Basis

---

#### 8. A new mobile app collects location data 24/7 even though the app's actual function only requires location during active use. Which privacy principle does this most clearly violate?

<div class="upper-alpha" markdown>
1. Encryption in transit
2. Right to erasure
3. Data residency
4. Data minimization and purpose limitation
</div>

??? question "Show Answer"
    The correct answer is **D**. Data minimization (collect only what is necessary) and purpose limitation (use only for the disclosed purpose) are core privacy principles in GDPR and most modern privacy laws. Collecting 24/7 location data for an app that only needs it during use violates both. Encryption in transit, right to erasure, and data residency are real concepts but address different issues.

    **Concept Tested:** Data Minimization

---

#### 9. A company suffers a breach exposing personal data of 200,000 users. Under GDPR, the controller must generally notify the supervisory authority within:

<div class="upper-alpha" markdown>
1. 30 days of confirmation by an external auditor
2. 72 hours of becoming aware of the breach, where feasible
3. One year, after the legal review concludes
4. Only if the breach is reported in the press first
</div>

??? question "Show Answer"
    The correct answer is **B**. GDPR Article 33 requires notification of personal-data breaches to the supervisory authority within 72 hours of becoming aware, where feasible — and notification of affected data subjects without undue delay if the breach poses high risk to their rights and freedoms. The other timelines do not match the regulation's requirements.

    **Concept Tested:** Data Breach Notification

---

#### 10. A U.S.-based SaaS company wants to continue serving EU customers after the Schrems II decision invalidated the Privacy Shield framework. Which combination of measures is most appropriate?

<div class="upper-alpha" markdown>
1. Standard Contractual Clauses combined with a transfer impact assessment and supplementary technical measures (such as encryption with EU-held keys) where needed
2. Stop using encryption entirely
3. Move all servers to a single non-EU jurisdiction with no privacy law
4. Ignore the ruling, since it only applies to government agencies
</div>

??? question "Show Answer"
    The correct answer is **A**. After Schrems II, EU-to-US transfers require Standard Contractual Clauses plus a transfer impact assessment, with supplementary measures (often encryption with keys outside U.S. jurisdiction) where the assessment identifies risk. The EU-U.S. Data Privacy Framework has since added another mechanism, but SCC plus TIA remains foundational. Ignoring the ruling, removing encryption, or jurisdiction-shopping are not lawful responses.

    **Concept Tested:** Schrems II

---
