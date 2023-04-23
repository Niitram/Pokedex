const deletePokemon = require("../Controllers/deletePokemon")


const handlerDeletePokemon = async (req, res) => {
    const { idPokemon } = req.params
    try {
        const response = await deletePokemon(idPokemon)
        if (response) res.status(200).send("Pokemon deleted succesfulyd")
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = handlerDeletePokemon