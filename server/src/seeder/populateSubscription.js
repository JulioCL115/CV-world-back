const { Subscription } = require("../db");

async function populateSubscription() {
  try {
    const subscriptions = await Subscription.bulkCreate([
      {
        name: "Basic",
        price: 10,
        included: ["limited access", "uploading two images"],
        notIncluded: ["music background", "some restriccions"],
      },
      {
        name: "Premium",
        price: 30,
        included: ["premium access", "music background"],
        notIncluded: ["some priveleges", "total access"],
      },
    ]);
    console.log("subscription table populated successfully");
  } catch (error) {
    console.error("Error populating subscription database:", error);
  }
}

module.exports = populateSubscription;
