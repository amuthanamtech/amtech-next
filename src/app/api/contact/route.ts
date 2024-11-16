import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer';
// @ts-ignoreimport { getRequestContext } from '@cloudflare/next-on-pages'

//export const runtime = 'edge'
// let transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: parseInt(process.env.SMTP_PORT || '587'),
//   secure: process.env.SMTP_SECURE === 'true',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });
export async function POST(request: NextRequest) {
  try {
    debugger;
    const { name, email, message } = await request.json() as { name: string; email: string; message: string };

    // Create SMTP transporter

    const transporter2 = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // true for port 465, false for 587
      auth: {
        user: 'hr@amtechdigital.co',
        pass: 'Welcome@123', // Use App Password if using Gmail
      },
    });
    
    // Email content
    const mailOptions = {
      from: "hr@amtechdigital.co",
      to: `amuthan.s@amtechdigital.co,priya.a@amtechdigital.co`,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Email content
    const responseEmailOptions = {
      from: "hr@amtechdigital.co",
      to: email,
      subject: `Thank you for contacting us`,
      text: `
        Dear ${name},
        
        Thank you for reaching out to us. We have received your message and will get back to you shortly.
        
        Your message details:
        Message: ${message}
        
        Best regards,
        AmTech Digital Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for contacting us</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
          <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
            <h3>Your message details:</h3>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <p>Best regards,<br>AmTech Digital Team</p>
        </div>
      `,
    };

    // Send email
    //await transporter.sendMail(mailOptions);
    await transporter2.sendMail(mailOptions);
    await transporter2.sendMail(responseEmailOptions);

    return new Response(JSON.stringify({ message: `Email sent successfully: ${name}, ${email}, ${message}` }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    }    );
  }

}