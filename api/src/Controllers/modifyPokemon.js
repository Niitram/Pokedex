const { Pokemon, Type } = require('../db');


const modifyPokemon = ({ idPokemon, name, image, hp, attack, defense, speed, types, height, weight }) => {

    return new Promise((resolve, reject) => {
        Pokemon.findByPk(idPokemon)
            .then(pokemon => {
                Type.findAll({ where: { name: types } })
                    .then(typesToUpdate => {
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
                        pokemon.update(updatedPokemonData)
                            .then(() => {
                                pokemon.setTypes(typesToUpdate)
                                    .then(() => {
                                        pokemon.save()
                                            .then(() => {
                                                resolve(pokemon);
                                            })
                                    })
                            })
                    })
            })
            .catch(error => {
                reject(new Error(`Desde controller modifyPokemon: ${error.message}`))
            })
    });


}

module.exports = modifyPokemon