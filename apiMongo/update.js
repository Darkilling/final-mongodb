const express = require('express');
require('./db')
const Restaurant = require('./Restaurant');
const { use } = require('express/lib/application');

const app = express()
app.use(express.json())

app.put('/restaurants/:id', (req, res) =>{
    Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(restaurant => {
        if(!restaurant){
            return res.status(404).json({message: 'Restaurante no encontrado'})
        }
        res.json(restaurant)
    })
    .catch(err => {
        console.error("Error al actualizar el restaurante ", err);
        res.status(500).json({error: 'Error interno del Servidor.'});
    });
})

const port = process.env.PORT || 2003
app.listen(port, () => console.log(`Servidor compilado desde el puert ${port}.`))