import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, dogs, frequency, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // For now, log the contact submission.
    // In production, integrate with Resend, SendGrid, or another email service.
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      dogs,
      frequency,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email via Resend or similar service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'P.A.W.S. HD <noreply@pawshd.com>',
    //   to: process.env.CONTACT_EMAIL_TO,
    //   subject: `New Contact: ${name}`,
    //   html: `...`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
