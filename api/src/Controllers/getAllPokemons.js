const { Pokemon } = require("../db")
const axios = require("axios")

const getAllPokemons = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    return response.data.results
}

module.exports = getAllPokemons