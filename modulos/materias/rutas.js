const express = require('express');

const router = express.Router();

// Create a new subject
router.post('/subjects', (req, res) => {
    const newSubject = {
        id: subjects.length + 1,
        name: req.body.name
    };
    subjects.push(newSubject);
    res.status(201).json(newSubject);
});

// Read all subjects
router.get('/subjects', (req, res) => {
    res.json(subjects);
});

// Read a single subject by ID
router.get('/subjects/:id', (req, res) => {
    const subject = subjects.find(s => s.id === parseInt(req.params.id));
    if (!subject) return res.status(404).send('Subject not found');
    res.json(subject);
});

// Update a subject by ID
router.put('/subjects/:id', (req, res) => {
    const subject = subjects.find(s => s.id === parseInt(req.params.id));
    if (!subject) return res.status(404).send('Subject not found');

    subject.name = req.body.name;
    res.json(subject);
});

// Delete a subject by ID
router.delete('/subjects/:id', (req, res) => {
    const subjectIndex = subjects.findIndex(s => s.id === parseInt(req.params.id));
    if (subjectIndex === -1) return res.status(404).send('Subject not found');

    const deletedSubject = subjects.splice(subjectIndex, 1);
    res.json(deletedSubject);
});

module.exports = (db) => {
    router.get("/", (req,res) => {
        db.query("SELECT * FROM materia", (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(results);
        });
    });
};