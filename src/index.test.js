const { getJoke } = require('./index');

// Mockeamos axios para no depender de la API externa en los tests
jest.mock('axios');
const axios = require('axios');

describe('getJoke', () => {
  it('debería devolver un chiste en formato string', async () => {
    // Simulamos la respuesta de la API
    axios.get.mockResolvedValue({
      data: { setup: '¿Qué hace una abeja en el gimnasio?', punchline: 'Zum-ba.' }
    });

    const joke = await getJoke();

    expect(joke).toBe('¿Qué hace una abeja en el gimnasio? - Zum-ba.');
  });
});
