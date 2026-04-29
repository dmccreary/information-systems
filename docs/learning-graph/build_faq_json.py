#!/usr/bin/env python3
"""Build faq-chatbot-training.json from docs/faq.md.

Parses the FAQ markdown by category (## headers) and question (### headers)
and emits a structured JSON file for RAG / chatbot integration.
"""

import json
import re
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FAQ_PATH = ROOT / "faq.md"
OUT_PATH = ROOT / "learning-graph" / "faq-chatbot-training.json"

# Per-question metadata: (bloom_level, difficulty, concepts, keywords)
# Indexed by zero-based question position within its category.
META = {
    "Getting Started": [
        ("Understand", "easy", ["Information System", "ABET CAC Criteria"], ["course", "scope", "ABET", "AI"]),
        ("Remember", "easy", ["Information System"], ["audience", "students", "ABET", "prerequisites"]),
        ("Understand", "easy", ["ABET CAC Criteria"], ["learning outcomes", "Bloom", "skills"]),
        ("Remember", "easy", ["Information System"], ["prerequisites", "programming", "CS1"]),
        ("Remember", "easy", ["Information System"], ["organization", "chapters", "parts"]),
        ("Understand", "easy", ["Information System"], ["pace", "duration", "semester"]),
        ("Apply", "easy", ["Information System"], ["sequencing", "prerequisites", "navigation"]),
        ("Understand", "easy", ["Information System", "Knowledge Graph"], ["AI", "EKG", "ENS", "differentiator"]),
        ("Remember", "easy", ["Information System"], ["license", "open source", "GitHub"]),
        ("Remember", "easy", ["Information System"], ["mascot", "Iris", "admonition"]),
        ("Apply", "easy", ["Information System"], ["MicroSim", "interactive", "p5.js"]),
        ("Apply", "easy", ["Learning Graph"], ["learning graph", "viewer", "concepts"]),
        ("Understand", "easy", ["ABET CAC Criteria"], ["ABET", "accreditation", "criteria"]),
    ],
    "Core Concepts": [
        ("Remember", "easy", ["Information System"], ["definition", "system", "components"]),
        ("Understand", "easy", ["Data", "Information", "Knowledge"], ["DIKI", "data", "information", "knowledge"]),
        ("Remember", "easy", ["DIKW Hierarchy"], ["DIKI", "hierarchy", "insight"]),
        ("Understand", "easy", ["IT vs IS Distinction"], ["IT", "IS", "distinction"]),
        ("Understand", "medium", ["Sociotechnical System"], ["sociotechnical", "people", "process"]),
        ("Understand", "medium", ["Three-Tier Architecture"], ["three-tier", "presentation", "application", "data"]),
        ("Understand", "medium", ["OLTP", "OLAP"], ["OLTP", "OLAP", "transaction", "analytics"]),
        ("Apply", "medium", ["Normalization", "Third Normal Form"], ["normalization", "3NF", "redundancy"]),
        ("Remember", "medium", ["ACID Transactions"], ["ACID", "atomicity", "consistency", "isolation", "durability"]),
        ("Remember", "easy", ["CIA Triad"], ["CIA", "confidentiality", "integrity", "availability"]),
        ("Remember", "easy", ["AAA Framework"], ["AAA", "authentication", "authorization", "accounting"]),
        ("Remember", "medium", ["IaaS", "PaaS", "SaaS"], ["IaaS", "PaaS", "SaaS", "FaaS"]),
        ("Understand", "medium", ["Shared Responsibility Model"], ["shared responsibility", "cloud", "security"]),
        ("Remember", "medium", ["BPMN"], ["BPMN", "process", "swimlane"]),
        ("Remember", "easy", ["Systems Development Life Cycle"], ["SDLC", "phases", "lifecycle"]),
        ("Understand", "easy", ["Agile"], ["agile", "scrum", "iterative"]),
        ("Understand", "medium", ["ETL", "ELT"], ["ETL", "ELT", "pipeline", "warehouse"]),
        ("Understand", "medium", ["Data Warehouse"], ["data warehouse", "OLAP", "star schema"]),
        ("Understand", "medium", ["Data Lakehouse"], ["lakehouse", "Iceberg", "Delta", "Hudi"]),
        ("Understand", "medium", ["Master Data Management"], ["MDM", "master data", "canonical"]),
        ("Remember", "medium", ["ERP"], ["ERP", "SAP", "Oracle", "enterprise"]),
        ("Apply", "medium", ["Build vs Buy vs SaaS"], ["build", "buy", "SaaS", "decision"]),
        ("Remember", "medium", ["Knowledge Graph"], ["knowledge graph", "nodes", "edges"]),
        ("Remember", "medium", ["Enterprise Knowledge Graph"], ["EKG", "enterprise", "semantic"]),
        ("Understand", "hard", ["Enterprise Nervous System"], ["ENS", "event-driven", "real-time"]),
        ("Remember", "medium", ["Generative AI", "Large Language Model"], ["generative AI", "LLM"]),
        ("Understand", "medium", ["Retrieval Augmented Generation"], ["RAG", "retrieval", "grounding"]),
        ("Understand", "hard", ["GraphRAG"], ["GraphRAG", "graph", "multi-hop"]),
        ("Remember", "medium", ["NIST AI RMF"], ["NIST", "AI RMF", "Govern", "Map", "Measure", "Manage"]),
        ("Remember", "medium", ["EU AI Act"], ["EU AI Act", "risk tiers", "high risk"]),
    ],
    "Technical Detail Questions": [
        ("Remember", "easy", ["Primary Key"], ["primary key", "unique", "identifier"]),
        ("Remember", "easy", ["Foreign Key", "Referential Integrity"], ["foreign key", "referential integrity"]),
        ("Apply", "medium", ["SQL JOIN"], ["JOIN", "INNER", "LEFT", "OUTER"]),
        ("Understand", "medium", ["Star Schema"], ["star schema", "fact", "dimension"]),
        ("Understand", "hard", ["Transaction Isolation Level"], ["isolation level", "read committed", "serializable"]),
        ("Analyze", "medium", ["SQL", "NoSQL"], ["SQL", "NoSQL", "polyglot"]),
        ("Understand", "hard", ["Microservices"], ["microservices", "monolith", "API"]),
        ("Understand", "medium", ["API Gateway"], ["API gateway", "routing", "rate limiting"]),
        ("Understand", "medium", ["Container", "Virtual Machine"], ["container", "VM", "Docker", "Kubernetes"]),
        ("Understand", "medium", ["Zero Trust"], ["zero trust", "perimeter", "verify"]),
        ("Remember", "medium", ["STRIDE"], ["STRIDE", "threat model", "spoofing"]),
        ("Remember", "medium", ["GDPR"], ["GDPR", "EU", "personal data"]),
        ("Remember", "medium", ["HIPAA"], ["HIPAA", "PHI", "healthcare"]),
        ("Remember", "medium", ["SOX"], ["SOX", "Sarbanes-Oxley", "financial reporting"]),
        ("Remember", "easy", ["ITIL"], ["ITIL", "service management", "lifecycle"]),
        ("Analyze", "medium", ["Incident Management", "Problem Management"], ["incident", "problem", "ITIL"]),
        ("Remember", "easy", ["Service Level Agreement"], ["SLA", "SLO", "SLI", "uptime"]),
        ("Understand", "easy", ["BPMN", "Swimlane"], ["BPMN", "swimlane", "actor"]),
        ("Remember", "medium", ["Robotic Process Automation"], ["RPA", "automation", "legacy"]),
        ("Remember", "easy", ["Project Triangle"], ["project triangle", "scope", "time", "cost"]),
        ("Apply", "hard", ["Earned Value Management"], ["EVM", "SPI", "CPI", "variance"]),
        ("Remember", "easy", ["Scrum", "Sprint"], ["sprint", "scrum", "ceremony"]),
        ("Remember", "medium", ["OWASP LLM Top 10"], ["OWASP", "LLM", "Top 10"]),
        ("Understand", "hard", ["Prompt Injection"], ["prompt injection", "direct", "indirect"]),
        ("Remember", "medium", ["MITRE ATLAS"], ["MITRE", "ATLAS", "adversarial ML"]),
        ("Remember", "hard", ["Labeled Property Graph"], ["LPG", "property graph", "Neo4j"]),
        ("Remember", "medium", ["Cypher", "GQL"], ["Cypher", "GQL", "graph query"]),
        ("Understand", "hard", ["Event-Driven Architecture"], ["EDA", "events", "Kafka"]),
    ],
    "Common Challenge Questions": [
        ("Analyze", "medium", ["Normalization"], ["normalization", "anomaly", "rule"]),
        ("Evaluate", "hard", ["Denormalization"], ["denormalization", "tradeoff", "performance"]),
        ("Analyze", "medium", ["Data Warehouse", "Data Governance"], ["warehouse", "failure", "governance"]),
        ("Analyze", "medium", ["Data Lake", "Data Lakehouse"], ["lake", "swamp", "governance"]),
        ("Analyze", "medium", ["ERP"], ["ERP", "customization", "overrun"]),
        ("Understand", "easy", ["SQL"], ["SQL", "declarative", "join"]),
        ("Analyze", "hard", ["Retrieval Augmented Generation"], ["RAG", "hallucination", "retrieval"]),
        ("Analyze", "medium", ["Shadow AI"], ["shadow AI", "data leakage", "sanctioned"]),
        ("Evaluate", "hard", ["AI Productivity"], ["productivity", "metrics", "confounder"]),
        ("Analyze", "hard", ["Entity Resolution"], ["entity resolution", "matching", "identity"]),
        ("Apply", "medium", ["Requirements Elicitation"], ["requirements", "stakeholders", "vocabulary"]),
        ("Analyze", "medium", ["Scope Creep", "Change Control"], ["scope creep", "change control"]),
        ("Apply", "hard", ["SQL Performance"], ["SQL", "performance", "index", "EXPLAIN"]),
        ("Understand", "hard", ["GraphRAG"], ["GraphRAG", "multi-hop", "vector RAG"]),
        ("Analyze", "hard", ["AI in Help Desk"], ["help desk", "AI", "metrics"]),
    ],
    "Best Practice Questions": [
        ("Apply", "medium", ["SQL", "NoSQL", "Knowledge Graph"], ["polyglot", "selection", "workload"]),
        ("Apply", "medium", ["User Story"], ["user story", "INVEST", "acceptance"]),
        ("Apply", "hard", ["Retrieval Augmented Generation"], ["RAG", "scope", "refusal"]),
        ("Apply", "hard", ["OWASP LLM Top 10", "Threat Modeling"], ["threat model", "LLM", "OWASP"]),
        ("Create", "medium", ["AI Acceptable Use Policy"], ["AUP", "AI policy", "sanctioned"]),
        ("Evaluate", "medium", ["SaaS Vendor Evaluation"], ["vendor", "SaaS", "DPA"]),
        ("Apply", "medium", ["Cloud Migration"], ["cloud migration", "Six Rs", "rehost"]),
        ("Apply", "medium", ["Requirements Interview"], ["interview", "stakeholders", "user stories"]),
        ("Evaluate", "medium", ["Dashboard Design"], ["dashboard", "KPI", "decision"]),
        ("Apply", "hard", ["Incident Response", "NIST Incident Response"], ["incident", "containment", "NIST"]),
        ("Create", "medium", ["Incident Postmortem"], ["postmortem", "blameless", "Five Whys"]),
        ("Evaluate", "hard", ["AI Productivity"], ["AI", "coding assistant", "stop-loss"]),
        ("Evaluate", "hard", ["Enterprise Knowledge Graph"], ["EKG", "platform", "vendor lock-in"]),
        ("Evaluate", "medium", ["NIST CSF", "ISO 27001"], ["NIST CSF", "ISO 27001", "controls"]),
        ("Evaluate", "hard", ["Model Card", "System Card"], ["model card", "system card", "due diligence"]),
    ],
    "Advanced Topic Questions": [
        ("Analyze", "hard", ["GraphRAG", "Vector RAG"], ["GraphRAG", "multi-hop", "fidelity"]),
        ("Create", "hard", ["Enterprise Nervous System"], ["ENS", "retail", "event-driven"]),
        ("Evaluate", "hard", ["Data Lakehouse", "Enterprise Knowledge Graph"], ["lakehouse", "EKG", "selection"]),
        ("Analyze", "hard", ["Post-Quantum Cryptography"], ["PQC", "harvest-now", "ML-KEM"]),
        ("Evaluate", "hard", ["EU AI Act", "NIST AI RMF"], ["EU AI Act", "NIST AI RMF", "compliance"]),
        ("Create", "hard", ["Enterprise Knowledge Graph"], ["EKG", "executive", "business case"]),
        ("Analyze", "hard", ["AI Shared Responsibility"], ["shared responsibility", "model provider", "AI"]),
        ("Analyze", "hard", ["Agentic AI", "Excessive Agency"], ["agentic", "excessive agency", "tools"]),
        ("Evaluate", "hard", ["AI Law", "HIPAA", "ECOA"], ["regulated", "AI", "sector"]),
        ("Create", "hard", ["AI-Native Organization", "Enterprise Nervous System"], ["AI-native", "ENS", "vision"]),
    ],
}

CATEGORY_ORDER = [
    "Getting Started",
    "Core Concepts",
    "Technical Detail Questions",
    "Common Challenge Questions",
    "Best Practice Questions",
    "Advanced Topic Questions",
]

# Map heading-2 in markdown to canonical category name
HEADING_MAP = {
    "Getting Started Questions": "Getting Started",
    "Core Concepts": "Core Concepts",
    "Technical Detail Questions": "Technical Detail Questions",
    "Common Challenge Questions": "Common Challenge Questions",
    "Best Practice Questions": "Best Practice Questions",
    "Advanced Topic Questions": "Advanced Topic Questions",
}


def parse_faq(text: str):
    by_category = {c: [] for c in CATEGORY_ORDER}
    current_category = None
    current_q = None
    current_answer_lines = []

    def flush():
        nonlocal current_q, current_answer_lines
        if current_category and current_q:
            answer = "\n".join(current_answer_lines).strip()
            by_category[current_category].append((current_q, answer))
        current_q = None
        current_answer_lines = []

    for line in text.splitlines():
        m2 = re.match(r"^##\s+(.+?)\s*$", line)
        m3 = re.match(r"^###\s+(.+?)\s*$", line)
        if m2 and not line.startswith("###"):
            heading = m2.group(1).strip()
            if heading in HEADING_MAP:
                flush()
                current_category = HEADING_MAP[heading]
            else:
                # other H2s like "See Also" - end FAQ section
                flush()
                current_category = None
            continue
        if m3:
            flush()
            current_q = m3.group(1).strip()
            current_answer_lines = []
            continue
        if current_q is not None:
            current_answer_lines.append(line)
    flush()
    return by_category


def extract_links(answer: str):
    return re.findall(r"\(([^)]+\.md)\)", answer)


def has_example_marker(answer: str):
    text = answer.lower()
    return any(marker in text for marker in [
        "for example", "e.g.", "example", "such as", "for instance",
        '"', "—", "scenario"
    ])


def main():
    text = FAQ_PATH.read_text()
    parsed = parse_faq(text)

    questions = []
    qid = 1
    for cat in CATEGORY_ORDER:
        meta = META[cat]
        items = parsed[cat]
        if len(items) != len(meta):
            print(f"WARN: {cat} has {len(items)} questions but {len(meta)} metadata entries")
        for i, (q, a) in enumerate(items):
            m = meta[i] if i < len(meta) else ("Understand", "medium", [], [])
            bloom, difficulty, concepts, keywords = m
            links = extract_links(a)
            wc = len(a.split())
            questions.append({
                "id": f"faq-{qid:03d}",
                "category": cat,
                "question": q,
                "answer": a,
                "bloom_level": bloom,
                "difficulty": difficulty,
                "concepts": concepts,
                "keywords": keywords,
                "source_links": links,
                "has_example": has_example_marker(a),
                "word_count": wc,
            })
            qid += 1

    out = {
        "faq_version": "1.0",
        "generated_date": str(date.today()),
        "source_textbook": "Information Systems",
        "total_questions": len(questions),
        "questions": questions,
    }
    OUT_PATH.write_text(json.dumps(out, indent=2))
    print(f"Wrote {len(questions)} questions to {OUT_PATH}")


if __name__ == "__main__":
    main()
