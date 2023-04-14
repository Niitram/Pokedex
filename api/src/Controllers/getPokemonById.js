const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokemonById = async (idPokemon) => {
    try {
        //Primero se busca en la BDD
        const source = isNaN(idPokemon) ? "db" : "API";
        if (source === "db") {
            // hacer algo con la información de la base de datos
            const pokemonDB = await Pokemon.findByPk(idPokemon, { include: Type });
            return pokemonDB
        } else if (source === "API") {
            // hacer algo con la información de la API
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const pokemonData = response.data;

            const pokemon = {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                hp: pokemonData.stats[0].base_stat,
                attack: pokemonData.stats[1].base_stat,
                defense: pokemonData.stats[2].base_stat,
                speed: pokemonData.stats[5].base_stat,
                height: pokemonData.height || null,
                weight: pokemonData.weight || null,
                types: pokemonData.types.map((t) => t.type.name)
            };
            return pokemon
        }
    } catch (error) {
        throw Error(`Desde controller getPokemonById: ${error.message}`)
    }
}

module.exports = getPokemonById