# Quiz: Systems Analysis and Design

Test your understanding of how analysts turn vague business requests into buildable specifications.

---

#### 1. A feasibility study for a proposed system typically evaluates:

<div class="upper-alpha" markdown>
1. Only the technical feasibility of the project
2. Technical, economic, operational, schedule, and legal feasibility
3. Only the financial cost of hardware
4. Only whether competitors have built something similar
</div>

??? question "Show Answer"
    The correct answer is **B**. A feasibility study weighs multiple dimensions: technical (can we build it?), economic (will the benefits exceed the costs?), operational (will the organization actually use it?), schedule (can it be done in time?), and legal/regulatory (are we allowed to?). Treating any one dimension in isolation is the classic mistake — projects fail on operational or legal feasibility long after the technical part was proven.

    **Concept Tested:** Feasibility Study

---

#### 2. A use case describes:

<div class="upper-alpha" markdown>
1. The CPU usage of a server
2. A specific ER diagram for a database
3. A way an actor (user or system) interacts with the system to accomplish a goal, including main flow and alternative flows
4. A vendor's pricing structure
</div>

??? question "Show Answer"
    The correct answer is **C**. A use case captures one goal-oriented interaction between an actor and the system, including the main success scenario and alternative or exception flows. Use case diagrams give a high-level view of all use cases and actors. The other options describe unrelated artifacts.

    **Concept Tested:** Use Case

---

#### 3. Which UML diagram is most appropriate for showing how objects interact over time, including the order of messages exchanged between them?

<div class="upper-alpha" markdown>
1. Class diagram
2. State diagram
3. Sequence diagram
4. Use case diagram
</div>

??? question "Show Answer"
    The correct answer is **C**. Sequence diagrams show objects (or actors) along the top and depict the messages exchanged among them in time order, with vertical lifelines and horizontal arrows. Class diagrams show structure; state diagrams show how a single object's state evolves; use case diagrams show actor-to-system goals. Sequence diagrams excel at message-level temporal interaction.

    **Concept Tested:** Sequence Diagram

---

#### 4. Joint Application Design (JAD) is best characterized as:

<div class="upper-alpha" markdown>
1. A facilitated workshop bringing users, analysts, and developers together to elicit and refine requirements jointly
2. A specific UML diagram type
3. A vendor-evaluation method
4. A type of automated testing
</div>

??? question "Show Answer"
    The correct answer is **A**. JAD is a structured, facilitated workshop technique that brings stakeholders into the same room (literal or virtual) to elicit and refine requirements collectively. Done well, it compresses weeks of one-on-one interviews into days, surfaces conflicts in real time, and produces shared ownership of the result. Its success depends heavily on facilitator skill.

    **Concept Tested:** Joint Application Design

---

#### 5. A wireframe differs from a mockup primarily in that:

<div class="upper-alpha" markdown>
1. A wireframe is hand-drawn while a mockup is always digital
2. A wireframe is a low-fidelity layout focused on structure and content; a mockup is a high-fidelity rendering closer to the final visual design
3. A wireframe must be coded in HTML; a mockup never is
4. There is no meaningful difference between the two terms
</div>

??? question "Show Answer"
    The correct answer is **B**. Wireframes are low-fidelity sketches that show layout, content placement, and navigation without committing to colors, fonts, or final styling. Mockups are high-fidelity visual designs that closely approximate the final UI. Both can be digital or hand-drawn; the distinction is fidelity, not medium. Each serves different stages of design conversation.

    **Concept Tested:** Wireframe

---

#### 6. Requirements traceability primarily exists to:

<div class="upper-alpha" markdown>
1. Encrypt requirements documents
2. Replace formal testing with traceable links
3. Maintain explicit links from each requirement through design, code, and test, so that any change can be traced and any requirement can be verified
4. Speed up application performance
</div>

??? question "Show Answer"
    The correct answer is **C**. A requirements traceability matrix maps each requirement to its design elements, code modules, and test cases, allowing impact analysis ("what does changing this requirement affect?") and verification ("can we prove every requirement is tested?"). It is especially load-bearing in regulated and safety-critical domains, where auditors expect to see the matrix.

    **Concept Tested:** Requirements Traceability

---

#### 7. A retailer is choosing between commercial e-commerce platforms. They issue a structured document describing their requirements and ask vendors to respond. This document is most likely:

<div class="upper-alpha" markdown>
1. A request for proposal (RFP)
2. A nondisclosure agreement
3. A pull request
4. A data contract
</div>

??? question "Show Answer"
    The correct answer is **A**. An RFP (Request for Proposal) is a structured document that describes the buyer's requirements and asks vendors to propose solutions, pricing, and delivery approach. It is the standard procurement instrument for substantial IS purchases. NDAs cover confidentiality; pull requests are code-review artifacts; data contracts govern dataset commitments.

    **Concept Tested:** RFP Process

---

#### 8. A team has built a feature and now needs to verify that real end users can complete their actual workflows successfully in a near-production environment. Which testing activity is most appropriate?

<div class="upper-alpha" markdown>
1. Unit testing
2. Static code analysis
3. Performance benchmarking
4. User Acceptance Testing
</div>

??? question "Show Answer"
    The correct answer is **D**. User Acceptance Testing (UAT) involves real users running their real workflows against a near-production system to confirm the system meets business needs before go-live. Unit tests verify individual functions; static analysis looks for code-level issues; performance benchmarking measures speed under load. None of those test whether the system works for the people who will use it.

    **Concept Tested:** User Acceptance Testing

---

#### 9. A vendor evaluation team is comparing four CRM products and wants to make a defensible, structured recommendation. Which approach best fits the chapter's framing?

<div class="upper-alpha" markdown>
1. Score each product against a weighted set of criteria reflecting actual requirements, validate top candidates with proofs-of-concept, and document the rationale
2. Choose whichever product has the most aggressive marketing
3. Ask each vendor to write the recommendation themselves
4. Pick the vendor with the lowest license fee regardless of fit
</div>

??? question "Show Answer"
    The correct answer is **A**. Structured vendor evaluation uses weighted criteria tied to real requirements, validates the top candidates with hands-on proofs-of-concept, and documents the decision so it can be defended later. Marketing intensity, vendor self-recommendation, and pure-cost selection all skip the actual fit analysis and produce predictable post-purchase regret.

    **Concept Tested:** Vendor Evaluation

---

#### 10. After UAT uncovers many minor defects, the project manager wants to ensure each defect is logged, classified by severity, assigned to an owner, tracked to closure, and not lost. Which practice addresses this need?

<div class="upper-alpha" markdown>
1. A weekly all-hands meeting
2. A new programming language
3. Defect tracking with a structured tool (such as Jira or Azure DevOps), including severity, status, owner, and resolution
4. A faster CPU on the test server
</div>

??? question "Show Answer"
    The correct answer is **C**. Defect tracking systems capture each defect with a unique ID, severity, status, owner, environment, and resolution. They enable triage (which defects must be fixed before launch?), reporting (how is the defect rate trending?), and accountability (who owns this defect?). Meetings, languages, and hardware do not address the underlying tracking need.

    **Concept Tested:** Defect Tracking

---
