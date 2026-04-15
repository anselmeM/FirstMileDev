import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source, metadata } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    console.log(`[Lead Capture] New lead from ${source}: ${email}`, metadata);

    // If Resend is configured, send the email
    if (resend) {
      try {
        await resend.emails.send({
          from: "FirstMileDev <onboarding@resend.dev>", // Replace with your verified domain
          to: "hello@firstmiledev.com",
          subject: `New Lead: ${source.replace("-", " ")}`,
          html: `
            <h1>New Lead Captured</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <hr />
            <pre>${JSON.stringify(metadata, null, 2)}</pre>
          `,
        });
      } catch (e) {
        console.error("Resend error:", e);
      }
    }

    // In development or if no key is present, we still return success 
    // so the UI works correctly
    return NextResponse.json({ 
      success: true, 
      message: resend ? "Lead captured and email sent" : "Lead logged (Resend not configured)" 
    });

  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
