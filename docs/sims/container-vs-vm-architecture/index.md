---
title: Container vs Virtual Machine Architecture
description: A side-by-side comparison of VM and container architecture stacks with a scale-up button and a shared-kernel highlight that surfaces the isolation/density tradeoff.
image: /sims/container-vs-vm-architecture/container-vs-vm-architecture.png
og:image: /sims/container-vs-vm-architecture/container-vs-vm-architecture.png
twitter:image: /sims/container-vs-vm-architecture/container-vs-vm-architecture.png
status: implemented
library: p5.js
bloom_level: Analyze
social:
   cards: false
---

# Container vs Virtual Machine Architecture

<iframe src="main.html" height="602px" width="100%" scrolling="no"></iframe>

[Run the Container vs VM MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

The two dominant compute virtualization patterns side by side. **VMs** stack a full guest OS per unit, giving strong isolation but big artifact size and slow boots. **Containers** share the host kernel, giving you density and sub-second startup at the cost of weaker isolation.

Click **Scale Up** to see how many more containers fit on the same host as VMs. Click **Highlight Shared Kernel** to surface the security tradeoff.

## Embedding This MicroSim

```html
<iframe src="https://dmccreary.github.io/information-systems/sims/container-vs-vm-architecture/main.html"
        height="602px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objectives

By the end of this activity, students will be able to:

1. Compare VM and container architectural stacks
2. Explain why containers boot faster and weigh less than VMs
3. Articulate the isolation/density tradeoff
4. Recommend VM or container for a given workload

## References

- Docker. *What is a Container?*
- VMware. *Virtualization 101*.

## Related Resources

- [Chapter 12: Cloud Computing and Infrastructure](../../chapters/12-cloud/index.md)
