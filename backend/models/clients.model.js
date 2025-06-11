const mongoose = require('../config/database')
const schemaClient = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor indique el nombre del producto']
    },
    documento: {
        type: String,
        required: [true, 'Se necesita el documento del cliente para continuar'],
        min: [7, 'El mínimo es 7 dígitos'],
        max: [10, 'El máximo son 10 dígitos'],
    },
    fNacimiento: {
        type: Date,
        default: Date.now
    }
})

const client = mongoose.model('cliente', schemaClient);
module.exports = client