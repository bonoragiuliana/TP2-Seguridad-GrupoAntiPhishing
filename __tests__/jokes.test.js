const { getRandomJoke } = require('../src/jokes');
const axios = require('axios');

// Mock de axios para no depender de la API real en los tests
jest.mock('axios');

test('getRandomJoke devuelve un chiste con setup y punchline', async () => {
  const fakeJoke = { setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" };
  axios.get.mockResolvedValue({ data: fakeJoke });

  const joke = await getRandomJoke();

  expect(joke).toHaveProperty('setup');
  expect(joke).toHaveProperty('punchline');
  expect(joke.setup).toBe("Why did the chicken cross the road?");
  expect(joke.punchline).toBe("To get to the other side!");
});
