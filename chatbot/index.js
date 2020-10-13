const express = require("express");
const bodyParser = require("body-parser");
const ngrok = require('ngrok');

const app = express();

const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function (req, res) {
    if (req.body.queryResult.action == "chatbotFRASE") {
        let num1 = parseFloat(req.body.queryResult.parameters.num1);
        let num2 = parseFloat(req.body.queryResult.parameters.num2);
        const suma = num1 + num2
        response = 'La suma es: ' + suma
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