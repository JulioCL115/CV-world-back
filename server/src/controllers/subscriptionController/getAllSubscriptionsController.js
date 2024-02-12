const { Subscription } = require("../../db");

const getAllSubscriptionsController = async () => {
    try {
   
        const allSubscriptionsFound = await Subscription.findAll({});

        return allSubscriptionsFound;

    } catch (error) {
        console.error("Error searching for Subscriptions: ", error);
        throw error;
    }
};


module.exports = getAllSubscriptionsController;
