
import { Resend } from "resend";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  details?: unknown;
};

type ContactDetails = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  details: string;
};

const BRAND = {
  purple: "#44345D",
  pink: "#EFB9C1",
  black: "#090909",
  offWhite: "#F7F7F5",
  muted: "#6D6872",
  border: "#E6E1E9",
};

function cleanString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";

  return value
    .replace(/\0/g, "")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

function getContactDetails(body: ContactPayload): ContactDetails {
  return {
    name: cleanString(body.name, 100),
    company: cleanString(body.company, 150),
    email: cleanString(body.email, 254),
    phone: cleanString(body.phone, 40),
    service: cleanString(body.service, 150),
    details: cleanString(body.details, 5000),
  };
}

function validateContact(data: ContactDetails): string | null {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!data.name || !data.email || !data.service || !data.details) {
    return "Please complete all required fields.";
  }

  if (!emailPattern.test(data.email)) {
    return "Please enter a valid email address.";
  }

  if (data.details.length < 10) {
    return "Please provide a little more detail about your project.";
  }

  return null;
}

function emailLayout(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <title>Emarq Marketing &amp; Production</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.offWhite};font-family:Arial,Helvetica,sans-serif;color:${BRAND.black};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    Emarq Marketing &amp; Production — thoughtful strategy, creative ideas and meaningful brand experiences.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.offWhite};">
    <tr>
      <td align="center" style="padding:32px 14px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;background-color:#ffffff;border:1px solid ${BRAND.border};">

          <tr>
            <td style="padding:26px 30px;border-bottom:1px solid ${BRAND.border};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:22px;font-weight:700;letter-spacing:-1px;color:${BRAND.purple};">
                    emarq<span style="color:${BRAND.pink};">.</span>
                  </td>
                  <td align="right" style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${BRAND.muted};">
                    Marketing &amp; Production
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="height:4px;background-color:${BRAND.purple};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          ${content}

          <tr>
            <td style="padding:24px 30px;background-color:${BRAND.offWhite};border-top:1px solid ${BRAND.border};">
              <p style="margin:0 0 8px;font-size:12px;line-height:1.7;color:${BRAND.muted};">
                Strategy. Creativity. Production.
              </p>
              <p style="margin:0;font-size:11px;line-height:1.7;color:${BRAND.muted};">
                Emarq Marketing &amp; Production · Dubai, UAE
              </p>
              <p style="margin:8px 0 0;font-size:11px;line-height:1.7;">
                <a href="mailto:info@emarq.ae" style="color:${BRAND.purple};text-decoration:none;">info@emarq.ae</a>
                &nbsp;·&nbsp;
                <a href="https://wa.me/971521569430" style="color:${BRAND.purple};text-decoration:none;">WhatsApp</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function adminEmail(data: ContactDetails): string {
  const name = escapeHtml(data.name);
  const company = escapeHtml(data.company || "Not provided");
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone || "Not provided");
  const service = escapeHtml(data.service);
  const details = escapeHtml(data.details).replace(/\n/g, "<br />");

  return emailLayout(`
    <tr>
      <td style="padding:36px 30px 20px;">
        <p style="margin:0 0 14px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BRAND.purple};">
          Website enquiry
        </p>
        <h1 style="margin:0;font-size:32px;line-height:1.15;letter-spacing:-1.2px;font-weight:600;">
          A new project<br />starts here.
        </h1>
        <p style="margin:16px 0 0;font-size:14px;line-height:1.8;color:${BRAND.muted};">
          A visitor has submitted a project enquiry through the Emarq website.
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding:12px 30px 30px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr>
            <td colspan="2" style="padding:13px 14px;background-color:${BRAND.offWhite};font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.purple};">
              Contact information
            </td>
          </tr>

          <tr>
            <td width="35%" style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.muted};">Name</td>
            <td style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:13px;font-weight:600;color:${BRAND.black};">${name}</td>
          </tr>
          <tr>
            <td style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.muted};">Company</td>
            <td style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:13px;color:${BRAND.black};">${company}</td>
          </tr>
          <tr>
            <td style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.muted};">Email</td>
            <td style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:13px;overflow-wrap:anywhere;">
              <a href="mailto:${email}" style="color:${BRAND.purple};text-decoration:none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.muted};">Phone</td>
            <td style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:13px;color:${BRAND.black};">${phone}</td>
          </tr>
          <tr>
            <td style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.muted};">Service</td>
            <td style="padding:14px;border-bottom:1px solid ${BRAND.border};font-size:13px;font-weight:600;color:${BRAND.purple};">${service}</td>
          </tr>
        </table>

        <div style="margin-top:26px;padding:20px;background-color:${BRAND.offWhite};border-left:3px solid ${BRAND.pink};">
          <h2 style="margin:0 0 12px;font-size:15px;font-weight:600;">Project details</h2>
          <p style="margin:0;font-size:13px;line-height:1.9;color:${BRAND.muted};overflow-wrap:anywhere;">${details}</p>
        </div>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
          <tr>
            <td bgcolor="${BRAND.purple}" style="padding:14px 20px;">
              <a href="mailto:${email}" style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#ffffff;text-decoration:none;">
                Reply to enquiry &rarr;
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `);
}

function customerEmail(data: ContactDetails): string {
  const name = escapeHtml(data.name);
  const service = escapeHtml(data.service);

  return emailLayout(`
    <tr>
      <td style="padding:42px 30px 16px;">
        <div style="display:inline-block;padding:7px 11px;background-color:${BRAND.offWhite};font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.purple};">
          Enquiry received
        </div>

        <h1 style="margin:24px 0 0;font-size:36px;line-height:1.12;letter-spacing:-1.4px;font-weight:600;">
          Thank you,<br />${name}.
        </h1>

        <p style="margin:20px 0 0;font-size:15px;line-height:1.9;color:${BRAND.muted};">
          Thank you for reaching out to Emarq Marketing &amp; Production.
          We have received your project enquiry and appreciate you considering
          us for your next project.
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding:10px 30px 36px;">
        <div style="padding:22px;background-color:${BRAND.offWhite};border-left:3px solid ${BRAND.pink};">
          <p style="margin:0 0 8px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.muted};">
            Your selected service
          </p>
          <p style="margin:0;font-size:16px;font-weight:600;color:${BRAND.purple};">
            ${service}
          </p>
        </div>

        <p style="margin:26px 0 0;font-size:14px;line-height:1.9;color:${BRAND.muted};">
          Our team will review the information you provided. If we need
          any further details, we will get in touch using the contact
          information you shared.
        </p>

        <p style="margin:22px 0 0;font-size:14px;line-height:1.9;color:${BRAND.black};">
          In the meantime, if you have anything else to add, simply reply
          to this email.
        </p>

        <p style="margin:30px 0 0;font-size:14px;line-height:1.8;color:${BRAND.black};">
          Best regards,<br />
          <strong>The Emarq Team</strong>
        </p>
      </td>
    </tr>
  `);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    // const adminEmailAddress = process.env.CONTACT_TO_EMAIL;
    const adminEmailAddress = "melbinmathew.dev@gmail.com";

    if (!apiKey || !fromEmail || !adminEmailAddress) {
      console.error(
        "Contact API configuration is incomplete. Check Resend environment variables."
      );

      return NextResponse.json(
        { message: "The contact service is temporarily unavailable." },
        { status: 500 }
      );
    }

    const contentType = request.headers.get("content-type") || "";

    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { message: "Please submit the enquiry using the contact form." },
        { status: 415 }
      );
    }

    const body = (await request.json()) as ContactPayload;
    const data = getContactDetails(body);
    const validationError = validateContact(data);

    if (validationError) {
      return NextResponse.json(
        { message: validationError },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    // 1. Send the full enquiry to the Emarq team.
    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: [adminEmailAddress],
      replyTo: data.email,
      subject: `New project enquiry: ${data.name}`,
      html: adminEmail(data),
      text: [
        "NEW EMARQ PROJECT ENQUIRY",
        "",
        `Name: ${data.name}`,
        `Company: ${data.company || "Not provided"}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Service: ${data.service}`,
        "",
        "Project details:",
        data.details,
      ].join("\n"),
    });

    if (adminResult.error) {
      console.error("Resend admin notification failed:", adminResult.error);

      return NextResponse.json(
        {
          message:
            "We couldn't process your enquiry right now. Please try again later.",
        },
        { status: 502 }
      );
    }

    // 2. Send an acknowledgement to the customer.
    // Admin delivery is handled first so we don't confirm an enquiry
    // before the notification has been accepted by Resend.
    const customerResult = await resend.emails.send({
      from: fromEmail,
      to: [data.email],
      replyTo: adminEmailAddress,
      subject: "We've received your enquiry | Emarq",
      html: customerEmail(data),
      text: [
        `Thank you, ${data.name}.`,
        "",
        "Thank you for reaching out to Emarq Marketing & Production.",
        "We have received your project enquiry.",
        "",
        `Selected service: ${data.service}`,
        "",
        "Our team will review the information you provided. If we need any further details, we will contact you.",
        "",
        "If you have anything else to add, simply reply to this email.",
        "",
        "Best regards,",
        "The Emarq Team",
        "info@emarq.ae",
      ].join("\n"),
    });

    if (customerResult.error) {
      // The admin notification has already been accepted. Do not tell
      // the visitor that their enquiry failed just because the
      // optional acknowledgement email failed.
      console.error("Resend customer acknowledgement failed:", customerResult.error);
    }

    return NextResponse.json(
      {
        success: true,
        message: customerResult.error
          ? "Your enquiry has been received. Thank you for contacting Emarq."
          : "Thank you! Your enquiry has been sent successfully. Please check your email for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
