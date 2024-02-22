const { Subscription } = require("../db");

async function populateSubscription() {
  try {
    const subscriptions = await Subscription.bulkCreate([
      {
        name: "Plan Básico",
        price: 0,
        included: ["Poder ver y comentar cientos de currículums",
          "Ser visto por las mejores empresas"],
        notIncluded: ["Posibilidad de cargar múltiples currículums",
          "Aparecer primero en las búsquedas",
          "Convertirte en usuario verificado"],
      },
      {
        name: "Plan Premium",
        price: 2000,
        included: ["Poder ver y comentar cientos de currículums",
          "Ser visto por las mejores empresas",
          "Posibilidad de cargar múltiples currículums",
          "Aparecer primero en las búsquedas",
          "Convertirte en usuario verificado"],
        notIncluded: null,
      },
    ]);

    console.log("subscription table populated successfully");
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      console.log("Users table already populated");
      return;
    }
    console.error("Error populating subscription database");
  };
};

module.exports = populateSubscription;