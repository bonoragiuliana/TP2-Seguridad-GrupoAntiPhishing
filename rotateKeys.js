// rotateKeys.js
const fs = require('fs');

// Lista de claves simuladas
const keys = [
  "API_KEY_1_FAKE",
  "API_KEY_2_FAKE",
  "API_KEY_3_FAKE"
];

let index = 0;

// función para rotar claves
function rotateKey() {
  index = (index + 1) % keys.length;  // cambia circularmente
  const activeKey = keys[index];

  // Guardamos la clave activa en un archivo .json para que el resto de la app la use
  fs.writeFileSync("activeKey.json", JSON.stringify({ apiKey: activeKey }));

  console.log("Clave activa ahora:", activeKey);
}

// rotar cada 1 minuto (60000 ms)
setInterval(rotateKey, 60000);

// ejecutar una vez al inicio
rotateKey();

