const { Subscription } = require('../../db');

const getSubscriptionByIdController = async (subscriptionId) => {
    try {
        const subscriptionFound = await Subscription.findOne({
            where: { id: subscriptionId},
        });

        console.log(subscriptionFound);

        return subscriptionFound;
    } catch (error) {
        console.error('Error searching for Subscription by ID:', error);
        throw error;
    }
};

module.exports = getSubscriptionByIdController;