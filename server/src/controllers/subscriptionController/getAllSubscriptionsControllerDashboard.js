const { Subscription } = require("../../db");

const getAllSubscriptionsControllerDashboard = async () => {
    try {
        const AllSubscriptionsFound = await Subscription.findAll({});

        return AllSubscriptionsFound;

    } catch (error) {
        console.error("Error searching for Subscriptions: ", error);
        throw error;
    }
};


module.exports = getAllSubscriptionsControllerDashboard;
