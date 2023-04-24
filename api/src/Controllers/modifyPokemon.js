const { Pokemon, Type } = require('../db');


const modifyPokemon = async ({ idPokemon, name, image, hp, attack, defense, speed, types, height, weight }) => {
    try {
        const pokemon = await Pokemon.findByPk(idPokemon);
        const typesToUpdate = await Type.findAll({ where: { name: types } });
        const updatedPokemonData = {
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            PokemonTypes: typesToUpdate
        };
        await pokemon.update(updatedPokemonData);
        await pokemon.setTypes(typesToUpdate);
        await pokemon.save();
        return pokemon
    } catch (error) {
        throw Error(`Desde controller modifyPokemon: ${error.message}`)
    }
}

module.exports = modifyPokemon