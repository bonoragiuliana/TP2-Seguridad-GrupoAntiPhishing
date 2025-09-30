const axios = require('axios');

const BASE_URL = 'https://newsapi.org/v2/top-headlines';

async function getNews() {
  try {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY) {
      throw new Error("Falta NEWS_API_KEY en variables de entorno");
    }

    const response = await axios.get(BASE_URL, {
      params: {
        country: 'ar',
        language: 'es',
        pageSize: 3,
        apiKey: API_KEY
      }
    });

    const articles = response.data.articles;
    if (!articles || articles.length === 0) {
      return "No se encontraron noticias en español.";
    }

    return articles.map((art, index) => `${index + 1}. ${art.title}`).join('\n');
  } catch (error) {
    console.error("Error al obtener noticias:", error.message);
    return "No se pudo obtener noticias.";
  }
}

module.exports = { getNews };




