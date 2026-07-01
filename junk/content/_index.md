---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  spacing: '6rem'

sections:
  # ── Profile card ───────────────────────────────────────────────────────────
  - block: resume-biography-3
    content:
      username: admin
      text: ''
      button:
        text: CV
        url: uploads/Current_CV.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: large    # small (150px) | medium (200px) | large (320px) | xl (400px)
        shape: circle  # circle | square | rounded

  # ── Publications list ──────────────────────────────────────────────────────
  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation

  # ── Projects ──────────────────────────────────────────────────────────────
  - block: collection
    content:
      title: Projects
      text: ''
      filters:
        folders:
          - projects
    design:
      view: card

  # ── Optional: Featured publications grid ───────────────────────────────────
  # Uncomment this block to add a featured-papers grid above the full list.
  # - block: collection
  #   id: papers
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publications
  #       featured_only: true
  #   design:
  #     view: article-grid
  #     columns: 2

  # ── Optional: News / blog feed ─────────────────────────────────────────────
  # Uncomment to show recent news posts on the homepage.
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     page_type: blog
  #     count: 5
  #     order: desc
  #   design:
  #     view: card
---
