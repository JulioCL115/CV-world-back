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
        console.error("Error populating language database:", error);
    };
};

module.exports = populateLanguage;