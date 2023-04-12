const { Router } = require('express');
const axios = require("axios")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const getAllPokemons = require("../Controllers/getAllPokemons")
const getPokemonById = require("../Controllers/getPokemonById")
const getPokemonByName = require("../Controllers/getPokemonByName")
const createPokemon = require("../Controllers/createPokemon")
const getAllTypes = require("../Controllers/getAllTypes")
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
    if (name) {
        try {
            const response = await getPokemonByName(name);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
})
router.get("/pokemons/:idPokemon", async (req, res) => {
    const idPokemon = req.params.idPokemon
    try {
        const response = await getPokemonById(idPokemon);
        res.status(201).json(response);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
})

router.post("/pokemons", async (req, res) => {
    const { name, image, hp, attack, defense, speed, types, height, weight, id } = req.body
    console.log(speed, types, height, weight, id);
    if (!name || !image || !hp || !attack || !defense || !speed || !types) res.status(400).send("Faltan datos para poder crear el pokemon")
    try {
        const response = await createPokemon({ id, name, image, hp, attack, defense, speed, types, height, weight });
        res.status(201).json(response);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
})


router.get("/types", async (req, res) => {
    try {
        const response = await getAllTypes()
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})





module.exports = router;
