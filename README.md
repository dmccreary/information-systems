# Information Systems

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/information-systems/)
[![GitHub](https://img.shields.io/badge/GitHub-dmccreary%2Finformation--systems-blue?logo=github)](https://github.com/dmccreary/information-systems)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Uses Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5.js&logoColor=white)](https://p5js.org/)
[![vis-network](https://img.shields.io/badge/vis--network-22A7F0)](https://visjs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive textbook at: [https://dmccreary.github.io/information-systems/](https://dmccreary.github.io/information-systems/)

## Overview

This is an interactive, AI-generated **intelligent textbook on Information Systems**, designed for college undergraduate students in Information Systems, Information Technology, Business Analytics, Computer Information Systems, and related computing-and-business disciplines. The course is aligned to the **ABET Computing Accreditation Commission (CAC) Information Systems program criteria** and is suitable for sophomore- or junior-level coursework.

The textbook covers the foundations of information systems — application development, data management, IS project management, networks and telecommunications for business, security of information assets, and the role of IS in organizations. Built with MkDocs and the Material theme, it incorporates a learning graph of concept dependencies, interactive MicroSims (p5.js and vis-network), and AI-assisted content generation curated through [Claude Skills](https://github.com/dmccreary/claude-skills).

Learning outcomes follow Bloom's Taxonomy (2001 revision), and the concept dependency graph ensures proper prerequisite sequencing across the entire textbook. This makes the project a Level 2+ intelligent textbook with interactive elements that help students connect business context to technical foundations.

## Site Status and Metrics

| Metric | Count |
|--------|-------|
| Concepts in Learning Graph | 580 |
| Concept Dependencies (CSV rows) | 580 |
| Taxonomy Categories | Defined in `taxonomy-names.json` |
| Chapters | 0 (chapter generation pending) |
| Markdown Files | 12 |
| Total Words | ~14,600 |
| MicroSims | 1 (learning graph viewer) |
| Images | 4 |
| Quality Score (course description) | 96 |

**Completion Status:** Foundations complete (course description, learning graph, taxonomy, graph viewer MicroSim). Chapter content generation is the next phase.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dmccreary/information-systems.git
cd information-systems
```

### Install Dependencies

This project uses MkDocs with the Material theme:

```bash
pip install mkdocs mkdocs-material
```

### Build and Serve Locally

Serve locally with live reload:

```bash
mkdocs serve
```

Open your browser to [http://127.0.0.1:8000/information-systems/](http://127.0.0.1:8000/information-systems/).

Build the static site:

```bash
mkdocs build
```

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This builds the site and pushes it to the `gh-pages` branch.

### Working with the Learning Graph

The learning graph lives in `docs/learning-graph/`. Useful scripts:

```bash
cd docs/learning-graph
python csv-to-json.py            # Convert CSV to vis-network JSON
python validate-learning-graph.py # Validate dependency structure
python taxonomy-distribution.py  # Generate taxonomy report
python analyze-graph.py          # Graph-level analysis
```

The graph viewer MicroSim under `docs/sims/graph-viewer/` renders the concept dependency network interactively.

## Repository Structure

```
information-systems/
├── docs/
│   ├── chapters/                  # Chapter content (in progress)
│   ├── learning-graph/            # 580-concept dependency graph
│   │   ├── learning-graph.csv     # Concepts + dependencies + taxonomy IDs
│   │   ├── learning-graph.json    # vis-network format
│   │   ├── concept-list.md        # Human-readable concept list
│   │   ├── concept-taxonomy.md    # Concept-to-taxonomy mapping
│   │   ├── taxonomy-names.json    # Taxonomy category definitions
│   │   ├── quality-metrics.md     # Graph quality analysis
│   │   ├── *.py                   # Validation/analysis scripts
│   │   └── learning-graph-schema.json
│   ├── sims/
│   │   └── graph-viewer/          # Interactive concept-graph MicroSim
│   ├── prompts/                   # AI generation prompts used to build content
│   ├── img/                       # Images, logo, favicon
│   ├── css/                       # Custom theme styling
│   ├── course-description.md      # ABET CAC-aligned course description
│   ├── contact.md
│   └── license.md
├── logs/                          # Generation logs
├── mkdocs.yml                     # MkDocs configuration
└── README.md                      # This file
```

## Reporting Issues

Found a bug, typo, or have a suggestion? Please open an issue:

[GitHub Issues](https://github.com/dmccreary/information-systems/issues)

When reporting issues, please include:

- A clear description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots (if applicable)
- Browser/environment details (for MicroSims)

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**

- Share — copy and redistribute the material
- Adapt — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — Give appropriate credit with a link to the original
- **NonCommercial** — No commercial use without permission
- **ShareAlike** — Distribute contributions under the same license

See [docs/license.md](docs/license.md) for full details.

## Acknowledgements

This project stands on the shoulders of the open source community:

- **[MkDocs](https://www.mkdocs.org/)** — Static site generator for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** — Beautiful, responsive theme
- **[p5.js](https://p5js.org/)** — Creative coding library for interactive MicroSims
- **[vis-network](https://visjs.org/)** — Network visualization library powering the learning graph viewer
- **[Python](https://www.python.org/)** — Learning graph validation and analysis scripts
- **[Claude AI](https://claude.ai)** by Anthropic — AI-assisted content generation
- **[Claude Skills](https://github.com/dmccreary/claude-skills)** — Reusable skills for textbook generation
- **[GitHub Pages](https://pages.github.com/)** — Free hosting for the published site

The course design follows guidance from the **ABET Computing Accreditation Commission** Information Systems program criteria and **Bloom's Taxonomy (2001 revision)**.

## Contact

**Dan McCreary**

- LinkedIn: [linkedin.com/in/danmccreary](https://www.linkedin.com/in/danmccreary/)
- GitHub: [@dmccreary](https://github.com/dmccreary)

Questions, suggestions, or collaboration opportunities? Connect on LinkedIn or open an issue on GitHub.
