const express = require("express");  // Express crea el servidor web y gestiona las peticiones
const cors = require("cors");  // Permite la comunicación entre el servidor y el cliente
const mysql = require("mysql2"); // Conexión a la base de datos MySQL

const app = express();
app.use(cors());
app.use(express.json());  // Permite la comunicación entre el servidor y el cliente en formato JSON

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hernan",
    database: "estudiantes"
});

db.connect(err => {
    if (err) {
        console.error("Error conectando a la base de datos:", err);
        return;
    }
    console.log("Conectado a la base de datos MySQL");
});

app.get("/estudiantes", (res) => {
    db.query("SELECT * FROM estudiante", (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});


app.post("/estudiantes", (req, res) => {
    const { nombre } = req.body;
    db.query("INSERT INTO estudiante (nombre) VALUES (?)", [nombre], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: result.insertId, nombre });
    });
});

app.delete("/estudiantes/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM estudiante WHERE id = ?", [id], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: "Estudiante eliminado" });
    });
});


app.put("/estudiantes/:id", (req, res) => {
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
