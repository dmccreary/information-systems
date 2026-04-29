---
title: 'IS Project Management'
description: How IS organizations charter, plan, schedule, monitor, and close projects — from project triangles and Gantt charts to risk registers, EVM, agile burndowns, and the PMO that ties it all together.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# IS Project Management

## Summary

Covers project charters, the scope/time/cost triangle, stakeholder management, work breakdown structures, agile project management (Scrum, Kanban, SAFe), risk registers, and change management.

**Role in the course:** Equip students to plan and run IS projects — one of the named ABET CAC criterion areas and a daily reality for every IS graduate.

## Concepts Covered

This chapter covers the following 30 concepts from the learning graph:

1. Project Charter
2. Scope Statement
3. Stakeholder Analysis
4. Stakeholder Register
5. Work Breakdown Structure
6. Project Schedule
7. Gantt Chart
8. Critical Path Method
9. Project Triangle
10. Risk Register
11. Risk Mitigation
12. Issue Log
13. Change Control
14. Communication Plan
15. PMBOK Guide
16. PRINCE2
17. Agile Project Management
18. Waterfall Project Management
19. Hybrid Project Management
20. Burndown Chart
21. Velocity
22. Earned Value Management
23. Project Closure
24. Lessons Learned
25. Project Portfolio Management
26. Program Management
27. PMO
28. Resource Leveling
29. Estimation Techniques
30. Stakeholder Engagement

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Information Systems](../01-foundations/index.md)
- [Chapter 3: Information Systems Architecture](../03-architecture/index.md)
- [Chapter 4: Application Development for IS](../04-appdev/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 16. We have spent a lot of pages on what information systems *are* and how they work. This chapter is about the messy human discipline of *getting one built on time*. By the end you'll be able to draft a project charter without flinching, defend a Gantt chart in a steering committee, find the critical path through a schedule before the schedule finds you, run a risk register that actually changes behavior, choose between waterfall, agile, and hybrid project management without picking a religion, and recognize the moment a project is being silently strangled by scope creep with the kind of polite enthusiasm that only kills software. Project management is one of the highest-leverage skills any IS graduate can collect — let's collect it.

## Why IS Projects Need Project Management

Every information system you have ever used was, at some point, a *project*. Somebody chartered it. Somebody scoped it. Somebody estimated it. Somebody made a schedule that — let's be honest — turned out to be wrong, and then somebody managed the gap between the schedule and reality until the system shipped, was retired, or quietly failed in a way nobody admitted to. The system is the artifact, but the project is the act that produced it.

A **project** is a temporary endeavor undertaken to produce a unique result, with a defined start and a defined end. That definition matters: projects are *bounded* in a way that ongoing operations are not. Running the help desk is operations. Replacing the help-desk ticketing system is a project. Once the new ticketing system is live and the old one is archived, the project is done — but the operations of running the new system continue forever. Confusing the two is the original sin of IS work; you cannot manage operations like a project (it has no end), and you cannot manage a project like operations (it has a deadline you are pretending doesn't exist).

The reason IS projects need *project management* in particular — beyond just "good engineering" — is that IS projects involve a uniquely cursed combination of properties: the work is invisible until very late, the dependencies are dense and non-obvious, the stakeholders disagree about what success means, the requirements change while construction is happening, and most of the people funding the work do not speak the technical vocabulary of the people doing the work. Project management is the discipline that holds those forces in productive tension. Without it, the smartest engineering team on earth will ship the wrong thing, late, and find out about the disagreement at the go-live meeting.

## The Project Charter: A Decision Contract

The single most leveraged document in any project's life is its **Project Charter**. The charter is a short (usually 1-3 page) document that *formally authorizes* the project, names the sponsor, names the project manager, states the business case, sets the high-level objectives, and identifies the major constraints and assumptions. It is signed — actually signed, by an actual executive with actual budget authority — before any meaningful work begins.

A good charter answers six questions: *Why are we doing this?* (business case), *What does done look like?* (objectives and success criteria), *Who is in charge?* (sponsor and PM), *What can't we change?* (constraints — usually budget, deadline, or compliance requirements), *What are we assuming?* (the things that, if false, kill the project), and *What is explicitly out of scope?* (the things this project is *not* going to do, no matter how nicely anyone asks). That last bullet is the secret weapon. Charters that omit "out of scope" produce projects that quietly absorb every adjacent good idea until they collapse.

The charter is best understood as a *decision contract* — the leverage point that determines what every later decision means. When somebody six months in says "well, *I* always thought this project would also fix the data warehouse," the charter is what lets the PM say, with a smile, "great idea, that's the next project." The charter's superpower is that it was signed by the same person who is now asking for the new thing. Without a charter, that conversation has no anchor; with one, it has gravity.

## The Scope Statement: Litigation Insurance

Where the charter authorizes the project, the **Scope Statement** *defines what the project will produce*. The scope statement is more detailed than the charter — typically several pages — and enumerates the deliverables, the acceptance criteria for each deliverable, the boundaries of the work, and the explicit exclusions. It is the document a court would read if your project ever ended up in front of one, which is why people who have lived through a few large IS projects sometimes call it *litigation insurance*.

A scope statement should be *specific enough that two reasonable people reading it would agree on whether a given deliverable was complete*. "User-friendly interface" is not specific enough. "A web interface that allows authenticated users to submit, view, and cancel time-off requests, and that passes WCAG 2.1 AA accessibility standards as verified by automated testing" is specific enough. The difference between those two sentences is, eventually, the difference between accepting the deliverable and re-doing it.

The footgun lurking around scope is **scope creep** — the slow, polite, well-intentioned expansion of project scope through a thousand small "while you're at it" requests, none of which seem unreasonable in isolation but which collectively turn a four-month project into a sixteen-month project that nobody dares to cancel because too much has already been spent. Scope creep is silent (no single request looks dangerous), easy to trigger (saying yes is the path of least resistance), and damaging in delayed and invisible ways (the cost shows up in the schedule, the budget, and the team's sanity, all at once, six months later). The structural fix is a written scope statement that the PM and sponsor can both point at, plus a change-control process (we'll get there) that makes adding scope a *visible* event rather than a quiet one.

## Stakeholder Analysis and the Stakeholder Register

A **stakeholder** is anyone who can affect, or is affected by, the project. That definition is broader than students typically realize on the first read. Stakeholders include the obvious — the sponsor, the users, the project team — and the less obvious: the support staff who will inherit the system, the auditors who will review it, the vendor whose API you depend on, the union steward whose members' jobs are about to change, and the department head down the hall who hates the sponsor and is therefore predisposed to root for your failure. Yes, really.

**Stakeholder Analysis** is the systematic activity of identifying every stakeholder, assessing their interest in the project, assessing their power to affect it, and figuring out what each one needs from you in order to be supportive (or at least neutral). The classic tool is the *power/interest grid* — a 2x2 matrix that places each stakeholder by how much power they have over the project and how much interest they have in the outcome.

The four quadrants suggest four engagement strategies:

- **High power, high interest — *Manage Closely*.** Sponsors, key users, regulators. They get the most attention, the most communication, and a seat at major decision meetings.
- **High power, low interest — *Keep Satisfied*.** Senior executives who control budget but don't care about the details. They get periodic briefings designed to prevent surprises.
- **Low power, high interest — *Keep Informed*.** End users, support staff, advocacy groups. They get newsletters, demos, and FAQ updates so they feel respected and stay supportive.
- **Low power, low interest — *Monitor*.** Everybody else. Don't ignore them — circumstances change — but don't burn cycles on them either.

The output of stakeholder analysis is a **Stakeholder Register** — a living document that lists every stakeholder, their role, their contact information, their interests, their concerns, their preferred communication channels, and their current attitude toward the project (champion, supporter, neutral, skeptic, blocker). The register is updated throughout the project, because attitudes shift: today's blocker becomes next quarter's champion when their concern is addressed, and today's champion can become tomorrow's blocker when their pet feature gets descoped.

#### Diagram: The Stakeholder Power/Interest Grid

<details markdown="1">
<summary>The Stakeholder Power/Interest Grid</summary>
Type: interactive-infographic
**sim-id:** stakeholder-power-interest-grid<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js 2x2 matrix with "Interest in Project" on the X axis and "Power to Affect Project" on the Y axis. The four quadrants are labeled Manage Closely (top-right), Keep Satisfied (top-left), Keep Informed (bottom-right), and Monitor (bottom-left). Pre-populated with twelve stakeholder dots from a sample IS project (e.g., CFO, end users, IT Director, vendor account manager, compliance officer, union steward, help desk lead, project sponsor, departmental power user, intern team, board of directors, external auditor).

Color palette: each quadrant tinted by its strategy — Manage Closely in mascot-emerald, Keep Satisfied in coral, Keep Informed in mascot-magenta tints, Monitor in slate-gray. Stakeholder dots colored by current attitude (champion=green, supporter=teal, neutral=gray, skeptic=amber, blocker=red).

Interactivity: students can drag stakeholder dots around to reposition them, and the suggested engagement strategy updates in a side panel. A "what if" toggle simulates an attitude shift over time, animating dots to show how a regulator's interest spikes after a public incident, or how a sponsor's power decays after a reorg. Clicking a dot reveals the stakeholder's role, concerns, and preferred communication cadence.

Layout: full canvas width, height ~520px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can place stakeholders on a power/interest grid, justify the placement, and select an appropriate engagement strategy for each quadrant.

Implementation: p5.js, deployed at `/information-systems/sims/stakeholder-power-interest-grid/`.
</details>

## Stakeholder Engagement: From Analysis to Action

Analyzing stakeholders is not the same as *engaging* them, and many a project has died in the gap between the two. **Stakeholder Engagement** is the ongoing, deliberate work of communicating with stakeholders, soliciting their input, addressing their concerns, and keeping them invested in the project's success. It is verb work — meetings, demos, status updates, hallway check-ins, the occasional coffee — not noun work that ends when the spreadsheet is done.

The footgun here is performing stakeholder analysis with great rigor and then treating the register as a finished artifact. *Stakeholder analysis without engagement creates ghost stakeholders* — people who appear on the register, were correctly identified as high-power and high-interest, and were then never actually talked to. They show up at the steering committee in month seven, ask why no one consulted them, and have the standing to demand a re-do. The structural fix is to translate every "Manage Closely" entry on the register into a recurring calendar invitation. If the engagement is not on a calendar, it is not happening.

## The Work Breakdown Structure

Given a chartered, scoped project with a known stakeholder map, the next move is to figure out *what work has to be done*. The classical tool is the **Work Breakdown Structure** (WBS) — a hierarchical decomposition of the total project work into smaller, more manageable pieces. The top of the tree is the project itself; the next level down is the major deliverables; below that are sub-deliverables; and at the bottom are *work packages* — chunks small enough that you can estimate their cost and duration with some confidence.

The classical guideline is the *8/80 rule*: a work package should take no less than 8 hours and no more than 80 hours of work. Smaller than 8 hours and you are micromanaging; larger than 80 hours and you have not decomposed enough to estimate accurately. (Like all rules of thumb, it survives roughly 80% of contact with reality.)

The pedagogical superpower of the WBS is that it forces you to *enumerate the work before you schedule the work*. Many IS projects skip the WBS and go straight to a Gantt chart, which is like writing a recipe without making a list of ingredients first; you discover the missing ingredients in the middle of cooking. A proper WBS surfaces the work nobody mentioned in the requirements meetings — testing, deployment, training, documentation, user acceptance, security review, the data migration that *somebody* on the team is going to have to do — *before* the schedule depends on having forgotten about them.

## Estimation Techniques: How Long Will This Take, Really

Once the work is decomposed, somebody has to estimate the duration and cost of each work package. **Estimation Techniques** are the family of methods project managers use to convert "I have no idea" into "I have a defensible number." Five techniques you should know:

1. **Expert judgment** — ask people who have done similar work before. Cheap, fast, biased toward optimism, and the most-used technique in practice.
2. **Analogous estimation** — compare to past projects of similar size and complexity, then adjust. Quick and surprisingly accurate when the analog is genuinely similar; misleading when it isn't.
3. **Parametric estimation** — apply a unit rate (cost per function point, cost per line of code, hours per data interface) to the count of units. Best when historical data exists.
4. **Three-point estimation (PERT)** — collect optimistic (O), most likely (M), and pessimistic (P) estimates and combine them. The classical PERT formula is \(\text{Estimate} = (O + 4M + P) / 6\), which weighs the most-likely value but pulls the answer toward the worse case, which is usually where reality lives.
5. **Bottom-up estimation** — estimate every work package individually and sum them. The most accurate technique and the most expensive to perform. Used at full rigor on big-budget projects.

| Technique             | Speed | Accuracy | Best when                                  |
|-----------------------|-------|----------|--------------------------------------------|
| Expert judgment       | Fast  | Variable | Early planning, no historical data         |
| Analogous             | Fast  | Medium   | A genuinely similar past project exists    |
| Parametric            | Med   | High     | Historical unit-rate data is available     |
| Three-point (PERT)    | Med   | Medium   | High uncertainty; want a defensible range  |
| Bottom-up             | Slow  | High     | Detailed WBS exists; high stakes           |

The footgun in estimation is the *single-point estimate*. When somebody says "this will take six weeks," they have collapsed a probability distribution into a number, lost all the uncertainty information, and handed the project a target that *will* be missed roughly half the time by definition. The structural fix is to estimate ranges (or three-point estimates) and to publish the *confidence level* alongside the number. "Six weeks at 50% confidence; ten weeks at 90% confidence" is a vastly better input to a schedule than "six weeks."

## The Project Schedule, the Gantt Chart, and the Critical Path

The **Project Schedule** is the time-dimensioned version of the WBS: every work package, with start date, end date, dependencies, and assigned resources. The schedule is what the project manager actually manages, day to day. It is also the document that is most often presented in some form to executives, who tend to confuse it with reality.

The dominant visual format for a project schedule is the **Gantt Chart**, named after Henry Gantt, who popularized the format around 1910 (though Karol Adamiecki had invented something similar in 1896 — a fact Gantt himself acknowledged but history mostly forgot). A Gantt chart is a horizontal bar chart with tasks listed down the left side and time running across the top; each task is drawn as a horizontal bar whose length represents its duration, with arrows between bars showing dependencies. A modern Gantt chart in tools like Microsoft Project, Smartsheet, Asana, or Monday.com also shows resource assignments, percent complete, milestones (zero-duration markers for important events), and the *critical path*.

The **Critical Path Method** (CPM) is the technique for finding the *longest sequence of dependent tasks* through the schedule — the chain that determines the project's earliest possible finish date. Tasks on the critical path have *zero slack*: any delay to a critical-path task delays the whole project. Tasks off the critical path have *positive slack*: they can slip by some amount without affecting the finish date. The critical path is the schedule's leverage point. If you want to compress the schedule, you compress critical-path tasks; speeding up tasks that aren't on the critical path saves zero days of project duration, even though it feels like progress.

The footgun is *managing the schedule by total task count rather than by critical path*. A project manager who proudly reports "we finished 47 of 52 tasks this week" while the five unfinished tasks are all on the critical path is reporting a project that is, in every meaningful sense, behind. The structural fix is to track critical-path status on the front page of every status report, with non-critical tasks summarized below. Always know where the critical path is. Always know who is working on it. Always know what could move it.

#### Diagram: A Small Project's Gantt Chart with the Critical Path Highlighted

<details markdown="1">
<summary>A Small Project's Gantt Chart with the Critical Path Highlighted</summary>
Type: interactive-infographic
**sim-id:** gantt-with-critical-path<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

A vis-timeline Gantt chart showing a 12-week IS project (a small CRM rollout) with twelve tasks: Charter Signed (milestone), Requirements Gathering, Vendor Selection, Data Mapping, Test Environment Setup, Configuration, Data Migration Build, User Acceptance Test, Training Materials, Training Delivery, Cutover, Go-Live (milestone). Dependencies shown as arrows; the critical path (Charter → Requirements → Vendor Selection → Configuration → Data Migration → UAT → Cutover → Go-Live) is rendered in a thick mascot-magenta line. Off-critical-path tasks (Test Environment Setup, Training Materials, Training Delivery) are rendered in mascot-emerald with their slack visualized as a faint trailing rectangle.

Color palette: critical-path bars in mascot-magenta, non-critical bars in mascot-emerald, milestones as gold diamonds, slack regions in faint coral, dependency arrows in slate-gray.

Interactivity: students can drag any task to a new start date and the schedule updates, showing whether the move pushes the project finish (a red flash if it does, green if it doesn't). A "compress schedule" challenge asks students to find the cheapest 2-week compression by adding resources to critical-path tasks. A toggle highlights the slack on every non-critical task to make the concept of "free time" visible.

Layout: full canvas width, height ~560px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can read a Gantt chart, identify the critical path, distinguish critical from non-critical tasks, and predict the schedule effect of moving any task.

Implementation: vis-timeline, deployed at `/information-systems/sims/gantt-with-critical-path/`.
</details>

!!! mascot-thinking "Pause here"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    The critical path is a feedback structure, not a static chart. Every time a task slips, the critical path can *change* — a previously slack-rich path can become the new critical path overnight. A project manager who finds the critical path on day one and never re-checks it is managing a fossil. Modern scheduling tools recompute the critical path automatically on every change; your job is to *look at it* on every status cycle and ask: *"Is the critical path the same one we had last week? If not, what changed?"* That single recurring question, asked weekly, prevents the great majority of late-stage schedule surprises.

## The Project Triangle: Pick Two

Every project lives inside a structural constraint so reliable it has earned its own name: the **Project Triangle** (also called the iron triangle, the triple constraint, or — in its four-sided variant — the project diamond). The three sides are *scope* (what gets built), *time* (when it ships), and *cost* (what it costs). Quality, in the four-sided version, sits in the middle.

The triangle's iron law: *you can fix any two of these, but the third must flex*.

- Fix **scope** and **time** → **cost** must rise (more people, more overtime).
- Fix **scope** and **cost** → **time** must extend (the team is what it is).
- Fix **time** and **cost** → **scope** must shrink (deliver less, on the date, on the budget).

The most common and most expensive project failure mode is *believing all three can be fixed simultaneously*. They cannot. When a sponsor insists on full scope, fixed deadline, and fixed budget, what they are actually committing to — whether they realize it or not — is the *fourth* sacrifice: quality. The team will deliver something that nominally meets all three constraints, with bugs the QA cycle would have caught if there had been a real QA cycle, with documentation that nobody had time to write, and with a deployment plan that was rehearsed exactly zero times. The wreckage shows up six months after go-live, when the project is officially "successful" and the operations team is silently on fire.

The structural fix is to negotiate explicitly. Walk into the chartering meeting with the triangle on a slide. Ask the sponsor which two they want to fix. The answer is almost always informative — and the conversation, once it happens, prevents months of later miscommunication.

#### Diagram: The Project Triangle (Scope, Time, Cost — and Quality in the Middle)

<details markdown="1">
<summary>The Project Triangle (Scope, Time, Cost — and Quality in the Middle)</summary>
Type: interactive-infographic
**sim-id:** project-triangle<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js interactive triangle with three sides labeled Scope, Time, and Cost, and a quality indicator at the center. Three sliders below the canvas let students set the locked sides; whenever two are locked, the third one's slider moves freely, and the quality indicator in the middle visibly degrades when the student tries to lock all three. A small commentary panel narrates the tradeoff in plain language ("You locked scope and time, so cost has to rise — adding 2 more developers").

Color palette: locked sides in mascot-emerald, flexing side in coral, quality indicator color-shifting from green to amber to red as it degrades.

Interactivity: students can drag any vertex to expand or contract the triangle and see how the others must respond. A "real project" mode loads three preset scenarios (a fixed-bid contract, a startup MVP, a regulatory deadline project) and asks the student which side they predict will flex.

Layout: full canvas width, height ~480px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Evaluating): Students can apply the project triangle to a real scenario, identify which constraints are fixed, predict which dimension must flex, and articulate the quality consequences of trying to fix all three.

Implementation: p5.js, deployed at `/information-systems/sims/project-triangle/`.
</details>

## The Risk Register and Risk Mitigation

Every project carries **risks** — uncertain events that, if they occur, will affect project objectives. The discipline of risk management is to identify, evaluate, and respond to those risks *before they become problems*. The central artifact is the **Risk Register**, a living document that lists each identified risk with its description, probability, impact, owner, response strategy, and current status.

A well-maintained risk register has columns for: Risk ID, Description, Category (technical, schedule, resource, vendor, regulatory, etc.), Probability (1-5 or low/medium/high), Impact (1-5 or low/medium/high), Risk Score (probability × impact), Owner, Response Strategy, and Status. Risks are sorted by score so that the highest-scoring risks float to the top of every review.

**Risk Mitigation** is the work of *reducing* a risk's probability or impact. It is one of four standard *risk responses*:

- **Avoid** — change the plan so the risk doesn't apply (don't use the new vendor; pick the proven one).
- **Mitigate** — reduce the probability or impact (build a parallel test environment so a deployment failure doesn't take down production).
- **Transfer** — shift the risk to a third party (buy insurance, sign a fixed-price vendor contract, use a managed service).
- **Accept** — acknowledge the risk and decide to live with it, optionally with a contingency reserve. Some risks cost more to mitigate than the impact would cost; in those cases, accepting is the rational choice.

| Response  | What it does                            | Example                                            |
|-----------|-----------------------------------------|----------------------------------------------------|
| Avoid     | Removes the risk entirely               | Drop the unproven vendor in favor of an incumbent  |
| Mitigate  | Lowers probability or impact            | Build a rollback plan; rehearse the cutover twice  |
| Transfer  | Shifts the risk to someone else         | Buy cyber-insurance; use a managed cloud DB        |
| Accept    | Lives with it, optionally with reserves | Allow $50k contingency for unexpected scope items  |

The footgun is the *write-once risk register* — a beautiful spreadsheet produced at project kickoff and never opened again. An ignored risk register creates a *reactive firefighting feedback loop*: risks that were identified but unmanaged become incidents, incidents consume team capacity, capacity loss creates more delays, delays create more risks. The structural fix is to put the risk register on the agenda of every weekly status meeting, top-three risks first, with the owner reporting on response progress. If the risks aren't being talked about, they aren't being managed.

## The Issue Log: Risks That Came True

Where the risk register tracks *uncertainties*, the **Issue Log** tracks *certainties* — things that have already happened and are actively affecting the project. An issue is a risk that came true (or a problem that was never on the risk list at all and showed up uninvited). Each issue gets logged with a description, an impact assessment, an owner, a target resolution date, and a status (open, in progress, resolved, closed).

The discipline of separating risks from issues matters because the conversations they require are different. *Risks* require probability assessment, mitigation planning, and contingency reserves. *Issues* require root-cause analysis, immediate workarounds, and escalation paths. A team that conflates the two ends up either treating real problems as theoretical concerns or treating theoretical concerns as if they were on fire. The risk register and issue log together form the project's *uncertainty bookkeeping system*.

## Change Control: The Door That Keeps Scope Honest

Every nontrivial project will, at some point, face a request to change scope, schedule, or budget. **Change Control** is the formal process by which those requests are evaluated, approved or rejected, and — if approved — incorporated into the baseline plan. The artifact is usually a *change request form* (or a Jira ticket of the same shape) that captures: what is being requested, why, the impact on scope/schedule/cost/quality, the alternatives considered, and the approver's signature.

A working change-control process has three indispensable properties: it is *written* (no verbal approvals), it has *named approvers* (usually the sponsor or a Change Control Board for larger projects), and it produces a *visible record* (the project's baseline scope statement and schedule are updated, and the change is broadcast to stakeholders). Projects that lack any one of these properties slowly accumulate scope creep through informal "while you're at it" conversations that nobody can later reconstruct.

Change control is sometimes resented as bureaucracy. The reframe: change control is what makes the *answer "yes" possible*. Without it, every yes is a quiet capitulation that bills itself to the team's nights and weekends. With it, every yes is an explicit decision with explicit consequences that the sponsor sees and approves. Change control turns scope creep from a silent killer into a visible negotiation.

## The Communication Plan

The **Communication Plan** is a written document that specifies *who needs to know what, when, and through which channel*. A solid communication plan has a row for every stakeholder group, columns for *what information* (status, risks, issues, milestones, change requests), *how often* (daily, weekly, monthly, milestone-driven), *channel* (email, Slack, dashboard, meeting, formal report), and *owner* (who produces the communication).

The plan exists because communication failure is, statistically, the leading cause of project failure — outranking technical problems, budget problems, and even scope problems in nearly every postmortem study ever published. Stakeholders who feel surprised become stakeholders who feel betrayed; stakeholders who feel betrayed become political opponents of the project. A communication plan is a structural defense against the slow accretion of stakeholders quietly turning against the work.

## PMBOK and PRINCE2: The Two Big Standards

Two formal project-management bodies of knowledge dominate the field. The **PMBOK Guide** (*Project Management Body of Knowledge*), published by the Project Management Institute (PMI), is the dominant standard in North America and many other regions. PMBOK organizes project management into *process groups* (Initiating, Planning, Executing, Monitoring & Controlling, Closing) and *knowledge areas* (Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder, Integration). The PMP (Project Management Professional) certification, also from PMI, tests against PMBOK and is among the most widely recognized professional credentials in IS.

**PRINCE2** (*PRojects IN Controlled Environments, version 2*) is a UK-government-developed methodology that is dominant in the UK, Europe, and Australia. PRINCE2 is more *prescriptive* than PMBOK — it defines specific roles (Executive, Senior User, Senior Supplier, Project Manager), specific stages (Starting Up, Initiating, Controlling, Managing Product Delivery, Closing), and seven principles that every project must follow. Where PMBOK is a *body of knowledge* (here are the things you should think about), PRINCE2 is a *method* (here is how you should do them).

| Dimension              | PMBOK Guide (PMI)                       | PRINCE2 (UK)                              |
|------------------------|-----------------------------------------|-------------------------------------------|
| Posture                | Body of knowledge — descriptive         | Method — prescriptive                     |
| Geographic dominance   | North America, much of Asia             | UK, Europe, Australia                     |
| Certification          | PMP (also CAPM, PMI-ACP)                | PRINCE2 Foundation, PRINCE2 Practitioner  |
| Role definition        | Loose — adapt to organization           | Strict — defined roles required           |
| Tailoring              | Encouraged but unstructured             | Explicit "tailoring" principle            |
| Best for               | Mature PM organizations choosing tools  | Organizations needing standardization     |
| Common combination     | Often combined with agile (PMI-ACP)     | "PRINCE2 Agile" hybrid offered            |

In practice, most large IS organizations use elements of both, plus their own internal methodology, plus agile practices on top. The certifications are useful as career signaling and as forced learning of a coherent vocabulary; the methodologies themselves are useful as starting points to be adapted, never as scripts to be followed verbatim.

## Waterfall, Agile, and Hybrid

The deepest methodology debate in project management is between waterfall and agile. **Waterfall Project Management** is the classical approach: complete one phase before starting the next, in a sequence like Requirements → Design → Implementation → Testing → Deployment → Maintenance. Each phase produces signed-off deliverables that feed the next phase. The metaphor is of water flowing downhill — once you've passed a phase, going back is expensive. Waterfall fits projects where requirements are stable, the technology is well-understood, and the cost of change is low (e.g., regulated infrastructure work where the spec is the law and the spec doesn't move).

**Agile Project Management** is the iterative-incremental approach: work in short cycles (sprints, in Scrum), deliver working pieces continuously, learn from each cycle, and let the requirements evolve based on what's learned. Agile fits projects where requirements are uncertain, the technology is novel, and the cost of *not* learning is high (e.g., new product development where you don't yet know what users want). We covered Scrum events, roles, and artifacts in Chapter 4 — the daily standup, sprint planning, sprint review, retrospective — so we won't re-cover them here. What's distinctive at the *project management* level is that agile replaces the up-front schedule with a *prioritized backlog* and a *velocity-based forecast*, and replaces stage-gate approvals with continuous stakeholder participation.

**Hybrid Project Management** is what most organizations actually do — waterfall for the parts of the project where the constraints are firm (regulatory, infrastructure, fixed-bid vendor work) and agile for the parts where the requirements are emergent (UI, analytics, new features). A common pattern: waterfall planning at the program level (milestones, dependencies, vendor contracts) with agile execution inside each delivery team. Done well, hybrid takes the best of each. Done badly, it takes the bureaucracy of waterfall and the chaos of agile and fuses them into a methodology nobody has the energy to defend.

| Dimension              | Waterfall                          | Agile                                 | Hybrid                                |
|------------------------|------------------------------------|---------------------------------------|---------------------------------------|
| Requirements           | Fixed up front                     | Emerge over time                      | Some fixed, some emergent             |
| Delivery               | One big release at the end         | Continuous, every sprint              | Phased; agile within phases           |
| Schedule artifact      | Gantt chart with phases            | Backlog with velocity forecast        | Both — Gantt outside, backlog inside  |
| Change handling        | Formal change control              | Re-prioritize the backlog             | Change control for scope; backlog for tasks |
| Best fit               | Stable requirements, fixed bid     | Uncertain requirements, in-house team | Mixed: regulatory + experimental work |
| Stakeholder model      | Phase-gate approvals               | Continuous engagement                 | Both, depending on workstream         |

The systems-thinking insight is that the choice of methodology *is itself a project decision* with tradeoffs. Agile flexibility comes at the cost of long-range predictability — a tradeoff that is fine for a startup but devastating for a fixed-bid contract that must show a deterministic schedule to the customer's procurement team. Waterfall predictability comes at the cost of late discovery — a tradeoff that is fine for a known problem but devastating for an unknown one. Pick the methodology that matches the *kind of uncertainty* your project actually has, not the methodology that won the last conference talk.

## Burndown Charts and Velocity

Two simple agile artifacts are worth covering at the project-management level because they answer the project-management question "are we going to make it?" in ways that translate well to non-agile audiences.

A **Burndown Chart** plots *remaining work* against *time*. The Y axis is usually story points (or hours) of work remaining; the X axis is the days of the sprint (or the weeks of the release). An ideal burndown is a straight diagonal line from the starting work to zero on the deadline. A *real* burndown is rarely straight — it plateaus when work stalls, drops sharply when stories are completed, and sometimes *rises* when new work is added mid-sprint (a sign that change control isn't working). The burndown's pedagogical superpower is that it shows trend rather than snapshot: a team that is "on track" today but trending wrong is a team that is, in honest accounting, behind.

**Velocity** is the team's *measured rate of work completion*, usually expressed as story points completed per sprint, averaged over the last several sprints. Velocity is the single most important number in agile project management because it converts the abstract backlog into a concrete forecast: *if this team's velocity is 28 story points per two-week sprint, and the remaining backlog is 280 points, we have ten sprints (twenty weeks) of work remaining*. The forecast updates every sprint as velocity is re-measured.

The footgun with velocity is treating it as a *productivity metric* and trying to maximize it across teams or quarters. This breaks immediately because velocity is calibrated to the team's own estimation scale — Team A's "5-point story" and Team B's "5-point story" are not the same unit. Comparing velocities across teams is meaningless. Worse, when leadership tries to "drive velocity up," teams respond by inflating their estimates (a classic Goodhart's Law outcome — when a measure becomes a target, it ceases to be a good measure). The structural fix is to use velocity *only* for the team's own forecasting, never for cross-team comparison or performance evaluation.

#### Diagram: A Sprint Burndown Chart (Ideal vs Actual)

<details markdown="1">
<summary>A Sprint Burndown Chart (Ideal vs Actual)</summary>
Type: interactive-infographic
**sim-id:** sprint-burndown-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

A Chart.js line chart showing a 10-day sprint with two lines: an ideal burndown (a straight diagonal from 50 story points on day 0 to 0 on day 10, in dashed slate-gray) and an actual burndown (a real-looking jagged line that plateaus on day 3 due to a blocked story, drops sharply on day 5 when it unblocks, ticks upward on day 7 when scope is added mid-sprint, and ends at 8 points remaining on day 10 — a missed sprint goal).

Color palette: ideal line in slate-gray dashed, actual line in mascot-magenta solid, scope-added events marked with coral upward arrows, completed-story events marked with mascot-emerald downward steps.

Interactivity: students can drag the actual line at each day to simulate different scenarios and see whether the sprint goal is met. A "what-if" toggle adds an overlay showing the velocity-based forecast for the next sprint based on the current sprint's outcome. A second chart shows team velocity over the last six sprints with a trendline.

Layout: full canvas width, height ~480px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can read a burndown chart, distinguish ideal from actual, identify scope-change events, and forecast the next sprint's likely outcome from velocity history.

Implementation: Chart.js, deployed at `/information-systems/sims/sprint-burndown-chart/`.
</details>

!!! mascot-tip "Iris's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    Pro move: when an executive asks "are we going to make it?" on an agile project, never answer yes or no. Show them the burndown, show them the velocity-based forecast, and let the chart answer. This does two things at once — it gives an honest, defensible answer, and it teaches the executive to read agile artifacts. After three or four conversations like this, you have an executive who understands your forecasting model. That executive will defend your project in budget season far better than one who has to take your word for everything.

## Earned Value Management

For projects where dollars and dates are both tracked rigorously — typically large, contract-driven, government, or capital-budget projects — the most powerful monitoring framework is **Earned Value Management** (EVM). EVM combines schedule and cost into a single coherent set of metrics that answer four questions: *Are we on schedule? Are we on budget? How much have we drifted? Will we recover?*

EVM is built on three baseline values, all measured in dollars (or dollar-equivalent labor hours):

- **Planned Value (PV)** — the budgeted cost of work *scheduled* to be complete by this date. ("By today, we should have completed $400,000 worth of work.")
- **Earned Value (EV)** — the budgeted cost of work *actually* complete. ("We have actually completed $350,000 worth of work, valued at the original budget rates.")
- **Actual Cost (AC)** — the real money *actually spent* to date. ("We have actually spent $420,000.")

From these three numbers, EVM derives four headline metrics that fit on a single status slide:

- **Cost Variance:** \(\text{CV} = \text{EV} - \text{AC}\). Positive = under budget. Negative = over budget.
- **Schedule Variance:** \(\text{SV} = \text{EV} - \text{PV}\). Positive = ahead of schedule. Negative = behind schedule.
- **Cost Performance Index:** \(\text{CPI} = \text{EV} / \text{AC}\). Above 1.0 = under budget. Below 1.0 = over budget.
- **Schedule Performance Index:** \(\text{SPI} = \text{EV} / \text{PV}\). Above 1.0 = ahead. Below 1.0 = behind.

Plug in the numbers above: \(\text{CV} = \$350\text{k} - \$420\text{k} = -\$70\text{k}\) (over budget), \(\text{SV} = \$350\text{k} - \$400\text{k} = -\$50\text{k}\) (behind schedule), \(\text{CPI} = 0.83\) (we get 83 cents of work for every dollar spent), \(\text{SPI} = 0.875\) (we are completing work at 87.5% of the planned pace). EVM also lets you forecast: \(\text{Estimate at Completion (EAC)} = \text{Budget at Completion (BAC)} / \text{CPI}\). If the original BAC was \$1M and CPI is 0.83, then EAC = \$1.2M — which is the conversation the project manager needs to have with the sponsor *now*, not at month-end.

The strength of EVM is that it integrates schedule and cost in a way that no single metric can. A project that is on budget but behind schedule looks fine on a cost-only report; EVM catches it. A project that is on schedule but over budget looks fine on a Gantt chart; EVM catches it. The weakness is that EVM requires *honest, granular* progress reporting on every work package, which is difficult and expensive — which is why EVM is mostly used on large, well-instrumented projects rather than on every internal IT effort.

#### Diagram: EVM Cost and Schedule Variance Visualization

<details markdown="1">
<summary>EVM Cost and Schedule Variance Visualization</summary>
Type: interactive-infographic
**sim-id:** evm-variance-visualization<br/>
**Library:** Chart.js<br/>
**Status:** Specified

A Chart.js multi-line chart with three curves over a 12-month project timeline: Planned Value (PV) in slate-gray, Earned Value (EV) in mascot-emerald, and Actual Cost (AC) in mascot-magenta. The vertical gap between EV and PV at any date is the schedule variance (highlighted as a coral band when EV is below PV). The vertical gap between AC and EV is the cost variance (highlighted as a red band when AC is above EV). A side panel computes and displays CV, SV, CPI, SPI, and EAC for the date currently selected by a draggable cursor.

Color palette: PV in slate-gray, EV in mascot-emerald, AC in mascot-magenta, schedule-variance band in coral, cost-variance band in red, EAC forecast line in dashed amber.

Interactivity: students can drag the cursor along the timeline to see the metrics at any date. Three preset scenarios — "ahead and under budget", "behind but under budget", "on schedule but over budget" — let students see how the four metrics differ across project health states. A challenge mode asks students to predict EAC and CPI from the chart before revealing the answer.

Layout: full canvas width, height ~520px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can compute CV, SV, CPI, SPI, and EAC from PV, EV, and AC; interpret each metric; and diagnose project health from the EVM chart.

Implementation: Chart.js, deployed at `/information-systems/sims/evm-variance-visualization/`.
</details>

## Project Closure and Lessons Learned

A project ends — and *closing a project well* is its own discipline. **Project Closure** is the formal process of finalizing all activities: confirming deliverables are complete and accepted, releasing resources, closing contracts, archiving project documentation, transitioning the system to operations, conducting the final stakeholder review, and obtaining formal acceptance from the sponsor. Many projects skip this step, dispersing the team to the next project before closure is complete, leaving loose ends that haunt the operations team for years.

The most important closure activity is the **Lessons Learned** review (sometimes called a postmortem, a retrospective, or a project review). The team sits down — ideally with a neutral facilitator — and answers four questions: *What went well? What went badly? What surprised us? What will we do differently next time?* The output is a written document that goes into an organizational lessons-learned repository.

The footgun is *lessons learned that nobody learns*. The repository fills with thoughtful documents that no future project manager ever reads, because there is no structural mechanism that connects a new project's planning phase to the relevant past lessons. The structural fix is twofold: (1) make lessons-learned review a *required input* to every new project's planning, with a checklist of past lessons reviewed, and (2) tag lessons by category (vendor, technology, stakeholder, estimation) so a future PM can search by relevance. Lessons that are written and never read are not lessons; they are exhaust.

The systems-thinking framing here is a *learning feedback loop*: project executes → lessons captured → lessons reviewed by next project → next project executes better → richer lessons captured. When the loop closes, organizational PM capability compounds over years. When the loop is broken, every project starts from scratch, and the same mistakes repeat indefinitely. A PMO's most underrated long-term value is keeping this loop closed.

## Portfolio, Program, and the PMO

So far we have talked about a single project. Real organizations run *many* projects at once, and the disciplines for managing multiple projects together have their own names.

**Project Portfolio Management** is the discipline of selecting, prioritizing, and balancing the *set* of projects an organization runs to maximize strategic value within constrained resources. Where project management asks "are we doing this project right?", portfolio management asks "are we doing the right projects at all?" Portfolio decisions are about which projects to fund, which to defer, which to kill, and how to balance risk across the portfolio. Tools like ServiceNow Strategic Portfolio Management, Planview, and Microsoft Project for the Web support portfolio scoring, prioritization, and resource forecasting.

**Program Management** is the discipline of managing a *group of related projects* (a program) to achieve benefits that would not be achievable by managing the projects independently. A "core systems modernization program" might contain a dozen related projects — ERP upgrade, data warehouse rebuild, integration layer replacement, security uplift — that share dependencies, resources, and a common business case. The program manager owns the cross-project coordination, the shared dependencies, and the rollup reporting; the project managers own their individual projects.

| Dimension              | Project                         | Program                         | Portfolio                              |
|------------------------|---------------------------------|---------------------------------|----------------------------------------|
| Scope                  | One unique deliverable          | Group of related projects       | All projects an organization runs      |
| Time horizon           | Months to ~2 years              | 1-5 years                       | Continuous                             |
| Success measured by    | On time, on scope, on budget    | Realized program benefits       | Strategic alignment, ROI of mix        |
| Manager's question     | Are we doing this right?        | Are these projects coordinated? | Are we doing the right projects?       |
| Typical leader         | Project Manager                 | Program Manager                 | Portfolio Manager / CIO / EPMO Director|

The **PMO** — *Project Management Office* (sometimes Program or Portfolio Management Office) — is the organizational unit that provides project management governance, methodology, training, tooling, and reporting across the enterprise. PMOs come in three classic flavors:

- **Supportive PMO** — a consultative function offering templates, training, and best practices. Project managers use it voluntarily.
- **Controlling PMO** — defines required methodology and audits compliance. Project managers must follow PMO standards.
- **Directive PMO** — directly assigns and manages project managers across the organization. The PMO *is* where the PMs live.

Each flavor has a tradeoff. Supportive PMOs have low overhead but inconsistent practice. Controlling PMOs enforce consistency at the cost of team autonomy. Directive PMOs deliver maximum standardization at the cost of being perceived as bureaucratic gatekeepers. The right flavor depends on organizational maturity: a startup with five projects needs no PMO; a Fortune 500 enterprise with 800 active projects probably needs a controlling or directive one. Picking the wrong flavor for the organization's scale is one of the more common (and expensive) PMO mistakes.

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    A PMO that produces more reports than decisions is a PMO in trouble. The fastest way to tell whether a PMO is adding value is to ask, of every artifact it produces, *who reads this and what decision do they make?* If the answer is "the PMO reads it and uses it to produce the next report," the artifact is overhead. The structural fix is to maintain a written list of every PMO deliverable with its named consumer and the decision it supports. Anything without a consumer or a decision goes on the chopping block at the next quarterly review. PMOs that practice this discipline tend to be loved; PMOs that don't tend to be the first thing reorganized away in a downturn.

## Resource Leveling

The final scheduling concept worth knowing is **Resource Leveling** — the technique for adjusting a project schedule so that no resource (usually a person, sometimes a piece of equipment) is over-allocated. A schedule that has Sarah working 160% during week 12 is not a schedule; it is a wish. Resource leveling redistributes the work to fit available capacity, typically by delaying tasks (which may extend the schedule), splitting tasks, or reassigning work to other resources.

Modern scheduling tools can resource-level automatically, given the available capacity of each named resource. The interesting part — the part the tool cannot do — is deciding *how* to handle the over-allocation when leveling extends the critical path. The tradeoffs are: extend the schedule, hire (or contract) more resources, descope, or accept the over-allocation and the burnout that comes with it. None of those are free. Naming the tradeoff explicitly is a vastly better answer than pretending Sarah can do the work of two people indefinitely.

## Putting It All Together

Project management is the discipline of holding an information-systems delivery effort together across the human, technical, financial, and political forces that would otherwise pull it apart.

- **Project charter** authorizes the project and names its sponsor; **scope statement** defines what will be produced; together they are the project's decision contract and litigation insurance.
- **Stakeholder analysis** maps everyone who can affect or is affected by the project; the **stakeholder register** records them; **stakeholder engagement** turns the analysis into recurring action.
- **Work breakdown structure** decomposes the work; **estimation techniques** assign duration and cost to each piece; the **project schedule** sequences them with dependencies; the **Gantt chart** is the dominant visual format; the **critical path method** finds the longest dependent chain that determines the finish date.
- The **project triangle** — scope, time, cost (with quality in the middle) — captures the iron law that you can fix any two but the third must flex. Pretending all three are fixed sacrifices quality.
- The **risk register** tracks uncertain events; **risk mitigation** is one of four risk responses (avoid, mitigate, transfer, accept); the **issue log** tracks risks that came true; **change control** keeps scope honest by making expansion a visible decision rather than a quiet one.
- The **communication plan** specifies who needs to know what, when, and how — the structural defense against the leading cause of project failure.
- **PMBOK Guide** (descriptive, PMI, North-American-dominant) and **PRINCE2** (prescriptive, UK-government, European-dominant) are the two big methodological standards; most organizations blend both.
- **Waterfall project management** suits stable requirements; **agile project management** suits emergent ones; **hybrid project management** is what most organizations actually do. **Burndown charts** and **velocity** are the agile artifacts that translate progress into forecasts a non-agile audience can read. (See Chapter 4 for the Scrum events that produce them.)
- **Earned value management** integrates schedule and cost into CV, SV, CPI, SPI, and EAC, answering "are we on track?" for projects rigorous enough to justify the bookkeeping.
- **Project closure** finalizes every loose end; **lessons learned** capture what the team will do differently — only valuable if the next project actually reads them.
- **Project portfolio management** picks the right projects; **program management** coordinates groups of related projects; the **PMO** provides governance, methodology, and reporting; **resource leveling** keeps the schedule honest about human capacity.

A graduate of this chapter walking into their first IS project should be able to ask, in order: *Who signed the charter? Where's the scope statement? Who are the high-power-high-interest stakeholders, and when do we meet with them next? Where's the WBS and how were the estimates produced? Show me the critical path. What are the top three risks and who owns each one? How are scope changes approved? Are we waterfall, agile, or hybrid, and why? If we're tracking EVM, what's our CPI today?* That sequence of questions will identify a project's actual health in about thirty minutes — which is faster than most consultants can do it after a week of interviews.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just learned the working vocabulary of IS project management — charters, scope statements, stakeholder grids, WBS, estimation techniques, schedules, Gantt charts, critical paths, the iron triangle, risk registers, issue logs, change control, communication plans, PMBOK, PRINCE2, waterfall, agile, hybrid, burndown charts, velocity, earned value management, project closure, lessons learned, portfolio, program, PMO, and resource leveling. Next time somebody hands you a project plan with no critical path highlighted, you will know what's missing. Next time a sponsor insists on full scope, fixed deadline, and fixed budget, you will smile politely and pull up the project triangle. Next time a project ships on time and on budget and quietly on fire, you will recognize the missing change-control process. And next time a project closes cleanly, with lessons captured and read, with the team genuinely better than when it started — you will recognize the rare and valuable thing it is. Onward to Chapter 17, where we step back and ask the broader question of how IS work fits into the organization's strategy as a whole.


## References

[See Annotated References](./references.md)
