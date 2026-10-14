# Digital Ganesh Website

A server-rendered Node.js marketing website with React/Tailwind Blog pages. The Blog replaces the former Case Studies and Resources sections; legacy URLs redirect to `/blog` or their matching article.

## Run locally

Requires Node.js 20 or newer.

```powershell
npm install
npm start
```

Open `http://localhost:3000/blog`. `npm start` builds the Blog bundles, then starts the server. After changing files in `src/blog/`, run `npm run build` and restart `node server.js`. Run the checks with `npm run check`.

## Content and design

- Service and article bodies: `src/content.js`
- Blog order, excerpts, dates, and cover paths: `src/blog/data.js`
- Blog React components and interactions: `src/blog/components.jsx`
- Blog styles: `src/blog/blog.css` (Tailwind plus scoped editorial rules)
- Generated Blog covers: `public/assets/blog/*.webp`
- Shared layout, navigation, routes, homepage, contact, and privacy: `server.js`
- Existing site styles and interactions: `public/styles.css` and `public/app.js`

`npm run build` compiles `dist/blog-server.cjs`, `public/blog.js`, and `public/blog.css`. These built files are included so direct `node server.js` also works in a checked-out project.

## Newsletter and consultation submissions

Both forms submit to FormSubmit for `aimarketingwithganesh@gmail.com`. The consultation form uses the AJAX endpoint when JavaScript runs and falls back to a standard FormSubmit POST otherwise; its `_url` field identifies the live contact page. Newsletter signup requires an explicit consent checkbox and sends a request to the inbox; there is **no automated mailing list yet**. Handle subscribers and opt-outs manually until a mailing-list service is connected. FormSubmit may send a one-time activation email after the first submission; **click its confirmation link in the recipient inbox before relying on live delivery**, and check spam if it does not appear. The Privacy page describes this flow.

## Deployment

Deploy to a Node.js 20+ host with `npm start` as the start command. Set `SITE_URL` to the final HTTPS domain and `PORT` if your host does not supply one. Before launch, verify the privacy and retention language, activate FormSubmit, and replace the publication/migration dates if you have the original article dates.
