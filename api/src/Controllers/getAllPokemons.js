const axios = require("axios")

const getAllPokemons = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const results = response.data.results;

        const pokemonArray = [];
        //results tiene la lista de objetos de pokemons con nombre y url de espècificaciones
        for (let i = 0; i < results.length; i++) {
            const pokemonResponse = await axios.get(results[i].url);
            const pokemonData = pokemonResponse.data;

            const pokemon = {
                imageFront: pokemonData.sprites.front_default,
                name: pokemonData.name,
                types: pokemonData.types.map(type => type.type.name)
            };

            pokemonArray.push(pokemon);
        }

        return pokemonArray;
    } catch (error) {
        throw Error(`Desde controller getAllPokemons: ${error.message}`)
    }
}

module.exports = getAllPokemons