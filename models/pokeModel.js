const mongoose = require('mongoose')
const pokeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Le nom du Pokemon est requis"]
    },
    type: {
        type: String,
        required: [true, "Le type est requis"]
    },
    level: {
        type: Number,
        required: [true, "Le niveau de difficulté est requis"]
    },
    attack: {
        type: String,
        required: [true, "L'attaque est requis"]

    },
    
})
const pokeModel = mongoose.model('pokemons', pokeSchema)
module.exports = pokeModel