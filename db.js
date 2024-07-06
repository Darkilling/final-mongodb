
const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://Darkilling:H3r0g4m3rs@clusterluis.hquplkv.mongodb.net/Inmobiliaria?retryWrites=true&w=majority&appName=clusterluis'

mongoose.connect(mongoURI, (useNewUrlParser = true, useUnifiedTopology = true))
.then() => console.log('Conectado a la base de datos mongo')
.catch(err => console.log('el error es: ', err))



