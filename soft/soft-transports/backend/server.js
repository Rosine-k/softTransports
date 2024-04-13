const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Route pour gérer la soumission du formulaire
app.post('/submit_form', (req, res) => {
    const { nom_prenom, email, message } = req.body;

    // Validation côté serveur
    if (!nom_prenom || !email || !message) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
    }

    // Envoi d'une réponse si tout est OK
    res.json({ success: true, message: 'Formulaire soumis avec succès.' });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
