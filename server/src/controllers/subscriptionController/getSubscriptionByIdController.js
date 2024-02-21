const { Subscription } = require('../../db');

const getSubscriptionByIdController = async (subscriptionId) => {
    try {
        console.log("CV ID: ", cvId);

        const subscriptionFound = await Cv.findOne({
            where: { id: subscriptionId},
        });

        console.log(subscriptionFound);

        return subscriptionFound;
    } catch (error) {
        console.error('Error searching for CV by ID:', error);
        throw error;
    }
};

module.exports = getSubscriptionByIdController;