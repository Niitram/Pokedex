const { Router } = require("express")


const handlerCreatePokemon = require("../handlers/handlerCreatePokemon")
const handlerGetPokemonId = require("../handlers/handlerGetPokemonId")
const handlerGetPokemonByName = require("../handlers/handlerGetPokemonByName")
const handlerGetAllPokemons = require("../handlers/handlerGetAllPokemons")
const handlerDeletePokemon = require("../handlers/handlerDeletePokemon")
const handlerModifyPokemon = require("../handlers/handlerModifyPokemon")

const pokemonsRouter = Router()

//Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información
pokemonsRouter.get("/", handlerGetAllPokemons)

pokemonsRouter.get("/name", handlerGetPokemonByName)

pokemonsRouter.get("/:idPokemon", handlerGetPokemonId)

pokemonsRouter.put("/:idPokemon", handlerModifyPokemon)

pokemonsRouter.post("/", handlerCreatePokemon)

pokemonsRouter.delete("/:idPokemon", handlerDeletePokemon)


module.exports = pokemonsRouter