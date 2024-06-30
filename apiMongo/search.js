const express = require('express')
const mongoose = require('mongoose')
const Restaurant = require('./Restaurant')

const app = express()
app.use(express.json())

const mongoURI = 'mongodb+srv://paulo:plto4956@inacap2023.guvc7ax.mongodb.net/sample_restaurants?retryWrites=true&w=majority&appName=Inacap2023'
mongoose.connect(mongoURI)
.then(() => console.log("Conectado a la base de datos."))
.catch(err => console.log(err))

app.get('/restaurante/:name', (req, res) => {
    Restaurant.findOne({name: req.params.name})
    .then(restaurant => {
        if(!restaurant){
            return res.status(404).json({message: 'Restaurante no encontrado.'})
        }else{ 
            res.json(restaurant)
        }    
    })
    .catch(err => {
        console.error("Error al buscar el restaurante :", err)
        res.status(500).json({error: 'Error interno del servidor.'})
    });
});

const port = process.env.PORT || 2001
app.listen(port, () => console.log(`Servidor ejecutado en el puerto ${port}`))