# Portfolio

A plain HTML, CSS, and JavaScript foundation. The HTML body is intentionally empty.

## Files

- `index.html` — document metadata and links to the stylesheet, script, and favicon.
- `css/fonts.css` — local Helvetica Now Display font faces.
- `css/styles.css` — basic styles and a starting point for future styling.
- `js/main.js` — starting point for future interactions.
- `js/swiper.js` — Swiper slider setup and styles.
- `assets/images/` — photos and other images.
- `assets/icons/` — favicon and future icons.
- `assets/fonts/` — local font files.

## Local development

Install dependencies with `npm install`, then run `npm run dev` to start a local
preview with automatic updates when files change. Open the URL printed in the terminal.

- `npm run build` — create a production build in `dist/`.
- `npm run preview` — serve the production build locally after building it.

Use the local server when adding JavaScript modules so the browser can load them correctly.

## Fonts

Helvetica Now Display is the default body font. Use weights `300` (light), `400`
(regular), `500` (medium), or `700` (bold), with `font-style: italic` for their italic
variants. Every face uses `font-display: swap`.

## Slider

Swiper initializes each `.swiper` container when the page loads. Inside it, use a
`.swiper-wrapper` containing `.swiper-slide` elements. Optional controls belong
inside the same container: `.swiper-button-prev`, `.swiper-button-next`, and
`.swiper-pagination`. Keyboard navigation and accessibility support are enabled.

Adjust slider options in `js/swiper.js`. See the
[Swiper setup guide](https://swiperjs.com/get-started) for the markup structure.
