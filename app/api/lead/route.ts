import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json();

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // ── Log the lead ────────────────────────────────────────────
    // In production, replace this with your preferred backend:
    //  • SendGrid API call
    //  • Supabase insert
    //  • Webhook to CRM (HubSpot, Salesforce, etc.)
    //  • Cal.com / Calendly redirect
    console.log("──────────────── NEW LEAD ────────────────");
    console.log(`Name:    ${body.name}`);
    console.log(`Email:   ${body.email}`);
    console.log(`Company: ${body.company || "—"}`);
    console.log(`Message: ${body.message}`);
    console.log(`Time:    ${new Date().toISOString()}`);
    console.log("──────────────────────────────────────────");

    // ── Optional: forward to an external webhook ────────────
    // Uncomment and set LEAD_WEBHOOK_URL in .env.local to enable
    //
    // const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       ...body,
    //       submittedAt: new Date().toISOString(),
    //       source: "regicore.com",
    //     }),
    //   });
    // }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
