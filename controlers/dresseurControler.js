const dresseurModel = require('../models/dresseurModel')

exports.postDresseur = async (req, res) => {
    try {
        const newDresseur = new dresseurModel(req.body)
        newDresseur.validateSync()
        await newDresseur.save()
        res.json("Le dresseur a été créé")
    } catch (error) {
        res.json(error)
    }
}

exports.getDresseur = async (req, res) => {
    try {
        const dresseurs = await dresseurModel.find().populate("pokemons")
        res.json(dresseurs)
    } catch (error) {
        res.json(error)
    }
}
exports.getOneDresseur = async (req, res) => {
    try {
        const dresseurs = await dresseurModel.findOne({ _id: req.params.id }).populate("pokemons")
        res.json(dresseurs)
    } catch (error) {
        res.json(error)
    }
}


exports.deletedDresseur = async (req, res) => {
    try {
        const deletedDresseur = await dresseurModel.deleteOne({ _id: req.params.id })
        res.json('Dresseur supprimé')

    } catch (error) {
        res.json(error.message)
    }
}

exports.updatedDresseur = async (req, res) => {
    try {
        const updatedDresseur = await dresseurModel.updateOne({ _id: req.params.id }, req.body)
        res.json(updatedDresseur)
    } catch (error) {
        res.json(error.message)
    }

}
