const { Pokemon, Type } = require('../db');
const { Op } = require('sequelize');

const createPokemon = async ({ name, image, hp, attack, defense, speed, types, height, weight }) => {
    try {
        //Creo en la DB con los datos ingresados
        const newPokemon = await Pokemon.create({ name, image, hp, attack, defense, speed, height, weight })

        // Buscar los tipos en la DB
        // Op.in recorre el array y busca dentro de un array que coincidan 
        const typesDB = await Type.findAll({ where: { name: { [Op.in]: types } } });
        await newPokemon.addTypes(typesDB)
        // Buscar los tipos que no existan en la base de datos y crearlos
        const typesToCreate = types.filter((t) => !typesDB.find((tDB) => tDB.name === t));
        //Si hay types por agregar => tuki
        if (typesToCreate.length) {
            for (const tipo of typesToCreate) {
                const newType = await Type.create({ name: tipo });
                await newPokemon.addType(newType);
            }
        }
        // Buscar el nuevo Pokemon con los tipos incluidos
        const pokemonCreated = await Pokemon.findByPk(newPokemon.id, { include: { model: Type } });
        /* const pokemonCreated = await Pokemon.findAll({ where: name }); */

        return pokemonCreated
    } catch (error) {
        throw Error(`Desde controller createPokemon: ${error.message}`)
    }
}

module.exports = createPokemon