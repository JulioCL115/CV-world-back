const { Lenguaje } = require("../db");

async function populateLanguage() {
  try {
    const languages = await Lenguaje.bulkCreate([
      {
        name: "Español",
      },
      {
        name: "Inglés",
      },
    ]);

    console.log("language table populated successfully");
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      console.log("Users table already populated");
      return;
  }
    console.error("Error populating language database");
  };
};

module.exports = populateLanguage;