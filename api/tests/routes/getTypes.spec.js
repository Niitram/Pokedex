const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Type, conn } = require('../../src/db.js');

const agent = session(app);

describe('Type routes get all Types', () => {
    before(() => conn.authenticate()
        .catch((err) => {
            console.error(err.mesagge);
        }));
    beforeEach(() => Type.sync({ force: true }));
    describe('GET /types', () => {
        it('should get 200 and return an array of Types', async () => {
            await agent.get('/types')
                .expect(200)
                .then((res) => {
                    expect(res.body).to.be.an('array');
                    expect(res.body).to.have.lengthOf(20);
                });
        });
    });
});