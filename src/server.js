// src/server.js
require('dotenv').config(); // 👈 carga variables del .env

const express = require('express');
const { getNews } = require('./news');

const app = express();

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/news', async (req, res) => {
  try {
    const result = await getNews();
    res.json({ ok: true, headlines: result });
  } catch (err) {
    console.error('Error /news:', err);
    res.status(500).json({ ok: false, error: 'No se pudo obtener noticias' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server escuchando en puerto ${port}`);
});



