import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const allowedOrigin = 'https://profilio-efvhp5fri-hamzas-projects-fee8c477.vercel.app'; // <-- Remplace par ton frontend Vercel

  // Gérer la requête OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  // CORS header pour la requête POST réelle
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);

  // Méthode non autorisée
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  // Récupération des données du formulaire
  const { name, email, message } = req.body;

  // Vérification des champs requis
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    // Envoi de l'email avec Resend
    await resend.emails.send({
      from: process.env.MAIL_USER,       // ex: 'contact@yourdomain.com'
      to: process.env.MAIL_RECEIVER,     // ex: 'your-email@gmail.com'
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully', success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email', success: false });
  }
}
