const pokeModel = require('../models/pokeModel')
const dresseurModel = require("../models/dresseurModel")
exports.postPokemon = async (req, res) => {
    try {
        const dresseurs = dresseurModel.findOne({ _id: req.params.idDresseur })
        if (dresseurs) {
            const newPokemon = new pokeModel(req.body)
            newPokemon.validateSync()
            await newPokemon.save()
            await dresseurModel.updateOne({ _id: req.params.idDresseur }, { $push: { pokemons: newPokemon._id } })
            res.json("Le Pokemon a été créé")
       } else {
        res.json('Aucun Pokemon trouvé')
       }
    } catch (error) {
            res.json(error.message)
        }
    
}

exports.getPokemon = async (req, res) => {
    try {
        const pokemons = await pokeModel.find()
        res.json(pokemons)
    } catch (error) {
        res.json(error)
    }
}
exports.getOnePoke = async (req, res) => {
    try {
        const pokemons = await pokeModel.findOne({ _id: req.params.id })
        res.json(pokemons)
    } catch (error) {
        res.json(error)
    }
}


exports.deletedPoke = async (req, res) => {
    try {
        const dresseurs = dresseurModel.findOne({ _id: req.params.idDresseur })
        if (dresseurs) {
         const deletedPoke = await pokeModel.deleteOne({ _id: req.params.id })
        await dresseurModel.updateOne({ _id: req.params.idDresseur }, { $pull: { pokemons: req.params.idPokemon} })
        res.json('Pokemon supprimé')
        } else {
            res.json("Aucun Pokemon trouvé")
        }
    } catch (error) {
        res.json(error.message)
    }
}

exports.updatedPoke = async (req, res) => {
    try {
        const updatedPoke = await pokeModel.updateOne({ _id: req.params.id }, req.body)
        res.json(updatedPoke)
    } catch (error) {
        res.json(error.message)
    }

}



