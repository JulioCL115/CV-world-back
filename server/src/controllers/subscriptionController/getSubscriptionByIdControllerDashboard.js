const { Subscription } = require('../../db');

const getSubscriptionByIdControllerDashboard = async (subscriptionId) => {
    try {
        const subscriptionFound = await Subscription.findByPk(subscriptionId);

        return subscriptionFound;

    } catch (error) {
        console.error('Error searching for Subscription by ID:', error);
        throw error;
    }
};

module.exports = getSubscriptionByIdControllerDashboard;