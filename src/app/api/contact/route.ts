import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: "Une personne te contact via le portfolio <onboarding@resend.dev>",
      to: ["dorine.h13@gmail.com"],
      subject: `Contact Portfolio: ${subject}`,
      html: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
