import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Determine allowed origin based on environment
  const allowedOrigin = process.env.NODE_ENV === 'production'
    ? 'https://profilio-k6k8t17gb-hamzas-projects-fee8c477.vercel.app'
    : '*';

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  // Set CORS header for actual POST requests
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Check environment variables for mail config
  if (!process.env.RESEND_API_KEY || !process.env.MAIL_USER || !process.env.MAIL_RECEIVER) {
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    await resend.emails.send({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_RECEIVER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `<p><b>Name:</b> ${sanitize(name)}</p><p><b>Email:</b> ${sanitize(email)}</p><p>${sanitize(message)}</p>`,
    });

    res.status(200).json({ message: 'Email sent', success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}

// Simple sanitize function to escape HTML special characters
function sanitize(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
