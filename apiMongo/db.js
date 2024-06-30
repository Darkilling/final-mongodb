const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://paulo:plto4956@inacap2023.guvc7ax.mongodb.net/sample_restaurants?retryWrites=true&w=majority&appName=Inacap2023'

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado a la base de datos.'))
.catch(err => console.log(err))

module.exports = mongoose