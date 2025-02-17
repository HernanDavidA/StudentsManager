const express = require('express');




module.exports = (db) => {

    const router = express.Router();
// Create a new subject
router.post('/', (req, res) => {
    const { nombre } = req.body;

    db.query("INSERT INTO materias (nombre) VALUES (?)", [nombre], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: result.insertId, nombre });
    });
});

// Read all subjects
router.get('/', (req, res) => {

    db.query("SELECT * FROM materias", (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });

});

// Read a single subject by ID
router.get('/:id', (req, res) => {
    db.query("SELECT * FROM materias WHERE id = ?", [req.params.id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Update a subject by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    db.query("UPDATE materias SET nombre = ? WHERE id = ?", [nombre, id], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: "Subject updated" });
    });
});

// Delete a subject by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM materias WHERE id = ?", [id], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: "Subject deleted" });
    });
});
return router;
};
