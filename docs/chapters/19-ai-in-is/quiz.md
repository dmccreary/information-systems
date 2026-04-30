# Quiz: AI in Information Systems

Test your understanding of the AI landscape in IS — predictive ML, generative AI, agents, and the build/buy/API decisions for AI features.

---

#### 1. The relationship between Artificial Intelligence and Machine Learning is best described as:

<div class="upper-alpha" markdown>
1. ML is a broad field that includes AI as a subset
2. AI and ML are unrelated disciplines
3. AI is a broad field; ML is a subset of AI focused on systems that learn patterns from data
4. ML is a specific cloud product offered by AWS
</div>

??? question "Show Answer"
    The correct answer is **C**. AI is the broad field of building systems that exhibit intelligent behavior. Machine learning is the subset that focuses on systems that learn patterns from data rather than being explicitly programmed. Deep learning is a further subset of ML using neural networks. The other options invert or misstate the hierarchy.

    **Concept Tested:** Machine Learning

---

#### 2. A foundation model is best characterized as:

<div class="upper-alpha" markdown>
1. A model trained from scratch for a single narrow task
2. A specific model required by GDPR
3. A large model trained on broad data that can be adapted (via fine-tuning, prompting, or RAG) to many downstream tasks
4. A type of relational database
</div>

??? question "Show Answer"
    The correct answer is **C**. Foundation models are large, pre-trained models (LLMs like GPT-class models, Claude, Llama; vision models like CLIP) that are general-purpose enough to be adapted to many tasks rather than trained for one task at a time. They are the platform layer of modern AI. The other options misstate the concept.

    **Concept Tested:** Foundation Model

---

#### 3. A vector database stores:

<div class="upper-alpha" markdown>
1. Bitmap images only
2. Compiled application binaries
3. Spreadsheets exported from Excel
4. Numerical vector embeddings (high-dimensional representations of text, images, or other content) and supports fast similarity search
</div>

??? question "Show Answer"
    The correct answer is **D**. Vector databases (Pinecone, Weaviate, Milvus, pgvector, FAISS) store vector embeddings and provide approximate-nearest-neighbor search to find similar items quickly. They are foundational infrastructure for retrieval-augmented generation, semantic search, and recommendation systems. The other options describe unrelated storage types.

    **Concept Tested:** Vector Database

---

#### 4. A team is building a customer-support assistant grounded on the company's policy documents. Without grounding, the LLM sometimes confidently makes up policy answers that don't match reality. Which architecture most directly addresses this hallucination problem?

<div class="upper-alpha" markdown>
1. Retrieval-Augmented Generation (RAG) — retrieve relevant policy passages from a vector store and pass them into the prompt to ground the answer in real source text
2. Fine-tuning the model on customer chitchat
3. Increasing the model's temperature parameter
4. Removing all guardrails
</div>

??? question "Show Answer"
    The correct answer is **A**. RAG retrieves relevant source passages at query time and provides them in the prompt so the model's answer is grounded in real text rather than its parametric memory. RAG dramatically reduces hallucinations on factual queries when the corpus is curated. Fine-tuning, raising temperature, and removing guardrails do not address grounding.

    **Concept Tested:** Retrieval Augmented Generation

---

#### 5. An AI agent is best characterized by its ability to:

<div class="upper-alpha" markdown>
1. Generate static reports from a fixed template
2. Replace the relational database
3. Perceive its environment, reason about goals, take actions through tools, and iterate based on results
4. Run only on edge devices
</div>

??? question "Show Answer"
    The correct answer is **C**. An AI agent combines an LLM (or similar reasoner) with the ability to call tools/APIs, observe results, and iterate toward a goal — going beyond one-shot response generation. Agentic workflows can chain many steps with checkpoints and human oversight. The other options describe unrelated systems.

    **Concept Tested:** AI Agent

---

#### 6. A team must decide whether to build an LLM-based feature using a hosted model API, fine-tune an open-weight model on their own data, or build a custom model from scratch. Evaluating these options for a typical enterprise feature where speed-to-value matters and data sensitivity is moderate, which is usually the best first choice?

<div class="upper-alpha" markdown>
1. Use a model API from a major provider, with appropriate data-handling controls and grounding via RAG
2. Train a custom 70B-parameter model from scratch in-house
3. Build a non-AI rule-based system instead
4. Wait two years for AI to mature
</div>

??? question "Show Answer"
    The correct answer is **A**. For most enterprise features, calling a hosted model API with appropriate enterprise data-handling controls (no-training-on-inputs, region selection, audit logging) and grounding via RAG is the fastest path to value at acceptable cost. Training a custom model from scratch is rarely justified outside of specific differentiator use cases. The other options dismiss rather than reason about the option space.

    **Concept Tested:** Build vs Buy AI

---

#### 7. A model card describes:

<div class="upper-alpha" markdown>
1. The marketing brochure for an AI product
2. A standardized document covering an AI model's intended use, training data, evaluation results, limitations, and ethical considerations
3. A specific GPU SKU
4. The pricing tier for an API
</div>

??? question "Show Answer"
    The correct answer is **B**. Model cards (introduced by Mitchell et al., 2019) provide standardized documentation for an AI model — what it is for, who it was tested on, where it works well, where it fails, and known biases. Increasingly, system cards extend this to whole AI systems. They are foundational to responsible AI deployment, distinct from marketing or pricing.

    **Concept Tested:** Model Card

---

#### 8. A guardrail in an LLM-based application typically:

<div class="upper-alpha" markdown>
1. Filters or constrains inputs and outputs to enforce safety, policy, format, or topic boundaries
2. Speeds up the GPU
3. Replaces the need for testing
4. Is the same as a prompt
</div>

??? question "Show Answer"
    The correct answer is **A**. Guardrails are layers around the model that filter or constrain inputs (refuse certain user requests) and outputs (block sensitive content, enforce structured formats, prevent jailbreaks). They are typically implemented as separate components rather than baked into the model. Speed, testing, and prompts are unrelated concepts.

    **Concept Tested:** Guardrail

---

#### 9. A bank deploys an AI model that produces good results in tests but occasionally generates plausible-sounding but factually wrong loan-eligibility explanations to customers. Evaluating the deployment plan, which control is most important?

<div class="upper-alpha" markdown>
1. Lower the model's temperature to zero and ship without further changes
2. Combine grounding (e.g., RAG over policy documents), guardrails, and human-in-the-loop review for consequential decisions, with monitored hallucination metrics
3. Trust the model's confidence as a proxy for accuracy
4. Hide the explanations from customers entirely
</div>

??? question "Show Answer"
    The correct answer is **B**. For consequential decisions like loan eligibility, the responsible deployment combines grounding to anchor outputs in source documents, guardrails to filter unsafe responses, human review for high-stakes outcomes, and ongoing monitoring of hallucination metrics. Lowering temperature alone does not solve hallucination; model confidence is unreliable; hiding explanations defeats transparency obligations.

    **Concept Tested:** Hallucination

---

#### 10. A new department lead suggests using AI to "fully automate" a regulated, high-stakes decision process — for example, hiring, lending, or medical triage — with no human review. Evaluating this proposal against the chapter's guidance:

<div class="upper-alpha" markdown>
1. The proposal is sound; AI should always replace human judgment in regulated processes
2. The proposal is appropriate for routine cases but should preserve human-in-the-loop review for high-stakes, contestable, or edge-case decisions, with clear oversight tiers based on impact
3. The proposal should be accepted only if the model uses the highest available temperature
4. There is no real concern; regulators do not look at automation in these domains
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's framing is that human-in-the-loop oversight should be designed deliberately — full automation may be appropriate for low-impact routine decisions, but high-stakes, contestable, or edge-case decisions require human review. Regulators in hiring, lending, and healthcare specifically expect meaningful human oversight. The other options misjudge the risk and the regulatory environment.

    **Concept Tested:** Human in the Loop

---
