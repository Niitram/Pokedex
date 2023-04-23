const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);

describe('Pokemon routes get all pokemons', () => {
    before(() => conn.authenticate()
        .catch((err) => {
            console.error(err.mesagge);
        }));
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('GET /pokemons', () => {
        beforeEach(() => Pokemon.destroy({ where: {} }));
        it('should get 200 and return an array of pokemons', async () => {
            await Pokemon.sync({ force: true });
            await Pokemon.create({ name: 'Pikachu', hp: 100, attack: 100, defense: 100, speed: 100, height: 100, weight: 100, image: 'https://cdn.bulbagarden.net/upload/thumb/9/98/025Pikachu.png/800px-025Pikachu.png' });
            await Pokemon.create({ name: 'Bulbasaur', hp: 100, attack: 100, defense: 100, speed: 100, height: 100, weight: 100, image: 'https://cdn.bulbagarden.net/upload/thumb/9/98/025Pikachu.png/800px-025Pikachu.png' });

            await agent.get('/pokemons')
                .expect(200)
                .then((res) => {
                    expect(res.body).to.be.an('array');
                    expect(res.body).to.have.lengthOf(62);
                });
        });
        beforeEach(() => Pokemon.destroy({ where: {} }));
        it('should return an empty array if there are no pokemons', async () => {
            await Pokemon.sync({ force: true });
            await Pokemon.destroy({ where: {} });
            await agent.get('/pokemons')
                .expect(200)
                .then((res) => {
                    expect(res.body).to.be.an('array');
                    expect(res.body).to.have.lengthOf(60);
                });
        });
    });
});