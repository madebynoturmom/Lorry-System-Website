# Lorry System — Barebone Website

This is a barebones HTML/CSS/JS scaffold for the Lorry System landing page.

Structure
- index.html
- partials/header.html
- partials/footer.html
- assets/
  - css/styles.css
  - js/script.js
  - images/ (place your images here)

Quick start
1. From the project root, run a simple static server (recommended):

   Python 3:
   ```bash
   python3 -m http.server 8000
   ```

   Then open http://localhost:8000 in your browser.

Alternatively, if you or your brother prefer npm, there is a small `package.json` with a `start` script that will try `http-server` and fall back to Python:

```bash
npm start
```

Notes
- Partials are loaded via fetch; serving over HTTP is required in most browsers for fetch to work (file:// may fail).
- Replace the inline SVG placeholder in the hero with a real image in `assets/images/`.

Next steps
- Add more pages and reuse `partials/` across them.
- Add a build step (optional) if you want templating or preprocessing.

For contributors, see `CONTRIBUTING.md` for onboarding instructions and conventions.
