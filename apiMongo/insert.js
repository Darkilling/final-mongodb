const express = require('express')
require('./db')
const Restaurant = require('./Restaurant')

const app = express();
app.use(express.json())

app.post('/restaurants', (req, res) =>{
    const newRestaurant = new Restaurant(req.body);
    newRestaurant.save()
        .then(restaurant => res.status(201).json(restaurant))
        .catch(err => {
            console.error("Error al insertar el restaurante. ",err);
            res.status(500).json({error: 'Error interno del servidor.'})
        })
});

const port = process.env.PORT || 2002
app.listen(port, () => console.log(`Servidor compilado en el puerto ${port}`))