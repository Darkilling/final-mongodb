const mongoose = require('mongoose');

const PropiedadesSchema = new mongoose.Schema({
    nombre: {
        type:String,
        require: true
    },
    ubicacion: {
        type:String,
        require: true
    },
    tipo: {
        type:String,
        require: true
    },
    estado: {
        type:String,
        require: true
    },
    precio: {
        type:String,
        require: true
    },
    descripcion: {
        type:String,
        require: true
    }
})

const Propiedades = mongoose.model('Propiedades', PropiedadesSchema,'propiedades')
module.exports = Propiedades

