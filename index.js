const express = require('express');

const usuariosRutas = require('./routes/rutasUsuarios');
const productoRutas = require("./rutas/rutasProductos");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',usuariosRutas);
app.use("/", productoRutas)

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Servido en http://localhost:'+port);
});
