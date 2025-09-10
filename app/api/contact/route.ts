import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Verified sender email
    const senderEmail = "contact@jobairalsarkar.site";

    // HTML email template
    const html = `
      <div style="font-family: 'Inter', sans-serif; background-color:#EFF6FF; padding:20px;">
        <div style="max-width:600px; margin:auto; background:white; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow:hidden;">
          <div style="padding:20px; color:#1E3A8A;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background:#DBEAFE; padding:12px; border-radius:8px; color:#1E3A8A;">${message}</p>
          </div>
          <div style="padding:15px; text-align:center; font-size:12px; color:#3B82F6; background:#EFF6FF;">
            Sent via PostGen AI
          </div>
        </div>
      </div>
    `;

    // Send email using Resend API via Axios
    await axios.post(
      "https://api.resend.com/emails",
      {
        from: `PostGen AI <${senderEmail}>`,
        to: "jobairalsarkar338@gmail.com",
        subject: `Contact Form: ${subject}`,
        html: html,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTH_RESEND_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : (axios.isAxiosError(error) ? JSON.stringify(error.response?.data) : "Failed to send email.");
    console.error("Contact API error:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}