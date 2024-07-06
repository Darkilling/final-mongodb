//Inmobiliaria.propiedades
const express = require('express')
const mongoose = require('mongoose')
const Propiedades = require('./propiedades')

const app = express()
app.use(express.json())

//conexion a la base de datos

const mongoURI = 'mongodb+srv://Darkilling:H3r0g4m3rs@clusterluis.hquplkv.mongodb.net/Inmobiliaria?retryWrites=true&w=majority&appName=clusterluis'

mongoose.connect(mongoURI)
.then(() => console.log('Conectado a la base de datos mongodb'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    Propiedades.find()
    .then(propiedades => {
        if(propiedades.length > 0){
            res.json(propiedades)
        }else{
            res.json({message: 'No hay propiedades'})
        }
    })
    .catch(err => {
        console.error("Error al obtener las propiedades", err)
        res.status(500).json({error: 'Error interno del servidor'})
    });
});

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Servidor ejecutado desde el puerto ${port}`)) 
