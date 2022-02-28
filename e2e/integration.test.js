const request = require("supertest");
const fetch = require('jest-fetch-mock');
jest.setMock('node-fetch', fetch);
let server;

describe('Test API function ', () => {

    beforeEach(() => {
        server = require('../src/index');
        jest.clearAllMocks();
    });

    afterEach(async () => {
        await server.close();
    })

    describe('GET temprature/:id', () => {
        it('should return data for valid id', async () => {
            fetch.mockResponse(JSON.stringify({
                id: "1",
                temperature: 6
            }));

            let answer = await request(server).get('/temperature/1');
            expect(answer.text).toBe("{\"id\":\"1\",\"temperature\":6}");
        });
    })
})