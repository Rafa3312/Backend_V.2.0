const admin = require("firebase-admin");
const keys = require("../keys.json");

admin.initializeApp({
    credential: admin.credential.cert(keys)
});

const bd = admin.firestore(); 
const usuarios = bd.collection("miejemploBD");
const productos = bd.collection("Productos");

module.exports = {usuarios,productos};

//console.log(usuarios);
