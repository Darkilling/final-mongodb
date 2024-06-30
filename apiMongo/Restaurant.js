const mongoose = require('mongoose')

const RestaurantShema = new mongoose.Schema({
        name:{
            type: String,
            require: true
        },
        cuisine: String,
        borough: String    
})

const Restaurant = mongoose.model('Restaurant', RestaurantShema, 'restaurants')
module.exports = Restaurant
