const { Subscription } = require("../../db");

const getAllSubscriptionsController = async () => {
    try {
   
        const AllSubscriptionsFound = await Subscription.findAll({
            where: { deleted: false }
        });

        return AllSubscriptionsFound;

    } catch (error) {
        console.error("Error searching for Subscriptions: ", error);
        throw error;
    }
};


module.exports = getAllSubscriptionsController;
