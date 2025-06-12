const mongoose = require("../config/database");
const schemaProduct = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor indique el nombre del producto'],
        unique: [true, 'El nombre del producto ya existe'],
        trim: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        trim: true,
    },
    precio: {
        type: Number,
        default: 0,
        required: [true, 'Por favor indique el precio del producto'],
        min: [100, 'El mínimo es de 100'],
        max: [10000000, "El máximo son 10'000.000"]
    }
},
{
    versionKey: false
}
)

const product = mongoose.model('producto', schemaProduct);
module.exports = product;