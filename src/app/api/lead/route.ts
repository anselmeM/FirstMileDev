import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

const FEATURE_LABELS: Record<string, string> = {
  auth_email: "Email/password accounts",
  auth_profile: "Onboarding / profile",
  push_notif: "Push notifications",
  analytics: "Analytics",
  auth_social: "Apple/Google sign-in",
  chat: "Realtime chat / messaging",
  maps: "Maps / location",
  payments: "Payments / subscriptions (Stripe)",
  upload: "Photo/video upload",
  sync: "Offline sync",
  iap: "In-app purchases (IAP)",
};

function getCalculatorEmailHtml(email: string, metadata: any) {
  const { appType, complexity, timeline, features, estimatedCost } = metadata || {};
  
  const platformLabel = appType === "single" ? "Single Platform (iOS or Android)" : appType === "dual" ? "Dual Platform (iOS + Android)" : "Not specified";
  const complexityLabel = complexity ? complexity.charAt(0).toUpperCase() + complexity.slice(1) : "Not specified";
  const timelineLabel = timeline === "4" ? "4-6 Weeks (Aggressive Build)" : timeline === "8" ? "8-12 Weeks (Standard Build)" : timeline === "12" ? "12+ Weeks (Balanced Build)" : "Not specified";
  
  const featuresList = Array.isArray(features) && features.length > 0
    ? features.map(f => `<li>${FEATURE_LABELS[f] || f}</li>`).join("")
    : "<li>No custom features selected for V1</li>";

  const formattedCost = estimatedCost ? `$${estimatedCost.toLocaleString()}` : "Contact us for pricing";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Your MVP Cost Estimate</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f9f9; color: #333333; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eeeeee; }
        .header { background-color: #111111; padding: 32px; text-align: center; border-bottom: 3px solid #FF3B3F; }
        .header h1 { color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 40px 32px; }
        .welcome-text { font-size: 16px; line-height: 1.6; color: #555555; margin-bottom: 32px; }
        .estimate-box { background-color: #fafafa; border: 2px dashed #eeeeee; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px; }
        .estimate-title { font-size: 12px; font-weight: 900; text-transform: uppercase; color: #FF3B3F; letter-spacing: 2px; margin-bottom: 8px; }
        .estimate-value { font-size: 48px; font-weight: 900; color: #111111; margin: 0; letter-spacing: -1px; }
        .section-title { font-size: 14px; font-weight: 900; text-transform: uppercase; color: #111111; border-bottom: 2px solid #111111; padding-bottom: 8px; margin-top: 32px; margin-bottom: 16px; letter-spacing: 1px; }
        .parameter-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .parameter-table td { padding: 12px 0; border-bottom: 1px solid #eeeeee; font-size: 14px; }
        .parameter-table td.label { font-weight: bold; color: #777777; width: 35%; }
        .parameter-table td.value { color: #111111; text-align: right; font-weight: bold; }
        .features-list { padding-left: 20px; margin: 0; }
        .features-list li { font-size: 14px; color: #333333; margin-bottom: 8px; line-height: 1.4; }
        .cta-container { text-align: center; margin-top: 40px; }
        .cta-btn { display: inline-block; background-color: #FF3B3F; color: #ffffff !important; font-size: 15px; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 8px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 8px rgba(255, 59, 63, 0.2); }
        .footer { background-color: #fafafa; padding: 24px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee; }
        .footer a { color: #FF3B3F; text-decoration: none; }
      </style>
    </head>
    <body>
      <div style="padding: 20px 0; background-color: #f3f4f6;">
        <div class="wrapper">
          <div class="header">
            <h1>FirstMileDev</h1>
          </div>
          <div class="content">
            <p class="welcome-text">
              Hello,<br><br>
              Thank you for using the FirstMileDev MVP Cost Calculator. Based on your project parameters, we have compiled your custom development estimate.
            </p>
            
            <div class="estimate-box">
              <div class="estimate-title">Estimated Development Budget</div>
              <div class="estimate-value">${formattedCost}</div>
            </div>
            
            <div class="section-title">Project Parameters</div>
            <table class="parameter-table">
              <tr>
                <td class="label">Target Platform</td>
                <td class="value">${platformLabel}</td>
              </tr>
              <tr>
                <td class="label">App Complexity</td>
                <td class="value">${complexityLabel}</td>
              </tr>
              <tr>
                <td class="label">Target Timeline</td>
                <td class="value">${timelineLabel}</td>
              </tr>
            </table>
            
            <div class="section-title">Selected Features</div>
            <ul class="features-list">
              ${featuresList}
            </ul>
            
            <p class="welcome-text" style="margin-top: 32px;">
              Please note that this is a ballpark starting range to help you scope your development resources. To lock in this pricing and build a complete high-fidelity discovery plan, we recommend scheduling a direct roadmap call with our principal architect.
            </p>
            
            <div class="cta-container">
              <a href="https://calendly.com/anselme-firstmiledev?hide_gdpr_banner=1&primary_color=ff3b3f" class="cta-btn" target="_blank">Book Your Roadmap Call</a>
            </div>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} FirstMileDev. All rights reserved.<br>
            If you have any questions, reach out to us at <a href="mailto:hello@firstmiledev.com">hello@firstmiledev.com</a>.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function getChecklistEmailHtml() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Your Startup Validation Checklist</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f9f9; color: #333333; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eeeeee; }
        .header { background-color: #111111; padding: 32px; text-align: center; border-bottom: 3px solid #FF3B3F; }
        .header h1 { color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 40px 32px; }
        .welcome-text { font-size: 16px; line-height: 1.6; color: #555555; margin-bottom: 32px; }
        .checklist-item { margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #f0f0f0; }
        .checklist-item:last-child { border-bottom: none; }
        .checklist-title { font-size: 16px; font-weight: bold; color: #111111; margin-bottom: 6px; }
        .checklist-title span { color: #FF3B3F; font-weight: 900; margin-right: 8px; }
        .checklist-desc { font-size: 14px; color: #666666; line-height: 1.5; margin: 0; }
        .cta-container { text-align: center; margin-top: 40px; }
        .cta-btn { display: inline-block; background-color: #FF3B3F; color: #ffffff !important; font-size: 15px; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 8px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 8px rgba(255, 59, 63, 0.2); }
        .footer { background-color: #fafafa; padding: 24px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee; }
        .footer a { color: #FF3B3F; text-decoration: none; }
      </style>
    </head>
    <body>
      <div style="padding: 20px 0; background-color: #f3f4f6;">
        <div class="wrapper">
          <div class="header">
            <h1>FirstMileDev</h1>
          </div>
          <div class="content">
            <p class="welcome-text">
              Hello,<br><br>
              Thank you for downloading our <strong>Startup Validation Checklist</strong>! We've helped over 50 founders validate their ideas and build their MVPs.
              <br><br>
              Here is your step-by-step guide to verifying user demand before writing any code:
            </p>
            
            <div class="checklist-item">
              <div class="checklist-title"><span>1.</span> Problem Verification</div>
              <p class="checklist-desc">Interview at least 15 target users. Do not pitch your product—just ask about their current workarounds and verify if this problem is in their top 3 pain points.</p>
            </div>
            
            <div class="checklist-item">
              <div class="checklist-title"><span>2.</span> Competitor Matrix Mapping</div>
              <p class="checklist-desc">Document every solution they currently use (including Excel and manual hacks). Identify the gaps where existing systems fall short.</p>
            </div>
            
            <div class="checklist-item">
              <div class="checklist-title"><span>3.</span> Smoke Testing & Landing Page</div>
              <p class="checklist-desc">Build a single-page value proposition landing page. Measure customer intent by tracking click rates and email registrations for early access.</p>
            </div>
            
            <div class="checklist-item">
              <div class="checklist-title"><span>4.</span> Minimum Viable Experience (MVE) Definition</div>
              <p class="checklist-desc">Strip your scope down to the absolute core flow. What is the single feature that resolves the primary pain point? Build that and nothing else.</p>
            </div>
            
            <p class="welcome-text" style="margin-top: 32px;">
              Ready to take the next step and design your technical blueprint? Book a free discovery session with us and we'll help map out your architectural roadmap.
            </p>
            
            <div class="cta-container">
              <a href="https://calendly.com/anselme-firstmiledev?hide_gdpr_banner=1&primary_color=ff3b3f" class="cta-btn" target="_blank">Schedule Validation Call</a>
            </div>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} FirstMileDev. All rights reserved.<br>
            If you have any questions, reach out to us at <a href="mailto:hello@firstmiledev.com">hello@firstmiledev.com</a>.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function getWelcomeEmailHtml() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Welcome to FirstMileDev</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f9f9; color: #333333; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eeeeee; }
        .header { background-color: #111111; padding: 32px; text-align: center; border-bottom: 3px solid #FF3B3F; }
        .header h1 { color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 40px 32px; }
        .welcome-text { font-size: 16px; line-height: 1.6; color: #555555; margin-bottom: 32px; }
        .cta-container { text-align: center; margin-top: 40px; }
        .cta-btn { display: inline-block; background-color: #FF3B3F; color: #ffffff !important; font-size: 15px; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 8px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 8px rgba(255, 59, 63, 0.2); }
        .footer { background-color: #fafafa; padding: 24px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee; }
        .footer a { color: #FF3B3F; text-decoration: none; }
      </style>
    </head>
    <body>
      <div style="padding: 20px 0; background-color: #f3f4f6;">
        <div class="wrapper">
          <div class="header">
            <h1>FirstMileDev</h1>
          </div>
          <div class="content">
            <p class="welcome-text">
              Hello,<br><br>
              Thank you for subscribing to FirstMileDev! We're excited to share our architecture insights, startup validation frameworks, and latest live-development sessions with you.
              <br><br>
              If you have a startup idea you'd like to validate or want to discuss custom MVP development, we are ready to help.
            </p>
            
            <div class="cta-container">
              <a href="https://calendly.com/anselme-firstmiledev?hide_gdpr_banner=1&primary_color=ff3b3f" class="cta-btn" target="_blank">Book Your Free Call</a>
            </div>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} FirstMileDev. All rights reserved.<br>
            If you have any questions, reach out to us at <a href="mailto:hello@firstmiledev.com">hello@firstmiledev.com</a>.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function getLabHookEmailHtml() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Your $55k FinTech MVP Tech Stack Breakdown</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f9f9; color: #333333; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eeeeee; }
        .header { background-color: #111111; padding: 32px; text-align: center; border-bottom: 3px solid #FF3B3F; }
        .header h1 { color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 40px 32px; }
        .welcome-text { font-size: 16px; line-height: 1.6; color: #555555; margin-bottom: 32px; }
        .tech-box { background-color: #fafafa; border: 1px solid #eeeeee; border-radius: 12px; padding: 24px; margin-bottom: 32px; }
        .tech-item { margin-bottom: 16px; }
        .tech-item:last-child { margin-bottom: 0; }
        .tech-title { font-size: 14px; font-weight: 900; text-transform: uppercase; color: #FF3B3F; letter-spacing: 1px; margin-bottom: 4px; }
        .tech-val { font-size: 16px; font-weight: bold; color: #111111; }
        .section-title { font-size: 14px; font-weight: 900; text-transform: uppercase; color: #111111; border-bottom: 2px solid #111111; padding-bottom: 8px; margin-top: 32px; margin-bottom: 16px; letter-spacing: 1px; }
        .cta-container { text-align: center; margin-top: 40px; }
        .cta-btn { display: inline-block; background-color: #FF3B3F; color: #ffffff !important; font-size: 15px; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 8px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 8px rgba(255, 59, 63, 0.2); }
        .footer { background-color: #fafafa; padding: 24px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee; }
        .footer a { color: #FF3B3F; text-decoration: none; }
      </style>
    </head>
    <body>
      <div style="padding: 20px 0; background-color: #f3f4f6;">
        <div class="wrapper">
          <div class="header">
            <h1>FirstMileDev</h1>
          </div>
          <div class="content">
            <p class="welcome-text">
              Hello,<br><br>
              Thank you for requesting our <strong>$55k FinTech MVP Tech Stack Breakdown</strong>! This is the exact production-ready architecture and tooling we used to build a robust, scalable FinTech platform that successfully secured $55,000 in early-stage funding.
            </p>
            
            <div class="tech-box">
              <div class="tech-item">
                <div class="tech-title">Mobile Frontend Framework</div>
                <div class="tech-val">React Native & Expo (TypeScript) + NativeWind</div>
              </div>
              <div class="tech-item">
                <div class="tech-title">State Management & Querying</div>
                <div class="tech-val">React Query (TanStack) & Zustand</div>
              </div>
              <div class="tech-item">
                <div class="tech-title">Backend API & Database</div>
                <div class="tech-val">Supabase (PostgreSQL, Auth, Realtime Sync)</div>
              </div>
              <div class="tech-item">
                <div class="tech-title">Payment Processor</div>
                <div class="tech-val">Stripe API (Subscriptions, KYC verification flow)</div>
              </div>
              <div class="tech-item">
                <div class="tech-title">Hosting & Serverless Functions</div>
                <div class="tech-val">Vercel & AWS Edge Functions</div>
              </div>
              <div class="tech-item">
                <div class="tech-title">Monitoring & Diagnostics</div>
                <div class="tech-val">Sentry (Error tracking) & Axiom (Structured logs)</div>
              </div>
            </div>
            
            <div class="section-title">Key Architectural Decisions</div>
            <p class="welcome-text" style="margin-top: 0; font-size: 14px; line-height: 1.5;">
              <strong>1. React Native + Expo:</strong> Delivered a unified codebase for iOS & Android with near-native performance, reducing development time by 45%.<br><br>
              <strong>2. Supabase Serverless PG:</strong> Allowed us to bypass building a heavy REST API from scratch, leveraging realtime listeners and auto-generated Row Level Security (RLS) for bank-grade data isolation.<br><br>
              <strong>3. React Query Caching:</strong> Kept the mobile app highly responsive and reduced database reads by caching user sessions and transactional histories.
            </p>
            
            <p class="welcome-text" style="margin-top: 32px;">
              Want to see how this architecture translates to your specific startup concept? Schedule a direct roadmap call to review your app's technical design.
            </p>
            
            <div class="cta-container">
              <a href="https://calendly.com/anselme-firstmiledev?hide_gdpr_banner=1&primary_color=ff3b3f" class="cta-btn" target="_blank">Discuss Your Architecture</a>
            </div>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} FirstMileDev. All rights reserved.<br>
            If you have any questions, reach out to us at <a href="mailto:hello@firstmiledev.com">hello@firstmiledev.com</a>.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source, metadata } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    console.log(`[Lead Capture] New lead from ${source}: ${email}`, metadata);

    // If Resend is configured, send the emails
    if (resend) {
      try {
        const emailSends = [];

        // 1. Send admin notification email
        emailSends.push(
          resend.emails.send({
            from: "FirstMileDev <onboarding@resend.dev>",
            to: "anselme@firstmildev.ca",
            subject: `New Lead: ${source.replace("-", " ")}`,
            html: `
              <h1>New Lead Captured</h1>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Source:</strong> ${source}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
              <hr />
              <pre>${JSON.stringify(metadata, null, 2)}</pre>
            `,
          }).catch(err => {
            console.error("Failed to send admin email notification:", err);
          })
        );

        // 2. Send user-facing estimate or checklist email
        let userSubject = "Welcome to FirstMileDev";
        let userHtml = "";

        if (source === "calculator") {
          userSubject = "Your Startup MVP Cost Estimate - FirstMileDev";
          userHtml = getCalculatorEmailHtml(email, metadata);
        } else if (source === "exit-intent" || source === "lead-magnet") {
          userSubject = "Your Free Startup Validation Checklist - FirstMileDev";
          userHtml = getChecklistEmailHtml();
        } else if (source === "lab-hook") {
          userSubject = "Your $55k FinTech MVP Tech Stack Breakdown - FirstMileDev";
          userHtml = getLabHookEmailHtml();
        } else {
          userHtml = getWelcomeEmailHtml();
        }

        emailSends.push(
          resend.emails.send({
            from: "FirstMileDev <onboarding@resend.dev>",
            to: email,
            subject: userSubject,
            html: userHtml,
          }).catch(err => {
            console.error("Failed to send email to user:", err);
          })
        );

        // Wait for both email operations to settle in parallel
        await Promise.all(emailSends);

      } catch (e) {
        console.error("Resend execution error:", e);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: resend ? "Lead captured and email sent" : "Lead logged (Resend not configured)" 
    });

  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
