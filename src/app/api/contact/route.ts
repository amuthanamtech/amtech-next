import { NextRequest } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);
//const resend = new Resend('re_QjWkAhQb_HvJqrqadNTybksVCR3KdTZ7D');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as { name: string; email: string; message: string };

    // Send notification email to team  
    await resend.emails.send({
      from: 'hr@amtechdigital.co',
      to: ['amuthan.s@amtechdigital.co', 'priya.a@amtechdigital.co'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        
      `
    });

    // Send auto-response to user
    await resend.emails.send({
      from: 'hr@amtechdigital.co',
      to: email,
      subject: 'Thank you for contacting us',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for contacting us</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
          <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
            <h3>Your  message details:</h3>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <p>Best regards,<br>AmTech Digital Team</p>
        </div>
      `
    });   

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}