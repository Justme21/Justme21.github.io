---
title: "Active altruism learning and information sufficiency for autonomous driving"
authors:
  - admin
  - Henry Gouk
  - Subramanian Ramamoorthy

date: "2021-10-09T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-10-09T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Safe interaction between vehicles requires the ability to choose actions that reveal the preferences of the other vehicles. Since exploratory actions often do not directly contribute to their objective, an interactive vehicle must also able to identify when it is appropriate to perform them. In this work we demonstrate how Active Learning methods can be used to incentivise an autonomous vehicle (AV) to choose actions that reveal information about the altruistic inclinations of another vehicle. We identify a property, Information Sufficiency, that a reward function should have in order to keep exploration from unnecessarily interfering with the pursuit of an objective. We empirically demonstrate that reward functions that do not have Information Sufficiency are prone to inadequate exploration, which can result in sub-optimal behaviour. We propose a reward definition that has Information Sufficiency, and show that it facilitates an AV choosing exploratory actions to estimate altruistic tendency, whilst also compensating for the possibility of conflicting beliefs between vehicles.

# Summary. An optional shortened abstract.
#summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
  - Autonomous Driving
  - Decision-making
  - Interaction
  - Game Theory

featured: true

hugoblox:
  ids:
    arxiv: 2110.04580

links:
- type: preprint
  provider: arxiv
  id: 2110.04580
- type: code
  url: https://github.com/Justme21/Altruistic-Planning
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
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

<!-- This work is driven by the results in my [previous paper](/publications/conference-paper/) on LLMs.

> [!NOTE]
> Create your slides in Markdown - click the *Slides* button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
