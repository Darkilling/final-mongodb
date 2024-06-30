const express = require('express')
const mongoose = require('mongoose')
const Restaurant = require('./Restaurant')

const app = express();
app.use(express.json()) // middleware para parsear Json

//conexion a MongoDB
const mongoURI = 'mongodb+srv://paulo:plto4956@inacap2023.guvc7ax.mongodb.net/sample_restaurants?retryWrites=true&w=majority&appName=Inacap2023'
mongoose.connect(mongoURI)
.then(() => console.log('Conectado a la base de datos'))
.catch(err => console.log(err));



app.get('/', (req, res) => {
    Restaurant.find()
    .then(restaurants => {
        if (restaurants.length > 0){
            res.json(restaurants);
        }else{
            res.json({message: 'No se encontraron datos en la coleccion restaurante.'})
            
        }
    })
    .catch(err => {
        console.error("Error al buscar restaurantes", err);
        res.status(500).json({error: 'Error interno del Servidor.'})
    });
});

//Inicializar el Servidor o API
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Servidor ejecutado en el puerto ${port}`));


