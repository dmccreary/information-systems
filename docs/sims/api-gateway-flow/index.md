---
title: API Gateway Request Flow
description: An interactive vis-network diagram showing how an API gateway routes client requests to backend microservices and applies cross-cutting concerns (auth, rate limit, route, log).
image: /sims/api-gateway-flow/api-gateway-flow.png
og:image: /sims/api-gateway-flow/api-gateway-flow.png
twitter:image: /sims/api-gateway-flow/api-gateway-flow.png
status: implemented
library: vis-network
bloom_level: Analyze
social:
   cards: false
---

# API Gateway Request Flow

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the API Gateway MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

The **API gateway** pattern places a single ingress point in front of your backend services. The gateway absorbs the cross-cutting concerns — **authenticate, rate limit, route, log** — so your individual microservices can focus on business logic instead of reimplementing the same security and observability code three different ways.

This MicroSim animates a request token traveling from client → gateway → chosen backend service → database, and back. As the token enters the gateway, the side panel reveals each cross-cutting concern in sequence. Click **Show Without Gateway** to see what happens when you skip the pattern: every backend service has to reimplement auth, rate-limit, and logging — and every implementation drifts.

### How to Use

1. **Pick a target service** (Orders, Inventory, or Customer)
2. Click **Send Request** to trace the token through the diagram
3. **Click any node** to see what that component does
4. Toggle **Show Without Gateway** to compare architectures

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/api-gateway-flow/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Identify the four cross-cutting concerns an API gateway typically owns
2. Articulate which concerns belong in the gateway and which belong in the service
3. Predict the consequences of skipping the gateway pattern in a multi-service architecture
4. Trace a request through the gateway and back, naming each step

### Suggested Activities

1. **Concern Sorting (10 min)** — Given a list of 10 concerns (auth, business validation, encryption, transaction, audit, etc.), classify each as gateway-owned or service-owned
2. **Trace and Narrate (5 min)** — Run the trace for each backend; narrate the request lifecycle in your own words
3. **Anti-Pattern Spotting (10 min)** — Toggle "Show Without Gateway." Identify three concrete bugs that become more likely without a gateway

### Assessment

- Match each concern to its appropriate layer (gateway vs service)
- Explain *why* an organization with three teams maintaining three services should not let each team write their own rate-limiter

## References

- Newman, S. (2021). *Building Microservices*, 2nd ed., O'Reilly.
- Richardson, C. (2018). *Microservice Patterns*, Manning.

## Related Resources

- [Chapter 3: Information Systems Architecture](../../chapters/03-architecture/index.md)
