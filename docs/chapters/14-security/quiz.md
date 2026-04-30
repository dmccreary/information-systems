# Quiz: Security of Information Assets

Test your understanding of how IS organizations protect the confidentiality, integrity, and availability of their data and systems.

---

#### 1. The CIA triad in information security stands for:

<div class="upper-alpha" markdown>
1. Confidentiality, Integrity, Availability
2. Cryptography, Identity, Audit
3. Compliance, Investigation, Authorization
4. Containment, Isolation, Authentication
</div>

??? question "Show Answer"
    The correct answer is **A**. The CIA triad — Confidentiality (only authorized parties can read), Integrity (data is not improperly altered), Availability (the system is usable when needed) — is the foundational framing for information security. Most security controls map directly to one of the three. The other lists pull in real security terms but are not the canonical triad.

    **Concept Tested:** CIA Triad

---

#### 2. The AAA framework refers to which three security functions?

<div class="upper-alpha" markdown>
1. Authentication, Authorization, Accounting
2. Audit, Availability, Access
3. Authentication, Anti-virus, Architecture
4. Asymmetric, Atomic, Aligned
</div>

??? question "Show Answer"
    The correct answer is **A**. AAA — Authentication (proving who you are), Authorization (deciding what you may do), Accounting (recording what you did) — is the canonical framework that underpins identity and access management systems. Each layer answers a different question and requires different controls.

    **Concept Tested:** AAA Framework

---

#### 3. Multifactor authentication strengthens authentication primarily by:

<div class="upper-alpha" markdown>
1. Encrypting the password on disk
2. Requiring two or more independent factors from the categories of "something you know," "something you have," and "something you are"
3. Increasing the maximum length of a password
4. Logging all authentication attempts to a SIEM
</div>

??? question "Show Answer"
    The correct answer is **B**. MFA combines factors from independent categories so that compromising one (a password phished) does not give an attacker complete access. The factor categories — knowledge, possession, inherence — are the structural reason MFA works. Encryption, password length, and logging are useful but address different risks.

    **Concept Tested:** Multifactor Authentication

---

#### 4. SAML and OAuth 2.0 are most commonly used for:

<div class="upper-alpha" markdown>
1. Encrypting data at rest in a database
2. Compressing network traffic
3. Federating authentication and delegated authorization across systems and identity providers
4. Replacing all firewalls
</div>

??? question "Show Answer"
    The correct answer is **C**. SAML (typically used for enterprise SSO) and OAuth 2.0 (typically for delegated authorization, often paired with OpenID Connect for authentication) enable identity to be asserted and authority to be delegated across system boundaries. They are not encryption, compression, or firewall replacements — they are the protocols that make modern federated identity work.

    **Concept Tested:** OAuth 2.0

---

#### 5. The Zero Trust architectural principle holds that:

<div class="upper-alpha" markdown>
1. The internal network can be trusted as long as the perimeter firewall is strong
2. No user or device should be trusted by default; every access request must be verified, regardless of network location
3. All employees must use the same password
4. Encryption is unnecessary if the network is private
</div>

??? question "Show Answer"
    The correct answer is **B**. Zero Trust replaces the old "trusted internal network" model with continuous verification — identity, device posture, and context are checked on every access, regardless of whether the request originates inside or outside the corporate network. The other options describe outdated or unsafe assumptions.

    **Concept Tested:** Zero Trust Architecture

---

#### 6. A bank stores customer records in a database. To protect data even if an attacker steals the disk, the bank should implement:

<div class="upper-alpha" markdown>
1. A faster network connection
2. Stricter password policies only
3. Removing all backups
4. Encryption at rest
</div>

??? question "Show Answer"
    The correct answer is **D**. Encryption at rest protects data on storage media so that an attacker who obtains the disk (or a backup) cannot read the data without the key. It is a foundational defensive control, complementary to encryption in transit. Network speed, password policies alone, and removing backups do not address the disk-theft scenario.

    **Concept Tested:** Encryption at Rest

---

#### 7. Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) differ primarily in that:

<div class="upper-alpha" markdown>
1. RBAC is for cloud only; ABAC is for on-premise only
2. RBAC grants permissions based on assigned roles; ABAC evaluates fine-grained attributes (user, resource, action, context) at decision time
3. RBAC requires no authentication; ABAC requires MFA
4. RBAC is older and ABAC is a brand name for the same thing
</div>

??? question "Show Answer"
    The correct answer is **B**. RBAC bundles permissions into roles assigned to users, simplifying administration. ABAC evaluates a richer set of attributes at runtime, enabling context-sensitive policies (location, time, device posture, data sensitivity). Many organizations layer ABAC on top of RBAC for sensitive resources. Neither is platform-specific or a synonym.

    **Concept Tested:** Attribute-Based Access Control

---

#### 8. The principle of least privilege says that:

<div class="upper-alpha" markdown>
1. Only the most senior employee should have any access
2. All users must be able to read all data
3. Administrators should always have unrestricted access
4. Users should have only the permissions necessary to perform their job, no more
</div>

??? question "Show Answer"
    The correct answer is **D**. Least privilege limits the blast radius of any compromised account by giving each user (and each service) only what is needed for the role. It is one of the most consequential single security principles and is operationalized through careful role design, time-bound elevation, and periodic access reviews. The other options invert or distort the principle.

    **Concept Tested:** Least Privilege

---

#### 9. A development team is designing a new payment service and uses STRIDE to systematically identify Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege threats. This activity is best characterized as:

<div class="upper-alpha" markdown>
1. Penetration testing
2. SIEM tuning
3. Threat modeling
4. Incident response
</div>

??? question "Show Answer"
    The correct answer is **C**. Threat modeling is the proactive, design-time activity of systematically identifying threats and the controls that mitigate them. STRIDE is a popular threat-model taxonomy from Microsoft. Penetration testing is reactive validation; SIEM tuning configures monitoring; incident response handles breaches after they occur. Threat modeling sits at the design phase.

    **Concept Tested:** Threat Modeling

---

#### 10. A SIEM (Security Information and Event Management) platform exists primarily to:

<div class="upper-alpha" markdown>
1. Patch operating systems automatically
2. Aggregate logs and security events from many sources, correlate them, and surface alerts to a Security Operations Center
3. Provide a backup of all corporate email
4. Replace the need for a firewall
</div>

??? question "Show Answer"
    The correct answer is **B**. A SIEM ingests logs from servers, applications, identity providers, firewalls, EDR agents, and cloud platforms; correlates events; and presents alerts and investigations to SOC analysts. Patching, email backup, and firewalling are unrelated functions, though a SIEM may receive events from each.

    **Concept Tested:** SIEM

---
