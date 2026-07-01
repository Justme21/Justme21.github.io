---
title: 'Strategic Classification Framework'
date: '2025-11-01'

summary: >
  A modular Python framework for training classifiers that are robust to
  strategic manipulation — where agents adapt their features to game the
  model's decisions.

tags:
  - Strategic Classification
  - Machine Learning
  - Game Theory
  - Python

# Featured image (file named featured.png/jpg in this folder)
image:
  caption: 'Decision boundaries under Clean training, ERM, REGD, and TGD on a non-linear dataset. Standard methods collapse when agents respond strategically; TGD accounts for this.'
  focal_point: Center
  preview_only: false

links:
  - icon: brands/github
    name: GitHub
    url: https://github.com/Justme21/strategic-classification-framework
  - icon: academicons/arxiv
    name: Paper
    url: https://arxiv.org/abs/2511.21560
---

## What is Strategic Classification?

When a classifier is deployed in the real world, the people being classified often
respond to it. A loan applicant who is denied credit might shift their financial
behaviour to look more creditworthy to the model — not because their situation
genuinely improved, but because they learned what the model rewards. This
phenomenon is called **strategic classification**: the training distribution shifts
once agents observe and respond to the classifier.

Standard machine learning ignores this feedback loop. A model trained with ERM
(Empirical Risk Minimisation) can therefore degrade significantly at deployment
time, because it was never taught to anticipate how agents will react to it.

---

## The Framework

This library provides a **modular, extensible platform** for researching and
training classifiers under strategic agent behaviour.

Every component of the strategic learning problem — the classifier, the agent's
best response, the cost function, and the training loss — is a swappable module.
You mix and match them from the command line or from Python, and adding a new
variant means dropping a single file into the right subdirectory.

**Built-in components:**

| Component | Options |
|-----------|---------|
| **Models** | Linear, MLP, Input-Convex NN (ICNN), Parabolic, Quadratic |
| **Agent responses** | Gradient Ascent, Lagrangian, Augmented Lagrangian, Ensemble, Linear, Identity (no response) |
| **Cost functions** | Quadratic, Zero |
| **Losses** | Strategic Hinge (SSVM), Naive SSVM Hinge, Strategic Cross-Entropy, Linear+Logistic |
| **Datasets** | Balls, Twin Moons, Houses, or bring your own (CSV / NumPy / ARFF) |

The framework is associated with the paper:

> J. Geary, B. Gao, H. Gouk.  
> **Computing Strategic Responses to Non-Linear Classifiers**  
> *EurIPS 2025 Workshop: Unifying Perspectives on Learning Biases.*  
> [arXiv:2511.21560](https://arxiv.org/abs/2511.21560)

---

## Quick Start

**Requirements:** Python ≥ 3.11, [uv](https://docs.astral.sh/uv/)

```bash
git clone https://github.com/Justme21/strategic-classification-framework
cd strategic-classification-framework
uv run python experiments/quickstart.py
```

Or use the Python API directly:

```python
from Clf_Learner import Learner, StrategicEvaluator

# Train a strategically-robust MLP
model = Learner(
    dataset="balls",
    response="augmented_lagrange",
    cost="quadratic",
    cost_radius=2.0,
    comp_args={
        "response": {"lr": 0.01, "max_iterations": 500,
                     "margin": 1e-3, "lagrange_mult_lr": 0.1,
                     "lagrange_mult_cost_lr": 0.1, "rho": 1},
        "model": {"hidden_layers": 2, "hidden_dim": 64},
    },
).train(epochs=20, verbose=True)

# Evaluate under clean vs. strategic conditions
clean    = StrategicEvaluator.from_names(model, dataset="balls", response="identity")
strategic = StrategicEvaluator.from_names(model, dataset="balls",
                                           response="augmented_lagrange", cost_radius=2.0)

print(f"Clean accuracy:     {clean.clean_accuracy():.3f}")
print(f"Strategic accuracy: {strategic.strategic_accuracy():.3f}")
```

To see all available component names:

```python
from Clf_Learner import list_components
list_components()
```

---

## Extending the Framework

New modules (a custom response, a new dataset, a novel loss) can be added by
subclassing the relevant interface in `Clf_Learner/interfaces/` and placing the
file in the appropriate subdirectory. The framework picks it up automatically —
no registration or config editing required.

---

{{< callout note >}}
**Note for visitors:** The public repository reflects the version associated with
the EurIPS 2025 paper. Ongoing development (including updates for the NeurIPS 2026
submission) will be pushed once the work is published.
{{< /callout >}}

<!-- ── PLACEHOLDER ────────────────────────────────────────────────────────────
  If you add a pip-installable release to PyPI, replace the Quick Start section
  above with:

    pip install strategic-classification-framework

  and link to the PyPI package page.

  If you create a docs site (e.g. Read the Docs), add a link here:

    - icon: hero/book-open
      name: Docs
      url: https://your-docs-url.com

  Add it to the `links:` block in the frontmatter above.
──────────────────────────────────────────────────────────────────────────── -->
