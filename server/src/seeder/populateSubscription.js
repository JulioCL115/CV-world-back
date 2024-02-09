const { Subscription } = require("../db");

async function populateSubscription() {
  try {
    const subscriptions = await Subscription.bulkCreate([
      {
        name: "Basic",
        price: 0,
        included: ["Poder ver y comentar cientos de currículums",
          "Ser visto por las mejores empresas"],
        notIncluded: ["Posibilidad de cargar múltiples currículums",
          "Aparecer primero en las búsquedas",
          "Convertirte en usuario verificado"],
      },
      {
        name: "Premium",
        price: 30,
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
    console.error("Error populating subscription database:", error);
  };
};

module.exports = populateSubscription;
