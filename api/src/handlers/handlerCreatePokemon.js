const createPokemon = require("../Controllers/createPokemon")
const getPokemonByName = require("../Controllers/getPokemonByName")


const handlerCreatePokemon = async (req, res) => {
    const { name, image, hp, attack, defense, speed, types, height, weight } = req.body

    if (!name || !image || !hp || !attack || !defense || !types) res.status(400).send("Faltan datos para poder crear el pokemon")
    try {
        //Primero chequear si ya existe ese Pokemon
        const pokemonFinded = await getPokemonByName(name)
        if (pokemonFinded == "pokemon no encontrado") {
            const response = await createPokemon({ name, image, hp, attack, defense, speed, types, height, weight });
            res.status(201).json(response);
        }
        if (pokemonFinded !== "pokemon no encontrado") res.status(201).send(`Ya existe un Pokemon con ese nombre`)
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}






module.exports = handlerCreatePokemon