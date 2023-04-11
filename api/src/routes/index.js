const { Router } = require('express');
const axios = require("axios")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const getAllPokemons = require("../Controllers/getAllPokemons")
const getPokemonById = require("../Controllers/getPokemonById")
const getPokemonByName = require("../Controllers/getPokemonByName")
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información
router.get("/pokemons", async (req, res) => {
    try {
        const response = await getAllPokemons()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get("/pokemons/name", async (req, res) => {
    const { name } = req.query
    console.log(name);
    try {
        const response = await getPokemonByName(name);

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
})
router.get("/pokemons/:idPokemon", async (req, res) => {
    const idPokemon = req.params.idPokemon
    console.log(idPokemon);
    try {
        const response = await getPokemonById(idPokemon);

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
})





module.exports = router;
