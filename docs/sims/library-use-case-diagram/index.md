---
title: Library System Use Case Diagram
description: An interactive UML use-case diagram for a small public library system, with actors (Patron, Librarian, Payment Gateway), use cases, and toggleable «include»/«extend» relationships.
image: /sims/library-use-case-diagram/library-use-case-diagram.png
og:image: /sims/library-use-case-diagram/library-use-case-diagram.png
twitter:image: /sims/library-use-case-diagram/library-use-case-diagram.png
status: implemented
library: vis-network
bloom_level: Apply
social:
   cards: false
---

# Library System Use Case Diagram

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the Library Use Case MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A canonical UML **use case diagram** for a small public library system. Three actors (Patron, Librarian, and the system actor Payment Gateway) participate in nine use cases. The cross-cutting *Authenticate User* is reached via dashed `«include»` arrows from Borrow Item, Place Hold, and Pay Fine. *Apply Late-Fee Waiver* is shown as an `«extend»` of Pay Fine.

Click any **actor** to highlight every use case they participate in. Click any **use case** for the canonical use-case template (preconditions, main success scenario, alternative flows, postconditions).

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/library-use-case-diagram/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Read a UML use-case diagram and identify actors and use cases
2. Distinguish `«include»` from `«extend»` relationships
3. Produce a use-case template for any ellipse on the page
4. Identify cross-cutting concerns rendered as common include targets

### Suggested Activities

1. **Actor Walk (5 min)** — Click each actor; list their use cases
2. **Template Drill (15 min)** — Pick three use cases and write the template from scratch before checking
3. **Include vs Extend (10 min)** — Toggle on the dashed arrows; explain the difference in your own words

## References

- OMG. *UML 2.5 Specification*.
- Cockburn, A. (2000). *Writing Effective Use Cases*.

## Related Resources

- [Chapter 10: Systems Analysis and Design](../../chapters/10-sad/index.md)
