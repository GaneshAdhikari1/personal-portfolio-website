# Digital Ganesh Portfolio

A dependency-free, server-rendered Node.js portfolio for Ganesh Adhikari. It includes real routes for services, resources, case studies, contact, privacy, and a helpful 404 page.

## Run locally

Node.js 20 or newer is the only requirement.

```powershell
node server.js
```

Open `http://localhost:3000`.

Run the automated checks with:

```powershell
node scripts/check.js
```

## Content editing

- Service, article, and case-study content: `src/content.js`
- Biography, homepage, contact, and privacy copy: `server.js`
- Design system and responsive layouts: `public/styles.css`
- Interactions and form UX: `public/app.js`
- Current primary logo: `public/assets/digital-ganesh-logo-2026.png` (with earlier SVG variants retained in the asset library)
- Active retouched portraits: `public/assets/ganesh-hero-retouched.webp` and `public/assets/ganesh-about-retouched.webp`

## Consultation submissions

The form submits to FormSubmit's AJAX endpoint for `aimarketingwithganesh@gmail.com`. Browser validation, an invisible honeypot, inline loading feedback, and success/error messages are included. FormSubmit formats each consultation request as a table and emails it to that inbox.

FormSubmit sends a one-time activation email after the first submission. Open that email and confirm the form before live submissions can be delivered.

## Deployment

Deploy to any Node.js 20+ host with a persistent filesystem, using `node server.js` as the start command. Set:

- `SITE_URL` to the final `https://` domain for canonical links, social metadata, robots, and the sitemap.
- `PORT` if the host does not inject it automatically.

Before launch, replace the profile placeholder, add verified biography/experience details, confirm the privacy notice, and replace the illustrative case studies when authenticated client work is available.
