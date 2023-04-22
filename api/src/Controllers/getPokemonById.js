const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokemonById = async (idPokemon) => {
    try {
        //Primero se busca en la BDD
        const source = isNaN(idPokemon) ? "db" : "API";
        if (source === "db") {
            const pokemonDB = await Pokemon.findByPk(idPokemon, {
                include: [{
                    model: Type,
                    attributes: ['name'],
                    through: { attributes: [] }
                }]
            });

            return {
                id: pokemonDB.id,
                name: pokemonDB.name,
                image: pokemonDB.image,
                hp: pokemonDB.hp,
                attack: pokemonDB.attack,
                defense: pokemonDB.defense,
                speed: pokemonDB.speed,
                height: pokemonDB.height,
                weight: pokemonDB.weight,
                types: pokemonDB.types.map((t) => t.name)
            }
        } else if (source === "API") {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const pokemonData = response.data;

            const pokemon = {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.other.dream_world.front_default,
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
        if (error.response.data == "Not Found") {
            throw Error(`pokemon no encontrado o no existente`)
        }
        throw Error(`Desde controller getPokemonById: ${error.message}`)
    }
}

module.exports = getPokemonById