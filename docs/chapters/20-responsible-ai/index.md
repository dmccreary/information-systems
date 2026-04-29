---
title: 'Responsible and Ethical Use of AI'
description: NIST AI RMF, ISO/IEC 42001, fairness and bias auditing, transparency, explainability, human oversight, AI incident management, and the operating practices that turn AI principles into running governance.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# Responsible and Ethical Use of AI

## Summary

Covers the NIST AI Risk Management Framework, ISO/IEC 42001, fairness and bias auditing, transparency and explainability, human oversight, AI incident management, and organizational AI policies.

**Role in the course:** Make responsible AI concrete: students leave able to apply NIST AI RMF and ISO/IEC 42001 to a proposed AI feature.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

1. NIST AI RMF
2. AI Govern Function
3. AI Map Function
4. AI Measure Function
5. AI Manage Function
6. ISO IEC 42001
7. Bias Audit
8. Algorithmic Fairness
9. Explainability
10. Transparency
11. AI Acceptable Use Policy
12. Sanctioned Model List
13. Shadow AI
14. AI Incident Management
15. AI Inventory
16. AI Impact Assessment
17. Responsible AI Principles
18. Trustworthy AI
19. AI Ethics Committee
20. Human Oversight Tier
21. AI Data Provenance
22. Training Data Documentation
23. Datasheet for Datasets
24. AI Sustainability
25. AI Labor Impact

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: The Role of IS in Organizations](../02-role-of-is/index.md)
- [Chapter 8: Data Governance and Quality](../08-data-governance/index.md)
- [Chapter 14: Security of Information Assets](../14-security/index.md)
- [Chapter 15: Privacy, Compliance, and Regulation](../15-privacy-compliance/index.md)
- [Chapter 19: AI in Information Systems](../19-ai-in-is/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 20. The previous chapter handed you the working vocabulary of AI in information systems. This one hands you the *operating manual* — the frameworks, policies, audits, and oversight tiers that turn "we use AI" into "we use AI responsibly, and we can prove it." By the end of this chapter you will know what NIST AI RMF actually asks you to do, why ISO/IEC 42001 is the AI version of the management-system standards you already met in Chapter 14, what a bias audit actually measures, and why the difference between transparency and explainability is not a vocabulary quibble but a structural one. You will also know why the most common failure mode of AI governance is not bad intent but *invisibility* — and what the fix looks like.

## Why Responsible AI Matters Now

For the first time in the history of computing, organizations are deploying systems whose behavior emerges from training data the operators did not write, did not fully audit, and often cannot fully describe. That is a different beast than a payroll system whose every rule was specified by a person. The risks are different in kind, not just degree: a discriminatory model can produce thousands of consistent, polite, well-formatted, and *systemically biased* decisions before anyone notices. A hallucinating model can put a fabricated court case into a legal brief. An unsupervised agent can take a real-world action no one signed off on. None of these are theoretical anymore — every one has happened in production, has been written up in the trade press, and has shown up in someone's regulatory filings.

Chapter 21 will cover the *legal* framework for AI — the EU AI Act, the U.S. executive orders, the sectoral regulations. This chapter is upstream of all that. It is about the management practice every organization should have *whether or not* a regulator is watching. The lawyers can tell you what is forbidden; the responsible-AI program tells you how to operate so that "forbidden" is the boring case and "actually trustworthy" is the goal.

## Responsible AI Principles

**Responsible AI Principles** are the high-level values an organization commits to when it builds, buys, or deploys AI systems. The exact wording varies by organization, but the converged set across NIST, ISO, OECD, and almost every major vendor's published framework looks roughly like this:

- **Fair** — the system does not produce disparate harms across protected groups or other relevant populations.
- **Transparent** — the existence, purpose, and behavior of the AI system are visible to the people it affects.
- **Explainable** — outputs can be accompanied by reasoning a human reviewer can interrogate.
- **Accountable** — a named human or team is responsible for the system's behavior and consequences.
- **Privacy-respecting** — the system handles personal data in line with the organization's privacy program (Chapter 15).
- **Secure and resilient** — the system resists adversarial inputs, data poisoning, and operational failures (Chapter 22).
- **Safe** — the system does not cause physical, financial, psychological, or societal harm under foreseeable misuse.
- **Human-centered** — the system supports human decision-making, dignity, and autonomy rather than displacing them silently.

Principles by themselves are wallpaper. A printed list of values on the corporate wiki has stopped exactly zero biased models from shipping. Principles only matter when they are operationalized into *processes* — inventories, audits, gates, escalations, oversight tiers — that make a principle actually expensive to violate. The rest of this chapter is about that operationalization. The principles are the *destination*; the frameworks below are the *roads*.

## Trustworthy AI

**Trustworthy AI** is the umbrella term NIST uses (and the EU echoes) for AI systems that simultaneously satisfy a defined set of properties. Trustworthiness, in NIST's framing, is not a single property — it is an *envelope* of properties that must hold together, because optimizing one usually trades off against others. A system that is maximally accurate but utterly opaque is not trustworthy. A system that is perfectly explainable but trivially manipulable is not trustworthy. A system that is fair on paper but never reviewed in production drifts out of trustworthiness within a quarter.

The seven characteristics NIST lists for trustworthy AI — *valid and reliable*, *safe*, *secure and resilient*, *accountable and transparent*, *explainable and interpretable*, *privacy-enhanced*, and *fair with harmful bias managed* — overlap heavily with the principles above. The framing difference matters, though: principles are commitments, trustworthiness is *measured outcome*. You can declare a principle on Monday; you can only demonstrate trustworthiness on Friday after the audit comes back.

| Trustworthy AI characteristic         | What it asks                                            | Where it shows up in operations                  |
|---------------------------------------|---------------------------------------------------------|--------------------------------------------------|
| Valid and reliable                    | Does it do what it claims, consistently?                | Performance benchmarks, drift monitoring         |
| Safe                                  | Does it avoid foreseeable harms?                        | Pre-deployment risk assessment, kill switch      |
| Secure and resilient                  | Does it survive attacks and failures?                   | Adversarial testing, incident response           |
| Accountable and transparent           | Is someone responsible, and is the system visible?      | AI inventory, owner of record, public disclosure |
| Explainable and interpretable         | Can humans understand outputs?                          | Local explanations (SHAP, LIME), model docs      |
| Privacy-enhanced                      | Does it respect data subject rights?                    | DPIA integration, data minimization              |
| Fair with harmful bias managed        | Does it produce equitable outcomes?                     | Bias audit, fairness metrics, mitigation plan    |

## NIST AI RMF: The Big Wheel

The **NIST AI Risk Management Framework** (NIST AI RMF, formally NIST AI 100-1, released in January 2023 with subsequent profile updates) is the U.S. government's flagship voluntary framework for managing AI risk. It is voluntary in the same sense that NIST CSF is voluntary in cybersecurity — meaning that everyone with a procurement department, a regulator, or a board of directors is going to treat it as if it were mandatory. If you remember one framework name from this chapter, make it this one.

The RMF organizes AI risk management around four core functions, often visualized as a wheel because they reinforce one another rather than running in strict sequence: **Govern**, **Map**, **Measure**, and **Manage**. Each function decomposes into categories and subcategories, and an organization can claim alignment with the framework at varying levels of maturity. The wheel framing matters: you do not finish *Govern* and move on to *Map*; you cycle, because every new system starts the loop again.

### AI Govern Function

The **AI Govern function** establishes the organizational context, culture, roles, responsibilities, and policies that make every other function possible. Govern asks: *who is accountable, what policies apply, how are decisions made, and how is risk tolerance defined?* Govern is where the AI ethics committee charter lives, where the AI acceptable use policy lives, where the executive sponsor for AI risk is named, and where the budget for the responsible-AI program comes from. Govern is not glamorous, but every other function silently inherits its decisions. An organization with a strong Govern posture and weak everything else is fixable; the reverse usually is not.

### AI Map Function

The **AI Map function** characterizes the context in which a specific AI system will operate. Map asks: *what is this system supposed to do, who does it affect, what data does it use, what are the foreseeable misuses, what categories of risk apply?* Map is where the AI impact assessment happens. Map is the function that catches "we are about to deploy a hiring screener and nobody has asked whether it is subject to EEOC scrutiny." Map's deliverable is a documented understanding of the system in its world — not just the model, but the model embedded in its actual use case, with its actual users, on its actual data.

### AI Measure Function

The **AI Measure function** evaluates the AI system against the risks and characteristics identified in Map. Measure asks: *how well does it work, how fairly does it work, how robustly does it work, how transparently does it work, and where are its failure modes?* Measure is where bias audits live, where accuracy and calibration metrics live, where adversarial testing happens, where explainability tooling produces output, and where the evaluation harness from Chapter 19 gets formalized into something a third party could review. Measure is the function teams most often skimp on, because it is the most expensive, and it is the one that most often catches the disasters.

### AI Manage Function

The **AI Manage function** acts on what Measure found. Manage asks: *what risks do we accept, mitigate, transfer, or avoid, and how do we operate the system over time?* Manage is where the deployment decision is made, where the monitoring plan is set, where the human oversight tier is assigned, where the kill switch lives, where retirement of an aging model is planned, and where an AI incident triggers the response process. Manage is what turns a one-time risk assessment into an *operating posture*.

| RMF function | Core question                          | Representative artifacts                                        | Frequency                   |
|--------------|----------------------------------------|-----------------------------------------------------------------|-----------------------------|
| Govern       | Who is accountable, what rules apply?  | AI policy, ethics committee charter, RACI, risk tolerance       | Standing                    |
| Map          | What is this system, in what context?  | AI impact assessment, AI inventory entry, threat model          | Per system, refresh on change |
| Measure      | How well does it actually behave?      | Bias audit, accuracy benchmark, red-team report, model card     | Pre-deployment + recurring  |
| Manage       | What do we do about what we found?     | Deployment decision, monitoring plan, incident playbook, retirement plan | Continuous           |

<details markdown="1">
<summary>Diagram: The NIST AI RMF Four-Function Wheel</summary>
Type: interactive-infographic
**sim-id:** nist-ai-rmf-four-function-wheel<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram showing the NIST AI RMF as a four-function wheel: Govern at the center, with Map, Measure, and Manage arranged around it as the three operating functions. Arrows between Map, Measure, and Manage form a continuous loop indicating the iterative nature of AI risk management. Govern is connected to all three outer functions with bidirectional arrows, indicating that organizational policy informs and is informed by every operating function. Each function node, when hovered, expands to reveal its subcategories: Govern shows policies, roles, accountability, culture, risk tolerance; Map shows context establishment, impact assessment, categorization, and stakeholder identification; Measure shows performance, fairness, robustness, explainability, and security testing; Manage shows risk treatment, monitoring, incident response, and retirement. To work around the vis-network horizontal-edge label rendering bug, edges use a slight y-offset (e.g., 480 to 490).

Color palette: Govern in mascot-emerald (the central hub), Map in slate-blue, Measure in magenta gradient, Manage in coral. Inter-function loop arrows in muted gold. Subcategory bubbles inherit the parent function's color at 60% opacity.

Interactivity: clicking a function highlights it and dims the others, displaying that function's subcategories and a sample artifact panel beneath the wheel. A "trace a system" button walks a sample AI feature (a hiring resume screener) through the four functions, showing the artifacts produced at each stage and where the loop reactivates when a new candidate population is added.

Layout: radial with Govern at center, three outer functions at 120-degree spacing, full canvas width, height ~620px. Canvas resizes on window resize.

Learning objective (Bloom: Understanding): Students can name the four NIST AI RMF functions, describe the core question each answers, and explain why Govern sits at the center rather than at the start.

Implementation: vis-network, deployed at `/information-systems/sims/nist-ai-rmf-four-function-wheel/`.
</details>

## ISO/IEC 42001: The Management System

Where NIST AI RMF is a *risk management framework*, **ISO/IEC 42001** is an *AI management system standard*. Published in December 2023, ISO/IEC 42001 is to AI what ISO/IEC 27001 is to information security: it specifies the requirements for establishing, implementing, maintaining, and continually improving an AI management system (AIMS) inside an organization. Crucially, it is *certifiable* — an accredited third party can audit the organization and issue a certificate that customers, regulators, and partners can rely on.

ISO/IEC 42001 follows the same Plan-Do-Check-Act backbone as ISO 9001, ISO 27001, and ISO 14001. It asks the organization to identify the context of its AI use, define an AI policy, set objectives, allocate roles, document its risk-management process, perform AI impact assessments, monitor performance, conduct internal audits, and feed the results back into management review. The standard does not prescribe specific technical controls; it prescribes the *management system* that produces and maintains those controls.

The complementary relationship between NIST AI RMF and ISO/IEC 42001 is worth memorizing. NIST AI RMF tells you *what to do for any given AI system*. ISO/IEC 42001 tells you *how to organize the company so that NIST AI RMF (or any equivalent framework) actually gets done consistently, audited, and improved*. Many mature organizations adopt both: NIST AI RMF as the per-system playbook, ISO/IEC 42001 as the organizational scaffolding. That combination is becoming the de facto pattern for serious AI governance programs.

## AI Inventory: You Cannot Govern What You Cannot See

The single highest-leverage practice in responsible AI is the one nobody thinks is interesting: building and maintaining an **AI inventory**. The AI inventory is a comprehensive, current, queryable list of every AI system the organization builds, buys, or calls — including the embedded AI features inside SaaS products, the third-party model APIs called by internal applications, the predictive models trained on internal data, the agents wired into business processes, and the experimental notebooks running in someone's sandbox.

If that sounds tedious, that is because it is. It is also where the entire responsible-AI program either stands or falls. You cannot run a bias audit on a model you do not know exists. You cannot apply a human-oversight tier to an agent nobody has registered. You cannot respond to an AI incident at 2 a.m. when the on-call engineer has no idea which downstream system is making decisions with the broken model. The AI inventory is the foundation on which every other practice in this chapter sits.

A useful AI inventory entry includes, at minimum: the system's name and owner, its purpose and intended use, the model or models it relies on (and whether they are internal, vendor-embedded, or API-based), the data it consumes, the data it produces, the populations it affects, the risk classification it has been assigned, the human oversight tier that applies, the most recent impact assessment date, the current monitoring posture, and the known limitations or open issues.

The systems-thinking framing here is direct: the AI inventory is a *leverage point*. A small investment in inventory discipline produces outsized improvements in incident response, audit readiness, vendor management, and risk visibility. Conversely, an organization without an AI inventory is operating blind — and the *unintended consequence* of operating blind is that the first time you find out about an unsanctioned AI use is when it appears in a news headline.

## AI Impact Assessment

An **AI impact assessment** (AIA) is the structured pre-deployment review that documents what an AI system is intended to do, who it affects, what risks it poses, what mitigations are in place, and what residual risk the organization is accepting. The AIA is the AI cousin of the privacy impact assessment (Chapter 15) and the data protection impact assessment that the GDPR requires. Many organizations now run a unified AIA-DPIA process so that AI systems handling personal data are assessed once against both lenses.

A workable AIA covers, in order:

1. **System description** — what does it do, where does it sit, who built it, what model does it use?
2. **Intended use and out-of-scope use** — the use cases the system is designed for, and the use cases it is *not* approved for.
3. **Affected populations** — who interacts with it, who is decided about by it, and who else feels its second-order effects?
4. **Data sources and provenance** — what training data, what runtime inputs, what consent and licensing posture?
5. **Risk identification** — fairness, safety, privacy, security, IP, and reputational risks specific to this system.
6. **Mitigations** — guardrails, oversight tiers, evaluation results, monitoring plan, and incident playbook.
7. **Residual risk and approval** — what risk remains after mitigations, who approves it, and at what cadence is it re-reviewed?

Done well, the AIA is a living document, updated when the system changes materially. Done badly, it is a Word document signed once at launch and never opened again — which is the *ethics-washing* failure mode the next section will name explicitly.

!!! mascot-thinking "Pause here"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    Notice the leverage. An AI inventory is a spreadsheet. An AI impact assessment is a template. Neither is technically interesting; neither requires a PhD; neither shows up in the conference keynote. And yet these two artifacts together do more for responsible AI than any algorithmic fairness paper of the last five years, because they make the *invisible* visible. Every framework in this chapter assumes you can *see* your AI systems. The inventory and the AIA are how you earn that assumption.

## Human Oversight Tiers

Human oversight is not a single setting; it is a *spectrum*, and the responsible-AI discipline is to assign the right point on that spectrum to each system. A **human oversight tier** is a categorical level of human involvement required before, during, or after an AI system's actions. The tiers most organizations converge on look like this:

| Tier                      | Human role                              | Typical use case                              | Risk profile                       |
|---------------------------|-----------------------------------------|-----------------------------------------------|------------------------------------|
| Tier 0: Fully autonomous  | None in the loop                        | Spam filtering, content recommendations       | Low-stakes, easily reversible      |
| Tier 1: Human on the loop | Monitoring, can intervene               | Fraud-flag triage queue, agent suggestions    | Medium, monitored aggregate harm   |
| Tier 2: Human in the loop | Reviews and approves each action        | Insurance claims AI, hiring screen AI         | High individual-decision impact    |
| Tier 3: Human-led         | AI advises, human decides and signs     | Medical diagnosis support, lending decisions  | High-stakes regulated decisions    |
| Tier 4: AI prohibited     | No AI in this decision                  | Capital sentencing, certain hiring categories | Unacceptable risk or legal bar     |

The structural fix in the oversight tier model is that *the tier is assigned during the AI impact assessment*, not negotiated later by whichever team finds the workflow most inconvenient. Once the tier is assigned, the system's deployment, monitoring, and incident response are calibrated to it. The tradeoff is direct: higher oversight tiers are more expensive (they cost human time per decision) and slower (they bottleneck on review capacity), so organizations have a real incentive to assign the lowest tier they can defend. The responsible-AI discipline is to make that defense rigorous — not "we want this fast" but "the harm of being wrong is bounded and reversible, and here is the evidence."

## Algorithmic Fairness

**Algorithmic fairness** is the property that an AI system's outcomes do not produce unjustified disparate harms across groups defined by protected or otherwise sensitive attributes — race, gender, age, disability, geography, socioeconomic class. Algorithmic fairness is harder than it sounds for two structural reasons. First, *fairness is not one thing*: there are at least a dozen mathematical definitions of fairness, and several of them are provably incompatible with one another, meaning you literally cannot satisfy all of them at once. Second, *fairness is not just a model property*: a perfectly calibrated model can still produce unfair outcomes if the data feeding it reflects historical inequities, or if the decisions downstream of it amplify the model's small differences into large gaps.

The fairness metrics IS professionals encounter most often, in roughly increasing strictness:

| Fairness metric              | What it requires                                                       | Example concern                                |
|------------------------------|------------------------------------------------------------------------|------------------------------------------------|
| Demographic parity           | Selection rates equal across groups                                    | "We hire from each demographic at the same rate" |
| Equal opportunity            | True-positive rates equal across groups                                | Qualified applicants of any group equally selected |
| Equalized odds               | True-positive *and* false-positive rates equal across groups           | Stronger than equal opportunity                |
| Predictive parity            | Positive predictive value equal across groups                          | A "high-risk" prediction means the same thing per group |
| Calibration within groups    | Score-to-outcome relationship equal across groups                      | A 70% predicted risk means 70% in every group  |
| Counterfactual fairness      | Outcome unchanged if only the protected attribute changed              | The strictest, hardest-to-measure definition   |

The classic impossibility result (Chouldechova, Kleinberg, and others) is that *equalized odds*, *predictive parity*, and *calibration* cannot simultaneously hold across groups when base rates differ — and base rates differ in almost every real dataset. The lesson is not "fairness is hopeless." The lesson is that *fairness requires choices*, and those choices are governance decisions, not engineering decisions. Picking a fairness metric is picking a definition of justice; the AI ethics committee, not the data-science team alone, should own the choice.

## Bias Audit

A **bias audit** is a structured evaluation of an AI system's outputs against fairness criteria, conducted before deployment and at recurring intervals afterward. A serious bias audit specifies the population to audit, the protected attributes to test, the fairness metrics to measure, the thresholds that trigger remediation, the auditor (internal, external, or both), and the report format. New York City's Local Law 144 made bias audits *mandatory* for automated employment decision tools used on city residents — the first regulation of its kind in the U.S. — and many other jurisdictions are adopting similar requirements.

The footgun in bias auditing is *scope creep failure*: auditing only the model, when the harm comes from the *system*. A perfectly fair resume-screening model deployed inside a recruiting workflow that only sourced candidates from one zip code is producing biased outcomes the audit will not catch. The structural fix is to scope the audit to the *decision* the system contributes to, not to the model in isolation. That requires the auditor to understand the workflow, the upstream data sources, and the downstream actions — which is why most credible bias audits are interdisciplinary by design.

A second, subtler footgun: bias audits that *audit only one model when the system is an ensemble*. A modern AI system often has an embedding model, a retriever, a reranker, a generator, and one or more guardrail classifiers, each capable of contributing bias. Auditing only the generator is like inspecting only the engine of a car that has bad tires.

## Transparency vs. Explainability

These two terms are routinely confused. They are not the same thing, and the distinction is load-bearing for the rest of the chapter.

**Transparency** is a property of the *system as a whole*: it is the degree to which the system's existence, purpose, design choices, training data sources, performance characteristics, and known limitations are visible to the people affected by the system. Transparency answers the question *what is this system, and what is it doing in the world?* Public model cards and system cards, AI inventories, disclosure that "this answer was generated by AI," and published audit results are all transparency artifacts.

**Explainability** is a property of *individual outputs*: it is the degree to which a specific decision or output can be accompanied by reasoning a human reviewer can understand, evaluate, and challenge. Explainability answers the question *why did this system produce this output for this input?* Local explanation methods — SHAP, LIME, attention visualizations, citations in a RAG system, chain-of-thought summaries — are explainability artifacts.

You can have one without the other. A model with a published model card (transparent) might still produce decisions no one can explain (not explainable). A model that produces SHAP values for every output (explainable) might be undocumented and unregistered (not transparent). Trustworthy AI requires both, and the responsible-AI program operationalizes them separately: transparency is largely a *governance* deliverable, explainability is largely a *technical* deliverable, and both need an owner.

The systems-thinking tradeoff: *transparency vs. intellectual property*. Vendors do not want to publish their training data sources because their training data is competitive moat. Banks do not want to publish their model architectures because their models are competitive moat. The responsible-AI discipline is to find the disclosure level that is high enough to support trust and audit, low enough to protect legitimate IP, and *consistent enough that the people affected can rely on it* — not a one-off PR exercise.

!!! mascot-tip "Iris's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    When a vendor demos an AI feature with the phrase "fully explainable," ask which output you can interrogate, what the explanation tooling actually shows, and whether the explanation has been validated against the model's *actual* decision boundary. The cheap answer to "explainable" is a screenshot of feature-importance bars. The honest answer involves a method (SHAP, integrated gradients, anchors), a faithfulness check (does the explanation match the model's behavior?), and a usability check (can a domain expert who isn't a data scientist actually act on it?). Three questions, one minute, fewer regrets.

## AI Acceptable Use Policy

An **AI acceptable use policy** (AI AUP) is the organizational rulebook that defines what AI can and cannot be used for, by whom, with what data, and under what oversight. Where the broader information-security AUP says "don't email customer SSNs from your personal Gmail," the AI AUP says "don't paste customer SSNs into a public ChatGPT prompt." Same family of policy, different specific risk surface.

A useful AI AUP addresses, at minimum: which AI tools are sanctioned for use, what data classifications are permitted in each (often: *no confidential data* in public consumer AI tools), what use cases require pre-approval (any AI making decisions about employees, customers, or the public), what disclosure is required when AI is used in customer-facing output, what record-keeping is required, what training is required for users, and what the consequences are for violations. The AUP is the document that translates the responsible-AI principles into "things an employee can read on their first day and follow."

## Sanctioned Model List

The companion artifact to the AI AUP is the **sanctioned model list** — the explicit, maintained list of AI tools and models the organization has approved for specific data classifications and use cases. Most enterprises now publish two flavors: a "green-light" list of tools approved for general business use (e.g., the enterprise tenant of Microsoft Copilot, the company's API account with Anthropic Claude on AWS Bedrock, the licensed Salesforce Einstein features) and a "yellow-light" list of tools approved for specific use cases under specific conditions (e.g., a niche transcription model approved only for the legal team handling specific case files).

Components of a useful sanctioned model list entry:

- The tool or model name and version.
- The vendor or provider, and the specific contractual posture (zero-data-retention, BAA in place, etc.).
- The approved data classifications (public, internal, confidential, regulated).
- The approved use cases and any explicit *out-of-scope* use cases.
- The required guardrails and oversight tier.
- The owner of record inside the organization.
- The review cadence and the next review date.

The unintended consequence to watch for is sharp: *a sanctioned model list that is too restrictive drives shadow AI underground*. If the only sanctioned model is too slow, too expensive, too limited in features, or too cumbersome to access, employees do not stop using AI — they stop *telling you* they are using AI. Which brings us to the next concept.

## Shadow AI

**Shadow AI** is the use of AI tools, models, or services by employees outside the organization's sanctioned list and visibility. It is the direct descendant of shadow IT (Chapter 14) and inherits the same dynamics: shadow AI is rarely malicious, almost always productivity-driven, and often a signal that the sanctioned alternatives are not meeting actual user needs. Shadow AI is also the single most common way confidential data ends up in places the organization did not intend — pasted into a consumer chatbot, fed into a free transcription service, dropped into a personal AI plug-in.

Indicators that shadow AI is significant in an organization:

- Network telemetry shows substantial outbound traffic to AI service domains the organization does not have contracts with.
- Employee surveys reveal AI tool usage that does not appear in any procurement record.
- Customer-facing outputs (emails, documents, code) start showing characteristic stylistic markers of AI generation that no sanctioned tool produces.
- Help-desk tickets reference AI tools the IT organization has never heard of.
- Browser-extension inventories on managed endpoints include unfamiliar AI productivity add-ons.

The structural response to shadow AI is *not* a crackdown, because crackdowns drive the behavior further into the dark. The structural response is to make the sanctioned path the easiest path: a fast-moving sanctioned model list, a frictionless approval pathway for new tools, a feedback channel where employees can request additions, and an AI AUP that is realistic about how people actually want to use AI. The reinforcing feedback loop you want: easier sanctioned access → more sanctioned use → more visibility → better incident response → more confidence to expand the sanctioned list.

## AI Incident Management

**AI incident management** is the process for identifying, triaging, investigating, mitigating, and learning from events where an AI system caused, contributed to, or risked causing harm. AI incidents are not all model failures: a hallucinated answer in a customer email is an incident, a discriminatory loan recommendation is an incident, an agent that took an unauthorized action is an incident, a leaked prompt that exposed system instructions is an incident, a biased outcome that becomes externally visible is an incident, a dependency model that was deprecated by the vendor with two weeks' notice is an incident.

A working AI incident-management program borrows heavily from the security incident response and ITSM major-incident processes (Chapters 14 and 17), with AI-specific additions: fairness-related triggers, model-behavior monitoring, the ability to roll back to a previous model or prompt version, the ability to disable the AI entirely while preserving the underlying workflow (the "AI off, manual on" fallback), and the inclusion of the AI ethics committee or equivalent in major-incident reviews. The post-incident review's defining question is uniquely AI-flavored: *did the model behave as designed and we got the design wrong, or did the model behave outside its design, and how would we have known sooner?*

<details markdown="1">
<summary>Diagram: AI Inventory and Impact Assessment Workflow</summary>
Type: interactive-infographic
**sim-id:** ai-inventory-impact-assessment-workflow<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network workflow diagram showing how an AI system enters the responsible-AI program. The flow starts at a "new AI use case" intake node and branches based on the system's classification: low-risk systems flow through a lightweight registration to the AI inventory; medium-risk and high-risk systems flow into a full AI impact assessment process that produces an inventory entry, a risk classification, an assigned human oversight tier, a bias-audit requirement, and a monitoring plan. Each branch terminates in a deployment decision node, which then loops back to recurring review nodes labeled by cadence (monthly, quarterly, annually) based on tier. Side branches show the path back to the loop when an AI incident occurs, when a model is updated, or when the use case changes materially. To work around the vis-network horizontal-edge label rendering bug, edges use a slight y-offset (e.g., 480 to 490).

Color palette: intake node in mascot-emerald, low-risk path in slate-blue, medium-risk path in amber, high-risk path in coral, recurring review loops in muted gold, incident path in magenta gradient.

Interactivity: hovering each node reveals the artifact produced and its typical owner. A "submit a use case" button lets the user pick a sample system (a hiring screener, a customer-support chatbot, a fraud detector, an internal RAG assistant) and watches it traverse the appropriate path with annotations explaining each gate's purpose. A "skip the inventory" toggle simulates the failure mode where systems deploy without registration, showing how downstream incident response and audit readiness collapse.

Layout: top-to-bottom flowchart with branching, full canvas width, height ~640px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can place a proposed AI system on the inventory-and-AIA workflow, identify the artifacts that should be produced at each gate, and explain the consequences of skipping the inventory step.

Implementation: vis-network, deployed at `/information-systems/sims/ai-inventory-impact-assessment-workflow/`.
</details>

## AI Ethics Committee

An **AI ethics committee** (sometimes called an AI governance board, responsible AI council, or AI review board) is the cross-functional body that reviews high-risk AI use cases, sets fairness and oversight policy, and makes the judgment calls that no individual team can or should make alone. A serious committee includes representation from legal, privacy, security, the data-science organization, the affected business units, and — increasingly — affected end users or community representatives.

The footgun here is *ethics-washing*: a committee that meets twice a year, ratifies whatever the business already decided, never says no to anything, and exists primarily to provide cover when something goes wrong. Ethics-washing has all three footgun properties — it is silent (the committee's existence is presented as proof of responsibility), easy to trigger (any organization can stand one up), and damaging in delayed and invisible ways (the bad decisions still ship, just now with a stamp of approval).

The structural fixes to ethics-washing: require the committee to publish its decisions and dissents, require it to have *teeth* (the authority to block or pause a deployment, not just advise), require it to meet on a cadence that matches the pace of AI deployment (quarterly is usually too slow), require diversity of expertise and demographics on the committee itself, and require it to review *both* approved and rejected proposals so the pattern of judgment is visible. A committee that has never said no is not a committee; it is a rubber stamp with refreshments.

## AI Data Provenance

**AI data provenance** is the documented chain of custody for data used to train, fine-tune, or ground an AI system: where it came from, who collected it, under what consent, with what licenses, with what transformations applied, and how it flowed into the model. Provenance is the foundation of nearly every other responsible-AI claim — fairness, copyright defensibility, privacy compliance, security posture, and reproducibility all depend on knowing what went into the model.

Provenance is also where many AI projects discover, far too late, that they cannot answer basic questions: *Did we have the right to use this data? Was it scraped, licensed, donated, or generated? Did the data subjects consent? Are there copyright claims on the corpus? Did we exclude the training-data leakages we said we excluded?* The structural fix is to capture provenance *as the data is collected*, not reconstruct it after the fact, because reconstruction is often impossible and always expensive.

## Training Data Documentation

**Training data documentation** is the structured description of the data on which a model was trained or fine-tuned: its sources, its size, its composition, its preprocessing pipeline, its known limitations, and the populations and topics it covers (and does not cover). Training data documentation lives between data provenance (the *chain of custody*) and the datasheet for datasets (the *standardized format* — next concept). It is the artifact that lets a downstream user understand *what world the model has seen* and, by implication, *what world the model has not seen.*

A training-data documentation entry typically describes: the corpora included, with license and source, the size of the corpus in tokens or rows, the language and modality coverage, the temporal cutoff, the deduplication and filtering steps applied, the populations represented (and underrepresented), the categories of content explicitly excluded (CSAM, certain copyrighted works, certain regulated content), and any known issues discovered during or after training.

## Datasheet for Datasets

A **datasheet for datasets** is a standardized format for documenting the characteristics, motivations, composition, collection process, preprocessing, uses, and maintenance of a dataset, originally proposed by Gebru et al. in 2018. The datasheet is the responsible-AI cousin of the model card: where a model card describes a trained model, a datasheet describes a *dataset*. The structure is deliberately question-and-answer ("Why was the dataset created? Who funded its creation? Was any preprocessing done?") because the goal is to surface assumptions and limitations that informal documentation tends to leave invisible.

Datasheets are now standard practice for new public research datasets and are increasingly expected for proprietary enterprise datasets used to train or fine-tune production models. Reading the datasheet before adopting a model trained on someone else's dataset is a five-minute habit that catches a remarkable range of downstream problems — license incompatibility, demographic gaps, temporal drift, and the occasional "this dataset was scraped from a web forum and we cannot republish it under this license" surprise.

## AI Sustainability

**AI sustainability** is the recognition that AI systems consume real and growing amounts of energy, water, and rare materials, and that responsible AI programs increasingly include measurement and management of those impacts. A single training run for a frontier foundation model can cost tens of millions of dollars in electricity and emit thousands of tons of CO2-equivalent. Inference at scale — billions of model calls per day across the industry — has become a non-trivial line item in the world's energy budget. Data centers running AI workloads also consume substantial water for cooling, often in regions where water is already constrained.

The IS organization's sustainability levers are mostly at the *deployment* layer rather than the training layer (since most enterprises do not train foundation models): choosing efficient model sizes for the task, caching aggressively, batching inference where possible, picking providers with strong sustainability disclosures, choosing data-center regions with cleaner grids, and — perhaps most importantly — *not deploying AI where it does not produce commensurate value*. The biggest sustainability win in most AI projects is the project that didn't need to ship at all. That sounds glib; it is not. The energy cost of a clever rule-based system that solves the actual problem is often two orders of magnitude lower than the energy cost of an AI system that solves the same problem with more hype.

## AI Labor Impact

**AI labor impact** is the responsible-AI program's recognition that AI deployments restructure work — sometimes augmenting workers, sometimes displacing them, sometimes both at once, often in ways the original deployment plan did not anticipate. Responsible AI is not just about the model's behavior; it is also about the human consequences of deploying it. A help-desk chatbot that deflects 50% of Tier-1 tickets is a productivity win; it is also a 30% reduction in entry-level help-desk hiring, which is also where the next generation of senior engineers used to come from.

The systems-thinking framing here is *unintended consequence as a feature, not a bug, of AI deployment*. Every AI system that takes work away from humans changes the labor pipeline downstream of that work. The responsible-AI program treats labor impact as a first-class consideration in the AI impact assessment — asking which roles are affected, what reskilling pathways exist, how the change is communicated to the affected workforce, and how the *quality* of remaining work changes (does the AI take the easy 80% and leave the human with the hard 20% with no recovery time?). Skipping that analysis is not just ethically dubious; it is strategically expensive, because workforce trust erodes faster than it rebuilds.

<details markdown="1">
<summary>Diagram: Human Oversight Tier Ladder by Risk</summary>
Type: interactive-infographic
**sim-id:** human-oversight-tier-ladder<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram showing the five human oversight tiers as a vertical ladder, with sample AI use cases attached at each rung. Tier 0 (fully autonomous) at the bottom holds spam filtering and content recommendation; Tier 1 (human on the loop) holds fraud-flag triage and AI-suggested code completions; Tier 2 (human in the loop) holds insurance claim AI and resume screening; Tier 3 (human-led) holds medical-diagnosis support and lending decisions; Tier 4 (AI prohibited) at the top holds capital sentencing and certain protected hiring categories. A side panel shows the cost-of-being-wrong axis increasing up the ladder, with a corresponding axis for human-review cost. Inter-tier arrows show what triggers a system moving up the ladder (incident, regulatory change, expanded scope) or down (proven track record, mitigations validated). To work around the vis-network horizontal-edge label rendering bug, edges use a slight y-offset (e.g., 480 to 490).

Color palette: tier rungs in a gradient from green (Tier 0) through amber (Tier 2) to coral (Tier 4); use-case nodes inherit their tier's color at 70% opacity. Trigger arrows in slate-blue (escalation) and mascot-emerald (de-escalation).

Interactivity: hovering each tier reveals the human role definition, the typical monitoring posture, and the typical artifact set required for that tier's deployment. A "drag a use case" feature lets the user move a sample system between tiers and shows which artifacts must be produced or retired as it moves. A "skip the assessment" toggle drops every system into Tier 0 and highlights which ones are now operating outside their proper oversight regime.

Layout: vertical ladder with use-case branches, full canvas width, height ~640px. Canvas resizes on window resize.

Learning objective (Bloom: Evaluating): Students can match an AI use case to its appropriate human oversight tier, justify the placement against risk and reversibility, and identify what would trigger a tier change.

Implementation: vis-network, deployed at `/information-systems/sims/human-oversight-tier-ladder/`.
</details>

## Putting It All Together

Responsible AI is not one thing. It is a *layered operating discipline* whose layers have to fit together.

- The **responsible AI principles** state the values; **trustworthy AI** turns those values into measurable characteristics.
- The **NIST AI RMF**, with its four functions — **Govern**, **Map**, **Measure**, **Manage** — is the per-system playbook that turns trustworthiness into action.
- **ISO/IEC 42001** is the management-system standard that makes the playbook repeatable across the organization and certifiable to outside parties.
- The **AI inventory** is the foundation everything else rests on; the **AI impact assessment** is the structured per-system review that produces the inventory entry, the **human oversight tier**, the bias-audit plan, and the monitoring posture.
- **Algorithmic fairness**, measured through a **bias audit** against an explicit fairness metric, is operationalized as a recurring practice — not a one-time launch checkpoint.
- **Transparency** (visibility of the system) and **explainability** (interpretability of individual outputs) are distinct properties operationalized by distinct artifacts.
- The **AI acceptable use policy** and the **sanctioned model list** are the rulebook and the approved-tools list every employee operates against; together they keep **shadow AI** from becoming the dominant pattern.
- **AI incident management** is the operating loop that catches what the upfront review missed; the **AI ethics committee** is the cross-functional body that holds judgment calls accountable, *if* it has teeth and avoids ethics-washing.
- **AI data provenance**, **training data documentation**, and the **datasheet for datasets** are the documentation discipline that makes everything above defensible — fairness, IP, privacy, and reproducibility all flow from knowing what went into the model.
- **AI sustainability** and **AI labor impact** widen the responsible-AI lens beyond the model and the user to the energy budget and the workforce — both of which the boardroom is increasingly asking about.

A graduate of this chapter walking into a room where someone is pitching a new AI feature should be able to ask, in order: *Is it on the AI inventory? What did the AI impact assessment find? What human oversight tier did we assign and why? Have we run a bias audit, and against which fairness metric? Is the system transparent to the people it affects, and is each output explainable to a reviewer? Is the data provenance documented end-to-end? What is the AI incident playbook if this goes wrong on a Saturday night? And — quietly, but firmly — what did the ethics committee actually decide, and who dissented?*

That is a more sophisticated set of governance questions than most organizations ask in their first three years of AI deployment. You can ask all of them after one chapter. The next chapter, on AI law and regulation, takes this operating discipline and overlays the legal regime that increasingly *requires* most of it.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just learned the responsible-AI playbook used by serious organizations: the NIST AI RMF four functions, ISO/IEC 42001 as the management-system standard, the inventory-and-impact-assessment foundation, the human oversight tier ladder, the fairness metrics and the bias audit, the transparency-vs-explainability distinction, the AUP-and-sanctioned-list pair that keeps shadow AI in the light, the incident-management loop, the ethics committee with teeth, the data-provenance and datasheet discipline, and the sustainability and labor-impact lenses that round it out. Twenty-five concepts, one chapter, and a governance vocabulary sharper than most "Chief AI Ethics Officer" job postings. Chapter 21 is next, and it is where this operating discipline meets the law: the EU AI Act, U.S. executive orders, sectoral rules, and the global patchwork that is becoming the AI compliance baseline. The good news — you will recognize most of what the regulators are asking for, because you already met it here. Onward.
