const axios = require('axios');
const { Type } = require('../db');

const getAllTypes = () => {

    return new Promise((resolve, reject) => {
        axios.get("https://pokeapi.co/api/v2/type")
            .then(response => {
                let allTypes = []
                let promises = []
                for (const tipo of response.data.results) {
                    promises.push(Type.findOrCreate({ where: { name: tipo.name } })
                        .then(([dbType, created]) => {
                            if (created) {
                                allTypes.push(dbType);
                            }
                        })
                    )
                }
                Promise.all(promises).then(() => {
                    if (!allTypes.length) {
                        Type.findAll().then(types => {
                            resolve(types);
                        });
                    } else {
                        resolve(allTypes);
                    }
                });
            })
            .catch(error => {
                reject(new Error(`Desde controller getAllTypes: ${error.message}`))
            })
    });
}

module.exports = getAllTypes