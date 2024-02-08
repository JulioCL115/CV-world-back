const { Category } = require("../db");

async function populateCategory() {
  try {

    const categories = await Category.bulkCreate([
      {
        name: "Medico",
      },
      {
        name: "Ingeniero",
      },
      {
        name: "Maestro",
      },
    ]);
    console.log("Category table populated successfully");
  } catch (error) {
    console.error("Error populating category database:", error);
  } 
}

module.exports = populateCategory;
