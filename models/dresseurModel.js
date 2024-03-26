const mongoose = require('mongoose')

const dresseurSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nom du dresseur requis ']
    },
    age: {
        type: Number,
        required: [true, 'Age du dresseur requis']
    },
    pokemons: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'pokemons'
            }
        ]
    }
})
const dresseurModel = mongoose.model('dresseurs', dresseurSchema)
module.exports = dresseurModel