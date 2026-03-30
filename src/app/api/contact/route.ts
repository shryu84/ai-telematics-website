import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, fleetSize, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !fleetSize) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "AI Telematics <noreply@aitelematics.io>",
      to: "sales@aitelematics.io",
      replyTo: email,
      subject: `New Demo Request from ${firstName} ${lastName} — ${company}`,
      html: `
        <h2>New Demo Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e8f0;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e8f0;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e8f0;">Company</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${company}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e8f0;">Fleet Size</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${fleetSize}</td></tr>
          ${message ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e8f0;">Message</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${message}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
