/**
 * ================================================================
 *  YOUR WEBSITE CONTENT  —  data.js
 * ================================================================
 *
 *  This is the ONLY file you need to edit to update your website.
 *  No knowledge of HTML, CSS, or JavaScript is required.
 *
 *  BASIC RULES:
 *    • Text goes between "double quotes" or `backtick quotes`
 *    • Keep the commas at the end of lines
 *    • Keep all the curly braces  { }  and square brackets  [ ]
 *    • If something breaks: undo with Ctrl+Z (Windows) or Cmd+Z (Mac)
 *
 *  HOW TO ADD A PUBLICATION  (the most common task):
 *    1. Find the "publications:" section below
 *    2. Copy the block from the opening  {  to the closing  },
 *    3. Paste it directly above the first existing publication
 *    4. Give it the next id, e.g. "pub-5", "pub-6", …
 *    5. Fill in the details; leave any field as ""  to hide that element
 *
 * ================================================================
 */

const SITE = {

  /* ── Personal info ─────────────────────────────────────────────
     Change these to update the name, title, and links everywhere. */

  name:           "Jack Geary",
  role:           "PhD Student in Machine Learning",
  affiliation:    "School of Informatics, University of Edinburgh",
  affiliationUrl: "https://informatics.ed.ac.uk",

  email:    "jack.geary@ed.ac.uk",
  github:   "https://github.com/Justme21",
  linkedin: "https://www.linkedin.com/in/jackdgeary/",
  scholar:  "https://scholar.google.com/citations?user=9X5KAXwAAAAJ",

  /*  Path to your CV — place the file as  public/cv.pdf  */
  cvPath: "cv.pdf",

  /*  Path to your photo — place the file as  public/avatar.png  */
  avatarPath: "avatar.png",
  avatarAlt:  "Jack Geary",

  /* ── Biography ─────────────────────────────────────────────────
     This is the short paragraph shown in the About section.
     You can use <a href="...">link text</a> for hyperlinks
     and <strong>bold text</strong> for emphasis.               */

  bio: `I am a PhD student at the University of Edinburgh, supervised by
        <a href="https://www.henrygouk.com" target="_blank" rel="noopener">Henry Gouk</a>.
        My research focuses on <strong>Strategic Classification</strong> — how machine learning
        systems should be designed when the agents they classify act strategically in response
        to the classifier's decisions. I draw on tools from Game Theory, Statistical Learning
        Theory, and Decision Making. Previously, I applied game-theoretic methods to
        interactive decision making in Autonomous Driving.`,


  /* ── Research interests ────────────────────────────────────────
     Each card shows an icon, a title, and a short description.
     Use any single emoji for the icon.
     To add an interest: copy a block from { to }, and paste it. */

  research: [
    {
      icon:  "♟",
      title: "Strategic Classification",
      desc:  `Studying how classifiers should be designed when agents can modify their features
              in response to the model. My current PhD work explores randomised classifiers
              as a tool for improving performance in these adversarial settings.`,
    },
    {
      icon:  "⚖",
      title: "Game Theory",
      desc:  `Using Stackelberg games and equilibrium concepts to model the interaction between
              classifiers and strategic agents — connecting machine learning to mechanism design
              and economic theory.`,
    },
    {
      icon:  "🎯",
      title: "Decision Making",
      desc:  `Developing principled frameworks for decision making in interactive environments,
              where outcomes depend on the simultaneous choices of multiple self-interested agents.`,
    },
    {
      icon:  "🚗",
      title: "Autonomous Driving",
      desc:  `Applied game-theoretic decision making to autonomous vehicles, developing
              altruism-based models that reduce inter-agent conflict and better explain
              observed human driving behaviour.`,
    },
  ],


  /* ── Publications ──────────────────────────────────────────────
     Sorted newest-first.  Each publication needs a unique id.
     Fields:
       id       — unique slug, e.g. "geary2025computing" (matches BibTeX key)
                  No need to renumber anything — just pick a new slug.
       year     — the publication year (a number)
       title    — full paper title
       authors  — list of author names  ["Name 1", "Name 2", …]
       myName   — your name exactly as it appears in authors (will be bolded)
       venue    — journal / conference name
       abstract — the abstract text (shown when the reader clicks "Abstract")
       tags     — list of topic keywords  ["Tag 1", "Tag 2", …]
       links    — set a url to ""  to hide that button:
                    arxiv  →  the arXiv abstract page
                    pdf    →  direct PDF link
                    code   →  GitHub or other repository
       bibtex   — citation in BibTeX format (shown/copied when reader clicks "BibTeX")

     featured — true  → show on homepage  |  false → only on the full Publications page

     TO ADD A NEW PAPER:
       1. Copy any block below (from { to },)
       2. Paste it right after the opening  [  of the publications array
       3. Give it a new id slug, e.g. "geary2026yourtitle"
       4. Fill in the fields — leave any url as ""  to hide its button  */

  publications: [

    {
      id:      "geary2025computing",
      featured: true,
      year:    2025,
      title:   "Computing Strategic Responses to Non-Linear Classifiers",
      authors: ["Jack Geary", "Boyan Gao", "Henry Gouk"],
      myName:  "Jack Geary",
      venue:   "EurIPS 2025 Workshop · Unifying Perspectives on Learning Biases",
      abstract: `We study the problem of computing best responses for agents being classified by
        non-linear classifiers. We show that this problem is in general NP-hard and propose
        efficient algorithms based on Lagrangian relaxation that can solve it approximately.
        We evaluate our approach on several synthetic datasets and show that it can be used
        to train classifiers that are robust to strategic manipulation.`,
      tags:  ["Strategic Classification", "Non-Linear Classifiers", "Game Theory"],
      links: {
        arxiv: "https://arxiv.org/abs/2511.21560",
        pdf:   "",
        code:  "https://github.com/Justme21/strategic-classification-framework",
      },
      bibtex: `@inproceedings{geary2025computing,
  title     = {Computing Strategic Responses to Non-Linear Classifiers},
  author    = {Geary, Jack and Gao, Boyan and Gouk, Henry},
  booktitle = {EurIPS Workshop on Unifying Perspectives on Learning Biases},
  year      = {2025}
}`,
    },

    {
      id:      "geary2025strategic",
      featured: true,
      year:    2025,
      title:   "Strategic Classification with Randomised Classifiers",
      authors: ["Jack Geary", "Henry Gouk"],
      myName:  "Jack Geary",
      venue:   "Preprint · 2025",
      abstract: `We consider the problem of strategic classification, where a learner must build
        a model to classify agents based on features that have been strategically modified.
        Previous work has concentrated on deterministic classifiers. In contrast, we perform a
        theoretical analysis of an extension that allows the learner to produce a randomised
        classifier. We show that, under certain conditions, the optimal randomised classifier
        can achieve better accuracy than the optimal deterministic classifier, but under no
        conditions can it be worse. We also show that the excess risk of Strategic ERM over
        the class of randomised classifiers is bounded similarly to the deterministic case,
        with convergence rates matching the i.i.d. setting.`,
      tags:  ["Strategic Classification", "Randomised Classifiers", "Game Theory", "Learning Theory"],
      links: {
        arxiv: "https://arxiv.org/abs/2502.01313",
        pdf:   "",
        code:  "",
      },
      bibtex: `@article{geary2025strategic,
  title   = {Strategic Classification with Randomised Classifiers},
  author  = {Geary, Jack and Gouk, Henry},
  journal = {arXiv preprint arXiv:2502.01313},
  year    = {2025}
}`,
    },

    {
      id:      "geary2021active",
      featured: false,
      year:    2021,
      title:   "Active Altruism Learning and Information Sufficiency for Autonomous Driving",
      authors: ["Jack Geary", "Henry Gouk", "Subramanian Ramamoorthy"],
      myName:  "Jack Geary",
      venue:   "Preprint · 2021",
      abstract: `Safe interaction between vehicles requires the ability to choose actions that
        reveal the preferences of other vehicles. Since exploratory actions often do not directly
        contribute to an objective, a vehicle must also identify when it is appropriate to
        perform them. We demonstrate how Active Learning methods can incentivise an autonomous
        vehicle to choose actions that reveal information about the altruistic inclinations of
        another vehicle. We identify a property — Information Sufficiency — that a reward
        function should have in order to keep exploration from unnecessarily interfering with
        the pursuit of an objective, and empirically demonstrate its importance.`,
      tags:  ["Autonomous Driving", "Active Learning", "Game Theory"],
      links: {
        arxiv: "https://arxiv.org/abs/2110.04580",
        pdf:   "",
        code:  "https://github.com/Justme21/Altruistic-Planning",
      },
      bibtex: `@article{geary2021active,
  title   = {Active Altruism Learning and Information Sufficiency for Autonomous Driving},
  author  = {Geary, Jack and Gouk, Henry and Ramamoorthy, Subramanian},
  journal = {arXiv preprint arXiv:2110.04580},
  year    = {2021}
}`,
    },

    {
      id:      "geary2021resolving",
      featured: true,
      year:    2021,
      title:   "Resolving Conflict in Decision-Making for Autonomous Driving",
      authors: ["Jack Geary", "Subramanian Ramamoorthy", "Henry Gouk"],
      myName:  "Jack Geary",
      venue:   "Robotics: Science and Systems 2021",
      abstract: `Game-theoretic methods for autonomous driving are susceptible to an issue we
        call conflict — when vehicles disagree on the assumed interaction hierarchy, leading to
        sub-optimal or dangerous behaviour. We develop a theoretical framework for measuring
        conflict and apply it to several existing approaches. We then propose Augmented Altruism,
        a novel model of interaction in Stackelberg games that is less conflict-prone, and validate
        it with a human participants study showing it better explains human driving behaviour
        than existing game-theoretic models.`,
      tags:  ["Autonomous Driving", "Decision Making", "Game Theory"],
      links: {
        arxiv: "",
        pdf:   "https://arxiv.org/pdf/2009.06394",
        code:  "https://github.com/Justme21/Altruistic-Planning",
      },
      bibtex: `@inproceedings{geary2021resolving,
  title     = {Resolving Conflict in Decision-Making for Autonomous Driving},
  author    = {Geary, Jack and Ramamoorthy, Subramanian and Gouk, Henry},
  booktitle = {Robotics: Science and Systems},
  year      = {2021}
}`,
    },

    {
      id:      "geary2020altruistic",
      featured: false,
      year:    2020,
      title:   "Altruistic Decision-Making for Autonomous Driving with Sparse Rewards",
      authors: ["Jack Geary", "Henry Gouk"],
      myName:  "Jack Geary",
      venue:   "RSS 2020 · Interaction and Decision-Making in Autonomous-Driving Workshop",
      abstract: `Effective driving requires awareness of how one's actions affect other vehicles,
        and how others expect you to behave. Game-theoretic methods model this but can produce
        conflict when vehicles disagree on the interaction hierarchy. We define Area of Conflict
        (AoC) as a measurement for such conflict, propose a novel decision-making method that
        reduces AoC relative to existing altruistic approaches, and verify our analysis
        empirically in a simulated lane-change scenario.`,
      tags:  ["Autonomous Driving", "Decision Making", "Altruism"],
      links: {
        arxiv: "",
        pdf:   "https://arxiv.org/pdf/2007.07182",
        code:  "https://github.com/Justme21/Altruistic-Planning",
      },
      bibtex: `@inproceedings{geary2020altruistic,
  title     = {Altruistic Decision-Making for Autonomous Driving with Sparse Rewards},
  author    = {Geary, Jack and Gouk, Henry},
  booktitle = {RSS Workshop on Interaction and Decision-Making in Autonomous Driving},
  year      = {2020}
}`,
    },

  ], /* end of publications */


  /* ── Projects ──────────────────────────────────────────────────
     TO ADD A PROJECT: copy a block from { to }, and paste it.
     Set github or url to ""  to hide those links.            */

  projects: [
    {
      title:  "Strategic Classification Framework",
      desc:   `A modular Python framework for training classifiers that are robust to strategic
               agent behaviour — where individuals modify their features in response to the
               classifier's decisions. Each component (model, agent response, cost function,
               training loss) is swappable from the command line or Python API, making it easy
               to run new experiments without changing the codebase.`,
      tags:   ["Python", "Strategic Classification", "Game Theory"],
      github: "https://github.com/Justme21/strategic-classification-framework",
      url:    "",
    },
    /* To add a project, copy a block above (from { to },) and paste it here */
  ],


  /* ── Education ──────────────────────────────────────────────────
     TO ADD AN ENTRY: copy a block from { to }, and paste it.
     Set desc to ""  to omit the description line.           */

  education: [
    {
      dates:       "Jun 2024 — Present",
      degree:      "PhD in Machine Learning",
      institution: "University of Edinburgh",
      desc: `Supervised by <a href="https://www.henrygouk.com" target="_blank" rel="noopener">Henry Gouk</a>.
             Research on Strategic Classification and Randomised Classifiers.`,
    },
    {
      dates:       "Sep 2017 — Jun 2021",
      degree:      "MPhil in Informatics",
      institution: "University of Edinburgh",
      desc: "Decision-making in highly interactive environments, with a focus on autonomous driving.",
    },
    {
      dates:       "Sep 2016 — Jun 2017",
      degree:      "MSc in Artificial Intelligence",
      institution: "University of Edinburgh",
      desc: "",
    },
    {
      dates:       "Sep 2012 — Jun 2016",
      degree:      "BA in Mathematics",
      institution: "Trinity College Dublin",
      desc: "",
    },
  ],


  /* ── Work experience ────────────────────────────────────────────
     TO ADD AN ENTRY: copy a block from { to }, and paste it.
     Set companyUrl to ""  to show the company name without a link.
     Set desc to ""  to omit the description line.           */

  work: [
    {
      dates:      "Jun 2021 — Jun 2024",
      role:       "Data Scientist",
      company:    "Ripjar",
      companyUrl: "https://ripjar.com",
      desc: "Applied machine learning to financial crime detection and risk intelligence.",
    },
  ],

}; /* end of SITE */
