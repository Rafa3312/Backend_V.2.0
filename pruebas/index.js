const express = require ("express");
require("dotenv").config();
const app = express();

var saludar=(req,res,next)=>{
    console.log("Heyy "); 
    next();
}

app.use((req,res,next)=>{
    console.log("Middleware para todas las rutas");
    next();
})

app.get("/",saludar,(req,res)=>{
    res.send("Estas en raíz")
});

app.get("/home",(req,res)=>{
    res.send("Estas en home")
});

app.get("/trabajo",(req,res)=>{
    res.send("Estas en trabajo")
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("servidor en http://localhost:"+port);
});