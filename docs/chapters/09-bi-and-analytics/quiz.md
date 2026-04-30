# Quiz: Business Intelligence and Analytics

Test your understanding of how raw data becomes the dashboards and decisions that run organizations.

---

#### 1. Which type of analytics asks the question "What happened?"

<div class="upper-alpha" markdown>
1. Descriptive analytics
2. Diagnostic analytics
3. Predictive analytics
4. Prescriptive analytics
</div>

??? question "Show Answer"
    The correct answer is **A**. Descriptive analytics summarizes historical data to answer "what happened" — sales last quarter, top products, regional trends. Diagnostic analytics digs into "why did it happen." Predictive analytics asks "what will happen." Prescriptive analytics goes further to recommend "what should we do." The four levels typically build on each other in maturity.

    **Concept Tested:** Descriptive Analytics

---

#### 2. Predictive analytics is best characterized as:

<div class="upper-alpha" markdown>
1. Reporting on what already happened in the prior month
2. Investigating root causes of last year's revenue dip
3. Recommending the optimal action for a given decision
4. Using statistical models or machine learning to forecast what is likely to happen next
</div>

??? question "Show Answer"
    The correct answer is **D**. Predictive analytics uses statistical models or ML to forecast probable outcomes — customer churn likelihood, demand for next quarter, fraud risk on this transaction. Descriptive looks backward, diagnostic explains causes, prescriptive recommends action. Predictive sits in the middle, providing the forecast that downstream prescriptive systems often act on.

    **Concept Tested:** Predictive Analytics

---

#### 3. A Key Performance Indicator (KPI) is best described as:

<div class="upper-alpha" markdown>
1. Any number that appears on a dashboard
2. A measurable value tied to a strategic objective, with a target and a clear owner
3. A graph type used in Tableau
4. The maximum number of rows a query can return
</div>

??? question "Show Answer"
    The correct answer is **B**. A KPI is more than just a metric — it is a metric explicitly tied to a strategic objective, with a target value, a defined cadence, and an owner accountable for moving it. Throwing every available metric on a dashboard produces noise; choosing a few real KPIs produces decisions. The discipline of KPI definition is one of the most underrated parts of analytics work.

    **Concept Tested:** Key Performance Indicator

---

#### 4. An OLAP cube supports operations like drill-down, roll-up, and slice-and-dice. What is the primary purpose of these operations?

<div class="upper-alpha" markdown>
1. To compress raw data on disk
2. To replace the relational database engine
3. To explore multi-dimensional data interactively along multiple dimensions and levels of aggregation
4. To encrypt sensitive columns
</div>

??? question "Show Answer"
    The correct answer is **C**. OLAP cubes pre-aggregate data along dimensions (time, geography, product, customer) so that analysts can interactively drill down (move from year to quarter to month), roll up (the reverse), and slice (filter on one dimension) at near-instant speed. The whole point is exploratory multi-dimensional analysis. Cubes are not about compression, replacement, or encryption.

    **Concept Tested:** OLAP Cube

---

#### 5. Self-service BI emerged largely to address which problem?

<div class="upper-alpha" markdown>
1. Data warehouses being too small
2. The bottleneck created when every report request had to queue with a central IT or BI team
3. The need for stronger encryption
4. The shortage of relational databases
</div>

??? question "Show Answer"
    The correct answer is **B**. Self-service BI tools (Power BI, Tableau, Looker, Qlik) let business users build their own dashboards and analyses against governed datasets, reducing the bottleneck of every report waiting in a central team's queue. The tradeoff is governance — without curated datasets and clear definitions, self-service can produce competing versions of "revenue" within a single company.

    **Concept Tested:** Self-Service BI

---

#### 6. A team builds a dashboard with 47 charts on a single page in vivid rainbow colors and rotating 3D pie charts. According to dashboard-design best practice, what is most likely wrong?

<div class="upper-alpha" markdown>
1. The dashboard violates clarity and prioritization — too many charts dilute attention, decorative effects obscure data, and no KPI is visibly more important than another
2. The dashboard is too minimal
3. The dashboard cannot be exported to PDF
4. The dashboard uses too few colors
</div>

??? question "Show Answer"
    The correct answer is **A**. Good dashboards prioritize a few KPIs, use color and chart selection purposefully, avoid 3D effects (which distort perception), and answer specific questions. A 47-chart rainbow page with 3D pies fails these tests — it produces decoration rather than decisions. The other options misread the problem.

    **Concept Tested:** Dashboard Design

---

#### 7. A team needs to compare the proportion of customers in five segments. Which chart type is best suited?

<div class="upper-alpha" markdown>
1. A 3D rotating pie chart with shadows
2. A simple bar chart, optionally a bar chart with proportion labels
3. A geographic heat map
4. A stacked area chart over time
</div>

??? question "Show Answer"
    The correct answer is **B**. For comparing proportions across a small set of categories, a simple bar chart is more accurate than a pie chart because humans read length more precisely than angle. 3D effects degrade further. Heat maps suit geography; stacked area charts suit time series with composition. Chart selection is a real skill, and the default should usually be "boring and accurate" over "fancy and confusing."

    **Concept Tested:** Chart Selection

---

#### 8. A balanced scorecard typically organizes KPIs around which four perspectives?

<div class="upper-alpha" markdown>
1. Cloud, on-premise, hybrid, edge
2. Hardware, software, network, data
3. Financial, customer, internal process, learning and growth
4. Sales, marketing, engineering, support
</div>

??? question "Show Answer"
    The correct answer is **C**. Kaplan and Norton's balanced scorecard organizes performance measurement across four perspectives: financial, customer, internal process, and learning and growth. The point is to balance short-term financials against the leading indicators (customer satisfaction, process efficiency, capability building) that produce long-term financial results. The other groupings are unrelated to the framework.

    **Concept Tested:** Balanced Scorecard

---

#### 9. Embedded analytics refers to:

<div class="upper-alpha" markdown>
1. A specific deprecated feature of Excel
2. Analytics that run only on embedded IoT devices
3. A type of relational database engine
4. Analytics dashboards integrated directly into operational applications, so users get insight in the context of doing their work
</div>

??? question "Show Answer"
    The correct answer is **D**. Embedded analytics surfaces dashboards and insights inside the applications people already use — a sales rep sees deal-stage analytics inside the CRM, a clinician sees outcome trends inside the EHR. Embedding eliminates the context-switch tax of leaving the work tool to look something up, and is one of the highest-leverage ways to operationalize analytics.

    **Concept Tested:** Embedded Analytics

---

#### 10. An executive looks at a dashboard with 30 metrics, sees that revenue is down 4%, and asks "why?" The dashboard team can show the number but cannot explain the drop. Analyzing this gap, what is most likely missing from the analytics practice?

<div class="upper-alpha" markdown>
1. A faster relational database
2. Diagnostic analytics — the layer that investigates causes by drilling into related dimensions and segments
3. More 3D charts
4. A new pivot table
</div>

??? question "Show Answer"
    The correct answer is **B**. Descriptive analytics tells you *what* happened (revenue is down). Diagnostic analytics tells you *why* (which segment, region, product, channel, or campaign drove the change). Without diagnostic capability, dashboards generate questions rather than answers. The chapter's analytics-maturity ladder — descriptive, diagnostic, predictive, prescriptive — captures exactly this progression.

    **Concept Tested:** Diagnostic Analytics

---
