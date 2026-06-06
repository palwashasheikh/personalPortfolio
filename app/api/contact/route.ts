import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mail = {
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #6A0DAD; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #555; font-weight: bold; width: 120px;">Name:</td><td style="padding: 10px 0;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 10px 0; color: #555; font-weight: bold;">Email:</td><td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; color: #555; font-weight: bold;">Phone:</td><td style="padding: 10px 0;">${phone || "Not provided"}</td></tr>
          </table>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
          <h3 style="color: #FFD700; margin-bottom: 12px;">Message:</h3>
          <p style="line-height: 1.7; color: #333;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mail);
    return NextResponse.json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ code: 500, status: "Error sending message" }, { status: 500 });
  }
}
