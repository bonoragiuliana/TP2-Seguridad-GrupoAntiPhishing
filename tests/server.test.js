jest.mock('../src/news', () => ({
  getNews: jest.fn().mockResolvedValue([
    "Noticia 1",
    "Noticia 2",
    "Noticia 3"
  ])
}));

const request = require('supertest');
const app = require('../src/server');

describe('Servidor básico', () => {
  it('GET /health responde con status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('GET /news responde con titulares', async () => {
    const res = await request(app).get('/news');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('ok', true);
    expect(res.body).toHaveProperty('headlines');
    expect(Array.isArray(res.body.headlines)).toBe(true);
  });
});

