const pokeRouter = require('express').Router()
const pokeControler = require('../controlers/pokeControler')

pokeRouter.post('/dresseurs/:idDresseur/pokemons', pokeControler.postPokemon)
pokeRouter.get ('/pokemons', pokeControler.getPokemon)
pokeRouter.get('/pokemons/:id', pokeControler.getOnePoke)
pokeRouter.get('/dresseurs/:idDresseur/pokemons/:id', pokeControler.getOnePoke)
pokeRouter.put('/pokemons/:id', pokeControler.updatedPoke)
pokeRouter.delete('/dresseurs/:idDresseur/pokemons/:idPokemon', pokeControler.deletedPoke)



module.exports = pokeRouter
