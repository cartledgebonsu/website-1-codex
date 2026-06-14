import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[0-9\s().-]{7,24}$/;

export async function POST(request: Request) {
  const data = await request.json();

  if (typeof data.website === "string" && data.website.trim()) {
    return NextResponse.json({ ok: false, message: "Spam check failed." }, { status: 400 });
  }

  if (!data.name || !data.email || !data.phone) {
    return NextResponse.json({ ok: false, message: "Required fields are missing." }, { status: 400 });
  }

  if (!emailPattern.test(String(data.email).trim())) {
    return NextResponse.json({ ok: false, message: "Invalid email address." }, { status: 400 });
  }

  if (!phonePattern.test(String(data.phone).trim())) {
    return NextResponse.json({ ok: false, message: "Invalid phone number." }, { status: 400 });
  }

  // Integration point:
  // 1. Send email with Resend, SendGrid, SMTP, or your enterprise mailbox provider.
  // 2. Store the inquiry in a database such as Supabase, PostgreSQL, Airtable, or CRM.
  // 3. Forward the lead to HubSpot, Zoho, Salesforce, or a private webhook.
  //
  // Example environment variables for production:
  // INQUIRY_TO_EMAIL=sales@homeycons.com
  // INQUIRY_WEBHOOK_URL=https://your-crm-webhook.example.com/inquiry

  return NextResponse.json({ ok: true, message: "Inquiry received." });
}
