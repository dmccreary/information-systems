---
title: TLS Handshake and the Chain of Trust
description: TLS Handshake and the Chain of Trust
status: scaffold
library: p5.js
bloom_level: TBD
---

# TLS Handshake and the Chain of Trust

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** p5.js

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: 'Security of Information Assets'](../../chapters/14-security/index.md).

```text
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
```

## Related Resources

- [Chapter 14: 'Security of Information Assets'](../../chapters/14-security/index.md)
