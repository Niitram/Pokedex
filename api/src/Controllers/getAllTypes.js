const axios = require('axios');
const { Type } = require('../db');

const getAllTypes = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/type")
        const allTypes = []
        for (const tipo of response.data.results) {
            //en tipo.name tengo el nombre del type
            allTypes.push(tipo.name)
            await Type.create({ name: tipo.name })
        }
        return allTypes
    } catch (error) {
        throw Error(`Desde controller getAllTypes: ${error.message}`)
    }
}

module.exports = getAllTypes