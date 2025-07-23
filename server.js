const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM utilisateurs WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Erreur serveur' });
      return;
    }

    if (results.length > 0) {
      res.status(200).json({ message: 'Connexion réussie', user: results[0] });
    } else {
      res.status(401).json({ message: 'Identifiants incorrects' });
    }
  });
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
