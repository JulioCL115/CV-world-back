const { Subscription } = require('../../db');

const deleteSubscriptionController = async (subscriptionId) => {
    try {
        const subscriptionFound = await Subscription.findByPk(subscriptionId);

        if (!subscriptionFound) {
            const error = new Error("Subscription not found for deleting");
            error.statusCode = 404; 
            throw error;
        }

        if (subscriptionFound.deleted) {
            const error = new Error("Subscription already deleted");
            error.statusCode = 400; 
            throw error;
        }

        await subscriptionFound.update(
            { deleted: true }
        );

        return subscriptionFound;

    } catch (error) {
        console.error('Error updating subscription:', error);
        throw error;
    }
}

module.exports = deleteSubscriptionController;

