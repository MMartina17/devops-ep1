const request = require('supertest');
const app = require('../app');

describe('Pruebas del microservicio', () => {
    test('GET / debe responder con estado 200', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Microservicio DevOps EP1');
    });
}); 