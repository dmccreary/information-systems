---
title: TLS Handshake and the Chain of Trust
description: A step-through TLS 1.3 handshake animation with a certificate chain panel, MITM and expired-certificate failure modes, and an attacker-view of the encrypted bytes.
image: /sims/tls-handshake-chain-of-trust/tls-handshake-chain-of-trust.png
og:image: /sims/tls-handshake-chain-of-trust/tls-handshake-chain-of-trust.png
twitter:image: /sims/tls-handshake-chain-of-trust/tls-handshake-chain-of-trust.png
status: implemented
library: p5.js
bloom_level: Understand
social:
   cards: false
---

# TLS Handshake and the Chain of Trust

<iframe src="main.html" height="702px" width="100%" scrolling="no"></iframe>

[Run the TLS MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A six-step TLS 1.3 handshake animation with the certificate chain rendered below. Step through ClientHello → ServerHello → chain validation → key exchange → session key → encrypted data. Toggle MITM or force an expired certificate to see chain validation fail. Toggle attacker view to see what's actually on the wire.

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Describe the TLS handshake at a conceptual level
2. Explain how PKI's chain of trust prevents man-in-the-middle attacks
3. Predict what happens when a certificate is invalid

## Related Resources

- [Chapter 14: Security of Information Assets](../../chapters/14-security/index.md)
