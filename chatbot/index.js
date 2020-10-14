// Editar las preguntas del chatbot
const express = require("express");
const bodyParser = require("body-parser");
const ngrok = require('ngrok');

const app = express();

const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function (req, res) {
    if (req.body.queryResult.action == "input.welcome") {
        response = `
        ¡Hola!
¡En Pacasmayo queremos que cumplas tus sueños! 😊
¿Deseas crear una cuenta? o ¿Deseas hacer una consulta?
        `
        res.json({
            "fulfillmentText": response
        });
    } else if (req.body.queryResult.action == "pedirDatosImportantes") {
        let dni = parseFloat(req.body.queryResult.parameters.DNI);
        let nombre = req.body.queryResult.parameters.nombre;
        let apellido = req.body.queryResult.parameters.apellido;
        response = 'Tu DNI es ' + dni + ' y tu nombre es ' + nombre + ' ' + apellido;

        res.json({
            "fulfillmentText": response
        });
    }
});

app.listen(port, ip);

(async function () {
    const url = await ngrok.connect(port);
    console.log(url);
})();