# Portfolio

A plain HTML, CSS, and JavaScript portfolio with a sticky header, responsive hero,
About section, tools section, services slider, contact form, and footer.

## Files

- `index.html` — document metadata and links to the stylesheet, script, and favicon.
- `css/fonts.css` — local Helvetica Now Display font faces.
- `css/styles.css` — basic styles and a starting point for future styling.
- `css/hero.css` — header, mobile menu, hero layout, and floating decorations.
- `css/about.css` — About biography, service icons, and fact cards.
- `css/tools.css` — tools grid, logo badges, and mobile contact button.
- `css/services.css` — responsive Swiper service cards and controls.
- `css/contact.css` — contact form and desktop/mobile background decorations.
- `css/footer.css` — responsive footer, navigation, and social icons.
- `js/navigation.js` — active header links on section clicks and scrolling.
- `js/contact.js` — email validation feedback and Formspree submission handling.
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

## Header and hero

The header switches to a hamburger menu at `980px` and below. The menu closes on
Escape, outside clicks, or link clicks. Decorative circles float gently, with
animation disabled when reduced motion is preferred.

The hero uses the existing global font classes, color variables, and `.max-w`
container. Desktop and mobile portraits switch through a `<picture>` element.
The About, Services, and Contact links target their implemented sections.
The Projects link targets a future section with ID `projects`.
Services is also available in the mobile menu. The header highlights the current
section while scrolling; the tools section remains under About.

## Footer social links

Add `href="https://your-profile-url"` to each `.footer-social` anchor in
`index.html` when your Facebook, Instagram, and LinkedIn URLs are ready.
The icons are displayed without links until those URLs are added.

## Service cards

The `services` section contains four cards written directly in `index.html`.
Edit or duplicate its `.service-card` elements to update the content; no JSON
renderer is used. Images are in `assets/images/slider-1.png` through `slider-4.png`.
Swiper shows three cards on desktop and a partial next card on mobile. Use its
arrows, pagination, touch gestures, or keyboard arrows to move through the cards.

## Contact email notifications

The contact form is prepared for [Formspree](https://formspree.io/html/). Delivery
requires a real endpoint; an unconfigured form shows an unavailable message and
does not send a request.

1. Create a Formspree account and verify the email address where you want notifications.
2. Create a new form and select that email as its notification recipient.
3. Copy its endpoint, such as `https://formspree.io/f/yourFormId`.
4. Copy `.env.example` to `.env.local` and paste the endpoint after `VITE_FORMSPREE_ENDPOINT=`.
5. Restart `npm run dev`. For publishing, set the same environment variable in your
   hosting build settings, then rebuild and deploy.
6. Submit your own email once to verify the Formspree submission and inbox notification.

The endpoint is a public form identifier, not a secret API key. No private email
service keys are needed in the browser. This design collects the visitor's email
address only, so you can reply and ask about their project; it does not collect
a written message. Sending confirmation emails to visitors is a separate
Formspree feature from receiving submission notifications yourself.
