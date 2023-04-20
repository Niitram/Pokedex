const axios = require("axios")
const { Pokemon, Type } = require('../db');

/* const getAllPokemons = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60');
        const results = response.data.results;
        const nextAndPrevious = { next: response.data.next, previous: response.data.previous }
        const pokemonArray = [];
        //results tiene la lista de objetos de pokemons con nombre y url de espècificaciones
        for (let i = 0; i < results.length; i++) {
            const pokemonResponse = await axios.get(results[i].url);
            const pokemonData = pokemonResponse.data;
            const pokemon = {
                id: pokemonData.id,
                imageFront: pokemonData.sprites.front_default,
                name: pokemonData.name,
                types: pokemonData.types.map(type => type.type.name)
            };
            pokemonArray.push(pokemon);
        }
        pokemonArray.push(nextAndPrevious);
        return pokemonArray
    } catch (error) {
        throw Error(`Desde controller getAllPokemons: ${error.message}`)
    }
} */


const getAllPokemons = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60');
        const results = response.data.results;
        //resuelvo todas las promesas juntas por la demora
        const pokemonPromises = results.map(result => axios.get(result.url));
        const pokemonResponses = await Promise.all(pokemonPromises);

        let pokemonArray = pokemonResponses.map(response => {
            const pokemonData = response.data;
            return {
                id: pokemonData.id,
                image: pokemonData.sprites.other.dream_world.front_default,
                /* image: pokemonData.sprites.front_default, */
                name: pokemonData.name,
                attack: pokemonData.stats[1].base_stat,
                types: pokemonData.types.map(type => type.type.name)
            };
        });
        let pokemonsDb = await Pokemon.findAll({

            include: [{
                model: Type,
                attributes: ['name'],
                through: 'PokemonType'
            }]

        })
        pokemonsDb = pokemonsDb.map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
                attack: pokemon.attack,
                types: pokemon.types.map(type => type.name)
            };
        });
        if (Array.isArray(pokemonsDb) && pokemonsDb.length > 0) pokemonArray = [...pokemonArray, ...pokemonsDb]
        return pokemonArray;
    } catch (error) {
        throw Error(`Desde controller getAllPokemons: ${error.message}`)
    }
}





module.exports = getAllPokemons