---
title: "Strategic classification with randomised classifiers"
authors:
- admin
- Henry Gouk
date: "2025-02-03T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-02-03T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: We consider the problem of strategic classification, where a learner must build a model to classify agents based on features that have been strategically modified. Previous work in this area has concentrated on the case when the learner is restricted to deterministic classifiers. In contrast, we perform a theoretical analysis of an extension to this setting that allows the learner to produce a randomised classifier. We show that, under certain conditions, the optimal randomised classifier can achieve better accuracy than the optimal deterministic classifier, but under no conditions can it be worse. When a finite set of training data is available, we show that the excess risk of Strategic Empirical Risk Minimisation over the class of randomised classifiers is bounded in a similar manner as the deterministic case. In both the deterministic and randomised cases, the risk of the classifier produced by the learner converges to that of the corresponding optimal classifier as the volume of available training data grows. Moreover, this convergence happens at the same rate as in the i.i.d. case. Our findings are compared with previous theoretical work analysing the problem of strategic classification. We conclude that randomisation has the potential to alleviate some issues that could be faced in practice without introducing any substantial downsides.

# Summary. An optional shortened abstract.
#summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Strategic Classification
- Randomised Classifiers
- Robustness
- Game Theory

featured: true

hugoblox:
  ids:
    arxiv: 2502.01313

links:
- type: preprint
  provider: arxiv
  id: 2502.01313
# - type: code
#   url: https://github.com/HugoBlox/hugo-blox-builder
# - type: slides
#   url: https://www.slideshare.net/
# - type: dataset
#   url: "#"
# - type: poster
#   url: "#"
# - type: source
#   url: "#"
# - type: video
#   url: https://youtube.com
# - type: custom
#   label: Custom Link
#   url: http://example.org

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  #caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

This work is driven by the results in my [previous paper](/publications/conference-paper/) on LLMs.

> [!NOTE]
> Create your slides in Markdown - click the *Slides* button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
