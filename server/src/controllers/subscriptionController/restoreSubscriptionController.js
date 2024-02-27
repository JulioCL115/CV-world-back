const { Subscription } = require('../../db');

const restoreSubscriptionController = async (subscriptionId) => {
    try {
        const subscriptionFound = await Subscription.findByPk(subscriptionId);

        if (!subscriptionFound) {
            const error = new Error("Subscription not found for restoration");
            error.statusCode = 404; 
            throw error;
        }

        if (!subscriptionFound.deleted) {
            const error = new Error("Subscription is not deleted. Cannot restore.");
            error.statusCode = 400; 
            throw error;
        }
        
        await subscriptionFound.update({
            deleted: false 
        });

        return subscriptionFound;

    } catch (error) {
        console.error('Error restoring subscription:', error);
        throw error;
    }
}

module.exports = restoreSubscriptionController;
