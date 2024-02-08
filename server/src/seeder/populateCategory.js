const { conn, Category } = require("../db");

async function populateCategory() {
  try {
    // Establish database connection
    await conn.sync({ force: true }); // This will drop existing tables and recreate them

    const categories = await Category.bulkCreate([
      {
        name: "Medico",
      },
      {
        name: "Ingeniero",
      },
    ]);
    console.log("Category table populated successfully");
  } catch (error) {
    console.error("Error populating category database:", error);
  } 
  // finally {
  //   await conn.close();
  // }
}

module.exports = populateCategory;
