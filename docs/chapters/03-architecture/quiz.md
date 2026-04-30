# Quiz: Information Systems Architecture

Test your understanding of the architectural patterns that hold modern information systems together.

---

#### 1. What is an organization's "application portfolio"?

<div class="upper-alpha" markdown>
1. The structured inventory of all the applications the organization runs, with owners and lifecycle stages
2. The collection of investments held by the company's pension fund
3. A list of programming languages approved for development
4. A subset of applications that are running in the cloud only
</div>

??? question "Show Answer"
    The correct answer is **A**. The application portfolio is a structured inventory of every application the organization runs — each with an owner, a business capability it supports, a lifecycle stage, an integration footprint, and a cost. Managing the portfolio is one of the central jobs of any modern IS organization. Without active portfolio management, applications accumulate without ever retiring, and the integration map becomes spaghetti.

    **Concept Tested:** Application Portfolio

---

#### 2. In a three-tier architecture, which tier is responsible for enforcing the business rules and orchestrating the workflow?

<div class="upper-alpha" markdown>
1. Presentation tier
2. Application tier
3. Data tier
4. Network tier
</div>

??? question "Show Answer"
    The correct answer is **B**. The application tier (also called the business logic or middle tier) is where the consequential decisions happen — eligibility checks, discount stacking, ticket routing, validation. The presentation tier renders information and accepts input; the data tier durably stores and retrieves data. There is no formally named "network tier" in the three-tier model.

    **Concept Tested:** Application Tier

---

#### 3. Which best describes the difference between TOGAF and the Zachman Framework?

<div class="upper-alpha" markdown>
1. TOGAF is for cloud and Zachman is for on-premise
2. TOGAF is a step-by-step process for evolving architecture; Zachman is a taxonomy for classifying architectural artifacts
3. TOGAF is open source while Zachman is proprietary
4. TOGAF is for small companies and Zachman is for Fortune 500 firms
</div>

??? question "Show Answer"
    The correct answer is **B**. TOGAF centers on the Architecture Development Method (ADM) — a phased process for evolving the enterprise architecture. Zachman is a 6x6 taxonomy that classifies architectural artifacts by interrogative (what/how/where/who/when/why) and perspective. They are complementary rather than competing — Zachman organizes what is, TOGAF plans what comes next.

    **Concept Tested:** TOGAF Framework

---

#### 4. Which integration pattern publishes immutable records of "something happened" that any number of consumers can subscribe to and process independently?

<div class="upper-alpha" markdown>
1. Shared database
2. Synchronous RPC
3. Event streaming
4. File transfer
</div>

??? question "Show Answer"
    The correct answer is **C**. Event streaming (often built on Kafka) publishes a continuous stream of immutable events, and multiple consumers can independently process them with replay capability. Shared database tightly couples two applications to one schema; synchronous RPC blocks the caller while waiting for a response; file transfer is batch-oriented with high latency.

    **Concept Tested:** Integration Pattern

---

#### 5. What is the primary function of an API gateway?

<div class="upper-alpha" markdown>
1. Storing all customer data in a single normalized database
2. Replacing the relational database with a graph database
3. Compiling source code into deployable binaries
4. Sitting between external clients and backend services to enforce cross-cutting concerns like authentication, rate limiting, and routing
</div>

??? question "Show Answer"
    The correct answer is **D**. An API gateway is infrastructure that sits between clients and backend services to handle cross-cutting concerns once — authentication, rate limiting, request routing, response caching, and logging — instead of every backend reimplementing them. API gateways are foundational for any organization exposing APIs to mobile apps or third parties, and especially for microservices architectures.

    **Concept Tested:** API Gateway

---

#### 6. A team is building a small internal application with a stable five-person engineering group and modest operational maturity. According to the chapter's guidance, which architecture is most likely the right fit?

<div class="upper-alpha" markdown>
1. A well-modularized monolithic architecture
2. A 30-service microservices estate with a service mesh
3. A pure event-driven architecture with no synchronous calls
4. A direct shared-database integration with three other systems
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter recommends starting with a well-modularized monolith and extracting services only when you can name the specific pain a split would solve. Premature microservices burn 70% of small-team energy on infrastructure rather than business value. Pure EDA and shared-database integrations introduce complexity or coupling that this team would not benefit from.

    **Concept Tested:** Monolithic Architecture

---

#### 7. A mobile screen needs only a customer's name and email, but the REST endpoint returns thirty fields. The screen also needs the customer's three most recent orders. Which API style most directly addresses this kind of over-fetching and multi-round-trip problem?

<div class="upper-alpha" markdown>
1. SOAP
2. Webhooks
3. GraphQL
4. File transfer
</div>

??? question "Show Answer"
    The correct answer is **C**. GraphQL lets the client describe exactly which fields and relationships it needs in a single query, eliminating both over-fetching and multiple round trips. SOAP is an older RPC style with similar fixed-shape limitations. Webhooks are push-based event notifications, not query APIs. File transfer is a batch integration pattern, not relevant to a mobile screen's needs.

    **Concept Tested:** GraphQL API

---

#### 8. A payment provider wants to notify your application the moment a payment succeeds, without your application having to repeatedly poll for status. Which mechanism is best suited?

<div class="upper-alpha" markdown>
1. A scheduled batch file transfer at midnight
2. A webhook from the payment provider to your application
3. A daily query against the payment provider's database
4. A REST GET endpoint your application owns
</div>

??? question "Show Answer"
    The correct answer is **B**. A webhook is precisely this push pattern: the payment provider POSTs an HTTP request to a URL your application has registered when the event occurs. Webhooks are the lightweight, real-time backbone of much SaaS integration. Polling, batch transfers, or owning a GET endpoint either introduce latency or place the burden on the wrong side.

    **Concept Tested:** Webhooks

---

#### 9. What is the OpenAPI Specification (formerly Swagger) primarily used for?

<div class="upper-alpha" markdown>
1. Encrypting API traffic between clients and servers
2. Defining a programming language for writing APIs
3. Providing a free SaaS hosting platform for APIs
4. Describing REST APIs in a machine-readable form so that documentation, client libraries, and contract tests can be generated automatically
</div>

??? question "Show Answer"
    The correct answer is **D**. The OpenAPI Specification is the de facto standard for describing REST APIs in machine-readable YAML or JSON. From an OpenAPI document, an enormous toolchain becomes available: auto-generated client libraries, interactive docs, mock servers, and contract tests. It is one of the highest-leverage standards in the field — small effort to write, large benefits to operate.

    **Concept Tested:** OpenAPI Specification

---

#### 10. An API team "fixes a bug" by changing a response field from a string to a number, ships the change without bumping the version, and three downstream systems begin producing wrong data on Tuesdays only. Analyzing this incident, what is the most accurate description of what went wrong?

<div class="upper-alpha" markdown>
1. The downstream consumers should have used GraphQL instead of REST
2. The team made a silent breaking change without proper API versioning, and the structural fix is contract testing in CI
3. The bug was correctly fixed; the downstream systems are at fault for not adapting
4. The API gateway should have prevented the field type change automatically
</div>

??? question "Show Answer"
    The correct answer is **B**. Changing a field's type is a breaking change and requires a new API version (or, at minimum, a coordinated deprecation cycle). The structural fix is contract testing in CI so that breaking changes fail the build before they ship. Blaming consumers ignores the API team's compatibility responsibility, GraphQL would not prevent type changes, and an API gateway does not validate semantic compatibility on its own.

    **Concept Tested:** API Versioning

---
