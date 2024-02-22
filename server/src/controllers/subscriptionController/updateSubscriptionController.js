const { Subscription } = require('../../db');

const updateSubscriptionController = async (name, price, included, notIncluded, subscriptionId) => {
    try {

        const subscriptionFound = await Subscription.findByPk(subscriptionId);

        if (!subscriptionFound) {
            const error = new Error("Subscription not found");
            error.statusCode = 404; 
            throw error;
        }

        if(subscriptionFound.delete) {
            const error = new Error("Cannot update a deleted Subscription");
            error.statusCode = 400; 
            throw error;
        }

        await subscriptionFound.update({
            name,
            price,
            included,
            notIncluded
        });

        return subscriptionFound;

    } catch (error) {
        console.error('Error updating subscription:', error);
        throw error;
    }
}

module.exports = updateSubscriptionController;
