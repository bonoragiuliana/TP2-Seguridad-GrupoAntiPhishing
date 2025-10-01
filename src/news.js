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
        country: 'ar',       // país
        language: 'es',      // idioma
        pageSize: 3,         // cantidad de noticias
        apiKey: API_KEY
      }
    });

    const articles = response.data.articles;

    // Si no hay noticias, devolver array vacío
    if (!articles || articles.length === 0) {
      return [];
    }

    // Devolver array directamente con los títulos
    return articles.map((art, index) => `${index + 1}. ${art.title}`);

  } catch (error) {
    console.error("Error al obtener noticias:", error.message);
    // En caso de error, devolver array vacío para no romper el endpoint
    return [];
  }
}

module.exports = { getNews };






