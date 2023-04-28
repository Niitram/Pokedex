const { Pokemon, Type } = require('../db');
const getPokemonByName = require('./getPokemonByName');


const modifyPokemon = ({ idPokemon, name, image, hp, attack, defense, speed, types, height, weight }) => {

    return new Promise((resolve, reject) => {
        getPokemonByName(name)
            .then(pokemon => {
                const pokemonExists = Array.isArray(pokemon) ?
                    pokemon.find(p => p.id !== idPokemon && p.name === name) :
                    pokemon.name === name && pokemon.id !== idPokemon;
                if (pokemonExists) {
                    resolve("Pokemon already exists");
                    return;
                } else {
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
                                                        });
                                                });
                                        });
                                });
                        })
                }
            })
            .catch(error => {
                reject(new Error(`Desde controller modifyPokemon: ${error.message}`));
            });
    });


}

module.exports = modifyPokemon