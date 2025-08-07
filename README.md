# Projet de Portfolio

Ce projet est un portfolio personnel développé avec un frontend React (Vite, TypeScript, Tailwind CSS) et un backend Node.js (Express).

## Structure du Projet

Le projet est divisé en deux parties principales :

- `frontend/`: Contient le code de l'application React.
- `backend/`: Contient le code du serveur Node.js (API).

## Backend (Node.js/Express)

Le backend fournit une API pour le formulaire de contact. Il est configuré pour simuler l'envoi d'e-mails pour des raisons de démonstration.

### Installation et Lancement

1. Naviguez vers le répertoire `backend`:
   ```bash
   cd backend
   ```
2. Installez les dépendances:
   ```bash
   npm install
   ```
3. Lancez le serveur:
   ```bash
   node server.js
   ```
   Le serveur démarrera sur `http://localhost:5000`.

## Frontend (React/Vite)

Le frontend est l'application web du portfolio, construite avec React, Vite, TypeScript et stylisée avec Tailwind CSS.

### Installation et Lancement

1. Naviguez vers le répertoire `frontend`:
   ```bash
   cd frontend
   ```
2. Installez les dépendances:
   ```bash
   npm install
   ```
3. Lancez l'application en mode développement:
   ```bash
   npm run dev
   ```
   L'application sera disponible sur `http://localhost:5173` (ou un autre port disponible).

## Formulaire de Contact

Le formulaire de contact dans le frontend envoie des données au backend. Actuellement, le backend simule l'envoi d'e-mails et ne nécessite pas de configuration de variables d'environnement pour l'envoi réel d'e-mails.

Si vous souhaitez activer l'envoi réel d'e-mails, vous devrez configurer les variables d'environnement suivantes dans un fichier `.env` dans le répertoire `backend`:

```
MAIL_USER=votre_email_gmail@gmail.com
MAIL_PASS=votre_mot_de_passe_application_gmail
MAIL_RECEIVER=adresse_email_destinataire@example.com
```

Assurez-vous d'utiliser un mot de passe d'application si l'authentification à deux facteurs est activée sur votre compte Gmail.

