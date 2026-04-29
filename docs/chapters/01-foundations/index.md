---
title: Foundations of Information Systems
description: Establishes the working vocabulary every IS student needs — data, information, knowledge, the five-component model, the IT vs IS distinction, and the ABET CAC criteria that anchor the rest of the textbook.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:04:13
version: 0.07
---

# Foundations of Information Systems

## Summary

Establishes the working vocabulary every IS student needs: information system, data, information, hardware, software, people, process, and the relationships among them.

**Role in the course:** Build the shared vocabulary used in every later chapter — what a system is, what data is, what an organization is, and how IS connects them.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

1. Information System
2. Data
3. Information
4. Knowledge
5. DIKW Hierarchy
6. Hardware
7. Software
8. Network
9. User
10. Business Process
11. Organization
12. Stakeholder
13. Business Value
14. Strategy
15. Digital Transformation
16. IT vs IS Distinction
17. Sociotechnical System
18. ABET CAC Criteria

## Prerequisites

This chapter assumes only the prerequisites listed in the [course description](../../course-description.md).

---

!!! mascot-welcome "Hi! I'm Iris."
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Information Systems! I'm **Iris**, a hummingbird with a slightly unreasonable enthusiasm for enterprise knowledge graphs. I'll be popping into the margins all the way through this book, but I do not show up randomly. I have a few jobs, and you'll learn to recognize me by which one I'm doing:

    1. **Welcome you** at the start of every chapter — that's what I'm doing right now.
    2. **Help you think things through** when an idea is the kind that turns into your first promotion.
    3. **Give you tips** — the moves a working IS pro would make that nobody writes down.
    4. **Warn you gently** about the places where smart students and smart projects get into trouble.
    5. **Encourage you** when a concept looks scary on first contact. (It's almost never as bad as it looks.)
    6. **Celebrate with you** at the end of each chapter when you've earned it.

    That's it. If I'm not doing one of those six things, I'm not in the chapter. Deal? Good. Let's fly!

## Why This Chapter Exists

Information systems are the connective tissue of the modern organization. A hospital admitting a patient, a bank approving a loan, a university registering a student, a logistics firm routing a truck — every one of those organizations runs on information systems that capture data, transform it into decisions, and propagate the result back into the world. If you understand how that loop works — and how to design, govern, and improve it — you become *extremely* useful to any employer that has more than three customers.

That is the quiet thesis of this entire textbook: **Information Systems is one of the highest-leverage careers a college student can pick.** You will not just be the person who "knows computers." You will be the person who can sit in a meeting with the CFO, the marketing director, and a vendor sales rep, and translate accurately among all three. That translation skill is your superpower. This chapter installs the vocabulary it depends on.

We will not cover everything in one chapter. That would be cruel. What we *will* do is establish the eighteen foundational concepts that every later chapter assumes you already know — the way a math textbook assumes you know what a number is.

## From Data to Insight: The DIKI Hierarchy

Before we can define an *information system*, we have to define *information*. And to define information, we have to define what it is built from. Information Systems is a field that loves to use ordinary English words — *data*, *information*, *knowledge* — as if they were interchangeable. They are not. The difference among them is the entire point of this section, and the foundation of every chapter that follows.

We will build the vocabulary in three deliberate steps:

1. First we will look at a simple **three-layer mental model** — the Knowledge Triangle — that gives us a picture to point at.
2. Then we will use that picture to **pin down three words precisely**: *Data*, *Information*, *Knowledge*.
3. Finally we will **extend the model to four layers** by adding *Insight*, giving us the DIKI Hierarchy that the rest of the book uses.

Take these in order. Each step earns the next.

### Step 1: A Picture First — The Knowledge Triangle

The **Knowledge Triangle** is the simplest version of the model we will use throughout the book. Three layers, each visually distinct, each one built on top of the layer beneath it:

- The **bottom** layer is what a hard drive actually contains: a sea of 0s and 1s with no semantics. If you ran a raw byte dump and squinted, this is what you would see.
- The **middle** layer is what those bits *become* once they are extracted into facts: isolated little circles, each labeled "Fact." A fact is a self-contained chunk of meaning, but on its own it is still disconnected from everything else.
- The **top** layer is the smallest and the most valuable: a *graph* in which facts are linked to other facts. It is the connections among the facts, not the facts themselves, that produce knowledge.

Hover over any layer in the MicroSim below to read its full working definition. Wherever this textbook says "data," "information," or "knowledge" — **these three definitions are what those words mean.** Not "data" the way a marketing slide deck means it. *These* ones.

#### Diagram: Knowledge Triangle

<iframe src="../../sims/knowledge-triangle/main.html" width="100%" height="502px" scrolling="no"></iframe>
[Run Knowledge Triangle Fullscreen](../../sims/knowledge-triangle/main.html)

<details markdown="1">
<summary>Knowledge Triangle</summary>
Type: interactive-infographic
**sim-id:** knowledge-triangle<br/>
**Library:** p5.js<br/>
**Status:** Implemented

A three-level triangle in p5.js. Bottom layer = Data (raw 0s and 1s on a black "disk dump" background). Middle layer = Information (isolated "Fact" circles in a gray field — disconnected facts). Top layer = Knowledge (a graph of connected nodes — facts joined by edges). Hovering any layer pops a callout with the working definition the rest of the book uses.

Used in Chapter 1 to anchor the vocabulary before introducing the four-level DIKI Hierarchy below. Wherever this textbook says "data," "information," or "knowledge" — this is what those words mean.
</details>

### Step 2: The Three Words, Defined Precisely

Now that you have seen the picture, here are the three definitions, written down once and used everywhere else in the book. We will use a hospital scenario — a patient named Marisol Chen — to make each one concrete.

- **Data** is a raw fact or observation, recorded but not yet interpreted. The string `98.6`. The string `Marisol Chen`. The number `4.7`. None of these mean anything on their own.
- **Information** is data placed in context so that it answers a question. `Body temperature 98.6°F at 14:32 for patient Marisol Chen` is information. The fact has been associated with a measurement type, a unit, a timestamp, and a subject — and now it can drive a decision.
- **Knowledge** is information combined with experience and rules so that it can be acted on. *"Marisol's temperature has held within 0.4°F of normal for six straight readings, which is the pattern that means we can discharge her this afternoon"* is knowledge. It synthesizes many pieces of information against a rule the clinician learned over years.

That is the entire vocabulary the rest of the book is built on. These three terms appear on nearly every page of this textbook, and they are also the three terms most often used loosely in industry — where "data" gets shouted into slide decks as a synonym for facts, information, knowledge, and sometimes even wisdom. We are not going to do that here. **We will use these three words precisely and consistently throughout the entire book**, with the definitions above. If you remember nothing else from this chapter, remember those three words and the way they nest inside one another.

### Step 3: Adding a Fourth Layer — Insight, and the DIKI Pyramid

Three layers gets you most of the way. But the modern AI and data-science era asks one more question: *what is the deliverable that comes out of all this work?* That gives us a fourth term, sitting on top of Knowledge: **Insight**.

Older textbooks call the four-level version the **DIKW Hierarchy** — Data, Information, Knowledge, **Wisdom** — and you will still see that name in management literature from the 1980s and 1990s. Modern data-science practice replaces the top rung with **Insight**, giving us the **DIKI Hierarchy**: Data, Information, Knowledge, Insight. The shift is more than cosmetic. *Wisdom* is a virtue; *Insight* is a deliverable. An insight is something you can put on a dashboard, attach to a Jira ticket, or feed back into the next model. That is what data-driven organizations actually produce, so that is the framing this book uses.

Here is the new fourth definition, again grounded in Marisol's case:

- **Insight** is an actionable, often non-obvious finding distilled from knowledge — usually surfaced by analytics, machine learning, or careful data exploration. *"Across our unit, patients matching Marisol's discharge profile have a 15% higher 72-hour readmission rate when transportation is not pre-confirmed before 3pm"* is an insight. It is the kind of statement that changes a process, retrains a model, or wins a budget meeting.

Now we have the full four-level pyramid the rest of the book uses. The reason this hierarchy matters — and the reason we belabor it — is that **most failed IS projects fail at a *layer transition***, not at a layer. The system collected data but never turned it into information (a dashboard nobody can read). It produced information but never integrated it into knowledge (a report nobody acts on). It accumulated knowledge but never distilled it into insight (a wiki page nobody opens). Throughout this textbook we will keep returning to one diagnostic question: *which layer are you actually serving, and which transition is silently breaking?*

#### Diagram: DIKI Hierarchy Interactive Pyramid


<iframe src="../../sims/diki-pyramid/main.html" width="100%" height="602px" scrolling="no"></iframe>
[Run DIKI Hierarchy Interactive Pyramid Fullscreen](../../sims/diki-pyramid/main.html)

<details markdown="1">
<summary>DIKI Hierarchy Interactive Pyramid</summary>
Type: interactive-infographic
**sim-id:** diki-pyramid<br/>
**Library:** p5.js<br/>
**Status:** Specified

A four-level pyramid drawn in p5.js, drawn responsively to fill the available iframe width. From bottom to top, the four layers are labeled **Data**, **Information**, **Knowledge**, **Insight**, in that order. Bottom layer is widest (full canvas width minus padding) and shortest in height; each layer above is narrower; top "Insight" layer is smallest.

Color palette (light mode): Data = light steel blue, Information = medium teal, Knowledge = forest green, Insight = warm gold. Each layer has a 1px darker border and white label text centered horizontally.

Interactivity: when the user hovers over (or taps) a layer, a callout box slides out to the right of the pyramid showing:

- The layer name in bold
- A one-line definition
- A concrete example using a hospital-patient scenario:
  - Data: "98.6"
  - Information: "Patient Marisol Chen, oral temperature 98.6°F, 14:32 on April 28"
  - Knowledge: "Marisol's six consecutive normal readings indicate she meets the discharge criterion"
  - Insight: "Patients matching Marisol's discharge profile have a 15% higher 72-hour readmission rate when transportation is not pre-confirmed before 3pm"

Below the pyramid, a single sentence reads: "Most IS projects fail at a layer transition. Which layer are you actually serving?"

A small footer note on the diagram reads: "Older texts call this the DIKW Hierarchy with *Wisdom* at the top; modern data-science practice prefers *Insight* because it names a deliverable rather than a virtue."

Layout: pyramid centered, callout box appears to the right at desktop widths and below at narrow widths (responsive). Canvas resizes on window resize events. The setup() function calls updateCanvasSize() as its first step. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Understanding): Students can correctly classify a given example into Data, Information, Knowledge, or Insight and explain why.

Implementation: p5.js, single `main.html`, accompanying `index.md` doc, deployed at `/sims/diki-pyramid/`.
</details>

## What Is an Information System?

With Data, Information, and Knowledge in hand, we can finally write the working definition this whole textbook depends on:

> An **Information System (IS)** is an organized combination of people, processes, hardware, software, networks, and data that collects, stores, processes, and disseminates information in support of an organization's goals.

Notice what that definition does and does not say. It does *not* say "a computer program." It does not say "a database." It does not say "the IT department's stuff." An information system is **not the same thing as the technology it runs on**. An information system is a *combination* — and removing any of the six elements (people, process, hardware, software, network, data) breaks it.

The classical model of an IS is therefore called the **five-component model** (the original Kroenke formulation, which folds Data into the Hardware-Software-Network-People-Process count, but most current textbooks list six components by promoting Data to its own slot). We will use the six-component version because it makes data's role explicit, and data is the entire reason the system exists.

Let's define each component:

- **Hardware** — the physical devices the system runs on: servers, laptops, phones, sensors, network switches, the storage arrays in the data center. This is the only component you can drop on your foot.
- **Software** — the instructions that tell the hardware what to do. Operating systems, applications, scripts, the firmware in your router. Software is intangible but legally protected, which is a fun thing to think about for about three seconds.
- **Network** — the channels by which devices communicate, ranging from a building's LAN to the global internet. The network is what makes the system *system*-shaped instead of just *box*-shaped.
- **Data** — the raw facts the system captures, stores, and serves. The reason for the whole exercise. We will spend two entire chapters on this later (Chapters 6 and 7), so we will not belabor it here.
- **User** (a kind of "people") — the human beings who interact with the system to do work. A nurse charting vitals, an accountant reconciling invoices, a logistics planner approving a route change. In IS we are very precise about *user*: the user is the person whose work the system exists to support.
- **Business Process** (a kind of "process") — the structured sequence of activities the organization performs to produce a result. "Approve a loan." "Discharge a patient." "Onboard a new employee." We will study process modeling in Chapter 5, but you should already have the concept: a process is *what the work is*, separate from the system that supports it.

#### Diagram: Six-Component Model of an Information System


<iframe src="../../sims/six-component-model/main.html" width="100%" height="602px" scrolling="no"></iframe>
[Run Six-Component Model of an Information System Fullscreen](../../sims/six-component-model/main.html)

<details markdown="1">
<summary>Six-Component Model of an Information System</summary>
Type: interactive-infographic<br/>
**sim-id:** six-component-model<br/>
**Library:** vis-network<br/>
**Status:** Implemented

A vis-network diagram with six labeled nodes arranged in a hexagon: **Hardware**, **Software**, **Network**, **Data**, **User**, **Business Process**. Each node is colored by category — Hardware (slate gray), Software (lime green), Network (steel blue), Data (gold), User (warm coral), Business Process (lavender). Each node has an icon (Material Design Icons): hardware = `mdi-server`, software = `mdi-application-braces`, network = `mdi-lan`, data = `mdi-database`, user = `mdi-account`, business process = `mdi-sitemap`.

All six nodes are connected to each of the other five (a complete graph K6), but edges have a slight y-offset (e.g., 480 → 490 baseline) to avoid the vis-network horizontal-edge label rendering bug. Edges are unlabeled by default, light gray, 1px.

Interactivity: when a user clicks a node, a side panel reveals (a) a one-sentence definition of that component, (b) a concrete example from a hospital admission scenario, and (c) the question *"What breaks if this component is missing?"* with a one-line answer. Example for "User": "If the nurse cannot or will not chart accurately, the data layer becomes unreliable and every dashboard above it lies."

A toggle below the diagram switches between three example scenarios: hospital admission, loan approval, university course registration. The same six components remain; only the side-panel descriptions change.

Layout: responsive, fills available iframe width, height ~500px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Given a real-world organizational task, students can identify which entity in the scenario plays each of the six roles.

Implementation: vis-network, deployed at `/sims/six-component-model/`.
</details>

The single most important thing to remember about the six-component model is: **the components are interdependent**. You cannot upgrade one without considering the other five. Buy a fancier server (hardware) and your old database engine (software) may not exploit it. Roll out a new application (software) without retraining the people (user) and adoption tanks. Redesign the process and the existing software fights you all the way down.

## Stakeholders, Organizations, and Why IS Cares

The user is not the only person who matters to an information system. The full set of people whose interests the system has to respect is called the set of **stakeholders**.

A stakeholder is any individual or group who is affected by the system, or who can affect it. That includes the obvious people (users, the IT team, the project sponsor) but also less obvious ones — regulators, customers, downstream systems, the auditors who will eventually want to know who changed what and when. A surprising number of IS project disasters trace back to a stakeholder who was not invited to the requirements meeting and showed up later holding a clipboard.

The system also lives inside an **organization** — a coordinated group of people pursuing shared goals through structured roles, processes, and resources. Organizations have strategies, budgets, hierarchies, and politics, and your information system inherits all of them whether or not you wanted to. The phrase you will hear in industry is *"every IS project is also an organizational change project."* That sentence has saved many careers.

!!! mascot-thinking "Pause here — this one matters"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    The single most common rookie mistake in IS is treating a system as a *technology* problem when it is actually a *stakeholder* problem. If your project plan has only IT names on it, you have not yet started the project — you have started a science fair entry. The first question on any new IS initiative is not "what stack should we use?" It is "who are the stakeholders, and which of them are missing from this room?"

## Business Value and Strategy

Why do organizations spend money on information systems at all? Because IS produces **business value** — the measurable benefit (in revenue, cost reduction, risk reduction, customer satisfaction, regulatory compliance, or strategic optionality) that an organization gets from the system.

In a healthy IS organization, *every* project has a stated business value at its top. "We will deploy this CRM upgrade because it will reduce average handle time on customer calls by 12%, which at our call volume is worth roughly $1.4M per year, and will free 3 FTE for higher-value work." That sentence is not just a budget justification; it is the criterion you will later use to decide whether the project succeeded.

Business value never exists in a vacuum. It is delivered against an organizational **strategy** — the long-term plan that defines how the organization will compete and win. A strategy says: "We compete on cost." Or: "We compete on customer intimacy." Or: "We compete on speed of innovation." Each of those strategies implies completely different IS investments. A cost-leadership strategy needs ruthlessly efficient transactional systems. A customer-intimacy strategy needs unified customer data and rich analytics. A speed-of-innovation strategy needs developer productivity tooling and a flexible cloud posture.

**Strategic alignment** — the practice of making sure your IS portfolio actually serves the organization's strategy — is the single biggest predictor of IS effectiveness. We will return to it in Chapter 2.

## IT vs IS: A Distinction Worth Memorizing

Here is a vocabulary trap that has confused students, executives, and (occasionally) HR departments for forty years:

**Information Technology (IT)** is the technology stack — the hardware, software, networks, and the technical people who run them.

**Information Systems (IS)** is the broader discipline that uses IT *plus* people, process, and organizational context to produce business outcomes.

IT is a strict subset of IS. Every IS contains IT, but IS is bigger.

Before we look at the comparison table below, here is the rule that drives every cell in it: IT focuses on *technology assets*; IS focuses on the *business outcome those assets enable*. Where IT measures uptime and patch level, IS measures customer satisfaction and decision quality. Where IT thinks in releases, IS thinks in *organizational change*.

| Dimension              | Information Technology (IT)                  | Information Systems (IS)                                       |
|------------------------|----------------------------------------------|----------------------------------------------------------------|
| Primary focus          | The technology stack                         | The business outcome the technology produces                   |
| Typical question       | "Is the server up?"                          | "Did this system reduce loan approval time?"                   |
| Typical roles          | Sysadmin, network engineer, DBA, dev         | Business analyst, IS project manager, enterprise architect, CIO |
| Includes people?       | Yes (the IT team)                            | Yes (everyone the system touches)                              |
| Includes process?      | Mostly technical processes                   | Yes — including the business processes the system supports     |
| Success metric         | Uptime, latency, patch compliance            | Business value delivered, strategic alignment                  |
| Career framing         | Build and run technology                     | Connect technology to organizational outcomes                  |

If you remember nothing else from this section: **IT runs the servers, IS runs the company through the servers.** When a job posting says "Information Systems" it usually means the broader role; when it says "IT" it usually means the narrower one. Pay attention to the word the employer chose. (And on your résumé, choose the word that matches the work you actually want.)

!!! mascot-tip "Pro move"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    When you join any new IS team, the fastest way to get oriented is to ask one question: *"Walk me through what happens, end-to-end, when a customer does X."* Substitute "X" with the most common transaction the organization runs — placing an order, opening an account, scheduling an appointment. The answer will introduce you to the systems, the people, the data flow, and the friction points all at once. You will learn more in that one conversation than in a week of reading documentation.

## Digital Transformation

The phrase **digital transformation** gets thrown around so loosely that it has become a punchline in some boardrooms — but the concept is real, and it matters.

Digital transformation is the use of digital technologies (cloud, AI, mobile, data platforms, automation) to fundamentally change how an organization creates and delivers value, rather than merely automating existing work. The distinction between *transformation* and mere *automation* is critical. There are three levels at which IS can change a process:

1. **Automate** — do the existing process faster and cheaper. (Bank tellers replaced by ATMs. The process — withdraw cash — did not change.)
2. **Informate** — produce data exhaust from the process and use it to improve the process. (ATMs generate a transaction log; the bank uses it to optimize cash distribution and detect fraud.)
3. **Transform** — change what the process *is*. (The bank's "branch" becomes the customer's phone, the relationship manager becomes an algorithm-plus-chat-agent, and the very shape of "banking" becomes something different from what it was in 1990.)

Real digital transformation hits level 3. Most organizations claim they are doing transformation while actually doing automation, and that gap is one of the most reliable sources of consulting revenue in the modern economy.

A digital transformation initiative typically touches every component of the six-component model — new hardware (mobile devices, sensors), new software (cloud-native applications), new networks (5G, edge), new data sources (clickstream, IoT), new user roles (data-literate frontline workers), and entirely new processes. That is why digital transformations fail so often: they are six simultaneous change projects pretending to be one.

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    "Digital transformation" is the most over-claimed phrase in the IS industry. Whenever you encounter it on a job posting, a vendor pitch, or a corporate strategy slide, do this little test: ask, *"Which level — automate, informate, or transform — does this initiative actually reach?"* Most "transformation" projects are automation in a fancy hat. That is fine — automation is genuinely valuable! — but knowing the difference will save you from setting expectations you cannot meet.

## Sociotechnical Systems: Why IS Is Not Just Engineering

By now you may have noticed a pattern. Every time we define an IS concept, we end up adding "and the people, and the process, and the organizational context." That is not an accident. Information systems are formally categorized as **sociotechnical systems** — systems whose behavior emerges from the interaction of *social* components (people, organizations, culture, incentives, politics) and *technical* components (hardware, software, networks, data).

Sociotechnical systems theory comes out of mid-20th-century work at the Tavistock Institute, originally studying coal mines, and it makes one strong claim: **you cannot optimize the social and technical halves independently.** Tune the technical layer in isolation and the social layer rejects it. Tune the social layer in isolation and the technical layer cannot deliver. The two halves co-evolve, and good IS practice respects that co-evolution.

This is why "the IT department installed a new system and nobody uses it" is the most common failure mode in our field. The technical work was completed. The sociotechnical work was not. From the perspective of sociotechnical systems theory, those two pieces are not separate — the project was simply unfinished.

Practical implication: every IS course you ever take, every IS project you ever ship, will have a *technical track* (build the thing) and a *change-management track* (help the organization absorb the thing). Both tracks have to land. We will revisit this in Chapters 5 (BPM), 16 (Project Management), and 23 (AI Productivity Impact), where the change-management track gets disproportionately interesting.

!!! mascot-encourage "You're doing fine"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Iris encourages you">
    If "sociotechnical system" is the first phrase in this chapter that made your eyes glaze, that is normal — it is an academic-flavored term for a very practical idea. The whole concept boils down to this: *people and technology are one system, and a fix that ignores either half is not a fix.* You already know this from your own life. You have seen group chats die because the wrong person was added. You have watched a club fall apart when its scheduling tool changed. You already think sociotechnically; you just did not have the vocabulary yet. Now you do.

## What ABET Asks of an IS Curriculum

A few final words about the architectural beam this entire textbook is built on. The course you are taking is aligned with the **ABET Computing Accreditation Commission (CAC) 2025–2026 Program Criteria for Information Systems**, which specify the minimum topic areas every accredited IS program must cover. Those criteria are why this book has the chapters it has.

The criteria require coverage of six core topic areas, all of which are addressed across the 25 chapters that follow:

| ABET CAC IS topic area                          | Where this textbook covers it                                                                       |
|-------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| Application development                         | Chapter 4 (Application Development), Chapter 10 (Systems Analysis and Design)                       |
| Data and information management                 | Chapter 6 (Data Foundations), Chapter 7 (Modern Databases), Chapter 8 (Data Governance)             |
| Networks and telecommunications for business    | Chapter 11 (Networks and Telecommunications)                                                        |
| Role of IS in organizations                     | Chapter 1 (this chapter), Chapter 2 (Role of IS), Chapter 3 (IS Architecture)                       |
| Project management of IS resources              | Chapter 16 (IS Project Management)                                                                  |
| Security of information assets                  | Chapter 14 (Security), Chapter 15 (Privacy & Compliance), Chapter 22 (AI and Information Security)  |

The criteria also expect an "environment of an organization" framing — meaning every technical topic is taught in business context, not as a standalone CS topic. This textbook takes that mandate further by weaving an AI thread (Chapters 19–23) and an Enterprise Knowledge Graph thread (Chapters 24–25) through the back half. ABET requires the foundation; we are building on top of it.

If you graduate from an ABET-accredited IS program, employers, graduate programs, and professional societies (AIS, ISACA, PMI) recognize a specific bundle of competencies. This textbook is engineered to deliver that bundle plus a credible introduction to the AI-and-knowledge-graph future.

## Putting It All Together

We have covered eighteen concepts. Let's end by stitching them into one sentence you can carry into Chapter 2:

> An **information system** combines **hardware, software, networks, data, users, and business processes** to capture **data**, transform it into **information** and **knowledge**, and deliver **business value** in service of an **organization's strategy**, accountable to its **stakeholders**, governed by criteria like **ABET CAC**, and recognized as a **sociotechnical system** in which any change — whether mere **automation**, deeper **informating**, or full **digital transformation** — must respect the social half as carefully as the technical half. **IS is not the same as IT**: IT runs the servers, IS runs the organization through them.

If that sentence makes sense to you, you have all the foundation you need for the rest of the book. If parts of it still feel hazy, that is fine — every later chapter will reinforce these concepts. We come back to them constantly.

!!! mascot-celebration "You did it!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just installed the eighteen vocabulary primitives the entire textbook will use. From here on out, when I say "stakeholder," you will know I mean something more specific than "person who cares." When I say "transform," you will know I do not mean "automate harder." And when somebody at a future internship confidently mixes up *IT* and *IS*, you will catch it — quietly, kindly, and with the small private smile of a person who knows the difference. Onward to Chapter 2, where we look at how IS earns its seat at the strategy table.


## References

[See Annotated References](./references.md)
