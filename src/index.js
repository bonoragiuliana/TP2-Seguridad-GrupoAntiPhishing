// src/index.js
require('dotenv').config(); // 👈 carga variables del .env

const { getNews } = require('./news');

(async () => {
  const noticia = await getNews();
  console.log("Última noticia en español:");
  console.log(noticia);
})();

console.log("Probando pipeline con clave API...");





