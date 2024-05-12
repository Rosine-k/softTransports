const express = require('express');
// const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
// app.use(cors());

const PORT = process.env.PORT || 5000;

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Middleware pour les logs
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
    console.error('Une erreur est survenue :', err);
    res.status(500).json({ error: 'Une erreur est survenue. Veuillez réessayer plus tard.' });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
