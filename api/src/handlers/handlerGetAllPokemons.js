const getAllPokemons = require("../Controllers/getAllPokemons")

const handlerGetAllPokemons = async (req, res) => {
    try {
        const response = await getAllPokemons()
        res.status(200).json(response)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

module.exports = handlerGetAllPokemons