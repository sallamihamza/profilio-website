import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Only POST allowed' });

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    await resend.emails.send({
      from: 'aslamihamza@gmail.com',
      to: process.env.MAIL_RECEIVER,
      subject: `New message from ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });

    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
