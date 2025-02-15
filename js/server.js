const express = require("express");  // Express crea el servidor web y gestiona las peticiones
const cors = require("cors");  // Permite la comunicación entre el servidor y el cliente
const mysql = require("mysql2"); // Conexión a la base de datos MySQL
const config = require("./config");  // Configuración del servidor

const app = express();  // Crea una instancia de Express
app.use(cors());
app.use(express.json());  // Permite la comunicación entre el servidor y el cliente en formato JSON

const db = mysql.createConnection(config.db);


db.connect(err => {
    if (err) {
        console.error("Error conectando a la base de datos:", err);
        return;
    }
    console.log("Conectado a la base de datos MySQL");
});


const estudiantes = require('../modulos/estudiantes/rutas.js')(db);
app.use('/api/estudiantes', estudiantes);



app.listen(config.app.port, () => {
    console.log(`Servidor corriendo en http://localhost:${config.app.port}`);
});




module.exports = app;  // Exporta la instancia de Express para ser utilizada en otros módulos
