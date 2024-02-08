const { conn, Lenguaje } = require("../db");

async function populateLanguage() {
  try {
    // Establish database connection
    await conn.sync({ force: true }); // This will drop existing tables and recreate them

    const languages = await Lenguaje.bulkCreate([
      {
        name: "Español",
      },
      {
        name: "Ingles",
      },
    ]);
    console.log("language table populated successfully");
  } catch (error) {
    console.error("Error populating language database:", error);
  } 
  // finally {
  //   await conn.close();
  // }
}

module.exports = populateLanguage;
