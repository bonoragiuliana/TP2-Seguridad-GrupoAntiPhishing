const request = require('supertest');
const app = require('../src/server');

describe('Servidor', () => {
  it('GET /health responde con 200 y status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
