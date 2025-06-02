import { NextRequest } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);
//const resend = new Resend('re_QjWkAhQb_HvJqrqadNTybksVCR3KdTZ7D');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body as { email: string };

    // Validate email
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Send notification email to HR team
    await resend.emails.send({
      from: 'hr@amtechdigital.co',
      to: ['amuthan.s@amtechdigital.co', 'priya.a@amtechdigital.co'],
      subject: `New Newsletter Subscription`,
      html: `
        <h3>New Newsletter Subscription</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Source:</strong> Website Newsletter Form</p>
        <p>Please add this email to your newsletter mailing list.</p>
      `
    });

    // Send welcome email to user
    await resend.emails.send({
      from: 'hr@amtechdigital.co',
      to: `Hello ${email}` ,
      subject: 'Welcome to Our AMTECH!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">Thank You for Subscribing!</h2>
          <p>Hi there,</p>
          <p>Thank you for subscribing to our newsletter. You'll now receive the latest updates, insights, and exclusive offers directly in your inbox.</p>
          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 5px; border-left: 4px solid #007bff;">
            <h3>What to expect:</h3>
            <ul>
              <li>Latest technology insights and trends</li>
              <li>Exclusive offers and updates</li>
              <li>Industry news and expert tips</li>
              <li>Company updates and announcements</li>
            </ul>
          </div>
          <p>We're excited to have you as part of our community!</p>
          <p>Stay connected with us to get the latest updates, insights, and exclusive offers. Whether you have questions, need support, or want to learn more about our services, we're here to help.</p>
          <p>Best regards,<br>The AmTech Digital Team</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            If you didn't subscribe to this newsletter, please ignore this email or contact us at hr@amtechdigital.co
          </p>
        </div>
      `
    });

    return new Response(
      JSON.stringify({ message: 'Successfully subscribed to newsletter!' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Newsletter API error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to subscribe to newsletter',
        details: error instanceof Error ? error.message : 'An unknown error occurred'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
