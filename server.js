const express = require('express')
const mongoose = require('mongoose')
const pokeRouter = require('./router/pokeRouter')
const dresseurRouter = require('./router/dresseurRouter')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json()) 
app.use(pokeRouter)
app.use(dresseurRouter)
app.listen(3002, (err) => {

    if (err) {
        console.log(err)
    }
    else {
        console.log("Connexion serveur réussie")
    }
})
mongoose.connect("mongodb://localhost:27017/pokemons")





