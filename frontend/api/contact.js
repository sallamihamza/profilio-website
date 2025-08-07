import { Resend } from 'resend';

const resend = new Resend('re_HHknqF64_CNLp2MfFCufvgHN9koTUK8PE');

export default async function handler(req, res) {
  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with your frontend URL for security
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  // Set CORS header for actual POST requests
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or your frontend origin

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

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

    res.status(200).json({ message: 'Email sent', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
