# JavaScript — सोप्या मराठीत | Landing Page

Responsive Next.js 14 + TypeScript landing page for the Marathi JavaScript digital textbook.

## Run locally

1. Install Node.js 20 LTS.
2. Run `npm install`.
3. Create `.env.local` in the project root.
4. Add the server-only payment link:
   ```env
   NEXT_PAYMENT_LINK=https://rzp.io/your-real-payment-link
   ```
   Use the actual HTTPS Razorpay payment link from your account. Never use a `NEXT_PUBLIC_` variable for private payment configuration.
5. Run `npm run dev` and open `http://localhost:3000`.

## Payment and PDF delivery security

- The `/buy` route validates the configured destination and redirects to Razorpay.
- A redirect to a thank-you page is **not proof of payment**. Before selling, implement server-side Razorpay payment verification (preferably using a signed webhook and/or verification of the payment/order through Razorpay's API).
- The PDF currently lives under `public/`, so anyone with its URL may download it directly. For paid-only access, move it to private storage and deliver it through an authenticated endpoint only after verifying payment.
- Keep payment secrets in Vercel Environment Variables and local `.env.local`; never commit secrets.

## Previews

Selected page previews are stored in `public/previews/` and displayed on the landing page. Confirm all referenced preview filenames exist before deployment.

## Deploy

Push to GitHub and import the repository into Vercel. Configure `NEXT_PAYMENT_LINK` in the Vercel project's server-side environment variables, then redeploy. Run `npm run build` locally or in CI before launch.
