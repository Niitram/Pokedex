const getPokemonById = require("../Controllers/getPokemonById")


const handlerGetPokemonId = async (req, res) => {
    const idPokemon = req.params.idPokemon
    try {
        const response = await getPokemonById(idPokemon);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}


module.exports = handlerGetPokemonId