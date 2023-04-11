const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokemonById = async (idPokemon) => {
    try {
        //Primero se busca en la BDD
        let pokemon = await Pokemon.findByPk(idPokemon, { include: Type });
        //Sino va a la API
        if (!pokemon) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const pokemonData = response.data;
            const pokemonTypes = pokemonData.types.map((type) => type.type.name);

            //creo en la BDD el Pokemon
            pokemon = await Pokemon.create({
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                hp: pokemonData.stats[0].base_stat,
                attack: pokemonData.stats[1].base_stat,
                defense: pokemonData.stats[2].base_stat,
                speed: pokemonData.stats[5].base_stat,
            });
            //Recorro el array de types,busco en la base de datos si ya existe un registro del tipo y sino se crea
            for (const type of pokemonTypes) {
                const [dbType] = await Type.findOrCreate({ where: { name: type } });
                //se asocia el pokemon con ese tipo
                await pokemon.addType(dbType);
            }

            pokemon = await Pokemon.findByPk(idPokemon, { include: Type });
        }
        return pokemon
    } catch (error) {
        throw Error(`Desde controller getPokemonById: ${error.message}`)
    }
}

module.exports = getPokemonById