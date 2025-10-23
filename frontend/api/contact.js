import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Liste des origines autorisées (localhost + production)
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://profilio-efvhp5fri-hamzas-projects-fee8c477.vercel.app',
    // Ajoutez d'autres URLs Vercel si nécessaire
  ];

  const origin = req.headers.origin;

  // Configurer CORS
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Gérer la requête OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Accepter seulement POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Récupérer les données du formulaire
  const { name, email, message } = req.body;

  // Vérifier que tous les champs sont remplis
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Tous les champs sont requis',
      success: false 
    });
  }

  // Validation basique de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Email invalide',
      success: false 
    });
  }

  try {
    // Configurer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,     // Votre email Gmail
        pass: process.env.EMAIL_PASS      // Mot de passe d'application
      }
    });

    // Options de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,         // Vous envoyez l'email à vous-même
      replyTo: email,                     // L'email du visiteur pour répondre
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
              Nouveau message de votre portfolio
            </h2>
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Nom:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            </div>
            <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #4CAF50; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${message}</p>
            </div>
            <p style="color: #888; font-size: 12px; margin-top: 30px;">
              Ce message a été envoyé depuis votre formulaire de contact.
            </p>
          </div>
        </div>
      `
    };

    // Envoyer l'email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email envoyé avec succès:', info.messageId);

    return res.status(200).json({ 
      message: 'Email envoyé avec succès',
      success: true 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return res.status(500).json({ 
      message: 'Erreur lors de l\'envoi de l\'email',
      success: false,
      error: error.message 
    });
  }
}