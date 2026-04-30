---
title: Small Business ERD
description: An interactive entity-relationship diagram for a small e-commerce business with Customer, Order, OrderLine, Product, and Supplier entities, plus a normal-forms watch-out toggle.
image: /sims/small-business-erd/small-business-erd.png
og:image: /sims/small-business-erd/small-business-erd.png
twitter:image: /sims/small-business-erd/small-business-erd.png
status: implemented
library: vis-network
bloom_level: Apply
social:
   cards: false
---

# Small Business ERD

<iframe src="main.html" height="722px" width="100%" scrolling="no"></iframe>

[Run the ERD MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A canonical small-e-commerce ERD with five entities: **Customer**, **Order**, **OrderLine** (the join table), **Product**, and **Supplier**. The diagram demonstrates the *most common pattern in business databases*: the many-to-many relationship between Order and Product resolved via an OrderLine join entity.

Click any entity to see what it represents, why each attribute exists, and a sample row. Click any relationship line for the plain-English cardinality. Toggle **Show Normal-Form Watch-Outs** to surface common 1NF/2NF/3NF traps.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/small-business-erd/main.html"
        height="722px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Read a Crow's Foot ERD and identify primary keys and foreign keys
2. State each cardinality in plain English
3. Recognize where a join entity is required for a many-to-many relationship
4. Identify common 1NF, 2NF, and 3NF violations

### Suggested Activities

1. **Cardinality Drill (10 min)** — For each line, state the cardinality both directions
2. **Normal-Form Audit (15 min)** — Toggle watch-outs; propose a fix for each
3. **Add an Entity (15 min)** — Add a `Shipment` entity. Where does it connect, and what FKs does it need?

## References

- Codd, E. F. (1970). *A Relational Model of Data for Large Shared Data Banks*.
- Date, C. J. (2003). *An Introduction to Database Systems*, 8th ed.

## Related Resources

- [Chapter 6: Data Management Foundations](../../chapters/06-data-foundations/index.md)
