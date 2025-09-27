Folder overview
- `index.html` — main landing page (uses partials).
- `partials/` — `header.html` and `footer.html` for shared components.
- `assets/css/` — styles (`styles.css`).
- `assets/js/` — scripts (`script.js`).
- `assets/images/` — general images.
- `assets/icons/` — small SVG icons.
- `assets/product-images/` — product photos and demos.

Run locally
Use Live Server, installed already

Notes
- Partials are loaded via `fetch` in `assets/js/script.js`. Serve over HTTP to avoid `file://` restrictions.
- Keep images in `assets/images/` or `assets/product-images/` depending on purpose.
- If adding icons, prefer SVG. Consider a single `icons.svg` sprite or individual files in `assets/icons/`.

Code style
- Keep CSS in `assets/css/styles.css` and JS in `assets/js/script.js`.
- Keep changes minimal and open a PR with a short description.
