const { Pokemon } = require('../db');

const deletePokemon = async (id) => {
    const pokemon = await Pokemon.findByPk(id);
    await pokemon.removeType(); // Eliminar la relación en la tabla intermedia
    return await pokemon.destroy();
}


module.exports = deletePokemon;