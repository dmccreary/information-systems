---
title: 'Cloud Computing and Infrastructure'
description: How modern IS organizations rent compute, storage, and platforms by the second — and how that shift reshapes cost, architecture, migration, and the discipline of running infrastructure at scale.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# Cloud Computing and Infrastructure

## Summary

Covers IaaS, PaaS, SaaS, public/private/hybrid deployment, cost models (CapEx vs OpEx), migration patterns, vendor lock-in, and FinOps.

**Role in the course:** Establish cloud literacy now, because every later chapter (security, AI, data) assumes it.

## Concepts Covered

This chapter covers the following 22 concepts from the learning graph:

1. Cloud Computing
2. NIST Cloud Definition
3. IaaS
4. PaaS
5. SaaS
6. FaaS
7. Public Cloud
8. Private Cloud
9. Hybrid Cloud
10. Multi-Cloud
11. CapEx vs OpEx
12. Cloud Cost Model
13. FinOps
14. Reserved Instance
15. Container
16. Docker
17. Kubernetes
18. Cloud Migration
19. Six Rs of Migration
20. Lift and Shift
21. Vendor Lock-In
22. Cloud Center of Excellence

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Information Systems](../01-foundations/index.md)
- [Chapter 2: The Role of IS in Organizations](../02-role-of-is/index.md)
- [Chapter 11: Networks and Telecommunications for Business](../11-networks/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 12. The last decade reshaped IS more than the previous three combined, and the chief reason was cloud. The data center your grandparents' employer spent two years and seventy-two procurement signatures to build can now be conjured by a sophomore with a credit card in roughly the time it takes to microwave popcorn. By the end of this chapter you will know what cloud actually *is* (an idea older than you might think), how to tell IaaS from PaaS from SaaS from FaaS without flinching, why your company's "we're moving to the cloud" project might somehow *raise* the IT budget, and what FinOps people do all day. The cloud is one of the most leverage-rich shifts in IS history. Let's collect the leverage.

## What Cloud Computing Actually Is

Strip away the marketing and **Cloud Computing** is a deceptively simple idea: instead of buying, owning, and operating computer hardware yourself, you *rent* computing capability from a provider, on demand, over a network, paying only for what you use. The capability might be raw virtual machines, a managed database, a video-streaming service, or a function that runs for 200 milliseconds and then vanishes. What unifies them is the *delivery model*: someone else owns the metal, someone else keeps the lights on, and you get an API you can call from anywhere on Earth.

The idea is older than the buzzword. Time-sharing on mainframes in the 1960s let multiple customers rent slices of one machine. Application service providers in the late 1990s let companies rent business software they accessed over the early internet. What the 2006 launch of Amazon EC2 introduced was *programmability* — the ability to summon and dismiss servers from a command line, in seconds, without talking to a human. That single change — turning infrastructure into an *API call* — is what made the cloud era genuinely new. Every cloud feature since is a refinement of that original move.

The reason cloud matters for IS, beyond the obvious cost question, is *speed*. A company that can stand up a new application environment in an afternoon makes different strategic choices than one that schedules new servers a quarter in advance. The cloud's deepest impact is not on the IT budget; it is on the *cycle time* of the business. That changes everything else.

## The NIST Cloud Definition: The Five Things That Make It Cloud

Before "cloud" meant anything precise, vendors slapped the word on every product they sold. In 2011 the U.S. National Institute of Standards and Technology published Special Publication 800-145, *The NIST Definition of Cloud Computing*, and the industry — gratefully — took it as gospel. The **NIST Cloud Definition** is short, surgical, and still the cleanest answer to "is this thing actually cloud?"

NIST identifies *five essential characteristics*. To call something cloud, it must have all five:

- **On-demand self-service.** A consumer can provision resources (servers, storage, network) automatically, without requiring human interaction with the provider. If you have to file a ticket and wait, it's not cloud.
- **Broad network access.** Capabilities are available over the network and accessed through standard mechanisms (HTTP/HTTPS, APIs) that work across heterogeneous client platforms — laptops, phones, IoT devices.
- **Resource pooling.** The provider's computing resources are pooled to serve many consumers using a multi-tenant model, with physical and virtual resources dynamically assigned and reassigned according to demand.
- **Rapid elasticity.** Capabilities can be elastically provisioned and released — sometimes automatically — to scale rapidly outward and inward commensurate with demand. To the consumer, capacity often appears unlimited.
- **Measured service.** Resource usage is monitored, controlled, and reported transparently for both provider and consumer. This is the *meter* — and the meter is what makes pay-as-you-go economics possible.

NIST also names the three classic *service models* (IaaS, PaaS, SaaS — we'll add FaaS shortly) and four *deployment models* (Public, Private, Hybrid, Community). Skipping any of the five characteristics is the tell that something is "cloud-washed" rather than cloud. A virtualized data center where you still file a ticket to get a VM is *virtualization* — not cloud.

## Service Models: Who Manages What

The cloud's defining trick is that the provider takes over a layer of operational responsibility you used to own yourself. The four service models — **IaaS**, **PaaS**, **SaaS**, and **FaaS** — differ only in *how much* of the stack the provider manages and how much you keep.

**IaaS** (Infrastructure as a Service) gives you raw virtualized infrastructure: virtual machines, virtual networks, block and object storage. You manage the operating system, the runtime, the application, and the data. The provider manages the physical hardware, the hypervisor, and the data-center plumbing. AWS EC2, Azure Virtual Machines, and Google Compute Engine are the canonical examples. IaaS is the most flexible, the most familiar to anyone who has run their own servers, and the most operationally demanding of the cloud models.

**PaaS** (Platform as a Service) gives you a managed application platform: a runtime, an integrated database, deployment automation, scaling, monitoring. You bring application code; the provider runs everything underneath it. Heroku, AWS Elastic Beanstalk, Google App Engine, and Azure App Service are classic PaaS offerings. PaaS trades flexibility for productivity — you can ship an app faster, but you can't tune the kernel.

**SaaS** (Software as a Service) gives you finished applications you access over a browser or API. You don't manage code at all — you just use the product, configure it, and feed it data. Salesforce, Workday, Microsoft 365, Zoom, ServiceNow, and Google Workspace are all SaaS. SaaS is the least flexible and the most productive: most organizations use dozens or hundreds of SaaS products without thinking of them as "cloud."

**FaaS** (Function as a Service), also called *serverless compute*, lets you run individual functions in response to events without managing any server, container, or runtime. You upload a function, configure a trigger (HTTP request, queue message, file upload, cron timer), and the provider invokes the function on demand and bills you per millisecond of execution. AWS Lambda, Azure Functions, and Google Cloud Functions are the canonical FaaS platforms. FaaS is the most granular form of cloud compute — you don't even rent a *machine*, you rent a *moment*.

The shorthand most people use: with IaaS you manage the OS and up; with PaaS you manage the app and up; with SaaS you don't manage anything; with FaaS you manage *only* the function code and let the platform handle everything else. The choice between them is a textbook tradeoff between *control* and *responsibility* — the more control you keep, the more operational work you also keep. Pick the highest-level service that meets your real requirements; resist the urge to "stay flexible" by managing things you don't need to manage.

| Model | You manage | Provider manages | Canonical examples | Best fit |
|-------|-----------|------------------|---------------------|----------|
| **IaaS** | OS, runtime, app, data | Hypervisor, hardware, network | EC2, Azure VM, GCE | Custom workloads, lift-and-shift, full control |
| **PaaS** | App, data | OS, runtime, scaling, hardware | Heroku, App Engine, Beanstalk | Greenfield apps, dev productivity |
| **SaaS** | Configuration, data | Everything else, including the app | Salesforce, M365, Workday | Solved business problems |
| **FaaS** | Function code | Everything, including the runtime | Lambda, Azure Functions | Event-driven workloads, glue code, sporadic traffic |

#### Diagram: Shared Responsibility Across IaaS, PaaS, SaaS, and FaaS

<details markdown="1">
<summary>Shared Responsibility Across IaaS, PaaS, SaaS, and FaaS</summary>
Type: interactive-infographic
**sim-id:** cloud-shared-responsibility-stack<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js stacked-bar visualization of the cloud responsibility split. Five vertical columns: On-Premises, IaaS, PaaS, SaaS, FaaS. Each column is divided into eight horizontal layers from bottom to top: Networking, Storage, Servers, Virtualization, OS, Runtime, Application, Data. Each layer is colored mascot-emerald when the customer owns it and slate-gray when the provider owns it. The On-Premises column is entirely emerald (you own it all). IaaS turns the bottom four layers gray. PaaS turns the bottom six gray, leaving only Application and Data emerald. SaaS turns everything gray except the very top "Data" layer. FaaS leaves only "Application" (function code) and "Data" emerald.

Color palette: customer-managed layers in mascot-emerald, provider-managed layers in slate-gray with a subtle gradient, FaaS column highlighted with a coral border to indicate the "rent a moment" pattern. Labels in clear sans-serif white text on each band.

Interactivity: hovering each cell shows (a) what that layer means in plain English, (b) a concrete example of a task at that layer (e.g., "patch the OS kernel"), and (c) which party performs that task in that model. A toggle switches between "responsibility" and "billing" views — the billing view shows what you pay for in each model, often counter-intuitively (e.g., in SaaS you don't pay for storage line-item, but it's baked into seat licensing).

Layout: full canvas width, height ~580px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can identify, for any given operational task, which party (customer or provider) is responsible for it under each of the five models, and articulate the tradeoff each model makes.

Implementation: p5.js, deployed at `/information-systems/sims/cloud-shared-responsibility-stack/`.
</details>

!!! mascot-thinking "Pause here"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    Notice the structural insight: every layer the provider owns is a layer you *no longer get to differentiate on*. SaaS commodifies the application. PaaS commodifies the runtime. IaaS commodifies the hardware. Your job as an architect is to keep your competitive differentiation in the layers you still own — *your data, your business logic, your customer experience* — and shove every other layer onto the provider as fast as possible. Architects who fight to keep control of the OS kernel while ignoring their data-quality problem have inverted the leverage map. The highest-leverage move is almost always to climb *up* the stack, not down it.

## Deployment Models: Whose Building Is the Server In?

Service models tell you *what* you're renting. Deployment models tell you *where it lives* and *who else is in the building*.

**Public Cloud** is the model most people picture when they hear "cloud": multi-tenant infrastructure operated by a provider (AWS, Azure, Google Cloud, Oracle Cloud, IBM Cloud, Alibaba Cloud) and offered to the general public over the internet. Resources are pooled across many customers; you and a competitor might share the same physical host (separated by virtualization). The advantages are scale, elasticity, and a relentless feature roadmap funded by every other customer on the platform. The disadvantage is that you're a tenant in someone else's building.

**Private Cloud** is cloud infrastructure operated *exclusively for a single organization*. It can be hosted in your own data center, in a colocation facility, or by a managed-services provider — what makes it private is single tenancy. Private clouds offer stronger control over data residency, compliance, and customization. They are popular in regulated industries (banking, defense, healthcare) where data-locality requirements or audit posture make public cloud awkward. The catch is that you give up much of the public-cloud economy of scale; "private cloud" can quietly become "expensive virtualized data center with a slick portal."

**Hybrid Cloud** combines public and private clouds, with orchestration that allows data and applications to move (or at least communicate) between them. The classic hybrid pattern keeps sensitive systems of record in the private environment and elastic, customer-facing workloads in the public cloud. Hybrid is the dominant pattern in large enterprises today — partly by design, partly because most enterprises *already* have a private data center they cannot retire overnight.

**Multi-Cloud** means using two or more public-cloud providers simultaneously — for example, running production on AWS while keeping disaster-recovery on Azure, or using Google's BigQuery for analytics while running web tier on AWS. Multi-cloud is sometimes a deliberate strategy (avoid lock-in, exploit best-of-breed) and sometimes an accident (the marketing team bought one cloud, the data team bought another, and now both are production). Multi-cloud is more flexible than single-cloud, and *much* more operationally complex; we'll come back to that tradeoff when we talk about lock-in.

| Deployment | Tenancy | Operated by | Typical use | Tradeoff |
|------------|---------|-------------|-------------|----------|
| **Public** | Multi-tenant | Cloud provider | General workloads, elastic apps | Scale and speed vs. shared building |
| **Private** | Single-tenant | Self or managed provider | Regulated, sensitive workloads | Control vs. lost economy of scale |
| **Hybrid** | Mixed | Both | Enterprise modernization, gradual migration | Flexibility vs. operational complexity |
| **Multi-Cloud** | Multi-tenant across providers | Two or more public clouds | Avoid lock-in, best-of-breed | Optionality vs. complexity tax |

## CapEx vs OpEx: The Quietly Revolutionary Part

The most misunderstood thing about the cloud is the financial part, because the cloud doesn't just change *how* you buy IT — it changes *what kind of expense* IT is on the books. **CapEx vs OpEx** is the accounting axis that quietly reshapes how organizations plan, budget, and answer to their CFO.

*Capital expenditure* (CapEx) is money spent to acquire long-lived assets. When you buy a server, that server is a fixed asset on your balance sheet, depreciated over (typically) three to five years. The full cost hits the balance sheet up front, but only a fraction shows up as expense in any given quarter. Procurement is slow, finance approval is heavy, and once you've bought the server you own it whether or not you use it.

*Operating expenditure* (OpEx) is money spent on consumable services that get expensed in the period you use them. When you rent a cloud VM, every hour you run it is an operating expense in that month's books. There's no asset and no depreciation. Procurement is fast (often zero approvals), but the spend is visible in *every* month forever.

The cloud shifts IT spending from CapEx to OpEx. That sounds like a finance footnote until you realize what it actually changes: the *time horizon* of decisions. CapEx purchases require long-range capacity forecasts and committee meetings; OpEx services can be tried for a weekend. CapEx hides marginal usage in depreciation; OpEx surfaces every byte of waste in next month's bill. CapEx rewards over-provisioning ("we'd better buy enough for three years"); OpEx rewards rightsizing.

The shift creates two characteristic surprises. The first: organizations that thought cloud would *save* money discover it sometimes costs more, because previously-hidden capacity waste is now visible (and painful). The second: organizations that always under-spent on infrastructure discover they can *finally* try things — at the cost of a finance team that now has to explain why last month's bill was 23% higher than the one before. Neither effect is the cloud's fault; both are properties of moving from CapEx to OpEx visibility.

| Dimension | CapEx (own) | OpEx (rent) |
|-----------|-------------|-------------|
| Up-front cost | High | Low to none |
| Decision horizon | Years | Days |
| Procurement speed | Slow | Fast |
| Approval gravity | Heavy (committee) | Light (sometimes none) |
| Cost of being wrong | High — you bought it | Low — you can stop renting |
| Cost visibility | Smoothed via depreciation | Surfaced every billing cycle |
| Encourages | Over-provisioning, conservatism | Experimentation, rightsizing |

## The Cloud Cost Model: Why the Bill Is Weird

Once you're on OpEx footing, you encounter the **Cloud Cost Model** — the actual mechanics of how cloud bills are calculated. It is one of the more cognitively demanding parts of modern IS, because the cloud has hundreds of services and each one has its own pricing dimensions.

The high-level structure: you pay for *resources consumed*, measured continuously, billed (usually) monthly. Compute is billed by the second or hour. Storage is billed by the gigabyte-month, with separate prices for hot, warm, and cold tiers. Network egress (data leaving the cloud) is billed by the gigabyte and is famously expensive. Network ingress (data entering the cloud) is usually free, which is the point. Managed services — databases, queues, AI APIs — have their own pricing, often per-request or per-token.

A few patterns are worth memorizing because they catch every newcomer:

- **Egress is the trap.** Getting data *into* a cloud is free; getting it *out* costs real money per gigabyte. This asymmetry is not an accident — it's the gravitational pull that keeps your data where it landed.
- **Idle resources still bill.** A VM you provisioned and forgot about will run, and bill, indefinitely. There is no automatic shut-off for "nobody is using this." This is the cloud's politest footgun.
- **Tiny per-request fees compound.** A managed database that charges $0.0000004 per read sounds free until your application makes 80 billion reads per month.
- **The bill is *always* a surprise on the way up.** Usage spikes show up in the bill before they show up anywhere else.

The systems-thinking framing here is a feedback loop: cloud → autoscaling → cost surprise → over-correction → under-provisioning → outage. A team that gets shocked by a bill, panics, throttles autoscaling, and then takes a customer-facing outage at the next traffic spike has just walked the full loop. The structural fix is not "cut costs" or "scale up" — it's *visibility*: budgets, alerts, and dashboards that show usage in something close to real time, before the surprise lands.

## FinOps: Treating Cost as a Discipline

The discipline that emerged in response to cloud-cost chaos is **FinOps** — short for *Cloud Financial Operations*. FinOps is not a tool; it is an operational practice that brings finance, engineering, and product together to manage cloud spending continuously. The FinOps Foundation, formed in 2019, codified the practice and runs the certification programs.

FinOps recognizes a structural truth: the people *spending* cloud money (engineers, who launch resources at will) are different from the people *paying* for it (finance, who see the bill arrive). In the CapEx era, that gap was bridged by procurement. In the OpEx era, with no purchase orders to gate spending, the gap has to be bridged by *culture* and *tooling*. FinOps is the bridge.

The FinOps lifecycle has three phases that run continuously:

1. **Inform.** Make spending visible. Tag every resource with the team, project, and environment. Build dashboards so each engineering team sees its own cloud costs alongside its other metrics. You cannot manage what nobody can see.
2. **Optimize.** Identify and act on savings opportunities. Right-size over-provisioned VMs. Move cold data to cheaper storage tiers. Buy reserved instances or savings plans for predictable workloads. Shut down test environments overnight.
3. **Operate.** Close the loop with policy and automation. Build cost guardrails into CI/CD pipelines. Set budget alerts. Make cost a first-class metric in product reviews. Reward teams for efficiency, not just delivery.

FinOps is one of the highest-leverage moves an organization can make on cloud — not because it cuts the bill (though it does, often by 20-40% in the first year), but because it makes *cost a property the team designs for*, not a property they discover at the end of the quarter. Cost-aware architecture beats cost-cutting after the fact every time.

## Reserved Instances: Predictability in Exchange for Commitment

One of the most powerful cost-optimization levers is the **Reserved Instance** (RI), sometimes called a "savings plan" or "committed use discount" depending on the cloud. The basic deal: in exchange for committing to use a certain amount of compute for one or three years, the provider gives you a discount of 30-72% off the on-demand price. AWS, Azure, and GCP all offer variants.

Reserved instances are the cloud's way of converting a small piece of OpEx back into something that *behaves* like CapEx — predictable, committed, financially efficient. For workloads that run 24/7 (production databases, always-on web tier), reservations are nearly free money. For workloads that come and go, on-demand pricing is correct.

The footgun, predictably, is over-committing — buying three-year reservations for a workload your team replatforms in eighteen months. The reservation is still billed even if the underlying workload moved to a different instance family or different cloud. Worse: in some pricing models, a reservation locks you to a specific *instance family*, so even an internal modernization that switches you from m5 to m6 instances can leave a reserved m5 inventory bleeding cash. The structural fix is to reserve only the *baseline* — the part of your usage you are confident about for the full term — and leave the variable piece on on-demand or shorter savings plans.

!!! mascot-tip "Iris's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    The cleanest mental model for cloud spend is the *baseline-plus-spike* curve. Cover the baseline with reservations (the predictable part), let on-demand absorb the spikes (the unpredictable part), and use spot instances for fault-tolerant batch work that can ride interruptions. Pro move: rerun this analysis quarterly. Workloads grow, shrink, and migrate; the optimal reservation mix from January is rarely still optimal in October.

## Containers: The Other Half of the Cloud Story

Service models and cost are half of cloud. The other half is *how you actually package and run software* in this new world, and the answer the industry settled on is the **Container**.

A container is a lightweight, self-contained unit of software that bundles an application together with everything it needs to run — its code, runtime, system libraries, configuration — into a single portable package. A container runs on top of a host operating system, sharing the host's kernel but isolated from other containers via namespaces and cgroups. The result behaves like a tiny, fast-starting virtual machine while consuming a fraction of the resources.

The contrast with virtual machines is worth pausing on. A VM virtualizes the entire hardware stack, runs a full guest OS, and can take a minute or more to boot. A container virtualizes only the *application's view of the OS*, shares the host kernel, and can start in under a second. A typical server can run dozens of VMs or hundreds of containers. Containers also produce much smaller artifacts (often tens to hundreds of megabytes, vs. multi-gigabyte VM images) that are much easier to distribute and update.

The deeper appeal is reproducibility. The container image you build on a developer's laptop is the *same image* that runs in CI, in staging, and in production. The "works on my machine" problem — which has been a curse on software delivery since the day there were two machines — is largely solved by treating the application's environment as part of the artifact.

## Docker: The Container Format Everyone Settled On

Containers as a concept predate Docker by a decade — Linux had cgroups, namespaces, LXC, FreeBSD had jails, Solaris had zones. What **Docker** did, starting in 2013, was wrap the underlying Linux primitives in a developer-friendly toolchain: a simple file (the *Dockerfile*) that describes how to build an image, a registry (Docker Hub) for sharing images, and a single command (`docker run`) for launching containers from those images.

That ergonomic packaging turned containers from a Linux-kernel curiosity into the dominant unit of software delivery in roughly five years. Docker images became the *de facto* portable artifact for cloud workloads. The Open Container Initiative (OCI) eventually standardized the image format, so today "Docker image" and "OCI image" are largely interchangeable, and many runtimes other than Docker (containerd, CRI-O, Podman) can run them.

A complete picture of Docker has three pieces: the *image* (a layered, read-only template), the *container* (a running instance of an image, with a writable layer on top), and the *registry* (a server that stores and serves images). A team's typical workflow: a developer writes a Dockerfile, runs `docker build` to produce an image, pushes the image to a registry, and a deployment system pulls the image and runs it as a container in the target environment.

#### Diagram: Container vs. Virtual Machine Architecture

<details markdown="1">
<summary>Container vs. Virtual Machine Architecture</summary>
Type: interactive-infographic
**sim-id:** container-vs-vm-architecture<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js side-by-side architectural comparison. Left panel (VM architecture): hardware at the bottom, host OS layer, hypervisor layer, then three stacked virtual machines, each containing its own guest OS, its own libraries/binaries, and its own application. Right panel (Container architecture): hardware at the bottom, host OS layer, container runtime (Docker engine), then five containers each containing only libraries/binaries and an application — the guest OS layer is absent because containers share the host kernel.

Color palette: hardware in slate-gray, host OS in deep teal, hypervisor in coral, guest OS in muted gray, container runtime in mascot-emerald, application layers in mascot-magenta. A small "size" badge at the top of each unit shows typical artifact size (VM: 2 GB+, Container: 50-300 MB). A "boot time" badge shows typical startup time (VM: 30-90s, Container: <1s).

Interactivity: hovering any layer shows what it does in plain English. A "scale up" button animates adding three more units to each panel, illustrating how many more containers fit on the same host. A toggle adds a "shared kernel" highlight on the container side, showing the security tradeoff: weaker isolation than full VMs in exchange for density and speed.

Layout: two side-by-side panels, full canvas width, height ~520px. Canvas resizes on window resize. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Analyzing): Students can compare VM and container architectures, explain why containers are smaller and faster, and articulate the isolation/density tradeoff between the two.

Implementation: p5.js, deployed at `/information-systems/sims/container-vs-vm-architecture/`.
</details>

## Kubernetes: Orchestrating the Swarm

A single container is straightforward. A thousand containers, distributed across a hundred hosts, restarting themselves when they crash, scaling up during traffic spikes, doing rolling deployments without downtime, finding each other by name despite moving between hosts every hour — that is *not* straightforward, and the system the industry adopted to handle it is **Kubernetes** (often abbreviated K8s — eight letters between the "K" and the "s").

Kubernetes started at Google in 2014, descended from an internal system called Borg that had been running Google's own workloads for over a decade. Google open-sourced it, the Cloud Native Computing Foundation (CNCF) adopted it, and within five years Kubernetes had become the default container orchestrator across every major cloud. AWS (EKS), Azure (AKS), Google (GKE), and most others all offer managed Kubernetes services.

Kubernetes' core abstractions are worth knowing by name even if you never personally administer a cluster:

- **Pod.** The smallest deployable unit — one or more tightly-coupled containers that share network and storage.
- **Node.** A worker machine (VM or physical) that runs pods.
- **Cluster.** A set of nodes managed together, with a control plane that schedules pods.
- **Deployment.** A declarative description of a desired state ("I want 5 copies of this pod running"). Kubernetes works to make reality match it.
- **Service.** A stable network endpoint that load-balances across the pods backing it, even as those pods come and go.
- **Namespace.** A logical partition inside a cluster, used for multi-tenancy and environment separation.
- **ConfigMap and Secret.** External configuration and credentials, kept out of the container image.

The conceptual leap Kubernetes asks of you is *declarative*, not imperative, operations. You don't tell Kubernetes "start a container on host 7"; you tell it "5 copies of this should always be running" and let the control plane figure out *how*. That declarative model is what makes the system self-healing — when a pod crashes, the control plane notices reality has drifted from desired state and starts a replacement automatically.

The honest tradeoff: Kubernetes is *powerful* and *complex*. The learning curve is real, the failure modes are subtle, and a small team running a handful of services may find PaaS or FaaS a better fit than running a Kubernetes cluster themselves. Use Kubernetes when you have enough scale to amortize the operational overhead. Use a simpler runtime when you don't. The footgun is "we should use Kubernetes because everyone else does" — that has cost more startups their runway than almost any other technical decision.

## Cloud Migration: Moving the Building While the Tenants Are Inside

Most organizations don't get to start in the cloud. They start with twenty years of on-premises systems and have to figure out how to move them. **Cloud Migration** is the umbrella term for the discipline of moving existing workloads from on-premises (or one cloud) to cloud (or another cloud). It is the largest single category of IS project work in the 2020s, and it has produced its own well-developed methodology, including a now-canonical decision framework.

## The Six Rs of Migration

The **Six Rs of Migration** is a Gartner-and-AWS-popularized taxonomy of migration strategies. For each workload, you choose exactly one of six paths, and the right answer differs from one workload to the next:

1. **Rehost** ("Lift and Shift") — Move the workload to cloud infrastructure as-is, no code changes, no architecture changes. Same VM image, just running on a cloud VM. Fastest migration; smallest cloud benefit.
2. **Replatform** ("Lift, Tinker, and Shift") — Move with minor optimizations. Maybe swap the self-managed database for a managed cloud database, or upgrade the Java runtime. Modest effort, modest payoff.
3. **Repurchase** — Replace the workload with a SaaS equivalent. Retire your custom CRM, sign a Salesforce contract. Often the fastest *and* cheapest path when a viable SaaS exists.
4. **Refactor** (or *Re-architect*) — Rewrite the application to be cloud-native: microservices, serverless, managed databases, autoscaling. Most effort, biggest cloud payoff, longest timeline.
5. **Retire** — Turn the workload off entirely. The discovery phase of every migration always reveals systems that nobody uses anymore but everybody assumed *someone else* used.
6. **Retain** ("Revisit") — Leave the workload on-premises for now. Some workloads (mainframe, regulated, near-end-of-life, just-replaced) are not worth migrating in this round.

| R | What you do | Effort | Cloud benefit | Best fit |
|---|-------------|--------|---------------|----------|
| **Rehost** | Lift and shift, no changes | Low | Low | Tight deadline, simple apps, exit-the-data-center deadlines |
| **Replatform** | Lift with minor tuning | Low-medium | Medium | Apps that benefit from one or two managed services |
| **Repurchase** | Replace with SaaS | Medium | High | Workloads where a mature SaaS exists |
| **Refactor** | Rewrite cloud-native | High | Highest | Strategic apps with long futures |
| **Retire** | Shut it off | Trivial | N/A | Zombie systems |
| **Retain** | Leave on-prem | Zero | None this round | Not yet worth migrating |

#### Diagram: The Six Rs Decision Tree

<details markdown="1">
<summary>The Six Rs Decision Tree</summary>
Type: interactive-infographic
**sim-id:** six-rs-decision-tree<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network decision tree starting from a single root node "Workload to migrate". The first branching question is "Still used?" — a No branch leads to a "Retire" leaf node in slate-gray. The Yes branch leads to "SaaS equivalent available?" — Yes leads to "Repurchase" in mascot-magenta. The No branch leads to "Strategic, long-lived application?" — Yes leads to "Refactor" in mascot-emerald. No leads to "Cloud benefit worth minor effort?" — Yes leads to "Replatform" in coral, and No leads to "Migration deadline pressure?" — Yes leads to "Rehost / Lift and Shift" in amber, and No leads to "Retain / Revisit" in slate-gray.

To work around the vis-network horizontal-edge label rendering bug, edge labels use a slight y-offset (480 to 490) so labels render correctly on initial load. Edge labels are short ("Yes", "No"). Each leaf node contains the R name, the typical effort level, and an icon.

Color palette: decision nodes in deep teal, leaf nodes color-coded by effort (slate-gray for Retain/Retire, mascot-emerald for high-value paths, coral for medium, amber for quick-and-dirty). Edge arrows in dark teal.

Interactivity: clicking any node highlights the path from root to that node. Hovering each leaf shows (a) what the strategy means, (b) typical timeline, and (c) a real-world example. A "trace example" button lets students step through a worked example workload (e.g., "company's homegrown HR portal") to see which R the tree recommends and why.

Layout: hierarchical, top-to-bottom, full canvas width, height ~620px. Canvas resizes on window resize.

Learning objective (Bloom: Applying): Students can apply the Six Rs decision tree to an unfamiliar workload, choose the appropriate R, and defend the choice against the alternatives.

Implementation: vis-network, deployed at `/information-systems/sims/six-rs-decision-tree/`.
</details>

## Lift and Shift: The Most Tempting and Most Dangerous R

The most popular migration strategy is **Lift and Shift** — the same thing as *Rehost*, just with a name students remember. The appeal is obvious: you avoid the pain of rewriting, you avoid the risk of changing application behavior, and you can move quickly. Many organizations facing data-center exit deadlines have no other realistic option.

The footgun, predictably, is silent. Lift-and-shift moves the workload but not the architecture. The VM that was over-provisioned on-prem is over-provisioned in the cloud, except now you're paying for the over-provision *every hour, on the meter*. The application that was monolithic on-prem is monolithic in the cloud — it can't autoscale, can't take advantage of managed services, can't fail over gracefully. The result, distressingly often, is that *the cloud bill exceeds the prior on-prem cost* while delivering none of the cloud's advantages. This is a textbook footgun: silent (no error, just a higher bill), easy to trigger (it's the path of least resistance), and damage shows up months later when finance asks why moving to the cloud didn't save anything.

The structural fix is to plan lift-and-shift as a *first stage*, not a destination. Lift-and-shift gets you out of the data center; the *next* phase replatforms or refactors workload by workload to actually realize cloud benefits. Treating lift-and-shift as the end state is how organizations end up with the worst of both worlds — cloud bills and on-prem architecture.

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    Watch for the migration that "completed successfully" but somehow left the company with a bigger IT budget, the same architecture, and a data center still running because three workloads turned out to be too painful to move. This is the most common shape of failed cloud migration in the wild. The lesson is not "don't migrate" — the lesson is *publish the second-stage plan at the same time as the first*. A migration that doesn't have a stage-two backlog ready on day one will not have one on day three hundred.

## Vendor Lock-In: The Tax You Don't See

The deeper, longer-running tradeoff in cloud is **Vendor Lock-In** — the degree to which a workload becomes dependent on a particular provider's proprietary services and is therefore hard to move elsewhere. Every cloud has a spectrum of services, from "open standard, runs anywhere" (a Linux VM, a PostgreSQL database, a Kubernetes cluster) to "deeply proprietary, no equivalent" (AWS DynamoDB Streams, Azure Cosmos DB triggers, BigQuery's SQL extensions, Vertex AI pipelines).

The lock-in question is genuinely a tradeoff, not a verdict. Proprietary managed services are usually the *most productive* services on a cloud — they're why you went to the cloud in the first place. Avoiding them all in the name of portability often means writing yourself a worse version of what the cloud already provides. On the other hand, every proprietary service you adopt is a service you'd have to rewrite if you ever need to leave.

The pragmatic posture is *eyes-open lock-in*: you are allowed (and often wise) to use proprietary services for the parts of your stack that benefit most from them, *as long as* you understand the lock-in cost and have made a conscious decision rather than a default one. The footgun is *unintentional* lock-in — adopting proprietary services because they were the path of least resistance, never measuring how deep the dependency has become, and discovering five years later that exiting the cloud would take eighteen months and ten million dollars. Multi-cloud strategies push back on this by deliberately spreading workloads across providers, at the cost of significantly higher operational complexity. There is no free portability — there is only different positions on the lock-in/leverage curve.

## The Cloud Center of Excellence: Making the Whole Thing Repeatable

The final concept of the chapter is organizational, not technical. A **Cloud Center of Excellence** (CCoE) is a small, cross-functional team that takes responsibility for the *enterprise's* cloud practice — establishing standards, providing reference architectures, training staff, evaluating new services, governing cost and security, and helping individual application teams succeed. Most large enterprises with serious cloud adoption have a CCoE; most that are struggling with cloud adoption don't.

A typical CCoE has representation from cloud architecture, security, FinOps, networking, and application engineering. Its job is *not* to gate every cloud deployment (that would re-create the procurement-bottleneck cloud was supposed to eliminate), but to make the *good path* the *easy path* — through templates, paved roads, training, and shared tooling. A CCoE is the structural answer to a recurring problem in cloud adoption: in the absence of any central function, every team reinvents networking, security, identity, and cost management from scratch, badly, in inconsistent ways that make audit, security, and FinOps nearly impossible.

The systems-thinking framing: a CCoE is a *leverage point*. It doesn't deliver workloads itself; it changes the *rules and defaults* under which all the other teams deliver workloads. Donella Meadows would recognize this immediately as a high-leverage intervention — changing the system's structure rather than tuning a parameter. Organizations that try to "do cloud" without a CCoE typically end up with a sprawling, inconsistent estate that takes years to clean up. Organizations that establish a CCoE early end up with a consistent estate that gets *better* with each new workload.

## Putting It All Together

Cloud computing is the rentable, programmable, on-demand evolution of computing infrastructure — and it has reshaped IS more than any technology shift since the personal computer.

- **Cloud Computing** is the rentable, on-demand delivery of computing capability. The **NIST Cloud Definition** names the five characteristics (on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service) that distinguish real cloud from cloud-washing.
- The four **service models** — **IaaS**, **PaaS**, **SaaS**, **FaaS** — are arranged on a control-vs-responsibility spectrum. The four **deployment models** — **Public Cloud**, **Private Cloud**, **Hybrid Cloud**, **Multi-Cloud** — describe whose building the servers live in.
- The shift from **CapEx vs OpEx** changes the time horizon of decisions and surfaces costs that used to hide in depreciation. The **Cloud Cost Model** — pay for what you use, with egress as the trap — is what makes that visibility possible. **FinOps** is the discipline that turns visible spending into managed spending. **Reserved Instance** purchases trade commitment for predictable discounts.
- **Containers** package an application with its environment; **Docker** is the toolchain that made containers ubiquitous; **Kubernetes** is how you orchestrate thousands of them. Each layer commodifies the one below.
- **Cloud Migration** is the discipline of moving existing workloads. The **Six Rs of Migration** (Rehost, Replatform, Repurchase, Refactor, Retire, Retain) give you a vocabulary for choosing per workload. **Lift and Shift** is the easiest first move and the most dangerous final move.
- **Vendor Lock-In** is a tradeoff to manage consciously, not a verdict to avoid. The **Cloud Center of Excellence** is the organizational leverage point that makes good cloud practice the default rather than the exception.

A graduate of this chapter walking into their first cloud conversation should be able to ask: *Which service model fits this workload? Which deployment model fits the data sensitivity? What does the cost curve look like over three years, including egress? Which R applies if we move it? How much lock-in are we accepting, and is the leverage worth it? Who owns the FinOps function? Is there a CCoE we can lean on?* Those are CIO-grade questions. You can ask all of them after a single chapter.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just learned the working vocabulary of modern cloud — the NIST five, the four service models and four deployment models, the CapEx/OpEx pivot, the cloud cost model, FinOps, reserved instances, containers, Docker, Kubernetes, the Six Rs, lift-and-shift, vendor lock-in, and the Cloud Center of Excellence. Next time someone says "we should move to the cloud," you will hear *which workloads, which Rs, what's the egress profile, and who owns FinOps?* Next time a cloud bill arrives 23% higher than expected, you will recognize the autoscale-feedback-loop signature. Next time someone wants to reserve three years of m5 capacity, you will ask about the m6 roadmap. And next time a cloud migration "completes" without saving any money, you will know exactly which conversation didn't happen at the start. Onward to Chapter 13, where we take this rentable infrastructure and confront the question of how to keep it — and the data on it — secure.


## References

[See Annotated References](./references.md)
