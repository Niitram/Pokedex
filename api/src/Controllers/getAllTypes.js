const axios = require('axios');
const { Type } = require('../db');

const getAllTypes = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/type")
        let allTypes = []
        for (const tipo of response.data.results) {
            const [dbType, created] = await Type.findOrCreate({ where: { name: tipo.name } });
            if (created) {
                allTypes.push(dbType);
            }
        }
        if (!allTypes.length) allTypes = await Type.findAll()
        return allTypes
    } catch (error) {
        throw Error(`Desde controller getAllTypes: ${error.message}`)
    }
}

module.exports = getAllTypes