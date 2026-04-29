---
title: Application Development for IS
description: How IS organizations build and acquire applications — SDLC, agile and waterfall, requirements, version control, CI/CD, build-vs-buy-vs-SaaS, low-code, and the slow gravity of technical debt.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# Application Development for IS

## Summary

Covers how IS organizations build and acquire applications: SDLC, agile and waterfall, requirements engineering, low-code/no-code, build-vs-buy-vs-SaaS, and CI/CD.

**Role in the course:** Walk students through how applications get built, bought, or rented in practice — the methodologies, the lifecycle, and the make-or-buy decision.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

1. SDLC
2. Waterfall Model
3. Agile Methodology
4. Scrum Framework
5. Kanban Method
6. Extreme Programming
7. Requirements Elicitation
8. Functional Requirement
9. Non-Functional Requirement
10. User Story
11. Acceptance Criteria
12. Sprint
13. Sprint Planning
14. Sprint Review
15. Sprint Retrospective
16. Daily Standup
17. Continuous Integration
18. Continuous Delivery
19. Version Control
20. Git Workflow
21. Code Review
22. Build vs Buy vs SaaS
23. Low-Code Platform
24. Citizen Developer
25. Technical Debt

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Information Systems](../01-foundations/index.md)
- [Chapter 2: The Role of IS in Organizations](../02-role-of-is/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 4. We have spent three chapters establishing what an information system is, how it earns its keep, and how its parts fit together. Now we get to the part that, for many of you, is why you signed up: how applications actually get built. By the end of this chapter you will be able to read a job description that says "agile development experience" and know what the words mean, walk into a sprint planning meeting and not panic, defend a build-vs-buy recommendation in front of a CFO, and recognize the early symptoms of technical debt before they metastasize into a rewrite. That last skill alone is worth the price of admission.

## The Lifecycle: Why We Need a Method

Software does not, despite years of evidence to the contrary, build itself. Somebody has to decide what to build, figure out what it should do, design it, write the code, test it, deploy it, and keep it running until either the system is retired or the universe ends, whichever comes first. The collected name for that arc is the **Software Development Life Cycle**, almost always abbreviated **SDLC**.

The SDLC is best thought of not as a single recipe but as the *list of activities every method has to handle somehow*. Every project, no matter the methodology, has to do at least: planning, requirements analysis, design, implementation (the writing-code part), testing, deployment, and maintenance. Methodologies differ in how they sequence those activities, how often they revisit them, and how much ceremony they wrap around each one — but no method gets to skip any of them. A team that claims to have skipped requirements has merely skipped *writing them down*; the requirements still exist, hiding in someone's head, ready to ambush the project at the worst possible moment.

The reason we need an SDLC at all — rather than just letting smart people improvise — is that software projects fail in patterned ways. They fail because requirements were misunderstood. They fail because the design assumed something the code did not deliver. They fail because testing was treated as a final-week activity rather than a parallel one. They fail because deployment was treated as somebody else's problem. A method imposes structure on the activities most likely to be skipped under deadline pressure, and that structure is the difference between *most* IS projects shipping and *very few* IS projects shipping.

## Waterfall: The Original Method

The oldest formal SDLC method, and still the easiest to draw on a whiteboard, is the **Waterfall Model**. Waterfall treats software development as a sequence of distinct phases, each one completed and signed off before the next one begins. The classic phase list is *Requirements → Design → Implementation → Verification → Maintenance*, and the visual metaphor is water flowing down a series of ledges — once you have left a phase, you do not (in the strict version of the model) climb back up to it.

Waterfall has been the punching bag of every agile keynote for twenty years, which is unfair, because waterfall actually works in the conditions it was designed for: projects where the requirements are genuinely well understood up front, where the cost of changing direction mid-project is enormous, and where the deliverable has to be certified or audited as a whole before it ships. Building a flight control system, a regulated medical device, or the software for a satellite that you cannot send a developer up to patch — these are not contexts that benefit from sprint retrospectives. They benefit from *getting the requirements right and not deviating*.

Where waterfall famously breaks is in business application development, because business requirements are *not* well understood up front. They are discovered, often by showing the users something half-built and watching them say, "Oh, we did not realize we wanted that until we saw it." A pure waterfall project against shifting business requirements becomes a slow-motion negotiation about which version of the truth was signed off in week four, and the team that *should* have been building software ends up litigating documents instead.

#### Diagram: The Waterfall Model

<details markdown="1">
<summary>The Waterfall Model</summary>
Type: static-infographic
**sim-id:** waterfall-model<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js infographic showing the classic five-phase waterfall in a stair-step descending pattern from top-left to bottom-right: Requirements, Design, Implementation, Verification, Maintenance. Each phase is rendered as a labeled rectangle on its own ledge, with a curved arrow connecting it to the next ledge below — visually evoking water cascading down. A small dotted "feedback" arrow runs from each downstream phase back to its predecessor, drawn in a muted color to signal that backward movement is possible but expensive.

Color palette: blue gradient from sky-blue (Requirements) to deep navy (Maintenance), with a subtle wave pattern under each ledge. White label text. The two "discovery moments" where requirements typically change in real projects (mid-Design and mid-Verification) are marked with small warning icons.

Interactivity: hovering each phase reveals (a) typical activities in that phase, (b) typical artifacts produced, and (c) the most common reason projects stall there. A toggle switches between "pure waterfall" (no feedback arrows) and "modified waterfall" (feedback arrows visible) to illustrate how organizations actually use the model in practice.

Layout: full canvas width, height ~480px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Understanding): Students can describe each waterfall phase, identify its primary risk, and articulate the conditions under which waterfall is an appropriate method.

Implementation: p5.js, deployed at `/information-systems/sims/waterfall-model/`.
</details>

## Agile: The Counter-Reformation

In 2001, seventeen software practitioners holed up in a Utah ski resort and produced the **Agile Manifesto**, a four-line creed that has since launched approximately eleven thousand consulting careers and one or two genuinely better software projects. The manifesto values: individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; and responding to change over following a plan. The values on the right still have value — they just rank lower than the ones on the left.

**Agile methodology**, then, is less a single process than a family of methods that share that ranking. Agile methods break the work into short cycles (typically one to four weeks), produce working software at the end of each cycle, invite the customer to look at it, adjust based on what they say, and repeat. The bet is that *iteration with feedback* discovers the right system faster than *planning followed by execution*.

Agile is not the absence of discipline; it is a different *kind* of discipline. Agile teams plan constantly — they just plan in shorter horizons. They document constantly — they just document the things that need to be remembered, not every thought ever spoken. They meet constantly — they just keep the meetings short and outcome-oriented. The footgun lurking in agile adoption is the team that hears "agile" and concludes it means "we have permission to skip the parts of the SDLC that we found tedious." That team has not adopted agile; it has adopted *unstructured chaos with stand-ups*.

| Dimension              | Waterfall                                    | Agile                                                |
|------------------------|----------------------------------------------|------------------------------------------------------|
| Cycle length           | One long project (months to years)           | Short iterations (1–4 weeks)                         |
| Requirements stability | Assumed stable, signed off up front          | Assumed to evolve; discovered through iteration      |
| Customer involvement   | Heavy at start, light during build           | Continuous throughout the project                    |
| Working software       | Late — after verification phase              | Every iteration                                      |
| Documentation          | Comprehensive, contractually significant     | Minimum useful — favored when load-bearing           |
| Best fit               | Regulated, safety-critical, well-understood  | Business apps, evolving requirements, internal tools |
| Failure mode           | Build the wrong thing, perfectly             | Drift forever without shipping a coherent whole      |

Both columns have failure modes. The right method is the one whose failure mode the organization can survive.

## Scrum: The Most Popular Agile Framework

Of the agile family, the most widely deployed framework is **Scrum**, which packages agile values into a small set of roles, events, and artifacts that a team can adopt without reinventing them. The **Scrum Framework** defines three roles (Product Owner, Scrum Master, Development Team), a fixed-length iteration called a **Sprint**, and a handful of recurring events that keep the work flowing.

A **Sprint** is a time-boxed iteration — typically two weeks, sometimes one or four — at the end of which the team produces a *potentially shippable increment* of working software. The fixed length matters: sprints establish a heartbeat the rest of the organization can plan against. If marketing knows that something visible ships every two weeks, marketing stops asking the dev team for a status report every Tuesday.

Each sprint is bookended and punctuated by four events:

- **Sprint Planning** kicks off the sprint. The team decides which items from the product backlog they will commit to delivering in the sprint, breaks them into tasks, and agrees on the *sprint goal* — a one-sentence statement of what the sprint is for. Good planning meetings end with both a list and a goal; bad ones end with only a list.
- **Daily Standup** (also called the *daily scrum*) is a fifteen-minute synchronization meeting held every working day of the sprint. The classic format has each team member answer three questions: What did I do yesterday? What will I do today? What is in my way? The standup is *not* a status report to management — it is a coordination meeting among the team, and the moment it turns into status theater is the moment it stops working.
- **Sprint Review** happens at the end of the sprint. The team demos the working increment to stakeholders and collects feedback. The review is *the* opportunity for the customer to course-correct before another two weeks goes by.
- **Sprint Retrospective** also happens at the end of the sprint, separately from the review, and is for the team only. The team asks: *What went well? What did not? What will we change next sprint?* Retrospectives are the engine of continuous improvement; teams that skip them tend to repeat the same mistakes for years.

There is a quiet superpower in this structure. Each event creates a feedback loop on a different timescale: standups close the loop daily, reviews close it bi-weekly, retrospectives close it on the team's own process bi-weekly. A team running all four well is essentially three nested learning systems running simultaneously. That is the leverage point that explains why so many organizations have adopted Scrum despite the ceremony cost.

#### Diagram: The Scrum Sprint Cycle

<details markdown="1">
<summary>The Scrum Sprint Cycle</summary>
Type: interactive-infographic
**sim-id:** scrum-sprint-cycle<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js circular diagram showing the Scrum sprint cycle. The outer ring depicts the sprint as a closed loop, with sprint planning at the top (12 o'clock), the development work spanning the right side, sprint review at the bottom (6 o'clock), and sprint retrospective just past it. The inner ring shows the daily standup repeating at each "day" tick around the loop. The product backlog feeds into sprint planning from the left; the potentially shippable increment exits from sprint review on the right.

Color palette: warm orange-to-amber for sprint events, soft green for development work, slate-gray for backlog and increment artifacts. Mascot-emerald accent on the retrospective to highlight it as the learning moment.

Interactivity: a "play" button advances a marker around the cycle, pausing at each event to display (a) participants, (b) duration, (c) primary output, and (d) the most common dysfunction associated with that event (e.g., "Standup turns into status theater"). A speed slider controls the animation. A toggle lets the user switch between 1-week, 2-week, and 4-week sprint cadences, which redistributes the day ticks accordingly.

Layout: square aspect ratio, full canvas width, height ~520px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Applying): Students can identify each Scrum event by its participants, output, and timebox, and explain how the events compose into nested feedback loops.

Implementation: p5.js, deployed at `/information-systems/sims/scrum-sprint-cycle/`.
</details>

## Kanban: Flow Without the Sprints

Where Scrum imposes a fixed-length heartbeat, the **Kanban Method** does the opposite: it lets work flow continuously, but limits how much work is allowed to be in progress at any one time. Kanban originated as a manufacturing technique at Toyota and was adapted to knowledge work by David Anderson in the late 2000s. The visual centerpiece is the *Kanban board* — columns representing the stages of work (Backlog, In Progress, Review, Done, etc.) with cards representing work items moving left to right.

The two ideas that make Kanban distinctive are the **work-in-progress (WIP) limit** and the focus on *flow*. Each column has a maximum number of cards allowed in it; if the column is full, no new card can move in until an existing one moves out. This sounds restrictive, but it is the structural fix to a footgun that haunts knowledge work: without WIP limits, individuals start more work than they can finish, context-switching costs explode, and everything finishes late simultaneously. Constraining WIP forces the team to finish things before starting new ones — and the throughput goes up, not down.

Kanban is the right choice when work arrives unpredictably (support, maintenance, ops), when "the sprint" feels like an artificial constraint, or when the team is pulling from a continuous queue rather than batching. Many teams blend Scrum and Kanban into "Scrumban" — keeping the planning ceremonies of Scrum while using a Kanban board for the day-to-day flow. The methodology police will not arrest you.

## Extreme Programming: The Engineering Practices

If Scrum and Kanban are about *how the team organizes its work*, **Extreme Programming** (XP) is about *how the team writes the code*. XP, developed by Kent Beck in the late 1990s, is a set of disciplined engineering practices that take agile values seriously down to the keyboard level. The signature practices are:

- **Pair programming** — two developers at one workstation, one driving and one navigating, switching frequently. It feels expensive in headcount and turns out to be cheap in defects.
- **Test-driven development (TDD)** — write the failing test first, then write just enough code to pass it, then refactor. The discipline forces you to design the interface before the implementation.
- **Continuous integration** — every change merges to the main branch many times a day, with automated tests verifying nothing broke. (We will return to CI in detail shortly.)
- **Refactoring** — continuously improving the design of existing code without changing its behavior, so the code stays habitable.
- **Small releases** — get something real to users early, then iterate.
- **Collective ownership** — anyone on the team can change any part of the code, with the test suite as the safety net.

XP fell out of fashion as a *named* methodology around the time Scrum became fashionable, but its practices became the assumed engineering substrate of professional software development. When a job posting today requires "TDD experience" or "comfort with pair programming," that is XP showing through the rebranded marketing.

## Requirements: What to Build, Not Just How

The most expensive defect in any IS project is a **requirements defect** — a misunderstanding about what the system was supposed to do that survived all the way into production. Requirements defects cost roughly *100x more* to fix in production than they would have cost to catch during requirements analysis. That number is one of the most empirically robust findings in software engineering and the single best argument for taking requirements seriously.

**Requirements Elicitation** is the disciplined activity of discovering what a system needs to do. The word "elicitation" is precise — you do not just *collect* requirements as if they were sitting in a folder waiting for you; you *elicit* them, drawing them out of stakeholders who often do not know what they want until they see what they do not want. The standard elicitation toolkit includes interviews, observation (watching users do their actual job, which is shockingly different from how they describe their job), workshops, document analysis, prototyping, and surveys.

Once elicited, requirements are typically classified along two axes — what the system does, and how well it does it.

A **Functional Requirement** specifies *what the system must do*. "The system shall allow a customer to reset their password using a one-time email link." "The system shall calculate sales tax based on the shipping address." "The system shall flag any insurance claim over $50,000 for human review." Functional requirements are the actions, behaviors, and rules. They tend to be the requirements that show up first in conversations because they are the easiest to talk about.

A **Non-Functional Requirement** specifies *how well the system must do its functional requirements* — the qualities of the system rather than the features. Performance ("the page must load in under 2 seconds at the 95th percentile"), availability ("99.95% uptime during business hours"), security ("all data at rest must be encrypted with AES-256"), scalability, accessibility, maintainability, regulatory compliance — these are non-functional requirements, sometimes called "quality attributes" or "the *-ilities*." Non-functional requirements are easy to under-specify and brutal when violated; nobody complains about a feature, but everybody complains when the page is slow.

| Aspect              | Functional requirement                          | Non-functional requirement                              |
|---------------------|-------------------------------------------------|---------------------------------------------------------|
| Answers             | *What does the system do?*                      | *How well does it do it?*                               |
| Example             | "User can reset password by email."             | "Password reset email arrives within 30 seconds."       |
| Failure mode        | Feature missing or broken                       | Feature works but unusable in practice                  |
| Verified by         | Acceptance tests, user-acceptance testing       | Performance tests, load tests, security audits          |
| Often discovered    | In the first interview                          | After the system goes live and users complain           |

In agile teams, functional requirements typically live as **user stories** — short, structured statements of need written from the user's perspective. The canonical template is:

> *As a [type of user], I want [some capability], so that [some benefit].*

For example: *"As a returning customer, I want to save my shipping address, so that I do not have to retype it every time."* The format is small and humble on purpose. It is not a specification; it is a *placeholder for a conversation*. The story exists to remind everyone that there is a real user with a real reason for wanting the capability, and to invite the team to talk about it before building it.

Each user story carries its own list of **Acceptance Criteria** — the specific, testable conditions the story must satisfy to be considered "done." Acceptance criteria are often written in the *Given–When–Then* form borrowed from behavior-driven development:

- *Given* a customer with a saved shipping address,
- *When* they begin checkout,
- *Then* the saved address is pre-filled and editable.

Good acceptance criteria are unambiguous, testable, and bounded — they tell the developer when to stop and the tester what to verify. Stories without acceptance criteria are an invitation for the team and the product owner to disagree productively about whether the story is done. (Spoiler: nobody finds that productive.)

!!! mascot-tip "Pro move"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    When you write a user story, the *"so that…"* clause is the part that earns its keep. Anyone can write *"As a user, I want a button"*; the question is *what does pressing the button buy the user?* If you cannot finish the *"so that…"* clause without sounding silly, you do not have a story — you have a feature request that wandered in from the parking lot. Send it back until somebody can articulate the benefit, and you will spare the team a week of building the wrong button.

## Version Control and the Git Workflow

We have spent the methodology section talking about how teams *plan* to write code. Now let us talk about how they actually *handle* the code once it exists. The single most important tool any modern development team uses — more important than any IDE, framework, or methodology — is a **version control** system.

Version control is the practice (and the software) of tracking every change made to a codebase, attributing each change to its author, recording when it was made and why, and allowing the team to recover any prior state of the code on demand. Without version control, every developer is one accidental keystroke away from a catastrophic data loss, and every disagreement about "who broke the build" devolves into archaeology by accusation. With version control, the codebase has a memory, and the memory is reliable.

The dominant version control system in the industry is **Git**, originally written by Linus Torvalds in 2005 to manage the Linux kernel and now the de facto standard for nearly every software project on the planet. Git's distinctive feature is that it is *distributed*: every developer has a complete copy of the entire history, and synchronization happens explicitly through `push` and `pull` operations against shared remotes (most often hosted on GitHub, GitLab, or Bitbucket).

A **Git Workflow** is the team-level convention for how branches, commits, and merges are organized. Several common workflows are worth knowing by name:

- **Trunk-based development** keeps a single long-lived branch (`main`) and asks every developer to merge small changes into it many times a day, behind feature flags if necessary. It pairs naturally with continuous integration.
- **GitHub Flow** keeps `main` deployable, with feature branches that are short-lived and merged via pull request. Simple, popular, and works well for web applications.
- **GitFlow** (a specific older convention with capitalization) maintains long-lived `develop` and `main` branches plus feature, release, and hotfix branches. Heavier; well-suited to versioned products with parallel releases.

The choice of Git workflow is a real engineering decision, not a stylistic one. A team that picks a heavyweight workflow for a lightweight problem ends up doing branch ceremony instead of shipping; a team that picks a lightweight workflow for a heavyweight problem (multiple supported releases, regulated compliance) ends up patching production from a panic.

#### Diagram: A Simple Feature-Branch Git Workflow

<details markdown="1">
<summary>A Simple Feature-Branch Git Workflow</summary>
Type: interactive-infographic
**sim-id:** git-feature-branch-workflow<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network diagram visualizing a feature-branch Git workflow as a directed graph of commit nodes. The `main` branch runs horizontally across the middle of the canvas at y=480. Feature branches diverge upward and downward from `main`, advance through several commit nodes, and merge back via pull-request nodes. To work around the vis-network horizontal-edge label rendering bug, branch lines use a slight y-offset (e.g., 480 to 490) so labels render correctly on initial load.

Color palette: `main` branch in mascot-emerald, feature branches in shades of teal and amber, pull-request merge commits in a contrasting coral. Failed CI checks marked with a red badge; passed checks with a green checkmark.

Interactivity: hovering a commit shows the commit message, author, and CI status; hovering a pull-request node shows the PR title, the reviewer, and the merge-status. A "play" control walks through a typical feature lifecycle: branch creation, three commits, push, PR opened, code review comments, fix-up commits, CI passing, PR approved, merge to `main`, deployment trigger fired.

Layout: hierarchical with custom positioning to preserve the linear timeline metaphor. Canvas resizes on window resize, height ~480px.

Learning objective (Bloom: Applying): Students can trace a feature from branch creation through merge, and identify where code review and CI checks fit into the timeline.

Implementation: vis-network, deployed at `/information-systems/sims/git-feature-branch-workflow/`.
</details>

## Code Review: Where Software Quality Actually Happens

Once a developer has written a change on a branch, modern teams almost always require it to go through **Code Review** before it merges to the main branch. Code review is the practice of having one or more peers read the proposed change, comment on it, and explicitly approve it before it is integrated.

The naive view of code review is that it exists to catch bugs. It does catch bugs — but that is not its highest-value function. Code review is, in order of importance: a *knowledge-sharing* mechanism (the reviewer learns the code; the author learns the reviewer's mental model); a *coaching* mechanism (juniors get feedback from seniors, and seniors get sanity-checked by juniors); a *consistency* mechanism (the codebase converges on shared conventions); and *only then* a defect-detection mechanism. A team that treats code review purely as a bug filter is leaving most of the value on the table.

Code review is also one of the highest-leverage points in the entire SDLC. A reviewer who catches a poor design decision at the pull-request stage saves a multiple of the cost of catching it after the change has shipped, propagated through subsequent features, and accumulated dependents. The investment in the review pays back not in this sprint but across the next year of development on top of the change. This is exactly the kind of leverage point where systems thinking pays off — small, well-placed feedback now prevents large, distant cost later.

!!! mascot-thinking "Pause here — this is a leverage point"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    The teams with the best long-run velocity are not the ones that skip code review to "go faster." They are the ones that review *quickly* and *thoroughly* — usually within hours, with substantive comments. The thing that destroys velocity is the review queue that no one tends to: PRs sit for days, branches drift from `main`, merge conflicts pile up, and the team's morale leaks out through the gaps. If you remember nothing else from this section, remember this: *a code review queue is a system, and systems need owners.* Whoever owns the queue is performing one of the highest-leverage jobs in the organization.

## Continuous Integration and Continuous Delivery

Once your team has version control, branches, and code review, the next step is automating what happens when changes land. That is the territory of **Continuous Integration** (CI) and **Continuous Delivery** (CD), the two practices that together define modern release engineering.

**Continuous Integration** is the practice of merging every developer's changes into a shared main branch frequently — many times per day per developer, in the strict version — with each merge automatically triggering a build and a comprehensive automated test run. The bet is that *integrating early and often* surfaces conflicts when they are small and cheap to fix, instead of letting them pile up into a "merge week" of misery. CI is supported by a CI server (Jenkins, GitHub Actions, GitLab CI, CircleCI, and friends) that watches the repository, builds the code on every push, runs the test suite, and reports red or green within minutes.

The cultural rule that makes CI work is: *if the build is red, fixing it is the team's top priority.* A red main branch means nobody else can safely merge until it is green again. Teams that tolerate a chronically red main branch are not really practicing CI; they are practicing optimistic merging with a CI server attached.

**Continuous Delivery** extends CI by automating the *deployment* pipeline as well, so that any green build is in principle deployable to production at the push of a button (or, in the more aggressive variant called *continuous deployment*, deployed automatically without a button at all). The pipeline typically chains together build, unit tests, integration tests, static analysis, security scans, deployment to a staging environment, and finally deployment to production — each stage gating the next. The point is not just speed; it is *confidence*. A team that can deploy on demand can also *roll back* on demand, and the ability to roll back changes the kinds of risks the team is willing to take.

Together, CI/CD turns deployment from a quarterly trauma into a daily routine. Organizations that adopt CI/CD seriously report dramatically lower change-failure rates and dramatically faster time-to-recover when something does break. The DORA research (DevOps Research and Assessment, now part of Google) has established this so consistently that "deployment frequency" and "mean time to recover" are now standard organizational performance metrics. CI/CD is one of the few practices where the data is unusually clear: do this, ship more, break less.

#### Diagram: A Modern CI/CD Pipeline

<details markdown="1">
<summary>A Modern CI/CD Pipeline</summary>
Type: interactive-infographic
**sim-id:** cicd-pipeline<br/>
**Library:** p5.js<br/>
**Status:** Specified

A horizontal pipeline diagram in p5.js showing the canonical CI/CD stages from left to right: Commit, Build, Unit Tests, Integration Tests, Static Analysis, Security Scan, Deploy to Staging, Smoke Tests, Deploy to Production. Each stage is a labeled rounded rectangle, with arrows connecting them and small badges showing pass/fail status. A "developer commits" icon enters from the far left; a "users" icon receives the deploy on the far right.

Color palette: stages in a teal-to-emerald gradient when passing, switching to coral when failing. The currently-running stage has a pulsing border in mascot-magenta.

Interactivity: a "trigger commit" button starts a simulated run that walks down the pipeline. A controls panel lets the user inject failures at any stage to see how the pipeline halts and reports. A side panel shows the artifacts produced at each stage (binaries, test reports, scan reports, deployment manifests). A toggle switches between "continuous delivery" (manual approval gate before production) and "continuous deployment" (no gate).

Layout: full canvas width, height ~420px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can trace a commit through a CI/CD pipeline, identify the gates where failures halt deployment, and distinguish continuous delivery from continuous deployment.

Implementation: p5.js, deployed at `/information-systems/sims/cicd-pipeline/`.
</details>

## Build vs Buy vs SaaS: The Acquisition Decision

We have spent the chapter so far assuming the organization is *building* the application. That assumption is, in modern IS, the minority case. Most application capabilities an organization needs already exist — somebody has built them, and the only question is whether the organization should pay to use that work or pay to redo it. That question is the **Build vs Buy vs SaaS** decision, and it is the most consequential decision an IS organization makes about any given capability.

The three options are deceptively simple to state:

- **Build** means the organization writes the application itself, owning the code, the operations, and the roadmap. Maximum control, maximum cost, maximum responsibility.
- **Buy** means the organization licenses a packaged software product, installs and operates it on its own infrastructure, and customizes it as needed. Less control over the roadmap, lower marginal cost than build, ongoing operational responsibility.
- **SaaS** (Software as a Service) means the organization subscribes to a vendor-hosted, vendor-operated application accessed over the internet. Lowest control, lowest operational burden, recurring subscription cost forever, vendor owns the roadmap and the data center.

The decision is not actually about cost in the simple sense; it is about *where the organization wants to spend its scarce engineering attention*. Building a CRM from scratch is feasible — and almost always a bad idea, because there are forty mature CRMs and your engineers' time is better spent on the things that make your organization distinctive.

| Dimension                | Build                          | Buy (on-prem package)            | SaaS                             |
|--------------------------|--------------------------------|----------------------------------|----------------------------------|
| Control over features    | Total                          | High (with customization cost)   | Low — vendor controls roadmap    |
| Time to value            | Slowest                        | Medium                           | Fastest                          |
| Up-front cost            | Highest (engineering)          | High (license + implementation)  | Low (subscription)               |
| Ongoing cost             | Maintenance + ops              | Maintenance + ops + license      | Subscription forever             |
| Operational burden       | All on you                     | Mostly on you                    | Mostly on vendor                 |
| Data location            | You decide                     | You decide                       | Vendor decides (usually)         |
| Lock-in shape            | Internal complexity            | Vendor + your customizations     | Vendor + your data + integrations|
| Best when                | Capability is a true differentiator | Highly regulated, data sensitivity | Commodity capability, fast TTV   |

A useful heuristic: **build only the capabilities that are differentiators for your organization; buy or SaaS the commodity capabilities.** Email is not a differentiator for almost anyone (use Microsoft 365 or Google Workspace). Payroll is not a differentiator for almost anyone (use ADP or Workday). The customer-facing recommendation engine of Netflix? *That* is a differentiator. They build.

The footgun in this decision space is **over-customization of SaaS or packaged software**. The vendor's roadmap will keep moving, and every customization you make creates a hook that the vendor's next upgrade can rip out. Organizations that customize aggressively often discover, two upgrades later, that they cannot upgrade without redoing six figures of integration work — and so they freeze on an old version, lose vendor support, and drift into the worst-of-both-worlds: paying for SaaS but operating like an on-prem fossil. The structural fix is to *configure within supported extension points* and resist the temptation to hack around the product's intended model. If the product cannot do what you need within its supported extension points, you are buying the wrong product.

#### Diagram: Build vs Buy vs SaaS Decision Flow

<details markdown="1">
<summary>Build vs Buy vs SaaS Decision Flow</summary>
Type: interactive-infographic
**sim-id:** build-buy-saas-decision<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network decision-tree diagram laid out top-to-bottom. The root question at the top is "Is this capability a strategic differentiator?" Branches lead to follow-up questions: "Does a mature SaaS product cover 80%+ of the requirements?", "Is data sovereignty or regulation a constraint?", "Is the capability core to ongoing competitive advantage?", "Will the capability change frequently?" Leaf nodes recommend Build, Buy, or SaaS, each with a brief rationale.

Color palette: question nodes in slate-gray, decision branches in teal/amber, terminal Build leaves in mascot-emerald, Buy leaves in deep blue, SaaS leaves in coral. To work around the vis-network horizontal-edge label rendering bug, edges use a slight y-offset (e.g., 480 to 490) where labels are present.

Interactivity: clicking any node opens a side panel showing (a) representative real-world examples for that path (e.g., "Example: Netflix recommendation engine → Build"), (b) the most common failure mode of choosing this path inappropriately (e.g., "Building commodity capabilities you should have bought"), and (c) the typical cost-curve shape over five years.

Layout: hierarchical, top-down. Canvas resizes on window resize, height ~600px.

Learning objective (Bloom: Evaluating): Given a capability description, students can walk the decision tree, justify their recommendation, and name the failure mode of the alternatives.

Implementation: vis-network, deployed at `/information-systems/sims/build-buy-saas-decision/`.
</details>

## Low-Code Platforms and the Citizen Developer

A relatively recent fourth option blurs the lines among the previous three. A **Low-Code Platform** is a development environment in which applications are built primarily through visual configuration — drag-and-drop UI builders, point-and-click data models, declarative workflow designers — with traditional code used only for the parts that escape what the platform can express visually. Vendors like Microsoft Power Platform, Salesforce Lightning, ServiceNow, OutSystems, Mendix, and Appian dominate this space; the no-code subset of the same idea (Airtable, Zapier, Glide) targets even less technical users.

The strategic appeal of low-code is straightforward. Most internal applications an organization needs — request forms, approval workflows, light dashboards, simple integrations — are well within the expressive range of a low-code platform, and can be built in days by people without classical software-engineering backgrounds. That dramatically expands the pool of people who can deliver IS capabilities, which leads us to the second concept.

A **Citizen Developer** is a non-IT employee who builds applications using low-code or no-code tools to solve their own department's problems. The marketing manager who builds a campaign-tracking app in Power Apps. The HR business partner who automates an onboarding checklist in ServiceNow. The accounting analyst who builds a reconciliation workflow in Airtable. None of them have "developer" in their job title; all of them are, in this sense, developers.

The citizen-developer phenomenon is a genuine leverage point — it expands organizational throughput on small applications by orders of magnitude. It also brings a predictable set of unintended consequences:

- **Shadow IT.** Citizen-developed apps are often built outside IS oversight, on unsanctioned platforms, with informal data sourcing — recreating the very governance problems IS spent decades cleaning up.
- **Single points of failure.** The campaign-tracking app the marketing department now depends on was built by Janet, who is leaving in two weeks, and nobody else can read it.
- **Security and compliance gaps.** A citizen developer who has not been trained on data classification can blithely move sensitive data into a SaaS platform that is not approved for that data class.
- **Integration sprawl.** When every department spins up its own apps with its own data, the organization's data fragments along departmental lines just as the data warehouse team is trying to unify it.

The structural fix is *not* to ban citizen development — that battle is already lost, and trying to ban it is the fastest way to drive it underground. The fix is to provide a *fusion model*: IS supplies a sanctioned low-code platform, classifies data clearly, publishes templates and reusable components, and partners with citizen developers to professionalize the apps that become load-bearing. Done well, this turns a governance problem back into a leverage point. Done badly, it produces a citizen-developer-shaped landmine field.

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    The "fusion model" looks easy on a slide and is hard in practice. The footgun is that sanctioned low-code platforms can lull IS into thinking governance is solved when it has only been *outsourced to a vendor's permission system*. Always ask, for any low-code platform: *Who can see whose data? What data classes are allowed here? What happens to the apps if the citizen developer leaves? Is there a code-review equivalent for high-impact apps?* If those questions do not have crisp answers, you have shadow IT in a polo shirt.

## Technical Debt: The Slow Tax on Everything

We close the chapter with the concept that ties all the others together. **Technical Debt** is the accumulated cost of past engineering decisions that prioritized short-term delivery over long-term maintainability. The metaphor, coined by Ward Cunningham, is exact: like financial debt, technical debt lets you ship faster *now* in exchange for paying *interest* later, in the form of slower future development, more bugs, longer onboarding for new engineers, and harder integration with anything new.

Technical debt comes in flavors. *Deliberate debt* is debt you took on knowingly — "we will hard-code this for the demo and refactor in the next sprint." Deliberate debt is fine *if* you actually pay it back; the trouble is the next sprint gets its own deadlines. *Inadvertent debt* is debt you accumulated without realizing it — choices that looked fine at the time but turned into problems as the system grew. *Bit-rot debt* accrues simply because the world changed around code that did not — frameworks deprecate, security standards advance, dependencies go unmaintained.

Technical debt is the place where systems thinking shows up most painfully, because it is a *reinforcing feedback loop*:

- High technical debt slows new development.
- Slowing development creates schedule pressure.
- Schedule pressure tempts the team to take more shortcuts.
- More shortcuts add to technical debt.
- Repeat until rewrite.

The leverage points for breaking the loop are well-known but politically hard. The team needs *protected capacity for paying down debt* — typically expressed as a fixed percentage of each sprint dedicated to refactoring, dependency upgrades, and infrastructure improvements. The team needs *visibility into debt as a first-class artifact* — tracked, prioritized, and discussed at the same level as features. Engineering leadership needs to *say no to debt-creating shortcuts* under deadline pressure, which means they need executive cover to do so. None of these are technical interventions; all of them are organizational ones. That is the systems-thinking insight: the highest-leverage interventions in software development are usually not in the code.

#### Diagram: The Technical Debt Feedback Loop

<details markdown="1">
<summary>The Technical Debt Feedback Loop</summary>
Type: interactive-infographic
**sim-id:** tech-debt-feedback-loop<br/>
**Library:** vis-network<br/>
**Status:** Specified

A causal-loop diagram in vis-network showing five nodes arranged in a circle: Technical Debt, Development Velocity, Schedule Pressure, Shortcut Rate, and Defect Rate. Edges between nodes carry polarity labels (+/-) indicating whether one variable increases or decreases another. The loop forms a clear reinforcing cycle: Technical Debt (+) → reduces Development Velocity (-) → which increases Schedule Pressure (+) → which increases Shortcut Rate (+) → which increases Technical Debt (+). A second loop shows Technical Debt → Defect Rate → Schedule Pressure feeding the same dynamic. Edges drawn with slight y-offset (480 to 490) to ensure label rendering on horizontal segments.

Color palette: feedback edges in coral for reinforcing relationships, mascot-emerald for any balancing relationships introduced by the "leverage point" toggle. Node fill follows the standard book palette.

Interactivity: a "leverage point" toggle introduces three dampening interventions — Protected Refactor Capacity, Debt Visibility, Engineering Leadership Cover — each adding a balancing edge that reduces the relevant flow. Watching the toggle turn the doom loop into a controlled system is the pedagogical payoff. A side panel explains each intervention.

Layout: circular, height ~520px. Canvas resizes on window resize.

Learning objective (Bloom: Analyzing): Students can identify a reinforcing feedback loop, articulate why it produces compounding cost, and name three structural interventions that break it.

Implementation: vis-network, deployed at `/information-systems/sims/tech-debt-feedback-loop/`.
</details>

## Putting It All Together

Application development for IS is a stack of decisions, each one easy to underestimate:

- An **SDLC** of some shape is unavoidable; the question is which one fits your project.
- **Waterfall** still wins where requirements are stable and stakes are high; **agile methodology**, expressed most often as **Scrum** (with **sprints**, **sprint planning**, **sprint reviews**, **sprint retrospectives**, and **daily standups**), or as **Kanban**, wins where requirements evolve. **Extreme Programming** supplies the engineering practices on top of either.
- Good software starts with **requirements elicitation**, distinguishes **functional requirements** from **non-functional requirements**, expresses them as **user stories** with **acceptance criteria**, and refuses to start coding until those are at least sketched.
- Underneath the methodology lives the engineering substrate: **version control** (almost always Git) with a sane **Git workflow**, mandatory **code review**, **continuous integration** that keeps the main branch green, and **continuous delivery** that makes deployment a routine rather than a trauma.
- Above the methodology lives the acquisition decision: **build vs buy vs SaaS**, with **low-code platforms** and **citizen developers** offering a fourth path that has its own governance challenges.
- And under all of it, like silt accumulating in a riverbed, runs **technical debt** — the system-level feedback loop that determines whether your team is gaining or losing leverage on its own codebase year over year.

A graduate of this chapter walking into their first software project should be able to ask, in order: *What method are we using and why? What are the requirements, and how were they elicited? Where do they live? How is the code organized, reviewed, and shipped? Are we building, buying, or subscribing? And how much technical debt are we carrying right now?* If the team has good answers to all six, you are in a healthy project. If they have bad answers to any of them, you have just identified your first contribution.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just learned the working vocabulary of modern application development — the same vocabulary that, ten years ago, took new hires their entire first year on the job to absorb. From here on out, when somebody mentions a "sprint retrospective" you will hear *team-level feedback loop*, when somebody complains about "merge week" you will hear *they have not adopted CI*, when somebody pitches "let's build it ourselves" you will hear *prove it is a differentiator*, and when somebody says "we will fix it in the next release" you will hear *technical debt accumulating with interest*. Onward to Chapter 5, where we take everything we just learned about building applications and ask the harder question of what data those applications should be built on top of.
