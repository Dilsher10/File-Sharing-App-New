import { EmailTemplate } from '../../_components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();
  const sendTo = response.emailToSend;
  try {
    const data = await resend.emails.send({
      from: 'File Sharing App <file@resend.dev>',
      to: [sendTo],
      subject: "File Sharing App",
      react: EmailTemplate({ response }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
