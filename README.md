# TRABAJO PRÁCTICO N2 - PARTE A - SEGURIDAD

Este proyecto consiste en una API desarrollada en Node.js que se conecta con la NewsAPI para obtener titulares de noticias en español. Además, implementa un pipeline CI/CD con GitHub Actions, gestión segura de claves mediante secretos, despliegue en la nube con Render, y prácticas básicas de seguridad como rotación de claves simulada.

## Tabla de Contenidos: 

1. [Descripción](*descripcion)
2. [Características](*caracteristicas)
3. [Tecnologías utilizadas](*tecnologias-utilizadas)
4. [Estructura del proyecto](*estructura-del-proyecto)
5. [Instalación](*instalacion)
6. [Uso](*uso)

## Descripción: 

El objetivo de este proyecto es demostrar la construcción de una aplicación segura en Node.js que:

- Consume datos de una API externa (NewsAPI).
- Incluye pruebas unitarias para garantizar su correcto funcionamiento.
- Utiliza un pipeline CI/CD configurado con GitHub Actions.
- Maneja claves de API de manera segura a través de GitHub Secrets.
- Está desplegada en Render, de manera que la API es accesible públicamente.

La aplicación expone dos endpoints principales:

- **/health**: Verifica que el servidor esté corriendo.
- **/news**: Obtiene los titulares de noticias en español desde NewsAPI.

## Características: 

- Integración con NewsAPI para obtener titulares de noticias.
- Pruebas unitarias con Jest para garantizar la calidad del código.
- CI/CD con GitHub Actions, que ejecuta automáticamente build, test y health check.
- Gestión segura de claves con variables de entorno y GitHub Secrets.
- Contenerización con Docker para ejecutar la app en un entorno aislado.
- Despliegue en Render, accesible en la nube.
- Rotación de claves simulada mediante un script.

## Tecnologías utilizadas: 

- Node.js: Entorno de ejecución.
- Express.js: Framework web.
- Axios: Cliente HTTP para consumir la API externa.
- Jest + Supertest: Testing unitario e integración.
- dotenv: Manejo de variables de entorno.
- GitHub Actions: CI/CD.
- Docker: Contenerización.
- Render: Despliegue en la nube.

## Estructura del proyecto

```tree
/parteA
├── .github/workflows
│   └── ci-cd.yml        # Configuración de CI/CD
├── src
│   ├── server.js        # Configuración del servidor Express
│   ├── news.js          # Lógica para consumir la NewsAPI
│   └── index.js         # Script de prueba: ejecuta getNews y muestra en consola
├── tests
│   ├── app.test.js      # Pruebas para endpoint raíz
│   └── server.test.js   # Pruebas para endpoint /news
├── .env                 # Variables de entorno (no se sube a GitHub)
├── .gitignore           # Archivos y carpetas ignorados por Git
├── activateKey.json     # Script para rotación simulada de claves
├── docker-compose.yml   # Configuración de Docker
├── Dockerfile           # Imagen de la aplicación
├── package.json         # Dependencias y scripts


```

## Instalación

Para instalar y ejecutar el proyecto de forma local, sigue estos pasos:

### Opción 1: Ejecución Local

1.  **Clonar el repositorio y entrar al directorio:**

    ```bash
    git clone https://github.com/bonoragiuliana/TP2-Seguridad-GrupoAntiPhishing.git
    cd carpeta
    ```

2.  **Instalar las dependencias:**

    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API:

    ```bash
    NEWS_API_KEY=api_key_de_newsapi
    ```

4.  **Ejecutar la aplicación:**

    ```bash
    npm run start
    ```

---

### Opción 2: Ejecución con Docker

1. **Hacer pasos 1,2 y 3**.
2. **Correr contenedor:**

```bash
docker-compose up --build
```


## Uso

Una vez corriendo el servidor (por defecto en http://localhost:3000), se pueden usar los siguientes endpoints:

1. **Verificar salud del servidor:**

```bash
curl http://localhost:3000/health
```

Respuesta:

```bash
{ "status": "ok" }
```

2. **Obtener titulares de noticias:**

```bash
curl http://localhost:3000/news
```

Ejemplo de respuesta:

```bash
{
  "ok": true,
  "headlines": [
    "1. Primera noticia...",
    "2. Segunda noticia...",
    "3. Tercera noticia..."
  ]
}
```

En caso de que no haya noticias nuevas:
```bash
{
  "ok": true,
  "headlines": [],
  "message": "No se encontraron noticias porque no hay nada nuevo."
}
```

En caso de error (por ejemplo API Key inválida):
```bash
{
  "ok": false,
  "error": "No se pudieron obtener noticias"
}
```
