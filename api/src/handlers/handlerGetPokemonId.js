const getPokemonById = require("../Controllers/getPokemonById")


const handlerGetPokemonId = async (req, res) => {
    const idPokemon = req.params.idPokemon
    try {
        const response = await getPokemonById(idPokemon);
        res.status(201).json(response);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}


module.exports = handlerGetPokemonId