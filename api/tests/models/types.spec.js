const { expect } = require('chai');
const { Type, conn } = require('../../src/db.js');

describe('Pokemon model', () => {
    beforeEach(async () => {
        await conn.sync({ force: true })

    })
    it("should create a new type", async () => {
        //creo una instancia de mi modelo
        /* const Type = defineTypeModel(conn) */

        const type = await Type.create({

            name: "fifo"
        })

        expect(type.id).to.exist;
        expect(type.name).to.equal('fifo');
    })
})