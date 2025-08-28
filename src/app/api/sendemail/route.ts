import { Resend } from "resend";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";



const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  from: string;
  subject: string;
  toEmails: string;
  ccEmails?: string;
  body: string;
}

export async function POST(request: NextRequest) {
  try {
    const { from, subject, toEmails, ccEmails, body }: EmailData = await request.json();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const data = await resend.emails.send({
      from: "hr@amtechdigital.co", // verified sender
      to: toEmails.split(","),
      cc: ccEmails?.split(",") || [],
      subject,
      html: body,
      reply_to: from,
    });

    console.log("✅ Email sent:", data.id);
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("❌ Email error:", err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
