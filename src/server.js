require('dotenv').config();

const express = require('express');
const { getNews } = require('./news');

const app = express();

// Ruta de health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Ruta de noticias
app.get('/news', async (req, res) => {
  try {
    const result = await getNews();

    // Si no hay noticias, enviamos mensaje amigable
    if (!result || result.length === 0) {
      return res.json({
        ok: true,
        headlines: [],
        message: "No se encontraron noticias porque no hay nada nuevo."
      });
    }

    // Si hay noticias, las enviamos normalmente
    res.json({ ok: true, headlines: result });

  } catch (err) {
    console.error('Error /news:', err);
    res.status(500).json({ ok: false, error: 'No se pudo obtener noticias' });
  }
});

// Solo levantar el server si este archivo se ejecuta directamente
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server escuchando en puerto ${port}`);
  });
}

module.exports = app;





