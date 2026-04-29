---
title: 'Systems Analysis and Design'
description: How analysts turn vague business requests into buildable specifications — feasibility, UML for IS, prototyping, JAD, requirements traceability, RFPs, vendor evaluation, and testing.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# Systems Analysis and Design

## Summary

Treats the analyst's craft as the bridge between business need and built system: feasibility, use cases, user stories, UML for IS, prototyping, joint application design, and requirements traceability.

**Role in the course:** Show students how a vague business request becomes a buildable specification — the discipline that distinguishes an IS professional from a generalist coder.

## Concepts Covered

This chapter covers the following 23 concepts from the learning graph:

1. Feasibility Study
2. Cost Benefit Analysis
3. Use Case
4. Use Case Diagram
5. Activity Diagram
6. Sequence Diagram
7. Class Diagram
8. State Diagram
9. UML for IS
10. Joint Application Design
11. Prototyping
12. Wireframe
13. Mockup
14. Functional Specification
15. Requirements Traceability
16. Gap Analysis
17. Make or Buy Decision
18. RFP Process
19. Vendor Evaluation
20. System Testing
21. User Acceptance Testing
22. Test Plan
23. Defect Tracking

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Information Systems](../01-foundations/index.md)
- [Chapter 2: The Role of IS in Organizations](../02-role-of-is/index.md)
- [Chapter 4: Application Development for IS](../04-appdev/index.md)
- [Chapter 5: Business Process Management](../05-bpm/index.md)
- [Chapter 6: Data Management Foundations: Modeling, SQL, and Transactions](../06-data-foundations/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 10. Up to this point we have talked about how applications get built (Chapter 4), how processes get modeled (Chapter 5), and how data gets organized (Chapter 6). This chapter sits between all of them. It is about the analyst's craft — the work of turning *"can we build something that does the thing?"* into a specification a developer can actually build, a vendor can actually bid on, and a tester can actually verify. By the end of this chapter you will be able to walk into a conference room labeled "requirements workshop" without panicking, draw a use case diagram from scratch, write a feasibility study that does not embarrass you, run an RFP that vendors take seriously, and recognize the moment a project is about to drown in requirements debt. The systems analyst sits at the most leverage-rich seam in the entire IS organization. Let's go collect that seam.

## Why Analysis Matters: The 100x Problem

Before we touch a single tool or diagram, let us anchor the chapter on one stubborn empirical fact. A defect found during requirements analysis costs roughly *one unit* to fix. The same defect found during design costs *five*. During coding, *ten*. During testing, *twenty to fifty*. After the system has shipped to production and caused a customer-visible outage, *one hundred to one thousand*. The numbers vary by study and by industry, but the *shape* of the curve is the most empirically robust finding in software engineering.

That curve is the entire economic argument for systems analysis. The analyst's job is to drag defects leftward — to find them at the cheap end of the curve, where they are conversations and pencil marks, before they become code, before they become production incidents, before they become apology emails to a CFO. Every concept in this chapter — feasibility, use cases, JAD, prototypes, traceability — is a different lever for moving defect discovery to the left.

The footgun lurking in the opposite direction is *too much* analysis. Spend a year writing a 400-page specification and the world will have changed under you before you write the first line of code. Analysis is a leverage point, not a destination. The discipline is to do *exactly enough* analysis to retire the project's biggest risks — not less, not more.

## Feasibility Study: Should We Even Try?

The first question on any new IS project is not *how do we build it?* It is *should we build it at all?* A **Feasibility Study** is a structured assessment, conducted before serious commitment, that answers that question along several dimensions. The output is a recommendation — *go, no-go,* or *go with these changes* — backed by evidence and signed by people who can be quoted later.

The classical feasibility analysis covers five dimensions, each asking a different version of "is this realistic?"

| Feasibility dimension     | Asks                                                          | Typical evidence                                          |
|---------------------------|---------------------------------------------------------------|-----------------------------------------------------------|
| Technical feasibility     | Can we actually build it with the technology and skills we have? | Architecture sketch, proof-of-concept, skill-gap analysis |
| Economic feasibility      | Will the benefits exceed the costs over the system's lifetime? | Cost-benefit analysis, NPV, payback period                |
| Organizational feasibility| Does the org have the will and structure to adopt it?         | Stakeholder map, change-readiness assessment              |
| Legal feasibility         | Will it comply with laws, regulations, and contracts?         | Regulatory review, privacy assessment, license audit      |
| Schedule feasibility      | Can we finish it before the window closes?                    | Milestone plan, dependency analysis, risk register        |

A feasibility study that only checks the technical box is the most common rookie mistake. A system can be technically buildable, economically wasteful, organizationally rejected, legally radioactive, and three years late — all simultaneously. The five dimensions exist because all five have killed real projects.

The footgun in feasibility is *advocacy disguised as analysis*. Sponsors who have already decided to do the project hire someone to "do the feasibility study," and the resulting document validates the predetermined decision. The structural fix is to charter the feasibility study with explicit authority to say *no*, and to evaluate the analyst on whether they surfaced real risks — not on whether their recommendation matched the sponsor's preference.

## Cost Benefit Analysis: The Numbers Underneath the Decision

Inside the economic dimension of the feasibility study sits the most quantitative tool of the chapter: **Cost Benefit Analysis** (CBA). CBA is the disciplined enumeration of every cost and every benefit a project will generate over its lifetime, expressed in comparable units (usually money), and rolled up into a recommendation.

A respectable CBA includes the following components:

- **One-time costs** — software licenses, hardware, implementation services, internal labor for the build, training, data migration, parallel-running costs during cutover.
- **Recurring costs** — annual subscriptions, support contracts, hosting, ongoing maintenance, periodic upgrades, the help-desk staff who will answer questions about the new system forever.
- **Tangible benefits** — labor savings, error-reduction savings, cycle-time reductions converted to dollars, capacity increases that defer the next hire, license consolidations.
- **Intangible benefits** — improved customer satisfaction, better decision quality, reduced compliance risk, increased employee retention. These are real; they are hard to quantify; they should be named even when they cannot be priced.
- **Risk-adjusted timing** — when costs and benefits actually land, discounted to present value, with sensitivity analysis on the assumptions most likely to be wrong.

The number that emerges is usually one of three: a **payback period** (how long until cumulative benefits cover cumulative costs), a **net present value** (the time-value-adjusted total benefit minus total cost), or an **internal rate of return** (the discount rate at which NPV equals zero). Finance will tell you which they prefer; the analyst's job is to produce the inputs honestly.

The footgun is *benefits inflation*. Every project sponsor wants their project funded, and the easiest way to get a project funded is to inflate the benefit estimates and hope nobody audits them in three years. The structural fix is to track benefits *post-implementation* — to actually measure whether the labor savings materialized, whether the cycle time really dropped — and to feed those measurements back into the next CBA the same sponsor proposes. Organizations that do this find that benefit estimates get dramatically more accurate over time. Organizations that don't keep funding projects on the strength of fiction.

## Use Case: The Atom of Behavior

Once a project has cleared feasibility, the analyst's first job is to figure out what the system actually has to do. The most useful single concept for that work is the **Use Case**. A use case is a description of how an actor (a person or another system) interacts with the system to achieve a goal. The use case names the actor, names the goal, and walks through the steps — the *main success scenario* and the important *alternative flows* and *exception flows*.

A good use case is small and focused. *"Place an order"* is a use case. *"Reset password"* is a use case. *"Submit timesheet for approval"* is a use case. *"Manage everything"* is not a use case — it is a wish list with a verb in front of it.

A typical use case template includes:

- **Name** — a short verb phrase from the actor's perspective.
- **Primary actor** — who is trying to accomplish the goal.
- **Stakeholders and interests** — anyone else who cares about the outcome (the company, the regulator, the auditor).
- **Preconditions** — what must be true before the use case can start.
- **Trigger** — what kicks off the use case.
- **Main success scenario** — the numbered steps of the happy path.
- **Alternative flows** — branches off the main path that still succeed.
- **Exception flows** — what happens when something goes wrong.
- **Postconditions** — what is true after the use case completes successfully.

Use cases are the *expanded cousin* of the user stories you met in Chapter 4. A user story (*"As a customer, I want to save my address, so that I do not retype it"*) is an invitation to a conversation; a use case is the conversation, written down. Most modern teams use both — stories for sprint-level planning, use cases for the bigger flows that need detail before any code gets written.

## Use Case Diagram: The Map of Behavior

A **Use Case Diagram** is a UML diagram that shows the system, the actors who interact with it, and the use cases each actor participates in — all on a single page. The notation is deliberately spare. The system is a labeled rectangle. Actors are stick figures outside the rectangle. Use cases are ellipses inside the rectangle. Lines connect actors to the use cases they participate in.

The diagram is not a specification. It is a *table of contents* for the use cases — a one-page answer to *"what does this system do, and for whom?"* Stakeholders who would never read a 40-page requirements document will happily mark up a use case diagram with a Sharpie. That alone makes it earn its keep.

Two relationships beyond the simple actor-to-use-case line are worth knowing:

- **Include** — one use case always uses the behavior of another (drawn as a dashed arrow labeled `<<include>>`). *"Place Order"* includes *"Validate Credit Card."*
- **Extend** — one use case sometimes adds optional behavior to another under a specific condition (`<<extend>>`). *"Place Order"* might be extended by *"Apply Promo Code"* when one is supplied.

Use the two relationships sparingly. A use case diagram cluttered with includes and extends has stopped being a table of contents and started being a small, ugly programming language.

#### Diagram: Use Case Diagram for a Small Library System

<details markdown="1">
<summary>Use Case Diagram for a Small Library System</summary>
Type: interactive-infographic
**sim-id:** library-use-case-diagram<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network use case diagram showing a small public-library system. The system boundary is a labeled rectangle titled "Library System." Inside the rectangle, ellipses represent the use cases: *Search Catalog*, *Borrow Item*, *Return Item*, *Renew Loan*, *Place Hold*, *Pay Fine*, *Manage Catalog*, *Generate Reports*, and *Authenticate User*. Outside the rectangle, three actors as stick figures: *Patron* (left), *Librarian* (right), and a system actor *Payment Gateway* (bottom). Lines connect each actor to the use cases they participate in: Patron connects to Search/Borrow/Return/Renew/Hold/Pay; Librarian connects to Manage Catalog/Generate Reports plus all Patron-facing use cases (since librarians also help walk-in patrons); Payment Gateway connects to Pay Fine. *Authenticate User* is connected via dashed `<<include>>` arrows from *Borrow Item*, *Place Hold*, and *Pay Fine*. *Apply Late-Fee Waiver* is shown as an `<<extend>>` of *Pay Fine*. To work around the vis-network horizontal-edge label rendering bug, lines with `<<include>>` and `<<extend>>` labels use a slight y-offset (480 to 490) so labels render correctly on initial load.

Color palette: system boundary in slate-gray, ellipses in mascot-emerald, actors in dark teal, include/extend arrows in coral with dashed line styles. Authentication use case highlighted in mascot-magenta as the cross-cutting concern.

Interactivity: hovering each use case opens a side panel showing the canonical use-case template for that case (preconditions, main success scenario, alternative flows, postconditions). Clicking an actor highlights every use case that actor participates in. A "show includes/extends" toggle hides or reveals the dashed relationship arrows so students can see the diagram with and without the advanced notation.

Layout: actors on the left and right margins, use cases clustered inside the boundary, height ~520px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can read a use case diagram, identify the actors and use cases, distinguish `<<include>>` from `<<extend>>`, and produce a use case template for any ellipse on the page.

Implementation: vis-network, deployed at `/information-systems/sims/library-use-case-diagram/`.
</details>

## UML for IS: The Five Diagrams Worth Learning

The use case diagram is one member of a larger family. **UML for IS** — the Unified Modeling Language as practiced by information systems analysts (as opposed to systems-engineering or embedded-software practitioners) — boils down to roughly five diagrams that earn their keep. UML defines fourteen diagram types in total; the IS analyst can do excellent work knowing five of them deeply and the rest as cocktail-party trivia.

Before we go deeper, here is the scoreboard. Each row tells you what the diagram is *for* and when to reach for it.

| UML diagram         | Models                                              | Use it when                                                |
|---------------------|-----------------------------------------------------|------------------------------------------------------------|
| Use case diagram    | Actors and the goals they pursue                    | Scoping the system; aligning stakeholders                  |
| Activity diagram    | Workflow with decisions and parallelism             | Designing or documenting a process or algorithm flow       |
| Sequence diagram    | Time-ordered messages between objects/actors        | Designing an interaction across components or services     |
| Class diagram       | Static structure: classes, attributes, relationships| Designing the data model or domain model                   |
| State diagram       | The lifecycle of a single object across states      | Modeling anything with a status field worth respecting     |

Now let's introduce each of the four new ones in turn — defining every element in prose before any diagram references it.

### Activity Diagram: Workflow With Teeth

An **Activity Diagram** models the *flow of work* through a process, with explicit decisions, parallel paths, and merge points. It is UML's answer to the flowchart, with a richer notation. The core elements are:

- **Action** — a unit of work, drawn as a rounded rectangle with a verb-phrase label (*"Validate Credit Card"*). Conceptually similar to a BPMN activity.
- **Initial node** — a solid black dot marking where the flow begins.
- **Final node** — a bullseye (concentric circles) marking where the flow ends.
- **Decision node** — a diamond marking a branch where one outgoing edge is taken based on a guard condition.
- **Merge node** — a diamond marking where alternative paths rejoin.
- **Fork** — a thick horizontal bar where one flow splits into multiple parallel flows.
- **Join** — a thick horizontal bar where parallel flows rejoin (all incoming flows must complete before continuing).
- **Swimlane** — vertical or horizontal partitions assigning actions to actors, just like in BPMN.

Activity diagrams overlap heavily with BPMN, and many teams use them interchangeably for IS work. The rough rule: BPMN if the audience is business analysts, activity diagrams if the audience is software designers. The shape of the diagram is the same; the notation is just dialect.

### Sequence Diagram: Time, Top to Bottom

A **Sequence Diagram** models an *interaction* — a specific sequence of messages exchanged among objects, components, or actors over time. Time runs from top to bottom; participants are columns. The notation:

- **Lifeline** — a vertical dashed line below each participant, representing that participant's existence over time.
- **Activation bar** — a thin rectangle on a lifeline, indicating that the participant is actively doing something.
- **Synchronous message** — a solid arrow with a filled arrowhead, representing a call where the sender waits for a reply.
- **Asynchronous message** — a solid arrow with an open arrowhead, where the sender does not wait.
- **Return message** — a dashed arrow showing the reply.
- **Self-message** — a message a participant sends to itself.
- **Combined fragment** — a labeled rectangle wrapping several messages, used to express alternatives (`alt`), loops (`loop`), or parallel sections (`par`).

Sequence diagrams are the diagram of choice when you need to design or document an interaction across services — *"how does the order-placement flow move data among the web frontend, the order service, the inventory service, and the payment gateway?"* They are also the most common diagram in API design conversations, because they expose timing, ordering, and which calls block which.

#### Diagram: Sequence Diagram for "Place Order"

<details markdown="1">
<summary>Sequence Diagram for "Place Order"</summary>
Type: interactive-infographic
**sim-id:** place-order-sequence-diagram<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js sequence diagram showing the "Place Order" interaction across five participants drawn as columns left to right: *Customer (Browser)*, *Web Frontend*, *Order Service*, *Inventory Service*, *Payment Gateway*. Time flows downward. The Customer sends a synchronous message *submitOrder(items, payment)* to the Web Frontend, which calls *createOrder(...)* on Order Service. Order Service sends *reserveItems(...)* synchronously to Inventory Service, which returns a *reservationId*. Order Service then calls *charge(amount, token)* synchronously on Payment Gateway, which returns a *paymentConfirmation*. An `alt` combined fragment wraps two cases: payment succeeds (Order Service confirms reservation and returns *orderConfirmed*) versus payment fails (Order Service calls *releaseItems(reservationId)* on Inventory Service and returns *orderFailed*). The Web Frontend returns the result to the Customer.

Color palette: lifelines in slate-gray, activation bars in mascot-emerald, synchronous messages in dark teal, return messages dashed in coral, the `alt` fragment outlined in mascot-magenta. Each participant column header includes a small icon indicating whether it is a human, a UI, or a service.

Interactivity: a "play" button animates a token traveling along the messages in time order, pausing at each step to display the message name, payload schema, and expected response. A toggle lets the user step through both branches of the `alt` fragment. Hovering an activation bar shows what the participant is doing during that interval. A "show timing" toggle adds approximate latency budgets to each message arrow, making the diagram pull double-duty as a performance-budget conversation.

Layout: full canvas width, height ~600px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Applying): Students can read a sequence diagram, identify each participant and message type, follow the time order, and trace both branches of an `alt` combined fragment.

Implementation: p5.js, deployed at `/information-systems/sims/place-order-sequence-diagram/`.
</details>

### Class Diagram: The Domain on a Page

A **Class Diagram** models the *static structure* of a system — the classes (or, in IS work, the entity types), their attributes, their operations, and the relationships among them. The notation:

- **Class** — a rectangle divided into three compartments: name on top, attributes in the middle, operations on the bottom.
- **Attribute** — a named property with a type, optional visibility marker (`+` public, `-` private, `#` protected).
- **Operation** — a method or behavior, with parameters and return type.
- **Association** — a line between classes indicating they relate to each other, often labeled with a verb and *multiplicities* (e.g., `1`, `0..1`, `1..*`, `*`).
- **Aggregation** — a line ending in an open diamond, indicating a "has-a" relationship where the parts can exist without the whole (a Department *has* Employees).
- **Composition** — a line ending in a filled diamond, indicating a stronger "owns-a" relationship where the parts cannot exist without the whole (an Order *owns* its OrderLines).
- **Generalization** — a line ending in a hollow triangle pointing at the parent, indicating inheritance ("is-a").

For IS work, class diagrams overlap heavily with the entity-relationship diagrams you met in Chapter 6. The rough rule: ER diagrams when the conversation is about a database schema, class diagrams when the conversation is about an object model. They describe the same underlying domain.

### State Diagram: When Things Have a Lifecycle

A **State Diagram** (also called a state machine diagram) models the *lifecycle* of a single object — the states it can be in, the events that move it between states, and the actions that fire on transitions. The notation:

- **State** — a rounded rectangle with a label, representing a condition the object can be in.
- **Initial pseudostate** — a solid black dot, marking where the lifecycle begins.
- **Final state** — a bullseye, marking where the lifecycle ends.
- **Transition** — an arrow between two states, labeled with `event [guard] / action`.
- **Self-transition** — a transition that returns to the same state.
- **Composite state** — a state that contains nested sub-states.

State diagrams are the right tool any time you have an object with a *status field that matters*. Loan applications have status. Insurance claims have status. Help-desk tickets have status. Orders have status. Whenever a domain object moves through a meaningful sequence of conditions — and especially when business rules differ depending on the status — the state diagram is the cheapest way to make those rules explicit.

#### Diagram: State Diagram for "Loan Application Status"

<details markdown="1">
<summary>State Diagram for "Loan Application Status"</summary>
Type: interactive-infographic
**sim-id:** loan-application-state-diagram<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network state diagram showing the lifecycle of a loan application. States, drawn as rounded rectangles: *Draft*, *Submitted*, *Under Review*, *Awaiting Documents*, *Approved*, *Conditionally Approved*, *Denied*, *Withdrawn*, *Funded*, *Closed*. The initial pseudostate (black dot) connects to *Draft* via a transition labeled `applicantStarts`. From Draft to Submitted via `applicantSubmits`. Submitted to Under Review via `analystAssigned`. Under Review branches to Approved (`creditCheckPasses`), Conditionally Approved (`needsAdditionalInfo`), or Denied (`creditCheckFails`). Conditionally Approved transitions to Awaiting Documents via `requestDocs`, then back to Under Review via `docsReceived`. From any non-terminal state, a transition to Withdrawn via `applicantWithdraws`. Approved transitions to Funded via `disburseFunds`, then to Closed via `paidOff` or `defaulted`. Denied and Withdrawn lead to a final state (bullseye). Self-transitions are shown on Under Review for `analystAddsNote` (no state change, but logged). To work around vis-network's horizontal-edge label rendering bug, transitions use a slight y-offset (480 to 490) where labels are present.

Color palette: states in slate-gray with mascot-emerald accents on terminal-success states (Funded, Closed via paidOff), coral on terminal-failure states (Denied, Withdrawn, Closed via defaulted), amber on intermediate-attention states (Awaiting Documents). Transition arrows in dark teal with event labels in white-bordered text boxes for legibility.

Interactivity: a "play" simulation walks an example application through the states, pausing at each transition to display the event, the guard condition, the action triggered, and which database fields change. A "show invalid transitions" toggle highlights all the transitions that are *not* allowed (e.g., Funded directly to Draft) — making the state diagram's role as a business-rule guardrail explicit. Clicking a state opens a side panel showing what business operations are legal in that state.

Layout: hierarchical, top-down, height ~600px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can read a state diagram, list the legal transitions out of any state, and explain why a state diagram is the appropriate tool for an object with a meaningful lifecycle.

Implementation: vis-network, deployed at `/information-systems/sims/loan-application-state-diagram/`.
</details>

!!! mascot-thinking "Pause here — pick your diagram on purpose"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    There is a quiet superpower in knowing which UML diagram to reach for. *Use case* answers "what does the system do, and for whom?" *Activity* answers "how does the work flow?" *Sequence* answers "how do the parts talk to each other in time?" *Class* answers "what are the things and how do they relate?" *State* answers "what is the lifecycle of this thing?" If you find yourself drawing a sequence diagram to model a status field, you are using the wrong tool — and the diagram will fight you the whole way. Pick the question first, then pick the diagram. The teams that ship cleanly are the teams that match the diagram to the question.

## Joint Application Design: Get Everyone in the Room

Documents are the wrong unit of analysis when stakeholders disagree. **Joint Application Design** (JAD) is a structured workshop format — invented at IBM in the late 1970s and refined for decades since — in which the analyst gets all the relevant stakeholders into a single room (or, increasingly, a video call) for a focused, time-boxed session, and the room produces requirements *together* rather than via the slow telephone game of one-on-one interviews.

A JAD session has a **facilitator** (a neutral analyst who runs the room), an **executive sponsor** (who shows up at the start and end to anchor goals), the **business stakeholders** (the people whose work the system supports), the **IT participants** (developers, architects, DBAs), and a **scribe** (who captures decisions in real time on a screen everyone can see). Sessions run from a half-day to a full week, structured around an agenda of decisions to make — not topics to discuss.

The reason JAD outperforms traditional one-at-a-time interviews is structural: when stakeholders disagree, the disagreement surfaces *immediately* in the room rather than emerging weeks later as the analyst tries to reconcile contradictory interview notes. The room sees the conflict, debates it, and reaches a decision (or escalates it explicitly to the sponsor) before anyone leaves. The cycle time from question to answer drops from weeks to minutes, and the resulting requirements are owned by the people who participated rather than imposed on people who weren't.

The footgun in JAD is the *passive participant* — a stakeholder who attended physically but didn't engage, then sandbagged the requirements after the session by raising objections that should have been raised in the room. The structural fix is in the facilitation: explicitly poll every participant on every major decision, document who agreed to what, and make the participation visible. Silence at the JAD session is consent for the rest of the project.

## Prototyping: Show, Don't Specify

The fastest way to get accurate requirements out of a stakeholder is not to ask them what they want — it is to *show them something* and watch what they say. **Prototyping** is the practice of building a deliberately incomplete, deliberately cheap version of (part of) the system, putting it in front of users, and using their reactions as the requirements-elicitation engine.

There is a spectrum of prototype fidelity worth knowing:

- **Low-fidelity prototypes** — sketches on paper or whiteboard, intentionally crude, designed to provoke conversation about flow and content rather than visual design. Cheap to make, even cheaper to throw away.
- **Wireframes** — see below.
- **Mockups** — see below.
- **Interactive prototypes** — clickable sequences (in tools like Figma, Sketch, or Axure) that simulate navigation but have no real backend.
- **Functional prototypes** — small working slices of the actual system, with real (if limited) data and behavior. Closest to the final product, most expensive to build.

The strategic choice is always *how much fidelity is enough?* Too low and stakeholders cannot react meaningfully to the experience; too high and the prototype starts to feel like a commitment that the team has to defend. A good rule of thumb: build the prototype at the *lowest fidelity that still answers the question you have right now*. If the question is "is the navigation sensible?" — paper sketches will do. If the question is "will the executive dashboard actually inform a decision?" — you may need real data plumbed through.

The footgun in prototyping is the *prototype that becomes the product*. A prototype built quickly, with no error handling, no security, no tests, and no architectural review, gets shown to an executive who says, "Great, ship it." The team then spends six months removing the duct tape that the prototype was *built out of* — usually after the prototype has already gone live and has already accumulated users. The structural fix is to be explicit, on the first slide of every prototype demo, about whether what is being shown is throwaway code, evolutionary code, or production-bound code. The audience will respect the answer; the audience will not respect the surprise.

### Wireframe vs Mockup: Two Words People Use Wrong

Two terms in the prototyping vocabulary cause more confusion than the entire rest of the chapter combined.

A **Wireframe** is a low-fidelity, structural sketch of a screen. It shows *layout* and *content hierarchy* — where the navigation goes, where the main content is, where the buttons are, what fields a form contains — using grayscale boxes, placeholder text, and stick-figure rectangles for images. Wireframes deliberately omit color, typography, branding, and visual polish. The point is to discuss *structure* without the conversation getting hijacked by "could the button be more teal?"

A **Mockup** is a high-fidelity, *visual* representation of the same screen. It shows real colors, real typography, real images, real branding, and pixel-accurate layout. Mockups are what you produce after the wireframe has been approved and the conversation moves to visual design. Mockups are not interactive — clicking a button does nothing — but they are visually indistinguishable from screenshots of the finished product.

| Aspect            | Wireframe                                       | Mockup                                            |
|-------------------|-------------------------------------------------|---------------------------------------------------|
| Fidelity          | Low — grayscale, placeholder content            | High — final colors, typography, imagery          |
| Purpose           | Discuss layout and content hierarchy            | Discuss visual design and branding                |
| Production cost   | Minutes to hours                                | Hours to days                                     |
| Stakeholder reaction | "Where does the user click?"                  | "Could the button be more teal?"                  |
| Built before      | Mockup                                           | Interactive prototype                             |
| Common tool       | Balsamiq, paper, whiteboard                      | Figma, Sketch, Adobe XD                            |

The teams that conflate wireframes and mockups end up debating brand colors when they should be debating navigation, and debating navigation after the navigation is too expensive to change. Use the right artifact for the right conversation.

!!! mascot-tip "Iris's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    Pro move: when you show a wireframe, do it in *literal grayscale* — no color, no real typography, no logo. The instant a wireframe gets brand colors, executives start critiquing the brand colors, and the layout conversation evaporates. Keep the wireframe ugly on purpose. The layout decisions you make while it is ugly are the ones that will survive.

## Functional Specification: The Build Contract

Once use cases, prototypes, and JAD sessions have produced a coherent picture of what the system should do, that picture has to be written down somewhere durable. The traditional name for that artifact is the **Functional Specification** — sometimes called a "functional spec," a "requirements document," or in some shops an "SRS" (Software Requirements Specification). The functional spec is the *contract* between the people who decided what to build and the people who are going to build it.

A functional specification typically includes:

- **System overview** — what the system is, who it's for, and the business goals it supports.
- **Functional requirements** — what the system must do, organized by feature area or use case.
- **Non-functional requirements** — performance, availability, security, scalability, accessibility (review Chapter 4 for the *-ilities*).
- **Use cases or user stories** — the structured behaviors the system must support, with acceptance criteria.
- **Data model** — the entities, attributes, and relationships the system manages (the class or ER diagram).
- **External interfaces** — APIs, file formats, integrations with other systems.
- **Constraints and assumptions** — regulatory, technological, organizational.
- **Glossary** — the domain terms used in the spec, defined unambiguously.

The functional spec sits at a *tradeoff axis* between two failure modes. **Over-specification** produces a thousand-page document that nobody reads, that becomes obsolete the moment requirements change, and that the team treats as a bureaucratic obstacle rather than a guide. **Under-specification** produces ambiguity that the team resolves at coding time — usually badly, and usually in the direction that produces the most rework. The right level of specification depends on the project's stability, regulatory environment, and team familiarity with the domain. Heavy upfront spec for a regulated medical device. Light spec for an internal dashboard the same team is going to iterate on weekly.

Modern agile teams have largely replaced the monolithic functional spec with a *living* set of artifacts: a backlog of user stories, a wiki of architectural decisions, a set of acceptance tests that double as documentation, and a small core spec that captures only the load-bearing facts. The functional spec did not die; it just got distributed across the artifacts that need to be kept current anyway.

## Requirements Traceability: The Audit Trail of Why

Imagine a 200-requirement system. Three years after launch, an auditor asks: *"Where did this requirement come from? Who approved it? Which use case does it satisfy? Which test verifies it? Which line of code implements it?"* If the answer is "let me get back to you," you have a problem.

**Requirements Traceability** is the practice of explicitly linking every requirement to its source (the stakeholder or business goal that produced it), to its design (the use case or component that satisfies it), to its implementation (the code or configuration that delivers it), and to its verification (the test that proves it works). The traditional tool is a **traceability matrix** — a spreadsheet (or, in serious organizations, a tool like IBM DOORS, Jama, or Polarion) where each row is a requirement and the columns track its lineage forward and backward.

Traceability earns its keep at three moments:

- **Change requests.** When a stakeholder asks for a change, traceability tells you instantly which use cases, which code, and which tests are affected. Without traceability, you guess — and you guess wrong.
- **Audits.** Regulated industries (healthcare, finance, defense, aerospace) require traceability as a matter of compliance; the audit asks for the matrix and the matrix had better exist.
- **Test coverage analysis.** Traceability tells you whether every requirement has at least one test verifying it. Requirements with no tests are a known unknown — and the unknown things are the ones that fail in production.

The footgun is treating traceability as *paperwork*. A traceability matrix that is updated once at the start of the project and never again is worse than no matrix at all — it provides false confidence. The structural fix is to make traceability a *side effect of doing the work*: requirements live in a tracked tool, code commits reference requirement IDs, tests reference requirement IDs, and the matrix is generated automatically from those links. When traceability is a database query, it stays current. When it is a Word document, it does not.

## Gap Analysis: What Is, What Should Be, What's Missing

Before any system gets built or bought, the analyst has to compare *what exists today* with *what needs to exist tomorrow*. **Gap Analysis** is the structured comparison of the as-is state and the to-be state, with each difference cataloged, sized, and prioritized. The gap is the work.

Gap analysis is most useful in three contexts. First, when evaluating whether an existing system can be extended versus replaced — which capabilities does it already deliver, which are missing, which are wrong? Second, when evaluating a packaged software product — which of our requirements does it satisfy out of the box, which require configuration, which require customization, and which it cannot satisfy at all? Third, when planning a process change — which steps in the as-is process need to change to reach the to-be? (You met this third use in Chapter 5.)

A typical gap analysis produces three buckets per requirement: *fully met* (no work needed), *partially met* (some work needed — quantify it), and *not met* (significant work needed — and probably a separate decision about whether to build, buy, or reframe). The buckets feed directly into the next two concepts.

## Make or Buy Decision: Build It or Get It

The **Make or Buy Decision** is the analyst's framing of what Chapter 4 called build-vs-buy-vs-SaaS, applied at the level of a specific capability inside the project. Should we build this module ourselves? Should we license a commercial product? Should we subscribe to a SaaS service? Should we extend an open-source project?

The decision rests on four axes:

- **Strategic differentiation.** Is this a capability where being different from competitors creates value? *Build* when yes; *buy* when no.
- **Maturity of the market.** Are there mature, well-supported products that solve this problem? *Buy* when yes; *build* when the market is immature or your need is genuinely unique.
- **Total cost of ownership.** Over the system's lifetime, including implementation, customization, integration, support, and eventual replacement — which is cheaper? Honest TCO comparisons usually surprise advocates of the build option.
- **Risk profile.** Build accepts execution risk (will we deliver on time?). Buy accepts vendor risk (will the vendor stay solvent? will their roadmap match ours? will they raise prices?). Pick the risk you can manage.

A useful heuristic from Chapter 4 bears repeating: *build only the capabilities that are differentiators; buy or subscribe to the commodity capabilities*. A bank's trading algorithm is a differentiator; the bank's general ledger is not. A streaming service's recommendation engine is a differentiator; the streaming service's expense-reporting system is not. Spend engineering attention where it can compound into competitive advantage.

## RFP Process: How Buyers Get Real Information

Once the make-or-buy decision lands on "buy," the analyst becomes the architect of the purchase process. The standard mechanism is the **RFP Process** — Request For Proposal. An RFP is a formal document the buyer sends to a curated list of vendors, asking each vendor to respond with a proposal that addresses the same questions in the same format, so that responses can be compared head-to-head.

A serious RFP includes the following sections:

- **Background and context** — who you are, what you do, the business problem you're solving.
- **Scope of work** — what the vendor's product or service is expected to deliver.
- **Functional requirements** — itemized, often with mandatory/desired/nice-to-have priorities, that vendors will attest to.
- **Non-functional requirements** — performance, security, availability, accessibility, regulatory compliance.
- **Technical environment** — your existing infrastructure, integration points, data volumes.
- **Implementation timeline** — your milestones, your go-live target, your tolerance for delay.
- **Support and SLA expectations** — uptime, response times, escalation procedures.
- **Pricing requirements** — how the vendor must structure the pricing (license model, usage-based, hybrid) so that responses are comparable.
- **Reference requirements** — names of existing customers in similar industries who will take your call.
- **Evaluation criteria** — how you will score the responses.
- **Submission instructions** — format, deadlines, contact, Q&A process.

A few less-formal cousins of the RFP are worth knowing. An **RFI** (Request For Information) is a softer, earlier-stage document used to survey the market before you have committed to a procurement. An **RFQ** (Request For Quotation) is the simplest version, used when you already know exactly what you want and just need prices. The RFP sits between them — used when the requirement is well-formed but the solution is not.

The footgun in RFP processes is the *over-specified RFP*. An RFP that demands every vendor answer 1,200 detailed questions filters out small-but-excellent vendors who can't afford the response cost, leaves you with only the large-and-mediocre vendors who have full-time RFP-response teams, and produces a stack of paper so thick that the evaluation committee can't actually compare the responses. The structural fix is to ask only the questions whose answers will *change* your decision. If three vendors will all answer "yes" to the same question, that question is decoration.

The dual footgun is the *under-specified RFP*. Vague requirements produce vague proposals, which produce contracts whose ambiguity gets resolved in the vendor's favor at every implementation crossroads. Specify enough that the vendor's response is a binding commitment.

## Vendor Evaluation: Scoring Responses Honestly

Once vendor responses are in, the team has to compare them. **Vendor Evaluation** is the disciplined activity of scoring each response against the criteria announced in the RFP, demoing the products, checking references, and producing a recommendation that survives executive scrutiny.

A typical evaluation rubric weights several criteria:

| Evaluation criterion       | What you're measuring                                       | Typical weight |
|----------------------------|-------------------------------------------------------------|----------------|
| Functional fit             | Coverage of mandatory and desired requirements              | 25-35%         |
| Technical fit              | Integration, scalability, security, architecture compatibility | 15-20%      |
| Total cost of ownership    | Five-year TCO (license, implementation, support, ops)       | 15-20%         |
| Vendor viability           | Financial health, customer base, roadmap, investment        | 10-15%         |
| Implementation approach    | Methodology, timeline credibility, team experience          | 10%            |
| References                 | Customer satisfaction, willingness to take your call again  | 10%            |
| User experience            | Demo quality, end-user reactions, accessibility             | 5-10%          |

The structural discipline that makes vendor evaluations honest is to *score independently*, then reconcile — give every evaluator the rubric, let each one score privately, and only then compare scores. The score variance reveals the disagreements that need actual conversation. Group-scoring sessions produce groupthink and let the loudest evaluator dominate; independent scoring produces signal.

The footgun is *demo dazzle*. Vendor sales engineers are professionally polished, the demo path runs through the parts of the product that work best, and the buyer leaves the demo with an impression several notches above the product's actual capabilities. The structural fix is to insist on a *scripted demo* — you write the scenarios you want to see, you provide the data, you require the vendor to demonstrate exactly the workflow you sent. A vendor who can't or won't run your script has just told you something important.

Reference checks are the second-best signal. Existing customers will tell you things the vendor will not — what broke during implementation, what the support experience is actually like, what the *next* contract negotiation felt like. Reference calls should be one-on-one, off-script, and asked in the form *"what do you wish you had known before signing?"*

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    There is a footgun lurking inside every "the vendor will customize it for us" promise. Custom code written by a vendor against their own product is *your* problem to maintain on every upgrade — but it lives inside *their* product, where your developers cannot see it and your tests cannot reach it. Two upgrades later, the customization either gets re-bid (expensive) or quietly breaks (worse). Before you sign a contract that includes vendor customization, get a written commitment to *who maintains the customization on every future upgrade, at whose cost, and with what testing*. If those answers are vague, the customization is going to become your most expensive feature.

## System Testing: Trust, but Verify

A system that has been built (or bought, or assembled from parts) is not the same thing as a system that *works*. Closing the gap between "built" and "works" is the discipline of testing, and it has its own vocabulary.

**System Testing** is the verification activity that exercises the *complete, integrated system* against its specified requirements — as opposed to *unit testing* (individual functions) or *integration testing* (a subset of components together). System testing happens after the system is fully assembled, in an environment that mirrors production as closely as practical, and it asks the question *does the whole thing, end to end, do what we said it would do?*

The standard testing levels form a pyramid, each one building on the last:

| Testing level         | Scope                                            | Performed by                          | Verifies                                       |
|-----------------------|--------------------------------------------------|---------------------------------------|------------------------------------------------|
| Unit testing          | Individual function or class                     | Developers                            | Each unit behaves correctly in isolation       |
| Integration testing   | Multiple units working together                  | Developers                            | Components communicate correctly               |
| System testing        | Complete integrated system                       | QA team                               | The system meets its specified requirements    |
| User acceptance testing | The system in the user's hands               | Business users                        | The system meets the *user's* needs            |
| Regression testing    | Re-run prior tests after a change                | Automated, ideally                    | New changes haven't broken old behavior        |

Each level has different cost economics. Unit tests are the cheapest to write and fastest to run, so we want lots of them. System tests are expensive (they need a full environment) and slow (they exercise the whole thing), so we want fewer but well-targeted ones. The pyramid shape — many unit tests, fewer integration tests, fewer still system tests, fewest UAT scenarios — is what well-tested systems look like in practice.

The leverage point is *shifting tests left* — moving as many of the verifications as possible into the cheap end of the pyramid, automated, run on every commit. A defect caught by a unit test costs roughly 1x. The same defect caught in UAT costs 50-100x. The same defect caught in production costs 100-1000x. *Shift-left testing* is one of the highest-leverage practices in modern IS work.

## User Acceptance Testing: The Real Final Boss

**User Acceptance Testing** (UAT) is the testing activity in which actual business users — not QA professionals, not developers — exercise the system against scenarios drawn from their real work, and decide whether the system meets *their* needs well enough to go live. UAT is the final gate before production deployment in most regulated organizations and most enterprise software contracts.

UAT is qualitatively different from the testing levels above it. System testing asks *does the system meet the spec?* UAT asks *does the system meet the need?* — and those are not the same question. A system can pass system testing perfectly and fail UAT spectacularly, because the spec described the wrong thing.

A well-run UAT has the following structural elements:

- **Defined entry criteria** — the system has passed system testing and is in a UAT-ready state.
- **Documented test scenarios** — drawn from the user's actual work, not from the spec.
- **Real (or realistic) data** — production-shaped data the users recognize.
- **Trained users** — UAT participants who have been briefed on the system and on the testing process.
- **Defined defect-classification rules** — what constitutes a *blocker* versus a *minor*.
- **Defined exit criteria** — the explicit *contract* that says what "passing UAT" means before the testing starts.

That last item — the **UAT exit criteria** — is the highest-leverage artifact in the entire chapter. The exit criteria are the *success contract* between the project team and the business. *"Zero blocker defects, fewer than five major defects, all critical use cases pass on the first attempt"* — that is a contract. *"Users are satisfied"* is not. Every fight at the end of an IS project comes from exit criteria that were not specified at the beginning.

## Test Plan: The Document That Holds It All Together

A **Test Plan** is the document that specifies the entire testing strategy for the project: what will be tested, how, by whom, in what environment, against what data, with what entry and exit criteria, on what schedule. The test plan is to testing what the functional specification is to building — the plan-of-record that everyone agrees to in advance.

A standard test plan covers:

- **Scope** — what is in and out of testing.
- **Test items** — the specific components, features, and integrations to be verified.
- **Features to be tested / not tested** — explicit lists in both directions.
- **Approach** — the testing levels, methodologies, and tooling.
- **Test environment** — the hardware, software, network, and data the testing requires.
- **Test data strategy** — where the data comes from, how it's refreshed, how PII is protected.
- **Roles and responsibilities** — who does what.
- **Schedule** — when each testing activity occurs.
- **Entry and exit criteria** — for each testing level.
- **Risks and mitigations** — what could derail testing and what we'll do about it.
- **Defect management process** — see the next section.

Modern agile teams often replace the monolithic test plan with a lighter set of artifacts — a test strategy at the project level, plus per-sprint test approaches and per-feature acceptance criteria. The form changes; the function does not. Some plan-of-record for testing has to exist, or testing becomes whoever-shows-up-with-a-laptop.

## Defect Tracking: Bugs Are Data

Every test eventually fails. When it does, the failure has to be captured, triaged, prioritized, fixed, retested, and closed — and the team has to be able to *see* the queue of failures collectively, not as a thousand emails. That is the role of **Defect Tracking** — the discipline (and the tooling) of treating every defect as a structured record with a lifecycle of its own.

A defect record typically captures: a unique ID, a title, a description, the steps to reproduce, the expected versus actual behavior, the environment where it was found, the severity, the priority, the assignee, the status, the linked requirement (this is where traceability earns its keep), and the linked test. Tools like Jira, Azure DevOps, GitHub Issues, Bugzilla, and ServiceNow IT Service Management dominate this space.

Severity levels are usually a four- or five-tier scale. A common scheme:

- **Blocker (S1)** — system unusable; no workaround. Stops the release.
- **Critical (S2)** — major functionality broken; workaround painful. Usually stops the release.
- **Major (S3)** — feature impaired; workaround exists. Negotiable for release.
- **Minor (S4)** — cosmetic or low-impact issue. Releasable.
- **Trivial (S5)** — typo, alignment, polish. Releasable; fix when convenient.

*Severity* and *priority* are different and are often confused. Severity is the *technical impact* of the defect; priority is the *business urgency* of fixing it. A typo on the homepage can be low severity and high priority. A crash in a feature nobody uses can be high severity and low priority. Tracking both, separately, lets the team have honest conversations about what to fix first.

The defect-tracking system is also where the project's *learning* lives. Recurring patterns of defects — *"40% of our defects are in the integration with System X"* — are the data the team needs to invest in better tests, better architecture, or in some cases a different vendor. Defect tracking is not just project hygiene; it is the project's diagnostic instrument.

The footgun is the **defect that becomes a feature**. A defect logged but never closed, never fixed, and never properly classified, eventually accumulates users who depend on the buggy behavior — and then "fixing" the defect becomes a breaking change. The structural fix is a regular *defect triage*: every open defect either gets a target release, gets explicitly deferred with a reason, or gets closed as won't-fix. Defects that drift forever in the backlog are a form of technical debt — and a particularly insidious one because they are already documented.

## Putting It All Together

Systems analysis and design is the discipline that bridges business need and built system. The arc of the chapter:

- A **feasibility study** answers whether a project should happen at all, across technical, economic, organizational, legal, and schedule dimensions. **Cost-benefit analysis** quantifies the economic axis honestly.
- A **use case** describes how an actor reaches a goal; a **use case diagram** shows all of them on a page. The broader **UML for IS** toolkit — **activity diagrams** for workflow, **sequence diagrams** for interaction, **class diagrams** for structure, **state diagrams** for lifecycles — gives the analyst a precise vocabulary for every kind of question.
- **Joint application design** gets the right people in the same room and surfaces disagreements while they're still cheap to resolve. **Prototyping** — at the right fidelity — uses real reactions to elicit real requirements. **Wireframes** discuss layout; **mockups** discuss visual design.
- The **functional specification** captures the build contract; **requirements traceability** keeps the lineage from stakeholder to code to test honest over the system's life.
- **Gap analysis** sizes the difference between as-is and to-be. The **make-or-buy decision** chooses the procurement strategy. The **RFP process** elicits comparable proposals from vendors; **vendor evaluation** scores them honestly with scripted demos and reference checks.
- **System testing** verifies the integrated system against the spec; **user acceptance testing** verifies the system against actual users' needs; the **test plan** is the document that holds the strategy together; **defect tracking** is how the team turns failures into data and learning.

The systems-thinking insight beneath all of it: every concept in this chapter is a lever for moving defects leftward — from production (where they cost 100x) to UAT (where they cost 50x) to system test (where they cost 20x) to design (where they cost 5x) to requirements (where they cost 1x). The analyst who understands that the chapter's tools are *all the same lever, applied at different positions* will reach for the right one at the right moment, and will spend their career shipping systems that work.

A graduate of this chapter walking into their first analysis engagement should be able to ask, in order: *Have we done a feasibility study, and along which axes? What are the use cases? Which UML diagrams will earn their keep here? Are we building, buying, or subscribing — and have we done the gap analysis to know? If we're buying, what's in our RFP and how will we evaluate responses? What does our test plan look like, and what are the UAT exit criteria? And how are we tracking defects so the project learns from them?* Those are the questions that distinguish an IS professional from a generalist coder. You can ask all of them after a single chapter.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just learned the working vocabulary of systems analysis and design — feasibility studies, cost-benefit analysis, use cases and use case diagrams, the five UML diagrams worth knowing, JAD workshops, the prototyping fidelity ladder, wireframes versus mockups, the functional specification, requirements traceability, gap analysis, the make-or-buy decision, the RFP process, vendor evaluation, the testing pyramid, UAT exit criteria, the test plan, and defect tracking. Next time somebody pitches a project without a feasibility study, you will hear *we don't yet know if this should exist.* Next time somebody hands you a 1,200-question RFP, you will hear *they have not asked which questions change the decision.* Next time somebody says "the system passed all the tests" without specifying which tests, you will hear *the level matters, and so do the exit criteria.* And next time a project ships on time, on budget, and actually works — you will recognize what good analysis looks like, because you will have seen most of it from the inside. Onward to Chapter 11, where we take the analyst's craft and apply it to the largest IS systems any organization runs: the enterprise applications.


## References

[See Annotated References](./references.md)
