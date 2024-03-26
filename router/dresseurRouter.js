const dresseurRouter = require('express').Router()
const dresseurControler = require('../controlers/dresseurControler')


dresseurRouter.post('/dresseurs', dresseurControler.postDresseur)
dresseurRouter.get('/dresseurs', dresseurControler.getDresseur)
dresseurRouter.get('/dresseurs/:id', dresseurControler.getOneDresseur)

dresseurRouter.put('/dresseurs/:id', dresseurControler.updatedDresseur)
dresseurRouter.delete('/dresseurs/:id', dresseurControler.deletedDresseur)

module.exports = dresseurRouter
