# JavaScript — सोप्या मराठीत

Premium, responsive landing page for a beginner-friendly Marathi JavaScript digital textbook.

## Tech stack
- Next.js 14 / React
- TypeScript
- Tailwind CSS
- Lucide icons

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Payment configuration
Set `NEXT_PUBLIC_PAYMENT_LINK` in `.env.local` to your payment checkout URL. Payment verification and secure PDF delivery are not implemented yet; configure your payment provider before accepting purchases.

## Preview assets
The `public/previews/` folder contains selected page previews rendered from the Marathi PDF.
