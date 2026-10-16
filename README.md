# CodeShiksha — JavaScript Learning Platform Demo

An original educational-platform demonstration focused on learning JavaScript with Marathi explanations. The project retains the existing textbook PDF and existing Razorpay redirect flow while adding course discovery, sample lesson pages, a browser playground, and student-dashboard mockups.

> **Demo transparency:** CodeShiksha is an independent demonstration project inspired by common educational-platform UX patterns. It is not affiliated with Simplilearn. Additional courses, lessons, progress, login/signup, and contact interfaces are demo-only. No fake student reviews, placement claims, or learning metrics are presented as real.

## Stack

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS (existing configuration retained)
- Lucide icons
- Existing Razorpay payment-link redirect route

## Run locally

Use Node.js 20 LTS or a compatible version supported by the installed Next.js dependencies.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

Set the real payment URL in .env.local before testing purchase navigation:

```env
NEXT_PAYMENT_LINK=https://rzp.io/your-real-payment-link
```

Keep payment configuration server-only. Do not use a NEXT_PUBLIC_ variable for private payment configuration and never commit .env.local.

## Routes

| Route | Purpose |
| --- | --- |
| / | CodeShiksha homepage |
| /courses | Searchable and filterable course catalog |
| /courses/javascript-marathi | Featured course overview and curriculum |
| /learn/javascript-marathi/[lessonSlug] | Sample Marathi lesson pages with local completion state |
| /playground | Browser-sandboxed JavaScript playground |
| /resources | Searchable learning resources |
| /book/javascript-marathi | Existing textbook details and actual preview pages |
| /login, /signup | Demo-only account interfaces |
| /dashboard | Local browser demo progress, courses and saved resources |
| /about, /contact | Platform information and demo contact form |
| /privacy, /terms, /refund-policy | Policy drafts for review |
| /buy | Existing server-side Razorpay payment-link redirect |
| /success | Existing thank-you and PDF download page |

## Existing product assets and payment limitations

- The existing textbook is retained at public/JavaScript_for_Beginners_Marathi.pdf.
- Existing book covers and preview images in public/ are retained and reused.
- The /buy route validates the configured HTTPS Razorpay hostname and redirects to NEXT_PAYMENT_LINK.
- **Payment is not verified server-side in this project.** A return URL or thank-you page is not proof of successful payment.
- **The PDF is in the public directory.** Anyone who knows its URL can download it without a verified purchase. Paid-only access requires private storage, verified transaction entitlements, and a protected download endpoint.
- The actual configured payment-link price and the displayed product price should be checked for consistency before public sales. Do not treat this demonstration UI price as the authoritative checkout price.

## Demo-state and code execution notes

- Course catalogue search, category/level/language filtering, and sorting work on the local sample dataset.
- Sample lesson navigation works. Progress is saved in localStorage on the browser and is not associated with a real account or synchronized across devices.
- The dashboard's display name and saved-resource entries are illustrative local state.
- Login/signup forms validate inputs in the browser only. They do not authenticate users, create accounts, or send the fields to a server. Do not enter a real password.
- The contact form validates the input locally. No contact backend or form service is configured, so messages are not sent.
- The playground executes code inside a sandboxed browser iframe with scripts enabled but without same-origin privilege. This is a learning demonstration, not a hardened hostile-code execution service. It does not execute code on the server.
- Policy pages are drafts and are not legal advice. Review them for the actual business, checkout, privacy practices, and applicable law before publication.

## Checks

Run the commands below after installing dependencies:

```bash
npm run build
npm run lint
```

The original project did not include a dedicated test script or test framework. This GitHub-connected implementation was written through the repository connector; a local build/browser session was not available in this workflow, so no successful test run is claimed here.

## Deploy to Vercel

1. Import this repository/branch into Vercel or connect the existing Vercel project.
2. Set NEXT_PAYMENT_LINK in Vercel Environment Variables for the appropriate environments.
3. Keep secrets out of client bundles and Git history.
4. Deploy the branch preview and check the routes, mobile menu, filters, lessons, playground, and payment redirect.
5. Before taking real payments, reconcile displayed price with the checkout, implement server-side Razorpay verification/webhooks, and move the PDF to private storage if it is meant to be available only after payment.

## Design notes

The visual system uses a navy and blue palette, muted neutral backgrounds, a Devanagari-friendly font fallback, restrained motion, responsive grids, reusable navigation, footer, course cards, filters, curriculum, and form styles.
