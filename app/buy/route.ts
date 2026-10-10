import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const paymentLink = process.env.NEXT_PAYMENT_LINK?.trim();

  if (!paymentLink || paymentLink === "YOUR_PAYMENT_LINK_HERE") {
    return new Response(
      "<!doctype html><html lang='mr'><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Payment link not configured</title><body style='font-family:system-ui,sans-serif;max-width:600px;margin:12vh auto;padding:24px;line-height:1.6;color:#111827'><h1>Payment link अजून जोडलेली नाही</h1><p>वेबसाइटच्या मालकाने Vercel मध्ये NEXT_PAYMENT_LINK सेट करून नवीन deployment करणे आवश्यक आहे.</p><p><a href='/'>वेबसाइटवर परत जा</a></p></body></html>",
      { status: 503, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } }
    );
  }

  let destination: URL;
  try {
    destination = new URL(paymentLink);
  } catch {
    return new Response("Payment link configuration is invalid.", { status: 503 });
  }

  const host = destination.hostname.toLowerCase();
  const isRazorpayHost =
    host === "rzp.io" ||
    host === "razorpay.com" ||
    host.endsWith(".razorpay.com");

  if (destination.protocol !== "https:" || !isRazorpayHost) {
    return new Response("Payment link must be a valid HTTPS Razorpay URL.", { status: 503 });
  }

  return NextResponse.redirect(destination, { status: 303 });
}
