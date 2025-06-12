require('dotenv').config()
let productoModel = require('./backend/models/products.model')
const exp = require('express');
const app = exp();
const logger = require('morgan');
app.use(logger('dev'));
app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());
app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en http:localhost:${process.env.PORT}`)
})
app.get('/productos', async (req, res) => {
    let listadoProductos = await productoModel.find()

    if (listadoProductos) {
        res.status(200).json(listadoProductos);
        res.end()
    }
    else {
        res.status(404).json({ error: "No se encontraron productos" });
        res.end()
    }
})
app.get('/productos/:name', async (req, res) => {
    let productoEncontrado = await productoModel.findOne({ nombre: req.params.name });
    if (productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({ error: "No se ha encontrado el nombre del producto" })
})
app.post('/productos', async (req, res) => {
    const nuevoProducto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    }
    let insercion = await productoModel.create(nuevoProducto);
    if (insercion)
        res.status(200).json({mensaje: "Registro exitoso"})
    else
        res.status(404).json({error: "No se ha podido guardar"})
})
app.delete('/productos/:id', async (req, res)=>{
    console.log(req.params.name, req.body.referenciaProducto)
    let eliminacion = await productoModel.findOneAndDelete({nombre:req.params.name})
    if (eliminacion)
        res.status(200).json({mensaje: "Elminación exitosa"})
    else  
        res.status(404).json({error: "No se ha encontrado"})
})