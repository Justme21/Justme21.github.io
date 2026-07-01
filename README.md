# Jack Geary — Personal Website

Personal/academic site for Jack Geary, served at `justme21.github.io`.

## How it works

The entire live site is the plain HTML/CSS/JS in [`public/`](public/). There is no build
step — [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) uploads `public/` as-is
to GitHub Pages on every push to `main`.

- `public/data.js` — all editable content (bio, publications, projects, etc.). **This is the
  only file you should need to touch to update the site.**
- `public/index.html`, `public/publications.html` — page structure, reads from `data.js`.
- `public/main.js` — rendering logic.
- `public/style.css` — styling.

Any other standalone page (e.g. a redirect page for a poster QR code) can be added directly
to `public/` as its own `.html` file.

## Local preview

```bash
cd public && python3 -m http.server 8000
```

Then open `http://localhost:8000`.

MIT © Jack Geary
