const { Pokemon } = require("../db")
const axios = require("axios")

const getAllPokemons = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
        return response.data.results
    } catch (error) {
        throw Error(`Desde controller getPokemonByName: ${error.message}`)
    }
}

module.exports = getAllPokemons