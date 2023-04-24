const getPokemonById = require("../Controllers/getPokemonById")
const getPokemonByName = require("../Controllers/getPokemonByName")
const modifyPokemon = require("../Controllers/modifyPokemon")



const handlerModifyPokemon = async (req, res) => {
    const idPokemon = req.params.idPokemon
    const { name, image, hp, attack, defense, speed, types, height, weight } = req.body
    if (!name || !image || !hp || !attack || !defense || !types) res.status(400).send("Faltan datos para poder crear el pokemon")
    try {
        console.log(name);
        //Primero chequear si ya existe ese Pokemon
        const pokemonModified = await modifyPokemon({ idPokemon, name, image, hp, attack, defense, speed, types, height, weight })
        console.log(pokemonModified);
        res.status(201).json(pokemonModified);

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}


module.exports = handlerModifyPokemon