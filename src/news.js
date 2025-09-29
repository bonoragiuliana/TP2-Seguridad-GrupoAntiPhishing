const axios = require('axios');
require('dotenv').config();   // 👈 esto carga las variables de entorno desde .env

const API_KEY = process.env.NEWS_API_KEY;  // la clave va en las variables de entorno
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

async function getNews() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country: 'ar',     // noticias de Argentina
        language: 'es',    // en español
        pageSize: 3,       // cantidad de noticias
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



