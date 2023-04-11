const axios = require('axios');
const { Op } = require('sequelize');
const { Pokemon, Type } = require('../db');

const getPokemonByName = async (name) => {
    try {
        let result = [];
        // Buscar en la base de datos
        const pokemonsDB = await Pokemon.findAll({
            //donde name coincida con name
            where: { name: { [Op.iLike]: `%${name}%` } },
            //incluir
            include: { model: Type },
        });
        if (pokemonsDB.length > 0) {
            result.push(...pokemonsDB);
        } else {
            // Buscar en la API
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            const pokemonData = response.data;
            const pokemon = {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                hp: pokemonData.stats[0].base_stat,
                attack: pokemonData.stats[1].base_stat,
                defense: pokemonData.stats[2].base_stat,
                speed: pokemonData.stats[5].base_stat,
                types: pokemonData.types.map((t) => t.type.name),
            };
            result.push(pokemon);
        }


        if (result.length === 0) {
            throw Error('No se encontraron resultados para la búsqueda');
        } else {
            return result
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Hubo un error en el servidor');
    }
};

module.exports = getPokemonByName