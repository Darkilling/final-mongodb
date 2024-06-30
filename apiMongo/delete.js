const express = require('express')
require('./db')
const Restaurant = require('./Restaurant')

const app = express();
app.use(express.json())

app.delete('/restaurants/:id', (req, res) =>{
    Restaurant.findByIdAndDelete(req.params.id)
    .then(restaurant => {
        if(!restaurant){
            return res.status(404).json({message: 'Restaurante no encontrado.'})
        }
        res.json({message: 'Restaurante eliminando Ok.'})
    })
    .catch(err => {
        console.error("Error al eliminar el restaurante :", err)
        res.status(500).json({error: `Error interno del servidor.`})
    }); 
});

const port = process.env.PORT || 2004
app.listen(port, () => console.log(`Servidor compilado en el puerto ${port}`))