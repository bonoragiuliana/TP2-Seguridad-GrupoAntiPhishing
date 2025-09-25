# Usamos la imagen oficial de Node.js
FROM node:20

# Creamos un directorio dentro del contenedor para la app
WORKDIR /usr/src/app

# Copiamos el package.json (cuando exista) y luego instalamos dependencias
COPY package*.json ./

RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto 3000 (por ejemplo)
EXPOSE 3000

# Comando por defecto
CMD ["node", "index.js"]
