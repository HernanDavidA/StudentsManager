const express = require("express");

module.exports = (db) => {

    const router = express.Router();

    router.get("/", (req,res) => {
    db.query("SELECT * FROM estudiante", (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
    
    }); 

    router.post("/", (req, res) => {
        const { nombre } = req.body;
        db.query("INSERT INTO estudiante (nombre) VALUES (?)", [nombre], (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ id: result.insertId, nombre });
        });
    });

    router.delete("/:id", (req, res) => {
        const { id } = req.params;
        db.query("DELETE FROM estudiante WHERE id = ?", [id], (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: "Estudiante eliminado" });
        });
    });


    router.put("/:id", (req, res) => {
        const { id } = req.params;
        const { nombre } = req.body;
        db.query("UPDATE estudiante SET nombre = ? WHERE id = ?", [nombre, id], (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: "Estudiante actualizado" });
        });
    });

    return router;
};


