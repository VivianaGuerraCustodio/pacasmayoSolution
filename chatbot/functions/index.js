/* eslint-disable promise/always-return */
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
const { get } = require('http');

const serviceAcount = require('./config/billeterafamiliar-5b443-74243bfcad14.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAcount),
  databaseURL: "ws://billeterafamiliar-5b443.firebaseio.com/"
});
// admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  const sessionId = request.body.session.split("/").reverse()[0];
 
  function welcome(agent) {
    agent.add(`¡Hola!
¡En Pacasmayo queremos que cumplas tus sueños! 😊
¿Deseas crear una cuenta? o ¿Deseas entrar a tu cuenta?`);
  }
 
  function fallback(agent) {
    agent.add(`No te entiendo`);
    agent.add(`¿Puedes repetirlo por favor?`);
  }
  
  function addUser(agent) {
    let DNI = parseFloat(agent.parameters.DNI);
    let nombre = agent.parameters.nombre;
    let apellido = agent.parameters.apellido;
    let celular = parseFloat(agent.parameters.celular);

    const docPersonalizado = DNI.toString();

    agent.add(`Se creó una nueva cuenta con los siguiente datos: DNI: ${DNI} Nombre completo: ${nombre} ${apellido}`);

    return db.collection('Familias').doc(docPersonalizado).set({ 
        titularDni: DNI,
        titularNombre: nombre,
        titularApellido: apellido,
        titularTelefono: celular
    });
  }

  function getInfo(agent) {
    let DNI = parseFloat(agent.parameters.DNI);
    const docPersonalizado = DNI.toString();

    const docRef = db.collection('Familias').doc(docPersonalizado)
    return docRef.get()
      .then(snap => {
        if(snap.exists) {
          const data = snap.data();
          const nombre = data.titularNombre;
          const apellido = data.titularApellido;
          agent.add(`Estás registrado como ${nombre} ${apellido}. Si desea escribir una meta, escriba Crear. Si desea ver su lista de metas, escriba Lista`);
          return console.log('Done!')
        } else {
          agent.add('Tu nombre no está registrado. Para crear una cuenta, escriba Inicio');
          return console.log('Done!')
        }
      })
  }

  function crearMeta(agent) {
    let DNI = parseFloat(agent.parameters.DNI);
    let meta = agent.parameters.meta;
    let monto = parseFloat(agent.parameters.monto);
    let tiempo = agent.parameters.dateTime;

    const newMeta = meta.join(' ');
    const tresDig = newMeta.slice(0,3);

    agent.add(`Tu meta se ha registrado con el número de DNI: ${DNI} . Tu nueva meta es ${newMeta}, el monto asignado es ${monto} y el tiempo para cumplir esta meta es ${tiempo}.`);

    return db.collection('metas').add({
        id_user: DNI,
        meta: newMeta,
        monto: monto,
        tiempo: tiempo,
        código: `${DNI}-${tresDig}`
    });
  }

  function mostrarLista(agent) {
    let DNI = parseFloat(agent.parameters.DNI);
    
    return db.collection('metas')
      .where('id_user', '==', DNI)
      .get()
      .then((snap) => {
        if(!snap.size === 0){
          agent.add('No hay metas registradas')
        } else if (snap.size > 0) {
          const arr = [];
          snap.forEach((doc) => {
            arr.push(`Meta: ${doc.data().meta} - Monto: ${doc.data().monto} - Tiempo: ${doc.data().tiempo}`)
          })
          agent.add(`${arr.join('\n')}`);
        }
      })
  }

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('ingresar datos importantes', addUser);
  intentMap.set('Ingresa DNI', getInfo);
  intentMap.set('Datos para crear meta', crearMeta);
  intentMap.set('Lista de todas las metas', mostrarLista);
  agent.handleRequest(intentMap);
});
