---
title: 'Security of Information Assets'
description: How IS organizations protect the confidentiality, integrity, and availability of their data and systems — from CIA and identity management to encryption, governance frameworks, threat modeling, and incident response.
generated_by: claude skill chapter-content-generator
date: 2026-04-28 22:21:39
version: 0.08
---

# Security of Information Assets

## Summary

Covers the CIA triad, identity and access management, AAA, encryption in transit and at rest, security governance (NIST CSF, ISO 27001, CIS Controls), threat modeling, and incident response.

**Role in the course:** Build a working security foundation that maps to the ABET CAC criterion on security of information assets — and that the AI-Security chapter will later extend.

## Concepts Covered

This chapter covers the following 37 concepts from the learning graph:

1. CIA Triad
2. Confidentiality
3. Integrity
4. Availability
5. AAA Framework
6. Authentication
7. Authorization
8. Multifactor Authentication
9. Single Sign-On
10. Identity Provider
11. SAML
12. OAuth 2.0
13. OpenID Connect
14. Role-Based Access Control
15. Attribute-Based Access Control
16. Least Privilege
17. Zero Trust Architecture
18. Encryption at Rest
19. Encryption in Transit
20. TLS Protocol
21. Public Key Infrastructure
22. Symmetric Encryption
23. Asymmetric Encryption
24. Key Management
25. Hashing
26. Digital Signature
27. NIST CSF
28. ISO 27001
29. CIS Controls
30. Threat Modeling
31. STRIDE Method
32. Vulnerability Management
33. Penetration Testing
34. SIEM
35. Security Operations Center
36. Incident Response
37. Audit Trail

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Information Systems](../01-foundations/index.md)
- [Chapter 11: Networks and Telecommunications for Business](../11-networks/index.md)

---

!!! mascot-welcome "Welcome back"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Iris the hummingbird waves hello">
    Welcome to Chapter 14, where we get to talk about the most under-loved, over-blamed, and quietly career-defining topic in all of information systems: *security*. The cliché is that security is what stops users from getting work done. The reality is that security is what allows the organization to *trust* the work that gets done — and trust is the load-bearing wall under every information system you will ever build. By the end of this chapter you will speak the working language of CIA, AAA, MFA, SSO, SAML, OAuth, OIDC, RBAC, ABAC, TLS, PKI, NIST CSF, STRIDE, SIEM, SOC, and a few other acronyms that sound like Cold War radio chatter, and you will know which ones to reach for in which situations. Security is not the topic that ruins your job; it is the topic that, done well, makes you the person the rest of the org calls when something *actually matters*. Let's collect the superpower.

## Why Security, and Why It Is Not Optional

Every information system is, eventually, an *attractive target*. The data is valuable to somebody. The compute is valuable to somebody. The reputation of the company is valuable to somebody. If the system is connected to a network — and in 2026 essentially everything is — the entire planet's worth of attackers, automated scanners, opportunistic script kiddies, organized criminal groups, and (depending on your sector) nation-state actors can probe it twenty-four hours a day. The question is never "will somebody try?" but "will the attempt succeed, and how quickly will we notice?"

That sounds grim, but the field has spent forty years assembling a remarkably coherent toolkit for managing the risk. Security is not a single technology or a single product; it is a *discipline* of layered defenses, governed by frameworks, instrumented by tools, and operated by humans who follow well-understood playbooks. The good news for the IS student is that the toolkit is *learnable* — you do not need to become a cryptographer or a malware reverse-engineer to be the person in the room who knows what questions to ask. You need a working vocabulary and a systems-thinking lens. This chapter gives you both.

## The CIA Triad: The Three Things You Are Protecting

The foundational mental model of all information security is the **CIA Triad** — three properties of information assets that security exists to preserve. (No, not the agency. The acronym predates the agency's modern visibility, and security people are stubborn.) Every security control you ever evaluate, every tradeoff you ever make, every framework you ever adopt is, ultimately, in service of one or more of these three:

**Confidentiality** is the property that information is disclosed only to those authorized to see it. A patient's medical record should be readable by their doctors and themselves, not by their neighbors, not by random employees of the hospital, and certainly not by a tweet. Confidentiality controls include encryption, access control, classification schemes, and the boring-but-vital discipline of not putting credentials in screenshots posted to Slack.

**Integrity** is the property that information is accurate and has not been altered, accidentally or maliciously, except by parties authorized to alter it. The bank balance you see should be the bank balance the bank sees. The patient's allergy list should not be silently truncated by a database migration. Integrity controls include checksums, hashing, digital signatures, version control, audit trails, and database constraints.

**Availability** is the property that information and the systems serving it are accessible to authorized users when they need them. A medical record that is perfectly confidential and perfectly intact but unreachable at 3 AM during a code blue is a failure. Availability controls include redundancy, backups, capacity planning, DDoS mitigation, and the entire SRE discipline you met in Chapter 7.

The pedagogical power of the CIA triad is that the three properties are *in tension*. The most confidential system is the one that nobody can read — which is also the least available. The most available system is the one with no access controls — which has no confidentiality. The most strictly integrity-protected system is the one nobody can write to — which is not very useful. Every security design is a balance of the three, weighted by what the business actually cares about.

| Property         | Definition                                    | Common threats                              | Common controls                                |
|------------------|-----------------------------------------------|---------------------------------------------|------------------------------------------------|
| Confidentiality  | Only authorized parties can read              | Data theft, eavesdropping, insider leaks    | Encryption, access control, classification     |
| Integrity        | Data is accurate and unmodified               | Tampering, malware, accidental corruption   | Hashing, signatures, audit logs, constraints   |
| Availability     | Authorized users can access when needed       | DDoS, ransomware, hardware failure, outage  | Redundancy, backup, capacity planning, DR      |

## AAA: The Framework Under Every Login

Once you know what you are protecting, the next question is *who is allowed to do what, and how do we know*. That question is governed by the **AAA Framework** — three steps that every secure interaction with an information system must perform, in order. The three As are:

**Authentication** is the process of verifying *who you are*. You make a claim of identity ("I am dan@example.com") and present some evidence to back it up (a password, a fingerprint, a hardware token, a code from your phone). The system verifies the evidence against what it knows about that identity and either accepts the claim or rejects it.

**Authorization** is the process of determining *what you are allowed to do*. Once the system knows who you are, it consults a policy — a set of rules, roles, attributes, or access control lists — to decide which actions and resources you can access. Authentication answers "who"; authorization answers "what."

The third A, often called **Accounting** (or Auditing), is the process of *recording what you did*. Every meaningful action — log in, log out, view record, modify record, change permission — is written to a log so that, after the fact, the organization can reconstruct who did what and when. We will return to accounting at the end of the chapter under the heading **audit trail**, but the principle is established at the AAA layer: nothing that matters happens without leaving a trace.

The order matters. Skipping authentication and going straight to authorization is the classic *insecure direct object reference* footgun: the URL contains the record ID, and the system happily serves it to whoever knows the URL. Skipping accounting is how the organization discovers, six months after a breach, that it has no idea what the attacker actually did.

## Multifactor Authentication: More Than One Way to Prove You

A password is one piece of evidence. **Multifactor Authentication** (MFA) requires *two or more* pieces of evidence drawn from *different categories*, on the theory that an attacker who can steal your password is much less likely to have also stolen your phone, your fingerprint, and your physical security key. The three classical authentication factors are:

- **Something you know** — a password, a PIN, the answer to a security question.
- **Something you have** — a phone receiving a push notification, a hardware security key (YubiKey, Titan), a smart card, an authenticator app generating time-based codes (TOTP).
- **Something you are** — a biometric: fingerprint, face scan, iris, voice.

A fourth factor, *somewhere you are* (geolocation, network context), is increasingly used as a *risk signal* rather than a hard authentication factor. The combination of a password (know) plus a TOTP code (have) is the bread-and-butter MFA configuration; password plus hardware key is the gold standard; password plus SMS code is the controversial economy class — better than nothing, but vulnerable to SIM-swap attacks and discouraged for high-value accounts.

MFA is the single highest-leverage security control most organizations can deploy. Microsoft has reported that enabling MFA blocks over 99% of automated account-takeover attempts. The catch — and there is always a catch — is **MFA fatigue**, the systems-thinking unintended consequence of pushing too many MFA prompts to users. After the tenth push of the day, users start tapping "approve" on autopilot, including on the push that happens to be coming from an attacker who just stole their password. The structural fix is *number matching* (the user must type a number shown on the login screen into their phone, defeating mindless approvals), risk-based prompting (only prompting on unusual sessions), and phishing-resistant factors like FIDO2 hardware keys that cannot be tricked by a fake login page.

## Single Sign-On and the Identity Provider

Asking a user to authenticate to twenty different applications, each with its own password rules and its own MFA, is a recipe for password reuse, sticky notes on monitors, and frustrated calls to the help desk. The structural fix is **Single Sign-On** (SSO): the user authenticates *once* to a central authority, and that authority vouches for them to every application they subsequently access. The user types one password (and one MFA factor) at the start of the day; for the next eight hours, the applications they open trust the central vouch and let them in without further prompting.

The central authority that does the vouching is an **Identity Provider** (IdP). Examples you have already used: Okta, Microsoft Entra ID (formerly Azure AD), Google Workspace, Ping Identity, Auth0, AWS IAM Identity Center. The applications that trust the IdP are called *service providers* or *relying parties*. The IdP holds the user's credentials, performs the authentication (including MFA), and issues a *token* that the relying parties can validate.

Centralizing identity in an IdP is one of the highest-leverage moves in enterprise security. When an employee leaves, you disable one account and they instantly lose access to *everything*. When you need to enforce a new MFA policy, you change it in one place. When an auditor asks "who can access the customer database?" you query one system. The IdP is a *systems-thinking leverage point* in Donella Meadows' sense — change the one rule at the IdP and the behavior of dozens of downstream systems changes accordingly.

## SAML, OAuth 2.0, OpenID Connect: The Three Protocols You Must Know

How does the IdP actually vouch for the user to the relying party? Through one of three standardized protocols, each of which solves a slightly different problem and which, frustratingly, are often confused for each other.

**SAML** (Security Assertion Markup Language) is the older XML-based protocol, dating from the early 2000s and still dominant in enterprise B2B SSO. When you click "Sign in with Okta" on your HR portal, what typically happens under the hood is a SAML *assertion* — a digitally signed XML blob — being passed from Okta to the HR portal, asserting "this is dan@example.com, who authenticated successfully at 9:02 AM, and is a member of these groups." The HR portal validates the signature and lets you in.

**OAuth 2.0** is a newer protocol whose original purpose was *delegated authorization*, not authentication. The classic OAuth scenario is: an app wants to read your Google Calendar without having your Google password. You authenticate to Google, Google asks "do you allow ThirdPartyApp to read your calendar?", you say yes, and Google issues the app an *access token* that lets it call the calendar API on your behalf. OAuth is about *granting access to APIs*, not about logging users into applications — but because the OAuth flow naturally produces a token, people inevitably started using it for login too, often badly.

**OpenID Connect** (OIDC) is the protocol that fixes the "OAuth misused for login" problem by formally extending OAuth 2.0 with an *identity layer*. OIDC adds an *ID token* (a JSON Web Token, or JWT) that contains verified claims about the user — sub (subject ID), email, name, etc. — alongside the OAuth access token. Modern consumer SSO ("Sign in with Google", "Sign in with Apple") is OIDC. Modern API authorization is OAuth 2.0. Enterprise B2B SSO is still often SAML, although OIDC is gradually displacing it in greenfield work.

| Protocol           | Format                | Primary purpose                          | Typical use today                                  |
|--------------------|-----------------------|------------------------------------------|----------------------------------------------------|
| SAML 2.0           | XML assertions        | Enterprise SSO (authentication)          | B2B SSO, legacy enterprise apps                    |
| OAuth 2.0          | JSON tokens           | Delegated API authorization              | Granting third-party apps access to your data      |
| OpenID Connect     | JWT ID tokens         | Authentication (built on OAuth 2.0)      | Modern consumer SSO, "Sign in with X" buttons      |

!!! mascot-tip "Iris's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Iris shares a tip">
    The single most common interview-tripping confusion in this space is treating OAuth 2.0 as a login protocol. OAuth answers "can this app *call this API* on the user's behalf?" — it does not, by itself, tell the calling app *who the user is*. OIDC is the layer you add on top to get a verified identity. If you ever find yourself wiring OAuth into a login flow without OIDC's ID token, you are inventing the bug that OIDC was created to fix. Use OIDC for login, use OAuth for API access, and use SAML when the enterprise IdP your customer is bringing only speaks SAML — which is, surprisingly often, the answer.

## Access Control: RBAC, ABAC, and Least Privilege

Once a user is authenticated, the system must decide *what they can do*. The two dominant access-control models in enterprise IS are RBAC and ABAC.

**Role-Based Access Control** (RBAC) groups permissions into *roles* and assigns roles to users. A "Billing Clerk" role has permission to view invoices, create payments under $5,000, and run weekly reports. A "Billing Manager" role has all the clerk permissions plus the ability to approve payments above $5,000 and manage the user list. Users get one or more roles, and their effective permissions are the union of their role permissions. RBAC is the workhorse of enterprise security — easy to reason about, easy to audit, easy to explain in a meeting. Its weakness is *role explosion*: complex orgs end up with hundreds of fine-grained roles, which becomes its own administrative burden.

**Attribute-Based Access Control** (ABAC) makes access decisions based on *attributes* of the user, the resource, and the environment, evaluated against a policy. Instead of "users with the Manager role can edit invoices," ABAC says "users whose department equals the invoice's owning department, whose clearance level is at least the invoice's classification level, and who are accessing from a corporate network during business hours, can edit the invoice." ABAC is far more flexible than RBAC and handles cross-cutting concerns (region, time, sensitivity, project) gracefully — at the cost of much more complex policy authoring and harder reasoning about who can do what.

Underlying both models is the **Least Privilege** principle: every user, service, and process should have the *minimum* permissions necessary to do its job, and *no more*. Least privilege is the security equivalent of "only give the dog the toy you don't mind it shredding." A bookkeeper does not need root on the database server. A nightly backup script does not need write permission on production data. A summer intern does not need access to the executive payroll table. Every excess permission is a potential blast radius if the corresponding account is compromised.

A practical least-privilege checklist worth memorizing:

- **Deny by default.** New users and services get *no* permissions until permissions are explicitly granted.
- **Grant by role, not by exception.** One-off permission grants accumulate and never get cleaned up.
- **Time-bound elevated access.** When a developer needs prod access for a debugging session, grant it for two hours, not forever.
- **Review quarterly.** Run an access-review cycle where managers re-confirm or revoke each report's permissions.
- **Automate offboarding.** The day someone leaves, every permission should evaporate — through the IdP, automatically.
- **Separate duties.** Whoever creates a payment should not be the one approving it. Whoever writes code should not be the one deploying it to prod with no review.

| Dimension                | RBAC                                    | ABAC                                            |
|--------------------------|-----------------------------------------|-------------------------------------------------|
| Decision basis           | Role membership                         | Attributes of user, resource, environment       |
| Policy form              | "Role X can do Y"                       | "If conditions A,B,C then allow action Y"       |
| Strengths                | Simple, auditable, easy to explain      | Flexible, fine-grained, handles cross-cutting   |
| Weaknesses               | Role explosion in complex orgs          | Hard to author, hard to debug, harder to audit  |
| Fits best                | Stable orgs with clear job functions    | Dynamic environments, regulated, multi-tenant   |

## Zero Trust: The Paradigm Shift

For decades, enterprise security followed the *castle and moat* model: build a strong perimeter (firewall, VPN), and trust everything inside. The model assumed that being on the corporate network meant you were trustworthy. The cloud era, the remote-work era, the BYOD era, and the supply-chain-attack era all destroyed that assumption. The fix is **Zero Trust Architecture**: a security model that *never* trusts a request implicitly, regardless of where it comes from, and *always* verifies it on the basis of identity, device posture, request context, and explicit policy.

The slogan is "never trust, always verify." Concretely, zero trust means: every request to every internal service is authenticated and authorized as if it came from the open internet; lateral movement inside the network confers no privilege; the device making the request must prove it is healthy (patched, encrypted, managed); and access decisions consider context (user, device, location, time, risk score) rather than network position alone.

Zero trust is a Donella Meadows-style *paradigm shift* — it changes the *goal* of the security architecture (from "keep attackers outside the perimeter" to "assume the attacker is already inside and contain them"). Because it is a paradigm shift, it cannot be bought as a single product; it is a multi-year transformation that touches identity, network, endpoint, and application architecture. The reward is enormous: a properly implemented zero-trust environment makes a stolen VPN credential nearly useless, a compromised laptop nearly contained, and a supply-chain attack nearly survivable.

#### Diagram: Zero Trust Architecture vs Castle-and-Moat

<details markdown="1">
<summary>Zero Trust Architecture vs Castle-and-Moat</summary>
Type: interactive-infographic
**sim-id:** zero-trust-vs-castle-moat<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network side-by-side architectural comparison. Left panel (Castle-and-Moat): a thick perimeter firewall surrounds a flat internal network containing app servers, databases, and file shares; once a user/device crosses the perimeter via VPN, they have broad access to everything inside. Right panel (Zero Trust): no implicit perimeter; every user, device, and service connects through a *policy enforcement point* that consults an identity provider, a device-posture service, and a policy engine on every request; each app/db is a separately protected resource, and a compromised laptop or stolen credential can only reach exactly what the policy currently permits.

Color palette: castle perimeter in slate-gray with a stone-wall texture, internal network in soft-blue, zero-trust policy engines in mascot-emerald, identity provider in mascot-magenta, denied paths in muted red. An animated "attacker" token can be dropped into either panel; in the castle panel it spreads laterally to multiple resources; in the zero-trust panel it gets stopped at the first policy enforcement point past the breached endpoint.

Interactivity: hover any node for a definition; toggle the "compromised credential" simulation to watch the difference in blast radius; toggle a "device unhealthy" condition to see the zero-trust policy engine refuse access mid-session. A side panel quantifies blast radius (number of reachable resources) for each scenario.

Layout: side-by-side panels, full canvas width, height ~580px. Sequence flows use slight y-offsets to work around the vis-network horizontal-edge-label rendering bug.

Learning objective (Bloom: Analyzing): Students can articulate the structural difference between perimeter-based and zero-trust security, and predict the blast radius of a credential compromise under each model.

Implementation: vis-network, deployed at `/information-systems/sims/zero-trust-vs-castle-moat/`.
</details>

## Encryption: The Math That Keeps Secrets Secret

Authentication and access control answer "who can touch the data." Encryption answers "what does the data look like to anyone who *does* touch it without permission." Encryption is the mathematical transformation of plaintext into ciphertext using a *key*, such that anyone without the key sees only meaningless bytes. Modern IS protects data in two states.

**Encryption at Rest** is encryption applied to data while it is stored — on disks, in databases, in object stores, in backup tapes. The threat model is the lost laptop, the stolen backup tape, the disposed-of hard drive that ends up on eBay, and the cloud-storage misconfiguration that makes a bucket world-readable. Disk-level encryption (BitLocker, FileVault), database-level transparent data encryption (TDE), and cloud storage encryption (S3 server-side encryption, Azure Storage Service Encryption) all fall into this category.

**Encryption in Transit** is encryption applied to data while it is moving across a network — between a browser and a web server, between two microservices, between a mobile app and an API. The threat model is the eavesdropper on the public Wi-Fi, the man-in-the-middle on the ISP's network, and the compromised router on the path. The dominant protocol is TLS, which we will meet in detail next.

| Dimension              | Encryption at Rest                          | Encryption in Transit                        |
|------------------------|---------------------------------------------|----------------------------------------------|
| Protects against       | Stolen disk, lost laptop, exposed backup    | Network eavesdropper, man-in-the-middle      |
| Where applied          | Storage layer (disk, database, object store)| Network layer (TLS, VPN, SSH)                |
| Common tools           | BitLocker, FileVault, TDE, KMS-managed keys | TLS 1.3, mTLS, IPsec, SSH                    |
| Key challenge          | Where do the keys live, and who can read them?| Certificate management and validation       |
| Common gap             | Backups encrypted, but live DB exports not  | Internal service-to-service traffic in cleartext |

## TLS and Public Key Infrastructure

The **TLS Protocol** (Transport Layer Security, the successor to SSL) is the cryptographic protocol underneath the little padlock in your browser's address bar. When your browser connects to a website over HTTPS, TLS performs a *handshake*: the server presents a digital certificate proving its identity, the browser verifies that certificate against a trusted root, and the two sides negotiate a fresh symmetric session key that is then used to encrypt every byte of the actual conversation. TLS 1.3, the current version, is faster and stripped of legacy cryptographic baggage compared to its predecessors.

For TLS to work, browsers must be able to *trust* the certificates servers present. That trust is anchored in **Public Key Infrastructure** (PKI): a hierarchy of *certificate authorities* (CAs) — trusted organizations that issue certificates after verifying the requester's identity — whose root certificates are pre-loaded into every operating system and browser on Earth. When your browser sees a certificate signed by Let's Encrypt, it validates the signature against the Let's Encrypt intermediate CA, which is in turn signed by an ISRG root that is trusted by your OS. The chain of signatures is the chain of trust.

PKI extends well beyond web browsing. Internal enterprise PKI issues certificates to employees (for VPN access, email signing, smart-card login), to devices (proving a laptop is corporate-managed), and to internal services (mutual TLS between microservices). Running an internal CA is non-trivial — certificates expire, revocation is harder than it looks, and a compromised CA is catastrophic — but the alternative is sharing passwords or API keys, which is worse in every dimension.

#### Diagram: TLS Handshake and the Chain of Trust

<details markdown="1">
<summary>TLS Handshake and the Chain of Trust</summary>
Type: interactive-infographic
**sim-id:** tls-handshake-chain-of-trust<br/>
**Library:** p5.js<br/>
**Status:** Specified

A p5.js animated sequence diagram showing the TLS 1.3 handshake between a browser and a server. Left side: the browser. Right side: the server. Steps animate in order: (1) ClientHello with supported cipher suites, (2) ServerHello with chosen cipher and the server's certificate, (3) browser walks the certificate chain — server cert → intermediate CA → root CA — verifying each signature against its parent until reaching a trust anchor in the OS keystore, (4) ephemeral key agreement using elliptic-curve Diffie-Hellman, (5) symmetric session key established, (6) encrypted application data flows. Below the handshake animation, a separate panel renders the certificate chain as a tree, with each cert showing its subject, issuer, validity, and signature.

Color palette: browser side in mascot-emerald, server side in mascot-magenta, the trust chain in slate-gray with green checkmarks for valid signatures and red X's for invalid ones, the symmetric session encryption in coral. An "attacker" toggle attempts a man-in-the-middle attack with a self-signed certificate; the chain validation step fails visibly and a browser warning is rendered.

Interactivity: step-through controls (next/back) walk a student through each handshake message; a "show what an attacker sees" toggle shows the encrypted bytes after the handshake completes; a "force certificate expired" toggle demonstrates the failure mode.

Layout: full canvas width, height ~620px. setup() calls updateCanvasSize() first. Canvas parented with `canvas.parent(document.querySelector('main'));`.

Learning objective (Bloom: Understanding): Students can describe the TLS handshake at a conceptual level, explain how PKI's chain of trust prevents man-in-the-middle attacks, and predict what happens when a certificate is invalid or self-signed.

Implementation: p5.js, deployed at `/information-systems/sims/tls-handshake-chain-of-trust/`.
</details>

## Symmetric vs Asymmetric: Two Flavors of Cryptography

Underneath TLS and PKI are two fundamentally different families of cryptographic algorithm, and understanding why both exist is the key to understanding modern crypto.

**Symmetric Encryption** uses the *same* key to encrypt and decrypt. AES (Advanced Encryption Standard) is the dominant symmetric algorithm, used everywhere from encrypted disks to TLS session traffic to encrypted database fields. Symmetric encryption is *fast* — modern CPUs have AES instructions that encrypt gigabytes per second — but it has one giant problem: the sender and receiver must somehow share the key in advance, and any attacker who captures the key can read everything.

**Asymmetric Encryption** (also called public-key cryptography) uses a *pair* of mathematically related keys: a *public* key that can be shared with anyone, and a *private* key that the owner keeps secret. Anyone can encrypt a message with your public key; only you, with your private key, can decrypt it. RSA and elliptic-curve algorithms are the dominant asymmetric families. Asymmetric encryption solves the key-distribution problem — you can publish your public key on a billboard — but it is *slow*, by orders of magnitude.

Modern systems combine the two. TLS uses asymmetric crypto (during the handshake) only to *securely exchange a fresh symmetric session key*, then uses fast symmetric encryption for the actual data. This is the best of both worlds: asymmetric crypto solves key distribution, symmetric crypto handles the bulk traffic.

| Property              | Symmetric (e.g., AES)                        | Asymmetric (e.g., RSA, ECC)                    |
|-----------------------|----------------------------------------------|------------------------------------------------|
| Keys                  | One shared secret key                        | Public/private key pair                        |
| Speed                 | Very fast (GB/s)                             | Slow (KB/s relative)                           |
| Key distribution      | Hard — how do you share the key safely?      | Easy — publish the public key                  |
| Typical use           | Bulk data encryption                         | Key exchange, digital signatures               |
| In TLS                | Encrypts session traffic                     | Authenticates server, exchanges session key    |

## Key Management: The Hard Part

The math of encryption is solved. The hard part is **Key Management** — generating, distributing, storing, rotating, and ultimately retiring the keys that the math depends on. A perfectly designed encryption scheme with a poorly managed key is no encryption at all. The classic key-management failures: keys committed to GitHub repos, keys stored alongside the data they encrypt (in the same database, in the same backup), keys never rotated for a decade, keys that the only person who knew them just took to a competitor.

The structural fix is a *Key Management System* (KMS): a dedicated service — AWS KMS, Azure Key Vault, Google Cloud KMS, HashiCorp Vault, on-prem hardware security modules (HSMs) — whose entire job is to hold keys, mediate their use, log every access, enforce rotation policies, and never let the raw key material leave the secure boundary. Applications ask the KMS to encrypt or decrypt on their behalf rather than pulling the key out and doing it themselves. This is yet another systems-thinking leverage point: centralizing keys in a single, audited, hardened service is hugely more defensible than scattering them across a hundred application configs.

## Hashing and Digital Signatures: Integrity in Action

**Hashing** is a related-but-distinct cryptographic primitive: a one-way function that takes input of any size and produces a fixed-size *digest* (e.g., SHA-256 produces a 256-bit output). Two properties matter: the same input always produces the same digest, and finding two inputs with the same digest is computationally infeasible. Hashes are used to detect tampering (the file's hash changed, so something was altered), to store passwords (you store the hash; you never store the password), and as building blocks of signatures and blockchain. Crucially, hashing is *not* encryption — there is no key, and the operation is one-way. You cannot "un-hash" a digest back into the original input.

A **Digital Signature** combines hashing with asymmetric encryption to provide *authenticity* and *integrity* in one shot. To sign a document, the signer computes the hash of the document and encrypts the hash with their private key. Anyone with the signer's public key can decrypt the signed hash, recompute the hash of the document themselves, and compare: if they match, the document has not been altered *and* it was signed by the holder of the private key. Digital signatures are how software updates are validated (your OS checks the vendor's signature before installing), how email can be cryptographically signed (S/MIME, PGP), and how the certificate chain in PKI works (each certificate is a digital signature by the parent CA over the child cert's data).

!!! mascot-thinking "Pause here"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Iris is thinking">
    Re-read the last two sections together, because they form one of the most important conceptual stacks in the field. *Hashing* gives you integrity (did this change?). *Asymmetric encryption* gives you authenticity (did the right person send this?). *Combine them* and you get a *digital signature*, which gives you both at once. Stack signatures inside a hierarchy of certificate authorities and you get *PKI*. Use PKI to bootstrap a fast symmetric session and you get *TLS*. Use TLS as the encryption-in-transit layer of a *zero trust* architecture and you have, in five layered ideas, the cryptographic backbone of the modern internet. Notice how each layer solves the limitation of the one below it — that compositional pattern is the entire shape of how secure systems are built.

## Security Governance: NIST CSF, ISO 27001, CIS Controls

Tools and protocols are necessary but insufficient. To run security at scale, organizations adopt *governance frameworks* — structured catalogs of security controls, processes, and outcomes that give the organization a common language, an auditable baseline, and a roadmap for improvement. Three frameworks dominate the IS landscape.

The **NIST CSF** (Cybersecurity Framework), published by the U.S. National Institute of Standards and Technology and updated to version 2.0 in 2024, organizes security work into six functions: **Govern, Identify, Protect, Detect, Respond, Recover**. Each function decomposes into categories and subcategories that an organization can map its current practice against, identify gaps, and target for improvement. NIST CSF is *outcome-oriented* — it tells you *what* needs to be true, not exactly *how* to make it true — which is what makes it usable across industries.

The six NIST CSF 2.0 functions, memorized once and used forever:

1. **Govern** — establish and monitor the organization's cybersecurity risk management strategy, expectations, and policy. (New in 2.0; recognizes that security is an organizational discipline, not just a technical one.)
2. **Identify** — develop the understanding of assets, business environment, and risks that the security program is built on.
3. **Protect** — implement safeguards (access control, training, encryption, secure configuration) to limit or contain the impact of a potential incident.
4. **Detect** — develop and implement activities to identify the occurrence of a cybersecurity event in a timely manner.
5. **Respond** — take action regarding a detected incident to contain its impact.
6. **Recover** — maintain plans for resilience and restore any capabilities or services impaired by an incident.

**ISO 27001** is the international standard for *Information Security Management Systems* (ISMS), maintained by the International Organization for Standardization. Where NIST CSF is a self-assessment framework that any organization can adopt freely, ISO 27001 is a *certifiable* standard — third-party auditors examine your practices against the standard and issue a certificate that customers and regulators will recognize. ISO 27001 specifies the management-system requirements (risk assessment, statement of applicability, internal audit, management review) and references a catalog of controls (in Annex A and the companion ISO 27002). For a company selling B2B services, an ISO 27001 certificate is often the price of entry into enterprise procurement.

**CIS Controls**, maintained by the Center for Internet Security, is the most pragmatic of the three: a prioritized list of 18 specific control areas — inventory, software inventory, data protection, secure configuration, account management, access control, continuous vulnerability management, audit log management, email and browser protections, malware defenses, data recovery, network infrastructure management, network monitoring, security awareness, service provider management, application software security, incident response, penetration testing — with explicit sub-controls grouped into three implementation groups (IG1 for small orgs, IG2 for mid-market, IG3 for high-risk enterprises). If NIST CSF tells you the categories and ISO 27001 tells you the management system, CIS Controls tells you the specific things to do *first*.

| Framework        | Origin                  | Style                       | Certifiable?    | Best for                                  |
|------------------|-------------------------|-----------------------------|-----------------|-------------------------------------------|
| NIST CSF 2.0     | U.S. NIST               | Outcome-oriented functions  | No (self-assess)| Strategic alignment, common vocabulary    |
| ISO 27001        | ISO international       | Management-system standard  | Yes (3rd party) | Customer-facing certifications, B2B sales |
| CIS Controls     | Center for Internet Security | Prioritized action list | No (self-assess)| Operational roadmap, "what do I do first" |

Most mature organizations use *all three*: NIST CSF as the strategic frame, ISO 27001 as the management-system audit target, and CIS Controls as the operational checklist their teams actually work from day to day.

## Threat Modeling and STRIDE

You cannot defend against threats you have not articulated. **Threat Modeling** is the disciplined practice of, *before building a system*, asking: *what are we building, what can go wrong, what are we going to do about it, and did we do a good enough job?* (Those four questions are the canonical Adam Shostack formulation.) A threat model is not a vulnerability scan or a penetration test; it is a *design-time* analysis that identifies threats from the architecture itself, before any code that could realize them has been written.

The most widely taught threat-modeling method is the **STRIDE Method**, developed at Microsoft. STRIDE is a mnemonic for six threat categories that, between them, cover the vast majority of what can go wrong with a system. Each category corresponds to the violation of a desirable security property:

| STRIDE letter | Threat                    | Property violated   | Concrete example                                    |
|---------------|---------------------------|---------------------|-----------------------------------------------------|
| **S**         | Spoofing                  | Authentication      | Attacker logs in as another user with stolen creds  |
| **T**         | Tampering                 | Integrity           | Attacker modifies a database record or message      |
| **R**         | Repudiation               | Non-repudiation     | User denies having performed an action; no log     |
| **I**         | Information disclosure    | Confidentiality     | Attacker reads data they should not see             |
| **D**         | Denial of service         | Availability        | Attacker floods the system, legitimate users locked out |
| **E**         | Elevation of privilege    | Authorization       | Low-privilege user gains admin rights               |

The threat-modeling exercise typically draws a *data flow diagram* of the system — processes, data stores, external entities, trust boundaries — and walks through each element asking which STRIDE threats apply, what controls already mitigate them, and which residual risks need new controls. The output is a list of issues to address before code is written, when fixes are cheap, rather than after deployment, when fixes are expensive and the breach is in the news.

#### Diagram: STRIDE Overlay on a Simple Web Application

<details markdown="1">
<summary>STRIDE Overlay on a Simple Web Application</summary>
Type: interactive-infographic
**sim-id:** stride-threat-model-overlay<br/>
**Library:** vis-network<br/>
**Status:** Specified

A vis-network data flow diagram of a small web application: a browser (external entity) connects through a TLS boundary to a web server (process), which talks to an application server (process), which talks to a database (data store) and an authentication service (process). Trust boundaries are drawn as dashed regions: browser-to-server, server-to-internal-services, services-to-database. Overlaid on each element and data flow are STRIDE threat indicators — small colored badges (S, T, R, I, D, E) — that students can click to reveal the specific threat scenario, the security property it violates, and the standard mitigating control.

Color palette: external entities in slate-gray, processes in mascot-emerald, data stores in mascot-magenta, trust boundaries in coral dashed lines, STRIDE badges color-coded per category. A "show mitigations" toggle replaces each threat badge with the corresponding control (TLS for spoofing on the wire, hashed passwords for tampering on stored credentials, audit logs for repudiation, encryption-at-rest for information disclosure on the DB, rate limiting for denial of service, RBAC for elevation of privilege).

Interactivity: hovering an element lists every applicable STRIDE threat for that element type; clicking a threat badge opens a panel with the threat description and recommended controls. A scoring mode lets students attempt to identify all threats on each element and reveals their score against the canonical answer.

Layout: full canvas width, height ~600px. Sequence flows use slight y-offsets to work around the vis-network horizontal-edge-label rendering bug.

Learning objective (Bloom: Applying): Students can apply the STRIDE method to a small system architecture, identify at least one threat per category, and propose a standard mitigating control for each.

Implementation: vis-network, deployed at `/information-systems/sims/stride-threat-model-overlay/`.
</details>

## Vulnerability Management and Penetration Testing

Threat modeling identifies what *could* go wrong by design. **Vulnerability Management** is the operational discipline of finding, prioritizing, and remediating *specific* security weaknesses that already exist in deployed systems — known software bugs (CVEs), misconfigurations, missing patches, exposed services. The vulnerability-management lifecycle: scan continuously (with tools like Tenable, Qualys, Rapid7, or open-source equivalents), classify findings by severity (often using CVSS scores), prioritize by exposure and exploitability, dispatch fix tickets to the owning teams, verify remediation, and report on trends to leadership.

The cultural pitfall is *vulnerability fatigue* — a typical enterprise scanner produces thousands of findings, most teams cannot remediate them all, and over time the team stops looking. The structural fix is *risk-based prioritization*: not every CVE matters equally, and a "critical" vulnerability on an internal test box behind seven layers of network controls is less urgent than a "medium" vulnerability on the internet-facing login page. Modern programs combine vulnerability scanning with *exploitability data* (is anyone actually exploiting this in the wild?) and *asset criticality* to focus the team on the small subset of findings that genuinely require fast action.

**Penetration Testing** complements vulnerability management by hiring expert humans (or red-teams) to actively *attempt* to break into the system, using the same tools and techniques real attackers would use. Where a vulnerability scan tells you *what known weaknesses are present*, a penetration test tells you *how an attacker would actually chain weaknesses together to achieve a real impact*. Pen tests are usually scoped (specific applications, specific time windows, specific rules of engagement), produce a written report with findings ranked by severity, and feed back into the vulnerability-management process. Many regulated industries require periodic pen testing; the best programs run continuous "red team" exercises that mimic adversaries persistently rather than once a year.

## SIEM and the Security Operations Center

To detect attacks in progress, an organization needs to aggregate signals from across its environment and have humans (and increasingly, AI agents) watching the aggregate. The technology layer is the **SIEM** (Security Information and Event Management) — a platform like Splunk, Microsoft Sentinel, IBM QRadar, Elastic Security, or Sumo Logic that ingests log and event data from across the enterprise (servers, endpoints, firewalls, IdPs, applications, cloud services), normalizes it, correlates events across sources, runs detection rules to flag suspicious patterns, and presents alerts to human analysts.

The human layer is the **Security Operations Center** (SOC) — a team (often 24/7, often tiered into Tier-1 triage analysts, Tier-2 investigators, and Tier-3 incident responders) that watches the SIEM, triages alerts, investigates real incidents, coordinates response across the org, and feeds lessons learned back into detection rules. Larger organizations run their own SOC; mid-market organizations often outsource to a Managed SOC provider (MDR/MSSP).

The systems-thinking dynamic to watch for is *alert fatigue*. Tune the detection rules too loosely and analysts drown in false positives, eventually missing the real alert in the noise. Tune them too strictly and the real attack slips through with no alert at all. The balancing feedback loop — alert volume, analyst capacity, false-positive rate, miss rate — is the central operational tension of every SOC, and tuning it is genuinely a craft. Modern SOCs supplement humans with *SOAR* platforms (Security Orchestration, Automation, and Response) that auto-handle routine alerts, and with AI-driven detection that can spot patterns no human rule could express.

## Incident Response: The Playbook for Bad Days

When a real incident happens, the organization needs to execute, fast and calmly, a pre-rehearsed playbook. **Incident Response** (IR) is the discipline of preparing for, detecting, containing, eradicating, recovering from, and learning from security incidents. NIST SP 800-61 organizes IR into four phases that every IS professional should be able to recite:

1. **Preparation** — define the IR plan, train the team, set up communication channels, retain forensics tooling, run tabletop exercises. Done before the incident.
2. **Detection and Analysis** — identify that an incident is occurring, scope it, determine what kind of incident it is, and assess the impact.
3. **Containment, Eradication, and Recovery** — stop the bleed (disconnect the compromised host, revoke the credential, block the IP), remove the attacker's foothold (patch the vulnerability, wipe and rebuild the host), and restore normal operations (re-enable services, monitor for recurrence).
4. **Post-Incident Activity** — write the post-mortem, identify root causes, update detection rules, fix the underlying weaknesses, and brief leadership and (if required) regulators and customers.

The often-skipped phase is the fourth one. After a long incident, the team is exhausted and management wants to "move on." But the post-mortem is where the *systems learning* happens — the one chance to convert a painful incident into permanent organizational improvement. Mature programs treat the post-mortem as sacred, run it blamelessly, and track every action item to closure.

!!! mascot-warning "Heads up"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Iris warns you">
    The most common — and most destructive — IR footgun is *premature eradication*. The team detects the intrusion, panics, and immediately reformats the compromised host, blocks the attacker's IP, and resets every credential in sight. Unfortunately, they have just destroyed the forensic evidence needed to understand *how* the attacker got in, *what* they accessed, and *whether* they have other footholds. Two weeks later, the attacker walks back in through a backdoor on a different host the team never investigated, because the team never knew it existed. The structural fix is *contain first, eradicate second*: isolate the compromised systems from the network and from each other so they cannot do further damage, but leave them running long enough for forensics to extract the timeline. Eradicate only after you understand the scope.

## Audit Trail: The Truth-Source

We close on the third A from the AAA framework, now seen as the keystone of everything else. An **Audit Trail** is the chronological, tamper-evident, time-stamped record of every security-relevant event that occurs in a system: every authentication attempt (success and failure), every authorization decision, every privileged action, every change to security configuration, every access to sensitive data. Audit trails are how you reconstruct what happened during an incident, prove compliance to an auditor, identify insider misuse, and feed the SIEM with the raw signals it needs to detect attacks in flight.

The discipline of audit trails has three structural requirements. First, *completeness* — events that don't get logged effectively didn't happen, from the system's epistemic perspective. Second, *integrity* — the audit log itself must be protected from tampering by privileged users (often by streaming to a write-only or append-only destination, or to a separate security-team-controlled environment). Third, *retention* — logs must be kept long enough to investigate slow-moving incidents (median attacker dwell time is still measured in months) and to satisfy regulatory requirements, often years.

Audit trails are also the highest-leverage *systems-thinking* artifact in the security discipline. Every other control can fail; the audit trail is what tells you *that* it failed, *when* it failed, and *what to do about it*. An organization with weak controls but excellent audit trails will eventually catch the breach and learn from it. An organization with strong controls and no audit trails will be breached, will not know it, and will keep getting breached the same way. The audit trail is the truth-source against which every other claim about the system is checked.

## Putting It All Together

Security of information assets is the discipline of preserving confidentiality, integrity, and availability across the entire lifecycle of an information system, using layered controls, governance frameworks, threat-aware design, and operational vigilance.

- The **CIA triad** (confidentiality, integrity, availability) is the goal; the **AAA framework** (authentication, authorization, accounting) is the mechanism by which every interaction is controlled and recorded.
- **Multifactor authentication** dramatically raises the cost of credential theft. **Single sign-on** centralizes login through an **identity provider**, using **SAML** for enterprise SSO, **OAuth 2.0** for delegated API access, and **OpenID Connect** for modern identity-bearing login.
- Access is governed by **role-based access control** (simple and auditable) or **attribute-based access control** (flexible and fine-grained), always under the **least-privilege** principle. **Zero trust architecture** is the paradigm shift that replaces the old castle-and-moat model with continuous verification on every request.
- **Encryption at rest** and **encryption in transit** protect data in storage and in motion. **TLS** secures the wire; **public key infrastructure** provides the chain of trust. **Symmetric encryption** moves the bulk data fast; **asymmetric encryption** solves key distribution and underlies **digital signatures**, which combine **hashing** with private-key signing to provide integrity and authenticity. **Key management** is the operationally hardest part — and the place most encryption schemes actually fail.
- **NIST CSF 2.0** organizes the security program into six functions (Govern, Identify, Protect, Detect, Respond, Recover); **ISO 27001** provides an internationally certifiable management-system standard; **CIS Controls** provides a prioritized operational checklist. Mature organizations use all three.
- **Threat modeling** (especially the **STRIDE method**) identifies design-time risks before code is written; **vulnerability management** finds known weaknesses in deployed systems; **penetration testing** validates that the controls actually hold against real adversaries.
- The **SIEM** aggregates and correlates signals; the **Security Operations Center** is the human team that watches the SIEM and acts on its alerts; **incident response** is the rehearsed playbook for when an attack succeeds; the **audit trail** is the tamper-evident record that makes every other control accountable.

A graduate of this chapter walking into their first security conversation should be able to ask, in order: *What are we protecting, and which of C, I, and A matter most? Who can authenticate, and with what factors? Who is authorized for what, and how is least privilege enforced? Where is the data encrypted at rest and in transit, and where do the keys live? Which governance framework are we measured against? Have we threat-modeled the design? How are vulnerabilities and incidents being detected and handled? And — most importantly — would the audit trail let us reconstruct the truth six months from now?* These are exactly the questions a sophisticated security architect would ask. You can ask all of them after a single chapter.

!!! mascot-celebration "Nicely done"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Iris celebrates">
    You just absorbed thirty-seven of the most career-relevant concepts in all of information systems. You can now read a SAML assertion, debate RBAC versus ABAC at a whiteboard, explain why TLS needs PKI to work, defend MFA to a skeptical executive, recognize MFA fatigue when it bites, walk a STRIDE threat model through a small architecture, name the six NIST CSF functions without looking, and explain why the audit trail is the most underrated artifact in your environment. Most importantly, you now know that security is not the *brake* on information systems work — it is the *steering wheel*. You cannot go fast safely without it. Onward to Chapter 15, where we step into the world of analytics and turn all of this carefully protected data into decisions the business can actually use.


## References

[See Annotated References](./references.md)
