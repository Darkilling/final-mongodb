const mongoose = require('mongoose');

const PropiedadesSchema = new mongoose.Schema({
    nombre: {
        type:String,
        require: true
    },
    ubicacion: {
        type:String,
        
    },
    tipo: {
        type:String,
        
    },
    estado: {
        type:String,
        
    },
    precio: {
        type:String,
        
    },
    descripcion: {
        type:String,
    }
})

const Propiedades = mongoose.model('Propiedades', PropiedadesSchema,'propiedades')
module.exports = Propiedades

