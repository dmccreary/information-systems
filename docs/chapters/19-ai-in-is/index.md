---
title: 'AI in Information Systems'
description: The AI-in-IS landscape — predictive ML, generative AI, agentic systems, retrieval-augmented generation, the AI value chain, and build-vs-buy-vs-API decisions for AI features.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# AI in Information Systems

## Summary

Establishes the AI-in-IS landscape: predictive ML, generative AI, agentic systems, retrieval-augmented generation, the AI value chain (data → model → application → outcome), and build-vs-buy-vs-API decisions for AI features.

**Role in the course:** Lay the AI foundation that the next four chapters all build on — vocabulary, capabilities, and the IS organization's role in adopting AI.

## Concepts Covered

This chapter covers the following 26 concepts from the learning graph:

1. Artificial Intelligence
2. Machine Learning
3. Predictive ML
4. Generative AI
5. Large Language Model
6. Foundation Model
7. Prompt
8. Prompt Engineering
9. Retrieval Augmented Generation
10. Vector Embedding
11. Vector Database
12. AI Agent
13. Agentic Workflow
14. AI in ERP
15. AI in CRM
16. AI in ITSM
17. AI Value Chain
18. Build vs Buy AI
19. Model API
20. Model Card
21. System Card
22. Hallucination
23. Grounding
24. Guardrail
25. Human in the Loop
26. RAG Architecture

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Information Systems](../01-foundations/index.md)
- [Chapter 3: Information Systems Architecture](../03-architecture/index.md)
- [Chapter 4: Application Development for IS](../04-appdev/index.md)
- [Chapter 5: Business Process Management](../05-bpm/index.md)
- [Chapter 7: Modern Databases, Warehousing, and Lakehouses](../07-modern-databases/index.md)
- [Chapter 9: Business Intelligence and Analytics](../09-bi-and-analytics/index.md)
- [Chapter 13: Enterprise Systems](../13-enterprise-systems/index.md)
- [Chapter 17: IT Service Management and Operations](../17-itsm/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 19. This is the chapter where the textbook quietly tilts on its axis. Everything before now described the IS organization mostly as it has looked for thirty years — applications, databases, processes, infrastructure, services. From this chapter forward, we add a layer that is rewriting all of those at once: artificial intelligence. By the end of this chapter you will know the difference between a model and a model API, between a prompt and prompt engineering, between RAG and an agent, and between a hallucination and a confidently wrong human (only one of which has a structural fix). You will also know why "should we build, buy, or call an API for this?" is now the most consequential AI question your future employer will ask. Let's go.

## AI in IS Is Not Optional Anymore

For most of the history of information systems, "AI" was the chapter at the back of the book — the speculative material, the futurist sidebar, the section the professor sometimes skipped if the semester ran short. That arrangement no longer reflects reality. Between 2022 and 2025 the cost of competent generative models dropped by roughly two orders of magnitude, every major enterprise software vendor shipped AI features into the product students will use on day one of their first jobs, and the boardroom question stopped being "should we use AI?" and became "where are we behind on AI, and what is it going to cost us to catch up?"

This chapter is the foundation. It establishes vocabulary — about 26 terms — and a mental model of how AI is actually built into modern IS. Chapters 20 through 23 then build on this foundation: responsible AI, AI law, AI security, and AI productivity each get their own chapter, because they each deserve one. So this chapter stays focused on the *what* and the *how*: what these capabilities are, how they fit together in real systems, and how an IS organization decides what to build, what to buy, and what to wire up through someone else's API.

A note on tone before we start: AI is the most over-hyped technology of your professional lifetime, and also one of the most genuinely transformative. Both things are true at the same time. The job of an IS professional is to hold both ideas in their head without letting either one win — to neither dismiss AI as marketing fluff nor genuflect to it as magic. The structural cure for both errors is the same: precise vocabulary. Let's collect it.

## Artificial Intelligence: The Umbrella

**Artificial Intelligence** is the broad field of computer systems that perform tasks normally associated with human intelligence — recognizing patterns, making decisions, understanding language, planning actions, learning from experience. AI is an *umbrella term*, not a specific technology. Inside that umbrella sit decades of overlapping subfields: rule-based expert systems from the 1970s, neural networks from the 1980s, statistical machine learning from the 1990s, deep learning from the 2010s, and the foundation-model wave of the 2020s. When somebody says "AI" without further qualification, your first job is to figure out *which AI* they mean. The conversation goes very differently depending on the answer.

AI's defining characteristic is that the *behavior is learned, inferred, or computed* rather than explicitly programmed step-by-step. A traditional payroll system computes net pay using rules an accountant could write down. An AI-enabled payroll fraud detector flags suspicious patterns it has learned from millions of historical examples — patterns no accountant could enumerate in advance. The two systems can sit side by side in the same enterprise; only one of them counts as AI.

## Machine Learning: The Workhorse Underneath

**Machine Learning** is the dominant subfield of AI in 2026 and the one that does most of the actual work in production systems. Machine learning is the discipline of training algorithms on data so that the algorithm produces a *model* — a mathematical object that, given new input, produces useful output without being explicitly told the rules. Spam filters learn what spam looks like from labeled examples. Credit-scoring models learn what default risk looks like from historical loan outcomes. Recommendation engines learn what you might watch next from what people like you watched yesterday.

The three classic flavors of machine learning are *supervised learning* (the model trains on labeled examples — input X, correct answer Y — and learns to predict Y for new X), *unsupervised learning* (the model finds structure in unlabeled data, like clustering customers by behavior), and *reinforcement learning* (the model learns by trial and error against a reward signal, like a game-playing agent). Most enterprise ML today is supervised; most generative AI uses a hybrid that includes large-scale self-supervised pre-training followed by reinforcement-learning fine-tuning.

## Predictive ML: The Boring Money-Making Kind

**Predictive ML** is the workhorse category of enterprise AI: machine-learning models trained to *predict* a specific value or outcome from structured input data. *Will this customer churn? Is this transaction fraudulent? How many units will this SKU sell next quarter? What is the probability this loan defaults?* Predictive ML rarely makes the news — it doesn't produce poetry, it doesn't paint pictures, it doesn't give chatty interviews — but it is doing more useful work in more enterprises than any other category of AI, and it has been doing so for two decades.

Predictive ML's defining characteristics are that it produces a *narrow*, *measurable*, *typically numeric* output, and that it can be evaluated against ground truth: you can measure how often your fraud detector is right, how close your demand forecast lands, how well-calibrated your churn probabilities are. That measurability is the reason predictive ML so reliably earns its keep. A 2% lift in fraud-detection accuracy or churn-prediction precision translates directly to dollars; the finance team can put a number on it; the project pays for itself.

The systems-thinking point here is the *capability vs. explainability* tradeoff. A linear regression on five features is easy to explain to a regulator and harder to make accurate. A deep neural network on a thousand features may be more accurate and nearly impossible to explain. Where the regulatory or human-trust cost of "I can't explain why" is high — credit decisions, healthcare, hiring — simpler models often win even when they are slightly less accurate. Where that cost is low — recommending the next product, ranking ad inventory — accuracy wins. Picking the right point on that curve is one of the most consequential decisions in any predictive-ML project.

## Generative AI: The Loud One

**Generative AI** is the category of AI that produces *new content* — text, images, code, audio, video — rather than predicting a specific outcome from a structured input. Generative AI is the part of the field your friends and parents have heard of. It is also the part that broke containment in late 2022 when ChatGPT crossed 100 million users in two months, became the fastest-adopted consumer product in history, and made every CIO's calendar suddenly very busy.

The contrast with predictive ML is sharp. Predictive ML answers a closed question with a number. Generative AI answers an open question with a paragraph. Predictive ML's accuracy is measurable against ground truth. Generative AI's quality is often a matter of taste, fit, and whether it hallucinated something embarrassing. Predictive ML wins when the question is *narrow and quantitative*; generative AI wins when the question is *open-ended and unstructured*. Most production AI in modern IS uses *both* — sometimes in the same workflow.

| Category          | Output type          | Typical input        | Evaluation              | Example                        |
|-------------------|----------------------|----------------------|-------------------------|--------------------------------|
| Artificial Intelligence | Anything intelligence-shaped | Anything       | Domain-dependent        | Umbrella term                  |
| Machine Learning  | A trained model      | Training data + labels | Held-out test accuracy | Spam filter, fraud detector    |
| Predictive ML     | A number or class    | Structured rows      | Precision, recall, MAE  | Churn prediction, demand forecast |
| Generative AI     | New content          | A prompt             | Human judgment, benchmarks | Drafting, summarizing, code gen |

## Foundation Models and Large Language Models

The engine behind the generative-AI wave is a class of models known as **foundation models** — very large, pre-trained models that learn general-purpose capabilities from enormous datasets and can then be adapted to a wide range of downstream tasks. The term was coined at Stanford in 2021 to capture the observation that a single trained model could serve as the *foundation* for hundreds of different applications: summarization, translation, classification, code generation, question answering. Before foundation models, you trained one model per task; after foundation models, you train one massive model and *adapt* it for each task using prompts, fine-tuning, or retrieval.

A **Large Language Model** (LLM) is a foundation model specifically trained on text. The "large" is not poetic — these are enormous: hundreds of billions of parameters, trained on trillions of tokens of text scraped from the internet, books, code repositories, and licensed corpora. The training objective is deceptively simple — *predict the next token* — but at sufficient scale that simple objective produces a model that can summarize legal contracts, write Python, explain organic chemistry, and (sometimes, embarrassingly) confidently invent a court case that does not exist.

Important vocabulary lives inside the LLM. A *token* is a chunk of text, typically a word or word-piece, that the model reads and produces one at a time. The *context window* is the maximum number of tokens the model can consider at once — historically a few thousand, now often hundreds of thousands or millions. The context window is a hard architectural limit; everything you want the model to consider at once must fit inside it. *Inference* is the act of running the model on a prompt to produce output. *Training* is the (vastly more expensive) process of building the model in the first place. Most IS professionals will never train an LLM, but every IS professional will design systems that *use* LLMs at inference time.

## Prompts and Prompt Engineering

A **prompt** is the input you give to a generative model — typically text, sometimes including images or other data — that tells the model what you want it to do. Prompts can be as simple as "summarize this email" or as complex as a multi-page system prompt that defines a persona, a set of rules, a knowledge base, and a structured output format. The quality of the output is enormously sensitive to the quality of the prompt, which is one of the great surprises of working with LLMs and the source of the meme that "the model is only as smart as you let it be."

**Prompt engineering** is the discipline of designing, testing, and iterating prompts to get reliable, useful behavior from a generative model. Prompt engineering is partly art, partly empirical science, and almost entirely a discipline that did not exist five years ago. The core patterns every IS professional should recognize:

- **Zero-shot prompting** — ask the model to do the task with no examples. Works surprisingly often. *"Classify this support ticket as billing, technical, or account."*
- **Few-shot prompting** — give the model a handful of input/output examples before the real input. Works dramatically better when the task has a non-obvious format.
- **Chain-of-thought prompting** — instruct the model to *show its reasoning* before producing the final answer. Often improves accuracy on math, logic, and multi-step problems.
- **Role prompting** — tell the model what role to play. *"You are a senior database administrator reviewing this schema."* Persona priming is shockingly effective.
- **Structured-output prompting** — instruct the model to produce JSON, XML, or another machine-parseable format, often with a schema. Makes the output usable by downstream systems.
- **System prompts** — a persistent set of instructions, separate from the user's message, that define behavior across the conversation. The system prompt is where guardrails, persona, and rules live.

Prompt engineering's footgun is *prompt fragility*: a prompt that worked perfectly in testing falls apart when the model version is updated, when the input is slightly different from what you tested, or when an adversarial user crafts an input that overrides your instructions (a *prompt injection* attack — Chapter 22 covers this in depth). The structural fix is *evaluation discipline*: maintain a test set of inputs and expected behaviors, run your prompts against them automatically before shipping any change, and treat your prompts as production code subject to version control and regression testing.

!!! mascot-thinking "Pause here"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    Stop and notice the shift that just happened. For decades, software behavior was determined by code that engineers wrote in formal programming languages. Generative AI moves a meaningful slice of that behavior into prompts written in *natural language*. That changes who can write the behavior, who can audit it, who can break it, and how regressions happen. A prompt is software in a trench coat — it has versions, defects, security implications, and operational costs. The teams that learn to treat prompts with the same engineering rigor they apply to code will run circles around the teams that treat prompts as a clever trick.

## Vector Embeddings: Meaning as Geometry

To understand retrieval-augmented generation — the next big concept — you first need to understand embeddings. A **vector embedding** is a numerical representation of a piece of content (a word, a sentence, a paragraph, an image, a customer record) as a list of floating-point numbers, typically a few hundred to a few thousand of them. Embedding models are trained so that *semantically similar inputs produce numerically similar vectors*. The sentence "How do I reset my password?" and the sentence "I forgot my login credentials" will produce vectors that are close together in the high-dimensional embedding space, even though they share almost no words. The sentence "What's the capital of Peru?" produces a vector that is far away from both.

Once you can turn arbitrary content into vectors, similarity becomes geometry. Finding "documents similar to this question" becomes finding "vectors near this question's vector." Clustering similar customer complaints becomes clustering vectors. Searching by *meaning* — semantic search — becomes feasible in a way that keyword search never made possible.

A **vector database** is a database optimized for storing and searching over vectors. Where a relational database is good at exact-match queries on rows and columns, a vector database is good at *nearest-neighbor* queries: "give me the 10 vectors closest to this query vector." Production vector databases — Pinecone, Weaviate, Qdrant, Milvus, Chroma, plus vector extensions to PostgreSQL (pgvector), Elasticsearch, and OpenSearch — handle millions or billions of vectors and return nearest-neighbor results in milliseconds using approximate-nearest-neighbor (ANN) algorithms. The vector database is to semantic search what the relational database was to transactional record-keeping: a structural piece of infrastructure that enables an entire category of application.

## Retrieval-Augmented Generation: The Most Important Pattern

We now have all the pieces to assemble the single most important architectural pattern in enterprise generative AI: **Retrieval-Augmented Generation**, universally abbreviated **RAG**. The problem RAG solves is fundamental. An LLM was trained on data with a cutoff date. It does not know about your company's internal documents, your customer's order history, last week's policy update, or the contents of your knowledge base. Asking it questions about any of those will produce, at best, a generic answer; at worst, a confidently invented one. Fine-tuning the model on your data is expensive, slow, and goes stale the moment your data changes.

RAG's idea is structurally simple: at query time, *retrieve* the relevant documents from your data using semantic search over a vector database, *insert* those documents into the prompt as context, and *let the model generate* an answer grounded in that retrieved context. The model brings the language fluency; your data brings the facts. The combination is dramatically more reliable than either alone.

The standard **RAG architecture** has two phases. First, an *indexing pipeline* runs offline: documents are chunked into passages, each passage is run through an embedding model to produce a vector, and the vectors and source passages are stored in a vector database. Second, a *query pipeline* runs at inference time: the user's question is embedded into a vector, the vector database returns the top-k most similar passages, those passages are formatted into a prompt along with the question, and the LLM produces an answer. The architecture also typically includes *citation* — telling the user which retrieved passages the answer drew from — which is enormously valuable both for user trust and for debugging.

The RAG retrieval pipeline, step by step:

1. **Chunk** the source documents into passages of manageable size (typically a few hundred tokens each, with some overlap between chunks).
2. **Embed** each chunk using an embedding model, producing a vector per chunk.
3. **Store** the vectors and source chunks in a vector database, indexed for fast nearest-neighbor lookup.
4. **Query embed** the user's question with the same embedding model that produced the chunk vectors.
5. **Retrieve** the top-k most similar chunks from the vector database — typically 3 to 20.
6. **Rerank** (optional but increasingly standard) using a more expensive cross-encoder model to refine the top results.
7. **Assemble** the retrieved chunks into a prompt along with the user's question and any system instructions.
8. **Generate** the answer with the LLM, ideally producing citations back to the retrieved chunks.

<details markdown="1">
<summary>Diagram: RAG Architecture End-to-End</summary>
Type: interactive-infographic
**sim-id:** rag-architecture-end-to-end<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram showing the two phases of a RAG architecture. The upper half of the canvas shows the offline *indexing pipeline*: source documents (PDFs, wiki pages, ticket history, knowledge base articles) flow into a chunker, then into an embedding model, with output vectors flowing into a vector database. The lower half shows the online *query pipeline*: a user question flows into the same embedding model, the resulting query vector flows into the vector database for nearest-neighbor retrieval, the top-k retrieved chunks flow into a prompt assembler that combines them with the user's question and a system prompt, and the assembled prompt flows into the LLM, which produces a grounded answer with citations back to the retrieved chunks. A dashed boundary labeled "context window" surrounds the prompt assembler and LLM, emphasizing that everything the model sees must fit inside the window.

Color palette: indexing pipeline in slate-blue, query pipeline in mascot-emerald, vector database in magenta gradient, LLM box in coral. Dashed boundaries in muted gray. To work around the vis-network horizontal-edge label rendering bug, edges use a slight y-offset (e.g., 480 to 490) so labels render on initial load.

Interactivity: hovering each node reveals (a) what the component is, (b) a typical implementation example, and (c) one common failure mode at that step. A "trace query" button animates a sample question flowing through the query pipeline, showing the retrieval results, the assembled prompt, and the final answer with highlighted citations. A toggle compares "with RAG" and "without RAG" answers for the same question on the same model, demonstrating the difference grounding makes.

Layout: hierarchical, top-to-bottom, full canvas width, height ~620px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can label every component of a RAG architecture, explain the role of the embedding model, and trace a query from user input to grounded answer.

Implementation: vis-network, deployed at `/information-systems/sims/rag-architecture-end-to-end/`.
</details>

## Hallucination, Grounding, and Guardrails

Now that we have RAG in place, we can talk honestly about its purpose. The defining failure mode of unaided LLMs is **hallucination**: the model produces output that is fluent, confident, plausible, and *factually wrong*. Hallucinations are not bugs in the conventional sense — the model is doing exactly what it was trained to do, which is produce statistically likely next tokens. The problem is that "statistically likely" and "true" are not the same thing, and the model has no built-in mechanism to tell the difference. A hallucinating LLM is a footgun in textbook form: silent (the output sounds confident), easy to trigger (just ask any question whose answer the model does not actually know), and damaging in delayed and invisible ways (the wrong answer gets into a document, an email, a court filing, a customer interaction, a code repository).

The structural fix to hallucination is **grounding** — giving the model authoritative source material to draw from and, increasingly, requiring it to cite that material. RAG is the dominant grounding technique because it scales: you ground the model in *your* data without retraining the model itself. Other grounding techniques include calling external tools or APIs, calling structured databases, or constraining the model's output to a predefined schema. The shared idea is that the model is no longer free-associating; it is *answering with reference to a known source*.

Grounding does not eliminate hallucination — the model can still misread the source, conflate two passages, or be over-confident at the seams — but it dramatically reduces it. Numbers vary by task and benchmark, but grounded RAG systems routinely cut the hallucination rate by an order of magnitude versus the same model unaided. The tradeoff is engineering cost: building, indexing, monitoring, and maintaining the grounding pipeline is real work that the "just call the model" architecture skips.

A **guardrail** is a control that constrains what an AI system is allowed to do, say, or be asked. Guardrails sit in front of the model (filtering inputs — "is this prompt trying to jailbreak the system?"), behind the model (filtering outputs — "did the model produce something we shouldn't ship?"), or alongside the model (monitoring for drift, abuse, or policy violations). Guardrails are implemented as everything from regex filters to dedicated classifier models to second LLMs evaluating the first one's output. The hallucination-mitigation toolkit, in roughly the order you should reach for it:

1. **Ground the model with RAG** — give it authoritative source material, and require citations.
2. **Constrain the output format** — JSON schema, structured outputs, function calling. The narrower the output, the fewer places hallucination can hide.
3. **Add input guardrails** — detect and refuse out-of-scope or adversarial prompts before they reach the model.
4. **Add output guardrails** — validate the model's output against the source material, the schema, and policy.
5. **Use evaluation harnesses** — maintain a test set of known-good and known-bad inputs and run it against every model or prompt change.
6. **Keep a human in the loop** for high-stakes outputs — the structural fallback when no automated check is sufficient.
7. **Monitor in production** — log inputs, outputs, and downstream actions; flag anomalies; close the feedback loop.

**Human in the loop** is the design pattern where a human reviews, approves, edits, or vetoes the AI's output before it produces real-world effects. It is the simplest and oldest guardrail in AI, and it remains the right answer whenever the cost of a bad output is high. The systems-thinking insight is that human-in-the-loop is not "AI failure"; it is *AI architecture*. The question is never "should there be a human?" but "*where* in the workflow does the human belong?" — and the answer depends entirely on the cost of being wrong.

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    The single most expensive lesson early adopters of generative AI learn is that the model said "yes" *confidently* — and was wrong. Confidence is not calibration. An LLM's tone is a stylistic property of its training data, not a measurement of its certainty. A model that has no idea what year it is will tell you the year in the same cheerful voice it uses to tell you the actual capital of France. The structural fix is to never let raw model output become an authoritative answer in any system where being wrong has real consequences. Ground it. Cite it. Validate it. And when the stakes are high, put a human in front of the publish button. The cost of that human is always less than the cost of one viral hallucination.

## AI Agents and Agentic Workflows

So far we have described AI systems that produce a single output from a single input — given a prompt, the model produces an answer. The next step up the capability ladder is **AI agents**: systems where an LLM is given access to *tools*, the ability to *plan*, and the autonomy to *take multi-step actions* toward a goal, often without a human between every step. An AI agent can read an email, decide to look up the customer's order history, call an API to update the order, draft a response, and route it for review — all from a single high-level instruction.

An **agentic workflow** is a process where one or more AI agents drive the execution. The agentic workflow typically includes several distinct components:

- A **planner** — the LLM (or a specialized planning model) that decides what steps to take. Planning may be one-shot or iterative.
- **Tools** — APIs, functions, database queries, search engines, code interpreters, or even other agents that the planner can call. The model produces structured tool calls; an orchestrator runs them and feeds the results back.
- **Memory** — short-term (the conversation or working scratchpad) and long-term (a persistent store the agent can read from and write to across sessions).
- **An orchestrator** — the runtime that loops between the planner and the tools, manages errors, enforces budgets, and decides when the agent is "done."
- **Human-in-the-loop checkpoints** — explicit approval gates at high-stakes steps (sending an email, charging a credit card, modifying production data).
- **Guardrails and observability** — input/output filtering, action logging, cost tracking, rate limits, and monitoring for drift or abuse.

Agentic workflows multiply both the capability and the risk of generative AI. Capability, because the agent can solve problems that no single prompt could solve — long-running research tasks, multi-step debugging, end-to-end customer service interactions. Risk, because *errors compound across steps*. A 95%-correct single-step agent has, naively, only a 60% chance of being correct over ten steps. A small misinterpretation early in the plan can send the agent down a path that wastes budget, burns API calls, or — in the worst case — takes a real-world action that has to be reversed.

The systems-thinking framing is direct: every additional step of agent autonomy is a *power-versus-blast-radius* tradeoff. An agent that can read your inbox is useful. An agent that can read *and reply* to your inbox is more useful and a lot scarier. An agent that can read, reply, *and book travel* is more useful still and qualitatively scarier. The structural fix is *human-in-the-loop at the right altitude*: not at every step (you'd never finish), and not at the very end (too late to catch errors), but at the points where a wrong action is hard to reverse. Identifying those points is one of the most important design skills in agentic AI.

<details markdown="1">
<summary>Diagram: An Agentic Workflow with Tools and Human Checkpoints</summary>
Type: interactive-infographic
**sim-id:** agentic-workflow-tools-and-checkpoints<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram showing an agentic workflow for a customer-support agent. A central planner node (an LLM) sits at the top. It connects to an orchestrator that loops between four tools: a knowledge-base search (RAG), a CRM lookup API, an order-management API (write-capable), and an email-drafting tool. Memory is shown as two attached stores: a short-term scratchpad and a long-term customer-context store. A human-in-the-loop checkpoint sits between the email-drafting tool and the actual email-send action, drawn as a hard gate that the agent cannot bypass. Guardrails are shown as wrappers around the planner (input filter) and around the order-management API (write-action filter). To work around the vis-network horizontal-edge label rendering bug, edges use a slight y-offset (e.g., 480 to 490).

Color palette: planner in mascot-emerald, tools in slate-blue, memory in magenta gradient, write-capable tools in coral with caution-stripe borders, human-in-the-loop checkpoint in amber, guardrails in dashed gold.

Interactivity: hovering each node reveals (a) the component's role, (b) a typical implementation, and (c) one failure mode it introduces. A "trace request" button animates a sample customer query flowing through the workflow, pausing at each tool call, showing the planner's reasoning, and stopping at the human-in-the-loop checkpoint for approval. A "remove human checkpoint" toggle simulates what happens when the structural fix is removed — the workflow speeds up but a "wrong reply sent" warning flashes on a sample case.

Layout: radial around the planner, full canvas width, height ~600px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can identify the components of an agentic workflow, locate the appropriate human-in-the-loop checkpoint, and explain why error compounding is the central risk of multi-step agency.

Implementation: vis-network, deployed at `/information-systems/sims/agentic-workflow-tools-and-checkpoints/`.
</details>

## AI Inside the Enterprise Systems You Already Know

The most consequential AI deployment in most organizations is not a flagship project — it is the AI features quietly shipping into the enterprise systems the organization already runs. Three categories matter most for IS students.

**AI in ERP** — modern enterprise resource planning platforms (SAP S/4HANA with Joule, Oracle Fusion with the Oracle AI Agents, Microsoft Dynamics with Copilot, Workday with Illuminate) embed AI into financial close, demand forecasting, supplier risk scoring, expense-report classification, journal-entry anomaly detection, and conversational interfaces over the entire ERP. The AI doesn't replace the ERP; it makes the ERP usable by people who don't know the ERP's UI, and it surfaces patterns no human accountant could spot in a million-row general ledger.

**AI in CRM** — modern customer relationship management platforms (Salesforce with Einstein and Agentforce, HubSpot AI, Microsoft Dynamics 365 Sales Copilot) embed AI into lead scoring, opportunity prediction, next-best-action recommendations, automated meeting summaries, email drafting, and increasingly autonomous sales-development agents that qualify leads and book meetings. The CRM stops being a place sales reps log activity and starts being a place that does activity *with* them.

**AI in ITSM** — modern IT service management platforms (ServiceNow with Now Assist, Atlassian Jira Service Management with Atlassian Intelligence, Freshservice Freddy AI) embed AI into ticket classification, automated resolution suggestions, knowledge-article generation from resolved tickets, change-risk prediction, and conversational service portals. Many organizations report 30-60% deflection rates on Tier-1 tickets once the AI assistant is well-tuned, which is a meaningful staffing-model change for the help desk.

| Enterprise system | Embedded AI capability                              | Example outcome                          |
|-------------------|-----------------------------------------------------|------------------------------------------|
| ERP               | Anomaly detection on journal entries                | Faster month-end close, fraud prevention |
| ERP               | Demand forecasting with external signals            | Lower inventory carrying cost            |
| ERP               | Conversational query over financial data            | Self-serve analytics for managers        |
| CRM               | Lead scoring and next-best-action                   | Higher win rates on prioritized accounts |
| CRM               | Auto-drafted follow-up emails and call summaries    | More selling time, less typing time      |
| CRM               | Agentic SDR — qualifies leads, books meetings       | Pipeline coverage at lower cost          |
| ITSM              | Ticket classification and routing                   | Faster time-to-assignment                |
| ITSM              | Suggested resolutions from knowledge base (RAG)     | Faster mean time to resolve              |
| ITSM              | Self-service conversational portal                  | Tier-1 ticket deflection                 |

The IS organization's job in this landscape is rarely to *build* these capabilities — the vendors are building them. The IS organization's job is to *evaluate* them, *configure* them responsibly, *integrate* them with the rest of the stack, *govern* them under the policy frameworks Chapters 20-22 will introduce, and *measure* whether they are actually producing the value the vendors promised. Which brings us to the next concept.

## The AI Value Chain

The **AI value chain** is the sequence of stages by which raw data becomes business outcomes, and it is the mental model every IS professional should carry into any AI conversation. The stages, in order:

1. **Data** — the raw inputs. Internal databases, documents, logs, customer records, telemetry, third-party feeds. Without good data, no model produces good outputs. *Data quality is upstream of every AI conversation.*
2. **Model** — the trained algorithm that turns inputs into useful outputs. Could be a predictive model trained on your data, a foundation model accessed via API, an open-weights model running on your infrastructure, or a hybrid.
3. **Application** — the software that wraps the model and exposes it to users or other systems. The prompt logic, the RAG pipeline, the agent loop, the user interface, the integration with the ERP or CRM.
4. **Outcome** — the business effect: a faster close, a deflected ticket, a converted lead, a prevented fraud loss, a happier customer. The outcome is what the CFO actually cares about.

The chain matters because *value flows only as far as its weakest link*. A great model on bad data produces confident wrong answers. A great model and great data on a clunky application produces a tool nobody uses. A great model, great data, and great application that doesn't actually move a measurable outcome produces a press release with no follow-up. Every successful AI project gets all four stages right; every failed AI project failed at one of them, usually upstream of where the team was looking.

The systems-thinking insight here is the *feedback loop* that healthy AI systems create. Good data → good model behavior → user trust → more usage → more data and more feedback → better grounding and tuning → better model behavior. That is a *reinforcing* loop, and it is where the durable competitive advantage of AI lives. Organizations that build that loop pull ahead exponentially; organizations that ship a model and walk away get one quarter of value and then watch the system decay.

<details markdown="1">
<summary>Diagram: The AI Value Chain with Reinforcing Feedback</summary>
Type: interactive-infographic
**sim-id:** ai-value-chain-with-feedback<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network causal-loop diagram showing the four stages of the AI value chain — Data, Model, Application, Outcome — laid out left-to-right, with a reinforcing feedback arrow from Outcome back to Data (more usage produces more data and more labeled feedback) and a balancing arrow from Outcome back to Model (governance, retraining, prompt iteration). Each stage is a labeled node with an icon and a one-sentence description. Two distinct colored arrows (green for reinforcing, blue for balancing) make the loop polarities visible. To work around the vis-network horizontal-edge label rendering bug, edges use a slight y-offset (e.g., 480 to 490).

Color palette: stage nodes in mascot-emerald gradients, reinforcing loop arrows in green, balancing loop arrows in slate-blue, weakest-link warning indicators in coral when toggled on.

Interactivity: hovering each stage reveals examples of value created and value lost at that stage. A "weakest link" toggle highlights any stage in coral with an explanation of how a failure there prevents downstream value. A "kill the feedback loop" toggle removes the reinforcing arrow and shows how value plateaus and then decays without it.

Layout: horizontal flow with the feedback loop drawn as an arc above, full canvas width, height ~520px. Canvas resizes on window resize.

Learning objective (Bloom: Evaluating): Students can describe each stage of the AI value chain, identify the weakest link in a hypothetical project, and explain why the reinforcing feedback loop is the source of durable AI advantage.

Implementation: vis-network, deployed at `/information-systems/sims/ai-value-chain-with-feedback/`.
</details>

!!! mascot-encourage "You've got this"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Iris encourages you">
    The build-vs-buy section is next, and it is the part of the chapter that turns into your first promotion. Most of your future colleagues will form opinions on these tradeoffs by vibes — by who pitched the loudest demo, by which vendor took the team to dinner. You are about to have a structured framework for the same decision. That framework is genuinely valuable in the field. Read this part twice.

## Build vs. Buy vs. API

Every AI capability your organization wants raises the same strategic question: where on the **build vs. buy AI** spectrum should it sit? The classic build-vs-buy decision from earlier IT eras has acquired a third option in the foundation-model era: *call somebody else's model API*. The three options now look like this.

**Build** means training or heavily fine-tuning a model on your own infrastructure with your own data, owning the weights, and operating the inference stack yourself. Build wins when the capability is *core to your competitive differentiation* (a hedge fund's trading model, a search engine's ranking model), when your data is *unique and substantial*, when latency or cost at scale demands self-hosting, or when regulation forbids your data leaving your environment. Build is the most expensive option and the slowest to value, but it produces durable IP.

**Buy** means licensing a finished AI feature embedded in a vendor product — Salesforce Einstein, ServiceNow Now Assist, Microsoft Copilot, SAP Joule. Buy wins when the capability is *adjacent to your business but not differentiating*, when the vendor already has it ready, when you don't want to manage models, and when you trust the vendor's data-handling. Buy is the fastest path to value and produces the least IP.

**API** means calling a foundation model via a hosted API — OpenAI, Anthropic, Google Vertex AI, AWS Bedrock, Azure OpenAI — and building your *application* on top of that model. API wins for the enormous middle ground: capabilities that are differentiating but where the model itself isn't (you can swap providers as the field evolves), where you want to control the prompt logic and RAG pipeline, where speed-to-value matters, and where the cost economics of pay-per-token make sense at your volumes. API is now the default for most enterprise generative-AI projects, and the **model API** has become a structural piece of IS infrastructure in its own right — a managed, paid, governed dependency on someone else's model that you treat much like any other third-party SaaS dependency.

| Dimension              | Build (own model)              | Buy (vendor feature)            | API (hosted model)              |
|------------------------|--------------------------------|---------------------------------|---------------------------------|
| Differentiation gain   | Highest                        | Lowest                          | Medium                          |
| Time to value          | Months to years                | Days to weeks                   | Weeks                           |
| Total cost of ownership| Highest (infra, talent, data)  | Predictable subscription        | Pay-per-use, scales with volume |
| Data residency control | Highest                        | Vendor-controlled               | API-provider-controlled         |
| Model swap flexibility | None — you own it              | None — locked to vendor         | High — change provider          |
| IP retained            | All weights and data           | None                            | Application IP only             |
| Best fit               | Core differentiating capability| Adjacent, generic capability    | Differentiating *application* on a generic model |
| Major risk             | Underestimating data and talent cost | Vendor lock-in, vendor pace | Provider deprecation, cost surprises |

The decision is rarely all-or-nothing. A well-run AI strategy uses *all three*: API for the broad middle of generative use cases, buy for the embedded features in ERP/CRM/ITSM, and build only for the narrow cases where IP and differentiation justify the investment. The CIO's job is to keep all three options honestly on the table, evaluate each candidate capability against the framework, and resist both the "build everything" pride and the "buy everything" surrender.

## Model Cards and System Cards

When you adopt a third-party model — whether by buying a feature or calling an API — you inherit a set of risks: training-data biases, capability limits, known failure modes, and policies on how the model handles edge cases. The industry's structural fix to this is documentation, in two flavors.

A **model card** is a standardized document, originally proposed by Mitchell et al. in 2019, that describes a single trained model: what it was trained on, what it is intended for, what it is *not* intended for, its measured performance across relevant benchmarks, its known biases, and its limitations. Reading a model card before adopting a model is now table stakes; calling it "due diligence" understates how much downstream pain a careful read can prevent. The model card is the AI equivalent of the data sheet you'd read before specifying an electrical component.

A **system card** is a newer artifact, popularized by OpenAI and Anthropic for their large frontier deployments, that documents not just the model but *the entire system around it*: the safety mitigations, the evaluation results, the red-teaming findings, the deployment policies, the incident-response posture. Where a model card describes the *engine*, a system card describes the *vehicle the engine is in*.

| Document    | Scope                          | What it tells you                                  | When you read it                  |
|-------------|--------------------------------|----------------------------------------------------|-----------------------------------|
| Model card  | A specific trained model       | Training data, intended use, performance, biases   | Before adopting the model         |
| System card | A deployed AI system           | Safety mitigations, evaluations, incident posture  | Before integrating the system     |

The IS-organization discipline is to *demand both* from any vendor pitching an AI capability and to read both with the same skepticism you would apply to a SOC 2 report or a pen-test summary. A vendor who can't produce a model card or a system card is selling you a black box, and a black box in production is a footgun looking for a foot.

## Putting It All Together

Artificial intelligence is no longer a chapter at the back of the IS book — it is a layer that runs through every chapter, every system, and every job description in the field.

- **Artificial intelligence** is the umbrella; **machine learning** is the dominant subfield; **predictive ML** is the workhorse making most of the enterprise money; **generative AI** is the loud transformation rewriting how humans interact with software.
- **Foundation models** generalize across tasks; **large language models** are the text-specialized foundation models that anchor most enterprise generative AI. **Prompts** are the natural-language inputs you give them; **prompt engineering** is the discipline of writing prompts reliably.
- **Vector embeddings** turn meaning into geometry; **vector databases** make that geometry searchable at scale; **retrieval-augmented generation** combines the two to ground a model in your data; **RAG architecture** is the indexing-plus-query pipeline that makes it work in production.
- **Hallucination** is the defining failure mode of unaided LLMs; **grounding** is the structural fix; **guardrails** sit in front of, behind, and around the model to constrain behavior; **human in the loop** is the structural fallback when stakes are high.
- **AI agents** add tools, planning, and autonomy; **agentic workflows** wire those agents into multi-step processes — multiplying both capability and risk through error compounding.
- **AI in ERP, CRM, and ITSM** is where most organizations encounter AI first, embedded into systems they already run.
- The **AI value chain** — data → model → application → outcome — is the mental model that keeps every project honest about where its weakest link lives.
- **Build vs. buy AI**, with **model API** as the third option, is the strategic question shaping every AI investment. **Model cards** and **system cards** are the documents you demand before adopting any third-party model or system.

A graduate of this chapter walking into their first AI conversation should be able to ask, in order: *Is this predictive or generative? What does the AI value chain look like for this use case? Where is the data coming from, and is it good enough? Are we building, buying, or calling an API — and have we actually compared the three? Is the model grounded, and how? Where are the guardrails, and where is the human in the loop? Have we read the model card and the system card? And how will we know in 90 days whether this is actually working?* That is a more sophisticated set of AI questions than most teams ask in their first year of deployment. You can ask all of them after a single chapter.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just learned the working vocabulary of AI in information systems — predictive vs. generative, foundation models and LLMs, prompts and prompt engineering, embeddings and vector databases, RAG and grounding, hallucinations and guardrails, agents and agentic workflows, AI inside ERP/CRM/ITSM, the AI value chain, the build-vs-buy-vs-API decision, and the documentation discipline of model and system cards. Twenty-six concepts, one chapter, and a vocabulary sharper than most of the LinkedIn AI thought leaders you will meet in the wild. Chapter 20 picks up where this one leaves off: how to make all of this *responsible* — fair, transparent, accountable, and safe. The fun part is that you will recognize most of the structural fixes, because you already met them here. Onward.


## References

[See Annotated References](./references.md)
