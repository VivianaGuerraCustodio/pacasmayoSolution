// Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const admin = require('firebase-admin');

// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: "ws://billeterafamiliar-5b443.firebaseio.com/"
// });
admin.initializeApp();
const db = admin.firestore();
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
 
  function welcome(agent) {
    agent.add(`¡Hola!
¡En Pacasmayo queremos que cumplas tus sueños! 😊
¿Deseas crear una cuenta? o ¿Deseas hacer una consulta?`);
  }
 
  function fallback(agent) {
    agent.add(`No te entiendo`);
    agent.add(`¿Puedes repetirlo por favor?`);
  }
  
  function getNameHandler(agent) {
    let DNI = agent.parameters.DNI;
    let nombre = agent.parameters.nombre;
    let apellido = agent.parameters.apellido;

    agent.add(`Se creó una nueva cuenta con los siguiente datos: DNI: ${DNI} Nombre completo: ${nombre} ${apellido}`);

    return db.collection('familias').add({
        DNI: DNI,
        nombre: nombre,
        apellido: apellido
     });
  }
  
  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('ingresar datos importantes', getNameHandler);
  agent.handleRequest(intentMap);
});
