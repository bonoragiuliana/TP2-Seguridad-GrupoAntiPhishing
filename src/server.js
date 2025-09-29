const express = require('express');
const { getNews } = require('./news');
require('dotenv').config();

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

app.get('/news', async (req, res) => {
  const headlines = await getNews();
  res.json({ ok: true, headlines });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});


