const getPokemonByName = require("../Controllers/getPokemonByName")


const handlerGetPokemonByName = async (req, res) => {
    const { name } = req.query
    if (name) {
        try {
            const response = await getPokemonByName(name);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = handlerGetPokemonByName