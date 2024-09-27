var route = require("express").Router();
var { mostrarProductos, nuevoProducto, borrarProducto, buscarProdPorId } = require("../bd/productosBD");

route.get("/mostrar", async (req, res) => {
    var productosValidos = await mostrarProductos();
    res.json(productosValidos);
});

route.get("/buscar/:id", async (req, res) => {
    var productoValido = await buscarProdPorId(req.params.id);
    res.json(productoValido);
});

route.post("/agregar", async (req, res) => {
    var productoGuardado = await nuevoProducto(req.body);
    res.json(productoGuardado);
});

route.delete("/borrar/:id", async (req, res) => {
    var productoBorrado = await borrarProducto(req.params.id);
    res.json(productoBorrado);
});

module.exports = route;
