const { getRandomJoke } = require('./jokes');

async function main() {
  try {
    const joke = await getRandomJoke();
    console.log("😂 Aquí tienes un chiste:");
    console.log(`${joke.setup} ... ${joke.punchline}`);
  } catch (error) {
    console.error("❌ Error al obtener el chiste:", error.message);
  }
}

main();


