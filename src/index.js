const { getNews } = require('./news');

(async () => {
  const noticia = await getNews();
  console.log("Última noticia en español:");
  console.log(noticia);
})();

//probando funcionamiento


