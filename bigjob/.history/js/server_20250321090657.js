const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = 'demandes.json';

app.use(express.json());
app.use(cors());

// Lire les demandes existantes
app.get('/demandes', (req, res) => {
    if (!fs.existsSync(DATA_FILE)) {
        return res.json([]);
    }
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) return res.status(500).json({ error: 'Erreur de lecture' });
        res.json(JSON.parse(data));
    });
});

// Ajouter une nouvelle demande
app.post('/demandes', (req, res) => {
    const nouvelleDemande = req.body;

    fs.readFile(DATA_FILE, (err, data) => {
        let demandes = [];
        if (!err) {
            demandes = JSON.parse(data);
        }

        demandes.push(nouvelleDemande);

        fs.writeFile(DATA_FILE, JSON.stringify(demandes, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Erreur d\'écriture' });
            res.json({ message: 'Demande enregistrée avec succès !' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
