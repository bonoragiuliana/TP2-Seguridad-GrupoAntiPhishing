const axios = require('axios');

async function getRandomJoke() {
  const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
  return response.data;
}

module.exports = { getRandomJoke };
