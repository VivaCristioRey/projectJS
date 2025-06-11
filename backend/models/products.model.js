const mongoose = require("mongoose");
const schemaProduct = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    nombre: {
        type: String,
        required: [true, 'Por favor indique el nombre del producto']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    precio: {
        type: Number,
        default: 0,
        required: [true, 'Por favor indique el precio del producto'],
        min: [5, 'El mínimo es de 10.000'],
        max: [8, "El máximo son 10'000.000"]
    }
})

const product = mongoose.model('producto', schemaProduct);
module.exports = product;