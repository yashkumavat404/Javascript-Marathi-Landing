# JavaScript — सोप्या मराठीत | Landing Page

Responsive Next.js 14 + TypeScript landing page for the Marathi JavaScript digital textbook.

## Run locally

1. Install Node.js 18.17+ (Node 20 LTS recommended).
2. In this folder run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Replace `NEXT_PUBLIC_PAYMENT_LINK` with your actual checkout/payment link.
5. Run `npm run dev` and open `http://localhost:3000`.

## Before launch

- Configure `NEXT_PUBLIC_PAYMENT_LINK` in `.env.local` and in your deployment platform's environment settings.
- Connect a payment provider and verify payments server-side before delivering the PDF. This template does not implement payment verification or secure delivery.
- Configure your domain and production metadata.
- Review the actual product and delivery terms before publishing.

## Actual PDF previews

`public/previews/` contains selected page images rendered from the provided Marathi PDF. The PDF itself is not exposed as a public download from this landing page.

## Deploy

Push the project to GitHub and import it into Vercel, or use any compatible Node.js host. Add `NEXT_PUBLIC_PAYMENT_LINK` to the project's environment variables before deploying.
